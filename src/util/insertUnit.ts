import {ref, Ref} from "vue";
import {languageList} from "../constant/LanguageList";

class InsertText {
    before: string;
    after: string;

    constructor(before: string = "", after: string = "") {
        this.before = before;
        this.after = after;
    }
}

class InsertArgument<T> {
    name: string;
    label: string;
    getRef: () => Ref<T>;

    constructor(name: string, label: string, getRef: () => Ref<T>) {
        this.name = name;
        this.label = label;
        this.getRef = getRef;
    }
}

class InputInsertArgument<T> extends InsertArgument<any> {
    type: string;

    constructor(name: string, label: string, type: string = "number", getRef: () => Ref<T> ) {
        super(name, label, getRef);
        this.type = type
    }
}

class OptionInsertArgument extends InsertArgument<string> {
    options: string[];

    constructor(name: string, label: string, options: string[] = [], getRef: () => Ref<string> ) {
        super(name, label, getRef);
        this.options = options;
    }
}

class InsertUnit {
    name: string;
    key: string;
    label: string;
    insert: (args: Map<string, Ref>) => InsertText;
    insertArguments: InsertArgument<any>[];
    replace: boolean;
    keepSelect: boolean;

    constructor(
        name: string,
        key: string,
        label: string,
        insert: (args: Map<string, any>) => InsertText,
        insertArguments: InsertArgument<any>[] = [],
        replace: boolean = false,
        keepSelect: boolean = false) {
        this.name = name;
        this.key = key;
        this.label = label;
        this.insert = insert;
        this.insertArguments = insertArguments;
        this.replace = replace;
        this.keepSelect = keepSelect;
    }
}

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
    new InsertUnit("title", '#', "标题",
        (args) => {
            let titleLevel = args.get("titleLevel").value
            titleLevel = limit(titleLevel, 1, 5);

            let returnText = ""
            for (let i = 0; i < titleLevel; i++) {
                returnText += "#";
            }

            return new InsertText(returnText + " ")
        },
        [
            new InputInsertArgument("titleLevel", "级别", "number",
                () => {
                    let titleLevel = 3
                    return ref(titleLevel)
                })
        ]
    ),
    new InsertUnit("code", '`', "代码块",
        (args) => {
            let codeLanguage = args.get("codeLanguage").value
            return new InsertText("```" + codeLanguage + "\n", "\n```",);
        },
        [
            new OptionInsertArgument("codeLanguage", "语言", languageList, () => {
                let codeLanguage = "bash"
                return ref(codeLanguage)
            })
        ]),
    new InsertUnit("form", '|', "表格",
        (args) => {
            let tableHeight = args.get("tableHeight").value
            let tableWidth = args.get("tableWidth").value

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

            return new InsertText("| ", returnText);
        },
        [
            new InputInsertArgument("tableHeight", "高度", "number",
                () => {
                    let tableHeight = 3
                    return ref(tableHeight)
                }),
            new InputInsertArgument("tableWidth", "宽度", "number",
                () => {
                    let tableWidth = 2
                    return ref(tableWidth)
                }
            ),
        ]
    ),
    new InsertUnit("list", '%', "列表",
        (args) => {
            let listLength = args.get("listLength").value
            let listStart = args.get("listStart").value

            listLength = limit(listLength, 1, 99);
            listStart = limit(listStart, 0, 10000);
            let returnText = "\n";
            for (let i = 0; i < listLength - 1; i++) {
                returnText += (i + listStart + 1) + ". \n";
            }
            return new InsertText(listStart + ". 文本", returnText)
        },
        [
            new InputInsertArgument("listLength", "项数", "number",
                () => {
                    let listLength = 3
                    return ref(listLength)
                }),
            new InputInsertArgument("listStart", "首项", "number",
                () => {
                    let listStart = 1
                    return ref(listStart)
                }),
        ]
    ),
    new InsertUnit("break", 'Enter', "换行", () => {
        return new InsertText("<br>");
    }),
    new InsertUnit("link", '@', "链接", () => {
        return new InsertText("[](", ")");
    }),
    new InsertUnit("details", '>', "折叠块", () => {
        return new InsertText("<details>\n<summary>[标识]</summary>\n", "\n</details>");
    }),
    new InsertUnit("warning", '!', "标亮",
        (args) => {
            let warningColor = args.get("warningColor").value
            return new InsertText("<span style='color: " + warningColor + ";'>", "</span>");
        },
        [
            new InputInsertArgument("warningColor", "颜色", "string",
                () => {
                let warningColor = "color"
                return ref(warningColor)
            }),
        ]
    ),
]

export const getArgsMap = (insertTextList: InsertUnit[]): Map<string, Ref> => {
    const argsMap = new Map<string, Ref>()
    for (let i = 0; i < insertTextList.length; i++) {
        for (let j = 0; j < insertTextList[i].insertArguments.length; j++) {
            argsMap.set(insertTextList[i].insertArguments[j].name, insertTextList[i].insertArguments[j].getRef())
        }
    }
    return argsMap
}