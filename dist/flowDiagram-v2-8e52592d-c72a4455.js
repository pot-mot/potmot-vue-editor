import { p as e, f as o } from "./flowDb-52e24d17-4715d4b3.js";
import { f as t, g as a } from "./styles-26373982-bdf7306e.js";
import { u as i } from "./index-c335d62e.js";
import "./layout-ef28c229.js";
import "./createText-1f5f8f92-e4db4645.js";
import "./index-5219d011-d218db4e.js";
import "./edges-2e77835f-e69159c8.js";
import "./svgDraw-2526cba0-066a4847.js";
import "./line-092a3c5a.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-4fb9119b.js";
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
