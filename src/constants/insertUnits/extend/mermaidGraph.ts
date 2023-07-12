import {mermaidTypeMap, mermaidTypeNameList} from "../../mermaidGraph";
import {InsertUnit, OptionInsertArgument} from "../../../declare/EditorUtil";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const mermaidGraph: InsertUnit = {
    triggers: [
        {
            key: ['`', '~'],
            alt: true,
        }
    ],
    label: "mermaid图",
    insert: (args, textarea, key) => {
        let mermaidTypeName = args.get("mermaidTypeName")!.value
        let example = args.get("mermaidExample")!.value
        let mermaidType = mermaidTypeMap.get(mermaidTypeName)!
        const fence = (key == undefined || key == '`') ? '```' : '~~~'

        return simpleInsert(
            textarea,
            "insert mermaid",
            `${fence}mermaid\n${example == '生成' ? mermaidType.value : mermaidType.key}\n`,
            "\n" + fence

        )
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