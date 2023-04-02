<template>
	<div ref="markdownCard" class="markdown-card" v-html="format(props.markdownText)"></div>
</template>

<script lang="ts">
export default {
	name: 'MarkdownPreview'
}
</script>

<script lang="ts" setup>
import Prism from "prismjs";
// @ts-ignore
import katex from 'katex';
import 'katex/dist/katex.css'

import {onMounted, ref} from "vue";
import {marked} from "marked";
import {languageList} from "../constant/LanguageList";

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
	codeFold: {
		type: Boolean,
		required: false,
		default: false,
	},
	codeFoldThreshold: {
		type: Number,
		required: false,
		default: 20,
	},
})

let markdownCard = ref();

const copy = (text: string) => {
	const handleCopy = (e: ClipboardEvent) => {
		e.preventDefault();
		e.clipboardData && e.clipboardData.setData('text/plain', text);
		document.removeEventListener('copy', handleCopy);
	};
	document.addEventListener('copy', handleCopy);
	document.execCommand('copy');
}

const format = (markdownString: string) => {
	let res: string = "";
	let flag = true;
	let start = 0;

	for (let i = 0; i < markdownString.length - 2; i++) {
		if (markdownString.slice(i, i + 3) == '```') {
			if (flag) {
				res += formatMarkdown(markdownString.slice(start, i));
				start = i;
			} else {
				res += formatCode(markdownString.slice(start + 3, i));
				start = i + 3;
			}
			flag = !flag;
		}
	}

	return res + formatMarkdown(markdownString.slice(start));
}

const formatMarkdown = (markdownString: string) => {
	try {
		markdownString = marked.parse(markdownString)
			.replaceAll('<a ', '<a target="_blank" ')
			.replaceAll('>\n', '>')
			.replaceAll('<pre><code>', '```')
			.replaceAll('</code></pre>', '```');

		let res: string = "";
		let flag = true;
		let start = 0;

		for (let i = 0; i < markdownString.length - 2; i++) {
			if (markdownString.slice(i, i + 3) == '```') {
				if (flag) {
					res += formatMath(markdownString.slice(start, i));
					start = i;
				} else {
					res += setCodeLine(markdownString.slice(start + 3, i));
					start = i + 3;
				}
				flag = !flag;
			}
		}
		return res + formatMath(markdownString.slice(start));
	} catch (e) {
		return "<span style='color: red'>[解析错误]</span><br>" + e + "<br>" + markdownString;
	}
}

const formatMath = (markdownString: string) => {
	try {
		let res: string = "";
		let flag = true;
		let start = 0;
		for (let i = 0; i < markdownString.length - 1; i++) {
			if (markdownString.slice(i, i + 2) == '$$') {
				if (flag) {
					res += markdownString.slice(start, i);
					start = i;
				} else {
					res += katex.renderToString(markdownString.slice(start + 2, i));
					start = i + 2;
				}
				flag = !flag;
			}
		}
		return res + markdownString.slice(start);
	} catch (e) {
		return "<span style='color: red'>[数学算式解析错误]</span><br>" + e + "<br>" + markdownString;
	}
}

const formatCode = (codeString: string) => {
	try {
		let code = codeString.replaceAll("\\`", "`");
		let language = "";
		try {
			let i = code.indexOf('\n');
			language = code.slice(0, i).trim();
			code = code.slice(i + 1);
		} catch (e) {
			code = code.slice(code.indexOf('\n') + 1);
		}
		return setCodeLineWithLanguage(code, language);
	} catch (e) {
		return "<span style='color: red'>[代码解析错误]</span><br>" + e + "<br>" + codeString;
	}
}

// 无指定语言的代码块
const setCodeLine = (code: string, before: string = "", after: string = "") => {
	if (code[code.length - 1] == '\n') {
		code = code.slice(0, code.length - 1);
	}
	let codes = code.split("\n");
	let res = '<code>' + before;
	for (let i = 0; i < codes.length; i++) {
		res += '<span class="count"></span>' + codes[i] + '\n';
	}
	let postfix = '<div class="code-copy-button iconfont icon-copy" title="复制"/>' + after;
	res += '</code>';
	if (props.codeFold && codes.length > props.codeFoldThreshold) {
		res = '<pre class="fold ' + props.codeTheme + '">' + res + '<div class="code-fold-button show">展开</div>' + postfix + '</pre>';
	} else {
		res = '<pre class="' + props.codeTheme + '">' + res + postfix + '</pre>';
	}
	return res;
}

// 带语言的代码块
const setCodeLineWithLanguage = (code: string, language: string) => {
	for (const item of languageList) {
		if (item == language) {
			code = Prism.highlight(code, Prism.languages[language], language);
			break;
		}
	}
	return setCodeLine(code, '', '<div class="code-language">' + language + "</div>");
}

const foldCode = (e: MouseEvent) => {
	let node = <HTMLElement>e.target;
	let pre = <HTMLElement>node.parentNode;
	if (pre.classList.contains("fold")) {
		pre.classList.remove("fold");
		node.textContent = "收起";
		node.classList.remove("show");
	} else {
		if (pre.scrollHeight > 600) {
			window.scrollTo({top: pre.offsetTop});
		}
		pre.classList.add("fold");
		node.textContent = "展开";
		node.classList.add("show");
	}
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

const setButtonEvent = () => {
	if (markdownCard.value == undefined) return;

	if (props.codeFold) {
		const foldButtons = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.code-fold-button'));
		for (let i = 0; i < foldButtons.length; i++) {
			foldButtons[i].removeEventListener("click", foldCode);
			foldButtons[i].addEventListener("click", foldCode);
		}
	}

	const copyButtons = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.code-copy-button'));
	for (let i = 0; i < copyButtons.length; i++) {
		copyButtons[i].removeEventListener("click", copyCode);
		copyButtons[i].addEventListener("click", copyCode);
	}
}

onMounted(setButtonEvent);

setInterval(setButtonEvent, 1000);
</script>

<style lang="scss">
@import "../asserts/code/code.css";

.markdown-card {
	--border-color: #ddd;
	--deep-back-color: #eee;
	--light-back-color: #fafafa;

	white-space: pre-wrap;
	margin: 0;

	* {
		box-sizing: border-box;
		margin: 0;
		overflow-wrap: anywhere;
	}

	h1, h2, h3, h4 {
		padding: 0.2em 0;
	}

	blockquote {
		border-left: 0.4em solid var(--border-color);
		background-color: var(--light-back-color);
		padding: 0.5em;
		font-style: italic;
		color: #333;
	}

	pre {
		padding: 0.5em 0;
	}

	pre.fold {
		max-height: 15em;
		overflow-y: hidden;
		overflow-x: hidden;
	}

	pre.show {
		overflow-y: visible;
		overflow-x: scroll;
	}

	ol > li {
		list-style-type: decimal;
		margin-left: 2em;
		line-height: inherit;
	}

	ul > li {
		list-style-type: disc;
		margin-left: 2em;
		line-height: inherit;
	}

	table {
		border-collapse: collapse;
		padding-top: 0.2em;
		padding-bottom: 0.2em;
		border: 1px solid var(--border-color);

		td,
		th {
			padding: 0.2em 0.4em;
			border: none;
			min-width: 3em;
			max-width: 100%;
		}

		th {
			background-color: var(--deep-back-color);
			border-bottom: 1px solid var(--border-color);
		}

		> tr:nth-child(2n-1) {
			background-color: var(--light-back-color);
		}

		> tr:nth-child(2n) {
			background-color: var(--deep-back-color);
		}
	}

	img {
		width: 100%;
	}
}
</style>