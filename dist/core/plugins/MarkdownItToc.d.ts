import Markdown from 'markdown-it';
interface MarkdownItTocOptions {
    level: number[];
    containerClass: string;
    slugify: (text: string) => string;
    markerPattern: RegExp;
    listType: string;
    itemType: string;
    format: (text: string) => string;
    full: boolean;
}
export declare const MarkdownItToc: (md: Markdown, options?: Partial<MarkdownItTocOptions>) => void;
export {};
