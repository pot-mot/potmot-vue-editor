import {InsertUnit} from "../../../declare/InsertUtil";
import {formatInsert} from "../../editor/insertUtils";
import {quoteFormat} from "../../markdownFormat/quote";

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
                    const result = quoteFormat(midPart, space);
                    return {
                        content: [startPart, result, endPart],
                        start: startPart.length,
                        end: startPart.length + result.length
                    }
                } else {
                    const resultText = `> \n${space}> \n${space}> `
                    return {
                        content: [startPart, resultText, endPart],
                        start: startPart.length + resultText.length - 3 - space.length
                    }
                }
            }
        );
    },
    arguments: [],
    reject: true,
    prevent: true,
}