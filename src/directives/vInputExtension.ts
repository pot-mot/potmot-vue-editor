import {useInputExtension} from "../hooks/useInputExtension";

export const vInputExtension = {
    mounted(el: HTMLElement) {
        if (!(el instanceof HTMLTextAreaElement)) return;
        useInputExtension(() => el);
    }
}