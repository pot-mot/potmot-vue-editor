import {InputInsertArgument, InsertUnit, OptionInsertArgument} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {simpleInsert} from "../../editor/insertUtils";

export const detail: InsertUnit = {
    triggers: [
        {
            key: ":",
            ctrl: true,
        }
    ],
    label: "折叠块",
    insert: (args, textarea) => {
        const summary = args.get("detailIsSummary")!.value
        const isOpen = args.get("detailIsOpen")!.value

        return simpleInsert(
            textarea,
            "detail",
            `:::${isOpen == '展开' ? '+' : ''}${summary}\n`,
            "\n:::"
        )
    },
    arguments: [
        <InputInsertArgument<string>>{
            name: "detailIsSummary",
            label: "标识",
            type: "string",
            getRef: () => {
                let summary = "";
                return ref(summary);
            },
            styleWidth: "6em",
        },
        <OptionInsertArgument>{
            name: "detailIsOpen",
            label: "默认状态",
            getRef: () => {
                let detailIsOpen = "收起";
                return ref(detailIsOpen);
            },
            options: ["收起", "展开"]
        }
    ],
    reject: true,
    prevent: true,
}