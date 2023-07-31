/**
 * 将目标 textarea 修改为高度自适应
 * @param el 目标元素
 * @param min 最少行
 * @param max 最多行
 */
export declare const setSize: (el: HTMLTextAreaElement, min?: number, max?: number) => void;
/**
 * 为元素绑定事件触发设置高度自适应
 * @param textarea 目标元素
 * @param min 最少行
 * @param max 最多行
 */
export declare const setTextareaAdapt: (textarea: HTMLTextAreaElement, min?: number, max?: number) => void;
export declare const updateTextarea: (textarea: HTMLTextAreaElement, history: EditorHistory, scroll?: boolean) => void;
