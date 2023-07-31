import StateInline from "markdown-it/lib/rules_inline/state_inline";
import StateCore from "markdown-it/lib/rules_core/state_core";
import MarkdownIt from "markdown-it";
export declare const footnoteInline: (state: StateInline, silent: boolean) => boolean;
export declare const footnoteRef: (state: StateInline, silent: boolean) => boolean;
export declare const footnoteTail: (state: StateCore) => void;
export declare const MarkdownItFootnote: (md: MarkdownIt) => void;
