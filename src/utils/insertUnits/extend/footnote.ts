import {InsertUnit} from "../../../declare/InsertUtil";
import {simpleInsert} from "../../editor/insertUtils";

export const footnote: InsertUnit = {
    triggers: [
        {
            key: "^",
            ctrl: true,
        }
    ],
    label: "脚标",
    insert: (args, textarea) => {
        return simpleInsert(
            textarea,
            "footnote",
            "[^",
            "]"
        )
    },
    arguments: [],
    reject: true,
    prevent: true,
}