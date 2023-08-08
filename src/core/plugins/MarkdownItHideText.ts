import MarkdownIt from "markdown-it";
import StateInline from "markdown-it/lib/rules_inline/state_inline";
import {createRenderInlineVNode} from "../source/createRenderInlineVNode";

export const MarkdownItHideText = (md: MarkdownIt) => {
    const hideText = (state: StateInline) => {
        let max = state.posMax;
        let start = state.pos;

        // 检查开启标记
        if (state.src.slice(start, start + 3) !== "===") {
            return false;
        }

        start += 3; // 跳过开启标记

        let end = start;
        while (end < max) {
            // 查找结束标记
            if (state.src.slice(end, end + 3) === "===") {
                break;
            }
            end++;
        }

        // 没有找到结束标记
        if (end >= max) {
            return false;
        }

        const contentToken = state.push("hide_text", "", 0)
        // 提取被包裹的文本内容
        contentToken.content = state.src.slice(start, end);

        state.pos = end + 3;

        return true;
    };

    md.inline.ruler.after("escape", "hide_text", hideText);

    //@ts-ignore
    md.renderer.rules['hide_text'] = (tokens, idx) => {
        const content = tokens[idx].content
        return createRenderInlineVNode(md, content, 'span', {class: 'hide-text'})
    }
};