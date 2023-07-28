import {InsertUnit, OptionInsertArgument} from "../../../declare/InsertUtil";
import {prismLanguageList} from "../../../constants/prismLanguageList";
import {ref} from "vue";
import {formatInsert} from "../../../utils/editor/insertUtils";

export const code: InsertUnit = {
    triggers: [
        {
            key: ['`', '~'],
            ctrl: true,
        }
    ],
    label: "代码块",
    insert: (args, textarea, e) => {
        const language = args.get("codeLanguage")!.value
        const key = e?.key
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
        );
    },
    arguments: [
        <OptionInsertArgument>{
            name: "codeLanguage",
            label: "语言",
            options: prismLanguageList,
            getRef: () => {
                let language = ""
                return ref(language);
            }
        }
    ],
    reject: true,
    prevent: true,
}