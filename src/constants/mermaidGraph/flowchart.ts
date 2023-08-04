import {Option} from "../../declare/InsertUtil";

export const flowchart: Option = {
    key: "flowchart",
    label: "流程图",
    value: `---
title Node
---
flowchart LR
    markdown["\`This **is** _Markdown_\`"]
    newLines["\`Line1
    Line 2
    Line 3\`"]
    markdown --> newLines`
}