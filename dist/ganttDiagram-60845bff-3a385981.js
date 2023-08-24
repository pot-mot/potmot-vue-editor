import { K as je, L as Je, R as $e, M as Ke, N as Sn, O as ee, P as Un, Q as xe, T as nt, c as Ct, s as Yn, g as Fn, B as Ln, D as En, b as An, a as In, m as Wn, E as On, n as Hn, l as he, h as Bt, i as zn, j as Nn, z as Vn } from "./index-d7731270.js";
import { b as Pn, t as Ie, c as Rn, a as Bn, l as Zn } from "./linear-08f4c54c.js";
import { i as qn } from "./init-f9637058.js";
import "vue";
function Xn(t, e) {
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
function Gn(t, e) {
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
function Qn(t) {
  return t;
}
var qt = 1, ne = 2, de = 3, Zt = 4, We = 1e-6;
function jn(t) {
  return "translate(" + t + ",0)";
}
function Jn(t) {
  return "translate(0," + t + ")";
}
function $n(t) {
  return (e) => +t(e);
}
function Kn(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function tr() {
  return !this.__axis;
}
function tn(t, e) {
  var n = [], r = null, i = null, a = 6, o = 6, g = 3, _ = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, y = t === qt || t === Zt ? -1 : 1, C = t === Zt || t === ne ? "x" : "y", Y = t === qt || t === de ? jn : Jn;
  function w(x) {
    var q = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), d = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : Qn), L = Math.max(a, 0) + g, z = e.range(), H = +z[0] + _, B = +z[z.length - 1] + _, Z = (e.bandwidth ? Kn : $n)(e.copy(), _), Q = x.selection ? x.selection() : x, b = Q.selectAll(".domain").data([null]), I = Q.selectAll(".tick").data(q, e).order(), v = I.exit(), S = I.enter().append("g").attr("class", "tick"), M = I.select("line"), D = I.select("text");
    b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), I = I.merge(S), M = M.merge(S.append("line").attr("stroke", "currentColor").attr(C + "2", y * a)), D = D.merge(S.append("text").attr("fill", "currentColor").attr(C, y * L).attr("dy", t === qt ? "0em" : t === de ? "0.71em" : "0.32em")), x !== Q && (b = b.transition(x), I = I.transition(x), M = M.transition(x), D = D.transition(x), v = v.transition(x).attr("opacity", We).attr("transform", function(p) {
      return isFinite(p = Z(p)) ? Y(p + _) : this.getAttribute("transform");
    }), S.attr("opacity", We).attr("transform", function(p) {
      var W = this.parentNode.__axis;
      return Y((W && isFinite(W = W(p)) ? W : Z(p)) + _);
    })), v.remove(), b.attr("d", t === Zt || t === ne ? o ? "M" + y * o + "," + H + "H" + _ + "V" + B + "H" + y * o : "M" + _ + "," + H + "V" + B : o ? "M" + H + "," + y * o + "V" + _ + "H" + B + "V" + y * o : "M" + H + "," + _ + "H" + B), I.attr("opacity", 1).attr("transform", function(p) {
      return Y(Z(p) + _);
    }), M.attr(C + "2", y * a), D.attr(C, y * L).text(d), Q.filter(tr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ne ? "start" : t === Zt ? "end" : "middle"), Q.each(function() {
      this.__axis = Z;
    });
  }
  return w.scale = function(x) {
    return arguments.length ? (e = x, w) : e;
  }, w.ticks = function() {
    return n = Array.from(arguments), w;
  }, w.tickArguments = function(x) {
    return arguments.length ? (n = x == null ? [] : Array.from(x), w) : n.slice();
  }, w.tickValues = function(x) {
    return arguments.length ? (r = x == null ? null : Array.from(x), w) : r && r.slice();
  }, w.tickFormat = function(x) {
    return arguments.length ? (i = x, w) : i;
  }, w.tickSize = function(x) {
    return arguments.length ? (a = o = +x, w) : a;
  }, w.tickSizeInner = function(x) {
    return arguments.length ? (a = +x, w) : a;
  }, w.tickSizeOuter = function(x) {
    return arguments.length ? (o = +x, w) : o;
  }, w.tickPadding = function(x) {
    return arguments.length ? (g = +x, w) : g;
  }, w.offset = function(x) {
    return arguments.length ? (_ = +x, w) : _;
  }, w;
}
function er(t) {
  return tn(qt, t);
}
function nr(t) {
  return tn(de, t);
}
const rr = Math.PI / 180, ir = 180 / Math.PI, Qt = 18, en = 0.96422, nn = 1, rn = 0.82521, sn = 4 / 29, Mt = 6 / 29, an = 3 * Mt * Mt, sr = Mt * Mt * Mt;
function on(t) {
  if (t instanceof st)
    return new st(t.l, t.a, t.b, t.opacity);
  if (t instanceof ft)
    return cn(t);
  t instanceof $e || (t = Sn(t));
  var e = ae(t.r), n = ae(t.g), r = ae(t.b), i = re((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / nn), a, o;
  return e === n && n === r ? a = o = i : (a = re((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / en), o = re((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / rn)), new st(116 * i - 16, 500 * (a - i), 200 * (i - o), t.opacity);
}
function ar(t, e, n, r) {
  return arguments.length === 1 ? on(t) : new st(t, e, n, r ?? 1);
}
function st(t, e, n, r) {
  this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
}
je(st, ar, Je(Ke, {
  brighter(t) {
    return new st(this.l + Qt * (t ?? 1), this.a, this.b, this.opacity);
  },
  darker(t) {
    return new st(this.l - Qt * (t ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n = isNaN(this.b) ? t : t - this.b / 200;
    return e = en * ie(e), t = nn * ie(t), n = rn * ie(n), new $e(
      se(3.1338561 * e - 1.6168667 * t - 0.4906146 * n),
      se(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
      se(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
      this.opacity
    );
  }
}));
function re(t) {
  return t > sr ? Math.pow(t, 1 / 3) : t / an + sn;
}
function ie(t) {
  return t > Mt ? t * t * t : an * (t - sn);
}
function se(t) {
  return 255 * (t <= 31308e-7 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function ae(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function or(t) {
  if (t instanceof ft)
    return new ft(t.h, t.c, t.l, t.opacity);
  if (t instanceof st || (t = on(t)), t.a === 0 && t.b === 0)
    return new ft(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
  var e = Math.atan2(t.b, t.a) * ir;
  return new ft(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function me(t, e, n, r) {
  return arguments.length === 1 ? or(t) : new ft(t, e, n, r ?? 1);
}
function ft(t, e, n, r) {
  this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
}
function cn(t) {
  if (isNaN(t.h))
    return new st(t.l, 0, 0, t.opacity);
  var e = t.h * rr;
  return new st(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
je(ft, me, Je(Ke, {
  brighter(t) {
    return new ft(this.h, this.c, this.l + Qt * (t ?? 1), this.opacity);
  },
  darker(t) {
    return new ft(this.h, this.c, this.l - Qt * (t ?? 1), this.opacity);
  },
  rgb() {
    return cn(this).rgb();
  }
}));
function cr(t) {
  return function(e, n) {
    var r = t((e = me(e)).h, (n = me(n)).h), i = ee(e.c, n.c), a = ee(e.l, n.l), o = ee(e.opacity, n.opacity);
    return function(g) {
      return e.h = r(g), e.c = i(g), e.l = a(g), e.opacity = o(g), e + "";
    };
  };
}
const lr = cr(Un);
function ur(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, i = t[n], a = t[r], o;
  return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), t[n] = e.floor(i), t[r] = e.ceil(a), t;
}
const oe = /* @__PURE__ */ new Date(), ce = /* @__PURE__ */ new Date();
function tt(t, e, n, r) {
  function i(a) {
    return t(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (t(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (t(a = new Date(a - 1)), e(a, 1), t(a), a), i.round = (a) => {
    const o = i(a), g = i.ceil(a);
    return a - o < g - a ? o : g;
  }, i.offset = (a, o) => (e(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, g) => {
    const _ = [];
    if (a = i.ceil(a), g = g == null ? 1 : Math.floor(g), !(a < o) || !(g > 0))
      return _;
    let y;
    do
      _.push(y = /* @__PURE__ */ new Date(+a)), e(a, g), t(a);
    while (y < a && a < o);
    return _;
  }, i.filter = (a) => tt((o) => {
    if (o >= o)
      for (; t(o), !a(o); )
        o.setTime(o - 1);
  }, (o, g) => {
    if (o >= o)
      if (g < 0)
        for (; ++g <= 0; )
          for (; e(o, -1), !a(o); )
            ;
      else
        for (; --g >= 0; )
          for (; e(o, 1), !a(o); )
            ;
  }), n && (i.count = (a, o) => (oe.setTime(+a), ce.setTime(+o), t(oe), t(ce), Math.floor(n(oe, ce))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(r ? (o) => r(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const jt = tt(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
jt.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? tt((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : jt);
jt.range;
const ht = 1e3, rt = ht * 60, dt = rt * 60, mt = dt * 24, we = mt * 7, Oe = mt * 30, le = mt * 365, Dt = tt((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * ht);
}, (t, e) => (e - t) / ht, (t) => t.getUTCSeconds());
Dt.range;
const At = tt((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * ht);
}, (t, e) => {
  t.setTime(+t + e * rt);
}, (t, e) => (e - t) / rt, (t) => t.getMinutes());
At.range;
const fr = tt((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * rt);
}, (t, e) => (e - t) / rt, (t) => t.getUTCMinutes());
fr.range;
const It = tt((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * ht - t.getMinutes() * rt);
}, (t, e) => {
  t.setTime(+t + e * dt);
}, (t, e) => (e - t) / dt, (t) => t.getHours());
It.range;
const hr = tt((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * dt);
}, (t, e) => (e - t) / dt, (t) => t.getUTCHours());
hr.range;
const yt = tt(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * rt) / mt,
  (t) => t.getDate() - 1
);
yt.range;
const De = tt((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / mt, (t) => t.getUTCDate() - 1);
De.range;
const dr = tt((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / mt, (t) => Math.floor(t / mt));
dr.range;
function Tt(t) {
  return tt((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * rt) / we);
}
const Ht = Tt(0), Wt = Tt(1), ln = Tt(2), un = Tt(3), kt = Tt(4), fn = Tt(5), hn = Tt(6);
Ht.range;
Wt.range;
ln.range;
un.range;
kt.range;
fn.range;
hn.range;
function vt(t) {
  return tt((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / we);
}
const dn = vt(0), Jt = vt(1), mr = vt(2), gr = vt(3), St = vt(4), yr = vt(5), kr = vt(6);
dn.range;
Jt.range;
mr.range;
gr.range;
St.range;
yr.range;
kr.range;
const Ot = tt((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
Ot.range;
const pr = tt((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
pr.range;
const gt = tt((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
gt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : tt((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
gt.range;
const pt = tt((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
pt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : tt((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
pt.range;
function Tr(t, e, n, r, i, a) {
  const o = [
    [Dt, 1, ht],
    [Dt, 5, 5 * ht],
    [Dt, 15, 15 * ht],
    [Dt, 30, 30 * ht],
    [a, 1, rt],
    [a, 5, 5 * rt],
    [a, 15, 15 * rt],
    [a, 30, 30 * rt],
    [i, 1, dt],
    [i, 3, 3 * dt],
    [i, 6, 6 * dt],
    [i, 12, 12 * dt],
    [r, 1, mt],
    [r, 2, 2 * mt],
    [n, 1, we],
    [e, 1, Oe],
    [e, 3, 3 * Oe],
    [t, 1, le]
  ];
  function g(y, C, Y) {
    const w = C < y;
    w && ([y, C] = [C, y]);
    const x = Y && typeof Y.range == "function" ? Y : _(y, C, Y), q = x ? x.range(y, +C + 1) : [];
    return w ? q.reverse() : q;
  }
  function _(y, C, Y) {
    const w = Math.abs(C - y) / Y, x = Pn(([, , L]) => L).right(o, w);
    if (x === o.length)
      return t.every(Ie(y / le, C / le, Y));
    if (x === 0)
      return jt.every(Math.max(Ie(y, C, Y), 1));
    const [q, d] = o[w / o[x - 1][2] < o[x][2] / w ? x - 1 : x];
    return q.every(d);
  }
  return [g, _];
}
const [vr, br] = Tr(gt, Ot, Ht, yt, It, At);
function ue(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function fe(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ft(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function xr(t) {
  var e = t.dateTime, n = t.date, r = t.time, i = t.periods, a = t.days, o = t.shortDays, g = t.months, _ = t.shortMonths, y = Lt(i), C = Et(i), Y = Lt(a), w = Et(a), x = Lt(o), q = Et(o), d = Lt(g), L = Et(g), z = Lt(_), H = Et(_), B = {
    a: k,
    A: T,
    b: m,
    B: l,
    c: null,
    d: Re,
    e: Re,
    f: Zr,
    g: ei,
    G: ri,
    H: Pr,
    I: Rr,
    j: Br,
    L: mn,
    m: qr,
    M: Xr,
    p: s,
    q: R,
    Q: qe,
    s: Xe,
    S: Gr,
    u: Qr,
    U: jr,
    V: Jr,
    w: $r,
    W: Kr,
    x: null,
    X: null,
    y: ti,
    Y: ni,
    Z: ii,
    "%": Ze
  }, Z = {
    a: c,
    A: O,
    b: j,
    B: X,
    c: null,
    d: Be,
    e: Be,
    f: ci,
    g: pi,
    G: vi,
    H: si,
    I: ai,
    j: oi,
    L: yn,
    m: li,
    M: ui,
    p: at,
    q: ot,
    Q: qe,
    s: Xe,
    S: fi,
    u: hi,
    U: di,
    V: mi,
    w: gi,
    W: yi,
    x: null,
    X: null,
    y: ki,
    Y: Ti,
    Z: bi,
    "%": Ze
  }, Q = {
    a: M,
    A: D,
    b: p,
    B: W,
    c: E,
    d: Ve,
    e: Ve,
    f: Hr,
    g: Ne,
    G: ze,
    H: Pe,
    I: Pe,
    j: Ar,
    L: Or,
    m: Er,
    M: Ir,
    p: S,
    q: Lr,
    Q: Nr,
    s: Vr,
    S: Wr,
    u: _r,
    U: Sr,
    V: Ur,
    w: Mr,
    W: Yr,
    x: F,
    X: h,
    y: Ne,
    Y: ze,
    Z: Fr,
    "%": zr
  };
  B.x = b(n, B), B.X = b(r, B), B.c = b(e, B), Z.x = b(n, Z), Z.X = b(r, Z), Z.c = b(e, Z);
  function b(f, U) {
    return function(A) {
      var u = [], J = -1, N = 0, V = f.length, G, $, bt;
      for (A instanceof Date || (A = /* @__PURE__ */ new Date(+A)); ++J < V; )
        f.charCodeAt(J) === 37 && (u.push(f.slice(N, J)), ($ = He[G = f.charAt(++J)]) != null ? G = f.charAt(++J) : $ = G === "e" ? " " : "0", (bt = U[G]) && (G = bt(A, $)), u.push(G), N = J + 1);
      return u.push(f.slice(N, J)), u.join("");
    };
  }
  function I(f, U) {
    return function(A) {
      var u = Ft(1900, void 0, 1), J = v(u, f, A += "", 0), N, V;
      if (J != A.length)
        return null;
      if ("Q" in u)
        return new Date(u.Q);
      if ("s" in u)
        return new Date(u.s * 1e3 + ("L" in u ? u.L : 0));
      if (U && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + u.p * 12), u.m === void 0 && (u.m = "q" in u ? u.q : 0), "V" in u) {
        if (u.V < 1 || u.V > 53)
          return null;
        "w" in u || (u.w = 1), "Z" in u ? (N = fe(Ft(u.y, 0, 1)), V = N.getUTCDay(), N = V > 4 || V === 0 ? Jt.ceil(N) : Jt(N), N = De.offset(N, (u.V - 1) * 7), u.y = N.getUTCFullYear(), u.m = N.getUTCMonth(), u.d = N.getUTCDate() + (u.w + 6) % 7) : (N = ue(Ft(u.y, 0, 1)), V = N.getDay(), N = V > 4 || V === 0 ? Wt.ceil(N) : Wt(N), N = yt.offset(N, (u.V - 1) * 7), u.y = N.getFullYear(), u.m = N.getMonth(), u.d = N.getDate() + (u.w + 6) % 7);
      } else
        ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), V = "Z" in u ? fe(Ft(u.y, 0, 1)).getUTCDay() : ue(Ft(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + u.W * 7 - (V + 5) % 7 : u.w + u.U * 7 - (V + 6) % 7);
      return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, fe(u)) : ue(u);
    };
  }
  function v(f, U, A, u) {
    for (var J = 0, N = U.length, V = A.length, G, $; J < N; ) {
      if (u >= V)
        return -1;
      if (G = U.charCodeAt(J++), G === 37) {
        if (G = U.charAt(J++), $ = Q[G in He ? U.charAt(J++) : G], !$ || (u = $(f, A, u)) < 0)
          return -1;
      } else if (G != A.charCodeAt(u++))
        return -1;
    }
    return u;
  }
  function S(f, U, A) {
    var u = y.exec(U.slice(A));
    return u ? (f.p = C.get(u[0].toLowerCase()), A + u[0].length) : -1;
  }
  function M(f, U, A) {
    var u = x.exec(U.slice(A));
    return u ? (f.w = q.get(u[0].toLowerCase()), A + u[0].length) : -1;
  }
  function D(f, U, A) {
    var u = Y.exec(U.slice(A));
    return u ? (f.w = w.get(u[0].toLowerCase()), A + u[0].length) : -1;
  }
  function p(f, U, A) {
    var u = z.exec(U.slice(A));
    return u ? (f.m = H.get(u[0].toLowerCase()), A + u[0].length) : -1;
  }
  function W(f, U, A) {
    var u = d.exec(U.slice(A));
    return u ? (f.m = L.get(u[0].toLowerCase()), A + u[0].length) : -1;
  }
  function E(f, U, A) {
    return v(f, e, U, A);
  }
  function F(f, U, A) {
    return v(f, n, U, A);
  }
  function h(f, U, A) {
    return v(f, r, U, A);
  }
  function k(f) {
    return o[f.getDay()];
  }
  function T(f) {
    return a[f.getDay()];
  }
  function m(f) {
    return _[f.getMonth()];
  }
  function l(f) {
    return g[f.getMonth()];
  }
  function s(f) {
    return i[+(f.getHours() >= 12)];
  }
  function R(f) {
    return 1 + ~~(f.getMonth() / 3);
  }
  function c(f) {
    return o[f.getUTCDay()];
  }
  function O(f) {
    return a[f.getUTCDay()];
  }
  function j(f) {
    return _[f.getUTCMonth()];
  }
  function X(f) {
    return g[f.getUTCMonth()];
  }
  function at(f) {
    return i[+(f.getUTCHours() >= 12)];
  }
  function ot(f) {
    return 1 + ~~(f.getUTCMonth() / 3);
  }
  return {
    format: function(f) {
      var U = b(f += "", B);
      return U.toString = function() {
        return f;
      }, U;
    },
    parse: function(f) {
      var U = I(f += "", !1);
      return U.toString = function() {
        return f;
      }, U;
    },
    utcFormat: function(f) {
      var U = b(f += "", Z);
      return U.toString = function() {
        return f;
      }, U;
    },
    utcParse: function(f) {
      var U = I(f += "", !0);
      return U.toString = function() {
        return f;
      }, U;
    }
  };
}
var He = { "-": "", _: " ", 0: "0" }, et = /^\s*\d+/, wr = /^%/, Dr = /[\\^$*+?|[\]().{}]/g;
function P(t, e, n) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length;
  return r + (a < n ? new Array(n - a + 1).join(e) + i : i);
}
function Cr(t) {
  return t.replace(Dr, "\\$&");
}
function Lt(t) {
  return new RegExp("^(?:" + t.map(Cr).join("|") + ")", "i");
}
function Et(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function Mr(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function _r(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function Sr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function Ur(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function Yr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function ze(t, e, n) {
  var r = et.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Ne(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Fr(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Lr(t, e, n) {
  var r = et.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Er(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function Ve(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Ar(t, e, n) {
  var r = et.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function Pe(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function Ir(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function Wr(t, e, n) {
  var r = et.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function Or(t, e, n) {
  var r = et.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Hr(t, e, n) {
  var r = et.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function zr(t, e, n) {
  var r = wr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Nr(t, e, n) {
  var r = et.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function Vr(t, e, n) {
  var r = et.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function Re(t, e) {
  return P(t.getDate(), e, 2);
}
function Pr(t, e) {
  return P(t.getHours(), e, 2);
}
function Rr(t, e) {
  return P(t.getHours() % 12 || 12, e, 2);
}
function Br(t, e) {
  return P(1 + yt.count(gt(t), t), e, 3);
}
function mn(t, e) {
  return P(t.getMilliseconds(), e, 3);
}
function Zr(t, e) {
  return mn(t, e) + "000";
}
function qr(t, e) {
  return P(t.getMonth() + 1, e, 2);
}
function Xr(t, e) {
  return P(t.getMinutes(), e, 2);
}
function Gr(t, e) {
  return P(t.getSeconds(), e, 2);
}
function Qr(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function jr(t, e) {
  return P(Ht.count(gt(t) - 1, t), e, 2);
}
function gn(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? kt(t) : kt.ceil(t);
}
function Jr(t, e) {
  return t = gn(t), P(kt.count(gt(t), t) + (gt(t).getDay() === 4), e, 2);
}
function $r(t) {
  return t.getDay();
}
function Kr(t, e) {
  return P(Wt.count(gt(t) - 1, t), e, 2);
}
function ti(t, e) {
  return P(t.getFullYear() % 100, e, 2);
}
function ei(t, e) {
  return t = gn(t), P(t.getFullYear() % 100, e, 2);
}
function ni(t, e) {
  return P(t.getFullYear() % 1e4, e, 4);
}
function ri(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? kt(t) : kt.ceil(t), P(t.getFullYear() % 1e4, e, 4);
}
function ii(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + P(e / 60 | 0, "0", 2) + P(e % 60, "0", 2);
}
function Be(t, e) {
  return P(t.getUTCDate(), e, 2);
}
function si(t, e) {
  return P(t.getUTCHours(), e, 2);
}
function ai(t, e) {
  return P(t.getUTCHours() % 12 || 12, e, 2);
}
function oi(t, e) {
  return P(1 + De.count(pt(t), t), e, 3);
}
function yn(t, e) {
  return P(t.getUTCMilliseconds(), e, 3);
}
function ci(t, e) {
  return yn(t, e) + "000";
}
function li(t, e) {
  return P(t.getUTCMonth() + 1, e, 2);
}
function ui(t, e) {
  return P(t.getUTCMinutes(), e, 2);
}
function fi(t, e) {
  return P(t.getUTCSeconds(), e, 2);
}
function hi(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function di(t, e) {
  return P(dn.count(pt(t) - 1, t), e, 2);
}
function kn(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? St(t) : St.ceil(t);
}
function mi(t, e) {
  return t = kn(t), P(St.count(pt(t), t) + (pt(t).getUTCDay() === 4), e, 2);
}
function gi(t) {
  return t.getUTCDay();
}
function yi(t, e) {
  return P(Jt.count(pt(t) - 1, t), e, 2);
}
function ki(t, e) {
  return P(t.getUTCFullYear() % 100, e, 2);
}
function pi(t, e) {
  return t = kn(t), P(t.getUTCFullYear() % 100, e, 2);
}
function Ti(t, e) {
  return P(t.getUTCFullYear() % 1e4, e, 4);
}
function vi(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? St(t) : St.ceil(t), P(t.getUTCFullYear() % 1e4, e, 4);
}
function bi() {
  return "+0000";
}
function Ze() {
  return "%";
}
function qe(t) {
  return +t;
}
function Xe(t) {
  return Math.floor(+t / 1e3);
}
var wt, $t;
xi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function xi(t) {
  return wt = xr(t), $t = wt.format, wt.parse, wt.utcFormat, wt.utcParse, wt;
}
function wi(t) {
  return new Date(t);
}
function Di(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function pn(t, e, n, r, i, a, o, g, _, y) {
  var C = Rn(), Y = C.invert, w = C.domain, x = y(".%L"), q = y(":%S"), d = y("%I:%M"), L = y("%I %p"), z = y("%a %d"), H = y("%b %d"), B = y("%B"), Z = y("%Y");
  function Q(b) {
    return (_(b) < b ? x : g(b) < b ? q : o(b) < b ? d : a(b) < b ? L : r(b) < b ? i(b) < b ? z : H : n(b) < b ? B : Z)(b);
  }
  return C.invert = function(b) {
    return new Date(Y(b));
  }, C.domain = function(b) {
    return arguments.length ? w(Array.from(b, Di)) : w().map(wi);
  }, C.ticks = function(b) {
    var I = w();
    return t(I[0], I[I.length - 1], b ?? 10);
  }, C.tickFormat = function(b, I) {
    return I == null ? Q : y(I);
  }, C.nice = function(b) {
    var I = w();
    return (!b || typeof b.range != "function") && (b = e(I[0], I[I.length - 1], b ?? 10)), b ? w(ur(I, b)) : C;
  }, C.copy = function() {
    return Bn(C, pn(t, e, n, r, i, a, o, g, _, y));
  }, C;
}
function Ci() {
  return qn.apply(pn(vr, br, gt, Ot, Ht, yt, It, At, Dt, $t).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var ge = {}, Mi = {
  get exports() {
    return ge;
  },
  set exports(t) {
    ge = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(xe, function() {
    var n = "day";
    return function(r, i, a) {
      var o = function(y) {
        return y.add(4 - y.isoWeekday(), n);
      }, g = i.prototype;
      g.isoWeekYear = function() {
        return o(this).year();
      }, g.isoWeek = function(y) {
        if (!this.$utils().u(y))
          return this.add(7 * (y - this.isoWeek()), n);
        var C, Y, w, x, q = o(this), d = (C = this.isoWeekYear(), Y = this.$u, w = (Y ? a.utc : a)().year(C).startOf("year"), x = 4 - w.isoWeekday(), w.isoWeekday() > 4 && (x += 7), w.add(x, n));
        return q.diff(d, "week") + 1;
      }, g.isoWeekday = function(y) {
        return this.$utils().u(y) ? this.day() || 7 : this.day(this.day() % 7 ? y : y - 7);
      };
      var _ = g.startOf;
      g.startOf = function(y, C) {
        var Y = this.$utils(), w = !!Y.u(C) || C;
        return Y.p(y) === "isoweek" ? w ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : _.bind(this)(y, C);
      };
    };
  });
})(Mi);
const _i = ge;
var ye = {}, Si = {
  get exports() {
    return ye;
  },
  set exports(t) {
    ye = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(xe, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, a = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, g = {}, _ = function(d) {
      return (d = +d) + (d > 68 ? 1900 : 2e3);
    }, y = function(d) {
      return function(L) {
        this[d] = +L;
      };
    }, C = [/[+-]\d\d:?(\d\d)?|Z/, function(d) {
      (this.zone || (this.zone = {})).offset = function(L) {
        if (!L || L === "Z")
          return 0;
        var z = L.match(/([+-]|\d\d)/g), H = 60 * z[1] + (+z[2] || 0);
        return H === 0 ? 0 : z[0] === "+" ? -H : H;
      }(d);
    }], Y = function(d) {
      var L = g[d];
      return L && (L.indexOf ? L : L.s.concat(L.f));
    }, w = function(d, L) {
      var z, H = g.meridiem;
      if (H) {
        for (var B = 1; B <= 24; B += 1)
          if (d.indexOf(H(B, 0, L)) > -1) {
            z = B > 12;
            break;
          }
      } else
        z = d === (L ? "pm" : "PM");
      return z;
    }, x = { A: [o, function(d) {
      this.afternoon = w(d, !1);
    }], a: [o, function(d) {
      this.afternoon = w(d, !0);
    }], S: [/\d/, function(d) {
      this.milliseconds = 100 * +d;
    }], SS: [i, function(d) {
      this.milliseconds = 10 * +d;
    }], SSS: [/\d{3}/, function(d) {
      this.milliseconds = +d;
    }], s: [a, y("seconds")], ss: [a, y("seconds")], m: [a, y("minutes")], mm: [a, y("minutes")], H: [a, y("hours")], h: [a, y("hours")], HH: [a, y("hours")], hh: [a, y("hours")], D: [a, y("day")], DD: [i, y("day")], Do: [o, function(d) {
      var L = g.ordinal, z = d.match(/\d+/);
      if (this.day = z[0], L)
        for (var H = 1; H <= 31; H += 1)
          L(H).replace(/\[|\]/g, "") === d && (this.day = H);
    }], M: [a, y("month")], MM: [i, y("month")], MMM: [o, function(d) {
      var L = Y("months"), z = (Y("monthsShort") || L.map(function(H) {
        return H.slice(0, 3);
      })).indexOf(d) + 1;
      if (z < 1)
        throw new Error();
      this.month = z % 12 || z;
    }], MMMM: [o, function(d) {
      var L = Y("months").indexOf(d) + 1;
      if (L < 1)
        throw new Error();
      this.month = L % 12 || L;
    }], Y: [/[+-]?\d+/, y("year")], YY: [i, function(d) {
      this.year = _(d);
    }], YYYY: [/\d{4}/, y("year")], Z: C, ZZ: C };
    function q(d) {
      var L, z;
      L = d, z = g && g.formats;
      for (var H = (d = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(S, M, D) {
        var p = D && D.toUpperCase();
        return M || z[D] || n[D] || z[p].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(W, E, F) {
          return E || F.slice(1);
        });
      })).match(r), B = H.length, Z = 0; Z < B; Z += 1) {
        var Q = H[Z], b = x[Q], I = b && b[0], v = b && b[1];
        H[Z] = v ? { regex: I, parser: v } : Q.replace(/^\[|\]$/g, "");
      }
      return function(S) {
        for (var M = {}, D = 0, p = 0; D < B; D += 1) {
          var W = H[D];
          if (typeof W == "string")
            p += W.length;
          else {
            var E = W.regex, F = W.parser, h = S.slice(p), k = E.exec(h)[0];
            F.call(M, k), S = S.replace(k, "");
          }
        }
        return function(T) {
          var m = T.afternoon;
          if (m !== void 0) {
            var l = T.hours;
            m ? l < 12 && (T.hours += 12) : l === 12 && (T.hours = 0), delete T.afternoon;
          }
        }(M), M;
      };
    }
    return function(d, L, z) {
      z.p.customParseFormat = !0, d && d.parseTwoDigitYear && (_ = d.parseTwoDigitYear);
      var H = L.prototype, B = H.parse;
      H.parse = function(Z) {
        var Q = Z.date, b = Z.utc, I = Z.args;
        this.$u = b;
        var v = I[1];
        if (typeof v == "string") {
          var S = I[2] === !0, M = I[3] === !0, D = S || M, p = I[2];
          M && (p = I[2]), g = this.$locale(), !S && p && (g = z.Ls[p]), this.$d = function(h, k, T) {
            try {
              if (["x", "X"].indexOf(k) > -1)
                return new Date((k === "X" ? 1e3 : 1) * h);
              var m = q(k)(h), l = m.year, s = m.month, R = m.day, c = m.hours, O = m.minutes, j = m.seconds, X = m.milliseconds, at = m.zone, ot = /* @__PURE__ */ new Date(), f = R || (l || s ? 1 : ot.getDate()), U = l || ot.getFullYear(), A = 0;
              l && !s || (A = s > 0 ? s - 1 : ot.getMonth());
              var u = c || 0, J = O || 0, N = j || 0, V = X || 0;
              return at ? new Date(Date.UTC(U, A, f, u, J, N, V + 60 * at.offset * 1e3)) : T ? new Date(Date.UTC(U, A, f, u, J, N, V)) : new Date(U, A, f, u, J, N, V);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(Q, v, b), this.init(), p && p !== !0 && (this.$L = this.locale(p).$L), D && Q != this.format(v) && (this.$d = /* @__PURE__ */ new Date("")), g = {};
        } else if (v instanceof Array)
          for (var W = v.length, E = 1; E <= W; E += 1) {
            I[1] = v[E - 1];
            var F = z.apply(this, I);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            E === W && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          B.call(this, Z);
      };
    };
  });
})(Si);
const Ui = ye;
var ke = {}, Yi = {
  get exports() {
    return ke;
  },
  set exports(t) {
    ke = t;
  }
};
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(xe, function() {
    return function(n, r) {
      var i = r.prototype, a = i.format;
      i.format = function(o) {
        var g = this, _ = this.$locale();
        if (!this.isValid())
          return a.bind(this)(o);
        var y = this.$utils(), C = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(Y) {
          switch (Y) {
            case "Q":
              return Math.ceil((g.$M + 1) / 3);
            case "Do":
              return _.ordinal(g.$D);
            case "gggg":
              return g.weekYear();
            case "GGGG":
              return g.isoWeekYear();
            case "wo":
              return _.ordinal(g.week(), "W");
            case "w":
            case "ww":
              return y.s(g.week(), Y === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return y.s(g.isoWeek(), Y === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return y.s(String(g.$H === 0 ? 24 : g.$H), Y === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(g.$d.getTime() / 1e3);
            case "x":
              return g.$d.getTime();
            case "z":
              return "[" + g.offsetName() + "]";
            case "zzz":
              return "[" + g.offsetName("long") + "]";
            default:
              return Y;
          }
        });
        return a.bind(this)(C);
      };
    };
  });
})(Yi);
const Fi = ke;
var pe = function() {
  var t = function(F, h, k, T) {
    for (k = k || {}, T = F.length; T--; k[F[T]] = h)
      ;
    return k;
  }, e = [1, 3], n = [1, 5], r = [7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 36, 43, 48], i = [1, 32], a = [1, 33], o = [1, 34], g = [1, 35], _ = [1, 36], y = [1, 37], C = [1, 38], Y = [1, 15], w = [1, 16], x = [1, 17], q = [1, 18], d = [1, 19], L = [1, 20], z = [1, 21], H = [1, 22], B = [1, 24], Z = [1, 25], Q = [1, 26], b = [1, 27], I = [1, 28], v = [1, 30], S = [1, 39], M = [1, 42], D = [5, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 36, 43, 48], p = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, directive: 4, gantt: 5, document: 6, EOF: 7, line: 8, SPACE: 9, statement: 10, NL: 11, weekday: 12, weekday_monday: 13, weekday_tuesday: 14, weekday_wednesday: 15, weekday_thursday: 16, weekday_friday: 17, weekday_saturday: 18, weekday_sunday: 19, dateFormat: 20, inclusiveEndDates: 21, topAxis: 22, axisFormat: 23, tickInterval: 24, excludes: 25, includes: 26, todayMarker: 27, title: 28, acc_title: 29, acc_title_value: 30, acc_descr: 31, acc_descr_value: 32, acc_descr_multiline_value: 33, section: 34, clickStatement: 35, taskTxt: 36, taskData: 37, openDirective: 38, typeDirective: 39, closeDirective: 40, ":": 41, argDirective: 42, click: 43, callbackname: 44, callbackargs: 45, href: 46, clickStatementDebug: 47, open_directive: 48, type_directive: 49, arg_directive: 50, close_directive: 51, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "gantt", 7: "EOF", 9: "SPACE", 11: "NL", 13: "weekday_monday", 14: "weekday_tuesday", 15: "weekday_wednesday", 16: "weekday_thursday", 17: "weekday_friday", 18: "weekday_saturday", 19: "weekday_sunday", 20: "dateFormat", 21: "inclusiveEndDates", 22: "topAxis", 23: "axisFormat", 24: "tickInterval", 25: "excludes", 26: "includes", 27: "todayMarker", 28: "title", 29: "acc_title", 30: "acc_title_value", 31: "acc_descr", 32: "acc_descr_value", 33: "acc_descr_multiline_value", 34: "section", 36: "taskTxt", 37: "taskData", 41: ":", 43: "click", 44: "callbackname", 45: "callbackargs", 46: "href", 48: "open_directive", 49: "type_directive", 50: "arg_directive", 51: "close_directive" },
    productions_: [0, [3, 2], [3, 3], [6, 0], [6, 2], [8, 2], [8, 1], [8, 1], [8, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [10, 2], [10, 1], [4, 4], [4, 6], [35, 2], [35, 3], [35, 3], [35, 4], [35, 3], [35, 4], [35, 2], [47, 2], [47, 3], [47, 3], [47, 4], [47, 3], [47, 4], [47, 2], [38, 1], [39, 1], [42, 1], [40, 1]],
    performAction: function(h, k, T, m, l, s, R) {
      var c = s.length - 1;
      switch (l) {
        case 2:
          return s[c - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          s[c - 1].push(s[c]), this.$ = s[c - 1];
          break;
        case 5:
        case 6:
          this.$ = s[c];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 9:
          m.setWeekday("monday");
          break;
        case 10:
          m.setWeekday("tuesday");
          break;
        case 11:
          m.setWeekday("wednesday");
          break;
        case 12:
          m.setWeekday("thursday");
          break;
        case 13:
          m.setWeekday("friday");
          break;
        case 14:
          m.setWeekday("saturday");
          break;
        case 15:
          m.setWeekday("sunday");
          break;
        case 16:
          m.setDateFormat(s[c].substr(11)), this.$ = s[c].substr(11);
          break;
        case 17:
          m.enableInclusiveEndDates(), this.$ = s[c].substr(18);
          break;
        case 18:
          m.TopAxis(), this.$ = s[c].substr(8);
          break;
        case 19:
          m.setAxisFormat(s[c].substr(11)), this.$ = s[c].substr(11);
          break;
        case 20:
          m.setTickInterval(s[c].substr(13)), this.$ = s[c].substr(13);
          break;
        case 21:
          m.setExcludes(s[c].substr(9)), this.$ = s[c].substr(9);
          break;
        case 22:
          m.setIncludes(s[c].substr(9)), this.$ = s[c].substr(9);
          break;
        case 23:
          m.setTodayMarker(s[c].substr(12)), this.$ = s[c].substr(12);
          break;
        case 25:
          m.setDiagramTitle(s[c].substr(6)), this.$ = s[c].substr(6);
          break;
        case 26:
          this.$ = s[c].trim(), m.setAccTitle(this.$);
          break;
        case 27:
        case 28:
          this.$ = s[c].trim(), m.setAccDescription(this.$);
          break;
        case 29:
          m.addSection(s[c].substr(8)), this.$ = s[c].substr(8);
          break;
        case 31:
          m.addTask(s[c - 1], s[c]), this.$ = "task";
          break;
        case 35:
          this.$ = s[c - 1], m.setClickEvent(s[c - 1], s[c], null);
          break;
        case 36:
          this.$ = s[c - 2], m.setClickEvent(s[c - 2], s[c - 1], s[c]);
          break;
        case 37:
          this.$ = s[c - 2], m.setClickEvent(s[c - 2], s[c - 1], null), m.setLink(s[c - 2], s[c]);
          break;
        case 38:
          this.$ = s[c - 3], m.setClickEvent(s[c - 3], s[c - 2], s[c - 1]), m.setLink(s[c - 3], s[c]);
          break;
        case 39:
          this.$ = s[c - 2], m.setClickEvent(s[c - 2], s[c], null), m.setLink(s[c - 2], s[c - 1]);
          break;
        case 40:
          this.$ = s[c - 3], m.setClickEvent(s[c - 3], s[c - 1], s[c]), m.setLink(s[c - 3], s[c - 2]);
          break;
        case 41:
          this.$ = s[c - 1], m.setLink(s[c - 1], s[c]);
          break;
        case 42:
        case 48:
          this.$ = s[c - 1] + " " + s[c];
          break;
        case 43:
        case 44:
        case 46:
          this.$ = s[c - 2] + " " + s[c - 1] + " " + s[c];
          break;
        case 45:
        case 47:
          this.$ = s[c - 3] + " " + s[c - 2] + " " + s[c - 1] + " " + s[c];
          break;
        case 49:
          m.parseDirective("%%{", "open_directive");
          break;
        case 50:
          m.parseDirective(s[c], "type_directive");
          break;
        case 51:
          s[c] = s[c].trim().replace(/'/g, '"'), m.parseDirective(s[c], "arg_directive");
          break;
        case 52:
          m.parseDirective("}%%", "close_directive", "gantt");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: e, 38: 4, 48: n }, { 1: [3] }, { 3: 6, 4: 2, 5: e, 38: 4, 48: n }, t(r, [2, 3], { 6: 7 }), { 39: 8, 49: [1, 9] }, { 49: [2, 49] }, { 1: [2, 1] }, { 4: 31, 7: [1, 10], 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: 23, 13: i, 14: a, 15: o, 16: g, 17: _, 18: y, 19: C, 20: Y, 21: w, 22: x, 23: q, 24: d, 25: L, 26: z, 27: H, 28: B, 29: Z, 31: Q, 33: b, 34: I, 35: 29, 36: v, 38: 4, 43: S, 48: n }, { 40: 40, 41: [1, 41], 51: M }, t([41, 51], [2, 50]), t(r, [2, 8], { 1: [2, 2] }), t(r, [2, 4]), { 4: 31, 10: 43, 12: 23, 13: i, 14: a, 15: o, 16: g, 17: _, 18: y, 19: C, 20: Y, 21: w, 22: x, 23: q, 24: d, 25: L, 26: z, 27: H, 28: B, 29: Z, 31: Q, 33: b, 34: I, 35: 29, 36: v, 38: 4, 43: S, 48: n }, t(r, [2, 6]), t(r, [2, 7]), t(r, [2, 16]), t(r, [2, 17]), t(r, [2, 18]), t(r, [2, 19]), t(r, [2, 20]), t(r, [2, 21]), t(r, [2, 22]), t(r, [2, 23]), t(r, [2, 24]), t(r, [2, 25]), { 30: [1, 44] }, { 32: [1, 45] }, t(r, [2, 28]), t(r, [2, 29]), t(r, [2, 30]), { 37: [1, 46] }, t(r, [2, 32]), t(r, [2, 9]), t(r, [2, 10]), t(r, [2, 11]), t(r, [2, 12]), t(r, [2, 13]), t(r, [2, 14]), t(r, [2, 15]), { 44: [1, 47], 46: [1, 48] }, { 11: [1, 49] }, { 42: 50, 50: [1, 51] }, { 11: [2, 52] }, t(r, [2, 5]), t(r, [2, 26]), t(r, [2, 27]), t(r, [2, 31]), t(r, [2, 35], { 45: [1, 52], 46: [1, 53] }), t(r, [2, 41], { 44: [1, 54] }), t(D, [2, 33]), { 40: 55, 51: M }, { 51: [2, 51] }, t(r, [2, 36], { 46: [1, 56] }), t(r, [2, 37]), t(r, [2, 39], { 45: [1, 57] }), { 11: [1, 58] }, t(r, [2, 38]), t(r, [2, 40]), t(D, [2, 34])],
    defaultActions: { 5: [2, 49], 6: [2, 1], 42: [2, 52], 51: [2, 51] },
    parseError: function(h, k) {
      if (k.recoverable)
        this.trace(h);
      else {
        var T = new Error(h);
        throw T.hash = k, T;
      }
    },
    parse: function(h) {
      var k = this, T = [0], m = [], l = [null], s = [], R = this.table, c = "", O = 0, j = 0, X = 2, at = 1, ot = s.slice.call(arguments, 1), f = Object.create(this.lexer), U = { yy: {} };
      for (var A in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, A) && (U.yy[A] = this.yy[A]);
      f.setInput(h, U.yy), U.yy.lexer = f, U.yy.parser = this, typeof f.yylloc > "u" && (f.yylloc = {});
      var u = f.yylloc;
      s.push(u);
      var J = f.options && f.options.ranges;
      typeof U.yy.parseError == "function" ? this.parseError = U.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function N() {
        var lt;
        return lt = m.pop() || f.lex() || at, typeof lt != "number" && (lt instanceof Array && (m = lt, lt = m.pop()), lt = k.symbols_[lt] || lt), lt;
      }
      for (var V, G, $, bt, xt = {}, Pt, ct, Ae, Rt; ; ) {
        if (G = T[T.length - 1], this.defaultActions[G] ? $ = this.defaultActions[G] : ((V === null || typeof V > "u") && (V = N()), $ = R[G] && R[G][V]), typeof $ > "u" || !$.length || !$[0]) {
          var te = "";
          Rt = [];
          for (Pt in R[G])
            this.terminals_[Pt] && Pt > X && Rt.push("'" + this.terminals_[Pt] + "'");
          f.showPosition ? te = "Parse error on line " + (O + 1) + `:
` + f.showPosition() + `
Expecting ` + Rt.join(", ") + ", got '" + (this.terminals_[V] || V) + "'" : te = "Parse error on line " + (O + 1) + ": Unexpected " + (V == at ? "end of input" : "'" + (this.terminals_[V] || V) + "'"), this.parseError(te, {
            text: f.match,
            token: this.terminals_[V] || V,
            line: f.yylineno,
            loc: u,
            expected: Rt
          });
        }
        if ($[0] instanceof Array && $.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + G + ", token: " + V);
        switch ($[0]) {
          case 1:
            T.push(V), l.push(f.yytext), s.push(f.yylloc), T.push($[1]), V = null, j = f.yyleng, c = f.yytext, O = f.yylineno, u = f.yylloc;
            break;
          case 2:
            if (ct = this.productions_[$[1]][1], xt.$ = l[l.length - ct], xt._$ = {
              first_line: s[s.length - (ct || 1)].first_line,
              last_line: s[s.length - 1].last_line,
              first_column: s[s.length - (ct || 1)].first_column,
              last_column: s[s.length - 1].last_column
            }, J && (xt._$.range = [
              s[s.length - (ct || 1)].range[0],
              s[s.length - 1].range[1]
            ]), bt = this.performAction.apply(xt, [
              c,
              j,
              O,
              U.yy,
              $[1],
              l,
              s
            ].concat(ot)), typeof bt < "u")
              return bt;
            ct && (T = T.slice(0, -1 * ct * 2), l = l.slice(0, -1 * ct), s = s.slice(0, -1 * ct)), T.push(this.productions_[$[1]][0]), l.push(xt.$), s.push(xt._$), Ae = R[T[T.length - 2]][T[T.length - 1]], T.push(Ae);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, W = function() {
    var F = {
      EOF: 1,
      parseError: function(k, T) {
        if (this.yy.parser)
          this.yy.parser.parseError(k, T);
        else
          throw new Error(k);
      },
      // resets the lexer, sets new input
      setInput: function(h, k) {
        return this.yy = k || this.yy || {}, this._input = h, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
        var k = h.match(/(?:\r\n?|\n).*/g);
        return k ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
      },
      // unshifts one char (or a string) into the input
      unput: function(h) {
        var k = h.length, T = h.split(/(?:\r\n?|\n)/g);
        this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - k), this.offset -= k;
        var m = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), T.length - 1 && (this.yylineno -= T.length - 1);
        var l = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: T ? (T.length === m.length ? this.yylloc.first_column : 0) + m[m.length - T.length].length - T[0].length : this.yylloc.first_column - k
        }, this.options.ranges && (this.yylloc.range = [l[0], l[0] + this.yyleng - k]), this.yyleng = this.yytext.length, this;
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
        var h = this.pastInput(), k = new Array(h.length + 1).join("-");
        return h + this.upcomingInput() + `
` + k + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(h, k) {
        var T, m, l;
        if (this.options.backtrack_lexer && (l = {
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
        }, this.options.ranges && (l.yylloc.range = this.yylloc.range.slice(0))), m = h[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h[0].length
        }, this.yytext += h[0], this.match += h[0], this.matches = h, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(h[0].length), this.matched += h[0], T = this.performAction.call(this, this.yy, this, k, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), T)
          return T;
        if (this._backtrack) {
          for (var s in l)
            this[s] = l[s];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var h, k, T, m;
        this._more || (this.yytext = "", this.match = "");
        for (var l = this._currentRules(), s = 0; s < l.length; s++)
          if (T = this._input.match(this.rules[l[s]]), T && (!k || T[0].length > k[0].length)) {
            if (k = T, m = s, this.options.backtrack_lexer) {
              if (h = this.test_match(T, l[s]), h !== !1)
                return h;
              if (this._backtrack) {
                k = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return k ? (h = this.test_match(k, l[m]), h !== !1 ? h : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var k = this.next();
        return k || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(k) {
        this.conditionStack.push(k);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var k = this.conditionStack.length - 1;
        return k > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(k) {
        return k = this.conditionStack.length - 1 - Math.abs(k || 0), k >= 0 ? this.conditionStack[k] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(k) {
        this.begin(k);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(k, T, m, l) {
        switch (m) {
          case 0:
            return this.begin("open_directive"), 48;
          case 1:
            return this.begin("type_directive"), 49;
          case 2:
            return this.popState(), this.begin("arg_directive"), 41;
          case 3:
            return this.popState(), this.popState(), 51;
          case 4:
            return 50;
          case 5:
            return this.begin("acc_title"), 29;
          case 6:
            return this.popState(), "acc_title_value";
          case 7:
            return this.begin("acc_descr"), 31;
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
            return 46;
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
            return 44;
          case 26:
            this.popState();
            break;
          case 27:
            return 45;
          case 28:
            this.begin("click");
            break;
          case 29:
            this.popState();
            break;
          case 30:
            return 43;
          case 31:
            return 5;
          case 32:
            return 20;
          case 33:
            return 21;
          case 34:
            return 22;
          case 35:
            return 23;
          case 36:
            return 24;
          case 37:
            return 26;
          case 38:
            return 25;
          case 39:
            return 27;
          case 40:
            return 13;
          case 41:
            return 14;
          case 42:
            return 15;
          case 43:
            return 16;
          case 44:
            return 17;
          case 45:
            return 18;
          case 46:
            return 19;
          case 47:
            return "date";
          case 48:
            return 28;
          case 49:
            return "accDescription";
          case 50:
            return 34;
          case 51:
            return 36;
          case 52:
            return 37;
          case 53:
            return 41;
          case 54:
            return 7;
          case 55:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [10, 11], inclusive: !1 }, acc_descr: { rules: [8], inclusive: !1 }, acc_title: { rules: [6], inclusive: !1 }, close_directive: { rules: [], inclusive: !1 }, arg_directive: { rules: [3, 4], inclusive: !1 }, type_directive: { rules: [2, 3], inclusive: !1 }, open_directive: { rules: [1], inclusive: !1 }, callbackargs: { rules: [26, 27], inclusive: !1 }, callbackname: { rules: [23, 24, 25], inclusive: !1 }, href: { rules: [20, 21], inclusive: !1 }, click: { rules: [29, 30], inclusive: !1 }, INITIAL: { rules: [0, 5, 7, 9, 12, 13, 14, 15, 16, 17, 18, 19, 22, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55], inclusive: !0 } }
    };
    return F;
  }();
  p.lexer = W;
  function E() {
    this.yy = {};
  }
  return E.prototype = p, p.Parser = E, new E();
}();
pe.parser = pe;
const Li = pe;
nt.extend(_i);
nt.extend(Ui);
nt.extend(Fi);
let it = "", Ce = "", Me, _e = "", zt = [], Nt = [], Se = {}, Ue = [], Kt = [], Ut = "", Ye = "";
const Tn = ["active", "done", "crit", "milestone"];
let Fe = [], Vt = !1, Le = !1, Ee = "sunday", Te = 0;
const Ei = function(t, e, n) {
  Wn.parseDirective(this, t, e, n);
}, Ai = function() {
  Ue = [], Kt = [], Ut = "", Fe = [], Xt = 0, be = void 0, Gt = void 0, K = [], it = "", Ce = "", Ye = "", Me = void 0, _e = "", zt = [], Nt = [], Vt = !1, Le = !1, Te = 0, Se = {}, On(), Ee = "sunday";
}, Ii = function(t) {
  Ce = t;
}, Wi = function() {
  return Ce;
}, Oi = function(t) {
  Me = t;
}, Hi = function() {
  return Me;
}, zi = function(t) {
  _e = t;
}, Ni = function() {
  return _e;
}, Vi = function(t) {
  it = t;
}, Pi = function() {
  Vt = !0;
}, Ri = function() {
  return Vt;
}, Bi = function() {
  Le = !0;
}, Zi = function() {
  return Le;
}, qi = function(t) {
  Ye = t;
}, Xi = function() {
  return Ye;
}, Gi = function() {
  return it;
}, Qi = function(t) {
  zt = t.toLowerCase().split(/[\s,]+/);
}, ji = function() {
  return zt;
}, Ji = function(t) {
  Nt = t.toLowerCase().split(/[\s,]+/);
}, $i = function() {
  return Nt;
}, Ki = function() {
  return Se;
}, ts = function(t) {
  Ut = t, Ue.push(t);
}, es = function() {
  return Ue;
}, ns = function() {
  let t = Ge();
  const e = 10;
  let n = 0;
  for (; !t && n < e; )
    t = Ge(), n++;
  return Kt = K, Kt;
}, vn = function(t, e, n, r) {
  return r.includes(t.format(e.trim())) ? !1 : t.isoWeekday() >= 6 && n.includes("weekends") || n.includes(t.format("dddd").toLowerCase()) ? !0 : n.includes(t.format(e.trim()));
}, rs = function(t) {
  Ee = t;
}, is = function() {
  return Ee;
}, bn = function(t, e, n, r) {
  if (!n.length || t.manualEndTime)
    return;
  let i;
  t.startTime instanceof Date ? i = nt(t.startTime) : i = nt(t.startTime, e, !0), i = i.add(1, "d");
  let a;
  t.endTime instanceof Date ? a = nt(t.endTime) : a = nt(t.endTime, e, !0);
  const [o, g] = ss(
    i,
    a,
    e,
    n,
    r
  );
  t.endTime = o.toDate(), t.renderEndTime = g;
}, ss = function(t, e, n, r, i) {
  let a = !1, o = null;
  for (; t <= e; )
    a || (o = e.toDate()), a = vn(t, n, r, i), a && (e = e.add(1, "d")), t = t.add(1, "d");
  return [e, o];
}, ve = function(t, e, n) {
  n = n.trim();
  const i = /^after\s+([\d\w- ]+)/.exec(n.trim());
  if (i !== null) {
    let o = null;
    if (i[1].split(" ").forEach(function(g) {
      let _ = Yt(g);
      _ !== void 0 && (o ? _.endTime > o.endTime && (o = _) : o = _);
    }), o)
      return o.endTime;
    {
      const g = /* @__PURE__ */ new Date();
      return g.setHours(0, 0, 0, 0), g;
    }
  }
  let a = nt(n, e.trim(), !0);
  if (a.isValid())
    return a.toDate();
  {
    he.debug("Invalid date:" + n), he.debug("With date format:" + e.trim());
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
}, xn = function(t) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, wn = function(t, e, n, r = !1) {
  n = n.trim();
  let i = nt(n, e.trim(), !0);
  if (i.isValid())
    return r && (i = i.add(1, "d")), i.toDate();
  let a = nt(t);
  const [o, g] = xn(n);
  if (!Number.isNaN(o)) {
    const _ = a.add(o, g);
    _.isValid() && (a = _);
  }
  return a.toDate();
};
let Xt = 0;
const _t = function(t) {
  return t === void 0 ? (Xt = Xt + 1, "task" + Xt) : t;
}, as = function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  _n(r, i, Tn);
  for (let o = 0; o < r.length; o++)
    r[o] = r[o].trim();
  let a = "";
  switch (r.length) {
    case 1:
      i.id = _t(), i.startTime = t.endTime, a = r[0];
      break;
    case 2:
      i.id = _t(), i.startTime = ve(void 0, it, r[0]), a = r[1];
      break;
    case 3:
      i.id = _t(r[0]), i.startTime = ve(void 0, it, r[1]), a = r[2];
      break;
  }
  return a && (i.endTime = wn(i.startTime, it, a, Vt), i.manualEndTime = nt(a, "YYYY-MM-DD", !0).isValid(), bn(i, it, Nt, zt)), i;
}, os = function(t, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  _n(r, i, Tn);
  for (let a = 0; a < r.length; a++)
    r[a] = r[a].trim();
  switch (r.length) {
    case 1:
      i.id = _t(), i.startTime = {
        type: "prevTaskEnd",
        id: t
      }, i.endTime = {
        data: r[0]
      };
      break;
    case 2:
      i.id = _t(), i.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, i.endTime = {
        data: r[1]
      };
      break;
    case 3:
      i.id = _t(r[0]), i.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, i.endTime = {
        data: r[2]
      };
      break;
  }
  return i;
};
let be, Gt, K = [];
const Dn = {}, cs = function(t, e) {
  const n = {
    section: Ut,
    type: Ut,
    processed: !1,
    manualEndTime: !1,
    renderEndTime: null,
    raw: { data: e },
    task: t,
    classes: []
  }, r = os(Gt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = Gt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = Te, Te++;
  const i = K.push(n);
  Gt = n.id, Dn[n.id] = i - 1;
}, Yt = function(t) {
  const e = Dn[t];
  return K[e];
}, ls = function(t, e) {
  const n = {
    section: Ut,
    type: Ut,
    description: t,
    task: t,
    classes: []
  }, r = as(be, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, be = n, Kt.push(n);
}, Ge = function() {
  const t = function(n) {
    const r = K[n];
    let i = "";
    switch (K[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const a = Yt(r.prevTaskId);
        r.startTime = a.endTime;
        break;
      }
      case "getStartDate":
        i = ve(void 0, it, K[n].raw.startTime.startData), i && (K[n].startTime = i);
        break;
    }
    return K[n].startTime && (K[n].endTime = wn(
      K[n].startTime,
      it,
      K[n].raw.endTime.data,
      Vt
    ), K[n].endTime && (K[n].processed = !0, K[n].manualEndTime = nt(
      K[n].raw.endTime.data,
      "YYYY-MM-DD",
      !0
    ).isValid(), bn(K[n], it, Nt, zt))), K[n].processed;
  };
  let e = !0;
  for (const [n, r] of K.entries())
    t(n), e = e && r.processed;
  return e;
}, us = function(t, e) {
  let n = e;
  Ct().securityLevel !== "loose" && (n = Hn(e)), t.split(",").forEach(function(r) {
    Yt(r) !== void 0 && (Mn(r, () => {
      window.open(n, "_self");
    }), Se[r] = n);
  }), Cn(t, "clickable");
}, Cn = function(t, e) {
  t.split(",").forEach(function(n) {
    let r = Yt(n);
    r !== void 0 && r.classes.push(e);
  });
}, fs = function(t, e, n) {
  if (Ct().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let a = 0; a < r.length; a++) {
      let o = r[a].trim();
      o.charAt(0) === '"' && o.charAt(o.length - 1) === '"' && (o = o.substr(1, o.length - 2)), r[a] = o;
    }
  }
  r.length === 0 && r.push(t), Yt(t) !== void 0 && Mn(t, () => {
    Vn.runFunc(e, ...r);
  });
}, Mn = function(t, e) {
  Fe.push(
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
}, hs = function(t, e, n) {
  t.split(",").forEach(function(r) {
    fs(r, e, n);
  }), Cn(t, "clickable");
}, ds = function(t) {
  Fe.forEach(function(e) {
    e(t);
  });
}, ms = {
  parseDirective: Ei,
  getConfig: () => Ct().gantt,
  clear: Ai,
  setDateFormat: Vi,
  getDateFormat: Gi,
  enableInclusiveEndDates: Pi,
  endDatesAreInclusive: Ri,
  enableTopAxis: Bi,
  topAxisEnabled: Zi,
  setAxisFormat: Ii,
  getAxisFormat: Wi,
  setTickInterval: Oi,
  getTickInterval: Hi,
  setTodayMarker: zi,
  getTodayMarker: Ni,
  setAccTitle: Yn,
  getAccTitle: Fn,
  setDiagramTitle: Ln,
  getDiagramTitle: En,
  setDisplayMode: qi,
  getDisplayMode: Xi,
  setAccDescription: An,
  getAccDescription: In,
  addSection: ts,
  getSections: es,
  getTasks: ns,
  addTask: cs,
  findTaskById: Yt,
  addTaskOrg: ls,
  setIncludes: Qi,
  getIncludes: ji,
  setExcludes: Ji,
  getExcludes: $i,
  setClickEvent: hs,
  setLink: us,
  getLinks: Ki,
  bindFunctions: ds,
  parseDuration: xn,
  isInvalidDate: vn,
  setWeekday: rs,
  getWeekday: is
};
function _n(t, e, n) {
  let r = !0;
  for (; r; )
    r = !1, n.forEach(function(i) {
      const a = "^\\s*" + i + "\\s*$", o = new RegExp(a);
      t[0].match(o) && (e[i] = !0, t.shift(1), r = !0);
    });
}
const gs = function() {
  he.debug("Something is calling, setConf, remove the call");
}, Qe = {
  monday: Wt,
  tuesday: ln,
  wednesday: un,
  thursday: kt,
  friday: fn,
  saturday: hn,
  sunday: Ht
}, ys = (t, e) => {
  let n = [...t].map(() => -1 / 0), r = [...t].sort((a, o) => a.startTime - o.startTime || a.order - o.order), i = 0;
  for (const a of r)
    for (let o = 0; o < n.length; o++)
      if (a.startTime >= n[o]) {
        n[o] = a.endTime, a.order = o + e, o > i && (i = o);
        break;
      }
  return i;
};
let ut;
const ks = function(t, e, n, r) {
  const i = Ct().gantt, a = Ct().securityLevel;
  let o;
  a === "sandbox" && (o = Bt("#i" + e));
  const g = a === "sandbox" ? Bt(o.nodes()[0].contentDocument.body) : Bt("body"), _ = a === "sandbox" ? o.nodes()[0].contentDocument : document, y = _.getElementById(e);
  ut = y.parentElement.offsetWidth, ut === void 0 && (ut = 1200), i.useWidth !== void 0 && (ut = i.useWidth);
  const C = r.db.getTasks();
  let Y = [];
  for (const v of C)
    Y.push(v.type);
  Y = I(Y);
  const w = {};
  let x = 2 * i.topPadding;
  if (r.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const v = {};
    for (const M of C)
      v[M.section] === void 0 ? v[M.section] = [M] : v[M.section].push(M);
    let S = 0;
    for (const M of Object.keys(v)) {
      const D = ys(v[M], S) + 1;
      S += D, x += D * (i.barHeight + i.barGap), w[M] = D;
    }
  } else {
    x += C.length * (i.barHeight + i.barGap);
    for (const v of Y)
      w[v] = C.filter((S) => S.type === v).length;
  }
  y.setAttribute("viewBox", "0 0 " + ut + " " + x);
  const q = g.select(`[id="${e}"]`), d = Ci().domain([
    Gn(C, function(v) {
      return v.startTime;
    }),
    Xn(C, function(v) {
      return v.endTime;
    })
  ]).rangeRound([0, ut - i.leftPadding - i.rightPadding]);
  function L(v, S) {
    const M = v.startTime, D = S.startTime;
    let p = 0;
    return M > D ? p = 1 : M < D && (p = -1), p;
  }
  C.sort(L), z(C, ut, x), zn(q, x, ut, i.useMaxWidth), q.append("text").text(r.db.getDiagramTitle()).attr("x", ut / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function z(v, S, M) {
    const D = i.barHeight, p = D + i.barGap, W = i.topPadding, E = i.leftPadding, F = Zn().domain([0, Y.length]).range(["#00B9FA", "#F95002"]).interpolate(lr);
    B(
      p,
      W,
      E,
      S,
      M,
      v,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), Z(E, W, S, M), H(v, p, W, E, D, F, S), Q(p, W), b(E, W, S, M);
  }
  function H(v, S, M, D, p, W, E) {
    const h = [...new Set(v.map((l) => l.order))].map((l) => v.find((s) => s.order === l));
    q.append("g").selectAll("rect").data(h).enter().append("rect").attr("x", 0).attr("y", function(l, s) {
      return s = l.order, s * S + M - 2;
    }).attr("width", function() {
      return E - i.rightPadding / 2;
    }).attr("height", S).attr("class", function(l) {
      for (const [s, R] of Y.entries())
        if (l.type === R)
          return "section section" + s % i.numberSectionStyles;
      return "section section0";
    });
    const k = q.append("g").selectAll("rect").data(v).enter(), T = r.db.getLinks();
    if (k.append("rect").attr("id", function(l) {
      return l.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(l) {
      return l.milestone ? d(l.startTime) + D + 0.5 * (d(l.endTime) - d(l.startTime)) - 0.5 * p : d(l.startTime) + D;
    }).attr("y", function(l, s) {
      return s = l.order, s * S + M;
    }).attr("width", function(l) {
      return l.milestone ? p : d(l.renderEndTime || l.endTime) - d(l.startTime);
    }).attr("height", p).attr("transform-origin", function(l, s) {
      return s = l.order, (d(l.startTime) + D + 0.5 * (d(l.endTime) - d(l.startTime))).toString() + "px " + (s * S + M + 0.5 * p).toString() + "px";
    }).attr("class", function(l) {
      const s = "task";
      let R = "";
      l.classes.length > 0 && (R = l.classes.join(" "));
      let c = 0;
      for (const [j, X] of Y.entries())
        l.type === X && (c = j % i.numberSectionStyles);
      let O = "";
      return l.active ? l.crit ? O += " activeCrit" : O = " active" : l.done ? l.crit ? O = " doneCrit" : O = " done" : l.crit && (O += " crit"), O.length === 0 && (O = " task"), l.milestone && (O = " milestone " + O), O += c, O += " " + R, s + O;
    }), k.append("text").attr("id", function(l) {
      return l.id + "-text";
    }).text(function(l) {
      return l.task;
    }).attr("font-size", i.fontSize).attr("x", function(l) {
      let s = d(l.startTime), R = d(l.renderEndTime || l.endTime);
      l.milestone && (s += 0.5 * (d(l.endTime) - d(l.startTime)) - 0.5 * p), l.milestone && (R = s + p);
      const c = this.getBBox().width;
      return c > R - s ? R + c + 1.5 * i.leftPadding > E ? s + D - 5 : R + D + 5 : (R - s) / 2 + s + D;
    }).attr("y", function(l, s) {
      return s = l.order, s * S + i.barHeight / 2 + (i.fontSize / 2 - 2) + M;
    }).attr("text-height", p).attr("class", function(l) {
      const s = d(l.startTime);
      let R = d(l.endTime);
      l.milestone && (R = s + p);
      const c = this.getBBox().width;
      let O = "";
      l.classes.length > 0 && (O = l.classes.join(" "));
      let j = 0;
      for (const [at, ot] of Y.entries())
        l.type === ot && (j = at % i.numberSectionStyles);
      let X = "";
      return l.active && (l.crit ? X = "activeCritText" + j : X = "activeText" + j), l.done ? l.crit ? X = X + " doneCritText" + j : X = X + " doneText" + j : l.crit && (X = X + " critText" + j), l.milestone && (X += " milestoneText"), c > R - s ? R + c + 1.5 * i.leftPadding > E ? O + " taskTextOutsideLeft taskTextOutside" + j + " " + X : O + " taskTextOutsideRight taskTextOutside" + j + " " + X + " width-" + c : O + " taskText taskText" + j + " " + X + " width-" + c;
    }), Ct().securityLevel === "sandbox") {
      let l;
      l = Bt("#i" + e);
      const s = l.nodes()[0].contentDocument;
      k.filter(function(R) {
        return T[R.id] !== void 0;
      }).each(function(R) {
        var c = s.querySelector("#" + R.id), O = s.querySelector("#" + R.id + "-text");
        const j = c.parentNode;
        var X = s.createElement("a");
        X.setAttribute("xlink:href", T[R.id]), X.setAttribute("target", "_top"), j.appendChild(X), X.appendChild(c), X.appendChild(O);
      });
    }
  }
  function B(v, S, M, D, p, W, E, F) {
    const h = W.reduce(
      (c, { startTime: O }) => c ? Math.min(c, O) : O,
      0
    ), k = W.reduce((c, { endTime: O }) => c ? Math.max(c, O) : O, 0), T = r.db.getDateFormat();
    if (!h || !k)
      return;
    const m = [];
    let l = null, s = nt(h);
    for (; s.valueOf() <= k; )
      r.db.isInvalidDate(s, T, E, F) ? l ? l.end = s : l = {
        start: s,
        end: s
      } : l && (m.push(l), l = null), s = s.add(1, "d");
    q.append("g").selectAll("rect").data(m).enter().append("rect").attr("id", function(c) {
      return "exclude-" + c.start.format("YYYY-MM-DD");
    }).attr("x", function(c) {
      return d(c.start) + M;
    }).attr("y", i.gridLineStartPadding).attr("width", function(c) {
      const O = c.end.add(1, "day");
      return d(O) - d(c.start);
    }).attr("height", p - S - i.gridLineStartPadding).attr("transform-origin", function(c, O) {
      return (d(c.start) + M + 0.5 * (d(c.end) - d(c.start))).toString() + "px " + (O * v + 0.5 * p).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function Z(v, S, M, D) {
    let p = nr(d).tickSize(-D + S + i.gridLineStartPadding).tickFormat($t(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
    const E = /^([1-9]\d*)(minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || i.tickInterval
    );
    if (E !== null) {
      const F = E[1], h = E[2], k = r.db.getWeekday() || i.weekday;
      switch (h) {
        case "minute":
          p.ticks(At.every(F));
          break;
        case "hour":
          p.ticks(It.every(F));
          break;
        case "day":
          p.ticks(yt.every(F));
          break;
        case "week":
          p.ticks(Qe[k].every(F));
          break;
        case "month":
          p.ticks(Ot.every(F));
          break;
      }
    }
    if (q.append("g").attr("class", "grid").attr("transform", "translate(" + v + ", " + (D - 50) + ")").call(p).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || i.topAxis) {
      let F = er(d).tickSize(-D + S + i.gridLineStartPadding).tickFormat($t(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
      if (E !== null) {
        const h = E[1], k = E[2], T = r.db.getWeekday() || i.weekday;
        switch (k) {
          case "minute":
            F.ticks(At.every(h));
            break;
          case "hour":
            F.ticks(It.every(h));
            break;
          case "day":
            F.ticks(yt.every(h));
            break;
          case "week":
            F.ticks(Qe[T].every(h));
            break;
          case "month":
            F.ticks(Ot.every(h));
            break;
        }
      }
      q.append("g").attr("class", "grid").attr("transform", "translate(" + v + ", " + S + ")").call(F).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function Q(v, S) {
    let M = 0;
    const D = Object.keys(w).map((p) => [p, w[p]]);
    q.append("g").selectAll("text").data(D).enter().append(function(p) {
      const W = p[0].split(Nn.lineBreakRegex), E = -(W.length - 1) / 2, F = _.createElementNS("http://www.w3.org/2000/svg", "text");
      F.setAttribute("dy", E + "em");
      for (const [h, k] of W.entries()) {
        const T = _.createElementNS("http://www.w3.org/2000/svg", "tspan");
        T.setAttribute("alignment-baseline", "central"), T.setAttribute("x", "10"), h > 0 && T.setAttribute("dy", "1em"), T.textContent = k, F.appendChild(T);
      }
      return F;
    }).attr("x", 10).attr("y", function(p, W) {
      if (W > 0)
        for (let E = 0; E < W; E++)
          return M += D[W - 1][1], p[1] * v / 2 + M * v + S;
      else
        return p[1] * v / 2 + S;
    }).attr("font-size", i.sectionFontSize).attr("class", function(p) {
      for (const [W, E] of Y.entries())
        if (p[0] === E)
          return "sectionTitle sectionTitle" + W % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function b(v, S, M, D) {
    const p = r.db.getTodayMarker();
    if (p === "off")
      return;
    const W = q.append("g").attr("class", "today"), E = /* @__PURE__ */ new Date(), F = W.append("line");
    F.attr("x1", d(E) + v).attr("x2", d(E) + v).attr("y1", i.titleTopMargin).attr("y2", D - i.titleTopMargin).attr("class", "today"), p !== "" && F.attr("style", p.replace(/,/g, ";"));
  }
  function I(v) {
    const S = {}, M = [];
    for (let D = 0, p = v.length; D < p; ++D)
      Object.prototype.hasOwnProperty.call(S, v[D]) || (S[v[D]] = !0, M.push(v[D]));
    return M;
  }
}, ps = {
  setConf: gs,
  draw: ks
}, Ts = (t) => `
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
`, vs = Ts, Cs = {
  parser: Li,
  db: ms,
  renderer: ps,
  styles: vs
};
export {
  Cs as diagram
};
