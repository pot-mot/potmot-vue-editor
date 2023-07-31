import mermaid from "mermaid";
import {createVNode, VNode} from "vue";
import {now} from "lodash";
import {decodeHTML} from "../../../utils/common/htmlParse";

mermaid.initialize({
    startOnLoad: false,
})

export const createMermaidVNode = (text: string): VNode => {
    return createVNode('div', {class: 'mermaid', innerHTML: text})
}

export const batchRenderMermaid = () => {
    document.querySelectorAll('.mermaid').forEach(element => {
        if (element.innerHTML.startsWith('<svg')) return;
        const id = 'mermaid' + now();
        const text = decodeHTML(element.innerHTML);
        mermaid.render(id, text)
            .then(res => {
                element.innerHTML = res.svg;
            })
            .catch(e => {
                console.warn(e);
                element.innerHTML = e;
                const error = document.getElementById('d' + id);
                if (error) {
                    error.remove();
                } else {
                    const error = document.getElementById(id);
                    if (error) error.remove();
                }
            })
    })
}