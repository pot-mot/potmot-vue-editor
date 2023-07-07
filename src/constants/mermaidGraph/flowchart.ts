import {Option} from "../../declare/EditorUtil";

export const flowchart: Option = {
    key: "flowchart",
    label: "流程图",
    value: `%%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
    markdown["\`This **is** _Markdown_\`"]
    newLines["\`Line1
    Line 2
    Line 3\`"]
    markdown --> newLines`
}