<template>
	<div ref="markdownCard" class="markdown-card" v-html="format(props.markdownText)"></div>
</template>

<script lang="ts" setup>
import Prism from "prismjs";

import {ref} from "vue";
import {marked} from "marked";

const props = defineProps({
	markdownText: {
		type: String,
		required: true,
	},
	isCodeFold: {
		type: Boolean,
		required: false,
		default: false,
	},
	codeTheme: {
		type: String,
		required: false,
		default: 'potmot-dark',
	}
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

const format = (markDownString: string) => {
	let res: string = "";
	let flag = true;
	let start = 0;

	for (let i = 0; i < markDownString.length - 2; i++) {
		if (markDownString.slice(i, i + 3) == '```') {
			if (flag) {
				res += formatMarkdown(markDownString.slice(start, i));
				start = i;
			} else {
				res += formatCode(markDownString.slice(start + 3, i));
				start = i + 3;
			}
			flag = !flag;
		}
	}

	res += formatMarkdown(markDownString.slice(start));

	return res;
}

const formatMarkdown = (markDownString: string) => {
	try {
		return marked.parse(markDownString).replaceAll('<a ', '<a target="_blank" ')
			.replaceAll('>\n', '>');
	} catch (e) {
		return "<div style='color: red'>markdown 解析错误</div>\n" + e + "\n" + markDownString;
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
		return setCodeStyle(code, language);
	} catch (e) {
		return "<div style='color: red'>代码解析错误</div>\n" + e + "\n" + codeString;
	}
}

const languageList: string[] = ['javascript','typescript','cpp','c','csharp','bash','go','rust','css','git','json','java','nginx','sql','vim','yaml','yml','html']

const setCodeStyle = (code: string, language: string) => {
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
		res +=  '<span class="count"></span>' + codes[i] + '\n';
	}
	res += '</code>';
	if (props.isCodeFold && codes.length > 20) {
		res = '<pre class="fold ' + props.codeTheme + '">' + res + '<div class="code-fold-button show">展开</div>'  + postfix + '</pre>';
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
		let code = <HTMLElement>node.previousElementSibling;
		let temp: string = code.textContent ? code.textContent : '';

		if (temp) {
			let list = temp.split("\n");
			temp = "";
			for (let i = 0; i < list.length; i++) {
				temp += list[i].replace((i + 1).toString(), '\n');
			}
			if (list[list.length - 1].trim() == "") {
				temp = temp.slice(list[list.length - 1].length);
			}
		}

		copy(temp);
		alert("已复制");
	} catch (e) {
		alert("复制失败:" + e);
	}
}

setInterval(() => {
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
}, 1000);
</script>

<style>
@import "../assets/style/code.css";
@import "../assets/style/iconfont.css";

.markdown-card {
	--quote--border: 0.2em solid #eee;
	--quote-back-color: #fafafa;

	--table-border-color: #efefef;
	--table-head-back-color: #fafafa;
	--table-body-back-color: #fff;

	white-space: pre-wrap;
	margin: 0;
}

.markdown-card * {
	box-sizing: border-box;
	margin: 0;
	overflow-wrap: anywhere;
}

.markdown-card h1,
.markdown-card h2 {
	padding: 0.4em 0 0.5em;
}

.markdown-card h3,
.markdown-card h4 {
	padding: 0.2em 0 0.3em;
}

.markdown-card > p {
	padding: 0 0 0.5em;
}

.markdown-card blockquote {
	border-left: var(--quote--border);
	background-color: var(--quote-back-color);
	padding: 0.6em 0.3em;
}

.markdown-card pre.fold {
	max-height: 15em;
	overflow-y: hidden;
	overflow-x: hidden;
}

.markdown-card pre.show {
	overflow-y: visible;
	overflow-x: scroll;
}

.markdown-card ol > li {
	list-style-type: decimal;
	margin-left: 2em;
	line-height: inherit;
}

.markdown-card ul > li {
	list-style-type: disc;
	margin-left: 2em;
	line-height: inherit;
}

.markdown-card table {
	border-collapse: collapse;
	padding-top: 0.2em;
	padding-bottom: 0.2em;
}

.markdown-card td,
.markdown-card th {
	padding: 0.2em 0.4em;
	border: 1px solid var(--table-border-color);
	min-width: 3em;
	max-width: 20em;
}

.markdown-card th {
	background-color: var(--table-head-back-color);
}

.markdown-card td {
	background-color: var(--table-body-back-color);
}

.markdown-card pre {
	margin: 0.5em 0;
	position: relative;
}
</style>