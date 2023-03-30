<template>
	<div style="line-height: 1.6em; height: 50vh;padding-bottom: 100vh;">
		<MarkdownEditor v-model="text"></MarkdownEditor>
		<MarkdownOutline :markdown-text="text"></MarkdownOutline>
		<MarkdownCard :markdown-text="text" :code-fold="true"></MarkdownCard>
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

