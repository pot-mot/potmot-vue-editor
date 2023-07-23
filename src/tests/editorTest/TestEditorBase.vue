<template>
	<MarkdownEditor v-model="text">
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

