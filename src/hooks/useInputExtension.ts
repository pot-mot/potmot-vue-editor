import {batchEnter, batchTab, complete} from "../utils/editor/inputExtension";
import {updateTextarea} from "../utils/common/textarea";
import {useHistoryStack} from "./useHistoryStack";
import {now} from "../tests/time";
import {nextTick, onMounted, Ref, ref} from "vue";
import {InsertUnit, ShortcutKey} from "../declare/EditorUtil";
import {judgeKeyEventTrigger, judgeKeyEventTriggers} from "../utils/editor/keyEvent";

export const useInputExtension = (
    target: () => HTMLTextAreaElement | undefined,
    shortcutKeys: ShortcutKey[] = [],
    insertUnits: InsertUnit[] = [],
    argsMap: Map<string, Ref> = new Map,
    changeHook: (history: EditorHistory) => void = (history) => {
        const el = target()
        if (el != undefined) {
            updateTextarea(el, history)
        }
    },
    pushDefault: (() => EditorHistory) | undefined = undefined
) => {
    let historyType = ref("init")

    const undoFinalHook = () => {
        alert("无法继续撤回")
    }

    const redoFinalHook = () => {
        alert("无法继续重做")
    }

    if (pushDefault == undefined) {
        pushDefault = () => {
            const el = target()
            return {
                text: el ? el.value : '',
                scrollTop: el ? el.scrollTop : 0,
                scrollLeft: el ? el.scrollLeft : 0,
                start: el ? el.selectionStart : 0,
                end: el ? el.selectionEnd : 0,
                type: historyType.value,
            }
        }
    }

    const historyStack = useHistoryStack(
        changeHook,
        pushDefault,
        undoFinalHook,
        redoFinalHook
    )

    const {redo, undo, push, top} = historyStack

    nextTick(push).then()

    const pushMoveOrSelect = () => {
        const el = target()
        if (el == undefined) return

        let oldStart = top().start
        let oldEnd = top().end

        if (el.selectionStart == oldStart && el.selectionEnd == oldEnd) return

        nextTick(() => {
            if (el.selectionStart != el.selectionEnd) {
                historyType.value = 'select'
                push()
            } else {
                historyType.value = 'move'
                push()
            }
        }).then()
    }

    const el = target()

    const addHistoryEvent = () => {
        const el = target()
        if (el == undefined) return

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
            historyType.value = 'common'
            push()
        })

        el.addEventListener('dragend', () => {
            historyType.value = 'dragend' + now()
            push()
        })

        el.addEventListener("keydown", (e: KeyboardEvent) => {
            let history: EditorHistory | null = null

            for (const insertUnit of insertUnits) {
                if (judgeKeyEventTriggers(insertUnit.triggers, e)) {
                    if (insertUnit.prevent) e.preventDefault()
                    const history = insertUnit.insert(argsMap, el, e)
                    historyType.value = history.type
                    push(history)
                    if (insertUnit.reject) return
                }
            }

            for (const shortcutKey of shortcutKeys) {
                if (judgeKeyEventTrigger(shortcutKey.trigger, e)) {
                    if (shortcutKey.prevent) e.preventDefault()
                    shortcutKey.method(e)
                    if (shortcutKey.reject) return
                }
            }

            if (e.key == 'Alt' || e.key == 'Shift' || e.key == 'Control' || e.key == 'Meta') return

            if (e.key == 'z' && e.ctrlKey) {
                e.preventDefault()
                historyType.value = "undo";
                undo()
                return
            } else if ((e.key == 'Z' || e.key == 'y') && e.ctrlKey) {
                e.preventDefault()
                historyType.value = "redo";
                redo()
                return
            } else if ((e.key == 'x' || e.key == 'X') && e.ctrlKey) {
                historyType.value = "cut" + now();
            } else if ((e.key == 'v' || e.key == 'V') && e.ctrlKey) {
                historyType.value = "paste" + now();
            } else if ((e.key == 'c' || e.key == 'C') && e.ctrlKey) {
                historyType.value = "copy" + now();
            } else if (e.key == 'Tab') {
                historyType.value = 'enter' + now()
                e.preventDefault()
                history = batchTab(el, e)
            } else if (e.key == 'Enter') {
                historyType.value = 'tab' + now()
                e.preventDefault()
                history = batchEnter(el, e)
            } else if (['(', '[', '{', '"', "'", '`'].includes(e.key)) {
                historyType.value = 'complete' + now()
                e.preventDefault()
                const map = new Map<string, string>([['(', ')'], ['[', ']'], ['{', '}'], ['"', '"'], ["'", "'"], ['`', '`']])
                history = complete(el, {before: e.key, after: map.get(e.key)!})
            } else if ([')', ']', '}'].includes(e.key)) {
                if (el.selectionEnd != el.selectionStart) {
                    historyType.value = 'complete' + now()
                    e.preventDefault()
                    const map = new Map<string, string>([[')', '('], [']', '['], ['}', '{']])
                    history = complete(el, {before: map.get(e.key)!, after: e.key})
                }
            } else if (e.key.startsWith("Arrow")) {
                setTimeout(pushMoveOrSelect, 0)
            } else if (e.key == ' ') {
                historyType.value = 'blank'
            } else if (e.key == 'Backspace' || e.key == 'Delete') {
                historyType.value = e.key
            } else {
                historyType.value = 'common'
            }

            if (history == null) {
                setTimeout(push, 0)
            } else {
                history.type = historyType.value
                push(history)
            }
        })
    }

    if (el == undefined) {
        onMounted(() => {
            addHistoryEvent()
        })
    } else {
        addHistoryEvent()
    }

    const setHistoryType = (newVal: string) => {
        historyType.value = newVal
    }

    return {
        ...historyStack,
        historyType,
        setHistoryType,
    }
}