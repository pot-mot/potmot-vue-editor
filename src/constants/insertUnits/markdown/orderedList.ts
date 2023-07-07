import {getLeadingSpace} from "../../../utils/editor/textUtils";
import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";

export const orderedList: InsertUnit = {
    key: '%',
    ctrl: true,
    label: "有序列表",
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

            for (let i = 0; i < list.length; i++) {
                returnText += `${space + (i + 1)}. ${list[i].trim()}\n`;
            }

            return {before: "", after: returnText}
        } else {
            let listLength = args.get("orderedListLength")!.value
            let listStart = args.get("orderedListStart")!.value
            listLength = limit(listLength, 1, 99);
            listStart = limit(listStart, 0, 9999);

            const space = getLeadingSpace(text, textarea.selectionStart).replace("\n", "")
            for (let i = 0; i < listLength - 1; i++) {
                returnText += `${space + (i + listStart + 1)}. \n`;
            }
            return {before: listStart + ". ", after: "\n" + returnText}
        }
    },
    arguments: [
        <InputInsertArgument<number>>{
            name: "orderedListLength",
            label: "项数",
            type: "number",
            getRef: () => {
                let orderedListLength = 3;
                return ref(orderedListLength);
            },
            inputLength: 2,
        },
        <InputInsertArgument<number>>{
            name: "orderedListStart",
            label: "首项",
            type: "number",
            getRef: () => {
                let orderedListStart = 1;
                return ref(orderedListStart);
            },
            inputLength: 4,
        },
    ],
    reject: true,
    prevent: true,
}