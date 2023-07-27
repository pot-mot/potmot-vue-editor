import katex from 'katex';
import MarkdownIt from 'markdown-it';
import {createVNode, VNode} from "vue";
import {createErrVNode} from "../vNode/err";

interface StateInline {
    src: string;
    pos: number;
    posMax: number;
    pending: string;
    push: any;
}

interface StateBlock {
    bMarks: number[];
    tShift: number[];
    eMarks: number[];
    blkIndent: number;
    src: string;
    push: any;
    getLines: any;
    line: number;
}

interface Token {
    type: string;
    markup: string;
    content: string;
    block: boolean;
    map: number[];
}

export const mathInline = (state: StateInline, silent: boolean): boolean => {
    let start, match, token, res, pos;

    if (state.src[state.pos] !== "$") {
        return false;
    }

    res = isValidDelim(state, state.pos);
    if (!res.can_open) {
        if (!silent) {
            state.pending += "$";
        }
        state.pos += 1;
        return true;
    }

    // 首先查找并忽略所有正确转义的定界符
    // 这个循环要假设第一个反引号不能是 state.src 中的开头字符，这是已知的，因为我们已经找到了一个开启的定界符。
    start = state.pos + 1;
    match = start;
    while ((match = state.src.indexOf("$", match)) !== -1) {
        // 找到了潜在的 $，查找转义字符，pos 将指向第一个非转义字符
        pos = match - 1;
        while (state.src[pos] === "\\") {
            pos -= 1;
        }

        // 转义字符数是偶数，找到了可能的结束定界符
        if (((match - pos) % 2) == 1) {
            break;
        }
        match += 1;
    }

    // 没找到结束定界符。消耗 $ 并继续。
    if (match === -1) {
        if (!silent) {
            state.pending += "$";
        }
        state.pos = start;
        return true;
    }

    // 检查是否为空内容，例如：$$. 不解析。
    if (match - start === 0) {
        if (!silent) {
            state.pending += "$$";
        }
        state.pos = start + 1;
        return true;
    }

    // 检查是否是有效的结束定界符
    res = isValidDelim(state, match);
    if (!res.can_close) {
        if (!silent) {
            state.pending += "$";
        }
        state.pos = start;
        return true;
    }

    if (!silent) {
        token = state.push('math_inline', 'math', 0);
        token.markup = "$";
        token.content = state.src.slice(start, match);
    }

    state.pos = match + 1;
    return true;
}

export const mathBlock = (state: StateBlock, start: number, end: number, silent: boolean): boolean => {
    let firstLine, lastLine, next, lastPos, found = false, token,
        pos = state.bMarks[start] + state.tShift[start],
        max = state.eMarks[start]

    if (pos + 2 > max) {
        return false;
    }
    if (state.src.slice(pos, pos + 2) !== '$$') {
        return false;
    }

    pos += 2;
    firstLine = state.src.slice(pos, max);

    if (silent) {
        return true;
    }
    if (firstLine.trim().slice(-2) === '$$') {
        // Single line expression
        firstLine = firstLine.trim().slice(0, -2);
        found = true;
    }

    for (next = start; !found;) {

        next++;

        if (next >= end) {
            break;
        }

        pos = state.bMarks[next] + state.tShift[next];
        max = state.eMarks[next];

        if (pos < max && state.tShift[next] < state.blkIndent) {
            // non-empty line with negative indent should stop the list:
            break;
        }

        if (state.src.slice(pos, max).trim().slice(-2) === '$$') {
            lastPos = state.src.slice(0, max).lastIndexOf('$$');
            lastLine = state.src.slice(pos, lastPos);
            found = true;
        }

    }

    state.line = next + 1;

    token = state.push('math_block', 'math', 0);
    token.block = true;
    token.content = (firstLine && firstLine.trim() ? firstLine + '\n' : '')
        + state.getLines(start + 1, next, state.tShift[start], true)
        + (lastLine && lastLine.trim() ? lastLine : '');
    token.map = [start, state.line];
    token.markup = '$$';
    return true;
}

function isValidDelim(state: StateInline, pos: number) {
    let prevChar, nextChar,
        max = state.posMax,
        can_open = true,
        can_close = true;

    prevChar = pos > 0 ? state.src.charCodeAt(pos - 1) : -1;
    nextChar = pos + 1 <= max ? state.src.charCodeAt(pos + 1) : -1;

    if (prevChar === 0x20 || prevChar === 0x09 || prevChar === 0x0a || (prevChar >= 0x30 && prevChar <= 0x39)) {
        can_close = false;
    }
    if (nextChar === 0x20 || nextChar === 0x09 || nextChar === 0x0a) {
        can_open = false;
    }

    return {
        can_open: can_open,
        can_close: can_close
    };
}

interface Options {
    throwOnError?: boolean;
    displayMode?: boolean;
}

export const MarkdownItKatex = (md: MarkdownIt, options: Options = {}) => {
    options = options || {};

    const katexInline = (latex: string) => {

        try {
            return ;
        } catch (error) {
            if (options.throwOnError) {
                console.log(error);
            }
            return latex;
        }
    };

    const inlineRenderer = (tokens: Token[], idx: number): VNode => {
        options.displayMode = false;
        try {
            const result = katex.renderToString(tokens[idx].content, options);
            return createVNode('span', {innerHTML: result, class: 'katex'});
        } catch (e) {
            return createErrVNode(e, 'katex render fail')
        }
    };

    const blockRenderer = function (tokens: Token[], idx: number): VNode {
        options.displayMode = true;
        try {
            const result = katex.renderToString(tokens[idx].content, options);
            return createVNode('p', {innerHTML: result, class: 'katex'});
        } catch (e) {
            return createErrVNode(e, 'katex render fail')
        }
    }

    md.inline.ruler.after('escape', 'math_inline', mathInline);
    md.block.ruler.after('blockquote', 'math_block', mathBlock, {
        alt: ['paragraph', 'reference', 'blockquote', 'list']
    });
    // @ts-ignore
    md.renderer.rules['math_inline'] = inlineRenderer;
    // @ts-ignore
    md.renderer.rules['math_block'] = blockRenderer;
}