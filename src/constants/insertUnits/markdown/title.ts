import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {formatInsert} from "../../../utils/editor/insertUtil";

export const title: InsertUnit = {
    triggers: [
        {
            key: '#',
            ctrl: true,
        }
    ],
    label: "标题",
    insert: (args, textarea) => {
        let level = args.get("titleLevel")!.value
        level = limit(level, 1, 6)
        let resultText = ""
        for (let i = 0; i < level; i++) {
            resultText += "#"
        }
        resultText += " "
        return formatInsert(
            textarea,
            "title",
            (startPart, midPart, endPart) => {
                return {
                    content: [startPart, resultText, midPart, endPart],
                    start: startPart.length + resultText.length + midPart.length
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