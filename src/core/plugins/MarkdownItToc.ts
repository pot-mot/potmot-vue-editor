import {createVNode, VNode} from 'vue'
import Markdown from 'markdown-it'
import Token from "markdown-it/lib/token";
import StateInline from 'markdown-it/lib/rules_inline/state_inline'
import {slugifyHeadingId} from "../../utils/common/text";

interface MarkdownItTocOptions {
    level: number[],
    containerClass: string,
    slugify: (text: string) => string,
    markerPattern: RegExp,
    listType: string,
    itemType: string,
    format: (text: string) => string,
    full: boolean,
}

interface HeadingToken {
    content: string,
    level: number,
    id: string,
    children: HeadingToken[]
}

const defaults: MarkdownItTocOptions = {
    level: [2, 3],
    containerClass: 'table-of-contents',
    slugify: slugifyHeadingId,
    markerPattern: /^\[+toc]+(.*?)$/im,
    listType: 'ol',
    itemType: 'li',
    format: (str) => str,
    full: false
}

const getHeadingId = (level: number, content: string, index: number) => {
    return `heading${level}-${content}-${index}`
}

const buildHeadingTree = (tokens: HeadingToken[]): HeadingToken => {
    const root: HeadingToken = { content: "", level: 0, id: "", children: [] };
    const levels: HeadingToken[] = [root];

    for (const token of tokens) {
        const node: HeadingToken = { ...token, children: [] };

        while (node.level <= levels[levels.length - 1].level) {
            levels.pop();
        }

        levels[levels.length - 1].children.push(node);
        levels.push(node);
    }

    return root;
}

const headingToVNode = (parent: HeadingToken, listType: string, itemType: string): VNode => {
    const {id, content} = parent
    const children = parent.children.map(child => headingToVNode(child, listType, itemType))
    return createVNode(itemType, {}, [
        createVNode('a', {href: `#${id}`, innerHTML: content}),
        createVNode(listType, {}, children)
    ])
}

export const MarkdownItToc = (md: Markdown, options?: Partial<MarkdownItTocOptions>) => {
    const opts = Object.assign({}, defaults, options)
    const tocRegexp = opts.markerPattern;
    let headingTokens: HeadingToken[] = [];

    const toc = (state: StateInline, silent: boolean) => {
        // 在验证模式下不运行任何对
        if (silent) {
            return false;
        }

        const match = tocRegexp.exec(state.src.slice(state.pos));
        const filteredMatch = match ? match.filter((m: any) => !!m) : [];

        // 没有匹配到 TOC 标记
        if (filteredMatch.length < 1) {
            return false;
        }

        // 匹配到了多个参数，解析自定义参数
        if (filteredMatch.length > 1) {
            try {
                const ext = JSON.parse(filteredMatch[1].replace(/(")?([a-z0-9A-Z_]+)(")?:/g, '"$2": '));
                Object.assign(opts, defaults, ext);
            } catch (error) {
                console.warn('解析参数错误', match);
            }
        }

        // 构建内容
        const token = state.push('toc_body', 'toc', 0);
        token.markup = '[[toc]]';
        token.block = true;

        // 更新 pos 以便解析器可以继续
        const newline = state.src.indexOf('\n', state.pos);
        state.pos = newline != -1 ? newline : state.pos + state.posMax + 1;

        return true;
    }

    //@ts-ignore
    md.renderer.rules.toc_body = (): VNode => {
        const root = buildHeadingTree(headingTokens)
        const tocBody = root.children.map(heading => headingToVNode(heading, opts.listType, opts.itemType))
        return createVNode(opts.listType, {key: tocBody.toString(), class: opts.containerClass}, tocBody)
    };

    // 在全局中存储 headingToken 并设置标题 Id
    md.core.ruler.push('toc_heading_id', (state) => {
        headingTokens = []
        // 过滤出 heading_close heading_content heading_open
        state.tokens.forEach((token: Token, idx: number, tokens: Token[]) => {
            if (token.type == 'heading_open' && tokens[idx + 1] && tokens[idx + 1].type == 'inline') {
                const level = parseInt(token.tag.slice(1))
                const content = tokens[idx + 1].content
                const id = getHeadingId(level, content, idx)
                token.attrSet('id', id)
                if (!opts.full && !opts.level.includes(level)) return;
                headingTokens.push({content, id, level, children: []})
            }
        })
        return true
    })

    md.inline.ruler.after('emphasis', 'toc', toc)
}