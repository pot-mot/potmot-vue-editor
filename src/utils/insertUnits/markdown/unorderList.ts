import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {formatInsert} from "../../editor/insertUtils";
import {
    unorderedListCreat,
    unorderedListFormat,
} from "../../markdown/listUtils";
import {limit} from "../../common/math";


export const unorderedList: InsertUnit = {
    triggers: [
        {
            key: '}',
            ctrl: true,
        }
    ],
    label: "无序列表",
    insert: (args, textarea) => {
        const mark = '-'
        return formatInsert(
            textarea,
            "unordered list",
            (startPart, midPart, endPart, space) => {
                const placeholder = args.get("unorderedListWhiteSpace")!.value
                if (midPart.length > 0) {
                    const list = midPart.split("\n")
                    const result = unorderedListFormat(list, mark, space, placeholder)
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length,
                        end: startPart.length + result.length
                    }
                } else {
                    const length = limit(parseInt(args.get("unorderedListLength")!.value), 1, 99)
                    const result = unorderedListCreat(length, mark, space, placeholder)
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length + 2,
                    }
                }
            }
        )
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
        },
        <InputInsertArgument<string>>{
            name: "unorderedListWhiteSpace",
            label: "空占位",
            type: "string",
            getRef: () => {
                let unorderedListWhiteSpace = "";
                return ref(unorderedListWhiteSpace);
            },
            inputLength: 50,
        },
    ],
    reject: true,
    prevent: true,
}