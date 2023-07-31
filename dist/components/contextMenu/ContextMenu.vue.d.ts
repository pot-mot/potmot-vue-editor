import { PropType } from "vue";
import { EditTool } from "../../declare/EditTool";
declare const _sfc_main: import("vue").DefineComponent<{
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
}>;
export default _sfc_main;
