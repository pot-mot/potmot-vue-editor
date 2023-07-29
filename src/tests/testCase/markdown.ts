export const markdownTestCase = [
    `
# Markdown 基准功能测试
这是一个演示复杂 Markdown 格式的文档，包含各种不同的元素和样式。    
`,
    `
---

[toc]

## 一、TOC 全文大纲

默认仅展示二三级标题 

`,
    `
## 二、段落和换行

这是一个段落，其中包含了一些文本。在 Markdown 中，一个或多个连续的文本行会被视为一个段落。如果需要在段落中换行，可以在行末添加两个或以上的空格。

这是一个新的段落，其中包含了一些文本。请注意，这个段落和上一个段落之间有一个空行分隔。

`,
    `
## 三、标题

下面是一些示例标题，包括一级标题、二级标题、三级标题等：

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

除了 \`#\` 风格，一二级标题也可以使用 \`===\` 和 \`---\` 作为标志

横线控制的一级标题
===

横线控制的二级标题
---

`,
    `
## 四、列表

### 有序列表

1. 第一项
    1. 嵌套第一项
        1. 三级嵌套第一项
        2. 三级嵌套第二项
        3. 三级嵌套第三项
    2. 嵌套第二项
    3. 嵌套第三项
        1. 三级嵌套第一项
        2. 三级嵌套第二项
        3. 三级嵌套第三项
2. 第二项
3. 第三项

### 无序列表

- 第一项
    - 嵌套第一项
        - 三级嵌套第一项
        - 三级嵌套第二项
    - 嵌套第二项
        - 三级嵌套第一项
        - 三级嵌套第二项
- 第二项
    - 嵌套第一项
        - 三级嵌套第一项
        - 三级嵌套第二项
    - 嵌套第二项
- 第三项
    - 嵌套第一项
    - 嵌套第二项
    
### 完成列表

- [ ] 第一项
    - [x] 嵌套第一项
        - [ ] 三级嵌套第一项
        - [ ] 三级嵌套第二项
    - [ ] 嵌套第二项
        - [ ] 三级嵌套第一项
        - [x] 三级嵌套第二项
- [x] 第二项
    - [x] 嵌套第一项
        - [ ] 三级嵌套第一项
        - [ ] 三级嵌套第二项
    - [ ] 嵌套第二项
- [x] 第三项
    - [x] 嵌套第一项
    - [ ] 嵌套第二项
`,
    `
## 五、链接和图片

### 链接

这是一个链接到 [Google](https://www.google.com/) 的示例。

### 图片

这是一个图片：

![Markdown Logo](https://markdown-here.com/img/icon256.png)

这是一个出错的图片：

![](error)

`,
    `
## 六、代码

这是一个行内代码:  \`code\`

    # 这是缩进风格代码块
    #include <stdio.h>

    int main() {
        int n, i;
        scanf("%d", &n);
        for (i = 2; i <= n; i++) {
            while (n % i == 0) {
                printf("%d ", i);
                n /= i;
            }
        }
        return 0;
    }
    
这是围栏风格代码块    

\`\`\`python
# 这是一个 Python 代码块
def hello_world():
    print("Hello, world!");
\`\`\`
`,
    `
## 七、引用

### 单级引用

> Markdown 是一种轻量级的标记语言，它允许人们使用易读易写的纯文本格式编写文档。

### 多级引用

> #### 一级引用
> 跨行引用
>> ##### 二级引用
> 
> 分割用换行 
>
>> ##### 另一个二级引用
>> 
>> 二级引用下的子文本
>  
>> 不使用文本将无法分割两个二级引用
>
> 二级引用结束
> 
`,
    `
## 八、文本字体

**这是粗体文本** __粗体文本__

*这是斜体文本* _斜体文本_

***这是斜粗体文本*** ___斜粗体文本___

==这里是高亮文本==

~~这里是删除文本~~

文本^这里是上标^

文本~这里是下标~

这里是 emoji 表情 :smile: :) :rocket:

`,
    `
## 九、表格

下面是一个示例表格：

| 默认 | 左对齐 | 右对齐 | 居中 |
| --- | :--- | ---: | :---: |
| a | 25 | a | 25 |
| b | 30 | b | 30 |
| c | 35 | c | 35 |


| 合并总表头 ||
| 多级表头1 | 多级表头2 |
| --- | --- |
| 单行 | - 复合行1 |\\
|     | - 复合行2 |
| 向上合并的单元格 |       |
| ^^ |  |

==注意！表格间尽可能用两个空行隔开==

| --- | --- |
| 无头表格 |    |
|    |    |
[表格标题]


`,
    `
## 十、脚标

这里是文本
这里是文本
这里是文本
这里是文本

这里脚标1标注的文本[^1]

这里还是文本
这里还是文本
这里还是文本
这里还是文本

这里是一个行内脚本 ^[我是行内脚标]

这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本

这里脚标2标注的文本[^2]

这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本

这里又是脚标1标注的文本[^1]

这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本
这里还是文本

[^1]: 这里是脚标1的说明
[^2]: 这里是脚标2的说明

`,
    `
## 十一、容器

::: detail 这是一个默认折叠的折叠块

这里是折叠块的内容

\`\`\`
可以书写代码
\`\`\`

> 可以使用标准引用

:::

::: detail open 这是一个默认展开的折叠块

文本

:::

:::: info 这是一个多级嵌套的容器


::: info 一条信息
仅此而已
:::

::: warning 一条警告
just a warning
:::

::: danger 一条危险
Danger
:::

::: tip 一条提示
也许不滥用容器嵌套是个好主意
:::

::::
`,
`
## 十二、别名

The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
`
]