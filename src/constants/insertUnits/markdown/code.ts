import {InsertUnit, OptionInsertArgument} from "../../../declare/EditorUtil";
import {prismLanguageList} from "../../prismLanguageList";
import {ref} from "vue";

export const code: InsertUnit = {
    key: ['`', '~'],
    ctrl: true,
    label: "代码块",
    insert: (args) => {
        let codeLanguage = args.get("codeLanguage")!.value
        return {before: "```" + codeLanguage + "\n", after: "\n```"};
    },
    arguments: [
        <OptionInsertArgument>{
            name: "codeLanguage",
            label: "语言",
            options: prismLanguageList,
            getRef: () => {
                let language = "";
                return ref(language);
            }
        }
    ],
    reject: true,
    prevent: true,
}