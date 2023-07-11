import {getLeadingSpace} from "../../../utils/editor/textUtils";
import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {formatInsert, simpleInsert} from "../../../utils/editor/insertUtil";

export const orderedList: InsertUnit = {
    key: '{',
    ctrl: true,
    label: "有序列表",
    insert: (args, textarea) => {
        let returnText = "";
        const text = textarea.value

        if (textarea.selectionStart != textarea.selectionEnd) {
            return formatInsert(
                textarea,
                "ordered list",
                (startPart, midPart, endPart, space) => {
                    const list = midPart.split("\n")
                    for (let i = 0; i < list.length; i++) {
                        returnText += `${space + (i + 1)}. ${list[i].trim()}\n`;
                    }
                    return {
                        content: [startPart, returnText.slice(0, returnText.length - 1), endPart],
                        start: startPart.length,
                        end: startPart.length + returnText.length - 1
                    }
                }
            )
        } else {
            let listLength = args.get("orderedListLength")!.value
            let listStart = args.get("orderedListStart")!.value
            listLength = limit(listLength, 1, 99);
            listStart = limit(listStart, 0, 9999);

            const space = getLeadingSpace(text, textarea.selectionStart).replace("\n", "")
            for (let i = 0; i < listLength - 1; i++) {
                returnText += `${space + (i + listStart + 1)}. \n`;
            }

            return simpleInsert(
                textarea,
                "insert ordered list",
                `${listStart}. `,
                "\n" + returnText
            )
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