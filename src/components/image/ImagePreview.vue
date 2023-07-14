<template>
	<div
		v-if="isOpen"
		class="image-preview"
		ref="container"
		@wheel.prevent="onWheel">
		<div class="mask" @click.self.prevent="onClickMask">
			<img v-drag ref="image" :alt="alt" :src="src" :title="title" @error="onError" @load="onLoad"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {defineProps, ref, watch} from 'vue'
import {vDrag} from "../../directives/drag";
import {debounce} from "lodash";

const props = defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},

	src: {
		type: String,
		required: false
	},
	alt: {
		type: String,
		required: false,
		default: ""
	},
	title: {
		type: String,
		required: false,
	},
})

const emits = defineEmits(['clickMask', 'update:modelValue'])

const isOpen = ref(true)

const isError = ref(false)

const onLoad = () => {
	if (!image.value || !container.value) return

	isError.value = false
	image.value.classList.remove('error')
}

const onError = () => {
	if (!image.value || !container.value) return

	isError.value = true
	image.value.classList.add('error')
}

watch(() => props.modelValue, () => {
	isOpen.value = props.modelValue
}, {immediate: true})

watch(() => isOpen.value, () => {
	emits('update:modelValue', isOpen.value)
}, {immediate: true})

const container = ref<HTMLDivElement | null>(null)
const image = ref<HTMLImageElement | null>(null)

const onClickMask = () => {
	emits("clickMask")
}

const zoom = ref(1)

const onWheel = debounce((e: WheelEvent) => {
	if (!image.value || !container.value) return

	if (isError.value) return

	if (!e.ctrlKey) return

	const el = <HTMLImageElement>image.value

	const delta = e.deltaY/1000

	zoom.value -= delta


	el.width *= 1 - delta
	el.height *= 1 - delta
}, 20)
</script>

<style scoped lang="scss">
.image-preview {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;

	z-index: 1002;

	overflow: hidden;
}

.image-preview > .mask {
	position: relative;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
}

.image-preview > .mask > img {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor: all-scroll;
}
</style>