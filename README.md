# potmot-vue-editor

一个基于 vue3、markdown-it 的 ~~简陋~~ markdown 编辑器，在 vue3 环境下开箱即用

这个项目中的 markdown-it 解析插件与渲染为虚拟 dom 的部分直接来源于 [yank note](https://github.com/purocean/yn) 这个项目，十分感谢 [purocean](https://github.com/purocean) 能够将这个项目开源以供学习

## 介绍

> 当前版本 v0.16 2023/7/31

目前本 Editor 项目包含 MarkdownEditor, MarkdownPreview, MarkdownOutline 三个核心组件，Editor 依赖于 Preview, Outline

### 使用

npm 引入

```
npm install potmot-vue-editor@0.16.8
```

main.js 中引用

```javascript
import editor from 'potmot-vue-editor';
import 'potmot-vue-editor/dist/style.css';

app.use(editor);

// 应用主题样式
import 'potmot-vue-editor/src/assets/editor-theme/default.css';
import 'potmot-vue-editor/src/assets/markdown-theme/default.css';
import 'potmot-vue-editor/src/assets/code-theme/default.css';
```

直接 v-model 绑上即用

```html
<MarkdownEditor v-model="text"></MarkdownEditor>
```

### 1. MarkdownEditor 编辑器

基于 textarea 实现

提供了查找、替换、预览、插入和快速键功能

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
| disabled | Boolean | 禁用 | 开启后将无法进行编辑    |
| ShortcutKeys        | ShortcutKey[] | 自定义快捷键  | 否，默认值 []      |
| startWithFullScreen | Boolean             | 是否以全屏启动 | 否，默认值 false   |

### 2. MarkdownPreview 预览

提供了基于 markdown-it 的 markdown 与 html 展示，同样直接传入参数即可使用

```html
<MarkdownPreview :markdown-text="text"></MarkdownPreview>
```

目前引入 markdown-it 插件如下

```
"markdown-it-abbr": "^1.0.4" *[] 简称
"markdown-it-attributes": "^1.1.1" {} 属性
"markdown-it-container": "^3.0.0" :::盒型容器
"markdown-it-emoji": "^2.0.2" emoji 表情
"markdown-it-mark": "^3.0.1" mark高亮
"markdown-it-multimd-table": "^4.2.2" 复杂表格
"markdown-it-sub": "^1.0.0" ~下标~
"markdown-it-sup": "^1.0.0" ^上标^
"markdown-it-task-lists": "^2.1.1" - [x] 任务列表
```

因为 ts 和 虚拟dom 渲染 及 版本 等问题重新实现的 markdown-it 插件与额外渲染逻辑与额外插件如下

```
mermaid: 10.3.0 ```mermaid ``` 绘图
MarkdownItKatex => katex: 0.16.8 $a$ 数学符号
MarkdownItFootnote ^[] [^ ] 脚标
MarkdownItToc [toc] 标题大纲
MarkdownItHideText ===涂黑隐藏文本===
```

**props 参数说明**

| 参数           | 类型                              | 说明                         | 必须         |
|--------------|---------------------------------|----------------------------|------------|
| markdownText | String                          | 传入的markdown文本，将被解析成html    | 是          |
| suspend      | Boolean                         | 暂停渲染               | 否，默认 false |

#### 代码支持

code 代码块支持复制、标明行号

### 3. Outline 大纲

在目标中寻找标题元素以生成大纲的组件

```html
<MarkdownOutline :target="el"></MarkdownOutline>
```

**props 参数说明**

| 参数           | 类型          | 说明          | 必须                                                     |
|--------------|-------------|-------------|--------------------------------------------------------|
| target       | HTMLElement | 寻找的目标元素     | 否，默认值 document.documentElement                         |
| suspend      | Boolean     | 暂停渲染 | 否，默认 false                                             |
