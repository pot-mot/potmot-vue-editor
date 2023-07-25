export const getKeys = (object: {[key: string]: any}): string[] => {
    const result: string[] = []
    for (let objectKey in object) {
        result.push(objectKey);
    }
    return result
}