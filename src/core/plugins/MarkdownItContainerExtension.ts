import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import {renderDetail} from "./container/detail";
import {quoteType, renderQuoteContainer} from "./container/quote";

export const MarkdownItContainerExtension = (md: MarkdownIt) => {
    md.use(MarkdownItContainer, 'detail', renderDetail);
    quoteType.forEach(type => {
        md.use(MarkdownItContainer, type, renderQuoteContainer);
    })
}