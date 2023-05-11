import { p as e, f as o } from "./flowDb-52e24d17-3a51f73a.js";
import { f as t, g as a } from "./styles-26373982-1c278dcc.js";
import { u as i } from "./index-54d0746e.js";
import "./layout-989267ed.js";
import "./createText-1f5f8f92-42eed1b4.js";
import "./index-5219d011-6b0a8129.js";
import "./edges-2e77835f-61529d79.js";
import "./svgDraw-2526cba0-33b3f50d.js";
import "./line-a5be5e47.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-d981844c.js";
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
