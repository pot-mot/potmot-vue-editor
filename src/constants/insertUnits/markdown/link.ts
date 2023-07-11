import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const link: InsertUnit = {
    key: "@",
    ctrl: true,
    label: "链接",
    insert: (args, textarea) => {
        const label = args.get("linkLabel")!.value
        const url = args.get("linkUrl")!.value
        if (label.length > 0 && url.length > 0) {
            return simpleInsert(
                textarea,
                "insert link",
                `[${label}](${url})`
            )
        } else {
            return simpleInsert(
                textarea,
                "insert link",
                `[${label}](`,
                ")"
            )
        }
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