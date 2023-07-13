// 补全（括号和引号）
import {insertIntoString, updateTarget} from "./insertUtils";

// TODO 完善相关功能
const completeAround = (target: HTMLTextAreaElement | HTMLInputElement, insertText: { before: string, after: string }) => {
    // let start = textarea.selectionStart;
    // let selectEnd = textarea.selectionEnd;
    // let text = textarea.value;
    // let end: number;
    // const {before, after} = insertText;
    // text = insertIntoString(before, text, start);
    // end = selectEnd + before.length;
    // if (after.length > 0) {
    //     text = insertIntoString(after, text, end);
    // }
    // if (textarea.selectionStart != textarea.selectionEnd) {
    //     updateTarget(target, text, start, end + after.length)
    // } else {
    //     updateTarget(target, text, start + before.length, start + before.length)
    // }
}
//
// // 回车保留缩进
// const batchEnter = (textarea: HTMLTextAreaElement): EditorHistory => {
//     const start = textarea.selectionStart;
//     const LeadingSpace = getLeadingSpace(textarea.value, start)
//     const newValue = insertIntoString(LeadingSpace, textarea.value, start);
//     update(newValue)
//     resetSelection(start + LeadingSpace.length, start + LeadingSpace.length)
// }
//
// // 批量缩进（Tab）
// const batchTab = (textarea: HTMLTextAreaElement, e: KeyboardEvent, tab: string = '\t'): EditorHistory => {
//     const {selectionStart: start, selectionEnd: end} = textarea;
//
//     if (e.shiftKey) {
//         if (start == end) {
//             const index = textarea.value.lastIndexOf('\n', start - 1) + 1;
//             const temp = textarea.value.slice(index, start);
//             const newTemp = temp.replace(tab, '');
//             if (temp.length === newTemp.length) return;
//             const newValue = `${textarea.value.slice(0, start - temp.length)}${newTemp}${textarea.value.slice(end)}`;
//             update(newValue)
//         } else {
//             const temp = textarea.value.slice(start, end);
//             const newTemp = temp.replace(tab, '').replaceAll(`\n${tab}`, '\n');
//             if (temp.length === newTemp.length) return;
//             const newValue = `${textarea.value.slice(0, start)}${newTemp}${textarea.value.slice(start + temp.length)}`;
//             update(newValue)
//             resetSelection(start, start + newTemp.length)
//         }
//     } else {
//         if (start == end) {
//             const newValue = insertIntoString(tab, textarea.value, start);
//             update(newValue)
//             resetSelection(start + tab.length, start + tab.length)
//         } else {
//             const temp = textarea.value.slice(start, end);
//             const newTemp = `${tab}${temp.replaceAll('\n', `\n${tab}`)}`;
//             if (temp.length === newTemp.length) return;
//             const newValue = `${textarea.value.slice(0, start)}${newTemp}${textarea.value.slice(start + temp.length)}`;
//             update(newValue)
//             resetSelection(start, start + newTemp.length)
//         }
//     }