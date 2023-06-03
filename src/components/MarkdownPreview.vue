<template>
    <div ref="markdownCard" class="markdown-card" v-html="html" @click="judgeCopyCode"></div>
</template>

<script lang="ts">
export default {
    name: 'MarkdownPreview'
}
</script>

<script lang="ts" setup>
import {PropType, ref, watch} from "vue";
import {marked, Renderer, Tokenizer} from "marked";
import {
    detailRule,
    mathBlockRule,
    mathInlineRule,
    warningRule
} from "../util/preview/markedRules";
import {copyCode} from "../util/preview/codeUtil";
import 'katex/dist/katex.css'
import {codeRender, mathRender, mermaidBatchRender} from "../util/preview/render";
import TokenizerAndRendererExtension = marked.TokenizerAndRendererExtension;
import {watchForNoChange} from "../util/common/common";

/**
 * 外部传入参数
 */
const props = defineProps({
    markdownText: {
        type: String,
        required: true,
    },
    codeTheme: {
        type: String,
        required: false,
        default: 'potmot-dark',
    },

    extension: {
        type: Array as PropType<TokenizerAndRendererExtension[]>,
        required: false,
        default: []
    },

    suspend: {
        type: Boolean,
        required: false,
        default: false,
    }
})

let markdownCard = ref();

const tokenizer = new Tokenizer()

tokenizer.lheading = (src: string): any => {
    const cap = /^((?:.|\n(?!\n))+?)\n(=+|-+)\n/.exec(src);
    if (cap) {
        return {
            type: 'heading',
            raw: cap[0],
            depth: cap[2].charAt(0) == '=' ? 1 : 2,
            text: cap[1],
            // @ts-ignore
            tokens: tokenizer.lexer.inline(cap[1])
        };
    }
}

const renderer = new Renderer()

renderer.link = (href, title, text): string => {
    if (href == null) {
        return text;
    }
    let out = `<a target="_blank" href="${href}"`;
    if (title) {
        out += ` title="${title}"`;
    }
    out += `>${text}</a>`;
    return out;
}

renderer.code = (code: string, language: string): string => {
    if (language == 'mermaid') {
        if (mermaidCache.has(code)) return `<div>${mermaidCache.get(code)}</div>`
        return `<div class="mermaid">${code}</div>`
    } else if (language == 'math') {
        return `<div class="math">${mathRender(code)}</div>`
    }
    code = codeRender(code, language)
    return `<pre class="${props.codeTheme}"><code>${code}</code><div class="code-copy-button" title="复制"></div><div class="code-language">${language}</div></pre>`;
}

const judgeCopyCode = (e: MouseEvent) => {
    if (e.target) {
        const element = <HTMLElement>(e.target);
        if (element.classList.contains("code-copy-button")) {
            copyCode(e);
        }
    }
}

// mermaid 渲染
const mermaidCache = new Map<string, string>()

const renderMermaid = () => {
    if (markdownCard.value == undefined) return;

    const elements = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.mermaid'));

    mermaidBatchRender(elements, mermaidCache)
}

watchForNoChange(() => props.markdownText, () => {
    if (props.suspend) return
    renderMermaid()
})

marked.setOptions({
    breaks: true,
    smartLists: true
})

marked.use({
    extensions: [mathBlockRule, mathInlineRule, warningRule, detailRule, ...props.extension],
})

let html = ref(marked(props.markdownText, {tokenizer, renderer}))

watch(() => props.markdownText, () => {
    if (props.suspend) return
    html.value = marked(props.markdownText, {tokenizer, renderer});
})

watch(() => props.suspend, (value) => {
    if (value == false) {
        html.value = marked(props.markdownText, {tokenizer, renderer})
        renderMermaid()
    }
})
</script>