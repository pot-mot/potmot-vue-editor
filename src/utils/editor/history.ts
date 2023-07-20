export const createHistoryStack = (
    changeHook: (history: EditorHistory) => void,
    pushDefault: () => EditorHistory,
    undoFinalHook: Function = () => {
    },
    redoFinalHook: Function = () => {
    },
    topFinalHook: Function = () => {
    },
) => {
    const undoStack: EditorHistory[] = []
    const redoStack: EditorHistory[] = []

    const push = (input = pushDefault()) => {
        if (input.type == 'undo' || input.type == 'redo') return

        if (undoStack.length == 0 || pushDefault().type != top().type) {
            undoStack.push(input)
            changeHook(input)
            if (redoStack.length > 0) redoStack.splice(0, redoStack.length)
        } else {
            setTop(input)
        }
    };

    // 撤销
    const undo = (): void => {
        if (undoStack.length > 1) {
            const historyTop = undoStack.pop()
            if (historyTop) {
                redoStack.push(historyTop)
                changeHook(top())
            }
        } else {
            undoFinalHook()
        }
    };

    // 重做
    const redo = (): void => {
        if (redoStack.length > 0) {
            const historyTop = redoStack.pop()
            if (historyTop) {
                undoStack.push(historyTop)
                changeHook(top())
            }
        } else {
            redoFinalHook()
        }
    };

    const top = () => {
        if (undoStack.length >= 1) {
            return undoStack[undoStack.length - 1]
        } else {
            topFinalHook()
            return pushDefault()
        }
    }

    const setTop = (input: EditorHistory = pushDefault()) => {
        undoStack[undoStack.length - 1] = input
    }

    const clear = (): void => {
        undoStack.splice(0, undoStack.length)
        redoStack.splice(0, redoStack.length)
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