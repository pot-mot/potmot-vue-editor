import MarkdownIt from 'markdown-it';
import StateInline from "markdown-it/lib/rules_inline/state_inline";
import StateBlock from "markdown-it/lib/rules_block/state_block";
import { KatexOptions } from 'katex';
export declare const mathInline: (state: StateInline, silent: boolean) => boolean;
export declare const mathBlock: (state: StateBlock, start: number, end: number, silent: boolean) => boolean;
export declare const MarkdownItKatex: (md: MarkdownIt, options?: KatexOptions) => void;
