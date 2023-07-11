import {getLeadingSpace} from "../../../utils/editor/textUtils";
import {InsertUnit} from "../../../declare/EditorUtil";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const quote: InsertUnit = {
    key: '>',
    ctrl: true,
    label: "引用",
    insert: (args, textarea) => {
        let returnText = "";

        const text = textarea.value

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

            return  simpleInsert(textarea, "format quote", "", returnText, true, true)
        } else {
            return  simpleInsert(textarea, "format quote", "> ", " \n" + returnText)
        }
    },
    arguments: [],
    reject: true,
    prevent: true,
}