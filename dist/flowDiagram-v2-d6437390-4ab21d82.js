import { p as e, f as o } from "./flowDb-8f9fc471-3657362a.js";
import { f as t, g as a } from "./styles-ff678862-716914c0.js";
import { u as s } from "./index-b324c4a1.js";
import "./layout-640ba979.js";
import "./index-4c4adb72-32369aa3.js";
import "./edges-b00f0ec2-f7ea77c2.js";
import "./createText-285e50b4-40cf1e70.js";
import "./svgDraw-5d8a058e-b551540f.js";
import "./line-b3b77434.js";
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
