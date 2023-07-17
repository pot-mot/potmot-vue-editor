<template>
	<svg class="svg-icon" aria-hidden="true" :width="size" :height="size">
		<use :xlink:href="`#${name}`" :width="size" :height="size"/>
	</svg>
</template>

<script setup lang="ts">
defineProps({
	size: {
		type: String,
		default: '1em'
	},
	name: {
		type: String,
		required: true
	},
})
</script>

<style scoped>
.svg-icon {
	fill: currentColor;
	stroke: currentColor;
}
</style>