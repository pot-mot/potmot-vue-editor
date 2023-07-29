import {createVNode, VNode} from "vue";

export const quoteType = ['info', 'tip', 'warning', 'danger']

export const renderQuoteContainer = {
    // @ts-ignore
    render: (tokens, idx): VNode => {
        const info = tokens[idx].info.trim();
        const m = info.split(/\s+/);
        if (tokens[idx].nesting == 1 && m && quoteType.includes(m[0])) {
            const type = m[0];
            const titleText = info.replace(type, '');
            const children: VNode[] = []
            if (titleText.length > 0) {
                children.push(createVNode('div', {class: 'title', innerHTML: titleText}))
            }
            return createVNode('blockquote', {class: type}, children)
        }
    }
}