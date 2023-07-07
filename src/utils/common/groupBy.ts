
export const groupBy = <T>(items: T[], param: string): Map<any, T[]> => {
    const result = new Map<any, T[]>();

    for (const item of items) {
        if (item == null || !(param in item)) continue

        // @ts-ignore
        const key = item[param]

        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key)?.push(item);
    }

    return result;
}