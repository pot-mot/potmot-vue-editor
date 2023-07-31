import { p as e, f as o } from "./flowDb-8f9fc471-b99f9cde.js";
import { f as t, g as a } from "./styles-ff678862-175ff458.js";
import { u as s } from "./index-7301cf54.js";
import "./layout-d599e2fb.js";
import "./index-4c4adb72-b5c72836.js";
import "./edges-b00f0ec2-3ec93147.js";
import "./createText-285e50b4-a738eb1a.js";
import "./svgDraw-5d8a058e-8b991fbd.js";
import "./line-f097aa3f.js";
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
