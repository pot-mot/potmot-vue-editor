<template>
	<ul class="outline">
		<li v-for="head in heads" :key="head.id" :style="props.style(head.level - maxLevel)"
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
import {computed, onBeforeUnmount, onMounted, ref} from "vue";

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
	intervalTime: {
		type: Number,
		required: false,
		default: 50,
	},
	style: {
		type: Function,
		required: false,
		default: (level: number) => {
			return "padding-left: " + (level - 0.5) + "em;"
		}
	}
})

const maxLevel = computed(() => {
	let max = 7;
	for (const head of heads.value) {
		if (head.level < max) {
			max = head.level
		}
	}
	return max;
})

interface Headline {
	level: number;
	id: string;
	text: string;
}

function getHeadFromHtmlText(html: string): Headline[] {
	const heads: Headline[] = [];
	const regex = /<h([1-6]) id="(.*?)">(.*?)</g;
	let match: RegExpExecArray | null;
	while (match = regex.exec(html)) {
		heads.push({level: Number.parseInt(match[1]), id: match[2], text: match[3]});
	}
	return heads;
}

let interval: number;

onMounted(() => {
	interval = setInterval(() => {
		heads.value = getHeadFromHtmlText(props.target.innerHTML)
	}, props.intervalTime)
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
		props.target.scrollTop = head.offsetTop - props.target.offsetTop;
	}
}
</script>

<style lang="scss" scoped>
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