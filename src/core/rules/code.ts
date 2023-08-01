import Token from "markdown-it/lib/token";
import Renderer from "markdown-it/lib/renderer";
import {createVNode} from "vue";
import {createCodeBlockVNode, renderCodeBlock} from "../plugins/fenceCode/fenceCodeVNode";
import {unescapeAll} from "markdown-it/lib/common/utils";

export const codeInline = (tokens: Token[], idx: number, _: any, __: any, slf: Renderer) => {
    const token = tokens[idx]
    return createVNode('code', slf.renderAttrs(token) as any, token.content)
}

export const codeBlock = (tokens: Token[], idx: number, _: any, __: any, slf: Renderer) => {
    const token = tokens[idx]
    const attrs: any = slf.renderAttrs(token)
    return createCodeBlockVNode(token.content, '', attrs)
}

export const fenceCodeBlock = (tokens: Token[], idx: number, options: any, _: any, slf: Renderer) => {
    const token = tokens[idx];
    const attrs: any = slf.renderAttrs(token);
    const info = token.info ? unescapeAll(token.info).trim() : ''

    const arr = info.split(/(\s+)/g)
    const language = arr[0]

    return renderCodeBlock(token.content, language, attrs)
}