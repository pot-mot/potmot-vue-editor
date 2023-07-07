import {getLeadingSpace} from "../../../utils/editor/textUtils";
import {InsertUnit} from "../../../declare/EditorUtil";

export const quote: InsertUnit = {
    key: '>',
    ctrl: true,
    label: "引用",
    replace: true,
    keepSelect: true,
    insert: (args, text, textarea) => {
        let returnText = "";

        if (textarea.selectionStart != textarea.selectionEnd) {
            let start = textarea.selectionStart

            while (text[start] == " " || text[start] == "\t") {
                start++;
            }

            const space = getLeadingSpace(text, start).replace("\n", "")

            const list = text.slice(start, textarea.selectionEnd).split("\n")

            list.forEach(item => {
                returnText += `${space}> ${item.trim()}\n`;
            })

            return {before: "", after: returnText}
        } else {
            return {before: "> ", after: " \n" + returnText}
        }
    },
    arguments: [],
    reject: true,
    prevent: true,
}