<template>
	<div ref="markdownCard" class="markdown-card" v-html="parse(props.markdownText)"></div>
</template>

<script lang="ts">
export default {
	name: 'MarkdownPreview'
}
</script>

<script lang="ts" setup>
// @ts-ignore
import katex from 'katex';
import 'katex/dist/katex.css'

import {onBeforeUnmount, ref} from "vue";
import {marked, Renderer} from "marked";
import {languageList} from "../constant/LanguageList";
import Prism from "prismjs";
import {detailRule, mathBlockRule, mathInlineRule, warningRule} from "../util/markedRules";

/**
 * 外部传入参数
 *
 * codeTheme 代码主题，作用于块级代码 pre 上的 css 类名，对应样式可自行设计
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
})

let markdownCard = ref();

marked.setOptions({
	breaks: true,
	smartLists: true,
})

const renderer = new Renderer()

renderer.code = (code: string, language: string): string => {
	for (const item of languageList) {
		if (item == language) {
			code = Prism.highlight(code, Prism.languages[language], language);
			break;
		}
	}
	return `<pre class="${props.codeTheme}"><code>${setCodeLine(code)}</code><div class="code-copy-button" title="复制"></div><div class="code-language">${language}</div></pre>`;
}

const setCodeLine = (code: string) => {
	if (code[code.length - 1] == '\n') {
		code = code.slice(0, code.length - 1);
	}
	let codes = code.split("\n");
	let res = ''
	for (let i = 0; i < codes.length; i++) {
		res += '<span class="count"></span>' + codes[i] + '\n';
	}
	return res;
}

/*
	代码复制操作
 */
const copy = (text: string) => {
	const handleCopy = (e: ClipboardEvent) => {
		e.preventDefault();
		e.clipboardData && e.clipboardData.setData('text/plain', text);
		document.removeEventListener('copy', handleCopy);
	};
	document.addEventListener('copy', handleCopy);
	document.execCommand('copy');
}

const copyCode = (e: MouseEvent) => {
	let node = <HTMLElement>e.target;
	try {
		let code = <HTMLElement>node!.parentElement!.getElementsByTagName('code')[0];
		let temp: string = code.textContent ? code.textContent : '';
		copy(temp);
		alert("已复制");
	} catch (e) {
		alert("复制失败:" + e);
	}
}

// 设置按钮点击事件
const setButtonEvent = () => {
	if (markdownCard.value == undefined) return;

	const copyButtons = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.code-copy-button'));
	for (let i = 0; i < copyButtons.length; i++) {
		copyButtons[i].addEventListener("click", copyCode);
	}
}

let oldMarkdownString = ""

const buttonEventInterval = setInterval(
	() => {
		if (oldMarkdownString == props.markdownText) return
		oldMarkdownString = props.markdownText
		setButtonEvent();
	},
	1000
)

onBeforeUnmount(() => {
	clearInterval(buttonEventInterval)
})

// 转换代码
marked.use({
	extensions: [mathBlockRule, mathInlineRule, warningRule, detailRule],
})

const parse = (input: string) => {
	return marked(input, {renderer}).replaceAll('<a ', '<a target="_blank" ')
}
</script>