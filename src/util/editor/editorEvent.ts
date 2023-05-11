import type {EditorKeyEvent} from "../../declare/EditorUtil";

/**
 * 判断按键事件是否符合快捷键要求
 *
 * @param editorKeyEvent 编辑器按键事件
 * @param event 触发事件
 */
export const judgeKeyForEditorKeyEvent = (editorKeyEvent: EditorKeyEvent, event: KeyboardEvent) => {
    if (editorKeyEvent.ctrl != undefined && editorKeyEvent.ctrl != event.ctrlKey) {
        return false;
    }

    if (editorKeyEvent.alt != undefined && editorKeyEvent.alt != event.altKey) {
        return false;
    }

    if (editorKeyEvent.shift != undefined && editorKeyEvent.shift != event.shiftKey) {
        return false;
    }

    if (editorKeyEvent.key instanceof Array) {
        for (const key of editorKeyEvent.key) {
            if (key == event.key) {
                return true;
            }
        }
    } else if (editorKeyEvent.key != undefined && editorKeyEvent.key == event.key) {
        return true;
    }

    return false;
}