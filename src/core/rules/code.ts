import Token from "markdown-it/lib/token";
import Renderer from "markdown-it/lib/renderer";
import {createVNode, Text} from "vue";
import {escapeHtml, unescapeAll} from "markdown-it/lib/common/utils";
import {DOM_ATTR_NAME} from "../../constants/attr/domAttrName";

export const codeInline = (tokens: Token[], idx: number, _: any, __: any, slf: Renderer) => {
    const token = tokens[idx]
    return createVNode('code', slf.renderAttrs(token) as any, token.content)
}

export const codeBlock = (tokens: Token[], idx: number, _: any, __: any, slf: Renderer) => {
    const token = tokens[idx]
    const attrs: any = slf.renderAttrs(token)
    const preAttrs = {
        [DOM_ATTR_NAME.SOURCE_LINE_START]: attrs[DOM_ATTR_NAME.SOURCE_LINE_START],
        [DOM_ATTR_NAME.SOURCE_LINE_END]: attrs[DOM_ATTR_NAME.SOURCE_LINE_END],
    }

    delete attrs[DOM_ATTR_NAME.SOURCE_LINE_START]
    delete attrs[DOM_ATTR_NAME.SOURCE_LINE_END]

    return createVNode(
        'pre',
        preAttrs,
        [createVNode('code', attrs, [createVNode(Text, {}, token.content)])]
    )
}

export const fenceCodeBlock = (tokens: Token[], idx: number, options: any, _: any, slf: Renderer) => {
    const token = tokens[idx]
    const info = token.info ? unescapeAll(token.info).trim() : ''
    let langName = ''
    let langAttrs = ''
    let highlighted: any;
    let i;
    let arr;
    let tmpAttrs;
    let tmpToken;

    if (info) {
        arr = info.split(/(\s+)/g)
        langName = arr[0]
        langAttrs = arr.slice(2).join('')
    }

    if (options.highlight) {
        highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content)
    } else {
        highlighted = escapeHtml(token.content);
    }

    if (highlighted.indexOf('<pre') == 0) {
        return `${highlighted}\n`;
    }

    const buildVNode = (attrs: any) => {
        const preAttrs = {
            'data-info': info,
            'data-lang': langName,
            [DOM_ATTR_NAME.SOURCE_LINE_START]: attrs[DOM_ATTR_NAME.SOURCE_LINE_START],
            [DOM_ATTR_NAME.SOURCE_LINE_END]: attrs[DOM_ATTR_NAME.SOURCE_LINE_END],
        }

        delete attrs[DOM_ATTR_NAME.SOURCE_LINE_START]
        delete attrs[DOM_ATTR_NAME.SOURCE_LINE_END]

        return createVNode(
            'pre',
            preAttrs,
            [
                createVNode('code', {key: highlighted, ...attrs, innerHTML: highlighted}, [])
            ]
        )
    }

    if (info) {
        i = token.attrIndex('class')
        tmpAttrs = token.attrs ? token.attrs.slice() : []

        if (i < 0) {
            tmpAttrs.push(['class', options.langPrefix + langName])
        } else {
            tmpAttrs[i] = tmpAttrs[i].slice() as any
            tmpAttrs[i][1] += ' ' + options.langPrefix + langName
        }

        // Fake token just to render attributes
        tmpToken = {
            attrs: tmpAttrs
        }

        return buildVNode(slf.renderAttrs(tmpToken as any))
    }

    return buildVNode(slf.renderAttrs(token))
}