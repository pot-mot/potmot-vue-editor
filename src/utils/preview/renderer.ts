import {Renderer} from "marked";
import katex from "katex";
import mermaid, {RenderResult} from "mermaid";
import Prism from "prismjs";
import {prismLanguageList} from "../../constants/prismLanguageList";
import {decodeHTML, encodeHTML} from "../common/htmlParse";

mermaid.initialize(
    {
        startOnLoad: false,
        flowchart: {
            curve: "polyline"
        }
    },
)

export const renderer = new Renderer()

const errResult = (e: any, msg: string): string => {
    return `<div style='white-space: pre-line;'><span style="color: red;">[解析错误: ${msg}]</span><br><span style="color: red;">[</span>${e}<span style="color: red;">]</span></div>`
}

export const codeRender = (text: string, language: string): string => {
    const setLine = (code: string) => {
        if (code[code.length - 1] == '\n') {
            code = code.slice(0, code.length - 1);
        }
        let codes = code.split("\n");
        let res = ''
        for (let i = 0; i < codes.length; i++) {
            res += '<span class="count"></span>' + codes[i] + '\n';
        }
        return res;
    }

    try {
        for (const item of prismLanguageList) {
            if (item == language) {
                text = Prism.highlight(text, Prism.languages[language], language);
                return setLine(text)
            }
        }
        return setLine(encodeHTML(text))
    } catch (e) {
        return errResult(e, "code - " + language + " 代码渲染出错")
    }
}

export const mathRender = (text: string): string => {
    try {
        return katex.renderToString(text)
    } catch (e) {
        return errResult(e, "math - katex 渲染出错")
    }
}

const mermaidCache: Map<string, string> = new Map<string, string>()

export const mermaidRender = (
    element: HTMLElement,
    success: (id: string, res: RenderResult, origin: string) => any,
    fail: (id: string, e: any, origin: string) => any
) => {
    if (element.innerHTML.startsWith("<svg")) return

    const id = 'mermaid' + Math.floor(Math.random() * 10000000)
    const text = decodeHTML(element.innerHTML)

    mermaid.render(id, text)
        .then(res => {
            success(id, res, text)
        })
        .catch(e => {
            fail(id, e, text)
        })
}

export const mermaidBatchRender = (elements: HTMLElement[]) => {
    for (let element of elements) {
        mermaidRender(element,
            (id, res, origin) => {
                element.innerHTML = res.svg;
                mermaidCache.set(origin, res.svg);
            },
            (id, e, origin) => {
                document.getElementById(id)?.remove()
                element.innerHTML = origin + errResult(e, "mermaid 图渲染出错")
            },
        )
    }
}

renderer.link = (href, title, text): string => {
    if (href == null) {
        return text;
    }
    let out = `<a target="_blank" href="${href}"`;
    if (title) {
        out += ` title="${title}"`;
    }
    out += `>${text}</a>`;
    return out;
}

renderer.code = (code: string, language: string): string => {
    if (language == 'mermaid') {
        if (mermaidCache.has(code)) return `<div>${mermaidCache.get(code)}</div>`
        return `<div class="mermaid">${code}</div>`
    } else if (language == 'math' || language == "katex" || language == "latex") {
        return `<div class="math">${mathRender(code)}</div>`
    }

    code = codeRender(code, language)
    return `<pre><code>${code}</code><div class="code-copy-button" title="复制"></div><div class="code-language">${language ? language : ''}</div></pre>`;
}