import {InsertUnit} from "../../declare/EditorUtil";

/**
 * 格式化插入单元的快捷键的提示
 *
 * @param insertUnit 插入单元
 */
export const formatTriggers = (insertUnit: InsertUnit): string[] => {
    const result: string[] = []
    insertUnit.triggers.forEach(item => {
        result.push(`${item.ctrl ? "Ctrl + " : ""}${item.shift ? "Shift + " : ""}${item.alt ? "Alt + " : ""}${item.key}`)
    })
    return result
}