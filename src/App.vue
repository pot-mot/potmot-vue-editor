<template>
	<TestEditorBase></TestEditorBase>
<!--	<TestEditorExpose></TestEditorExpose>-->
<!--	<TestMarkdown :test-cases="[mindmap.value, stateDiagram.value]" :step-time="0"></TestMarkdown>-->
<!--			<TestMarkdown :test-cases="markdownTestCase" :step-time="2000"></TestMarkdown>-->
<!--		<TestMarkdown :test-cases="indentTestCases"></TestMarkdown>-->
<!--			<TestKatex></TestKatex>-->
	<!--	<TestLeadingSpace></TestLeadingSpace>-->
<!--	<TestSvg></TestSvg>-->
</template>

<script lang="ts" setup>
import './assets/code.css'
import './assets/markdown.css'
import './assets/editor-theme/default.css'
import './assets/markdown-theme/default.css'
import './assets/code-theme/default.css'

import TestKatex from "./tests/previewTest/TestKatex.vue";
import TestMarkdown from "./tests/editorTest/TestMarkdown.vue";
import {markdownTestCase} from "./tests/testCase/markdown";
import TestEditorBase from "./tests/editorTest/TestEditorBase.vue";
import TestSvg from "./tests/TestSvg.vue";
import TestLeadingSpace from "./tests/regexTest/TestLeadingSpace.vue";
import {indentTestCases} from "./tests/testCase/indent";
import TestEditorExpose from "./tests/editorTest/TestEditorExpose.vue";
import {mermaidTestCase} from "./tests/testCase/mermaid";
import {mindmap} from "./constants/mermaidGraph/mindmap";
import {stateDiagram} from "./constants/mermaidGraph/stateDiagram";
</script>

<style>
body {
	margin: 0;
	padding: 0;
	width: 200vw;
	height: 200vh;
}
</style>

