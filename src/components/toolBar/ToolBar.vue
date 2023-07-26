<script setup lang="ts">
import {computed, PropType, ref} from "vue";
import ContextMenu from "../contextMenu/ContextMenu.vue";
import {groupBy} from "../../utils/common/groupBy";
import {EditTool} from "../../declare/EditTool";
import {
	closeContextMenu,
} from "../../utils/editor/editTool";
import ToolBarItem from "./ToolBarItem.vue";

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
});

const emits = defineEmits(["clickTool"]);

const toolMap = computed(() => {
	return groupBy(props.tools, 'position');
});

const menuTools = computed(() => {
	return <EditTool[]>props.tools.filter(tool => {
		if (!props.positions?.includes(tool.position)) return false
		return tool.contextMenu;
	});
});

const clickTool = (tool: EditTool, result: any) => {
	emits("clickTool", {tool, result});
}

const toolBarContainer = ref();

defineExpose({
	element: toolBarContainer,
	tools: props.tools
});
</script>

<template>
	<div class="toolbar" ref="toolBarContainer">
		<ul v-for="position in props.positions" :class="[position]">
			<template v-for="tool in toolMap.get(position)">
				<slot :name="`${tool.name}Content`"></slot>
				<ToolBarItem :tool="tool" @click-tool="clickTool"></ToolBarItem>
			</template>
		</ul>
		<template v-for="tool in menuTools">
			<ContextMenu
				:title="tool.label"
				:tool="tool"
				@cancel="closeContextMenu(tool)">
				<slot :name="tool.name"></slot>
			</ContextMenu>
		</template>
	</div>
</template>

<style scoped lang="scss">
.toolbar {
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 50% 50%;
	position: relative;

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	> ul {
		height: 2rem;
		padding: 0.2rem 0;
		display: flex;
		overflow: hidden;

		> li {
			position: relative;
			display: inline-block;
			list-style: none;
			height: 1.6rem;
			line-height: 1rem;
			vertical-align: middle;
		}
	}

	> ul:hover {
		overflow-y: auto;
		z-index: 10000;
	}

	> :deep(context-menu) {
		z-index: 10001;
	}

	> .LT,
	> .LB {
		justify-content: flex-start;

		> li {
			margin-right: 0.5rem;
		}
	}

	> .RT,
	> .RB {
		justify-content: flex-end;

		> li {
			margin-left: 0.5rem;
		}
	}

	> .LT,
	> .RT {
		flex-wrap: wrap;
	}

	> .LB,
	> .RB {
		flex-wrap: wrap-reverse;
	}
}
</style>