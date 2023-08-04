import {createVNode, VNode} from "vue";
import mermaid from "mermaid";
import {now} from "../../../utils/common/time";
import {createCodeBlockVNode, createCodeDetailsVNode} from "./fenceCodeVNode";
import {createErrHTMLString} from "../../source/errVNode";

mermaid.initialize(
    {
        startOnLoad: false,
        fontFamily: 'consola',
        flowchart: {
            curve: "polyline",
            htmlLabels: true
        },
    },
);

const cache = new Map<string, string>

const createMermaidVNode = (text: string): VNode => {
    let innerHTML = text;
    if (cache.has(text)) innerHTML = cache.get(text)!;
    return createVNode('div', {key: text, "mermaid-text": text, class: 'mermaid-wait', innerHTML})
}

export const renderMermaidBlock = (text: string, attrs: any = {}) => {
    return createCodeDetailsVNode(createMermaidVNode(text), createCodeBlockVNode(text, 'mermaid', attrs));
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
            element.innerHTML = createErrHTMLString(e);
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