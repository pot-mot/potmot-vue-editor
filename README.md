# potmot-vue-editor

一个基于 vue3、typescript、marked、prismjs、katex 的简单 markdown 编辑器，开箱即用

## 介绍

> 当前版本 v0.6 2023/4/5

目前本 Editor 项目包含 MarkdownEditor, MarkdownPreview, MarkdownOutline 三个组件，其中 Editor 引用了 Preview, Outline

### 使用

npm 引入

```
npm install potmot-vue-editor@0.6.0
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

#### 风险提示
- 快速插入可能覆盖浏览器原有快捷键

**props 参数说明**

|参数| 类型 | 说明 | 必须 |
| -- | -- | -- | -- |
| v-model | Ref<String> | 绑定输入字符串 | 是 |
| placeholder | String | 占位字符串 | 否，默认值 "" |
| startWithFullScreen | Boolean | 是否以全屏启动 | 否，默认值 false |
| insertUnits | InsertUnit[] | 拓展插入单元，具体见下 | 否，默认值 [...markdownInsertUnits, ...simpleInsertUnits, ...htmlInsertUnits] |

#### InsertUnit 插入单元

插入单元是快捷插入工具，通过 Ctrl + 指定的key 触发，根据 insertArgument 生成一段特定的插入字符串。

在 MarkdownEditor 中配置 insert-units props 即可配置插入功能

```html
<MarkdownEditor v-model="text" :insert-units="insertUnits"></MarkdownEditor>
```

具体 insertUnit 如下书写，可在按下 Ctrl + k 后插入一段测试用文本 `"create by args: \ninputArg: \nselectArg: "`

```typescript
import type {InputInsertArgument, InsertUnit, OptionInsertArgument} from "potmot-vue-editor/dist/declare/insertUnit";

// 定义 ref 变量
const selectArg = ref("")
const inputArg = ref("")

const insertUnits = <InsertUnit[]>[
    {
        // 唯一名称，建议全英文
        name: "foo",
        // 快捷键，通过 Ctrl + key 触发，目前 key 可为数组，但并不是多键共同触发，而是平行可选
        // 值具体参照 keyCode
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
    }
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
| codeTheme | String | 代码主题，作用于块级代码 pre 上的 css 类名，对应样式可自行设计，此处仅提供黑白两个默认类型  "potmot-dark" 和 "potmot-light" | 否，默认值 "potmot-dark" |
| codeFold | Boolean | 是否开启代码块折叠 | 否，默认值 false |
| codeFoldThreshold | Number | 代码块折叠阈值，行数到达后开启折叠 | 否，默认值 20 |

### 3. Outline 大纲

在target中根据正则匹配寻找带id的标题元素生成ul大纲

请尽可能不要有id相同的标题

```html
<MarkdownOutline :markdown-text="text"></MarkdownOutline>
```

**props 参数说明**

| 参数 | 类型 | 说明 | 必须 |
|--------------|--|-------------------------|---------------------|
| target | HTMLElement | 寻找的根元素 | 否，默认值 document.documentElement |
| policy | String | 跳转策略，目前提供 "anchor" (基于scrollIntoView) 和 "offset" (基于偏移量计算) | 否，默认值 "offset" |
| click | Function | 点击item时的触发事件，传入参数为点击标题的id | 否 |


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