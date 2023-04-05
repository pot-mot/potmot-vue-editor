interface Headline {
    level: string;
    id: string;
    text: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
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
    click: {
        type: FunctionConstructor;
        required: false;
    };
    style: {
        type: FunctionConstructor;
        required: false;
        default: (level: number) => string;
    };
}, {
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
        click: {
            type: FunctionConstructor;
            required: false;
        };
        style: {
            type: FunctionConstructor;
            required: false;
            default: (level: number) => string;
        };
    }>> & {}>>;
    getHeadFromHtmlText: (html: string) => Headline[];
    interval: number;
    heads: import("vue").Ref<{
        level: string;
        id: string;
        text: string;
    }[]>;
    jumpTo: (id: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    click: {
        type: FunctionConstructor;
        required: false;
    };
    style: {
        type: FunctionConstructor;
        required: false;
        default: (level: number) => string;
    };
}>>, {
    target: HTMLElement;
    policy: string;
    style: Function;
}>;
export default _sfc_main;
