import {createVNode, VNode} from "vue";
import {now} from "../../../utils/common/time";
import {random} from "lodash";

import mermaid from "mermaid";

mermaid.initialize(
    {
        startOnLoad: false,
        flowchart: {
            curve: "polyline"
        }
    },
);

const cache = new Map<string, string>

export const createMermaidVNode = (text: string): VNode => {
    let innerHTML = text;
    if (cache.has(text)) innerHTML = cache.get(text)!;
    return createVNode('div', {key: text, class: 'mermaid', "mermaid-text": text, innerHTML})
}


const renderMermaid = async (element: Element) => {
    if (element.innerHTML.startsWith('<svg')) return;
    const text = element.getAttribute("mermaid-text");
    if (!text) return;
    const id = 'mermaid' + parseInt(now() + '') + parseInt(random() * 2000 + '');
    try {
        const {svg} = await mermaid.render(id, text);
        element.innerHTML = svg;
        cache.set(text, svg);
    } catch (e) {
        console.error(e);
        element.innerHTML = `<pre style="white-space: pre-line; border: 1px solid red;">${e}</pre>`;
        const error = document.getElementById('d' + id);
        if (error) {
            error.remove();
        } else {
            const error = document.getElementById(id);
            if (error) error.remove();
        }
    }
}

export const batchRenderMermaid = async (target: HTMLElement) => {
    const elements = target.querySelectorAll('.mermaid')
    for (let i = 0; i < elements.length; i++) {
        await renderMermaid(elements[i]);
    }
}