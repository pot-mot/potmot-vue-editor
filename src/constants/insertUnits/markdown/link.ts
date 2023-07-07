import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";

export const link: InsertUnit = {
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
}