import {InsertUnit} from "../../../declare/EditorUtil";
import {simpleInsert} from "../../editor/insertUtils";

export const enter: InsertUnit = {
    triggers: [
        {
            key: "Enter",
            alt: true,
        }
    ],
    label: "换行",
    insert: (args, textarea) => {
        return simpleInsert(
            textarea,
            "enter",
            "<br>"
        )
    },
    arguments: [],
    reject: true,
    prevent: true,
}