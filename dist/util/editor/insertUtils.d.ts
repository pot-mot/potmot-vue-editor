import { Ref } from "vue";
import type { InsertUnit } from "../../declare/EditorUtil";
/**
 * 约束数值大小
 *
 * @param input 输入值
 * @param min 最小值
 * @param max 最大值
 */
export declare const limit: (input: number, min: number, max: number) => number;
/**
 * 在字符串中插入替换部分
 *
 * @param inserter 插入部分
 * @param target 目标字符串
 * @param start 替换起点
 * @param end 替换终点，默认等于起点（即不进行替换）
 */
export declare const insertIntoString: (inserter: string, target: string, start: number, end?: number) => string;
export declare const getArgsMap: (insertTextList: InsertUnit[]) => Map<string, Ref>;
