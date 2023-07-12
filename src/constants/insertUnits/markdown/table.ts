import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const table: InsertUnit = {
    triggers: [
        {
            key: "|",
            ctrl: true,
        }
    ],
    label: "表格",
    insert: (args, textarea) => {
        const whiteSpace = "  ";
        const headerSpace = " --- "
        const text = textarea.value

        const createLine = (length: number, data: string[] = [], space: string = whiteSpace) => {
            let line = "|"
            for (let j = 0; j < length; j++) {
                if (j < data.length) {
                    line += ` ${data[j]} |`
                } else {
                    line += `${space}|`
                }
            }
            line += "\n"
            return line
        }

        let resultText = ""
        let width = limit(args.get("tableWidth")!.value, 1, 99)
        let height

        if (textarea.selectionStart != textarea.selectionEnd) {
            const rows = text.slice(textarea.selectionStart, textarea.selectionEnd).split("\n")
            const data: string[][] = []

            rows.forEach(line => {
                const columns = line.split(/\s+/)
                data.push(columns)
                if (columns.length > width) {
                    width = columns.length
                }
            })

            height = data.length

            for (let i = 0; i < height; i++) {
                if (i == 0) {
                    resultText += createLine(width)
                    resultText += createLine(width, [], headerSpace)
                }
                resultText += createLine(width, data[i])
            }
        } else {
            height = limit(args.get("tableHeight")!.value, 1, 99)

            for (let i = 0; i < height; i++) {
                if (i == 0) {
                    resultText += createLine(width)
                    resultText += createLine(width, [], headerSpace)
                }
                resultText += createLine(width)
            }
        }

        return simpleInsert(
            textarea,
            "insert table",
            resultText.slice(0, 2),
            resultText.slice(2),
            false,
            true
        )
    },
    arguments: [
        <InputInsertArgument<number>>{
            name: "tableHeight",
            label: "高度",
            type: "number",
            getRef: () => {
                let tableHeight = 3;
                return ref(tableHeight);
            },
            inputLength: 2,
        },
        <InputInsertArgument<number>>{
            name: "tableWidth",
            label: "宽度",
            type: "number",
            getRef: () => {
                let tableWidth = 2;
                return ref(tableWidth);
            },
            inputLength: 2,
        },
    ],
    reject: true,
    prevent: true,
}