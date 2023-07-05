import {computed} from "vue";

export const isMobile = computed(() => {
    return 'ontouchstart' in document;
})

/**
 * 约束数值大小
 *
 * @param input 输入值
 * @param min 最小值
 * @param max 最大值
 */
export const limit = (input: number, min: number | undefined, max: number | undefined): number => {
    if (max != undefined && input > max) {
        return max;
    }
    if (min != undefined && input < min) {
        return min;
    }
    return input;
}