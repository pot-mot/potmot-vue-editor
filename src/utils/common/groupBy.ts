export const groupBy = <T extends Record<string, any>>(items: T[], param: keyof T): Map<T[keyof T], T[]> => {
    const result = new Map<T[keyof T], T[]>();

    for (const item of items) {
        if (!item || !(param in item)) continue;

        const key = item[param] ?? null;

        if (!key) continue;

        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key)?.push(item);
    }

    return result;
};