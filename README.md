# potmot-editor

一个基于 vue3、ts、marked、prismjs 的简单 markdown 编辑器

## 介绍

> 当前版本 v0.5 2023/3/28

目前本 Editor 项目包含 MarkdownEditor, MarkdownCard, Outline 三个组件，其中 Editor 依赖于 Card

### 1. MarkdownEditor 编辑器

使用v-model绑定输入事件
提供了查找、替换、预览和一些快速插入功能，目前不支持修改快捷键

**props 参数说明**

|参数| 类型 | 说明 | 必须 |
| -- | -- | -- | -- |
| placeholder | String | 无字符时展示 | 否，默认值 "" |
| startWithFullScreen | Boolean | 是否默认全屏 | 否，默认值 false |

### 2. MarkdownCard 展示卡片

提供了基于 marked 的 markdown 与 html展示
>不过我个人有些不习惯标准md，所以追加了一些个人的习惯样式，包括：<br>
    1. 不换行成段<br>
    2. code 复制、标明行号、超过特定行进行折叠

**props 参数说明**

| 参数 | 类型 | 说明 | 必须 |
|--------------|--|-------------------------|---------------------|
| markdownText | String | 传入的markdown文本，将被解析成html | 是 |
| codeTheme | String | 代码css样式主题，可自行追加css | 否，默认值 "potmot-dark" |
| isCodeFold | Boolean | 是否开启代码块折叠 | 否，默认值 false |
| codeFoldThreshold | Number | 代码块折叠阈值，行数到达后开启折叠 | 否，默认值 20 |

### 3. Outline 大纲

根据传入的Markdown根据正则匹配h标签生成a标签大纲，同名标题追加-1\-2，除marked无额外依赖，也无默认样式

## 依赖

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

预计追加依赖 file-saver 来实现 markdown 保存

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

### 补充

MarkdownEdit 内部实现了指令 v-drag ，可以在 PC 和 移动端 实现绝对定位的元素的自由拖曳，自行取用

```typescript
const vDrag = {
    mounted(el: HTMLDivElement) {
        if ('ontouchstart' in document) {
            el.addEventListener('touchstart', (e: TouchEvent) => {
                if (e.target != el) return;
                e.preventDefault();

                // 当前滑块位置
                const rectLeft = el.offsetLeft;
                const rectTop = el.offsetTop;

                const startX = e.touches[0].clientX;
                const startY = e.touches[0].clientY;

                const setXY = (e: TouchEvent) => {
                    const endX = e.touches[0].clientX;
                    const endY = e.touches[0].clientY;
                    const moveX = endX - startX + rectLeft;
                    const moveY = endY - startY + rectTop;
                    el.style.top = moveY + "px";
                    el.style.left = moveX + "px";
                }

                const removeSetXY = () => {
                    document.removeEventListener('touchmove', setXY);
                    document.removeEventListener('touchend', removeSetXY);
                }

                document.addEventListener('touchmove', setXY);
                document.addEventListener('touchend', removeSetXY);
            })
        } else {
            el.onmousedown = (e: MouseEvent) => {
                if (e.target != el) return;
                e.preventDefault();

                // 当前滑块位置
                const rectLeft = el.offsetLeft;
                const rectTop = el.offsetTop;
                // 初始的位置
                const startX = e.clientX;
                const startY = e.clientY;

                const setXY = (e: MouseEvent) => {
                    const endX = e.clientX;
                    const endY = e.clientY;
                    const moveX = endX - startX + rectLeft;
                    const moveY = endY - startY + rectTop;
                    el.style.top = moveY + "px";
                    el.style.left = moveX + "px";
                };

                const removeSetXY = () => {
                    document.removeEventListener('mousemove', setXY);
                    document.removeEventListener('mouseup', removeSetXY);
                }

                document.addEventListener('mousemove', setXY);
                document.addEventListener('mouseup', removeSetXY);
            }
        }
    }
}
```

---

我在制作这个项目时没有完整学习前端，项目会有诸多不足，欢迎通过 QQ 377029227 来联系我提供建议