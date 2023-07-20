import {batchEnter, batchTab, complete} from "../utils/editor/inputExtension";
import {updateTextarea} from "../utils/common/textarea";
import {createHistoryStack} from "../utils/editor/history";
import {now} from "../tests/time";
import {nextTick} from "vue";

export const vInputExtension = {
    mounted(el: HTMLElement) {
        if (!(el instanceof HTMLTextAreaElement)) return

        const {redo, undo, push, undoStack, redoStack} = createHistoryStack(
            (history) => {
                updateTextarea(el, history)
            },
            () => {
                return {
                    text: el.value,
                    scrollTop: el.scrollTop,
                    start: el.selectionStart,
                    end: el.selectionEnd,
                    type: '' + now(),
                }
            },
            () => {
                alert("无法继续撤回")
            },
            () => {
                alert("无法继续重做")
            }
        )

        push()


        el.addEventListener("keydown", (e: KeyboardEvent) => {
            let history: EditorHistory | null = null

            if (e.key == 'Alt' || e.key == 'Shift' || e.key == 'Control' || e.key == 'Alt') return

            if (e.key == 'z' && e.ctrlKey) {
                e.preventDefault()
                undo()
                return
            } else if ((e.key == 'Z' || e.key == 'y') && e.ctrlKey) {
                e.preventDefault()
                redo()
                return
            }

            else if (e.key == 'Tab') {
                e.preventDefault()
                history = batchTab(el, e)
            } else if (e.key == 'Enter') {
                e.preventDefault()
                history = batchEnter(el, e)
            } else if (['(', '[', '{', '"', "'", '`'].includes(e.key)) {
                e.preventDefault()
                const map = new Map<string, string>([['(', ')'], ['[', ']'], ['{', '}'], ['"', '"'], ["'", "'"], ['`', '`']])
                history = complete(el, {before: e.key, after: map.get(e.key)!})
            } else if ([')', ']', '}'].includes(e.key)) {
                if (el.selectionEnd != el.selectionStart) {
                    e.preventDefault()
                    const map = new Map<string, string>([[')', '('], [']', '['], ['}', '{']])
                    history = complete(el, {before: map.get(e.key)!, after: e.key})
                }
            }

            if (history == null) {
                push()
            } else {
                push(history)
            }

            console.log(undoStack)
        })
    }
}