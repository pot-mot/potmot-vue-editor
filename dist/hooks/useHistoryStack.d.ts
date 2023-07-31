import { Ref } from "vue";
export declare const useHistoryStack: (changeHook: (history: EditorHistory) => void, pushDefault: () => EditorHistory, undoFinalHook?: Function, redoFinalHook?: Function, topFinalHook?: Function) => {
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
