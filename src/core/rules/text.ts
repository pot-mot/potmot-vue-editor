import Token from "markdown-it/lib/token";
import {createVNode, Text} from "vue";

export const text = (tokens: Token[], idx: number) => {
    return createVNode(Text, {}, tokens[idx].content)
}