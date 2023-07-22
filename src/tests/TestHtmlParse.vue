<script setup lang="ts">
import {parse} from '@vue/compiler-dom';
import {marked} from "marked";
import {countTime} from "../utils/common/time";
import {nextTick, onMounted, ref, watch} from "vue";

let md = ref("")

let html = ref("")
let result = ref({})

watch(() => md.value, () => {
    countTime(1, () => {
        html.value = marked(md.value)
    }, "marked")

    countTime(1, () => {
        result.value = parse(html.value)
    }, "toNode")
})

onMounted(() => {
    console.time()
    md.value = `
\`\`\`mermaid
graph
t1
\`\`\`
`
    nextTick(() => {
        console.timeEnd()
    })

    setTimeout(() => {
        console.time()
        md.value = `
\`\`\`mermaid
graph
t1
\`\`\`
` + md.value

        nextTick(() => {
            console.timeEnd()
        })
    }, 1000)

    setTimeout(() => {
        console.time()
        md.value = `
### update 2
` + md.value

        nextTick(() => {
            console.timeEnd()
        })
    }, 2000)
})

</script>

<template>
    <div v-html="html"></div>
</template>