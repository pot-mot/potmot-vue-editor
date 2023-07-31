import { p as e, f as o } from "./flowDb-8f9fc471-0ee88876.js";
import { f as t, g as a } from "./styles-ff678862-b528ba46.js";
import { u as s } from "./index-9a635572.js";
import "./layout-b8d3b769.js";
import "./index-4c4adb72-eb7d4182.js";
import "./edges-b00f0ec2-adc3d29d.js";
import "./createText-285e50b4-bcebcc27.js";
import "./svgDraw-5d8a058e-0d1aff36.js";
import "./line-cd0242bd.js";
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
