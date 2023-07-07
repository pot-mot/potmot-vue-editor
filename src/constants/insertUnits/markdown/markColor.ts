import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";

export const markColor: InsertUnit = {
    alt: true,
    key: '=',
    label: "标亮",
    insert: (args) => {
        const warningColor = args.get("warningColor")!.value

        if (warningColor == 'red') return {before: "==", after: "=="}
        return {before: "==(" + warningColor + ")", after: "=="}
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
    ],
    reject: true,
    prevent: true,
}