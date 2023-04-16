import { PropType, Ref } from "vue";
import type { EditorShortcutKey, InsertUnit } from "../declare/EditorUtil";
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
    shortcutKeys: {
        type: PropType<EditorShortcutKey[]>;
        required: false;
        default: never[];
    };
    insertUnits: {
        type: PropType<InsertUnit[]>;
        required: false;
        default: InsertUnit[];
    };
    debug: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
        shortcutKeys: {
            type: PropType<EditorShortcutKey[]>;
            required: false;
            default: never[];
        };
        insertUnits: {
            type: PropType<InsertUnit[]>;
            required: false;
            default: InsertUnit[];
        };
        debug: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>>;
    textarea: Ref<any>;
    previewCard: Ref<any>;
    containerClass: import("vue").ComputedRef<"" | "edit-preview" | "edit">;
    data: {
        text: string;
    };
    emit: (event: "update:modelValue", ...args: any[]) => void;
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
    editEditInterval: number;
    editToolList: {
        name: string;
        label: string;
        icon: string;
        active: boolean;
        method: Function;
        key?: string | string[] | undefined;
        ctrl?: boolean | undefined;
        alt?: boolean | undefined;
        shift?: boolean | undefined;
        prevent?: boolean | undefined;
        reject?: boolean | undefined;
    }[];
    getEditToolActive: (key: string) => boolean;
    setEditToolActive: (key: string, newValue: boolean) => void;
    isFullScreen: import("vue").WritableComputedRef<boolean>;
    beforeFullScreenTop: number;
    isReplace: import("vue").WritableComputedRef<boolean>;
    isPreview: import("vue").WritableComputedRef<boolean>;
    argsMap: Ref<Map<string, Ref<any>>>;
    changeInputArg: (name: string, e: InputEvent) => void;
    changeSelectArg: (name: string, e: Event) => void;
    insertIntoTextarea: (insertUnit: InsertUnit) => void;
    scrollKey: Ref<string>;
    handleScroll: (from: HTMLElement, to: HTMLElement) => void;
    scrollKeyInterval: number;
    defaultHistory: () => {
        start: any;
        end: any;
        text: string;
        scrollTop: any;
    };
    historyData: {
        stack: {
            start: number;
            end: number;
            text: string;
            scrollTop: number;
        }[];
        stackTop: number;
    };
    redo: () => void;
    undo: () => void;
    push: (historyTop?: EditorHistory) => void;
    top: import("vue").WritableComputedRef<{
        start: number;
        end: number;
        text: string;
        scrollTop: number;
    }>;
    pushFlag: Ref<string>;
    flagPush: (flag: string) => void;
    shortcutKeys: {
        method: Function;
        key?: string | string[] | undefined;
        ctrl?: boolean | undefined;
        alt?: boolean | undefined;
        shift?: boolean | undefined;
        prevent?: boolean | undefined;
        reject?: boolean | undefined;
    }[];
    onKeyDown: (e: KeyboardEvent) => void;
    onMouseUp: () => void;
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
    replaceData: {
        replaceFrom: string;
        replaceTo: string;
    };
    setSearchData: () => void;
    jumpTo: (target: number) => void;
    textareaCountLineStyle: Ref<string>;
    textareaCountLineSubText: Ref<string>;
    searchCurrent: (jumpEnd?: Function) => void;
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
    shortcutKeys: {
        type: PropType<EditorShortcutKey[]>;
        required: false;
        default: never[];
    };
    insertUnits: {
        type: PropType<InsertUnit[]>;
        required: false;
        default: InsertUnit[];
    };
    debug: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    placeholder: string;
    startWithFullScreen: boolean;
    shortcutKeys: EditorShortcutKey[];
    insertUnits: InsertUnit[];
    debug: boolean;
}>;
export default _sfc_main;
