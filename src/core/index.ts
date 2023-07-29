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

import MarkdownItMultimdTable from 'markdown-it-multimd-table';
import {MarkdownItToc} from "./plugins/MarkdownItToc";
import {MarkdownItContainerExtension} from "./plugins/MarkdownItContainerExtension";
import {MarkdownItKatex} from "./plugins/MarkdownItKatex";
import {MarkdownItFootnote} from "./plugins/MarkdownItFootnote";

import {rules} from "./rules";
import {render, renderAttrs, renderToken} from "./source/render";

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
    .use(MarkdownItContainerExtension)

    // .use(MarkdownItAnchor, {slugify})
    .use(MarkdownItToc)


md.renderer.rules = {...md.renderer.rules, ...rules};

md.renderer.render = render;
md.renderer.renderInline = render;
md.renderer.renderAttrs = renderAttrs;
md.renderer.renderToken = renderToken;

export {
    md
}