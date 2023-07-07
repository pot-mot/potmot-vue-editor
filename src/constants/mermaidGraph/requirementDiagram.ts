import {Option} from "../../declare/EditorUtil";

export const requirementDiagram: Option = {
    key: "requirementDiagram",
    label: "需求图",
    value: `requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifyMethod: test
    }

    element test_entity {
    type: simulation
    }

    test_entity - satisfies -> test_req`
}