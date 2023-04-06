import {Ref} from "vue";

declare class InsertText {
    before: string;
    after: string;
}

declare class InsertArgument<T> {
    name: string;
    label: string;
    getRef: () => Ref<T>;
}

declare class InputInsertArgument<T> extends InsertArgument<any> {
    type: string;
    inputLength?: number;
    styleWidth?: string;
}

declare class OptionInsertArgument extends InsertArgument<string> {
    options: string[];
}

declare class EditorKeyEvent {
    key?: string | string[];
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    // 是否取消默认事件
    prevent?: boolean;
    // 是否取消后续事件
    reject?: boolean;
}

declare class EditorShortcutKey extends EditorKeyEvent {
    method: Function;
}


declare class InsertUnit extends EditorKeyEvent{
    label: string;
    // 插入事件，参数有参数map，text 当前编辑文本和 textarea
    insert: (args: Map<string, Ref>, text: string, textarea: HTMLTextAreaElement) => InsertText;
    arguments: InsertArgument<any>[];
    replace?: boolean;
    keepSelect?: boolean;
}