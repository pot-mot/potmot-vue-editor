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

/**
 * 格式化一个字符串在特定字符串包围中的部分
 *
 * @param input 入参
 * @param side 包围的边缘
 * @param insideProcess 对包围内字符串部分的处理函数
 * @param outsideProcess 对包围外字符串部分的处理函数
 */
const formatSurround = (
	input: string,
	side: string | string[],
	insideProcess: (input: string) => string,
	outsideProcess: (input: string) => string = (input: string) => {return input}
) => {
	let res: string = "";
	let flag = false;
	let index = 0;

	if (side instanceof Array) {
		for (let i = 0; i < input.length; i++) {
			for (const item of side) {
				const sideLength = item.length;
				if (input.slice(i, i + sideLength) == item) {
					if (flag) {
						res += insideProcess(input.slice(index + sideLength, i));
						index = i + sideLength;
					} else {
						res += outsideProcess(input.slice(index, i));
						index = i;
					}

					flag = !flag;
					break;
				}
			}
		}
		return res + outsideProcess(input.slice(index));
	} else {
		let sideLength = side.length;

		for (let i = 0; i < input.length - (sideLength - 1); i++) {
			if (input.slice(i, i + sideLength) == side) {
				if (flag) {
					res += insideProcess(input.slice(index + sideLength, i));
					index = i + sideLength;
				} else {
					res += outsideProcess(input.slice(index, i));
					index = i;
				}
				flag = !flag;
			}
		}

		return res + outsideProcess(input.slice(index));
	}
}

const format = (input: string) => {
	return formatSurround(input, ["```", "~~~"], formatCode, formatMarkdown);
}

const formatMarkdown = (input: string) => {
	try {
		const markdownString = marked.parse(input)
			.replaceAll('<a ', '<a target="_blank" ')
			.replaceAll('>\n', '>');

		return formatSurround(markdownString, ['<pre><code>', '</code></pre>'], setCodeLine, formatMath);
	} catch (e) {
		return "<span style='color: red'>[markdown 解析错误]</span><br>" + e + "<br>" + input;
	}
}

const formatMath = (input: string) => {
	try {
		return formatSurround(input, "$$", katex.renderToString)
	} catch (e) {
		return "<span style='color: red'>[数学算式解析错误]</span><br>" + e + "<br>" + input;
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