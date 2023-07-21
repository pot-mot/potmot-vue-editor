<template>
<!--	<TestEditorBase></TestEditorBase>-->
			<TestMarkdown :test-cases="markdownTestCase" :step-time="5000"></TestMarkdown>
<!--		<TestMarkdown :test-cases="indentTestCases"></TestMarkdown>-->
	<!--		<TestKatex></TestKatex>-->
	<!--	<TestLeadingSpace></TestLeadingSpace>-->
<!--	<TestSvg></TestSvg>-->
</template>

<script lang="ts" setup>
import TestKatex from "./tests/previewTest/TestKatex.vue";
import TestMarkdown from "./tests/editorTest/TestMarkdown.vue";
import {markdownTestCase} from "./tests/testCase/markdown";
import TestEditorBase from "./tests/editorTest/TestEditorBase.vue";
import TestSvg from "./tests/TestSvg.vue";
import TestLeadingSpace from "./tests/regexTest/TestLeadingSpace.vue";
import {indentTestCases} from "./tests/testCase/indent";
</script>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>

