import { p as e, f as o } from "./flowDb-9e6c6aac-8e882f34.js";
import { f as t, g as a } from "./styles-7882abfe-ffd1d5f7.js";
import { u as i } from "./index-91052bff.js";
import "./layout-568f0645.js";
import "./index-1e7f2254-912068d5.js";
import "./edges-66ea8538-359a7439.js";
import "./createText-a49d2d2a-6bdc7bcf.js";
import "./svgDraw-95adee0a-c56c1e7b.js";
import "./line-7837c2d6.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-81b9e188.js";
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
