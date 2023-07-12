import {InsertUnit} from "../../../declare/EditorUtil";
import {formatInsert} from "../../../utils/editor/insertUtil";
import {ltrim} from "../../../utils/common/string";

export const quote: InsertUnit = {
    triggers: [
        {
            key: ['Q', '>'],
            ctrl: true,
        }
    ],
    label: "引用",
    insert: (args, textarea) => {
        return formatInsert(
            textarea,
            "quote",
            (startPart, midPart, endPart, space) => {
                if (midPart.length != 0) {
                    const result: string[] = [];
                    const list = midPart.split("\n")
                    list.forEach(item => {
                        result.push(`> ${space}${item}`);
                    })
                    const resultText: string = result.join("\n")
                    return {
                        content: [startPart, resultText, endPart],
                        start: startPart.length + resultText.length
                    }
                } else {
                    const resultText = `> \n${space}> \n${space}> `
                    return {
                        content: [startPart, resultText, endPart],
                        start: startPart.length + resultText.length - 3 - space.length
                    }
                }
            }
        )
    },
    arguments: [],
    reject: true,
    prevent: true,
}