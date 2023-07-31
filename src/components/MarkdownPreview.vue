<template>
	<div class="markdown-body" @click="onClick" ref="node">
		<VNodeComponent :content="renderResult"></VNodeComponent>
	</div>
</template>

<script lang="ts">
export default {
	name: 'MarkdownPreview',
}
</script>

<script lang="ts" setup>
import {nextTick, onMounted, Ref, ref, VNode, watch} from "vue";
import 'katex/dist/katex.css'
import {api as viewerApi} from "v-viewer"
import "viewerjs/dist/viewer.css";

import {copyCode} from "../utils/common/copy";
import {md} from "../core";
import {VNodeComponent} from "../core/VNodeComponent";
import {batchRenderMermaid} from "../core/plugins/fenceCode/mermaidVNode";

import '../../src/assets/code.css';
import '../../src/assets/markdown.css';

/**
 * 外部传入参数
 */
const props = defineProps({
	markdownText: {
		type: String,
		required: true,
	},

	suspend: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const node: Ref<HTMLElement | undefined | null> = ref();
const renderResult: Ref<VNode[]> = ref([])

onMounted(() => {
	renderResult.value = <any>md.render(props.markdownText);
	nextTick(() => {
		if (node.value) batchRenderMermaid(node.value);
	})

	watch(() => props.markdownText, () => {
		if (props.suspend) return;
		renderResult.value = <any>md.render(props.markdownText);
	})

	watch(() => props.suspend, (newVal) => {
		if (!newVal) {
			renderResult.value = <any>md.render(props.markdownText);
		}
	})

	watch(() => renderResult.value, () => {
		nextTick(() => {
			if (node.value) batchRenderMermaid(node.value);
		})
	})
})

const getSvgParent = (element: HTMLElement): SVGSVGElement | null => {
	let parentElement: HTMLElement | null = element;

	while (true) {
		if (!parentElement || parentElement == document.documentElement) break;
		if (parentElement instanceof SVGSVGElement) {
			return parentElement;
		}
		parentElement = parentElement.parentElement;
	}
	return null;
}

const imageView = (element: Element) => {
	const container = <HTMLElement>node.value;
	const images = container.querySelectorAll('img, svg');
	const imageSrcList = [];

	let initIndex = 0;
	let flag = 0;

	for (let i = 0; i < images.length; i++) {
		if (images[i] instanceof HTMLImageElement && !images[i].classList.contains('error')) {
			imageSrcList.push((<HTMLImageElement>images[i]).src);
		} else if (images[i] instanceof SVGSVGElement) {
			const clone = <SVGSVGElement>images[i].cloneNode(true);
			const serializer = new XMLSerializer();
			const svgString = serializer.serializeToString(clone);
			// 将字符串编码为Base64格式
			const base64String = btoa(svgString);
			imageSrcList.push(`data:image/svg+xml;base64,${base64String}`);
		}

		if (flag == 0) {
			if (element == images[i]) {
				flag = 1;
			} else {
				initIndex ++;
			}
		}
	}

	viewerApi({images: imageSrcList, options: {initialViewIndex: initIndex, zIndex: 20000}});
}

const onClick = (e: MouseEvent) => {
	if (e.target && node.value) {
		const element = <HTMLElement>(e.target);

		// 代码复制处理
		if (element.classList.contains("code-copy-button")) {
			copyCode(e);
			return;
		}

		// 图片处理
		if (element instanceof HTMLImageElement && !element.classList.contains('error')) {
			imageView(element);
			return;
		}

		const svgSvgElement = getSvgParent(element)

		if (svgSvgElement) {
			imageView(svgSvgElement);
			return;
		}
	}
}
</script>