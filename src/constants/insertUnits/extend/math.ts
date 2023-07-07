import {InsertUnit} from "../../../declare/EditorUtil";

export const math: InsertUnit = {
    label: "数学算式",
    key: "$",
    ctrl: true,
    insert: () => {
        return {before: "$$\n", after: "\n$$"};
    },
    arguments: [],
    reject: true,
    prevent: true,
}