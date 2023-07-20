import {Ref, ref} from "vue";

const historyStackMap =
    new Map<HTMLTextAreaElement, {undoStack: Ref<EditorHistory[]>, redoStack: Ref<EditorHistory[]>}>

export const useHistoryStack = (
    target: HTMLTextAreaElement,
    changeHook: (history: EditorHistory) => void,
    pushDefault: () => EditorHistory,
    undoFinalHook: Function = () => {
    },
    redoFinalHook: Function = () => {
    },
    topFinalHook: Function = undoFinalHook,
) => {
    let undoStack: Ref<EditorHistory[]>
    let redoStack: Ref<EditorHistory[]>

    if (historyStackMap.has(target)) {
        const result = historyStackMap.get(target)!
        undoStack = result.undoStack
        redoStack = result.redoStack
    } else {
        undoStack = ref([])
        redoStack = ref([])
        historyStackMap.set(target, {undoStack, redoStack})
    }

    const push = (input = pushDefault()) => {
        if (input.type == 'undo' || input.type == 'redo') return

        if (undoStack.value.length == 0 || pushDefault().type != top().type) {
            undoStack.value.push(input)
            if (redoStack.value.length > 0) redoStack.value.splice(0, redoStack.value.length)
        } else {
            setTop(input)
        }

        changeHook(input)
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
            undoFinalHook()
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
            redoFinalHook()
        }
    };

    const top = () => {
        if (undoStack.value.length >= 1) {
            return undoStack.value[undoStack.value.length - 1]
        } else {
            topFinalHook()
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