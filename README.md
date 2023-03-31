# potmot-editor

一个基于 vue3、ts、marked、prismjs 的简单 markdown 编辑器

## 介绍

> 当前版本 v0.5 2023/3/28

目前本 Editor 项目包含 MarkdownEditor, MarkdownCard, MarkdownOutline 三个组件，其中 Editor 依赖于 Card

### 1. MarkdownEditor 编辑器

使用v-model绑定字符串

提供了查找、替换、预览和一些快速插入功能，目前不支持修改快捷键

**props 参数说明**

|参数| 类型 | 说明 | 必须 |
| -- | -- | -- | -- |
| v-model | Ref<String> | 绑定输入字符串 | 是 |
| placeholder | String | 无字符时展示 | 否，默认值 "" |
| startWithFullScreen | Boolean | 是否默认全屏 | 否，默认值 false |
| extraInsertUnits | InsertUnit[] | 拓展插入单元，具体见下 | 否，默认值 [] |

#### InsertUnit 插入单元

插入单元是快捷插入工具，通过 Ctrl + 指定的key 触发，根据 insertArgument 生成一段特定的代码

```html
<MarkdownEditor v-model="text" :extra-insert-units="insertUnits"></MarkdownEditor>
```

```typescript
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
```

### 2. MarkdownPreview 展示卡片

提供了基于 marked 的 markdown 与 html展示
> 不过我个人有些不习惯标准md，所以追加了一些个人的习惯样式，包括：<br>
1. 不换行成段<br>
2. code 复制、标明行号、超过特定行进行折叠

**props 参数说明**

| 参数 | 类型 | 说明 | 必须 |
|--------------|--|-------------------------|---------------------|
| markdownText | String | 传入的markdown文本，将被解析成html | 是 |
| codeTheme | String | 代码css样式主题，可自行追加css | 否，默认值 "potmot-dark" |
| codeFold | Boolean | 是否开启代码块折叠 | 否，默认值 false |
| codeFoldThreshold | Number | 代码块折叠阈值，行数到达后开启折叠 | 否，默认值 20 |

### 3. Outline 大纲

根据传入的Markdown根据正则匹配h标签生成a标签大纲，同名标题追加-1\-2，除marked无额外依赖，也无默认样式

## 依赖

package.json 目前依赖:

```json
{
  "dependencies": {
    "@types/marked": "^4.0.8",
    "file-saver": "^2.0.5",
    "marked": "^4.2.12",
    "vite-plugin-dts": "^2.1.0",
    "vue": "^3.2.37"
  },
  "devDependencies": {
    "@types/file-saver": "^2.0.5",
    "@types/prismjs": "^1.26.0",
    "@vitejs/plugin-vue": "^3.1.0",
    "rollup-plugin-visualizer": "^5.9.0",
    "sass": "^1.32.7",
    "sass-loader": "^13.2.2",
    "typescript": "^4.6.4",
    "vite": "^3.1.0",
    "vite-plugin-prismjs": "^0.0.8",
    "vue-tsc": "^0.40.4"
  }
}
```

### 补充

我在制作这个项目时没有完整学习前端，项目会有诸多不足，欢迎通过 QQ 377029227 来联系我提供建议