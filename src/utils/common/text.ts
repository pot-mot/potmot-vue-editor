export const slugify = (s: string) => String(s).trim().replace(/\s+/g, '-')

export const getCurrentLineStartEnd = (text: string, index: number): {start: number, end: number} => {
    const start = text.lastIndexOf('\n', index - 1) + 1;  // 当前行的起始位置
    const end = text.indexOf('\n', index);  // 当前行的结束位置
    return {start, end: end !== -1 ? end : text.length};
}

export const getCurrentLine = (text: string, index: number): string => {
    const {start, end} = getCurrentLineStartEnd(text, index);
    return text.slice(start, end);
}

export const getCurrentLineBefore = (text: string, index: number): string => {
    const startIndex = text.lastIndexOf('\n', index - 1) + 1;  // 当前行的起始位置
    return text.slice(startIndex, index);
}

/**
 * 获取当前起点或当前行前方的缩进
 * @param text 整个文段
 * @param index 当前下标
 * @param fullLine 以整行进行匹配
 * @param regex 正则匹配
 */
export const getLeadingSpace = (text: string, index: number, fullLine: boolean = false, regex: RegExp = /^[ \t]*/): string => {
    const line = fullLine ? getCurrentLine(text, index) : getCurrentLineBefore(text, index);
    const leadingSpaces = line.match(regex);
    return (leadingSpaces != null && leadingSpaces.length != 0) ? leadingSpaces[0] : ''
}

/**
 * 返回一个字符串前缀和后缀的空白段，以及去除空白段的部分
 * 如果整个字符串为空白，则返回自身和两个空串
 */
export const getLeadingAndTrailingSpaces = (str: string) => {
    const trimStart = str.trimStart();
    const trimEnd = str.trimEnd();

    const leadingSpaces = str.replace(trimStart, '');
    const trailingSpaces = str.replace(trimEnd, '');

    const text = str.trim();
    if (text.length == 0) {
        return {leadingSpaces: '', text: str, trailingSpaces: ''}
    }
    return {leadingSpaces, text, trailingSpaces}
}