var st = Object.defineProperty;
var ot = (a, t, n) => t in a ? st(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n;
var _e = (a, t, n) => (ot(a, typeof t != "symbol" ? t + "" : t, n), n);
import { ref as Y, defineComponent as $e, watch as se, reactive as we, computed as Re, onMounted as Ve, nextTick as X, resolveComponent as lt, openBlock as z, createElementBlock as H, normalizeClass as xe, unref as te, createElementVNode as $, Fragment as de, renderList as Ie, withModifiers as ae, withDirectives as ie, toDisplayString as Z, createCommentVNode as Le, vShow as Te, vModelText as Ce, createVNode as Me, createTextVNode as ut, normalizeStyle as ct } from "vue";
const Xe = () => "ontouchstart" in document, De = {
  mounted(a) {
    Xe() ? a.addEventListener("touchstart", (t) => {
      if (t.target != a)
        return;
      t.preventDefault();
      const n = a.offsetLeft, e = a.offsetTop, r = t.touches[0].clientX, s = t.touches[0].clientY, l = (c) => {
        const b = c.touches[0].clientX, T = c.touches[0].clientY, R = b - r + n, f = T - s + e;
        a.style.top = f + "px", a.style.left = R + "px";
      }, i = () => {
        document.removeEventListener("touchmove", l), document.removeEventListener("touchend", i);
      };
      document.addEventListener("touchmove", l), document.addEventListener("touchend", i);
    }) : a.onmousedown = (t) => {
      if (t.target != a)
        return;
      t.preventDefault();
      const n = a.offsetLeft, e = a.offsetTop, r = t.clientX, s = t.clientY, l = (c) => {
        const b = c.clientX, T = c.clientY, R = b - r + n, f = T - s + e;
        a.style.top = f + "px", a.style.left = R + "px";
      }, i = () => {
        document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", i);
      };
      document.addEventListener("mousemove", l), document.addEventListener("mouseup", i);
    };
  }
}, Se = (a, t, n) => a > n ? n : a < t ? t : a, pe = (a, t, n, e = n) => t.slice(0, n) + a + t.slice(e), pt = (a) => {
  const t = /* @__PURE__ */ new Map();
  for (let n = 0; n < a.length; n++)
    for (let e = 0; e < a[n].arguments.length; e++)
      t.set(a[n].arguments[e].name, a[n].arguments[e].getRef());
  return t;
}, Ze = ["javascript", "typescript", "css", "css-extras", "html", "less", "sass", "scss", "svg", "icon", "markup", "http", "uri", "url", "c", "cpp", "cmake", "objc", "rust", "go", "php", "phpdoc", "perl", "java", "javadoc", "groovy", "kotlin", "kt", "kts", "scala", "latex", "tex", "matlab", "sql", "graphql", "mongodb", "erlang", "lua", "python", "py", "django", "jinja2", "csharp", "dotnet", "cobol", "makefile", "json", "json5", "jsonp", "xml", "yaml", "yml", "ini", "toml", "bash", "shell", "batch", "docker", "dockerfile", "git", "vim", "dns-zone", "log", "qml", "scheme", "swift"], dt = [{
  name: "title",
  key: "#",
  label: "标题",
  insert: (a) => {
    var e;
    let t = (e = a.get("titleLevel")) == null ? void 0 : e.value;
    t = Se(t, 1, 5);
    let n = "";
    for (let r = 0; r < t; r++)
      n += "#";
    return {
      before: n + " ",
      after: ""
    };
  },
  arguments: [{
    name: "titleLevel",
    label: "级别",
    type: "number",
    getRef: () => Y(1)
  }],
  replace: !0
}, {
  name: "form",
  key: "|",
  label: "表格",
  insert: (a) => {
    var i, c;
    let t = (i = a.get("tableHeight")) == null ? void 0 : i.value, n = (c = a.get("tableWidth")) == null ? void 0 : c.value, e = "|", r = "|", s = "  ";
    t = Se(t, 1, 99), n = Se(n, 1, 15);
    for (let b = 0; b < n; b++)
      e += s + "|", r += "----|";
    e += `
`, r += `
`;
    let l = e.slice(2) + r;
    for (let b = 0; b < t; b++)
      l += e;
    return {
      before: "| ",
      after: l
    };
  },
  arguments: [{
    name: "tableHeight",
    label: "高度",
    type: "number",
    getRef: () => Y(3)
  }, {
    name: "tableWidth",
    label: "宽度",
    type: "number",
    getRef: () => Y(2)
  }]
}, {
  name: "orderedList",
  key: "%",
  label: "有序列表",
  insert: (a) => {
    var r, s;
    let t = (r = a.get("orderedListLength")) == null ? void 0 : r.value, n = (s = a.get("orderedListStart")) == null ? void 0 : s.value;
    t = Se(t, 1, 99), n = Se(n, 0, 1e4);
    let e = `
`;
    for (let l = 0; l < t - 1; l++)
      e += l + n + 1 + `. 
`;
    return {
      before: n + ". ",
      after: " " + e
    };
  },
  arguments: [{
    name: "orderedListLength",
    label: "项数",
    type: "number",
    getRef: () => Y(3)
  }, {
    name: "orderedListStart",
    label: "首项",
    type: "number",
    getRef: () => Y(1)
  }]
}, {
  name: "unorderedList",
  key: "-",
  label: "无序列表",
  insert: (a) => {
    var e;
    let t = (e = a.get("unorderedListLength")) == null ? void 0 : e.value;
    t = Se(t, 1, 99);
    let n = "";
    for (let r = 0; r < t - 1; r++)
      n += `
- `;
    return {
      before: "- ",
      after: " " + n + `
`
    };
  },
  arguments: [{
    name: "unorderedListLength",
    label: "项数",
    type: "number",
    getRef: () => Y(3)
  }]
}, {
  name: "link",
  key: "@",
  label: "链接",
  insert: (a) => {
    var e, r;
    const t = (e = a.get("linkLabel")) == null ? void 0 : e.value, n = (r = a.get("linkUrl")) == null ? void 0 : r.value;
    return t.length > 0 && n.length > 0 ? {
      before: "[" + t + "](" + n + ")",
      after: ""
    } : t.length > 0 ? {
      before: "[" + t + "](",
      after: ")"
    } : n.length > 0 ? {
      before: "[",
      after: "](" + n + ")"
    } : {
      before: "[",
      after: "]()"
    };
  },
  arguments: [{
    name: "linkLabel",
    label: "标题",
    type: "string",
    getRef: () => Y("")
  }, {
    name: "linkUrl",
    label: "URL",
    type: "string",
    getRef: () => Y("")
  }]
}], gt = [{
  name: "break",
  key: "Enter",
  label: "换行",
  insert: () => ({
    before: "<br>",
    after: ""
  }),
  arguments: []
}, {
  name: "details",
  key: ">",
  label: "折叠块",
  insert: (a) => {
    var n;
    return {
      before: `<details>
<summary>` + ((n = a.get("summary")) == null ? void 0 : n.value) + `</summary>
`,
      after: `
</details>`
    };
  },
  arguments: [{
    name: "summary",
    label: "标识",
    type: "string",
    getRef: () => Y("")
  }],
  keepSelect: !0
}, {
  name: "warning",
  key: "!",
  label: "标亮",
  insert: (a) => {
    var n;
    return {
      before: "<span style='color: " + ((n = a.get("warningColor")) == null ? void 0 : n.value) + ";'>",
      after: "</span>"
    };
  },
  arguments: [{
    name: "warningColor",
    label: "颜色",
    type: "string",
    getRef: () => Y("red")
  }]
}, {
  name: "code",
  key: "`",
  label: "代码块",
  insert: (a) => {
    var n;
    return {
      before: "```" + ((n = a.get("codeLanguage")) == null ? void 0 : n.value) + `
`,
      after: "\n```"
    };
  },
  arguments: [{
    name: "codeLanguage",
    label: "语言",
    options: Ze,
    getRef: () => Y("")
  }]
}], ft = {
  class: "toolbar"
}, ht = ["onMousedown", "title"], bt = {
  class: "floating-card tool-menu"
}, mt = {
  class: "insert-text"
}, Et = ["onMousedown", "title"], _t = ["value", "onChange"], Tt = ["type", "value", "onInput"], St = /* @__PURE__ */ $("br", null, null, -1), At = {
  class: "replace-box floating-card tool-menu"
}, vt = /* @__PURE__ */ $("br", null, null, -1), It = {
  style: {
    display: "flex",
    "justify-content": "space-around"
  }
}, kt = ["onMousedown"], wt = ["onMousedown"], Rt = ["onMousedown"], yt = ["onMousedown"], Ot = {
  style: {
    height: "0",
    width: "0",
    overflow: "hidden",
    position: "fixed",
    top: "500vh",
    left: "500vw"
  }
}, Nt = ["textContent"], xt = ["placeholder"], Lt = {
  key: 0,
  class: "statistical-list"
}, Ct = {
  name: "MarkdownEditor"
}, Dt = /* @__PURE__ */ $e({
  ...Ct,
  props: {
    modelValue: {
      type: String,
      required: !0
    },
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    startWithFullScreen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    extraInsertUnits: {
      type: Array,
      required: !1,
      default: [dt, gt]
    }
  },
  emits: ["update:modelValue"],
  setup(a, {
    emit: t
  }) {
    const n = a, e = Y(), r = Y(), s = Y(), l = () => {
      let d = [];
      for (const E of n.extraInsertUnits)
        d = d.concat(E);
      return d;
    }, i = Y([]), c = Y(/* @__PURE__ */ new Map());
    se(() => n.extraInsertUnits, () => {
      i.value = l(), c.value = pt(i.value);
    }, {
      immediate: !0
    });
    const b = (d, E) => {
      c.value.get(d).value = E.target.value;
    }, T = (d, E) => {
      c.value.get(d).value = E.target.value;
    };
    class R {
      constructor(E, v, x, L = () => {
      }) {
        _e(this, "name", "");
        _e(this, "active", !1);
        _e(this, "label", "");
        _e(this, "icon", "");
        _e(this, "method");
        this.name = E, this.label = v, this.icon = x, this.method = L;
      }
      changeActive() {
        this.active = !this.active;
      }
    }
    const f = we({
      selectLength: 0,
      startPlace: {
        x: 1,
        y: 1
      },
      endPlace: {
        x: 1,
        y: 1
      }
    });
    setInterval(() => {
      e.value && (f.startPlace = me(e.value.selectionStart, o.text), e.value.selectionStart == e.value.selectionEnd ? f.endPlace = f.startPlace : f.endPlace = me(e.value.selectionEnd, o.text), f.selectLength = e.value.selectionEnd - e.value.selectionStart);
    }, 100);
    const o = we({
      // 同步滚动条
      handleScrollFlag: "textarea",
      beforeFullScreenTop: 0,
      text: "",
      pushFlag: "",
      // 历史记录相关
      history: [],
      stackTop: -1,
      replaceFrom: "",
      replaceTo: ""
    }), A = we([new R("fullScreen", "全屏/收起全屏", "icon-full-screen", (d) => {
      d.changeActive();
    }), new R("insert", "快捷插入", "icon-bulletpoint", (d) => {
      d.changeActive();
    }), new R("replace", "文本查找与替换", "icon-search-list", (d) => {
      d.changeActive();
    }), new R("preview", "预览", "icon-browse", (d) => {
      d.changeActive();
    }), new R("undo", "撤销(Ctrl + z)", "icon-undo", () => {
      V();
    }), new R("redo", "重做(Ctrl + Z)", "icon-redo", () => {
      re();
    })]), y = (d) => {
      for (const E of A)
        if (E.name == d)
          return E.active;
      return !1;
    }, w = (d, E) => {
      for (const v of A)
        if (v.name == d) {
          v.active = E;
          break;
        }
    }, u = Re({
      get() {
        return y("fullScreen");
      },
      set(d) {
        w("fullScreen", d);
      }
    }), p = Re({
      get() {
        return y("replace");
      },
      set(d) {
        w("replace", d);
      }
    }), h = Re({
      get() {
        return y("preview");
      },
      set(d) {
        w("preview", d);
      }
    }), m = Re(() => u.value ? h.value ? "edit-preview" : "edit" : ""), _ = (d) => {
      let E = e.value.selectionStart, v = e.value.selectionEnd, x = o.text, L;
      const {
        before: P,
        after: ee
      } = d.insert(c.value);
      d.replace ? (x = pe(P, x, E, v), L = E + P.length) : (x = pe(P, x, E), L = v + P.length), ee.length > 0 && (x = pe(ee, x, L)), o.text = x, X(() => {
        d.keepSelect && E != v ? (e.value.selectionStart = E, e.value.selectionEnd = L + ee.length) : (e.value.selectionStart = E + P.length, e.value.selectionEnd = E + P.length), I();
      });
    };
    Ve(async () => {
      o.text = n.modelValue, o.history = [], o.stackTop = -1, I(), n.startWithFullScreen && (u.value = !0, h.value = !0), await X(() => {
        e.value.addEventListener("scroll", () => {
          k("textarea", e.value, r.value);
        }), r.value.addEventListener("scroll", () => {
          k("previewCard", r.value, e.value);
        }), e.value.addEventListener("scroll", () => {
          k("textarea", e.value, s.value);
        }), s.value.addEventListener("scroll", () => {
          k("floatPreviewCard", s.value, e.value);
        });
      });
    }), se(() => o.text, () => {
      t("update:modelValue", o.text);
    }), se(() => u.value, async () => {
      u.value ? (o.beforeFullScreenTop = document.documentElement.scrollTop, h.value = !0, o.handleScrollFlag = "textarea", await X(() => {
        document.body.classList.add("disable-scroll"), k("textarea", e.value, r.value);
      })) : (document.body.classList.remove("disable-scroll"), h.value = !1, await X(() => {
        document.body.scrollTo(0, o.beforeFullScreenTop), k("textarea", e.value, s.value);
      }));
    });
    const k = (d, E, v) => {
      o.handleScrollFlag === d && (v.scrollTop = E.scrollTop * (v.scrollHeight - v.offsetHeight) / (E.scrollHeight - E.offsetHeight));
    }, D = (d) => {
      o.handleScrollFlag = d;
    }, I = (d = e.value.selectionStart, E = e.value.selectionEnd) => {
      o.stackTop >= 200 && o.history.splice(0, 100), o.stackTop++, o.history[o.stackTop] = {
        start: d,
        end: E,
        text: o.text,
        scrollTop: e.value.scrollTop
      };
    }, B = (d = e.value.selectionStart, E = e.value.selectionStart) => {
      o.history[o.stackTop] = {
        start: d,
        end: E,
        text: o.text,
        scrollTop: e.value.scrollTop
      };
    }, G = () => {
      o.stackTop < o.history.length - 1 && (o.history = o.history.slice(0, o.stackTop + 1));
    }, V = () => {
      if (o.stackTop >= 1) {
        o.stackTop--;
        const d = o.history[o.stackTop];
        o.text = d.text, X(() => {
          e.value.selectionStart = d.start, e.value.selectionEnd = d.end, e.value.scrollTo(0, d.scrollTop);
        });
      } else
        alert("无法再次撤销");
    }, re = () => {
      if (o.stackTop < o.history.length - 1) {
        o.stackTop++;
        let d = o.history[o.stackTop];
        o.text = d.text, X(() => {
          e.value.selectionStart = d.start, e.value.selectionEnd = d.end, e.value.scrollTo(0, d.scrollTop);
        });
      } else
        alert("已是最新，无法重做");
    }, le = (d) => {
      if (d.ctrlKey) {
        if (d.key == "x" || d.key == "X")
          o.pushFlag = "cut", setTimeout(I, 200);
        else if (d.key == "v" || d.key == "V")
          o.pushFlag = "copy", setTimeout(I, 200);
        else if (d.key == "z" || d.key == "Z")
          d.preventDefault(), o.pushFlag = "symbol", d.key == "z" ? V() : re();
        else if (d.key == "r" || d.key == "R")
          d.preventDefault(), d.key == "r" ? (o.pushFlag = "symbol", o.replaceFrom = o.text.slice(e.value.selectionStart, e.value.selectionEnd), p.value = !0) : p.value = !1;
        else
          for (let E = 0; E < i.value.length; E++)
            if (i.value[E].key == d.key) {
              d.preventDefault(), o.pushFlag = "symbol", _(i.value[E]);
              break;
            }
      } else if (d.key == "Enter")
        d.preventDefault(), o.pushFlag = "blank", F();
      else {
        if (d.key == "Ctrl" || d.key == "Shift" || d.key.startsWith("Arrow") || d.key == "Enter" || d.key == " ")
          return;
        if (d.key == "Escape")
          u.value && (u.value = !1);
        else if (d.key == "Tab")
          d.preventDefault(), o.pushFlag = "blank", j(d, "	");
        else if (d.key == "(" || d.key == "[" || d.key == "{") {
          d.preventDefault(), o.pushFlag = "symbol";
          let E = "";
          switch (d.key) {
            case "(":
              E = ")";
              break;
            case "[":
              E = "]";
              break;
            case "{":
              E = "}";
              break;
          }
          M({
            before: d.key,
            after: E
          });
        } else if (e.value.selectionEnd != e.value.selectionStart && (d.key == '"' || d.key == "'")) {
          d.preventDefault(), o.pushFlag = "symbol";
          let E = "";
          switch (d.key) {
            case "'":
              E = "'";
              break;
            case '"':
              E = '"';
              break;
          }
          M({
            before: d.key,
            after: E
          });
        } else
          o.pushFlag != "input" && G(), setTimeout(() => {
            Q("input");
          }, 100);
      }
    }, ge = (d) => {
      d.key == "Enter" || d.key == " " ? Q("blank") : d.key.startsWith("Arrow") && Q("jump");
    }, fe = () => {
      setTimeout(() => {
        Q("jump");
      }, 100);
    }, Q = (d) => {
      o.pushFlag != d ? (o.pushFlag = d, I()) : B();
    }, M = (d) => {
      let E = e.value.selectionStart, v = e.value.selectionEnd, x = o.text, L;
      const {
        before: P,
        after: ee
      } = d;
      x = pe(P, x, E), L = v + P.length, ee.length > 0 && (x = pe(ee, x, L)), o.text = x;
      const Ee = e.value.selectionStart != e.value.selectionEnd;
      X(() => {
        Ee ? (e.value.selectionStart = E, e.value.selectionEnd = L + ee.length) : (e.value.selectionStart = E + P.length, e.value.selectionEnd = E + P.length), I();
      });
    }, F = () => {
      const d = e.value.selectionStart;
      let E = `
`, v = d;
      for (o.text[v] == `
` && v--; o.text[v] != `
` && v > 0; )
        v--;
      for (v != 0 && v++; v < o.text.length && v < d && (o.text[v] == " " || o.text[v] == "	"); v++)
        E += o.text[v];
      o.text = pe(E, o.text, d), X(() => {
        e.value.selectionStart = d + E.length, e.value.selectionEnd = e.value.selectionStart, I();
      });
    }, j = (d, E) => {
      const v = e.value.selectionStart, x = e.value.selectionEnd;
      if (d.shiftKey)
        if (e.value.selectionStart == e.value.selectionEnd) {
          let L = 0;
          for (let Ee = e.value.selectionStart - 1; Ee >= 0; Ee--)
            if (o.text[Ee] == `
`) {
              L = Ee + 1;
              break;
            }
          const P = o.text.slice(L, v), ee = P.replace(E, "");
          if (P.length == ee.length)
            return;
          o.text = o.text.slice(0, v - P.length) + ee + o.text.slice(x), X(() => {
            I(v, v);
          });
        } else {
          const L = o.text.slice(v, x), P = L.replace(E, "").replaceAll(`
` + E, `
`);
          if (L.length == P.length)
            return;
          o.text = o.text.slice(0, v) + P + o.text.slice(v + L.length), X(() => {
            e.value.selectionStart = v, e.value.selectionEnd = v + P.length, I(v, e.value.selectionEnd);
          });
        }
      else if (e.value.selectionStart == e.value.selectionEnd)
        o.text = pe(E, o.text, e.value.selectionStart), X(() => {
          e.value.selectionStart = v + 1, e.value.selectionEnd = v + 1, I(v + 1, v + 1);
        });
      else {
        const L = o.text.slice(v, e.value.selectionEnd), P = E + L.replaceAll(`
`, `
` + E);
        if (L.length == P.length)
          return;
        o.text = o.text.slice(0, v) + P + o.text.slice(v + L.length), X(() => {
          e.value.selectionStart = v, e.value.selectionEnd = v + P.length, I(v, e.value.selectionEnd);
        });
      }
    };
    let K = Y();
    const C = we({
      index: -1,
      indexes: []
    });
    se(() => o.replaceFrom, () => {
      ue(), p && (o.replaceFrom.length <= 0 || ce());
    }), se(() => o.text, () => {
      ue();
    }), se(() => p.value, () => {
      ue();
    }), se(() => h.value, () => {
      ue(), p.value = !1;
    }), se(() => u.value, () => {
      ue(), p.value = !1;
    });
    const ue = () => {
      if (C.index = -1, C.indexes = [], e.value == null || (K.value.style.width = e.value.scrollWidth + "px", o.replaceFrom.length <= 0) || o.text.length <= 0)
        return;
      let d = o.text.indexOf(o.replaceFrom, 0), E = 0;
      for (; d >= 0; ) {
        let v = o.text.indexOf(o.replaceFrom, d);
        if (v < 0)
          break;
        e.value.selectionStart == v && e.value.selectionEnd - e.value.selectionStart == o.replaceFrom.length && (C.index = E), C.indexes.push(v), d = v + o.replaceFrom.length, E++;
      }
    }, W = (d) => {
      e.value.scrollTop = d;
    }, ce = () => {
      setTimeout(() => {
        W(K.value.scrollHeight - e.value.clientHeight / 2.4), e.value.selectionStart = C.indexes[C.index], e.value.selectionEnd = C.indexes[C.index] + o.replaceFrom.length;
      }, 50);
    }, he = () => {
      e.value != null && (C.index > 0 && C.index--, setTimeout(() => {
        W(K.value.scrollHeight - e.value.clientHeight / 2.4), e.value.focus(), e.value.selectionStart = C.indexes[C.index], e.value.selectionEnd = C.indexes[C.index] + o.replaceFrom.length;
      }, 50));
    }, be = () => {
      e.value != null && (C.index < C.indexes.length - 1 && C.index++, setTimeout(() => {
        W(K.value.scrollHeight - e.value.clientHeight / 2.4), e.value.focus(), e.value.selectionStart = C.indexes[C.index], e.value.selectionEnd = C.indexes[C.index] + o.replaceFrom.length;
      }, 50));
    }, ve = () => {
      o.text.slice(e.value.selectionStart, e.value.selectionEnd) == o.replaceFrom && (o.text = o.text.slice(0, e.value.selectionStart) + o.replaceTo + o.text.slice(e.value.selectionEnd), I());
    }, ke = () => {
      o.replaceFrom.length <= 0 ? alert("替换文本不可为空") : (o.text = o.text.replaceAll(o.replaceFrom, o.replaceTo), X(() => {
        I();
      }));
    }, me = (d, E) => {
      let v = 0, x = 1;
      E[d] == `
` && (d--, v++);
      for (let L = d; L >= 0 && E[L] != `
`; L--)
        v++;
      for (let L = d; L >= 0; L--)
        E[L] == `
` && x++;
      return {
        y: x,
        x: v
      };
    };
    return (d, E) => {
      const v = lt("MarkdownPreview");
      return z(), H("div", {
        class: xe([[te(u) ? "full" : "non-full", te(Xe)() ? "mobile" : "pc"], "editor"])
      }, [$("ul", ft, [(z(!0), H(de, null, Ie(A, (x) => (z(), H("li", null, [$("span", {
        onMousedown: ae((L) => x.method(x), ["prevent", "stop"]),
        title: x.label,
        class: xe(["iconfont", [x.active ? "chosen" : "", x.icon]])
      }, null, 42, ht)]))), 256))]), ie((z(), H("div", bt, [$("span", {
        class: "iconfont icon-close",
        onMousedown: E[0] || (E[0] = ae((x) => w("insert", !1), ["prevent", "stop"]))
      }, null, 32), (z(!0), H(de, null, Ie(i.value, (x) => (z(), H(de, null, [$("span", mt, [$("span", {
        class: "hover-color-blue",
        onMousedown: ae((L) => _(x), ["prevent", "stop"]),
        title: "快捷键[Ctrl + " + x.key + "]"
      }, Z(x.label), 41, Et), (z(!0), H(de, null, Ie(x.arguments, (L) => (z(), H(de, null, [$("label", null, Z(L.label), 1), "options" in L ? (z(), H("select", {
        key: 0,
        value: c.value.get(L.name).value,
        onChange: (P) => {
          T(L.name, P);
        }
      }, [(z(!0), H(de, null, Ie(L.options, (P) => (z(), H("option", null, Z(P), 1))), 256))], 40, _t)) : Le("", !0), "type" in L ? (z(), H("input", {
        key: 1,
        type: L.type,
        value: c.value.get(L.name).value,
        onInput: (P) => {
          b(L.name, P);
        }
      }, null, 40, Tt)) : Le("", !0)], 64))), 256))]), St], 64))), 256))])), [[Te, y("insert")], [te(De)]]), ie((z(), H("div", At, [$("span", {
        class: "iconfont icon-close",
        onMousedown: E[1] || (E[1] = ae((x) => w("replace", !1), ["prevent", "stop"]))
      }, null, 32), ie($("textarea", {
        "onUpdate:modelValue": E[2] || (E[2] = (x) => o.replaceFrom = x),
        placeholder: "查找文本"
      }, null, 512), [[Ce, o.replaceFrom]]), vt, ie($("textarea", {
        "onUpdate:modelValue": E[3] || (E[3] = (x) => o.replaceTo = x),
        placeholder: "替换文本"
      }, null, 512), [[Ce, o.replaceTo]]), $("div", It, [$("span", {
        class: "hover-color-blue",
        onMousedown: ae(be, ["prevent", "stop"]),
        style: {
          padding: "0.1em"
        }
      }, "↓", 40, kt), $("span", {
        class: "hover-color-blue",
        onMousedown: ae(he, ["prevent", "stop"]),
        style: {
          padding: "0.1em"
        }
      }, "↑", 40, wt), $("span", null, Z(C.index + 1) + "/" + Z(C.indexes.length), 1), $("span", {
        class: "hover-color-blue",
        onMousedown: ae(ve, ["prevent", "stop"])
      }, "替换选中", 40, Rt), $("span", {
        class: "hover-color-blue",
        onMousedown: ae(ke, ["prevent", "stop"])
      }, "替换全部", 40, yt)])])), [[Te, y("replace")], [te(De)]]), ie((z(), H("div", {
        class: "floating-card preview-card",
        onMouseenter: E[5] || (E[5] = (x) => D("floatPreviewCard"))
      }, [$("span", {
        class: "iconfont icon-close",
        onMousedown: E[4] || (E[4] = ae((x) => w("preview", !1), ["prevent", "stop"]))
      }, null, 32), $("div", {
        class: "container",
        ref_key: "floatPreviewCard",
        ref: s
      }, [Me(v, {
        "markdown-text": o.text
      }, null, 8, ["markdown-text"])], 512)], 32)), [[Te, y("preview") && !te(u)], [te(De)]]), $("div", Ot, [$("div", {
        ref_key: "textareaCountLine",
        ref: K,
        textContent: Z(o.text.substring(0, C.indexes[C.index])),
        style: {
          "white-space": "pre-wrap",
          "overflow-wrap": "break-word",
          padding: "0.5em",
          width: "100%",
          border: "1px solid #eee"
        }
      }, null, 8, Nt)]), $("div", {
        class: xe(["container", te(m)])
      }, [ie($("textarea", {
        ref_key: "textarea",
        ref: e,
        "onUpdate:modelValue": E[6] || (E[6] = (x) => o.text = x),
        placeholder: n.placeholder,
        class: "edit-card",
        onKeydown: le,
        onKeyup: ge,
        onMousedown: fe,
        onMouseenter: E[7] || (E[7] = (x) => D("textarea"))
      }, `\r
			`, 40, xt), [[Ce, o.text]]), ie($("div", {
        ref_key: "previewCard",
        ref: r,
        class: "preview-card",
        onMouseenter: E[8] || (E[8] = (x) => D("previewCard"))
      }, [Me(v, {
        "markdown-text": o.text
      }, null, 8, ["markdown-text"])], 544), [[Te, te(u) && te(h)]])], 2), e.value !== void 0 ? (z(), H("ul", Lt, [$("li", null, "字数 " + Z(o.text.length), 1), $("li", null, [ut(Z(f.startPlace.y) + ":" + Z(f.startPlace.x) + " ", 1), ie($("span", null, " 至 " + Z(f.endPlace.y) + ":" + Z(f.endPlace.x), 513), [[Te, f.selectLength > 0]])]), ie($("li", null, "选中 " + Z(f.selectLength), 513), [[Te, f.selectLength > 0]])])) : Le("", !0)], 2);
    };
  }
});
function We() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
  };
}
let Ae = We();
function Pt(a) {
  Ae = a;
}
const Je = /[&<>"']/, $t = new RegExp(Je.source, "g"), Qe = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Ut = new RegExp(Qe.source, "g"), Ft = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Be = (a) => Ft[a];
function q(a, t) {
  if (t) {
    if (Je.test(a))
      return a.replace($t, Be);
  } else if (Qe.test(a))
    return a.replace(Ut, Be);
  return a;
}
const Mt = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function et(a) {
  return a.replace(Mt, (t, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
const Bt = /(^|[^\[])\^/g;
function U(a, t) {
  a = typeof a == "string" ? a : a.source, t = t || "";
  const n = {
    replace: (e, r) => (r = r.source || r, r = r.replace(Bt, "$1"), a = a.replace(e, r), n),
    getRegex: () => new RegExp(a, t)
  };
  return n;
}
const Gt = /[^\w:]/g, zt = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Ge(a, t, n) {
  if (a) {
    let e;
    try {
      e = decodeURIComponent(et(n)).replace(Gt, "").toLowerCase();
    } catch {
      return null;
    }
    if (e.indexOf("javascript:") === 0 || e.indexOf("vbscript:") === 0 || e.indexOf("data:") === 0)
      return null;
  }
  t && !zt.test(n) && (n = jt(t, n));
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const ye = {}, Ht = /^[^:]+:\/*[^/]*$/, Yt = /^([^:]+:)[\s\S]*$/, qt = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function jt(a, t) {
  ye[" " + a] || (Ht.test(a) ? ye[" " + a] = a + "/" : ye[" " + a] = Oe(a, "/", !0)), a = ye[" " + a];
  const n = a.indexOf(":") === -1;
  return t.substring(0, 2) === "//" ? n ? t : a.replace(Yt, "$1") + t : t.charAt(0) === "/" ? n ? t : a.replace(qt, "$1") + t : a + t;
}
const Ne = { exec: function() {
} };
function J(a) {
  let t = 1, n, e;
  for (; t < arguments.length; t++) {
    n = arguments[t];
    for (e in n)
      Object.prototype.hasOwnProperty.call(n, e) && (a[e] = n[e]);
  }
  return a;
}
function ze(a, t) {
  const n = a.replace(/\|/g, (s, l, i) => {
    let c = !1, b = l;
    for (; --b >= 0 && i[b] === "\\"; )
      c = !c;
    return c ? "|" : " |";
  }), e = n.split(/ \|/);
  let r = 0;
  if (e[0].trim() || e.shift(), e.length > 0 && !e[e.length - 1].trim() && e.pop(), e.length > t)
    e.splice(t);
  else
    for (; e.length < t; )
      e.push("");
  for (; r < e.length; r++)
    e[r] = e[r].trim().replace(/\\\|/g, "|");
  return e;
}
function Oe(a, t, n) {
  const e = a.length;
  if (e === 0)
    return "";
  let r = 0;
  for (; r < e; ) {
    const s = a.charAt(e - r - 1);
    if (s === t && !n)
      r++;
    else if (s !== t && n)
      r++;
    else
      break;
  }
  return a.slice(0, e - r);
}
function Kt(a, t) {
  if (a.indexOf(t[1]) === -1)
    return -1;
  const n = a.length;
  let e = 0, r = 0;
  for (; r < n; r++)
    if (a[r] === "\\")
      r++;
    else if (a[r] === t[0])
      e++;
    else if (a[r] === t[1] && (e--, e < 0))
      return r;
  return -1;
}
function tt(a) {
  a && a.sanitize && !a.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function He(a, t) {
  if (t < 1)
    return "";
  let n = "";
  for (; t > 1; )
    t & 1 && (n += a), t >>= 1, a += a;
  return n + a;
}
function Ye(a, t, n, e) {
  const r = t.href, s = t.title ? q(t.title) : null, l = a[1].replace(/\\([\[\]])/g, "$1");
  if (a[0].charAt(0) !== "!") {
    e.state.inLink = !0;
    const i = {
      type: "link",
      raw: n,
      href: r,
      title: s,
      text: l,
      tokens: e.inlineTokens(l)
    };
    return e.state.inLink = !1, i;
  }
  return {
    type: "image",
    raw: n,
    href: r,
    title: s,
    text: q(l)
  };
}
function Vt(a, t) {
  const n = a.match(/^(\s+)(?:```)/);
  if (n === null)
    return t;
  const e = n[1];
  return t.split(`
`).map((r) => {
    const s = r.match(/^\s+/);
    if (s === null)
      return r;
    const [l] = s;
    return l.length >= e.length ? r.slice(e.length) : r;
  }).join(`
`);
}
class Ue {
  constructor(t) {
    this.options = t || Ae;
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const e = n[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? e : Oe(e, `
`)
      };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const e = n[0], r = Vt(e, n[3] || "");
      return {
        type: "code",
        raw: e,
        lang: n[2] ? n[2].trim().replace(this.rules.inline._escapes, "$1") : n[2],
        text: r
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let e = n[2].trim();
      if (/#$/.test(e)) {
        const r = Oe(e, "#");
        (this.options.pedantic || !r || / $/.test(r)) && (e = r.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: e,
        tokens: this.lexer.inline(e)
      };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n)
      return {
        type: "hr",
        raw: n[0]
      };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      const e = n[0].replace(/^ *>[ \t]?/gm, ""), r = this.lexer.state.top;
      this.lexer.state.top = !0;
      const s = this.lexer.blockTokens(e);
      return this.lexer.state.top = r, {
        type: "blockquote",
        raw: n[0],
        tokens: s,
        text: e
      };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let e, r, s, l, i, c, b, T, R, f, g, o, A = n[1].trim();
      const y = A.length > 1, w = {
        type: "list",
        raw: "",
        ordered: y,
        start: y ? +A.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      A = y ? `\\d{1,9}\\${A.slice(-1)}` : `\\${A}`, this.options.pedantic && (A = y ? A : "[*+-]");
      const u = new RegExp(`^( {0,3}${A})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; t && (o = !1, !(!(n = u.exec(t)) || this.rules.block.hr.test(t))); ) {
        if (e = n[0], t = t.substring(e.length), T = n[2].split(`
`, 1)[0].replace(/^\t+/, (h) => " ".repeat(3 * h.length)), R = t.split(`
`, 1)[0], this.options.pedantic ? (l = 2, g = T.trimLeft()) : (l = n[2].search(/[^ ]/), l = l > 4 ? 1 : l, g = T.slice(l), l += n[1].length), c = !1, !T && /^ *$/.test(R) && (e += R + `
`, t = t.substring(R.length + 1), o = !0), !o) {
          const h = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), m = new RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), _ = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`), k = new RegExp(`^ {0,${Math.min(3, l - 1)}}#`);
          for (; t && (f = t.split(`
`, 1)[0], R = f, this.options.pedantic && (R = R.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(_.test(R) || k.test(R) || h.test(R) || m.test(t))); ) {
            if (R.search(/[^ ]/) >= l || !R.trim())
              g += `
` + R.slice(l);
            else {
              if (c || T.search(/[^ ]/) >= 4 || _.test(T) || k.test(T) || m.test(T))
                break;
              g += `
` + R;
            }
            !c && !R.trim() && (c = !0), e += f + `
`, t = t.substring(f.length + 1), T = R.slice(l);
          }
        }
        w.loose || (b ? w.loose = !0 : /\n *\n *$/.test(e) && (b = !0)), this.options.gfm && (r = /^\[[ xX]\] /.exec(g), r && (s = r[0] !== "[ ] ", g = g.replace(/^\[[ xX]\] +/, ""))), w.items.push({
          type: "list_item",
          raw: e,
          task: !!r,
          checked: s,
          loose: !1,
          text: g
        }), w.raw += e;
      }
      w.items[w.items.length - 1].raw = e.trimRight(), w.items[w.items.length - 1].text = g.trimRight(), w.raw = w.raw.trimRight();
      const p = w.items.length;
      for (i = 0; i < p; i++)
        if (this.lexer.state.top = !1, w.items[i].tokens = this.lexer.blockTokens(w.items[i].text, []), !w.loose) {
          const h = w.items[i].tokens.filter((_) => _.type === "space"), m = h.length > 0 && h.some((_) => /\n.*\n/.test(_.raw));
          w.loose = m;
        }
      if (w.loose)
        for (i = 0; i < p; i++)
          w.items[i].loose = !0;
      return w;
    }
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n) {
      const e = {
        type: "html",
        raw: n[0],
        pre: !this.options.sanitizer && (n[1] === "pre" || n[1] === "script" || n[1] === "style"),
        text: n[0]
      };
      if (this.options.sanitize) {
        const r = this.options.sanitizer ? this.options.sanitizer(n[0]) : q(n[0]);
        e.type = "paragraph", e.text = r, e.tokens = this.lexer.inline(r);
      }
      return e;
    }
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const e = n[1].toLowerCase().replace(/\s+/g, " "), r = n[2] ? n[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", s = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline._escapes, "$1") : n[3];
      return {
        type: "def",
        tag: e,
        raw: n[0],
        href: r,
        title: s
      };
    }
  }
  table(t) {
    const n = this.rules.block.table.exec(t);
    if (n) {
      const e = {
        type: "table",
        header: ze(n[1]).map((r) => ({ text: r })),
        align: n[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (e.header.length === e.align.length) {
        e.raw = n[0];
        let r = e.align.length, s, l, i, c;
        for (s = 0; s < r; s++)
          /^ *-+: *$/.test(e.align[s]) ? e.align[s] = "right" : /^ *:-+: *$/.test(e.align[s]) ? e.align[s] = "center" : /^ *:-+ *$/.test(e.align[s]) ? e.align[s] = "left" : e.align[s] = null;
        for (r = e.rows.length, s = 0; s < r; s++)
          e.rows[s] = ze(e.rows[s], e.header.length).map((b) => ({ text: b }));
        for (r = e.header.length, l = 0; l < r; l++)
          e.header[l].tokens = this.lexer.inline(e.header[l].text);
        for (r = e.rows.length, l = 0; l < r; l++)
          for (c = e.rows[l], i = 0; i < c.length; i++)
            c[i].tokens = this.lexer.inline(c[i].text);
        return e;
      }
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1])
      };
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const e = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: e,
        tokens: this.lexer.inline(e)
      };
    }
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0])
      };
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: q(n[1])
      };
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
    if (n)
      return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : q(n[0]) : n[0]
      };
  }
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const e = n[2].trim();
      if (!this.options.pedantic && /^</.test(e)) {
        if (!/>$/.test(e))
          return;
        const l = Oe(e.slice(0, -1), "\\");
        if ((e.length - l.length) % 2 === 0)
          return;
      } else {
        const l = Kt(n[2], "()");
        if (l > -1) {
          const c = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + l;
          n[2] = n[2].substring(0, l), n[0] = n[0].substring(0, c).trim(), n[3] = "";
        }
      }
      let r = n[2], s = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
        l && (r = l[1], s = l[3]);
      } else
        s = n[3] ? n[3].slice(1, -1) : "";
      return r = r.trim(), /^</.test(r) && (this.options.pedantic && !/>$/.test(e) ? r = r.slice(1) : r = r.slice(1, -1)), Ye(n, {
        href: r && r.replace(this.rules.inline._escapes, "$1"),
        title: s && s.replace(this.rules.inline._escapes, "$1")
      }, n[0], this.lexer);
    }
  }
  reflink(t, n) {
    let e;
    if ((e = this.rules.inline.reflink.exec(t)) || (e = this.rules.inline.nolink.exec(t))) {
      let r = (e[2] || e[1]).replace(/\s+/g, " ");
      if (r = n[r.toLowerCase()], !r) {
        const s = e[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return Ye(e, r, e[0], this.lexer);
    }
  }
  emStrong(t, n, e = "") {
    let r = this.rules.inline.emStrong.lDelim.exec(t);
    if (!r || r[3] && e.match(/[\p{L}\p{N}]/u))
      return;
    const s = r[1] || r[2] || "";
    if (!s || s && (e === "" || this.rules.inline.punctuation.exec(e))) {
      const l = r[0].length - 1;
      let i, c, b = l, T = 0;
      const R = r[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (R.lastIndex = 0, n = n.slice(-1 * t.length + l); (r = R.exec(n)) != null; ) {
        if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i)
          continue;
        if (c = i.length, r[3] || r[4]) {
          b += c;
          continue;
        } else if ((r[5] || r[6]) && l % 3 && !((l + c) % 3)) {
          T += c;
          continue;
        }
        if (b -= c, b > 0)
          continue;
        c = Math.min(c, c + b + T);
        const f = t.slice(0, l + r.index + (r[0].length - i.length) + c);
        if (Math.min(l, c) % 2) {
          const o = f.slice(1, -1);
          return {
            type: "em",
            raw: f,
            text: o,
            tokens: this.lexer.inlineTokens(o)
          };
        }
        const g = f.slice(2, -2);
        return {
          type: "strong",
          raw: f,
          text: g,
          tokens: this.lexer.inlineTokens(g)
        };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let e = n[2].replace(/\n/g, " ");
      const r = /[^ ]/.test(e), s = /^ /.test(e) && / $/.test(e);
      return r && s && (e = e.substring(1, e.length - 1)), e = q(e, !0), {
        type: "codespan",
        raw: n[0],
        text: e
      };
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2])
      };
  }
  autolink(t, n) {
    const e = this.rules.inline.autolink.exec(t);
    if (e) {
      let r, s;
      return e[2] === "@" ? (r = q(this.options.mangle ? n(e[1]) : e[1]), s = "mailto:" + r) : (r = q(e[1]), s = r), {
        type: "link",
        raw: e[0],
        text: r,
        href: s,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(t, n) {
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let r, s;
      if (e[2] === "@")
        r = q(this.options.mangle ? n(e[0]) : e[0]), s = "mailto:" + r;
      else {
        let l;
        do
          l = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])[0];
        while (l !== e[0]);
        r = q(e[0]), e[1] === "www." ? s = "http://" + e[0] : s = e[0];
      }
      return {
        type: "link",
        raw: e[0],
        text: r,
        href: s,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(t, n) {
    const e = this.rules.inline.text.exec(t);
    if (e) {
      let r;
      return this.lexer.state.inRawBlock ? r = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : q(e[0]) : e[0] : r = q(this.options.smartypants ? n(e[0]) : e[0]), {
        type: "text",
        raw: e[0],
        text: r
      };
    }
  }
}
const O = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: Ne,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
O._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
O._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
O.def = U(O.def).replace("label", O._label).replace("title", O._title).getRegex();
O.bullet = /(?:[*+-]|\d{1,9}[.)])/;
O.listItemStart = U(/^( *)(bull) */).replace("bull", O.bullet).getRegex();
O.list = U(O.list).replace(/bull/g, O.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + O.def.source + ")").getRegex();
O._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
O._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
O.html = U(O.html, "i").replace("comment", O._comment).replace("tag", O._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
O.paragraph = U(O._paragraph).replace("hr", O.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O._tag).getRegex();
O.blockquote = U(O.blockquote).replace("paragraph", O.paragraph).getRegex();
O.normal = J({}, O);
O.gfm = J({}, O.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
});
O.gfm.table = U(O.gfm.table).replace("hr", O.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O._tag).getRegex();
O.gfm.paragraph = U(O._paragraph).replace("hr", O.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", O.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O._tag).getRegex();
O.pedantic = J({}, O.normal, {
  html: U(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", O._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Ne,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: U(O.normal._paragraph).replace("hr", O.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", O.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const S = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Ne,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: Ne,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
S._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
S.punctuation = U(S.punctuation).replace(/punctuation/g, S._punctuation).getRegex();
S.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
S.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
S._comment = U(O._comment).replace("(?:-->|$)", "-->").getRegex();
S.emStrong.lDelim = U(S.emStrong.lDelim).replace(/punct/g, S._punctuation).getRegex();
S.emStrong.rDelimAst = U(S.emStrong.rDelimAst, "g").replace(/punct/g, S._punctuation).getRegex();
S.emStrong.rDelimUnd = U(S.emStrong.rDelimUnd, "g").replace(/punct/g, S._punctuation).getRegex();
S._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
S._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
S._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
S.autolink = U(S.autolink).replace("scheme", S._scheme).replace("email", S._email).getRegex();
S._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
S.tag = U(S.tag).replace("comment", S._comment).replace("attribute", S._attribute).getRegex();
S._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
S._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
S._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
S.link = U(S.link).replace("label", S._label).replace("href", S._href).replace("title", S._title).getRegex();
S.reflink = U(S.reflink).replace("label", S._label).replace("ref", O._label).getRegex();
S.nolink = U(S.nolink).replace("ref", O._label).getRegex();
S.reflinkSearch = U(S.reflinkSearch, "g").replace("reflink", S.reflink).replace("nolink", S.nolink).getRegex();
S.normal = J({}, S);
S.pedantic = J({}, S.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: U(/^!?\[(label)\]\((.*?)\)/).replace("label", S._label).getRegex(),
  reflink: U(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", S._label).getRegex()
});
S.gfm = J({}, S.normal, {
  escape: U(S.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
S.gfm.url = U(S.gfm.url, "i").replace("email", S.gfm._extended_email).getRegex();
S.breaks = J({}, S.gfm, {
  br: U(S.br).replace("{2,}", "*").getRegex(),
  text: U(S.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function Xt(a) {
  return a.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function qe(a) {
  let t = "", n, e;
  const r = a.length;
  for (n = 0; n < r; n++)
    e = a.charCodeAt(n), Math.random() > 0.5 && (e = "x" + e.toString(16)), t += "&#" + e + ";";
  return t;
}
class oe {
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ae, this.options.tokenizer = this.options.tokenizer || new Ue(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      block: O.normal,
      inline: S.normal
    };
    this.options.pedantic ? (n.block = O.pedantic, n.inline = S.pedantic) : this.options.gfm && (n.block = O.gfm, this.options.breaks ? n.inline = S.breaks : n.inline = S.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: O,
      inline: S
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new oe(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new oe(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    let n;
    for (; n = this.inlineQueue.shift(); )
      this.inlineTokens(n.src, n.tokens);
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(t, n = []) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (i, c, b) => c + "    ".repeat(b.length));
    let e, r, s, l;
    for (; t; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((i) => (e = i.call({ lexer: this }, t, n)) ? (t = t.substring(e.raw.length), n.push(e), !0) : !1))) {
        if (e = this.tokenizer.space(t)) {
          t = t.substring(e.raw.length), e.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(e);
          continue;
        }
        if (e = this.tokenizer.code(t)) {
          t = t.substring(e.raw.length), r = n[n.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + e.raw, r.text += `
` + e.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : n.push(e);
          continue;
        }
        if (e = this.tokenizer.fences(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.heading(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.hr(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.blockquote(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.list(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.html(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.def(t)) {
          t = t.substring(e.raw.length), r = n[n.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + e.raw, r.text += `
` + e.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[e.tag] || (this.tokens.links[e.tag] = {
            href: e.href,
            title: e.title
          });
          continue;
        }
        if (e = this.tokenizer.table(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.lheading(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (s = t, this.options.extensions && this.options.extensions.startBlock) {
          let i = 1 / 0;
          const c = t.slice(1);
          let b;
          this.options.extensions.startBlock.forEach(function(T) {
            b = T.call({ lexer: this }, c), typeof b == "number" && b >= 0 && (i = Math.min(i, b));
          }), i < 1 / 0 && i >= 0 && (s = t.substring(0, i + 1));
        }
        if (this.state.top && (e = this.tokenizer.paragraph(s))) {
          r = n[n.length - 1], l && r.type === "paragraph" ? (r.raw += `
` + e.raw, r.text += `
` + e.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : n.push(e), l = s.length !== t.length, t = t.substring(e.raw.length);
          continue;
        }
        if (e = this.tokenizer.text(t)) {
          t = t.substring(e.raw.length), r = n[n.length - 1], r && r.type === "text" ? (r.raw += `
` + e.raw, r.text += `
` + e.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : n.push(e);
          continue;
        }
        if (t) {
          const i = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(i);
            break;
          } else
            throw new Error(i);
        }
      }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, n = []) {
    let e, r, s, l = t, i, c, b;
    if (this.tokens.links) {
      const T = Object.keys(this.tokens.links);
      if (T.length > 0)
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          T.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + He("a", i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, i.index) + "[" + He("a", i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.escapedEmSt.exec(l)) != null; )
      l = l.slice(0, i.index + i[0].length - 2) + "++" + l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; t; )
      if (c || (b = ""), c = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((T) => (e = T.call({ lexer: this }, t, n)) ? (t = t.substring(e.raw.length), n.push(e), !0) : !1))) {
        if (e = this.tokenizer.escape(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.tag(t)) {
          t = t.substring(e.raw.length), r = n[n.length - 1], r && e.type === "text" && r.type === "text" ? (r.raw += e.raw, r.text += e.text) : n.push(e);
          continue;
        }
        if (e = this.tokenizer.link(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(e.raw.length), r = n[n.length - 1], r && e.type === "text" && r.type === "text" ? (r.raw += e.raw, r.text += e.text) : n.push(e);
          continue;
        }
        if (e = this.tokenizer.emStrong(t, l, b)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.codespan(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.br(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.del(t)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (e = this.tokenizer.autolink(t, qe)) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (!this.state.inLink && (e = this.tokenizer.url(t, qe))) {
          t = t.substring(e.raw.length), n.push(e);
          continue;
        }
        if (s = t, this.options.extensions && this.options.extensions.startInline) {
          let T = 1 / 0;
          const R = t.slice(1);
          let f;
          this.options.extensions.startInline.forEach(function(g) {
            f = g.call({ lexer: this }, R), typeof f == "number" && f >= 0 && (T = Math.min(T, f));
          }), T < 1 / 0 && T >= 0 && (s = t.substring(0, T + 1));
        }
        if (e = this.tokenizer.inlineText(s, Xt)) {
          t = t.substring(e.raw.length), e.raw.slice(-1) !== "_" && (b = e.raw.slice(-1)), c = !0, r = n[n.length - 1], r && r.type === "text" ? (r.raw += e.raw, r.text += e.text) : n.push(e);
          continue;
        }
        if (t) {
          const T = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(T);
            break;
          } else
            throw new Error(T);
        }
      }
    return n;
  }
}
class Fe {
  constructor(t) {
    this.options = t || Ae;
  }
  code(t, n, e) {
    const r = (n || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const s = this.options.highlight(t, r);
      s != null && s !== t && (e = !0, t = s);
    }
    return t = t.replace(/\n$/, "") + `
`, r ? '<pre><code class="' + this.options.langPrefix + q(r) + '">' + (e ? t : q(t, !0)) + `</code></pre>
` : "<pre><code>" + (e ? t : q(t, !0)) + `</code></pre>
`;
  }
  /**
   * @param {string} quote
   */
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  html(t) {
    return t;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(t, n, e, r) {
    if (this.options.headerIds) {
      const s = this.options.headerPrefix + r.slug(e);
      return `<h${n} id="${s}">${t}</h${n}>
`;
    }
    return `<h${n}>${t}</h${n}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(t, n, e) {
    const r = n ? "ol" : "ul", s = n && e !== 1 ? ' start="' + e + '"' : "";
    return "<" + r + s + `>
` + t + "</" + r + `>
`;
  }
  /**
   * @param {string} text
   */
  listitem(t) {
    return `<li>${t}</li>
`;
  }
  checkbox(t) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(t, n) {
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + n + `</table>
`;
  }
  /**
   * @param {string} content
   */
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t, n) {
    const e = n.header ? "th" : "td";
    return (n.align ? `<${e} align="${n.align}">` : `<${e}>`) + t + `</${e}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(t) {
    return `<strong>${t}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(t) {
    return `<em>${t}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(t) {
    return `<code>${t}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(t) {
    return `<del>${t}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(t, n, e) {
    if (t = Ge(this.options.sanitize, this.options.baseUrl, t), t === null)
      return e;
    let r = '<a href="' + t + '"';
    return n && (r += ' title="' + n + '"'), r += ">" + e + "</a>", r;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(t, n, e) {
    if (t = Ge(this.options.sanitize, this.options.baseUrl, t), t === null)
      return e;
    let r = `<img src="${t}" alt="${e}"`;
    return n && (r += ` title="${n}"`), r += this.options.xhtml ? "/>" : ">", r;
  }
  text(t) {
    return t;
  }
}
class nt {
  // no need for block level renderers
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, n, e) {
    return "" + e;
  }
  image(t, n, e) {
    return "" + e;
  }
  br() {
    return "";
  }
}
class rt {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(t) {
    return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(t, n) {
    let e = t, r = 0;
    if (this.seen.hasOwnProperty(e)) {
      r = this.seen[t];
      do
        r++, e = t + "-" + r;
      while (this.seen.hasOwnProperty(e));
    }
    return n || (this.seen[t] = r, this.seen[e] = 0), e;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(t, n = {}) {
    const e = this.serialize(t);
    return this.getNextSafeSlug(e, n.dryrun);
  }
}
class ne {
  constructor(t) {
    this.options = t || Ae, this.options.renderer = this.options.renderer || new Fe(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new nt(), this.slugger = new rt();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new ne(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new ne(n).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, n = !0) {
    let e = "", r, s, l, i, c, b, T, R, f, g, o, A, y, w, u, p, h, m, _;
    const k = t.length;
    for (r = 0; r < k; r++) {
      if (g = t[r], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[g.type] && (_ = this.options.extensions.renderers[g.type].call({ parser: this }, g), _ !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(g.type))) {
        e += _ || "";
        continue;
      }
      switch (g.type) {
        case "space":
          continue;
        case "hr": {
          e += this.renderer.hr();
          continue;
        }
        case "heading": {
          e += this.renderer.heading(
            this.parseInline(g.tokens),
            g.depth,
            et(this.parseInline(g.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          e += this.renderer.code(
            g.text,
            g.lang,
            g.escaped
          );
          continue;
        }
        case "table": {
          for (R = "", T = "", i = g.header.length, s = 0; s < i; s++)
            T += this.renderer.tablecell(
              this.parseInline(g.header[s].tokens),
              { header: !0, align: g.align[s] }
            );
          for (R += this.renderer.tablerow(T), f = "", i = g.rows.length, s = 0; s < i; s++) {
            for (b = g.rows[s], T = "", c = b.length, l = 0; l < c; l++)
              T += this.renderer.tablecell(
                this.parseInline(b[l].tokens),
                { header: !1, align: g.align[l] }
              );
            f += this.renderer.tablerow(T);
          }
          e += this.renderer.table(R, f);
          continue;
        }
        case "blockquote": {
          f = this.parse(g.tokens), e += this.renderer.blockquote(f);
          continue;
        }
        case "list": {
          for (o = g.ordered, A = g.start, y = g.loose, i = g.items.length, f = "", s = 0; s < i; s++)
            u = g.items[s], p = u.checked, h = u.task, w = "", u.task && (m = this.renderer.checkbox(p), y ? u.tokens.length > 0 && u.tokens[0].type === "paragraph" ? (u.tokens[0].text = m + " " + u.tokens[0].text, u.tokens[0].tokens && u.tokens[0].tokens.length > 0 && u.tokens[0].tokens[0].type === "text" && (u.tokens[0].tokens[0].text = m + " " + u.tokens[0].tokens[0].text)) : u.tokens.unshift({
              type: "text",
              text: m
            }) : w += m), w += this.parse(u.tokens, y), f += this.renderer.listitem(w, h, p);
          e += this.renderer.list(f, o, A);
          continue;
        }
        case "html": {
          e += this.renderer.html(g.text);
          continue;
        }
        case "paragraph": {
          e += this.renderer.paragraph(this.parseInline(g.tokens));
          continue;
        }
        case "text": {
          for (f = g.tokens ? this.parseInline(g.tokens) : g.text; r + 1 < k && t[r + 1].type === "text"; )
            g = t[++r], f += `
` + (g.tokens ? this.parseInline(g.tokens) : g.text);
          e += n ? this.renderer.paragraph(f) : f;
          continue;
        }
        default: {
          const D = 'Token with "' + g.type + '" type was not found.';
          if (this.options.silent) {
            console.error(D);
            return;
          } else
            throw new Error(D);
        }
      }
    }
    return e;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, n) {
    n = n || this.renderer;
    let e = "", r, s, l;
    const i = t.length;
    for (r = 0; r < i; r++) {
      if (s = t[r], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type] && (l = this.options.extensions.renderers[s.type].call({ parser: this }, s), l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type))) {
        e += l || "";
        continue;
      }
      switch (s.type) {
        case "escape": {
          e += n.text(s.text);
          break;
        }
        case "html": {
          e += n.html(s.text);
          break;
        }
        case "link": {
          e += n.link(s.href, s.title, this.parseInline(s.tokens, n));
          break;
        }
        case "image": {
          e += n.image(s.href, s.title, s.text);
          break;
        }
        case "strong": {
          e += n.strong(this.parseInline(s.tokens, n));
          break;
        }
        case "em": {
          e += n.em(this.parseInline(s.tokens, n));
          break;
        }
        case "codespan": {
          e += n.codespan(s.text);
          break;
        }
        case "br": {
          e += n.br();
          break;
        }
        case "del": {
          e += n.del(this.parseInline(s.tokens, n));
          break;
        }
        case "text": {
          e += n.text(s.text);
          break;
        }
        default: {
          const c = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) {
            console.error(c);
            return;
          } else
            throw new Error(c);
        }
      }
    }
    return e;
  }
}
function N(a, t, n) {
  if (typeof a > "u" || a === null)
    throw new Error("marked(): input parameter is undefined or null");
  if (typeof a != "string")
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
  if (typeof t == "function" && (n = t, t = null), t = J({}, N.defaults, t || {}), tt(t), n) {
    const r = t.highlight;
    let s;
    try {
      s = oe.lex(a, t);
    } catch (c) {
      return n(c);
    }
    const l = function(c) {
      let b;
      if (!c)
        try {
          t.walkTokens && N.walkTokens(s, t.walkTokens), b = ne.parse(s, t);
        } catch (T) {
          c = T;
        }
      return t.highlight = r, c ? n(c) : n(null, b);
    };
    if (!r || r.length < 3 || (delete t.highlight, !s.length))
      return l();
    let i = 0;
    N.walkTokens(s, function(c) {
      c.type === "code" && (i++, setTimeout(() => {
        r(c.text, c.lang, function(b, T) {
          if (b)
            return l(b);
          T != null && T !== c.text && (c.text = T, c.escaped = !0), i--, i === 0 && l();
        });
      }, 0));
    }), i === 0 && l();
    return;
  }
  function e(r) {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t.silent)
      return "<p>An error occurred:</p><pre>" + q(r.message + "", !0) + "</pre>";
    throw r;
  }
  try {
    const r = oe.lex(a, t);
    if (t.walkTokens) {
      if (t.async)
        return Promise.all(N.walkTokens(r, t.walkTokens)).then(() => ne.parse(r, t)).catch(e);
      N.walkTokens(r, t.walkTokens);
    }
    return ne.parse(r, t);
  } catch (r) {
    e(r);
  }
}
N.options = N.setOptions = function(a) {
  return J(N.defaults, a), Pt(N.defaults), N;
};
N.getDefaults = We;
N.defaults = Ae;
N.use = function(...a) {
  const t = N.defaults.extensions || { renderers: {}, childTokens: {} };
  a.forEach((n) => {
    const e = J({}, n);
    if (e.async = N.defaults.async || e.async, n.extensions && (n.extensions.forEach((r) => {
      if (!r.name)
        throw new Error("extension name required");
      if (r.renderer) {
        const s = t.renderers[r.name];
        s ? t.renderers[r.name] = function(...l) {
          let i = r.renderer.apply(this, l);
          return i === !1 && (i = s.apply(this, l)), i;
        } : t.renderers[r.name] = r.renderer;
      }
      if (r.tokenizer) {
        if (!r.level || r.level !== "block" && r.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        t[r.level] ? t[r.level].unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
      }
      r.childTokens && (t.childTokens[r.name] = r.childTokens);
    }), e.extensions = t), n.renderer) {
      const r = N.defaults.renderer || new Fe();
      for (const s in n.renderer) {
        const l = r[s];
        r[s] = (...i) => {
          let c = n.renderer[s].apply(r, i);
          return c === !1 && (c = l.apply(r, i)), c;
        };
      }
      e.renderer = r;
    }
    if (n.tokenizer) {
      const r = N.defaults.tokenizer || new Ue();
      for (const s in n.tokenizer) {
        const l = r[s];
        r[s] = (...i) => {
          let c = n.tokenizer[s].apply(r, i);
          return c === !1 && (c = l.apply(r, i)), c;
        };
      }
      e.tokenizer = r;
    }
    if (n.walkTokens) {
      const r = N.defaults.walkTokens;
      e.walkTokens = function(s) {
        let l = [];
        return l.push(n.walkTokens.call(this, s)), r && (l = l.concat(r.call(this, s))), l;
      };
    }
    N.setOptions(e);
  });
};
N.walkTokens = function(a, t) {
  let n = [];
  for (const e of a)
    switch (n = n.concat(t.call(N, e)), e.type) {
      case "table": {
        for (const r of e.header)
          n = n.concat(N.walkTokens(r.tokens, t));
        for (const r of e.rows)
          for (const s of r)
            n = n.concat(N.walkTokens(s.tokens, t));
        break;
      }
      case "list": {
        n = n.concat(N.walkTokens(e.items, t));
        break;
      }
      default:
        N.defaults.extensions && N.defaults.extensions.childTokens && N.defaults.extensions.childTokens[e.type] ? N.defaults.extensions.childTokens[e.type].forEach(function(r) {
          n = n.concat(N.walkTokens(e[r], t));
        }) : e.tokens && (n = n.concat(N.walkTokens(e.tokens, t)));
    }
  return n;
};
N.parseInline = function(a, t) {
  if (typeof a > "u" || a === null)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if (typeof a != "string")
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
  t = J({}, N.defaults, t || {}), tt(t);
  try {
    const n = oe.lexInline(a, t);
    return t.walkTokens && N.walkTokens(n, t.walkTokens), ne.parseInline(n, t);
  } catch (n) {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t.silent)
      return "<p>An error occurred:</p><pre>" + q(n.message + "", !0) + "</pre>";
    throw n;
  }
};
N.Parser = ne;
N.parser = ne.parse;
N.Renderer = Fe;
N.TextRenderer = nt;
N.Lexer = oe;
N.lexer = oe.lex;
N.Tokenizer = Ue;
N.Slugger = rt;
N.parse = N;
N.options;
N.setOptions;
N.use;
N.walkTokens;
N.parseInline;
ne.parse;
oe.lex;
const Zt = {
  class: "outline"
}, Wt = ["href"], Jt = {
  name: "MarkdownOutline"
}, Qt = /* @__PURE__ */ $e({
  ...Jt,
  props: {
    markdownText: {
      type: String,
      required: !0
    }
  },
  setup(a) {
    const t = a;
    function n(r) {
      const s = [], l = /<h([1-6]) id="(.*?)">/g;
      let i;
      for (; i = l.exec(r); ) {
        const c = i[1], b = i[2];
        s.push({
          level: c,
          text: b
        });
      }
      return s;
    }
    se(() => t.markdownText, () => {
      e.value = n(N.parse(t.markdownText));
    });
    let e = Y([]);
    return (r, s) => (z(), H("ul", Zt, [(z(!0), H(de, null, Ie(te(e), (l) => (z(), H("li", {
      key: l.text
    }, [$("a", {
      style: ct("padding-left: " + (l.level - 1) + "em;"),
      href: `#${l.text}`
    }, Z(l.text), 13, Wt)]))), 128))]));
  }
});
var je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pe = {}, en = {
  get exports() {
    return Pe;
  },
  set exports(a) {
    Pe = a;
  }
};
(function(a) {
  var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var n = function(e) {
    var r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, s = 0, l = {}, i = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: e.Prism && e.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function u(p) {
          return p instanceof c ? new c(p.type, u(p.content), p.alias) : Array.isArray(p) ? p.map(u) : p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(u) {
          return Object.prototype.toString.call(u).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(u) {
          return u.__id || Object.defineProperty(u, "__id", { value: ++s }), u.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function u(p, h) {
          h = h || {};
          var m, _;
          switch (i.util.type(p)) {
            case "Object":
              if (_ = i.util.objId(p), h[_])
                return h[_];
              m = /** @type {Record<string, any>} */
              {}, h[_] = m;
              for (var k in p)
                p.hasOwnProperty(k) && (m[k] = u(p[k], h));
              return (
                /** @type {any} */
                m
              );
            case "Array":
              return _ = i.util.objId(p), h[_] ? h[_] : (m = [], h[_] = m, /** @type {Array} */
              /** @type {any} */
              p.forEach(function(D, I) {
                m[I] = u(D, h);
              }), /** @type {any} */
              m);
            default:
              return p;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(u) {
          for (; u; ) {
            var p = r.exec(u.className);
            if (p)
              return p[1].toLowerCase();
            u = u.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(u, p) {
          u.className = u.className.replace(RegExp(r, "gi"), ""), u.classList.add("language-" + p);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document && 1 < 2)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (m) {
            var u = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack) || [])[1];
            if (u) {
              var p = document.getElementsByTagName("script");
              for (var h in p)
                if (p[h].src == u)
                  return p[h];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(u, p, h) {
          for (var m = "no-" + p; u; ) {
            var _ = u.classList;
            if (_.contains(p))
              return !0;
            if (_.contains(m))
              return !1;
            u = u.parentElement;
          }
          return !!h;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: l,
        plaintext: l,
        text: l,
        txt: l,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(u, p) {
          var h = i.util.clone(i.languages[u]);
          for (var m in p)
            h[m] = p[m];
          return h;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(u, p, h, m) {
          m = m || /** @type {any} */
          i.languages;
          var _ = m[u], k = {};
          for (var D in _)
            if (_.hasOwnProperty(D)) {
              if (D == p)
                for (var I in h)
                  h.hasOwnProperty(I) && (k[I] = h[I]);
              h.hasOwnProperty(D) || (k[D] = _[D]);
            }
          var B = m[u];
          return m[u] = k, i.languages.DFS(i.languages, function(G, V) {
            V === B && G != u && (this[G] = k);
          }), k;
        },
        // Traverse a language definition with Depth First Search
        DFS: function u(p, h, m, _) {
          _ = _ || {};
          var k = i.util.objId;
          for (var D in p)
            if (p.hasOwnProperty(D)) {
              h.call(p, D, p[D], m || D);
              var I = p[D], B = i.util.type(I);
              B === "Object" && !_[k(I)] ? (_[k(I)] = !0, u(I, h, null, _)) : B === "Array" && !_[k(I)] && (_[k(I)] = !0, u(I, h, D, _));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(u, p) {
        i.highlightAllUnder(document, u, p);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(u, p, h) {
        var m = {
          callback: h,
          container: u,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        i.hooks.run("before-highlightall", m), m.elements = Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)), i.hooks.run("before-all-elements-highlight", m);
        for (var _ = 0, k; k = m.elements[_++]; )
          i.highlightElement(k, p === !0, m.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(u, p, h) {
        var m = i.util.getLanguage(u), _ = i.languages[m];
        i.util.setLanguage(u, m);
        var k = u.parentElement;
        k && k.nodeName.toLowerCase() === "pre" && i.util.setLanguage(k, m);
        var D = u.textContent, I = {
          element: u,
          language: m,
          grammar: _,
          code: D
        };
        function B(V) {
          I.highlightedCode = V, i.hooks.run("before-insert", I), I.element.innerHTML = I.highlightedCode, i.hooks.run("after-highlight", I), i.hooks.run("complete", I), h && h.call(I.element);
        }
        if (i.hooks.run("before-sanity-check", I), k = I.element.parentElement, k && k.nodeName.toLowerCase() === "pre" && !k.hasAttribute("tabindex") && k.setAttribute("tabindex", "0"), !I.code) {
          i.hooks.run("complete", I), h && h.call(I.element);
          return;
        }
        if (i.hooks.run("before-highlight", I), !I.grammar) {
          B(i.util.encode(I.code));
          return;
        }
        if (p && e.Worker) {
          var G = new Worker(i.filename);
          G.onmessage = function(V) {
            B(V.data);
          }, G.postMessage(JSON.stringify({
            language: I.language,
            code: I.code,
            immediateClose: !0
          }));
        } else
          B(i.highlight(I.code, I.grammar, I.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(u, p, h) {
        var m = {
          code: u,
          grammar: p,
          language: h
        };
        if (i.hooks.run("before-tokenize", m), !m.grammar)
          throw new Error('The language "' + m.language + '" has no grammar.');
        return m.tokens = i.tokenize(m.code, m.grammar), i.hooks.run("after-tokenize", m), c.stringify(i.util.encode(m.tokens), m.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(u, p) {
        var h = p.rest;
        if (h) {
          for (var m in h)
            p[m] = h[m];
          delete p.rest;
        }
        var _ = new R();
        return f(_, _.head, u), T(u, _, p, _.head, 0), o(_);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(u, p) {
          var h = i.hooks.all;
          h[u] = h[u] || [], h[u].push(p);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(u, p) {
          var h = i.hooks.all[u];
          if (!(!h || !h.length))
            for (var m = 0, _; _ = h[m++]; )
              _(p);
        }
      },
      Token: c
    };
    e.Prism = i;
    function c(u, p, h, m) {
      this.type = u, this.content = p, this.alias = h, this.length = (m || "").length | 0;
    }
    c.stringify = function u(p, h) {
      if (typeof p == "string")
        return p;
      if (Array.isArray(p)) {
        var m = "";
        return p.forEach(function(B) {
          m += u(B, h);
        }), m;
      }
      var _ = {
        type: p.type,
        content: u(p.content, h),
        tag: "span",
        classes: ["token", p.type],
        attributes: {},
        language: h
      }, k = p.alias;
      k && (Array.isArray(k) ? Array.prototype.push.apply(_.classes, k) : _.classes.push(k)), i.hooks.run("wrap", _);
      var D = "";
      for (var I in _.attributes)
        D += " " + I + '="' + (_.attributes[I] || "").replace(/"/g, "&quot;") + '"';
      return "<" + _.tag + ' class="' + _.classes.join(" ") + '"' + D + ">" + _.content + "</" + _.tag + ">";
    };
    function b(u, p, h, m) {
      u.lastIndex = p;
      var _ = u.exec(h);
      if (_ && m && _[1]) {
        var k = _[1].length;
        _.index += k, _[0] = _[0].slice(k);
      }
      return _;
    }
    function T(u, p, h, m, _, k) {
      for (var D in h)
        if (!(!h.hasOwnProperty(D) || !h[D])) {
          var I = h[D];
          I = Array.isArray(I) ? I : [I];
          for (var B = 0; B < I.length; ++B) {
            if (k && k.cause == D + "," + B)
              return;
            var G = I[B], V = G.inside, re = !!G.lookbehind, le = !!G.greedy, ge = G.alias;
            if (le && !G.pattern.global) {
              var fe = G.pattern.toString().match(/[imsuy]*$/)[0];
              G.pattern = RegExp(G.pattern.source, fe + "g");
            }
            for (var Q = G.pattern || G, M = m.next, F = _; M !== p.tail && !(k && F >= k.reach); F += M.value.length, M = M.next) {
              var j = M.value;
              if (p.length > u.length)
                return;
              if (!(j instanceof c)) {
                var K = 1, C;
                if (le) {
                  if (C = b(Q, F, u, re), !C || C.index >= u.length)
                    break;
                  var he = C.index, ue = C.index + C[0].length, W = F;
                  for (W += M.value.length; he >= W; )
                    M = M.next, W += M.value.length;
                  if (W -= M.value.length, F = W, M.value instanceof c)
                    continue;
                  for (var ce = M; ce !== p.tail && (W < ue || typeof ce.value == "string"); ce = ce.next)
                    K++, W += ce.value.length;
                  K--, j = u.slice(F, W), C.index -= F;
                } else if (C = b(Q, 0, j, re), !C)
                  continue;
                var he = C.index, be = C[0], ve = j.slice(0, he), ke = j.slice(he + be.length), me = F + j.length;
                k && me > k.reach && (k.reach = me);
                var d = M.prev;
                ve && (d = f(p, d, ve), F += ve.length), g(p, d, K);
                var E = new c(D, V ? i.tokenize(be, V) : be, ge, be);
                if (M = f(p, d, E), ke && f(p, M, ke), K > 1) {
                  var v = {
                    cause: D + "," + B,
                    reach: me
                  };
                  T(u, p, h, M.prev, F, v), k && v.reach > k.reach && (k.reach = v.reach);
                }
              }
            }
          }
        }
    }
    function R() {
      var u = { value: null, prev: null, next: null }, p = { value: null, prev: u, next: null };
      u.next = p, this.head = u, this.tail = p, this.length = 0;
    }
    function f(u, p, h) {
      var m = p.next, _ = { value: h, prev: p, next: m };
      return p.next = _, m.prev = _, u.length++, _;
    }
    function g(u, p, h) {
      for (var m = p.next, _ = 0; _ < h && m !== u.tail; _++)
        m = m.next;
      p.next = m, m.prev = p, u.length -= _;
    }
    function o(u) {
      for (var p = [], h = u.head.next; h !== u.tail; )
        p.push(h.value), h = h.next;
      return p;
    }
    if (!e.document)
      return e.addEventListener && (i.disableWorkerMessageHandler || e.addEventListener("message", function(u) {
        var p = JSON.parse(u.data), h = p.language, m = p.code, _ = p.immediateClose;
        e.postMessage(i.highlight(m, i.languages[h], h)), _ && e.close();
      }, !1)), i;
    var A = i.util.currentScript();
    A && (i.filename = A.src, A.hasAttribute("data-manual") && (i.manual = !0));
    function y() {
      i.manual || i.highlightAll();
    }
    if (!i.manual) {
      var w = document.readyState;
      w === "loading" || w === "interactive" && A && A.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
    }
    return i;
  }(t);
  a.exports && (a.exports = n), typeof je < "u" && (je.Prism = n);
})(en);
const Ke = Pe;
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(a) {
  a.type === "entity" && (a.attributes.title = a.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(t, n) {
    var e = {};
    e["language-" + n] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[n]
    }, e.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var r = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: e
      }
    };
    r["language-" + n] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[n]
    };
    var s = {};
    s[t] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return t;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: r
    }, Prism.languages.insertBefore("markup", "cdata", s);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(a, t) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + a + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [t, "language-" + t],
              inside: Prism.languages[t]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
(function(a) {
  var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  a.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + t.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + t.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: t,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, a.languages.css.atrule.inside.rest = a.languages.css;
  var n = a.languages.markup;
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(Prism);
(function(a) {
  var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n;
  a.languages.css.selector = {
    pattern: a.languages.css.selector.pattern,
    lookbehind: !0,
    inside: n = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + t.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0
          },
          "attr-value": [
            t,
            {
              pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
              lookbehind: !0
            }
          ],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: !0,
          inside: {
            number: /[\dn]+/,
            operator: /[+-]/
          }
        },
        {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: !0
        }
      ],
      combinator: />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      punctuation: /[(),]/
    }
  }, a.languages.css.atrule.inside["selector-function-argument"].inside = n, a.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: !0
    }
  });
  var e = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: !0
  }, r = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: !0
  };
  a.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    hexcode: {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    color: [
      {
        pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
        lookbehind: !0
      },
      {
        pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          unit: e,
          number: r,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/
        }
      }
    ],
    // it's important that there is no boundary assertion after the hex digits
    entity: /\\[\da-f]{1,8}/i,
    unit: e,
    number: r
  });
})(Prism);
(function(a) {
  var t = /[*&][^\s[\]{},]+/, n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, e = "(?:" + n.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + n.source + ")?)", r = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function l(i, c) {
    c = (c || "").replace(/m/g, "") + "m";
    var b = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return e;
    }).replace(/<<value>>/g, function() {
      return i;
    });
    return RegExp(b, c);
  }
  a.languages.yaml = {
    scalar: {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return e;
      })),
      lookbehind: !0,
      alias: "string"
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return e;
      }).replace(/<<key>>/g, function() {
        return "(?:" + r + "|" + s + ")";
      })),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule"
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: !0,
      alias: "important"
    },
    datetime: {
      pattern: l(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: !0,
      alias: "number"
    },
    boolean: {
      pattern: l(/false|true/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    null: {
      pattern: l(/null|~/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    string: {
      pattern: l(s),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: !0
    },
    tag: n,
    important: t,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }, a.languages.yml = a.languages.yaml;
})(Prism);
Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: Prism.languages.markdown
      }
    }
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:false|true)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[!(){}\[\]:=,]/,
  property: /\w+/
};
Prism.hooks.add("after-tokenize", function(t) {
  if (t.language !== "graphql")
    return;
  var n = t.tokens.filter(function(A) {
    return typeof A != "string" && A.type !== "comment" && A.type !== "scalar";
  }), e = 0;
  function r(A) {
    return n[e + A];
  }
  function s(A, y) {
    y = y || 0;
    for (var w = 0; w < A.length; w++) {
      var u = r(w + y);
      if (!u || u.type !== A[w])
        return !1;
    }
    return !0;
  }
  function l(A, y) {
    for (var w = 1, u = e; u < n.length; u++) {
      var p = n[u], h = p.content;
      if (p.type === "punctuation" && typeof h == "string") {
        if (A.test(h))
          w++;
        else if (y.test(h) && (w--, w === 0))
          return u;
      }
    }
    return -1;
  }
  function i(A, y) {
    var w = A.alias;
    w ? Array.isArray(w) || (A.alias = w = [w]) : A.alias = w = [], w.push(y);
  }
  for (; e < n.length; ) {
    var c = n[e++];
    if (c.type === "keyword" && c.content === "mutation") {
      var b = [];
      if (s(["definition-mutation", "punctuation"]) && r(1).content === "(") {
        e += 2;
        var T = l(/^\($/, /^\)$/);
        if (T === -1)
          continue;
        for (; e < T; e++) {
          var R = r(0);
          R.type === "variable" && (i(R, "variable-input"), b.push(R.content));
        }
        e = T + 1;
      }
      if (s(["punctuation", "property-query"]) && r(0).content === "{" && (e++, i(r(0), "property-mutation"), b.length > 0)) {
        var f = l(/^\{$/, /^\}$/);
        if (f === -1)
          continue;
        for (var g = e; g < f; g++) {
          var o = n[g];
          o.type === "variable" && b.indexOf(o.content) >= 0 && i(o, "variable-input");
        }
      }
    }
  }
});
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(a) {
  a.languages.typescript = a.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
      // see below
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), a.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  ), delete a.languages.typescript.parameter, delete a.languages.typescript["literal-property"];
  var t = a.languages.extend("typescript", {});
  delete t["class-name"], a.languages.typescript["class-name"].inside = t, a.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: t
        }
      }
    }
  }), a.languages.ts = a.languages.typescript;
})(Prism);
Prism.languages.less = Prism.languages.extend("css", {
  comment: [
    /\/\*[\s\S]*?\*\//,
    {
      pattern: /(^|[^\\])\/\/.*/,
      lookbehind: !0
    }
  ],
  atrule: {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      punctuation: /[:()]/
    }
  },
  // selectors and mixins are considered the same
  selector: {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      variable: /@+[\w-]+/
    }
  },
  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  operator: /[+\-*\/]/
});
Prism.languages.insertBefore("less", "property", {
  variable: [
    // Variable declaration (the colon must be consumed!)
    {
      pattern: /@[\w-]+\s*:/,
      inside: {
        punctuation: /:/
      }
    },
    // Variable usage
    /@@?[\w-]+/
  ],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: !0,
    alias: "function"
  }
});
(function(a) {
  a.languages.sass = a.languages.extend("css", {
    // Sass comments don't need to be closed, only indented
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: !0,
      greedy: !0
    }
  }), a.languages.insertBefore("sass", "atrule", {
    // We want to consume the whole line
    "atrule-line": {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: !0,
      inside: {
        atrule: /(?:@[\w-]+|[+=])/
      }
    }
  }), delete a.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/, n = [
    /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
    {
      pattern: /(\s)-(?=\s)/,
      lookbehind: !0
    }
  ];
  a.languages.insertBefore("sass", "property", {
    // We want to consume the whole line
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: !0,
      inside: {
        punctuation: /:/,
        variable: t,
        operator: n
      }
    },
    // We want to consume the whole line
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: !0,
      inside: {
        property: [
          /[^:\s]+(?=\s*:)/,
          {
            pattern: /(:)[^:\s]+/,
            lookbehind: !0
          }
        ],
        punctuation: /:/,
        variable: t,
        operator: n,
        important: a.languages.sass.important
      }
    }
  }), delete a.languages.sass.property, delete a.languages.sass.important, a.languages.insertBefore("sass", "punctuation", {
    selector: {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: !0,
      greedy: !0
    }
  });
})(Prism);
Prism.languages.scss = Prism.languages.extend("css", {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0
  },
  atrule: {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      rule: /@[\w-]+/
      // See rest below
    }
  },
  // url, compassified
  url: /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  selector: {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      parent: {
        pattern: /&/,
        alias: "important"
      },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
Prism.languages.insertBefore("scss", "atrule", {
  keyword: [
    /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
    {
      pattern: /( )(?:from|through)(?= )/,
      lookbehind: !0
    }
  ]
});
Prism.languages.insertBefore("scss", "important", {
  // var and interpolated vars
  variable: /\$[-\w]+|#\{\$[-\w]+\}/
});
Prism.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  placeholder: {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  statement: {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  operator: {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: !0
  }
});
Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
Prism.languages.icon = {
  comment: /#.*/,
  string: {
    pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,
    greedy: !0
  },
  number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
  "builtin-keyword": {
    pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
    alias: "variable"
  },
  directive: {
    pattern: /\$\w+/,
    alias: "builtin"
  },
  keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
  function: /\b(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
  operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
  punctuation: /[\[\](){},;]/
};
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: !0,
    greedy: !0
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:false|true)\b/,
  null: {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
Prism.languages.webmanifest = Prism.languages.json;
Prism.languages.uri = {
  scheme: {
    pattern: /^[a-z][a-z0-9+.-]*:/im,
    greedy: !0,
    inside: {
      "scheme-delimiter": /:$/
    }
  },
  fragment: {
    pattern: /#[\w\-.~!$&'()*+,;=%:@/?]*/,
    inside: {
      "fragment-delimiter": /^#/
    }
  },
  query: {
    pattern: /\?[\w\-.~!$&'()*+,;=%:@/?]*/,
    inside: {
      "query-delimiter": {
        pattern: /^\?/,
        greedy: !0
      },
      "pair-delimiter": /[&;]/,
      pair: {
        pattern: /^[^=][\s\S]*/,
        inside: {
          key: /^[^=]+/,
          value: {
            pattern: /(^=)[\s\S]+/,
            lookbehind: !0
          }
        }
      }
    }
  },
  authority: {
    pattern: RegExp(
      /^\/\//.source + /(?:[\w\-.~!$&'()*+,;=%:]*@)?/.source + ("(?:" + /\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\.[\w\-.~!$&'()*+,;=]+)\]/.source + "|" + /[\w\-.~!$&'()*+,;=%]*/.source + ")") + /(?::\d*)?/.source,
      "m"
    ),
    inside: {
      "authority-delimiter": /^\/\//,
      "user-info-segment": {
        pattern: /^[\w\-.~!$&'()*+,;=%:]*@/,
        inside: {
          "user-info-delimiter": /@$/,
          "user-info": /^[\w\-.~!$&'()*+,;=%:]+/
        }
      },
      "port-segment": {
        pattern: /:\d*$/,
        inside: {
          "port-delimiter": /^:/,
          port: /^\d+/
        }
      },
      host: {
        pattern: /[\s\S]+/,
        inside: {
          "ip-literal": {
            pattern: /^\[[\s\S]+\]$/,
            inside: {
              "ip-literal-delimiter": /^\[|\]$/,
              "ipv-future": /^v[\s\S]+/,
              "ipv6-address": /^[\s\S]+/
            }
          },
          "ipv4-address": /^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/
        }
      }
    }
  },
  path: {
    pattern: /^[\w\-.~!$&'()*+,;=%:@/]+/m,
    inside: {
      "path-separator": /\//
    }
  }
};
Prism.languages.url = Prism.languages.uri;
(function(a) {
  function t(b) {
    return RegExp("(^(?:" + b + "):[ 	]*(?![ 	]))[^]+", "i");
  }
  a.languages.http = {
    "request-line": {
      pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
      inside: {
        // HTTP Method
        method: {
          pattern: /^[A-Z]+\b/,
          alias: "property"
        },
        // Request Target e.g. http://example.com, /path/to/file
        "request-target": {
          pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
          lookbehind: !0,
          alias: "url",
          inside: a.languages.uri
        },
        // HTTP Version
        "http-version": {
          pattern: /^(\s)HTTP\/[\d.]+/,
          lookbehind: !0,
          alias: "property"
        }
      }
    },
    "response-status": {
      pattern: /^HTTP\/[\d.]+ \d+ .+/m,
      inside: {
        // HTTP Version
        "http-version": {
          pattern: /^HTTP\/[\d.]+/,
          alias: "property"
        },
        // Status Code
        "status-code": {
          pattern: /^(\s)\d+(?=\s)/,
          lookbehind: !0,
          alias: "number"
        },
        // Reason Phrase
        "reason-phrase": {
          pattern: /^(\s).+/,
          lookbehind: !0,
          alias: "string"
        }
      }
    },
    header: {
      pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
      inside: {
        "header-value": [
          {
            pattern: t(/Content-Security-Policy/.source),
            lookbehind: !0,
            alias: ["csp", "languages-csp"],
            inside: a.languages.csp
          },
          {
            pattern: t(/Public-Key-Pins(?:-Report-Only)?/.source),
            lookbehind: !0,
            alias: ["hpkp", "languages-hpkp"],
            inside: a.languages.hpkp
          },
          {
            pattern: t(/Strict-Transport-Security/.source),
            lookbehind: !0,
            alias: ["hsts", "languages-hsts"],
            inside: a.languages.hsts
          },
          {
            pattern: t(/[^:]+/.source),
            lookbehind: !0
          }
        ],
        "header-name": {
          pattern: /^[^:]+/,
          alias: "keyword"
        },
        punctuation: /^:/
      }
    }
  };
  var n = a.languages, e = {
    "application/javascript": n.javascript,
    "application/json": n.json || n.javascript,
    "application/xml": n.xml,
    "text/xml": n.xml,
    "text/html": n.html,
    "text/css": n.css,
    "text/plain": n.plain
  }, r = {
    "application/json": !0,
    "application/xml": !0
  };
  function s(b) {
    var T = b.replace(/^[a-z]+\//, ""), R = "\\w+/(?:[\\w.-]+\\+)+" + T + "(?![+\\w.-])";
    return "(?:" + b + "|" + R + ")";
  }
  var l;
  for (var i in e)
    if (e[i]) {
      l = l || {};
      var c = r[i] ? s(i) : i;
      l[i.replace(/\//g, "-")] = {
        pattern: RegExp(
          "(" + /content-type:\s*/.source + c + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ")" + // This is a little interesting:
          // The HTTP format spec required 1 empty line before the body to make everything unambiguous.
          // However, when writing code by hand (e.g. to display on a website) people can forget about this,
          // so we want to be liberal here. We will allow the empty line to be omitted if the first line of
          // the body does not start with a [\w-] character (as headers do).
          /[^ \t\w-][\s\S]*/.source,
          "i"
        ),
        lookbehind: !0,
        inside: e[i]
      };
    }
  l && a.languages.insertBefore("http", "header", l);
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(a) {
  var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return t.source;
  });
  a.languages.cpp = a.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return t.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: t,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), a.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return n;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), a.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: a.languages.cpp
        }
      }
    }
  }), a.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), a.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: a.languages.extend("cpp", {})
    }
  }), a.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, a.languages.cpp["base-clause"]);
})(Prism);
Prism.languages.cmake = {
  comment: /#.*/,
  string: {
    pattern: /"(?:[^\\"]|\\.)*"/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,
        inside: {
          punctuation: /\$\{|\}/,
          variable: /\w+/
        }
      }
    }
  },
  variable: /\b(?:CMAKE_\w+|\w+_(?:(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT|VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_NAME|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE))\b/,
  property: /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
  keyword: /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
  boolean: /\b(?:FALSE|OFF|ON|TRUE)\b/,
  namespace: /\b(?:INTERFACE|PRIVATE|PROPERTIES|PUBLIC|SHARED|STATIC|TARGET_OBJECTS)\b/,
  operator: /\b(?:AND|DEFINED|EQUAL|GREATER|LESS|MATCHES|NOT|OR|STREQUAL|STRGREATER|STRLESS|VERSION_EQUAL|VERSION_GREATER|VERSION_LESS)\b/,
  inserted: {
    pattern: /\b\w+::\w+\b/,
    alias: "class-name"
  },
  number: /\b\d+(?:\.\d+)*\b/,
  function: /\b[a-z_]\w*(?=\s*\()\b/i,
  punctuation: /[()>}]|\$[<{]/
};
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
(function(a) {
  for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++)
    t = t.replace(/<self>/g, function() {
      return t;
    });
  t = t.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), a.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + t),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
        // see below
      }
    },
    // Closure params should not be confused with bitwise OR |
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
        // see below
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [
      {
        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
        lookbehind: !0,
        alias: "namespace"
      },
      {
        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
        lookbehind: !0,
        alias: "namespace",
        inside: {
          punctuation: /::/
        }
      }
    ],
    keyword: [
      // https://github.com/rust-lang/reference/blob/master/src/keywords.md
      /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      // primitives and str
      // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
      /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
    ],
    // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
    // and Rust's naming conventions recommend snake_case anyway.
    // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, a.languages.rust["closure-params"].inside.rest = a.languages.rust, a.languages.rust.attribute.inside.string = a.languages.rust.string;
})(Prism);
Prism.languages.go = Prism.languages.extend("clike", {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [
    // binary and octal integers
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    // hexadecimal integers and floats
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    // decimal integers and floats
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
Prism.languages.insertBefore("go", "string", {
  char: {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: !0
  }
});
delete Prism.languages.go["class-name"];
(function(a) {
  function t(n, e) {
    return "___" + n.toUpperCase() + e + "___";
  }
  Object.defineProperties(a.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function(n, e, r, s) {
        if (n.language === e) {
          var l = n.tokenStack = [];
          n.code = n.code.replace(r, function(i) {
            if (typeof s == "function" && !s(i))
              return i;
            for (var c = l.length, b; n.code.indexOf(b = t(e, c)) !== -1; )
              ++c;
            return l[c] = i, b;
          }), n.grammar = a.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function(n, e) {
        if (n.language !== e || !n.tokenStack)
          return;
        n.grammar = a.languages[e];
        var r = 0, s = Object.keys(n.tokenStack);
        function l(i) {
          for (var c = 0; c < i.length && !(r >= s.length); c++) {
            var b = i[c];
            if (typeof b == "string" || b.content && typeof b.content == "string") {
              var T = s[r], R = n.tokenStack[T], f = typeof b == "string" ? b : b.content, g = t(e, T), o = f.indexOf(g);
              if (o > -1) {
                ++r;
                var A = f.substring(0, o), y = new a.Token(e, a.tokenize(R, n.grammar), "language-" + e, R), w = f.substring(o + g.length), u = [];
                A && u.push.apply(u, l([A])), u.push(y), w && u.push.apply(u, l([w])), typeof b == "string" ? i.splice.apply(i, [c, 1].concat(u)) : b.content = u;
              }
            } else
              b.content && l(b.content);
          }
          return i;
        }
        l(n.tokens);
      }
    }
  });
})(Prism);
(function(a) {
  var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, n = [
    {
      pattern: /\b(?:false|true)\b/i,
      alias: "boolean"
    },
    {
      pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
      greedy: !0,
      lookbehind: !0
    },
    {
      pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
      greedy: !0,
      lookbehind: !0
    },
    /\b(?:null)\b/i,
    /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
  ], e = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, r = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, s = /[{}\[\](),:;]/;
  a.languages.php = {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    },
    comment: t,
    variable: /\$+(?:\w+\b|(?=\{))/,
    package: {
      pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    "class-name-definition": {
      pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: !0,
      alias: "class-name"
    },
    "function-definition": {
      pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
      lookbehind: !0,
      alias: "function"
    },
    keyword: [
      {
        pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
        alias: "type-casting",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
        alias: "type-declaration",
        greedy: !0
      },
      {
        pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
        alias: "type-declaration",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b(?:parent|self|static)(?=\s*::)/i,
        alias: "static-context",
        greedy: !0
      },
      {
        // yield from
        pattern: /(\byield\s+)from\b/i,
        lookbehind: !0
      },
      // `class` is always a keyword unlike other keywords
      /\bclass\b/i,
      {
        // https://www.php.net/manual/en/reserved.keywords.php
        //
        // keywords cannot be preceded by "->"
        // the complex lookbehind means `(?<!(?:->|::)\s*)`
        pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
        lookbehind: !0
      }
    ],
    "argument-name": {
      pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
      lookbehind: !0
    },
    "class-name": [
      {
        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
        greedy: !0
      },
      {
        pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: "class-name-fully-qualified",
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*\$)/i,
        alias: "type-declaration",
        greedy: !0
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-declaration"],
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /\b[a-z_]\w*(?=\s*::)/i,
        alias: "static-context",
        greedy: !0
      },
      {
        pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
        alias: ["class-name-fully-qualified", "static-context"],
        greedy: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
        alias: "type-hint",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
        alias: ["class-name-fully-qualified", "type-hint"],
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
        alias: "return-type",
        greedy: !0,
        lookbehind: !0
      },
      {
        pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        alias: ["class-name-fully-qualified", "return-type"],
        greedy: !0,
        lookbehind: !0,
        inside: {
          punctuation: /\\/
        }
      }
    ],
    constant: n,
    function: {
      pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    },
    property: {
      pattern: /(->\s*)\w+/,
      lookbehind: !0
    },
    number: e,
    operator: r,
    punctuation: s
  };
  var l = {
    pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
    lookbehind: !0,
    inside: a.languages.php
  }, i = [
    {
      pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
      alias: "nowdoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<'?|[';]$/
          }
        }
      }
    },
    {
      pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<"?|[";]$/
          }
        },
        interpolation: l
      }
    },
    {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      alias: "backtick-quoted-string",
      greedy: !0
    },
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      alias: "single-quoted-string",
      greedy: !0
    },
    {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      alias: "double-quoted-string",
      greedy: !0,
      inside: {
        interpolation: l
      }
    }
  ];
  a.languages.insertBefore("php", "variable", {
    string: i,
    attribute: {
      pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: !0,
      inside: {
        "attribute-content": {
          pattern: /^(#\[)[\s\S]+(?=\]$)/,
          lookbehind: !0,
          // inside can appear subset of php
          inside: {
            comment: t,
            string: i,
            "attribute-class-name": [
              {
                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                alias: "class-name",
                greedy: !0,
                lookbehind: !0
              },
              {
                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                alias: [
                  "class-name",
                  "class-name-fully-qualified"
                ],
                greedy: !0,
                lookbehind: !0,
                inside: {
                  punctuation: /\\/
                }
              }
            ],
            constant: n,
            number: e,
            operator: r,
            punctuation: s
          }
        },
        delimiter: {
          pattern: /^#\[|\]$/,
          alias: "punctuation"
        }
      }
    }
  }), a.hooks.add("before-tokenize", function(c) {
    if (/<\?/.test(c.code)) {
      var b = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
      a.languages["markup-templating"].buildPlaceholders(c, "php", b);
    }
  }), a.hooks.add("after-tokenize", function(c) {
    a.languages["markup-templating"].tokenizePlaceholders(c, "php");
  });
})(Prism);
(function(a) {
  var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, e = {
    pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  a.languages.java = a.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      e,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: e.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: e.inside
      }
    ],
    keyword: t,
    function: [
      a.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), a.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), a.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": e,
        keyword: t,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: e.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: e.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return t.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(a) {
  var t = a.languages.javadoclike = {
    parameter: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
      lookbehind: !0
    },
    keyword: {
      // keywords are the first word in a line preceded be an `@` or surrounded by curly braces.
      // @word, {@word}
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: !0
    },
    punctuation: /[{}]/
  };
  function n(r, s) {
    var l = "doc-comment", i = a.languages[r];
    if (i) {
      var c = i[l];
      if (!c) {
        var b = {};
        b[l] = {
          pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          alias: "comment"
        }, i = a.languages.insertBefore(r, "comment", b), c = i[l];
      }
      if (c instanceof RegExp && (c = i[l] = { pattern: c }), Array.isArray(c))
        for (var T = 0, R = c.length; T < R; T++)
          c[T] instanceof RegExp && (c[T] = { pattern: c[T] }), s(c[T]);
      else
        s(c);
    }
  }
  function e(r, s) {
    typeof r == "string" && (r = [r]), r.forEach(function(l) {
      n(l, function(i) {
        i.inside || (i.inside = {}), i.inside.rest = s;
      });
    });
  }
  Object.defineProperty(t, "addSupport", { value: e }), t.addSupport(["java", "javascript", "php"], t);
})(Prism);
(function(a) {
  var t = /(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;
  a.languages.phpdoc = a.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + t + "\\s+)?)\\$\\w+"),
      lookbehind: !0
    }
  }), a.languages.insertBefore("phpdoc", "keyword", {
    "class-name": [
      {
        pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + t),
        lookbehind: !0,
        inside: {
          keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
          punctuation: /[|\\[\]()]/
        }
      }
    ]
  }), a.languages.javadoclike.addSupport("php", a.languages.phpdoc);
})(Prism);
(function(a) {
  var t = /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/.source;
  a.languages.perl = {
    comment: [
      {
        // POD
        pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\$])#.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    // TODO Could be nice to handle Heredoc too.
    string: [
      {
        pattern: RegExp(
          /\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
            // q/.../
            /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
            // q a...a
            // eslint-disable-next-line regexp/strict
            /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
            // q(...)
            // q{...}
            // q[...]
            // q<...>
            t
          ].join("|") + ")"
        ),
        greedy: !0
      },
      // "...", `...`
      {
        pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: !0
      },
      // '...'
      // FIXME Multi-line single-quoted strings are not supported as they would break variables containing '
      {
        pattern: /'(?:[^'\\\r\n]|\\.)*'/,
        greedy: !0
      }
    ],
    regex: [
      {
        pattern: RegExp(
          /\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
            // m/.../
            /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
            // m a...a
            // eslint-disable-next-line regexp/strict
            /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
            // m(...)
            // m{...}
            // m[...]
            // m<...>
            t
          ].join("|") + ")" + /[msixpodualngc]*/.source
        ),
        greedy: !0
      },
      // The lookbehinds prevent -s from breaking
      {
        pattern: RegExp(
          /(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source + "(?:" + [
            // s/.../.../
            // eslint-disable-next-line regexp/strict
            /([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
            // s a...a...a
            // eslint-disable-next-line regexp/strict
            /([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/.source,
            // s(...)(...)
            // s{...}{...}
            // s[...][...]
            // s<...><...>
            // s(...)[...]
            t + /\s*/.source + t
          ].join("|") + ")" + /[msixpodualngcer]*/.source
        ),
        lookbehind: !0,
        greedy: !0
      },
      // /.../
      // The look-ahead tries to prevent two divisions on
      // the same line from being highlighted as regex.
      // This does not support multi-line regex.
      {
        pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
        greedy: !0
      }
    ],
    // FIXME Not sure about the handling of ::, ', and #
    variable: [
      // ${^POSTMATCH}
      /[&*$@%]\{\^[A-Z]+\}/,
      // $^V
      /[&*$@%]\^[A-Z_]/,
      // ${...}
      /[&*$@%]#?(?=\{)/,
      // $foo
      /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,
      // $1
      /[&*$@%]\d+/,
      // $_, @_, %!
      // The negative lookahead prevents from breaking the %= operator
      /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
    ],
    filehandle: {
      // <>, <FOO>, _
      pattern: /<(?![<=])\S*?>|\b_\b/,
      alias: "symbol"
    },
    "v-string": {
      // v1.2, 1.2.3
      pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
      alias: "string"
    },
    function: {
      pattern: /(\bsub[ \t]+)\w+/,
      lookbehind: !0
    },
    keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
    operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
    punctuation: /[{}[\];(),:]/
  };
})(Prism);
Prism.languages.scala = Prism.languages.extend("java", {
  "triple-quoted-string": {
    pattern: /"""[\s\S]*?"""/,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  keyword: /<-|=>|\b(?:abstract|case|catch|class|def|derives|do|else|enum|extends|extension|final|finally|for|forSome|given|if|implicit|import|infix|inline|lazy|match|new|null|object|opaque|open|override|package|private|protected|return|sealed|self|super|this|throw|trait|transparent|try|type|using|val|var|while|with|yield)\b/,
  number: /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,
  builtin: /\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,
  symbol: /'[^\d\s\\]\w*/
});
Prism.languages.insertBefore("scala", "triple-quoted-string", {
  "string-interpolation": {
    pattern: /\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,
    greedy: !0,
    inside: {
      id: {
        pattern: /^\w+/,
        greedy: !0,
        alias: "function"
      },
      escape: {
        pattern: /\\\$"|\$[$"]/,
        greedy: !0,
        alias: "symbol"
      },
      interpolation: {
        pattern: /\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
        greedy: !0,
        inside: {
          punctuation: /^\$\{?|\}$/,
          expression: {
            pattern: /[\s\S]+/,
            inside: Prism.languages.scala
          }
        }
      },
      string: /[\s\S]+/
    }
  }
});
delete Prism.languages.scala["class-name"];
delete Prism.languages.scala.function;
delete Prism.languages.scala.constant;
(function(a) {
  var t = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m, n = /#\s*\w+(?:\s*\([^()]*\))?/.source, e = /(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g, function() {
    return n;
  });
  a.languages.javadoc = a.languages.extend("javadoclike", {}), a.languages.insertBefore("javadoc", "keyword", {
    reference: {
      pattern: RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source + "(?:" + e + ")"),
      lookbehind: !0,
      inside: {
        function: {
          pattern: /(#\s*)\w+(?=\s*\()/,
          lookbehind: !0
        },
        field: {
          pattern: /(#\s*)\w+/,
          lookbehind: !0
        },
        namespace: {
          pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
          inside: {
            punctuation: /\./
          }
        },
        "class-name": /\b[A-Z]\w*/,
        keyword: a.languages.java.keyword,
        punctuation: /[#()[\],.]/
      }
    },
    "class-name": {
      // @param <T> the first generic type parameter
      pattern: /(@param\s+)<[A-Z]\w*>/,
      lookbehind: !0,
      inside: {
        punctuation: /[.<>]/
      }
    },
    "code-section": [
      {
        pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
        lookbehind: !0,
        inside: {
          code: {
            // there can't be any HTML inside of {@code} tags
            pattern: t,
            lookbehind: !0,
            inside: a.languages.java,
            alias: "language-java"
          }
        }
      },
      {
        pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
        lookbehind: !0,
        inside: {
          line: {
            pattern: t,
            lookbehind: !0,
            inside: {
              // highlight HTML tags and entities
              tag: a.languages.markup.tag,
              entity: a.languages.markup.entity,
              code: {
                // everything else is Java code
                pattern: /.+/,
                inside: a.languages.java,
                alias: "language-java"
              }
            }
          }
        }
      }
    ],
    tag: a.languages.markup.tag,
    entity: a.languages.markup.entity
  }), a.languages.javadoclike.addSupport("java", a.languages.javadoc);
})(Prism);
(function(a) {
  var t = {
    pattern: /((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,
    lookbehind: !0,
    inside: {
      "interpolation-punctuation": {
        pattern: /^\$\{?|\}$/,
        alias: "punctuation"
      },
      expression: {
        pattern: /[\s\S]+/,
        inside: null
        // see below
      }
    }
  };
  a.languages.groovy = a.languages.extend("clike", {
    string: {
      // https://groovy-lang.org/syntax.html#_dollar_slashy_string
      pattern: /'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,
      greedy: !0
    },
    keyword: /\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
    number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,
    operator: {
      pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
      lookbehind: !0
    },
    punctuation: /\.+|[{}[\];(),:$]/
  }), a.languages.insertBefore("groovy", "string", {
    shebang: {
      pattern: /#!.+/,
      alias: "comment",
      greedy: !0
    },
    "interpolation-string": {
      // TODO: Slash strings (e.g. /foo/) can contain line breaks but this will cause a lot of trouble with
      // simple division (see JS regex), so find a fix maybe?
      pattern: /"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,
      greedy: !0,
      inside: {
        interpolation: t,
        string: /[\s\S]+/
      }
    }
  }), a.languages.insertBefore("groovy", "punctuation", {
    "spock-block": /\b(?:and|cleanup|expect|given|setup|then|when|where):/
  }), a.languages.insertBefore("groovy", "function", {
    annotation: {
      pattern: /(^|[^.])@\w+/,
      lookbehind: !0,
      alias: "punctuation"
    }
  }), t.inside.expression.inside = a.languages.groovy;
})(Prism);
(function(a) {
  a.languages.kotlin = a.languages.extend("clike", {
    keyword: {
      // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
      pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
      lookbehind: !0
    },
    function: [
      {
        pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
        greedy: !0
      },
      {
        pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
    operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
  }), delete a.languages.kotlin["class-name"];
  var t = {
    "interpolation-punctuation": {
      pattern: /^\$\{?|\}$/,
      alias: "punctuation"
    },
    expression: {
      pattern: /[\s\S]+/,
      inside: a.languages.kotlin
    }
  };
  a.languages.insertBefore("kotlin", "string", {
    // https://kotlinlang.org/spec/expressions.html#string-interpolation-expressions
    "string-literal": [
      {
        pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
        alias: "multiline",
        inside: {
          interpolation: {
            pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
            inside: t
          },
          string: /[\s\S]+/
        }
      },
      {
        pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
        alias: "singleline",
        inside: {
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
            lookbehind: !0,
            inside: t
          },
          string: /[\s\S]+/
        }
      }
    ],
    char: {
      // https://kotlinlang.org/spec/expressions.html#character-literals
      pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
      greedy: !0
    }
  }), delete a.languages.kotlin.string, a.languages.insertBefore("kotlin", "keyword", {
    annotation: {
      pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
      alias: "builtin"
    }
  }), a.languages.insertBefore("kotlin", "function", {
    label: {
      pattern: /\b\w+@|@\w+\b/,
      alias: "symbol"
    }
  }), a.languages.kt = a.languages.kotlin, a.languages.kts = a.languages.kotlin;
})(Prism);
(function(a) {
  var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = {
    "equation-command": {
      pattern: t,
      alias: "regex"
    }
  };
  a.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: n,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: n,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: t,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex;
})(Prism);
Prism.languages.matlab = {
  comment: [
    /%\{[\s\S]*?\}%/,
    /%.+/
  ],
  string: {
    pattern: /\B'(?:''|[^'\r\n])*'/,
    greedy: !0
  },
  // FIXME We could handle imaginary numbers as a whole
  number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
  keyword: /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
  function: /\b(?!\d)\w+(?=\s*\()/,
  operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
  punctuation: /\.{3}|[.,;\[\](){}!]/
};
(function(a) {
  var t = [
    // query and projection
    "$eq",
    "$gt",
    "$gte",
    "$in",
    "$lt",
    "$lte",
    "$ne",
    "$nin",
    "$and",
    "$not",
    "$nor",
    "$or",
    "$exists",
    "$type",
    "$expr",
    "$jsonSchema",
    "$mod",
    "$regex",
    "$text",
    "$where",
    "$geoIntersects",
    "$geoWithin",
    "$near",
    "$nearSphere",
    "$all",
    "$elemMatch",
    "$size",
    "$bitsAllClear",
    "$bitsAllSet",
    "$bitsAnyClear",
    "$bitsAnySet",
    "$comment",
    "$elemMatch",
    "$meta",
    "$slice",
    // update
    "$currentDate",
    "$inc",
    "$min",
    "$max",
    "$mul",
    "$rename",
    "$set",
    "$setOnInsert",
    "$unset",
    "$addToSet",
    "$pop",
    "$pull",
    "$push",
    "$pullAll",
    "$each",
    "$position",
    "$slice",
    "$sort",
    "$bit",
    // aggregation pipeline stages
    "$addFields",
    "$bucket",
    "$bucketAuto",
    "$collStats",
    "$count",
    "$currentOp",
    "$facet",
    "$geoNear",
    "$graphLookup",
    "$group",
    "$indexStats",
    "$limit",
    "$listLocalSessions",
    "$listSessions",
    "$lookup",
    "$match",
    "$merge",
    "$out",
    "$planCacheStats",
    "$project",
    "$redact",
    "$replaceRoot",
    "$replaceWith",
    "$sample",
    "$set",
    "$skip",
    "$sort",
    "$sortByCount",
    "$unionWith",
    "$unset",
    "$unwind",
    "$setWindowFields",
    // aggregation pipeline operators
    "$abs",
    "$accumulator",
    "$acos",
    "$acosh",
    "$add",
    "$addToSet",
    "$allElementsTrue",
    "$and",
    "$anyElementTrue",
    "$arrayElemAt",
    "$arrayToObject",
    "$asin",
    "$asinh",
    "$atan",
    "$atan2",
    "$atanh",
    "$avg",
    "$binarySize",
    "$bsonSize",
    "$ceil",
    "$cmp",
    "$concat",
    "$concatArrays",
    "$cond",
    "$convert",
    "$cos",
    "$dateFromParts",
    "$dateToParts",
    "$dateFromString",
    "$dateToString",
    "$dayOfMonth",
    "$dayOfWeek",
    "$dayOfYear",
    "$degreesToRadians",
    "$divide",
    "$eq",
    "$exp",
    "$filter",
    "$first",
    "$floor",
    "$function",
    "$gt",
    "$gte",
    "$hour",
    "$ifNull",
    "$in",
    "$indexOfArray",
    "$indexOfBytes",
    "$indexOfCP",
    "$isArray",
    "$isNumber",
    "$isoDayOfWeek",
    "$isoWeek",
    "$isoWeekYear",
    "$last",
    "$last",
    "$let",
    "$literal",
    "$ln",
    "$log",
    "$log10",
    "$lt",
    "$lte",
    "$ltrim",
    "$map",
    "$max",
    "$mergeObjects",
    "$meta",
    "$min",
    "$millisecond",
    "$minute",
    "$mod",
    "$month",
    "$multiply",
    "$ne",
    "$not",
    "$objectToArray",
    "$or",
    "$pow",
    "$push",
    "$radiansToDegrees",
    "$range",
    "$reduce",
    "$regexFind",
    "$regexFindAll",
    "$regexMatch",
    "$replaceOne",
    "$replaceAll",
    "$reverseArray",
    "$round",
    "$rtrim",
    "$second",
    "$setDifference",
    "$setEquals",
    "$setIntersection",
    "$setIsSubset",
    "$setUnion",
    "$size",
    "$sin",
    "$slice",
    "$split",
    "$sqrt",
    "$stdDevPop",
    "$stdDevSamp",
    "$strcasecmp",
    "$strLenBytes",
    "$strLenCP",
    "$substr",
    "$substrBytes",
    "$substrCP",
    "$subtract",
    "$sum",
    "$switch",
    "$tan",
    "$toBool",
    "$toDate",
    "$toDecimal",
    "$toDouble",
    "$toInt",
    "$toLong",
    "$toObjectId",
    "$toString",
    "$toLower",
    "$toUpper",
    "$trim",
    "$trunc",
    "$type",
    "$week",
    "$year",
    "$zip",
    "$count",
    "$dateAdd",
    "$dateDiff",
    "$dateSubtract",
    "$dateTrunc",
    "$getField",
    "$rand",
    "$sampleRate",
    "$setField",
    "$unsetField",
    // aggregation pipeline query modifiers
    "$comment",
    "$explain",
    "$hint",
    "$max",
    "$maxTimeMS",
    "$min",
    "$orderby",
    "$query",
    "$returnKey",
    "$showDiskLoc",
    "$natural"
  ], n = [
    "ObjectId",
    "Code",
    "BinData",
    "DBRef",
    "Timestamp",
    "NumberLong",
    "NumberDecimal",
    "MaxKey",
    "MinKey",
    "RegExp",
    "ISODate",
    "UUID"
  ];
  t = t.map(function(r) {
    return r.replace("$", "\\$");
  });
  var e = "(?:" + t.join("|") + ")\\b";
  a.languages.mongodb = a.languages.extend("javascript", {}), a.languages.insertBefore("mongodb", "string", {
    property: {
      pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
      greedy: !0,
      inside: {
        keyword: RegExp(`^(['"])?` + e + "(?:\\1)?$")
      }
    }
  }), a.languages.mongodb.string.inside = {
    url: {
      // url pattern
      pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
      greedy: !0
    },
    entity: {
      // ipv4
      pattern: /\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,
      greedy: !0
    }
  }, a.languages.insertBefore("mongodb", "constant", {
    builtin: {
      pattern: RegExp("\\b(?:" + n.join("|") + ")\\b"),
      alias: "keyword"
    }
  });
})(Prism);
Prism.languages.erlang = {
  comment: /%.+/,
  string: {
    pattern: /"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0
  },
  "quoted-function": {
    pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
    alias: "function"
  },
  "quoted-atom": {
    pattern: /'(?:\\.|[^\\'\r\n])+'/,
    alias: "atom"
  },
  boolean: /\b(?:false|true)\b/,
  keyword: /\b(?:after|begin|case|catch|end|fun|if|of|receive|try|when)\b/,
  number: [
    /\$\\?./,
    /\b\d+#[a-z0-9]+/i,
    /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i
  ],
  function: /\b[a-z][\w@]*(?=\()/,
  variable: {
    // Look-behind is used to prevent wrong highlighting of atoms containing "@"
    pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
    lookbehind: !0
  },
  operator: [
    /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,
    {
      // We don't want to match <<
      pattern: /(^|[^<])<(?!<)/,
      lookbehind: !0
    },
    {
      // We don't want to match >>
      pattern: /(^|[^>])>(?!>)/,
      lookbehind: !0
    }
  ],
  atom: /\b[a-z][\w@]*/,
  punctuation: /[()[\]{}:;,.#|]|<<|>>/
};
Prism.languages.lua = {
  comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
  // \z may be used to skip the following space
  string: {
    pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
    greedy: !0
  },
  number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
  function: /(?!\d)\w+(?=\s*(?:[({]))/,
  operator: [
    /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
    {
      // Match ".." but don't break "..."
      pattern: /(^|[^.])\.\.(?!\.)/,
      lookbehind: !0
    }
  ],
  punctuation: /[\[\](){},;]|\.+|:+/
};
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(a) {
  a.languages.django = {
    comment: /^\{#[\s\S]*?#\}$/,
    tag: {
      pattern: /(^\{%[+-]?\s*)\w+/,
      lookbehind: !0,
      alias: "keyword"
    },
    delimiter: {
      pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/,
      alias: "punctuation"
    },
    string: {
      pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    filter: {
      pattern: /(\|)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    test: {
      pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    function: /\b[a-z_]\w+(?=\s*\()/i,
    keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    number: /\b\d+(?:\.\d+)?\b/,
    boolean: /[Ff]alse|[Nn]one|[Tt]rue/,
    variable: /\b\w+\b/,
    punctuation: /[{}[\](),.:;]/
  };
  var t = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g, n = a.languages["markup-templating"];
  a.hooks.add("before-tokenize", function(e) {
    n.buildPlaceholders(e, "django", t);
  }), a.hooks.add("after-tokenize", function(e) {
    n.tokenizePlaceholders(e, "django");
  }), a.languages.jinja2 = a.languages.django, a.hooks.add("before-tokenize", function(e) {
    n.buildPlaceholders(e, "jinja2", t);
  }), a.hooks.add("after-tokenize", function(e) {
    n.tokenizePlaceholders(e, "jinja2");
  });
})(Prism);
(function(a) {
  function t(F, j) {
    return F.replace(/<<(\d+)>>/g, function(K, C) {
      return "(?:" + j[+C] + ")";
    });
  }
  function n(F, j, K) {
    return RegExp(t(F, j), K || "");
  }
  function e(F, j) {
    for (var K = 0; K < j; K++)
      F = F.replace(/<<self>>/g, function() {
        return "(?:" + F + ")";
      });
    return F.replace(/<<self>>/g, "[^\\s\\S]");
  }
  var r = {
    // keywords which represent a return or variable type
    type: "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
    // keywords which are used to declare a type
    typeDeclaration: "class enum interface record struct",
    // contextual keywords
    // ("var" and "dynamic" are missing because they are used like types)
    contextual: "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
    // all other keywords
    other: "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"
  };
  function s(F) {
    return "\\b(?:" + F.trim().replace(/ /g, "|") + ")\\b";
  }
  var l = s(r.typeDeclaration), i = RegExp(s(r.type + " " + r.typeDeclaration + " " + r.contextual + " " + r.other)), c = s(r.typeDeclaration + " " + r.contextual + " " + r.other), b = s(r.type + " " + r.typeDeclaration + " " + r.other), T = e(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2), R = e(/\((?:[^()]|<<self>>)*\)/.source, 2), f = /@?\b[A-Za-z_]\w*\b/.source, g = t(/<<0>>(?:\s*<<1>>)?/.source, [f, T]), o = t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [c, g]), A = /\[\s*(?:,\s*)*\]/.source, y = t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [o, A]), w = t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [T, R, A]), u = t(/\(<<0>>+(?:,<<0>>+)+\)/.source, [w]), p = t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [u, o, A]), h = {
    keyword: i,
    punctuation: /[<>()?,.:[\]]/
  }, m = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source, _ = /"(?:\\.|[^\\"\r\n])*"/.source, k = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
  a.languages.csharp = a.languages.extend("clike", {
    string: [
      {
        pattern: n(/(^|[^$\\])<<0>>/.source, [k]),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: n(/(^|[^@$\\])<<0>>/.source, [_]),
        lookbehind: !0,
        greedy: !0
      }
    ],
    "class-name": [
      {
        // Using static
        // using static System.Math;
        pattern: n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [o]),
        lookbehind: !0,
        inside: h
      },
      {
        // Using alias (type)
        // using Project = PC.MyCompany.Project;
        pattern: n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [f, p]),
        lookbehind: !0,
        inside: h
      },
      {
        // Using alias (alias)
        // using Project = PC.MyCompany.Project;
        pattern: n(/(\busing\s+)<<0>>(?=\s*=)/.source, [f]),
        lookbehind: !0
      },
      {
        // Type declarations
        // class Foo<A, B>
        // interface Foo<out A, B>
        pattern: n(/(\b<<0>>\s+)<<1>>/.source, [l, g]),
        lookbehind: !0,
        inside: h
      },
      {
        // Single catch exception declaration
        // catch(Foo)
        // (things like catch(Foo e) is covered by variable declaration)
        pattern: n(/(\bcatch\s*\(\s*)<<0>>/.source, [o]),
        lookbehind: !0,
        inside: h
      },
      {
        // Name of the type parameter of generic constraints
        // where Foo : class
        pattern: n(/(\bwhere\s+)<<0>>/.source, [f]),
        lookbehind: !0
      },
      {
        // Casts and checks via as and is.
        // as Foo<A>, is Bar<B>
        // (things like if(a is Foo b) is covered by variable declaration)
        pattern: n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [y]),
        lookbehind: !0,
        inside: h
      },
      {
        // Variable, field and parameter declaration
        // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
        pattern: n(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [p, b, f]),
        inside: h
      }
    ],
    keyword: i,
    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
    number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/
  }), a.languages.insertBefore("csharp", "number", {
    range: {
      pattern: /\.\./,
      alias: "operator"
    }
  }), a.languages.insertBefore("csharp", "punctuation", {
    "named-parameter": {
      pattern: n(/([(,]\s*)<<0>>(?=\s*:)/.source, [f]),
      lookbehind: !0,
      alias: "punctuation"
    }
  }), a.languages.insertBefore("csharp", "class-name", {
    namespace: {
      // namespace Foo.Bar {}
      // using Foo.Bar;
      pattern: n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [f]),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    },
    "type-expression": {
      // default(Foo), typeof(Foo<Bar>), sizeof(int)
      pattern: n(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [R]),
      lookbehind: !0,
      alias: "class-name",
      inside: h
    },
    "return-type": {
      // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
      // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
      // int Foo => 0; int Foo { get; set } = 0;
      pattern: n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [p, o]),
      inside: h,
      alias: "class-name"
    },
    "constructor-invocation": {
      // new List<Foo<Bar[]>> { }
      pattern: n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [p]),
      lookbehind: !0,
      inside: h,
      alias: "class-name"
    },
    /*'explicit-implementation': {
    	// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
    	pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
    	inside: classNameInside,
    	alias: 'class-name'
    },*/
    "generic-method": {
      // foo<Bar>()
      pattern: n(/<<0>>\s*<<1>>(?=\s*\()/.source, [f, T]),
      inside: {
        function: n(/^<<0>>/.source, [f]),
        generic: {
          pattern: RegExp(T),
          alias: "class-name",
          inside: h
        }
      }
    },
    "type-list": {
      // The list of types inherited or of generic constraints
      // class Foo<F> : Bar, IList<FooBar>
      // where F : Bar, IList<int>
      pattern: n(
        /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
        [l, g, f, p, i.source, R, /\bnew\s*\(\s*\)/.source]
      ),
      lookbehind: !0,
      inside: {
        "record-arguments": {
          pattern: n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [g, R]),
          lookbehind: !0,
          greedy: !0,
          inside: a.languages.csharp
        },
        keyword: i,
        "class-name": {
          pattern: RegExp(p),
          greedy: !0,
          inside: h
        },
        punctuation: /[,()]/
      }
    },
    preprocessor: {
      pattern: /(^[\t ]*)#.*/m,
      lookbehind: !0,
      alias: "property",
      inside: {
        // highlight preprocessor directives as keywords
        directive: {
          pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
          lookbehind: !0,
          alias: "keyword"
        }
      }
    }
  });
  var D = _ + "|" + m, I = t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [D]), B = e(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [I]), 2), G = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source, V = t(/<<0>>(?:\s*\(<<1>>*\))?/.source, [o, B]);
  a.languages.insertBefore("csharp", "class-name", {
    attribute: {
      // Attributes
      // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
      pattern: n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [G, V]),
      lookbehind: !0,
      greedy: !0,
      inside: {
        target: {
          pattern: n(/^<<0>>(?=\s*:)/.source, [G]),
          alias: "keyword"
        },
        "attribute-arguments": {
          pattern: n(/\(<<0>>*\)/.source, [B]),
          inside: a.languages.csharp
        },
        "class-name": {
          pattern: RegExp(o),
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /[:,]/
      }
    }
  });
  var re = /:[^}\r\n]+/.source, le = e(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [I]), 2), ge = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [le, re]), fe = e(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [D]), 2), Q = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [fe, re]);
  function M(F, j) {
    return {
      interpolation: {
        pattern: n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [F]),
        lookbehind: !0,
        inside: {
          "format-string": {
            pattern: n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [j, re]),
            lookbehind: !0,
            inside: {
              punctuation: /^:/
            }
          },
          punctuation: /^\{|\}$/,
          expression: {
            pattern: /[\s\S]+/,
            alias: "language-csharp",
            inside: a.languages.csharp
          }
        }
      },
      string: /[\s\S]+/
    };
  }
  a.languages.insertBefore("csharp", "string", {
    "interpolation-string": [
      {
        pattern: n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [ge]),
        lookbehind: !0,
        greedy: !0,
        inside: M(ge, le)
      },
      {
        pattern: n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [Q]),
        lookbehind: !0,
        greedy: !0,
        inside: M(Q, fe)
      }
    ],
    char: {
      pattern: RegExp(m),
      greedy: !0
    }
  }), a.languages.dotnet = a.languages.cs = a.languages.csharp;
})(Prism);
Prism.languages.cobol = {
  comment: {
    pattern: /\*>.*|(^[ \t]*)\*.*/m,
    lookbehind: !0,
    greedy: !0
  },
  string: {
    pattern: /[xzgn]?(?:"(?:[^\r\n"]|"")*"(?!")|'(?:[^\r\n']|'')*'(?!'))/i,
    greedy: !0
  },
  level: {
    pattern: /(^[ \t]*)\d+\b/m,
    lookbehind: !0,
    greedy: !0,
    alias: "number"
  },
  "class-name": {
    // https://github.com/antlr/grammars-v4/blob/42edd5b687d183b5fa679e858a82297bd27141e7/cobol85/Cobol85.g4#L1015
    pattern: /(\bpic(?:ture)?\s+)(?:(?:[-\w$/,:*+<>]|\.(?!\s|$))(?:\(\d+\))?)+/i,
    lookbehind: !0,
    inside: {
      number: {
        pattern: /(\()\d+/,
        lookbehind: !0
      },
      punctuation: /[()]/
    }
  },
  keyword: {
    pattern: /(^|[^\w-])(?:ABORT|ACCEPT|ACCESS|ADD|ADDRESS|ADVANCING|AFTER|ALIGNED|ALL|ALPHABET|ALPHABETIC|ALPHABETIC-LOWER|ALPHABETIC-UPPER|ALPHANUMERIC|ALPHANUMERIC-EDITED|ALSO|ALTER|ALTERNATE|ANY|ARE|AREA|AREAS|AS|ASCENDING|ASCII|ASSIGN|ASSOCIATED-DATA|ASSOCIATED-DATA-LENGTH|AT|ATTRIBUTE|AUTHOR|AUTO|AUTO-SKIP|BACKGROUND-COLOR|BACKGROUND-COLOUR|BASIS|BEEP|BEFORE|BEGINNING|BELL|BINARY|BIT|BLANK|BLINK|BLOCK|BOTTOM|BOUNDS|BY|BYFUNCTION|BYTITLE|CALL|CANCEL|CAPABLE|CCSVERSION|CD|CF|CH|CHAINING|CHANGED|CHANNEL|CHARACTER|CHARACTERS|CLASS|CLASS-ID|CLOCK-UNITS|CLOSE|CLOSE-DISPOSITION|COBOL|CODE|CODE-SET|COL|COLLATING|COLUMN|COM-REG|COMMA|COMMITMENT|COMMON|COMMUNICATION|COMP|COMP-1|COMP-2|COMP-3|COMP-4|COMP-5|COMPUTATIONAL|COMPUTATIONAL-1|COMPUTATIONAL-2|COMPUTATIONAL-3|COMPUTATIONAL-4|COMPUTATIONAL-5|COMPUTE|CONFIGURATION|CONTAINS|CONTENT|CONTINUE|CONTROL|CONTROL-POINT|CONTROLS|CONVENTION|CONVERTING|COPY|CORR|CORRESPONDING|COUNT|CRUNCH|CURRENCY|CURSOR|DATA|DATA-BASE|DATE|DATE-COMPILED|DATE-WRITTEN|DAY|DAY-OF-WEEK|DBCS|DE|DEBUG-CONTENTS|DEBUG-ITEM|DEBUG-LINE|DEBUG-NAME|DEBUG-SUB-1|DEBUG-SUB-2|DEBUG-SUB-3|DEBUGGING|DECIMAL-POINT|DECLARATIVES|DEFAULT|DEFAULT-DISPLAY|DEFINITION|DELETE|DELIMITED|DELIMITER|DEPENDING|DESCENDING|DESTINATION|DETAIL|DFHRESP|DFHVALUE|DISABLE|DISK|DISPLAY|DISPLAY-1|DIVIDE|DIVISION|DONTCARE|DOUBLE|DOWN|DUPLICATES|DYNAMIC|EBCDIC|EGCS|EGI|ELSE|EMI|EMPTY-CHECK|ENABLE|END|END-ACCEPT|END-ADD|END-CALL|END-COMPUTE|END-DELETE|END-DIVIDE|END-EVALUATE|END-IF|END-MULTIPLY|END-OF-PAGE|END-PERFORM|END-READ|END-RECEIVE|END-RETURN|END-REWRITE|END-SEARCH|END-START|END-STRING|END-SUBTRACT|END-UNSTRING|END-WRITE|ENDING|ENTER|ENTRY|ENTRY-PROCEDURE|ENVIRONMENT|EOL|EOP|EOS|ERASE|ERROR|ESCAPE|ESI|EVALUATE|EVENT|EVERY|EXCEPTION|EXCLUSIVE|EXHIBIT|EXIT|EXPORT|EXTEND|EXTENDED|EXTERNAL|FD|FILE|FILE-CONTROL|FILLER|FINAL|FIRST|FOOTING|FOR|FOREGROUND-COLOR|FOREGROUND-COLOUR|FROM|FULL|FUNCTION|FUNCTION-POINTER|FUNCTIONNAME|GENERATE|GIVING|GLOBAL|GO|GOBACK|GRID|GROUP|HEADING|HIGH-VALUE|HIGH-VALUES|HIGHLIGHT|I-O|I-O-CONTROL|ID|IDENTIFICATION|IF|IMPLICIT|IMPORT|IN|INDEX|INDEXED|INDICATE|INITIAL|INITIALIZE|INITIATE|INPUT|INPUT-OUTPUT|INSPECT|INSTALLATION|INTEGER|INTO|INVALID|INVOKE|IS|JUST|JUSTIFIED|KANJI|KEPT|KEY|KEYBOARD|LABEL|LANGUAGE|LAST|LB|LD|LEADING|LEFT|LEFTLINE|LENGTH|LENGTH-CHECK|LIBACCESS|LIBPARAMETER|LIBRARY|LIMIT|LIMITS|LINAGE|LINAGE-COUNTER|LINE|LINE-COUNTER|LINES|LINKAGE|LIST|LOCAL|LOCAL-STORAGE|LOCK|LONG-DATE|LONG-TIME|LOW-VALUE|LOW-VALUES|LOWER|LOWLIGHT|MEMORY|MERGE|MESSAGE|MMDDYYYY|MODE|MODULES|MORE-LABELS|MOVE|MULTIPLE|MULTIPLY|NAMED|NATIONAL|NATIONAL-EDITED|NATIVE|NEGATIVE|NETWORK|NEXT|NO|NO-ECHO|NULL|NULLS|NUMBER|NUMERIC|NUMERIC-DATE|NUMERIC-EDITED|NUMERIC-TIME|OBJECT-COMPUTER|OCCURS|ODT|OF|OFF|OMITTED|ON|OPEN|OPTIONAL|ORDER|ORDERLY|ORGANIZATION|OTHER|OUTPUT|OVERFLOW|OVERLINE|OWN|PACKED-DECIMAL|PADDING|PAGE|PAGE-COUNTER|PASSWORD|PERFORM|PF|PH|PIC|PICTURE|PLUS|POINTER|PORT|POSITION|POSITIVE|PRINTER|PRINTING|PRIVATE|PROCEDURE|PROCEDURE-POINTER|PROCEDURES|PROCEED|PROCESS|PROGRAM|PROGRAM-ID|PROGRAM-LIBRARY|PROMPT|PURGE|QUEUE|QUOTE|QUOTES|RANDOM|RD|READ|READER|REAL|RECEIVE|RECEIVED|RECORD|RECORDING|RECORDS|RECURSIVE|REDEFINES|REEL|REF|REFERENCE|REFERENCES|RELATIVE|RELEASE|REMAINDER|REMARKS|REMOTE|REMOVAL|REMOVE|RENAMES|REPLACE|REPLACING|REPORT|REPORTING|REPORTS|REQUIRED|RERUN|RESERVE|RESET|RETURN|RETURN-CODE|RETURNING|REVERSE-VIDEO|REVERSED|REWIND|REWRITE|RF|RH|RIGHT|ROUNDED|RUN|SAME|SAVE|SCREEN|SD|SEARCH|SECTION|SECURE|SECURITY|SEGMENT|SEGMENT-LIMIT|SELECT|SEND|SENTENCE|SEPARATE|SEQUENCE|SEQUENTIAL|SET|SHARED|SHAREDBYALL|SHAREDBYRUNUNIT|SHARING|SHIFT-IN|SHIFT-OUT|SHORT-DATE|SIGN|SIZE|SORT|SORT-CONTROL|SORT-CORE-SIZE|SORT-FILE-SIZE|SORT-MERGE|SORT-MESSAGE|SORT-MODE-SIZE|SORT-RETURN|SOURCE|SOURCE-COMPUTER|SPACE|SPACES|SPECIAL-NAMES|STANDARD|STANDARD-1|STANDARD-2|START|STATUS|STOP|STRING|SUB-QUEUE-1|SUB-QUEUE-2|SUB-QUEUE-3|SUBTRACT|SUM|SUPPRESS|SYMBOL|SYMBOLIC|SYNC|SYNCHRONIZED|TABLE|TALLY|TALLYING|TAPE|TASK|TERMINAL|TERMINATE|TEST|TEXT|THEN|THREAD|THREAD-LOCAL|THROUGH|THRU|TIME|TIMER|TIMES|TITLE|TO|TODAYS-DATE|TODAYS-NAME|TOP|TRAILING|TRUNCATED|TYPE|TYPEDEF|UNDERLINE|UNIT|UNSTRING|UNTIL|UP|UPON|USAGE|USE|USING|VALUE|VALUES|VARYING|VIRTUAL|WAIT|WHEN|WHEN-COMPILED|WITH|WORDS|WORKING-STORAGE|WRITE|YEAR|YYYYDDD|YYYYMMDD|ZERO-FILL|ZEROES|ZEROS)(?![\w-])/i,
    lookbehind: !0
  },
  boolean: {
    pattern: /(^|[^\w-])(?:false|true)(?![\w-])/i,
    lookbehind: !0
  },
  number: {
    pattern: /(^|[^\w-])(?:[+-]?(?:(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?|zero))(?![\w-])/i,
    lookbehind: !0
  },
  operator: [
    /<>|[<>]=?|[=+*/&]/,
    {
      pattern: /(^|[^\w-])(?:-|and|equal|greater|less|not|or|than)(?![\w-])/i,
      lookbehind: !0
    }
  ],
  punctuation: /[.:,()]/
};
Prism.languages.makefile = {
  comment: {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: !0
  },
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin"
  },
  target: {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: {
      variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  function: {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: !0
  },
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/
};
(function(a) {
  var t = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
  a.languages.json5 = a.languages.extend("json", {
    property: [
      {
        pattern: RegExp(t.source + "(?=\\s*:)"),
        greedy: !0
      },
      {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
        alias: "unquoted"
      }
    ],
    string: {
      pattern: t,
      greedy: !0
    },
    number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
  });
})(Prism);
Prism.languages.jsonp = Prism.languages.extend("json", {
  punctuation: /[{}[\]();,.]/
});
Prism.languages.insertBefore("jsonp", "punctuation", {
  function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
});
Prism.languages.ini = {
  /**
   * The component mimics the behavior of the Win32 API parser.
   *
   * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
   */
  comment: {
    pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
    lookbehind: !0
  },
  section: {
    pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
    lookbehind: !0,
    inside: {
      "section-name": {
        pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
        lookbehind: !0,
        alias: "selector"
      },
      punctuation: /\[|\]/
    }
  },
  key: {
    pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
    lookbehind: !0,
    alias: "attr-name"
  },
  value: {
    pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
    lookbehind: !0,
    alias: "attr-value",
    inside: {
      "inner-value": {
        pattern: /^("|').+(?=\1$)/,
        lookbehind: !0
      }
    }
  },
  punctuation: /=/
};
(function(a) {
  var t = /(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;
  function n(e) {
    return e.replace(/__/g, function() {
      return t;
    });
  }
  a.languages.toml = {
    comment: {
      pattern: /#.*/,
      greedy: !0
    },
    table: {
      pattern: RegExp(n(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source), "m"),
      lookbehind: !0,
      greedy: !0,
      alias: "class-name"
    },
    key: {
      pattern: RegExp(n(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source), "m"),
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    },
    string: {
      pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0
    },
    date: [
      {
        // Offset Date-Time, Local Date-Time, Local Date
        pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
        alias: "number"
      },
      {
        // Local Time
        pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
        alias: "number"
      }
    ],
    number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /[.,=[\]{}]/
  };
})(Prism);
(function(a) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, e = {
    bash: n,
    environment: {
      pattern: RegExp("\\$" + t),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + t),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  a.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: e
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: n
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: e
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: e.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + t),
      alias: "constant"
    },
    variable: e.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, n.inside = a.languages.bash;
  for (var r = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], s = e.variable[1].inside, l = 0; l < r.length; l++)
    s[r[l]] = a.languages.bash[r[l]];
  a.languages.sh = a.languages.bash, a.languages.shell = a.languages.bash;
})(Prism);
(function(a) {
  var t = /%%?[~:\w]+%?|!\S+!/, n = {
    pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
    alias: "attr-name",
    inside: {
      punctuation: /:/
    }
  }, e = /"(?:[\\"]"|[^"])*"(?!")/, r = /(?:\b|-)\d+\b/;
  a.languages.batch = {
    comment: [
      /^::.*/m,
      {
        pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
        lookbehind: !0
      }
    ],
    label: {
      pattern: /^:.*/m,
      alias: "property"
    },
    command: [
      {
        // FOR command
        pattern: /((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,
        lookbehind: !0,
        inside: {
          keyword: /\b(?:do|in)\b|^for\b/i,
          string: e,
          parameter: n,
          variable: t,
          number: r,
          punctuation: /[()',]/
        }
      },
      {
        // IF command
        pattern: /((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,
        lookbehind: !0,
        inside: {
          keyword: /\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,
          string: e,
          parameter: n,
          variable: t,
          number: r,
          operator: /\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i
        }
      },
      {
        // ELSE command
        pattern: /((?:^|[&()])[ \t]*)else\b/im,
        lookbehind: !0,
        inside: {
          keyword: /^else\b/i
        }
      },
      {
        // SET command
        pattern: /((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        inside: {
          keyword: /^set\b/i,
          string: e,
          parameter: n,
          variable: [
            t,
            /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/
          ],
          number: r,
          operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
          punctuation: /[()',]/
        }
      },
      {
        // Other commands
        pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,
        lookbehind: !0,
        inside: {
          keyword: /^\w+\b/,
          string: e,
          parameter: n,
          label: {
            pattern: /(^\s*):\S+/m,
            lookbehind: !0,
            alias: "property"
          },
          variable: t,
          number: r,
          operator: /\^/
        }
      }
    ],
    operator: /[&@]/,
    punctuation: /[()']/
  };
})(Prism);
(function(a) {
  var t = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source, n = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, function() {
    return t;
  }), e = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source, r = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, function() {
    return e;
  }), s = {
    pattern: RegExp(e),
    greedy: !0
  }, l = {
    pattern: /(^[ \t]*)#.*/m,
    lookbehind: !0,
    greedy: !0
  };
  function i(c, b) {
    return c = c.replace(/<OPT>/g, function() {
      return r;
    }).replace(/<SP>/g, function() {
      return n;
    }), RegExp(c, b);
  }
  a.languages.docker = {
    instruction: {
      pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
      lookbehind: !0,
      greedy: !0,
      inside: {
        options: {
          pattern: i(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"),
          lookbehind: !0,
          greedy: !0,
          inside: {
            property: {
              pattern: /(^|\s)--[\w-]+/,
              lookbehind: !0
            },
            string: [
              s,
              {
                pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
                lookbehind: !0
              }
            ],
            operator: /\\$/m,
            punctuation: /=/
          }
        },
        keyword: [
          {
            // https://docs.docker.com/engine/reference/builder/#healthcheck
            pattern: i(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"),
            lookbehind: !0,
            greedy: !0
          },
          {
            // https://docs.docker.com/engine/reference/builder/#from
            pattern: i(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"),
            lookbehind: !0,
            greedy: !0
          },
          {
            // https://docs.docker.com/engine/reference/builder/#onbuild
            pattern: i(/(^ONBUILD<SP>)\w+/.source, "i"),
            lookbehind: !0,
            greedy: !0
          },
          {
            pattern: /^\w+/,
            greedy: !0
          }
        ],
        comment: l,
        string: s,
        variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
        operator: /\\$/m
      }
    },
    comment: l
  }, a.languages.dockerfile = a.languages.docker;
})(Prism);
Prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  comment: /^#.*/m,
  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  deleted: /^[-–].*/m,
  inserted: /^\+.*/m,
  /*
   * a string (double and simple quote)
   */
  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  command: {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      parameter: /\s--?\w+/
    }
  },
  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  coord: /^@@.*@@$/m,
  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  "commit-sha1": /^commit \w{40}$/m
};
Prism.languages.vim = {
  string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
  comment: /".*/,
  function: /\b\w+(?=\()/,
  keyword: /\b(?:N|Next|P|Print|X|XMLent|XMLns|ab|abbreviate|abc|abclear|abo|aboveleft|al|all|ar|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|args|argu|argument|as|ascii|b|bN|bNext|ba|bad|badd|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bo|botright|bp|bprevious|br|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|brewind|bro|browse|bufdo|buffer|buffers|bun|bunload|bw|bwipeout|c|cN|cNext|cNfcNfile|ca|cabbrev|cabc|cabclear|cad|caddb|caddbuffer|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cg|cgetb|cgetbuffer|cgete|cgetexpr|cgetfile|change|changes|chd|chdir|che|checkpath|checkt|checktime|cl|cla|clast|clist|clo|close|cmapc|cmapclear|cn|cnew|cnewer|cnext|cnf|cnfile|cnorea|cnoreabbrev|co|col|colder|colo|colorscheme|comc|comclear|comp|compiler|con|conf|confirm|continue|cope|copen|copy|cp|cpf|cpfile|cprevious|cq|cquit|cr|crewind|cu|cuna|cunabbrev|cunmap|cw|cwindow|d|debugg|debuggreedy|delc|delcommand|delete|delf|delfunction|delm|delmarks|di|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|e|earlier|echoe|echoerr|echom|echomsg|echon|edit|el|else|elsei|elseif|em|emenu|en|endf|endfo|endfor|endfun|endfunction|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fin|fina|finally|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|foldd|folddoc|folddoclosed|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|h|ha|hardcopy|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iu|iuna|iunabbrev|iunmap|j|join|ju|jumps|k|kee|keepalt|keepj|keepjumps|keepmarks|l|lN|lNext|lNf|lNfile|la|lad|laddb|laddbuffer|laddexpr|laddf|laddfile|lan|language|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|left|lefta|leftabove|let|lex|lexpr|lf|lfile|lfir|lfirst|lg|lgetb|lgetbuffer|lgete|lgetexpr|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|list|ll|lla|llast|lli|llist|lm|lmak|lmake|lmap|lmapc|lmapclear|ln|lne|lnew|lnewer|lnext|lnf|lnfile|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lp|lpf|lpfile|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|m|ma|mak|make|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkv|mkvie|mkview|mkvimrc|mod|mode|move|mz|mzf|mzfile|mzscheme|n|nbkey|new|next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|o|omapc|omapclear|on|only|open|opt|options|ou|ounmap|p|pc|pclose|pe|ped|pedit|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|print|prof|profd|profdel|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|ptN|ptNext|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|py|pyf|pyfile|python|q|qa|qall|quit|quita|quitall|r|read|rec|recover|red|redi|redir|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|ru|rub|ruby|rubyd|rubydo|rubyf|rubyfile|runtime|rv|rviminfo|sN|sNext|sa|sal|sall|san|sandbox|sargument|sav|saveas|sb|sbN|sbNext|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbp|sbprevious|sbr|sbrewind|sbuffer|scrip|scripte|scriptencoding|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sl|sla|slast|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|so|sor|sort|source|sp|spe|spelld|spelldump|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|split|spr|sprevious|sre|srewind|st|sta|stag|star|startg|startgreplace|startinsert|startr|startreplace|stj|stjump|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tN|tNext|ta|tab|tabN|tabNext|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabn|tabnew|tabnext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|u|una|unabbreviate|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|ve|verb|verbose|version|vert|vertical|vi|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|w|wN|wNext|wa|wall|wh|while|win|winc|wincmd|windo|winp|winpos|winsize|wn|wnext|wp|wprevious|wq|wqa|wqall|write|ws|wsverb|wv|wviminfo|x|xa|xall|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
  builtin: /\b(?:acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autocmd|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|t_AB|t_AF|t_AL|t_CS|t_CV|t_Ce|t_Co|t_Cs|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_IE|t_IS|t_K1|t_K3|t_K4|t_K5|t_K6|t_K7|t_K8|t_K9|t_KA|t_KB|t_KC|t_KD|t_KE|t_KF|t_KG|t_KH|t_KI|t_KJ|t_KK|t_KL|t_RI|t_RV|t_SI|t_Sb|t_Sf|t_WP|t_WS|t_ZH|t_ZR|t_al|t_bc|t_cd|t_ce|t_cl|t_cm|t_cs|t_da|t_db|t_dl|t_fs|t_k1|t_k2|t_k3|t_k4|t_k5|t_k6|t_k7|t_k8|t_k9|t_kB|t_kD|t_kI|t_kN|t_kP|t_kb|t_kd|t_ke|t_kh|t_kl|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_se|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_xs|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww)\b/,
  number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
  operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
  punctuation: /[{}[\](),;:]/
};
Prism.languages["dns-zone-file"] = {
  comment: /;.*/,
  string: {
    pattern: /"(?:\\.|[^"\\\r\n])*"/,
    greedy: !0
  },
  variable: [
    {
      pattern: /(^\$ORIGIN[ \t]+)\S+/m,
      lookbehind: !0
    },
    {
      pattern: /(^|\s)@(?=\s|$)/,
      lookbehind: !0
    }
  ],
  keyword: /^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,
  class: {
    // https://tools.ietf.org/html/rfc1035#page-13
    pattern: /(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/,
    lookbehind: !0,
    alias: "keyword"
  },
  type: {
    // https://en.wikipedia.org/wiki/List_of_DNS_record_types
    pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
    lookbehind: !0,
    alias: "keyword"
  },
  punctuation: /[()]/
};
Prism.languages["dns-zone"] = Prism.languages["dns-zone-file"];
Prism.languages.log = {
  string: {
    // Single-quoted strings must not be confused with plain text. E.g. Can't isn't Susan's Chris' toy
    pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?![st] | \w)(?:[^'\\\r\n]|\\.)*'/,
    greedy: !0
  },
  exception: {
    pattern: /(^|[^\w.])[a-z][\w.]*(?:Error|Exception):.*(?:(?:\r\n?|\n)[ \t]*(?:at[ \t].+|\.{3}.*|Caused by:.*))+(?:(?:\r\n?|\n)[ \t]*\.\.\. .*)?/,
    lookbehind: !0,
    greedy: !0,
    alias: ["javastacktrace", "language-javastacktrace"],
    inside: Prism.languages.javastacktrace || {
      keyword: /\bat\b/,
      function: /[a-z_][\w$]*(?=\()/,
      punctuation: /[.:()]/
    }
  },
  level: [
    {
      pattern: /\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,
      alias: ["error", "important"]
    },
    {
      pattern: /\b(?:WARN|WARNING|WRN)\b/,
      alias: ["warning", "important"]
    },
    {
      pattern: /\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,
      alias: ["info", "keyword"]
    },
    {
      pattern: /\b(?:DBG|DEBUG|FINE)\b/,
      alias: ["debug", "keyword"]
    },
    {
      pattern: /\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,
      alias: ["trace", "comment"]
    }
  ],
  property: {
    pattern: /((?:^|[\]|])[ \t]*)[a-z_](?:[\w-]|\b\/\b)*(?:[. ]\(?\w(?:[\w-]|\b\/\b)*\)?)*:(?=\s)/im,
    lookbehind: !0
  },
  separator: {
    pattern: /(^|[^-+])-{3,}|={3,}|\*{3,}|- - /m,
    lookbehind: !0,
    alias: "comment"
  },
  url: /\b(?:file|ftp|https?):\/\/[^\s|,;'"]*[^\s|,;'">.]/,
  email: {
    pattern: /(^|\s)[-\w+.]+@[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+(?=\s)/,
    lookbehind: !0,
    alias: "url"
  },
  "ip-address": {
    pattern: /\b(?:\d{1,3}(?:\.\d{1,3}){3})\b/,
    alias: "constant"
  },
  "mac-address": {
    pattern: /\b[a-f0-9]{2}(?::[a-f0-9]{2}){5}\b/i,
    alias: "constant"
  },
  domain: {
    pattern: /(^|\s)[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)*\.[a-z][a-z0-9-]+(?=\s)/,
    lookbehind: !0,
    alias: "constant"
  },
  uuid: {
    pattern: /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i,
    alias: "constant"
  },
  hash: {
    pattern: /\b(?:[a-f0-9]{32}){1,2}\b/i,
    alias: "constant"
  },
  "file-path": {
    pattern: /\b[a-z]:[\\/][^\s|,;:(){}\[\]"']+|(^|[\s:\[\](>|])\.{0,2}\/\w[^\s|,;:(){}\[\]"']*/i,
    lookbehind: !0,
    greedy: !0,
    alias: "string"
  },
  date: {
    pattern: RegExp(
      /\b\d{4}[-/]\d{2}[-/]\d{2}(?:T(?=\d{1,2}:)|(?=\s\d{1,2}:))/.source + "|" + /\b\d{1,4}[-/ ](?:\d{1,2}|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)[-/ ]\d{2,4}T?\b/.source + "|" + /\b(?:(?:Fri|Mon|Sat|Sun|Thu|Tue|Wed)(?:\s{1,2}(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep))?|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)\s{1,2}\d{1,2}\b/.source,
      "i"
    ),
    alias: "number"
  },
  time: {
    pattern: /\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,
    alias: "number"
  },
  boolean: /\b(?:false|null|true)\b/i,
  number: {
    pattern: /(^|[^.\w])(?:0x[a-f0-9]+|0o[0-7]+|0b[01]+|v?\d[\da-f]*(?:\.\d+)*(?:e[+-]?\d+)?[a-z]{0,3}\b)\b(?!\.\w)/i,
    lookbehind: !0
  },
  operator: /[;:?<=>~/@!$%&+\-|^(){}*#]/,
  punctuation: /[\[\].,]/
};
(function(a) {
  for (var t = /"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source, n = /\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\//.source, e = /(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source.replace(/<string>/g, function() {
    return t;
  }).replace(/<comment>/g, function() {
    return n;
  }), r = 0; r < 2; r++)
    e = e.replace(/<expr>/g, function() {
      return e;
    });
  e = e.replace(/<expr>/g, "[^\\s\\S]"), a.languages.qml = {
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
      greedy: !0
    },
    "javascript-function": {
      pattern: RegExp(/((?:^|;)[ \t]*)function\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(/<js>/g, function() {
        return e;
      }), "m"),
      lookbehind: !0,
      greedy: !0,
      alias: "language-javascript",
      inside: a.languages.javascript
    },
    "class-name": {
      pattern: /((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,
      lookbehind: !0
    },
    property: [
      {
        pattern: /((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
        lookbehind: !0
      },
      {
        pattern: /((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
        lookbehind: !0,
        inside: {
          keyword: /^property/,
          property: /\w+(?:\.\w+)*/
        }
      }
    ],
    "javascript-expression": {
      pattern: RegExp(/(:[ \t]*)(?![\s;}[])(?:(?!$|[;}])<js>)+/.source.replace(/<js>/g, function() {
        return e;
      }), "m"),
      lookbehind: !0,
      greedy: !0,
      alias: "language-javascript",
      inside: a.languages.javascript
    },
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0
    },
    keyword: /\b(?:as|import|on)\b/,
    punctuation: /[{}[\]:;,]/
  };
})(Prism);
(function(a) {
  a.languages.scheme = {
    // this supports "normal" single-line comments:
    //   ; comment
    // and (potentially nested) multiline comments:
    //   #| comment #| nested |# still comment |#
    // (only 1 level of nesting is supported)
    comment: /;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^\[\]]|\[[^\[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,
    string: {
      pattern: /"(?:[^"\\]|\\.)*"/,
      greedy: !0
    },
    symbol: {
      pattern: /'[^()\[\]#'\s]+/,
      greedy: !0
    },
    char: {
      pattern: /#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/,
      greedy: !0
    },
    "lambda-parameter": [
      // https://www.cs.cmu.edu/Groups/AI/html/r4rs/r4rs_6.html#SEC30
      {
        pattern: /((?:^|[^'`#])[(\[]lambda\s+)(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/,
        lookbehind: !0
      },
      {
        pattern: /((?:^|[^'`#])[(\[]lambda\s+[(\[])[^()\[\]']+/,
        lookbehind: !0
      }
    ],
    keyword: {
      pattern: /((?:^|[^'`#])[(\[])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|except|export|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\[\]\s]|$)/,
      lookbehind: !0
    },
    builtin: {
      // all functions of the base library of R7RS plus some of built-ins of R5Rs
      pattern: /((?:^|[^'`#])[(\[])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\[\]\s]|$)/,
      lookbehind: !0
    },
    operator: {
      pattern: /((?:^|[^'`#])[(\[])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/,
      lookbehind: !0
    },
    number: {
      // The number pattern from [the R7RS spec](https://small.r7rs.org/attachment/r7rs.pdf).
      //
      // <number>      := <num 2>|<num 8>|<num 10>|<num 16>
      // <num R>       := <prefix R><complex R>
      // <complex R>   := <real R>(?:@<real R>|<imaginary R>)?|<imaginary R>
      // <imaginary R> := [+-](?:<ureal R>|(?:inf|nan)\.0)?i
      // <real R>      := [+-]?<ureal R>|[+-](?:inf|nan)\.0
      // <ureal R>     := <uint R>(?:\/<uint R>)?
      //                | <decimal R>
      //
      // <decimal 10>  := (?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?
      // <uint R>      := <digit R>+
      // <prefix R>    := <radix R>(?:#[ei])?|(?:#[ei])?<radix R>
      // <radix 2>     := #b
      // <radix 8>     := #o
      // <radix 10>    := (?:#d)?
      // <radix 16>    := #x
      // <digit 2>     := [01]
      // <digit 8>     := [0-7]
      // <digit 10>    := \d
      // <digit 16>    := [0-9a-f]
      //
      // The problem with this grammar is that the resulting regex is way to complex, so we simplify by grouping all
      // non-decimal bases together. This results in a decimal (dec) and combined binary, octal, and hexadecimal (box)
      // pattern:
      pattern: RegExp(t({
        "<ureal dec>": /\d+(?:\/\d+)|(?:\d+(?:\.\d*)?|\.\d+)(?:[esfdl][+-]?\d+)?/.source,
        "<real dec>": /[+-]?<ureal dec>|[+-](?:inf|nan)\.0/.source,
        "<imaginary dec>": /[+-](?:<ureal dec>|(?:inf|nan)\.0)?i/.source,
        "<complex dec>": /<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>/.source,
        "<num dec>": /(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>/.source,
        "<ureal box>": /[0-9a-f]+(?:\/[0-9a-f]+)?/.source,
        "<real box>": /[+-]?<ureal box>|[+-](?:inf|nan)\.0/.source,
        "<imaginary box>": /[+-](?:<ureal box>|(?:inf|nan)\.0)?i/.source,
        "<complex box>": /<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>/.source,
        "<num box>": /#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>/.source,
        "<number>": /(^|[()\[\]\s])(?:<num dec>|<num box>)(?=[()\[\]\s]|$)/.source
      }), "i"),
      lookbehind: !0
    },
    boolean: {
      pattern: /(^|[()\[\]\s])#(?:[ft]|false|true)(?=[()\[\]\s]|$)/,
      lookbehind: !0
    },
    function: {
      pattern: /((?:^|[^'`#])[(\[])(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\[\]\s]|$)/,
      lookbehind: !0
    },
    identifier: {
      pattern: /(^|[()\[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()\[\]\s]|$)/,
      lookbehind: !0,
      greedy: !0
    },
    punctuation: /[()\[\]']/
  };
  function t(n) {
    for (var e in n)
      n[e] = n[e].replace(/<[\w\s]+>/g, function(r) {
        return "(?:" + n[r].trim() + ")";
      });
    return n[e];
  }
})(Prism);
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(a) {
  a.inside.interpolation.inside = Prism.languages.swift;
});
const tn = ["innerHTML"], nn = {
  name: "MarkdownPreview"
}, rn = /* @__PURE__ */ $e({
  ...nn,
  props: {
    markdownText: {
      type: String,
      required: !0
    },
    codeTheme: {
      type: String,
      required: !1,
      default: "potmot-dark"
    },
    codeFold: {
      type: Boolean,
      required: !1,
      default: !1
    },
    codeFoldThreshold: {
      type: Number,
      required: !1,
      default: 20
    }
  },
  setup(a) {
    const t = a;
    let n = Y();
    const e = (f) => {
      const g = (o) => {
        o.preventDefault(), o.clipboardData && o.clipboardData.setData("text/plain", f), document.removeEventListener("copy", g);
      };
      document.addEventListener("copy", g), document.execCommand("copy");
    }, r = (f) => {
      let g = "", o = !0, A = 0;
      for (let y = 0; y < f.length - 2; y++)
        f.slice(y, y + 3) == "```" && (o ? (g += s(f.slice(A, y)), A = y) : (g += l(f.slice(A + 3, y)), A = y + 3), o = !o);
      return g + s(f.slice(A));
    }, s = (f) => {
      try {
        f = N.parse(f).replaceAll("<a ", '<a target="_blank" ').replaceAll(`>
`, ">").replaceAll("<pre><code>", "```").replaceAll("</code></pre>", "```");
        let g = "", o = !0, A = 0;
        for (let y = 0; y < f.length - 2; y++)
          f.slice(y, y + 3) == "```" && (o ? (g += f.slice(A, y), A = y) : (g += i(f.slice(A + 3, y)), A = y + 3), o = !o);
        return g + f.slice(A);
      } catch (g) {
        return `<div style='color: red'>markdown 解析错误</div>
` + g + `
` + f;
      }
    }, l = (f) => {
      try {
        let g = f.replaceAll("\\`", "`"), o = "";
        try {
          let A = g.indexOf(`
`);
          o = g.slice(0, A).trim(), g = g.slice(A + 1);
        } catch {
          g = g.slice(g.indexOf(`
`) + 1);
        }
        return c(g, o);
      } catch (g) {
        return `<div style='color: red'>代码解析错误</div>
` + g + `
` + f;
      }
    }, i = (f, g = "", o = "") => {
      f[f.length - 1] == `
` && (f = f.slice(0, f.length - 1));
      let A = f.split(`
`), y = "<code>" + g;
      for (let u = 0; u < A.length; u++)
        y += '<span class="count"></span>' + A[u] + `
`;
      let w = '<div class="code-copy-button iconfont icon-copy" title="复制"/>' + o;
      return y += "</code>", t.codeFold && A.length > t.codeFoldThreshold ? y = '<pre class="fold ' + t.codeTheme + '">' + y + '<div class="code-fold-button show">展开</div>' + w + "</pre>" : y = '<pre class="' + t.codeTheme + '">' + y + w + "</pre>", y;
    }, c = (f, g) => {
      for (const o of Ze)
        if (o == g) {
          f = Ke.highlight(f, Ke.languages[g], g);
          break;
        }
      return i(f, "", '<div class="code-language">' + g + "</div>");
    }, b = (f) => {
      let g = f.target, o = g.parentNode;
      o.classList.contains("fold") ? (o.classList.remove("fold"), g.textContent = "收起", g.classList.remove("show")) : (o.scrollHeight > 600 && window.scrollTo({
        top: o.offsetTop
      }), o.classList.add("fold"), g.textContent = "展开", g.classList.add("show"));
    }, T = (f) => {
      let g = f.target;
      try {
        let o = g.parentElement.getElementsByTagName("code")[0], A = o.textContent ? o.textContent : "";
        e(A), alert("已复制");
      } catch (o) {
        alert("复制失败:" + o);
      }
    }, R = () => {
      if (n.value == null)
        return;
      if (t.codeFold) {
        const g = Array.from(n.value.querySelectorAll(".code-fold-button"));
        for (let o = 0; o < g.length; o++)
          g[o].removeEventListener("click", b), g[o].addEventListener("click", b);
      }
      const f = Array.from(n.value.querySelectorAll(".code-copy-button"));
      for (let g = 0; g < f.length; g++)
        f[g].removeEventListener("click", T), f[g].addEventListener("click", T);
    };
    return Ve(R), setInterval(R, 1e3), (f, g) => (z(), H("div", {
      ref_key: "markdownCard",
      ref: n,
      class: "markdown-card",
      innerHTML: r(t.markdownText)
    }, null, 8, tn));
  }
});
const at = [rn, Dt, Qt], it = function(a) {
  at.forEach((t) => {
    a.component(t.name, t);
  });
};
typeof window < "u" && window.Vue && it(window.Vue);
const on = {
  install: it,
  ...at
};
export {
  on as default
};
