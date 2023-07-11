import {InsertUnit} from "../../../declare/EditorUtil";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const math: InsertUnit = {
    label: "数学算式",
    key: "$",
    ctrl: true,
    insert: (args, textarea, key) => {
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