import { g as be, z as we, y as ve, c as ct, s as te, b as _e, a as ke, m as Le, A as Pe, l as K, d as kt, e as Ie, h as _t, i as Ne, x as C, j as Lt, k as Pt, V as ee, W as Ae } from "./index-54d0746e.js";
import { s as Se } from "./selectAll-d981844c.js";
import "vue";
var Bt = function() {
  var t = function(rt, m, w, _) {
    for (w = w || {}, _ = rt.length; _--; w[rt[_]] = m)
      ;
    return w;
  }, e = [1, 2], s = [1, 3], i = [1, 5], n = [1, 7], a = [2, 5], o = [1, 15], l = [1, 17], p = [1, 19], h = [1, 21], T = [1, 22], y = [1, 23], u = [1, 29], x = [1, 30], b = [1, 31], k = [1, 32], N = [1, 33], M = [1, 34], P = [1, 35], B = [1, 36], V = [1, 37], z = [1, 38], G = [1, 39], Y = [1, 40], D = [1, 42], X = [1, 43], q = [1, 45], F = [1, 46], H = [1, 47], J = [1, 48], Q = [1, 49], E = [1, 50], L = [1, 53], v = [1, 4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 50, 51, 52, 53, 54, 56, 57, 62, 63, 64, 65, 73, 83], U = [4, 5, 21, 54, 56], I = [4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 50, 54, 56, 57, 62, 63, 64, 65, 73, 83], Kt = [4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 50, 53, 54, 56, 57, 62, 63, 64, 65, 73, 83], Gt = [4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 50, 52, 54, 56, 57, 62, 63, 64, 65, 73, 83], Xt = [4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 50, 51, 54, 56, 57, 62, 63, 64, 65, 73, 83], at = [71, 72, 73], et = [1, 125], Jt = [1, 4, 5, 7, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 50, 51, 52, 53, 54, 56, 57, 62, 63, 64, 65, 73, 83], Mt = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, SPACE: 4, NEWLINE: 5, directive: 6, SD: 7, document: 8, line: 9, statement: 10, box_section: 11, box_line: 12, participant_statement: 13, openDirective: 14, typeDirective: 15, closeDirective: 16, ":": 17, argDirective: 18, box: 19, restOfLine: 20, end: 21, signal: 22, autonumber: 23, NUM: 24, off: 25, activate: 26, actor: 27, deactivate: 28, note_statement: 29, links_statement: 30, link_statement: 31, properties_statement: 32, details_statement: 33, title: 34, legacy_title: 35, acc_title: 36, acc_title_value: 37, acc_descr: 38, acc_descr_value: 39, acc_descr_multiline_value: 40, loop: 41, rect: 42, opt: 43, alt: 44, else_sections: 45, par: 46, par_sections: 47, critical: 48, option_sections: 49, break: 50, option: 51, and: 52, else: 53, participant: 54, AS: 55, participant_actor: 56, note: 57, placement: 58, text2: 59, over: 60, actor_pair: 61, links: 62, link: 63, properties: 64, details: 65, spaceList: 66, ",": 67, left_of: 68, right_of: 69, signaltype: 70, "+": 71, "-": 72, ACTOR: 73, SOLID_OPEN_ARROW: 74, DOTTED_OPEN_ARROW: 75, SOLID_ARROW: 76, DOTTED_ARROW: 77, SOLID_CROSS: 78, DOTTED_CROSS: 79, SOLID_POINT: 80, DOTTED_POINT: 81, TXT: 82, open_directive: 83, type_directive: 84, arg_directive: 85, close_directive: 86, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NEWLINE", 7: "SD", 17: ":", 19: "box", 20: "restOfLine", 21: "end", 23: "autonumber", 24: "NUM", 25: "off", 26: "activate", 28: "deactivate", 34: "title", 35: "legacy_title", 36: "acc_title", 37: "acc_title_value", 38: "acc_descr", 39: "acc_descr_value", 40: "acc_descr_multiline_value", 41: "loop", 42: "rect", 43: "opt", 44: "alt", 46: "par", 48: "critical", 50: "break", 51: "option", 52: "and", 53: "else", 54: "participant", 55: "AS", 56: "participant_actor", 57: "note", 60: "over", 62: "links", 63: "link", 64: "properties", 65: "details", 67: ",", 68: "left_of", 69: "right_of", 71: "+", 72: "-", 73: "ACTOR", 74: "SOLID_OPEN_ARROW", 75: "DOTTED_OPEN_ARROW", 76: "SOLID_ARROW", 77: "DOTTED_ARROW", 78: "SOLID_CROSS", 79: "DOTTED_CROSS", 80: "SOLID_POINT", 81: "DOTTED_POINT", 82: "TXT", 83: "open_directive", 84: "type_directive", 85: "arg_directive", 86: "close_directive" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [3, 2], [8, 0], [8, 2], [9, 2], [9, 1], [9, 1], [11, 0], [11, 2], [12, 2], [12, 1], [12, 1], [6, 4], [6, 6], [10, 1], [10, 4], [10, 2], [10, 4], [10, 3], [10, 3], [10, 2], [10, 3], [10, 3], [10, 2], [10, 2], [10, 2], [10, 2], [10, 2], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [10, 1], [49, 1], [49, 4], [47, 1], [47, 4], [45, 1], [45, 4], [13, 5], [13, 3], [13, 5], [13, 3], [29, 4], [29, 4], [30, 3], [31, 3], [32, 3], [33, 3], [66, 2], [66, 1], [61, 3], [61, 1], [58, 1], [58, 1], [22, 5], [22, 5], [22, 4], [27, 1], [70, 1], [70, 1], [70, 1], [70, 1], [70, 1], [70, 1], [70, 1], [70, 1], [59, 1], [14, 1], [15, 1], [18, 1], [16, 1]],
    performAction: function(m, w, _, g, A, c, Tt) {
      var d = c.length - 1;
      switch (A) {
        case 4:
          return g.apply(c[d]), c[d];
        case 5:
        case 10:
          this.$ = [];
          break;
        case 6:
        case 11:
          c[d - 1].push(c[d]), this.$ = c[d - 1];
          break;
        case 7:
        case 8:
        case 12:
        case 13:
          this.$ = c[d];
          break;
        case 9:
        case 14:
          this.$ = [];
          break;
        case 18:
          c[d - 1].unshift({ type: "boxStart", boxData: g.parseBoxData(c[d - 2]) }), c[d - 1].push({ type: "boxEnd", boxText: c[d - 2] }), this.$ = c[d - 1];
          break;
        case 20:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number(c[d - 2]), sequenceIndexStep: Number(c[d - 1]), sequenceVisible: !0, signalType: g.LINETYPE.AUTONUMBER };
          break;
        case 21:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number(c[d - 1]), sequenceIndexStep: 1, sequenceVisible: !0, signalType: g.LINETYPE.AUTONUMBER };
          break;
        case 22:
          this.$ = { type: "sequenceIndex", sequenceVisible: !1, signalType: g.LINETYPE.AUTONUMBER };
          break;
        case 23:
          this.$ = { type: "sequenceIndex", sequenceVisible: !0, signalType: g.LINETYPE.AUTONUMBER };
          break;
        case 24:
          this.$ = { type: "activeStart", signalType: g.LINETYPE.ACTIVE_START, actor: c[d - 1] };
          break;
        case 25:
          this.$ = { type: "activeEnd", signalType: g.LINETYPE.ACTIVE_END, actor: c[d - 1] };
          break;
        case 31:
          g.setDiagramTitle(c[d].substring(6)), this.$ = c[d].substring(6);
          break;
        case 32:
          g.setDiagramTitle(c[d].substring(7)), this.$ = c[d].substring(7);
          break;
        case 33:
          this.$ = c[d].trim(), g.setAccTitle(this.$);
          break;
        case 34:
        case 35:
          this.$ = c[d].trim(), g.setAccDescription(this.$);
          break;
        case 36:
          c[d - 1].unshift({ type: "loopStart", loopText: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.LOOP_START }), c[d - 1].push({ type: "loopEnd", loopText: c[d - 2], signalType: g.LINETYPE.LOOP_END }), this.$ = c[d - 1];
          break;
        case 37:
          c[d - 1].unshift({ type: "rectStart", color: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.RECT_START }), c[d - 1].push({ type: "rectEnd", color: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.RECT_END }), this.$ = c[d - 1];
          break;
        case 38:
          c[d - 1].unshift({ type: "optStart", optText: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.OPT_START }), c[d - 1].push({ type: "optEnd", optText: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.OPT_END }), this.$ = c[d - 1];
          break;
        case 39:
          c[d - 1].unshift({ type: "altStart", altText: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.ALT_START }), c[d - 1].push({ type: "altEnd", signalType: g.LINETYPE.ALT_END }), this.$ = c[d - 1];
          break;
        case 40:
          c[d - 1].unshift({ type: "parStart", parText: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.PAR_START }), c[d - 1].push({ type: "parEnd", signalType: g.LINETYPE.PAR_END }), this.$ = c[d - 1];
          break;
        case 41:
          c[d - 1].unshift({ type: "criticalStart", criticalText: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.CRITICAL_START }), c[d - 1].push({ type: "criticalEnd", signalType: g.LINETYPE.CRITICAL_END }), this.$ = c[d - 1];
          break;
        case 42:
          c[d - 1].unshift({ type: "breakStart", breakText: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.BREAK_START }), c[d - 1].push({ type: "breakEnd", optText: g.parseMessage(c[d - 2]), signalType: g.LINETYPE.BREAK_END }), this.$ = c[d - 1];
          break;
        case 45:
          this.$ = c[d - 3].concat([{ type: "option", optionText: g.parseMessage(c[d - 1]), signalType: g.LINETYPE.CRITICAL_OPTION }, c[d]]);
          break;
        case 47:
          this.$ = c[d - 3].concat([{ type: "and", parText: g.parseMessage(c[d - 1]), signalType: g.LINETYPE.PAR_AND }, c[d]]);
          break;
        case 49:
          this.$ = c[d - 3].concat([{ type: "else", altText: g.parseMessage(c[d - 1]), signalType: g.LINETYPE.ALT_ELSE }, c[d]]);
          break;
        case 50:
          c[d - 3].type = "addParticipant", c[d - 3].description = g.parseMessage(c[d - 1]), this.$ = c[d - 3];
          break;
        case 51:
          c[d - 1].type = "addParticipant", this.$ = c[d - 1];
          break;
        case 52:
          c[d - 3].type = "addActor", c[d - 3].description = g.parseMessage(c[d - 1]), this.$ = c[d - 3];
          break;
        case 53:
          c[d - 1].type = "addActor", this.$ = c[d - 1];
          break;
        case 54:
          this.$ = [c[d - 1], { type: "addNote", placement: c[d - 2], actor: c[d - 1].actor, text: c[d] }];
          break;
        case 55:
          c[d - 2] = [].concat(c[d - 1], c[d - 1]).slice(0, 2), c[d - 2][0] = c[d - 2][0].actor, c[d - 2][1] = c[d - 2][1].actor, this.$ = [c[d - 1], { type: "addNote", placement: g.PLACEMENT.OVER, actor: c[d - 2].slice(0, 2), text: c[d] }];
          break;
        case 56:
          this.$ = [c[d - 1], { type: "addLinks", actor: c[d - 1].actor, text: c[d] }];
          break;
        case 57:
          this.$ = [c[d - 1], { type: "addALink", actor: c[d - 1].actor, text: c[d] }];
          break;
        case 58:
          this.$ = [c[d - 1], { type: "addProperties", actor: c[d - 1].actor, text: c[d] }];
          break;
        case 59:
          this.$ = [c[d - 1], { type: "addDetails", actor: c[d - 1].actor, text: c[d] }];
          break;
        case 62:
          this.$ = [c[d - 2], c[d]];
          break;
        case 63:
          this.$ = c[d];
          break;
        case 64:
          this.$ = g.PLACEMENT.LEFTOF;
          break;
        case 65:
          this.$ = g.PLACEMENT.RIGHTOF;
          break;
        case 66:
          this.$ = [
            c[d - 4],
            c[d - 1],
            { type: "addMessage", from: c[d - 4].actor, to: c[d - 1].actor, signalType: c[d - 3], msg: c[d] },
            { type: "activeStart", signalType: g.LINETYPE.ACTIVE_START, actor: c[d - 1] }
          ];
          break;
        case 67:
          this.$ = [
            c[d - 4],
            c[d - 1],
            { type: "addMessage", from: c[d - 4].actor, to: c[d - 1].actor, signalType: c[d - 3], msg: c[d] },
            { type: "activeEnd", signalType: g.LINETYPE.ACTIVE_END, actor: c[d - 4] }
          ];
          break;
        case 68:
          this.$ = [c[d - 3], c[d - 1], { type: "addMessage", from: c[d - 3].actor, to: c[d - 1].actor, signalType: c[d - 2], msg: c[d] }];
          break;
        case 69:
          this.$ = { type: "addParticipant", actor: c[d] };
          break;
        case 70:
          this.$ = g.LINETYPE.SOLID_OPEN;
          break;
        case 71:
          this.$ = g.LINETYPE.DOTTED_OPEN;
          break;
        case 72:
          this.$ = g.LINETYPE.SOLID;
          break;
        case 73:
          this.$ = g.LINETYPE.DOTTED;
          break;
        case 74:
          this.$ = g.LINETYPE.SOLID_CROSS;
          break;
        case 75:
          this.$ = g.LINETYPE.DOTTED_CROSS;
          break;
        case 76:
          this.$ = g.LINETYPE.SOLID_POINT;
          break;
        case 77:
          this.$ = g.LINETYPE.DOTTED_POINT;
          break;
        case 78:
          this.$ = g.parseMessage(c[d].trim().substring(1));
          break;
        case 79:
          g.parseDirective("%%{", "open_directive");
          break;
        case 80:
          g.parseDirective(c[d], "type_directive");
          break;
        case 81:
          c[d] = c[d].trim().replace(/'/g, '"'), g.parseDirective(c[d], "arg_directive");
          break;
        case 82:
          g.parseDirective("}%%", "close_directive", "sequence");
          break;
      }
    },
    table: [{ 3: 1, 4: e, 5: s, 6: 4, 7: i, 14: 6, 83: n }, { 1: [3] }, { 3: 8, 4: e, 5: s, 6: 4, 7: i, 14: 6, 83: n }, { 3: 9, 4: e, 5: s, 6: 4, 7: i, 14: 6, 83: n }, { 3: 10, 4: e, 5: s, 6: 4, 7: i, 14: 6, 83: n }, t([1, 4, 5, 19, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 50, 54, 56, 57, 62, 63, 64, 65, 73, 83], a, { 8: 11 }), { 15: 12, 84: [1, 13] }, { 84: [2, 79] }, { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3] }, { 1: [2, 4], 4: o, 5: l, 6: 41, 9: 14, 10: 16, 13: 18, 14: 6, 19: p, 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, { 16: 51, 17: [1, 52], 86: L }, t([17, 86], [2, 80]), t(v, [2, 6]), { 6: 41, 10: 54, 13: 18, 14: 6, 19: p, 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, t(v, [2, 8]), t(v, [2, 9]), t(v, [2, 17]), { 20: [1, 55] }, { 5: [1, 56] }, { 5: [1, 59], 24: [1, 57], 25: [1, 58] }, { 27: 60, 73: E }, { 27: 61, 73: E }, { 5: [1, 62] }, { 5: [1, 63] }, { 5: [1, 64] }, { 5: [1, 65] }, { 5: [1, 66] }, t(v, [2, 31]), t(v, [2, 32]), { 37: [1, 67] }, { 39: [1, 68] }, t(v, [2, 35]), { 20: [1, 69] }, { 20: [1, 70] }, { 20: [1, 71] }, { 20: [1, 72] }, { 20: [1, 73] }, { 20: [1, 74] }, { 20: [1, 75] }, t(v, [2, 43]), { 27: 76, 73: E }, { 27: 77, 73: E }, { 70: 78, 74: [1, 79], 75: [1, 80], 76: [1, 81], 77: [1, 82], 78: [1, 83], 79: [1, 84], 80: [1, 85], 81: [1, 86] }, { 58: 87, 60: [1, 88], 68: [1, 89], 69: [1, 90] }, { 27: 91, 73: E }, { 27: 92, 73: E }, { 27: 93, 73: E }, { 27: 94, 73: E }, t([5, 55, 67, 74, 75, 76, 77, 78, 79, 80, 81, 82], [2, 69]), { 5: [1, 95] }, { 18: 96, 85: [1, 97] }, { 5: [2, 82] }, t(v, [2, 7]), t(U, [2, 10], { 11: 98 }), t(v, [2, 19]), { 5: [1, 100], 24: [1, 99] }, { 5: [1, 101] }, t(v, [2, 23]), { 5: [1, 102] }, { 5: [1, 103] }, t(v, [2, 26]), t(v, [2, 27]), t(v, [2, 28]), t(v, [2, 29]), t(v, [2, 30]), t(v, [2, 33]), t(v, [2, 34]), t(I, a, { 8: 104 }), t(I, a, { 8: 105 }), t(I, a, { 8: 106 }), t(Kt, a, { 45: 107, 8: 108 }), t(Gt, a, { 47: 109, 8: 110 }), t(Xt, a, { 49: 111, 8: 112 }), t(I, a, { 8: 113 }), { 5: [1, 115], 55: [1, 114] }, { 5: [1, 117], 55: [1, 116] }, { 27: 120, 71: [1, 118], 72: [1, 119], 73: E }, t(at, [2, 70]), t(at, [2, 71]), t(at, [2, 72]), t(at, [2, 73]), t(at, [2, 74]), t(at, [2, 75]), t(at, [2, 76]), t(at, [2, 77]), { 27: 121, 73: E }, { 27: 123, 61: 122, 73: E }, { 73: [2, 64] }, { 73: [2, 65] }, { 59: 124, 82: et }, { 59: 126, 82: et }, { 59: 127, 82: et }, { 59: 128, 82: et }, t(Jt, [2, 15]), { 16: 129, 86: L }, { 86: [2, 81] }, { 4: [1, 132], 5: [1, 134], 12: 131, 13: 133, 21: [1, 130], 54: D, 56: X }, { 5: [1, 135] }, t(v, [2, 21]), t(v, [2, 22]), t(v, [2, 24]), t(v, [2, 25]), { 4: o, 5: l, 6: 41, 9: 14, 10: 16, 13: 18, 14: 6, 19: p, 21: [1, 136], 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, { 4: o, 5: l, 6: 41, 9: 14, 10: 16, 13: 18, 14: 6, 19: p, 21: [1, 137], 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, { 4: o, 5: l, 6: 41, 9: 14, 10: 16, 13: 18, 14: 6, 19: p, 21: [1, 138], 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, { 21: [1, 139] }, { 4: o, 5: l, 6: 41, 9: 14, 10: 16, 13: 18, 14: 6, 19: p, 21: [2, 48], 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 53: [1, 140], 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, { 21: [1, 141] }, { 4: o, 5: l, 6: 41, 9: 14, 10: 16, 13: 18, 14: 6, 19: p, 21: [2, 46], 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 52: [1, 142], 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, { 21: [1, 143] }, { 4: o, 5: l, 6: 41, 9: 14, 10: 16, 13: 18, 14: 6, 19: p, 21: [2, 44], 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 51: [1, 144], 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, { 4: o, 5: l, 6: 41, 9: 14, 10: 16, 13: 18, 14: 6, 19: p, 21: [1, 145], 22: 20, 23: h, 26: T, 27: 44, 28: y, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: u, 35: x, 36: b, 38: k, 40: N, 41: M, 42: P, 43: B, 44: V, 46: z, 48: G, 50: Y, 54: D, 56: X, 57: q, 62: F, 63: H, 64: J, 65: Q, 73: E, 83: n }, { 20: [1, 146] }, t(v, [2, 51]), { 20: [1, 147] }, t(v, [2, 53]), { 27: 148, 73: E }, { 27: 149, 73: E }, { 59: 150, 82: et }, { 59: 151, 82: et }, { 59: 152, 82: et }, { 67: [1, 153], 82: [2, 63] }, { 5: [2, 56] }, { 5: [2, 78] }, { 5: [2, 57] }, { 5: [2, 58] }, { 5: [2, 59] }, { 5: [1, 154] }, t(v, [2, 18]), t(U, [2, 11]), { 13: 155, 54: D, 56: X }, t(U, [2, 13]), t(U, [2, 14]), t(v, [2, 20]), t(v, [2, 36]), t(v, [2, 37]), t(v, [2, 38]), t(v, [2, 39]), { 20: [1, 156] }, t(v, [2, 40]), { 20: [1, 157] }, t(v, [2, 41]), { 20: [1, 158] }, t(v, [2, 42]), { 5: [1, 159] }, { 5: [1, 160] }, { 59: 161, 82: et }, { 59: 162, 82: et }, { 5: [2, 68] }, { 5: [2, 54] }, { 5: [2, 55] }, { 27: 163, 73: E }, t(Jt, [2, 16]), t(U, [2, 12]), t(Kt, a, { 8: 108, 45: 164 }), t(Gt, a, { 8: 110, 47: 165 }), t(Xt, a, { 8: 112, 49: 166 }), t(v, [2, 50]), t(v, [2, 52]), { 5: [2, 66] }, { 5: [2, 67] }, { 82: [2, 62] }, { 21: [2, 49] }, { 21: [2, 47] }, { 21: [2, 45] }],
    defaultActions: { 7: [2, 79], 8: [2, 1], 9: [2, 2], 10: [2, 3], 53: [2, 82], 89: [2, 64], 90: [2, 65], 97: [2, 81], 124: [2, 56], 125: [2, 78], 126: [2, 57], 127: [2, 58], 128: [2, 59], 150: [2, 68], 151: [2, 54], 152: [2, 55], 161: [2, 66], 162: [2, 67], 163: [2, 62], 164: [2, 49], 165: [2, 47], 166: [2, 45] },
    parseError: function(m, w) {
      if (w.recoverable)
        this.trace(m);
      else {
        var _ = new Error(m);
        throw _.hash = w, _;
      }
    },
    parse: function(m) {
      var w = this, _ = [0], g = [], A = [null], c = [], Tt = this.table, d = "", bt = 0, Qt = 0, Te = 2, Zt = 1, ye = c.slice.call(arguments, 1), O = Object.create(this.lexer), lt = { yy: {} };
      for (var Dt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Dt) && (lt.yy[Dt] = this.yy[Dt]);
      O.setInput(m, lt.yy), lt.yy.lexer = O, lt.yy.parser = this, typeof O.yylloc > "u" && (O.yylloc = {});
      var Vt = O.yylloc;
      c.push(Vt);
      var Ee = O.options && O.options.ranges;
      typeof lt.yy.parseError == "function" ? this.parseError = lt.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function me() {
        var nt;
        return nt = g.pop() || O.lex() || Zt, typeof nt != "number" && (nt instanceof Array && (g = nt, nt = g.pop()), nt = w.symbols_[nt] || nt), nt;
      }
      for (var W, ht, Z, Ct, ut = {}, wt, it, jt, vt; ; ) {
        if (ht = _[_.length - 1], this.defaultActions[ht] ? Z = this.defaultActions[ht] : ((W === null || typeof W > "u") && (W = me()), Z = Tt[ht] && Tt[ht][W]), typeof Z > "u" || !Z.length || !Z[0]) {
          var Ot = "";
          vt = [];
          for (wt in Tt[ht])
            this.terminals_[wt] && wt > Te && vt.push("'" + this.terminals_[wt] + "'");
          O.showPosition ? Ot = "Parse error on line " + (bt + 1) + `:
` + O.showPosition() + `
Expecting ` + vt.join(", ") + ", got '" + (this.terminals_[W] || W) + "'" : Ot = "Parse error on line " + (bt + 1) + ": Unexpected " + (W == Zt ? "end of input" : "'" + (this.terminals_[W] || W) + "'"), this.parseError(Ot, {
            text: O.match,
            token: this.terminals_[W] || W,
            line: O.yylineno,
            loc: Vt,
            expected: vt
          });
        }
        if (Z[0] instanceof Array && Z.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + ht + ", token: " + W);
        switch (Z[0]) {
          case 1:
            _.push(W), A.push(O.yytext), c.push(O.yylloc), _.push(Z[1]), W = null, Qt = O.yyleng, d = O.yytext, bt = O.yylineno, Vt = O.yylloc;
            break;
          case 2:
            if (it = this.productions_[Z[1]][1], ut.$ = A[A.length - it], ut._$ = {
              first_line: c[c.length - (it || 1)].first_line,
              last_line: c[c.length - 1].last_line,
              first_column: c[c.length - (it || 1)].first_column,
              last_column: c[c.length - 1].last_column
            }, Ee && (ut._$.range = [
              c[c.length - (it || 1)].range[0],
              c[c.length - 1].range[1]
            ]), Ct = this.performAction.apply(ut, [
              d,
              Qt,
              bt,
              lt.yy,
              Z[1],
              A,
              c
            ].concat(ye)), typeof Ct < "u")
              return Ct;
            it && (_ = _.slice(0, -1 * it * 2), A = A.slice(0, -1 * it), c = c.slice(0, -1 * it)), _.push(this.productions_[Z[1]][0]), A.push(ut.$), c.push(ut._$), jt = Tt[_[_.length - 2]][_[_.length - 1]], _.push(jt);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, ge = function() {
    var rt = {
      EOF: 1,
      parseError: function(w, _) {
        if (this.yy.parser)
          this.yy.parser.parseError(w, _);
        else
          throw new Error(w);
      },
      // resets the lexer, sets new input
      setInput: function(m, w) {
        return this.yy = w || this.yy || {}, this._input = m, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var m = this._input[0];
        this.yytext += m, this.yyleng++, this.offset++, this.match += m, this.matched += m;
        var w = m.match(/(?:\r\n?|\n).*/g);
        return w ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), m;
      },
      // unshifts one char (or a string) into the input
      unput: function(m) {
        var w = m.length, _ = m.split(/(?:\r\n?|\n)/g);
        this._input = m + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - w), this.offset -= w;
        var g = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), _.length - 1 && (this.yylineno -= _.length - 1);
        var A = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: _ ? (_.length === g.length ? this.yylloc.first_column : 0) + g[g.length - _.length].length - _[0].length : this.yylloc.first_column - w
        }, this.options.ranges && (this.yylloc.range = [A[0], A[0] + this.yyleng - w]), this.yyleng = this.yytext.length, this;
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
      less: function(m) {
        this.unput(this.match.slice(m));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var m = this.matched.substr(0, this.matched.length - this.match.length);
        return (m.length > 20 ? "..." : "") + m.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var m = this.match;
        return m.length < 20 && (m += this._input.substr(0, 20 - m.length)), (m.substr(0, 20) + (m.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var m = this.pastInput(), w = new Array(m.length + 1).join("-");
        return m + this.upcomingInput() + `
` + w + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(m, w) {
        var _, g, A;
        if (this.options.backtrack_lexer && (A = {
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
        }, this.options.ranges && (A.yylloc.range = this.yylloc.range.slice(0))), g = m[0].match(/(?:\r\n?|\n).*/g), g && (this.yylineno += g.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: g ? g[g.length - 1].length - g[g.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + m[0].length
        }, this.yytext += m[0], this.match += m[0], this.matches = m, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(m[0].length), this.matched += m[0], _ = this.performAction.call(this, this.yy, this, w, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), _)
          return _;
        if (this._backtrack) {
          for (var c in A)
            this[c] = A[c];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var m, w, _, g;
        this._more || (this.yytext = "", this.match = "");
        for (var A = this._currentRules(), c = 0; c < A.length; c++)
          if (_ = this._input.match(this.rules[A[c]]), _ && (!w || _[0].length > w[0].length)) {
            if (w = _, g = c, this.options.backtrack_lexer) {
              if (m = this.test_match(_, A[c]), m !== !1)
                return m;
              if (this._backtrack) {
                w = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return w ? (m = this.test_match(w, A[g]), m !== !1 ? m : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var w = this.next();
        return w || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(w) {
        this.conditionStack.push(w);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var w = this.conditionStack.length - 1;
        return w > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(w) {
        return w = this.conditionStack.length - 1 - Math.abs(w || 0), w >= 0 ? this.conditionStack[w] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(w) {
        this.begin(w);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(w, _, g, A) {
        switch (g) {
          case 0:
            return this.begin("open_directive"), 83;
          case 1:
            return this.begin("type_directive"), 84;
          case 2:
            return this.popState(), this.begin("arg_directive"), 17;
          case 3:
            return this.popState(), this.popState(), 86;
          case 4:
            return 85;
          case 5:
            return 5;
          case 6:
            break;
          case 7:
            break;
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 24;
          case 12:
            return this.begin("LINE"), 19;
          case 13:
            return this.begin("ID"), 54;
          case 14:
            return this.begin("ID"), 56;
          case 15:
            return _.yytext = _.yytext.trim(), this.begin("ALIAS"), 73;
          case 16:
            return this.popState(), this.popState(), this.begin("LINE"), 55;
          case 17:
            return this.popState(), this.popState(), 5;
          case 18:
            return this.begin("LINE"), 41;
          case 19:
            return this.begin("LINE"), 42;
          case 20:
            return this.begin("LINE"), 43;
          case 21:
            return this.begin("LINE"), 44;
          case 22:
            return this.begin("LINE"), 53;
          case 23:
            return this.begin("LINE"), 46;
          case 24:
            return this.begin("LINE"), 52;
          case 25:
            return this.begin("LINE"), 48;
          case 26:
            return this.begin("LINE"), 51;
          case 27:
            return this.begin("LINE"), 50;
          case 28:
            return this.popState(), 20;
          case 29:
            return 21;
          case 30:
            return 68;
          case 31:
            return 69;
          case 32:
            return 62;
          case 33:
            return 63;
          case 34:
            return 64;
          case 35:
            return 65;
          case 36:
            return 60;
          case 37:
            return 57;
          case 38:
            return this.begin("ID"), 26;
          case 39:
            return this.begin("ID"), 28;
          case 40:
            return 34;
          case 41:
            return 35;
          case 42:
            return this.begin("acc_title"), 36;
          case 43:
            return this.popState(), "acc_title_value";
          case 44:
            return this.begin("acc_descr"), 38;
          case 45:
            return this.popState(), "acc_descr_value";
          case 46:
            this.begin("acc_descr_multiline");
            break;
          case 47:
            this.popState();
            break;
          case 48:
            return "acc_descr_multiline_value";
          case 49:
            return 7;
          case 50:
            return 23;
          case 51:
            return 25;
          case 52:
            return 67;
          case 53:
            return 5;
          case 54:
            return _.yytext = _.yytext.trim(), 73;
          case 55:
            return 76;
          case 56:
            return 77;
          case 57:
            return 74;
          case 58:
            return 75;
          case 59:
            return 78;
          case 60:
            return 79;
          case 61:
            return 80;
          case 62:
            return 81;
          case 63:
            return 82;
          case 64:
            return 71;
          case 65:
            return 72;
          case 66:
            return 5;
          case 67:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[0-9]+(?=[ \n]+))/i, /^(?:box\b)/i, /^(?:participant\b)/i, /^(?:actor\b)/i, /^(?:[^\->:\n,;]+?([\-]*[^\->:\n,;]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i, /^(?:as\b)/i, /^(?:(?:))/i, /^(?:loop\b)/i, /^(?:rect\b)/i, /^(?:opt\b)/i, /^(?:alt\b)/i, /^(?:else\b)/i, /^(?:par\b)/i, /^(?:and\b)/i, /^(?:critical\b)/i, /^(?:option\b)/i, /^(?:break\b)/i, /^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i, /^(?:end\b)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:links\b)/i, /^(?:link\b)/i, /^(?:properties\b)/i, /^(?:details\b)/i, /^(?:over\b)/i, /^(?:note\b)/i, /^(?:activate\b)/i, /^(?:deactivate\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:title:\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:sequenceDiagram\b)/i, /^(?:autonumber\b)/i, /^(?:off\b)/i, /^(?:,)/i, /^(?:;)/i, /^(?:[^\+\->:\n,;]+((?!(-x|--x|-\)|--\)))[\-]*[^\+\->:\n,;]+)*)/i, /^(?:->>)/i, /^(?:-->>)/i, /^(?:->)/i, /^(?:-->)/i, /^(?:-[x])/i, /^(?:--[x])/i, /^(?:-[\)])/i, /^(?:--[\)])/i, /^(?::(?:(?:no)?wrap)?[^#\n;]+)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [47, 48], inclusive: !1 }, acc_descr: { rules: [45], inclusive: !1 }, acc_title: { rules: [43], inclusive: !1 }, open_directive: { rules: [1, 8], inclusive: !1 }, type_directive: { rules: [2, 3, 8], inclusive: !1 }, arg_directive: { rules: [3, 4, 8], inclusive: !1 }, ID: { rules: [7, 8, 15], inclusive: !1 }, ALIAS: { rules: [7, 8, 16, 17], inclusive: !1 }, LINE: { rules: [7, 8, 28], inclusive: !1 }, INITIAL: { rules: [0, 5, 6, 8, 9, 10, 11, 12, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 46, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67], inclusive: !0 } }
    };
    return rt;
  }();
  Mt.lexer = ge;
  function Rt() {
    this.yy = {};
  }
  return Rt.prototype = Mt, Mt.Parser = Rt, new Rt();
}();
Bt.parser = Bt;
const Me = Bt;
let yt, ot = {}, xt = [], j = [], It = !1, Yt, st;
const Re = function(t, e, s) {
  Le.parseDirective(this, t, e, s);
}, De = function(t) {
  xt.push({
    name: t.text,
    wrap: t.wrap === void 0 && dt() || !!t.wrap,
    fill: t.color,
    actorKeys: []
  }), st = xt.slice(-1)[0];
}, Ft = function(t, e, s, i) {
  let n = st;
  const a = ot[t];
  if (a) {
    if (st && a.box && st !== a.box)
      throw new Error(
        "A same participant should only be defined in one Box: " + a.name + " can't be in '" + a.box.name + "' and in '" + st.name + "' at the same time."
      );
    if (n = a.box ? a.box : st, a.box = n, a && e === a.name && s == null)
      return;
  }
  (s == null || s.text == null) && (s = { text: e, wrap: null, type: i }), (i == null || s.text == null) && (s = { text: e, wrap: null, type: i }), ot[t] = {
    box: n,
    name: e,
    description: s.text,
    wrap: s.wrap === void 0 && dt() || !!s.wrap,
    prevActor: yt,
    links: {},
    properties: {},
    actorCnt: null,
    rectData: null,
    type: i || "participant"
  }, yt && ot[yt] && (ot[yt].nextActor = t), st && st.actorKeys.push(t), yt = t;
}, Ve = (t) => {
  let e, s = 0;
  for (e = 0; e < j.length; e++)
    j[e].type === Et.ACTIVE_START && j[e].from.actor === t && s++, j[e].type === Et.ACTIVE_END && j[e].from.actor === t && s--;
  return s;
}, Ce = function(t, e, s, i) {
  j.push({
    from: t,
    to: e,
    message: s.text,
    wrap: s.wrap === void 0 && dt() || !!s.wrap,
    answer: i
  });
}, R = function(t, e, s = { text: void 0, wrap: void 0 }, i) {
  if (i === Et.ACTIVE_END && Ve(t.actor) < 1) {
    let a = new Error("Trying to inactivate an inactive participant (" + t.actor + ")");
    throw a.hash = {
      text: "->>-",
      token: "->>-",
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["'ACTIVE_PARTICIPANT'"]
    }, a;
  }
  return j.push({
    from: t,
    to: e,
    message: s.text,
    wrap: s.wrap === void 0 && dt() || !!s.wrap,
    type: i
  }), !0;
}, Oe = function() {
  return xt.length > 0;
}, Be = function() {
  return xt.some((t) => t.name);
}, Ye = function() {
  return j;
}, Fe = function() {
  return xt;
}, We = function() {
  return ot;
}, mt = function(t) {
  return ot[t];
}, ze = function() {
  return Object.keys(ot);
}, qe = function() {
  It = !0;
}, He = function() {
  It = !1;
}, Ue = () => It, Ke = function(t) {
  Yt = t;
}, dt = () => Yt !== void 0 ? Yt : ct().sequence.wrap, Ge = function() {
  ot = {}, xt = [], j = [], It = !1, Pe();
}, Xe = function(t) {
  const e = t.trim(), s = {
    text: e.replace(/^:?(?:no)?wrap:/, "").trim(),
    wrap: e.match(/^:?wrap:/) !== null ? !0 : e.match(/^:?nowrap:/) !== null ? !1 : void 0
  };
  return K.debug("parseMessage:", s), s;
}, Je = function(t) {
  const e = t.match(/^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/);
  let s = e != null && e[1] ? e[1].trim() : "transparent", i = e != null && e[2] ? e[2].trim() : void 0;
  if (window && window.CSS)
    window.CSS.supports("color", s) || (s = "transparent", i = t.trim());
  else {
    const a = new Option().style;
    a.color = s, a.color !== s && (s = "transparent", i = t.trim());
  }
  return {
    color: s,
    text: i !== void 0 ? kt(i.replace(/^:?(?:no)?wrap:/, ""), ct()) : void 0,
    wrap: i !== void 0 ? i.match(/^:?wrap:/) !== null ? !0 : i.match(/^:?nowrap:/) !== null ? !1 : void 0 : void 0
  };
}, Et = {
  SOLID: 0,
  DOTTED: 1,
  NOTE: 2,
  SOLID_CROSS: 3,
  DOTTED_CROSS: 4,
  SOLID_OPEN: 5,
  DOTTED_OPEN: 6,
  LOOP_START: 10,
  LOOP_END: 11,
  ALT_START: 12,
  ALT_ELSE: 13,
  ALT_END: 14,
  OPT_START: 15,
  OPT_END: 16,
  ACTIVE_START: 17,
  ACTIVE_END: 18,
  PAR_START: 19,
  PAR_AND: 20,
  PAR_END: 21,
  RECT_START: 22,
  RECT_END: 23,
  SOLID_POINT: 24,
  DOTTED_POINT: 25,
  AUTONUMBER: 26,
  CRITICAL_START: 27,
  CRITICAL_OPTION: 28,
  CRITICAL_END: 29,
  BREAK_START: 30,
  BREAK_END: 31
}, Qe = {
  FILLED: 0,
  OPEN: 1
}, Ze = {
  LEFTOF: 0,
  RIGHTOF: 1,
  OVER: 2
}, ie = function(t, e, s) {
  s.text, s.wrap === void 0 && dt() || s.wrap;
  const i = [].concat(t, t);
  j.push({
    from: i[0],
    to: i[1],
    message: s.text,
    wrap: s.wrap === void 0 && dt() || !!s.wrap,
    type: Et.NOTE,
    placement: e
  });
}, ne = function(t, e) {
  const s = mt(t);
  try {
    let i = kt(e.text, ct());
    i = i.replace(/&amp;/g, "&"), i = i.replace(/&equals;/g, "=");
    const n = JSON.parse(i);
    Ht(s, n);
  } catch (i) {
    K.error("error while parsing actor link text", i);
  }
}, je = function(t, e) {
  const s = mt(t);
  try {
    const o = {};
    let l = kt(e.text, ct());
    var i = l.indexOf("@");
    l = l.replace(/&amp;/g, "&"), l = l.replace(/&equals;/g, "=");
    var n = l.slice(0, i - 1).trim(), a = l.slice(i + 1).trim();
    o[n] = a, Ht(s, o);
  } catch (o) {
    K.error("error while parsing actor link text", o);
  }
};
function Ht(t, e) {
  if (t.links == null)
    t.links = e;
  else
    for (let s in e)
      t.links[s] = e[s];
}
const se = function(t, e) {
  const s = mt(t);
  try {
    let i = kt(e.text, ct());
    const n = JSON.parse(i);
    ae(s, n);
  } catch (i) {
    K.error("error while parsing actor properties text", i);
  }
};
function ae(t, e) {
  if (t.properties == null)
    t.properties = e;
  else
    for (let s in e)
      t.properties[s] = e[s];
}
function $e() {
  st = void 0;
}
const re = function(t, e) {
  const s = mt(t), i = document.getElementById(e.text);
  try {
    const n = i.innerHTML, a = JSON.parse(n);
    a.properties && ae(s, a.properties), a.links && Ht(s, a.links);
  } catch (n) {
    K.error("error while parsing actor details text", n);
  }
}, t0 = function(t, e) {
  if (t !== void 0 && t.properties !== void 0)
    return t.properties[e];
}, oe = function(t) {
  if (Array.isArray(t))
    t.forEach(function(e) {
      oe(e);
    });
  else
    switch (t.type) {
      case "sequenceIndex":
        j.push({
          from: void 0,
          to: void 0,
          message: {
            start: t.sequenceIndex,
            step: t.sequenceIndexStep,
            visible: t.sequenceVisible
          },
          wrap: !1,
          type: t.signalType
        });
        break;
      case "addParticipant":
        Ft(t.actor, t.actor, t.description, "participant");
        break;
      case "addActor":
        Ft(t.actor, t.actor, t.description, "actor");
        break;
      case "activeStart":
        R(t.actor, void 0, void 0, t.signalType);
        break;
      case "activeEnd":
        R(t.actor, void 0, void 0, t.signalType);
        break;
      case "addNote":
        ie(t.actor, t.placement, t.text);
        break;
      case "addLinks":
        ne(t.actor, t.text);
        break;
      case "addALink":
        je(t.actor, t.text);
        break;
      case "addProperties":
        se(t.actor, t.text);
        break;
      case "addDetails":
        re(t.actor, t.text);
        break;
      case "addMessage":
        R(t.from, t.to, t.msg, t.signalType);
        break;
      case "boxStart":
        De(t.boxData);
        break;
      case "boxEnd":
        $e();
        break;
      case "loopStart":
        R(void 0, void 0, t.loopText, t.signalType);
        break;
      case "loopEnd":
        R(void 0, void 0, void 0, t.signalType);
        break;
      case "rectStart":
        R(void 0, void 0, t.color, t.signalType);
        break;
      case "rectEnd":
        R(void 0, void 0, void 0, t.signalType);
        break;
      case "optStart":
        R(void 0, void 0, t.optText, t.signalType);
        break;
      case "optEnd":
        R(void 0, void 0, void 0, t.signalType);
        break;
      case "altStart":
        R(void 0, void 0, t.altText, t.signalType);
        break;
      case "else":
        R(void 0, void 0, t.altText, t.signalType);
        break;
      case "altEnd":
        R(void 0, void 0, void 0, t.signalType);
        break;
      case "setAccTitle":
        te(t.text);
        break;
      case "parStart":
        R(void 0, void 0, t.parText, t.signalType);
        break;
      case "and":
        R(void 0, void 0, t.parText, t.signalType);
        break;
      case "parEnd":
        R(void 0, void 0, void 0, t.signalType);
        break;
      case "criticalStart":
        R(void 0, void 0, t.criticalText, t.signalType);
        break;
      case "option":
        R(void 0, void 0, t.optionText, t.signalType);
        break;
      case "criticalEnd":
        R(void 0, void 0, void 0, t.signalType);
        break;
      case "breakStart":
        R(void 0, void 0, t.breakText, t.signalType);
        break;
      case "breakEnd":
        R(void 0, void 0, void 0, t.signalType);
        break;
    }
}, e0 = {
  addActor: Ft,
  addMessage: Ce,
  addSignal: R,
  addLinks: ne,
  addDetails: re,
  addProperties: se,
  autoWrap: dt,
  setWrap: Ke,
  enableSequenceNumbers: qe,
  disableSequenceNumbers: He,
  showSequenceNumbers: Ue,
  getMessages: Ye,
  getActors: We,
  getActor: mt,
  getActorKeys: ze,
  getActorProperty: t0,
  getAccTitle: be,
  getBoxes: Fe,
  getDiagramTitle: we,
  setDiagramTitle: ve,
  parseDirective: Re,
  getConfig: () => ct().sequence,
  clear: Ge,
  parseMessage: Xe,
  parseBoxData: Je,
  LINETYPE: Et,
  ARROWTYPE: Qe,
  PLACEMENT: Ze,
  addNote: ie,
  setAccTitle: te,
  apply: oe,
  setAccDescription: _e,
  getAccDescription: ke,
  hasAtLeastOneBox: Oe,
  hasAtLeastOneBoxWithTitle: Be
}, i0 = (t) => `.actor {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
  }

  text.actor > tspan {
    fill: ${t.actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${t.actorLineColor};
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${t.signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${t.signalColor};
  }

  #arrowhead path {
    fill: ${t.signalColor};
    stroke: ${t.signalColor};
  }

  .sequenceNumber {
    fill: ${t.sequenceNumberColor};
  }

  #sequencenumber {
    fill: ${t.signalColor};
  }

  #crosshead path {
    fill: ${t.signalColor};
    stroke: ${t.signalColor};
  }

  .messageText {
    fill: ${t.signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${t.labelBoxBorderColor};
    fill: ${t.labelBoxBkgColor};
  }

  .labelText, .labelText > tspan {
    fill: ${t.labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${t.loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${t.labelBoxBorderColor};
    fill: ${t.labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${t.noteBorderColor};
    fill: ${t.noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${t.noteTextColor};
    stroke: none;
  }

  .activation0 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .activation1 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .activation2 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${t.actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man line {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
  }
  .actor-man circle, line {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
    stroke-width: 2px;
  }
`, n0 = i0, Nt = function(t, e) {
  const s = t.append("rect");
  return s.attr("x", e.x), s.attr("y", e.y), s.attr("fill", e.fill), s.attr("stroke", e.stroke), s.attr("width", e.width), s.attr("height", e.height), s.attr("rx", e.rx), s.attr("ry", e.ry), e.class !== void 0 && s.attr("class", e.class), s;
}, ce = (t, e) => {
  Ae(() => {
    const s = document.querySelectorAll(t);
    s.length !== 0 && (s[0].addEventListener("mouseover", function() {
      o0("actor" + e + "_popup");
    }), s[0].addEventListener("mouseout", function() {
      c0("actor" + e + "_popup");
    }));
  });
}, s0 = function(t, e, s, i, n) {
  if (e.links === void 0 || e.links === null || Object.keys(e.links).length === 0)
    return { height: 0, width: 0 };
  const a = e.links, o = e.actorCnt, l = e.rectData;
  var p = "none";
  n && (p = "block !important");
  const h = t.append("g");
  h.attr("id", "actor" + o + "_popup"), h.attr("class", "actorPopupMenu"), h.attr("display", p), ce("#actor" + o + "_popup", o);
  var T = "";
  l.class !== void 0 && (T = " " + l.class);
  let y = l.width > s ? l.width : s;
  const u = h.append("rect");
  if (u.attr("class", "actorPopupMenuPanel" + T), u.attr("x", l.x), u.attr("y", l.height), u.attr("fill", l.fill), u.attr("stroke", l.stroke), u.attr("width", y), u.attr("height", l.height), u.attr("rx", l.rx), u.attr("ry", l.ry), a != null) {
    var x = 20;
    for (let N in a) {
      var b = h.append("a"), k = Lt(a[N]);
      b.attr("xlink:href", k), b.attr("target", "_blank"), v0(i)(
        N,
        b,
        l.x + 10,
        l.height + x,
        y,
        20,
        { class: "actor" },
        i
      ), x += 30;
    }
  }
  return u.attr("height", x), { height: l.height + x, width: y };
}, le = function(t, e, s, i) {
  const n = t.append("image");
  n.attr("x", e), n.attr("y", s);
  var a = Lt(i);
  n.attr("xlink:href", a);
}, he = function(t, e, s, i) {
  const n = t.append("use");
  n.attr("x", e), n.attr("y", s);
  var a = Lt(i);
  n.attr("xlink:href", "#" + a);
}, a0 = function(t) {
  return "var pu = document.getElementById('" + t + "'); if (pu != null) { pu.style.display = 'block'; }";
}, r0 = function(t) {
  return "var pu = document.getElementById('" + t + "'); if (pu != null) { pu.style.display = 'none'; }";
}, o0 = function(t) {
  var e = document.getElementById(t);
  e != null && (e.style.display = "block");
}, c0 = function(t) {
  var e = document.getElementById(t);
  e != null && (e.style.display = "none");
}, gt = function(t, e) {
  let s = 0, i = 0;
  const n = e.text.split(Pt.lineBreakRegex), [a, o] = ee(e.fontSize);
  let l = [], p = 0, h = () => e.y;
  if (e.valign !== void 0 && e.textMargin !== void 0 && e.textMargin > 0)
    switch (e.valign) {
      case "top":
      case "start":
        h = () => Math.round(e.y + e.textMargin);
        break;
      case "middle":
      case "center":
        h = () => Math.round(e.y + (s + i + e.textMargin) / 2);
        break;
      case "bottom":
      case "end":
        h = () => Math.round(
          e.y + (s + i + 2 * e.textMargin) - e.textMargin
        );
        break;
    }
  if (e.anchor !== void 0 && e.textMargin !== void 0 && e.width !== void 0)
    switch (e.anchor) {
      case "left":
      case "start":
        e.x = Math.round(e.x + e.textMargin), e.anchor = "start", e.dominantBaseline = "middle", e.alignmentBaseline = "middle";
        break;
      case "middle":
      case "center":
        e.x = Math.round(e.x + e.width / 2), e.anchor = "middle", e.dominantBaseline = "middle", e.alignmentBaseline = "middle";
        break;
      case "right":
      case "end":
        e.x = Math.round(e.x + e.width - e.textMargin), e.anchor = "end", e.dominantBaseline = "middle", e.alignmentBaseline = "middle";
        break;
    }
  for (let [T, y] of n.entries()) {
    e.textMargin !== void 0 && e.textMargin === 0 && a !== void 0 && (p = T * a);
    const u = t.append("text");
    if (u.attr("x", e.x), u.attr("y", h()), e.anchor !== void 0 && u.attr("text-anchor", e.anchor).attr("dominant-baseline", e.dominantBaseline).attr("alignment-baseline", e.alignmentBaseline), e.fontFamily !== void 0 && u.style("font-family", e.fontFamily), o !== void 0 && u.style("font-size", o), e.fontWeight !== void 0 && u.style("font-weight", e.fontWeight), e.fill !== void 0 && u.attr("fill", e.fill), e.class !== void 0 && u.attr("class", e.class), e.dy !== void 0 ? u.attr("dy", e.dy) : p !== 0 && u.attr("dy", p), e.tspan) {
      const x = u.append("tspan");
      x.attr("x", e.x), e.fill !== void 0 && x.attr("fill", e.fill), x.text(y);
    } else
      u.text(y);
    e.valign !== void 0 && e.textMargin !== void 0 && e.textMargin > 0 && (i += (u._groups || u)[0][0].getBBox().height, s = i), l.push(u);
  }
  return l;
}, de = function(t, e) {
  function s(n, a, o, l, p) {
    return n + "," + a + " " + (n + o) + "," + a + " " + (n + o) + "," + (a + l - p) + " " + (n + o - p * 1.2) + "," + (a + l) + " " + n + "," + (a + l);
  }
  const i = t.append("polygon");
  return i.attr("points", s(e.x, e.y, e.width, e.height, 7)), i.attr("class", "labelBox"), e.y = e.y + e.height / 2, gt(t, e), i;
};
let tt = -1;
const pe = (t, e) => {
  t.selectAll && t.selectAll(".actor-line").attr("class", "200").attr("y2", e - 55);
}, l0 = function(t, e, s, i) {
  const n = e.x + e.width / 2, a = e.y + 5, o = t.append("g");
  var l = o;
  i || (tt++, l.append("line").attr("id", "actor" + tt).attr("x1", n).attr("y1", a).attr("x2", n).attr("y2", 2e3).attr("class", "actor-line").attr("stroke-width", "0.5px").attr("stroke", "#999"), l = o.append("g"), e.actorCnt = tt, e.links != null && (l.attr("id", "root-" + tt), ce("#root-" + tt, tt)));
  const p = At();
  var h = "actor";
  e.properties != null && e.properties.class ? h = e.properties.class : p.fill = "#eaeaea", p.x = e.x, p.y = e.y, p.width = e.width, p.height = e.height, p.class = h, p.rx = 3, p.ry = 3;
  const T = Nt(l, p);
  if (e.rectData = p, e.properties != null && e.properties.icon) {
    const u = e.properties.icon.trim();
    u.charAt(0) === "@" ? he(l, p.x + p.width - 20, p.y + 10, u.substr(1)) : le(l, p.x + p.width - 20, p.y + 10, u);
  }
  Ut(s)(
    e.description,
    l,
    p.x,
    p.y,
    p.width,
    p.height,
    { class: "actor" },
    s
  );
  let y = e.height;
  if (T.node) {
    const u = T.node().getBBox();
    e.height = u.height, y = u.height;
  }
  return y;
}, h0 = function(t, e, s, i) {
  const n = e.x + e.width / 2, a = e.y + 80;
  i || (tt++, t.append("line").attr("id", "actor" + tt).attr("x1", n).attr("y1", a).attr("x2", n).attr("y2", 2e3).attr("class", "actor-line").attr("stroke-width", "0.5px").attr("stroke", "#999"));
  const o = t.append("g");
  o.attr("class", "actor-man");
  const l = At();
  l.x = e.x, l.y = e.y, l.fill = "#eaeaea", l.width = e.width, l.height = e.height, l.class = "actor", l.rx = 3, l.ry = 3, o.append("line").attr("id", "actor-man-torso" + tt).attr("x1", n).attr("y1", e.y + 25).attr("x2", n).attr("y2", e.y + 45), o.append("line").attr("id", "actor-man-arms" + tt).attr("x1", n - 18).attr("y1", e.y + 33).attr("x2", n + 18).attr("y2", e.y + 33), o.append("line").attr("x1", n - 18).attr("y1", e.y + 60).attr("x2", n).attr("y2", e.y + 45), o.append("line").attr("x1", n).attr("y1", e.y + 45).attr("x2", n + 16).attr("y2", e.y + 60);
  const p = o.append("circle");
  p.attr("cx", e.x + e.width / 2), p.attr("cy", e.y + 10), p.attr("r", 15), p.attr("width", e.width), p.attr("height", e.height);
  const h = o.node().getBBox();
  return e.height = h.height, Ut(s)(
    e.description,
    o,
    l.x,
    l.y + 35,
    l.width,
    l.height,
    { class: "actor" },
    s
  ), e.height;
}, d0 = function(t, e, s, i) {
  switch (e.type) {
    case "actor":
      return h0(t, e, s, i);
    case "participant":
      return l0(t, e, s, i);
  }
}, p0 = function(t, e, s) {
  const n = t.append("g");
  ue(n, e), e.name && Ut(s)(
    e.name,
    n,
    e.x,
    e.y + (e.textMaxHeight || 0) / 2,
    e.width,
    0,
    { class: "text" },
    s
  ), n.lower();
}, u0 = function(t) {
  return t.append("g");
}, f0 = function(t, e, s, i, n) {
  const a = At(), o = e.anchored;
  a.x = e.startx, a.y = e.starty, a.class = "activation" + n % 3, a.width = e.stopx - e.startx, a.height = s - e.starty, Nt(o, a);
}, x0 = function(t, e, s, i) {
  const {
    boxMargin: n,
    boxTextMargin: a,
    labelBoxHeight: o,
    labelBoxWidth: l,
    messageFontFamily: p,
    messageFontSize: h,
    messageFontWeight: T
  } = i, y = t.append("g"), u = function(k, N, M, P) {
    return y.append("line").attr("x1", k).attr("y1", N).attr("x2", M).attr("y2", P).attr("class", "loopLine");
  };
  u(e.startx, e.starty, e.stopx, e.starty), u(e.stopx, e.starty, e.stopx, e.stopy), u(e.startx, e.stopy, e.stopx, e.stopy), u(e.startx, e.starty, e.startx, e.stopy), e.sections !== void 0 && e.sections.forEach(function(k) {
    u(e.startx, k.y, e.stopx, k.y).style(
      "stroke-dasharray",
      "3, 3"
    );
  });
  let x = Wt();
  x.text = s, x.x = e.startx, x.y = e.starty, x.fontFamily = p, x.fontSize = h, x.fontWeight = T, x.anchor = "middle", x.valign = "middle", x.tspan = !1, x.width = l || 50, x.height = o || 20, x.textMargin = a, x.class = "labelText", de(y, x), x = Wt(), x.text = e.title, x.x = e.startx + l / 2 + (e.stopx - e.startx) / 2, x.y = e.starty + n + a, x.anchor = "middle", x.valign = "middle", x.textMargin = a, x.class = "loopText", x.fontFamily = p, x.fontSize = h, x.fontWeight = T, x.wrap = !0;
  let b = gt(y, x);
  return e.sectionTitles !== void 0 && e.sectionTitles.forEach(function(k, N) {
    if (k.message) {
      x.text = k.message, x.x = e.startx + (e.stopx - e.startx) / 2, x.y = e.sections[N].y + n + a, x.class = "loopText", x.anchor = "middle", x.valign = "middle", x.tspan = !1, x.fontFamily = p, x.fontSize = h, x.fontWeight = T, x.wrap = e.wrap, b = gt(y, x);
      let M = Math.round(
        b.map((P) => (P._groups || P)[0][0].getBBox().height).reduce((P, B) => P + B)
      );
      e.sections[N].height += M - (n + a);
    }
  }), e.height = Math.round(e.stopy - e.starty), y;
}, ue = function(t, e) {
  Nt(t, {
    x: e.startx,
    y: e.starty,
    width: e.stopx - e.startx,
    height: e.stopy - e.starty,
    fill: e.fill,
    stroke: e.stroke,
    class: "rect"
  }).lower();
}, g0 = function(t) {
  t.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z"
  );
}, T0 = function(t) {
  t.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z"
  );
}, y0 = function(t) {
  t.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
  );
}, E0 = function(t) {
  t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
}, m0 = function(t) {
  t.append("defs").append("marker").attr("id", "filled-head").attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, b0 = function(t) {
  t.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
}, w0 = function(t) {
  t.append("defs").append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 4).attr("refY", 5).append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1pt").attr("d", "M 1,2 L 6,7 M 6,2 L 1,7");
}, Wt = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: void 0,
    style: "#666",
    width: void 0,
    height: void 0,
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: !0,
    valign: void 0
  };
}, At = function() {
  return {
    x: 0,
    y: 0,
    fill: "#EDF2AE",
    stroke: "#666",
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
}, Ut = function() {
  function t(n, a, o, l, p, h, T) {
    const y = a.append("text").attr("x", o + p / 2).attr("y", l + h / 2 + 5).style("text-anchor", "middle").text(n);
    i(y, T);
  }
  function e(n, a, o, l, p, h, T, y) {
    const { actorFontSize: u, actorFontFamily: x, actorFontWeight: b } = y, [k, N] = ee(u), M = n.split(Pt.lineBreakRegex);
    for (let P = 0; P < M.length; P++) {
      const B = P * k - k * (M.length - 1) / 2, V = a.append("text").attr("x", o + p / 2).attr("y", l).style("text-anchor", "middle").style("font-size", N).style("font-weight", b).style("font-family", x);
      V.append("tspan").attr("x", o + p / 2).attr("dy", B).text(M[P]), V.attr("y", l + h / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), i(V, T);
    }
  }
  function s(n, a, o, l, p, h, T, y) {
    const u = a.append("switch"), b = u.append("foreignObject").attr("x", o).attr("y", l).attr("width", p).attr("height", h).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    b.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(n), e(n, u, o, l, p, h, T, y), i(b, T);
  }
  function i(n, a) {
    for (const o in a)
      a.hasOwnProperty(o) && n.attr(o, a[o]);
  }
  return function(n) {
    return n.textPlacement === "fo" ? s : n.textPlacement === "old" ? t : e;
  };
}(), v0 = function() {
  function t(n, a, o, l, p, h, T) {
    const y = a.append("text").attr("x", o).attr("y", l).style("text-anchor", "start").text(n);
    i(y, T);
  }
  function e(n, a, o, l, p, h, T, y) {
    const { actorFontSize: u, actorFontFamily: x, actorFontWeight: b } = y, k = n.split(Pt.lineBreakRegex);
    for (let N = 0; N < k.length; N++) {
      const M = N * u - u * (k.length - 1) / 2, P = a.append("text").attr("x", o).attr("y", l).style("text-anchor", "start").style("font-size", u).style("font-weight", b).style("font-family", x);
      P.append("tspan").attr("x", o).attr("dy", M).text(k[N]), P.attr("y", l + h / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), i(P, T);
    }
  }
  function s(n, a, o, l, p, h, T, y) {
    const u = a.append("switch"), b = u.append("foreignObject").attr("x", o).attr("y", l).attr("width", p).attr("height", h).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    b.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(n), e(n, u, o, l, p, h, T, y), i(b, T);
  }
  function i(n, a) {
    for (const o in a)
      a.hasOwnProperty(o) && n.attr(o, a[o]);
  }
  return function(n) {
    return n.textPlacement === "fo" ? s : n.textPlacement === "old" ? t : e;
  };
}(), S = {
  drawRect: Nt,
  drawText: gt,
  drawLabel: de,
  drawActor: d0,
  drawBox: p0,
  drawPopup: s0,
  drawImage: le,
  drawEmbeddedImage: he,
  anchorElement: u0,
  drawActivation: f0,
  drawLoop: x0,
  drawBackgroundRect: ue,
  insertArrowHead: E0,
  insertArrowFilledHead: m0,
  insertSequenceNumber: b0,
  insertArrowCrossHead: w0,
  insertDatabaseIcon: g0,
  insertComputerIcon: T0,
  insertClockIcon: y0,
  getTextObj: Wt,
  getNoteRect: At,
  popupMenu: a0,
  popdownMenu: r0,
  fixLifeLineHeights: pe,
  sanitizeUrl: Lt
};
let r = {};
const f = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  activations: [],
  models: {
    getHeight: function() {
      return Math.max.apply(
        null,
        this.actors.length === 0 ? [0] : this.actors.map((t) => t.height || 0)
      ) + (this.loops.length === 0 ? 0 : this.loops.map((t) => t.height || 0).reduce((t, e) => t + e)) + (this.messages.length === 0 ? 0 : this.messages.map((t) => t.height || 0).reduce((t, e) => t + e)) + (this.notes.length === 0 ? 0 : this.notes.map((t) => t.height || 0).reduce((t, e) => t + e));
    },
    clear: function() {
      this.actors = [], this.boxes = [], this.loops = [], this.messages = [], this.notes = [];
    },
    addBox: function(t) {
      this.boxes.push(t);
    },
    addActor: function(t) {
      this.actors.push(t);
    },
    addLoop: function(t) {
      this.loops.push(t);
    },
    addMessage: function(t) {
      this.messages.push(t);
    },
    addNote: function(t) {
      this.notes.push(t);
    },
    lastActor: function() {
      return this.actors[this.actors.length - 1];
    },
    lastLoop: function() {
      return this.loops[this.loops.length - 1];
    },
    lastMessage: function() {
      return this.messages[this.messages.length - 1];
    },
    lastNote: function() {
      return this.notes[this.notes.length - 1];
    },
    actors: [],
    boxes: [],
    loops: [],
    messages: [],
    notes: []
  },
  init: function() {
    this.sequenceItems = [], this.activations = [], this.models.clear(), this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0, xe(ct());
  },
  updateVal: function(t, e, s, i) {
    t[e] === void 0 ? t[e] = s : t[e] = i(s, t[e]);
  },
  updateBounds: function(t, e, s, i) {
    const n = this;
    let a = 0;
    function o(l) {
      return function(h) {
        a++;
        const T = n.sequenceItems.length - a + 1;
        n.updateVal(h, "starty", e - T * r.boxMargin, Math.min), n.updateVal(h, "stopy", i + T * r.boxMargin, Math.max), n.updateVal(f.data, "startx", t - T * r.boxMargin, Math.min), n.updateVal(f.data, "stopx", s + T * r.boxMargin, Math.max), l !== "activation" && (n.updateVal(h, "startx", t - T * r.boxMargin, Math.min), n.updateVal(h, "stopx", s + T * r.boxMargin, Math.max), n.updateVal(f.data, "starty", e - T * r.boxMargin, Math.min), n.updateVal(f.data, "stopy", i + T * r.boxMargin, Math.max));
      };
    }
    this.sequenceItems.forEach(o()), this.activations.forEach(o("activation"));
  },
  insert: function(t, e, s, i) {
    const n = Math.min(t, s), a = Math.max(t, s), o = Math.min(e, i), l = Math.max(e, i);
    this.updateVal(f.data, "startx", n, Math.min), this.updateVal(f.data, "starty", o, Math.min), this.updateVal(f.data, "stopx", a, Math.max), this.updateVal(f.data, "stopy", l, Math.max), this.updateBounds(n, o, a, l);
  },
  newActivation: function(t, e, s) {
    const i = s[t.from.actor], n = St(t.from.actor).length || 0, a = i.x + i.width / 2 + (n - 1) * r.activationWidth / 2;
    this.activations.push({
      startx: a,
      starty: this.verticalPos + 2,
      stopx: a + r.activationWidth,
      stopy: void 0,
      actor: t.from.actor,
      anchored: S.anchorElement(e)
    });
  },
  endActivation: function(t) {
    const e = this.activations.map(function(s) {
      return s.actor;
    }).lastIndexOf(t.from.actor);
    return this.activations.splice(e, 1)[0];
  },
  createLoop: function(t = { message: void 0, wrap: !1, width: void 0 }, e) {
    return {
      startx: void 0,
      starty: this.verticalPos,
      stopx: void 0,
      stopy: void 0,
      title: t.message,
      wrap: t.wrap,
      width: t.width,
      height: 0,
      fill: e
    };
  },
  newLoop: function(t = { message: void 0, wrap: !1, width: void 0 }, e) {
    this.sequenceItems.push(this.createLoop(t, e));
  },
  endLoop: function() {
    return this.sequenceItems.pop();
  },
  addSectionToLoop: function(t) {
    const e = this.sequenceItems.pop();
    e.sections = e.sections || [], e.sectionTitles = e.sectionTitles || [], e.sections.push({ y: f.getVerticalPos(), height: 0 }), e.sectionTitles.push(t), this.sequenceItems.push(e);
  },
  bumpVerticalPos: function(t) {
    this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
  },
  getVerticalPos: function() {
    return this.verticalPos;
  },
  getBounds: function() {
    return { bounds: this.data, models: this.models };
  }
}, _0 = function(t, e) {
  f.bumpVerticalPos(r.boxMargin), e.height = r.boxMargin, e.starty = f.getVerticalPos();
  const s = S.getNoteRect();
  s.x = e.startx, s.y = e.starty, s.width = e.width || r.width, s.class = "note";
  const i = t.append("g"), n = S.drawRect(i, s), a = S.getTextObj();
  a.x = e.startx, a.y = e.starty, a.width = s.width, a.dy = "1em", a.text = e.message, a.class = "noteText", a.fontFamily = r.noteFontFamily, a.fontSize = r.noteFontSize, a.fontWeight = r.noteFontWeight, a.anchor = r.noteAlign, a.textMargin = r.noteMargin, a.valign = "center";
  const o = gt(i, a), l = Math.round(
    o.map((p) => (p._groups || p)[0][0].getBBox().height).reduce((p, h) => p + h)
  );
  n.attr("height", l + 2 * r.noteMargin), e.height += l + 2 * r.noteMargin, f.bumpVerticalPos(l + 2 * r.noteMargin), e.stopy = e.starty + l + 2 * r.noteMargin, e.stopx = e.startx + s.width, f.insert(e.startx, e.starty, e.stopx, e.stopy), f.models.addNote(e);
}, pt = (t) => ({
  fontFamily: t.messageFontFamily,
  fontSize: t.messageFontSize,
  fontWeight: t.messageFontWeight
}), ft = (t) => ({
  fontFamily: t.noteFontFamily,
  fontSize: t.noteFontSize,
  fontWeight: t.noteFontWeight
}), zt = (t) => ({
  fontFamily: t.actorFontFamily,
  fontSize: t.actorFontSize,
  fontWeight: t.actorFontWeight
});
function k0(t, e) {
  f.bumpVerticalPos(10);
  const { startx: s, stopx: i, message: n } = e, a = Pt.splitBreaks(n).length, o = C.calculateTextDimensions(n, pt(r)), l = o.height / a;
  e.height += l, f.bumpVerticalPos(l);
  let p, h = o.height - 10;
  const T = o.width;
  if (s === i) {
    p = f.getVerticalPos() + h, r.rightAngles || (h += r.boxMargin, p = f.getVerticalPos() + h), h += 30;
    const y = Math.max(T / 2, r.width / 2);
    f.insert(
      s - y,
      f.getVerticalPos() - 10 + h,
      i + y,
      f.getVerticalPos() + 30 + h
    );
  } else
    h += r.boxMargin, p = f.getVerticalPos() + h, f.insert(s, p - 10, i, p);
  return f.bumpVerticalPos(h), e.height += h, e.stopy = e.starty + e.height, f.insert(e.fromBounds, e.starty, e.toBounds, e.stopy), p;
}
const L0 = function(t, e, s, i) {
  const { startx: n, stopx: a, starty: o, message: l, type: p, sequenceIndex: h, sequenceVisible: T } = e, y = C.calculateTextDimensions(l, pt(r)), u = S.getTextObj();
  u.x = n, u.y = o + 10, u.width = a - n, u.class = "messageText", u.dy = "1em", u.text = l, u.fontFamily = r.messageFontFamily, u.fontSize = r.messageFontSize, u.fontWeight = r.messageFontWeight, u.anchor = r.messageAlign, u.valign = "center", u.textMargin = r.wrapPadding, u.tspan = !1, gt(t, u);
  const x = y.width;
  let b;
  n === a ? r.rightAngles ? b = t.append("path").attr(
    "d",
    `M  ${n},${s} H ${n + Math.max(r.width / 2, x / 2)} V ${s + 25} H ${n}`
  ) : b = t.append("path").attr(
    "d",
    "M " + n + "," + s + " C " + (n + 60) + "," + (s - 10) + " " + (n + 60) + "," + (s + 30) + " " + n + "," + (s + 20)
  ) : (b = t.append("line"), b.attr("x1", n), b.attr("y1", s), b.attr("x2", a), b.attr("y2", s)), p === i.db.LINETYPE.DOTTED || p === i.db.LINETYPE.DOTTED_CROSS || p === i.db.LINETYPE.DOTTED_POINT || p === i.db.LINETYPE.DOTTED_OPEN ? (b.style("stroke-dasharray", "3, 3"), b.attr("class", "messageLine1")) : b.attr("class", "messageLine0");
  let k = "";
  r.arrowMarkerAbsolute && (k = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, k = k.replace(/\(/g, "\\("), k = k.replace(/\)/g, "\\)")), b.attr("stroke-width", 2), b.attr("stroke", "none"), b.style("fill", "none"), (p === i.db.LINETYPE.SOLID || p === i.db.LINETYPE.DOTTED) && b.attr("marker-end", "url(" + k + "#arrowhead)"), (p === i.db.LINETYPE.SOLID_POINT || p === i.db.LINETYPE.DOTTED_POINT) && b.attr("marker-end", "url(" + k + "#filled-head)"), (p === i.db.LINETYPE.SOLID_CROSS || p === i.db.LINETYPE.DOTTED_CROSS) && b.attr("marker-end", "url(" + k + "#crosshead)"), (T || r.showSequenceNumbers) && (b.attr("marker-start", "url(" + k + "#sequencenumber)"), t.append("text").attr("x", n).attr("y", s + 4).attr("font-family", "sans-serif").attr("font-size", "12px").attr("text-anchor", "middle").attr("class", "sequenceNumber").text(h));
}, qt = function(t, e, s, i, n, a, o) {
  if (n.hideUnusedParticipants === !0) {
    const y = /* @__PURE__ */ new Set();
    a.forEach((u) => {
      y.add(u.from), y.add(u.to);
    }), s = s.filter((u) => y.has(u));
  }
  let l = 0, p = 0, h = 0, T;
  for (const y of s) {
    const u = e[y], x = u.box;
    T && T != x && (o || f.models.addBox(T), p += r.boxMargin + T.margin), x && x != T && (o || (x.x = l + p, x.y = i), p += x.margin), u.width = u.width || r.width, u.height = Math.max(u.height || r.height, r.height), u.margin = u.margin || r.actorMargin, u.x = l + p, u.y = f.getVerticalPos();
    const b = S.drawActor(t, u, r, o);
    h = Math.max(h, b), f.insert(u.x, i, u.x + u.width, u.height), l += u.width + p, u.box && (u.box.width = l + x.margin - u.box.x), p = u.margin, T = u.box, f.models.addActor(u);
  }
  T && !o && f.models.addBox(T), f.bumpVerticalPos(h);
}, fe = function(t, e, s, i) {
  let n = 0, a = 0;
  for (const o of s) {
    const l = e[o], p = N0(l), h = S.drawPopup(
      t,
      l,
      p,
      r,
      r.forceMenus,
      i
    );
    h.height > n && (n = h.height), h.width + l.x > a && (a = h.width + l.x);
  }
  return { maxHeight: n, maxWidth: a };
}, xe = function(t) {
  Ie(r, t), t.fontFamily && (r.actorFontFamily = r.noteFontFamily = r.messageFontFamily = t.fontFamily), t.fontSize && (r.actorFontSize = r.noteFontSize = r.messageFontSize = t.fontSize), t.fontWeight && (r.actorFontWeight = r.noteFontWeight = r.messageFontWeight = t.fontWeight);
}, St = function(t) {
  return f.activations.filter(function(e) {
    return e.actor === t;
  });
}, $t = function(t, e) {
  const s = e[t], i = St(t), n = i.reduce(function(o, l) {
    return Math.min(o, l.startx);
  }, s.x + s.width / 2), a = i.reduce(function(o, l) {
    return Math.max(o, l.stopx);
  }, s.x + s.width / 2);
  return [n, a];
};
function $(t, e, s, i, n) {
  f.bumpVerticalPos(s);
  let a = i;
  if (e.id && e.message && t[e.id]) {
    const o = t[e.id].width, l = pt(r);
    e.message = C.wrapLabel(`[${e.message}]`, o - 2 * r.wrapPadding, l), e.width = o, e.wrap = !0;
    const p = C.calculateTextDimensions(e.message, l), h = Math.max(p.height, r.labelBoxHeight);
    a = i + h, K.debug(`${h} - ${e.message}`);
  }
  n(e), f.bumpVerticalPos(a);
}
const P0 = function(t, e, s, i) {
  const { securityLevel: n, sequence: a } = ct();
  r = a, i.db.clear(), i.parser.parse(t);
  let o;
  n === "sandbox" && (o = _t("#i" + e));
  const l = n === "sandbox" ? _t(o.nodes()[0].contentDocument.body) : _t("body"), p = n === "sandbox" ? o.nodes()[0].contentDocument : document;
  f.init(), K.debug(i.db);
  const h = n === "sandbox" ? l.select(`[id="${e}"]`) : _t(`[id="${e}"]`), T = i.db.getActors(), y = i.db.getBoxes(), u = i.db.getActorKeys(), x = i.db.getMessages(), b = i.db.getDiagramTitle(), k = i.db.hasAtLeastOneBox(), N = i.db.hasAtLeastOneBoxWithTitle(), M = I0(T, x, i);
  r.height = A0(T, M, y), S.insertComputerIcon(h), S.insertDatabaseIcon(h), S.insertClockIcon(h), k && (f.bumpVerticalPos(r.boxMargin), N && f.bumpVerticalPos(y[0].textMaxHeight)), qt(h, T, u, 0, r, x, !1);
  const P = R0(x, T, M, i);
  S.insertArrowHead(h), S.insertArrowCrossHead(h), S.insertArrowFilledHead(h), S.insertSequenceNumber(h);
  function B(E, L) {
    const v = f.endActivation(E);
    v.starty + 18 > L && (v.starty = L - 6, L += 12), S.drawActivation(
      h,
      v,
      L,
      r,
      St(E.from.actor).length
    ), f.insert(v.startx, L - 10, v.stopx, L);
  }
  let V = 1, z = 1;
  const G = [];
  x.forEach(function(E) {
    let L, v, U;
    switch (E.type) {
      case i.db.LINETYPE.NOTE:
        v = E.noteModel, _0(h, v);
        break;
      case i.db.LINETYPE.ACTIVE_START:
        f.newActivation(E, h, T);
        break;
      case i.db.LINETYPE.ACTIVE_END:
        B(E, f.getVerticalPos());
        break;
      case i.db.LINETYPE.LOOP_START:
        $(
          P,
          E,
          r.boxMargin,
          r.boxMargin + r.boxTextMargin,
          (I) => f.newLoop(I)
        );
        break;
      case i.db.LINETYPE.LOOP_END:
        L = f.endLoop(), S.drawLoop(h, L, "loop", r), f.bumpVerticalPos(L.stopy - f.getVerticalPos()), f.models.addLoop(L);
        break;
      case i.db.LINETYPE.RECT_START:
        $(
          P,
          E,
          r.boxMargin,
          r.boxMargin,
          (I) => f.newLoop(void 0, I.message)
        );
        break;
      case i.db.LINETYPE.RECT_END:
        L = f.endLoop(), S.drawBackgroundRect(h, L), f.models.addLoop(L), f.bumpVerticalPos(L.stopy - f.getVerticalPos());
        break;
      case i.db.LINETYPE.OPT_START:
        $(
          P,
          E,
          r.boxMargin,
          r.boxMargin + r.boxTextMargin,
          (I) => f.newLoop(I)
        );
        break;
      case i.db.LINETYPE.OPT_END:
        L = f.endLoop(), S.drawLoop(h, L, "opt", r), f.bumpVerticalPos(L.stopy - f.getVerticalPos()), f.models.addLoop(L);
        break;
      case i.db.LINETYPE.ALT_START:
        $(
          P,
          E,
          r.boxMargin,
          r.boxMargin + r.boxTextMargin,
          (I) => f.newLoop(I)
        );
        break;
      case i.db.LINETYPE.ALT_ELSE:
        $(
          P,
          E,
          r.boxMargin + r.boxTextMargin,
          r.boxMargin,
          (I) => f.addSectionToLoop(I)
        );
        break;
      case i.db.LINETYPE.ALT_END:
        L = f.endLoop(), S.drawLoop(h, L, "alt", r), f.bumpVerticalPos(L.stopy - f.getVerticalPos()), f.models.addLoop(L);
        break;
      case i.db.LINETYPE.PAR_START:
        $(
          P,
          E,
          r.boxMargin,
          r.boxMargin + r.boxTextMargin,
          (I) => f.newLoop(I)
        );
        break;
      case i.db.LINETYPE.PAR_AND:
        $(
          P,
          E,
          r.boxMargin + r.boxTextMargin,
          r.boxMargin,
          (I) => f.addSectionToLoop(I)
        );
        break;
      case i.db.LINETYPE.PAR_END:
        L = f.endLoop(), S.drawLoop(h, L, "par", r), f.bumpVerticalPos(L.stopy - f.getVerticalPos()), f.models.addLoop(L);
        break;
      case i.db.LINETYPE.AUTONUMBER:
        V = E.message.start || V, z = E.message.step || z, E.message.visible ? i.db.enableSequenceNumbers() : i.db.disableSequenceNumbers();
        break;
      case i.db.LINETYPE.CRITICAL_START:
        $(
          P,
          E,
          r.boxMargin,
          r.boxMargin + r.boxTextMargin,
          (I) => f.newLoop(I)
        );
        break;
      case i.db.LINETYPE.CRITICAL_OPTION:
        $(
          P,
          E,
          r.boxMargin + r.boxTextMargin,
          r.boxMargin,
          (I) => f.addSectionToLoop(I)
        );
        break;
      case i.db.LINETYPE.CRITICAL_END:
        L = f.endLoop(), S.drawLoop(h, L, "critical", r), f.bumpVerticalPos(L.stopy - f.getVerticalPos()), f.models.addLoop(L);
        break;
      case i.db.LINETYPE.BREAK_START:
        $(
          P,
          E,
          r.boxMargin,
          r.boxMargin + r.boxTextMargin,
          (I) => f.newLoop(I)
        );
        break;
      case i.db.LINETYPE.BREAK_END:
        L = f.endLoop(), S.drawLoop(h, L, "break", r), f.bumpVerticalPos(L.stopy - f.getVerticalPos()), f.models.addLoop(L);
        break;
      default:
        try {
          U = E.msgModel, U.starty = f.getVerticalPos(), U.sequenceIndex = V, U.sequenceVisible = i.db.showSequenceNumbers();
          const I = k0(h, U);
          G.push({ messageModel: U, lineStartY: I }), f.models.addMessage(U);
        } catch (I) {
          K.error("error while drawing message", I);
        }
    }
    [
      i.db.LINETYPE.SOLID_OPEN,
      i.db.LINETYPE.DOTTED_OPEN,
      i.db.LINETYPE.SOLID,
      i.db.LINETYPE.DOTTED,
      i.db.LINETYPE.SOLID_CROSS,
      i.db.LINETYPE.DOTTED_CROSS,
      i.db.LINETYPE.SOLID_POINT,
      i.db.LINETYPE.DOTTED_POINT
    ].includes(E.type) && (V = V + z);
  }), G.forEach((E) => L0(h, E.messageModel, E.lineStartY, i)), r.mirrorActors && (f.bumpVerticalPos(r.boxMargin * 2), qt(h, T, u, f.getVerticalPos(), r, x, !0), f.bumpVerticalPos(r.boxMargin), pe(h, f.getVerticalPos())), f.models.boxes.forEach(function(E) {
    E.height = f.getVerticalPos() - E.y, f.insert(E.x, E.y, E.x + E.width, E.height), E.startx = E.x, E.starty = E.y, E.stopx = E.startx + E.width, E.stopy = E.starty + E.height, E.stroke = "rgb(0,0,0, 0.5)", S.drawBox(h, E, r);
  }), k && f.bumpVerticalPos(r.boxMargin);
  const Y = fe(h, T, u, p), { bounds: D } = f.getBounds();
  K.debug("For line height fix Querying: #" + e + " .actor-line"), Se("#" + e + " .actor-line").attr("y2", D.stopy);
  let q = D.stopy - D.starty;
  q < Y.maxHeight && (q = Y.maxHeight);
  let F = q + 2 * r.diagramMarginY;
  r.mirrorActors && (F = F - r.boxMargin + r.bottomMarginAdj);
  let H = D.stopx - D.startx;
  H < Y.maxWidth && (H = Y.maxWidth);
  const J = H + 2 * r.diagramMarginX;
  b && h.append("text").text(b).attr("x", (D.stopx - D.startx) / 2 - 2 * r.diagramMarginX).attr("y", -25), Ne(h, F, J, r.useMaxWidth);
  const Q = b ? 40 : 0;
  h.attr(
    "viewBox",
    D.startx - r.diagramMarginX + " -" + (r.diagramMarginY + Q) + " " + J + " " + (F + Q)
  ), K.debug("models:", f.models);
};
function I0(t, e, s) {
  const i = {};
  return e.forEach(function(n) {
    if (t[n.to] && t[n.from]) {
      const a = t[n.to];
      if (n.placement === s.db.PLACEMENT.LEFTOF && !a.prevActor || n.placement === s.db.PLACEMENT.RIGHTOF && !a.nextActor)
        return;
      const o = n.placement !== void 0, l = !o, p = o ? ft(r) : pt(r), h = n.wrap ? C.wrapLabel(n.message, r.width - 2 * r.wrapPadding, p) : n.message, y = C.calculateTextDimensions(h, p).width + 2 * r.wrapPadding;
      l && n.from === a.nextActor ? i[n.to] = Math.max(
        i[n.to] || 0,
        y
      ) : l && n.from === a.prevActor ? i[n.from] = Math.max(
        i[n.from] || 0,
        y
      ) : l && n.from === n.to ? (i[n.from] = Math.max(
        i[n.from] || 0,
        y / 2
      ), i[n.to] = Math.max(
        i[n.to] || 0,
        y / 2
      )) : n.placement === s.db.PLACEMENT.RIGHTOF ? i[n.from] = Math.max(
        i[n.from] || 0,
        y
      ) : n.placement === s.db.PLACEMENT.LEFTOF ? i[a.prevActor] = Math.max(
        i[a.prevActor] || 0,
        y
      ) : n.placement === s.db.PLACEMENT.OVER && (a.prevActor && (i[a.prevActor] = Math.max(
        i[a.prevActor] || 0,
        y / 2
      )), a.nextActor && (i[n.from] = Math.max(
        i[n.from] || 0,
        y / 2
      )));
    }
  }), K.debug("maxMessageWidthPerActor:", i), i;
}
const N0 = function(t) {
  let e = 0;
  const s = zt(r);
  for (const i in t.links) {
    const a = C.calculateTextDimensions(i, s).width + 2 * r.wrapPadding + 2 * r.boxMargin;
    e < a && (e = a);
  }
  return e;
};
function A0(t, e, s) {
  let i = 0;
  Object.keys(t).forEach((a) => {
    const o = t[a];
    o.wrap && (o.description = C.wrapLabel(
      o.description,
      r.width - 2 * r.wrapPadding,
      zt(r)
    ));
    const l = C.calculateTextDimensions(o.description, zt(r));
    o.width = o.wrap ? r.width : Math.max(r.width, l.width + 2 * r.wrapPadding), o.height = o.wrap ? Math.max(l.height, r.height) : r.height, i = Math.max(i, o.height);
  });
  for (const a in e) {
    const o = t[a];
    if (!o)
      continue;
    const l = t[o.nextActor];
    if (!l) {
      const y = e[a] + r.actorMargin - o.width / 2;
      o.margin = Math.max(y, r.actorMargin);
      continue;
    }
    const h = e[a] + r.actorMargin - o.width / 2 - l.width / 2;
    o.margin = Math.max(h, r.actorMargin);
  }
  let n = 0;
  return s.forEach((a) => {
    const o = pt(r);
    let l = a.actorKeys.reduce((T, y) => T += t[y].width + (t[y].margin || 0), 0);
    l -= 2 * r.boxTextMargin, a.wrap && (a.name = C.wrapLabel(a.name, l - 2 * r.wrapPadding, o));
    const p = C.calculateTextDimensions(a.name, o);
    n = Math.max(p.height, n);
    const h = Math.max(l, p.width + 2 * r.wrapPadding);
    if (a.margin = r.boxTextMargin, l < h) {
      const T = (h - l) / 2;
      a.margin += T;
    }
  }), s.forEach((a) => a.textMaxHeight = n), Math.max(i, r.height);
}
const S0 = function(t, e, s) {
  const i = e[t.from].x, n = e[t.to].x, a = t.wrap && t.message;
  let o = C.calculateTextDimensions(
    a ? C.wrapLabel(t.message, r.width, ft(r)) : t.message,
    ft(r)
  );
  const l = {
    width: a ? r.width : Math.max(r.width, o.width + 2 * r.noteMargin),
    height: 0,
    startx: e[t.from].x,
    stopx: 0,
    starty: 0,
    stopy: 0,
    message: t.message
  };
  return t.placement === s.db.PLACEMENT.RIGHTOF ? (l.width = a ? Math.max(r.width, o.width) : Math.max(
    e[t.from].width / 2 + e[t.to].width / 2,
    o.width + 2 * r.noteMargin
  ), l.startx = i + (e[t.from].width + r.actorMargin) / 2) : t.placement === s.db.PLACEMENT.LEFTOF ? (l.width = Math.max(a ? r.width : e[t.from].width / 2 + e[t.to].width / 2, o.width + 2 * r.noteMargin), l.startx = i - l.width + (e[t.from].width - r.actorMargin) / 2) : t.to === t.from ? (o = C.calculateTextDimensions(
    a ? C.wrapLabel(t.message, Math.max(r.width, e[t.from].width), ft(r)) : t.message,
    ft(r)
  ), l.width = a ? Math.max(r.width, e[t.from].width) : Math.max(e[t.from].width, r.width, o.width + 2 * r.noteMargin), l.startx = i + (e[t.from].width - l.width) / 2) : (l.width = Math.abs(i + e[t.from].width / 2 - (n + e[t.to].width / 2)) + r.actorMargin, l.startx = i < n ? i + e[t.from].width / 2 - r.actorMargin / 2 : n + e[t.to].width / 2 - r.actorMargin / 2), a && (l.message = C.wrapLabel(
    t.message,
    l.width - 2 * r.wrapPadding,
    ft(r)
  )), K.debug(
    `NM:[${l.startx},${l.stopx},${l.starty},${l.stopy}:${l.width},${l.height}=${t.message}]`
  ), l;
}, M0 = function(t, e, s) {
  let i = !1;
  if ([
    s.db.LINETYPE.SOLID_OPEN,
    s.db.LINETYPE.DOTTED_OPEN,
    s.db.LINETYPE.SOLID,
    s.db.LINETYPE.DOTTED,
    s.db.LINETYPE.SOLID_CROSS,
    s.db.LINETYPE.DOTTED_CROSS,
    s.db.LINETYPE.SOLID_POINT,
    s.db.LINETYPE.DOTTED_POINT
  ].includes(t.type) && (i = !0), !i)
    return {};
  const n = $t(t.from, e), a = $t(t.to, e), o = n[0] <= a[0] ? 1 : 0, l = n[0] < a[0] ? 0 : 1, p = [...n, ...a], h = Math.abs(a[l] - n[o]);
  t.wrap && t.message && (t.message = C.wrapLabel(
    t.message,
    Math.max(h + 2 * r.wrapPadding, r.width),
    pt(r)
  ));
  const T = C.calculateTextDimensions(t.message, pt(r));
  return {
    width: Math.max(
      t.wrap ? 0 : T.width + 2 * r.wrapPadding,
      h + 2 * r.wrapPadding,
      r.width
    ),
    height: 0,
    startx: n[o],
    stopx: a[l],
    starty: 0,
    stopy: 0,
    message: t.message,
    type: t.type,
    wrap: t.wrap,
    fromBounds: Math.min.apply(null, p),
    toBounds: Math.max.apply(null, p)
  };
}, R0 = function(t, e, s, i) {
  const n = {}, a = [];
  let o, l, p;
  return t.forEach(function(h) {
    switch (h.id = C.random({ length: 10 }), h.type) {
      case i.db.LINETYPE.LOOP_START:
      case i.db.LINETYPE.ALT_START:
      case i.db.LINETYPE.OPT_START:
      case i.db.LINETYPE.PAR_START:
      case i.db.LINETYPE.CRITICAL_START:
      case i.db.LINETYPE.BREAK_START:
        a.push({
          id: h.id,
          msg: h.message,
          from: Number.MAX_SAFE_INTEGER,
          to: Number.MIN_SAFE_INTEGER,
          width: 0
        });
        break;
      case i.db.LINETYPE.ALT_ELSE:
      case i.db.LINETYPE.PAR_AND:
      case i.db.LINETYPE.CRITICAL_OPTION:
        h.message && (o = a.pop(), n[o.id] = o, n[h.id] = o, a.push(o));
        break;
      case i.db.LINETYPE.LOOP_END:
      case i.db.LINETYPE.ALT_END:
      case i.db.LINETYPE.OPT_END:
      case i.db.LINETYPE.PAR_END:
      case i.db.LINETYPE.CRITICAL_END:
      case i.db.LINETYPE.BREAK_END:
        o = a.pop(), n[o.id] = o;
        break;
      case i.db.LINETYPE.ACTIVE_START:
        {
          const y = e[h.from ? h.from.actor : h.to.actor], u = St(h.from ? h.from.actor : h.to.actor).length, x = y.x + y.width / 2 + (u - 1) * r.activationWidth / 2, b = {
            startx: x,
            stopx: x + r.activationWidth,
            actor: h.from.actor,
            enabled: !0
          };
          f.activations.push(b);
        }
        break;
      case i.db.LINETYPE.ACTIVE_END:
        {
          const y = f.activations.map((u) => u.actor).lastIndexOf(h.from.actor);
          delete f.activations.splice(y, 1)[0];
        }
        break;
    }
    h.placement !== void 0 ? (l = S0(h, e, i), h.noteModel = l, a.forEach((y) => {
      o = y, o.from = Math.min(o.from, l.startx), o.to = Math.max(o.to, l.startx + l.width), o.width = Math.max(o.width, Math.abs(o.from - o.to)) - r.labelBoxWidth;
    })) : (p = M0(h, e, i), h.msgModel = p, p.startx && p.stopx && a.length > 0 && a.forEach((y) => {
      if (o = y, p.startx === p.stopx) {
        const u = e[h.from], x = e[h.to];
        o.from = Math.min(
          u.x - p.width / 2,
          u.x - u.width / 2,
          o.from
        ), o.to = Math.max(x.x + p.width / 2, x.x + u.width / 2, o.to), o.width = Math.max(o.width, Math.abs(o.to - o.from)) - r.labelBoxWidth;
      } else
        o.from = Math.min(p.startx, o.from), o.to = Math.max(p.stopx, o.to), o.width = Math.max(o.width, p.width) - r.labelBoxWidth;
    }));
  }), f.activations = [], K.debug("Loop type widths:", n), n;
}, D0 = {
  bounds: f,
  drawActors: qt,
  drawActorsPopup: fe,
  setConf: xe,
  draw: P0
}, B0 = {
  parser: Me,
  db: e0,
  renderer: D0,
  styles: n0
};
export {
  B0 as diagram
};
