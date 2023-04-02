<template>
	<div style="height: 60vh;width: 60vw;margin: auto;line-height: 1.6em;">
		<MarkdownEditor v-model="text" :extra-insert-units="[insertUnits]"></MarkdownEditor>
		<MarkdownOutline :markdown-text="text"></MarkdownOutline>
	</div>
</template>

<script lang="ts" setup>
import {Ref, ref} from "vue";
import type {InputInsertArgument, InsertUnit, OptionInsertArgument} from "./declare/insertUnit";
import MarkdownOutline from "./components/MarkdownOutline.vue";

const text = ref("");

const insertUnits = <InsertUnit[]>[
	{
		// 唯一名称，建议全英文
		name: "foo",
		//快捷键，通过 Ctrl + key 触发，具体参照 keyCode
		key: "f",
		// 在插入工具栏的展示标签
		label: "测试参数",
		// 插入函数，唯一参数 args 为一个 Map<string, Ref> ，根据 key 可以找到对应的 insertArguments
		insert: (args) => {
			const inputArg = args.get('foo in input')?.value
			const selectArg = args.get('foo in select')?.value
			// 需要返回一个前后段的字符串，插入当前光标两侧
			return {before: "create by args: ", after: "\ninputArg: " + inputArg + "\nselectArg: " + selectArg}
		},
		// 插入参数，name label getRef 为必须部分，type 参数对应 <input> ，options 参数对应 <select>
		// 注意，insertArguments 需要为响应式数据
		arguments: [
			<InputInsertArgument<string>>{
				// 名称，建议全英文
				name: "foo in input",
				// 参数标签
				label: "input-arg",
				// 返回响应式参数
				getRef: () => {
					return ref("");
				},
				type: "string",
			},
			<OptionInsertArgument>{
				name: "foo in select",
				label: "select-arg",
				getRef: () => {
					return ref("option1");
				},
				options: ["option1", "option2"],
			}
		],
		// 是否替换掉选中段文字，如果 false 就会在选中段两侧插入
		replace: true,
		// 插入后是否对插入区域保持选中
		keepSelect: false,
	},
]

</script>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>

