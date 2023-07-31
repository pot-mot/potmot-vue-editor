import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import {detailType, renderDetail} from "./container/detail";
import {quoteType, renderQuoteContainer} from "./container/quote";

export const MarkdownItContainerExtension = (md: MarkdownIt) => {
    detailType.forEach(type => {
        md.use(MarkdownItContainer, type, renderDetail);
    })
    quoteType.forEach(type => {
        md.use(MarkdownItContainer, type, renderQuoteContainer);
    })
}