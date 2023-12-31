<script setup lang="ts">
import {vDrag} from "../../directives/vDrag";
import {isRef, onMounted, PropType, ref, watch} from "vue";
import SvgIcon from "../svg/SvgIcon.vue";
import {useSvgIcon} from "../../hooks/useSvgIcon";
import {EditTool} from "../../declare/EditTool";

const contextMenu = ref();

useSvgIcon("close");

const emit = defineEmits(['cancel']);

const props = defineProps({
	tool: {
		type: Object as PropType<EditTool>,
		required: true,
	},
	dragRange: {
		type: Object as PropType<PositionRange>,
		required: false,
	},
	resetPosition: {
		type: Boolean,
		required: false,
		default: true
	}
});

onMounted(() => {
	setPosition();

	if (props.tool.contextMenu) {
		watch(() => props.tool.contextMenu!.visible, (newVal) => {
			if (!newVal) {
				setPosition();
			}
		});

		watch(() => props.tool.contextMenu!.position, () => {
			setPosition();
		});

		watch(() => props.tool.active, () => {
			if (props.tool.active == undefined) return
			if (isRef( props.tool.active)) {
				props.tool.contextMenu!.visible = props.tool.active.value
			} else {
				props.tool.contextMenu!.visible = props.tool.active
			}
		})
	}
});

const close = (tool: EditTool) => {
	emit("cancel", {tool});
}

const setPosition = () => {
	if (props.resetPosition && contextMenu.value && props.tool.contextMenu && props.tool.contextMenu.position) {
		let position: Position = props.tool.contextMenu.position

		if (position.top != undefined) {
			contextMenu.value.style.top = position.top
		} else {
			contextMenu.value.style.top = 'auto'
		}

		if (position.left != undefined) {
			contextMenu.value.style.left = position.left
		} else {
			contextMenu.value.style.left = 'auto'
		}

		if (position.right != undefined) {
			contextMenu.value.style.right = position.right
		} else {
			contextMenu.value.style.right = 'auto'
		}

		if (position.bottom != undefined) {
			contextMenu.value.style.bottom = position.bottom
		} else {
			contextMenu.value.style.bottom = 'auto'
		}
	}
}
</script>

<template>
	<div
		v-if="tool.contextMenu"
		v-show="tool.show && tool.contextMenu.visible"
		class="context-menu"
		ref="contextMenu"
		v-drag="props.dragRange">
		<div class="content">
			<div class="close" ignore-drag title="关闭">
				<slot name="close">
					<SvgIcon class="close-icon" @mousedown.prevent.stop="close(tool)" name="close" size="1.25em"></SvgIcon>
				</slot>
			</div>

			<div class="title">
				<slot name="title" :title="tool.label">
					<div>{{ tool.label }}</div>
				</slot>
			</div>

			<div class="menu" ignore-drag>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.context-menu {
	box-sizing: border-box;
	position: absolute;
	cursor: all-scroll;
	display: flex;

	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;

	&:hover {
		box-shadow: var(--editor-context-menu-hover-shadow);
		-webkit-box-shadow: var(--editor-context-menu-hover-shadow);
	}

	* {
		box-sizing: border-box;
	}

	> .content {
		flex: 1;
		position: relative;
		width: 100%;
		overflow-x: hidden;

		> .title {
			pointer-events: none;
			font-weight: 600;
			height: 2rem;
			line-height: 2rem;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;
			border-bottom: 1px solid var(--editor-context-menu-border-color);
		}

		> .close {
			position: absolute;
			top: 0;
			right: 0;
			cursor: pointer;

			> .close-icon {
				color: var(--editor-close-icon-default-color);
				background-color: var(--editor-close-icon-default-back-color);
			}

			> .close-icon:hover {
				color: var(--editor-close-icon-hover-color);
				background-color: var(--editor-close-icon-hover-back-color);
			}
		}

		> .menu {
			min-height: 3em;
			height: calc(100% - 2rem);
			overflow-y: auto;
			width: 100%;
			padding: 0.5em;
			cursor: default;
		}
	}
}
</style>