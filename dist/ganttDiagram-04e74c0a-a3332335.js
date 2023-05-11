import { G as un, H as ln, R as fn, I as hn, J as Rn, K as Bn, L as me, M as Pe, N as Ve, O as Zn, P as ne, Q as jn, S as Se, T as nt, c as bt, s as qn, g as Xn, y as Gn, z as Qn, b as $n, a as Jn, m as Kn, A as tr, j as er, l as de, h as Ht, i as nr, k as rr, x as ir } from "./index-54d0746e.js";
import { i as mn } from "./init-f9637058.js";
import "vue";
function Rt(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ar(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _e(t) {
  let e, n, r;
  t.length !== 2 ? (e = Rt, n = (u, y) => Rt(t(u), y), r = (u, y) => t(u) - y) : (e = t === Rt || t === ar ? t : sr, n = t, r = t);
  function i(u, y, c = 0, x = u.length) {
    if (c < x) {
      if (e(y, y) !== 0)
        return x;
      do {
        const p = c + x >>> 1;
        n(u[p], y) < 0 ? c = p + 1 : x = p;
      } while (c < x);
    }
    return c;
  }
  function a(u, y, c = 0, x = u.length) {
    if (c < x) {
      if (e(y, y) !== 0)
        return x;
      do {
        const p = c + x >>> 1;
        n(u[p], y) <= 0 ? c = p + 1 : x = p;
      } while (c < x);
    }
    return c;
  }
  function s(u, y, c = 0, x = u.length) {
    const p = i(u, y, c, x - 1);
    return p > c && r(u[p - 1], y) > -r(u[p], y) ? p - 1 : p;
  }
  return { left: i, center: s, right: a };
}
function sr() {
  return 0;
}
function or(t) {
  return t === null ? NaN : +t;
}
const cr = _e(Rt), ur = cr.right;
_e(or).center;
const lr = ur, fr = Math.sqrt(50), hr = Math.sqrt(10), mr = Math.sqrt(2);
function qt(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), s = a >= fr ? 10 : a >= hr ? 5 : a >= mr ? 2 : 1;
  let u, y, c;
  return i < 0 ? (c = Math.pow(10, -i) / s, u = Math.round(t * c), y = Math.round(e * c), u / c < t && ++u, y / c > e && --y, c = -c) : (c = Math.pow(10, i) * s, u = Math.round(t / c), y = Math.round(e / c), u * c < t && ++u, y * c > e && --y), y < u && 0.5 <= n && n < 2 ? qt(t, e, n * 2) : [u, y, c];
}
function dr(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const r = e < t, [i, a, s] = r ? qt(e, t, n) : qt(t, e, n);
  if (!(a >= i))
    return [];
  const u = a - i + 1, y = new Array(u);
  if (r)
    if (s < 0)
      for (let c = 0; c < u; ++c)
        y[c] = (a - c) / -s;
    else
      for (let c = 0; c < u; ++c)
        y[c] = (a - c) * s;
  else if (s < 0)
    for (let c = 0; c < u; ++c)
      y[c] = (i + c) / -s;
  else
    for (let c = 0; c < u; ++c)
      y[c] = (i + c) * s;
  return y;
}
function ge(t, e, n) {
  return e = +e, t = +t, n = +n, qt(t, e, n)[2];
}
function ye(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? ge(e, t, n) : ge(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function gr(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function yr(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function pr(t) {
  return t;
}
var Bt = 1, re = 2, pe = 3, Pt = 4, Re = 1e-6;
function kr(t) {
  return "translate(" + t + ",0)";
}
function vr(t) {
  return "translate(0," + t + ")";
}
function Tr(t) {
  return (e) => +t(e);
}
function xr(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function br() {
  return !this.__axis;
}
function dn(t, e) {
  var n = [], r = null, i = null, a = 6, s = 6, u = 3, y = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = t === Bt || t === Pt ? -1 : 1, x = t === Pt || t === re ? "x" : "y", p = t === Bt || t === pe ? kr : vr;
  function v(D) {
    var z = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), T = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : pr), _ = Math.max(a, 0) + u, I = e.range(), W = +I[0] + y, O = +I[I.length - 1] + y, V = (e.bandwidth ? xr : Tr)(e.copy(), y), P = D.selection ? D.selection() : D, C = P.selectAll(".domain").data([null]), Y = P.selectAll(".tick").data(z, e).order(), w = Y.exit(), h = Y.enter().append("g").attr("class", "tick"), g = Y.select("line"), l = Y.select("text");
    C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), Y = Y.merge(h), g = g.merge(h.append("line").attr("stroke", "currentColor").attr(x + "2", c * a)), l = l.merge(h.append("text").attr("fill", "currentColor").attr(x, c * _).attr("dy", t === Bt ? "0em" : t === pe ? "0.71em" : "0.32em")), D !== P && (C = C.transition(D), Y = Y.transition(D), g = g.transition(D), l = l.transition(D), w = w.transition(D).attr("opacity", Re).attr("transform", function(f) {
      return isFinite(f = V(f)) ? p(f + y) : this.getAttribute("transform");
    }), h.attr("opacity", Re).attr("transform", function(f) {
      var b = this.parentNode.__axis;
      return p((b && isFinite(b = b(f)) ? b : V(f)) + y);
    })), w.remove(), C.attr("d", t === Pt || t === re ? s ? "M" + c * s + "," + W + "H" + y + "V" + O + "H" + c * s : "M" + y + "," + W + "V" + O : s ? "M" + W + "," + c * s + "V" + y + "H" + O + "V" + c * s : "M" + W + "," + y + "H" + O), Y.attr("opacity", 1).attr("transform", function(f) {
      return p(V(f) + y);
    }), g.attr(x + "2", c * a), l.attr(x, c * _).text(T), P.filter(br).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === re ? "start" : t === Pt ? "end" : "middle"), P.each(function() {
      this.__axis = V;
    });
  }
  return v.scale = function(D) {
    return arguments.length ? (e = D, v) : e;
  }, v.ticks = function() {
    return n = Array.from(arguments), v;
  }, v.tickArguments = function(D) {
    return arguments.length ? (n = D == null ? [] : Array.from(D), v) : n.slice();
  }, v.tickValues = function(D) {
    return arguments.length ? (r = D == null ? null : Array.from(D), v) : r && r.slice();
  }, v.tickFormat = function(D) {
    return arguments.length ? (i = D, v) : i;
  }, v.tickSize = function(D) {
    return arguments.length ? (a = s = +D, v) : a;
  }, v.tickSizeInner = function(D) {
    return arguments.length ? (a = +D, v) : a;
  }, v.tickSizeOuter = function(D) {
    return arguments.length ? (s = +D, v) : s;
  }, v.tickPadding = function(D) {
    return arguments.length ? (u = +D, v) : u;
  }, v.offset = function(D) {
    return arguments.length ? (y = +D, v) : y;
  }, v;
}
function Mr(t) {
  return dn(Bt, t);
}
function wr(t) {
  return dn(pe, t);
}
const Dr = Math.PI / 180, Cr = 180 / Math.PI, Xt = 18, gn = 0.96422, yn = 1, pn = 0.82521, kn = 4 / 29, Mt = 6 / 29, vn = 3 * Mt * Mt, Sr = Mt * Mt * Mt;
function Tn(t) {
  if (t instanceof ot)
    return new ot(t.l, t.a, t.b, t.opacity);
  if (t instanceof ut)
    return xn(t);
  t instanceof fn || (t = Rn(t));
  var e = oe(t.r), n = oe(t.g), r = oe(t.b), i = ie((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / yn), a, s;
  return e === n && n === r ? a = s = i : (a = ie((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / gn), s = ie((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / pn)), new ot(116 * i - 16, 500 * (a - i), 200 * (i - s), t.opacity);
}
function _r(t, e, n, r) {
  return arguments.length === 1 ? Tn(t) : new ot(t, e, n, r ?? 1);
}
function ot(t, e, n, r) {
  this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
}
un(ot, _r, ln(hn, {
  brighter(t) {
    return new ot(this.l + Xt * (t ?? 1), this.a, this.b, this.opacity);
  },
  darker(t) {
    return new ot(this.l - Xt * (t ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n = isNaN(this.b) ? t : t - this.b / 200;
    return e = gn * ae(e), t = yn * ae(t), n = pn * ae(n), new fn(
      se(3.1338561 * e - 1.6168667 * t - 0.4906146 * n),
      se(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
      se(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
      this.opacity
    );
  }
}));
function ie(t) {
  return t > Sr ? Math.pow(t, 1 / 3) : t / vn + kn;
}
function ae(t) {
  return t > Mt ? t * t * t : vn * (t - kn);
}
function se(t) {
  return 255 * (t <= 31308e-7 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function oe(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function Ur(t) {
  if (t instanceof ut)
    return new ut(t.h, t.c, t.l, t.opacity);
  if (t instanceof ot || (t = Tn(t)), t.a === 0 && t.b === 0)
    return new ut(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
  var e = Math.atan2(t.b, t.a) * Cr;
  return new ut(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function ke(t, e, n, r) {
  return arguments.length === 1 ? Ur(t) : new ut(t, e, n, r ?? 1);
}
function ut(t, e, n, r) {
  this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
}
function xn(t) {
  if (isNaN(t.h))
    return new ot(t.l, 0, 0, t.opacity);
  var e = t.h * Dr;
  return new ot(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
un(ut, ke, ln(hn, {
  brighter(t) {
    return new ut(this.h, this.c, this.l + Xt * (t ?? 1), this.opacity);
  },
  darker(t) {
    return new ut(this.h, this.c, this.l - Xt * (t ?? 1), this.opacity);
  },
  rgb() {
    return xn(this).rgb();
  }
}));
function Ar(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i)
      r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function Fr(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Yr(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), s;
  for (s = 0; s < r; ++s)
    i[s] = Ue(t[s], e[s]);
  for (; s < n; ++s)
    a[s] = e[s];
  return function(u) {
    for (s = 0; s < r; ++s)
      a[s] = i[s](u);
    return a;
  };
}
function Lr(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Er(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Ue(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n)
      r[i] = n[i](a);
    return r;
  };
}
function Ue(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Bn(e) : (n === "number" ? me : n === "string" ? (r = Pe(e)) ? (e = r, Ve) : Zn : e instanceof Pe ? Ve : e instanceof Date ? Lr : Fr(e) ? Ar : Array.isArray(e) ? Yr : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Er : me)(t, e);
}
function Ir(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
function Nr(t) {
  return function(e, n) {
    var r = t((e = ke(e)).h, (n = ke(n)).h), i = ne(e.c, n.c), a = ne(e.l, n.l), s = ne(e.opacity, n.opacity);
    return function(u) {
      return e.h = r(u), e.c = i(u), e.l = a(u), e.opacity = s(u), e + "";
    };
  };
}
const Wr = Nr(jn);
function zr(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Gt(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Dt(t) {
  return t = Gt(Math.abs(t)), t ? t[1] : NaN;
}
function Or(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], s = 0, u = t[0], y = 0; i > 0 && u > 0 && (y + u + 1 > r && (u = Math.max(1, r - y)), a.push(n.substring(i -= u, i + u)), !((y += u + 1) > r)); )
      u = t[s = (s + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Hr(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Pr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Qt(t) {
  if (!(e = Pr.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new Ae({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Qt.prototype = Ae.prototype;
function Ae(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ae.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vr(t) {
  t:
    for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
      switch (t[n]) {
        case ".":
          r = i = n;
          break;
        case "0":
          r === 0 && (r = n), i = n;
          break;
        default:
          if (!+t[n])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var bn;
function Rr(t, e) {
  var n = Gt(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1], a = i - (bn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, s = r.length;
  return a === s ? r : a > s ? r + new Array(a - s + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Gt(t, Math.max(0, e + a - 1))[0];
}
function Be(t, e) {
  var n = Gt(t, e);
  if (!n)
    return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ze = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: zr,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Be(t * 100, e),
  r: Be,
  s: Rr,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function je(t) {
  return t;
}
var qe = Array.prototype.map, Xe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Br(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? je : Or(qe.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? je : Hr(qe.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", u = t.minus === void 0 ? "−" : t.minus + "", y = t.nan === void 0 ? "NaN" : t.nan + "";
  function c(p) {
    p = Qt(p);
    var v = p.fill, D = p.align, z = p.sign, T = p.symbol, _ = p.zero, I = p.width, W = p.comma, O = p.precision, V = p.trim, P = p.type;
    P === "n" ? (W = !0, P = "g") : Ze[P] || (O === void 0 && (O = 12), V = !0, P = "g"), (_ || v === "0" && D === "=") && (_ = !0, v = "0", D = "=");
    var C = T === "$" ? n : T === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", Y = T === "$" ? r : /[%p]/.test(P) ? s : "", w = Ze[P], h = /[defgprs%]/.test(P);
    O = O === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, O)) : Math.max(0, Math.min(20, O));
    function g(l) {
      var f = C, b = Y, o, F, m;
      if (P === "c")
        b = w(l) + b, l = "";
      else {
        l = +l;
        var Z = l < 0 || 1 / l < 0;
        if (l = isNaN(l) ? y : w(Math.abs(l), O), V && (l = Vr(l)), Z && +l == 0 && z !== "+" && (Z = !1), f = (Z ? z === "(" ? z : u : z === "-" || z === "(" ? "" : z) + f, b = (P === "s" ? Xe[8 + bn / 3] : "") + b + (Z && z === "(" ? ")" : ""), h) {
          for (o = -1, F = l.length; ++o < F; )
            if (m = l.charCodeAt(o), 48 > m || m > 57) {
              b = (m === 46 ? i + l.slice(o + 1) : l.slice(o)) + b, l = l.slice(0, o);
              break;
            }
        }
      }
      W && !_ && (l = e(l, 1 / 0));
      var j = f.length + l.length + b.length, B = j < I ? new Array(I - j + 1).join(v) : "";
      switch (W && _ && (l = e(B + l, B.length ? I - b.length : 1 / 0), B = ""), D) {
        case "<":
          l = f + l + b + B;
          break;
        case "=":
          l = f + B + l + b;
          break;
        case "^":
          l = B.slice(0, j = B.length >> 1) + f + l + b + B.slice(j);
          break;
        default:
          l = B + f + l + b;
          break;
      }
      return a(l);
    }
    return g.toString = function() {
      return p + "";
    }, g;
  }
  function x(p, v) {
    var D = c((p = Qt(p), p.type = "f", p)), z = Math.max(-8, Math.min(8, Math.floor(Dt(v) / 3))) * 3, T = Math.pow(10, -z), _ = Xe[8 + z / 3];
    return function(I) {
      return D(T * I) + _;
    };
  }
  return {
    format: c,
    formatPrefix: x
  };
}
var Vt, Mn, wn;
Zr({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Zr(t) {
  return Vt = Br(t), Mn = Vt.format, wn = Vt.formatPrefix, Vt;
}
function jr(t) {
  return Math.max(0, -Dt(Math.abs(t)));
}
function qr(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Dt(e) / 3))) * 3 - Dt(Math.abs(t)));
}
function Xr(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Dt(e) - Dt(t)) + 1;
}
function Gr(t) {
  return function() {
    return t;
  };
}
function Qr(t) {
  return +t;
}
var Ge = [0, 1];
function Tt(t) {
  return t;
}
function ve(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Gr(isNaN(e) ? NaN : 0.5);
}
function $r(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Jr(t, e, n) {
  var r = t[0], i = t[1], a = e[0], s = e[1];
  return i < r ? (r = ve(i, r), a = n(s, a)) : (r = ve(r, i), a = n(a, s)), function(u) {
    return a(r(u));
  };
}
function Kr(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), s = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < r; )
    i[s] = ve(t[s], t[s + 1]), a[s] = n(e[s], e[s + 1]);
  return function(u) {
    var y = lr(t, u, 1, r) - 1;
    return a[y](i[y](u));
  };
}
function Dn(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ti() {
  var t = Ge, e = Ge, n = Ue, r, i, a, s = Tt, u, y, c;
  function x() {
    var v = Math.min(t.length, e.length);
    return s !== Tt && (s = $r(t[0], t[v - 1])), u = v > 2 ? Kr : Jr, y = c = null, p;
  }
  function p(v) {
    return v == null || isNaN(v = +v) ? a : (y || (y = u(t.map(r), e, n)))(r(s(v)));
  }
  return p.invert = function(v) {
    return s(i((c || (c = u(e, t.map(r), me)))(v)));
  }, p.domain = function(v) {
    return arguments.length ? (t = Array.from(v, Qr), x()) : t.slice();
  }, p.range = function(v) {
    return arguments.length ? (e = Array.from(v), x()) : e.slice();
  }, p.rangeRound = function(v) {
    return e = Array.from(v), n = Ir, x();
  }, p.clamp = function(v) {
    return arguments.length ? (s = v ? !0 : Tt, x()) : s !== Tt;
  }, p.interpolate = function(v) {
    return arguments.length ? (n = v, x()) : n;
  }, p.unknown = function(v) {
    return arguments.length ? (a = v, p) : a;
  }, function(v, D) {
    return r = v, i = D, x();
  };
}
function Cn() {
  return ti()(Tt, Tt);
}
function ei(t, e, n, r) {
  var i = ye(t, e, n), a;
  switch (r = Qt(r ?? ",f"), r.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = qr(i, s)) && (r.precision = a), wn(r, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Xr(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = jr(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Mn(r);
}
function ni(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return dr(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return ei(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, s = r[i], u = r[a], y, c, x = 10;
    for (u < s && (c = s, s = u, u = c, c = i, i = a, a = c); x-- > 0; ) {
      if (c = ge(s, u, n), c === y)
        return r[i] = s, r[a] = u, e(r);
      if (c > 0)
        s = Math.floor(s / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        s = Math.ceil(s * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      y = c;
    }
    return t;
  }, t;
}
function Sn() {
  var t = Cn();
  return t.copy = function() {
    return Dn(t, Sn());
  }, mn.apply(t, arguments), ni(t);
}
function ri(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, i = t[n], a = t[r], s;
  return a < i && (s = n, n = r, r = s, s = i, i = a, a = s), t[n] = e.floor(i), t[r] = e.ceil(a), t;
}
const ce = /* @__PURE__ */ new Date(), ue = /* @__PURE__ */ new Date();
function tt(t, e, n, r) {
  function i(a) {
    return t(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (t(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (t(a = new Date(a - 1)), e(a, 1), t(a), a), i.round = (a) => {
    const s = i(a), u = i.ceil(a);
    return a - s < u - a ? s : u;
  }, i.offset = (a, s) => (e(a = /* @__PURE__ */ new Date(+a), s == null ? 1 : Math.floor(s)), a), i.range = (a, s, u) => {
    const y = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < s) || !(u > 0))
      return y;
    let c;
    do
      y.push(c = /* @__PURE__ */ new Date(+a)), e(a, u), t(a);
    while (c < a && a < s);
    return y;
  }, i.filter = (a) => tt((s) => {
    if (s >= s)
      for (; t(s), !a(s); )
        s.setTime(s - 1);
  }, (s, u) => {
    if (s >= s)
      if (u < 0)
        for (; ++u <= 0; )
          for (; e(s, -1), !a(s); )
            ;
      else
        for (; --u >= 0; )
          for (; e(s, 1), !a(s); )
            ;
  }), n && (i.count = (a, s) => (ce.setTime(+a), ue.setTime(+s), t(ce), t(ue), Math.floor(n(ce, ue))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(r ? (s) => r(s) % a === 0 : (s) => i.count(0, s) % a === 0) : i)), i;
}
const $t = tt(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
$t.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? tt((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : $t);
$t.range;
const lt = 1e3, it = lt * 60, ft = it * 60, ht = ft * 24, Fe = ht * 7, Qe = ht * 30, le = ht * 365, xt = tt((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * lt);
}, (t, e) => (e - t) / lt, (t) => t.getUTCSeconds());
xt.range;
const Et = tt((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * lt);
}, (t, e) => {
  t.setTime(+t + e * it);
}, (t, e) => (e - t) / it, (t) => t.getMinutes());
Et.range;
const ii = tt((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * it);
}, (t, e) => (e - t) / it, (t) => t.getUTCMinutes());
ii.range;
const It = tt((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * lt - t.getMinutes() * it);
}, (t, e) => {
  t.setTime(+t + e * ft);
}, (t, e) => (e - t) / ft, (t) => t.getHours());
It.range;
const ai = tt((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * ft);
}, (t, e) => (e - t) / ft, (t) => t.getUTCHours());
ai.range;
const gt = tt(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * it) / ht,
  (t) => t.getDate() - 1
);
gt.range;
const Ye = tt((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / ht, (t) => t.getUTCDate() - 1);
Ye.range;
const si = tt((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / ht, (t) => Math.floor(t / ht));
si.range;
function pt(t) {
  return tt((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * it) / Fe);
}
const Ct = pt(0), Jt = pt(1), oi = pt(2), ci = pt(3), St = pt(4), ui = pt(5), li = pt(6);
Ct.range;
Jt.range;
oi.range;
ci.range;
St.range;
ui.range;
li.range;
function kt(t) {
  return tt((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / Fe);
}
const _n = kt(0), Kt = kt(1), fi = kt(2), hi = kt(3), _t = kt(4), mi = kt(5), di = kt(6);
_n.range;
Kt.range;
fi.range;
hi.range;
_t.range;
mi.range;
di.range;
const Nt = tt((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
Nt.range;
const gi = tt((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
gi.range;
const mt = tt((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
mt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : tt((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
mt.range;
const yt = tt((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
yt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : tt((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
yt.range;
function yi(t, e, n, r, i, a) {
  const s = [
    [xt, 1, lt],
    [xt, 5, 5 * lt],
    [xt, 15, 15 * lt],
    [xt, 30, 30 * lt],
    [a, 1, it],
    [a, 5, 5 * it],
    [a, 15, 15 * it],
    [a, 30, 30 * it],
    [i, 1, ft],
    [i, 3, 3 * ft],
    [i, 6, 6 * ft],
    [i, 12, 12 * ft],
    [r, 1, ht],
    [r, 2, 2 * ht],
    [n, 1, Fe],
    [e, 1, Qe],
    [e, 3, 3 * Qe],
    [t, 1, le]
  ];
  function u(c, x, p) {
    const v = x < c;
    v && ([c, x] = [x, c]);
    const D = p && typeof p.range == "function" ? p : y(c, x, p), z = D ? D.range(c, +x + 1) : [];
    return v ? z.reverse() : z;
  }
  function y(c, x, p) {
    const v = Math.abs(x - c) / p, D = _e(([, , _]) => _).right(s, v);
    if (D === s.length)
      return t.every(ye(c / le, x / le, p));
    if (D === 0)
      return $t.every(Math.max(ye(c, x, p), 1));
    const [z, T] = s[v / s[D - 1][2] < s[D][2] / v ? D - 1 : D];
    return z.every(T);
  }
  return [u, y];
}
const [pi, ki] = yi(mt, Nt, Ct, gt, It, Et);
function fe(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function he(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ft(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function vi(t) {
  var e = t.dateTime, n = t.date, r = t.time, i = t.periods, a = t.days, s = t.shortDays, u = t.months, y = t.shortMonths, c = Yt(i), x = Lt(i), p = Yt(a), v = Lt(a), D = Yt(s), z = Lt(s), T = Yt(u), _ = Lt(u), I = Yt(y), W = Lt(y), O = {
    a: Z,
    A: j,
    b: B,
    B: k,
    c: null,
    d: nn,
    e: nn,
    f: Vi,
    g: Ji,
    G: ta,
    H: Oi,
    I: Hi,
    j: Pi,
    L: Un,
    m: Ri,
    M: Bi,
    p: U,
    q: A,
    Q: sn,
    s: on,
    S: Zi,
    u: ji,
    U: qi,
    V: Xi,
    w: Gi,
    W: Qi,
    x: null,
    X: null,
    y: $i,
    Y: Ki,
    Z: ea,
    "%": an
  }, V = {
    a: L,
    A: H,
    b: Q,
    B: q,
    c: null,
    d: rn,
    e: rn,
    f: aa,
    g: ga,
    G: pa,
    H: na,
    I: ra,
    j: ia,
    L: Fn,
    m: sa,
    M: oa,
    p: dt,
    q: G,
    Q: sn,
    s: on,
    S: ca,
    u: ua,
    U: la,
    V: fa,
    w: ha,
    W: ma,
    x: null,
    X: null,
    y: da,
    Y: ya,
    Z: ka,
    "%": an
  }, P = {
    a: g,
    A: l,
    b: f,
    B: b,
    c: o,
    d: tn,
    e: tn,
    f: Ii,
    g: Ke,
    G: Je,
    H: en,
    I: en,
    j: Fi,
    L: Ei,
    m: Ai,
    M: Yi,
    p: h,
    q: Ui,
    Q: Wi,
    s: zi,
    S: Li,
    u: wi,
    U: Di,
    V: Ci,
    w: Mi,
    W: Si,
    x: F,
    X: m,
    y: Ke,
    Y: Je,
    Z: _i,
    "%": Ni
  };
  O.x = C(n, O), O.X = C(r, O), O.c = C(e, O), V.x = C(n, V), V.X = C(r, V), V.c = C(e, V);
  function C(M, S) {
    return function(E) {
      var d = [], X = -1, N = 0, $ = M.length, J, at, rt;
      for (E instanceof Date || (E = /* @__PURE__ */ new Date(+E)); ++X < $; )
        M.charCodeAt(X) === 37 && (d.push(M.slice(N, X)), (at = $e[J = M.charAt(++X)]) != null ? J = M.charAt(++X) : at = J === "e" ? " " : "0", (rt = S[J]) && (J = rt(E, at)), d.push(J), N = X + 1);
      return d.push(M.slice(N, X)), d.join("");
    };
  }
  function Y(M, S) {
    return function(E) {
      var d = Ft(1900, void 0, 1), X = w(d, M, E += "", 0), N, $;
      if (X != E.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (S && !("Z" in d) && (d.Z = 0), "p" in d && (d.H = d.H % 12 + d.p * 12), d.m === void 0 && (d.m = "q" in d ? d.q : 0), "V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        "w" in d || (d.w = 1), "Z" in d ? (N = he(Ft(d.y, 0, 1)), $ = N.getUTCDay(), N = $ > 4 || $ === 0 ? Kt.ceil(N) : Kt(N), N = Ye.offset(N, (d.V - 1) * 7), d.y = N.getUTCFullYear(), d.m = N.getUTCMonth(), d.d = N.getUTCDate() + (d.w + 6) % 7) : (N = fe(Ft(d.y, 0, 1)), $ = N.getDay(), N = $ > 4 || $ === 0 ? Jt.ceil(N) : Jt(N), N = gt.offset(N, (d.V - 1) * 7), d.y = N.getFullYear(), d.m = N.getMonth(), d.d = N.getDate() + (d.w + 6) % 7);
      } else
        ("W" in d || "U" in d) && ("w" in d || (d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0), $ = "Z" in d ? he(Ft(d.y, 0, 1)).getUTCDay() : fe(Ft(d.y, 0, 1)).getDay(), d.m = 0, d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - ($ + 5) % 7 : d.w + d.U * 7 - ($ + 6) % 7);
      return "Z" in d ? (d.H += d.Z / 100 | 0, d.M += d.Z % 100, he(d)) : fe(d);
    };
  }
  function w(M, S, E, d) {
    for (var X = 0, N = S.length, $ = E.length, J, at; X < N; ) {
      if (d >= $)
        return -1;
      if (J = S.charCodeAt(X++), J === 37) {
        if (J = S.charAt(X++), at = P[J in $e ? S.charAt(X++) : J], !at || (d = at(M, E, d)) < 0)
          return -1;
      } else if (J != E.charCodeAt(d++))
        return -1;
    }
    return d;
  }
  function h(M, S, E) {
    var d = c.exec(S.slice(E));
    return d ? (M.p = x.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function g(M, S, E) {
    var d = D.exec(S.slice(E));
    return d ? (M.w = z.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function l(M, S, E) {
    var d = p.exec(S.slice(E));
    return d ? (M.w = v.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function f(M, S, E) {
    var d = I.exec(S.slice(E));
    return d ? (M.m = W.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function b(M, S, E) {
    var d = T.exec(S.slice(E));
    return d ? (M.m = _.get(d[0].toLowerCase()), E + d[0].length) : -1;
  }
  function o(M, S, E) {
    return w(M, e, S, E);
  }
  function F(M, S, E) {
    return w(M, n, S, E);
  }
  function m(M, S, E) {
    return w(M, r, S, E);
  }
  function Z(M) {
    return s[M.getDay()];
  }
  function j(M) {
    return a[M.getDay()];
  }
  function B(M) {
    return y[M.getMonth()];
  }
  function k(M) {
    return u[M.getMonth()];
  }
  function U(M) {
    return i[+(M.getHours() >= 12)];
  }
  function A(M) {
    return 1 + ~~(M.getMonth() / 3);
  }
  function L(M) {
    return s[M.getUTCDay()];
  }
  function H(M) {
    return a[M.getUTCDay()];
  }
  function Q(M) {
    return y[M.getUTCMonth()];
  }
  function q(M) {
    return u[M.getUTCMonth()];
  }
  function dt(M) {
    return i[+(M.getUTCHours() >= 12)];
  }
  function G(M) {
    return 1 + ~~(M.getUTCMonth() / 3);
  }
  return {
    format: function(M) {
      var S = C(M += "", O);
      return S.toString = function() {
        return M;
      }, S;
    },
    parse: function(M) {
      var S = Y(M += "", !1);
      return S.toString = function() {
        return M;
      }, S;
    },
    utcFormat: function(M) {
      var S = C(M += "", V);
      return S.toString = function() {
        return M;
      }, S;
    },
    utcParse: function(M) {
      var S = Y(M += "", !0);
      return S.toString = function() {
        return M;
      }, S;
    }
  };
}
var $e = { "-": "", _: " ", 0: "0" }, et = /^\s*\d+/, Ti = /^%/, xi = /[\\^$*+?|[\]().{}]/g;
function R(t, e, n) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length;
  return r + (a < n ? new Array(n - a + 1).join(e) + i : i);
}
function bi(t) {
  return t.replace(xi, "\\$&");
}
function Yt(t) {
  return new RegExp("^(?:" + t.map(bi).join("|") + ")", "i");
}
function Lt(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function Mi(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function wi(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function Di(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function Ci(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function Si(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function Je(t, e, n) {
  var r = et.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Ke(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function _i(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Ui(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Ai(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function tn(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Fi(t, e, n) {
  var r = et.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function en(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Yi(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function Li(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function Ei(t, e, n) {
  var r = et.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Ii(t, e, n) {
  var r = et.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Ni(t, e, n) {
  var r = Ti.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Wi(t, e, n) {
  var r = et.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function zi(t, e, n) {
  var r = et.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function nn(t, e) {
  return R(t.getDate(), e, 2);
}
function Oi(t, e) {
  return R(t.getHours(), e, 2);
}
function Hi(t, e) {
  return R(t.getHours() % 12 || 12, e, 2);
}
function Pi(t, e) {
  return R(1 + gt.count(mt(t), t), e, 3);
}
function Un(t, e) {
  return R(t.getMilliseconds(), e, 3);
}
function Vi(t, e) {
  return Un(t, e) + "000";
}
function Ri(t, e) {
  return R(t.getMonth() + 1, e, 2);
}
function Bi(t, e) {
  return R(t.getMinutes(), e, 2);
}
function Zi(t, e) {
  return R(t.getSeconds(), e, 2);
}
function ji(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function qi(t, e) {
  return R(Ct.count(mt(t) - 1, t), e, 2);
}
function An(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? St(t) : St.ceil(t);
}
function Xi(t, e) {
  return t = An(t), R(St.count(mt(t), t) + (mt(t).getDay() === 4), e, 2);
}
function Gi(t) {
  return t.getDay();
}
function Qi(t, e) {
  return R(Jt.count(mt(t) - 1, t), e, 2);
}
function $i(t, e) {
  return R(t.getFullYear() % 100, e, 2);
}
function Ji(t, e) {
  return t = An(t), R(t.getFullYear() % 100, e, 2);
}
function Ki(t, e) {
  return R(t.getFullYear() % 1e4, e, 4);
}
function ta(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? St(t) : St.ceil(t), R(t.getFullYear() % 1e4, e, 4);
}
function ea(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + R(e / 60 | 0, "0", 2) + R(e % 60, "0", 2);
}
function rn(t, e) {
  return R(t.getUTCDate(), e, 2);
}
function na(t, e) {
  return R(t.getUTCHours(), e, 2);
}
function ra(t, e) {
  return R(t.getUTCHours() % 12 || 12, e, 2);
}
function ia(t, e) {
  return R(1 + Ye.count(yt(t), t), e, 3);
}
function Fn(t, e) {
  return R(t.getUTCMilliseconds(), e, 3);
}
function aa(t, e) {
  return Fn(t, e) + "000";
}
function sa(t, e) {
  return R(t.getUTCMonth() + 1, e, 2);
}
function oa(t, e) {
  return R(t.getUTCMinutes(), e, 2);
}
function ca(t, e) {
  return R(t.getUTCSeconds(), e, 2);
}
function ua(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function la(t, e) {
  return R(_n.count(yt(t) - 1, t), e, 2);
}
function Yn(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? _t(t) : _t.ceil(t);
}
function fa(t, e) {
  return t = Yn(t), R(_t.count(yt(t), t) + (yt(t).getUTCDay() === 4), e, 2);
}
function ha(t) {
  return t.getUTCDay();
}
function ma(t, e) {
  return R(Kt.count(yt(t) - 1, t), e, 2);
}
function da(t, e) {
  return R(t.getUTCFullYear() % 100, e, 2);
}
function ga(t, e) {
  return t = Yn(t), R(t.getUTCFullYear() % 100, e, 2);
}
function ya(t, e) {
  return R(t.getUTCFullYear() % 1e4, e, 4);
}
function pa(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? _t(t) : _t.ceil(t), R(t.getUTCFullYear() % 1e4, e, 4);
}
function ka() {
  return "+0000";
}
function an() {
  return "%";
}
function sn(t) {
  return +t;
}
function on(t) {
  return Math.floor(+t / 1e3);
}
var vt, te;
va({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function va(t) {
  return vt = vi(t), te = vt.format, vt.parse, vt.utcFormat, vt.utcParse, vt;
}
function Ta(t) {
  return new Date(t);
}
function xa(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Ln(t, e, n, r, i, a, s, u, y, c) {
  var x = Cn(), p = x.invert, v = x.domain, D = c(".%L"), z = c(":%S"), T = c("%I:%M"), _ = c("%I %p"), I = c("%a %d"), W = c("%b %d"), O = c("%B"), V = c("%Y");
  function P(C) {
    return (y(C) < C ? D : u(C) < C ? z : s(C) < C ? T : a(C) < C ? _ : r(C) < C ? i(C) < C ? I : W : n(C) < C ? O : V)(C);
  }
  return x.invert = function(C) {
    return new Date(p(C));
  }, x.domain = function(C) {
    return arguments.length ? v(Array.from(C, xa)) : v().map(Ta);
  }, x.ticks = function(C) {
    var Y = v();
    return t(Y[0], Y[Y.length - 1], C ?? 10);
  }, x.tickFormat = function(C, Y) {
    return Y == null ? P : c(Y);
  }, x.nice = function(C) {
    var Y = v();
    return (!C || typeof C.range != "function") && (C = e(Y[0], Y[Y.length - 1], C ?? 10)), C ? v(ri(Y, C)) : x;
  }, x.copy = function() {
    return Dn(x, Ln(t, e, n, r, i, a, s, u, y, c));
  }, x;
}
function ba() {
  return mn.apply(Ln(pi, ki, mt, Nt, Ct, gt, It, Et, xt, te).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Te = {}, Ma = {
  get exports() {
    return Te;
  },
  set exports(t) {
    Te = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Se, function() {
    var n = "day";
    return function(r, i, a) {
      var s = function(c) {
        return c.add(4 - c.isoWeekday(), n);
      }, u = i.prototype;
      u.isoWeekYear = function() {
        return s(this).year();
      }, u.isoWeek = function(c) {
        if (!this.$utils().u(c))
          return this.add(7 * (c - this.isoWeek()), n);
        var x, p, v, D, z = s(this), T = (x = this.isoWeekYear(), p = this.$u, v = (p ? a.utc : a)().year(x).startOf("year"), D = 4 - v.isoWeekday(), v.isoWeekday() > 4 && (D += 7), v.add(D, n));
        return z.diff(T, "week") + 1;
      }, u.isoWeekday = function(c) {
        return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
      };
      var y = u.startOf;
      u.startOf = function(c, x) {
        var p = this.$utils(), v = !!p.u(x) || x;
        return p.p(c) === "isoweek" ? v ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : y.bind(this)(c, x);
      };
    };
  });
})(Ma);
const wa = Te;
var xe = {}, Da = {
  get exports() {
    return xe;
  },
  set exports(t) {
    xe = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Se, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, a = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, u = {}, y = function(T) {
      return (T = +T) + (T > 68 ? 1900 : 2e3);
    }, c = function(T) {
      return function(_) {
        this[T] = +_;
      };
    }, x = [/[+-]\d\d:?(\d\d)?|Z/, function(T) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var I = _.match(/([+-]|\d\d)/g), W = 60 * I[1] + (+I[2] || 0);
        return W === 0 ? 0 : I[0] === "+" ? -W : W;
      }(T);
    }], p = function(T) {
      var _ = u[T];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, v = function(T, _) {
      var I, W = u.meridiem;
      if (W) {
        for (var O = 1; O <= 24; O += 1)
          if (T.indexOf(W(O, 0, _)) > -1) {
            I = O > 12;
            break;
          }
      } else
        I = T === (_ ? "pm" : "PM");
      return I;
    }, D = { A: [s, function(T) {
      this.afternoon = v(T, !1);
    }], a: [s, function(T) {
      this.afternoon = v(T, !0);
    }], S: [/\d/, function(T) {
      this.milliseconds = 100 * +T;
    }], SS: [i, function(T) {
      this.milliseconds = 10 * +T;
    }], SSS: [/\d{3}/, function(T) {
      this.milliseconds = +T;
    }], s: [a, c("seconds")], ss: [a, c("seconds")], m: [a, c("minutes")], mm: [a, c("minutes")], H: [a, c("hours")], h: [a, c("hours")], HH: [a, c("hours")], hh: [a, c("hours")], D: [a, c("day")], DD: [i, c("day")], Do: [s, function(T) {
      var _ = u.ordinal, I = T.match(/\d+/);
      if (this.day = I[0], _)
        for (var W = 1; W <= 31; W += 1)
          _(W).replace(/\[|\]/g, "") === T && (this.day = W);
    }], M: [a, c("month")], MM: [i, c("month")], MMM: [s, function(T) {
      var _ = p("months"), I = (p("monthsShort") || _.map(function(W) {
        return W.slice(0, 3);
      })).indexOf(T) + 1;
      if (I < 1)
        throw new Error();
      this.month = I % 12 || I;
    }], MMMM: [s, function(T) {
      var _ = p("months").indexOf(T) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, c("year")], YY: [i, function(T) {
      this.year = y(T);
    }], YYYY: [/\d{4}/, c("year")], Z: x, ZZ: x };
    function z(T) {
      var _, I;
      _ = T, I = u && u.formats;
      for (var W = (T = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(h, g, l) {
        var f = l && l.toUpperCase();
        return g || I[l] || n[l] || I[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(b, o, F) {
          return o || F.slice(1);
        });
      })).match(r), O = W.length, V = 0; V < O; V += 1) {
        var P = W[V], C = D[P], Y = C && C[0], w = C && C[1];
        W[V] = w ? { regex: Y, parser: w } : P.replace(/^\[|\]$/g, "");
      }
      return function(h) {
        for (var g = {}, l = 0, f = 0; l < O; l += 1) {
          var b = W[l];
          if (typeof b == "string")
            f += b.length;
          else {
            var o = b.regex, F = b.parser, m = h.slice(f), Z = o.exec(m)[0];
            F.call(g, Z), h = h.replace(Z, "");
          }
        }
        return function(j) {
          var B = j.afternoon;
          if (B !== void 0) {
            var k = j.hours;
            B ? k < 12 && (j.hours += 12) : k === 12 && (j.hours = 0), delete j.afternoon;
          }
        }(g), g;
      };
    }
    return function(T, _, I) {
      I.p.customParseFormat = !0, T && T.parseTwoDigitYear && (y = T.parseTwoDigitYear);
      var W = _.prototype, O = W.parse;
      W.parse = function(V) {
        var P = V.date, C = V.utc, Y = V.args;
        this.$u = C;
        var w = Y[1];
        if (typeof w == "string") {
          var h = Y[2] === !0, g = Y[3] === !0, l = h || g, f = Y[2];
          g && (f = Y[2]), u = this.$locale(), !h && f && (u = I.Ls[f]), this.$d = function(m, Z, j) {
            try {
              if (["x", "X"].indexOf(Z) > -1)
                return new Date((Z === "X" ? 1e3 : 1) * m);
              var B = z(Z)(m), k = B.year, U = B.month, A = B.day, L = B.hours, H = B.minutes, Q = B.seconds, q = B.milliseconds, dt = B.zone, G = /* @__PURE__ */ new Date(), M = A || (k || U ? 1 : G.getDate()), S = k || G.getFullYear(), E = 0;
              k && !U || (E = U > 0 ? U - 1 : G.getMonth());
              var d = L || 0, X = H || 0, N = Q || 0, $ = q || 0;
              return dt ? new Date(Date.UTC(S, E, M, d, X, N, $ + 60 * dt.offset * 1e3)) : j ? new Date(Date.UTC(S, E, M, d, X, N, $)) : new Date(S, E, M, d, X, N, $);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(P, w, C), this.init(), f && f !== !0 && (this.$L = this.locale(f).$L), l && P != this.format(w) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
        } else if (w instanceof Array)
          for (var b = w.length, o = 1; o <= b; o += 1) {
            Y[1] = w[o - 1];
            var F = I.apply(this, Y);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            o === b && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, V);
      };
    };
  });
})(Da);
const Ca = xe;
var be = {}, Sa = {
  get exports() {
    return be;
  },
  set exports(t) {
    be = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(Se, function() {
    return function(n, r) {
      var i = r.prototype, a = i.format;
      i.format = function(s) {
        var u = this, y = this.$locale();
        if (!this.isValid())
          return a.bind(this)(s);
        var c = this.$utils(), x = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(p) {
          switch (p) {
            case "Q":
              return Math.ceil((u.$M + 1) / 3);
            case "Do":
              return y.ordinal(u.$D);
            case "gggg":
              return u.weekYear();
            case "GGGG":
              return u.isoWeekYear();
            case "wo":
              return y.ordinal(u.week(), "W");
            case "w":
            case "ww":
              return c.s(u.week(), p === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return c.s(u.isoWeek(), p === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return c.s(String(u.$H === 0 ? 24 : u.$H), p === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(u.$d.getTime() / 1e3);
            case "x":
              return u.$d.getTime();
            case "z":
              return "[" + u.offsetName() + "]";
            case "zzz":
              return "[" + u.offsetName("long") + "]";
            default:
              return p;
          }
        });
        return a.bind(this)(x);
      };
    };
  });
})(Sa);
const _a = be;
var Me = function() {
  var t = function(w, h, g, l) {
    for (g = g || {}, l = w.length; l--; g[w[l]] = h)
      ;
    return g;
  }, e = [1, 3], n = [1, 5], r = [7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], i = [1, 15], a = [1, 16], s = [1, 17], u = [1, 18], y = [1, 19], c = [1, 20], x = [1, 21], p = [1, 22], v = [1, 23], D = [1, 24], z = [1, 25], T = [1, 26], _ = [1, 27], I = [1, 29], W = [1, 31], O = [1, 34], V = [5, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], P = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, directive: 4, gantt: 5, document: 6, EOF: 7, line: 8, SPACE: 9, statement: 10, NL: 11, dateFormat: 12, inclusiveEndDates: 13, topAxis: 14, axisFormat: 15, tickInterval: 16, excludes: 17, includes: 18, todayMarker: 19, title: 20, acc_title: 21, acc_title_value: 22, acc_descr: 23, acc_descr_value: 24, acc_descr_multiline_value: 25, section: 26, clickStatement: 27, taskTxt: 28, taskData: 29, openDirective: 30, typeDirective: 31, closeDirective: 32, ":": 33, argDirective: 34, click: 35, callbackname: 36, callbackargs: 37, href: 38, clickStatementDebug: 39, open_directive: 40, type_directive: 41, arg_directive: 42, close_directive: 43, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "gantt", 7: "EOF", 9: "SPACE", 11: "NL", 12: "dateFormat", 13: "inclusiveEndDates", 14: "topAxis", 15: "axisFormat", 16: "tickInterval", 17: "excludes", 18: "includes", 19: "todayMarker", 20: "title", 21: "acc_title", 22: "acc_title_value", 23: "acc_descr", 24: "acc_descr_value", 25: "acc_descr_multiline_value", 26: "section", 28: "taskTxt", 29: "taskData", 33: ":", 35: "click", 36: "callbackname", 37: "callbackargs", 38: "href", 40: "open_directive", 41: "type_directive", 42: "arg_directive", 43: "close_directive" },
    productions_: [0, [3, 2], [3, 3], [6, 0], [6, 2], [8, 2], [8, 1], [8, 1], [8, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [10, 2], [10, 1], [4, 4], [4, 6], [27, 2], [27, 3], [27, 3], [27, 4], [27, 3], [27, 4], [27, 2], [39, 2], [39, 3], [39, 3], [39, 4], [39, 3], [39, 4], [39, 2], [30, 1], [31, 1], [34, 1], [32, 1]],
    performAction: function(h, g, l, f, b, o, F) {
      var m = o.length - 1;
      switch (b) {
        case 2:
          return o[m - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          o[m - 1].push(o[m]), this.$ = o[m - 1];
          break;
        case 5:
        case 6:
          this.$ = o[m];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 9:
          f.setDateFormat(o[m].substr(11)), this.$ = o[m].substr(11);
          break;
        case 10:
          f.enableInclusiveEndDates(), this.$ = o[m].substr(18);
          break;
        case 11:
          f.TopAxis(), this.$ = o[m].substr(8);
          break;
        case 12:
          f.setAxisFormat(o[m].substr(11)), this.$ = o[m].substr(11);
          break;
        case 13:
          f.setTickInterval(o[m].substr(13)), this.$ = o[m].substr(13);
          break;
        case 14:
          f.setExcludes(o[m].substr(9)), this.$ = o[m].substr(9);
          break;
        case 15:
          f.setIncludes(o[m].substr(9)), this.$ = o[m].substr(9);
          break;
        case 16:
          f.setTodayMarker(o[m].substr(12)), this.$ = o[m].substr(12);
          break;
        case 17:
          f.setDiagramTitle(o[m].substr(6)), this.$ = o[m].substr(6);
          break;
        case 18:
          this.$ = o[m].trim(), f.setAccTitle(this.$);
          break;
        case 19:
        case 20:
          this.$ = o[m].trim(), f.setAccDescription(this.$);
          break;
        case 21:
          f.addSection(o[m].substr(8)), this.$ = o[m].substr(8);
          break;
        case 23:
          f.addTask(o[m - 1], o[m]), this.$ = "task";
          break;
        case 27:
          this.$ = o[m - 1], f.setClickEvent(o[m - 1], o[m], null);
          break;
        case 28:
          this.$ = o[m - 2], f.setClickEvent(o[m - 2], o[m - 1], o[m]);
          break;
        case 29:
          this.$ = o[m - 2], f.setClickEvent(o[m - 2], o[m - 1], null), f.setLink(o[m - 2], o[m]);
          break;
        case 30:
          this.$ = o[m - 3], f.setClickEvent(o[m - 3], o[m - 2], o[m - 1]), f.setLink(o[m - 3], o[m]);
          break;
        case 31:
          this.$ = o[m - 2], f.setClickEvent(o[m - 2], o[m], null), f.setLink(o[m - 2], o[m - 1]);
          break;
        case 32:
          this.$ = o[m - 3], f.setClickEvent(o[m - 3], o[m - 1], o[m]), f.setLink(o[m - 3], o[m - 2]);
          break;
        case 33:
          this.$ = o[m - 1], f.setLink(o[m - 1], o[m]);
          break;
        case 34:
        case 40:
          this.$ = o[m - 1] + " " + o[m];
          break;
        case 35:
        case 36:
        case 38:
          this.$ = o[m - 2] + " " + o[m - 1] + " " + o[m];
          break;
        case 37:
        case 39:
          this.$ = o[m - 3] + " " + o[m - 2] + " " + o[m - 1] + " " + o[m];
          break;
        case 41:
          f.parseDirective("%%{", "open_directive");
          break;
        case 42:
          f.parseDirective(o[m], "type_directive");
          break;
        case 43:
          o[m] = o[m].trim().replace(/'/g, '"'), f.parseDirective(o[m], "arg_directive");
          break;
        case 44:
          f.parseDirective("}%%", "close_directive", "gantt");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: e, 30: 4, 40: n }, { 1: [3] }, { 3: 6, 4: 2, 5: e, 30: 4, 40: n }, t(r, [2, 3], { 6: 7 }), { 31: 8, 41: [1, 9] }, { 41: [2, 41] }, { 1: [2, 1] }, { 4: 30, 7: [1, 10], 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: i, 13: a, 14: s, 15: u, 16: y, 17: c, 18: x, 19: p, 20: v, 21: D, 23: z, 25: T, 26: _, 27: 28, 28: I, 30: 4, 35: W, 40: n }, { 32: 32, 33: [1, 33], 43: O }, t([33, 43], [2, 42]), t(r, [2, 8], { 1: [2, 2] }), t(r, [2, 4]), { 4: 30, 10: 35, 12: i, 13: a, 14: s, 15: u, 16: y, 17: c, 18: x, 19: p, 20: v, 21: D, 23: z, 25: T, 26: _, 27: 28, 28: I, 30: 4, 35: W, 40: n }, t(r, [2, 6]), t(r, [2, 7]), t(r, [2, 9]), t(r, [2, 10]), t(r, [2, 11]), t(r, [2, 12]), t(r, [2, 13]), t(r, [2, 14]), t(r, [2, 15]), t(r, [2, 16]), t(r, [2, 17]), { 22: [1, 36] }, { 24: [1, 37] }, t(r, [2, 20]), t(r, [2, 21]), t(r, [2, 22]), { 29: [1, 38] }, t(r, [2, 24]), { 36: [1, 39], 38: [1, 40] }, { 11: [1, 41] }, { 34: 42, 42: [1, 43] }, { 11: [2, 44] }, t(r, [2, 5]), t(r, [2, 18]), t(r, [2, 19]), t(r, [2, 23]), t(r, [2, 27], { 37: [1, 44], 38: [1, 45] }), t(r, [2, 33], { 36: [1, 46] }), t(V, [2, 25]), { 32: 47, 43: O }, { 43: [2, 43] }, t(r, [2, 28], { 38: [1, 48] }), t(r, [2, 29]), t(r, [2, 31], { 37: [1, 49] }), { 11: [1, 50] }, t(r, [2, 30]), t(r, [2, 32]), t(V, [2, 26])],
    defaultActions: { 5: [2, 41], 6: [2, 1], 34: [2, 44], 43: [2, 43] },
    parseError: function(h, g) {
      if (g.recoverable)
        this.trace(h);
      else {
        var l = new Error(h);
        throw l.hash = g, l;
      }
    },
    parse: function(h) {
      var g = this, l = [0], f = [], b = [null], o = [], F = this.table, m = "", Z = 0, j = 0, B = 2, k = 1, U = o.slice.call(arguments, 1), A = Object.create(this.lexer), L = { yy: {} };
      for (var H in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, H) && (L.yy[H] = this.yy[H]);
      A.setInput(h, L.yy), L.yy.lexer = A, L.yy.parser = this, typeof A.yylloc > "u" && (A.yylloc = {});
      var Q = A.yylloc;
      o.push(Q);
      var q = A.options && A.options.ranges;
      typeof L.yy.parseError == "function" ? this.parseError = L.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function dt() {
        var rt;
        return rt = f.pop() || A.lex() || k, typeof rt != "number" && (rt instanceof Array && (f = rt, rt = f.pop()), rt = g.symbols_[rt] || rt), rt;
      }
      for (var G, M, S, E, d = {}, X, N, $, J; ; ) {
        if (M = l[l.length - 1], this.defaultActions[M] ? S = this.defaultActions[M] : ((G === null || typeof G > "u") && (G = dt()), S = F[M] && F[M][G]), typeof S > "u" || !S.length || !S[0]) {
          var at = "";
          J = [];
          for (X in F[M])
            this.terminals_[X] && X > B && J.push("'" + this.terminals_[X] + "'");
          A.showPosition ? at = "Parse error on line " + (Z + 1) + `:
` + A.showPosition() + `
Expecting ` + J.join(", ") + ", got '" + (this.terminals_[G] || G) + "'" : at = "Parse error on line " + (Z + 1) + ": Unexpected " + (G == k ? "end of input" : "'" + (this.terminals_[G] || G) + "'"), this.parseError(at, {
            text: A.match,
            token: this.terminals_[G] || G,
            line: A.yylineno,
            loc: Q,
            expected: J
          });
        }
        if (S[0] instanceof Array && S.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + M + ", token: " + G);
        switch (S[0]) {
          case 1:
            l.push(G), b.push(A.yytext), o.push(A.yylloc), l.push(S[1]), G = null, j = A.yyleng, m = A.yytext, Z = A.yylineno, Q = A.yylloc;
            break;
          case 2:
            if (N = this.productions_[S[1]][1], d.$ = b[b.length - N], d._$ = {
              first_line: o[o.length - (N || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (N || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, q && (d._$.range = [
              o[o.length - (N || 1)].range[0],
              o[o.length - 1].range[1]
            ]), E = this.performAction.apply(d, [
              m,
              j,
              Z,
              L.yy,
              S[1],
              b,
              o
            ].concat(U)), typeof E < "u")
              return E;
            N && (l = l.slice(0, -1 * N * 2), b = b.slice(0, -1 * N), o = o.slice(0, -1 * N)), l.push(this.productions_[S[1]][0]), b.push(d.$), o.push(d._$), $ = F[l[l.length - 2]][l[l.length - 1]], l.push($);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, C = function() {
    var w = {
      EOF: 1,
      parseError: function(g, l) {
        if (this.yy.parser)
          this.yy.parser.parseError(g, l);
        else
          throw new Error(g);
      },
      // resets the lexer, sets new input
      setInput: function(h, g) {
        return this.yy = g || this.yy || {}, this._input = h, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var h = this._input[0];
        this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
        var g = h.match(/(?:\r\n?|\n).*/g);
        return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
      },
      // unshifts one char (or a string) into the input
      unput: function(h) {
        var g = h.length, l = h.split(/(?:\r\n?|\n)/g);
        this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g), this.offset -= g;
        var f = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l.length - 1 && (this.yylineno -= l.length - 1);
        var b = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: l ? (l.length === f.length ? this.yylloc.first_column : 0) + f[f.length - l.length].length - l[0].length : this.yylloc.first_column - g
        }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - g]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(h) {
        this.unput(this.match.slice(h));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var h = this.matched.substr(0, this.matched.length - this.match.length);
        return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var h = this.match;
        return h.length < 20 && (h += this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var h = this.pastInput(), g = new Array(h.length + 1).join("-");
        return h + this.upcomingInput() + `
` + g + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(h, g) {
        var l, f, b;
        if (this.options.backtrack_lexer && (b = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (b.yylloc.range = this.yylloc.range.slice(0))), f = h[0].match(/(?:\r\n?|\n).*/g), f && (this.yylineno += f.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: f ? f[f.length - 1].length - f[f.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h[0].length
        }, this.yytext += h[0], this.match += h[0], this.matches = h, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(h[0].length), this.matched += h[0], l = this.performAction.call(this, this.yy, this, g, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), l)
          return l;
        if (this._backtrack) {
          for (var o in b)
            this[o] = b[o];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var h, g, l, f;
        this._more || (this.yytext = "", this.match = "");
        for (var b = this._currentRules(), o = 0; o < b.length; o++)
          if (l = this._input.match(this.rules[b[o]]), l && (!g || l[0].length > g[0].length)) {
            if (g = l, f = o, this.options.backtrack_lexer) {
              if (h = this.test_match(l, b[o]), h !== !1)
                return h;
              if (this._backtrack) {
                g = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return g ? (h = this.test_match(g, b[f]), h !== !1 ? h : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var g = this.next();
        return g || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(g) {
        this.conditionStack.push(g);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var g = this.conditionStack.length - 1;
        return g > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(g) {
        return g = this.conditionStack.length - 1 - Math.abs(g || 0), g >= 0 ? this.conditionStack[g] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(g) {
        this.begin(g);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(g, l, f, b) {
        switch (f) {
          case 0:
            return this.begin("open_directive"), 40;
          case 1:
            return this.begin("type_directive"), 41;
          case 2:
            return this.popState(), this.begin("arg_directive"), 33;
          case 3:
            return this.popState(), this.popState(), 43;
          case 4:
            return 42;
          case 5:
            return this.begin("acc_title"), 21;
          case 6:
            return this.popState(), "acc_title_value";
          case 7:
            return this.begin("acc_descr"), 23;
          case 8:
            return this.popState(), "acc_descr_value";
          case 9:
            this.begin("acc_descr_multiline");
            break;
          case 10:
            this.popState();
            break;
          case 11:
            return "acc_descr_multiline_value";
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            return 11;
          case 16:
            break;
          case 17:
            break;
          case 18:
            break;
          case 19:
            this.begin("href");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return 38;
          case 22:
            this.begin("callbackname");
            break;
          case 23:
            this.popState();
            break;
          case 24:
            this.popState(), this.begin("callbackargs");
            break;
          case 25:
            return 36;
          case 26:
            this.popState();
            break;
          case 27:
            return 37;
          case 28:
            this.begin("click");
            break;
          case 29:
            this.popState();
            break;
          case 30:
            return 35;
          case 31:
            return 5;
          case 32:
            return 12;
          case 33:
            return 13;
          case 34:
            return 14;
          case 35:
            return 15;
          case 36:
            return 16;
          case 37:
            return 18;
          case 38:
            return 17;
          case 39:
            return 19;
          case 40:
            return "date";
          case 41:
            return 20;
          case 42:
            return "accDescription";
          case 43:
            return 26;
          case 44:
            return 28;
          case 45:
            return 29;
          case 46:
            return 33;
          case 47:
            return 7;
          case 48:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [10, 11], inclusive: !1 }, acc_descr: { rules: [8], inclusive: !1 }, acc_title: { rules: [6], inclusive: !1 }, close_directive: { rules: [], inclusive: !1 }, arg_directive: { rules: [3, 4], inclusive: !1 }, type_directive: { rules: [2, 3], inclusive: !1 }, open_directive: { rules: [1], inclusive: !1 }, callbackargs: { rules: [26, 27], inclusive: !1 }, callbackname: { rules: [23, 24, 25], inclusive: !1 }, href: { rules: [20, 21], inclusive: !1 }, click: { rules: [29, 30], inclusive: !1 }, INITIAL: { rules: [0, 5, 7, 9, 12, 13, 14, 15, 16, 17, 18, 19, 22, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], inclusive: !0 } }
    };
    return w;
  }();
  P.lexer = C;
  function Y() {
    this.yy = {};
  }
  return Y.prototype = P, P.Parser = Y, new Y();
}();
Me.parser = Me;
const Ua = Me;
nt.extend(wa);
nt.extend(Ca);
nt.extend(_a);
let st = "", Le = "", Ee, Ie = "", Wt = [], zt = [], Ne = {}, We = [], ee = [], Ut = "", ze = "";
const En = ["active", "done", "crit", "milestone"];
let Oe = [], Ot = !1, He = !1, we = 0;
const Aa = function(t, e, n) {
  Kn.parseDirective(this, t, e, n);
}, Fa = function() {
  We = [], ee = [], Ut = "", Oe = [], Zt = 0, Ce = void 0, jt = void 0, K = [], st = "", Le = "", ze = "", Ee = void 0, Ie = "", Wt = [], zt = [], Ot = !1, He = !1, we = 0, Ne = {}, tr();
}, Ya = function(t) {
  Le = t;
}, La = function() {
  return Le;
}, Ea = function(t) {
  Ee = t;
}, Ia = function() {
  return Ee;
}, Na = function(t) {
  Ie = t;
}, Wa = function() {
  return Ie;
}, za = function(t) {
  st = t;
}, Oa = function() {
  Ot = !0;
}, Ha = function() {
  return Ot;
}, Pa = function() {
  He = !0;
}, Va = function() {
  return He;
}, Ra = function(t) {
  ze = t;
}, Ba = function() {
  return ze;
}, Za = function() {
  return st;
}, ja = function(t) {
  Wt = t.toLowerCase().split(/[\s,]+/);
}, qa = function() {
  return Wt;
}, Xa = function(t) {
  zt = t.toLowerCase().split(/[\s,]+/);
}, Ga = function() {
  return zt;
}, Qa = function() {
  return Ne;
}, $a = function(t) {
  Ut = t, We.push(t);
}, Ja = function() {
  return We;
}, Ka = function() {
  let t = cn();
  const e = 10;
  let n = 0;
  for (; !t && n < e; )
    t = cn(), n++;
  return ee = K, ee;
}, In = function(t, e, n, r) {
  return r.includes(t.format(e.trim())) ? !1 : t.isoWeekday() >= 6 && n.includes("weekends") || n.includes(t.format("dddd").toLowerCase()) ? !0 : n.includes(t.format(e.trim()));
}, Nn = function(t, e, n, r) {
  if (!n.length || t.manualEndTime)
    return;
  let i;
  t.startTime instanceof Date ? i = nt(t.startTime) : i = nt(t.startTime, e, !0), i = i.add(1, "d");
  let a;
  t.endTime instanceof Date ? a = nt(t.endTime) : a = nt(t.endTime, e, !0);
  const [s, u] = ts(
    i,
    a,
    e,
    n,
    r
  );
  t.endTime = s.toDate(), t.renderEndTime = u;
}, ts = function(t, e, n, r, i) {
  let a = !1, s = null;
  for (; t <= e; )
    a || (s = e.toDate()), a = In(t, n, r, i), a && (e = e.add(1, "d")), t = t.add(1, "d");
  return [e, s];
}, De = function(t, e, n) {
  n = n.trim();
  const i = /^after\s+([\d\w- ]+)/.exec(n.trim());
  if (i !== null) {
    let s = null;
    if (i[1].split(" ").forEach(function(u) {
      let y = At(u);
      y !== void 0 && (s ? y.endTime > s.endTime && (s = y) : s = y);
    }), s)
      return s.endTime;
    {
      const u = /* @__PURE__ */ new Date();
      return u.setHours(0, 0, 0, 0), u;
    }
  }
  let a = nt(n, e.trim(), !0);
  if (a.isValid())
    return a.toDate();
  {
    de.debug("Invalid date:" + n), de.debug("With date format:" + e.trim());
    const s = new Date(n);
    if (s === void 0 || isNaN(s.getTime()))
      throw new Error("Invalid date:" + n);
    return s;
  }
}, Wn = function(t) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, zn = function(t, e, n, r = !1) {
  n = n.trim();
  let i = nt(n, e.trim(), !0);
  if (i.isValid())
    return r && (i = i.add(1, "d")), i.toDate();
  let a = nt(t);
  const [s, u] = Wn(n);
  if (!Number.isNaN(s)) {
    const y = a.add(s, u);
    y.isValid() && (a = y);
  }
  return a.toDate();
};
let Zt = 0;
const wt = function(t) {
  return t === void 0 ? (Zt = Zt + 1, "task" + Zt) : t;
}, es = function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  Vn(r, i, En);
  for (let s = 0; s < r.length; s++)
    r[s] = r[s].trim();
  let a = "";
  switch (r.length) {
    case 1:
      i.id = wt(), i.startTime = t.endTime, a = r[0];
      break;
    case 2:
      i.id = wt(), i.startTime = De(void 0, st, r[0]), a = r[1];
      break;
    case 3:
      i.id = wt(r[0]), i.startTime = De(void 0, st, r[1]), a = r[2];
      break;
  }
  return a && (i.endTime = zn(i.startTime, st, a, Ot), i.manualEndTime = nt(a, "YYYY-MM-DD", !0).isValid(), Nn(i, st, zt, Wt)), i;
}, ns = function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  Vn(r, i, En);
  for (let a = 0; a < r.length; a++)
    r[a] = r[a].trim();
  switch (r.length) {
    case 1:
      i.id = wt(), i.startTime = {
        type: "prevTaskEnd",
        id: t
      }, i.endTime = {
        data: r[0]
      };
      break;
    case 2:
      i.id = wt(), i.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, i.endTime = {
        data: r[1]
      };
      break;
    case 3:
      i.id = wt(r[0]), i.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, i.endTime = {
        data: r[2]
      };
      break;
  }
  return i;
};
let Ce, jt, K = [];
const On = {}, rs = function(t, e) {
  const n = {
    section: Ut,
    type: Ut,
    processed: !1,
    manualEndTime: !1,
    renderEndTime: null,
    raw: { data: e },
    task: t,
    classes: []
  }, r = ns(jt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = jt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = we, we++;
  const i = K.push(n);
  jt = n.id, On[n.id] = i - 1;
}, At = function(t) {
  const e = On[t];
  return K[e];
}, is = function(t, e) {
  const n = {
    section: Ut,
    type: Ut,
    description: t,
    task: t,
    classes: []
  }, r = es(Ce, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, Ce = n, ee.push(n);
}, cn = function() {
  const t = function(n) {
    const r = K[n];
    let i = "";
    switch (K[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const a = At(r.prevTaskId);
        r.startTime = a.endTime;
        break;
      }
      case "getStartDate":
        i = De(void 0, st, K[n].raw.startTime.startData), i && (K[n].startTime = i);
        break;
    }
    return K[n].startTime && (K[n].endTime = zn(
      K[n].startTime,
      st,
      K[n].raw.endTime.data,
      Ot
    ), K[n].endTime && (K[n].processed = !0, K[n].manualEndTime = nt(
      K[n].raw.endTime.data,
      "YYYY-MM-DD",
      !0
    ).isValid(), Nn(K[n], st, zt, Wt))), K[n].processed;
  };
  let e = !0;
  for (const [n, r] of K.entries())
    t(n), e = e && r.processed;
  return e;
}, as = function(t, e) {
  let n = e;
  bt().securityLevel !== "loose" && (n = er(e)), t.split(",").forEach(function(r) {
    At(r) !== void 0 && (Pn(r, () => {
      window.open(n, "_self");
    }), Ne[r] = n);
  }), Hn(t, "clickable");
}, Hn = function(t, e) {
  t.split(",").forEach(function(n) {
    let r = At(n);
    r !== void 0 && r.classes.push(e);
  });
}, ss = function(t, e, n) {
  if (bt().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let a = 0; a < r.length; a++) {
      let s = r[a].trim();
      s.charAt(0) === '"' && s.charAt(s.length - 1) === '"' && (s = s.substr(1, s.length - 2)), r[a] = s;
    }
  }
  r.length === 0 && r.push(t), At(t) !== void 0 && Pn(t, () => {
    ir.runFunc(e, ...r);
  });
}, Pn = function(t, e) {
  Oe.push(
    function() {
      const n = document.querySelector(`[id="${t}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
}, os = function(t, e, n) {
  t.split(",").forEach(function(r) {
    ss(r, e, n);
  }), Hn(t, "clickable");
}, cs = function(t) {
  Oe.forEach(function(e) {
    e(t);
  });
}, us = {
  parseDirective: Aa,
  getConfig: () => bt().gantt,
  clear: Fa,
  setDateFormat: za,
  getDateFormat: Za,
  enableInclusiveEndDates: Oa,
  endDatesAreInclusive: Ha,
  enableTopAxis: Pa,
  topAxisEnabled: Va,
  setAxisFormat: Ya,
  getAxisFormat: La,
  setTickInterval: Ea,
  getTickInterval: Ia,
  setTodayMarker: Na,
  getTodayMarker: Wa,
  setAccTitle: qn,
  getAccTitle: Xn,
  setDiagramTitle: Gn,
  getDiagramTitle: Qn,
  setDisplayMode: Ra,
  getDisplayMode: Ba,
  setAccDescription: $n,
  getAccDescription: Jn,
  addSection: $a,
  getSections: Ja,
  getTasks: Ka,
  addTask: rs,
  findTaskById: At,
  addTaskOrg: is,
  setIncludes: ja,
  getIncludes: qa,
  setExcludes: Xa,
  getExcludes: Ga,
  setClickEvent: os,
  setLink: as,
  getLinks: Qa,
  bindFunctions: cs,
  parseDuration: Wn,
  isInvalidDate: In
};
function Vn(t, e, n) {
  let r = !0;
  for (; r; )
    r = !1, n.forEach(function(i) {
      const a = "^\\s*" + i + "\\s*$", s = new RegExp(a);
      t[0].match(s) && (e[i] = !0, t.shift(1), r = !0);
    });
}
const ls = function() {
  de.debug("Something is calling, setConf, remove the call");
}, fs = (t, e) => {
  let n = [...t].map(() => -1 / 0), r = [...t].sort((a, s) => a.startTime - s.startTime || a.order - s.order), i = 0;
  for (const a of r)
    for (let s = 0; s < n.length; s++)
      if (a.startTime >= n[s]) {
        n[s] = a.endTime, a.order = s + e, s > i && (i = s);
        break;
      }
  return i;
};
let ct;
const hs = function(t, e, n, r) {
  const i = bt().gantt, a = bt().securityLevel;
  let s;
  a === "sandbox" && (s = Ht("#i" + e));
  const u = a === "sandbox" ? Ht(s.nodes()[0].contentDocument.body) : Ht("body"), y = a === "sandbox" ? s.nodes()[0].contentDocument : document, c = y.getElementById(e);
  ct = c.parentElement.offsetWidth, ct === void 0 && (ct = 1200), i.useWidth !== void 0 && (ct = i.useWidth);
  const x = r.db.getTasks();
  let p = [];
  for (const w of x)
    p.push(w.type);
  p = Y(p);
  const v = {};
  let D = 2 * i.topPadding;
  if (r.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const w = {};
    for (const g of x)
      w[g.section] === void 0 ? w[g.section] = [g] : w[g.section].push(g);
    let h = 0;
    for (const g of Object.keys(w)) {
      const l = fs(w[g], h) + 1;
      h += l, D += l * (i.barHeight + i.barGap), v[g] = l;
    }
  } else {
    D += x.length * (i.barHeight + i.barGap);
    for (const w of p)
      v[w] = x.filter((h) => h.type === w).length;
  }
  c.setAttribute("viewBox", "0 0 " + ct + " " + D);
  const z = u.select(`[id="${e}"]`), T = ba().domain([
    yr(x, function(w) {
      return w.startTime;
    }),
    gr(x, function(w) {
      return w.endTime;
    })
  ]).rangeRound([0, ct - i.leftPadding - i.rightPadding]);
  function _(w, h) {
    const g = w.startTime, l = h.startTime;
    let f = 0;
    return g > l ? f = 1 : g < l && (f = -1), f;
  }
  x.sort(_), I(x, ct, D), nr(z, D, ct, i.useMaxWidth), z.append("text").text(r.db.getDiagramTitle()).attr("x", ct / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function I(w, h, g) {
    const l = i.barHeight, f = l + i.barGap, b = i.topPadding, o = i.leftPadding, F = Sn().domain([0, p.length]).range(["#00B9FA", "#F95002"]).interpolate(Wr);
    O(
      f,
      b,
      o,
      h,
      g,
      w,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), V(o, b, h, g), W(w, f, b, o, l, F, h), P(f, b), C(o, b, h, g);
  }
  function W(w, h, g, l, f, b, o) {
    const m = [...new Set(w.map((k) => k.order))].map((k) => w.find((U) => U.order === k));
    z.append("g").selectAll("rect").data(m).enter().append("rect").attr("x", 0).attr("y", function(k, U) {
      return U = k.order, U * h + g - 2;
    }).attr("width", function() {
      return o - i.rightPadding / 2;
    }).attr("height", h).attr("class", function(k) {
      for (const [U, A] of p.entries())
        if (k.type === A)
          return "section section" + U % i.numberSectionStyles;
      return "section section0";
    });
    const Z = z.append("g").selectAll("rect").data(w).enter(), j = r.db.getLinks();
    if (Z.append("rect").attr("id", function(k) {
      return k.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(k) {
      return k.milestone ? T(k.startTime) + l + 0.5 * (T(k.endTime) - T(k.startTime)) - 0.5 * f : T(k.startTime) + l;
    }).attr("y", function(k, U) {
      return U = k.order, U * h + g;
    }).attr("width", function(k) {
      return k.milestone ? f : T(k.renderEndTime || k.endTime) - T(k.startTime);
    }).attr("height", f).attr("transform-origin", function(k, U) {
      return U = k.order, (T(k.startTime) + l + 0.5 * (T(k.endTime) - T(k.startTime))).toString() + "px " + (U * h + g + 0.5 * f).toString() + "px";
    }).attr("class", function(k) {
      const U = "task";
      let A = "";
      k.classes.length > 0 && (A = k.classes.join(" "));
      let L = 0;
      for (const [Q, q] of p.entries())
        k.type === q && (L = Q % i.numberSectionStyles);
      let H = "";
      return k.active ? k.crit ? H += " activeCrit" : H = " active" : k.done ? k.crit ? H = " doneCrit" : H = " done" : k.crit && (H += " crit"), H.length === 0 && (H = " task"), k.milestone && (H = " milestone " + H), H += L, H += " " + A, U + H;
    }), Z.append("text").attr("id", function(k) {
      return k.id + "-text";
    }).text(function(k) {
      return k.task;
    }).attr("font-size", i.fontSize).attr("x", function(k) {
      let U = T(k.startTime), A = T(k.renderEndTime || k.endTime);
      k.milestone && (U += 0.5 * (T(k.endTime) - T(k.startTime)) - 0.5 * f), k.milestone && (A = U + f);
      const L = this.getBBox().width;
      return L > A - U ? A + L + 1.5 * i.leftPadding > o ? U + l - 5 : A + l + 5 : (A - U) / 2 + U + l;
    }).attr("y", function(k, U) {
      return U = k.order, U * h + i.barHeight / 2 + (i.fontSize / 2 - 2) + g;
    }).attr("text-height", f).attr("class", function(k) {
      const U = T(k.startTime);
      let A = T(k.endTime);
      k.milestone && (A = U + f);
      const L = this.getBBox().width;
      let H = "";
      k.classes.length > 0 && (H = k.classes.join(" "));
      let Q = 0;
      for (const [dt, G] of p.entries())
        k.type === G && (Q = dt % i.numberSectionStyles);
      let q = "";
      return k.active && (k.crit ? q = "activeCritText" + Q : q = "activeText" + Q), k.done ? k.crit ? q = q + " doneCritText" + Q : q = q + " doneText" + Q : k.crit && (q = q + " critText" + Q), k.milestone && (q += " milestoneText"), L > A - U ? A + L + 1.5 * i.leftPadding > o ? H + " taskTextOutsideLeft taskTextOutside" + Q + " " + q : H + " taskTextOutsideRight taskTextOutside" + Q + " " + q + " width-" + L : H + " taskText taskText" + Q + " " + q + " width-" + L;
    }), bt().securityLevel === "sandbox") {
      let k;
      k = Ht("#i" + e);
      const U = k.nodes()[0].contentDocument;
      Z.filter(function(A) {
        return j[A.id] !== void 0;
      }).each(function(A) {
        var L = U.querySelector("#" + A.id), H = U.querySelector("#" + A.id + "-text");
        const Q = L.parentNode;
        var q = U.createElement("a");
        q.setAttribute("xlink:href", j[A.id]), q.setAttribute("target", "_top"), Q.appendChild(q), q.appendChild(L), q.appendChild(H);
      });
    }
  }
  function O(w, h, g, l, f, b, o, F) {
    const m = b.reduce(
      (L, { startTime: H }) => L ? Math.min(L, H) : H,
      0
    ), Z = b.reduce((L, { endTime: H }) => L ? Math.max(L, H) : H, 0), j = r.db.getDateFormat();
    if (!m || !Z)
      return;
    const B = [];
    let k = null, U = nt(m);
    for (; U.valueOf() <= Z; )
      r.db.isInvalidDate(U, j, o, F) ? k ? k.end = U : k = {
        start: U,
        end: U
      } : k && (B.push(k), k = null), U = U.add(1, "d");
    z.append("g").selectAll("rect").data(B).enter().append("rect").attr("id", function(L) {
      return "exclude-" + L.start.format("YYYY-MM-DD");
    }).attr("x", function(L) {
      return T(L.start) + g;
    }).attr("y", i.gridLineStartPadding).attr("width", function(L) {
      const H = L.end.add(1, "day");
      return T(H) - T(L.start);
    }).attr("height", f - h - i.gridLineStartPadding).attr("transform-origin", function(L, H) {
      return (T(L.start) + g + 0.5 * (T(L.end) - T(L.start))).toString() + "px " + (H * w + 0.5 * f).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function V(w, h, g, l) {
    let f = wr(T).tickSize(-l + h + i.gridLineStartPadding).tickFormat(te(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
    const o = /^([1-9]\d*)(minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || i.tickInterval
    );
    if (o !== null) {
      const F = o[1];
      switch (o[2]) {
        case "minute":
          f.ticks(Et.every(F));
          break;
        case "hour":
          f.ticks(It.every(F));
          break;
        case "day":
          f.ticks(gt.every(F));
          break;
        case "week":
          f.ticks(Ct.every(F));
          break;
        case "month":
          f.ticks(Nt.every(F));
          break;
      }
    }
    if (z.append("g").attr("class", "grid").attr("transform", "translate(" + w + ", " + (l - 50) + ")").call(f).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || i.topAxis) {
      let F = Mr(T).tickSize(-l + h + i.gridLineStartPadding).tickFormat(te(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
      if (o !== null) {
        const m = o[1];
        switch (o[2]) {
          case "minute":
            F.ticks(Et.every(m));
            break;
          case "hour":
            F.ticks(It.every(m));
            break;
          case "day":
            F.ticks(gt.every(m));
            break;
          case "week":
            F.ticks(Ct.every(m));
            break;
          case "month":
            F.ticks(Nt.every(m));
            break;
        }
      }
      z.append("g").attr("class", "grid").attr("transform", "translate(" + w + ", " + h + ")").call(F).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function P(w, h) {
    let g = 0;
    const l = Object.keys(v).map((f) => [f, v[f]]);
    z.append("g").selectAll("text").data(l).enter().append(function(f) {
      const b = f[0].split(rr.lineBreakRegex), o = -(b.length - 1) / 2, F = y.createElementNS("http://www.w3.org/2000/svg", "text");
      F.setAttribute("dy", o + "em");
      for (const [m, Z] of b.entries()) {
        const j = y.createElementNS("http://www.w3.org/2000/svg", "tspan");
        j.setAttribute("alignment-baseline", "central"), j.setAttribute("x", "10"), m > 0 && j.setAttribute("dy", "1em"), j.textContent = Z, F.appendChild(j);
      }
      return F;
    }).attr("x", 10).attr("y", function(f, b) {
      if (b > 0)
        for (let o = 0; o < b; o++)
          return g += l[b - 1][1], f[1] * w / 2 + g * w + h;
      else
        return f[1] * w / 2 + h;
    }).attr("font-size", i.sectionFontSize).attr("class", function(f) {
      for (const [b, o] of p.entries())
        if (f[0] === o)
          return "sectionTitle sectionTitle" + b % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function C(w, h, g, l) {
    const f = r.db.getTodayMarker();
    if (f === "off")
      return;
    const b = z.append("g").attr("class", "today"), o = /* @__PURE__ */ new Date(), F = b.append("line");
    F.attr("x1", T(o) + w).attr("x2", T(o) + w).attr("y1", i.titleTopMargin).attr("y2", l - i.titleTopMargin).attr("class", "today"), f !== "" && F.attr("style", f.replace(/,/g, ";"));
  }
  function Y(w) {
    const h = {}, g = [];
    for (let l = 0, f = w.length; l < f; ++l)
      Object.prototype.hasOwnProperty.call(h, w[l]) || (h[w[l]] = !0, g.push(w[l]));
    return g;
  }
}, ms = {
  setConf: ls,
  draw: hs
}, ds = (t) => `
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`, gs = ds, vs = {
  parser: Ua,
  db: us,
  renderer: ms,
  styles: gs
};
export {
  vs as diagram
};
