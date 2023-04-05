interface Headline {
    level: string;
    text: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    markdownText: {
        type: StringConstructor;
        required: true;
    };
    policy: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    target: {
        type: {
            new (): HTMLElement;
            prototype: HTMLElement;
        };
        required: false;
        default: HTMLElement;
    };
    click: {
        type: FunctionConstructor;
        required: false;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        markdownText: {
            type: StringConstructor;
            required: true;
        };
        policy: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        target: {
            type: {
                new (): HTMLElement;
                prototype: HTMLElement;
            };
            required: false;
            default: HTMLElement;
        };
        click: {
            type: FunctionConstructor;
            required: false;
        };
    }>> & {}>>;
    getHeadFromHtmlText: (html: string) => Headline[];
    heads: import("vue").Ref<{
        level: string;
        text: string;
    }[]>;
    jumpTo: (id: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    markdownText: {
        type: StringConstructor;
        required: true;
    };
    policy: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    target: {
        type: {
            new (): HTMLElement;
            prototype: HTMLElement;
        };
        required: false;
        default: HTMLElement;
    };
    click: {
        type: FunctionConstructor;
        required: false;
    };
}>>, {
    policy: string;
    target: HTMLElement;
}>;
export default _sfc_main;
