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
import MarkdownItAbbr from 'markdown-it-abbr';
//@ts-ignore
import MarkdownItTaskLists from 'markdown-it-task-lists';

import MarkdownItContainer from 'markdown-it-container';
import MarkdownItMultimdTable from 'markdown-it-multimd-table';
import MarkdownItAnchor from "markdown-it-anchor";
import {MarkdownItKatex} from "./plugins/MarkdownItKatex";
import {MarkdownItFootnote} from "./plugins/MarkdownItFootnote";

import {rules} from "./rules";
import {render, renderAttrs, renderToken} from "./render";
import {MarkdownItToc} from "./plugins/MarkdownItToc";
import {slugify} from "../utils/common/text";
const md = new MarkdownIt()

md
    .set({ html: true, breaks: true })
    .use(MarkdownItSub)
    .use(MarkdownItSup)
    .use(MarkdownItMark)
    .use(MarkdownItEmoji)
    .use(MarkdownItAbbr)
    .use(MarkdownItTaskLists)

    .use(MarkdownItKatex, {strict: false})
    .use(MarkdownItFootnote)
    .use(MarkdownItMultimdTable, {multiline: true, rowspan: true, headerless: true,})

    .use(MarkdownItContainer, 'tip')
    .use(MarkdownItContainer, 'warning')
    .use(MarkdownItContainer, 'detail')

    .use(MarkdownItAnchor, {slugify})
    .use(MarkdownItToc)


md.renderer.rules = {...md.renderer.rules, ...rules};

md.renderer.render = render;
md.renderer.renderInline = render;
md.renderer.renderAttrs = renderAttrs;
md.renderer.renderToken = renderToken;

export {
    md
}