import {computed, reactive} from "vue";

/**
 * 启用历史栈
 *
 * @param maxSize 栈最大尺寸，默认为200，满栈后会清除一半的栈
 * @param fullHook 栈满钩子
 * @param emptyHook 栈空钩子
 * @param pushDefault 默认push对象
 */
export const useHistoryStack = (
    maxSize: number = 200,
    emptyHook: Function = () => {
    },
    fullHook: Function = () => {
    },
    pushDefault: () => EditorHistory = () => {
        return {
            text: "",
            scrollTop: 0,
            start: 0,
            end: 0,
        }
    },
) => {
    const historyData = reactive({
        // 历史记录相关
        stack: <EditorHistory[]>[],
        stackTop: 0,

        undoPointer: 0,
        undoStepLength: 0,
    })

    const push = (historyTop: EditorHistory = pushDefault()) => {
        if (historyData.stackTop >= maxSize) {
            historyData.stack.splice(0, Math.floor(maxSize / 2));
        }

        historyData.stackTop++;
        historyData.stack.push(historyTop);
        historyData.stack.splice(historyData.stackTop + 1);

        historyData.undoStepLength = 0;
    }

    const pop = () => {
        if (historyData.stackTop > 0) {
            historyData.stackTop--;
        } else {
            emptyHook();
        }
    }

    // 撤销
    const undo = () => {
        if (historyData.stackTop > 0) {
            if (historyData.undoStepLength == 0) {
                historyData.undoStepLength = 1
                historyData.undoPointer = historyData.stackTop - 1
            } else if (historyData.undoPointer > 0) {
                historyData.undoStepLength++
                historyData.undoPointer--
            } else {
                emptyHook();
                return
            }
            historyData.stack.push({...historyData.stack[historyData.undoPointer]})
            historyData.stackTop++

        } else {
            emptyHook();
        }
    }

    // 重做
    const redo = () => {

        if (historyData.stackTop > 0 && historyData.undoStepLength > 0) {
            historyData.stackTop--;
            historyData.undoStepLength --;

        } else {
            fullHook();
        }
    }

    const top = computed({
        get() {
            return historyData.stack[historyData.stackTop];
        },
        set(value) {
            historyData.stack[historyData.stackTop] = value;
        }
    })

    const clear = () => {
        historyData.stack = [];
        historyData.stackTop = -1;
    }

    return {
        historyData,
        redo,
        undo,
        push,
        pop,
        clear,
        top,
    }
}