import {InputInsertArgument, InsertUnit, OptionInsertArgument} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {formatInsert} from "../../../utils/editor/insertUtils";
import {
    unorderedListCreat,
    unorderedListFormat,
} from "../../../utils/markdown/list";
import {limit} from "../../../utils/common/math";

export const unorderedList: InsertUnit = {
    triggers: [
        {
            key: '}',
            ctrl: true,
        }
    ],
    label: "无序列表",
    insert: (args, textarea) => {
        return formatInsert(
            textarea,
            "unordered list",
            (startPart, midPart, endPart, space) => {
                const mark = args.get("unorderedListMark")!.value
                const placeholder = args.get("unorderedListWhiteSpace")!.value
                if (midPart.length > 0) {
                    const result = unorderedListFormat(midPart, mark, space, placeholder);
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length,
                        end: startPart.length + result.length
                    }
                } else {
                    const length = limit(parseInt(args.get("unorderedListLength")!.value), 1, 99);
                    const result = unorderedListCreat(length, mark, space, placeholder).slice(space.length);
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length + 2,
                    }
                }
            }
        );
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
        <OptionInsertArgument>{
            name: "unorderedListMark",
            label: "符号",
            options: ['-', '+', '*'],
            getRef: () => {
                let unorderedListMark: string = '-';
                return ref(unorderedListMark);
            }
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