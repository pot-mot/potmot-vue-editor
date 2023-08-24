import MarkdownItContainer from "markdown-it-container";
import {md} from "../../index";
import {createVNode, VNode} from "vue";

export const detailsType = ['details', 'details-open']

export const renderDetail: MarkdownItContainer.ContainerOpts = {
    //@ts-ignore
    render: (tokens, idx): VNode | undefined => {
        const info = tokens[idx].info.trim()
        const m = info.split(/\s+/);

        if (tokens[idx].nesting != 1) return;

        let open: boolean = false

        if (m[0] == 'details-open') {
            open = true
        }

        let summaryText = md.utils.escapeHtml(info.slice(m[0].length));
        if (summaryText.length == 0) {
            summaryText = "DETAILS"
        }
        let summary: VNode = createVNode('summary', {innerText: summaryText})
        return createVNode('details', {open}, [summary])
    }
}