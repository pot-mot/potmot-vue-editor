import {createVNode, VNode} from "vue";
import katex, {KatexOptions} from "katex";
import {createErrVNode} from "../../source/errVNode";
import {createCodeDetailsVnode} from "./fenceCodeVNode";

const renderCache = new Map<string, string>

const getRenderKatex = (text: string, options?: KatexOptions): string => {
    if (renderCache.has(text)) {
        return renderCache.get(text)!;
    } else {
        return katex.renderToString(text, options)
    }
}

export const createKatexInlineVNode = (content: string, options?: KatexOptions): VNode => {
    const opts = Object.assign({}, options)
    opts.displayMode = false;
    try {
        const result = getRenderKatex(content, opts);
        return createVNode('span', {key: content, innerHTML: result, class: 'katex'});
    } catch (e) {
        return createErrVNode(e, 'katex render fail: ' + content);
    }
};

export const createKatexBlockVNode = (content: string, options?: KatexOptions): VNode => {
    const opts = Object.assign({}, options)
    opts.displayMode = true;
    try {
        const result =  getRenderKatex(content, opts);
        return createCodeDetailsVnode(createVNode('div', {key: content, innerHTML: result, class: 'katex'}), content, 'latex');
    } catch (e) {
        return createErrVNode(e, 'katex render fail: ' + content);
    }
}