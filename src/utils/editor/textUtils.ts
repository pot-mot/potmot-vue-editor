export const getCurrentLine = (text: string, start: number): string => {
    const startIndex = text.lastIndexOf('\n', start - 1) + 1;  // 当前行的起始位置
    const endIndex = text.indexOf('\n', start);  // 当前行的结束位置
    return text.slice(startIndex, endIndex !== -1 ? endIndex : text.length);
}

export const getCurrentLineBefore = (text: string, start: number): string => {
    const startIndex = text.lastIndexOf('\n', start - 1) + 1;  // 当前行的起始位置
    return text.slice(startIndex, start)
}

/**
 * 获取当前行前方的缩进
 *
 * @param text 整个文段
 * @param start 当前起点
 */
export const getLeadingSpace = (text: string, start: number): string => {
    const line = getCurrentLineBefore(text, start)
    const leadingSpaces = line.match(/^\s*/)
    return (leadingSpaces != null && leadingSpaces.length != 0) ? leadingSpaces[0] : ''
}

/**
 * 获取当前行前方的缩进与标记前缀
 *
 * @param text 整个文段
 * @param start 当前起点
 */
export const getLeadingMarks = (text: string, start: number): string => {
    const line = getCurrentLineBefore(text, start)
    const leadingMarks = line.match(/^\s*([-+*>]\s+|\d+\.\s+)*/)

    if (leadingMarks == null || leadingMarks.length == 0) return ''

    return leadingMarks[0].replaceAll(/\d+\./g, orderedListMark => {
        const incrementedNumber = parseInt(orderedListMark.slice(0, orderedListMark.length - 1)) + 1;
        return `${incrementedNumber}.`;
    })
}