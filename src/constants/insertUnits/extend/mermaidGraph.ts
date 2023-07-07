import {mermaidTypeMap, mermaidTypeNameList} from "../../mermaidGraph";
import {InsertUnit, OptionInsertArgument} from "../../../declare/EditorUtil";
import {ref} from "vue";

export const mermaidGraph: InsertUnit = {
    key: ['`', '~'],
    alt: true,
    label: "mermaid图",
    insert: (args) => {
        let mermaidTypeName = args.get("mermaidTypeName")!.value
        let example = args.get("mermaidExample")!.value
        let mermaidType = mermaidTypeMap.get(mermaidTypeName)!
        return {
            before: "```mermaid\n" + (example == '生成' ? mermaidType.value : mermaidType.key) + "\n",
            after: "\n```"
        };
    },
    arguments: [
        <OptionInsertArgument>{
            name: "mermaidTypeName",
            label: "图类型",
            options: mermaidTypeNameList,
            getRef: () => {
                let mermaidTypeName: string = mermaidTypeNameList[0];
                return ref(mermaidTypeName);
            }
        },
        <OptionInsertArgument>{
            name: "mermaidExample",
            label: "示例",
            options: ['', '生成'],
            getRef: () => {
                let mermaidType: string = '';
                return ref(mermaidType);
            }
        }
    ]
}