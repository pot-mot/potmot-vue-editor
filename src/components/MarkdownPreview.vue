<template>
	<div ref="markdownCard" class="markdown-card" v-html="parse(props.markdownText)"></div>
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

import {onBeforeUnmount, onMounted, ref} from "vue";
import {marked} from "marked";
import {languageList} from "../constant/LanguageList";

/**
 * 外部传入参数
 *
 * codeTheme 代码主题，作用于块级代码 pre 上的 css 类名，对应样式可自行设计
 * codeFold 是否开启代码块折叠
 * codeFoldThreshold 代码块折叠阈值，行数到达后开启折叠
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

/**
 * 转化一个字符串在特定字符串包围中或包围外的部分
 *
 * @param input 入参
 * @param surround 包围 包含起点和终点
 * @param insideProcess 对包围内字符串部分的处理函数
 * @param outsideProcess 对包围外字符串部分的处理函数
 */
const parseSurround = (
	input: string,
	surround: { start: string, end: string } | { start: string, end: string }[],
	insideProcess: (input: string, index?: number) => string = (input: string) => {
		return input
	},
	outsideProcess: (input: string, index?: number) => string = (input: string) => {
		return input
	}
) => {
	if (surround instanceof Array) {
		let res: string = "";
		let flag = false;
		let index = 0;
		let end = ""

		for (let i = 0; i < input.length; i++) {
			for (let j = 0; j < surround.length; j++) {
				if (!flag && input.slice(i, i + surround[j].start.length) == surround[j].start) {
					flag = true;
					res += outsideProcess(input.slice(index, i), j);
					i += surround[j].start.length;
					index = i;
					end = surround[j].end
					break;
				}
			}
			if (flag && input.slice(i, i + end.length) == end) {
				flag = false;
				res += insideProcess(input.slice(index, i));
				i += end.length
				index = i;
			}
		}

		return res + outsideProcess(input.slice(index));
	} else {
		let {start, end} = surround;
		let res: string = "";
		let flag = false;
		let index = 0;

		for (let i = 0; i < input.length; i++) {
			if (!flag && input.slice(i, i + start.length) == start) {
				res += outsideProcess(input.slice(index, i));
				i += start.length;
				index = i;
				i--;
				flag = true;
			} else if (flag && input.slice(i, i + end.length) == end) {
				res += insideProcess(input.slice(index, i));
				i += end.length
				index = i;
				i--;
				flag = false;
			}
		}
		return res + outsideProcess(input.slice(index));
	}
}

const parse = (input: string) => {
	return parseSurround(input, {start: "$$", end: "$$"},
		(input: string) => {
			try {
				return katex.renderToString(input, {strict: false, displayMode: true});
			} catch (e) {
				return "<span style='color: red'>[数学算式解析错误]</span><br>" + e + "<br>" + input;
			}
		},
		(input: string) => {
			return parseSurround(input, [{start: "```", end: "```"}, {start: "~~~", end: "~~~"}],
				parseCode,
				parseMarkdown
			)
		})
}

const parseMarkdown = (input: string) => {
	return parseSurround(marked.parse(input), {start: '<pre><code>', end: '</code></pre>'},
		(input) => {
			return setCodeLine(input)
		},
		parseParagraph
	);
}


const parseParagraph = (input: string) => {
	try {
		return input
			.replaceAll('<a ', '<a target="_blank" ')
			.replaceAll('>\n', '>')
			.replaceAll('\n<', '<')
	} catch (e) {
		return "<span style='color: red'>[markdown 解析错误]</span><br>" + e + "<br>" + input;
	}
}

const parseCode = (codeString: string) => {
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

const setCodeLineWithLanguage = (code: string, language: string) => {
	for (const item of languageList) {
		if (item == language) {
			code = Prism.highlight(code, Prism.languages[language], language);
			break;
		}
	}
	return setCodeLine(code, '', '<div class="code-language">' + language + "</div>");
}

/*
	代码块相关操作
 */
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

let buttonInterval = 0;

onMounted(() => {
	setButtonEvent();
	buttonInterval = setInterval(setButtonEvent, 1000);
});

onBeforeUnmount(() => {
	clearInterval(buttonInterval);
})
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

		tr:nth-child(2n-1) {
			background-color: var(--light-back-color);
		}

		tr:nth-child(2n) {
			background-color: var(--deep-back-color);
		}
	}

	img {
		width: 100%;
	}
}
</style>