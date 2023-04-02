# potmot-vue-editor

一个基于 vue3、typescript、marked、prismjs、katex 的简单 markdown 编辑器，开箱即用

## 介绍

> 当前版本 v0.5 2023/4/2

目前本 Editor 项目包含 MarkdownEditor, MarkdownPreview, MarkdownOutline 三个组件，其中 Editor 引用了 Preview

### 使用

npm 引入

```
npm install potmot-vue-editor@0.5.13
```

main.js 中引用

```javascript
import editor from 'potmot-vue-editor'
import 'potmot-vue-editor/dist/style.css'

app.use(editor)
```

### 1. MarkdownEditor 编辑器

使用v-model绑定字符串

提供了查找、替换、预览和自定义快速插入功能，为防止键位冲突，目前所有快捷插入均由Ctrl + 特定key触发

**props 参数说明**

|参数| 类型 | 说明 | 必须 |
| -- | -- | -- | -- |
| v-model | Ref<String> | 绑定输入字符串 | 是 |
| placeholder | String | 无字符时展示 | 否，默认值 "" |
| startWithFullScreen | Boolean | 是否默认全屏 | 否，默认值 false |
| extraInsertUnits | InsertUnit[] | 拓展插入单元，具体见下 | 否，默认值 [...markdownInsertUnits, ...simpleInsertUnits] |

**InsertUnit 插入单元**

插入单元是快捷插入工具，通过 Ctrl + 指定的key 触发，根据 insertArgument 生成一段特定的插入字符串。

在 MarkdownEditor 中配置 extra-insert-units props 即可配置插入功能

```html
<MarkdownEditor v-model="text" :extra-insert-units="insertUnits"></MarkdownEditor>
```

具体 insertUnit 如下书写，可在按下 Ctrl + k 后插入一段测试用文本 `"create by args: \ninputArg: \nselectArg: "`

```typescript
import {ref} from "vue";
import type {InputInsertArgument, InsertUnit, OptionInsertArgument} from "./declare/insertUnit";

const text = ref("");

const selectArg = ref("")
const inputArg = ref("")

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
                    return inputArg;
                },
                type: "string",
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
    },
]
```


### 2. MarkdownPreview 预览

提供了基于 marked 的 markdown 与 html展示

code 代码块支持复制、标明行号、超过特定行进行折叠

```html

<MarkdownPreview :markdown-text="text"></MarkdownPreview>
```

**props 参数说明**

| 参数 | 类型 | 说明 | 必须 |
|--------------|--|-------------------------|---------------------|
| markdownText | String | 传入的markdown文本，将被解析成html | 是 |
| codeTheme | String | 代码css样式主题，可自行追加css | 否，默认值 "potmot-dark" |
| codeFold | Boolean | 是否开启代码块折叠 | 否，默认值 false |
| codeFoldThreshold | Number | 代码块折叠阈值，行数到达后开启折叠 | 否，默认值 20 |

### 3. Outline 大纲

根据传入的Markdown根据正则匹配h标签生成a标签大纲，同名标题追加-n数字下标进行区分，除marked无额外依赖，也无默认样式

```html

<MarkdownOutline :markdown-text="text"></MarkdownOutline>
```

例如，当 text 值为 `# html\n## html` 时，该组件会生成如下：

```html
<ul class="outline">
    <li><a href="#html" style="padding-left: 0em;">html</a></li>
    <li><a href="#html-1" style="padding-left: 1em;">html-1</a></li>
</ul>
```

## 依赖

package.json 目前依赖:

```json
{
  "dependencies": {
    "file-saver": "^2.0.5",
    "katex": "^0.16.4",
    "marked": "^4.2.12",
    "vue": "^3.2.37"
  }
}

```

### 补充

我在制作这个项目时没有完整学习前端，项目会有诸多不足，欢迎通过 QQ 377029227 来联系我提供建议