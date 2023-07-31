import {createVNode, VNode} from "vue";

export const quoteType = ['info', 'tip', 'warning', 'danger']

export const renderQuoteContainer = {
    //@ts-ignore
    render: (tokens, idx): VNode => {
        let info = tokens[idx].info.trim();
        const m = info.split(/\s+/);
        if (tokens[idx].nesting == 1 && m && quoteType.includes(m[0])) {
            const type = m[0];
            info = info.replace(type, '')
            const titleText = info.length == 0 ? type : info;

            return createVNode('blockquote', {class: type}, [
                createVNode('div', {class: 'title', innerHTML: titleText})
            ])
        }
    }
}