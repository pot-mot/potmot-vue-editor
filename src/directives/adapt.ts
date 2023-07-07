import {setTextareaAdapt} from "../utils/common/textarea";

export const vAdapt = {
    mounted(el: HTMLDivElement) {
        if (el instanceof HTMLTextAreaElement) {
            setTextareaAdapt(el)
        }
    }
}