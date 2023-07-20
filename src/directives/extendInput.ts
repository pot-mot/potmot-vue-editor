import {batchEnter, batchTab, complete} from "../utils/editor/inputExtension";
import {updateTextarea} from "../utils/common/textarea";

export const vExtendInput = {
    mounted(el: HTMLTextAreaElement | HTMLInputElement, binding: {value: Function}) {
        el.addEventListener("keydown", (e: Event) => {
            if (!(e instanceof KeyboardEvent)) return
            const target = e.target
            if (!(target instanceof HTMLTextAreaElement)) return

            let history: EditorHistory | null = null

            if (e.key == 'Tab') {
                e.preventDefault()
                history = batchTab(target, e)
            } else if (e.key == 'Enter') {
                e.preventDefault()
                history = batchEnter(target, e)
            } else if (['(', '[', '{', '"', "'", '`'].includes(e.key)) {
                e.preventDefault()
                const map = new Map<string, string>([['(', ')'], ['[', ']'], ['{', '}'], ['"', '"'], ["'", "'"], ['`', '`']])
                history = complete(target, {before: e.key, after: map.get(e.key)!})
            } else if ([')', ']', '}'].includes(e.key)) {
                if (target.selectionEnd != target.selectionStart) {
                	e.preventDefault()
                	const map = new Map<string, string>([[')', '('], [']', '['], ['}', '{']])
                    history = complete(target, {before: map.get(e.key)!, after: e.key})
                } else {
                    return
                }
            }

            if (history == null) return

            if (binding.value == undefined) {
                updateTextarea(target, history)
            } else {
                binding.value(target, history)
            }
        })
    }
}