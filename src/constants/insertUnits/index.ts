import {InsertUnit} from "../../declare/EditorUtil";

import {title} from "./markdown/title";
import {table} from "./markdown/table";
import {orderedList} from "./markdown/orderedList";
import {unorderedList} from "./markdown/unorderList";
import {quote} from "./markdown/quote";
import {link} from "./markdown/link";
import {image} from "./markdown/image";
import {code} from "./markdown/code";
import {markColor} from "./markdown/markColor";
import {detail} from "./extend/detail";
import {math} from "./extend/math";
import {mermaidGraph} from "./extend/mermaidGraph";
import {hardEnter} from "./extend/hardEnter";

export const markdownInsertUnits: InsertUnit[] = [
    title,
    table,
    orderedList,
    unorderedList,
    quote,
    link,
    image,
    code,
    markColor
]

export const extendInsertUnits: InsertUnit[] = [
    detail,
    math,
    mermaidGraph,
    hardEnter
]