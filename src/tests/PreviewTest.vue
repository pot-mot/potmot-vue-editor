<script setup lang="ts">
import MarkdownPreview from "../components/MarkdownPreview.vue";
import {ref} from "vue";

import '../asserts/code-theme/potmot-dark.css'

const text = ref(`
\`\`\`mermaid
graph
t1
\`\`\`
`)

</script>

<template>
<MarkdownPreview :markdown-text="text"></MarkdownPreview>
</template>

<style scoped lang="scss">

</style>