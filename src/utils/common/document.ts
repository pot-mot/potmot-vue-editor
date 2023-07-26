import {computed, ComputedRef} from "vue";
import {setStyle} from "./style";
import {hideStyle} from "../../constants/css/style";

export const getDocumentScrollTop = (): number => {
    return document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
}

export const getDocumentScrollLeft = (): number => {
    return document.documentElement.scrollLeft || document.body.scrollLeft || window.scrollX;
}

export type ScrollData = {
    oldScrollTop: number,
    oldScrollLeft: number,
    oldOverflow: string
}

export const lockScroll = (): ScrollData => {
    let oldScrollTop = getDocumentScrollTop()
    let oldScrollLeft = getDocumentScrollLeft()
    let oldOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.scrollLeft = 0;
    document.documentElement.scrollTop = 0;
    return {oldScrollTop, oldScrollLeft, oldOverflow}
}

export const unlockScroll = (data: ScrollData) => {
    if (!data) return;
    const {oldOverflow, oldScrollLeft, oldScrollTop} = data
    document.documentElement.style.overflow = oldOverflow;
    document.documentElement.scrollLeft = oldScrollLeft;
    document.documentElement.scrollTop = oldScrollTop;
}

export const createComputedHideDom = (tagName: keyof HTMLElementTagNameMap, id: string): ComputedRef<Element> => {
    return computed(() => {
        let element = document.getElementById(id);
        if (!element) {
            const item = document.createElement(tagName);
            item.id = id;
            setStyle(item, hideStyle);
            document.documentElement.appendChild(item);
            element = item;
        }
        return element;
    })
}