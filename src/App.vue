<template>
	<TestEditorBase></TestEditorBase>
	<!--	<TestMarkdown :test-cases="markdownTestCase"></TestMarkdown>-->
<!--		<TestKatex></TestKatex>-->
	<!--	<TestSvg></TestSvg>-->
</template>

<script lang="ts" setup>
import TestKatex from "./tests/previewTest/TestKatex.vue";
import TestMarkdown from "./tests/editorTest/TestMarkdown.vue";
import {markdownTestCase} from "./tests/testCase/markdown";
import TestEditorBase from "./tests/editorTest/TestEditorBase.vue";
import TestSvg from "./tests/TestSvg.vue";
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>

