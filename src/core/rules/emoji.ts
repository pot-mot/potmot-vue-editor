import Token from "markdown-it/lib/token";
import {createVNode} from "vue";

export const emojiHtml = (tokens: Token[], idx: number) => {
    return createVNode('span', {class: 'emoji', innerHTML: tokens[idx].content})
}