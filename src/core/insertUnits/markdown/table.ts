import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit, OptionInsertArgument} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {formatInsert} from "../../../utils/editor/insertUtils";
import {tableCreate, tableFormat} from "../../../utils/markdown/table";

export const tableHeadType = new Map([
    ["firstLine", "首行"],
    ["empty", "空缺"],
    ["null", "不含表头"]
])

export const tableHeadOptions = [...tableHeadType.values()];

export const table: InsertUnit = {
    triggers: [
        {
            key: "|",
            ctrl: true,
        }
    ],
    label: "表格",
    insert: (args, textarea) => {
        return formatInsert(
            textarea,
            "table",
            (startPart, midPart, endPart, space) => {
                const placeholder = args.get("tablePlaceholder")!.value;
                let width = limit(parseInt(args.get("tableColumnLength")!.value), 1, 99);
                const tableHead = args.get("tableHeadConfig")!.value
                let result: string
                if (midPart.length > 0) {
                    const lines = midPart.split("\n");
                    const data: string[][] = []
                    lines.forEach(line => {
                        const columns = line.split(/\t+/);
                        data.push(columns);
                        if (columns.length > width) {
                            width = columns.length
                        }
                    });
                    result = tableFormat(data, width, placeholder, space, tableHead);
                } else {
                    const height = limit(parseInt(args.get("tableRowLength")!.value), 1, 99);
                    result = tableCreate(height, width, placeholder, space, tableHead);
                }
                if (result.startsWith(space)) result = result.replace(space, '');
                return {
                    content: [startPart, result, endPart],
                    start: startPart.length + 2,
                }
            }
        );
    },
    arguments: [
        <InputInsertArgument<number>>{
            name: "tableRowLength",
            label: "行",
            type: "number",
            getRef: () => {
                let tableHeight = 3;
                return ref(tableHeight);
            },
            inputLength: 2,
        },
        <InputInsertArgument<number>>{
            name: "tableColumnLength",
            label: "列",
            type: "number",
            getRef: () => {
                let tableWidth = 2;
                return ref(tableWidth);
            },
            inputLength: 2,
        },
        <InputInsertArgument<string>>{
            name: "tablePlaceholder",
            label: "空占位",
            type: "string",
            getRef: () => {
                let tableWhiteSpace = "";
                return ref(tableWhiteSpace);
            },
            inputLength: 50,
        },
        <OptionInsertArgument>{
            name: "tableHeadConfig",
            label: "表头",
            getRef: () => {
                let detailIsOpen = "首行";
                return ref(detailIsOpen);
            },
            options: tableHeadOptions
        }
    ],
    reject: true,
    prevent: true,
}