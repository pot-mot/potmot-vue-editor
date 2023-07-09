import {marked} from "marked";
import TokenizerAndRendererExtension = marked.TokenizerAndRendererExtension;
import {mathRender} from "../../utils/preview/renderer";

// 块级数学式
export const mathBlockRule: TokenizerAndRendererExtension = {
    level: 'block',
    name: 'math_block',
    start(src) {
        return src.match(/\$\$([\s\S]*?)\$\$/)?.index;
    },
    tokenizer(src): marked.Tokens.Generic | void {
        const rule = /^\$\$([\s\S]*?)\$\$/;
        const match: RegExpExecArray | null = rule.exec(src);
        if (match) {
            try {
                return {
                    type: 'math_block',
                    raw: match[0],
                    text: match[1].trim()
                };
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    },
    renderer(token: marked.Tokens.Generic): string {
        return `<div class="math">${mathRender(token.text)}</div>`
    },
};

// 行内数学式
export const mathInlineRule: TokenizerAndRendererExtension = {
    level: 'inline',
    name: 'math_inline',
    start(src) {
        return src.match(/\$([\s\S]*?)\$/)?.index;
    },
    tokenizer(src): marked.Tokens.Generic | void {
        const rule = /^\$([\s\S]*?)\$/;
        const match: RegExpExecArray | null = rule.exec(src);
        if (match) {
            try {
                return {
                    type: 'math_inline',
                    raw: match[0],
                    text: match[1].trim()
                };
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    },
    renderer(token: marked.Tokens.Generic): string {
        return `<span class="math">${mathRender(token.text)}</span>`
    },
};

// 高亮块
export const warningRule: TokenizerAndRendererExtension = {
    level: 'inline',
    name: 'warning_inline',
    start(src) {
        return src.match(/==(\(.*\))?([\s\S]*?)==/)?.index;
    },
    tokenizer(src): marked.Tokens.Generic | void {
        const rule = /^==(\(.*\))?([\s\S]*?)==/;
        const match: RegExpExecArray | null = rule.exec(src);
        if (match) {
            try {
                return {
                    type: 'warning_inline',
                    raw: match[0],
                    text: match[2].trim(),
                    color: match[1] ? match[1].slice(1, -1).trim() : 'red'
                };
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    },
    renderer(token: marked.Tokens.Generic): string {
        return `<span style='color: ${token.color}'>${token.text}</span>`
    },
};

// 折叠块
export const detailRule: TokenizerAndRendererExtension = {
    level: 'block',
    name: 'detail',
    start(src) {
        return src.match(/:::([\s\S]*?):::/)?.index;
    },
    tokenizer(src): marked.Tokens.Generic | void {
        const rule = /^:::(.*)\n([\s\S]*?):::/;
        const match: RegExpExecArray | null = rule.exec(src);
        if (match) {
            try {
                return {
                    type: 'detail',
                    raw: match[0],
                    summary: match[1].trim(),
                    detail: match[2].trim(),
                };
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    },
    renderer(token: marked.Tokens.Generic): string {
        const opt = this.parser.options

        if (token.summary.startsWith('+')) {
            return `<details open><summary>${token.summary.substring(1)}</summary>${marked(token.detail, opt)}</details>`
        }

        return `<details><summary>${token.summary}</summary>${marked(token.detail, opt)}</details>`
    },
};

// 脚注
export const footnote: TokenizerAndRendererExtension = {
    level: 'block',
    name: 'footnote',
    start(src) {
        return src.match(/\[\^(.*)]:(.*)/)?.index;
    },
    tokenizer(src) {
        const rule = /^\[\^(.*)]:(.*)/;
        const match: RegExpExecArray | null = rule.exec(src);
        if (match) {
            try {
                return {
                    type: 'footnote',
                    raw: match[0],
                    label: match[1],
                    value: match[2],
                };
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    },
    renderer(token: marked.Tokens.Generic): string {
        return `<p>
<span>${token.label}</span>
<span>${token.value}</span>
<a name="footnote-${token.label}" href="#${token.label}" title='回到文档'>↩</a>
</p>`
    }
}

// 脚注引用
export const footnoteRef: TokenizerAndRendererExtension = {
    level: 'inline',
    name: 'footnoteRef',
    start(src) {
        return src.match(/\[\^(.*)]/)?.index;
    },
    tokenizer(src) {
        const rule = /^\[\^(.*)]/;
        const match: RegExpExecArray | null = rule.exec(src);
        if (match) {
            try {
                return {
                    type: 'footnoteRef',
                    raw: match[0],
                    label: match[1],
                };
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    },
    renderer(token: marked.Tokens.Generic): string {
        return `<sup><a name="${token.label}" href='#footnote-${token.label}'>${token.label}</a></sup>`
    }
}