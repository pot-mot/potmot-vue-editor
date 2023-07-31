import mermaid from "mermaid";
import {createVNode, VNode} from "vue";
import {now} from "../../../utils/common/time";

mermaid.initialize({
    startOnLoad: false,
})

const api = mermaid.mermaidAPI;

const cache = new Map<string, string>

export const createMermaidVNode = (text: string): VNode => {
    let innerHTML = text;
    if (cache.has(text)) innerHTML = cache.get(text)!;
    return createVNode('div', {key: text, class: 'mermaid', "mermaid-text": text, innerHTML})
}

export const batchRenderMermaid = async (target: HTMLElement) => {
    const elements = target.querySelectorAll('.mermaid')
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.innerHTML.startsWith('<svg')) continue;
        const text = element.getAttribute("mermaid-text");
        if (!text) continue;
        const id = 'mermaid' + parseInt(now() + '');
        try {
            const {svg} = await api.render(id, text);
            element.innerHTML = svg;
            cache.set(text, svg);
        } catch (e) {
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
}