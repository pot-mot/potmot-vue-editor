export const syncCommonCssStyle = (
    target: HTMLElement,
    from: HTMLElement,
    syncStyles: string[] = ['padding', 'margin', 'lineHeight', 'height', 'width', 'whiteSpace', 'border', 'scale', 'wordBreak', 'wordSpacing', 'display', 'overflow', 'tabSize', 'textAlign', 'scrollPadding', 'scrollbarGutter', 'fontSize', 'boxSizing', 'wordWrap', 'resize', 'outline', '']
) => {
    const fromStyles = window.getComputedStyle(from)
    syncStyles.forEach(prop => {
        if (prop in target.style && prop in fromStyles) {
            // @ts-ignore
            target.style[prop] = fromStyles[prop]
        }
    })
}

export const syncHeightCssStyle = (
    target: HTMLElement,
    from: HTMLElement,
) => {
    syncCommonCssStyle(target, from,
        ['paddingTop', 'paddingLeft', 'paddingRight', 'marginTop', 'marginLeft', 'marginRight', 'lineHeight', 'width', 'whiteSpace', 'border', 'scale', 'wordBreak', 'wordSpacing', 'display', 'overflow', 'tabSize', 'textAlign', 'scrollPadding', 'scrollbarGutter', 'fontSize', 'boxSizing', 'wordWrap', 'resize', 'outline', '']
    )
}