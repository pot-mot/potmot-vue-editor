import {InsertUnit, OptionInsertArgument} from "../../../declare/EditorUtil";
import {prismLanguageList} from "../../prismLanguageList";
import {ref} from "vue";
import {simpleInsert} from "../../../utils/editor/insertUtil";

export const code: InsertUnit = {
    key: ['`', '~'],
    ctrl: true,
    label: "代码块",
    insert: (args, textarea, key): EditorHistory => {
        const language = args.get("codeLanguage")!.value
        const fence = (key == undefined || key == '`') ? '```' : '~~~'

        return simpleInsert(
            textarea,
            "insert code",
            fence + language + '\n',
            '\n' + fence
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