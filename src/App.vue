<template>
	<div style="padding: 0.5em;height: 50vh;width: 90vw;min-height: 30em;line-height: 1.8em;">
		<MarkdownEditor v-model="text"/>
	</div>
</template>

<script lang="ts" setup>
import MarkdownEditor from "./components/MarkdownEditor.vue";
import {ref} from "vue";

const text = ref("");
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>

