<template>
<!--	<div>-->
<!--        <MarkdownEditor v-model="text" :start-with-full-screen="true">-->
<!--        </MarkdownEditor>-->
<!--	</div>-->

	<div style="height: 120vh;width: 60vw;padding-top: 50vh;margin: auto;line-height: 1.6em;">
<!--        <ContextMenu v-drag="{minY: 0, minX: 0, maxX: 500, maxY: 500}" height="100px" style="background-color: #ccc;" title="你好">-->
<!--			<template #title="{title}">-->
<!--				{{title}}-->
<!--			</template>-->
<!--			<template #default>-->
<!--                hello world-->
<!--			</template>-->
<!--		</ContextMenu>-->

		<div style="height: 60vh;position: relative">
<!--			<ContextMenu v-drag="{minY: 0, minX: 0, maxX: 500, maxY: 500}" height="100px" style="background-color: #ccc;">-->
<!--				hello world-->
<!--			</ContextMenu>-->
            <MarkdownEditor v-model="text" :start-with-full-screen="true">
            </MarkdownEditor>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {InputInsertArgument, InsertUnit, OptionInsertArgument, EditorShortcutKey} from "./declare/EditorUtil";
import './asserts/code.css'
import './asserts/markdown.css'

import MarkdownEditor from "./components/MarkdownEditor.vue";
import MarkdownOutline from "./components/MarkdownOutline.vue";
import MarkdownPreview from "./components/MarkdownPreview.vue";
import {vDrag} from "./util/directive/drag";
import ContextMenu from "./components/ContextMenu.vue";

const text = ref("### class\n" +
	"```mermaid\n" +
    "classDiagram\n" +
    "\tClass01 <|-- AveryLongClass : Cool\n" +
    "\tClass03 *-- Class04\n" +
    "\tClass05 o-- Class06\n" +
    "\tClass07 .. Class08\n" +
    "\tClass09 --> C2 : Where am i?\n" +
    "\tClass09 --* C3\n" +
    "\tClass09 --|> Class07\n" +
    "\tClass07 : equals()\n" +
    "\tClass07 : Object[] elementData\n" +
    "\tClass01 : size()\n" +
    "\tClass01 : int chimp\n" +
    "\tClass01 : int gorilla\n" +
    "\tClass08 <--> C2: Cool label\n" +
    "\n" +
    "```\n" +
    "\n" +
    "```mermaid\n" +
    "journey\n" +
    "    title My working day\n" +
    "    section Go to work\n" +
    "      Make tea: 5: Me\n" +
    "      Go upstairs: 3: Me\n" +
    "      Do work: 1: Me, Cat\n" +
    "    section Go home\n" +
    "      Go downstairs: 5: Me\n" +
    "      Sit down: 5: Me\n" +
    "\n" +
    "```\n" +
    "sadsdadsaasddas\n" +
    "sdasadsdadasdsadasdas\n" +
    "sdaassadsdadassdadasasdsad\n" +
    "sdasaddasdsaasdas\n" +
    "\n" +
    "\n" +
    "\n" +
    "[百度](www.baidu.com)\n" +
    "\n" +
    "### seq\n" +
    "```mermaid\n" +
    "sequenceDiagram\n" +
    "    participant Alice\n" +
    "    participant Bob\n" +
    "    Alice->>John: Hello John, how are you?\n" +
    "    loop Healthcheck\n" +
    "        John->>John: Fight against hypochondria\n" +
    "    end\n" +
    "    Note right of John: Rational thoughts <br> prevail!\n" +
    "    John-->>Alice: Great!\n" +
    "    John->>Bob: How about you?\n" +
    "    Bob-->>John: Jolly good!\n" +
    "\n" +
    "```\n" +
    "sadsddasdsasaddsasadsad\n" +
    "sasasdaasdsad\n" +
    "\n" +
    "hello good day\n" +
    "\n" +
    "```mermaid\n" +
    "gantt\n" +
    "dateFormat  YYYY-MM-DD\n" +
    "title Adding GANTT diagram to mermaid\n" +
    "excludes weekdays 2014-01-10\n" +
    "\n" +
    "section A section\n" +
    "Completed task            :done,    des1, 2014-01-06,2014-01-08\n" +
    "Active task               :active,  des2, 2014-01-09, 3d\n" +
    "Future task               :         des3, after des2, 5d\n" +
    "Future task2               :         des4, after des3, 5d\n" +
    "\n" +
    "```\n" +
    "dassadsaddasdasdsadsdsasad\n" +
    "\n" +
    "sdadsasasdadsadassaddsa\n" +
    "```mermaid\n" +
    "classDiagram\n" +
    "\tClass01 <|-- AveryLongClass : Cool\n" +
    "\tClass03 *-- Class04\n" +
    "\tClass05 o-- Class06\n" +
    "\tClass07 .. Class08\n" +
    "\tClass09 --> C2 : Where am i?\n" +
    "\tClass09 --* C3\n" +
    "\tClass09 --|> Class07\n" +
    "\tClass07 : equals()\n" +
    "\tClass07 : Object[] elementData\n" +
    "\tClass01 : size()\n" +
    "\tClass01 : int chimp\n" +
    "\tClass01 : int gorilla\n" +
    "\tClass08 <--> C2: Cool label\n" +
    "\n" +
    "```\n" +
    "saddasdassadsadsddsa\n" +
    "sadsadsadadsdadasdsadass\n" +
    "\n" +
    "### er\n" +
	"\n" +
    "```mermaid\n" +
    "erDiagram\n" +
    "    CUSTOMER ||--o{ ORDER : places\n" +
    "    ORDER ||--|{ LINE-ITEM : contains\n" +
    "    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n" +
    "\n" +
    "```\n" +
    "sdaadsddasasddsadas\n" +
    "sdaasdsadsadsdadassdadssadadsdas\n" +
    "\n" +
    "```mermaid\n" +
    "gitGraph\n" +
    "   commit\n" +
    "   commit\n" +
    "   branch develop\n" +
    "   checkout develop\n" +
    "   commit\n" +
    "   commit\n" +
    "   checkout main\n" +
    "   merge develop\n" +
    "   commit\n" +
    "   commit\n" +
    "\n" +
    "```\n" +
    "sdaasddadasdsdasdas\n" +
    "asdsadsadsadasdsa\n" +
    "dasasddasdasdsadas\n" +
    "sadsaddsaasdsdaddddddddddddddddddd\n" +
    "\n" +
    "```mermaid\n" +
    "stateDiagram-v2\n" +
    "[*] --> Still\n" +
    "Still --> [*]\n" +
    "Still --> Moving\n" +
    "Moving --> Still\n" +
    "Moving --> Crash\n" +
    "Crash --> [*]\n" +
    "\n" +
    "```\n" +
    "sdadsasaasddsadsa\n" +
    "sdaasddsadsasdasdadsdassadsadsaddassdadasdsadsadasdsasadsdasasdaaaaaaaaaaaaaaaaaaaaaasadsdadsasdaaaaaaaaaaaaasdsdasaddsadsadsadasasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdsaddsaddsdassadsaddsadsasdsadsa\n" +
    "```mermaid\n" +
    "pie\n" +
    "\"Dogs\" : 386\n" +
    "\"Cats\" : 85\n" +
    "\"Rats\" : 15\n" +
    "\n" +
    "```\n" +
    "\n" +
    "dsadsasadsadasdadsdsa\n" +
    "saddsaasddasdasasddsaasdadsds");

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

