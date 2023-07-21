<script setup lang="ts">
import {computed, PropType} from "vue";
import {EditTool} from "../../declare/EditorUtil";
import ContextMenu from "../contextMenu/ContextMenu.vue";
import {groupBy} from "../../utils/common/groupBy";
import {toMap} from "../../utils/common/toMap";
import SvgIcon from "../svg/SvgIcon.vue";

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

const toolPositionMap = computed(() => {
	return groupBy(props.tools, 'position')
})

const toolMap = computed(() => {
	return toMap(props.tools, 'name')
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
			left: '0'
		}
	} else {
		return {
			top: '2rem',
			right: '0'
		}
	}
}
</script>

<template>
	<div class="toolbar">
		<ul v-for="position in toolPositionMap.keys()" :class="position">
			<li v-for="tool in toolPositionMap.get(position)" v-show="tool.show?.()">
				<SvgIcon
					@mousedown.prevent.stop="tool.method(tool)"
					:name="tool.icon"
					size="1rem"
					:title="tool.label"
					class="icon"
					:class="[tool.active ? 'active' : '']">
				</SvgIcon>
				<slot v-if="!withContextMenu" :name="tool.name"></slot>
				<ContextMenu
					v-else-if="tool.contextMenu"
					:title="tool.label"
					:visible="contextMenus.get(tool.name).visible"
					:position="contextMenus.get(tool.name).position"
					@cancel="tool.active = false">
					<slot :name="tool.name"></slot>
				</ContextMenu>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.toolbar {
	display: grid;
	grid-template-columns: 50% 50%;
	height: 2rem;
	line-height: 1.8rem;

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	> ul {
		height: 2rem;
	}

	> ul > li {
		position: relative;
		display: inline-block;
		font-size: 1rem;
		list-style: none;

		height: 2rem;
		width: 2rem;
		padding: 0.2rem;

		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;

		> .icon {
			display: inline-block;
			color: #999;
			height: 1.6rem;
			width: 1.6rem;
			padding: 0.3rem;
			border-radius: 3px;
		}

		> .icon:hover {
			color: #7a7a7a;
			background-color: #eee;
		}

		> .icon.active {
			color: #fff;
			background-color: #bcbcbc;
		}
	}

	> .left {
		justify-self: left;
	}

	> .right {
		justify-self: right;
	}
}
</style>