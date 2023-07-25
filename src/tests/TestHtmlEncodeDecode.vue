<script setup lang="ts">


import {countTime} from "../utils/common/time";

const html = `<div>
    <div></div>
    <div></div>
</div>`

const encodeHTMLByReplaceAll = (html: string): string => {
    return html
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll(" ", "&nbsp;")
        .replaceAll("'", "&#39;")
        .replaceAll('"', "&quot;");
}

const encodeHTMLByRegex = (html: string): string => {
    return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/ /g, "&nbsp;")
        .replace(/'/g, "&#39;")
        .replace(/"/g, "&quot;");
}

const encodeHTMLByDom = (html: string) => {
    let temp = document.createElement("div");
    temp.textContent = html
    const output = temp.innerHTML
    temp.remove();
    return output
}

countTime(10000, () => {encodeHTMLByDom(html)}, "byDom");

countTime(10000, () => {encodeHTMLByRegex(html)}, "ByRegex");

countTime(10000, () => {encodeHTMLByReplaceAll(html)}, "ByReplaceAll");
</script>