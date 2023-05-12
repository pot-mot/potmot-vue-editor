<template>
	<div ref="markdownCard" class="markdown-card" v-html="parse(props.markdownText)"></div>
</template>

<script lang="ts">
export default {
	name: 'MarkdownPreview'
}
</script>

<script lang="ts" setup>
import {onBeforeUnmount, ref} from "vue";
import {marked, Renderer, Tokenizer} from "marked";
import {
	detailRule,
	mathBlockRule,
	mathInlineRule,
	warningRule
} from "../util/preview/markedRules";
import {copyCode} from "../util/preview/codeUtil";
import 'katex/dist/katex.css'
import {codeRender, mathRender, mermaidRender} from "../util/preview/render";

/**
 * 外部传入参数
 *
 * codeTheme 代码主题，作用于块级代码 pre 上的 css 类名，对应样式可自行设计
 * editorType 编辑器模式，会关闭mermaid图表渲染
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
	editorType: {
		type: Boolean,
		required: false,
		default: false
	}
})

let markdownCard = ref();

const tokenizer = new Tokenizer()

// @ts-ignore
tokenizer.lheading = (src: string) => {
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

renderer.code = (code: string, language: string): string => {
	if (language == 'mermaid') {
		return `<div class="mermaid">${code}</div>`
	} else if (language == 'math') {
		return `<div class="math">${mathRender(code)}</div>`
	}
	code = codeRender(code, language)
	return `<pre class="${props.codeTheme}"><code>${code}</code><div class="code-copy-button" title="复制"></div><div class="code-language">${language}</div></pre>`;
}

// 设置按钮点击事件
const setButtonEvent = () => {
	if (markdownCard.value == undefined) return;

	const items = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.code-copy-button'));
	for (const item of items) {
		item.addEventListener("click", copyCode);
	}
}

// 设置mermaid渲染块逻辑
const renderMermaid = () => {
	if (markdownCard.value == undefined) return;

	const items = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.mermaid'));

	for (const item of items) {
		if (item.innerText.indexOf("<svg") != -1) continue
		mermaidRender(item)
	}
}

let oldMarkdownString = ""

const eventInterval = setInterval(
	() => {
		if (oldMarkdownString == props.markdownText) return
		oldMarkdownString = props.markdownText
		setButtonEvent();
		renderMermaid();
	},
	1000
)

onBeforeUnmount(() => {
	clearInterval(eventInterval)
})

marked.setOptions({
	breaks: true,
	smartLists: true
})

marked.use({
	extensions: [mathBlockRule, mathInlineRule, warningRule, detailRule],
})

// 转换代码
const parse = (input: string): string => {
	return marked.parse(input, {tokenizer, renderer}).replaceAll('<a ', '<a target="_blank" ')
}
</script>