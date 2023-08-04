import { PropType } from "vue";
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
    items: import("vue").Ref<{
        level: number;
        id: string;
        text: string;
        current: boolean;
    }[]>;
    emits: (event: "clickItem", ...args: any[]) => void;
    props: import("@vue/shared").LooseRequired<{
        readonly suspend: boolean;
        readonly target: HTMLElement;
        readonly policy: string;
        readonly parse: (head: HTMLHeadingElement) => OutlineItem;
        readonly step: number;
        readonly onClickItem?: ((...args: any[]) => any) | undefined;
    } & {}>;
    maxLevel: import("vue").ComputedRef<number>;
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
}, {}>;
export default _sfc_main;
