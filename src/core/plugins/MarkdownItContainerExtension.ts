import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import {renderDetail} from "./container/detail";

export const MarkdownItContainerExtension = (md: MarkdownIt) => {
    md.use(MarkdownItContainer, 'detail', renderDetail);
}