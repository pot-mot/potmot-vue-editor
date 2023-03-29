<template>
	<div style="line-height: 1.6em;">
		<div id="resize-demo" style="height: 500px; width: 500px; background-color: #466db6"></div>
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

