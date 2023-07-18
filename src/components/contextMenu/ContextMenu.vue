<script setup lang="ts">
import {vDrag} from "../../directives/drag";
import {onMounted, PropType, ref} from "vue";
import SvgIcon from "../svg/SvgIcon.vue";
import {useSvgIcon} from "../../hooks/icon/useSvgIcon";

const contextMenu = ref()

useSvgIcon(["close"])

const emit = defineEmits(['cancel'])

const props = defineProps({
	position: {
		type: Object as PropType<Position>,
		required: false,
		default: {top: 0, left: 0, zIndex: 1000},
	},
	dragRange: {
		type: Object as PropType<PositionRange>,
		required: false,
	},
	visible: {
		type: Boolean,
		required: false,
		default: true
	},
	title: {
		type: String,
		required: false,
		default: ''
	},
	resetPosition: {
		type: Boolean,
		required: false,
		default: true
	}
})

onMounted(() => {
	setPosition()
})

const clickClose = () => {
	emit("cancel")
}

const setPosition = () => {
	if (props.resetPosition && contextMenu.value && contextMenu.value instanceof HTMLElement && props.position) {
		if (props.position.top != undefined) {
			contextMenu.value.style.top = props.position.top
		} else {
			contextMenu.value.style.top = 'auto'
		}

		if (props.position.left != undefined) {
			contextMenu.value.style.left = props.position.left
		} else {
			contextMenu.value.style.left = 'auto'
		}

		if (props.position.right != undefined) {
			contextMenu.value.style.right = props.position.right
		} else {
			contextMenu.value.style.right = 'auto'
		}

		if (props.position.bottom != undefined) {
			contextMenu.value.style.bottom = props.position.bottom
		} else {
			contextMenu.value.style.bottom = 'auto'
		}
	}
}
</script>

<template>
	<div v-show="visible"
		 class="context-menu"
		 ref="contextMenu"
		 v-drag="props.dragRange">

		<div class="content">
			<div class="close" ignore-v-drag>
				<slot name="close">
					<svg-icon class="close-icon" @mousedown.prevent.stop="clickClose" name="close" size="1.25em"></svg-icon>
				</slot>
			</div>

			<div class="title" v-if="props.title && props.title.length > 0">
				<slot name="title" :title="props.title">
					<div>{{ props.title }}</div>
				</slot>
			</div>

			<div class="menu">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.context-menu {
	position: absolute;
	cursor: all-scroll;
	display: flex;

	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;

	> .content {
		flex: 1;
		position: relative;
		width: 100%;
		overflow-x: hidden;

		> .title {
			pointer-events: none;
			font-weight: 600;
			height: 1.6rem;
			line-height: 1.6rem;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;
		}

		> .close {
			position: absolute;
			top: 0;
			right: 0;
			cursor: pointer;

			> .close-icon {
				color: #999;
			}

			> .close-icon:hover {
				color: #fff;
				background-color: red;
			}
		}

		> .menu {
			box-sizing: border-box;
			min-height: 3em;
			height: calc(100% - 1.6rem);
			overflow-y: auto;
			width: 100%;
			padding: 0.5em;
			overflow-x: hidden;
		}
	}
}
</style>