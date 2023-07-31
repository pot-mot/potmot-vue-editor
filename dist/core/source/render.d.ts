import Renderer from "markdown-it/lib/renderer";
import Token from "markdown-it/lib/token";
export declare function renderToken(this: Renderer, tokens: Token[], idx: number): any;
export declare function renderAttrs(this: Renderer, token: Token): any;
export declare function render(this: Renderer, tokens: Token[], options: any, env: any): any;
