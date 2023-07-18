<script setup lang="ts">
import SvgIcon from "../components/svg/SvgIcon.vue";
import {useSvgIcon} from "../hooks/icon/useSvgIcon";
import {svgIconNameList} from "../constants/icon/svgIcon";

useSvgIcon(svgIconNameList)
</script>

<template>
	<div v-for="name in svgIconNameList">
		{{ name }}
		<SvgIcon :name="name" size="2em"></SvgIcon>
	</div>
</template>