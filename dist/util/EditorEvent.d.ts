import type { EditorKeyEvent } from "../declare/EditorUtil";
/**
 * 判断按键事件是否符合快捷键要求
 *
 * @param editorKeyEvent 编辑器按键事件
 * @param event 触发事件
 */
export declare const judgeKeyForEditorKeyEvent: (editorKeyEvent: EditorKeyEvent, event: KeyboardEvent) => boolean;
