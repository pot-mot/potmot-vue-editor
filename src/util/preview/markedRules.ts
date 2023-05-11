import katex from 'katex';
import {marked} from "marked";
import TokenizerAndRendererExtension = marked.TokenizerAndRendererExtension;

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
        try {
            return katex.renderToString(token.text)
        } catch (e) {
            return `<span style='color: red'>[数学算式解析错误]</span><br>${token.text}`
        }
    },
};

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
        try {
            return katex.renderToString(token.text)
        } catch (e) {
            return `<span style='color: red'>[数学算式解析错误]</span><br>${token.text}`
        }
    },
};

export const warningRule: TokenizerAndRendererExtension = {
    level: 'inline',
    name: 'warning_inline',
    start(src) {
        return src.match(/!(\(.*\))?([\s\S]*?)!/)?.index;
    },
    tokenizer(src): marked.Tokens.Generic | void {
        const rule = /^!(\(.*\))?([\s\S]*?)!/;
        const match: RegExpExecArray | null = rule.exec(src);
        if (match) {
            try {
                return {
                    type: 'warning_inline',
                    raw: match[0],
                    text: match[2].trim(),
                    color: match[1]?match[1].slice(1, -1).trim():'red'
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