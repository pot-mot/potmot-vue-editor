import Renderer from "markdown-it/lib/renderer";
import Token from "markdown-it/lib/token";
import {Comment, createVNode, Fragment, VNode} from "vue";
import {validateAttrName} from "./source/validateAttrName";
import {setSourceLine} from "./source/line";
import {DOM_ATTR_NAME} from "../constants/attr/domAttrName";
import {createHtmlVNode} from "./rules/html";

export function renderToken(this: Renderer, tokens: Token[], idx: number): any {
    const token = tokens[idx]

    if (token.nesting === -1) {
        return null
    }

    // Tight list paragraphs
    if (token.hidden) {
        return createVNode(Fragment, {}, [])
    }

    if (token.tag === '--') {
        return createVNode(Comment)
    }

    return createVNode(token.tag, this.renderAttrs(token) as any, [])
}

export function renderAttrs(this: Renderer, token: Token) {
    if (!token.attrs) {
        return {}
    }

    const result: any = {}

    token.attrs.forEach(token => {
        if (validateAttrName(token[0])) {
            result[token[0]] = token[1]
        }
    })

    return result
}

export function render(this: Renderer, tokens: Token[], options: any, env: any): any {
    const rules: any = this.rules

    const vNodeParents: VNode[] = []

    return tokens.map((token, i) => {
        setSourceLine(token, env)
        if (token.block) {
            token.attrSet(DOM_ATTR_NAME.TOKEN_IDX, i.toString())
        }

        const type = token.type

        let vnode: VNode | null
        let parent: VNode | null = null

        if (type === 'inline') {
            vnode = createVNode(Fragment, {}, this.render(token.children || [], options, env))
        } else if (rules[type]) {
            const result = rules[type](tokens, i, options, env, this)
            if (typeof result === 'string') {
                vnode = createHtmlVNode(result)
            } else if (result && result.node && result.parent) {
                parent = result.parent
                vnode = result.node
            } else {
                vnode = result
            }
        } else {
            vnode = this.renderToken(tokens, i, options) as any
        }

        let isChild = false
        const parentNode = vNodeParents.length > 0 ? vNodeParents[vNodeParents.length - 1] : null
        if (vnode && parentNode) {
            if (typeof parentNode.type === 'string' || parentNode.type === Fragment) {
                const children = Array.isArray(parentNode.children) ? parentNode.children : []
                parentNode.children = children.concat([vnode])
            }
            isChild = true
        }

        if (token.nesting === 1) {
            if (parent) {
                vNodeParents.push(parent)
            } else if (vnode) {
                vNodeParents.push(vnode)
            }
        }

        if (token.nesting === -1) {
            vNodeParents.pop()
        }

        return isChild ? null : vnode
    }).filter(node => !!node) as any
}