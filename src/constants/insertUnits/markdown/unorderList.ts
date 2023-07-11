import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {getLeadingSpace} from "../../../utils/editor/textUtils";
import {limit} from "../../../utils/common/math";
import {ref} from "vue";
import {formatInsert, simpleInsert} from "../../../utils/editor/insertUtil";

export const unorderedList: InsertUnit = {
    key: '}',
    ctrl: true,
    label: "无序列表",
    insert: (args, textarea) => {
        const mark = '-'
        const text = textarea.value
        let returnText = "";

        if (textarea.selectionStart != textarea.selectionEnd) {
            return formatInsert(
                textarea,
                "format unordered list",
                (startPart, midPart, endPart, space) => {
                    const list = midPart.split("\n")
                    list.forEach(item => {
                        returnText += `${space}${mark} ${item.trim()}\n`;
                    })
                    return {
                        content: [startPart, returnText.slice(0, returnText.length - 1), endPart],
                        start: startPart.length,
                        end: startPart.length + returnText.length - 1
                    }
                }
            )
        } else {
            const space = getLeadingSpace(text, textarea.selectionStart).replace("\n", "")

            let listLength = args.get("unorderedListLength")!.value
            listLength = limit(listLength, 1, 99);


            for (let i = 0; i < listLength - 1; i++) {
                returnText += `${space}${mark} \n`;
            }

            return simpleInsert(
                textarea,
                "insert unordered list",
                `${mark} `,
                " \n" + returnText
            )
        }
    },
    arguments: [
        <InputInsertArgument<number>>{
            name: "unorderedListLength",
            label: "项数",
            type: "number",
            getRef: () => {
                let unorderedListLength = 3;
                return ref(unorderedListLength);
            },
            inputLength: 2,
        }
    ],
    reject: true,
    prevent: true,
}