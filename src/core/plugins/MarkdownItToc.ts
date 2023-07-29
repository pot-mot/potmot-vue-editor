import {h, VNode} from 'vue'
import Markdown from 'markdown-it'
import Token from "markdown-it/lib/token";
import StateInline from 'markdown-it/lib/rules_inline/state_inline'
import {slugifyHeadingId} from "../../utils/common/text";
import MarkdownIt from "markdown-it";
import Renderer from "markdown-it/lib/renderer";

interface MarkdownItTocOptions {
    level: number[],
    containerClass: string,
    slugify: (text: string) => string,
    markerPattern: RegExp,
    type: string,
    format: (text: string) => string,
    forceFullToc: boolean,
    containerHeaderHtml: string,
    containerFooterHtml: string
}

interface TocItem {
    pos: number,
    text: string,
}

const defaults: MarkdownItTocOptions = {
    level: [2, 3],
    containerClass: 'table-of-contents',
    slugify: slugifyHeadingId,
    markerPattern: /^\[toc](.*?)$/im,
    type: 'ol',
    format: (str) => str,
    forceFullToc: false,
    containerHeaderHtml: '',
    containerFooterHtml: ''
}

export const MarkdownItToc = (md: Markdown, options?: Partial<MarkdownItTocOptions>) => {
    const opts = Object.assign({}, defaults, options)
    const tocRegexp = opts.markerPattern;
    let gTokens: Token[];

    function toc(state: StateInline, silent: boolean) {
        let match

        // Reject if the token does not start with [
        if (state.src.charCodeAt(state.pos) != 0x5B) {
            return false
        }
        // Don't run any pairs in validation mode
        if (silent) {
            return false
        }

        // Detect TOC markdown
        match = tocRegexp.exec(state.src.slice(state.pos))
        match = !match ? [] : match.filter((m: any) => !!m)
        if (match.length < 1) {
            return false
        }

        if (match.length > 1) { // custom params.
            try {
                const ext = JSON.parse(match[1].replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": '))
                Object.assign(opts, ext)
            } catch (error) {
                console.warn('parse params error', match)
            }
        }

        // Build content
        const token = state.push('toc_body', 'toc', 0)
        token.markup = '[[toc]]'
        token.block = true

        // Update pos so the parser can continue
        const newline = state.src.indexOf('\n', state.pos)
        if (newline != -1) {
            state.pos = newline
        } else {
            state.pos = state.pos + state.posMax + 1
        }

        return true
    }

    function renderChildrenTokens(
        pos: number,
        options: MarkdownItTocOptions,
        tokens: Token[],
        currentLevel = 0,
    ): TocItem {
        const headings: string[] = [];
        const size = tokens.length;
        const result: TocItem = {pos, text: ''};

        let buffer = '';
        let i = pos <= 0 ? 1 : pos;

        while (i < size) {
            const token = tokens[i]
            const heading = tokens[i - 1]

            if (!token || !heading || heading.type != 'inline' || token.type != 'heading_close' || !token.tag || token.tag.length < 2) {
                i ++;
                continue;
            }

            const level: number = parseInt(token.tag.slice(1, 2))

            if (!opts.level.includes(level)) {
                i ++;
                continue;
            }

            if (!currentLevel) {
                currentLevel = level
            } else {
                if (level > currentLevel) {
                    const subHeadings = renderChildrenTokens(i, options, tokens, level);
                    buffer += subHeadings.text;
                    i = subHeadings.pos + 1;
                    continue;
                }
                if (level < currentLevel) {
                    buffer += '</li>';
                    headings.push(buffer);
                    result.text = `<${options.type}>${headings.join('')}</${options.type}>`;
                    return result;
                }
                if (level == currentLevel) {
                    buffer += '</li>';
                    headings.push(buffer);
                }
            }

            const slug = opts.slugify(heading.content)

            buffer = `<li><a href="#${slug}">`
            buffer += options.format(heading.content)
            buffer += '</a>'
            i++
        }
        buffer += buffer.length == 0 ? '' : '</li>';
        headings.push(buffer);

        result.text = `<${options.type}>${headings.join('')}</${options.type}>`;
        return result;
    }

    const renderTocBody = (): VNode | undefined => {
        if (!gTokens) {
            return undefined;
        }

        let tocBody = ''

        if (opts.forceFullToc) {
            let pos = 0
            const tokenLength = gTokens.length

            while (pos < tokenLength) {
                const tocHierarchy = renderChildrenTokens(pos, opts, gTokens);
                pos = tocHierarchy.pos;
                tocBody += tocHierarchy.text;
            }
        } else {
            tocBody = renderChildrenTokens(0, opts, gTokens).text;
        }

        const html = `
${opts.containerHeaderHtml}
${tocBody}
${opts.containerFooterHtml}
`
        return h('div', {key: html, class: opts.containerClass, innerHTML: html})
    }
    
    const renderTocHeadingOpen = (tokens: Token[], idx: number, opt: MarkdownIt.Options, env: any, slf: Renderer) => {
        const header = tokens[idx]
        const headContent = tokens[idx + 1]
        const slug = opts.slugify(headContent.content)

        if (header.attrIndex('id') < 0) {
            header.attrSet('id', slug)
        }

        header.attrSet('data-tag', header.tag)

        return slf.renderToken(tokens, idx, opt)
    }
    
    //@ts-ignore
    md.renderer.rules.toc_body = renderTocBody;

    md.renderer.rules.heading_open = renderTocHeadingOpen;

    // Catch all the tokens for iteration later
    md.core.ruler.push('grab_state', function (state) {
        // only heading close and heading content
        const maxIdx = state.tokens.length - 1
        gTokens = state.tokens.filter((token: any, i: number, arr: any[]) => {
            return token.type == 'heading_close' || (i < maxIdx && arr[i + 1].type == 'heading_close' && token.type == 'inline')
        })
        return true
    })

    // Insert TOC
    md.inline.ruler.after('emphasis', 'toc', toc)
}