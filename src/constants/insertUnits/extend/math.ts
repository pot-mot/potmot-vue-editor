import {InsertUnit} from "../../../declare/EditorUtil";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const math: InsertUnit = {
    triggers: [
        {
            key: "$",
            ctrl: true,
        }
    ],
    label: "数学算式",
    insert: (args, textarea) => {
        return simpleInsert(
            textarea,
            "insert math block",
            "$$\n",
            "\n$$"
        )
    },
    arguments: [],
    reject: true,
    prevent: true,
}