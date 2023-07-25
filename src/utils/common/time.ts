export const countTime = (interval = 100000, callback: any, msg: string = "") => {
    let start, end

    start = now();
    for (let i = 0; i < interval; i++) {
        callback();
    }
    end = now();
    console.log(msg, end - start, " ", (end-start)/interval);
}

export const now = () => {
    return performance.timeOrigin + performance.now();
}