import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {formatInsert} from "../../../utils/editor/insertUtil";
import {
    unorderedListCreat,
    unorderedListFormat,
    unorderedListJudge,
    unorderedListReformat
} from "../../../utils/markdown/listUtils";


export const unorderedList: InsertUnit = {
    key: '}',
    ctrl: true,
    label: "无序列表",
    insert: (args, textarea) => {
        const mark = '-'
        return formatInsert(
            textarea,
            "unordered list",
            (startPart, midPart, endPart, space) => {
                if (midPart.length > 0) {
                    const list = midPart.split("\n")
                    const result = unorderedListJudge(list) ? unorderedListReformat(list, space).join("\n") : unorderedListFormat(list, mark, space)
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length,
                        end: startPart.length + result.length
                    }
                } else {
                    const length = parseInt(args.get("unorderedListLength")!.value)
                    const result = unorderedListCreat(length, mark, space)
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
        }
    ],
    reject: true,
    prevent: true,
}