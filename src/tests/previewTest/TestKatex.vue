<script setup lang="ts">

import {
    katexTestCaseList
} from "../testCase/katex";
import TestPreviewBase from "./TestPreviewBase.vue";
import {onMounted, ref} from "vue";

const testcase = ref("")

onMounted(() => {
    for (let i = 0; i < katexTestCaseList.length; i++) {
        setTimeout(() => {
            testcase.value += katexTestCaseList[i].join(' ')
        }, i * 5)
    }
})
</script>

<template>
    <TestPreviewBase :text-case="testcase"></TestPreviewBase>
</template>