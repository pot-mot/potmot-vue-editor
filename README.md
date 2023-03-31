# potmot-editor

一个基于 vue3、ts、marked、prismjs 的简单 markdown 编辑器

## 介绍

> 当前版本 v0.5 2023/3/28

目前本 Editor 项目包含 MarkdownEditor, MarkdownCard, MarkdownOutline 三个组件，其中 Editor 依赖于 Card

### 1. MarkdownEditor 编辑器

使用v-model绑定输入事件
提供了查找、替换、预览和一些快速插入功能，目前不支持修改快捷键

**props 参数说明**

|参数| 类型 | 说明 | 必须 |
| -- | -- | -- | -- |
| placeholder | String | 无字符时展示 | 否，默认值 "" |
| startWithFullScreen | Boolean | 是否默认全屏 | 否，默认值 false |

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