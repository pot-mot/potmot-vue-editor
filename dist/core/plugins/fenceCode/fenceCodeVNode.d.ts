import { VNode } from "vue";
export declare const createCodeBlockVNode: (text: string, language: string, attrs?: any) => VNode;
export declare const createCodeDetailsVNode: (view: VNode, code: VNode) => VNode;
export declare const renderCodeBlock: (text: string, language: string, attrs: any) => VNode;
