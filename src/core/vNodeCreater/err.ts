import {createVNode, VNode} from "vue";
import {now} from "../../utils/common/time";

export const createErrVNode = (e: any, msg: string): VNode => {
    return createVNode(
        'pre',
        {
            key: now(),
            style: <Partial<CSSStyleDeclaration>>{
                whiteSpace: 'pre-line',
                border: '1px solid red'
            },
            innerHTML: `解析错误: ${msg}`
        })
}