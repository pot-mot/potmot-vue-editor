<template>
	<div>
		<MarkdownEditor v-model="text"/>
		<Outline :markdown-text="text"/>
	</div>
</template>

<script lang="ts" setup>
import MarkdownEditor from "./components/MarkdownEditor.vue";
import {ref} from "vue";
import Outline from "./components/Outline.vue";

const text = ref("");
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>

