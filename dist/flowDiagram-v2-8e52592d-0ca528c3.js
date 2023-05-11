import { p as e, f as o } from "./flowDb-52e24d17-79a10bbb.js";
import { f as t, g as a } from "./styles-26373982-5d414843.js";
import { u as i } from "./index-b41cd66b.js";
import "./layout-9c3ba3fb.js";
import "./createText-1f5f8f92-b5ebbb82.js";
import "./index-5219d011-16ef45e9.js";
import "./edges-2e77835f-17036764.js";
import "./svgDraw-2526cba0-02aa0b8a.js";
import "./line-165a9c09.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./selectAll-340c2db9.js";
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
