import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {formatInsert} from "../../../utils/editor/insertUtil";
import {
    orderedListCreat,
    orderedListFormat,
    orderedListJudge,
    orderedListReformat
} from "../../../utils/markdown/listUtils";

export const orderedList: InsertUnit = {
    key: '{',
    ctrl: true,
    label: "有序列表",
    insert: (args, textarea) => {
        return formatInsert(
            textarea,
            "ordered list",
            (startPart, midPart, endPart, space) => {
                if (midPart.length > 0) {
                    const list = midPart.split("\n")
                    const result = orderedListJudge(list) ? orderedListReformat(list, space).join("\n") : orderedListFormat(list, space)
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length,
                        end: startPart.length + result.length
                    }
                } else {
                    const length = parseInt(args.get("orderedListLength")!.value)
                    const start = parseInt(args.get("orderedListStart")!.value)
                    const result = orderedListCreat(length, start, space)
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length + (start + '').length + 2,
                    }
                }
            }
        )
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