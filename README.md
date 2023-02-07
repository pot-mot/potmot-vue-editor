## potmot-editor
一个基于 vue3、ts、marked、prismjs 的简单 markdown 编辑器

### 依赖
package.json 目前依赖:
```json
{
    "dependencies": {
        "file-saver": "^2.0.5",
        "marked": "^4.2.12",
        "vue": "^3.2.37"
    },
    "devDependencies": {
        "@vitejs/plugin-vue": "^3.1.0",
        "@types/file-saver": "^2.0.5",
        "@types/prismjs": "^1.26.0",
        "typescript": "^4.6.4",
        "vite": "^3.1.0",
        "vite-plugin-prismjs": "^0.0.8",
        "vue-tsc": "^0.40.4"
    }
}
```
预计追加依赖 file-saver 来实现保存
```json
{
    "dependencies": {
        "file-saver": "^2.0.5"
    },
    "devDependencies": {
        "@types/file-saver": "^2.0.5"
    }
}
```

### 说明
包含 MarkdownEditor , MarkdownCard 两个组件，其中 Editor 依赖于 Card

MarkdownEditor 目前提供了查找、替换、预览和一些快捷键，目前不支持修改快捷键

MarkdownCard 提供了基于 marked 的 markdown 展示，不过我个人有些不习惯标准md，所以追加了一些个人的习惯和样式，包括：
1. 不换行成段
2. code 复制、标明行号、超过20行进行折叠
