import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {formatInsert} from "../../../utils/editor/insertUtil";

export const title: InsertUnit = {
    key: '#',
    ctrl: true,
    label: "标题",
    insert: (args, textarea) => {
        let level = args.get("titleLevel")!.value
        level = limit(level, 1, 6)
        let returnText = ""
        for (let i = 0; i < level; i++) {
            returnText += "#"
        }
        returnText += " "
        return formatInsert(
            textarea,
            "insert title",
            (startPart, midPart, endPart) => {
                return {
                    content: [startPart, returnText, midPart, endPart],
                    start: startPart.length + returnText.length + midPart.length
                }
            }
        )
    },
    arguments: [
        <InputInsertArgument<number>>{
            name: "titleLevel",
            label: "级别",
            type: "number",
            getRef: () => {
                let level = 3;
                return ref(level);
            },
            inputLength: 1,
        }
    ],
    reject: true,
    prevent: true,
}