export const getLeadingSpace = (text: string, start: number): string => {
    let LeadingSpace = "\n";
    let index = start;
    if (text[index] == '\n') {
        index--;
    }
    // 向前读取前一行的回车
    while (text[index] != '\n' && index > 0) {
        index--;
    }
    if (index != 0) {
        index++;
    }
    // 读到第二个回车时向后读取 tab 和 blank
    for (; index < text.length && index < start; index++) {
        if (text[index] == ' ' || text[index] == '\t') {
            LeadingSpace += text[index];
        } else {
            break;
        }
    }
    return LeadingSpace
}