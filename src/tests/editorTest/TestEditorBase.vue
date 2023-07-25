<template>
	<MarkdownEditor v-model="text" style="padding: 0 0.5em 0.5em;">
	</MarkdownEditor>
</template>

<script lang="ts" setup>
import {ref} from "vue";

import MarkdownEditor from "../../components/MarkdownEditor.vue";

const text = ref(`
### asdsadasdsdas

init test

>
> sdsadsadas
>
`)

</script>

