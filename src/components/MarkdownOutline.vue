<template>
	<ul class="outline">
		<li v-for="head in heads" :key="head.text">
			<a :style="'padding-left: ' + (head.level - 1) + 'em;'" :href="`#${head.text}`">
				{{ head.text }}
			</a>
		</li>
	</ul>
</template>

<script lang="ts">
export default {
	name: 'MarkdownOutline'
}
</script>

<script lang="ts" setup>
import {ref, watch} from "vue";
import {marked} from "marked";

const props = defineProps({
	markdownText: {
		type: String,
		required: true,
	}
})

interface Headline {
	level: string;
	text: string;
}

function getHeadFromHtmlText(html: string): Headline[] {
	const heads: Headline[] = [];
	const regex = /<h([1-6]) id="(.*?)">/g;
	let match: RegExpExecArray | null;
	while (match = regex.exec(html)) {
		const tagName = match[1];
		const tagText = match[2];
		heads.push({level: tagName, text: tagText});
	}
	return heads;
}

watch(() => props.markdownText, () => {
	heads.value = getHeadFromHtmlText(marked.parse(props.markdownText));
})

let heads = ref<Headline[]>([]);
</script>

<style lang="scss">
.outline {
	margin: 0;
	padding: 0;
	list-style: none;
	line-height: inherit;
	> li {
		> a {
			display: block;
			font-style: normal;
			color: inherit;
			text-decoration: none;
		}
		> a:hover {
			background-color: #eeeeee;
		}
	}
}
</style>