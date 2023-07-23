export const commonStyleProp = ['padding', 'margin', 'lineHeight', 'height', 'width', 'whiteSpace', 'border', 'scale', 'wordBreak', 'wordSpacing', 'display', 'overflowX', 'overflowY', 'tabSize', 'textAlign', 'scrollPadding', 'scrollbarGutter', 'fontSize', 'boxSizing', 'wordWrap', 'resize', 'outline', 'fontFamily', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight']

export const searchStyleProp = ['paddingTop', 'paddingLeft', 'paddingRight', 'marginTop', 'marginLeft', 'marginRight', 'lineHeight', 'whiteSpace', 'border', 'scale', 'wordBreak', 'wordSpacing', 'display', 'overflowX', 'overflowY', 'tabSize', 'textAlign', 'scrollPadding', 'scrollbarGutter', 'fontSize', 'boxSizing', 'wordWrap', 'resize', 'outline', 'fontFamily', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight']

export const hideStyle: Partial<CSSStyleDeclaration> = {
    position: 'fixed',
    left: '-1000vh',
    top: '-1000vw',
    visibility: 'hidden',
    pointerEvents: 'none',
    userSelect: 'none',
}