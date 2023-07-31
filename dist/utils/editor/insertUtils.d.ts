import { Ref } from "vue";
import { InsertUnit } from "../../declare/InsertUtil";
/**
 * 在字符串中插入替换部分
 *
 * @param inserter 插入部分
 * @param target 目标字符串
 * @param start 选中起点
 * @param end 选中终点，默认等于起点（即不进行替换）
 */
export declare const insertIntoString: (inserter: string, target: string, start: number, end?: number) => string;
/**
 * 获取 Ref 参数 Map
 * @param units 插入列表
 */
export declare const getArgsMap: (units: InsertUnit[]) => Map<string, Ref>;
/**
 * 简单插入工具
 * 适用于向文段中仅进行插入的场景
 *
 * @param textarea 文本域元素
 * @param type 历史记录类型
 * @param beforePart 向光标前插入部分
 * @param afterPart 向光标后插入部分
 * @param keepSelect 是否保持选择，如果保持选中，那么插入完后前方后方和选中区域都会被选中
 * @param replace 是否替换，如果替换，则不会保留原本选中区域
 * @param mergeMulti
 * 是否合并多次历史记录 push
 * 如果不开启，就会在每次推送后追加时间戳，这样每一次该种操作都会留存在历史栈中，而不会被紧跟着的下一次操作覆盖
 */
export declare const simpleInsert: (textarea: HTMLTextAreaElement, type: string, beforePart: string, afterPart?: string, keepSelect?: boolean, replace?: boolean, mergeMulti?: boolean) => Partial<EditorHistory>;
/**
 * 格式化插入工具
 * 适用于需要对选中区域进行复杂操作的场景
 *
 * @param textarea 文本域元素
 * @param type 历史记录类型
 *
 * @param formatter
 * 用于格式化文段的函数
 * 入参如下：
 * startPart 选中文段前的部分
 * midPart 选中文段部分
 * endPart 选中文段后的部分
 * space 选中文段起始位置的缩进
 * 需要返回如下：
 * content 字符串数组或字符串，整体替换原本的 textarea 内的全部内容，所以需要带上 startPart 和 endPart，即使不做修改
 * start textarea 新的 selectionStart
 * end textarea 新的 selectionEnd
 *
 * @param mergeMulti
 * 是否合并多次历史记录 push
 * 如果不开启，就会在每次推送后追加时间戳，这样每一次该种操作都会留存在历史栈中，而不会被紧跟着的下一次操作覆盖
 */
export declare const formatInsert: (textarea: HTMLTextAreaElement, type: string, formatter: (startPart: string, midPart: string, endPart: string, space: string) => {
    content: string[] | string;
    start: number;
    end?: number;
}, mergeMulti?: boolean) => Partial<EditorHistory>;
