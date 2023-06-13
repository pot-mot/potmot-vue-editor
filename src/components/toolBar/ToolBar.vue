<script setup lang="ts">
import {computed, PropType} from "vue";
import {EditTool} from "../../declare/EditorUtil";
import ContextMenu from "../contextMenu/ContextMenu.vue";

const props = defineProps({
    tools: {
        type: Array as PropType<EditTool[]>,
        required: true,
    },
	withContextMenu: {
        type: Boolean,
		default: true,
	}
})

const leftTools = computed(() => {
    return props.tools.filter(item => item.position == "left")
})

const rightTools = computed(() => {
    return props.tools.filter(item => item.position == "right")
})

const toolMap = computed(() => {
    const map = new Map<string, EditTool>()
    props.tools.forEach(item => map.set(item.name, item))
    return map
})

const contextMenus = computed(() => {
    const map = new Map<string, any>()
    props.tools.forEach(item => map.set(item.name, {
        visible: getContextMenuShow(item.name),
        position: getContextMenuPosition(item.name)
    }))
    return map
})

const getContextMenuShow = (key: string): boolean => {
    if (!toolMap.value.has(key)) return false
    const item = toolMap.value.get(key)!
    if (item.show == undefined) return false
    return item.show() && item.active
}

const getContextMenuPosition = (key: string) => {
    if (!toolMap.value.has(key)) return {}

    const item = toolMap.value.get(key)!

    if (item.position == 'left') {
        return {
            top: '2rem',
            left: '0.5rem'
        }
    } else {
        return {
            top: '2rem',
            right: '0.5rem'
        }
    }
}

const setEditToolActive = (key: string, newValue: boolean): void => {
    if (!toolMap.value.has(key)) return
    const item = toolMap.value.get(key)!
    item.active = newValue
}
</script>

<template>
    <div class="toolbar">
        <ul class="left">
            <li v-for="tool in leftTools" v-show="tool.show?.()">
				<span
                        @mousedown.prevent.stop="tool.method(tool)"
                        :title="tool.label"
                        class="iconfont"
                        :class="[tool.active ? 'chosen' : '',tool.icon]">
				</span>
                <slot v-if="!withContextMenu" :name="tool.name"></slot>
                <ContextMenu v-else-if="tool.contextMenu" :title="tool.label" :visible="contextMenus.get(tool.name).visible"
                             :position="contextMenus.get(tool.name).position"
                             :close="() => {setEditToolActive(tool.name, false)}">
                    <slot :name="tool.name"></slot>
                </ContextMenu>
            </li>
        </ul>
        <ul class="right">
            <li v-for="tool in rightTools" v-show="tool.show?.()">
				<span @mousedown.prevent.stop="tool.method(tool)"
                      :title="tool.label"
                      class="iconfont"
                      :class="[tool.active ? 'chosen' : '',tool.icon]">
				</span>
                <slot v-if="!withContextMenu" :name="tool.name"></slot>
                <ContextMenu v-else-if="tool.contextMenu" :title="tool.label" :visible="contextMenus.get(tool.name).visible"
                             :position="contextMenus.get(tool.name).position"
                             :close="() => {setEditToolActive(tool.name, false)}">
                    <slot :name="tool.name"></slot>
                </ContextMenu>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@import "../../asserts/iconfont.css";

.toolbar {
    display: grid;
    grid-template-columns: 50% 50%;

    * {
        box-sizing: border-box;
        margin: 0;
		padding: 0;
    }

    > ul > li {
        position: relative;
        display: inline-block;
        font-size: 1em;
        list-style: none;

        > .iconfont {
            display: inline-block;
            width: 1.8em;
        }

        > .iconfont:before {
            color: #999;
            text-align: center;
            padding: 0.25em;
            font-size: 1.25em;
        }

        > .iconfont:hover:before {
            color: #7a7a7a;
            background-color: #eee;
        }

        > .iconfont.chosen:before {
            color: #fff;
            background-color: #bcbcbc;
        }
    }

    > .left {
        > li {
            padding-right: 0.5rem;
        }
    }

    > .right {
        justify-self: right;

        > li {
            padding-left: 0.5rem;
        }
    }
}
</style>