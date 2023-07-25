<script setup lang="ts">
import TestPreviewBase from "./TestPreviewBase.vue";
import {onMounted, ref} from "vue";
import {katexTestCases} from "../testCase/katex";

const testcase = ref("");

onMounted(() => {
	testcase.value = katexTestCases.join(" ");
});
</script>

<template>
    <TestPreviewBase :text-case="testcase"></TestPreviewBase>
</template>