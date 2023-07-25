<script setup lang="ts">
import SvgIcon from "../svg/SvgIcon.vue";
import {computed, isRef, PropType} from "vue";
import {EditTool} from "../../declare/EditTool";
import {exeToolClick} from "../../utils/editor/editTool";

const props = defineProps({
	tool: {
		type: Object as PropType<EditTool>,
		required: true,
	}
})

const emits = defineEmits(["clickTool"])

const clickTool = (tool: EditTool) => {
	if (tool.disable) return
	const result = exeToolClick(tool)
	emits("clickTool", {tool, result})
}

const icon = computed(() => {
	if (!props.tool.icon) return ''
	if (isRef(props.tool.icon)) {
		return props.tool.icon.value
	} else {
		return props.tool.icon
	}
})
</script>

<template>
	<li v-show="tool.show" :title="tool.label">
		<div v-if="tool.svg" v-html="tool.svg"
			 class="icon"
			 @click.prevent.stop="clickTool(tool)"
			 :class="{'active': tool.active, 'disable': tool.disable}">
		</div>
		<SvgIcon
			v-else-if="tool.icon"
			@click.prevent.stop="clickTool(tool)"
			:name="icon"
			size="1rem"
			class="icon"
			:class="{'active': tool.active, 'disable': tool.disable}">
		</SvgIcon>
	</li>
</template>

<style scoped lang="scss">
li {
	box-sizing: border-box;

	> .icon {
		box-sizing: border-box;

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

</style>