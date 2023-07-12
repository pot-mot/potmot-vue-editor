export const getCurrentLine = (text: string, start: number): string => {
    const startIndex = text.lastIndexOf('\n', start - 1) + 1;  // 当前行的起始位置
    const endIndex = text.indexOf('\n', start);  // 当前行的结束位置
    return text.slice(startIndex, endIndex !== -1 ? endIndex : text.length);
}

export const getCurrentLineBefore = (text: string, start: number): string => {
    const startIndex = text.lastIndexOf('\n', start - 1) + 1;  // 当前行的起始位置
    return text.slice(startIndex, start);
}

/**
 * 获取当前行前方的缩进
 *
 * @param text 整个文段
 * @param start 当前起点
 */
export const getLeadingSpace = (text: string, start: number): string => {
    return getLeadingMarks(text, start, /^\s*/)
}

/**
 * 获取当前行前方的缩进与标记前缀
 *
 * @param text 整个文段
 * @param start 当前起点
 * @param marks 标记前缀
 */
export const getLeadingMarks = (text: string, start: number, marks: RegExp = /^\s*(([-+*>] |\d+\. )\s*)*/): string => {
    const line = getCurrentLineBefore(text, start)
    const leadingMarks = line.match(marks)
    return (leadingMarks != null && leadingMarks.length != 0) ? leadingMarks[0] : ''
}