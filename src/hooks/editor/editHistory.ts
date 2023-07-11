import {ref} from "vue";

/**
 * 启用历史栈
 *
 * @param changeHook 修改时钩子
 * @param fullHook 栈满钩子
 * @param emptyHook 栈空钩子
 * @param pushDefault 默认push对象
 */
export const useHistoryStack = (
    changeHook: (history: EditorHistory) => void,
    pushDefault: () => EditorHistory,
    emptyHook: Function = () => {
    },
    fullHook: Function = () => {
    },
) => {
    const undoStack = ref(<EditorHistory[]>[])
    const redoStack = ref(<EditorHistory[]>[])

    const push = (input = pushDefault()) => {
        if (undoStack.value.length == 0 || pushDefault().type != top().type) {
            undoStack.value.push(input)
        } else {
            setTop(input)
        }

        if (redoStack.value.length > 0) redoStack.value.splice(0, redoStack.value.length)
    };

    // 撤销
    const undo = (): void => {
        if (undoStack.value.length > 1) {
            const historyTop = undoStack.value.pop()
            if (historyTop) {
                redoStack.value.push(historyTop)
                changeHook(top())
            }
        } else {
            emptyHook()
        }
    };

    // 重做
    const redo = (): void => {
        if (redoStack.value.length > 0) {
            const historyTop = redoStack.value.pop()
            if (historyTop) {
                undoStack.value.push(historyTop)
                changeHook(top())
            }
        } else {
            fullHook()
        }
    };

    const top = () => {
        if (undoStack.value.length >= 1) {
            return undoStack.value[undoStack.value.length - 1]
        } else {
            emptyHook()
            return pushDefault()
        }
    }

    const setTop = (input: EditorHistory = pushDefault()) => {
        undoStack.value[undoStack.value.length - 1] = input
    }

    const clear = (): void => {
        undoStack.value.splice(0, undoStack.value.length)
        redoStack.value.splice(0, redoStack.value.length)
    };

    return {
        undoStack,
        redoStack,
        redo,
        undo,
        push,
        clear,
        top,
        setTop
    }
};