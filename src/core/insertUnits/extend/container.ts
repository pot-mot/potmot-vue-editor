import {InputInsertArgument, InsertUnit, OptionInsertArgument} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtils";
import {quoteType} from "../../plugins/container/quote";
import {detailType} from "../../plugins/container/detail";

export const container: InsertUnit = {
    triggers: [
        {
            key: ":",
            ctrl: true,
        }
    ],
    label: "块级容器",
    insert: (args, textarea) => {
        const level = args.get("containerNest")!.value;
        const fence = level == 'true' ? ':'.repeat(4) : ':'.repeat(3);

        let type = args.get("containerType")!.value.trim();
        let title = args.get("containerTitle")!.value.trim();

        if (type.length == 0) {
            return simpleInsert(
                textarea,
                "empty container",
                `${fence}`,
                `\n\n${fence}`
            );
        }

        title = title.length > 0 ? ' ' + title : '';

        return simpleInsert(
            textarea,
            type,
            `${fence}${type}${title}\n`,
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
                let detailIsOpen = "";
                return ref(detailIsOpen);
            },
            options: [...detailType, ...quoteType]
        },
        <OptionInsertArgument>{
            name: "containerNest",
            label: "嵌套",
            styleWidth: "3em",
            getRef: () => {
                let detailIsOpen = "false";
                return ref(detailIsOpen);
            },
            options: ["true", "false"]
        },
    ],
    reject: true,
    prevent: true,
}