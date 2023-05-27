# potmot-vue-editor

一个基于 vue3、typescript、marked、prismjs、katex、mermaid 的简单 markdown 编辑器，开箱即用

## 介绍

> 当前版本 v0.8 2023/5/10

目前本 Editor 项目包含 MarkdownEditor, MarkdownPreview, MarkdownOutline 三个组件，其中 Editor 引用了 Preview, Outline

### 使用

npm 引入

```
npm install potmot-vue-editor@0.8.14
```

main.js 中引用

```javascript
import editor from 'potmot-vue-editor'
import 'potmot-vue-editor/dist/style.css'

// 如果使用预定义的 markdown 样式和代码样式，引入如下
import 'potmot-vue-editor/src/asserts/code.css'
import 'potmot-vue-editor/src/asserts/markdown.css'

app.use(editor)
```

最简使用场景，直接 v-model 绑上即用

```html
<MarkdownEditor v-model="text"></MarkdownEditor>
```

配合 slot 的使用场景，通过插槽配合实现自定义工具栏、大纲和预览

```html
<MarkdownEditor v-model="text">
    <template #toolbar>
        <div>这里是自由的工具栏</div>
    </template>
    <template #outline="{target, click}">
        <MarkdownOutline :target="target" :click="click">
            <template #item="{item}">
                <div>{{item}}</div>
            </template>
        </MarkdownOutline>
    </template>
    <template #preview="{text}">
        <MarkdownPreview :markdown-text="text"></MarkdownPreview>
    </template>
</MarkdownEditor>
```

### 1. MarkdownEditor 编辑器

使用v-model绑定字符串

提供了查找、替换、预览和自定义快速键功能

```html
<MarkdownEditor v-model="text" :shortcut-keys="ShortcutKeys"/>
```

**props 参数说明**

| 参数                  | 类型                  | 说明           | 必须                                                     |
|---------------------|---------------------|--------------|--------------------------------------------------------|
| v-model             | Ref<String>         | 绑定输入字符串      | 是                                                      |
| placeholder         | String              | 占位           | 否，默认值 ""                                               |
| width               | String              | 宽度           | 否，默认值 "960px"                                          |
| height              | String              | 高度           | 否，默认值 "540px"                                          |
| placeholder         | String              | 占位字符串        | 否，默认值 ""                                               |
| ShortcutKeys        | EditorShortcutKey[] | 自定义快捷键，具体见下  | 否，默认值 []                                               |
| insertUnits         | InsertUnit[]        | 自定义插入单元，具体见下 | 否，默认值 [...markdownInsertUnits, ...extendedInsertUnits] |
| scrollSync          | Boolean             | 是否开启滚动同步     | 否，默认值true                                              |
| startWithFullScreen | Boolean             | 是否以全屏启动      | 否，默认值 false                                            |

#### EditorShortcutKey 编辑器快捷键

```typescript
// 编辑器按键事件
interface EditorKeyEvent {
    // 按键配置
    // key 参照 event keycode
    key?: string;
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;

    // 是否取消默认事件
    prevent?: boolean;
    // 是否取消后续事件
    reject?: boolean;
}

// 编辑器快捷键
interface EditorShortcutKey extends EditorKeyEvent {
    // 快捷键执行函数，默认参数有：
    // e: KeyboardEvent，即当前键盘事件
    method: Function;
}
```

通过配置 触发快捷键 和 method 可实现在编辑器中任意自定义快捷键

例如：Ctrl + s 保存修改

```typescript
const ShortcutKeys = [
    {
        key: 's',
        ctrl: true,
        method: () => {
            saveUpdate();
        },
        prevent: true,
        reject: true,
    },
]
```

#### InsertUnit 插入单元

插入单元是快捷插入工具，根据 insertArgument 生成一段特定的插入字符串。

```typescript
interface InsertUnit extends EditorKeyEvent {
    label: string;
    // 插入事件，参数有参数map，text 当前编辑文本和 textarea
    insert: (args: Map<string, Ref>, text: string, textarea: HTMLTextAreaElement) => InsertText;
    arguments: InsertArgument<any>[];
    replace?: boolean;
    keepSelect?: boolean;
}
```

例如：Ctrl + Enter 输入 `<br>`

```typescript
const extendedInsertUnits: InsertUnit[] = [{
    key: "Enter",
    ctrl: true,
    label: "换行",
    insert: () => {
        return {before: "<br>", after: ""}
    },
    arguments: [],
    reject: true,
    prevent: true,
}]
```

### 2. MarkdownPreview 预览

提供了基于 marked 的 markdown 与 html展示

code 代码块支持复制、标明行号、超过特定行进行折叠

```html
<MarkdownPreview :markdown-text="text"></MarkdownPreview>
```

**props 参数说明**

| 参数           | 类型                              | 说明                                                                                 | 必须                  |
|--------------|---------------------------------|------------------------------------------------------------------------------------|---------------------|
| markdownText | String                          | 传入的markdown文本，将被解析成html                                                            | 是                   |
| codeTheme    | String                          | 代码主题，作用于块级代码 pre 上的 css 类名，对应样式可自行设计，此处仅提供黑白两个默认类型  "potmot-dark" 和 "potmot-light" | 否，默认值 "potmot-dark" |
| extension    | TokenizerAndRendererExtension[] | marked 解析拓展，具体参照其文档                                                                | 否，默认值 []            |

### 3. Outline 大纲

在target中根据正则匹配寻找带id的标题元素生成ul大纲

请尽可能不要有id相同的标题

```html

<MarkdownOutline :markdown-text="text"></MarkdownOutline>
```

**props 参数说明**

| 参数     | 类型          | 说明                                                         | 必须                             |
|--------|-------------|------------------------------------------------------------|--------------------------------|
| target | HTMLElement | 寻找的根元素                                                     | 否，默认值 document.documentElement |
| policy | String      | 跳转策略，目前提供 "anchor" (基于scrollIntoView) 和 "offset" (基于偏移量计算) | 否，默认值 "offset"                 |
| click  | Function    | 点击item时的触发事件，传入参数为点击标题的id                                  | 否                              |

## 依赖

package.json 目前依赖:

```json
{
  "dependencies": {
    "d3": "^4.13.0",
    "katex": "^0.16.4",
    "marked": "^4.2.12",
    "mermaid": "^10.1.0",
    "vue": "^3.2.37"
  }
}

```

### 补充

这个项目仅作为练手，有诸多不足，欢迎通过 QQ 377029227 来联系我提供建议