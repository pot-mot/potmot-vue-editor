import { p as e, f as o } from "./flowDb-8f9fc471-83d35f42.js";
import { f as t, g as a } from "./styles-ff678862-b6f467ab.js";
import { u as s } from "./index-f3a6ba52.js";
import "./layout-5120bf37.js";
import "./index-4c4adb72-ee0531a0.js";
import "./edges-b00f0ec2-6ea6914f.js";
import "./createText-285e50b4-0bbdffba.js";
import "./svgDraw-5d8a058e-1c6a7542.js";
import "./line-d5daee86.js";
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
