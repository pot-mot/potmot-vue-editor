import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtils";

export const markColor: InsertUnit = {
    triggers: [
        {
            alt: true,
            key: '=',
        }
    ],
    label: "标亮",
    insert: (args, textarea) => {
        const warningColor = args.get("warningColor")!.value

        if (warningColor == 'red') {
            return simpleInsert(
                textarea,
                "insert link",
                "==",
                "=="
            )
        } else {
            return simpleInsert(
                textarea,
                "insert link",
                `==(${warningColor})`,
                "==",
            )
        }
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