import Markdown from 'markdown-it';
interface MarkdownItTocOptions {
    level: number[];
    containerClass: string;
    slugify: (text: string) => string;
    markerPattern: RegExp;
    type: string;
    format: (text: string) => string;
    forceFullToc: boolean;
    containerHeaderHtml: string;
    containerFooterHtml: string;
}
export declare const MarkdownItToc: (md: Markdown, options?: Partial<MarkdownItTocOptions>) => void;
export {};
