import {ref, Ref} from "vue";
import {languageList} from "../constant/LanguageList";
import type {InputInsertArgument, InsertUnit, OptionInsertArgument} from "../declare/insertUnit";


/**
 * 约束数值大小
 *
 * @param input 输入值
 * @param min 最小值
 * @param max 最大值
 */
export const limit = (input: number, min: number, max: number): number => {
    if (input > max) return max;
    if (input < min) return min;
    return input;
}

/**
 * 在字符串中插入替换部分
 *
 * @param inserter 插入部分
 * @param target 目标字符串
 * @param start 替换起点
 * @param end 替换终点，默认等于起点（即不进行替换）
 */
export const insertIntoString = (inserter: string, target: string, start: number, end: number = start): string => {
    return target.slice(0, start) + inserter + target.slice(end);
}

export const defaultInsertUnits: InsertUnit[] = [
    {
        name: "title",
        key: '#',
        label: "标题",
        insert: (args) => {
            let titleLevel = args.get("titleLevel")?.value
            titleLevel = limit(titleLevel, 1, 5);
            let returnText = ""
            for (let i = 0; i < titleLevel; i++) {
                returnText += "#";
            }
            return {before: returnText + " ", after: ""}
        },
        arguments: [
            <InputInsertArgument<number>>{
                name: "titleLevel",
                label: "级别",
                type: "number",
                getRef: () => {
                    return ref(3)
                }
            }
        ],
        replace: true,
        keepSelect: false,
    },
    {
        name: "code",
        key: '`',
        label: "代码块",
        insert: (args) => {
            let codeLanguage = args.get("codeLanguage")?.value
            return {before: "```" + codeLanguage + "\n", after: "\n```"};
        },
        arguments: [
            <OptionInsertArgument>{
                name: "codeLanguage",
                label: "语言",
                options: languageList,
                getRef: () => {
                    return ref(languageList[0])
                }
            }
        ],
        replace: false,
        keepSelect: false,
    },
    {
        name: "form",
        key: "|",
        label: "表格",
        insert: (args) => {
            let tableHeight = args.get("tableHeight")?.value
            let tableWidth = args.get("tableWidth")?.value

            let formLineText = "|";
            let formFormatText = "|";
            let whiteSpace = "  ";

            tableHeight = limit(tableHeight, 1, 99);
            tableWidth = limit(tableWidth, 1, 15);

            for (let i = 0; i < tableWidth; i++) {
                formLineText += (whiteSpace + "|");
                formFormatText += "----|";
            }
            formLineText += "\n";
            formFormatText += "\n";

            let returnText = formLineText.slice(2) + formFormatText;

            for (let i = 0; i < tableHeight; i++) {
                returnText += formLineText;
            }
            return {before: "| ", after: returnText};
        },
        arguments: [
            <InputInsertArgument<number>>{
                name: "tableHeight",
                label: "高度",
                type: "number",
                getRef: () => {
                    return ref(3)
                }
            },
            <InputInsertArgument<number>>{
                name: "tableWidth",
                label: "宽度",
                type: "number",
                getRef: () => {
                    return ref(2)
                }
            },
        ],
        replace: false,
        keepSelect: false,
    },
    {
        name: "list",
        key: "%",
        label: "列表",
        insert: (args) => {
            let listLength = args.get("listLength")?.value
            let listStart = args.get("listStart")?.value

            listLength = limit(listLength, 1, 99);
            listStart = limit(listStart, 0, 10000);
            let returnText = "\n";
            for (let i = 0; i < listLength - 1; i++) {
                returnText += (i + listStart + 1) + ". \n";
            }
            return {before: listStart + ". 文本", after: returnText}
        },
        arguments: [
            <InputInsertArgument<number>>{
                name: "listLength",
                label: "项数",
                type: "number",
                getRef: () => {
                    return ref(3)
                }
            },
            <InputInsertArgument<number>>{
                name: "listStart",
                label: "首项",
                type: "number",
                getRef: () => {
                    return ref(1)
                }
            },
        ],
        replace: false,
        keepSelect: false,
    },
    {
        name: "break",
        key: "Enter",
        label: "换行",
        insert: () => {
            return {before: "<br>", after: ""}
        },
        arguments: [],
        replace: false,
        keepSelect: false,
    },
    {
        name: "link",
        key: "@",
        label: "链接",
        insert: () => {
            return {before: "[](", after: ")"}
        },
        arguments: [],
        replace: false,
        keepSelect: false,
    },
    {
        name: "details",
        key: ">",
        label: "折叠块",
        insert: () => {
            return {before: "<details>\n<summary>[标识]</summary>\n", after: "\n</details>"}
        },
        arguments: [],
        replace: false,
        keepSelect: false,
    },
    {
        name: "warning",
        key: "!",
        label: "标亮",
        insert: (args) => {
            let warningColor = args.get("warningColor")?.value
            return {before: "<span style='color: " + warningColor + ";'>", after: "</span>"}
        },
        arguments: [
            <InputInsertArgument<string>>{
                name: "warningColor",
                label: "颜色",
                type: "string",
                getRef: () => {
                    return ref("color")
                }
            }
        ],
        replace: false,
        keepSelect: false,
    }
]

export const getArgsMap = (insertTextList: InsertUnit[]): Map<string, Ref> => {
    const argsMap = new Map<string, Ref>()
    for (let i = 0; i < insertTextList.length; i++) {
        for (let j = 0; j < insertTextList[i].arguments.length; j++) {
            argsMap.set(insertTextList[i].arguments[j].name, insertTextList[i].arguments[j].getRef())
        }
    }
    return argsMap
}