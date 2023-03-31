import {Ref} from "vue";

interface InsertArgument<T> {
    name: string;
    label: string;
    getRef: () => Ref<T>;
}

interface InsertText {
    before: string;
    after: string;
}

interface InsertUnit {
    name: string;
    key: string;
    label: string;
    insert: (args: Map<string, Ref>) => InsertText;
    insertArguments: InsertArgument<any>[] | any[];
    replace: boolean;
    keepSelect: boolean;
}

interface InputInsertArgument<T> extends InsertArgument<any> {
    type: string;
}

interface OptionInsertArgument extends InsertArgument<string> {
    options: string[];
}