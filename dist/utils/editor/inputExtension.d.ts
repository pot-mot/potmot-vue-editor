export declare const complete: (textarea: HTMLTextAreaElement, insertText: {
    before: string;
    after: string;
}) => Partial<EditorHistory>;
export declare const complexEnter: (textarea: HTMLTextAreaElement, getSpace?: (...args: any[]) => string) => Partial<EditorHistory>;
export declare const removeTab: (text: string) => {
    text: string;
    matchLength: number;
} | null;
export declare const batchTab: (textarea: HTMLTextAreaElement, e: KeyboardEvent) => Partial<EditorHistory> | null;
export declare const selectLine: (textarea: HTMLTextAreaElement) => Partial<EditorHistory>;
