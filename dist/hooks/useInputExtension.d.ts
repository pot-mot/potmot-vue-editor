import { Ref } from "vue";
import { InsertUnit, ShortcutKey } from "../declare/InsertUtil";
export declare const useInputExtension: (target: () => HTMLTextAreaElement | undefined | null, shortcutKeys?: ShortcutKey[], insertUnits?: InsertUnit[], argsMap?: Map<string, Ref>, changeHook?: (history: EditorHistory) => void, pushDefault?: (() => EditorHistory) | undefined) => {
    historyType: Ref<string>;
    setHistoryType: (newVal: string) => void;
    undoStack: Ref<EditorHistory[]>;
    redoStack: Ref<EditorHistory[]>;
    redo: () => void;
    undo: () => void;
    push: (input?: Partial<EditorHistory> | undefined, change?: Function | undefined) => void;
    clear: () => void;
    top: () => EditorHistory;
    setTop: (input?: EditorHistory) => void;
    pushDefault: () => EditorHistory;
};
