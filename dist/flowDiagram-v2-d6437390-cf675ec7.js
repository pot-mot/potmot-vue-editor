import { p as e, f as o } from "./flowDb-8f9fc471-400138dd.js";
import { f as t, g as a } from "./styles-ff678862-5960b418.js";
import { u as s } from "./index-50f8b7ff.js";
import "./layout-d7f24083.js";
import "./index-4c4adb72-68be036e.js";
import "./edges-b00f0ec2-0fd8b957.js";
import "./createText-285e50b4-b6adadbf.js";
import "./svgDraw-5d8a058e-a80d313a.js";
import "./line-093fed9f.js";
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
