<template>
    <ul class="outline">
        <li v-for="item in items" :key="item.id"
            @click="jumpTo(item)"
            :class="{'current': item.current}">
            <slot name="item" :item="item" :max="maxLevel">
                <div :style="`padding-left: ${item.level - maxLevel - 0.5}em;`">{{ item.text }}</div>
            </slot>
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    name: 'MarkdownOutline',
}
</script>

<script lang="ts" setup>
import {computed, nextTick, onBeforeUnmount, onMounted, PropType, ref, watch} from "vue";
import {useScrollCurrent} from "../hooks/useScrollCurrent";
import {throttle} from "lodash";

const {handleScroll, getCurrent} = useScrollCurrent();

let items = ref<OutlineItem[]>([]);

const emits = defineEmits(["clickItem"]);

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

    parse: {
        type: Function as PropType<(head: HTMLHeadingElement) => OutlineItem>,
        required: false,
        default: (header: HTMLHeadingElement): OutlineItem | null => {
			const level = parseInt(header.nodeName.substring(1));
            return {level: level, id: header.id, text: header.innerText, current: false}
        }
    },

	step: {
		type: Number,
		required: false,
		default: 100,
	},

    suspend: {
        type: Boolean,
        required: false,
        default: false,
    }
});

const maxLevel = computed(() => {
    let max = 7;
    for (const item of items.value) {
        if (item.level < max) {
            max = item.level
        }
    }
    return max;
});

let oldHtml: string = ""

/**
 * 在 html 文本中匹配正则表达式获取元素
 */
const setItemFromHtml = () => {
	const html = props.target.innerHTML

    if (!html) return;
    if (html == oldHtml) return;

    oldHtml = html
    const result: OutlineItem[] = []

	props.target.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(header => {
		const outlineItem = props.parse(<HTMLHeadingElement>header)
		if (!outlineItem) return;
		result.push(outlineItem)
	})

	if (!compare(items.value, result)) {
		result[0].current = true
		items.value = result
	}
}

const compare = (oldItems: OutlineItem[], newItems: OutlineItem[]) => {
	if (oldItems.length != newItems.length) return false
	for (let i = 0; i < oldItems.length; i++) {
		if (
			oldItems[i].level != newItems[i].level ||
			oldItems[i].id != newItems[i].id ||
			oldItems[i].text != newItems[i].text
		) return false
	}
	return true
}

let oldScrollHeight: number = 0
let oldScrollTop: number = 0

/**
 * 标记当前元素
 */
const markCurrent = () => {
    if (!props.target) return;

	// 注意，为避免直接跳转后的current值发生变更，需要提前判断一下滚动高度是否与过去一致
	const scrollHeight = props.target.scrollHeight
	const scrollTop = props.target.scrollTop

	if (scrollHeight == oldScrollHeight && scrollTop == oldScrollTop) return;

	oldScrollHeight = scrollHeight
	oldScrollTop = scrollTop

    const elements = []

    for (const item of items.value) {
        const element = props.target.querySelector(`#${item.id}`);
        if (!element || !(element instanceof HTMLElement)) {
			// 哪怕不存在的元素也要记作 index
            elements.push(undefined);
        } else {
            elements.push(element);
        }
    }

    let current = getCurrent(props.target, elements);

    if (current == undefined) return;

    for (let i = 0; i < items.value.length; i++) {
        items.value[i].current = i == current
    }
}

const jumpTo = (clickedItem: OutlineItem) => {
	emits("clickItem", clickedItem);

	if (!props.target) return;

	if (!clickedItem.id || clickedItem.id.length == 0) return;

	for (const item of items.value) {
		item.current = item.id == clickedItem.id
	}

	if (props.policy == "anchor") {
		props.target.querySelector('#' + clickedItem.id)?.scrollIntoView();
	} else if (props.policy == "offset") {
		const element = <HTMLHeadElement>(props.target.querySelector('#' + clickedItem.id));
		handleScroll(props.target, element);
	}
}

let interval: number;

onMounted(() => {
	nextTick(act);
	interval = setInterval(act, props.step);
});

watch(() => props.suspend, (value) => {
	if (value == false) {
		act();
		interval = setInterval(act, props.step);
	} else {
		clearInterval(interval);
	}
});

onBeforeUnmount(() => {
	clearInterval(interval);
});

const act = throttle(() => {
	if (props.suspend) return;
	setItemFromHtml();
	markCurrent();
}, props.step);
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
        text-decoration: none;
        cursor: pointer;
        white-space: nowrap;
        overflow-x: hidden;
		color: var(--editor-default-color);

        &.current {
			color: var(--editor-default-color);
            font-weight: 600;
        }

		&:hover {
			color: var(--editor-hover-color);
		}
    }
}
</style>