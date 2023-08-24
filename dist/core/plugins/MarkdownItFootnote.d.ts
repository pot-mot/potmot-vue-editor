import StateInline from "markdown-it/lib/rules_inline/state_inline";
import MarkdownIt from "markdown-it";
import StateCore from "markdown-it/lib/rules_core/state_core";
export declare const footnoteInline: (state: StateInline, silent: boolean) => boolean;
export declare const footnoteRef: (state: StateInline, silent: boolean) => boolean;
export declare const footnoteList: (state: StateCore) => boolean;
export declare const MarkdownItFootnote: (md: MarkdownIt) => void;
