import MarkdownItContainer from "markdown-it-container";
import {md} from "../../index";
import {createVNode, VNode} from "vue";

export const renderDetail: MarkdownItContainer.ContainerOpts = {
    // @ts-ignore
    render: (tokens, idx): VNode => {
        let m = tokens[idx].info.trim().match(/^detail\s+(.*)$/);
        if (tokens[idx].nesting == 1) {
            let summary = ''
            let open: boolean = false
            if (m) {
                summary = md.utils.escapeHtml(m[1]);
                if (summary.startsWith('open')) {
                    open = true
                    summary = summary.replace('open', '')
                }
            }
            return createVNode('details', {open}, [createVNode('summary', {innerHTML: summary})])
        }
    }
};