import {InputInsertArgument, InsertUnit, OptionInsertArgument} from "../declare/insertUnit";
import {ref} from "vue";
import {languageList} from "../constant/LanguageList";
import {limit} from "./insertUnit";


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
        replace: true
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
                    return ref("")
                }
            }
        ]
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
        ]
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
        ]
    },
    {
        name: "break",
        key: "Enter",
        label: "换行",
        insert: () => {
            return {before: "<br>", after: ""}
        },
        arguments: []
    },
    {
        name: "link",
        key: "@",
        label: "链接",
        insert: (args) => {
            const label = args.get("link-label")?.value
            const address = args.get("link-address")?.value
            if (label.length > 0 && address.length > 0) return {before: "[" + label + "](" + address + ")", after: ""}
            else if (label.length > 0) return {before: "[" + label + "](", after: ")"}
            else if (address.length > 0) return {before: "[", after: "](" + address + ")"}
            else return {before: "[", after: "]()"}
        },
        arguments: [
            <InputInsertArgument<string>>{
                name: "link-label",
                label: "标题",
                type: "string",
                getRef: () => {
                    return ref("")
                }
            },
            <InputInsertArgument<string>>{
                name: "link-address",
                label: "地址",
                type: "string",
                getRef: () => {
                    return ref("")
                }
            }
        ]
    },
    {
        name: "details",
        key: ">",
        label: "折叠块",
        insert: (args) => {
            const summary = args.get("summary")?.value
            if (summary.length > 0) return {before: "<details>\n<summary>" + summary + "</summary>\n", after: "\n</details>"}
            else return {before: "<details>\n<summary>", after: "</summary>\n" + "\n</details>"}
        },
        arguments: [
            <InputInsertArgument<string>>{
                name: "summary",
                label: "标识",
                type: "string",
                getRef: () => {
                    return ref("")
                }
            }
        ],
        keepSelect: true
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
        ]
    }
]