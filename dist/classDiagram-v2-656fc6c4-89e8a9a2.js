import { p as I, d as N, s as M } from "./styles-a893c203-9121ee66.js";
import { l as d, c, h as w, x as R, t as B, q as E, r as _, o as G, j as C } from "./index-d8978c8c.js";
import { G as q } from "./layout-e235bda1.js";
import { r as z } from "./index-1e7f2254-ad783a68.js";
import "vue";
import "./edges-66ea8538-70f235e2.js";
import "./createText-a49d2d2a-658a36da.js";
import "./svgDraw-95adee0a-e553fa1c.js";
import "./line-372783d5.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
const S = (s) => C.sanitizeText(s, c());
let k = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
const P = function(s, t, y, n) {
  const e = Object.keys(s);
  d.info("keys:", e), d.info(s), e.forEach(function(i) {
    var o, r;
    const l = s[i], p = {
      shape: "rect",
      id: l.id,
      domId: l.domId,
      labelText: S(l.id),
      labelStyle: "",
      style: "fill: none; stroke: black",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((o = c().flowchart) == null ? void 0 : o.padding) ?? ((r = c().class) == null ? void 0 : r.padding)
    };
    t.setNode(l.id, p), A(l.classes, t, y, n, l.id), d.info("setNode", p);
  });
}, A = function(s, t, y, n, e) {
  const i = Object.keys(s);
  d.info("keys:", i), d.info(s), i.filter((o) => s[o].parent == e).forEach(function(o) {
    var r, l;
    const a = s[o], p = a.cssClasses.join(" "), f = { labelStyle: "", style: "" }, h = a.label ?? a.id, b = 0, m = "class_box", u = {
      labelStyle: f.labelStyle,
      shape: m,
      labelText: S(h),
      classData: a,
      rx: b,
      ry: b,
      class: p,
      style: f.style,
      id: a.id,
      domId: a.domId,
      tooltip: n.db.getTooltip(a.id, e) || "",
      haveCallback: a.haveCallback,
      link: a.link,
      width: a.type === "group" ? 500 : void 0,
      type: a.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((r = c().flowchart) == null ? void 0 : r.padding) ?? ((l = c().class) == null ? void 0 : l.padding)
    };
    t.setNode(a.id, u), e && t.setParent(a.id, e), d.info("setNode", u);
  });
}, F = function(s, t, y, n) {
  d.info(s), s.forEach(function(e, i) {
    var o, r;
    const l = e, a = "", p = { labelStyle: "", style: "" }, f = l.text, h = 0, b = "note", m = {
      labelStyle: p.labelStyle,
      shape: b,
      labelText: S(f),
      noteData: l,
      rx: h,
      ry: h,
      class: a,
      style: p.style,
      id: l.id,
      domId: l.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((o = c().flowchart) == null ? void 0 : o.padding) ?? ((r = c().class) == null ? void 0 : r.padding)
    };
    if (t.setNode(l.id, m), d.info("setNode", m), !l.class || !(l.class in n))
      return;
    const u = y + i, x = {
      id: `edgeNote${u}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: E(k.curve, _)
    };
    t.setEdge(l.id, l.class, x, u);
  });
}, H = function(s, t) {
  const y = c().flowchart;
  let n = 0;
  s.forEach(function(e) {
    var i;
    n++;
    const o = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + n,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: D(e.relation.type1),
      arrowTypeEnd: D(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: E(y == null ? void 0 : y.curve, _)
    };
    if (d.info(o, e), e.style !== void 0) {
      const r = G(e.style);
      o.style = r.style, o.labelStyle = r.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (o.arrowheadStyle = "fill: #333") : (o.arrowheadStyle = "fill: #333", o.labelpos = "c", ((i = c().flowchart) == null ? void 0 : i.htmlLabels) ?? c().htmlLabels ? (o.labelType = "html", o.label = '<span class="edgeLabel">' + e.text + "</span>") : (o.labelType = "text", o.label = e.text.replace(C.lineBreakRegex, `
`), e.style === void 0 && (o.style = o.style || "stroke: #333; stroke-width: 1.5px;fill:none"), o.labelStyle = o.labelStyle.replace("color:", "fill:"))), t.setEdge(e.id1, e.id2, o, n);
  });
}, V = function(s) {
  k = {
    ...k,
    ...s
  };
}, W = async function(s, t, y, n) {
  d.info("Drawing class - ", t);
  const e = c().flowchart ?? c().class, i = c().securityLevel;
  d.info("config:", e);
  const o = (e == null ? void 0 : e.nodeSpacing) ?? 50, r = (e == null ? void 0 : e.rankSpacing) ?? 50, l = new q({
    multigraph: !0,
    compound: !0
  }).setGraph({
    rankdir: n.db.getDirection(),
    nodesep: o,
    ranksep: r,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), a = n.db.getNamespaces(), p = n.db.getClasses(), f = n.db.getRelations(), h = n.db.getNotes();
  d.info(f), P(a, l, t, n), A(p, l, t, n), H(f, l), F(h, l, f.length + 1, p);
  let b;
  i === "sandbox" && (b = w("#i" + t));
  const m = i === "sandbox" ? w(b.nodes()[0].contentDocument.body) : w("body"), u = m.select(`[id="${t}"]`), x = m.select("#" + t + " g");
  if (await z(
    x,
    l,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    t
  ), R.insertTitle(u, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, n.db.getDiagramTitle()), B(l, u, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const T = i === "sandbox" ? b.nodes()[0].contentDocument : document, $ = T.querySelectorAll('[id="' + t + '"] .edgeLabel .label');
    for (const g of $) {
      const L = g.getBBox(), v = T.createElementNS("http://www.w3.org/2000/svg", "rect");
      v.setAttribute("rx", 0), v.setAttribute("ry", 0), v.setAttribute("width", L.width), v.setAttribute("height", L.height), g.insertBefore(v, g.firstChild);
    }
  }
};
function D(s) {
  let t;
  switch (s) {
    case 0:
      t = "aggregation";
      break;
    case 1:
      t = "extension";
      break;
    case 2:
      t = "composition";
      break;
    case 3:
      t = "dependency";
      break;
    case 4:
      t = "lollipop";
      break;
    default:
      t = "none";
  }
  return t;
}
const J = {
  setConf: V,
  draw: W
}, le = {
  parser: I,
  db: N,
  renderer: J,
  styles: M,
  init: (s) => {
    s.class || (s.class = {}), s.class.arrowMarkerAbsolute = s.arrowMarkerAbsolute, N.clear();
  }
};
export {
  le as diagram
};
