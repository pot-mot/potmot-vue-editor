<template>
	<TestMarkdown :test-cases="markdownTestCase"></TestMarkdown>
<!--	<TestKatex></TestKatex>-->
</template>

<script lang="ts" setup>
import TestKatex from "./tests/previewTest/TestKatex.vue";
import TestMarkdown from "./tests/editorTest/TestMarkdown.vue";
import {markdownTestCase} from "./tests/testCase/markdown";
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>

