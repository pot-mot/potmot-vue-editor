import Token from "markdown-it/lib/token";
import Renderer from "markdown-it/lib/renderer";
import {createVNode} from "vue";

export const image = (tokens: Token[], idx: number, options: any, env: any, slf: Renderer) => {
    const token = tokens[idx]

    return createVNode('img', {
        ...slf.renderAttrs(token) as any,
        alt: slf.renderInlineAsText(token.children || [], options, env)
    }, [])
}