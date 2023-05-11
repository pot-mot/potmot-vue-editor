<template>
	<div ref="markdownCard" class="markdown-card" v-html="parse(props.markdownText)"></div>
</template>

<script lang="ts">
export default {
	name: 'MarkdownPreview'
}
</script>

<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {marked, Renderer} from "marked";
import {
	detailRule,
	mathBlockRule,
	mathInlineRule,
	warningRule
} from "../util/preview/markedRules";
import Prism from "prismjs";
import {prismLanguageList} from "../constant/typeList";
import {copyCode, setCodeLine} from "../util/preview/codeUtil";
import mermaid from "mermaid";
import 'katex/dist/katex.css'
import {random} from "mermaid/dist/utils";

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

const renderer = new Renderer()

renderer.code = (code: string, language: string): string => {
	if (language == 'mermaid') {
		return `<div class="mermaid">${code}</div>`
	}

	for (const item of prismLanguageList) {
		if (item == language) {
			code = Prism.highlight(code, Prism.languages[language], language);
			break;
		}
	}

	return `<pre class="${props.codeTheme}"><code>${setCodeLine(code)}</code><div class="code-copy-button" title="复制"></div><div class="code-language">${language}</div></pre>`;
}

// 设置按钮点击事件
const setButtonEvent = () => {
	if (markdownCard.value == undefined) return;

	const items = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.code-copy-button'));
	for (const item of items) {
		item.addEventListener("click", copyCode);
	}
}

onMounted(() => {
	mermaid.initialize({
		theme: "default"
	})
})

const mermaidRender = () => {
	if (markdownCard.value == undefined) return;

	const items = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.mermaid'));

	for (const item of items) {
		if (item.innerText.indexOf("<svg") != -1) continue
		const id = Math.floor(Math.random() * 10000000000)
		mermaid.render('mermaid' + id, item.innerHTML.replaceAll('&gt;', ">").replaceAll('&lt;', "<"))
			.then(res => {
				item.innerHTML = res.svg
			})
			.catch(e => {
				item.innerHTML = `<span style="color: red;">${e}</span>`
			})
	}
}

let oldMarkdownString = ""

const eventInterval = setInterval(
	() => {
		if (oldMarkdownString == props.markdownText) return
		oldMarkdownString = props.markdownText
		setButtonEvent();
		mermaidRender();
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
	return marked.parse(input, {renderer}).replaceAll('<a ', '<a target="_blank" ')
}
</script>