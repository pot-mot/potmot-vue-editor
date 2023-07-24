import {Ref} from "vue";

/**
 * name 工具的名称
 * label 工具的标签
 * active 工具是否处于生效状态
 * disable 工具是否处于禁用状态
 * icon 工具的图标
 * svg 工具的 icon 的 svg，优先级高于 icon
 * position 工具的位置，默认类型为 "LT" | "RT" | "LB" | "RB"，表示左上、右上、左下或右下
 * contextMenu 工具的上下文菜单
 * show 工具的显示函数，类型为可选的无参函数，返回值为 boolean，用于控制工具的显示或隐藏
 * onClick 工具的点击事件，接受一个参数 self，类型为 EditTool，不配置时默认切换 active
 */
interface EditTool {
    name: string
    label: string
    position: string

    active?: boolean | Ref<boolean>
    disable?: boolean | Ref<boolean>
    show?: boolean | Ref<boolean>

    icon?: string
    svg?: string
    contextMenu?: ToolContextMenu
    onClick?: (self: EditTool) => any
}

interface ToolContextMenu {
    position: Position
    visible: boolean
}

