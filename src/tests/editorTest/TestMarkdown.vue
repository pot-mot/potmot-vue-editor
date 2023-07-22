<script setup lang="ts">
import MarkdownEditor from "../../components/MarkdownEditor.vue";
import {PropType, ref, watch} from "vue";

const text = ref("")

const props = defineProps({
    textCase: {
        type: String,
        required: false,
    },
    testCases: {
        type: Array as PropType<string[]>,
        required: false,
    },
    stepTime: {
        type: Number,
        required: false,
        default: 200,
    }
})

watch(() => props.textCase, () => {
    if (props.textCase != undefined) {
        text.value = props.textCase
    }
}, {immediate: true})

watch(() => props.testCases, () => {
    if (props.testCases != undefined) {
        text.value = ""
        for (let i = 0; i < props.testCases.length; i++) {
            setTimeout(() => {
                text.value += props.testCases![i]
            }, props.stepTime * i)
        }
    }
}, {immediate: true})
</script>

<template>
    <MarkdownEditor v-model="text" :start-with-full-screen="true">
    </MarkdownEditor>
</template>