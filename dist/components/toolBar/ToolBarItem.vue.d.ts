import { PropType } from "vue";
import { EditTool } from "../../declare/EditTool";
declare const _sfc_main: import("vue").DefineComponent<{
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
}, {}>;
export default _sfc_main;
