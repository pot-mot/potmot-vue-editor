<template>
	<ul class="outline">
		<li v-for="head in heads" :key="head.id" :style="props.style(head.level)"
			@click="jumpTo(head.id)">
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
import {onBeforeUnmount, onMounted, ref, watch} from "vue";

const props = defineProps({
	target: {
		type: HTMLElement,
		required: false,
		default: document.documentElement,
	},
	policy: {
		type: String,
		required: false,
		default: "offset"
	},
	click: {
		type: Function,
		required: false,
	},
	style: {
		type: Function,
		required: false,
		default: (level: number) => {
			return "padding-left: " + (level - 0.5) + "em;"
		}
	}
})

interface Headline {
	level: string;
	id: string;
	text: string;
}

function getHeadFromHtmlText(html: string): Headline[] {
	const heads: Headline[] = [];
	const regex = /<h([1-6]) id="(.*?)">(.*?)</g;
	let match: RegExpExecArray | null;
	while (match = regex.exec(html)) {
		console.log(match[0], match[1], match[2], match[3])
		heads.push({level: match[1], id: match[2], text: match[3]});
	}
	return heads;
}

let interval = 0;

onMounted(() => {
	interval = setInterval(() => {
		heads.value = getHeadFromHtmlText(props.target.innerHTML)
	}, 500)
})

onBeforeUnmount(() => {
	clearInterval(interval);
})

let heads = ref<Headline[]>([]);

const jumpTo = (id: string) => {
	if (props.click) props.click(id)

	if (!props.target) return;

	if (props.policy == "anchor") {
		props.target.querySelector('#' + id)?.scrollIntoView();
	} else if (props.policy == "offset") {
		const head = <HTMLHeadElement>(props.target.querySelector('#' + id))
		const dif = head.offsetTop - props.target.offsetTop
		props.target.scrollTop = dif - 16;
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
		display: block;
		font-style: normal;
		color: inherit;
		text-decoration: none;

		&:hover {
			background-color: #eeeeee;
		}
	}
}
</style>