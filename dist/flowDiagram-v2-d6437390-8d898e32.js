import { p as e, f as o } from "./flowDb-8f9fc471-50ce1924.js";
import { f as t, g as a } from "./styles-ff678862-1d9b7341.js";
import { u as s } from "./index-20be57f3.js";
import "./layout-ae80f9eb.js";
import "./index-4c4adb72-8b204854.js";
import "./edges-b00f0ec2-19d45cc8.js";
import "./createText-285e50b4-d437b8b2.js";
import "./svgDraw-5d8a058e-cc19591e.js";
import "./line-bfb82ed8.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "vue";
const A = {
  parser: e,
  db: o,
  renderer: t,
  styles: a,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, s({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), t.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  A as diagram
};
