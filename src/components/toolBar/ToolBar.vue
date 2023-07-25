<script setup lang="ts">
import {computed, PropType} from "vue";
import ContextMenu from "../contextMenu/ContextMenu.vue";
import {groupBy} from "../../utils/common/groupBy";
import SvgIcon from "../svg/SvgIcon.vue";
import {EditTool} from "../../declare/EditTool";
import {
	closeContextMenu,
	exeToolClick,
} from "../../utils/editor/editTool";

const props = defineProps({
	tools: {
		type: Array as PropType<EditTool[]>,
		required: true,
	},
	positions: {
		type: Array as PropType<string[]>,
		required: false,
		default: [],
	},
})

const emits = defineEmits(["clickTool"])

const toolMap = computed(() => {
	return groupBy(props.tools, 'position')
})

const menuTools = computed(() => {
	return <EditTool[]>props.tools.filter(tool => {
		if (!props.positions?.includes(tool.position)) return false
		return tool.contextMenu;
	})
})

const clickTool = (tool: EditTool) => {
	if (tool.disable) return
	const result = exeToolClick(tool)
	emits("clickTool", {tool, result})
}
</script>

<template>
	<div class="toolbar">
		<template v-for="tool in menuTools">
			<ContextMenu
				:title="tool.label"
				:tool="tool"
				@cancel="closeContextMenu(tool)">
				<slot :name="tool.name"></slot>
			</ContextMenu>
		</template>
		<ul v-for="position in props.positions" :class="position">
			<li v-for="tool in toolMap.get(position)" v-show="tool.show" :title="tool.label">
				<div v-if="tool.svg" v-html="tool.svg"
					 class="icon"
					 @click.prevent.stop="clickTool(tool)"
					 :class="{'active': tool.active, 'disable': tool.disable}">
				</div>
				<SvgIcon
					v-else-if="tool.icon"
					@click.prevent.stop="clickTool(tool)"
					:name="tool.icon"
					size="1rem"
					class="icon"
					:class="{'active': tool.active, 'disable': tool.disable}">
				</SvgIcon>
				<slot v-if="!tool.contextMenu" :name="`${tool.name}`">
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
		position: relative;
		height: 2rem;
		padding: 0.2rem 0;
		overflow: hidden;
	}

	> ul:hover {
		overflow: visible;
		z-index: 10001;
	}

	> ul > li {
		position: relative;
		display: inline-block;
		list-style: none;
		height: 1.6rem;

		> .icon {
			display: inline-block;
			color: var(--editor-tool-default-color);
			background-color: var(--editor-tool-default-back-color);
			border-radius: 3px;
			height: 1.6rem;
			width: 1.6rem;
			padding: 0.3rem;
			transition: 0.5s;

			user-select: none;
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
		}

		> .icon:hover {
			color: var(--editor-tool-hover-color);
			background-color: var(--editor-tool-hover-back-color);
		}

		> .icon.active {
			color: var(--editor-tool-active-color);
			background-color: var(--editor-tool-active-back-color);
		}

		> .icon.disable {
			color: var(--editor-tool-disable-color);
			background-color: var(--editor-tool-disable-back-color);
			cursor: not-allowed;
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