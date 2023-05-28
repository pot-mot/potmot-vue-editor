<template>
    <ul class="outline">
        <li v-for="item in items" :key="item.id"
            @click="jumpTo(item)"
            :class="{'current': item.current}">
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

let items = ref<OutlineItem[]>([]);

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

    handleJump: {
        type: Function,
        required: false,
        default: (target: HTMLElement, item: HTMLElement) => {
            target.scrollTop = item.offsetTop - target.offsetTop;
        }
    },

    regex: {
        type: RegExp,
        required: false,
        default: /<h([1-6]) id="(.*?)">(.*?)</g
    },
    parse: {
        type: Function,
        required: false,
        default: (match: RegExpExecArray): OutlineItem => {
            return {level: Number.parseInt(match[1]), id: match[2], text: match[3], current: false}
        }
    },

    current: {
        type: Function,
        required: false,
        default: (target: HTMLElement, items: OutlineItem[]) => {
            if (!(target instanceof HTMLElement) || !Array.isArray(items)) {
                return
            }

            let current = 0

            for (let i = items.length - 1; i >= 0; i--) {
                if (!items[i].id) return;
                const element = target.querySelector(`#${items[i].id}`)
                if (!element || !(element instanceof HTMLElement)) return;
                if (element.getBoundingClientRect().top <= target.getBoundingClientRect().top + 40) {
                    current = i
                    break
                }
            }

            for (let i = 0; i < items.length; i++) {
                items[i].current = i == current;
            }
        }
    },

    intervalTime: {
        type: Number,
        required: false,
        default: 100,
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

let oldHtml: string = ""

const setItemFromHtml = (html: string) => {
    if (html == oldHtml) return

    oldHtml = html
    const result: OutlineItem[] = [];
    const regex = props.regex;
    let match: RegExpExecArray | null;
    while (match = regex.exec(html)) {
        result.push(props.parse(match));
    }
    items.value = result;
}

let oldScrollHeight: number = 0
let oldScrollTop: number = 0

const setCurrent = () => {
    if (!props.target) return;

    const scrollHeight = props.target.scrollHeight
    const scrollTop = props.target.scrollTop

    if (scrollHeight == oldScrollHeight && scrollTop == oldScrollTop) return

    oldScrollHeight = scrollHeight
    oldScrollTop = scrollTop

    props.current(props.target, items.value)
}

let interval: number;

onMounted(() => {
    setItemFromHtml(props.target?.innerHTML)
    setCurrent()

    interval = setInterval(() => {
        setItemFromHtml(props.target?.innerHTML)
        setCurrent()
    }, props.intervalTime)
})

onBeforeUnmount(() => {
    clearInterval(interval);
})

const jumpTo = (clickedItem: OutlineItem) => {
    if (props.click) props.click(clickedItem)

    if (!props.target) return;

    if (!clickedItem.id) return;

    for (const item of items.value) {
        item.current = item.id == clickedItem.id
    }

    if (props.policy == "anchor") {
        props.target.querySelector('#' + clickedItem.id)?.scrollIntoView();
    } else if (props.policy == "offset") {
        const element = <HTMLHeadElement>(props.target.querySelector('#' + clickedItem.id))
        props.handleJump(props.target, element)
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
    white-space: nowrap;
    overflow-x: hidden;

      &.current {
          font-weight: 600;
      }
  }
}
</style>