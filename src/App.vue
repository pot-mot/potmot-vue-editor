<template>
	<div style="height: 120vh;width: 60vw;padding-top: 50vh;margin: auto;line-height: 1.6em;">
		<div style="height: 60vh;">
			<MarkdownEditor v-model="text" :debug="true"></MarkdownEditor>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {InputInsertArgument, InsertUnit, OptionInsertArgument, EditorShortcutKey} from "./declare/EditorUtil";

const text = ref("");

// 定义 ref 变量
const selectArg = ref("")
const inputArg = ref("")

const ShortcutKeys = <EditorShortcutKey[]>[
	{
		key: ['z', 'Z'],
		ctrl: true,
		method: () => {
			console.log("覆盖原生撤销");
		},
		// 覆盖原生事件
		prevent: true,
		// 拒绝后续事件
		reject: true,
	}
]

const insertUnits = <InsertUnit[]>[
	{
		//通过 Ctrl + f 触发
		key: "f",
		ctrl: true,
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
		// 注意，arguments 需要为响应式数据
		arguments: [
			<InputInsertArgument<string>>{
				// 名称，建议全英文
				name: "foo in input",
				// 参数标签
				label: "input-arg",
				// 返回响应式参数
				getRef: () => {
					return inputArg;
				},
				type: "string",
				// 对 input 输入参数长度进行限制
				inputLength: 10,
				// input 框宽度
				styleWidth: "3em"
			},
			<OptionInsertArgument>{
				name: "foo in select",
				label: "select-arg",
				getRef: () => {
					return selectArg;
				},
				options: ["option1", "option2"],
			}
		],
		// 是否替换掉选中段文字，如果 false 就会在选中段两侧插入
		replace: true,
		// 插入后是否对插入区域保持选中
		keepSelect: false,
		// 覆盖原生事件
		prevent: true,
		// 拒绝后续事件
		reject: true,
	},
]

</script>

<style>
body {
	margin: 0;
	padding: 0;
}
</style>

