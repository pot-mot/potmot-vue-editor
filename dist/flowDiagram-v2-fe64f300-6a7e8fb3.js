import { p as e, f as o } from "./flowDb-9e6c6aac-4817f83a.js";
import { f as t, g as a } from "./styles-7882abfe-d1cfadb5.js";
import { u as i } from "./index-0c19e849.js";
import "./layout-b152ec96.js";
import "./index-1e7f2254-6734cd91.js";
import "./edges-66ea8538-590268c1.js";
import "./createText-a49d2d2a-036adeca.js";
import "./svgDraw-95adee0a-32f3f543.js";
import "./line-0ed9cd59.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-2ae71272.js";
import "vue";
const M = {
  parser: e,
  db: o,
  renderer: t,
  styles: a,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, i({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), t.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  M as diagram
};
