# potmot-vue-editor

一个基于 vue3、typescript、marked、prismjs、katex、mermaid 的简单 markdown 编辑器，开箱即用

## 介绍

> 当前版本 v0.11 2023/7/11

目前本 Editor 项目包含 MarkdownEditor, MarkdownPreview, MarkdownOutline 三个组件，其中 Editor 引用了 Preview, Outline

### 使用

npm 引入

```
npm install potmot-vue-editor@0.11.0
```

main.js 中引用

```javascript
import editor from 'potmot-vue-editor'
import 'potmot-vue-editor/dist/style.css'

app.use(editor)

// 使用预定义的 markdown 样式和代码样式，引入如下
import 'potmot-vue-editor/src/asserts/code.css'
import 'potmot-vue-editor/src/asserts/markdown.css'

// 代码主题色
import 'potmot-vue-editor/src/asserts/code-theme/potmot-dark.css'
```

最简使用场景，直接 v-model 绑上即用

```html

<MarkdownEditor v-model="text"></MarkdownEditor>
```

配合 slot 的使用场景，通过插槽配合实现自定义大纲、预览、统计数据

```html

<MarkdownEditor v-model="text">
    <template #outline="{target}">
        <MarkdownOutline :target="target">
            <template #item="{item}">
                <div>{{item}}</div>
            </template>
        </MarkdownOutline>
    </template>
    <template #preview="{text}">
        <MarkdownPreview :markdown-text="text"></MarkdownPreview>
    </template>
    <template #footer="{data}">
        {{data}}
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

| 参数                  | 类型                  | 说明      | 必须            |
|---------------------|---------------------|---------|---------------|
| v-model             | Ref<String>         | 绑定输入字符串 | 是             |
| placeholder         | String              | 占位      | 否，默认值 ""      |
| width               | String              | 宽度      | 否，默认值 "960px" |
| height              | String              | 高度      | 否，默认值 "540px" |
| placeholder         | String              | 占位字符串   | 否，默认值 ""      |
| ShortcutKeys        | EditorShortcutKey[] | 自定义快捷键  | 否，默认值 []      |
| insertUnits         | InsertUnit[]        | 自定义插入单元 | 否             |
| startWithFullScreen | Boolean             | 是否以全屏启动 | 否，默认值 false   |

### 2. MarkdownPreview 预览

提供了基于 marked 的 markdown 与 html 展示

```html

<MarkdownPreview :markdown-text="text"></MarkdownPreview>
```

**props 参数说明**

| 参数           | 类型                              | 说明                         | 必须         |
|--------------|---------------------------------|----------------------------|------------|
| markdownText | String                          | 传入的markdown文本，将被解析成html    | 是          |
| extension    | TokenizerAndRendererExtension[] | marked 解析拓展，具体参照 marked 文档 | 否，默认值 []   |
| suspend      | Boolean                         | 暂停渲染，用于优化性能                | 否，默认 false |

#### 代碼支持

code 代码块支持复制、标明行号

代码主题通过如下方式引用，实质为作用于 pre 中的 css 变量，可以自行书写

```typescript
import 'potmot-vue-editor/src/asserts/code-theme/${代码主题}'
```

### 3. Outline 大纲

在 target DOM 中根据正则匹配寻找特定元素以生成大纲

```html

<MarkdownOutline :markdown-text="text"></MarkdownOutline>
```

需要将找到的匹配正则转换为 OutlineItem，接口声明如下

```typescript
interface OutlineItem {
    // 等级
    level: number;
    // 跳转目标id
    id: string;
    // 显示文字
    text: string;
    // 是否为 current，会为对应的 OutlineItem 加上 current 类
    current: boolean;
}
```

**props 参数说明**

| 参数           | 类型          | 说明                                                         | 必须                                                     |
|--------------|-------------|------------------------------------------------------------|--------------------------------------------------------|
| target       | HTMLElement | 寻找的根元素                                                     | 否，默认值 document.documentElement                         |
| policy       | String      | 跳转策略，目前提供 "anchor" (基于scrollIntoView) 和 "offset" (基于偏移量计算) | 否，默认值 "offset"                                         |
| click        | Function    | 点击事件，在点击条目后触发，参数是 OutlineItem                              | 否                                                      |
| regex        | RegExp      | 用于匹配的正则表达式，在 target 的 innerHTML 中寻找目标                      | 否，默认值`/<h([1-6]) id="(.*?)">(.*?)</g`，即寻找所有标题          |
| parse        | Function    | 转换函数，将正则匹配后结果转换为 OutlineItem                               | 否，声明为 `(match: RegExpExecArray): OutlineItem`          |
| handleScroll | Function    | 策略为 "offset" 时执行的跳转函数，可以精细跳转对应scroll操作                     | 否，声明为 `(target: HTMLElement, item: HTMLElement): void` |
| suspend      | Boolean     | 暂停渲染，用于优化性能                                                | 否，默认 false                                             |

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