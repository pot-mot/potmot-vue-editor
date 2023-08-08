export const toMap = (list: any[], key: string, value?: string): Map<any, any> => {
    const map = new Map();
    if (value == undefined) {
        list.forEach(item => {
            if (key in item) {
                map.set(item[key], item);
            }
        });
    } else {
        list.forEach(item => {
            if (key in item) {
                if (value in item) {
                    map.set(item[key], item[value]);
                } else {
                    map.set(item[key], undefined);
                }
            }
        });
    }

    return map
}