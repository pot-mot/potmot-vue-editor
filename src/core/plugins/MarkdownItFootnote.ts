import {createVNode, Fragment, VNode} from "vue";
import Token from "markdown-it/lib/token";
import StateInline from "markdown-it/lib/rules_inline/state_inline";
import parseLinkLabel from "markdown-it/lib/helpers/parse_link_label";
import MarkdownIt from "markdown-it";
import StateBlock from "markdown-it/lib/rules_block/state_block";
import StateCore from "markdown-it/lib/rules_core/state_core";

// Process footnote block definition
const footnoteDef = (state: StateBlock, startLine: number, endLine: number, silent: boolean) => {
    let oldBMark;
    let oldTShift;
    let oldSCount;
    let oldParentType;
    let pos;
    let label;
    let token
    let initial;
    let offset;
    let ch;
    let posAfterColon
    const start = state.bMarks[startLine] + state.tShift[startLine]
    const max = state.eMarks[startLine]

    // line should be at least 5 chars - "[^x]:"
    if (start + 4 > max) {
        return false
    }

    if (state.src.charCodeAt(start) != 0x5B/* [ */) {
        return false
    }
    if (state.src.charCodeAt(start + 1) != 0x5E/* ^ */) {
        return false
    }

    for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) == 0x20) {
            return false
        }
        if (state.src.charCodeAt(pos) == 0x5D /* ] */) {
            break
        }
    }

    if (pos == start + 2) {
        return false
    } // no empty footnote labels
    if (pos + 1 >= max || state.src.charCodeAt(++pos) != 0x3A /* : */) {
        return false
    }
    if (silent) {
        return true
    }
    pos++

    if (!state.env.footnotes) {
        state.env.footnotes = {}
    }
    if (!state.env.footnotes.refs) {
        state.env.footnotes.refs = {}
    }
    label = state.src.slice(start + 2, pos - 2)
    state.env.footnotes.refs[':' + label] = -1

    token = new state.Token('footnote_reference_open', '', 1)
    token.meta = {label: label}
    token.level = state.level++
    state.tokens.push(token)

    oldBMark = state.bMarks[startLine]
    oldTShift = state.tShift[startLine]
    oldSCount = state.sCount[startLine]
    oldParentType = state.parentType

    posAfterColon = pos
    initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine])

    while (pos < max) {
        ch = state.src.charCodeAt(pos)

        if ([9, 10, 13, 32].includes(ch)) {
            if (ch == 0x09/*tab*/) {
                offset += 4 - offset % 4
            } else {
                offset++
            }
        } else {
            break
        }

        pos++
    }

    state.tShift[startLine] = pos - posAfterColon
    state.sCount[startLine] = offset - initial

    state.bMarks[startLine] = posAfterColon
    state.blkIndent += 4
    state.parentType = <any>'footnote'

    if (state.sCount[startLine] < state.blkIndent) {
        state.sCount[startLine] += state.blkIndent
    }

    state.md.block.tokenize(state, startLine, endLine)

    state.parentType = oldParentType
    state.blkIndent -= 4
    state.tShift[startLine] = oldTShift
    state.sCount[startLine] = oldSCount
    state.bMarks[startLine] = oldBMark

    token = new state.Token('footnote_reference_close', '', -1)
    token.level = --state.level
    state.tokens.push(token)

    return true
}

// Process inline footnotes (^[...])
export const footnoteInline = (state: StateInline, silent: boolean) => {
    let labelStart
    let labelEnd
    let footnoteId
    let token
    let tokens: Token[]
    const max = state.posMax
    const start = state.pos

    if (start + 2 >= max) {
        return false
    }
    if (state.src.charCodeAt(start) != 0x5E/* ^ */) {
        return false
    }
    if (state.src.charCodeAt(start + 1) != 0x5B/* [ */) {
        return false
    }

    labelStart = start + 2
    labelEnd = parseLinkLabel(state, start + 1)

    // parser failed to find ']', so it's not a valid note
    if (labelEnd < 0) {
        return false
    }

    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
        if (!state.env.footnotes) {
            state.env.footnotes = {}
        }
        if (!state.env.footnotes.list) {
            state.env.footnotes.list = []
        }
        footnoteId = state.env.footnotes.list.length

        state.md.inline.parse(
            state.src.slice(labelStart, labelEnd),
            state.md,
            state.env,
            tokens = []
        )

        token = state.push('footnote_ref', '', 0)
        token.meta = {id: footnoteId}

        state.env.footnotes.list[footnoteId] = {
            content: state.src.slice(labelStart, labelEnd),
            tokens: tokens
        }
    }

    state.pos = labelEnd + 1
    state.posMax = max
    return true
}

// Process footnote references ([^...])
export const footnoteRef = (state: StateInline, silent: boolean) => {
    let label
    let pos
    let footnoteId
    let footnoteSubId
    let token
    const max = state.posMax
    const start = state.pos

    // should be at least 4 chars - "[^x]"
    if (start + 3 > max) {
        return false
    }

    if (!state.env.footnotes || !state.env.footnotes.refs) {
        return false
    }
    if (state.src.charCodeAt(start) != 0x5B/* [ */) {
        return false
    }
    if (state.src.charCodeAt(start + 1) != 0x5E/* ^ */) {
        return false
    }

    for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) == 0x20) {
            return false
        }
        if (state.src.charCodeAt(pos) == 0x0A) {
            return false
        }
        if (state.src.charCodeAt(pos) == 0x5D /* ] */) {
            break
        }
    }

    if (pos == start + 2) {
        return false
    } // no empty footnote labels
    if (pos >= max) {
        return false
    }
    pos++

    label = state.src.slice(start + 2, pos - 1)
    if (typeof state.env.footnotes.refs[':' + label] == 'undefined') {
        return false
    }

    if (!silent) {
        if (!state.env.footnotes.list) {
            state.env.footnotes.list = []
        }

        if (state.env.footnotes.refs[':' + label] < 0) {
            footnoteId = state.env.footnotes.list.length
            state.env.footnotes.list[footnoteId] = {label: label, count: 0}
            state.env.footnotes.refs[':' + label] = footnoteId
        } else {
            footnoteId = state.env.footnotes.refs[':' + label]
        }

        footnoteSubId = state.env.footnotes.list[footnoteId].count
        state.env.footnotes.list[footnoteId].count++

        token = state.push('footnote_ref', '', 0)
        token.meta = {id: footnoteId, subId: footnoteSubId, label: label}
    }

    state.pos = pos
    state.posMax = max
    return true
}

// 渲染所有的 footnote 说明并清空当前的 footnote 列表
export const footnoteList = (state: StateCore) => {
    if (!state.env.footnotes) {
        return false;
    }

    let i;
    let l;
    let j;
    let t;
    let lastParagraph;
    let list;
    let token;
    let tokens;
    let current: any;
    let currentLabel: string
    let insideRef = false
    const refTokens: any = {}

    state.tokens = state.tokens.filter(function (tok) {
        if (tok.type == 'footnote_reference_open') {
            insideRef = true
            current = []
            currentLabel = tok.meta.label
            return false
        }
        if (tok.type == 'footnote_reference_close') {
            insideRef = false
            // prepend ':' to avoid conflict with Object.prototype members
            refTokens[':' + currentLabel] = current
            return false
        }
        if (insideRef) {
            current.push(tok)
        }
        return !insideRef
    })

    if (!state.env.footnotes.list) {
        return false;
    }
    list = state.env.footnotes.list

    token = new state.Token('footnote_list_open', '', 1)
    state.tokens.push(token)

    for (i = 0, l = list.length; i < l; i++) {
        token = new state.Token('footnote_item_open', '', 1)
        token.meta = {id: i, label: list[i].label, content: list[i].content}
        state.tokens.push(token)

        if (list[i].tokens) {
            tokens = []

            token = new state.Token('paragraph_open', 'p', 1)
            token.block = true
            tokens.push(token)

            token = new state.Token('inline', '', 0)
            token.children = list[i].tokens
            token.content = list[i].content
            tokens.push(token)

            token = new state.Token('paragraph_close', 'p', -1)
            token.block = true
            tokens.push(token)
        } else if (list[i].label) {
            tokens = refTokens[':' + list[i].label]
        }

        if (tokens) state.tokens = state.tokens.concat(tokens)
        if (state.tokens[state.tokens.length - 1].type == 'paragraph_close') {
            lastParagraph = state.tokens.pop()
        } else {
            lastParagraph = null
        }

        t = list[i].count > 0 ? list[i].count : 1
        for (j = 0; j < t; j++) {
            token = new state.Token('footnote_anchor', '', 0)
            token.meta = {id: i, subId: j, label: list[i].label}
            state.tokens.push(token)
        }

        if (lastParagraph) {
            state.tokens.push(lastParagraph)
        }

        token = new state.Token('footnote_item_close', '', -1)
        state.tokens.push(token)
    }

    token = new state.Token('footnote_list_close', '', -1)
    state.tokens.push(token)

    return true;
}

export const MarkdownItFootnote = (md: MarkdownIt) => {
    const calculateId = (id: number, subId: number): string => {
        return id + 1 + (subId > 0 ?  ':' + subId : '')
    }

    /**
     * 渲染脚标说明
     */
    const renderFootnoteCaption = (tokens: Token[], idx: number): string => {
        const {id, subId} = tokens[idx].meta

        return '[' + calculateId(id, subId) + ']'
    }

    const renderFootnoteRef = (tokens: Token[], idx: number): VNode => {
        const {id, subId} = tokens[idx].meta
        const caption = renderFootnoteCaption(tokens, idx)
        const refId = calculateId(id, subId)

        return createVNode('sup', {class: "footnote-ref"}, [
            createVNode('a', {href: `#fn${id + 1}`, id: `fnRef${refId}`, innerText: caption})
        ])
    }

    const renderFootnoteList = () => {
        const ol = createVNode('ol', {class: 'footnotes-list'}, [])
        // 将 ol 作为 parent 给出去，便于将 footnote 渲染进去
        return {
            parent: ol,
            node: createVNode(Fragment, {}, [
                createVNode('hr', {class: 'footnote-sep'}),
                createVNode('section', {class: 'footnotes'}, [ol])
            ])
        }
    }

    const renderFootnoteItem = (tokens: Token[], idx: number): VNode => {
        const {id, subId} = tokens[idx].meta
        const itemId = calculateId(id, subId)
        return createVNode('li', {id: 'fn' + itemId, class: 'footnote-item'}, [])
    }

    const renderFootnoteAnchor = (tokens: Token[], idx: number): VNode => {
        const {id, subId} = tokens[idx].meta
        const anchorId = calculateId(id, subId)
        return createVNode('a', {href: `#fnRef${anchorId}`, class: "footnote-backref", innerText: "\u21a9\uFE0E"});
    }

    md.renderer.rules = <any>{
        ...md.renderer.rules,
        'footnote_ref': renderFootnoteRef,
        'footnote_list_open': renderFootnoteList,
        'footnote_list_close': () => null,
        'footnote_item_open': renderFootnoteItem,
        'footnote_item_close': () => null,
        'footnote_anchor': renderFootnoteAnchor
    }

    md.block.ruler.before('reference', 'footnote_def', footnoteDef, {alt: ['paragraph', 'reference']})
    md.inline.ruler.after('image', 'footnote_inline', footnoteInline)
    md.inline.ruler.after('footnote_inline', 'footnote_ref', footnoteRef)
    md.core.ruler.after('inline', 'footnote_list', footnoteList)
}

