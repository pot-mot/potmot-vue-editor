import { p as e, f as o } from "./flowDb-8f9fc471-01504224.js";
import { f as t, g as a } from "./styles-ff678862-4cf6b9b7.js";
import { u as s } from "./index-d7731270.js";
import "./layout-4d485f0d.js";
import "./index-4c4adb72-4da09d2a.js";
import "./edges-b00f0ec2-e6bbc1f6.js";
import "./createText-285e50b4-70428f2a.js";
import "./svgDraw-5d8a058e-d0ee20b8.js";
import "./line-2938d916.js";
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
