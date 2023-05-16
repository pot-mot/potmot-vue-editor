<template>
    <div ref="markdownCard" class="markdown-card" v-html="html" @click="judgeCopyCode"></div>
</template>

<script lang="ts">
export default {
    name: 'MarkdownPreview'
}
</script>

<script lang="ts" setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import {marked, Renderer, Tokenizer} from "marked";
import {
    detailRule,
    mathBlockRule,
    mathInlineRule,
    warningRule
} from "../util/preview/markedRules";
import {copyCode} from "../util/preview/codeUtil";
import 'katex/dist/katex.css'
import {codeRender, mathRender, mermaidRender} from "../util/preview/render";

/**
 * 外部传入参数
 *
 * codeTheme 代码主题，作用于块级代码 pre 上的 css 类名，对应样式可自行设计
 */
const props = defineProps({
    markdownText: {
        type: String,
        required: true,
    },
    codeTheme: {
        type: String,
        required: false,
        default: 'potmot-dark',
    },
})

let markdownCard = ref();

const tokenizer = new Tokenizer()

// @ts-ignore
tokenizer.lheading = (src: string) => {
    const cap = /^((?:.|\n(?!\n))+?)\n(=+|-+)\n/.exec(src);
    if (cap) {
        return {
            type: 'heading',
            raw: cap[0],
            depth: cap[2].charAt(0) == '=' ? 1 : 2,
            text: cap[1],
            // @ts-ignore
            tokens: tokenizer.lexer.inline(cap[1])
        };
    }
}

const renderer = new Renderer()

renderer.link = (href, title, text): string => {
    // 定义基础 URL 的缓存对象
    const baseUrls: Record<string, string> = {};

    // 定义正则表达式
    const justDomain = /^[^:]+:\/*[^/]*$/; // 匹配只含有域名或协议和域名的 URL
    const protocol = /^([^:]+:)[\s\S]*$/; // 匹配 URL 的协议部分
    const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/; // 匹配 URL 的域名部分

    // 从字符串 str 的结尾开始向前查找，删除所有与字符 c 匹配（或不匹配，根据 invert 参数的值）的字符，并返回处理后的字符串
    function rtrim(str: string, c: string, invert: boolean): string {
        const l = str.length;
        if (l === 0) {
            return '';
        }

        let suffLen = 0;
        while (suffLen < l) {
            const currChar = str.charAt(l - suffLen - 1);
            if (currChar === c && !invert) {
                suffLen++;
            } else if (currChar !== c && invert) {
                suffLen++;
            } else {
                break;
            }
        }

        return str.slice(0, l - suffLen);
    }

    // 根据基础 URL base 和相对路径 href 计算出完整的 URL，并返回
    function resolveUrl(base: string, href: string): string {
        // 如果 base 的缓存不存在，则根据是否只含有域名或协议和域名来决定缓存的值
        const baseUrl = baseUrls[' ' + base] ?? (() => {
            if (justDomain.test(base)) {
                return base + '/';
            } else {
                return rtrim(base, '/', true);
            }
        })();
        baseUrls[' ' + base] = baseUrl;

        // 判断 base 是否是相对路径
        const relativeBase = !/:/.test(base);

        if (href.startsWith('//')) { // 处理以 // 开头的 URL
            if (relativeBase) {
                return href;
            }
            return baseUrl.replace(protocol, '$1') + href;
        } else if (href.startsWith('/')) { // 处理以 / 开头的 URL
            if (relativeBase) {
                return href;
            }
            return baseUrl.replace(domain, '$1') + href;
        } else { // 处理其他情况
            return baseUrl + href;
        }
    }

    // 对传入的 URL href 进行一些过滤和处理，返回处理后的 URL
    function cleanUrl(sanitize: boolean, base: string, href: string): string | null {
        if (sanitize) { // 如果需要进行过滤
            // 将 href 进行解码和过滤，得到协议部分
            const prot = decodeURIComponent(href)
                .replace(/[^\w:]/g, '')
                .toLowerCase();
            // 如果协议部分是 javascript:、vbscript: 或 data:，则返回 null
            if (/^javascript:|^vbscript:|^data:/.test(prot)) {
                return null;
            }
        }

        if (base && !/^(?:[a-z][a-z0-9+.-]*:|^[?#])/i.test(href)) { // 如果 base 存在且 href 不是绝对路径或以 ? 或 # 开头的相对路径
            href = resolveUrl(base, href); // 计算出完整的 URL
        }

        // 对 href 进行编码，并确保所有特殊字符都被正确地编码
        try {
            href = encodeURIComponent(href).replace(/%25/g, '%');
        } catch (e) {
            return null;
        }

        return href;
    }

    // @ts-ignore
    href = cleanUrl(renderer.options.sanitize, renderer.options.baseUrl, href)

    if (href === null) {
        return text;
    }
    let out = `<a target="_blank" href="${href}"`;
    if (title) {
        out += ` title="${title}"`;
    }
    out += `>${text}</a>`;
    return out;
}

renderer.code = (code: string, language: string): string => {
    if (language == 'mermaid') {
        return `<div class="mermaid">${code}</div>`
    } else if (language == 'math') {
        return `<div class="math">${mathRender(code)}</div>`
    }
    code = codeRender(code, language)
    return `<pre class="${props.codeTheme}"><code>${code}</code><div class="code-copy-button" title="复制"></div><div class="code-language">${language}</div></pre>`;
}

const judgeCopyCode = (e: MouseEvent) => {
    if (e.target) {
        const element = <HTMLElement>(e.target);
        console.log(element)
        if (element.classList.contains("code-copy-button")) {
            copyCode(e);
        }
    }
}

// mermaid 渲染
const renderMermaid = () => {
    if (markdownCard.value == undefined) return;

    const items = <HTMLElement[]>Array.from(markdownCard.value.querySelectorAll('.mermaid'));

    for (const item of items) {
        mermaidRender(item)
    }
}

let oldMarkdownString = ""

let eventInterval: number

onMounted(() => {
    renderMermaid();

    eventInterval = setInterval(
        () => {
            if (oldMarkdownString == props.markdownText) return
            // 如果文本发生变化，保存变化并设置等待，如果一段时间没有发生变化，渲染 mermaid 和 katex
            oldMarkdownString = props.markdownText
            setTimeout(() => {
                if (props.markdownText == oldMarkdownString) {
                    renderMermaid();
                }
            }, 500);
        },
        1000
    )
})


onBeforeUnmount(() => {
    clearInterval(eventInterval)
})

marked.setOptions({
    breaks: true,
    smartLists: true
})

marked.use({
    extensions: [mathBlockRule, mathInlineRule, warningRule, detailRule],
})

const html = computed(() => {
    return marked.parse(props.markdownText, {tokenizer, renderer});
})


</script>