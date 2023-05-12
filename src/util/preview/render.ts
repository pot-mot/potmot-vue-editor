import katex from "katex";
import mermaid from "mermaid";
import Prism from "prismjs";
import {prismLanguageList} from "../../constant/typeList";

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

    for (const item of prismLanguageList) {
        if (item == language) {
            text = Prism.highlight(text, Prism.languages[language], language);
            break
        }
    }

    return setLine(text)
}

export const mathRender = (text: string): string => {
    try {
        return katex.renderToString(text)
    } catch (e) {
        return `<span style='color: red'>[解析错误]</span><br><span>${e}</span><br><span style='color: red'>---</span>`
    }
}

export const mermaidRender = (text: string, element: HTMLElement) => {
    const id = Math.floor(Math.random() * 10000000000)
    mermaid.render('mermaid' + id, text.replaceAll('&gt;', ">").replaceAll('&lt;', "<"))
        .then(res => {
            element.innerHTML = res.svg
        })
        .catch(e => {
            document.getElementById('mermaid' + id)?.remove()
            element.innerHTML = `<span style="color: red;">${e}</span>`
        })
}