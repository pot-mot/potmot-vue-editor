var Tn = Object.defineProperty;
var An = (a, e, t) => e in a ? Tn(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var Ct = (a, e, t) => (An(a, typeof e != "symbol" ? e + "" : e, t), t);
import { ref as fe, defineComponent as i0, reactive as Jt, watch as ot, computed as Qt, onMounted as cr, onBeforeUnmount as Yr, nextTick as We, resolveComponent as R0, openBlock as Ee, createElementBlock as Se, normalizeClass as Ir, unref as ut, createElementVNode as ue, Fragment as Nt, renderList as Ut, withModifiers as st, withDirectives as vt, toDisplayString as Fe, normalizeStyle as Vr, createCommentVNode as N0, vShow as $t, vModelText as Rr, createVNode as _0, isRef as Nr, createTextVNode as In } from "vue";
const dr = () => "ontouchstart" in document, _r = {
  mounted(a) {
    dr() ? a.addEventListener("touchstart", (e) => {
      if (e.target != a)
        return;
      e.preventDefault();
      const t = a.offsetLeft, r = a.offsetTop, n = e.touches[0].clientX, i = e.touches[0].clientY, l = (c) => {
        const p = c.touches[0].clientX, m = c.touches[0].clientY, v = p - n + t, x = m - i + r;
        a.style.top = x + "px", a.style.left = v + "px";
      }, o = () => {
        document.removeEventListener("touchmove", l), document.removeEventListener("touchend", o);
      };
      document.addEventListener("touchmove", l), document.addEventListener("touchend", o);
    }) : a.onmousedown = (e) => {
      if (e.target != a)
        return;
      e.preventDefault();
      const t = a.offsetLeft, r = a.offsetTop, n = e.clientX, i = e.clientY, l = (c) => {
        const p = c.clientX, m = c.clientY, v = p - n + t, x = m - i + r;
        a.style.top = x + "px", a.style.left = v + "px";
      }, o = () => {
        document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", o);
      };
      document.addEventListener("mousemove", l), document.addEventListener("mouseup", o);
    };
  }
}, Tt = (a, e, t) => a > t ? t : a < e ? e : a, At = (a, e, t, r = t) => e.slice(0, t) + a + e.slice(r), Rn = (a) => {
  const e = /* @__PURE__ */ new Map();
  for (let t = 0; t < a.length; t++)
    for (let r = 0; r < a[t].arguments.length; r++)
      e.set(a[t].arguments[r].name, a[t].arguments[r].getRef());
  return e;
}, ya = ["javascript", "typescript", "css", "css-extras", "html", "less", "sass", "scss", "svg", "icon", "markup", "http", "uri", "url", "c", "cpp", "cmake", "objc", "rust", "go", "php", "phpdoc", "perl", "java", "javadoc", "groovy", "kotlin", "kt", "kts", "scala", "latex", "tex", "matlab", "sql", "graphql", "mongodb", "erlang", "lua", "python", "py", "django", "jinja2", "csharp", "dotnet", "cobol", "makefile", "json", "json5", "jsonp", "xml", "yaml", "yml", "ini", "toml", "bash", "shell", "batch", "docker", "dockerfile", "git", "vim", "dns-zone", "log", "qml", "scheme", "swift"], Nn = [{
  name: "title",
  key: "#",
  label: "标题",
  insert: (a) => {
    let e = a.get("titleLevel").value, t = a.get("titleMinimumThreshold").value;
    t = Tt(t, 1, 6), e = Tt(e, 1, t);
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
    getRef: () => fe(1),
    inputLength: 1
  }, {
    name: "titleMinimumThreshold",
    label: "最小级别",
    type: "number",
    getRef: () => fe(4),
    inputLength: 1
  }],
  replace: !0
}, {
  name: "form",
  key: "|",
  label: "表格",
  insert: (a) => {
    let e = a.get("tableHeight").value, t = a.get("tableWidth").value, r = "|", n = "|", i = "  ";
    e = Tt(e, 1, 99), t = Tt(t, 1, 99);
    for (let o = 0; o < t; o++)
      r += i + "|", n += "----|";
    r += `
`, n += `
`;
    let l = r.slice(2) + n;
    for (let o = 0; o < e; o++)
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
    getRef: () => fe(3),
    inputLength: 2
  }, {
    name: "tableWidth",
    label: "宽度",
    type: "number",
    getRef: () => fe(2),
    inputLength: 2
  }]
}, {
  name: "orderedList",
  label: "有序列表",
  insert: (a) => {
    let e = a.get("orderedListLength").value, t = a.get("orderedListStart").value;
    e = Tt(e, 1, 99), t = Tt(t, 0, 9999);
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
    getRef: () => fe(3),
    inputLength: 2
  }, {
    name: "orderedListStart",
    label: "首项",
    type: "number",
    getRef: () => fe(1),
    inputLength: 4
  }]
}, {
  name: "unorderedList",
  label: "无序列表",
  insert: (a) => {
    let e = a.get("unorderedListLength").value;
    e = Tt(e, 1, 99);
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
    getRef: () => fe(3),
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
    getRef: () => fe("")
  }, {
    name: "linkUrl",
    label: "URL",
    type: "string",
    getRef: () => fe(""),
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
    getRef: () => fe("")
  }, {
    name: "pictureUrl",
    label: "URL",
    type: "string",
    getRef: () => fe(""),
    styleWidth: "12em"
  }]
}], _n = [{
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
    options: ya,
    getRef: () => fe("")
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
}], On = [{
  name: "details",
  key: ">",
  label: "折叠块",
  insert: (a) => {
    const e = a.get("detailIsSummary").value;
    return {
      before: "<details" + (a.get("detailIsOpen").value == "展开" ? " open" : "") + `>
<summary>` + e + `</summary>
`,
      after: `
</details>`
    };
  },
  arguments: [{
    name: "detailIsSummary",
    label: "标识",
    type: "string",
    getRef: () => fe(""),
    styleWidth: "6em"
  }, {
    name: "detailIsOpen",
    label: "默认状态",
    getRef: () => fe("收起"),
    options: ["收起", "展开"]
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
    getRef: () => fe("red"),
    styleWidth: "4em"
  }, {
    name: "warningLabel",
    label: "标签",
    type: "string",
    getRef: () => fe("span"),
    styleWidth: "4em"
  }]
}], Cn = {
  class: "toolbar"
}, Mn = ["onMousedown", "title"], Dn = {
  class: "floating-card tool-menu"
}, Ln = {
  class: "insert-text"
}, zn = ["onMousedown", "title"], Pn = ["value", "onChange"], Bn = ["type", "value", "maxlength", "onInput"], Fn = /* @__PURE__ */ ue("br", null, null, -1), $n = {
  class: "replace-box floating-card tool-menu"
}, Un = /* @__PURE__ */ ue("br", null, null, -1), qn = {
  style: {
    display: "flex",
    "justify-content": "space-around"
  }
}, Hn = ["onMousedown"], Gn = ["onMousedown"], Yn = ["onMousedown"], Vn = ["onMousedown"], Xn = {
  class: "outline-box floating-card"
}, jn = ["placeholder"], Kn = ["textContent"], Wn = {
  key: 0,
  class: "statistical-list"
}, Zn = {
  name: "MarkdownEditor"
}, Jn = /* @__PURE__ */ i0({
  ...Zn,
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
      default: [...Nn, ..._n, ...On]
    }
  },
  emits: ["update:modelValue"],
  setup(a, {
    emit: e
  }) {
    const t = a, r = Jt({
      // 文本编辑相关
      text: "",
      pushFlag: "",
      // 历史记录相关
      history: [],
      stackTop: -1,
      replaceFrom: "",
      replaceTo: ""
    });
    ot(() => r.text, () => {
      e("update:modelValue", r.text);
    });
    const n = fe(), i = fe(), l = Qt(() => O.value ? T.value ? "edit-preview" : "edit" : "");
    class o {
      constructor(P, H, se, G = () => {
      }) {
        Ct(this, "name", "");
        Ct(this, "active", !1);
        Ct(this, "label", "");
        Ct(this, "icon", "");
        Ct(this, "method");
        this.name = P, this.label = H, this.icon = se, this.method = G;
      }
      changeActive() {
        this.active = !this.active;
      }
    }
    const c = Jt({
      selectLength: 0,
      startPlace: {
        x: 1,
        y: 1
      },
      endPlace: {
        x: 1,
        y: 1
      }
    }), p = () => {
      n.value && (c.startPlace = je(n.value.selectionStart, r.text), n.value.selectionStart == n.value.selectionEnd ? c.endPlace = c.startPlace : c.endPlace = je(n.value.selectionEnd, r.text), c.selectLength = n.value.selectionEnd - n.value.selectionStart);
    };
    let m = 0;
    cr(() => {
      p(), m = setInterval(p, 100);
    }), Yr(() => {
      clearInterval(m);
    });
    const v = Jt([new o("fullScreen", "全屏/收起全屏", "icon-full-screen", (_) => {
      _.changeActive();
    }), new o("insert", "快捷插入", "icon-bulletpoint", (_) => {
      _.changeActive();
    }), new o("replace", "文本查找与替换", "icon-search-list", (_) => {
      _.changeActive();
    }), new o("preview", "预览", "icon-browse", (_) => {
      _.changeActive();
    }), new o("outline", "大纲", "icon-file-tree", (_) => {
      _.changeActive();
    }), new o("undo", "撤销(Ctrl + z)", "icon-undo", () => {
      te();
    }), new o("redo", "重做(Ctrl + Z)", "icon-redo", () => {
      Ae();
    })]), x = (_) => {
      for (const P of v)
        if (P.name == _)
          return P.active;
      return !1;
    }, b = (_, P) => {
      for (const H of v)
        if (H.name == _) {
          H.active = P;
          break;
        }
    }, O = Qt({
      get() {
        return x("fullScreen");
      },
      set(_) {
        b("fullScreen", _);
      }
    });
    let S = 0;
    ot(() => O.value, async (_) => {
      _ ? (T.value = !dr(), N.value = "edit", S = document.documentElement.scrollTop) : (T.value = !1, await We(() => {
        document.documentElement.scrollTop = S;
      }));
    });
    const I = Qt({
      get() {
        return x("replace");
      },
      set(_) {
        b("replace", _);
      }
    }), T = Qt({
      get() {
        return x("preview");
      },
      set(_) {
        b("preview", _);
      }
    }), w = fe(/* @__PURE__ */ new Map());
    w.value = Rn(t.insertUnits);
    const E = (_, P) => {
      w.value.get(_).value = P.target.value;
    }, A = (_, P) => {
      w.value.get(_).value = P.target.value;
    }, R = (_) => {
      let P = n.value.selectionStart, H = n.value.selectionEnd, se = r.text, G;
      const {
        before: J,
        after: ye
      } = _.insert(w.value);
      _.replace ? (se = At(J, se, P, H), G = P + J.length) : (se = At(J, se, P), G = H + J.length), ye.length > 0 && (se = At(ye, se, G)), r.text = se, We(() => {
        _.keepSelect && P != H ? (n.value.selectionStart = P, n.value.selectionEnd = G + ye.length) : (n.value.selectionStart = P + J.length, n.value.selectionEnd = P + J.length), z();
      });
    };
    cr(() => {
      r.text = t.modelValue, r.history = [], r.stackTop = -1, z(), t.startWithFullScreen && (O.value = !0, T.value = !0);
    });
    let N = fe("textarea");
    const C = (_, P) => {
      P.scrollTop = _.scrollTop * (P.scrollHeight - P.offsetHeight) / (_.scrollHeight - _.offsetHeight);
    };
    ot(() => T.value, async (_) => {
      dr() && (N.value = _ ? "preview" : "edit");
    });
    let F = 0;
    cr(() => {
      F = setInterval(() => {
        n.value && i.value && (N.value == "textarea" ? C(n.value, i.value) : N.value == "preview" && C(i.value, n.value));
      }, 20);
    }), Yr(() => {
      clearInterval(F);
    });
    const z = (_ = n.value.selectionStart, P = n.value.selectionEnd) => {
      r.stackTop >= 200 && r.history.splice(0, 100), r.stackTop++, r.history[r.stackTop] = {
        start: _,
        end: P,
        text: r.text,
        scrollTop: n.value.scrollTop
      };
    }, ae = (_ = n.value.selectionStart, P = n.value.selectionStart) => {
      r.history[r.stackTop] = {
        start: _,
        end: P,
        text: r.text,
        scrollTop: n.value.scrollTop
      };
    }, ee = () => {
      r.stackTop < r.history.length - 1 && (r.history = r.history.slice(0, r.stackTop + 1));
    }, te = () => {
      if (r.stackTop >= 1) {
        r.stackTop--;
        const _ = r.history[r.stackTop];
        r.text = _.text, We(() => {
          n.value.selectionStart = _.start, n.value.selectionEnd = _.end, n.value.scrollTo(0, _.scrollTop);
        });
      } else
        alert("无法再次撤销");
    }, Ae = () => {
      if (r.stackTop < r.history.length - 1) {
        r.stackTop++;
        let _ = r.history[r.stackTop];
        r.text = _.text, We(() => {
          n.value.selectionStart = _.start, n.value.selectionEnd = _.end, n.value.scrollTo(0, _.scrollTop);
        });
      } else
        alert("已是最新，无法重做");
    }, ve = (_) => {
      if (_.ctrlKey) {
        if (_.key == "x" || _.key == "X")
          r.pushFlag = "cut", setTimeout(z, 200);
        else if (_.key == "v" || _.key == "V")
          r.pushFlag = "copy", setTimeout(z, 200);
        else if (_.key == "z" || _.key == "Z")
          _.preventDefault(), r.pushFlag = "symbol", _.key == "z" ? te() : Ae();
        else if (_.key == "r" || _.key == "R")
          _.preventDefault(), _.key == "r" ? (r.pushFlag = "symbol", r.replaceFrom = r.text.slice(n.value.selectionStart, n.value.selectionEnd), I.value = !0) : I.value = !1;
        else
          for (const P of t.insertUnits)
            if (P.key) {
              if (P.key instanceof Array) {
                for (const H of P.key)
                  if (H == _.key) {
                    _.preventDefault(), r.pushFlag = "symbol", R(P);
                    break;
                  }
              } else if (P.key == _.key) {
                _.preventDefault(), r.pushFlag = "symbol", R(P);
                break;
              }
            }
      } else if (_.key == "Enter")
        _.preventDefault(), r.pushFlag = "blank", ie();
      else {
        if (_.key == "Ctrl" || _.key == "Shift" || _.key.startsWith("Arrow") || _.key == "Enter" || _.key == " ")
          return;
        if (_.key == "Escape")
          O.value && (O.value = !1);
        else if (_.key == "Tab")
          _.preventDefault(), r.pushFlag = "blank", de(_, "	");
        else if (_.key == "(" || _.key == "[" || _.key == "{") {
          _.preventDefault(), r.pushFlag = "symbol";
          let P = "";
          switch (_.key) {
            case "(":
              P = ")";
              break;
            case "[":
              P = "]";
              break;
            case "{":
              P = "}";
              break;
          }
          ne({
            before: _.key,
            after: P
          });
        } else if (n.value.selectionEnd != n.value.selectionStart && (_.key == '"' || _.key == "'")) {
          _.preventDefault(), r.pushFlag = "symbol";
          let P = "";
          switch (_.key) {
            case "'":
              P = "'";
              break;
            case '"':
              P = '"';
              break;
          }
          ne({
            before: _.key,
            after: P
          });
        } else
          r.pushFlag != "input" && ee(), setTimeout(() => {
            Ie("input");
          }, 100);
      }
    }, Te = (_) => {
      _.key == "Enter" || _.key == " " ? Ie("blank") : _.key.startsWith("Arrow") && Ie("jump");
    }, _e = () => {
      setTimeout(() => {
        Ie("jump");
      }, 100);
    }, Ie = (_) => {
      r.pushFlag != _ ? (r.pushFlag = _, z()) : ae();
    }, ne = (_) => {
      let P = n.value.selectionStart, H = n.value.selectionEnd, se = r.text, G;
      const {
        before: J,
        after: ye
      } = _;
      se = At(J, se, P), G = H + J.length, ye.length > 0 && (se = At(ye, se, G)), r.text = se;
      const Ke = n.value.selectionStart != n.value.selectionEnd;
      We(() => {
        Ke ? (n.value.selectionStart = P, n.value.selectionEnd = G + ye.length) : (n.value.selectionStart = P + J.length, n.value.selectionEnd = P + J.length), z();
      });
    }, ie = () => {
      const _ = n.value.selectionStart;
      let P = `
`, H = _;
      for (r.text[H] == `
` && H--; r.text[H] != `
` && H > 0; )
        H--;
      for (H != 0 && H++; H < r.text.length && H < _ && (r.text[H] == " " || r.text[H] == "	"); H++)
        P += r.text[H];
      r.text = At(P, r.text, _), We(() => {
        n.value.selectionStart = _ + P.length, n.value.selectionEnd = n.value.selectionStart, z();
      });
    }, de = (_, P) => {
      const H = n.value.selectionStart, se = n.value.selectionEnd;
      if (_.shiftKey)
        if (n.value.selectionStart == n.value.selectionEnd) {
          let G = 0;
          for (let Ke = n.value.selectionStart - 1; Ke >= 0; Ke--)
            if (r.text[Ke] == `
`) {
              G = Ke + 1;
              break;
            }
          const J = r.text.slice(G, H), ye = J.replace(P, "");
          if (J.length == ye.length)
            return;
          r.text = r.text.slice(0, H - J.length) + ye + r.text.slice(se), We(() => {
            z(H, H);
          });
        } else {
          const G = r.text.slice(H, se), J = G.replace(P, "").replaceAll(`
` + P, `
`);
          if (G.length == J.length)
            return;
          r.text = r.text.slice(0, H) + J + r.text.slice(H + G.length), We(() => {
            n.value.selectionStart = H, n.value.selectionEnd = H + J.length, z(H, n.value.selectionEnd);
          });
        }
      else if (n.value.selectionStart == n.value.selectionEnd)
        r.text = At(P, r.text, n.value.selectionStart), We(() => {
          n.value.selectionStart = H + 1, n.value.selectionEnd = H + 1, z(H + 1, H + 1);
        });
      else {
        const G = r.text.slice(H, n.value.selectionEnd), J = P + G.replaceAll(`
`, `
` + P);
        if (G.length == J.length)
          return;
        r.text = r.text.slice(0, H) + J + r.text.slice(H + G.length), We(() => {
          n.value.selectionStart = H, n.value.selectionEnd = H + J.length, z(H, n.value.selectionEnd);
        });
      }
    };
    let he = fe();
    const Y = Jt({
      index: -1,
      indexes: []
    });
    ot(() => r.replaceFrom, () => {
      Pe(), I && (r.replaceFrom.length <= 0 || Me());
    }), ot(() => r.text, () => {
      Pe();
    }), ot(() => I.value, () => {
      Pe();
    }), ot(() => T.value, () => {
      Pe(), I.value = !1;
    }), ot(() => O.value, () => {
      Pe(), I.value = !1;
    });
    const Pe = () => {
      if (Y.index = -1, Y.indexes = [], n.value == null || (he.value.style.width = n.value.scrollWidth + "px", r.replaceFrom.length <= 0) || r.text.length <= 0)
        return;
      let _ = r.text.indexOf(r.replaceFrom, 0), P = 0;
      for (; _ >= 0; ) {
        let H = r.text.indexOf(r.replaceFrom, _);
        if (H < 0)
          break;
        n.value.selectionStart == H && n.value.selectionEnd - n.value.selectionStart == r.replaceFrom.length && (Y.index = P), Y.indexes.push(H), _ = H + r.replaceFrom.length, P++;
      }
    }, Ne = (_) => {
      n.value.scrollTop = _;
    }, Me = () => {
      setTimeout(() => {
        Ne(he.value.scrollHeight - n.value.clientHeight / 2.4), n.value.selectionStart = Y.indexes[Y.index], n.value.selectionEnd = Y.indexes[Y.index] + r.replaceFrom.length;
      }, 50);
    }, nt = () => {
      n.value != null && (Y.index > 0 && Y.index--, setTimeout(() => {
        Ne(he.value.scrollHeight - n.value.clientHeight / 2.4), n.value.focus(), n.value.selectionStart = Y.indexes[Y.index], n.value.selectionEnd = Y.indexes[Y.index] + r.replaceFrom.length;
      }, 50));
    }, Be = () => {
      n.value != null && (Y.index < Y.indexes.length - 1 && Y.index++, setTimeout(() => {
        Ne(he.value.scrollHeight - n.value.clientHeight / 2.4), n.value.focus(), n.value.selectionStart = Y.indexes[Y.index], n.value.selectionEnd = Y.indexes[Y.index] + r.replaceFrom.length;
      }, 50));
    }, qe = () => {
      r.text.slice(n.value.selectionStart, n.value.selectionEnd) == r.replaceFrom && (r.text = r.text.slice(0, n.value.selectionStart) + r.replaceTo + r.text.slice(n.value.selectionEnd), z());
    }, it = () => {
      r.replaceFrom.length <= 0 ? alert("替换文本不可为空") : (r.text = r.text.replaceAll(r.replaceFrom, r.replaceTo), We(() => {
        z();
      }));
    }, je = (_, P) => {
      let H = 0, se = 1;
      P[_] == `
` && (_--, H++);
      for (let G = _; G >= 0 && P[G] != `
`; G--)
        H++;
      for (let G = _; G >= 0; G--)
        P[G] == `
` && se++;
      return {
        y: se,
        x: H
      };
    };
    return (_, P) => {
      const H = R0("MarkdownOutline"), se = R0("MarkdownPreview");
      return Ee(), Se("div", {
        class: Ir([[ut(O) ? "full" : "non-full", ut(dr)() ? "mobile" : "pc"], "editor"])
      }, [ue("ul", Cn, [(Ee(!0), Se(Nt, null, Ut(v, (G) => (Ee(), Se("li", null, [ue("span", {
        onMousedown: st((J) => G.method(G), ["prevent", "stop"]),
        title: G.label,
        class: Ir(["iconfont", [G.active ? "chosen" : "", G.icon]])
      }, null, 42, Mn)]))), 256))]), vt((Ee(), Se("div", Dn, [ue("span", {
        class: "iconfont icon-close",
        onMousedown: P[0] || (P[0] = st((G) => b("insert", !1), ["prevent", "stop"]))
      }, null, 32), (Ee(!0), Se(Nt, null, Ut(t.insertUnits, (G) => (Ee(), Se(Nt, null, [ue("span", Ln, [ue("span", {
        class: "hover-color-blue",
        onMousedown: st((J) => R(G), ["prevent", "stop"]),
        title: G.key ? "快捷键[Ctrl + " + G.key + "]" : "无快捷键"
      }, Fe(G.label), 41, zn), (Ee(!0), Se(Nt, null, Ut(G.arguments, (J) => (Ee(), Se(Nt, null, [ue("label", null, Fe(J.label), 1), "options" in J ? (Ee(), Se("select", {
        key: 0,
        value: w.value.get(J.name).value,
        onChange: (ye) => {
          A(J.name, ye);
        }
      }, [(Ee(!0), Se(Nt, null, Ut(J.options, (ye) => (Ee(), Se("option", null, Fe(ye), 1))), 256))], 40, Pn)) : "type" in J ? (Ee(), Se("input", {
        key: 1,
        type: J.type,
        value: w.value.get(J.name).value,
        maxlength: J.inputLength ? J.inputLength : 100,
        style: Vr(J.styleWidth ? "width: " + J.styleWidth : ""),
        onInput: (ye) => {
          E(J.name, ye);
        }
      }, null, 44, Bn)) : N0("", !0)], 64))), 256))]), Fn], 64))), 256))])), [[$t, x("insert")], [ut(_r)]]), vt((Ee(), Se("div", $n, [ue("span", {
        class: "iconfont icon-close",
        onMousedown: P[1] || (P[1] = st((G) => b("replace", !1), ["prevent", "stop"]))
      }, null, 32), vt(ue("textarea", {
        "onUpdate:modelValue": P[2] || (P[2] = (G) => r.replaceFrom = G),
        placeholder: "查找文本"
      }, null, 512), [[Rr, r.replaceFrom]]), Un, vt(ue("textarea", {
        "onUpdate:modelValue": P[3] || (P[3] = (G) => r.replaceTo = G),
        placeholder: "替换文本"
      }, null, 512), [[Rr, r.replaceTo]]), ue("div", qn, [ue("span", {
        class: "hover-color-blue",
        onMousedown: st(Be, ["prevent", "stop"]),
        style: {
          padding: "0.1em"
        }
      }, "↓", 40, Hn), ue("span", {
        class: "hover-color-blue",
        onMousedown: st(nt, ["prevent", "stop"]),
        style: {
          padding: "0.1em"
        }
      }, "↑", 40, Gn), ue("span", null, Fe(Y.index + 1) + "/" + Fe(Y.indexes.length), 1), ue("span", {
        class: "hover-color-blue",
        onMousedown: st(qe, ["prevent", "stop"])
      }, "替换选中", 40, Yn), ue("span", {
        class: "hover-color-blue",
        onMousedown: st(it, ["prevent", "stop"])
      }, "替换全部", 40, Vn)])])), [[$t, x("replace")], [ut(_r)]]), vt((Ee(), Se("div", Xn, [ue("span", {
        class: "iconfont icon-close",
        onMousedown: P[4] || (P[4] = st((G) => b("outline", !1), ["prevent", "stop"]))
      }, null, 32), _0(H, {
        "markdown-text": r.text,
        target: i.value,
        click: () => {
          Nr(N) ? N.value = "preview" : N = "preview";
        }
      }, null, 8, ["markdown-text", "target", "click"])])), [[$t, x("outline")], [ut(_r)]]), ue("div", {
        class: Ir(["container", ut(l)])
      }, [vt(ue("textarea", {
        style: Vr([!ut(O) && ut(T) ? "position: absolute; visibility: hidden;" : ""]),
        ref_key: "textarea",
        ref: n,
        "onUpdate:modelValue": P[5] || (P[5] = (G) => r.text = G),
        placeholder: t.placeholder,
        class: "edit-card",
        onKeydown: ve,
        onKeyup: Te,
        onMousedown: _e,
        onMouseover: P[6] || (P[6] = () => {
          Nr(N) ? N.value = "textarea" : N = "textarea";
        })
      }, `\r
			`, 44, jn), [[Rr, r.text]]), ue("div", {
        ref_key: "previewCard",
        ref: i,
        class: "preview-card",
        onMouseover: P[7] || (P[7] = () => {
          Nr(N) ? N.value = "preview" : N = "preview";
        })
      }, [_0(se, {
        "markdown-text": r.text
      }, null, 8, ["markdown-text"])], 544), ue("div", {
        ref_key: "textareaCountLine",
        ref: he,
        textContent: Fe(r.text.substring(0, Y.indexes[Y.index])),
        style: {
          visibility: "hidden",
          "white-space": "pre-wrap",
          "overflow-wrap": "break-word",
          padding: "0.5em",
          width: "100%",
          border: "1px solid #eee"
        }
      }, null, 8, Kn)], 2), n.value !== void 0 ? (Ee(), Se("ul", Wn, [ue("li", null, "字数 " + Fe(r.text.length), 1), ue("li", null, [In(Fe(c.startPlace.y) + ":" + Fe(c.startPlace.x) + " ", 1), vt(ue("span", null, " 至 " + Fe(c.endPlace.y) + ":" + Fe(c.endPlace.x), 513), [[$t, c.selectLength > 0]])]), vt(ue("li", null, "选中 " + Fe(c.selectLength), 513), [[$t, c.selectLength > 0]])])) : N0("", !0)], 2);
    };
  }
});
function wa() {
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
let Pt = wa();
function Qn(a) {
  Pt = a;
}
const xa = /[&<>"']/, ei = new RegExp(xa.source, "g"), Ea = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ti = new RegExp(Ea.source, "g"), ri = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, O0 = (a) => ri[a];
function Re(a, e) {
  if (e) {
    if (xa.test(a))
      return a.replace(ei, O0);
  } else if (Ea.test(a))
    return a.replace(ti, O0);
  return a;
}
const ai = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Sa(a) {
  return a.replace(ai, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const ni = /(^|[^\[])\^/g;
function oe(a, e) {
  a = typeof a == "string" ? a : a.source, e = e || "";
  const t = {
    replace: (r, n) => (n = n.source || n, n = n.replace(ni, "$1"), a = a.replace(r, n), t),
    getRegex: () => new RegExp(a, e)
  };
  return t;
}
const ii = /[^\w:]/g, si = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function C0(a, e, t) {
  if (a) {
    let r;
    try {
      r = decodeURIComponent(Sa(t)).replace(ii, "").toLowerCase();
    } catch {
      return null;
    }
    if (r.indexOf("javascript:") === 0 || r.indexOf("vbscript:") === 0 || r.indexOf("data:") === 0)
      return null;
  }
  e && !si.test(t) && (t = ci(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const er = {}, li = /^[^:]+:\/*[^/]*$/, oi = /^([^:]+:)[\s\S]*$/, ui = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function ci(a, e) {
  er[" " + a] || (li.test(a) ? er[" " + a] = a + "/" : er[" " + a] = hr(a, "/", !0)), a = er[" " + a];
  const t = a.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? t ? e : a.replace(oi, "$1") + e : e.charAt(0) === "/" ? t ? e : a.replace(ui, "$1") + e : a + e;
}
const fr = { exec: function() {
} };
function Je(a) {
  let e = 1, t, r;
  for (; e < arguments.length; e++) {
    t = arguments[e];
    for (r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
  }
  return a;
}
function M0(a, e) {
  const t = a.replace(/\|/g, (i, l, o) => {
    let c = !1, p = l;
    for (; --p >= 0 && o[p] === "\\"; )
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
function hr(a, e, t) {
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
function di(a, e) {
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
function ka(a) {
  a && a.sanitize && !a.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function D0(a, e) {
  if (e < 1)
    return "";
  let t = "";
  for (; e > 1; )
    e & 1 && (t += a), e >>= 1, a += a;
  return t + a;
}
function L0(a, e, t, r) {
  const n = e.href, i = e.title ? Re(e.title) : null, l = a[1].replace(/\\([\[\]])/g, "$1");
  if (a[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const o = {
      type: "link",
      raw: t,
      href: n,
      title: i,
      text: l,
      tokens: r.inlineTokens(l)
    };
    return r.state.inLink = !1, o;
  }
  return {
    type: "image",
    raw: t,
    href: n,
    title: i,
    text: Re(l)
  };
}
function hi(a, e) {
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
class s0 {
  constructor(e) {
    this.options = e || Pt;
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
        text: this.options.pedantic ? r : hr(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], n = hi(r, t[3] || "");
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
        const n = hr(r, "#");
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
      let r, n, i, l, o, c, p, m, v, x, b, O, S = t[1].trim();
      const I = S.length > 1, T = {
        type: "list",
        raw: "",
        ordered: I,
        start: I ? +S.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      S = I ? `\\d{1,9}\\${S.slice(-1)}` : `\\${S}`, this.options.pedantic && (S = I ? S : "[*+-]");
      const w = new RegExp(`^( {0,3}${S})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; e && (O = !1, !(!(t = w.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (r = t[0], e = e.substring(r.length), m = t[2].split(`
`, 1)[0].replace(/^\t+/, (A) => " ".repeat(3 * A.length)), v = e.split(`
`, 1)[0], this.options.pedantic ? (l = 2, b = m.trimLeft()) : (l = t[2].search(/[^ ]/), l = l > 4 ? 1 : l, b = m.slice(l), l += t[1].length), c = !1, !m && /^ *$/.test(v) && (r += v + `
`, e = e.substring(v.length + 1), O = !0), !O) {
          const A = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), R = new RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), N = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`), C = new RegExp(`^ {0,${Math.min(3, l - 1)}}#`);
          for (; e && (x = e.split(`
`, 1)[0], v = x, this.options.pedantic && (v = v.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(N.test(v) || C.test(v) || A.test(v) || R.test(e))); ) {
            if (v.search(/[^ ]/) >= l || !v.trim())
              b += `
` + v.slice(l);
            else {
              if (c || m.search(/[^ ]/) >= 4 || N.test(m) || C.test(m) || R.test(m))
                break;
              b += `
` + v;
            }
            !c && !v.trim() && (c = !0), r += x + `
`, e = e.substring(x.length + 1), m = v.slice(l);
          }
        }
        T.loose || (p ? T.loose = !0 : /\n *\n *$/.test(r) && (p = !0)), this.options.gfm && (n = /^\[[ xX]\] /.exec(b), n && (i = n[0] !== "[ ] ", b = b.replace(/^\[[ xX]\] +/, ""))), T.items.push({
          type: "list_item",
          raw: r,
          task: !!n,
          checked: i,
          loose: !1,
          text: b
        }), T.raw += r;
      }
      T.items[T.items.length - 1].raw = r.trimRight(), T.items[T.items.length - 1].text = b.trimRight(), T.raw = T.raw.trimRight();
      const E = T.items.length;
      for (o = 0; o < E; o++)
        if (this.lexer.state.top = !1, T.items[o].tokens = this.lexer.blockTokens(T.items[o].text, []), !T.loose) {
          const A = T.items[o].tokens.filter((N) => N.type === "space"), R = A.length > 0 && A.some((N) => /\n.*\n/.test(N.raw));
          T.loose = R;
        }
      if (T.loose)
        for (o = 0; o < E; o++)
          T.items[o].loose = !0;
      return T;
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
        const n = this.options.sanitizer ? this.options.sanitizer(t[0]) : Re(t[0]);
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
        header: M0(t[1]).map((n) => ({ text: n })),
        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (r.header.length === r.align.length) {
        r.raw = t[0];
        let n = r.align.length, i, l, o, c;
        for (i = 0; i < n; i++)
          /^ *-+: *$/.test(r.align[i]) ? r.align[i] = "right" : /^ *:-+: *$/.test(r.align[i]) ? r.align[i] = "center" : /^ *:-+ *$/.test(r.align[i]) ? r.align[i] = "left" : r.align[i] = null;
        for (n = r.rows.length, i = 0; i < n; i++)
          r.rows[i] = M0(r.rows[i], r.header.length).map((p) => ({ text: p }));
        for (n = r.header.length, l = 0; l < n; l++)
          r.header[l].tokens = this.lexer.inline(r.header[l].text);
        for (n = r.rows.length, l = 0; l < n; l++)
          for (c = r.rows[l], o = 0; o < c.length; o++)
            c[o].tokens = this.lexer.inline(c[o].text);
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
        text: Re(t[1])
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
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : Re(t[0]) : t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const l = hr(r.slice(0, -1), "\\");
        if ((r.length - l.length) % 2 === 0)
          return;
      } else {
        const l = di(t[2], "()");
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
      return n = n.trim(), /^</.test(n) && (this.options.pedantic && !/>$/.test(r) ? n = n.slice(1) : n = n.slice(1, -1)), L0(t, {
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
      return L0(r, n, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let n = this.rules.inline.emStrong.lDelim.exec(e);
    if (!n || n[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    const i = n[1] || n[2] || "";
    if (!i || i && (r === "" || this.rules.inline.punctuation.exec(r))) {
      const l = n[0].length - 1;
      let o, c, p = l, m = 0;
      const v = n[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (v.lastIndex = 0, t = t.slice(-1 * e.length + l); (n = v.exec(t)) != null; ) {
        if (o = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !o)
          continue;
        if (c = o.length, n[3] || n[4]) {
          p += c;
          continue;
        } else if ((n[5] || n[6]) && l % 3 && !((l + c) % 3)) {
          m += c;
          continue;
        }
        if (p -= c, p > 0)
          continue;
        c = Math.min(c, c + p + m);
        const x = e.slice(0, l + n.index + (n[0].length - o.length) + c);
        if (Math.min(l, c) % 2) {
          const O = x.slice(1, -1);
          return {
            type: "em",
            raw: x,
            text: O,
            tokens: this.lexer.inlineTokens(O)
          };
        }
        const b = x.slice(2, -2);
        return {
          type: "strong",
          raw: x,
          text: b,
          tokens: this.lexer.inlineTokens(b)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const n = /[^ ]/.test(r), i = /^ /.test(r) && / $/.test(r);
      return n && i && (r = r.substring(1, r.length - 1)), r = Re(r, !0), {
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
      return r[2] === "@" ? (n = Re(this.options.mangle ? t(r[1]) : r[1]), i = "mailto:" + n) : (n = Re(r[1]), i = n), {
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
        n = Re(this.options.mangle ? t(r[0]) : r[0]), i = "mailto:" + n;
      else {
        let l;
        do
          l = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])[0];
        while (l !== r[0]);
        n = Re(r[0]), r[1] === "www." ? i = "http://" + r[0] : i = r[0];
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
      return this.lexer.state.inRawBlock ? n = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : Re(r[0]) : r[0] : n = Re(this.options.smartypants ? t(r[0]) : r[0]), {
        type: "text",
        raw: r[0],
        text: n
      };
    }
  }
}
const X = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: fr,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
X._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
X._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
X.def = oe(X.def).replace("label", X._label).replace("title", X._title).getRegex();
X.bullet = /(?:[*+-]|\d{1,9}[.)])/;
X.listItemStart = oe(/^( *)(bull) */).replace("bull", X.bullet).getRegex();
X.list = oe(X.list).replace(/bull/g, X.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + X.def.source + ")").getRegex();
X._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
X._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
X.html = oe(X.html, "i").replace("comment", X._comment).replace("tag", X._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
X.paragraph = oe(X._paragraph).replace("hr", X.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", X._tag).getRegex();
X.blockquote = oe(X.blockquote).replace("paragraph", X.paragraph).getRegex();
X.normal = Je({}, X);
X.gfm = Je({}, X.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
});
X.gfm.table = oe(X.gfm.table).replace("hr", X.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", X._tag).getRegex();
X.gfm.paragraph = oe(X._paragraph).replace("hr", X.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", X.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", X._tag).getRegex();
X.pedantic = Je({}, X.normal, {
  html: oe(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", X._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: fr,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: oe(X.normal._paragraph).replace("hr", X.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", X.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const q = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: fr,
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
  del: fr,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
q._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
q.punctuation = oe(q.punctuation).replace(/punctuation/g, q._punctuation).getRegex();
q.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
q.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
q._comment = oe(X._comment).replace("(?:-->|$)", "-->").getRegex();
q.emStrong.lDelim = oe(q.emStrong.lDelim).replace(/punct/g, q._punctuation).getRegex();
q.emStrong.rDelimAst = oe(q.emStrong.rDelimAst, "g").replace(/punct/g, q._punctuation).getRegex();
q.emStrong.rDelimUnd = oe(q.emStrong.rDelimUnd, "g").replace(/punct/g, q._punctuation).getRegex();
q._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
q._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
q._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
q.autolink = oe(q.autolink).replace("scheme", q._scheme).replace("email", q._email).getRegex();
q._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
q.tag = oe(q.tag).replace("comment", q._comment).replace("attribute", q._attribute).getRegex();
q._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
q._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
q._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
q.link = oe(q.link).replace("label", q._label).replace("href", q._href).replace("title", q._title).getRegex();
q.reflink = oe(q.reflink).replace("label", q._label).replace("ref", X._label).getRegex();
q.nolink = oe(q.nolink).replace("ref", X._label).getRegex();
q.reflinkSearch = oe(q.reflinkSearch, "g").replace("reflink", q.reflink).replace("nolink", q.nolink).getRegex();
q.normal = Je({}, q);
q.pedantic = Je({}, q.normal, {
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
  link: oe(/^!?\[(label)\]\((.*?)\)/).replace("label", q._label).getRegex(),
  reflink: oe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q._label).getRegex()
});
q.gfm = Je({}, q.normal, {
  escape: oe(q.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
q.gfm.url = oe(q.gfm.url, "i").replace("email", q.gfm._extended_email).getRegex();
q.breaks = Je({}, q.gfm, {
  br: oe(q.br).replace("{2,}", "*").getRegex(),
  text: oe(q.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function pi(a) {
  return a.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function z0(a) {
  let e = "", t, r;
  const n = a.length;
  for (t = 0; t < n; t++)
    r = a.charCodeAt(t), Math.random() > 0.5 && (r = "x" + r.toString(16)), e += "&#" + r + ";";
  return e;
}
let Lt = class Xr {
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Pt, this.options.tokenizer = this.options.tokenizer || new s0(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: X.normal,
      inline: q.normal
    };
    this.options.pedantic ? (t.block = X.pedantic, t.inline = q.pedantic) : this.options.gfm && (t.block = X.gfm, this.options.breaks ? t.inline = q.breaks : t.inline = q.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: X,
      inline: q
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new Xr(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new Xr(t).inlineTokens(e);
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
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (o, c, p) => c + "    ".repeat(p.length));
    let r, n, i, l;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o) => (r = o.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
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
          let o = 1 / 0;
          const c = e.slice(1);
          let p;
          this.options.extensions.startBlock.forEach(function(m) {
            p = m.call({ lexer: this }, c), typeof p == "number" && p >= 0 && (o = Math.min(o, p));
          }), o < 1 / 0 && o >= 0 && (i = e.substring(0, o + 1));
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
          const o = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(o);
            break;
          } else
            throw new Error(o);
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
    let r, n, i, l = e, o, c, p;
    if (this.tokens.links) {
      const m = Object.keys(this.tokens.links);
      if (m.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          m.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, o.index) + "[" + D0("a", o[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, o.index) + "[" + D0("a", o[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.escapedEmSt.exec(l)) != null; )
      l = l.slice(0, o.index + o[0].length - 2) + "++" + l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
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
        if (r = this.tokenizer.autolink(e, z0)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e, z0))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let m = 1 / 0;
          const v = e.slice(1);
          let x;
          this.options.extensions.startInline.forEach(function(b) {
            x = b.call({ lexer: this }, v), typeof x == "number" && x >= 0 && (m = Math.min(m, x));
          }), m < 1 / 0 && m >= 0 && (i = e.substring(0, m + 1));
        }
        if (r = this.tokenizer.inlineText(i, pi)) {
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
class l0 {
  constructor(e) {
    this.options = e || Pt;
  }
  code(e, t, r) {
    const n = (t || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const i = this.options.highlight(e, n);
      i != null && i !== e && (r = !0, e = i);
    }
    return e = e.replace(/\n$/, "") + `
`, n ? '<pre><code class="' + this.options.langPrefix + Re(n) + '">' + (r ? e : Re(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : Re(e, !0)) + `</code></pre>
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
    if (e = C0(this.options.sanitize, this.options.baseUrl, e), e === null)
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
    if (e = C0(this.options.sanitize, this.options.baseUrl, e), e === null)
      return r;
    let n = `<img src="${e}" alt="${r}"`;
    return t && (n += ` title="${t}"`), n += this.options.xhtml ? "/>" : ">", n;
  }
  text(e) {
    return e;
  }
}
class Ta {
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
class Aa {
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
let _t = class jr {
  constructor(e) {
    this.options = e || Pt, this.options.renderer = this.options.renderer || new l0(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ta(), this.slugger = new Aa();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new jr(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new jr(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let r = "", n, i, l, o, c, p, m, v, x, b, O, S, I, T, w, E, A, R, N;
    const C = e.length;
    for (n = 0; n < C; n++) {
      if (b = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[b.type] && (N = this.options.extensions.renderers[b.type].call({ parser: this }, b), N !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(b.type))) {
        r += N || "";
        continue;
      }
      switch (b.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          r += this.renderer.heading(
            this.parseInline(b.tokens),
            b.depth,
            Sa(this.parseInline(b.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          r += this.renderer.code(
            b.text,
            b.lang,
            b.escaped
          );
          continue;
        }
        case "table": {
          for (v = "", m = "", o = b.header.length, i = 0; i < o; i++)
            m += this.renderer.tablecell(
              this.parseInline(b.header[i].tokens),
              { header: !0, align: b.align[i] }
            );
          for (v += this.renderer.tablerow(m), x = "", o = b.rows.length, i = 0; i < o; i++) {
            for (p = b.rows[i], m = "", c = p.length, l = 0; l < c; l++)
              m += this.renderer.tablecell(
                this.parseInline(p[l].tokens),
                { header: !1, align: b.align[l] }
              );
            x += this.renderer.tablerow(m);
          }
          r += this.renderer.table(v, x);
          continue;
        }
        case "blockquote": {
          x = this.parse(b.tokens), r += this.renderer.blockquote(x);
          continue;
        }
        case "list": {
          for (O = b.ordered, S = b.start, I = b.loose, o = b.items.length, x = "", i = 0; i < o; i++)
            w = b.items[i], E = w.checked, A = w.task, T = "", w.task && (R = this.renderer.checkbox(E), I ? w.tokens.length > 0 && w.tokens[0].type === "paragraph" ? (w.tokens[0].text = R + " " + w.tokens[0].text, w.tokens[0].tokens && w.tokens[0].tokens.length > 0 && w.tokens[0].tokens[0].type === "text" && (w.tokens[0].tokens[0].text = R + " " + w.tokens[0].tokens[0].text)) : w.tokens.unshift({
              type: "text",
              text: R
            }) : T += R), T += this.parse(w.tokens, I), x += this.renderer.listitem(T, A, E);
          r += this.renderer.list(x, O, S);
          continue;
        }
        case "html": {
          r += this.renderer.html(b.text);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(this.parseInline(b.tokens));
          continue;
        }
        case "text": {
          for (x = b.tokens ? this.parseInline(b.tokens) : b.text; n + 1 < C && e[n + 1].type === "text"; )
            b = e[++n], x += `
` + (b.tokens ? this.parseInline(b.tokens) : b.text);
          r += t ? this.renderer.paragraph(x) : x;
          continue;
        }
        default: {
          const F = 'Token with "' + b.type + '" type was not found.';
          if (this.options.silent) {
            console.error(F);
            return;
          } else
            throw new Error(F);
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
    const o = e.length;
    for (n = 0; n < o; n++) {
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
function K(a, e, t) {
  if (typeof a > "u" || a === null)
    throw new Error("marked(): input parameter is undefined or null");
  if (typeof a != "string")
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
  if (typeof e == "function" && (t = e, e = null), e = Je({}, K.defaults, e || {}), ka(e), t) {
    const n = e.highlight;
    let i;
    try {
      i = Lt.lex(a, e);
    } catch (c) {
      return t(c);
    }
    const l = function(c) {
      let p;
      if (!c)
        try {
          e.walkTokens && K.walkTokens(i, e.walkTokens), p = _t.parse(i, e);
        } catch (m) {
          c = m;
        }
      return e.highlight = n, c ? t(c) : t(null, p);
    };
    if (!n || n.length < 3 || (delete e.highlight, !i.length))
      return l();
    let o = 0;
    K.walkTokens(i, function(c) {
      c.type === "code" && (o++, setTimeout(() => {
        n(c.text, c.lang, function(p, m) {
          if (p)
            return l(p);
          m != null && m !== c.text && (c.text = m, c.escaped = !0), o--, o === 0 && l();
        });
      }, 0));
    }), o === 0 && l();
    return;
  }
  function r(n) {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e.silent)
      return "<p>An error occurred:</p><pre>" + Re(n.message + "", !0) + "</pre>";
    throw n;
  }
  try {
    const n = Lt.lex(a, e);
    if (e.walkTokens) {
      if (e.async)
        return Promise.all(K.walkTokens(n, e.walkTokens)).then(() => _t.parse(n, e)).catch(r);
      K.walkTokens(n, e.walkTokens);
    }
    return _t.parse(n, e);
  } catch (n) {
    r(n);
  }
}
K.options = K.setOptions = function(a) {
  return Je(K.defaults, a), Qn(K.defaults), K;
};
K.getDefaults = wa;
K.defaults = Pt;
K.use = function(...a) {
  const e = K.defaults.extensions || { renderers: {}, childTokens: {} };
  a.forEach((t) => {
    const r = Je({}, t);
    if (r.async = K.defaults.async || r.async, t.extensions && (t.extensions.forEach((n) => {
      if (!n.name)
        throw new Error("extension name required");
      if (n.renderer) {
        const i = e.renderers[n.name];
        i ? e.renderers[n.name] = function(...l) {
          let o = n.renderer.apply(this, l);
          return o === !1 && (o = i.apply(this, l)), o;
        } : e.renderers[n.name] = n.renderer;
      }
      if (n.tokenizer) {
        if (!n.level || n.level !== "block" && n.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        e[n.level] ? e[n.level].unshift(n.tokenizer) : e[n.level] = [n.tokenizer], n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [n.start] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [n.start]));
      }
      n.childTokens && (e.childTokens[n.name] = n.childTokens);
    }), r.extensions = e), t.renderer) {
      const n = K.defaults.renderer || new l0();
      for (const i in t.renderer) {
        const l = n[i];
        n[i] = (...o) => {
          let c = t.renderer[i].apply(n, o);
          return c === !1 && (c = l.apply(n, o)), c;
        };
      }
      r.renderer = n;
    }
    if (t.tokenizer) {
      const n = K.defaults.tokenizer || new s0();
      for (const i in t.tokenizer) {
        const l = n[i];
        n[i] = (...o) => {
          let c = t.tokenizer[i].apply(n, o);
          return c === !1 && (c = l.apply(n, o)), c;
        };
      }
      r.tokenizer = n;
    }
    if (t.walkTokens) {
      const n = K.defaults.walkTokens;
      r.walkTokens = function(i) {
        let l = [];
        return l.push(t.walkTokens.call(this, i)), n && (l = l.concat(n.call(this, i))), l;
      };
    }
    K.setOptions(r);
  });
};
K.walkTokens = function(a, e) {
  let t = [];
  for (const r of a)
    switch (t = t.concat(e.call(K, r)), r.type) {
      case "table": {
        for (const n of r.header)
          t = t.concat(K.walkTokens(n.tokens, e));
        for (const n of r.rows)
          for (const i of n)
            t = t.concat(K.walkTokens(i.tokens, e));
        break;
      }
      case "list": {
        t = t.concat(K.walkTokens(r.items, e));
        break;
      }
      default:
        K.defaults.extensions && K.defaults.extensions.childTokens && K.defaults.extensions.childTokens[r.type] ? K.defaults.extensions.childTokens[r.type].forEach(function(n) {
          t = t.concat(K.walkTokens(r[n], e));
        }) : r.tokens && (t = t.concat(K.walkTokens(r.tokens, e)));
    }
  return t;
};
K.parseInline = function(a, e) {
  if (typeof a > "u" || a === null)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if (typeof a != "string")
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
  e = Je({}, K.defaults, e || {}), ka(e);
  try {
    const t = Lt.lexInline(a, e);
    return e.walkTokens && K.walkTokens(t, e.walkTokens), _t.parseInline(t, e);
  } catch (t) {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, e.silent)
      return "<p>An error occurred:</p><pre>" + Re(t.message + "", !0) + "</pre>";
    throw t;
  }
};
K.Parser = _t;
K.parser = _t.parse;
K.Renderer = l0;
K.TextRenderer = Ta;
K.Lexer = Lt;
K.lexer = Lt.lex;
K.Tokenizer = s0;
K.Slugger = Aa;
K.parse = K;
K.options;
K.setOptions;
K.use;
K.walkTokens;
K.parseInline;
_t.parse;
Lt.lex;
const mi = {
  class: "outline"
}, fi = ["onClick"], gi = {
  name: "MarkdownOutline"
}, vi = /* @__PURE__ */ i0({
  ...gi,
  props: {
    markdownText: {
      type: String,
      required: !0
    },
    policy: {
      type: String,
      required: !1,
      default: "offset"
    },
    target: {
      type: HTMLElement,
      required: !1,
      default: document.documentElement
    },
    click: {
      type: Function,
      required: !1
    }
  },
  setup(a) {
    const e = a;
    function t(i) {
      const l = [], o = /<h([1-6]) id="(.*?)">/g;
      let c;
      for (; c = o.exec(i); ) {
        const p = c[1], m = c[2];
        l.push({
          level: p,
          text: m
        });
      }
      return l;
    }
    ot(() => e.markdownText, () => {
      r.value = t(K.parse(e.markdownText));
    });
    let r = fe([]);
    const n = (i) => {
      var l;
      if (e.click && e.click(i), !!e.target) {
        if (e.policy == "anchor")
          (l = e.target.querySelector("#" + i)) == null || l.scrollIntoView();
        else if (e.policy == "offset") {
          const c = e.target.querySelector("#" + i).offsetTop - e.target.offsetTop;
          e.target.scrollTop = c - 20;
        }
      }
    };
    return (i, l) => (Ee(), Se("ul", mi, [(Ee(!0), Se(Nt, null, Ut(ut(r), (o) => (Ee(), Se("li", {
      key: o.text,
      style: Vr("padding-left: " + (o.level - 1) + "em;"),
      onClick: (c) => n(o.text)
    }, Fe(o.text), 13, fi))), 128))]));
  }
});
var P0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Kr = {}, bi = {
  get exports() {
    return Kr;
  },
  set exports(a) {
    Kr = a;
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
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, l = {}, o = {
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
        encode: function w(E) {
          return E instanceof c ? new c(E.type, w(E.content), E.alias) : Array.isArray(E) ? E.map(w) : E.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
        clone: function w(E, A) {
          A = A || {};
          var R, N;
          switch (o.util.type(E)) {
            case "Object":
              if (N = o.util.objId(E), A[N])
                return A[N];
              R = /** @type {Record<string, any>} */
              {}, A[N] = R;
              for (var C in E)
                E.hasOwnProperty(C) && (R[C] = w(E[C], A));
              return (
                /** @type {any} */
                R
              );
            case "Array":
              return N = o.util.objId(E), A[N] ? A[N] : (R = [], A[N] = R, /** @type {Array} */
              /** @type {any} */
              E.forEach(function(F, z) {
                R[z] = w(F, A);
              }), /** @type {any} */
              R);
            default:
              return E;
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
            var E = n.exec(w.className);
            if (E)
              return E[1].toLowerCase();
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
        setLanguage: function(w, E) {
          w.className = w.className.replace(RegExp(n, "gi"), ""), w.classList.add("language-" + E);
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
          } catch (R) {
            var w = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(R.stack) || [])[1];
            if (w) {
              var E = document.getElementsByTagName("script");
              for (var A in E)
                if (E[A].src == w)
                  return E[A];
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
        isActive: function(w, E, A) {
          for (var R = "no-" + E; w; ) {
            var N = w.classList;
            if (N.contains(E))
              return !0;
            if (N.contains(R))
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
        extend: function(w, E) {
          var A = o.util.clone(o.languages[w]);
          for (var R in E)
            A[R] = E[R];
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
        insertBefore: function(w, E, A, R) {
          R = R || /** @type {any} */
          o.languages;
          var N = R[w], C = {};
          for (var F in N)
            if (N.hasOwnProperty(F)) {
              if (F == E)
                for (var z in A)
                  A.hasOwnProperty(z) && (C[z] = A[z]);
              A.hasOwnProperty(F) || (C[F] = N[F]);
            }
          var ae = R[w];
          return R[w] = C, o.languages.DFS(o.languages, function(ee, te) {
            te === ae && ee != w && (this[ee] = C);
          }), C;
        },
        // Traverse a language definition with Depth First Search
        DFS: function w(E, A, R, N) {
          N = N || {};
          var C = o.util.objId;
          for (var F in E)
            if (E.hasOwnProperty(F)) {
              A.call(E, F, E[F], R || F);
              var z = E[F], ae = o.util.type(z);
              ae === "Object" && !N[C(z)] ? (N[C(z)] = !0, w(z, A, null, N)) : ae === "Array" && !N[C(z)] && (N[C(z)] = !0, w(z, A, F, N));
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
      highlightAll: function(w, E) {
        o.highlightAllUnder(document, w, E);
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
      highlightAllUnder: function(w, E, A) {
        var R = {
          callback: A,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        o.hooks.run("before-highlightall", R), R.elements = Array.prototype.slice.apply(R.container.querySelectorAll(R.selector)), o.hooks.run("before-all-elements-highlight", R);
        for (var N = 0, C; C = R.elements[N++]; )
          o.highlightElement(C, E === !0, R.callback);
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
      highlightElement: function(w, E, A) {
        var R = o.util.getLanguage(w), N = o.languages[R];
        o.util.setLanguage(w, R);
        var C = w.parentElement;
        C && C.nodeName.toLowerCase() === "pre" && o.util.setLanguage(C, R);
        var F = w.textContent, z = {
          element: w,
          language: R,
          grammar: N,
          code: F
        };
        function ae(te) {
          z.highlightedCode = te, o.hooks.run("before-insert", z), z.element.innerHTML = z.highlightedCode, o.hooks.run("after-highlight", z), o.hooks.run("complete", z), A && A.call(z.element);
        }
        if (o.hooks.run("before-sanity-check", z), C = z.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !z.code) {
          o.hooks.run("complete", z), A && A.call(z.element);
          return;
        }
        if (o.hooks.run("before-highlight", z), !z.grammar) {
          ae(o.util.encode(z.code));
          return;
        }
        if (E && r.Worker) {
          var ee = new Worker(o.filename);
          ee.onmessage = function(te) {
            ae(te.data);
          }, ee.postMessage(JSON.stringify({
            language: z.language,
            code: z.code,
            immediateClose: !0
          }));
        } else
          ae(o.highlight(z.code, z.grammar, z.language));
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
      highlight: function(w, E, A) {
        var R = {
          code: w,
          grammar: E,
          language: A
        };
        if (o.hooks.run("before-tokenize", R), !R.grammar)
          throw new Error('The language "' + R.language + '" has no grammar.');
        return R.tokens = o.tokenize(R.code, R.grammar), o.hooks.run("after-tokenize", R), c.stringify(o.util.encode(R.tokens), R.language);
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
      tokenize: function(w, E) {
        var A = E.rest;
        if (A) {
          for (var R in A)
            E[R] = A[R];
          delete E.rest;
        }
        var N = new v();
        return x(N, N.head, w), m(w, N, E, N.head, 0), O(N);
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
        add: function(w, E) {
          var A = o.hooks.all;
          A[w] = A[w] || [], A[w].push(E);
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
        run: function(w, E) {
          var A = o.hooks.all[w];
          if (!(!A || !A.length))
            for (var R = 0, N; N = A[R++]; )
              N(E);
        }
      },
      Token: c
    };
    r.Prism = o;
    function c(w, E, A, R) {
      this.type = w, this.content = E, this.alias = A, this.length = (R || "").length | 0;
    }
    c.stringify = function w(E, A) {
      if (typeof E == "string")
        return E;
      if (Array.isArray(E)) {
        var R = "";
        return E.forEach(function(ae) {
          R += w(ae, A);
        }), R;
      }
      var N = {
        type: E.type,
        content: w(E.content, A),
        tag: "span",
        classes: ["token", E.type],
        attributes: {},
        language: A
      }, C = E.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(N.classes, C) : N.classes.push(C)), o.hooks.run("wrap", N);
      var F = "";
      for (var z in N.attributes)
        F += " " + z + '="' + (N.attributes[z] || "").replace(/"/g, "&quot;") + '"';
      return "<" + N.tag + ' class="' + N.classes.join(" ") + '"' + F + ">" + N.content + "</" + N.tag + ">";
    };
    function p(w, E, A, R) {
      w.lastIndex = E;
      var N = w.exec(A);
      if (N && R && N[1]) {
        var C = N[1].length;
        N.index += C, N[0] = N[0].slice(C);
      }
      return N;
    }
    function m(w, E, A, R, N, C) {
      for (var F in A)
        if (!(!A.hasOwnProperty(F) || !A[F])) {
          var z = A[F];
          z = Array.isArray(z) ? z : [z];
          for (var ae = 0; ae < z.length; ++ae) {
            if (C && C.cause == F + "," + ae)
              return;
            var ee = z[ae], te = ee.inside, Ae = !!ee.lookbehind, ve = !!ee.greedy, Te = ee.alias;
            if (ve && !ee.pattern.global) {
              var _e = ee.pattern.toString().match(/[imsuy]*$/)[0];
              ee.pattern = RegExp(ee.pattern.source, _e + "g");
            }
            for (var Ie = ee.pattern || ee, ne = R.next, ie = N; ne !== E.tail && !(C && ie >= C.reach); ie += ne.value.length, ne = ne.next) {
              var de = ne.value;
              if (E.length > w.length)
                return;
              if (!(de instanceof c)) {
                var he = 1, Y;
                if (ve) {
                  if (Y = p(Ie, ie, w, Ae), !Y || Y.index >= w.length)
                    break;
                  var nt = Y.index, Pe = Y.index + Y[0].length, Ne = ie;
                  for (Ne += ne.value.length; nt >= Ne; )
                    ne = ne.next, Ne += ne.value.length;
                  if (Ne -= ne.value.length, ie = Ne, ne.value instanceof c)
                    continue;
                  for (var Me = ne; Me !== E.tail && (Ne < Pe || typeof Me.value == "string"); Me = Me.next)
                    he++, Ne += Me.value.length;
                  he--, de = w.slice(ie, Ne), Y.index -= ie;
                } else if (Y = p(Ie, 0, de, Ae), !Y)
                  continue;
                var nt = Y.index, Be = Y[0], qe = de.slice(0, nt), it = de.slice(nt + Be.length), je = ie + de.length;
                C && je > C.reach && (C.reach = je);
                var _ = ne.prev;
                qe && (_ = x(E, _, qe), ie += qe.length), b(E, _, he);
                var P = new c(F, te ? o.tokenize(Be, te) : Be, Te, Be);
                if (ne = x(E, _, P), it && x(E, ne, it), he > 1) {
                  var H = {
                    cause: F + "," + ae,
                    reach: je
                  };
                  m(w, E, A, ne.prev, ie, H), C && H.reach > C.reach && (C.reach = H.reach);
                }
              }
            }
          }
        }
    }
    function v() {
      var w = { value: null, prev: null, next: null }, E = { value: null, prev: w, next: null };
      w.next = E, this.head = w, this.tail = E, this.length = 0;
    }
    function x(w, E, A) {
      var R = E.next, N = { value: A, prev: E, next: R };
      return E.next = N, R.prev = N, w.length++, N;
    }
    function b(w, E, A) {
      for (var R = E.next, N = 0; N < A && R !== w.tail; N++)
        R = R.next;
      E.next = R, R.prev = E, w.length -= N;
    }
    function O(w) {
      for (var E = [], A = w.head.next; A !== w.tail; )
        E.push(A.value), A = A.next;
      return E;
    }
    if (!r.document)
      return r.addEventListener && (o.disableWorkerMessageHandler || r.addEventListener("message", function(w) {
        var E = JSON.parse(w.data), A = E.language, R = E.code, N = E.immediateClose;
        r.postMessage(o.highlight(R, o.languages[A], A)), N && r.close();
      }, !1)), o;
    var S = o.util.currentScript();
    S && (o.filename = S.src, S.hasAttribute("data-manual") && (o.manual = !0));
    function I() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var T = document.readyState;
      T === "loading" || T === "interactive" && S && S.defer ? document.addEventListener("DOMContentLoaded", I) : window.requestAnimationFrame ? window.requestAnimationFrame(I) : window.setTimeout(I, 16);
    }
    return o;
  }(e);
  a.exports && (a.exports = t), typeof P0 < "u" && (P0.Prism = t);
})(bi);
const B0 = Kr;
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
  function l(o, c) {
    c = (c || "").replace(/m/g, "") + "m";
    var p = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return r;
    }).replace(/<<value>>/g, function() {
      return o;
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
  var t = e.tokens.filter(function(S) {
    return typeof S != "string" && S.type !== "comment" && S.type !== "scalar";
  }), r = 0;
  function n(S) {
    return t[r + S];
  }
  function i(S, I) {
    I = I || 0;
    for (var T = 0; T < S.length; T++) {
      var w = n(T + I);
      if (!w || w.type !== S[T])
        return !1;
    }
    return !0;
  }
  function l(S, I) {
    for (var T = 1, w = r; w < t.length; w++) {
      var E = t[w], A = E.content;
      if (E.type === "punctuation" && typeof A == "string") {
        if (S.test(A))
          T++;
        else if (I.test(A) && (T--, T === 0))
          return w;
      }
    }
    return -1;
  }
  function o(S, I) {
    var T = S.alias;
    T ? Array.isArray(T) || (S.alias = T = [T]) : S.alias = T = [], T.push(I);
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
          var v = n(0);
          v.type === "variable" && (o(v, "variable-input"), p.push(v.content));
        }
        r = m + 1;
      }
      if (i(["punctuation", "property-query"]) && n(0).content === "{" && (r++, o(n(0), "property-mutation"), p.length > 0)) {
        var x = l(/^\{$/, /^\}$/);
        if (x === -1)
          continue;
        for (var b = r; b < x; b++) {
          var O = t[b];
          O.type === "variable" && p.indexOf(O.content) >= 0 && o(O, "variable-input");
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
    var m = p.replace(/^[a-z]+\//, ""), v = "\\w+/(?:[\\w.-]+\\+)+" + m + "(?![+\\w.-])";
    return "(?:" + p + "|" + v + ")";
  }
  var l;
  for (var o in r)
    if (r[o]) {
      l = l || {};
      var c = n[o] ? i(o) : o;
      l[o.replace(/\//g, "-")] = {
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
        inside: r[o]
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
          t.code = t.code.replace(n, function(o) {
            if (typeof i == "function" && !i(o))
              return o;
            for (var c = l.length, p; t.code.indexOf(p = e(r, c)) !== -1; )
              ++c;
            return l[c] = o, p;
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
        function l(o) {
          for (var c = 0; c < o.length && !(n >= i.length); c++) {
            var p = o[c];
            if (typeof p == "string" || p.content && typeof p.content == "string") {
              var m = i[n], v = t.tokenStack[m], x = typeof p == "string" ? p : p.content, b = e(r, m), O = x.indexOf(b);
              if (O > -1) {
                ++n;
                var S = x.substring(0, O), I = new a.Token(r, a.tokenize(v, t.grammar), "language-" + r, v), T = x.substring(O + b.length), w = [];
                S && w.push.apply(w, l([S])), w.push(I), T && w.push.apply(w, l([T])), typeof p == "string" ? o.splice.apply(o, [c, 1].concat(w)) : p.content = w;
              }
            } else
              p.content && l(p.content);
          }
          return o;
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
  }, o = [
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
    string: o,
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
            string: o,
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
    var l = "doc-comment", o = a.languages[n];
    if (o) {
      var c = o[l];
      if (!c) {
        var p = {};
        p[l] = {
          pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          alias: "comment"
        }, o = a.languages.insertBefore(n, "comment", p), c = o[l];
      }
      if (c instanceof RegExp && (c = o[l] = { pattern: c }), Array.isArray(c))
        for (var m = 0, v = c.length; m < v; m++)
          c[m] instanceof RegExp && (c[m] = { pattern: c[m] }), i(c[m]);
      else
        i(c);
    }
  }
  function r(n, i) {
    typeof n == "string" && (n = [n]), n.forEach(function(l) {
      t(l, function(o) {
        o.inside || (o.inside = {}), o.inside.rest = i;
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
  function e(ie, de) {
    return ie.replace(/<<(\d+)>>/g, function(he, Y) {
      return "(?:" + de[+Y] + ")";
    });
  }
  function t(ie, de, he) {
    return RegExp(e(ie, de), he || "");
  }
  function r(ie, de) {
    for (var he = 0; he < de; he++)
      ie = ie.replace(/<<self>>/g, function() {
        return "(?:" + ie + ")";
      });
    return ie.replace(/<<self>>/g, "[^\\s\\S]");
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
  function i(ie) {
    return "\\b(?:" + ie.trim().replace(/ /g, "|") + ")\\b";
  }
  var l = i(n.typeDeclaration), o = RegExp(i(n.type + " " + n.typeDeclaration + " " + n.contextual + " " + n.other)), c = i(n.typeDeclaration + " " + n.contextual + " " + n.other), p = i(n.type + " " + n.typeDeclaration + " " + n.other), m = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2), v = r(/\((?:[^()]|<<self>>)*\)/.source, 2), x = /@?\b[A-Za-z_]\w*\b/.source, b = e(/<<0>>(?:\s*<<1>>)?/.source, [x, m]), O = e(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [c, b]), S = /\[\s*(?:,\s*)*\]/.source, I = e(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [O, S]), T = e(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [m, v, S]), w = e(/\(<<0>>+(?:,<<0>>+)+\)/.source, [T]), E = e(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [w, O, S]), A = {
    keyword: o,
    punctuation: /[<>()?,.:[\]]/
  }, R = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source, N = /"(?:\\.|[^\\"\r\n])*"/.source, C = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
  a.languages.csharp = a.languages.extend("clike", {
    string: [
      {
        pattern: t(/(^|[^$\\])<<0>>/.source, [C]),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: t(/(^|[^@$\\])<<0>>/.source, [N]),
        lookbehind: !0,
        greedy: !0
      }
    ],
    "class-name": [
      {
        // Using static
        // using static System.Math;
        pattern: t(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [O]),
        lookbehind: !0,
        inside: A
      },
      {
        // Using alias (type)
        // using Project = PC.MyCompany.Project;
        pattern: t(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [x, E]),
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
        pattern: t(/(\b<<0>>\s+)<<1>>/.source, [l, b]),
        lookbehind: !0,
        inside: A
      },
      {
        // Single catch exception declaration
        // catch(Foo)
        // (things like catch(Foo e) is covered by variable declaration)
        pattern: t(/(\bcatch\s*\(\s*)<<0>>/.source, [O]),
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
        pattern: t(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [I]),
        lookbehind: !0,
        inside: A
      },
      {
        // Variable, field and parameter declaration
        // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
        pattern: t(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [E, p, x]),
        inside: A
      }
    ],
    keyword: o,
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
      pattern: t(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [v]),
      lookbehind: !0,
      alias: "class-name",
      inside: A
    },
    "return-type": {
      // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
      // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
      // int Foo => 0; int Foo { get; set } = 0;
      pattern: t(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [E, O]),
      inside: A,
      alias: "class-name"
    },
    "constructor-invocation": {
      // new List<Foo<Bar[]>> { }
      pattern: t(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [E]),
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
        [l, b, x, E, o.source, v, /\bnew\s*\(\s*\)/.source]
      ),
      lookbehind: !0,
      inside: {
        "record-arguments": {
          pattern: t(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [b, v]),
          lookbehind: !0,
          greedy: !0,
          inside: a.languages.csharp
        },
        keyword: o,
        "class-name": {
          pattern: RegExp(E),
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
  var F = N + "|" + R, z = e(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [F]), ae = r(e(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [z]), 2), ee = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source, te = e(/<<0>>(?:\s*\(<<1>>*\))?/.source, [O, ae]);
  a.languages.insertBefore("csharp", "class-name", {
    attribute: {
      // Attributes
      // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
      pattern: t(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [ee, te]),
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
          pattern: RegExp(O),
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /[:,]/
      }
    }
  });
  var Ae = /:[^}\r\n]+/.source, ve = r(e(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [z]), 2), Te = e(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [ve, Ae]), _e = r(e(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [F]), 2), Ie = e(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [_e, Ae]);
  function ne(ie, de) {
    return {
      interpolation: {
        pattern: t(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [ie]),
        lookbehind: !0,
        inside: {
          "format-string": {
            pattern: t(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [de, Ae]),
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
        pattern: t(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [Te]),
        lookbehind: !0,
        greedy: !0,
        inside: ne(Te, ve)
      },
      {
        pattern: t(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [Ie]),
        lookbehind: !0,
        greedy: !0,
        inside: ne(Ie, _e)
      }
    ],
    char: {
      pattern: RegExp(R),
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
  function o(c, p) {
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
          pattern: o(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"),
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
            pattern: o(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"),
            lookbehind: !0,
            greedy: !0
          },
          {
            // https://docs.docker.com/engine/reference/builder/#from
            pattern: o(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"),
            lookbehind: !0,
            greedy: !0
          },
          {
            // https://docs.docker.com/engine/reference/builder/#onbuild
            pattern: o(/(^ONBUILD<SP>)\w+/.source, "i"),
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
class $e {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new $e(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Ge {
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
    return new Ge(t, $e.range(this, e));
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
      var o = i.end;
      n === l.length ? r += " at end of input: " : r += " at position " + (n + 1) + ": ";
      var c = l.slice(n, o).replace(/[^]/g, "$&̲"), p;
      n > 15 ? p = "…" + l.slice(n - 15, n) : p = l.slice(0, n);
      var m;
      o + 15 < l.length ? m = l.slice(o, o + 15) + "…" : m = l.slice(o), r += p + c + m;
    }
    var v = new Error(r);
    return v.name = "ParseError", v.__proto__ = L.prototype, v.position = n, v;
  }
}
L.prototype.__proto__ = Error.prototype;
var yi = function(e, t) {
  return e.indexOf(t) !== -1;
}, wi = function(e, t) {
  return e === void 0 ? t : e;
}, xi = /([A-Z])/g, Ei = function(e) {
  return e.replace(xi, "-$1").toLowerCase();
}, Si = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, ki = /[&><"']/g;
function Ti(a) {
  return String(a).replace(ki, (e) => Si[e]);
}
var Ia = function a(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? a(e.body[0]) : e : e.type === "font" ? a(e.body) : e;
}, Ai = function(e) {
  var t = Ia(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, Ii = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Ri = function(e) {
  var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
  return t != null ? t[1] : "_relative";
}, W = {
  contains: yi,
  deflt: wi,
  escape: Ti,
  hyphenate: Ei,
  getBaseElem: Ia,
  isCharacterBox: Ai,
  protocolFromUrl: Ri
}, pr = {
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
function Ni(a) {
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
class o0 {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in pr)
      if (pr.hasOwnProperty(t)) {
        var r = pr[t];
        this[t] = e[t] !== void 0 ? r.processor ? r.processor(e[t]) : e[t] : Ni(r);
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
    e.url && !e.protocol && (e.protocol = W.protocolFromUrl(e.url));
    var t = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!t;
  }
}
class bt {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Qe[_i[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Qe[Oi[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Qe[Ci[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Qe[Mi[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Qe[Di[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Qe[Li[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var u0 = 0, gr = 1, Dt = 2, dt = 3, Yt = 4, Ye = 5, zt = 6, Oe = 7, Qe = [new bt(u0, 0, !1), new bt(gr, 0, !0), new bt(Dt, 1, !1), new bt(dt, 1, !0), new bt(Yt, 2, !1), new bt(Ye, 2, !0), new bt(zt, 3, !1), new bt(Oe, 3, !0)], _i = [Yt, Ye, Yt, Ye, zt, Oe, zt, Oe], Oi = [Ye, Ye, Ye, Ye, Oe, Oe, Oe, Oe], Ci = [Dt, dt, Yt, Ye, zt, Oe, zt, Oe], Mi = [dt, dt, Ye, Ye, Oe, Oe, Oe, Oe], Di = [gr, gr, dt, dt, Ye, Ye, Oe, Oe], Li = [u0, gr, Dt, dt, Dt, dt, Dt, dt], V = {
  DISPLAY: Qe[u0],
  TEXT: Qe[Dt],
  SCRIPT: Qe[Yt],
  SCRIPTSCRIPT: Qe[zt]
}, Wr = [{
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
function zi(a) {
  for (var e = 0; e < Wr.length; e++)
    for (var t = Wr[e], r = 0; r < t.blocks.length; r++) {
      var n = t.blocks[r];
      if (a >= n[0] && a <= n[1])
        return t.name;
    }
  return null;
}
var mr = [];
Wr.forEach((a) => a.blocks.forEach((e) => mr.push(...e)));
function Ra(a) {
  for (var e = 0; e < mr.length; e += 2)
    if (a >= mr[e] && a <= mr[e + 1])
      return !0;
  return !1;
}
var Mt = 80, Pi = function(e, t) {
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
}, Bi = function(e, t) {
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
}, Fi = function(e, t) {
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
}, $i = function(e, t) {
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
}, Ui = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, qi = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Hi = function(e, t, r) {
  var n = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Gi = function(e, t, r) {
  t = 1e3 * t;
  var n = "";
  switch (e) {
    case "sqrtMain":
      n = Pi(t, Mt);
      break;
    case "sqrtSize1":
      n = Bi(t, Mt);
      break;
    case "sqrtSize2":
      n = Fi(t, Mt);
      break;
    case "sqrtSize3":
      n = $i(t, Mt);
      break;
    case "sqrtSize4":
      n = Ui(t, Mt);
      break;
    case "sqrtTall":
      n = Hi(t, Mt, r);
  }
  return n;
}, Yi = function(e, t) {
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
}, F0 = {
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
}, Vi = function(e, t) {
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
class jt {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return W.contains(this.classes, e);
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
var et = {
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
}, tr = {
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
}, $0 = {
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
function Xi(a, e) {
  et[a] = e;
}
function c0(a, e, t) {
  if (!et[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = a.charCodeAt(0), n = et[e][r];
  if (!n && a[0] in $0 && (r = $0[a[0]].charCodeAt(0), n = et[e][r]), !n && t === "text" && Ra(r) && (n = et[e][77]), n)
    return {
      depth: n[0],
      height: n[1],
      italic: n[2],
      skew: n[3],
      width: n[4]
    };
}
var Or = {};
function ji(a) {
  var e;
  if (a >= 5 ? e = 0 : a >= 3 ? e = 1 : e = 2, !Or[e]) {
    var t = Or[e] = {
      cssEmPerMu: tr.quad[e] / 18
    };
    for (var r in tr)
      tr.hasOwnProperty(r) && (t[r] = tr[r][e]);
  }
  return Or[e];
}
var Ki = [
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
], U0 = [
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
], q0 = function(e, t) {
  return t.size < 2 ? e : Ki[e - 1][t.size - 1];
};
class ct {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || ct.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = U0[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
    return new ct(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: q0(this.textSize, e)
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
      sizeMultiplier: U0[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = q0(ct.BASESIZE, e);
    return this.size === t && this.textSize === ct.BASESIZE && this.style === e ? this : this.extend({
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
    return this.size !== ct.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + ct.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = ji(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
ct.BASESIZE = 6;
var Zr = {
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
}, Wi = {
  ex: !0,
  em: !0,
  mu: !0
}, Na = function(e) {
  return typeof e != "string" && (e = e.unit), e in Zr || e in Wi || e === "ex";
}, ge = function(e, t) {
  var r;
  if (e.unit in Zr)
    r = Zr[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
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
}, B = function(e) {
  return +e.toFixed(4) + "em";
}, xt = function(e) {
  return e.filter((t) => t).join(" ");
}, _a = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var n = t.getColor();
    n && (this.style.color = n);
  }
}, Oa = function(e) {
  var t = document.createElement(e);
  t.className = xt(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var n in this.attributes)
    this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, Ca = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + W.escape(xt(this.classes)) + '"');
  var r = "";
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (r += W.hyphenate(n) + ":" + this.style[n] + ";");
  r && (t += ' style="' + W.escape(r) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + W.escape(this.attributes[i]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class Kt {
  constructor(e, t, r, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, _a.call(this, e, r, n), this.children = t || [];
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
    return W.contains(this.classes, e);
  }
  toNode() {
    return Oa.call(this, "span");
  }
  toMarkup() {
    return Ca.call(this, "span");
  }
}
class d0 {
  constructor(e, t, r, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, _a.call(this, t, n), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return W.contains(this.classes, e);
  }
  toNode() {
    return Oa.call(this, "a");
  }
  toMarkup() {
    return Ca.call(this, "a");
  }
}
class Zi {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return W.contains(this.classes, e);
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
      this.style.hasOwnProperty(r) && (t += W.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + W.escape(t) + '"'), e += "'/>", e;
  }
}
var Ji = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Ve {
  constructor(e, t, r, n, i, l, o, c) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = i || 0, this.width = l || 0, this.classes = o || [], this.style = c || {}, this.maxFontSize = 0;
    var p = zi(this.text.charCodeAt(0));
    p && this.classes.push(p + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Ji[this.text]);
  }
  hasClass(e) {
    return W.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = B(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = xt(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += W.escape(xt(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (r += W.hyphenate(n) + ":" + this.style[n] + ";");
    r && (e = !0, t += ' style="' + W.escape(r) + '"');
    var i = W.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class pt {
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
class Et {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", F0[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + F0[this.pathName] + "'/>";
  }
}
class Jr {
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
function H0(a) {
  if (a instanceof Ve)
    return a;
  throw new Error("Expected symbolNode but got " + String(a) + ".");
}
function Qi(a) {
  if (a instanceof Kt)
    return a;
  throw new Error("Expected span<HtmlDomNode> but got " + String(a) + ".");
}
var es = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, ts = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, ce = {
  math: {},
  text: {}
};
function s(a, e, t, r, n, i) {
  ce[a][n] = {
    font: e,
    group: t,
    replace: r
  }, i && r && (ce[a][r] = ce[a][n]);
}
var u = "math", M = "text", d = "main", f = "ams", pe = "accent-token", U = "bin", Ce = "close", Bt = "inner", j = "mathord", xe = "op-token", Ue = "open", xr = "punct", g = "rel", gt = "spacing", y = "textord";
s(u, d, g, "≡", "\\equiv", !0);
s(u, d, g, "≺", "\\prec", !0);
s(u, d, g, "≻", "\\succ", !0);
s(u, d, g, "∼", "\\sim", !0);
s(u, d, g, "⊥", "\\perp");
s(u, d, g, "⪯", "\\preceq", !0);
s(u, d, g, "⪰", "\\succeq", !0);
s(u, d, g, "≃", "\\simeq", !0);
s(u, d, g, "∣", "\\mid", !0);
s(u, d, g, "≪", "\\ll", !0);
s(u, d, g, "≫", "\\gg", !0);
s(u, d, g, "≍", "\\asymp", !0);
s(u, d, g, "∥", "\\parallel");
s(u, d, g, "⋈", "\\bowtie", !0);
s(u, d, g, "⌣", "\\smile", !0);
s(u, d, g, "⊑", "\\sqsubseteq", !0);
s(u, d, g, "⊒", "\\sqsupseteq", !0);
s(u, d, g, "≐", "\\doteq", !0);
s(u, d, g, "⌢", "\\frown", !0);
s(u, d, g, "∋", "\\ni", !0);
s(u, d, g, "∝", "\\propto", !0);
s(u, d, g, "⊢", "\\vdash", !0);
s(u, d, g, "⊣", "\\dashv", !0);
s(u, d, g, "∋", "\\owns");
s(u, d, xr, ".", "\\ldotp");
s(u, d, xr, "⋅", "\\cdotp");
s(u, d, y, "#", "\\#");
s(M, d, y, "#", "\\#");
s(u, d, y, "&", "\\&");
s(M, d, y, "&", "\\&");
s(u, d, y, "ℵ", "\\aleph", !0);
s(u, d, y, "∀", "\\forall", !0);
s(u, d, y, "ℏ", "\\hbar", !0);
s(u, d, y, "∃", "\\exists", !0);
s(u, d, y, "∇", "\\nabla", !0);
s(u, d, y, "♭", "\\flat", !0);
s(u, d, y, "ℓ", "\\ell", !0);
s(u, d, y, "♮", "\\natural", !0);
s(u, d, y, "♣", "\\clubsuit", !0);
s(u, d, y, "℘", "\\wp", !0);
s(u, d, y, "♯", "\\sharp", !0);
s(u, d, y, "♢", "\\diamondsuit", !0);
s(u, d, y, "ℜ", "\\Re", !0);
s(u, d, y, "♡", "\\heartsuit", !0);
s(u, d, y, "ℑ", "\\Im", !0);
s(u, d, y, "♠", "\\spadesuit", !0);
s(u, d, y, "§", "\\S", !0);
s(M, d, y, "§", "\\S");
s(u, d, y, "¶", "\\P", !0);
s(M, d, y, "¶", "\\P");
s(u, d, y, "†", "\\dag");
s(M, d, y, "†", "\\dag");
s(M, d, y, "†", "\\textdagger");
s(u, d, y, "‡", "\\ddag");
s(M, d, y, "‡", "\\ddag");
s(M, d, y, "‡", "\\textdaggerdbl");
s(u, d, Ce, "⎱", "\\rmoustache", !0);
s(u, d, Ue, "⎰", "\\lmoustache", !0);
s(u, d, Ce, "⟯", "\\rgroup", !0);
s(u, d, Ue, "⟮", "\\lgroup", !0);
s(u, d, U, "∓", "\\mp", !0);
s(u, d, U, "⊖", "\\ominus", !0);
s(u, d, U, "⊎", "\\uplus", !0);
s(u, d, U, "⊓", "\\sqcap", !0);
s(u, d, U, "∗", "\\ast");
s(u, d, U, "⊔", "\\sqcup", !0);
s(u, d, U, "◯", "\\bigcirc", !0);
s(u, d, U, "∙", "\\bullet", !0);
s(u, d, U, "‡", "\\ddagger");
s(u, d, U, "≀", "\\wr", !0);
s(u, d, U, "⨿", "\\amalg");
s(u, d, U, "&", "\\And");
s(u, d, g, "⟵", "\\longleftarrow", !0);
s(u, d, g, "⇐", "\\Leftarrow", !0);
s(u, d, g, "⟸", "\\Longleftarrow", !0);
s(u, d, g, "⟶", "\\longrightarrow", !0);
s(u, d, g, "⇒", "\\Rightarrow", !0);
s(u, d, g, "⟹", "\\Longrightarrow", !0);
s(u, d, g, "↔", "\\leftrightarrow", !0);
s(u, d, g, "⟷", "\\longleftrightarrow", !0);
s(u, d, g, "⇔", "\\Leftrightarrow", !0);
s(u, d, g, "⟺", "\\Longleftrightarrow", !0);
s(u, d, g, "↦", "\\mapsto", !0);
s(u, d, g, "⟼", "\\longmapsto", !0);
s(u, d, g, "↗", "\\nearrow", !0);
s(u, d, g, "↩", "\\hookleftarrow", !0);
s(u, d, g, "↪", "\\hookrightarrow", !0);
s(u, d, g, "↘", "\\searrow", !0);
s(u, d, g, "↼", "\\leftharpoonup", !0);
s(u, d, g, "⇀", "\\rightharpoonup", !0);
s(u, d, g, "↙", "\\swarrow", !0);
s(u, d, g, "↽", "\\leftharpoondown", !0);
s(u, d, g, "⇁", "\\rightharpoondown", !0);
s(u, d, g, "↖", "\\nwarrow", !0);
s(u, d, g, "⇌", "\\rightleftharpoons", !0);
s(u, f, g, "≮", "\\nless", !0);
s(u, f, g, "", "\\@nleqslant");
s(u, f, g, "", "\\@nleqq");
s(u, f, g, "⪇", "\\lneq", !0);
s(u, f, g, "≨", "\\lneqq", !0);
s(u, f, g, "", "\\@lvertneqq");
s(u, f, g, "⋦", "\\lnsim", !0);
s(u, f, g, "⪉", "\\lnapprox", !0);
s(u, f, g, "⊀", "\\nprec", !0);
s(u, f, g, "⋠", "\\npreceq", !0);
s(u, f, g, "⋨", "\\precnsim", !0);
s(u, f, g, "⪹", "\\precnapprox", !0);
s(u, f, g, "≁", "\\nsim", !0);
s(u, f, g, "", "\\@nshortmid");
s(u, f, g, "∤", "\\nmid", !0);
s(u, f, g, "⊬", "\\nvdash", !0);
s(u, f, g, "⊭", "\\nvDash", !0);
s(u, f, g, "⋪", "\\ntriangleleft");
s(u, f, g, "⋬", "\\ntrianglelefteq", !0);
s(u, f, g, "⊊", "\\subsetneq", !0);
s(u, f, g, "", "\\@varsubsetneq");
s(u, f, g, "⫋", "\\subsetneqq", !0);
s(u, f, g, "", "\\@varsubsetneqq");
s(u, f, g, "≯", "\\ngtr", !0);
s(u, f, g, "", "\\@ngeqslant");
s(u, f, g, "", "\\@ngeqq");
s(u, f, g, "⪈", "\\gneq", !0);
s(u, f, g, "≩", "\\gneqq", !0);
s(u, f, g, "", "\\@gvertneqq");
s(u, f, g, "⋧", "\\gnsim", !0);
s(u, f, g, "⪊", "\\gnapprox", !0);
s(u, f, g, "⊁", "\\nsucc", !0);
s(u, f, g, "⋡", "\\nsucceq", !0);
s(u, f, g, "⋩", "\\succnsim", !0);
s(u, f, g, "⪺", "\\succnapprox", !0);
s(u, f, g, "≆", "\\ncong", !0);
s(u, f, g, "", "\\@nshortparallel");
s(u, f, g, "∦", "\\nparallel", !0);
s(u, f, g, "⊯", "\\nVDash", !0);
s(u, f, g, "⋫", "\\ntriangleright");
s(u, f, g, "⋭", "\\ntrianglerighteq", !0);
s(u, f, g, "", "\\@nsupseteqq");
s(u, f, g, "⊋", "\\supsetneq", !0);
s(u, f, g, "", "\\@varsupsetneq");
s(u, f, g, "⫌", "\\supsetneqq", !0);
s(u, f, g, "", "\\@varsupsetneqq");
s(u, f, g, "⊮", "\\nVdash", !0);
s(u, f, g, "⪵", "\\precneqq", !0);
s(u, f, g, "⪶", "\\succneqq", !0);
s(u, f, g, "", "\\@nsubseteqq");
s(u, f, U, "⊴", "\\unlhd");
s(u, f, U, "⊵", "\\unrhd");
s(u, f, g, "↚", "\\nleftarrow", !0);
s(u, f, g, "↛", "\\nrightarrow", !0);
s(u, f, g, "⇍", "\\nLeftarrow", !0);
s(u, f, g, "⇏", "\\nRightarrow", !0);
s(u, f, g, "↮", "\\nleftrightarrow", !0);
s(u, f, g, "⇎", "\\nLeftrightarrow", !0);
s(u, f, g, "△", "\\vartriangle");
s(u, f, y, "ℏ", "\\hslash");
s(u, f, y, "▽", "\\triangledown");
s(u, f, y, "◊", "\\lozenge");
s(u, f, y, "Ⓢ", "\\circledS");
s(u, f, y, "®", "\\circledR");
s(M, f, y, "®", "\\circledR");
s(u, f, y, "∡", "\\measuredangle", !0);
s(u, f, y, "∄", "\\nexists");
s(u, f, y, "℧", "\\mho");
s(u, f, y, "Ⅎ", "\\Finv", !0);
s(u, f, y, "⅁", "\\Game", !0);
s(u, f, y, "‵", "\\backprime");
s(u, f, y, "▲", "\\blacktriangle");
s(u, f, y, "▼", "\\blacktriangledown");
s(u, f, y, "■", "\\blacksquare");
s(u, f, y, "⧫", "\\blacklozenge");
s(u, f, y, "★", "\\bigstar");
s(u, f, y, "∢", "\\sphericalangle", !0);
s(u, f, y, "∁", "\\complement", !0);
s(u, f, y, "ð", "\\eth", !0);
s(M, d, y, "ð", "ð");
s(u, f, y, "╱", "\\diagup");
s(u, f, y, "╲", "\\diagdown");
s(u, f, y, "□", "\\square");
s(u, f, y, "□", "\\Box");
s(u, f, y, "◊", "\\Diamond");
s(u, f, y, "¥", "\\yen", !0);
s(M, f, y, "¥", "\\yen", !0);
s(u, f, y, "✓", "\\checkmark", !0);
s(M, f, y, "✓", "\\checkmark");
s(u, f, y, "ℶ", "\\beth", !0);
s(u, f, y, "ℸ", "\\daleth", !0);
s(u, f, y, "ℷ", "\\gimel", !0);
s(u, f, y, "ϝ", "\\digamma", !0);
s(u, f, y, "ϰ", "\\varkappa");
s(u, f, Ue, "┌", "\\@ulcorner", !0);
s(u, f, Ce, "┐", "\\@urcorner", !0);
s(u, f, Ue, "└", "\\@llcorner", !0);
s(u, f, Ce, "┘", "\\@lrcorner", !0);
s(u, f, g, "≦", "\\leqq", !0);
s(u, f, g, "⩽", "\\leqslant", !0);
s(u, f, g, "⪕", "\\eqslantless", !0);
s(u, f, g, "≲", "\\lesssim", !0);
s(u, f, g, "⪅", "\\lessapprox", !0);
s(u, f, g, "≊", "\\approxeq", !0);
s(u, f, U, "⋖", "\\lessdot");
s(u, f, g, "⋘", "\\lll", !0);
s(u, f, g, "≶", "\\lessgtr", !0);
s(u, f, g, "⋚", "\\lesseqgtr", !0);
s(u, f, g, "⪋", "\\lesseqqgtr", !0);
s(u, f, g, "≑", "\\doteqdot");
s(u, f, g, "≓", "\\risingdotseq", !0);
s(u, f, g, "≒", "\\fallingdotseq", !0);
s(u, f, g, "∽", "\\backsim", !0);
s(u, f, g, "⋍", "\\backsimeq", !0);
s(u, f, g, "⫅", "\\subseteqq", !0);
s(u, f, g, "⋐", "\\Subset", !0);
s(u, f, g, "⊏", "\\sqsubset", !0);
s(u, f, g, "≼", "\\preccurlyeq", !0);
s(u, f, g, "⋞", "\\curlyeqprec", !0);
s(u, f, g, "≾", "\\precsim", !0);
s(u, f, g, "⪷", "\\precapprox", !0);
s(u, f, g, "⊲", "\\vartriangleleft");
s(u, f, g, "⊴", "\\trianglelefteq");
s(u, f, g, "⊨", "\\vDash", !0);
s(u, f, g, "⊪", "\\Vvdash", !0);
s(u, f, g, "⌣", "\\smallsmile");
s(u, f, g, "⌢", "\\smallfrown");
s(u, f, g, "≏", "\\bumpeq", !0);
s(u, f, g, "≎", "\\Bumpeq", !0);
s(u, f, g, "≧", "\\geqq", !0);
s(u, f, g, "⩾", "\\geqslant", !0);
s(u, f, g, "⪖", "\\eqslantgtr", !0);
s(u, f, g, "≳", "\\gtrsim", !0);
s(u, f, g, "⪆", "\\gtrapprox", !0);
s(u, f, U, "⋗", "\\gtrdot");
s(u, f, g, "⋙", "\\ggg", !0);
s(u, f, g, "≷", "\\gtrless", !0);
s(u, f, g, "⋛", "\\gtreqless", !0);
s(u, f, g, "⪌", "\\gtreqqless", !0);
s(u, f, g, "≖", "\\eqcirc", !0);
s(u, f, g, "≗", "\\circeq", !0);
s(u, f, g, "≜", "\\triangleq", !0);
s(u, f, g, "∼", "\\thicksim");
s(u, f, g, "≈", "\\thickapprox");
s(u, f, g, "⫆", "\\supseteqq", !0);
s(u, f, g, "⋑", "\\Supset", !0);
s(u, f, g, "⊐", "\\sqsupset", !0);
s(u, f, g, "≽", "\\succcurlyeq", !0);
s(u, f, g, "⋟", "\\curlyeqsucc", !0);
s(u, f, g, "≿", "\\succsim", !0);
s(u, f, g, "⪸", "\\succapprox", !0);
s(u, f, g, "⊳", "\\vartriangleright");
s(u, f, g, "⊵", "\\trianglerighteq");
s(u, f, g, "⊩", "\\Vdash", !0);
s(u, f, g, "∣", "\\shortmid");
s(u, f, g, "∥", "\\shortparallel");
s(u, f, g, "≬", "\\between", !0);
s(u, f, g, "⋔", "\\pitchfork", !0);
s(u, f, g, "∝", "\\varpropto");
s(u, f, g, "◀", "\\blacktriangleleft");
s(u, f, g, "∴", "\\therefore", !0);
s(u, f, g, "∍", "\\backepsilon");
s(u, f, g, "▶", "\\blacktriangleright");
s(u, f, g, "∵", "\\because", !0);
s(u, f, g, "⋘", "\\llless");
s(u, f, g, "⋙", "\\gggtr");
s(u, f, U, "⊲", "\\lhd");
s(u, f, U, "⊳", "\\rhd");
s(u, f, g, "≂", "\\eqsim", !0);
s(u, d, g, "⋈", "\\Join");
s(u, f, g, "≑", "\\Doteq", !0);
s(u, f, U, "∔", "\\dotplus", !0);
s(u, f, U, "∖", "\\smallsetminus");
s(u, f, U, "⋒", "\\Cap", !0);
s(u, f, U, "⋓", "\\Cup", !0);
s(u, f, U, "⩞", "\\doublebarwedge", !0);
s(u, f, U, "⊟", "\\boxminus", !0);
s(u, f, U, "⊞", "\\boxplus", !0);
s(u, f, U, "⋇", "\\divideontimes", !0);
s(u, f, U, "⋉", "\\ltimes", !0);
s(u, f, U, "⋊", "\\rtimes", !0);
s(u, f, U, "⋋", "\\leftthreetimes", !0);
s(u, f, U, "⋌", "\\rightthreetimes", !0);
s(u, f, U, "⋏", "\\curlywedge", !0);
s(u, f, U, "⋎", "\\curlyvee", !0);
s(u, f, U, "⊝", "\\circleddash", !0);
s(u, f, U, "⊛", "\\circledast", !0);
s(u, f, U, "⋅", "\\centerdot");
s(u, f, U, "⊺", "\\intercal", !0);
s(u, f, U, "⋒", "\\doublecap");
s(u, f, U, "⋓", "\\doublecup");
s(u, f, U, "⊠", "\\boxtimes", !0);
s(u, f, g, "⇢", "\\dashrightarrow", !0);
s(u, f, g, "⇠", "\\dashleftarrow", !0);
s(u, f, g, "⇇", "\\leftleftarrows", !0);
s(u, f, g, "⇆", "\\leftrightarrows", !0);
s(u, f, g, "⇚", "\\Lleftarrow", !0);
s(u, f, g, "↞", "\\twoheadleftarrow", !0);
s(u, f, g, "↢", "\\leftarrowtail", !0);
s(u, f, g, "↫", "\\looparrowleft", !0);
s(u, f, g, "⇋", "\\leftrightharpoons", !0);
s(u, f, g, "↶", "\\curvearrowleft", !0);
s(u, f, g, "↺", "\\circlearrowleft", !0);
s(u, f, g, "↰", "\\Lsh", !0);
s(u, f, g, "⇈", "\\upuparrows", !0);
s(u, f, g, "↿", "\\upharpoonleft", !0);
s(u, f, g, "⇃", "\\downharpoonleft", !0);
s(u, d, g, "⊶", "\\origof", !0);
s(u, d, g, "⊷", "\\imageof", !0);
s(u, f, g, "⊸", "\\multimap", !0);
s(u, f, g, "↭", "\\leftrightsquigarrow", !0);
s(u, f, g, "⇉", "\\rightrightarrows", !0);
s(u, f, g, "⇄", "\\rightleftarrows", !0);
s(u, f, g, "↠", "\\twoheadrightarrow", !0);
s(u, f, g, "↣", "\\rightarrowtail", !0);
s(u, f, g, "↬", "\\looparrowright", !0);
s(u, f, g, "↷", "\\curvearrowright", !0);
s(u, f, g, "↻", "\\circlearrowright", !0);
s(u, f, g, "↱", "\\Rsh", !0);
s(u, f, g, "⇊", "\\downdownarrows", !0);
s(u, f, g, "↾", "\\upharpoonright", !0);
s(u, f, g, "⇂", "\\downharpoonright", !0);
s(u, f, g, "⇝", "\\rightsquigarrow", !0);
s(u, f, g, "⇝", "\\leadsto");
s(u, f, g, "⇛", "\\Rrightarrow", !0);
s(u, f, g, "↾", "\\restriction");
s(u, d, y, "‘", "`");
s(u, d, y, "$", "\\$");
s(M, d, y, "$", "\\$");
s(M, d, y, "$", "\\textdollar");
s(u, d, y, "%", "\\%");
s(M, d, y, "%", "\\%");
s(u, d, y, "_", "\\_");
s(M, d, y, "_", "\\_");
s(M, d, y, "_", "\\textunderscore");
s(u, d, y, "∠", "\\angle", !0);
s(u, d, y, "∞", "\\infty", !0);
s(u, d, y, "′", "\\prime");
s(u, d, y, "△", "\\triangle");
s(u, d, y, "Γ", "\\Gamma", !0);
s(u, d, y, "Δ", "\\Delta", !0);
s(u, d, y, "Θ", "\\Theta", !0);
s(u, d, y, "Λ", "\\Lambda", !0);
s(u, d, y, "Ξ", "\\Xi", !0);
s(u, d, y, "Π", "\\Pi", !0);
s(u, d, y, "Σ", "\\Sigma", !0);
s(u, d, y, "Υ", "\\Upsilon", !0);
s(u, d, y, "Φ", "\\Phi", !0);
s(u, d, y, "Ψ", "\\Psi", !0);
s(u, d, y, "Ω", "\\Omega", !0);
s(u, d, y, "A", "Α");
s(u, d, y, "B", "Β");
s(u, d, y, "E", "Ε");
s(u, d, y, "Z", "Ζ");
s(u, d, y, "H", "Η");
s(u, d, y, "I", "Ι");
s(u, d, y, "K", "Κ");
s(u, d, y, "M", "Μ");
s(u, d, y, "N", "Ν");
s(u, d, y, "O", "Ο");
s(u, d, y, "P", "Ρ");
s(u, d, y, "T", "Τ");
s(u, d, y, "X", "Χ");
s(u, d, y, "¬", "\\neg", !0);
s(u, d, y, "¬", "\\lnot");
s(u, d, y, "⊤", "\\top");
s(u, d, y, "⊥", "\\bot");
s(u, d, y, "∅", "\\emptyset");
s(u, f, y, "∅", "\\varnothing");
s(u, d, j, "α", "\\alpha", !0);
s(u, d, j, "β", "\\beta", !0);
s(u, d, j, "γ", "\\gamma", !0);
s(u, d, j, "δ", "\\delta", !0);
s(u, d, j, "ϵ", "\\epsilon", !0);
s(u, d, j, "ζ", "\\zeta", !0);
s(u, d, j, "η", "\\eta", !0);
s(u, d, j, "θ", "\\theta", !0);
s(u, d, j, "ι", "\\iota", !0);
s(u, d, j, "κ", "\\kappa", !0);
s(u, d, j, "λ", "\\lambda", !0);
s(u, d, j, "μ", "\\mu", !0);
s(u, d, j, "ν", "\\nu", !0);
s(u, d, j, "ξ", "\\xi", !0);
s(u, d, j, "ο", "\\omicron", !0);
s(u, d, j, "π", "\\pi", !0);
s(u, d, j, "ρ", "\\rho", !0);
s(u, d, j, "σ", "\\sigma", !0);
s(u, d, j, "τ", "\\tau", !0);
s(u, d, j, "υ", "\\upsilon", !0);
s(u, d, j, "ϕ", "\\phi", !0);
s(u, d, j, "χ", "\\chi", !0);
s(u, d, j, "ψ", "\\psi", !0);
s(u, d, j, "ω", "\\omega", !0);
s(u, d, j, "ε", "\\varepsilon", !0);
s(u, d, j, "ϑ", "\\vartheta", !0);
s(u, d, j, "ϖ", "\\varpi", !0);
s(u, d, j, "ϱ", "\\varrho", !0);
s(u, d, j, "ς", "\\varsigma", !0);
s(u, d, j, "φ", "\\varphi", !0);
s(u, d, U, "∗", "*", !0);
s(u, d, U, "+", "+");
s(u, d, U, "−", "-", !0);
s(u, d, U, "⋅", "\\cdot", !0);
s(u, d, U, "∘", "\\circ", !0);
s(u, d, U, "÷", "\\div", !0);
s(u, d, U, "±", "\\pm", !0);
s(u, d, U, "×", "\\times", !0);
s(u, d, U, "∩", "\\cap", !0);
s(u, d, U, "∪", "\\cup", !0);
s(u, d, U, "∖", "\\setminus", !0);
s(u, d, U, "∧", "\\land");
s(u, d, U, "∨", "\\lor");
s(u, d, U, "∧", "\\wedge", !0);
s(u, d, U, "∨", "\\vee", !0);
s(u, d, y, "√", "\\surd");
s(u, d, Ue, "⟨", "\\langle", !0);
s(u, d, Ue, "∣", "\\lvert");
s(u, d, Ue, "∥", "\\lVert");
s(u, d, Ce, "?", "?");
s(u, d, Ce, "!", "!");
s(u, d, Ce, "⟩", "\\rangle", !0);
s(u, d, Ce, "∣", "\\rvert");
s(u, d, Ce, "∥", "\\rVert");
s(u, d, g, "=", "=");
s(u, d, g, ":", ":");
s(u, d, g, "≈", "\\approx", !0);
s(u, d, g, "≅", "\\cong", !0);
s(u, d, g, "≥", "\\ge");
s(u, d, g, "≥", "\\geq", !0);
s(u, d, g, "←", "\\gets");
s(u, d, g, ">", "\\gt", !0);
s(u, d, g, "∈", "\\in", !0);
s(u, d, g, "", "\\@not");
s(u, d, g, "⊂", "\\subset", !0);
s(u, d, g, "⊃", "\\supset", !0);
s(u, d, g, "⊆", "\\subseteq", !0);
s(u, d, g, "⊇", "\\supseteq", !0);
s(u, f, g, "⊈", "\\nsubseteq", !0);
s(u, f, g, "⊉", "\\nsupseteq", !0);
s(u, d, g, "⊨", "\\models");
s(u, d, g, "←", "\\leftarrow", !0);
s(u, d, g, "≤", "\\le");
s(u, d, g, "≤", "\\leq", !0);
s(u, d, g, "<", "\\lt", !0);
s(u, d, g, "→", "\\rightarrow", !0);
s(u, d, g, "→", "\\to");
s(u, f, g, "≱", "\\ngeq", !0);
s(u, f, g, "≰", "\\nleq", !0);
s(u, d, gt, " ", "\\ ");
s(u, d, gt, " ", "\\space");
s(u, d, gt, " ", "\\nobreakspace");
s(M, d, gt, " ", "\\ ");
s(M, d, gt, " ", " ");
s(M, d, gt, " ", "\\space");
s(M, d, gt, " ", "\\nobreakspace");
s(u, d, gt, null, "\\nobreak");
s(u, d, gt, null, "\\allowbreak");
s(u, d, xr, ",", ",");
s(u, d, xr, ";", ";");
s(u, f, U, "⊼", "\\barwedge", !0);
s(u, f, U, "⊻", "\\veebar", !0);
s(u, d, U, "⊙", "\\odot", !0);
s(u, d, U, "⊕", "\\oplus", !0);
s(u, d, U, "⊗", "\\otimes", !0);
s(u, d, y, "∂", "\\partial", !0);
s(u, d, U, "⊘", "\\oslash", !0);
s(u, f, U, "⊚", "\\circledcirc", !0);
s(u, f, U, "⊡", "\\boxdot", !0);
s(u, d, U, "△", "\\bigtriangleup");
s(u, d, U, "▽", "\\bigtriangledown");
s(u, d, U, "†", "\\dagger");
s(u, d, U, "⋄", "\\diamond");
s(u, d, U, "⋆", "\\star");
s(u, d, U, "◃", "\\triangleleft");
s(u, d, U, "▹", "\\triangleright");
s(u, d, Ue, "{", "\\{");
s(M, d, y, "{", "\\{");
s(M, d, y, "{", "\\textbraceleft");
s(u, d, Ce, "}", "\\}");
s(M, d, y, "}", "\\}");
s(M, d, y, "}", "\\textbraceright");
s(u, d, Ue, "{", "\\lbrace");
s(u, d, Ce, "}", "\\rbrace");
s(u, d, Ue, "[", "\\lbrack", !0);
s(M, d, y, "[", "\\lbrack", !0);
s(u, d, Ce, "]", "\\rbrack", !0);
s(M, d, y, "]", "\\rbrack", !0);
s(u, d, Ue, "(", "\\lparen", !0);
s(u, d, Ce, ")", "\\rparen", !0);
s(M, d, y, "<", "\\textless", !0);
s(M, d, y, ">", "\\textgreater", !0);
s(u, d, Ue, "⌊", "\\lfloor", !0);
s(u, d, Ce, "⌋", "\\rfloor", !0);
s(u, d, Ue, "⌈", "\\lceil", !0);
s(u, d, Ce, "⌉", "\\rceil", !0);
s(u, d, y, "\\", "\\backslash");
s(u, d, y, "∣", "|");
s(u, d, y, "∣", "\\vert");
s(M, d, y, "|", "\\textbar", !0);
s(u, d, y, "∥", "\\|");
s(u, d, y, "∥", "\\Vert");
s(M, d, y, "∥", "\\textbardbl");
s(M, d, y, "~", "\\textasciitilde");
s(M, d, y, "\\", "\\textbackslash");
s(M, d, y, "^", "\\textasciicircum");
s(u, d, g, "↑", "\\uparrow", !0);
s(u, d, g, "⇑", "\\Uparrow", !0);
s(u, d, g, "↓", "\\downarrow", !0);
s(u, d, g, "⇓", "\\Downarrow", !0);
s(u, d, g, "↕", "\\updownarrow", !0);
s(u, d, g, "⇕", "\\Updownarrow", !0);
s(u, d, xe, "∐", "\\coprod");
s(u, d, xe, "⋁", "\\bigvee");
s(u, d, xe, "⋀", "\\bigwedge");
s(u, d, xe, "⨄", "\\biguplus");
s(u, d, xe, "⋂", "\\bigcap");
s(u, d, xe, "⋃", "\\bigcup");
s(u, d, xe, "∫", "\\int");
s(u, d, xe, "∫", "\\intop");
s(u, d, xe, "∬", "\\iint");
s(u, d, xe, "∭", "\\iiint");
s(u, d, xe, "∏", "\\prod");
s(u, d, xe, "∑", "\\sum");
s(u, d, xe, "⨂", "\\bigotimes");
s(u, d, xe, "⨁", "\\bigoplus");
s(u, d, xe, "⨀", "\\bigodot");
s(u, d, xe, "∮", "\\oint");
s(u, d, xe, "∯", "\\oiint");
s(u, d, xe, "∰", "\\oiiint");
s(u, d, xe, "⨆", "\\bigsqcup");
s(u, d, xe, "∫", "\\smallint");
s(M, d, Bt, "…", "\\textellipsis");
s(u, d, Bt, "…", "\\mathellipsis");
s(M, d, Bt, "…", "\\ldots", !0);
s(u, d, Bt, "…", "\\ldots", !0);
s(u, d, Bt, "⋯", "\\@cdots", !0);
s(u, d, Bt, "⋱", "\\ddots", !0);
s(u, d, y, "⋮", "\\varvdots");
s(u, d, pe, "ˊ", "\\acute");
s(u, d, pe, "ˋ", "\\grave");
s(u, d, pe, "¨", "\\ddot");
s(u, d, pe, "~", "\\tilde");
s(u, d, pe, "ˉ", "\\bar");
s(u, d, pe, "˘", "\\breve");
s(u, d, pe, "ˇ", "\\check");
s(u, d, pe, "^", "\\hat");
s(u, d, pe, "⃗", "\\vec");
s(u, d, pe, "˙", "\\dot");
s(u, d, pe, "˚", "\\mathring");
s(u, d, j, "", "\\@imath");
s(u, d, j, "", "\\@jmath");
s(u, d, y, "ı", "ı");
s(u, d, y, "ȷ", "ȷ");
s(M, d, y, "ı", "\\i", !0);
s(M, d, y, "ȷ", "\\j", !0);
s(M, d, y, "ß", "\\ss", !0);
s(M, d, y, "æ", "\\ae", !0);
s(M, d, y, "œ", "\\oe", !0);
s(M, d, y, "ø", "\\o", !0);
s(M, d, y, "Æ", "\\AE", !0);
s(M, d, y, "Œ", "\\OE", !0);
s(M, d, y, "Ø", "\\O", !0);
s(M, d, pe, "ˊ", "\\'");
s(M, d, pe, "ˋ", "\\`");
s(M, d, pe, "ˆ", "\\^");
s(M, d, pe, "˜", "\\~");
s(M, d, pe, "ˉ", "\\=");
s(M, d, pe, "˘", "\\u");
s(M, d, pe, "˙", "\\.");
s(M, d, pe, "¸", "\\c");
s(M, d, pe, "˚", "\\r");
s(M, d, pe, "ˇ", "\\v");
s(M, d, pe, "¨", '\\"');
s(M, d, pe, "˝", "\\H");
s(M, d, pe, "◯", "\\textcircled");
var Ma = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
s(M, d, y, "–", "--", !0);
s(M, d, y, "–", "\\textendash");
s(M, d, y, "—", "---", !0);
s(M, d, y, "—", "\\textemdash");
s(M, d, y, "‘", "`", !0);
s(M, d, y, "‘", "\\textquoteleft");
s(M, d, y, "’", "'", !0);
s(M, d, y, "’", "\\textquoteright");
s(M, d, y, "“", "``", !0);
s(M, d, y, "“", "\\textquotedblleft");
s(M, d, y, "”", "''", !0);
s(M, d, y, "”", "\\textquotedblright");
s(u, d, y, "°", "\\degree", !0);
s(M, d, y, "°", "\\degree");
s(M, d, y, "°", "\\textdegree", !0);
s(u, d, y, "£", "\\pounds");
s(u, d, y, "£", "\\mathsterling", !0);
s(M, d, y, "£", "\\pounds");
s(M, d, y, "£", "\\textsterling", !0);
s(u, f, y, "✠", "\\maltese");
s(M, f, y, "✠", "\\maltese");
var G0 = '0123456789/@."';
for (var Cr = 0; Cr < G0.length; Cr++) {
  var Y0 = G0.charAt(Cr);
  s(u, d, y, Y0, Y0);
}
var V0 = '0123456789!@*()-=+";:?/.,';
for (var Mr = 0; Mr < V0.length; Mr++) {
  var X0 = V0.charAt(Mr);
  s(M, d, y, X0, X0);
}
var vr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Dr = 0; Dr < vr.length; Dr++) {
  var rr = vr.charAt(Dr);
  s(u, d, j, rr, rr), s(M, d, y, rr, rr);
}
s(u, f, y, "C", "ℂ");
s(M, f, y, "C", "ℂ");
s(u, f, y, "H", "ℍ");
s(M, f, y, "H", "ℍ");
s(u, f, y, "N", "ℕ");
s(M, f, y, "N", "ℕ");
s(u, f, y, "P", "ℙ");
s(M, f, y, "P", "ℙ");
s(u, f, y, "Q", "ℚ");
s(M, f, y, "Q", "ℚ");
s(u, f, y, "R", "ℝ");
s(M, f, y, "R", "ℝ");
s(u, f, y, "Z", "ℤ");
s(M, f, y, "Z", "ℤ");
s(u, d, j, "h", "ℎ");
s(M, d, j, "h", "ℎ");
var Z = "";
for (var De = 0; De < vr.length; De++) {
  var we = vr.charAt(De);
  Z = String.fromCharCode(55349, 56320 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), Z = String.fromCharCode(55349, 56372 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), Z = String.fromCharCode(55349, 56424 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), Z = String.fromCharCode(55349, 56580 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), Z = String.fromCharCode(55349, 56736 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), Z = String.fromCharCode(55349, 56788 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), Z = String.fromCharCode(55349, 56840 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), Z = String.fromCharCode(55349, 56944 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), De < 26 && (Z = String.fromCharCode(55349, 56632 + De), s(u, d, j, we, Z), s(M, d, y, we, Z), Z = String.fromCharCode(55349, 56476 + De), s(u, d, j, we, Z), s(M, d, y, we, Z));
}
Z = String.fromCharCode(55349, 56668);
s(u, d, j, "k", Z);
s(M, d, y, "k", Z);
for (var It = 0; It < 10; It++) {
  var yt = It.toString();
  Z = String.fromCharCode(55349, 57294 + It), s(u, d, j, yt, Z), s(M, d, y, yt, Z), Z = String.fromCharCode(55349, 57314 + It), s(u, d, j, yt, Z), s(M, d, y, yt, Z), Z = String.fromCharCode(55349, 57324 + It), s(u, d, j, yt, Z), s(M, d, y, yt, Z), Z = String.fromCharCode(55349, 57334 + It), s(u, d, j, yt, Z), s(M, d, y, yt, Z);
}
var Qr = "ÐÞþ";
for (var Lr = 0; Lr < Qr.length; Lr++) {
  var ar = Qr.charAt(Lr);
  s(u, d, j, ar, ar), s(M, d, y, ar, ar);
}
var nr = [
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
], j0 = [
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
], rs = function(e, t) {
  var r = e.charCodeAt(0), n = e.charCodeAt(1), i = (r - 55296) * 1024 + (n - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var o = Math.floor((i - 119808) / 26);
    return [nr[o][2], nr[o][l]];
  } else if (120782 <= i && i <= 120831) {
    var c = Math.floor((i - 120782) / 10);
    return [j0[c][2], j0[c][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [nr[0][2], nr[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new L("Unsupported character: " + e);
  }
}, Er = function(e, t, r) {
  return ce[r][e] && ce[r][e].replace && (e = ce[r][e].replace), {
    value: e,
    metrics: c0(e, t, r)
  };
}, Ze = function(e, t, r, n, i) {
  var l = Er(e, t, r), o = l.metrics;
  e = l.value;
  var c;
  if (o) {
    var p = o.italic;
    (r === "text" || n && n.font === "mathit") && (p = 0), c = new Ve(e, o.height, o.depth, p, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), c = new Ve(e, 0, 0, 0, 0, 0, i);
  if (n) {
    c.maxFontSize = n.sizeMultiplier, n.style.isTight() && c.classes.push("mtight");
    var m = n.getColor();
    m && (c.style.color = m);
  }
  return c;
}, as = function(e, t, r, n) {
  return n === void 0 && (n = []), r.font === "boldsymbol" && Er(e, "Main-Bold", t).metrics ? Ze(e, "Main-Bold", t, r, n.concat(["mathbf"])) : e === "\\" || ce[t][e].font === "main" ? Ze(e, "Main-Regular", t, r, n) : Ze(e, "AMS-Regular", t, r, n.concat(["amsrm"]));
}, ns = function(e, t, r, n, i) {
  return i !== "textord" && Er(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, is = function(e, t, r) {
  var n = e.mode, i = e.text, l = ["mord"], o = n === "math" || n === "text" && t.font, c = o ? t.font : t.fontFamily;
  if (i.charCodeAt(0) === 55349) {
    var [p, m] = rs(i, n);
    return Ze(i, p, n, t, l.concat(m));
  } else if (c) {
    var v, x;
    if (c === "boldsymbol") {
      var b = ns(i, n, t, l, r);
      v = b.fontName, x = [b.fontClass];
    } else
      o ? (v = za[c].fontName, x = [c]) : (v = ir(c, t.fontWeight, t.fontShape), x = [c, t.fontWeight, t.fontShape]);
    if (Er(i, v, n).metrics)
      return Ze(i, v, n, t, l.concat(x));
    if (Ma.hasOwnProperty(i) && v.slice(0, 10) === "Typewriter") {
      for (var O = [], S = 0; S < i.length; S++)
        O.push(Ze(i[S], v, n, t, l.concat(x)));
      return La(O);
    }
  }
  if (r === "mathord")
    return Ze(i, "Math-Italic", n, t, l.concat(["mathnormal"]));
  if (r === "textord") {
    var I = ce[n][i] && ce[n][i].font;
    if (I === "ams") {
      var T = ir("amsrm", t.fontWeight, t.fontShape);
      return Ze(i, T, n, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (I === "main" || !I) {
      var w = ir("textrm", t.fontWeight, t.fontShape);
      return Ze(i, w, n, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var E = ir(I, t.fontWeight, t.fontShape);
      return Ze(i, E, n, t, l.concat(E, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, ss = (a, e) => {
  if (xt(a.classes) !== xt(e.classes) || a.skew !== e.skew || a.maxFontSize !== e.maxFontSize)
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
}, ls = (a) => {
  for (var e = 0; e < a.length - 1; e++) {
    var t = a[e], r = a[e + 1];
    t instanceof Ve && r instanceof Ve && ss(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, a.splice(e + 1, 1), e--);
  }
  return a;
}, h0 = function(e) {
  for (var t = 0, r = 0, n = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > r && (r = l.depth), l.maxFontSize > n && (n = l.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = n;
}, Le = function(e, t, r, n) {
  var i = new Kt(e, t, r, n);
  return h0(i), i;
}, Da = (a, e, t, r) => new Kt(a, e, t, r), os = function(e, t, r) {
  var n = Le([e], [], t);
  return n.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = B(n.height), n.maxFontSize = 1, n;
}, us = function(e, t, r, n) {
  var i = new d0(e, t, r, n);
  return h0(i), i;
}, La = function(e) {
  var t = new jt(e);
  return h0(t), t;
}, cs = function(e, t) {
  return e instanceof jt ? Le([], [e], t) : e;
}, ds = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, i = n, l = 1; l < t.length; l++) {
      var o = -t[l].shift - i - t[l].elem.depth, c = o - (t[l - 1].elem.height + t[l - 1].elem.depth);
      i = i + o, r.push({
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
    for (var m = e.positionData, v = 0; v < e.children.length; v++) {
      var x = e.children[v];
      m -= x.type === "kern" ? x.size : x.elem.height + x.elem.depth;
    }
    p = m;
  } else if (e.positionType === "bottom")
    p = -e.positionData;
  else {
    var b = e.children[0];
    if (b.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      p = -b.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      p = -b.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: p
  };
}, hs = function(e, t) {
  for (var {
    children: r,
    depth: n
  } = ds(e), i = 0, l = 0; l < r.length; l++) {
    var o = r[l];
    if (o.type === "elem") {
      var c = o.elem;
      i = Math.max(i, c.maxFontSize, c.height);
    }
  }
  i += 2;
  var p = Le(["pstrut"], []);
  p.style.height = B(i);
  for (var m = [], v = n, x = n, b = n, O = 0; O < r.length; O++) {
    var S = r[O];
    if (S.type === "kern")
      b += S.size;
    else {
      var I = S.elem, T = S.wrapperClasses || [], w = S.wrapperStyle || {}, E = Le(T, [p, I], void 0, w);
      E.style.top = B(-i - b - I.depth), S.marginLeft && (E.style.marginLeft = S.marginLeft), S.marginRight && (E.style.marginRight = S.marginRight), m.push(E), b += I.height + I.depth;
    }
    v = Math.min(v, b), x = Math.max(x, b);
  }
  var A = Le(["vlist"], m);
  A.style.height = B(x);
  var R;
  if (v < 0) {
    var N = Le([], []), C = Le(["vlist"], [N]);
    C.style.height = B(-v);
    var F = Le(["vlist-s"], [new Ve("​")]);
    R = [Le(["vlist-r"], [A, F]), Le(["vlist-r"], [C])];
  } else
    R = [Le(["vlist-r"], [A])];
  var z = Le(["vlist-t"], R);
  return R.length === 2 && z.classes.push("vlist-t2"), z.height = x, z.depth = -v, z;
}, ps = (a, e) => {
  var t = Le(["mspace"], [], e), r = ge(a, e);
  return t.style.marginRight = B(r), t;
}, ir = function(e, t, r) {
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
}, za = {
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
}, Pa = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, ms = function(e, t) {
  var [r, n, i] = Pa[e], l = new Et(r), o = new pt([l], {
    width: B(n),
    height: B(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + B(n),
    viewBox: "0 0 " + 1e3 * n + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), c = Da(["overlay"], [o], t);
  return c.height = i, c.style.height = B(i), c.style.width = B(n), c;
}, k = {
  fontMap: za,
  makeSymbol: Ze,
  mathsym: as,
  makeSpan: Le,
  makeSvgSpan: Da,
  makeLineSpan: os,
  makeAnchor: us,
  makeFragment: La,
  wrapFragment: cs,
  makeVList: hs,
  makeOrd: is,
  makeGlue: ps,
  staticSvg: ms,
  svgData: Pa,
  tryCombineChars: ls
}, me = {
  number: 3,
  unit: "mu"
}, Rt = {
  number: 4,
  unit: "mu"
}, lt = {
  number: 5,
  unit: "mu"
}, fs = {
  mord: {
    mop: me,
    mbin: Rt,
    mrel: lt,
    minner: me
  },
  mop: {
    mord: me,
    mop: me,
    mrel: lt,
    minner: me
  },
  mbin: {
    mord: Rt,
    mop: Rt,
    mopen: Rt,
    minner: Rt
  },
  mrel: {
    mord: lt,
    mop: lt,
    mopen: lt,
    minner: lt
  },
  mopen: {},
  mclose: {
    mop: me,
    mbin: Rt,
    mrel: lt,
    minner: me
  },
  mpunct: {
    mord: me,
    mop: me,
    mrel: lt,
    mopen: me,
    mclose: me,
    mpunct: me,
    minner: me
  },
  minner: {
    mord: me,
    mop: me,
    mbin: Rt,
    mrel: lt,
    mopen: me,
    mpunct: me,
    minner: me
  }
}, gs = {
  mord: {
    mop: me
  },
  mop: {
    mord: me,
    mop: me
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: me
  },
  mpunct: {},
  minner: {
    mop: me
  }
}, Ba = {}, br = {}, yr = {};
function $(a) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: n,
    htmlBuilder: i,
    mathmlBuilder: l
  } = a, o = {
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
    Ba[t[c]] = o;
  e && (i && (br[e] = i), l && (yr[e] = l));
}
function Ot(a) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = a;
  $({
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
var wr = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, be = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, mt = k.makeSpan, vs = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], bs = ["rightmost", "mrel", "mclose", "mpunct"], ys = {
  display: V.DISPLAY,
  text: V.TEXT,
  script: V.SCRIPT,
  scriptscript: V.SCRIPTSCRIPT
}, ws = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, ke = function(e, t, r, n) {
  n === void 0 && (n = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var o = re(e[l], t);
    if (o instanceof jt) {
      var c = o.children;
      i.push(...c);
    } else
      i.push(o);
  }
  if (k.tryCombineChars(i), !r)
    return i;
  var p = t;
  if (e.length === 1) {
    var m = e[0];
    m.type === "sizing" ? p = t.havingSize(m.size) : m.type === "styling" && (p = t.havingStyle(ys[m.style]));
  }
  var v = mt([n[0] || "leftmost"], [], t), x = mt([n[1] || "rightmost"], [], t), b = r === "root";
  return K0(i, (O, S) => {
    var I = S.classes[0], T = O.classes[0];
    I === "mbin" && W.contains(bs, T) ? S.classes[0] = "mord" : T === "mbin" && W.contains(vs, I) && (O.classes[0] = "mord");
  }, {
    node: v
  }, x, b), K0(i, (O, S) => {
    var I = e0(S), T = e0(O), w = I && T ? O.hasClass("mtight") ? gs[I][T] : fs[I][T] : null;
    if (w)
      return k.makeGlue(w, p);
  }, {
    node: v
  }, x, b), i;
}, K0 = function a(e, t, r, n, i) {
  n && e.push(n);
  for (var l = 0; l < e.length; l++) {
    var o = e[l], c = Fa(o);
    if (c) {
      a(c.children, t, r, null, i);
      continue;
    }
    var p = !o.hasClass("mspace");
    if (p) {
      var m = t(o, r.node);
      m && (r.insertAfter ? r.insertAfter(m) : (e.unshift(m), l++));
    }
    p ? r.node = o : i && o.hasClass("newline") && (r.node = mt(["leftmost"])), r.insertAfter = ((v) => (x) => {
      e.splice(v + 1, 0, x), l++;
    })(l);
  }
  n && e.pop();
}, Fa = function(e) {
  return e instanceof jt || e instanceof d0 || e instanceof Kt && e.hasClass("enclosing") ? e : null;
}, xs = function a(e, t) {
  var r = Fa(e);
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
}, e0 = function(e, t) {
  return e ? (t && (e = xs(e, t)), ws[e.classes[0]] || null) : null;
}, Vt = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return mt(t.concat(r));
}, re = function(e, t, r) {
  if (!e)
    return mt();
  if (br[e.type]) {
    var n = br[e.type](e, t);
    if (r && t.size !== r.size) {
      n = mt(t.sizingClasses(r), [n], t);
      var i = t.sizeMultiplier / r.sizeMultiplier;
      n.height *= i, n.depth *= i;
    }
    return n;
  } else
    throw new L("Got group of unknown type: '" + e.type + "'");
};
function sr(a, e) {
  var t = mt(["base"], a, e), r = mt(["strut"]);
  return r.style.height = B(t.height + t.depth), t.depth && (r.style.verticalAlign = B(-t.depth)), t.children.unshift(r), t;
}
function t0(a, e) {
  var t = null;
  a.length === 1 && a[0].type === "tag" && (t = a[0].tag, a = a[0].body);
  var r = ke(a, e, "root"), n;
  r.length === 2 && r[1].hasClass("tag") && (n = r.pop());
  for (var i = [], l = [], o = 0; o < r.length; o++)
    if (l.push(r[o]), r[o].hasClass("mbin") || r[o].hasClass("mrel") || r[o].hasClass("allowbreak")) {
      for (var c = !1; o < r.length - 1 && r[o + 1].hasClass("mspace") && !r[o + 1].hasClass("newline"); )
        o++, l.push(r[o]), r[o].hasClass("nobreak") && (c = !0);
      c || (i.push(sr(l, e)), l = []);
    } else
      r[o].hasClass("newline") && (l.pop(), l.length > 0 && (i.push(sr(l, e)), l = []), i.push(r[o]));
  l.length > 0 && i.push(sr(l, e));
  var p;
  t ? (p = sr(ke(t, e, !0)), p.classes = ["tag"], i.push(p)) : n && i.push(n);
  var m = mt(["katex-html"], i);
  if (m.setAttribute("aria-hidden", "true"), p) {
    var v = p.children[0];
    v.style.height = B(m.height + m.depth), m.depth && (v.style.verticalAlign = B(-m.depth));
  }
  return m;
}
function $a(a) {
  return new jt(a);
}
class He {
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
    this.classes.length > 0 && (e.className = xt(this.classes));
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += W.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + W.escape(xt(this.classes)) + '"'), e += ">";
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
class Ht {
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
    return W.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text iteself).
   */
  toText() {
    return this.text;
  }
}
class Es {
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
    return e.setAttribute("width", B(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + B(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var D = {
  MathNode: He,
  TextNode: Ht,
  SpaceNode: Es,
  newDocumentFragment: $a
}, Xe = function(e, t, r) {
  return ce[t][e] && ce[t][e].replace && e.charCodeAt(0) !== 55349 && !(Ma.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = ce[t][e].replace), new D.TextNode(e);
}, p0 = function(e) {
  return e.length === 1 ? e[0] : new D.MathNode("mrow", e);
}, m0 = function(e, t) {
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
  if (W.contains(["\\imath", "\\jmath"], i))
    return null;
  ce[n][i] && ce[n][i].replace && (i = ce[n][i].replace);
  var l = k.fontMap[r].fontName;
  return c0(i, l, n) ? k.fontMap[r].variant : null;
}, ze = function(e, t, r) {
  if (e.length === 1) {
    var n = le(e[0], t);
    return r && n instanceof He && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n];
  }
  for (var i = [], l, o = 0; o < e.length; o++) {
    var c = le(e[o], t);
    if (c instanceof He && l instanceof He) {
      if (c.type === "mtext" && l.type === "mtext" && c.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && l.type === "mn") {
        l.children.push(...c.children);
        continue;
      } else if (c.type === "mi" && c.children.length === 1 && l.type === "mn") {
        var p = c.children[0];
        if (p instanceof Ht && p.text === ".") {
          l.children.push(...c.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var m = l.children[0];
        if (m instanceof Ht && m.text === "̸" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
          var v = c.children[0];
          v instanceof Ht && v.text.length > 0 && (v.text = v.text.slice(0, 1) + "̸" + v.text.slice(1), i.pop());
        }
      }
    }
    i.push(c), l = c;
  }
  return i;
}, St = function(e, t, r) {
  return p0(ze(e, t, r));
}, le = function(e, t) {
  if (!e)
    return new D.MathNode("mrow");
  if (yr[e.type]) {
    var r = yr[e.type](e, t);
    return r;
  } else
    throw new L("Got group of unknown type: '" + e.type + "'");
};
function W0(a, e, t, r, n) {
  var i = ze(a, t), l;
  i.length === 1 && i[0] instanceof He && W.contains(["mrow", "mtable"], i[0].type) ? l = i[0] : l = new D.MathNode("mrow", i);
  var o = new D.MathNode("annotation", [new D.TextNode(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var c = new D.MathNode("semantics", [l, o]), p = new D.MathNode("math", [c]);
  p.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && p.setAttribute("display", "block");
  var m = n ? "katex" : "katex-mathml";
  return k.makeSpan([m], [p]);
}
var Ua = function(e) {
  return new ct({
    style: e.displayMode ? V.DISPLAY : V.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, qa = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = k.makeSpan(r, [e]);
  }
  return e;
}, Ss = function(e, t, r) {
  var n = Ua(r), i;
  if (r.output === "mathml")
    return W0(e, t, n, r.displayMode, !0);
  if (r.output === "html") {
    var l = t0(e, n);
    i = k.makeSpan(["katex"], [l]);
  } else {
    var o = W0(e, t, n, r.displayMode, !1), c = t0(e, n);
    i = k.makeSpan(["katex"], [o, c]);
  }
  return qa(i, r);
}, ks = function(e, t, r) {
  var n = Ua(r), i = t0(e, n), l = k.makeSpan(["katex"], [i]);
  return qa(l, r);
}, Ts = {
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
}, As = function(e) {
  var t = new D.MathNode("mo", [new D.TextNode(Ts[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Is = {
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
}, Rs = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Ns = function(e, t) {
  function r() {
    var o = 4e5, c = e.label.slice(1);
    if (W.contains(["widehat", "widecheck", "widetilde", "utilde"], c)) {
      var p = e, m = Rs(p.base), v, x, b;
      if (m > 5)
        c === "widehat" || c === "widecheck" ? (v = 420, o = 2364, b = 0.42, x = c + "4") : (v = 312, o = 2340, b = 0.34, x = "tilde4");
      else {
        var O = [1, 1, 2, 2, 3, 3][m];
        c === "widehat" || c === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][O], v = [0, 239, 300, 360, 420][O], b = [0, 0.24, 0.3, 0.3, 0.36, 0.42][O], x = c + O) : (o = [0, 600, 1033, 2339, 2340][O], v = [0, 260, 286, 306, 312][O], b = [0, 0.26, 0.286, 0.3, 0.306, 0.34][O], x = "tilde" + O);
      }
      var S = new Et(x), I = new pt([S], {
        width: "100%",
        height: B(b),
        viewBox: "0 0 " + o + " " + v,
        preserveAspectRatio: "none"
      });
      return {
        span: k.makeSvgSpan([], [I], t),
        minWidth: 0,
        height: b
      };
    } else {
      var T = [], w = Is[c], [E, A, R] = w, N = R / 1e3, C = E.length, F, z;
      if (C === 1) {
        var ae = w[3];
        F = ["hide-tail"], z = [ae];
      } else if (C === 2)
        F = ["halfarrow-left", "halfarrow-right"], z = ["xMinYMin", "xMaxYMin"];
      else if (C === 3)
        F = ["brace-left", "brace-center", "brace-right"], z = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + C + " children.");
      for (var ee = 0; ee < C; ee++) {
        var te = new Et(E[ee]), Ae = new pt([te], {
          width: "400em",
          height: B(N),
          viewBox: "0 0 " + o + " " + R,
          preserveAspectRatio: z[ee] + " slice"
        }), ve = k.makeSvgSpan([F[ee]], [Ae], t);
        if (C === 1)
          return {
            span: ve,
            minWidth: A,
            height: N
          };
        ve.style.height = B(N), T.push(ve);
      }
      return {
        span: k.makeSpan(["stretchy"], T, t),
        minWidth: A,
        height: N
      };
    }
  }
  var {
    span: n,
    minWidth: i,
    height: l
  } = r();
  return n.height = l, n.style.height = B(l), i > 0 && (n.style.minWidth = B(i)), n;
}, _s = function(e, t, r, n, i) {
  var l, o = e.height + e.depth + r + n;
  if (/fbox|color|angl/.test(t)) {
    if (l = k.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var c = i.color && i.getColor();
      c && (l.style.borderColor = c);
    }
  } else {
    var p = [];
    /^[bx]cancel$/.test(t) && p.push(new Jr({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && p.push(new Jr({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var m = new pt(p, {
      width: "100%",
      height: B(o)
    });
    l = k.makeSvgSpan([], [m], i);
  }
  return l.height = o, l.style.height = B(o), l;
}, ft = {
  encloseSpan: _s,
  mathMLnode: As,
  svgSpan: Ns
};
function Q(a, e) {
  if (!a || a.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (a ? "node of type " + a.type : String(a)));
  return a;
}
function f0(a) {
  var e = Sr(a);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (a ? "node of type " + a.type : String(a)));
  return e;
}
function Sr(a) {
  return a && (a.type === "atom" || ts.hasOwnProperty(a.type)) ? a : null;
}
var g0 = (a, e) => {
  var t, r, n;
  a && a.type === "supsub" ? (r = Q(a.base, "accent"), t = r.base, a.base = t, n = Qi(re(a, e)), a.base = r) : (r = Q(a, "accent"), t = r.base);
  var i = re(t, e.havingCrampedStyle()), l = r.isShifty && W.isCharacterBox(t), o = 0;
  if (l) {
    var c = W.getBaseElem(t), p = re(c, e.havingCrampedStyle());
    o = H0(p).skew;
  }
  var m = r.label === "\\c", v = m ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), x;
  if (r.isStretchy)
    x = ft.svgSpan(r, e), x = k.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: x,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + B(2 * o) + ")",
          marginLeft: B(2 * o)
        } : void 0
      }]
    }, e);
  else {
    var b, O;
    r.label === "\\vec" ? (b = k.staticSvg("vec", e), O = k.svgData.vec[1]) : (b = k.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), b = H0(b), b.italic = 0, O = b.width, m && (v += b.depth)), x = k.makeSpan(["accent-body"], [b]);
    var S = r.label === "\\textcircled";
    S && (x.classes.push("accent-full"), v = i.height);
    var I = o;
    S || (I -= O / 2), x.style.left = B(I), r.label === "\\textcircled" && (x.style.top = ".2em"), x = k.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -v
      }, {
        type: "elem",
        elem: x
      }]
    }, e);
  }
  var T = k.makeSpan(["mord", "accent"], [x], e);
  return n ? (n.children[0] = T, n.height = Math.max(T.height, n.height), n.classes[0] = "mord", n) : T;
}, Ha = (a, e) => {
  var t = a.isStretchy ? ft.mathMLnode(a.label) : new D.MathNode("mo", [Xe(a.label, a.mode)]), r = new D.MathNode("mover", [le(a.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, Os = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((a) => "\\" + a).join("|"));
$({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var t = wr(e[0]), r = !Os.test(a.funcName), n = !r || a.funcName === "\\widehat" || a.funcName === "\\widetilde" || a.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: a.parser.mode,
      label: a.funcName,
      isStretchy: r,
      isShifty: n,
      base: t
    };
  },
  htmlBuilder: g0,
  mathmlBuilder: Ha
});
$({
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
  htmlBuilder: g0,
  mathmlBuilder: Ha
});
$({
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
    var t = re(a.base, e), r = ft.svgSpan(a, e), n = a.label === "\\utilde" ? 0.12 : 0, i = k.makeVList({
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
    return k.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ft.mathMLnode(a.label), r = new D.MathNode("munder", [le(a.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var lr = (a) => {
  var e = new D.MathNode("mpadded", a ? [a] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
$({
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
    var t = e.style, r = e.havingStyle(t.sup()), n = k.wrapFragment(re(a.body, r, e), e), i = a.label.slice(0, 2) === "\\x" ? "x" : "cd";
    n.classes.push(i + "-arrow-pad");
    var l;
    a.below && (r = e.havingStyle(t.sub()), l = k.wrapFragment(re(a.below, r, e), e), l.classes.push(i + "-arrow-pad"));
    var o = ft.svgSpan(a, e), c = -e.fontMetrics().axisHeight + 0.5 * o.height, p = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (n.depth > 0.25 || a.label === "\\xleftequilibrium") && (p -= n.depth);
    var m;
    if (l) {
      var v = -e.fontMetrics().axisHeight + l.height + 0.5 * o.height + 0.111;
      m = k.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: p
        }, {
          type: "elem",
          elem: o,
          shift: c
        }, {
          type: "elem",
          elem: l,
          shift: v
        }]
      }, e);
    } else
      m = k.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: p
        }, {
          type: "elem",
          elem: o,
          shift: c
        }]
      }, e);
    return m.children[0].children[0].children[1].classes.push("svg-align"), k.makeSpan(["mrel", "x-arrow"], [m], e);
  },
  mathmlBuilder(a, e) {
    var t = ft.mathMLnode(a.label);
    t.setAttribute("minsize", a.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (a.body) {
      var n = lr(le(a.body, e));
      if (a.below) {
        var i = lr(le(a.below, e));
        r = new D.MathNode("munderover", [t, i, n]);
      } else
        r = new D.MathNode("mover", [t, n]);
    } else if (a.below) {
      var l = lr(le(a.below, e));
      r = new D.MathNode("munder", [t, l]);
    } else
      r = lr(), r = new D.MathNode("mover", [t, r]);
    return r;
  }
});
var Cs = k.makeSpan;
function Ga(a, e) {
  var t = ke(a.body, e, !0);
  return Cs([a.mclass], t, e);
}
function Ya(a, e) {
  var t, r = ze(a.body, e);
  return a.mclass === "minner" ? t = new D.MathNode("mpadded", r) : a.mclass === "mord" ? a.isCharacterBox ? (t = r[0], t.type = "mi") : t = new D.MathNode("mi", r) : (a.isCharacterBox ? (t = r[0], t.type = "mo") : t = new D.MathNode("mo", r), a.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : a.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : a.mclass === "mopen" || a.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : a.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
$({
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
      body: be(n),
      isCharacterBox: W.isCharacterBox(n)
    };
  },
  htmlBuilder: Ga,
  mathmlBuilder: Ya
});
var kr = (a) => {
  var e = a.type === "ordgroup" && a.body.length ? a.body[0] : a;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
$({
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
      mclass: kr(e[0]),
      body: be(e[1]),
      isCharacterBox: W.isCharacterBox(e[1])
    };
  }
});
$({
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
    r !== "\\stackrel" ? l = kr(n) : l = "mrel";
    var o = {
      type: "op",
      mode: n.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: be(n)
    }, c = {
      type: "supsub",
      mode: i.mode,
      base: o,
      sup: r === "\\underset" ? null : i,
      sub: r === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [c],
      isCharacterBox: W.isCharacterBox(c)
    };
  },
  htmlBuilder: Ga,
  mathmlBuilder: Ya
});
$({
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
      mclass: kr(e[0]),
      body: be(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = ke(a.body, e, !0), r = k.makeSpan([a.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(a, e) {
    var t = ze(a.body, e), r = new D.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var Ms = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Z0 = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), J0 = (a) => a.type === "textord" && a.text === "@", Ds = (a, e) => (a.type === "mathord" || a.type === "atom") && a.text === e;
function Ls(a, e, t) {
  var r = Ms[a];
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
      }, l = t.callFunction("\\Big", [i], []), o = t.callFunction("\\\\cdright", [e[1]], []), c = {
        type: "ordgroup",
        mode: "math",
        body: [n, l, o]
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
function zs(a) {
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
    for (var l = e[i], o = Z0(), c = 0; c < l.length; c++)
      if (!J0(l[c]))
        o.body.push(l[c]);
      else {
        r.push(o), c += 1;
        var p = f0(l[c]).text, m = new Array(2);
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
            for (var v = 0; v < 2; v++) {
              for (var x = !0, b = c + 1; b < l.length; b++) {
                if (Ds(l[b], p)) {
                  x = !1, c = b;
                  break;
                }
                if (J0(l[b]))
                  throw new L("Missing a " + p + " character to complete a CD arrow.", l[b]);
                m[v].body.push(l[b]);
              }
              if (x)
                throw new L("Missing a " + p + " character to complete a CD arrow.", l[c]);
            }
          else
            throw new L('Expected one of "<>AV=|." after @', l[c]);
        var O = Ls(p, m, a), S = {
          type: "styling",
          body: [O],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(S), o = Z0();
      }
    i % 2 === 0 ? r.push(o) : r.shift(), r = [], n.push(r);
  }
  a.gullet.endGroup(), a.gullet.endGroup();
  var I = new Array(n[0].length).fill({
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
    cols: I,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(n.length + 1).fill([])
  };
}
$({
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
    var t = e.havingStyle(e.style.sup()), r = k.wrapFragment(re(a.label, t, e), e);
    return r.classes.push("cd-label-" + a.side), r.style.bottom = B(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(a, e) {
    var t = new D.MathNode("mrow", [le(a.label, e)]);
    return t = new D.MathNode("mpadded", [t]), t.setAttribute("width", "0"), a.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new D.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
$({
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
    var t = k.wrapFragment(re(a.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(a, e) {
    return new D.MathNode("mrow", [le(a.fragment, e)]);
  }
});
$({
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
      var o = Q(n[l], "textord");
      i += o.text;
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
var Va = (a, e) => {
  var t = ke(a.body, e.withColor(a.color), !1);
  return k.makeFragment(t);
}, Xa = (a, e) => {
  var t = ze(a.body, e.withColor(a.color)), r = new D.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", a.color), r;
};
$({
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
      body: be(n)
    };
  },
  htmlBuilder: Va,
  mathmlBuilder: Xa
});
$({
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
  htmlBuilder: Va,
  mathmlBuilder: Xa
});
$({
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
    var t = k.makeSpan(["mspace"], [], e);
    return a.newLine && (t.classes.push("newline"), a.size && (t.style.marginTop = B(ge(a.size, e)))), t;
  },
  mathmlBuilder(a, e) {
    var t = new D.MathNode("mspace");
    return a.newLine && (t.setAttribute("linebreak", "newline"), a.size && t.setAttribute("height", B(ge(a.size, e)))), t;
  }
});
var r0 = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, ja = (a) => {
  var e = a.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new L("Expected a control sequence", a);
  return e;
}, Ps = (a) => {
  var e = a.gullet.popToken();
  return e.text === "=" && (e = a.gullet.popToken(), e.text === " " && (e = a.gullet.popToken())), e;
}, Ka = (a, e, t, r) => {
  var n = a.gullet.macros.get(t.text);
  n == null && (t.noexpand = !0, n = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !a.gullet.isExpandable(t.text)
  }), a.gullet.macros.set(e, n, r);
};
$({
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
    if (r0[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = r0[r.text]), Q(e.parseFunction(), "internal");
    throw new L("Invalid token after macro prefix", r);
  }
});
$({
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
    for (var i = 0, l, o = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), o[i].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new L('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== i + 1)
          throw new L('Argument number "' + r.text + '" out of order');
        i++, o.push([]);
      } else {
        if (r.text === "EOF")
          throw new L("Expected a macro definition");
        o[i].push(r.text);
      }
    var {
      tokens: c
    } = e.gullet.consumeArg();
    return l && c.unshift(l), (t === "\\edef" || t === "\\xdef") && (c = e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(n, {
      tokens: c,
      numArgs: i,
      delimiters: o
    }, t === r0[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
$({
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
    } = a, r = ja(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var n = Ps(e);
    return Ka(e, r, n, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
$({
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
    } = a, r = ja(e.gullet.popToken()), n = e.gullet.popToken(), i = e.gullet.popToken();
    return Ka(e, r, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(n), {
      type: "internal",
      mode: e.mode
    };
  }
});
var qt = function(e, t, r) {
  var n = ce.math[e] && ce.math[e].replace, i = c0(n || e, t, r);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, v0 = function(e, t, r, n) {
  var i = r.havingBaseStyle(t), l = k.makeSpan(n.concat(i.sizingClasses(r)), [e], r), o = i.sizeMultiplier / r.sizeMultiplier;
  return l.height *= o, l.depth *= o, l.maxFontSize = i.sizeMultiplier, l;
}, Wa = function(e, t, r) {
  var n = t.havingBaseStyle(r), i = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = B(i), e.height -= i, e.depth += i;
}, Bs = function(e, t, r, n, i, l) {
  var o = k.makeSymbol(e, "Main-Regular", i, n), c = v0(o, t, n, l);
  return r && Wa(c, n, t), c;
}, Fs = function(e, t, r, n) {
  return k.makeSymbol(e, "Size" + t + "-Regular", r, n);
}, Za = function(e, t, r, n, i, l) {
  var o = Fs(e, t, i, n), c = v0(k.makeSpan(["delimsizing", "size" + t], [o], n), V.TEXT, n, l);
  return r && Wa(c, n, V.TEXT), c;
}, zr = function(e, t, r) {
  var n;
  t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
  var i = k.makeSpan(["delimsizinginner", n], [k.makeSpan([], [k.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: i
  };
}, Pr = function(e, t, r) {
  var n = et["Size4-Regular"][e.charCodeAt(0)] ? et["Size4-Regular"][e.charCodeAt(0)][4] : et["Size1-Regular"][e.charCodeAt(0)][4], i = new Et("inner", Yi(e, Math.round(1e3 * t))), l = new pt([i], {
    width: B(n),
    height: B(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + B(n),
    viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = k.makeSvgSpan([], [l], r);
  return o.height = t, o.style.height = B(t), o.style.width = B(n), {
    type: "elem",
    elem: o
  };
}, a0 = 8e-3, or = {
  type: "kern",
  size: -1 * a0
}, $s = ["|", "\\lvert", "\\rvert", "\\vert"], Us = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Ja = function(e, t, r, n, i, l) {
  var o, c, p, m, v = "", x = 0;
  o = p = m = e, c = null;
  var b = "Size1-Regular";
  e === "\\uparrow" ? p = m = "⏐" : e === "\\Uparrow" ? p = m = "‖" : e === "\\downarrow" ? o = p = "⏐" : e === "\\Downarrow" ? o = p = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", p = "⏐", m = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", p = "‖", m = "\\Downarrow") : W.contains($s, e) ? (p = "∣", v = "vert", x = 333) : W.contains(Us, e) ? (p = "∥", v = "doublevert", x = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", p = "⎢", m = "⎣", b = "Size4-Regular", v = "lbrack", x = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", p = "⎥", m = "⎦", b = "Size4-Regular", v = "rbrack", x = 667) : e === "\\lfloor" || e === "⌊" ? (p = o = "⎢", m = "⎣", b = "Size4-Regular", v = "lfloor", x = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", p = m = "⎢", b = "Size4-Regular", v = "lceil", x = 667) : e === "\\rfloor" || e === "⌋" ? (p = o = "⎥", m = "⎦", b = "Size4-Regular", v = "rfloor", x = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", p = m = "⎥", b = "Size4-Regular", v = "rceil", x = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", p = "⎜", m = "⎝", b = "Size4-Regular", v = "lparen", x = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", p = "⎟", m = "⎠", b = "Size4-Regular", v = "rparen", x = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", c = "⎨", m = "⎩", p = "⎪", b = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", c = "⎬", m = "⎭", p = "⎪", b = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", m = "⎩", p = "⎪", b = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", m = "⎭", p = "⎪", b = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", m = "⎭", p = "⎪", b = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", m = "⎩", p = "⎪", b = "Size4-Regular");
  var O = qt(o, b, i), S = O.height + O.depth, I = qt(p, b, i), T = I.height + I.depth, w = qt(m, b, i), E = w.height + w.depth, A = 0, R = 1;
  if (c !== null) {
    var N = qt(c, b, i);
    A = N.height + N.depth, R = 2;
  }
  var C = S + E + A, F = Math.max(0, Math.ceil((t - C) / (R * T))), z = C + F * R * T, ae = n.fontMetrics().axisHeight;
  r && (ae *= n.sizeMultiplier);
  var ee = z / 2 - ae, te = [];
  if (v.length > 0) {
    var Ae = z - S - E, ve = Math.round(z * 1e3), Te = Vi(v, Math.round(Ae * 1e3)), _e = new Et(v, Te), Ie = (x / 1e3).toFixed(3) + "em", ne = (ve / 1e3).toFixed(3) + "em", ie = new pt([_e], {
      width: Ie,
      height: ne,
      viewBox: "0 0 " + x + " " + ve
    }), de = k.makeSvgSpan([], [ie], n);
    de.height = ve / 1e3, de.style.width = Ie, de.style.height = ne, te.push({
      type: "elem",
      elem: de
    });
  } else {
    if (te.push(zr(m, b, i)), te.push(or), c === null) {
      var he = z - S - E + 2 * a0;
      te.push(Pr(p, he, n));
    } else {
      var Y = (z - S - E - A) / 2 + 2 * a0;
      te.push(Pr(p, Y, n)), te.push(or), te.push(zr(c, b, i)), te.push(or), te.push(Pr(p, Y, n));
    }
    te.push(or), te.push(zr(o, b, i));
  }
  var Pe = n.havingBaseStyle(V.TEXT), Ne = k.makeVList({
    positionType: "bottom",
    positionData: ee,
    children: te
  }, Pe);
  return v0(k.makeSpan(["delimsizing", "mult"], [Ne], Pe), V.TEXT, n, l);
}, Br = 80, Fr = 0.08, $r = function(e, t, r, n, i) {
  var l = Gi(e, n, r), o = new Et(e, l), c = new pt([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: B(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return k.makeSvgSpan(["hide-tail"], [c], i);
}, qs = function(e, t) {
  var r = t.havingBaseSizing(), n = rn("\\surd", e * r.sizeMultiplier, tn, r), i = r.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, c = 0, p = 0, m = 0, v;
  return n.type === "small" ? (m = 1e3 + 1e3 * l + Br, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), c = (1 + l + Fr) / i, p = (1 + l) / i, o = $r("sqrtMain", c, m, l, t), o.style.minWidth = "0.853em", v = 0.833 / i) : n.type === "large" ? (m = (1e3 + Br) * Gt[n.size], p = (Gt[n.size] + l) / i, c = (Gt[n.size] + l + Fr) / i, o = $r("sqrtSize" + n.size, c, m, l, t), o.style.minWidth = "1.02em", v = 1 / i) : (c = e + l + Fr, p = e + l, m = Math.floor(1e3 * e + l) + Br, o = $r("sqrtTall", c, m, l, t), o.style.minWidth = "0.742em", v = 1.056), o.height = p, o.style.height = B(c), {
    span: o,
    advanceWidth: v,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Qa = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Hs = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], en = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Gt = [0, 1.2, 1.8, 2.4, 3], Gs = function(e, t, r, n, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), W.contains(Qa, e) || W.contains(en, e))
    return Za(e, t, !1, r, n, i);
  if (W.contains(Hs, e))
    return Ja(e, Gt[t], !1, r, n, i);
  throw new L("Illegal delimiter: '" + e + "'");
}, Ys = [{
  type: "small",
  style: V.SCRIPTSCRIPT
}, {
  type: "small",
  style: V.SCRIPT
}, {
  type: "small",
  style: V.TEXT
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
}], Vs = [{
  type: "small",
  style: V.SCRIPTSCRIPT
}, {
  type: "small",
  style: V.SCRIPT
}, {
  type: "small",
  style: V.TEXT
}, {
  type: "stack"
}], tn = [{
  type: "small",
  style: V.SCRIPTSCRIPT
}, {
  type: "small",
  style: V.SCRIPT
}, {
  type: "small",
  style: V.TEXT
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
}], Xs = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, rn = function(e, t, r, n) {
  for (var i = Math.min(2, 3 - n.style.size), l = i; l < r.length && r[l].type !== "stack"; l++) {
    var o = qt(e, Xs(r[l]), "math"), c = o.height + o.depth;
    if (r[l].type === "small") {
      var p = n.havingBaseStyle(r[l].style);
      c *= p.sizeMultiplier;
    }
    if (c > t)
      return r[l];
  }
  return r[r.length - 1];
}, an = function(e, t, r, n, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  W.contains(en, e) ? o = Ys : W.contains(Qa, e) ? o = tn : o = Vs;
  var c = rn(e, t, o, n);
  return c.type === "small" ? Bs(e, c.style, r, n, i, l) : c.type === "large" ? Za(e, c.size, r, n, i, l) : Ja(e, t, r, n, i, l);
}, js = function(e, t, r, n, i, l) {
  var o = n.fontMetrics().axisHeight * n.sizeMultiplier, c = 901, p = 5 / n.fontMetrics().ptPerEm, m = Math.max(t - o, r + o), v = Math.max(
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
  return an(e, v, !0, n, i, l);
}, ht = {
  sqrtImage: qs,
  sizedDelim: Gs,
  sizeToMaxHeight: Gt,
  customSizedDelim: an,
  leftRightDelim: js
}, Q0 = {
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
}, Ks = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Tr(a, e) {
  var t = Sr(a);
  if (t && W.contains(Ks, t.text))
    return t;
  throw t ? new L("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", a) : new L("Invalid delimiter type '" + a.type + "'", a);
}
$({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = Tr(e[0], a);
    return {
      type: "delimsizing",
      mode: a.parser.mode,
      size: Q0[a.funcName].size,
      mclass: Q0[a.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => a.delim === "." ? k.makeSpan([a.mclass]) : ht.sizedDelim(a.delim, a.size, e, a.mode, [a.mclass]),
  mathmlBuilder: (a) => {
    var e = [];
    a.delim !== "." && e.push(Xe(a.delim, a.mode));
    var t = new D.MathNode("mo", e);
    a.mclass === "mopen" || a.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = B(ht.sizeToMaxHeight[a.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function ea(a) {
  if (!a.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
$({
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
      delim: Tr(e[0], a).text,
      color: t
      // undefined if not set via \color
    };
  }
});
$({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = Tr(e[0], a), r = a.parser;
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
    ea(a);
    for (var t = ke(a.body, e, !0, ["mopen", "mclose"]), r = 0, n = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (r = Math.max(t[l].height, r), n = Math.max(t[l].depth, n));
    r *= e.sizeMultiplier, n *= e.sizeMultiplier;
    var o;
    if (a.left === "." ? o = Vt(e, ["mopen"]) : o = ht.leftRightDelim(a.left, r, n, e, a.mode, ["mopen"]), t.unshift(o), i)
      for (var c = 1; c < t.length; c++) {
        var p = t[c], m = p.isMiddle;
        m && (t[c] = ht.leftRightDelim(m.delim, r, n, m.options, a.mode, []));
      }
    var v;
    if (a.right === ".")
      v = Vt(e, ["mclose"]);
    else {
      var x = a.rightColor ? e.withColor(a.rightColor) : e;
      v = ht.leftRightDelim(a.right, r, n, x, a.mode, ["mclose"]);
    }
    return t.push(v), k.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (a, e) => {
    ea(a);
    var t = ze(a.body, e);
    if (a.left !== ".") {
      var r = new D.MathNode("mo", [Xe(a.left, a.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (a.right !== ".") {
      var n = new D.MathNode("mo", [Xe(a.right, a.mode)]);
      n.setAttribute("fence", "true"), a.rightColor && n.setAttribute("mathcolor", a.rightColor), t.push(n);
    }
    return p0(t);
  }
});
$({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = Tr(e[0], a);
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
      t = Vt(e, []);
    else {
      t = ht.sizedDelim(a.delim, 1, e, a.mode, []);
      var r = {
        delim: a.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (a, e) => {
    var t = a.delim === "\\vert" || a.delim === "|" ? Xe("|", "text") : Xe(a.delim, a.mode), r = new D.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var b0 = (a, e) => {
  var t = k.wrapFragment(re(a.body, e), e), r = a.label.slice(1), n = e.sizeMultiplier, i, l = 0, o = W.isCharacterBox(a.body);
  if (r === "sout")
    i = k.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / n, l = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var c = ge({
      number: 0.6,
      unit: "pt"
    }, e), p = ge({
      number: 0.35,
      unit: "ex"
    }, e), m = e.havingBaseSizing();
    n = n / m.sizeMultiplier;
    var v = t.height + t.depth + c + p;
    t.style.paddingLeft = B(v / 2 + c);
    var x = Math.floor(1e3 * v * n), b = qi(x), O = new pt([new Et("phase", b)], {
      width: "400em",
      height: B(x / 1e3),
      viewBox: "0 0 400000 " + x,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = k.makeSvgSpan(["hide-tail"], [O], e), i.style.height = B(v), l = t.depth + c + p;
  } else {
    /cancel/.test(r) ? o || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var S = 0, I = 0, T = 0;
    /box/.test(r) ? (T = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), S = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : T), I = S) : r === "angl" ? (T = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), S = 4 * T, I = Math.max(0, 0.25 - t.depth)) : (S = o ? 0.2 : 0, I = S), i = ft.encloseSpan(t, r, S, I, e), /fbox|boxed|fcolorbox/.test(r) ? (i.style.borderStyle = "solid", i.style.borderWidth = B(T)) : r === "angl" && T !== 0.049 && (i.style.borderTopWidth = B(T), i.style.borderRightWidth = B(T)), l = t.depth + I, a.backgroundColor && (i.style.backgroundColor = a.backgroundColor, a.borderColor && (i.style.borderColor = a.borderColor));
  }
  var w;
  if (a.backgroundColor)
    w = k.makeVList({
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
    var E = /cancel|phase/.test(r) ? ["svg-align"] : [];
    w = k.makeVList({
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
          wrapperClasses: E
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (w.height = t.height, w.depth = t.depth), /cancel/.test(r) && !o ? k.makeSpan(["mord", "cancel-lap"], [w], e) : k.makeSpan(["mord"], [w], e);
}, y0 = (a, e) => {
  var t = 0, r = new D.MathNode(a.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [le(a.body, e)]);
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
$({
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
  htmlBuilder: b0,
  mathmlBuilder: y0
});
$({
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
    } = a, i = Q(e[0], "color-token").color, l = Q(e[1], "color-token").color, o = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      backgroundColor: l,
      borderColor: i,
      body: o
    };
  },
  htmlBuilder: b0,
  mathmlBuilder: y0
});
$({
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
$({
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
  htmlBuilder: b0,
  mathmlBuilder: y0
});
$({
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
var nn = {};
function tt(a) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: n,
    htmlBuilder: i,
    mathmlBuilder: l
  } = a, o = {
    type: e,
    numArgs: r.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: n
  }, c = 0; c < t.length; ++c)
    nn[t[c]] = o;
  i && (br[e] = i), l && (yr[e] = l);
}
var sn = {};
function h(a, e) {
  sn[a] = e;
}
function ta(a) {
  var e = [];
  a.consumeSpaces();
  var t = a.fetch().text;
  for (t === "\\relax" && (a.consume(), a.consumeSpaces(), t = a.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    a.consume(), e.push(t === "\\hdashline"), a.consumeSpaces(), t = a.fetch().text;
  return e;
}
var Ar = (a) => {
  var e = a.parser.settings;
  if (!e.displayMode)
    throw new L("{" + a.envName + "} can be used only in display mode.");
};
function w0(a) {
  if (a.indexOf("ed") === -1)
    return a.indexOf("*") === -1;
}
function kt(a, e, t) {
  var {
    hskipBeforeAndAfter: r,
    addJot: n,
    cols: i,
    arraystretch: l,
    colSeparationType: o,
    autoTag: c,
    singleRow: p,
    emptySingleRow: m,
    maxNumCols: v,
    leqno: x
  } = e;
  if (a.gullet.beginGroup(), p || a.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var b = a.gullet.expandMacroAsText("\\arraystretch");
    if (b == null)
      l = 1;
    else if (l = parseFloat(b), !l || l < 0)
      throw new L("Invalid \\arraystretch: " + b);
  }
  a.gullet.beginGroup();
  var O = [], S = [O], I = [], T = [], w = c != null ? [] : void 0;
  function E() {
    c && a.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function A() {
    w && (a.gullet.macros.get("\\df@tag") ? (w.push(a.subparse([new Ge("\\df@tag")])), a.gullet.macros.set("\\df@tag", void 0, !0)) : w.push(!!c && a.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (E(), T.push(ta(a)); ; ) {
    var R = a.parseExpression(!1, p ? "\\end" : "\\\\");
    a.gullet.endGroup(), a.gullet.beginGroup(), R = {
      type: "ordgroup",
      mode: a.mode,
      body: R
    }, t && (R = {
      type: "styling",
      mode: a.mode,
      style: t,
      body: [R]
    }), O.push(R);
    var N = a.fetch().text;
    if (N === "&") {
      if (v && O.length === v) {
        if (p || o)
          throw new L("Too many tab characters: &", a.nextToken);
        a.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      a.consume();
    } else if (N === "\\end") {
      A(), O.length === 1 && R.type === "styling" && R.body[0].body.length === 0 && (S.length > 1 || !m) && S.pop(), T.length < S.length + 1 && T.push([]);
      break;
    } else if (N === "\\\\") {
      a.consume();
      var C = void 0;
      a.gullet.future().text !== " " && (C = a.parseSizeGroup(!0)), I.push(C ? C.value : null), A(), T.push(ta(a)), O = [], S.push(O), E();
    } else
      throw new L("Expected & or \\\\ or \\cr or \\end", a.nextToken);
  }
  return a.gullet.endGroup(), a.gullet.endGroup(), {
    type: "array",
    mode: a.mode,
    addJot: n,
    arraystretch: l,
    body: S,
    cols: i,
    rowGaps: I,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: T,
    colSeparationType: o,
    tags: w,
    leqno: x
  };
}
function x0(a) {
  return a.slice(0, 1) === "d" ? "display" : "text";
}
var rt = function(e, t) {
  var r, n, i = e.body.length, l = e.hLinesBeforeRow, o = 0, c = new Array(i), p = [], m = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), v = 1 / t.fontMetrics().ptPerEm, x = 5 * v;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var b = t.havingStyle(V.SCRIPT).sizeMultiplier;
    x = 0.2778 * (b / t.sizeMultiplier);
  }
  var O = e.colSeparationType === "CD" ? ge({
    number: 3,
    unit: "ex"
  }, t) : 12 * v, S = 3 * v, I = e.arraystretch * O, T = 0.7 * I, w = 0.3 * I, E = 0;
  function A(Ke) {
    for (var Zt = 0; Zt < Ke.length; ++Zt)
      Zt > 0 && (E += 0.25), p.push({
        pos: E,
        isDashed: Ke[Zt]
      });
  }
  for (A(l[0]), r = 0; r < e.body.length; ++r) {
    var R = e.body[r], N = T, C = w;
    o < R.length && (o = R.length);
    var F = new Array(R.length);
    for (n = 0; n < R.length; ++n) {
      var z = re(R[n], t);
      C < z.depth && (C = z.depth), N < z.height && (N = z.height), F[n] = z;
    }
    var ae = e.rowGaps[r], ee = 0;
    ae && (ee = ge(ae, t), ee > 0 && (ee += w, C < ee && (C = ee), ee = 0)), e.addJot && (C += S), F.height = N, F.depth = C, E += N, F.pos = E, E += C + ee, c[r] = F, A(l[r + 1]);
  }
  var te = E / 2 + t.fontMetrics().axisHeight, Ae = e.cols || [], ve = [], Te, _e, Ie = [];
  if (e.tags && e.tags.some((Ke) => Ke))
    for (r = 0; r < i; ++r) {
      var ne = c[r], ie = ne.pos - te, de = e.tags[r], he = void 0;
      de === !0 ? he = k.makeSpan(["eqn-num"], [], t) : de === !1 ? he = k.makeSpan([], [], t) : he = k.makeSpan([], ke(de, t, !0), t), he.depth = ne.depth, he.height = ne.height, Ie.push({
        type: "elem",
        elem: he,
        shift: ie
      });
    }
  for (
    n = 0, _e = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    n < o || _e < Ae.length;
    ++n, ++_e
  ) {
    for (var Y = Ae[_e] || {}, Pe = !0; Y.type === "separator"; ) {
      if (Pe || (Te = k.makeSpan(["arraycolsep"], []), Te.style.width = B(t.fontMetrics().doubleRuleSep), ve.push(Te)), Y.separator === "|" || Y.separator === ":") {
        var Ne = Y.separator === "|" ? "solid" : "dashed", Me = k.makeSpan(["vertical-separator"], [], t);
        Me.style.height = B(E), Me.style.borderRightWidth = B(m), Me.style.borderRightStyle = Ne, Me.style.margin = "0 " + B(-m / 2);
        var nt = E - te;
        nt && (Me.style.verticalAlign = B(-nt)), ve.push(Me);
      } else
        throw new L("Invalid separator type: " + Y.separator);
      _e++, Y = Ae[_e] || {}, Pe = !1;
    }
    if (!(n >= o)) {
      var Be = void 0;
      (n > 0 || e.hskipBeforeAndAfter) && (Be = W.deflt(Y.pregap, x), Be !== 0 && (Te = k.makeSpan(["arraycolsep"], []), Te.style.width = B(Be), ve.push(Te)));
      var qe = [];
      for (r = 0; r < i; ++r) {
        var it = c[r], je = it[n];
        if (je) {
          var _ = it.pos - te;
          je.depth = it.depth, je.height = it.height, qe.push({
            type: "elem",
            elem: je,
            shift: _
          });
        }
      }
      qe = k.makeVList({
        positionType: "individualShift",
        children: qe
      }, t), qe = k.makeSpan(["col-align-" + (Y.align || "c")], [qe]), ve.push(qe), (n < o - 1 || e.hskipBeforeAndAfter) && (Be = W.deflt(Y.postgap, x), Be !== 0 && (Te = k.makeSpan(["arraycolsep"], []), Te.style.width = B(Be), ve.push(Te)));
    }
  }
  if (c = k.makeSpan(["mtable"], ve), p.length > 0) {
    for (var P = k.makeLineSpan("hline", t, m), H = k.makeLineSpan("hdashline", t, m), se = [{
      type: "elem",
      elem: c,
      shift: 0
    }]; p.length > 0; ) {
      var G = p.pop(), J = G.pos - te;
      G.isDashed ? se.push({
        type: "elem",
        elem: H,
        shift: J
      }) : se.push({
        type: "elem",
        elem: P,
        shift: J
      });
    }
    c = k.makeVList({
      positionType: "individualShift",
      children: se
    }, t);
  }
  if (Ie.length === 0)
    return k.makeSpan(["mord"], [c], t);
  var ye = k.makeVList({
    positionType: "individualShift",
    children: Ie
  }, t);
  return ye = k.makeSpan(["tag"], [ye], t), k.makeFragment([c, ye]);
}, Ws = {
  c: "center ",
  l: "left ",
  r: "right "
}, at = function(e, t) {
  for (var r = [], n = new D.MathNode("mtd", [], ["mtr-glue"]), i = new D.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var o = e.body[l], c = [], p = 0; p < o.length; p++)
      c.push(new D.MathNode("mtd", [le(o[p], t)]));
    e.tags && e.tags[l] && (c.unshift(n), c.push(n), e.leqno ? c.unshift(i) : c.push(i)), r.push(new D.MathNode("mtr", c));
  }
  var m = new D.MathNode("mtable", r), v = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  m.setAttribute("rowspacing", B(v));
  var x = "", b = "";
  if (e.cols && e.cols.length > 0) {
    var O = e.cols, S = "", I = !1, T = 0, w = O.length;
    O[0].type === "separator" && (x += "top ", T = 1), O[O.length - 1].type === "separator" && (x += "bottom ", w -= 1);
    for (var E = T; E < w; E++)
      O[E].type === "align" ? (b += Ws[O[E].align], I && (S += "none "), I = !0) : O[E].type === "separator" && I && (S += O[E].separator === "|" ? "solid " : "dashed ", I = !1);
    m.setAttribute("columnalign", b.trim()), /[sd]/.test(S) && m.setAttribute("columnlines", S.trim());
  }
  if (e.colSeparationType === "align") {
    for (var A = e.cols || [], R = "", N = 1; N < A.length; N++)
      R += N % 2 ? "0em " : "1em ";
    m.setAttribute("columnspacing", R.trim());
  } else
    e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? m.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? m.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? m.setAttribute("columnspacing", "0.5em") : m.setAttribute("columnspacing", "1em");
  var C = "", F = e.hLinesBeforeRow;
  x += F[0].length > 0 ? "left " : "", x += F[F.length - 1].length > 0 ? "right " : "";
  for (var z = 1; z < F.length - 1; z++)
    C += F[z].length === 0 ? "none " : F[z][0] ? "dashed " : "solid ";
  return /[sd]/.test(C) && m.setAttribute("rowlines", C.trim()), x !== "" && (m = new D.MathNode("menclose", [m]), m.setAttribute("notation", x.trim())), e.arraystretch && e.arraystretch < 1 && (m = new D.MathNode("mstyle", [m]), m.setAttribute("scriptlevel", "1")), m;
}, ln = function(e, t) {
  e.envName.indexOf("ed") === -1 && Ar(e);
  var r = [], n = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = kt(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: i ? void 0 : w0(e.envName),
    emptySingleRow: !0,
    colSeparationType: n,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), o, c = 0, p = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var m = "", v = 0; v < t[0].body.length; v++) {
      var x = Q(t[0].body[v], "textord");
      m += x.text;
    }
    o = Number(m), c = o * 2;
  }
  var b = !c;
  l.body.forEach(function(T) {
    for (var w = 1; w < T.length; w += 2) {
      var E = Q(T[w], "styling"), A = Q(E.body[0], "ordgroup");
      A.body.unshift(p);
    }
    if (b)
      c < T.length && (c = T.length);
    else {
      var R = T.length / 2;
      if (o < R)
        throw new L("Too many math in a row: " + ("expected " + o + ", but got " + R), T[0]);
    }
  });
  for (var O = 0; O < c; ++O) {
    var S = "r", I = 0;
    O % 2 === 1 ? S = "l" : O > 0 && b && (I = 1), r[O] = {
      type: "align",
      align: S,
      pregap: I,
      postgap: 0
    };
  }
  return l.colSeparationType = b ? "align" : "alignat", l;
};
tt({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = Sr(e[0]), r = t ? [e[0]] : Q(e[0], "ordgroup").body, n = r.map(function(l) {
      var o = f0(l), c = o.text;
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
    return kt(a.parser, i, x0(a.envName));
  },
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
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
    var i = kt(a.parser, r, x0(a.envName)), l = Math.max(0, ...i.body.map((o) => o.length));
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
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 0.5
    }, t = kt(a.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = Sr(e[0]), r = t ? [e[0]] : Q(e[0], "ordgroup").body, n = r.map(function(l) {
      var o = f0(l), c = o.text;
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
    if (i = kt(a.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new L("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
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
    }, t = kt(a.parser, e, x0(a.envName));
    return {
      type: "leftright",
      mode: a.mode,
      body: [t],
      left: a.envName.indexOf("r") > -1 ? "." : "\\{",
      right: a.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: ln,
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    W.contains(["gather", "gather*"], a.envName) && Ar(a);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: w0(a.envName),
      emptySingleRow: !0,
      leqno: a.parser.settings.leqno
    };
    return kt(a.parser, e, "display");
  },
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: ln,
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    Ar(a);
    var e = {
      autoTag: w0(a.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: a.parser.settings.leqno
    };
    return kt(a.parser, e, "display");
  },
  htmlBuilder: rt,
  mathmlBuilder: at
});
tt({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(a) {
    return Ar(a), zs(a.parser);
  },
  htmlBuilder: rt,
  mathmlBuilder: at
});
h("\\nonumber", "\\gdef\\@eqnsw{0}");
h("\\notag", "\\nonumber");
$({
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
var ra = nn;
$({
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
      if (!ra.hasOwnProperty(i))
        throw new L("No such environment: " + i, n);
      var o = ra[i], {
        args: c,
        optArgs: p
      } = t.parseArguments("\\begin{" + i + "}", o), m = {
        mode: t.mode,
        envName: i,
        parser: t
      }, v = o.handler(m, c, p);
      t.expect("\\end", !1);
      var x = t.nextToken, b = Q(t.parseFunction(), "environment");
      if (b.name !== i)
        throw new L("Mismatch: \\begin{" + i + "} matched by \\end{" + b.name + "}", x);
      return v;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: n
    };
  }
});
var on = (a, e) => {
  var t = a.font, r = e.withFont(t);
  return re(a.body, r);
}, un = (a, e) => {
  var t = a.font, r = e.withFont(t);
  return le(a.body, r);
}, aa = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
$({
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
    } = a, n = wr(e[0]), i = r;
    return i in aa && (i = aa[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: n
    };
  },
  htmlBuilder: on,
  mathmlBuilder: un
});
$({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0], n = W.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: kr(r),
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
$({
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
    } = t, l = t.parseExpression(!0, n), o = "math" + r.slice(1);
    return {
      type: "font",
      mode: i,
      font: o,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: on,
  mathmlBuilder: un
});
var cn = (a, e) => {
  var t = e;
  return a === "display" ? t = t.id >= V.SCRIPT.id ? t.text() : V.DISPLAY : a === "text" && t.size === V.DISPLAY.size ? t = V.TEXT : a === "script" ? t = V.SCRIPT : a === "scriptscript" && (t = V.SCRIPTSCRIPT), t;
}, E0 = (a, e) => {
  var t = cn(a.size, e.style), r = t.fracNum(), n = t.fracDen(), i;
  i = e.havingStyle(r);
  var l = re(a.numer, i, e);
  if (a.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < o ? o : l.height, l.depth = l.depth < c ? c : l.depth;
  }
  i = e.havingStyle(n);
  var p = re(a.denom, i, e), m, v, x;
  a.hasBarLine ? (a.barSize ? (v = ge(a.barSize, e), m = k.makeLineSpan("frac-line", e, v)) : m = k.makeLineSpan("frac-line", e), v = m.height, x = m.height) : (m = null, v = 0, x = e.fontMetrics().defaultRuleThickness);
  var b, O, S;
  t.size === V.DISPLAY.size || a.size === "display" ? (b = e.fontMetrics().num1, v > 0 ? O = 3 * x : O = 7 * x, S = e.fontMetrics().denom1) : (v > 0 ? (b = e.fontMetrics().num2, O = x) : (b = e.fontMetrics().num3, O = 3 * x), S = e.fontMetrics().denom2);
  var I;
  if (m) {
    var w = e.fontMetrics().axisHeight;
    b - l.depth - (w + 0.5 * v) < O && (b += O - (b - l.depth - (w + 0.5 * v))), w - 0.5 * v - (p.height - S) < O && (S += O - (w - 0.5 * v - (p.height - S)));
    var E = -(w - 0.5 * v);
    I = k.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: p,
        shift: S
      }, {
        type: "elem",
        elem: m,
        shift: E
      }, {
        type: "elem",
        elem: l,
        shift: -b
      }]
    }, e);
  } else {
    var T = b - l.depth - (p.height - S);
    T < O && (b += 0.5 * (O - T), S += 0.5 * (O - T)), I = k.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: p,
        shift: S
      }, {
        type: "elem",
        elem: l,
        shift: -b
      }]
    }, e);
  }
  i = e.havingStyle(t), I.height *= i.sizeMultiplier / e.sizeMultiplier, I.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var A;
  t.size === V.DISPLAY.size ? A = e.fontMetrics().delim1 : t.size === V.SCRIPTSCRIPT.size ? A = e.havingStyle(V.SCRIPT).fontMetrics().delim2 : A = e.fontMetrics().delim2;
  var R, N;
  return a.leftDelim == null ? R = Vt(e, ["mopen"]) : R = ht.customSizedDelim(a.leftDelim, A, !0, e.havingStyle(t), a.mode, ["mopen"]), a.continued ? N = k.makeSpan([]) : a.rightDelim == null ? N = Vt(e, ["mclose"]) : N = ht.customSizedDelim(a.rightDelim, A, !0, e.havingStyle(t), a.mode, ["mclose"]), k.makeSpan(["mord"].concat(i.sizingClasses(e)), [R, k.makeSpan(["mfrac"], [I]), N], e);
}, S0 = (a, e) => {
  var t = new D.MathNode("mfrac", [le(a.numer, e), le(a.denom, e)]);
  if (!a.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (a.barSize) {
    var r = ge(a.barSize, e);
    t.setAttribute("linethickness", B(r));
  }
  var n = cn(a.size, e.style);
  if (n.size !== e.style.size) {
    t = new D.MathNode("mstyle", [t]);
    var i = n.size === V.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (a.leftDelim != null || a.rightDelim != null) {
    var l = [];
    if (a.leftDelim != null) {
      var o = new D.MathNode("mo", [new D.TextNode(a.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), l.push(o);
    }
    if (l.push(t), a.rightDelim != null) {
      var c = new D.MathNode("mo", [new D.TextNode(a.rightDelim.replace("\\", ""))]);
      c.setAttribute("fence", "true"), l.push(c);
    }
    return p0(l);
  }
  return t;
};
$({
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
    } = a, n = e[0], i = e[1], l, o = null, c = null, p = "auto";
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
        l = !1, o = "(", c = ")";
        break;
      case "\\\\bracefrac":
        l = !1, o = "\\{", c = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, o = "[", c = "]";
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
      leftDelim: o,
      rightDelim: c,
      size: p,
      barSize: null
    };
  },
  htmlBuilder: E0,
  mathmlBuilder: S0
});
$({
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
$({
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
var na = ["display", "text", "script", "scriptscript"], ia = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
$({
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
    } = a, r = e[4], n = e[5], i = wr(e[0]), l = i.type === "atom" && i.family === "open" ? ia(i.text) : null, o = wr(e[1]), c = o.type === "atom" && o.family === "close" ? ia(o.text) : null, p = Q(e[2], "size"), m, v = null;
    p.isBlank ? m = !0 : (v = p.value, m = v.number > 0);
    var x = "auto", b = e[3];
    if (b.type === "ordgroup") {
      if (b.body.length > 0) {
        var O = Q(b.body[0], "textord");
        x = na[Number(O.text)];
      }
    } else
      b = Q(b, "textord"), x = na[Number(b.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: r,
      denom: n,
      continued: !1,
      hasBarLine: m,
      barSize: v,
      leftDelim: l,
      rightDelim: c,
      size: x
    };
  },
  htmlBuilder: E0,
  mathmlBuilder: S0
});
$({
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
$({
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
    } = a, n = e[0], i = Ii(Q(e[1], "infix").size), l = e[2], o = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: l,
      continued: !1,
      hasBarLine: o,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: E0,
  mathmlBuilder: S0
});
var dn = (a, e) => {
  var t = e.style, r, n;
  a.type === "supsub" ? (r = a.sup ? re(a.sup, e.havingStyle(t.sup()), e) : re(a.sub, e.havingStyle(t.sub()), e), n = Q(a.base, "horizBrace")) : n = Q(a, "horizBrace");
  var i = re(n.base, e.havingBaseStyle(V.DISPLAY)), l = ft.svgSpan(n, e), o;
  if (n.isOver ? (o = k.makeVList({
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
  }, e), o.children[0].children[0].children[1].classes.push("svg-align")) : (o = k.makeVList({
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
  }, e), o.children[0].children[0].children[0].classes.push("svg-align")), r) {
    var c = k.makeSpan(["mord", n.isOver ? "mover" : "munder"], [o], e);
    n.isOver ? o = k.makeVList({
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
    }, e) : o = k.makeVList({
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
  return k.makeSpan(["mord", n.isOver ? "mover" : "munder"], [o], e);
}, Zs = (a, e) => {
  var t = ft.mathMLnode(a.label);
  return new D.MathNode(a.isOver ? "mover" : "munder", [le(a.base, e), t]);
};
$({
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
  htmlBuilder: dn,
  mathmlBuilder: Zs
});
$({
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
      body: be(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (a, e) => {
    var t = ke(a.body, e, !1);
    return k.makeAnchor(a.href, [], t, e);
  },
  mathmlBuilder: (a, e) => {
    var t = St(a.body, e);
    return t instanceof He || (t = new He("mrow", [t])), t.setAttribute("href", a.href), t;
  }
});
$({
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
    var o = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: n
    };
    return {
      type: "href",
      mode: t.mode,
      href: r,
      body: be(o)
    };
  }
});
$({
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
      body: be(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = ke(a.body, e, !1);
    return k.makeFragment(t);
  },
  mathmlBuilder(a, e) {
    return new D.MathNode("mrow", ze(a.body, e));
  }
});
$({
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
    var o, c = {};
    switch (r) {
      case "\\htmlClass":
        c.class = i, o = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        c.id = i, o = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        c.style = i, o = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var p = i.split(","), m = 0; m < p.length; m++) {
          var v = p[m].split("=");
          if (v.length !== 2)
            throw new L("Error parsing key-value for \\htmlData");
          c["data-" + v[0].trim()] = v[1].trim();
        }
        o = {
          command: "\\htmlData",
          attributes: c
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(o) ? {
      type: "html",
      mode: t.mode,
      attributes: c,
      body: be(l)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (a, e) => {
    var t = ke(a.body, e, !1), r = ["enclosing"];
    a.attributes.class && r.push(...a.attributes.class.trim().split(/\s+/));
    var n = k.makeSpan(r, t, e);
    for (var i in a.attributes)
      i !== "class" && a.attributes.hasOwnProperty(i) && n.setAttribute(i, a.attributes[i]);
    return n;
  },
  mathmlBuilder: (a, e) => St(a.body, e)
});
$({
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
      html: be(e[0]),
      mathml: be(e[1])
    };
  },
  htmlBuilder: (a, e) => {
    var t = ke(a.html, e, !1);
    return k.makeFragment(t);
  },
  mathmlBuilder: (a, e) => St(a.mathml, e)
});
var Ur = function(e) {
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
  if (!Na(r))
    throw new L("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
$({
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
    }, o = "";
    if (t[0])
      for (var c = Q(t[0], "raw").string, p = c.split(","), m = 0; m < p.length; m++) {
        var v = p[m].split("=");
        if (v.length === 2) {
          var x = v[1].trim();
          switch (v[0].trim()) {
            case "alt":
              o = x;
              break;
            case "width":
              n = Ur(x);
              break;
            case "height":
              i = Ur(x);
              break;
            case "totalheight":
              l = Ur(x);
              break;
            default:
              throw new L("Invalid key: '" + v[0] + "' in \\includegraphics.");
          }
        }
      }
    var b = Q(e[0], "url").url;
    return o === "" && (o = b, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), r.settings.isTrusted({
      command: "\\includegraphics",
      url: b
    }) ? {
      type: "includegraphics",
      mode: r.mode,
      alt: o,
      width: n,
      height: i,
      totalheight: l,
      src: b
    } : r.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (a, e) => {
    var t = ge(a.height, e), r = 0;
    a.totalheight.number > 0 && (r = ge(a.totalheight, e) - t);
    var n = 0;
    a.width.number > 0 && (n = ge(a.width, e));
    var i = {
      height: B(t + r)
    };
    n > 0 && (i.width = B(n)), r > 0 && (i.verticalAlign = B(-r));
    var l = new Zi(a.src, a.alt, i);
    return l.height = t, l.depth = r, l;
  },
  mathmlBuilder: (a, e) => {
    var t = new D.MathNode("mglyph", []);
    t.setAttribute("alt", a.alt);
    var r = ge(a.height, e), n = 0;
    if (a.totalheight.number > 0 && (n = ge(a.totalheight, e) - r, t.setAttribute("valign", B(-n))), t.setAttribute("height", B(r + n)), a.width.number > 0) {
      var i = ge(a.width, e);
      t.setAttribute("width", B(i));
    }
    return t.setAttribute("src", a.src), t;
  }
});
$({
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
    return k.makeGlue(a.dimension, e);
  },
  mathmlBuilder(a, e) {
    var t = ge(a.dimension, e);
    return new D.SpaceNode(t);
  }
});
$({
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
    a.alignment === "clap" ? (t = k.makeSpan([], [re(a.body, e)]), t = k.makeSpan(["inner"], [t], e)) : t = k.makeSpan(["inner"], [re(a.body, e)]);
    var r = k.makeSpan(["fix"], []), n = k.makeSpan([a.alignment], [t, r], e), i = k.makeSpan(["strut"]);
    return i.style.height = B(n.height + n.depth), n.depth && (i.style.verticalAlign = B(-n.depth)), n.children.unshift(i), n = k.makeSpan(["thinbox"], [n], e), k.makeSpan(["mord", "vbox"], [n], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new D.MathNode("mpadded", [le(a.body, e)]);
    if (a.alignment !== "rlap") {
      var r = a.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
$({
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
$({
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
var sa = (a, e) => {
  switch (e.style.size) {
    case V.DISPLAY.size:
      return a.display;
    case V.TEXT.size:
      return a.text;
    case V.SCRIPT.size:
      return a.script;
    case V.SCRIPTSCRIPT.size:
      return a.scriptscript;
    default:
      return a.text;
  }
};
$({
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
      display: be(e[0]),
      text: be(e[1]),
      script: be(e[2]),
      scriptscript: be(e[3])
    };
  },
  htmlBuilder: (a, e) => {
    var t = sa(a, e), r = ke(t, e, !1);
    return k.makeFragment(r);
  },
  mathmlBuilder: (a, e) => {
    var t = sa(a, e);
    return St(t, e);
  }
});
var hn = (a, e, t, r, n, i, l) => {
  a = k.makeSpan([], [a]);
  var o = t && W.isCharacterBox(t), c, p;
  if (e) {
    var m = re(e, r.havingStyle(n.sup()), r);
    p = {
      elem: m,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - m.depth)
    };
  }
  if (t) {
    var v = re(t, r.havingStyle(n.sub()), r);
    c = {
      elem: v,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - v.height)
    };
  }
  var x;
  if (p && c) {
    var b = r.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + a.depth + l;
    x = k.makeVList({
      positionType: "bottom",
      positionData: b,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: B(-i)
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
        marginLeft: B(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (c) {
    var O = a.height - l;
    x = k.makeVList({
      positionType: "top",
      positionData: O,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: B(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: a
      }]
    }, r);
  } else if (p) {
    var S = a.depth + l;
    x = k.makeVList({
      positionType: "bottom",
      positionData: S,
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: p.kern
      }, {
        type: "elem",
        elem: p.elem,
        marginLeft: B(i)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return a;
  var I = [x];
  if (c && i !== 0 && !o) {
    var T = k.makeSpan(["mspace"], [], r);
    T.style.marginRight = B(i), I.unshift(T);
  }
  return k.makeSpan(["mop", "op-limits"], I, r);
}, pn = ["\\smallint"], Ft = (a, e) => {
  var t, r, n = !1, i;
  a.type === "supsub" ? (t = a.sup, r = a.sub, i = Q(a.base, "op"), n = !0) : i = Q(a, "op");
  var l = e.style, o = !1;
  l.size === V.DISPLAY.size && i.symbol && !W.contains(pn, i.name) && (o = !0);
  var c;
  if (i.symbol) {
    var p = o ? "Size2-Regular" : "Size1-Regular", m = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (m = i.name.slice(1), i.name = m === "oiint" ? "\\iint" : "\\iiint"), c = k.makeSymbol(i.name, p, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), m.length > 0) {
      var v = c.italic, x = k.staticSvg(m + "Size" + (o ? "2" : "1"), e);
      c = k.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: c,
          shift: 0
        }, {
          type: "elem",
          elem: x,
          shift: o ? 0.08 : 0
        }]
      }, e), i.name = "\\" + m, c.classes.unshift("mop"), c.italic = v;
    }
  } else if (i.body) {
    var b = ke(i.body, e, !0);
    b.length === 1 && b[0] instanceof Ve ? (c = b[0], c.classes[0] = "mop") : c = k.makeSpan(["mop"], b, e);
  } else {
    for (var O = [], S = 1; S < i.name.length; S++)
      O.push(k.mathsym(i.name[S], i.mode, e));
    c = k.makeSpan(["mop"], O, e);
  }
  var I = 0, T = 0;
  return (c instanceof Ve || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (I = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, T = c.italic), n ? hn(c, t, r, e, l, T, I) : (I && (c.style.position = "relative", c.style.top = B(I)), c);
}, Wt = (a, e) => {
  var t;
  if (a.symbol)
    t = new He("mo", [Xe(a.name, a.mode)]), W.contains(pn, a.name) && t.setAttribute("largeop", "false");
  else if (a.body)
    t = new He("mo", ze(a.body, e));
  else {
    t = new He("mi", [new Ht(a.name.slice(1))]);
    var r = new He("mo", [Xe("⁡", "text")]);
    a.parentIsSupSub ? t = new He("mrow", [t, r]) : t = $a([t, r]);
  }
  return t;
}, Js = {
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
$({
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
    return n.length === 1 && (n = Js[n]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: Ft,
  mathmlBuilder: Wt
});
$({
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
      body: be(r)
    };
  },
  htmlBuilder: Ft,
  mathmlBuilder: Wt
});
var Qs = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
$({
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
  htmlBuilder: Ft,
  mathmlBuilder: Wt
});
$({
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
  htmlBuilder: Ft,
  mathmlBuilder: Wt
});
$({
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
    return r.length === 1 && (r = Qs[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: Ft,
  mathmlBuilder: Wt
});
var mn = (a, e) => {
  var t, r, n = !1, i;
  a.type === "supsub" ? (t = a.sup, r = a.sub, i = Q(a.base, "operatorname"), n = !0) : i = Q(a, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var o = i.body.map((v) => {
      var x = v.text;
      return typeof x == "string" ? {
        type: "textord",
        mode: v.mode,
        text: x
      } : v;
    }), c = ke(o, e.withFont("mathrm"), !0), p = 0; p < c.length; p++) {
      var m = c[p];
      m instanceof Ve && (m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = k.makeSpan(["mop"], c, e);
  } else
    l = k.makeSpan(["mop"], [], e);
  return n ? hn(l, t, r, e, e.style, 0, 0) : l;
}, el = (a, e) => {
  for (var t = ze(a.body, e.withFont("mathrm")), r = !0, n = 0; n < t.length; n++) {
    var i = t[n];
    if (!(i instanceof D.SpaceNode))
      if (i instanceof D.MathNode)
        switch (i.type) {
          case "mi":
          case "mn":
          case "ms":
          case "mspace":
          case "mtext":
            break;
          case "mo": {
            var l = i.children[0];
            i.children.length === 1 && l instanceof D.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
            break;
          }
          default:
            r = !1;
        }
      else
        r = !1;
  }
  if (r) {
    var o = t.map((m) => m.toText()).join("");
    t = [new D.TextNode(o)];
  }
  var c = new D.MathNode("mi", t);
  c.setAttribute("mathvariant", "normal");
  var p = new D.MathNode("mo", [Xe("⁡", "text")]);
  return a.parentIsSupSub ? new D.MathNode("mrow", [c, p]) : D.newDocumentFragment([c, p]);
};
$({
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
      body: be(n),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: mn,
  mathmlBuilder: el
});
h("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Ot({
  type: "ordgroup",
  htmlBuilder(a, e) {
    return a.semisimple ? k.makeFragment(ke(a.body, e, !1)) : k.makeSpan(["mord"], ke(a.body, e, !0), e);
  },
  mathmlBuilder(a, e) {
    return St(a.body, e, !0);
  }
});
$({
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
    var t = re(a.body, e.havingCrampedStyle()), r = k.makeLineSpan("overline-line", e), n = e.fontMetrics().defaultRuleThickness, i = k.makeVList({
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
    return k.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(a, e) {
    var t = new D.MathNode("mo", [new D.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new D.MathNode("mover", [le(a.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
$({
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
      body: be(r)
    };
  },
  htmlBuilder: (a, e) => {
    var t = ke(a.body, e.withPhantom(), !1);
    return k.makeFragment(t);
  },
  mathmlBuilder: (a, e) => {
    var t = ze(a.body, e);
    return new D.MathNode("mphantom", t);
  }
});
$({
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
    var t = k.makeSpan([], [re(a.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = k.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), k.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ze(be(a.body), e), r = new D.MathNode("mphantom", t), n = new D.MathNode("mpadded", [r]);
    return n.setAttribute("height", "0px"), n.setAttribute("depth", "0px"), n;
  }
});
$({
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
    var t = k.makeSpan(["inner"], [re(a.body, e.withPhantom())]), r = k.makeSpan(["fix"], []);
    return k.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ze(be(a.body), e), r = new D.MathNode("mphantom", t), n = new D.MathNode("mpadded", [r]);
    return n.setAttribute("width", "0px"), n;
  }
});
$({
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
    return k.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    var t = new D.MathNode("mpadded", [le(a.body, e)]), r = a.dy.number + a.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
$({
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
$({
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
    var t = k.makeSpan(["mord", "rule"], [], e), r = ge(a.width, e), n = ge(a.height, e), i = a.shift ? ge(a.shift, e) : 0;
    return t.style.borderRightWidth = B(r), t.style.borderTopWidth = B(n), t.style.bottom = B(i), t.width = r, t.height = n + i, t.depth = -i, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(a, e) {
    var t = ge(a.width, e), r = ge(a.height, e), n = a.shift ? ge(a.shift, e) : 0, i = e.color && e.getColor() || "black", l = new D.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", B(t)), l.setAttribute("height", B(r));
    var o = new D.MathNode("mpadded", [l]);
    return n >= 0 ? o.setAttribute("height", B(n)) : (o.setAttribute("height", B(n)), o.setAttribute("depth", B(-n))), o.setAttribute("voffset", B(n)), o;
  }
});
function fn(a, e, t) {
  for (var r = ke(a, e, !1), n = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < r.length; i++) {
    var l = r[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(r[i].classes, e.sizingClasses(t)) : r[i].classes[l + 1] === "reset-size" + e.size && (r[i].classes[l + 1] = "reset-size" + t.size), r[i].height *= n, r[i].depth *= n;
  }
  return k.makeFragment(r);
}
var la = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], tl = (a, e) => {
  var t = e.havingSize(a.size);
  return fn(a.body, t, e);
};
$({
  type: "sizing",
  names: la,
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
      size: la.indexOf(r) + 1,
      body: i
    };
  },
  htmlBuilder: tl,
  mathmlBuilder: (a, e) => {
    var t = e.havingSize(a.size), r = ze(a.body, t), n = new D.MathNode("mstyle", r);
    return n.setAttribute("mathsize", B(t.sizeMultiplier)), n;
  }
});
$({
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
      for (var o = "", c = 0; c < l.body.length; ++c) {
        var p = l.body[c];
        if (o = p.text, o === "t")
          n = !0;
        else if (o === "b")
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
    var t = k.makeSpan([], [re(a.body, e)]);
    if (!a.smashHeight && !a.smashDepth)
      return t;
    if (a.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (a.smashDepth && (t.depth = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].depth = 0;
    var i = k.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return k.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new D.MathNode("mpadded", [le(a.body, e)]);
    return a.smashHeight && t.setAttribute("height", "0px"), a.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
$({
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
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = k.wrapFragment(t, e);
    var r = e.fontMetrics(), n = r.defaultRuleThickness, i = n;
    e.style.id < V.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = n + i / 4, o = t.height + t.depth + l + n, {
      span: c,
      ruleWidth: p,
      advanceWidth: m
    } = ht.sqrtImage(o, e), v = c.height - p;
    v > t.height + t.depth + l && (l = (l + v - t.height - t.depth) / 2);
    var x = c.height - t.height - l - p;
    t.style.paddingLeft = B(m);
    var b = k.makeVList({
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
      var O = e.havingStyle(V.SCRIPTSCRIPT), S = re(a.index, O, e), I = 0.6 * (b.height - b.depth), T = k.makeVList({
        positionType: "shift",
        positionData: -I,
        children: [{
          type: "elem",
          elem: S
        }]
      }, e), w = k.makeSpan(["root"], [T]);
      return k.makeSpan(["mord", "sqrt"], [w, b], e);
    } else
      return k.makeSpan(["mord", "sqrt"], [b], e);
  },
  mathmlBuilder(a, e) {
    var {
      body: t,
      index: r
    } = a;
    return r ? new D.MathNode("mroot", [le(t, e), le(r, e)]) : new D.MathNode("msqrt", [le(t, e)]);
  }
});
var oa = {
  display: V.DISPLAY,
  text: V.TEXT,
  script: V.SCRIPT,
  scriptscript: V.SCRIPTSCRIPT
};
$({
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
    var t = oa[a.style], r = e.havingStyle(t).withFont("");
    return fn(a.body, r, e);
  },
  mathmlBuilder(a, e) {
    var t = oa[a.style], r = e.havingStyle(t), n = ze(a.body, r), i = new D.MathNode("mstyle", n), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = l[a.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var rl = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var n = r.limits && (t.style.size === V.DISPLAY.size || r.alwaysHandleSupSub);
      return n ? Ft : null;
    } else if (r.type === "operatorname") {
      var i = r.alwaysHandleSupSub && (t.style.size === V.DISPLAY.size || r.limits);
      return i ? mn : null;
    } else {
      if (r.type === "accent")
        return W.isCharacterBox(r.base) ? g0 : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? dn : null;
      } else
        return null;
    }
  else
    return null;
};
Ot({
  type: "supsub",
  htmlBuilder(a, e) {
    var t = rl(a, e);
    if (t)
      return t(a, e);
    var {
      base: r,
      sup: n,
      sub: i
    } = a, l = re(r, e), o, c, p = e.fontMetrics(), m = 0, v = 0, x = r && W.isCharacterBox(r);
    if (n) {
      var b = e.havingStyle(e.style.sup());
      o = re(n, b, e), x || (m = l.height - b.fontMetrics().supDrop * b.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var O = e.havingStyle(e.style.sub());
      c = re(i, O, e), x || (v = l.depth + O.fontMetrics().subDrop * O.sizeMultiplier / e.sizeMultiplier);
    }
    var S;
    e.style === V.DISPLAY ? S = p.sup1 : e.style.cramped ? S = p.sup3 : S = p.sup2;
    var I = e.sizeMultiplier, T = B(0.5 / p.ptPerEm / I), w = null;
    if (c) {
      var E = a.base && a.base.type === "op" && a.base.name && (a.base.name === "\\oiint" || a.base.name === "\\oiiint");
      (l instanceof Ve || E) && (w = B(-l.italic));
    }
    var A;
    if (o && c) {
      m = Math.max(m, S, o.depth + 0.25 * p.xHeight), v = Math.max(v, p.sub2);
      var R = p.defaultRuleThickness, N = 4 * R;
      if (m - o.depth - (c.height - v) < N) {
        v = N - (m - o.depth) + c.height;
        var C = 0.8 * p.xHeight - (m - o.depth);
        C > 0 && (m += C, v -= C);
      }
      var F = [{
        type: "elem",
        elem: c,
        shift: v,
        marginRight: T,
        marginLeft: w
      }, {
        type: "elem",
        elem: o,
        shift: -m,
        marginRight: T
      }];
      A = k.makeVList({
        positionType: "individualShift",
        children: F
      }, e);
    } else if (c) {
      v = Math.max(v, p.sub1, c.height - 0.8 * p.xHeight);
      var z = [{
        type: "elem",
        elem: c,
        marginLeft: w,
        marginRight: T
      }];
      A = k.makeVList({
        positionType: "shift",
        positionData: v,
        children: z
      }, e);
    } else if (o)
      m = Math.max(m, S, o.depth + 0.25 * p.xHeight), A = k.makeVList({
        positionType: "shift",
        positionData: -m,
        children: [{
          type: "elem",
          elem: o,
          marginRight: T
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var ae = e0(l, "right") || "mord";
    return k.makeSpan([ae], [l, k.makeSpan(["msupsub"], [A])], e);
  },
  mathmlBuilder(a, e) {
    var t = !1, r, n;
    a.base && a.base.type === "horizBrace" && (n = !!a.sup, n === a.base.isOver && (t = !0, r = a.base.isOver)), a.base && (a.base.type === "op" || a.base.type === "operatorname") && (a.base.parentIsSupSub = !0);
    var i = [le(a.base, e)];
    a.sub && i.push(le(a.sub, e)), a.sup && i.push(le(a.sup, e));
    var l;
    if (t)
      l = r ? "mover" : "munder";
    else if (a.sub)
      if (a.sup) {
        var p = a.base;
        p && p.type === "op" && p.limits && e.style === V.DISPLAY || p && p.type === "operatorname" && p.alwaysHandleSupSub && (e.style === V.DISPLAY || p.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var c = a.base;
        c && c.type === "op" && c.limits && (e.style === V.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === V.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var o = a.base;
      o && o.type === "op" && o.limits && (e.style === V.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === V.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new D.MathNode(l, i);
  }
});
Ot({
  type: "atom",
  htmlBuilder(a, e) {
    return k.mathsym(a.text, a.mode, e, ["m" + a.family]);
  },
  mathmlBuilder(a, e) {
    var t = new D.MathNode("mo", [Xe(a.text, a.mode)]);
    if (a.family === "bin") {
      var r = m0(a, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else
      a.family === "punct" ? t.setAttribute("separator", "true") : (a.family === "open" || a.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var gn = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Ot({
  type: "mathord",
  htmlBuilder(a, e) {
    return k.makeOrd(a, e, "mathord");
  },
  mathmlBuilder(a, e) {
    var t = new D.MathNode("mi", [Xe(a.text, a.mode, e)]), r = m0(a, e) || "italic";
    return r !== gn[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
Ot({
  type: "textord",
  htmlBuilder(a, e) {
    return k.makeOrd(a, e, "textord");
  },
  mathmlBuilder(a, e) {
    var t = Xe(a.text, a.mode, e), r = m0(a, e) || "normal", n;
    return a.mode === "text" ? n = new D.MathNode("mtext", [t]) : /[0-9]/.test(a.text) ? n = new D.MathNode("mn", [t]) : a.text === "\\prime" ? n = new D.MathNode("mo", [t]) : n = new D.MathNode("mi", [t]), r !== gn[n.type] && n.setAttribute("mathvariant", r), n;
  }
});
var qr = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Hr = {
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
Ot({
  type: "spacing",
  htmlBuilder(a, e) {
    if (Hr.hasOwnProperty(a.text)) {
      var t = Hr[a.text].className || "";
      if (a.mode === "text") {
        var r = k.makeOrd(a, e, "textord");
        return r.classes.push(t), r;
      } else
        return k.makeSpan(["mspace", t], [k.mathsym(a.text, a.mode, e)], e);
    } else {
      if (qr.hasOwnProperty(a.text))
        return k.makeSpan(["mspace", qr[a.text]], [], e);
      throw new L('Unknown type of space "' + a.text + '"');
    }
  },
  mathmlBuilder(a, e) {
    var t;
    if (Hr.hasOwnProperty(a.text))
      t = new D.MathNode("mtext", [new D.TextNode(" ")]);
    else {
      if (qr.hasOwnProperty(a.text))
        return new D.MathNode("mspace");
      throw new L('Unknown type of space "' + a.text + '"');
    }
    return t;
  }
});
var ua = () => {
  var a = new D.MathNode("mtd", []);
  return a.setAttribute("width", "50%"), a;
};
Ot({
  type: "tag",
  mathmlBuilder(a, e) {
    var t = new D.MathNode("mtable", [new D.MathNode("mtr", [ua(), new D.MathNode("mtd", [St(a.body, e)]), ua(), new D.MathNode("mtd", [St(a.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var ca = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, da = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, al = {
  "\\textit": "textit",
  "\\textup": "textup"
}, ha = (a, e) => {
  var t = a.font;
  return t ? ca[t] ? e.withTextFontFamily(ca[t]) : da[t] ? e.withTextFontWeight(da[t]) : e.withTextFontShape(al[t]) : e;
};
$({
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
      body: be(n),
      font: r
    };
  },
  htmlBuilder(a, e) {
    var t = ha(a, e), r = ke(a.body, t, !0);
    return k.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(a, e) {
    var t = ha(a, e);
    return St(a.body, t);
  }
});
$({
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
    var t = re(a.body, e), r = k.makeLineSpan("underline-line", e), n = e.fontMetrics().defaultRuleThickness, i = k.makeVList({
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
    return k.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(a, e) {
    var t = new D.MathNode("mo", [new D.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new D.MathNode("munder", [le(a.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
$({
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
    return k.makeVList({
      positionType: "shift",
      positionData: n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    return new D.MathNode("mpadded", [le(a.body, e)], ["vcenter"]);
  }
});
$({
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
    for (var t = pa(a), r = [], n = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), r.push(k.makeSymbol(l, "Typewriter-Regular", a.mode, n, ["mord", "texttt"]));
    }
    return k.makeSpan(["mord", "text"].concat(n.sizingClasses(e)), k.tryCombineChars(r), n);
  },
  mathmlBuilder(a, e) {
    var t = new D.TextNode(pa(a)), r = new D.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var pa = (a) => a.body.replace(/ /g, a.star ? "␣" : " "), wt = Ba, vn = `[ \r
	]`, nl = "\\\\[a-zA-Z@]+", il = "\\\\[^\uD800-\uDFFF]", sl = "(" + nl + ")" + vn + "*", ll = `\\\\(
|[ \r	]+
?)[ \r	]*`, n0 = "[̀-ͯ]", ol = new RegExp(n0 + "+$"), ul = "(" + vn + "+)|" + // whitespace
(ll + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(n0 + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(n0 + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + sl) + // \macroName + spaces
("|" + il + ")");
class ma {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(ul, "g"), this.catcodes = {
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
      return new Ge("EOF", new $e(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new L("Unexpected character: '" + e[t] + "'", new Ge(e[t], new $e(this, t, t + 1)));
    var n = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new Ge(n, new $e(this, t, this.tokenRegex.lastIndex));
  }
}
class cl {
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
var dl = sn;
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
var fa = {
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
    if (r = fa[e.text], r == null || r >= t)
      throw new L("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = fa[a.future().text]) != null && n < t; )
      r *= t, r += n, a.popToken();
  }
  return "\\@char{" + r + "}";
});
var k0 = (a, e, t) => {
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
    for (var o = "", c = a.expandNextToken(); c.text !== "]" && c.text !== "EOF"; )
      o += c.text, c = a.expandNextToken();
    if (!o.match(/^\s*[0-9]+\s*$/))
      throw new L("Invalid number of arguments: " + o);
    l = parseInt(o), r = a.consumeArg().tokens;
  }
  return a.macros.set(n, {
    tokens: r,
    numArgs: l
  }), "";
};
h("\\newcommand", (a) => k0(a, !1, !0));
h("\\renewcommand", (a) => k0(a, !0, !1));
h("\\providecommand", (a) => k0(a, !0, !0));
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
  return console.log(e, a.macros.get(t), wt[t], ce.math[t], ce.text[t]), "";
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
var ga = {
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
  return t in ga ? e = ga[t] : (t.slice(0, 4) === "\\not" || t in ce.math && W.contains(["bin", "rel"], ce.math[t].group)) && (e = "\\dotsb"), e;
});
var T0 = {
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
  return e in T0 ? "\\ldots\\," : "\\ldots";
});
h("\\dotsc", function(a) {
  var e = a.future().text;
  return e in T0 && e !== "," ? "\\ldots\\," : "\\ldots";
});
h("\\cdots", function(a) {
  var e = a.future().text;
  return e in T0 ? "\\@cdots\\," : "\\@cdots";
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
var bn = B(et["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * et["Main-Regular"]["A".charCodeAt(0)][1]);
h("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + bn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
h("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + bn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var yn = (a) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, n = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var c = (v) => (x) => {
    a && (x.macros.set("|", l), n.length && x.macros.set("\\|", o));
    var b = v;
    if (!v && n.length) {
      var O = x.future();
      O.text === "|" && (x.popToken(), b = !0);
    }
    return {
      tokens: b ? n : r,
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
h("\\bra@ket", yn(!1));
h("\\bra@set", yn(!0));
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
var wn = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class hl {
  constructor(e, t, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new cl(dl, t.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new ma(e, this.settings);
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
    return this.pushToken(new Ge("EOF", r.loc)), this.pushTokens(n), t.range(r, "");
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
    var n = this.future(), i, l = 0, o = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++l;
      else if (i.text === "}") {
        if (--l, l === -1)
          throw new L("Extra }", i);
      } else if (i.text === "EOF")
        throw new L("Unexpected end of input in a macro argument, expected '" + (e && r ? e[o] : "}") + "'", i);
      if (e && r)
        if ((l === 0 || l === 1 && e[o] === "{") && i.text === e[o]) {
          if (++o, o === e.length) {
            t.splice(-o, o);
            break;
          }
        } else
          o = 0;
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
    for (var l = [], o = 0; o < e; o++)
      l.push(this.consumeArg(t && t[o + 1]).tokens);
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
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o];
        if (c.text === "#") {
          if (o === 0)
            throw new L("Incomplete placeholder at end of macro body", c);
          if (c = i[--o], c.text === "#")
            i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(c.text))
            i.splice(o, 2, ...l[+c.text - 1]);
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
      if (e instanceof Ge)
        return e.treatAsRelax && (e.text = "\\relax"), this.stack.pop();
    }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new Ge(e)]) : void 0;
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
      n instanceof Ge && (n.treatAsRelax && (n.noexpand = !1, n.treatAsRelax = !1), t.push(this.stack.pop()));
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
      for (var o = new ma(n, this.settings), c = [], p = o.lex(); p.text !== "EOF"; )
        c.push(p), p = o.lex();
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
    return this.macros.has(e) || wt.hasOwnProperty(e) || ce.math.hasOwnProperty(e) || ce.text.hasOwnProperty(e) || wn.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : wt.hasOwnProperty(e) && !wt[e].primitive;
  }
}
var va = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, ur = Object.freeze({
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
}), Gr = {
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
}, ba = {
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
class Xt {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new hl(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
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
    this.consume(), this.gullet.pushToken(new Ge("}")), this.gullet.pushTokens(e);
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
      if (Xt.endOfExpression.indexOf(n.text) !== -1 || t && n.text === t || e && wt[n.text] && wt[n.text].infix)
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
      var i, l, o = e.slice(0, t), c = e.slice(t + 1);
      o.length === 1 && o[0].type === "ordgroup" ? i = o[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: o
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
        var o = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, c = [o];
        for (this.consume(); this.fetch().text === "'"; )
          c.push(o), this.consume();
        this.fetch().text === "^" && c.push(this.handleSupSubscript("superscript")), r = {
          type: "ordgroup",
          mode: this.mode,
          body: c
        };
      } else if (ur[i.text]) {
        var p = ur[i.text], m = va.test(i.text);
        for (this.consume(); ; ) {
          var v = this.fetch().text;
          if (!ur[v] || va.test(v) !== m)
            break;
          this.consume(), p += ur[v];
        }
        var x = new Xt(p, this.settings).parse();
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
    var r = this.fetch(), n = r.text, i = wt[n];
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
      optArgs: o
    } = this.parseArguments(n, i);
    return this.callFunction(n, l, o, r, e);
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
    }, o = wt[e];
    if (o && o.handler)
      return o.handler(l, t, r);
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
      var o = t.argTypes && t.argTypes[l], c = l < t.numOptionalArgs;
      (t.primitive && o == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && i[0] == null) && (o = "primitive");
      var p = this.parseGroupOfType("argument to '" + e + "'", o, c);
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
    if (!Na(i))
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
      var o = this.parseExpression(!1, l), c = this.fetch();
      this.expect(l), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: $e.range(r, c),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: n === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && n[0] === "\\" && !wn.hasOwnProperty(n)) {
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
        loc: $e.range(n, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: $e.range(n, e[r + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[r + 1].text === i && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: $e.range(n, e[r + 1]),
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
    ba.hasOwnProperty(t[0]) && !ce[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = ba[t[0]] + t.slice(1));
    var i = ol.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (ce[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Qr.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = ce[this.mode][t].group, c = $e.range(e), p;
      if (es.hasOwnProperty(o)) {
        var m = o;
        p = {
          type: "atom",
          mode: this.mode,
          family: m,
          loc: c,
          text: t
        };
      } else
        p = {
          type: o,
          mode: this.mode,
          loc: c,
          text: t
        };
      l = p;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (Ra(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: $e.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var v = 0; v < i[0].length; v++) {
        var x = i[0][v];
        if (!Gr[x])
          throw new L("Unknown accent ' " + x + "'", e);
        var b = Gr[x][this.mode] || Gr[x].text;
        if (!b)
          throw new L("Accent " + x + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: $e.range(e),
          label: b,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: l
        };
      }
    return l;
  }
}
Xt.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var A0 = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new Xt(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var n = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new L("\\tag works only in display equations");
    n = [{
      type: "tag",
      mode: "text",
      body: n,
      tag: r.subparse([new Ge("\\df@tag")])
    }];
  }
  return n;
}, xn = function(e, t, r) {
  t.textContent = "";
  var n = I0(e, r).toNode();
  t.appendChild(n);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), xn = function() {
  throw new L("KaTeX doesn't work in quirks mode.");
});
var pl = function(e, t) {
  var r = I0(e, t).toMarkup();
  return r;
}, ml = function(e, t) {
  var r = new o0(t);
  return A0(e, r);
}, En = function(e, t, r) {
  if (r.throwOnError || !(e instanceof L))
    throw e;
  var n = k.makeSpan(["katex-error"], [new Ve(t)]);
  return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + r.errorColor), n;
}, I0 = function(e, t) {
  var r = new o0(t);
  try {
    var n = A0(e, r);
    return Ss(n, e, r);
  } catch (i) {
    return En(i, e, r);
  }
}, fl = function(e, t) {
  var r = new o0(t);
  try {
    var n = A0(e, r);
    return ks(n, e, r);
  } catch (i) {
    return En(i, e, r);
  }
}, gl = {
  /**
   * Current KaTeX version
   */
  version: "0.16.4",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: xn,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: pl,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: L,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: pr,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: ml,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: I0,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: fl,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Xi,
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
    Span: Kt,
    Anchor: d0,
    SymbolNode: Ve,
    SvgNode: pt,
    PathNode: Et,
    LineNode: Jr
  }
};
const vl = ["innerHTML"], bl = {
  name: "MarkdownPreview"
}, yl = /* @__PURE__ */ i0({
  ...bl,
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
    let t = fe();
    const r = (S) => {
      const I = (T) => {
        T.preventDefault(), T.clipboardData && T.clipboardData.setData("text/plain", S), document.removeEventListener("copy", I);
      };
      document.addEventListener("copy", I), document.execCommand("copy");
    }, n = (S, I, T, w = (E) => E) => {
      if (I instanceof Array) {
        let E = "", A = !1, R = 0, N = "";
        for (let C = 0; C < S.length; C++) {
          for (const F of I)
            if (!A && S.slice(C, C + F.start.length) == F.start) {
              A = !0, E += w(S.slice(R, C)), C += F.start.length, R = C, N = F.end;
              break;
            }
          A && S.slice(C, C + N.length) == N && (A = !1, E += T(S.slice(R, C)), C += N.length, R = C);
        }
        return E + w(S.slice(R));
      } else {
        let {
          start: E,
          end: A
        } = I, R = "", N = !1, C = 0;
        for (let F = 0; F < S.length; F++)
          !N && S.slice(F, F + E.length) == E ? (N = !0, R += w(S.slice(C, F)), F += E.length, C = F) : N && S.slice(F, F + A.length) == A && (N = !1, R += T(S.slice(C, F)), F += A.length, C = F);
        return R + w(S.slice(C));
      }
    }, i = (S) => n(S, [{
      start: "```",
      end: "```"
    }, {
      start: "~~~",
      end: "~~~"
    }], c, l), l = (S) => {
      try {
        const I = K.parse(S).replaceAll("<a ", '<a target="_blank" ').replaceAll(`>
`, ">");
        return n(I, {
          start: "<pre><code>",
          end: "</code></pre>"
        }, p, o);
      } catch (I) {
        return "<span style='color: red'>[markdown 解析错误]</span><br>" + I + "<br>" + S;
      }
    }, o = (S) => {
      try {
        return n(S, {
          start: "$$",
          end: "$$"
        }, gl.renderToString);
      } catch (I) {
        return "<span style='color: red'>[数学算式解析错误]</span><br>" + I + "<br>" + S;
      }
    }, c = (S) => {
      try {
        let I = S.replaceAll("\\`", "`"), T = "";
        try {
          let w = I.indexOf(`
`);
          T = I.slice(0, w).trim(), I = I.slice(w + 1);
        } catch {
          I = I.slice(I.indexOf(`
`) + 1);
        }
        return m(I, T);
      } catch (I) {
        return "<span style='color: red'>[代码解析错误]</span><br>" + I + "<br>" + S;
      }
    }, p = (S, I = "", T = "") => {
      S[S.length - 1] == `
` && (S = S.slice(0, S.length - 1));
      let w = S.split(`
`), E = "<code>" + I;
      for (let R = 0; R < w.length; R++)
        E += '<span class="count"></span>' + w[R] + `
`;
      let A = '<div class="code-copy-button iconfont icon-copy" title="复制"/>' + T;
      return E += "</code>", e.codeFold && w.length > e.codeFoldThreshold ? E = '<pre class="fold ' + e.codeTheme + '">' + E + '<div class="code-fold-button show">展开</div>' + A + "</pre>" : E = '<pre class="' + e.codeTheme + '">' + E + A + "</pre>", E;
    }, m = (S, I) => {
      for (const T of ya)
        if (T == I) {
          S = B0.highlight(S, B0.languages[I], I);
          break;
        }
      return p(S, "", '<div class="code-language">' + I + "</div>");
    }, v = (S) => {
      let I = S.target, T = I.parentNode;
      T.classList.contains("fold") ? (T.classList.remove("fold"), I.textContent = "收起", I.classList.remove("show")) : (T.scrollHeight > 600 && window.scrollTo({
        top: T.offsetTop
      }), T.classList.add("fold"), I.textContent = "展开", I.classList.add("show"));
    }, x = (S) => {
      let I = S.target;
      try {
        let T = I.parentElement.getElementsByTagName("code")[0], w = T.textContent ? T.textContent : "";
        r(w), alert("已复制");
      } catch (T) {
        alert("复制失败:" + T);
      }
    }, b = () => {
      if (t.value == null)
        return;
      if (e.codeFold) {
        const I = Array.from(t.value.querySelectorAll(".code-fold-button"));
        for (let T = 0; T < I.length; T++)
          I[T].removeEventListener("click", v), I[T].addEventListener("click", v);
      }
      const S = Array.from(t.value.querySelectorAll(".code-copy-button"));
      for (let I = 0; I < S.length; I++)
        S[I].removeEventListener("click", x), S[I].addEventListener("click", x);
    };
    let O = 0;
    return cr(() => {
      b(), O = setInterval(b, 1e3);
    }), Yr(() => {
      clearInterval(O);
    }), (S, I) => (Ee(), Se("div", {
      ref_key: "markdownCard",
      ref: t,
      class: "markdown-card",
      innerHTML: i(e.markdownText)
    }, null, 8, vl));
  }
});
const Sn = [yl, Jn, vi], kn = function(a) {
  Sn.forEach((e) => {
    a.component(e.name, e);
  });
};
typeof window < "u" && window.Vue && kn(window.Vue);
const El = {
  install: kn,
  ...Sn
};
export {
  El as default
};
