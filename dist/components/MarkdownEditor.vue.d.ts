import { PropType, Ref } from "vue";
import { InsertUnit } from "../declare/insertUnit";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    startWithFullScreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    insertUnits: {
        type: PropType<InsertUnit[]>;
        required: false;
        default: InsertUnit[];
    };
}, {
    data: {
        handleScrollFlag: string;
        beforeFullScreenTop: number;
        text: string;
        pushFlag: string;
        history: {
            start: number;
            end: number;
            text: string;
            scrollTop: number;
        }[];
        stackTop: number;
        replaceFrom: string;
        replaceTo: string;
    };
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: StringConstructor;
            required: true;
        };
        placeholder: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        startWithFullScreen: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        insertUnits: {
            type: PropType<InsertUnit[]>;
            required: false;
            default: InsertUnit[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    textarea: Ref<any>;
    previewCard: Ref<any>;
    argsMap: Ref<Map<string, Ref<any>>>;
    changeInputArg: (name: string, e: InputEvent) => void;
    changeSelectArg: (name: string, e: Event) => void;
    EditTool: {
        new (name: string, label: string, icon: string, method?: Function): {
            name: string;
            active: boolean;
            label: string;
            icon: string;
            method: Function;
            changeActive(): void;
        };
    };
    EditorHistory: {
        new (start: number, end: number, text: string, scrollTop: number): {
            start: number;
            end: number;
            text: string;
            scrollTop: number;
        };
    };
    statisticalData: {
        selectLength: number;
        startPlace: {
            x: number;
            y: number;
        };
        endPlace: {
            x: number;
            y: number;
        };
    };
    setEditData: () => void;
    editToolList: {
        name: string;
        active: boolean;
        label: string;
        icon: string;
        method: Function;
        changeActive: () => void;
    }[];
    getEditToolActive: (key: string) => boolean;
    setEditToolActive: (key: string, newValue: boolean) => void;
    isFullScreen: import("vue").WritableComputedRef<boolean>;
    isReplace: import("vue").WritableComputedRef<boolean>;
    isPreview: import("vue").WritableComputedRef<boolean>;
    containerClass: import("vue").ComputedRef<"" | "edit" | "edit-preview">;
    insertIntoTextarea: (insertUnit: InsertUnit) => void;
    handleScroll: (from: HTMLElement, to: HTMLElement) => void;
    scrollKey: Ref<string>;
    push: (start?: number, end?: number) => void;
    replaceTop: (start?: number, end?: number) => void;
    clearHistory: () => void;
    pop: () => void;
    redo: () => void;
    onKeyDown: (e: KeyboardEvent) => void;
    onKeyUp: (e: KeyboardEvent) => void;
    onMouseDown: () => void;
    changeFlag: (flag: string) => void;
    insertAroundText: (insertText: {
        before: string;
        after: string;
    }) => void;
    batchEnter: () => void;
    batchKeydown: (e: KeyboardEvent, insertString: string) => void;
    textareaCountLine: Ref<any>;
    searchData: {
        index: number;
        indexes: number[];
    };
    setSearchData: () => void;
    jumpTo: (target: number) => void;
    searchCurrent: () => void;
    searchPrevious: () => void;
    searchNext: () => void;
    replaceOne: () => void;
    replaceAll: () => void;
    getPlace: (start: number, text: string) => {
        x: number;
        y: number;
    };
    isMobile: () => boolean;
    vDrag: {
        mounted(el: HTMLDivElement): void;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    startWithFullScreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    insertUnits: {
        type: PropType<InsertUnit[]>;
        required: false;
        default: InsertUnit[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    placeholder: string;
    startWithFullScreen: boolean;
    insertUnits: InsertUnit[];
}>;
export default _sfc_main;
