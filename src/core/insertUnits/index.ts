import {InsertUnit} from "../../declare/InsertUtil";

import {title} from "./markdown/title";
import {table} from "./markdown/table";
import {orderedList} from "./markdown/orderedList";
import {unorderedList} from "./markdown/unorderList";
import {quote} from "./markdown/quote";
import {link} from "./markdown/link";
import {image} from "./markdown/image";
import {code} from "./markdown/code";
import {container} from "./extend/container";
import {math} from "./extend/math";
import {mermaidGraph} from "./extend/mermaidGraph";
import {footnote} from "./extend/footnote";
import {tabs} from "./extend/tabs";

export const markdownInsertUnits: InsertUnit[] = [
    code,
    title,
    table,
    orderedList,
    unorderedList,
    quote,
    link,
    image,
]

export const extendInsertUnits: InsertUnit[] = [
    container,
    tabs,
    math,
    mermaidGraph,
    footnote,
]