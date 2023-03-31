<template>
	<div style="height: 80vh;width: 100%;display: grid;grid-template-columns: 100%;line-height: 1.6em;">
		<div>
			<MarkdownEditor v-model="text"></MarkdownEditor>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const text = ref("");
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>

