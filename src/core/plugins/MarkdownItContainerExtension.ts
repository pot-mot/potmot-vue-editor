import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import {detailsType, renderDetail} from "./container/details";
import {quoteType, renderQuoteContainer} from "./container/quote";
import {renderTabItem, renderTabs, tabsType} from "./container/tabs";

export const MarkdownItContainerExtension = (md: MarkdownIt) => {
    detailsType.forEach(type => {
        md.use(MarkdownItContainer, type, renderDetail);
    })
    quoteType.forEach(type => {
        md.use(MarkdownItContainer, type, renderQuoteContainer);
    })
    md.use(MarkdownItContainer, tabsType[0], renderTabs)
    md.use(MarkdownItContainer, tabsType[1], renderTabItem)
}