## potmot-editor
一个基于 vue3、ts、marked、prismjs 的简单 markdown 编辑器

### 介绍
> 当前版本 v0.5 2023/3/28

目前本 Editor 项目包含 MarkdownEditor, MarkdownCard, Outline 三个组件，其中 Editor 依赖于 Card

MarkdownEditor 目前提供了查找、替换、预览和一些快捷键，目前不支持修改快捷键

MarkdownCard 提供了基于 marked 的 markdown 展示，不过我个人有些不习惯标准md，所以追加了一些个人的习惯样式，包括：
1. 不换行成段
2. code 复制、标明行号、超过特定行进行折叠

Outline 可以根据传入的Markdown根据正则生成a标签大纲，同名标题追加-1\-2，除marked无额外依赖，也无默认样式

其中 MarkdownEdit 内部实现了指令 v-drag ，可以在 PC 和 移动端 实现绝对定位的元素的自由拖曳，自行取用
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
potmot： 我在制作这个项目时没有接收过完整的前端学习，因此项目会有诸多不足，欢迎通过 QQ 377029227 来联系我提供建议