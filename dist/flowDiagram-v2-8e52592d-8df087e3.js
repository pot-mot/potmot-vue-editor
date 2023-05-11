import { p as e, f as o } from "./flowDb-52e24d17-3c49ed5f.js";
import { f as t, g as a } from "./styles-26373982-54437656.js";
import { u as i } from "./index-42e57b11.js";
import "./layout-8aefcd46.js";
import "./createText-1f5f8f92-06704af7.js";
import "./index-5219d011-9afc20e1.js";
import "./edges-2e77835f-a93a2385.js";
import "./svgDraw-2526cba0-2d932ec9.js";
import "./line-71a3feb1.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-e5f9e333.js";
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
