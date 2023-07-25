import {setSize, setTextareaAdapt} from "../utils/common/textarea";

export const vAdapt = {
    mounted(el: HTMLElement, binding: { value: {min: number, max: number}}) {
        if (el instanceof HTMLTextAreaElement) {
            if (binding.value == undefined) binding.value = {min: 1, max: Number.MAX_SAFE_INTEGER}
            const {min, max} = binding.value
            setTextareaAdapt(el, min, max);
            setSize(el, min, max);
        }
    },
}