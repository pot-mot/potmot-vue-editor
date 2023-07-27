import katex from "katex";
import {createVNode, VNode} from "vue";
import {createErrVNode} from "./err";

const mathCache: Map<string, VNode> = new Map

export const createKatexBlockVNode = (text: string): VNode => {
    try {
        text = text.trim();

        if (mathCache.has(text)) {
            return mathCache.get(text)!
        }

        const rendered = katex.renderToString(text);
        const result = createVNode('div', {key: text, innerHTML: rendered});
        mathCache.set(text, result);
        return result;
    } catch (e) {
        return createErrVNode(e, "math - katex 渲染出错");
    }
}