import {InsertUnit} from "../../../declare/EditorUtil";

export const hardEnter: InsertUnit = {
    key: "Enter",
    ctrl: true,
    label: "换行",
    insert: () => {
        return {before: "<br>", after: ""}
    },
    arguments: [],
    reject: true,
    prevent: true,
}