import MarkdownIt from "markdown-it";
import StateInline from "markdown-it/lib/rules_inline/state_inline";
import {createVNode} from "vue";

export const MarkdownItHideText = (md: MarkdownIt) => {
    const hideText = (state: StateInline) => {
        const start = state.pos;

        // 检查开启标记
        if (state.src.slice(start, start + 3) !== "===") {
            return false;
        }

        if (!state.env.hideTextOpen) {
            state.env.hideTextOpen = 0
        }

        if (state.env.hideTextOpen == 0) {
            if (!state.src.slice(start + 3).includes('===')){
                return false;
            }
            state.push("hide_text_open", "", 1)
            state.env.hideTextOpen = 1
        } else {
            state.push("hide_text_close", "", -1)
            state.env.hideTextOpen = 0
        }

        state.pos = start + 3
        return true;
    };

    md.inline.ruler.before('emphasis', "hide_text", hideText);

    md.renderer.rules = <any>{
        ...md.renderer.rules,
        'hide_text_open': () => {
            return createVNode( 'span', {class: 'hide-text'}, [])
        },
        'hide_text_close': () => null
    }
};