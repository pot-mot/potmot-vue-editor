<template>
	<MarkdownEditor v-model="text" :start-with-full-screen="true">
	</MarkdownEditor>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import '../../assets/code.css'
import '../../assets/markdown.css'
import '../../assets/code-theme/potmot-dark.css'

import MarkdownEditor from "../../components/MarkdownEditor.vue";

const text = ref(`
### asdsadasdsdas

init test

>
> sdsadsadas
>
`)

</script>

