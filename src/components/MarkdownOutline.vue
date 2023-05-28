<template>
	<ul class="outline">
		<li v-for="item in items" :key="item.id"
			@click="jumpTo(item)">
			<slot name="item" :item="item">
				<div :style="`padding-left: ${item.level - maxLevel - 0.5}em;`">{{ item.text }}</div>
			</slot>
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
	regex: {
        type: RegExp,
		required: false,
		default: /<h([1-6]) id="(.*?)">(.*?)</g
	},
	parse: {
        type: Function,
		required: false,
		default: (match: RegExpExecArray): OutlineItem => {return {level: Number.parseInt(match[1]), id: match[2], text: match[3]}}
	},
    offsetScroll: {
        type: Function,
        required: false,
        default: (target: HTMLElement, item: HTMLElement) => {
            target.scrollTop = item.offsetTop - target.offsetTop;
        }
    },
    intervalTime: {
        type: Number,
        required: false,
        default: 50,
    },
})

const maxLevel = computed(() => {
	let max = 7;
	for (const item of items.value) {
		if (item.level < max) {
			max = item.level
		}
	}
	return max;
})

const getItemFromHtml = (html: string): OutlineItem[] => {
	const items: OutlineItem[] = [];
	const regex = props.regex;
	let match: RegExpExecArray | null;
	while (match = regex.exec(html)) {
		items.push(props.parse(match));
	}
	return items;
}

let interval: number;

onMounted(() => {
	interval = setInterval(() => {
		items.value = getItemFromHtml(props.target.innerHTML)
	}, props.intervalTime)
})

onBeforeUnmount(() => {
	clearInterval(interval);
})

let items = ref<OutlineItem[]>([]);

const jumpTo = (item: OutlineItem) => {
	if (props.click) props.click(item)

	if (!props.target) return;

	if (props.policy == "anchor") {
		props.target.querySelector('#' + item.id)?.scrollIntoView();
	} else if (props.policy == "offset") {
		const element = <HTMLHeadElement>(props.target.querySelector('#' + item.id))
		props.offsetScroll(props.target, element)
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
	  cursor: pointer;

		&:hover {
			background-color: #eeeeee;
		}
	}
}
</style>