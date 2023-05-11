import { p as e, f as o } from "./flowDb-52e24d17-cc021458.js";
import { f as t, g as a } from "./styles-26373982-8238abbc.js";
import { u as i } from "./index-68f3e231.js";
import "./layout-81f7addf.js";
import "./createText-1f5f8f92-6ec05847.js";
import "./index-5219d011-7ff68c0d.js";
import "./edges-2e77835f-a4e77f27.js";
import "./svgDraw-2526cba0-a3c58dbe.js";
import "./line-ae1c0afe.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-6e7b6e2d.js";
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
