import { Ref, VNode } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
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
    renderResult: Ref<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    asyncRender: () => void;
    getSvgParent: (element: HTMLElement) => SVGSVGElement | null;
    imageView: (element: Element) => void;
    onClick: (e: MouseEvent) => void;
    VNodeComponent: import("vue").DefineComponent<{
        content: {
            type: import("vue").PropType<VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]>;
            required: true;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "updated"[], "updated", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: import("vue").PropType<VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]>;
            required: true;
        };
    }>> & {
        onUpdated?: ((...args: any[]) => any) | undefined;
    }, {}>;
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
export default _sfc_main;
