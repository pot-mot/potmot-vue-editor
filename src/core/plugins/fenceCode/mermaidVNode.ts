import {createVNode, VNode} from "vue";
import mermaid from "mermaid";
import {now} from "../../../utils/common/time";

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
    return createVNode('div', {key: text, "mermaid-text": text, class: 'mermaid-wait', innerHTML})
}


const renderMermaid = (
    element: Element
) => {
    if (element.innerHTML.startsWith('<svg')) return;

    const id = 'mermaid' + Math.floor(now() - Math.random() * 2000);
    const text = element.getAttribute("mermaid-text");
    if (!text) return;
    mermaid.render(id, text)
        .then(res => {
            cache.set(text, res.svg);
            element.innerHTML = res.svg;
            element.classList.remove('mermaid-wait');
            element.classList.add('mermaid')
        })
        .catch(e => {
            element.innerHTML = `<pre style="white-space: pre-line; border: 1px solid red;">${e}</pre>`;
            const error = document.getElementById('d' + id);
            if (error) {
                error.remove();
            } else {
                const error = document.getElementById(id);
                if (error) error.remove();
            }
        })
}

export const batchRenderMermaid = (target: HTMLElement) => {
    const elements = <HTMLElement[]>Array.from(target.querySelectorAll('.mermaid-wait'));
    for (const element of elements) {
        renderMermaid(element);
    }
}