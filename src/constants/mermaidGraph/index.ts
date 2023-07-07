import {C4Context} from "./C4Context";
import {classDiagram} from "./classDiagram";
import {erDiagram} from "./erDiagram";
import {flowchart} from "./flowchart";
import {gantt} from "./gantt";
import {gitGraph} from "./gitGraph";
import {journey} from "./journey";
import {mindmap} from "./mindmap";
import {pie} from "./pie";
import {quadrantChart} from "./quadrantChart";
import {requirementDiagram} from "./requirementDiagram";
import {sequenceDiagram} from "./sequenceDiagram";
import {stateDiagram} from "./stateDiagram";
import {timeline} from "./timeline";
import {Option} from "../../declare/EditorUtil";
import {toMap} from "../../utils/common/toMap";

export const mermaidGraphList = [
    flowchart,
    classDiagram,
    erDiagram,
    gantt,
    pie,
    timeline,
    gitGraph,
    journey,
    mindmap,
    quadrantChart,
    requirementDiagram,
    sequenceDiagram,
    stateDiagram,
    C4Context,
    // 目前插件暂不支持
    // zenuml,
]

export const mermaidTypeMap: Map<string, Option> = toMap(mermaidGraphList, "label")

export const mermaidTypeNameList = Array.from(mermaidTypeMap.keys())