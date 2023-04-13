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
    parseSurround: (input: string, surround: {
        start: string;
        end: string;
    } | {
        start: string;
        end: string;
    }[], insideProcess?: (input: string, index?: number) => string, outsideProcess?: (input: string, index?: number) => string) => string;
    parse: (input: string) => string;
    parseMarkdownAndInlineMath: (input: string) => string;
    parseParagraph: (input: string) => string;
    parseCode: (codeString: string) => string;
    setCodeLineWithLanguage: (code: string, language: string) => string;
    setCodeLine: (code: string, before?: string, after?: string) => string;
    once: boolean;
    foldCode: (e: MouseEvent) => void;
    copy: (text: string) => void;
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
