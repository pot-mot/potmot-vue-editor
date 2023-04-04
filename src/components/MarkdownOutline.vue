<template>
	<ul class="outline">
		<li v-for="head in heads" :key="head.text" :style="'padding-left: ' + (head.level - 1) + 'em;'"
			@click="jumpTo(head.text)">
			{{ head.text }}
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
	},
	policy: {
		type: String,
		required: false,
		default: "offset"
	},
	target: {
		type: HTMLElement,
		required: false,
		default: document.documentElement,
	},
	click: {
		type: Function,
		required: false,
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

const jumpTo = (id: string) => {
	if (props.click) props.click(id)

	if (!props.target) return;

	if (props.policy == "anchor") {
		props.target.querySelector('#' + id)?.scrollIntoView();
	} else if (props.policy == "offset") {
		const head = <HTMLHeadElement>(props.target.querySelector('#' + id))
		const dif =  head.offsetTop - props.target.offsetTop
		props.target.scrollTop = dif - 20;
	}
}
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