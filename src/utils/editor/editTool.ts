import {EditTool} from "../../declare/EditTool";
import {isRef} from "vue";

export const exeToolClick = (tool: EditTool) => {
    if (tool.onClick == undefined) {
        let active: boolean
        if (tool.active != undefined && isRef(tool.active)) {
            tool.active.value = !tool.active.value
            active = tool.active.value
        } else {
            tool.active = !tool.active
            active = tool.active
        }

        if (tool.contextMenu != undefined) {
            tool.contextMenu.visible = active
        }
    } else {
        return tool.onClick(tool);
    }
}

export const closeContextMenu = (tool: EditTool) => {
    if (tool.active != undefined && isRef(tool.active)) {
        tool.active.value = false
    } else {
        tool.active = false
    }

    if (tool.contextMenu != undefined) {
        tool.contextMenu.visible = false
    }
}