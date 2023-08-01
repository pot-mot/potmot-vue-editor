import { VNode } from "vue";
import { KatexOptions } from "katex";
export declare const renderKatexInline: (content: string, options?: KatexOptions) => VNode;
export declare const renderKatexBlock: (text: string, options?: KatexOptions, attrs?: any) => VNode;
