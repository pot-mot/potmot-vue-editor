import { p as e, f as o } from "./flowDb-9e6c6aac-6cca280a.js";
import { f as t, g as a } from "./styles-7882abfe-f4440680.js";
import { u as i } from "./index-d8978c8c.js";
import "./layout-e235bda1.js";
import "./index-1e7f2254-ad783a68.js";
import "./edges-66ea8538-70f235e2.js";
import "./createText-a49d2d2a-658a36da.js";
import "./svgDraw-95adee0a-e553fa1c.js";
import "./line-372783d5.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-681e5906.js";
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
