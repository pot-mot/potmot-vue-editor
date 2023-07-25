import {InputInsertArgument, InsertUnit} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {simpleInsert} from "../../editor/insertUtils";

export const image: InsertUnit = {
    triggers: [
        {
            key: '!',
            ctrl: true,
        }
    ],
    label: "图片",
    insert: (args, textarea) => {
        const label = args.get("pictureName")!.value
        const url = args.get("pictureUrl")!.value
        if (label.length > 0 && url.length > 0) {
            return simpleInsert(
                textarea,
                "insert picture link",
                `![${label}](${url})`
            );
        } else {
            return simpleInsert(
                textarea,
                "insert picture link",
                `![${label}](`,
                ")"
            );
        }
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