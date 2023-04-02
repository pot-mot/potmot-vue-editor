import {Ref} from "vue";
import type {InsertUnit} from "../declare/insertUnit";

/**
 * 约束数值大小
 *
 * @param input 输入值
 * @param min 最小值
 * @param max 最大值
 */
export const limit = (input: number, min: number, max: number): number => {
    if (input > max) return max;
    if (input < min) return min;
    return input;
}

/**
 * 在字符串中插入替换部分
 *
 * @param inserter 插入部分
 * @param target 目标字符串
 * @param start 替换起点
 * @param end 替换终点，默认等于起点（即不进行替换）
 */
export const insertIntoString = (inserter: string, target: string, start: number, end: number = start): string => {
    return target.slice(0, start) + inserter + target.slice(end);
}

export const getArgsMap = (insertTextList: InsertUnit[]): Map<string, Ref> => {
    const argsMap = new Map<string, Ref>()
    for (let i = 0; i < insertTextList.length; i++) {
        for (let j = 0; j < insertTextList[i].arguments.length; j++) {
            argsMap.set(insertTextList[i].arguments[j].name, insertTextList[i].arguments[j].getRef())
        }
    }
    return argsMap
}