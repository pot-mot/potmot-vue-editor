import {Ref, ref} from "vue";
import {now} from "../utils/common/time";
import {completeHistory} from "../utils/editor/history";

export const useHistoryStack = (
    changeHook: (history: EditorHistory) => void,
    pushDefault: () => EditorHistory,
    undoFinalHook: Function = () => {
    },
    redoFinalHook: Function = () => {
    },
    topFinalHook: Function = undoFinalHook,
) => {
    const undoStack: Ref<EditorHistory[]> = ref([]);
    const redoStack: Ref<EditorHistory[]> = ref([]);

    // 上一次设置 setTop 的时间
    let lastSetTopTime = 0;

    /**
     * 向 undoStack 推入，同时清空 redoStack
     * 如果上一次推入后的 2s 内推入的下一个历史的类型与前一次相同，将合并这两个历史，即覆盖 top
     * @param input
     * @param change
     */
    const push = (input: Partial<EditorHistory> | undefined = undefined, change: Function | undefined = changeHook) => {
        const history = completeHistory(input, pushDefault());

        if (history.type.startsWith('undo') || history.type.startsWith('redo')) return;

        const pushTime = now();

        if (undoStack.value.length > 0 && pushDefault().type == top().type && pushTime - lastSetTopTime <= 2000) {
            setTop(history);
        } else {
            undoStack.value.push(history);
            if (redoStack.value.length > 0) redoStack.value.splice(0, redoStack.value.length);
        }
        lastSetTopTime = pushTime

        if (change) change(history);
    };

    // 撤销
    const undo = (): void => {
        if (undoStack.value.length > 1) {
            const historyTop = undoStack.value.pop();
            if (historyTop) {
                redoStack.value.push(historyTop);
                changeHook(top());
            }
        } else {
            undoFinalHook();
        }
    };

    // 重做
    const redo = (): void => {
        if (redoStack.value.length > 0) {
            const historyTop = redoStack.value.pop();
            if (historyTop) {
                undoStack.value.push(historyTop);
                changeHook(top());
            }
        } else {
            redoFinalHook();
        }
    };

    const top = () => {
        if (undoStack.value.length >= 1) {
            return undoStack.value[undoStack.value.length - 1]
        } else {
            topFinalHook();
            return pushDefault();
        }
    }

    const setTop = (input: EditorHistory = pushDefault()) => {
        undoStack.value[undoStack.value.length - 1] = input
    }

    const clear = (): void => {
        undoStack.value.splice(0, undoStack.value.length);
        redoStack.value.splice(0, redoStack.value.length);
    };

    return {
        undoStack,
        redoStack,
        redo,
        undo,
        push,
        clear,
        top,
        setTop,
        pushDefault,
    }
};