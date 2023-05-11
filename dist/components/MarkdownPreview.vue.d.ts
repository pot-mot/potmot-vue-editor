import { Renderer } from "marked";
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
    editorType: {
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
        codeTheme: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        editorType: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & {}>>;
    markdownCard: import("vue").Ref<any>;
    renderer: Renderer<never>;
    setButtonEvent: () => void;
    mermaidRender: () => void;
    oldMarkdownString: string;
    eventInterval: number;
    parse: (input: string) => string;
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
    editorType: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    codeTheme: string;
    editorType: boolean;
}>;
export default _sfc_main;
