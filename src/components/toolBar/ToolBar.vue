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
	positionMap: {
		type: Object as PropType<Map<string, Position | undefined>>,
		required: false,
		default: new Map([
			["LT", {top: '2em', left: '0'}],
			["RT", {top: '2em', right: '0'}],
			["LB", {bottom: '2em', left: '0'}],
			["RB", {bottom: '2em', right: '0'}]
		])
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
	props.tools.forEach(item => {
		if (!item.contextMenu) return
		map.set(item.name, {
			visible: getContextMenuShow(item.name),
			position: getContextMenuPosition(item.name)
		})
	})
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
	return props.positionMap.get(item.position)
}
</script>

<template>
	<div class="toolbar">
		<ul v-for="position in positionMap.keys()" :class="position">
			<li v-for="tool in toolPositionMap.get(position)" v-show="tool.show?.()" :title="tool.label">
				<SvgIcon
					v-if="tool.icon"
					@mousedown.prevent.stop="tool.method(tool)"
					:name="tool.icon"
					size="1rem"
					class="icon"
					:class="[tool.active ? 'active' : '']">
				</SvgIcon>
				<ContextMenu
					v-if="tool.contextMenu"
					:title="tool.label"
					:visible="contextMenus.get(tool.name).visible"
					:position="contextMenus.get(tool.name).position"
					@cancel="tool.active = false">
					<slot :name="tool.name"></slot>
				</ContextMenu>
				<slot v-else :name="`${tool.name}`">
				</slot>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.toolbar {
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 50% 50%;
	line-height: 1rem;

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	> ul {
		min-height: 2rem;
		padding: 0.2rem 0;
	}

	> ul > li {
		position: relative;
		display: inline-block;
		list-style: none;
		height: 1.6rem;

		> .icon {
			display: inline-block;
			color: #999;
			border-radius: 3px;
			height: 1.6rem;
			width: 1.6rem;
			padding: 0.3rem;

			user-select: none;
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
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

	> .LT,
	> .LB {
		justify-self: left;
		> li {
			margin-right: 0.5rem;
		}
	}

	> .RT,
	> .RB {
		justify-self: right;
		> li {
			margin-left: 0.5rem;
		}
	}
}
</style>