import { Fragment as he, reactive as Vi, computed as N, watchEffect as Sn, toRefs as pg, shallowRef as Gt, warn as $a, getCurrentInstance as Og, inject as Bi, provide as Ca, defineComponent as zf, watch as ue, onScopeDispose as wt, effectScope as Ta, ref as G, toRaw as Bf, isRef as Yf, h as If, mergeProps as Ve, TransitionGroup as mg, Transition as Nf, createVNode as L, unref as de, toRef as Wf, Text as gg, nextTick as bs, onMounted as Si, readonly as yg, onBeforeUnmount as Uf, Teleport as Jr, withDirectives as Aa, vShow as Za, resolveDirective as vg, useSlots as bg, resolveComponent as q, openBlock as Z, createBlock as J, createSlots as Ei, withCtx as R, createTextVNode as ee, toDisplayString as B, renderSlot as ie, createElementBlock as X, createElementVNode as V, mergeModels as Gf, useModel as Ff, createCommentVNode as re, renderList as Ze, withModifiers as Ye, normalizeClass as ke, normalizeStyle as ht, onUnmounted as Sg, toHandlers as xg, normalizeProps as yt, guardReactiveProps as vt, createStaticVNode as kg, withKeys as Jn } from "vue";
const wg = {
  dark: !1,
  colors: {},
  variables: { "font-family": "Paperlogy, Noto Sans KR, sans-serif" }
}, bA = {
  defaultTheme: "defaultTheme",
  themes: { defaultTheme: wg }
};
function He(i, e) {
  return (t) => Object.keys(i).reduce((n, s) => {
    const o = typeof i[s] == "object" && i[s] != null && !Array.isArray(i[s]) ? i[s] : {
      type: i[s]
    };
    return t && s in t ? n[s] = {
      ...o,
      default: t[s]
    } : n[s] = o, e && !n[s].source && (n[s].source = e), n;
  }, {});
}
const Hf = He({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), qt = typeof window < "u";
function Pe(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(i == null || i === ""))
    return isNaN(+i) ? String(i) : isFinite(+i) ? `${Number(i)}${e}` : void 0;
}
function Rc(i) {
  let e;
  return i !== null && typeof i == "object" && ((e = Object.getPrototypeOf(i)) === Object.prototype || e === null);
}
function Qg(i) {
  if (i && "$el" in i) {
    const e = i.$el;
    return (e == null ? void 0 : e.nodeType) === Node.TEXT_NODE ? e.nextElementSibling : e;
  }
  return i;
}
function Qo(i, e) {
  return e.every((t) => i.hasOwnProperty(t));
}
function Pg(i, e) {
  const t = {}, n = new Set(Object.keys(i));
  for (const s of e)
    n.has(s) && (t[s] = i[s]);
  return t;
}
const $g = /^on[^a-z]/, Kf = (i) => $g.test(i);
function Vc(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(e, Math.min(t, i));
}
function Ec(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return i + t.repeat(Math.max(0, e - i.length));
}
function Cg(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let n = 0;
  for (; n < i.length; )
    t.push(i.substr(n, e)), n += e;
  return t;
}
function Jf() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const s in i)
    n[s] = i[s];
  for (const s in e) {
    const r = i[s], o = e[s];
    if (Rc(r) && Rc(o)) {
      n[s] = Jf(r, o, t);
      continue;
    }
    if (t && Array.isArray(r) && Array.isArray(o)) {
      n[s] = t(r, o);
      continue;
    }
    n[s] = o;
  }
  return n;
}
function ed(i) {
  return i.map((e) => e.type === he ? ed(e.children) : e).flat();
}
function Zi() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Zi.cache.has(i)) return Zi.cache.get(i);
  const e = i.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Zi.cache.set(i, e), e;
}
Zi.cache = /* @__PURE__ */ new Map();
function _a(i) {
  const e = Vi({}), t = N(i);
  return Sn(() => {
    for (const n in t.value)
      e[n] = t.value[n];
  }, {
    flush: "sync"
  }), pg(e);
}
function vr(i, e) {
  return i.includes(e);
}
function td(i) {
  return i[2].toLowerCase() + i.slice(3);
}
function Tg(i, e) {
  if (!(qt && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${e})`))) return null;
  try {
    return !!i && i.matches(e);
  } catch {
    return null;
  }
}
function Ag(i, e) {
  if (!qt || i === 0)
    return e(), () => {
    };
  const t = window.setTimeout(e, i);
  return () => window.clearTimeout(t);
}
function Lc() {
  const i = Gt(), e = (t) => {
    i.value = t;
  };
  return Object.defineProperty(e, "value", {
    enumerable: !0,
    get: () => i.value,
    set: (t) => i.value = t
  }), Object.defineProperty(e, "el", {
    enumerable: !0,
    get: () => Qg(i.value)
  }), e;
}
const id = ["top", "bottom"], Zg = ["start", "end", "left", "right"];
function Xc(i, e) {
  let [t, n] = i.split(" ");
  return n || (n = vr(id, t) ? "start" : vr(Zg, t) ? "top" : "center"), {
    side: Dc(t, e),
    align: Dc(n, e)
  };
}
function Dc(i, e) {
  return i === "start" ? e ? "right" : "left" : i === "end" ? e ? "left" : "right" : i;
}
function Po(i) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[i.side],
    align: i.align
  };
}
function $o(i) {
  return {
    side: i.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[i.align]
  };
}
function qc(i) {
  return {
    side: i.align,
    align: i.side
  };
}
function jc(i) {
  return vr(id, i.side) ? "y" : "x";
}
class _i {
  constructor(e) {
    let {
      x: t,
      y: n,
      width: s,
      height: r
    } = e;
    this.x = t, this.y = n, this.width = s, this.height = r;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function zc(i, e) {
  return {
    x: {
      before: Math.max(0, e.left - i.left),
      after: Math.max(0, i.right - e.right)
    },
    y: {
      before: Math.max(0, e.top - i.top),
      after: Math.max(0, i.bottom - e.bottom)
    }
  };
}
function _g(i) {
  return Array.isArray(i) ? new _i({
    x: i[0],
    y: i[1],
    width: 0,
    height: 0
  }) : i.getBoundingClientRect();
}
function Mg(i) {
  const e = i.getBoundingClientRect(), t = getComputedStyle(i), n = t.transform;
  if (n) {
    let s, r, o, l, a;
    if (n.startsWith("matrix3d("))
      s = n.slice(9, -1).split(/, /), r = +s[0], o = +s[5], l = +s[12], a = +s[13];
    else if (n.startsWith("matrix("))
      s = n.slice(7, -1).split(/, /), r = +s[0], o = +s[3], l = +s[4], a = +s[5];
    else
      return new _i(e);
    const c = t.transformOrigin, h = e.x - l - (1 - r) * parseFloat(c), u = e.y - a - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), f = r ? e.width / r : i.offsetWidth + 1, d = o ? e.height / o : i.offsetHeight + 1;
    return new _i({
      x: h,
      y: u,
      width: f,
      height: d
    });
  } else
    return new _i(e);
}
function Rg(i, e, t) {
  if (typeof i.animate > "u") return {
    finished: Promise.resolve()
  };
  let n;
  try {
    n = i.animate(e, t);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof n.finished > "u" && (n.finished = new Promise((s) => {
    n.onfinish = () => {
      s(n);
    };
  })), n;
}
const nr = /* @__PURE__ */ new WeakMap();
function Vg(i, e) {
  Object.keys(e).forEach((t) => {
    if (Kf(t)) {
      const n = td(t), s = nr.get(i);
      if (e[t] == null)
        s == null || s.forEach((r) => {
          const [o, l] = r;
          o === n && (i.removeEventListener(n, l), s.delete(r));
        });
      else if (!s || ![...s].some((r) => r[0] === n && r[1] === e[t])) {
        i.addEventListener(n, e[t]);
        const r = s || /* @__PURE__ */ new Set();
        r.add([n, e[t]]), nr.has(i) || nr.set(i, r);
      }
    } else
      e[t] == null ? i.removeAttribute(t) : i.setAttribute(t, e[t]);
  });
}
function Eg(i, e) {
  Object.keys(e).forEach((t) => {
    if (Kf(t)) {
      const n = td(t), s = nr.get(i);
      s == null || s.forEach((r) => {
        const [o, l] = r;
        o === n && (i.removeEventListener(n, l), s.delete(r));
      });
    } else
      i.removeAttribute(t);
  });
}
const Ni = 2.4, Bc = 0.2126729, Yc = 0.7151522, Ic = 0.072175, Lg = 0.55, Xg = 0.58, Dg = 0.57, qg = 0.62, Zs = 0.03, Nc = 1.45, jg = 5e-4, zg = 1.25, Bg = 1.25, Wc = 0.078, Uc = 12.82051282051282, _s = 0.06, Gc = 1e-3;
function Fc(i, e) {
  const t = (i.r / 255) ** Ni, n = (i.g / 255) ** Ni, s = (i.b / 255) ** Ni, r = (e.r / 255) ** Ni, o = (e.g / 255) ** Ni, l = (e.b / 255) ** Ni;
  let a = t * Bc + n * Yc + s * Ic, c = r * Bc + o * Yc + l * Ic;
  if (a <= Zs && (a += (Zs - a) ** Nc), c <= Zs && (c += (Zs - c) ** Nc), Math.abs(c - a) < jg) return 0;
  let h;
  if (c > a) {
    const u = (c ** Lg - a ** Xg) * zg;
    h = u < Gc ? 0 : u < Wc ? u - u * Uc * _s : u - _s;
  } else {
    const u = (c ** qg - a ** Dg) * Bg;
    h = u > -Gc ? 0 : u > -Wc ? u - u * Uc * _s : u + _s;
  }
  return h * 100;
}
function In(i) {
  $a(`Vuetify: ${i}`);
}
function Yg(i) {
  $a(`Vuetify error: ${i}`);
}
function hl(i) {
  return !!i && /^(#|var\(--|(rgb|hsl)a?\()/.test(i);
}
function Ig(i) {
  return hl(i) && !/^((rgb|hsl)a?\()?var\(--/.test(i);
}
const Hc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ng = {
  rgb: (i, e, t, n) => ({
    r: i,
    g: e,
    b: t,
    a: n
  }),
  rgba: (i, e, t, n) => ({
    r: i,
    g: e,
    b: t,
    a: n
  }),
  hsl: (i, e, t, n) => Kc({
    h: i,
    s: e,
    l: t,
    a: n
  }),
  hsla: (i, e, t, n) => Kc({
    h: i,
    s: e,
    l: t,
    a: n
  }),
  hsv: (i, e, t, n) => es({
    h: i,
    s: e,
    v: t,
    a: n
  }),
  hsva: (i, e, t, n) => es({
    h: i,
    s: e,
    v: t,
    a: n
  })
};
function Xn(i) {
  if (typeof i == "number")
    return (isNaN(i) || i < 0 || i > 16777215) && In(`'${i}' is not a valid hex color`), {
      r: (i & 16711680) >> 16,
      g: (i & 65280) >> 8,
      b: i & 255
    };
  if (typeof i == "string" && Hc.test(i)) {
    const {
      groups: e
    } = i.match(Hc), {
      fn: t,
      values: n
    } = e, s = n.split(/,\s*/).map((r) => r.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(r) / 100 : parseFloat(r));
    return Ng[t](...s);
  } else if (typeof i == "string") {
    let e = i.startsWith("#") ? i.slice(1) : i;
    [3, 4].includes(e.length) ? e = e.split("").map((n) => n + n).join("") : [6, 8].includes(e.length) || In(`'${i}' is not a valid hex(a) color`);
    const t = parseInt(e, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && In(`'${i}' is not a valid hex(a) color`), Wg(e);
  } else if (typeof i == "object") {
    if (Qo(i, ["r", "g", "b"]))
      return i;
    if (Qo(i, ["h", "s", "l"]))
      return es(nd(i));
    if (Qo(i, ["h", "s", "v"]))
      return es(i);
  }
  throw new TypeError(`Invalid color: ${i == null ? i : String(i) || i.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function es(i) {
  const {
    h: e,
    s: t,
    v: n,
    a: s
  } = i, r = (l) => {
    const a = (l + e / 60) % 6;
    return n - n * t * Math.max(Math.min(a, 4 - a, 1), 0);
  }, o = [r(5), r(3), r(1)].map((l) => Math.round(l * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: s
  };
}
function Kc(i) {
  return es(nd(i));
}
function nd(i) {
  const {
    h: e,
    s: t,
    l: n,
    a: s
  } = i, r = n + t * Math.min(n, 1 - n), o = r === 0 ? 0 : 2 - 2 * n / r;
  return {
    h: e,
    s: o,
    v: r,
    a: s
  };
}
function Wg(i) {
  i = Ug(i);
  let [e, t, n, s] = Cg(i, 2).map((r) => parseInt(r, 16));
  return s = s === void 0 ? s : s / 255, {
    r: e,
    g: t,
    b: n,
    a: s
  };
}
function Ug(i) {
  return i.startsWith("#") && (i = i.slice(1)), i = i.replace(/([^0-9a-f])/gi, "F"), (i.length === 3 || i.length === 4) && (i = i.split("").map((e) => e + e).join("")), i.length !== 6 && (i = Ec(Ec(i, 6), 8, "F")), i;
}
function Gg(i) {
  const e = Math.abs(Fc(Xn(0), Xn(i)));
  return Math.abs(Fc(Xn(16777215), Xn(i))) > Math.min(e, 50) ? "#fff" : "#000";
}
function Qt(i, e) {
  const t = Og();
  if (!t)
    throw new Error(`[Vuetify] ${i} must be called from inside a setup function`);
  return t;
}
function sd() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const e = Qt(i).type;
  return Zi((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
function Fg(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qt("injectSelf");
  const {
    provides: t
  } = e;
  if (t && i in t)
    return t[i];
}
const ul = Symbol.for("vuetify:defaults");
function rd() {
  const i = Bi(ul);
  if (!i) throw new Error("[Vuetify] Could not find defaults instance");
  return i;
}
function Hg(i, e) {
  var t, n;
  return typeof ((t = i.props) == null ? void 0 : t[e]) < "u" || typeof ((n = i.props) == null ? void 0 : n[Zi(e)]) < "u";
}
function Kg() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rd();
  const n = Qt("useDefaults");
  if (e = e ?? n.type.name ?? n.type.__name, !e)
    throw new Error("[Vuetify] Could not determine component name");
  const s = N(() => {
    var a;
    return (a = t.value) == null ? void 0 : a[i._as ?? e];
  }), r = new Proxy(i, {
    get(a, c) {
      var u, f, d, p, O, m, g;
      const h = Reflect.get(a, c);
      return c === "class" || c === "style" ? [(u = s.value) == null ? void 0 : u[c], h].filter((k) => k != null) : typeof c == "string" && !Hg(n.vnode, c) ? ((f = s.value) == null ? void 0 : f[c]) !== void 0 ? (d = s.value) == null ? void 0 : d[c] : ((O = (p = t.value) == null ? void 0 : p.global) == null ? void 0 : O[c]) !== void 0 ? (g = (m = t.value) == null ? void 0 : m.global) == null ? void 0 : g[c] : h : h;
    }
  }), o = Gt();
  Sn(() => {
    if (s.value) {
      const a = Object.entries(s.value).filter((c) => {
        let [h] = c;
        return h.startsWith(h[0].toUpperCase());
      });
      o.value = a.length ? Object.fromEntries(a) : void 0;
    } else
      o.value = void 0;
  });
  function l() {
    const a = Fg(ul, n);
    Ca(ul, N(() => o.value ? Jf((a == null ? void 0 : a.value) ?? {}, o.value) : a == null ? void 0 : a.value));
  }
  return {
    props: r,
    provideSubDefaults: l
  };
}
function eo(i) {
  if (i._setup = i._setup ?? i.setup, !i.name)
    return In("The component is missing an explicit name, unable to generate default prop value"), i;
  if (i._setup) {
    i.props = He(i.props ?? {}, i.name)();
    const e = Object.keys(i.props).filter((t) => t !== "class" && t !== "style");
    i.filterProps = function(n) {
      return Pg(n, e);
    }, i.props._as = String, i.setup = function(n, s) {
      const r = rd();
      if (!r.value) return i._setup(n, s);
      const {
        props: o,
        provideSubDefaults: l
      } = Kg(n, n._as ?? i.name, r), a = i._setup(o, s);
      return l(), a;
    };
  }
  return i;
}
function Ma() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (e) => (i ? eo : zf)(e);
}
function od(i) {
  if (typeof i.getRootNode != "function") {
    for (; i.parentNode; ) i = i.parentNode;
    return i !== document ? null : document;
  }
  const e = i.getRootNode();
  return e !== document && e.getRootNode({
    composed: !0
  }) !== document ? null : e;
}
const Jg = "cubic-bezier(0.4, 0, 0.2, 1)";
function e0(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; i; ) {
    if (e ? t0(i) : Ra(i)) return i;
    i = i.parentElement;
  }
  return document.scrollingElement;
}
function br(i, e) {
  const t = [];
  if (e && i && !e.contains(i)) return t;
  for (; i && (Ra(i) && t.push(i), i !== e); )
    i = i.parentElement;
  return t;
}
function Ra(i) {
  if (!i || i.nodeType !== Node.ELEMENT_NODE) return !1;
  const e = window.getComputedStyle(i);
  return e.overflowY === "scroll" || e.overflowY === "auto" && i.scrollHeight > i.clientHeight;
}
function t0(i) {
  if (!i || i.nodeType !== Node.ELEMENT_NODE) return !1;
  const e = window.getComputedStyle(i);
  return ["scroll", "auto"].includes(e.overflowY);
}
function i0(i) {
  for (; i; ) {
    if (window.getComputedStyle(i).position === "fixed")
      return !0;
    i = i.offsetParent;
  }
  return !1;
}
function ld(i) {
  const e = Qt("useRender");
  e.render = i;
}
function to(i, e) {
  let t;
  function n() {
    t = Ta(), t.run(() => e.length ? e(() => {
      t == null || t.stop(), n();
    }) : e());
  }
  ue(i, (s) => {
    s && !t ? n() : s || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), wt(() => {
    t == null || t.stop();
  });
}
function n0(i, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (u) => u, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (u) => u;
  const r = Qt("useProxiedModel"), o = G(i[e] !== void 0 ? i[e] : t), l = Zi(e), c = l !== e ? N(() => {
    var u, f, d, p;
    return i[e], !!(((u = r.vnode.props) != null && u.hasOwnProperty(e) || (f = r.vnode.props) != null && f.hasOwnProperty(l)) && ((d = r.vnode.props) != null && d.hasOwnProperty(`onUpdate:${e}`) || (p = r.vnode.props) != null && p.hasOwnProperty(`onUpdate:${l}`)));
  }) : N(() => {
    var u, f;
    return i[e], !!((u = r.vnode.props) != null && u.hasOwnProperty(e) && ((f = r.vnode.props) != null && f.hasOwnProperty(`onUpdate:${e}`)));
  });
  to(() => !c.value, () => {
    ue(() => i[e], (u) => {
      o.value = u;
    });
  });
  const h = N({
    get() {
      const u = i[e];
      return n(c.value ? u : o.value);
    },
    set(u) {
      const f = s(u), d = Bf(c.value ? i[e] : o.value);
      d === f || n(d) === u || (o.value = f, r == null || r.emit(`update:${e}`, f));
    }
  });
  return Object.defineProperty(h, "externalValue", {
    get: () => c.value ? i[e] : o.value
  }), h;
}
const s0 = Symbol.for("vuetify:locale");
function r0() {
  const i = Bi(s0);
  if (!i) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: i.isRtl,
    rtlClasses: i.rtlClasses
  };
}
const Jc = Symbol.for("vuetify:theme"), ad = He({
  theme: String
}, "theme");
function cd(i) {
  Qt("provideTheme");
  const e = Bi(Jc, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  const t = N(() => i.theme ?? e.name.value), n = N(() => e.themes.value[t.value]), s = N(() => e.isDisabled ? void 0 : `v-theme--${t.value}`), r = {
    ...e,
    name: t,
    current: n,
    themeClasses: s
  };
  return Ca(Jc, r), r;
}
const o0 = He({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), l0 = He({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function a0(i) {
  return {
    dimensionStyles: N(() => {
      const t = {}, n = Pe(i.height), s = Pe(i.maxHeight), r = Pe(i.maxWidth), o = Pe(i.minHeight), l = Pe(i.minWidth), a = Pe(i.width);
      return n != null && (t.height = n), s != null && (t.maxHeight = s), r != null && (t.maxWidth = r), o != null && (t.minHeight = o), l != null && (t.minWidth = l), a != null && (t.width = a), t;
    })
  };
}
function hd(i) {
  return _a(() => {
    const e = [], t = {};
    if (i.value.background)
      if (hl(i.value.background)) {
        if (t.backgroundColor = i.value.background, !i.value.text && Ig(i.value.background)) {
          const n = Xn(i.value.background);
          if (n.a == null || n.a === 1) {
            const s = Gg(n);
            t.color = s, t.caretColor = s;
          }
        }
      } else
        e.push(`bg-${i.value.background}`);
    return i.value.text && (hl(i.value.text) ? (t.color = i.value.text, t.caretColor = i.value.text) : e.push(`text-${i.value.text}`)), {
      colorClasses: e,
      colorStyles: t
    };
  });
}
function c0(i, e) {
  const t = N(() => ({
    text: Yf(i) ? i.value : null
  })), {
    colorClasses: n,
    colorStyles: s
  } = hd(t);
  return {
    textColorClasses: n,
    textColorStyles: s
  };
}
function h0(i, e) {
  const t = N(() => ({
    background: Yf(i) ? i.value : null
  })), {
    colorClasses: n,
    colorStyles: s
  } = hd(t);
  return {
    backgroundColorClasses: n,
    backgroundColorStyles: s
  };
}
const u0 = He({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (i) => i !== !0
  }
}, "transition"), f0 = (i, e) => {
  let {
    slots: t
  } = e;
  const {
    transition: n,
    disabled: s,
    group: r,
    ...o
  } = i, {
    component: l = r ? mg : Nf,
    ...a
  } = typeof n == "object" ? n : {};
  return If(l, Ve(typeof n == "string" ? {
    name: s ? "" : n
  } : a, typeof n == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: s,
    group: r
  }).filter((c) => {
    let [h, u] = c;
    return u !== void 0;
  })), o), t);
}, ud = [String, Function, Object, Array], d0 = Symbol.for("vuetify:icons"), io = He({
  icon: {
    type: ud
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), eh = Ma()({
  name: "VComponentIcon",
  props: io(),
  setup(i, e) {
    let {
      slots: t
    } = e;
    return () => {
      const n = i.icon;
      return L(i.tag, null, {
        default: () => {
          var s;
          return [i.icon ? L(n, null, null) : (s = t.default) == null ? void 0 : s.call(t)];
        }
      });
    };
  }
}), p0 = eo({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: io(),
  setup(i, e) {
    let {
      attrs: t
    } = e;
    return () => L(i.tag, Ve(t, {
      style: null
    }), {
      default: () => [L("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(i.icon) ? i.icon.map((n) => Array.isArray(n) ? L("path", {
        d: n[0],
        "fill-opacity": n[1]
      }, null) : L("path", {
        d: n
      }, null)) : L("path", {
        d: i.icon
      }, null)])]
    });
  }
});
eo({
  name: "VLigatureIcon",
  props: io(),
  setup(i) {
    return () => L(i.tag, null, {
      default: () => [i.icon]
    });
  }
});
eo({
  name: "VClassIcon",
  props: io(),
  setup(i) {
    return () => L(i.tag, {
      class: i.icon
    }, null);
  }
});
const O0 = (i) => {
  const e = Bi(d0);
  if (!e) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: N(() => {
      var a;
      const n = de(i);
      if (!n) return {
        component: eh
      };
      let s = n;
      if (typeof s == "string" && (s = s.trim(), s.startsWith("$") && (s = (a = e.aliases) == null ? void 0 : a[s.slice(1)])), s || In(`Could not find aliased icon "${n}"`), Array.isArray(s))
        return {
          component: p0,
          icon: s
        };
      if (typeof s != "string")
        return {
          component: eh,
          icon: s
        };
      const r = Object.keys(e.sets).find((c) => typeof s == "string" && s.startsWith(`${c}:`)), o = r ? s.slice(r.length + 1) : s;
      return {
        component: e.sets[r ?? e.defaultSet].component,
        icon: o
      };
    })
  };
}, m0 = ["x-small", "small", "default", "large", "x-large"], g0 = He({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function y0(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : sd();
  return _a(() => {
    let t, n;
    return vr(m0, i.size) ? t = `${e}--size-${i.size}` : i.size && (n = {
      width: Pe(i.size),
      height: Pe(i.size)
    }), {
      sizeClasses: t,
      sizeStyles: n
    };
  });
}
const v0 = He({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ud,
  ...Hf(),
  ...g0(),
  ...o0({
    tag: "i"
  }),
  ...ad()
}, "VIcon"), b0 = Ma()({
  name: "VIcon",
  props: v0(),
  setup(i, e) {
    let {
      attrs: t,
      slots: n
    } = e;
    const s = G(), {
      themeClasses: r
    } = cd(i), {
      iconData: o
    } = O0(N(() => s.value || i.icon)), {
      sizeClasses: l
    } = y0(i), {
      textColorClasses: a,
      textColorStyles: c
    } = c0(Wf(i, "color"));
    return ld(() => {
      var f, d;
      const h = (f = n.default) == null ? void 0 : f.call(n);
      h && (s.value = (d = ed(h).filter((p) => p.type === gg && p.children && typeof p.children == "string")[0]) == null ? void 0 : d.children);
      const u = !!(t.onClick || t.onClickOnce);
      return L(o.value.component, {
        tag: i.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", r.value, l.value, a.value, {
          "v-icon--clickable": u,
          "v-icon--disabled": i.disabled,
          "v-icon--start": i.start,
          "v-icon--end": i.end
        }, i.class],
        style: [l.value ? void 0 : {
          fontSize: Pe(i.size),
          height: Pe(i.size),
          width: Pe(i.size)
        }, c.value, i.style],
        role: u ? "button" : void 0,
        "aria-hidden": !u,
        tabindex: u ? i.disabled ? -1 : 0 : void 0
      }, {
        default: () => [h]
      });
    }), {};
  }
});
function S0() {
  var i, e;
  return (e = (i = Qt("useRouter")) == null ? void 0 : i.proxy) == null ? void 0 : e.$router;
}
let Co = !1;
function x0(i, e) {
  let t = !1, n, s;
  qt && (bs(() => {
    window.addEventListener("popstate", r), n = i == null ? void 0 : i.beforeEach((o, l, a) => {
      Co ? t ? e(a) : a() : setTimeout(() => t ? e(a) : a()), Co = !0;
    }), s = i == null ? void 0 : i.afterEach(() => {
      Co = !1;
    });
  }), wt(() => {
    window.removeEventListener("popstate", r), n == null || n(), s == null || s();
  }));
  function r(o) {
    var l;
    (l = o.state) != null && l.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
const k0 = Symbol.for("vuetify:display");
function w0() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : sd();
  const t = Bi(k0);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const n = N(() => {
    if (i.mobile != null) return i.mobile;
    if (!i.mobileBreakpoint) return t.mobile.value;
    const r = typeof i.mobileBreakpoint == "number" ? i.mobileBreakpoint : t.thresholds.value[i.mobileBreakpoint];
    return t.width.value < r;
  }), s = N(() => e ? {
    [`${e}--mobile`]: n.value
  } : {});
  return {
    ...t,
    displayClasses: s,
    mobile: n
  };
}
function To(i, e) {
  return {
    x: i.x + e.x,
    y: i.y + e.y
  };
}
function Q0(i, e) {
  return {
    x: i.x - e.x,
    y: i.y - e.y
  };
}
function th(i, e) {
  if (i.side === "top" || i.side === "bottom") {
    const {
      side: t,
      align: n
    } = i, s = n === "left" ? 0 : n === "center" ? e.width / 2 : n === "right" ? e.width : n, r = t === "top" ? 0 : t === "bottom" ? e.height : t;
    return To({
      x: s,
      y: r
    }, e);
  } else if (i.side === "left" || i.side === "right") {
    const {
      side: t,
      align: n
    } = i, s = t === "left" ? 0 : t === "right" ? e.width : t, r = n === "top" ? 0 : n === "center" ? e.height / 2 : n === "bottom" ? e.height : n;
    return To({
      x: s,
      y: r
    }, e);
  }
  return To({
    x: e.width / 2,
    y: e.height / 2
  }, e);
}
const fd = {
  static: C0,
  // specific viewport position, usually centered
  connected: A0
  // connected to a certain element
}, P0 = He({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (i) => typeof i == "function" || i in fd
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function $0(i, e) {
  const t = G({}), n = G();
  qt && to(() => !!(e.isActive.value && i.locationStrategy), (r) => {
    var o, l;
    ue(() => i.locationStrategy, r), wt(() => {
      window.removeEventListener("resize", s), n.value = void 0;
    }), window.addEventListener("resize", s, {
      passive: !0
    }), typeof i.locationStrategy == "function" ? n.value = (o = i.locationStrategy(e, i, t)) == null ? void 0 : o.updateLocation : n.value = (l = fd[i.locationStrategy](e, i, t)) == null ? void 0 : l.updateLocation;
  });
  function s(r) {
    var o;
    (o = n.value) == null || o.call(n, r);
  }
  return {
    contentStyles: t,
    updateLocation: n
  };
}
function C0() {
}
function T0(i, e) {
  const t = Mg(i);
  return e ? t.x += parseFloat(i.style.right || 0) : t.x -= parseFloat(i.style.left || 0), t.y -= parseFloat(i.style.top || 0), t;
}
function A0(i, e, t) {
  (Array.isArray(i.target.value) || i0(i.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [i.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: s,
    preferredOrigin: r
  } = _a(() => {
    const p = Xc(e.location, i.isRtl.value), O = e.origin === "overlap" ? p : e.origin === "auto" ? Po(p) : Xc(e.origin, i.isRtl.value);
    return p.side === O.side && p.align === $o(O).align ? {
      preferredAnchor: qc(p),
      preferredOrigin: qc(O)
    } : {
      preferredAnchor: p,
      preferredOrigin: O
    };
  }), [o, l, a, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => N(() => {
    const O = parseFloat(e[p]);
    return isNaN(O) ? 1 / 0 : O;
  })), h = N(() => {
    if (Array.isArray(e.offset))
      return e.offset;
    if (typeof e.offset == "string") {
      const p = e.offset.split(" ").map(parseFloat);
      return p.length < 2 && p.push(0), p;
    }
    return typeof e.offset == "number" ? [e.offset, 0] : [0, 0];
  });
  let u = !1;
  const f = new ResizeObserver(() => {
    u && d();
  });
  ue([i.target, i.contentEl], (p, O) => {
    let [m, g] = p, [k, S] = O;
    k && !Array.isArray(k) && f.unobserve(k), m && !Array.isArray(m) && f.observe(m), S && f.unobserve(S), g && f.observe(g);
  }, {
    immediate: !0
  }), wt(() => {
    f.disconnect();
  });
  function d() {
    if (u = !1, requestAnimationFrame(() => u = !0), !i.target.value || !i.contentEl.value) return;
    const p = _g(i.target.value), O = T0(i.contentEl.value, i.isRtl.value), m = br(i.contentEl.value), g = 12;
    m.length || (m.push(document.documentElement), i.contentEl.value.style.top && i.contentEl.value.style.left || (O.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), O.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const k = m.reduce((Q, v) => {
      const y = v.getBoundingClientRect(), T = new _i({
        x: v === document.documentElement ? 0 : y.x,
        y: v === document.documentElement ? 0 : y.y,
        width: v.clientWidth,
        height: v.clientHeight
      });
      return Q ? new _i({
        x: Math.max(Q.left, T.left),
        y: Math.max(Q.top, T.top),
        width: Math.min(Q.right, T.right) - Math.max(Q.left, T.left),
        height: Math.min(Q.bottom, T.bottom) - Math.max(Q.top, T.top)
      }) : T;
    }, void 0);
    k.x += g, k.y += g, k.width -= g * 2, k.height -= g * 2;
    let S = {
      anchor: s.value,
      origin: r.value
    };
    function $(Q) {
      const v = new _i(O), y = th(Q.anchor, p), T = th(Q.origin, v);
      let {
        x: _,
        y: D
      } = Q0(y, T);
      switch (Q.anchor.side) {
        case "top":
          D -= h.value[0];
          break;
        case "bottom":
          D += h.value[0];
          break;
        case "left":
          _ -= h.value[0];
          break;
        case "right":
          _ += h.value[0];
          break;
      }
      switch (Q.anchor.align) {
        case "top":
          D -= h.value[1];
          break;
        case "bottom":
          D += h.value[1];
          break;
        case "left":
          _ -= h.value[1];
          break;
        case "right":
          _ += h.value[1];
          break;
      }
      return v.x += _, v.y += D, v.width = Math.min(v.width, a.value), v.height = Math.min(v.height, c.value), {
        overflows: zc(v, k),
        x: _,
        y: D
      };
    }
    let C = 0, M = 0;
    const P = {
      x: 0,
      y: 0
    }, w = {
      x: !1,
      y: !1
    };
    let b = -1;
    for (; ; ) {
      if (b++ > 10) {
        Yg("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: Q,
        y: v,
        overflows: y
      } = $(S);
      C += Q, M += v, O.x += Q, O.y += v;
      {
        const T = jc(S.anchor), _ = y.x.before || y.x.after, D = y.y.before || y.y.after;
        let F = !1;
        if (["x", "y"].forEach((te) => {
          if (te === "x" && _ && !w.x || te === "y" && D && !w.y) {
            const ne = {
              anchor: {
                ...S.anchor
              },
              origin: {
                ...S.origin
              }
            }, W = te === "x" ? T === "y" ? $o : Po : T === "y" ? Po : $o;
            ne.anchor = W(ne.anchor), ne.origin = W(ne.origin);
            const {
              overflows: le
            } = $(ne);
            (le[te].before <= y[te].before && le[te].after <= y[te].after || le[te].before + le[te].after < (y[te].before + y[te].after) / 2) && (S = ne, F = w[te] = !0);
          }
        }), F) continue;
      }
      y.x.before && (C += y.x.before, O.x += y.x.before), y.x.after && (C -= y.x.after, O.x -= y.x.after), y.y.before && (M += y.y.before, O.y += y.y.before), y.y.after && (M -= y.y.after, O.y -= y.y.after);
      {
        const T = zc(O, k);
        P.x = k.width - T.x.before - T.x.after, P.y = k.height - T.y.before - T.y.after, C += T.x.before, O.x += T.x.before, M += T.y.before, O.y += T.y.before;
      }
      break;
    }
    const A = jc(S.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`,
      transformOrigin: `${S.origin.side} ${S.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: Pe(Ao(M)),
      left: i.isRtl.value ? void 0 : Pe(Ao(C)),
      right: i.isRtl.value ? Pe(Ao(-C)) : void 0,
      minWidth: Pe(A === "y" ? Math.min(o.value, p.width) : o.value),
      maxWidth: Pe(ih(Vc(P.x, o.value === 1 / 0 ? 0 : o.value, a.value))),
      maxHeight: Pe(ih(Vc(P.y, l.value === 1 / 0 ? 0 : l.value, c.value)))
    }), {
      available: P,
      contentBox: O
    };
  }
  return ue(() => [s.value, r.value, e.offset, e.minWidth, e.minHeight, e.maxWidth, e.maxHeight], () => d()), bs(() => {
    const p = d();
    if (!p) return;
    const {
      available: O,
      contentBox: m
    } = p;
    m.height > O.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), {
    updateLocation: d
  };
}
function Ao(i) {
  return Math.round(i * devicePixelRatio) / devicePixelRatio;
}
function ih(i) {
  return Math.ceil(i * devicePixelRatio) / devicePixelRatio;
}
let fl = !0;
const Sr = [];
function Z0(i) {
  !fl || Sr.length ? (Sr.push(i), dl()) : (fl = !1, i(), dl());
}
let nh = -1;
function dl() {
  cancelAnimationFrame(nh), nh = requestAnimationFrame(() => {
    const i = Sr.shift();
    i && i(), Sr.length ? dl() : fl = !0;
  });
}
const sr = {
  none: null,
  close: R0,
  block: V0,
  reposition: E0
}, _0 = He({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (i) => typeof i == "function" || i in sr
  }
}, "VOverlay-scroll-strategies");
function M0(i, e) {
  if (!qt) return;
  let t;
  Sn(async () => {
    t == null || t.stop(), e.isActive.value && i.scrollStrategy && (t = Ta(), await new Promise((n) => setTimeout(n)), t.active && t.run(() => {
      var n;
      typeof i.scrollStrategy == "function" ? i.scrollStrategy(e, i, t) : (n = sr[i.scrollStrategy]) == null || n.call(sr, e, i, t);
    }));
  }), wt(() => {
    t == null || t.stop();
  });
}
function R0(i) {
  function e(t) {
    i.isActive.value = !1;
  }
  dd(i.targetEl.value ?? i.contentEl.value, e);
}
function V0(i, e) {
  var o;
  const t = (o = i.root.value) == null ? void 0 : o.offsetParent, n = [.../* @__PURE__ */ new Set([...br(i.targetEl.value, e.contained ? t : void 0), ...br(i.contentEl.value, e.contained ? t : void 0)])].filter((l) => !l.classList.contains("v-overlay-scroll-blocked")), s = window.innerWidth - document.documentElement.offsetWidth, r = ((l) => Ra(l) && l)(t || document.documentElement);
  r && i.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((l, a) => {
    l.style.setProperty("--v-body-scroll-x", Pe(-l.scrollLeft)), l.style.setProperty("--v-body-scroll-y", Pe(-l.scrollTop)), l !== document.documentElement && l.style.setProperty("--v-scrollbar-offset", Pe(s)), l.classList.add("v-overlay-scroll-blocked");
  }), wt(() => {
    n.forEach((l, a) => {
      const c = parseFloat(l.style.getPropertyValue("--v-body-scroll-x")), h = parseFloat(l.style.getPropertyValue("--v-body-scroll-y")), u = l.style.scrollBehavior;
      l.style.scrollBehavior = "auto", l.style.removeProperty("--v-body-scroll-x"), l.style.removeProperty("--v-body-scroll-y"), l.style.removeProperty("--v-scrollbar-offset"), l.classList.remove("v-overlay-scroll-blocked"), l.scrollLeft = -c, l.scrollTop = -h, l.style.scrollBehavior = u;
    }), r && i.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function E0(i, e, t) {
  let n = !1, s = -1, r = -1;
  function o(l) {
    Z0(() => {
      var h, u;
      const a = performance.now();
      (u = (h = i.updateLocation).value) == null || u.call(h, l), n = (performance.now() - a) / (1e3 / 60) > 2;
    });
  }
  r = (typeof requestIdleCallback > "u" ? (l) => l() : requestIdleCallback)(() => {
    t.run(() => {
      dd(i.targetEl.value ?? i.contentEl.value, (l) => {
        n ? (cancelAnimationFrame(s), s = requestAnimationFrame(() => {
          s = requestAnimationFrame(() => {
            o(l);
          });
        })) : o(l);
      });
    });
  }), wt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(r), cancelAnimationFrame(s);
  });
}
function dd(i, e) {
  const t = [document, ...br(i)];
  t.forEach((n) => {
    n.addEventListener("scroll", e, {
      passive: !0
    });
  }), wt(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", e);
    });
  });
}
const L0 = Symbol.for("vuetify:v-menu"), X0 = He({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function D0(i, e) {
  let t = () => {
  };
  function n(o) {
    t == null || t();
    const l = Number(o ? i.openDelay : i.closeDelay);
    return new Promise((a) => {
      t = Ag(l, () => {
        e == null || e(o), a(o);
      });
    });
  }
  function s() {
    return n(!0);
  }
  function r() {
    return n(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: s,
    runCloseDelay: r
  };
}
const q0 = He({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...X0()
}, "VOverlay-activator");
function j0(i, e) {
  let {
    isActive: t,
    isTop: n,
    contentEl: s
  } = e;
  const r = Qt("useActivator"), o = G();
  let l = !1, a = !1, c = !0;
  const h = N(() => i.openOnFocus || i.openOnFocus == null && i.openOnHover), u = N(() => i.openOnClick || i.openOnClick == null && !i.openOnHover && !h.value), {
    runOpenDelay: f,
    runCloseDelay: d
  } = D0(i, (w) => {
    w === (i.openOnHover && l || h.value && a) && !(i.openOnHover && t.value && !n.value) && (t.value !== w && (c = !0), t.value = w);
  }), p = G(), O = {
    onClick: (w) => {
      w.stopPropagation(), o.value = w.currentTarget || w.target, t.value || (p.value = [w.clientX, w.clientY]), t.value = !t.value;
    },
    onMouseenter: (w) => {
      var b;
      (b = w.sourceCapabilities) != null && b.firesTouchEvents || (l = !0, o.value = w.currentTarget || w.target, f());
    },
    onMouseleave: (w) => {
      l = !1, d();
    },
    onFocus: (w) => {
      Tg(w.target, ":focus-visible") !== !1 && (a = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, f());
    },
    onBlur: (w) => {
      a = !1, w.stopPropagation(), d();
    }
  }, m = N(() => {
    const w = {};
    return u.value && (w.onClick = O.onClick), i.openOnHover && (w.onMouseenter = O.onMouseenter, w.onMouseleave = O.onMouseleave), h.value && (w.onFocus = O.onFocus, w.onBlur = O.onBlur), w;
  }), g = N(() => {
    const w = {};
    if (i.openOnHover && (w.onMouseenter = () => {
      l = !0, f();
    }, w.onMouseleave = () => {
      l = !1, d();
    }), h.value && (w.onFocusin = () => {
      a = !0, f();
    }, w.onFocusout = () => {
      a = !1, d();
    }), i.closeOnContentClick) {
      const b = Bi(L0, null);
      w.onClick = () => {
        t.value = !1, b == null || b.closeParents();
      };
    }
    return w;
  }), k = N(() => {
    const w = {};
    return i.openOnHover && (w.onMouseenter = () => {
      c && (l = !0, c = !1, f());
    }, w.onMouseleave = () => {
      l = !1, d();
    }), w;
  });
  ue(n, (w) => {
    var b;
    w && (i.openOnHover && !l && (!h.value || !a) || h.value && !a && (!i.openOnHover || !l)) && !((b = s.value) != null && b.contains(document.activeElement)) && (t.value = !1);
  }), ue(t, (w) => {
    w || setTimeout(() => {
      p.value = void 0;
    });
  }, {
    flush: "post"
  });
  const S = Lc();
  Sn(() => {
    S.value && bs(() => {
      o.value = S.el;
    });
  });
  const $ = Lc(), C = N(() => i.target === "cursor" && p.value ? p.value : $.value ? $.el : pd(i.target, r) || o.value), M = N(() => Array.isArray(C.value) ? void 0 : C.value);
  let P;
  return ue(() => !!i.activator, (w) => {
    w && qt ? (P = Ta(), P.run(() => {
      z0(i, r, {
        activatorEl: o,
        activatorEvents: m
      });
    })) : P && P.stop();
  }, {
    flush: "post",
    immediate: !0
  }), wt(() => {
    P == null || P.stop();
  }), {
    activatorEl: o,
    activatorRef: S,
    target: C,
    targetEl: M,
    targetRef: $,
    activatorEvents: m,
    contentEvents: g,
    scrimEvents: k
  };
}
function z0(i, e, t) {
  let {
    activatorEl: n,
    activatorEvents: s
  } = t;
  ue(() => i.activator, (a, c) => {
    if (c && a !== c) {
      const h = l(c);
      h && o(h);
    }
    a && bs(() => r());
  }, {
    immediate: !0
  }), ue(() => i.activatorProps, () => {
    r();
  }), wt(() => {
    o();
  });
  function r() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i.activatorProps;
    a && Vg(a, Ve(s.value, c));
  }
  function o() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i.activatorProps;
    a && Eg(a, Ve(s.value, c));
  }
  function l() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i.activator;
    const c = pd(a, e);
    return n.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, n.value;
  }
}
function pd(i, e) {
  var n, s;
  if (!i) return;
  let t;
  if (i === "parent") {
    let r = (s = (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$el) == null ? void 0 : s.parentNode;
    for (; r != null && r.hasAttribute("data-no-activator"); )
      r = r.parentNode;
    t = r;
  } else typeof i == "string" ? t = document.querySelector(i) : "$el" in i ? t = i.$el : t = i;
  return t;
}
function B0() {
  if (!qt) return Gt(!1);
  const {
    ssr: i
  } = w0();
  if (i) {
    const e = Gt(!1);
    return Si(() => {
      e.value = !0;
    }), e;
  } else
    return Gt(!0);
}
const Y0 = He({
  eager: Boolean
}, "lazy");
function I0(i, e) {
  const t = Gt(!1), n = N(() => t.value || i.eager || e.value);
  ue(e, () => t.value = !0);
  function s() {
    i.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: n,
    onAfterLeave: s
  };
}
function N0() {
  const e = Qt("useScopeId").vnode.scopeId;
  return {
    scopeId: e ? {
      [e]: ""
    } : void 0
  };
}
const sh = Symbol.for("vuetify:stack"), Tn = Vi([]);
function W0(i, e, t) {
  const n = Qt("useStack"), s = !t, r = Bi(sh, void 0), o = Vi({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ca(sh, o);
  const l = Gt(+e.value);
  to(i, () => {
    var u;
    const h = (u = Tn.at(-1)) == null ? void 0 : u[1];
    l.value = h ? h + 10 : +e.value, s && Tn.push([n.uid, l.value]), r == null || r.activeChildren.add(n.uid), wt(() => {
      if (s) {
        const f = Bf(Tn).findIndex((d) => d[0] === n.uid);
        Tn.splice(f, 1);
      }
      r == null || r.activeChildren.delete(n.uid);
    });
  });
  const a = Gt(!0);
  s && Sn(() => {
    var u;
    const h = ((u = Tn.at(-1)) == null ? void 0 : u[0]) === n.uid;
    setTimeout(() => a.value = h);
  });
  const c = N(() => !o.activeChildren.size);
  return {
    globalTop: yg(a),
    localTop: c,
    stackStyles: N(() => ({
      zIndex: l.value
    }))
  };
}
function U0(i) {
  return {
    teleportTarget: N(() => {
      const t = i();
      if (t === !0 || !qt) return;
      const n = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (n == null) {
        $a(`Unable to locate target ${t}`);
        return;
      }
      let s = [...n.children].find((r) => r.matches(".v-overlay-container"));
      return s || (s = document.createElement("div"), s.className = "v-overlay-container", n.appendChild(s)), s;
    })
  };
}
function G0() {
  return !0;
}
function Od(i, e, t) {
  if (!i || md(i, t) === !1) return !1;
  const n = od(e);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === i.target) return !1;
  const s = (typeof t.value == "object" && t.value.include || (() => []))();
  return s.push(e), !s.some((r) => r == null ? void 0 : r.contains(i.target));
}
function md(i, e) {
  return (typeof e.value == "object" && e.value.closeConditional || G0)(i);
}
function F0(i, e, t) {
  const n = typeof t.value == "function" ? t.value : t.value.handler;
  i.shadowTarget = i.target, e._clickOutside.lastMousedownWasOutside && Od(i, e, t) && setTimeout(() => {
    md(i, t) && n && n(i);
  }, 0);
}
function rh(i, e) {
  const t = od(i);
  e(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && e(t);
}
const H0 = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(i, e) {
    const t = (s) => F0(s, i, e), n = (s) => {
      i._clickOutside.lastMousedownWasOutside = Od(s, i, e);
    };
    rh(i, (s) => {
      s.addEventListener("click", t, !0), s.addEventListener("mousedown", n, !0);
    }), i._clickOutside || (i._clickOutside = {
      lastMousedownWasOutside: !1
    }), i._clickOutside[e.instance.$.uid] = {
      onClick: t,
      onMousedown: n
    };
  },
  beforeUnmount(i, e) {
    i._clickOutside && (rh(i, (t) => {
      var r;
      if (!t || !((r = i._clickOutside) != null && r[e.instance.$.uid])) return;
      const {
        onClick: n,
        onMousedown: s
      } = i._clickOutside[e.instance.$.uid];
      t.removeEventListener("click", n, !0), t.removeEventListener("mousedown", s, !0);
    }), delete i._clickOutside[e.instance.$.uid]);
  }
};
function K0(i) {
  const {
    modelValue: e,
    color: t,
    ...n
  } = i;
  return L(Nf, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [i.modelValue && L("div", Ve({
      class: ["v-overlay__scrim", i.color.backgroundColorClasses.value],
      style: i.color.backgroundColorStyles.value
    }, n), null)]
  });
}
const J0 = He({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...q0(),
  ...Hf(),
  ...l0(),
  ...Y0(),
  ...P0(),
  ..._0(),
  ...ad(),
  ...u0()
}, "VOverlay"), e1 = Ma()({
  name: "VOverlay",
  directives: {
    ClickOutside: H0
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...J0()
  },
  emits: {
    "click:outside": (i) => !0,
    "update:modelValue": (i) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(i, e) {
    let {
      slots: t,
      attrs: n,
      emit: s
    } = e;
    const r = Qt("VOverlay"), o = G(), l = G(), a = G(), c = n0(i, "modelValue"), h = N({
      get: () => c.value,
      set: (fe) => {
        fe && i.disabled || (c.value = fe);
      }
    }), {
      themeClasses: u
    } = cd(i), {
      rtlClasses: f,
      isRtl: d
    } = r0(), {
      hasContent: p,
      onAfterLeave: O
    } = I0(i, h), m = h0(N(() => typeof i.scrim == "string" ? i.scrim : null)), {
      globalTop: g,
      localTop: k,
      stackStyles: S
    } = W0(h, Wf(i, "zIndex"), i._disableGlobalStack), {
      activatorEl: $,
      activatorRef: C,
      target: M,
      targetEl: P,
      targetRef: w,
      activatorEvents: b,
      contentEvents: A,
      scrimEvents: Q
    } = j0(i, {
      isActive: h,
      isTop: k,
      contentEl: a
    }), {
      teleportTarget: v
    } = U0(() => {
      var Cn, _c, Mc;
      const fe = i.attach || i.contained;
      if (fe) return fe;
      const We = ((Cn = $ == null ? void 0 : $.value) == null ? void 0 : Cn.getRootNode()) || ((Mc = (_c = r.proxy) == null ? void 0 : _c.$el) == null ? void 0 : Mc.getRootNode());
      return We instanceof ShadowRoot ? We : !1;
    }), {
      dimensionStyles: y
    } = a0(i), T = B0(), {
      scopeId: _
    } = N0();
    ue(() => i.disabled, (fe) => {
      fe && (h.value = !1);
    });
    const {
      contentStyles: D,
      updateLocation: F
    } = $0(i, {
      isRtl: d,
      contentEl: a,
      target: M,
      isActive: h
    });
    M0(i, {
      root: o,
      contentEl: a,
      targetEl: P,
      isActive: h,
      updateLocation: F
    });
    function te(fe) {
      s("click:outside", fe), i.persistent ? me() : h.value = !1;
    }
    function ne(fe) {
      return h.value && g.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!i.scrim || fe.target === l.value || fe instanceof MouseEvent && fe.shadowTarget === l.value);
    }
    qt && ue(h, (fe) => {
      fe ? window.addEventListener("keydown", W) : window.removeEventListener("keydown", W);
    }, {
      immediate: !0
    }), Uf(() => {
      qt && window.removeEventListener("keydown", W);
    });
    function W(fe) {
      var We, Cn;
      fe.key === "Escape" && g.value && (i.persistent ? me() : (h.value = !1, (We = a.value) != null && We.contains(document.activeElement) && ((Cn = $.value) == null || Cn.focus())));
    }
    const le = S0();
    to(() => i.closeOnBack, () => {
      x0(le, (fe) => {
        g.value && h.value ? (fe(!1), i.persistent ? me() : h.value = !1) : fe();
      });
    });
    const K = G();
    ue(() => h.value && (i.absolute || i.contained) && v.value == null, (fe) => {
      if (fe) {
        const We = e0(o.value);
        We && We !== document.scrollingElement && (K.value = We.scrollTop);
      }
    });
    function me() {
      i.noClickAnimation || a.value && Rg(a.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Jg
      });
    }
    function Nt() {
      s("afterEnter");
    }
    function ni() {
      O(), s("afterLeave");
    }
    return ld(() => {
      var fe;
      return L(he, null, [(fe = t.activator) == null ? void 0 : fe.call(t, {
        isActive: h.value,
        targetRef: w,
        props: Ve({
          ref: C
        }, b.value, i.activatorProps)
      }), T.value && p.value && L(Jr, {
        disabled: !v.value,
        to: v.value
      }, {
        default: () => [L("div", Ve({
          class: ["v-overlay", {
            "v-overlay--absolute": i.absolute || i.contained,
            "v-overlay--active": h.value,
            "v-overlay--contained": i.contained
          }, u.value, f.value, i.class],
          style: [S.value, {
            "--v-overlay-opacity": i.opacity,
            top: Pe(K.value)
          }, i.style],
          ref: o
        }, _, n), [L(K0, Ve({
          color: m,
          modelValue: h.value && !!i.scrim,
          ref: l
        }, Q.value), null), L(f0, {
          appear: !0,
          persisted: !0,
          transition: i.transition,
          target: M.value,
          onAfterEnter: Nt,
          onAfterLeave: ni
        }, {
          default: () => {
            var We;
            return [Aa(L("div", Ve({
              ref: a,
              class: ["v-overlay__content", i.contentClass],
              style: [y.value, D.value]
            }, A.value, i.contentProps), [(We = t.default) == null ? void 0 : We.call(t, {
              isActive: h
            })]), [[Za, h.value], [vg("click-outside"), {
              handler: te,
              closeConditional: ne,
              include: () => [$.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: $,
      scrimEl: l,
      target: M,
      animateClick: me,
      contentEl: a,
      globalTop: g,
      localTop: k,
      updateLocation: F
    };
  }
}), $e = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, s] of e)
    t[n] = s;
  return t;
}, t1 = {
  __name: "SBtn",
  props: {
    title: {
      type: String,
      required: !1,
      default: ""
    },
    to: {
      type: String,
      required: !1,
      default: null
    },
    height: {
      type: [String, Number],
      required: !1,
      default: null
    },
    size: {
      type: String,
      default: "default",
      //기본 medium
      validator: (i) => ["default", "x-small", "small", "large", "x-large"].includes(i)
    },
    color: {
      type: String,
      default: "blue"
    },
    icon: {
      type: String,
      default: void 0
    }
  },
  setup(i) {
    const e = i, t = bg(), n = N(() => !!(t.icon || e.icon));
    return (s, r) => {
      const o = q("v-btn");
      return Z(), J(o, {
        class: "s-btn",
        elevation: "0",
        "s-color": i.color,
        size: i.size,
        to: i.to,
        height: i.height,
        icon: i.icon
      }, Ei({ _: 2 }, [
        n.value && !s.$slots.default ? {
          name: "icon",
          fn: R(() => [
            L(de(b0), null, {
              default: R(() => [
                ee(B(i.icon), 1)
              ]),
              _: 1
            })
          ]),
          key: "0"
        } : {
          name: "default",
          fn: R(() => [
            ee(B(i.title) + " ", 1),
            ie(s.$slots, "default", {}, void 0, !0)
          ]),
          key: "1"
        }
      ]), 1032, ["s-color", "size", "to", "height", "icon"]);
    };
  }
}, Je = /* @__PURE__ */ $e(t1, [["__scopeId", "data-v-5e15c61d"]]), i1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_206_5961)'%3e%3cpath%20d='M8%200C3.584%200%200%203.584%200%208C0%2012.416%203.584%2016%208%2016C12.416%2016%2016%2012.416%2016%208C16%203.584%2012.416%200%208%200ZM8.728%2012.92C8.48%2013.168%208.048%2012.992%208.048%2012.64V12C8.032%2012%208.016%2012%208%2012C6.976%2012%205.952%2011.608%205.168%2010.832C4.024%209.688%203.72%208.016%204.256%206.592C4.408%206.184%204.944%206.08%205.248%206.392C5.424%206.568%205.464%206.824%205.384%207.048C5.016%208.04%205.224%209.192%206.024%209.992C6.584%2010.552%207.32%2010.816%208.056%2010.8V10.048C8.056%209.688%208.488%209.512%208.736%209.768L10.032%2011.064C10.192%2011.224%2010.192%2011.472%2010.032%2011.632L8.728%2012.92ZM10.752%209.616C10.576%209.44%2010.536%209.184%2010.616%208.96C10.984%207.968%2010.776%206.816%209.976%206.016C9.416%205.456%208.68%205.184%207.952%205.2V5.952C7.952%206.312%207.52%206.488%207.272%206.232L5.968%204.944C5.808%204.784%205.808%204.536%205.968%204.376L7.264%203.08C7.512%202.832%207.944%203.008%207.944%203.36V4.008C8.984%203.992%2010.032%204.368%2010.824%205.168C11.968%206.312%2012.272%207.984%2011.736%209.408C11.584%209.824%2011.056%209.928%2010.752%209.616Z'%20fill='%231297F2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_206_5961'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", n1 = { class: "position-relative refresh-time-wrapper" }, s1 = { class: "refresh-time" }, r1 = ["src"], o1 = {
  __name: "SRefreshBtn",
  props: {
    onClickRefresh: {
      type: Function,
      required: !0
    },
    refreshDate: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    refreshDateTitle: {
      type: String,
      default: "기준일자"
    }
  },
  setup(i) {
    const e = i, t = N(() => {
      const n = e.refreshDate.getFullYear(), s = (e.refreshDate.getMonth() + 1).toString().padStart(2, "0"), r = e.refreshDate.getDate().toString().padStart(2, "0"), o = e.refreshDate.getHours().toString().padStart(2, "0"), l = e.refreshDate.getMinutes().toString().padStart(2, "0"), a = e.refreshDate.getSeconds().toString().padStart(2, "0");
      return `${n}-${s}-${r} ${o}:${l}:${a}`;
    });
    return (n, s) => (Z(), X("span", n1, [
      V("span", s1, B(i.refreshDateTitle) + " : " + B(t.value), 1),
      V("img", {
        class: "cursor-pointer ml-1",
        height: "16",
        width: "16",
        src: de(i1),
        onClick: s[0] || (s[0] = (...r) => i.onClickRefresh && i.onClickRefresh(...r))
      }, null, 8, r1)
    ]));
  }
}, SA = /* @__PURE__ */ $e(o1, [["__scopeId", "data-v-4f139fd8"]]), l1 = {};
function a1(i, e) {
  const t = q("v-text-field"), n = q("v-col"), s = q("v-checkbox"), r = q("v-row");
  return Z(), J(r, null, {
    default: R(() => [
      L(n, null, {
        default: R(() => [
          L(t, {
            density: "compact",
            variant: "outlined"
          })
        ]),
        _: 1
      }),
      L(n, null, {
        default: R(() => [
          L(s, {
            density: "compact",
            variant: "outlined"
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const xA = /* @__PURE__ */ $e(l1, [["render", a1]]), c1 = { class: "shell-script-wrapper" }, h1 = { class: "line-numbers" }, kA = {
  __name: "SShellScriptInput",
  props: /* @__PURE__ */ Gf({
    labelTitle: {
      type: String,
      default: null,
      required: !1
    }
  }, {
    modelValue: {
      type: String,
      default: "",
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i) {
    const e = Ff(i, "modelValue"), t = G(1), n = () => {
      t.value = e.value.split(`
`).length;
    };
    return n(), (s, r) => {
      const o = q("v-label"), l = q("v-textarea");
      return Z(), X(he, null, [
        i.labelTitle ? (Z(), J(o, { key: 0 }, {
          default: R(() => [
            ee(B(i.labelTitle), 1)
          ]),
          _: 1
        })) : re("", !0),
        V("div", c1, [
          V("div", h1, [
            (Z(!0), X(he, null, Ze(t.value, (a) => (Z(), X("span", { key: a }, B(a), 1))), 128))
          ]),
          L(l, {
            modelValue: e.value,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => e.value = a),
            placeholder: "",
            "auto-grow": "",
            rows: "10",
            outlined: "",
            class: "shell-script-textarea",
            onInput: n
          }, null, 8, ["modelValue"])
        ])
      ], 64);
    };
  }
}, u1 = { class: "s-file-input" }, wA = {
  __name: "SFileInputBtn",
  props: {
    placeholder: {
      type: String,
      default: "파일을 선택하세요"
    },
    modelValue: {
      type: [Object, String],
      default: null
    },
    errorMessages: {
      type: Array,
      default: () => []
    },
    btnDisabled: {
      type: Boolean,
      default: !1
    },
    hideDetails: {
      type: [String, Boolean],
      default: "auto"
    },
    buttonText: {
      type: String,
      default: "파일 찾기"
    },
    accept: {
      type: String,
      default: "*"
    }
  },
  emits: ["update:model-value"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G(null), r = G(null), o = (l) => {
      s.value = l, r.value = l == null ? void 0 : l.name, n("update:model-value", l);
    };
    return Si(() => {
      s.value = t.modelValue;
    }), (l, a) => {
      const c = q("v-file-input"), h = q("v-text-field");
      return Z(), X("div", u1, [
        L(c, {
          ref: "importFile",
          "model-value": s.value,
          class: "d-none",
          "onUpdate:modelValue": o,
          accept: i.accept
        }, null, 8, ["model-value", "accept"]),
        L(h, {
          "model-value": r.value,
          variant: "outlined",
          density: "compact",
          "hide-details": i.hideDetails,
          readonly: "",
          "error-messages": i.errorMessages,
          placeholder: i.placeholder
        }, null, 8, ["model-value", "hide-details", "error-messages", "placeholder"]),
        L(de(Je), {
          height: "30",
          variant: "outlined",
          disabled: i.btnDisabled,
          onClick: a[0] || (a[0] = (u) => l.$refs.importFile.click())
        }, {
          default: R(() => [
            ee(B(i.buttonText), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]);
    };
  }
}, f1 = { class: "s-key-value-selector__filter" }, d1 = { class: "s-key-value-selector__table" }, p1 = { key: 0 }, O1 = {
  colspan: "3",
  class: "s-key-value-selector__empty"
}, m1 = { class: "s-key-value-selector__add-item" }, g1 = { class: "s-key-value-selector__actions" }, y1 = { class: "s-key-value-selector__buttons" }, v1 = {
  __name: "SKeyValueSelect",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    keyList: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    displayText: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "label",
      validator: (i) => ["label", "tag"].includes(i)
    },
    applyButtonText: {
      type: String,
      default: "적용"
    },
    cancelButtonText: {
      type: String,
      default: "취소"
    },
    resetButtonText: {
      type: String,
      default: "초기화"
    },
    typeText: {
      type: Object,
      default: () => ({
        title: null,
        key: null,
        value: null,
        add: null,
        select: null
      }),
      description: "타입에 따른 텍스트 설정"
    },
    allSelectButtonText: {
      type: String,
      default: "전체 선택"
    },
    getAvailableValues: {
      type: Function,
      default: () => []
    }
  },
  emits: [
    "update:model-value",
    "cancel",
    "apply",
    "add-label"
  ],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G([]), r = G([]), o = G(!1), l = G({}), a = async (v) => {
      const y = v.filter((_) => _ && !l.value[_]);
      if (!y.length) return;
      const T = y.map(async (_) => {
        try {
          const D = { keys: [_] };
          let F = [];
          F = await t.getAvailableValues(_);
          let te = [];
          return F.length > 0 && typeof F[0] == "object" && "value" in F[0] ? te = F.map((ne) => {
            const { value: W } = ne, le = W.split(":");
            return le.length > 1 ? le[1] : W;
          }) : te = F.map((ne) => {
            const W = ne.split(":");
            return W.length > 1 ? W[1] : ne;
          }), { key: _, values: te };
        } catch (D) {
          return console.error("Failed to fetch values for key:", _, D), { key: _, values: [] };
        }
      });
      try {
        (await Promise.all(T)).forEach(({ key: D, values: F }) => {
          l.value[D] = F;
        });
      } catch (_) {
        console.error("Error fetching value lists in parallel:", _);
      }
    };
    Si(() => {
      s.value = [...t.modelValue || []], r.value = [];
      const v = s.value.map((y) => y.key).filter(Boolean);
      v.length > 0 && a(v);
    }), ue(
      () => t.modelValue,
      (v) => {
        s.value = [...v || []], o.value || (r.value = []);
        const y = v.map((T) => T.key).filter(Boolean);
        y.length > 0 && a(y);
      },
      { deep: !0 }
    ), ue(
      () => o.value,
      (v) => {
        v && (r.value = s.value.map((y) => ({
          key: y.key,
          values: [...y.values],
          isKeyMenuOpen: !1,
          isValueMenuOpen: !1
        })));
      }
    );
    const c = N(() => r.value.some((v) => {
      var y;
      return v.key && ((y = v.values) == null ? void 0 : y.length) > 0;
    }) || r.value.length > 0), h = N(() => {
      var y;
      if (t.displayText) return t.displayText;
      const v = ((y = t.modelValue) == null ? void 0 : y.filter((T) => T.key && T.values.length > 0).length) || 0;
      return v === 0 ? t.typeText.empty : `${t.typeText.title} ${v}개`;
    }), u = () => t.keyList, f = (v) => {
      var y;
      return (y = r.value[v]) != null && y.key ? l.value[r.value[v].key] ? l.value[r.value[v].key] : [] : [];
    }, d = () => {
      r.value.push({
        key: "",
        values: [],
        isKeyMenuOpen: !1,
        isValueMenuOpen: !1
      });
    }, p = async (v, y) => {
      r.value[y].key = v, r.value[y].values = [], r.value[y].isKeyMenuOpen = !1, l.value[v] || a([v]);
    }, O = (v, y) => {
      const T = r.value[y], _ = T.values.indexOf(v);
      _ === -1 ? T.values.push(v) : T.values.splice(_, 1);
    }, m = (v) => r.value[v].values.length === f(v).length, g = (v) => r.value[v].values.length > 0 && !m(v), k = (v) => {
      const y = r.value[v];
      m(v) ? y.values = [] : y.values = [...f(v)];
    }, S = (v) => {
      r.value.splice(v, 1);
    }, $ = () => {
      s.value = [...t.modelValue || []], r.value = [], o.value = !1, n("cancel");
    }, C = () => {
      const v = r.value.filter(
        (y) => y.key && y.values.length
      );
      s.value = [...v], n(
        "update:model-value",
        v.map((y) => ({
          key: y.key,
          values: y.values
        }))
      ), n(
        "apply",
        v.map((y) => ({
          key: y.key,
          values: y.values
        }))
      ), o.value = !1, r.value = [];
    }, M = (v, y) => {
      y == null || y.stopPropagation();
    }, P = (v, y) => {
      y == null || y.stopPropagation(), v.isKeyMenuOpen || (v.isValueMenuOpen = !1);
    }, w = (v) => {
      if (r.value.some(
        (_) => _.isKeyMenuOpen || _.isValueMenuOpen
      )) {
        v == null || v.preventDefault(), v == null || v.stopPropagation();
        return;
      }
      const T = r.value.filter(
        (_) => _.key && _.values.length
      );
      s.value = [...T], n(
        "update:model-value",
        T.map((_) => ({
          key: _.key,
          values: _.values
        }))
      ), n(
        "apply",
        T.map((_) => ({
          key: _.key,
          values: _.values
        }))
      ), o.value = !1, r.value = [];
    }, b = N(() => r.value.filter((v) => v)), A = (v) => {
      const y = r.value[v];
      y.values = [], y.isValueMenuOpen = !1;
    }, Q = (v) => {
      const y = r.value[v];
      y.isValueMenuOpen = !1;
    };
    return (v, y) => {
      const T = q("v-list-item"), _ = q("v-list"), D = q("v-menu"), F = q("v-checkbox-btn"), te = q("v-divider"), ne = q("v-list-item-action");
      return Z(), J(D, {
        modelValue: o.value,
        "onUpdate:modelValue": y[0] || (y[0] = (W) => o.value = W),
        class: "s-key-value-selector",
        "close-on-content-click": !1,
        "close-on-click": !1,
        "max-height": 300,
        location: "bottom",
        offset: 5,
        transition: "scroll-y-transition",
        "onClick:outside": w
      }, {
        activator: R(({ props: W, isActive: le }) => [
          L(de(Je), Ve(W, {
            class: "s-key-value-selector__button",
            variant: "outlined",
            color: "black",
            "append-icon": le ? "mdi-menu-up" : "mdi-menu-down"
          }), {
            default: R(() => [
              ee(B(h.value), 1)
            ]),
            _: 2
          }, 1040, ["append-icon"])
        ]),
        default: R(() => [
          L(_, { class: "s-key-value-selector__list" }, {
            default: R(() => [
              V("div", f1, [
                V("table", d1, [
                  V("thead", null, [
                    V("tr", null, [
                      V("th", null, B(i.typeText.key), 1),
                      V("th", null, B(i.typeText.value), 1),
                      y[1] || (y[1] = V("th", { width: "40" }, null, -1))
                    ])
                  ]),
                  V("tbody", null, [
                    !c.value && !r.value.length ? (Z(), X("tr", p1, [
                      V("td", O1, [
                        V("div", m1, B(i.typeText.empty), 1)
                      ])
                    ])) : re("", !0),
                    (Z(!0), X(he, null, Ze(b.value, (W, le) => (Z(), X("tr", {
                      key: "adding-" + le
                    }, [
                      V("td", null, [
                        W ? (Z(), J(D, {
                          key: 0,
                          "close-on-content-click": !1,
                          "close-on-click": !1,
                          modelValue: W.isKeyMenuOpen,
                          "onUpdate:modelValue": (K) => W.isKeyMenuOpen = K,
                          "max-height": 300,
                          location: "bottom",
                          offset: 5,
                          density: "compact",
                          transition: "scroll-y-transition",
                          "onClick:outside": Ye((K) => M(W, K), ["stop"])
                        }, {
                          activator: R(({ props: K, isActive: me }) => [
                            L(de(Je), Ve({ ref_for: !0 }, K, {
                              variant: "outlined",
                              color: "black",
                              class: "s-key-value-selector__button",
                              "append-icon": me ? "mdi-menu-up" : "mdi-menu-down"
                            }), {
                              default: R(() => [
                                ee(B(W.key || i.typeText.select), 1)
                              ]),
                              _: 2
                            }, 1040, ["append-icon"])
                          ]),
                          default: R(() => [
                            L(_, null, {
                              default: R(() => [
                                (Z(!0), X(he, null, Ze(u(), (K) => (Z(), J(T, {
                                  class: "s-key-value-selector__list-item",
                                  key: K,
                                  value: K,
                                  onClick: (me) => p(K, le)
                                }, {
                                  default: R(() => [
                                    ee(B(K), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onClick"]))), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue", "onClick:outside"])) : re("", !0)
                      ]),
                      V("td", null, [
                        W ? (Z(), J(D, {
                          key: 0,
                          "close-on-content-click": !1,
                          "close-on-click": !1,
                          modelValue: W.isValueMenuOpen,
                          "onUpdate:modelValue": (K) => W.isValueMenuOpen = K,
                          "max-height": 300,
                          location: "bottom",
                          offset: 5,
                          transition: "scroll-y-transition",
                          "onClick:outside": Ye((K) => P(W, K), ["stop"])
                        }, {
                          activator: R(({ props: K, isActive: me }) => [
                            L(de(Je), Ve({ ref_for: !0 }, K, {
                              variant: "outlined",
                              color: "black",
                              class: "s-key-value-selector__button",
                              disabled: !W.key,
                              "append-icon": me ? "mdi-menu-up" : "mdi-menu-down"
                            }), {
                              default: R(() => [
                                ee(B(W.values.length ? `${i.typeText.value} ${W.values.length}개` : i.typeText.selectValue), 1)
                              ]),
                              _: 2
                            }, 1040, ["disabled", "append-icon"])
                          ]),
                          default: R(() => [
                            L(_, null, {
                              default: R(() => [
                                L(T, {
                                  class: "s-key-value-selector__list-item",
                                  title: i.allSelectButtonText,
                                  onClick: Ye((K) => k(le), ["stop"]),
                                  disabled: !W.key
                                }, {
                                  prepend: R(() => [
                                    L(F, {
                                      density: "compact",
                                      class: "s-key-value-selector__checkbox-btn",
                                      "model-value": m(le),
                                      indeterminate: g(le),
                                      disabled: !W.key
                                    }, null, 8, ["model-value", "indeterminate", "disabled"])
                                  ]),
                                  _: 2
                                }, 1032, ["title", "onClick", "disabled"]),
                                L(te),
                                (Z(!0), X(he, null, Ze(f(le), (K) => (Z(), J(T, {
                                  key: K,
                                  value: K,
                                  class: ke(["s-key-value-selector__list-item", { "v-list-item--active": W.values.includes(K) }]),
                                  onClick: Ye((me) => O(K, le), ["stop"]),
                                  disabled: !W.key
                                }, {
                                  prepend: R(() => [
                                    L(F, {
                                      density: "compact",
                                      class: "s-key-value-selector__checkbox-btn",
                                      "model-value": W.values.includes(K),
                                      disabled: !W.key
                                    }, null, 8, ["model-value", "disabled"])
                                  ]),
                                  default: R(() => [
                                    ee(" " + B(K), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "class", "onClick", "disabled"]))), 128)),
                                f(le).length > 0 ? (Z(), J(te, { key: 0 })) : re("", !0),
                                L(ne, { class: "s-key-value-selector__value-actions" }, {
                                  default: R(() => [
                                    L(de(Je), {
                                      variant: "text",
                                      density: "compact",
                                      class: "s-key-value-selector__value-btn",
                                      onClick: Ye((K) => A(le), ["stop"])
                                    }, {
                                      default: R(() => [
                                        ee(B(i.resetButtonText), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    L(de(Je), {
                                      variant: "text",
                                      density: "compact",
                                      class: "s-key-value-selector__value-btn s-key-value-selector__value-btn--apply",
                                      onClick: Ye((K) => Q(le), ["stop"])
                                    }, {
                                      default: R(() => [
                                        ee(B(i.applyButtonText), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue", "onClick:outside"])) : re("", !0)
                      ]),
                      V("td", null, [
                        L(de(Je), {
                          density: "compact",
                          icon: "mdi-minus-circle",
                          variant: "text",
                          color: "red",
                          onClick: (K) => S(le)
                        }, null, 8, ["onClick"])
                      ])
                    ]))), 128))
                  ])
                ])
              ]),
              V("div", g1, [
                L(de(Je), {
                  class: "s-key-value-selector__add-btn",
                  variant: "text",
                  "prepend-icon": "mdi-plus",
                  onClick: d
                }, {
                  default: R(() => [
                    ee(B(i.typeText.add), 1)
                  ]),
                  _: 1
                }),
                V("div", y1, [
                  L(de(Je), {
                    variant: "outlined",
                    onClick: $
                  }, {
                    default: R(() => [
                      ee(B(i.cancelButtonText), 1)
                    ]),
                    _: 1
                  }),
                  L(de(Je), {
                    onClick: C,
                    disabled: r.value.length > 0 && !r.value.some((W) => W.key && W.values.length)
                  }, {
                    default: R(() => [
                      ee(B(i.applyButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}, QA = /* @__PURE__ */ $e(v1, [["__scopeId", "data-v-68fd07f7"]]), b1 = { class: "s-alert" }, PA = {
  __name: "SAlert",
  props: {
    titleName: {
      type: String,
      default: "",
      description: "알림 내용"
    },
    modelValue: {
      type: Boolean,
      default: !1,
      description: "알림 오픈 여부"
    },
    multiLine: {
      type: Boolean,
      default: !1,
      description: "최소 높이를 더 높게 설정합니다."
    },
    color: {
      type: String,
      default: "#036EB8",
      description: "알림 색상"
    },
    height: {
      type: [String, Number],
      default: "48px",
      description: "알림 높이"
    },
    width: {
      type: [String, Number],
      default: "450px",
      description: "알림 넓이"
    },
    timeout: {
      type: Number,
      default: 5e3,
      description: "알림 오픈 시간"
    },
    isClose: {
      type: Boolean,
      default: !0,
      description: "Close 버튼 노출 유무"
    },
    alertStyle: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:model-value"],
  setup(i, { emit: e }) {
    const t = e, n = i, s = G(n.modelValue), r = (l) => {
      s.value = l, t("update:model-value", l);
    }, o = () => {
      s.value = !1, t("update:model-value", !1);
    };
    return Sn(() => {
      s.value = n.modelValue;
    }), (l, a) => {
      const c = q("v-snackbar");
      return Z(), X("div", b1, [
        L(c, {
          style: ht(i.alertStyle),
          "model-value": s.value,
          "multi-line": i.multiLine,
          timeout: i.timeout,
          color: i.color,
          height: i.height,
          elevation: "0",
          "min-width": "600",
          location: "top",
          "onUpdate:modelValue": r
        }, {
          actions: R(() => [
            i.isClose ? (Z(), J(Je, {
              key: 0,
              color: "#fff",
              variant: "text",
              onClick: o
            }, {
              default: R(() => a[0] || (a[0] = [
                ee("Close")
              ])),
              _: 1
            })) : re("", !0)
          ]),
          default: R(() => [
            ie(l.$slots, "alert-icon"),
            V("pre", null, B(i.titleName), 1)
          ]),
          _: 3
        }, 8, ["style", "model-value", "multi-line", "timeout", "color", "height"])
      ]);
    };
  }
}, S1 = { class: "s-empty" }, x1 = {
  key: 0,
  class: "s-empty__card-title"
}, k1 = { class: "s-empty__card-content" }, w1 = { style: { color: "#007bff", "font-size": "18px" } }, Q1 = {
  __name: "SEmpty",
  props: {
    title: {
      type: String,
      default: "",
      description: "empty 제목"
    },
    description: {
      type: String,
      default: "",
      description: "empty 내용"
    },
    elevation: {
      type: [Number, String],
      description: "카드의 입체감 조절 0~24까지 가능",
      default: void 0
    },
    outlined: {
      type: Boolean,
      description: "카드의 외곽선 설정",
      default: !0
    },
    shadowed: {
      type: Boolean,
      description: "카드에 그림자 효과 부여 on/off",
      default: !0
    },
    onClick: {
      type: Function,
      description: "description 클릭 이벤트",
      default: void 0
    }
  },
  setup(i) {
    return (e, t) => {
      const n = q("v-btn"), s = q("v-sheet");
      return Z(), X("div", S1, [
        L(s, {
          class: "s-empty__card",
          elevation: i.elevation,
          border: "",
          rounded: "",
          shadowed: i.shadowed
        }, {
          default: R(() => [
            i.title ? (Z(), X("div", x1, B(i.title), 1)) : re("", !0),
            V("div", k1, [
              i.onClick ? (Z(), J(n, {
                key: 0,
                flat: "",
                onClick: i.onClick
              }, {
                default: R(() => [
                  V("span", w1, B(i.description), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : (Z(), X(he, { key: 1 }, [
                ee(B(i.description), 1)
              ], 64))
            ]),
            ie(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["elevation", "shadowed"])
      ]);
    };
  }
}, P1 = /* @__PURE__ */ $e(Q1, [["__scopeId", "data-v-3cf38698"]]);
class ce {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, n) {
    [e, t] = an(this, e, t);
    let s = [];
    return this.decompose(
      0,
      e,
      s,
      2
      /* Open.To */
    ), n.length && n.decompose(
      0,
      n.length,
      s,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      s,
      1
      /* Open.From */
    ), _t.from(s, this.length - (t - e) + n.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = an(this, e, t);
    let n = [];
    return this.decompose(e, t, n, 0), _t.from(n, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), s = new Nn(this), r = new Nn(e);
    for (let o = t, l = t; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return !1;
      if (l += s.value.length, s.done || l >= n)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new Nn(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new gd(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let n;
    if (e == null)
      n = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      n = this.iterRange(s, Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new yd(n);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? ce.empty : e.length <= 32 ? new Qe(e) : _t.from(Qe.split(e, []));
  }
}
class Qe extends ce {
  constructor(e, t = $1(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = s + o.length;
      if ((t ? n : l) >= e)
        return new C1(s, l, n, o);
      s = l + 1, n++;
    }
  }
  decompose(e, t, n, s) {
    let r = e <= 0 && t >= this.length ? this : new Qe(oh(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = n.pop(), l = rr(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        n.push(new Qe(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        n.push(new Qe(l.slice(0, a)), new Qe(l.slice(a)));
      }
    } else
      n.push(r);
  }
  replace(e, t, n) {
    if (!(n instanceof Qe))
      return super.replace(e, t, n);
    [e, t] = an(this, e, t);
    let s = rr(this.text, rr(n.text, oh(this.text, 0, e)), t), r = this.length + n.length - (t - e);
    return s.length <= 32 ? new Qe(s, r) : _t.from(Qe.split(s, []), r);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = an(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (s += n), e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [], s = -1;
    for (let r of e)
      n.push(r), s += r.length + 1, n.length == 32 && (t.push(new Qe(n, s)), n = [], s = -1);
    return s > -1 && t.push(new Qe(n, s)), t;
  }
}
class _t extends ce {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let n of e)
      this.lines += n.lines;
  }
  lineInner(e, t, n, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = s + o.length, a = n + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, n, s);
      s = l + 1, n = a + 1;
    }
  }
  decompose(e, t, n, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let c = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !c ? n.push(l) : l.decompose(e - o, t - o, n, c);
      }
      o = a + 1;
    }
  }
  replace(e, t, n) {
    if ([e, t] = an(this, e, t), n.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, n), c = this.lines - o.lines + a.lines;
          if (a.lines < c >> 4 && a.lines > c >> 6) {
            let h = this.children.slice();
            return h[s] = a, new _t(h, this.length - (t - e) + n.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = an(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (s += n), e < a && t > o && (s += l.sliceString(e - o, t - o, n)), o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof _t))
      return 0;
    let n = 0, [s, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == l)
        return n;
      let a = this.children[s], c = e.children[r];
      if (a != c)
        return n + a.scanIdentical(c, t);
      n += a.length + 1;
    }
  }
  static from(e, t = e.reduce((n, s) => n + s.length + 1, -1)) {
    let n = 0;
    for (let d of e)
      n += d.lines;
    if (n < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new Qe(d, t);
    }
    let s = Math.max(
      32,
      n >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, l = [], a = 0, c = -1, h = [];
    function u(d) {
      let p;
      if (d.lines > r && d instanceof _t)
        for (let O of d.children)
          u(O);
      else d.lines > o && (a > o || !a) ? (f(), l.push(d)) : d instanceof Qe && a && (p = h[h.length - 1]) instanceof Qe && d.lines + p.lines <= 32 ? (a += d.lines, c += d.length + 1, h[h.length - 1] = new Qe(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && f(), a += d.lines, c += d.length + 1, h.push(d));
    }
    function f() {
      a != 0 && (l.push(h.length == 1 ? h[0] : _t.from(h, c)), c = -1, a = h.length = 0);
    }
    for (let d of e)
      u(d);
    return f(), l.length == 1 ? l[0] : new _t(l, t);
  }
}
ce.empty = /* @__PURE__ */ new Qe([""], 0);
function $1(i) {
  let e = -1;
  for (let t of i)
    e += t.length + 1;
  return e;
}
function rr(i, e, t = 0, n = 1e9) {
  for (let s = 0, r = 0, o = !0; r < i.length && s <= n; r++) {
    let l = i[r], a = s + l.length;
    a >= t && (a > n && (l = l.slice(0, n - s)), s < t && (l = l.slice(t - s)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), s = a + 1;
  }
  return e;
}
function oh(i, e, t) {
  return rr(i, [""], e, t);
}
class Nn {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Qe ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1, s = this.nodes[n], r = this.offsets[n], o = r >> 1, l = s instanceof Qe ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (n == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[n] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof Qe) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[n] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Qe ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class gd {
  constructor(e, t, n) {
    this.value = "", this.done = !1, this.cursor = new Nn(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), n -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * t, this.value = s.length <= n ? s : t < 0 ? s.slice(s.length - n) : s.slice(0, n), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class yd {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: s } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = s, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (ce.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Nn.prototype[Symbol.iterator] = gd.prototype[Symbol.iterator] = yd.prototype[Symbol.iterator] = function() {
  return this;
});
class C1 {
  /**
  @internal
  */
  constructor(e, t, n, s) {
    this.from = e, this.to = t, this.number = n, this.text = s;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function an(i, e, t) {
  return e = Math.max(0, Math.min(i.length, e)), [e, Math.max(e, Math.min(i.length, t))];
}
let en = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((i) => i ? parseInt(i, 36) : 1);
for (let i = 1; i < en.length; i++)
  en[i] += en[i - 1];
function T1(i) {
  for (let e = 1; e < en.length; e += 2)
    if (en[e] > i)
      return en[e - 1] <= i;
  return !1;
}
function lh(i) {
  return i >= 127462 && i <= 127487;
}
const ah = 8205;
function ze(i, e, t = !0, n = !0) {
  return (t ? vd : A1)(i, e, n);
}
function vd(i, e, t) {
  if (e == i.length)
    return e;
  e && bd(i.charCodeAt(e)) && Sd(i.charCodeAt(e - 1)) && e--;
  let n = De(i, e);
  for (e += ut(n); e < i.length; ) {
    let s = De(i, e);
    if (n == ah || s == ah || t && T1(s))
      e += ut(s), n = s;
    else if (lh(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && lh(De(i, o)); )
        r++, o -= 2;
      if (r % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function A1(i, e, t) {
  for (; e > 0; ) {
    let n = vd(i, e - 2, t);
    if (n < e)
      return n;
    e--;
  }
  return 0;
}
function bd(i) {
  return i >= 56320 && i < 57344;
}
function Sd(i) {
  return i >= 55296 && i < 56320;
}
function De(i, e) {
  let t = i.charCodeAt(e);
  if (!Sd(t) || e + 1 == i.length)
    return t;
  let n = i.charCodeAt(e + 1);
  return bd(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function Va(i) {
  return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function ut(i) {
  return i < 65536 ? 1 : 2;
}
const pl = /\r\n?|\n/;
var je = /* @__PURE__ */ function(i) {
  return i[i.Simple = 0] = "Simple", i[i.TrackDel = 1] = "TrackDel", i[i.TrackBefore = 2] = "TrackBefore", i[i.TrackAfter = 3] = "TrackAfter", i;
}(je || (je = {}));
class Xt {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t + 1];
      e += n < 0 ? this.sections[t] : n;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, n = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(n, s, r), s += r) : s += o, n += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    Ol(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], s = this.sections[t++];
      s < 0 ? e.push(n, s) : e.push(s, n);
    }
    return new Xt(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : xd(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `other` happened before the ones in `this`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : ml(this, e, t);
  }
  mapPos(e, t = -1, n = je.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], c = s + l;
      if (a < 0) {
        if (c > e)
          return r + (e - s);
        r += l;
      } else {
        if (n != je.Simple && c >= e && (n == je.TrackDel && s < e && c > e || n == je.TrackBefore && s < e || n == je.TrackAfter && c > e))
          return null;
        if (c > e || c == e && t < 0 && !l)
          return e == s || t < 0 ? r : r + a;
        r += a;
      }
      s = c;
    }
    if (e > s)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let n = 0, s = 0; n < this.sections.length && s <= t; ) {
      let r = this.sections[n++], o = this.sections[n++], l = s + r;
      if (o >= 0 && s <= t && l >= e)
        return s < e && l > t ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], s = this.sections[t++];
      e += (e ? " " : "") + n + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Xt(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new Xt(e);
  }
}
class Me extends Xt {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Ol(this, (t, n, s, r, o) => e = e.replace(s, s + (n - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return ml(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), n = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s], l = t[s + 1];
      if (l >= 0) {
        t[s] = l, t[s + 1] = o;
        let a = s >> 1;
        for (; n.length < a; )
          n.push(ce.empty);
        n.push(o ? e.slice(r, r + o) : ce.empty);
      }
      r += o;
    }
    return new Me(t, n);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : xd(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : ml(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    Ol(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return Xt.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], n = [], s = [], r = new ts(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, a - l);
        Be(s, h, -1);
        let u = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        Be(t, h, u), u > 0 && ai(n, t, r.text), r.forward(h), l += h;
      }
      let c = e[o++];
      for (; l < c; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, c - l);
        Be(t, h, -1), Be(s, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), l += h;
      }
    }
    return {
      changes: new Me(t, n),
      filtered: Xt.create(s)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t], s = this.sections[t + 1];
      s < 0 ? e.push(n) : s == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, n) {
    let s = [], r = [], o = 0, l = null;
    function a(h = !1) {
      if (!h && !s.length)
        return;
      o < t && Be(s, t - o, -1);
      let u = new Me(s, r);
      l = l ? l.compose(u.map(l)) : u, s = [], r = [], o = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let u of h)
          c(u);
      else if (h instanceof Me) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: u, to: f = u, insert: d } = h;
        if (u > f || u < 0 || f > t)
          throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? ce.of(d.split(n || pl)) : d : ce.empty, O = p.length;
        if (u == f && O == 0)
          return;
        u < o && a(), u > o && Be(s, u - o, -1), Be(s, f - u, O), ai(r, s, p), o = f;
      }
    }
    return c(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new Me(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], n = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; n.length < s; )
            n.push(ce.empty);
          n[s] = ce.of(r.slice(1)), t.push(r[0], n[s].length);
        }
      }
    }
    return new Me(t, n);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new Me(e, t);
  }
}
function Be(i, e, t, n = !1) {
  if (e == 0 && t <= 0)
    return;
  let s = i.length - 2;
  s >= 0 && t <= 0 && t == i[s + 1] ? i[s] += e : e == 0 && i[s] == 0 ? i[s + 1] += t : n ? (i[s] += e, i[s + 1] += t) : i.push(e, t);
}
function ai(i, e, t) {
  if (t.length == 0)
    return;
  let n = e.length - 2 >> 1;
  if (n < i.length)
    i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < n; )
      i.push(ce.empty);
    i.push(t);
  }
}
function Ol(i, e, t) {
  let n = i.inserted;
  for (let s = 0, r = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++], a = i.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let c = s, h = r, u = ce.empty;
      for (; c += l, h += a, a && n && (u = u.append(n[o - 2 >> 1])), !(t || o == i.sections.length || i.sections[o + 1] < 0); )
        l = i.sections[o++], a = i.sections[o++];
      e(s, c, r, h, u), s = c, r = h;
    }
  }
}
function ml(i, e, t, n = !1) {
  let s = [], r = n ? [] : null, o = new ts(i), l = new ts(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let c = Math.min(o.len, l.len);
      Be(s, c, -1), o.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let c = l.len;
      for (Be(s, l.ins, -1); c; ) {
        let h = Math.min(o.len, c);
        o.ins >= 0 && a < o.i && o.len <= h && (Be(s, 0, o.ins), r && ai(r, s, o.text), a = o.i), o.forward(h), c -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let c = 0, h = o.len;
      for (; h; )
        if (l.ins == -1) {
          let u = Math.min(h, l.len);
          c += u, h -= u, l.forward(u);
        } else if (l.ins == 0 && l.len < h)
          h -= l.len, l.next();
        else
          break;
      Be(s, c, a < o.i ? o.ins : 0), r && a < o.i && ai(r, s, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return r ? Me.createSet(s, r) : Xt.create(s);
      throw new Error("Mismatched change set lengths");
    }
}
function xd(i, e, t = !1) {
  let n = [], s = t ? [] : null, r = new ts(i), o = new ts(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return s ? Me.createSet(n, s) : Xt.create(n);
    if (r.ins == 0)
      Be(n, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      Be(n, 0, o.ins, l), s && ai(s, n, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), c = n.length;
        if (r.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Be(n, a, h, l), s && h && ai(s, n, o.text);
        } else o.ins == -1 ? (Be(n, r.off ? 0 : r.len, a, l), s && ai(s, n, r.textBit(a))) : (Be(n, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && ai(s, n, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || n.length > c), r.forward2(a), o.forward(a);
      }
    }
  }
}
class ts {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? ce.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, n = this.i - 2 >> 1;
    return n >= t.length && !e ? ce.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Ci {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.flags = n;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let n, s;
    return this.empty ? n = s = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), n == this.from && s == this.to ? this : new Ci(n, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return E.range(e, t);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return E.range(this.anchor, n);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return E.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Ci(e, t, n);
  }
}
class E {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : E.create(this.ranges.map((n) => n.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(e.ranges[n], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new E([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return E.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return n[t] = e, E.create(n, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new E(e.ranges.map((t) => Ci.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new E([E.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= n : r.from < n)
        return E.normalized(e.slice(), t);
      n = r.to;
    }
    return new E(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, n, s) {
    return Ci.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, n, s) {
    let r = (n ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return t < e ? Ci.create(t, e, 48 | r) : Ci.create(e, t, (t > e ? 8 : 0) | r);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let n = e[t];
    e.sort((s, r) => s.from - r.from), t = e.indexOf(n);
    for (let s = 1; s < e.length; s++) {
      let r = e[s], o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? E.range(a, l) : E.range(l, a));
      }
    }
    return new E(e, t);
  }
}
function kd(i, e) {
  for (let t of i.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Ea = 0;
class Y {
  constructor(e, t, n, s, r) {
    this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = s, this.id = Ea++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new Y(e.combine || ((t) => t), e.compareInput || ((t, n) => t === n), e.compare || (e.combine ? (t, n) => t === n : La), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new or([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new or(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new or(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function La(i, e) {
  return i == e || i.length == e.length && i.every((t, n) => t === e[n]);
}
class or {
  constructor(e, t, n, s) {
    this.dependencies = e, this.facet = t, this.type = n, this.value = s, this.id = Ea++;
  }
  dynamicSlot(e) {
    var t;
    let n = this.value, s = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, c = !1, h = [];
    for (let u of this.dependencies)
      u == "doc" ? a = !0 : u == "selection" ? c = !0 : ((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1 || h.push(e[u.id]);
    return {
      create(u) {
        return u.values[o] = n(u), 1;
      },
      update(u, f) {
        if (a && f.docChanged || c && (f.docChanged || f.selection) || gl(u, h)) {
          let d = n(u);
          if (l ? !ch(d, u.values[o], s) : !s(d, u.values[o]))
            return u.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (u, f) => {
        let d, p = f.config.address[r];
        if (p != null) {
          let O = kr(f, p);
          if (this.dependencies.every((m) => m instanceof Y ? f.facet(m) === u.facet(m) : m instanceof _e ? f.field(m, !1) == u.field(m, !1) : !0) || (l ? ch(d = n(u), O, s) : s(d = n(u), O)))
            return u.values[o] = O, 0;
        } else
          d = n(u);
        return u.values[o] = d, 1;
      }
    };
  }
}
function ch(i, e, t) {
  if (i.length != e.length)
    return !1;
  for (let n = 0; n < i.length; n++)
    if (!t(i[n], e[n]))
      return !1;
  return !0;
}
function gl(i, e) {
  let t = !1;
  for (let n of e)
    Wn(i, n) & 1 && (t = !0);
  return t;
}
function Z1(i, e, t) {
  let n = t.map((a) => i[a.id]), s = t.map((a) => a.type), r = n.filter((a) => !(a & 1)), o = i[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let h = 0; h < n.length; h++) {
      let u = kr(a, n[h]);
      if (s[h] == 2)
        for (let f of u)
          c.push(f);
      else
        c.push(u);
    }
    return e.combine(c);
  }
  return {
    create(a) {
      for (let c of n)
        Wn(a, c);
      return a.values[o] = l(a), 1;
    },
    update(a, c) {
      if (!gl(a, r))
        return 0;
      let h = l(a);
      return e.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
    },
    reconfigure(a, c) {
      let h = gl(a, n), u = c.config.facets[e.id], f = c.facet(e);
      if (u && !h && La(t, u))
        return a.values[o] = f, 0;
      let d = l(a);
      return e.compare(d, f) ? (a.values[o] = f, 0) : (a.values[o] = d, 1);
    }
  };
}
const hh = /* @__PURE__ */ Y.define({ static: !0 });
class _e {
  constructor(e, t, n, s, r) {
    this.id = e, this.createF = t, this.updateF = n, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new _e(Ea++, e.create, e.update, e.compare || ((n, s) => n === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(hh).find((n) => n.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => (n.values[t] = this.create(n), 1),
      update: (n, s) => {
        let r = n.values[t], o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : (n.values[t] = o, 1);
      },
      reconfigure: (n, s) => s.config.address[this.id] != null ? (n.values[t] = s.field(this), 0) : (n.values[t] = this.create(n), 1)
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, hh.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const Qi = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function An(i) {
  return (e) => new wd(e, i);
}
const xi = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ An(Qi.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ An(Qi.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ An(Qi.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ An(Qi.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ An(Qi.lowest)
};
class wd {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class cn {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new yl(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return cn.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class yl {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class xr {
  constructor(e, t, n, s, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < n.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, n) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let f of _1(e, t, o))
      f instanceof _e ? s.push(f) : (r[f.facet.id] || (r[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let f of s)
      l[f.id] = c.length << 1, c.push((d) => f.slot(d));
    let h = n == null ? void 0 : n.config.facets;
    for (let f in r) {
      let d = r[f], p = d[0].facet, O = h && h[f] || [];
      if (d.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, La(O, d))
          a.push(n.facet(p));
        else {
          let m = p.combine(d.map((g) => g.value));
          a.push(n && p.compare(m, n.facet(p)) ? n.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = c.length << 1, c.push((g) => m.dynamicSlot(g)));
        l[p.id] = c.length << 1, c.push((m) => Z1(m, p, d));
      }
    }
    let u = c.map((f) => f(l));
    return new xr(e, o, u, l, a, r);
  }
}
function _1(i, e, t) {
  let n = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let c = n[a].indexOf(o);
      c > -1 && n[a].splice(c, 1), o instanceof yl && t.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let c of o)
        r(c, l);
    else if (o instanceof yl) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(o.compartment) || o.inner;
      t.set(o.compartment, c), r(c, l);
    } else if (o instanceof wd)
      r(o.inner, o.prec);
    else if (o instanceof _e)
      n[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof or)
      n[l].push(o), o.facet.extensions && r(o.facet.extensions, Qi.default);
    else {
      let c = o.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(c, l);
    }
  }
  return r(i, Qi.default), n.reduce((o, l) => o.concat(l));
}
function Wn(i, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, n = i.status[t];
  if (n == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2)
    return n;
  i.status[t] = 4;
  let s = i.computeSlot(i, i.config.dynamicSlots[t]);
  return i.status[t] = 2 | s;
}
function kr(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const Qd = /* @__PURE__ */ Y.define(), vl = /* @__PURE__ */ Y.define({
  combine: (i) => i.some((e) => e),
  static: !0
}), Pd = /* @__PURE__ */ Y.define({
  combine: (i) => i.length ? i[0] : void 0,
  static: !0
}), $d = /* @__PURE__ */ Y.define(), Cd = /* @__PURE__ */ Y.define(), Td = /* @__PURE__ */ Y.define(), Ad = /* @__PURE__ */ Y.define({
  combine: (i) => i.length ? i[0] : !1
});
class Jt {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new M1();
  }
}
class M1 {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Jt(this, e);
  }
}
class R1 {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new H(this, e);
  }
}
class H {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new H(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new R1(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let n = [];
    for (let s of e) {
      let r = s.map(t);
      r && n.push(r);
    }
    return n;
  }
}
H.reconfigure = /* @__PURE__ */ H.define();
H.appendConfig = /* @__PURE__ */ H.define();
class Te {
  constructor(e, t, n, s, r, o) {
    this.startState = e, this.changes = t, this.selection = n, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, n && kd(n, t.newLength), r.some((l) => l.type == Te.time) || (this.annotations = r.concat(Te.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, n, s, r, o) {
    return new Te(e, t, n, s, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(Te.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
Te.time = /* @__PURE__ */ Jt.define();
Te.userEvent = /* @__PURE__ */ Jt.define();
Te.addToHistory = /* @__PURE__ */ Jt.define();
Te.remote = /* @__PURE__ */ Jt.define();
function V1(i, e) {
  let t = [];
  for (let n = 0, s = 0; ; ) {
    let r, o;
    if (n < i.length && (s == e.length || e[s] >= i[n]))
      r = i[n++], o = i[n++];
    else if (s < e.length)
      r = e[s++], o = e[s++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Zd(i, e, t) {
  var n;
  let s, r, o;
  return t ? (s = e.changes, r = Me.empty(e.changes.length), o = i.changes.compose(e.changes)) : (s = e.changes.map(i.changes), r = i.changes.mapDesc(e.changes, !0), o = i.changes.compose(s)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (n = i.selection) === null || n === void 0 ? void 0 : n.map(s),
    effects: H.mapEffects(i.effects, s).concat(H.mapEffects(e.effects, r)),
    annotations: i.annotations.length ? i.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: i.scrollIntoView || e.scrollIntoView
  };
}
function bl(i, e, t) {
  let n = e.selection, s = tn(e.annotations);
  return e.userEvent && (s = s.concat(Te.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Me ? e.changes : Me.of(e.changes || [], t, i.facet(Pd)),
    selection: n && (n instanceof E ? n : E.single(n.anchor, n.head)),
    effects: tn(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function _d(i, e, t) {
  let n = bl(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    n = Zd(n, bl(i, e[r], o ? n.changes.newLength : i.doc.length), o);
  }
  let s = Te.create(i, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return L1(t ? E1(s) : s);
}
function E1(i) {
  let e = i.startState, t = !0;
  for (let s of e.facet($d)) {
    let r = s(i);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : V1(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1)
      r = i.changes.invertedDesc, s = Me.empty(e.doc.length);
    else {
      let o = i.changes.filter(t);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    i = Te.create(e, s, i.selection && i.selection.map(r), H.mapEffects(i.effects, r), i.annotations, i.scrollIntoView);
  }
  let n = e.facet(Cd);
  for (let s = n.length - 1; s >= 0; s--) {
    let r = n[s](i);
    r instanceof Te ? i = r : Array.isArray(r) && r.length == 1 && r[0] instanceof Te ? i = r[0] : i = _d(e, tn(r), !1);
  }
  return i;
}
function L1(i) {
  let e = i.startState, t = e.facet(Td), n = i;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](i);
    r && Object.keys(r).length && (n = Zd(n, bl(e, r, i.changes.newLength), !0));
  }
  return n == i ? i : Te.create(e, i.changes, i.selection, n.effects, n.annotations, n.scrollIntoView);
}
const X1 = [];
function tn(i) {
  return i == null ? X1 : Array.isArray(i) ? i : [i];
}
var xe = /* @__PURE__ */ function(i) {
  return i[i.Word = 0] = "Word", i[i.Space = 1] = "Space", i[i.Other = 2] = "Other", i;
}(xe || (xe = {}));
const D1 = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Sl;
try {
  Sl = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function q1(i) {
  if (Sl)
    return Sl.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || D1.test(t)))
      return !0;
  }
  return !1;
}
function j1(i) {
  return (e) => {
    if (!/\S/.test(e))
      return xe.Space;
    if (q1(e))
      return xe.Word;
    for (let t = 0; t < i.length; t++)
      if (e.indexOf(i[t]) > -1)
        return xe.Word;
    return xe.Other;
  };
}
class se {
  constructor(e, t, n, s, r, o) {
    this.config = e, this.doc = t, this.selection = n, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Wn(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Wn(this, n), kr(this, n);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return _d(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: n, compartments: s } = t;
    for (let l of e.effects)
      l.is(cn.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((a, c) => s.set(c, a)), t = null), s.set(l.value.compartment, l.value.extension)) : l.is(H.reconfigure) ? (t = null, n = l.value) : l.is(H.appendConfig) && (t = null, n = tn(n).concat(l.value));
    let r;
    t ? r = e.startState.values.slice() : (t = xr.resolve(n, s, this), r = new se(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, c) => c.reconfigure(a, this), null).values);
    let o = e.startState.facet(vl) ? e.newSelection : e.newSelection.asSingle();
    new se(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: E.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, n = e(t.ranges[0]), s = this.changes(n.changes), r = [n.range], o = tn(n.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), c = this.changes(a.changes), h = c.map(s);
      for (let f = 0; f < l; f++)
        r[f] = r[f].map(h);
      let u = s.mapDesc(c, !0);
      r.push(a.range.map(u)), s = s.compose(h), o = H.mapEffects(o, h).concat(H.mapEffects(tn(a.effects), u));
    }
    return {
      changes: s,
      selection: E.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof Me ? e : Me.of(e, this.doc.length, this.facet(se.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return ce.of(e.split(this.facet(se.lineSeparator) || pl));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Wn(this, t), kr(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let n in e) {
        let s = e[n];
        s instanceof _e && this.config.address[s.id] != null && (t[n] = s.spec.toJSON(this.field(e[n]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, n) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (n) {
      for (let r in n)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = n[r], l = e[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return se.create({
      doc: e.doc,
      selection: E.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = xr.resolve(e.extensions || [], /* @__PURE__ */ new Map()), n = e.doc instanceof ce ? e.doc : ce.of((e.doc || "").split(t.staticFacet(se.lineSeparator) || pl)), s = e.selection ? e.selection instanceof E ? e.selection : E.single(e.selection.anchor, e.selection.head) : E.single(0);
    return kd(s, n.length), t.staticFacet(vl) || (s = s.asSingle()), new se(t, n, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(se.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(se.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Ad);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let n of this.facet(se.phrases))
      if (Object.prototype.hasOwnProperty.call(n, e)) {
        e = n[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (n, s) => {
      if (s == "$")
        return "$";
      let r = +(s || 1);
      return !r || r > t.length ? n : t[r - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, n = -1) {
    let s = [];
    for (let r of this.facet(Qd))
      for (let o of r(this, t, n))
        Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return j1(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: n, length: s } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - n, l = e - n;
    for (; o > 0; ) {
      let a = ze(t, o, !1);
      if (r(t.slice(a, o)) != xe.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = ze(t, l);
      if (r(t.slice(l, a)) != xe.Word)
        break;
      l = a;
    }
    return o == l ? null : E.range(o + n, l + n);
  }
}
se.allowMultipleSelections = vl;
se.tabSize = /* @__PURE__ */ Y.define({
  combine: (i) => i.length ? i[0] : 4
});
se.lineSeparator = Pd;
se.readOnly = Ad;
se.phrases = /* @__PURE__ */ Y.define({
  compare(i, e) {
    let t = Object.keys(i), n = Object.keys(e);
    return t.length == n.length && t.every((s) => i[s] == e[s]);
  }
});
se.languageData = Qd;
se.changeFilter = $d;
se.transactionFilter = Cd;
se.transactionExtender = Td;
cn.reconfigure = /* @__PURE__ */ H.define();
function Pt(i, e, t = {}) {
  let n = {};
  for (let s of i)
    for (let r of Object.keys(s)) {
      let o = s[r], l = n[r];
      if (l === void 0)
        n[r] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, r))
        n[r] = t[r](l, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e)
    n[s] === void 0 && (n[s] = e[s]);
  return n;
}
class Li {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return xl.create(e, t, this);
  }
}
Li.prototype.startSide = Li.prototype.endSide = 0;
Li.prototype.point = !1;
Li.prototype.mapMode = je.TrackDel;
let xl = class Md {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.value = n;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Md(e, t, n);
  }
};
function kl(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class Xa {
  constructor(e, t, n, s) {
    this.from = e, this.to = t, this.value = n, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, n, s = 0) {
    let r = n ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, c = r[a] - e || (n ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return c >= 0 ? o : l;
      c >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, n, s) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(n, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let n = [], s = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let c = this.value[a], h = this.from[a] + e, u = this.to[a] + e, f, d;
      if (h == u) {
        let p = t.mapPos(h, c.startSide, c.mapMode);
        if (p == null || (f = d = p, c.startSide != c.endSide && (d = t.mapPos(h, c.endSide), d < f)))
          continue;
      } else if (f = t.mapPos(h, c.startSide), d = t.mapPos(u, c.endSide), f > d || f == d && c.startSide > 0 && c.endSide <= 0)
        continue;
      (d - f || c.endSide - c.startSide) < 0 || (o < 0 && (o = f), c.point && (l = Math.max(l, d - f)), n.push(c), s.push(f - o), r.push(d - o));
    }
    return { mapped: n.length ? new Xa(s, r, n, l) : null, pos: o };
  }
}
class ae {
  constructor(e, t, n, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, t, n, s) {
    return new ae(e, t, n, s);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: n = !1, filterFrom: s = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (n && (t = t.slice().sort(kl)), this.isEmpty)
      return t.length ? ae.of(t) : this;
    let l = new Rd(this, null, -1).goto(0), a = 0, c = [], h = new di();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let u = t[a++];
        h.addInner(u.from, u.to, u.value) || c.push(u);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || c.push(xl.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? ae.empty : this.nextLayer.update({ add: c, filter: o, filterFrom: s, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], n = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], c = e.touchesRange(l, l + a.length);
      if (c === !1)
        s = Math.max(s, a.maxPoint), t.push(a), n.push(e.mapPos(l));
      else if (c === !0) {
        let { mapped: h, pos: u } = a.map(l, e);
        h && (s = Math.max(s, h.maxPoint), t.push(h), n.push(u));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new ae(n, t, r || ae.empty, s);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, n) === !1)
          return;
      }
      this.nextLayer.between(e, t, n);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return is.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return is.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, n, s, r = -1) {
    let o = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= r), l = t.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= r), a = uh(o, l, n), c = new Zn(o, a, r), h = new Zn(l, a, r);
    n.iterGaps((u, f, d) => fh(c, u, h, f, d, s)), n.empty && n.length == 0 && fh(c, 0, h, 0, 0, s);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, n = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = uh(r, o), a = new Zn(r, l, 0).goto(n), c = new Zn(o, l, 0).goto(n);
    for (; ; ) {
      if (a.to != c.to || !wl(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point)))
        return !1;
      if (a.to > s)
        return !0;
      a.next(), c.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, n, s, r = -1) {
    let o = new Zn(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let c = Math.min(o.to, n);
      if (o.point) {
        let h = o.activeForPoint(o.to), u = o.pointFrom < t ? h.length + 1 : o.point.startSide < 0 ? h.length : Math.min(h.length, a);
        s.point(l, c, o.point, h, u, o.pointRank), a = Math.min(o.openEnd(c), h.length);
      } else c > l && (s.span(l, c, o.active, a), a = o.openEnd(c));
      if (o.to > n)
        return a + (o.point && o.to > n ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let n = new di();
    for (let s of e instanceof xl ? [e] : t ? z1(e) : e)
      n.add(s.from, s.to, s.value);
    return n.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return ae.empty;
    let t = e[e.length - 1];
    for (let n = e.length - 2; n >= 0; n--)
      for (let s = e[n]; s != ae.empty; s = s.nextLayer)
        t = new ae(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
ae.empty = /* @__PURE__ */ new ae([], [], null, -1);
function z1(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let n = i[t];
      if (kl(e, n) > 0)
        return i.slice().sort(kl);
      e = n;
    }
  return i;
}
ae.empty.nextLayer = ae.empty;
class di {
  finishChunk(e) {
    this.chunks.push(new Xa(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, n) {
    this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new di())).add(e, t, n);
  }
  /**
  @internal
  */
  addInner(e, t, n) {
    let s = e - this.lastTo || n.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let n = t.value.length - 1;
    return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(ae.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = ae.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function uh(i, e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let r of i)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && n.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = n.get(r.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && !(t != null && t.touchesRange(l, l + r.chunk[o].length)) && s.add(r.chunk[o]);
    }
  return s;
}
class Rd {
  constructor(e, t, n, s = 0) {
    this.layer = e, this.skip = t, this.minPoint = n, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, n = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!n || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], n = e + t.from[this.rangeIndex];
        if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class is {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && s.push(new Rd(o, t, n, r));
    return s.length == 1 ? s[0] : new is(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap)
      n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Zo(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap)
      n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Zo(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Zo(this.heap, 0);
    }
  }
}
function Zo(i, e) {
  for (let t = i[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= i.length)
      break;
    let s = i[n];
    if (n + 1 < i.length && s.compare(i[n + 1]) >= 0 && (s = i[n + 1], n++), t.compare(s) < 0)
      break;
    i[n] = t, i[e] = s, e = n;
  }
}
class Zn {
  constructor(e, t, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = is.from(e, t, n);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Ms(this.active, e), Ms(this.activeTo, e), Ms(this.activeRank, e), this.minActive = dh(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: n, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0; )
      t++;
    Rs(this.active, t, n), Rs(this.activeTo, t, s), Rs(this.activeRank, t, r), e && Rs(e, t, this.cursor.from), this.minActive = dh(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), n && Ms(n, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(n), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let s = n.length - 1; s >= 0 && n[s] < e; s--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--)
      (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)
      t++;
    return t;
  }
}
function fh(i, e, t, n, s, r) {
  i.goto(e), t.goto(n);
  let o = n + s, l = n, a = n - e;
  for (; ; ) {
    let c = i.to + a - t.to || i.endSide - t.endSide, h = c < 0 ? i.to + a : t.to, u = Math.min(h, o);
    if (i.point || t.point ? i.point && t.point && (i.point == t.point || i.point.eq(t.point)) && wl(i.activeForPoint(i.to), t.activeForPoint(t.to)) || r.comparePoint(l, u, i.point, t.point) : u > l && !wl(i.active, t.active) && r.compareRange(l, u, i.active, t.active), h > o)
      break;
    l = h, c <= 0 && i.next(), c >= 0 && t.next();
  }
}
function wl(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] != e[t] && !i[t].eq(e[t]))
      return !1;
  return !0;
}
function Ms(i, e) {
  for (let t = e, n = i.length - 1; t < n; t++)
    i[t] = i[t + 1];
  i.pop();
}
function Rs(i, e, t) {
  for (let n = i.length - 1; n >= e; n--)
    i[n + 1] = i[n];
  i[e] = t;
}
function dh(i, e) {
  let t = -1, n = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - n || i[s].endSide - i[t].endSide) < 0 && (t = s, n = e[s]);
  return t;
}
function xn(i, e, t = i.length) {
  let n = 0;
  for (let s = 0; s < t; )
    i.charCodeAt(s) == 9 ? (n += e - n % e, s++) : (n++, s = ze(i, s));
  return n;
}
function Ql(i, e, t, n) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == i.length)
      break;
    r += i.charCodeAt(s) == 9 ? t - r % t : 1, s = ze(i, s);
  }
  return n === !0 ? -1 : i.length;
}
const Pl = "ͼ", ph = typeof Symbol > "u" ? "__" + Pl : Symbol.for(Pl), $l = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Oh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class pi {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: n } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, c) {
      let h = [], u = /^@(\w+)\b/.exec(o[0]), f = u && u[1] == "keyframes";
      if (u && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((O) => o.map((m) => O.replace(/&/, m))).reduce((O, m) => O.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!u) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), p, h, f);
        } else p != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (O) => "-" + O.toLowerCase()) + ": " + p + ";");
      }
      (h.length || f) && a.push((n && !u && !c ? o.map(n) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in e) r(s(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = Oh[ph] || 1;
    return Oh[ph] = e + 1, Pl + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, n) {
    let s = e[$l], r = n && n.nonce;
    s ? r && s.setNonce(r) : s = new B1(e, r), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let mh = /* @__PURE__ */ new Map();
class B1 {
  constructor(e, t) {
    let n = e.ownerDocument || e, s = n.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = mh.get(n);
      if (r) return e[$l] = r;
      this.sheet = new s.CSSStyleSheet(), mh.set(n, this);
    } else
      this.styleTag = n.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[$l] = this;
  }
  mount(e, t) {
    let n = this.sheet, s = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), n) for (let c = 0; c < l.rules.length; c++)
          n.insertRule(l.rules[c], s++);
      } else {
        for (; r < a; ) s += this.modules[r++].rules.length;
        s += l.rules.length, r++;
      }
    }
    if (n)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var Oi = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, ns = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Y1 = typeof navigator < "u" && /Mac/.test(navigator.platform), I1 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var qe = 0; qe < 10; qe++) Oi[48 + qe] = Oi[96 + qe] = String(qe);
for (var qe = 1; qe <= 24; qe++) Oi[qe + 111] = "F" + qe;
for (var qe = 65; qe <= 90; qe++)
  Oi[qe] = String.fromCharCode(qe + 32), ns[qe] = String.fromCharCode(qe);
for (var _o in Oi) ns.hasOwnProperty(_o) || (ns[_o] = Oi[_o]);
function N1(i) {
  var e = Y1 && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey || I1 && i.shiftKey && i.key && i.key.length == 1 || i.key == "Unidentified", t = !e && i.key || (i.shiftKey ? ns : Oi)[i.keyCode] || i.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function ss(i) {
  let e;
  return i.nodeType == 11 ? e = i.getSelection ? i : i.ownerDocument : e = i, e.getSelection();
}
function Cl(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function lr(i, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Cl(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function hn(i) {
  return i.nodeType == 3 ? Di(i, 0, i.nodeValue.length).getClientRects() : i.nodeType == 1 ? i.getClientRects() : [];
}
function Un(i, e, t, n) {
  return t ? gh(i, e, t, n, -1) || gh(i, e, t, n, 1) : !1;
}
function Xi(i) {
  for (var e = 0; ; e++)
    if (i = i.previousSibling, !i)
      return e;
}
function wr(i) {
  return i.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName);
}
function gh(i, e, t, n, s) {
  for (; ; ) {
    if (i == t && e == n)
      return !0;
    if (e == (s < 0 ? 0 : jt(i))) {
      if (i.nodeName == "DIV")
        return !1;
      let r = i.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = Xi(i) + (s < 0 ? 0 : 1), i = r;
    } else if (i.nodeType == 1) {
      if (i = i.childNodes[e + (s < 0 ? -1 : 0)], i.nodeType == 1 && i.contentEditable == "false")
        return !1;
      e = s < 0 ? jt(i) : 0;
    } else
      return !1;
  }
}
function jt(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function Ss(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function W1(i) {
  let e = i.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: i.innerWidth,
    top: 0,
    bottom: i.innerHeight
  };
}
function Vd(i, e) {
  let t = e.width / i.offsetWidth, n = e.height / i.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - i.offsetWidth) < 1) && (t = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(e.height - i.offsetHeight) < 1) && (n = 1), { scaleX: t, scaleY: n };
}
function U1(i, e, t, n, s, r, o, l) {
  let a = i.ownerDocument, c = a.defaultView || window;
  for (let h = i, u = !1; h && !u; )
    if (h.nodeType == 1) {
      let f, d = h == a.body, p = 1, O = 1;
      if (d)
        f = W1(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (u = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let k = h.getBoundingClientRect();
        ({ scaleX: p, scaleY: O } = Vd(h, k)), f = {
          left: k.left,
          right: k.left + h.clientWidth * p,
          top: k.top,
          bottom: k.top + h.clientHeight * O
        };
      }
      let m = 0, g = 0;
      if (s == "nearest")
        e.top < f.top ? (g = -(f.top - e.top + o), t > 0 && e.bottom > f.bottom + g && (g = e.bottom - f.bottom + g + o)) : e.bottom > f.bottom && (g = e.bottom - f.bottom + o, t < 0 && e.top - g < f.top && (g = -(f.top + g - e.top + o)));
      else {
        let k = e.bottom - e.top, S = f.bottom - f.top;
        g = (s == "center" && k <= S ? e.top + k / 2 - S / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - S + o) - f.top;
      }
      if (n == "nearest" ? e.left < f.left ? (m = -(f.left - e.left + r), t > 0 && e.right > f.right + m && (m = e.right - f.right + m + r)) : e.right > f.right && (m = e.right - f.right + r, t < 0 && e.left < f.left + m && (m = -(f.left + m - e.left + r))) : m = (n == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : n == "start" == l ? e.left - r : e.right - (f.right - f.left) + r) - f.left, m || g)
        if (d)
          c.scrollBy(m, g);
        else {
          let k = 0, S = 0;
          if (g) {
            let $ = h.scrollTop;
            h.scrollTop += g / O, S = (h.scrollTop - $) * O;
          }
          if (m) {
            let $ = h.scrollLeft;
            h.scrollLeft += m / p, k = (h.scrollLeft - $) * p;
          }
          e = {
            left: e.left - k,
            top: e.top - S,
            right: e.right - k,
            bottom: e.bottom - S
          }, k && Math.abs(k - m) < 1 && (n = "nearest"), S && Math.abs(S - g) < 1 && (s = "nearest");
        }
      if (d)
        break;
      h = h.assignedSlot || h.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
}
function G1(i) {
  let e = i.ownerDocument, t, n;
  for (let s = i.parentNode; s && !(s == e.body || t && n); )
    if (s.nodeType == 1)
      !n && s.scrollHeight > s.clientHeight && (n = s), !t && s.scrollWidth > s.clientWidth && (t = s), s = s.assignedSlot || s.parentNode;
    else if (s.nodeType == 11)
      s = s.host;
    else
      break;
  return { x: t, y: n };
}
class F1 {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: n } = e;
    this.set(t, Math.min(e.anchorOffset, t ? jt(t) : 0), n, Math.min(e.focusOffset, n ? jt(n) : 0));
  }
  set(e, t, n, s) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = s;
  }
}
let Wi = null;
function Ed(i) {
  if (i.setActive)
    return i.setActive();
  if (Wi)
    return i.focus(Wi);
  let e = [];
  for (let t = i; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (i.focus(Wi == null ? {
    get preventScroll() {
      return Wi = { preventScroll: !0 }, !0;
    }
  } : void 0), !Wi) {
    Wi = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++], s = e[t++], r = e[t++];
      n.scrollTop != s && (n.scrollTop = s), n.scrollLeft != r && (n.scrollLeft = r);
    }
  }
}
let yh;
function Di(i, e, t = e) {
  let n = yh || (yh = document.createRange());
  return n.setEnd(i, t), n.setStart(i, e), n;
}
function nn(i, e, t, n) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  n && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = n);
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = !0, i.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return o.synthetic = !0, i.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function H1(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || i.nodeType == 11 && i.host))
      return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function Ld(i) {
  for (; i.attributes.length; )
    i.removeAttributeNode(i.attributes[0]);
}
function K1(i, e) {
  let t = e.focusNode, n = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != n)
    return !1;
  for (n = Math.min(n, jt(t)); ; )
    if (n) {
      if (t.nodeType != 1)
        return !1;
      let s = t.childNodes[n - 1];
      s.contentEditable == "false" ? n-- : (t = s, n = jt(t));
    } else {
      if (t == i)
        return !0;
      n = Xi(t), t = t.parentNode;
    }
}
function Xd(i) {
  return i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function Dd(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n > 0)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n - 1], n = jt(t);
    } else if (t.parentNode && !wr(t))
      n = Xi(t), t = t.parentNode;
    else
      return null;
  }
}
function qd(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n < t.nodeValue.length)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n], n = 0;
    } else if (t.parentNode && !wr(t))
      n = Xi(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class Ie {
  constructor(e, t, n = !0) {
    this.node = e, this.offset = t, this.precise = n;
  }
  static before(e, t) {
    return new Ie(e.parentNode, Xi(e), t);
  }
  static after(e, t) {
    return new Ie(e.parentNode, Xi(e) + 1, t);
  }
}
const Da = [];
class Oe {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let n of this.children) {
      if (n == e)
        return t;
      t += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let n = this.dom, s = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : n.firstChild)) {
            let l = Oe.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (r = s ? s.nextSibling : n.firstChild, t && !t.written && t.node == n && r != o.dom && (t.written = !0), o.dom.parentNode == n)
          for (; r && r != o.dom; )
            r = vh(r);
        else
          n.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (r = s ? s.nextSibling : n.firstChild, r && t && t.node == n && (t.written = !0); r; )
        r = vh(r);
    } else if (this.flags & 1)
      for (let n of this.children)
        n.flags & 7 && (n.sync(e, t), n.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let n;
    if (e == this.dom)
      n = this.dom.childNodes[t];
    else {
      let s = jt(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let r = e.parentNode;
        if (r == this.dom)
          break;
        s == 0 && r.firstChild != r.lastChild && (e == r.firstChild ? s = -1 : s = 1), e = r;
      }
      s < 0 ? n = e : n = e.nextSibling;
    }
    if (n == this.dom.firstChild)
      return 0;
    for (; n && !Oe.get(n); )
      n = n.nextSibling;
    if (!n)
      return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == n)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, n = 0) {
    let s = -1, r = -1, o = -1, l = -1;
    for (let a = 0, c = n, h = n; a < this.children.length; a++) {
      let u = this.children[a], f = c + u.length;
      if (c < e && f > t)
        return u.domBoundsAround(e, t, c);
      if (f >= e && s == -1 && (s = a, r = c), c > t && u.dom.parentNode == this.dom) {
        o = a, l = h;
        break;
      }
      h = f, c = f + u.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? n + this.length : l,
      startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1)
        return;
      t.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, n = Da) {
    this.markDirty();
    for (let s = e; s < t; s++) {
      let r = this.children[s];
      r.parent == this && n.indexOf(r) < 0 && r.destroy();
    }
    n.length < 250 ? this.children.splice(e, t - e, ...n) : this.children = [].concat(this.children.slice(0, e), n, this.children.slice(t));
    for (let s = 0; s < n.length; s++)
      n[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new jd(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, n, s, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children)
      e.parent == this && e.destroy();
    this.parent = null;
  }
}
Oe.prototype.breakAfter = 0;
function vh(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class jd {
  constructor(e, t, n) {
    this.children = e, this.pos = t, this.i = n, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let n = this.children[--this.i];
      this.pos -= n.length + n.breakAfter;
    }
  }
}
function zd(i, e, t, n, s, r, o, l, a) {
  let { children: c } = i, h = c.length ? c[e] : null, u = r.length ? r[r.length - 1] : null, f = u ? u.breakAfter : o;
  if (!(e == n && h && !o && !f && r.length < 2 && h.merge(t, s, r.length ? u : null, t == 0, l, a))) {
    if (n < c.length) {
      let d = c[n];
      d && (s < d.length || d.breakAfter && (u != null && u.breakAfter)) ? (e == n && (d = d.split(s), s = 0), !f && u && d.merge(0, s, u, !0, 0, a) ? r[r.length - 1] = d : ((s || d.children.length && !d.children[0].length) && d.merge(0, s, null, !1, 0, a), r.push(d))) : d != null && d.breakAfter && (u ? u.breakAfter = 1 : o = 1), n++;
    }
    for (h && (h.breakAfter = o, t > 0 && (!o && r.length && h.merge(t, h.length, r[0], !1, l, 0) ? h.breakAfter = r.shift().breakAfter : (t < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(t, h.length, null, !1, l, 0), e++)); e < n && r.length; )
      if (c[n - 1].become(r[r.length - 1]))
        n--, r.pop(), a = r.length ? 0 : l;
      else if (c[e].become(r[0]))
        e++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && e && n < c.length && !c[e - 1].breakAfter && c[n].merge(0, 0, c[e - 1], !1, l, a) && e--, (e < n || r.length) && i.replaceChildren(e, n, r);
  }
}
function Bd(i, e, t, n, s, r) {
  let o = i.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: c, off: h } = o.findPos(e, -1), u = e - t;
  for (let f of n)
    u += f.length;
  i.length += u, zd(i, c, h, l, a, n, 0, s, r);
}
let et = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Tl = typeof document < "u" ? document : { documentElement: { style: {} } };
const Al = /* @__PURE__ */ /Edge\/(\d+)/.exec(et.userAgent), Yd = /* @__PURE__ */ /MSIE \d/.test(et.userAgent), Zl = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(et.userAgent), no = !!(Yd || Zl || Al), bh = !no && /* @__PURE__ */ /gecko\/(\d+)/i.test(et.userAgent), Mo = !no && /* @__PURE__ */ /Chrome\/(\d+)/.exec(et.userAgent), Sh = "webkitFontSmoothing" in Tl.documentElement.style, Id = !no && /* @__PURE__ */ /Apple Computer/.test(et.vendor), xh = Id && (/* @__PURE__ */ /Mobile\/\w+/.test(et.userAgent) || et.maxTouchPoints > 2);
var I = {
  mac: xh || /* @__PURE__ */ /Mac/.test(et.platform),
  windows: /* @__PURE__ */ /Win/.test(et.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(et.platform),
  ie: no,
  ie_version: Yd ? Tl.documentMode || 6 : Zl ? +Zl[1] : Al ? +Al[1] : 0,
  gecko: bh,
  gecko_version: bh ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(et.userAgent) || [0, 0])[1] : 0,
  chrome: !!Mo,
  chrome_version: Mo ? +Mo[1] : 0,
  ios: xh,
  android: /* @__PURE__ */ /Android\b/.test(et.userAgent),
  webkit: Sh,
  safari: Id,
  webkit_version: Sh ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(et.userAgent) || [0, 0])[1] : 0,
  tabSize: Tl.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const J1 = 256;
class xt extends Oe {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, n) {
    return this.flags & 8 || n && (!(n instanceof xt) || this.length - (t - e) + n.length > J1 || n.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (n ? n.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new xt(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new Ie(this.dom, e);
  }
  domBoundsAround(e, t, n) {
    return { from: n, to: n + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return ey(this.dom, e, t);
  }
}
class Ht extends Oe {
  constructor(e, t = [], n = 0) {
    super(), this.mark = e, this.children = t, this.length = n;
    for (let s of t)
      s.setParent(this);
  }
  setAttrs(e) {
    if (Ld(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, n, s, r, o) {
    return n && (!(n instanceof Ht && n.mark.eq(this.mark)) || e && r <= 0 || t < this.length && o <= 0) ? !1 : (Bd(this, e, t, n ? n.children.slice() : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], n = 0, s = -1, r = 0;
    for (let l of this.children) {
      let a = n + l.length;
      a > e && t.push(n < e ? l.split(e - n) : l), s < 0 && n >= e && (s = r), n = a, r++;
    }
    let o = this.length - e;
    return this.length = e, s > -1 && (this.children.length = s, this.markDirty()), new Ht(this.mark, t, o);
  }
  domAtPos(e) {
    return Nd(this, e);
  }
  coordsAt(e, t) {
    return Ud(this, e, t);
  }
}
function ey(i, e, t) {
  let n = i.nodeValue.length;
  e > n && (e = n);
  let s = e, r = e, o = 0;
  e == 0 && t < 0 || e == n && t >= 0 ? I.chrome || I.gecko || (e ? (s--, o = 1) : r < n && (r++, o = -1)) : t < 0 ? s-- : r < n && r++;
  let l = Di(i, s, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return I.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), o ? Ss(a, o < 0) : a || null;
}
class ci extends Oe {
  static create(e, t, n) {
    return new ci(e, t, n);
  }
  constructor(e, t, n) {
    super(), this.widget = e, this.length = t, this.side = n, this.prevWidget = null;
  }
  split(e) {
    let t = ci.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, n, s, r, o) {
    return n && (!(n instanceof ci) || !this.widget.compare(n.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (n ? n.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof ci && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return ce.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, n = t && t.state.doc, s = this.posAtStart;
    return n ? n.slice(s, s + this.length) : ce.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? Ie.before(this.dom) : Ie.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let n = this.widget.coordsAt(this.dom, e, t);
    if (n)
      return n;
    let s = this.dom.getClientRects(), r = null;
    if (!s.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? s.length - 1 : 0; r = s[l], !(e > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return Ss(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class un extends Oe {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof un && e.side == this.side;
  }
  split() {
    return new un(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? Ie.before(this.dom) : Ie.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return ce.empty;
  }
  get isHidden() {
    return !0;
  }
}
xt.prototype.children = ci.prototype.children = un.prototype.children = Da;
function Nd(i, e) {
  let t = i.dom, { children: n } = i, s = 0;
  for (let r = 0; s < n.length; s++) {
    let o = n[s], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t)
        return o.domAtPos(e - r);
      if (e <= r)
        break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = n[r - 1];
    if (o.dom.parentNode == t)
      return o.domAtPos(o.length);
  }
  for (let r = s; r < n.length; r++) {
    let o = n[r];
    if (o.dom.parentNode == t)
      return o.domAtPos(0);
  }
  return new Ie(t, 0);
}
function Wd(i, e, t) {
  let n, { children: s } = i;
  t > 0 && e instanceof Ht && s.length && (n = s[s.length - 1]) instanceof Ht && n.mark.eq(e.mark) ? Wd(n, e.children[0], t - 1) : (s.push(e), e.setParent(i)), i.length += e.length;
}
function Ud(i, e, t) {
  let n = null, s = -1, r = null, o = -1;
  function l(c, h) {
    for (let u = 0, f = 0; u < c.children.length && f <= h; u++) {
      let d = c.children[u], p = f + d.length;
      p >= h && (d.children.length ? l(d, h - f) : (!r || r.isHidden && t > 0) && (p > h || f == p && d.getSide() > 0) ? (r = d, o = h - f) : (f < h || f == p && d.getSide() < 0 && !d.isHidden) && (n = d, s = h - f)), f = p;
    }
  }
  l(i, e);
  let a = (t < 0 ? n : r) || n || r;
  return a ? a.coordsAt(Math.max(0, a == n ? s : o), t) : ty(i);
}
function ty(i) {
  let e = i.dom.lastChild;
  if (!e)
    return i.dom.getBoundingClientRect();
  let t = hn(e);
  return t[t.length - 1] || null;
}
function _l(i, e) {
  for (let t in i)
    t == "class" && e.class ? e.class += " " + i.class : t == "style" && e.style ? e.style += ";" + i.style : e[t] = i[t];
  return e;
}
const kh = /* @__PURE__ */ Object.create(null);
function Qr(i, e, t) {
  if (i == e)
    return !0;
  i || (i = kh), e || (e = kh);
  let n = Object.keys(i), s = Object.keys(e);
  if (n.length - (t && n.indexOf(t) > -1 ? 1 : 0) != s.length - (t && s.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let r of n)
    if (r != t && (s.indexOf(r) == -1 || i[r] !== e[r]))
      return !1;
  return !0;
}
function Ml(i, e, t) {
  let n = !1;
  if (e)
    for (let s in e)
      t && s in t || (n = !0, s == "style" ? i.style.cssText = "" : i.removeAttribute(s));
  if (t)
    for (let s in t)
      e && e[s] == t[s] || (n = !0, s == "style" ? i.style.cssText = t[s] : i.setAttribute(s, t[s]));
  return n;
}
function iy(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < i.attributes.length; t++) {
    let n = i.attributes[t];
    e[n.name] = n.value;
  }
  return e;
}
class Bt {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, n) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var Ge = /* @__PURE__ */ function(i) {
  return i[i.Text = 0] = "Text", i[i.WidgetBefore = 1] = "WidgetBefore", i[i.WidgetAfter = 2] = "WidgetAfter", i[i.WidgetRange = 3] = "WidgetRange", i;
}(Ge || (Ge = {}));
class U extends Li {
  constructor(e, t, n, s) {
    super(), this.startSide = e, this.endSide = t, this.widget = n, this.spec = s;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new xs(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), n = !!e.block;
    return t += n && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new mi(e, t, t, n, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, n, s;
    if (e.isBlockGap)
      n = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = Gd(e, t);
      n = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new mi(e, n, s, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new ks(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return ae.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
U.none = ae.empty;
class xs extends U {
  constructor(e) {
    let { start: t, end: n } = Gd(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, n;
    return this == e || e instanceof xs && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((n = e.attrs) === null || n === void 0 ? void 0 : n.class)) && Qr(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
xs.prototype.point = !1;
class ks extends U {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof ks && this.spec.class == e.spec.class && Qr(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
ks.prototype.mapMode = je.TrackBefore;
ks.prototype.point = !0;
class mi extends U {
  constructor(e, t, n, s, r, o) {
    super(t, n, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? t <= 0 ? je.TrackBefore : je.TrackAfter : je.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? Ge.WidgetRange : this.startSide <= 0 ? Ge.WidgetBefore : Ge.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof mi && ny(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
mi.prototype.point = !0;
function Gd(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = i;
  return t == null && (t = i.inclusive), n == null && (n = i.inclusive), { start: t ?? e, end: n ?? e };
}
function ny(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function Rl(i, e, t, n = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + n >= i ? t[s] = Math.max(t[s], e) : t.push(i, e);
}
class Ce extends Oe {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, n, s, r, o) {
    if (n) {
      if (!(n instanceof Ce))
        return !1;
      this.dom || n.transferDOM(this);
    }
    return s && this.setDeco(n ? n.attrs : null), Bd(this, e, t, n ? n.children.slice() : [], r, o), !0;
  }
  split(e) {
    let t = new Ce();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i: n, off: s } = this.childPos(e);
    s && (t.append(this.children[n].split(s), 0), this.children[n].merge(s, this.children[n].length, null, !1, 0, 0), n++);
    for (let r = n; r < this.children.length; r++)
      t.append(this.children[r], 0);
    for (; n > 0 && this.children[n - 1].length == 0; )
      this.children[--n].destroy();
    return this.children.length = n, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    Qr(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    Wd(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, n = e.spec.class;
    t && (this.attrs = _l(t, this.attrs || {})), n && (this.attrs = _l({ class: n }, this.attrs || {}));
  }
  domAtPos(e) {
    return Nd(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var n;
    this.dom ? this.flags & 4 && (Ld(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Ml(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && Oe.get(s) instanceof Ht; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((n = Oe.get(s)) === null || n === void 0 ? void 0 : n.isEditable) == !1 && (!I.ios || !this.children.some((r) => r instanceof xt))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let n of this.children) {
      if (!(n instanceof xt) || /[^ -~]/.test(n.text))
        return null;
      let s = hn(n.dom);
      if (s.length != 1)
        return null;
      e += s[0].width, t = s[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: t
    } : null;
  }
  coordsAt(e, t) {
    let n = Ud(this, e, t);
    if (!this.children.length && n && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState, r = n.bottom - n.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return { top: n.top + o, bottom: n.bottom - o, left: n.left, right: n.left };
      }
    }
    return n;
  }
  become(e) {
    return e instanceof Ce && this.children.length == 0 && e.children.length == 0 && Qr(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let n = 0, s = 0; n < e.children.length; n++) {
      let r = e.children[n], o = s + r.length;
      if (o >= t) {
        if (r instanceof Ce)
          return r;
        if (o > t)
          break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class Ft extends Oe {
  constructor(e, t, n) {
    super(), this.widget = e, this.length = t, this.deco = n, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, n, s, r, o) {
    return n && (!(n instanceof Ft) || !this.widget.compare(n.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (n ? n.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? Ie.before(this.dom) : Ie.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let n = new Ft(this.widget, t, this.deco);
    return n.breakAfter = this.breakAfter, n;
  }
  get children() {
    return Da;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : ce.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof Ft && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    let n = this.widget.coordsAt(this.dom, e, t);
    return n || (this.widget instanceof Vl ? null : Ss(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: n } = this.deco;
    return t == n ? !1 : e < 0 ? t < 0 : n > 0;
  }
}
class Vl extends Bt {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class Gn {
  constructor(e, t, n, s) {
    this.doc = e, this.pos = t, this.end = n, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof Ft && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new Ce()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Vs(new un(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof Ft) && this.getLine();
  }
  buildText(e, t, n) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let s = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(t.slice(t.length - n)), this.getLine().append(Vs(new xt(this.text.slice(this.textOff, this.textOff + s)), t), n), this.atCursorPos = !0, this.textOff += s, e -= s, n = 0;
    }
  }
  span(e, t, n, s) {
    this.buildText(t - e, n, s), this.pos = t, this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, n, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && n instanceof mi) {
      if (n.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (n instanceof mi)
      if (n.block)
        n.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Ft(n.widget || fn.block, l, n));
      else {
        let a = ci.create(n.widget || fn.inline, l, l ? 0 : n.startSide), c = this.atCursorPos && !a.isEditable && r <= s.length && (e < t || n.startSide > 0), h = !a.isEditable && (e < t || r > s.length || n.startSide <= 0), u = this.getLine();
        this.pendingBuffer == 2 && !c && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), c && (u.append(Vs(new un(1), s), r), r = s.length + Math.max(0, r - s.length)), u.append(Vs(a, s), r), this.atCursorPos = h, this.pendingBuffer = h ? e < t || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, n, s, r) {
    let o = new Gn(e, t, n, r);
    return o.openEnd = ae.spans(s, t, n, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Vs(i, e) {
  for (let t of e)
    i = new Ht(t, [i], i.length);
  return i;
}
class fn extends Bt {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
fn.inline = /* @__PURE__ */ new fn("span");
fn.block = /* @__PURE__ */ new fn("div");
var Se = /* @__PURE__ */ function(i) {
  return i[i.LTR = 0] = "LTR", i[i.RTL = 1] = "RTL", i;
}(Se || (Se = {}));
const qi = Se.LTR, qa = Se.RTL;
function Fd(i) {
  let e = [];
  for (let t = 0; t < i.length; t++)
    e.push(1 << +i[t]);
  return e;
}
const sy = /* @__PURE__ */ Fd("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), ry = /* @__PURE__ */ Fd("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), El = /* @__PURE__ */ Object.create(null), Ct = [];
for (let i of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ i.charCodeAt(0), t = /* @__PURE__ */ i.charCodeAt(1);
  El[e] = t, El[t] = -e;
}
function Hd(i) {
  return i <= 247 ? sy[i] : 1424 <= i && i <= 1524 ? 2 : 1536 <= i && i <= 1785 ? ry[i - 1536] : 1774 <= i && i <= 2220 ? 4 : 8192 <= i && i <= 8204 ? 256 : 64336 <= i && i <= 65023 ? 4 : 1;
}
const oy = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class hi {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? qa : qi;
  }
  /**
  @internal
  */
  constructor(e, t, n) {
    this.from = e, this.to = t, this.level = n;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, n, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == n)
          return o;
        (r < 0 || (s != 0 ? s < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function Kd(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++) {
    let n = i[t], s = e[t];
    if (n.from != s.from || n.to != s.to || n.direction != s.direction || !Kd(n.inner, s.inner))
      return !1;
  }
  return !0;
}
const pe = [];
function ly(i, e, t, n, s) {
  for (let r = 0; r <= n.length; r++) {
    let o = r ? n[r - 1].to : e, l = r < n.length ? n[r].from : t, a = r ? 256 : s;
    for (let c = o, h = a, u = a; c < l; c++) {
      let f = Hd(i.charCodeAt(c));
      f == 512 ? f = h : f == 8 && u == 4 && (f = 16), pe[c] = f == 4 ? 2 : f, f & 7 && (u = f), h = f;
    }
    for (let c = o, h = a, u = a; c < l; c++) {
      let f = pe[c];
      if (f == 128)
        c < l - 1 && h == pe[c + 1] && h & 24 ? f = pe[c] = h : pe[c] = 256;
      else if (f == 64) {
        let d = c + 1;
        for (; d < l && pe[d] == 64; )
          d++;
        let p = c && h == 8 || d < t && pe[d] == 8 ? u == 1 ? 1 : 8 : 256;
        for (let O = c; O < d; O++)
          pe[O] = p;
        c = d - 1;
      } else f == 8 && u == 1 && (pe[c] = 1);
      h = f, f & 7 && (u = f);
    }
  }
}
function ay(i, e, t, n, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
    let c = o ? n[o - 1].to : e, h = o < n.length ? n[o].from : t;
    for (let u = c, f, d, p; u < h; u++)
      if (d = El[f = i.charCodeAt(u)])
        if (d < 0) {
          for (let O = l - 3; O >= 0; O -= 3)
            if (Ct[O + 1] == -d) {
              let m = Ct[O + 2], g = m & 2 ? s : m & 4 ? m & 1 ? r : s : 0;
              g && (pe[u] = pe[Ct[O]] = g), l = O;
              break;
            }
        } else {
          if (Ct.length == 189)
            break;
          Ct[l++] = u, Ct[l++] = f, Ct[l++] = a;
        }
      else if ((p = pe[u]) == 2 || p == 1) {
        let O = p == s;
        a = O ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let g = Ct[m + 2];
          if (g & 2)
            break;
          if (O)
            Ct[m + 2] |= 2;
          else {
            if (g & 4)
              break;
            Ct[m + 2] |= 4;
          }
        }
      }
  }
}
function cy(i, e, t, n) {
  for (let s = 0, r = n; s <= t.length; s++) {
    let o = s ? t[s - 1].to : i, l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let c = pe[a];
      if (c == 256) {
        let h = a + 1;
        for (; ; )
          if (h == l) {
            if (s == t.length)
              break;
            h = t[s++].to, l = s < t.length ? t[s].from : e;
          } else if (pe[h] == 256)
            h++;
          else
            break;
        let u = r == 1, f = (h < e ? pe[h] : n) == 1, d = u == f ? u ? 1 : 2 : n;
        for (let p = h, O = s, m = O ? t[O - 1].to : i; p > a; )
          p == m && (p = t[--O].from, m = O ? t[O - 1].to : i), pe[--p] = d;
        a = h;
      } else
        r = c, a++;
    }
  }
}
function Ll(i, e, t, n, s, r, o) {
  let l = n % 2 ? 2 : 1;
  if (n % 2 == s % 2)
    for (let a = e, c = 0; a < t; ) {
      let h = !0, u = !1;
      if (c == r.length || a < r[c].from) {
        let O = pe[a];
        O != l && (h = !1, u = O == 16);
      }
      let f = !h && l == 1 ? [] : null, d = h ? n : n + 1, p = a;
      e: for (; ; )
        if (c < r.length && p == r[c].from) {
          if (u)
            break e;
          let O = r[c];
          if (!h)
            for (let m = O.to, g = c + 1; ; ) {
              if (m == t)
                break e;
              if (g < r.length && r[g].from == m)
                m = r[g++].to;
              else {
                if (pe[m] == l)
                  break e;
                break;
              }
            }
          if (c++, f)
            f.push(O);
          else {
            O.from > a && o.push(new hi(a, O.from, d));
            let m = O.direction == qi != !(d % 2);
            Xl(i, m ? n + 1 : n, s, O.inner, O.from, O.to, o), a = O.to;
          }
          p = O.to;
        } else {
          if (p == t || (h ? pe[p] != l : pe[p] == l))
            break;
          p++;
        }
      f ? Ll(i, a, p, n + 1, s, f, o) : a < p && o.push(new hi(a, p, d)), a = p;
    }
  else
    for (let a = t, c = r.length; a > e; ) {
      let h = !0, u = !1;
      if (!c || a > r[c - 1].to) {
        let O = pe[a - 1];
        O != l && (h = !1, u = O == 16);
      }
      let f = !h && l == 1 ? [] : null, d = h ? n : n + 1, p = a;
      e: for (; ; )
        if (c && p == r[c - 1].to) {
          if (u)
            break e;
          let O = r[--c];
          if (!h)
            for (let m = O.from, g = c; ; ) {
              if (m == e)
                break e;
              if (g && r[g - 1].to == m)
                m = r[--g].from;
              else {
                if (pe[m - 1] == l)
                  break e;
                break;
              }
            }
          if (f)
            f.push(O);
          else {
            O.to < a && o.push(new hi(O.to, a, d));
            let m = O.direction == qi != !(d % 2);
            Xl(i, m ? n + 1 : n, s, O.inner, O.from, O.to, o), a = O.from;
          }
          p = O.from;
        } else {
          if (p == e || (h ? pe[p - 1] != l : pe[p - 1] == l))
            break;
          p--;
        }
      f ? Ll(i, p, a, n + 1, s, f, o) : p < a && o.push(new hi(p, a, d)), a = p;
    }
}
function Xl(i, e, t, n, s, r, o) {
  let l = e % 2 ? 2 : 1;
  ly(i, s, r, n, l), ay(i, s, r, n, l), cy(s, r, n, l), Ll(i, s, r, e, t, n, o);
}
function hy(i, e, t) {
  if (!i)
    return [new hi(0, 0, e == qa ? 1 : 0)];
  if (e == qi && !t.length && !oy.test(i))
    return Jd(i.length);
  if (t.length)
    for (; i.length > pe.length; )
      pe[pe.length] = 256;
  let n = [], s = e == qi ? 0 : 1;
  return Xl(i, s, s, t, 0, i.length, n), n;
}
function Jd(i) {
  return [new hi(0, i, 0)];
}
let ep = "";
function uy(i, e, t, n, s) {
  var r;
  let o = n.head - i.from, l = hi.find(e, o, (r = n.bidiLevel) !== null && r !== void 0 ? r : -1, n.assoc), a = e[l], c = a.side(s, t);
  if (o == c) {
    let f = l += s ? 1 : -1;
    if (f < 0 || f >= e.length)
      return null;
    a = e[l = f], o = a.side(!s, t), c = a.side(s, t);
  }
  let h = ze(i.text, o, a.forward(s, t));
  (h < a.from || h > a.to) && (h = c), ep = i.text.slice(Math.min(o, h), Math.max(o, h));
  let u = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return u && h == c && u.level + (s ? 0 : 1) < a.level ? E.cursor(u.side(!s, t) + i.from, u.forward(s, t) ? 1 : -1, u.level) : E.cursor(h + i.from, a.forward(s, t) ? -1 : 1, a.level);
}
function fy(i, e, t) {
  for (let n = e; n < t; n++) {
    let s = Hd(i.charCodeAt(n));
    if (s == 1)
      return qi;
    if (s == 2 || s == 4)
      return qa;
  }
  return qi;
}
const tp = /* @__PURE__ */ Y.define(), ip = /* @__PURE__ */ Y.define(), np = /* @__PURE__ */ Y.define(), sp = /* @__PURE__ */ Y.define(), Dl = /* @__PURE__ */ Y.define(), rp = /* @__PURE__ */ Y.define(), op = /* @__PURE__ */ Y.define(), ja = /* @__PURE__ */ Y.define(), za = /* @__PURE__ */ Y.define(), lp = /* @__PURE__ */ Y.define({
  combine: (i) => i.some((e) => e)
}), ap = /* @__PURE__ */ Y.define({
  combine: (i) => i.some((e) => e)
}), cp = /* @__PURE__ */ Y.define();
class sn {
  constructor(e, t = "nearest", n = "nearest", s = 5, r = 5, o = !1) {
    this.range = e, this.y = t, this.x = n, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new sn(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new sn(E.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Es = /* @__PURE__ */ H.define({ map: (i, e) => i.map(e) }), hp = /* @__PURE__ */ H.define();
function Ue(i, e, t) {
  let n = i.facet(sp);
  n.length ? n[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const oi = /* @__PURE__ */ Y.define({ combine: (i) => i.length ? i[0] : !0 });
let dy = 0;
const Dn = /* @__PURE__ */ Y.define();
class we {
  constructor(e, t, n, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = n, this.domEventObservers = s, this.extension = r(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: n, eventObservers: s, provide: r, decorations: o } = t || {};
    return new we(dy++, e, n, s, (l) => {
      let a = [Dn.of(l)];
      return o && a.push(rs.of((c) => {
        let h = c.plugin(l);
        return h ? o(h) : U.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return we.define((n) => new e(n), t);
  }
}
class Ro {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (n) {
            if (Ue(t.state, n, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        Ue(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        Ue(e.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const up = /* @__PURE__ */ Y.define(), Ba = /* @__PURE__ */ Y.define(), rs = /* @__PURE__ */ Y.define(), fp = /* @__PURE__ */ Y.define(), Ya = /* @__PURE__ */ Y.define(), dp = /* @__PURE__ */ Y.define();
function wh(i, e) {
  let t = i.state.facet(dp);
  if (!t.length)
    return t;
  let n = t.map((r) => r instanceof Function ? r(i) : r), s = [];
  return ae.spans(n, e.from, e.to, {
    point() {
    },
    span(r, o, l, a) {
      let c = r - e.from, h = o - e.from, u = s;
      for (let f = l.length - 1; f >= 0; f--, a--) {
        let d = l[f].spec.bidiIsolate, p;
        if (d == null && (d = fy(e.text, c, h)), a > 0 && u.length && (p = u[u.length - 1]).to == c && p.direction == d)
          p.to = h, u = p.inner;
        else {
          let O = { from: c, to: h, direction: d, inner: [] };
          u.push(O), u = O.inner;
        }
      }
    }
  }), s;
}
const pp = /* @__PURE__ */ Y.define();
function Op(i) {
  let e = 0, t = 0, n = 0, s = 0;
  for (let r of i.state.facet(pp)) {
    let o = r(i);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (n = Math.max(n, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: n, bottom: s };
}
const qn = /* @__PURE__ */ Y.define();
class dt {
  constructor(e, t, n, s) {
    this.fromA = e, this.toA = t, this.fromB = n, this.toB = s;
  }
  join(e) {
    return new dt(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, n = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > n.toA)) {
        if (s.toA < n.fromA)
          break;
        n = n.join(s), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, n), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let n = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s], c = o - l, h = a ? a.fromB : 1e9;
      for (; r < t.length && t[r] < h; ) {
        let u = t[r], f = t[r + 1], d = Math.max(l, u), p = Math.min(h, f);
        if (d <= p && new dt(d + c, p + c, d, p).addToSet(n), f > h)
          break;
        r += 2;
      }
      if (!a)
        return n;
      new dt(a.fromA, a.toA, a.fromB, a.toB).addToSet(n), o = a.toA, l = a.toB;
    }
  }
}
class Pr {
  constructor(e, t, n) {
    this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = Me.empty(this.startState.doc.length);
    for (let r of n)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new dt(r, o, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Pr(e, t, n);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Qh extends Oe {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = U.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new Ce()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new dt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: c, toA: h }) => h < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !by(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? Oy(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: c, to: h } = this.hasComposition;
      n = new dt(c, h, e.changes.mapPos(c, -1), e.changes.mapPos(h, 1)).addToSet(n.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (I.ie || I.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = yy(o, l, e.changes);
    return n = dt.extendWithRanges(n, a), !(this.flags & 7) && n.length == 0 ? !1 : (this.updateInner(n, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t, n) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, n);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = I.chrome || I.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Ft && o.widget instanceof Vl && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, t, n) {
    let s = n ? n.range.addToSet(e.slice()) : e, r = this.childCursor(t);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: c, fromB: h, toB: u } = l, f, d, p, O;
      if (n && n.range.fromB < u && n.range.toB > h) {
        let $ = Gn.build(this.view.state.doc, h, n.range.fromB, this.decorations, this.dynamicDecorationMap), C = Gn.build(this.view.state.doc, n.range.toB, u, this.decorations, this.dynamicDecorationMap);
        d = $.breakAtStart, p = $.openStart, O = C.openEnd;
        let M = this.compositionView(n);
        C.breakAtStart ? M.breakAfter = 1 : C.content.length && M.merge(M.length, M.length, C.content[0], !1, C.openStart, 0) && (M.breakAfter = C.content[0].breakAfter, C.content.shift()), $.content.length && M.merge(0, 0, $.content[$.content.length - 1], !0, 0, $.openEnd) && $.content.pop(), f = $.content.concat(M).concat(C.content);
      } else
        ({ content: f, breakAtStart: d, openStart: p, openEnd: O } = Gn.build(this.view.state.doc, h, u, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: g } = r.findPos(c, 1), { i: k, off: S } = r.findPos(a, -1);
      zd(this, k, S, m, g, f, d, p, O);
    }
    n && this.fixCompositionDOM(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(hp) && (this.editContextFormatting = n.value);
  }
  compositionView(e) {
    let t = new xt(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks)
      t = new Ht(s, [t], t.length);
    let n = new Ce();
    return n.append(t, 0), n;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = Oe.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, n = this.childPos(e.range.fromB, 1), s = this.children[n.i];
    t(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      n = s.childPos(n.off, 1), s = s.children[n.i], t(r >= 0 ? e.marks[r].node : e.text, s);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n = this.view.root.activeElement, s = n == this.dom, r = !s && lr(this.dom, this.view.observer.selectionRange) && !(n && this.dom.contains(n));
    if (!(s || t || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), c = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (I.gecko && l.empty && !this.hasComposition && py(a)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(u, a.node.childNodes[a.offset] || null)), a = c = new Ie(u, 0), o = !0;
    }
    let h = this.view.observer.selectionRange;
    (o || !h.focusNode || (!Un(a.node, a.offset, h.anchorNode, h.anchorOffset) || !Un(c.node, c.offset, h.focusNode, h.focusOffset)) && !this.suppressWidgetCursorChange(h, l)) && (this.view.observer.ignore(() => {
      I.android && I.chrome && this.dom.contains(h.focusNode) && vy(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = ss(this.view.root);
      if (u) if (l.empty) {
        if (I.gecko) {
          let f = my(a.node, a.offset);
          if (f && f != 3) {
            let d = (f == 1 ? Dd : qd)(a.node, a.offset);
            d && (a = new Ie(d.node, d.offset));
          }
        }
        u.collapse(a.node, a.offset), l.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = l.bidiLevel);
      } else if (u.extend) {
        u.collapse(a.node, a.offset);
        try {
          u.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let f = document.createRange();
        l.anchor > l.head && ([a, c] = [c, a]), f.setEnd(c.node, c.offset), f.setStart(a.node, a.offset), u.removeAllRanges(), u.addRange(f);
      }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(a, c)), this.impreciseAnchor = a.precise ? null : new Ie(h.anchorNode, h.anchorOffset), this.impreciseHead = c.precise ? null : new Ie(h.focusNode, h.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Un(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, n = ss(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!n || !t.empty || !t.assoc || !n.modify)
      return;
    let o = Ce.find(this, t.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), c = this.coordsAt(t.head, 1);
    if (!a || !c || a.bottom > c.top)
      return;
    let h = this.domAtPos(t.head + t.assoc);
    n.collapse(h.node, h.offset), n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let u = e.observer.selectionRange;
    e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && n.collapse(s, r);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(e) {
    let t = this.dom, n;
    if (e.node != t)
      return e;
    for (let s = e.offset; !n && s < t.childNodes.length; s++) {
      let r = Oe.get(t.childNodes[s]);
      r instanceof Ce && (n = r.domAtPos(0));
    }
    for (let s = e.offset - 1; !n && s >= 0; s--) {
      let r = Oe.get(t.childNodes[s]);
      r instanceof Ce && (n = r.domAtPos(r.length));
    }
    return n ? new Ie(n.node, n.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let n = Oe.get(t);
      if (n && n.rootView == this)
        return n;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let n = this.nearest(e);
    if (!n)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return n.localPosFromDOM(e, t) + n.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: n } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let s = this.children[t];
      if (n < s.length || s instanceof Ce)
        break;
      t++, n = 0;
    }
    return this.children[t].domAtPos(n);
  }
  coordsAt(e, t) {
    let n = null, s = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = r - l.breakAfter, c = a - l.length;
      if (a < e)
        break;
      if (c <= e && (c < e || l.covers(-1)) && (a > e || l.covers(1)) && (!n || l instanceof Ce && !(n instanceof Ce && t >= 0)))
        n = l, s = c;
      else if (n && c == e && a == e && l instanceof Ft && Math.abs(t) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (n = null);
      }
      r = c;
    }
    return n ? n.coordsAt(e - s, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: n } = this.childPos(e, 1), s = this.children[t];
    if (!(s instanceof Ce))
      return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(n, 1);
      for (; ; l++) {
        if (l == s.children.length)
          return null;
        if ((s = s.children[l]).length)
          break;
      }
      n = a;
    }
    if (!(s instanceof xt))
      return null;
    let r = ze(s.text, n);
    if (r == n)
      return null;
    let o = Di(s.dom, n, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: n, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == Se.LTR;
    for (let c = 0, h = 0; h < this.children.length; h++) {
      let u = this.children[h], f = c + u.length;
      if (f > s)
        break;
      if (c >= n) {
        let d = u.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let p = u.dom.lastChild, O = p ? hn(p) : [];
          if (O.length) {
            let m = O[O.length - 1], g = a ? m.right - d.left : d.right - m.left;
            g > l && (l = g, this.minWidth = r, this.minWidthFrom = c, this.minWidthTo = f);
          }
        }
      }
      c = f + u.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? Se.RTL : Se.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof Ce) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), t, n, s;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let r = hn(e.firstChild)[0];
      t = e.getBoundingClientRect().height, n = r ? r.width / 27 : 7, s = r ? r.height : t, e.remove();
    }), { lineHeight: t, charWidth: n, textHeight: s };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new jd(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let n = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], o = r ? r.from - 1 : this.length;
      if (o > n) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
        e.push(U.replace({
          widget: new Vl(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(n, o));
      }
      if (!r)
        break;
      n = r.to + 1;
    }
    return U.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(rs).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), n = !1, s = this.view.state.facet(fp).map((r, o) => {
      let l = typeof r == "function";
      return l && (n = !0), l ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = n, t.push(ae.join(s))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let c = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = c.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let c of this.view.state.facet(cp))
      try {
        if (c(this.view, e.range, e))
          return !0;
      } catch (h) {
        Ue(this.view.state, h, "scroll handler");
      }
    let { range: t } = e, n = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), s;
    if (!n)
      return;
    !t.empty && (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, s.left),
      top: Math.min(n.top, s.top),
      right: Math.max(n.right, s.right),
      bottom: Math.max(n.bottom, s.bottom)
    });
    let r = Op(this.view), o = {
      left: n.left - r.left,
      top: n.top - r.top,
      right: n.right + r.right,
      bottom: n.bottom + r.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    U1(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == Se.LTR);
  }
}
function py(i) {
  return i.node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false");
}
function mp(i, e) {
  let t = i.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let n = Dd(t.focusNode, t.focusOffset), s = qd(t.focusNode, t.focusOffset), r = n || s;
  if (s && n && s.node != n.node) {
    let l = Oe.get(s.node);
    if (!l || l instanceof xt && l.text != s.node.nodeValue)
      r = s;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = Oe.get(n.node);
      !a || a instanceof xt && a.text != n.node.nodeValue || (r = s);
    }
  }
  if (i.docView.lastCompositionAfterCursor = r != n, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Oy(i, e, t) {
  let n = mp(i, t);
  if (!n)
    return null;
  let { node: s, from: r, to: o } = n, l = s.nodeValue;
  if (/[\n\r]/.test(l) || i.state.doc.sliceString(n.from, n.to) != l)
    return null;
  let a = e.invertedDesc, c = new dt(a.mapPos(r), a.mapPos(o), r, o), h = [];
  for (let u = s.parentNode; ; u = u.parentNode) {
    let f = Oe.get(u);
    if (f instanceof Ht)
      h.push({ node: u, deco: f.mark });
    else {
      if (f instanceof Ce || u.nodeName == "DIV" && u.parentNode == i.contentDOM)
        return { range: c, text: s, marks: h, line: u };
      if (u != i.contentDOM)
        h.push({ node: u, deco: new xs({
          inclusive: !0,
          attributes: iy(u),
          tagName: u.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function my(i, e) {
  return i.nodeType != 1 ? 0 : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < i.childNodes.length && i.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let gy = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Rl(e, t, this.changes);
  }
  comparePoint(e, t) {
    Rl(e, t, this.changes);
  }
};
function yy(i, e, t) {
  let n = new gy();
  return ae.compare(i, e, t, n), n.changes;
}
function vy(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function by(i, e) {
  let t = !1;
  return e && i.iterChangedRanges((n, s) => {
    n < e.to && s > e.from && (t = !0);
  }), t;
}
function Sy(i, e, t = 1) {
  let n = i.charCategorizer(e), s = i.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return E.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = ze(s.text, r, !1) : l = ze(s.text, r);
  let a = n(s.text.slice(o, l));
  for (; o > 0; ) {
    let c = ze(s.text, o, !1);
    if (n(s.text.slice(c, o)) != a)
      break;
    o = c;
  }
  for (; l < s.length; ) {
    let c = ze(s.text, l);
    if (n(s.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return E.range(o + s.from, l + s.from);
}
function xy(i, e) {
  return e.left > i ? e.left - i : Math.max(0, i - e.right);
}
function ky(i, e) {
  return e.top > i ? e.top - i : Math.max(0, i - e.bottom);
}
function Vo(i, e) {
  return i.top < e.bottom - 1 && i.bottom > e.top + 1;
}
function Ph(i, e) {
  return e < i.top ? { top: e, left: i.left, right: i.right, bottom: i.bottom } : i;
}
function $h(i, e) {
  return e > i.bottom ? { top: i.top, left: i.left, right: i.right, bottom: e } : i;
}
function ql(i, e, t) {
  let n, s, r, o, l = !1, a, c, h, u;
  for (let p = i.firstChild; p; p = p.nextSibling) {
    let O = hn(p);
    for (let m = 0; m < O.length; m++) {
      let g = O[m];
      s && Vo(s, g) && (g = Ph($h(g, s.bottom), s.top));
      let k = xy(e, g), S = ky(t, g);
      if (k == 0 && S == 0)
        return p.nodeType == 3 ? Ch(p, e, t) : ql(p, e, t);
      if (!n || o > S || o == S && r > k) {
        n = p, s = g, r = k, o = S;
        let $ = S ? t < g.top ? -1 : 1 : k ? e < g.left ? -1 : 1 : 0;
        l = !$ || ($ > 0 ? m < O.length - 1 : m > 0);
      }
      k == 0 ? t > g.bottom && (!h || h.bottom < g.bottom) ? (a = p, h = g) : t < g.top && (!u || u.top > g.top) && (c = p, u = g) : h && Vo(h, g) ? h = $h(h, g.bottom) : u && Vo(u, g) && (u = Ph(u, g.top));
    }
  }
  if (h && h.bottom >= t ? (n = a, s = h) : u && u.top <= t && (n = c, s = u), !n)
    return { node: i, offset: 0 };
  let f = Math.max(s.left, Math.min(s.right, e));
  if (n.nodeType == 3)
    return Ch(n, f, t);
  if (l && n.contentEditable != "false")
    return ql(n, f, t);
  let d = Array.prototype.indexOf.call(i.childNodes, n) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: i, offset: d };
}
function Ch(i, e, t) {
  let n = i.nodeValue.length, s = -1, r = 1e9, o = 0;
  for (let l = 0; l < n; l++) {
    let a = Di(i, l, l + 1).getClientRects();
    for (let c = 0; c < a.length; c++) {
      let h = a[c];
      if (h.top == h.bottom)
        continue;
      o || (o = e - h.left);
      let u = (h.top > t ? h.top - t : t - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && u < r) {
        let f = e >= (h.left + h.right) / 2, d = f;
        if ((I.chrome || I.gecko) && Di(i, l).getBoundingClientRect().left == h.right && (d = !f), u <= 0)
          return { node: i, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), r = u;
      }
    }
  }
  return { node: i, offset: s > -1 ? s : o > 0 ? i.nodeValue.length : 0 };
}
function gp(i, e, t, n = -1) {
  var s, r;
  let o = i.contentDOM.getBoundingClientRect(), l = o.top + i.viewState.paddingTop, a, { docHeight: c } = i.viewState, { x: h, y: u } = e, f = u - l;
  if (f < 0)
    return 0;
  if (f > c)
    return i.state.doc.length;
  for (let $ = i.viewState.heightOracle.textHeight / 2, C = !1; a = i.elementAtHeight(f), a.type != Ge.Text; )
    for (; f = n > 0 ? a.bottom + $ : a.top - $, !(f >= 0 && f <= c); ) {
      if (C)
        return t ? null : 0;
      C = !0, n = -n;
    }
  u = l + f;
  let d = a.from;
  if (d < i.viewport.from)
    return i.viewport.from == 0 ? 0 : t ? null : Th(i, o, a, h, u);
  if (d > i.viewport.to)
    return i.viewport.to == i.state.doc.length ? i.state.doc.length : t ? null : Th(i, o, a, h, u);
  let p = i.dom.ownerDocument, O = i.root.elementFromPoint ? i.root : p, m = O.elementFromPoint(h, u);
  m && !i.contentDOM.contains(m) && (m = null), m || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), m = O.elementFromPoint(h, u), m && !i.contentDOM.contains(m) && (m = null));
  let g, k = -1;
  if (m && ((s = i.docView.nearest(m)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let $ = p.caretPositionFromPoint(h, u);
      $ && ({ offsetNode: g, offset: k } = $);
    } else if (p.caretRangeFromPoint) {
      let $ = p.caretRangeFromPoint(h, u);
      $ && ({ startContainer: g, startOffset: k } = $, (!i.contentDOM.contains(g) || I.safari && wy(g, k, h) || I.chrome && Qy(g, k, h)) && (g = void 0));
    }
    g && (k = Math.min(jt(g), k));
  }
  if (!g || !i.docView.dom.contains(g)) {
    let $ = Ce.find(i.docView, d);
    if (!$)
      return f > a.top + a.height / 2 ? a.to : a.from;
    ({ node: g, offset: k } = ql($.dom, h, u));
  }
  let S = i.docView.nearest(g);
  if (!S)
    return null;
  if (S.isWidget && ((r = S.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let $ = S.dom.getBoundingClientRect();
    return e.y < $.top || e.y <= $.bottom && e.x <= ($.left + $.right) / 2 ? S.posAtStart : S.posAtEnd;
  } else
    return S.localPosFromDOM(g, k) + S.posAtStart;
}
function Th(i, e, t, n, s) {
  let r = Math.round((n - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight, a = Math.floor((s - t.top - (i.defaultLineHeight - l) * 0.5) / l);
    r += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + Ql(o, r, i.state.tabSize);
}
function wy(i, e, t) {
  let n;
  if (i.nodeType != 3 || e != (n = i.nodeValue.length))
    return !1;
  for (let s = i.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return !1;
  return Di(i, n - 1, n).getBoundingClientRect().left > t;
}
function Qy(i, e, t) {
  if (e != 0)
    return !1;
  for (let s = i; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s)
      return !1;
    if (r.classList.contains("cm-line"))
      break;
    s = r;
  }
  let n = i.nodeType == 1 ? i.getBoundingClientRect() : Di(i, 0, Math.max(i.nodeValue.length, 1)).getBoundingClientRect();
  return t - n.left > 5;
}
function jl(i, e) {
  let t = i.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let n of t.type)
      if (n.to > e || n.to == e && (n.to == t.to || n.type == Ge.Text))
        return n;
  }
  return t;
}
function Py(i, e, t, n) {
  let s = jl(i, e.head), r = !n || s.type != Ge.Text || !(i.lineWrapping || s.widgetLineBreaks) ? null : i.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = i.dom.getBoundingClientRect(), l = i.textDirectionAt(s.from), a = i.posAtCoords({
      x: t == (l == Se.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return E.cursor(a, t ? -1 : 1);
  }
  return E.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function Ah(i, e, t, n) {
  let s = i.state.doc.lineAt(e.head), r = i.bidiSpans(s), o = i.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let c = uy(s, r, o, l, t), h = ep;
    if (!c) {
      if (s.number == (t ? i.state.doc.lines : 1))
        return l;
      h = `
`, s = i.state.doc.line(s.number + (t ? 1 : -1)), r = i.bidiSpans(s), c = i.visualLineSide(s, !t);
    }
    if (a) {
      if (!a(h))
        return l;
    } else {
      if (!n)
        return c;
      a = n(h);
    }
    l = c;
  }
}
function $y(i, e, t) {
  let n = i.state.charCategorizer(e), s = n(t);
  return (r) => {
    let o = n(r);
    return s == xe.Space && (s = o), s == o;
  };
}
function Cy(i, e, t, n) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? i.state.doc.length : 0))
    return E.cursor(s, e.assoc);
  let o = e.goalColumn, l, a = i.contentDOM.getBoundingClientRect(), c = i.coordsAtPos(s, e.assoc || -1), h = i.documentTop;
  if (c)
    o == null && (o = c.left - a.left), l = r < 0 ? c.top : c.bottom;
  else {
    let d = i.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + h;
  }
  let u = a.left + o, f = n ?? i.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (f + d) * r, O = gp(i, { x: u, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? O < s : O > s)) {
      let m = i.docView.coordsForChar(O), g = !m || p < m.top ? -1 : 1;
      return E.cursor(O, g, void 0, o);
    }
  }
}
function ar(i, e, t) {
  for (; ; ) {
    let n = 0;
    for (let s of i)
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = n || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, n = a;
        }
      });
    if (!n)
      return e;
  }
}
function Eo(i, e, t) {
  let n = ar(i.state.facet(Ya).map((s) => s(i)), t.from, e.head > t.from ? -1 : 1);
  return n == t.from ? t : E.cursor(n, n < t.from ? 1 : -1);
}
const jn = "￿";
class Ty {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(se.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += jn;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let n = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(n, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == t)
        break;
      let l = Oe.get(s), a = Oe.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : wr(s)) || wr(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
    }
    return this.findPointBefore(n, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let n of this.points)
      n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
    for (let n = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, n), o = this.lineSeparator.length) : (l = s.exec(t)) && (r = l.index, o = l[0].length), this.append(t.slice(n, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      n = r + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = Oe.get(e), n = t && t.overrideDOMText;
    if (n != null) {
      this.findPointInside(e, n.length);
      for (let s = n.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let n of this.points)
      n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let n of this.points)
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (Ay(e, n.node, n.offset) ? t : 0));
  }
}
function Ay(i, e, t) {
  for (; ; ) {
    if (!e || t < jt(e))
      return !1;
    if (e == i)
      return !0;
    t = Xi(e) + 1, e = e.parentNode;
  }
}
class Zh {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Zy {
  constructor(e, t, n, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, n, 0))) {
      let l = r || o ? [] : Ry(e), a = new Ty(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Vy(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !Cl(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Cl(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), h = e.viewport;
      if ((I.ios || I.chrome) && e.state.selection.main.empty && a != c && (h.from > 0 || h.to < e.state.doc.length)) {
        let u = Math.min(a, c), f = Math.max(a, c), d = h.from - u, p = h.to - f;
        (d == 0 || d == 1 || u == 0) && (p == 0 || p == -1 || f == e.state.doc.length) && (a = 0, c = e.state.doc.length);
      }
      this.newSel = E.single(c, a);
    }
  }
}
function yp(i, e) {
  let t, { newSel: n } = e, s = i.state.selection.main, r = i.inputState.lastKeyTime > Date.now() - 100 ? i.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = s.from, c = null;
    (r === 8 || I.android && e.text.length < l - o) && (a = s.to, c = "end");
    let h = My(i.state.doc.sliceString(o, l, jn), e.text, a - o, c);
    h && (I.chrome && r == 13 && h.toB == h.from + 2 && e.text.slice(h.from, h.toB) == jn + jn && h.toB--, t = {
      from: o + h.from,
      to: o + h.toA,
      insert: ce.of(e.text.slice(h.from, h.toB).split(jn))
    });
  } else n && (!i.hasFocus && i.state.facet(oi) || n.main.eq(s)) && (n = null);
  if (!t && !n)
    return !1;
  if (!t && e.typeOver && !s.empty && n && n.main.empty ? t = { from: s.from, to: s.to, insert: i.state.doc.slice(s.from, s.to) } : t && t.from >= s.from && t.to <= s.to && (t.from != s.from || t.to != s.to) && s.to - s.from - (t.to - t.from) <= 4 ? t = {
    from: s.from,
    to: s.to,
    insert: i.state.doc.slice(s.from, t.from).append(t.insert).append(i.state.doc.slice(t.to, s.to))
  } : (I.mac || I.android) && t && t.from == t.to && t.from == s.head - 1 && /^\. ?$/.test(t.insert.toString()) && i.contentDOM.getAttribute("autocorrect") == "off" ? (n && t.insert.length == 2 && (n = E.single(n.main.anchor - 1, n.main.head - 1)), t = { from: s.from, to: s.to, insert: ce.of([" "]) }) : I.chrome && t && t.from == t.to && t.from == s.head && t.insert.toString() == `
 ` && i.lineWrapping && (n && (n = E.single(n.main.anchor - 1, n.main.head - 1)), t = { from: s.from, to: s.to, insert: ce.of([" "]) }), t)
    return Ia(i, t, n, r);
  if (n && !n.main.eq(s)) {
    let o = !1, l = "select";
    return i.inputState.lastSelectionTime > Date.now() - 50 && (i.inputState.lastSelectionOrigin == "select" && (o = !0), l = i.inputState.lastSelectionOrigin), i.dispatch({ selection: n, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Ia(i, e, t, n = -1) {
  if (I.ios && i.inputState.flushIOSKey(e))
    return !0;
  let s = i.state.selection.main;
  if (I.android && (e.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == s.from || e.from == s.from - 1 && i.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && nn(i.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || n == 8 && e.insert.length < e.to - e.from && e.to > s.head) && nn(i.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && nn(i.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o, l = () => o || (o = _y(i, e, t));
  return i.state.facet(rp).some((a) => a(i, e.from, e.to, r, l)) || i.dispatch(l()), !0;
}
function _y(i, e, t) {
  let n, s = i.state, r = s.selection.main;
  if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && i.inputState.composing < 0) {
    let l = r.from < e.from ? s.sliceDoc(r.from, e.from) : "", a = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    n = s.replaceSelection(i.state.toText(l + e.insert.sliceString(0, void 0, i.state.lineBreak) + a));
  } else {
    let l = s.changes(e), a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (s.selection.ranges.length > 1 && i.inputState.composing >= 0 && e.to <= r.to && e.to >= r.to - 10) {
      let c = i.state.sliceDoc(e.from, e.to), h, u = t && mp(i, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        h = { from: u.from, to: u.to - p };
      } else
        h = i.state.doc.lineAt(r.head);
      let f = r.to - e.to, d = r.to - r.from;
      n = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let O = p.to - f, m = O - c.length;
        if (p.to - p.from != d || i.state.sliceDoc(m, O) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p.to >= h.from && p.from <= h.to)
          return { range: p };
        let g = s.changes({ from: m, to: O, insert: e.insert }), k = p.to - r.to;
        return {
          changes: g,
          range: a ? E.range(Math.max(0, a.anchor + k), Math.max(0, a.head + k)) : p.map(g)
        };
      });
    } else
      n = {
        changes: l,
        selection: a && s.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (i.composing || i.inputState.compositionPendingChange && i.inputState.compositionEndedAt > Date.now() - 50) && (i.inputState.compositionPendingChange = !1, o += ".compose", i.inputState.compositionFirstChange && (o += ".start", i.inputState.compositionFirstChange = !1)), s.update(n, { userEvent: o, scrollIntoView: !0 });
}
function My(i, e, t, n) {
  let s = Math.min(i.length, e.length), r = 0;
  for (; r < s && i.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == s && i.length == e.length)
    return null;
  let o = i.length, l = e.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (n == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && i.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function Ry(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: n, focusNode: s, focusOffset: r } = i.observer.selectionRange;
  return t && (e.push(new Zh(t, n)), (s != t || r != n) && e.push(new Zh(s, r))), e;
}
function Vy(i, e) {
  if (i.length == 0)
    return null;
  let t = i[0].pos, n = i.length == 2 ? i[1].pos : t;
  return t > -1 && n > -1 ? E.single(t + e, n + e) : null;
}
class Ey {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, I.safari && e.contentDOM.addEventListener("input", () => null), I.gecko && Ky(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Yy(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || this.runHandlers(e.type, e);
  }
  runHandlers(e, t) {
    let n = this.handlers[e];
    if (n) {
      for (let s of n.observers)
        s(this.view, t);
      for (let s of n.handlers) {
        if (t.defaultPrevented)
          break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Ly(e), n = this.handlers, s = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, l = n[r];
        l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in n)
      r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && bp.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), I.android && I.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return I.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = vp.find((n) => n.keyCode == e.keyCode)) && !e.ctrlKey || Xy.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, nn(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : I.safari && !I.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function _h(i, e) {
  return (t, n) => {
    try {
      return e.call(i, n, t);
    } catch (s) {
      Ue(t.state, s);
    }
  };
}
function Ly(i) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(n) {
    return e[n] || (e[n] = { observers: [], handlers: [] });
  }
  for (let n of i) {
    let s = n.spec;
    if (s && s.domEventHandlers)
      for (let r in s.domEventHandlers) {
        let o = s.domEventHandlers[r];
        o && t(r).handlers.push(_h(n.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && t(r).observers.push(_h(n.value, o));
      }
  }
  for (let n in kt)
    t(n).handlers.push(kt[n]);
  for (let n in pt)
    t(n).observers.push(pt[n]);
  return e;
}
const vp = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Xy = "dthko", bp = [16, 17, 18, 20, 91, 92, 224, 225], Ls = 6;
function Xs(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function Dy(i, e) {
  return Math.max(Math.abs(i.clientX - e.clientX), Math.abs(i.clientY - e.clientY));
}
class qy {
  constructor(e, t, n, s) {
    this.view = e, this.startEvent = t, this.style = n, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = G1(e.contentDOM), this.atoms = e.state.facet(Ya).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(se.allowMultipleSelections) && jy(e, t), this.dragging = By(e, t) && kp(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Dy(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, n = 0, s = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Op(this.view);
    e.clientX - a.left <= s + Ls ? t = -Xs(s - e.clientX) : e.clientX + a.right >= o - Ls && (t = Xs(e.clientX - o)), e.clientY - a.top <= r + Ls ? n = -Xs(r - e.clientY) : e.clientY + a.bottom >= l - Ls && (n = Xs(e.clientY - l)), this.setScrollSpeed(t, n);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let n = 0; n < e.ranges.length; n++) {
      let s = e.ranges[n], r = null;
      if (s.empty) {
        let o = ar(this.atoms, s.from, 0);
        o != s.from && (r = E.cursor(o, -1));
      } else {
        let o = ar(this.atoms, s.from, -1), l = ar(this.atoms, s.to, 1);
        (o != s.from || l != s.to) && (r = E.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), t[n] = r);
    }
    return t ? E.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, n = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !n.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: n,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function jy(i, e) {
  let t = i.state.facet(tp);
  return t.length ? t[0](e) : I.mac ? e.metaKey : e.ctrlKey;
}
function zy(i, e) {
  let t = i.state.facet(ip);
  return t.length ? t[0](e) : I.mac ? !e.altKey : !e.ctrlKey;
}
function By(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty)
    return !1;
  let n = ss(i.root);
  if (!n || n.rangeCount == 0)
    return !0;
  let s = n.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Yy(i, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, n; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (n = Oe.get(t)) && n.ignoreEvent(e))
      return !1;
  return !0;
}
const kt = /* @__PURE__ */ Object.create(null), pt = /* @__PURE__ */ Object.create(null), Sp = I.ie && I.ie_version < 15 || I.ios && I.webkit_version < 604;
function Iy(i) {
  let e = i.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    i.focus(), t.remove(), xp(i, t.value);
  }, 50);
}
function so(i, e, t) {
  for (let n of i.facet(e))
    t = n(t, i);
  return t;
}
function xp(i, e) {
  e = so(i.state, ja, e);
  let { state: t } = i, n, s = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (zl != null && t.selection.ranges.every((a) => a.empty) && zl == r.toString()) {
    let a = -1;
    n = t.changeByRange((c) => {
      let h = t.doc.lineAt(c.from);
      if (h.from == a)
        return { range: c };
      a = h.from;
      let u = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: u },
        range: E.cursor(c.from + u.length)
      };
    });
  } else o ? n = t.changeByRange((a) => {
    let c = r.line(s++);
    return {
      changes: { from: a.from, to: a.to, insert: c.text },
      range: E.cursor(a.from + c.length)
    };
  }) : n = t.replaceSelection(r);
  i.dispatch(n, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
pt.scroll = (i) => {
  i.inputState.lastScrollTop = i.scrollDOM.scrollTop, i.inputState.lastScrollLeft = i.scrollDOM.scrollLeft;
};
kt.keydown = (i, e) => (i.inputState.setSelectionOrigin("select"), e.keyCode == 27 && i.inputState.tabFocusMode != 0 && (i.inputState.tabFocusMode = Date.now() + 2e3), !1);
pt.touchstart = (i, e) => {
  i.inputState.lastTouchTime = Date.now(), i.inputState.setSelectionOrigin("select.pointer");
};
pt.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
kt.mousedown = (i, e) => {
  if (i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let n of i.state.facet(np))
    if (t = n(i, e), t)
      break;
  if (!t && e.button == 0 && (t = Uy(i, e)), t) {
    let n = !i.hasFocus;
    i.inputState.startMouseSelection(new qy(i, e, t, n)), n && i.observer.ignore(() => {
      Ed(i.contentDOM);
      let r = i.root.activeElement;
      r && !r.contains(i.contentDOM) && r.blur();
    });
    let s = i.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === !1;
  }
  return !1;
};
function Mh(i, e, t, n) {
  if (n == 1)
    return E.cursor(e, t);
  if (n == 2)
    return Sy(i.state, e, t);
  {
    let s = Ce.find(i.docView, e), r = i.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < i.state.doc.length && l == r.to && l++, E.range(o, l);
  }
}
let Rh = (i, e, t) => e >= t.top && e <= t.bottom && i >= t.left && i <= t.right;
function Ny(i, e, t, n) {
  let s = Ce.find(i.docView, e);
  if (!s)
    return 1;
  let r = e - s.posAtStart;
  if (r == 0)
    return 1;
  if (r == s.length)
    return -1;
  let o = s.coordsAt(r, -1);
  if (o && Rh(t, n, o))
    return -1;
  let l = s.coordsAt(r, 1);
  return l && Rh(t, n, l) ? 1 : o && o.bottom >= n ? -1 : 1;
}
function Vh(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: Ny(i, t, e.clientX, e.clientY) };
}
const Wy = I.ie && I.ie_version <= 11;
let Eh = null, Lh = 0, Xh = 0;
function kp(i) {
  if (!Wy)
    return i.detail;
  let e = Eh, t = Xh;
  return Eh = i, Xh = Date.now(), Lh = !e || t > Date.now() - 400 && Math.abs(e.clientX - i.clientX) < 2 && Math.abs(e.clientY - i.clientY) < 2 ? (Lh + 1) % 3 : 1;
}
function Uy(i, e) {
  let t = Vh(i, e), n = kp(e), s = i.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
    },
    get(r, o, l) {
      let a = Vh(i, r), c, h = Mh(i, a.pos, a.bias, n);
      if (t.pos != a.pos && !o) {
        let u = Mh(i, t.pos, t.bias, n), f = Math.min(u.from, h.from), d = Math.max(u.to, h.to);
        h = f < h.from ? E.range(f, d) : E.range(d, f);
      }
      return o ? s.replaceRange(s.main.extend(h.from, h.to)) : l && n == 1 && s.ranges.length > 1 && (c = Gy(s, a.pos)) ? c : l ? s.addRange(h) : E.create([h]);
    }
  };
}
function Gy(i, e) {
  for (let t = 0; t < i.ranges.length; t++) {
    let { from: n, to: s } = i.ranges[t];
    if (n <= e && s >= e)
      return E.create(i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)), i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0));
  }
  return null;
}
kt.dragstart = (i, e) => {
  let { selection: { main: t } } = i.state;
  if (e.target.draggable) {
    let s = i.docView.nearest(e.target);
    if (s && s.isWidget) {
      let r = s.posAtStart, o = r + s.length;
      (r >= t.to || o <= t.from) && (t = E.range(r, o));
    }
  }
  let { inputState: n } = i;
  return n.mouseSelection && (n.mouseSelection.dragging = !0), n.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", so(i.state, za, i.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
kt.dragend = (i) => (i.inputState.draggedContent = null, !1);
function Dh(i, e, t, n) {
  if (t = so(i.state, ja, t), !t)
    return;
  let s = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = i.inputState, o = n && r && zy(i, e) ? { from: r.from, to: r.to } : null, l = { from: s, insert: t }, a = i.state.changes(o ? [o, l] : l);
  i.focus(), i.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), i.inputState.draggedContent = null;
}
kt.drop = (i, e) => {
  if (!e.dataTransfer)
    return !1;
  if (i.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let n = Array(t.length), s = 0, r = () => {
      ++s == t.length && Dh(i, e, n.filter((o) => o != null).join(i.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (n[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let n = e.dataTransfer.getData("Text");
    if (n)
      return Dh(i, e, n, !0), !0;
  }
  return !1;
};
kt.paste = (i, e) => {
  if (i.state.readOnly)
    return !0;
  i.observer.flush();
  let t = Sp ? null : e.clipboardData;
  return t ? (xp(i, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (Iy(i), !1);
};
function Fy(i, e) {
  let t = i.dom.parentNode;
  if (!t)
    return;
  let n = t.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = e, n.focus(), n.selectionEnd = e.length, n.selectionStart = 0, setTimeout(() => {
    n.remove(), i.focus();
  }, 50);
}
function Hy(i) {
  let e = [], t = [], n = !1;
  for (let s of i.selection.ranges)
    s.empty || (e.push(i.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of i.selection.ranges) {
      let o = i.doc.lineAt(r);
      o.number > s && (e.push(o.text), t.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })), s = o.number;
    }
    n = !0;
  }
  return { text: so(i, za, e.join(i.lineBreak)), ranges: t, linewise: n };
}
let zl = null;
kt.copy = kt.cut = (i, e) => {
  let { text: t, ranges: n, linewise: s } = Hy(i.state);
  if (!t && !s)
    return !1;
  zl = s ? t : null, e.type == "cut" && !i.state.readOnly && i.dispatch({
    changes: n,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = Sp ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (Fy(i, t), !1);
};
const wp = /* @__PURE__ */ Jt.define();
function Qp(i, e) {
  let t = [];
  for (let n of i.facet(op)) {
    let s = n(i, e);
    s && t.push(s);
  }
  return t ? i.update({ effects: t, annotations: wp.of(!0) }) : null;
}
function Pp(i) {
  setTimeout(() => {
    let e = i.hasFocus;
    if (e != i.inputState.notifiedFocused) {
      let t = Qp(i.state, e);
      t ? i.dispatch(t) : i.update([]);
    }
  }, 10);
}
pt.focus = (i) => {
  i.inputState.lastFocusTime = Date.now(), !i.scrollDOM.scrollTop && (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) && (i.scrollDOM.scrollTop = i.inputState.lastScrollTop, i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft), Pp(i);
};
pt.blur = (i) => {
  i.observer.clearSelectionRange(), Pp(i);
};
pt.compositionstart = pt.compositionupdate = (i) => {
  i.observer.editContext || (i.inputState.compositionFirstChange == null && (i.inputState.compositionFirstChange = !0), i.inputState.composing < 0 && (i.inputState.composing = 0));
};
pt.compositionend = (i) => {
  i.observer.editContext || (i.inputState.composing = -1, i.inputState.compositionEndedAt = Date.now(), i.inputState.compositionPendingKey = !0, i.inputState.compositionPendingChange = i.observer.pendingRecords().length > 0, i.inputState.compositionFirstChange = null, I.chrome && I.android ? i.observer.flushSoon() : i.inputState.compositionPendingChange ? Promise.resolve().then(() => i.observer.flush()) : setTimeout(() => {
    i.inputState.composing < 0 && i.docView.hasComposition && i.update([]);
  }, 50));
};
pt.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
kt.beforeinput = (i, e) => {
  var t, n;
  if (e.inputType == "insertReplacementText" && i.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = i.posAtDOM(l.startContainer, l.startOffset), c = i.posAtDOM(l.endContainer, l.endOffset);
      return Ia(i, { from: a, to: c, insert: i.state.toText(r) }, null), !0;
    }
  }
  let s;
  if (I.chrome && I.android && (s = vp.find((r) => r.inputType == e.inputType)) && (i.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && i.hasFocus && (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return I.ios && e.inputType == "deleteContentForward" && i.observer.flushSoon(), I.safari && e.inputType == "insertText" && i.inputState.composing >= 0 && setTimeout(() => pt.compositionend(i, e), 20), !1;
};
const qh = /* @__PURE__ */ new Set();
function Ky(i) {
  qh.has(i) || (qh.add(i), i.addEventListener("copy", () => {
  }), i.addEventListener("cut", () => {
  }));
}
const jh = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let dn = !1;
function zh() {
  dn = !1;
}
class Jy {
  constructor(e) {
    this.lineWrapping = e, this.doc = ce.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (n += Math.max(0, Math.ceil((t - e - n * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * n;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return jh.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      s < 0 ? n++ : this.heightSamples[Math.floor(s * 10)] || (t = !0, this.heightSamples[Math.floor(s * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, n, s, r, o) {
    let l = jh.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = n, this.textHeight = s, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let c = 0; c < o.length; c++) {
        let h = o[c];
        h < 0 ? c++ : this.heightSamples[Math.floor(h * 10)] = !0;
      }
    }
    return a;
  }
}
class ev {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Mt {
  /**
  @internal
  */
  constructor(e, t, n, s, r) {
    this.from = e, this.length = t, this.top = n, this.height = s, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? Ge.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof mi ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Mt(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var be = /* @__PURE__ */ function(i) {
  return i[i.ByPos = 0] = "ByPos", i[i.ByHeight = 1] = "ByHeight", i[i.ByPosNoHeight = 2] = "ByPosNoHeight", i;
}(be || (be = {}));
const cr = 1e-3;
class Fe {
  constructor(e, t, n = 2) {
    this.length = e, this.height = t, this.flags = n;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > cr && (dn = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, n) {
    return Fe.of(n);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, n, s) {
    let r = this, o = n.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: c, fromB: h, toB: u } = s[l], f = r.lineAt(a, be.ByPosNoHeight, n.setDoc(t), 0, 0), d = f.to >= c ? f : r.lineAt(c, be.ByPosNoHeight, n, 0, 0);
      for (u += d.to - c, c = d.to; l > 0 && f.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, h = s[l - 1].fromB, l--, a < f.from && (f = r.lineAt(a, be.ByPosNoHeight, n, 0, 0));
      h += f.from - a, a = f.from;
      let p = Na.build(n.setDoc(o), e, h, u);
      r = $r(r, r.replace(a, c, p));
    }
    return r.updateHeight(n, 0);
  }
  static empty() {
    return new at(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, n = e.length, s = 0, r = 0;
    for (; ; )
      if (t == n)
        if (s > r * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), n += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
          let l = e[n];
          l.break ? e.splice(n, 1, l.left, null, l.right) : e.splice(n, 1, l.left, l.right), n += 2 + l.break, r -= l.size;
        } else
          break;
      else if (s < r) {
        let l = e[t++];
        l && (s += l.size);
      } else {
        let l = e[--n];
        l && (r += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, n++), new tv(Fe.of(e.slice(0, t)), o, Fe.of(e.slice(n)));
  }
}
function $r(i, e) {
  return i == e ? i : (i.constructor != e.constructor && (dn = !0), e);
}
Fe.prototype.size = 1;
class $p extends Fe {
  constructor(e, t, n) {
    super(e, t), this.deco = n;
  }
  blockAt(e, t, n, s) {
    return new Mt(s, this.length, n, this.height, this.deco || 0);
  }
  lineAt(e, t, n, s, r) {
    return this.blockAt(0, n, s, r);
  }
  forEachLine(e, t, n, s, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, n, s, r));
  }
  updateHeight(e, t = 0, n = !1, s) {
    return s && s.from <= t && s.more && this.setHeight(s.heights[s.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class at extends $p {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, n, s) {
    return new Mt(s, this.length, n, this.height, this.breaks);
  }
  replace(e, t, n) {
    let s = n[0];
    return n.length == 1 && (s instanceof at || s instanceof Xe && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof Xe ? s = new at(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : Fe.of(n);
  }
  updateHeight(e, t = 0, n = !1, s) {
    return s && s.from <= t && s.more ? this.setHeight(s.heights[s.index++]) : (n || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Xe extends Fe {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let n = e.doc.lineAt(t).number, s = e.doc.lineAt(t + this.length).number, r = s - n + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: n, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, t, n, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let c = s + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - n) / this.height)) * this.length)), h = t.doc.lineAt(c), u = l + h.length * a, f = Math.max(n, e - u / 2);
      return new Mt(h.from, h.length, f, u, 0);
    } else {
      let c = Math.max(0, Math.min(o - r, Math.floor((e - n) / l))), { from: h, length: u } = t.doc.line(r + c);
      return new Mt(h, u, n + l * c, l, 0);
    }
  }
  lineAt(e, t, n, s, r) {
    if (t == be.ByHeight)
      return this.blockAt(e, n, s, r);
    if (t == be.ByPosNoHeight) {
      let { from: d, to: p } = n.doc.lineAt(e);
      return new Mt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(n, r), c = n.doc.lineAt(e), h = l + c.length * a, u = c.number - o, f = s + l * u + a * (c.from - r - u);
    return new Mt(c.from, c.length, Math.max(s, Math.min(f, s + this.height - h)), h, 0);
  }
  forEachLine(e, t, n, s, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: c } = this.heightMetrics(n, r);
    for (let h = e, u = s; h <= t; ) {
      let f = n.doc.lineAt(h);
      if (h == e) {
        let p = f.number - l;
        u += a * p + c * (e - r - p);
      }
      let d = a + c * f.length;
      o(new Mt(f.from, f.length, u, d, 0)), u += d, h = f.to + 1;
    }
  }
  replace(e, t, n) {
    let s = this.length - t;
    if (s > 0) {
      let r = n[n.length - 1];
      r instanceof Xe ? n[n.length - 1] = new Xe(r.length + s) : n.push(null, new Xe(s - 1));
    }
    if (e > 0) {
      let r = n[0];
      r instanceof Xe ? n[0] = new Xe(e + r.length) : n.unshift(new Xe(e - 1), null);
    }
    return Fe.of(n);
  }
  decomposeLeft(e, t) {
    t.push(new Xe(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Xe(this.length - e - 1));
  }
  updateHeight(e, t = 0, n = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [], l = Math.max(t, s.from), a = -1;
      for (s.from > t && o.push(new Xe(s.from - t - 1).updateHeight(e, t)); l <= r && s.more; ) {
        let h = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let u = s.heights[s.index++];
        a == -1 ? a = u : Math.abs(u - a) >= cr && (a = -2);
        let f = new at(h, u);
        f.outdated = !1, o.push(f), l += h + 1;
      }
      l <= r && o.push(null, new Xe(r - l).updateHeight(e, l));
      let c = Fe.of(o);
      return (a < 0 || Math.abs(c.height - this.height) >= cr || Math.abs(a - this.heightMetrics(e, t).perLine) >= cr) && (dn = !0), $r(this, c);
    } else (n || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class tv extends Fe {
  constructor(e, t, n) {
    super(e.length + t + n.length, e.height + n.height, t | (e.outdated || n.outdated ? 2 : 0)), this.left = e, this.right = n, this.size = e.size + n.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, n, s) {
    let r = n + this.left.height;
    return e < r ? this.left.blockAt(e, t, n, s) : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, n, s, r) {
    let o = s + this.left.height, l = r + this.left.length + this.break, a = t == be.ByHeight ? e < o : e < l, c = a ? this.left.lineAt(e, t, n, s, r) : this.right.lineAt(e, t, n, o, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let h = t == be.ByPosNoHeight ? be.ByPosNoHeight : be.ByPos;
    return a ? c.join(this.right.lineAt(l, h, n, o, l)) : this.left.lineAt(l, h, n, s, r).join(c);
  }
  forEachLine(e, t, n, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, n, s, r, o), t >= a && this.right.forEachLine(e, t, n, l, a, o);
    else {
      let c = this.lineAt(a, be.ByPos, n, s, r);
      e < c.from && this.left.forEachLine(e, c.from - 1, n, s, r, o), c.to >= e && c.from <= t && o(c), t > c.to && this.right.forEachLine(c.to + 1, t, n, l, a, o);
    }
  }
  replace(e, t, n) {
    let s = this.left.length + this.break;
    if (t < s)
      return this.balanced(this.left.replace(e, t, n), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, n));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of n)
      r.push(l);
    if (e > 0 && Bh(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), Bh(r, l);
    }
    return Fe.of(r);
  }
  decomposeLeft(e, t) {
    let n = this.left.length;
    if (e <= n)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (n++, e >= n && t.push(null)), e > n && this.right.decomposeLeft(e - n, t);
  }
  decomposeRight(e, t) {
    let n = this.left.length, s = n + this.break;
    if (e >= s)
      return this.right.decomposeRight(e - s, t);
    e < n && this.left.decomposeRight(e, t), this.break && e < s && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? Fe.of(this.break ? [e, null, t] : [e, t]) : (this.left = $r(this.left, e), this.right = $r(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, n = !1, s) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return s && s.from <= t + r.length && s.more ? a = r = r.updateHeight(e, t, n, s) : r.updateHeight(e, t, n), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(e, l, n, s) : o.updateHeight(e, l, n), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Bh(i, e) {
  let t, n;
  i[e] == null && (t = i[e - 1]) instanceof Xe && (n = i[e + 1]) instanceof Xe && i.splice(e - 1, 3, new Xe(t.length + 1 + n.length));
}
const iv = 5;
class Na {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof at ? s.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new at(n - this.pos, -1)), this.writtenTo = n, t > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let s = n.widget ? n.widget.estimatedHeight : 0, r = n.widget ? n.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      n.block ? this.addBlock(new $p(o, s, n)) : (o || r || s >= iv) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new at(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let n = new Xe(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof at)
      return e;
    let t = new at(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, n) {
    let s = this.ensureLine();
    s.length += n, s.collapsed += n, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += t, this.writtenTo = this.pos = this.pos + n;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof at) && !this.isCovered ? this.nodes.push(new at(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let s of this.nodes)
      s instanceof at && s.updateHeight(this.oracle, n), n += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, n, s) {
    let r = new Na(n, e);
    return ae.spans(t, n, s, r, 0), r.finish(n);
  }
}
function nv(i, e, t) {
  let n = new sv();
  return ae.compare(i, e, t, n, 0), n.changes;
}
class sv {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, n, s) {
    (e < t || n && n.heightRelevant || s && s.heightRelevant) && Rl(e, t, this.changes, 5);
  }
}
function rv(i, e) {
  let t = i.getBoundingClientRect(), n = i.ownerDocument, s = n.defaultView || window, r = Math.max(0, t.left), o = Math.min(s.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(s.innerHeight, t.bottom);
  for (let c = i.parentNode; c && c != n.body; )
    if (c.nodeType == 1) {
      let h = c, u = window.getComputedStyle(h);
      if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && u.overflow != "visible") {
        let f = h.getBoundingClientRect();
        r = Math.max(r, f.left), o = Math.min(o, f.right), l = Math.max(l, f.top), a = Math.min(c == i.parentNode ? s.innerHeight : a, f.bottom);
      }
      c = u.position == "absolute" || u.position == "fixed" ? h.offsetParent : h.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function ov(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Lo {
  constructor(e, t, n, s) {
    this.from = e, this.to = t, this.size = n, this.displaySize = s;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n], r = t[n];
      if (s.from != r.from || s.to != r.to || s.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return U.replace({
      widget: new lv(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class lv extends Bt {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Yh {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Ih, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Se.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(Ba).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new Jy(t), this.stateDeco = e.facet(rs).filter((n) => typeof n != "function"), this.heightMap = Fe.empty().applyChanges(this.stateDeco, ce.empty, this.heightOracle.setDoc(e.doc), [new dt(0, 0, 0, e.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = U.set(this.lineGaps.map((n) => n.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let s = n ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new Ds(r, o));
      }
    }
    return this.viewports = e.sort((n, s) => n.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Ih : new Wa(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(zn(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(rs).filter((h) => typeof h != "function");
    let s = e.changedRanges, r = dt.extendWithRanges(s, nv(n, this.stateDeco, e ? e.changes : Me.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    zh(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || dn) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let c = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(ap) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, n = window.getComputedStyle(t), s = this.heightOracle, r = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? Se.RTL : Se.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let c = 0, h = 0;
    if (l.width && l.height) {
      let { scaleX: $, scaleY: C } = Vd(t, l);
      ($ > 5e-3 && Math.abs(this.scaleX - $) > 5e-3 || C > 5e-3 && Math.abs(this.scaleY - C) > 5e-3) && (this.scaleX = $, this.scaleY = C, c |= 8, o = a = !0);
    }
    let u = (parseInt(n.paddingTop) || 0) * this.scaleY, f = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != u || this.paddingBottom != f) && (this.paddingTop = u, this.paddingBottom = f, c |= 10), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 8);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Xd(e.scrollDOM);
    let p = (this.printing ? ov : rv)(t, this.paddingTop), O = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let g = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (g != this.inView && (this.inView = g, g && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let k = l.width;
    if ((this.contentDOMWidth != k || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 8), a) {
      let $ = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights($) && (o = !0), o || s.lineWrapping && Math.abs(k - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: C, charWidth: M, textHeight: P } = e.docView.measureTextSize();
        o = C > 0 && s.refresh(r, C, M, P, k / M, $), o && (e.docView.minWidth = 0, c |= 8);
      }
      O > 0 && m > 0 ? h = Math.max(O, m) : O < 0 && m < 0 && (h = Math.min(O, m)), zh();
      for (let C of this.viewports) {
        let M = C.from == this.viewport.from ? $ : e.docView.measureVisibleLineHeights(C);
        this.heightMap = (o ? Fe.empty().applyChanges(this.stateDeco, ce.empty, this.heightOracle, [new dt(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new ev(C.from, M));
      }
      dn && (c |= 2);
    }
    let S = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return S && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || S) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Ds(s.lineAt(o - n * 1e3, be.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - n) * 1e3, be.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: c } = t.range;
      if (c < a.from || c > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = s.lineAt(c, be.ByPos, r, 0, 0), f;
        t.y == "center" ? f = (u.top + u.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && c < a.from ? f = u.top : f = u.bottom - h, a = new Ds(s.lineAt(f - 1e3 / 2, be.ByHeight, r, 0, 0).from, s.lineAt(f + h + 1e3 / 2, be.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new Ds(this.heightMap.lineAt(n, be.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, be.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, be.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, be.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || s <= o - Math.max(10, Math.min(
      -n,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(
      n,
      250
      /* VP.MaxCoverMargin */
    ))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let n = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) || n.push(new Lo(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
    return n;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let n = this.heightOracle.lineWrapping, s = n ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != Se.LTR && !n)
      return [];
    let l = [], a = (h, u, f, d) => {
      if (u - h < r)
        return;
      let p = this.state.selection.main, O = [p.from];
      p.empty || O.push(p.to);
      for (let g of O)
        if (g > h && g < u) {
          a(h, g - 10, f, d), a(g + 10, u, f, d);
          return;
        }
      let m = cv(e, (g) => g.from >= f.from && g.to <= f.to && Math.abs(g.from - h) < r && Math.abs(g.to - u) < r && !O.some((k) => g.from < k && g.to > k));
      if (!m) {
        if (u < f.to && t && n && t.visibleRanges.some((S) => S.from <= u && S.to >= u)) {
          let S = t.moveToLineBoundary(E.cursor(u), !1, !0).head;
          S > h && (u = S);
        }
        let g = this.gapSize(f, h, u, d), k = n || g < 2e6 ? g : 2e6;
        m = new Lo(h, u, g, k);
      }
      l.push(m);
    }, c = (h) => {
      if (h.length < o || h.type != Ge.Text)
        return;
      let u = av(h.from, h.to, this.stateDeco);
      if (u.total < o)
        return;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (n) {
        let O = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, g;
        if (f != null) {
          let k = js(u, f), S = ((this.visibleBottom - this.visibleTop) / 2 + O) / h.height;
          m = k - S, g = k + S;
        } else
          m = (this.visibleTop - h.top - O) / h.height, g = (this.visibleBottom - h.top + O) / h.height;
        d = qs(u, m), p = qs(u, g);
      } else {
        let O = u.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, g = 0;
        if (O > 2e6)
          for (let M of e)
            M.from >= h.from && M.from < h.to && M.size != M.displaySize && M.from * this.heightOracle.charWidth + g < this.pixelViewport.left && (g = M.size - M.displaySize);
        let k = this.pixelViewport.left + g, S = this.pixelViewport.right + g, $, C;
        if (f != null) {
          let M = js(u, f), P = ((S - k) / 2 + m) / O;
          $ = M - P, C = M + P;
        } else
          $ = (k - m) / O, C = (S + m) / O;
        d = qs(u, $), p = qs(u, C);
      }
      d > h.from && a(h.from, d, h, u), p < h.to && a(p, h.to, h, u);
    };
    for (let h of this.viewportLines)
      Array.isArray(h.type) ? h.type.forEach(c) : c(h);
    return l;
  }
  gapSize(e, t, n, s) {
    let r = js(s, n) - js(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Lo.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = U.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    ae.spans(e, this.viewport.from, this.viewport.to, {
      span(s, r) {
        t.push({ from: s, to: r });
      },
      point() {
      }
    }, 20);
    let n = t.length != this.visibleRanges.length || this.visibleRanges.some((s, r) => s.from != t[r].from || s.to != t[r].to);
    return this.visibleRanges = t, n ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || zn(this.heightMap.lineAt(e, be.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || zn(this.heightMap.lineAt(this.scaler.fromDOM(e), be.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return zn(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Ds {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function av(i, e, t) {
  let n = [], s = i, r = 0;
  return ae.spans(t, i, e, {
    span() {
    },
    point(o, l) {
      o > s && (n.push({ from: s, to: o }), r += o - s), s = l;
    }
  }, 20), s < e && (n.push({ from: s, to: e }), r += e - s), { total: r, ranges: n };
}
function qs({ total: i, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let n = Math.floor(i * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s], l = o - r;
    if (n <= l)
      return r + n;
    n -= l;
  }
}
function js(i, e) {
  let t = 0;
  for (let { from: n, to: s } of i.ranges) {
    if (e <= s) {
      t += e - n;
      break;
    }
    t += s - n;
  }
  return t / i.total;
}
function cv(i, e) {
  for (let t of i)
    if (e(t))
      return t;
}
const Ih = {
  toDOM(i) {
    return i;
  },
  fromDOM(i) {
    return i;
  },
  scale: 1,
  eq(i) {
    return i == this;
  }
};
class Wa {
  constructor(e, t, n) {
    let s = 0, r = 0, o = 0;
    this.viewports = n.map(({ from: l, to: a }) => {
      let c = t.lineAt(l, be.ByPos, e, 0, 0).top, h = t.lineAt(a, be.ByPos, e, 0, 0).bottom;
      return s += h - c, { from: l, to: a, top: c, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (t.height - s);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return s + (e - n) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      n = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return n + (e - s) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      n = r.bottom, s = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof Wa ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, n) => t.from == e.viewports[n].from && t.to == e.viewports[n].to) : !1;
  }
}
function zn(i, e) {
  if (e.scale == 1)
    return i;
  let t = e.toDOM(i.top), n = e.toDOM(i.bottom);
  return new Mt(i.from, i.length, t, n - t, Array.isArray(i._content) ? i._content.map((s) => zn(s, e)) : i._content);
}
const zs = /* @__PURE__ */ Y.define({ combine: (i) => i.join(" ") }), Bl = /* @__PURE__ */ Y.define({ combine: (i) => i.indexOf(!0) > -1 }), Yl = /* @__PURE__ */ pi.newName(), Cp = /* @__PURE__ */ pi.newName(), Tp = /* @__PURE__ */ pi.newName(), Ap = { "&light": "." + Cp, "&dark": "." + Tp };
function Il(i, e, t) {
  return new pi(e, {
    finish(n) {
      return /&/.test(n) ? n.replace(/&\w*/, (s) => {
        if (s == "&")
          return i;
        if (!t || !t[s])
          throw new RangeError(`Unsupported selector: ${s}`);
        return t[s];
      }) : i + " " + n;
    }
  });
}
const hv = /* @__PURE__ */ Il("." + Yl, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#444"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Ap), uv = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Xo = I.ie && I.ie_version <= 11;
class fv {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new F1(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let n of t)
        this.queue.push(n);
      (I.ie && I.ie_version <= 11 || I.ios && e.composing) && t.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(I.chrome && I.chrome_version < 126) && (this.editContext = new pv(e), e.state.facet(oi) && (e.contentDOM.editContext = this.editContext.editContext)), Xo && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: n } = this, s = this.selectionRange;
    if (n.state.facet(oi) ? n.root.activeElement != this.dom : !lr(this.dom, s))
      return;
    let r = s.anchorNode && n.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (I.ie && I.ie_version <= 11 || I.android && I.chrome) && !n.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && Un(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ss(e.root);
    if (!t)
      return !1;
    let n = I.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && dv(this.view, t) || t;
    if (!n || this.selectionRange.eq(n))
      return !1;
    let s = lr(this.dom, n);
    return s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && K1(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let n = this.dom; n; )
      if (n.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == n ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(n), n = n.assignedSlot || n.parentNode;
      else if (n.nodeType == 11)
        n = n.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let n of this.scrollTargets)
        n.removeEventListener("scroll", this.onScroll);
      for (let n of this.scrollTargets = t)
        n.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, uv), Xo && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Xo && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var n;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && nn(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((n = this.delayedAndroidKey) === null || n === void 0) && n.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, n = -1, s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = !0), t == -1 ? { from: t, to: n } = o : (t = Math.min(o.from, t), n = Math.max(o.to, n)));
    }
    return { from: t, to: n, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: n } = this.processRecords(), s = this.selectionChanged && lr(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new Zy(this.view, e, t, n);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let n = this.view.state, s = yp(this.view, t);
    return this.view.state == n && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let n = Nh(t, e.previousSibling || e.target.previousSibling, -1), s = Nh(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? t.posAfter(n) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(oi) != e.state.facet(oi) && (e.view.contentDOM.editContext = e.state.facet(oi) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, n;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Nh(i, e, t) {
  for (; e; ) {
    let n = Oe.get(e);
    if (n && n.parent == i)
      return n;
    let s = e.parentNode;
    e = s != i.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Wh(i, e) {
  let t = e.startContainer, n = e.startOffset, s = e.endContainer, r = e.endOffset, o = i.docView.domAtPos(i.state.selection.main.anchor);
  return Un(o.node, o.offset, s, r) && ([t, n, s, r] = [s, r, t, n]), { anchorNode: t, anchorOffset: n, focusNode: s, focusOffset: r };
}
function dv(i, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(i.root)[0];
    if (s)
      return Wh(i, s);
  }
  let t = null;
  function n(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return i.contentDOM.addEventListener("beforeinput", n, !0), i.dom.ownerDocument.execCommand("indent"), i.contentDOM.removeEventListener("beforeinput", n, !0), t ? Wh(i, t) : null;
}
class pv {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (n) => {
      let { anchor: s } = e.state.selection.main, r = {
        from: this.toEditorPos(n.updateRangeStart),
        to: this.toEditorPos(n.updateRangeEnd),
        insert: ce.of(n.text.split(`
`))
      };
      r.from == this.from && s < this.from ? r.from = s : r.to == this.to && s > this.to && (r.to = s), !(r.from == r.to && !r.insert.length) && (this.pendingContextChange = r, e.state.readOnly || Ia(e, r, E.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd))), this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)));
    }, this.handlers.characterboundsupdate = (n) => {
      let s = [], r = null;
      for (let o = this.toEditorPos(n.rangeStart), l = this.toEditorPos(n.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), s.push(r);
      }
      t.updateCharacterBounds(n.rangeStart, s);
    }, this.handlers.textformatupdate = (n) => {
      let s = [];
      for (let r of n.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (o != "None" && l != "None") {
          let a = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
          s.push(U.mark({ attributes: { style: a } }).range(this.toEditorPos(r.rangeStart), this.toEditorPos(r.rangeEnd)));
        }
      }
      e.dispatch({ effects: hp.of(U.set(s)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      e.inputState.composing = -1, e.inputState.compositionFirstChange = null;
    };
    for (let n in this.handlers)
      t.addEventListener(n, this.handlers[n]);
    this.measureReq = { read: (n) => {
      this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());
      let s = ss(n.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, n = !1, s = this.pendingContextChange;
    return e.changes.iterChanges((r, o, l, a, c) => {
      if (n)
        return;
      let h = c.length - (o - r);
      if (s && o >= s.to)
        if (s.from == r && s.to == o && s.insert.eq(c)) {
          s = this.pendingContextChange = null, t += h, this.to += h;
          return;
        } else
          s = null, this.revertPending(e.state);
      if (r += t, o += t, o <= this.from)
        this.from += h, this.to += h;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + c.length > 3e4) {
          n = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), c.toString()), this.to += h;
      }
      t += h;
    }), s && !n && this.revertPending(e.state), !n;
  }
  update(e) {
    let t = this.pendingContextChange;
    !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.resetRange(e.state), this.editContext.updateText(0, this.editContext.text.length, e.state.doc.sliceString(this.from, this.to)), this.setSelection(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), s = this.toContextPos(t.head);
    (this.editContext.selectionStart != n || this.editContext.selectionEnd != s) && this.editContext.updateSelection(n, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e) {
    return e + this.from;
  }
  toContextPos(e) {
    return e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class z {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: n } = e;
    this.dispatchTransactions = e.dispatchTransactions || n && ((s) => s.forEach((r) => n(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || H1(e.parent) || document, this.viewState = new Yh(e.state || se.create(e)), e.scrollTo && e.scrollTo.is(Es) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Dn).map((s) => new Ro(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new fv(this), this.inputState = new Ey(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Qh(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof Te ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, n = !1, s, r = this.state;
    for (let f of e) {
      if (f.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = f.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((f) => f.annotation(wp)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Qp(r, o), a || (l = 1));
    let c = this.observer.delayedAndroidKey, h = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(se.phrases) != this.state.facet(se.phrases))
      return this.setState(r);
    s = Pr.create(this, r, e), s.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (u && (u = u.map(f.changes)), f.scrollIntoView) {
          let { main: d } = f.state.selection;
          u = new sn(d.empty ? d : E.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects)
          d.is(Es) && (u = d.value.clip(this.state));
      }
      this.viewState.update(s, u), this.bidiCache = Cr.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(qn) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(zs) != s.state.facet(zs) && (this.viewState.mustMeasureContent = !0), (t || n || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !s.empty)
      for (let f of this.state.facet(Dl))
        try {
          f(s);
        } catch (d) {
          Ue(this.state, d, "update listener");
        }
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !yp(this, h) && c.force && nn(this.contentDOM, c.key, c.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let n of this.plugins)
        n.destroy(this);
      this.viewState = new Yh(e), this.plugins = e.facet(Dn).map((n) => new Ro(n)), this.pluginMap.clear();
      for (let n of this.plugins)
        n.update(this);
      this.docView.destroy(), this.docView = new Qh(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Dn), n = e.state.facet(Dn);
    if (t != n) {
      let s = [];
      for (let r of n) {
        let o = t.indexOf(r);
        if (o < 0)
          s.push(new Ro(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, s.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    t != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (n) {
          Ue(this.state, n, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, n = this.scrollDOM, s = n.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Xd(n))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(s);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let c = [];
        a & 4 || ([this.measureRequests, c] = [c, this.measureRequests]);
        let h = c.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Ue(this.state, p), Uh;
          }
        }), u = Pr.create(this, this.state, []), f = !1;
        u.flags |= a, t ? t.flags |= a : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), f = this.docView.update(u), f && this.docViewUpdate());
        for (let d = 0; d < c.length; d++)
          if (h[d] != Uh)
            try {
              let p = c[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              Ue(this.state, p);
            }
        if (f && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                s = s + p, n.scrollTop = s / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(Dl))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Yl + " " + (this.state.facet(Bl) ? Tp : Cp) + " " + this.state.facet(zs);
  }
  updateAttrs() {
    let e = Gh(this, up, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(oi) ? "true" : "false",
      class: "cm-content",
      style: `${I.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), Gh(this, Ba, t);
    let n = this.observer.ignore(() => {
      let s = Ml(this.contentDOM, this.contentAttrs, t), r = Ml(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, n;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let s of n.effects)
        if (s.is(z.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(qn);
    let e = this.state.facet(z.cspNonce);
    pi.mount(this.root, this.styleModules.concat(hv).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.spec != e) && this.pluginMap.set(e, t = this.plugins.find((n) => n.spec == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, n) {
    return Eo(this, e, Ah(this, e, t, n));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Eo(this, e, Ah(this, e, t, (n) => $y(this, e.head, n)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let n = this.bidiSpans(e), s = this.textDirectionAt(e.from), r = n[t ? n.length - 1 : 0];
    return E.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, n = !0) {
    return Py(this, e, t, n);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, n) {
    return Eo(this, e, Cy(this, e, t, n));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), gp(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(e, t);
    if (!n || n.left == n.right)
      return n;
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[hi.find(r, e - s.from, -1, t)];
    return Ss(n, o.dir == Se.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(lp) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > Ov)
      return Jd(e.length);
    let t = this.textDirectionAt(e.from), n;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || Kd(r.isolates, n = wh(this, e))))
        return r.order;
    n || (n = wh(this, e));
    let s = hy(e.text, t, n);
    return this.bidiCache.push(new Cr(e.from, e.to, t, n, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || I.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Ed(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    return Es.of(new sn(typeof e == "number" ? E.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, n = this.viewState.scrollAnchorAt(e);
    return Es.of(new sn(E.cursor(n.from), "start", "start", n.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return we.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return we.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let n = pi.newName(), s = [zs.of(n), qn.of(Il(`.${n}`, e))];
    return t && t.dark && s.push(Bl.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return xi.lowest(qn.of(Il("." + Yl, e, Ap)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let n = e.querySelector(".cm-content"), s = n && Oe.get(n) || Oe.get(e);
    return ((t = s == null ? void 0 : s.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
z.styleModule = qn;
z.inputHandler = rp;
z.clipboardInputFilter = ja;
z.clipboardOutputFilter = za;
z.scrollHandler = cp;
z.focusChangeEffect = op;
z.perLineTextDirection = lp;
z.exceptionSink = sp;
z.updateListener = Dl;
z.editable = oi;
z.mouseSelectionStyle = np;
z.dragMovesSelection = ip;
z.clickAddsSelectionRange = tp;
z.decorations = rs;
z.outerDecorations = fp;
z.atomicRanges = Ya;
z.bidiIsolatedRanges = dp;
z.scrollMargins = pp;
z.darkTheme = Bl;
z.cspNonce = /* @__PURE__ */ Y.define({ combine: (i) => i.length ? i[0] : "" });
z.contentAttributes = Ba;
z.editorAttributes = up;
z.lineWrapping = /* @__PURE__ */ z.contentAttributes.of({ class: "cm-lineWrapping" });
z.announce = /* @__PURE__ */ H.define();
const Ov = 4096, Uh = {};
class Cr {
  constructor(e, t, n, s, r, o) {
    this.from = e, this.to = t, this.dir = n, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let n = [], s = e.length ? e[e.length - 1].dir : Se.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !t.touchesRange(o.from, o.to) && n.push(new Cr(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return n;
  }
}
function Gh(i, e, t) {
  for (let n = i.state.facet(e), s = n.length - 1; s >= 0; s--) {
    let r = n[s], o = typeof r == "function" ? r(i) : r;
    o && _l(o, t);
  }
  return t;
}
const mv = I.mac ? "mac" : I.windows ? "win" : I.linux ? "linux" : "key";
function gv(i, e) {
  const t = i.split(/-(?!$)/);
  let n = t[t.length - 1];
  n == "Space" && (n = " ");
  let s, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const c = t[a];
    if (/^(cmd|meta|m)$/i.test(c))
      l = !0;
    else if (/^a(lt)?$/i.test(c))
      s = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      r = !0;
    else if (/^s(hift)?$/i.test(c))
      o = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return s && (n = "Alt-" + n), r && (n = "Ctrl-" + n), l && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Bs(i, e, t) {
  return e.altKey && (i = "Alt-" + i), e.ctrlKey && (i = "Ctrl-" + i), e.metaKey && (i = "Meta-" + i), t !== !1 && e.shiftKey && (i = "Shift-" + i), i;
}
const yv = /* @__PURE__ */ xi.default(/* @__PURE__ */ z.domEventHandlers({
  keydown(i, e) {
    return _p(Zp(e.state), i, e, "editor");
  }
})), gi = /* @__PURE__ */ Y.define({ enables: yv }), Fh = /* @__PURE__ */ new WeakMap();
function Zp(i) {
  let e = i.facet(gi), t = Fh.get(e);
  return t || Fh.set(e, t = Sv(e.reduce((n, s) => n.concat(s), []))), t;
}
function vv(i, e, t) {
  return _p(Zp(i.state), e, i, t);
}
let li = null;
const bv = 4e3;
function Sv(i, e = mv) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = n[o];
    if (a == null)
      n[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, c, h) => {
    var u, f;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((g) => gv(g, e));
    for (let g = 1; g < p.length; g++) {
      let k = p.slice(0, g).join(" ");
      s(k, !0), d[k] || (d[k] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(S) => {
          let $ = li = { view: S, prefix: k, scope: o };
          return setTimeout(() => {
            li == $ && (li = null);
          }, bv), !0;
        }]
      });
    }
    let O = p.join(" ");
    s(O, !1);
    let m = d[O] || (d[O] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((f = (u = d._any) === null || u === void 0 ? void 0 : u.run) === null || f === void 0 ? void 0 : f.slice()) || []
    });
    a && m.run.push(a), c && (m.preventDefault = !0), h && (m.stopPropagation = !0);
  };
  for (let o of i) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let c of l) {
        let h = t[c] || (t[c] = /* @__PURE__ */ Object.create(null));
        h._any || (h._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: u } = o;
        for (let f in h)
          h[f].run.push((d) => u(d, Nl));
      }
    let a = o[e] || o.key;
    if (a)
      for (let c of l)
        r(c, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(c, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let Nl = null;
function _p(i, e, t, n) {
  Nl = e;
  let s = N1(e), r = De(s, 0), o = ut(r) == s.length && s != " ", l = "", a = !1, c = !1, h = !1;
  li && li.view == t && li.scope == n && (l = li.prefix + " ", bp.indexOf(e.keyCode) < 0 && (c = !0, li = null));
  let u = /* @__PURE__ */ new Set(), f = (m) => {
    if (m) {
      for (let g of m.run)
        if (!u.has(g) && (u.add(g), g(t)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), c = !0);
    }
    return !1;
  }, d = i[n], p, O;
  return d && (f(d[l + Bs(s, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(I.windows && e.ctrlKey && e.altKey) && (p = Oi[e.keyCode]) && p != s ? (f(d[l + Bs(p, e, !0)]) || e.shiftKey && (O = ns[e.keyCode]) != s && O != p && f(d[l + Bs(O, e, !1)])) && (a = !0) : o && e.shiftKey && f(d[l + Bs(s, e, !0)]) && (a = !0), !a && f(d._any) && (a = !0)), c && (a = !0), a && h && e.stopPropagation(), Nl = null, a;
}
class ws {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, n, s, r) {
    this.className = e, this.left = t, this.top = n, this.width = s, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, n) {
    if (n.empty) {
      let s = e.coordsAtPos(n.head, n.assoc || 1);
      if (!s)
        return [];
      let r = Mp(e);
      return [new ws(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return xv(e, t, n);
  }
}
function Mp(i) {
  let e = i.scrollDOM.getBoundingClientRect();
  return { left: (i.textDirection == Se.LTR ? e.left : e.right - i.scrollDOM.clientWidth * i.scaleX) - i.scrollDOM.scrollLeft * i.scaleX, top: e.top - i.scrollDOM.scrollTop * i.scaleY };
}
function Hh(i, e, t, n) {
  let s = i.coordsAtPos(e, t * 2);
  if (!s)
    return n;
  let r = i.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, l = i.posAtCoords({ x: r.left + 1, y: o }), a = i.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? n : { from: Math.max(n.from, Math.min(l, a)), to: Math.min(n.to, Math.max(l, a)) };
}
function xv(i, e, t) {
  if (t.to <= i.viewport.from || t.from >= i.viewport.to)
    return [];
  let n = Math.max(t.from, i.viewport.from), s = Math.min(t.to, i.viewport.to), r = i.textDirection == Se.LTR, o = i.contentDOM, l = o.getBoundingClientRect(), a = Mp(i), c = o.querySelector(".cm-line"), h = c && window.getComputedStyle(c), u = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), f = l.right - (h ? parseInt(h.paddingRight) : 0), d = jl(i, n), p = jl(i, s), O = d.type == Ge.Text ? d : null, m = p.type == Ge.Text ? p : null;
  if (O && (i.lineWrapping || d.widgetLineBreaks) && (O = Hh(i, n, 1, O)), m && (i.lineWrapping || p.widgetLineBreaks) && (m = Hh(i, s, -1, m)), O && m && O.from == m.from && O.to == m.to)
    return k(S(t.from, t.to, O));
  {
    let C = O ? S(t.from, null, O) : $(d, !1), M = m ? S(null, t.to, m) : $(p, !0), P = [];
    return (O || d).to < (m || p).from - (O && m ? 1 : 0) || d.widgetLineBreaks > 1 && C.bottom + i.defaultLineHeight / 2 < M.top ? P.push(g(u, C.bottom, f, M.top)) : C.bottom < M.top && i.elementAtHeight((C.bottom + M.top) / 2).type == Ge.Text && (C.bottom = M.top = (C.bottom + M.top) / 2), k(C).concat(P).concat(k(M));
  }
  function g(C, M, P, w) {
    return new ws(
      e,
      C - a.left,
      M - a.top - 0.01,
      P - C,
      w - M + 0.01
      /* C.Epsilon */
    );
  }
  function k({ top: C, bottom: M, horizontal: P }) {
    let w = [];
    for (let b = 0; b < P.length; b += 2)
      w.push(g(P[b], C, P[b + 1], M));
    return w;
  }
  function S(C, M, P) {
    let w = 1e9, b = -1e9, A = [];
    function Q(T, _, D, F, te) {
      let ne = i.coordsAtPos(T, T == P.to ? -2 : 2), W = i.coordsAtPos(D, D == P.from ? 2 : -2);
      !ne || !W || (w = Math.min(ne.top, W.top, w), b = Math.max(ne.bottom, W.bottom, b), te == Se.LTR ? A.push(r && _ ? u : ne.left, r && F ? f : W.right) : A.push(!r && F ? u : W.left, !r && _ ? f : ne.right));
    }
    let v = C ?? P.from, y = M ?? P.to;
    for (let T of i.visibleRanges)
      if (T.to > v && T.from < y)
        for (let _ = Math.max(T.from, v), D = Math.min(T.to, y); ; ) {
          let F = i.state.doc.lineAt(_);
          for (let te of i.bidiSpans(F)) {
            let ne = te.from + F.from, W = te.to + F.from;
            if (ne >= D)
              break;
            W > _ && Q(Math.max(ne, _), C == null && ne <= v, Math.min(W, D), M == null && W >= y, te.dir);
          }
          if (_ = F.to + 1, _ >= D)
            break;
        }
    return A.length == 0 && Q(v, C == null, y, M == null, i.textDirection), { top: w, bottom: b, horizontal: A };
  }
  function $(C, M) {
    let P = l.top + (M ? C.top : C.bottom);
    return { top: P, bottom: P, horizontal: [] };
  }
}
function kv(i, e) {
  return i.constructor == e.constructor && i.eq(e);
}
class wv {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(hr) != e.state.facet(hr) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, n = e.facet(hr);
    for (; t < n.length && n[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, n) => !kv(t, this.drawn[n]))) {
      let t = this.dom.firstChild, n = 0;
      for (let s of e)
        s.update && t && s.constructor && this.drawn[n].constructor && s.update(t, this.drawn[n]) ? (t = t.nextSibling, n++) : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), t = s;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const hr = /* @__PURE__ */ Y.define();
function Rp(i) {
  return [
    we.define((e) => new wv(e, i)),
    hr.of(i)
  ];
}
const Vp = !I.ios, os = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Ep(i = {}) {
  return [
    os.of(i),
    Qv,
    Pv,
    $v,
    ap.of(!0)
  ];
}
function Lp(i) {
  return i.startState.facet(os) != i.state.facet(os);
}
const Qv = /* @__PURE__ */ Rp({
  above: !0,
  markers(i) {
    let { state: e } = i, t = e.facet(os), n = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty ? !r || Vp : t.drawRangeCursor) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : E.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of ws.forRange(i, o, l))
          n.push(a);
      }
    }
    return n;
  },
  update(i, e) {
    i.transactions.some((n) => n.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Lp(i);
    return t && Kh(i.state, e), i.docChanged || i.selectionSet || t;
  },
  mount(i, e) {
    Kh(e.state, i);
  },
  class: "cm-cursorLayer"
});
function Kh(i, e) {
  e.style.animationDuration = i.facet(os).cursorBlinkRate + "ms";
}
const Pv = /* @__PURE__ */ Rp({
  above: !1,
  markers(i) {
    return i.state.selection.ranges.map((e) => e.empty ? [] : ws.forRange(i, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(i, e) {
    return i.docChanged || i.selectionSet || i.viewportChanged || Lp(i);
  },
  class: "cm-selectionLayer"
}), Wl = {
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" }
  },
  ".cm-content": {
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
};
Vp && (Wl[".cm-line"].caretColor = Wl[".cm-content"].caretColor = "transparent !important");
const $v = /* @__PURE__ */ xi.highest(/* @__PURE__ */ z.theme(Wl)), Xp = /* @__PURE__ */ H.define({
  map(i, e) {
    return i == null ? null : e.mapPos(i);
  }
}), Bn = /* @__PURE__ */ _e.define({
  create() {
    return null;
  },
  update(i, e) {
    return i != null && (i = e.changes.mapPos(i)), e.effects.reduce((t, n) => n.is(Xp) ? n.value : t, i);
  }
}), Cv = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.view = i, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(i) {
    var e;
    let t = i.state.field(Bn);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (i.startState.field(Bn) != t || i.docChanged || i.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: i } = this, e = i.state.field(Bn), t = e != null && i.coordsAtPos(e);
    if (!t)
      return null;
    let n = i.scrollDOM.getBoundingClientRect();
    return {
      left: t.left - n.left + i.scrollDOM.scrollLeft * i.scaleX,
      top: t.top - n.top + i.scrollDOM.scrollTop * i.scaleY,
      height: t.bottom - t.top
    };
  }
  drawCursor(i) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      i ? (this.cursor.style.left = i.left / e + "px", this.cursor.style.top = i.top / t + "px", this.cursor.style.height = i.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(i) {
    this.view.state.field(Bn) != i && this.view.dispatch({ effects: Xp.of(i) });
  }
}, {
  eventObservers: {
    dragover(i) {
      this.setDropPos(this.view.posAtCoords({ x: i.clientX, y: i.clientY }));
    },
    dragleave(i) {
      (i.target == this.view.contentDOM || !this.view.contentDOM.contains(i.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function Tv() {
  return [Bn, Cv];
}
function Jh(i, e, t, n, s) {
  e.lastIndex = 0;
  for (let r = i.iterRange(t, n), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = e.exec(r.value); )
        s(o + l.index, l);
}
function Av(i, e) {
  let t = i.visibleRanges;
  if (t.length == 1 && t[0].from == i.viewport.from && t[0].to == i.viewport.to)
    return t;
  let n = [];
  for (let { from: s, to: r } of t)
    s = Math.max(i.state.doc.lineAt(s).from, s - e), r = Math.min(i.state.doc.lineAt(r).to, r + e), n.length && n[n.length - 1].to >= s ? n[n.length - 1].to = r : n.push({ from: s, to: r });
  return n;
}
class Zv {
  /**
  Create a decorator.
  */
  constructor(e) {
    const { regexp: t, decoration: n, decorate: s, boundary: r, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, s)
      this.addMatch = (l, a, c, h) => s(h, c, c + l[0].length, l, a);
    else if (typeof n == "function")
      this.addMatch = (l, a, c, h) => {
        let u = n(l, a, c);
        u && h(c, c + l[0].length, u);
      };
    else if (n)
      this.addMatch = (l, a, c, h) => h(c, c + l[0].length, n);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(e) {
    let t = new di(), n = t.add.bind(t);
    for (let { from: s, to: r } of Av(e, this.maxLength))
      Jh(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, n));
    return t.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(e, t) {
    let n = 1e9, s = -1;
    return e.docChanged && e.changes.iterChanges((r, o, l, a) => {
      a > e.view.viewport.from && l < e.view.viewport.to && (n = Math.min(l, n), s = Math.max(a, s));
    }), e.viewportChanged || s - n > 1e3 ? this.createDeco(e.view) : s > -1 ? this.updateRange(e.view, t.map(e.changes), n, s) : t;
  }
  updateRange(e, t, n, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, n), l = Math.min(r.to, s);
      if (l > o) {
        let a = e.state.doc.lineAt(o), c = a.to < l ? e.state.doc.lineAt(l) : a, h = Math.max(r.from, a.from), u = Math.min(r.to, c.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              h = o;
              break;
            }
          for (; l < c.to; l++)
            if (this.boundary.test(c.text[l - c.from])) {
              u = l;
              break;
            }
        }
        let f = [], d, p = (O, m, g) => f.push(g.range(O, m));
        if (a == c)
          for (this.regexp.lastIndex = h - a.from; (d = this.regexp.exec(a.text)) && d.index < u - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          Jh(e.state.doc, this.regexp, h, u, (O, m) => this.addMatch(m, e, O, p));
        t = t.update({ filterFrom: h, filterTo: u, filter: (O, m) => O < h || m > u, add: f });
      }
    }
    return t;
  }
}
const Ul = /x/.unicode != null ? "gu" : "g", _v = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Ul), Mv = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let Do = null;
function Rv() {
  var i;
  if (Do == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Do = ((i = e.tabSize) !== null && i !== void 0 ? i : e.MozTabSize) != null;
  }
  return Do || !1;
}
const ur = /* @__PURE__ */ Y.define({
  combine(i) {
    let e = Pt(i, {
      render: null,
      specialChars: _v,
      addSpecialChars: null
    });
    return (e.replaceTabs = !Rv()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Ul)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Ul)), e;
  }
});
function Dp(i = {}) {
  return [ur.of(i), Vv()];
}
let eu = null;
function Vv() {
  return eu || (eu = we.fromClass(class {
    constructor(i) {
      this.view = i, this.decorations = U.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(i.state.facet(ur)), this.decorations = this.decorator.createDeco(i);
    }
    makeDecorator(i) {
      return new Zv({
        regexp: i.specialChars,
        decoration: (e, t, n) => {
          let { doc: s } = t.state, r = De(e[0], 0);
          if (r == 9) {
            let o = s.lineAt(n), l = t.state.tabSize, a = xn(o.text, l, n - o.from);
            return U.replace({
              widget: new Dv((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = U.replace({ widget: new Xv(i, r) }));
        },
        boundary: i.replaceTabs ? void 0 : /[^]/
      });
    }
    update(i) {
      let e = i.state.facet(ur);
      i.startState.facet(ur) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(i.view)) : this.decorations = this.decorator.updateDeco(i, this.decorations);
    }
  }, {
    decorations: (i) => i.decorations
  }));
}
const Ev = "•";
function Lv(i) {
  return i >= 32 ? Ev : i == 10 ? "␤" : String.fromCharCode(9216 + i);
}
class Xv extends Bt {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Lv(this.code), n = e.state.phrase("Control character") + " " + (Mv[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, n, t);
    if (s)
      return s;
    let r = document.createElement("span");
    return r.textContent = t, r.title = n, r.setAttribute("aria-label", n), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class Dv extends Bt {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return !1;
  }
}
function qv() {
  return zv;
}
const jv = /* @__PURE__ */ U.line({ class: "cm-activeLine" }), zv = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.docChanged || i.selectionSet) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = -1, t = [];
    for (let n of i.state.selection.ranges) {
      let s = i.lineBlockAt(n.head);
      s.from > e && (t.push(jv.range(s.from)), e = s.from);
    }
    return U.set(t);
  }
}, {
  decorations: (i) => i.decorations
});
class Bv extends Bt {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM(e) {
    let t = document.createElement("span");
    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(!0)), typeof this.content == "string" ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t;
  }
  coordsAt(e) {
    let t = e.firstChild ? hn(e.firstChild) : [];
    if (!t.length)
      return null;
    let n = window.getComputedStyle(e.parentNode), s = Ss(t[0], n.direction != "rtl"), r = parseInt(n.lineHeight);
    return s.bottom - s.top > r * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + r } : s;
  }
  ignoreEvent() {
    return !1;
  }
}
function Yv(i) {
  return we.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = i ? U.set([U.widget({ widget: new Bv(i), side: 1 }).range(0)]) : U.none;
    }
    get decorations() {
      return this.view.state.doc.length ? U.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
}
const Gl = 2e3;
function Iv(i, e, t) {
  let n = Math.min(e.line, t.line), s = Math.max(e.line, t.line), r = [];
  if (e.off > Gl || t.off > Gl || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = n; a <= s; a++) {
      let c = i.doc.line(a);
      c.length <= l && r.push(E.range(c.from + o, c.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = n; a <= s; a++) {
      let c = i.doc.line(a), h = Ql(c.text, o, i.tabSize, !0);
      if (h < 0)
        r.push(E.cursor(c.to));
      else {
        let u = Ql(c.text, l, i.tabSize);
        r.push(E.range(c.from + h, c.from + u));
      }
    }
  }
  return r;
}
function Nv(i, e) {
  let t = i.coordsAtPos(i.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / i.defaultCharacterWidth)) : -1;
}
function tu(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), n = i.state.doc.lineAt(t), s = t - n.from, r = s > Gl ? -1 : s == n.length ? Nv(i, e.clientX) : xn(n.text, i.state.tabSize, t - n.from);
  return { line: n.number, col: r, off: s };
}
function Wv(i, e) {
  let t = tu(i, e), n = i.state.selection;
  return t ? {
    update(s) {
      if (s.docChanged) {
        let r = s.changes.mapPos(s.startState.doc.line(t.line).from), o = s.state.doc.lineAt(r);
        t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, n = n.map(s.changes);
      }
    },
    get(s, r, o) {
      let l = tu(i, s);
      if (!l)
        return n;
      let a = Iv(i.state, t, l);
      return a.length ? o ? E.create(a.concat(n.ranges)) : E.create(a) : n;
    }
  } : null;
}
function Uv(i) {
  let e = (t) => t.altKey && t.button == 0;
  return z.mouseSelectionStyle.of((t, n) => e(n) ? Wv(t, n) : null);
}
const Gv = {
  Alt: [18, (i) => !!i.altKey],
  Control: [17, (i) => !!i.ctrlKey],
  Shift: [16, (i) => !!i.shiftKey],
  Meta: [91, (i) => !!i.metaKey]
}, Fv = { style: "cursor: crosshair" };
function Hv(i = {}) {
  let [e, t] = Gv[i.key || "Alt"], n = we.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = !1;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(s) {
        this.set(s.keyCode == e || t(s));
      },
      keyup(s) {
        (s.keyCode == e || !t(s)) && this.set(!1);
      },
      mousemove(s) {
        this.set(t(s));
      }
    }
  });
  return [
    n,
    z.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(n)) === null || r === void 0) && r.isDown ? Fv : null;
    })
  ];
}
const _n = "-10000px";
class qp {
  constructor(e, t, n, s) {
    this.facet = t, this.createTooltipView = n, this.removeTooltipView = s, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = n(o, r));
  }
  update(e, t) {
    var n;
    let s = e.state.facet(this.facet), r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let c = r[a], h = -1;
      if (c) {
        for (let u = 0; u < this.tooltips.length; u++) {
          let f = this.tooltips[u];
          f && f.create == c.create && (h = u);
        }
        if (h < 0)
          o[a] = this.createTooltipView(c, a ? o[a - 1] : null), l && (l[a] = !!c.above);
        else {
          let u = o[a] = this.tooltipViews[h];
          l && (l[a] = t[h]), u.update && u.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (n = a.destroy) === null || n === void 0 || n.call(a));
    return t && (l.forEach((a, c) => t[c] = a), t.length = l.length), this.input = s, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function Kv(i) {
  let { win: e } = i;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const qo = /* @__PURE__ */ Y.define({
  combine: (i) => {
    var e, t, n;
    return {
      position: I.ios ? "absolute" : ((e = i.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = i.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((n = i.find((s) => s.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || Kv
    };
  }
}), iu = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.view = i, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = i.state.facet(qo);
    this.position = e.position, this.parent = e.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new qp(i, ro, (t, n) => this.createTooltip(t, n), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), i.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let i of this.manager.tooltipViews)
        this.intersectionObserver.observe(i.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(i) {
    i.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(i, this.above);
    e && this.observeIntersection();
    let t = e || i.geometryChanged, n = i.state.facet(qo);
    if (n.position != this.position && !this.madeAbsolute) {
      this.position = n.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      t = !0;
    }
    if (n.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = n.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(i, e) {
    let t = i.create(this.view), n = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), i.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", t.dom.appendChild(s);
    }
    return t.dom.style.position = this.position, t.dom.style.top = _n, t.dom.style.left = "0px", this.container.insertBefore(t.dom, n), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var i, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let n of this.manager.tooltipViews)
      n.dom.remove(), (i = n.destroy) === null || i === void 0 || i.call(n);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let i = this.view.dom.getBoundingClientRect(), e = 1, t = 1, n = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: s } = this.manager.tooltipViews[0];
      if (I.gecko)
        n = s.offsetParent != this.container.ownerDocument.body;
      else if (s.style.top == _n && s.style.left == "0px") {
        let r = s.getBoundingClientRect();
        n = Math.abs(r.top + 1e4) > 1 || Math.abs(r.left) > 1;
      }
    }
    if (n || this.position == "absolute")
      if (this.parent) {
        let s = this.parent.getBoundingClientRect();
        s.width && s.height && (e = s.width / this.parent.offsetWidth, t = s.height / this.parent.offsetHeight);
      } else
        ({ scaleX: e, scaleY: t } = this.view.viewState);
    return {
      editor: i,
      parent: this.parent ? this.container.getBoundingClientRect() : i,
      pos: this.manager.tooltips.map((s, r) => {
        let o = this.manager.tooltipViews[r];
        return o.getCoords ? o.getCoords(s.pos) : this.view.coordsAtPos(s.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: s }) => s.getBoundingClientRect()),
      space: this.view.state.facet(qo).tooltipSpace(this.view),
      scaleX: e,
      scaleY: t,
      makeAbsolute: n
    };
  }
  writeMeasure(i) {
    var e;
    if (i.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { editor: t, space: n, scaleX: s, scaleY: r } = i, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], c = this.manager.tooltipViews[l], { dom: h } = c, u = i.pos[l], f = i.size[l];
      if (!u || u.bottom <= Math.max(t.top, n.top) || u.top >= Math.min(t.bottom, n.bottom) || u.right < Math.max(t.left, n.left) - 0.1 || u.left > Math.min(t.right, n.right) + 0.1) {
        h.style.top = _n;
        continue;
      }
      let d = a.arrow ? c.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, O = f.right - f.left, m = (e = iu.get(c)) !== null && e !== void 0 ? e : f.bottom - f.top, g = c.offset || eb, k = this.view.textDirection == Se.LTR, S = f.width > n.right - n.left ? k ? n.left : n.right - f.width : k ? Math.max(n.left, Math.min(u.left - (d ? 14 : 0) + g.x, n.right - O)) : Math.min(Math.max(n.left, u.left - O + (d ? 14 : 0) - g.x), n.right - O), $ = this.above[l];
      !a.strictSide && ($ ? u.top - (f.bottom - f.top) - g.y < n.top : u.bottom + (f.bottom - f.top) + g.y > n.bottom) && $ == n.bottom - u.bottom > u.top - n.top && ($ = this.above[l] = !$);
      let C = ($ ? u.top - n.top : n.bottom - u.bottom) - p;
      if (C < m && c.resize !== !1) {
        if (C < this.view.defaultLineHeight) {
          h.style.top = _n;
          continue;
        }
        iu.set(c, m), h.style.height = (m = C) / r + "px";
      } else h.style.height && (h.style.height = "");
      let M = $ ? u.top - m - p - g.y : u.bottom + p + g.y, P = S + O;
      if (c.overlap !== !0)
        for (let w of o)
          w.left < P && w.right > S && w.top < M + m && w.bottom > M && (M = $ ? w.top - m - 2 - p : w.bottom + p + 2);
      if (this.position == "absolute" ? (h.style.top = (M - i.parent.top) / r + "px", h.style.left = (S - i.parent.left) / s + "px") : (h.style.top = M / r + "px", h.style.left = S / s + "px"), d) {
        let w = u.left + (k ? g.x : -g.x) - (S + 14 - 7);
        d.style.left = w / s + "px";
      }
      c.overlap !== !0 && o.push({ left: S, top: M, right: P, bottom: M + m }), h.classList.toggle("cm-tooltip-above", $), h.classList.toggle("cm-tooltip-below", !$), c.positioned && c.positioned(i.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let i of this.manager.tooltipViews)
        i.dom.style.top = _n;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), Jv = /* @__PURE__ */ z.baseTheme({
  ".cm-tooltip": {
    zIndex: 100,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), eb = { x: 0, y: 0 }, ro = /* @__PURE__ */ Y.define({
  enables: [Ua, Jv]
}), Tr = /* @__PURE__ */ Y.define({
  combine: (i) => i.reduce((e, t) => e.concat(t), [])
});
class oo {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new oo(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new qp(e, Tr, (t, n) => this.createHostedView(t, n), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let n = e.create(this.view);
    return n.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(n.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && n.mount && n.mount(this.view), n;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let n of this.manager.tooltipViews) {
      let s = n[e];
      if (s !== void 0) {
        if (t === void 0)
          t = s;
        else if (t !== s)
          return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const tb = /* @__PURE__ */ ro.compute([Tr], (i) => {
  let e = i.facet(Tr);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.map((t) => {
      var n;
      return (n = t.end) !== null && n !== void 0 ? n : t.pos;
    })),
    create: oo.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class ib {
  constructor(e, t, n, s, r) {
    this.view = e, this.source = t, this.field = n, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, n = e.docView.nearest(t.target);
    if (!n)
      return;
    let s, r = 1;
    if (n instanceof ci)
      s = n.posAtStart;
    else {
      if (s = e.posAtCoords(t), s == null)
        return;
      let l = e.coordsAtPos(s);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(s)).find((h) => h.from <= s && h.to >= s), c = a && a.dir == Se.RTL ? -1 : 1;
      r = t.x < l.left ? -c : c;
    }
    let o = this.source(e, s, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: s };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Ue(e.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(Ua), t = e ? e.manager.tooltips.findIndex((n) => n.create == oo.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, n;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if (s.length && r && !nb(r.dom, e) || this.pending) {
      let { pos: o } = s[0] || this.pending, l = (n = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null && n !== void 0 ? n : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !sb(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length) {
      let { tooltip: n } = this;
      n && n.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(n.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (n) => {
      e.removeEventListener("mouseleave", t), this.active.length && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Ys = 4;
function nb(i, e) {
  let { left: t, right: n, top: s, bottom: r } = i.getBoundingClientRect(), o;
  if (o = i.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    s = Math.min(l.top, s), r = Math.max(l.bottom, r);
  }
  return e.clientX >= t - Ys && e.clientX <= n + Ys && e.clientY >= s - Ys && e.clientY <= r + Ys;
}
function sb(i, e, t, n, s, r) {
  let o = i.scrollDOM.getBoundingClientRect(), l = i.documentTop + i.documentPadding.top + i.contentHeight;
  if (o.left > n || o.right < n || o.top > s || Math.min(o.bottom, l) < s)
    return !1;
  let a = i.posAtCoords({ x: n, y: s }, !1);
  return a >= e && a <= t;
}
function rb(i, e = {}) {
  let t = H.define(), n = _e.define({
    create() {
      return [];
    },
    update(s, r) {
      if (s.length && (e.hideOnChange && (r.docChanged || r.selection) ? s = [] : e.hideOn && (s = s.filter((o) => !e.hideOn(r, o))), r.docChanged)) {
        let o = [];
        for (let l of s) {
          let a = r.changes.mapPos(l.pos, -1, je.TrackDel);
          if (a != null) {
            let c = Object.assign(/* @__PURE__ */ Object.create(null), l);
            c.pos = a, c.end != null && (c.end = r.changes.mapPos(c.end)), o.push(c);
          }
        }
        s = o;
      }
      for (let o of r.effects)
        o.is(t) && (s = o.value), o.is(ob) && (s = []);
      return s;
    },
    provide: (s) => Tr.from(s)
  });
  return {
    active: n,
    extension: [
      n,
      we.define((s) => new ib(
        s,
        i,
        n,
        t,
        e.hoverTime || 300
        /* Hover.Time */
      )),
      tb
    ]
  };
}
function jp(i, e) {
  let t = i.plugin(Ua);
  if (!t)
    return null;
  let n = t.manager.tooltips.indexOf(e);
  return n < 0 ? null : t.manager.tooltipViews[n];
}
const ob = /* @__PURE__ */ H.define(), nu = /* @__PURE__ */ Y.define({
  combine(i) {
    let e, t;
    for (let n of i)
      e = e || n.topContainer, t = t || n.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function ls(i, e) {
  let t = i.plugin(zp), n = t ? t.specs.indexOf(e) : -1;
  return n > -1 ? t.panels[n] : null;
}
const zp = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.input = i.state.facet(as), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(i));
    let e = i.state.facet(nu);
    this.top = new Is(i, !0, e.topContainer), this.bottom = new Is(i, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(i) {
    let e = i.state.facet(nu);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Is(i.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Is(i.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = i.state.facet(as);
    if (t != this.input) {
      let n = t.filter((a) => a), s = [], r = [], o = [], l = [];
      for (let a of n) {
        let c = this.specs.indexOf(a), h;
        c < 0 ? (h = a(i.view), l.push(h)) : (h = this.panels[c], h.update && h.update(i)), s.push(h), (h.top ? r : o).push(h);
      }
      this.specs = n, this.panels = s, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let n of this.panels)
        n.update && n.update(i);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (i) => z.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class Is {
  constructor(e, t, n) {
    this.view = e, this.top = t, this.container = n, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = su(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = su(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function su(i) {
  let e = i.nextSibling;
  return i.remove(), e;
}
const as = /* @__PURE__ */ Y.define({
  enables: zp
});
class zt extends Li {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
zt.prototype.elementClass = "";
zt.prototype.toDOM = void 0;
zt.prototype.mapMode = je.TrackBefore;
zt.prototype.startSide = zt.prototype.endSide = -1;
zt.prototype.point = !0;
const fr = /* @__PURE__ */ Y.define(), lb = /* @__PURE__ */ Y.define(), ab = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => ae.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, Fn = /* @__PURE__ */ Y.define();
function Bp(i) {
  return [Yp(), Fn.of(Object.assign(Object.assign({}, ab), i))];
}
const ru = /* @__PURE__ */ Y.define({
  combine: (i) => i.some((e) => e)
});
function Yp(i) {
  return [
    cb
  ];
}
const cb = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.view = i, this.prevViewport = i.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = i.state.facet(Fn).map((e) => new lu(i, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !i.state.facet(ru), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), i.scrollDOM.insertBefore(this.dom, i.contentDOM);
  }
  update(i) {
    if (this.updateGutters(i)) {
      let e = this.prevViewport, t = i.view.viewport, n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(n < (t.to - t.from) * 0.8);
    }
    i.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(ru) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = i.view.viewport;
  }
  syncGutters(i) {
    let e = this.dom.nextSibling;
    i && this.dom.remove();
    let t = ae.iter(this.view.state.facet(fr), this.view.viewport.from), n = [], s = this.gutters.map((r) => new hb(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (n.length && (n = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == Ge.Text && o) {
            Fl(t, n, l.from);
            for (let a of s)
              a.line(this.view, l, n);
            o = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == Ge.Text) {
        Fl(t, n, r.from);
        for (let o of s)
          o.line(this.view, r, n);
      } else if (r.widget)
        for (let o of s)
          o.widget(this.view, r);
    for (let r of s)
      r.finish();
    i && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(i) {
    let e = i.startState.facet(Fn), t = i.state.facet(Fn), n = i.docChanged || i.heightChanged || i.viewportChanged || !ae.eq(i.startState.facet(fr), i.state.facet(fr), i.view.viewport.from, i.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(i) && (n = !0);
    else {
      n = !0;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new lu(this.view, r)) : (this.gutters[o].update(i), s.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s)
        this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return n;
  }
  destroy() {
    for (let i of this.gutters)
      i.destroy();
    this.dom.remove();
  }
}, {
  provide: (i) => z.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == Se.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX };
  })
});
function ou(i) {
  return Array.isArray(i) ? i : [i];
}
function Fl(i, e, t) {
  for (; i.value && i.from <= t; )
    i.from == t && e.push(i.value), i.next();
}
class hb {
  constructor(e, t, n) {
    this.gutter = e, this.height = n, this.i = 0, this.cursor = ae.iter(e.markers, t.from);
  }
  addElement(e, t, n) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new Ip(e, o, r, n);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(e, o, r, n);
    this.height = t.bottom, this.i++;
  }
  line(e, t, n) {
    let s = [];
    Fl(this.cursor, s, t.from), n.length && (s = s.concat(n));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let n = this.gutter.config.widgetMarker(e, t.widget, t), s = n ? [n] : null;
    for (let r of e.state.facet(lb)) {
      let o = r(e, t.widget, t);
      o && (s || (s = [])).push(o);
    }
    s && this.addElement(e, t, s);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class lu {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let n in t.domEventHandlers)
      this.dom.addEventListener(n, (s) => {
        let r = s.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = s.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[n](e, l, s) && s.preventDefault();
      });
    this.markers = ou(t.markers(e)), t.initialSpacer && (this.spacer = new Ip(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = ou(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let n = e.view.viewport;
    return !ae.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Ip {
  constructor(e, t, n, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, n, s);
  }
  update(e, t, n, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), ub(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let n = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < t.length ? t[r++] : null, c = !1;
      if (a) {
        let h = a.elementClass;
        h && (n += " " + h);
        for (let u = o; u < this.markers.length; u++)
          if (this.markers[u].compare(a)) {
            l = u, c = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(s);
          let u = s.nextSibling;
          s.remove(), s = u;
        }
      }
      if (!a)
        break;
      a.toDOM && (c ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(e), s)), c && o++;
    }
    this.dom.className = n, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function ub(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (!i[t].compare(e[t]))
      return !1;
  return !0;
}
const fb = /* @__PURE__ */ Y.define(), db = /* @__PURE__ */ Y.define(), Hi = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let n = Object.assign({}, e);
        for (let s in t) {
          let r = n[s], o = t[s];
          n[s] = r ? (l, a, c) => r(l, a, c) || o(l, a, c) : o;
        }
        return n;
      }
    });
  }
});
class jo extends zt {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function zo(i, e) {
  return i.state.facet(Hi).formatNumber(e, i.state);
}
const pb = /* @__PURE__ */ Fn.compute([Hi], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(fb);
  },
  lineMarker(e, t, n) {
    return n.some((s) => s.toDOM) ? null : new jo(zo(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, n) => {
    for (let s of e.state.facet(db)) {
      let r = s(e, t, n);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Hi) != e.state.facet(Hi),
  initialSpacer(e) {
    return new jo(zo(e, au(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = zo(t.view, au(t.view.state.doc.lines));
    return n == e.number ? e : new jo(n);
  },
  domEventHandlers: i.facet(Hi).domEventHandlers
}));
function Ob(i = {}) {
  return [
    Hi.of(i),
    Yp(),
    pb
  ];
}
function au(i) {
  let e = 9;
  for (; e < i; )
    e = e * 10 + 9;
  return e;
}
const mb = /* @__PURE__ */ new class extends zt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), gb = /* @__PURE__ */ fr.compute(["selection"], (i) => {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let s = i.doc.lineAt(n.head).from;
    s > t && (t = s, e.push(mb.range(s)));
  }
  return ae.of(e);
});
function yb() {
  return gb;
}
const Np = 1024;
let vb = 0;
class Bo {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class oe {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = vb++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = rt.match(e)), (t) => {
      let n = e(t);
      return n === void 0 ? null : [this, n];
    };
  }
}
oe.closedBy = new oe({ deserialize: (i) => i.split(" ") });
oe.openedBy = new oe({ deserialize: (i) => i.split(" ") });
oe.group = new oe({ deserialize: (i) => i.split(" ") });
oe.isolate = new oe({ deserialize: (i) => {
  if (i && i != "rtl" && i != "ltr" && i != "auto")
    throw new RangeError("Invalid value for isolate: " + i);
  return i || "auto";
} });
oe.contextHash = new oe({ perNode: !0 });
oe.lookAhead = new oe({ perNode: !0 });
oe.mounted = new oe({ perNode: !0 });
class Ar {
  constructor(e, t, n) {
    this.tree = e, this.overlay = t, this.parser = n;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[oe.mounted.id];
  }
}
const bb = /* @__PURE__ */ Object.create(null);
class rt {
  /**
  @internal
  */
  constructor(e, t, n, s = 0) {
    this.name = e, this.props = t, this.id = n, this.flags = s;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : bb, n = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new rt(e.name || "", t, e.id, n);
    if (e.props) {
      for (let r of e.props)
        if (Array.isArray(r) || (r = r(s)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return s;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(oe.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let n in e)
      for (let s of n.split(" "))
        t[s] = e[n];
    return (n) => {
      for (let s = n.prop(oe.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? n.name : s[r]];
        if (o)
          return o;
      }
    };
  }
}
rt.none = new rt(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class Ga {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...e) {
    let t = [];
    for (let n of this.types) {
      let s = null;
      for (let r of e) {
        let o = r(n);
        o && (s || (s = Object.assign({}, n.props)), s[o[0].id] = o[1]);
      }
      t.push(s ? new rt(n.name, s, n.id, n.flags) : n);
    }
    return new Ga(t);
  }
}
const Ns = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap();
var Re;
(function(i) {
  i[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Re || (Re = {}));
class Ae {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, n, s, r) {
    if (this.type = e, this.children = t, this.positions = n, this.length = s, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = Ar.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let n of this.children) {
      let s = n.toString();
      s && (t && (t += ","), t += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new Kl(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, n = 0) {
    let s = Ns.get(this) || this.topNode, r = new Kl(s);
    return r.moveTo(e, t), Ns.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new st(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let n = cs(Ns.get(this) || this.topNode, e, t, !1);
    return Ns.set(this, n), n;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let n = cs(cu.get(this) || this.topNode, e, t, !0);
    return cu.set(this, n), n;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return kb(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: n, from: s = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & Re.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | Re.IncludeAnonymous); ; ) {
      let c = !1;
      if (a.from <= r && a.to >= s && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        c = !0;
      }
      for (; c && n && (l || !a.type.isAnonymous) && n(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        c = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : Ka(rt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, n, s) => new Ae(this.type, t, n, s, this.propValues), e.makeTree || ((t, n, s) => new Ae(rt.none, t, n, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return wb(e);
  }
}
Ae.empty = new Ae(rt.none, [], [], 0);
class Fa {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Fa(this.buffer, this.index);
  }
}
class yi {
  /**
  Create a tree buffer.
  */
  constructor(e, t, n) {
    this.buffer = e, this.length = t, this.set = n;
  }
  /**
  @internal
  */
  get type() {
    return rt.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], n = this.buffer[e + 3], s = this.set.types[t], r = s.name;
    if (/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), e += 4, n == e)
      return r;
    let o = [];
    for (; e < n; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return r + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, n, s, r) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(Wp(r, s, o[a + 1], o[a + 2]) && (l = a, n > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, n) {
    let s = this.buffer, r = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      r[a++] = s[l++], r[a++] = s[l++] - n;
      let c = r[a++] = s[l++] - n;
      r[a++] = s[l++] - e, o = Math.max(o, c);
    }
    return new yi(r, o, this.set);
  }
}
function Wp(i, e, t, n) {
  switch (i) {
    case -2:
      return t < e;
    case -1:
      return n >= e && t < e;
    case 0:
      return t < e && n > e;
    case 1:
      return t <= e && n > e;
    case 2:
      return n > e;
    case 4:
      return !0;
  }
}
function cs(i, e, t, n) {
  for (var s; i.from == i.to || (t < 1 ? i.from >= e : i.from > e) || (t > -1 ? i.to <= e : i.to < e); ) {
    let o = !n && i instanceof st && i.index < 0 ? null : i.parent;
    if (!o)
      return i;
    i = o;
  }
  let r = n ? 0 : Re.IgnoreOverlays;
  if (n)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof st && o.index < 0 && ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (i = l);
  for (; ; ) {
    let o = i.enter(e, t, r);
    if (!o)
      return i;
    i = o;
  }
}
class Up {
  cursor(e = 0) {
    return new Kl(this, e);
  }
  getChild(e, t = null, n = null) {
    let s = hu(this, e, t, n);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return hu(this, e, t, n);
  }
  resolve(e, t = 0) {
    return cs(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return cs(this, e, t, !0);
  }
  matchContext(e) {
    return Hl(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), n = this;
    for (; t; ) {
      let s = t.lastChild;
      if (!s || s.to != t.to)
        break;
      s.type.isError && s.from == s.to ? (n = t, t = s.prevSibling) : t = s;
    }
    return n;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class st extends Up {
  constructor(e, t, n, s) {
    super(), this._tree = e, this.from = t, this.index = n, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, n, s, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, c = t > 0 ? l.length : -1; e != c; e += t) {
        let h = l[e], u = a[e] + o.from;
        if (Wp(s, n, u, u + h.length)) {
          if (h instanceof yi) {
            if (r & Re.ExcludeBuffers)
              continue;
            let f = h.findChild(0, h.buffer.length, t, n - u, s);
            if (f > -1)
              return new Rt(new Sb(o, h, e, u), null, f);
          } else if (r & Re.IncludeAnonymous || !h.type.isAnonymous || Ha(h)) {
            let f;
            if (!(r & Re.IgnoreMounts) && (f = Ar.get(h)) && !f.overlay)
              return new st(f.tree, u, e, o);
            let d = new st(h, u, e, o);
            return r & Re.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? h.children.length - 1 : 0, t, n, s);
          }
        }
      }
      if (r & Re.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, n = 0) {
    let s;
    if (!(n & Re.IgnoreOverlays) && (s = Ar.get(this._tree)) && s.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of s.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new st(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, n);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function hu(i, e, t, n) {
  let s = i.cursor(), r = [];
  if (!s.firstChild())
    return r;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = s.type.is(t), !s.nextSibling())
        return r;
  }
  for (; ; ) {
    if (n != null && s.type.is(n))
      return r;
    if (s.type.is(e) && r.push(s.node), !s.nextSibling())
      return n == null ? r : [];
  }
}
function Hl(i, e, t = e.length - 1) {
  for (let n = i; t >= 0; n = n.parent) {
    if (!n)
      return !1;
    if (!n.type.isAnonymous) {
      if (e[t] && e[t] != n.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class Sb {
  constructor(e, t, n, s) {
    this.parent = e, this.buffer = t, this.index = n, this.start = s;
  }
}
class Rt extends Up {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, n) {
    super(), this.context = e, this._parent = t, this.index = n, this.type = e.buffer.set.types[e.buffer.buffer[n]];
  }
  child(e, t, n) {
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.context.start, n);
    return r < 0 ? null : new Rt(this.context, this, r);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, n = 0) {
    if (n & Re.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new Rt(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Rt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Rt(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: n } = this.context, s = this.index + 4, r = n.buffer[this.index + 3];
    if (r > s) {
      let o = n.buffer[this.index + 1];
      e.push(n.slice(s, r, o)), t.push(0);
    }
    return new Ae(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Gp(i) {
  if (!i.length)
    return null;
  let e = 0, t = i[0];
  for (let r = 1; r < i.length; r++) {
    let o = i[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let n = t instanceof st && t.index < 0 ? null : t.parent, s = i.slice();
  return n ? s[e] = n : s.splice(e, 1), new xb(s, t);
}
class xb {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return Gp(this.heads);
  }
}
function kb(i, e, t) {
  let n = i.resolveInner(e, t), s = null;
  for (let r = n instanceof st ? n : n.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [n])).push(o.resolve(e, t)), r = o;
    } else {
      let o = Ar.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new st(o.tree, o.overlay[0].from + r.from, -1, r);
        (s || (s = [n])).push(cs(l, e, t, !1));
      }
    }
  return s ? Gp(s) : n;
}
class Kl {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof st)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let n = e._parent; n; n = n._parent)
        this.stack.unshift(n.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: n, buffer: s } = this.buffer;
    return this.type = t || s.set.types[s.buffer[e]], this.from = n + s.buffer[e + 1], this.to = n + s.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof st ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, n) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, n, this.mode));
    let { buffer: s } = this.buffer, r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.buffer.start, n);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, n = this.mode) {
    return this.buffer ? n & Re.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Re.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Re.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, n = this.stack.length - 1;
    if (e < 0) {
      let s = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != s)
        return this.yieldBuf(t.findChild(
          s,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
        return this.yieldBuf(s);
    }
    return n < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, n, { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (s.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: t, parent: n } = s);
    } else
      ({ index: t, _parent: n } = this._tree);
    for (; n; { index: t, _parent: n } = n)
      if (t > -1)
        for (let r = t + e, o = e < 0 ? -1 : n._tree.children.length; r != o; r += e) {
          let l = n._tree.children[r];
          if (this.mode & Re.IncludeAnonymous || l instanceof yi || !l.type.isAnonymous || Ha(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, n = 0;
    if (e && e.context == this.buffer)
      e: for (let s = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == s) {
            if (s == this.index)
              return o;
            t = o, n = r + 1;
            break e;
          }
        s = this.stack[--r];
      }
    for (let s = n; s < this.stack.length; s++)
      t = new Rt(this.buffer, t, this.stack[s]);
    return this.bufferNode = new Rt(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let n = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (; ; ) {
        if (s && t && t(this), s = this.type.isAnonymous, !n)
          return;
        if (this.nextSibling())
          break;
        this.parent(), n--, s = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return Hl(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: n } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0)
        return Hl(this._tree, e, s);
      let o = n[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[s] && e[s] != o.name)
          return !1;
        s--;
      }
    }
    return !0;
  }
}
function Ha(i) {
  return i.children.some((e) => e instanceof yi || !e.type.isAnonymous || Ha(e));
}
function wb(i) {
  var e;
  let { buffer: t, nodeSet: n, maxBufferLength: s = Np, reused: r = [], minRepeatType: o = n.types.length } = i, l = Array.isArray(t) ? new Fa(t, t.length) : t, a = n.types, c = 0, h = 0;
  function u(C, M, P, w, b, A) {
    let { id: Q, start: v, end: y, size: T } = l, _ = h, D = c;
    for (; T < 0; )
      if (l.next(), T == -1) {
        let le = r[Q];
        P.push(le), w.push(v - C);
        return;
      } else if (T == -3) {
        c = Q;
        return;
      } else if (T == -4) {
        h = Q;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${T}`);
    let F = a[Q], te, ne, W = v - C;
    if (y - v <= s && (ne = m(l.pos - M, b))) {
      let le = new Uint16Array(ne.size - ne.skip), K = l.pos - ne.size, me = le.length;
      for (; l.pos > K; )
        me = g(ne.start, le, me);
      te = new yi(le, y - ne.start, n), W = ne.start - C;
    } else {
      let le = l.pos - T;
      l.next();
      let K = [], me = [], Nt = Q >= o ? Q : -1, ni = 0, fe = y;
      for (; l.pos > le; )
        Nt >= 0 && l.id == Nt && l.size >= 0 ? (l.end <= fe - s && (p(K, me, v, ni, l.end, fe, Nt, _, D), ni = K.length, fe = l.end), l.next()) : A > 2500 ? f(v, le, K, me) : u(v, le, K, me, Nt, A + 1);
      if (Nt >= 0 && ni > 0 && ni < K.length && p(K, me, v, ni, v, fe, Nt, _, D), K.reverse(), me.reverse(), Nt > -1 && ni > 0) {
        let We = d(F, D);
        te = Ka(F, K, me, 0, K.length, 0, y - v, We, We);
      } else
        te = O(F, K, me, y - v, _ - y, D);
    }
    P.push(te), w.push(W);
  }
  function f(C, M, P, w) {
    let b = [], A = 0, Q = -1;
    for (; l.pos > M; ) {
      let { id: v, start: y, end: T, size: _ } = l;
      if (_ > 4)
        l.next();
      else {
        if (Q > -1 && y < Q)
          break;
        Q < 0 && (Q = T - s), b.push(v, y, T), A++, l.next();
      }
    }
    if (A) {
      let v = new Uint16Array(A * 4), y = b[b.length - 2];
      for (let T = b.length - 3, _ = 0; T >= 0; T -= 3)
        v[_++] = b[T], v[_++] = b[T + 1] - y, v[_++] = b[T + 2] - y, v[_++] = _;
      P.push(new yi(v, b[2] - y, n)), w.push(y - C);
    }
  }
  function d(C, M) {
    return (P, w, b) => {
      let A = 0, Q = P.length - 1, v, y;
      if (Q >= 0 && (v = P[Q]) instanceof Ae) {
        if (!Q && v.type == C && v.length == b)
          return v;
        (y = v.prop(oe.lookAhead)) && (A = w[Q] + v.length + y);
      }
      return O(C, P, w, b, A, M);
    };
  }
  function p(C, M, P, w, b, A, Q, v, y) {
    let T = [], _ = [];
    for (; C.length > w; )
      T.push(C.pop()), _.push(M.pop() + P - b);
    C.push(O(n.types[Q], T, _, A - b, v - A, y)), M.push(b - P);
  }
  function O(C, M, P, w, b, A, Q) {
    if (A) {
      let v = [oe.contextHash, A];
      Q = Q ? [v].concat(Q) : [v];
    }
    if (b > 25) {
      let v = [oe.lookAhead, b];
      Q = Q ? [v].concat(Q) : [v];
    }
    return new Ae(C, M, P, w, Q);
  }
  function m(C, M) {
    let P = l.fork(), w = 0, b = 0, A = 0, Q = P.end - s, v = { size: 0, start: 0, skip: 0 };
    e: for (let y = P.pos - C; P.pos > y; ) {
      let T = P.size;
      if (P.id == M && T >= 0) {
        v.size = w, v.start = b, v.skip = A, A += 4, w += 4, P.next();
        continue;
      }
      let _ = P.pos - T;
      if (T < 0 || _ < y || P.start < Q)
        break;
      let D = P.id >= o ? 4 : 0, F = P.start;
      for (P.next(); P.pos > _; ) {
        if (P.size < 0)
          if (P.size == -3)
            D += 4;
          else
            break e;
        else P.id >= o && (D += 4);
        P.next();
      }
      b = F, w += T, A += D;
    }
    return (M < 0 || w == C) && (v.size = w, v.start = b, v.skip = A), v.size > 4 ? v : void 0;
  }
  function g(C, M, P) {
    let { id: w, start: b, end: A, size: Q } = l;
    if (l.next(), Q >= 0 && w < o) {
      let v = P;
      if (Q > 4) {
        let y = l.pos - (Q - 4);
        for (; l.pos > y; )
          P = g(C, M, P);
      }
      M[--P] = v, M[--P] = A - C, M[--P] = b - C, M[--P] = w;
    } else Q == -3 ? c = w : Q == -4 && (h = w);
    return P;
  }
  let k = [], S = [];
  for (; l.pos > 0; )
    u(i.start || 0, i.bufferStart || 0, k, S, -1, 0);
  let $ = (e = i.length) !== null && e !== void 0 ? e : k.length ? S[0] + k[0].length : 0;
  return new Ae(a[i.topID], k.reverse(), S.reverse(), $);
}
const uu = /* @__PURE__ */ new WeakMap();
function dr(i, e) {
  if (!i.isAnonymous || e instanceof yi || e.type != i)
    return 1;
  let t = uu.get(e);
  if (t == null) {
    t = 1;
    for (let n of e.children) {
      if (n.type != i || !(n instanceof Ae)) {
        t = 1;
        break;
      }
      t += dr(i, n);
    }
    uu.set(e, t);
  }
  return t;
}
function Ka(i, e, t, n, s, r, o, l, a) {
  let c = 0;
  for (let p = n; p < s; p++)
    c += dr(i, e[p]);
  let h = Math.ceil(
    c * 1.5 / 8
    /* Balance.BranchFactor */
  ), u = [], f = [];
  function d(p, O, m, g, k) {
    for (let S = m; S < g; ) {
      let $ = S, C = O[S], M = dr(i, p[S]);
      for (S++; S < g; S++) {
        let P = dr(i, p[S]);
        if (M + P >= h)
          break;
        M += P;
      }
      if (S == $ + 1) {
        if (M > h) {
          let P = p[$];
          d(P.children, P.positions, 0, P.children.length, O[$] + k);
          continue;
        }
        u.push(p[$]);
      } else {
        let P = O[S - 1] + p[S - 1].length - C;
        u.push(Ka(i, p, O, $, S, C, P, null, a));
      }
      f.push(C + k - r);
    }
  }
  return d(e, t, n, s, 0), (l || a)(u, f, o);
}
class Qb {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, n) {
    let s = this.map.get(e);
    s || this.map.set(e, s = /* @__PURE__ */ new Map()), s.set(t, n);
  }
  getBuffer(e, t) {
    let n = this.map.get(e);
    return n && n.get(t);
  }
  /**
  Set the value for this syntax node.
  */
  set(e, t) {
    e instanceof Rt ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof st && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof Rt ? this.getBuffer(e.context.buffer, e.index) : e instanceof st ? this.map.get(e.tree) : void 0;
  }
  /**
  Set the value for the node that a cursor currently points to.
  */
  cursorSet(e, t) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t);
  }
  /**
  Retrieve the value for the node that a cursor currently points
  to.
  */
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
}
class Mi {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, n, s, r = !1, o = !1) {
    this.from = e, this.to = t, this.tree = n, this.offset = s, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], n = !1) {
    let s = [new Mi(0, e.length, e, 0, !1, n)];
    for (let r of t)
      r.to > e.length && s.push(r);
    return s;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, n = 128) {
    if (!t.length)
      return e;
    let s = [], r = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, c = 0; ; l++) {
      let h = l < t.length ? t[l] : null, u = h ? h.fromA : 1e9;
      if (u - a >= n)
        for (; o && o.from < u; ) {
          let f = o;
          if (a >= f.from || u <= f.to || c) {
            let d = Math.max(f.from, a) - c, p = Math.min(f.to, u) - c;
            f = d >= p ? null : new Mi(d, p, f.tree, f.offset + c, l > 0, !!h);
          }
          if (f && s.push(f), o.to > u)
            break;
          o = r < e.length ? e[r++] : null;
        }
      if (!h)
        break;
      a = h.toA, c = h.toA - h.toB;
    }
    return s;
  }
}
class Fp {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, n) {
    return typeof e == "string" && (e = new Pb(e)), n = n ? n.length ? n.map((s) => new Bo(s.from, s.to)) : [new Bo(0, 0)] : [new Bo(0, e.length)], this.createParse(e, t || [], n);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, n) {
    let s = this.startParse(e, t, n);
    for (; ; ) {
      let r = s.advance();
      if (r)
        return r;
    }
  }
}
class Pb {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new oe({ perNode: !0 });
let $b = 0, Wt = class Jl {
  /**
  @internal
  */
  constructor(e, t, n, s) {
    this.name = e, this.set = t, this.base = n, this.modified = s, this.id = $b++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let n = typeof e == "string" ? e : "?";
    if (e instanceof Jl && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let s = new Jl(n, [], null, []);
    if (s.set.push(s), t)
      for (let r of t.set)
        s.set.push(r);
    return s;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let t = new Zr(e);
    return (n) => n.modified.indexOf(t) > -1 ? n : Zr.get(n.base || n, n.modified.concat(t).sort((s, r) => s.id - r.id));
  }
}, Cb = 0;
class Zr {
  constructor(e) {
    this.name = e, this.instances = [], this.id = Cb++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let n = t[0].instances.find((l) => l.base == e && Tb(t, l.modified));
    if (n)
      return n;
    let s = [], r = new Wt(e.name, s, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = Ab(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          s.push(Zr.get(l, a));
    return r;
  }
}
function Tb(i, e) {
  return i.length == e.length && i.every((t, n) => t == e[n]);
}
function Ab(i) {
  let e = [[]];
  for (let t = 0; t < i.length; t++)
    for (let n = 0, s = e.length; n < s; n++)
      e.push(e[n].concat(i[t]));
  return e.sort((t, n) => n.length - t.length);
}
function lo(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in i) {
    let n = i[t];
    Array.isArray(n) || (n = [n]);
    for (let s of t.split(" "))
      if (s) {
        let r = [], o = 2, l = s;
        for (let u = 0; ; ) {
          if (l == "..." && u > 0 && u + 3 == s.length) {
            o = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!f)
            throw new RangeError("Invalid path: " + s);
          if (r.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), u += f[0].length, u == s.length)
            break;
          let d = s[u++];
          if (u == s.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + s);
          l = s.slice(u);
        }
        let a = r.length - 1, c = r[a];
        if (!c)
          throw new RangeError("Invalid path: " + s);
        let h = new _r(n, o, a > 0 ? r.slice(0, a) : null);
        e[c] = h.sort(e[c]);
      }
  }
  return Hp.add(e);
}
const Hp = new oe();
class _r {
  constructor(e, t, n, s) {
    this.tags = e, this.mode = t, this.context = n, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
_r.empty = new _r([], 2, null);
function Kp(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of i)
    if (!Array.isArray(r.tag))
      t[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        t[o.id] = r.class;
  let { scope: n, all: s = null } = e || {};
  return {
    style: (r) => {
      let o = s;
      for (let l of r)
        for (let a of l.set) {
          let c = t[a.id];
          if (c) {
            o = o ? o + " " + c : c;
            break;
          }
        }
      return o;
    },
    scope: n
  };
}
function Zb(i, e) {
  let t = null;
  for (let n of i) {
    let s = n.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function _b(i, e, t, n = 0, s = i.length) {
  let r = new Mb(n, Array.isArray(e) ? e : [e], t);
  r.highlightRange(i.cursor(), n, s, "", r.highlighters), r.flush(s);
}
class Mb {
  constructor(e, t, n) {
    this.at = e, this.highlighters = t, this.span = n, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, n, s, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= n || a <= t)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let c = s, h = Rb(e) || _r.empty, u = Zb(r, h.tags);
    if (u && (c && (c += " "), c += u, h.mode == 1 && (s += (s ? " " : "") + u)), this.startSpan(Math.max(t, l), c), h.opaque)
      return;
    let f = e.tree && e.tree.prop(oe.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(f.tree.type)), O = e.firstChild();
      for (let m = 0, g = l; ; m++) {
        let k = m < f.overlay.length ? f.overlay[m] : null, S = k ? k.from + l : a, $ = Math.max(t, g), C = Math.min(n, S);
        if ($ < C && O)
          for (; e.from < C && (this.highlightRange(e, $, C, s, r), this.startSpan(Math.min(C, e.to), c), !(e.to >= S || !e.nextSibling())); )
            ;
        if (!k || S > n)
          break;
        g = k.to + l, g > t && (this.highlightRange(d.cursor(), Math.max(t, k.from + l), Math.min(n, g), "", p), this.startSpan(Math.min(n, g), c));
      }
      O && e.parent();
    } else if (e.firstChild()) {
      f && (s = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= n)
            break;
          this.highlightRange(e, t, n, s, r), this.startSpan(Math.min(n, e.to), c);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Rb(i) {
  let e = i.type.prop(Hp);
  for (; e && e.context && !i.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const j = Wt.define, Ws = j(), si = j(), fu = j(si), du = j(si), ri = j(), Us = j(ri), Yo = j(ri), Zt = j(), wi = j(Zt), Tt = j(), At = j(), ea = j(), Mn = j(ea), Gs = j(), x = {
  /**
  A comment.
  */
  comment: Ws,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: j(Ws),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: j(Ws),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: j(Ws),
  /**
  Any kind of identifier.
  */
  name: si,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: j(si),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: fu,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: j(fu),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: du,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: j(du),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: j(si),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: j(si),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: j(si),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: j(si),
  /**
  A literal value.
  */
  literal: ri,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Us,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: j(Us),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: j(Us),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: j(Us),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Yo,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: j(Yo),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: j(Yo),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: j(ri),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: j(ri),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: j(ri),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: j(ri),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: j(ri),
  /**
  A language keyword.
  */
  keyword: Tt,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: j(Tt),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: j(Tt),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: j(Tt),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: j(Tt),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: j(Tt),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: j(Tt),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: j(Tt),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: j(Tt),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: j(Tt),
  /**
  An operator.
  */
  operator: At,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: j(At),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: j(At),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: j(At),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: j(At),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: j(At),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: j(At),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: j(At),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: j(At),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: j(At),
  /**
  Program or markup punctuation.
  */
  punctuation: ea,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: j(ea),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: Mn,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: j(Mn),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: j(Mn),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: j(Mn),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: j(Mn),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Zt,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: wi,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: j(wi),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: j(wi),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: j(wi),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: j(wi),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: j(wi),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: j(wi),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: j(Zt),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: j(Zt),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: j(Zt),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: j(Zt),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: j(Zt),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: j(Zt),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: j(Zt),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: j(Zt),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: j(),
  /**
  Deleted text.
  */
  deleted: j(),
  /**
  Changed text.
  */
  changed: j(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: j(),
  /**
  Metadata or meta-instruction.
  */
  meta: Gs,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: j(Gs),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: j(Gs),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: j(Gs),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Wt.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Wt.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Wt.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Wt.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Wt.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Wt.defineModifier("special")
};
for (let i in x) {
  let e = x[i];
  e instanceof Wt && (e.name = i);
}
Kp([
  { tag: x.link, class: "tok-link" },
  { tag: x.heading, class: "tok-heading" },
  { tag: x.emphasis, class: "tok-emphasis" },
  { tag: x.strong, class: "tok-strong" },
  { tag: x.keyword, class: "tok-keyword" },
  { tag: x.atom, class: "tok-atom" },
  { tag: x.bool, class: "tok-bool" },
  { tag: x.url, class: "tok-url" },
  { tag: x.labelName, class: "tok-labelName" },
  { tag: x.inserted, class: "tok-inserted" },
  { tag: x.deleted, class: "tok-deleted" },
  { tag: x.literal, class: "tok-literal" },
  { tag: x.string, class: "tok-string" },
  { tag: x.number, class: "tok-number" },
  { tag: [x.regexp, x.escape, x.special(x.string)], class: "tok-string2" },
  { tag: x.variableName, class: "tok-variableName" },
  { tag: x.local(x.variableName), class: "tok-variableName tok-local" },
  { tag: x.definition(x.variableName), class: "tok-variableName tok-definition" },
  { tag: x.special(x.variableName), class: "tok-variableName2" },
  { tag: x.definition(x.propertyName), class: "tok-propertyName tok-definition" },
  { tag: x.typeName, class: "tok-typeName" },
  { tag: x.namespace, class: "tok-namespace" },
  { tag: x.className, class: "tok-className" },
  { tag: x.macroName, class: "tok-macroName" },
  { tag: x.propertyName, class: "tok-propertyName" },
  { tag: x.operator, class: "tok-operator" },
  { tag: x.comment, class: "tok-comment" },
  { tag: x.meta, class: "tok-meta" },
  { tag: x.invalid, class: "tok-invalid" },
  { tag: x.punctuation, class: "tok-punctuation" }
]);
var Io;
const Ki = /* @__PURE__ */ new oe();
function Jp(i) {
  return Y.define({
    combine: i ? (e) => e.concat(i) : void 0
  });
}
const Ja = /* @__PURE__ */ new oe();
class St {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, n = [], s = "") {
    this.data = e, this.name = s, se.prototype.hasOwnProperty("tree") || Object.defineProperty(se.prototype, "tree", { get() {
      return Ee(this);
    } }), this.parser = t, this.extension = [
      vi.of(this),
      se.languageData.of((r, o, l) => {
        let a = pu(r, o, l), c = a.type.prop(Ki);
        if (!c)
          return [];
        let h = r.facet(c), u = a.type.prop(Ja);
        if (u) {
          let f = a.resolve(o - a.from, l);
          for (let d of u)
            if (d.test(f, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(h);
            }
        }
        return h;
      })
    ].concat(n);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, n = -1) {
    return pu(e, t, n).type.prop(Ki) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(vi);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let n = [], s = (r, o) => {
      if (r.prop(Ki) == this.data) {
        n.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(oe.mounted);
      if (l) {
        if (l.tree.prop(Ki) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              n.push({ from: a.from + o, to: a.to + o });
          else
            n.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = n.length;
          if (s(l.tree, l.overlay[0].from + o), n.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let c = r.children[a];
        c instanceof Ae && s(c, r.positions[a] + o);
      }
    };
    return s(Ee(e), 0), n;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
St.setState = /* @__PURE__ */ H.define();
function pu(i, e, t) {
  let n = i.facet(vi), s = Ee(i).topNode;
  if (!n || n.allowsNesting)
    for (let r = s; r; r = r.enter(e, t, Re.ExcludeBuffers))
      r.type.isTop && (s = r);
  return s;
}
class pn extends St {
  constructor(e, t, n) {
    super(e, t, [], n), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = Jp(e.languageData);
    return new pn(t, e.parser.configure({
      props: [Ki.add((n) => n.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new pn(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function Ee(i) {
  let e = i.field(St.state, !1);
  return e ? e.tree : Ae.empty;
}
class Vb {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let n = this.cursorPos - this.string.length;
    return e < n || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - n, t - n);
  }
}
let Rn = null;
class Mr {
  constructor(e, t, n = [], s, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = n, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Mr(e, t, [], Ae.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new Vb(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != Ae.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var n;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(Mi.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Mi.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Rn;
    Rn = this;
    try {
      return e();
    } finally {
      Rn = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = Ou(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: n, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((c, h, u, f) => a.push({ fromA: c, toA: h, fromB: u, toB: f })), n = Mi.applyChanges(n, a), s = Ae.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let c of this.skipped) {
          let h = e.mapPos(c.from, 1), u = e.mapPos(c.to, -1);
          h < u && l.push({ from: h, to: u });
        }
      }
    }
    return new Mr(this.parser, t, n, s, r, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let n = 0; n < this.skipped.length; n++) {
      let { from: s, to: r } = this.skipped[n];
      s < e.to && r > e.from && (this.fragments = Ou(this.fragments, s, r), this.skipped.splice(n--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends Fp {
      createParse(t, n, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = Rn;
            if (a) {
              for (let c of s)
                a.tempSkipped.push(c);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new Ae(rt.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Rn;
  }
}
function Ou(i, e, t) {
  return Mi.applyChanges(i, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class On {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), n = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, n) || t.takeTree(), new On(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), n = Mr.create(e.facet(vi).parser, e, { from: 0, to: t });
    return n.work(20, t) || n.takeTree(), new On(n);
  }
}
St.state = /* @__PURE__ */ _e.define({
  create: On.init,
  update(i, e) {
    for (let t of e.effects)
      if (t.is(St.setState))
        return t.value;
    return e.startState.facet(vi) != e.state.facet(vi) ? On.init(e.state) : i.apply(e);
  }
});
let eO = (i) => {
  let e = setTimeout(
    () => i(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (eO = (i) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(i, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const No = typeof navigator < "u" && (!((Io = navigator.scheduling) === null || Io === void 0) && Io.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Eb = /* @__PURE__ */ we.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(St.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(St.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = eO(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: n, viewport: { to: s } } = this.view, r = n.field(St.state);
    if (r.tree == r.context.tree && r.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !No ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && n.doc.length > s + 1e3, a = r.context.work(() => No && No() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: St.setState.of(new On(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Ue(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), vi = /* @__PURE__ */ Y.define({
  combine(i) {
    return i.length ? i[0] : null;
  },
  enables: (i) => [
    St.state,
    Eb,
    z.contentAttributes.compute([i], (e) => {
      let t = e.facet(i);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class tO {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const Lb = /* @__PURE__ */ Y.define(), Qs = /* @__PURE__ */ Y.define({
  combine: (i) => {
    if (!i.length)
      return "  ";
    let e = i[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
    return e;
  }
});
function Rr(i) {
  let e = i.facet(Qs);
  return e.charCodeAt(0) == 9 ? i.tabSize * e.length : e.length;
}
function hs(i, e) {
  let t = "", n = i.tabSize, s = i.facet(Qs)[0];
  if (s == "	") {
    for (; e >= n; )
      t += "	", e -= n;
    s = " ";
  }
  for (let r = 0; r < e; r++)
    t += s;
  return t;
}
function ec(i, e) {
  i instanceof se && (i = new ao(i));
  for (let n of i.state.facet(Lb)) {
    let s = n(i, e);
    if (s !== void 0)
      return s;
  }
  let t = Ee(i.state);
  return t.length >= e ? Xb(i, t, e) : null;
}
class ao {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Rr(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let n = this.state.doc.lineAt(e), { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= n.from && s <= n.to ? r && s == e ? { text: "", from: e } : (t < 0 ? s < e : s <= e) ? { text: n.text.slice(s - n.from), from: s } : { text: n.text.slice(0, s - n.from), from: n.from } : n;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: n, from: s } = this.lineAt(e, t);
    return n.slice(e - s, Math.min(n.length, e + 100 - s));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: n, from: s } = this.lineAt(e, t), r = this.countColumn(n, e - s), o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return o > -1 && (r += o - this.countColumn(n, n.search(/\S|$/))), r;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return xn(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: n, from: s } = this.lineAt(e, t), r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1)
        return o;
    }
    return this.countColumn(n, n.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const tc = /* @__PURE__ */ new oe();
function Xb(i, e, t) {
  let n = e.resolveStack(t), s = n.node.enterUnfinishedNodesBefore(t);
  if (s != n.node) {
    let r = [];
    for (let o = s; o != n.node; o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      n = { node: r[o], next: n };
  }
  return iO(n, i, t);
}
function iO(i, e, t) {
  for (let n = i; n; n = n.next) {
    let s = qb(n.node);
    if (s)
      return s(ic.create(e, t, n));
  }
  return 0;
}
function Db(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function qb(i) {
  let e = i.type.prop(tc);
  if (e)
    return e;
  let t = i.firstChild, n;
  if (t && (n = t.type.prop(oe.closedBy))) {
    let s = i.lastChild, r = s && n.indexOf(s.name) > -1;
    return (o) => nO(o, !0, 1, void 0, r && !Db(o) ? s.from : void 0);
  }
  return i.parent == null ? jb : null;
}
function jb() {
  return 0;
}
class ic extends ao {
  constructor(e, t, n) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = n;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new ic(e, t, n);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let n = e.resolve(t.from);
      for (; n.parent && n.parent.from == n.from; )
        n = n.parent;
      if (zb(n, e))
        break;
      t = this.state.doc.lineAt(n.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return iO(this.context.next, this.base, this.pos);
  }
}
function zb(i, e) {
  for (let t = e; t; t = t.parent)
    if (i == t)
      return !0;
  return !1;
}
function Bb(i) {
  let e = i.node, t = e.childAfter(e.from), n = e.lastChild;
  if (!t)
    return null;
  let s = i.options.simulateBreak, r = i.state.doc.lineAt(t.from), o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == n)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let c = /^ */.exec(r.text.slice(t.to - r.from))[0].length;
      return { from: t.from, to: t.to + c };
    }
    l = a.to;
  }
}
function ta({ closing: i, align: e = !0, units: t = 1 }) {
  return (n) => nO(n, e, t, i);
}
function nO(i, e, t, n, s) {
  let r = i.textAfter, o = r.match(/^\s*/)[0].length, l = n && r.slice(o, o + n.length) == n || s == i.pos + o, a = e ? Bb(i) : null;
  return a ? l ? i.column(a.from) : i.column(a.to) : i.baseIndent + (l ? 0 : i.unit * t);
}
const Yb = (i) => i.baseIndent;
function Wo({ except: i, units: e = 1 } = {}) {
  return (t) => {
    let n = i && i.test(t.textAfter);
    return t.baseIndent + (n ? 0 : e * t.unit);
  };
}
const Ib = 200;
function Nb() {
  return se.transactionFilter.of((i) => {
    if (!i.docChanged || !i.isUserEvent("input.type") && !i.isUserEvent("input.complete"))
      return i;
    let e = i.startState.languageDataAt("indentOnInput", i.startState.selection.main.head);
    if (!e.length)
      return i;
    let t = i.newDoc, { head: n } = i.newSelection.main, s = t.lineAt(n);
    if (n > s.from + Ib)
      return i;
    let r = t.sliceString(s.from, n);
    if (!e.some((c) => c.test(r)))
      return i;
    let { state: o } = i, l = -1, a = [];
    for (let { head: c } of o.selection.ranges) {
      let h = o.doc.lineAt(c);
      if (h.from == l)
        continue;
      l = h.from;
      let u = ec(o, h.from);
      if (u == null)
        continue;
      let f = /^\s*/.exec(h.text)[0], d = hs(o, u);
      f != d && a.push({ from: h.from, to: h.from + f.length, insert: d });
    }
    return a.length ? [i, { changes: a, sequential: !0 }] : i;
  });
}
const Wb = /* @__PURE__ */ Y.define(), nc = /* @__PURE__ */ new oe();
function sO(i) {
  let e = i.firstChild, t = i.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? i.to : t.from } : null;
}
function Ub(i, e, t) {
  let n = Ee(i);
  if (n.length < t)
    return null;
  let s = n.resolveStack(t, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t)
      continue;
    if (r && l.from < e)
      break;
    let a = l.type.prop(nc);
    if (a && (l.to < n.length - 50 || n.length == i.doc.length || !Gb(l))) {
      let c = a(l, i);
      c && c.from <= t && c.from >= e && c.to > t && (r = c);
    }
  }
  return r;
}
function Gb(i) {
  let e = i.lastChild;
  return e && e.to == i.to && e.type.isError;
}
function Vr(i, e, t) {
  for (let n of i.facet(Wb)) {
    let s = n(i, e, t);
    if (s)
      return s;
  }
  return Ub(i, e, t);
}
function rO(i, e) {
  let t = e.mapPos(i.from, 1), n = e.mapPos(i.to, -1);
  return t >= n ? void 0 : { from: t, to: n };
}
const co = /* @__PURE__ */ H.define({ map: rO }), Ps = /* @__PURE__ */ H.define({ map: rO });
function oO(i) {
  let e = [];
  for (let { head: t } of i.state.selection.ranges)
    e.some((n) => n.from <= t && n.to >= t) || e.push(i.lineBlockAt(t));
  return e;
}
const ji = /* @__PURE__ */ _e.define({
  create() {
    return U.none;
  },
  update(i, e) {
    i = i.map(e.changes);
    for (let t of e.effects)
      if (t.is(co) && !Fb(i, t.value.from, t.value.to)) {
        let { preparePlaceholder: n } = e.state.facet(cO), s = n ? U.replace({ widget: new nS(n(e.state, t.value)) }) : mu;
        i = i.update({ add: [s.range(t.value.from, t.value.to)] });
      } else t.is(Ps) && (i = i.update({
        filter: (n, s) => t.value.from != n || t.value.to != s,
        filterFrom: t.value.from,
        filterTo: t.value.to
      }));
    if (e.selection) {
      let t = !1, { head: n } = e.selection.main;
      i.between(n, n, (s, r) => {
        s < n && r > n && (t = !0);
      }), t && (i = i.update({
        filterFrom: n,
        filterTo: n,
        filter: (s, r) => r <= n || s >= n
      }));
    }
    return i;
  },
  provide: (i) => z.decorations.from(i),
  toJSON(i, e) {
    let t = [];
    return i.between(0, e.doc.length, (n, s) => {
      t.push(n, s);
    }), t;
  },
  fromJSON(i) {
    if (!Array.isArray(i) || i.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < i.length; ) {
      let n = i[t++], s = i[t++];
      if (typeof n != "number" || typeof s != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(mu.range(n, s));
    }
    return U.set(e, !0);
  }
});
function Er(i, e, t) {
  var n;
  let s = null;
  return (n = i.field(ji, !1)) === null || n === void 0 || n.between(e, t, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function Fb(i, e, t) {
  let n = !1;
  return i.between(e, e, (s, r) => {
    s == e && r == t && (n = !0);
  }), n;
}
function lO(i, e) {
  return i.field(ji, !1) ? e : e.concat(H.appendConfig.of(hO()));
}
const Hb = (i) => {
  for (let e of oO(i)) {
    let t = Vr(i.state, e.from, e.to);
    if (t)
      return i.dispatch({ effects: lO(i.state, [co.of(t), aO(i, t)]) }), !0;
  }
  return !1;
}, Kb = (i) => {
  if (!i.state.field(ji, !1))
    return !1;
  let e = [];
  for (let t of oO(i)) {
    let n = Er(i.state, t.from, t.to);
    n && e.push(Ps.of(n), aO(i, n, !1));
  }
  return e.length && i.dispatch({ effects: e }), e.length > 0;
};
function aO(i, e, t = !0) {
  let n = i.state.doc.lineAt(e.from).number, s = i.state.doc.lineAt(e.to).number;
  return z.announce.of(`${i.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${n} ${i.state.phrase("to")} ${s}.`);
}
const Jb = (i) => {
  let { state: e } = i, t = [];
  for (let n = 0; n < e.doc.length; ) {
    let s = i.lineBlockAt(n), r = Vr(e, s.from, s.to);
    r && t.push(co.of(r)), n = (r ? i.lineBlockAt(r.to) : s).to + 1;
  }
  return t.length && i.dispatch({ effects: lO(i.state, t) }), !!t.length;
}, eS = (i) => {
  let e = i.state.field(ji, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, i.state.doc.length, (n, s) => {
    t.push(Ps.of({ from: n, to: s }));
  }), i.dispatch({ effects: t }), !0;
}, tS = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Hb },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Kb },
  { key: "Ctrl-Alt-[", run: Jb },
  { key: "Ctrl-Alt-]", run: eS }
], iS = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, cO = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, iS);
  }
});
function hO(i) {
  return [ji, oS];
}
function uO(i, e) {
  let { state: t } = i, n = t.facet(cO), s = (o) => {
    let l = i.lineBlockAt(i.posAtDOM(o.target)), a = Er(i.state, l.from, l.to);
    a && i.dispatch({ effects: Ps.of(a) }), o.preventDefault();
  };
  if (n.placeholderDOM)
    return n.placeholderDOM(i, s, e);
  let r = document.createElement("span");
  return r.textContent = n.placeholderText, r.setAttribute("aria-label", t.phrase("folded code")), r.title = t.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const mu = /* @__PURE__ */ U.replace({ widget: /* @__PURE__ */ new class extends Bt {
  toDOM(i) {
    return uO(i, null);
  }
}() });
class nS extends Bt {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return uO(e, this.value);
  }
}
const sS = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Uo extends zt {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function rS(i = {}) {
  let e = Object.assign(Object.assign({}, sS), i), t = new Uo(e, !0), n = new Uo(e, !1), s = we.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(vi) != o.state.facet(vi) || o.startState.field(ji, !1) != o.state.field(ji, !1) || Ee(o.startState) != Ee(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new di();
      for (let a of o.viewportLineBlocks) {
        let c = Er(o.state, a.from, a.to) ? n : Vr(o.state, a.from, a.to) ? t : null;
        c && l.add(a.from, a.from, c);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = e;
  return [
    s,
    Bp({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || ae.empty;
      },
      initialSpacer() {
        return new Uo(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, r), { click: (o, l, a) => {
        if (r.click && r.click(o, l, a))
          return !0;
        let c = Er(o.state, l.from, l.to);
        if (c)
          return o.dispatch({ effects: Ps.of(c) }), !0;
        let h = Vr(o.state, l.from, l.to);
        return h ? (o.dispatch({ effects: co.of(h) }), !0) : !1;
      } })
    }),
    hO()
  ];
}
const oS = /* @__PURE__ */ z.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class $s {
  constructor(e, t) {
    this.specs = e;
    let n;
    function s(l) {
      let a = pi.newName();
      return (n || (n = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0, o = t.scope;
    this.scope = o instanceof St ? (l) => l.prop(Ki) == o.data : o ? (l) => l == o : void 0, this.style = Kp(e.map((l) => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = n ? new pi(n) : null, this.themeType = t.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, t) {
    return new $s(e, t || {});
  }
}
const ia = /* @__PURE__ */ Y.define(), fO = /* @__PURE__ */ Y.define({
  combine(i) {
    return i.length ? [i[0]] : null;
  }
});
function Go(i) {
  let e = i.facet(ia);
  return e.length ? e : i.facet(fO);
}
function sc(i, e) {
  let t = [aS], n;
  return i instanceof $s && (i.module && t.push(z.styleModule.of(i.module)), n = i.themeType), e != null && e.fallback ? t.push(fO.of(i)) : n ? t.push(ia.computeN([z.darkTheme], (s) => s.facet(z.darkTheme) == (n == "dark") ? [i] : [])) : t.push(ia.of(i)), t;
}
class lS {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Ee(e.state), this.decorations = this.buildDeco(e, Go(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = Ee(e.state), n = Go(e.state), s = n != Go(e.startState), { viewport: r } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !s && t.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || s) && (this.tree = t, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = r.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return U.none;
    let n = new di();
    for (let { from: s, to: r } of e.visibleRanges)
      _b(this.tree, t, (o, l, a) => {
        n.add(o, l, this.markCache[a] || (this.markCache[a] = U.mark({ class: a })));
      }, s, r);
    return n.finish();
  }
}
const aS = /* @__PURE__ */ xi.high(/* @__PURE__ */ we.fromClass(lS, {
  decorations: (i) => i.decorations
})), dO = /* @__PURE__ */ $s.define([
  {
    tag: x.meta,
    color: "#404740"
  },
  {
    tag: x.link,
    textDecoration: "underline"
  },
  {
    tag: x.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: x.emphasis,
    fontStyle: "italic"
  },
  {
    tag: x.strong,
    fontWeight: "bold"
  },
  {
    tag: x.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: x.keyword,
    color: "#708"
  },
  {
    tag: [x.atom, x.bool, x.url, x.contentSeparator, x.labelName],
    color: "#219"
  },
  {
    tag: [x.literal, x.inserted],
    color: "#164"
  },
  {
    tag: [x.string, x.deleted],
    color: "#a11"
  },
  {
    tag: [x.regexp, x.escape, /* @__PURE__ */ x.special(x.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ x.definition(x.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ x.local(x.variableName),
    color: "#30a"
  },
  {
    tag: [x.typeName, x.namespace],
    color: "#085"
  },
  {
    tag: x.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ x.special(x.variableName), x.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ x.definition(x.propertyName),
    color: "#00c"
  },
  {
    tag: x.comment,
    color: "#940"
  },
  {
    tag: x.invalid,
    color: "#f00"
  }
]), cS = /* @__PURE__ */ z.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), pO = 1e4, OO = "()[]{}", mO = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, {
      afterCursor: !0,
      brackets: OO,
      maxScanDistance: pO,
      renderMatch: fS
    });
  }
}), hS = /* @__PURE__ */ U.mark({ class: "cm-matchingBracket" }), uS = /* @__PURE__ */ U.mark({ class: "cm-nonmatchingBracket" });
function fS(i) {
  let e = [], t = i.matched ? hS : uS;
  return e.push(t.range(i.start.from, i.start.to)), i.end && e.push(t.range(i.end.from, i.end.to)), e;
}
const dS = /* @__PURE__ */ _e.define({
  create() {
    return U.none;
  },
  update(i, e) {
    if (!e.docChanged && !e.selection)
      return i;
    let t = [], n = e.state.facet(mO);
    for (let s of e.state.selection.ranges) {
      if (!s.empty)
        continue;
      let r = Vt(e.state, s.head, -1, n) || s.head > 0 && Vt(e.state, s.head - 1, 1, n) || n.afterCursor && (Vt(e.state, s.head, 1, n) || s.head < e.state.doc.length && Vt(e.state, s.head + 1, -1, n));
      r && (t = t.concat(n.renderMatch(r, e.state)));
    }
    return U.set(t, !0);
  },
  provide: (i) => z.decorations.from(i)
}), pS = [
  dS,
  cS
];
function OS(i = {}) {
  return [mO.of(i), pS];
}
const mS = /* @__PURE__ */ new oe();
function na(i, e, t) {
  let n = i.prop(e < 0 ? oe.openedBy : oe.closedBy);
  if (n)
    return n;
  if (i.name.length == 1) {
    let s = t.indexOf(i.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0))
      return [t[s + e]];
  }
  return null;
}
function sa(i) {
  let e = i.type.prop(mS);
  return e ? e(i.node) : i;
}
function Vt(i, e, t, n = {}) {
  let s = n.maxScanDistance || pO, r = n.brackets || OO, o = Ee(i), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let c = na(a.type, t, r);
    if (c && a.from < a.to) {
      let h = sa(a);
      if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
        return gS(i, e, t, a, h, c, r);
    }
  }
  return yS(i, e, t, o, l.type, s, r);
}
function gS(i, e, t, n, s, r, o) {
  let l = n.parent, a = { from: s.from, to: s.to }, c = 0, h = l == null ? void 0 : l.cursor();
  if (h && (t < 0 ? h.childBefore(n.from) : h.childAfter(n.to)))
    do
      if (t < 0 ? h.to <= n.from : h.from >= n.to) {
        if (c == 0 && r.indexOf(h.type.name) > -1 && h.from < h.to) {
          let u = sa(h);
          return { start: a, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if (na(h.type, t, o))
          c++;
        else if (na(h.type, -t, o)) {
          if (c == 0) {
            let u = sa(h);
            return {
              start: a,
              end: u && u.from < u.to ? { from: u.from, to: u.to } : void 0,
              matched: !1
            };
          }
          c--;
        }
      }
    while (t < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: !1 };
}
function yS(i, e, t, n, s, r, o) {
  let l = t < 0 ? i.sliceDoc(e - 1, e) : i.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let c = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, h = i.doc.iterRange(e, t > 0 ? i.doc.length : 0), u = 0;
  for (let f = 0; !h.next().done && f <= r; ) {
    let d = h.value;
    t < 0 && (f += d.length);
    let p = e + f * t;
    for (let O = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1; O != m; O += t) {
      let g = o.indexOf(d[O]);
      if (!(g < 0 || n.resolveInner(p + O, 1).type != s))
        if (g % 2 == 0 == t > 0)
          u++;
        else {
          if (u == 1)
            return { start: c, end: { from: p + O, to: p + O + 1 }, matched: g >> 1 == a >> 1 };
          u--;
        }
    }
    t > 0 && (f += d.length);
  }
  return h.done ? { start: c, matched: !1 } : null;
}
const vS = /* @__PURE__ */ Object.create(null), gu = [rt.none], yu = [], vu = /* @__PURE__ */ Object.create(null), bS = /* @__PURE__ */ Object.create(null);
for (let [i, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  bS[i] = /* @__PURE__ */ SS(vS, e);
function Fo(i, e) {
  yu.indexOf(i) > -1 || (yu.push(i), console.warn(e));
}
function SS(i, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let c of l.split(".")) {
      let h = i[c] || x[c];
      h ? typeof h == "function" ? a.length ? a = a.map(h) : Fo(c, `Modifier ${c} used at start of tag`) : a.length ? Fo(c, `Tag ${c} used as modifier`) : a = Array.isArray(h) ? h : [h] : Fo(c, `Unknown highlighting tag ${c}`);
    }
    for (let c of a)
      t.push(c);
  }
  if (!t.length)
    return 0;
  let n = e.replace(/ /g, "_"), s = n + " " + t.map((l) => l.id), r = vu[s];
  if (r)
    return r.id;
  let o = vu[s] = rt.define({
    id: gu.length,
    name: n,
    props: [lo({ [n]: t })]
  });
  return gu.push(o), o.id;
}
Se.RTL, Se.LTR;
const xS = (i) => {
  let { state: e } = i, t = e.doc.lineAt(e.selection.main.from), n = oc(i.state, t.from);
  return n.line ? kS(i) : n.block ? QS(i) : !1;
};
function rc(i, e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly)
      return !1;
    let s = i(e, t);
    return s ? (n(t.update(s)), !0) : !1;
  };
}
const kS = /* @__PURE__ */ rc(
  CS,
  0
  /* CommentOption.Toggle */
), wS = /* @__PURE__ */ rc(
  gO,
  0
  /* CommentOption.Toggle */
), QS = /* @__PURE__ */ rc(
  (i, e) => gO(i, e, $S(e)),
  0
  /* CommentOption.Toggle */
);
function oc(i, e) {
  let t = i.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const Vn = 50;
function PS(i, { open: e, close: t }, n, s) {
  let r = i.sliceDoc(n - Vn, n), o = i.sliceDoc(s, s + Vn), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, c = r.length - l;
  if (r.slice(c - e.length, c) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 }
    };
  let h, u;
  s - n <= 2 * Vn ? h = u = i.sliceDoc(n, s) : (h = i.sliceDoc(n, n + Vn), u = i.sliceDoc(s - Vn, s));
  let f = /^\s*/.exec(h)[0].length, d = /\s*$/.exec(u)[0].length, p = u.length - d - t.length;
  return h.slice(f, f + e.length) == e && u.slice(p, p + t.length) == t ? {
    open: {
      pos: n + f + e.length,
      margin: /\s/.test(h.charAt(f + e.length)) ? 1 : 0
    },
    close: {
      pos: s - d - t.length,
      margin: /\s/.test(u.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function $S(i) {
  let e = [];
  for (let t of i.selection.ranges) {
    let n = i.doc.lineAt(t.from), s = t.to <= n.to ? n : i.doc.lineAt(t.to);
    s.from > n.from && s.from == t.to && (s = t.to == n.to + 1 ? n : i.doc.lineAt(t.to - 1));
    let r = e.length - 1;
    r >= 0 && e[r].to > n.from ? e[r].to = s.to : e.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: s.to });
  }
  return e;
}
function gO(i, e, t = e.selection.ranges) {
  let n = t.map((r) => oc(e, r.from).block);
  if (!n.every((r) => r))
    return null;
  let s = t.map((r, o) => PS(e, n[o], r.from, r.to));
  if (i != 2 && !s.every((r) => r))
    return { changes: e.changes(t.map((r, o) => s[o] ? [] : [{ from: r.from, insert: n[o].open + " " }, { from: r.to, insert: " " + n[o].close }])) };
  if (i != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++)
      if (l = s[o]) {
        let a = n[o], { open: c, close: h } = l;
        r.push({ from: c.pos - a.open.length, to: c.pos + c.margin }, { from: h.pos - h.margin, to: h.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function CS(i, e, t = e.selection.ranges) {
  let n = [], s = -1;
  for (let { from: r, to: o } of t) {
    let l = n.length, a = 1e9, c = oc(e, r).line;
    if (c) {
      for (let h = r; h <= o; ) {
        let u = e.doc.lineAt(h);
        if (u.from > s && (r == o || o > u.from)) {
          s = u.from;
          let f = /^\s*/.exec(u.text)[0].length, d = f == u.length, p = u.text.slice(f, f + c.length) == c ? f : -1;
          f < u.text.length && f < a && (a = f), n.push({ line: u, comment: p, token: c, indent: f, empty: d, single: !1 });
        }
        h = u.to + 1;
      }
      if (a < 1e9)
        for (let h = l; h < n.length; h++)
          n[h].indent < n[h].line.text.length && (n[h].indent = a);
      n.length == l + 1 && (n[l].single = !0);
    }
  }
  if (i != 2 && n.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: c, empty: h, single: u } of n)
      (u || !h) && r.push({ from: l.from + c, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (i != 1 && n.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of n)
      if (l >= 0) {
        let c = o.from + l, h = c + a.length;
        o.text[h - o.from] == " " && h++, r.push({ from: c, to: h });
      }
    return { changes: r };
  }
  return null;
}
const ra = /* @__PURE__ */ Jt.define(), TS = /* @__PURE__ */ Jt.define(), AS = /* @__PURE__ */ Y.define(), yO = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (n, s) => e(n, s) || t(n, s)
    });
  }
}), vO = /* @__PURE__ */ _e.define({
  create() {
    return Et.empty;
  },
  update(i, e) {
    let t = e.state.facet(yO), n = e.annotation(ra);
    if (n) {
      let a = it.fromTransaction(e, n.selection), c = n.side, h = c == 0 ? i.undone : i.done;
      return a ? h = Lr(h, h.length, t.minDepth, a) : h = kO(h, e.startState.selection), new Et(c == 0 ? n.rest : h, c == 0 ? h : n.rest);
    }
    let s = e.annotation(TS);
    if ((s == "full" || s == "before") && (i = i.isolate()), e.annotation(Te.addToHistory) === !1)
      return e.changes.empty ? i : i.addMapping(e.changes.desc);
    let r = it.fromTransaction(e), o = e.annotation(Te.time), l = e.annotation(Te.userEvent);
    return r ? i = i.addChanges(r, o, l, t, e) : e.selection && (i = i.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (s == "full" || s == "after") && (i = i.isolate()), i;
  },
  toJSON(i) {
    return { done: i.done.map((e) => e.toJSON()), undone: i.undone.map((e) => e.toJSON()) };
  },
  fromJSON(i) {
    return new Et(i.done.map(it.fromJSON), i.undone.map(it.fromJSON));
  }
});
function bO(i = {}) {
  return [
    vO,
    yO.of(i),
    z.domEventHandlers({
      beforeinput(e, t) {
        let n = e.inputType == "historyUndo" ? SO : e.inputType == "historyRedo" ? oa : null;
        return n ? (e.preventDefault(), n(t)) : !1;
      }
    })
  ];
}
function ho(i, e) {
  return function({ state: t, dispatch: n }) {
    if (!e && t.readOnly)
      return !1;
    let s = t.field(vO, !1);
    if (!s)
      return !1;
    let r = s.pop(i, t, e);
    return r ? (n(r), !0) : !1;
  };
}
const SO = /* @__PURE__ */ ho(0, !1), oa = /* @__PURE__ */ ho(1, !1), ZS = /* @__PURE__ */ ho(0, !0), _S = /* @__PURE__ */ ho(1, !0);
class it {
  constructor(e, t, n, s, r) {
    this.changes = e, this.effects = t, this.mapped = n, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new it(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, n;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
    };
  }
  static fromJSON(e) {
    return new it(e.changes && Me.fromJSON(e.changes), [], e.mapped && Xt.fromJSON(e.mapped), e.startSelection && E.fromJSON(e.startSelection), e.selectionsAfter.map(E.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let n = ft;
    for (let s of e.startState.facet(AS)) {
      let r = s(e);
      r.length && (n = n.concat(r));
    }
    return !n.length && e.changes.empty ? null : new it(e.changes.invert(e.startState.doc), n, void 0, t || e.startState.selection, ft);
  }
  static selection(e) {
    return new it(void 0, ft, void 0, void 0, e);
  }
}
function Lr(i, e, t, n) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0, r = i.slice(s, e);
  return r.push(n), r;
}
function MS(i, e) {
  let t = [], n = !1;
  return i.iterChangedRanges((s, r) => t.push(s, r)), e.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let c = t[a++], h = t[a++];
      l >= c && o <= h && (n = !0);
    }
  }), n;
}
function RS(i, e) {
  return i.ranges.length == e.ranges.length && i.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length === 0;
}
function xO(i, e) {
  return i.length ? e.length ? i.concat(e) : i : e;
}
const ft = [], VS = 200;
function kO(i, e) {
  if (i.length) {
    let t = i[i.length - 1], n = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - VS));
    return n.length && n[n.length - 1].eq(e) ? i : (n.push(e), Lr(i, i.length - 1, 1e9, t.setSelAfter(n)));
  } else
    return [it.selection([e])];
}
function ES(i) {
  let e = i[i.length - 1], t = i.slice();
  return t[i.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Ho(i, e) {
  if (!i.length)
    return i;
  let t = i.length, n = ft;
  for (; t; ) {
    let s = LS(i[t - 1], e, n);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = i.slice(0, t);
      return r[t - 1] = s, r;
    } else
      e = s.mapped, t--, n = s.selectionsAfter;
  }
  return n.length ? [it.selection(n)] : ft;
}
function LS(i, e, t) {
  let n = xO(i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(e)) : ft, t);
  if (!i.changes)
    return it.selection(n);
  let s = i.changes.map(e), r = e.mapDesc(i.changes, !0), o = i.mapped ? i.mapped.composeDesc(r) : r;
  return new it(s, H.mapEffects(i.effects, e), o, i.startSelection.map(r), n);
}
const XS = /^(input\.type|delete)($|\.)/;
class Et {
  constructor(e, t, n = 0, s = void 0) {
    this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Et(this.done, this.undone) : this;
  }
  addChanges(e, t, n, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!n || XS.test(n)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(r, MS(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    n == "input.type.compose") ? o = Lr(o, o.length - 1, s.minDepth, new it(e.changes.compose(l.changes), xO(H.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, ft)) : o = Lr(o, o.length, s.minDepth, e), new Et(o, ft, t, n);
  }
  addSelection(e, t, n, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : ft;
    return r.length > 0 && t - this.prevTime < s && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && RS(r[r.length - 1], e) ? this : new Et(kO(this.done, e), this.undone, t, n);
  }
  addMapping(e) {
    return new Et(Ho(this.done, e), Ho(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, n) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let r = s[s.length - 1], o = r.selectionsAfter[0] || t.selection;
    if (n && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: ra.of({ side: e, rest: ES(s), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = s.length == 1 ? ft : s.slice(0, s.length - 1);
      return r.mapped && (l = Ho(l, r.mapped)), t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: ra.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Et.empty = /* @__PURE__ */ new Et(ft, ft);
const wO = [
  { key: "Mod-z", run: SO, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: oa, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: oa, preventDefault: !0 },
  { key: "Mod-u", run: ZS, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: _S, preventDefault: !0 }
];
function kn(i, e) {
  return E.create(i.ranges.map(e), i.mainIndex);
}
function Yt(i, e) {
  return i.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function $t({ state: i, dispatch: e }, t) {
  let n = kn(i.selection, t);
  return n.eq(i.selection, !0) ? !1 : (e(Yt(i, n)), !0);
}
function uo(i, e) {
  return E.cursor(e ? i.to : i.from);
}
function QO(i, e) {
  return $t(i, (t) => t.empty ? i.moveByChar(t, e) : uo(t, e));
}
function Ne(i) {
  return i.textDirectionAt(i.state.selection.main.head) == Se.LTR;
}
const PO = (i) => QO(i, !Ne(i)), $O = (i) => QO(i, Ne(i));
function CO(i, e) {
  return $t(i, (t) => t.empty ? i.moveByGroup(t, e) : uo(t, e));
}
const DS = (i) => CO(i, !Ne(i)), qS = (i) => CO(i, Ne(i));
function jS(i, e, t) {
  if (e.type.prop(t))
    return !0;
  let n = e.to - e.from;
  return n && (n > 2 || /[^\s,.;:]/.test(i.sliceDoc(e.from, e.to))) || e.firstChild;
}
function fo(i, e, t) {
  let n = Ee(i).resolveInner(e.head), s = t ? oe.closedBy : oe.openedBy;
  for (let a = e.head; ; ) {
    let c = t ? n.childAfter(a) : n.childBefore(a);
    if (!c)
      break;
    jS(i, c, s) ? n = c : a = t ? c.to : c.from;
  }
  let r = n.type.prop(s), o, l;
  return r && (o = t ? Vt(i, n.from, 1) : Vt(i, n.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? n.to : n.from, E.cursor(l, t ? -1 : 1);
}
const zS = (i) => $t(i, (e) => fo(i.state, e, !Ne(i))), BS = (i) => $t(i, (e) => fo(i.state, e, Ne(i)));
function TO(i, e) {
  return $t(i, (t) => {
    if (!t.empty)
      return uo(t, e);
    let n = i.moveVertically(t, e);
    return n.head != t.head ? n : i.moveToLineBoundary(t, e);
  });
}
const AO = (i) => TO(i, !1), ZO = (i) => TO(i, !0);
function _O(i) {
  let e = i.scrollDOM.clientHeight < i.scrollDOM.scrollHeight - 2, t = 0, n = 0, s;
  if (e) {
    for (let r of i.state.facet(z.scrollMargins)) {
      let o = r(i);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (n = Math.max(o == null ? void 0 : o.bottom, n));
    }
    s = i.scrollDOM.clientHeight - t - n;
  } else
    s = (i.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: n,
    selfScroll: e,
    height: Math.max(i.defaultLineHeight, s - 5)
  };
}
function MO(i, e) {
  let t = _O(i), { state: n } = i, s = kn(n.selection, (o) => o.empty ? i.moveVertically(o, e, t.height) : uo(o, e));
  if (s.eq(n.selection))
    return !1;
  let r;
  if (t.selfScroll) {
    let o = i.coordsAtPos(n.selection.main.head), l = i.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, c = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < c && (r = z.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return i.dispatch(Yt(n, s), { effects: r }), !0;
}
const bu = (i) => MO(i, !1), la = (i) => MO(i, !0);
function ki(i, e, t) {
  let n = i.lineBlockAt(e.head), s = i.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? n.to : n.from) && (s = i.moveToLineBoundary(e, t, !1)), !t && s.head == n.from && n.length) {
    let r = /^\s*/.exec(i.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    r && e.head != n.from + r && (s = E.cursor(n.from + r));
  }
  return s;
}
const YS = (i) => $t(i, (e) => ki(i, e, !0)), IS = (i) => $t(i, (e) => ki(i, e, !1)), NS = (i) => $t(i, (e) => ki(i, e, !Ne(i))), WS = (i) => $t(i, (e) => ki(i, e, Ne(i))), US = (i) => $t(i, (e) => E.cursor(i.lineBlockAt(e.head).from, 1)), GS = (i) => $t(i, (e) => E.cursor(i.lineBlockAt(e.head).to, -1));
function FS(i, e, t) {
  let n = !1, s = kn(i.selection, (r) => {
    let o = Vt(i, r.head, -1) || Vt(i, r.head, 1) || r.head > 0 && Vt(i, r.head - 1, 1) || r.head < i.doc.length && Vt(i, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    n = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return E.cursor(l);
  });
  return n ? (e(Yt(i, s)), !0) : !1;
}
const HS = ({ state: i, dispatch: e }) => FS(i, e);
function gt(i, e) {
  let t = kn(i.state.selection, (n) => {
    let s = e(n);
    return E.range(n.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(i.state.selection) ? !1 : (i.dispatch(Yt(i.state, t)), !0);
}
function RO(i, e) {
  return gt(i, (t) => i.moveByChar(t, e));
}
const VO = (i) => RO(i, !Ne(i)), EO = (i) => RO(i, Ne(i));
function LO(i, e) {
  return gt(i, (t) => i.moveByGroup(t, e));
}
const KS = (i) => LO(i, !Ne(i)), JS = (i) => LO(i, Ne(i)), ex = (i) => gt(i, (e) => fo(i.state, e, !Ne(i))), tx = (i) => gt(i, (e) => fo(i.state, e, Ne(i)));
function XO(i, e) {
  return gt(i, (t) => i.moveVertically(t, e));
}
const DO = (i) => XO(i, !1), qO = (i) => XO(i, !0);
function jO(i, e) {
  return gt(i, (t) => i.moveVertically(t, e, _O(i).height));
}
const Su = (i) => jO(i, !1), xu = (i) => jO(i, !0), ix = (i) => gt(i, (e) => ki(i, e, !0)), nx = (i) => gt(i, (e) => ki(i, e, !1)), sx = (i) => gt(i, (e) => ki(i, e, !Ne(i))), rx = (i) => gt(i, (e) => ki(i, e, Ne(i))), ox = (i) => gt(i, (e) => E.cursor(i.lineBlockAt(e.head).from)), lx = (i) => gt(i, (e) => E.cursor(i.lineBlockAt(e.head).to)), ku = ({ state: i, dispatch: e }) => (e(Yt(i, { anchor: 0 })), !0), wu = ({ state: i, dispatch: e }) => (e(Yt(i, { anchor: i.doc.length })), !0), Qu = ({ state: i, dispatch: e }) => (e(Yt(i, { anchor: i.selection.main.anchor, head: 0 })), !0), Pu = ({ state: i, dispatch: e }) => (e(Yt(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0), ax = ({ state: i, dispatch: e }) => (e(i.update({ selection: { anchor: 0, head: i.doc.length }, userEvent: "select" })), !0), cx = ({ state: i, dispatch: e }) => {
  let t = po(i).map(({ from: n, to: s }) => E.range(n, Math.min(s + 1, i.doc.length)));
  return e(i.update({ selection: E.create(t), userEvent: "select" })), !0;
}, hx = ({ state: i, dispatch: e }) => {
  let t = kn(i.selection, (n) => {
    let s = Ee(i), r = s.resolveStack(n.from, 1);
    if (n.empty) {
      let o = s.resolveStack(n.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < n.from && l.to >= n.to || l.to > n.to && l.from <= n.from) && o.next)
        return E.range(l.to, l.from);
    }
    return n;
  });
  return t.eq(i.selection) ? !1 : (e(Yt(i, t)), !0);
}, ux = ({ state: i, dispatch: e }) => {
  let t = i.selection, n = null;
  return t.ranges.length > 1 ? n = E.create([t.main]) : t.main.empty || (n = E.create([E.cursor(t.main.head)])), n ? (e(Yt(i, n)), !0) : !1;
};
function Cs(i, e) {
  if (i.state.readOnly)
    return !1;
  let t = "delete.selection", { state: n } = i, s = n.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = Fs(i, a, !1)) : a > o && (t = "delete.forward", a = Fs(i, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Fs(i, o, !1), l = Fs(i, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: E.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (i.dispatch(n.update(s, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? z.announce.of(n.phrase("Selection deleted")) : void 0
  })), !0);
}
function Fs(i, e, t) {
  if (i instanceof z)
    for (let n of i.state.facet(z.atomicRanges).map((s) => s(i)))
      n.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s);
      });
  return e;
}
const zO = (i, e, t) => Cs(i, (n) => {
  let s = n.from, { state: r } = i, o = r.doc.lineAt(s), l, a;
  if (t && !e && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
    if (l[l.length - 1] == "	")
      return s - 1;
    let c = xn(l, r.tabSize), h = c % Rr(r) || Rr(r);
    for (let u = 0; u < h && l[l.length - 1 - u] == " "; u++)
      s--;
    a = s;
  } else
    a = ze(o.text, s - o.from, e, e) + o.from, a == s && o.number != (e ? r.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) && (a = ze(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), aa = (i) => zO(i, !1, !0), BO = (i) => zO(i, !0, !1), YO = (i, e) => Cs(i, (t) => {
  let n = t.head, { state: s } = i, r = s.doc.lineAt(n), o = s.charCategorizer(n);
  for (let l = null; ; ) {
    if (n == (e ? r.to : r.from)) {
      n == t.head && r.number != (e ? s.doc.lines : 1) && (n += e ? 1 : -1);
      break;
    }
    let a = ze(r.text, n - r.from, e) + r.from, c = r.text.slice(Math.min(n, a) - r.from, Math.max(n, a) - r.from), h = o(c);
    if (l != null && h != l)
      break;
    (c != " " || n != t.head) && (l = h), n = a;
  }
  return n;
}), IO = (i) => YO(i, !1), fx = (i) => YO(i, !0), dx = (i) => Cs(i, (e) => {
  let t = i.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), px = (i) => Cs(i, (e) => {
  let t = i.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), Ox = (i) => Cs(i, (e) => {
  let t = i.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), mx = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => ({
    changes: { from: n.from, to: n.to, insert: ce.of(["", ""]) },
    range: E.cursor(n.from)
  }));
  return e(i.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, gx = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == i.doc.length)
      return { range: n };
    let s = n.from, r = i.doc.lineAt(s), o = s == r.from ? s - 1 : ze(r.text, s - r.from, !1) + r.from, l = s == r.to ? s + 1 : ze(r.text, s - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: i.doc.slice(s, l).append(i.doc.slice(o, s)) },
      range: E.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(i.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function po(i) {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let s = i.doc.lineAt(n.from), r = i.doc.lineAt(n.to);
    if (!n.empty && n.to == r.from && (r = i.doc.lineAt(n.to - 1)), t >= s.number) {
      let o = e[e.length - 1];
      o.to = r.to, o.ranges.push(n);
    } else
      e.push({ from: s.from, to: r.to, ranges: [n] });
    t = r.number + 1;
  }
  return e;
}
function NO(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [], s = [];
  for (let r of po(i)) {
    if (t ? r.to == i.doc.length : r.from == 0)
      continue;
    let o = i.doc.lineAt(t ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (t) {
      n.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + i.lineBreak });
      for (let a of r.ranges)
        s.push(E.range(Math.min(i.doc.length, a.anchor + l), Math.min(i.doc.length, a.head + l)));
    } else {
      n.push({ from: o.from, to: r.from }, { from: r.to, insert: i.lineBreak + o.text });
      for (let a of r.ranges)
        s.push(E.range(a.anchor - l, a.head - l));
    }
  }
  return n.length ? (e(i.update({
    changes: n,
    scrollIntoView: !0,
    selection: E.create(s, i.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const yx = ({ state: i, dispatch: e }) => NO(i, e, !1), vx = ({ state: i, dispatch: e }) => NO(i, e, !0);
function WO(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [];
  for (let s of po(i))
    t ? n.push({ from: s.from, insert: i.doc.slice(s.from, s.to) + i.lineBreak }) : n.push({ from: s.to, insert: i.lineBreak + i.doc.slice(s.from, s.to) });
  return e(i.update({ changes: n, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const bx = ({ state: i, dispatch: e }) => WO(i, e, !1), Sx = ({ state: i, dispatch: e }) => WO(i, e, !0), xx = (i) => {
  if (i.state.readOnly)
    return !1;
  let { state: e } = i, t = e.changes(po(e).map(({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }))), n = kn(e.selection, (s) => {
    let r;
    if (i.lineWrapping) {
      let o = i.lineBlockAt(s.head), l = i.coordsAtPos(s.head, s.assoc || 1);
      l && (r = o.bottom + i.documentTop - l.bottom + i.defaultLineHeight / 2);
    }
    return i.moveVertically(s, !0, r);
  }).map(t);
  return i.dispatch({ changes: t, selection: n, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function kx(i, e) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = Ee(i).resolveInner(e), n = t.childBefore(e), s = t.childAfter(e), r;
  return n && s && n.to <= e && s.from >= e && (r = n.type.prop(oe.closedBy)) && r.indexOf(s.name) > -1 && i.doc.lineAt(n.to).from == i.doc.lineAt(s.from).from && !/\S/.test(i.sliceDoc(n.to, s.from)) ? { from: n.to, to: s.from } : null;
}
const $u = /* @__PURE__ */ UO(!1), wx = /* @__PURE__ */ UO(!0);
function UO(i) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let n = e.changeByRange((s) => {
      let { from: r, to: o } = s, l = e.doc.lineAt(r), a = !i && r == o && kx(e, r);
      i && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let c = new ao(e, { simulateBreak: r, simulateDoubleBreak: !!a }), h = ec(c, r);
      for (h == null && (h = xn(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let u = ["", hs(e, h)];
      return a && u.push(hs(e, c.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: ce.of(u) },
        range: E.cursor(r + 1 + u[1].length)
      };
    });
    return t(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function lc(i, e) {
  let t = -1;
  return i.changeByRange((n) => {
    let s = [];
    for (let o = n.from; o <= n.to; ) {
      let l = i.doc.lineAt(o);
      l.number > t && (n.empty || n.to > l.from) && (e(l, s, n), t = l.number), o = l.to + 1;
    }
    let r = i.changes(s);
    return {
      changes: s,
      range: E.range(r.mapPos(n.anchor, 1), r.mapPos(n.head, 1))
    };
  });
}
const Qx = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), n = new ao(i, { overrideIndentation: (r) => {
    let o = t[r];
    return o ?? -1;
  } }), s = lc(i, (r, o, l) => {
    let a = ec(n, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let c = /^\s*/.exec(r.text)[0], h = hs(i, a);
    (c != h || l.from < r.from + c.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + c.length, insert: h }));
  });
  return s.changes.empty || e(i.update(s, { userEvent: "indent" })), !0;
}, GO = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(lc(i, (t, n) => {
  n.push({ from: t.from, insert: i.facet(Qs) });
}), { userEvent: "input.indent" })), !0), FO = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(lc(i, (t, n) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s)
    return;
  let r = xn(s, i.tabSize), o = 0, l = hs(i, Math.max(0, r - Rr(i)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  n.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Px = (i) => (i.setTabFocusMode(), !0), $x = [
  { key: "Ctrl-b", run: PO, shift: VO, preventDefault: !0 },
  { key: "Ctrl-f", run: $O, shift: EO },
  { key: "Ctrl-p", run: AO, shift: DO },
  { key: "Ctrl-n", run: ZO, shift: qO },
  { key: "Ctrl-a", run: US, shift: ox },
  { key: "Ctrl-e", run: GS, shift: lx },
  { key: "Ctrl-d", run: BO },
  { key: "Ctrl-h", run: aa },
  { key: "Ctrl-k", run: dx },
  { key: "Ctrl-Alt-h", run: IO },
  { key: "Ctrl-o", run: mx },
  { key: "Ctrl-t", run: gx },
  { key: "Ctrl-v", run: la }
], Cx = /* @__PURE__ */ [
  { key: "ArrowLeft", run: PO, shift: VO, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: DS, shift: KS, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: NS, shift: sx, preventDefault: !0 },
  { key: "ArrowRight", run: $O, shift: EO, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: qS, shift: JS, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: WS, shift: rx, preventDefault: !0 },
  { key: "ArrowUp", run: AO, shift: DO, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: ku, shift: Qu },
  { mac: "Ctrl-ArrowUp", run: bu, shift: Su },
  { key: "ArrowDown", run: ZO, shift: qO, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: wu, shift: Pu },
  { mac: "Ctrl-ArrowDown", run: la, shift: xu },
  { key: "PageUp", run: bu, shift: Su },
  { key: "PageDown", run: la, shift: xu },
  { key: "Home", run: IS, shift: nx, preventDefault: !0 },
  { key: "Mod-Home", run: ku, shift: Qu },
  { key: "End", run: YS, shift: ix, preventDefault: !0 },
  { key: "Mod-End", run: wu, shift: Pu },
  { key: "Enter", run: $u, shift: $u },
  { key: "Mod-a", run: ax },
  { key: "Backspace", run: aa, shift: aa },
  { key: "Delete", run: BO },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: IO },
  { key: "Mod-Delete", mac: "Alt-Delete", run: fx },
  { mac: "Mod-Backspace", run: px },
  { mac: "Mod-Delete", run: Ox }
].concat(/* @__PURE__ */ $x.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))), Xr = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: zS, shift: ex },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: BS, shift: tx },
  { key: "Alt-ArrowUp", run: yx },
  { key: "Shift-Alt-ArrowUp", run: bx },
  { key: "Alt-ArrowDown", run: vx },
  { key: "Shift-Alt-ArrowDown", run: Sx },
  { key: "Escape", run: ux },
  { key: "Mod-Enter", run: wx },
  { key: "Alt-l", mac: "Ctrl-l", run: cx },
  { key: "Mod-i", run: hx, preventDefault: !0 },
  { key: "Mod-[", run: FO },
  { key: "Mod-]", run: GO },
  { key: "Mod-Alt-\\", run: Qx },
  { key: "Shift-Mod-k", run: xx },
  { key: "Shift-Mod-\\", run: HS },
  { key: "Mod-/", run: xS },
  { key: "Alt-A", run: wS },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Px }
].concat(Cx), Tx = { key: "Tab", run: GO, shift: FO };
function ye() {
  var i = arguments[0];
  typeof i == "string" && (i = document.createElement(i));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      var s = t[n];
      typeof s == "string" ? i.setAttribute(n, s) : s != null && (i[n] = s);
    }
    e++;
  }
  for (; e < arguments.length; e++) HO(i, arguments[e]);
  return i;
}
function HO(i, e) {
  if (typeof e == "string")
    i.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null)
    i.appendChild(e);
  else if (Array.isArray(e))
    for (var t = 0; t < e.length; t++) HO(i, e[t]);
  else
    throw new RangeError("Unsupported child node: " + e);
}
class Ax {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.diagnostic = n;
  }
}
class Pi {
  constructor(e, t, n) {
    this.diagnostics = e, this.panel = t, this.selected = n;
  }
  static init(e, t, n) {
    let s = e, r = n.facet(Lt).markerFilter;
    r && (s = r(s, n));
    let o = U.set(s.map((l) => l.from == l.to || l.from == l.to - 1 && n.doc.lineAt(l.from).to == l.from ? U.widget({
      widget: new qx(l),
      diagnostic: l
    }).range(l.from) : U.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new Pi(o, t, mn(o));
  }
}
function mn(i, e = null, t = 0) {
  let n = null;
  return i.between(t, 1e9, (s, r, { spec: o }) => {
    if (!(e && o.diagnostic != e))
      return n = new Ax(s, r, o.diagnostic), !1;
  }), n;
}
function KO(i, e) {
  let t = e.pos, n = e.end || t, s = i.state.facet(Lt).hideOn(i, t, n);
  if (s != null)
    return s;
  let r = i.startState.doc.lineAt(e.pos);
  return !!(i.effects.some((o) => o.is(Oo)) || i.changes.touchesRange(r.from, Math.max(r.to, n)));
}
function JO(i, e) {
  return i.field(nt, !1) ? e : e.concat(H.appendConfig.of(lm));
}
function Zx(i, e) {
  return {
    effects: JO(i, [Oo.of(e)])
  };
}
const Oo = /* @__PURE__ */ H.define(), ac = /* @__PURE__ */ H.define(), em = /* @__PURE__ */ H.define(), nt = /* @__PURE__ */ _e.define({
  create() {
    return new Pi(U.none, null, null);
  },
  update(i, e) {
    if (e.docChanged && i.diagnostics.size) {
      let t = i.diagnostics.map(e.changes), n = null, s = i.panel;
      if (i.selected) {
        let r = e.changes.mapPos(i.selected.from, 1);
        n = mn(t, i.selected.diagnostic, r) || mn(t, null, r);
      }
      !t.size && s && e.state.facet(Lt).autoPanel && (s = null), i = new Pi(t, s, n);
    }
    for (let t of e.effects)
      if (t.is(Oo)) {
        let n = e.state.facet(Lt).autoPanel ? t.value.length ? us.open : null : i.panel;
        i = Pi.init(t.value, n, e.state);
      } else t.is(ac) ? i = new Pi(i.diagnostics, t.value ? us.open : null, i.selected) : t.is(em) && (i = new Pi(i.diagnostics, i.panel, t.value));
    return i;
  },
  provide: (i) => [
    as.from(i, (e) => e.panel),
    z.decorations.from(i, (e) => e.diagnostics)
  ]
});
function _x(i) {
  let e = i.field(nt, !1);
  return e ? e.diagnostics.size : 0;
}
const Mx = /* @__PURE__ */ U.mark({ class: "cm-lintRange cm-lintRange-active" });
function Rx(i, e, t) {
  let { diagnostics: n } = i.state.field(nt), s = [], r = 2e8, o = 0;
  n.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, c, { spec: h }) => {
    e >= a && e <= c && (a == c || (e > a || t > 0) && (e < c || t < 0)) && (s.push(h.diagnostic), r = Math.min(a, r), o = Math.max(c, o));
  });
  let l = i.state.facet(Lt).tooltipFilter;
  return l && (s = l(s, i.state)), s.length ? {
    pos: r,
    end: o,
    above: i.state.doc.lineAt(r).to < o,
    create() {
      return { dom: tm(i, s) };
    }
  } : null;
}
function tm(i, e) {
  return ye("ul", { class: "cm-tooltip-lint" }, e.map((t) => sm(i, t, !1)));
}
const Vx = (i) => {
  let e = i.state.field(nt, !1);
  (!e || !e.panel) && i.dispatch({ effects: JO(i.state, [ac.of(!0)]) });
  let t = ls(i, us.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, Cu = (i) => {
  let e = i.state.field(nt, !1);
  return !e || !e.panel ? !1 : (i.dispatch({ effects: ac.of(!1) }), !0);
}, Ex = (i) => {
  let e = i.state.field(nt, !1);
  if (!e)
    return !1;
  let t = i.state.selection.main, n = e.diagnostics.iter(t.to + 1);
  return !n.value && (n = e.diagnostics.iter(0), !n.value || n.from == t.from && n.to == t.to) ? !1 : (i.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: !0 }), !0);
}, Lx = [
  { key: "Mod-Shift-m", run: Vx, preventDefault: !0 },
  { key: "F8", run: Ex }
], im = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.view = i, this.timeout = -1, this.set = !0;
    let { delay: e } = i.state.facet(Lt);
    this.lintTime = Date.now() + e, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e);
  }
  run() {
    clearTimeout(this.timeout);
    let i = Date.now();
    if (i < this.lintTime - 10)
      this.timeout = setTimeout(this.run, this.lintTime - i);
    else {
      this.set = !1;
      let { state: e } = this.view, { sources: t } = e.facet(Lt);
      t.length && Xx(t.map((n) => Promise.resolve(n(this.view))), (n) => {
        this.view.state.doc == e.doc && this.view.dispatch(Zx(this.view.state, n.reduce((s, r) => s.concat(r))));
      }, (n) => {
        Ue(this.view.state, n);
      });
    }
  }
  update(i) {
    let e = i.state.facet(Lt);
    (i.docChanged || e != i.startState.facet(Lt) || e.needsRefresh && e.needsRefresh(i)) && (this.lintTime = Date.now() + e.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, e.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
});
function Xx(i, e, t) {
  let n = [], s = -1;
  for (let r of i)
    r.then((o) => {
      n.push(o), clearTimeout(s), n.length == i.length ? e(n) : setTimeout(() => e(n), 200);
    }, t);
}
const Lt = /* @__PURE__ */ Y.define({
  combine(i) {
    return Object.assign({ sources: i.map((e) => e.source).filter((e) => e != null) }, Pt(i.map((e) => e.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null,
      hideOn: () => null
    }, {
      needsRefresh: (e, t) => e ? t ? (n) => e(n) || t(n) : e : t
    }));
  }
});
function Dx(i, e = {}) {
  return [
    Lt.of({ source: i, config: e }),
    im,
    lm
  ];
}
function Tu(i) {
  let e = i.plugin(im);
  e && e.force();
}
function nm(i) {
  let e = [];
  if (i)
    e: for (let { name: t } of i) {
      for (let n = 0; n < t.length; n++) {
        let s = t[n];
        if (/[a-zA-Z]/.test(s) && !e.some((r) => r.toLowerCase() == s.toLowerCase())) {
          e.push(s);
          continue e;
        }
      }
      e.push("");
    }
  return e;
}
function sm(i, e, t) {
  var n;
  let s = t ? nm(e.actions) : [];
  return ye("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, ye("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(i) : e.message), (n = e.actions) === null || n === void 0 ? void 0 : n.map((r, o) => {
    let l = !1, a = (f) => {
      if (f.preventDefault(), l)
        return;
      l = !0;
      let d = mn(i.state.field(nt).diagnostics, e);
      d && r.apply(i, d.from, d.to);
    }, { name: c } = r, h = s[o] ? c.indexOf(s[o]) : -1, u = h < 0 ? c : [
      c.slice(0, h),
      ye("u", c.slice(h, h + 1)),
      c.slice(h + 1)
    ];
    return ye("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${c}${h < 0 ? "" : ` (access key "${s[o]})"`}.`
    }, u);
  }), e.source && ye("div", { class: "cm-diagnosticSource" }, e.source));
}
class qx extends Bt {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return ye("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class Au {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = sm(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class us {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (s) => {
      if (s.keyCode == 27)
        Cu(this.view), this.view.focus();
      else if (s.keyCode == 38 || s.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (s.keyCode == 40 || s.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (s.keyCode == 36)
        this.moveSelection(0);
      else if (s.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (s.keyCode == 13)
        this.view.focus();
      else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: r } = this.items[this.selectedIndex], o = nm(r.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = mn(this.view.state.field(nt).diagnostics, r);
            a && r.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      s.preventDefault();
    }, n = (s) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = ye("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: n
    }), this.dom = ye("div", { class: "cm-panel-lint" }, this.list, ye("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Cu(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(nt).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(nt), n = 0, s = !1, r = null;
    for (e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
      let c = -1, h;
      for (let u = n; u < this.items.length; u++)
        if (this.items[u].diagnostic == a.diagnostic) {
          c = u;
          break;
        }
      c < 0 ? (h = new Au(this.view, a.diagnostic), this.items.splice(n, 0, h), s = !0) : (h = this.items[c], c > n && (this.items.splice(n, c - n), s = !0)), t && h.diagnostic == t.diagnostic ? h.dom.hasAttribute("aria-selected") || (h.dom.setAttribute("aria-selected", "true"), r = h) : h.dom.hasAttribute("aria-selected") && h.dom.removeAttribute("aria-selected"), n++;
    }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Au(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), s = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: o, panel: l }) => {
        let a = l.height / this.list.offsetHeight;
        o.top < l.top ? this.list.scrollTop -= (l.top - o.top) / a : o.bottom > l.bottom && (this.list.scrollTop += (o.bottom - l.bottom) / a);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let n = e;
      e = n.nextSibling, n.remove();
    }
    for (let n of this.items)
      if (n.dom.parentNode == this.list) {
        for (; e != n.dom; )
          t();
        e = n.dom.nextSibling;
      } else
        this.list.insertBefore(n.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(nt), n = mn(t.diagnostics, this.items[e].diagnostic);
    n && this.view.dispatch({
      selection: { anchor: n.from, head: n.to },
      scrollIntoView: !0,
      effects: em.of(n)
    });
  }
  static open(e) {
    return new us(e);
  }
}
function pr(i, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(i)}</svg>')`;
}
function Hs(i) {
  return pr(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${i}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const jx = /* @__PURE__ */ z.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ Hs("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ Hs("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ Hs("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ Hs("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
});
function Zu(i) {
  return i == "error" ? 4 : i == "warning" ? 3 : i == "info" ? 2 : 1;
}
class rm extends zt {
  constructor(e) {
    super(), this.diagnostics = e, this.severity = e.reduce((t, n) => Zu(t) < Zu(n.severity) ? n.severity : t, "hint");
  }
  toDOM(e) {
    let t = document.createElement("div");
    t.className = "cm-lint-marker cm-lint-marker-" + this.severity;
    let n = this.diagnostics, s = e.state.facet(mo).tooltipFilter;
    return s && (n = s(n, e.state)), n.length && (t.onmouseover = () => Bx(e, t, n)), t;
  }
}
function zx(i, e) {
  let t = (n) => {
    let s = e.getBoundingClientRect();
    if (!(n.clientX > s.left - 10 && n.clientX < s.right + 10 && n.clientY > s.top - 10 && n.clientY < s.bottom + 10)) {
      for (let r = n.target; r; r = r.parentNode)
        if (r.nodeType == 1 && r.classList.contains("cm-tooltip-lint"))
          return;
      window.removeEventListener("mousemove", t), i.state.field(om) && i.dispatch({ effects: cc.of(null) });
    }
  };
  window.addEventListener("mousemove", t);
}
function Bx(i, e, t) {
  function n() {
    let o = i.elementAtHeight(e.getBoundingClientRect().top + 5 - i.documentTop);
    i.coordsAtPos(o.from) && i.dispatch({ effects: cc.of({
      pos: o.from,
      above: !1,
      create() {
        return {
          dom: tm(i, t),
          getCoords: () => e.getBoundingClientRect()
        };
      }
    }) }), e.onmouseout = e.onmousemove = null, zx(i, e);
  }
  let { hoverTime: s } = i.state.facet(mo), r = setTimeout(n, s);
  e.onmouseout = () => {
    clearTimeout(r), e.onmouseout = e.onmousemove = null;
  }, e.onmousemove = () => {
    clearTimeout(r), r = setTimeout(n, s);
  };
}
function Yx(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of e) {
    let r = i.lineAt(s.from);
    (t[r.from] || (t[r.from] = [])).push(s);
  }
  let n = [];
  for (let s in t)
    n.push(new rm(t[s]).range(+s));
  return ae.of(n, !0);
}
const Ix = /* @__PURE__ */ Bp({
  class: "cm-gutter-lint",
  markers: (i) => i.state.field(ca),
  widgetMarker: (i, e, t) => {
    let n = [];
    return i.state.field(ca).between(t.from, t.to, (s, r, o) => {
      n.push(...o.diagnostics);
    }), n.length ? new rm(n) : null;
  }
}), ca = /* @__PURE__ */ _e.define({
  create() {
    return ae.empty;
  },
  update(i, e) {
    i = i.map(e.changes);
    let t = e.state.facet(mo).markerFilter;
    for (let n of e.effects)
      if (n.is(Oo)) {
        let s = n.value;
        t && (s = t(s || [], e.state)), i = Yx(e.state.doc, s.slice(0));
      }
    return i;
  }
}), cc = /* @__PURE__ */ H.define(), om = /* @__PURE__ */ _e.define({
  create() {
    return null;
  },
  update(i, e) {
    return i && e.docChanged && (i = KO(e, i) ? null : Object.assign(Object.assign({}, i), { pos: e.changes.mapPos(i.pos) })), e.effects.reduce((t, n) => n.is(cc) ? n.value : t, i);
  },
  provide: (i) => ro.from(i)
}), Nx = /* @__PURE__ */ z.baseTheme({
  ".cm-gutter-lint": {
    width: "1.4em",
    "& .cm-gutterElement": {
      padding: ".2em"
    }
  },
  ".cm-lint-marker": {
    width: "1em",
    height: "1em"
  },
  ".cm-lint-marker-info": {
    content: /* @__PURE__ */ pr('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')
  },
  ".cm-lint-marker-warning": {
    content: /* @__PURE__ */ pr('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')
  },
  ".cm-lint-marker-error": {
    content: /* @__PURE__ */ pr('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')
  }
}), lm = [
  nt,
  /* @__PURE__ */ z.decorations.compute([nt], (i) => {
    let { selected: e, panel: t } = i.field(nt);
    return !e || !t || e.from == e.to ? U.none : U.set([
      Mx.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ rb(Rx, { hideOn: KO }),
  jx
], mo = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, {
      hoverTime: 300,
      markerFilter: null,
      tooltipFilter: null
    });
  }
});
function Wx(i = {}) {
  return [mo.of(i), ca, Ix, Nx, om];
}
const _u = typeof String.prototype.normalize == "function" ? (i) => i.normalize("NFKD") : (i) => i;
class gn {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(e, t, n = 0, s = e.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, s), this.bufferStart = n, this.normalize = r ? (l) => r(_u(l)) : _u, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return De(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = !0, this;
      let t = Va(e), n = this.bufferStart + this.bufferPos;
      this.bufferPos += ut(e);
      let s = this.normalize(t);
      if (s.length)
        for (let r = 0, o = n; ; r++) {
          let l = s.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (r == s.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          o == n && r < t.length && t.charCodeAt(r) == l && o++;
        }
    }
  }
  match(e, t, n) {
    let s = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = !1;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? s = { from: this.matches[r + 1], to: n } : (this.matches[r]++, l = !0)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? s = { from: t, to: n } : this.matches.push(1, t)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
  }
}
typeof Symbol < "u" && (gn.prototype[Symbol.iterator] = function() {
  return this;
});
const am = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, hc = "gm" + (/x/.unicode == null ? "" : "u");
class cm {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, n, s = 0, r = e.length) {
    if (this.text = e, this.to = r, this.curLine = "", this.done = !1, this.value = am, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new hm(e, t, n, s, r);
    this.re = new RegExp(t, hc + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = e.iter();
    let o = e.lineAt(s);
    this.curLineStart = o.from, this.matchPos = Dr(e, s), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let n = this.curLineStart + t.index, s = n + t[0].length;
        if (this.matchPos = Dr(this.text, s + (n == s ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < s || n > this.value.to) && (!this.test || this.test(n, s, t)))
          return this.value = { from: n, to: s, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Ko = /* @__PURE__ */ new WeakMap();
class rn {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, n) {
    let s = Ko.get(e);
    if (!s || s.from >= n || s.to <= t) {
      let l = new rn(t, e.sliceString(t, n));
      return Ko.set(e, l), l;
    }
    if (s.from == t && s.to == n)
      return s;
    let { text: r, from: o } = s;
    return o > t && (r = e.sliceString(t, o) + r, o = t), s.to < n && (r += e.sliceString(s.to, n)), Ko.set(e, new rn(o, r)), new rn(t, r.slice(t - o, n - o));
  }
}
class hm {
  constructor(e, t, n, s, r) {
    this.text = e, this.to = r, this.done = !1, this.value = am, this.matchPos = Dr(e, s), this.re = new RegExp(t, hc + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = rn.get(e, s, this.chunkEnd(
      s + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let n = this.flat.from + t.index, s = n + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, s, t)))
          return this.value = { from: n, to: s, match: t }, this.matchPos = Dr(this.text, s + (n == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = rn.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (cm.prototype[Symbol.iterator] = hm.prototype[Symbol.iterator] = function() {
  return this;
});
function Ux(i) {
  try {
    return new RegExp(i, hc), !0;
  } catch {
    return !1;
  }
}
function Dr(i, e) {
  if (e >= i.length)
    return e;
  let t = i.lineAt(e), n;
  for (; e < t.to && (n = t.text.charCodeAt(e - t.from)) >= 56320 && n < 57344; )
    e++;
  return e;
}
function ha(i) {
  let e = String(i.state.doc.lineAt(i.state.selection.main.head).number), t = ye("input", { class: "cm-textfield", name: "line", value: e }), n = ye("form", {
    class: "cm-gotoLine",
    onkeydown: (r) => {
      r.keyCode == 27 ? (r.preventDefault(), i.dispatch({ effects: qr.of(!1) }), i.focus()) : r.keyCode == 13 && (r.preventDefault(), s());
    },
    onsubmit: (r) => {
      r.preventDefault(), s();
    }
  }, ye("label", i.state.phrase("Go to line"), ": ", t), " ", ye("button", { class: "cm-button", type: "submit" }, i.state.phrase("go")));
  function s() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!r)
      return;
    let { state: o } = i, l = o.doc.lineAt(o.selection.main.head), [, a, c, h, u] = r, f = h ? +h.slice(1) : 0, d = c ? +c : l.number;
    if (c && u) {
      let m = d / 100;
      a && (m = m * (a == "-" ? -1 : 1) + l.number / o.doc.lines), d = Math.round(o.doc.lines * m);
    } else c && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))), O = E.cursor(p.from + Math.max(0, Math.min(f, p.length)));
    i.dispatch({
      effects: [qr.of(!1), z.scrollIntoView(O.from, { y: "center" })],
      selection: O
    }), i.focus();
  }
  return { dom: n };
}
const qr = /* @__PURE__ */ H.define(), Mu = /* @__PURE__ */ _e.define({
  create() {
    return !0;
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(qr) && (i = t.value);
    return i;
  },
  provide: (i) => as.from(i, (e) => e ? ha : null)
}), Gx = (i) => {
  let e = ls(i, ha);
  if (!e) {
    let t = [qr.of(!0)];
    i.state.field(Mu, !1) == null && t.push(H.appendConfig.of([Mu, Fx])), i.dispatch({ effects: t }), e = ls(i, ha);
  }
  return e && e.dom.querySelector("input").select(), !0;
}, Fx = /* @__PURE__ */ z.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), Hx = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Kx = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, Hx, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function Jx(i) {
  return [sk, nk];
}
const ek = /* @__PURE__ */ U.mark({ class: "cm-selectionMatch" }), tk = /* @__PURE__ */ U.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Ru(i, e, t, n) {
  return (t == 0 || i(e.sliceDoc(t - 1, t)) != xe.Word) && (n == e.doc.length || i(e.sliceDoc(n, n + 1)) != xe.Word);
}
function ik(i, e, t, n) {
  return i(e.sliceDoc(t, t + 1)) == xe.Word && i(e.sliceDoc(n - 1, n)) == xe.Word;
}
const nk = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.selectionSet || i.docChanged || i.viewportChanged) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = i.state.facet(Kx), { state: t } = i, n = t.selection;
    if (n.ranges.length > 1)
      return U.none;
    let s = n.main, r, o = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor)
        return U.none;
      let a = t.wordAt(s.head);
      if (!a)
        return U.none;
      o = t.charCategorizer(s.head), r = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200)
        return U.none;
      if (e.wholeWords) {
        if (r = t.sliceDoc(s.from, s.to), o = t.charCategorizer(s.head), !(Ru(o, t, s.from, s.to) && ik(o, t, s.from, s.to)))
          return U.none;
      } else if (r = t.sliceDoc(s.from, s.to), !r)
        return U.none;
    }
    let l = [];
    for (let a of i.visibleRanges) {
      let c = new gn(t.doc, r, a.from, a.to);
      for (; !c.next().done; ) {
        let { from: h, to: u } = c.value;
        if ((!o || Ru(o, t, h, u)) && (s.empty && h <= s.from && u >= s.to ? l.push(tk.range(h, u)) : (h >= s.to || u <= s.from) && l.push(ek.range(h, u)), l.length > e.maxMatches))
          return U.none;
      }
    }
    return U.set(l);
  }
}, {
  decorations: (i) => i.decorations
}), sk = /* @__PURE__ */ z.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), rk = ({ state: i, dispatch: e }) => {
  let { selection: t } = i, n = E.create(t.ranges.map((s) => i.wordAt(s.head) || E.cursor(s.head)), t.mainIndex);
  return n.eq(t) ? !1 : (e(i.update({ selection: n })), !0);
};
function ok(i, e) {
  let { main: t, ranges: n } = i.selection, s = i.wordAt(t.head), r = s && s.from == t.from && s.to == t.to;
  for (let o = !1, l = new gn(i.doc, e, n[n.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new gn(i.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), o = !0;
    } else {
      if (o && n.some((a) => a.from == l.value.from))
        continue;
      if (r) {
        let a = i.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const lk = ({ state: i, dispatch: e }) => {
  let { ranges: t } = i.selection;
  if (t.some((r) => r.from === r.to))
    return rk({ state: i, dispatch: e });
  let n = i.sliceDoc(t[0].from, t[0].to);
  if (i.selection.ranges.some((r) => i.sliceDoc(r.from, r.to) != n))
    return !1;
  let s = ok(i, n);
  return s ? (e(i.update({
    selection: i.selection.addRange(E.range(s.from, s.to), !1),
    effects: z.scrollIntoView(s.to)
  })), !0) : !1;
}, wn = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new vk(e),
      scrollToMatch: (e) => z.scrollIntoView(e)
    });
  }
});
class um {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Ux(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  /**
  @internal
  */
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, n) => n == "n" ? `
` : n == "r" ? "\r" : n == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new uk(this) : new ck(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, n) {
    let s = e.doc ? e : se.create({ doc: e });
    return n == null && (n = s.doc.length), this.regexp ? Gi(this, s, t, n) : Ui(this, s, t, n);
  }
}
class fm {
  constructor(e) {
    this.spec = e;
  }
}
function Ui(i, e, t, n) {
  return new gn(e.doc, i.unquoted, t, n, i.caseSensitive ? void 0 : (s) => s.toLowerCase(), i.wholeWord ? ak(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function ak(i, e) {
  return (t, n, s, r) => ((r > t || r + s.length < n) && (r = Math.max(0, t - 2), s = i.sliceString(r, Math.min(i.length, n + 2))), (e(jr(s, t - r)) != xe.Word || e(zr(s, t - r)) != xe.Word) && (e(zr(s, n - r)) != xe.Word || e(jr(s, n - r)) != xe.Word));
}
class ck extends fm {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, n) {
    let s = Ui(this.spec, e, n, e.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(e.doc.length, t + this.spec.unquoted.length);
      s = Ui(this.spec, e, 0, r).nextOverlapping();
    }
    return s.done || s.value.from == t && s.value.to == n ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, n) {
    for (let s = n; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length), o = Ui(this.spec, e, r, s), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (r == t)
        return null;
      s -= 1e4;
    }
  }
  prevMatch(e, t, n) {
    let s = this.prevMatchInRange(e, 0, t);
    return s || (s = this.prevMatchInRange(e, Math.max(0, n - this.spec.unquoted.length), e.doc.length)), s && (s.from != t || s.to != n) ? s : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let n = Ui(this.spec, e, 0, e.doc.length), s = [];
    for (; !n.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(e, t, n, s) {
    let r = Ui(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
function Gi(i, e, t, n) {
  return new cm(e.doc, i.search, {
    ignoreCase: !i.caseSensitive,
    test: i.wholeWord ? hk(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, n);
}
function jr(i, e) {
  return i.slice(ze(i, e, !1), e);
}
function zr(i, e) {
  return i.slice(e, ze(i, e));
}
function hk(i) {
  return (e, t, n) => !n[0].length || (i(jr(n.input, n.index)) != xe.Word || i(zr(n.input, n.index)) != xe.Word) && (i(zr(n.input, n.index + n[0].length)) != xe.Word || i(jr(n.input, n.index + n[0].length)) != xe.Word);
}
class uk extends fm {
  nextMatch(e, t, n) {
    let s = Gi(this.spec, e, n, e.doc.length).next();
    return s.done && (s = Gi(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, n) {
    for (let s = 1; ; s++) {
      let r = Math.max(
        t,
        n - s * 1e4
        /* FindPrev.ChunkSize */
      ), o = Gi(this.spec, e, r, n), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (r == t || l.from > r + 10))
        return l;
      if (r == t)
        return null;
    }
  }
  prevMatch(e, t, n) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&\d+])/g, (t, n) => n == "$" ? "$" : n == "&" ? e.match[0] : n != "0" && +n < e.match.length ? e.match[n] : t);
  }
  matchAll(e, t) {
    let n = Gi(this.spec, e, 0, e.doc.length), s = [];
    for (; !n.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(e, t, n, s) {
    let r = Gi(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(n + 250, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
const fs = /* @__PURE__ */ H.define(), uc = /* @__PURE__ */ H.define(), ui = /* @__PURE__ */ _e.define({
  create(i) {
    return new Jo(ua(i).create(), null);
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(fs) ? i = new Jo(t.value.create(), i.panel) : t.is(uc) && (i = new Jo(i.query, t.value ? fc : null));
    return i;
  },
  provide: (i) => as.from(i, (e) => e.panel)
});
class Jo {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const fk = /* @__PURE__ */ U.mark({ class: "cm-searchMatch" }), dk = /* @__PURE__ */ U.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), pk = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.view = i, this.decorations = this.highlight(i.state.field(ui));
  }
  update(i) {
    let e = i.state.field(ui);
    (e != i.startState.field(ui) || i.docChanged || i.selectionSet || i.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: i, panel: e }) {
    if (!e || !i.spec.valid)
      return U.none;
    let { view: t } = this, n = new di();
    for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
        a = r[++s].to;
      i.highlight(t.state, l, a, (c, h) => {
        let u = t.state.selection.ranges.some((f) => f.from == c && f.to == h);
        n.add(c, h, u ? dk : fk);
      });
    }
    return n.finish();
  }
}, {
  decorations: (i) => i.decorations
});
function Ts(i) {
  return (e) => {
    let t = e.state.field(ui, !1);
    return t && t.query.spec.valid ? i(e, t) : Om(e);
  };
}
const Br = /* @__PURE__ */ Ts((i, { query: e }) => {
  let { to: t } = i.state.selection.main, n = e.nextMatch(i.state, t, t);
  if (!n)
    return !1;
  let s = E.single(n.from, n.to), r = i.state.facet(wn);
  return i.dispatch({
    selection: s,
    effects: [dc(i, n), r.scrollToMatch(s.main, i)],
    userEvent: "select.search"
  }), pm(i), !0;
}), Yr = /* @__PURE__ */ Ts((i, { query: e }) => {
  let { state: t } = i, { from: n } = t.selection.main, s = e.prevMatch(t, n, n);
  if (!s)
    return !1;
  let r = E.single(s.from, s.to), o = i.state.facet(wn);
  return i.dispatch({
    selection: r,
    effects: [dc(i, s), o.scrollToMatch(r.main, i)],
    userEvent: "select.search"
  }), pm(i), !0;
}), Ok = /* @__PURE__ */ Ts((i, { query: e }) => {
  let t = e.matchAll(i.state, 1e3);
  return !t || !t.length ? !1 : (i.dispatch({
    selection: E.create(t.map((n) => E.range(n.from, n.to))),
    userEvent: "select.search.matches"
  }), !0);
}), mk = ({ state: i, dispatch: e }) => {
  let t = i.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: n, to: s } = t.main, r = [], o = 0;
  for (let l = new gn(i.doc, i.sliceDoc(n, s)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == n && (o = r.length), r.push(E.range(l.value.from, l.value.to));
  }
  return e(i.update({
    selection: E.create(r, o),
    userEvent: "select.search.matches"
  })), !0;
}, Vu = /* @__PURE__ */ Ts((i, { query: e }) => {
  let { state: t } = i, { from: n, to: s } = t.selection.main;
  if (t.readOnly)
    return !1;
  let r = e.nextMatch(t, n, n);
  if (!r)
    return !1;
  let o = [], l, a, c = [];
  if (r.from == n && r.to == s && (a = t.toText(e.getReplacement(r)), o.push({ from: r.from, to: r.to, insert: a }), r = e.nextMatch(t, r.from, r.to), c.push(z.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(n).number) + "."))), r) {
    let h = o.length == 0 || o[0].from >= r.to ? 0 : r.to - r.from - a.length;
    l = E.single(r.from - h, r.to - h), c.push(dc(i, r)), c.push(t.facet(wn).scrollToMatch(l.main, i));
  }
  return i.dispatch({
    changes: o,
    selection: l,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), gk = /* @__PURE__ */ Ts((i, { query: e }) => {
  if (i.state.readOnly)
    return !1;
  let t = e.matchAll(i.state, 1e9).map((s) => {
    let { from: r, to: o } = s;
    return { from: r, to: o, insert: e.getReplacement(s) };
  });
  if (!t.length)
    return !1;
  let n = i.state.phrase("replaced $ matches", t.length) + ".";
  return i.dispatch({
    changes: t,
    effects: z.announce.of(n),
    userEvent: "input.replace.all"
  }), !0;
});
function fc(i) {
  return i.state.facet(wn).createPanel(i);
}
function ua(i, e) {
  var t, n, s, r, o;
  let l = i.selection.main, a = l.empty || l.to > l.from + 100 ? "" : i.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let c = i.facet(wn);
  return new um({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : c.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (n = e == null ? void 0 : e.caseSensitive) !== null && n !== void 0 ? n : c.caseSensitive,
    literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : c.literal,
    regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : c.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : c.wholeWord
  });
}
function dm(i) {
  let e = ls(i, fc);
  return e && e.dom.querySelector("[main-field]");
}
function pm(i) {
  let e = dm(i);
  e && e == i.root.activeElement && e.select();
}
const Om = (i) => {
  let e = i.state.field(ui, !1);
  if (e && e.panel) {
    let t = dm(i);
    if (t && t != i.root.activeElement) {
      let n = ua(i.state, e.query.spec);
      n.valid && i.dispatch({ effects: fs.of(n) }), t.focus(), t.select();
    }
  } else
    i.dispatch({ effects: [
      uc.of(!0),
      e ? fs.of(ua(i.state, e.query.spec)) : H.appendConfig.of(Sk)
    ] });
  return !0;
}, mm = (i) => {
  let e = i.state.field(ui, !1);
  if (!e || !e.panel)
    return !1;
  let t = ls(i, fc);
  return t && t.dom.contains(i.root.activeElement) && i.focus(), i.dispatch({ effects: uc.of(!1) }), !0;
}, yk = [
  { key: "Mod-f", run: Om, scope: "editor search-panel" },
  { key: "F3", run: Br, shift: Yr, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Br, shift: Yr, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: mm, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: mk },
  { key: "Mod-Alt-g", run: Gx },
  { key: "Mod-d", run: lk, preventDefault: !0 }
];
class vk {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(ui).query.spec;
    this.commit = this.commit.bind(this), this.searchField = ye("input", {
      value: t.search,
      placeholder: ot(e, "Find"),
      "aria-label": ot(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = ye("input", {
      value: t.replace,
      placeholder: ot(e, "Replace"),
      "aria-label": ot(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = ye("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = ye("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = ye("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function n(s, r, o) {
      return ye("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = ye("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      n("next", () => Br(e), [ot(e, "next")]),
      n("prev", () => Yr(e), [ot(e, "previous")]),
      n("select", () => Ok(e), [ot(e, "all")]),
      ye("label", null, [this.caseField, ot(e, "match case")]),
      ye("label", null, [this.reField, ot(e, "regexp")]),
      ye("label", null, [this.wordField, ot(e, "by word")]),
      ...e.state.readOnly ? [] : [
        ye("br"),
        this.replaceField,
        n("replace", () => Vu(e), [ot(e, "replace")]),
        n("replaceAll", () => gk(e), [ot(e, "replace all")])
      ],
      ye("button", {
        name: "close",
        onclick: () => mm(e),
        "aria-label": ot(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new um({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: fs.of(e) }));
  }
  keydown(e) {
    vv(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Yr : Br)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Vu(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(fs) && !n.value.eq(this.query) && this.setQuery(n.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(wn).top;
  }
}
function ot(i, e) {
  return i.state.phrase(e);
}
const Ks = 30, Js = /[\s\.,:;?!]/;
function dc(i, { from: e, to: t }) {
  let n = i.state.doc.lineAt(e), s = i.state.doc.lineAt(t).to, r = Math.max(n.from, e - Ks), o = Math.min(s, t + Ks), l = i.state.sliceDoc(r, o);
  if (r != n.from) {
    for (let a = 0; a < Ks; a++)
      if (!Js.test(l[a + 1]) && Js.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - Ks; a--)
      if (!Js.test(l[a - 1]) && Js.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return z.announce.of(`${i.state.phrase("current match")}. ${l} ${i.state.phrase("on line")} ${n.number}.`);
}
const bk = /* @__PURE__ */ z.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), Sk = [
  ui,
  /* @__PURE__ */ xi.low(pk),
  bk
];
class gm {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, n, s) {
    this.state = e, this.pos = t, this.explicit = n, this.view = s, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = Ee(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), s = t.text.slice(n - t.from, this.pos - t.from), r = s.search(vm(e, !1));
    return r < 0 ? null : { from: n + r, to: this.pos, text: s.slice(r) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(e, t, n) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), n && n.onDocChange && (this.abortOnDocChange = !0));
  }
}
function Eu(i) {
  let e = Object.keys(i).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function xk(i) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of i) {
    e[s[0]] = !0;
    for (let r = 1; r < s.length; r++)
      t[s[r]] = !0;
  }
  let n = Eu(e) + Eu(t) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function ym(i) {
  let e = i.map((s) => typeof s == "string" ? { label: s } : s), [t, n] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : xk(e);
  return (s) => {
    let r = s.matchBefore(n);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null;
  };
}
function kk(i, e) {
  return (t) => {
    for (let n = Ee(t.state).resolveInner(t.pos, -1); n; n = n.parent) {
      if (i.indexOf(n.name) > -1)
        return null;
      if (n.type.isTop)
        break;
    }
    return e(t);
  };
}
class Lu {
  constructor(e, t, n, s) {
    this.completion = e, this.source = t, this.match = n, this.score = s;
  }
}
function fi(i) {
  return i.selection.main.from;
}
function vm(i, e) {
  var t;
  let { source: n } = i, s = e && n[0] != "^", r = n[n.length - 1] != "$";
  return !s && !r ? i : new RegExp(`${s ? "^" : ""}(?:${n})${r ? "$" : ""}`, (t = i.flags) !== null && t !== void 0 ? t : i.ignoreCase ? "i" : "");
}
const pc = /* @__PURE__ */ Jt.define();
function wk(i, e, t, n) {
  let { main: s } = i.selection, r = t - s.from, o = n - s.from;
  return Object.assign(Object.assign({}, i.changeByRange((l) => {
    if (l != s && t != n && i.sliceDoc(l.from + r, l.from + o) != i.sliceDoc(t, n))
      return { range: l };
    let a = i.toText(e);
    return {
      changes: { from: l.from + r, to: n == s.from ? l.to : l.from + o, insert: a },
      range: E.cursor(l.from + r + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const Xu = /* @__PURE__ */ new WeakMap();
function Qk(i) {
  if (!Array.isArray(i))
    return i;
  let e = Xu.get(i);
  return e || Xu.set(i, e = ym(i)), e;
}
const Ir = /* @__PURE__ */ H.define(), ds = /* @__PURE__ */ H.define();
class Pk {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let n = De(e, t), s = ut(n);
      this.chars.push(n);
      let r = e.slice(t, t + s), o = r.toUpperCase();
      this.folded.push(De(o == r ? r.toLowerCase() : o, 0)), t += s;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: n, any: s, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let k = De(e, 0), S = ut(k), $ = S == e.length ? 0 : -100;
      if (k != t[0]) if (k == n[0])
        $ += -200;
      else
        return null;
      return this.ret($, [0, S]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, c = 0;
    if (l < 0) {
      for (let k = 0, S = Math.min(e.length, 200); k < S && c < a; ) {
        let $ = De(e, k);
        ($ == t[c] || $ == n[c]) && (s[c++] = k), k += ut($);
      }
      if (c < a)
        return null;
    }
    let h = 0, u = 0, f = !1, d = 0, p = -1, O = -1, m = /[a-z]/.test(e), g = !0;
    for (let k = 0, S = Math.min(e.length, 200), $ = 0; k < S && u < a; ) {
      let C = De(e, k);
      l < 0 && (h < a && C == t[h] && (r[h++] = k), d < a && (C == t[d] || C == n[d] ? (d == 0 && (p = k), O = k + 1, d++) : d = 0));
      let M, P = C < 255 ? C >= 48 && C <= 57 || C >= 97 && C <= 122 ? 2 : C >= 65 && C <= 90 ? 1 : 0 : (M = Va(C)) != M.toLowerCase() ? 1 : M != M.toUpperCase() ? 2 : 0;
      (!k || P == 1 && m || $ == 0 && P != 0) && (t[u] == C || n[u] == C && (f = !0) ? o[u++] = k : o.length && (g = !1)), $ = P, k += ut(C);
    }
    return u == a && o[0] == 0 && g ? this.result(-100 + (f ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (O == e.length ? 0 : -100), [0, O]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [p, O]) : u == a ? this.result(-100 + (f ? -200 : 0) + -700 + (g ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, n) {
    let s = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? ut(De(n, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(e - n.length, s);
  }
}
class $k {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), n = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return n == null ? null : (this.matched = [0, t.length], this.score = n + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const Le = /* @__PURE__ */ Y.define({
  combine(i) {
    return Pt(i, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: Ck,
      filterStrict: !1,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (n) => Du(e(n), t(n)),
      optionClass: (e, t) => (n) => Du(e(n), t(n)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function Du(i, e) {
  return i ? e ? i + " " + e : i : e;
}
function Ck(i, e, t, n, s, r) {
  let o = i.textDirection == Se.RTL, l = o, a = !1, c = "top", h, u, f = e.left - s.left, d = s.right - e.right, p = n.right - n.left, O = n.bottom - n.top;
  if (l && f < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, f) && (l = !0), p <= (l ? f : d))
    h = Math.max(s.top, Math.min(t.top, s.bottom - O)) - e.top, u = Math.min(400, l ? f : d);
  else {
    a = !0, u = Math.min(
      400,
      (o ? e.right : s.right - e.left) - 30
      /* Info.Margin */
    );
    let k = s.bottom - e.bottom;
    k >= O || k > e.top ? h = t.bottom - e.top : (c = "bottom", h = e.bottom - t.top);
  }
  let m = (e.bottom - e.top) / r.offsetHeight, g = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${c}: ${h / m}px; max-width: ${u / g}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function Tk(i) {
  let e = i.addToOptions.slice();
  return i.icons && e.push({
    render(t) {
      let n = document.createElement("div");
      return n.classList.add("cm-completionIcon"), t.type && n.classList.add(...t.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), n.setAttribute("aria-hidden", "true"), n;
    },
    position: 20
  }), e.push({
    render(t, n, s, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = t.displayLabel || t.label, a = 0;
      for (let c = 0; c < r.length; ) {
        let h = r[c++], u = r[c++];
        h > a && o.appendChild(document.createTextNode(l.slice(a, h)));
        let f = o.appendChild(document.createElement("span"));
        f.appendChild(document.createTextNode(l.slice(h, u))), f.className = "cm-completionMatchedText", a = u;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let n = document.createElement("span");
      return n.className = "cm-completionDetail", n.textContent = t.detail, n;
    },
    position: 80
  }), e.sort((t, n) => t.position - n.position).map((t) => t.render);
}
function el(i, e, t) {
  if (i <= t)
    return { from: 0, to: i };
  if (e < 0 && (e = 0), e <= i >> 1) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let n = Math.floor((i - e) / t);
  return { from: i - (n + 1) * t, to: i - n * t };
}
class Ak {
  constructor(e, t, n) {
    this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = e.state.field(t), { options: r, selected: o } = s.open, l = e.state.facet(Le);
    this.optionContent = Tk(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = el(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: c } = e.state.field(t).open;
      for (let h = a.target, u; h && h != this.dom; h = h.parentNode)
        if (h.nodeName == "LI" && (u = /-(\d+)$/.exec(h.id)) && +u[1] < c.length) {
          this.applyCompletion(e, c[+u[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let c = e.state.field(this.stateField, !1);
      c && c.tooltip && e.state.facet(Le).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: ds.of(null) });
    }), this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let n = e.state.field(this.stateField), s = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), n != s) {
      let { options: r, selected: o, disabled: l } = n.open;
      (!s.open || s.open.options != r) && (this.range = el(r.length, o, e.state.facet(Le).maxRenderedOptions), this.showOptions(r, n.id)), this.updateSel(), l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let n of this.currentClass.split(" "))
        n && this.dom.classList.remove(n);
      for (let n of t.split(" "))
        n && this.dom.classList.add(n);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = el(t.options.length, t.selected, this.view.state.facet(Le).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: n } = t.options[t.selected], { info: s } = n;
      if (!s)
        return;
      let r = typeof s == "string" ? document.createTextNode(s) : s(n);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, n);
      }).catch((o) => Ue(this.view.state, o, "completion info")) : this.addInfoPane(r, n);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let n = this.info = document.createElement("div");
    if (n.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      n.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: s, destroy: r } = e;
      n.appendChild(s), this.infoDestroy = r || null;
    }
    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let n = this.list.firstChild, s = this.range.from; n; n = n.nextSibling, s++)
      n.nodeName != "LI" || !n.id ? s-- : s == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && n.removeAttribute("aria-selected");
    return t && _k(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), s = e.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.defaultView || window;
      r = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(Le).positionInfo(this.view, t, s, n, r, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, n) {
    const s = document.createElement("ul");
    s.id = t, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let r = null;
    for (let o = n.from; o < n.to; o++) {
      let { completion: l, match: a } = e[o], { section: c } = l;
      if (c) {
        let f = typeof c == "string" ? c : c.name;
        if (f != r && (o > n.from || n.from == 0))
          if (r = f, typeof c != "string" && c.header)
            s.appendChild(c.header(c));
          else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = f;
          }
      }
      const h = s.appendChild(document.createElement("li"));
      h.id = t + "-" + o, h.setAttribute("role", "option");
      let u = this.optionClass(l);
      u && (h.className = u);
      for (let f of this.optionContent) {
        let d = f(l, this.view.state, this.view, a);
        d && h.appendChild(d);
      }
    }
    return n.from && s.classList.add("cm-completionListIncompleteTop"), n.to < e.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Zk(i, e) {
  return (t) => new Ak(t, i, e);
}
function _k(i, e) {
  let t = i.getBoundingClientRect(), n = e.getBoundingClientRect(), s = t.height / i.offsetHeight;
  n.top < t.top ? i.scrollTop -= (t.top - n.top) / s : n.bottom > t.bottom && (i.scrollTop += (n.bottom - t.bottom) / s);
}
function qu(i) {
  return (i.boost || 0) * 100 + (i.apply ? 10 : 0) + (i.info ? 5 : 0) + (i.type ? 1 : 0);
}
function Mk(i, e) {
  let t = [], n = null, s = (c) => {
    t.push(c);
    let { section: h } = c.completion;
    if (h) {
      n || (n = []);
      let u = typeof h == "string" ? h : h.name;
      n.some((f) => f.name == u) || n.push(typeof h == "string" ? { name: u } : h);
    }
  }, r = e.facet(Le);
  for (let c of i)
    if (c.hasResult()) {
      let h = c.result.getMatch;
      if (c.result.filter === !1)
        for (let u of c.result.options)
          s(new Lu(u, c.source, h ? h(u) : [], 1e9 - t.length));
      else {
        let u = e.sliceDoc(c.from, c.to), f, d = r.filterStrict ? new $k(u) : new Pk(u);
        for (let p of c.result.options)
          if (f = d.match(p.label)) {
            let O = p.displayLabel ? h ? h(p, f.matched) : [] : f.matched;
            s(new Lu(p, c.source, O, f.score + (p.boost || 0)));
          }
      }
    }
  if (n) {
    let c = /* @__PURE__ */ Object.create(null), h = 0, u = (f, d) => {
      var p, O;
      return ((p = f.rank) !== null && p !== void 0 ? p : 1e9) - ((O = d.rank) !== null && O !== void 0 ? O : 1e9) || (f.name < d.name ? -1 : 1);
    };
    for (let f of n.sort(u))
      h -= 1e5, c[f.name] = h;
    for (let f of t) {
      let { section: d } = f.completion;
      d && (f.score += c[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [], l = null, a = r.compareCompletions;
  for (let c of t.sort((h, u) => u.score - h.score || a(h.completion, u.completion))) {
    let h = c.completion;
    !l || l.label != h.label || l.detail != h.detail || l.type != null && h.type != null && l.type != h.type || l.apply != h.apply || l.boost != h.boost ? o.push(c) : qu(c.completion) > qu(l) && (o[o.length - 1] = c), l = c.completion;
  }
  return o;
}
class Ji {
  constructor(e, t, n, s, r, o) {
    this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Ji(this.options, ju(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, n, s, r, o) {
    if (s && !o && e.some(
      (c) => c.state == 1
      /* State.Pending */
    ))
      return s.setDisabled();
    let l = Mk(e, t);
    if (!l.length)
      return s && e.some(
        (c) => c.state == 1
        /* State.Pending */
      ) ? s.setDisabled() : null;
    let a = t.facet(Le).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let c = s.options[s.selected].completion;
      for (let h = 0; h < l.length; h++)
        if (l[h].completion == c) {
          a = h;
          break;
        }
    }
    return new Ji(l, ju(n, a), {
      pos: e.reduce((c, h) => h.hasResult() ? Math.min(c, h.from) : c, 1e8),
      create: Dk,
      above: r.aboveCursor
    }, s ? s.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new Ji(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Ji(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Nr {
  constructor(e, t, n) {
    this.active = e, this.id = t, this.open = n;
  }
  static start() {
    return new Nr(Lk, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, n = t.facet(Le), r = (n.override || t.languageDataAt("autocomplete", fi(t)).map(Qk)).map((a) => (this.active.find((h) => h.source == a) || new ct(
      a,
      this.active.some(
        (h) => h.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, n));
    r.length == this.active.length && r.every((a, c) => a == this.active[c]) && (r = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(Oc));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || r.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !Rk(r, this.active) || l ? o = Ji.build(r, t, this.id, o, n, l) : o && o.disabled && !r.some(
      (a) => a.state == 1
      /* State.Pending */
    ) && (o = null), !o && r.every(
      (a) => a.state != 1
      /* State.Pending */
    ) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new ct(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(Sm) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new Nr(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Vk : Ek;
  }
}
function Rk(i, e) {
  if (i == e)
    return !0;
  for (let t = 0, n = 0; ; ) {
    for (; t < i.length && !i[t].hasResult; )
      t++;
    for (; n < e.length && !e[n].hasResult; )
      n++;
    let s = t == i.length, r = n == e.length;
    if (s || r)
      return s == r;
    if (i[t++].result != e[n++].result)
      return !1;
  }
}
const Vk = {
  "aria-autocomplete": "list"
}, Ek = {};
function ju(i, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i
  };
  return e > -1 && (t["aria-activedescendant"] = i + "-" + e), t;
}
const Lk = [];
function bm(i, e) {
  if (i.isUserEvent("input.complete")) {
    let n = i.annotation(pc);
    if (n && e.activateOnCompletion(n))
      return 12;
  }
  let t = i.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : i.isUserEvent("delete.backward") ? 2 : i.selection ? 8 : i.docChanged ? 16 : 0;
}
class ct {
  constructor(e, t, n = -1) {
    this.source = e, this.state = t, this.explicitPos = n;
  }
  hasResult() {
    return !1;
  }
  update(e, t) {
    let n = bm(e, t), s = this;
    (n & 8 || n & 16 && this.touches(e)) && (s = new ct(
      s.source,
      0
      /* State.Inactive */
    )), n & 4 && s.state == 0 && (s = new ct(
      this.source,
      1
      /* State.Pending */
    )), s = s.updateFor(e, n);
    for (let r of e.effects)
      if (r.is(Ir))
        s = new ct(s.source, 1, r.value ? fi(e.state) : -1);
      else if (r.is(ds))
        s = new ct(
          s.source,
          0
          /* State.Inactive */
        );
      else if (r.is(Oc))
        for (let o of r.value)
          o.source == s.source && (s = o);
    return s;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new ct(this.source, this.state, e.mapPos(this.explicitPos));
  }
  touches(e) {
    return e.changes.touchesRange(fi(e.state));
  }
}
class on extends ct {
  constructor(e, t, n, s, r) {
    super(e, 2, t), this.result = n, this.from = s, this.to = r;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var n;
    if (!(t & 3))
      return this.map(e.changes);
    let s = this.result;
    s.map && !e.changes.empty && (s = s.map(s, e.changes));
    let r = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = fi(e.state);
    if ((this.explicitPos < 0 ? l <= r : l < this.from) || l > o || !s || t & 2 && fi(e.startState) == this.from)
      return new ct(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos);
    return Xk(s.validFor, e.state, r, o) ? new on(this.source, a, s, r, o) : s.update && (s = s.update(s, r, o, new gm(e.state, l, a >= 0))) ? new on(this.source, a, s, s.from, (n = s.to) !== null && n !== void 0 ? n : fi(e.state)) : new ct(this.source, 1, a);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new on(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new ct(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function Xk(i, e, t, n) {
  if (!i)
    return !1;
  let s = e.sliceDoc(t, n);
  return typeof i == "function" ? i(s, t, n, e) : vm(i, !0).test(s);
}
const Oc = /* @__PURE__ */ H.define({
  map(i, e) {
    return i.map((t) => t.map(e));
  }
}), Sm = /* @__PURE__ */ H.define(), tt = /* @__PURE__ */ _e.define({
  create() {
    return Nr.start();
  },
  update(i, e) {
    return i.update(e);
  },
  provide: (i) => [
    ro.from(i, (e) => e.tooltip),
    z.contentAttributes.from(i, (e) => e.attrs)
  ]
});
function mc(i, e) {
  const t = e.completion.apply || e.completion.label;
  let n = i.state.field(tt).active.find((s) => s.source == e.source);
  return n instanceof on ? (typeof t == "string" ? i.dispatch(Object.assign(Object.assign({}, wk(i.state, t, n.from, n.to)), { annotations: pc.of(e.completion) })) : t(i, e.completion, n.from, n.to), !0) : !1;
}
const Dk = /* @__PURE__ */ Zk(tt, mc);
function er(i, e = "option") {
  return (t) => {
    let n = t.state.field(tt, !1);
    if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < t.state.facet(Le).interactionDelay)
      return !1;
    let s = 1, r;
    e == "page" && (r = jp(t, n.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = n.open.options, l = n.open.selected > -1 ? n.open.selected + s * (i ? 1 : -1) : i ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: Sm.of(l) }), !0;
  };
}
const qk = (i) => {
  let e = i.state.field(tt, !1);
  return i.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < i.state.facet(Le).interactionDelay ? !1 : mc(i, e.open.options[e.open.selected]);
}, zu = (i) => i.state.field(tt, !1) ? (i.dispatch({ effects: Ir.of(!0) }), !0) : !1, jk = (i) => {
  let e = i.state.field(tt, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (i.dispatch({ effects: ds.of(null) }), !0);
};
class zk {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Bk = 50, Yk = 1e3, Ik = /* @__PURE__ */ we.fromClass(class {
  constructor(i) {
    this.view = i, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of i.state.field(tt).active)
      e.state == 1 && this.startQuery(e);
  }
  update(i) {
    let e = i.state.field(tt), t = i.state.facet(Le);
    if (!i.selectionSet && !i.docChanged && i.startState.field(tt) == e)
      return;
    let n = i.transactions.some((r) => {
      let o = bm(r, t);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (n || o.context.abortOnDocChange && i.docChanged || o.updates.length + i.transactions.length > Bk && Date.now() - o.time > Yk) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            Ue(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        o.updates.push(...i.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), i.transactions.some((r) => r.effects.some((o) => o.is(Ir))) && (this.pendingStart = !0);
    let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((r) => r.state == 1 && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let r of i.transactions)
        r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: i } = this.view, e = i.field(tt);
    for (let t of e.active)
      t.state == 1 && !this.running.some((n) => n.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Le).updateSyncTime));
  }
  startQuery(i) {
    let { state: e } = this.view, t = fi(e), n = new gm(e, t, i.explicitPos == t, this.view), s = new zk(i, n);
    this.running.push(s), Promise.resolve(i.source(n)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: ds.of(null) }), Ue(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((i) => i.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Le).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var i;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(Le), n = this.view.state.field(tt);
    for (let s = 0; s < this.running.length; s++) {
      let r = this.running[s];
      if (r.done === void 0)
        continue;
      if (this.running.splice(s--, 1), r.done) {
        let l = new on(r.active.source, r.active.explicitPos, r.done, r.done.from, (i = r.done.to) !== null && i !== void 0 ? i : fi(r.updates.length ? r.updates[0].startState : this.view.state));
        for (let a of r.updates)
          l = l.update(a, t);
        if (l.hasResult()) {
          e.push(l);
          continue;
        }
      }
      let o = n.active.find((l) => l.source == r.active.source);
      if (o && o.state == 1)
        if (r.done == null) {
          let l = new ct(
            r.active.source,
            0
            /* State.Inactive */
          );
          for (let a of r.updates)
            l = l.update(a, t);
          l.state != 1 && e.push(l);
        } else
          this.startQuery(o);
    }
    (e.length || n.open && n.open.disabled) && this.view.dispatch({ effects: Oc.of(e) });
  }
}, {
  eventHandlers: {
    blur(i) {
      let e = this.view.state.field(tt, !1);
      if (e && e.tooltip && this.view.state.facet(Le).closeOnBlur) {
        let t = e.open && jp(this.view, e.open.tooltip);
        (!t || !t.dom.contains(i.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: ds.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Ir.of(!1) }), 20), this.composing = 0;
    }
  }
}), Nk = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), Wk = /* @__PURE__ */ xi.highest(/* @__PURE__ */ z.domEventHandlers({
  keydown(i, e) {
    let t = e.state.field(tt, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || i.key.length > 1 || i.ctrlKey && !(Nk && i.altKey) || i.metaKey)
      return !1;
    let n = t.open.options[t.open.selected], s = t.active.find((o) => o.source == n.source), r = n.completion.commitCharacters || s.result.commitCharacters;
    return r && r.indexOf(i.key) > -1 && mc(e, n), !1;
  }
})), xm = /* @__PURE__ */ z.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
});
class Uk {
  constructor(e, t, n, s) {
    this.field = e, this.line = t, this.from = n, this.to = s;
  }
}
class gc {
  constructor(e, t, n) {
    this.field = e, this.from = t, this.to = n;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, je.TrackDel), n = e.mapPos(this.to, 1, je.TrackDel);
    return t == null || n == null ? null : new gc(this.field, t, n);
  }
}
class yc {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let n = [], s = [t], r = e.doc.lineAt(t), o = /^\s*/.exec(r.text)[0];
    for (let a of this.lines) {
      if (n.length) {
        let c = o, h = /^\t*/.exec(a)[0].length;
        for (let u = 0; u < h; u++)
          c += e.facet(Qs);
        s.push(t + c.length - h), a = c + a.slice(h);
      }
      n.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new gc(a.field, s[a.line] + a.from, s[a.line] + a.to));
    return { text: n, ranges: l };
  }
  static parse(e) {
    let t = [], n = [], s = [], r;
    for (let o of e.split(/\r\n?|\n/)) {
      for (; r = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(o); ) {
        let l = r[1] ? +r[1] : null, a = r[2] || r[3] || "", c = -1, h = a.replace(/\\[{}]/g, (u) => u[1]);
        for (let u = 0; u < t.length; u++)
          (l != null ? t[u].seq == l : h && t[u].name == h) && (c = u);
        if (c < 0) {
          let u = 0;
          for (; u < t.length && (l == null || t[u].seq != null && t[u].seq < l); )
            u++;
          t.splice(u, 0, { seq: l, name: h }), c = u;
          for (let f of s)
            f.field >= c && f.field++;
        }
        s.push(new Uk(c, n.length, r.index, r.index + h.length)), o = o.slice(0, r.index) + a + o.slice(r.index + r[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, c) => {
        for (let h of s)
          h.line == n.length && h.from > c && (h.from--, h.to--);
        return a;
      }), n.push(o);
    }
    return new yc(n, s);
  }
}
let Gk = /* @__PURE__ */ U.widget({ widget: /* @__PURE__ */ new class extends Bt {
  toDOM() {
    let i = document.createElement("span");
    return i.className = "cm-snippetFieldPosition", i;
  }
  ignoreEvent() {
    return !1;
  }
}() }), Fk = /* @__PURE__ */ U.mark({ class: "cm-snippetField" });
class Qn {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = U.set(e.map((n) => (n.from == n.to ? Gk : Fk).range(n.from, n.to)));
  }
  map(e) {
    let t = [];
    for (let n of this.ranges) {
      let s = n.map(e);
      if (!s)
        return null;
      t.push(s);
    }
    return new Qn(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((n) => n.field == this.active && n.from <= t.from && n.to >= t.to));
  }
}
const As = /* @__PURE__ */ H.define({
  map(i, e) {
    return i && i.map(e);
  }
}), Hk = /* @__PURE__ */ H.define(), ps = /* @__PURE__ */ _e.define({
  create() {
    return null;
  },
  update(i, e) {
    for (let t of e.effects) {
      if (t.is(As))
        return t.value;
      if (t.is(Hk) && i)
        return new Qn(i.ranges, t.value);
    }
    return i && e.docChanged && (i = i.map(e.changes)), i && e.selection && !i.selectionInsideField(e.selection) && (i = null), i;
  },
  provide: (i) => z.decorations.from(i, (e) => e ? e.deco : U.none)
});
function vc(i, e) {
  return E.create(i.filter((t) => t.field == e).map((t) => E.range(t.from, t.to)));
}
function Kk(i) {
  let e = yc.parse(i);
  return (t, n, s, r) => {
    let { text: o, ranges: l } = e.instantiate(t.state, s), a = {
      changes: { from: s, to: r, insert: ce.of(o) },
      scrollIntoView: !0,
      annotations: n ? [pc.of(n), Te.userEvent.of("input.complete")] : void 0
    };
    if (l.length && (a.selection = vc(l, 0)), l.some((c) => c.field > 0)) {
      let c = new Qn(l, 0), h = a.effects = [As.of(c)];
      t.state.field(ps, !1) === void 0 && h.push(H.appendConfig.of([ps, nw, sw, xm]));
    }
    t.dispatch(t.state.update(a));
  };
}
function km(i) {
  return ({ state: e, dispatch: t }) => {
    let n = e.field(ps, !1);
    if (!n || i < 0 && n.active == 0)
      return !1;
    let s = n.active + i, r = i > 0 && !n.ranges.some((o) => o.field == s + i);
    return t(e.update({
      selection: vc(n.ranges, s),
      effects: As.of(r ? null : new Qn(n.ranges, s)),
      scrollIntoView: !0
    })), !0;
  };
}
const Jk = ({ state: i, dispatch: e }) => i.field(ps, !1) ? (e(i.update({ effects: As.of(null) })), !0) : !1, ew = /* @__PURE__ */ km(1), tw = /* @__PURE__ */ km(-1), iw = [
  { key: "Tab", run: ew, shift: tw },
  { key: "Escape", run: Jk }
], Bu = /* @__PURE__ */ Y.define({
  combine(i) {
    return i.length ? i[0] : iw;
  }
}), nw = /* @__PURE__ */ xi.highest(/* @__PURE__ */ gi.compute([Bu], (i) => i.facet(Bu)));
function Ke(i, e) {
  return Object.assign(Object.assign({}, e), { apply: Kk(i) });
}
const sw = /* @__PURE__ */ z.domEventHandlers({
  mousedown(i, e) {
    let t = e.state.field(ps, !1), n;
    if (!t || (n = e.posAtCoords({ x: i.clientX, y: i.clientY })) == null)
      return !1;
    let s = t.ranges.find((r) => r.from <= n && r.to >= n);
    return !s || s.field == t.active ? !1 : (e.dispatch({
      selection: vc(t.ranges, s.field),
      effects: As.of(t.ranges.some((r) => r.field > s.field) ? new Qn(t.ranges, s.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), Os = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Ti = /* @__PURE__ */ H.define({
  map(i, e) {
    let t = e.mapPos(i, -1, je.TrackAfter);
    return t ?? void 0;
  }
}), bc = /* @__PURE__ */ new class extends Li {
}();
bc.startSide = 1;
bc.endSide = -1;
const wm = /* @__PURE__ */ _e.define({
  create() {
    return ae.empty;
  },
  update(i, e) {
    if (i = i.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      i = i.update({ filter: (n) => n >= t.from && n <= t.to });
    }
    for (let t of e.effects)
      t.is(Ti) && (i = i.update({ add: [bc.range(t.value, t.value + 1)] }));
    return i;
  }
});
function rw() {
  return [lw, wm];
}
const tl = "()[]{}<>";
function Qm(i) {
  for (let e = 0; e < tl.length; e += 2)
    if (tl.charCodeAt(e) == i)
      return tl.charAt(e + 1);
  return Va(i < 128 ? i : i + 1);
}
function Pm(i, e) {
  return i.languageDataAt("closeBrackets", e)[0] || Os;
}
const ow = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), lw = /* @__PURE__ */ z.inputHandler.of((i, e, t, n) => {
  if ((ow ? i.composing : i.compositionStarted) || i.state.readOnly)
    return !1;
  let s = i.state.selection.main;
  if (n.length > 2 || n.length == 2 && ut(De(n, 0)) == 1 || e != s.from || t != s.to)
    return !1;
  let r = hw(i.state, n);
  return r ? (i.dispatch(r), !0) : !1;
}), aw = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let n = Pm(i, i.selection.main.head).brackets || Os.brackets, s = null, r = i.changeByRange((o) => {
    if (o.empty) {
      let l = uw(i.doc, o.head);
      for (let a of n)
        if (a == l && go(i.doc, o.head) == Qm(De(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: E.cursor(o.head - a.length)
          };
    }
    return { range: s = o };
  });
  return s || e(i.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, cw = [
  { key: "Backspace", run: aw }
];
function hw(i, e) {
  let t = Pm(i, i.selection.main.head), n = t.brackets || Os.brackets;
  for (let s of n) {
    let r = Qm(De(s, 0));
    if (e == s)
      return r == s ? pw(i, s, n.indexOf(s + s + s) > -1, t) : fw(i, s, r, t.before || Os.before);
    if (e == r && $m(i, i.selection.main.from))
      return dw(i, s, r);
  }
  return null;
}
function $m(i, e) {
  let t = !1;
  return i.field(wm).between(0, i.doc.length, (n) => {
    n == e && (t = !0);
  }), t;
}
function go(i, e) {
  let t = i.sliceString(e, e + 2);
  return t.slice(0, ut(De(t, 0)));
}
function uw(i, e) {
  let t = i.sliceString(e - 2, e);
  return ut(De(t, 0)) == t.length ? t : t.slice(1);
}
function fw(i, e, t, n) {
  let s = null, r = i.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: Ti.of(o.to + e.length),
        range: E.range(o.anchor + e.length, o.head + e.length)
      };
    let l = go(i.doc, o.head);
    return !l || /\s/.test(l) || n.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: Ti.of(o.head + e.length),
      range: E.cursor(o.head + e.length)
    } : { range: s = o };
  });
  return s ? null : i.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function dw(i, e, t) {
  let n = null, s = i.changeByRange((r) => r.empty && go(i.doc, r.head) == t ? {
    changes: { from: r.head, to: r.head + t.length, insert: t },
    range: E.cursor(r.head + t.length)
  } : n = { range: r });
  return n ? null : i.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function pw(i, e, t, n) {
  let s = n.stringPrefixes || Os.stringPrefixes, r = null, o = i.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Ti.of(l.to + e.length),
        range: E.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, c = go(i.doc, a), h;
    if (c == e) {
      if (Yu(i, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Ti.of(a + e.length),
          range: E.cursor(a + e.length)
        };
      if ($m(i, a)) {
        let f = t && i.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + f.length, insert: f },
          range: E.cursor(a + f.length)
        };
      }
    } else {
      if (t && i.sliceDoc(a - 2 * e.length, a) == e + e && (h = Iu(i, a - 2 * e.length, s)) > -1 && Yu(i, h))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Ti.of(a + e.length),
          range: E.cursor(a + e.length)
        };
      if (i.charCategorizer(a)(c) != xe.Word && Iu(i, a, s) > -1 && !Ow(i, a, e, s))
        return {
          changes: { insert: e + e, from: a },
          effects: Ti.of(a + e.length),
          range: E.cursor(a + e.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : i.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Yu(i, e) {
  let t = Ee(i).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function Ow(i, e, t, n) {
  let s = Ee(i).resolveInner(e, -1), r = n.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = i.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)), a = l.indexOf(t);
    if (!a || a > -1 && n.indexOf(l.slice(0, a)) > -1) {
      let h = s.firstChild;
      for (; h && h.from == s.from && h.to - h.from > t.length + a; ) {
        if (i.sliceDoc(h.to - t.length, h.to) == t)
          return !1;
        h = h.firstChild;
      }
      return !0;
    }
    let c = s.to == e && s.parent;
    if (!c)
      break;
    s = c;
  }
  return !1;
}
function Iu(i, e, t) {
  let n = i.charCategorizer(e);
  if (n(i.sliceDoc(e - 1, e)) != xe.Word)
    return e;
  for (let s of t) {
    let r = e - s.length;
    if (i.sliceDoc(r, e) == s && n(i.sliceDoc(r - 1, r)) != xe.Word)
      return r;
  }
  return -1;
}
function mw(i = {}) {
  return [
    Wk,
    tt,
    Le.of(i),
    Ik,
    gw,
    xm
  ];
}
const Cm = [
  { key: "Ctrl-Space", run: zu },
  { mac: "Alt-`", run: zu },
  { key: "Escape", run: jk },
  { key: "ArrowDown", run: /* @__PURE__ */ er(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ er(!1) },
  { key: "PageDown", run: /* @__PURE__ */ er(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ er(!1, "page") },
  { key: "Enter", run: qk }
], gw = /* @__PURE__ */ xi.highest(/* @__PURE__ */ gi.computeN([Le], (i) => i.facet(Le).defaultKeymap ? [Cm] : [])), fa = [
  Ob(),
  yb(),
  Dp(),
  bO(),
  rS(),
  Ep(),
  Tv(),
  se.allowMultipleSelections.of(!0),
  Nb(),
  sc(dO, { fallback: !0 }),
  OS(),
  rw(),
  mw(),
  Uv(),
  Hv(),
  qv(),
  Jx(),
  gi.of([
    ...cw,
    ...Xr,
    ...yk,
    ...wO,
    ...tS,
    ...Cm,
    ...Lx
  ])
], yw = [
  Dp(),
  bO(),
  Ep(),
  sc(dO, { fallback: !0 }),
  gi.of([
    ...Xr,
    ...wO
  ])
];
/**
 * vue-codemirror6
 *
 * @description CodeMirror6 Component for vue2 and vue3.
 * @author Logue <logue@hotmail.co.jp>
 * @copyright 2022-2024 By Masashi Yoshikawa All rights reserved.
 * @license MIT
 * @version 1.3.4
 * @see {@link https://github.com/logue/vue-codemirror6}
 */
const vw = (i) => i ? Object.entries(i).reduce((e, [t, n]) => (t = t.charAt(0).toUpperCase() + t.slice(1), t = `on${t}`, { ...e, [t]: n }), {}) : {};
function Nu(i, e = {}, t) {
  const { props: n, domProps: s, on: r, ...o } = e, l = r ? vw(r) : {};
  return If(
    i,
    { ...o, ...n, ...s, ...l },
    t
  );
}
const bw = (i) => typeof i == "function" ? i() : i;
var Sw = zf({
  /** Component Name */
  name: "CodeMirror",
  /** Model Definition */
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  /** Props Definition */
  props: {
    /** Model value */
    modelValue: {
      type: String,
      default: ""
    },
    /**
     * Theme
     *
     * @see {@link https://codemirror.net/docs/ref/#view.EditorView^theme}
     */
    theme: {
      type: Object,
      default: () => ({})
    },
    /** Dark Mode */
    dark: {
      type: Boolean,
      default: !1
    },
    /**
     * Use Basic Setup
     *
     * @see {@link https://codemirror.net/docs/ref/#codemirror.basicSetup}
     */
    basic: {
      type: Boolean,
      default: !1
    },
    /**
     * Use Minimal Setup (The basic setting has priority.)
     *
     * @see {@link https://codemirror.net/docs/ref/#codemirror.minimalSetup}
     */
    minimal: {
      type: Boolean,
      default: !1
    },
    /**
     * Placeholder
     *
     * @see {@link https://codemirror.net/docs/ref/#view.placeholder}
     */
    placeholder: {
      type: String,
      default: void 0
    },
    /**
     * Line wrapping
     *
     * An extension that enables line wrapping in the editor (by setting CSS white-space to pre-wrap in the content).
     *
     * @see {@link https://codemirror.net/docs/ref/#view.EditorView%5ElineWrapping}
     */
    wrap: {
      type: Boolean,
      default: !1
    },
    /**
     * Allow tab key indent.
     *
     * @see {@link https://codemirror.net/examples/tab/}
     */
    tab: {
      type: Boolean,
      default: !1
    },
    /**
     * Tab character
     */
    indentUnit: {
      type: String,
      default: void 0
    },
    /**
     * Allow Multiple Selection.
     *
     * @see {@link https://codemirror.net/docs/ref/#state.EditorState^allowMultipleSelections}
     */
    allowMultipleSelections: {
      type: Boolean,
      default: !1
    },
    /**
     * Tab size
     *
     * @see {@link https://codemirror.net/docs/ref/#state.EditorState^tabSize}
     */
    tabSize: {
      type: Number,
      default: void 0
    },
    /**
     * Set line break (separetor) char.
     *
     * @see {@link https://codemirror.net/docs/ref/#state.EditorState^lineSeparator}
     */
    lineSeparator: {
      type: String,
      default: void 0
    },
    /**
     * Readonly
     *
     * @see {@link https://codemirror.net/docs/ref/#state.EditorState^readOnly}
     */
    readonly: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable input.
     *
     * This is the reversed value of the CodeMirror editable.
     * Similar to `readonly`, but setting this value to true disables dragging.
     *
     * @see {@link https://codemirror.net/docs/ref/#view.EditorView^editable}
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Additional Extension
     *
     * @see {@link https://codemirror.net/docs/ref/#state.Extension}
     */
    extensions: {
      type: Array,
      default: () => []
    },
    /**
     * Language Phreses
     *
     * @see {@link https://codemirror.net/examples/translate/}
     */
    phrases: {
      type: Object,
      default: () => {
      }
    },
    /**
     * CodeMirror Language
     *
     * @see {@link https://codemirror.net/docs/ref/#language}
     */
    lang: {
      type: Object,
      default: () => {
      }
    },
    /**
     * CodeMirror Linter
     *
     * @see {@link https://codemirror.net/docs/ref/#lint.linter}
     */
    linter: {
      type: Function,
      default: void 0
    },
    /**
     * Linter Config
     *
     * @see {@link https://codemirror.net/docs/ref/#lint.linter^config}
     */
    linterConfig: {
      type: Object,
      default: () => ({})
    },
    /**
     * Forces any linters configured to run when the editor is idle to run right away.
     *
     * @see {@link https://codemirror.net/docs/ref/#lint.forceLinting}
     */
    forceLinting: {
      type: Boolean,
      default: !1
    },
    /**
     * Show Linter Gutter
     *
     * An area to 🔴 the lines with errors will be displayed.
     * This feature is not enabled if `linter` is not specified.
     *
     * @see {@link https://codemirror.net/docs/ref/#lint.lintGutter}
     */
    gutter: {
      type: Boolean,
      default: !1
    },
    /**
     * Gutter Config
     *
     * @see {@link https://codemirror.net/docs/ref/#lint.lintGutter^config}
     */
    gutterConfig: {
      type: Object,
      default: () => {
      }
    },
    /**
     * Using tag
     */
    tag: {
      type: String,
      default: "div"
    }
  },
  /** Emits */
  emits: {
    /** Model Update */
    "update:modelValue": (i = "") => !0,
    /** CodeMirror ViewUpdate */
    update: (i) => !0,
    /** CodeMirror onReady */
    ready: (i) => !0,
    /** CodeMirror onFocus */
    focus: (i) => !0,
    /** State Changed */
    change: (i) => !0,
    /** CodeMirror onDestroy */
    destroy: () => !0
  },
  /**
   * Setup
   *
   * @param props  - Props
   * @param context - Context
   */
  setup(i, e) {
    const t = G(), n = G(i.modelValue), s = Gt(new z()), r = N({
      get: () => s.value.hasFocus,
      set: (y) => {
        y && s.value.focus();
      }
    }), o = N({
      get: () => s.value.state.selection,
      set: (y) => s.value.dispatch({ selection: y })
    }), l = N({
      get: () => s.value.state.selection.main.head,
      set: (y) => s.value.dispatch({ selection: { anchor: y } })
    }), a = N(
      {
        get: () => s.value.state.toJSON(),
        set: (y) => s.value.setState(se.fromJSON(y))
      }
    ), c = G(0), h = G(0), u = N(() => {
      const y = new cn(), T = new cn();
      if (i.basic && i.minimal)
        throw "[Vue CodeMirror] Both basic and minimal cannot be specified.";
      return [
        // Toggle basic setup
        i.basic && !i.minimal ? fa : void 0,
        // Toggle minimal setup
        i.minimal && !i.basic ? yw : void 0,
        // ViewUpdate event listener
        z.updateListener.of((_) => {
          var D;
          e.emit("focus", s.value.hasFocus), c.value = (D = s.value.state.doc) == null ? void 0 : D.length, !(_.changes.empty || !_.docChanged) && (i.linter && (i.forceLinting && Tu(s.value), h.value = i.linter(s.value).length), e.emit("update", _));
        }),
        // Toggle light/dark mode.
        z.theme(i.theme, { dark: i.dark }),
        // Toggle line wrapping
        i.wrap ? z.lineWrapping : void 0,
        // Indent with tab
        i.tab ? gi.of([Tx]) : void 0,
        // Tab character
        i.indentUnit ? Qs.of(i.indentUnit) : void 0,
        // Allow Multiple Selections
        se.allowMultipleSelections.of(i.allowMultipleSelections),
        // Indent tab size
        i.tabSize ? T.of(se.tabSize.of(i.tabSize)) : void 0,
        // locale settings
        i.phrases ? se.phrases.of(i.phrases) : void 0,
        // Readonly option
        se.readOnly.of(i.readonly),
        // Editable option
        z.editable.of(!i.disabled),
        // Set Line break char
        i.lineSeparator ? se.lineSeparator.of(i.lineSeparator) : void 0,
        // Lang
        i.lang ? y.of(i.lang) : void 0,
        // Append Linter settings
        i.linter ? Dx(i.linter, i.linterConfig) : void 0,
        // Show 🔴 to error line when linter enabled.
        i.linter && i.gutter ? Wx(i.gutterConfig) : void 0,
        // Placeholder
        i.placeholder ? Yv(i.placeholder) : void 0,
        // Append Extensions
        ...i.extensions
      ].filter((_) => !!_);
    });
    ue(
      u,
      (y) => {
        var T;
        (T = s.value) == null || T.dispatch({
          effects: H.reconfigure.of(y)
        });
      },
      { immediate: !0 }
    ), ue(
      () => i.modelValue,
      async (y) => {
        if (s.value.composing || // IME fix
        s.value.state.doc.toJSON().join(i.lineSeparator ?? `
`) === y)
          return;
        const T = !s.value.state.selection.ranges.every(
          (_) => _.anchor < y.length && _.head < y.length
        );
        s.value.dispatch({
          changes: { from: 0, to: s.value.state.doc.length, insert: y },
          selection: T ? { anchor: 0, head: 0 } : s.value.state.selection,
          scrollIntoView: !0
        });
      },
      { immediate: !0 }
    ), Si(async () => {
      let y = n.value;
      t.value && (t.value.childNodes[0] && (n.value !== "" && console.warn(
        "[CodeMirror.vue] The <code-mirror> tag contains child elements that overwrite the `v-model` values."
      ), y = t.value.childNodes[0].innerText.trim()), s.value = new z({
        parent: t.value,
        state: se.create({ doc: y, extensions: u.value }),
        dispatch: (T) => {
          s.value.update([T]), !(T.changes.empty || !T.docChanged) && (e.emit("update:modelValue", T.state.doc.toString() ?? ""), e.emit("change", T.state));
        }
      }), await bs(), e.emit("ready", {
        view: s.value,
        state: s.value.state,
        container: t.value
      }));
    }), Sg(() => {
      s.value.destroy(), e.emit("destroy");
    });
    const f = () => {
      !i.linter || !s.value || (i.forceLinting && Tu(s.value), h.value = _x(s.value.state));
    }, d = () => {
      var y, T;
      (y = s.value) == null || y.dispatch({
        effects: H.reconfigure.of([])
      }), (T = s.value) == null || T.dispatch({
        effects: H.appendConfig.of(u.value)
      });
    }, p = (y, T) => s.value.state.sliceDoc(y, T), O = (y) => s.value.state.doc.line(y + 1).text, m = () => s.value.state.doc.lines, g = () => s.value.state.selection.main.head, k = () => {
      let y;
      return (y = s.value.state.selection.ranges) !== null && y !== void 0 ? y : [];
    }, S = () => {
      let y;
      return (y = s.value.state.sliceDoc(
        s.value.state.selection.main.from,
        s.value.state.selection.main.to
      )) !== null && y !== void 0 ? y : "";
    }, $ = () => {
      const y = s.value.state;
      return y ? y.selection.ranges.map(
        (T) => y.sliceDoc(T.from, T.to)
      ) : [];
    }, C = () => s.value.state.selection.ranges.some(
      (y) => !y.empty
    ), M = (y, T, _) => s.value.dispatch({
      changes: { from: T, to: _, insert: y }
    }), P = (y) => s.value.dispatch(s.value.state.replaceSelection(y)), w = (y) => s.value.dispatch({ selection: { anchor: y } }), b = (y, T) => s.value.dispatch({ selection: { anchor: y, head: T } }), A = (y, T) => s.value.dispatch({
      selection: E.create(y, T)
    }), Q = (y) => s.value.dispatch({
      selection: E.create(
        o.value.ranges.map((T) => T.extend(y(T)))
      )
    }), v = {
      editor: t,
      view: s,
      cursor: l,
      selection: o,
      focus: r,
      length: c,
      json: a,
      diagnosticCount: h,
      dom: s.value.contentDOM,
      lint: f,
      forceReconfigure: d,
      // Bellow is CodeMirror5's function
      getRange: p,
      getLine: O,
      lineCount: m,
      getCursor: g,
      listSelections: k,
      getSelection: S,
      getSelections: $,
      somethingSelected: C,
      replaceRange: M,
      replaceSelection: P,
      setCursor: w,
      setSelection: b,
      setSelections: A,
      extendSelectionsBy: Q
    };
    return e.expose(v), v;
  },
  render() {
    return Nu(
      this.$props.tag,
      {
        ref: "editor",
        class: "vue-codemirror"
      },
      this.$slots.default ? (
        // Hide original content
        Nu(
          "aside",
          { style: "display: none;", "aria-hidden": "true" },
          bw(this.$slots.default)
        )
      ) : void 0
    );
  }
});
let xw = class da {
  /**
  @internal
  */
  constructor(e, t, n, s, r, o, l, a, c, h = 0, u) {
    this.p = e, this.stack = t, this.state = n, this.reducePos = s, this.pos = r, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = c, this.lookAhead = h, this.parent = u;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(e, t, n = 0) {
    let s = e.parser.context;
    return new da(e, [], t, n, n, 0, [], 0, s ? new Wu(s, s.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(e) {
    var t;
    let n = e >> 19, s = e & 65535, { parser: r } = this.p, o = this.reducePos < this.pos - 25;
    o && this.setLookAhead(this.pos);
    let l = r.dynamicPrecedence(s);
    if (l && (this.score += l), n == 0) {
      this.pushState(r.getGoto(this.state, s, !0), this.reducePos), s < r.minRepeatTerm && this.storeNode(s, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(s, this.reducePos);
      return;
    }
    let a = this.stack.length - (n - 1) * 3 - (e & 262144 ? 6 : 0), c = a ? this.stack[a - 2] : this.p.ranges[0].from, h = this.reducePos - c;
    h >= 2e3 && !(!((t = this.p.parser.nodeSet.types[s]) === null || t === void 0) && t.isAnonymous) && (c == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = h) : this.p.lastBigReductionSize < h && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = c, this.p.lastBigReductionSize = h));
    let u = a ? this.stack[a - 1] : 0, f = this.bufferBase + this.buffer.length - u;
    if (s < r.minRepeatTerm || e & 131072) {
      let d = r.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(s, c, d, f + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = r.getGoto(d, s, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(s, c);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, n, s = 4, r = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (t == n)
          return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = n;
          return;
        }
      }
    }
    if (!r || this.pos == n)
      this.buffer.push(e, t, n, s);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > n; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > n; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, s > 4 && (s -= 4);
      }
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = n, this.buffer[o + 3] = s;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, n, s) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      this.pos = s, this.shiftContext(t, n), t <= this.p.parser.maxNode && this.buffer.push(t, n, s, 4);
    else {
      let r = e, { parser: o } = this.p;
      (s > this.pos || t <= o.maxNode) && (this.pos = s, o.stateFlag(
        r,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = s)), this.pushState(r, n), this.shiftContext(t, n), t <= o.maxNode && this.buffer.push(t, n, s, 4);
    }
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, n, s) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, n, s);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let s = this.pos;
    this.reducePos = this.pos = s + e.length, this.pushState(t, s), this.buffer.push(
      n,
      s,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let e = this, t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let n = e.buffer.slice(t), s = e.bufferBase + t;
    for (; e && s == e.bufferBase; )
      e = e.parent;
    return new da(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, s, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(e, t) {
    let n = e <= this.p.parser.maxNode;
    n && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, n ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(e) {
    for (let t = new kw(this); ; ) {
      let n = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (n == 0)
        return !1;
      if (!(n & 65536))
        return !0;
      t.reduce(n);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let s = [];
      for (let r = 0, o; r < t.length; r += 2)
        (o = t[r + 1]) != this.state && this.p.parser.hasAction(o, e) && s.push(t[r], o);
      if (this.stack.length < 120)
        for (let r = 0; s.length < 8 && r < t.length; r += 2) {
          let o = t[r + 1];
          s.some((l, a) => a & 1 && l == o) || s.push(t[r], o);
        }
      t = s;
    }
    let n = [];
    for (let s = 0; s < t.length && n.length < 4; s += 2) {
      let r = t[s + 1];
      if (r == this.state)
        continue;
      let o = this.split();
      o.pushState(r, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[s], this.pos), o.reducePos = this.pos, o.score -= 200, n.push(o);
    }
    return n;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: e } = this.p, t = e.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if (!(t & 65536))
      return !1;
    if (!e.validAction(this.state, t)) {
      let n = t >> 19, s = t & 65535, r = this.stack.length - n * 3;
      if (r < 0 || e.getGoto(this.stack[r], s, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: e } = this.p, t = [], n = (s, r) => {
      if (!t.includes(s))
        return t.push(s), e.allActions(s, (o) => {
          if (!(o & 393216)) if (o & 65536) {
            let l = (o >> 19) - r;
            if (l > 1) {
              let a = o & 65535, c = this.stack.length - l * 3;
              if (c >= 0 && e.getGoto(this.stack[c], a, !1) >= 0)
                return l << 19 | 65536 | a;
            }
          } else {
            let l = n(o, r + 1);
            if (l != null)
              return l;
          }
        });
    };
    return n(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !e.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  /**
  @internal
  */
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new Wu(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  /**
  @internal
  */
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
};
class Wu {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class kw {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, n = e >> 19;
    n == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n - 1) * 3;
    let s = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = s;
  }
}
class Wr {
  constructor(e, t, n) {
    this.stack = e, this.pos = t, this.index = n, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new Wr(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new Wr(this.stack, this.pos, this.index);
  }
}
function Yn(i, e = Uint16Array) {
  if (typeof i != "string")
    return i;
  let t = null;
  for (let n = 0, s = 0; n < i.length; ) {
    let r = 0;
    for (; ; ) {
      let o = i.charCodeAt(n++), l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), r += a, l)
        break;
      r *= 46;
    }
    t ? t[s++] = r : t = new e(r);
  }
  return t;
}
class Or {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const Uu = new Or();
class ww {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Uu, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let n = this.range, s = this.rangeIndex, r = this.pos + e;
    for (; r < n.from; ) {
      if (!s)
        return null;
      let o = this.ranges[--s];
      r -= n.from - o.to, n = o;
    }
    for (; t < 0 ? r > n.to : r >= n.to; ) {
      if (s == this.ranges.length - 1)
        return null;
      let o = this.ranges[++s];
      r += o.from - n.to, n = o;
    }
    return r;
  }
  /**
  @internal
  */
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(e) {
    let t = this.chunkOff + e, n, s;
    if (t >= 0 && t < this.chunk.length)
      n = this.pos + e, s = this.chunk.charCodeAt(t);
    else {
      let r = this.resolveOffset(e, 1);
      if (r == null)
        return -1;
      if (n = r, n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
        s = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= n; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = n), n + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - n)), s = this.chunk2.charCodeAt(0);
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), s;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(e, t = 0) {
    let n = t ? this.resolveOffset(t, -1) : this.pos;
    if (n == null || n < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = n;
  }
  /**
  Accept a token ending at a specific given position.
  */
  acceptTokenTo(e, t) {
    this.token.value = e, this.token.end = t;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = Uu, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let n = "";
    for (let s of this.ranges) {
      if (s.from >= t)
        break;
      s.to > e && (n += this.input.read(Math.max(s.from, e), Math.min(s.to, t)));
    }
    return n;
  }
}
class ln {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: n } = t.p;
    Tm(this.data, e, t, this.id, n.data, n.tokenPrecTable);
  }
}
ln.prototype.contextual = ln.prototype.fallback = ln.prototype.extend = !1;
class pa {
  constructor(e, t, n) {
    this.precTable = t, this.elseToken = n, this.data = typeof e == "string" ? Yn(e) : e;
  }
  token(e, t) {
    let n = e.pos, s = 0;
    for (; ; ) {
      let r = e.next < 0, o = e.resolveOffset(1, 1);
      if (Tm(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
        break;
      if (this.elseToken == null)
        return;
      if (r || s++, o == null)
        break;
      e.reset(o, e.token);
    }
    s && (e.reset(n, e.token), e.acceptToken(this.elseToken, s));
  }
}
pa.prototype.contextual = ln.prototype.fallback = ln.prototype.extend = !1;
class ei {
  /**
  Create a tokenizer. The first argument is the function that,
  given an input stream, scans for the types of tokens it
  recognizes at the stream's position, and calls
  [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  one.
  */
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
}
function Tm(i, e, t, n, s, r) {
  let o = 0, l = 1 << n, { dialect: a } = t.p.parser;
  e: for (; l & i[o]; ) {
    let c = i[o + 1];
    for (let d = o + 3; d < c; d += 2)
      if ((i[d + 1] & l) > 0) {
        let p = i[d];
        if (a.allows(p) && (e.token.value == -1 || e.token.value == p || Qw(p, e.token.value, s, r))) {
          e.acceptToken(p);
          break;
        }
      }
    let h = e.next, u = 0, f = i[o + 2];
    if (e.next < 0 && f > u && i[c + f * 3 - 3] == 65535) {
      o = i[c + f * 3 - 1];
      continue e;
    }
    for (; u < f; ) {
      let d = u + f >> 1, p = c + d + (d << 1), O = i[p], m = i[p + 1] || 65536;
      if (h < O)
        f = d;
      else if (h >= m)
        u = d + 1;
      else {
        o = i[p + 2], e.advance();
        continue e;
      }
    }
    break;
  }
}
function Gu(i, e, t) {
  for (let n = e, s; (s = i[n]) != 65535; n++)
    if (s == t)
      return n - e;
  return -1;
}
function Qw(i, e, t, n) {
  let s = Gu(t, n, e);
  return s < 0 || Gu(t, n, i) < s;
}
const lt = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let il = null;
function Fu(i, e, t) {
  let n = i.cursor(Re.IncludeAnonymous);
  for (n.moveTo(e); ; )
    if (!(t < 0 ? n.childBefore(e) : n.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? n.to < e : n.from > e) && !n.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            n.to - 1,
            e - 25
            /* Lookahead.Margin */
          )) : Math.min(i.length, Math.max(
            n.from + 1,
            e + 25
            /* Lookahead.Margin */
          ));
        if (t < 0 ? n.prevSibling() : n.nextSibling())
          break;
        if (!n.parent())
          return t < 0 ? 0 : i.length;
      }
}
class Pw {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? Fu(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? Fu(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let n = this.trees[t], s = this.index[t];
      if (s == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = n.children[s], o = this.start[t] + n.positions[s];
      if (o > e)
        return this.nextStart = o, null;
      if (r instanceof Ae) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(oe.lookAhead);
            if (!a || l + a < this.fragment.to)
              return r;
          }
        }
        this.index[t]++, o + r.length >= Math.max(this.safeFrom, e) && (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = o + r.length;
    }
  }
}
class $w {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((n) => new Or());
  }
  getActions(e) {
    let t = 0, n = null, { parser: s } = e.p, { tokenizers: r } = s, o = s.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let c = 0; c < r.length; c++) {
      if (!(1 << c & o))
        continue;
      let h = r[c], u = this.tokens[c];
      if (!(n && !h.fallback) && ((h.contextual || u.start != e.pos || u.mask != o || u.context != l) && (this.updateCachedToken(u, h, e), u.mask = o, u.context = l), u.lookAhead > u.end + 25 && (a = Math.max(u.lookAhead, a)), u.value != 0)) {
        let f = t;
        if (u.extended > -1 && (t = this.addActions(e, u.extended, u.end, t)), t = this.addActions(e, u.value, u.end, t), !h.extend && (n = u, t > f))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !n && e.pos == this.stream.end && (n = new Or(), n.value = e.p.parser.eofTerm, n.start = n.end = e.pos, t = this.addActions(e, n.value, n.end, t)), this.mainToken = n, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new Or(), { pos: n, p: s } = e;
    return t.start = n, t.end = Math.min(n + 1, s.stream.end), t.value = n == s.stream.end ? s.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, n) {
    let s = this.stream.clipPos(n.pos);
    if (t.token(this.stream.reset(s, e), n), e.value > -1) {
      let { parser: r } = n.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == e.value) {
          let l = r.specializers[o](this.stream.read(e.start, e.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? e.extended = l >> 1 : e.value = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(s + 1);
  }
  putAction(e, t, n, s) {
    for (let r = 0; r < s; r += 3)
      if (this.actions[r] == e)
        return s;
    return this.actions[s++] = e, this.actions[s++] = t, this.actions[s++] = n, s;
  }
  addActions(e, t, n, s) {
    let { state: r } = e, { parser: o } = e.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let c = o.stateSlot(
        r,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; c += 3) {
        if (l[c] == 65535)
          if (l[c + 1] == 1)
            c = Ut(l, c + 2);
          else {
            s == 0 && l[c + 1] == 2 && (s = this.putAction(Ut(l, c + 2), t, n, s));
            break;
          }
        l[c] == t && (s = this.putAction(Ut(l, c + 1), t, n, s));
      }
    return s;
  }
}
class Cw {
  constructor(e, t, n, s) {
    this.parser = e, this.input = t, this.ranges = s, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new ww(t, s), this.tokens = new $w(e, this.stream), this.topTerm = e.top[1];
    let { from: r } = s[0];
    this.stacks = [xw.start(this, e.top[0], r)], this.fragments = n.length && this.stream.end - r > e.bufferLength * 4 ? new Pw(n, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let e = this.stacks, t = this.minStackPos, n = this.stacks = [], s, r;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > t)
          n.push(l);
        else {
          if (this.advanceStack(l, n, e))
            continue;
          {
            s || (s = [], r = []), s.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let o = s && Aw(s);
      if (o)
        return lt && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw lt && s && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && s) {
      let o = this.stoppedAt != null && s[0].pos > this.stoppedAt ? s[0] : this.runRecovery(s, r, n);
      if (o)
        return lt && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n.length > o)
        for (n.sort((l, a) => a.score - l.score); n.length > o; )
          n.pop();
      n.some((l) => l.reducePos > t) && this.recovering--;
    } else if (n.length > 1) {
      e: for (let o = 0; o < n.length - 1; o++) {
        let l = n[o];
        for (let a = o + 1; a < n.length; a++) {
          let c = n[a];
          if (l.sameState(c) || l.buffer.length > 500 && c.buffer.length > 500)
            if ((l.score - c.score || l.buffer.length - c.buffer.length) > 0)
              n.splice(a--, 1);
            else {
              n.splice(o--, 1);
              continue e;
            }
        }
      }
      n.length > 12 && n.splice(
        12,
        n.length - 12
        /* Rec.MaxStackCount */
      );
    }
    this.minStackPos = n[0].pos;
    for (let o = 1; o < n.length; o++)
      n[o].pos < this.minStackPos && (this.minStackPos = n[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(e, t, n) {
    let s = e.pos, { parser: r } = this, o = lt ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && s > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let c = e.curContext && e.curContext.tracker.strict, h = c ? e.curContext.hash : 0;
      for (let u = this.fragments.nodeAt(s); u; ) {
        let f = this.parser.nodeSet.types[u.type.id] == u.type ? r.getGoto(e.state, u.type.id) : -1;
        if (f > -1 && u.length && (!c || (u.prop(oe.contextHash) || 0) == h))
          return e.useNode(u, f), lt && console.log(o + this.stackID(e) + ` (via reuse of ${r.getName(u.type.id)})`), !0;
        if (!(u instanceof Ae) || u.children.length == 0 || u.positions[0] > 0)
          break;
        let d = u.children[0];
        if (d instanceof Ae && u.positions[0] == 0)
          u = d;
        else
          break;
      }
    }
    let l = r.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return e.reduce(l), lt && console.log(o + this.stackID(e) + ` (via always-reduce ${r.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let c = 0; c < a.length; ) {
      let h = a[c++], u = a[c++], f = a[c++], d = c == a.length || !n, p = d ? e : e.split(), O = this.tokens.mainToken;
      if (p.apply(h, u, O ? O.start : p.pos, f), lt && console.log(o + this.stackID(p) + ` (via ${h & 65536 ? `reduce of ${r.getName(
        h & 65535
        /* Action.ValueMask */
      )}` : "shift"} for ${r.getName(u)} @ ${s}${p == e ? "" : ", split"})`), d)
        return !0;
      p.pos > s ? t.push(p) : n.push(p);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let n = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > n)
        return Hu(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let s = null, r = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], c = t[(o << 1) + 1], h = lt ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = !0, l.restart(), lt && console.log(h + this.stackID(l) + " (restarted)"), this.advanceFully(l, n))))
        continue;
      let u = l.split(), f = h;
      for (let d = 0; u.forceReduce() && d < 10 && (lt && console.log(f + this.stackID(u) + " (via force-reduce)"), !this.advanceFully(u, n)); d++)
        lt && (f = this.stackID(u) + " -> ");
      for (let d of l.recoverByInsert(a))
        lt && console.log(h + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, n);
      this.stream.end > l.pos ? (c == l.pos && (c++, a = 0), l.recoverByDelete(a, c), lt && console.log(h + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), Hu(l, n)) : (!s || s.score < l.score) && (s = l);
    }
    return s;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), Ae.build({
      buffer: Wr.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (il || (il = /* @__PURE__ */ new WeakMap())).get(e);
    return t || il.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function Hu(i, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == i.pos && n.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class Tw {
  constructor(e, t, n) {
    this.source = e, this.flags = t, this.disabled = n;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const nl = (i) => i;
class Am {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || nl, this.reduce = e.reduce || nl, this.reuse = e.reuse || nl, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class yn extends Fp {
  /**
  @internal
  */
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++)
      t.push("");
    let n = Object.keys(e.topRules).map((l) => e.topRules[l][1]), s = [];
    for (let l = 0; l < t.length; l++)
      s.push([]);
    function r(l, a, c) {
      s[l].push([a, a.deserialize(String(c))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = oe[a]);
        for (let c = 1; c < l.length; ) {
          let h = l[c++];
          if (h >= 0)
            r(h, a, l[c++]);
          else {
            let u = l[c + -h];
            for (let f = -h; f > 0; f--)
              r(l[c++], a, u);
            c++;
          }
        }
      }
    this.nodeSet = new Ga(t.map((l, a) => rt.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: s[a],
      top: n.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = Np;
    let o = Yn(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(Ku), this.states = Yn(e.states, Uint32Array), this.data = Yn(e.stateData), this.goto = Yn(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new ln(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, n) {
    let s = new Cw(this, e, t, n);
    for (let r of this.wrappers)
      s = r(s, e, t, n);
    return s;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, n = !1) {
    let s = this.goto;
    if (t >= s[0])
      return -1;
    for (let r = s[t + 1]; ; ) {
      let o = s[r++], l = o & 1, a = s[r++];
      if (l && n)
        return a;
      for (let c = r + (o >> 1); r < c; r++)
        if (s[r] == e)
          return a;
      if (l)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(e, t) {
    let n = this.data;
    for (let s = 0; s < 2; s++)
      for (let r = this.stateSlot(
        e,
        s ? 2 : 1
        /* ParseState.Actions */
      ), o; ; r += 3) {
        if ((o = n[r]) == 65535)
          if (n[r + 1] == 1)
            o = n[r = Ut(n, r + 2)];
          else {
            if (n[r + 1] == 2)
              return Ut(n, r + 2);
            break;
          }
        if (o == t || o == 0)
          return Ut(n, r + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  /**
  @internal
  */
  stateFlag(e, t) {
    return (this.stateSlot(
      e,
      0
      /* ParseState.Flags */
    ) & t) > 0;
  }
  /**
  @internal
  */
  validAction(e, t) {
    return !!this.allActions(e, (n) => n == t ? !0 : null);
  }
  /**
  @internal
  */
  allActions(e, t) {
    let n = this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ), s = n ? t(n) : void 0;
    for (let r = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); s == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1)
          r = Ut(this.data, r + 2);
        else
          break;
      s = t(Ut(this.data, r + 1));
    }
    return s;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(e) {
    let t = [];
    for (let n = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1)
          n = Ut(this.data, n + 2);
        else
          break;
      if (!(this.data[n + 2] & 1)) {
        let s = this.data[n + 1];
        t.some((r, o) => o & 1 && r == s) || t.push(this.data[n], s);
      }
    }
    return t;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(e) {
    let t = Object.assign(Object.create(yn.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let n = this.topRules[e.top];
      if (!n)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = n;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((n) => {
      let s = e.tokenizers.find((r) => r.from == n);
      return s ? s.to : n;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((n, s) => {
      let r = e.specializers.find((l) => l.from == n.external);
      if (!r)
        return n;
      let o = Object.assign(Object.assign({}, n), { external: r.to });
      return t.specializers[s] = Ku(o), o;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  /**
  @internal
  */
  parseDialect(e) {
    let t = Object.keys(this.dialects), n = t.map(() => !1);
    if (e)
      for (let r of e.split(" ")) {
        let o = t.indexOf(r);
        o >= 0 && (n[o] = !0);
      }
    let s = null;
    for (let r = 0; r < t.length; r++)
      if (!n[r])
        for (let o = this.dialects[t[r]], l; (l = this.data[o++]) != 65535; )
          (s || (s = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new Tw(e, n, s);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new yn(e);
  }
}
function Ut(i, e) {
  return i[e] | i[e + 1] << 16;
}
function Aw(i) {
  let e = null;
  for (let t of i) {
    let n = t.p.stoppedAt;
    (t.pos == t.p.stream.end || n != null && t.pos > n) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function Ku(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, n) => i.external(t, n) << 1 | e;
  }
  return i.get;
}
const Zw = 312, _w = 313, Ju = 1, Mw = 2, Rw = 3, Vw = 4, Ew = 314, Lw = 316, Xw = 317, Dw = 5, qw = 6, jw = 0, Oa = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], Zm = 125, zw = 59, ma = 47, Bw = 42, Yw = 43, Iw = 45, Nw = 60, Ww = 44, Uw = 63, Gw = 46, Fw = 91, Hw = new Am({
  start: !1,
  shift(i, e) {
    return e == Dw || e == qw || e == Lw ? i : e == Xw;
  },
  strict: !1
}), Kw = new ei((i, e) => {
  let { next: t } = i;
  (t == Zm || t == -1 || e.context) && i.acceptToken(Ew);
}, { contextual: !0, fallback: !0 }), Jw = new ei((i, e) => {
  let { next: t } = i, n;
  Oa.indexOf(t) > -1 || t == ma && ((n = i.peek(1)) == ma || n == Bw) || t != Zm && t != zw && t != -1 && !e.context && i.acceptToken(Zw);
}, { contextual: !0 }), eQ = new ei((i, e) => {
  i.next == Fw && !e.context && i.acceptToken(_w);
}, { contextual: !0 }), tQ = new ei((i, e) => {
  let { next: t } = i;
  if (t == Yw || t == Iw) {
    if (i.advance(), t == i.next) {
      i.advance();
      let n = !e.context && e.canShift(Ju);
      i.acceptToken(n ? Ju : Mw);
    }
  } else t == Uw && i.peek(1) == Gw && (i.advance(), i.advance(), (i.next < 48 || i.next > 57) && i.acceptToken(Rw));
}, { contextual: !0 });
function sl(i, e) {
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i == 95 || i >= 192 || !e && i >= 48 && i <= 57;
}
const iQ = new ei((i, e) => {
  if (i.next != Nw || !e.dialectEnabled(jw) || (i.advance(), i.next == ma)) return;
  let t = 0;
  for (; Oa.indexOf(i.next) > -1; )
    i.advance(), t++;
  if (sl(i.next, !0)) {
    for (i.advance(), t++; sl(i.next, !1); )
      i.advance(), t++;
    for (; Oa.indexOf(i.next) > -1; )
      i.advance(), t++;
    if (i.next == Ww) return;
    for (let n = 0; ; n++) {
      if (n == 7) {
        if (!sl(i.next, !0)) return;
        break;
      }
      if (i.next != "extends".charCodeAt(n)) break;
      i.advance(), t++;
    }
  }
  i.acceptToken(Vw, -t);
}), nQ = lo({
  "get set async static": x.modifier,
  "for while do if else switch try catch finally return throw break continue default case": x.controlKeyword,
  "in of await yield void typeof delete instanceof": x.operatorKeyword,
  "let var const using function class extends": x.definitionKeyword,
  "import export from": x.moduleKeyword,
  "with debugger as new": x.keyword,
  TemplateString: x.special(x.string),
  super: x.atom,
  BooleanLiteral: x.bool,
  this: x.self,
  null: x.null,
  Star: x.modifier,
  VariableName: x.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": x.function(x.variableName),
  VariableDefinition: x.definition(x.variableName),
  Label: x.labelName,
  PropertyName: x.propertyName,
  PrivatePropertyName: x.special(x.propertyName),
  "CallExpression/MemberExpression/PropertyName": x.function(x.propertyName),
  "FunctionDeclaration/VariableDefinition": x.function(x.definition(x.variableName)),
  "ClassDeclaration/VariableDefinition": x.definition(x.className),
  PropertyDefinition: x.definition(x.propertyName),
  PrivatePropertyDefinition: x.definition(x.special(x.propertyName)),
  UpdateOp: x.updateOperator,
  "LineComment Hashbang": x.lineComment,
  BlockComment: x.blockComment,
  Number: x.number,
  String: x.string,
  Escape: x.escape,
  ArithOp: x.arithmeticOperator,
  LogicOp: x.logicOperator,
  BitOp: x.bitwiseOperator,
  CompareOp: x.compareOperator,
  RegExp: x.regexp,
  Equals: x.definitionOperator,
  Arrow: x.function(x.punctuation),
  ": Spread": x.punctuation,
  "( )": x.paren,
  "[ ]": x.squareBracket,
  "{ }": x.brace,
  "InterpolationStart InterpolationEnd": x.special(x.brace),
  ".": x.derefOperator,
  ", ;": x.separator,
  "@": x.meta,
  TypeName: x.typeName,
  TypeDefinition: x.definition(x.typeName),
  "type enum interface implements namespace module declare": x.definitionKeyword,
  "abstract global Privacy readonly override": x.modifier,
  "is keyof unique infer": x.operatorKeyword,
  JSXAttributeValue: x.attributeValue,
  JSXText: x.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": x.angleBracket,
  "JSXIdentifier JSXNameSpacedName": x.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": x.attributeName,
  "JSXBuiltin/JSXIdentifier": x.standard(x.tagName)
}), sQ = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, extends: 54, this: 58, true: 66, false: 66, null: 78, void: 82, typeof: 86, super: 102, new: 136, delete: 148, yield: 157, await: 161, class: 166, public: 229, private: 229, protected: 229, readonly: 231, instanceof: 250, satisfies: 253, in: 254, const: 256, import: 290, keyof: 345, unique: 349, infer: 355, is: 391, abstract: 411, implements: 413, type: 415, let: 418, var: 420, using: 423, interface: 429, enum: 433, namespace: 439, module: 441, declare: 445, global: 449, for: 468, of: 477, while: 480, with: 484, do: 488, if: 492, else: 494, switch: 498, case: 504, try: 510, catch: 514, finally: 518, return: 522, throw: 526, break: 530, continue: 534, debugger: 538 }, rQ = { __proto__: null, async: 123, get: 125, set: 127, declare: 189, public: 191, private: 191, protected: 191, static: 193, abstract: 195, override: 197, readonly: 203, accessor: 205, new: 395 }, oQ = { __proto__: null, "<": 187 }, lQ = yn.deserialize({
  version: 14,
  states: "$CdQ%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#D^O.QQlO'#DdO.bQlO'#DoO%[QlO'#DwO0fQlO'#EPOOQ!0Lf'#EX'#EXO1PQ`O'#EUOOQO'#Em'#EmOOQO'#Ih'#IhO1XQ`O'#GpO1dQ`O'#ElO1iQ`O'#ElO3hQ!0MxO'#JnO6[Q!0MxO'#JoO6uQ`O'#F[O6zQ,UO'#FsOOQ!0Lf'#Fe'#FeO7VO7dO'#FeO7eQMhO'#FzO9RQ`O'#FyOOQ!0Lf'#Jo'#JoOOQ!0Lb'#Jn'#JnO9WQ`O'#GtOOQ['#K['#K[O9cQ`O'#IUO9hQ!0LrO'#IVOOQ['#J['#J[OOQ['#IZ'#IZQ`QlOOQ`QlOOO9pQ!L^O'#DsO9wQlO'#D{O:OQlO'#D}O9^Q`O'#GpO:VQMhO'#CoO:eQ`O'#EkO:pQ`O'#EvO:uQMhO'#FdO;dQ`O'#GpOOQO'#K]'#K]O;iQ`O'#K]O;wQ`O'#GxO;wQ`O'#GyO;wQ`O'#G{O9^Q`O'#HOO<nQ`O'#HRO>VQ`O'#CeO>gQ`O'#H_O>oQ`O'#HeO>oQ`O'#HgO`QlO'#HiO>oQ`O'#HkO>oQ`O'#HnO>tQ`O'#HtO>yQ!0LsO'#HzO%[QlO'#H|O?UQ!0LsO'#IOO?aQ!0LsO'#IQO9hQ!0LrO'#ISO?lQ!0MxO'#CiO@nQpO'#DiQOQ`OOO%[QlO'#D}OAUQ`O'#EQO:VQMhO'#EkOAaQ`O'#EkOAlQ!bO'#FdOOQ['#Cg'#CgOOQ!0Lb'#Dn'#DnOOQ!0Lb'#Jr'#JrO%[QlO'#JrOOQO'#Ju'#JuOOQO'#Id'#IdOBlQpO'#EdOOQ!0Lb'#Ec'#EcOOQ!0Lb'#Jy'#JyOChQ!0MSO'#EdOCrQpO'#ETOOQO'#Jt'#JtODWQpO'#JuOEeQpO'#ETOCrQpO'#EdPErO&2DjO'#CbPOOO)CDy)CDyOOOO'#I['#I[OE}O#tO,59UOOQ!0Lh,59U,59UOOOO'#I]'#I]OF]O&jO,59UOFkQ!L^O'#D`OOOO'#I_'#I_OFrO#@ItO,59xOOQ!0Lf,59x,59xOGQQlO'#I`OGeQ`O'#JpOIdQ!fO'#JpO+}QlO'#JpOIkQ`O,5:OOJRQ`O'#EmOJ`Q`O'#KPOJkQ`O'#KOOJkQ`O'#KOOJsQ`O,5;ZOJxQ`O'#J}OOQ!0Ln,5:Z,5:ZOKPQlO,5:ZOL}Q!0MxO,5:cOMnQ`O,5:kONXQ!0LrO'#J|ON`Q`O'#J{O9WQ`O'#J{ONtQ`O'#J{ON|Q`O,5;YO! RQ`O'#J{O!#WQ!fO'#JoOOQ!0Lh'#Ci'#CiO%[QlO'#EPO!#vQ!fO,5:pOOQS'#Jv'#JvOOQO-E<f-E<fO9^Q`O,5=[O!$^Q`O,5=[O!$cQlO,5;WO!&fQMhO'#EhO!(PQ`O,5;WO!(UQlO'#DvO!(`QpO,5;aO!(hQpO,5;aO%[QlO,5;aOOQ['#FS'#FSOOQ['#FU'#FUO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bOOQ['#FY'#FYO!(vQlO,5;sOOQ!0Lf,5;x,5;xOOQ!0Lf,5;y,5;yOOQ!0Lf,5;{,5;{O%[QlO'#IlO!*yQ!0LrO,5<gO%[QlO,5;bO!&fQMhO,5;bO!+hQMhO,5;bO!-YQMhO'#EZO%[QlO,5;vOOQ!0Lf,5;z,5;zO!-aQ,UO'#FiO!.^Q,UO'#KTO!-xQ,UO'#KTO!.eQ,UO'#KTOOQO'#KT'#KTO!.yQ,UO,5<ROOOW,5<_,5<_O!/[QlO'#FuOOOW'#Ik'#IkO7VO7dO,5<PO!/cQ,UO'#FwOOQ!0Lf,5<P,5<PO!0SQ$IUO'#CvOOQ!0Lh'#Cz'#CzO!0gO#@ItO'#DOO!1TQMjO,5<dO!1[Q`O,5<fO!2wQ(CWO'#GVO!3UQ`O'#GWO!3ZQ`O'#GWO!4yQ(CWO'#G[O!6OQpO'#G`OOQO'#Gk'#GkO!+oQMhO'#GjOOQO'#Gm'#GmO!+oQMhO'#GlO!6qQ$IUO'#JhOOQ!0Lh'#Jh'#JhO!6{Q`O'#JgO!7ZQ`O'#JfO!7cQ`O'#CuOOQ!0Lh'#Cx'#CxO!7kQ`O'#CzOOQ!0Lh'#DS'#DSOOQ!0Lh'#DU'#DUO1SQ`O'#DWO!+oQMhO'#F}O!+oQMhO'#GPO!7pQ`O'#GRO!7uQ`O'#GSO!3ZQ`O'#GYO!+oQMhO'#G_O!7zQ`O'#EnO!8iQ`O,5<eOOQ!0Lb'#Cr'#CrO!8qQ`O'#EoO!9kQpO'#EpOOQ!0Lb'#J}'#J}O!9rQ!0LrO'#K^O9hQ!0LrO,5=`O`QlO,5>pOOQ['#Jd'#JdOOQ[,5>q,5>qOOQ[-E<X-E<XO!;qQ!0MxO,5:_O!9fQpO,5:]O!>[Q!0MxO,5:gO%[QlO,5:gO!@rQ!0MxO,5:iOOQO,5@w,5@wO!AcQMhO,5=[O!AqQ!0LrO'#JeO9RQ`O'#JeO!BSQ!0LrO,59ZO!B_QpO,59ZO!BgQMhO,59ZO:VQMhO,59ZO!BrQ`O,5;WO!BzQ`O'#H^O!C`Q`O'#KaO%[QlO,5;|O!9fQpO,5<OO!ChQ`O,5=wO!CmQ`O,5=wO!CrQ`O,5=wO9hQ!0LrO,5=wO;wQ`O,5=gOOQO'#Cv'#CvO!DQQpO,5=dO!DYQMhO,5=eO!DeQ`O,5=gO!DjQ!bO,5=jO!DrQ`O'#K]O>tQ`O'#HTO9^Q`O'#HVO!DwQ`O'#HVO:VQMhO'#HXO!D|Q`O'#HXOOQ[,5=m,5=mO!ERQ`O'#HYO!EdQ`O'#CoO!EiQ`O,59PO!EsQ`O,59PO!GxQlO,59POOQ[,59P,59PO!HYQ!0LrO,59PO%[QlO,59PO!JeQlO'#HaOOQ['#Hb'#HbOOQ['#Hc'#HcO`QlO,5=yO!J{Q`O,5=yO`QlO,5>PO`QlO,5>RO!KQQ`O,5>TO`QlO,5>VO!KVQ`O,5>YO!K[QlO,5>`OOQ[,5>f,5>fO%[QlO,5>fO9hQ!0LrO,5>hOOQ[,5>j,5>jO# fQ`O,5>jOOQ[,5>l,5>lO# fQ`O,5>lOOQ[,5>n,5>nO#!SQpO'#D[O%[QlO'#JrO#!uQpO'#JrO##PQpO'#DjO##bQpO'#DjO#%sQlO'#DjO#%zQ`O'#JqO#&SQ`O,5:TO#&XQ`O'#EqO#&gQ`O'#KQO#&oQ`O,5;[O#&tQpO'#DjO#'RQpO'#ESOOQ!0Lf,5:l,5:lO%[QlO,5:lO#'YQ`O,5:lO>tQ`O,5;VO!B_QpO,5;VO!BgQMhO,5;VO:VQMhO,5;VO#'bQ`O,5@^O#'gQ07dO,5:pOOQO-E<b-E<bO#(mQ!0MSO,5;OOCrQpO,5:oO#(wQpO,5:oOCrQpO,5;OO!BSQ!0LrO,5:oOOQ!0Lb'#Eg'#EgOOQO,5;O,5;OO%[QlO,5;OO#)UQ!0LrO,5;OO#)aQ!0LrO,5;OO!B_QpO,5:oOOQO,5;U,5;UO#)oQ!0LrO,5;OPOOO'#IY'#IYP#*TO&2DjO,58|POOO,58|,58|OOOO-E<Y-E<YOOQ!0Lh1G.p1G.pOOOO-E<Z-E<ZOOOO,59z,59zO#*`Q!bO,59zOOOO-E<]-E<]OOQ!0Lf1G/d1G/dO#*eQ!fO,5>zO+}QlO,5>zOOQO,5?Q,5?QO#*oQlO'#I`OOQO-E<^-E<^O#*|Q`O,5@[O#+UQ!fO,5@[O#+]Q`O,5@jOOQ!0Lf1G/j1G/jO%[QlO,5@kO#+eQ`O'#IfOOQO-E<d-E<dO#+]Q`O,5@jOOQ!0Lb1G0u1G0uOOQ!0Ln1G/u1G/uOOQ!0Ln1G0V1G0VO%[QlO,5@hO#+yQ!0LrO,5@hO#,[Q!0LrO,5@hO#,cQ`O,5@gO9WQ`O,5@gO#,kQ`O,5@gO#,yQ`O'#IiO#,cQ`O,5@gOOQ!0Lb1G0t1G0tO!(`QpO,5:rO!(kQpO,5:rOOQS,5:t,5:tO#-kQdO,5:tO#-sQMhO1G2vO9^Q`O1G2vOOQ!0Lf1G0r1G0rO#.RQ!0MxO1G0rO#/WQ!0MvO,5;SOOQ!0Lh'#GU'#GUO#/tQ!0MzO'#JhO!$cQlO1G0rO#2PQ!fO'#JsO%[QlO'#JsO#2ZQ`O,5:bOOQ!0Lh'#D['#D[OOQ!0Lf1G0{1G0{O%[QlO1G0{OOQ!0Lf1G1e1G1eO#2`Q`O1G0{O#4tQ!0MxO1G0|O#4{Q!0MxO1G0|O#7cQ!0MxO1G0|O#7jQ!0MxO1G0|O#:QQ!0MxO1G0|O#<hQ!0MxO1G0|O#<oQ!0MxO1G0|O#<vQ!0MxO1G0|O#?^Q!0MxO1G0|O#?eQ!0MxO1G0|O#ArQ?MtO'#CiO#CmQ?MtO1G1_O#CtQ?MtO'#JoO#DXQ!0MxO,5?WOOQ!0Lb-E<j-E<jO#FfQ!0MxO1G0|O#GcQ!0MzO1G0|OOQ!0Lf1G0|1G0|O#HfQMjO'#JxO#HpQ`O,5:uO#HuQ!0MxO1G1bO#IiQ,UO,5<VO#IqQ,UO,5<WO#IyQ,UO'#FnO#JbQ`O'#FmOOQO'#KU'#KUOOQO'#Ij'#IjO#JgQ,UO1G1mOOQ!0Lf1G1m1G1mOOOW1G1x1G1xO#JxQ?MtO'#JnO#KSQ`O,5<aO!(vQlO,5<aOOOW-E<i-E<iOOQ!0Lf1G1k1G1kO#KXQpO'#KTOOQ!0Lf,5<c,5<cO#KaQpO,5<cO#KfQMhO'#DQOOOO'#I^'#I^O#KmO#@ItO,59jOOQ!0Lh,59j,59jO%[QlO1G2OO!7uQ`O'#InO#KxQ`O,5<xOOQ!0Lh,5<u,5<uO!+oQMhO'#IqO#LfQMjO,5=UO!+oQMhO'#IsO#MXQMjO,5=WO!&fQMhO,5=YOOQO1G2Q1G2QO#McQ!dO'#CrO#MvQ(CWO'#EoO#N{QpO'#G`O$ cQ!dO,5<qO$ jQ`O'#KXO9WQ`O'#KXO$ xQ`O,5<sO!+oQMhO,5<rO$ }Q`O'#GXO$!`Q`O,5<rO$!eQ!dO'#GUO$!rQ!dO'#KYO$!|Q`O'#KYO!&fQMhO'#KYO$#RQ`O,5<vO$#WQlO'#JrO$#bQpO'#GaO##bQpO'#GaO$#sQ`O'#GeO!3ZQ`O'#GhO$#xQ!0LrO'#IpO$$TQpO,5<zOOQ!0Lp,5<z,5<zO$$[QpO'#GaO$$iQpO'#GbO$$zQpO'#GbO$%PQMjO,5=UO$%aQMjO,5=WOOQ!0Lh,5=Z,5=ZO!+oQMhO,5@RO!+oQMhO,5@RO$%qQ`O'#IuO$%|Q`O,5@QO$&UQ`O,59aOOQ!0Lh,59f,59fO$&{Q$IYO,59rOOQ!0Lh'#Jl'#JlO$'nQMjO,5<iO$(aQMjO,5<kO@fQ`O,5<mOOQ!0Lh,5<n,5<nO$(kQ`O,5<tO$(pQMjO,5<yO$)QQ`O'#J{O!$cQlO1G2PO$)VQ`O1G2PO9WQ`O'#KOO9WQ`O'#EqO%[QlO'#EqO9WQ`O'#IwO$)[Q!0LrO,5@xOOQ[1G2z1G2zOOQ[1G4[1G4[OOQ!0Lf1G/y1G/yOOQ!0Lf1G/w1G/wO$+^Q!0MxO1G0ROOQ[1G2v1G2vO!&fQMhO1G2vO%[QlO1G2vO#-vQ`O1G2vO$-bQMhO'#EhOOQ!0Lb,5@P,5@PO$-lQ!0LrO,5@POOQ[1G.u1G.uO!BSQ!0LrO1G.uO!B_QpO1G.uO!BgQMhO1G.uO$-}Q`O1G0rO$.SQ`O'#CiO$._Q`O'#KbO$.gQ`O,5=xO$.lQ`O'#KbO$.qQ`O'#KbO$/PQ`O'#I}O$/_Q`O,5@{O$/gQ!fO1G1hOOQ!0Lf1G1j1G1jO9^Q`O1G3cO@fQ`O1G3cO$/nQ`O1G3cO$/sQ`O1G3cOOQ[1G3c1G3cO!DeQ`O1G3RO!&fQMhO1G3OO$/xQ`O1G3OOOQ[1G3P1G3PO!&fQMhO1G3PO$/}Q`O1G3PO$0VQpO'#G}OOQ[1G3R1G3RO!5yQpO'#IyO!DjQ!bO1G3UOOQ[1G3U1G3UOOQ[,5=o,5=oO$0_QMhO,5=qO9^Q`O,5=qO$#sQ`O,5=sO9RQ`O,5=sO!B_QpO,5=sO!BgQMhO,5=sO:VQMhO,5=sO$0mQ`O'#K`O$0xQ`O,5=tOOQ[1G.k1G.kO$0}Q!0LrO1G.kO@fQ`O1G.kO$1YQ`O1G.kO9hQ!0LrO1G.kO$3bQ!fO,5@}O$3oQ`O,5@}O9WQ`O,5@}O$3zQlO,5={O$4RQ`O,5={OOQ[1G3e1G3eO`QlO1G3eOOQ[1G3k1G3kOOQ[1G3m1G3mO>oQ`O1G3oO$4WQlO1G3qO$8[QlO'#HpOOQ[1G3t1G3tO$8iQ`O'#HvO>tQ`O'#HxOOQ[1G3z1G3zO$8qQlO1G3zO9hQ!0LrO1G4QOOQ[1G4S1G4SOOQ!0Lb'#G]'#G]O9hQ!0LrO1G4UO9hQ!0LrO1G4WO$<xQ`O,5@^O!(vQlO,5;]O9WQ`O,5;]O>tQ`O,5:UO!(vQlO,5:UO!B_QpO,5:UO$<}Q?MtO,5:UOOQO,5;],5;]O$=XQpO'#IaO$=oQ`O,5@]OOQ!0Lf1G/o1G/oO$=wQpO'#IgO$>RQ`O,5@lOOQ!0Lb1G0v1G0vO##bQpO,5:UOOQO'#Ic'#IcO$>ZQpO,5:nOOQ!0Ln,5:n,5:nO#']Q`O1G0WOOQ!0Lf1G0W1G0WO%[QlO1G0WOOQ!0Lf1G0q1G0qO>tQ`O1G0qO!B_QpO1G0qO!BgQMhO1G0qOOQ!0Lb1G5x1G5xO!BSQ!0LrO1G0ZOOQO1G0j1G0jO%[QlO1G0jO$>bQ!0LrO1G0jO$>mQ!0LrO1G0jO!B_QpO1G0ZOCrQpO1G0ZO$>{Q!0LrO1G0jOOQO1G0Z1G0ZO$?aQ!0MxO1G0jPOOO-E<W-E<WPOOO1G.h1G.hOOOO1G/f1G/fO$?kQ!bO,5<gO$?sQ!fO1G4fOOQO1G4l1G4lO%[QlO,5>zO$?}Q`O1G5vO$@VQ`O1G6UO$@_Q!fO1G6VO9WQ`O,5?QO$@iQ!0MxO1G6SO%[QlO1G6SO$@yQ!0LrO1G6SO$A[Q`O1G6RO$A[Q`O1G6RO9WQ`O1G6RO$AdQ`O,5?TO9WQ`O,5?TOOQO,5?T,5?TO$AxQ`O,5?TO$)QQ`O,5?TOOQO-E<g-E<gOOQS1G0^1G0^OOQS1G0`1G0`O#-nQ`O1G0`OOQ[7+(b7+(bO!&fQMhO7+(bO%[QlO7+(bO$BWQ`O7+(bO$BcQMhO7+(bO$BqQ!0MzO,5=UO$D|Q!0MzO,5=WO$GXQ!0MzO,5=UO$IjQ!0MzO,5=WO$K{Q!0MzO,59rO$NQQ!0MzO,5<iO%!]Q!0MzO,5<kO%$hQ!0MzO,5<yOOQ!0Lf7+&^7+&^O%&yQ!0MxO7+&^O%'mQlO'#IbO%'zQ`O,5@_O%(SQ!fO,5@_OOQ!0Lf1G/|1G/|O%(^Q`O7+&gOOQ!0Lf7+&g7+&gO%(cQ?MtO,5:cO%[QlO7+&yO%(mQ?MtO,5:_O%(zQ?MtO,5:gO%)UQ?MtO,5:iO%)`QMhO'#IeO%)jQ`O,5@dOOQ!0Lh1G0a1G0aOOQO1G1q1G1qOOQO1G1r1G1rO%)rQ!jO,5<YO!(vQlO,5<XOOQO-E<h-E<hOOQ!0Lf7+'X7+'XOOOW7+'d7+'dOOOW1G1{1G1{O%)}Q`O1G1{OOQ!0Lf1G1}1G1}OOOO,59l,59lO%*SQ!dO,59lOOOO-E<[-E<[OOQ!0Lh1G/U1G/UO%*ZQ!0MxO7+'jOOQ!0Lh,5?Y,5?YO%*}QMhO1G2dP%+UQ`O'#InPOQ!0Lh-E<l-E<lO%+rQMjO,5?]OOQ!0Lh-E<o-E<oO%,eQMjO,5?_OOQ!0Lh-E<q-E<qO%,oQ!dO1G2tO%,vQ!dO'#CrO%-^QMhO'#KOO$#WQlO'#JrOOQ!0Lh1G2]1G2]O%-eQ`O'#ImO%-yQ`O,5@sO%-yQ`O,5@sO%.RQ`O,5@sO%.^Q`O,5@sOOQO1G2_1G2_O%.lQMjO1G2^O!+oQMhO1G2^O%.|Q(CWO'#IoO%/ZQ`O,5@tO!&fQMhO,5@tO%/cQ!dO,5@tOOQ!0Lh1G2b1G2bO%1sQ!fO'#CiO%1}Q`O,5<}OOQ!0Lb,5<{,5<{O%2VQpO,5<{OOQ!0Lb,5<|,5<|OCcQ`O,5<{O%2bQpO,5<{OOQ!0Lb,5=P,5=PO$)QQ`O,5=SOOQO,5?[,5?[OOQO-E<n-E<nOOQ!0Lp1G2f1G2fO##bQpO,5<{O$#WQlO,5<}O%2pQ`O,5<|O%2{QpO,5<|O!+oQMhO'#IqO%3uQMjO1G2pO!+oQMhO'#IsO%4hQMjO1G2rO%4rQMjO1G5mO%4|QMjO1G5mOOQO,5?a,5?aOOQO-E<s-E<sOOQO1G.{1G.{O!9fQpO,59tO%[QlO,59tOOQ!0Lh,5<h,5<hO%5ZQ`O1G2XO!+oQMhO1G2`O%5`Q!0MxO7+'kOOQ!0Lf7+'k7+'kO!$cQlO7+'kO%6SQ`O,5;]OOQ!0Lb,5?c,5?cOOQ!0Lb-E<u-E<uO%6XQ!dO'#KZO#']Q`O7+(bO4UQ!fO7+(bO$BZQ`O7+(bO%6cQ!0MvO'#CiO%6vQ!0MvO,5=QO%7hQ`O,5=QOOQ!0Lb1G5k1G5kOOQ[7+$a7+$aO!BSQ!0LrO7+$aO!B_QpO7+$aO!$cQlO7+&^O%7mQ`O'#I|O%8UQ`O,5@|OOQO1G3d1G3dO9^Q`O,5@|O%8UQ`O,5@|O%8^Q`O,5@|OOQO,5?i,5?iOOQO-E<{-E<{OOQ!0Lf7+'S7+'SO%8cQ`O7+(}O9hQ!0LrO7+(}O9^Q`O7+(}O@fQ`O7+(}OOQ[7+(m7+(mO%8hQ!0MvO7+(jO!&fQMhO7+(jO!D`Q`O7+(kOOQ[7+(k7+(kO!&fQMhO7+(kO%8rQ`O'#K_O%8}Q`O,5=iOOQO,5?e,5?eOOQO-E<w-E<wOOQ[7+(p7+(pO%:aQpO'#HWOOQ[1G3]1G3]O!&fQMhO1G3]O%[QlO1G3]O%:hQ`O1G3]O%:sQMhO1G3]O9hQ!0LrO1G3_O$#sQ`O1G3_O9RQ`O1G3_O!B_QpO1G3_O!BgQMhO1G3_O%;RQ`O'#I{O%;gQ`O,5@zO%;oQpO,5@zOOQ!0Lb1G3`1G3`OOQ[7+$V7+$VO@fQ`O7+$VO9hQ!0LrO7+$VO%;zQ`O7+$VO%[QlO1G6iO%[QlO1G6jO%<PQ!0LrO1G6iO%<ZQlO1G3gO%<bQ`O1G3gO%<gQlO1G3gOOQ[7+)P7+)PO9hQ!0LrO7+)ZO`QlO7+)]OOQ['#Ke'#KeOOQ['#JO'#JOO%<nQlO,5>[OOQ[,5>[,5>[O%[QlO'#HqO%<{Q`O'#HsOOQ[,5>b,5>bO9WQ`O,5>bOOQ[,5>d,5>dOOQ[7+)f7+)fOOQ[7+)l7+)lOOQ[7+)p7+)pOOQ[7+)r7+)rO%=QQpO1G5xO%=lQ?MtO1G0wO%=vQ`O1G0wOOQO1G/p1G/pO%>RQ?MtO1G/pO>tQ`O1G/pO!(vQlO'#DjOOQO,5>{,5>{OOQO-E<_-E<_OOQO,5?R,5?ROOQO-E<e-E<eO!B_QpO1G/pOOQO-E<a-E<aOOQ!0Ln1G0Y1G0YOOQ!0Lf7+%r7+%rO#']Q`O7+%rOOQ!0Lf7+&]7+&]O>tQ`O7+&]O!B_QpO7+&]OOQO7+%u7+%uO$?aQ!0MxO7+&UOOQO7+&U7+&UO%[QlO7+&UO%>]Q!0LrO7+&UO!BSQ!0LrO7+%uO!B_QpO7+%uO%>hQ!0LrO7+&UO%>vQ!0MxO7++nO%[QlO7++nO%?WQ`O7++mO%?WQ`O7++mOOQO1G4o1G4oO9WQ`O1G4oO%?`Q`O1G4oOOQS7+%z7+%zO#']Q`O<<K|O4UQ!fO<<K|O%?nQ`O<<K|OOQ[<<K|<<K|O!&fQMhO<<K|O%[QlO<<K|O%?vQ`O<<K|O%@RQ!0MzO,5?]O%B^Q!0MzO,5?_O%DiQ!0MzO1G2^O%FzQ!0MzO1G2pO%IVQ!0MzO1G2rO%KbQ!fO,5>|O%[QlO,5>|OOQO-E<`-E<`O%KlQ`O1G5yOOQ!0Lf<<JR<<JRO%KtQ?MtO1G0rO%M{Q?MtO1G0|O%NSQ?MtO1G0|O&!TQ?MtO1G0|O&![Q?MtO1G0|O&$]Q?MtO1G0|O&&^Q?MtO1G0|O&&eQ?MtO1G0|O&&lQ?MtO1G0|O&(mQ?MtO1G0|O&(tQ?MtO1G0|O&({Q!0MxO<<JeO&*sQ?MtO1G0|O&+pQ?MvO1G0|O&,sQ?MvO'#JhO&.yQ?MtO1G1bO&/WQ?MtO1G0RO&/bQMjO,5?POOQO-E<c-E<cO!(vQlO'#FpOOQO'#KV'#KVOOQO1G1t1G1tO&/lQ`O1G1sO&/qQ?MtO,5?WOOOW7+'g7+'gOOOO1G/W1G/WO&/{Q!dO1G4tOOQ!0Lh7+(O7+(OP!&fQMhO,5?YO!+oQMhO7+(`O&0SQ`O,5?XO9WQ`O,5?XOOQO-E<k-E<kO&0bQ`O1G6_O&0bQ`O1G6_O&0jQ`O1G6_O&0uQMjO7+'xO&1VQ!dO,5?ZO&1aQ`O,5?ZO!&fQMhO,5?ZOOQO-E<m-E<mO&1fQ!dO1G6`O&1pQ`O1G6`O&1xQ`O1G2iO!&fQMhO1G2iOOQ!0Lb1G2g1G2gOOQ!0Lb1G2h1G2hO%2VQpO1G2gO!B_QpO1G2gOCcQ`O1G2gOOQ!0Lb1G2n1G2nO&1}QpO1G2gO&2]Q`O1G2iO$)QQ`O1G2hOCcQ`O1G2hO$#WQlO1G2iO&2eQ`O1G2hO&3XQMjO,5?]OOQ!0Lh-E<p-E<pO&3zQMjO,5?_OOQ!0Lh-E<r-E<rO!+oQMhO7++XOOQ!0Lh1G/`1G/`O&4UQ`O1G/`OOQ!0Lh7+'s7+'sO&4ZQMjO7+'zO&4kQ!0MxO<<KVOOQ!0Lf<<KV<<KVO&5_Q`O1G0wO!&fQMhO'#IvO&5dQ`O,5@uO&7fQ!fO<<K|O!&fQMhO1G2lOOQ[<<G{<<G{O!BSQ!0LrO<<G{O&7mQ!0MxO<<IxOOQ!0Lf<<Ix<<IxOOQO,5?h,5?hO&8aQ`O,5?hO&8fQ`O,5?hOOQO-E<z-E<zO&8tQ`O1G6hO&8tQ`O1G6hO9^Q`O1G6hO@fQ`O<<LiOOQ[<<Li<<LiO&8|Q`O<<LiO9hQ!0LrO<<LiOOQ[<<LU<<LUO%8hQ!0MvO<<LUOOQ[<<LV<<LVO!D`Q`O<<LVO&9RQpO'#IxO&9^Q`O,5@yO!(vQlO,5@yOOQ[1G3T1G3TOOQO'#Iz'#IzO9hQ!0LrO'#IzO&9fQpO,5=rOOQ[,5=r,5=rO&9mQpO'#EdO&9tQpO'#GcO&9yQ`O7+(wO&:OQ`O7+(wOOQ[7+(w7+(wO!&fQMhO7+(wO%[QlO7+(wO&:WQ`O7+(wOOQ[7+(y7+(yO9hQ!0LrO7+(yO$#sQ`O7+(yO9RQ`O7+(yO!B_QpO7+(yO&:cQ`O,5?gOOQO-E<y-E<yOOQO'#HZ'#HZO&:nQ`O1G6fO9hQ!0LrO<<GqOOQ[<<Gq<<GqO@fQ`O<<GqO&:vQ`O7+,TO&:{Q`O7+,UO%[QlO7+,TO%[QlO7+,UOOQ[7+)R7+)RO&;QQ`O7+)RO&;VQlO7+)RO&;^Q`O7+)ROOQ[<<Lu<<LuOOQ[<<Lw<<LwOOQ[-E<|-E<|OOQ[1G3v1G3vO&;cQ`O,5>]OOQ[,5>_,5>_O&;hQ`O1G3|O9WQ`O7+&cO!(vQlO7+&cOOQO7+%[7+%[O&;mQ?MtO1G6VO>tQ`O7+%[OOQ!0Lf<<I^<<I^OOQ!0Lf<<Iw<<IwO>tQ`O<<IwOOQO<<Ip<<IpO$?aQ!0MxO<<IpO%[QlO<<IpOOQO<<Ia<<IaO!BSQ!0LrO<<IaO&;wQ!0LrO<<IpO&<SQ!0MxO<= YO&<dQ`O<= XOOQO7+*Z7+*ZO9WQ`O7+*ZOOQ[ANAhANAhO&<lQ!fOANAhO!&fQMhOANAhO#']Q`OANAhO4UQ!fOANAhO&<sQ`OANAhO%[QlOANAhO&<{Q!0MzO7+'xO&?^Q!0MzO,5?]O&AiQ!0MzO,5?_O&CtQ!0MzO7+'zO&FVQ!fO1G4hO&FaQ?MtO7+&^O&HeQ?MvO,5=UO&JlQ?MvO,5=WO&J|Q?MvO,5=UO&K^Q?MvO,5=WO&KnQ?MvO,59rO&MtQ?MvO,5<iO' wQ?MvO,5<kO'$]Q?MvO,5<yO'&RQ?MtO7+'jO'&`Q?MtO7+'kO'&mQ`O,5<[OOQO7+'_7+'_OOQ!0Lh7+*`7+*`O'&rQMjO<<KzOOQO1G4s1G4sO'&yQ`O1G4sO''UQ`O1G4sO''dQ`O7++yO''dQ`O7++yO!&fQMhO1G4uO''lQ!dO1G4uO''vQ`O7++zO'(OQ`O7+(TO'(ZQ!dO7+(TOOQ!0Lb7+(R7+(ROOQ!0Lb7+(S7+(SO!B_QpO7+(ROCcQ`O7+(RO'(eQ`O7+(TO!&fQMhO7+(TO$)QQ`O7+(SO'(jQ`O7+(TOCcQ`O7+(SO'(rQMjO<<NsOOQ!0Lh7+$z7+$zO'(|Q!dO,5?bOOQO-E<t-E<tO')WQ!0MvO7+(WOOQ[AN=gAN=gO9^Q`O1G5SOOQO1G5S1G5SO')hQ`O1G5SO')mQ`O7+,SO')mQ`O7+,SO9hQ!0LrOANBTO@fQ`OANBTOOQ[ANBTANBTOOQ[ANApANApOOQ[ANAqANAqO')uQ`O,5?dOOQO-E<v-E<vO'*QQ?MtO1G6eOOQO,5?f,5?fOOQO-E<x-E<xOOQ[1G3^1G3^O'*[Q`O,5<}OOQ[<<Lc<<LcO!&fQMhO<<LcO&9yQ`O<<LcO'*aQ`O<<LcO%[QlO<<LcOOQ[<<Le<<LeO9hQ!0LrO<<LeO$#sQ`O<<LeO9RQ`O<<LeO'*iQpO1G5RO'*tQ`O7+,QOOQ[AN=]AN=]O9hQ!0LrOAN=]OOQ[<= o<= oOOQ[<= p<= pO'*|Q`O<= oO'+RQ`O<= pOOQ[<<Lm<<LmO'+WQ`O<<LmO'+]QlO<<LmOOQ[1G3w1G3wO>tQ`O7+)hO'+dQ`O<<I}O'+oQ?MtO<<I}OOQO<<Hv<<HvOOQ!0LfAN?cAN?cOOQOAN?[AN?[O$?aQ!0MxOAN?[OOQOAN>{AN>{O%[QlOAN?[OOQO<<Mu<<MuOOQ[G27SG27SO!&fQMhOG27SO#']Q`OG27SO'+yQ!fOG27SO4UQ!fOG27SO',QQ`OG27SO',YQ?MtO<<JeO',gQ?MvO1G2^O'.]Q?MvO,5?]O'0`Q?MvO,5?_O'2cQ?MvO1G2pO'4fQ?MvO1G2rO'6iQ?MtO<<KVO'6vQ?MtO<<IxOOQO1G1v1G1vO!+oQMhOANAfOOQO7+*_7+*_O'7TQ`O7+*_O'7`Q`O<= eO'7hQ!dO7+*aOOQ!0Lb<<Ko<<KoO$)QQ`O<<KoOCcQ`O<<KoO'7rQ`O<<KoO!&fQMhO<<KoOOQ!0Lb<<Km<<KmO!B_QpO<<KmO'7}Q!dO<<KoOOQ!0Lb<<Kn<<KnO'8XQ`O<<KoO!&fQMhO<<KoO$)QQ`O<<KnOOQO7+*n7+*nO9^Q`O7+*nO'8^Q`O<= nOOQ[G27oG27oO9hQ!0LrOG27oO!(vQlO1G5OO'8fQ`O7+,PO'8nQ`O1G2iO&9yQ`OANA}OOQ[ANA}ANA}O!&fQMhOANA}O'8sQ`OANA}OOQ[ANBPANBPO9hQ!0LrOANBPO$#sQ`OANBPOOQO'#H['#H[OOQO7+*m7+*mOOQ[G22wG22wOOQ[ANEZANEZOOQ[ANE[ANE[OOQ[ANBXANBXO'8{Q`OANBXOOQ[<<MS<<MSO!(vQlOAN?iOOQOG24vG24vO$?aQ!0MxOG24vO#']Q`OLD,nOOQ[LD,nLD,nO!&fQMhOLD,nO'9QQ!fOLD,nO'9XQ?MvO7+'xO':}Q?MvO,5?]O'=QQ?MvO,5?_O'?TQ?MvO7+'zO'@yQMjOG27QOOQO<<My<<MyOOQ!0LbANAZANAZO$)QQ`OANAZOCcQ`OANAZO'AZQ!dOANAZOOQ!0LbANAXANAXO'AbQ`OANAZO!&fQMhOANAZO'AmQ!dOANAZOOQ!0LbANAYANAYOOQO<<NY<<NYOOQ[LD-ZLD-ZO'AwQ?MtO7+*jOOQO'#Gd'#GdOOQ[G27iG27iO&9yQ`OG27iO!&fQMhOG27iOOQ[G27kG27kO9hQ!0LrOG27kOOQ[G27sG27sO'BRQ?MtOG25TOOQOLD*bLD*bOOQ[!$(!Y!$(!YO#']Q`O!$(!YO!&fQMhO!$(!YO'B]Q!0MzOG27QOOQ!0LbG26uG26uO$)QQ`OG26uO'DnQ`OG26uOCcQ`OG26uO'DyQ!dOG26uO!&fQMhOG26uOOQ[LD-TLD-TO&9yQ`OLD-TOOQ[LD-VLD-VOOQ[!)9Et!)9EtO#']Q`O!)9EtOOQ!0LbLD,aLD,aO$)QQ`OLD,aOCcQ`OLD,aO'EQQ`OLD,aO'E]Q!dOLD,aOOQ[!$(!o!$(!oOOQ[!.K;`!.K;`O'EdQ?MvOG27QOOQ!0Lb!$( {!$( {O$)QQ`O!$( {OCcQ`O!$( {O'GYQ`O!$( {OOQ!0Lb!)9Eg!)9EgO$)QQ`O!)9EgOCcQ`O!)9EgOOQ!0Lb!.K;R!.K;RO$)QQ`O!.K;ROOQ!0Lb!4/0m!4/0mO!(vQlO'#DwO1PQ`O'#EUO'GeQ!fO'#JnO'GlQ!L^O'#DsO'GsQlO'#D{O'GzQ!fO'#CiO'JbQ!fO'#CiO!(vQlO'#D}O'JrQlO,5;WO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO'#IlO'LuQ`O,5<gO!(vQlO,5;bO'L}QMhO,5;bO'NhQMhO,5;bO!(vQlO,5;vO!&fQMhO'#GjO'L}QMhO'#GjO!&fQMhO'#GlO'L}QMhO'#GlO1SQ`O'#DWO1SQ`O'#DWO!&fQMhO'#F}O'L}QMhO'#F}O!&fQMhO'#GPO'L}QMhO'#GPO!&fQMhO'#G_O'L}QMhO'#G_O!(vQlO,5:gO'NoQpO'#D[O'NyQpO'#JrO!(vQlO,5@kO'JrQlO1G0rO( TQ?MtO'#CiO!(vQlO1G2OO!&fQMhO'#IqO'L}QMhO'#IqO!&fQMhO'#IsO'L}QMhO'#IsO( _Q!dO'#CrO!&fQMhO,5<rO'L}QMhO,5<rO'JrQlO1G2PO!(vQlO7+&yO!&fQMhO1G2^O'L}QMhO1G2^O!&fQMhO'#IqO'L}QMhO'#IqO!&fQMhO'#IsO'L}QMhO'#IsO!&fQMhO1G2`O'L}QMhO1G2`O'JrQlO7+'kO'JrQlO7+&^O!&fQMhOANAfO'L}QMhOANAfO( rQ`O'#ElO( wQ`O'#ElO(!PQ`O'#F[O(!UQ`O'#EvO(!ZQ`O'#KPO(!fQ`O'#J}O(!qQ`O,5;WO(!vQMjO,5<dO(!}Q`O'#GWO(#SQ`O'#GWO(#XQ`O,5<eO(#aQ`O,5;WO(#iQ?MtO1G1_O(#pQ`O,5<rO(#uQ`O,5<rO(#zQ`O,5<tO($PQ`O,5<tO($UQ`O1G2PO($ZQ`O1G0rO($`QMjO<<KzO($gQMjO<<KzO7eQMhO'#FzO9RQ`O'#FyOAaQ`O'#EkO!(vQlO,5;sO!3ZQ`O'#GWO!3ZQ`O'#GWO!3ZQ`O'#GYO!3ZQ`O'#GYO!+oQMhO7+(`O!+oQMhO7+(`O%,oQ!dO1G2tO%,oQ!dO1G2tO!&fQMhO,5=YO!&fQMhO,5=Y",
  stateData: "(%k~O'xOS'yOSTOS'zRQ~OPYOQYOSfOY!VOaqOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!rwO!uxO!y]O#t!PO$V|O%e}O%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO&S!WO&Y!XO&[!YO&^!ZO&`![O&c!]O&i!^O&o!_O&q!`O&s!aO&u!bO&w!cO(PSO(RTO(UUO(]VO(k[O(ziO~OWtO~P`OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oa!wOp!nO!P!oO!_!yO!`!vO!a!vO!y;kO#Q!pO#R!pO#S!xO#T!pO#U!pO#X!zO#Y!zO(Q!lO(RTO(UUO(a!mO(k!sO~O'z!{O~OP]XR]X[]Xa]Xo]X}]X!P]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X'v]X(]]X(n]X(u]X(v]X~O!d%PX~P(qO_!}O(R#PO(S!}O(T#PO~O_#QO(T#PO(U#PO(V#QO~Ou#SO!R#TO(^#TO(_#VO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P;oO(RTO(UUO(]VO(k[O(ziO~O!X#ZO!Y#WO!V(dP!V(rP~P+}O!Z#cO~P`OPYOQYOSfOd!jOe!iOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(RTO(UUO(]VO(k[O(ziO~Om#mO!X#iO!y]O#f#lO#g#iO(P;pO!h(oP~P.iO!i#oO(P#nO~O!u#sO!y]O%e#tO~O#h#uO~O!d#vO#h#uO~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y$_O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~Oa(bX'v(bX's(bX!h(bX!V(bX![(bX%f(bX!d(bX~P1qO#P$dO#]$eO$P$eOP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#s(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX![(cX%f(cX~Oa(cX'v(cX's(cX!V(cX!h(cXs(cX!d(cX~P4UO#]$eO~O$[$hO$^$gO$e$mO~OSfO![$nO$h$oO$j$qO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(P$sO(RTO(UUO(]$uO(u$}O(v%POg(YP~O!i%cO~O!P%fO![%gO(P%eO~O!d%kO~Oa%lO'v%lO~O}%pO~P%[O(Q!lO~P%[O%k%tO~P%[Oh%VO!i%cO(P%eO(Q!lO~Oe%{O!i%cO(P%eO~O#s$RO~O}&QO![%}O!i&PO%g&TO(P%eO(Q!lO(RTO(UUO`)TP~O!u#sO~O%p&VO!P)PX![)PX(P)PX~O(P&WO~O!r&]O#t!PO%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO~Od&bOe&aO!u&_O%e&`O%x&^O~P;|Od&eOeyO![&dO!r&]O!uxO!y]O#t!PO%e}O%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO~Ob&hO#]&kO%g&fO(Q!lO~P=RO!i&lO!r&pO~O!i#oO~O![XO~Oa%lO't&xO'v%lO~Oa%lO't&{O'v%lO~Oa%lO't&}O'v%lO~O's]X!V]Xs]X!h]X&W]X![]X%f]X!d]X~P(qO!_'[O!`'TO!a'TO(Q!lO(RTO(UUO~Op'RO!P'QO!X'UO(a'PO!Z(eP!Z(tP~P@YOk'_O![']O(P%eO~Oe'dO!i%cO(P%eO~O}&QO!i&PO~Op!nO!P!oO!y;kO#Q!pO#R!pO#T!pO#U!pO(Q!lO(RTO(UUO(a!mO(k!sO~O!_'jO!`'iO!a'iO#S!pO#X'kO#Y'kO~PAtOa%lOh%VO!d#vO!i%cO'v%lO(n'mO~O!m'qO#]'oO~PCSOp!nO!P!oO(RTO(UUO(a!mO(k!sO~O![XOp(iX!P(iX!_(iX!`(iX!a(iX!y(iX#Q(iX#R(iX#S(iX#T(iX#U(iX#X(iX#Y(iX(Q(iX(R(iX(U(iX(a(iX(k(iX~O!`'iO!a'iO(Q!lO~PCrO'{'uO'|'uO'}'wO~O_!}O(R'yO(S!}O(T'yO~O_#QO(T'yO(U'yO(V#QO~Os'{O~P%[Ou#SO!R#TO(^#TO(_(OO~O!X(QO!V'SX!V'YX!Y'SX!Y'YX~P+}O!Y(SO!V(dX~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y(SO!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~O!V(dX~PGmO!V(XO~O!V(qX!Y(qX!d(qX!h(qX(n(qX~O#](qX#h#aX!Z(qX~PIpO#](YO!V(sX!Y(sX~O!Y(ZO!V(rX~O!V(^O~O#]$eO~PIpO!Z(_O~P`OR#zO}#yO!P#{O!i#xO(]VOP!ka[!kao!ka!Y!ka!m!ka#O!ka#k!ka#l!ka#m!ka#n!ka#o!ka#p!ka#q!ka#r!ka#s!ka#u!ka#w!ka#y!ka#z!ka(n!ka(u!ka(v!ka~Oa!ka'v!ka's!ka!V!ka!h!kas!ka![!ka%f!ka!d!ka~PKWO!h(`O~O!d#vO#](aO(n'mO!Y(pXa(pX'v(pX~O!h(pX~PMsO!P%fO![%gO!y]O#f(fO#g(eO(P%eO~O!Y(gO!h(oX~O!h(iO~O!P%fO![%gO#g(eO(P%eO~OP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#s(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX~O!d#vO!h(cX~P! aOR(kO}(jO!i#xO#P$dO!y!xa!P!xa~O!u!xa%e!xa![!xa#f!xa#g!xa(P!xa~P!#bO!u(oO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~O#h(uO~O!X(wO!h(gP~P%[O(a(yO(k[O~O!P({O!i#xO(a(yO(k[O~OP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![!eO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(P)YO(RTO(UUO(]VO(k[O(z=dO~O!Y$_Oa$oa'v$oa's$oa!h$oa!V$oa![$oa%f$oa!d$oa~O#t)aO~P!&fOh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~Og(lP~P!+oO})fO!d)eO![$]X$Y$]X$[$]X$^$]X$e$]X~O!d)eO![(wX$Y(wX$[(wX$^(wX$e(wX~O})fO~P!-xO})fO![(wX$Y(wX$[(wX$^(wX$e(wX~O![)hO$Y)lO$[)gO$^)gO$e)mO~O!X)pO~P!(vO$[$hO$^$gO$e)tO~Ok$xX}$xX#P$xX'u$xX(u$xX(v$xX~OgjXg$xXkjX!YjX#]jX~P!/nOu)vO(^)wO(_)yO~Ok*SO}){O'u)|O(u$}O(v%PO~Og)zO~P!0rOg*TO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P*VO![*WO!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(RTO(UUO(]$uO(u$}O(v%PO~O!X*ZO(P*UO!h({P~P!1aO#h*]O~O!i*^O~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(P*`O(RTO(UUO(]$uO(u$}O(v%PO~O!X*cO!V(|P~P!3`Oo*oOp!nO!P*eO!_*mO!`*gO!a*gO!i*^O#X*nO%]*iO(Q!lO(RTO(UUO(a!mO~O!Z*lO~P!5TO#P$dOk([X}([X'u([X(u([X(v([X!Y([X#]([X~Og([X#}([X~P!6VOk*tO#]*sOg(ZX!Y(ZX~O!Y*uOg(YX~O(P&WOg(YP~Op*xO~O!i*}O~O(P(sO~Om+RO!P%fO!X#iO![%gO!y]O#f#lO#g#iO(P%eO!h(oP~O!d#vO#h+SO~O!P%fO!X+UO!Y(ZO![%gO(P%eO!V(rP~Op'XO!P+WO!X+VO(RTO(UUO(a(yO~O!Z(tP~P!9VO!Y+XOa)QX'v)QX~OP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~Oa!ga!Y!ga'v!ga's!ga!V!ga!h!gas!ga![!ga%f!ga!d!ga~P!9}OR#zO}#yO!P#{O!i#xO(]VOP!oa[!oao!oa!Y!oa!m!oa#O!oa#k!oa#l!oa#m!oa#n!oa#o!oa#p!oa#q!oa#r!oa#s!oa#u!oa#w!oa#y!oa#z!oa(n!oa(u!oa(v!oa~Oa!oa'v!oa's!oa!V!oa!h!oas!oa![!oa%f!oa!d!oa~P!<eOR#zO}#yO!P#{O!i#xO(]VOP!qa[!qao!qa!Y!qa!m!qa#O!qa#k!qa#l!qa#m!qa#n!qa#o!qa#p!qa#q!qa#r!qa#s!qa#u!qa#w!qa#y!qa#z!qa(n!qa(u!qa(v!qa~Oa!qa'v!qa's!qa!V!qa!h!qas!qa![!qa%f!qa!d!qa~P!>{Oh%VOk+bO![']O%f+aO~O!d+dOa(XX![(XX'v(XX!Y(XX~Oa%lO![XO'v%lO~Oh%VO!i%cO~Oh%VO!i%cO(P%eO~O!d#vO#h(uO~Ob+oO%g+pO(P+lO(RTO(UUO!Z)UP~O!Y+qO`)TX~O[+uO~O`+vO~O![%}O(P%eO(Q!lO`)TP~Oh%VO#]+{O~Oh%VOk,OO![$|O~O![,QO~O},SO![XO~O%k%tO~O!u,XO~Oe,^O~Ob,_O(P#nO(RTO(UUO!Z)SP~Oe%{O~O%g!QO(P&WO~P=RO[,dO`,cO~OPYOQYOSfOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO!fuO!iZO!lYO!mYO!nYO!pvO!uxO!y]O%e}O(RTO(UUO(]VO(k[O(ziO~O![!eO!r!gO$V!kO(P!dO~P!E{O`,cOa%lO'v%lO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oa,iO!rwO#t!OO%i!OO%j!OO%k!OO~P!HeO!i&lO~O&Y,oO~O![,qO~O&k,sO&m,tOP&haQ&haS&haY&haa&had&hae&ham&hao&hap&haq&haw&hay&ha{&ha!P&ha!T&ha!U&ha![&ha!f&ha!i&ha!l&ha!m&ha!n&ha!p&ha!r&ha!u&ha!y&ha#t&ha$V&ha%e&ha%g&ha%i&ha%j&ha%k&ha%n&ha%p&ha%s&ha%t&ha%v&ha&S&ha&Y&ha&[&ha&^&ha&`&ha&c&ha&i&ha&o&ha&q&ha&s&ha&u&ha&w&ha's&ha(P&ha(R&ha(U&ha(]&ha(k&ha(z&ha!Z&ha&a&hab&ha&f&ha~O(P,yO~Oh!bX!Y!OX!Z!OX!d!OX!d!bX!i!bX#]!OX~O!Y!bX!Z!bX~P# kO!d-OO#],}Oh(fX!Y#eX!Z#eX!d(fX!i(fX~O!Y(fX!Z(fX~P#!^Oh%VO!d-QO!i%cO!Y!^X!Z!^X~Op!nO!P!oO(RTO(UUO(a!mO~OP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![!eO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(RTO(UUO(]VO(k[O(z=dO~O(P<fO~P##sO!Y-UO!Z(eX~O!Z-WO~O!d-OO#],}O!Y#eX!Z#eX~O!Y-XO!Z(tX~O!Z-ZO~O!`-[O!a-[O(Q!lO~P##bO!Z-_O~P'_Ok-bO![']O~O!V-gO~Op!xa!_!xa!`!xa!a!xa#Q!xa#R!xa#S!xa#T!xa#U!xa#X!xa#Y!xa(Q!xa(R!xa(U!xa(a!xa(k!xa~P!#bO!m-lO#]-jO~PCSO!`-nO!a-nO(Q!lO~PCrOa%lO#]-jO'v%lO~Oa%lO!d#vO#]-jO'v%lO~Oa%lO!d#vO!m-lO#]-jO'v%lO(n'mO~O'{'uO'|'uO'}-sO~Os-tO~O!V'Sa!Y'Sa~P!9}O!X-xO!V'SX!Y'SX~P%[O!Y(SO!V(da~O!V(da~PGmO!Y(ZO!V(ra~O!P%fO!X-|O![%gO(P%eO!V'YX!Y'YX~O#].OO!Y(pa!h(paa(pa'v(pa~O!d#vO~P#+yO!Y(gO!h(oa~O!P%fO![%gO#g.SO(P%eO~Om.XO!P%fO!X.UO![%gO!y]O#f.WO#g.UO(P%eO!Y']X!h']X~OR.]O!i#xO~Oh%VOk.`O![']O%f._O~Oa#`i!Y#`i'v#`i's#`i!V#`i!h#`is#`i![#`i%f#`i!d#`i~P!9}Ok=pO}){O'u)|O(u$}O(v%PO~O#h#[aa#[a#]#[a'v#[a!Y#[a!h#[a![#[a!V#[a~P#.uO#h([XP([XR([X[([Xa([Xo([X!P([X!i([X!m([X#O([X#k([X#l([X#m([X#n([X#o([X#p([X#q([X#r([X#s([X#u([X#w([X#y([X#z([X'v([X(]([X(n([X!h([X!V([X's([Xs([X![([X%f([X!d([X~P!6VO!Y.mO!h(gX~P!9}O!h.pO~O!V.rO~OP$[OR#zO}#yO!P#{O!i#xO!m$[O(]VO[#jia#jio#ji!Y#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#k#ji~P#2eO#k$OO~P#2eOP$[OR#zOo$aO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO(]VO[#jia#ji!Y#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#o#ji~P#5SO#o$QO~P#5SOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO(]VOa#ji!Y#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#u#ji~P#7qOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO(]VO(v#}Oa#ji!Y#ji#y#ji#z#ji'v#ji(n#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#w$UO~P#:XO#w#ji~P#:XO#u$SO~P#7qOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO(]VO(u#|O(v#}Oa#ji!Y#ji#z#ji'v#ji(n#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#y#ji~P#<}O#y$WO~P#<}OP]XR]X[]Xo]X}]X!P]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X!Y]X!Z]X~O#}]X~P#?lOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO#w;yO#y;{O#z;|O(]VO(n$YO(u#|O(v#}O~O#}.tO~P#AyO#P$dO#]<SO$P<SO#}(cX!Z(cX~P! aOa'`a!Y'`a'v'`a's'`a!h'`a!V'`as'`a!['`a%f'`a!d'`a~P!9}O[#jia#jio#ji!Y#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO(]VO(u#ji(v#ji~P#D{Ok=pO}){O'u)|O(u$}O(v%POP#jiR#ji!P#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji(]#ji~P#D{O!Y.xOg(lX~P!0rOg.zO~Oa$Oi!Y$Oi'v$Oi's$Oi!V$Oi!h$Ois$Oi![$Oi%f$Oi!d$Oi~P!9}O$[.{O$^.{O~O$[.|O$^.|O~O!d)eO#].}O![$bX$Y$bX$[$bX$^$bX$e$bX~O!X/OO~O![)hO$Y/QO$[)gO$^)gO$e/RO~O!Y;}O!Z(bX~P#AyO!Z/SO~O!d)eO$e(wX~O$e/UO~Os/VO~P!&fOu)vO(^)wO(_/YO~O!P/]O~O(u$}Ok%^a}%^a'u%^a(v%^a!Y%^a#]%^a~Og%^a#}%^a~P#K}O(v%POk%`a}%`a'u%`a(u%`a!Y%`a#]%`a~Og%`a#}%`a~P#LpO!YfX!dfX!hfX!h$xX(nfX~P!/nO!X/fO!Y(ZO(P/eO!V(rP!V(|P~P!1aOo*oO!_*mO!`*gO!a*gO!i*^O#X*nO%]*iO(Q!lO(RTO(UUO~Op<cO!P/gO!X+VO!Z*lO(a<bO!Z(tP~P#NZO!h/hO~P#.uO!Y/iO!d#vO(n'mO!h({X~O!h/nO~O!P%fO!X*ZO![%gO(P%eO!h({P~O#h/pO~O!V$xX!Y$xX!d%PX~P!/nO!Y/qO!V(|X~P#.uO!d/sO~O!V/uO~OmkO(P/vO~P.iOh%VOo/{O!d#vO!i%cO(n'mO~O!d+dO~Oa%lO!Y0PO'v%lO~O!Z0RO~P!5TO!`0SO!a0SO(Q!lO~P##bOp!nO!P0TO(RTO(UUO(a!mO~O#X0VO~Og%^a!Y%^a#]%^a#}%^a~P!0rOg%`a!Y%`a#]%`a#}%`a~P!0rO(P&WOg'iX!Y'iX~O!Y*uOg(Ya~Og0`O~OR0aO}0aO!P0bO#P$dOkza'uza(uza(vza!Yza#]za~Ogza#}za~P$&ZO}){O'u)|Ok$qa(u$qa(v$qa!Y$qa#]$qa~Og$qa#}$qa~P$'VO}){O'u)|Ok$sa(u$sa(v$sa!Y$sa#]$sa~Og$sa#}$sa~P$'xO#h0eO~Og%Ra!Y%Ra#]%Ra#}%Ra~P!0rO!d#vO~O#h0hO~O!Y+XOa)Qa'v)Qa~OR#zO}#yO!P#{O!i#xO(]VOP!oi[!oio!oi!Y!oi!m!oi#O!oi#k!oi#l!oi#m!oi#n!oi#o!oi#p!oi#q!oi#r!oi#s!oi#u!oi#w!oi#y!oi#z!oi(n!oi(u!oi(v!oi~Oa!oi'v!oi's!oi!V!oi!h!ois!oi![!oi%f!oi!d!oi~P$)gOh%VOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(RTO(UUO(]$uO(u$}O(v%PO~Om0qO(P0pO~P$+}O!d+dOa(Xa![(Xa'v(Xa!Y(Xa~O#h0wO~O[]X!YfX!ZfX~O!Y0xO!Z)UX~O!Z0zO~O[0{O~Ob0}O(P+lO(RTO(UUO~O![%}O(P%eO`'qX!Y'qX~O!Y+qO`)Ta~O!h1QO~P!9}O[1TO~O`1UO~O#]1XO~Ok1[O![$|O~O(a(yO!Z)RP~Oh%VOk1eO![1bO%f1dO~O[1oO!Y1mO!Z)SX~O!Z1pO~O`1rOa%lO'v%lO~O(P#nO(RTO(UUO~O#P$dO#]$eO$P$eOP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX~O#s1uO&W1vOa(cX~P$1eO#]$eO#s1uO&W1vO~Oa1xO~P%[Oa1zO~O&a1}OP&_iQ&_iS&_iY&_ia&_id&_ie&_im&_io&_ip&_iq&_iw&_iy&_i{&_i!P&_i!T&_i!U&_i![&_i!f&_i!i&_i!l&_i!m&_i!n&_i!p&_i!r&_i!u&_i!y&_i#t&_i$V&_i%e&_i%g&_i%i&_i%j&_i%k&_i%n&_i%p&_i%s&_i%t&_i%v&_i&S&_i&Y&_i&[&_i&^&_i&`&_i&c&_i&i&_i&o&_i&q&_i&s&_i&u&_i&w&_i's&_i(P&_i(R&_i(U&_i(]&_i(k&_i(z&_i!Z&_ib&_i&f&_i~Ob2TO!Z2RO&f2SO~P`O![XO!i2VO~O&m,tOP&hiQ&hiS&hiY&hia&hid&hie&him&hio&hip&hiq&hiw&hiy&hi{&hi!P&hi!T&hi!U&hi![&hi!f&hi!i&hi!l&hi!m&hi!n&hi!p&hi!r&hi!u&hi!y&hi#t&hi$V&hi%e&hi%g&hi%i&hi%j&hi%k&hi%n&hi%p&hi%s&hi%t&hi%v&hi&S&hi&Y&hi&[&hi&^&hi&`&hi&c&hi&i&hi&o&hi&q&hi&s&hi&u&hi&w&hi's&hi(P&hi(R&hi(U&hi(]&hi(k&hi(z&hi!Z&hi&a&hib&hi&f&hi~O!V2]O~O!Y!^a!Z!^a~P#AyOp!nO!P!oO!X2cO(a!mO!Y'TX!Z'TX~P@YO!Y-UO!Z(ea~O!Y'ZX!Z'ZX~P!9VO!Y-XO!Z(ta~O!Z2jO~P'_Oa%lO#]2sO'v%lO~Oa%lO!d#vO#]2sO'v%lO~Oa%lO!d#vO!m2wO#]2sO'v%lO(n'mO~Oa%lO'v%lO~P!9}O!Y$_Os$oa~O!V'Si!Y'Si~P!9}O!Y(SO!V(di~O!Y(ZO!V(ri~O!V(si!Y(si~P!9}O!Y(pi!h(pia(pi'v(pi~P!9}O#]2yO!Y(pi!h(pia(pi'v(pi~O!Y(gO!h(oi~O!P%fO![%gO!y]O#f3OO#g2}O(P%eO~O!P%fO![%gO#g2}O(P%eO~Ok3VO![']O%f3UO~Oh%VOk3VO![']O%f3UO~O#h%^aP%^aR%^a[%^aa%^ao%^a!P%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'v%^a(]%^a(n%^a!h%^a!V%^a's%^as%^a![%^a%f%^a!d%^a~P#K}O#h%`aP%`aR%`a[%`aa%`ao%`a!P%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'v%`a(]%`a(n%`a!h%`a!V%`a's%`as%`a![%`a%f%`a!d%`a~P#LpO#h%^aP%^aR%^a[%^aa%^ao%^a!P%^a!Y%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'v%^a(]%^a(n%^a!h%^a!V%^a's%^a#]%^as%^a![%^a%f%^a!d%^a~P#.uO#h%`aP%`aR%`a[%`aa%`ao%`a!P%`a!Y%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'v%`a(]%`a(n%`a!h%`a!V%`a's%`a#]%`as%`a![%`a%f%`a!d%`a~P#.uO#hzaPza[zaazaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza'vza(]za(nza!hza!Vza'szasza![za%fza!dza~P$&ZO#h$qaP$qaR$qa[$qaa$qao$qa!P$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa'v$qa(]$qa(n$qa!h$qa!V$qa's$qas$qa![$qa%f$qa!d$qa~P$'VO#h$saP$saR$sa[$saa$sao$sa!P$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa'v$sa(]$sa(n$sa!h$sa!V$sa's$sas$sa![$sa%f$sa!d$sa~P$'xO#h%RaP%RaR%Ra[%Raa%Rao%Ra!P%Ra!Y%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra'v%Ra(]%Ra(n%Ra!h%Ra!V%Ra's%Ra#]%Ras%Ra![%Ra%f%Ra!d%Ra~P#.uOa#`q!Y#`q'v#`q's#`q!V#`q!h#`qs#`q![#`q%f#`q!d#`q~P!9}O!X3_O!Y'UX!h'UX~P%[O!Y.mO!h(ga~O!Y.mO!h(ga~P!9}O!V3bO~O#}!ka!Z!ka~PKWO#}!ga!Y!ga!Z!ga~P#AyO#}!oa!Z!oa~P!<eO#}!qa!Z!qa~P!>{Og'XX!Y'XX~P!+oO!Y.xOg(la~OSfO![3vO$c3wO~O!Z3{O~Os3|O~P#.uOa$lq!Y$lq'v$lq's$lq!V$lq!h$lqs$lq![$lq%f$lq!d$lq~P!9}O!V4OO~P!&fO!P4PO~O}){O'u)|O(v%POk'ea(u'ea!Y'ea#]'ea~Og'ea#}'ea~P%+ZO}){O'u)|Ok'ga(u'ga(v'ga!Y'ga#]'ga~Og'ga#}'ga~P%+|O(n$YO~P#.uO!VfX!V$xX!YfX!Y$xX!d%PX#]fX~P!/nO(P<lO~P!1aO!P%fO!X4SO![%gO(P%eO!Y'aX!h'aX~O!Y/iO!h({a~O!Y/iO!d#vO!h({a~O!Y/iO!d#vO(n'mO!h({a~Og$zi!Y$zi#]$zi#}$zi~P!0rO!X4[O!V'cX!Y'cX~P!3`O!Y/qO!V(|a~O!Y/qO!V(|a~P#.uOP]XR]X[]Xo]X}]X!P]X!V]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X~O!d%WX#s%WX~P%/mO!d#vO#s4aO~Oh%VO!d#vO!i%cO~Oh%VOo4fO!i%cO(n'mO~Oo4kO!d#vO(n'mO~Op!nO!P4lO(RTO(UUO(a!mO~O(u$}Ok%^i}%^i'u%^i(v%^i!Y%^i#]%^i~Og%^i#}%^i~P%3^O(v%POk%`i}%`i'u%`i(u%`i!Y%`i#]%`i~Og%`i#}%`i~P%4POg(Zi!Y(Zi~P!0rO#]4rOg(Zi!Y(Zi~P!0rO!h4uO~Oa$mq!Y$mq'v$mq's$mq!V$mq!h$mqs$mq![$mq%f$mq!d$mq~P!9}O!V4yO~O!Y4zO![(}X~P#.uOa$xX![$xX%Z]X'v$xX!Y$xX~P!/nO%Z4}OalXklX}lX![lX'ulX'vlX(ulX(vlX!YlX~O%Z4}O~Ob5TO%g5UO(P+lO(RTO(UUO!Y'pX!Z'pX~O!Y0xO!Z)Ua~O[5YO~O`5ZO~Oa%lO'v%lO~P#.uO!Y5cO#]5eO!Z)RX~O!Z5fO~Oo5lOp!nO!P*eO!_!yO!`!vO!a!vO!y;kO#Q!pO#R!pO#S!pO#T!pO#U!pO#X5kO#Y!zO(Q!lO(RTO(UUO(a!mO(k!sO~O!Z5jO~P%9SOk5qO![1bO%f5pO~Oh%VOk5qO![1bO%f5pO~Ob5xO(P#nO(RTO(UUO!Y'oX!Z'oX~O!Y1mO!Z)Sa~O(RTO(UUO(a5zO~O`6OO~O#s6RO&W6SO~PMsO!h6TO~P%[Oa6VO~Oa6VO~P%[Ob2TO!Z6[O&f2SO~P`O!d6^O~O!d6`Oh(fi!Y(fi!Z(fi!d(fi!i(fio(fi(n(fi~O!Y#ei!Z#ei~P#AyO#]6aO!Y#ei!Z#ei~O!Y!^i!Z!^i~P#AyOa%lO#]6jO'v%lO~Oa%lO!d#vO#]6jO'v%lO~O!Y(pq!h(pqa(pq'v(pq~P!9}O!Y(gO!h(oq~O!P%fO![%gO#g6qO(P%eO~O![']O%f6tO~Ok6xO![']O%f6tO~O#h'eaP'eaR'ea['eaa'eao'ea!P'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea'v'ea(]'ea(n'ea!h'ea!V'ea's'eas'ea!['ea%f'ea!d'ea~P%+ZO#h'gaP'gaR'ga['gaa'gao'ga!P'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga'v'ga(]'ga(n'ga!h'ga!V'ga's'gas'ga!['ga%f'ga!d'ga~P%+|O#h$ziP$ziR$zi[$zia$zio$zi!P$zi!Y$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi'v$zi(]$zi(n$zi!h$zi!V$zi's$zi#]$zis$zi![$zi%f$zi!d$zi~P#.uO#h%^iP%^iR%^i[%^ia%^io%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i'v%^i(]%^i(n%^i!h%^i!V%^i's%^is%^i![%^i%f%^i!d%^i~P%3^O#h%`iP%`iR%`i[%`ia%`io%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i'v%`i(]%`i(n%`i!h%`i!V%`i's%`is%`i![%`i%f%`i!d%`i~P%4PO!Y'Ua!h'Ua~P!9}O!Y.mO!h(gi~O#}#`i!Y#`i!Z#`i~P#AyOP$[OR#zO}#yO!P#{O!i#xO!m$[O(]VO[#jio#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#k#ji~P%LRO#k;sO~P%LROP$[OR#zOo<PO}#yO!P#{O!i#xO!m$[O#k;sO#l;tO#m;tO#n;tO(]VO[#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#o#ji~P%NZO#o;uO~P%NZOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO(]VO#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#u#ji~P&!cOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO(]VO(v#}O#y#ji#z#ji#}#ji(n#ji(u#ji!Y#ji!Z#ji~O#w;yO~P&$dO#w#ji~P&$dO#u;wO~P&!cOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO#w;yO(]VO(u#|O(v#}O#z#ji#}#ji(n#ji!Y#ji!Z#ji~O#y#ji~P&&sO#y;{O~P&&sOa#{y!Y#{y'v#{y's#{y!V#{y!h#{ys#{y![#{y%f#{y!d#{y~P!9}O[#jio#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji!Y#ji!Z#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k;sO#l;tO#m;tO#n;tO(]VO(u#ji(v#ji~P&)oOk=qO}){O'u)|O(u$}O(v%POP#jiR#ji!P#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji(]#ji~P&)oO#P$dOP([XR([X[([Xk([Xo([X}([X!P([X!i([X!m([X#O([X#k([X#l([X#m([X#n([X#o([X#p([X#q([X#r([X#s([X#u([X#w([X#y([X#z([X#}([X'u([X(]([X(n([X(u([X(v([X!Y([X!Z([X~O#}$Oi!Y$Oi!Z$Oi~P#AyO#}!oi!Z!oi~P$)gOg'Xa!Y'Xa~P!0rO!Z7[O~O!Y'`a!Z'`a~P#AyO!V7]O~P#.uO!d#vO(n'mO!Y'aa!h'aa~O!Y/iO!h({i~O!Y/iO!d#vO!h({i~Og$zq!Y$zq#]$zq#}$zq~P!0rO!V'ca!Y'ca~P#.uO!d7dO~O!Y/qO!V(|i~P#.uO!Y/qO!V(|i~O!V7gO~Oh%VOo7lO!i%cO(n'mO~O!d#vO#s7nO~Oo7qO!d#vO(n'mO~O}){O'u)|O(v%POk'fa(u'fa!Y'fa#]'fa~Og'fa#}'fa~P&2pO}){O'u)|Ok'ha(u'ha(v'ha!Y'ha#]'ha~Og'ha#}'ha~P&3cO!V7sO~Og$|q!Y$|q#]$|q#}$|q~P!0rOa$my!Y$my'v$my's$my!V$my!h$mys$my![$my%f$my!d$my~P!9}O!d6`O~O!Y4zO![(}a~O![']OP$SaR$Sa[$Sao$Sa}$Sa!P$Sa!Y$Sa!i$Sa!m$Sa#O$Sa#k$Sa#l$Sa#m$Sa#n$Sa#o$Sa#p$Sa#q$Sa#r$Sa#s$Sa#u$Sa#w$Sa#y$Sa#z$Sa(]$Sa(n$Sa(u$Sa(v$Sa~O%f6tO~P&5lOa#`y!Y#`y'v#`y's#`y!V#`y!h#`ys#`y![#`y%f#`y!d#`y~P!9}O[7xO~Ob7zO(P+lO(RTO(UUO~O!Y0xO!Z)Ui~O`8OO~O(a(yO!Y'lX!Z'lX~O!Y5cO!Z)Ra~O!Z8XO~P%9SO(k!sO~P$$iO#X8YO~O![1bO~O![1bO%f8[O~Ok8_O![1bO%f8[O~O[8dO!Y'oa!Z'oa~O!Y1mO!Z)Si~O!h8hO~O!h8iO~O!h8lO~O!h8lO~P%[Oa8nO~O!d8oO~O!h8pO~O!Y(si!Z(si~P#AyOa%lO#]8xO'v%lO~O!Y(py!h(pya(py'v(py~P!9}O!Y(gO!h(oy~O%f8{O~P&5lO![']O%f8{O~O#h$zqP$zqR$zq[$zqa$zqo$zq!P$zq!Y$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq'v$zq(]$zq(n$zq!h$zq!V$zq's$zq#]$zqs$zq![$zq%f$zq!d$zq~P#.uO#h'faP'faR'fa['faa'fao'fa!P'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa'v'fa(]'fa(n'fa!h'fa!V'fa's'fas'fa!['fa%f'fa!d'fa~P&2pO#h'haP'haR'ha['haa'hao'ha!P'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha'v'ha(]'ha(n'ha!h'ha!V'ha's'has'ha!['ha%f'ha!d'ha~P&3cO#h$|qP$|qR$|q[$|qa$|qo$|q!P$|q!Y$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q'v$|q(]$|q(n$|q!h$|q!V$|q's$|q#]$|qs$|q![$|q%f$|q!d$|q~P#.uO!Y'Ui!h'Ui~P!9}O#}#`q!Y#`q!Z#`q~P#AyO(u$}OP%^aR%^a[%^ao%^a!P%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a#}%^a(]%^a(n%^a!Y%^a!Z%^a~Ok%^a}%^a'u%^a(v%^a~P&FnO(v%POP%`aR%`a[%`ao%`a!P%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a#}%`a(]%`a(n%`a!Y%`a!Z%`a~Ok%`a}%`a'u%`a(u%`a~P&HuOk=qO}){O'u)|O(v%PO~P&FnOk=qO}){O'u)|O(u$}O~P&HuOR0aO}0aO!P0bO#P$dOPza[zakzaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza#}za'uza(]za(nza(uza(vza!Yza!Zza~O}){O'u)|OP$qaR$qa[$qak$qao$qa!P$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa#}$qa(]$qa(n$qa(u$qa(v$qa!Y$qa!Z$qa~O}){O'u)|OP$saR$sa[$sak$sao$sa!P$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa#}$sa(]$sa(n$sa(u$sa(v$sa!Y$sa!Z$sa~Ok=qO}){O'u)|O(u$}O(v%PO~OP%RaR%Ra[%Rao%Ra!P%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra#}%Ra(]%Ra(n%Ra!Y%Ra!Z%Ra~P'#zO#}$lq!Y$lq!Z$lq~P#AyO#}$mq!Y$mq!Z$mq~P#AyO!Z9YO~O#}9ZO~P!0rO!d#vO!Y'ai!h'ai~O!d#vO(n'mO!Y'ai!h'ai~O!Y/iO!h({q~O!V'ci!Y'ci~P#.uO!Y/qO!V(|q~Oo9bO!d#vO(n'mO~O[9dO!V9cO~P#.uO!V9cO~O!d#vO#s9jO~Og(Zy!Y(Zy~P!0rO!Y'ja!['ja~P#.uOa%Yq![%Yq'v%Yq!Y%Yq~P#.uO[9mO~O!Y0xO!Z)Uq~O#]9qO!Y'la!Z'la~O!Y5cO!Z)Ri~P#AyO!P9sO~O![1bO%f9vO~O(RTO(UUO(a9{O~O!Y1mO!Z)Sq~O!h:OO~O!h:PO~O!h:QO~O!h:QO~P%[O#]:TO!Y#ey!Z#ey~O!Y#ey!Z#ey~P#AyO%f:YO~P&5lO![']O%f:YO~O#}#{y!Y#{y!Z#{y~P#AyOP$ziR$zi[$zio$zi!P$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi#}$zi(]$zi(n$zi!Y$zi!Z$zi~P'#zO}){O'u)|O(v%POP'eaR'ea['eak'eao'ea!P'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea#}'ea(]'ea(n'ea(u'ea!Y'ea!Z'ea~O}){O'u)|OP'gaR'ga['gak'gao'ga!P'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga#}'ga(]'ga(n'ga(u'ga(v'ga!Y'ga!Z'ga~O(u$}OP%^iR%^i[%^ik%^io%^i}%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i#}%^i'u%^i(]%^i(n%^i(v%^i!Y%^i!Z%^i~O(v%POP%`iR%`i[%`ik%`io%`i}%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i#}%`i'u%`i(]%`i(n%`i(u%`i!Y%`i!Z%`i~O#}$my!Y$my!Z$my~P#AyO#}#`y!Y#`y!Z#`y~P#AyO!d#vO!Y'aq!h'aq~O!Y/iO!h({y~O!V'cq!Y'cq~P#.uOo:dO!d#vO(n'mO~O[:hO!V:gO~P#.uO!V:gO~O!Y0xO!Z)Uy~O!Y5cO!Z)Rq~O(P:nO~O![1bO%f:qO~O!h:tO~O%f:yO~P&5lOP$zqR$zq[$zqo$zq!P$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq#}$zq(]$zq(n$zq!Y$zq!Z$zq~P'#zO}){O'u)|O(v%POP'faR'fa['fak'fao'fa!P'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa#}'fa(]'fa(n'fa(u'fa!Y'fa!Z'fa~O}){O'u)|OP'haR'ha['hak'hao'ha!P'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha#}'ha(]'ha(n'ha(u'ha(v'ha!Y'ha!Z'ha~OP$|qR$|q[$|qo$|q!P$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q#}$|q(]$|q(n$|q!Y$|q!Z$|q~P'#zOg%b!Z!Y%b!Z#]%b!Z#}%b!Z~P!0rO!V:}O~P#.uOo;OO!d#vO(n'mO~O[;QO!V:}O~P#.uO!Y'lq!Z'lq~P#AyO!Y#e!Z!Z#e!Z~P#AyO#h%b!ZP%b!ZR%b!Z[%b!Za%b!Zo%b!Z!P%b!Z!Y%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z'v%b!Z(]%b!Z(n%b!Z!h%b!Z!V%b!Z's%b!Z#]%b!Zs%b!Z![%b!Z%f%b!Z!d%b!Z~P#.uOo;YO!d#vO(n'mO~O!V;ZO~P#.uOo;bO!d#vO(n'mO~O!V;cO~P#.uOP%b!ZR%b!Z[%b!Zo%b!Z!P%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z#}%b!Z(]%b!Z(n%b!Z!Y%b!Z!Z%b!Z~P'#zOo;fO!d#vO(n'mO~Os(bX~P1qO}%pO~P!(vO(Q!lO~P!(vO!VfX!YfX#]fX~P%/mOP]XR]X[]Xo]X}]X!P]X!Y]X!YfX!i]X!m]X#O]X#P]X#]]X#]fX#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X~O!dfX!h]X!hfX(nfX~P'HXOP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![XO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(P)YO(RTO(UUO(]VO(k[O(z=dO~O!Y;}O!Z$oa~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<YO!P${O![$|O!f=kO!i$xO#g<`O$V%_O$r<[O$t<^O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~O#t)aO~P'L}Oo!bX(n!bX~P# kOo(fX(n(fX~P#!^O!Z]X!ZfX~P'HXO!VfX!V$xX!YfX!Y$xX#]fX~P!/nO#h;rO~O!d#vO#h;rO~O#]<SO~O#s;vO~O#]<dO!Y(sX!Z(sX~O#]<SO!Y(qX!Z(qX~O#h<eO~Og<gO~P!0rO#h<mO~O#h<nO~O!d#vO#h<oO~O!d#vO#h<eO~O#}<pO~P#AyO#h<qO~O#h<rO~O#h<wO~O#h<xO~O#h<yO~O#h<zO~O#}<{O~P!0rO#}<|O~P!0rO#P#Q#R#T#U#X#f#g#r(z$r$t$w%Z%e%f%g%n%p%s%t%v%x~'zT#l!U'x(Q#mp#k#no}'y$['y(P$^(a~",
  goto: "$6w)YPPPPPP)ZPP)^P)oP+P/RPPPP6XPP6oPP<g@VP@jP@jPPP@jPBnP@jP@jP@jPBrPBwPCfPH`PPPHdPPPPHdKgPPPKmL_PHdPHdPPNmHdPPPHdPHdP!!tHdP!&[!'a!'jP!(^!(b!(^!+oPPPPPPP!,`!'aPP!,p!.bP!1nHdHd!1s!5P!9m!9m!=lPPP!=tHdPPPPPPPPPPP!ATP!BbPPHd!CsPHdPHdHdHdHdHdPHd!EVP!HaP!KgP!Kk!Ku!Ky!KyP!H^P!K}!K}P# TP# XHdHd# _#$dBr@jP@jP@j@jP#%q@j@j#(P@j#*s@j#,{@j@j#-k#/{#/{#0Q#0Z#/{#0fP#/{P@j#1O@j#4u@j@j6XPPP#8rPPP#9]#9]P#9]P#9s#9]PP#9yP#9pP#9p#:^#9p#:x#;O#;R)^#;U)^P#;]#;]#;]P)^P)^P)^P)^PP)^P#;c#;fP#;f)^P#;jP#;mP)^P)^P)^P)^P)^P)^)^PP#;s#;y#<U#<[#<b#<h#<n#<|#=S#=^#=d#=n#=t#>U#>[#>|#?`#?f#?l#?z#@a#BQ#B`#Bg#C}#D]#Ey#FX#F_#Fe#Fk#Fu#F{#GR#G]#Go#GuPPPPPPPPPPP#G{PPPPPPP#Hp#Kw#Ma#Mh#MpPPP$%OP$%X$(Q$.k$.n$.q$/p$/s$/z$0SP$0Y$0]P$0y$0}$1u$3T$3Y$3pPP$3u$3{$4PP$4S$4W$4[$5W$5o$6W$6[$6_$6b$6h$6k$6o$6sR!|RoqOXst!Z#d%k&o&q&r&t,l,q1}2QY!vQ']-^1b5iQ%rvQ%zyQ&R|Q&g!VS'T!e-UQ'c!iS'i!r!yU*g$|*W*kQ+j%{Q+w&TQ,]&aQ-['[Q-f'dQ-n'jQ0S*mQ1l,^R<a;n%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W,i,l,q-b-j-x.O.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3_4l5q6R6S6V6j8_8n8xS#q];k!r)[$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gU*z%[<X<YQ+o%}Q,_&dQ,f&lQ0n+bQ0r+dQ0}+pQ1t,dQ3R.`Q5T0xQ5x1mQ6v3VQ7z5UR9O6x'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g!S!nQ!r!v!y!z$|'T'[']'i'j'k*g*k*m*n-U-[-^-n0S0V1b5i5k%S$ti#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qQ&U|Q'R!eS'X%g-XQ+o%}Q,_&dQ0d*}Q0}+pQ1S+vQ1s,cQ1t,dQ5T0xQ5^1UQ5x1mQ5{1oQ5|1rQ7z5UQ7}5ZQ8g6OQ9p8OQ9|8dR<c*WrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QR,a&h&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=f=g[#]WZ#W#Z'U(Q!b%hm#h#i#l$x%c%f(Z(e(f(g*V*Z*^+U+V+X,h-O-|.S.T.U.W/f/i2V2}3O4S6`6qQ%uxQ%yyS&O|&TQ&[!TQ'`!hQ'b!iQ(n#sS+i%z%{Q+m%}Q,W&_Q,[&aS-e'c'dQ.b(oQ0v+jQ0|+pQ1O+qQ1R+uQ1g,XS1k,],^Q2o-fQ5S0xQ5W0{Q5]1TQ5w1lQ7y5UQ7|5YQ9l7xR:k9m!O$zi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m!^%wy!i!u%y%z%{'S'b'c'd'h'r*f+i+j-R-e-f-m/y/|0v2h2o2v4d4e4h7k9fQ+c%uQ+|&XQ,P&YQ,Z&aQ.a(nQ1f,WU1j,[,],^Q3W.bQ5r1gS5v1k1lQ8c5w#d=h#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qo=i<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|W%Ti%V*u=dS&X!Q&fQ&Y!RQ&Z!SR+z&V%T%Si#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qT)w$u)xV*z%[<X<YW'X!e%g*W-XS(z#y#zQ+^%pQ+t&QS.Z(j(kQ1],QQ4s0aR8S5c'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g$i$^c#Y#e%o%q%s(P(V(q(v)O)P)Q)R)S)T)U)V)W)X)Z)])_)d)n+_+s-S-q-v-{-}.l.o.s.u.v.w/Z0f2^2a2q2x3^3c3d3e3f3g3h3i3j3k3l3m3n3o3r3s3z4w5Q6c6i6n6}7O7X7Y8U8r8v9Q9W9X:V:m:u;l=ZT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ'V!eR2d-U!W!nQ!e!r!v!y!z$|'T'[']'i'j'k*W*g*k*m*n-U-[-^-n0S0V1b5i5kR1_,SnqOXst!Z#d%k&o&q&r&t,l,q1}2QQ&v!^Q's!xS(p#u;rQ+g%xQ,U&[Q,V&^Q-c'aQ-p'lS.k(u<eS0g+S<oQ0t+hQ1a,TQ2U,sQ2W,tQ2`-PQ2m-dQ2p-hS4x0h<yQ5O0uS5R0w<zQ6b2bQ6f2nQ6k2uQ7w5PQ8s6dQ8t6gQ8w6lR:S8p$d$]c#Y#e%q%s(P(V(q(v)O)P)Q)R)S)T)U)V)W)X)Z)])_)d)n+_+s-S-q-v-{-}.l.o.s.v.w/Z0f2^2a2q2x3^3c3d3e3f3g3h3i3j3k3l3m3n3o3r3s3z4w5Q6c6i6n6}7O7X7Y8U8r8v9Q9W9X:V:m:u;l=ZS(l#p'fQ(|#zS+]%o.uS.[(k(mR3P.]'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gS#q];kQ&q!XQ&r!YQ&t![Q&u!]R1|,oQ'^!hQ+`%uQ-a'`S.^(n+cQ2k-`W3T.a.b0m0oQ6e2lW6r3Q3S3W4|U8z6s6u6wU:X8|8}9PS:w:W:ZQ;U:xR;^;VU!wQ']-^T5g1b5i!Q_OXZ`st!V!Z#d#h%c%k&f&h&o&q&r&t(g,l,q.T1}2Q]!pQ!r']-^1b5iT#q];k%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xS(z#y#zS.Z(j(k!s=Q$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gU$fd)[,fS(m#p'fU*r%R(t3qU0c*y.g7TQ4|0nQ6s3RQ8}6vR:Z9Om!tQ!r!v!y!z']'i'j'k-^-n1b5i5kQ'q!uS(c#g1wS-l'h'tQ/l*YQ/y*fQ2w-oQ4W/mQ4d/{Q4e/|Q4j0UQ7`4RS7k4f4hS7o4k4mQ9]7aQ9a7gQ9f7lQ9k7qS:c9b9cS:|:d:gS;X:};OS;a;Y;ZS;e;b;cR;h;fQ#wbQ'p!uS(b#g1wS(d#m+RQ+T%dQ+e%vQ+k%|U-k'h'q'tQ.P(cQ/k*YQ/z*fQ/}*hQ0s+fQ1h,YS2t-l-oQ2|.XS4V/l/mQ4`/wS4c/y0UQ4g0OQ5t1iQ6m2wQ7_4RQ7c4WU7j4d4j4mQ7m4iQ8a5uS9[7`7aQ9`7gQ9h7oQ9i7pQ9y8bQ:a9]S:b9a9cQ:j9kQ:s9zS:{:c:gS;W:|:}S;`;X;ZS;d;a;cQ;g;eQ;i;hQ=T=OQ=`=XR=a=YV!wQ']-^%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xS#wz!j!r<}$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gR=T=f%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xQ%dj!^%vy!i!u%y%z%{'S'b'c'd'h'r*f+i+j-R-e-f-m/y/|0v2h2o2v4d4e4h7k9fS%|z!jQ+f%wQ,Y&aW1i,Z,[,],^U5u1j1k1lS8b5v5wQ9z8c!r=O$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ=X=eR=Y=f%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xY#bWZ#W#Z(Q!b%hm#h#i#l$x%c%f(Z(e(f(g*V*Z*^+U+V+X,h-O-|.S.T.U.W/f/i2V2}3O4S6`6qQ,g&l!p=P$Z$n)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gR=S'UU'Y!e%g*WR2f-X%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W,i,l,q-b-j-x.O.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3_4l5q6R6S6V6j8_8n8x!r)[$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ,f&lQ0n+bQ3R.`Q6v3VR9O6x!b$Tc#Y%o(P(V(q(v)W)X)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;l!P;x)Z)n-S.u2^2a3c3l3m3r3z6c7O7X7Y8U8r9Q9W9X:m:u=Z!f$Vc#Y%o(P(V(q(v)T)U)W)X)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;l!T;z)Z)n-S.u2^2a3c3i3j3l3m3r3z6c7O7X7Y8U8r9Q9W9X:m:u=Z!^$Zc#Y%o(P(V(q(v)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;lQ4Q/dz=g)Z)n-S.u2^2a3c3r3z6c7O7X7Y8U8r9Q9W9X:m:u=ZQ=l=nR=m=o'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gS$oh$pR3w.}'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t.}/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gT$kf$qQ$ifS)g$l)kR)s$qT$jf$qT)i$l)k'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t.}/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gT$oh$pQ$rhR)r$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8x!s=e$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g#glOPXZst!Z!`!o#S#d#o#{$n%k&h&k&l&o&q&r&t&x'Q'_({)p*e+W+b,i,l,q-b.`/O/g0T0b1e1u1v1x1z1}2Q2S3V3v4l5q6R6S6V6x8_8n!O%Ri$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m#d(t#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qQ+O%`Q/[){o3q<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!O$yi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mQ*_$zU*h$|*W*kQ+P%aQ0O*i#d=V#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn=W<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|Q=[=hQ=]=iQ=^=jR=_=k!O%Ri$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m#d(t#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qo3q<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|noOXst!Z#d%k&o&q&r&t,l,q1}2QS*b${*VQ,z&{Q,{&}R4Z/q%S%Si#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qQ+}&YQ1Z,PQ5a1YR8R5bV*j$|*W*kU*j$|*W*kT5h1b5iS/w*e/gQ4i0TT7p4l9sQ+e%vQ/}*hQ0s+fQ1h,YQ5t1iQ8a5uQ9y8bR:s9z!O%Oi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mr*O$v)b*P*q+Q/o0[0]3t4X4v7^7r:`=U=b=cS0W*p0X#d<T#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn<U<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!b<h(r)`*X*a.c.f.j/W/d/t0l1W3Z3}4Y4^5`6y6|7e7h7t7v9_9g:e:i:z;P;[=n=o`<i3p7P7S7W9R:[:_;_S<s.e3[T<t7R9U!O%Qi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mv*Q$v)b*R*p+Q/`/o0[0]3t4X4n4v7^7r:`=U=b=cS0Y*q0Z#d<V#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn<W<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!f<j(r)`*X*a.d.e.j/W/d/t0l1W3X3Z3}4Y4^5`6y6z6|7e7h7t7v9_9g:e:i:z;P;[=n=od<k3p7Q7R7W9R9S:[:]:_;_S<u.f3]T<v7S9VrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QQ&c!UR,i&lrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QR&c!UQ,R&ZR1V+zsnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QQ1c,WS5o1f1gU8Z5m5n5rS9u8]8^S:o9t9wQ;R:pR;];SQ&j!VR,b&fR5{1oR9|8dS&O|&TR1O+qQ&o!WR,l&pR,r&uT2O,q2QR,v&vQ,u&vR2X,vQ'v!{R-r'vSsOtQ#dXT%ns#dQ#OTR'x#OQ#RUR'z#RQ)x$uR/X)xQ#UVR'}#UQ#XWU(T#X(U-yQ(U#YR-y(VQ-V'VR2e-VQ.n(vS3`.n3aR3a.oQ-^']R2i-^Y!rQ']-^1b5iR'g!rQ.y)bR3u.yU#_W%f*VU([#_(]-zQ(]#`R-z(WQ-Y'YR2g-Yt`OXst!V!Z#d%k&f&h&o&q&r&t,l,q1}2QS#hZ%cU#r`#h.TR.T(gQ(h#jQ.Q(dW.Y(h.Q2z6oQ2z.RR6o2{Q)k$lR/P)kQ$phR)q$pQ$`cU)^$`-u<OQ-u;lR<O)nQ/j*YW4T/j4U7b9^U4U/k/l/mS7b4V4WR9^7c$])}$v(r)`)b*X*a*p*q*{*|+Q.e.f.h.i.j/W/`/b/d/o/t0[0]0l1W3X3Y3Z3p3t3}4X4Y4^4n4p4v5`6y6z6{6|7R7S7U7V7W7^7e7h7r7t7v9R9S9T9_9g:[:]:^:_:`:e:i:z;P;[;_=U=b=c=n=oQ/r*aU4]/r4_7fQ4_/tR7f4^S*k$|*WR0Q*kr*P$v)b*p*q+Q/o0[0]3t4X4v7^7r:`=U=b=c!b.c(r)`*X*a.e.f.j/W/d/t0l1W3Z3}4Y4^5`6y6|7e7h7t7v9_9g:e:i:z;P;[=n=oU/a*P.c7Pa7P3p7R7S7W9R:[:_;_Q0X*pQ3[.eU4o0X3[9UR9U7Rv*R$v)b*p*q+Q/`/o0[0]3t4X4n4v7^7r:`=U=b=c!f.d(r)`*X*a.e.f.j/W/d/t0l1W3X3Z3}4Y4^5`6y6z6|7e7h7t7v9_9g:e:i:z;P;[=n=oU/c*R.d7Qe7Q3p7R7S7W9R9S:[:]:_;_Q0Z*qQ3].fU4q0Z3]9VR9V7SQ*v%UR0_*vQ4{0lR7u4{Q+Y%iR0k+YQ5d1]S8T5d9rR9r8UQ,T&[R1`,TQ5i1bR8W5iQ1n,_S5y1n8eR8e5{Q0y+mW5V0y5X7{9nQ5X0|Q7{5WR9n7|Q+r&OR1P+rQ2Q,qR6Z2QYrOXst#dQ&s!ZQ+[%kQ,k&oQ,m&qQ,n&rQ,p&tQ1{,lS2O,q2QR6Y1}Q%mpQ&w!_Q&z!aQ&|!bQ'O!cQ'n!uQ+Z%jQ+g%xQ+y&UQ,a&jQ,x&yW-i'h'p'q'tQ-p'lQ0P*jQ0t+hS1q,b,eQ2Y,wQ2Z,zQ2[,{Q2p-hW2r-k-l-o-qQ5O0uQ5[1SQ5_1WQ5s1hQ5}1sQ6X1|U6h2q2t2wQ6k2uQ7w5PQ8P5^Q8Q5`Q8V5hQ8`5tQ8f5|S8u6i6mQ8w6lQ9o7}Q9x8aQ9}8gQ:U8vQ:l9pQ:r9yQ:v:VR;T:sQ%xyQ'a!iQ'l!uU+h%y%z%{Q-P'SU-d'b'c'dS-h'h'rQ/x*fS0u+i+jQ2b-RS2n-e-fQ2u-mS4b/y/|Q5P0vQ6d2hQ6g2oQ6l2vU7i4d4e4hQ9e7kR:f9fS$wi=dR*w%VU%Ui%V=dR0^*uQ$viS(r#v+dS)`$b$cQ)b$dQ*X$xS*a${*VQ*p%OQ*q%QQ*{%]Q*|%^Q+Q%bQ.e<TQ.f<VQ.h<ZQ.i<]Q.j<_Q/W)vQ/`*OQ/b*QQ/d*SQ/o*]S/t*c/fQ0[*sQ0]*tl0l+a,O._1[1d3U5p6t8[8{9v:Y:q:yQ1W+{Q3X<hQ3Y<jQ3Z<mS3p<Q<RQ3t.xS3}/]4PQ4X/pQ4Y/qQ4^/sQ4n0WQ4p0YQ4v0eQ5`1XQ6y<qQ6z<sQ6{<uQ6|<wQ7R<UQ7S<WQ7U<[Q7V<^Q7W<`Q7^4QQ7e4[Q7h4aQ7r4rQ7t4zQ7v4}Q9R<nQ9S<iQ9T<kQ9_7dQ9g7nQ:[<rQ:]<tQ:^<vQ:_<xQ:`9ZQ:e9dQ:i9jQ:z<{Q;P:hQ;[;QQ;_<|Q=U=dQ=b=lQ=c=mQ=n=pR=o=qQ*y%[Q.g<XR7T<YnpOXst!Z#d%k&o&q&r&t,l,q1}2QQ!fPS#fZ#oQ&y!`W'e!o*e0T4lQ'|#SQ(}#{Q)o$nS,e&h&kQ,j&lQ,w&xS,|'Q/gQ-`'_Q.q({Q/T)pQ0i+WQ0o+bQ1y,iQ2l-bQ3S.`Q3y/OQ4t0bQ5n1eQ6P1uQ6Q1vQ6U1xQ6W1zQ6]2SQ6w3VQ7Z3vQ8^5qQ8j6RQ8k6SQ8m6VQ9P6xQ9w8_R:R8n#[cOPXZst!Z!`!o#d#o#{%k&h&k&l&o&q&r&t&x'Q'_({*e+W+b,i,l,q-b.`/g0T0b1e1u1v1x1z1}2Q2S3V4l5q6R6S6V6x8_8nQ#YWQ#eYQ%ouQ%qvS%sw!gS(P#W(SQ(V#ZQ(q#uQ(v#xQ)O$OQ)P$PQ)Q$QQ)R$RQ)S$SQ)T$TQ)U$UQ)V$VQ)W$WQ)X$XQ)Z$ZQ)]$_Q)_$aQ)d$eW)n$n)p/O3vQ+_%rQ+s&PS-S'U2cQ-q'oS-v(Q-xQ-{(YQ-}(aQ.l(uQ.o(wQ.s;jQ.u;mQ.v;nQ.w;qQ/Z)zQ0f+SQ2^,}Q2a-QQ2q-jQ2x.OQ3^.mQ3c;rQ3d;sQ3e;tQ3f;uQ3g;vQ3h;wQ3i;xQ3j;yQ3k;zQ3l;{Q3m;|Q3n.tQ3o<PQ3r<SQ3s<aQ3z;}Q4w0hQ5Q0wQ6c<dQ6i2sQ6n2yQ6}3_Q7O<eQ7X<gQ7Y<oQ8U5eQ8r6aQ8v6jQ9Q<pQ9W<yQ9X<zQ:V8xQ:m9qQ:u:TQ;l#SR=Z=gR#[WR'W!el!tQ!r!v!y!z']'i'j'k-^-n1b5i5kS'S!e-UU*f$|*W*kS-R'T'[S/|*g*mQ0U*nQ2h-[Q4h0SR4m0VR(x#xQ!fQT-]']-^]!qQ!r']-^1b5iQ#p]R'f;kR)c$dY!uQ']-^1b5iQ'h!rS'r!v!yS't!z5kS-m'i'jQ-o'kR2v-nT#kZ%cS#jZ%cS%im,hU(d#h#i#lS.R(e(fQ.V(gQ0j+XQ2{.SU2|.T.U.WS6p2}3OR8y6qd#^W#W#Z%f(Q(Z*V+U-|/fr#gZm#h#i#l%c(e(f(g+X.S.T.U.W2}3O6qS*Y$x*^Q/m*ZQ1w,hQ2_-OQ4R/iQ6_2VQ7a4SQ8q6`T=R'U+VV#aW%f*VU#`W%f*VS(R#W(ZU(W#Z+U/fS-T'U+VT-w(Q-|V'Z!e%g*WQ$lfR)u$qT)j$l)kR3x.}T*[$x*^T*d${*VQ0m+aQ1Y,OQ3Q._Q5b1[Q5m1dQ6u3UQ8]5pQ8|6tQ9t8[Q:W8{Q:p9vQ:x:YQ;S:qR;V:ynqOXst!Z#d%k&o&q&r&t,l,q1}2QQ&i!VR,a&ftmOXst!U!V!Z#d%k&f&o&q&r&t,l,q1}2QR,h&lT%jm,hR1^,QR,`&dQ&S|R+x&TR+n%}T&m!W&pT&n!W&pT2P,q2Q",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 377,
  context: Hw,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 34, 36, 48, 50, 52, ""],
    ["group", -26, 9, 17, 19, 65, 204, 208, 212, 213, 215, 218, 221, 231, 233, 239, 241, 243, 245, 248, 254, 260, 262, 264, 266, 268, 270, 271, "Statement", -34, 13, 14, 29, 32, 33, 39, 48, 51, 52, 54, 59, 67, 69, 73, 77, 79, 81, 82, 107, 108, 117, 118, 135, 138, 140, 141, 142, 143, 144, 146, 147, 166, 167, 169, "Expression", -23, 28, 30, 34, 38, 40, 42, 171, 173, 175, 176, 178, 179, 180, 182, 183, 184, 186, 187, 188, 198, 200, 202, 203, "Type", -3, 85, 100, 106, "ClassItem"],
    ["openedBy", 23, "<", 35, "InterpolationStart", 53, "[", 57, "{", 70, "(", 159, "JSXStartCloseTag"],
    ["closedBy", 24, ">", 37, "InterpolationEnd", 47, "]", 58, "}", 71, ")", 164, "JSXEndTag"]
  ],
  propSources: [nQ],
  skippedNodes: [0, 5, 6, 274],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$h&j(V!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(V!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$h&j(SpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(SpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$h&j(Sp(V!b'x0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(T#S$h&j'y0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$h&j(Sp(V!b'y0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$h&j!m),Q(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#u(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#u(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(R':f$h&j(V!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$h&j(V!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$h&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$c`$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$c``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$c`$h&j(V!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(V!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$c`(V!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$h&j(Sp(V!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$h&j(Sp(V!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$h&j(V!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$h&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(V!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$h&j(SpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(SpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Sp(V!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$h&j(k%1l(Sp(V!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$h&j(Sp(V!b$[#t(P,2j(a$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$h&j(Sp(V!b$[#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$h&j(Sp(V!b#m(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$h&j$P(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(v+JY$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$h&j#y(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(U';W$h&j(SpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$h&j(SpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$h&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$c`$h&j(SpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(SpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$c`(SpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!i/.^$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!h!Lf$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$h&j(Sp(V!b(Q%&f#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$h&j(Sp(V!b#k(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$h&j(Sp(V!bo+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!Y+Jf$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$h&j(Sp(V!b}.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_!X!L^$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$h&j(Sp(V!b#l(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$h&j(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$h&j(V!b!U7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$h&j!U7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$h&j!U7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!U7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!U7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$h&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$h&j(V!b!U7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(V!b!U7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(V!b!U7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(V!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$h&j(V!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$h&j(Sp!U7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$h&j(Sp!U7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Sp!U7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Sp!U7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(SpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$h&j(SpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$h&j(Sp(V!b!U7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Sp(V!b!U7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Sp(V!b!U7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Sp(V!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$h&j(Sp(V!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$h&j(Sp(V!b'z0/l!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$h&j(Sp(V!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$h&j(V!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$h&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(V!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$h&j(SpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(SpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Sp(V!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$h&j$P(Ch(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Y#t$h&j(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!d$b$h&j#})Lv(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#O-<U(Sp(V!b(z7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$j&j(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#o(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$P(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#p(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#]*!Y$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#h(Cl$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#p(Ch$e#|$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#p(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#o(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#o(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(n(Ct$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$h&j#z(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!y$Ip$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!P0,v$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$h&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$h&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$h&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$h&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$h&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!V#)l$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#w(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$h&j(Sp(V!b(]+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$h&j(Sp(V!b(P,2j$^#t(a$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$h&j(Sp(V!b$^#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X![#Hb(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(u+JY$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!Z(CdsBr$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!n7`$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$h&j(Sp(V!b'x0/l$[#t(P,2j(a$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$h&j(Sp(V!b'y0/l$[#t(P,2j(a$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [Jw, eQ, tQ, iQ, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Kw, new pa("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOu~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!R~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(_~~", 141, 336), new pa("j~RQYZXz{^~^O'|~~aP!P!Qd~iO'}~~", 25, 319)],
  topRules: { Script: [0, 7], SingleExpression: [1, 272], SingleClassItem: [2, 273] },
  dialects: { jsx: 0, ts: 14980 },
  dynamicPrecedences: { 77: 1, 79: 1, 91: 1, 167: 1, 196: 1 },
  specialized: [{ term: 323, get: (i) => sQ[i] || -1 }, { term: 339, get: (i) => rQ[i] || -1 }, { term: 92, get: (i) => oQ[i] || -1 }],
  tokenPrec: 15004
}), _m = [
  /* @__PURE__ */ Ke("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], aQ = /* @__PURE__ */ _m.concat([
  /* @__PURE__ */ Ke("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Ke("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), ef = /* @__PURE__ */ new Qb(), Mm = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function En(i) {
  return (e, t) => {
    let n = e.node.getChild("VariableDefinition");
    return n && t(n, i), !0;
  };
}
const cQ = ["FunctionDeclaration"], hQ = {
  FunctionDeclaration: /* @__PURE__ */ En("function"),
  ClassDeclaration: /* @__PURE__ */ En("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ En("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ En("type"),
  NamespaceDeclaration: /* @__PURE__ */ En("namespace"),
  VariableDefinition(i, e) {
    i.matchContext(cQ) || e(i, "variable");
  },
  TypeDefinition(i, e) {
    e(i, "type");
  },
  __proto__: null
};
function Rm(i, e) {
  let t = ef.get(e);
  if (t)
    return t;
  let n = [], s = !0;
  function r(o, l) {
    let a = i.sliceString(o.from, o.to);
    n.push({ label: a, type: l });
  }
  return e.cursor(Re.IncludeAnonymous).iterate((o) => {
    if (s)
      s = !1;
    else if (o.name) {
      let l = hQ[o.name];
      if (l && l(o, r) || Mm.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of Rm(i, o.node))
        n.push(l);
      return !1;
    }
  }), ef.set(e, n), n;
}
const tf = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, Vm = [
  "TemplateString",
  "String",
  "RegExp",
  "LineComment",
  "BlockComment",
  "VariableDefinition",
  "TypeDefinition",
  "Label",
  "PropertyDefinition",
  "PropertyName",
  "PrivatePropertyDefinition",
  "PrivatePropertyName",
  ".",
  "?."
];
function uQ(i) {
  let e = Ee(i.state).resolveInner(i.pos, -1);
  if (Vm.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && tf.test(i.state.sliceDoc(e.from, e.to));
  if (!t && !i.explicit)
    return null;
  let n = [];
  for (let s = e; s; s = s.parent)
    Mm.has(s.name) && (n = n.concat(Rm(i.state.doc, s)));
  return {
    options: n,
    from: t ? e.from : i.pos,
    validFor: tf
  };
}
const Ri = /* @__PURE__ */ pn.define({
  name: "javascript",
  parser: /* @__PURE__ */ lQ.configure({
    props: [
      /* @__PURE__ */ tc.add({
        IfStatement: /* @__PURE__ */ Wo({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ Wo({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: Yb,
        SwitchBody: (i) => {
          let e = i.textAfter, t = /^\s*\}/.test(e), n = /^\s*(case|default)\b/.test(e);
          return i.baseIndent + (t ? 0 : n ? 1 : 2) * i.unit;
        },
        Block: /* @__PURE__ */ ta({ closing: "}" }),
        ArrowFunction: (i) => i.baseIndent + i.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ Wo({ except: /^{/ }),
        JSXElement(i) {
          let e = /^\s*<\//.test(i.textAfter);
          return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
        },
        JSXEscape(i) {
          let e = /\s*\}/.test(i.textAfter);
          return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
        },
        "JSXOpenTag JSXSelfClosingTag"(i) {
          return i.column(i.node.from) + i.unit;
        }
      }),
      /* @__PURE__ */ nc.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": sO,
        BlockComment(i) {
          return { from: i.from + 2, to: i.to - 2 };
        }
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
}), Em = {
  test: (i) => /^JSX/.test(i.name),
  facet: /* @__PURE__ */ Jp({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, fQ = /* @__PURE__ */ Ri.configure({ dialect: "ts" }, "typescript"), dQ = /* @__PURE__ */ Ri.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ Ja.add((i) => i.isTop ? [Em] : void 0)]
}), pQ = /* @__PURE__ */ Ri.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ Ja.add((i) => i.isTop ? [Em] : void 0)]
}, "typescript");
let Lm = (i) => ({ label: i, type: "keyword" });
const Xm = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Lm), OQ = /* @__PURE__ */ Xm.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(Lm));
function nf(i = {}) {
  let e = i.jsx ? i.typescript ? pQ : dQ : i.typescript ? fQ : Ri, t = i.typescript ? aQ.concat(OQ) : _m.concat(Xm);
  return new tO(e, [
    Ri.data.of({
      autocomplete: kk(Vm, ym(t))
    }),
    Ri.data.of({
      autocomplete: uQ
    }),
    i.jsx ? yQ : []
  ]);
}
function mQ(i) {
  for (; ; ) {
    if (i.name == "JSXOpenTag" || i.name == "JSXSelfClosingTag" || i.name == "JSXFragmentTag")
      return i;
    if (i.name == "JSXEscape" || !i.parent)
      return null;
    i = i.parent;
  }
}
function sf(i, e, t = i.length) {
  for (let n = e == null ? void 0 : e.firstChild; n; n = n.nextSibling)
    if (n.name == "JSXIdentifier" || n.name == "JSXBuiltin" || n.name == "JSXNamespacedName" || n.name == "JSXMemberExpression")
      return i.sliceString(n.from, Math.min(n.to, t));
  return "";
}
const gQ = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), yQ = /* @__PURE__ */ z.inputHandler.of((i, e, t, n, s) => {
  if ((gQ ? i.composing : i.compositionStarted) || i.state.readOnly || e != t || n != ">" && n != "/" || !Ri.isActiveAt(i.state, e, -1))
    return !1;
  let r = s(), { state: o } = r, l = o.changeByRange((a) => {
    var c;
    let { head: h } = a, u = Ee(o).resolveInner(h - 1, -1), f;
    if (u.name == "JSXStartTag" && (u = u.parent), !(o.doc.sliceString(h - 1, h) != n || u.name == "JSXAttributeValue" && u.to > h)) {
      if (n == ">" && u.name == "JSXFragmentTag")
        return { range: a, changes: { from: h, insert: "</>" } };
      if (n == "/" && u.name == "JSXStartCloseTag") {
        let d = u.parent, p = d.parent;
        if (p && d.from == h - 2 && ((f = sf(o.doc, p.firstChild, h)) || ((c = p.firstChild) === null || c === void 0 ? void 0 : c.name) == "JSXFragmentTag")) {
          let O = `${f}>`;
          return { range: E.cursor(h + O.length, -1), changes: { from: h, insert: O } };
        }
      } else if (n == ">") {
        let d = mQ(u);
        if (d && d.name == "JSXOpenTag" && !/^\/?>|^<\//.test(o.doc.sliceString(h, h + 2)) && (f = sf(o.doc, d, h)))
          return { range: a, changes: { from: h, insert: `</${f}>` } };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (i.dispatch([
    r,
    o.update(l, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
}), vQ = "#e5c07b", rf = "#e06c75", bQ = "#56b6c2", SQ = "#ffffff", mr = "#abb2bf", ga = "#7d8799", xQ = "#61afef", kQ = "#98c379", of = "#d19a66", wQ = "#c678dd", QQ = "#21252b", lf = "#2c313a", af = "#282c34", rl = "#353a42", PQ = "#3E4451", cf = "#528bff", $Q = /* @__PURE__ */ z.theme({
  "&": {
    color: mr,
    backgroundColor: af
  },
  ".cm-content": {
    caretColor: cf
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: cf },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: PQ },
  ".cm-panels": { backgroundColor: QQ, color: mr },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": { backgroundColor: "#6699ff0b" },
  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: af,
    color: ga,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: lf
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: rl
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: rl,
    borderBottomColor: rl
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: lf,
      color: mr
    }
  }
}, { dark: !0 }), CQ = /* @__PURE__ */ $s.define([
  {
    tag: x.keyword,
    color: wQ
  },
  {
    tag: [x.name, x.deleted, x.character, x.propertyName, x.macroName],
    color: rf
  },
  {
    tag: [/* @__PURE__ */ x.function(x.variableName), x.labelName],
    color: xQ
  },
  {
    tag: [x.color, /* @__PURE__ */ x.constant(x.name), /* @__PURE__ */ x.standard(x.name)],
    color: of
  },
  {
    tag: [/* @__PURE__ */ x.definition(x.name), x.separator],
    color: mr
  },
  {
    tag: [x.typeName, x.className, x.number, x.changed, x.annotation, x.modifier, x.self, x.namespace],
    color: vQ
  },
  {
    tag: [x.operator, x.operatorKeyword, x.url, x.escape, x.regexp, x.link, /* @__PURE__ */ x.special(x.string)],
    color: bQ
  },
  {
    tag: [x.meta, x.comment],
    color: ga
  },
  {
    tag: x.strong,
    fontWeight: "bold"
  },
  {
    tag: x.emphasis,
    fontStyle: "italic"
  },
  {
    tag: x.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: x.link,
    color: ga,
    textDecoration: "underline"
  },
  {
    tag: x.heading,
    fontWeight: "bold",
    color: rf
  },
  {
    tag: [x.atom, x.bool, /* @__PURE__ */ x.special(x.variableName)],
    color: of
  },
  {
    tag: [x.processingInstruction, x.string, x.inserted],
    color: kQ
  },
  {
    tag: x.invalid,
    color: SQ
  }
]), TQ = [$Q, /* @__PURE__ */ sc(CQ)], Fi = 63, hf = 64, AQ = 1, ZQ = 2, Dm = 3, _Q = 4, qm = 5, MQ = 6, RQ = 7, jm = 65, VQ = 66, EQ = 8, LQ = 9, XQ = 10, DQ = 11, qQ = 12, zm = 13, jQ = 19, zQ = 20, BQ = 29, YQ = 33, IQ = 34, NQ = 47, WQ = 0, Sc = 1, ya = 2, ms = 3, va = 4;
class $i {
  constructor(e, t, n) {
    this.parent = e, this.depth = t, this.type = n, this.hash = (e ? e.hash + e.hash << 8 : 0) + t + (t << 4) + n;
  }
}
$i.top = new $i(null, -1, WQ);
function Hn(i, e) {
  for (let t = 0, n = e - i.pos - 1; ; n--, t++) {
    let s = i.peek(n);
    if (Kt(s) || s == -1) return t;
  }
}
function ba(i) {
  return i == 32 || i == 9;
}
function Kt(i) {
  return i == 10 || i == 13;
}
function Bm(i) {
  return ba(i) || Kt(i);
}
function Ai(i) {
  return i < 0 || Bm(i);
}
const UQ = new Am({
  start: $i.top,
  reduce(i, e) {
    return i.type == ms && (e == zQ || e == IQ) ? i.parent : i;
  },
  shift(i, e, t, n) {
    if (e == Dm)
      return new $i(i, Hn(n, n.pos), Sc);
    if (e == jm || e == qm)
      return new $i(i, Hn(n, n.pos), ya);
    if (e == Fi)
      return i.parent;
    if (e == jQ || e == YQ)
      return new $i(i, 0, ms);
    if (e == zm && i.type == va)
      return i.parent;
    if (e == NQ) {
      let s = /[1-9]/.exec(n.read(n.pos, t.pos));
      if (s) return new $i(i, i.depth + +s[0], va);
    }
    return i;
  },
  hash(i) {
    return i.hash;
  }
});
function vn(i, e, t = 0) {
  return i.peek(t) == e && i.peek(t + 1) == e && i.peek(t + 2) == e && Ai(i.peek(t + 3));
}
const GQ = new ei((i, e) => {
  if (i.next == -1 && e.canShift(hf))
    return i.acceptToken(hf);
  let t = i.peek(-1);
  if ((Kt(t) || t < 0) && e.context.type != ms) {
    if (vn(
      i,
      45
      /* '-' */
    ))
      if (e.canShift(Fi)) i.acceptToken(Fi);
      else return i.acceptToken(AQ, 3);
    if (vn(
      i,
      46
      /* '.' */
    ))
      if (e.canShift(Fi)) i.acceptToken(Fi);
      else return i.acceptToken(ZQ, 3);
    let n = 0;
    for (; i.next == 32; )
      n++, i.advance();
    (n < e.context.depth || n == e.context.depth && e.context.type == Sc && (i.next != 45 || !Ai(i.peek(1)))) && // Not blank
    i.next != -1 && !Kt(i.next) && i.next != 35 && i.acceptToken(Fi, -n);
  }
}, { contextual: !0 }), FQ = new ei((i, e) => {
  if (e.context.type == ms) {
    i.next == 63 && (i.advance(), Ai(i.next) && i.acceptToken(RQ));
    return;
  }
  if (i.next == 45)
    i.advance(), Ai(i.next) && i.acceptToken(e.context.type == Sc && e.context.depth == Hn(i, i.pos - 1) ? _Q : Dm);
  else if (i.next == 63)
    i.advance(), Ai(i.next) && i.acceptToken(e.context.type == ya && e.context.depth == Hn(i, i.pos - 1) ? MQ : qm);
  else {
    let t = i.pos;
    for (; ; )
      if (ba(i.next)) {
        if (i.pos == t) return;
        i.advance();
      } else if (i.next == 33)
        Ym(i);
      else if (i.next == 38)
        Sa(i);
      else if (i.next == 42) {
        Sa(i);
        break;
      } else if (i.next == 39 || i.next == 34) {
        if (xc(i, !0)) break;
        return;
      } else if (i.next == 91 || i.next == 123) {
        if (!KQ(i)) return;
        break;
      } else {
        Im(i, !0, !1, 0);
        break;
      }
    for (; ba(i.next); ) i.advance();
    if (i.next == 58) {
      if (i.pos == t && e.canShift(BQ)) return;
      let n = i.peek(1);
      Ai(n) && i.acceptTokenTo(e.context.type == ya && e.context.depth == Hn(i, t) ? VQ : jm, t);
    }
  }
}, { contextual: !0 });
function HQ(i) {
  return i > 32 && i < 127 && i != 34 && i != 37 && i != 44 && i != 60 && i != 62 && i != 92 && i != 94 && i != 96 && i != 123 && i != 124 && i != 125;
}
function uf(i) {
  return i >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70;
}
function ff(i, e) {
  return i.next == 37 ? (i.advance(), uf(i.next) && i.advance(), uf(i.next) && i.advance(), !0) : HQ(i.next) || e && i.next == 44 ? (i.advance(), !0) : !1;
}
function Ym(i) {
  if (i.advance(), i.next == 60) {
    for (i.advance(); ; )
      if (!ff(i, !0)) {
        i.next == 62 && i.advance();
        break;
      }
  } else
    for (; ff(i, !1); )
      ;
}
function Sa(i) {
  for (i.advance(); !Ai(i.next) && Ur(i.tag) != "f"; ) i.advance();
}
function xc(i, e) {
  let t = i.next, n = !1, s = i.pos;
  for (i.advance(); ; ) {
    let r = i.next;
    if (r < 0) break;
    if (i.advance(), r == t)
      if (r == 39)
        if (i.next == 39) i.advance();
        else break;
      else
        break;
    else if (r == 92 && t == 34)
      i.next >= 0 && i.advance();
    else if (Kt(r)) {
      if (e) return !1;
      n = !0;
    } else if (e && i.pos >= s + 1024)
      return !1;
  }
  return !n;
}
function KQ(i) {
  for (let e = [], t = i.pos + 1024; ; )
    if (i.next == 91 || i.next == 123)
      e.push(i.next), i.advance();
    else if (i.next == 39 || i.next == 34) {
      if (!xc(i, !0)) return !1;
    } else if (i.next == 93 || i.next == 125) {
      if (e[e.length - 1] != i.next - 2) return !1;
      if (e.pop(), i.advance(), !e.length) return !0;
    } else {
      if (i.next < 0 || i.pos > t || Kt(i.next))
        return !1;
      i.advance();
    }
}
const JQ = "iiisiiissisfissssssssssssisssiiissssssssssssssssssssssssssfsfssissssssssssssssssssssssssssfif";
function Ur(i) {
  return i < 33 ? "u" : i > 125 ? "s" : JQ[i - 33];
}
function ol(i, e) {
  let t = Ur(i);
  return t != "u" && !(e && t == "f");
}
function Im(i, e, t, n) {
  if (Ur(i.next) == "s" || (i.next == 63 || i.next == 58 || i.next == 45) && ol(i.peek(1), t))
    i.advance();
  else
    return !1;
  let s = i.pos;
  for (; ; ) {
    let r = i.next, o = 0, l = n + 1;
    for (; Bm(r); ) {
      if (Kt(r)) {
        if (e) return !1;
        l = 0;
      } else
        l++;
      r = i.peek(++o);
    }
    if (!(r >= 0 && (r == 58 ? ol(i.peek(o + 1), t) : r == 35 ? i.peek(o - 1) != 32 : ol(r, t))) || !t && l <= n || l == 0 && !t && (vn(i, 45, o) || vn(i, 46, o)))
      break;
    if (e && Ur(r) == "f") return !1;
    for (let c = o; c >= 0; c--) i.advance();
    if (e && i.pos > s + 1024) return !1;
  }
  return !0;
}
const e2 = new ei((i, e) => {
  if (i.next == 33)
    Ym(i), i.acceptToken(qQ);
  else if (i.next == 38 || i.next == 42) {
    let t = i.next == 38 ? XQ : DQ;
    Sa(i), i.acceptToken(t);
  } else i.next == 39 || i.next == 34 ? (xc(i, !1), i.acceptToken(LQ)) : Im(i, !1, e.context.type == ms, e.context.depth) && i.acceptToken(EQ);
}), t2 = new ei((i, e) => {
  let t = e.context.type == va ? e.context.depth : -1, n = i.pos;
  e: for (; ; ) {
    let s = 0, r = i.next;
    for (; r == 32; ) r = i.peek(++s);
    if (!s && (vn(i, 45, s) || vn(i, 46, s)) || !Kt(r) && (t < 0 && (t = Math.max(e.context.depth + 1, s)), s < t))
      break;
    for (; ; ) {
      if (i.next < 0) break e;
      let o = Kt(i.next);
      if (i.advance(), o) continue e;
      n = i.pos;
    }
  }
  i.acceptTokenTo(zm, n);
}), i2 = lo({
  DirectiveName: x.keyword,
  DirectiveContent: x.attributeValue,
  "DirectiveEnd DocEnd": x.meta,
  QuotedLiteral: x.string,
  BlockLiteralHeader: x.special(x.string),
  BlockLiteralContent: x.content,
  Literal: x.content,
  "Key/Literal Key/QuotedLiteral": x.definition(x.propertyName),
  "Anchor Alias": x.labelName,
  Tag: x.typeName,
  Comment: x.lineComment,
  ": , -": x.separator,
  "?": x.punctuation,
  "[ ]": x.squareBracket,
  "{ }": x.brace
}), n2 = yn.deserialize({
  version: 14,
  states: "5lQ!ZQgOOO#PQfO'#CpO#uQfO'#DOOOQR'#Dv'#DvO$qQgO'#DRO%gQdO'#DUO%nQgO'#DUO&ROaO'#D[OOQR'#Du'#DuO&{QgO'#D^O'rQgO'#D`OOQR'#Dt'#DtO(iOqO'#DbOOQP'#Dj'#DjO(zQaO'#CmO)YQgO'#CmOOQP'#Cm'#CmQ)jQaOOQ)uQgOOQ]QgOOO*PQdO'#CrO*nQdO'#CtOOQO'#Dw'#DwO+]Q`O'#CxO+hQdO'#CwO+rQ`O'#CwOOQO'#Cv'#CvO+wQdO'#CvOOQO'#Cq'#CqO,UQ`O,59[O,^QfO,59[OOQR,59[,59[OOQO'#Cx'#CxO,eQ`O'#DPO,pQdO'#DPOOQO'#Dx'#DxO,zQdO'#DxO-XQ`O,59jO-aQfO,59jOOQR,59j,59jOOQR'#DS'#DSO-hQcO,59mO-sQgO'#DVO.TQ`O'#DVO.YQcO,59pOOQR'#DX'#DXO#|QfO'#DWO.hQcO'#DWOOQR,59v,59vO.yOWO,59vO/OOaO,59vO/WOaO,59vO/cQgO'#D_OOQR,59x,59xO0VQgO'#DaOOQR,59z,59zOOQP,59|,59|O0yOaO,59|O1ROaO,59|O1aOqO,59|OOQP-E7h-E7hO1oQgO,59XOOQP,59X,59XO2PQaO'#DeO2_QgO'#DeO2oQgO'#DkOOQP'#Dk'#DkQ)jQaOOO3PQdO'#CsOOQO,59^,59^O3kQdO'#CuOOQO,59`,59`OOQO,59c,59cO4VQdO,59cO4aQdO'#CzO4kQ`O'#CzOOQO,59b,59bOOQU,5:Q,5:QOOQR1G.v1G.vO4pQ`O1G.vOOQU-E7d-E7dO4xQdO,59kOOQO,59k,59kO5SQdO'#DQO5^Q`O'#DQOOQO,5:d,5:dOOQU,5:R,5:ROOQR1G/U1G/UO5cQ`O1G/UOOQU-E7e-E7eO5kQgO'#DhO5xQcO1G/XOOQR1G/X1G/XOOQR,59q,59qO6TQgO,59qO6eQdO'#DiO6lQgO'#DiO7PQcO1G/[OOQR1G/[1G/[OOQR,59r,59rO#|QfO,59rOOQR1G/b1G/bO7_OWO1G/bO7dOaO1G/bOOQR,59y,59yOOQR,59{,59{OOQP1G/h1G/hO7lOaO1G/hO7tOaO1G/hO8POaO1G/hOOQP1G.s1G.sO8_QgO,5:POOQP,5:P,5:POOQP,5:V,5:VOOQP-E7i-E7iOOQO,59_,59_OOQO,59a,59aOOQO1G.}1G.}OOQO,59f,59fO8oQdO,59fOOQR7+$b7+$bP,XQ`O'#DfOOQO1G/V1G/VOOQO,59l,59lO8yQdO,59lOOQR7+$p7+$pP9TQ`O'#DgOOQR'#DT'#DTOOQR,5:S,5:SOOQR-E7f-E7fOOQR7+$s7+$sOOQR1G/]1G/]O9YQgO'#DYO9jQ`O'#DYOOQR,5:T,5:TO#|QfO'#DZO9oQcO'#DZOOQR-E7g-E7gOOQR7+$v7+$vOOQR1G/^1G/^OOQR7+$|7+$|O:QOWO7+$|OOQP7+%S7+%SO:VOaO7+%SO:_OaO7+%SOOQP1G/k1G/kOOQO1G/Q1G/QOOQO1G/W1G/WOOQR,59t,59tO:jQgO,59tOOQR,59u,59uO#|QfO,59uOOQR<<Hh<<HhOOQP<<Hn<<HnO:zOaO<<HnOOQR1G/`1G/`OOQR1G/a1G/aOOQPAN>YAN>Y",
  stateData: ";S~O!fOS!gOS^OS~OP_OQbORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!V[O!cTO~O`cO~P]OVkOWROXROYeOZfO[dOcPOmhOqQO~OboO~P!bOVtOWROXROYeOZfO[dOcPOmrOqQO~OpwO~P#WORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!cTO~OSvP!avP!bvP~P#|OWROXROYeOZfO[dOcPOqQO~OmzO~P%OOm!OOUzP!azP!bzP!dzP~P#|O^!SO!b!QO!f!TO!g!RO~ORSOTUOWROXROcPOqQO!PVO!cTO~OY!UOP!QXQ!QX!V!QX!`!QXS!QX!a!QX!b!QXU!QXm!QX!d!QX~P&aO[!WOP!SXQ!SX!V!SX!`!SXS!SX!a!SX!b!SXU!SXm!SX!d!SX~P&aO^!ZO!W![O!b!YO!f!]O!g!YO~OP!_O!V[OQaX!`aX~OPaXQaX!VaX!`aX~P#|OP!bOQ!cO!V[O~OP_O!V[O~P#|OWROXROY!fOcPOqQObfXmfXofXpfX~OWROXRO[!hOcPOqQObhXmhXohXphX~ObeXmlXoeX~ObkXokX~P%OOm!kO~Om!lObnPonP~P%OOb!pOo!oO~Ob!pO~P!bOm!sOosXpsX~OosXpsX~P%OOm!uOotPptP~P%OOo!xOp!yO~Op!yO~P#WOS!|O!a#OO!b#OO~OUyX!ayX!byX!dyX~P#|Om#QO~OU#SO!a#UO!b#UO!d#RO~Om#WOUzX!azX!bzX!dzX~O]#XO~O!b#XO!g#YO~O^#ZO!b#XO!g#YO~OP!RXQ!RX!V!RX!`!RXS!RX!a!RX!b!RXU!RXm!RX!d!RX~P&aOP!TXQ!TX!V!TX!`!TXS!TX!a!TX!b!TXU!TXm!TX!d!TX~P&aO!b#^O!g#^O~O^#_O!b#^O!f#`O!g#^O~O^#_O!W#aO!b#^O!g#^O~OPaaQaa!Vaa!`aa~P#|OP#cO!V[OQ!XX!`!XX~OP!XXQ!XX!V!XX!`!XX~P#|OP_O!V[OQ!_X!`!_X~P#|OWROXROcPOqQObgXmgXogXpgX~OWROXROcPOqQObiXmiXoiXpiX~Obkaoka~P%OObnXonX~P%OOm#kO~Ob#lOo!oO~Oosapsa~P%OOotXptX~P%OOm#pO~Oo!xOp#qO~OSwP!awP!bwP~P#|OS!|O!a#vO!b#vO~OUya!aya!bya!dya~P#|Om#xO~P%OOm#{OU}P!a}P!b}P!d}P~P#|OU#SO!a$OO!b$OO!d#RO~O]$QO~O!b$QO!g$RO~O!b$SO!g$SO~O^$TO!b$SO!g$SO~O^$TO!b$SO!f$UO!g$SO~OP!XaQ!Xa!V!Xa!`!Xa~P#|Obnaona~P%OOotapta~P%OOo!xO~OU|X!a|X!b|X!d|X~P#|Om$ZO~Om$]OU}X!a}X!b}X!d}X~O]$^O~O!b$_O!g$_O~O^$`O!b$_O!g$_O~OU|a!a|a!b|a!d|a~P#|O!b$cO!g$cO~O",
  goto: ",]!mPPPPPPPPPPPPPPPPP!nPP!v#v#|$`#|$c$f$j$nP%VPPP!v%Y%^%a%{&O%a&R&U&X&_&b%aP&e&{&e'O'RPP']'a'g'm's'y(XPPPPPPPP(_)e*X+c,VUaObcR#e!c!{ROPQSTUXY_bcdehknrtvz!O!U!W!_!b!c!f!h!k!l!s!u!|#Q#R#S#W#c#k#p#x#{$Z$]QmPR!qnqfPQThknrtv!k!l!s!u#R#k#pR!gdR!ieTlPnTjPnSiPnSqQvQ{TQ!mkQ!trQ!vtR#y#RR!nkTsQvR!wt!RWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]RySR#t!|R|TR|UQ!PUR#|#SR#z#RR#z#SyZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]R!VXR!XYa]O^abc!a!c!eT!da!eQnPR!rnQvQR!{vQ!}yR#u!}Q#T|R#}#TW^Obc!cS!^^!aT!aa!eQ!eaR#f!eW`Obc!cQxSS}U#SQ!`_Q#PzQ#V!OQ#b!_Q#d!bQ#s!|Q#w#QQ$P#WQ$V#cQ$Y#xQ$[#{Q$a$ZR$b$]xZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]Q!VXQ!XYQ#[!UR#]!W!QWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]pfPQThknrtv!k!l!s!u#R#k#pQ!gdQ!ieQ#g!fR#h!hSgPn^pQTkrtv#RQ!jhQ#i!kQ#j!lQ#n!sQ#o!uQ$W#kR$X#pQuQR!zv",
  nodeNames: "⚠ DirectiveEnd DocEnd - - ? ? ? Literal QuotedLiteral Anchor Alias Tag BlockLiteralContent Comment Stream BOM Document ] [ FlowSequence Item Tagged Anchored Anchored Tagged FlowMapping Pair Key : Pair , } { FlowMapping Pair Pair BlockSequence Item Item BlockMapping Pair Pair Key Pair Pair BlockLiteral BlockLiteralHeader Tagged Anchored Anchored Tagged Directive DirectiveName DirectiveContent Document",
  maxTerm: 74,
  context: UQ,
  nodeProps: [
    ["isolate", -3, 8, 9, 14, ""],
    ["openedBy", 18, "[", 32, "{"],
    ["closedBy", 19, "]", 33, "}"]
  ],
  propSources: [i2],
  skippedNodes: [0],
  repeatNodeCount: 6,
  tokenData: "-Y~RnOX#PXY$QYZ$]Z]#P]^$]^p#Ppq$Qqs#Pst$btu#Puv$yv|#P|}&e}![#P![!]'O!]!`#P!`!a'i!a!}#P!}#O*g#O#P#P#P#Q+Q#Q#o#P#o#p+k#p#q'i#q#r,U#r;'S#P;'S;=`#z<%l?HT#P?HT?HU,o?HUO#PQ#UU!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PQ#kTOY#PZs#Pt;'S#P;'S;=`#z<%lO#PQ#}P;=`<%l#P~$VQ!f~XY$Qpq$Q~$bO!g~~$gS^~OY$bZ;'S$b;'S;=`$s<%lO$b~$vP;=`<%l$bR%OX!WQOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR%rX!WQ!VPOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR&bP;=`<%l%kR&lUoP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'VUmP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'p[!PP!WQOY#PZp#Ppq#hq{#P{|(f|}#P}!O(f!O!R#P!R![)p![;'S#P;'S;=`#z<%lO#PR(mW!PP!WQOY#PZp#Ppq#hq!R#P!R![)V![;'S#P;'S;=`#z<%lO#PR)^U!PP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR)wY!PP!WQOY#PZp#Ppq#hq{#P{|)V|}#P}!O)V!O;'S#P;'S;=`#z<%lO#PR*nUcP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+XUbP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+rUqP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,]UpP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,vU`P!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#P",
  tokenizers: [GQ, FQ, e2, t2, 0, 1],
  topRules: { Stream: [0, 15] },
  tokenPrec: 0
}), s2 = /* @__PURE__ */ yn.deserialize({
  version: 14,
  states: "!vOQOPOOO]OPO'#C_OhOPO'#C^OOOO'#Cc'#CcOpOPO'#CaQOOOOOO{OPOOOOOO'#Cb'#CbO!WOPO'#C`O!`OPO,58xOOOO-E6a-E6aOOOO-E6`-E6`OOOO'#C_'#C_OOOO1G.d1G.d",
  stateData: "!h~OXPOYROWTP~OWVXXRXYRX~OYVOXSP~OXROYROWTX~OXROYROWTP~OYVOXSX~OX[O~OXY~",
  goto: "vWPPX[beioRUOQQOR]XRXQTTOUQWQRZWSSOURYS",
  nodeNames: "⚠ Document Frontmatter DashLine FrontmatterContent Body",
  maxTerm: 10,
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "$z~RXOYnYZ!^Z]n]^!^^}n}!O!i!O;'Sn;'S;=`!c<%lOn~qXOYnYZ!^Z]n]^!^^;'Sn;'S;=`!c<%l~n~On~~!^~!cOY~~!fP;=`<%ln~!lZOYnYZ!^Z]n]^!^^}n}!O#_!O;'Sn;'S;=`!c<%l~n~On~~!^~#bZOYnYZ!^Z]n]^!^^}n}!O$T!O;'Sn;'S;=`!c<%l~n~On~~!^~$WXOYnYZ$sZ]n]^$s^;'Sn;'S;=`!c<%l~n~On~~$s~$zOX~Y~",
  tokenizers: [0],
  topRules: { Document: [0, 1] },
  tokenPrec: 67
}), r2 = /* @__PURE__ */ pn.define({
  name: "yaml",
  parser: /* @__PURE__ */ n2.configure({
    props: [
      /* @__PURE__ */ tc.add({
        Stream: (i) => {
          for (let e = i.node.resolve(i.pos, -1); e && e.to >= i.pos; e = e.parent) {
            if (e.name == "BlockLiteralContent" && e.from < e.to)
              return i.baseIndentFor(e);
            if (e.name == "BlockLiteral")
              return i.baseIndentFor(e) + i.unit;
            if (e.name == "BlockSequence" || e.name == "BlockMapping")
              return i.column(e.from, 1);
            if (e.name == "QuotedLiteral")
              return null;
            if (e.name == "Literal") {
              let t = i.column(e.from, 1);
              if (t == i.lineIndent(e.from, 1))
                return t;
              if (e.to > i.pos)
                return null;
            }
          }
          return null;
        },
        FlowMapping: /* @__PURE__ */ ta({ closing: "}" }),
        FlowSequence: /* @__PURE__ */ ta({ closing: "]" })
      }),
      /* @__PURE__ */ nc.add({
        "FlowMapping FlowSequence": sO,
        "Item Pair BlockLiteral": (i, e) => ({ from: e.doc.lineAt(i.from).to, to: i.to })
      })
    ]
  }),
  languageData: {
    commentTokens: { line: "#" },
    indentOnInput: /^\s*[\]\}]$/
  }
});
function o2() {
  return new tO(r2);
}
x.meta;
const l2 = { class: "editor-wrapper" }, TA = {
  __name: "SScriptEditor",
  props: /* @__PURE__ */ Gf({
    height: {
      type: [String, Number],
      default: 0
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    lang: {
      type: String,
      default: null
    }
  }, {
    modelValue: {
      type: String,
      default: ""
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i) {
    const e = Ff(i, "modelValue"), t = i, n = N(() => {
      const o = t.readonly ? [fa, nf(), gi.of(Xr)] : [fa, nf(), TQ, gi.of(Xr)];
      return t.lang === "yaml" && o.push(o2()), o;
    }), s = G(null), r = N(() => {
      const o = t.height ? { height: `${t.height}px` } : {}, l = t.readonly ? { backgroundColor: "transparent" } : { backgroundColor: "#282c34" };
      return { ...o, ...l };
    });
    return (o, l) => (Z(), X("div", l2, [
      L(de(Sw), {
        ref_key: "editor",
        ref: s,
        modelValue: e.value,
        "onUpdate:modelValue": l[0] || (l[0] = (a) => e.value = a),
        class: "script-editor",
        autofocus: !0,
        "indent-with-tab": !0,
        "tab-size": 2,
        extensions: n.value,
        readonly: i.readonly,
        style: ht(r.value)
      }, null, 8, ["modelValue", "extensions", "readonly", "style"])
    ]));
  }
}, a2 = {}, c2 = { class: "s-table__form" };
function h2(i, e) {
  return Z(), X("div", c2, [
    ie(i.$slots, "default")
  ]);
}
const AA = /* @__PURE__ */ $e(a2, [["render", h2]]), u2 = {
  key: 0,
  class: "s-form__item-label"
}, f2 = {
  key: 0,
  class: "required"
}, d2 = { class: "s-form__item-content-item" }, p2 = {
  key: 0,
  class: "s-form__item-append"
}, O2 = {
  __name: "SFormItem",
  props: {
    className: {
      type: String,
      default: "",
      description: "페이지타이틀"
    },
    contentClass: {
      type: String,
      default: "",
      description: "콘텐트 영역 클랙스"
    },
    label: { type: String, required: !0, default: "", description: "폼라벨" },
    showLabel: { type: Boolean, required: !1, default: !0, description: "폼라벨 노출 여부" },
    name: { type: String, default: "", description: "validation 체크 시 필수 값" },
    required: { type: Boolean, default: !1, description: "필수값" }
  },
  setup(i) {
    return (e, t) => (Z(), X("div", {
      class: ke(["s-form__item", i.className])
    }, [
      i.showLabel ? (Z(), X("div", u2, [
        V("span", null, B(i.label), 1),
        i.required ? (Z(), X("span", f2, "*")) : re("", !0)
      ])) : re("", !0),
      V("div", {
        class: ke(["s-form__item-content", [i.contentClass]])
      }, [
        V("div", d2, [
          ie(e.$slots, "default", {}, void 0, !0)
        ]),
        e.$slots["outer-append"] ? (Z(), X("div", p2, [
          ie(e.$slots, "outer-append", {}, void 0, !0)
        ])) : re("", !0)
      ], 2)
    ], 2));
  }
}, ZA = /* @__PURE__ */ $e(O2, [["__scopeId", "data-v-608bf814"]]), m2 = { class: "s-avatar" }, g2 = {
  __name: "SAvatar",
  props: {
    user: {
      type: Object,
      default: () => {
      },
      description: "회원정보"
    },
    menuItems: {
      type: Array,
      default: () => [],
      description: "회원정보 메뉴들"
    },
    className: {
      type: Object,
      default: () => {
      },
      description: "custom class"
    }
  },
  emits: ["click:menu-item"],
  setup(i) {
    const e = i, t = N(() => {
      var n;
      return (n = e.className) == null ? void 0 : n.fontWhite;
    });
    return (n, s) => {
      const r = q("v-list-item-title"), o = q("v-list-item"), l = q("v-list"), a = q("v-menu");
      return Z(), X("div", m2, [
        L(a, { offset: [5, 0] }, {
          activator: R(({ props: c }) => [
            V("div", Ve({ class: "s-user-name" }, c), [
              V("div", {
                class: ke(["s-user-name__text", { fontWhite: t.value }])
              }, B(i.user.name), 3)
            ], 16)
          ]),
          default: R(() => [
            L(l, { class: "s-avatar-menu__list" }, {
              default: R(() => [
                (Z(!0), X(he, null, Ze(i.menuItems, (c, h) => (Z(), X(he, { key: h }, [
                  c.visable ? re("", !0) : (Z(), J(o, {
                    key: 0,
                    value: c.value,
                    onClick: (u) => n.$emit("click:menu-item", c.value)
                  }, {
                    default: R(() => [
                      L(r, null, {
                        default: R(() => [
                          ee(B(c.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["value", "onClick"]))
                ], 64))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ie(n.$slots, "badge", {}, void 0, !0)
      ]);
    };
  }
}, y2 = /* @__PURE__ */ $e(g2, [["__scopeId", "data-v-28ffadb1"]]), v2 = "[Image]", df = {
  __name: "SImg",
  props: {
    /*
      @brief 클래스 이름 값 할당
      @date 2021/11/04
      @example
      {
          클래스 이름 : {
          타입: '',
          필수유무: Boolean
          디폴트: 값
          }
      }
      */
    bind: {
      type: Object,
      default: void 0,
      description: "v-bind 옵션값"
    },
    onProps: {
      type: Object,
      default: void 0,
      description: "v-on 옵션값"
    },
    className: {
      type: Object,
      description: "클래스 이름 값 할당",
      isActive: {
        type: Boolean,
        description: "액티브 유무"
      },
      default: void 0
    },
    alt: {
      type: String,
      default: void 0,
      description: "스크린 리더용 대체 텍스트"
    },
    aspectRatio: {
      type: [String, Number],
      default: void 0,
      description: "너비/높이로 계산되므로 1920x1080px 이미지의 경우 1.7778이 됨. 생략하면 자동으로 계산"
    },
    // contain: {
    //   type: Boolean,
    //   default: false,
    //   description: '크롭되는 이미지 사이즈를 예방함.',
    // },
    // contentClass: {
    //   type: String,
    //   default: undefined,
    //   description: '반응형 콘텐츠 div에 사용자 지정 클래스 적용',
    // },
    cover: {
      type: Boolean,
      default: !1,
      description: "전체 컨테이너를 덮도록 배경 이미지의 크기를 조정합니다."
    },
    // dark: {
    //   type: Boolean,
    //   default: false,
    //   description: '구성 요소에 어두운 테마 변형을 적용',
    // },
    eager: {
      type: Boolean,
      default: !1,
      description: "마운트 시 구성 요소 콘텐츠를 강제로 렌더링"
    },
    gradient: {
      type: String,
      default: void 0,
      description: "이미지에 그라디언트를 만든다. linear-gradient 만 서포트"
    },
    lazySrc: {
      type: String,
      default: void 0,
      description: "기본 이미지가 로드되기를 기다리는 동안 표시할 항목으로 일반적으로 base64로 인코딩된 작은 축소판"
    },
    lazySrcUrl: {
      type: String,
      default: void 0,
      description: "기본 경로가 아닌 경로에서 가져올 lazyload 이미지 경로"
    },
    options: {
      type: Object,
      default: () => ({
        root: void 0,
        rootMargin: void 0,
        threshold: void 0
      }),
      description: "Intersection ovserver 생성자에 전달되는 옵션"
    },
    sizes: {
      type: String,
      default: void 0,
      description: "srcset과 함께 사용."
    },
    src: {
      type: [String, Object],
      default: "",
      // { src: String, srcset: String, lazySrc: String, aspect: Number }
      description: "이미지 url"
    },
    srcUrl: {
      type: String,
      default: void 0,
      description: "기본 경로가 아닌 경로에서 가져올 이미지 경로"
    },
    srcset: {
      type: String,
      default: void 0,
      description: "장치 크기에 따라 사용할 대체 이미지"
    },
    transition: {
      type: String,
      default: "fade-transition",
      description: "lazy-src에서 src로 전환할 때 사용할 전환"
    },
    width: {
      type: [String, Number],
      default: void 0,
      description: "구성 요소의 너비를 설정"
    },
    publicPath: {
      type: String,
      default: "",
      description: "/public 이후의 경로"
    }
  },
  emits: ["error"],
  setup(i, { emit: e }) {
    const t = e, n = (o) => {
      console.log(v2, "onError"), t("error", o);
    }, s = () => {
    }, r = () => {
    };
    return (o, l) => {
      const a = q("v-img");
      return Z(), J(a, Ve({
        class: ["s-img", { ...i.className }],
        alt: i.alt,
        "aspect-ratio": i.aspectRatio,
        cover: i.cover,
        eager: i.eager,
        gradient: i.gradient,
        "lazy-src": i.lazySrc && "/assets/images/" + i.lazySrc || i.lazySrcUrl,
        options: i.options,
        sizes: i.sizes,
        src: i.src && "/assets/images/" + i.src || i.srcUrl,
        srcset: i.srcset,
        transition: i.transition,
        width: i.width
      }, i.bind, {
        onError: n,
        onLoad: s,
        onLoadstart: r
      }), {
        default: R(() => [
          ie(o.$slots, "default")
        ]),
        placeholder: R(() => [
          ie(o.$slots, "placeholder")
        ]),
        _: 3
      }, 16, ["class", "alt", "aspect-ratio", "cover", "eager", "gradient", "lazy-src", "options", "sizes", "src", "srcset", "transition", "width"]);
    };
  }
}, b2 = {
  __name: "SConfirm",
  props: {
    contents: {
      type: String,
      default: "",
      description: "컨펌창 내용"
    },
    modelValue: {
      type: Boolean,
      default: !1,
      description: "컨펌창 오픈 여부"
    },
    teleportId: {
      type: String,
      default: "destination",
      description: "Teleport ID"
    },
    confirmButtonText: {
      type: String,
      default: "확인",
      description: "확인 버튼의 텍스트"
    },
    cancelButtonText: {
      type: String,
      default: "취소",
      description: "취소 버튼의 텍스트"
    },
    noCancel: {
      type: Boolean,
      default: !1,
      description: "취소 버튼의 텍스트"
    }
  },
  emits: ["update:model-value", "click:confirm", "click:cancel"],
  setup(i, { emit: e }) {
    const t = e, n = (o) => {
      t("update:model-value", o);
    }, s = () => t("click:confirm"), r = () => t("click:cancel", !1);
    return (o, l) => {
      const a = q("v-card-text"), c = q("v-card-actions"), h = q("v-card"), u = q("v-dialog");
      return Z(), J(Jr, {
        to: `#${i.teleportId}`
      }, [
        L(u, {
          class: "s-confirm-modal",
          width: "446",
          persistent: "",
          "model-value": i.modelValue,
          "onUpdate:modelValue": n
        }, {
          default: R(() => [
            L(h, { "modal-height": "210" }, {
              default: R(() => [
                L(a, { class: "s-confirm-modal__text" }, {
                  default: R(() => [
                    ee(B(i.contents), 1)
                  ]),
                  _: 1
                }),
                L(c, { class: "button-wrapper" }, {
                  default: R(() => [
                    L(de(Je), {
                      variant: "elevated",
                      color: "blue",
                      onClick: Ye(s, ["stop"]),
                      title: i.confirmButtonText
                    }, null, 8, ["title"]),
                    i.noCancel ? re("", !0) : (Z(), J(de(Je), {
                      key: 0,
                      variant: "outlined",
                      color: "blue",
                      onClick: r,
                      title: i.cancelButtonText
                    }, null, 8, ["title"]))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model-value"])
      ], 8, ["to"]);
    };
  }
}, _A = /* @__PURE__ */ $e(b2, [["__scopeId", "data-v-e11a4dc9"]]), S2 = { class: "button-wrapper" }, x2 = { class: "s-modal__content-wrapper" }, k2 = { class: "s-modal__content" }, w2 = { class: "s-modal__footer" }, Q2 = {
  __name: "SModal",
  props: {
    title: {
      type: String,
      default: "",
      description: "모달 헤더 이름"
    },
    className: {
      type: [Object, String],
      default: "",
      description: "클래스 명"
    },
    modalWidth: {
      type: String,
      default: "",
      description: "모달 넓이"
    },
    modalHeight: {
      type: String,
      default: "",
      description: "모달 높이"
    },
    modelValue: {
      type: Boolean,
      default: !1,
      description: "모달 오픈 여부"
    },
    isWhite: {
      type: Boolean,
      default: !1,
      description: "모달 헤드 색깔 여부"
    },
    bodyStyle: {
      type: Object,
      default: () => {
      },
      description: "card-body Div의 스타일 설정"
    },
    popupCardClass: {
      type: String,
      default: "",
      description: "card의 개별 클래스네임"
    },
    hideHeader: {
      type: Boolean,
      default: !1,
      description: "헤더 유무"
    },
    teleportId: {
      type: String,
      default: "destination",
      description: "Teleport ID"
    },
    size: {
      type: String,
      default: "medium",
      description: "modal size x-small, small, medium, large, x-large"
    }
  },
  emits: ["update:model-value"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G(t.modelValue), r = (a) => {
      a ? (document.body.style.overflow = "hidden", document.body.style.paddingRight = "var(--v-scrollbar-offset)") : (document.body.style.overflow = "", document.body.style.paddingRight = "");
    };
    ue(() => t.modelValue, (a) => {
      s.value = a, r(a);
    }), Uf(() => {
      r(!1);
    });
    const o = () => {
      s.value = !1, n("update:model-value", !1);
    }, l = (a) => {
      s.value = a, n("update:model-value", a);
    };
    return (a, c) => {
      const h = q("v-icon"), u = q("v-card"), f = q("v-dialog");
      return Z(), J(Jr, {
        to: `#${i.teleportId}`
      }, [
        L(f, {
          "model-value": s.value,
          width: i.modalWidth,
          "scroll-strategy": "block",
          class: ke(["s-modal", i.className]),
          size: i.size,
          persistent: "",
          scrim: "",
          "onUpdate:modelValue": l
        }, {
          activator: R(({ props: d }) => [
            ie(a.$slots, "buttons", xg(d, !0), void 0, !0)
          ]),
          default: R(() => [
            L(u, {
              class: ke(["card-box", i.popupCardClass]),
              height: i.modalHeight,
              "min-height": i.modalHeight,
              "no-line": ""
            }, Ei({
              append: R(() => [
                V("div", w2, [
                  ie(a.$slots, "footer", {}, void 0, !0)
                ])
              ]),
              _: 2
            }, [
              i.hideHeader ? void 0 : {
                name: "prepend",
                fn: R(() => [
                  V("div", {
                    class: ke(["s-modal__title", { "s-modal__title--light": i.isWhite, "s-modal__title--dark": !i.isWhite }])
                  }, [
                    V("span", null, B(i.title), 1),
                    V("div", S2, [
                      ie(a.$slots, "header-btn-append", {}, void 0, !0),
                      L(de(Je), {
                        class: "modal--cancel",
                        elevation: "0",
                        dense: "",
                        variant: "text",
                        "max-width": "24px",
                        height: "24px",
                        onClick: o
                      }, {
                        default: R(() => [
                          L(h, {
                            color: i.isWhite ? "#1A3350" : "#fff",
                            size: "x-large"
                          }, {
                            default: R(() => c[0] || (c[0] = [
                              ee("mdi-close")
                            ])),
                            _: 1
                          }, 8, ["color"])
                        ]),
                        _: 1
                      })
                    ])
                  ], 2)
                ]),
                key: "0"
              },
              i.modelValue ? {
                name: "item",
                fn: R(() => [
                  V("div", x2, [
                    V("div", k2, [
                      ie(a.$slots, "default", {}, void 0, !0)
                    ])
                  ])
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["class", "height", "min-height"])
          ]),
          _: 3
        }, 8, ["model-value", "width", "class", "size"])
      ], 8, ["to"]);
    };
  }
}, MA = /* @__PURE__ */ $e(Q2, [["__scopeId", "data-v-9b7ff7b1"]]), P2 = {
  style: { width: "0", height: "0", position: "absolute" },
  "aria-hidden": "true",
  focusable: "false"
}, $2 = ["viewBox"], tr = 20, C2 = {
  __name: "SProgressCircular",
  props: {
    size: {
      type: Number,
      default: 50
    },
    width: {
      type: Number,
      default: 6
    }
  },
  setup(i) {
    const e = i, t = N(() => Math.max(0, Math.min(100, parseFloat(0)))), n = 2 * Math.PI * tr, s = (a, c = "px") => {
      if (!(a === null || a === ""))
        return isNaN(a) ? String(a) : isFinite(a) ? `${Number(a)}${c}` : void 0;
    }, r = N(() => tr / (1 - e.width / e.size) * 2), o = N(() => e.width / e.size * r.value), l = N(() => s((100 - t.value) / 100 * n));
    return Si(() => {
    }), (a, c) => (Z(), X("div", {
      class: "s-progress-circular",
      style: ht({ height: i.size + "px", width: i.size + "px", "--stroke-width": i.width + "px" })
    }, [
      (Z(), X("svg", P2, c[0] || (c[0] = [
        V("linearGradient", { id: "gradientColor" }, [
          V("stop", {
            offset: "0%",
            "stop-color": "#1B75BB"
          }),
          V("stop", {
            offset: "100%",
            "stop-color": "#7C0F80"
          })
        ], -1)
      ]))),
      (Z(), X("svg", {
        class: "s-progress-circular__wrapper",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${r.value} ${r.value}`
      }, [
        V("circle", {
          class: "s-progress-circular__underlay",
          cx: "50%",
          cy: "50%",
          fill: "transparent",
          r: tr,
          style: ht({
            strokeWidth: o.value,
            strokeDasharray: n,
            strokeDashoffset: 0
          })
        }, null, 4),
        V("circle", {
          class: "s-progress-circular__overlay",
          fill: "transparent",
          cx: "50%",
          cy: "50%",
          r: tr,
          style: ht({
            strokeWidth: o.value,
            strokeDasharray: n,
            strokeDashoffset: l.value
          })
        }, null, 4)
      ], 8, $2))
    ], 4));
  }
}, T2 = { class: "s-loading" }, A2 = { class: "s-loading__message" }, Z2 = { class: "s-loading__spinner" }, RA = {
  __name: "SGlobalProgress",
  props: {
    loadingMessage: {
      type: String,
      default: "Check-loading",
      description: "로딩창 메세지 값"
    },
    modelValue: {
      type: Boolean,
      default: !1,
      description: "로딩 오픈 여부"
    },
    teleportId: {
      type: String,
      default: "destination",
      description: "Teleport ID"
    }
  },
  setup(i) {
    return (e, t) => (Z(), J(Jr, {
      to: `#${i.teleportId}`
    }, [
      L(de(e1), {
        "model-value": i.modelValue,
        class: "custom-overlay",
        contained: "",
        persistent: "",
        "no-click-animation": "",
        scrim: "transparent",
        "z-index": "9999",
        offset: [0, 50]
      }, {
        default: R(() => [
          V("div", T2, [
            V("div", A2, B(i.loadingMessage), 1),
            V("div", Z2, [
              L(C2)
            ]),
            t[0] || (t[0] = V("div", { class: "s-loading__text" }, "Please wait...", -1))
          ])
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 8, ["to"]));
  }
}, _2 = /^[a-zA-Z]+$/, M2 = /^[a-zA-Z0-9-]+$/, R2 = /[^a-zA-Z0-9!@#$%^&*(),.?":;{}|<>~`'[\]\\/\-_+=]/g, V2 = /[\u3131-\u318E\uAC00-\uD7A3]/g, E2 = /(?:www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(?:\.[a-zA-Z]{2,})?$/, L2 = { REG_ALLOW_ENG: _2, REG_ALLOW_ENG_NUM_HYPHEN: M2, REG_ALLOW_ENG_NUM_AND_SPECIAL_CHARS: R2, REG_ALLOW_KOR: V2, REG_DOMAIN: E2 }, X2 = [void 0, null, "", "undefined"], D2 = (i) => {
  if (typeof i != "string")
    return !1;
  const e = i.trim();
  return !!X2.includes(e);
}, q2 = (i) => {
  if (typeof i != "string")
    throw Error("Invalid stringData type");
  return i.replace(L2.REG_ALLOW_KOR, "");
}, j2 = (i, e) => i.replace(/{([a-zA-Z]+)}/g, (t, n) => e[n]), Nm = {
  isEmpty: D2,
  removeKoreanCharacters: q2,
  resolvePathVariable: j2
}, z2 = { class: "s-card-table__wrapper" }, B2 = {
  key: 0,
  class: "s-card-table__header"
}, Y2 = { class: "s-card-table__header-item" }, I2 = {
  key: 0,
  class: "s-card-table__header-item-title",
  style: { width: "50px" }
}, N2 = { class: "s-card-table__body-row" }, W2 = {
  key: 0,
  class: "s-card__body-icon--expand"
}, U2 = {
  key: 1,
  style: { width: "50px" }
}, G2 = {
  key: 0,
  class: "s-card-table__body-row-expand"
}, VA = {
  __name: "SCardTable",
  props: {
    itemValue: {
      type: String,
      default: "id",
      description: "selected item value"
    },
    itemTitle: {
      type: String,
      default: void 0,
      description: "title이 될 item 값"
    },
    outlined: {
      type: Boolean,
      default: !1,
      description: ""
    },
    shadowed: {
      type: Boolean,
      default: !1,
      description: ""
    },
    datas: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => [],
      description: "key, title 값으로 구성된 Array(Object)"
    },
    itemsPerPage: {
      type: [Number, String],
      default: 5,
      description: "per page"
    },
    noDataText: {
      type: String,
      default: "no data.",
      description: "구성 요소에 항목이 제공되지 않을 때 표시되는 텍스트"
    },
    page: {
      type: [Number, String],
      default: 1,
      description: "현재 표시된 페이지 번호(인덱스 1개)"
    },
    isPageRender: {
      type: Boolean,
      default: !1,
      description: "서버에서 페이지 정보 전달 여부"
    },
    search: {
      type: [String, Array],
      default: void 0,
      description: "항목 필터링에 사용되는 텍스트 또는 key:value Object를 포함한 텍스트 배열 입력"
    },
    smartSearch: {
      type: Array,
      default: () => [],
      description: "smart search 조건"
    },
    showSelect: {
      type: Boolean,
      default: !1,
      description: "머리글과 행 모두에서 선택 확인란을 표시합니다(기본 행을 사용하는 경우)."
    },
    options: {
      type: Object,
      default: () => ({
        strongs: [],
        pageCnt: 0,
        totalElements: 0
      }),
      description: ""
    },
    selected: {
      type: Array,
      default: () => []
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    showExpand: {
      type: Boolean,
      default: !1
    },
    hiddenHeader: {
      type: Boolean,
      default: !1
    },
    scrolled: {
      type: Boolean,
      default: !1
    },
    class: {
      type: String,
      default: ""
    },
    setTotal: {
      type: Function,
      default: () => {
      },
      description: "전체 개수 초기화(필터링 적용)"
    },
    showSelect: {
      type: Boolean,
      default: !1
    },
    selectStrategy: {
      type: String,
      default: "single",
      description: "select strategy 가능한 값 single, all (page는 아직 작업이 되지 않았습니다.)"
    }
  },
  emits: ["update:page", "update:selected"],
  setup(i, { emit: e }) {
    const { isEmpty: t } = Nm, n = i, s = e, r = G(1), o = N({
      get: () => n.page,
      set: (g) => s("update:page", g)
    }), l = N(() => n.headers.filter((g) => g.key !== n.itemTitle)), a = N(() => {
      var g;
      if (!((g = n.options) != null && g.pageCnt)) {
        const k = (n.page - 1) * n.itemsPerPage, S = k + n.itemsPerPage;
        return c.value.slice(k, S);
      }
      return c.value;
    }), c = N(() => {
      if (n.search) {
        const g = n.headers.map((S) => S.key);
        return n.datas.filter(
          (S) => g.some(($) => S[$] ? typeof S[$] == typeof {} || typeof S[$] == typeof [] ? JSON.stringify(S[$]).indexOf(n.search) > -1 : S[$].toString().indexOf(n.search) > -1 : !1)
        );
      }
      if (n.smartSearch.length)
        return n.datas.filter((k) => {
          const S = n.smartSearch.reduce(($, C) => ($[C.key] || ($[C.key] = []), $[C.key].push(C), $), {});
          return Object.entries(S).every(([$, C]) => {
            var M;
            return $ === "undefinedTag" ? !((M = k.tagList) != null && M.length) : C.some((P) => {
              var w;
              return P.value ? P.type === "tag" && ((w = k.tagList) != null && w.length) ? k.tagList.some(
                (b) => b.tagKey.toLowerCase() === P.key.toLowerCase() && b.tagValue.toLowerCase() === P.value.toLowerCase()
              ) : P.type !== "tag" ? typeof k[P.key] == "object" ? JSON.stringify(k[P.key]).toLowerCase().indexOf(P.value.toLowerCase()) > -1 : typeof k[P.key] == "number" ? k[P.key].toString().indexOf(P.value) > -1 : k[P.key].toLowerCase().indexOf(P.value.toLowerCase()) > -1 : !1 : !0;
            });
          });
        });
      if (n.search) {
        const g = n.headers.map((S) => S.key);
        return n.datas.filter(
          (S) => g.some(($) => S[$] ? typeof S[$] == typeof {} || typeof S[$] == typeof [] ? JSON.stringify(S[$]).indexOf(n.search) > -1 : S[$].toString().indexOf(n.search) > -1 : !1)
        );
      }
      return n.datas || [];
    }), h = G([]), u = (g) => {
      n.selectStrategy === "single" ? h.value.includes(g[n.itemValue]) ? h.value = [] : h.value = [g[n.itemValue]] : h.value.includes(g[n.itemValue]) ? h.value = h.value.filter((k) => k !== g[n.itemValue]) : h.value.push(g[n.itemValue]), s("update:selected", h.value);
    }, f = (g) => {
      o.value = g, r.value = g;
    }, d = (g) => {
      f(g);
    }, p = N(() => {
      var g;
      return ((g = n.options) == null ? void 0 : g.pageCnt) || Math.ceil(c.value.length / n.itemsPerPage);
    }), O = N(() => (g) => typeof g == "number" ? `${g}%` : g || "100px"), m = (g) => {
      console.log("onClickExpand"), g.showExpandRow = !g.showExpandRow;
    };
    return ue(
      () => [n.search, n.smartSearch],
      () => {
        f(1);
      },
      { deep: !0 }
    ), ue(
      () => c.value,
      (g) => {
        n.setTotal(g.length);
      }
    ), Si(() => {
      r.value = n.page;
    }), (g, k) => {
      var M;
      const S = q("v-btn"), $ = q("v-checkbox-btn"), C = q("v-pagination");
      return Z(), X("div", {
        class: ke(`s-card-table ${n.class}`)
      }, [
        V("div", z2, [
          i.hiddenHeader ? re("", !0) : (Z(), X("div", B2, [
            V("ul", Y2, [
              i.showSelect ? (Z(), X("li", I2)) : re("", !0),
              (Z(!0), X(he, null, Ze(l.value, (P, w) => (Z(), X("li", {
                key: "header-key--" + w,
                class: "s-card-table__header-item-title",
                style: ht({
                  width: O.value(P.width),
                  justifyContent: P.align
                })
              }, B(P.title), 5))), 128))
            ])
          ])),
          a.value.length ? (Z(!0), X(he, { key: 1 }, Ze(a.value, (P, w) => (Z(), X("ul", {
            key: "content-row--" + w,
            class: "s-card-table__body"
          }, [
            V("li", N2, [
              V("div", {
                class: ke(`s-card-table__body-item ${i.showExpand ? "table-expand_header" : "table-expand_body"}`)
              }, [
                i.showExpand ? (Z(), X("div", W2, [
                  ie(g.$slots, "table-expand", {
                    item: P,
                    expanded: P.showExpandRow,
                    onClickExpand: m
                  }, () => [
                    L(S, {
                      density: "comfortable",
                      variant: "text",
                      icon: P.showExpandRow ? "mdi-chevron-up" : "mdi-chevron-down",
                      onClick: Ye((b) => m(P), ["stop", "prevent"])
                    }, null, 8, ["icon", "onClick"])
                  ])
                ])) : re("", !0),
                i.showSelect ? (Z(), X("div", U2, [
                  ie(g.$slots, "table-select", { item: P }, () => [
                    L($, {
                      "model-value": h.value.includes(P[i.itemValue]),
                      "onUpdate:modelValue": (b) => u(P)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ])
                ])) : re("", !0),
                (Z(!0), X(he, null, Ze(l.value, (b, A) => {
                  var Q, v;
                  return Z(), X("div", {
                    key: "content-row--" + w + "__col--" + A,
                    class: ke(["s-card-table__body-wrapper", { "strong-text": (v = (Q = i.options) == null ? void 0 : Q.strongs) == null ? void 0 : v.includes(b.key) }]),
                    style: ht({
                      width: O.value(b.width),
                      justifyContent: b.align === "d-none" ? "center" : b.align || "center"
                    })
                  }, [
                    ie(g.$slots, `${b.key}`, { item: P }, () => [
                      ee(B(de(t)(P[b.key]) ? "-" : P[b.key]), 1)
                    ])
                  ], 6);
                }), 128))
              ], 2),
              P.showExpandRow ? (Z(), X("div", G2, [
                ie(g.$slots, "expanded-row", {
                  item: P,
                  columns: l.value
                })
              ])) : re("", !0)
            ])
          ]))), 128)) : (Z(), J(P1, {
            key: 2,
            description: i.noDataText,
            class: "s-card-table__empty"
          }, {
            default: R(() => [
              ie(g.$slots, "empty-content")
            ]),
            _: 3
          }, 8, ["description"]))
        ]),
        i.scrolled ? re("", !0) : (Z(), J(C, {
          key: 0,
          "model-value": o.value,
          class: "s-card-table__pagination",
          size: "small",
          rounded: "",
          "active-color": "#0D69D4",
          variant: "flat",
          "total-visible": 10,
          length: ((M = i.options) == null ? void 0 : M.pageCnt) || p.value,
          "onUpdate:modelValue": d
        }, null, 8, ["model-value", "length"]))
      ], 2);
    };
  }
}, F2 = { key: 1 }, H2 = { class: "text-center no-data" }, K2 = { key: 0 }, J2 = { class: "v-data-table__tr" }, eP = ["width"], tP = {
  key: 0,
  class: "text-center s-data-table-pagination"
}, iP = {
  __name: "SDataTable",
  props: {
    // search: String,
    options: {
      type: Object,
      default: () => {
      }
    },
    getChipColors: {
      type: Function,
      default: void 0
    },
    // onClickChips: Function,
    customFilter: {
      type: [Number, Boolean, Array],
      default: void 0,
      description: "항목 필터링 기능"
    },
    customKeyFilter: {
      type: Object,
      default: void 0,
      description: ""
    },
    expanded: {
      type: Array,
      default: () => [],
      description: ""
    },
    expandOnClick: {
      type: Boolean,
      default: !1,
      description: ""
    },
    filterKeys: {
      type: [String, Array],
      default: void 0,
      description: ""
    },
    filterMode: {
      type: String,
      default: "intersection",
      description: ""
    },
    fixedFooter: {
      type: Boolean,
      default: !1,
      description: ""
    },
    fixedHeader: {
      type: Boolean,
      default: !1,
      description: "헤더 사이즈가 고정됩니다. (deprecated)"
    },
    groupBy: {
      type: Array,
      default: () => [],
      description: "항목을 그룹화하는 데 사용해야 하는 항목 속성을 변경합니다. 현재 형식의 단일 그룹화만 지원합니다: group또는 [group]. 배열을 사용할 때 첫 번째 요소만 고려됩니다. .sync수정자 와 함께 사용할 수 있습니다."
    },
    headers: {
      type: Array,
      default: () => [],
      description: "각각 헤더 열을 설명하는 개체의 배열입니다."
    },
    height: {
      type: [String, Number],
      default: void 0,
      description: "명시적인 테이블 높이 설정"
    },
    hideNoData: {
      type: Boolean,
      default: !1,
      description: ""
    },
    itemProps: {
      type: [Boolean, String, Array, Function],
      default: "props",
      description: "각 항목 구성 요소에 적용될 props 개체입니다. true원본 개체를 가공되지 않는 props로 취급하고 구성 요소에 직접 전달합니다."
    },
    items: {
      type: Array,
      default: () => [],
      description: "자식 구성 요소를 자동으로 생성하는 데 사용되는 문자열 또는 객체의 배열"
    },
    itemsPerPage: {
      type: [String, Number],
      default: 10,
      description: "페이지당 표시할 항목 수를 변경합니다. .sync 수정자와 함께 사용할 수 있습니다. 이 prop을 -1로 설정하면 페이지의 모든 항목이 표시됩니다."
    },
    itemValue: {
      type: [Boolean, String, Array, Function],
      default: "id",
      description: ""
    },
    modelValue: {
      type: Array,
      default: () => [],
      description: "구성 요소의 v-model 값입니다. 구성 요소가 다중 소품을 지원하는 경우 기본값은 빈 배열입니다."
    },
    multiSort: {
      type: Boolean,
      default: !1,
      description: "true일 경우 여러 속성에 대해 정렬할 수 있습니다."
    },
    mustSort: {
      type: Boolean,
      default: !1,
      description: "true일 경우 정렬을 비활성화할 수 없으면 항상 오름차순과 내림차순 간에 전환됩니다."
    },
    noDataText: {
      type: String,
      default: "no data.",
      description: "구성 요소에 항목이 제공되지 않을 때 표시되는 텍스트"
    },
    noFilter: {
      type: Boolean,
      default: !1,
      description: ""
    },
    page: {
      type: [String, Number],
      default: 1,
      description: "현재 표시된 페이지 번호(인덱스 1개)"
    },
    returnObject: {
      type: Boolean,
      default: !1,
      description: ""
    },
    search: {
      type: String,
      default: void 0,
      description: "항목 필터링에 사용되는 텍스트 입력"
    },
    showExpand: {
      type: Boolean,
      default: !1,
      description: "기본 행에 확장 토글을 표시합니다."
    },
    showSelect: {
      type: Boolean,
      default: !1,
      description: "머리글과 행 모두에서 선택 확인란을 표시합니다(기본 행을 사용하는 경우)."
    },
    sortBy: {
      type: Array,
      default: () => [],
      description: "정렬 순서에 사용해야 하는 항목 속성을 변경합니다. .sync수정자 와 함께 사용할 수 있습니다."
    },
    selectStrategy: {
      type: String,
      default: "page"
    },
    width: {
      type: [String, Number],
      default: void 0,
      description: "구성 요소의 너비를 설정합니다."
    },
    // custom
    single: {
      type: Boolean,
      default: !1,
      description: "select model의 데이터를 단일/다중으로 세팅합니다."
    },
    hideFooter: {
      type: Boolean,
      default: !1,
      description: "footer hide"
    },
    footers: {
      type: Object,
      default: () => {
      },
      description: "tfoot 위치에 그릴 데이터"
    },
    customSlotFooter: {
      type: Object,
      default: () => {
      },
      description: "custom footer"
    },
    smartSearch: {
      type: Array,
      default: () => [],
      description: "Smart Search 검색 기능"
    },
    fixedTable: {
      type: Boolean,
      default: !1
    },
    setTotal: {
      type: Function,
      default: () => {
      },
      description: "전체 개수 초기화(필터링 적용)"
    },
    density: {
      type: String,
      default: "default",
      description: "default | comfortable | compact 사이즈"
    },
    tooltip: {
      type: Boolean,
      default: !1,
      description: "툴팁 사용 여부(툴팁을 사용하려면 테이블의 class가 fixed-table을 포함하고 있어야 합니다.)"
    },
    itemSelectable: {
      type: String,
      default: null,
      description: "테이블의 checkbox가 선택이 가능한지의 여부를 판단할 수 있는 요소의 키 값입니다. (예: selectable)"
    },
    disableSort: {
      type: Boolean,
      default: !1,
      description: "정렬 기능 비활성화"
    },
    loading: {
      type: Boolean,
      default: !1,
      description: "로딩 상태"
    },
    hover: {
      type: Boolean,
      default: !1,
      description: "hover 상태"
    },
    fixedTable: {
      type: Boolean,
      default: !1,
      description: "테이블 고정 여부"
    }
  },
  emits: [
    "update:page",
    "update:filter",
    "update:search",
    "update:sort-by",
    "update:sort-desc",
    "update:group-by",
    "update:expanded",
    "update:options",
    "update:model-value",
    "get-checkedbox-item",
    "update:filtered-cnt"
  ],
  setup(i, { emit: e }) {
    const { isEmpty: t } = Nm, n = e, s = i, r = G([]), o = G(1);
    G(1);
    const l = G([]), a = G([]), c = (S) => {
      n("get-checkedbox-item", S), r.value = S, n("update:model-value", r.value);
    }, h = N(() => {
      var S;
      if (s.search) {
        const $ = s.headers.map((M) => M.key), C = s.items.filter(
          (M) => $.some((P) => M[P] ? typeof M[P] == typeof {} || typeof M[P] == typeof [] ? JSON.stringify(M[P]).toLowerCase().indexOf(s.search.toLowerCase()) > -1 : M[P].toString().toLowerCase().indexOf(s.search.toLowerCase()) > -1 : !1)
        );
        return n("update:filtered-cnt", C.length), C;
      }
      if (s.smartSearch.length) {
        const $ = s.items.filter((C) => {
          const M = s.smartSearch.reduce((P, w) => (P[w.key] || (P[w.key] = []), P[w.key].push(w), P), {});
          return Object.entries(M).every(([P, w]) => {
            var b;
            return P === "undefinedTag" ? !((b = C.tagList) != null && b.length) : w.some((A) => {
              var Q;
              return A.value ? A.type === "tag" && ((Q = C.tagList) != null && Q.length) ? C.tagList.some(
                (v) => v.tagKey.toLowerCase() === A.key.toLowerCase() && v.tagValue.toLowerCase() === A.value.toLowerCase()
              ) : A.type !== "tag" ? typeof C[A.key] == "object" ? JSON.stringify(C[A.key]).toLowerCase().indexOf(A.value.toLowerCase()) > -1 : typeof C[A.key] == "number" ? C[A.key].toString().indexOf(A.value) > -1 : C[A.key].toLowerCase().indexOf(A.value.toLowerCase()) > -1 : !1 : !0;
            });
          });
        });
        return n("update:filtered-cnt", $.length), $;
      }
      return n("update:filtered-cnt", ((S = s.items) == null ? void 0 : S.length) || 0), s.items || [];
    }), u = N(() => {
      var S, $;
      return s.itemsPerPage !== -1 ? ((S = s.options) == null ? void 0 : S.pageCnt) || Math.ceil(h.value.length / s.itemsPerPage) : (($ = s.options) == null ? void 0 : $.pageCnt) || Math.ceil(h.value.length);
    }), f = N(() => {
      var S;
      if (!((S = s.options) != null && S.pageCnt) && s.itemsPerPage !== -1) {
        const $ = (s.page - 1) * s.itemsPerPage, C = $ + s.itemsPerPage;
        return h.value.slice($, C);
      }
      return h.value;
    }), d = G(), p = (S) => {
      n("update:page", S);
    }, O = (S) => {
      l.value = S, o.value = 1, n("update:sort-by", S), n("update:page", 1);
    }, m = N({
      get: () => s.page,
      set: (S) => n("update:page", S)
    });
    ue(
      () => s.headers,
      (S) => {
        a.value = S.filter(($) => $.align !== "d-none");
      },
      { immediate: !0 }
    ), ue(
      () => s.modelValue,
      (S) => {
        r.value = S;
      },
      { immediate: !0 }
    ), ue(
      () => s.smartSearch,
      () => {
        n("update:page", 1);
      }
    ), ue(
      () => s.itemsPerPage,
      () => {
        n("update:page", 1);
      }
    ), Si(() => {
      o.value = s.page;
    });
    const g = (S) => S.highlight || "", k = (S) => {
      var $, C;
      return S && (($ = S == null ? void 0 : S.toString()) != null && $.endsWith("%") || (C = S == null ? void 0 : S.toString()) != null && C.endsWith("px")) ? S : S ? `${S}px` : "250px";
    };
    return (S, $) => {
      const C = q("v-tooltip"), M = q("v-checkbox-btn"), P = q("v-pagination"), w = q("v-data-table");
      return Z(), J(w, Ve({
        ref_key: "sDataTableRef",
        ref: d,
        class: ["s-data-table", {
          "fixed-table": i.fixedTable
        }]
      }, S.$attrs, {
        headers: a.value,
        "fixed-header": i.fixedHeader,
        height: i.height,
        items: f.value,
        page: o.value,
        "items-per-page": i.itemsPerPage,
        search: i.search,
        "sort-by": l.value,
        "item-value": i.itemValue,
        "show-select": i.showSelect,
        "return-object": i.returnObject,
        "model-value": r.value,
        "select-strategy": i.selectStrategy,
        loading: i.loading,
        hover: i.hover,
        "show-expand": i.showExpand,
        "disable-sort": i.disableSort,
        expanded: i.expanded,
        "expand-on-click": i.expandOnClick,
        "item-class": g,
        "onUpdate:sortBy": O,
        "onUpdate:modelValue": c,
        "onUpdate:options": $[0] || ($[0] = (b) => S.$emit("update:options", b)),
        "onUpdate:expanded": $[1] || ($[1] = (b) => S.$emit("update:expanded", b))
      }), Ei({
        "no-data": R(() => [
          V("div", H2, B(i.noDataText), 1)
        ]),
        tfoot: R((b) => [
          ie(S.$slots, "tfoot", yt(vt(b)), () => [
            i.footers && Object.keys(i.footers).length ? (Z(), X("tfoot", K2, [
              V("tr", J2, [
                (Z(!0), X(he, null, Ze(a.value, (A, Q) => (Z(), X(he, {
                  key: "foot__" + Q
                }, [
                  A.align !== "d-none" ? (Z(), X("td", {
                    key: 0,
                    class: "v-data-table__td",
                    width: A.width,
                    style: ht({ textAlign: A.align || "start" })
                  }, [
                    S.$slots[`footer.${A.key}`] ? (Z(), X("span", {
                      key: 0,
                      class: ke([i.footers.highlight])
                    }, [
                      ie(S.$slots, `footer.${A.key}`, { props: i.footers }, void 0, !0)
                    ], 2)) : (Z(), X("span", {
                      key: 1,
                      class: ke([i.footers.highlight])
                    }, B(i.footers[A.key]), 3))
                  ], 12, eP)) : re("", !0)
                ], 64))), 128))
              ])
            ])) : re("", !0)
          ], !0)
        ]),
        bottom: R(() => {
          var b;
          return [
            ie(S.$slots, "append-content", {}, void 0, !0),
            i.hideFooter ? re("", !0) : (Z(), X("div", tP, [
              L(P, {
                "model-value": m.value,
                size: "small",
                rounded: "",
                "active-color": "#0D69D4",
                variant: "flat",
                "total-visible": 10,
                length: ((b = i.options) == null ? void 0 : b.pageCnt) || u.value,
                "onUpdate:modelValue": p
              }, null, 8, ["model-value", "length"])
            ]))
          ];
        }),
        _: 2
      }, [
        S.$slots.headers ? {
          name: "headers",
          fn: R((b) => [
            ie(S.$slots, "headers", yt(vt(b)), void 0, !0)
          ]),
          key: "0"
        } : void 0,
        Ze(a.value, (b, A) => ({
          name: `item.${b.key}`,
          fn: R((Q) => [
            i.tooltip ? (Z(), J(C, {
              key: 0,
              location: "bottom"
            }, {
              activator: R(({ props: v }) => [
                S.$slots[`item.${b.key}`] ? (Z(), X("span", F2, [
                  ie(S.$slots, `item.${b.key}`, yt(vt(Q)), () => [
                    ee(B(de(t)(Q.item[b.key]) ? "-" : Q.item[b.key]), 1)
                  ], !0)
                ])) : (Z(), X("span", Ve({ key: 0 }, v, {
                  class: ["d-inline-block text-truncate s-table-column__text", [
                    Q.item.highlight
                  ]],
                  style: {
                    maxWidth: k(b.width)
                  }
                }), B(de(t)(Q.item[b.key]) ? "-" : Q.item[b.key]), 17))
              ]),
              default: R(() => [
                V("span", null, B(de(t)(Q.item[b.key]) ? "-" : Q.item[b.key]), 1)
              ]),
              _: 2
            }, 1024)) : (Z(), X("div", {
              key: 1,
              class: ke([
                Q.item.highlight
              ])
            }, [
              ie(S.$slots, `item.${b.key}`, yt(vt(Q)), () => [
                ee(B(de(t)(Q.item[b.key]) ? "-" : Q.item[b.key]), 1)
              ], !0)
            ], 2))
          ])
        })),
        S.$slots["header.data-table-select"] ? {
          name: "header.data-table-select",
          fn: R((b) => [
            ie(S.$slots, "header.data-table-select", yt(vt(b)), () => [
              L(M, {
                indeterminate: b.someSelected && !b.allSelected,
                "model-value": b.allSelected,
                "onUpdate:modelValue": (A) => b.selectAll(!b.allSelected)
              }, null, 8, ["indeterminate", "model-value", "onUpdate:modelValue"])
            ], !0)
          ]),
          key: "1"
        } : void 0,
        S.$slots["item.data-table-select"] ? {
          name: "item.data-table-select",
          fn: R((b) => [
            ie(S.$slots, "item.data-table-select", yt(vt(b)), () => [
              b.item.selectable ? (Z(), J(M, {
                key: 0,
                "model-value": b.isSelected(b.item),
                "onUpdate:modelValue": (A) => b.toggleSelect(b.item)
              }, null, 8, ["model-value", "onUpdate:modelValue"])) : (Z(), X(he, { key: 1 }, [], 64))
            ], !0)
          ]),
          key: "2"
        } : void 0,
        S.$slots.item ? {
          name: "item",
          fn: R((b) => [
            ie(S.$slots, "item", yt(vt(b)), void 0, !0)
          ]),
          key: "3"
        } : void 0,
        S.$slots.body ? {
          name: "body",
          fn: R((b) => [
            ie(S.$slots, "body", yt(vt(b)), void 0, !0)
          ]),
          key: "4"
        } : void 0,
        S.$slots["body.append"] ? {
          name: "body.append",
          fn: R((b) => [
            ie(S.$slots, "body.append", yt(vt(b)), void 0, !0)
          ]),
          key: "5"
        } : void 0,
        S.$slots.tbody ? {
          name: "tbody",
          fn: R((b) => [
            ie(S.$slots, "tbody", yt(vt(b)), void 0, !0)
          ]),
          key: "6"
        } : void 0,
        S.$slots["expanded-row"] ? {
          name: "expanded-row",
          fn: R((b) => [
            ie(S.$slots, "expanded-row", yt(vt(b)), void 0, !0)
          ]),
          key: "7"
        } : void 0
      ]), 1040, ["class", "headers", "fixed-header", "height", "items", "page", "items-per-page", "search", "sort-by", "item-value", "show-select", "return-object", "model-value", "select-strategy", "loading", "hover", "show-expand", "disable-sort", "expanded", "expand-on-click"]);
    };
  }
}, EA = /* @__PURE__ */ $e(iP, [["__scopeId", "data-v-3c6745cb"]]), nP = {}, sP = {
  width: "190",
  height: "33",
  viewBox: "0 0 190 33",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function rP(i, e) {
  return Z(), X("svg", sP, e[0] || (e[0] = [
    kg('<g clip-path="url(#clip0_1478_17785)"><path d="M49.0053 0H33.0018C28.5846 0 25 3.58456 25 8.00176V24.0053C25 28.4225 28.5846 32.0071 33.0018 32.0071H49.0053C53.4225 32.0071 57.0071 28.4225 57.0071 24.0053V8.00176C57 3.58456 53.4225 0 49.0053 0ZM31.1389 20.2867C28.7751 20.2867 26.8558 18.3674 26.8558 16.0035C26.8558 13.6397 28.7751 11.7204 31.1389 11.7204C33.5028 11.7204 35.4221 13.6397 35.4221 16.0035C35.4221 18.3674 33.5028 20.2867 31.1389 20.2867ZM49.6827 20.2867C48.2573 20.2867 46.9943 19.5881 46.2181 18.5155C45.4701 17.7394 44.7292 18.1204 44.3694 18.4238C43.6002 19.5528 42.3019 20.2937 40.8342 20.2937C38.4703 20.2937 36.551 18.3744 36.551 16.0106C36.551 13.6467 38.4703 11.7275 40.8342 11.7275C42.2948 11.7275 43.5861 12.4613 44.3623 13.5832C44.7222 13.8867 45.4701 14.2889 46.2322 13.4845C47.0084 12.419 48.2644 11.7275 49.6827 11.7275C52.0465 11.7275 53.9658 13.6467 53.9658 16.0106C53.9658 18.3744 52.0465 20.2937 49.6827 20.2937V20.2867ZM54.3045 20.1032C53.8318 20.1032 53.4507 19.7222 53.4507 19.2494C53.4507 18.7766 53.8318 18.3956 54.3045 18.3956C54.7773 18.3956 55.1583 18.7766 55.1583 19.2494C55.1583 19.7222 54.7773 20.1032 54.3045 20.1032Z" fill="white"></path><path d="M106.935 3.85976C106.865 1.71466 105.101 0 102.941 0H99.6884C99.2721 0 98.9404 0.338699 98.9404 0.74796V7.24675C98.9404 7.66307 99.2791 7.99471 99.6884 7.99471H102.941C105.15 7.99471 106.942 6.20243 106.942 3.99383C106.942 3.97971 106.942 3.9656 106.942 3.95149C106.942 3.91621 106.942 3.88798 106.942 3.8527L106.935 3.85976ZM102.941 6.49879H100.443V1.50298H102.941C104.324 1.50298 105.439 2.62492 105.439 4.00088C105.439 5.37685 104.317 6.49879 102.941 6.49879Z" fill="white"></path><path d="M71.8443 6.83043C72.1548 6.51996 72.1548 6.01191 71.8443 5.70143C71.5339 5.39096 71.0399 5.39096 70.7224 5.69438C70.7224 5.69438 70.7224 5.69438 70.7153 5.70143C70.7153 5.70143 70.7153 5.70849 70.7083 5.71555C70.2778 6.14598 69.6781 6.40706 69.0218 6.40706C68.3656 6.40706 67.7588 6.13892 67.3213 5.70143C66.8908 5.26395 66.6157 4.67122 66.6157 4.00088C66.6157 3.33054 66.8767 2.74487 67.3072 2.31444C67.3072 2.31444 67.3072 2.31444 67.3213 2.30739L67.3283 2.29327C67.7588 1.86284 68.3585 1.60176 69.0148 1.60176C69.671 1.60176 70.2567 1.86284 70.6871 2.28622C70.6942 2.28622 70.7012 2.30033 70.7083 2.30739C70.7153 2.31444 70.7224 2.3215 70.7294 2.32856C71.0399 2.61786 71.5338 2.61081 71.8373 2.30739C72.1407 2.00397 72.1477 1.51709 71.8584 1.19956C71.8584 1.1925 71.8443 1.18545 71.8373 1.17839C71.8302 1.17133 71.8232 1.16428 71.809 1.15017C71.0893 0.437486 70.1014 0 69.0077 0C67.914 0 66.9261 0.437486 66.2064 1.15017C66.1993 1.15722 66.1923 1.16428 66.1782 1.17839C66.1782 1.17839 66.1641 1.1925 66.157 1.19956C65.4443 1.91929 65.0068 2.90717 65.0068 4.00088C65.0068 5.0946 65.4514 6.10364 66.1782 6.83043C66.905 7.55722 67.8999 8.00176 69.0077 8.00176C70.1155 8.00176 71.1105 7.55722 71.8373 6.83043H71.8443Z" fill="white"></path><path d="M85.9779 0C83.7693 0 81.9771 1.79228 81.9771 4.00088C81.9771 6.20948 83.7693 8.00176 85.9779 8.00176C88.1865 8.00176 89.9788 6.20948 89.9788 4.00088C89.9788 1.79228 88.1865 0 85.9779 0ZM85.9779 6.4C84.6514 6.4 83.5788 5.32745 83.5788 4.00088C83.5788 2.67431 84.6514 1.60176 85.9779 1.60176C87.3045 1.60176 88.3771 2.67431 88.3771 4.00088C88.3771 5.32745 87.3045 6.4 85.9779 6.4Z" fill="white"></path><path d="M80.7 6.4H77.4965C76.8332 6.4 76.2334 6.13186 75.7959 5.69438C75.3655 5.25689 75.0903 4.66417 75.0903 3.99383V0.797354C75.0903 0.352811 74.7304 0 74.293 0C74.0742 0 73.8696 0.091731 73.7285 0.232856C73.5803 0.37398 73.4956 0.578611 73.4956 0.797354V4.00088C73.4956 5.10871 73.9402 6.10364 74.6669 6.83043C75.3937 7.55722 76.3887 8.00176 77.4965 8.00176H80.7C80.9188 8.00176 81.1234 7.91003 81.2645 7.76891C81.4127 7.62778 81.4974 7.42315 81.4974 7.20441C81.4974 6.75987 81.1375 6.40706 80.7 6.40706V6.4Z" fill="white"></path><path d="M98.2206 0.232856C98.0794 0.0846748 97.8748 0 97.6561 0C97.2115 0 96.8587 0.359868 96.8587 0.797354V4.00088C96.8587 4.66417 96.5906 5.26395 96.1531 5.70143C95.7156 6.13186 95.1158 6.40706 94.4525 6.40706C93.7893 6.40706 93.1895 6.13892 92.752 5.70143C92.3216 5.26395 92.0464 4.67122 92.0464 4.00088V1.60176V0.80441C92.0464 0.359868 91.6865 0.00705623 91.249 0.00705623C91.0303 0.00705623 90.8256 0.0987872 90.6845 0.239912C90.5363 0.381036 90.4517 0.585667 90.4517 0.80441V4.00794C90.4517 5.11577 90.8962 6.11069 91.623 6.83749C92.3498 7.56428 93.3447 8.00882 94.4525 8.00882C95.5604 8.00882 96.5553 7.56428 97.2821 6.83749C98.0089 6.11069 98.4534 5.11577 98.4534 4.00794V0.797354C98.4534 0.578611 98.3617 0.37398 98.2206 0.232856Z" fill="white"></path><path d="M114.471 16.4689C114.182 16.1796 113.779 15.9961 113.342 15.9961H106.942C104.733 15.9961 102.736 16.8922 101.29 18.3388C99.8434 19.7853 98.9473 21.7822 98.9473 23.9908V30.3908C98.9473 30.8353 99.1237 31.2305 99.42 31.5198C99.7093 31.8091 100.112 31.9926 100.549 31.9926C101.431 31.9926 102.151 31.2728 102.151 30.3908V23.9908C102.151 22.6642 102.687 21.4647 103.555 20.5968C104.423 19.7288 105.622 19.1926 106.949 19.1926H113.349C114.231 19.1926 114.951 18.4728 114.951 17.5908C114.951 17.1463 114.774 16.7511 114.478 16.4618L114.471 16.4689Z" fill="white"></path><path d="M129.557 18.3458C129.557 18.3458 129.522 18.3106 129.501 18.2964C128.061 16.8781 126.086 16.0032 123.898 16.0032C121.711 16.0032 119.735 16.8781 118.296 18.2964C118.274 18.3106 118.26 18.3317 118.239 18.3458C118.218 18.36 118.204 18.3811 118.197 18.3952C116.779 19.8347 115.896 21.8175 115.896 24.0049C115.896 26.1924 116.793 28.2105 118.239 29.664C119.686 31.1106 121.683 32.0067 123.898 32.0067C125.698 32.0067 127.363 31.414 128.696 30.4049V30.1086C128.696 30.1086 128.718 30.1086 128.725 30.1086C128.704 30.2074 128.696 30.3062 128.696 30.412C128.696 31.3011 129.416 32.0138 130.298 32.0138C131.18 32.0138 131.9 31.294 131.9 30.412V24.012C131.9 21.8246 131.025 19.8418 129.6 18.4023C129.586 18.3882 129.571 18.367 129.557 18.3529V18.3458ZM127.321 27.3778C127.321 27.3778 127.292 27.406 127.278 27.4202C126.41 28.274 125.218 28.8032 123.905 28.8032C122.593 28.8032 121.379 28.2669 120.511 27.399C119.643 26.5311 119.107 25.3315 119.107 24.0049C119.107 22.6925 119.636 21.5 120.49 20.6321C120.504 20.6179 120.518 20.6038 120.532 20.5897C121.4 19.7359 122.593 19.2067 123.905 19.2067C125.218 19.2067 126.389 19.7218 127.257 20.5686C127.285 20.5968 127.313 20.625 127.342 20.6532C128.188 21.5211 128.704 22.6995 128.704 24.0049C128.704 25.3103 128.174 26.517 127.321 27.3778Z" fill="white"></path><path d="M157.825 16.0032C153.407 16.0032 149.823 19.5877 149.823 24.0049C149.823 28.4221 153.407 32.0067 157.825 32.0067C162.242 32.0067 165.826 28.4221 165.826 24.0049C165.826 19.5877 162.242 16.0032 157.825 16.0032ZM157.825 28.8032C155.171 28.8032 153.026 26.6581 153.026 24.0049C153.026 21.3518 155.171 19.2067 157.825 19.2067C160.478 19.2067 162.623 21.3589 162.623 24.0049C162.623 26.651 160.471 28.8032 157.825 28.8032Z" fill="white"></path><path d="M96.3788 16.0032H83.5788C82.6968 16.0032 81.9771 16.7229 81.9771 17.6049C81.9771 18.487 82.6968 19.2067 83.5788 19.2067H88.3771V30.4049C88.3771 31.287 89.0968 32.0067 89.9788 32.0067C90.8608 32.0067 91.5806 31.287 91.5806 30.4049V19.2067H96.3788C97.2608 19.2067 97.9806 18.487 97.9806 17.6049C97.9806 16.7229 97.2608 16.0032 96.3788 16.0032Z" fill="white"></path><path d="M147.261 16.0032H134.461C133.579 16.0032 132.859 16.7229 132.859 17.6049C132.859 18.487 133.579 19.2067 134.461 19.2067H139.259V30.4049C139.259 31.287 139.979 32.0067 140.861 32.0067C141.743 32.0067 142.463 31.287 142.463 30.4049V19.2067H147.261C148.143 19.2067 148.863 18.487 148.863 17.6049C148.863 16.7229 148.143 16.0032 147.261 16.0032Z" fill="white"></path><path d="M77.8139 20.8226C77.0024 20.3992 76.0781 20.1593 75.0902 20.1593H68.6902C68.4221 20.1593 68.2104 19.9476 68.2104 19.6794C68.2104 19.4113 68.4221 19.1996 68.6902 19.1996H76.2121C77.0942 19.1996 77.8139 18.4799 77.8139 17.5979C77.8139 16.7158 77.0942 15.9961 76.2121 15.9961H68.6902C66.8203 15.9961 65.275 17.3932 65.0421 19.1996C65.028 19.3125 65.0139 19.4325 65.0139 19.5524C65.0139 19.5948 65.0139 19.6371 65.0139 19.6794C65.0139 19.7218 65.0139 19.7641 65.0139 19.8065C65.0139 19.9264 65.028 20.0464 65.0421 20.1593C65.275 21.9657 66.8203 23.3628 68.6902 23.3628H75.0902C76.572 23.3628 77.7786 24.5553 77.8139 26.0301V26.1359C77.7857 27.6177 76.572 28.8032 75.0902 28.8032H66.6086C65.7266 28.8032 65.0068 29.5229 65.0068 30.4049C65.0068 31.2869 65.7266 32.0067 66.6086 32.0067H75.0902C76.071 32.0067 76.9954 31.7668 77.8139 31.3434C78.9006 30.7859 79.7896 29.8969 80.3541 28.8032C80.7775 27.9917 81.0174 27.0673 81.0174 26.0794C81.0174 25.0916 80.7775 24.1743 80.3541 23.3557C79.7896 22.2691 78.9006 21.38 77.8139 20.8155V20.8226Z" fill="white"></path></g><defs><clipPath id="clip0_1478_17785"><rect width="165.826" height="32.0137" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const oP = /* @__PURE__ */ $e(nP, [["render", rP]]), lP = { class: "s-logo" }, aP = ["src"], cP = {
  key: 0,
  class: "s-item-group"
}, hP = {
  key: 1,
  class: "s-item-group"
}, uP = { class: "s-avater__border" }, fP = { id: "side_menu_background" }, dP = { class: "text-right" }, pP = { id: "side_menu_wrapper" }, OP = {
  key: 0,
  class: "side-menu-footer"
}, mP = {
  __name: "SHeader",
  props: {
    isLoggedIn: {
      type: Boolean,
      default: !1
    },
    userInfo: {
      type: Object,
      default: () => ({
        name: "-",
        picture: {
          format: "png"
        }
      })
    },
    logoSrc: {
      type: String,
      default: null,
      description: "서비스 로고 이미지 주소"
    },
    serviceMenus: {
      type: Array,
      default: () => [],
      description: "서비스 메뉴의 items"
    },
    userMenus: {
      type: Array,
      default: () => [],
      description: "사용자 메뉴의 items (예: 나의 정보, 기업 정보, 로그아웃)"
    },
    showMenuBtn: {
      type: Boolean,
      default: !0
    },
    showMenu: {
      type: Boolean,
      default: !1
    },
    loginText: {
      type: String,
      default: "로그인"
    },
    joinText: {
      type: String,
      default: "회원가입"
    },
    teleportId: {
      type: String,
      default: "destination",
      description: "Teleport Id"
    },
    activeMenuCode: {
      type: String,
      default: "",
      description: "선택된 메뉴코드"
    },
    lang: {
      type: String,
      default: "ko"
    },
    logoStyle: {
      type: Object,
      default: () => ({
        height: "30px",
        paddingLeft: "20px"
      }),
      description: "로고 스타일 객체"
    },
    serviceBtnText: {
      type: String,
      default: "서비스"
    }
  },
  emits: [
    "click:menu",
    "click:log-in",
    "click:sign-up",
    "click:menu-item",
    "click:logo",
    "click:service-item"
  ],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G(t.showMenu), r = () => {
      s.value = !s.value, n("click:menu", s.value);
    }, o = () => {
      s.value = !1, n("click:menu", !1);
    }, l = (h) => {
      n("click:menu-item", h);
    }, a = (h) => {
      n("click:service-item", h);
    }, c = (h) => {
      var u;
      return ((u = t.lang) == null ? void 0 : u.toLowerCase()) === "en" ? h.menuNameEn || h.menuName : h.menuNameKr || h.menuName;
    };
    return ue(
      () => t.showMenu,
      (h, u) => {
        h !== u && (s.value = h);
      }
    ), (h, u) => {
      const f = q("v-icon"), d = q("v-btn"), p = q("v-app-bar-title"), O = q("v-avatar"), m = q("v-app-bar"), g = q("v-list-item");
      return Z(), X(he, null, [
        L(m, {
          class: "s-header",
          color: "#1C2536",
          height: 68
        }, {
          prepend: R(() => [
            V("div", lP, [
              V("a", {
                "href.prevent.stop": "#",
                onClick: u[0] || (u[0] = (k) => h.$emit("click:logo"))
              }, [
                u[5] || (u[5] = V("span", { class: "d-none" }, "main-logo", -1)),
                i.logoSrc ? (Z(), X("img", {
                  key: 0,
                  class: "s-logo__img",
                  src: i.logoSrc,
                  alt: "logo",
                  style: ht(i.logoStyle)
                }, null, 12, aP)) : (Z(), J(oP, {
                  key: 1,
                  class: "s-logo__img"
                }))
              ])
            ]),
            L(p, {
              density: "compact",
              variant: "flat",
              size: "small",
              "background-color": "white"
            }, {
              default: R(() => [
                i.showMenuBtn ? (Z(), J(d, {
                  key: 0,
                  class: "s-btn__menu",
                  text: i.serviceBtnText,
                  onClick: r
                }, {
                  prepend: R(() => [
                    L(f, {
                      class: "s-btn__menu__icon",
                      variant: "text",
                      density: "compact",
                      icon: "mdi-menu"
                    })
                  ]),
                  _: 1
                }, 8, ["text"])) : re("", !0)
              ]),
              _: 1
            })
          ]),
          append: R(() => [
            i.isLoggedIn ? (Z(), X("div", hP, [
              ie(h.$slots, "inner-append", {}, void 0, !0),
              L(de(y2), {
                user: i.userInfo,
                "menu-items": i.userMenus,
                "class-name": { fontWhite: !0 },
                "onClick:menuItem": l
              }, {
                badge: R(() => [
                  L(O, null, {
                    default: R(() => [
                      V("div", uP, [
                        i.userInfo.picture ? (Z(), J(de(df), {
                          key: 0,
                          "lazy-src": "profile.svg",
                          "src-url": `data:image/${i.userInfo.picture.format};base64,${i.userInfo.picture.data}`
                        }, null, 8, ["src-url"])) : (Z(), J(de(df), {
                          key: 1,
                          "lazy-src": "profile.svg",
                          src: "profile.svg"
                        }))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["user", "menu-items"])
            ])) : (Z(), X("div", cP, [
              V("a", {
                class: "s-sign__btn",
                onKeypress: u[1] || (u[1] = Jn(Ye((k) => h.$emit("click:log-in"), ["ctrl"]), ["i"])),
                onClick: u[2] || (u[2] = Ye((k) => h.$emit("click:log-in"), ["stop"]))
              }, B(i.loginText), 33),
              V("a", {
                class: "s-sign__btn",
                onKeypress: u[3] || (u[3] = Jn(Ye((k) => h.$emit("click:sign-up"), ["ctrl"]), ["i"])),
                onClick: u[4] || (u[4] = Ye((k) => h.$emit("click:sign-up"), ["stop"]))
              }, B(i.joinText), 33)
            ]))
          ]),
          _: 3
        }),
        V("div", {
          class: ke(["menu-back-ground", { show: s.value, hide: !s.value }])
        }, [
          V("div", fP, [
            V("div", dP, [
              L(f, {
                icon: "mdi-close",
                onClick: o
              })
            ]),
            V("div", pP, [
              (Z(!0), X(he, null, Ze(i.serviceMenus, (k, S) => (Z(), X(he, null, [
                k.accessible ? (Z(), J(g, {
                  key: S,
                  class: "side-menu",
                  active: k.menuCode === i.activeMenuCode,
                  title: c(k),
                  onClick: ($) => a(k)
                }, null, 8, ["active", "title", "onClick"])) : re("", !0)
              ], 64))), 256))
            ]),
            h.$slots["side-menu-footer"] ? (Z(), X("div", OP, [
              ie(h.$slots, "side-menu-footer", {}, void 0, !0)
            ])) : re("", !0)
          ])
        ], 2)
      ], 64);
    };
  }
}, LA = /* @__PURE__ */ $e(mP, [["__scopeId", "data-v-16b36a9c"]]), gP = {}, yP = { class: "footer-wrapper" };
function vP(i, e) {
  const t = q("v-footer");
  return Z(), X("div", yP, [
    L(t, { class: "footer-contents" }, {
      default: R(() => e[0] || (e[0] = [
        ee("Powered by STRATO Cloud Management Platform")
      ])),
      _: 1
    })
  ]);
}
const XA = /* @__PURE__ */ $e(gP, [["render", vP], ["__scopeId", "data-v-018a6e7c"]]), bP = { class: "s-title-area__content" }, SP = { class: "s-title-area__title" }, xP = {
  key: 0,
  class: "s-title-area__number"
}, kP = { class: "s-title-area__buttons button-wrapper" }, wP = {
  __name: "SSubHeader",
  props: {
    className: {
      type: String,
      default: "",
      description: "페이지타이틀의 custom class"
    },
    title: {
      type: String,
      required: !0
    },
    showCnt: {
      type: Boolean,
      required: !1,
      default: !0
    },
    listCnt: {
      type: Number,
      default: 0
    }
  },
  setup(i) {
    return (e, t) => (Z(), X("div", {
      class: ke(["s-title-area", i.className])
    }, [
      V("div", bP, [
        V("div", SP, [
          ee(B(i.title) + " ", 1),
          ie(e.$slots, "title-append", {}, () => [
            i.showCnt ? (Z(), X("span", xP, "(" + B(i.listCnt) + ")", 1)) : re("", !0)
          ], !0)
        ]),
        V("div", kP, [
          ie(e.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, DA = /* @__PURE__ */ $e(wP, [["__scopeId", "data-v-9f760a1f"]]), QP = { class: "s-accordion-wrapper" }, PP = {
  __name: "SAccordionMenu",
  props: {
    title: {
      type: String,
      required: !0
    },
    titleBold: {
      type: Boolean,
      default: !1
    }
  },
  setup(i) {
    const e = G(null), t = G(!1), n = G("0px"), s = () => {
      t.value ? (n.value = `${e.value.scrollHeight}px`, requestAnimationFrame(() => {
        n.value = "0px", t.value = !1;
      })) : (n.value = `${e.value.scrollHeight}px`, t.value = !0);
    }, r = () => {
      t.value && (n.value = "auto");
    };
    return (o, l) => {
      const a = q("v-icon");
      return Z(), X("div", QP, [
        V("div", {
          class: ke(["title", { "title-bold": i.titleBold }])
        }, [
          ee(B(i.title) + " ", 1),
          L(a, {
            class: "float-right",
            style: { top: "10px" },
            icon: t.value ? "mdi-chevron-down" : "mdi-chevron-right",
            onClick: s
          }, null, 8, ["icon"])
        ], 2),
        V("div", {
          ref_key: "accordion",
          ref: e,
          class: "s-accordion-contents",
          style: ht({ height: n.value }),
          onTransitionend: r
        }, [
          ie(o.$slots, "default", {}, void 0, !0)
        ], 36)
      ]);
    };
  }
}, qA = /* @__PURE__ */ $e(PP, [["__scopeId", "data-v-691469ff"]]), $P = { id: "s-navi" }, CP = { id: "s-menu-title-wrapper" }, TP = { id: "s-menu-title" }, AP = {
  key: 0,
  id: "project_select_wrapper"
}, ZP = { class: "project_select" }, _P = { id: "s-menu-wrapper" }, MP = {
  key: 1,
  class: "s-navi-inner-menu-title"
}, RP = {
  __name: "SNavi",
  props: {
    useProject: {
      type: Boolean,
      default: !1
    },
    projectList: {
      type: Array,
      default: () => []
    },
    selectedProject: {
      type: Object,
      default: () => {
      }
    },
    menuPath: {
      type: Object,
      default: () => ({
        menuUrl: "",
        menuName: "",
        menuNameKr: "",
        subMenus: []
      })
    },
    serviceName: {
      type: String,
      default: ""
    },
    dependencyTooltipMessage: {
      type: String,
      default: "프로젝트를 선택 해 주세요"
    },
    routerPath: {
      type: String,
      default: ""
    },
    firstMenuPath: {
      type: String,
      default: "",
      description: "Service Name 클릭 시 이동할 메뉴의 path"
    },
    lang: {
      type: String,
      default: "ko"
    }
  },
  emits: ["change:project", "click:service-name"],
  setup(i, { emit: e }) {
    const t = { projectName: "전체", projectId: 0 }, n = i, s = e, r = G([]), o = N(() => [{ ...t }, ...n.projectList]), l = (O) => {
      var m;
      return !n.useProject || n.useProject && (((m = n.selectedProject) == null ? void 0 : m.projectId) > 0 || O.dependency !== "PROJECT");
    }, a = (O) => {
      s("change:project", O);
    }, c = () => {
      if (n.firstMenuPath)
        try {
          const O = new URL(n.firstMenuPath);
          s("click:service-name", { path: O.pathname });
        } catch {
          s("click:service-name", { path: n.firstMenuPath });
        }
      else
        s("click:service-name", { path: "/" });
    }, h = (O) => {
      var m;
      return ((m = n.lang) == null ? void 0 : m.toLowerCase()) === "en" ? O.menuNameEn || O.menuName : O.menuNameKr || O.menuName;
    }, u = N(() => n.serviceName || h(n.menuPath)), f = (O, m) => {
      if (!O || !m) return !1;
      if (O === m) return !0;
      const g = O.split("/").filter(Boolean), k = m.split("/").filter(Boolean);
      return g.length !== k.length ? !1 : g.every((S, $) => S.startsWith(":") ? !0 : S === k[$]);
    };
    ue(
      () => n.routerPath,
      () => {
        var g;
        const O = ((g = n.menuPath) == null ? void 0 : g.subMenus) || [], m = n.routerPath;
        for (const k in O) {
          if (f(O[k].menuUrl, m)) {
            r.value = [O[k].idx];
            break;
          }
          if (O[k].subMenus && O[k].subMenus.some(
            ($) => f($.menuUrl, m)
          )) {
            r.value = [O[k].idx];
            break;
          }
        }
      },
      { immediate: !0 }
    );
    const d = (O) => f(O, n.routerPath), p = (O, m) => {
      if (l(m)) {
        const g = O.currentTarget.querySelector(".s-navi-inner-menu-title");
        g && g.click();
      }
    };
    return (O, m) => {
      const g = q("v-select"), k = q("RouterLink"), S = q("v-list-item"), $ = q("v-tooltip"), C = q("v-list-group"), M = q("v-list");
      return Z(), X("div", $P, [
        V("div", CP, [
          V("a", {
            "href.stop": "#",
            onClick: c
          }, [
            V("div", TP, B(u.value), 1)
          ])
        ]),
        ie(O.$slots, "default", {}, () => [
          i.useProject ? (Z(), X("div", AP, [
            V("div", ZP, [
              L(g, {
                width: "238px",
                "model-value": i.selectedProject,
                variant: "outlined",
                density: "comfortable",
                items: o.value,
                "item-title": "projectName",
                "item-value": "projectId",
                label: "Select",
                "hide-details": "",
                "persistent-hint": "",
                "return-object": "",
                "single-line": "",
                "onUpdate:modelValue": a
              }, null, 8, ["model-value", "items"])
            ])
          ])) : re("", !0)
        ], !0),
        V("div", _P, [
          i.menuPath && i.menuPath.subMenus && i.menuPath.subMenus.length ? (Z(), J(M, {
            key: 0,
            opened: r.value,
            "onUpdate:opened": m[0] || (m[0] = (P) => r.value = P),
            class: "navi-menu"
          }, {
            default: R(() => [
              (Z(!0), X(he, null, Ze(i.menuPath.subMenus, (P) => (Z(), J(C, {
                key: P.idx,
                value: P.idx
              }, Ei({
                default: R(() => [
                  (Z(!0), X(he, null, Ze(P.subMenus, (w, b) => {
                    var A;
                    return Z(), X(he, { key: b }, [
                      w.accessible ? (Z(), J(S, {
                        key: 0,
                        class: ke(["s-navi-inner-menu", {
                          disabled: !l(w),
                          active: ((A = i.selectedProject) == null ? void 0 : A.projectId) > 0 || w.dependency !== "PROJECT"
                        }]),
                        value: w.idx,
                        "active-class": "menu-active",
                        active: d(w.menuUrl),
                        "prepend-icon": "mdi-circle-small",
                        onClick: (Q) => p(Q, w)
                      }, {
                        title: R(() => [
                          l(w) ? (Z(), J(k, {
                            key: 0,
                            class: "s-navi-inner-menu-title",
                            to: w.menuUrl,
                            ref_for: !0,
                            ref: "menuLink"
                          }, {
                            default: R(() => [
                              ee(B(h(w)), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (Z(), X("span", MP, [
                            ee(B(h(w)) + " ", 1),
                            w.dependency === "PROJECT" ? (Z(), J($, {
                              key: 0,
                              activator: "parent",
                              location: "start"
                            }, {
                              default: R(() => [
                                ee(B(i.dependencyTooltipMessage), 1)
                              ]),
                              _: 1
                            })) : re("", !0)
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["class", "value", "active", "onClick"])) : re("", !0)
                    ], 64);
                  }), 128))
                ]),
                _: 2
              }, [
                P.accessible ? {
                  name: "activator",
                  fn: R(({ props: w }) => [
                    L(S, Ve({ ref_for: !0 }, w, {
                      height: "50px",
                      "active-class": "menu-active",
                      active: d(P.menuUrl),
                      title: h(P),
                      "append-icon": !P.subMenus || P.subMenus.length === 0 ? "" : r.value.includes(P.idx) ? "mdi-chevron-up" : "mdi-chevron-down",
                      onClick: (b) => p(b, P)
                    }), Ei({ _: 2 }, [
                      !P.subMenus || P.subMenus.length === 0 ? {
                        name: "title",
                        fn: R(() => [
                          L(k, {
                            class: "navi-inner-menu-title",
                            to: P.menuUrl
                          }, {
                            default: R(() => [
                              ee(B(h(P)), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["active", "title", "append-icon", "onClick"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["opened"])) : re("", !0)
        ])
      ]);
    };
  }
}, jA = /* @__PURE__ */ $e(RP, [["__scopeId", "data-v-c464c187"]]);
var Wm = typeof global == "object" && global && global.Object === Object && global, VP = typeof self == "object" && self && self.Object === Object && self, It = Wm || VP || Function("return this")(), Ot = It.Symbol, Um = Object.prototype, EP = Um.hasOwnProperty, LP = Um.toString, Ln = Ot ? Ot.toStringTag : void 0;
function XP(i) {
  var e = EP.call(i, Ln), t = i[Ln];
  try {
    i[Ln] = void 0;
    var n = !0;
  } catch {
  }
  var s = LP.call(i);
  return n && (e ? i[Ln] = t : delete i[Ln]), s;
}
var DP = Object.prototype, qP = DP.toString;
function jP(i) {
  return qP.call(i);
}
var zP = "[object Null]", BP = "[object Undefined]", pf = Ot ? Ot.toStringTag : void 0;
function Pn(i) {
  return i == null ? i === void 0 ? BP : zP : pf && pf in Object(i) ? XP(i) : jP(i);
}
function bi(i) {
  return i != null && typeof i == "object";
}
var YP = "[object Symbol]";
function gs(i) {
  return typeof i == "symbol" || bi(i) && Pn(i) == YP;
}
function gr(i, e) {
  for (var t = -1, n = i == null ? 0 : i.length, s = Array(n); ++t < n; )
    s[t] = e(i[t], t, i);
  return s;
}
var mt = Array.isArray, IP = 1 / 0, Of = Ot ? Ot.prototype : void 0, mf = Of ? Of.toString : void 0;
function Gm(i) {
  if (typeof i == "string")
    return i;
  if (mt(i))
    return gr(i, Gm) + "";
  if (gs(i))
    return mf ? mf.call(i) : "";
  var e = i + "";
  return e == "0" && 1 / i == -IP ? "-0" : e;
}
function $n(i) {
  var e = typeof i;
  return i != null && (e == "object" || e == "function");
}
function yo(i) {
  return i;
}
var NP = "[object AsyncFunction]", WP = "[object Function]", UP = "[object GeneratorFunction]", GP = "[object Proxy]";
function Fm(i) {
  if (!$n(i))
    return !1;
  var e = Pn(i);
  return e == WP || e == UP || e == NP || e == GP;
}
var ll = It["__core-js_shared__"], gf = function() {
  var i = /[^.]+$/.exec(ll && ll.keys && ll.keys.IE_PROTO || "");
  return i ? "Symbol(src)_1." + i : "";
}();
function FP(i) {
  return !!gf && gf in i;
}
var HP = Function.prototype, KP = HP.toString;
function Yi(i) {
  if (i != null) {
    try {
      return KP.call(i);
    } catch {
    }
    try {
      return i + "";
    } catch {
    }
  }
  return "";
}
var JP = /[\\^$.*+?()[\]{}|]/g, e$ = /^\[object .+?Constructor\]$/, t$ = Function.prototype, i$ = Object.prototype, n$ = t$.toString, s$ = i$.hasOwnProperty, r$ = RegExp(
  "^" + n$.call(s$).replace(JP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function o$(i) {
  if (!$n(i) || FP(i))
    return !1;
  var e = Fm(i) ? r$ : e$;
  return e.test(Yi(i));
}
function l$(i, e) {
  return i == null ? void 0 : i[e];
}
function Ii(i, e) {
  var t = l$(i, e);
  return o$(t) ? t : void 0;
}
var xa = Ii(It, "WeakMap"), yf = Object.create, a$ = /* @__PURE__ */ function() {
  function i() {
  }
  return function(e) {
    if (!$n(e))
      return {};
    if (yf)
      return yf(e);
    i.prototype = e;
    var t = new i();
    return i.prototype = void 0, t;
  };
}();
function c$(i, e, t) {
  switch (t.length) {
    case 0:
      return i.call(e);
    case 1:
      return i.call(e, t[0]);
    case 2:
      return i.call(e, t[0], t[1]);
    case 3:
      return i.call(e, t[0], t[1], t[2]);
  }
  return i.apply(e, t);
}
var h$ = 800, u$ = 16, f$ = Date.now;
function d$(i) {
  var e = 0, t = 0;
  return function() {
    var n = f$(), s = u$ - (n - t);
    if (t = n, s > 0) {
      if (++e >= h$)
        return arguments[0];
    } else
      e = 0;
    return i.apply(void 0, arguments);
  };
}
function p$(i) {
  return function() {
    return i;
  };
}
var Gr = function() {
  try {
    var i = Ii(Object, "defineProperty");
    return i({}, "", {}), i;
  } catch {
  }
}(), O$ = Gr ? function(i, e) {
  return Gr(i, "toString", {
    configurable: !0,
    enumerable: !1,
    value: p$(e),
    writable: !0
  });
} : yo, m$ = d$(O$);
function g$(i, e) {
  for (var t = -1, n = i == null ? 0 : i.length; ++t < n && e(i[t], t, i) !== !1; )
    ;
  return i;
}
var y$ = 9007199254740991, v$ = /^(?:0|[1-9]\d*)$/;
function kc(i, e) {
  var t = typeof i;
  return e = e ?? y$, !!e && (t == "number" || t != "symbol" && v$.test(i)) && i > -1 && i % 1 == 0 && i < e;
}
function b$(i, e, t) {
  e == "__proto__" && Gr ? Gr(i, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : i[e] = t;
}
function vo(i, e) {
  return i === e || i !== i && e !== e;
}
var S$ = Object.prototype, x$ = S$.hasOwnProperty;
function k$(i, e, t) {
  var n = i[e];
  (!(x$.call(i, e) && vo(n, t)) || t === void 0 && !(e in i)) && b$(i, e, t);
}
var vf = Math.max;
function w$(i, e, t) {
  return e = vf(e === void 0 ? i.length - 1 : e, 0), function() {
    for (var n = arguments, s = -1, r = vf(n.length - e, 0), o = Array(r); ++s < r; )
      o[s] = n[e + s];
    s = -1;
    for (var l = Array(e + 1); ++s < e; )
      l[s] = n[s];
    return l[e] = t(o), c$(i, this, l);
  };
}
function Q$(i, e) {
  return m$(w$(i, e, yo), i + "");
}
var P$ = 9007199254740991;
function wc(i) {
  return typeof i == "number" && i > -1 && i % 1 == 0 && i <= P$;
}
function bo(i) {
  return i != null && wc(i.length) && !Fm(i);
}
function bf(i, e, t) {
  if (!$n(t))
    return !1;
  var n = typeof e;
  return (n == "number" ? bo(t) && kc(e, t.length) : n == "string" && e in t) ? vo(t[e], i) : !1;
}
var $$ = Object.prototype;
function Hm(i) {
  var e = i && i.constructor, t = typeof e == "function" && e.prototype || $$;
  return i === t;
}
function C$(i, e) {
  for (var t = -1, n = Array(i); ++t < i; )
    n[t] = e(t);
  return n;
}
var T$ = "[object Arguments]";
function Sf(i) {
  return bi(i) && Pn(i) == T$;
}
var Km = Object.prototype, A$ = Km.hasOwnProperty, Z$ = Km.propertyIsEnumerable, Qc = Sf(/* @__PURE__ */ function() {
  return arguments;
}()) ? Sf : function(i) {
  return bi(i) && A$.call(i, "callee") && !Z$.call(i, "callee");
};
function _$() {
  return !1;
}
var Jm = typeof exports == "object" && exports && !exports.nodeType && exports, xf = Jm && typeof module == "object" && module && !module.nodeType && module, M$ = xf && xf.exports === Jm, kf = M$ ? It.Buffer : void 0, R$ = kf ? kf.isBuffer : void 0, Fr = R$ || _$, V$ = "[object Arguments]", E$ = "[object Array]", L$ = "[object Boolean]", X$ = "[object Date]", D$ = "[object Error]", q$ = "[object Function]", j$ = "[object Map]", z$ = "[object Number]", B$ = "[object Object]", Y$ = "[object RegExp]", I$ = "[object Set]", N$ = "[object String]", W$ = "[object WeakMap]", U$ = "[object ArrayBuffer]", G$ = "[object DataView]", F$ = "[object Float32Array]", H$ = "[object Float64Array]", K$ = "[object Int8Array]", J$ = "[object Int16Array]", eC = "[object Int32Array]", tC = "[object Uint8Array]", iC = "[object Uint8ClampedArray]", nC = "[object Uint16Array]", sC = "[object Uint32Array]", ve = {};
ve[F$] = ve[H$] = ve[K$] = ve[J$] = ve[eC] = ve[tC] = ve[iC] = ve[nC] = ve[sC] = !0;
ve[V$] = ve[E$] = ve[U$] = ve[L$] = ve[G$] = ve[X$] = ve[D$] = ve[q$] = ve[j$] = ve[z$] = ve[B$] = ve[Y$] = ve[I$] = ve[N$] = ve[W$] = !1;
function rC(i) {
  return bi(i) && wc(i.length) && !!ve[Pn(i)];
}
function So(i) {
  return function(e) {
    return i(e);
  };
}
var eg = typeof exports == "object" && exports && !exports.nodeType && exports, Kn = eg && typeof module == "object" && module && !module.nodeType && module, oC = Kn && Kn.exports === eg, al = oC && Wm.process, bn = function() {
  try {
    var i = Kn && Kn.require && Kn.require("util").types;
    return i || al && al.binding && al.binding("util");
  } catch {
  }
}(), wf = bn && bn.isTypedArray, tg = wf ? So(wf) : rC, lC = Object.prototype, aC = lC.hasOwnProperty;
function cC(i, e) {
  var t = mt(i), n = !t && Qc(i), s = !t && !n && Fr(i), r = !t && !n && !s && tg(i), o = t || n || s || r, l = o ? C$(i.length, String) : [], a = l.length;
  for (var c in i)
    aC.call(i, c) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    kc(c, a))) && l.push(c);
  return l;
}
function ig(i, e) {
  return function(t) {
    return i(e(t));
  };
}
var hC = ig(Object.keys, Object), uC = Object.prototype, fC = uC.hasOwnProperty;
function dC(i) {
  if (!Hm(i))
    return hC(i);
  var e = [];
  for (var t in Object(i))
    fC.call(i, t) && t != "constructor" && e.push(t);
  return e;
}
function Pc(i) {
  return bo(i) ? cC(i) : dC(i);
}
var pC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, OC = /^\w*$/;
function $c(i, e) {
  if (mt(i))
    return !1;
  var t = typeof i;
  return t == "number" || t == "symbol" || t == "boolean" || i == null || gs(i) ? !0 : OC.test(i) || !pC.test(i) || e != null && i in Object(e);
}
var ys = Ii(Object, "create");
function mC() {
  this.__data__ = ys ? ys(null) : {}, this.size = 0;
}
function gC(i) {
  var e = this.has(i) && delete this.__data__[i];
  return this.size -= e ? 1 : 0, e;
}
var yC = "__lodash_hash_undefined__", vC = Object.prototype, bC = vC.hasOwnProperty;
function SC(i) {
  var e = this.__data__;
  if (ys) {
    var t = e[i];
    return t === yC ? void 0 : t;
  }
  return bC.call(e, i) ? e[i] : void 0;
}
var xC = Object.prototype, kC = xC.hasOwnProperty;
function wC(i) {
  var e = this.__data__;
  return ys ? e[i] !== void 0 : kC.call(e, i);
}
var QC = "__lodash_hash_undefined__";
function PC(i, e) {
  var t = this.__data__;
  return this.size += this.has(i) ? 0 : 1, t[i] = ys && e === void 0 ? QC : e, this;
}
function zi(i) {
  var e = -1, t = i == null ? 0 : i.length;
  for (this.clear(); ++e < t; ) {
    var n = i[e];
    this.set(n[0], n[1]);
  }
}
zi.prototype.clear = mC;
zi.prototype.delete = gC;
zi.prototype.get = SC;
zi.prototype.has = wC;
zi.prototype.set = PC;
function $C() {
  this.__data__ = [], this.size = 0;
}
function xo(i, e) {
  for (var t = i.length; t--; )
    if (vo(i[t][0], e))
      return t;
  return -1;
}
var CC = Array.prototype, TC = CC.splice;
function AC(i) {
  var e = this.__data__, t = xo(e, i);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : TC.call(e, t, 1), --this.size, !0;
}
function ZC(i) {
  var e = this.__data__, t = xo(e, i);
  return t < 0 ? void 0 : e[t][1];
}
function _C(i) {
  return xo(this.__data__, i) > -1;
}
function MC(i, e) {
  var t = this.__data__, n = xo(t, i);
  return n < 0 ? (++this.size, t.push([i, e])) : t[n][1] = e, this;
}
function ti(i) {
  var e = -1, t = i == null ? 0 : i.length;
  for (this.clear(); ++e < t; ) {
    var n = i[e];
    this.set(n[0], n[1]);
  }
}
ti.prototype.clear = $C;
ti.prototype.delete = AC;
ti.prototype.get = ZC;
ti.prototype.has = _C;
ti.prototype.set = MC;
var vs = Ii(It, "Map");
function RC() {
  this.size = 0, this.__data__ = {
    hash: new zi(),
    map: new (vs || ti)(),
    string: new zi()
  };
}
function VC(i) {
  var e = typeof i;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? i !== "__proto__" : i === null;
}
function ko(i, e) {
  var t = i.__data__;
  return VC(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function EC(i) {
  var e = ko(this, i).delete(i);
  return this.size -= e ? 1 : 0, e;
}
function LC(i) {
  return ko(this, i).get(i);
}
function XC(i) {
  return ko(this, i).has(i);
}
function DC(i, e) {
  var t = ko(this, i), n = t.size;
  return t.set(i, e), this.size += t.size == n ? 0 : 1, this;
}
function ii(i) {
  var e = -1, t = i == null ? 0 : i.length;
  for (this.clear(); ++e < t; ) {
    var n = i[e];
    this.set(n[0], n[1]);
  }
}
ii.prototype.clear = RC;
ii.prototype.delete = EC;
ii.prototype.get = LC;
ii.prototype.has = XC;
ii.prototype.set = DC;
var qC = "Expected a function";
function Cc(i, e) {
  if (typeof i != "function" || e != null && typeof e != "function")
    throw new TypeError(qC);
  var t = function() {
    var n = arguments, s = e ? e.apply(this, n) : n[0], r = t.cache;
    if (r.has(s))
      return r.get(s);
    var o = i.apply(this, n);
    return t.cache = r.set(s, o) || r, o;
  };
  return t.cache = new (Cc.Cache || ii)(), t;
}
Cc.Cache = ii;
var jC = 500;
function zC(i) {
  var e = Cc(i, function(n) {
    return t.size === jC && t.clear(), n;
  }), t = e.cache;
  return e;
}
var BC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, YC = /\\(\\)?/g, IC = zC(function(i) {
  var e = [];
  return i.charCodeAt(0) === 46 && e.push(""), i.replace(BC, function(t, n, s, r) {
    e.push(s ? r.replace(YC, "$1") : n || t);
  }), e;
});
function NC(i) {
  return i == null ? "" : Gm(i);
}
function ng(i, e) {
  return mt(i) ? i : $c(i, e) ? [i] : IC(NC(i));
}
var WC = 1 / 0;
function wo(i) {
  if (typeof i == "string" || gs(i))
    return i;
  var e = i + "";
  return e == "0" && 1 / i == -WC ? "-0" : e;
}
function Tc(i, e) {
  e = ng(e, i);
  for (var t = 0, n = e.length; i != null && t < n; )
    i = i[wo(e[t++])];
  return t && t == n ? i : void 0;
}
function UC(i, e, t) {
  var n = i == null ? void 0 : Tc(i, e);
  return n === void 0 ? t : n;
}
function sg(i, e) {
  for (var t = -1, n = e.length, s = i.length; ++t < n; )
    i[s + t] = e[t];
  return i;
}
var Qf = Ot ? Ot.isConcatSpreadable : void 0;
function GC(i) {
  return mt(i) || Qc(i) || !!(Qf && i && i[Qf]);
}
function FC(i, e, t, n, s) {
  var r = -1, o = i.length;
  for (t || (t = GC), s || (s = []); ++r < o; ) {
    var l = i[r];
    t(l) ? sg(s, l) : s[s.length] = l;
  }
  return s;
}
var HC = ig(Object.getPrototypeOf, Object);
function KC() {
  this.__data__ = new ti(), this.size = 0;
}
function JC(i) {
  var e = this.__data__, t = e.delete(i);
  return this.size = e.size, t;
}
function e5(i) {
  return this.__data__.get(i);
}
function t5(i) {
  return this.__data__.has(i);
}
var i5 = 200;
function n5(i, e) {
  var t = this.__data__;
  if (t instanceof ti) {
    var n = t.__data__;
    if (!vs || n.length < i5 - 1)
      return n.push([i, e]), this.size = ++t.size, this;
    t = this.__data__ = new ii(n);
  }
  return t.set(i, e), this.size = t.size, this;
}
function Dt(i) {
  var e = this.__data__ = new ti(i);
  this.size = e.size;
}
Dt.prototype.clear = KC;
Dt.prototype.delete = JC;
Dt.prototype.get = e5;
Dt.prototype.has = t5;
Dt.prototype.set = n5;
var rg = typeof exports == "object" && exports && !exports.nodeType && exports, Pf = rg && typeof module == "object" && module && !module.nodeType && module, s5 = Pf && Pf.exports === rg, $f = s5 ? It.Buffer : void 0;
$f && $f.allocUnsafe;
function r5(i, e) {
  return i.slice();
}
function o5(i, e) {
  for (var t = -1, n = i == null ? 0 : i.length, s = 0, r = []; ++t < n; ) {
    var o = i[t];
    e(o, t, i) && (r[s++] = o);
  }
  return r;
}
function l5() {
  return [];
}
var a5 = Object.prototype, c5 = a5.propertyIsEnumerable, Cf = Object.getOwnPropertySymbols, h5 = Cf ? function(i) {
  return i == null ? [] : (i = Object(i), o5(Cf(i), function(e) {
    return c5.call(i, e);
  }));
} : l5;
function u5(i, e, t) {
  var n = e(i);
  return mt(i) ? n : sg(n, t(i));
}
function ka(i) {
  return u5(i, Pc, h5);
}
var wa = Ii(It, "DataView"), Qa = Ii(It, "Promise"), Pa = Ii(It, "Set"), Tf = "[object Map]", f5 = "[object Object]", Af = "[object Promise]", Zf = "[object Set]", _f = "[object WeakMap]", Mf = "[object DataView]", d5 = Yi(wa), p5 = Yi(vs), O5 = Yi(Qa), m5 = Yi(Pa), g5 = Yi(xa), bt = Pn;
(wa && bt(new wa(new ArrayBuffer(1))) != Mf || vs && bt(new vs()) != Tf || Qa && bt(Qa.resolve()) != Af || Pa && bt(new Pa()) != Zf || xa && bt(new xa()) != _f) && (bt = function(i) {
  var e = Pn(i), t = e == f5 ? i.constructor : void 0, n = t ? Yi(t) : "";
  if (n)
    switch (n) {
      case d5:
        return Mf;
      case p5:
        return Tf;
      case O5:
        return Af;
      case m5:
        return Zf;
      case g5:
        return _f;
    }
  return e;
});
var y5 = Object.prototype, v5 = y5.hasOwnProperty;
function b5(i) {
  var e = i.length, t = new i.constructor(e);
  return e && typeof i[0] == "string" && v5.call(i, "index") && (t.index = i.index, t.input = i.input), t;
}
var Hr = It.Uint8Array;
function Ac(i) {
  var e = new i.constructor(i.byteLength);
  return new Hr(e).set(new Hr(i)), e;
}
function S5(i, e) {
  var t = Ac(i.buffer);
  return new i.constructor(t, i.byteOffset, i.byteLength);
}
var x5 = /\w*$/;
function k5(i) {
  var e = new i.constructor(i.source, x5.exec(i));
  return e.lastIndex = i.lastIndex, e;
}
var Rf = Ot ? Ot.prototype : void 0, Vf = Rf ? Rf.valueOf : void 0;
function w5(i) {
  return Vf ? Object(Vf.call(i)) : {};
}
function Q5(i, e) {
  var t = Ac(i.buffer);
  return new i.constructor(t, i.byteOffset, i.length);
}
var P5 = "[object Boolean]", $5 = "[object Date]", C5 = "[object Map]", T5 = "[object Number]", A5 = "[object RegExp]", Z5 = "[object Set]", _5 = "[object String]", M5 = "[object Symbol]", R5 = "[object ArrayBuffer]", V5 = "[object DataView]", E5 = "[object Float32Array]", L5 = "[object Float64Array]", X5 = "[object Int8Array]", D5 = "[object Int16Array]", q5 = "[object Int32Array]", j5 = "[object Uint8Array]", z5 = "[object Uint8ClampedArray]", B5 = "[object Uint16Array]", Y5 = "[object Uint32Array]";
function I5(i, e, t) {
  var n = i.constructor;
  switch (e) {
    case R5:
      return Ac(i);
    case P5:
    case $5:
      return new n(+i);
    case V5:
      return S5(i);
    case E5:
    case L5:
    case X5:
    case D5:
    case q5:
    case j5:
    case z5:
    case B5:
    case Y5:
      return Q5(i);
    case C5:
      return new n();
    case T5:
    case _5:
      return new n(i);
    case A5:
      return k5(i);
    case Z5:
      return new n();
    case M5:
      return w5(i);
  }
}
function N5(i) {
  return typeof i.constructor == "function" && !Hm(i) ? a$(HC(i)) : {};
}
var W5 = "[object Map]";
function U5(i) {
  return bi(i) && bt(i) == W5;
}
var Ef = bn && bn.isMap, G5 = Ef ? So(Ef) : U5, F5 = "[object Set]";
function H5(i) {
  return bi(i) && bt(i) == F5;
}
var Lf = bn && bn.isSet, K5 = Lf ? So(Lf) : H5, og = "[object Arguments]", J5 = "[object Array]", eT = "[object Boolean]", tT = "[object Date]", iT = "[object Error]", lg = "[object Function]", nT = "[object GeneratorFunction]", sT = "[object Map]", rT = "[object Number]", ag = "[object Object]", oT = "[object RegExp]", lT = "[object Set]", aT = "[object String]", cT = "[object Symbol]", hT = "[object WeakMap]", uT = "[object ArrayBuffer]", fT = "[object DataView]", dT = "[object Float32Array]", pT = "[object Float64Array]", OT = "[object Int8Array]", mT = "[object Int16Array]", gT = "[object Int32Array]", yT = "[object Uint8Array]", vT = "[object Uint8ClampedArray]", bT = "[object Uint16Array]", ST = "[object Uint32Array]", ge = {};
ge[og] = ge[J5] = ge[uT] = ge[fT] = ge[eT] = ge[tT] = ge[dT] = ge[pT] = ge[OT] = ge[mT] = ge[gT] = ge[sT] = ge[rT] = ge[ag] = ge[oT] = ge[lT] = ge[aT] = ge[cT] = ge[yT] = ge[vT] = ge[bT] = ge[ST] = !0;
ge[iT] = ge[lg] = ge[hT] = !1;
function yr(i, e, t, n, s, r) {
  var o;
  if (o !== void 0)
    return o;
  if (!$n(i))
    return i;
  var l = mt(i);
  if (l)
    o = b5(i);
  else {
    var a = bt(i), c = a == lg || a == nT;
    if (Fr(i))
      return r5(i);
    if (a == ag || a == og || c && !s)
      o = c ? {} : N5(i);
    else {
      if (!ge[a])
        return s ? i : {};
      o = I5(i, a);
    }
  }
  r || (r = new Dt());
  var h = r.get(i);
  if (h)
    return h;
  r.set(i, o), K5(i) ? i.forEach(function(d) {
    o.add(yr(d, e, t, d, i, r));
  }) : G5(i) && i.forEach(function(d, p) {
    o.set(p, yr(d, e, t, p, i, r));
  });
  var u = ka, f = l ? void 0 : u(i);
  return g$(f || i, function(d, p) {
    f && (p = d, d = i[p]), k$(o, p, yr(d, e, t, p, i, r));
  }), o;
}
var xT = 1, kT = 4;
function cg(i) {
  return yr(i, xT | kT);
}
var wT = "__lodash_hash_undefined__";
function QT(i) {
  return this.__data__.set(i, wT), this;
}
function PT(i) {
  return this.__data__.has(i);
}
function Kr(i) {
  var e = -1, t = i == null ? 0 : i.length;
  for (this.__data__ = new ii(); ++e < t; )
    this.add(i[e]);
}
Kr.prototype.add = Kr.prototype.push = QT;
Kr.prototype.has = PT;
function $T(i, e) {
  for (var t = -1, n = i == null ? 0 : i.length; ++t < n; )
    if (e(i[t], t, i))
      return !0;
  return !1;
}
function CT(i, e) {
  return i.has(e);
}
var TT = 1, AT = 2;
function hg(i, e, t, n, s, r) {
  var o = t & TT, l = i.length, a = e.length;
  if (l != a && !(o && a > l))
    return !1;
  var c = r.get(i), h = r.get(e);
  if (c && h)
    return c == e && h == i;
  var u = -1, f = !0, d = t & AT ? new Kr() : void 0;
  for (r.set(i, e), r.set(e, i); ++u < l; ) {
    var p = i[u], O = e[u];
    if (n)
      var m = o ? n(O, p, u, e, i, r) : n(p, O, u, i, e, r);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!$T(e, function(g, k) {
        if (!CT(d, k) && (p === g || s(p, g, t, n, r)))
          return d.push(k);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === O || s(p, O, t, n, r))) {
      f = !1;
      break;
    }
  }
  return r.delete(i), r.delete(e), f;
}
function ZT(i) {
  var e = -1, t = Array(i.size);
  return i.forEach(function(n, s) {
    t[++e] = [s, n];
  }), t;
}
function _T(i) {
  var e = -1, t = Array(i.size);
  return i.forEach(function(n) {
    t[++e] = n;
  }), t;
}
var MT = 1, RT = 2, VT = "[object Boolean]", ET = "[object Date]", LT = "[object Error]", XT = "[object Map]", DT = "[object Number]", qT = "[object RegExp]", jT = "[object Set]", zT = "[object String]", BT = "[object Symbol]", YT = "[object ArrayBuffer]", IT = "[object DataView]", Xf = Ot ? Ot.prototype : void 0, cl = Xf ? Xf.valueOf : void 0;
function NT(i, e, t, n, s, r, o) {
  switch (t) {
    case IT:
      if (i.byteLength != e.byteLength || i.byteOffset != e.byteOffset)
        return !1;
      i = i.buffer, e = e.buffer;
    case YT:
      return !(i.byteLength != e.byteLength || !r(new Hr(i), new Hr(e)));
    case VT:
    case ET:
    case DT:
      return vo(+i, +e);
    case LT:
      return i.name == e.name && i.message == e.message;
    case qT:
    case zT:
      return i == e + "";
    case XT:
      var l = ZT;
    case jT:
      var a = n & MT;
      if (l || (l = _T), i.size != e.size && !a)
        return !1;
      var c = o.get(i);
      if (c)
        return c == e;
      n |= RT, o.set(i, e);
      var h = hg(l(i), l(e), n, s, r, o);
      return o.delete(i), h;
    case BT:
      if (cl)
        return cl.call(i) == cl.call(e);
  }
  return !1;
}
var WT = 1, UT = Object.prototype, GT = UT.hasOwnProperty;
function FT(i, e, t, n, s, r) {
  var o = t & WT, l = ka(i), a = l.length, c = ka(e), h = c.length;
  if (a != h && !o)
    return !1;
  for (var u = a; u--; ) {
    var f = l[u];
    if (!(o ? f in e : GT.call(e, f)))
      return !1;
  }
  var d = r.get(i), p = r.get(e);
  if (d && p)
    return d == e && p == i;
  var O = !0;
  r.set(i, e), r.set(e, i);
  for (var m = o; ++u < a; ) {
    f = l[u];
    var g = i[f], k = e[f];
    if (n)
      var S = o ? n(k, g, f, e, i, r) : n(g, k, f, i, e, r);
    if (!(S === void 0 ? g === k || s(g, k, t, n, r) : S)) {
      O = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (O && !m) {
    var $ = i.constructor, C = e.constructor;
    $ != C && "constructor" in i && "constructor" in e && !(typeof $ == "function" && $ instanceof $ && typeof C == "function" && C instanceof C) && (O = !1);
  }
  return r.delete(i), r.delete(e), O;
}
var HT = 1, Df = "[object Arguments]", qf = "[object Array]", ir = "[object Object]", KT = Object.prototype, jf = KT.hasOwnProperty;
function JT(i, e, t, n, s, r) {
  var o = mt(i), l = mt(e), a = o ? qf : bt(i), c = l ? qf : bt(e);
  a = a == Df ? ir : a, c = c == Df ? ir : c;
  var h = a == ir, u = c == ir, f = a == c;
  if (f && Fr(i)) {
    if (!Fr(e))
      return !1;
    o = !0, h = !1;
  }
  if (f && !h)
    return r || (r = new Dt()), o || tg(i) ? hg(i, e, t, n, s, r) : NT(i, e, a, t, n, s, r);
  if (!(t & HT)) {
    var d = h && jf.call(i, "__wrapped__"), p = u && jf.call(e, "__wrapped__");
    if (d || p) {
      var O = d ? i.value() : i, m = p ? e.value() : e;
      return r || (r = new Dt()), s(O, m, t, n, r);
    }
  }
  return f ? (r || (r = new Dt()), FT(i, e, t, n, s, r)) : !1;
}
function Zc(i, e, t, n, s) {
  return i === e ? !0 : i == null || e == null || !bi(i) && !bi(e) ? i !== i && e !== e : JT(i, e, t, n, Zc, s);
}
var e3 = 1, t3 = 2;
function i3(i, e, t, n) {
  var s = t.length, r = s;
  if (i == null)
    return !r;
  for (i = Object(i); s--; ) {
    var o = t[s];
    if (o[2] ? o[1] !== i[o[0]] : !(o[0] in i))
      return !1;
  }
  for (; ++s < r; ) {
    o = t[s];
    var l = o[0], a = i[l], c = o[1];
    if (o[2]) {
      if (a === void 0 && !(l in i))
        return !1;
    } else {
      var h = new Dt(), u;
      if (!(u === void 0 ? Zc(c, a, e3 | t3, n, h) : u))
        return !1;
    }
  }
  return !0;
}
function ug(i) {
  return i === i && !$n(i);
}
function n3(i) {
  for (var e = Pc(i), t = e.length; t--; ) {
    var n = e[t], s = i[n];
    e[t] = [n, s, ug(s)];
  }
  return e;
}
function fg(i, e) {
  return function(t) {
    return t == null ? !1 : t[i] === e && (e !== void 0 || i in Object(t));
  };
}
function s3(i) {
  var e = n3(i);
  return e.length == 1 && e[0][2] ? fg(e[0][0], e[0][1]) : function(t) {
    return t === i || i3(t, i, e);
  };
}
function r3(i, e) {
  return i != null && e in Object(i);
}
function o3(i, e, t) {
  e = ng(e, i);
  for (var n = -1, s = e.length, r = !1; ++n < s; ) {
    var o = wo(e[n]);
    if (!(r = i != null && t(i, o)))
      break;
    i = i[o];
  }
  return r || ++n != s ? r : (s = i == null ? 0 : i.length, !!s && wc(s) && kc(o, s) && (mt(i) || Qc(i)));
}
function l3(i, e) {
  return i != null && o3(i, e, r3);
}
var a3 = 1, c3 = 2;
function h3(i, e) {
  return $c(i) && ug(e) ? fg(wo(i), e) : function(t) {
    var n = UC(t, i);
    return n === void 0 && n === e ? l3(t, i) : Zc(e, n, a3 | c3);
  };
}
function u3(i) {
  return function(e) {
    return e == null ? void 0 : e[i];
  };
}
function f3(i) {
  return function(e) {
    return Tc(e, i);
  };
}
function d3(i) {
  return $c(i) ? u3(wo(i)) : f3(i);
}
function p3(i) {
  return typeof i == "function" ? i : i == null ? yo : typeof i == "object" ? mt(i) ? h3(i[0], i[1]) : s3(i) : d3(i);
}
function O3(i) {
  return function(e, t, n) {
    for (var s = -1, r = Object(e), o = n(e), l = o.length; l--; ) {
      var a = o[++s];
      if (t(r[a], a, r) === !1)
        break;
    }
    return e;
  };
}
var m3 = O3();
function g3(i, e) {
  return i && m3(i, e, Pc);
}
function y3(i, e) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!bo(t))
      return i(t, n);
    for (var s = t.length, r = -1, o = Object(t); ++r < s && n(o[r], r, o) !== !1; )
      ;
    return t;
  };
}
var v3 = y3(g3);
function b3(i, e) {
  var t = -1, n = bo(i) ? Array(i.length) : [];
  return v3(i, function(s, r, o) {
    n[++t] = e(s, r, o);
  }), n;
}
function S3(i, e) {
  var t = i.length;
  for (i.sort(e); t--; )
    i[t] = i[t].value;
  return i;
}
function x3(i, e) {
  if (i !== e) {
    var t = i !== void 0, n = i === null, s = i === i, r = gs(i), o = e !== void 0, l = e === null, a = e === e, c = gs(e);
    if (!l && !c && !r && i > e || r && o && a && !l && !c || n && o && a || !t && a || !s)
      return 1;
    if (!n && !r && !c && i < e || c && t && s && !n && !r || l && t && s || !o && s || !a)
      return -1;
  }
  return 0;
}
function k3(i, e, t) {
  for (var n = -1, s = i.criteria, r = e.criteria, o = s.length, l = t.length; ++n < o; ) {
    var a = x3(s[n], r[n]);
    if (a) {
      if (n >= l)
        return a;
      var c = t[n];
      return a * (c == "desc" ? -1 : 1);
    }
  }
  return i.index - e.index;
}
function w3(i, e, t) {
  e.length ? e = gr(e, function(r) {
    return mt(r) ? function(o) {
      return Tc(o, r.length === 1 ? r[0] : r);
    } : r;
  }) : e = [yo];
  var n = -1;
  e = gr(e, So(p3));
  var s = b3(i, function(r, o, l) {
    var a = gr(e, function(c) {
      return c(r);
    });
    return { criteria: a, index: ++n, value: r };
  });
  return S3(s, function(r, o) {
    return k3(r, o, t);
  });
}
var dg = Q$(function(i, e) {
  if (i == null)
    return [];
  var t = e.length;
  return t > 1 && bf(i, e[0], e[1]) ? e = [] : t > 2 && bf(e[0], e[1], e[2]) && (e = [e[0]]), w3(i, FC(e), []);
});
const Q3 = { class: "s-smart-search" }, P3 = {
  __name: "SSmartSearch",
  props: {
    headers: {
      type: Array,
      default: () => [],
      description: 'data table의 경우 header 값을 의미한다. 데이터 형태: { title: "", key: "" }'
    },
    excludeSearchHeaders: {
      type: Array,
      default: () => [],
      description: "검색에서 제외할 헤더 키 목록"
    },
    multiple: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: "검색어를 입력하세요. (Key:Value)"
    },
    items: {
      type: Array,
      default: () => []
    },
    density: {
      type: String,
      default: "default"
    },
    variant: {
      type: String,
      default: "filled"
    },
    width: {
      type: [Number, String],
      default: 350
    },
    searchTag: {
      type: Boolean,
      default: !1,
      description: "tag 검색 기능을 사용할지에 대한 여부. true일 경우 items의 모든 tag 값들을 headers에 추가한다."
    },
    prependInnerIcon: {
      type: String,
      default: void 0
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:model-value", "update:key", "update:target-item"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G(null), r = G(!1), o = G(!1), l = G(null), a = Vi(t.modelValue), c = G(null), h = Vi({
      closeOnClick: !1,
      closeOnContentClick: !1
    }), u = () => {
      s.value = null, r.value = !1, o.value = !1;
    }, f = (w) => {
      w || u(), s.value = w;
    }, d = (w) => {
      var A;
      const b = /* @__PURE__ */ new Set();
      return (A = t.items) != null && A.length && t.items.forEach((Q) => {
        var v;
        (v = Q.tagList) != null && v.length && Q.tagList.forEach((y) => {
          y[w] !== null && b.add(y[w]);
        });
      }), Array.from(b);
    }, p = (w, b) => {
      var Q;
      const A = /* @__PURE__ */ new Map();
      return (Q = t.items) != null && Q.length && t.items.forEach((v) => {
        var y;
        (y = v.tagList) != null && y.length && v.tagList.forEach((T) => {
          const _ = A.get(T[w]) || [];
          T[b] !== null && _.push(T[b]), A.set(T[w], _);
        });
      }), Object.fromEntries(A);
    }, O = (w, b) => {
      const A = [];
      return w.forEach((Q) => {
        let v = Q;
        (typeof Q == "object" || Array.isArray(Q)) && (v = JSON.stringify(Q)), A.push({
          title: String(v),
          value: String(v),
          type: b
        });
      }), A;
    }, m = N(() => {
      var b, A;
      let w = [];
      if (o.value) {
        const Q = (b = s.value) == null ? void 0 : b.split(":")[0];
        Q && w.push({
          subheader: Q,
          title: ""
        });
        const v = p("tagKey", "tagValue");
        return w = w.concat(
          O(v[Q], "tag")
        ), w;
      }
      if (r.value) {
        if (!t.items.length)
          return [];
        const Q = /* @__PURE__ */ new Set();
        t.items.forEach((T) => {
          T[l.value] !== void 0 && T[l.value] !== null && Q.add(T[l.value]);
        });
        const v = cg(Q), y = (A = s.value) == null ? void 0 : A.split(":")[0];
        return y && w.push({
          subheader: y,
          title: ""
        }), w = w.concat(O(v)), w;
      }
      return w.push({ subheader: "속성", title: "" }), t.headers.forEach((Q) => {
        Q.align !== "d-none" && Q.title && !t.excludeSearchHeaders.includes(Q.key) && w.push(Q);
      }), t.searchTag && (w.push({ subheader: "태그", title: "" }), w = w.concat(
        O(d("tagKey"), "tag")
      )), w;
    }), g = (w, b, A) => {
      var T, _, D;
      const Q = b.toLowerCase(), v = (Q == null ? void 0 : Q.split(":")) || [];
      let y = "";
      return A.raw.subheader ? !0 : ((v == null ? void 0 : v.length) > 1 ? y = v[1].trim().toLowerCase() : y = Q.trim().toLowerCase(), typeof (A == null ? void 0 : A.value) == "string" ? ((T = A == null ? void 0 : A.value) == null ? void 0 : T.toLowerCase().indexOf(y.toLowerCase())) > -1 : ((D = (_ = A == null ? void 0 : A.value) == null ? void 0 : _.value) == null ? void 0 : D.toLowerCase().indexOf(y.toLowerCase())) > -1);
    }, k = (w) => {
      var y;
      if (!w)
        return { result: !1, findTitle: "", findKey: "" };
      let b = "", A = "";
      w = (y = w.toString()) == null ? void 0 : y.split(":")[0].trim().toLowerCase();
      const Q = t.headers;
      dg(Q, "title");
      const v = Q.some((T) => {
        const _ = typeof T.title == typeof {} ? T.title.value : T.title, D = typeof T.key == typeof {} ? T.key.value : T.key;
        return _.toLowerCase() === w || _.toLowerCase().indexOf(w) > -1 ? (b = _, A = D, T) : !1;
      });
      return v || (b = w, A = w, o.value = !0), { result: v, findTitle: b, findKey: A };
    }, S = (w) => {
      w || u();
    }, $ = (w) => {
      const { findKey: b, findTitle: A } = k(w);
      l.value = b, n("update:key", b), s.value = `${A}:`, r.value = !0;
    }, C = (w, b, A) => {
      var F, te, ne;
      console.log(w.key, b, A);
      let Q = "";
      if (!b)
        return;
      const v = ((F = s.value) == null ? void 0 : F.split(":")) || [], y = b == null ? void 0 : b.toString().trim();
      r.value ? Q = v.length ? `${v[0]}: ${y}` : "" : Q = v.length && v[0].trim() ? v[0] : b == null ? void 0 : b.toString().trim();
      const T = ((te = s.value) == null ? void 0 : te.split(":")) || [], { findTitle: _, findKey: D } = k(T[0]);
      if (r.value && y) {
        if (y) {
          const W = {
            title: _,
            value: y.trim(),
            key: D,
            type: o.value ? "tag" : null
          };
          a.push(W), n("update:model-value", a), n("update:target-item", W), setTimeout(() => {
            h.closeOnClick = !1, h.closeOnContentClick = !1;
          }, 500), u();
          return;
        }
      } else {
        if (h.closeOnClick = !0, h.closeOnContentClick = !0, l.value = (ne = t.headers.find((W) => W.title === b)) == null ? void 0 : ne.key, r.value = !0, A === "tag" && (o.value = !0), Q) {
          $(Q);
          return;
        }
        setTimeout(() => {
          h.closeOnClick = !1, h.closeOnContentClick = !1;
        }, 500);
      }
      c.value && (c.value.search = "");
    }, M = () => {
      a.push({ title: "미지정 태그", value: "-", key: "undefinedTag", type: "tag" }), n("update:model-value", a), c.value && (c.value.search = "");
    }, P = (w) => {
      a.splice(w, 1), n("update:model-value", a);
    };
    return (w, b) => {
      const A = q("v-list-subheader"), Q = q("v-list-item"), v = q("v-autocomplete"), y = q("v-chip"), T = q("v-chip-group");
      return Z(), X("div", Q3, [
        L(v, {
          ref_key: "autoComp",
          ref: c,
          class: "s-smart-search",
          style: ht({ width: i.width + "px" }),
          "closable-chips": "",
          multiple: i.multiple,
          density: i.density,
          variant: i.variant,
          items: m.value,
          search: s.value,
          "custom-filter": g,
          placeholder: i.placeholder,
          "menu-props": h,
          "hide-details": "",
          "prepend-inner-icon": i.prependInnerIcon,
          onInput: S,
          "onUpdate:search": f,
          onKeyup: Jn(Ye(C, ["stop"]), ["enter"])
        }, Ei({
          item: R(({ item: _ }) => {
            var D;
            return [
              _.raw.subheader ? (Z(), X(he, { key: 0 }, [
                L(A, { class: "s-list-subheader" }, {
                  default: R(() => [
                    ee(B(_.raw.subheader), 1)
                  ]),
                  _: 2
                }, 1024),
                b[0] || (b[0] = V("hr", null, null, -1))
              ], 64)) : (Z(), J(Q, {
                key: 1,
                title: (D = _ == null ? void 0 : _.props) == null ? void 0 : D.title,
                onClick: (F) => C(F, _ == null ? void 0 : _.raw.title, _ == null ? void 0 : _.raw.type)
              }, null, 8, ["title", "onClick"]))
            ];
          }),
          _: 2
        }, [
          i.searchTag ? {
            name: "append-item",
            fn: R(() => [
              ie(w.$slots, "null-tag", {}, () => [
                L(A, null, {
                  default: R(() => b[1] || (b[1] = [
                    ee("미지정 태그 검색")
                  ])),
                  _: 1
                }),
                b[3] || (b[3] = V("hr", null, null, -1)),
                L(Q, { onClick: M }, {
                  default: R(() => b[2] || (b[2] = [
                    ee("미지정 태그")
                  ])),
                  _: 1
                })
              ], !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["style", "multiple", "density", "variant", "items", "search", "placeholder", "menu-props", "prepend-inner-icon", "onKeyup"]),
        Aa(L(T, null, {
          default: R(() => [
            (Z(!0), X(he, null, Ze(a, (_, D) => (Z(), J(y, {
              key: "smart-search__value--" + _.title + "__" + _.value,
              closable: "",
              "onClick:close": (F) => P(D)
            }, {
              default: R(() => [
                V("strong", null, B(_.title), 1),
                ee(" : " + B(_.value), 1)
              ]),
              _: 2
            }, 1032, ["onClick:close"]))), 128))
          ]),
          _: 1
        }, 512), [
          [Za, a.length]
        ])
      ]);
    };
  }
}, zA = /* @__PURE__ */ $e(P3, [["__scopeId", "data-v-e7b19ea2"]]), $3 = { class: "s-smart-search" }, C3 = {
  __name: "SSmartSearchServer",
  props: {
    headers: {
      type: Array,
      default: () => [],
      description: 'data table의 경우 header 값을 의미한다. 데이터 형태: { title: "", key: "" }'
    },
    excludeSearchHeaders: {
      type: Array,
      default: () => [],
      description: "검색에서 제외할 헤더 키 목록"
    },
    multiple: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: "검색어를 입력하세요. (Key:Value)"
    },
    density: {
      type: String,
      default: "default",
      description: "input 밀도"
    },
    variant: {
      type: String,
      default: "filled",
      description: "input 스타일"
    },
    width: {
      type: [Number, String],
      default: 350,
      description: "input 너비"
    },
    searchTag: {
      type: Boolean,
      default: !1,
      description: "tag 검색 기능을 사용할지에 대한 여부. true일 경우 items의 모든 tag 값들을 headers에 추가한다."
    },
    prependInnerIcon: {
      type: String,
      default: void 0,
      description: "prependInnerIcon 값"
    },
    modelValue: {
      type: Array,
      default: () => [],
      description: "선택된 값 배열"
    },
    valueItems: {
      type: Array,
      default: () => [],
      description: "서버에서 제공된 검색 대상이 되는 데이터 배열"
    },
    tagItems: {
      type: Array,
      default: () => [],
      description: "검색 대상이 되는 태그 배열"
    }
  },
  emits: ["update:model-value", "update:key", "update:target-item"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G(null), r = G(!1), o = G(!1), l = G(null), a = Vi(t.modelValue), c = G(null), h = Vi({
      closeOnClick: !1,
      closeOnContentClick: !1
    }), u = () => {
      s.value = null, r.value = !1, o.value = !1;
    }, f = (b) => {
      b || u(), s.value = b;
    }, d = (b) => {
      var Q;
      const A = /* @__PURE__ */ new Set();
      return (Q = t.tagItems) != null && Q.length && t.tagItems.forEach((v) => {
        var y;
        (y = v.tagList) != null && y.length && v.tagList.forEach((T) => {
          T[b] !== null && A.add(T[b]);
        });
      }), Array.from(A);
    }, p = (b, A) => {
      var v;
      const Q = /* @__PURE__ */ new Map();
      return (v = t.tagItems) != null && v.length && t.tagItems.forEach((y) => {
        var T;
        (T = y.tagList) != null && T.length && y.tagList.forEach((_) => {
          const D = Q.get(_[b]) || [];
          _[A] !== null && D.push(_[A]), Q.set(_[b], D);
        });
      }), Object.fromEntries(Q);
    }, O = (b, A) => {
      const Q = [];
      return b.forEach((v) => {
        let y = v;
        (typeof v == "object" || Array.isArray(v)) && (y = JSON.stringify(v)), console.log("formattedValue", y), Q.push({
          title: String(y),
          value: String(y),
          type: A
        });
      }), Q;
    }, m = (b) => {
      if (b.length === 2 && (b[0].title === "Y" || b[0].title === "N"))
        return items.sort((v, y) => y.title.localeCompare(v.title));
      const A = b.filter((v) => typeof v.title == "string"), Q = b.filter((v) => typeof v.title == "number");
      return A.sort(
        (v, y) => v.title.localeCompare(y.title, void 0, { sensitivity: "base" })
      ), Q.sort((v, y) => y.title - v.title), [...A, ...Q];
    }, g = N(() => {
      var A, Q;
      let b = [];
      if (o.value) {
        const v = (A = s.value) == null ? void 0 : A.split(":")[0];
        v && b.push({
          subheader: v,
          title: ""
        });
        const y = p("tagKey", "tagValue");
        return b = b.concat(
          O(y[v], "tag")
        ), b;
      }
      if (r.value) {
        if (!t.valueItems.length)
          return [];
        const v = /* @__PURE__ */ new Set();
        t.valueItems.forEach((D) => {
          v.add(D.value);
        });
        const y = (Q = s.value) == null ? void 0 : Q.split(":")[0];
        y && b.push({
          subheader: y,
          title: ""
        }), console.log("setFilterDatas", v);
        const T = cg(v), _ = m(O(T));
        return b = b.concat(_), b;
      }
      return b.push({ subheader: "속성", title: "" }), t.headers.forEach((v) => {
        v.align !== "d-none" && v.title && !t.excludeSearchHeaders.includes(v.key) && b.push(v);
      }), t.searchTag && (b.push({ subheader: "태그", title: "" }), b = b.concat(
        O(d("tagKey"), "tag")
      )), console.log(b), b;
    }), k = (b, A, Q) => {
      var _, D, F;
      const v = A.toLowerCase(), y = (v == null ? void 0 : v.split(":")) || [];
      let T = "";
      return Q.raw.subheader ? !0 : ((y == null ? void 0 : y.length) > 1 ? T = y[1].trim().toLowerCase() : T = v.trim().toLowerCase(), typeof (Q == null ? void 0 : Q.value) == "string" ? ((_ = Q == null ? void 0 : Q.value) == null ? void 0 : _.toLowerCase().indexOf(T.toLowerCase())) > -1 : ((F = (D = Q == null ? void 0 : Q.value) == null ? void 0 : D.value) == null ? void 0 : F.toLowerCase().indexOf(T.toLowerCase())) > -1);
    }, S = (b) => {
      var T;
      if (!b)
        return { result: !1, findTitle: "", findKey: "" };
      let A = "", Q = "";
      b = (T = b.toString()) == null ? void 0 : T.split(":")[0].trim().toLowerCase();
      const v = t.headers;
      dg(v, "title");
      const y = v.some((_) => {
        const D = typeof _.title == typeof {} ? _.title.value : _.title, F = typeof _.key == typeof {} ? _.key.value : _.key;
        return D.toLowerCase() === b || D.toLowerCase().indexOf(b) > -1 ? (A = D, Q = F, _) : !1;
      });
      return y || (A = b, Q = b, o.value = !0), { result: y, findTitle: A, findKey: Q };
    }, $ = (b) => {
      b || u();
    }, C = (b) => {
      const { findKey: A, findTitle: Q } = S(b);
      l.value = A, n("update:key", A), s.value = `${Q}:`, r.value = !0;
    }, M = (b, A, Q) => {
      var te, ne, W, le, K;
      console.log(b.key, A, Q);
      let v = "";
      if (!A)
        return;
      const y = ((te = s.value) == null ? void 0 : te.split(":")) || [], T = (y == null ? void 0 : y.length) > 1 && ((ne = y[1]) != null && ne.trim()) ? s.value.replace(`${(W = s.value) == null ? void 0 : W.split(":")[0]}:`, "") : A == null ? void 0 : A.toString().trim();
      r.value ? v = y.length ? `${y[0]}: ${T}` : "" : v = y.length && y[0].trim() ? y[0] : A == null ? void 0 : A.toString().trim();
      const _ = ((le = s.value) == null ? void 0 : le.split(":")) || [], { findTitle: D, findKey: F } = S(_[0]);
      if (r.value && T) {
        if (T) {
          const me = {
            title: D,
            value: T.trim(),
            key: F,
            type: o.value ? "tag" : null
          };
          a.push(me), n("update:model-value", a), n("update:target-item", me), setTimeout(() => {
            h.closeOnClick = !1, h.closeOnContentClick = !1;
          }, 500), u();
          return;
        }
      } else {
        if (h.closeOnClick = !0, h.closeOnContentClick = !0, l.value = (K = t.headers.find((me) => me.title === A)) == null ? void 0 : K.key, r.value = !0, Q === "tag" && (o.value = !0), v) {
          C(v);
          return;
        }
        setTimeout(() => {
          h.closeOnClick = !1, h.closeOnContentClick = !1;
        }, 500);
      }
      c.value && (c.value.search = "");
    }, P = () => {
      a.push({ title: "미지정 태그", value: "-", key: "undefinedTag", type: "tag" }), n("update:model-value", a), c.value && (c.value.search = "");
    }, w = (b) => {
      a.splice(b, 1), n("update:model-value", a);
    };
    return (b, A) => {
      const Q = q("v-list-subheader"), v = q("v-list-item"), y = q("v-autocomplete"), T = q("v-chip"), _ = q("v-chip-group");
      return Z(), X("div", $3, [
        L(y, {
          ref_key: "autoComp",
          ref: c,
          class: "s-smart-search",
          style: ht({ width: i.width + "px" }),
          "closable-chips": "",
          multiple: i.multiple,
          density: i.density,
          variant: i.variant,
          items: g.value,
          search: s.value,
          "custom-filter": k,
          placeholder: i.placeholder,
          "menu-props": h,
          "hide-details": "",
          "prepend-inner-icon": i.prependInnerIcon,
          onInput: $,
          "onUpdate:search": f,
          onKeyup: Jn(Ye(M, ["stop"]), ["enter"])
        }, Ei({
          item: R(({ item: D }) => {
            var F;
            return [
              D.raw.subheader ? (Z(), X(he, { key: 0 }, [
                L(Q, { class: "s-list-subheader" }, {
                  default: R(() => [
                    ee(B(D.raw.subheader), 1)
                  ]),
                  _: 2
                }, 1024),
                A[0] || (A[0] = V("hr", null, null, -1))
              ], 64)) : (Z(), J(v, {
                key: 1,
                title: (F = D == null ? void 0 : D.props) == null ? void 0 : F.title,
                onClick: (te) => M(te, D == null ? void 0 : D.raw.title, D == null ? void 0 : D.raw.type)
              }, null, 8, ["title", "onClick"]))
            ];
          }),
          _: 2
        }, [
          i.searchTag ? {
            name: "append-item",
            fn: R(() => [
              ie(b.$slots, "null-tag", {}, () => [
                L(Q, null, {
                  default: R(() => A[1] || (A[1] = [
                    ee("미지정 태그 검색")
                  ])),
                  _: 1
                }),
                A[3] || (A[3] = V("hr", null, null, -1)),
                L(v, { onClick: P }, {
                  default: R(() => A[2] || (A[2] = [
                    ee("미지정 태그")
                  ])),
                  _: 1
                })
              ], !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["style", "multiple", "density", "variant", "items", "search", "placeholder", "menu-props", "prepend-inner-icon", "onKeyup"]),
        Aa(L(_, null, {
          default: R(() => [
            (Z(!0), X(he, null, Ze(a, (D, F) => (Z(), J(T, {
              key: "smart-search__value--" + D.title + "__" + D.value,
              closable: "",
              "onClick:close": (te) => w(F)
            }, {
              default: R(() => [
                V("strong", null, B(D.title), 1),
                ee(" : " + B(D.value), 1)
              ]),
              _: 2
            }, 1032, ["onClick:close"]))), 128))
          ]),
          _: 1
        }, 512), [
          [Za, a.length]
        ])
      ]);
    };
  }
}, BA = /* @__PURE__ */ $e(C3, [["__scopeId", "data-v-b7c8a9ed"]]), T3 = { class: "progress-stages" }, A3 = { class: "d-flex align-center" }, Z3 = { class: "stage-title" }, _3 = { class: "sub-stages" }, M3 = { class: "d-flex align-center justify-space-between" }, R3 = {
  key: 0,
  class: "sub-stage-children"
}, V3 = {
  __name: "SProgressStages",
  props: {
    stages: {
      type: Array,
      required: !0
    }
  },
  setup(i) {
    const e = G([]), t = (a) => {
      const c = e.value.indexOf(a);
      c === -1 ? e.value.push(a) : e.value.splice(c, 1);
    }, n = (a) => ({
      "stage-header--completed": a.status === "completed",
      "stage-header--in-progress": a.status === "in-progress",
      "stage-header--pending": a.status === "pending",
      "stage-header--delayed": a.status === "delayed"
    }), s = (a) => ({
      "sub-stage-item--completed": a.status === "completed",
      "sub-stage-item--in-progress": a.status === "in-progress",
      "sub-stage-item--pending": a.status === "pending",
      "sub-stage-item--delayed": a.status === "delayed"
    }), r = (a) => {
      switch (a) {
        case "completed":
          return "mdi-check-circle";
        case "in-progress":
          return "mdi-progress-clock";
        default:
          return "mdi-circle-outline";
      }
    }, o = (a) => {
      switch (a) {
        case "completed":
          return "success";
        case "in-progress":
          return "primary";
        default:
          return "grey";
      }
    }, l = (a) => {
      switch (a) {
        case "completed":
          return "#00BA88";
        case "in-progress":
          return "#1297F2";
        default:
          return "#6C6C6C";
      }
    };
    return (a, c) => {
      const h = q("v-icon"), u = q("v-expand-transition");
      return Z(), X("div", T3, [
        (Z(!0), X(he, null, Ze(i.stages, (f, d) => (Z(), X("div", {
          key: d,
          class: "stage-item"
        }, [
          V("div", {
            class: ke(["stage-header", n(f)])
          }, [
            V("div", A3, [
              L(h, {
                icon: r(f.status),
                color: o(f.status),
                size: "small",
                class: "mr-2"
              }, null, 8, ["icon", "color"]),
              V("span", Z3, B(f.title), 1)
            ])
          ], 2),
          V("div", _3, [
            (Z(!0), X(he, null, Ze(f.subStages, (p, O) => {
              var m;
              return Z(), X("div", {
                key: `${d}-${O}`,
                class: ke(["sub-stage-item", s(p)])
              }, [
                V("div", M3, [
                  V("span", {
                    style: ht({ color: l(p.status) })
                  }, B(p.title), 5),
                  (m = p.children) != null && m.length ? (Z(), J(h, {
                    key: 0,
                    icon: e.value.includes(`${d}-${O}`) ? "mdi-chevron-up" : "mdi-chevron-down",
                    size: "small",
                    onClick: Ye((g) => t(`${d}-${O}`), ["stop"])
                  }, null, 8, ["icon", "onClick"])) : re("", !0)
                ]),
                L(u, null, {
                  default: R(() => {
                    var g;
                    return [
                      e.value.includes(`${d}-${O}`) && ((g = p.children) != null && g.length) ? (Z(), X("div", R3, [
                        (Z(!0), X(he, null, Ze(p.children, (k, S) => (Z(), X("div", {
                          key: S,
                          class: ke(["sub-stage-child", s(k)])
                        }, B(k.title), 3))), 128))
                      ])) : re("", !0)
                    ];
                  }),
                  _: 2
                }, 1024)
              ], 2);
            }), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}, YA = /* @__PURE__ */ $e(V3, [["__scopeId", "data-v-23d6b697"]]), E3 = { class: "s-notification__header-box" }, L3 = ["onMouseenter", "onClick", "onKeyup"], X3 = { class: "s-notification__prefix" }, D3 = { class: "s-notification__title-wrapper" }, q3 = { class: "title--left" }, j3 = { class: "s-notification__title" }, z3 = { class: "created" }, B3 = { class: "s-notification__message-box" }, Y3 = { class: "s-notification__message" }, I3 = { class: "s-notification__delete-box" }, N3 = ["onClick"], W3 = { class: "s-notification__additional-box" }, U3 = {
  key: 1,
  class: "s-notification-no-item"
}, IA = {
  __name: "SNotification",
  props: {
    notificationName: {
      type: String,
      default: "Notifications"
    },
    items: {
      type: Array,
      default: () => []
    },
    noItemText: {
      type: String,
      default: "알림 내역이 없습니다."
    },
    languageCode: {
      type: String,
      default: "ko"
    }
  },
  emits: ["click:delete", "click:content"],
  setup(i, { emit: e }) {
    const t = e, n = i, s = G(!1), r = G(""), o = N(() => (d) => d), l = (d) => {
      switch (d.notificationType) {
        case "SUCCESS":
          return "mdi-check-circle";
        case "ERROR":
          return "mdi-close-octagon";
        default:
          return "mdi-alert-circle";
      }
    }, a = () => {
      s.value = !0;
    }, c = (d) => {
      r.value = d;
    }, h = (d) => {
      t("click:content", d);
    }, u = (d) => {
      t("click:delete", d);
    }, f = (d, p) => {
      if (n.languageCode === "en") {
        const O = `${p}En`;
        return d[O] || d[p];
      }
      return d[p];
    };
    return (d, p) => {
      const O = q("v-icon");
      return Z(), X("div", {
        class: ke(["s-notification", s.value ? "more" : ""])
      }, [
        V("div", E3, B(i.notificationName), 1),
        i.items.length ? (Z(), X(he, { key: 0 }, [
          V("div", {
            class: ke(["s-notification__contents-box", s.value ? "more" : ""])
          }, [
            (Z(!0), X(he, null, Ze(i.items, (m) => (Z(), X("div", {
              class: "s-notification__content",
              key: m.idx,
              onMouseenter: (g) => c(m.notificationIdx),
              onMouseleave: p[0] || (p[0] = (g) => r.value = ""),
              onClick: (g) => h(m),
              onKeyup: Jn((g) => h(m), ["enter"])
            }, [
              V("div", X3, [
                L(O, null, {
                  default: R(() => [
                    ee(B(l(m)), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              V("div", D3, [
                V("div", q3, [
                  V("div", j3, [
                    V("span", null, B(f(m, "msgTitle")), 1),
                    V("span", z3, B(o.value(m.createdAt) || "-"), 1)
                  ]),
                  V("div", B3, [
                    V("div", Y3, [
                      V("div", null, [
                        V("span", null, B(f(m, "msgContent")), 1)
                      ])
                    ]),
                    V("div", I3, [
                      r.value === m.notificationIdx ? (Z(), X("div", {
                        key: 0,
                        class: "s-notification__delete-wrapper",
                        onClick: Ye((g) => u(m), ["stop"])
                      }, [
                        L(O, {
                          class: "s-notification__delete-icon",
                          contain: ""
                        }, {
                          default: R(() => p[1] || (p[1] = [
                            ee("mdi-close")
                          ])),
                          _: 1
                        })
                      ], 8, N3)) : re("", !0)
                    ])
                  ]),
                  V("div", W3, [
                    V("p", null, B(f(m, "msgAdditional")), 1)
                  ])
                ])
              ])
            ], 40, L3))), 128))
          ], 2),
          s.value ? re("", !0) : (Z(), X("div", {
            key: 0,
            class: "s-notification__footer-box",
            onClick: a,
            onKeypress: a
          }, " ... ", 32))
        ], 64)) : (Z(), X("div", U3, B(i.noItemText), 1))
      ], 2);
    };
  }
}, G3 = { class: "s-filter-select__filter" }, F3 = { class: "v-virtual-scroll__item" }, H3 = {
  __name: "SFilterSelect",
  props: {
    itemTitle: {
      type: String,
      default: ""
    },
    itemValue: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    displayText: {
      type: String,
      default: ""
    },
    hasNullValue: {
      type: Boolean,
      default: !1
    },
    nullTitle: {
      type: String,
      default: "Value is NULL"
    },
    nullValue: {
      type: String,
      default: "NULL"
    },
    density: {
      type: String,
      default: "default"
    },
    variant: {
      type: String,
      default: "filled"
    },
    hideDetails: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "검색"
    },
    width: {
      type: [String, Number],
      default: 316
    }
  },
  emits: ["update:model-value"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G(null), r = G(t.items), o = G([]), l = G(!1), a = () => {
      let p = !1;
      o.value.length && (p = o.value.length === r.value.length), l.value = p;
    };
    ue(
      () => t.items,
      () => {
        r.value = t.items.map((p) => p[t.itemValue] === null ? {
          ...p,
          [t.itemTitle]: t.nullTitle,
          [t.itemValue]: t.nullValue
        } : p), a();
      },
      {
        immediate: !0
      }
    ), ue(
      () => s.value,
      () => {
        s.value ? (r.value = t.items.filter((p) => p[t.itemTitle] === t.nullTitle || p[t.itemTitle] === t.nullValue && p[t.itemValue] === t.nullValue ? t.hasNullValue ? t.nullTitle.includes(s.value.trim().toLowerCase()) : !1 : p[t.itemTitle] !== t.nullValue && p[t.itemTitle].toLowerCase().includes(s.value.trim().toLowerCase()) ? !0 : p[t.itemValue] !== t.nullValue ? p[t.itemValue].toLowerCase().includes(s.value.trim().toLowerCase()) : !1), o.value = t.modelValue.filter((p) => p === t.nullValue || p === t.nullValue ? t.hasNullValue ? t.nullValue.includes(s.value.trim().toLowerCase()) : !1 : p !== t.nullValue || p !== t.nullValue ? r.value.map(
          (m) => m[t.itemValue]
        ).includes(p) : !1)) : (r.value = t.items, o.value = t.modelValue), a();
      }
    ), ue(
      () => t.modelValue,
      () => {
        a();
      }
    );
    const c = (p) => {
      const O = new Map(
        r.value.map((m) => [m[t.itemValue], m])
      );
      o.value = p.filter((m) => O.has(m) || m === t.nullValue);
    }, h = N(() => o.value.length > 0), u = (p) => p.map((O) => O === t.nullValue ? null : O), f = () => {
      const p = new Set(t.modelValue);
      if (l.value)
        o.value.forEach((m) => {
          m !== null ? p.delete(m) : p.delete(t.nullValue);
        });
      else
        try {
          r.value.forEach((m) => {
            m[t.itemValue] ? p.add(m[t.itemValue]) : p.add(t.nullValue);
          });
        } catch (m) {
          console.warn(m);
        }
      const O = Array.from(p);
      c(O), n("update:model-value", u(O));
    }, d = (p) => {
      c(p), n("update:model-value", u(p));
    };
    return (p, O) => {
      const m = q("v-btn"), g = q("v-tooltip"), k = q("v-text-field"), S = q("v-divider"), $ = q("v-checkbox-btn"), C = q("v-list-item-action"), M = q("v-list-item"), P = q("v-list-item-title"), w = q("v-virtual-scroll"), b = q("v-list"), A = q("v-menu");
      return Z(), J(A, {
        class: "s-filter-select",
        "close-on-content-click": !1
      }, {
        activator: R(({ props: Q, isActive: v }) => [
          L(g, {
            text: i.displayText,
            location: "end"
          }, {
            activator: R(({ props: y }) => [
              L(m, Ve({ ...Q, ...y }, {
                width: i.width,
                class: "s-filter-select__button",
                variant: "outlined",
                density: i.density,
                "append-icon": v ? "mdi-menu-up" : "mdi-menu-down"
              }), {
                default: R(() => [
                  ee(B(i.displayText), 1)
                ]),
                _: 2
              }, 1040, ["width", "density", "append-icon"])
            ]),
            _: 2
          }, 1032, ["text"])
        ]),
        default: R(() => [
          L(b, {
            "select-strategy": "classic",
            "item-title": t.itemTitle,
            "item-value": t.itemValue,
            items: r.value,
            selected: i.modelValue,
            density: i.density,
            "min-width": "360px",
            "onUpdate:selected": d
          }, {
            default: R(() => [
              V("div", G3, [
                L(k, {
                  class: "s-input__inner my-1 pl-3",
                  density: i.density,
                  variant: "plain",
                  "hide-details": "",
                  placeholder: i.placeholder,
                  modelValue: s.value,
                  "onUpdate:modelValue": O[0] || (O[0] = (Q) => s.value = Q),
                  "prepend-icon": "mdi-filter"
                }, null, 8, ["density", "placeholder", "modelValue"]),
                L(S, { class: "mb-1" }),
                L(M, {
                  title: s.value ? `필터링 된 검색 ${r.value.length} 건` : "전체 검색",
                  density: i.density,
                  onClick: f
                }, {
                  prepend: R(() => [
                    L(C, { start: "" }, {
                      default: R(() => [
                        L($, {
                          class: "s-filter-select__checkbox-btn",
                          indeterminate: h.value && !l.value,
                          "model-value": l.value,
                          density: i.density
                        }, null, 8, ["indeterminate", "model-value", "density"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["title", "density"]),
                L(S, { class: "my-1" })
              ]),
              L(w, {
                items: r.value,
                "max-height": "350"
              }, {
                default: R(({ item: Q }) => [
                  V("div", F3, [
                    i.hasNullValue ? ie(p.$slots, "null-data", { key: 0 }, () => [
                      [null, t.nullValue].includes(Q[t.itemValue]) ? (Z(), J(M, {
                        key: 0,
                        value: i.nullValue,
                        density: i.density
                      }, {
                        prepend: R(({ isActive: v }) => [
                          L(C, { start: "" }, {
                            default: R(() => [
                              L($, {
                                class: "s-filter-select__checkbox-btn",
                                "model-value": v,
                                density: i.density
                              }, null, 8, ["model-value", "density"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        default: R(() => [
                          L(P, {
                            title: i.nullTitle,
                            density: i.density
                          }, {
                            default: R(() => [
                              ee(B(i.nullTitle), 1)
                            ]),
                            _: 1
                          }, 8, ["title", "density"])
                        ]),
                        _: 1
                      }, 8, ["value", "density"])) : re("", !0)
                    ], !0) : re("", !0),
                    [null, t.nullValue].includes(Q[t.itemValue]) ? re("", !0) : (Z(), J(M, {
                      key: 1,
                      value: Q[t.itemValue],
                      density: i.density
                    }, {
                      prepend: R(({ isActive: v }) => [
                        L(C, { start: "" }, {
                          default: R(() => [
                            L($, {
                              "model-value": v,
                              density: i.density
                            }, null, 8, ["model-value", "density"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      default: R(() => [
                        L(P, {
                          title: Q[t.itemTitle],
                          density: i.density
                        }, {
                          default: R(() => [
                            ee(B(Q[t.itemTitle]), 1)
                          ]),
                          _: 2
                        }, 1032, ["title", "density"])
                      ]),
                      _: 2
                    }, 1032, ["value", "density"]))
                  ])
                ]),
                _: 3
              }, 8, ["items"])
            ]),
            _: 3
          }, 8, ["item-title", "item-value", "items", "selected", "density"])
        ]),
        _: 3
      });
    };
  }
}, NA = /* @__PURE__ */ $e(H3, [["__scopeId", "data-v-e541f99d"]]), K3 = { class: "s-user-setting" }, J3 = { class: "s-user-setting__header-box" }, eA = { class: "s-user-setting__contents-box" }, tA = { class: "s-user-setting__content" }, iA = { class: "s-user-setting__title-wrapper" }, nA = { class: "s-user-setting__select-wrapper" }, sA = { class: "s-user-setting__content" }, rA = { class: "s-user-setting__title-wrapper" }, oA = { class: "s-user-setting__title" }, lA = { class: "s-user-setting__select-wrapper" }, aA = { class: "s-user-setting__content" }, cA = { class: "s-user-setting__title-wrapper" }, hA = { class: "s-user-setting__title" }, uA = { class: "s-user-setting__checkbox-wrapper" }, WA = {
  __name: "SUserSettings",
  props: {
    languageCode: {
      type: String,
      default: "ko"
    },
    languageList: {
      type: Array,
      default: () => [
        { value: "ko", name: "한국어" },
        { value: "en", name: "English" }
      ]
    },
    costCurrencyCode: {
      type: String,
      default: "krw"
    },
    costCurrencyList: {
      type: Array,
      default: () => [
        { value: "krw", name: "KRW" },
        { value: "usd", name: "USD" }
      ]
    },
    isEmailAlertEnabled: {
      type: Boolean,
      default: !1
    },
    isSlackAlertEnabled: {
      type: Boolean,
      default: !1
    },
    companySlackEnabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:language", "update:currency", "update:email", "update:slack", "get-company-slack-enabled"],
  setup(i, { emit: e }) {
    const t = e, n = i, s = G({
      languageCode: "ko",
      costCurrencyCode: "krw",
      isEmailAlertEnabled: !1,
      isSlackAlertEnabled: !1
    }), r = G({
      title: "사용자 설정",
      costCurrency: "비용 통화 설정",
      alert: "알림 수신"
    }), o = () => {
      t("update:language", s.value.languageCode);
    }, l = () => {
      t("update:currency", s.value.costCurrencyCode);
    }, a = () => {
      t("update:email", s.value.isEmailAlertEnabled);
    }, c = () => {
      t("update:slack", s.value.isSlackAlertEnabled);
    }, h = (f) => {
      f === "en" ? (r.value.title = "User Settings", r.value.costCurrency = "Cost Currency Settings", r.value.alert = "Alert Settings") : (r.value.title = "사용자 설정", r.value.costCurrency = "비용 통화 설정", r.value.alert = "알림 수신");
    }, u = () => {
      t("get-company-slack-enabled"), console.log("checkCompanySlackEnabled");
    };
    return Si(() => {
      s.value = {
        languageCode: n.languageCode || "ko",
        costCurrencyCode: n.costCurrencyCode || "krw",
        isEmailAlertEnabled: n.isEmailAlertEnabled || !1,
        isSlackAlertEnabled: n.isSlackAlertEnabled || !1
      }, h(n.languageCode), u();
    }), (f, d) => {
      const p = q("v-select"), O = q("v-checkbox");
      return Z(), X("div", K3, [
        V("div", J3, [
          V("span", null, B(r.value.title), 1)
        ]),
        V("div", eA, [
          V("div", tA, [
            V("div", iA, [
              d[4] || (d[4] = V("div", { class: "s-user-setting__title" }, [
                V("span", null, " 언어/Language ")
              ], -1)),
              V("div", nA, [
                L(p, {
                  variant: "outlined",
                  itemTitle: "name",
                  itemValue: "value",
                  items: i.languageList,
                  modelValue: s.value.languageCode,
                  "onUpdate:modelValue": [
                    d[0] || (d[0] = (m) => s.value.languageCode = m),
                    o
                  ]
                }, null, 8, ["items", "modelValue"])
              ])
            ])
          ]),
          V("div", sA, [
            V("div", rA, [
              V("div", oA, [
                V("span", null, B(r.value.costCurrency), 1)
              ]),
              V("div", lA, [
                L(p, {
                  variant: "outlined",
                  itemTitle: "name",
                  itemValue: "value",
                  items: i.costCurrencyList,
                  modelValue: s.value.costCurrencyCode,
                  "onUpdate:modelValue": [
                    d[1] || (d[1] = (m) => s.value.costCurrencyCode = m),
                    l
                  ]
                }, null, 8, ["items", "modelValue"])
              ])
            ])
          ]),
          V("div", aA, [
            V("div", cA, [
              V("div", hA, [
                V("span", null, B(r.value.alert), 1)
              ]),
              V("div", uA, [
                L(O, {
                  class: "table-checkbox",
                  "hide-details": "",
                  modelValue: s.value.isEmailAlertEnabled,
                  "onUpdate:modelValue": d[2] || (d[2] = (m) => s.value.isEmailAlertEnabled = m),
                  label: "Email",
                  onChange: a
                }, null, 8, ["modelValue"]),
                L(O, {
                  class: "table-checkbox",
                  "hide-details": "",
                  disabled: !i.companySlackEnabled,
                  modelValue: s.value.isSlackAlertEnabled,
                  "onUpdate:modelValue": d[3] || (d[3] = (m) => s.value.isSlackAlertEnabled = m),
                  label: "Slack",
                  onChange: c
                }, null, 8, ["disabled", "modelValue"])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}, fA = { class: "text-break" }, dA = {
  __name: "SSimpleTooltip",
  props: {
    title: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    titleWidth: {
      type: [Number, String],
      default: null
    },
    maxWidth: {
      type: [Number, String],
      default: 500
    }
  },
  setup(i) {
    const e = i, t = N(() => e.text || e.title), n = N(
      () => e.titleWidth ? `${e.titleWidth}px` : ""
    );
    return (s, r) => {
      const o = q("v-tooltip");
      return Z(), J(o, {
        location: "bottom",
        "max-width": e.maxWidth
      }, {
        activator: R(({ props: l }) => [
          V("span", Ve(l, {
            class: "d-inline-block text-truncate",
            style: { width: n.value }
          }), B(e.title), 17)
        ]),
        default: R(() => [
          V("span", fA, B(t.value), 1)
        ]),
        _: 1
      }, 8, ["max-width"]);
    };
  }
}, pA = { class: "s-detail-tooltip" }, OA = { class: "label" }, mA = {
  class: "label--text",
  variant: "plain"
}, gA = { key: 1 }, yA = { class: "detail-item mr-2" }, UA = {
  __name: "SDetailTooltip",
  props: {
    label: { type: String, default: "Label" },
    // 기존에 보이는 텍스트
    itemId: { type: String, default: "" },
    // v-for key 및 Item 텍스트에 표시
    itemName: { type: String, default: "" },
    // Item 텍스트에 표시
    list: { type: Array, default: () => [] },
    // 상세에 보일 리스트
    icon: { type: String, default: "" },
    // 상세 아이템 옆에 보일 아이콘
    itemClick: { type: Function, default: () => {
    } },
    // 상세 아이템 클릭 이벤트
    copyText: { type: Function, default: (i) => {
      new Function(i);
    } }
    // 상세 아이템 복사 버튼 클릭 이벤트
  },
  setup(i) {
    const e = (/* @__PURE__ */ new Date()).getTime().toString(), t = i, n = G(!1), s = () => {
      n.value = !n.value;
    };
    ue(n, (o, l) => {
      var a;
      o && !((a = t.list) != null && a.length) && (n.value = l);
    });
    const r = N(() => (o) => typeof o == typeof {} ? `${o[t.itemName] || "-"} / ${o[t.itemId]}` : o);
    return (o, l) => {
      const a = q("v-icon"), c = q("v-chip"), h = q("v-card"), u = q("v-overlay");
      return Z(), X("section", pA, [
        V("div", OA, [
          V("a", mA, [
            t.label === "Label" ? (Z(), J(a, {
              key: 0,
              icon: "mdi-dots-vertical"
            })) : (Z(), X("span", gA, B(t.label), 1)),
            L(u, {
              absolute: "",
              modelValue: n.value,
              "onUpdate:modelValue": l[0] || (l[0] = (f) => n.value = f),
              activator: "parent",
              scrim: "",
              "location-strategy": "connected",
              "scroll-strategy": "reposition"
            }, {
              default: R(() => [
                n.value ? (Z(), J(h, {
                  key: 0,
                  class: "s-detail-tooltip__content"
                }, {
                  default: R(() => [
                    L(a, {
                      class: "close-Btn",
                      icon: "mdi-close",
                      onClick: s
                    }),
                    (Z(!0), X(he, null, Ze(t.list, (f, d) => (Z(), J(c, {
                      key: t.keyId || d,
                      variant: "text",
                      size: "small"
                    }, {
                      default: R(() => [
                        V("span", yA, [
                          L(dA, {
                            uuid: de(e),
                            title: r.value(f),
                            text: r.value(f),
                            titleWidth: "360"
                          }, null, 8, ["uuid", "title", "text"])
                        ]),
                        t.icon !== "" ? (Z(), J(a, {
                          key: 0,
                          icon: t.icon,
                          onClick: (p) => t.icon === "mdi-content-copy" ? i.copyText(f) : t.itemClick(f)
                        }, null, 8, ["icon", "onClick"])) : re("", !0)
                      ]),
                      _: 2
                    }, 1024))), 128))
                  ]),
                  _: 1
                })) : re("", !0)
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ]);
    };
  }
};
export {
  qA as SAccordionMenu,
  PA as SAlert,
  y2 as SAvatar,
  Je as SBtn,
  VA as SCardTable,
  _A as SConfirm,
  EA as SDataTable,
  UA as SDetailTooltip,
  P1 as SEmpty,
  wA as SFileInputBtn,
  NA as SFilterSelect,
  XA as SFooter,
  ZA as SFormItem,
  AA as SFormTable,
  RA as SGlobalProgress,
  LA as SHeader,
  df as SImg,
  QA as SKeyValueSelect,
  MA as SModal,
  jA as SNavi,
  IA as SNotification,
  C2 as SProgressCircular,
  YA as SProgressStages,
  SA as SRefreshBtn,
  TA as SScriptEditor,
  kA as SShellScriptInput,
  dA as SSimpleTooltip,
  zA as SSmartSearch,
  BA as SSmartSearchServer,
  DA as SSubHeader,
  xA as STextCheckBoxInput,
  WA as SUserSettings,
  bA as customTheme,
  L2 as regexUtil,
  Nm as stringUtil
};
