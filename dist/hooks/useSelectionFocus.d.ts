/**
 * 计算 selection 和 cursor 位置
 * @param target
 */
export declare const useSelectionFocus: (target: () => HTMLTextAreaElement | undefined | null) => {
    getCursorScroll: (start: number) => {
        top: number;
        left: number;
    };
};
