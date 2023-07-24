<template>
	<svg class="svg-icon" aria-hidden="true" :width="size" :height="size">
		<use :xlink:href="link" :width="size" :height="size"/>
	</svg>
</template>

<script setup lang="ts">
import {svgIconPrefix} from "../../constants/icon/svgIcon";
import {computed} from "vue";

const props = defineProps({
	size: {
		type: String,
		required: false,
		default: '1em'
	},
	name: {
		type: String,
		required: true
	},
	prefix: {
		type: String,
		required: false
	}
})

const link = computed(() => {
	return `#${props.prefix ? props.prefix : svgIconPrefix}${props.name}`
})
</script>

<style scoped>
.svg-icon {
	fill: currentColor;
	stroke: currentColor;
}
</style>