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
    const node = <HTMLElement>e.target;
    try {
        if (node.parentElement != null) {
            const codes = node.parentElement.querySelectorAll("code")
            const results: string[] = []
            codes.forEach(code => {
                results.push(code.textContent ? code.textContent : '')
            })
            copy(results.join(''))
            alert("已复制");
        }
    } catch (e) {
        alert("复制失败:" + e);
    }
}