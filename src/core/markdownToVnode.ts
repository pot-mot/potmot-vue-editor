import {createVNode, Fragment, Comment, VNode} from 'vue'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import MarkdownIt from "markdown-it";
import {defaultRules} from "./rules";
import {validateAttrName} from "./source/validateAttrName";
import {setSourceLine} from "./source/line";
import {DOM_ATTR_NAME} from "../constants/attr/domAttrName";
import {createHtmlVNode} from "./rules/html";

function renderToken(this: Renderer, tokens: Token[], idx: number): any {
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

function renderAttrs(this: Renderer, token: Token) {
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

function render(this: Renderer, tokens: Token[], options: any, env: any) {
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

const md = new MarkdownIt()

md.set({ html: true, breaks: true })

md.renderer.rules = {...md.renderer.rules, ...defaultRules}
md.renderer.render = render
md.renderer.renderInline = render
md.renderer.renderAttrs = renderAttrs
md.renderer.renderToken = renderToken

export {
    md
}