import { ComputedRef } from "vue";
export declare const getDocumentScrollTop: () => number;
export declare const getDocumentScrollLeft: () => number;
export type ScrollData = {
    scrollTop: number;
    scrollLeft: number;
    overflow: string;
};
export declare const getDocumentScroll: () => ScrollData;
export declare const lockScroll: () => ScrollData;
export declare const unlockScroll: (data: ScrollData) => void;
export declare const createComputedHideDom: (tagName: keyof HTMLElementTagNameMap, id: string) => ComputedRef<Element>;
