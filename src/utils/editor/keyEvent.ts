import type {KeyEvent, KeyEventTriggers} from "../../declare/EditorUtil";

/**
 * 判断按键事件是否符合快捷键要求
 *
 * @param trigger 编辑器按键事件
 * @param event 触发事件
 */
export const judgeKeyEventTrigger = (trigger: KeyEvent, event: KeyboardEvent): boolean => {
    if ((trigger.ctrl && trigger.ctrl != event.ctrlKey) ||
        (trigger.alt && trigger.alt != event.altKey) ||
        (trigger.shift && trigger.shift != event.shiftKey)
    ) {
        return false;
    }

    if (trigger.key instanceof Array) {
        for (const key of trigger.key) {
            if (key == event.key) {
                return true;
            }
        }
    } else if (trigger.key != undefined && trigger.key == event.key) {
        return true;
    }

    return false;
}

export const judgeKeyEventTriggers = (e: KeyEvent[], event: KeyboardEvent): boolean => {
    for (let trigger of e) {
        if (judgeKeyEventTrigger(trigger, event)) return true
    }
    return false
}