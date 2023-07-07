<template>
    <div ref="markdownCard" class="markdown-card" v-html="html" @click="judgeCopyCode"></div>
</template>

<script lang="ts">
export default {
    name: 'MarkdownPreview'
}
</script>

<script lang="ts" setup>
import {nextTick, onMounted, PropType, ref, watch} from "vue";

import {marked} from "marked";
import 'katex/dist/katex.css'
import {debounce} from "lodash";
import TokenizerAndRendererExtension = marked.TokenizerAndRendererExtension;

import {tokenizer} from "../utils/preview/tokenizer";
import {renderer, mermaidBatchRender} from "../utils/preview/renderer";
import {copyCode} from "../utils/preview/copyUtil";
import {
    detailRule,
    mathBlockRule,
    mathInlineRule,
    warningRule
} from "../utils/preview/markedRules";

/**
 * 外部传入参数
 */
const props = defineProps({
    markdownText: {
        type: String,
        required: true,
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
    },
    renderDebounce: {
        type: Boolean,
        required: false,
        default: false,
    }
})

let markdownCard = ref()

marked.setOptions({
    breaks: true,
    smartLists: true
})

marked.use({
    extensions: [mathBlockRule, mathInlineRule, warningRule, detailRule, ...props.extension],
})

const html = ref("")

const renderMarkdown = () => {
    html.value = marked(props.markdownText, {tokenizer, renderer})
}

// mermaid 渲染
const renderMermaid = () => {
    if (markdownCard.value == undefined) return;
    const elements = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.mermaid'));
    mermaidBatchRender(elements)
}

onMounted(() => {
    renderMarkdown()
    nextTick(() => {
        renderMermaid()
    })

    if (props.renderDebounce) {
        watch(() => props.markdownText, debounce(() => {
            if (props.suspend) return
            renderMarkdown()
        }, 200))
    } else {
        watch(() => props.markdownText, () => {
            if (props.suspend) return
            renderMarkdown()
        })
    }

    watch(() => props.markdownText, debounce(() => {
        if (props.suspend) return
        renderMermaid()
    }, 1000))

    watch(() => props.suspend, (value) => {
        if (value == false) {
            html.value = marked(props.markdownText, {tokenizer, renderer})
            nextTick(() => {
                renderMermaid()
            })
        }
    })
})

const judgeCopyCode = (e: MouseEvent) => {
    if (e.target) {
        const element = <HTMLElement>(e.target);
        if (element.classList.contains("code-copy-button")) {
            copyCode(e);
        }
    }
}
</script>