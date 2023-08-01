import { p as e, f as o } from "./flowDb-8f9fc471-ac2a2c8f.js";
import { f as t, g as a } from "./styles-ff678862-b0afca22.js";
import { u as s } from "./index-d4cef695.js";
import "./layout-a27f1bdd.js";
import "./index-4c4adb72-280edbe8.js";
import "./edges-b00f0ec2-845bb0af.js";
import "./createText-285e50b4-74fe6484.js";
import "./svgDraw-5d8a058e-11f5b280.js";
import "./line-3006b1b8.js";
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
