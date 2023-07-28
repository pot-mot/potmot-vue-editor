import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";

export const MarkdownItContainerExtension = (md: MarkdownIt) => {
    md.use(MarkdownItContainer, '');
}