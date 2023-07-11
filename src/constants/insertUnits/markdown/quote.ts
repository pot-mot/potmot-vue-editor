import {InsertUnit} from "../../../declare/EditorUtil";
import {formatInsert} from "../../../utils/editor/insertUtil";

export const quote: InsertUnit = {
    key: ['Q', '>'],
    ctrl: true,
    label: "引用",
    insert: (args, textarea) => {
        return formatInsert(
            textarea,
            "insert quote",
            (startPart, midPart, endPart) => {
                let returnText = "";
                const list = midPart.split("\n")
                list.forEach(item => {
                    returnText += `> ${item.trim()}\n`;
                })
                returnText = `> \n${returnText}> `
                return {
                    content: [startPart, returnText, endPart],
                    start: startPart.length + returnText.length - 3
                }
            }
        )
    },
    arguments: [],
    reject: true,
    prevent: true,
}