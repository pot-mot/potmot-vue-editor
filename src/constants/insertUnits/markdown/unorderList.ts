import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {getLeadingSpace} from "../../../utils/editor/textUtils";
import {limit} from "../../../utils/common/math";
import {ref} from "vue";

export const unorderedList: InsertUnit = {
    key: '*',
    ctrl: true,
    label: "无序列表",
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
                returnText += `${space}* ${item.trim()}\n`;
            })

            return {before: "", after: returnText}
        } else {
            const space = getLeadingSpace(text, textarea.selectionStart).replace("\n", "")

            let listLength = args.get("unorderedListLength")!.value
            listLength = limit(listLength, 1, 99);


            for (let i = 0; i < listLength - 1; i++) {
                returnText += `${space}* \n`;
            }
            return {before: "* ", after: " \n" + returnText}
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