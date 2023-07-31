import { VNode } from "vue";
import { KatexOptions } from "katex";
export declare const createKatexInlineVNode: (content: string, options?: KatexOptions) => VNode;
export declare const createKatexBlockVNode: (content: string, options?: KatexOptions) => VNode;
