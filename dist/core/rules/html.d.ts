import Token from "markdown-it/lib/token";
export declare const createHtmlVNode: (html: string) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare const htmlInline: (tokens: Token[], idx: number) => any;
export declare const htmlBlock: (tokens: Token[], idx: number) => any;
