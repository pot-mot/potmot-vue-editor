import {Ref} from "vue";

interface InsertArgument<T> {
    name: string
    label: string
    getRef: () => Ref<T>
}

interface InputInsertArgument<T> extends InsertArgument<any> {
    type: string
    inputLength?: number
    styleWidth?: string
}

interface Option {
    key: string
    value: string
    label: string
}

interface OptionInsertArgument extends InsertArgument<string> {
    options: string[];
}

interface KeyEvent {
    key?: string | string[]
    ctrl?: boolean
    alt?: boolean
    shift?: boolean
}

interface KeyEventTriggers {
    triggers: KeyEvent[]
}

interface KeyEventConfig {
    // 是否取消默认事件
    prevent?: boolean
    // 是否取消后续事件
    reject?: boolean
}

interface HiddenConfig {
    // 是否从工具栏中取消隐藏
    hidden?: boolean
}

interface ShortcutKey extends KeyEventConfig {
    trigger: KeyEvent
    method: Function
}

interface EditTool extends KeyEventTriggers, HiddenConfig {
    name: string
    label: string
    icon: string
    active: boolean
    contextMenu: boolean
    show?: () => boolean
    position: "left" | "right"
    method: Function
}

interface InsertUnit extends KeyEventTriggers, HiddenConfig, KeyEventConfig {
    label: string
    // 插入事件，参数有参数map，textarea 当前编辑框元素, event 当前触发事件
    insert: (args: Map<string, Ref>, textarea: HTMLTextAreaElement, event?: KeyboardEvent) => EditorHistory
    // 参数列表
    arguments: InsertArgument<any>[]
}