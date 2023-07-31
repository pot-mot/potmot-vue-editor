export declare const slugifyHeadingId: (s: string) => string;
export declare const getCurrentLineStartEnd: (text: string, index: number) => {
    start: number;
    end: number;
};
export declare const getCurrentLine: (text: string, index: number) => string;
export declare const getCurrentLineBefore: (text: string, index: number) => string;
/**
 * 获取当前起点或当前行前方的缩进
 * @param text 整个文段
 * @param index 当前下标
 * @param fullLine 以整行进行匹配
 * @param regex 正则匹配
 */
export declare const getLeadingSpace: (text: string, index: number, fullLine?: boolean, regex?: RegExp) => string;
