import { p as mn, f as Et } from "./flowDb-52e24d17-cc021458.js";
import { h as S, u as bn, r as kn, p as Sn, l as $n, d as J, f as be, G as Nn } from "./layout-81f7addf.js";
import { h as et, o as It, p as ke, c as Kt, k as Se, l as V, q as Tt, r as Mt, t as An } from "./index-68f3e231.js";
import { a as F, b as $e, i as Ne, c as M, e as Ae, d as Ee, f as En, g as Tn } from "./styles-26373982-8238abbc.js";
import "./createText-1f5f8f92-6ec05847.js";
import { s as Mn } from "./selectAll-6e7b6e2d.js";
import "vue";
import "./index-5219d011-7ff68c0d.js";
import "./edges-2e77835f-a4e77f27.js";
import "./svgDraw-2526cba0-a3c58dbe.js";
import "./line-ae1c0afe.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
function Cn(t) {
  if (!t.ok)
    throw new Error(t.status + " " + t.statusText);
  return t.text();
}
function Ln(t, e) {
  return fetch(t, e).then(Cn);
}
function In(t) {
  return (e, n) => Ln(e, n).then((r) => new DOMParser().parseFromString(r, t));
}
var Rn = In("image/svg+xml"), Pn = { value: () => {
} };
function Te() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new gt(n);
}
function gt(t) {
  this._ = t;
}
function Dn(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
gt.prototype = Te.prototype = {
  constructor: gt,
  on: function(t, e) {
    var n = this._, r = Dn(t + "", n), i, a = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++a < s; )
        if ((i = (t = r[a]).type) && (i = Bn(n[i], t.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++a < s; )
      if (i = (t = r[a]).type)
        n[i] = ie(n[i], t.name, e);
      else if (e == null)
        for (i in n)
          n[i] = ie(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new gt(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, a; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r)
      a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
      r[i].value.apply(e, n);
  }
};
function Bn(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function ie(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Pn, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Rt = "http://www.w3.org/1999/xhtml";
const ae = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Rt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function St(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), ae.hasOwnProperty(e) ? { space: ae[e], local: t } : t;
}
function Fn(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Rt && e.documentElement.namespaceURI === Rt ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Hn(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Me(t) {
  var e = St(t);
  return (e.local ? Hn : Fn)(e);
}
function Xn() {
}
function Qt(t) {
  return t == null ? Xn : function() {
    return this.querySelector(t);
  };
}
function qn(t) {
  typeof t != "function" && (t = Qt(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], s = a.length, o = r[i] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), o[c] = u);
  return new A(r, this._parents);
}
function Un(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Vn() {
  return [];
}
function Ce(t) {
  return t == null ? Vn : function() {
    return this.querySelectorAll(t);
  };
}
function Gn(t) {
  return function() {
    return Un(t.apply(this, arguments));
  };
}
function Yn(t) {
  typeof t == "function" ? t = Gn(t) : t = Ce(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var s = e[a], o = s.length, l, u = 0; u < o; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), i.push(l));
  return new A(r, i);
}
function Le(t) {
  return function() {
    return this.matches(t);
  };
}
function Ie(t) {
  return function(e) {
    return e.matches(t);
  };
}
var zn = Array.prototype.find;
function Wn(t) {
  return function() {
    return zn.call(this.children, t);
  };
}
function On() {
  return this.firstElementChild;
}
function Kn(t) {
  return this.select(t == null ? On : Wn(typeof t == "function" ? t : Ie(t)));
}
var Qn = Array.prototype.filter;
function Zn() {
  return Array.from(this.children);
}
function Jn(t) {
  return function() {
    return Qn.call(this.children, t);
  };
}
function jn(t) {
  return this.selectAll(t == null ? Zn : Jn(typeof t == "function" ? t : Ie(t)));
}
function tr(t) {
  typeof t != "function" && (t = Le(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], s = a.length, o = r[i] = [], l, u = 0; u < s; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && o.push(l);
  return new A(r, this._parents);
}
function Re(t) {
  return new Array(t.length);
}
function er() {
  return new A(this._enter || this._groups.map(Re), this._parents);
}
function wt(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
wt.prototype = {
  constructor: wt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function nr(t) {
  return function() {
    return t;
  };
}
function rr(t, e, n, r, i, a) {
  for (var s = 0, o, l = e.length, u = a.length; s < u; ++s)
    (o = e[s]) ? (o.__data__ = a[s], r[s] = o) : n[s] = new wt(t, a[s]);
  for (; s < l; ++s)
    (o = e[s]) && (i[s] = o);
}
function ir(t, e, n, r, i, a, s) {
  var o, l, u = /* @__PURE__ */ new Map(), c = e.length, h = a.length, f = new Array(c), d;
  for (o = 0; o < c; ++o)
    (l = e[o]) && (f[o] = d = s.call(l, l.__data__, o, e) + "", u.has(d) ? i[o] = l : u.set(d, l));
  for (o = 0; o < h; ++o)
    d = s.call(t, a[o], o, a) + "", (l = u.get(d)) ? (r[o] = l, l.__data__ = a[o], u.delete(d)) : n[o] = new wt(t, a[o]);
  for (o = 0; o < c; ++o)
    (l = e[o]) && u.get(f[o]) === l && (i[o] = l);
}
function ar(t) {
  return t.__data__;
}
function sr(t, e) {
  if (!arguments.length)
    return Array.from(this, ar);
  var n = e ? ir : rr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = nr(t));
  for (var a = i.length, s = new Array(a), o = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, d = or(t.call(c, c && c.__data__, u, r)), p = d.length, y = o[u] = new Array(p), g = s[u] = new Array(p), v = l[u] = new Array(f);
    n(c, h, y, g, v, d, e);
    for (var w = 0, k = 0, x, P; w < p; ++w)
      if (x = y[w]) {
        for (w >= k && (k = w + 1); !(P = g[k]) && ++k < p; )
          ;
        x._next = P || null;
      }
  }
  return s = new A(s, r), s._enter = o, s._exit = l, s;
}
function or(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function lr() {
  return new A(this._exit || this._groups.map(Re), this._parents);
}
function cr(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function ur(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, s = Math.min(i, a), o = new Array(i), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], h = u.length, f = o[l] = new Array(h), d, p = 0; p < h; ++p)
      (d = u[p] || c[p]) && (f[p] = d);
  for (; l < i; ++l)
    o[l] = n[l];
  return new A(o, this._parents);
}
function fr() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], s; --i >= 0; )
      (s = r[i]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function hr(t) {
  t || (t = dr);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var s = n[a], o = s.length, l = i[a] = new Array(o), u, c = 0; c < o; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(e);
  }
  return new A(i, this._parents).order();
}
function dr(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function pr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function gr() {
  return Array.from(this);
}
function yr() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var s = r[i];
      if (s)
        return s;
    }
  return null;
}
function vr() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function wr() {
  return !this.node();
}
function _r(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, s = i.length, o; a < s; ++a)
      (o = i[a]) && t.call(o, o.__data__, a, i);
  return this;
}
function xr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function mr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function br(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function kr(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Sr(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function $r(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Nr(t, e) {
  var n = St(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? mr : xr : typeof e == "function" ? n.local ? $r : Sr : n.local ? kr : br)(n, e));
}
function Pe(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ar(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Er(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Tr(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Mr(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ar : typeof e == "function" ? Tr : Er)(t, e, n ?? "")) : Q(this.node(), t);
}
function Q(t, e) {
  return t.style.getPropertyValue(e) || Pe(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Cr(t) {
  return function() {
    delete this[t];
  };
}
function Lr(t, e) {
  return function() {
    this[t] = e;
  };
}
function Ir(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Rr(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Cr : typeof e == "function" ? Ir : Lr)(t, e)) : this.node()[t];
}
function De(t) {
  return t.trim().split(/^|\s+/);
}
function Zt(t) {
  return t.classList || new Be(t);
}
function Be(t) {
  this._node = t, this._names = De(t.getAttribute("class") || "");
}
Be.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Fe(t, e) {
  for (var n = Zt(t), r = -1, i = e.length; ++r < i; )
    n.add(e[r]);
}
function He(t, e) {
  for (var n = Zt(t), r = -1, i = e.length; ++r < i; )
    n.remove(e[r]);
}
function Pr(t) {
  return function() {
    Fe(this, t);
  };
}
function Dr(t) {
  return function() {
    He(this, t);
  };
}
function Br(t, e) {
  return function() {
    (e.apply(this, arguments) ? Fe : He)(this, t);
  };
}
function Fr(t, e) {
  var n = De(t + "");
  if (arguments.length < 2) {
    for (var r = Zt(this.node()), i = -1, a = n.length; ++i < a; )
      if (!r.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Br : e ? Pr : Dr)(n, e));
}
function Hr() {
  this.textContent = "";
}
function Xr(t) {
  return function() {
    this.textContent = t;
  };
}
function qr(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ur(t) {
  return arguments.length ? this.each(t == null ? Hr : (typeof t == "function" ? qr : Xr)(t)) : this.node().textContent;
}
function Vr() {
  this.innerHTML = "";
}
function Gr(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Yr(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function zr(t) {
  return arguments.length ? this.each(t == null ? Vr : (typeof t == "function" ? Yr : Gr)(t)) : this.node().innerHTML;
}
function Wr() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Or() {
  return this.each(Wr);
}
function Kr() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qr() {
  return this.each(Kr);
}
function Zr(t) {
  var e = typeof t == "function" ? t : Me(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Jr() {
  return null;
}
function jr(t, e) {
  var n = typeof t == "function" ? t : Me(t), r = e == null ? Jr : typeof e == "function" ? e : Qt(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ti() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ei() {
  return this.each(ti);
}
function ni() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ri() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ii(t) {
  return this.select(t ? ri : ni);
}
function ai(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function si(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function oi(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function li(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function ci(t, e, n) {
  return function() {
    var r = this.__on, i, a = si(e);
    if (r) {
      for (var s = 0, o = r.length; s < o; ++s)
        if ((i = r[s]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function ui(t, e, n) {
  var r = oi(t + ""), i, a = r.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var l = 0, u = o.length, c; l < u; ++l)
        for (i = 0, c = o[l]; i < a; ++i)
          if ((s = r[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (o = e ? ci : li, i = 0; i < a; ++i)
    this.each(o(r[i], e, n));
  return this;
}
function Xe(t, e, n) {
  var r = Pe(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function fi(t, e) {
  return function() {
    return Xe(this, t, e);
  };
}
function hi(t, e) {
  return function() {
    return Xe(this, t, e.apply(this, arguments));
  };
}
function di(t, e) {
  return this.each((typeof e == "function" ? hi : fi)(t, e));
}
function* pi() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, s; i < a; ++i)
      (s = r[i]) && (yield s);
}
var qe = [null];
function A(t, e) {
  this._groups = t, this._parents = e;
}
function ct() {
  return new A([[document.documentElement]], qe);
}
function gi() {
  return this;
}
A.prototype = ct.prototype = {
  constructor: A,
  select: qn,
  selectAll: Yn,
  selectChild: Kn,
  selectChildren: jn,
  filter: tr,
  data: sr,
  enter: er,
  exit: lr,
  join: cr,
  merge: ur,
  selection: gi,
  order: fr,
  sort: hr,
  call: pr,
  nodes: gr,
  node: yr,
  size: vr,
  empty: wr,
  each: _r,
  attr: Nr,
  style: Mr,
  property: Rr,
  classed: Fr,
  text: Ur,
  html: zr,
  raise: Or,
  lower: Qr,
  append: Zr,
  insert: jr,
  remove: ei,
  clone: ii,
  datum: ai,
  on: ui,
  dispatch: di,
  [Symbol.iterator]: pi
};
function E(t) {
  return typeof t == "string" ? new A([[document.querySelector(t)]], [document.documentElement]) : new A([[t]], qe);
}
function Jt(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Ue(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e)
    n[r] = e[r];
  return n;
}
function ut() {
}
var at = 0.7, _t = 1 / at, K = "\\s*([+-]?\\d+)\\s*", st = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", L = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", yi = /^#([0-9a-f]{3,8})$/, vi = new RegExp(`^rgb\\(${K},${K},${K}\\)$`), wi = new RegExp(`^rgb\\(${L},${L},${L}\\)$`), _i = new RegExp(`^rgba\\(${K},${K},${K},${st}\\)$`), xi = new RegExp(`^rgba\\(${L},${L},${L},${st}\\)$`), mi = new RegExp(`^hsl\\(${st},${L},${L}\\)$`), bi = new RegExp(`^hsla\\(${st},${L},${L},${st}\\)$`), se = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Jt(ut, ot, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: oe,
  // Deprecated! Use color.formatHex.
  formatHex: oe,
  formatHex8: ki,
  formatHsl: Si,
  formatRgb: le,
  toString: le
});
function oe() {
  return this.rgb().formatHex();
}
function ki() {
  return this.rgb().formatHex8();
}
function Si() {
  return Ve(this).formatHsl();
}
function le() {
  return this.rgb().formatRgb();
}
function ot(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = yi.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ce(e) : n === 3 ? new $(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ht(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ht(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = vi.exec(t)) ? new $(e[1], e[2], e[3], 1) : (e = wi.exec(t)) ? new $(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = _i.exec(t)) ? ht(e[1], e[2], e[3], e[4]) : (e = xi.exec(t)) ? ht(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = mi.exec(t)) ? he(e[1], e[2] / 100, e[3] / 100, 1) : (e = bi.exec(t)) ? he(e[1], e[2] / 100, e[3] / 100, e[4]) : se.hasOwnProperty(t) ? ce(se[t]) : t === "transparent" ? new $(NaN, NaN, NaN, 0) : null;
}
function ce(t) {
  return new $(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ht(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new $(t, e, n, r);
}
function $i(t) {
  return t instanceof ut || (t = ot(t)), t ? (t = t.rgb(), new $(t.r, t.g, t.b, t.opacity)) : new $();
}
function Pt(t, e, n, r) {
  return arguments.length === 1 ? $i(t) : new $(t, e, n, r ?? 1);
}
function $(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Jt($, Pt, Ue(ut, {
  brighter(t) {
    return t = t == null ? _t : Math.pow(_t, t), new $(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? at : Math.pow(at, t), new $(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $(Y(this.r), Y(this.g), Y(this.b), xt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ue,
  // Deprecated! Use color.formatHex.
  formatHex: ue,
  formatHex8: Ni,
  formatRgb: fe,
  toString: fe
}));
function ue() {
  return `#${G(this.r)}${G(this.g)}${G(this.b)}`;
}
function Ni() {
  return `#${G(this.r)}${G(this.g)}${G(this.b)}${G((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function fe() {
  const t = xt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Y(this.r)}, ${Y(this.g)}, ${Y(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function xt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Y(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function G(t) {
  return t = Y(t), (t < 16 ? "0" : "") + t.toString(16);
}
function he(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new T(t, e, n, r);
}
function Ve(t) {
  if (t instanceof T)
    return new T(t.h, t.s, t.l, t.opacity);
  if (t instanceof ut || (t = ot(t)), !t)
    return new T();
  if (t instanceof T)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), s = NaN, o = a - i, l = (a + i) / 2;
  return o ? (e === a ? s = (n - r) / o + (n < r) * 6 : n === a ? s = (r - e) / o + 2 : s = (e - n) / o + 4, o /= l < 0.5 ? a + i : 2 - a - i, s *= 60) : o = l > 0 && l < 1 ? 0 : s, new T(s, o, l, t.opacity);
}
function Ai(t, e, n, r) {
  return arguments.length === 1 ? Ve(t) : new T(t, e, n, r ?? 1);
}
function T(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Jt(T, Ai, Ue(ut, {
  brighter(t) {
    return t = t == null ? _t : Math.pow(_t, t), new T(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? at : Math.pow(at, t), new T(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new $(
      Ct(t >= 240 ? t - 240 : t + 120, i, r),
      Ct(t, i, r),
      Ct(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new T(de(this.h), dt(this.s), dt(this.l), xt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = xt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${de(this.h)}, ${dt(this.s) * 100}%, ${dt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function de(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function dt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ct(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Ge = (t) => () => t;
function Ei(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ti(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Mi(t) {
  return (t = +t) == 1 ? Ye : function(e, n) {
    return n - e ? Ti(e, n, t) : Ge(isNaN(e) ? n : e);
  };
}
function Ye(t, e) {
  var n = e - t;
  return n ? Ei(t, n) : Ge(isNaN(t) ? e : t);
}
const pe = function t(e) {
  var n = Mi(e);
  function r(i, a) {
    var s = n((i = Pt(i)).r, (a = Pt(a)).r), o = n(i.g, a.g), l = n(i.b, a.b), u = Ye(i.opacity, a.opacity);
    return function(c) {
      return i.r = s(c), i.g = o(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function X(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
var Dt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Lt = new RegExp(Dt.source, "g");
function Ci(t) {
  return function() {
    return t;
  };
}
function Li(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ii(t, e) {
  var n = Dt.lastIndex = Lt.lastIndex = 0, r, i, a, s = -1, o = [], l = [];
  for (t = t + "", e = e + ""; (r = Dt.exec(t)) && (i = Lt.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), o[s] ? o[s] += a : o[++s] = a), (r = r[0]) === (i = i[0]) ? o[s] ? o[s] += i : o[++s] = i : (o[++s] = null, l.push({ i: s, x: X(r, i) })), n = Lt.lastIndex;
  return n < e.length && (a = e.slice(n), o[s] ? o[s] += a : o[++s] = a), o.length < 2 ? l[0] ? Li(l[0].x) : Ci(e) : (e = l.length, function(u) {
    for (var c = 0, h; c < e; ++c)
      o[(h = l[c]).i] = h.x(u);
    return o.join("");
  });
}
var ge = 180 / Math.PI, Bt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ze(t, e, n, r, i, a) {
  var s, o, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * ge,
    skewX: Math.atan(l) * ge,
    scaleX: s,
    scaleY: o
  };
}
var pt;
function Ri(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Bt : ze(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Pi(t) {
  return t == null || (pt || (pt = document.createElementNS("http://www.w3.org/2000/svg", "g")), pt.setAttribute("transform", t), !(t = pt.transform.baseVal.consolidate())) ? Bt : (t = t.matrix, ze(t.a, t.b, t.c, t.d, t.e, t.f));
}
function We(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, d, p) {
    if (u !== h || c !== f) {
      var y = d.push("translate(", null, e, null, n);
      p.push({ i: y - 4, x: X(u, h) }, { i: y - 2, x: X(c, f) });
    } else
      (h || f) && d.push("translate(" + h + e + f + n);
  }
  function s(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: X(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function o(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: X(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, d, p) {
    if (u !== h || c !== f) {
      var y = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: y - 4, x: X(u, h) }, { i: y - 2, x: X(c, f) });
    } else
      (h !== 1 || f !== 1) && d.push(i(d) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), s(u.rotate, c.rotate, h, f), o(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(d) {
      for (var p = -1, y = f.length, g; ++p < y; )
        h[(g = f[p]).i] = g.x(d);
      return h.join("");
    };
  };
}
var Di = We(Ri, "px, ", "px)", "deg)"), Bi = We(Pi, ", ", ")", ")"), Z = 0, nt = 0, j = 0, Oe = 1e3, mt, rt, bt = 0, z = 0, $t = 0, lt = typeof performance == "object" && performance.now ? performance : Date, Ke = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function jt() {
  return z || (Ke(Fi), z = lt.now() + $t);
}
function Fi() {
  z = 0;
}
function kt() {
  this._call = this._time = this._next = null;
}
kt.prototype = Qe.prototype = {
  constructor: kt,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? jt() : +n) + (e == null ? 0 : +e), !this._next && rt !== this && (rt ? rt._next = this : mt = this, rt = this), this._call = t, this._time = n, Ft();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ft());
  }
};
function Qe(t, e, n) {
  var r = new kt();
  return r.restart(t, e, n), r;
}
function Hi() {
  jt(), ++Z;
  for (var t = mt, e; t; )
    (e = z - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Z;
}
function ye() {
  z = (bt = lt.now()) + $t, Z = nt = 0;
  try {
    Hi();
  } finally {
    Z = 0, qi(), z = 0;
  }
}
function Xi() {
  var t = lt.now(), e = t - bt;
  e > Oe && ($t -= e, bt = t);
}
function qi() {
  for (var t, e = mt, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : mt = n);
  rt = t, Ft(r);
}
function Ft(t) {
  if (!Z) {
    nt && (nt = clearTimeout(nt));
    var e = t - z;
    e > 24 ? (t < 1 / 0 && (nt = setTimeout(ye, t - lt.now() - $t)), j && (j = clearInterval(j))) : (j || (bt = lt.now(), j = setInterval(Xi, Oe)), Z = 1, Ke(ye));
  }
}
function ve(t, e, n) {
  var r = new kt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Ui = Te("start", "end", "cancel", "interrupt"), Vi = [], Ze = 0, we = 1, Ht = 2, yt = 3, _e = 4, Xt = 5, vt = 6;
function Nt(t, e, n, r, i, a) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  Gi(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ui,
    tween: Vi,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ze
  });
}
function te(t, e) {
  var n = C(t, e);
  if (n.state > Ze)
    throw new Error("too late; already scheduled");
  return n;
}
function I(t, e) {
  var n = C(t, e);
  if (n.state > yt)
    throw new Error("too late; already running");
  return n;
}
function C(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function Gi(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Qe(a, 0, n.time);
  function a(u) {
    n.state = we, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, h, f, d;
    if (n.state !== we)
      return l();
    for (c in r)
      if (d = r[c], d.name === n.name) {
        if (d.state === yt)
          return ve(s);
        d.state === _e ? (d.state = vt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < e && (d.state = vt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (ve(function() {
      n.state === yt && (n.state = _e, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Ht, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ht) {
      for (n.state = yt, i = new Array(f = n.tween.length), c = 0, h = -1; c < f; ++c)
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function o(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Xt, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    n.state === Xt && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = vt, n.timer.stop(), delete r[e];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function Yi(t, e) {
  var n = t.__transition, r, i, a = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Ht && r.state < Xt, r.state = vt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    a && delete t.__transition;
  }
}
function zi(t) {
  return this.each(function() {
    Yi(this, t);
  });
}
function Wi(t, e) {
  var n, r;
  return function() {
    var i = I(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var s = 0, o = r.length; s < o; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Oi(t, e, n) {
  var r, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var a = I(this, t), s = a.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var o = { name: e, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === e) {
          i[l] = o;
          break;
        }
      l === u && i.push(o);
    }
    a.tween = i;
  };
}
function Ki(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = C(this.node(), n).tween, i = 0, a = r.length, s; i < a; ++i)
      if ((s = r[i]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Wi : Oi)(n, t, e));
}
function ee(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = I(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return C(i, r).value[e];
  };
}
function Je(t, e) {
  var n;
  return (typeof e == "number" ? X : e instanceof ot ? pe : (n = ot(e)) ? (e = n, pe) : Ii)(t, e);
}
function Qi(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Zi(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ji(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var s = this.getAttribute(t);
    return s === i ? null : s === r ? a : a = e(r = s, n);
  };
}
function ji(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === i ? null : s === r ? a : a = e(r = s, n);
  };
}
function ta(t, e, n) {
  var r, i, a;
  return function() {
    var s, o = n(this), l;
    return o == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = o + "", s === l ? null : s === r && l === i ? a : (i = l, a = e(r = s, o)));
  };
}
function ea(t, e, n) {
  var r, i, a;
  return function() {
    var s, o = n(this), l;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = o + "", s === l ? null : s === r && l === i ? a : (i = l, a = e(r = s, o)));
  };
}
function na(t, e) {
  var n = St(t), r = n === "transform" ? Bi : Je;
  return this.attrTween(t, typeof e == "function" ? (n.local ? ea : ta)(n, r, ee(this, "attr." + t, e)) : e == null ? (n.local ? Zi : Qi)(n) : (n.local ? ji : Ji)(n, r, e));
}
function ra(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function ia(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function aa(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && ia(t, a)), n;
  }
  return i._value = e, i;
}
function sa(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && ra(t, a)), n;
  }
  return i._value = e, i;
}
function oa(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var r = St(t);
  return this.tween(n, (r.local ? aa : sa)(r, e));
}
function la(t, e) {
  return function() {
    te(this, t).delay = +e.apply(this, arguments);
  };
}
function ca(t, e) {
  return e = +e, function() {
    te(this, t).delay = e;
  };
}
function ua(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? la : ca)(e, t)) : C(this.node(), e).delay;
}
function fa(t, e) {
  return function() {
    I(this, t).duration = +e.apply(this, arguments);
  };
}
function ha(t, e) {
  return e = +e, function() {
    I(this, t).duration = e;
  };
}
function da(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? fa : ha)(e, t)) : C(this.node(), e).duration;
}
function pa(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    I(this, t).ease = e;
  };
}
function ga(t) {
  var e = this._id;
  return arguments.length ? this.each(pa(e, t)) : C(this.node(), e).ease;
}
function ya(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    I(this, t).ease = n;
  };
}
function va(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(ya(this._id, t));
}
function wa(t) {
  typeof t != "function" && (t = Le(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], s = a.length, o = r[i] = [], l, u = 0; u < s; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && o.push(l);
  return new B(r, this._parents, this._name, this._id);
}
function _a(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), s = new Array(r), o = 0; o < a; ++o)
    for (var l = e[o], u = n[o], c = l.length, h = s[o] = new Array(c), f, d = 0; d < c; ++d)
      (f = l[d] || u[d]) && (h[d] = f);
  for (; o < r; ++o)
    s[o] = e[o];
  return new B(s, this._parents, this._name, this._id);
}
function xa(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ma(t, e, n) {
  var r, i, a = xa(e) ? te : I;
  return function() {
    var s = a(this, t), o = s.on;
    o !== r && (i = (r = o).copy()).on(e, n), s.on = i;
  };
}
function ba(t, e) {
  var n = this._id;
  return arguments.length < 2 ? C(this.node(), n).on.on(t) : this.each(ma(n, t, e));
}
function ka(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function Sa() {
  return this.on("end.remove", ka(this._id));
}
function $a(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Qt(t));
  for (var r = this._groups, i = r.length, a = new Array(i), s = 0; s < i; ++s)
    for (var o = r[s], l = o.length, u = a[s] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = o[f]) && (h = t.call(c, c.__data__, f, o)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Nt(u[f], e, n, f, u, C(c, n)));
  return new B(a, this._parents, e, n);
}
function Na(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ce(t));
  for (var r = this._groups, i = r.length, a = [], s = [], o = 0; o < i; ++o)
    for (var l = r[o], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), d, p = C(c, n), y = 0, g = f.length; y < g; ++y)
          (d = f[y]) && Nt(d, e, n, y, f, p);
        a.push(f), s.push(c);
      }
  return new B(a, s, e, n);
}
var Aa = ct.prototype.constructor;
function Ea() {
  return new Aa(this._groups, this._parents);
}
function Ta(t, e) {
  var n, r, i;
  return function() {
    var a = Q(this, t), s = (this.style.removeProperty(t), Q(this, t));
    return a === s ? null : a === n && s === r ? i : i = e(n = a, r = s);
  };
}
function je(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ma(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var s = Q(this, t);
    return s === i ? null : s === r ? a : a = e(r = s, n);
  };
}
function Ca(t, e, n) {
  var r, i, a;
  return function() {
    var s = Q(this, t), o = n(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(t), Q(this, t))), s === l ? null : s === r && l === i ? a : (i = l, a = e(r = s, o));
  };
}
function La(t, e) {
  var n, r, i, a = "style." + e, s = "end." + a, o;
  return function() {
    var l = I(this, t), u = l.on, c = l.value[a] == null ? o || (o = je(e)) : void 0;
    (u !== n || i !== c) && (r = (n = u).copy()).on(s, i = c), l.on = r;
  };
}
function Ia(t, e, n) {
  var r = (t += "") == "transform" ? Di : Je;
  return e == null ? this.styleTween(t, Ta(t, r)).on("end.style." + t, je(t)) : typeof e == "function" ? this.styleTween(t, Ca(t, r, ee(this, "style." + t, e))).each(La(this._id, t)) : this.styleTween(t, Ma(t, r, e), n).on("end.style." + t, null);
}
function Ra(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Pa(t, e, n) {
  var r, i;
  function a() {
    var s = e.apply(this, arguments);
    return s !== i && (r = (i = s) && Ra(t, s, n)), r;
  }
  return a._value = e, a;
}
function Da(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, Pa(t, e, n ?? ""));
}
function Ba(t) {
  return function() {
    this.textContent = t;
  };
}
function Fa(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ha(t) {
  return this.tween("text", typeof t == "function" ? Fa(ee(this, "text", t)) : Ba(t == null ? "" : t + ""));
}
function Xa(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function qa(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Xa(i)), e;
  }
  return r._value = t, r;
}
function Ua(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, qa(t));
}
function Va() {
  for (var t = this._name, e = this._id, n = tn(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var s = r[a], o = s.length, l, u = 0; u < o; ++u)
      if (l = s[u]) {
        var c = C(l, e);
        Nt(l, t, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new B(r, this._parents, t, n);
}
function Ga() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, s) {
    var o = { value: s }, l = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = I(this, r), c = u.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), u.on = e;
    }), i === 0 && a();
  });
}
var Ya = 0;
function B(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function tn() {
  return ++Ya;
}
var D = ct.prototype;
B.prototype = {
  constructor: B,
  select: $a,
  selectAll: Na,
  selectChild: D.selectChild,
  selectChildren: D.selectChildren,
  filter: wa,
  merge: _a,
  selection: Ea,
  transition: Va,
  call: D.call,
  nodes: D.nodes,
  node: D.node,
  size: D.size,
  empty: D.empty,
  each: D.each,
  on: ba,
  attr: na,
  attrTween: oa,
  style: Ia,
  styleTween: Da,
  text: Ha,
  textTween: Ua,
  remove: Sa,
  tween: Ki,
  delay: ua,
  duration: da,
  ease: ga,
  easeVarying: va,
  end: Ga,
  [Symbol.iterator]: D[Symbol.iterator]
};
function za(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Wa = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: za
};
function Oa(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Ka(t) {
  var e, n;
  t instanceof B ? (e = t._id, t = t._name) : (e = tn(), (n = Wa).time = jt(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var s = r[a], o = s.length, l, u = 0; u < o; ++u)
      (l = s[u]) && Nt(l, t, e, u, s, n || Oa(l, e));
  return new B(r, this._parents, t, e);
}
ct.prototype.interrupt = zi;
ct.prototype.transition = Ka;
const qt = Math.PI, Ut = 2 * qt, U = 1e-6, Qa = Ut - U;
function en(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Za(t) {
  let e = Math.floor(t);
  if (!(e >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (e > 15)
    return en;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Ja {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? en : Za(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, s) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +s}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0)
      throw new Error(`negative radius: ${a}`);
    let s = this._x1, o = this._y1, l = r - e, u = i - n, c = s - e, h = o - n, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (f > U)
      if (!(Math.abs(h * l - u * c) > U) || !a)
        this._append`L${this._x1 = e},${this._y1 = n}`;
      else {
        let d = r - s, p = i - o, y = l * l + u * u, g = d * d + p * p, v = Math.sqrt(y), w = Math.sqrt(f), k = a * Math.tan((qt - Math.acos((y + f - g) / (2 * v * w))) / 2), x = k / w, P = k / v;
        Math.abs(x - 1) > U && this._append`L${e + x * c},${n + x * h}`, this._append`A${a},${a},0,0,${+(h * d > c * p)},${this._x1 = e + P * l},${this._y1 = n + P * u}`;
      }
  }
  arc(e, n, r, i, a, s) {
    if (e = +e, n = +n, r = +r, s = !!s, r < 0)
      throw new Error(`negative radius: ${r}`);
    let o = r * Math.cos(i), l = r * Math.sin(i), u = e + o, c = n + l, h = 1 ^ s, f = s ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > U || Math.abs(this._y1 - c) > U) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Ut + Ut), f > Qa ? this._append`A${r},${r},0,1,${h},${e - o},${n - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > U && this._append`A${r},${r},0,${+(f >= qt)},${h},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function O(t) {
  return function() {
    return t;
  };
}
function ja(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length)
      return e;
    if (n == null)
      e = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      e = r;
    }
    return t;
  }, () => new Ja(e);
}
function ts(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function nn(t) {
  this._context = t;
}
nn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, e) {
    switch (t = +t, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, e);
        break;
    }
  }
};
function rn(t) {
  return new nn(t);
}
function es(t) {
  return t[0];
}
function ns(t) {
  return t[1];
}
function rs(t, e) {
  var n = O(!0), r = null, i = rn, a = null, s = ja(o);
  t = typeof t == "function" ? t : t === void 0 ? es : O(t), e = typeof e == "function" ? e : e === void 0 ? ns : O(e);
  function o(l) {
    var u, c = (l = ts(l)).length, h, f = !1, d;
    for (r == null && (a = i(d = s())), u = 0; u <= c; ++u)
      !(u < c && n(h = l[u], u, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, l), +e(h, u, l));
    if (d)
      return a = null, d + "" || null;
  }
  return o.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : O(+l), o) : t;
  }, o.y = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : O(+l), o) : e;
  }, o.defined = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : O(!!l), o) : n;
  }, o.curve = function(l) {
    return arguments.length ? (i = l, r != null && (a = i(r)), o) : i;
  }, o.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = i(r = l), o) : r;
  }, o;
}
function it(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
it.prototype = {
  constructor: it,
  scale: function(t) {
    return t === 1 ? this : new it(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new it(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
it.prototype;
var Vt = {
  normal: as,
  vee: ss,
  undirected: os
};
function is(t) {
  Vt = t;
}
function as(t, e, n, r) {
  var i = t.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), a = i.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  F(a, n[r + "Style"]), n[r + "Class"] && a.attr("class", n[r + "Class"]);
}
function ss(t, e, n, r) {
  var i = t.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), a = i.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  F(a, n[r + "Style"]), n[r + "Class"] && a.attr("class", n[r + "Class"]);
}
function os(t, e, n, r) {
  var i = t.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), a = i.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  F(a, n[r + "Style"]), n[r + "Class"] && a.attr("class", n[r + "Class"]);
}
function ls(t, e) {
  var n = t;
  return n.node().appendChild(e.label), F(n, e.labelStyle), n;
}
function cs(t, e) {
  for (var n = t.append("text"), r = us(e.label).split(`
`), i = 0; i < r.length; i++)
    n.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(r[i]);
  return F(n, e.labelStyle), n;
}
function us(t) {
  for (var e = "", n = !1, r, i = 0; i < t.length; ++i)
    if (r = t[i], n) {
      switch (r) {
        case "n":
          e += `
`;
          break;
        default:
          e += r;
      }
      n = !1;
    } else
      r === "\\" ? n = !0 : e += r;
  return e;
}
function ne(t, e, n) {
  var r = e.label, i = t.append("g");
  e.labelType === "svg" ? ls(i, e) : typeof r != "string" || e.labelType === "html" ? $e(i, e) : cs(i, e);
  var a = i.node().getBBox(), s;
  switch (n) {
    case "top":
      s = -e.height / 2;
      break;
    case "bottom":
      s = e.height / 2 - a.height;
      break;
    default:
      s = -a.height / 2;
  }
  return i.attr("transform", "translate(" + -a.width / 2 + "," + s + ")"), i;
}
var Gt = function(t, e) {
  var n = e.nodes().filter(function(a) {
    return Ne(e, a);
  }), r = t.selectAll("g.cluster").data(n, function(a) {
    return a;
  });
  M(r.exit(), e).style("opacity", 0).remove();
  var i = r.enter().append("g").attr("class", "cluster").attr("id", function(a) {
    var s = e.node(a);
    return s.id;
  }).style("opacity", 0).each(function(a) {
    var s = e.node(a), o = E(this);
    E(this).append("rect");
    var l = o.append("g").attr("class", "label");
    ne(l, s, s.clusterLabelPos);
  });
  return r = r.merge(i), r = M(r, e).style("opacity", 1), r.selectAll("rect").each(function(a) {
    var s = e.node(a), o = E(this);
    F(o, s.style);
  }), r;
};
function fs(t) {
  Gt = t;
}
let Yt = function(t, e) {
  var n = t.selectAll("g.edgeLabel").data(e.edges(), function(i) {
    return Ae(i);
  }).classed("update", !0);
  n.exit().remove(), n.enter().append("g").classed("edgeLabel", !0).style("opacity", 0), n = t.selectAll("g.edgeLabel"), n.each(function(i) {
    var a = E(this);
    a.select(".label").remove();
    var s = e.edge(i), o = ne(a, e.edge(i), 0).classed("label", !0), l = o.node().getBBox();
    s.labelId && o.attr("id", s.labelId), S(s, "width") || (s.width = l.width), S(s, "height") || (s.height = l.height);
  });
  var r;
  return n.exit ? r = n.exit() : r = n.selectAll(null), M(r, e).style("opacity", 0).remove(), n;
};
function hs(t) {
  Yt = t;
}
function xe(t, e) {
  return t.intersect(e);
}
var zt = function(t, e, n) {
  var r = t.selectAll("g.edgePath").data(e.edges(), function(s) {
    return Ae(s);
  }).classed("update", !0), i = vs(r, e);
  ws(r, e);
  var a = r.merge !== void 0 ? r.merge(i) : r;
  return M(a, e).style("opacity", 1), a.each(function(s) {
    var o = E(this), l = e.edge(s);
    l.elem = this, l.id && o.attr("id", l.id), Ee(
      o,
      l.class,
      (o.classed("update") ? "update " : "") + "edgePath"
    );
  }), a.selectAll("path.path").each(function(s) {
    var o = e.edge(s);
    o.arrowheadId = bn("arrowhead");
    var l = E(this).attr("marker-end", function() {
      return "url(" + ps(location.href, o.arrowheadId) + ")";
    }).style("fill", "none");
    M(l, e).attr("d", function(u) {
      return gs(e, u);
    }), F(l, o.style);
  }), a.selectAll("defs *").remove(), a.selectAll("defs").each(function(s) {
    var o = e.edge(s), l = n[o.arrowhead];
    l(E(this), o.arrowheadId, o, "arrowhead");
  }), a;
};
function ds(t) {
  zt = t;
}
function ps(t, e) {
  var n = t.split("#")[0];
  return n + "#" + e;
}
function gs(t, e) {
  var n = t.edge(e), r = t.node(e.v), i = t.node(e.w), a = n.points.slice(1, n.points.length - 1);
  return a.unshift(xe(r, a[0])), a.push(xe(i, a[a.length - 1])), an(n, a);
}
function an(t, e) {
  var n = (rs || Rn.line)().x(function(r) {
    return r.x;
  }).y(function(r) {
    return r.y;
  });
  return (n.curve || n.interpolate)(t.curve), n(e);
}
function ys(t) {
  var e = t.getBBox(), n = t.ownerSVGElement.getScreenCTM().inverse().multiply(t.getScreenCTM()).translate(e.width / 2, e.height / 2);
  return { x: n.e, y: n.f };
}
function vs(t, e) {
  var n = t.enter().append("g").attr("class", "edgePath").style("opacity", 0);
  return n.append("path").attr("class", "path").attr("d", function(r) {
    var i = e.edge(r), a = e.node(r.v).elem, s = kn(i.points.length).map(function() {
      return ys(a);
    });
    return an(i, s);
  }), n.append("defs"), n;
}
function ws(t, e) {
  var n = t.exit();
  M(n, e).style("opacity", 0).remove();
}
var Wt = function(t, e, n) {
  var r = e.nodes().filter(function(s) {
    return !Ne(e, s);
  }), i = t.selectAll("g.node").data(r, function(s) {
    return s;
  }).classed("update", !0);
  i.exit().remove(), i.enter().append("g").attr("class", "node").style("opacity", 0), i = t.selectAll("g.node"), i.each(function(s) {
    var o = e.node(s), l = E(this);
    Ee(
      l,
      o.class,
      (l.classed("update") ? "update " : "") + "node"
    ), l.select("g.label").remove();
    var u = l.append("g").attr("class", "label"), c = ne(u, o), h = n[o.shape], f = Sn(c.node().getBBox(), "width", "height");
    o.elem = this, o.id && l.attr("id", o.id), o.labelId && u.attr("id", o.labelId), S(o, "width") && (f.width = o.width), S(o, "height") && (f.height = o.height), f.width += o.paddingLeft + o.paddingRight, f.height += o.paddingTop + o.paddingBottom, u.attr(
      "transform",
      "translate(" + (o.paddingLeft - o.paddingRight) / 2 + "," + (o.paddingTop - o.paddingBottom) / 2 + ")"
    );
    var d = E(this);
    d.select(".label-container").remove();
    var p = h(d, f, o).classed("label-container", !0);
    F(p, o.style);
    var y = p.node().getBBox();
    o.width = y.width, o.height = y.height;
  });
  var a;
  return i.exit ? a = i.exit() : a = i.selectAll(null), M(a, e).style("opacity", 0).remove(), i;
};
function _s(t) {
  Wt = t;
}
function xs(t, e) {
  var n = t.filter(function() {
    return !E(this).classed("update");
  });
  function r(i) {
    var a = e.node(i);
    return "translate(" + a.x + "," + a.y + ")";
  }
  n.attr("transform", r), M(t, e).style("opacity", 1).attr("transform", r), M(n.selectAll("rect"), e).attr("width", function(i) {
    return e.node(i).width;
  }).attr("height", function(i) {
    return e.node(i).height;
  }).attr("x", function(i) {
    var a = e.node(i);
    return -a.width / 2;
  }).attr("y", function(i) {
    var a = e.node(i);
    return -a.height / 2;
  });
}
function ms(t, e) {
  var n = t.filter(function() {
    return !E(this).classed("update");
  });
  function r(i) {
    var a = e.edge(i);
    return S(a, "x") ? "translate(" + a.x + "," + a.y + ")" : "";
  }
  n.attr("transform", r), M(t, e).style("opacity", 1).attr("transform", r);
}
function bs(t, e) {
  var n = t.filter(function() {
    return !E(this).classed("update");
  });
  function r(i) {
    var a = e.node(i);
    return "translate(" + a.x + "," + a.y + ")";
  }
  n.attr("transform", r), M(t, e).style("opacity", 1).attr("transform", r);
}
function sn(t, e, n, r) {
  var i = t.x, a = t.y, s = i - r.x, o = a - r.y, l = Math.sqrt(e * e * o * o + n * n * s * s), u = Math.abs(e * n * s / l);
  r.x < i && (u = -u);
  var c = Math.abs(e * n * o / l);
  return r.y < a && (c = -c), { x: i + u, y: a + c };
}
function ks(t, e, n) {
  return sn(t, e, e, n);
}
function Ss(t, e, n, r) {
  var i, a, s, o, l, u, c, h, f, d, p, y, g, v, w;
  if (i = e.y - t.y, s = t.x - e.x, l = e.x * t.y - t.x * e.y, f = i * n.x + s * n.y + l, d = i * r.x + s * r.y + l, !(f !== 0 && d !== 0 && me(f, d)) && (a = r.y - n.y, o = n.x - r.x, u = r.x * n.y - n.x * r.y, c = a * t.x + o * t.y + u, h = a * e.x + o * e.y + u, !(c !== 0 && h !== 0 && me(c, h)) && (p = i * o - a * s, p !== 0)))
    return y = Math.abs(p / 2), g = s * u - o * l, v = g < 0 ? (g - y) / p : (g + y) / p, g = a * l - i * u, w = g < 0 ? (g - y) / p : (g + y) / p, { x: v, y: w };
}
function me(t, e) {
  return t * e > 0;
}
function R(t, e, n) {
  var r = t.x, i = t.y, a = [], s = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY;
  e.forEach(function(p) {
    s = Math.min(s, p.x), o = Math.min(o, p.y);
  });
  for (var l = r - t.width / 2 - s, u = i - t.height / 2 - o, c = 0; c < e.length; c++) {
    var h = e[c], f = e[c < e.length - 1 ? c + 1 : 0], d = Ss(
      t,
      n,
      { x: l + h.x, y: u + h.y },
      { x: l + f.x, y: u + f.y }
    );
    d && a.push(d);
  }
  return a.length ? (a.length > 1 && a.sort(function(p, y) {
    var g = p.x - n.x, v = p.y - n.y, w = Math.sqrt(g * g + v * v), k = y.x - n.x, x = y.y - n.y, P = Math.sqrt(k * k + x * x);
    return w < P ? -1 : w === P ? 0 : 1;
  }), a[0]) : (console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", t), t);
}
function re(t, e) {
  var n = t.x, r = t.y, i = e.x - n, a = e.y - r, s = t.width / 2, o = t.height / 2, l, u;
  return Math.abs(a) * s > Math.abs(i) * o ? (a < 0 && (o = -o), l = a === 0 ? 0 : o * i / a, u = o) : (i < 0 && (s = -s), l = s, u = i === 0 ? 0 : s * a / i), { x: n + l, y: r + u };
}
var Ot = {
  rect: Ns,
  ellipse: As,
  circle: Es,
  diamond: Ts
};
function $s(t) {
  Ot = t;
}
function Ns(t, e, n) {
  var r = t.insert("rect", ":first-child").attr("rx", n.rx).attr("ry", n.ry).attr("x", -e.width / 2).attr("y", -e.height / 2).attr("width", e.width).attr("height", e.height);
  return n.intersect = function(i) {
    return re(n, i);
  }, r;
}
function As(t, e, n) {
  var r = e.width / 2, i = e.height / 2, a = t.insert("ellipse", ":first-child").attr("x", -e.width / 2).attr("y", -e.height / 2).attr("rx", r).attr("ry", i);
  return n.intersect = function(s) {
    return sn(n, r, i, s);
  }, a;
}
function Es(t, e, n) {
  var r = Math.max(e.width, e.height) / 2, i = t.insert("circle", ":first-child").attr("x", -e.width / 2).attr("y", -e.height / 2).attr("r", r);
  return n.intersect = function(a) {
    return ks(n, r, a);
  }, i;
}
function Ts(t, e, n) {
  var r = e.width * Math.SQRT2 / 2, i = e.height * Math.SQRT2 / 2, a = [
    { x: 0, y: -i },
    { x: -r, y: 0 },
    { x: 0, y: i },
    { x: r, y: 0 }
  ], s = t.insert("polygon", ":first-child").attr(
    "points",
    a.map(function(o) {
      return o.x + "," + o.y;
    }).join(" ")
  );
  return n.intersect = function(o) {
    return R(n, a, o);
  }, s;
}
function Ms() {
  var t = function(e, n) {
    Is(n);
    var r = tt(e, "output"), i = tt(r, "clusters"), a = tt(r, "edgePaths"), s = Yt(tt(r, "edgeLabels"), n), o = Wt(tt(r, "nodes"), n, Ot);
    $n(n), bs(o, n), ms(s, n), zt(a, n, Vt);
    var l = Gt(i, n);
    xs(l, n), Rs(n);
  };
  return t.createNodes = function(e) {
    return arguments.length ? (_s(e), t) : Wt;
  }, t.createClusters = function(e) {
    return arguments.length ? (fs(e), t) : Gt;
  }, t.createEdgeLabels = function(e) {
    return arguments.length ? (hs(e), t) : Yt;
  }, t.createEdgePaths = function(e) {
    return arguments.length ? (ds(e), t) : zt;
  }, t.shapes = function(e) {
    return arguments.length ? ($s(e), t) : Ot;
  }, t.arrows = function(e) {
    return arguments.length ? (is(e), t) : Vt;
  }, t;
}
var Cs = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: "rect"
}, Ls = {
  arrowhead: "normal",
  curve: rn
};
function Is(t) {
  t.nodes().forEach(function(e) {
    var n = t.node(e);
    !S(n, "label") && !t.children(e).length && (n.label = e), S(n, "paddingX") && J(n, {
      paddingLeft: n.paddingX,
      paddingRight: n.paddingX
    }), S(n, "paddingY") && J(n, {
      paddingTop: n.paddingY,
      paddingBottom: n.paddingY
    }), S(n, "padding") && J(n, {
      paddingLeft: n.padding,
      paddingRight: n.padding,
      paddingTop: n.padding,
      paddingBottom: n.padding
    }), J(n, Cs), be(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], function(r) {
      n[r] = Number(n[r]);
    }), S(n, "width") && (n._prevWidth = n.width), S(n, "height") && (n._prevHeight = n.height);
  }), t.edges().forEach(function(e) {
    var n = t.edge(e);
    S(n, "label") || (n.label = ""), J(n, Ls);
  });
}
function Rs(t) {
  be(t.nodes(), function(e) {
    var n = t.node(e);
    S(n, "_prevWidth") ? n.width = n._prevWidth : delete n.width, S(n, "_prevHeight") ? n.height = n._prevHeight : delete n.height, delete n._prevWidth, delete n._prevHeight;
  });
}
function tt(t, e) {
  var n = t.select("g." + e);
  return n.empty() && (n = t.append("g").attr("class", e)), n;
}
function on(t, e, n) {
  const r = e.width, i = e.height, a = (r + i) * 0.9, s = [
    { x: a / 2, y: 0 },
    { x: a, y: -a / 2 },
    { x: a / 2, y: -a },
    { x: 0, y: -a / 2 }
  ], o = H(t, a, a, s);
  return n.intersect = function(l) {
    return R(n, s, l);
  }, o;
}
function ln(t, e, n) {
  const i = e.height, a = i / 4, s = e.width + 2 * a, o = [
    { x: a, y: 0 },
    { x: s - a, y: 0 },
    { x: s, y: -i / 2 },
    { x: s - a, y: -i },
    { x: a, y: -i },
    { x: 0, y: -i / 2 }
  ], l = H(t, s, i, o);
  return n.intersect = function(u) {
    return R(n, o, u);
  }, l;
}
function cn(t, e, n) {
  const r = e.width, i = e.height, a = [
    { x: -i / 2, y: 0 },
    { x: r, y: 0 },
    { x: r, y: -i },
    { x: -i / 2, y: -i },
    { x: 0, y: -i / 2 }
  ], s = H(t, r, i, a);
  return n.intersect = function(o) {
    return R(n, a, o);
  }, s;
}
function un(t, e, n) {
  const r = e.width, i = e.height, a = [
    { x: -2 * i / 6, y: 0 },
    { x: r - i / 6, y: 0 },
    { x: r + 2 * i / 6, y: -i },
    { x: i / 6, y: -i }
  ], s = H(t, r, i, a);
  return n.intersect = function(o) {
    return R(n, a, o);
  }, s;
}
function fn(t, e, n) {
  const r = e.width, i = e.height, a = [
    { x: 2 * i / 6, y: 0 },
    { x: r + i / 6, y: 0 },
    { x: r - 2 * i / 6, y: -i },
    { x: -i / 6, y: -i }
  ], s = H(t, r, i, a);
  return n.intersect = function(o) {
    return R(n, a, o);
  }, s;
}
function hn(t, e, n) {
  const r = e.width, i = e.height, a = [
    { x: -2 * i / 6, y: 0 },
    { x: r + 2 * i / 6, y: 0 },
    { x: r - i / 6, y: -i },
    { x: i / 6, y: -i }
  ], s = H(t, r, i, a);
  return n.intersect = function(o) {
    return R(n, a, o);
  }, s;
}
function dn(t, e, n) {
  const r = e.width, i = e.height, a = [
    { x: i / 6, y: 0 },
    { x: r - i / 6, y: 0 },
    { x: r + 2 * i / 6, y: -i },
    { x: -2 * i / 6, y: -i }
  ], s = H(t, r, i, a);
  return n.intersect = function(o) {
    return R(n, a, o);
  }, s;
}
function pn(t, e, n) {
  const r = e.width, i = e.height, a = [
    { x: 0, y: 0 },
    { x: r + i / 2, y: 0 },
    { x: r, y: -i / 2 },
    { x: r + i / 2, y: -i },
    { x: 0, y: -i }
  ], s = H(t, r, i, a);
  return n.intersect = function(o) {
    return R(n, a, o);
  }, s;
}
function gn(t, e, n) {
  const r = e.height, i = e.width + r / 4, a = t.insert("rect", ":first-child").attr("rx", r / 2).attr("ry", r / 2).attr("x", -i / 2).attr("y", -r / 2).attr("width", i).attr("height", r);
  return n.intersect = function(s) {
    return re(n, s);
  }, a;
}
function yn(t, e, n) {
  const r = e.width, i = e.height, a = [
    { x: 0, y: 0 },
    { x: r, y: 0 },
    { x: r, y: -i },
    { x: 0, y: -i },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: r + 8, y: 0 },
    { x: r + 8, y: -i },
    { x: -8, y: -i },
    { x: -8, y: 0 }
  ], s = H(t, r, i, a);
  return n.intersect = function(o) {
    return R(n, a, o);
  }, s;
}
function vn(t, e, n) {
  const r = e.width, i = r / 2, a = i / (2.5 + r / 50), s = e.height + a, o = "M 0," + a + " a " + i + "," + a + " 0,0,0 " + r + " 0 a " + i + "," + a + " 0,0,0 " + -r + " 0 l 0," + s + " a " + i + "," + a + " 0,0,0 " + r + " 0 l 0," + -s, l = t.attr("label-offset-y", a).insert("path", ":first-child").attr("d", o).attr("transform", "translate(" + -r / 2 + "," + -(s / 2 + a) + ")");
  return n.intersect = function(u) {
    const c = re(n, u), h = c.x - n.x;
    if (i != 0 && (Math.abs(h) < n.width / 2 || Math.abs(h) == n.width / 2 && Math.abs(c.y - n.y) > n.height / 2 - a)) {
      let f = a * a * (1 - h * h / (i * i));
      f != 0 && (f = Math.sqrt(f)), f = a - f, u.y - n.y > 0 && (f = -f), c.y += f;
    }
    return c;
  }, l;
}
function Ps(t) {
  t.shapes().question = on, t.shapes().hexagon = ln, t.shapes().stadium = gn, t.shapes().subroutine = yn, t.shapes().cylinder = vn, t.shapes().rect_left_inv_arrow = cn, t.shapes().lean_right = un, t.shapes().lean_left = fn, t.shapes().trapezoid = hn, t.shapes().inv_trapezoid = dn, t.shapes().rect_right_inv_arrow = pn;
}
function Ds(t) {
  t({ question: on }), t({ hexagon: ln }), t({ stadium: gn }), t({ subroutine: yn }), t({ cylinder: vn }), t({ rect_left_inv_arrow: cn }), t({ lean_right: un }), t({ lean_left: fn }), t({ trapezoid: hn }), t({ inv_trapezoid: dn }), t({ rect_right_inv_arrow: pn });
}
function H(t, e, n, r) {
  return t.insert("polygon", ":first-child").attr(
    "points",
    r.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("transform", "translate(" + -e / 2 + "," + n / 2 + ")");
}
const Bs = {
  addToRender: Ps,
  addToRenderV2: Ds
}, wn = {}, Fs = function(t) {
  const e = Object.keys(t);
  for (const n of e)
    wn[n] = t[n];
}, _n = function(t, e, n, r, i, a) {
  const s = r ? r.select(`[id="${n}"]`) : et(`[id="${n}"]`), o = i || document;
  Object.keys(t).forEach(function(u) {
    const c = t[u];
    let h = "default";
    c.classes.length > 0 && (h = c.classes.join(" "));
    const f = It(c.styles);
    let d = c.text !== void 0 ? c.text : c.id, p;
    if (ke(Kt().flowchart.htmlLabels)) {
      const v = {
        label: d.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (w) => `<i class='${w.replace(":", " ")}'></i>`
        )
      };
      p = $e(s, v).node(), p.parentNode.removeChild(p);
    } else {
      const v = o.createElementNS("http://www.w3.org/2000/svg", "text");
      v.setAttribute("style", f.labelStyle.replace("color:", "fill:"));
      const w = d.split(Se.lineBreakRegex);
      for (const k of w) {
        const x = o.createElementNS("http://www.w3.org/2000/svg", "tspan");
        x.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), x.setAttribute("dy", "1em"), x.setAttribute("x", "1"), x.textContent = k, v.appendChild(x);
      }
      p = v;
    }
    let y = 0, g = "";
    switch (c.type) {
      case "round":
        y = 5, g = "rect";
        break;
      case "square":
        g = "rect";
        break;
      case "diamond":
        g = "question";
        break;
      case "hexagon":
        g = "hexagon";
        break;
      case "odd":
        g = "rect_left_inv_arrow";
        break;
      case "lean_right":
        g = "lean_right";
        break;
      case "lean_left":
        g = "lean_left";
        break;
      case "trapezoid":
        g = "trapezoid";
        break;
      case "inv_trapezoid":
        g = "inv_trapezoid";
        break;
      case "odd_right":
        g = "rect_left_inv_arrow";
        break;
      case "circle":
        g = "circle";
        break;
      case "ellipse":
        g = "ellipse";
        break;
      case "stadium":
        g = "stadium";
        break;
      case "subroutine":
        g = "subroutine";
        break;
      case "cylinder":
        g = "cylinder";
        break;
      case "group":
        g = "rect";
        break;
      default:
        g = "rect";
    }
    V.warn("Adding node", c.id, c.domId), e.setNode(a.db.lookUpDomId(c.id), {
      labelType: "svg",
      labelStyle: f.labelStyle,
      shape: g,
      label: p,
      rx: y,
      ry: y,
      class: h,
      style: f.style,
      id: a.db.lookUpDomId(c.id)
    });
  });
}, xn = function(t, e, n) {
  let r = 0, i, a;
  if (t.defaultStyle !== void 0) {
    const s = It(t.defaultStyle);
    i = s.style, a = s.labelStyle;
  }
  t.forEach(function(s) {
    r++;
    var o = "L-" + s.start + "-" + s.end, l = "LS-" + s.start, u = "LE-" + s.end;
    const c = {};
    s.type === "arrow_open" ? c.arrowhead = "none" : c.arrowhead = "normal";
    let h = "", f = "";
    if (s.style !== void 0) {
      const d = It(s.style);
      h = d.style, f = d.labelStyle;
    } else
      switch (s.stroke) {
        case "normal":
          h = "fill:none", i !== void 0 && (h = i), a !== void 0 && (f = a);
          break;
        case "dotted":
          h = "fill:none;stroke-width:2px;stroke-dasharray:3;";
          break;
        case "thick":
          h = " stroke-width: 3.5px;fill:none";
          break;
      }
    c.style = h, c.labelStyle = f, s.interpolate !== void 0 ? c.curve = Tt(s.interpolate, Mt) : t.defaultInterpolate !== void 0 ? c.curve = Tt(t.defaultInterpolate, Mt) : c.curve = Tt(wn.curve, Mt), s.text === void 0 ? s.style !== void 0 && (c.arrowheadStyle = "fill: #333") : (c.arrowheadStyle = "fill: #333", c.labelpos = "c", ke(Kt().flowchart.htmlLabels) ? (c.labelType = "html", c.label = `<span id="L-${o}" class="edgeLabel L-${l}' L-${u}" style="${c.labelStyle}">${s.text.replace(
      /fa[blrs]?:fa-[\w-]+/g,
      (d) => `<i class='${d.replace(":", " ")}'></i>`
    )}</span>`) : (c.labelType = "text", c.label = s.text.replace(Se.lineBreakRegex, `
`), s.style === void 0 && (c.style = c.style || "stroke: #333; stroke-width: 1.5px;fill:none"), c.labelStyle = c.labelStyle.replace("color:", "fill:"))), c.id = o, c.class = l + " " + u, c.minlen = s.length || 1, e.setEdge(n.db.lookUpDomId(s.start), n.db.lookUpDomId(s.end), c, r);
  });
}, Hs = function(t, e) {
  V.info("Extracting classes"), e.db.clear();
  try {
    return e.parse(t), e.db.getClasses();
  } catch (n) {
    return V.error(n), {};
  }
}, Xs = function(t, e, n, r) {
  V.info("Drawing flowchart"), r.db.clear();
  const { securityLevel: i, flowchart: a } = Kt();
  let s;
  i === "sandbox" && (s = et("#i" + e));
  const o = i === "sandbox" ? et(s.nodes()[0].contentDocument.body) : et("body"), l = i === "sandbox" ? s.nodes()[0].contentDocument : document;
  try {
    r.parser.parse(t);
  } catch {
    V.debug("Parsing failed");
  }
  let u = r.db.getDirection();
  u === void 0 && (u = "TD");
  const c = a.nodeSpacing || 50, h = a.rankSpacing || 50, f = new Nn({
    multigraph: !0,
    compound: !0
  }).setGraph({
    rankdir: u,
    nodesep: c,
    ranksep: h,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let d;
  const p = r.db.getSubGraphs();
  for (let _ = p.length - 1; _ >= 0; _--)
    d = p[_], r.db.addVertex(d.id, d.title, "group", void 0, d.classes);
  const y = r.db.getVertices();
  V.warn("Get vertices", y);
  const g = r.db.getEdges();
  let v = 0;
  for (v = p.length - 1; v >= 0; v--) {
    d = p[v], Mn("cluster").append("text");
    for (let _ = 0; _ < d.nodes.length; _++)
      V.warn(
        "Setting subgraph",
        d.nodes[_],
        r.db.lookUpDomId(d.nodes[_]),
        r.db.lookUpDomId(d.id)
      ), f.setParent(r.db.lookUpDomId(d.nodes[_]), r.db.lookUpDomId(d.id));
  }
  _n(y, f, e, o, l, r), xn(g, f, r);
  const w = new Ms();
  Bs.addToRender(w), w.arrows().none = function(b, N, m, W) {
    const q = b.append("marker").attr("id", N).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
    F(q, m[W + "Style"]);
  }, w.arrows().normal = function(b, N) {
    b.append("marker").attr("id", N).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  };
  const k = o.select(`[id="${e}"]`), x = o.select("#" + e + " g");
  for (w(x, f), x.selectAll("g.node").attr("title", function() {
    return r.db.getTooltip(this.id);
  }), r.db.indexNodes("subGraph" + v), v = 0; v < p.length; v++)
    if (d = p[v], d.title !== "undefined") {
      const _ = l.querySelectorAll(
        "#" + e + ' [id="' + r.db.lookUpDomId(d.id) + '"] rect'
      ), b = l.querySelectorAll(
        "#" + e + ' [id="' + r.db.lookUpDomId(d.id) + '"]'
      ), N = _[0].x.baseVal.value, m = _[0].y.baseVal.value, W = _[0].width.baseVal.value, q = et(b[0]).select(".label");
      q.attr("transform", `translate(${N + W / 2}, ${m + 14})`), q.attr("id", e + "Text");
      for (let At = 0; At < d.classes.length; At++)
        b[0].classList.add(d.classes[At]);
    }
  if (!a.htmlLabels) {
    const _ = l.querySelectorAll('[id="' + e + '"] .edgeLabel .label');
    for (const b of _) {
      const N = b.getBBox(), m = l.createElementNS("http://www.w3.org/2000/svg", "rect");
      m.setAttribute("rx", 0), m.setAttribute("ry", 0), m.setAttribute("width", N.width), m.setAttribute("height", N.height), b.insertBefore(m, b.firstChild);
    }
  }
  An(f, k, a.diagramPadding, a.useMaxWidth), Object.keys(y).forEach(function(_) {
    const b = y[_];
    if (b.link) {
      const N = o.select("#" + e + ' [id="' + r.db.lookUpDomId(_) + '"]');
      if (N) {
        const m = l.createElementNS("http://www.w3.org/2000/svg", "a");
        m.setAttributeNS("http://www.w3.org/2000/svg", "class", b.classes.join(" ")), m.setAttributeNS("http://www.w3.org/2000/svg", "href", b.link), m.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), i === "sandbox" ? m.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : b.linkTarget && m.setAttributeNS("http://www.w3.org/2000/svg", "target", b.linkTarget);
        const W = N.insert(function() {
          return m;
        }, ":first-child"), ft = N.select(".label-container");
        ft && W.append(function() {
          return ft.node();
        });
        const q = N.select(".label");
        q && W.append(function() {
          return q.node();
        });
      }
    }
  });
}, qs = {
  setConf: Fs,
  addVertices: _n,
  addEdges: xn,
  getClasses: Hs,
  draw: Xs
}, eo = {
  parser: mn,
  db: Et,
  renderer: En,
  styles: Tn,
  init: (t) => {
    t.flowchart || (t.flowchart = {}), t.flowchart.arrowMarkerAbsolute = t.arrowMarkerAbsolute, qs.setConf(t.flowchart), Et.clear(), Et.setGen("gen-1");
  }
};
export {
  eo as diagram
};
