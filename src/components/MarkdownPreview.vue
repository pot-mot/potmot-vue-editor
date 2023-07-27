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
import {onMounted, Ref, ref, VNode, watch} from "vue";

import 'katex/dist/katex.css'
import {api as viewerApi} from "v-viewer"
import "viewerjs/dist/viewer.css";

import {copyCode} from "../utils/common/copy";
import {md} from "../core/markdownToVnode";
import {VNodeComponent} from "../core/VNodeComponent";

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

const node = ref();
const renderResult: Ref<VNode[]> = ref([])

onMounted(() => {
	watch(() => props.markdownText, () => {
		if (!node.value) return;
		renderResult.value = <any>md.render(props.markdownText);
	}, {immediate: true})
})

const onClick = (e: MouseEvent) => {
	if (e.target && node.value) {
		const element = <HTMLElement>(e.target);

		if (element instanceof HTMLImageElement || element instanceof SVGElement) {
			const container = <HTMLElement>node.value
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

			viewerApi({images: imageSrcList, options: {initialViewIndex: index, zIndex: 20000}});
		}

		if (element.classList.contains("code-copy-button")) {
			copyCode(e);
		}
	}
}
</script>

<style scoped lang="scss">
.markdown-body > .image-preview {
	position: fixed;

	height: 100vh;
	width: 100vw;

	overflow: hidden;
}
</style>