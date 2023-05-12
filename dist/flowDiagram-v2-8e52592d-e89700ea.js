import { p as e, f as o } from "./flowDb-52e24d17-23df6b22.js";
import { f as t, g as a } from "./styles-26373982-61b01fce.js";
import { u as i } from "./index-03ff04ff.js";
import "./layout-7fb86b47.js";
import "./createText-1f5f8f92-8e33b0fc.js";
import "./index-5219d011-7621ef3a.js";
import "./edges-2e77835f-87cbb13d.js";
import "./svgDraw-2526cba0-d3a6b685.js";
import "./line-12262c52.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-50e9250c.js";
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
