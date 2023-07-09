/**
 * 展平一个多维数组
 *
 * @param arr 目标数组
 */
export const arrayFlatten = <T>(arr: (T | T[])[]): T[] => {
    const flattened: T[] = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flattened.push(...arrayFlatten(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
};