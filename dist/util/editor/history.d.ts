/**
 * 启用历史栈
 *
 * @param maxSize 栈最大尺寸，默认为200，满栈后会清除一半的栈
 * @param preHook 栈修改前钩子
 * @param postHook 栈修改后钩子
 * @param fullHook 栈满钩子
 * @param emptyHook 栈空钩子
 * @param pushDefault 默认push对象
 */
export declare const useHistoryStack: (maxSize?: number, postHook?: Function, preHook?: Function, emptyHook?: Function, fullHook?: Function, pushDefault?: () => EditorHistory) => {
    historyData: {
        stack: {
            start: number;
            end: number;
            text: string;
            scrollTop: number;
        }[];
        stackTop: number;
    };
    redo: () => void;
    undo: () => void;
    push: (historyTop?: EditorHistory) => void;
    pop: () => void;
    clear: () => void;
    top: import("vue").WritableComputedRef<{
        start: number;
        end: number;
        text: string;
        scrollTop: number;
    }>;
};
