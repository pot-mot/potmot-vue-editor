import {limit} from "../../../utils/common/math";
import {InputInsertArgument, InsertUnit} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const title: InsertUnit = {
    key: '#',
    ctrl: true,
    label: "标题",
    insert: (args, textarea) => {
        let level = args.get("titleLevel")!.value
        level = limit(level, 1, 6);
        let returnText = ""
        for (let i = 0; i < level; i++) {
            returnText += "#";
        }
        return simpleInsert(
            textarea,
            "insert title",
            `${returnText} `,
            "",
            true,
        )
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
    reject: true,
    prevent: true,
}