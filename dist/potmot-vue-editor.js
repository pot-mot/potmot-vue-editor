var En = Object.defineProperty;
var Sn = (a, e, t) => e in a ? En(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var Nt = (a, e, t) => (Sn(a, typeof e != "symbol" ? e + "" : e, t), t);
import { ref as be, defineComponent as e0, reactive as Kt, watch as nt, computed as Wt, nextTick as Ve, onMounted as fa, resolveComponent as kn, openBlock as Se, createElementBlock as ke, normalizeClass as Tr, unref as ft, createElementVNode as ce, Fragment as At, renderList as Pt, withModifiers as ht, withDirectives as xt, toDisplayString as Be, normalizeStyle as Ur, createCommentVNode as k0, vShow as Zt, vModelText as Ar, isRef as T0, createVNode as Tn, createTextVNode as An } from "vue";
const or = () => "ontouchstart" in document, A0 = {
  mounted(a) {
    or() ? a.addEventListener("touchstart", (e) => {
      if (e.target != a)
        return;
      e.preventDefault();
      const t = a.offsetLeft, r = a.offsetTop, n = e.touches[0].clientX, i = e.touches[0].clientY, l = (c) => {
        const p = c.touches[0].clientX, m = c.touches[0].clientY, b = p - n + t, x = m - i + r;
        a.style.top = x + "px", a.style.left = b + "px";
      }, u = () => {
        document.removeEventListener("touchmove", l), document.removeEventListener("touchend", u);
      };
      document.addEventListener("touchmove", l), document.addEventListener("touchend", u);
    }) : a.onmousedown = (e) => {
      if (e.target != a)
        return;
      e.preventDefault();
      const t = a.offsetLeft, r = a.offsetTop, n = e.clientX, i = e.clientY, l = (c) => {
        const p = c.clientX, m = c.clientY, b = p - n + t, x = m - i + r;
        a.style.top = x + "px", a.style.left = b + "px";
      }, u = () => {
        document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", u);
      };
      document.addEventListener("mousemove", l), document.addEventListener("mouseup", u);
    };
  }
}, Et = (a, e, t) => a > t ? t : a < e ? e : a, St = (a, e, t, r = t) => e.slice(0, t) + a + e.slice(r), In = (a) => {
  const e = /* @__PURE__ */ new Map();
  for (let t = 0; t < a.length; t++)
    for (let r = 0; r < a[t].arguments.length; r++)
      e.set(a[t].arguments[r].name, a[t].arguments[r].getRef());
  return e;
}, ga = ["javascript", "typescript", "css", "css-extras", "html", "less", "sass", "scss", "svg", "icon", "markup", "http", "uri", "url", "c", "cpp", "cmake", "objc", "rust", "go", "php", "phpdoc", "perl", "java", "javadoc", "groovy", "kotlin", "kt", "kts", "scala", "latex", "tex", "matlab", "sql", "graphql", "mongodb", "erlang", "lua", "python", "py", "django", "jinja2", "csharp", "dotnet", "cobol", "makefile", "json", "json5", "jsonp", "xml", "yaml", "yml", "ini", "toml", "bash", "shell", "batch", "docker", "dockerfile", "git", "vim", "dns-zone", "log", "qml", "scheme", "swift"], Rn = [{
  name: "title",
  key: "#",
  label: "标题",
  insert: (a) => {
    let e = a.get("titleLevel").value, t = a.get("titleMinimumThreshold").value;
    t = Et(t, 1, 6), e = Et(e, 1, t);
    let r = "";
    for (let n = 0; n < e; n++)
      r += "#";
    return e < t && a.get("titleLevel").value++, {
      before: r + " ",
      after: ""
    };
  },
  arguments: [{
    name: "titleLevel",
    label: "级别",
    type: "number",
    getRef: () => be(1),
    inputLength: 1
  }, {
    name: "titleMinimumThreshold",
    label: "最小级别",
    type: "number",
    getRef: () => be(4),
    inputLength: 1
  }],
  replace: !0
}, {
  name: "form",
  key: "|",
  label: "表格",
  insert: (a) => {
    let e = a.get("tableHeight").value, t = a.get("tableWidth").value, r = "|", n = "|", i = "  ";
    e = Et(e, 1, 99), t = Et(t, 1, 99);
    for (let u = 0; u < t; u++)
      r += i + "|", n += "----|";
    r += `
`, n += `
`;
    let l = r.slice(2) + n;
    for (let u = 0; u < e; u++)
      l += r;
    return {
      before: "| ",
      after: l
    };
  },
  arguments: [{
    name: "tableHeight",
    label: "高度",
    type: "number",
    getRef: () => be(3),
    inputLength: 2
  }, {
    name: "tableWidth",
    label: "宽度",
    type: "number",
    getRef: () => be(2),
    inputLength: 2
  }]
}, {
  name: "orderedList",
  label: "有序列表",
  insert: (a) => {
    let e = a.get("orderedListLength").value, t = a.get("orderedListStart").value;
    e = Et(e, 1, 99), t = Et(t, 0, 9999);
    let r = `
`;
    for (let n = 0; n < e - 1; n++)
      r += n + t + 1 + `. 
`;
    return {
      before: t + ". ",
      after: " " + r
    };
  },
  arguments: [{
    name: "orderedListLength",
    label: "项数",
    type: "number",
    getRef: () => be(3),
    inputLength: 2
  }, {
    name: "orderedListStart",
    label: "首项",
    type: "number",
    getRef: () => be(1),
    inputLength: 4
  }]
}, {
  name: "unorderedList",
  label: "无序列表",
  insert: (a) => {
    let e = a.get("unorderedListLength").value;
    e = Et(e, 1, 99);
    let t = "";
    for (let r = 0; r < e - 1; r++)
      t += `
- `;
    return {
      before: "- ",
      after: " " + t + `
`
    };
  },
  arguments: [{
    name: "unorderedListLength",
    label: "项数",
    type: "number",
    getRef: () => be(3),
    inputLength: 2
  }]
}, {
  name: "link",
  key: "@",
  label: "链接",
  insert: (a) => {
    const e = a.get("linkLabel").value, t = a.get("linkUrl").value;
    return e.length > 0 && t.length > 0 ? {
      before: "[" + e + "](" + t + ")",
      after: ""
    } : {
      before: "[" + e + "](" + t,
      after: ")"
    };
  },
  arguments: [{
    name: "linkLabel",
    label: "标题",
    type: "string",
    getRef: () => be("")
  }, {
    name: "linkUrl",
    label: "URL",
    type: "string",
    getRef: () => be(""),
    styleWidth: "12em"
  }]
}, {
  name: "picture",
  label: "图片",
  insert: (a) => {
    const e = a.get("pictureName").value, t = a.get("pictureUrl").value;
    return e.length > 0 && t.length > 0 ? {
      before: "![" + e + "](" + t + ")",
      after: ""
    } : {
      before: "![" + e + "](" + t,
      after: ")"
    };
  },
  arguments: [{
    name: "pictureName",
    label: "名称",
    type: "string",
    getRef: () => be("")
  }, {
    name: "pictureUrl",
    label: "URL",
    type: "string",
    getRef: () => be(""),
    styleWidth: "12em"
  }]
}], Nn = [{
  name: "break",
  key: "Enter",
  label: "换行",
  insert: () => ({
    before: "<br>",
    after: ""
  }),
  arguments: []
}, {
  name: "code",
  key: ["`", "~"],
  label: "代码块",
  insert: (a) => ({
    before: "```" + a.get("codeLanguage").value + `
`,
    after: "\n```"
  }),
  arguments: [{
    name: "codeLanguage",
    label: "语言",
    options: ga,
    getRef: () => be("")
  }]
}, {
  name: "kalex-math",
  label: "数学算式",
  key: "$",
  insert: () => ({
    before: " $$ ",
    after: " $$ "
  }),
  arguments: []
}], _n = [{
  name: "details",
  key: ">",
  label: "折叠块",
  insert: (a) => ({
    before: `<details>
<summary>` + a.get("summary").value + `</summary>
`,
    after: `
</details>`
  }),
  arguments: [{
    name: "summary",
    label: "标识",
    type: "string",
    getRef: () => be(""),
    styleWidth: "6em"
  }],
  keepSelect: !0
}, {
  name: "warning",
  key: "!",
  label: "标亮",
  insert: (a) => {
    const e = a.get("warningColor").value, t = a.get("warningLabel").value;
    return {
      before: "<" + t + " style='color: " + e + ";'>",
      after: "</" + t + ">"
    };
  },
  arguments: [{
    name: "warningColor",
    label: "颜色",
    type: "string",
    getRef: () => be("red"),
    styleWidth: "4em"
  }, {
    name: "warningLabel",
    label: "标签",
    type: "string",
    getRef: () => be("span"),
    styleWidth: "4em"
  }]
}], On = {
  class: "toolbar"
}, Cn = ["onMousedown", "title"], Mn = {
  class: "floating-card tool-menu"
}, Dn = {
  class: "insert-text"
}, Ln = ["onMousedown", "title"], zn = ["value", "onChange"], Pn = ["type", "value", "maxlength", "onInput"], Bn = /* @__PURE__ */ ce("br", null, null, -1), Fn = {
  class: "replace-box floating-card tool-menu"
}, $n = /* @__PURE__ */ ce("br", null, null, -1), Un = {
  style: {
    display: "flex",
    "justify-content": "space-around"
  }
}, qn = ["onMousedown"], Hn = ["onMousedown"], Gn = ["onMousedown"], Yn = ["onMousedown"], Vn = ["placeholder"], Xn = ["textContent"], jn = {
  key: 0,
  class: "statistical-list"
}, Kn = {
  name: "MarkdownEditor"
}, Wn = /* @__PURE__ */ e0({
  ...Kn,
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
    insertUnits: {
      type: Array,
      required: !1,
      default: [...Rn, ...Nn, ..._n]
    }
  },
  emits: ["update:modelValue"],
  setup(a, {
    emit: e
  }) {
    const t = a, r = Kt({
      // 同步滚动条
      handleScrollFlag: "edit",
      beforeFullScreenTop: 0,
      text: "",
      pushFlag: "",
      // 历史记录相关
      history: [],
      stackTop: -1,
      replaceFrom: "",
      replaceTo: ""
    });
    nt(() => r.text, () => {
      e("update:modelValue", r.text);
    });
    const n = be(), i = be(), l = be(/* @__PURE__ */ new Map());
    l.value = In(t.insertUnits);
    const u = (_, z) => {
      l.value.get(_).value = z.target.value;
    }, c = (_, z) => {
      l.value.get(_).value = z.target.value;
    };
    class p {
      constructor(z, U, W, K = () => {
      }) {
        Nt(this, "name", "");
        Nt(this, "active", !1);
        Nt(this, "label", "");
        Nt(this, "icon", "");
        Nt(this, "method");
        this.name = z, this.label = U, this.icon = W, this.method = K;
      }
      changeActive() {
        this.active = !this.active;
      }
    }
    const m = Kt({
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
      n.value && (m.startPlace = Me(n.value.selectionStart, r.text), n.value.selectionStart == n.value.selectionEnd ? m.endPlace = m.startPlace : m.endPlace = Me(n.value.selectionEnd, r.text), m.selectLength = n.value.selectionEnd - n.value.selectionStart);
    }, 100);
    const x = Kt([new p("fullScreen", "全屏/收起全屏", "icon-full-screen", (_) => {
      _.changeActive();
    }), new p("insert", "快捷插入", "icon-bulletpoint", (_) => {
      _.changeActive();
    }), new p("replace", "文本查找与替换", "icon-search-list", (_) => {
      _.changeActive();
    }), new p("preview", "预览", "icon-browse", (_) => {
      _.changeActive();
    }), new p("undo", "撤销(Ctrl + z)", "icon-undo", () => {
      B();
    }), new p("redo", "重做(Ctrl + Z)", "icon-redo", () => {
      ae();
    })]), v = (_) => {
      for (const z of x)
        if (z.name == _)
          return z.active;
      return !1;
    }, k = (_, z) => {
      for (const U of x)
        if (U.name == _) {
          U.active = z;
          break;
        }
    }, E = Wt({
      get() {
        return v("fullScreen");
      },
      set(_) {
        k("fullScreen", _);
      }
    });
    nt(() => E.value, async (_) => {
      _ ? (N.value = !or(), r.handleScrollFlag = "edit", r.beforeFullScreenTop = document.documentElement.scrollTop) : (N.value = !1, await Ve(() => {
        document.documentElement.scrollTop = r.beforeFullScreenTop;
      }));
    });
    const O = Wt({
      get() {
        return v("replace");
      },
      set(_) {
        k("replace", _);
      }
    }), N = Wt({
      get() {
        return v("preview");
      },
      set(_) {
        k("preview", _);
      }
    });
    nt(() => N.value, async (_) => {
      or() && (I.value = _ ? "preview" : "edit");
    });
    const w = Wt(() => E.value ? N.value ? "edit-preview" : "edit" : ""), S = (_) => {
      let z = n.value.selectionStart, U = n.value.selectionEnd, W = r.text, K;
      const {
        before: te,
        after: De
      } = _.insert(l.value);
      _.replace ? (W = St(te, W, z, U), K = z + te.length) : (W = St(te, W, z), K = U + te.length), De.length > 0 && (W = St(De, W, K)), r.text = W, Ve(() => {
        _.keepSelect && z != U ? (n.value.selectionStart = z, n.value.selectionEnd = K + De.length) : (n.value.selectionStart = z + te.length, n.value.selectionEnd = z + te.length), R();
      });
    };
    fa(() => {
      r.text = t.modelValue, r.history = [], r.stackTop = -1, R(), t.startWithFullScreen && (E.value = !0, N.value = !0);
    });
    const A = (_, z) => {
      z.scrollTop = _.scrollTop * (z.scrollHeight - z.offsetHeight) / (_.scrollHeight - _.offsetHeight);
    };
    let I = be("textarea");
    setInterval(() => {
      I.value == "textarea" ? A(n.value, i.value) : I.value == "preview" && A(i.value, n.value);
    }, 20);
    const R = (_ = n.value.selectionStart, z = n.value.selectionEnd) => {
      r.stackTop >= 200 && r.history.splice(0, 100), r.stackTop++, r.history[r.stackTop] = {
        start: _,
        end: z,
        text: r.text,
        scrollTop: n.value.scrollTop
      };
    }, D = (_ = n.value.selectionStart, z = n.value.selectionStart) => {
      r.history[r.stackTop] = {
        start: _,
        end: z,
        text: r.text,
        scrollTop: n.value.scrollTop
      };
    }, H = () => {
      r.stackTop < r.history.length - 1 && (r.history = r.history.slice(0, r.stackTop + 1));
    }, B = () => {
      if (r.stackTop >= 1) {
        r.stackTop--;
        const _ = r.history[r.stackTop];
        r.text = _.text, Ve(() => {
          n.value.selectionStart = _.start, n.value.selectionEnd = _.end, n.value.scrollTo(0, _.scrollTop);
        });
      } else
        alert("无法再次撤销");
    }, ae = () => {
      if (r.stackTop < r.history.length - 1) {
        r.stackTop++;
        let _ = r.history[r.stackTop];
        r.text = _.text, Ve(() => {
          n.value.selectionStart = _.start, n.value.selectionEnd = _.end, n.value.scrollTo(0, _.scrollTop);
        });
      } else
        alert("已是最新，无法重做");
    }, ee = (_) => {
      if (_.ctrlKey) {
        if (_.key == "x" || _.key == "X")
          r.pushFlag = "cut", setTimeout(R, 200);
        else if (_.key == "v" || _.key == "V")
          r.pushFlag = "copy", setTimeout(R, 200);
        else if (_.key == "z" || _.key == "Z")
          _.preventDefault(), r.pushFlag = "symbol", _.key == "z" ? B() : ae();
        else if (_.key == "r" || _.key == "R")
          _.preventDefault(), _.key == "r" ? (r.pushFlag = "symbol", r.replaceFrom = r.text.slice(n.value.selectionStart, n.value.selectionEnd), O.value = !0) : O.value = !1;
        else
          for (const z of t.insertUnits)
            if (z.key) {
              if (z.key instanceof Array) {
                for (const U of z.key)
                  if (U == _.key) {
                    _.preventDefault(), r.pushFlag = "symbol", S(z);
                    break;
                  }
              } else if (z.key == _.key) {
                _.preventDefault(), r.pushFlag = "symbol", S(z);
                break;
              }
            }
      } else if (_.key == "Enter")
        _.preventDefault(), r.pushFlag = "blank", Ie();
      else {
        if (_.key == "Ctrl" || _.key == "Shift" || _.key.startsWith("Arrow") || _.key == "Enter" || _.key == " ")
          return;
        if (_.key == "Escape")
          E.value && (E.value = !1);
        else if (_.key == "Tab")
          _.preventDefault(), r.pushFlag = "blank", _e(_, "	");
        else if (_.key == "(" || _.key == "[" || _.key == "{") {
          _.preventDefault(), r.pushFlag = "symbol";
          let z = "";
          switch (_.key) {
            case "(":
              z = ")";
              break;
            case "[":
              z = "]";
              break;
            case "{":
              z = "}";
              break;
          }
          xe({
            before: _.key,
            after: z
          });
        } else if (n.value.selectionEnd != n.value.selectionStart && (_.key == '"' || _.key == "'")) {
          _.preventDefault(), r.pushFlag = "symbol";
          let z = "";
          switch (_.key) {
            case "'":
              z = "'";
              break;
            case '"':
              z = '"';
              break;
          }
          xe({
            before: _.key,
            after: z
          });
        } else
          r.pushFlag != "input" && H(), setTimeout(() => {
            he("input");
          }, 100);
      }
    }, ne = (_) => {
      _.key == "Enter" || _.key == " " ? he("blank") : _.key.startsWith("Arrow") && he("jump");
    }, Ae = () => {
      setTimeout(() => {
        he("jump");
      }, 100);
    }, he = (_) => {
      r.pushFlag != _ ? (r.pushFlag = _, R()) : D();
    }, xe = (_) => {
      let z = n.value.selectionStart, U = n.value.selectionEnd, W = r.text, K;
      const {
        before: te,
        after: De
      } = _;
      W = St(te, W, z), K = U + te.length, De.length > 0 && (W = St(De, W, K)), r.text = W;
      const rt = n.value.selectionStart != n.value.selectionEnd;
      Ve(() => {
        rt ? (n.value.selectionStart = z, n.value.selectionEnd = K + De.length) : (n.value.selectionStart = z + te.length, n.value.selectionEnd = z + te.length), R();
      });
    }, Ie = () => {
      const _ = n.value.selectionStart;
      let z = `
`, U = _;
      for (r.text[U] == `
` && U--; r.text[U] != `
` && U > 0; )
        U--;
      for (U != 0 && U++; U < r.text.length && U < _ && (r.text[U] == " " || r.text[U] == "	"); U++)
        z += r.text[U];
      r.text = St(z, r.text, _), Ve(() => {
        n.value.selectionStart = _ + z.length, n.value.selectionEnd = n.value.selectionStart, R();
      });
    }, _e = (_, z) => {
      const U = n.value.selectionStart, W = n.value.selectionEnd;
      if (_.shiftKey)
        if (n.value.selectionStart == n.value.selectionEnd) {
          let K = 0;
          for (let rt = n.value.selectionStart - 1; rt >= 0; rt--)
            if (r.text[rt] == `
`) {
              K = rt + 1;
              break;
            }
          const te = r.text.slice(K, U), De = te.replace(z, "");
          if (te.length == De.length)
            return;
          r.text = r.text.slice(0, U - te.length) + De + r.text.slice(W), Ve(() => {
            R(U, U);
          });
        } else {
          const K = r.text.slice(U, W), te = K.replace(z, "").replaceAll(`
` + z, `
`);
          if (K.length == te.length)
            return;
          r.text = r.text.slice(0, U) + te + r.text.slice(U + K.length), Ve(() => {
            n.value.selectionStart = U, n.value.selectionEnd = U + te.length, R(U, n.value.selectionEnd);
          });
        }
      else if (n.value.selectionStart == n.value.selectionEnd)
        r.text = St(z, r.text, n.value.selectionStart), Ve(() => {
          n.value.selectionStart = U + 1, n.value.selectionEnd = U + 1, R(U + 1, U + 1);
        });
      else {
        const K = r.text.slice(U, n.value.selectionEnd), te = z + K.replaceAll(`
`, `
` + z);
        if (K.length == te.length)
          return;
        r.text = r.text.slice(0, U) + te + r.text.slice(U + K.length), Ve(() => {
          n.value.selectionStart = U, n.value.selectionEnd = U + te.length, R(U, n.value.selectionEnd);
        });
      }
    };
    let ie = be();
    const G = Kt({
      index: -1,
      indexes: []
    });
    nt(() => r.replaceFrom, () => {
      se(), O && (r.replaceFrom.length <= 0 || le());
    }), nt(() => r.text, () => {
      se();
    }), nt(() => O.value, () => {
      se();
    }), nt(() => N.value, () => {
      se(), O.value = !1;
    }), nt(() => E.value, () => {
      se(), O.value = !1;
    });
    const se = () => {
      if (G.index = -1, G.indexes = [], n.value == null || (ie.value.style.width = n.value.scrollWidth + "px", r.replaceFrom.length <= 0) || r.text.length <= 0)
        return;
      let _ = r.text.indexOf(r.replaceFrom, 0), z = 0;
      for (; _ >= 0; ) {
        let U = r.text.indexOf(r.replaceFrom, _);
        if (U < 0)
          break;
        n.value.selectionStart == U && n.value.selectionEnd - n.value.selectionStart == r.replaceFrom.length && (G.index = z), G.indexes.push(U), _ = U + r.replaceFrom.length, z++;
      }
    }, me = (_) => {
      n.value.scrollTop = _;
    }, le = () => {
      setTimeout(() => {
        me(ie.value.scrollHeight - n.value.clientHeight / 2.4), n.value.selectionStart = G.indexes[G.index], n.value.selectionEnd = G.indexes[G.index] + r.replaceFrom.length;
      }, 50);
    }, et = () => {
      n.value != null && (G.index > 0 && G.index--, setTimeout(() => {
        me(ie.value.scrollHeight - n.value.clientHeight / 2.4), n.value.focus(), n.value.selectionStart = G.indexes[G.index], n.value.selectionEnd = G.indexes[G.index] + r.replaceFrom.length;
      }, 50));
    }, Oe = () => {
      n.value != null && (G.index < G.indexes.length - 1 && G.index++, setTimeout(() => {
        me(ie.value.scrollHeight - n.value.clientHeight / 2.4), n.value.focus(), n.value.selectionStart = G.indexes[G.index], n.value.selectionEnd = G.indexes[G.index] + r.replaceFrom.length;
      }, 50));
    }, Ce = () => {
      r.text.slice(n.value.selectionStart, n.value.selectionEnd) == r.replaceFrom && (r.text = r.text.slice(0, n.value.selectionStart) + r.replaceTo + r.text.slice(n.value.selectionEnd), R());
    }, tt = () => {
      r.replaceFrom.length <= 0 ? alert("替换文本不可为空") : (r.text = r.text.replaceAll(r.replaceFrom, r.replaceTo), Ve(() => {
        R();
      }));
    }, Me = (_, z) => {
      let U = 0, W = 1;
      z[_] == `
` && (_--, U++);
      for (let K = _; K >= 0 && z[K] != `
`; K--)
        U++;
      for (let K = _; K >= 0; K--)
        z[K] == `
` && W++;
      return {
        y: W,
        x: U
      };
    };
    return (_, z) => {
      const U = kn("MarkdownPreview");
      return Se(), ke("div", {
        class: Tr([[ft(E) ? "full" : "non-full", ft(or)() ? "mobile" : "pc"], "editor"])
      }, [ce("ul", On, [(Se(!0), ke(At, null, Pt(x, (W) => (Se(), ke("li", null, [ce("span", {
        onMousedown: ht((K) => W.method(W), ["prevent", "stop"]),
        title: W.label,
        class: Tr(["iconfont", [W.active ? "chosen" : "", W.icon]])
      }, null, 42, Cn)]))), 256))]), xt((Se(), ke("div", Mn, [ce("span", {
        class: "iconfont icon-close",
        onMousedown: z[0] || (z[0] = ht((W) => k("insert", !1), ["prevent", "stop"]))
      }, null, 32), (Se(!0), ke(At, null, Pt(t.insertUnits, (W) => (Se(), ke(At, null, [ce("span", Dn, [ce("span", {
        class: "hover-color-blue",
        onMousedown: ht((K) => S(W), ["prevent", "stop"]),
        title: W.key ? "快捷键[Ctrl + " + W.key + "]" : "无快捷键"
      }, Be(W.label), 41, Ln), (Se(!0), ke(At, null, Pt(W.arguments, (K) => (Se(), ke(At, null, [ce("label", null, Be(K.label), 1), "options" in K ? (Se(), ke("select", {
        key: 0,
        value: l.value.get(K.name).value,
        onChange: (te) => {
          c(K.name, te);
        }
      }, [(Se(!0), ke(At, null, Pt(K.options, (te) => (Se(), ke("option", null, Be(te), 1))), 256))], 40, zn)) : "type" in K ? (Se(), ke("input", {
        key: 1,
        type: K.type,
        value: l.value.get(K.name).value,
        maxlength: K.inputLength ? K.inputLength : 100,
        style: Ur(K.styleWidth ? "width: " + K.styleWidth : ""),
        onInput: (te) => {
          u(K.name, te);
        }
      }, null, 44, Pn)) : k0("", !0)], 64))), 256))]), Bn], 64))), 256))])), [[Zt, v("insert")], [ft(A0)]]), xt((Se(), ke("div", Fn, [ce("span", {
        class: "iconfont icon-close",
        onMousedown: z[1] || (z[1] = ht((W) => k("replace", !1), ["prevent", "stop"]))
      }, null, 32), xt(ce("textarea", {
        "onUpdate:modelValue": z[2] || (z[2] = (W) => r.replaceFrom = W),
        placeholder: "查找文本"
      }, null, 512), [[Ar, r.replaceFrom]]), $n, xt(ce("textarea", {
        "onUpdate:modelValue": z[3] || (z[3] = (W) => r.replaceTo = W),
        placeholder: "替换文本"
      }, null, 512), [[Ar, r.replaceTo]]), ce("div", Un, [ce("span", {
        class: "hover-color-blue",
        onMousedown: ht(Oe, ["prevent", "stop"]),
        style: {
          padding: "0.1em"
        }
      }, "↓", 40, qn), ce("span", {
        class: "hover-color-blue",
        onMousedown: ht(et, ["prevent", "stop"]),
        style: {
          padding: "0.1em"
        }
      }, "↑", 40, Hn), ce("span", null, Be(G.index + 1) + "/" + Be(G.indexes.length), 1), ce("span", {
        class: "hover-color-blue",
        onMousedown: ht(Ce, ["prevent", "stop"])
      }, "替换选中", 40, Gn), ce("span", {
        class: "hover-color-blue",
        onMousedown: ht(tt, ["prevent", "stop"])
      }, "替换全部", 40, Yn)])])), [[Zt, v("replace")], [ft(A0)]]), ce("div", {
        class: Tr(["container", ft(w)])
      }, [xt(ce("textarea", {
        style: Ur([!ft(E) && ft(N) ? "position: absolute; visibility: hidden;" : ""]),
        ref_key: "textarea",
        ref: n,
        "onUpdate:modelValue": z[4] || (z[4] = (W) => r.text = W),
        placeholder: t.placeholder,
        class: "edit-card",
        onKeydown: ee,
        onKeyup: ne,
        onMousedown: Ae,
        onMouseover: z[5] || (z[5] = () => {
          T0(I) ? I.value = "textarea" : I = "textarea";
        })
      }, `\r
			`, 44, Vn), [[Ar, r.text]]), ce("div", {
        ref_key: "previewCard",
        ref: i,
        class: "preview-card",
        onMouseover: z[6] || (z[6] = () => {
          T0(I) ? I.value = "preview" : I = "preview";
        })
      }, [Tn(U, {
        "markdown-text": r.text
      }, null, 8, ["markdown-text"])], 544), ce("div", {
        ref_key: "textareaCountLine",
        ref: ie,
        textContent: Be(r.text.substring(0, G.indexes[G.index])),
        style: {
          "white-space": "pre-wrap",
          "overflow-wrap": "break-word",
          padding: "0.5em",
          width: "100%",
          border: "1px solid #eee"
        }
      }, null, 8, Xn)], 2), n.value !== void 0 ? (Se(), ke("ul", jn, [ce("li", null, "字数 " + Be(r.text.length), 1), ce("li", null, [An(Be(m.startPlace.y) + ":" + Be(m.startPlace.x) + " ", 1), xt(ce("span", null, " 至 " + Be(m.endPlace.y) + ":" + Be(m.endPlace.x), 513), [[Zt, m.selectLength > 0]])]), xt(ce("li", null, "选中 " + Be(m.selectLength), 513), [[Zt, m.selectLength > 0]])])) : k0("", !0)], 2);
    };
  }
});
function ba() {
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
let Dt = ba();
function Zn(a) {
  Dt = a;
}
const va = /[&<>"']/, Jn = new RegExp(va.source, "g"), ya = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Qn = new RegExp(ya.source, "g"), ei = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, I0 = (a) => ei[a];
function Te(a, e) {
  if (e) {
    if (va.test(a))
      return a.replace(Jn, I0);
  } else if (ya.test(a))
    return a.replace(Qn, I0);
  return a;
}
const ti = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function wa(a) {
  return a.replace(ti, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const ri = /(^|[^\[])\^/g;
function ue(a, e) {
  a = typeof a == "string" ? a : a.source, e = e || "";
  const t = {
    replace: (r, n) => (n = n.source || n, n = n.replace(ri, "$1"), a = a.replace(r, n), t),
    getRegex: () => new RegExp(a, e)
  };
  return t;
}
const ai = /[^\w:]/g, ni = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function R0(a, e, t) {
  if (a) {
    let r;
    try {
      r = decodeURIComponent(wa(t)).replace(ai, "").toLowerCase();
    } catch {
      return null;
    }
    if (r.indexOf("javascript:") === 0 || r.indexOf("vbscript:") === 0 || r.indexOf("data:") === 0)
      return null;
  }
  e && !ni.test(t) && (t = oi(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const Jt = {}, ii = /^[^:]+:\/*[^/]*$/, si = /^([^:]+:)[\s\S]*$/, li = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function oi(a, e) {
  Jt[" " + a] || (ii.test(a) ? Jt[" " + a] = a + "/" : Jt[" " + a] = ur(a, "/", !0)), a = Jt[" " + a];
  const t = a.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? t ? e : a.replace(si, "$1") + e : e.charAt(0) === "/" ? t ? e : a.replace(li, "$1") + e : a + e;
}
const hr = { exec: function() {
} };
function je(a) {
  let e = 1, t, r;
  for (; e < arguments.length; e++) {
    t = arguments[e];
    for (r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
  }
  return a;
}
function N0(a, e) {
  const t = a.replace(/\|/g, (i, l, u) => {
    let c = !1, p = l;
    for (; --p >= 0 && u[p] === "\\"; )
      c = !c;
    return c ? "|" : " |";
  }), r = t.split(/ \|/);
  let n = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), r.length > e)
    r.splice(e);
  else
    for (; r.length < e; )
      r.push("");
  for (; n < r.length; n++)
    r[n] = r[n].trim().replace(/\\\|/g, "|");
  return r;
}
function ur(a, e, t) {
  const r = a.length;
  if (r === 0)
    return "";
  let n = 0;
  for (; n < r; ) {
    const i = a.charAt(r - n - 1);
    if (i === e && !t)
      n++;
    else if (i !== e && t)
      n++;
    else
      break;
  }
  return a.slice(0, r - n);
}
function ui(a, e) {
  if (a.indexOf(e[1]) === -1)
    return -1;
  const t = a.length;
  let r = 0, n = 0;
  for (; n < t; n++)
    if (a[n] === "\\")
      n++;
    else if (a[n] === e[0])
      r++;
    else if (a[n] === e[1] && (r--, r < 0))
      return n;
  return -1;
}
function xa(a) {
  a && a.sanitize && !a.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function _0(a, e) {
  if (e < 1)
    return "";
  let t = "";
  for (; e > 1; )
    e & 1 && (t += a), e >>= 1, a += a;
  return t + a;
}
function O0(a, e, t, r) {
  const n = e.href, i = e.title ? Te(e.title) : null, l = a[1].replace(/\\([\[\]])/g, "$1");
  if (a[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const u = {
      type: "link",
      raw: t,
      href: n,
      title: i,
      text: l,
      tokens: r.inlineTokens(l)
    };
    return r.state.inLink = !1, u;
  }
  return {
    type: "image",
    raw: t,
    href: n,
    title: i,
    text: Te(l)
  };
}
function ci(a, e) {
  const t = a.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const r = t[1];
  return e.split(`
`).map((n) => {
    const i = n.match(/^\s+/);
    if (i === null)
      return n;
    const [l] = i;
    return l.length >= r.length ? n.slice(r.length) : n;
  }).join(`
`);
}
class t0 {
  constructor(e) {
    this.options = e || Dt;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const r = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : ur(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], n = ci(r, t[3] || "");
      return {
        type: "code",
        raw: r,
        lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
        text: n
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        const n = ur(r, "#");
        (this.options.pedantic || !n || / $/.test(n)) && (r = n.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const r = t[0].replace(/^ *>[ \t]?/gm, ""), n = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(r);
      return this.lexer.state.top = n, {
        type: "blockquote",
        raw: t[0],
        tokens: i,
        text: r
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r, n, i, l, u, c, p, m, b, x, v, k, E = t[1].trim();
      const O = E.length > 1, N = {
        type: "list",
        raw: "",
        ordered: O,
        start: O ? +E.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      E = O ? `\\d{1,9}\\${E.slice(-1)}` : `\\${E}`, this.options.pedantic && (E = O ? E : "[*+-]");
      const w = new RegExp(`^( {0,3}${E})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; e && (k = !1, !(!(t = w.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (r = t[0], e = e.substring(r.length), m = t[2].split(`
`, 1)[0].replace(/^\t+/, (A) => " ".repeat(3 * A.length)), b = e.split(`
`, 1)[0], this.options.pedantic ? (l = 2, v = m.trimLeft()) : (l = t[2].search(/[^ ]/), l = l > 4 ? 1 : l, v = m.slice(l), l += t[1].length), c = !1, !m && /^ *$/.test(b) && (r += b + `
`, e = e.substring(b.length + 1), k = !0), !k) {
          const A = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), I = new RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), R = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`), D = new RegExp(`^ {0,${Math.min(3, l - 1)}}#`);
          for (; e && (x = e.split(`
`, 1)[0], b = x, this.options.pedantic && (b = b.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(R.test(b) || D.test(b) || A.test(b) || I.test(e))); ) {
            if (b.search(/[^ ]/) >= l || !b.trim())
              v += `
` + b.slice(l);
            else {
              if (c || m.search(/[^ ]/) >= 4 || R.test(m) || D.test(m) || I.test(m))
                break;
              v += `
` + b;
            }
            !c && !b.trim() && (c = !0), r += x + `
`, e = e.substring(x.length + 1), m = b.slice(l);
          }
        }
        N.loose || (p ? N.loose = !0 : /\n *\n *$/.test(r) && (p = !0)), this.options.gfm && (n = /^\[[ xX]\] /.exec(v), n && (i = n[0] !== "[ ] ", v = v.replace(/^\[[ xX]\] +/, ""))), N.items.push({
          type: "list_item",
          raw: r,
          task: !!n,
          checked: i,
          loose: !1,
          text: v
        }), N.raw += r;
      }
      N.items[N.items.length - 1].raw = r.trimRight(), N.items[N.items.length - 1].text = v.trimRight(), N.raw = N.raw.trimRight();
      const S = N.items.length;
      for (u = 0; u < S; u++)
        if (this.lexer.state.top = !1, N.items[u].tokens = this.lexer.blockTokens(N.items[u].text, []), !N.loose) {
          const A = N.items[u].tokens.filter((R) => R.type === "space"), I = A.length > 0 && A.some((R) => /\n.*\n/.test(R.raw));
          N.loose = I;
        }
      if (N.loose)
        for (u = 0; u < S; u++)
          N.items[u].loose = !0;
      return N;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) {
      const r = {
        type: "html",
        raw: t[0],
        pre: !this.options.sanitizer && (t[1] === "pre" || t[1] === "script" || t[1] === "style"),
        text: t[0]
      };
      if (this.options.sanitize) {
        const n = this.options.sanitizer ? this.options.sanitizer(t[0]) : Te(t[0]);
        r.type = "paragraph", r.text = n, r.tokens = this.lexer.inline(n);
      }
      return r;
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
      return {
        type: "def",
        tag: r,
        raw: t[0],
        href: n,
        title: i
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      const r = {
        type: "table",
        header: N0(t[1]).map((n) => ({ text: n })),
        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (r.header.length === r.align.length) {
        r.raw = t[0];
        let n = r.align.length, i, l, u, c;
        for (i = 0; i < n; i++)
          /^ *-+: *$/.test(r.align[i]) ? r.align[i] = "right" : /^ *:-+: *$/.test(r.align[i]) ? r.align[i] = "center" : /^ *:-+ *$/.test(r.align[i]) ? r.align[i] = "left" : r.align[i] = null;
        for (n = r.rows.length, i = 0; i < n; i++)
          r.rows[i] = N0(r.rows[i], r.header.length).map((p) => ({ text: p }));
        for (n = r.header.length, l = 0; l < n; l++)
          r.header[l].tokens = this.lexer.inline(r.header[l].text);
        for (n = r.rows.length, l = 0; l < n; l++)
          for (c = r.rows[l], u = 0; u < c.length; u++)
            c[u].tokens = this.lexer.inline(c[u].text);
        return r;
      }
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: Te(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : Te(t[0]) : t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const l = ur(r.slice(0, -1), "\\");
        if ((r.length - l.length) % 2 === 0)
          return;
      } else {
        const l = ui(t[2], "()");
        if (l > -1) {
          const c = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          t[2] = t[2].substring(0, l), t[0] = t[0].substring(0, c).trim(), t[3] = "";
        }
      }
      let n = t[2], i = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
        l && (n = l[1], i = l[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return n = n.trim(), /^</.test(n) && (this.options.pedantic && !/>$/.test(r) ? n = n.slice(1) : n = n.slice(1, -1)), O0(t, {
        href: n && n.replace(this.rules.inline._escapes, "$1"),
        title: i && i.replace(this.rules.inline._escapes, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      let n = (r[2] || r[1]).replace(/\s+/g, " ");
      if (n = t[n.toLowerCase()], !n) {
        const i = r[0].charAt(0);
        return {
          type: "text",
          raw: i,
          text: i
        };
      }
      return O0(r, n, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let n = this.rules.inline.emStrong.lDelim.exec(e);
    if (!n || n[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    const i = n[1] || n[2] || "";
    if (!i || i && (r === "" || this.rules.inline.punctuation.exec(r))) {
      const l = n[0].length - 1;
      let u, c, p = l, m = 0;
      const b = n[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (b.lastIndex = 0, t = t.slice(-1 * e.length + l); (n = b.exec(t)) != null; ) {
        if (u = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !u)
          continue;
        if (c = u.length, n[3] || n[4]) {
          p += c;
          continue;
        } else if ((n[5] || n[6]) && l % 3 && !((l + c) % 3)) {
          m += c;
          continue;
        }
        if (p -= c, p > 0)
          continue;
        c = Math.min(c, c + p + m);
        const x = e.slice(0, l + n.index + (n[0].length - u.length) + c);
        if (Math.min(l, c) % 2) {
          const k = x.slice(1, -1);
          return {
            type: "em",
            raw: x,
            text: k,
            tokens: this.lexer.inlineTokens(k)
          };
        }
        const v = x.slice(2, -2);
        return {
          type: "strong",
          raw: x,
          text: v,
          tokens: this.lexer.inlineTokens(v)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const n = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return n && i && (r = r.substring(1, r.length - 1)), r = Te(r, !0), {
        type: "codespan",
        raw: t[0],
        text: r
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e, t) {
    const r = this.rules.inline.autolink.exec(e);
    if (r) {
      let n, i;
      return r[2] === "@" ? (n = Te(this.options.mangle ? t(r[1]) : r[1]), i = "mailto:" + n) : (n = Te(r[1]), i = n), {
        type: "link",
        raw: r[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e, t) {
    let r;
    if (r = this.rules.inline.url.exec(e)) {
      let n, i;
      if (r[2] === "@")
        n = Te(this.options.mangle ? t(r[0]) : r[0]), i = "mailto:" + n;
      else {
        let l;
        do
          l = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])[0];
        while (l !== r[0]);
        n = Te(r[0]), r[1] === "www." ? i = "http://" + r[0] : i = r[0];
      }
      return {
        type: "link",
        raw: r[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  inlineText(e, t) {
    const r = this.rules.inline.text.exec(e);
    if (r) {
      let n;
      return this.lexer.state.inRawBlock ? n = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : Te(r[0]) : r[0] : n = Te(this.options.smartypants ? t(r[0]) : r[0]), {
        type: "text",
        raw: r[0],
        text: n
      };
    }
  }
}
const V = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: hr,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
V._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
V._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
V.def = ue(V.def).replace("label", V._label).replace("title", V._title).getRegex();
V.bullet = /(?:[*+-]|\d{1,9}[.)])/;
V.listItemStart = ue(/^( *)(bull) */).replace("bull", V.bullet).getRegex();
V.list = ue(V.list).replace(/bull/g, V.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + V.def.source + ")").getRegex();
V._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
V._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
V.html = ue(V.html, "i").replace("comment", V._comment).replace("tag", V._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
V.paragraph = ue(V._paragraph).replace("hr", V.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", V._tag).getRegex();
V.blockquote = ue(V.blockquote).replace("paragraph", V.paragraph).getRegex();
V.normal = je({}, V);
V.gfm = je({}, V.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
});
V.gfm.table = ue(V.gfm.table).replace("hr", V.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", V._tag).getRegex();
V.gfm.paragraph = ue(V._paragraph).replace("hr", V.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", V.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", V._tag).getRegex();
V.pedantic = je({}, V.normal, {
  html: ue(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", V._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: hr,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: ue(V.normal._paragraph).replace("hr", V.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", V.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const q = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: hr,
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
  del: hr,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
q._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
q.punctuation = ue(q.punctuation).replace(/punctuation/g, q._punctuation).getRegex();
q.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
q.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
q._comment = ue(V._comment).replace("(?:-->|$)", "-->").getRegex();
q.emStrong.lDelim = ue(q.emStrong.lDelim).replace(/punct/g, q._punctuation).getRegex();
q.emStrong.rDelimAst = ue(q.emStrong.rDelimAst, "g").replace(/punct/g, q._punctuation).getRegex();
q.emStrong.rDelimUnd = ue(q.emStrong.rDelimUnd, "g").replace(/punct/g, q._punctuation).getRegex();
q._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
q._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
q._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
q.autolink = ue(q.autolink).replace("scheme", q._scheme).replace("email", q._email).getRegex();
q._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
q.tag = ue(q.tag).replace("comment", q._comment).replace("attribute", q._attribute).getRegex();
q._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
q._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
q._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
q.link = ue(q.link).replace("label", q._label).replace("href", q._href).replace("title", q._title).getRegex();
q.reflink = ue(q.reflink).replace("label", q._label).replace("ref", V._label).getRegex();
q.nolink = ue(q.nolink).replace("ref", V._label).getRegex();
q.reflinkSearch = ue(q.reflinkSearch, "g").replace("reflink", q.reflink).replace("nolink", q.nolink).getRegex();
q.normal = je({}, q);
q.pedantic = je({}, q.normal, {
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
  link: ue(/^!?\[(label)\]\((.*?)\)/).replace("label", q._label).getRegex(),
  reflink: ue(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q._label).getRegex()
});
q.gfm = je({}, q.normal, {
  escape: ue(q.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
q.gfm.url = ue(q.gfm.url, "i").replace("email", q.gfm._extended_email).getRegex();
q.breaks = je({}, q.gfm, {
  br: ue(q.br).replace("{2,}", "*").getRegex(),
  text: ue(q.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function di(a) {
  return a.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function C0(a) {
  let e = "", t, r;
  const n = a.length;
  for (t = 0; t < n; t++)
    r = a.charCodeAt(t), Math.random() > 0.5 && (r = "x" + r.toString(16)), e += "&#" + r + ";";
  return e;
}
let Ct = class qr {
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Dt, this.options.tokenizer = this.options.tokenizer || new t0(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: V.normal,
      inline: q.normal
    };
    this.options.pedantic ? (t.block = V.pedantic, t.inline = q.pedantic) : this.options.gfm && (t.block = V.gfm, this.options.breaks ? t.inline = q.breaks : t.inline = q.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: V,
      inline: q
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new qr(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new qr(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let t;
    for (; t = this.inlineQueue.shift(); )
      this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (u, c, p) => c + "    ".repeat(p.length));
    let r, n, i, l;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((u) => (r = u.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && (n.type === "paragraph" || n.type === "text") ? (n.raw += `
` + r.raw, n.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && (n.type === "paragraph" || n.type === "text") ? (n.raw += `
` + r.raw, n.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startBlock) {
          let u = 1 / 0;
          const c = e.slice(1);
          let p;
          this.options.extensions.startBlock.forEach(function(m) {
            p = m.call({ lexer: this }, c), typeof p == "number" && p >= 0 && (u = Math.min(u, p));
          }), u < 1 / 0 && u >= 0 && (i = e.substring(0, u + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(i))) {
          n = t[t.length - 1], l && n.type === "paragraph" ? (n.raw += `
` + r.raw, n.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(r), l = i.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && n.type === "text" ? (n.raw += `
` + r.raw, n.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(r);
          continue;
        }
        if (e) {
          const u = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(u);
            break;
          } else
            throw new Error(u);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let r, n, i, l = e, u, c, p;
    if (this.tokens.links) {
      const m = Object.keys(this.tokens.links);
      if (m.length > 0)
        for (; (u = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          m.includes(u[0].slice(u[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, u.index) + "[" + _0("a", u[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (u = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, u.index) + "[" + _0("a", u[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (u = this.tokenizer.rules.inline.escapedEmSt.exec(l)) != null; )
      l = l.slice(0, u.index + u[0].length - 2) + "++" + l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    for (; e; )
      if (c || (p = ""), c = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((m) => (r = m.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && r.type === "text" && n.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), n = t[t.length - 1], n && r.type === "text" && n.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, l, p)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e, C0)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e, C0))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let m = 1 / 0;
          const b = e.slice(1);
          let x;
          this.options.extensions.startInline.forEach(function(v) {
            x = v.call({ lexer: this }, b), typeof x == "number" && x >= 0 && (m = Math.min(m, x));
          }), m < 1 / 0 && m >= 0 && (i = e.substring(0, m + 1));
        }
        if (r = this.tokenizer.inlineText(i, di)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (p = r.raw.slice(-1)), c = !0, n = t[t.length - 1], n && n.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          const m = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(m);
            break;
          } else
            throw new Error(m);
        }
      }
    return t;
  }
};
class r0 {
  constructor(e) {
    this.options = e || Dt;
  }
  code(e, t, r) {
    const n = (t || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const i = this.options.highlight(e, n);
      i != null && i !== e && (r = !0, e = i);
    }
    return e = e.replace(/\n$/, "") + `
`, n ? '<pre><code class="' + this.options.langPrefix + Te(n) + '">' + (r ? e : Te(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : Te(e, !0)) + `</code></pre>
`;
  }
  /**
   * @param {string} quote
   */
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e) {
    return e;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(e, t, r, n) {
    if (this.options.headerIds) {
      const i = this.options.headerPrefix + n.slug(r);
      return `<h${t} id="${i}">${e}</h${t}>
`;
    }
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(e, t, r) {
    const n = t ? "ol" : "ul", i = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + n + i + `>
` + e + "</" + n + `>
`;
  }
  /**
   * @param {string} text
   */
  listitem(e) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  /**
   * @param {string} content
   */
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(e) {
    return `<em>${e}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(e) {
    return `<del>${e}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(e, t, r) {
    if (e = R0(this.options.sanitize, this.options.baseUrl, e), e === null)
      return r;
    let n = '<a href="' + e + '"';
    return t && (n += ' title="' + t + '"'), n += ">" + r + "</a>", n;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(e, t, r) {
    if (e = R0(this.options.sanitize, this.options.baseUrl, e), e === null)
      return r;
    let n = `<img src="${e}" alt="${r}"`;
    return t && (n += ` title="${t}"`), n += this.options.xhtml ? "/>" : ">", n;
  }
  text(e) {
    return e;
  }
}
class Ea {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class Sa {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(e) {
    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(e, t) {
    let r = e, n = 0;
    if (this.seen.hasOwnProperty(r)) {
      n = this.seen[e];
      do
        n++, r = e + "-" + n;
      while (this.seen.hasOwnProperty(r));
    }
    return t || (this.seen[e] = n, this.seen[r] = 0), r;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(e, t = {}) {
    const r = this.serialize(e);
    return this.getNextSafeSlug(r, t.dryrun);
  }
}
let It = class Hr {
  constructor(e) {
    this.options = e || Dt, this.options.renderer = this.options.renderer || new r0(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ea(), this.slugger = new Sa();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new Hr(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new Hr(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let r = "", n, i, l, u, c, p, m, b, x, v, k, E, O, N, w, S, A, I, R;
    const D = e.length;
    for (n = 0; n < D; n++) {
      if (v = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[v.type] && (R = this.options.extensions.renderers[v.type].call({ parser: this }, v), R !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(v.type))) {
        r += R || "";
        continue;
      }
      switch (v.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          r += this.renderer.heading(
            this.parseInline(v.tokens),
            v.depth,
            wa(this.parseInline(v.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          r += this.renderer.code(
            v.text,
            v.lang,
            v.escaped
          );
          continue;
        }
        case "table": {
          for (b = "", m = "", u = v.header.length, i = 0; i < u; i++)
            m += this.renderer.tablecell(
              this.parseInline(v.header[i].tokens),
              { header: !0, align: v.align[i] }
            );
          for (b += this.renderer.tablerow(m), x = "", u = v.rows.length, i = 0; i < u; i++) {
            for (p = v.rows[i], m = "", c = p.length, l = 0; l < c; l++)
              m += this.renderer.tablecell(
                this.parseInline(p[l].tokens),
                { header: !1, align: v.align[l] }
              );
            x += this.renderer.tablerow(m);
          }
          r += this.renderer.table(b, x);
          continue;
        }
        case "blockquote": {
          x = this.parse(v.tokens), r += this.renderer.blockquote(x);
          continue;
        }
        case "list": {
          for (k = v.ordered, E = v.start, O = v.loose, u = v.items.length, x = "", i = 0; i < u; i++)
            w = v.items[i], S = w.checked, A = w.task, N = "", w.task && (I = this.renderer.checkbox(S), O ? w.tokens.length > 0 && w.tokens[0].type === "paragraph" ? (w.tokens[0].text = I + " " + w.tokens[0].text, w.tokens[0].tokens && w.tokens[0].tokens.length > 0 && w.tokens[0].tokens[0].type === "text" && (w.tokens[0].tokens[0].text = I + " " + w.tokens[0].tokens[0].text)) : w.tokens.unshift({
              type: "text",
              text: I
            }) : N += I), N += this.parse(w.tokens, O), x += this.renderer.listitem(N, A, S);
          r += this.renderer.list(x, k, E);
          continue;
        }
        case "html": {
          r += this.renderer.html(v.text);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(this.parseInline(v.tokens));
          continue;
        }
        case "text": {
          for (x = v.tokens ? this.parseInline(v.tokens) : v.text; n + 1 < D && e[n + 1].type === "text"; )
            v = e[++n], x += `
` + (v.tokens ? this.parseInline(v.tokens) : v.text);
          r += t ? this.renderer.paragraph(x) : x;
          continue;
        }
        default: {
          const H = 'Token with "' + v.type + '" type was not found.';
          if (this.options.silent) {
            console.error(H);
            return;
          } else
            throw new Error(H);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "", n, i, l;
    const u = e.length;
    for (n = 0; n < u; n++) {
      if (i = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type] && (l = this.options.extensions.renderers[i.type].call({ parser: this }, i), l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type))) {
        r += l || "";
        continue;
      }
      switch (i.type) {
        case "escape": {
          r += t.text(i.text);
          break;
        }
        case "html": {
          r += t.html(i.text);
          break;
        }
        case "link": {
          r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          r += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          r += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          r += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          r += t.codespan(i.text);
          break;
        }
        case "br": {
          r += t.br();
          break;
        }
        case "del": {
          r += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          r += t.text(i.text);
          break;
        }
        default: {
          const c = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) {
            console.error(c);
            return;
          } else
            throw new Error(c);
        }
      }
    }
    return r;
  }
};
function j(a, e, t) {
  if (typeof a > "u" || a === null)
    throw new Error("marked(): input parameter is undefined or null");
  if (typeof a != "string")
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
  if (typeof e == "function" && (t = e, e = null), e = je({}, j.defaults, e || {}), xa(e), t) {
    const n = e.highlight;
    let i;
    try {
      i = Ct.lex(a, e);
    } catch (c) {
      return t(c);
    }
    const l = function(c) {
      let p;
      if (!c)
        try {
          e.walkTokens && j.walkTokens(i, e.walkTokens), p = It.parse(i, e);
        } catch (m) {
          c = m;
        }
      return e.highlight = n, c ? t(c) : t(null, p);
    };
    if (!n || n.length < 3 || (delete e.highlight, !i.length))
      return l();
    let u = 0;
    j.walkTokens(i, function(c) {
      c.type === "code" && (u++, setTimeout(() => {
        n(c.text, c.lang, function(p, m) {
          if (p)
            return l(p);
          m != null && m !== c.text && (c.text = m, c.escaped = !0), u--, u === 0 && l();
        });
      }, 0));
    }), u === 0 && l();
    return;
  }
  function r(n) {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e.silent)
      return "<p>An error occurred:</p><pre>" + Te(n.message + "", !0) + "</pre>";
    throw n;
  }
  try {
    const n = Ct.lex(a, e);
    if (e.walkTokens) {
      if (e.async)
        return Promise.all(j.walkTokens(n, e.walkTokens)).then(() => It.parse(n, e)).catch(r);
      j.walkTokens(n, e.walkTokens);
    }
    return It.parse(n, e);
  } catch (n) {
    r(n);
  }
}
j.options = j.setOptions = function(a) {
  return je(j.defaults, a), Zn(j.defaults), j;
};
j.getDefaults = ba;
j.defaults = Dt;
j.use = function(...a) {
  const e = j.defaults.extensions || { renderers: {}, childTokens: {} };
  a.forEach((t) => {
    const r = je({}, t);
    if (r.async = j.defaults.async || r.async, t.extensions && (t.extensions.forEach((n) => {
      if (!n.name)
        throw new Error("extension name required");
      if (n.renderer) {
        const i = e.renderers[n.name];
        i ? e.renderers[n.name] = function(...l) {
          let u = n.renderer.apply(this, l);
          return u === !1 && (u = i.apply(this, l)), u;
        } : e.renderers[n.name] = n.renderer;
      }
      if (n.tokenizer) {
        if (!n.level || n.level !== "block" && n.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        e[n.level] ? e[n.level].unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
      }
      n.childTokens && (e.childTokens[n.name] = n.childTokens);
    }), r.extensions = e), t.renderer) {
      const n = j.defaults.renderer || new r0();
      for (const i in t.renderer) {
        const l = n[i];
        n[i] = (...u) => {
          let c = t.renderer[i].apply(n, u);
          return c === !1 && (c = l.apply(n, u)), c;
        };
      }
      r.renderer = n;
    }
    if (t.tokenizer) {
      const n = j.defaults.tokenizer || new t0();
      for (const i in t.tokenizer) {
        const l = n[i];
        n[i] = (...u) => {
          let c = t.tokenizer[i].apply(n, u);
          return c === !1 && (c = l.apply(n, u)), c;
        };
      }
      r.tokenizer = n;
    }
    if (t.walkTokens) {
      const n = j.defaults.walkTokens;
      r.walkTokens = function(i) {
        let l = [];
        return l.push(t.walkTokens.call(this, i)), n && (l = l.concat(n.call(this, i))), l;
      };
    }
    j.setOptions(r);
  });
};
j.walkTokens = function(a, e) {
  let t = [];
  for (const r of a)
    switch (t = t.concat(e.call(j, r)), r.type) {
      case "table": {
        for (const n of r.header)
          t = t.concat(j.walkTokens(n.tokens, e));
        for (const n of r.rows)
          for (const i of n)
            t = t.concat(j.walkTokens(i.tokens, e));
        break;
      }
      case "list": {
        t = t.concat(j.walkTokens(r.items, e));
        break;
      }
      default:
        j.defaults.extensions && j.defaults.extensions.childTokens && j.defaults.extensions.childTokens[r.type] ? j.defaults.extensions.childTokens[r.type].forEach(function(n) {
          t = t.concat(j.walkTokens(r[n], e));
        }) : r.tokens && (t = t.concat(j.walkTokens(r.tokens, e)));
    }
  return t;
};
j.parseInline = function(a, e) {
  if (typeof a > "u" || a === null)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if (typeof a != "string")
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
  e = je({}, j.defaults, e || {}), xa(e);
  try {
    const t = Ct.lexInline(a, e);
    return e.walkTokens && j.walkTokens(t, e.walkTokens), It.parseInline(t, e);
  } catch (t) {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, e.silent)
      return "<p>An error occurred:</p><pre>" + Te(t.message + "", !0) + "</pre>";
    throw t;
  }
};
j.Parser = It;
j.parser = It.parse;
j.Renderer = r0;
j.TextRenderer = Ea;
j.Lexer = Ct;
j.lexer = Ct.lex;
j.Tokenizer = t0;
j.Slugger = Sa;
j.parse = j;
j.options;
j.setOptions;
j.use;
j.walkTokens;
j.parseInline;
It.parse;
Ct.lex;
const hi = {
  class: "outline"
}, pi = ["href"], mi = {
  name: "MarkdownOutline"
}, fi = /* @__PURE__ */ e0({
  ...mi,
  props: {
    markdownText: {
      type: String,
      required: !0
    }
  },
  setup(a) {
    const e = a;
    function t(n) {
      const i = [], l = /<h([1-6]) id="(.*?)">/g;
      let u;
      for (; u = l.exec(n); ) {
        const c = u[1], p = u[2];
        i.push({
          level: c,
          text: p
        });
      }
      return i;
    }
    nt(() => e.markdownText, () => {
      r.value = t(j.parse(e.markdownText));
    });
    let r = be([]);
    return (n, i) => (Se(), ke("ul", hi, [(Se(!0), ke(At, null, Pt(ft(r), (l) => (Se(), ke("li", {
      key: l.text
    }, [ce("a", {
      style: Ur("padding-left: " + (l.level - 1) + "em;"),
      href: `#${l.text}`
    }, Be(l.text), 13, pi)]))), 128))]));
  }
});
var M0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gr = {}, gi = {
  get exports() {
    return Gr;
  },
  set exports(a) {
    Gr = a;
  }
};
(function(a) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(r) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, l = {}, u = {
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
      manual: r.Prism && r.Prism.manual,
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
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
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
        encode: function w(S) {
          return S instanceof c ? new c(S.type, w(S.content), S.alias) : Array.isArray(S) ? S.map(w) : S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
        type: function(w) {
          return Object.prototype.toString.call(w).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(w) {
          return w.__id || Object.defineProperty(w, "__id", { value: ++i }), w.__id;
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
        clone: function w(S, A) {
          A = A || {};
          var I, R;
          switch (u.util.type(S)) {
            case "Object":
              if (R = u.util.objId(S), A[R])
                return A[R];
              I = /** @type {Record<string, any>} */
              {}, A[R] = I;
              for (var D in S)
                S.hasOwnProperty(D) && (I[D] = w(S[D], A));
              return (
                /** @type {any} */
                I
              );
            case "Array":
              return R = u.util.objId(S), A[R] ? A[R] : (I = [], A[R] = I, /** @type {Array} */
              /** @type {any} */
              S.forEach(function(H, B) {
                I[B] = w(H, A);
              }), /** @type {any} */
              I);
            default:
              return S;
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
        getLanguage: function(w) {
          for (; w; ) {
            var S = n.exec(w.className);
            if (S)
              return S[1].toLowerCase();
            w = w.parentElement;
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
        setLanguage: function(w, S) {
          w.className = w.className.replace(RegExp(n, "gi"), ""), w.classList.add("language-" + S);
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
          } catch (I) {
            var w = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(I.stack) || [])[1];
            if (w) {
              var S = document.getElementsByTagName("script");
              for (var A in S)
                if (S[A].src == w)
                  return S[A];
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
        isActive: function(w, S, A) {
          for (var I = "no-" + S; w; ) {
            var R = w.classList;
            if (R.contains(S))
              return !0;
            if (R.contains(I))
              return !1;
            w = w.parentElement;
          }
          return !!A;
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
        extend: function(w, S) {
          var A = u.util.clone(u.languages[w]);
          for (var I in S)
            A[I] = S[I];
          return A;
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
        insertBefore: function(w, S, A, I) {
          I = I || /** @type {any} */
          u.languages;
          var R = I[w], D = {};
          for (var H in R)
            if (R.hasOwnProperty(H)) {
              if (H == S)
                for (var B in A)
                  A.hasOwnProperty(B) && (D[B] = A[B]);
              A.hasOwnProperty(H) || (D[H] = R[H]);
            }
          var ae = I[w];
          return I[w] = D, u.languages.DFS(u.languages, function(ee, ne) {
            ne === ae && ee != w && (this[ee] = D);
          }), D;
        },
        // Traverse a language definition with Depth First Search
        DFS: function w(S, A, I, R) {
          R = R || {};
          var D = u.util.objId;
          for (var H in S)
            if (S.hasOwnProperty(H)) {
              A.call(S, H, S[H], I || H);
              var B = S[H], ae = u.util.type(B);
              ae === "Object" && !R[D(B)] ? (R[D(B)] = !0, w(B, A, null, R)) : ae === "Array" && !R[D(B)] && (R[D(B)] = !0, w(B, A, H, R));
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
      highlightAll: function(w, S) {
        u.highlightAllUnder(document, w, S);
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
      highlightAllUnder: function(w, S, A) {
        var I = {
          callback: A,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        u.hooks.run("before-highlightall", I), I.elements = Array.prototype.slice.apply(I.container.querySelectorAll(I.selector)), u.hooks.run("before-all-elements-highlight", I);
        for (var R = 0, D; D = I.elements[R++]; )
          u.highlightElement(D, S === !0, I.callback);
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
      highlightElement: function(w, S, A) {
        var I = u.util.getLanguage(w), R = u.languages[I];
        u.util.setLanguage(w, I);
        var D = w.parentElement;
        D && D.nodeName.toLowerCase() === "pre" && u.util.setLanguage(D, I);
        var H = w.textContent, B = {
          element: w,
          language: I,
          grammar: R,
          code: H
        };
        function ae(ne) {
          B.highlightedCode = ne, u.hooks.run("before-insert", B), B.element.innerHTML = B.highlightedCode, u.hooks.run("after-highlight", B), u.hooks.run("complete", B), A && A.call(B.element);
        }
        if (u.hooks.run("before-sanity-check", B), D = B.element.parentElement, D && D.nodeName.toLowerCase() === "pre" && !D.hasAttribute("tabindex") && D.setAttribute("tabindex", "0"), !B.code) {
          u.hooks.run("complete", B), A && A.call(B.element);
          return;
        }
        if (u.hooks.run("before-highlight", B), !B.grammar) {
          ae(u.util.encode(B.code));
          return;
        }
        if (S && r.Worker) {
          var ee = new Worker(u.filename);
          ee.onmessage = function(ne) {
            ae(ne.data);
          }, ee.postMessage(JSON.stringify({
            language: B.language,
            code: B.code,
            immediateClose: !0
          }));
        } else
          ae(u.highlight(B.code, B.grammar, B.language));
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
      highlight: function(w, S, A) {
        var I = {
          code: w,
          grammar: S,
          language: A
        };
        if (u.hooks.run("before-tokenize", I), !I.grammar)
          throw new Error('The language "' + I.language + '" has no grammar.');
        return I.tokens = u.tokenize(I.code, I.grammar), u.hooks.run("after-tokenize", I), c.stringify(u.util.encode(I.tokens), I.language);
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
      tokenize: function(w, S) {
        var A = S.rest;
        if (A) {
          for (var I in A)
            S[I] = A[I];
          delete S.rest;
        }
        var R = new b();
        return x(R, R.head, w), m(w, R, S, R.head, 0), k(R);
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
        add: function(w, S) {
          var A = u.hooks.all;
          A[w] = A[w] || [], A[w].push(S);
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
        run: function(w, S) {
          var A = u.hooks.all[w];
          if (!(!A || !A.length))
            for (var I = 0, R; R = A[I++]; )
              R(S);
        }
      },
      Token: c
    };
    r.Prism = u;
    function c(w, S, A, I) {
      this.type = w, this.content = S, this.alias = A, this.length = (I || "").length | 0;
    }
    c.stringify = function w(S, A) {
      if (typeof S == "string")
        return S;
      if (Array.isArray(S)) {
        var I = "";
        return S.forEach(function(ae) {
          I += w(ae, A);
        }), I;
      }
      var R = {
        type: S.type,
        content: w(S.content, A),
        tag: "span",
        classes: ["token", S.type],
        attributes: {},
        language: A
      }, D = S.alias;
      D && (Array.isArray(D) ? Array.prototype.push.apply(R.classes, D) : R.classes.push(D)), u.hooks.run("wrap", R);
      var H = "";
      for (var B in R.attributes)
        H += " " + B + '="' + (R.attributes[B] || "").replace(/"/g, "&quot;") + '"';
      return "<" + R.tag + ' class="' + R.classes.join(" ") + '"' + H + ">" + R.content + "</" + R.tag + ">";
    };
    function p(w, S, A, I) {
      w.lastIndex = S;
      var R = w.exec(A);
      if (R && I && R[1]) {
        var D = R[1].length;
        R.index += D, R[0] = R[0].slice(D);
      }
      return R;
    }
    function m(w, S, A, I, R, D) {
      for (var H in A)
        if (!(!A.hasOwnProperty(H) || !A[H])) {
          var B = A[H];
          B = Array.isArray(B) ? B : [B];
          for (var ae = 0; ae < B.length; ++ae) {
            if (D && D.cause == H + "," + ae)
              return;
            var ee = B[ae], ne = ee.inside, Ae = !!ee.lookbehind, he = !!ee.greedy, xe = ee.alias;
            if (he && !ee.pattern.global) {
              var Ie = ee.pattern.toString().match(/[imsuy]*$/)[0];
              ee.pattern = RegExp(ee.pattern.source, Ie + "g");
            }
            for (var _e = ee.pattern || ee, ie = I.next, G = R; ie !== S.tail && !(D && G >= D.reach); G += ie.value.length, ie = ie.next) {
              var se = ie.value;
              if (S.length > w.length)
                return;
              if (!(se instanceof c)) {
                var me = 1, le;
                if (he) {
                  if (le = p(_e, G, w, Ae), !le || le.index >= w.length)
                    break;
                  var tt = le.index, et = le.index + le[0].length, Oe = G;
                  for (Oe += ie.value.length; tt >= Oe; )
                    ie = ie.next, Oe += ie.value.length;
                  if (Oe -= ie.value.length, G = Oe, ie.value instanceof c)
                    continue;
                  for (var Ce = ie; Ce !== S.tail && (Oe < et || typeof Ce.value == "string"); Ce = Ce.next)
                    me++, Oe += Ce.value.length;
                  me--, se = w.slice(G, Oe), le.index -= G;
                } else if (le = p(_e, 0, se, Ae), !le)
                  continue;
                var tt = le.index, Me = le[0], _ = se.slice(0, tt), z = se.slice(tt + Me.length), U = G + se.length;
                D && U > D.reach && (D.reach = U);
                var W = ie.prev;
                _ && (W = x(S, W, _), G += _.length), v(S, W, me);
                var K = new c(H, ne ? u.tokenize(Me, ne) : Me, xe, Me);
                if (ie = x(S, W, K), z && x(S, ie, z), me > 1) {
                  var te = {
                    cause: H + "," + ae,
                    reach: U
                  };
                  m(w, S, A, ie.prev, G, te), D && te.reach > D.reach && (D.reach = te.reach);
                }
              }
            }
          }
        }
    }
    function b() {
      var w = { value: null, prev: null, next: null }, S = { value: null, prev: w, next: null };
      w.next = S, this.head = w, this.tail = S, this.length = 0;
    }
    function x(w, S, A) {
      var I = S.next, R = { value: A, prev: S, next: I };
      return S.next = R, I.prev = R, w.length++, R;
    }
    function v(w, S, A) {
      for (var I = S.next, R = 0; R < A && I !== w.tail; R++)
        I = I.next;
      S.next = I, I.prev = S, w.length -= R;
    }
    function k(w) {
      for (var S = [], A = w.head.next; A !== w.tail; )
        S.push(A.value), A = A.next;
      return S;
    }
    if (!r.document)
      return r.addEventListener && (u.disableWorkerMessageHandler || r.addEventListener("message", function(w) {
        var S = JSON.parse(w.data), A = S.language, I = S.code, R = S.immediateClose;
        r.postMessage(u.highlight(I, u.languages[A], A)), R && r.close();
      }, !1)), u;
    var E = u.util.currentScript();
    E && (u.filename = E.src, E.hasAttribute("data-manual") && (u.manual = !0));
    function O() {
      u.manual || u.highlightAll();
    }
    if (!u.manual) {
      var N = document.readyState;
      N === "loading" || N === "interactive" && E && E.defer ? document.addEventListener("DOMContentLoaded", O) : window.requestAnimationFrame ? window.requestAnimationFrame(O) : window.setTimeout(O, 16);
    }
    return u;
  }(e);
  a.exports && (a.exports = t), typeof M0 < "u" && (M0.Prism = t);
})(gi);
const D0 = Gr;
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
  value: function(e, t) {
    var r = {};
    r["language-" + t] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[t]
    }, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: r
      }
    };
    n["language-" + t] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[t]
    };
    var i = {};
    i[e] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return e;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: n
    }, Prism.languages.insertBefore("markup", "cdata", i);
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
  value: function(a, e) {
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
              alias: [e, "language-" + e],
              inside: Prism.languages[e]
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
  var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  a.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + e.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
      pattern: RegExp("\\burl\\((?:" + e.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: e,
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
  var t = a.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
(function(a) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, t;
  a.languages.css.selector = {
    pattern: a.languages.css.selector.pattern,
    lookbehind: !0,
    inside: t = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + e.source + ")*\\]"),
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
            e,
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
  }, a.languages.css.atrule.inside["selector-function-argument"].inside = t, a.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: !0
    }
  });
  var r = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: !0
  }, n = {
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
          unit: r,
          number: n,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/
        }
      }
    ],
    // it's important that there is no boundary assertion after the hex digits
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: n
  });
})(Prism);
(function(a) {
  var e = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, r = "(?:" + t.source + "(?:[ 	]+" + e.source + ")?|" + e.source + "(?:[ 	]+" + t.source + ")?)", n = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function l(u, c) {
    c = (c || "").replace(/m/g, "") + "m";
    var p = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return r;
    }).replace(/<<value>>/g, function() {
      return u;
    });
    return RegExp(p, c);
  }
  a.languages.yaml = {
    scalar: {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return r;
      })),
      lookbehind: !0,
      alias: "string"
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return r;
      }).replace(/<<key>>/g, function() {
        return "(?:" + n + "|" + i + ")";
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
      pattern: l(i),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: l(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: !0
    },
    tag: t,
    important: e,
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
Prism.hooks.add("after-tokenize", function(e) {
  if (e.language !== "graphql")
    return;
  var t = e.tokens.filter(function(E) {
    return typeof E != "string" && E.type !== "comment" && E.type !== "scalar";
  }), r = 0;
  function n(E) {
    return t[r + E];
  }
  function i(E, O) {
    O = O || 0;
    for (var N = 0; N < E.length; N++) {
      var w = n(N + O);
      if (!w || w.type !== E[N])
        return !1;
    }
    return !0;
  }
  function l(E, O) {
    for (var N = 1, w = r; w < t.length; w++) {
      var S = t[w], A = S.content;
      if (S.type === "punctuation" && typeof A == "string") {
        if (E.test(A))
          N++;
        else if (O.test(A) && (N--, N === 0))
          return w;
      }
    }
    return -1;
  }
  function u(E, O) {
    var N = E.alias;
    N ? Array.isArray(N) || (E.alias = N = [N]) : E.alias = N = [], N.push(O);
  }
  for (; r < t.length; ) {
    var c = t[r++];
    if (c.type === "keyword" && c.content === "mutation") {
      var p = [];
      if (i(["definition-mutation", "punctuation"]) && n(1).content === "(") {
        r += 2;
        var m = l(/^\($/, /^\)$/);
        if (m === -1)
          continue;
        for (; r < m; r++) {
          var b = n(0);
          b.type === "variable" && (u(b, "variable-input"), p.push(b.content));
        }
        r = m + 1;
      }
      if (i(["punctuation", "property-query"]) && n(0).content === "{" && (r++, u(n(0), "property-mutation"), p.length > 0)) {
        var x = l(/^\{$/, /^\}$/);
        if (x === -1)
          continue;
        for (var v = r; v < x; v++) {
          var k = t[v];
          k.type === "variable" && p.indexOf(k.content) >= 0 && u(k, "variable-input");
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
  var e = a.languages.extend("typescript", {});
  delete e["class-name"], a.languages.typescript["class-name"].inside = e, a.languages.insertBefore("typescript", "function", {
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
          inside: e
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
  var e = /\$[-\w]+|#\{\$[-\w]+\}/, t = [
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
        variable: e,
        operator: t
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
        variable: e,
        operator: t,
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
  function e(p) {
    return RegExp("(^(?:" + p + "):[ 	]*(?![ 	]))[^]+", "i");
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
            pattern: e(/Content-Security-Policy/.source),
            lookbehind: !0,
            alias: ["csp", "languages-csp"],
            inside: a.languages.csp
          },
          {
            pattern: e(/Public-Key-Pins(?:-Report-Only)?/.source),
            lookbehind: !0,
            alias: ["hpkp", "languages-hpkp"],
            inside: a.languages.hpkp
          },
          {
            pattern: e(/Strict-Transport-Security/.source),
            lookbehind: !0,
            alias: ["hsts", "languages-hsts"],
            inside: a.languages.hsts
          },
          {
            pattern: e(/[^:]+/.source),
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
  var t = a.languages, r = {
    "application/javascript": t.javascript,
    "application/json": t.json || t.javascript,
    "application/xml": t.xml,
    "text/xml": t.xml,
    "text/html": t.html,
    "text/css": t.css,
    "text/plain": t.plain
  }, n = {
    "application/json": !0,
    "application/xml": !0
  };
  function i(p) {
    var m = p.replace(/^[a-z]+\//, ""), b = "\\w+/(?:[\\w.-]+\\+)+" + m + "(?![+\\w.-])";
    return "(?:" + p + "|" + b + ")";
  }
  var l;
  for (var u in r)
    if (r[u]) {
      l = l || {};
      var c = n[u] ? i(u) : u;
      l[u.replace(/\//g, "-")] = {
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
        inside: r[u]
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
  var e = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return e.source;
  });
  a.languages.cpp = a.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return e.source;
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
    keyword: e,
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
          return t;
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
  for (var e = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    e = e.replace(/<self>/g, function() {
      return e;
    });
  e = e.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), a.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + e),
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
  function e(t, r) {
    return "___" + t.toUpperCase() + r + "___";
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
      value: function(t, r, n, i) {
        if (t.language === r) {
          var l = t.tokenStack = [];
          t.code = t.code.replace(n, function(u) {
            if (typeof i == "function" && !i(u))
              return u;
            for (var c = l.length, p; t.code.indexOf(p = e(r, c)) !== -1; )
              ++c;
            return l[c] = u, p;
          }), t.grammar = a.languages.markup;
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
      value: function(t, r) {
        if (t.language !== r || !t.tokenStack)
          return;
        t.grammar = a.languages[r];
        var n = 0, i = Object.keys(t.tokenStack);
        function l(u) {
          for (var c = 0; c < u.length && !(n >= i.length); c++) {
            var p = u[c];
            if (typeof p == "string" || p.content && typeof p.content == "string") {
              var m = i[n], b = t.tokenStack[m], x = typeof p == "string" ? p : p.content, v = e(r, m), k = x.indexOf(v);
              if (k > -1) {
                ++n;
                var E = x.substring(0, k), O = new a.Token(r, a.tokenize(b, t.grammar), "language-" + r, b), N = x.substring(k + v.length), w = [];
                E && w.push.apply(w, l([E])), w.push(O), N && w.push.apply(w, l([N])), typeof p == "string" ? u.splice.apply(u, [c, 1].concat(w)) : p.content = w;
              }
            } else
              p.content && l(p.content);
          }
          return u;
        }
        l(t.tokens);
      }
    }
  });
})(Prism);
(function(a) {
  var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, t = [
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
  ], r = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, i = /[{}\[\](),:;]/;
  a.languages.php = {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    },
    comment: e,
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
    constant: t,
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
    number: r,
    operator: n,
    punctuation: i
  };
  var l = {
    pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
    lookbehind: !0,
    inside: a.languages.php
  }, u = [
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
    string: u,
    attribute: {
      pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: !0,
      inside: {
        "attribute-content": {
          pattern: /^(#\[)[\s\S]+(?=\]$)/,
          lookbehind: !0,
          // inside can appear subset of php
          inside: {
            comment: e,
            string: u,
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
            constant: t,
            number: r,
            operator: n,
            punctuation: i
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
      var p = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
      a.languages["markup-templating"].buildPlaceholders(c, "php", p);
    }
  }), a.hooks.add("after-tokenize", function(c) {
    a.languages["markup-templating"].tokenizePlaceholders(c, "php");
  });
})(Prism);
(function(a) {
  var e = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
    pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
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
      r,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: r.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + t + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: r.inside
      }
    ],
    keyword: e,
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
        "class-name": r,
        keyword: e,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + t + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: r.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + t + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: r.inside.namespace,
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
          return e.source;
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
  var e = a.languages.javadoclike = {
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
  function t(n, i) {
    var l = "doc-comment", u = a.languages[n];
    if (u) {
      var c = u[l];
      if (!c) {
        var p = {};
        p[l] = {
          pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          alias: "comment"
        }, u = a.languages.insertBefore(n, "comment", p), c = u[l];
      }
      if (c instanceof RegExp && (c = u[l] = { pattern: c }), Array.isArray(c))
        for (var m = 0, b = c.length; m < b; m++)
          c[m] instanceof RegExp && (c[m] = { pattern: c[m] }), i(c[m]);
      else
        i(c);
    }
  }
  function r(n, i) {
    typeof n == "string" && (n = [n]), n.forEach(function(l) {
      t(l, function(u) {
        u.inside || (u.inside = {}), u.inside.rest = i;
      });
    });
  }
  Object.defineProperty(e, "addSupport", { value: r }), e.addSupport(["java", "javascript", "php"], e);
})(Prism);
(function(a) {
  var e = /(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;
  a.languages.phpdoc = a.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + e + "\\s+)?)\\$\\w+"),
      lookbehind: !0
    }
  }), a.languages.insertBefore("phpdoc", "keyword", {
    "class-name": [
      {
        pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + e),
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
  var e = /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/.source;
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
            e
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
            e
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
            e + /\s*/.source + e
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
  var e = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m, t = /#\s*\w+(?:\s*\([^()]*\))?/.source, r = /(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g, function() {
    return t;
  });
  a.languages.javadoc = a.languages.extend("javadoclike", {}), a.languages.insertBefore("javadoc", "keyword", {
    reference: {
      pattern: RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source + "(?:" + r + ")"),
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
            pattern: e,
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
            pattern: e,
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
  var e = {
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
        interpolation: e,
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
  }), e.inside.expression.inside = a.languages.groovy;
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
  var e = {
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
            inside: e
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
            inside: e
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
  var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, t = {
    "equation-command": {
      pattern: e,
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
        inside: t,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: t,
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
      pattern: e,
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
  var e = [
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
  ], t = [
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
  e = e.map(function(n) {
    return n.replace("$", "\\$");
  });
  var r = "(?:" + e.join("|") + ")\\b";
  a.languages.mongodb = a.languages.extend("javascript", {}), a.languages.insertBefore("mongodb", "string", {
    property: {
      pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
      greedy: !0,
      inside: {
        keyword: RegExp(`^(['"])?` + r + "(?:\\1)?$")
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
      pattern: RegExp("\\b(?:" + t.join("|") + ")\\b"),
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
  var e = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g, t = a.languages["markup-templating"];
  a.hooks.add("before-tokenize", function(r) {
    t.buildPlaceholders(r, "django", e);
  }), a.hooks.add("after-tokenize", function(r) {
    t.tokenizePlaceholders(r, "django");
  }), a.languages.jinja2 = a.languages.django, a.hooks.add("before-tokenize", function(r) {
    t.buildPlaceholders(r, "jinja2", e);
  }), a.hooks.add("after-tokenize", function(r) {
    t.tokenizePlaceholders(r, "jinja2");
  });
})(Prism);
(function(a) {
  function e(G, se) {
    return G.replace(/<<(\d+)>>/g, function(me, le) {
      return "(?:" + se[+le] + ")";
    });
  }
  function t(G, se, me) {
    return RegExp(e(G, se), me || "");
  }
  function r(G, se) {
    for (var me = 0; me < se; me++)
      G = G.replace(/<<self>>/g, function() {
        return "(?:" + G + ")";
      });
    return G.replace(/<<self>>/g, "[^\\s\\S]");
  }
  var n = {
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
  function i(G) {
    return "\\b(?:" + G.trim().replace(/ /g, "|") + ")\\b";
  }
  var l = i(n.typeDeclaration), u = RegExp(i(n.type + " " + n.typeDeclaration + " " + n.contextual + " " + n.other)), c = i(n.typeDeclaration + " " + n.contextual + " " + n.other), p = i(n.type + " " + n.typeDeclaration + " " + n.other), m = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2), b = r(/\((?:[^()]|<<self>>)*\)/.source, 2), x = /@?\b[A-Za-z_]\w*\b/.source, v = e(/<<0>>(?:\s*<<1>>)?/.source, [x, m]), k = e(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [c, v]), E = /\[\s*(?:,\s*)*\]/.source, O = e(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [k, E]), N = e(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [m, b, E]), w = e(/\(<<0>>+(?:,<<0>>+)+\)/.source, [N]), S = e(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [w, k, E]), A = {
    keyword: u,
    punctuation: /[<>()?,.:[\]]/
  }, I = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source, R = /"(?:\\.|[^\\"\r\n])*"/.source, D = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
  a.languages.csharp = a.languages.extend("clike", {
    string: [
      {
        pattern: t(/(^|[^$\\])<<0>>/.source, [D]),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: t(/(^|[^@$\\])<<0>>/.source, [R]),
        lookbehind: !0,
        greedy: !0
      }
    ],
    "class-name": [
      {
        // Using static
        // using static System.Math;
        pattern: t(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [k]),
        lookbehind: !0,
        inside: A
      },
      {
        // Using alias (type)
        // using Project = PC.MyCompany.Project;
        pattern: t(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [x, S]),
        lookbehind: !0,
        inside: A
      },
      {
        // Using alias (alias)
        // using Project = PC.MyCompany.Project;
        pattern: t(/(\busing\s+)<<0>>(?=\s*=)/.source, [x]),
        lookbehind: !0
      },
      {
        // Type declarations
        // class Foo<A, B>
        // interface Foo<out A, B>
        pattern: t(/(\b<<0>>\s+)<<1>>/.source, [l, v]),
        lookbehind: !0,
        inside: A
      },
      {
        // Single catch exception declaration
        // catch(Foo)
        // (things like catch(Foo e) is covered by variable declaration)
        pattern: t(/(\bcatch\s*\(\s*)<<0>>/.source, [k]),
        lookbehind: !0,
        inside: A
      },
      {
        // Name of the type parameter of generic constraints
        // where Foo : class
        pattern: t(/(\bwhere\s+)<<0>>/.source, [x]),
        lookbehind: !0
      },
      {
        // Casts and checks via as and is.
        // as Foo<A>, is Bar<B>
        // (things like if(a is Foo b) is covered by variable declaration)
        pattern: t(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [O]),
        lookbehind: !0,
        inside: A
      },
      {
        // Variable, field and parameter declaration
        // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
        pattern: t(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [S, p, x]),
        inside: A
      }
    ],
    keyword: u,
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
      pattern: t(/([(,]\s*)<<0>>(?=\s*:)/.source, [x]),
      lookbehind: !0,
      alias: "punctuation"
    }
  }), a.languages.insertBefore("csharp", "class-name", {
    namespace: {
      // namespace Foo.Bar {}
      // using Foo.Bar;
      pattern: t(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [x]),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    },
    "type-expression": {
      // default(Foo), typeof(Foo<Bar>), sizeof(int)
      pattern: t(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [b]),
      lookbehind: !0,
      alias: "class-name",
      inside: A
    },
    "return-type": {
      // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
      // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
      // int Foo => 0; int Foo { get; set } = 0;
      pattern: t(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [S, k]),
      inside: A,
      alias: "class-name"
    },
    "constructor-invocation": {
      // new List<Foo<Bar[]>> { }
      pattern: t(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [S]),
      lookbehind: !0,
      inside: A,
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
      pattern: t(/<<0>>\s*<<1>>(?=\s*\()/.source, [x, m]),
      inside: {
        function: t(/^<<0>>/.source, [x]),
        generic: {
          pattern: RegExp(m),
          alias: "class-name",
          inside: A
        }
      }
    },
    "type-list": {
      // The list of types inherited or of generic constraints
      // class Foo<F> : Bar, IList<FooBar>
      // where F : Bar, IList<int>
      pattern: t(
        /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
        [l, v, x, S, u.source, b, /\bnew\s*\(\s*\)/.source]
      ),
      lookbehind: !0,
      inside: {
        "record-arguments": {
          pattern: t(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [v, b]),
          lookbehind: !0,
          greedy: !0,
          inside: a.languages.csharp
        },
        keyword: u,
        "class-name": {
          pattern: RegExp(S),
          greedy: !0,
          inside: A
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
  var H = R + "|" + I, B = e(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [H]), ae = r(e(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [B]), 2), ee = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source, ne = e(/<<0>>(?:\s*\(<<1>>*\))?/.source, [k, ae]);
  a.languages.insertBefore("csharp", "class-name", {
    attribute: {
      // Attributes
      // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
      pattern: t(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [ee, ne]),
      lookbehind: !0,
      greedy: !0,
      inside: {
        target: {
          pattern: t(/^<<0>>(?=\s*:)/.source, [ee]),
          alias: "keyword"
        },
        "attribute-arguments": {
          pattern: t(/\(<<0>>*\)/.source, [ae]),
          inside: a.languages.csharp
        },
        "class-name": {
          pattern: RegExp(k),
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /[:,]/
      }
    }
  });
  var Ae = /:[^}\r\n]+/.source, he = r(e(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [B]), 2), xe = e(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [he, Ae]), Ie = r(e(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [H]), 2), _e = e(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [Ie, Ae]);
  function ie(G, se) {
    return {
      interpolation: {
        pattern: t(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [G]),
        lookbehind: !0,
        inside: {
          "format-string": {
            pattern: t(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [se, Ae]),
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
        pattern: t(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [xe]),
        lookbehind: !0,
        greedy: !0,
        inside: ie(xe, he)
      },
      {
        pattern: t(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [_e]),
        lookbehind: !0,
        greedy: !0,
        inside: ie(_e, Ie)
      }
    ],
    char: {
      pattern: RegExp(I),
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
  var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
  a.languages.json5 = a.languages.extend("json", {
    property: [
      {
        pattern: RegExp(e.source + "(?=\\s*:)"),
        greedy: !0
      },
      {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
        alias: "unquoted"
      }
    ],
    string: {
      pattern: e,
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
  var e = /(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;
  function t(r) {
    return r.replace(/__/g, function() {
      return e;
    });
  }
  a.languages.toml = {
    comment: {
      pattern: /#.*/,
      greedy: !0
    },
    table: {
      pattern: RegExp(t(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source), "m"),
      lookbehind: !0,
      greedy: !0,
      alias: "class-name"
    },
    key: {
      pattern: RegExp(t(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source), "m"),
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
  var e = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", t = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, r = {
    bash: t,
    environment: {
      pattern: RegExp("\\$" + e),
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
            pattern: RegExp("(\\{)" + e),
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
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + e),
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
        inside: r
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: t
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: r
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
          entity: r.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + e),
      alias: "constant"
    },
    variable: r.variable,
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
  }, t.inside = a.languages.bash;
  for (var n = [
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
  ], i = r.variable[1].inside, l = 0; l < n.length; l++)
    i[n[l]] = a.languages.bash[n[l]];
  a.languages.sh = a.languages.bash, a.languages.shell = a.languages.bash;
})(Prism);
(function(a) {
  var e = /%%?[~:\w]+%?|!\S+!/, t = {
    pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
    alias: "attr-name",
    inside: {
      punctuation: /:/
    }
  }, r = /"(?:[\\"]"|[^"])*"(?!")/, n = /(?:\b|-)\d+\b/;
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
          string: r,
          parameter: t,
          variable: e,
          number: n,
          punctuation: /[()',]/
        }
      },
      {
        // IF command
        pattern: /((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,
        lookbehind: !0,
        inside: {
          keyword: /\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,
          string: r,
          parameter: t,
          variable: e,
          number: n,
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
          string: r,
          parameter: t,
          variable: [
            e,
            /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/
          ],
          number: n,
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
          string: r,
          parameter: t,
          label: {
            pattern: /(^\s*):\S+/m,
            lookbehind: !0,
            alias: "property"
          },
          variable: e,
          number: n,
          operator: /\^/
        }
      }
    ],
    operator: /[&@]/,
    punctuation: /[()']/
  };
})(Prism);
(function(a) {
  var e = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source, t = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, function() {
    return e;
  }), r = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source, n = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, function() {
    return r;
  }), i = {
    pattern: RegExp(r),
    greedy: !0
  }, l = {
    pattern: /(^[ \t]*)#.*/m,
    lookbehind: !0,
    greedy: !0
  };
  function u(c, p) {
    return c = c.replace(/<OPT>/g, function() {
      return n;
    }).replace(/<SP>/g, function() {
      return t;
    }), RegExp(c, p);
  }
  a.languages.docker = {
    instruction: {
      pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
      lookbehind: !0,
      greedy: !0,
      inside: {
        options: {
          pattern: u(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"),
          lookbehind: !0,
          greedy: !0,
          inside: {
            property: {
              pattern: /(^|\s)--[\w-]+/,
              lookbehind: !0
            },
            string: [
              i,
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
            pattern: u(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"),
            lookbehind: !0,
            greedy: !0
          },
          {
            // https://docs.docker.com/engine/reference/builder/#from
            pattern: u(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"),
            lookbehind: !0,
            greedy: !0
          },
          {
            // https://docs.docker.com/engine/reference/builder/#onbuild
            pattern: u(/(^ONBUILD<SP>)\w+/.source, "i"),
            lookbehind: !0,
            greedy: !0
          },
          {
            pattern: /^\w+/,
            greedy: !0
          }
        ],
        comment: l,
        string: i,
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
  for (var e = /"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source, t = /\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\//.source, r = /(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source.replace(/<string>/g, function() {
    return e;
  }).replace(/<comment>/g, function() {
    return t;
  }), n = 0; n < 2; n++)
    r = r.replace(/<expr>/g, function() {
      return r;
    });
  r = r.replace(/<expr>/g, "[^\\s\\S]"), a.languages.qml = {
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
      greedy: !0
    },
    "javascript-function": {
      pattern: RegExp(/((?:^|;)[ \t]*)function\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(/<js>/g, function() {
        return r;
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
        return r;
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
      pattern: RegExp(e({
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
  function e(t) {
    for (var r in t)
      t[r] = t[r].replace(/<[\w\s]+>/g, function(n) {
        return "(?:" + t[n].trim() + ")";
      });
    return t[r];
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
class Fe {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, r) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Fe(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class qe {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new qe(t, Fe.range(this, e));
  }
}
class L {
  // Error position based on passed-in Token or ParseNode.
  constructor(e, t) {
    this.position = void 0;
    var r = "KaTeX parse error: " + e, n, i = t && t.loc;
    if (i && i.start <= i.end) {
      var l = i.lexer.input;
      n = i.start;
      var u = i.end;
      n === l.length ? r += " at end of input: " : r += " at position " + (n + 1) + ": ";
      var c = l.slice(n, u).replace(/[^]/g, "$&̲"), p;
      n > 15 ? p = "…" + l.slice(n - 15, n) : p = l.slice(0, n);
      var m;
      u + 15 < l.length ? m = l.slice(u, u + 15) + "…" : m = l.slice(u), r += p + c + m;
    }
    var b = new Error(r);
    return b.name = "ParseError", b.__proto__ = L.prototype, b.position = n, b;
  }
}
L.prototype.__proto__ = Error.prototype;
var bi = function(e, t) {
  return e.indexOf(t) !== -1;
}, vi = function(e, t) {
  return e === void 0 ? t : e;
}, yi = /([A-Z])/g, wi = function(e) {
  return e.replace(yi, "-$1").toLowerCase();
}, xi = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Ei = /[&><"']/g;
function Si(a) {
  return String(a).replace(Ei, (e) => xi[e]);
}
var ka = function a(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? a(e.body[0]) : e : e.type === "font" ? a(e.body) : e;
}, ki = function(e) {
  var t = ka(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, Ti = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Ai = function(e) {
  var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
  return t != null ? t[1] : "_relative";
}, Z = {
  contains: bi,
  deflt: vi,
  escape: Si,
  hyphenate: wi,
  getBaseElem: ka,
  isCharacterBox: ki,
  protocolFromUrl: Ai
}, cr = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (a) => "#" + a
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (a, e) => (e.push(a), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (a) => Math.max(0, a),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (a) => Math.max(0, a),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (a) => Math.max(0, a),
    cli: "-e, --max-expand <n>",
    cliProcessor: (a) => a === "Infinity" ? 1 / 0 : parseInt(a)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function Ii(a) {
  if (a.default)
    return a.default;
  var e = a.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class a0 {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in cr)
      if (cr.hasOwnProperty(t)) {
        var r = cr[t];
        this[t] = e[t] !== void 0 ? r.processor ? r.processor(e[t]) : e[t] : Ii(r);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, r) {
    var n = this.strict;
    if (typeof n == "function" && (n = n(e, t, r)), !(!n || n === "ignore")) {
      if (n === !0 || n === "error")
        throw new L("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
      n === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, r) {
    var n = this.strict;
    if (typeof n == "function")
      try {
        n = n(e, t, r);
      } catch {
        n = "error";
      }
    return !n || n === "ignore" ? !1 : n === !0 || n === "error" ? !0 : n === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    e.url && !e.protocol && (e.protocol = Z.protocolFromUrl(e.url));
    var t = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!t;
  }
}
class pt {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Ke[Ri[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Ke[Ni[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Ke[_i[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Ke[Oi[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Ke[Ci[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Ke[Mi[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var n0 = 0, pr = 1, Ot = 2, st = 3, Ut = 4, He = 5, Mt = 6, Re = 7, Ke = [new pt(n0, 0, !1), new pt(pr, 0, !0), new pt(Ot, 1, !1), new pt(st, 1, !0), new pt(Ut, 2, !1), new pt(He, 2, !0), new pt(Mt, 3, !1), new pt(Re, 3, !0)], Ri = [Ut, He, Ut, He, Mt, Re, Mt, Re], Ni = [He, He, He, He, Re, Re, Re, Re], _i = [Ot, st, Ut, He, Mt, Re, Mt, Re], Oi = [st, st, He, He, Re, Re, Re, Re], Ci = [pr, pr, st, st, He, He, Re, Re], Mi = [n0, pr, Ot, st, Ot, st, Ot, st], Y = {
  DISPLAY: Ke[n0],
  TEXT: Ke[Ot],
  SCRIPT: Ke[Ut],
  SCRIPTSCRIPT: Ke[Mt]
}, Yr = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function Di(a) {
  for (var e = 0; e < Yr.length; e++)
    for (var t = Yr[e], r = 0; r < t.blocks.length; r++) {
      var n = t.blocks[r];
      if (a >= n[0] && a <= n[1])
        return t.name;
    }
  return null;
}
var dr = [];
Yr.forEach((a) => a.blocks.forEach((e) => dr.push(...e)));
function Ta(a) {
  for (var e = 0; e < dr.length; e += 2)
    if (a >= dr[e] && a <= dr[e + 1])
      return !0;
  return !1;
}
var _t = 80, Li = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, zi = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Pi = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Bi = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, Fi = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, $i = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Ui = function(e, t, r) {
  var n = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, qi = function(e, t, r) {
  t = 1e3 * t;
  var n = "";
  switch (e) {
    case "sqrtMain":
      n = Li(t, _t);
      break;
    case "sqrtSize1":
      n = zi(t, _t);
      break;
    case "sqrtSize2":
      n = Pi(t, _t);
      break;
    case "sqrtSize3":
      n = Bi(t, _t);
      break;
    case "sqrtSize4":
      n = Fi(t, _t);
      break;
    case "sqrtTall":
      n = Ui(t, _t, r);
  }
  return n;
}, Hi = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, L0 = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, Gi = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class Gt {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var We = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, Qt = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.less; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, z0 = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function Yi(a, e) {
  We[a] = e;
}
function i0(a, e, t) {
  if (!We[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = a.charCodeAt(0), n = We[e][r];
  if (!n && a[0] in z0 && (r = z0[a[0]].charCodeAt(0), n = We[e][r]), !n && t === "text" && Ta(r) && (n = We[e][77]), n)
    return {
      depth: n[0],
      height: n[1],
      italic: n[2],
      skew: n[3],
      width: n[4]
    };
}
var Ir = {};
function Vi(a) {
  var e;
  if (a >= 5 ? e = 0 : a >= 3 ? e = 1 : e = 2, !Ir[e]) {
    var t = Ir[e] = {
      cssEmPerMu: Qt.quad[e] / 18
    };
    for (var r in Qt)
      Qt.hasOwnProperty(r) && (t[r] = Qt[r][e]);
  }
  return Ir[e];
}
var Xi = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], P0 = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], B0 = function(e, t) {
  return t.size < 2 ? e : Xi[e - 1][t.size - 1];
};
class it {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || it.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = P0[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
    return new it(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: B0(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: P0[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = B0(it.BASESIZE, e);
    return this.size === t && this.textSize === it.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== it.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + it.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Vi(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
it.BASESIZE = 6;
var Vr = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, ji = {
  ex: !0,
  em: !0,
  mu: !0
}, Aa = function(e) {
  return typeof e != "string" && (e = e.unit), e in Vr || e in ji || e === "ex";
}, ge = function(e, t) {
  var r;
  if (e.unit in Vr)
    r = Vr[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var n;
    if (t.style.isTight() ? n = t.havingStyle(t.style.text()) : n = t, e.unit === "ex")
      r = n.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = n.fontMetrics().quad;
    else
      throw new L("Invalid unit: '" + e.unit + "'");
    n !== t && (r *= n.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, P = function(e) {
  return +e.toFixed(4) + "em";
}, bt = function(e) {
  return e.filter((t) => t).join(" ");
}, Ia = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var n = t.getColor();
    n && (this.style.color = n);
  }
}, Ra = function(e) {
  var t = document.createElement(e);
  t.className = bt(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var n in this.attributes)
    this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, Na = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + Z.escape(bt(this.classes)) + '"');
  var r = "";
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (r += Z.hyphenate(n) + ":" + this.style[n] + ";");
  r && (t += ' style="' + Z.escape(r) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + Z.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class Yt {
  constructor(e, t, r, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Ia.call(this, e, r, n), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  toNode() {
    return Ra.call(this, "span");
  }
  toMarkup() {
    return Na.call(this, "span");
  }
}
class s0 {
  constructor(e, t, r, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Ia.call(this, t, n), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  toNode() {
    return Ra.call(this, "a");
  }
  toMarkup() {
    return Na.call(this, "a");
  }
}
class Ki {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = "<img  src='" + this.src + " 'alt='" + this.alt + "' ", t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += Z.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + Z.escape(t) + '"'), e += "'/>", e;
  }
}
var Wi = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Ge {
  constructor(e, t, r, n, i, l, u, c) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = i || 0, this.width = l || 0, this.classes = u || [], this.style = c || {}, this.maxFontSize = 0;
    var p = Di(this.text.charCodeAt(0));
    p && this.classes.push(p + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Wi[this.text]);
  }
  hasClass(e) {
    return Z.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = P(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = bt(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += Z.escape(bt(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (r += Z.hyphenate(n) + ":" + this.style[n] + ";");
    r && (e = !0, t += ' style="' + Z.escape(r) + '"');
    var i = Z.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class ot {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    for (var n = 0; n < this.children.length; n++)
      t.appendChild(this.children[n].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class vt {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", L0[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + L0[this.pathName] + "'/>";
  }
}
class Xr {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
    return e += "/>", e;
  }
}
function F0(a) {
  if (a instanceof Ge)
    return a;
  throw new Error("Expected symbolNode but got " + String(a) + ".");
}
function Zi(a) {
  if (a instanceof Yt)
    return a;
  throw new Error("Expected span<HtmlDomNode> but got " + String(a) + ".");
}
var Ji = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, Qi = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, de = {
  math: {},
  text: {}
};
function s(a, e, t, r, n, i) {
  de[a][n] = {
    font: e,
    group: t,
    replace: r
  }, i && r && (de[a][r] = de[a][n]);
}
var o = "math", C = "text", d = "main", f = "ams", pe = "accent-token", $ = "bin", Ne = "close", Lt = "inner", X = "mathord", we = "op-token", $e = "open", vr = "punct", g = "rel", dt = "spacing", y = "textord";
s(o, d, g, "≡", "\\equiv", !0);
s(o, d, g, "≺", "\\prec", !0);
s(o, d, g, "≻", "\\succ", !0);
s(o, d, g, "∼", "\\sim", !0);
s(o, d, g, "⊥", "\\perp");
s(o, d, g, "⪯", "\\preceq", !0);
s(o, d, g, "⪰", "\\succeq", !0);
s(o, d, g, "≃", "\\simeq", !0);
s(o, d, g, "∣", "\\mid", !0);
s(o, d, g, "≪", "\\ll", !0);
s(o, d, g, "≫", "\\gg", !0);
s(o, d, g, "≍", "\\asymp", !0);
s(o, d, g, "∥", "\\parallel");
s(o, d, g, "⋈", "\\bowtie", !0);
s(o, d, g, "⌣", "\\smile", !0);
s(o, d, g, "⊑", "\\sqsubseteq", !0);
s(o, d, g, "⊒", "\\sqsupseteq", !0);
s(o, d, g, "≐", "\\doteq", !0);
s(o, d, g, "⌢", "\\frown", !0);
s(o, d, g, "∋", "\\ni", !0);
s(o, d, g, "∝", "\\propto", !0);
s(o, d, g, "⊢", "\\vdash", !0);
s(o, d, g, "⊣", "\\dashv", !0);
s(o, d, g, "∋", "\\owns");
s(o, d, vr, ".", "\\ldotp");
s(o, d, vr, "⋅", "\\cdotp");
s(o, d, y, "#", "\\#");
s(C, d, y, "#", "\\#");
s(o, d, y, "&", "\\&");
s(C, d, y, "&", "\\&");
s(o, d, y, "ℵ", "\\aleph", !0);
s(o, d, y, "∀", "\\forall", !0);
s(o, d, y, "ℏ", "\\hbar", !0);
s(o, d, y, "∃", "\\exists", !0);
s(o, d, y, "∇", "\\nabla", !0);
s(o, d, y, "♭", "\\flat", !0);
s(o, d, y, "ℓ", "\\ell", !0);
s(o, d, y, "♮", "\\natural", !0);
s(o, d, y, "♣", "\\clubsuit", !0);
s(o, d, y, "℘", "\\wp", !0);
s(o, d, y, "♯", "\\sharp", !0);
s(o, d, y, "♢", "\\diamondsuit", !0);
s(o, d, y, "ℜ", "\\Re", !0);
s(o, d, y, "♡", "\\heartsuit", !0);
s(o, d, y, "ℑ", "\\Im", !0);
s(o, d, y, "♠", "\\spadesuit", !0);
s(o, d, y, "§", "\\S", !0);
s(C, d, y, "§", "\\S");
s(o, d, y, "¶", "\\P", !0);
s(C, d, y, "¶", "\\P");
s(o, d, y, "†", "\\dag");
s(C, d, y, "†", "\\dag");
s(C, d, y, "†", "\\textdagger");
s(o, d, y, "‡", "\\ddag");
s(C, d, y, "‡", "\\ddag");
s(C, d, y, "‡", "\\textdaggerdbl");
s(o, d, Ne, "⎱", "\\rmoustache", !0);
s(o, d, $e, "⎰", "\\lmoustache", !0);
s(o, d, Ne, "⟯", "\\rgroup", !0);
s(o, d, $e, "⟮", "\\lgroup", !0);
s(o, d, $, "∓", "\\mp", !0);
s(o, d, $, "⊖", "\\ominus", !0);
s(o, d, $, "⊎", "\\uplus", !0);
s(o, d, $, "⊓", "\\sqcap", !0);
s(o, d, $, "∗", "\\ast");
s(o, d, $, "⊔", "\\sqcup", !0);
s(o, d, $, "◯", "\\bigcirc", !0);
s(o, d, $, "∙", "\\bullet", !0);
s(o, d, $, "‡", "\\ddagger");
s(o, d, $, "≀", "\\wr", !0);
s(o, d, $, "⨿", "\\amalg");
s(o, d, $, "&", "\\And");
s(o, d, g, "⟵", "\\longleftarrow", !0);
s(o, d, g, "⇐", "\\Leftarrow", !0);
s(o, d, g, "⟸", "\\Longleftarrow", !0);
s(o, d, g, "⟶", "\\longrightarrow", !0);
s(o, d, g, "⇒", "\\Rightarrow", !0);
s(o, d, g, "⟹", "\\Longrightarrow", !0);
s(o, d, g, "↔", "\\leftrightarrow", !0);
s(o, d, g, "⟷", "\\longleftrightarrow", !0);
s(o, d, g, "⇔", "\\Leftrightarrow", !0);
s(o, d, g, "⟺", "\\Longleftrightarrow", !0);
s(o, d, g, "↦", "\\mapsto", !0);
s(o, d, g, "⟼", "\\longmapsto", !0);
s(o, d, g, "↗", "\\nearrow", !0);
s(o, d, g, "↩", "\\hookleftarrow", !0);
s(o, d, g, "↪", "\\hookrightarrow", !0);
s(o, d, g, "↘", "\\searrow", !0);
s(o, d, g, "↼", "\\leftharpoonup", !0);
s(o, d, g, "⇀", "\\rightharpoonup", !0);
s(o, d, g, "↙", "\\swarrow", !0);
s(o, d, g, "↽", "\\leftharpoondown", !0);
s(o, d, g, "⇁", "\\rightharpoondown", !0);
s(o, d, g, "↖", "\\nwarrow", !0);
s(o, d, g, "⇌", "\\rightleftharpoons", !0);
s(o, f, g, "≮", "\\nless", !0);
s(o, f, g, "", "\\@nleqslant");
s(o, f, g, "", "\\@nleqq");
s(o, f, g, "⪇", "\\lneq", !0);
s(o, f, g, "≨", "\\lneqq", !0);
s(o, f, g, "", "\\@lvertneqq");
s(o, f, g, "⋦", "\\lnsim", !0);
s(o, f, g, "⪉", "\\lnapprox", !0);
s(o, f, g, "⊀", "\\nprec", !0);
s(o, f, g, "⋠", "\\npreceq", !0);
s(o, f, g, "⋨", "\\precnsim", !0);
s(o, f, g, "⪹", "\\precnapprox", !0);
s(o, f, g, "≁", "\\nsim", !0);
s(o, f, g, "", "\\@nshortmid");
s(o, f, g, "∤", "\\nmid", !0);
s(o, f, g, "⊬", "\\nvdash", !0);
s(o, f, g, "⊭", "\\nvDash", !0);
s(o, f, g, "⋪", "\\ntriangleleft");
s(o, f, g, "⋬", "\\ntrianglelefteq", !0);
s(o, f, g, "⊊", "\\subsetneq", !0);
s(o, f, g, "", "\\@varsubsetneq");
s(o, f, g, "⫋", "\\subsetneqq", !0);
s(o, f, g, "", "\\@varsubsetneqq");
s(o, f, g, "≯", "\\ngtr", !0);
s(o, f, g, "", "\\@ngeqslant");
s(o, f, g, "", "\\@ngeqq");
s(o, f, g, "⪈", "\\gneq", !0);
s(o, f, g, "≩", "\\gneqq", !0);
s(o, f, g, "", "\\@gvertneqq");
s(o, f, g, "⋧", "\\gnsim", !0);
s(o, f, g, "⪊", "\\gnapprox", !0);
s(o, f, g, "⊁", "\\nsucc", !0);
s(o, f, g, "⋡", "\\nsucceq", !0);
s(o, f, g, "⋩", "\\succnsim", !0);
s(o, f, g, "⪺", "\\succnapprox", !0);
s(o, f, g, "≆", "\\ncong", !0);
s(o, f, g, "", "\\@nshortparallel");
s(o, f, g, "∦", "\\nparallel", !0);
s(o, f, g, "⊯", "\\nVDash", !0);
s(o, f, g, "⋫", "\\ntriangleright");
s(o, f, g, "⋭", "\\ntrianglerighteq", !0);
s(o, f, g, "", "\\@nsupseteqq");
s(o, f, g, "⊋", "\\supsetneq", !0);
s(o, f, g, "", "\\@varsupsetneq");
s(o, f, g, "⫌", "\\supsetneqq", !0);
s(o, f, g, "", "\\@varsupsetneqq");
s(o, f, g, "⊮", "\\nVdash", !0);
s(o, f, g, "⪵", "\\precneqq", !0);
s(o, f, g, "⪶", "\\succneqq", !0);
s(o, f, g, "", "\\@nsubseteqq");
s(o, f, $, "⊴", "\\unlhd");
s(o, f, $, "⊵", "\\unrhd");
s(o, f, g, "↚", "\\nleftarrow", !0);
s(o, f, g, "↛", "\\nrightarrow", !0);
s(o, f, g, "⇍", "\\nLeftarrow", !0);
s(o, f, g, "⇏", "\\nRightarrow", !0);
s(o, f, g, "↮", "\\nleftrightarrow", !0);
s(o, f, g, "⇎", "\\nLeftrightarrow", !0);
s(o, f, g, "△", "\\vartriangle");
s(o, f, y, "ℏ", "\\hslash");
s(o, f, y, "▽", "\\triangledown");
s(o, f, y, "◊", "\\lozenge");
s(o, f, y, "Ⓢ", "\\circledS");
s(o, f, y, "®", "\\circledR");
s(C, f, y, "®", "\\circledR");
s(o, f, y, "∡", "\\measuredangle", !0);
s(o, f, y, "∄", "\\nexists");
s(o, f, y, "℧", "\\mho");
s(o, f, y, "Ⅎ", "\\Finv", !0);
s(o, f, y, "⅁", "\\Game", !0);
s(o, f, y, "‵", "\\backprime");
s(o, f, y, "▲", "\\blacktriangle");
s(o, f, y, "▼", "\\blacktriangledown");
s(o, f, y, "■", "\\blacksquare");
s(o, f, y, "⧫", "\\blacklozenge");
s(o, f, y, "★", "\\bigstar");
s(o, f, y, "∢", "\\sphericalangle", !0);
s(o, f, y, "∁", "\\complement", !0);
s(o, f, y, "ð", "\\eth", !0);
s(C, d, y, "ð", "ð");
s(o, f, y, "╱", "\\diagup");
s(o, f, y, "╲", "\\diagdown");
s(o, f, y, "□", "\\square");
s(o, f, y, "□", "\\Box");
s(o, f, y, "◊", "\\Diamond");
s(o, f, y, "¥", "\\yen", !0);
s(C, f, y, "¥", "\\yen", !0);
s(o, f, y, "✓", "\\checkmark", !0);
s(C, f, y, "✓", "\\checkmark");
s(o, f, y, "ℶ", "\\beth", !0);
s(o, f, y, "ℸ", "\\daleth", !0);
s(o, f, y, "ℷ", "\\gimel", !0);
s(o, f, y, "ϝ", "\\digamma", !0);
s(o, f, y, "ϰ", "\\varkappa");
s(o, f, $e, "┌", "\\@ulcorner", !0);
s(o, f, Ne, "┐", "\\@urcorner", !0);
s(o, f, $e, "└", "\\@llcorner", !0);
s(o, f, Ne, "┘", "\\@lrcorner", !0);
s(o, f, g, "≦", "\\leqq", !0);
s(o, f, g, "⩽", "\\leqslant", !0);
s(o, f, g, "⪕", "\\eqslantless", !0);
s(o, f, g, "≲", "\\lesssim", !0);
s(o, f, g, "⪅", "\\lessapprox", !0);
s(o, f, g, "≊", "\\approxeq", !0);
s(o, f, $, "⋖", "\\lessdot");
s(o, f, g, "⋘", "\\lll", !0);
s(o, f, g, "≶", "\\lessgtr", !0);
s(o, f, g, "⋚", "\\lesseqgtr", !0);
s(o, f, g, "⪋", "\\lesseqqgtr", !0);
s(o, f, g, "≑", "\\doteqdot");
s(o, f, g, "≓", "\\risingdotseq", !0);
s(o, f, g, "≒", "\\fallingdotseq", !0);
s(o, f, g, "∽", "\\backsim", !0);
s(o, f, g, "⋍", "\\backsimeq", !0);
s(o, f, g, "⫅", "\\subseteqq", !0);
s(o, f, g, "⋐", "\\Subset", !0);
s(o, f, g, "⊏", "\\sqsubset", !0);
s(o, f, g, "≼", "\\preccurlyeq", !0);
s(o, f, g, "⋞", "\\curlyeqprec", !0);
s(o, f, g, "≾", "\\precsim", !0);
s(o, f, g, "⪷", "\\precapprox", !0);
s(o, f, g, "⊲", "\\vartriangleleft");
s(o, f, g, "⊴", "\\trianglelefteq");
s(o, f, g, "⊨", "\\vDash", !0);
s(o, f, g, "⊪", "\\Vvdash", !0);
s(o, f, g, "⌣", "\\smallsmile");
s(o, f, g, "⌢", "\\smallfrown");
s(o, f, g, "≏", "\\bumpeq", !0);
s(o, f, g, "≎", "\\Bumpeq", !0);
s(o, f, g, "≧", "\\geqq", !0);
s(o, f, g, "⩾", "\\geqslant", !0);
s(o, f, g, "⪖", "\\eqslantgtr", !0);
s(o, f, g, "≳", "\\gtrsim", !0);
s(o, f, g, "⪆", "\\gtrapprox", !0);
s(o, f, $, "⋗", "\\gtrdot");
s(o, f, g, "⋙", "\\ggg", !0);
s(o, f, g, "≷", "\\gtrless", !0);
s(o, f, g, "⋛", "\\gtreqless", !0);
s(o, f, g, "⪌", "\\gtreqqless", !0);
s(o, f, g, "≖", "\\eqcirc", !0);
s(o, f, g, "≗", "\\circeq", !0);
s(o, f, g, "≜", "\\triangleq", !0);
s(o, f, g, "∼", "\\thicksim");
s(o, f, g, "≈", "\\thickapprox");
s(o, f, g, "⫆", "\\supseteqq", !0);
s(o, f, g, "⋑", "\\Supset", !0);
s(o, f, g, "⊐", "\\sqsupset", !0);
s(o, f, g, "≽", "\\succcurlyeq", !0);
s(o, f, g, "⋟", "\\curlyeqsucc", !0);
s(o, f, g, "≿", "\\succsim", !0);
s(o, f, g, "⪸", "\\succapprox", !0);
s(o, f, g, "⊳", "\\vartriangleright");
s(o, f, g, "⊵", "\\trianglerighteq");
s(o, f, g, "⊩", "\\Vdash", !0);
s(o, f, g, "∣", "\\shortmid");
s(o, f, g, "∥", "\\shortparallel");
s(o, f, g, "≬", "\\between", !0);
s(o, f, g, "⋔", "\\pitchfork", !0);
s(o, f, g, "∝", "\\varpropto");
s(o, f, g, "◀", "\\blacktriangleleft");
s(o, f, g, "∴", "\\therefore", !0);
s(o, f, g, "∍", "\\backepsilon");
s(o, f, g, "▶", "\\blacktriangleright");
s(o, f, g, "∵", "\\because", !0);
s(o, f, g, "⋘", "\\llless");
s(o, f, g, "⋙", "\\gggtr");
s(o, f, $, "⊲", "\\lhd");
s(o, f, $, "⊳", "\\rhd");
s(o, f, g, "≂", "\\eqsim", !0);
s(o, d, g, "⋈", "\\Join");
s(o, f, g, "≑", "\\Doteq", !0);
s(o, f, $, "∔", "\\dotplus", !0);
s(o, f, $, "∖", "\\smallsetminus");
s(o, f, $, "⋒", "\\Cap", !0);
s(o, f, $, "⋓", "\\Cup", !0);
s(o, f, $, "⩞", "\\doublebarwedge", !0);
s(o, f, $, "⊟", "\\boxminus", !0);
s(o, f, $, "⊞", "\\boxplus", !0);
s(o, f, $, "⋇", "\\divideontimes", !0);
s(o, f, $, "⋉", "\\ltimes", !0);
s(o, f, $, "⋊", "\\rtimes", !0);
s(o, f, $, "⋋", "\\leftthreetimes", !0);
s(o, f, $, "⋌", "\\rightthreetimes", !0);
s(o, f, $, "⋏", "\\curlywedge", !0);
s(o, f, $, "⋎", "\\curlyvee", !0);
s(o, f, $, "⊝", "\\circleddash", !0);
s(o, f, $, "⊛", "\\circledast", !0);
s(o, f, $, "⋅", "\\centerdot");
s(o, f, $, "⊺", "\\intercal", !0);
s(o, f, $, "⋒", "\\doublecap");
s(o, f, $, "⋓", "\\doublecup");
s(o, f, $, "⊠", "\\boxtimes", !0);
s(o, f, g, "⇢", "\\dashrightarrow", !0);
s(o, f, g, "⇠", "\\dashleftarrow", !0);
s(o, f, g, "⇇", "\\leftleftarrows", !0);
s(o, f, g, "⇆", "\\leftrightarrows", !0);
s(o, f, g, "⇚", "\\Lleftarrow", !0);
s(o, f, g, "↞", "\\twoheadleftarrow", !0);
s(o, f, g, "↢", "\\leftarrowtail", !0);
s(o, f, g, "↫", "\\looparrowleft", !0);
s(o, f, g, "⇋", "\\leftrightharpoons", !0);
s(o, f, g, "↶", "\\curvearrowleft", !0);
s(o, f, g, "↺", "\\circlearrowleft", !0);
s(o, f, g, "↰", "\\Lsh", !0);
s(o, f, g, "⇈", "\\upuparrows", !0);
s(o, f, g, "↿", "\\upharpoonleft", !0);
s(o, f, g, "⇃", "\\downharpoonleft", !0);
s(o, d, g, "⊶", "\\origof", !0);
s(o, d, g, "⊷", "\\imageof", !0);
s(o, f, g, "⊸", "\\multimap", !0);
s(o, f, g, "↭", "\\leftrightsquigarrow", !0);
s(o, f, g, "⇉", "\\rightrightarrows", !0);
s(o, f, g, "⇄", "\\rightleftarrows", !0);
s(o, f, g, "↠", "\\twoheadrightarrow", !0);
s(o, f, g, "↣", "\\rightarrowtail", !0);
s(o, f, g, "↬", "\\looparrowright", !0);
s(o, f, g, "↷", "\\curvearrowright", !0);
s(o, f, g, "↻", "\\circlearrowright", !0);
s(o, f, g, "↱", "\\Rsh", !0);
s(o, f, g, "⇊", "\\downdownarrows", !0);
s(o, f, g, "↾", "\\upharpoonright", !0);
s(o, f, g, "⇂", "\\downharpoonright", !0);
s(o, f, g, "⇝", "\\rightsquigarrow", !0);
s(o, f, g, "⇝", "\\leadsto");
s(o, f, g, "⇛", "\\Rrightarrow", !0);
s(o, f, g, "↾", "\\restriction");
s(o, d, y, "‘", "`");
s(o, d, y, "$", "\\$");
s(C, d, y, "$", "\\$");
s(C, d, y, "$", "\\textdollar");
s(o, d, y, "%", "\\%");
s(C, d, y, "%", "\\%");
s(o, d, y, "_", "\\_");
s(C, d, y, "_", "\\_");
s(C, d, y, "_", "\\textunderscore");
s(o, d, y, "∠", "\\angle", !0);
s(o, d, y, "∞", "\\infty", !0);
s(o, d, y, "′", "\\prime");
s(o, d, y, "△", "\\triangle");
s(o, d, y, "Γ", "\\Gamma", !0);
s(o, d, y, "Δ", "\\Delta", !0);
s(o, d, y, "Θ", "\\Theta", !0);
s(o, d, y, "Λ", "\\Lambda", !0);
s(o, d, y, "Ξ", "\\Xi", !0);
s(o, d, y, "Π", "\\Pi", !0);
s(o, d, y, "Σ", "\\Sigma", !0);
s(o, d, y, "Υ", "\\Upsilon", !0);
s(o, d, y, "Φ", "\\Phi", !0);
s(o, d, y, "Ψ", "\\Psi", !0);
s(o, d, y, "Ω", "\\Omega", !0);
s(o, d, y, "A", "Α");
s(o, d, y, "B", "Β");
s(o, d, y, "E", "Ε");
s(o, d, y, "Z", "Ζ");
s(o, d, y, "H", "Η");
s(o, d, y, "I", "Ι");
s(o, d, y, "K", "Κ");
s(o, d, y, "M", "Μ");
s(o, d, y, "N", "Ν");
s(o, d, y, "O", "Ο");
s(o, d, y, "P", "Ρ");
s(o, d, y, "T", "Τ");
s(o, d, y, "X", "Χ");
s(o, d, y, "¬", "\\neg", !0);
s(o, d, y, "¬", "\\lnot");
s(o, d, y, "⊤", "\\top");
s(o, d, y, "⊥", "\\bot");
s(o, d, y, "∅", "\\emptyset");
s(o, f, y, "∅", "\\varnothing");
s(o, d, X, "α", "\\alpha", !0);
s(o, d, X, "β", "\\beta", !0);
s(o, d, X, "γ", "\\gamma", !0);
s(o, d, X, "δ", "\\delta", !0);
s(o, d, X, "ϵ", "\\epsilon", !0);
s(o, d, X, "ζ", "\\zeta", !0);
s(o, d, X, "η", "\\eta", !0);
s(o, d, X, "θ", "\\theta", !0);
s(o, d, X, "ι", "\\iota", !0);
s(o, d, X, "κ", "\\kappa", !0);
s(o, d, X, "λ", "\\lambda", !0);
s(o, d, X, "μ", "\\mu", !0);
s(o, d, X, "ν", "\\nu", !0);
s(o, d, X, "ξ", "\\xi", !0);
s(o, d, X, "ο", "\\omicron", !0);
s(o, d, X, "π", "\\pi", !0);
s(o, d, X, "ρ", "\\rho", !0);
s(o, d, X, "σ", "\\sigma", !0);
s(o, d, X, "τ", "\\tau", !0);
s(o, d, X, "υ", "\\upsilon", !0);
s(o, d, X, "ϕ", "\\phi", !0);
s(o, d, X, "χ", "\\chi", !0);
s(o, d, X, "ψ", "\\psi", !0);
s(o, d, X, "ω", "\\omega", !0);
s(o, d, X, "ε", "\\varepsilon", !0);
s(o, d, X, "ϑ", "\\vartheta", !0);
s(o, d, X, "ϖ", "\\varpi", !0);
s(o, d, X, "ϱ", "\\varrho", !0);
s(o, d, X, "ς", "\\varsigma", !0);
s(o, d, X, "φ", "\\varphi", !0);
s(o, d, $, "∗", "*", !0);
s(o, d, $, "+", "+");
s(o, d, $, "−", "-", !0);
s(o, d, $, "⋅", "\\cdot", !0);
s(o, d, $, "∘", "\\circ", !0);
s(o, d, $, "÷", "\\div", !0);
s(o, d, $, "±", "\\pm", !0);
s(o, d, $, "×", "\\times", !0);
s(o, d, $, "∩", "\\cap", !0);
s(o, d, $, "∪", "\\cup", !0);
s(o, d, $, "∖", "\\setminus", !0);
s(o, d, $, "∧", "\\land");
s(o, d, $, "∨", "\\lor");
s(o, d, $, "∧", "\\wedge", !0);
s(o, d, $, "∨", "\\vee", !0);
s(o, d, y, "√", "\\surd");
s(o, d, $e, "⟨", "\\langle", !0);
s(o, d, $e, "∣", "\\lvert");
s(o, d, $e, "∥", "\\lVert");
s(o, d, Ne, "?", "?");
s(o, d, Ne, "!", "!");
s(o, d, Ne, "⟩", "\\rangle", !0);
s(o, d, Ne, "∣", "\\rvert");
s(o, d, Ne, "∥", "\\rVert");
s(o, d, g, "=", "=");
s(o, d, g, ":", ":");
s(o, d, g, "≈", "\\approx", !0);
s(o, d, g, "≅", "\\cong", !0);
s(o, d, g, "≥", "\\ge");
s(o, d, g, "≥", "\\geq", !0);
s(o, d, g, "←", "\\gets");
s(o, d, g, ">", "\\gt", !0);
s(o, d, g, "∈", "\\in", !0);
s(o, d, g, "", "\\@not");
s(o, d, g, "⊂", "\\subset", !0);
s(o, d, g, "⊃", "\\supset", !0);
s(o, d, g, "⊆", "\\subseteq", !0);
s(o, d, g, "⊇", "\\supseteq", !0);
s(o, f, g, "⊈", "\\nsubseteq", !0);
s(o, f, g, "⊉", "\\nsupseteq", !0);
s(o, d, g, "⊨", "\\models");
s(o, d, g, "←", "\\leftarrow", !0);
s(o, d, g, "≤", "\\le");
s(o, d, g, "≤", "\\leq", !0);
s(o, d, g, "<", "\\lt", !0);
s(o, d, g, "→", "\\rightarrow", !0);
s(o, d, g, "→", "\\to");
s(o, f, g, "≱", "\\ngeq", !0);
s(o, f, g, "≰", "\\nleq", !0);
s(o, d, dt, " ", "\\ ");
s(o, d, dt, " ", "\\space");
s(o, d, dt, " ", "\\nobreakspace");
s(C, d, dt, " ", "\\ ");
s(C, d, dt, " ", " ");
s(C, d, dt, " ", "\\space");
s(C, d, dt, " ", "\\nobreakspace");
s(o, d, dt, null, "\\nobreak");
s(o, d, dt, null, "\\allowbreak");
s(o, d, vr, ",", ",");
s(o, d, vr, ";", ";");
s(o, f, $, "⊼", "\\barwedge", !0);
s(o, f, $, "⊻", "\\veebar", !0);
s(o, d, $, "⊙", "\\odot", !0);
s(o, d, $, "⊕", "\\oplus", !0);
s(o, d, $, "⊗", "\\otimes", !0);
s(o, d, y, "∂", "\\partial", !0);
s(o, d, $, "⊘", "\\oslash", !0);
s(o, f, $, "⊚", "\\circledcirc", !0);
s(o, f, $, "⊡", "\\boxdot", !0);
s(o, d, $, "△", "\\bigtriangleup");
s(o, d, $, "▽", "\\bigtriangledown");
s(o, d, $, "†", "\\dagger");
s(o, d, $, "⋄", "\\diamond");
s(o, d, $, "⋆", "\\star");
s(o, d, $, "◃", "\\triangleleft");
s(o, d, $, "▹", "\\triangleright");
s(o, d, $e, "{", "\\{");
s(C, d, y, "{", "\\{");
s(C, d, y, "{", "\\textbraceleft");
s(o, d, Ne, "}", "\\}");
s(C, d, y, "}", "\\}");
s(C, d, y, "}", "\\textbraceright");
s(o, d, $e, "{", "\\lbrace");
s(o, d, Ne, "}", "\\rbrace");
s(o, d, $e, "[", "\\lbrack", !0);
s(C, d, y, "[", "\\lbrack", !0);
s(o, d, Ne, "]", "\\rbrack", !0);
s(C, d, y, "]", "\\rbrack", !0);
s(o, d, $e, "(", "\\lparen", !0);
s(o, d, Ne, ")", "\\rparen", !0);
s(C, d, y, "<", "\\textless", !0);
s(C, d, y, ">", "\\textgreater", !0);
s(o, d, $e, "⌊", "\\lfloor", !0);
s(o, d, Ne, "⌋", "\\rfloor", !0);
s(o, d, $e, "⌈", "\\lceil", !0);
s(o, d, Ne, "⌉", "\\rceil", !0);
s(o, d, y, "\\", "\\backslash");
s(o, d, y, "∣", "|");
s(o, d, y, "∣", "\\vert");
s(C, d, y, "|", "\\textbar", !0);
s(o, d, y, "∥", "\\|");
s(o, d, y, "∥", "\\Vert");
s(C, d, y, "∥", "\\textbardbl");
s(C, d, y, "~", "\\textasciitilde");
s(C, d, y, "\\", "\\textbackslash");
s(C, d, y, "^", "\\textasciicircum");
s(o, d, g, "↑", "\\uparrow", !0);
s(o, d, g, "⇑", "\\Uparrow", !0);
s(o, d, g, "↓", "\\downarrow", !0);
s(o, d, g, "⇓", "\\Downarrow", !0);
s(o, d, g, "↕", "\\updownarrow", !0);
s(o, d, g, "⇕", "\\Updownarrow", !0);
s(o, d, we, "∐", "\\coprod");
s(o, d, we, "⋁", "\\bigvee");
s(o, d, we, "⋀", "\\bigwedge");
s(o, d, we, "⨄", "\\biguplus");
s(o, d, we, "⋂", "\\bigcap");
s(o, d, we, "⋃", "\\bigcup");
s(o, d, we, "∫", "\\int");
s(o, d, we, "∫", "\\intop");
s(o, d, we, "∬", "\\iint");
s(o, d, we, "∭", "\\iiint");
s(o, d, we, "∏", "\\prod");
s(o, d, we, "∑", "\\sum");
s(o, d, we, "⨂", "\\bigotimes");
s(o, d, we, "⨁", "\\bigoplus");
s(o, d, we, "⨀", "\\bigodot");
s(o, d, we, "∮", "\\oint");
s(o, d, we, "∯", "\\oiint");
s(o, d, we, "∰", "\\oiiint");
s(o, d, we, "⨆", "\\bigsqcup");
s(o, d, we, "∫", "\\smallint");
s(C, d, Lt, "…", "\\textellipsis");
s(o, d, Lt, "…", "\\mathellipsis");
s(C, d, Lt, "…", "\\ldots", !0);
s(o, d, Lt, "…", "\\ldots", !0);
s(o, d, Lt, "⋯", "\\@cdots", !0);
s(o, d, Lt, "⋱", "\\ddots", !0);
s(o, d, y, "⋮", "\\varvdots");
s(o, d, pe, "ˊ", "\\acute");
s(o, d, pe, "ˋ", "\\grave");
s(o, d, pe, "¨", "\\ddot");
s(o, d, pe, "~", "\\tilde");
s(o, d, pe, "ˉ", "\\bar");
s(o, d, pe, "˘", "\\breve");
s(o, d, pe, "ˇ", "\\check");
s(o, d, pe, "^", "\\hat");
s(o, d, pe, "⃗", "\\vec");
s(o, d, pe, "˙", "\\dot");
s(o, d, pe, "˚", "\\mathring");
s(o, d, X, "", "\\@imath");
s(o, d, X, "", "\\@jmath");
s(o, d, y, "ı", "ı");
s(o, d, y, "ȷ", "ȷ");
s(C, d, y, "ı", "\\i", !0);
s(C, d, y, "ȷ", "\\j", !0);
s(C, d, y, "ß", "\\ss", !0);
s(C, d, y, "æ", "\\ae", !0);
s(C, d, y, "œ", "\\oe", !0);
s(C, d, y, "ø", "\\o", !0);
s(C, d, y, "Æ", "\\AE", !0);
s(C, d, y, "Œ", "\\OE", !0);
s(C, d, y, "Ø", "\\O", !0);
s(C, d, pe, "ˊ", "\\'");
s(C, d, pe, "ˋ", "\\`");
s(C, d, pe, "ˆ", "\\^");
s(C, d, pe, "˜", "\\~");
s(C, d, pe, "ˉ", "\\=");
s(C, d, pe, "˘", "\\u");
s(C, d, pe, "˙", "\\.");
s(C, d, pe, "¸", "\\c");
s(C, d, pe, "˚", "\\r");
s(C, d, pe, "ˇ", "\\v");
s(C, d, pe, "¨", '\\"');
s(C, d, pe, "˝", "\\H");
s(C, d, pe, "◯", "\\textcircled");
var _a = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
s(C, d, y, "–", "--", !0);
s(C, d, y, "–", "\\textendash");
s(C, d, y, "—", "---", !0);
s(C, d, y, "—", "\\textemdash");
s(C, d, y, "‘", "`", !0);
s(C, d, y, "‘", "\\textquoteleft");
s(C, d, y, "’", "'", !0);
s(C, d, y, "’", "\\textquoteright");
s(C, d, y, "“", "``", !0);
s(C, d, y, "“", "\\textquotedblleft");
s(C, d, y, "”", "''", !0);
s(C, d, y, "”", "\\textquotedblright");
s(o, d, y, "°", "\\degree", !0);
s(C, d, y, "°", "\\degree");
s(C, d, y, "°", "\\textdegree", !0);
s(o, d, y, "£", "\\pounds");
s(o, d, y, "£", "\\mathsterling", !0);
s(C, d, y, "£", "\\pounds");
s(C, d, y, "£", "\\textsterling", !0);
s(o, f, y, "✠", "\\maltese");
s(C, f, y, "✠", "\\maltese");
var $0 = '0123456789/@."';
for (var Rr = 0; Rr < $0.length; Rr++) {
  var U0 = $0.charAt(Rr);
  s(o, d, y, U0, U0);
}
var q0 = '0123456789!@*()-=+";:?/.,';
for (var Nr = 0; Nr < q0.length; Nr++) {
  var H0 = q0.charAt(Nr);
  s(C, d, y, H0, H0);
}
var mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var _r = 0; _r < mr.length; _r++) {
  var er = mr.charAt(_r);
  s(o, d, X, er, er), s(C, d, y, er, er);
}
s(o, f, y, "C", "ℂ");
s(C, f, y, "C", "ℂ");
s(o, f, y, "H", "ℍ");
s(C, f, y, "H", "ℍ");
s(o, f, y, "N", "ℕ");
s(C, f, y, "N", "ℕ");
s(o, f, y, "P", "ℙ");
s(C, f, y, "P", "ℙ");
s(o, f, y, "Q", "ℚ");
s(C, f, y, "Q", "ℚ");
s(o, f, y, "R", "ℝ");
s(C, f, y, "R", "ℝ");
s(o, f, y, "Z", "ℤ");
s(C, f, y, "Z", "ℤ");
s(o, d, X, "h", "ℎ");
s(C, d, X, "h", "ℎ");
var J = "";
for (var Le = 0; Le < mr.length; Le++) {
  var ye = mr.charAt(Le);
  J = String.fromCharCode(55349, 56320 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), J = String.fromCharCode(55349, 56372 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), J = String.fromCharCode(55349, 56424 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), J = String.fromCharCode(55349, 56580 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), J = String.fromCharCode(55349, 56736 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), J = String.fromCharCode(55349, 56788 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), J = String.fromCharCode(55349, 56840 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), J = String.fromCharCode(55349, 56944 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), Le < 26 && (J = String.fromCharCode(55349, 56632 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J), J = String.fromCharCode(55349, 56476 + Le), s(o, d, X, ye, J), s(C, d, y, ye, J));
}
J = String.fromCharCode(55349, 56668);
s(o, d, X, "k", J);
s(C, d, y, "k", J);
for (var kt = 0; kt < 10; kt++) {
  var mt = kt.toString();
  J = String.fromCharCode(55349, 57294 + kt), s(o, d, X, mt, J), s(C, d, y, mt, J), J = String.fromCharCode(55349, 57314 + kt), s(o, d, X, mt, J), s(C, d, y, mt, J), J = String.fromCharCode(55349, 57324 + kt), s(o, d, X, mt, J), s(C, d, y, mt, J), J = String.fromCharCode(55349, 57334 + kt), s(o, d, X, mt, J), s(C, d, y, mt, J);
}
var jr = "ÐÞþ";
for (var Or = 0; Or < jr.length; Or++) {
  var tr = jr.charAt(Or);
  s(o, d, X, tr, tr), s(C, d, y, tr, tr);
}
var rr = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  ["", "", ""],
  // A-Z bold Fraktur No font metrics
  ["", "", ""],
  // a-z bold Fraktur.   No font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], G0 = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], es = function(e, t) {
  var r = e.charCodeAt(0), n = e.charCodeAt(1), i = (r - 55296) * 1024 + (n - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var u = Math.floor((i - 119808) / 26);
    return [rr[u][2], rr[u][l]];
  } else if (120782 <= i && i <= 120831) {
    var c = Math.floor((i - 120782) / 10);
    return [G0[c][2], G0[c][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [rr[0][2], rr[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new L("Unsupported character: " + e);
  }
}, yr = function(e, t, r) {
  return de[r][e] && de[r][e].replace && (e = de[r][e].replace), {
    value: e,
    metrics: i0(e, t, r)
  };
}, Xe = function(e, t, r, n, i) {
  var l = yr(e, t, r), u = l.metrics;
  e = l.value;
  var c;
  if (u) {
    var p = u.italic;
    (r === "text" || n && n.font === "mathit") && (p = 0), c = new Ge(e, u.height, u.depth, p, u.skew, u.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), c = new Ge(e, 0, 0, 0, 0, 0, i);
  if (n) {
    c.maxFontSize = n.sizeMultiplier, n.style.isTight() && c.classes.push("mtight");
    var m = n.getColor();
    m && (c.style.color = m);
  }
  return c;
}, ts = function(e, t, r, n) {
  return n === void 0 && (n = []), r.font === "boldsymbol" && yr(e, "Main-Bold", t).metrics ? Xe(e, "Main-Bold", t, r, n.concat(["mathbf"])) : e === "\\" || de[t][e].font === "main" ? Xe(e, "Main-Regular", t, r, n) : Xe(e, "AMS-Regular", t, r, n.concat(["amsrm"]));
}, rs = function(e, t, r, n, i) {
  return i !== "textord" && yr(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, as = function(e, t, r) {
  var n = e.mode, i = e.text, l = ["mord"], u = n === "math" || n === "text" && t.font, c = u ? t.font : t.fontFamily;
  if (i.charCodeAt(0) === 55349) {
    var [p, m] = es(i, n);
    return Xe(i, p, n, t, l.concat(m));
  } else if (c) {
    var b, x;
    if (c === "boldsymbol") {
      var v = rs(i, n, t, l, r);
      b = v.fontName, x = [v.fontClass];
    } else
      u ? (b = Ma[c].fontName, x = [c]) : (b = ar(c, t.fontWeight, t.fontShape), x = [c, t.fontWeight, t.fontShape]);
    if (yr(i, b, n).metrics)
      return Xe(i, b, n, t, l.concat(x));
    if (_a.hasOwnProperty(i) && b.slice(0, 10) === "Typewriter") {
      for (var k = [], E = 0; E < i.length; E++)
        k.push(Xe(i[E], b, n, t, l.concat(x)));
      return Ca(k);
    }
  }
  if (r === "mathord")
    return Xe(i, "Math-Italic", n, t, l.concat(["mathnormal"]));
  if (r === "textord") {
    var O = de[n][i] && de[n][i].font;
    if (O === "ams") {
      var N = ar("amsrm", t.fontWeight, t.fontShape);
      return Xe(i, N, n, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (O === "main" || !O) {
      var w = ar("textrm", t.fontWeight, t.fontShape);
      return Xe(i, w, n, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var S = ar(O, t.fontWeight, t.fontShape);
      return Xe(i, S, n, t, l.concat(S, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, ns = (a, e) => {
  if (bt(a.classes) !== bt(e.classes) || a.skew !== e.skew || a.maxFontSize !== e.maxFontSize)
    return !1;
  if (a.classes.length === 1) {
    var t = a.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var r in a.style)
    if (a.style.hasOwnProperty(r) && a.style[r] !== e.style[r])
      return !1;
  for (var n in e.style)
    if (e.style.hasOwnProperty(n) && a.style[n] !== e.style[n])
      return !1;
  return !0;
}, is = (a) => {
  for (var e = 0; e < a.length - 1; e++) {
    var t = a[e], r = a[e + 1];
    t instanceof Ge && r instanceof Ge && ns(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, a.splice(e + 1, 1), e--);
  }
  return a;
}, l0 = function(e) {
  for (var t = 0, r = 0, n = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > r && (r = l.depth), l.maxFontSize > n && (n = l.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = n;
}, ze = function(e, t, r, n) {
  var i = new Yt(e, t, r, n);
  return l0(i), i;
}, Oa = (a, e, t, r) => new Yt(a, e, t, r), ss = function(e, t, r) {
  var n = ze([e], [], t);
  return n.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = P(n.height), n.maxFontSize = 1, n;
}, ls = function(e, t, r, n) {
  var i = new s0(e, t, r, n);
  return l0(i), i;
}, Ca = function(e) {
  var t = new Gt(e);
  return l0(t), t;
}, os = function(e, t) {
  return e instanceof Gt ? ze([], [e], t) : e;
}, us = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, i = n, l = 1; l < t.length; l++) {
      var u = -t[l].shift - i - t[l].elem.depth, c = u - (t[l - 1].elem.height + t[l - 1].elem.depth);
      i = i + u, r.push({
        type: "kern",
        size: c
      }), r.push(t[l]);
    }
    return {
      children: r,
      depth: n
    };
  }
  var p;
  if (e.positionType === "top") {
    for (var m = e.positionData, b = 0; b < e.children.length; b++) {
      var x = e.children[b];
      m -= x.type === "kern" ? x.size : x.elem.height + x.elem.depth;
    }
    p = m;
  } else if (e.positionType === "bottom")
    p = -e.positionData;
  else {
    var v = e.children[0];
    if (v.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      p = -v.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      p = -v.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: p
  };
}, cs = function(e, t) {
  for (var {
    children: r,
    depth: n
  } = us(e), i = 0, l = 0; l < r.length; l++) {
    var u = r[l];
    if (u.type === "elem") {
      var c = u.elem;
      i = Math.max(i, c.maxFontSize, c.height);
    }
  }
  i += 2;
  var p = ze(["pstrut"], []);
  p.style.height = P(i);
  for (var m = [], b = n, x = n, v = n, k = 0; k < r.length; k++) {
    var E = r[k];
    if (E.type === "kern")
      v += E.size;
    else {
      var O = E.elem, N = E.wrapperClasses || [], w = E.wrapperStyle || {}, S = ze(N, [p, O], void 0, w);
      S.style.top = P(-i - v - O.depth), E.marginLeft && (S.style.marginLeft = E.marginLeft), E.marginRight && (S.style.marginRight = E.marginRight), m.push(S), v += O.height + O.depth;
    }
    b = Math.min(b, v), x = Math.max(x, v);
  }
  var A = ze(["vlist"], m);
  A.style.height = P(x);
  var I;
  if (b < 0) {
    var R = ze([], []), D = ze(["vlist"], [R]);
    D.style.height = P(-b);
    var H = ze(["vlist-s"], [new Ge("​")]);
    I = [ze(["vlist-r"], [A, H]), ze(["vlist-r"], [D])];
  } else
    I = [ze(["vlist-r"], [A])];
  var B = ze(["vlist-t"], I);
  return I.length === 2 && B.classes.push("vlist-t2"), B.height = x, B.depth = -b, B;
}, ds = (a, e) => {
  var t = ze(["mspace"], [], e), r = ge(a, e);
  return t.style.marginRight = P(r), t;
}, ar = function(e, t, r) {
  var n = "";
  switch (e) {
    case "amsrm":
      n = "AMS";
      break;
    case "textrm":
      n = "Main";
      break;
    case "textsf":
      n = "SansSerif";
      break;
    case "texttt":
      n = "Typewriter";
      break;
    default:
      n = e;
  }
  var i;
  return t === "textbf" && r === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", n + "-" + i;
}, Ma = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Da = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, hs = function(e, t) {
  var [r, n, i] = Da[e], l = new vt(r), u = new ot([l], {
    width: P(n),
    height: P(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + P(n),
    viewBox: "0 0 " + 1e3 * n + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), c = Oa(["overlay"], [u], t);
  return c.height = i, c.style.height = P(i), c.style.width = P(n), c;
}, T = {
  fontMap: Ma,
  makeSymbol: Xe,
  mathsym: ts,
  makeSpan: ze,
  makeSvgSpan: Oa,
  makeLineSpan: ss,
  makeAnchor: ls,
  makeFragment: Ca,
  wrapFragment: os,
  makeVList: cs,
  makeOrd: as,
  makeGlue: ds,
  staticSvg: hs,
  svgData: Da,
  tryCombineChars: is
}, fe = {
  number: 3,
  unit: "mu"
}, Tt = {
  number: 4,
  unit: "mu"
}, at = {
  number: 5,
  unit: "mu"
}, ps = {
  mord: {
    mop: fe,
    mbin: Tt,
    mrel: at,
    minner: fe
  },
  mop: {
    mord: fe,
    mop: fe,
    mrel: at,
    minner: fe
  },
  mbin: {
    mord: Tt,
    mop: Tt,
    mopen: Tt,
    minner: Tt
  },
  mrel: {
    mord: at,
    mop: at,
    mopen: at,
    minner: at
  },
  mopen: {},
  mclose: {
    mop: fe,
    mbin: Tt,
    mrel: at,
    minner: fe
  },
  mpunct: {
    mord: fe,
    mop: fe,
    mrel: at,
    mopen: fe,
    mclose: fe,
    mpunct: fe,
    minner: fe
  },
  minner: {
    mord: fe,
    mop: fe,
    mbin: Tt,
    mrel: at,
    mopen: fe,
    mpunct: fe,
    minner: fe
  }
}, ms = {
  mord: {
    mop: fe
  },
  mop: {
    mord: fe,
    mop: fe
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: fe
  },
  mpunct: {},
  minner: {
    mop: fe
  }
}, La = {}, fr = {}, gr = {};
function F(a) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: n,
    htmlBuilder: i,
    mathmlBuilder: l
  } = a, u = {
    type: e,
    numArgs: r.numArgs,
    argTypes: r.argTypes,
    allowedInArgument: !!r.allowedInArgument,
    allowedInText: !!r.allowedInText,
    allowedInMath: r.allowedInMath === void 0 ? !0 : r.allowedInMath,
    numOptionalArgs: r.numOptionalArgs || 0,
    infix: !!r.infix,
    primitive: !!r.primitive,
    handler: n
  }, c = 0; c < t.length; ++c)
    La[t[c]] = u;
  e && (i && (fr[e] = i), l && (gr[e] = l));
}
function Rt(a) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = a;
  F({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: r
  });
}
var br = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, ve = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, ut = T.makeSpan, fs = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], gs = ["rightmost", "mrel", "mclose", "mpunct"], bs = {
  display: Y.DISPLAY,
  text: Y.TEXT,
  script: Y.SCRIPT,
  scriptscript: Y.SCRIPTSCRIPT
}, vs = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Ee = function(e, t, r, n) {
  n === void 0 && (n = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var u = re(e[l], t);
    if (u instanceof Gt) {
      var c = u.children;
      i.push(...c);
    } else
      i.push(u);
  }
  if (T.tryCombineChars(i), !r)
    return i;
  var p = t;
  if (e.length === 1) {
    var m = e[0];
    m.type === "sizing" ? p = t.havingSize(m.size) : m.type === "styling" && (p = t.havingStyle(bs[m.style]));
  }
  var b = ut([n[0] || "leftmost"], [], t), x = ut([n[1] || "rightmost"], [], t), v = r === "root";
  return Y0(i, (k, E) => {
    var O = E.classes[0], N = k.classes[0];
    O === "mbin" && Z.contains(gs, N) ? E.classes[0] = "mord" : N === "mbin" && Z.contains(fs, O) && (k.classes[0] = "mord");
  }, {
    node: b
  }, x, v), Y0(i, (k, E) => {
    var O = Kr(E), N = Kr(k), w = O && N ? k.hasClass("mtight") ? ms[O][N] : ps[O][N] : null;
    if (w)
      return T.makeGlue(w, p);
  }, {
    node: b
  }, x, v), i;
}, Y0 = function a(e, t, r, n, i) {
  n && e.push(n);
  for (var l = 0; l < e.length; l++) {
    var u = e[l], c = za(u);
    if (c) {
      a(c.children, t, r, null, i);
      continue;
    }
    var p = !u.hasClass("mspace");
    if (p) {
      var m = t(u, r.node);
      m && (r.insertAfter ? r.insertAfter(m) : (e.unshift(m), l++));
    }
    p ? r.node = u : i && u.hasClass("newline") && (r.node = ut(["leftmost"])), r.insertAfter = ((b) => (x) => {
      e.splice(b + 1, 0, x), l++;
    })(l);
  }
  n && e.pop();
}, za = function(e) {
  return e instanceof Gt || e instanceof s0 || e instanceof Yt && e.hasClass("enclosing") ? e : null;
}, ys = function a(e, t) {
  var r = za(e);
  if (r) {
    var n = r.children;
    if (n.length) {
      if (t === "right")
        return a(n[n.length - 1], "right");
      if (t === "left")
        return a(n[0], "left");
    }
  }
  return e;
}, Kr = function(e, t) {
  return e ? (t && (e = ys(e, t)), vs[e.classes[0]] || null) : null;
}, qt = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return ut(t.concat(r));
}, re = function(e, t, r) {
  if (!e)
    return ut();
  if (fr[e.type]) {
    var n = fr[e.type](e, t);
    if (r && t.size !== r.size) {
      n = ut(t.sizingClasses(r), [n], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      n.height *= i, n.depth *= i;
    }
    return n;
  } else
    throw new L("Got group of unknown type: '" + e.type + "'");
};
function nr(a, e) {
  var t = ut(["base"], a, e), r = ut(["strut"]);
  return r.style.height = P(t.height + t.depth), t.depth && (r.style.verticalAlign = P(-t.depth)), t.children.unshift(r), t;
}
function Wr(a, e) {
  var t = null;
  a.length === 1 && a[0].type === "tag" && (t = a[0].tag, a = a[0].body);
  var r = Ee(a, e, "root"), n;
  r.length === 2 && r[1].hasClass("tag") && (n = r.pop());
  for (var i = [], l = [], u = 0; u < r.length; u++)
    if (l.push(r[u]), r[u].hasClass("mbin") || r[u].hasClass("mrel") || r[u].hasClass("allowbreak")) {
      for (var c = !1; u < r.length - 1 && r[u + 1].hasClass("mspace") && !r[u + 1].hasClass("newline"); )
        u++, l.push(r[u]), r[u].hasClass("nobreak") && (c = !0);
      c || (i.push(nr(l, e)), l = []);
    } else
      r[u].hasClass("newline") && (l.pop(), l.length > 0 && (i.push(nr(l, e)), l = []), i.push(r[u]));
  l.length > 0 && i.push(nr(l, e));
  var p;
  t ? (p = nr(Ee(t, e, !0)), p.classes = ["tag"], i.push(p)) : n && i.push(n);
  var m = ut(["katex-html"], i);
  if (m.setAttribute("aria-hidden", "true"), p) {
    var b = p.children[0];
    b.style.height = P(m.height + m.depth), m.depth && (b.style.verticalAlign = P(-m.depth));
  }
  return m;
}
function Pa(a) {
  return new Gt(a);
}
class Ue {
  constructor(e, t, r) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = r || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = bt(this.classes));
    for (var r = 0; r < this.children.length; r++)
      e.appendChild(this.children[r].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += Z.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + Z.escape(bt(this.classes)) + '"'), e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class Ft {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return Z.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text iteself).
   */
  toText() {
    return this.text;
  }
}
class ws {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", P(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + P(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var M = {
  MathNode: Ue,
  TextNode: Ft,
  SpaceNode: ws,
  newDocumentFragment: Pa
}, Ye = function(e, t, r) {
  return de[t][e] && de[t][e].replace && e.charCodeAt(0) !== 55349 && !(_a.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = de[t][e].replace), new M.TextNode(e);
}, o0 = function(e) {
  return e.length === 1 ? e[0] : new M.MathNode("mrow", e);
}, u0 = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var r = t.font;
  if (!r || r === "mathnormal")
    return null;
  var n = e.mode;
  if (r === "mathit")
    return "italic";
  if (r === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (r === "mathbf")
    return "bold";
  if (r === "mathbb")
    return "double-struck";
  if (r === "mathfrak")
    return "fraktur";
  if (r === "mathscr" || r === "mathcal")
    return "script";
  if (r === "mathsf")
    return "sans-serif";
  if (r === "mathtt")
    return "monospace";
  var i = e.text;
  if (Z.contains(["\\imath", "\\jmath"], i))
    return null;
  de[n][i] && de[n][i].replace && (i = de[n][i].replace);
  var l = T.fontMap[r].fontName;
  return i0(i, l, n) ? T.fontMap[r].variant : null;
}, Pe = function(e, t, r) {
  if (e.length === 1) {
    var n = oe(e[0], t);
    return r && n instanceof Ue && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n];
  }
  for (var i = [], l, u = 0; u < e.length; u++) {
    var c = oe(e[u], t);
    if (c instanceof Ue && l instanceof Ue) {
      if (c.type === "mtext" && l.type === "mtext" && c.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && l.type === "mn") {
        l.children.push(...c.children);
        continue;
      } else if (c.type === "mi" && c.children.length === 1 && l.type === "mn") {
        var p = c.children[0];
        if (p instanceof Ft && p.text === ".") {
          l.children.push(...c.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var m = l.children[0];
        if (m instanceof Ft && m.text === "̸" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
          var b = c.children[0];
          b instanceof Ft && b.text.length > 0 && (b.text = b.text.slice(0, 1) + "̸" + b.text.slice(1), i.pop());
        }
      }
    }
    i.push(c), l = c;
  }
  return i;
}, yt = function(e, t, r) {
  return o0(Pe(e, t, r));
}, oe = function(e, t) {
  if (!e)
    return new M.MathNode("mrow");
  if (gr[e.type]) {
    var r = gr[e.type](e, t);
    return r;
  } else
    throw new L("Got group of unknown type: '" + e.type + "'");
};
function V0(a, e, t, r, n) {
  var i = Pe(a, t), l;
  i.length === 1 && i[0] instanceof Ue && Z.contains(["mrow", "mtable"], i[0].type) ? l = i[0] : l = new M.MathNode("mrow", i);
  var u = new M.MathNode("annotation", [new M.TextNode(e)]);
  u.setAttribute("encoding", "application/x-tex");
  var c = new M.MathNode("semantics", [l, u]), p = new M.MathNode("math", [c]);
  p.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && p.setAttribute("display", "block");
  var m = n ? "katex" : "katex-mathml";
  return T.makeSpan([m], [p]);
}
var Ba = function(e) {
  return new it({
    style: e.displayMode ? Y.DISPLAY : Y.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Fa = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = T.makeSpan(r, [e]);
  }
  return e;
}, xs = function(e, t, r) {
  var n = Ba(r), i;
  if (r.output === "mathml")
    return V0(e, t, n, r.displayMode, !0);
  if (r.output === "html") {
    var l = Wr(e, n);
    i = T.makeSpan(["katex"], [l]);
  } else {
    var u = V0(e, t, n, r.displayMode, !1), c = Wr(e, n);
    i = T.makeSpan(["katex"], [u, c]);
  }
  return Fa(i, r);
}, Es = function(e, t, r) {
  var n = Ba(r), i = Wr(e, n), l = T.makeSpan(["katex"], [i]);
  return Fa(l, r);
}, Ss = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, ks = function(e) {
  var t = new M.MathNode("mo", [new M.TextNode(Ss[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Ts = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, As = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Is = function(e, t) {
  function r() {
    var u = 4e5, c = e.label.slice(1);
    if (Z.contains(["widehat", "widecheck", "widetilde", "utilde"], c)) {
      var p = e, m = As(p.base), b, x, v;
      if (m > 5)
        c === "widehat" || c === "widecheck" ? (b = 420, u = 2364, v = 0.42, x = c + "4") : (b = 312, u = 2340, v = 0.34, x = "tilde4");
      else {
        var k = [1, 1, 2, 2, 3, 3][m];
        c === "widehat" || c === "widecheck" ? (u = [0, 1062, 2364, 2364, 2364][k], b = [0, 239, 300, 360, 420][k], v = [0, 0.24, 0.3, 0.3, 0.36, 0.42][k], x = c + k) : (u = [0, 600, 1033, 2339, 2340][k], b = [0, 260, 286, 306, 312][k], v = [0, 0.26, 0.286, 0.3, 0.306, 0.34][k], x = "tilde" + k);
      }
      var E = new vt(x), O = new ot([E], {
        width: "100%",
        height: P(v),
        viewBox: "0 0 " + u + " " + b,
        preserveAspectRatio: "none"
      });
      return {
        span: T.makeSvgSpan([], [O], t),
        minWidth: 0,
        height: v
      };
    } else {
      var N = [], w = Ts[c], [S, A, I] = w, R = I / 1e3, D = S.length, H, B;
      if (D === 1) {
        var ae = w[3];
        H = ["hide-tail"], B = [ae];
      } else if (D === 2)
        H = ["halfarrow-left", "halfarrow-right"], B = ["xMinYMin", "xMaxYMin"];
      else if (D === 3)
        H = ["brace-left", "brace-center", "brace-right"], B = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + D + " children.");
      for (var ee = 0; ee < D; ee++) {
        var ne = new vt(S[ee]), Ae = new ot([ne], {
          width: "400em",
          height: P(R),
          viewBox: "0 0 " + u + " " + I,
          preserveAspectRatio: B[ee] + " slice"
        }), he = T.makeSvgSpan([H[ee]], [Ae], t);
        if (D === 1)
          return {
            span: he,
            minWidth: A,
            height: R
          };
        he.style.height = P(R), N.push(he);
      }
      return {
        span: T.makeSpan(["stretchy"], N, t),
        minWidth: A,
        height: R
      };
    }
  }
  var {
    span: n,
    minWidth: i,
    height: l
  } = r();
  return n.height = l, n.style.height = P(l), i > 0 && (n.style.minWidth = P(i)), n;
}, Rs = function(e, t, r, n, i) {
  var l, u = e.height + e.depth + r + n;
  if (/fbox|color|angl/.test(t)) {
    if (l = T.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var c = i.color && i.getColor();
      c && (l.style.borderColor = c);
    }
  } else {
    var p = [];
    /^[bx]cancel$/.test(t) && p.push(new Xr({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && p.push(new Xr({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var m = new ot(p, {
      width: "100%",
      height: P(u)
    });
    l = T.makeSvgSpan([], [m], i);
  }
  return l.height = u, l.style.height = P(u), l;
}, ct = {
  encloseSpan: Rs,
  mathMLnode: ks,
  svgSpan: Is
};
function Q(a, e) {
  if (!a || a.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (a ? "node of type " + a.type : String(a)));
  return a;
}
function c0(a) {
  var e = wr(a);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (a ? "node of type " + a.type : String(a)));
  return e;
}
function wr(a) {
  return a && (a.type === "atom" || Qi.hasOwnProperty(a.type)) ? a : null;
}
var d0 = (a, e) => {
  var t, r, n;
  a && a.type === "supsub" ? (r = Q(a.base, "accent"), t = r.base, a.base = t, n = Zi(re(a, e)), a.base = r) : (r = Q(a, "accent"), t = r.base);
  var i = re(t, e.havingCrampedStyle()), l = r.isShifty && Z.isCharacterBox(t), u = 0;
  if (l) {
    var c = Z.getBaseElem(t), p = re(c, e.havingCrampedStyle());
    u = F0(p).skew;
  }
  var m = r.label === "\\c", b = m ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), x;
  if (r.isStretchy)
    x = ct.svgSpan(r, e), x = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: x,
        wrapperClasses: ["svg-align"],
        wrapperStyle: u > 0 ? {
          width: "calc(100% - " + P(2 * u) + ")",
          marginLeft: P(2 * u)
        } : void 0
      }]
    }, e);
  else {
    var v, k;
    r.label === "\\vec" ? (v = T.staticSvg("vec", e), k = T.svgData.vec[1]) : (v = T.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), v = F0(v), v.italic = 0, k = v.width, m && (b += v.depth)), x = T.makeSpan(["accent-body"], [v]);
    var E = r.label === "\\textcircled";
    E && (x.classes.push("accent-full"), b = i.height);
    var O = u;
    E || (O -= k / 2), x.style.left = P(O), r.label === "\\textcircled" && (x.style.top = ".2em"), x = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -b
      }, {
        type: "elem",
        elem: x
      }]
    }, e);
  }
  var N = T.makeSpan(["mord", "accent"], [x], e);
  return n ? (n.children[0] = N, n.height = Math.max(N.height, n.height), n.classes[0] = "mord", n) : N;
}, $a = (a, e) => {
  var t = a.isStretchy ? ct.mathMLnode(a.label) : new M.MathNode("mo", [Ye(a.label, a.mode)]), r = new M.MathNode("mover", [oe(a.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, Ns = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((a) => "\\" + a).join("|"));
F({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var t = br(e[0]), r = !Ns.test(a.funcName), n = !r || a.funcName === "\\widehat" || a.funcName === "\\widetilde" || a.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: a.parser.mode,
      label: a.funcName,
      isStretchy: r,
      isShifty: n,
      base: t
    };
  },
  htmlBuilder: d0,
  mathmlBuilder: $a
});
F({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = e[0], r = a.parser.mode;
    return r === "math" && (a.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + a.funcName + " works only in text mode"), r = "text"), {
      type: "accent",
      mode: r,
      label: a.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: d0,
  mathmlBuilder: $a
});
F({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: r,
      base: n
    };
  },
  htmlBuilder: (a, e) => {
    var t = re(a.base, e), r = ct.svgSpan(a, e), n = a.label === "\\utilde" ? 0.12 : 0, i = T.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: n
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return T.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ct.mathMLnode(a.label), r = new M.MathNode("munder", [oe(a.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var ir = (a) => {
  var e = new M.MathNode("mpadded", a ? [a] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
F({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a;
    return {
      type: "xArrow",
      mode: r.mode,
      label: n,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unamibiguously determined from the passed-in `type` above.
  htmlBuilder(a, e) {
    var t = e.style, r = e.havingStyle(t.sup()), n = T.wrapFragment(re(a.body, r, e), e), i = a.label.slice(0, 2) === "\\x" ? "x" : "cd";
    n.classes.push(i + "-arrow-pad");
    var l;
    a.below && (r = e.havingStyle(t.sub()), l = T.wrapFragment(re(a.below, r, e), e), l.classes.push(i + "-arrow-pad"));
    var u = ct.svgSpan(a, e), c = -e.fontMetrics().axisHeight + 0.5 * u.height, p = -e.fontMetrics().axisHeight - 0.5 * u.height - 0.111;
    (n.depth > 0.25 || a.label === "\\xleftequilibrium") && (p -= n.depth);
    var m;
    if (l) {
      var b = -e.fontMetrics().axisHeight + l.height + 0.5 * u.height + 0.111;
      m = T.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: p
        }, {
          type: "elem",
          elem: u,
          shift: c
        }, {
          type: "elem",
          elem: l,
          shift: b
        }]
      }, e);
    } else
      m = T.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: p
        }, {
          type: "elem",
          elem: u,
          shift: c
        }]
      }, e);
    return m.children[0].children[0].children[1].classes.push("svg-align"), T.makeSpan(["mrel", "x-arrow"], [m], e);
  },
  mathmlBuilder(a, e) {
    var t = ct.mathMLnode(a.label);
    t.setAttribute("minsize", a.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (a.body) {
      var n = ir(oe(a.body, e));
      if (a.below) {
        var i = ir(oe(a.below, e));
        r = new M.MathNode("munderover", [t, i, n]);
      } else
        r = new M.MathNode("mover", [t, n]);
    } else if (a.below) {
      var l = ir(oe(a.below, e));
      r = new M.MathNode("munder", [t, l]);
    } else
      r = ir(), r = new M.MathNode("mover", [t, r]);
    return r;
  }
});
var _s = T.makeSpan;
function Ua(a, e) {
  var t = Ee(a.body, e, !0);
  return _s([a.mclass], t, e);
}
function qa(a, e) {
  var t, r = Pe(a.body, e);
  return a.mclass === "minner" ? t = new M.MathNode("mpadded", r) : a.mclass === "mord" ? a.isCharacterBox ? (t = r[0], t.type = "mi") : t = new M.MathNode("mi", r) : (a.isCharacterBox ? (t = r[0], t.type = "mo") : t = new M.MathNode("mo", r), a.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : a.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : a.mclass === "mopen" || a.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : a.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
F({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + r.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: ve(n),
      isCharacterBox: Z.isCharacterBox(n)
    };
  },
  htmlBuilder: Ua,
  mathmlBuilder: qa
});
var xr = (a) => {
  var e = a.type === "ordgroup" && a.body.length ? a.body[0] : a;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
F({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: xr(e[0]),
      body: ve(e[1]),
      isCharacterBox: Z.isCharacterBox(e[1])
    };
  }
});
F({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[1], i = e[0], l;
    r !== "\\stackrel" ? l = xr(n) : l = "mrel";
    var u = {
      type: "op",
      mode: n.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: ve(n)
    }, c = {
      type: "supsub",
      mode: i.mode,
      base: u,
      sup: r === "\\underset" ? null : i,
      sub: r === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [c],
      isCharacterBox: Z.isCharacterBox(c)
    };
  },
  htmlBuilder: Ua,
  mathmlBuilder: qa
});
F({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: xr(e[0]),
      body: ve(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = Ee(a.body, e, !0), r = T.makeSpan([a.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(a, e) {
    var t = Pe(a.body, e), r = new M.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var Os = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, X0 = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), j0 = (a) => a.type === "textord" && a.text === "@", Cs = (a, e) => (a.type === "mathord" || a.type === "atom") && a.text === e;
function Ms(a, e, t) {
  var r = Os[a];
  switch (r) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(r, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var n = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: r,
        mode: "math",
        family: "rel"
      }, l = t.callFunction("\\Big", [i], []), u = t.callFunction("\\\\cdright", [e[1]], []), c = {
        type: "ordgroup",
        mode: "math",
        body: [n, l, u]
      };
      return t.callFunction("\\\\cdparent", [c], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var p = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [p], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Ds(a) {
  var e = [];
  for (a.gullet.beginGroup(), a.gullet.macros.set("\\cr", "\\\\\\relax"), a.gullet.beginGroup(); ; ) {
    e.push(a.parseExpression(!1, "\\\\")), a.gullet.endGroup(), a.gullet.beginGroup();
    var t = a.fetch().text;
    if (t === "&" || t === "\\\\")
      a.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new L("Expected \\\\ or \\cr or \\end", a.nextToken);
  }
  for (var r = [], n = [r], i = 0; i < e.length; i++) {
    for (var l = e[i], u = X0(), c = 0; c < l.length; c++)
      if (!j0(l[c]))
        u.body.push(l[c]);
      else {
        r.push(u), c += 1;
        var p = c0(l[c]).text, m = new Array(2);
        if (m[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, m[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(p) > -1))
          if ("<>AV".indexOf(p) > -1)
            for (var b = 0; b < 2; b++) {
              for (var x = !0, v = c + 1; v < l.length; v++) {
                if (Cs(l[v], p)) {
                  x = !1, c = v;
                  break;
                }
                if (j0(l[v]))
                  throw new L("Missing a " + p + " character to complete a CD arrow.", l[v]);
                m[b].body.push(l[v]);
              }
              if (x)
                throw new L("Missing a " + p + " character to complete a CD arrow.", l[c]);
            }
          else
            throw new L('Expected one of "<>AV=|." after @', l[c]);
        var k = Ms(p, m, a), E = {
          type: "styling",
          body: [k],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(E), u = X0();
      }
    i % 2 === 0 ? r.push(u) : r.shift(), r = [], n.push(r);
  }
  a.gullet.endGroup(), a.gullet.endGroup();
  var O = new Array(n[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: n,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: O,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(n.length + 1).fill([])
  };
}
F({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: r.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = e.havingStyle(e.style.sup()), r = T.wrapFragment(re(a.label, t, e), e);
    return r.classes.push("cd-label-" + a.side), r.style.bottom = P(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(a, e) {
    var t = new M.MathNode("mrow", [oe(a.label, e)]);
    return t = new M.MathNode("mpadded", [t]), t.setAttribute("width", "0"), a.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new M.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
F({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = T.wrapFragment(re(a.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(a, e) {
    return new M.MathNode("mrow", [oe(a.fragment, e)]);
  }
});
F({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    for (var {
      parser: t
    } = a, r = Q(e[0], "ordgroup"), n = r.body, i = "", l = 0; l < n.length; l++) {
      var u = Q(n[l], "textord");
      i += u.text;
    }
    var c = parseInt(i), p;
    if (isNaN(c))
      throw new L("\\@char has non-numeric argument " + i);
    if (c < 0 || c >= 1114111)
      throw new L("\\@char with invalid code point " + i);
    return c <= 65535 ? p = String.fromCharCode(c) : (c -= 65536, p = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: p
    };
  }
});
var Ha = (a, e) => {
  var t = Ee(a.body, e.withColor(a.color), !1);
  return T.makeFragment(t);
}, Ga = (a, e) => {
  var t = Pe(a.body, e.withColor(a.color)), r = new M.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", a.color), r;
};
F({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = Q(e[0], "color-token").color, n = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: ve(n)
    };
  },
  htmlBuilder: Ha,
  mathmlBuilder: Ga
});
F({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(a, e) {
    var {
      parser: t,
      breakOnTokenText: r
    } = a, n = Q(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", n);
    var i = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: i
    };
  },
  htmlBuilder: Ha,
  mathmlBuilder: Ga
});
F({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = r.gullet.future().text === "[" ? r.parseSizeGroup(!0) : null, i = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: r.mode,
      newLine: i,
      size: n && Q(n, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(a, e) {
    var t = T.makeSpan(["mspace"], [], e);
    return a.newLine && (t.classes.push("newline"), a.size && (t.style.marginTop = P(ge(a.size, e)))), t;
  },
  mathmlBuilder(a, e) {
    var t = new M.MathNode("mspace");
    return a.newLine && (t.setAttribute("linebreak", "newline"), a.size && t.setAttribute("height", P(ge(a.size, e)))), t;
  }
});
var Zr = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Ya = (a) => {
  var e = a.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new L("Expected a control sequence", a);
  return e;
}, Ls = (a) => {
  var e = a.gullet.popToken();
  return e.text === "=" && (e = a.gullet.popToken(), e.text === " " && (e = a.gullet.popToken())), e;
}, Va = (a, e, t, r) => {
  var n = a.gullet.macros.get(t.text);
  n == null && (t.noexpand = !0, n = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !a.gullet.isExpandable(t.text)
  }), a.gullet.macros.set(e, n, r);
};
F({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    e.consumeSpaces();
    var r = e.fetch();
    if (Zr[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = Zr[r.text]), Q(e.parseFunction(), "internal");
    throw new L("Invalid token after macro prefix", r);
  }
});
F({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = e.gullet.popToken(), n = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(n))
      throw new L("Expected a control sequence", r);
    for (var i = 0, l, u = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), u[i].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new L('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new L('Argument number "' + r.text + '" out of order');
        i++, u.push([]);
      } else {
        if (r.text === "EOF")
          throw new L("Expected a macro definition");
        u[i].push(r.text);
      }
    var {
      tokens: c
    } = e.gullet.consumeArg();
    return l && c.unshift(l), (t === "\\edef" || t === "\\xdef") && (c = e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(n, {
      tokens: c,
      numArgs: i,
      delimiters: u
    }, t === Zr[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
F({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = Ya(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var n = Ls(e);
    return Va(e, r, n, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
F({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = Ya(e.gullet.popToken()), n = e.gullet.popToken(), i = e.gullet.popToken();
    return Va(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(n), {
      type: "internal",
      mode: e.mode
    };
  }
});
var Bt = function(e, t, r) {
  var n = de.math[e] && de.math[e].replace, i = i0(n || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, h0 = function(e, t, r, n) {
  var i = r.havingBaseStyle(t), l = T.makeSpan(n.concat(i.sizingClasses(r)), [e], r), u = i.sizeMultiplier / r.sizeMultiplier;
  return l.height *= u, l.depth *= u, l.maxFontSize = i.sizeMultiplier, l;
}, Xa = function(e, t, r) {
  var n = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = P(i), e.height -= i, e.depth += i;
}, zs = function(e, t, r, n, i, l) {
  var u = T.makeSymbol(e, "Main-Regular", i, n), c = h0(u, t, n, l);
  return r && Xa(c, n, t), c;
}, Ps = function(e, t, r, n) {
  return T.makeSymbol(e, "Size" + t + "-Regular", r, n);
}, ja = function(e, t, r, n, i, l) {
  var u = Ps(e, t, i, n), c = h0(T.makeSpan(["delimsizing", "size" + t], [u], n), Y.TEXT, n, l);
  return r && Xa(c, n, Y.TEXT), c;
}, Cr = function(e, t, r) {
  var n;
  t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
  var i = T.makeSpan(["delimsizinginner", n], [T.makeSpan([], [T.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, Mr = function(e, t, r) {
  var n = We["Size4-Regular"][e.charCodeAt(0)] ? We["Size4-Regular"][e.charCodeAt(0)][4] : We["Size1-Regular"][e.charCodeAt(0)][4], i = new vt("inner", Hi(e, Math.round(1e3 * t))), l = new ot([i], {
    width: P(n),
    height: P(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + P(n),
    viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), u = T.makeSvgSpan([], [l], r);
  return u.height = t, u.style.height = P(t), u.style.width = P(n), {
    type: "elem",
    elem: u
  };
}, Jr = 8e-3, sr = {
  type: "kern",
  size: -1 * Jr
}, Bs = ["|", "\\lvert", "\\rvert", "\\vert"], Fs = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Ka = function(e, t, r, n, i, l) {
  var u, c, p, m, b = "", x = 0;
  u = p = m = e, c = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? p = m = "⏐" : e === "\\Uparrow" ? p = m = "‖" : e === "\\downarrow" ? u = p = "⏐" : e === "\\Downarrow" ? u = p = "‖" : e === "\\updownarrow" ? (u = "\\uparrow", p = "⏐", m = "\\downarrow") : e === "\\Updownarrow" ? (u = "\\Uparrow", p = "‖", m = "\\Downarrow") : Z.contains(Bs, e) ? (p = "∣", b = "vert", x = 333) : Z.contains(Fs, e) ? (p = "∥", b = "doublevert", x = 556) : e === "[" || e === "\\lbrack" ? (u = "⎡", p = "⎢", m = "⎣", v = "Size4-Regular", b = "lbrack", x = 667) : e === "]" || e === "\\rbrack" ? (u = "⎤", p = "⎥", m = "⎦", v = "Size4-Regular", b = "rbrack", x = 667) : e === "\\lfloor" || e === "⌊" ? (p = u = "⎢", m = "⎣", v = "Size4-Regular", b = "lfloor", x = 667) : e === "\\lceil" || e === "⌈" ? (u = "⎡", p = m = "⎢", v = "Size4-Regular", b = "lceil", x = 667) : e === "\\rfloor" || e === "⌋" ? (p = u = "⎥", m = "⎦", v = "Size4-Regular", b = "rfloor", x = 667) : e === "\\rceil" || e === "⌉" ? (u = "⎤", p = m = "⎥", v = "Size4-Regular", b = "rceil", x = 667) : e === "(" || e === "\\lparen" ? (u = "⎛", p = "⎜", m = "⎝", v = "Size4-Regular", b = "lparen", x = 875) : e === ")" || e === "\\rparen" ? (u = "⎞", p = "⎟", m = "⎠", v = "Size4-Regular", b = "rparen", x = 875) : e === "\\{" || e === "\\lbrace" ? (u = "⎧", c = "⎨", m = "⎩", p = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (u = "⎫", c = "⎬", m = "⎭", p = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (u = "⎧", m = "⎩", p = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (u = "⎫", m = "⎭", p = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (u = "⎧", m = "⎭", p = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (u = "⎫", m = "⎩", p = "⎪", v = "Size4-Regular");
  var k = Bt(u, v, i), E = k.height + k.depth, O = Bt(p, v, i), N = O.height + O.depth, w = Bt(m, v, i), S = w.height + w.depth, A = 0, I = 1;
  if (c !== null) {
    var R = Bt(c, v, i);
    A = R.height + R.depth, I = 2;
  }
  var D = E + S + A, H = Math.max(0, Math.ceil((t - D) / (I * N))), B = D + H * I * N, ae = n.fontMetrics().axisHeight;
  r && (ae *= n.sizeMultiplier);
  var ee = B / 2 - ae, ne = [];
  if (b.length > 0) {
    var Ae = B - E - S, he = Math.round(B * 1e3), xe = Gi(b, Math.round(Ae * 1e3)), Ie = new vt(b, xe), _e = (x / 1e3).toFixed(3) + "em", ie = (he / 1e3).toFixed(3) + "em", G = new ot([Ie], {
      width: _e,
      height: ie,
      viewBox: "0 0 " + x + " " + he
    }), se = T.makeSvgSpan([], [G], n);
    se.height = he / 1e3, se.style.width = _e, se.style.height = ie, ne.push({
      type: "elem",
      elem: se
    });
  } else {
    if (ne.push(Cr(m, v, i)), ne.push(sr), c === null) {
      var me = B - E - S + 2 * Jr;
      ne.push(Mr(p, me, n));
    } else {
      var le = (B - E - S - A) / 2 + 2 * Jr;
      ne.push(Mr(p, le, n)), ne.push(sr), ne.push(Cr(c, v, i)), ne.push(sr), ne.push(Mr(p, le, n));
    }
    ne.push(sr), ne.push(Cr(u, v, i));
  }
  var et = n.havingBaseStyle(Y.TEXT), Oe = T.makeVList({
    positionType: "bottom",
    positionData: ee,
    children: ne
  }, et);
  return h0(T.makeSpan(["delimsizing", "mult"], [Oe], et), Y.TEXT, n, l);
}, Dr = 80, Lr = 0.08, zr = function(e, t, r, n, i) {
  var l = qi(e, n, r), u = new vt(e, l), c = new ot([u], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: P(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return T.makeSvgSpan(["hide-tail"], [c], i);
}, $s = function(e, t) {
  var r = t.havingBaseSizing(), n = Qa("\\surd", e * r.sizeMultiplier, Ja, r), i = r.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), u, c = 0, p = 0, m = 0, b;
  return n.type === "small" ? (m = 1e3 + 1e3 * l + Dr, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), c = (1 + l + Lr) / i, p = (1 + l) / i, u = zr("sqrtMain", c, m, l, t), u.style.minWidth = "0.853em", b = 0.833 / i) : n.type === "large" ? (m = (1e3 + Dr) * $t[n.size], p = ($t[n.size] + l) / i, c = ($t[n.size] + l + Lr) / i, u = zr("sqrtSize" + n.size, c, m, l, t), u.style.minWidth = "1.02em", b = 1 / i) : (c = e + l + Lr, p = e + l, m = Math.floor(1e3 * e + l) + Dr, u = zr("sqrtTall", c, m, l, t), u.style.minWidth = "0.742em", b = 1.056), u.height = p, u.style.height = P(c), {
    span: u,
    advanceWidth: b,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Wa = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Us = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Za = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], $t = [0, 1.2, 1.8, 2.4, 3], qs = function(e, t, r, n, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), Z.contains(Wa, e) || Z.contains(Za, e))
    return ja(e, t, !1, r, n, i);
  if (Z.contains(Us, e))
    return Ka(e, $t[t], !1, r, n, i);
  throw new L("Illegal delimiter: '" + e + "'");
}, Hs = [{
  type: "small",
  style: Y.SCRIPTSCRIPT
}, {
  type: "small",
  style: Y.SCRIPT
}, {
  type: "small",
  style: Y.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], Gs = [{
  type: "small",
  style: Y.SCRIPTSCRIPT
}, {
  type: "small",
  style: Y.SCRIPT
}, {
  type: "small",
  style: Y.TEXT
}, {
  type: "stack"
}], Ja = [{
  type: "small",
  style: Y.SCRIPTSCRIPT
}, {
  type: "small",
  style: Y.SCRIPT
}, {
  type: "small",
  style: Y.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], Ys = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Qa = function(e, t, r, n) {
  for (var i = Math.min(2, 3 - n.style.size), l = i; l < r.length && r[l].type !== "stack"; l++) {
    var u = Bt(e, Ys(r[l]), "math"), c = u.height + u.depth;
    if (r[l].type === "small") {
      var p = n.havingBaseStyle(r[l].style);
      c *= p.sizeMultiplier;
    }
    if (c > t)
      return r[l];
  }
  return r[r.length - 1];
}, en = function(e, t, r, n, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var u;
  Z.contains(Za, e) ? u = Hs : Z.contains(Wa, e) ? u = Ja : u = Gs;
  var c = Qa(e, t, u, n);
  return c.type === "small" ? zs(e, c.style, r, n, i, l) : c.type === "large" ? ja(e, c.size, r, n, i, l) : Ka(e, t, r, n, i, l);
}, Vs = function(e, t, r, n, i, l) {
  var u = n.fontMetrics().axisHeight * n.sizeMultiplier, c = 901, p = 5 / n.fontMetrics().ptPerEm, m = Math.max(t - u, r + u), b = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    m / 500 * c,
    2 * m - p
  );
  return en(e, b, !0, n, i, l);
}, lt = {
  sqrtImage: $s,
  sizedDelim: qs,
  sizeToMaxHeight: $t,
  customSizedDelim: en,
  leftRightDelim: Vs
}, K0 = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, Xs = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Er(a, e) {
  var t = wr(a);
  if (t && Z.contains(Xs, t.text))
    return t;
  throw t ? new L("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", a) : new L("Invalid delimiter type '" + a.type + "'", a);
}
F({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = Er(e[0], a);
    return {
      type: "delimsizing",
      mode: a.parser.mode,
      size: K0[a.funcName].size,
      mclass: K0[a.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => a.delim === "." ? T.makeSpan([a.mclass]) : lt.sizedDelim(a.delim, a.size, e, a.mode, [a.mclass]),
  mathmlBuilder: (a) => {
    var e = [];
    a.delim !== "." && e.push(Ye(a.delim, a.mode));
    var t = new M.MathNode("mo", e);
    a.mclass === "mopen" || a.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = P(lt.sizeToMaxHeight[a.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function W0(a) {
  if (!a.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
F({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = a.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new L("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: a.parser.mode,
      delim: Er(e[0], a).text,
      color: t
      // undefined if not set via \color
    };
  }
});
F({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = Er(e[0], a), r = a.parser;
    ++r.leftrightDepth;
    var n = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var i = Q(r.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: r.mode,
      body: n,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (a, e) => {
    W0(a);
    for (var t = Ee(a.body, e, !0, ["mopen", "mclose"]), r = 0, n = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (r = Math.max(t[l].height, r), n = Math.max(t[l].depth, n));
    r *= e.sizeMultiplier, n *= e.sizeMultiplier;
    var u;
    if (a.left === "." ? u = qt(e, ["mopen"]) : u = lt.leftRightDelim(a.left, r, n, e, a.mode, ["mopen"]), t.unshift(u), i)
      for (var c = 1; c < t.length; c++) {
        var p = t[c], m = p.isMiddle;
        m && (t[c] = lt.leftRightDelim(m.delim, r, n, m.options, a.mode, []));
      }
    var b;
    if (a.right === ".")
      b = qt(e, ["mclose"]);
    else {
      var x = a.rightColor ? e.withColor(a.rightColor) : e;
      b = lt.leftRightDelim(a.right, r, n, x, a.mode, ["mclose"]);
    }
    return t.push(b), T.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (a, e) => {
    W0(a);
    var t = Pe(a.body, e);
    if (a.left !== ".") {
      var r = new M.MathNode("mo", [Ye(a.left, a.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (a.right !== ".") {
      var n = new M.MathNode("mo", [Ye(a.right, a.mode)]);
      n.setAttribute("fence", "true"), a.rightColor && n.setAttribute("mathcolor", a.rightColor), t.push(n);
    }
    return o0(t);
  }
});
F({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = Er(e[0], a);
    if (!a.parser.leftrightDepth)
      throw new L("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: a.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => {
    var t;
    if (a.delim === ".")
      t = qt(e, []);
    else {
      t = lt.sizedDelim(a.delim, 1, e, a.mode, []);
      var r = {
        delim: a.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (a, e) => {
    var t = a.delim === "\\vert" || a.delim === "|" ? Ye("|", "text") : Ye(a.delim, a.mode), r = new M.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var p0 = (a, e) => {
  var t = T.wrapFragment(re(a.body, e), e), r = a.label.slice(1), n = e.sizeMultiplier, i, l = 0, u = Z.isCharacterBox(a.body);
  if (r === "sout")
    i = T.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / n, l = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var c = ge({
      number: 0.6,
      unit: "pt"
    }, e), p = ge({
      number: 0.35,
      unit: "ex"
    }, e), m = e.havingBaseSizing();
    n = n / m.sizeMultiplier;
    var b = t.height + t.depth + c + p;
    t.style.paddingLeft = P(b / 2 + c);
    var x = Math.floor(1e3 * b * n), v = $i(x), k = new ot([new vt("phase", v)], {
      width: "400em",
      height: P(x / 1e3),
      viewBox: "0 0 400000 " + x,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = T.makeSvgSpan(["hide-tail"], [k], e), i.style.height = P(b), l = t.depth + c + p;
  } else {
    /cancel/.test(r) ? u || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var E = 0, O = 0, N = 0;
    /box/.test(r) ? (N = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), E = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : N), O = E) : r === "angl" ? (N = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), E = 4 * N, O = Math.max(0, 0.25 - t.depth)) : (E = u ? 0.2 : 0, O = E), i = ct.encloseSpan(t, r, E, O, e), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = P(N)) : r === "angl" && N !== 0.049 && (i.style.borderTopWidth = P(N), i.style.borderRightWidth = P(N)), l = t.depth + O, a.backgroundColor && (i.style.backgroundColor = a.backgroundColor, a.borderColor && (i.style.borderColor = a.borderColor));
  }
  var w;
  if (a.backgroundColor)
    w = T.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: l
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var S = /cancel|phase/.test(r) ? ["svg-align"] : [];
    w = T.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: l,
          wrapperClasses: S
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (w.height = t.height, w.depth = t.depth), /cancel/.test(r) && !u ? T.makeSpan(["mord", "cancel-lap"], [w], e) : T.makeSpan(["mord"], [w], e);
}, m0 = (a, e) => {
  var t = 0, r = new M.MathNode(a.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [oe(a.body, e)]);
  switch (a.label) {
    case "\\cancel":
      r.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      r.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      r.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      r.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      r.setAttribute("notation", "box");
      break;
    case "\\angl":
      r.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * t + "pt"), r.setAttribute("height", "+" + 2 * t + "pt"), r.setAttribute("lspace", t + "pt"), r.setAttribute("voffset", t + "pt"), a.label === "\\fcolorbox") {
        var n = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        r.setAttribute("style", "border: " + n + "em solid " + String(a.borderColor));
      }
      break;
    case "\\xcancel":
      r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return a.backgroundColor && r.setAttribute("mathbackground", a.backgroundColor), r;
};
F({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a, i = Q(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: p0,
  mathmlBuilder: m0
});
F({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a, i = Q(e[0], "color-token").color, l = Q(e[1], "color-token").color, u = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      backgroundColor: l,
      borderColor: i,
      body: u
    };
  },
  htmlBuilder: p0,
  mathmlBuilder: m0
});
F({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
F({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: r,
      body: n
    };
  },
  htmlBuilder: p0,
  mathmlBuilder: m0
});
F({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var tn = {};
function Ze(a) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: n,
    htmlBuilder: i,
    mathmlBuilder: l
  } = a, u = {
    type: e,
    numArgs: r.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: n
  }, c = 0; c < t.length; ++c)
    tn[t[c]] = u;
  i && (fr[e] = i), l && (gr[e] = l);
}
var rn = {};
function h(a, e) {
  rn[a] = e;
}
function Z0(a) {
  var e = [];
  a.consumeSpaces();
  var t = a.fetch().text;
  for (t === "\\relax" && (a.consume(), a.consumeSpaces(), t = a.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    a.consume(), e.push(t === "\\hdashline"), a.consumeSpaces(), t = a.fetch().text;
  return e;
}
var Sr = (a) => {
  var e = a.parser.settings;
  if (!e.displayMode)
    throw new L("{" + a.envName + "} can be used only in display mode.");
};
function f0(a) {
  if (a.indexOf("ed") === -1)
    return a.indexOf("*") === -1;
}
function wt(a, e, t) {
  var {
    hskipBeforeAndAfter: r,
    addJot: n,
    cols: i,
    arraystretch: l,
    colSeparationType: u,
    autoTag: c,
    singleRow: p,
    emptySingleRow: m,
    maxNumCols: b,
    leqno: x
  } = e;
  if (a.gullet.beginGroup(), p || a.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var v = a.gullet.expandMacroAsText("\\arraystretch");
    if (v == null)
      l = 1;
    else if (l = parseFloat(v), !l || l < 0)
      throw new L("Invalid \\arraystretch: " + v);
  }
  a.gullet.beginGroup();
  var k = [], E = [k], O = [], N = [], w = c != null ? [] : void 0;
  function S() {
    c && a.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function A() {
    w && (a.gullet.macros.get("\\df@tag") ? (w.push(a.subparse([new qe("\\df@tag")])), a.gullet.macros.set("\\df@tag", void 0, !0)) : w.push(!!c && a.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (S(), N.push(Z0(a)); ; ) {
    var I = a.parseExpression(!1, p ? "\\end" : "\\\\");
    a.gullet.endGroup(), a.gullet.beginGroup(), I = {
      type: "ordgroup",
      mode: a.mode,
      body: I
    }, t && (I = {
      type: "styling",
      mode: a.mode,
      style: t,
      body: [I]
    }), k.push(I);
    var R = a.fetch().text;
    if (R === "&") {
      if (b && k.length === b) {
        if (p || u)
          throw new L("Too many tab characters: &", a.nextToken);
        a.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      a.consume();
    } else if (R === "\\end") {
      A(), k.length === 1 && I.type === "styling" && I.body[0].body.length === 0 && (E.length > 1 || !m) && E.pop(), N.length < E.length + 1 && N.push([]);
      break;
    } else if (R === "\\\\") {
      a.consume();
      var D = void 0;
      a.gullet.future().text !== " " && (D = a.parseSizeGroup(!0)), O.push(D ? D.value : null), A(), N.push(Z0(a)), k = [], E.push(k), S();
    } else
      throw new L("Expected & or \\\\ or \\cr or \\end", a.nextToken);
  }
  return a.gullet.endGroup(), a.gullet.endGroup(), {
    type: "array",
    mode: a.mode,
    addJot: n,
    arraystretch: l,
    body: E,
    cols: i,
    rowGaps: O,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: N,
    colSeparationType: u,
    tags: w,
    leqno: x
  };
}
function g0(a) {
  return a.slice(0, 1) === "d" ? "display" : "text";
}
var Je = function(e, t) {
  var r, n, i = e.body.length, l = e.hLinesBeforeRow, u = 0, c = new Array(i), p = [], m = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), b = 1 / t.fontMetrics().ptPerEm, x = 5 * b;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = t.havingStyle(Y.SCRIPT).sizeMultiplier;
    x = 0.2778 * (v / t.sizeMultiplier);
  }
  var k = e.colSeparationType === "CD" ? ge({
    number: 3,
    unit: "ex"
  }, t) : 12 * b, E = 3 * b, O = e.arraystretch * k, N = 0.7 * O, w = 0.3 * O, S = 0;
  function A(Xt) {
    for (var jt = 0; jt < Xt.length; ++jt)
      jt > 0 && (S += 0.25), p.push({
        pos: S,
        isDashed: Xt[jt]
      });
  }
  for (A(l[0]), r = 0; r < e.body.length; ++r) {
    var I = e.body[r], R = N, D = w;
    u < I.length && (u = I.length);
    var H = new Array(I.length);
    for (n = 0; n < I.length; ++n) {
      var B = re(I[n], t);
      D < B.depth && (D = B.depth), R < B.height && (R = B.height), H[n] = B;
    }
    var ae = e.rowGaps[r], ee = 0;
    ae && (ee = ge(ae, t), ee > 0 && (ee += w, D < ee && (D = ee), ee = 0)), e.addJot && (D += E), H.height = R, H.depth = D, S += R, H.pos = S, S += D + ee, c[r] = H, A(l[r + 1]);
  }
  var ne = S / 2 + t.fontMetrics().axisHeight, Ae = e.cols || [], he = [], xe, Ie, _e = [];
  if (e.tags && e.tags.some((Xt) => Xt))
    for (r = 0; r < i; ++r) {
      var ie = c[r], G = ie.pos - ne, se = e.tags[r], me = void 0;
      se === !0 ? me = T.makeSpan(["eqn-num"], [], t) : se === !1 ? me = T.makeSpan([], [], t) : me = T.makeSpan([], Ee(se, t, !0), t), me.depth = ie.depth, me.height = ie.height, _e.push({
        type: "elem",
        elem: me,
        shift: G
      });
    }
  for (
    n = 0, Ie = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    n < u || Ie < Ae.length;
    ++n, ++Ie
  ) {
    for (var le = Ae[Ie] || {}, et = !0; le.type === "separator"; ) {
      if (et || (xe = T.makeSpan(["arraycolsep"], []), xe.style.width = P(t.fontMetrics().doubleRuleSep), he.push(xe)), le.separator === "|" || le.separator === ":") {
        var Oe = le.separator === "|" ? "solid" : "dashed", Ce = T.makeSpan(["vertical-separator"], [], t);
        Ce.style.height = P(S), Ce.style.borderRightWidth = P(m), Ce.style.borderRightStyle = Oe, Ce.style.margin = "0 " + P(-m / 2);
        var tt = S - ne;
        tt && (Ce.style.verticalAlign = P(-tt)), he.push(Ce);
      } else
        throw new L("Invalid separator type: " + le.separator);
      Ie++, le = Ae[Ie] || {}, et = !1;
    }
    if (!(n >= u)) {
      var Me = void 0;
      (n > 0 || e.hskipBeforeAndAfter) && (Me = Z.deflt(le.pregap, x), Me !== 0 && (xe = T.makeSpan(["arraycolsep"], []), xe.style.width = P(Me), he.push(xe)));
      var _ = [];
      for (r = 0; r < i; ++r) {
        var z = c[r], U = z[n];
        if (U) {
          var W = z.pos - ne;
          U.depth = z.depth, U.height = z.height, _.push({
            type: "elem",
            elem: U,
            shift: W
          });
        }
      }
      _ = T.makeVList({
        positionType: "individualShift",
        children: _
      }, t), _ = T.makeSpan(["col-align-" + (le.align || "c")], [_]), he.push(_), (n < u - 1 || e.hskipBeforeAndAfter) && (Me = Z.deflt(le.postgap, x), Me !== 0 && (xe = T.makeSpan(["arraycolsep"], []), xe.style.width = P(Me), he.push(xe)));
    }
  }
  if (c = T.makeSpan(["mtable"], he), p.length > 0) {
    for (var K = T.makeLineSpan("hline", t, m), te = T.makeLineSpan("hdashline", t, m), De = [{
      type: "elem",
      elem: c,
      shift: 0
    }]; p.length > 0; ) {
      var rt = p.pop(), S0 = rt.pos - ne;
      rt.isDashed ? De.push({
        type: "elem",
        elem: te,
        shift: S0
      }) : De.push({
        type: "elem",
        elem: K,
        shift: S0
      });
    }
    c = T.makeVList({
      positionType: "individualShift",
      children: De
    }, t);
  }
  if (_e.length === 0)
    return T.makeSpan(["mord"], [c], t);
  var kr = T.makeVList({
    positionType: "individualShift",
    children: _e
  }, t);
  return kr = T.makeSpan(["tag"], [kr], t), T.makeFragment([c, kr]);
}, js = {
  c: "center ",
  l: "left ",
  r: "right "
}, Qe = function(e, t) {
  for (var r = [], n = new M.MathNode("mtd", [], ["mtr-glue"]), i = new M.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var u = e.body[l], c = [], p = 0; p < u.length; p++)
      c.push(new M.MathNode("mtd", [oe(u[p], t)]));
    e.tags && e.tags[l] && (c.unshift(n), c.push(n), e.leqno ? c.unshift(i) : c.push(i)), r.push(new M.MathNode("mtr", c));
  }
  var m = new M.MathNode("mtable", r), b = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  m.setAttribute("rowspacing", P(b));
  var x = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var k = e.cols, E = "", O = !1, N = 0, w = k.length;
    k[0].type === "separator" && (x += "top ", N = 1), k[k.length - 1].type === "separator" && (x += "bottom ", w -= 1);
    for (var S = N; S < w; S++)
      k[S].type === "align" ? (v += js[k[S].align], O && (E += "none "), O = !0) : k[S].type === "separator" && O && (E += k[S].separator === "|" ? "solid " : "dashed ", O = !1);
    m.setAttribute("columnalign", v.trim()), /[sd]/.test(E) && m.setAttribute("columnlines", E.trim());
  }
  if (e.colSeparationType === "align") {
    for (var A = e.cols || [], I = "", R = 1; R < A.length; R++)
      I += R % 2 ? "0em " : "1em ";
    m.setAttribute("columnspacing", I.trim());
  } else
    e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? m.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? m.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? m.setAttribute("columnspacing", "0.5em") : m.setAttribute("columnspacing", "1em");
  var D = "", H = e.hLinesBeforeRow;
  x += H[0].length > 0 ? "left " : "", x += H[H.length - 1].length > 0 ? "right " : "";
  for (var B = 1; B < H.length - 1; B++)
    D += H[B].length === 0 ? "none " : H[B][0] ? "dashed " : "solid ";
  return /[sd]/.test(D) && m.setAttribute("rowlines", D.trim()), x !== "" && (m = new M.MathNode("menclose", [m]), m.setAttribute("notation", x.trim())), e.arraystretch && e.arraystretch < 1 && (m = new M.MathNode("mstyle", [m]), m.setAttribute("scriptlevel", "1")), m;
}, an = function(e, t) {
  e.envName.indexOf("ed") === -1 && Sr(e);
  var r = [], n = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = wt(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : f0(e.envName),
    emptySingleRow: !0,
    colSeparationType: n,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), u, c = 0, p = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var m = "", b = 0; b < t[0].body.length; b++) {
      var x = Q(t[0].body[b], "textord");
      m += x.text;
    }
    u = Number(m), c = u * 2;
  }
  var v = !c;
  l.body.forEach(function(N) {
    for (var w = 1; w < N.length; w += 2) {
      var S = Q(N[w], "styling"), A = Q(S.body[0], "ordgroup");
      A.body.unshift(p);
    }
    if (v)
      c < N.length && (c = N.length);
    else {
      var I = N.length / 2;
      if (u < I)
        throw new L("Too many math in a row: " + ("expected " + u + ", but got " + I), N[0]);
    }
  });
  for (var k = 0; k < c; ++k) {
    var E = "r", O = 0;
    k % 2 === 1 ? E = "l" : k > 0 && v && (O = 1), r[k] = {
      type: "align",
      align: E,
      pregap: O,
      postgap: 0
    };
  }
  return l.colSeparationType = v ? "align" : "alignat", l;
};
Ze({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = wr(e[0]), r = t ? [e[0]] : Q(e[0], "ordgroup").body, n = r.map(function(l) {
      var u = c0(l), c = u.text;
      if ("lcr".indexOf(c) !== -1)
        return {
          type: "align",
          align: c
        };
      if (c === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (c === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new L("Unknown column alignment: " + c, l);
    }), i = {
      cols: n,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: n.length
    };
    return wt(a.parser, i, g0(a.envName));
  },
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[a.envName.replace("*", "")], t = "c", r = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (a.envName.charAt(a.envName.length - 1) === "*") {
      var n = a.parser;
      if (n.consumeSpaces(), n.fetch().text === "[") {
        if (n.consume(), n.consumeSpaces(), t = n.fetch().text, "lcr".indexOf(t) === -1)
          throw new L("Expected l or c or r", n.nextToken);
        n.consume(), n.consumeSpaces(), n.expect("]"), n.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = wt(a.parser, r, g0(a.envName)), l = Math.max(0, ...i.body.map((u) => u.length));
    return i.cols = new Array(l).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: a.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 0.5
    }, t = wt(a.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = wr(e[0]), r = t ? [e[0]] : Q(e[0], "ordgroup").body, n = r.map(function(l) {
      var u = c0(l), c = u.text;
      if ("lc".indexOf(c) !== -1)
        return {
          type: "align",
          align: c
        };
      throw new L("Unknown column alignment: " + c, l);
    });
    if (n.length > 1)
      throw new L("{subarray} can contain only one column");
    var i = {
      cols: n,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = wt(a.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new L("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = wt(a.parser, e, g0(a.envName));
    return {
      type: "leftright",
      mode: a.mode,
      body: [t],
      left: a.envName.indexOf("r") > -1 ? "." : "\\{",
      right: a.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: an,
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    Z.contains(["gather", "gather*"], a.envName) && Sr(a);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: f0(a.envName),
      emptySingleRow: !0,
      leqno: a.parser.settings.leqno
    };
    return wt(a.parser, e, "display");
  },
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: an,
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    Sr(a);
    var e = {
      autoTag: f0(a.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: a.parser.settings.leqno
    };
    return wt(a.parser, e, "display");
  },
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
Ze({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(a) {
    return Sr(a), Ds(a.parser);
  },
  htmlBuilder: Je,
  mathmlBuilder: Qe
});
h("\\nonumber", "\\gdef\\@eqnsw{0}");
h("\\notag", "\\nonumber");
F({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(a, e) {
    throw new L(a.funcName + " valid only within array environment");
  }
});
var J0 = tn;
F({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    if (n.type !== "ordgroup")
      throw new L("Invalid environment name", n);
    for (var i = "", l = 0; l < n.body.length; ++l)
      i += Q(n.body[l], "textord").text;
    if (r === "\\begin") {
      if (!J0.hasOwnProperty(i))
        throw new L("No such environment: " + i, n);
      var u = J0[i], {
        args: c,
        optArgs: p
      } = t.parseArguments("\\begin{" + i + "}", u), m = {
        mode: t.mode,
        envName: i,
        parser: t
      }, b = u.handler(m, c, p);
      t.expect("\\end", !1);
      var x = t.nextToken, v = Q(t.parseFunction(), "environment");
      if (v.name !== i)
        throw new L("Mismatch: \\begin{" + i + "} matched by \\end{" + v.name + "}", x);
      return b;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: n
    };
  }
});
var nn = (a, e) => {
  var t = a.font, r = e.withFont(t);
  return re(a.body, r);
}, sn = (a, e) => {
  var t = a.font, r = e.withFont(t);
  return oe(a.body, r);
}, Q0 = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
F({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = br(e[0]), i = r;
    return i in Q0 && (i = Q0[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: n
    };
  },
  htmlBuilder: nn,
  mathmlBuilder: sn
});
F({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0], n = Z.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: xr(r),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: r
      }],
      isCharacterBox: n
    };
  }
});
F({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r,
      breakOnTokenText: n
    } = a, {
      mode: i
    } = t, l = t.parseExpression(!0, n), u = "math" + r.slice(1);
    return {
      type: "font",
      mode: i,
      font: u,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: nn,
  mathmlBuilder: sn
});
var ln = (a, e) => {
  var t = e;
  return a === "display" ? t = t.id >= Y.SCRIPT.id ? t.text() : Y.DISPLAY : a === "text" && t.size === Y.DISPLAY.size ? t = Y.TEXT : a === "script" ? t = Y.SCRIPT : a === "scriptscript" && (t = Y.SCRIPTSCRIPT), t;
}, b0 = (a, e) => {
  var t = ln(a.size, e.style), r = t.fracNum(), n = t.fracDen(), i;
  i = e.havingStyle(r);
  var l = re(a.numer, i, e);
  if (a.continued) {
    var u = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < u ? u : l.height, l.depth = l.depth < c ? c : l.depth;
  }
  i = e.havingStyle(n);
  var p = re(a.denom, i, e), m, b, x;
  a.hasBarLine ? (a.barSize ? (b = ge(a.barSize, e), m = T.makeLineSpan("frac-line", e, b)) : m = T.makeLineSpan("frac-line", e), b = m.height, x = m.height) : (m = null, b = 0, x = e.fontMetrics().defaultRuleThickness);
  var v, k, E;
  t.size === Y.DISPLAY.size || a.size === "display" ? (v = e.fontMetrics().num1, b > 0 ? k = 3 * x : k = 7 * x, E = e.fontMetrics().denom1) : (b > 0 ? (v = e.fontMetrics().num2, k = x) : (v = e.fontMetrics().num3, k = 3 * x), E = e.fontMetrics().denom2);
  var O;
  if (m) {
    var w = e.fontMetrics().axisHeight;
    v - l.depth - (w + 0.5 * b) < k && (v += k - (v - l.depth - (w + 0.5 * b))), w - 0.5 * b - (p.height - E) < k && (E += k - (w - 0.5 * b - (p.height - E)));
    var S = -(w - 0.5 * b);
    O = T.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: p,
        shift: E
      }, {
        type: "elem",
        elem: m,
        shift: S
      }, {
        type: "elem",
        elem: l,
        shift: -v
      }]
    }, e);
  } else {
    var N = v - l.depth - (p.height - E);
    N < k && (v += 0.5 * (k - N), E += 0.5 * (k - N)), O = T.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: p,
        shift: E
      }, {
        type: "elem",
        elem: l,
        shift: -v
      }]
    }, e);
  }
  i = e.havingStyle(t), O.height *= i.sizeMultiplier / e.sizeMultiplier, O.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var A;
  t.size === Y.DISPLAY.size ? A = e.fontMetrics().delim1 : t.size === Y.SCRIPTSCRIPT.size ? A = e.havingStyle(Y.SCRIPT).fontMetrics().delim2 : A = e.fontMetrics().delim2;
  var I, R;
  return a.leftDelim == null ? I = qt(e, ["mopen"]) : I = lt.customSizedDelim(a.leftDelim, A, !0, e.havingStyle(t), a.mode, ["mopen"]), a.continued ? R = T.makeSpan([]) : a.rightDelim == null ? R = qt(e, ["mclose"]) : R = lt.customSizedDelim(a.rightDelim, A, !0, e.havingStyle(t), a.mode, ["mclose"]), T.makeSpan(["mord"].concat(i.sizingClasses(e)), [I, T.makeSpan(["mfrac"], [O]), R], e);
}, v0 = (a, e) => {
  var t = new M.MathNode("mfrac", [oe(a.numer, e), oe(a.denom, e)]);
  if (!a.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (a.barSize) {
    var r = ge(a.barSize, e);
    t.setAttribute("linethickness", P(r));
  }
  var n = ln(a.size, e.style);
  if (n.size !== e.style.size) {
    t = new M.MathNode("mstyle", [t]);
    var i = n.size === Y.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (a.leftDelim != null || a.rightDelim != null) {
    var l = [];
    if (a.leftDelim != null) {
      var u = new M.MathNode("mo", [new M.TextNode(a.leftDelim.replace("\\", ""))]);
      u.setAttribute("fence", "true"), l.push(u);
    }
    if (l.push(t), a.rightDelim != null) {
      var c = new M.MathNode("mo", [new M.TextNode(a.rightDelim.replace("\\", ""))]);
      c.setAttribute("fence", "true"), l.push(c);
    }
    return o0(l);
  }
  return t;
};
F({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], i = e[1], l, u = null, c = null, p = "auto";
    switch (r) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, u = "(", c = ")";
        break;
      case "\\\\bracefrac":
        l = !1, u = "\\{", c = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, u = "[", c = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (r) {
      case "\\dfrac":
      case "\\dbinom":
        p = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        p = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: n,
      denom: i,
      hasBarLine: l,
      leftDelim: u,
      rightDelim: c,
      size: p,
      barSize: null
    };
  },
  htmlBuilder: b0,
  mathmlBuilder: v0
});
F({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: n,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
F({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t,
      token: r
    } = a, n;
    switch (t) {
      case "\\over":
        n = "\\frac";
        break;
      case "\\choose":
        n = "\\binom";
        break;
      case "\\atop":
        n = "\\\\atopfrac";
        break;
      case "\\brace":
        n = "\\\\bracefrac";
        break;
      case "\\brack":
        n = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: n,
      token: r
    };
  }
});
var ea = ["display", "text", "script", "scriptscript"], ta = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
F({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = e[4], n = e[5], i = br(e[0]), l = i.type === "atom" && i.family === "open" ? ta(i.text) : null, u = br(e[1]), c = u.type === "atom" && u.family === "close" ? ta(u.text) : null, p = Q(e[2], "size"), m, b = null;
    p.isBlank ? m = !0 : (b = p.value, m = b.number > 0);
    var x = "auto", v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var k = Q(v.body[0], "textord");
        x = ea[Number(k.text)];
      }
    } else
      v = Q(v, "textord"), x = ea[Number(v.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: r,
      denom: n,
      continued: !1,
      hasBarLine: m,
      barSize: b,
      leftDelim: l,
      rightDelim: c,
      size: x
    };
  },
  htmlBuilder: b0,
  mathmlBuilder: v0
});
F({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r,
      token: n
    } = a;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: Q(e[0], "size").value,
      token: n
    };
  }
});
F({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], i = Ti(Q(e[1], "infix").size), l = e[2], u = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: l,
      continued: !1,
      hasBarLine: u,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: b0,
  mathmlBuilder: v0
});
var on = (a, e) => {
  var t = e.style, r, n;
  a.type === "supsub" ? (r = a.sup ? re(a.sup, e.havingStyle(t.sup()), e) : re(a.sub, e.havingStyle(t.sub()), e), n = Q(a.base, "horizBrace")) : n = Q(a, "horizBrace");
  var i = re(n.base, e.havingBaseStyle(Y.DISPLAY)), l = ct.svgSpan(n, e), u;
  if (n.isOver ? (u = T.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), u.children[0].children[0].children[1].classes.push("svg-align")) : (u = T.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), u.children[0].children[0].children[0].classes.push("svg-align")), r) {
    var c = T.makeSpan(["mord", n.isOver ? "mover" : "munder"], [u], e);
    n.isOver ? u = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: r
      }]
    }, e) : u = T.makeVList({
      positionType: "bottom",
      positionData: c.depth + 0.2 + r.height + r.depth,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: c
      }]
    }, e);
  }
  return T.makeSpan(["mord", n.isOver ? "mover" : "munder"], [u], e);
}, Ks = (a, e) => {
  var t = ct.mathMLnode(a.label);
  return new M.MathNode(a.isOver ? "mover" : "munder", [oe(a.base, e), t]);
};
F({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: r,
      isOver: /^\\over/.test(r),
      base: e[0]
    };
  },
  htmlBuilder: on,
  mathmlBuilder: Ks
});
F({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[1], n = Q(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: n
    }) ? {
      type: "href",
      mode: t.mode,
      href: n,
      body: ve(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (a, e) => {
    var t = Ee(a.body, e, !1);
    return T.makeAnchor(a.href, [], t, e);
  },
  mathmlBuilder: (a, e) => {
    var t = yt(a.body, e);
    return t instanceof Ue || (t = new Ue("mrow", [t])), t.setAttribute("href", a.href), t;
  }
});
F({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = Q(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: r
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var n = [], i = 0; i < r.length; i++) {
      var l = r[i];
      l === "~" && (l = "\\textasciitilde"), n.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var u = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: n
    };
    return {
      type: "href",
      mode: t.mode,
      href: r,
      body: ve(u)
    };
  }
});
F({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "hbox",
      mode: t.mode,
      body: ve(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = Ee(a.body, e, !1);
    return T.makeFragment(t);
  },
  mathmlBuilder(a, e) {
    return new M.MathNode("mrow", Pe(a.body, e));
  }
});
F({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r,
      token: n
    } = a, i = Q(e[0], "raw").string, l = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var u, c = {};
    switch (r) {
      case "\\htmlClass":
        c.class = i, u = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        c.id = i, u = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        c.style = i, u = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var p = i.split(","), m = 0; m < p.length; m++) {
          var b = p[m].split("=");
          if (b.length !== 2)
            throw new L("Error parsing key-value for \\htmlData");
          c["data-" + b[0].trim()] = b[1].trim();
        }
        u = {
          command: "\\htmlData",
          attributes: c
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(u) ? {
      type: "html",
      mode: t.mode,
      attributes: c,
      body: ve(l)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (a, e) => {
    var t = Ee(a.body, e, !1), r = ["enclosing"];
    a.attributes.class && r.push(...a.attributes.class.trim().split(/\s+/));
    var n = T.makeSpan(r, t, e);
    for (var i in a.attributes)
      i !== "class" && a.attributes.hasOwnProperty(i) && n.setAttribute(i, a.attributes[i]);
    return n;
  },
  mathmlBuilder: (a, e) => yt(a.body, e)
});
F({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: ve(e[0]),
      mathml: ve(e[1])
    };
  },
  htmlBuilder: (a, e) => {
    var t = Ee(a.html, e, !1);
    return T.makeFragment(t);
  },
  mathmlBuilder: (a, e) => yt(a.mathml, e)
});
var Pr = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new L("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!Aa(r))
    throw new L("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
F({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (a, e, t) => {
    var {
      parser: r
    } = a, n = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, u = "";
    if (t[0])
      for (var c = Q(t[0], "raw").string, p = c.split(","), m = 0; m < p.length; m++) {
        var b = p[m].split("=");
        if (b.length === 2) {
          var x = b[1].trim();
          switch (b[0].trim()) {
            case "alt":
              u = x;
              break;
            case "width":
              n = Pr(x);
              break;
            case "height":
              i = Pr(x);
              break;
            case "totalheight":
              l = Pr(x);
              break;
            default:
              throw new L("Invalid key: '" + b[0] + "' in \\includegraphics.");
          }
        }
      }
    var v = Q(e[0], "url").url;
    return u === "" && (u = v, u = u.replace(/^.*[\\/]/, ""), u = u.substring(0, u.lastIndexOf("."))), r.settings.isTrusted({
      command: "\\includegraphics",
      url: v
    }) ? {
      type: "includegraphics",
      mode: r.mode,
      alt: u,
      width: n,
      height: i,
      totalheight: l,
      src: v
    } : r.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (a, e) => {
    var t = ge(a.height, e), r = 0;
    a.totalheight.number > 0 && (r = ge(a.totalheight, e) - t);
    var n = 0;
    a.width.number > 0 && (n = ge(a.width, e));
    var i = {
      height: P(t + r)
    };
    n > 0 && (i.width = P(n)), r > 0 && (i.verticalAlign = P(-r));
    var l = new Ki(a.src, a.alt, i);
    return l.height = t, l.depth = r, l;
  },
  mathmlBuilder: (a, e) => {
    var t = new M.MathNode("mglyph", []);
    t.setAttribute("alt", a.alt);
    var r = ge(a.height, e), n = 0;
    if (a.totalheight.number > 0 && (n = ge(a.totalheight, e) - r, t.setAttribute("valign", P(-n))), t.setAttribute("height", P(r + n)), a.width.number > 0) {
      var i = ge(a.width, e);
      t.setAttribute("width", P(i));
    }
    return t.setAttribute("src", a.src), t;
  }
});
F({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = Q(e[0], "size");
    if (t.settings.strict) {
      var i = r[1] === "m", l = n.value.unit === "mu";
      i ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + n.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: n.value
    };
  },
  htmlBuilder(a, e) {
    return T.makeGlue(a.dimension, e);
  },
  mathmlBuilder(a, e) {
    var t = ge(a.dimension, e);
    return new M.SpaceNode(t);
  }
});
F({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: r.slice(5),
      body: n
    };
  },
  htmlBuilder: (a, e) => {
    var t;
    a.alignment === "clap" ? (t = T.makeSpan([], [re(a.body, e)]), t = T.makeSpan(["inner"], [t], e)) : t = T.makeSpan(["inner"], [re(a.body, e)]);
    var r = T.makeSpan(["fix"], []), n = T.makeSpan([a.alignment], [t, r], e), i = T.makeSpan(["strut"]);
    return i.style.height = P(n.height + n.depth), n.depth && (i.style.verticalAlign = P(-n.depth)), n.children.unshift(i), n = T.makeSpan(["thinbox"], [n], e), T.makeSpan(["mord", "vbox"], [n], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new M.MathNode("mpadded", [oe(a.body, e)]);
    if (a.alignment !== "rlap") {
      var r = a.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
F({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(a, e) {
    var {
      funcName: t,
      parser: r
    } = a, n = r.mode;
    r.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", l = r.parseExpression(!1, i);
    return r.expect(i), r.switchMode(n), {
      type: "styling",
      mode: r.mode,
      style: "text",
      body: l
    };
  }
});
F({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(a, e) {
    throw new L("Mismatched " + a.funcName);
  }
});
var ra = (a, e) => {
  switch (e.style.size) {
    case Y.DISPLAY.size:
      return a.display;
    case Y.TEXT.size:
      return a.text;
    case Y.SCRIPT.size:
      return a.script;
    case Y.SCRIPTSCRIPT.size:
      return a.scriptscript;
    default:
      return a.text;
  }
};
F({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: ve(e[0]),
      text: ve(e[1]),
      script: ve(e[2]),
      scriptscript: ve(e[3])
    };
  },
  htmlBuilder: (a, e) => {
    var t = ra(a, e), r = Ee(t, e, !1);
    return T.makeFragment(r);
  },
  mathmlBuilder: (a, e) => {
    var t = ra(a, e);
    return yt(t, e);
  }
});
var un = (a, e, t, r, n, i, l) => {
  a = T.makeSpan([], [a]);
  var u = t && Z.isCharacterBox(t), c, p;
  if (e) {
    var m = re(e, r.havingStyle(n.sup()), r);
    p = {
      elem: m,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - m.depth)
    };
  }
  if (t) {
    var b = re(t, r.havingStyle(n.sub()), r);
    c = {
      elem: b,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - b.height)
    };
  }
  var x;
  if (p && c) {
    var v = r.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + a.depth + l;
    x = T.makeVList({
      positionType: "bottom",
      positionData: v,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: P(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: p.kern
      }, {
        type: "elem",
        elem: p.elem,
        marginLeft: P(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (c) {
    var k = a.height - l;
    x = T.makeVList({
      positionType: "top",
      positionData: k,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: P(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: a
      }]
    }, r);
  } else if (p) {
    var E = a.depth + l;
    x = T.makeVList({
      positionType: "bottom",
      positionData: E,
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: p.kern
      }, {
        type: "elem",
        elem: p.elem,
        marginLeft: P(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return a;
  var O = [x];
  if (c && i !== 0 && !u) {
    var N = T.makeSpan(["mspace"], [], r);
    N.style.marginRight = P(i), O.unshift(N);
  }
  return T.makeSpan(["mop", "op-limits"], O, r);
}, cn = ["\\smallint"], zt = (a, e) => {
  var t, r, n = !1, i;
  a.type === "supsub" ? (t = a.sup, r = a.sub, i = Q(a.base, "op"), n = !0) : i = Q(a, "op");
  var l = e.style, u = !1;
  l.size === Y.DISPLAY.size && i.symbol && !Z.contains(cn, i.name) && (u = !0);
  var c;
  if (i.symbol) {
    var p = u ? "Size2-Regular" : "Size1-Regular", m = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (m = i.name.slice(1), i.name = m === "oiint" ? "\\iint" : "\\iiint"), c = T.makeSymbol(i.name, p, "math", e, ["mop", "op-symbol", u ? "large-op" : "small-op"]), m.length > 0) {
      var b = c.italic, x = T.staticSvg(m + "Size" + (u ? "2" : "1"), e);
      c = T.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: c,
          shift: 0
        }, {
          type: "elem",
          elem: x,
          shift: u ? 0.08 : 0
        }]
      }, e), i.name = "\\" + m, c.classes.unshift("mop"), c.italic = b;
    }
  } else if (i.body) {
    var v = Ee(i.body, e, !0);
    v.length === 1 && v[0] instanceof Ge ? (c = v[0], c.classes[0] = "mop") : c = T.makeSpan(["mop"], v, e);
  } else {
    for (var k = [], E = 1; E < i.name.length; E++)
      k.push(T.mathsym(i.name[E], i.mode, e));
    c = T.makeSpan(["mop"], k, e);
  }
  var O = 0, N = 0;
  return (c instanceof Ge || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (O = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, N = c.italic), n ? un(c, t, r, e, l, N, O) : (O && (c.style.position = "relative", c.style.top = P(O)), c);
}, Vt = (a, e) => {
  var t;
  if (a.symbol)
    t = new Ue("mo", [Ye(a.name, a.mode)]), Z.contains(cn, a.name) && t.setAttribute("largeop", "false");
  else if (a.body)
    t = new Ue("mo", Pe(a.body, e));
  else {
    t = new Ue("mi", [new Ft(a.name.slice(1))]);
    var r = new Ue("mo", [Ye("⁡", "text")]);
    a.parentIsSupSub ? t = new Ue("mrow", [t, r]) : t = Pa([t, r]);
  }
  return t;
}, Ws = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
F({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = r;
    return n.length === 1 && (n = Ws[n]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: zt,
  mathmlBuilder: Vt
});
F({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: ve(r)
    };
  },
  htmlBuilder: zt,
  mathmlBuilder: Vt
});
var Zs = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
F({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: zt,
  mathmlBuilder: Vt
});
F({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: zt,
  mathmlBuilder: Vt
});
F({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = t;
    return r.length === 1 && (r = Zs[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: zt,
  mathmlBuilder: Vt
});
var dn = (a, e) => {
  var t, r, n = !1, i;
  a.type === "supsub" ? (t = a.sup, r = a.sub, i = Q(a.base, "operatorname"), n = !0) : i = Q(a, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var u = i.body.map((b) => {
      var x = b.text;
      return typeof x == "string" ? {
        type: "textord",
        mode: b.mode,
        text: x
      } : b;
    }), c = Ee(u, e.withFont("mathrm"), !0), p = 0; p < c.length; p++) {
      var m = c[p];
      m instanceof Ge && (m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = T.makeSpan(["mop"], c, e);
  } else
    l = T.makeSpan(["mop"], [], e);
  return n ? un(l, t, r, e, e.style, 0, 0) : l;
}, Js = (a, e) => {
  for (var t = Pe(a.body, e.withFont("mathrm")), r = !0, n = 0; n < t.length; n++) {
    var i = t[n];
    if (!(i instanceof M.SpaceNode))
      if (i instanceof M.MathNode)
        switch (i.type) {
          case "mi":
          case "mn":
          case "ms":
          case "mspace":
          case "mtext":
            break;
          case "mo": {
            var l = i.children[0];
            i.children.length === 1 && l instanceof M.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
            break;
          }
          default:
            r = !1;
        }
      else
        r = !1;
  }
  if (r) {
    var u = t.map((m) => m.toText()).join("");
    t = [new M.TextNode(u)];
  }
  var c = new M.MathNode("mi", t);
  c.setAttribute("mathvariant", "normal");
  var p = new M.MathNode("mo", [Ye("⁡", "text")]);
  return a.parentIsSupSub ? new M.MathNode("mrow", [c, p]) : M.newDocumentFragment([c, p]);
};
F({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: ve(n),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: dn,
  mathmlBuilder: Js
});
h("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Rt({
  type: "ordgroup",
  htmlBuilder(a, e) {
    return a.semisimple ? T.makeFragment(Ee(a.body, e, !1)) : T.makeSpan(["mord"], Ee(a.body, e, !0), e);
  },
  mathmlBuilder(a, e) {
    return yt(a.body, e, !0);
  }
});
F({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder(a, e) {
    var t = re(a.body, e.havingCrampedStyle()), r = T.makeLineSpan("overline-line", e), n = e.fontMetrics().defaultRuleThickness, i = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * n
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: n
      }]
    }, e);
    return T.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(a, e) {
    var t = new M.MathNode("mo", [new M.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new M.MathNode("mover", [oe(a.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
F({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: ve(r)
    };
  },
  htmlBuilder: (a, e) => {
    var t = Ee(a.body, e.withPhantom(), !1);
    return T.makeFragment(t);
  },
  mathmlBuilder: (a, e) => {
    var t = Pe(a.body, e);
    return new M.MathNode("mphantom", t);
  }
});
F({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (a, e) => {
    var t = T.makeSpan([], [re(a.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), T.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (a, e) => {
    var t = Pe(ve(a.body), e), r = new M.MathNode("mphantom", t), n = new M.MathNode("mpadded", [r]);
    return n.setAttribute("height", "0px"), n.setAttribute("depth", "0px"), n;
  }
});
F({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (a, e) => {
    var t = T.makeSpan(["inner"], [re(a.body, e.withPhantom())]), r = T.makeSpan(["fix"], []);
    return T.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (a, e) => {
    var t = Pe(ve(a.body), e), r = new M.MathNode("mphantom", t), n = new M.MathNode("mpadded", [r]);
    return n.setAttribute("width", "0px"), n;
  }
});
F({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = Q(e[0], "size").value, n = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: n
    };
  },
  htmlBuilder(a, e) {
    var t = re(a.body, e), r = ge(a.dy, e);
    return T.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    var t = new M.MathNode("mpadded", [oe(a.body, e)]), r = a.dy.number + a.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
F({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a) {
    var {
      parser: e
    } = a;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
F({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = t[0], i = Q(e[0], "size"), l = Q(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: n && Q(n, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(a, e) {
    var t = T.makeSpan(["mord", "rule"], [], e), r = ge(a.width, e), n = ge(a.height, e), i = a.shift ? ge(a.shift, e) : 0;
    return t.style.borderRightWidth = P(r), t.style.borderTopWidth = P(n), t.style.bottom = P(i), t.width = r, t.height = n + i, t.depth = -i, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(a, e) {
    var t = ge(a.width, e), r = ge(a.height, e), n = a.shift ? ge(a.shift, e) : 0, i = e.color && e.getColor() || "black", l = new M.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", P(t)), l.setAttribute("height", P(r));
    var u = new M.MathNode("mpadded", [l]);
    return n >= 0 ? u.setAttribute("height", P(n)) : (u.setAttribute("height", P(n)), u.setAttribute("depth", P(-n))), u.setAttribute("voffset", P(n)), u;
  }
});
function hn(a, e, t) {
  for (var r = Ee(a, e, !1), n = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var l = r[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[l + 1] === "reset-size" + e.size && (r[i].classes[l + 1] = "reset-size" + t.size), r[i].height *= n, r[i].depth *= n;
  }
  return T.makeFragment(r);
}
var aa = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], Qs = (a, e) => {
  var t = e.havingSize(a.size);
  return hn(a.body, t, e);
};
F({
  type: "sizing",
  names: aa,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: n
    } = a, i = n.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: n.mode,
      // Figure out what size to use based on the list of functions above
      size: aa.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: Qs,
  mathmlBuilder: (a, e) => {
    var t = e.havingSize(a.size), r = Pe(a.body, t), n = new M.MathNode("mstyle", r);
    return n.setAttribute("mathsize", P(t.sizeMultiplier)), n;
  }
});
F({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (a, e, t) => {
    var {
      parser: r
    } = a, n = !1, i = !1, l = t[0] && Q(t[0], "ordgroup");
    if (l)
      for (var u = "", c = 0; c < l.body.length; ++c) {
        var p = l.body[c];
        if (u = p.text, u === "t")
          n = !0;
        else if (u === "b")
          i = !0;
        else {
          n = !1, i = !1;
          break;
        }
      }
    else
      n = !0, i = !0;
    var m = e[0];
    return {
      type: "smash",
      mode: r.mode,
      body: m,
      smashHeight: n,
      smashDepth: i
    };
  },
  htmlBuilder: (a, e) => {
    var t = T.makeSpan([], [re(a.body, e)]);
    if (!a.smashHeight && !a.smashDepth)
      return t;
    if (a.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (a.smashDepth && (t.depth = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].depth = 0;
    var i = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return T.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new M.MathNode("mpadded", [oe(a.body, e)]);
    return a.smashHeight && t.setAttribute("height", "0px"), a.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
F({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: r.mode,
      body: i,
      index: n
    };
  },
  htmlBuilder(a, e) {
    var t = re(a.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = T.wrapFragment(t, e);
    var r = e.fontMetrics(), n = r.defaultRuleThickness, i = n;
    e.style.id < Y.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = n + i / 4, u = t.height + t.depth + l + n, {
      span: c,
      ruleWidth: p,
      advanceWidth: m
    } = lt.sqrtImage(u, e), b = c.height - p;
    b > t.height + t.depth + l && (l = (l + b - t.height - t.depth) / 2);
    var x = c.height - t.height - l - p;
    t.style.paddingLeft = P(m);
    var v = T.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + x)
      }, {
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: p
      }]
    }, e);
    if (a.index) {
      var k = e.havingStyle(Y.SCRIPTSCRIPT), E = re(a.index, k, e), O = 0.6 * (v.height - v.depth), N = T.makeVList({
        positionType: "shift",
        positionData: -O,
        children: [{
          type: "elem",
          elem: E
        }]
      }, e), w = T.makeSpan(["root"], [N]);
      return T.makeSpan(["mord", "sqrt"], [w, v], e);
    } else
      return T.makeSpan(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(a, e) {
    var {
      body: t,
      index: r
    } = a;
    return r ? new M.MathNode("mroot", [oe(t, e), oe(r, e)]) : new M.MathNode("msqrt", [oe(t, e)]);
  }
});
var na = {
  display: Y.DISPLAY,
  text: Y.TEXT,
  script: Y.SCRIPT,
  scriptscript: Y.SCRIPTSCRIPT
};
F({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a, e) {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: n
    } = a, i = n.parseExpression(!0, t), l = r.slice(1, r.length - 5);
    return {
      type: "styling",
      mode: n.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: i
    };
  },
  htmlBuilder(a, e) {
    var t = na[a.style], r = e.havingStyle(t).withFont("");
    return hn(a.body, r, e);
  },
  mathmlBuilder(a, e) {
    var t = na[a.style], r = e.havingStyle(t), n = Pe(a.body, r), i = new M.MathNode("mstyle", n), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, u = l[a.style];
    return i.setAttribute("scriptlevel", u[0]), i.setAttribute("displaystyle", u[1]), i;
  }
});
var el = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var n = r.limits && (t.style.size === Y.DISPLAY.size || r.alwaysHandleSupSub);
      return n ? zt : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === Y.DISPLAY.size || r.limits);
      return i ? dn : null;
    } else {
      if (r.type === "accent")
        return Z.isCharacterBox(r.base) ? d0 : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? on : null;
      } else
        return null;
    }
  else
    return null;
};
Rt({
  type: "supsub",
  htmlBuilder(a, e) {
    var t = el(a, e);
    if (t)
      return t(a, e);
    var {
      base: r,
      sup: n,
      sub: i
    } = a, l = re(r, e), u, c, p = e.fontMetrics(), m = 0, b = 0, x = r && Z.isCharacterBox(r);
    if (n) {
      var v = e.havingStyle(e.style.sup());
      u = re(n, v, e), x || (m = l.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var k = e.havingStyle(e.style.sub());
      c = re(i, k, e), x || (b = l.depth + k.fontMetrics().subDrop * k.sizeMultiplier / e.sizeMultiplier);
    }
    var E;
    e.style === Y.DISPLAY ? E = p.sup1 : e.style.cramped ? E = p.sup3 : E = p.sup2;
    var O = e.sizeMultiplier, N = P(0.5 / p.ptPerEm / O), w = null;
    if (c) {
      var S = a.base && a.base.type === "op" && a.base.name && (a.base.name === "\\oiint" || a.base.name === "\\oiiint");
      (l instanceof Ge || S) && (w = P(-l.italic));
    }
    var A;
    if (u && c) {
      m = Math.max(m, E, u.depth + 0.25 * p.xHeight), b = Math.max(b, p.sub2);
      var I = p.defaultRuleThickness, R = 4 * I;
      if (m - u.depth - (c.height - b) < R) {
        b = R - (m - u.depth) + c.height;
        var D = 0.8 * p.xHeight - (m - u.depth);
        D > 0 && (m += D, b -= D);
      }
      var H = [{
        type: "elem",
        elem: c,
        shift: b,
        marginRight: N,
        marginLeft: w
      }, {
        type: "elem",
        elem: u,
        shift: -m,
        marginRight: N
      }];
      A = T.makeVList({
        positionType: "individualShift",
        children: H
      }, e);
    } else if (c) {
      b = Math.max(b, p.sub1, c.height - 0.8 * p.xHeight);
      var B = [{
        type: "elem",
        elem: c,
        marginLeft: w,
        marginRight: N
      }];
      A = T.makeVList({
        positionType: "shift",
        positionData: b,
        children: B
      }, e);
    } else if (u)
      m = Math.max(m, E, u.depth + 0.25 * p.xHeight), A = T.makeVList({
        positionType: "shift",
        positionData: -m,
        children: [{
          type: "elem",
          elem: u,
          marginRight: N
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var ae = Kr(l, "right") || "mord";
    return T.makeSpan([ae], [l, T.makeSpan(["msupsub"], [A])], e);
  },
  mathmlBuilder(a, e) {
    var t = !1, r, n;
    a.base && a.base.type === "horizBrace" && (n = !!a.sup, n === a.base.isOver && (t = !0, r = a.base.isOver)), a.base && (a.base.type === "op" || a.base.type === "operatorname") && (a.base.parentIsSupSub = !0);
    var i = [oe(a.base, e)];
    a.sub && i.push(oe(a.sub, e)), a.sup && i.push(oe(a.sup, e));
    var l;
    if (t)
      l = r ? "mover" : "munder";
    else if (a.sub)
      if (a.sup) {
        var p = a.base;
        p && p.type === "op" && p.limits && e.style === Y.DISPLAY || p && p.type === "operatorname" && p.alwaysHandleSupSub && (e.style === Y.DISPLAY || p.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var c = a.base;
        c && c.type === "op" && c.limits && (e.style === Y.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === Y.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var u = a.base;
      u && u.type === "op" && u.limits && (e.style === Y.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === Y.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new M.MathNode(l, i);
  }
});
Rt({
  type: "atom",
  htmlBuilder(a, e) {
    return T.mathsym(a.text, a.mode, e, ["m" + a.family]);
  },
  mathmlBuilder(a, e) {
    var t = new M.MathNode("mo", [Ye(a.text, a.mode)]);
    if (a.family === "bin") {
      var r = u0(a, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else
      a.family === "punct" ? t.setAttribute("separator", "true") : (a.family === "open" || a.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var pn = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Rt({
  type: "mathord",
  htmlBuilder(a, e) {
    return T.makeOrd(a, e, "mathord");
  },
  mathmlBuilder(a, e) {
    var t = new M.MathNode("mi", [Ye(a.text, a.mode, e)]), r = u0(a, e) || "italic";
    return r !== pn[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
Rt({
  type: "textord",
  htmlBuilder(a, e) {
    return T.makeOrd(a, e, "textord");
  },
  mathmlBuilder(a, e) {
    var t = Ye(a.text, a.mode, e), r = u0(a, e) || "normal", n;
    return a.mode === "text" ? n = new M.MathNode("mtext", [t]) : /[0-9]/.test(a.text) ? n = new M.MathNode("mn", [t]) : a.text === "\\prime" ? n = new M.MathNode("mo", [t]) : n = new M.MathNode("mi", [t]), r !== pn[n.type] && n.setAttribute("mathvariant", r), n;
  }
});
var Br = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Fr = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
Rt({
  type: "spacing",
  htmlBuilder(a, e) {
    if (Fr.hasOwnProperty(a.text)) {
      var t = Fr[a.text].className || "";
      if (a.mode === "text") {
        var r = T.makeOrd(a, e, "textord");
        return r.classes.push(t), r;
      } else
        return T.makeSpan(["mspace", t], [T.mathsym(a.text, a.mode, e)], e);
    } else {
      if (Br.hasOwnProperty(a.text))
        return T.makeSpan(["mspace", Br[a.text]], [], e);
      throw new L('Unknown type of space "' + a.text + '"');
    }
  },
  mathmlBuilder(a, e) {
    var t;
    if (Fr.hasOwnProperty(a.text))
      t = new M.MathNode("mtext", [new M.TextNode(" ")]);
    else {
      if (Br.hasOwnProperty(a.text))
        return new M.MathNode("mspace");
      throw new L('Unknown type of space "' + a.text + '"');
    }
    return t;
  }
});
var ia = () => {
  var a = new M.MathNode("mtd", []);
  return a.setAttribute("width", "50%"), a;
};
Rt({
  type: "tag",
  mathmlBuilder(a, e) {
    var t = new M.MathNode("mtable", [new M.MathNode("mtr", [ia(), new M.MathNode("mtd", [yt(a.body, e)]), ia(), new M.MathNode("mtd", [yt(a.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var sa = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, la = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, tl = {
  "\\textit": "textit",
  "\\textup": "textup"
}, oa = (a, e) => {
  var t = a.font;
  return t ? sa[t] ? e.withTextFontFamily(sa[t]) : la[t] ? e.withTextFontWeight(la[t]) : e.withTextFontShape(tl[t]) : e;
};
F({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: ve(n),
      font: r
    };
  },
  htmlBuilder(a, e) {
    var t = oa(a, e), r = Ee(a.body, t, !0);
    return T.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(a, e) {
    var t = oa(a, e);
    return yt(a.body, t);
  }
});
F({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = re(a.body, e), r = T.makeLineSpan("underline-line", e), n = e.fontMetrics().defaultRuleThickness, i = T.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: n
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * n
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return T.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(a, e) {
    var t = new M.MathNode("mo", [new M.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new M.MathNode("munder", [oe(a.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
F({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = re(a.body, e), r = e.fontMetrics().axisHeight, n = 0.5 * (t.height - r - (t.depth + r));
    return T.makeVList({
      positionType: "shift",
      positionData: n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    return new M.MathNode("mpadded", [oe(a.body, e)], ["vcenter"]);
  }
});
F({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a, e, t) {
    throw new L("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(a, e) {
    for (var t = ua(a), r = [], n = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), r.push(T.makeSymbol(l, "Typewriter-Regular", a.mode, n, ["mord", "texttt"]));
    }
    return T.makeSpan(["mord", "text"].concat(n.sizingClasses(e)), T.tryCombineChars(r), n);
  },
  mathmlBuilder(a, e) {
    var t = new M.TextNode(ua(a)), r = new M.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var ua = (a) => a.body.replace(/ /g, a.star ? "␣" : " "), gt = La, mn = `[ \r
	]`, rl = "\\\\[a-zA-Z@]+", al = "\\\\[^\uD800-\uDFFF]", nl = "(" + rl + ")" + mn + "*", il = `\\\\(
|[ \r	]+
?)[ \r	]*`, Qr = "[̀-ͯ]", sl = new RegExp(Qr + "+$"), ll = "(" + mn + "+)|" + // whitespace
(il + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Qr + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Qr + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + nl) + // \macroName + spaces
("|" + al + ")");
class ca {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(ll, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new qe("EOF", new Fe(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new L("Unexpected character: '" + e[t] + "'", new qe(e[t], new Fe(this, t, t + 1)));
    var n = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new qe(n, new Fe(this, t, this.tokenRegex.lastIndex));
  }
}
class ol {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new L("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, r) {
    if (r === void 0 && (r = !1), r) {
      for (var n = 0; n < this.undefStack.length; n++)
        delete this.undefStack[n][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var ul = rn;
h("\\noexpand", function(a) {
  var e = a.popToken();
  return a.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
h("\\expandafter", function(a) {
  var e = a.popToken();
  return a.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
h("\\@firstoftwo", function(a) {
  var e = a.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
h("\\@secondoftwo", function(a) {
  var e = a.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
h("\\@ifnextchar", function(a) {
  var e = a.consumeArgs(3);
  a.consumeSpaces();
  var t = a.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
h("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
h("\\TextOrMath", function(a) {
  var e = a.consumeArgs(2);
  return a.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var da = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
h("\\char", function(a) {
  var e = a.popToken(), t, r = "";
  if (e.text === "'")
    t = 8, e = a.popToken();
  else if (e.text === '"')
    t = 16, e = a.popToken();
  else if (e.text === "`")
    if (e = a.popToken(), e.text[0] === "\\")
      r = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new L("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = da[e.text], r == null || r >= t)
      throw new L("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = da[a.future().text]) != null && n < t; )
      r *= t, r += n, a.popToken();
  }
  return "\\@char{" + r + "}";
});
var y0 = (a, e, t) => {
  var r = a.consumeArg().tokens;
  if (r.length !== 1)
    throw new L("\\newcommand's first argument must be a macro name");
  var n = r[0].text, i = a.isDefined(n);
  if (i && !e)
    throw new L("\\newcommand{" + n + "} attempting to redefine " + (n + "; use \\renewcommand"));
  if (!i && !t)
    throw new L("\\renewcommand{" + n + "} when command " + n + " does not yet exist; use \\newcommand");
  var l = 0;
  if (r = a.consumeArg().tokens, r.length === 1 && r[0].text === "[") {
    for (var u = "", c = a.expandNextToken(); c.text !== "]" && c.text !== "EOF"; )
      u += c.text, c = a.expandNextToken();
    if (!u.match(/^\s*[0-9]+\s*$/))
      throw new L("Invalid number of arguments: " + u);
    l = parseInt(u), r = a.consumeArg().tokens;
  }
  return a.macros.set(n, {
    tokens: r,
    numArgs: l
  }), "";
};
h("\\newcommand", (a) => y0(a, !1, !0));
h("\\renewcommand", (a) => y0(a, !0, !1));
h("\\providecommand", (a) => y0(a, !0, !0));
h("\\message", (a) => {
  var e = a.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
h("\\errmessage", (a) => {
  var e = a.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
h("\\show", (a) => {
  var e = a.popToken(), t = e.text;
  return console.log(e, a.macros.get(t), gt[t], de.math[t], de.text[t]), "";
});
h("\\bgroup", "{");
h("\\egroup", "}");
h("~", "\\nobreakspace");
h("\\lq", "`");
h("\\rq", "'");
h("\\aa", "\\r a");
h("\\AA", "\\r A");
h("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
h("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
h("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
h("ℬ", "\\mathscr{B}");
h("ℰ", "\\mathscr{E}");
h("ℱ", "\\mathscr{F}");
h("ℋ", "\\mathscr{H}");
h("ℐ", "\\mathscr{I}");
h("ℒ", "\\mathscr{L}");
h("ℳ", "\\mathscr{M}");
h("ℛ", "\\mathscr{R}");
h("ℭ", "\\mathfrak{C}");
h("ℌ", "\\mathfrak{H}");
h("ℨ", "\\mathfrak{Z}");
h("\\Bbbk", "\\Bbb{k}");
h("·", "\\cdotp");
h("\\llap", "\\mathllap{\\textrm{#1}}");
h("\\rlap", "\\mathrlap{\\textrm{#1}}");
h("\\clap", "\\mathclap{\\textrm{#1}}");
h("\\mathstrut", "\\vphantom{(}");
h("\\underbar", "\\underline{\\text{#1}}");
h("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
h("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
h("\\ne", "\\neq");
h("≠", "\\neq");
h("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
h("∉", "\\notin");
h("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
h("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
h("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
h("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
h("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
h("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
h("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
h("⟂", "\\perp");
h("‼", "\\mathclose{!\\mkern-0.8mu!}");
h("∌", "\\notni");
h("⌜", "\\ulcorner");
h("⌝", "\\urcorner");
h("⌞", "\\llcorner");
h("⌟", "\\lrcorner");
h("©", "\\copyright");
h("®", "\\textregistered");
h("️", "\\textregistered");
h("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
h("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
h("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
h("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
h("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
h("⋮", "\\vdots");
h("\\varGamma", "\\mathit{\\Gamma}");
h("\\varDelta", "\\mathit{\\Delta}");
h("\\varTheta", "\\mathit{\\Theta}");
h("\\varLambda", "\\mathit{\\Lambda}");
h("\\varXi", "\\mathit{\\Xi}");
h("\\varPi", "\\mathit{\\Pi}");
h("\\varSigma", "\\mathit{\\Sigma}");
h("\\varUpsilon", "\\mathit{\\Upsilon}");
h("\\varPhi", "\\mathit{\\Phi}");
h("\\varPsi", "\\mathit{\\Psi}");
h("\\varOmega", "\\mathit{\\Omega}");
h("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
h("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
h("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
h("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
h("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
h("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var ha = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
h("\\dots", function(a) {
  var e = "\\dotso", t = a.expandAfterFuture().text;
  return t in ha ? e = ha[t] : (t.slice(0, 4) === "\\not" || t in de.math && Z.contains(["bin", "rel"], de.math[t].group)) && (e = "\\dotsb"), e;
});
var w0 = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
h("\\dotso", function(a) {
  var e = a.future().text;
  return e in w0 ? "\\ldots\\," : "\\ldots";
});
h("\\dotsc", function(a) {
  var e = a.future().text;
  return e in w0 && e !== "," ? "\\ldots\\," : "\\ldots";
});
h("\\cdots", function(a) {
  var e = a.future().text;
  return e in w0 ? "\\@cdots\\," : "\\@cdots";
});
h("\\dotsb", "\\cdots");
h("\\dotsm", "\\cdots");
h("\\dotsi", "\\!\\cdots");
h("\\dotsx", "\\ldots\\,");
h("\\DOTSI", "\\relax");
h("\\DOTSB", "\\relax");
h("\\DOTSX", "\\relax");
h("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
h("\\,", "\\tmspace+{3mu}{.1667em}");
h("\\thinspace", "\\,");
h("\\>", "\\mskip{4mu}");
h("\\:", "\\tmspace+{4mu}{.2222em}");
h("\\medspace", "\\:");
h("\\;", "\\tmspace+{5mu}{.2777em}");
h("\\thickspace", "\\;");
h("\\!", "\\tmspace-{3mu}{.1667em}");
h("\\negthinspace", "\\!");
h("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
h("\\negthickspace", "\\tmspace-{5mu}{.277em}");
h("\\enspace", "\\kern.5em ");
h("\\enskip", "\\hskip.5em\\relax");
h("\\quad", "\\hskip1em\\relax");
h("\\qquad", "\\hskip2em\\relax");
h("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
h("\\tag@paren", "\\tag@literal{({#1})}");
h("\\tag@literal", (a) => {
  if (a.macros.get("\\df@tag"))
    throw new L("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
h("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
h("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
h("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
h("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
h("\\newline", "\\\\\\relax");
h("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var fn = P(We["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * We["Main-Regular"]["A".charCodeAt(0)][1]);
h("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + fn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
h("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + fn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
h("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
h("\\@hspace", "\\hskip #1\\relax");
h("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
h("\\ordinarycolon", ":");
h("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
h("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
h("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
h("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
h("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
h("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
h("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
h("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
h("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
h("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
h("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
h("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
h("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
h("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
h("∷", "\\dblcolon");
h("∹", "\\eqcolon");
h("≔", "\\coloneqq");
h("≕", "\\eqqcolon");
h("⩴", "\\Coloneqq");
h("\\ratio", "\\vcentcolon");
h("\\coloncolon", "\\dblcolon");
h("\\colonequals", "\\coloneqq");
h("\\coloncolonequals", "\\Coloneqq");
h("\\equalscolon", "\\eqqcolon");
h("\\equalscoloncolon", "\\Eqqcolon");
h("\\colonminus", "\\coloneq");
h("\\coloncolonminus", "\\Coloneq");
h("\\minuscolon", "\\eqcolon");
h("\\minuscoloncolon", "\\Eqcolon");
h("\\coloncolonapprox", "\\Colonapprox");
h("\\coloncolonsim", "\\Colonsim");
h("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
h("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
h("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
h("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
h("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
h("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
h("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
h("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
h("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
h("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
h("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
h("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
h("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
h("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
h("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
h("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
h("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
h("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
h("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
h("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
h("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
h("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
h("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
h("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
h("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
h("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
h("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
h("\\imath", "\\html@mathml{\\@imath}{ı}");
h("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
h("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
h("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
h("⟦", "\\llbracket");
h("⟧", "\\rrbracket");
h("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
h("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
h("⦃", "\\lBrace");
h("⦄", "\\rBrace");
h("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
h("⦵", "\\minuso");
h("\\darr", "\\downarrow");
h("\\dArr", "\\Downarrow");
h("\\Darr", "\\Downarrow");
h("\\lang", "\\langle");
h("\\rang", "\\rangle");
h("\\uarr", "\\uparrow");
h("\\uArr", "\\Uparrow");
h("\\Uarr", "\\Uparrow");
h("\\N", "\\mathbb{N}");
h("\\R", "\\mathbb{R}");
h("\\Z", "\\mathbb{Z}");
h("\\alef", "\\aleph");
h("\\alefsym", "\\aleph");
h("\\Alpha", "\\mathrm{A}");
h("\\Beta", "\\mathrm{B}");
h("\\bull", "\\bullet");
h("\\Chi", "\\mathrm{X}");
h("\\clubs", "\\clubsuit");
h("\\cnums", "\\mathbb{C}");
h("\\Complex", "\\mathbb{C}");
h("\\Dagger", "\\ddagger");
h("\\diamonds", "\\diamondsuit");
h("\\empty", "\\emptyset");
h("\\Epsilon", "\\mathrm{E}");
h("\\Eta", "\\mathrm{H}");
h("\\exist", "\\exists");
h("\\harr", "\\leftrightarrow");
h("\\hArr", "\\Leftrightarrow");
h("\\Harr", "\\Leftrightarrow");
h("\\hearts", "\\heartsuit");
h("\\image", "\\Im");
h("\\infin", "\\infty");
h("\\Iota", "\\mathrm{I}");
h("\\isin", "\\in");
h("\\Kappa", "\\mathrm{K}");
h("\\larr", "\\leftarrow");
h("\\lArr", "\\Leftarrow");
h("\\Larr", "\\Leftarrow");
h("\\lrarr", "\\leftrightarrow");
h("\\lrArr", "\\Leftrightarrow");
h("\\Lrarr", "\\Leftrightarrow");
h("\\Mu", "\\mathrm{M}");
h("\\natnums", "\\mathbb{N}");
h("\\Nu", "\\mathrm{N}");
h("\\Omicron", "\\mathrm{O}");
h("\\plusmn", "\\pm");
h("\\rarr", "\\rightarrow");
h("\\rArr", "\\Rightarrow");
h("\\Rarr", "\\Rightarrow");
h("\\real", "\\Re");
h("\\reals", "\\mathbb{R}");
h("\\Reals", "\\mathbb{R}");
h("\\Rho", "\\mathrm{P}");
h("\\sdot", "\\cdot");
h("\\sect", "\\S");
h("\\spades", "\\spadesuit");
h("\\sub", "\\subset");
h("\\sube", "\\subseteq");
h("\\supe", "\\supseteq");
h("\\Tau", "\\mathrm{T}");
h("\\thetasym", "\\vartheta");
h("\\weierp", "\\wp");
h("\\Zeta", "\\mathrm{Z}");
h("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
h("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
h("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
h("\\bra", "\\mathinner{\\langle{#1}|}");
h("\\ket", "\\mathinner{|{#1}\\rangle}");
h("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
h("\\Bra", "\\left\\langle#1\\right|");
h("\\Ket", "\\left|#1\\right\\rangle");
var gn = (a) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, n = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), u = e.macros.get("\\|");
  e.macros.beginGroup();
  var c = (b) => (x) => {
    a && (x.macros.set("|", l), n.length && x.macros.set("\\|", u));
    var v = b;
    if (!b && n.length) {
      var k = x.future();
      k.text === "|" && (x.popToken(), v = !0);
    }
    return {
      tokens: v ? n : r,
      numArgs: 0
    };
  };
  e.macros.set("|", c(!1)), n.length && e.macros.set("\\|", c(!0));
  var p = e.consumeArg().tokens, m = e.expandTokens([
    ...i,
    ...p,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: m.reverse(),
    numArgs: 0
  };
};
h("\\bra@ket", gn(!1));
h("\\bra@set", gn(!0));
h("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
h("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
h("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
h("\\angln", "{\\angl n}");
h("\\blue", "\\textcolor{##6495ed}{#1}");
h("\\orange", "\\textcolor{##ffa500}{#1}");
h("\\pink", "\\textcolor{##ff00af}{#1}");
h("\\red", "\\textcolor{##df0030}{#1}");
h("\\green", "\\textcolor{##28ae7b}{#1}");
h("\\gray", "\\textcolor{gray}{#1}");
h("\\purple", "\\textcolor{##9d38bd}{#1}");
h("\\blueA", "\\textcolor{##ccfaff}{#1}");
h("\\blueB", "\\textcolor{##80f6ff}{#1}");
h("\\blueC", "\\textcolor{##63d9ea}{#1}");
h("\\blueD", "\\textcolor{##11accd}{#1}");
h("\\blueE", "\\textcolor{##0c7f99}{#1}");
h("\\tealA", "\\textcolor{##94fff5}{#1}");
h("\\tealB", "\\textcolor{##26edd5}{#1}");
h("\\tealC", "\\textcolor{##01d1c1}{#1}");
h("\\tealD", "\\textcolor{##01a995}{#1}");
h("\\tealE", "\\textcolor{##208170}{#1}");
h("\\greenA", "\\textcolor{##b6ffb0}{#1}");
h("\\greenB", "\\textcolor{##8af281}{#1}");
h("\\greenC", "\\textcolor{##74cf70}{#1}");
h("\\greenD", "\\textcolor{##1fab54}{#1}");
h("\\greenE", "\\textcolor{##0d923f}{#1}");
h("\\goldA", "\\textcolor{##ffd0a9}{#1}");
h("\\goldB", "\\textcolor{##ffbb71}{#1}");
h("\\goldC", "\\textcolor{##ff9c39}{#1}");
h("\\goldD", "\\textcolor{##e07d10}{#1}");
h("\\goldE", "\\textcolor{##a75a05}{#1}");
h("\\redA", "\\textcolor{##fca9a9}{#1}");
h("\\redB", "\\textcolor{##ff8482}{#1}");
h("\\redC", "\\textcolor{##f9685d}{#1}");
h("\\redD", "\\textcolor{##e84d39}{#1}");
h("\\redE", "\\textcolor{##bc2612}{#1}");
h("\\maroonA", "\\textcolor{##ffbde0}{#1}");
h("\\maroonB", "\\textcolor{##ff92c6}{#1}");
h("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
h("\\maroonD", "\\textcolor{##ca337c}{#1}");
h("\\maroonE", "\\textcolor{##9e034e}{#1}");
h("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
h("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
h("\\purpleC", "\\textcolor{##aa87ff}{#1}");
h("\\purpleD", "\\textcolor{##7854ab}{#1}");
h("\\purpleE", "\\textcolor{##543b78}{#1}");
h("\\mintA", "\\textcolor{##f5f9e8}{#1}");
h("\\mintB", "\\textcolor{##edf2df}{#1}");
h("\\mintC", "\\textcolor{##e0e5cc}{#1}");
h("\\grayA", "\\textcolor{##f6f7f7}{#1}");
h("\\grayB", "\\textcolor{##f0f1f2}{#1}");
h("\\grayC", "\\textcolor{##e3e5e6}{#1}");
h("\\grayD", "\\textcolor{##d6d8da}{#1}");
h("\\grayE", "\\textcolor{##babec2}{#1}");
h("\\grayF", "\\textcolor{##888d93}{#1}");
h("\\grayG", "\\textcolor{##626569}{#1}");
h("\\grayH", "\\textcolor{##3b3e40}{#1}");
h("\\grayI", "\\textcolor{##21242c}{#1}");
h("\\kaBlue", "\\textcolor{##314453}{#1}");
h("\\kaGreen", "\\textcolor{##71B307}{#1}");
var bn = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class cl {
  constructor(e, t, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new ol(ul, t.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new ca(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, r, n;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: n,
        end: r
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: n,
        start: t,
        end: r
      } = this.consumeArg());
    return this.pushToken(new qe("EOF", r.loc)), this.pushTokens(n), t.range(r, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], r = e && e.length > 0;
    r || this.consumeSpaces();
    var n = this.future(), i, l = 0, u = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++l;
      else if (i.text === "}") {
        if (--l, l === -1)
          throw new L("Extra }", i);
      } else if (i.text === "EOF")
        throw new L("Unexpected end of input in a macro argument, expected '" + (e && r ? e[u] : "}") + "'", i);
      if (e && r)
        if ((l === 0 || l === 1 && e[u] === "{") && i.text === e[u]) {
          if (++u, u === e.length) {
            t.splice(-u, u);
            break;
          }
        } else
          u = 0;
    } while (l !== 0 || r);
    return n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: n,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new L("The length of delimiters doesn't match the number of args!");
      for (var r = t[0], n = 0; n < r.length; n++) {
        var i = this.popToken();
        if (r[n] !== i.text)
          throw new L("Use of the macro doesn't match its definition", i);
      }
    }
    for (var l = [], u = 0; u < e; u++)
      l.push(this.consumeArg(t && t[u + 1]).tokens);
    return l;
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order and will be returned as an array,
   * also in reverse order.
   *
   * If not, the next token will be returned without removing it
   * from the stack.  This case can be detected by a `Token` return value
   * instead of an `Array` return value.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty.
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), r = t.text, n = t.noexpand ? null : this._getExpansion(r);
    if (n == null || e && n.unexpandable) {
      if (e && n == null && r[0] === "\\" && !this.isDefined(r))
        throw new L("Undefined control sequence: " + r);
      return this.pushToken(t), t;
    }
    if (this.expansionCount++, this.expansionCount > this.settings.maxExpand)
      throw new L("Too many expansions: infinite loop or need to increase maxExpand setting");
    var i = n.tokens, l = this.consumeArgs(n.numArgs, n.delimiters);
    if (n.numArgs) {
      i = i.slice();
      for (var u = i.length - 1; u >= 0; --u) {
        var c = i[u];
        if (c.text === "#") {
          if (u === 0)
            throw new L("Incomplete placeholder at end of macro body", c);
          if (c = i[--u], c.text === "#")
            i.splice(u + 1, 1);
          else if (/^[1-9]$/.test(c.text))
            i.splice(u, 2, ...l[+c.text - 1]);
          else
            throw new L("Not a valid argument number", c);
        }
      }
    }
    return this.pushTokens(i), i;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; ) {
      var e = this.expandOnce();
      if (e instanceof qe)
        return e.treatAsRelax && (e.text = "\\relax"), this.stack.pop();
    }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new qe(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], r = this.stack.length;
    for (this.pushTokens(e); this.stack.length > r; ) {
      var n = this.expandOnce(!0);
      n instanceof qe && (n.treatAsRelax && (n.noexpand = !1, n.treatAsRelax = !1), t.push(this.stack.pop()));
    }
    return t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((r) => r.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var r = this.lexer.catcodes[e];
      if (r != null && r !== 13)
        return;
    }
    var n = typeof t == "function" ? t(this) : t;
    if (typeof n == "string") {
      var i = 0;
      if (n.indexOf("#") !== -1)
        for (var l = n.replace(/##/g, ""); l.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (var u = new ca(n, this.settings), c = [], p = u.lex(); p.text !== "EOF"; )
        c.push(p), p = u.lex();
      c.reverse();
      var m = {
        tokens: c,
        numArgs: i
      };
      return m;
    }
    return n;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || gt.hasOwnProperty(e) || de.math.hasOwnProperty(e) || de.text.hasOwnProperty(e) || bn.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : gt.hasOwnProperty(e) && !gt[e].primitive;
  }
}
var pa = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, lr = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), $r = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, ma = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class Ht {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new cl(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new L("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new qe("}")), this.gullet.pushTokens(e);
    var r = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, r;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precendence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var r = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var n = this.fetch();
      if (Ht.endOfExpression.indexOf(n.text) !== -1 || t && n.text === t || e && gt[n.text] && gt[n.text].infix)
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal")
          continue;
      } else
        break;
      r.push(i);
    }
    return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, r, n = 0; n < e.length; n++)
      if (e[n].type === "infix") {
        if (t !== -1)
          throw new L("only one infix operator per group", e[n].token);
        t = n, r = e[n].replaceWith;
      }
    if (t !== -1 && r) {
      var i, l, u = e.slice(0, t), c = e.slice(t + 1);
      u.length === 1 && u[0].type === "ordgroup" ? i = u[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: u
      }, c.length === 1 && c[0].type === "ordgroup" ? l = c[0] : l = {
        type: "ordgroup",
        mode: this.mode,
        body: c
      };
      var p;
      return r === "\\\\abovefrac" ? p = this.callFunction(r, [i, e[t], l], []) : p = this.callFunction(r, [i, l], []), [p];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), r = t.text;
    this.consume(), this.consumeSpaces();
    var n = this.parseGroup(e);
    if (!n)
      throw new L("Expected group after '" + r + "'", t);
    return n;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], r = 0; r < e.length; r++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[r]
      });
    var n = {
      type: "text",
      mode: this.mode,
      body: t
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [n]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (this.mode === "text")
      return t;
    for (var r, n; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = i.text === "\\limits";
          t.limits = l, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else
          throw new L("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (r)
          throw new L("Double superscript", i);
        r = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (n)
          throw new L("Double subscript", i);
        n = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (r)
          throw new L("Double superscript", i);
        var u = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, c = [u];
        for (this.consume(); this.fetch().text === "'"; )
          c.push(u), this.consume();
        this.fetch().text === "^" && c.push(this.handleSupSubscript("superscript")), r = {
          type: "ordgroup",
          mode: this.mode,
          body: c
        };
      } else if (lr[i.text]) {
        var p = lr[i.text], m = pa.test(i.text);
        for (this.consume(); ; ) {
          var b = this.fetch().text;
          if (!lr[b] || pa.test(b) !== m)
            break;
          this.consume(), p += lr[b];
        }
        var x = new Ht(p, this.settings).parse();
        m ? n = {
          type: "ordgroup",
          mode: "math",
          body: x
        } : r = {
          type: "ordgroup",
          mode: "math",
          body: x
        };
      } else
        break;
    }
    return r || n ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: r,
      sub: n
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var r = this.fetch(), n = r.text, i = gt[n];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new L("Got function '" + n + "' with no arguments" + (t ? " as " + t : ""), r);
    if (this.mode === "text" && !i.allowedInText)
      throw new L("Can't use function '" + n + "' in text mode", r);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new L("Can't use function '" + n + "' in math mode", r);
    var {
      args: l,
      optArgs: u
    } = this.parseArguments(n, i);
    return this.callFunction(n, l, u, r, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, r, n, i) {
    var l = {
      funcName: e,
      parser: this,
      token: n,
      breakOnTokenText: i
    }, u = gt[e];
    if (u && u.handler)
      return u.handler(l, t, r);
    throw new L("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var r = t.numArgs + t.numOptionalArgs;
    if (r === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var n = [], i = [], l = 0; l < r; l++) {
      var u = t.argTypes && t.argTypes[l], c = l < t.numOptionalArgs;
      (t.primitive && u == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && i[0] == null) && (u = "primitive");
      var p = this.parseGroupOfType("argument to '" + e + "'", u, c);
      if (c)
        i.push(p);
      else if (p != null)
        n.push(p);
      else
        throw new L("Null argument, please report this as a bug");
    }
    return {
      args: n,
      optArgs: i
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, r) {
    switch (t) {
      case "color":
        return this.parseColorGroup(r);
      case "size":
        return this.parseSizeGroup(r);
      case "url":
        return this.parseUrlGroup(r);
      case "math":
      case "text":
        return this.parseArgumentGroup(r, t);
      case "hbox": {
        var n = this.parseArgumentGroup(r, "text");
        return n != null ? {
          type: "styling",
          mode: n.mode,
          body: [n],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", r);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (r)
          throw new L("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null)
          throw new L("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new L("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var r = this.gullet.scanArgument(t);
    if (r == null)
      return null;
    for (var n = "", i; (i = this.fetch()).text !== "EOF"; )
      n += i.text, this.consume();
    return this.consume(), r.text = n, r;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var r = this.fetch(), n = r, i = "", l; (l = this.fetch()).text !== "EOF" && e.test(i + l.text); )
      n = l, i += n.text, this.consume();
    if (i === "")
      throw new L("Invalid " + t + ": '" + r.text + "'", r);
    return r.range(n, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!r)
      throw new L("Invalid color: '" + t.text + "'", t);
    var n = r[0];
    return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), {
      type: "color-token",
      mode: this.mode,
      color: n
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, r = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", r = !0);
    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!n)
      throw new L("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(n[1] + n[2]),
      // sign + magnitude, cast to number
      unit: n[3]
    };
    if (!Aa(i))
      throw new L("Invalid unit: '" + i.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: r
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: r
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var r = this.gullet.scanArgument(e);
    if (r == null)
      return null;
    var n = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = {
      type: "ordgroup",
      mode: this.mode,
      loc: r.loc,
      body: i
    };
    return t && this.switchMode(n), l;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var r = this.fetch(), n = r.text, i;
    if (n === "{" || n === "\\begingroup") {
      this.consume();
      var l = n === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var u = this.parseExpression(!1, l), c = this.fetch();
      this.expect(l), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: Fe.range(r, c),
        body: u,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: n === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && n[0] === "\\" && !bn.hasOwnProperty(n)) {
      if (this.settings.throwOnError)
        throw new L("Undefined control sequence: " + n, r);
      i = this.formatUnsupportedCmd(n), this.consume();
    }
    return i;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, r = 0; r < t; ++r) {
      var n = e[r], i = n.text;
      i === "-" && e[r + 1].text === "-" && (r + 1 < t && e[r + 2].text === "-" ? (e.splice(r, 3, {
        type: "textord",
        mode: "text",
        loc: Fe.range(n, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: Fe.range(n, e[r + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[r + 1].text === i && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: Fe.range(n, e[r + 1]),
        text: i + i
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var r = t.slice(5), n = r.charAt(0) === "*";
      if (n && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1))
        throw new L(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: n
      };
    }
    ma.hasOwnProperty(t[0]) && !de[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = ma[t[0]] + t.slice(1));
    var i = sl.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (de[this.mode][t]) {
      this.settings.strict && this.mode === "math" && jr.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var u = de[this.mode][t].group, c = Fe.range(e), p;
      if (Ji.hasOwnProperty(u)) {
        var m = u;
        p = {
          type: "atom",
          mode: this.mode,
          family: m,
          loc: c,
          text: t
        };
      } else
        p = {
          type: u,
          mode: this.mode,
          loc: c,
          text: t
        };
      l = p;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (Ta(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: Fe.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var b = 0; b < i[0].length; b++) {
        var x = i[0][b];
        if (!$r[x])
          throw new L("Unknown accent ' " + x + "'", e);
        var v = $r[x][this.mode] || $r[x].text;
        if (!v)
          throw new L("Accent " + x + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: Fe.range(e),
          label: v,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: l
        };
      }
    return l;
  }
}
Ht.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var x0 = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new Ht(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var n = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new L("\\tag works only in display equations");
    n = [{
      type: "tag",
      mode: "text",
      body: n,
      tag: r.subparse([new qe("\\df@tag")])
    }];
  }
  return n;
}, vn = function(e, t, r) {
  t.textContent = "";
  var n = E0(e, r).toNode();
  t.appendChild(n);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), vn = function() {
  throw new L("KaTeX doesn't work in quirks mode.");
});
var dl = function(e, t) {
  var r = E0(e, t).toMarkup();
  return r;
}, hl = function(e, t) {
  var r = new a0(t);
  return x0(e, r);
}, yn = function(e, t, r) {
  if (r.throwOnError || !(e instanceof L))
    throw e;
  var n = T.makeSpan(["katex-error"], [new Ge(t)]);
  return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + r.errorColor), n;
}, E0 = function(e, t) {
  var r = new a0(t);
  try {
    var n = x0(e, r);
    return xs(n, e, r);
  } catch (i) {
    return yn(i, e, r);
  }
}, pl = function(e, t) {
  var r = new a0(t);
  try {
    var n = x0(e, r);
    return Es(n, e, r);
  } catch (i) {
    return yn(i, e, r);
  }
}, ml = {
  /**
   * Current KaTeX version
   */
  version: "0.16.4",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: vn,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: dl,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: L,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: cr,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: hl,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: E0,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: pl,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Yi,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: s,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: h,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: Yt,
    Anchor: s0,
    SymbolNode: Ge,
    SvgNode: ot,
    PathNode: vt,
    LineNode: Xr
  }
};
const fl = ["innerHTML"], gl = {
  name: "MarkdownPreview"
}, bl = /* @__PURE__ */ e0({
  ...gl,
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
    const e = a;
    let t = be();
    const r = (k) => {
      const E = (O) => {
        O.preventDefault(), O.clipboardData && O.clipboardData.setData("text/plain", k), document.removeEventListener("copy", E);
      };
      document.addEventListener("copy", E), document.execCommand("copy");
    }, n = (k, E, O, N = (w) => w) => {
      let w = "", S = !1, A = 0;
      if (E instanceof Array) {
        for (let I = 0; I < k.length; I++)
          for (const R of E) {
            const D = R.length;
            if (k.slice(I, I + D) == R) {
              S ? (w += O(k.slice(A + D, I)), A = I + D) : (w += N(k.slice(A, I)), A = I), S = !S;
              break;
            }
          }
        return w + N(k.slice(A));
      } else {
        let I = E.length;
        for (let R = 0; R < k.length - (I - 1); R++)
          k.slice(R, R + I) == E && (S ? (w += O(k.slice(A + I, R)), A = R + I) : (w += N(k.slice(A, R)), A = R), S = !S);
        return w + N(k.slice(A));
      }
    }, i = (k) => n(k, ["```", "~~~"], c, l), l = (k) => {
      try {
        const E = j.parse(k).replaceAll("<a ", '<a target="_blank" ').replaceAll(`>
`, ">");
        return n(E, ["<pre><code>", "</code></pre>"], p, u);
      } catch (E) {
        return "<span style='color: red'>[markdown 解析错误]</span><br>" + E + "<br>" + k;
      }
    }, u = (k) => {
      try {
        return n(k, "$$", ml.renderToString);
      } catch (E) {
        return "<span style='color: red'>[数学算式解析错误]</span><br>" + E + "<br>" + k;
      }
    }, c = (k) => {
      try {
        let E = k.replaceAll("\\`", "`"), O = "";
        try {
          let N = E.indexOf(`
`);
          O = E.slice(0, N).trim(), E = E.slice(N + 1);
        } catch {
          E = E.slice(E.indexOf(`
`) + 1);
        }
        return m(E, O);
      } catch (E) {
        return "<span style='color: red'>[代码解析错误]</span><br>" + E + "<br>" + k;
      }
    }, p = (k, E = "", O = "") => {
      k[k.length - 1] == `
` && (k = k.slice(0, k.length - 1));
      let N = k.split(`
`), w = "<code>" + E;
      for (let A = 0; A < N.length; A++)
        w += '<span class="count"></span>' + N[A] + `
`;
      let S = '<div class="code-copy-button iconfont icon-copy" title="复制"/>' + O;
      return w += "</code>", e.codeFold && N.length > e.codeFoldThreshold ? w = '<pre class="fold ' + e.codeTheme + '">' + w + '<div class="code-fold-button show">展开</div>' + S + "</pre>" : w = '<pre class="' + e.codeTheme + '">' + w + S + "</pre>", w;
    }, m = (k, E) => {
      for (const O of ga)
        if (O == E) {
          k = D0.highlight(k, D0.languages[E], E);
          break;
        }
      return p(k, "", '<div class="code-language">' + E + "</div>");
    }, b = (k) => {
      let E = k.target, O = E.parentNode;
      O.classList.contains("fold") ? (O.classList.remove("fold"), E.textContent = "收起", E.classList.remove("show")) : (O.scrollHeight > 600 && window.scrollTo({
        top: O.offsetTop
      }), O.classList.add("fold"), E.textContent = "展开", E.classList.add("show"));
    }, x = (k) => {
      let E = k.target;
      try {
        let O = E.parentElement.getElementsByTagName("code")[0], N = O.textContent ? O.textContent : "";
        r(N), alert("已复制");
      } catch (O) {
        alert("复制失败:" + O);
      }
    }, v = () => {
      if (t.value == null)
        return;
      if (e.codeFold) {
        const E = Array.from(t.value.querySelectorAll(".code-fold-button"));
        for (let O = 0; O < E.length; O++)
          E[O].removeEventListener("click", b), E[O].addEventListener("click", b);
      }
      const k = Array.from(t.value.querySelectorAll(".code-copy-button"));
      for (let E = 0; E < k.length; E++)
        k[E].removeEventListener("click", x), k[E].addEventListener("click", x);
    };
    return fa(v), setInterval(v, 1e3), (k, E) => (Se(), ke("div", {
      ref_key: "markdownCard",
      ref: t,
      class: "markdown-card",
      innerHTML: i(e.markdownText)
    }, null, 8, fl));
  }
});
const wn = [bl, Wn, fi], xn = function(a) {
  wn.forEach((e) => {
    a.component(e.name, e);
  });
};
typeof window < "u" && window.Vue && xn(window.Vue);
const wl = {
  install: xn,
  ...wn
};
export {
  wl as default
};
