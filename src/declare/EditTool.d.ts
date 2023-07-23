interface EditTool {
    name: string
    label: string
    icon?: string
    active: boolean
    contextMenu: boolean
    show?: () => boolean
    position: "LT" | "RT" | "LB" | "RB"
    method: Function
}