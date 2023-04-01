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
}

declare class OptionInsertArgument extends InsertArgument<string> {
    options: string[];
}

declare class InsertUnit {
    name: string;
    key: string;
    label: string;
    insert: (args: Map<string, Ref>) => InsertText;
    arguments: InsertArgument<any>[];
    replace: boolean;
    keepSelect: boolean;
}