import {Option} from "../../declare/InsertUtil";

export const gitGraph: Option = {
    key: "gitGraph",
    label: "git 图",
    value: `gitGraph
   commit
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
   commit`
}