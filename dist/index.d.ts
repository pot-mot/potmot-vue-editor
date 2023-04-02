declare const _default: {
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}> | undefined;
    push(...items: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]): number;
    concat(...items: ConcatArray<import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>>[]): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    concat(...items: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}> | ConcatArray<import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>>)[]): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    join(separator?: string | undefined): string;
    reverse(): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    shift(): import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}> | undefined;
    slice(start?: number | undefined, end?: number | undefined): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    sort(compareFn?: ((a: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, b: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>) => number) | undefined): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    splice(start: number, deleteCount?: number | undefined): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    splice(start: number, deleteCount: number, ...items: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    unshift(...items: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]): number;
    indexOf(searchElement: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, fromIndex?: number | undefined): number;
    every<S extends import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>>(predicate: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => U, thisArg?: any): U[];
    filter<S_1 extends import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>>(predicate: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => value is S_1, thisArg?: any): S_1[];
    filter(predicate: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => unknown, thisArg?: any): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    reduce(callbackfn: (previousValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentIndex: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>): import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
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
    reduce(callbackfn: (previousValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentIndex: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, initialValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>): import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
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
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentIndex: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentIndex: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>): import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
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
    reduceRight(callbackfn: (previousValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentIndex: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, initialValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>): import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
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
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, currentIndex: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => U_2, initialValue: U_2): U_2;
    find<S_2 extends import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>>(predicate: (this: void, value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, obj: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => value is S_2, thisArg?: any): S_2 | undefined;
    find(predicate: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, obj: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => unknown, thisArg?: any): import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}> | undefined;
    findIndex(predicate: (value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, obj: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => unknown, thisArg?: any): number;
    fill(value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, start?: number | undefined, end?: number | undefined): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    copyWithin(target: number, start: number, end?: number | undefined): (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[];
    entries(): IterableIterator<[number, import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>>;
    includes(searchElement: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, fromIndex?: number | undefined): boolean;
    flatMap<U_3, This = undefined>(callback: (this: This, value: import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>, index: number, array: (import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>)[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
    flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
    at(index: number): import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}> | undefined;
    [Symbol.iterator](): IterableIterator<import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        codeFold: {
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
            codeFold: {
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
        formatSurround: (input: string, side: string | string[], insideProcess: (input: string) => string, outsideProcess?: (input: string) => string) => string;
        format: (input: string) => string;
        formatMarkdown: (input: string) => string;
        formatMath: (input: string) => string;
        formatCode: (codeString: string) => string;
        setCodeLine: (code: string, before?: string, after?: string) => string;
        setCodeLineWithLanguage: (code: string, language: string) => string;
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
        codeFold: {
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
        codeFold: boolean;
        codeFoldThreshold: number;
    }> | import("vue").DefineComponent<{
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
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
            extraInsertUnits: {
                type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
                required: false;
                default: import("./declare/insertUnit").InsertUnit[][];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "update:modelValue", ...args: any[]) => void;
        textarea: import("vue").Ref<any>;
        previewCard: import("vue").Ref<any>;
        floatPreviewCard: import("vue").Ref<any>;
        getExtraInsertUnits: () => import("./declare/insertUnit").InsertUnit[];
        insertUnits: import("vue").Ref<{
            name: string;
            key?: string | string[] | undefined;
            label: string;
            insert: (args: Map<string, import("vue").Ref<any>>) => import("./declare/insertUnit").InsertText;
            arguments: {
                name: string;
                label: string;
                getRef: () => import("vue").Ref<any>;
            }[];
            replace?: boolean | undefined;
            keepSelect?: boolean | undefined;
        }[]>;
        argsMap: import("vue").Ref<Map<string, import("vue").Ref<any>>>;
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
        insertIntoTextarea: (insertUnit: import("./declare/insertUnit").InsertUnit) => void;
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
        extraInsertUnits: {
            type: import("vue").PropType<import("./declare/insertUnit").InsertUnit[][]>;
            required: false;
            default: import("./declare/insertUnit").InsertUnit[][];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        placeholder: string;
        startWithFullScreen: boolean;
        extraInsertUnits: import("./declare/insertUnit").InsertUnit[][];
    }> | import("vue").DefineComponent<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
    install: (Vue: any) => void;
};
export default _default;
