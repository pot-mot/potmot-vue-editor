declare const _default: {
    install: (Vue: any) => void;
    MarkdownCard: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        isCodeFold: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        codeFoldThreshold: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            markdownText: {
                type: StringConstructor;
                required: true;
            };
            codeTheme: {
                type: StringConstructor;
                required: false;
                default: string;
            };
            isCodeFold: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
            codeFoldThreshold: {
                type: NumberConstructor;
                required: false;
                default: number;
            };
        }>> & {}>>;
        markdownCard: import("vue").Ref<any>;
        copy: (text: string) => void;
        format: (markdownString: string) => string;
        formatMarkdown: (markdownString: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string) => string;
        setCodeLineWithStyle: (code: string, language: string) => string;
        foldCode: (e: MouseEvent) => void;
        copyCode: (e: MouseEvent) => void;
        setButtonEvent: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        isCodeFold: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        codeFoldThreshold: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
    }>>, {
        codeTheme: string;
        isCodeFold: boolean;
        codeFoldThreshold: number;
    }>;
    MarkdownEditor: import("vue").DefineComponent<{
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
    }, {
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
        InsertTool: {
            new (name: string, key: string, label: string, method: () => {
                before: string;
                after: string;
            }, replace?: boolean, keepSelect?: boolean): {
                name: string;
                key: string;
                label: string;
                method: () => {
                    before: string;
                    after: string;
                };
                replace: boolean;
                keepSelect: boolean;
            };
        };
        InsertText: {
            new (before?: string, after?: string): {
                before: string;
                after: string;
            };
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
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        showCard: import("vue").Ref<any>;
        floatShowCard: import("vue").Ref<any>;
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
        insertTextParams: {
            tableWidth: number;
            tableHeight: number;
            titleLevel: number;
            listLength: number;
            listStart: number;
            codeLanguage: string;
            warningColor: string;
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
        insertTextList: {
            name: string;
            key: string;
            label: string;
            method: () => {
                before: string;
                after: string;
            };
            replace: boolean;
            keepSelect: boolean;
        }[];
        insertIntoString: (inserter: string, target: string, start: number, end?: number) => string;
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
        insertToText: (editItem: {
            name: string;
            key: string;
            label: string;
            method: () => {
                before: string;
                after: string;
            };
            replace: boolean;
            keepSelect: boolean;
        }) => void;
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
        limit: (input: number, min: number, max: number) => number;
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
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
    }>;
    MarkdownOutline: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>;
};
export default _default;