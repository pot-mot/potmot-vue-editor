<script setup lang="ts">

import MarkdownEditor from "../../components/MarkdownEditor.vue";
import {onMounted, ref, watch} from "vue";

const text = ref("");

const editor = ref();

onMounted(() => {
	console.log(editor.value.undoStack);
	console.log(editor.value.redoStack);
	console.log(editor.value.statisticalData);
	console.log(editor.value.isFullScreen);

	watch(() => editor.value.isFullScreen, () => {
		console.log("change");
		console.log(editor.value.statisticalData);
	});
});
</script>

<template>
	<MarkdownEditor v-model="text" ref="editor"></MarkdownEditor>
</template>

<style scoped lang="scss">

</style>