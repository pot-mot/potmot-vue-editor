import type {InputInsertArgument, InsertUnit, OptionInsertArgument} from "../declare/EditorUtil";
import {ref} from "vue";
import {languageList} from "../constant/LanguageList";
import {limit} from "./insertUtils";

export const markdownInsertUnits: InsertUnit[] = [
    {
        key: '#',
        ctrl: true,
        label: "标题",
        insert: (args) => {
            let level = args.get("titleLevel")!.value
            let minimum = args.get("titleMinimumThreshold")!.value
            minimum = limit(minimum, 1, 6);
            level = limit(level, 1, minimum);
            let returnText = ""
            for (let i = 0; i < level; i++) {
                returnText += "#";
            }
            if (level < minimum) args.get("titleLevel")!.value++;
            return {before: returnText + " ", after: ""}
        },
        arguments: [
            <InputInsertArgument<number>>{
                name: "titleLevel",
                label: "级别",
                type: "number",
                getRef: () => {
                    let level = 1;
                    return ref(level);
                },
                inputLength: 1,
            },
            <InputInsertArgument<number>>{
                name: "titleMinimumThreshold",
                label: "最小级别",
                type: "number",
                getRef: () => {
                    let minimum = 4;
                    return ref(minimum)
                },
                inputLength: 1,
            }
        ],
        replace: true,
        reject: true,
        prevent: true,
    },
    {
        key: "|",
        ctrl: true,
        label: "表格",
        insert: (args) => {
            let tableHeight = args.get("tableHeight")!.value
            let tableWidth = args.get("tableWidth")!.value

            let formLineText = "|";
            let formFormatText = "|";
            let whiteSpace = "  ";

            tableHeight = limit(tableHeight, 1, 99);
            tableWidth = limit(tableWidth, 1, 99);

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
    },
    {
        label: "有序列表",
        insert: (args) => {
            let listLength = args.get("orderedListLength")!.value
            let listStart = args.get("orderedListStart")!.value
            listLength = limit(listLength, 1, 99);
            listStart = limit(listStart, 0, 9999);
            let returnText = "\n";
            for (let i = 0; i < listLength - 1; i++) {
                returnText += (i + listStart + 1) + ". \n";
            }
            return {before: listStart + ". ", after: " " + returnText}
        },
        arguments: [
            <InputInsertArgument<number>>{
                name: "orderedListLength",
                label: "项数",
                type: "number",
                getRef: () => {
                    let orderedListLength = 3;
                    return ref(orderedListLength);
                },
                inputLength: 2,
            },
            <InputInsertArgument<number>>{
                name: "orderedListStart",
                label: "首项",
                type: "number",
                getRef: () => {
                    let orderedListStart = 1;
                    return ref(orderedListStart);
                },
                inputLength: 4,
            },
        ],
        reject: true,
        prevent: true,
    },
    {
        label: "无序列表",
        insert: (args) => {
            let listLength = args.get("unorderedListLength")!.value
            listLength = limit(listLength, 1, 99);
            let returnText = "";
            for (let i = 0; i < listLength - 1; i++) {
                returnText += "\n- ";
            }
            return {before: "- ", after: " " + returnText + "\n"}
        },
        arguments: [
            <InputInsertArgument<number>>{
                name: "unorderedListLength",
                label: "项数",
                type: "number",
                getRef: () => {
                    let unorderedListLength = 3;
                    return ref(unorderedListLength);
                },
                inputLength: 2,
            }
        ],
        reject: true,
        prevent: true,
    },
    {
        key: "@",
        ctrl: true,
        label: "链接",
        insert: (args) => {
            const label = args.get("linkLabel")!.value
            const url = args.get("linkUrl")!.value
            if (label.length > 0 && url.length > 0) return {before: "[" + label + "](" + url + ")", after: ""}
            else return {before: "[" + label + "](" + url, after: ")"}
        },
        arguments: [
            <InputInsertArgument<string>>{
                name: "linkLabel",
                label: "标题",
                type: "string",
                getRef: () => {
                    let linkLabel = "";
                    return ref(linkLabel);
                },
            },
            <InputInsertArgument<string>>{
                name: "linkUrl",
                label: "URL",
                type: "string",
                getRef: () => {
                    let linkUrl = "";
                    return ref(linkUrl);
                },
                styleWidth: "12em",
            }
        ],
        reject: true,
        prevent: true,
    },
    {
        label: "图片",
        insert: (args) => {
            const label = args.get("pictureName")!.value
            const url = args.get("pictureUrl")!.value
            if (label.length > 0 && url.length > 0) return {before: "![" + label + "](" + url + ")", after: ""}
            else return {before: "![" + label + "](" + url, after: ")"}
        },
        arguments: [
            <InputInsertArgument<string>>{
                name: "pictureName",
                label: "名称",
                type: "string",
                getRef: () => {
                    let pictureName = "";
                    return ref(pictureName);
                }
            },
            <InputInsertArgument<string>>{
                name: "pictureUrl",
                label: "URL",
                type: "string",
                getRef: () => {
                    let pictureUrl = "";
                    return ref(pictureUrl);
                },
                styleWidth: "12em",
            }
        ],
        reject: true,
        prevent: true,
    }
]

export const simpleInsertUnits: InsertUnit[] = [
    {
        key: "Enter",
        ctrl: true,
        label: "换行",
        insert: () => {
            return {before: "<br>", after: ""}
        },
        arguments: [],
        reject: true,
        prevent: true,
    },
    {
        key: ['`','~'],
        ctrl: true,
        label: "代码块",
        insert: (args) => {
            let codeLanguage = args.get("codeLanguage")!.value
            return {before: "```" + codeLanguage + "\n", after: "\n```"};
        },
        arguments: [
            <OptionInsertArgument>{
                name: "codeLanguage",
                label: "语言",
                options: languageList,
                getRef: () => {
                    let language = "";
                    return ref(language);
                }
            }
        ],
        reject: true,
        prevent: true,
    },
    {
        label: "数学算式",
        key: "$",
        ctrl: true,
        insert: () => {
            return {before: "$$\n", after: "\n$$"};
        },
        arguments: [],
        reject: true,
        prevent: true,
    }
]

export const htmlInsertUnits: InsertUnit[] = [
    {
        key: ">",
        ctrl: true,
        label: "折叠块",
        insert: (args) => {
            const summary = args.get("detailIsSummary")!.value
            const isOpen = args.get("detailIsOpen")!.value
            return {before: "<details" + (isOpen == '展开' ? ' open':'') + ">\n<summary>" + summary + "</summary>\n", after: "\n</details>"}
        },
        arguments: [
            <InputInsertArgument<string>>{
                name: "detailIsSummary",
                label: "标识",
                type: "string",
                getRef: () => {
                    let summary = "";
                    return ref(summary);
                },
                styleWidth: "6em",
            },
            <OptionInsertArgument>{
                name: "detailIsOpen",
                label: "默认状态",
                getRef: () => {
                    let detailIsOpen = "收起";
                    return ref(detailIsOpen);
                },
                options: ["收起", "展开"]
            }
        ],
        keepSelect: true,
        reject: true,
        prevent: true,
    },
    {
        ctrl: true,
        key: '!',
        label: "标亮",
        insert: (args) => {
            const warningColor = args.get("warningColor")!.value
            const label = args.get("warningLabel")!.value
            return {before: "<" + label + " style='color: " + warningColor + ";'>", after: "</" + label + ">"}
        },
        arguments: [
            <InputInsertArgument<string>>{
                name: "warningColor",
                label: "颜色",
                type: "string",
                getRef: () => {
                    let color = "red";
                    return ref(color);
                },
                styleWidth: "4em",
            },
            <InputInsertArgument<string>>{
                name: "warningLabel",
                label: "标签",
                type: "string",
                getRef: () => {
                    let label = "span";
                    return ref(label);
                },
                styleWidth: "4em",
            }
        ],
        reject: true,
        prevent: true,
    },
]