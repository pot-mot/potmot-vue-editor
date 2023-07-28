import {createVNode, VNode} from "vue";
import Prism from "prismjs";
import {prismLanguageList} from "../../constants/prismLanguageList";
import {DOM_ATTR_NAME} from "../../constants/attr/domAttrName";
import {createErrVNode} from "./errVNode";
import {encodeHTML} from "../../utils/common/htmlParse";

const setLine = (code: string): {count: VNode, code: VNode} => {
    const counts: string[] = []
    let codes = code.split('\n');
    if (codes[codes.length - 1].length == 0) {
        codes = codes.slice(0, codes.length - 1);
    }
    for (let i = 0; i < codes.length; i++) {
        counts.push(`${i+1}`);
    }
    return {
        count: createVNode('div', {class: 'count', innerHTML: counts.join('\n')}),
        code: createVNode('code', {innerHTML: `${codes.join('\n')}\n`})
    }
}

const codeCache: Map<{ language: string, text: string }, VNode> = new Map;

export const createCodeBlockVNode = (text: string, language: string, attrs: any): VNode => {
    try {
        const key = {language, text}

        if (codeCache.has(key)) {
            return codeCache.get(key)!
        }

        if (prismLanguageList.includes(language)) {
            text = Prism.highlight(text, Prism.languages[language], language);
        } else {
            text = encodeHTML(text);
        }
        const {code, count} = setLine(text);

        const preAttrs = {
            'code-lang': language,
            [DOM_ATTR_NAME.SOURCE_LINE_START]: attrs[DOM_ATTR_NAME.SOURCE_LINE_START],
            [DOM_ATTR_NAME.SOURCE_LINE_END]: attrs[DOM_ATTR_NAME.SOURCE_LINE_END],
        }

        delete attrs[DOM_ATTR_NAME.SOURCE_LINE_START]
        delete attrs[DOM_ATTR_NAME.SOURCE_LINE_END]

        code.props = {...code.props, ...attrs}

        const copyBottom = createVNode('bottom', {class: 'code-copy-button', title: '复制'})
        const languageLabel = createVNode('div', {class: 'code-language', innerText: language})

        const result = createVNode(
            'pre', {key: text, class: 'code-container', ...preAttrs},
            [copyBottom, languageLabel, count, code])

        codeCache.set(key, result);
        return result;
    } catch (e) {
        return createErrVNode(e, "code - " + language + " 代码渲染出错");
    }
}