import {createVNode} from "vue";
import Token from "markdown-it/lib/token";

export const hardBreak = () => {
    return createVNode('br')
}

export const softBreak = (_: Token[], __: number, options: any) => {
    return options.breaks ? createVNode('br') : null
}