import {batchEnter, batchTab, complete} from "../utils/editor/inputExtension";
import {updateTextarea} from "../utils/common/textarea";
import {useHistoryStack} from "../utils/editor/history";
import {now} from "../tests/time";
import {nextTick} from "vue";

export const vInputExtension = {
    mounted(
        el: HTMLElement
    ) {
        if (!(el instanceof HTMLTextAreaElement)) return

        let historyType = "init"

        const {redo, undo, push, setTop, top} = useHistoryStack(
            el,
            (history) => {
                updateTextarea(el, history)
            },
            () => {
                return {
                    text: el.value,
                    scrollTop: el.scrollTop,
                    start: el.selectionStart,
                    end: el.selectionEnd,
                    type: historyType,
                }
            },
            () => {
                alert("无法继续撤回")
            },
            () => {
                alert("无法继续重做")
            }
        )

        nextTick(push).then()

        const pushMoveOrSelect = () => {
            let oldStart = top().start
            let oldEnd = top().end

            if (el.selectionStart == oldStart && el.selectionEnd == oldEnd) return

            nextTick(() => {
                if (el.selectionStart != el.selectionEnd) {
                    historyType = 'select'
                    push()
                } else {
                    historyType = 'move'
                    push()
                }
            }).then()
        }

        el.addEventListener('mousedown', (e) => {
            if (e.target != el) return
            pushMoveOrSelect()
        })

        el.addEventListener('mouseup', (e) => {
            if (e.target != el) return
            pushMoveOrSelect()
        })

        el.addEventListener('select', (e) => {
            if (e.target != el) return
            pushMoveOrSelect()
        })

        el.addEventListener('compositionend', (e) => {
            if (e.target != el) return
            setTop()
        })

        el.addEventListener('dragend', () => {
            historyType = 'dragend' + now()
            push()
        })

        el.addEventListener("keydown", (e: KeyboardEvent) => {
            let history: EditorHistory | null = null

            if (e.key == 'Alt' || e.key == 'Shift' || e.key == 'Control' || e.key == 'Alt') return

            if ((e.key == 'x' || e.key == 'X') && e.ctrlKey) {
                historyType = "cut";
            } else if ((e.key == 'v' || e.key == 'V') && e.ctrlKey) {
                historyType = "copy";
            } else if (e.key == 'z' && e.ctrlKey) {
                e.preventDefault()
                historyType = "undo";
                undo()
                return
            } else if ((e.key == 'Z' || e.key == 'y') && e.ctrlKey) {
                e.preventDefault()
                historyType = "redo";
                redo()
                return
            } else if (e.key == 'Tab') {
                historyType = 'enter' + now()
                e.preventDefault()
                history = batchTab(el, e)
            } else if (e.key == 'Enter') {
                historyType = 'tab' + now()
                e.preventDefault()
                history = batchEnter(el, e)
            } else if (['(', '[', '{', '"', "'", '`'].includes(e.key)) {
                historyType = 'complete' + now()
                e.preventDefault()
                const map = new Map<string, string>([['(', ')'], ['[', ']'], ['{', '}'], ['"', '"'], ["'", "'"], ['`', '`']])
                history = complete(el, {before: e.key, after: map.get(e.key)!})
            } else if ([')', ']', '}'].includes(e.key)) {
                if (el.selectionEnd != el.selectionStart) {
                    historyType = 'complete' + now()
                    e.preventDefault()
                    const map = new Map<string, string>([[')', '('], [']', '['], ['}', '{']])
                    history = complete(el, {before: map.get(e.key)!, after: e.key})
                }
            } else if (e.key.startsWith("Arrow")) {
                setTimeout(pushMoveOrSelect, 0)
            } else if (e.key == ' ') {
                historyType = 'blank'
            } else if (e.key == 'Backspace' || e.key == 'Delete') {
                historyType = e.key
            } else {
                historyType = 'common'
            }

            if (history == null) {
                setTimeout(push, 0)
            } else {
                history.type = historyType
                push(history)
            }
        })
    }
}