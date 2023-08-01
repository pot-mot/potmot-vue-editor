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
    scrollTop: number,
    scrollLeft: number,
    overflow: string
}

export const getDocumentScroll = (): ScrollData => {
    let scrollTop = getDocumentScrollTop();
    let scrollLeft = getDocumentScrollLeft();
    let overflow = document.documentElement.style.overflow;
    return {scrollTop, scrollLeft, overflow};
}

export const lockScroll = (): ScrollData => {
    const oldScrollData = getDocumentScroll()
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.scrollLeft = 0;
    document.documentElement.scrollTop = 0;
    return oldScrollData;
}

export const unlockScroll = (data: ScrollData) => {
    if (!data) return;
    const {overflow, scrollLeft, scrollTop} = data
    document.documentElement.style.overflow = overflow;
    document.documentElement.scrollLeft = scrollLeft;
    document.documentElement.scrollTop = scrollTop;
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