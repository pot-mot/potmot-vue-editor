import Token from "markdown-it/lib/token";
import {createVNode, Fragment} from "vue";

export const createHtmlVNode = (html: string) => {
    const div = document.createElement('template')
    div.innerHTML = html
    const elements = div.content.children
    const children = []
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const tagName = element.tagName.toLowerCase()
        const attrs: Record<string, any> = {
            key: element.outerHTML
        }

        for (let j = 0; j < element.attributes.length; j++) {
            const attr = element.attributes[j]
            attrs[attr.name] = attr.value
        }

        attrs.innerHTML = element.innerHTML
        attrs.key = element.innerHTML

        children.push(createVNode(tagName, attrs, []))
    }

    return createVNode(Fragment, {}, children)
}

export const htmlInline = (tokens: Token[], idx: number) => {
    const token = tokens[idx] as any
    if (token.contentVNode) {
        return token.contentVNode
    }

    return createHtmlVNode(token.content)
}

export const htmlBlock = (tokens: Token[], idx: number) => {
    const token = tokens[idx] as any
    if (token.contentVNode) {
        return token.contentVNode
    }

    return createHtmlVNode(token.content)
}
