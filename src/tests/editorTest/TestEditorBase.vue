<template>
    <div style="height: 120vh;width: 60vw;padding-top: 50vh;margin: auto;line-height: 1.6em;">
        <div style="height: 60vh;position: relative">
            <MarkdownEditor v-model="text" :start-with-full-screen="true">
            </MarkdownEditor>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import '../../asserts/code.css'
import '../../asserts/markdown.css'
import '../../asserts/code-theme/potmot-light.css'

import MarkdownEditor from "../../components/MarkdownEditor.vue";

const text = ref(`
\`\`\`mermaid
graph
t1
\`\`\`
`)

</script>

