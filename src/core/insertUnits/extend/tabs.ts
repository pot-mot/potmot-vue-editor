import {InputInsertArgument, InsertUnit} from "../../../declare/InsertUtil";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtils";
import {limit} from "../../../utils/common/math";

export const tabs: InsertUnit = {
    triggers: [
        {
            key: ":",
            alt: true,
        }
    ],
    label: "标签栏",
    insert: (args, textarea) => {
        let title = args.get("tabsTitle")!.value.trim();
        if (title.length > 0) title = ' ' + title;
        let length = limit(args.get("tabItemLength")!.value, 1, 99);

        const item = `
:::tab-item

:::`

        const result = `::::tabs${title}${item.repeat(length)}
::::`

        const offset = 8 + title.length + 1 + 12
        return simpleInsert(
            textarea,
            "tabs",
            result.slice(0, offset),
            result.slice(offset)
        );
    },
    arguments: [
        <InputInsertArgument<string>>{
            name: "tabsTitle",
            label: "标题",
            type: "string",
            getRef: () => {
                let tabTitle = "";
                return ref(tabTitle);
            },
            styleWidth: "8em",
        },
        <InputInsertArgument<number>>{
            name: "tabItemLength",
            label: "项数",
            type: "number",
            getRef: () => {
                let tabItemLength = 2;
                return ref(tabItemLength);
            },
            inputLength: 2,
            styleWidth: '2em',
        },
    ],
    reject: true,
    prevent: true,
}