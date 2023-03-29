<template>
	<div style="line-height: 1.6em;">
		<MarkdownEditor v-model="text"/>
		<Outline :markdown-text="text"/>
	</div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import MarkdownEditor from "./components/MarkdownEditor.vue";
import Outline from "./components/MarkdownOutline.vue";

const text = ref("");
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>

