import { PropType, VNode } from "vue";
export declare const VNodeComponent: import("vue").DefineComponent<{
    content: {
        type: PropType<VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]>;
        required: true;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "updated"[], "updated", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: PropType<VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]>;
        required: true;
    };
}>> & {
    onUpdated?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
