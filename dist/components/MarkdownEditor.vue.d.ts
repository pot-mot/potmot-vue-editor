import { PropType } from "vue";
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
    defaultInsertUnits: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    extraInsertUnits: {
        type: PropType<InsertUnit[]>;
        required: false;
        default: never[];
    };
}, {
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
        defaultInsertUnits: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        extraInsertUnits: {
            type: PropType<InsertUnit[]>;
            required: false;
            default: never[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    textarea: import("vue").Ref<any>;
    previewCard: import("vue").Ref<any>;
    floatPreviewCard: import("vue").Ref<any>;
    insertUnits: InsertUnit[];
    argsMap: Map<string, import("vue").Ref<any>>;
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
    containerClass: import("vue").ComputedRef<"" | "edit-preview" | "edit">;
    insertIntoTextarea: (insertUnit: InsertUnit) => void;
    handleScroll: (key: string, from: HTMLElement, to: HTMLElement) => void;
    setHandleScrollFlag: (flag: string) => void;
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
    textareaCountLine: import("vue").Ref<any>;
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
    defaultInsertUnits: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    extraInsertUnits: {
        type: PropType<InsertUnit[]>;
        required: false;
        default: never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    placeholder: string;
    startWithFullScreen: boolean;
    defaultInsertUnits: boolean;
    extraInsertUnits: InsertUnit[];
}>;
export default _sfc_main;
