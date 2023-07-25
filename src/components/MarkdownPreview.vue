<template>
	<div class="markdown-body">
		<div
			ref="markdownCard"
			v-html="html"
			@click="onClick">
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'MarkdownPreview',
}
</script>

<script lang="ts" setup>
import {nextTick, onMounted, PropType, ref, watch} from "vue";

import {marked} from "marked";
import TokenizerAndRendererExtension = marked.TokenizerAndRendererExtension;

import 'katex/dist/katex.css'
import {debounce} from "lodash";
import {api as viewerApi} from "v-viewer"
import "viewerjs/dist/viewer.css";

import {tokenizer} from "../utils/markedExtension/tokenizer";
import {renderer, mermaidBatchRender} from "../utils/markedExtension/renderer";
import {copyCode} from "../utils/common/copy";
import {
	detailRule,
	mathBlockRule,
	mathInlineRule,
	warningRule,
	footnote,
	footnoteRef,
} from "../utils/markedExtension/rules";

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
		type: Array as PropType<number[][]>,
		required: false,
		default: [[2000, 0], [5000, 80], [20000, 200], [50000, 300], [100000, 500], [200000, 2000]],
	},
});

let markdownCard = ref();

marked.setOptions({
	breaks: true,
	smartLists: true
});

marked.use({
	extensions: [mathBlockRule, mathInlineRule, warningRule, detailRule, footnote, footnoteRef, ...props.extension],
});

const html = ref("");

/**
 * 用于判断 markdown 渲染缓存的变量
 */
let oldMarkdownText: string = ""

const renderMarkdown = () => {
	oldMarkdownText = props.markdownText
	new Promise(() => {
		html.value = marked(props.markdownText, {tokenizer, renderer});
	});
}

// mermaid 渲染
const renderPicture = () => {
	if (markdownCard.value == undefined) return;
	const mermaidElements = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.mermaid'));
	mermaidBatchRender(mermaidElements);
}

let markdownRenderWatch: any

const judgeDebounce = () => {
	if (props.renderDebounce == undefined) return;

	let i

	for (i = 0; i < props.renderDebounce.length; i++) {
		if (props.markdownText?.length < props.renderDebounce[i][0]) {
			break
		}
	}

	if (markdownRenderWatch != undefined) {
		markdownRenderWatch();
	}

	if (i >= props.renderDebounce.length) {
		i = props.renderDebounce.length - 1
	}

	const timeout = props.renderDebounce[i][1]

	if (timeout == 0) {
		markdownRenderWatch = watch(() => props.markdownText, () => {
			if (props.suspend) return;
			renderMarkdown();
		});
	} else {
		markdownRenderWatch = watch(() => props.markdownText, debounce(() => {
			if (props.suspend) return;
			renderMarkdown();
		}, timeout));
	}
}

onMounted(() => {
	judgeDebounce();
	renderMarkdown();
	nextTick(() => {
		renderPicture();
	});

	watch(() => props.markdownText, debounce(judgeDebounce, 500),
		{immediate: true});

	watch(() => props.markdownText, debounce(() => {
		if (props.suspend) return;
		renderPicture();
	}, 1000));

	watch(() => props.suspend, (value) => {
		if (value == false && props.markdownText != oldMarkdownText) {
			renderMarkdown();
			nextTick(() => {
				renderPicture();
			});
		}
	});
});

const onClick = (e: MouseEvent) => {
	if (e.target && markdownCard.value) {
		const element = <HTMLElement>(e.target);

		if (element instanceof HTMLImageElement || element instanceof SVGElement) {
			const container = <HTMLElement>markdownCard.value
			const images = container.querySelectorAll('img, svg');
			const imageSrcList = []
			let index
			for (let i = 0; i < images.length; i++) {
				if (images[i] instanceof HTMLImageElement) {
					imageSrcList.push((<HTMLImageElement>images[i]).src);
				} else if (images[i] instanceof SVGElement) {
					imageSrcList.push(`data:image/svg+xml,${encodeURIComponent((<SVGElement>images[i]).outerHTML)}`);
				} else {
					imageSrcList.push('');
				}

				if (images[i] == element) {
					index = i
				}
			}
			viewerApi({images: imageSrcList, options: {initialViewIndex: index}});
		}

		if (element.classList.contains("code-copy-button")) {
			copyCode(e);
		}
	}
}

defineExpose({
	markdownCard
});
</script>

<style scoped lang="scss">
.markdown-body > .image-preview {
	position: fixed;

	height: 100vh;
	width: 100vw;

	overflow: hidden;
}
</style>