import { p as e, f as o } from "./flowDb-9e6c6aac-f1b2dea0.js";
import { f as t, g as a } from "./styles-7882abfe-8b270fe5.js";
import { u as i } from "./index-696d0216.js";
import "./layout-c7034556.js";
import "./index-1e7f2254-b8e28b2f.js";
import "./edges-66ea8538-833c2fbe.js";
import "./createText-a49d2d2a-db8d5588.js";
import "./svgDraw-95adee0a-558c7a81.js";
import "./line-bcad4779.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-95703b22.js";
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
