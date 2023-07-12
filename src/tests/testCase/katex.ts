import {katexList} from "../../constants/katex/katex";
import {arrayFlatten} from "../../utils/common/array";

export const katexTestCases = arrayFlatten(katexList).map(item => `$${item}$ `)