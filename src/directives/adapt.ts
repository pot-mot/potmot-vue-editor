import {setSize, setTextareaAdapt} from "../utils/common/textarea";

export const vAdapt = {
    mounted(el: HTMLElement, binding: { value: {min: number, max: number}} = {value: {min: 1, max: Number.MAX_SAFE_INTEGER}}) {
        if (el instanceof HTMLTextAreaElement) {
            const {min, max} = binding.value
            setTextareaAdapt(el, min, max)
            setSize(el, min, max)
        }
    },
}