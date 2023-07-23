import {InputInsertArgument, InsertUnit} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {formatInsert} from "../../editor/insertUtils";
import {
    orderedListCreat,
    orderedListFormat,
} from "../../markdownFormat/list";
import {limit} from "../../common/math";

export const orderedList: InsertUnit = {
    triggers: [
        {
            key: '{',
            ctrl: true,
        }
    ],
    label: "有序列表",
    insert: (args, textarea) => {
        return formatInsert(
            textarea,
            "ordered list",
            (startPart, midPart, endPart, space) => {
                const placeholder = args.get("orderedListWhiteSpace")!.value
                const start = parseInt(args.get("orderedListStart")!.value)
                if (midPart.length > 0) {
                    const result = orderedListFormat(midPart, space, start, placeholder)
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length,
                        end: startPart.length + result.length
                    }
                } else {
                    const length = limit(parseInt(args.get("orderedListLength")!.value), 1, 99)
                    const result = orderedListCreat(length, start, space, placeholder).slice(space.length)
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
        <InputInsertArgument<string>>{
            name: "orderedListWhiteSpace",
            label: "空占位",
            type: "string",
            getRef: () => {
                let orderedListWhiteSpace = "";
                return ref(orderedListWhiteSpace);
            },
            inputLength: 50,
        },
    ],
    reject: true,
    prevent: true,
}