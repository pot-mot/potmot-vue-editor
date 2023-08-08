import {createVNode, VNode} from "vue";
import MarkdownIt from "markdown-it";

export const createRenderInlineVNode = (md: MarkdownIt, content: string, tag: string, props: any = {}): VNode => {
    return createVNode(tag, props, md.renderInline(content))
}