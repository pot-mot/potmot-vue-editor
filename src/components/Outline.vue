<template>
	<ul>
		<li v-for="head in heads" :key="head.text">
			<a :style="'padding-left: ' + head.level + 'em;'" :href="'#' + head.text">
				{{ head.text }}
			</a>
		</li>
	</ul>
</template>

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