import {Renderer} from "marked";
import katex from "katex";
import mermaid, {RenderResult} from "mermaid";
import Prism from "prismjs";
import {prismLanguageList} from "../prismLanguageList";
import {decodeHTML, encodeHTML} from "../../utils/common/htmlParse";

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

const setLine = (code: string) => {
    let codes = code.split("\n")
    let res = ''
    for (let i = 0; i < codes.length; i++) {
        res += `<span class="count">${i + 1}</span><span class="code-line">${codes[i]}</span><br>`
    }
    return res;
}

const codeCache: Map<{language: string, text: string}, string> = new Map<{language: string, text: string}, string>()

export const codeRender = (text: string, language: string): string => {
    try {
        const key = {language, text}

        if (codeCache.has(key)) {
            return codeCache.get(key)!
        }

        let code
        if (prismLanguageList.includes(language)) {
            code = Prism.highlight(text, Prism.languages[language], language)
        } else {
            code = encodeHTML(text)
        }
        const result = setLine(code)
        codeCache.set(key, result)
        return result
    } catch (e) {
        return errResult(e, "code - " + language + " 代码渲染出错")
    }
}

const mathCache: Map<string, string> = new Map<string, string>()

export const mathRender = (text: string): string => {
    try {
        text = text.trim()

        if (mathCache.has(text)) {
            return mathCache.get(text)!
        }
        const result = katex.renderToString(text)
        mathCache.set(text, result)
        return result
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
    return`<div class="code-container">
    <pre><code>${code}</code></pre>
    <div class="code-copy-button" title="复制"></div>
    <div class="code-language">${language ? language : ''}</div>
</div>`;
}