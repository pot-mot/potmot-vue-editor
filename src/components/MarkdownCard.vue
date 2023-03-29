<template>
	<div ref="markdownCard" class="markdown-card" v-html="format(props.markdownText)"></div>
</template>

<script lang="ts" setup>
import Prism from "prismjs";

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
	isCodeFold: {
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
					res += markdownString.slice(start, i);
					start = i;
				} else {
					res += setCodeLine(markdownString.slice(start + 3, i));
					start = i + 3;
				}
				flag = !flag;
			}
		}

		return res + markdownString.slice(start);
	} catch (e) {
		return "<div style='color: red'>markdown 解析错误</div>\n" + e + "\n" + markdownString;
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
		return setCodeLineWithStyle(code, language);
	} catch (e) {
		return "<div style='color: red'>代码解析错误</div>\n" + e + "\n" + codeString;
	}
}

// 不带语言的代码块的解析
const setCodeLine = (code: string) => {
	if (code[code.length - 1] == '\n') {
		code = code.slice(0, code.length - 1);
	}
	let codes = code.split("\n");
	let res = '<code>';
	for (let i = 0; i < codes.length; i++) {
		res += '<span class="count"></span>' + codes[i] + '\n';
	}
	let postfix = '<div class="code-copy-button iconfont icon-copy"/>';
	res += '</code>';
	if (props.isCodeFold && codes.length > props.codeFoldThreshold) {
		res = '<pre class="fold ' + props.codeTheme + '">' + res + '<div class="code-fold-button show">展开</div>' + postfix + '</pre>';
	} else {
		res = '<pre class="' + props.codeTheme + '">' + res + postfix + '</pre>';
	}
	return res;
}

// 带语言的代码块的解析
const setCodeLineWithStyle = (code: string, language: string) => {
	for (const item of languageList) {
		if (item == language) {
			code = Prism.highlight(code, Prism.languages[language], language);
			break;
		}
	}

	let codes = code.split("\n");
	if (codes[codes.length - 1] == "") {
		codes = codes.slice(0, codes.length - 1);
	}

	let postfix = '<div class="code-copy-button iconfont icon-copy"/><div class="code-language">' + language + '</div>'
	let res = '<code>';
	for (let i = 0; i < codes.length; i++) {
		res += '<span class="count"></span>' + codes[i] + '\n';
	}
	res += '</code>';
	if (props.isCodeFold && codes.length > props.codeFoldThreshold) {
		res = '<pre class="fold ' + props.codeTheme + '">' + res + '<div class="code-fold-button show">展开</div>' + postfix + '</pre>';
	} else {
		res = '<pre class="' + props.codeTheme + '">' + res + postfix + '</pre>';
	}
	return res;
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
			window.scrollBy({top: -pre.scrollHeight + 600, behavior: "smooth"});
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

	if (props.isCodeFold) {
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
.markdown-card {
	--quote--border: 0.2em solid #ddd;
	--quote-back-color: #efefef;

	--table-border-color: #ddd;
	--table-head-back-color: #eee;
	--table-body-back-color: #fefefe;

	white-space: pre-wrap;
	margin: 0;
	* {
		box-sizing: border-box;
		margin: 0;
		overflow-wrap: anywhere;
	}

	> h1,
	> h2 {
		padding: 0.4em 0 0.5em;
	}
	> h3,
	> h4 {
		padding: 0.2em 0 0.3em;
	}

	> blockquote {
		border-left: var(--quote--border);
		background-color: var(--quote-back-color);
		padding: 0.6em 0.3em;
		font-style: italic;
		color: #333;
	}

	> pre {
		margin: 0.5em 0;
	}
	> pre.fold {
		max-height: 15em;
		overflow-y: hidden;
		overflow-x: hidden;
	}
	> pre.show {
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
		td,
		th {
			padding: 0.2em 0.4em;
			border: 1px solid var(--table-border-color);
			min-width: 3em;
			max-width: 20em;
		}
		th {
			background-color: var(--table-head-back-color);
		}
		td {
			background-color: var(--table-body-back-color);
		}
	}

	img {
		width: 100%;
	}
}
</style>