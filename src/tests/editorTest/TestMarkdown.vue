<script setup lang="ts">
import MarkdownEditor from "../../components/MarkdownEditor.vue";
import {onMounted, ref} from "vue";
import {testMarkdown} from "../testText/markdown";

import '../../asserts/code.css'
import '../../asserts/markdown.css'
import '../../asserts/code-theme/potmot-dark.css'

const text = ref("")

onMounted(() => {
    for (let i = 0; i < testMarkdown.length; i++) {
		setTimeout(() => {
            text.value += testMarkdown[i]
        }, 1000 * i)
    }
})
</script>

<template>
    <MarkdownEditor v-model="text" :start-with-full-screen="true">
    </MarkdownEditor>
</template>