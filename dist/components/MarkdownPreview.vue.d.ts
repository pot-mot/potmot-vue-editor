declare const _sfc_main: import("vue").DefineComponent<{
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
    format: (markdownString: string) => string;
    formatMarkdown: (markdownString: string) => string;
    formatCode: (codeString: string) => string;
    setCodeLine: (code: string, before?: string, after?: string) => string;
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
}>;
export default _sfc_main;
