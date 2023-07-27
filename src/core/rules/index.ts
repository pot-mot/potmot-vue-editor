import {text} from "./text";
import {htmlInline, htmlBlock} from "./html";
import {hardBreak, softBreak} from "./break";
import {codeInline, codeBlock, fenceCodeBlock} from "./code";
import {image} from "./image";
import {emojiHtml} from "./emoji";

export const rules = {
    text,

    'html_inline': htmlInline,
    'html_block': htmlBlock,

    'hardbreak': hardBreak,
    'softbreak': softBreak,

    'code_inline': codeInline,
    'code_block': codeBlock,
    'fence': fenceCodeBlock,

    image,

    'emoji': emojiHtml,

} as any