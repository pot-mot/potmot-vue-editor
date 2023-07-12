import {setTextareaAdapt} from "../utils/common/textarea";

export const vAdapt = {
    mounted(el: HTMLTextAreaElement) {
        setTextareaAdapt(el)
    }
}