import { p as e, f as o } from "./flowDb-9e6c6aac-cd34b6cb.js";
import { f as t, g as a } from "./styles-7882abfe-4ae7450f.js";
import { u as i } from "./index-14ad5708.js";
import "./layout-d98ae1de.js";
import "./index-1e7f2254-8123e3dc.js";
import "./edges-66ea8538-ba4f14a9.js";
import "./createText-a49d2d2a-15fbd547.js";
import "./svgDraw-95adee0a-ef37635e.js";
import "./line-20e46e13.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-6f30828f.js";
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
