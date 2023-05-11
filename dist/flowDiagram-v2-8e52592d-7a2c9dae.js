import { p as e, f as o } from "./flowDb-52e24d17-e8ee2518.js";
import { f as t, g as a } from "./styles-26373982-4132748a.js";
import { u as i } from "./index-81e19fd4.js";
import "./layout-a72fd733.js";
import "./createText-1f5f8f92-c70e34dd.js";
import "./index-5219d011-a08c0c2c.js";
import "./edges-2e77835f-3b39fd5a.js";
import "./svgDraw-2526cba0-bab6cea4.js";
import "./line-e9ce0943.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-26ef5f2b.js";
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
