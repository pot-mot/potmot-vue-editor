import {InputInsertArgument, InsertUnit, OptionInsertArgument} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtils";
import {quoteType} from "../../plugins/container/quote";

export const container: InsertUnit = {
    triggers: [
        {
            key: ":",
            ctrl: true,
        }
    ],
    label: "块级容器",
    insert: (args, textarea) => {
        const title = args.get("containerTitle")!.value;
        const level = parseInt(args.get("containerLevel")!.value);
        const type = args.get("containerType")!.value;

        const fence = ':'.repeat(level + 2);

        return simpleInsert(
            textarea,
            "detail",
            `${fence} ${type} ${title.trim()}\n`,
            `\n${fence}`
        );
    },
    arguments: [
        <InputInsertArgument<string>>{
            name: "containerTitle",
            label: "标题",
            type: "string",
            getRef: () => {
                let summary = "";
                return ref(summary);
            },
            styleWidth: "8em",
        },
        <OptionInsertArgument>{
            name: "containerType",
            label: "类型",
            getRef: () => {
                let detailIsOpen = "detail";
                return ref(detailIsOpen);
            },
            options: ["detail", "detail open", ...quoteType]
        },
        <InputInsertArgument<string>>{
            name: "containerLevel",
            label: "层级",
            type: "number",
            getRef: () => {
                let level = 1;
                return ref(level);
            },
            styleWidth: "3em",
        },
    ],
    reject: true,
    prevent: true,
}