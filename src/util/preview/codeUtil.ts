export const setCodeLine = (code: string) => {
    if (code[code.length - 1] == '\n') {
        code = code.slice(0, code.length - 1);
    }
    let codes = code.split("\n");
    let res = ''
    for (let i = 0; i < codes.length; i++) {
        res += '<span class="count"></span>' + codes[i] + '\n';
    }
    return res;
}

/*
	代码复制操作
 */
export const copy = (text: string) => {
    const handleCopy = (e: ClipboardEvent) => {
        e.preventDefault();
        e.clipboardData && e.clipboardData.setData('text/plain', text);
        document.removeEventListener('copy', handleCopy);
    };
    document.addEventListener('copy', handleCopy);
    document.execCommand('copy');
}

export const copyCode = (e: MouseEvent) => {
    let node = <HTMLElement>e.target;
    try {
        let code = <HTMLElement>node!.parentElement!.getElementsByTagName('code')[0];
        let temp: string = code.textContent ? code.textContent : '';
        copy(temp);
        alert("已复制");
    } catch (e) {
        alert("复制失败:" + e);
    }
}