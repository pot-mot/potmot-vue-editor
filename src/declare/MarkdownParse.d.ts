interface Token {
    start: string;
    end: string;
}

interface parseToken {
    inside: parseToken | Function,
    outside: parseToken | Function,
    token?: Token | Token[]
}