import { p as e, f as o } from "./flowDb-8f9fc471-68aa28ae.js";
import { f as t, g as a } from "./styles-ff678862-dc6d9db3.js";
import { u as s } from "./index-e4487cb0.js";
import "./layout-d552b259.js";
import "./index-4c4adb72-239d0146.js";
import "./edges-b00f0ec2-de5c2949.js";
import "./createText-285e50b4-c70ac9e3.js";
import "./svgDraw-5d8a058e-b1deb9a0.js";
import "./line-4d3784fe.js";
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
