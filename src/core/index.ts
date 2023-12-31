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

import MarkdownItAttributes from "markdown-it-attributes";
import MarkdownItMultimdTable from 'markdown-it-multimd-table';
import {MarkdownItToc} from "./plugins/MarkdownItToc";
import {MarkdownItContainerExtension} from "./plugins/MarkdownItContainerExtension";
import {MarkdownItKatex} from "./plugins/MarkdownItKatex";
import {MarkdownItFootnote} from "./plugins/MarkdownItFootnote";

import {rules} from "./rules";
import {render, renderAttrs, renderToken} from "./source/render";
import {MarkdownItHideText} from "./plugins/MarkdownItHideText";
import {MarkdownItLink} from "./plugins/MarkdownItLink";

const md = new MarkdownIt()

md
    .set({ html: true, breaks: true, linkify: true })
    .use(MarkdownItAttributes)

    .use(MarkdownItLink)

    .use(MarkdownItSub)
    .use(MarkdownItSup)
    .use(MarkdownItHideText)
    .use(MarkdownItMark)
    .use(MarkdownItEmoji)
    .use(MarkdownItAbbr)
    .use(MarkdownItTaskLists)

    .use(MarkdownItKatex, {strict: false})

    .use(MarkdownItFootnote)
    .use(MarkdownItMultimdTable, {multiline: true, rowspan: true, headerless: true,})
    .use(MarkdownItContainerExtension)
    .use(MarkdownItToc)

md.renderer.rules = {...md.renderer.rules, ...rules};

md.renderer.render = render;
md.renderer.renderInline = render;
md.renderer.renderAttrs = renderAttrs;
md.renderer.renderToken = renderToken;

export {
    md,
}