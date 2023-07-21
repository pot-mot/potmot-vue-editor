<script setup lang="ts">
import SvgIcon from "../components/svg/SvgIcon.vue";
import {useSvgIcon} from "../hooks/useSvgIcon";
import {svgIconNameList} from "../constants/icon/svgIcon";

useSvgIcon(svgIconNameList)
</script>

<template>
	<div v-for="name in svgIconNameList" style="padding: 0.5rem;display: inline-block;font-size: 0.8rem;line-height:1rem;vertical-align: bottom;">
		<SvgIcon :name="name" size="1rem"></SvgIcon>
		<span>{{ name }}</span>
	</div>
</template>