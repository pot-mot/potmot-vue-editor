import {defineComponent, PropType, VNode} from "vue";

export const VNodeComponent = defineComponent({
    props: {
        content:{
            type: Array as PropType<VNode[]>,
            required: true
        }
    },
    render() {
        return this.content;
    }
});