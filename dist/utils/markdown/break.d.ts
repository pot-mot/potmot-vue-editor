export declare const multiQuote: RegExp;
export declare const listMark: RegExp;
export declare const leadingMarkRegex: RegExp;
/**
 * 获取当前行前方的缩进、引用、列表标记前缀
 * @param text 整个文段
 * @param index 当前下标
 * @param keepLastListMark 保留最后一个列表符
 */
export declare const getLeadingMarks: (text: string, index: number, keepLastListMark?: boolean) => string;
export declare const judgeTableLine: (text: string, index: number) => boolean;
/**
 * 创建表格的下一行
 */
export declare const createNextTableLine: (text: string, index: number) => Partial<EditorHistory>;
