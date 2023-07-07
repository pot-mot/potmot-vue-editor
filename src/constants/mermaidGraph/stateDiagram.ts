import {Option} from "../../declare/EditorUtil";

export const stateDiagram: Option = {
    key: "stateDiagram-v2",
    label: "状态图",
    value: `stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]`
}