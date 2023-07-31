import type { KeyEvent } from "../../declare/InsertUtil";
/**
 * 判断按键事件是否符合快捷键要求
 *
 * @param trigger 编辑器按键事件
 * @param event 触发事件
 */
export declare const judgeKeyEventTrigger: (trigger: KeyEvent, event: KeyboardEvent) => boolean;
export declare const judgeKeyEventTriggers: (e: KeyEvent[], event: KeyboardEvent) => boolean;
