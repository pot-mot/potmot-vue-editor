import {InsertUnit, OptionInsertArgument} from "../../../declare/EditorUtil";
import {prismLanguageList} from "../../prismLanguageList";
import {ref} from "vue";
import {formatInsert} from "../../../utils/editor/insertUtil";

export const code: InsertUnit = {
    triggers: [
        {
            key: ['`', '~'],
            ctrl: true,
        }
    ],
    label: "代码块",
    insert: (args, textarea, key): EditorHistory => {
        const language = args.get("codeLanguage")!.value
        const fence = (key == undefined || key == '`') ? '```' : '~~~'
        return formatInsert(
            textarea,
            "code",
            (startPart, midPart, endPart) => {
                return {
                    content: [startPart, fence, language, `\n${midPart}\n`, fence, endPart],
                    start: startPart.length + fence.length + language.length + midPart.length + 1,
                }
            },
        )
    },
    arguments: [
        <OptionInsertArgument>{
            name: "codeLanguage",
            label: "语言",
            options: prismLanguageList,
            getRef: () => {
                let language = ""
                return ref(language)
            }
        }
    ],
    reject: true,
    prevent: true,
}