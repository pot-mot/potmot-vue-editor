import { ComputedRef, PropType, Ref } from "vue";
import type { ShortcutKey, InsertUnit } from "../declare/InsertUtil";
import { ScrollData } from "../utils/common/document";
import { EditTool, EditToolConfig } from "../declare/EditTool";
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
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    height: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    style: {
        type: PropType<Partial<CSSStyleDeclaration>>;
        required: false;
    };
    class: {
        type: PropType<string[]>;
        required: false;
        default: never[];
    };
    toolbar: {
        type: PropType<EditToolConfig[]>;
        required: false;
    };
    shortcutKeys: {
        type: PropType<ShortcutKey[]>;
        required: false;
        default: never[];
    };
    insertUnits: {
        type: PropType<InsertUnit[]>;
        required: false;
        default: InsertUnit[];
    };
    startWithFullScreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    editor: Ref<HTMLDivElement | null | undefined>;
    container: Ref<HTMLDivElement | null | undefined>;
    textarea: Ref<HTMLTextAreaElement | null | undefined>;
    previewCard: Ref<HTMLDivElement | null | undefined>;
    topToolBar: Ref<any>;
    bottomToolBar: Ref<any>;
    replaceFromBox: Ref<HTMLTextAreaElement | null | undefined>;
    replaceToBox: Ref<HTMLTextAreaElement | null | undefined>;
    text: Ref<string>;
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
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        width: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        height: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        style: {
            type: PropType<Partial<CSSStyleDeclaration>>;
            required: false;
        };
        class: {
            type: PropType<string[]>;
            required: false;
            default: never[];
        };
        toolbar: {
            type: PropType<EditToolConfig[]>;
            required: false;
        };
        shortcutKeys: {
            type: PropType<ShortcutKey[]>;
            required: false;
            default: never[];
        };
        insertUnits: {
            type: PropType<InsertUnit[]>;
            required: false;
            default: InsertUnit[];
        };
        startWithFullScreen: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>>;
    isFullScreen: Ref<boolean>;
    isReplace: Ref<boolean>;
    isPreview: Ref<boolean>;
    isOutline: Ref<boolean>;
    isWrap: Ref<boolean>;
    isSyncScroll: Ref<boolean>;
    isEdit: ComputedRef<boolean>;
    mobileFullHeight: Ref<number>;
    preferredDark: Ref<boolean>;
    colorTheme: ComputedRef<"dark" | "light">;
    toolList: {
        name: string;
        label: string;
        position: string;
        active?: boolean | undefined;
        disable?: boolean | undefined;
        show?: boolean | undefined;
        icon?: string | undefined;
        svg?: string | undefined;
        contextMenu?: {
            position: {
                top?: string | undefined;
                left?: string | undefined;
                right?: string | undefined;
                bottom?: string | undefined;
            };
            visible: boolean;
        } | undefined;
        onClick?: ((self: EditTool) => any) | undefined;
    }[];
    contextMenuPositionTop: string;
    contextMenuPositionLeft: string;
    contextMenuPositionBottom: string;
    contextMenuPositionRight: string;
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
    getPosition: (tool: EditTool) => Position;
    clickTool: (tool: EditTool) => void;
    oldScrollData: ScrollData;
    lastScroll: Ref<HTMLElement | null | undefined>;
    setSyncScrollTop: () => void;
    containerClass: ComputedRef<"preview" | "edit-preview" | "edit">;
    argsMap: Ref<Map<string, Ref<any>>>;
    changeInputArg: (name: string, e: InputEvent) => void;
    changeSelectArg: (name: string, e: Event) => void;
    insertIntoTextarea: (insertUnit: InsertUnit, e?: KeyboardEvent) => void;
    changeHook: (history: EditorHistory) => void;
    smoothChangeHook: (history: EditorHistory) => void;
    shortcutKeys: {
        trigger: {
            key?: string | string[] | undefined;
            ctrl?: boolean | undefined;
            alt?: boolean | undefined;
            shift?: boolean | undefined;
        };
        onEmit: Function;
        prevent?: boolean | undefined;
        reject?: boolean | undefined;
    }[];
    undoStack: Ref<EditorHistory[]>;
    redoStack: Ref<EditorHistory[]>;
    redo: () => void;
    undo: () => void;
    push: (input?: Partial<EditorHistory> | undefined, change?: Function | undefined) => void;
    top: () => EditorHistory;
    historyType: Ref<string>;
    setHistoryType: (newVal: string) => void;
    pushDefault: () => EditorHistory;
    searchIndex: Ref<number>;
    searchList: Ref<number[]>;
    searchByIndex: () => void;
    searchPrevious: () => void;
    searchNext: () => void;
    replaceFrom: Ref<string>;
    replaceTo: Ref<string>;
    replaceAll: () => void;
    replaceOne: () => void;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    MarkdownOutline: import("vue").DefineComponent<{
        target: {
            type: {
                new (): HTMLElement;
                prototype: HTMLElement;
            };
            required: false;
            default: HTMLElement;
        };
        policy: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        parse: {
            type: PropType<(head: HTMLHeadingElement) => OutlineItem>;
            required: false;
            default: (header: HTMLHeadingElement) => OutlineItem | null;
        };
        step: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        suspend: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }, {
        handleScroll: (scroller: HTMLElement, target: HTMLElement) => void;
        getCurrent: (container: HTMLElement, items: (HTMLElement | undefined)[], judge?: (container: HTMLElement, item: HTMLElement) => boolean) => number | undefined;
        items: Ref<{
            level: number;
            id: string;
            text: string;
            current: boolean;
        }[]>;
        emits: (event: "clickItem", ...args: any[]) => void;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            target: {
                type: {
                    new (): HTMLElement;
                    prototype: HTMLElement;
                };
                required: false;
                default: HTMLElement;
            };
            policy: {
                type: StringConstructor;
                required: false;
                default: string;
            };
            parse: {
                type: PropType<(head: HTMLHeadingElement) => OutlineItem>;
                required: false;
                default: (header: HTMLHeadingElement) => OutlineItem | null;
            };
            step: {
                type: NumberConstructor;
                required: false;
                default: number;
            };
            suspend: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>> & {
            onClickItem?: ((...args: any[]) => any) | undefined;
        }>>;
        maxLevel: ComputedRef<number>;
        oldHtml: string;
        setItemFromHtml: () => void;
        compare: (oldItems: OutlineItem[], newItems: OutlineItem[]) => boolean;
        oldScrollHeight: number;
        oldScrollTop: number;
        markCurrent: () => void;
        jumpTo: (clickedItem: OutlineItem) => void;
        interval: number;
        act: import("lodash").DebouncedFunc<() => void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickItem"[], "clickItem", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        target: {
            type: {
                new (): HTMLElement;
                prototype: HTMLElement;
            };
            required: false;
            default: HTMLElement;
        };
        policy: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        parse: {
            type: PropType<(head: HTMLHeadingElement) => OutlineItem>;
            required: false;
            default: (header: HTMLHeadingElement) => OutlineItem | null;
        };
        step: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        suspend: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & {
        onClickItem?: ((...args: any[]) => any) | undefined;
    }, {
        suspend: boolean;
        target: HTMLElement;
        policy: string;
        parse: (head: HTMLHeadingElement) => OutlineItem;
        step: number;
    }>;
    MarkdownPreview: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        suspend: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            markdownText: {
                type: StringConstructor;
                required: true;
            };
            suspend: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>> & {}>>;
        node: Ref<HTMLElement | null | undefined>;
        renderResult: Ref<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]>;
        getSvgParent: (element: HTMLElement) => SVGSVGElement | null;
        imageView: (element: Element) => void;
        onClick: (e: MouseEvent) => void;
        VNodeComponent: import("vue").DefineComponent<{
            content: {
                type: PropType<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                required: true;
            };
        }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            content: {
                type: PropType<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]>;
                required: true;
            };
        }>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        suspend: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>>, {
        suspend: boolean;
    }>;
    ToolBar: import("vue").DefineComponent<{
        tools: {
            type: PropType<EditTool[]>;
            required: true;
        };
        positions: {
            type: PropType<string[]>;
            required: false;
            default: never[];
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tools: {
                type: PropType<EditTool[]>;
                required: true;
            };
            positions: {
                type: PropType<string[]>;
                required: false;
                default: never[];
            };
        }>> & {
            onClickTool?: ((...args: any[]) => any) | undefined;
        }>>;
        emits: (event: "clickTool", ...args: any[]) => void;
        toolMap: ComputedRef<Map<any, EditTool[]>>;
        menuTools: ComputedRef<EditTool[]>;
        clickTool: (tool: EditTool) => void;
        toolBarContainer: Ref<any>;
        ContextMenu: import("vue").DefineComponent<{
            tool: {
                type: PropType<EditTool>;
                required: true;
            };
            dragRange: {
                type: PropType<PositionRange>;
                required: false;
            };
            resetPosition: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "cancel"[], "cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            tool: {
                type: PropType<EditTool>;
                required: true;
            };
            dragRange: {
                type: PropType<PositionRange>;
                required: false;
            };
            resetPosition: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>> & {
            onCancel?: ((...args: any[]) => any) | undefined;
        }, {
            resetPosition: boolean;
        }>;
        closeContextMenu: (tool: EditTool) => void;
        ToolBarItem: import("vue").DefineComponent<{
            tool: {
                type: PropType<EditTool>;
                required: true;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickTool"[], "clickTool", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            tool: {
                type: PropType<EditTool>;
                required: true;
            };
        }>> & {
            onClickTool?: ((...args: any[]) => any) | undefined;
        }, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickTool"[], "clickTool", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tools: {
            type: PropType<EditTool[]>;
            required: true;
        };
        positions: {
            type: PropType<string[]>;
            required: false;
            default: never[];
        };
    }>> & {
        onClickTool?: ((...args: any[]) => any) | undefined;
    }, {
        positions: string[];
    }>;
    vAdapt: {
        mounted(el: HTMLElement, binding: {
            value: {
                min: number;
                max: number;
            };
        }): void;
    };
    vInputExtension: {
        mounted(el: HTMLElement): void;
    };
    vKeepBottom: {
        mounted(el: HTMLElement, binding: {
            value: any;
        }): void;
    };
    isMobile: ComputedRef<boolean>;
    formatTriggers: (insertUnit: InsertUnit) => string[];
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
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    height: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    style: {
        type: PropType<Partial<CSSStyleDeclaration>>;
        required: false;
    };
    class: {
        type: PropType<string[]>;
        required: false;
        default: never[];
    };
    toolbar: {
        type: PropType<EditToolConfig[]>;
        required: false;
    };
    shortcutKeys: {
        type: PropType<ShortcutKey[]>;
        required: false;
        default: never[];
    };
    insertUnits: {
        type: PropType<InsertUnit[]>;
        required: false;
        default: InsertUnit[];
    };
    startWithFullScreen: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    height: string;
    width: string;
    placeholder: string;
    disabled: boolean;
    class: string[];
    shortcutKeys: ShortcutKey[];
    insertUnits: InsertUnit[];
    startWithFullScreen: boolean;
}>;
export default _sfc_main;
