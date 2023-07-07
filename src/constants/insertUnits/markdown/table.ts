import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";

export const table: InsertUnit = {
    key: "|",
    ctrl: true,
    label: "表格",
    replace: true,
    insert: (args, text, textarea) => {
        const whiteSpace = "  ";
        const headerSpace = " --- "

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

        let returnText = ""
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
                    returnText += createLine(width)
                    returnText += createLine(width, [], headerSpace)
                }
                returnText += createLine(width, data[i])
            }
        } else {
            height = limit(args.get("tableHeight")!.value, 1, 99)

            for (let i = 0; i < height; i++) {
                if (i == 0) {
                    returnText += createLine(width)
                    returnText += createLine(width, [], headerSpace)
                }
                returnText += createLine(width)
            }
        }

        return {before: returnText.slice(0, 2), after: returnText.slice(2)}
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