import katex from "katex";
import mermaid from "mermaid";
import Prism from "prismjs";
import {prismLanguageList} from "../editor/typeList";
import {decodeHTML} from "./htmlParse";

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

export const mermaidRender = (element: HTMLElement, cache: Map<string, string>) => {
    if (element.innerHTML.startsWith("<svg")) return

    const id = Math.floor(Math.random() * 10000000)
    const text = decodeHTML(element.innerHTML)

    mermaid.render('mermaid' + id, text)
        .then(res => {
            cache.set(text, res.svg)

            // FIXME 第一轮缓存失效
            console.log(cache.size)

            element.innerHTML = res.svg
            element.classList.remove('mermaid')
        })
        .catch(e => {
            document.getElementById('mermaid' + id)?.remove()
            element.innerHTML = errResult(e, "graph - mermaid")
        })
}