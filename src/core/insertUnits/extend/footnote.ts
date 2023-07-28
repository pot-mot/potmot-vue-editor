import {InsertUnit, OptionInsertArgument} from "../../../declare/InsertUtil";
import {formatInsert} from "../../../utils/editor/insertUtils";
import {ref} from "vue";

const footnoteTypeOptions = ["行内", "行外"]

export const footnote: InsertUnit = {
    triggers: [
        {
            key: "^",
            ctrl: true,
        }
    ],
    label: "脚标",
    insert: (args, textarea) => {
        const type = args.get('footnoteType')!.value
        return formatInsert(
            textarea,
            "code",
            (startPart, midPart, endPart) => {
                if (type == footnoteTypeOptions[0]) {
                    if (midPart.length > 0) {
                        return {
                            content: [startPart, '^[', midPart, ']', endPart],
                            start: startPart.length + 2 + midPart.length + 1,
                        }
                    } else {
                        return {
                            content: [startPart, '^[]', endPart],
                            start: startPart.length + 2,
                        }
                    }
                }
                const ref = `[^${midPart}]`
                const tail = `[^${midPart}]: `
                if (midPart.length > 0) {
                    return {
                        content: [startPart, ref, '\n', tail, '\n', endPart],
                        start: startPart.length + ref.length + 1 + tail.length,
                    }
                } else {
                    return {
                        content: [startPart, ref, '\n', tail, '\n', endPart],
                        start: startPart.length + 2,
                    }
                }
            }
        )
    },
    arguments: [
        <OptionInsertArgument>{
            name: "footnoteType",
            label: "类型",
            getRef: () => {
                let footnoteType = "行内";
                return ref(footnoteType);
            },
            options: footnoteTypeOptions
        }
    ],
    reject: true,
    prevent: true,
}