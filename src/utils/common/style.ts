import {commonStyleProp, searchStyleProp} from "../../constants/css/style";

export const syncCommonCssStyle = (
    target: HTMLElement,
    from: HTMLElement,
    syncStyles: string[] = commonStyleProp
) => {
    const fromStyles = window.getComputedStyle(from)
    syncStyles.forEach(prop => {
        if (prop in target.style && prop in fromStyles) {
            // @ts-ignore
            target.style[prop] = fromStyles[prop]
        }
    })
}

export const syncSearchCssStyle = (
    target: HTMLElement,
    from: HTMLElement,
) => {
    syncCommonCssStyle(target, from, searchStyleProp)
    const whiteSpace = window.getComputedStyle(from).whiteSpace
    if (whiteSpace == "pre-line") {
        target.style.maxWidth = window.getComputedStyle(from).width
    }
    target.style.width = 'max-content'
}

export const setStyle = (
    target: HTMLElement,
    styles: Partial<CSSStyleDeclaration>
) => {
    const keys = Object.keys(styles) as (keyof CSSStyleDeclaration)[];
    for (const key of keys) {
        // @ts-ignore
        target.style[key] = styles[key];
    }
}