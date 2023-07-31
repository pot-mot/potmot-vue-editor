import { c as ct, g as $t, s as zt, a as jt, b as Dt, D as Rt, B as Bt, E as Ft, j as Ut, av as Wt, h as V, i as qt } from "./index-e4487cb0.js";
import { o as Vt } from "./ordinal-5695958c.js";
import "vue";
import "./init-f9637058.js";
function Xt(t) {
  for (var i = t.length / 6 | 0, e = new Array(i), n = 0; n < i; )
    e[n] = "#" + t.slice(n * 6, ++n * 6);
  return e;
}
const Yt = Xt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Nt(t, i) {
  return t < i ? -1 : t > i ? 1 : t >= i ? 0 : NaN;
}
function Gt(t) {
  return t.length === 1 && (t = Ht(t)), {
    left: function(i, e, n, s) {
      for (n == null && (n = 0), s == null && (s = i.length); n < s; ) {
        var a = n + s >>> 1;
        t(i[a], e) < 0 ? n = a + 1 : s = a;
      }
      return n;
    },
    right: function(i, e, n, s) {
      for (n == null && (n = 0), s == null && (s = i.length); n < s; ) {
        var a = n + s >>> 1;
        t(i[a], e) > 0 ? s = a : n = a + 1;
      }
      return n;
    }
  };
}
function Ht(t) {
  return function(i, e) {
    return Nt(t(i), e);
  };
}
Gt(Nt);
function dt(t, i) {
  var e = t.length, n = -1, s, a;
  if (i == null) {
    for (; ++n < e; )
      if ((s = t[n]) != null && s >= s)
        for (a = s; ++n < e; )
          (s = t[n]) != null && s > a && (a = s);
  } else
    for (; ++n < e; )
      if ((s = i(t[n], n, t)) != null && s >= s)
        for (a = s; ++n < e; )
          (s = i(t[n], n, t)) != null && s > a && (a = s);
  return a;
}
function Lt(t, i) {
  var e = t.length, n = -1, s, a;
  if (i == null) {
    for (; ++n < e; )
      if ((s = t[n]) != null && s >= s)
        for (a = s; ++n < e; )
          (s = t[n]) != null && a > s && (a = s);
  } else
    for (; ++n < e; )
      if ((s = i(t[n], n, t)) != null && s >= s)
        for (a = s; ++n < e; )
          (s = i(t[n], n, t)) != null && a > s && (a = s);
  return a;
}
function tt(t, i) {
  var e = t.length, n = -1, s, a = 0;
  if (i == null)
    for (; ++n < e; )
      (s = +t[n]) && (a += s);
  else
    for (; ++n < e; )
      (s = +i(t[n], n, t)) && (a += s);
  return a;
}
function Qt(t) {
  return t.target.depth;
}
function Kt(t) {
  return t.depth;
}
function Zt(t, i) {
  return i - 1 - t.height;
}
function At(t, i) {
  return t.sourceLinks.length ? t.depth : i - 1;
}
function Jt(t) {
  return t.targetLinks.length ? t.depth : t.sourceLinks.length ? Lt(t.sourceLinks, Qt) - 1 : 0;
}
function X(t) {
  return function() {
    return t;
  };
}
function gt(t, i) {
  return Y(t.source, i.source) || t.index - i.index;
}
function xt(t, i) {
  return Y(t.target, i.target) || t.index - i.index;
}
function Y(t, i) {
  return t.y0 - i.y0;
}
function it(t) {
  return t.value;
}
function ti(t) {
  return t.index;
}
function ii(t) {
  return t.nodes;
}
function ni(t) {
  return t.links;
}
function kt(t, i) {
  const e = t.get(i);
  if (!e)
    throw new Error("missing: " + i);
  return e;
}
function mt({ nodes: t }) {
  for (const i of t) {
    let e = i.y0, n = e;
    for (const s of i.sourceLinks)
      s.y0 = e + s.width / 2, e += s.width;
    for (const s of i.targetLinks)
      s.y1 = n + s.width / 2, n += s.width;
  }
}
function ei() {
  let t = 0, i = 0, e = 1, n = 1, s = 24, a = 8, p, f = ti, r = At, h, c, x = ii, w = ni, g = 6;
  function m() {
    const o = { nodes: x.apply(null, arguments), links: w.apply(null, arguments) };
    return T(o), A(o), C(o), N(o), v(o), mt(o), o;
  }
  m.update = function(o) {
    return mt(o), o;
  }, m.nodeId = function(o) {
    return arguments.length ? (f = typeof o == "function" ? o : X(o), m) : f;
  }, m.nodeAlign = function(o) {
    return arguments.length ? (r = typeof o == "function" ? o : X(o), m) : r;
  }, m.nodeSort = function(o) {
    return arguments.length ? (h = o, m) : h;
  }, m.nodeWidth = function(o) {
    return arguments.length ? (s = +o, m) : s;
  }, m.nodePadding = function(o) {
    return arguments.length ? (a = p = +o, m) : a;
  }, m.nodes = function(o) {
    return arguments.length ? (x = typeof o == "function" ? o : X(o), m) : x;
  }, m.links = function(o) {
    return arguments.length ? (w = typeof o == "function" ? o : X(o), m) : w;
  }, m.linkSort = function(o) {
    return arguments.length ? (c = o, m) : c;
  }, m.size = function(o) {
    return arguments.length ? (t = i = 0, e = +o[0], n = +o[1], m) : [e - t, n - i];
  }, m.extent = function(o) {
    return arguments.length ? (t = +o[0][0], e = +o[1][0], i = +o[0][1], n = +o[1][1], m) : [[t, i], [e, n]];
  }, m.iterations = function(o) {
    return arguments.length ? (g = +o, m) : g;
  };
  function T({ nodes: o, links: y }) {
    for (const [u, l] of o.entries())
      l.index = u, l.sourceLinks = [], l.targetLinks = [];
    const _ = new Map(o.map((u, l) => [f(u, l, o), u]));
    for (const [u, l] of y.entries()) {
      l.index = u;
      let { source: k, target: b } = l;
      typeof k != "object" && (k = l.source = kt(_, k)), typeof b != "object" && (b = l.target = kt(_, b)), k.sourceLinks.push(l), b.targetLinks.push(l);
    }
    if (c != null)
      for (const { sourceLinks: u, targetLinks: l } of o)
        u.sort(c), l.sort(c);
  }
  function A({ nodes: o }) {
    for (const y of o)
      y.value = y.fixedValue === void 0 ? Math.max(tt(y.sourceLinks, it), tt(y.targetLinks, it)) : y.fixedValue;
  }
  function C({ nodes: o }) {
    const y = o.length;
    let _ = new Set(o), u = /* @__PURE__ */ new Set(), l = 0;
    for (; _.size; ) {
      for (const k of _) {
        k.depth = l;
        for (const { target: b } of k.sourceLinks)
          u.add(b);
      }
      if (++l > y)
        throw new Error("circular link");
      _ = u, u = /* @__PURE__ */ new Set();
    }
  }
  function N({ nodes: o }) {
    const y = o.length;
    let _ = new Set(o), u = /* @__PURE__ */ new Set(), l = 0;
    for (; _.size; ) {
      for (const k of _) {
        k.height = l;
        for (const { source: b } of k.targetLinks)
          u.add(b);
      }
      if (++l > y)
        throw new Error("circular link");
      _ = u, u = /* @__PURE__ */ new Set();
    }
  }
  function M({ nodes: o }) {
    const y = dt(o, (l) => l.depth) + 1, _ = (e - t - s) / (y - 1), u = new Array(y);
    for (const l of o) {
      const k = Math.max(0, Math.min(y - 1, Math.floor(r.call(null, l, y))));
      l.layer = k, l.x0 = t + k * _, l.x1 = l.x0 + s, u[k] ? u[k].push(l) : u[k] = [l];
    }
    if (h)
      for (const l of u)
        l.sort(h);
    return u;
  }
  function P(o) {
    const y = Lt(o, (_) => (n - i - (_.length - 1) * p) / tt(_, it));
    for (const _ of o) {
      let u = i;
      for (const l of _) {
        l.y0 = u, l.y1 = u + l.value * y, u = l.y1 + p;
        for (const k of l.sourceLinks)
          k.width = k.value * y;
      }
      u = (n - u + p) / (_.length + 1);
      for (let l = 0; l < _.length; ++l) {
        const k = _[l];
        k.y0 += u * (l + 1), k.y1 += u * (l + 1);
      }
      O(_);
    }
  }
  function v(o) {
    const y = M(o);
    p = Math.min(a, (n - i) / (dt(y, (_) => _.length) - 1)), P(y);
    for (let _ = 0; _ < g; ++_) {
      const u = Math.pow(0.99, _), l = Math.max(1 - u, (_ + 1) / g);
      E(y, u, l), d(y, u, l);
    }
  }
  function d(o, y, _) {
    for (let u = 1, l = o.length; u < l; ++u) {
      const k = o[u];
      for (const b of k) {
        let R = 0, I = 0;
        for (const { source: F, value: J } of b.targetLinks) {
          let U = J * (b.layer - F.layer);
          R += L(F, b) * U, I += U;
        }
        if (!(I > 0))
          continue;
        let B = (R / I - b.y0) * y;
        b.y0 += B, b.y1 += B, S(b);
      }
      h === void 0 && k.sort(Y), z(k, _);
    }
  }
  function E(o, y, _) {
    for (let u = o.length, l = u - 2; l >= 0; --l) {
      const k = o[l];
      for (const b of k) {
        let R = 0, I = 0;
        for (const { target: F, value: J } of b.sourceLinks) {
          let U = J * (F.layer - b.layer);
          R += D(b, F) * U, I += U;
        }
        if (!(I > 0))
          continue;
        let B = (R / I - b.y0) * y;
        b.y0 += B, b.y1 += B, S(b);
      }
      h === void 0 && k.sort(Y), z(k, _);
    }
  }
  function z(o, y) {
    const _ = o.length >> 1, u = o[_];
    q(o, u.y0 - p, _ - 1, y), W(o, u.y1 + p, _ + 1, y), q(o, n, o.length - 1, y), W(o, i, 0, y);
  }
  function W(o, y, _, u) {
    for (; _ < o.length; ++_) {
      const l = o[_], k = (y - l.y0) * u;
      k > 1e-6 && (l.y0 += k, l.y1 += k), y = l.y1 + p;
    }
  }
  function q(o, y, _, u) {
    for (; _ >= 0; --_) {
      const l = o[_], k = (l.y1 - y) * u;
      k > 1e-6 && (l.y0 -= k, l.y1 -= k), y = l.y0 - p;
    }
  }
  function S({ sourceLinks: o, targetLinks: y }) {
    if (c === void 0) {
      for (const { source: { sourceLinks: _ } } of y)
        _.sort(xt);
      for (const { target: { targetLinks: _ } } of o)
        _.sort(gt);
    }
  }
  function O(o) {
    if (c === void 0)
      for (const { sourceLinks: y, targetLinks: _ } of o)
        y.sort(xt), _.sort(gt);
  }
  function L(o, y) {
    let _ = o.y0 - (o.sourceLinks.length - 1) * p / 2;
    for (const { target: u, width: l } of o.sourceLinks) {
      if (u === y)
        break;
      _ += l + p;
    }
    for (const { source: u, width: l } of y.targetLinks) {
      if (u === o)
        break;
      _ -= l;
    }
    return _;
  }
  function D(o, y) {
    let _ = y.y0 - (y.targetLinks.length - 1) * p / 2;
    for (const { source: u, width: l } of y.targetLinks) {
      if (u === o)
        break;
      _ += l + p;
    }
    for (const { target: u, width: l } of o.sourceLinks) {
      if (u === y)
        break;
      _ -= l;
    }
    return _;
  }
  return m;
}
var et = Math.PI, st = 2 * et, $ = 1e-6, si = st - $;
function ot() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Mt() {
  return new ot();
}
ot.prototype = Mt.prototype = {
  constructor: ot,
  moveTo: function(t, i) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(t, i) {
    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +i);
  },
  quadraticCurveTo: function(t, i, e, n) {
    this._ += "Q" + +t + "," + +i + "," + (this._x1 = +e) + "," + (this._y1 = +n);
  },
  bezierCurveTo: function(t, i, e, n, s, a) {
    this._ += "C" + +t + "," + +i + "," + +e + "," + +n + "," + (this._x1 = +s) + "," + (this._y1 = +a);
  },
  arcTo: function(t, i, e, n, s) {
    t = +t, i = +i, e = +e, n = +n, s = +s;
    var a = this._x1, p = this._y1, f = e - t, r = n - i, h = a - t, c = p - i, x = h * h + c * c;
    if (s < 0)
      throw new Error("negative radius: " + s);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = t) + "," + (this._y1 = i);
    else if (x > $)
      if (!(Math.abs(c * f - r * h) > $) || !s)
        this._ += "L" + (this._x1 = t) + "," + (this._y1 = i);
      else {
        var w = e - a, g = n - p, m = f * f + r * r, T = w * w + g * g, A = Math.sqrt(m), C = Math.sqrt(x), N = s * Math.tan((et - Math.acos((m + x - T) / (2 * A * C))) / 2), M = N / C, P = N / A;
        Math.abs(M - 1) > $ && (this._ += "L" + (t + M * h) + "," + (i + M * c)), this._ += "A" + s + "," + s + ",0,0," + +(c * w > h * g) + "," + (this._x1 = t + P * f) + "," + (this._y1 = i + P * r);
      }
  },
  arc: function(t, i, e, n, s, a) {
    t = +t, i = +i, e = +e;
    var p = e * Math.cos(n), f = e * Math.sin(n), r = t + p, h = i + f, c = 1 ^ a, x = a ? n - s : s - n;
    if (e < 0)
      throw new Error("negative radius: " + e);
    this._x1 === null ? this._ += "M" + r + "," + h : (Math.abs(this._x1 - r) > $ || Math.abs(this._y1 - h) > $) && (this._ += "L" + r + "," + h), e && (x < 0 && (x = x % st + st), x > si ? this._ += "A" + e + "," + e + ",0,1," + c + "," + (t - p) + "," + (i - f) + "A" + e + "," + e + ",0,1," + c + "," + (this._x1 = r) + "," + (this._y1 = h) : x > $ && (this._ += "A" + e + "," + e + ",0," + +(x >= et) + "," + c + "," + (this._x1 = t + e * Math.cos(s)) + "," + (this._y1 = i + e * Math.sin(s))));
  },
  rect: function(t, i, e, n) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i) + "h" + +e + "v" + +n + "h" + -e + "Z";
  },
  toString: function() {
    return this._;
  }
};
function bt(t) {
  return function() {
    return t;
  };
}
var wt = 1e-12;
function oi(t) {
  return t[0];
}
function ri(t) {
  return t[1];
}
var hi = Array.prototype.slice;
function li(t) {
  return t.source;
}
function ai(t) {
  return t.target;
}
function ci(t) {
  var i = li, e = ai, n = oi, s = ri, a = null;
  function p() {
    var f, r = hi.call(arguments), h = i.apply(this, r), c = e.apply(this, r);
    if (a || (a = f = Mt()), t(a, +n.apply(this, (r[0] = h, r)), +s.apply(this, r), +n.apply(this, (r[0] = c, r)), +s.apply(this, r)), f)
      return a = null, f + "" || null;
  }
  return p.source = function(f) {
    return arguments.length ? (i = f, p) : i;
  }, p.target = function(f) {
    return arguments.length ? (e = f, p) : e;
  }, p.x = function(f) {
    return arguments.length ? (n = typeof f == "function" ? f : bt(+f), p) : n;
  }, p.y = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : bt(+f), p) : s;
  }, p.context = function(f) {
    return arguments.length ? (a = f ?? null, p) : a;
  }, p;
}
function _i(t, i, e, n, s) {
  t.moveTo(i, e), t.bezierCurveTo(i = (i + n) / 2, e, i, s, n, s);
}
function ui() {
  return ci(_i);
}
function G() {
}
function vt(t, i, e) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + i) / 6,
    (t._y0 + 4 * t._y1 + e) / 6
  );
}
function _t(t) {
  this._context = t;
}
_t.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        vt(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, i) {
    switch (t = +t, i = +i, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        vt(this, t, i);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = i;
  }
};
function Ct(t, i) {
  this._basis = new _t(t), this._beta = i;
}
Ct.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t = this._x, i = this._y, e = t.length - 1;
    if (e > 0)
      for (var n = t[0], s = i[0], a = t[e] - n, p = i[e] - s, f = -1, r; ++f <= e; )
        r = f / e, this._basis.point(
          this._beta * t[f] + (1 - this._beta) * (n + r * a),
          this._beta * i[f] + (1 - this._beta) * (s + r * p)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t, i) {
    this._x.push(+t), this._y.push(+i);
  }
};
(function t(i) {
  function e(n) {
    return i === 1 ? new _t(n) : new Ct(n, i);
  }
  return e.beta = function(n) {
    return t(+n);
  }, e;
})(0.85);
function H(t, i, e) {
  t._context.bezierCurveTo(
    t._x1 + t._k * (t._x2 - t._x0),
    t._y1 + t._k * (t._y2 - t._y0),
    t._x2 + t._k * (t._x1 - i),
    t._y2 + t._k * (t._y1 - e),
    t._x2,
    t._y2
  );
}
function ut(t, i) {
  this._context = t, this._k = (1 - i) / 6;
}
ut.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        H(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, i) {
    switch (t = +t, i = +i, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
        break;
      case 1:
        this._point = 2, this._x1 = t, this._y1 = i;
        break;
      case 2:
        this._point = 3;
      default:
        H(this, t, i);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
  }
};
(function t(i) {
  function e(n) {
    return new ut(n, i);
  }
  return e.tension = function(n) {
    return t(+n);
  }, e;
})(0);
function ft(t, i) {
  this._context = t, this._k = (1 - i) / 6;
}
ft.prototype = {
  areaStart: G,
  areaEnd: G,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, i) {
    switch (t = +t, i = +i, this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = i;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = i);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = i;
        break;
      default:
        H(this, t, i);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
  }
};
(function t(i) {
  function e(n) {
    return new ft(n, i);
  }
  return e.tension = function(n) {
    return t(+n);
  }, e;
})(0);
function yt(t, i) {
  this._context = t, this._k = (1 - i) / 6;
}
yt.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, i) {
    switch (t = +t, i = +i, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        H(this, t, i);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
  }
};
(function t(i) {
  function e(n) {
    return new yt(n, i);
  }
  return e.tension = function(n) {
    return t(+n);
  }, e;
})(0);
function pt(t, i, e) {
  var n = t._x1, s = t._y1, a = t._x2, p = t._y2;
  if (t._l01_a > wt) {
    var f = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, r = 3 * t._l01_a * (t._l01_a + t._l12_a);
    n = (n * f - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / r, s = (s * f - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / r;
  }
  if (t._l23_a > wt) {
    var h = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, c = 3 * t._l23_a * (t._l23_a + t._l12_a);
    a = (a * h + t._x1 * t._l23_2a - i * t._l12_2a) / c, p = (p * h + t._y1 * t._l23_2a - e * t._l12_2a) / c;
  }
  t._context.bezierCurveTo(n, s, a, p, t._x2, t._y2);
}
function Pt(t, i) {
  this._context = t, this._alpha = i;
}
Pt.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, i) {
    if (t = +t, i = +i, this._point) {
      var e = this._x2 - t, n = this._y2 - i;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + n * n, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        pt(this, t, i);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
  }
};
(function t(i) {
  function e(n) {
    return i ? new Pt(n, i) : new ut(n, 0);
  }
  return e.alpha = function(n) {
    return t(+n);
  }, e;
})(0.5);
function Ot(t, i) {
  this._context = t, this._alpha = i;
}
Ot.prototype = {
  areaStart: G,
  areaEnd: G,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t, i) {
    if (t = +t, i = +i, this._point) {
      var e = this._x2 - t, n = this._y2 - i;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + n * n, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t, this._y3 = i;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = i);
        break;
      case 2:
        this._point = 3, this._x5 = t, this._y5 = i;
        break;
      default:
        pt(this, t, i);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
  }
};
(function t(i) {
  function e(n) {
    return i ? new Ot(n, i) : new ft(n, 0);
  }
  return e.alpha = function(n) {
    return t(+n);
  }, e;
})(0.5);
function It(t, i) {
  this._context = t, this._alpha = i;
}
It.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, i) {
    if (t = +t, i = +i, this._point) {
      var e = this._x2 - t, n = this._y2 - i;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + n * n, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        pt(this, t, i);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
  }
};
(function t(i) {
  function e(n) {
    return i ? new It(n, i) : new yt(n, 0);
  }
  return e.alpha = function(n) {
    return t(+n);
  }, e;
})(0.5);
function St(t) {
  return t < 0 ? -1 : 1;
}
function Et(t, i, e) {
  var n = t._x1 - t._x0, s = i - t._x1, a = (t._y1 - t._y0) / (n || s < 0 && -0), p = (e - t._y1) / (s || n < 0 && -0), f = (a * s + p * n) / (n + s);
  return (St(a) + St(p)) * Math.min(Math.abs(a), Math.abs(p), 0.5 * Math.abs(f)) || 0;
}
function Tt(t, i) {
  var e = t._x1 - t._x0;
  return e ? (3 * (t._y1 - t._y0) / e - i) / 2 : i;
}
function nt(t, i, e) {
  var n = t._x0, s = t._y0, a = t._x1, p = t._y1, f = (a - n) / 3;
  t._context.bezierCurveTo(n + f, s + f * i, a - f, p - f * e, a, p);
}
function rt(t) {
  this._context = t;
}
rt.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        nt(this, this._t0, Tt(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, i) {
    var e = NaN;
    if (t = +t, i = +i, !(t === this._x1 && i === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, nt(this, Tt(this, e = Et(this, t, i)), e);
          break;
        default:
          nt(this, this._t0, e = Et(this, t, i));
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = i, this._t0 = e;
    }
  }
};
Object.create(rt.prototype).point = function(t, i) {
  rt.prototype.point.call(this, i, t);
};
function fi(t) {
  return [t.source.x1, t.y0];
}
function yi(t) {
  return [t.target.x0, t.y1];
}
function pi() {
  return ui().source(fi).target(yi);
}
var ht = function() {
  var t = function(f, r, h, c) {
    for (h = h || {}, c = f.length; c--; h[f[c]] = r)
      ;
    return h;
  }, i = [1, 9], e = [1, 10], n = [1, 5, 10, 12], s = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, SANKEY: 4, NEWLINE: 5, csv: 6, opt_eof: 7, record: 8, csv_tail: 9, EOF: 10, "field[source]": 11, COMMA: 12, "field[target]": 13, "field[value]": 14, field: 15, escaped: 16, non_escaped: 17, DQUOTE: 18, ESCAPED_TEXT: 19, NON_ESCAPED_TEXT: 20, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SANKEY", 5: "NEWLINE", 10: "EOF", 11: "field[source]", 12: "COMMA", 13: "field[target]", 14: "field[value]", 18: "DQUOTE", 19: "ESCAPED_TEXT", 20: "NON_ESCAPED_TEXT" },
    productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]],
    performAction: function(r, h, c, x, w, g, m) {
      var T = g.length - 1;
      switch (w) {
        case 7:
          const A = x.findOrCreateNode(g[T - 4].trim().replaceAll('""', '"')), C = x.findOrCreateNode(g[T - 2].trim().replaceAll('""', '"')), N = parseFloat(g[T].trim());
          x.addLink(A, C, N);
          break;
        case 8:
        case 9:
        case 11:
          this.$ = g[T];
          break;
        case 10:
          this.$ = g[T - 1];
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, { 5: [1, 3] }, { 6: 4, 8: 5, 15: 6, 16: 7, 17: 8, 18: i, 20: e }, { 1: [2, 6], 7: 11, 10: [1, 12] }, t(e, [2, 4], { 9: 13, 5: [1, 14] }), { 12: [1, 15] }, t(n, [2, 8]), t(n, [2, 9]), { 19: [1, 16] }, t(n, [2, 11]), { 1: [2, 1] }, { 1: [2, 5] }, t(e, [2, 2]), { 6: 17, 8: 5, 15: 6, 16: 7, 17: 8, 18: i, 20: e }, { 15: 18, 16: 7, 17: 8, 18: i, 20: e }, { 18: [1, 19] }, t(e, [2, 3]), { 12: [1, 20] }, t(n, [2, 10]), { 15: 21, 16: 7, 17: 8, 18: i, 20: e }, t([1, 5, 10], [2, 7])],
    defaultActions: { 11: [2, 1], 12: [2, 5] },
    parseError: function(r, h) {
      if (h.recoverable)
        this.trace(r);
      else {
        var c = new Error(r);
        throw c.hash = h, c;
      }
    },
    parse: function(r) {
      var h = this, c = [0], x = [], w = [null], g = [], m = this.table, T = "", A = 0, C = 0, N = 2, M = 1, P = g.slice.call(arguments, 1), v = Object.create(this.lexer), d = { yy: {} };
      for (var E in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, E) && (d.yy[E] = this.yy[E]);
      v.setInput(r, d.yy), d.yy.lexer = v, d.yy.parser = this, typeof v.yylloc > "u" && (v.yylloc = {});
      var z = v.yylloc;
      g.push(z);
      var W = v.options && v.options.ranges;
      typeof d.yy.parseError == "function" ? this.parseError = d.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function q() {
        var b;
        return b = x.pop() || v.lex() || M, typeof b != "number" && (b instanceof Array && (x = b, b = x.pop()), b = h.symbols_[b] || b), b;
      }
      for (var S, O, L, D, o = {}, y, _, u, l; ; ) {
        if (O = c[c.length - 1], this.defaultActions[O] ? L = this.defaultActions[O] : ((S === null || typeof S > "u") && (S = q()), L = m[O] && m[O][S]), typeof L > "u" || !L.length || !L[0]) {
          var k = "";
          l = [];
          for (y in m[O])
            this.terminals_[y] && y > N && l.push("'" + this.terminals_[y] + "'");
          v.showPosition ? k = "Parse error on line " + (A + 1) + `:
` + v.showPosition() + `
Expecting ` + l.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : k = "Parse error on line " + (A + 1) + ": Unexpected " + (S == M ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(k, {
            text: v.match,
            token: this.terminals_[S] || S,
            line: v.yylineno,
            loc: z,
            expected: l
          });
        }
        if (L[0] instanceof Array && L.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + O + ", token: " + S);
        switch (L[0]) {
          case 1:
            c.push(S), w.push(v.yytext), g.push(v.yylloc), c.push(L[1]), S = null, C = v.yyleng, T = v.yytext, A = v.yylineno, z = v.yylloc;
            break;
          case 2:
            if (_ = this.productions_[L[1]][1], o.$ = w[w.length - _], o._$ = {
              first_line: g[g.length - (_ || 1)].first_line,
              last_line: g[g.length - 1].last_line,
              first_column: g[g.length - (_ || 1)].first_column,
              last_column: g[g.length - 1].last_column
            }, W && (o._$.range = [
              g[g.length - (_ || 1)].range[0],
              g[g.length - 1].range[1]
            ]), D = this.performAction.apply(o, [
              T,
              C,
              A,
              d.yy,
              L[1],
              w,
              g
            ].concat(P)), typeof D < "u")
              return D;
            _ && (c = c.slice(0, -1 * _ * 2), w = w.slice(0, -1 * _), g = g.slice(0, -1 * _)), c.push(this.productions_[L[1]][0]), w.push(o.$), g.push(o._$), u = m[c[c.length - 2]][c[c.length - 1]], c.push(u);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, a = function() {
    var f = {
      EOF: 1,
      parseError: function(h, c) {
        if (this.yy.parser)
          this.yy.parser.parseError(h, c);
        else
          throw new Error(h);
      },
      // resets the lexer, sets new input
      setInput: function(r, h) {
        return this.yy = h || this.yy || {}, this._input = r, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var r = this._input[0];
        this.yytext += r, this.yyleng++, this.offset++, this.match += r, this.matched += r;
        var h = r.match(/(?:\r\n?|\n).*/g);
        return h ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), r;
      },
      // unshifts one char (or a string) into the input
      unput: function(r) {
        var h = r.length, c = r.split(/(?:\r\n?|\n)/g);
        this._input = r + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - h), this.offset -= h;
        var x = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
        var w = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: c ? (c.length === x.length ? this.yylloc.first_column : 0) + x[x.length - c.length].length - c[0].length : this.yylloc.first_column - h
        }, this.options.ranges && (this.yylloc.range = [w[0], w[0] + this.yyleng - h]), this.yyleng = this.yytext.length, this;
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
      less: function(r) {
        this.unput(this.match.slice(r));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var r = this.matched.substr(0, this.matched.length - this.match.length);
        return (r.length > 20 ? "..." : "") + r.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var r = this.match;
        return r.length < 20 && (r += this._input.substr(0, 20 - r.length)), (r.substr(0, 20) + (r.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var r = this.pastInput(), h = new Array(r.length + 1).join("-");
        return r + this.upcomingInput() + `
` + h + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(r, h) {
        var c, x, w;
        if (this.options.backtrack_lexer && (w = {
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
        }, this.options.ranges && (w.yylloc.range = this.yylloc.range.slice(0))), x = r[0].match(/(?:\r\n?|\n).*/g), x && (this.yylineno += x.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: x ? x[x.length - 1].length - x[x.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + r[0].length
        }, this.yytext += r[0], this.match += r[0], this.matches = r, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(r[0].length), this.matched += r[0], c = this.performAction.call(this, this.yy, this, h, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), c)
          return c;
        if (this._backtrack) {
          for (var g in w)
            this[g] = w[g];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var r, h, c, x;
        this._more || (this.yytext = "", this.match = "");
        for (var w = this._currentRules(), g = 0; g < w.length; g++)
          if (c = this._input.match(this.rules[w[g]]), c && (!h || c[0].length > h[0].length)) {
            if (h = c, x = g, this.options.backtrack_lexer) {
              if (r = this.test_match(c, w[g]), r !== !1)
                return r;
              if (this._backtrack) {
                h = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return h ? (r = this.test_match(h, w[x]), r !== !1 ? r : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var h = this.next();
        return h || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(h) {
        this.conditionStack.push(h);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var h = this.conditionStack.length - 1;
        return h > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(h) {
        return h = this.conditionStack.length - 1 - Math.abs(h || 0), h >= 0 ? this.conditionStack[h] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(h) {
        this.begin(h);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { easy_keword_rules: !0 },
      performAction: function(h, c, x, w) {
        switch (x) {
          case 0:
            return this.pushState("csv"), 4;
          case 1:
            return 10;
          case 2:
            return 5;
          case 3:
            return 12;
          case 4:
            return this.pushState("escaped_text"), 18;
          case 5:
            return 20;
          case 6:
            return this.popState("escaped_text"), 18;
          case 7:
            return 19;
        }
      },
      rules: [/^(?:sankey-beta\b)/, /^(?:$)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:(\u002C))/, /^(?:(\u0022))/, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/, /^(?:(\u0022)(?!(\u0022)))/, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/],
      conditions: { csv: { rules: [1, 2, 3, 4, 5, 6, 7], inclusive: !1 }, escaped_text: { rules: [6, 7], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7], inclusive: !0 } }
    };
    return f;
  }();
  s.lexer = a;
  function p() {
    this.yy = {};
  }
  return p.prototype = s, s.Parser = p, new p();
}();
ht.parser = ht;
const Q = ht;
let K = [], Z = [], j = {};
const di = () => {
  K = [], Z = [], j = {}, Ft();
};
class gi {
  constructor(i, e, n = 0) {
    this.source = i, this.target = e, this.value = n;
  }
}
const xi = (t, i, e) => {
  K.push(new gi(t, i, e));
};
class ki {
  constructor(i) {
    this.ID = i;
  }
}
const mi = (t) => (t = Ut.sanitizeText(t, ct()), j[t] || (j[t] = new ki(t), Z.push(j[t])), j[t]), bi = () => Z, wi = () => K, vi = () => ({
  nodes: Z.map((t) => ({ id: t.ID })),
  links: K.map((t) => ({
    source: t.source.ID,
    target: t.target.ID,
    value: t.value
  }))
}), Si = {
  nodesMap: j,
  getConfig: () => ct().sankey,
  getNodes: bi,
  getLinks: wi,
  getGraph: vi,
  addLink: xi,
  findOrCreateNode: mi,
  getAccTitle: $t,
  setAccTitle: zt,
  getAccDescription: jt,
  setAccDescription: Dt,
  getDiagramTitle: Rt,
  setDiagramTitle: Bt,
  clear: di
}, lt = class {
  static next(t) {
    return new lt(t + ++lt.count);
  }
  constructor(t) {
    this.id = t, this.href = `#${t}`;
  }
  toString() {
    return "url(" + this.href + ")";
  }
};
let at = lt;
at.count = 0;
const Ei = {
  left: Kt,
  right: Zt,
  center: Jt,
  justify: At
}, Ti = function(t, i, e, n) {
  const { securityLevel: s, sankey: a } = ct(), p = Wt.sankey;
  let f;
  s === "sandbox" && (f = V("#i" + i));
  const r = s === "sandbox" ? V(f.nodes()[0].contentDocument.body) : V("body"), h = s === "sandbox" ? r.select(`[id="${i}"]`) : V(`[id="${i}"]`), c = (a == null ? void 0 : a.width) || p.width, x = (a == null ? void 0 : a.height) || p.width, w = (a == null ? void 0 : a.useMaxWidth) || p.useMaxWidth, g = (a == null ? void 0 : a.nodeAlignment) || p.nodeAlignment;
  qt(h, x, c, w);
  const m = n.db.getGraph(), T = Ei[g], A = 10;
  ei().nodeId((d) => d.id).nodeWidth(A).nodePadding(10).nodeAlign(T).extent([
    [0, 0],
    [c, x]
  ])(m);
  const N = Vt(Yt);
  h.append("g").attr("class", "nodes").selectAll(".node").data(m.nodes).join("g").attr("class", "node").attr("id", (d) => (d.uid = at.next("node-")).id).attr("transform", function(d) {
    return "translate(" + d.x0 + "," + d.y0 + ")";
  }).attr("x", (d) => d.x0).attr("y", (d) => d.y0).append("rect").attr("height", (d) => d.y1 - d.y0).attr("width", (d) => d.x1 - d.x0).attr("fill", (d) => N(d.id)), h.append("g").attr("class", "node-labels").attr("font-family", "sans-serif").attr("font-size", 14).selectAll("text").data(m.nodes).join("text").attr("x", (d) => d.x0 < c / 2 ? d.x1 + 6 : d.x0 - 6).attr("y", (d) => (d.y1 + d.y0) / 2).attr("dy", "0.35em").attr("text-anchor", (d) => d.x0 < c / 2 ? "start" : "end").text((d) => d.id);
  const M = h.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", 0.5).selectAll(".link").data(m.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply"), P = (a == null ? void 0 : a.linkColor) || "gradient";
  if (P === "gradient") {
    const d = M.append("linearGradient").attr("id", (E) => (E.uid = at.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (E) => E.source.x1).attr("x2", (E) => E.target.x0);
    d.append("stop").attr("offset", "0%").attr("stop-color", (E) => N(E.source.id)), d.append("stop").attr("offset", "100%").attr("stop-color", (E) => N(E.target.id));
  }
  let v;
  switch (P) {
    case "gradient":
      v = (d) => d.uid;
      break;
    case "source":
      v = (d) => N(d.source.id);
      break;
    case "target":
      v = (d) => N(d.target.id);
      break;
    default:
      v = P;
  }
  M.append("path").attr("d", pi()).attr("stroke", v).attr("stroke-width", (d) => Math.max(1, d.width));
}, Ni = {
  draw: Ti
}, Li = (t) => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, `
`).trim(), Ai = Q.parse.bind(Q);
Q.parse = (t) => Ai(Li(t));
const Ii = {
  parser: Q,
  db: Si,
  renderer: Ni
};
export {
  Ii as diagram
};
