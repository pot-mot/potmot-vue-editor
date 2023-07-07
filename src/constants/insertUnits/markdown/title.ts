import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";

export const title: InsertUnit = {
    key: '#',
    ctrl: true,
    label: "标题",
    insert: (args) => {
        let level = args.get("titleLevel")!.value
        level = limit(level, 1, 6);
        let returnText = ""
        for (let i = 0; i < level; i++) {
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
                let level = 3;
                return ref(level);
            },
            inputLength: 1,
        }
    ],
    replace: true,
    reject: true,
    prevent: true,
}