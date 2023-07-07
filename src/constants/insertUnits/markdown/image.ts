import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";

export const image: InsertUnit = {
    key: '!',
    ctrl: true,
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