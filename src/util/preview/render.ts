import katex from "katex";
import mermaid, {RenderResult} from "mermaid";
import Prism from "prismjs";
import {prismLanguageList} from "../common/typeList";
import {decodeHTML} from "./htmlParse";

mermaid.initialize({ startOnLoad: false })

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
                break
            }
        }

        return setLine(text)
    } catch (e) {
        return errResult(e, "code - " + language)
    }
}

export const mathRender = (text: string): string => {
    try {
        return katex.renderToString(text)
    } catch (e) {
        return errResult(e, "math - katex")
    }
}

export const mermaidBatchRender = (elements: HTMLElement[], cache: Map<string, string>) => {
    for (let element of elements) {
        mermaidRender(element, (id, res, origin) => {
            element.innerHTML = res.svg;
            cache.set(origin, res.svg);
            console.log(cache.size)
        })
    }
}

export const mermaidRender = (element: HTMLElement, success: (id: string, res: RenderResult, origin: string) => any) => {
    if (element.innerHTML.startsWith("<svg")) return

    const id = 'mermaid' + Math.floor(Math.random() * 10000000)
    const text = decodeHTML(element.innerHTML)

    mermaid.render(id, text)
        .then(res => {
            success(id, res, text)
        })
        .catch(e => {
            document.getElementById(id)?.remove()
            element.innerHTML = errResult(e, "graph - mermaid")
        })
}