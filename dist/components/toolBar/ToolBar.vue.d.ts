import { PropType } from "vue";
import { EditTool } from "../../declare/EditTool";
declare const _sfc_main: import("vue").DefineComponent<{
    tools: {
        type: PropType<EditTool[]>;
        required: true;
    };
    positions: {
        type: PropType<string[]>;
        required: false;
        default: never[];
    };
}, {
    props: import("@vue/shared").LooseRequired<{
        readonly tools: EditTool[];
        readonly positions: string[];
        readonly onClickTool?: ((...args: any[]) => any) | undefined;
    } & {}>;
    emits: (event: "clickTool", ...args: any[]) => void;
    toolMap: import("vue").ComputedRef<Map<string | boolean | import("vue").Ref<string> | import("vue").Ref<boolean> | import("../../declare/EditTool").ToolContextMenu | ((self: EditTool) => any) | undefined, EditTool[]>>;
    menuTools: import("vue").ComputedRef<EditTool[]>;
    clickTool: (tool: EditTool) => void;
    toolBarContainer: import("vue").Ref<any>;
    ContextMenu: import("vue").DefineComponent<{
        tool: {
            type: PropType<EditTool>;
            required: true;
        };
        dragRange: {
            type: PropType<PositionRange>;
            required: false;
        };
        resetPosition: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "cancel"[], "cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tool: {
            type: PropType<EditTool>;
            required: true;
        };
        dragRange: {
            type: PropType<PositionRange>;
            required: false;
        };
        resetPosition: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>> & {
        onCancel?: ((...args: any[]) => any) | undefined;
    }, {
        resetPosition: boolean;
    }, {}>;
    readonly closeContextMenu: (tool: EditTool) => void;
    ToolBarItem: import("vue").DefineComponent<{
        tool: {
            type: PropType<EditTool>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickTool"[], "clickTool", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        tool: {
            type: PropType<EditTool>;
            required: true;
        };
    }>> & {
        onClickTool?: ((...args: any[]) => any) | undefined;
    }, {}, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickTool"[], "clickTool", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tools: {
        type: PropType<EditTool[]>;
        required: true;
    };
    positions: {
        type: PropType<string[]>;
        required: false;
        default: never[];
    };
}>> & {
    onClickTool?: ((...args: any[]) => any) | undefined;
}, {
    positions: string[];
}, {}>;
export default _sfc_main;
