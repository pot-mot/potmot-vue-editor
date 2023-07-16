import type {KeyEvent, KeyEventTriggers} from "../../declare/EditorUtil";

/**
 * 判断按键事件是否符合快捷键要求
 *
 * @param trigger 编辑器按键事件
 * @param event 触发事件
 */
export const judgeKeyEventTrigger = (trigger: KeyEvent, event: KeyboardEvent): boolean => {
    if (trigger.ctrl != undefined && trigger.ctrl != event.ctrlKey) {
        return false;
    }

    if (trigger.alt != undefined && trigger.alt != event.altKey) {
        return false;
    }

    if (trigger.shift != undefined && trigger.shift != event.shiftKey) {
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

export const judgeKeyEventTriggers = (e: KeyEventTriggers, event: KeyboardEvent): boolean => {
    for (let trigger of e.triggers) {
        if (judgeKeyEventTrigger(trigger, event)) return true
    }
    return false
}