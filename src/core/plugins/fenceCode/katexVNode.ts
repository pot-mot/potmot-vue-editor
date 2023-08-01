import {createVNode, VNode} from "vue";
import katex, {KatexOptions} from "katex";
import {createErrVNode} from "../../source/errVNode";
import {createCodeBlockVNode, createCodeDetailsVnode} from "./fenceCodeVNode";

const cache = new Map<string, string>

const getRenderKatex = (text: string, options?: KatexOptions): string => {
    if (cache.has(text)) {
        return cache.get(text)!;
    } else {
        const result = katex.renderToString(text, options);
        cache.set(text, result);
        return result;
    }
}

const createKatexInlineVNode = (content: string, options?: KatexOptions): VNode => {
    const opts = Object.assign({}, options)
    opts.displayMode = false;
    try {
        const result = getRenderKatex(content, opts);
        return createVNode('span', {key: content, innerHTML: result, class: 'katex'});
    } catch (e) {
        return createErrVNode(e, 'katex render fail: ' + content);
    }
};

const createKatexBlockVNode = (content: string, options?: KatexOptions): VNode => {
    const opts = Object.assign({}, options)
    opts.displayMode = true;
    try {
        const result =  getRenderKatex(content, opts);
        return createVNode('div', {key: content, innerHTML: result, class: 'katex'});
    } catch (e) {
        return createErrVNode(e, 'katex render fail: ' + content);
    }
}

export const renderKatexInline = (content: string, options?: KatexOptions): VNode => {
    return createKatexInlineVNode(content, options);
}

export const renderKatexBlock = (text: string, options?: KatexOptions, attrs: any = {}): VNode => {
    return createCodeDetailsVnode(createKatexBlockVNode(text, options), createCodeBlockVNode(text, 'latex', attrs))
}