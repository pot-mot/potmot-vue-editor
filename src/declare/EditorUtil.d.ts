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

interface EditorKeyEvent {
    key?: string | string[]
    ctrl?: boolean
    alt?: boolean
    shift?: boolean
    // 是否取消默认事件
    prevent?: boolean
    // 是否取消后续事件
    reject?: boolean
}

interface EditorShortcutKey extends EditorKeyEvent {
    method: Function;
}

interface EditTool extends EditorShortcutKey{
    name: string
    label: string
    icon: string
    active: boolean
    contextMenu: boolean
    show?: () => boolean
    position: "left" | "right"
}

interface InsertUnit extends EditorKeyEvent{
    label: string
    // 插入事件，参数有参数map，textarea 当前编辑框元素, key 当前触发按键
    insert: (args: Map<string, Ref>, textarea: HTMLTextAreaElement, key: string | undefined) => EditorHistory
    arguments: InsertArgument<any>[]
}