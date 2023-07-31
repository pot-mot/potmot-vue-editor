import MarkdownItContainer from "markdown-it-container";
import {md} from "../../index";
import {createVNode, VNode} from "vue";

export const detailType = ['detail', 'detail-open']

export const renderDetail: MarkdownItContainer.ContainerOpts = {
    //@ts-ignore
    render: (tokens, idx): VNode | undefined => {
        const info = tokens[idx].info.trim()
        const m = info.split(/\s+/);

        if (tokens[idx].nesting != 1) return;

        let open: boolean = false

        if (m[0] == 'detail-open') {
            open = true
        }

        let summary = md.utils.escapeHtml(info.slice(m[0].length));
        if (summary.length == 0) {
            summary = "DETAIL"
        }
        return createVNode('details', {open}, [createVNode('summary', {innerHTML: summary})])
    }
}