import katex from "katex";
import mermaid from "mermaid";
import Prism from "prismjs";
import {prismLanguageList} from "../editor/typeList";

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

export const mermaidRender = (element: HTMLElement) => {
    if (element.innerHTML.startsWith("<svg")) return

    const id = Math.floor(Math.random() * 10000000000)
    mermaid.render('mermaid' + id, element.innerHTML.replaceAll('&gt;', ">").replaceAll('&lt;', "<"))
        .then(res => {
            element.innerHTML = res.svg
        })
        .catch(e => {
            document.getElementById('mermaid' + id)?.remove()
            element.innerHTML = errResult(e, "graph - mermaid")
        })
}