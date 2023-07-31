import {defineComponent, PropType, VNode} from "vue";

export const VNodeComponent = defineComponent({
    props: {
        content:{
            type: Array as PropType<VNode[]>,
            required: true
        }
    },
    emits: ["updated"],
    updated() {
        this.$emit("updated");
    },
    render() {
        return this.content;
    }
});