import { I as Ve, J as Pe, R as Re, K as Be, L as gn, M as jt, N as yn, O as ye, P as nt, c as xt, s as kn, g as pn, z as Tn, A as vn, b as xn, a as bn, m as wn, B as Cn, n as Dn, l as ae, h as Ht, i as Mn, j as Sn, x as _n } from "./index-0c19e849.js";
import { b as Un, t as Se, c as Yn, a as Fn, l as Ln } from "./linear-63a0ee5e.js";
import { i as En } from "./init-f9637058.js";
import "vue";
function An(t, e) {
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
function In(t, e) {
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
function Wn(t) {
  return t;
}
var Nt = 1, Qt = 2, oe = 3, zt = 4, _e = 1e-6;
function On(t) {
  return "translate(" + t + ",0)";
}
function Hn(t) {
  return "translate(0," + t + ")";
}
function zn(t) {
  return (e) => +t(e);
}
function Nn(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function Vn() {
  return !this.__axis;
}
function Ze(t, e) {
  var n = [], r = null, i = null, s = 6, o = 6, y = 3, M = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = t === Nt || t === zt ? -1 : 1, D = t === zt || t === Qt ? "x" : "y", _ = t === Nt || t === oe ? On : Hn;
  function w(b) {
    var P = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), g = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : Wn), Y = Math.max(s, 0) + y, H = e.range(), O = +H[0] + M, N = +H[H.length - 1] + M, V = (e.bandwidth ? Nn : zn)(e.copy(), M), G = b.selection ? b.selection() : b, x = G.selectAll(".domain").data([null]), E = G.selectAll(".tick").data(P, e).order(), T = E.exit(), l = E.enter().append("g").attr("class", "tick"), f = E.select("line"), m = E.select("text");
    x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), E = E.merge(l), f = f.merge(l.append("line").attr("stroke", "currentColor").attr(D + "2", p * s)), m = m.merge(l.append("text").attr("fill", "currentColor").attr(D, p * Y).attr("dy", t === Nt ? "0em" : t === oe ? "0.71em" : "0.32em")), b !== G && (x = x.transition(b), E = E.transition(b), f = f.transition(b), m = m.transition(b), T = T.transition(b).attr("opacity", _e).attr("transform", function(c) {
      return isFinite(c = V(c)) ? _(c + M) : this.getAttribute("transform");
    }), l.attr("opacity", _e).attr("transform", function(c) {
      var v = this.parentNode.__axis;
      return _((v && isFinite(v = v(c)) ? v : V(c)) + M);
    })), T.remove(), x.attr("d", t === zt || t === Qt ? o ? "M" + p * o + "," + O + "H" + M + "V" + N + "H" + p * o : "M" + M + "," + O + "V" + N : o ? "M" + O + "," + p * o + "V" + M + "H" + N + "V" + p * o : "M" + O + "," + M + "H" + N), E.attr("opacity", 1).attr("transform", function(c) {
      return _(V(c) + M);
    }), f.attr(D + "2", p * s), m.attr(D, p * Y).text(g), G.filter(Vn).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Qt ? "start" : t === zt ? "end" : "middle"), G.each(function() {
      this.__axis = V;
    });
  }
  return w.scale = function(b) {
    return arguments.length ? (e = b, w) : e;
  }, w.ticks = function() {
    return n = Array.from(arguments), w;
  }, w.tickArguments = function(b) {
    return arguments.length ? (n = b == null ? [] : Array.from(b), w) : n.slice();
  }, w.tickValues = function(b) {
    return arguments.length ? (r = b == null ? null : Array.from(b), w) : r && r.slice();
  }, w.tickFormat = function(b) {
    return arguments.length ? (i = b, w) : i;
  }, w.tickSize = function(b) {
    return arguments.length ? (s = o = +b, w) : s;
  }, w.tickSizeInner = function(b) {
    return arguments.length ? (s = +b, w) : s;
  }, w.tickSizeOuter = function(b) {
    return arguments.length ? (o = +b, w) : o;
  }, w.tickPadding = function(b) {
    return arguments.length ? (y = +b, w) : y;
  }, w.offset = function(b) {
    return arguments.length ? (M = +b, w) : M;
  }, w;
}
function Pn(t) {
  return Ze(Nt, t);
}
function Rn(t) {
  return Ze(oe, t);
}
const Bn = Math.PI / 180, Zn = 180 / Math.PI, Rt = 18, Xe = 0.96422, qe = 1, Ge = 0.82521, je = 4 / 29, bt = 6 / 29, Qe = 3 * bt * bt, Xn = bt * bt * bt;
function Je(t) {
  if (t instanceof ot)
    return new ot(t.l, t.a, t.b, t.opacity);
  if (t instanceof lt)
    return Ke(t);
  t instanceof Re || (t = gn(t));
  var e = te(t.r), n = te(t.g), r = te(t.b), i = Jt((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / qe), s, o;
  return e === n && n === r ? s = o = i : (s = Jt((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / Xe), o = Jt((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / Ge)), new ot(116 * i - 16, 500 * (s - i), 200 * (i - o), t.opacity);
}
function qn(t, e, n, r) {
  return arguments.length === 1 ? Je(t) : new ot(t, e, n, r ?? 1);
}
function ot(t, e, n, r) {
  this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
}
Ve(ot, qn, Pe(Be, {
  brighter(t) {
    return new ot(this.l + Rt * (t ?? 1), this.a, this.b, this.opacity);
  },
  darker(t) {
    return new ot(this.l - Rt * (t ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n = isNaN(this.b) ? t : t - this.b / 200;
    return e = Xe * Kt(e), t = qe * Kt(t), n = Ge * Kt(n), new Re(
      $t(3.1338561 * e - 1.6168667 * t - 0.4906146 * n),
      $t(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
      $t(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
      this.opacity
    );
  }
}));
function Jt(t) {
  return t > Xn ? Math.pow(t, 1 / 3) : t / Qe + je;
}
function Kt(t) {
  return t > bt ? t * t * t : Qe * (t - je);
}
function $t(t) {
  return 255 * (t <= 31308e-7 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function te(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function Gn(t) {
  if (t instanceof lt)
    return new lt(t.h, t.c, t.l, t.opacity);
  if (t instanceof ot || (t = Je(t)), t.a === 0 && t.b === 0)
    return new lt(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
  var e = Math.atan2(t.b, t.a) * Zn;
  return new lt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function ce(t, e, n, r) {
  return arguments.length === 1 ? Gn(t) : new lt(t, e, n, r ?? 1);
}
function lt(t, e, n, r) {
  this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
}
function Ke(t) {
  if (isNaN(t.h))
    return new ot(t.l, 0, 0, t.opacity);
  var e = t.h * Bn;
  return new ot(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
Ve(lt, ce, Pe(Be, {
  brighter(t) {
    return new lt(this.h, this.c, this.l + Rt * (t ?? 1), this.opacity);
  },
  darker(t) {
    return new lt(this.h, this.c, this.l - Rt * (t ?? 1), this.opacity);
  },
  rgb() {
    return Ke(this).rgb();
  }
}));
function jn(t) {
  return function(e, n) {
    var r = t((e = ce(e)).h, (n = ce(n)).h), i = jt(e.c, n.c), s = jt(e.l, n.l), o = jt(e.opacity, n.opacity);
    return function(y) {
      return e.h = r(y), e.c = i(y), e.l = s(y), e.opacity = o(y), e + "";
    };
  };
}
const Qn = jn(yn);
function Jn(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, i = t[n], s = t[r], o;
  return s < i && (o = n, n = r, r = o, o = i, i = s, s = o), t[n] = e.floor(i), t[r] = e.ceil(s), t;
}
const ee = /* @__PURE__ */ new Date(), ne = /* @__PURE__ */ new Date();
function tt(t, e, n, r) {
  function i(s) {
    return t(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return i.floor = (s) => (t(s = /* @__PURE__ */ new Date(+s)), s), i.ceil = (s) => (t(s = new Date(s - 1)), e(s, 1), t(s), s), i.round = (s) => {
    const o = i(s), y = i.ceil(s);
    return s - o < y - s ? o : y;
  }, i.offset = (s, o) => (e(s = /* @__PURE__ */ new Date(+s), o == null ? 1 : Math.floor(o)), s), i.range = (s, o, y) => {
    const M = [];
    if (s = i.ceil(s), y = y == null ? 1 : Math.floor(y), !(s < o) || !(y > 0))
      return M;
    let p;
    do
      M.push(p = /* @__PURE__ */ new Date(+s)), e(s, y), t(s);
    while (p < s && s < o);
    return M;
  }, i.filter = (s) => tt((o) => {
    if (o >= o)
      for (; t(o), !s(o); )
        o.setTime(o - 1);
  }, (o, y) => {
    if (o >= o)
      if (y < 0)
        for (; ++y <= 0; )
          for (; e(o, -1), !s(o); )
            ;
      else
        for (; --y >= 0; )
          for (; e(o, 1), !s(o); )
            ;
  }), n && (i.count = (s, o) => (ee.setTime(+s), ne.setTime(+o), t(ee), t(ne), Math.floor(n(ee, ne))), i.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? i.filter(r ? (o) => r(o) % s === 0 : (o) => i.count(0, o) % s === 0) : i)), i;
}
const Bt = tt(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
Bt.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? tt((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : Bt);
Bt.range;
const ut = 1e3, it = ut * 60, ft = it * 60, ht = ft * 24, ke = ht * 7, Ue = ht * 30, re = ht * 365, vt = tt((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * ut);
}, (t, e) => (e - t) / ut, (t) => t.getUTCSeconds());
vt.range;
const Lt = tt((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * ut);
}, (t, e) => {
  t.setTime(+t + e * it);
}, (t, e) => (e - t) / it, (t) => t.getMinutes());
Lt.range;
const Kn = tt((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * it);
}, (t, e) => (e - t) / it, (t) => t.getUTCMinutes());
Kn.range;
const Et = tt((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * ut - t.getMinutes() * it);
}, (t, e) => {
  t.setTime(+t + e * ft);
}, (t, e) => (e - t) / ft, (t) => t.getHours());
Et.range;
const $n = tt((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * ft);
}, (t, e) => (e - t) / ft, (t) => t.getUTCHours());
$n.range;
const gt = tt(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * it) / ht,
  (t) => t.getDate() - 1
);
gt.range;
const pe = tt((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / ht, (t) => t.getUTCDate() - 1);
pe.range;
const tr = tt((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / ht, (t) => Math.floor(t / ht));
tr.range;
function kt(t) {
  return tt((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * it) / ke);
}
const Ct = kt(0), Zt = kt(1), er = kt(2), nr = kt(3), Dt = kt(4), rr = kt(5), ir = kt(6);
Ct.range;
Zt.range;
er.range;
nr.range;
Dt.range;
rr.range;
ir.range;
function pt(t) {
  return tt((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / ke);
}
const $e = pt(0), Xt = pt(1), sr = pt(2), ar = pt(3), Mt = pt(4), or = pt(5), cr = pt(6);
$e.range;
Xt.range;
sr.range;
ar.range;
Mt.range;
or.range;
cr.range;
const At = tt((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
At.range;
const lr = tt((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
lr.range;
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
function ur(t, e, n, r, i, s) {
  const o = [
    [vt, 1, ut],
    [vt, 5, 5 * ut],
    [vt, 15, 15 * ut],
    [vt, 30, 30 * ut],
    [s, 1, it],
    [s, 5, 5 * it],
    [s, 15, 15 * it],
    [s, 30, 30 * it],
    [i, 1, ft],
    [i, 3, 3 * ft],
    [i, 6, 6 * ft],
    [i, 12, 12 * ft],
    [r, 1, ht],
    [r, 2, 2 * ht],
    [n, 1, ke],
    [e, 1, Ue],
    [e, 3, 3 * Ue],
    [t, 1, re]
  ];
  function y(p, D, _) {
    const w = D < p;
    w && ([p, D] = [D, p]);
    const b = _ && typeof _.range == "function" ? _ : M(p, D, _), P = b ? b.range(p, +D + 1) : [];
    return w ? P.reverse() : P;
  }
  function M(p, D, _) {
    const w = Math.abs(D - p) / _, b = Un(([, , Y]) => Y).right(o, w);
    if (b === o.length)
      return t.every(Se(p / re, D / re, _));
    if (b === 0)
      return Bt.every(Math.max(Se(p, D, _), 1));
    const [P, g] = o[w / o[b - 1][2] < o[b][2] / w ? b - 1 : b];
    return P.every(g);
  }
  return [y, M];
}
const [fr, hr] = ur(mt, At, Ct, gt, Et, Lt);
function ie(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function se(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ut(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function mr(t) {
  var e = t.dateTime, n = t.date, r = t.time, i = t.periods, s = t.days, o = t.shortDays, y = t.months, M = t.shortMonths, p = Yt(i), D = Ft(i), _ = Yt(s), w = Ft(s), b = Yt(o), P = Ft(o), g = Yt(y), Y = Ft(y), H = Yt(M), O = Ft(M), N = {
    a: B,
    A: Z,
    b: J,
    B: d,
    c: null,
    d: Ie,
    e: Ie,
    f: Wr,
    g: Xr,
    G: Gr,
    H: Er,
    I: Ar,
    j: Ir,
    L: tn,
    m: Or,
    M: Hr,
    p: S,
    q: U,
    Q: He,
    s: ze,
    S: zr,
    u: Nr,
    U: Vr,
    V: Pr,
    w: Rr,
    W: Br,
    x: null,
    X: null,
    y: Zr,
    Y: qr,
    Z: jr,
    "%": Oe
  }, V = {
    a: F,
    A: W,
    b: j,
    B: R,
    c: null,
    d: We,
    e: We,
    f: $r,
    g: li,
    G: fi,
    H: Qr,
    I: Jr,
    j: Kr,
    L: nn,
    m: ti,
    M: ei,
    p: dt,
    q,
    Q: He,
    s: ze,
    S: ni,
    u: ri,
    U: ii,
    V: si,
    w: ai,
    W: oi,
    x: null,
    X: null,
    y: ci,
    Y: ui,
    Z: hi,
    "%": Oe
  }, G = {
    a: f,
    A: m,
    b: c,
    B: v,
    c: a,
    d: Ee,
    e: Ee,
    f: Ur,
    g: Le,
    G: Fe,
    H: Ae,
    I: Ae,
    j: Dr,
    L: _r,
    m: Cr,
    M: Mr,
    p: l,
    q: wr,
    Q: Fr,
    s: Lr,
    S: Sr,
    u: pr,
    U: Tr,
    V: vr,
    w: kr,
    W: xr,
    x: A,
    X: h,
    y: Le,
    Y: Fe,
    Z: br,
    "%": Yr
  };
  N.x = x(n, N), N.X = x(r, N), N.c = x(e, N), V.x = x(n, V), V.X = x(r, V), V.c = x(e, V);
  function x(k, C) {
    return function(L) {
      var u = [], X = -1, I = 0, Q = k.length, K, st, rt;
      for (L instanceof Date || (L = /* @__PURE__ */ new Date(+L)); ++X < Q; )
        k.charCodeAt(X) === 37 && (u.push(k.slice(I, X)), (st = Ye[K = k.charAt(++X)]) != null ? K = k.charAt(++X) : st = K === "e" ? " " : "0", (rt = C[K]) && (K = rt(L, st)), u.push(K), I = X + 1);
      return u.push(k.slice(I, X)), u.join("");
    };
  }
  function E(k, C) {
    return function(L) {
      var u = Ut(1900, void 0, 1), X = T(u, k, L += "", 0), I, Q;
      if (X != L.length)
        return null;
      if ("Q" in u)
        return new Date(u.Q);
      if ("s" in u)
        return new Date(u.s * 1e3 + ("L" in u ? u.L : 0));
      if (C && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + u.p * 12), u.m === void 0 && (u.m = "q" in u ? u.q : 0), "V" in u) {
        if (u.V < 1 || u.V > 53)
          return null;
        "w" in u || (u.w = 1), "Z" in u ? (I = se(Ut(u.y, 0, 1)), Q = I.getUTCDay(), I = Q > 4 || Q === 0 ? Xt.ceil(I) : Xt(I), I = pe.offset(I, (u.V - 1) * 7), u.y = I.getUTCFullYear(), u.m = I.getUTCMonth(), u.d = I.getUTCDate() + (u.w + 6) % 7) : (I = ie(Ut(u.y, 0, 1)), Q = I.getDay(), I = Q > 4 || Q === 0 ? Zt.ceil(I) : Zt(I), I = gt.offset(I, (u.V - 1) * 7), u.y = I.getFullYear(), u.m = I.getMonth(), u.d = I.getDate() + (u.w + 6) % 7);
      } else
        ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), Q = "Z" in u ? se(Ut(u.y, 0, 1)).getUTCDay() : ie(Ut(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + u.W * 7 - (Q + 5) % 7 : u.w + u.U * 7 - (Q + 6) % 7);
      return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, se(u)) : ie(u);
    };
  }
  function T(k, C, L, u) {
    for (var X = 0, I = C.length, Q = L.length, K, st; X < I; ) {
      if (u >= Q)
        return -1;
      if (K = C.charCodeAt(X++), K === 37) {
        if (K = C.charAt(X++), st = G[K in Ye ? C.charAt(X++) : K], !st || (u = st(k, L, u)) < 0)
          return -1;
      } else if (K != L.charCodeAt(u++))
        return -1;
    }
    return u;
  }
  function l(k, C, L) {
    var u = p.exec(C.slice(L));
    return u ? (k.p = D.get(u[0].toLowerCase()), L + u[0].length) : -1;
  }
  function f(k, C, L) {
    var u = b.exec(C.slice(L));
    return u ? (k.w = P.get(u[0].toLowerCase()), L + u[0].length) : -1;
  }
  function m(k, C, L) {
    var u = _.exec(C.slice(L));
    return u ? (k.w = w.get(u[0].toLowerCase()), L + u[0].length) : -1;
  }
  function c(k, C, L) {
    var u = H.exec(C.slice(L));
    return u ? (k.m = O.get(u[0].toLowerCase()), L + u[0].length) : -1;
  }
  function v(k, C, L) {
    var u = g.exec(C.slice(L));
    return u ? (k.m = Y.get(u[0].toLowerCase()), L + u[0].length) : -1;
  }
  function a(k, C, L) {
    return T(k, e, C, L);
  }
  function A(k, C, L) {
    return T(k, n, C, L);
  }
  function h(k, C, L) {
    return T(k, r, C, L);
  }
  function B(k) {
    return o[k.getDay()];
  }
  function Z(k) {
    return s[k.getDay()];
  }
  function J(k) {
    return M[k.getMonth()];
  }
  function d(k) {
    return y[k.getMonth()];
  }
  function S(k) {
    return i[+(k.getHours() >= 12)];
  }
  function U(k) {
    return 1 + ~~(k.getMonth() / 3);
  }
  function F(k) {
    return o[k.getUTCDay()];
  }
  function W(k) {
    return s[k.getUTCDay()];
  }
  function j(k) {
    return M[k.getUTCMonth()];
  }
  function R(k) {
    return y[k.getUTCMonth()];
  }
  function dt(k) {
    return i[+(k.getUTCHours() >= 12)];
  }
  function q(k) {
    return 1 + ~~(k.getUTCMonth() / 3);
  }
  return {
    format: function(k) {
      var C = x(k += "", N);
      return C.toString = function() {
        return k;
      }, C;
    },
    parse: function(k) {
      var C = E(k += "", !1);
      return C.toString = function() {
        return k;
      }, C;
    },
    utcFormat: function(k) {
      var C = x(k += "", V);
      return C.toString = function() {
        return k;
      }, C;
    },
    utcParse: function(k) {
      var C = E(k += "", !0);
      return C.toString = function() {
        return k;
      }, C;
    }
  };
}
var Ye = { "-": "", _: " ", 0: "0" }, et = /^\s*\d+/, dr = /^%/, gr = /[\\^$*+?|[\]().{}]/g;
function z(t, e, n) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", s = i.length;
  return r + (s < n ? new Array(n - s + 1).join(e) + i : i);
}
function yr(t) {
  return t.replace(gr, "\\$&");
}
function Yt(t) {
  return new RegExp("^(?:" + t.map(yr).join("|") + ")", "i");
}
function Ft(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function kr(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function pr(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function Tr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function vr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function xr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function Fe(t, e, n) {
  var r = et.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Le(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function br(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function wr(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Cr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function Ee(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Dr(t, e, n) {
  var r = et.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function Ae(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Mr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function Sr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function _r(t, e, n) {
  var r = et.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Ur(t, e, n) {
  var r = et.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Yr(t, e, n) {
  var r = dr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Fr(t, e, n) {
  var r = et.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function Lr(t, e, n) {
  var r = et.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function Ie(t, e) {
  return z(t.getDate(), e, 2);
}
function Er(t, e) {
  return z(t.getHours(), e, 2);
}
function Ar(t, e) {
  return z(t.getHours() % 12 || 12, e, 2);
}
function Ir(t, e) {
  return z(1 + gt.count(mt(t), t), e, 3);
}
function tn(t, e) {
  return z(t.getMilliseconds(), e, 3);
}
function Wr(t, e) {
  return tn(t, e) + "000";
}
function Or(t, e) {
  return z(t.getMonth() + 1, e, 2);
}
function Hr(t, e) {
  return z(t.getMinutes(), e, 2);
}
function zr(t, e) {
  return z(t.getSeconds(), e, 2);
}
function Nr(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function Vr(t, e) {
  return z(Ct.count(mt(t) - 1, t), e, 2);
}
function en(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? Dt(t) : Dt.ceil(t);
}
function Pr(t, e) {
  return t = en(t), z(Dt.count(mt(t), t) + (mt(t).getDay() === 4), e, 2);
}
function Rr(t) {
  return t.getDay();
}
function Br(t, e) {
  return z(Zt.count(mt(t) - 1, t), e, 2);
}
function Zr(t, e) {
  return z(t.getFullYear() % 100, e, 2);
}
function Xr(t, e) {
  return t = en(t), z(t.getFullYear() % 100, e, 2);
}
function qr(t, e) {
  return z(t.getFullYear() % 1e4, e, 4);
}
function Gr(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? Dt(t) : Dt.ceil(t), z(t.getFullYear() % 1e4, e, 4);
}
function jr(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + z(e / 60 | 0, "0", 2) + z(e % 60, "0", 2);
}
function We(t, e) {
  return z(t.getUTCDate(), e, 2);
}
function Qr(t, e) {
  return z(t.getUTCHours(), e, 2);
}
function Jr(t, e) {
  return z(t.getUTCHours() % 12 || 12, e, 2);
}
function Kr(t, e) {
  return z(1 + pe.count(yt(t), t), e, 3);
}
function nn(t, e) {
  return z(t.getUTCMilliseconds(), e, 3);
}
function $r(t, e) {
  return nn(t, e) + "000";
}
function ti(t, e) {
  return z(t.getUTCMonth() + 1, e, 2);
}
function ei(t, e) {
  return z(t.getUTCMinutes(), e, 2);
}
function ni(t, e) {
  return z(t.getUTCSeconds(), e, 2);
}
function ri(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function ii(t, e) {
  return z($e.count(yt(t) - 1, t), e, 2);
}
function rn(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? Mt(t) : Mt.ceil(t);
}
function si(t, e) {
  return t = rn(t), z(Mt.count(yt(t), t) + (yt(t).getUTCDay() === 4), e, 2);
}
function ai(t) {
  return t.getUTCDay();
}
function oi(t, e) {
  return z(Xt.count(yt(t) - 1, t), e, 2);
}
function ci(t, e) {
  return z(t.getUTCFullYear() % 100, e, 2);
}
function li(t, e) {
  return t = rn(t), z(t.getUTCFullYear() % 100, e, 2);
}
function ui(t, e) {
  return z(t.getUTCFullYear() % 1e4, e, 4);
}
function fi(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? Mt(t) : Mt.ceil(t), z(t.getUTCFullYear() % 1e4, e, 4);
}
function hi() {
  return "+0000";
}
function Oe() {
  return "%";
}
function He(t) {
  return +t;
}
function ze(t) {
  return Math.floor(+t / 1e3);
}
var Tt, qt;
mi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function mi(t) {
  return Tt = mr(t), qt = Tt.format, Tt.parse, Tt.utcFormat, Tt.utcParse, Tt;
}
function di(t) {
  return new Date(t);
}
function gi(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function sn(t, e, n, r, i, s, o, y, M, p) {
  var D = Yn(), _ = D.invert, w = D.domain, b = p(".%L"), P = p(":%S"), g = p("%I:%M"), Y = p("%I %p"), H = p("%a %d"), O = p("%b %d"), N = p("%B"), V = p("%Y");
  function G(x) {
    return (M(x) < x ? b : y(x) < x ? P : o(x) < x ? g : s(x) < x ? Y : r(x) < x ? i(x) < x ? H : O : n(x) < x ? N : V)(x);
  }
  return D.invert = function(x) {
    return new Date(_(x));
  }, D.domain = function(x) {
    return arguments.length ? w(Array.from(x, gi)) : w().map(di);
  }, D.ticks = function(x) {
    var E = w();
    return t(E[0], E[E.length - 1], x ?? 10);
  }, D.tickFormat = function(x, E) {
    return E == null ? G : p(E);
  }, D.nice = function(x) {
    var E = w();
    return (!x || typeof x.range != "function") && (x = e(E[0], E[E.length - 1], x ?? 10)), x ? w(Jn(E, x)) : D;
  }, D.copy = function() {
    return Fn(D, sn(t, e, n, r, i, s, o, y, M, p));
  }, D;
}
function yi() {
  return En.apply(sn(fr, hr, mt, At, Ct, gt, Et, Lt, vt, qt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var le = {}, ki = {
  get exports() {
    return le;
  },
  set exports(t) {
    le = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(ye, function() {
    var n = "day";
    return function(r, i, s) {
      var o = function(p) {
        return p.add(4 - p.isoWeekday(), n);
      }, y = i.prototype;
      y.isoWeekYear = function() {
        return o(this).year();
      }, y.isoWeek = function(p) {
        if (!this.$utils().u(p))
          return this.add(7 * (p - this.isoWeek()), n);
        var D, _, w, b, P = o(this), g = (D = this.isoWeekYear(), _ = this.$u, w = (_ ? s.utc : s)().year(D).startOf("year"), b = 4 - w.isoWeekday(), w.isoWeekday() > 4 && (b += 7), w.add(b, n));
        return P.diff(g, "week") + 1;
      }, y.isoWeekday = function(p) {
        return this.$utils().u(p) ? this.day() || 7 : this.day(this.day() % 7 ? p : p - 7);
      };
      var M = y.startOf;
      y.startOf = function(p, D) {
        var _ = this.$utils(), w = !!_.u(D) || D;
        return _.p(p) === "isoweek" ? w ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : M.bind(this)(p, D);
      };
    };
  });
})(ki);
const pi = le;
var ue = {}, Ti = {
  get exports() {
    return ue;
  },
  set exports(t) {
    ue = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(ye, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, s = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, y = {}, M = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, p = function(g) {
      return function(Y) {
        this[g] = +Y;
      };
    }, D = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(Y) {
        if (!Y || Y === "Z")
          return 0;
        var H = Y.match(/([+-]|\d\d)/g), O = 60 * H[1] + (+H[2] || 0);
        return O === 0 ? 0 : H[0] === "+" ? -O : O;
      }(g);
    }], _ = function(g) {
      var Y = y[g];
      return Y && (Y.indexOf ? Y : Y.s.concat(Y.f));
    }, w = function(g, Y) {
      var H, O = y.meridiem;
      if (O) {
        for (var N = 1; N <= 24; N += 1)
          if (g.indexOf(O(N, 0, Y)) > -1) {
            H = N > 12;
            break;
          }
      } else
        H = g === (Y ? "pm" : "PM");
      return H;
    }, b = { A: [o, function(g) {
      this.afternoon = w(g, !1);
    }], a: [o, function(g) {
      this.afternoon = w(g, !0);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [i, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [s, p("seconds")], ss: [s, p("seconds")], m: [s, p("minutes")], mm: [s, p("minutes")], H: [s, p("hours")], h: [s, p("hours")], HH: [s, p("hours")], hh: [s, p("hours")], D: [s, p("day")], DD: [i, p("day")], Do: [o, function(g) {
      var Y = y.ordinal, H = g.match(/\d+/);
      if (this.day = H[0], Y)
        for (var O = 1; O <= 31; O += 1)
          Y(O).replace(/\[|\]/g, "") === g && (this.day = O);
    }], M: [s, p("month")], MM: [i, p("month")], MMM: [o, function(g) {
      var Y = _("months"), H = (_("monthsShort") || Y.map(function(O) {
        return O.slice(0, 3);
      })).indexOf(g) + 1;
      if (H < 1)
        throw new Error();
      this.month = H % 12 || H;
    }], MMMM: [o, function(g) {
      var Y = _("months").indexOf(g) + 1;
      if (Y < 1)
        throw new Error();
      this.month = Y % 12 || Y;
    }], Y: [/[+-]?\d+/, p("year")], YY: [i, function(g) {
      this.year = M(g);
    }], YYYY: [/\d{4}/, p("year")], Z: D, ZZ: D };
    function P(g) {
      var Y, H;
      Y = g, H = y && y.formats;
      for (var O = (g = Y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(l, f, m) {
        var c = m && m.toUpperCase();
        return f || H[m] || n[m] || H[c].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(v, a, A) {
          return a || A.slice(1);
        });
      })).match(r), N = O.length, V = 0; V < N; V += 1) {
        var G = O[V], x = b[G], E = x && x[0], T = x && x[1];
        O[V] = T ? { regex: E, parser: T } : G.replace(/^\[|\]$/g, "");
      }
      return function(l) {
        for (var f = {}, m = 0, c = 0; m < N; m += 1) {
          var v = O[m];
          if (typeof v == "string")
            c += v.length;
          else {
            var a = v.regex, A = v.parser, h = l.slice(c), B = a.exec(h)[0];
            A.call(f, B), l = l.replace(B, "");
          }
        }
        return function(Z) {
          var J = Z.afternoon;
          if (J !== void 0) {
            var d = Z.hours;
            J ? d < 12 && (Z.hours += 12) : d === 12 && (Z.hours = 0), delete Z.afternoon;
          }
        }(f), f;
      };
    }
    return function(g, Y, H) {
      H.p.customParseFormat = !0, g && g.parseTwoDigitYear && (M = g.parseTwoDigitYear);
      var O = Y.prototype, N = O.parse;
      O.parse = function(V) {
        var G = V.date, x = V.utc, E = V.args;
        this.$u = x;
        var T = E[1];
        if (typeof T == "string") {
          var l = E[2] === !0, f = E[3] === !0, m = l || f, c = E[2];
          f && (c = E[2]), y = this.$locale(), !l && c && (y = H.Ls[c]), this.$d = function(h, B, Z) {
            try {
              if (["x", "X"].indexOf(B) > -1)
                return new Date((B === "X" ? 1e3 : 1) * h);
              var J = P(B)(h), d = J.year, S = J.month, U = J.day, F = J.hours, W = J.minutes, j = J.seconds, R = J.milliseconds, dt = J.zone, q = /* @__PURE__ */ new Date(), k = U || (d || S ? 1 : q.getDate()), C = d || q.getFullYear(), L = 0;
              d && !S || (L = S > 0 ? S - 1 : q.getMonth());
              var u = F || 0, X = W || 0, I = j || 0, Q = R || 0;
              return dt ? new Date(Date.UTC(C, L, k, u, X, I, Q + 60 * dt.offset * 1e3)) : Z ? new Date(Date.UTC(C, L, k, u, X, I, Q)) : new Date(C, L, k, u, X, I, Q);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(G, T, x), this.init(), c && c !== !0 && (this.$L = this.locale(c).$L), m && G != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), y = {};
        } else if (T instanceof Array)
          for (var v = T.length, a = 1; a <= v; a += 1) {
            E[1] = T[a - 1];
            var A = H.apply(this, E);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
              break;
            }
            a === v && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          N.call(this, V);
      };
    };
  });
})(Ti);
const vi = ue;
var fe = {}, xi = {
  get exports() {
    return fe;
  },
  set exports(t) {
    fe = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(ye, function() {
    return function(n, r) {
      var i = r.prototype, s = i.format;
      i.format = function(o) {
        var y = this, M = this.$locale();
        if (!this.isValid())
          return s.bind(this)(o);
        var p = this.$utils(), D = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(_) {
          switch (_) {
            case "Q":
              return Math.ceil((y.$M + 1) / 3);
            case "Do":
              return M.ordinal(y.$D);
            case "gggg":
              return y.weekYear();
            case "GGGG":
              return y.isoWeekYear();
            case "wo":
              return M.ordinal(y.week(), "W");
            case "w":
            case "ww":
              return p.s(y.week(), _ === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return p.s(y.isoWeek(), _ === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return p.s(String(y.$H === 0 ? 24 : y.$H), _ === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(y.$d.getTime() / 1e3);
            case "x":
              return y.$d.getTime();
            case "z":
              return "[" + y.offsetName() + "]";
            case "zzz":
              return "[" + y.offsetName("long") + "]";
            default:
              return _;
          }
        });
        return s.bind(this)(D);
      };
    };
  });
})(xi);
const bi = fe;
var he = function() {
  var t = function(T, l, f, m) {
    for (f = f || {}, m = T.length; m--; f[T[m]] = l)
      ;
    return f;
  }, e = [1, 3], n = [1, 5], r = [7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], i = [1, 15], s = [1, 16], o = [1, 17], y = [1, 18], M = [1, 19], p = [1, 20], D = [1, 21], _ = [1, 22], w = [1, 23], b = [1, 24], P = [1, 25], g = [1, 26], Y = [1, 27], H = [1, 29], O = [1, 31], N = [1, 34], V = [5, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], G = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, directive: 4, gantt: 5, document: 6, EOF: 7, line: 8, SPACE: 9, statement: 10, NL: 11, dateFormat: 12, inclusiveEndDates: 13, topAxis: 14, axisFormat: 15, tickInterval: 16, excludes: 17, includes: 18, todayMarker: 19, title: 20, acc_title: 21, acc_title_value: 22, acc_descr: 23, acc_descr_value: 24, acc_descr_multiline_value: 25, section: 26, clickStatement: 27, taskTxt: 28, taskData: 29, openDirective: 30, typeDirective: 31, closeDirective: 32, ":": 33, argDirective: 34, click: 35, callbackname: 36, callbackargs: 37, href: 38, clickStatementDebug: 39, open_directive: 40, type_directive: 41, arg_directive: 42, close_directive: 43, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "gantt", 7: "EOF", 9: "SPACE", 11: "NL", 12: "dateFormat", 13: "inclusiveEndDates", 14: "topAxis", 15: "axisFormat", 16: "tickInterval", 17: "excludes", 18: "includes", 19: "todayMarker", 20: "title", 21: "acc_title", 22: "acc_title_value", 23: "acc_descr", 24: "acc_descr_value", 25: "acc_descr_multiline_value", 26: "section", 28: "taskTxt", 29: "taskData", 33: ":", 35: "click", 36: "callbackname", 37: "callbackargs", 38: "href", 40: "open_directive", 41: "type_directive", 42: "arg_directive", 43: "close_directive" },
    productions_: [0, [3, 2], [3, 3], [6, 0], [6, 2], [8, 2], [8, 1], [8, 1], [8, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [10, 2], [10, 1], [4, 4], [4, 6], [27, 2], [27, 3], [27, 3], [27, 4], [27, 3], [27, 4], [27, 2], [39, 2], [39, 3], [39, 3], [39, 4], [39, 3], [39, 4], [39, 2], [30, 1], [31, 1], [34, 1], [32, 1]],
    performAction: function(l, f, m, c, v, a, A) {
      var h = a.length - 1;
      switch (v) {
        case 2:
          return a[h - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          a[h - 1].push(a[h]), this.$ = a[h - 1];
          break;
        case 5:
        case 6:
          this.$ = a[h];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 9:
          c.setDateFormat(a[h].substr(11)), this.$ = a[h].substr(11);
          break;
        case 10:
          c.enableInclusiveEndDates(), this.$ = a[h].substr(18);
          break;
        case 11:
          c.TopAxis(), this.$ = a[h].substr(8);
          break;
        case 12:
          c.setAxisFormat(a[h].substr(11)), this.$ = a[h].substr(11);
          break;
        case 13:
          c.setTickInterval(a[h].substr(13)), this.$ = a[h].substr(13);
          break;
        case 14:
          c.setExcludes(a[h].substr(9)), this.$ = a[h].substr(9);
          break;
        case 15:
          c.setIncludes(a[h].substr(9)), this.$ = a[h].substr(9);
          break;
        case 16:
          c.setTodayMarker(a[h].substr(12)), this.$ = a[h].substr(12);
          break;
        case 17:
          c.setDiagramTitle(a[h].substr(6)), this.$ = a[h].substr(6);
          break;
        case 18:
          this.$ = a[h].trim(), c.setAccTitle(this.$);
          break;
        case 19:
        case 20:
          this.$ = a[h].trim(), c.setAccDescription(this.$);
          break;
        case 21:
          c.addSection(a[h].substr(8)), this.$ = a[h].substr(8);
          break;
        case 23:
          c.addTask(a[h - 1], a[h]), this.$ = "task";
          break;
        case 27:
          this.$ = a[h - 1], c.setClickEvent(a[h - 1], a[h], null);
          break;
        case 28:
          this.$ = a[h - 2], c.setClickEvent(a[h - 2], a[h - 1], a[h]);
          break;
        case 29:
          this.$ = a[h - 2], c.setClickEvent(a[h - 2], a[h - 1], null), c.setLink(a[h - 2], a[h]);
          break;
        case 30:
          this.$ = a[h - 3], c.setClickEvent(a[h - 3], a[h - 2], a[h - 1]), c.setLink(a[h - 3], a[h]);
          break;
        case 31:
          this.$ = a[h - 2], c.setClickEvent(a[h - 2], a[h], null), c.setLink(a[h - 2], a[h - 1]);
          break;
        case 32:
          this.$ = a[h - 3], c.setClickEvent(a[h - 3], a[h - 1], a[h]), c.setLink(a[h - 3], a[h - 2]);
          break;
        case 33:
          this.$ = a[h - 1], c.setLink(a[h - 1], a[h]);
          break;
        case 34:
        case 40:
          this.$ = a[h - 1] + " " + a[h];
          break;
        case 35:
        case 36:
        case 38:
          this.$ = a[h - 2] + " " + a[h - 1] + " " + a[h];
          break;
        case 37:
        case 39:
          this.$ = a[h - 3] + " " + a[h - 2] + " " + a[h - 1] + " " + a[h];
          break;
        case 41:
          c.parseDirective("%%{", "open_directive");
          break;
        case 42:
          c.parseDirective(a[h], "type_directive");
          break;
        case 43:
          a[h] = a[h].trim().replace(/'/g, '"'), c.parseDirective(a[h], "arg_directive");
          break;
        case 44:
          c.parseDirective("}%%", "close_directive", "gantt");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: e, 30: 4, 40: n }, { 1: [3] }, { 3: 6, 4: 2, 5: e, 30: 4, 40: n }, t(r, [2, 3], { 6: 7 }), { 31: 8, 41: [1, 9] }, { 41: [2, 41] }, { 1: [2, 1] }, { 4: 30, 7: [1, 10], 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: i, 13: s, 14: o, 15: y, 16: M, 17: p, 18: D, 19: _, 20: w, 21: b, 23: P, 25: g, 26: Y, 27: 28, 28: H, 30: 4, 35: O, 40: n }, { 32: 32, 33: [1, 33], 43: N }, t([33, 43], [2, 42]), t(r, [2, 8], { 1: [2, 2] }), t(r, [2, 4]), { 4: 30, 10: 35, 12: i, 13: s, 14: o, 15: y, 16: M, 17: p, 18: D, 19: _, 20: w, 21: b, 23: P, 25: g, 26: Y, 27: 28, 28: H, 30: 4, 35: O, 40: n }, t(r, [2, 6]), t(r, [2, 7]), t(r, [2, 9]), t(r, [2, 10]), t(r, [2, 11]), t(r, [2, 12]), t(r, [2, 13]), t(r, [2, 14]), t(r, [2, 15]), t(r, [2, 16]), t(r, [2, 17]), { 22: [1, 36] }, { 24: [1, 37] }, t(r, [2, 20]), t(r, [2, 21]), t(r, [2, 22]), { 29: [1, 38] }, t(r, [2, 24]), { 36: [1, 39], 38: [1, 40] }, { 11: [1, 41] }, { 34: 42, 42: [1, 43] }, { 11: [2, 44] }, t(r, [2, 5]), t(r, [2, 18]), t(r, [2, 19]), t(r, [2, 23]), t(r, [2, 27], { 37: [1, 44], 38: [1, 45] }), t(r, [2, 33], { 36: [1, 46] }), t(V, [2, 25]), { 32: 47, 43: N }, { 43: [2, 43] }, t(r, [2, 28], { 38: [1, 48] }), t(r, [2, 29]), t(r, [2, 31], { 37: [1, 49] }), { 11: [1, 50] }, t(r, [2, 30]), t(r, [2, 32]), t(V, [2, 26])],
    defaultActions: { 5: [2, 41], 6: [2, 1], 34: [2, 44], 43: [2, 43] },
    parseError: function(l, f) {
      if (f.recoverable)
        this.trace(l);
      else {
        var m = new Error(l);
        throw m.hash = f, m;
      }
    },
    parse: function(l) {
      var f = this, m = [0], c = [], v = [null], a = [], A = this.table, h = "", B = 0, Z = 0, J = 2, d = 1, S = a.slice.call(arguments, 1), U = Object.create(this.lexer), F = { yy: {} };
      for (var W in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, W) && (F.yy[W] = this.yy[W]);
      U.setInput(l, F.yy), F.yy.lexer = U, F.yy.parser = this, typeof U.yylloc > "u" && (U.yylloc = {});
      var j = U.yylloc;
      a.push(j);
      var R = U.options && U.options.ranges;
      typeof F.yy.parseError == "function" ? this.parseError = F.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function dt() {
        var rt;
        return rt = c.pop() || U.lex() || d, typeof rt != "number" && (rt instanceof Array && (c = rt, rt = c.pop()), rt = f.symbols_[rt] || rt), rt;
      }
      for (var q, k, C, L, u = {}, X, I, Q, K; ; ) {
        if (k = m[m.length - 1], this.defaultActions[k] ? C = this.defaultActions[k] : ((q === null || typeof q > "u") && (q = dt()), C = A[k] && A[k][q]), typeof C > "u" || !C.length || !C[0]) {
          var st = "";
          K = [];
          for (X in A[k])
            this.terminals_[X] && X > J && K.push("'" + this.terminals_[X] + "'");
          U.showPosition ? st = "Parse error on line " + (B + 1) + `:
` + U.showPosition() + `
Expecting ` + K.join(", ") + ", got '" + (this.terminals_[q] || q) + "'" : st = "Parse error on line " + (B + 1) + ": Unexpected " + (q == d ? "end of input" : "'" + (this.terminals_[q] || q) + "'"), this.parseError(st, {
            text: U.match,
            token: this.terminals_[q] || q,
            line: U.yylineno,
            loc: j,
            expected: K
          });
        }
        if (C[0] instanceof Array && C.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + k + ", token: " + q);
        switch (C[0]) {
          case 1:
            m.push(q), v.push(U.yytext), a.push(U.yylloc), m.push(C[1]), q = null, Z = U.yyleng, h = U.yytext, B = U.yylineno, j = U.yylloc;
            break;
          case 2:
            if (I = this.productions_[C[1]][1], u.$ = v[v.length - I], u._$ = {
              first_line: a[a.length - (I || 1)].first_line,
              last_line: a[a.length - 1].last_line,
              first_column: a[a.length - (I || 1)].first_column,
              last_column: a[a.length - 1].last_column
            }, R && (u._$.range = [
              a[a.length - (I || 1)].range[0],
              a[a.length - 1].range[1]
            ]), L = this.performAction.apply(u, [
              h,
              Z,
              B,
              F.yy,
              C[1],
              v,
              a
            ].concat(S)), typeof L < "u")
              return L;
            I && (m = m.slice(0, -1 * I * 2), v = v.slice(0, -1 * I), a = a.slice(0, -1 * I)), m.push(this.productions_[C[1]][0]), v.push(u.$), a.push(u._$), Q = A[m[m.length - 2]][m[m.length - 1]], m.push(Q);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, x = function() {
    var T = {
      EOF: 1,
      parseError: function(f, m) {
        if (this.yy.parser)
          this.yy.parser.parseError(f, m);
        else
          throw new Error(f);
      },
      // resets the lexer, sets new input
      setInput: function(l, f) {
        return this.yy = f || this.yy || {}, this._input = l, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var l = this._input[0];
        this.yytext += l, this.yyleng++, this.offset++, this.match += l, this.matched += l;
        var f = l.match(/(?:\r\n?|\n).*/g);
        return f ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), l;
      },
      // unshifts one char (or a string) into the input
      unput: function(l) {
        var f = l.length, m = l.split(/(?:\r\n?|\n)/g);
        this._input = l + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - f), this.offset -= f;
        var c = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), m.length - 1 && (this.yylineno -= m.length - 1);
        var v = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: m ? (m.length === c.length ? this.yylloc.first_column : 0) + c[c.length - m.length].length - m[0].length : this.yylloc.first_column - f
        }, this.options.ranges && (this.yylloc.range = [v[0], v[0] + this.yyleng - f]), this.yyleng = this.yytext.length, this;
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
      less: function(l) {
        this.unput(this.match.slice(l));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var l = this.matched.substr(0, this.matched.length - this.match.length);
        return (l.length > 20 ? "..." : "") + l.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var l = this.match;
        return l.length < 20 && (l += this._input.substr(0, 20 - l.length)), (l.substr(0, 20) + (l.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var l = this.pastInput(), f = new Array(l.length + 1).join("-");
        return l + this.upcomingInput() + `
` + f + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(l, f) {
        var m, c, v;
        if (this.options.backtrack_lexer && (v = {
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
        }, this.options.ranges && (v.yylloc.range = this.yylloc.range.slice(0))), c = l[0].match(/(?:\r\n?|\n).*/g), c && (this.yylineno += c.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: c ? c[c.length - 1].length - c[c.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + l[0].length
        }, this.yytext += l[0], this.match += l[0], this.matches = l, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(l[0].length), this.matched += l[0], m = this.performAction.call(this, this.yy, this, f, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), m)
          return m;
        if (this._backtrack) {
          for (var a in v)
            this[a] = v[a];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var l, f, m, c;
        this._more || (this.yytext = "", this.match = "");
        for (var v = this._currentRules(), a = 0; a < v.length; a++)
          if (m = this._input.match(this.rules[v[a]]), m && (!f || m[0].length > f[0].length)) {
            if (f = m, c = a, this.options.backtrack_lexer) {
              if (l = this.test_match(m, v[a]), l !== !1)
                return l;
              if (this._backtrack) {
                f = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return f ? (l = this.test_match(f, v[c]), l !== !1 ? l : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var f = this.next();
        return f || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(f) {
        this.conditionStack.push(f);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var f = this.conditionStack.length - 1;
        return f > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(f) {
        return f = this.conditionStack.length - 1 - Math.abs(f || 0), f >= 0 ? this.conditionStack[f] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(f) {
        this.begin(f);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(f, m, c, v) {
        switch (c) {
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
    return T;
  }();
  G.lexer = x;
  function E() {
    this.yy = {};
  }
  return E.prototype = G, G.Parser = E, new E();
}();
he.parser = he;
const wi = he;
nt.extend(pi);
nt.extend(vi);
nt.extend(bi);
let at = "", Te = "", ve, xe = "", It = [], Wt = [], be = {}, we = [], Gt = [], St = "", Ce = "";
const an = ["active", "done", "crit", "milestone"];
let De = [], Ot = !1, Me = !1, me = 0;
const Ci = function(t, e, n) {
  wn.parseDirective(this, t, e, n);
}, Di = function() {
  we = [], Gt = [], St = "", De = [], Vt = 0, ge = void 0, Pt = void 0, $ = [], at = "", Te = "", Ce = "", ve = void 0, xe = "", It = [], Wt = [], Ot = !1, Me = !1, me = 0, be = {}, Cn();
}, Mi = function(t) {
  Te = t;
}, Si = function() {
  return Te;
}, _i = function(t) {
  ve = t;
}, Ui = function() {
  return ve;
}, Yi = function(t) {
  xe = t;
}, Fi = function() {
  return xe;
}, Li = function(t) {
  at = t;
}, Ei = function() {
  Ot = !0;
}, Ai = function() {
  return Ot;
}, Ii = function() {
  Me = !0;
}, Wi = function() {
  return Me;
}, Oi = function(t) {
  Ce = t;
}, Hi = function() {
  return Ce;
}, zi = function() {
  return at;
}, Ni = function(t) {
  It = t.toLowerCase().split(/[\s,]+/);
}, Vi = function() {
  return It;
}, Pi = function(t) {
  Wt = t.toLowerCase().split(/[\s,]+/);
}, Ri = function() {
  return Wt;
}, Bi = function() {
  return be;
}, Zi = function(t) {
  St = t, we.push(t);
}, Xi = function() {
  return we;
}, qi = function() {
  let t = Ne();
  const e = 10;
  let n = 0;
  for (; !t && n < e; )
    t = Ne(), n++;
  return Gt = $, Gt;
}, on = function(t, e, n, r) {
  return r.includes(t.format(e.trim())) ? !1 : t.isoWeekday() >= 6 && n.includes("weekends") || n.includes(t.format("dddd").toLowerCase()) ? !0 : n.includes(t.format(e.trim()));
}, cn = function(t, e, n, r) {
  if (!n.length || t.manualEndTime)
    return;
  let i;
  t.startTime instanceof Date ? i = nt(t.startTime) : i = nt(t.startTime, e, !0), i = i.add(1, "d");
  let s;
  t.endTime instanceof Date ? s = nt(t.endTime) : s = nt(t.endTime, e, !0);
  const [o, y] = Gi(
    i,
    s,
    e,
    n,
    r
  );
  t.endTime = o.toDate(), t.renderEndTime = y;
}, Gi = function(t, e, n, r, i) {
  let s = !1, o = null;
  for (; t <= e; )
    s || (o = e.toDate()), s = on(t, n, r, i), s && (e = e.add(1, "d")), t = t.add(1, "d");
  return [e, o];
}, de = function(t, e, n) {
  n = n.trim();
  const i = /^after\s+([\d\w- ]+)/.exec(n.trim());
  if (i !== null) {
    let o = null;
    if (i[1].split(" ").forEach(function(y) {
      let M = _t(y);
      M !== void 0 && (o ? M.endTime > o.endTime && (o = M) : o = M);
    }), o)
      return o.endTime;
    {
      const y = /* @__PURE__ */ new Date();
      return y.setHours(0, 0, 0, 0), y;
    }
  }
  let s = nt(n, e.trim(), !0);
  if (s.isValid())
    return s.toDate();
  {
    ae.debug("Invalid date:" + n), ae.debug("With date format:" + e.trim());
    const o = new Date(n);
    if (o === void 0 || isNaN(o.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    o.getFullYear() < -1e4 || o.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return o;
  }
}, ln = function(t) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, un = function(t, e, n, r = !1) {
  n = n.trim();
  let i = nt(n, e.trim(), !0);
  if (i.isValid())
    return r && (i = i.add(1, "d")), i.toDate();
  let s = nt(t);
  const [o, y] = ln(n);
  if (!Number.isNaN(o)) {
    const M = s.add(o, y);
    M.isValid() && (s = M);
  }
  return s.toDate();
};
let Vt = 0;
const wt = function(t) {
  return t === void 0 ? (Vt = Vt + 1, "task" + Vt) : t;
}, ji = function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  dn(r, i, an);
  for (let o = 0; o < r.length; o++)
    r[o] = r[o].trim();
  let s = "";
  switch (r.length) {
    case 1:
      i.id = wt(), i.startTime = t.endTime, s = r[0];
      break;
    case 2:
      i.id = wt(), i.startTime = de(void 0, at, r[0]), s = r[1];
      break;
    case 3:
      i.id = wt(r[0]), i.startTime = de(void 0, at, r[1]), s = r[2];
      break;
  }
  return s && (i.endTime = un(i.startTime, at, s, Ot), i.manualEndTime = nt(s, "YYYY-MM-DD", !0).isValid(), cn(i, at, Wt, It)), i;
}, Qi = function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  dn(r, i, an);
  for (let s = 0; s < r.length; s++)
    r[s] = r[s].trim();
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
let ge, Pt, $ = [];
const fn = {}, Ji = function(t, e) {
  const n = {
    section: St,
    type: St,
    processed: !1,
    manualEndTime: !1,
    renderEndTime: null,
    raw: { data: e },
    task: t,
    classes: []
  }, r = Qi(Pt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = Pt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = me, me++;
  const i = $.push(n);
  Pt = n.id, fn[n.id] = i - 1;
}, _t = function(t) {
  const e = fn[t];
  return $[e];
}, Ki = function(t, e) {
  const n = {
    section: St,
    type: St,
    description: t,
    task: t,
    classes: []
  }, r = ji(ge, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, ge = n, Gt.push(n);
}, Ne = function() {
  const t = function(n) {
    const r = $[n];
    let i = "";
    switch ($[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const s = _t(r.prevTaskId);
        r.startTime = s.endTime;
        break;
      }
      case "getStartDate":
        i = de(void 0, at, $[n].raw.startTime.startData), i && ($[n].startTime = i);
        break;
    }
    return $[n].startTime && ($[n].endTime = un(
      $[n].startTime,
      at,
      $[n].raw.endTime.data,
      Ot
    ), $[n].endTime && ($[n].processed = !0, $[n].manualEndTime = nt(
      $[n].raw.endTime.data,
      "YYYY-MM-DD",
      !0
    ).isValid(), cn($[n], at, Wt, It))), $[n].processed;
  };
  let e = !0;
  for (const [n, r] of $.entries())
    t(n), e = e && r.processed;
  return e;
}, $i = function(t, e) {
  let n = e;
  xt().securityLevel !== "loose" && (n = Dn(e)), t.split(",").forEach(function(r) {
    _t(r) !== void 0 && (mn(r, () => {
      window.open(n, "_self");
    }), be[r] = n);
  }), hn(t, "clickable");
}, hn = function(t, e) {
  t.split(",").forEach(function(n) {
    let r = _t(n);
    r !== void 0 && r.classes.push(e);
  });
}, ts = function(t, e, n) {
  if (xt().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].trim();
      o.charAt(0) === '"' && o.charAt(o.length - 1) === '"' && (o = o.substr(1, o.length - 2)), r[s] = o;
    }
  }
  r.length === 0 && r.push(t), _t(t) !== void 0 && mn(t, () => {
    _n.runFunc(e, ...r);
  });
}, mn = function(t, e) {
  De.push(
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
}, es = function(t, e, n) {
  t.split(",").forEach(function(r) {
    ts(r, e, n);
  }), hn(t, "clickable");
}, ns = function(t) {
  De.forEach(function(e) {
    e(t);
  });
}, rs = {
  parseDirective: Ci,
  getConfig: () => xt().gantt,
  clear: Di,
  setDateFormat: Li,
  getDateFormat: zi,
  enableInclusiveEndDates: Ei,
  endDatesAreInclusive: Ai,
  enableTopAxis: Ii,
  topAxisEnabled: Wi,
  setAxisFormat: Mi,
  getAxisFormat: Si,
  setTickInterval: _i,
  getTickInterval: Ui,
  setTodayMarker: Yi,
  getTodayMarker: Fi,
  setAccTitle: kn,
  getAccTitle: pn,
  setDiagramTitle: Tn,
  getDiagramTitle: vn,
  setDisplayMode: Oi,
  getDisplayMode: Hi,
  setAccDescription: xn,
  getAccDescription: bn,
  addSection: Zi,
  getSections: Xi,
  getTasks: qi,
  addTask: Ji,
  findTaskById: _t,
  addTaskOrg: Ki,
  setIncludes: Ni,
  getIncludes: Vi,
  setExcludes: Pi,
  getExcludes: Ri,
  setClickEvent: es,
  setLink: $i,
  getLinks: Bi,
  bindFunctions: ns,
  parseDuration: ln,
  isInvalidDate: on
};
function dn(t, e, n) {
  let r = !0;
  for (; r; )
    r = !1, n.forEach(function(i) {
      const s = "^\\s*" + i + "\\s*$", o = new RegExp(s);
      t[0].match(o) && (e[i] = !0, t.shift(1), r = !0);
    });
}
const is = function() {
  ae.debug("Something is calling, setConf, remove the call");
}, ss = (t, e) => {
  let n = [...t].map(() => -1 / 0), r = [...t].sort((s, o) => s.startTime - o.startTime || s.order - o.order), i = 0;
  for (const s of r)
    for (let o = 0; o < n.length; o++)
      if (s.startTime >= n[o]) {
        n[o] = s.endTime, s.order = o + e, o > i && (i = o);
        break;
      }
  return i;
};
let ct;
const as = function(t, e, n, r) {
  const i = xt().gantt, s = xt().securityLevel;
  let o;
  s === "sandbox" && (o = Ht("#i" + e));
  const y = s === "sandbox" ? Ht(o.nodes()[0].contentDocument.body) : Ht("body"), M = s === "sandbox" ? o.nodes()[0].contentDocument : document, p = M.getElementById(e);
  ct = p.parentElement.offsetWidth, ct === void 0 && (ct = 1200), i.useWidth !== void 0 && (ct = i.useWidth);
  const D = r.db.getTasks();
  let _ = [];
  for (const T of D)
    _.push(T.type);
  _ = E(_);
  const w = {};
  let b = 2 * i.topPadding;
  if (r.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const T = {};
    for (const f of D)
      T[f.section] === void 0 ? T[f.section] = [f] : T[f.section].push(f);
    let l = 0;
    for (const f of Object.keys(T)) {
      const m = ss(T[f], l) + 1;
      l += m, b += m * (i.barHeight + i.barGap), w[f] = m;
    }
  } else {
    b += D.length * (i.barHeight + i.barGap);
    for (const T of _)
      w[T] = D.filter((l) => l.type === T).length;
  }
  p.setAttribute("viewBox", "0 0 " + ct + " " + b);
  const P = y.select(`[id="${e}"]`), g = yi().domain([
    In(D, function(T) {
      return T.startTime;
    }),
    An(D, function(T) {
      return T.endTime;
    })
  ]).rangeRound([0, ct - i.leftPadding - i.rightPadding]);
  function Y(T, l) {
    const f = T.startTime, m = l.startTime;
    let c = 0;
    return f > m ? c = 1 : f < m && (c = -1), c;
  }
  D.sort(Y), H(D, ct, b), Mn(P, b, ct, i.useMaxWidth), P.append("text").text(r.db.getDiagramTitle()).attr("x", ct / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function H(T, l, f) {
    const m = i.barHeight, c = m + i.barGap, v = i.topPadding, a = i.leftPadding, A = Ln().domain([0, _.length]).range(["#00B9FA", "#F95002"]).interpolate(Qn);
    N(
      c,
      v,
      a,
      l,
      f,
      T,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), V(a, v, l, f), O(T, c, v, a, m, A, l), G(c, v), x(a, v, l, f);
  }
  function O(T, l, f, m, c, v, a) {
    const h = [...new Set(T.map((d) => d.order))].map((d) => T.find((S) => S.order === d));
    P.append("g").selectAll("rect").data(h).enter().append("rect").attr("x", 0).attr("y", function(d, S) {
      return S = d.order, S * l + f - 2;
    }).attr("width", function() {
      return a - i.rightPadding / 2;
    }).attr("height", l).attr("class", function(d) {
      for (const [S, U] of _.entries())
        if (d.type === U)
          return "section section" + S % i.numberSectionStyles;
      return "section section0";
    });
    const B = P.append("g").selectAll("rect").data(T).enter(), Z = r.db.getLinks();
    if (B.append("rect").attr("id", function(d) {
      return d.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(d) {
      return d.milestone ? g(d.startTime) + m + 0.5 * (g(d.endTime) - g(d.startTime)) - 0.5 * c : g(d.startTime) + m;
    }).attr("y", function(d, S) {
      return S = d.order, S * l + f;
    }).attr("width", function(d) {
      return d.milestone ? c : g(d.renderEndTime || d.endTime) - g(d.startTime);
    }).attr("height", c).attr("transform-origin", function(d, S) {
      return S = d.order, (g(d.startTime) + m + 0.5 * (g(d.endTime) - g(d.startTime))).toString() + "px " + (S * l + f + 0.5 * c).toString() + "px";
    }).attr("class", function(d) {
      const S = "task";
      let U = "";
      d.classes.length > 0 && (U = d.classes.join(" "));
      let F = 0;
      for (const [j, R] of _.entries())
        d.type === R && (F = j % i.numberSectionStyles);
      let W = "";
      return d.active ? d.crit ? W += " activeCrit" : W = " active" : d.done ? d.crit ? W = " doneCrit" : W = " done" : d.crit && (W += " crit"), W.length === 0 && (W = " task"), d.milestone && (W = " milestone " + W), W += F, W += " " + U, S + W;
    }), B.append("text").attr("id", function(d) {
      return d.id + "-text";
    }).text(function(d) {
      return d.task;
    }).attr("font-size", i.fontSize).attr("x", function(d) {
      let S = g(d.startTime), U = g(d.renderEndTime || d.endTime);
      d.milestone && (S += 0.5 * (g(d.endTime) - g(d.startTime)) - 0.5 * c), d.milestone && (U = S + c);
      const F = this.getBBox().width;
      return F > U - S ? U + F + 1.5 * i.leftPadding > a ? S + m - 5 : U + m + 5 : (U - S) / 2 + S + m;
    }).attr("y", function(d, S) {
      return S = d.order, S * l + i.barHeight / 2 + (i.fontSize / 2 - 2) + f;
    }).attr("text-height", c).attr("class", function(d) {
      const S = g(d.startTime);
      let U = g(d.endTime);
      d.milestone && (U = S + c);
      const F = this.getBBox().width;
      let W = "";
      d.classes.length > 0 && (W = d.classes.join(" "));
      let j = 0;
      for (const [dt, q] of _.entries())
        d.type === q && (j = dt % i.numberSectionStyles);
      let R = "";
      return d.active && (d.crit ? R = "activeCritText" + j : R = "activeText" + j), d.done ? d.crit ? R = R + " doneCritText" + j : R = R + " doneText" + j : d.crit && (R = R + " critText" + j), d.milestone && (R += " milestoneText"), F > U - S ? U + F + 1.5 * i.leftPadding > a ? W + " taskTextOutsideLeft taskTextOutside" + j + " " + R : W + " taskTextOutsideRight taskTextOutside" + j + " " + R + " width-" + F : W + " taskText taskText" + j + " " + R + " width-" + F;
    }), xt().securityLevel === "sandbox") {
      let d;
      d = Ht("#i" + e);
      const S = d.nodes()[0].contentDocument;
      B.filter(function(U) {
        return Z[U.id] !== void 0;
      }).each(function(U) {
        var F = S.querySelector("#" + U.id), W = S.querySelector("#" + U.id + "-text");
        const j = F.parentNode;
        var R = S.createElement("a");
        R.setAttribute("xlink:href", Z[U.id]), R.setAttribute("target", "_top"), j.appendChild(R), R.appendChild(F), R.appendChild(W);
      });
    }
  }
  function N(T, l, f, m, c, v, a, A) {
    const h = v.reduce(
      (F, { startTime: W }) => F ? Math.min(F, W) : W,
      0
    ), B = v.reduce((F, { endTime: W }) => F ? Math.max(F, W) : W, 0), Z = r.db.getDateFormat();
    if (!h || !B)
      return;
    const J = [];
    let d = null, S = nt(h);
    for (; S.valueOf() <= B; )
      r.db.isInvalidDate(S, Z, a, A) ? d ? d.end = S : d = {
        start: S,
        end: S
      } : d && (J.push(d), d = null), S = S.add(1, "d");
    P.append("g").selectAll("rect").data(J).enter().append("rect").attr("id", function(F) {
      return "exclude-" + F.start.format("YYYY-MM-DD");
    }).attr("x", function(F) {
      return g(F.start) + f;
    }).attr("y", i.gridLineStartPadding).attr("width", function(F) {
      const W = F.end.add(1, "day");
      return g(W) - g(F.start);
    }).attr("height", c - l - i.gridLineStartPadding).attr("transform-origin", function(F, W) {
      return (g(F.start) + f + 0.5 * (g(F.end) - g(F.start))).toString() + "px " + (W * T + 0.5 * c).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function V(T, l, f, m) {
    let c = Rn(g).tickSize(-m + l + i.gridLineStartPadding).tickFormat(qt(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
    const a = /^([1-9]\d*)(minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || i.tickInterval
    );
    if (a !== null) {
      const A = a[1];
      switch (a[2]) {
        case "minute":
          c.ticks(Lt.every(A));
          break;
        case "hour":
          c.ticks(Et.every(A));
          break;
        case "day":
          c.ticks(gt.every(A));
          break;
        case "week":
          c.ticks(Ct.every(A));
          break;
        case "month":
          c.ticks(At.every(A));
          break;
      }
    }
    if (P.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + (m - 50) + ")").call(c).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || i.topAxis) {
      let A = Pn(g).tickSize(-m + l + i.gridLineStartPadding).tickFormat(qt(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
      if (a !== null) {
        const h = a[1];
        switch (a[2]) {
          case "minute":
            A.ticks(Lt.every(h));
            break;
          case "hour":
            A.ticks(Et.every(h));
            break;
          case "day":
            A.ticks(gt.every(h));
            break;
          case "week":
            A.ticks(Ct.every(h));
            break;
          case "month":
            A.ticks(At.every(h));
            break;
        }
      }
      P.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + l + ")").call(A).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function G(T, l) {
    let f = 0;
    const m = Object.keys(w).map((c) => [c, w[c]]);
    P.append("g").selectAll("text").data(m).enter().append(function(c) {
      const v = c[0].split(Sn.lineBreakRegex), a = -(v.length - 1) / 2, A = M.createElementNS("http://www.w3.org/2000/svg", "text");
      A.setAttribute("dy", a + "em");
      for (const [h, B] of v.entries()) {
        const Z = M.createElementNS("http://www.w3.org/2000/svg", "tspan");
        Z.setAttribute("alignment-baseline", "central"), Z.setAttribute("x", "10"), h > 0 && Z.setAttribute("dy", "1em"), Z.textContent = B, A.appendChild(Z);
      }
      return A;
    }).attr("x", 10).attr("y", function(c, v) {
      if (v > 0)
        for (let a = 0; a < v; a++)
          return f += m[v - 1][1], c[1] * T / 2 + f * T + l;
      else
        return c[1] * T / 2 + l;
    }).attr("font-size", i.sectionFontSize).attr("class", function(c) {
      for (const [v, a] of _.entries())
        if (c[0] === a)
          return "sectionTitle sectionTitle" + v % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function x(T, l, f, m) {
    const c = r.db.getTodayMarker();
    if (c === "off")
      return;
    const v = P.append("g").attr("class", "today"), a = /* @__PURE__ */ new Date(), A = v.append("line");
    A.attr("x1", g(a) + T).attr("x2", g(a) + T).attr("y1", i.titleTopMargin).attr("y2", m - i.titleTopMargin).attr("class", "today"), c !== "" && A.attr("style", c.replace(/,/g, ";"));
  }
  function E(T) {
    const l = {}, f = [];
    for (let m = 0, c = T.length; m < c; ++m)
      Object.prototype.hasOwnProperty.call(l, T[m]) || (l[T[m]] = !0, f.push(T[m]));
    return f;
  }
}, os = {
  setConf: is,
  draw: as
}, cs = (t) => `
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
`, ls = cs, ds = {
  parser: wi,
  db: rs,
  renderer: os,
  styles: ls
};
export {
  ds as diagram
};
