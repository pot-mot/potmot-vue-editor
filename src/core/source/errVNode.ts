import {createVNode, VNode} from "vue";
import {now} from "../../utils/common/time";

export const createErrVNode = (msg: any = ''): VNode => {
    return createVNode(
        'pre',
        {
            key: now(),
            class: 'error',
            innerHTML: `[解析错误]\n${msg}`
        })
}

export const createErrHTMLString = (msg: any = ''): string => {
    return `<pre class="error">[解析错误]\n${msg}</pre>`
}