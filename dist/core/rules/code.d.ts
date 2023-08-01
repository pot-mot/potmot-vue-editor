import Token from "markdown-it/lib/token";
import Renderer from "markdown-it/lib/renderer";
export declare const codeInline: (tokens: Token[], idx: number, _: any, __: any, slf: Renderer) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare const codeBlock: (tokens: Token[], idx: number, _: any, __: any, slf: Renderer) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare const fenceCodeBlock: (tokens: Token[], idx: number, options: any, _: any, slf: Renderer) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
