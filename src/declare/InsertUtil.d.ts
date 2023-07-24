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

interface KeyEventConfig {
    // 是否取消默认事件
    prevent?: boolean
    // 是否取消后续事件
    reject?: boolean
}

interface ShortcutKey extends KeyEventConfig {
    trigger: KeyEvent
    onEmit: Function
}

interface InsertUnit extends KeyEventConfig {
    triggers: KeyEvent[],
    label: string
    // 插入事件，参数有参数map，textarea 当前编辑框元素, event 当前触发事件
    insert: (args: Map<string, Ref>, textarea: HTMLTextAreaElement, event?: KeyboardEvent) => EditorHistory
    // 参数列表
    arguments: InsertArgument<any>[]
}