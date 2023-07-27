import MarkdownIt from "markdown-it";

//@ts-ignore
import MarkdownItSub from 'markdown-it-sub';
//@ts-ignore
import MarkdownItSup from 'markdown-it-sup';
//@ts-ignore
import MarkdownItMark from 'markdown-it-mark';
//@ts-ignore
import MarkdownItEmoji from 'markdown-it-emoji';
//@ts-ignore
import MarkdownItContainer from 'markdown-it-container';
//@ts-ignore
import MarkdownItFootnote from 'markdown-it-footnote';
//@ts-ignore
import MarkdownItAbbr from 'markdown-it-abbr';
//@ts-ignore
import MarkdownItTaskLists from 'markdown-it-task-lists';
import MarkdownItMultimdTable from 'markdown-it-multimd-table';
import MarkdownItAnchor from "markdown-it-anchor";
import {MarkdownItKatex} from "./plugins/MarkdownItKatex";

import {rules} from "./rules";
import {render, renderAttrs, renderToken} from "./vNode/render";

const md = new MarkdownIt()

md
    .set({ html: true, breaks: true })
    .use(MarkdownItMultimdTable, {multiline: true, rowspan: true, headerless: true,})
    .use(MarkdownItSub)
    .use(MarkdownItSup)
    .use(MarkdownItMark)
    .use(MarkdownItEmoji)
    .use(MarkdownItContainer)
    .use(MarkdownItFootnote)
    .use(MarkdownItTaskLists)
    .use(MarkdownItAbbr)
    .use(MarkdownItAnchor)
    .use(MarkdownItKatex)


md.renderer.rules = {...md.renderer.rules, ...rules};

md.renderer.render = render;
md.renderer.renderInline = render;
md.renderer.renderAttrs = renderAttrs;
md.renderer.renderToken = renderToken;

export {
    md
}