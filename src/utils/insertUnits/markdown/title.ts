import {limit} from "../../common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {formatInsert} from "../../editor/insertUtils";

export const title: InsertUnit = {
    triggers: [
        {key: '#', ctrl: true},
        {key: '1', ctrl: true},
        {key: '2', ctrl: true},
        {key: '3', ctrl: true},
        {key: '4', ctrl: true},
        {key: '5', ctrl: true},
        {key: '6', ctrl: true}
    ],
    label: "标题",
    insert: (args, textarea, event) => {
        let level: number = args.get("titleLevel")!.value
        if (event && ['1', '2', '3', '4', '5', '6'].includes(event.key)) {
            level = parseInt(event.key)
            args.get('titleLevel')!.value = level
        }
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