import {Tokenizer} from "marked";

export const tokenizer = new Tokenizer();

tokenizer.lheading = (src: string): any => {
    const cap = /^((?:.|\n(?!\n))+?)\n(={3,}|-{3,})/.exec(src);

    if (cap) {
        const text = `${cap[1]}<hr/>`
        return {
            type: 'heading',
            raw: cap[0],
            depth: cap[2].charAt(0) == '=' ? 1 : 2,
            text,
            // @ts-ignore
            tokens: tokenizer.lexer.inline(text)
        };
    }
}

tokenizer.del = (src: string): any => {
    const cap = /^~~(.*?)~~/.exec(src);
    if (cap) {
        return {
            type: 'del',
            raw: cap[0],
            text: cap[1],
            // @ts-ignore
            tokens: tokenizer.lexer.inlineTokens(cap[1])
        };
    }
}