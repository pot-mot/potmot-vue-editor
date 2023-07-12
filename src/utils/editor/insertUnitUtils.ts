import {InsertUnit} from "../../declare/EditorUtil";

export const formatTriggers = (insertUnit: InsertUnit): string[] => {
    const result: string[] = []
    insertUnit.triggers.forEach(item => {
        result.push(`${item.ctrl ? "Ctrl + " : ""}${item.shift ? "Shift + " : ""}${item.alt ? "Alt + " : ""}${item.key}`)
    })
    return result
}