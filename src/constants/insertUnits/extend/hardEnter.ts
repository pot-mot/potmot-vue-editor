import {InsertUnit} from "../../../declare/EditorUtil";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const hardEnter: InsertUnit = {
    key: "Enter",
    alt: true,
    label: "换行",
    insert: (args, textarea) => {
        return simpleInsert(
            textarea,
            "insert enter",
            "<br>"
        )
    },
    arguments: [],
    reject: true,
    prevent: true,
}