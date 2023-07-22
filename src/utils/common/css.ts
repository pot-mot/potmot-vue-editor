export const syncCommonCssStyle = (
    target: HTMLElement,
    from: HTMLElement,
    syncStyles: string[] = ['padding', 'margin', 'lineHeight', 'height', 'width', 'whiteSpace', 'border', 'scale', 'wordBreak', 'wordSpacing', 'display', 'overflowX', 'overflowY', 'tabSize', 'textAlign', 'scrollPadding', 'scrollbarGutter', 'fontSize', 'boxSizing', 'wordWrap', 'resize', 'outline', 'fontFamily', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight']
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
    const styleList = ['paddingTop', 'paddingLeft', 'paddingRight', 'marginTop', 'marginLeft', 'marginRight', 'lineHeight', 'whiteSpace', 'border', 'scale', 'wordBreak', 'wordSpacing', 'display', 'overflowX', 'overflowY', 'tabSize', 'textAlign', 'scrollPadding', 'scrollbarGutter', 'fontSize', 'boxSizing', 'wordWrap', 'resize', 'outline', 'fontFamily', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight']
    syncCommonCssStyle(target, from, styleList)
    target.style.width = 'max-content'
}