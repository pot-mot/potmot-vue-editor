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
    const undoStack: EditorHistory[] = []
    const redoStack: EditorHistory[] = []

    const push = () => {
        undoStack.push(pushDefault())
        // console.log(`push: ${top().text.replaceAll('\n', '\\n')}`)
        if (redoStack.length > 0) redoStack.splice(0, redoStack.length)
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
            emptyHook()
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
            fullHook()
        }
    };

    const top = () => {
        if (undoStack.length >= 1) {
            return undoStack[undoStack.length - 1]
        } else {
            emptyHook()
            return pushDefault()
        }
    }

    const setTop = () => {
        undoStack[undoStack.length - 1] = pushDefault()
        // console.log(`top: ${undoStack[undoStack.length - 1].text.replaceAll('\n', '\\n')}`)
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
// export const useHistoryStack = (
//     maxSize: number = 200,
//     emptyHook: Function = () => {
//     },
//     fullHook: Function = () => {
//     },
//     pushDefault: () => EditorHistory = () => {
//         return {
//             text: "",
//             scrollTop: 0,
//             start: 0,
//             end: 0,
//         }
//     },
// ) => {
//     const historyData = reactive({
//         // 历史记录相关
//         stack: <EditorHistory[]>[],
//         stackTop: 0,
//
//         undoPointer: 0,
//         undoStepLength: 0,
//     })
//
//     const push = (historyTop: EditorHistory = pushDefault()) => {
//         if (historyData.stackTop >= maxSize) {
//             historyData.stack.splice(0, Math.floor(maxSize / 2));
//         }
//
//         historyData.stackTop++;
//         historyData.stack.push(historyTop);
//         historyData.stack.splice(historyData.stackTop + 1);
//
//         historyData.undoStepLength = 0;
//     }
//
//     const pop = () => {
//         if (historyData.stackTop > 0) {
//             historyData.stackTop--;
//         } else {
//             emptyHook();
//         }
//     }
//
//     // 撤销
//     const undo = () => {
//         if (historyData.stackTop > 0) {
//             if (historyData.undoStepLength == 0) {
//                 historyData.undoStepLength = 1
//                 historyData.undoPointer = historyData.stackTop - 1
//             } else if (historyData.undoPointer > 0) {
//                 historyData.undoStepLength++
//                 historyData.undoPointer--
//             } else {
//                 emptyHook();
//                 return
//             }
//             historyData.stack.push({...historyData.stack[historyData.undoPointer]})
//             historyData.stackTop++
//         } else {
//             emptyHook();
//         }
//     }
//
//     // 重做
//     const redo = () => {
//         if (historyData.stackTop > 0 && historyData.undoStepLength > 0) {
//             historyData.stackTop--;
//             historyData.undoStepLength --;
//         } else {
//             fullHook();
//         }
//     }
//
//     const top = computed({
//         get() {
//             return historyData.stack[historyData.stackTop];
//         },
//         set(value) {
//             historyData.stack[historyData.stackTop] = value;
//         }
//     })
//
//     const clear = () => {
//         historyData.stack = [];
//         historyData.stackTop = -1;
//     }
//
//     return {
//         historyData,
//         redo,
//         undo,
//         push,
//         pop,
//         clear,
//         top,
//     }
// }