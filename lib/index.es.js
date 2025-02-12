import { reactive as Ai, computed as I, watchEffect as gn, toRefs as gm, shallowRef as Ut, Fragment as he, warn as Ca, getCurrentInstance as mm, inject as ji, provide as Za, defineComponent as If, watch as ve, onScopeDispose as bt, effectScope as Ta, ref as G, toRaw as zf, isRef as Nf, TransitionGroup as ym, Transition as Uf, h as Yf, mergeProps as Je, unref as Ve, createVNode as V, toRef as Gf, Text as bm, nextTick as bs, onMounted as mn, readonly as vm, onBeforeUnmount as Sm, Teleport as eo, withDirectives as Aa, vShow as Ma, resolveDirective as xm, useSlots as wm, resolveComponent as z, createBlock as se, openBlock as R, createSlots as Mi, withCtx as E, createTextVNode as oe, toDisplayString as U, renderSlot as J, createElementBlock as L, createElementVNode as X, mergeModels as Ff, useModel as Hf, createCommentVNode as ae, renderList as qe, normalizeStyle as ct, onUnmounted as Qm, normalizeClass as Qe, withModifiers as Tt, toHandlers as km, normalizeProps as qi, guardReactiveProps as Wi, createStaticVNode as Pm, withKeys as Gn } from "vue";
const $m = {
  dark: !1,
  colors: {},
  variables: { "font-family": "Paperlogy, Noto Sans KR, sans-serif" }
}, zT = {
  defaultTheme: "defaultTheme",
  themes: { defaultTheme: $m }
};
function Ye(i, e) {
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
const Kf = Ye({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Lt = typeof window < "u";
function we(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(i == null || i === ""))
    return isNaN(+i) ? String(i) : isFinite(+i) ? `${Number(i)}${e}` : void 0;
}
function Lc(i) {
  let e;
  return i !== null && typeof i == "object" && ((e = Object.getPrototypeOf(i)) === Object.prototype || e === null);
}
function Cm(i) {
  if (i && "$el" in i) {
    const e = i.$el;
    return (e == null ? void 0 : e.nodeType) === Node.TEXT_NODE ? e.nextElementSibling : e;
  }
  return i;
}
function ko(i, e) {
  return e.every((t) => i.hasOwnProperty(t));
}
function Zm(i, e) {
  const t = {}, n = new Set(Object.keys(i));
  for (const s of e)
    n.has(s) && (t[s] = i[s]);
  return t;
}
const Tm = /^on[^a-z]/, Jf = (i) => Tm.test(i);
function Dc(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(e, Math.min(t, i));
}
function jc(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return i + t.repeat(Math.max(0, e - i.length));
}
function Am(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let n = 0;
  for (; n < i.length; )
    t.push(i.substr(n, e)), n += e;
  return t;
}
function ed() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const s in i)
    n[s] = i[s];
  for (const s in e) {
    const r = i[s], o = e[s];
    if (Lc(r) && Lc(o)) {
      n[s] = ed(r, o, t);
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
function td(i) {
  return i.map((e) => e.type === he ? td(e.children) : e).flat();
}
function Pi() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Pi.cache.has(i)) return Pi.cache.get(i);
  const e = i.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Pi.cache.set(i, e), e;
}
Pi.cache = /* @__PURE__ */ new Map();
function Ra(i) {
  const e = Ai({}), t = I(i);
  return gn(() => {
    for (const n in t.value)
      e[n] = t.value[n];
  }, {
    flush: "sync"
  }), gm(e);
}
function vr(i, e) {
  return i.includes(e);
}
function id(i) {
  return i[2].toLowerCase() + i.slice(3);
}
function Mm(i, e) {
  if (!(Lt && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${e})`))) return null;
  try {
    return !!i && i.matches(e);
  } catch {
    return null;
  }
}
function Rm(i, e) {
  if (!Lt || i === 0)
    return e(), () => {
    };
  const t = window.setTimeout(e, i);
  return () => window.clearTimeout(t);
}
function Bc() {
  const i = Ut(), e = (t) => {
    i.value = t;
  };
  return Object.defineProperty(e, "value", {
    enumerable: !0,
    get: () => i.value,
    set: (t) => i.value = t
  }), Object.defineProperty(e, "el", {
    enumerable: !0,
    get: () => Cm(i.value)
  }), e;
}
const nd = ["top", "bottom"], _m = ["start", "end", "left", "right"];
function Vc(i, e) {
  let [t, n] = i.split(" ");
  return n || (n = vr(nd, t) ? "start" : vr(_m, t) ? "top" : "center"), {
    side: qc(t, e),
    align: qc(n, e)
  };
}
function qc(i, e) {
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
function Wc(i) {
  return {
    side: i.align,
    align: i.side
  };
}
function Ic(i) {
  return vr(nd, i.side) ? "y" : "x";
}
class $i {
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
function Xm(i) {
  return Array.isArray(i) ? new $i({
    x: i[0],
    y: i[1],
    width: 0,
    height: 0
  }) : i.getBoundingClientRect();
}
function Em(i) {
  const e = i.getBoundingClientRect(), t = getComputedStyle(i), n = t.transform;
  if (n) {
    let s, r, o, l, a;
    if (n.startsWith("matrix3d("))
      s = n.slice(9, -1).split(/, /), r = +s[0], o = +s[5], l = +s[12], a = +s[13];
    else if (n.startsWith("matrix("))
      s = n.slice(7, -1).split(/, /), r = +s[0], o = +s[3], l = +s[4], a = +s[5];
    else
      return new $i(e);
    const c = t.transformOrigin, h = e.x - l - (1 - r) * parseFloat(c), u = e.y - a - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), f = r ? e.width / r : i.offsetWidth + 1, d = o ? e.height / o : i.offsetHeight + 1;
    return new $i({
      x: h,
      y: u,
      width: f,
      height: d
    });
  } else
    return new $i(e);
}
function Lm(i, e, t) {
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
function Dm(i, e) {
  Object.keys(e).forEach((t) => {
    if (Jf(t)) {
      const n = id(t), s = nr.get(i);
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
function jm(i, e) {
  Object.keys(e).forEach((t) => {
    if (Jf(t)) {
      const n = id(t), s = nr.get(i);
      s == null || s.forEach((r) => {
        const [o, l] = r;
        o === n && (i.removeEventListener(n, l), s.delete(r));
      });
    } else
      i.removeAttribute(t);
  });
}
const Ii = 2.4, Nc = 0.2126729, Uc = 0.7151522, Yc = 0.072175, Bm = 0.55, Vm = 0.58, qm = 0.57, Wm = 0.62, Ts = 0.03, Gc = 1.45, Im = 5e-4, zm = 1.25, Nm = 1.25, Um = 0.078, Fc = 12.82051282051282, As = 0.06, Ym = 1e-3;
function Hc(i, e) {
  const t = (i.r / 255) ** Ii, n = (i.g / 255) ** Ii, s = (i.b / 255) ** Ii, r = (e.r / 255) ** Ii, o = (e.g / 255) ** Ii, l = (e.b / 255) ** Ii;
  let a = t * Nc + n * Uc + s * Yc, c = r * Nc + o * Uc + l * Yc;
  if (a <= Ts && (a += (Ts - a) ** Gc), c <= Ts && (c += (Ts - c) ** Gc), Math.abs(c - a) < Im) return 0;
  let h;
  if (c > a) {
    const u = (c ** Bm - a ** Vm) * zm;
    h = u < Ym ? 0 : u < Um ? u - u * Fc * As : u - As;
  } else {
    const u = (c ** Wm - a ** qm) * Nm;
    h = u > -1e-3 ? 0 : u > -0.078 ? u - u * Fc * As : u + As;
  }
  return h * 100;
}
function Vn(i) {
  Ca(`Vuetify: ${i}`);
}
function Gm(i) {
  Ca(`Vuetify error: ${i}`);
}
function ul(i) {
  return !!i && /^(#|var\(--|(rgb|hsl)a?\()/.test(i);
}
function Fm(i) {
  return ul(i) && !/^((rgb|hsl)a?\()?var\(--/.test(i);
}
const Kc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Hm = {
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
  hsl: (i, e, t, n) => Jc({
    h: i,
    s: e,
    l: t,
    a: n
  }),
  hsla: (i, e, t, n) => Jc({
    h: i,
    s: e,
    l: t,
    a: n
  }),
  hsv: (i, e, t, n) => Fn({
    h: i,
    s: e,
    v: t,
    a: n
  }),
  hsva: (i, e, t, n) => Fn({
    h: i,
    s: e,
    v: t,
    a: n
  })
};
function _n(i) {
  if (typeof i == "number")
    return (isNaN(i) || i < 0 || i > 16777215) && Vn(`'${i}' is not a valid hex color`), {
      r: (i & 16711680) >> 16,
      g: (i & 65280) >> 8,
      b: i & 255
    };
  if (typeof i == "string" && Kc.test(i)) {
    const {
      groups: e
    } = i.match(Kc), {
      fn: t,
      values: n
    } = e, s = n.split(/,\s*/).map((r) => r.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(r) / 100 : parseFloat(r));
    return Hm[t](...s);
  } else if (typeof i == "string") {
    let e = i.startsWith("#") ? i.slice(1) : i;
    [3, 4].includes(e.length) ? e = e.split("").map((n) => n + n).join("") : [6, 8].includes(e.length) || Vn(`'${i}' is not a valid hex(a) color`);
    const t = parseInt(e, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Vn(`'${i}' is not a valid hex(a) color`), Km(e);
  } else if (typeof i == "object") {
    if (ko(i, ["r", "g", "b"]))
      return i;
    if (ko(i, ["h", "s", "l"]))
      return Fn(sd(i));
    if (ko(i, ["h", "s", "v"]))
      return Fn(i);
  }
  throw new TypeError(`Invalid color: ${i == null ? i : String(i) || i.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Fn(i) {
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
function Jc(i) {
  return Fn(sd(i));
}
function sd(i) {
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
function Km(i) {
  i = Jm(i);
  let [e, t, n, s] = Am(i, 2).map((r) => parseInt(r, 16));
  return s = s === void 0 ? s : s / 255, {
    r: e,
    g: t,
    b: n,
    a: s
  };
}
function Jm(i) {
  return i.startsWith("#") && (i = i.slice(1)), i = i.replace(/([^0-9a-f])/gi, "F"), (i.length === 3 || i.length === 4) && (i = i.split("").map((e) => e + e).join("")), i.length !== 6 && (i = jc(jc(i, 6), 8, "F")), i;
}
function e0(i) {
  const e = Math.abs(Hc(_n(0), _n(i)));
  return Math.abs(Hc(_n(16777215), _n(i))) > Math.min(e, 50) ? "#fff" : "#000";
}
function vt(i, e) {
  const t = mm();
  if (!t)
    throw new Error(`[Vuetify] ${i} must be called from inside a setup function`);
  return t;
}
function rd() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const e = vt(i).type;
  return Pi((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
function t0(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vt("injectSelf");
  const {
    provides: t
  } = e;
  if (t && i in t)
    return t[i];
}
const fl = Symbol.for("vuetify:defaults");
function od() {
  const i = ji(fl);
  if (!i) throw new Error("[Vuetify] Could not find defaults instance");
  return i;
}
function i0(i, e) {
  var t, n;
  return typeof ((t = i.props) == null ? void 0 : t[e]) < "u" || typeof ((n = i.props) == null ? void 0 : n[Pi(e)]) < "u";
}
function n0() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : od();
  const n = vt("useDefaults");
  if (e = e ?? n.type.name ?? n.type.__name, !e)
    throw new Error("[Vuetify] Could not determine component name");
  const s = I(() => {
    var a;
    return (a = t.value) == null ? void 0 : a[i._as ?? e];
  }), r = new Proxy(i, {
    get(a, c) {
      var u, f, d, p, g, m, O;
      const h = Reflect.get(a, c);
      return c === "class" || c === "style" ? [(u = s.value) == null ? void 0 : u[c], h].filter((x) => x != null) : typeof c == "string" && !i0(n.vnode, c) ? ((f = s.value) == null ? void 0 : f[c]) !== void 0 ? (d = s.value) == null ? void 0 : d[c] : ((g = (p = t.value) == null ? void 0 : p.global) == null ? void 0 : g[c]) !== void 0 ? (O = (m = t.value) == null ? void 0 : m.global) == null ? void 0 : O[c] : h : h;
    }
  }), o = Ut();
  gn(() => {
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
    const a = t0(fl, n);
    Za(fl, I(() => o.value ? ed((a == null ? void 0 : a.value) ?? {}, o.value) : a == null ? void 0 : a.value));
  }
  return {
    props: r,
    provideSubDefaults: l
  };
}
function to(i) {
  if (i._setup = i._setup ?? i.setup, !i.name)
    return Vn("The component is missing an explicit name, unable to generate default prop value"), i;
  if (i._setup) {
    i.props = Ye(i.props ?? {}, i.name)();
    const e = Object.keys(i.props).filter((t) => t !== "class" && t !== "style");
    i.filterProps = function(n) {
      return Zm(n, e);
    }, i.props._as = String, i.setup = function(n, s) {
      const r = od();
      if (!r.value) return i._setup(n, s);
      const {
        props: o,
        provideSubDefaults: l
      } = n0(n, n._as ?? i.name, r), a = i._setup(o, s);
      return l(), a;
    };
  }
  return i;
}
function _a() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (e) => (i ? to : If)(e);
}
function ld(i) {
  if (typeof i.getRootNode != "function") {
    for (; i.parentNode; ) i = i.parentNode;
    return i !== document ? null : document;
  }
  const e = i.getRootNode();
  return e !== document && e.getRootNode({
    composed: !0
  }) !== document ? null : e;
}
const s0 = "cubic-bezier(0.4, 0, 0.2, 1)";
function r0(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; i; ) {
    if (e ? o0(i) : Xa(i)) return i;
    i = i.parentElement;
  }
  return document.scrollingElement;
}
function Sr(i, e) {
  const t = [];
  if (e && i && !e.contains(i)) return t;
  for (; i && (Xa(i) && t.push(i), i !== e); )
    i = i.parentElement;
  return t;
}
function Xa(i) {
  if (!i || i.nodeType !== Node.ELEMENT_NODE) return !1;
  const e = window.getComputedStyle(i);
  return e.overflowY === "scroll" || e.overflowY === "auto" && i.scrollHeight > i.clientHeight;
}
function o0(i) {
  if (!i || i.nodeType !== Node.ELEMENT_NODE) return !1;
  const e = window.getComputedStyle(i);
  return ["scroll", "auto"].includes(e.overflowY);
}
function l0(i) {
  for (; i; ) {
    if (window.getComputedStyle(i).position === "fixed")
      return !0;
    i = i.offsetParent;
  }
  return !1;
}
function ad(i) {
  const e = vt("useRender");
  e.render = i;
}
function io(i, e) {
  let t;
  function n() {
    t = Ta(), t.run(() => e.length ? e(() => {
      t == null || t.stop(), n();
    }) : e());
  }
  ve(i, (s) => {
    s && !t ? n() : s || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), bt(() => {
    t == null || t.stop();
  });
}
function a0(i, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (u) => u, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (u) => u;
  const r = vt("useProxiedModel"), o = G(i[e] !== void 0 ? i[e] : t), l = Pi(e), c = l !== e ? I(() => {
    var u, f, d, p;
    return i[e], !!(((u = r.vnode.props) != null && u.hasOwnProperty(e) || (f = r.vnode.props) != null && f.hasOwnProperty(l)) && ((d = r.vnode.props) != null && d.hasOwnProperty(`onUpdate:${e}`) || (p = r.vnode.props) != null && p.hasOwnProperty(`onUpdate:${l}`)));
  }) : I(() => {
    var u, f;
    return i[e], !!((u = r.vnode.props) != null && u.hasOwnProperty(e) && ((f = r.vnode.props) != null && f.hasOwnProperty(`onUpdate:${e}`)));
  });
  io(() => !c.value, () => {
    ve(() => i[e], (u) => {
      o.value = u;
    });
  });
  const h = I({
    get() {
      const u = i[e];
      return n(c.value ? u : o.value);
    },
    set(u) {
      const f = s(u), d = zf(c.value ? i[e] : o.value);
      d === f || n(d) === u || (o.value = f, r == null || r.emit(`update:${e}`, f));
    }
  });
  return Object.defineProperty(h, "externalValue", {
    get: () => c.value ? i[e] : o.value
  }), h;
}
const c0 = Symbol.for("vuetify:locale");
function h0() {
  const i = ji(c0);
  if (!i) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: i.isRtl,
    rtlClasses: i.rtlClasses
  };
}
const eh = Symbol.for("vuetify:theme"), cd = Ye({
  theme: String
}, "theme");
function hd(i) {
  vt("provideTheme");
  const e = ji(eh, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  const t = I(() => i.theme ?? e.name.value), n = I(() => e.themes.value[t.value]), s = I(() => e.isDisabled ? void 0 : `v-theme--${t.value}`), r = {
    ...e,
    name: t,
    current: n,
    themeClasses: s
  };
  return Za(eh, r), r;
}
const u0 = Ye({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), f0 = Ye({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function d0(i) {
  return {
    dimensionStyles: I(() => {
      const t = {}, n = we(i.height), s = we(i.maxHeight), r = we(i.maxWidth), o = we(i.minHeight), l = we(i.minWidth), a = we(i.width);
      return n != null && (t.height = n), s != null && (t.maxHeight = s), r != null && (t.maxWidth = r), o != null && (t.minHeight = o), l != null && (t.minWidth = l), a != null && (t.width = a), t;
    })
  };
}
function ud(i) {
  return Ra(() => {
    const e = [], t = {};
    if (i.value.background)
      if (ul(i.value.background)) {
        if (t.backgroundColor = i.value.background, !i.value.text && Fm(i.value.background)) {
          const n = _n(i.value.background);
          if (n.a == null || n.a === 1) {
            const s = e0(n);
            t.color = s, t.caretColor = s;
          }
        }
      } else
        e.push(`bg-${i.value.background}`);
    return i.value.text && (ul(i.value.text) ? (t.color = i.value.text, t.caretColor = i.value.text) : e.push(`text-${i.value.text}`)), {
      colorClasses: e,
      colorStyles: t
    };
  });
}
function p0(i, e) {
  const t = I(() => ({
    text: Nf(i) ? i.value : null
  })), {
    colorClasses: n,
    colorStyles: s
  } = ud(t);
  return {
    textColorClasses: n,
    textColorStyles: s
  };
}
function O0(i, e) {
  const t = I(() => ({
    background: Nf(i) ? i.value : null
  })), {
    colorClasses: n,
    colorStyles: s
  } = ud(t);
  return {
    backgroundColorClasses: n,
    backgroundColorStyles: s
  };
}
const g0 = Ye({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (i) => i !== !0
  }
}, "transition"), m0 = (i, e) => {
  let {
    slots: t
  } = e;
  const {
    transition: n,
    disabled: s,
    group: r,
    ...o
  } = i, {
    component: l = r ? ym : Uf,
    ...a
  } = typeof n == "object" ? n : {};
  return Yf(l, Je(typeof n == "string" ? {
    name: s ? "" : n
  } : a, typeof n == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: s,
    group: r
  }).filter((c) => {
    let [h, u] = c;
    return u !== void 0;
  })), o), t);
}, fd = [String, Function, Object, Array], y0 = Symbol.for("vuetify:icons"), no = Ye({
  icon: {
    type: fd
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), th = _a()({
  name: "VComponentIcon",
  props: no(),
  setup(i, e) {
    let {
      slots: t
    } = e;
    return () => {
      const n = i.icon;
      return V(i.tag, null, {
        default: () => {
          var s;
          return [i.icon ? V(n, null, null) : (s = t.default) == null ? void 0 : s.call(t)];
        }
      });
    };
  }
}), b0 = to({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: no(),
  setup(i, e) {
    let {
      attrs: t
    } = e;
    return () => V(i.tag, Je(t, {
      style: null
    }), {
      default: () => [V("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(i.icon) ? i.icon.map((n) => Array.isArray(n) ? V("path", {
        d: n[0],
        "fill-opacity": n[1]
      }, null) : V("path", {
        d: n
      }, null)) : V("path", {
        d: i.icon
      }, null)])]
    });
  }
});
to({
  name: "VLigatureIcon",
  props: no(),
  setup(i) {
    return () => V(i.tag, null, {
      default: () => [i.icon]
    });
  }
});
to({
  name: "VClassIcon",
  props: no(),
  setup(i) {
    return () => V(i.tag, {
      class: i.icon
    }, null);
  }
});
const v0 = (i) => {
  const e = ji(y0);
  if (!e) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: I(() => {
      var a;
      const n = Ve(i);
      if (!n) return {
        component: th
      };
      let s = n;
      if (typeof s == "string" && (s = s.trim(), s.startsWith("$") && (s = (a = e.aliases) == null ? void 0 : a[s.slice(1)])), s || Vn(`Could not find aliased icon "${n}"`), Array.isArray(s))
        return {
          component: b0,
          icon: s
        };
      if (typeof s != "string")
        return {
          component: th,
          icon: s
        };
      const r = Object.keys(e.sets).find((c) => typeof s == "string" && s.startsWith(`${c}:`)), o = r ? s.slice(r.length + 1) : s;
      return {
        component: e.sets[r ?? e.defaultSet].component,
        icon: o
      };
    })
  };
}, S0 = ["x-small", "small", "default", "large", "x-large"], x0 = Ye({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function w0(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rd();
  return Ra(() => {
    let t, n;
    return vr(S0, i.size) ? t = `${e}--size-${i.size}` : i.size && (n = {
      width: we(i.size),
      height: we(i.size)
    }), {
      sizeClasses: t,
      sizeStyles: n
    };
  });
}
const Q0 = Ye({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: fd,
  ...Kf(),
  ...x0(),
  ...u0({
    tag: "i"
  }),
  ...cd()
}, "VIcon"), k0 = _a()({
  name: "VIcon",
  props: Q0(),
  setup(i, e) {
    let {
      attrs: t,
      slots: n
    } = e;
    const s = G(), {
      themeClasses: r
    } = hd(i), {
      iconData: o
    } = v0(I(() => s.value || i.icon)), {
      sizeClasses: l
    } = w0(i), {
      textColorClasses: a,
      textColorStyles: c
    } = p0(Gf(i, "color"));
    return ad(() => {
      var f, d;
      const h = (f = n.default) == null ? void 0 : f.call(n);
      h && (s.value = (d = td(h).filter((p) => p.type === bm && p.children && typeof p.children == "string")[0]) == null ? void 0 : d.children);
      const u = !!(t.onClick || t.onClickOnce);
      return V(o.value.component, {
        tag: i.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", r.value, l.value, a.value, {
          "v-icon--clickable": u,
          "v-icon--disabled": i.disabled,
          "v-icon--start": i.start,
          "v-icon--end": i.end
        }, i.class],
        style: [l.value ? void 0 : {
          fontSize: we(i.size),
          height: we(i.size),
          width: we(i.size)
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
function P0() {
  var i, e;
  return (e = (i = vt("useRouter")) == null ? void 0 : i.proxy) == null ? void 0 : e.$router;
}
let Co = !1;
function $0(i, e) {
  let t = !1, n, s;
  Lt && (bs(() => {
    window.addEventListener("popstate", r), n = i == null ? void 0 : i.beforeEach((o, l, a) => {
      Co ? t ? e(a) : a() : setTimeout(() => t ? e(a) : a()), Co = !0;
    }), s = i == null ? void 0 : i.afterEach(() => {
      Co = !1;
    });
  }), bt(() => {
    window.removeEventListener("popstate", r), n == null || n(), s == null || s();
  }));
  function r(o) {
    var l;
    (l = o.state) != null && l.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
const C0 = Symbol.for("vuetify:display");
function Z0() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rd();
  const t = ji(C0);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const n = I(() => {
    if (i.mobile != null) return i.mobile;
    if (!i.mobileBreakpoint) return t.mobile.value;
    const r = typeof i.mobileBreakpoint == "number" ? i.mobileBreakpoint : t.thresholds.value[i.mobileBreakpoint];
    return t.width.value < r;
  }), s = I(() => e ? {
    [`${e}--mobile`]: n.value
  } : {});
  return {
    ...t,
    displayClasses: s,
    mobile: n
  };
}
function Zo(i, e) {
  return {
    x: i.x + e.x,
    y: i.y + e.y
  };
}
function T0(i, e) {
  return {
    x: i.x - e.x,
    y: i.y - e.y
  };
}
function ih(i, e) {
  if (i.side === "top" || i.side === "bottom") {
    const {
      side: t,
      align: n
    } = i, s = n === "left" ? 0 : n === "center" ? e.width / 2 : n === "right" ? e.width : n, r = t === "top" ? 0 : t === "bottom" ? e.height : t;
    return Zo({
      x: s,
      y: r
    }, e);
  } else if (i.side === "left" || i.side === "right") {
    const {
      side: t,
      align: n
    } = i, s = t === "left" ? 0 : t === "right" ? e.width : t, r = n === "top" ? 0 : n === "center" ? e.height / 2 : n === "bottom" ? e.height : n;
    return Zo({
      x: s,
      y: r
    }, e);
  }
  return Zo({
    x: e.width / 2,
    y: e.height / 2
  }, e);
}
const dd = {
  static: R0,
  // specific viewport position, usually centered
  connected: X0
  // connected to a certain element
}, A0 = Ye({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (i) => typeof i == "function" || i in dd
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
function M0(i, e) {
  const t = G({}), n = G();
  Lt && io(() => !!(e.isActive.value && i.locationStrategy), (r) => {
    var o, l;
    ve(() => i.locationStrategy, r), bt(() => {
      window.removeEventListener("resize", s), n.value = void 0;
    }), window.addEventListener("resize", s, {
      passive: !0
    }), typeof i.locationStrategy == "function" ? n.value = (o = i.locationStrategy(e, i, t)) == null ? void 0 : o.updateLocation : n.value = (l = dd[i.locationStrategy](e, i, t)) == null ? void 0 : l.updateLocation;
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
function R0() {
}
function _0(i, e) {
  const t = Em(i);
  return e ? t.x += parseFloat(i.style.right || 0) : t.x -= parseFloat(i.style.left || 0), t.y -= parseFloat(i.style.top || 0), t;
}
function X0(i, e, t) {
  (Array.isArray(i.target.value) || l0(i.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [i.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: s,
    preferredOrigin: r
  } = Ra(() => {
    const p = Vc(e.location, i.isRtl.value), g = e.origin === "overlap" ? p : e.origin === "auto" ? Po(p) : Vc(e.origin, i.isRtl.value);
    return p.side === g.side && p.align === $o(g).align ? {
      preferredAnchor: Wc(p),
      preferredOrigin: Wc(g)
    } : {
      preferredAnchor: p,
      preferredOrigin: g
    };
  }), [o, l, a, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => I(() => {
    const g = parseFloat(e[p]);
    return isNaN(g) ? 1 / 0 : g;
  })), h = I(() => {
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
  ve([i.target, i.contentEl], (p, g) => {
    let [m, O] = p, [x, w] = g;
    x && !Array.isArray(x) && f.unobserve(x), m && !Array.isArray(m) && f.observe(m), w && f.unobserve(w), O && f.observe(O);
  }, {
    immediate: !0
  }), bt(() => {
    f.disconnect();
  });
  function d() {
    if (u = !1, requestAnimationFrame(() => u = !0), !i.target.value || !i.contentEl.value) return;
    const p = Xm(i.target.value), g = _0(i.contentEl.value, i.isRtl.value), m = Sr(i.contentEl.value), O = 12;
    m.length || (m.push(document.documentElement), i.contentEl.value.style.top && i.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const x = m.reduce((C, k) => {
      const S = k.getBoundingClientRect(), Z = new $i({
        x: k === document.documentElement ? 0 : S.x,
        y: k === document.documentElement ? 0 : S.y,
        width: k.clientWidth,
        height: k.clientHeight
      });
      return C ? new $i({
        x: Math.max(C.left, Z.left),
        y: Math.max(C.top, Z.top),
        width: Math.min(C.right, Z.right) - Math.max(C.left, Z.left),
        height: Math.min(C.bottom, Z.bottom) - Math.max(C.top, Z.top)
      }) : Z;
    }, void 0);
    x.x += O, x.y += O, x.width -= O * 2, x.height -= O * 2;
    let w = {
      anchor: s.value,
      origin: r.value
    };
    function P(C) {
      const k = new $i(g), S = ih(C.anchor, p), Z = ih(C.origin, k);
      let {
        x: _,
        y: B
      } = T0(S, Z);
      switch (C.anchor.side) {
        case "top":
          B -= h.value[0];
          break;
        case "bottom":
          B += h.value[0];
          break;
        case "left":
          _ -= h.value[0];
          break;
        case "right":
          _ += h.value[0];
          break;
      }
      switch (C.anchor.align) {
        case "top":
          B -= h.value[1];
          break;
        case "bottom":
          B += h.value[1];
          break;
        case "left":
          _ -= h.value[1];
          break;
        case "right":
          _ += h.value[1];
          break;
      }
      return k.x += _, k.y += B, k.width = Math.min(k.width, a.value), k.height = Math.min(k.height, c.value), {
        overflows: zc(k, x),
        x: _,
        y: B
      };
    }
    let $ = 0, M = 0;
    const b = {
      x: 0,
      y: 0
    }, Q = {
      x: !1,
      y: !1
    };
    let v = -1;
    for (; ; ) {
      if (v++ > 10) {
        Gm("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: C,
        y: k,
        overflows: S
      } = P(w);
      $ += C, M += k, g.x += C, g.y += k;
      {
        const Z = Ic(w.anchor), _ = S.x.before || S.x.after, B = S.y.before || S.y.after;
        let F = !1;
        if (["x", "y"].forEach((te) => {
          if (te === "x" && _ && !Q.x || te === "y" && B && !Q.y) {
            const ne = {
              anchor: {
                ...w.anchor
              },
              origin: {
                ...w.origin
              }
            }, de = te === "x" ? Z === "y" ? $o : Po : Z === "y" ? Po : $o;
            ne.anchor = de(ne.anchor), ne.origin = de(ne.origin);
            const {
              overflows: be
            } = P(ne);
            (be[te].before <= S[te].before && be[te].after <= S[te].after || be[te].before + be[te].after < (S[te].before + S[te].after) / 2) && (w = ne, F = Q[te] = !0);
          }
        }), F) continue;
      }
      S.x.before && ($ += S.x.before, g.x += S.x.before), S.x.after && ($ -= S.x.after, g.x -= S.x.after), S.y.before && (M += S.y.before, g.y += S.y.before), S.y.after && (M -= S.y.after, g.y -= S.y.after);
      {
        const Z = zc(g, x);
        b.x = x.width - Z.x.before - Z.x.after, b.y = x.height - Z.y.before - Z.y.after, $ += Z.x.before, g.x += Z.x.before, M += Z.y.before, g.y += Z.y.before;
      }
      break;
    }
    const T = Ic(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: we(To(M)),
      left: i.isRtl.value ? void 0 : we(To($)),
      right: i.isRtl.value ? we(To(-$)) : void 0,
      minWidth: we(T === "y" ? Math.min(o.value, p.width) : o.value),
      maxWidth: we(nh(Dc(b.x, o.value === 1 / 0 ? 0 : o.value, a.value))),
      maxHeight: we(nh(Dc(b.y, l.value === 1 / 0 ? 0 : l.value, c.value)))
    }), {
      available: b,
      contentBox: g
    };
  }
  return ve(() => [s.value, r.value, e.offset, e.minWidth, e.minHeight, e.maxWidth, e.maxHeight], () => d()), bs(() => {
    const p = d();
    if (!p) return;
    const {
      available: g,
      contentBox: m
    } = p;
    m.height > g.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), {
    updateLocation: d
  };
}
function To(i) {
  return Math.round(i * devicePixelRatio) / devicePixelRatio;
}
function nh(i) {
  return Math.ceil(i * devicePixelRatio) / devicePixelRatio;
}
let dl = !0;
const xr = [];
function E0(i) {
  !dl || xr.length ? (xr.push(i), pl()) : (dl = !1, i(), pl());
}
let sh = -1;
function pl() {
  cancelAnimationFrame(sh), sh = requestAnimationFrame(() => {
    const i = xr.shift();
    i && i(), xr.length ? pl() : dl = !0;
  });
}
const sr = {
  none: null,
  close: j0,
  block: B0,
  reposition: V0
}, L0 = Ye({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (i) => typeof i == "function" || i in sr
  }
}, "VOverlay-scroll-strategies");
function D0(i, e) {
  if (!Lt) return;
  let t;
  gn(async () => {
    t == null || t.stop(), e.isActive.value && i.scrollStrategy && (t = Ta(), await new Promise((n) => setTimeout(n)), t.active && t.run(() => {
      var n;
      typeof i.scrollStrategy == "function" ? i.scrollStrategy(e, i, t) : (n = sr[i.scrollStrategy]) == null || n.call(sr, e, i, t);
    }));
  }), bt(() => {
    t == null || t.stop();
  });
}
function j0(i) {
  function e(t) {
    i.isActive.value = !1;
  }
  pd(i.targetEl.value ?? i.contentEl.value, e);
}
function B0(i, e) {
  var o;
  const t = (o = i.root.value) == null ? void 0 : o.offsetParent, n = [.../* @__PURE__ */ new Set([...Sr(i.targetEl.value, e.contained ? t : void 0), ...Sr(i.contentEl.value, e.contained ? t : void 0)])].filter((l) => !l.classList.contains("v-overlay-scroll-blocked")), s = window.innerWidth - document.documentElement.offsetWidth, r = ((l) => Xa(l) && l)(t || document.documentElement);
  r && i.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((l, a) => {
    l.style.setProperty("--v-body-scroll-x", we(-l.scrollLeft)), l.style.setProperty("--v-body-scroll-y", we(-l.scrollTop)), l !== document.documentElement && l.style.setProperty("--v-scrollbar-offset", we(s)), l.classList.add("v-overlay-scroll-blocked");
  }), bt(() => {
    n.forEach((l, a) => {
      const c = parseFloat(l.style.getPropertyValue("--v-body-scroll-x")), h = parseFloat(l.style.getPropertyValue("--v-body-scroll-y")), u = l.style.scrollBehavior;
      l.style.scrollBehavior = "auto", l.style.removeProperty("--v-body-scroll-x"), l.style.removeProperty("--v-body-scroll-y"), l.style.removeProperty("--v-scrollbar-offset"), l.classList.remove("v-overlay-scroll-blocked"), l.scrollLeft = -c, l.scrollTop = -h, l.style.scrollBehavior = u;
    }), r && i.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function V0(i, e, t) {
  let n = !1, s = -1, r = -1;
  function o(l) {
    E0(() => {
      var h, u;
      const a = performance.now();
      (u = (h = i.updateLocation).value) == null || u.call(h, l), n = (performance.now() - a) / (1e3 / 60) > 2;
    });
  }
  r = (typeof requestIdleCallback > "u" ? (l) => l() : requestIdleCallback)(() => {
    t.run(() => {
      pd(i.targetEl.value ?? i.contentEl.value, (l) => {
        n ? (cancelAnimationFrame(s), s = requestAnimationFrame(() => {
          s = requestAnimationFrame(() => {
            o(l);
          });
        })) : o(l);
      });
    });
  }), bt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(r), cancelAnimationFrame(s);
  });
}
function pd(i, e) {
  const t = [document, ...Sr(i)];
  t.forEach((n) => {
    n.addEventListener("scroll", e, {
      passive: !0
    });
  }), bt(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", e);
    });
  });
}
const q0 = Symbol.for("vuetify:v-menu"), W0 = Ye({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function I0(i, e) {
  let t = () => {
  };
  function n(o) {
    t == null || t();
    const l = Number(o ? i.openDelay : i.closeDelay);
    return new Promise((a) => {
      t = Rm(l, () => {
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
const z0 = Ye({
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
  ...W0()
}, "VOverlay-activator");
function N0(i, e) {
  let {
    isActive: t,
    isTop: n,
    contentEl: s
  } = e;
  const r = vt("useActivator"), o = G();
  let l = !1, a = !1, c = !0;
  const h = I(() => i.openOnFocus || i.openOnFocus == null && i.openOnHover), u = I(() => i.openOnClick || i.openOnClick == null && !i.openOnHover && !h.value), {
    runOpenDelay: f,
    runCloseDelay: d
  } = I0(i, (Q) => {
    Q === (i.openOnHover && l || h.value && a) && !(i.openOnHover && t.value && !n.value) && (t.value !== Q && (c = !0), t.value = Q);
  }), p = G(), g = {
    onClick: (Q) => {
      Q.stopPropagation(), o.value = Q.currentTarget || Q.target, t.value || (p.value = [Q.clientX, Q.clientY]), t.value = !t.value;
    },
    onMouseenter: (Q) => {
      var v;
      (v = Q.sourceCapabilities) != null && v.firesTouchEvents || (l = !0, o.value = Q.currentTarget || Q.target, f());
    },
    onMouseleave: (Q) => {
      l = !1, d();
    },
    onFocus: (Q) => {
      Mm(Q.target, ":focus-visible") !== !1 && (a = !0, Q.stopPropagation(), o.value = Q.currentTarget || Q.target, f());
    },
    onBlur: (Q) => {
      a = !1, Q.stopPropagation(), d();
    }
  }, m = I(() => {
    const Q = {};
    return u.value && (Q.onClick = g.onClick), i.openOnHover && (Q.onMouseenter = g.onMouseenter, Q.onMouseleave = g.onMouseleave), h.value && (Q.onFocus = g.onFocus, Q.onBlur = g.onBlur), Q;
  }), O = I(() => {
    const Q = {};
    if (i.openOnHover && (Q.onMouseenter = () => {
      l = !0, f();
    }, Q.onMouseleave = () => {
      l = !1, d();
    }), h.value && (Q.onFocusin = () => {
      a = !0, f();
    }, Q.onFocusout = () => {
      a = !1, d();
    }), i.closeOnContentClick) {
      const v = ji(q0, null);
      Q.onClick = () => {
        t.value = !1, v == null || v.closeParents();
      };
    }
    return Q;
  }), x = I(() => {
    const Q = {};
    return i.openOnHover && (Q.onMouseenter = () => {
      c && (l = !0, c = !1, f());
    }, Q.onMouseleave = () => {
      l = !1, d();
    }), Q;
  });
  ve(n, (Q) => {
    var v;
    Q && (i.openOnHover && !l && (!h.value || !a) || h.value && !a && (!i.openOnHover || !l)) && !((v = s.value) != null && v.contains(document.activeElement)) && (t.value = !1);
  }), ve(t, (Q) => {
    Q || setTimeout(() => {
      p.value = void 0;
    });
  }, {
    flush: "post"
  });
  const w = Bc();
  gn(() => {
    w.value && bs(() => {
      o.value = w.el;
    });
  });
  const P = Bc(), $ = I(() => i.target === "cursor" && p.value ? p.value : P.value ? P.el : Od(i.target, r) || o.value), M = I(() => Array.isArray($.value) ? void 0 : $.value);
  let b;
  return ve(() => !!i.activator, (Q) => {
    Q && Lt ? (b = Ta(), b.run(() => {
      U0(i, r, {
        activatorEl: o,
        activatorEvents: m
      });
    })) : b && b.stop();
  }, {
    flush: "post",
    immediate: !0
  }), bt(() => {
    b == null || b.stop();
  }), {
    activatorEl: o,
    activatorRef: w,
    target: $,
    targetEl: M,
    targetRef: P,
    activatorEvents: m,
    contentEvents: O,
    scrimEvents: x
  };
}
function U0(i, e, t) {
  let {
    activatorEl: n,
    activatorEvents: s
  } = t;
  ve(() => i.activator, (a, c) => {
    if (c && a !== c) {
      const h = l(c);
      h && o(h);
    }
    a && bs(() => r());
  }, {
    immediate: !0
  }), ve(() => i.activatorProps, () => {
    r();
  }), bt(() => {
    o();
  });
  function r() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i.activatorProps;
    a && Dm(a, Je(s.value, c));
  }
  function o() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i.activatorProps;
    a && jm(a, Je(s.value, c));
  }
  function l() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i.activator;
    const c = Od(a, e);
    return n.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, n.value;
  }
}
function Od(i, e) {
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
function Y0() {
  if (!Lt) return Ut(!1);
  const {
    ssr: i
  } = Z0();
  if (i) {
    const e = Ut(!1);
    return mn(() => {
      e.value = !0;
    }), e;
  } else
    return Ut(!0);
}
const G0 = Ye({
  eager: Boolean
}, "lazy");
function F0(i, e) {
  const t = Ut(!1), n = I(() => t.value || i.eager || e.value);
  ve(e, () => t.value = !0);
  function s() {
    i.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: n,
    onAfterLeave: s
  };
}
function H0() {
  const e = vt("useScopeId").vnode.scopeId;
  return {
    scopeId: e ? {
      [e]: ""
    } : void 0
  };
}
const rh = Symbol.for("vuetify:stack"), kn = Ai([]);
function K0(i, e, t) {
  const n = vt("useStack"), s = !t, r = ji(rh, void 0), o = Ai({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Za(rh, o);
  const l = Ut(+e.value);
  io(i, () => {
    var u;
    const h = (u = kn.at(-1)) == null ? void 0 : u[1];
    l.value = h ? h + 10 : +e.value, s && kn.push([n.uid, l.value]), r == null || r.activeChildren.add(n.uid), bt(() => {
      if (s) {
        const f = zf(kn).findIndex((d) => d[0] === n.uid);
        kn.splice(f, 1);
      }
      r == null || r.activeChildren.delete(n.uid);
    });
  });
  const a = Ut(!0);
  s && gn(() => {
    var u;
    const h = ((u = kn.at(-1)) == null ? void 0 : u[0]) === n.uid;
    setTimeout(() => a.value = h);
  });
  const c = I(() => !o.activeChildren.size);
  return {
    globalTop: vm(a),
    localTop: c,
    stackStyles: I(() => ({
      zIndex: l.value
    }))
  };
}
function J0(i) {
  return {
    teleportTarget: I(() => {
      const t = i();
      if (t === !0 || !Lt) return;
      const n = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (n == null) {
        Ca(`Unable to locate target ${t}`);
        return;
      }
      let s = [...n.children].find((r) => r.matches(".v-overlay-container"));
      return s || (s = document.createElement("div"), s.className = "v-overlay-container", n.appendChild(s)), s;
    })
  };
}
function e1() {
  return !0;
}
function gd(i, e, t) {
  if (!i || md(i, t) === !1) return !1;
  const n = ld(e);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === i.target) return !1;
  const s = (typeof t.value == "object" && t.value.include || (() => []))();
  return s.push(e), !s.some((r) => r == null ? void 0 : r.contains(i.target));
}
function md(i, e) {
  return (typeof e.value == "object" && e.value.closeConditional || e1)(i);
}
function t1(i, e, t) {
  const n = typeof t.value == "function" ? t.value : t.value.handler;
  i.shadowTarget = i.target, e._clickOutside.lastMousedownWasOutside && gd(i, e, t) && setTimeout(() => {
    md(i, t) && n && n(i);
  }, 0);
}
function oh(i, e) {
  const t = ld(i);
  e(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && e(t);
}
const i1 = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(i, e) {
    const t = (s) => t1(s, i, e), n = (s) => {
      i._clickOutside.lastMousedownWasOutside = gd(s, i, e);
    };
    oh(i, (s) => {
      s.addEventListener("click", t, !0), s.addEventListener("mousedown", n, !0);
    }), i._clickOutside || (i._clickOutside = {
      lastMousedownWasOutside: !1
    }), i._clickOutside[e.instance.$.uid] = {
      onClick: t,
      onMousedown: n
    };
  },
  beforeUnmount(i, e) {
    i._clickOutside && (oh(i, (t) => {
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
function n1(i) {
  const {
    modelValue: e,
    color: t,
    ...n
  } = i;
  return V(Uf, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [i.modelValue && V("div", Je({
      class: ["v-overlay__scrim", i.color.backgroundColorClasses.value],
      style: i.color.backgroundColorStyles.value
    }, n), null)]
  });
}
const s1 = Ye({
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
  ...z0(),
  ...Kf(),
  ...f0(),
  ...G0(),
  ...A0(),
  ...L0(),
  ...cd(),
  ...g0()
}, "VOverlay"), r1 = _a()({
  name: "VOverlay",
  directives: {
    ClickOutside: i1
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...s1()
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
    const r = vt("VOverlay"), o = G(), l = G(), a = G(), c = a0(i, "modelValue"), h = I({
      get: () => c.value,
      set: (re) => {
        re && i.disabled || (c.value = re);
      }
    }), {
      themeClasses: u
    } = hd(i), {
      rtlClasses: f,
      isRtl: d
    } = h0(), {
      hasContent: p,
      onAfterLeave: g
    } = F0(i, h), m = O0(I(() => typeof i.scrim == "string" ? i.scrim : null)), {
      globalTop: O,
      localTop: x,
      stackStyles: w
    } = K0(h, Gf(i, "zIndex"), i._disableGlobalStack), {
      activatorEl: P,
      activatorRef: $,
      target: M,
      targetEl: b,
      targetRef: Q,
      activatorEvents: v,
      contentEvents: T,
      scrimEvents: C
    } = N0(i, {
      isActive: h,
      isTop: x,
      contentEl: a
    }), {
      teleportTarget: k
    } = J0(() => {
      var Qn, Xc, Ec;
      const re = i.attach || i.contained;
      if (re) return re;
      const Ie = ((Qn = P == null ? void 0 : P.value) == null ? void 0 : Qn.getRootNode()) || ((Ec = (Xc = r.proxy) == null ? void 0 : Xc.$el) == null ? void 0 : Ec.getRootNode());
      return Ie instanceof ShadowRoot ? Ie : !1;
    }), {
      dimensionStyles: S
    } = d0(i), Z = Y0(), {
      scopeId: _
    } = H0();
    ve(() => i.disabled, (re) => {
      re && (h.value = !1);
    });
    const {
      contentStyles: B,
      updateLocation: F
    } = M0(i, {
      isRtl: d,
      contentEl: a,
      target: M,
      isActive: h
    });
    D0(i, {
      root: o,
      contentEl: a,
      targetEl: b,
      isActive: h,
      updateLocation: F
    });
    function te(re) {
      s("click:outside", re), i.persistent ? ke() : h.value = !1;
    }
    function ne(re) {
      return h.value && O.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!i.scrim || re.target === l.value || re instanceof MouseEvent && re.shadowTarget === l.value);
    }
    Lt && ve(h, (re) => {
      re ? window.addEventListener("keydown", de) : window.removeEventListener("keydown", de);
    }, {
      immediate: !0
    }), Sm(() => {
      Lt && window.removeEventListener("keydown", de);
    });
    function de(re) {
      var Ie, Qn;
      re.key === "Escape" && O.value && (i.persistent ? ke() : (h.value = !1, (Ie = a.value) != null && Ie.contains(document.activeElement) && ((Qn = P.value) == null || Qn.focus())));
    }
    const be = P0();
    io(() => i.closeOnBack, () => {
      $0(be, (re) => {
        O.value && h.value ? (re(!1), i.persistent ? ke() : h.value = !1) : re();
      });
    });
    const ye = G();
    ve(() => h.value && (i.absolute || i.contained) && k.value == null, (re) => {
      if (re) {
        const Ie = r0(o.value);
        Ie && Ie !== document.scrollingElement && (ye.value = Ie.scrollTop);
      }
    });
    function ke() {
      i.noClickAnimation || a.value && Lm(a.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: s0
      });
    }
    function Wt() {
      s("afterEnter");
    }
    function ii() {
      g(), s("afterLeave");
    }
    return ad(() => {
      var re;
      return V(he, null, [(re = t.activator) == null ? void 0 : re.call(t, {
        isActive: h.value,
        targetRef: Q,
        props: Je({
          ref: $
        }, v.value, i.activatorProps)
      }), Z.value && p.value && V(eo, {
        disabled: !k.value,
        to: k.value
      }, {
        default: () => [V("div", Je({
          class: ["v-overlay", {
            "v-overlay--absolute": i.absolute || i.contained,
            "v-overlay--active": h.value,
            "v-overlay--contained": i.contained
          }, u.value, f.value, i.class],
          style: [w.value, {
            "--v-overlay-opacity": i.opacity,
            top: we(ye.value)
          }, i.style],
          ref: o
        }, _, n), [V(n1, Je({
          color: m,
          modelValue: h.value && !!i.scrim,
          ref: l
        }, C.value), null), V(m0, {
          appear: !0,
          persisted: !0,
          transition: i.transition,
          target: M.value,
          onAfterEnter: Wt,
          onAfterLeave: ii
        }, {
          default: () => {
            var Ie;
            return [Aa(V("div", Je({
              ref: a,
              class: ["v-overlay__content", i.contentClass],
              style: [S.value, B.value]
            }, T.value, i.contentProps), [(Ie = t.default) == null ? void 0 : Ie.call(t, {
              isActive: h
            })]), [[Ma, h.value], [xm("click-outside"), {
              handler: te,
              closeConditional: ne,
              include: () => [P.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: P,
      scrimEl: l,
      target: M,
      animateClick: ke,
      contentEl: a,
      globalTop: O,
      localTop: x,
      updateLocation: F
    };
  }
}), Re = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, s] of e)
    t[n] = s;
  return t;
}, o1 = {
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
    const e = i, t = wm(), n = I(() => !!(t.icon || e.icon));
    return (s, r) => {
      const o = z("v-btn");
      return R(), se(o, {
        class: "s-btn",
        elevation: "0",
        "s-color": i.color,
        size: i.size,
        to: i.to,
        height: i.height,
        icon: i.icon
      }, Mi({ _: 2 }, [
        n.value && !s.$slots.default ? {
          name: "icon",
          fn: E(() => [
            V(Ve(k0), null, {
              default: E(() => [
                oe(U(i.icon), 1)
              ]),
              _: 1
            })
          ]),
          key: "0"
        } : {
          name: "default",
          fn: E(() => [
            oe(U(i.title) + " ", 1),
            J(s.$slots, "default", {}, void 0, !0)
          ]),
          key: "1"
        }
      ]), 1032, ["s-color", "size", "to", "height", "icon"]);
    };
  }
}, Hn = /* @__PURE__ */ Re(o1, [["__scopeId", "data-v-5e15c61d"]]), l1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_206_5961)'%3e%3cpath%20d='M8%200C3.584%200%200%203.584%200%208C0%2012.416%203.584%2016%208%2016C12.416%2016%2016%2012.416%2016%208C16%203.584%2012.416%200%208%200ZM8.728%2012.92C8.48%2013.168%208.048%2012.992%208.048%2012.64V12C8.032%2012%208.016%2012%208%2012C6.976%2012%205.952%2011.608%205.168%2010.832C4.024%209.688%203.72%208.016%204.256%206.592C4.408%206.184%204.944%206.08%205.248%206.392C5.424%206.568%205.464%206.824%205.384%207.048C5.016%208.04%205.224%209.192%206.024%209.992C6.584%2010.552%207.32%2010.816%208.056%2010.8V10.048C8.056%209.688%208.488%209.512%208.736%209.768L10.032%2011.064C10.192%2011.224%2010.192%2011.472%2010.032%2011.632L8.728%2012.92ZM10.752%209.616C10.576%209.44%2010.536%209.184%2010.616%208.96C10.984%207.968%2010.776%206.816%209.976%206.016C9.416%205.456%208.68%205.184%207.952%205.2V5.952C7.952%206.312%207.52%206.488%207.272%206.232L5.968%204.944C5.808%204.784%205.808%204.536%205.968%204.376L7.264%203.08C7.512%202.832%207.944%203.008%207.944%203.36V4.008C8.984%203.992%2010.032%204.368%2010.824%205.168C11.968%206.312%2012.272%207.984%2011.736%209.408C11.584%209.824%2011.056%209.928%2010.752%209.616Z'%20fill='%231297F2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_206_5961'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", a1 = { class: "position-relative refresh-time-wrapper" }, c1 = { class: "refresh-time" }, h1 = ["src"], u1 = {
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
    const e = i, t = I(() => {
      const n = e.refreshDate.getFullYear(), s = (e.refreshDate.getMonth() + 1).toString().padStart(2, "0"), r = e.refreshDate.getDate().toString().padStart(2, "0"), o = e.refreshDate.getHours().toString().padStart(2, "0"), l = e.refreshDate.getMinutes().toString().padStart(2, "0"), a = e.refreshDate.getSeconds().toString().padStart(2, "0");
      return `${n}-${s}-${r} ${o}:${l}:${a}`;
    });
    return (n, s) => (R(), L("span", a1, [
      X("span", c1, U(i.refreshDateTitle) + " : " + U(t.value), 1),
      X("img", {
        class: "cursor-pointer ml-1",
        height: "16",
        width: "16",
        src: Ve(l1),
        onClick: s[0] || (s[0] = (...r) => i.onClickRefresh && i.onClickRefresh(...r))
      }, null, 8, h1)
    ]));
  }
}, NT = /* @__PURE__ */ Re(u1, [["__scopeId", "data-v-4f139fd8"]]), f1 = {};
function d1(i, e) {
  const t = z("v-text-field"), n = z("v-col"), s = z("v-checkbox"), r = z("v-row");
  return R(), se(r, null, {
    default: E(() => [
      V(n, null, {
        default: E(() => [
          V(t, {
            density: "compact",
            variant: "outlined"
          })
        ]),
        _: 1
      }),
      V(n, null, {
        default: E(() => [
          V(s, {
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
const UT = /* @__PURE__ */ Re(f1, [["render", d1]]), p1 = { class: "shell-script-wrapper" }, O1 = { class: "line-numbers" }, YT = {
  __name: "SShellScriptInput",
  props: /* @__PURE__ */ Ff({
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
    const e = Hf(i, "modelValue"), t = G(1), n = () => {
      t.value = e.value.split(`
`).length;
    };
    return n(), (s, r) => {
      const o = z("v-label"), l = z("v-textarea");
      return R(), L(he, null, [
        i.labelTitle ? (R(), se(o, { key: 0 }, {
          default: E(() => [
            oe(U(i.labelTitle), 1)
          ]),
          _: 1
        })) : ae("", !0),
        X("div", p1, [
          X("div", O1, [
            (R(!0), L(he, null, qe(t.value, (a) => (R(), L("span", { key: a }, U(a), 1))), 128))
          ]),
          V(l, {
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
}, g1 = { class: "s-file-input" }, GT = {
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
    return mn(() => {
      s.value = t.modelValue;
    }), (l, a) => {
      const c = z("v-file-input"), h = z("v-text-field");
      return R(), L("div", g1, [
        V(c, {
          ref: "importFile",
          "model-value": s.value,
          class: "d-none",
          "onUpdate:modelValue": o,
          accept: i.accept
        }, null, 8, ["model-value", "accept"]),
        V(h, {
          "model-value": r.value,
          variant: "outlined",
          density: "compact",
          "hide-details": i.hideDetails,
          readonly: "",
          "error-messages": i.errorMessages,
          placeholder: i.placeholder
        }, null, 8, ["model-value", "hide-details", "error-messages", "placeholder"]),
        V(Ve(Hn), {
          height: "30",
          variant: "outlined",
          disabled: i.btnDisabled,
          onClick: a[0] || (a[0] = (u) => l.$refs.importFile.click())
        }, {
          default: E(() => [
            oe(U(i.buttonText), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]);
    };
  }
}, m1 = { class: "s-alert" }, FT = {
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
    return gn(() => {
      s.value = n.modelValue;
    }), (l, a) => {
      const c = z("v-snackbar");
      return R(), L("div", m1, [
        V(c, {
          style: ct(i.alertStyle),
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
          actions: E(() => [
            i.isClose ? (R(), se(Hn, {
              key: 0,
              color: "#fff",
              variant: "text",
              onClick: o
            }, {
              default: E(() => a[0] || (a[0] = [
                oe("Close")
              ])),
              _: 1
            })) : ae("", !0)
          ]),
          default: E(() => [
            J(l.$slots, "alert-icon"),
            X("pre", null, U(i.titleName), 1)
          ]),
          _: 3
        }, 8, ["style", "model-value", "multi-line", "timeout", "color", "height"])
      ]);
    };
  }
}, y1 = { class: "s-empty" }, b1 = {
  key: 0,
  class: "s-empty__card-title"
}, v1 = { class: "s-empty__card-content" }, S1 = { style: { color: "#007bff", "font-size": "18px" } }, x1 = {
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
      default: () => () => {
      }
    }
  },
  setup(i) {
    return (e, t) => {
      const n = z("v-btn"), s = z("v-sheet");
      return R(), L("div", y1, [
        V(s, {
          class: "s-empty__card",
          elevation: i.elevation,
          border: "",
          rounded: "",
          shadowed: i.shadowed
        }, {
          default: E(() => [
            i.title ? (R(), L("div", b1, U(i.title), 1)) : ae("", !0),
            X("div", v1, [
              i.onClick ? (R(), se(n, {
                key: 0,
                flat: "",
                onClick: i.onClick
              }, {
                default: E(() => [
                  X("span", S1, U(i.description), 1)
                ]),
                _: 1
              }, 8, ["onClick"])) : (R(), L(he, { key: 1 }, [
                oe(U(i.description), 1)
              ], 64))
            ]),
            J(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["elevation", "shadowed"])
      ]);
    };
  }
}, w1 = /* @__PURE__ */ Re(x1, [["__scopeId", "data-v-19106179"]]);
let Ol = [], yd = [];
(() => {
  let i = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < i.length; e++)
    (e % 2 ? yd : Ol).push(t = t + i[e]);
})();
function Q1(i) {
  if (i < 768) return !1;
  for (let e = 0, t = Ol.length; ; ) {
    let n = e + t >> 1;
    if (i < Ol[n]) t = n;
    else if (i >= yd[n]) e = n + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function lh(i) {
  return i >= 127462 && i <= 127487;
}
const ah = 8205;
function k1(i, e, t = !0, n = !0) {
  return (t ? bd : P1)(i, e, n);
}
function bd(i, e, t) {
  if (e == i.length) return e;
  e && vd(i.charCodeAt(e)) && Sd(i.charCodeAt(e - 1)) && e--;
  let n = Ao(i, e);
  for (e += ch(n); e < i.length; ) {
    let s = Ao(i, e);
    if (n == ah || s == ah || t && Q1(s))
      e += ch(s), n = s;
    else if (lh(s)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && lh(Ao(i, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function P1(i, e, t) {
  for (; e > 0; ) {
    let n = bd(i, e - 2, t);
    if (n < e) return n;
    e--;
  }
  return 0;
}
function Ao(i, e) {
  let t = i.charCodeAt(e);
  if (!Sd(t) || e + 1 == i.length) return t;
  let n = i.charCodeAt(e + 1);
  return vd(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function vd(i) {
  return i >= 56320 && i < 57344;
}
function Sd(i) {
  return i >= 55296 && i < 56320;
}
function ch(i) {
  return i < 65536 ? 1 : 2;
}
class ie {
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
    [e, t] = rn(this, e, t);
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
    ), $t.from(s, this.length - (t - e) + n.length);
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
    [e, t] = rn(this, e, t);
    let n = [];
    return this.decompose(e, t, n, 0), $t.from(n, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), s = new qn(this), r = new qn(e);
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
    return new qn(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new xd(this, e, t);
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
    return new wd(n);
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
    return e.length == 1 && !e[0] ? ie.empty : e.length <= 32 ? new xe(e) : $t.from(xe.split(e, []));
  }
}
class xe extends ie {
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
    let r = e <= 0 && t >= this.length ? this : new xe(hh(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = n.pop(), l = rr(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        n.push(new xe(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        n.push(new xe(l.slice(0, a)), new xe(l.slice(a)));
      }
    } else
      n.push(r);
  }
  replace(e, t, n) {
    if (!(n instanceof xe))
      return super.replace(e, t, n);
    [e, t] = rn(this, e, t);
    let s = rr(this.text, rr(n.text, hh(this.text, 0, e)), t), r = this.length + n.length - (t - e);
    return s.length <= 32 ? new xe(s, r) : $t.from(xe.split(s, []), r);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = rn(this, e, t);
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
      n.push(r), s += r.length + 1, n.length == 32 && (t.push(new xe(n, s)), n = [], s = -1);
    return s > -1 && t.push(new xe(n, s)), t;
  }
}
class $t extends ie {
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
    if ([e, t] = rn(this, e, t), n.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, n), c = this.lines - o.lines + a.lines;
          if (a.lines < c >> 4 && a.lines > c >> 6) {
            let h = this.children.slice();
            return h[s] = a, new $t(h, this.length - (t - e) + n.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = rn(this, e, t);
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
    if (!(e instanceof $t))
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
      return new xe(d, t);
    }
    let s = Math.max(
      32,
      n >> 5
      /* Tree.BranchShift */
    ), r = s << 1, o = s >> 1, l = [], a = 0, c = -1, h = [];
    function u(d) {
      let p;
      if (d.lines > r && d instanceof $t)
        for (let g of d.children)
          u(g);
      else d.lines > o && (a > o || !a) ? (f(), l.push(d)) : d instanceof xe && a && (p = h[h.length - 1]) instanceof xe && d.lines + p.lines <= 32 ? (a += d.lines, c += d.length + 1, h[h.length - 1] = new xe(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && f(), a += d.lines, c += d.length + 1, h.push(d));
    }
    function f() {
      a != 0 && (l.push(h.length == 1 ? h[0] : $t.from(h, c)), c = -1, a = h.length = 0);
    }
    for (let d of e)
      u(d);
    return f(), l.length == 1 ? l[0] : new $t(l, t);
  }
}
ie.empty = /* @__PURE__ */ new xe([""], 0);
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
function hh(i, e, t) {
  return rr(i, [""], e, t);
}
class qn {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof xe ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1, s = this.nodes[n], r = this.offsets[n], o = r >> 1, l = s instanceof xe ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (n == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[n] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (s instanceof xe) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[n] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof xe ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class xd {
  constructor(e, t, n) {
    this.value = "", this.done = !1, this.cursor = new qn(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
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
class wd {
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
typeof Symbol < "u" && (ie.prototype[Symbol.iterator] = function() {
  return this.iter();
}, qn.prototype[Symbol.iterator] = xd.prototype[Symbol.iterator] = wd.prototype[Symbol.iterator] = function() {
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
function rn(i, e, t) {
  return e = Math.max(0, Math.min(i.length, e)), [e, Math.max(e, Math.min(i.length, t))];
}
function De(i, e, t = !0, n = !0) {
  return k1(i, e, t, n);
}
function Z1(i) {
  return i >= 56320 && i < 57344;
}
function T1(i) {
  return i >= 55296 && i < 56320;
}
function Fe(i, e) {
  let t = i.charCodeAt(e);
  if (!T1(t) || e + 1 == i.length)
    return t;
  let n = i.charCodeAt(e + 1);
  return Z1(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function Ea(i) {
  return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function Ct(i) {
  return i < 65536 ? 1 : 2;
}
const gl = /\r\n?|\n/;
var Le = /* @__PURE__ */ function(i) {
  return i[i.Simple = 0] = "Simple", i[i.TrackDel = 1] = "TrackDel", i[i.TrackBefore = 2] = "TrackBefore", i[i.TrackAfter = 3] = "TrackAfter", i;
}(Le || (Le = {}));
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
    ml(this, e, t);
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
    return this.empty ? e : e.empty ? this : Qd(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : yl(this, e, t);
  }
  mapPos(e, t = -1, n = Le.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], c = s + l;
      if (a < 0) {
        if (c > e)
          return r + (e - s);
        r += l;
      } else {
        if (n != Le.Simple && c >= e && (n == Le.TrackDel && s < e && c > e || n == Le.TrackBefore && s < e || n == Le.TrackAfter && c > e))
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
class Te extends Xt {
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
    return ml(this, (t, n, s, r, o) => e = e.replace(s, s + (n - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return yl(this, e, t, !0);
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
          n.push(ie.empty);
        n.push(o ? e.slice(r, r + o) : ie.empty);
      }
      r += o;
    }
    return new Te(t, n);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Qd(this, e, !0);
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
    return e.empty ? this : yl(this, e, t, !0);
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
    ml(this, e, t);
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
    let t = [], n = [], s = [], r = new Kn(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, a - l);
        je(s, h, -1);
        let u = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        je(t, h, u), u > 0 && oi(n, t, r.text), r.forward(h), l += h;
      }
      let c = e[o++];
      for (; l < c; ) {
        if (r.done)
          break e;
        let h = Math.min(r.len, c - l);
        je(t, h, -1), je(s, h, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(h), l += h;
      }
    }
    return {
      changes: new Te(t, n),
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
      o < t && je(s, t - o, -1);
      let u = new Te(s, r);
      l = l ? l.compose(u.map(l)) : u, s = [], r = [], o = 0;
    }
    function c(h) {
      if (Array.isArray(h))
        for (let u of h)
          c(u);
      else if (h instanceof Te) {
        if (h.length != t)
          throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: u, to: f = u, insert: d } = h;
        if (u > f || u < 0 || f > t)
          throw new RangeError(`Invalid change range ${u} to ${f} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? ie.of(d.split(n || gl)) : d : ie.empty, g = p.length;
        if (u == f && g == 0)
          return;
        u < o && a(), u > o && je(s, u - o, -1), je(s, f - u, g), oi(r, s, p), o = f;
      }
    }
    return c(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new Te(e ? [e, -1] : [], []);
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
            n.push(ie.empty);
          n[s] = ie.of(r.slice(1)), t.push(r[0], n[s].length);
        }
      }
    }
    return new Te(t, n);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new Te(e, t);
  }
}
function je(i, e, t, n = !1) {
  if (e == 0 && t <= 0)
    return;
  let s = i.length - 2;
  s >= 0 && t <= 0 && t == i[s + 1] ? i[s] += e : s >= 0 && e == 0 && i[s] == 0 ? i[s + 1] += t : n ? (i[s] += e, i[s + 1] += t) : i.push(e, t);
}
function oi(i, e, t) {
  if (t.length == 0)
    return;
  let n = e.length - 2 >> 1;
  if (n < i.length)
    i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < n; )
      i.push(ie.empty);
    i.push(t);
  }
}
function ml(i, e, t) {
  let n = i.inserted;
  for (let s = 0, r = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++], a = i.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let c = s, h = r, u = ie.empty;
      for (; c += l, h += a, a && n && (u = u.append(n[o - 2 >> 1])), !(t || o == i.sections.length || i.sections[o + 1] < 0); )
        l = i.sections[o++], a = i.sections[o++];
      e(s, c, r, h, u), s = c, r = h;
    }
  }
}
function yl(i, e, t, n = !1) {
  let s = [], r = n ? [] : null, o = new Kn(i), l = new Kn(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let c = Math.min(o.len, l.len);
      je(s, c, -1), o.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let c = l.len;
      for (je(s, l.ins, -1); c; ) {
        let h = Math.min(o.len, c);
        o.ins >= 0 && a < o.i && o.len <= h && (je(s, 0, o.ins), r && oi(r, s, o.text), a = o.i), o.forward(h), c -= h;
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
      je(s, c, a < o.i ? o.ins : 0), r && a < o.i && oi(r, s, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done)
        return r ? Te.createSet(s, r) : Xt.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Qd(i, e, t = !1) {
  let n = [], s = t ? [] : null, r = new Kn(i), o = new Kn(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return s ? Te.createSet(n, s) : Xt.create(n);
    if (r.ins == 0)
      je(n, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      je(n, 0, o.ins, l), s && oi(s, n, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), c = n.length;
        if (r.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          je(n, a, h, l), s && h && oi(s, n, o.text);
        } else o.ins == -1 ? (je(n, r.off ? 0 : r.len, a, l), s && oi(s, n, r.textBit(a))) : (je(n, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && oi(s, n, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || n.length > c), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Kn {
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
    return t >= e.length ? ie.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, n = this.i - 2 >> 1;
    return n >= t.length && !e ? ie.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class wi {
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
    return this.empty ? n = s = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), n == this.from && s == this.to ? this : new wi(n, s, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return A.range(e, t);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return A.range(this.anchor, n);
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
    return A.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new wi(e, t, n);
  }
}
class A {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : A.create(this.ranges.map((n) => n.map(e, t)), this.mainIndex);
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
    return this.ranges.length == 1 ? this : new A([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return A.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return n[t] = e, A.create(n, this.mainIndex);
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
    return new A(e.ranges.map((t) => wi.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new A([A.range(e, t)], 0);
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
        return A.normalized(e.slice(), t);
      n = r.to;
    }
    return new A(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, n, s) {
    return wi.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (s ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, n, s) {
    let r = (n ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return t < e ? wi.create(t, e, 48 | r) : wi.create(e, t, (t > e ? 8 : 0) | r);
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
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? A.range(a, l) : A.range(l, a));
      }
    }
    return new A(e, t);
  }
}
function kd(i, e) {
  for (let t of i.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let La = 0;
class W {
  constructor(e, t, n, s, r) {
    this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = s, this.id = La++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
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
    return new W(e.combine || ((t) => t), e.compareInput || ((t, n) => t === n), e.compare || (e.combine ? (t, n) => t === n : Da), !!e.static, e.enables);
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
function Da(i, e) {
  return i == e || i.length == e.length && i.every((t, n) => t === e[n]);
}
class or {
  constructor(e, t, n, s) {
    this.dependencies = e, this.facet = t, this.type = n, this.value = s, this.id = La++;
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
        if (a && f.docChanged || c && (f.docChanged || f.selection) || bl(u, h)) {
          let d = n(u);
          if (l ? !uh(d, u.values[o], s) : !s(d, u.values[o]))
            return u.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (u, f) => {
        let d, p = f.config.address[r];
        if (p != null) {
          let g = Qr(f, p);
          if (this.dependencies.every((m) => m instanceof W ? f.facet(m) === u.facet(m) : m instanceof Ze ? f.field(m, !1) == u.field(m, !1) : !0) || (l ? uh(d = n(u), g, s) : s(d = n(u), g)))
            return u.values[o] = g, 0;
        } else
          d = n(u);
        return u.values[o] = d, 1;
      }
    };
  }
}
function uh(i, e, t) {
  if (i.length != e.length)
    return !1;
  for (let n = 0; n < i.length; n++)
    if (!t(i[n], e[n]))
      return !1;
  return !0;
}
function bl(i, e) {
  let t = !1;
  for (let n of e)
    Wn(i, n) & 1 && (t = !0);
  return t;
}
function A1(i, e, t) {
  let n = t.map((a) => i[a.id]), s = t.map((a) => a.type), r = n.filter((a) => !(a & 1)), o = i[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let h = 0; h < n.length; h++) {
      let u = Qr(a, n[h]);
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
      if (!bl(a, r))
        return 0;
      let h = l(a);
      return e.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
    },
    reconfigure(a, c) {
      let h = bl(a, n), u = c.config.facets[e.id], f = c.facet(e);
      if (u && !h && Da(t, u))
        return a.values[o] = f, 0;
      let d = l(a);
      return e.compare(d, f) ? (a.values[o] = f, 0) : (a.values[o] = d, 1);
    }
  };
}
const Ms = /* @__PURE__ */ W.define({ static: !0 });
class Ze {
  constructor(e, t, n, s, r) {
    this.id = e, this.createF = t, this.updateF = n, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new Ze(La++, e.create, e.update, e.compare || ((n, s) => n === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Ms).find((n) => n.field == this);
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
      reconfigure: (n, s) => {
        let r = n.facet(Ms), o = s.facet(Ms), l;
        return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (n.values[t] = l.create(n), 1) : s.config.address[this.id] != null ? (n.values[t] = s.field(this), 0) : (n.values[t] = this.create(n), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, Ms.of({ field: this, create: e })];
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
const vi = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Pn(i) {
  return (e) => new Pd(e, i);
}
const mi = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Pn(vi.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Pn(vi.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Pn(vi.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Pn(vi.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Pn(vi.lowest)
};
class Pd {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class on {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new vl(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return on.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class vl {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class wr {
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
    for (let f of M1(e, t, o))
      f instanceof Ze ? s.push(f) : (r[f.facet.id] || (r[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let f of s)
      l[f.id] = c.length << 1, c.push((d) => f.slot(d));
    let h = n == null ? void 0 : n.config.facets;
    for (let f in r) {
      let d = r[f], p = d[0].facet, g = h && h[f] || [];
      if (d.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, Da(g, d))
          a.push(n.facet(p));
        else {
          let m = p.combine(d.map((O) => O.value));
          a.push(n && p.compare(m, n.facet(p)) ? n.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = c.length << 1, c.push((O) => m.dynamicSlot(O)));
        l[p.id] = c.length << 1, c.push((m) => A1(m, p, d));
      }
    }
    let u = c.map((f) => f(l));
    return new wr(e, o, u, l, a, r);
  }
}
function M1(i, e, t) {
  let n = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let c = n[a].indexOf(o);
      c > -1 && n[a].splice(c, 1), o instanceof vl && t.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let c of o)
        r(c, l);
    else if (o instanceof vl) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(o.compartment) || o.inner;
      t.set(o.compartment, c), r(c, l);
    } else if (o instanceof Pd)
      r(o.inner, o.prec);
    else if (o instanceof Ze)
      n[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof or)
      n[l].push(o), o.facet.extensions && r(o.facet.extensions, vi.default);
    else {
      let c = o.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(c, l);
    }
  }
  return r(i, vi.default), n.reduce((o, l) => o.concat(l));
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
function Qr(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const $d = /* @__PURE__ */ W.define(), Sl = /* @__PURE__ */ W.define({
  combine: (i) => i.some((e) => e),
  static: !0
}), Cd = /* @__PURE__ */ W.define({
  combine: (i) => i.length ? i[0] : void 0,
  static: !0
}), Zd = /* @__PURE__ */ W.define(), Td = /* @__PURE__ */ W.define(), Ad = /* @__PURE__ */ W.define(), Md = /* @__PURE__ */ W.define({
  combine: (i) => i.length ? i[0] : !1
});
class Kt {
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
    return new R1();
  }
}
class R1 {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Kt(this, e);
  }
}
class _1 {
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
    return new Y(this, e);
  }
}
class Y {
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
    return t === void 0 ? void 0 : t == this.value ? this : new Y(this.type, t);
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
    return new _1(e.map || ((t) => t));
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
Y.reconfigure = /* @__PURE__ */ Y.define();
Y.appendConfig = /* @__PURE__ */ Y.define();
class $e {
  constructor(e, t, n, s, r, o) {
    this.startState = e, this.changes = t, this.selection = n, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, n && kd(n, t.newLength), r.some((l) => l.type == $e.time) || (this.annotations = r.concat($e.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, n, s, r, o) {
    return new $e(e, t, n, s, r, o);
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
    let t = this.annotation($e.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
$e.time = /* @__PURE__ */ Kt.define();
$e.userEvent = /* @__PURE__ */ Kt.define();
$e.addToHistory = /* @__PURE__ */ Kt.define();
$e.remote = /* @__PURE__ */ Kt.define();
function X1(i, e) {
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
function Rd(i, e, t) {
  var n;
  let s, r, o;
  return t ? (s = e.changes, r = Te.empty(e.changes.length), o = i.changes.compose(e.changes)) : (s = e.changes.map(i.changes), r = i.changes.mapDesc(e.changes, !0), o = i.changes.compose(s)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (n = i.selection) === null || n === void 0 ? void 0 : n.map(s),
    effects: Y.mapEffects(i.effects, s).concat(Y.mapEffects(e.effects, r)),
    annotations: i.annotations.length ? i.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: i.scrollIntoView || e.scrollIntoView
  };
}
function xl(i, e, t) {
  let n = e.selection, s = Ki(e.annotations);
  return e.userEvent && (s = s.concat($e.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Te ? e.changes : Te.of(e.changes || [], t, i.facet(Cd)),
    selection: n && (n instanceof A ? n : A.single(n.anchor, n.head)),
    effects: Ki(e.effects),
    annotations: s,
    scrollIntoView: !!e.scrollIntoView
  };
}
function _d(i, e, t) {
  let n = xl(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    n = Rd(n, xl(i, e[r], o ? n.changes.newLength : i.doc.length), o);
  }
  let s = $e.create(i, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return L1(t ? E1(s) : s);
}
function E1(i) {
  let e = i.startState, t = !0;
  for (let s of e.facet(Zd)) {
    let r = s(i);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : X1(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1)
      r = i.changes.invertedDesc, s = Te.empty(e.doc.length);
    else {
      let o = i.changes.filter(t);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    i = $e.create(e, s, i.selection && i.selection.map(r), Y.mapEffects(i.effects, r), i.annotations, i.scrollIntoView);
  }
  let n = e.facet(Td);
  for (let s = n.length - 1; s >= 0; s--) {
    let r = n[s](i);
    r instanceof $e ? i = r : Array.isArray(r) && r.length == 1 && r[0] instanceof $e ? i = r[0] : i = _d(e, Ki(r), !1);
  }
  return i;
}
function L1(i) {
  let e = i.startState, t = e.facet(Ad), n = i;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](i);
    r && Object.keys(r).length && (n = Rd(n, xl(e, r, i.changes.newLength), !0));
  }
  return n == i ? i : $e.create(e, i.changes, i.selection, n.effects, n.annotations, n.scrollIntoView);
}
const D1 = [];
function Ki(i) {
  return i == null ? D1 : Array.isArray(i) ? i : [i];
}
var me = /* @__PURE__ */ function(i) {
  return i[i.Word = 0] = "Word", i[i.Space = 1] = "Space", i[i.Other = 2] = "Other", i;
}(me || (me = {}));
const j1 = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let wl;
try {
  wl = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function B1(i) {
  if (wl)
    return wl.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || j1.test(t)))
      return !0;
  }
  return !1;
}
function V1(i) {
  return (e) => {
    if (!/\S/.test(e))
      return me.Space;
    if (B1(e))
      return me.Word;
    for (let t = 0; t < i.length; t++)
      if (e.indexOf(i[t]) > -1)
        return me.Word;
    return me.Other;
  };
}
class H {
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
    return Wn(this, n), Qr(this, n);
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
      l.is(on.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((a, c) => s.set(c, a)), t = null), s.set(l.value.compartment, l.value.extension)) : l.is(Y.reconfigure) ? (t = null, n = l.value) : l.is(Y.appendConfig) && (t = null, n = Ki(n).concat(l.value));
    let r;
    t ? r = e.startState.values.slice() : (t = wr.resolve(n, s, this), r = new H(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, c) => c.reconfigure(a, this), null).values);
    let o = e.startState.facet(Sl) ? e.newSelection : e.newSelection.asSingle();
    new H(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: A.cursor(t.from + e.length)
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
    let t = this.selection, n = e(t.ranges[0]), s = this.changes(n.changes), r = [n.range], o = Ki(n.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), c = this.changes(a.changes), h = c.map(s);
      for (let f = 0; f < l; f++)
        r[f] = r[f].map(h);
      let u = s.mapDesc(c, !0);
      r.push(a.range.map(u)), s = s.compose(h), o = Y.mapEffects(o, h).concat(Y.mapEffects(Ki(a.effects), u));
    }
    return {
      changes: s,
      selection: A.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof Te ? e : Te.of(e, this.doc.length, this.facet(H.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return ie.of(e.split(this.facet(H.lineSeparator) || gl));
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
    return t == null ? e.default : (Wn(this, t), Qr(this, t));
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
        s instanceof Ze && this.config.address[s.id] != null && (t[n] = s.spec.toJSON(this.field(e[n]), this));
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
    return H.create({
      doc: e.doc,
      selection: A.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = wr.resolve(e.extensions || [], /* @__PURE__ */ new Map()), n = e.doc instanceof ie ? e.doc : ie.of((e.doc || "").split(t.staticFacet(H.lineSeparator) || gl)), s = e.selection ? e.selection instanceof A ? e.selection : A.single(e.selection.anchor, e.selection.head) : A.single(0);
    return kd(s, n.length), t.staticFacet(Sl) || (s = s.asSingle()), new H(t, n, s, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(H.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(H.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Md);
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
    for (let n of this.facet(H.phrases))
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
    for (let r of this.facet($d))
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
    return V1(this.languageDataAt("wordChars", e).join(""));
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
      let a = De(t, o, !1);
      if (r(t.slice(a, o)) != me.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = De(t, l);
      if (r(t.slice(l, a)) != me.Word)
        break;
      l = a;
    }
    return o == l ? null : A.range(o + n, l + n);
  }
}
H.allowMultipleSelections = Sl;
H.tabSize = /* @__PURE__ */ W.define({
  combine: (i) => i.length ? i[0] : 4
});
H.lineSeparator = Cd;
H.readOnly = Md;
H.phrases = /* @__PURE__ */ W.define({
  compare(i, e) {
    let t = Object.keys(i), n = Object.keys(e);
    return t.length == n.length && t.every((s) => i[s] == e[s]);
  }
});
H.languageData = $d;
H.changeFilter = Zd;
H.transactionFilter = Td;
H.transactionExtender = Ad;
on.reconfigure = /* @__PURE__ */ Y.define();
function St(i, e, t = {}) {
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
class Ri {
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
    return Ql.create(e, t, this);
  }
}
Ri.prototype.startSide = Ri.prototype.endSide = 0;
Ri.prototype.point = !1;
Ri.prototype.mapMode = Le.TrackDel;
let Ql = class Xd {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.value = n;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Xd(e, t, n);
  }
};
function kl(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class ja {
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
    return { mapped: n.length ? new ja(s, r, n, l) : null, pos: o };
  }
}
class ee {
  constructor(e, t, n, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = s;
  }
  /**
  @internal
  */
  static create(e, t, n, s) {
    return new ee(e, t, n, s);
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
      return t.length ? ee.of(t) : this;
    let l = new Ed(this, null, -1).goto(0), a = 0, c = [], h = new Gt();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let u = t[a++];
        h.addInner(u.from, u.to, u.value) || c.push(u);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || c.push(Ql.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !c.length ? ee.empty : this.nextLayer.update({ add: c, filter: o, filterFrom: s, filterTo: r }));
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
    return t.length == 0 ? r : new ee(n, t, r || ee.empty, s);
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
    return Jn.from([this]).goto(e);
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
    return Jn.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, n, s, r = -1) {
    let o = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= r), l = t.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= r), a = fh(o, l, n), c = new $n(o, a, r), h = new $n(l, a, r);
    n.iterGaps((u, f, d) => dh(c, u, h, f, d, s)), n.empty && n.length == 0 && dh(c, 0, h, 0, 0, s);
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
    let l = fh(r, o), a = new $n(r, l, 0).goto(n), c = new $n(o, l, 0).goto(n);
    for (; ; ) {
      if (a.to != c.to || !Pl(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point)))
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
    let o = new $n(e, null, r).goto(t), l = t, a = o.openStart;
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
    let n = new Gt();
    for (let s of e instanceof Ql ? [e] : t ? q1(e) : e)
      n.add(s.from, s.to, s.value);
    return n.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return ee.empty;
    let t = e[e.length - 1];
    for (let n = e.length - 2; n >= 0; n--)
      for (let s = e[n]; s != ee.empty; s = s.nextLayer)
        t = new ee(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
ee.empty = /* @__PURE__ */ new ee([], [], null, -1);
function q1(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let n = i[t];
      if (kl(e, n) > 0)
        return i.slice().sort(kl);
      e = n;
    }
  return i;
}
ee.empty.nextLayer = ee.empty;
class Gt {
  finishChunk(e) {
    this.chunks.push(new ja(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new Gt())).add(e, t, n);
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
    return this.finishInner(ee.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = ee.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function fh(i, e, t) {
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
class Ed {
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
class Jn {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && s.push(new Ed(o, t, n, r));
    return s.length == 1 ? s[0] : new Jn(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap)
      n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Mo(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap)
      n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Mo(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Mo(this.heap, 0);
    }
  }
}
function Mo(i, e) {
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
class $n {
  constructor(e, t, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Jn.from(e, t, n);
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
    Rs(this.active, e), Rs(this.activeTo, e), Rs(this.activeRank, e), this.minActive = ph(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: n, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0; )
      t++;
    _s(this.active, t, n), _s(this.activeTo, t, s), _s(this.activeRank, t, r), e && _s(e, t, this.cursor.from), this.minActive = ph(this.active, this.activeTo);
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
        this.removeActive(s), n && Rs(n, s);
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
function dh(i, e, t, n, s, r) {
  i.goto(e), t.goto(n);
  let o = n + s, l = n, a = n - e;
  for (; ; ) {
    let c = i.to + a - t.to, h = c || i.endSide - t.endSide, u = h < 0 ? i.to + a : t.to, f = Math.min(u, o);
    if (i.point || t.point ? i.point && t.point && (i.point == t.point || i.point.eq(t.point)) && Pl(i.activeForPoint(i.to), t.activeForPoint(t.to)) || r.comparePoint(l, f, i.point, t.point) : f > l && !Pl(i.active, t.active) && r.compareRange(l, f, i.active, t.active), u > o)
      break;
    (c || i.openEnd != t.openEnd) && r.boundChange && r.boundChange(u), l = u, h <= 0 && i.next(), h >= 0 && t.next();
  }
}
function Pl(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] != e[t] && !i[t].eq(e[t]))
      return !1;
  return !0;
}
function Rs(i, e) {
  for (let t = e, n = i.length - 1; t < n; t++)
    i[t] = i[t + 1];
  i.pop();
}
function _s(i, e, t) {
  for (let n = i.length - 1; n >= e; n--)
    i[n + 1] = i[n];
  i[e] = t;
}
function ph(i, e) {
  let t = -1, n = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - n || i[s].endSide - i[t].endSide) < 0 && (t = s, n = e[s]);
  return t;
}
function yn(i, e, t = i.length) {
  let n = 0;
  for (let s = 0; s < t && s < i.length; )
    i.charCodeAt(s) == 9 ? (n += e - n % e, s++) : (n++, s = De(i, s));
  return n;
}
function $l(i, e, t, n) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e)
      return s;
    if (s == i.length)
      break;
    r += i.charCodeAt(s) == 9 ? t - r % t : 1, s = De(i, s);
  }
  return n === !0 ? -1 : i.length;
}
const Cl = "ͼ", Oh = typeof Symbol > "u" ? "__" + Cl : Symbol.for(Cl), Zl = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), gh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class hi {
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
            d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!u) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(s(d), p, h, f);
        } else p != null && h.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
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
    let e = gh[Oh] || 1;
    return gh[Oh] = e + 1, Cl + e.toString(36);
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
    let s = e[Zl], r = n && n.nonce;
    s ? r && s.setNonce(r) : s = new W1(e, r), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let mh = /* @__PURE__ */ new Map();
class W1 {
  constructor(e, t) {
    let n = e.ownerDocument || e, s = n.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = mh.get(n);
      if (r) return e[Zl] = r;
      this.sheet = new s.CSSStyleSheet(), mh.set(n, this);
    } else
      this.styleTag = n.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[Zl] = this;
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
var ui = {
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
}, es = {
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
}, I1 = typeof navigator < "u" && /Mac/.test(navigator.platform), z1 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ee = 0; Ee < 10; Ee++) ui[48 + Ee] = ui[96 + Ee] = String(Ee);
for (var Ee = 1; Ee <= 24; Ee++) ui[Ee + 111] = "F" + Ee;
for (var Ee = 65; Ee <= 90; Ee++)
  ui[Ee] = String.fromCharCode(Ee + 32), es[Ee] = String.fromCharCode(Ee);
for (var Ro in ui) es.hasOwnProperty(Ro) || (es[Ro] = ui[Ro]);
function N1(i) {
  var e = I1 && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey || z1 && i.shiftKey && i.key && i.key.length == 1 || i.key == "Unidentified", t = !e && i.key || (i.shiftKey ? es : ui)[i.keyCode] || i.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function ts(i) {
  let e;
  return i.nodeType == 11 ? e = i.getSelection ? i : i.ownerDocument : e = i, e.getSelection();
}
function Tl(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function lr(i, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Tl(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function ln(i) {
  return i.nodeType == 3 ? Xi(i, 0, i.nodeValue.length).getClientRects() : i.nodeType == 1 ? i.getClientRects() : [];
}
function In(i, e, t, n) {
  return t ? yh(i, e, t, n, -1) || yh(i, e, t, n, 1) : !1;
}
function _i(i) {
  for (var e = 0; ; e++)
    if (i = i.previousSibling, !i)
      return e;
}
function kr(i) {
  return i.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName);
}
function yh(i, e, t, n, s) {
  for (; ; ) {
    if (i == t && e == n)
      return !0;
    if (e == (s < 0 ? 0 : Dt(i))) {
      if (i.nodeName == "DIV")
        return !1;
      let r = i.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = _i(i) + (s < 0 ? 0 : 1), i = r;
    } else if (i.nodeType == 1) {
      if (i = i.childNodes[e + (s < 0 ? -1 : 0)], i.nodeType == 1 && i.contentEditable == "false")
        return !1;
      e = s < 0 ? Dt(i) : 0;
    } else
      return !1;
  }
}
function Dt(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function vs(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function U1(i) {
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
function Ld(i, e) {
  let t = e.width / i.offsetWidth, n = e.height / i.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - i.offsetWidth) < 1) && (t = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(e.height - i.offsetHeight) < 1) && (n = 1), { scaleX: t, scaleY: n };
}
function Y1(i, e, t, n, s, r, o, l) {
  let a = i.ownerDocument, c = a.defaultView || window;
  for (let h = i, u = !1; h && !u; )
    if (h.nodeType == 1) {
      let f, d = h == a.body, p = 1, g = 1;
      if (d)
        f = U1(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (u = !0), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
          h = h.assignedSlot || h.parentNode;
          continue;
        }
        let x = h.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = Ld(h, x)), f = {
          left: x.left,
          right: x.left + h.clientWidth * p,
          top: x.top,
          bottom: x.top + h.clientHeight * g
        };
      }
      let m = 0, O = 0;
      if (s == "nearest")
        e.top < f.top ? (O = -(f.top - e.top + o), t > 0 && e.bottom > f.bottom + O && (O = e.bottom - f.bottom + O + o)) : e.bottom > f.bottom && (O = e.bottom - f.bottom + o, t < 0 && e.top - O < f.top && (O = -(f.top + O - e.top + o)));
      else {
        let x = e.bottom - e.top, w = f.bottom - f.top;
        O = (s == "center" && x <= w ? e.top + x / 2 - w / 2 : s == "start" || s == "center" && t < 0 ? e.top - o : e.bottom - w + o) - f.top;
      }
      if (n == "nearest" ? e.left < f.left ? (m = -(f.left - e.left + r), t > 0 && e.right > f.right + m && (m = e.right - f.right + m + r)) : e.right > f.right && (m = e.right - f.right + r, t < 0 && e.left < f.left + m && (m = -(f.left + m - e.left + r))) : m = (n == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : n == "start" == l ? e.left - r : e.right - (f.right - f.left) + r) - f.left, m || O)
        if (d)
          c.scrollBy(m, O);
        else {
          let x = 0, w = 0;
          if (O) {
            let P = h.scrollTop;
            h.scrollTop += O / g, w = (h.scrollTop - P) * g;
          }
          if (m) {
            let P = h.scrollLeft;
            h.scrollLeft += m / p, x = (h.scrollLeft - P) * p;
          }
          e = {
            left: e.left - x,
            top: e.top - w,
            right: e.right - x,
            bottom: e.bottom - w
          }, x && Math.abs(x - m) < 1 && (n = "nearest"), w && Math.abs(w - O) < 1 && (s = "nearest");
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
    this.set(t, Math.min(e.anchorOffset, t ? Dt(t) : 0), n, Math.min(e.focusOffset, n ? Dt(n) : 0));
  }
  set(e, t, n, s) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = s;
  }
}
let zi = null;
function Dd(i) {
  if (i.setActive)
    return i.setActive();
  if (zi)
    return i.focus(zi);
  let e = [];
  for (let t = i; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (i.focus(zi == null ? {
    get preventScroll() {
      return zi = { preventScroll: !0 }, !0;
    }
  } : void 0), !zi) {
    zi = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++], s = e[t++], r = e[t++];
      n.scrollTop != s && (n.scrollTop = s), n.scrollLeft != r && (n.scrollLeft = r);
    }
  }
}
let bh;
function Xi(i, e, t = e) {
  let n = bh || (bh = document.createRange());
  return n.setEnd(i, t), n.setStart(i, e), n;
}
function Ji(i, e, t, n) {
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
function jd(i) {
  for (; i.attributes.length; )
    i.removeAttributeNode(i.attributes[0]);
}
function K1(i, e) {
  let t = e.focusNode, n = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != n)
    return !1;
  for (n = Math.min(n, Dt(t)); ; )
    if (n) {
      if (t.nodeType != 1)
        return !1;
      let s = t.childNodes[n - 1];
      s.contentEditable == "false" ? n-- : (t = s, n = Dt(t));
    } else {
      if (t == i)
        return !0;
      n = _i(t), t = t.parentNode;
    }
}
function Bd(i) {
  return i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function Vd(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n > 0)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n - 1], n = Dt(t);
    } else if (t.parentNode && !kr(t))
      n = _i(t), t = t.parentNode;
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
    } else if (t.parentNode && !kr(t))
      n = _i(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class Be {
  constructor(e, t, n = !0) {
    this.node = e, this.offset = t, this.precise = n;
  }
  static before(e, t) {
    return new Be(e.parentNode, _i(e), t);
  }
  static after(e, t) {
    return new Be(e.parentNode, _i(e) + 1, t);
  }
}
const Ba = [];
class ce {
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
            let l = ce.get(r);
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
      let s = Dt(e) == 0 ? 0 : t == 0 ? -1 : 1;
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
    for (; n && !ce.get(n); )
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
  replaceChildren(e, t, n = Ba) {
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
    return new Wd(this.children, e, this.children.length);
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
ce.prototype.breakAfter = 0;
function vh(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class Wd {
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
function Id(i, e, t, n, s, r, o, l, a) {
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
function zd(i, e, t, n, s, r) {
  let o = i.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: c, off: h } = o.findPos(e, -1), u = e - t;
  for (let f of n)
    u += f.length;
  i.length += u, Id(i, c, h, l, a, n, 0, s, r);
}
let He = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Al = typeof document < "u" ? document : { documentElement: { style: {} } };
const Ml = /* @__PURE__ */ /Edge\/(\d+)/.exec(He.userAgent), Nd = /* @__PURE__ */ /MSIE \d/.test(He.userAgent), Rl = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(He.userAgent), so = !!(Nd || Rl || Ml), Sh = !so && /* @__PURE__ */ /gecko\/(\d+)/i.test(He.userAgent), _o = !so && /* @__PURE__ */ /Chrome\/(\d+)/.exec(He.userAgent), xh = "webkitFontSmoothing" in Al.documentElement.style, Ud = !so && /* @__PURE__ */ /Apple Computer/.test(He.vendor), wh = Ud && (/* @__PURE__ */ /Mobile\/\w+/.test(He.userAgent) || He.maxTouchPoints > 2);
var q = {
  mac: wh || /* @__PURE__ */ /Mac/.test(He.platform),
  windows: /* @__PURE__ */ /Win/.test(He.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(He.platform),
  ie: so,
  ie_version: Nd ? Al.documentMode || 6 : Rl ? +Rl[1] : Ml ? +Ml[1] : 0,
  gecko: Sh,
  gecko_version: Sh ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(He.userAgent) || [0, 0])[1] : 0,
  chrome: !!_o,
  chrome_version: _o ? +_o[1] : 0,
  ios: wh,
  android: /* @__PURE__ */ /Android\b/.test(He.userAgent),
  webkit: xh,
  safari: Ud,
  webkit_version: xh ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(He.userAgent) || [0, 0])[1] : 0,
  tabSize: Al.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const J1 = 256;
class mt extends ce {
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
    return this.flags & 8 || n && (!(n instanceof mt) || this.length - (t - e) + n.length > J1 || n.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (n ? n.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new mt(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new Be(this.dom, e);
  }
  domBoundsAround(e, t, n) {
    return { from: n, to: n + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return ey(this.dom, e, t);
  }
}
class Ft extends ce {
  constructor(e, t = [], n = 0) {
    super(), this.mark = e, this.children = t, this.length = n;
    for (let s of t)
      s.setParent(this);
  }
  setAttrs(e) {
    if (jd(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
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
    return n && (!(n instanceof Ft && n.mark.eq(this.mark)) || e && r <= 0 || t < this.length && o <= 0) ? !1 : (zd(this, e, t, n ? n.children.slice() : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], n = 0, s = -1, r = 0;
    for (let l of this.children) {
      let a = n + l.length;
      a > e && t.push(n < e ? l.split(e - n) : l), s < 0 && n >= e && (s = r), n = a, r++;
    }
    let o = this.length - e;
    return this.length = e, s > -1 && (this.children.length = s, this.markDirty()), new Ft(this.mark, t, o);
  }
  domAtPos(e) {
    return Yd(this, e);
  }
  coordsAt(e, t) {
    return Fd(this, e, t);
  }
}
function ey(i, e, t) {
  let n = i.nodeValue.length;
  e > n && (e = n);
  let s = e, r = e, o = 0;
  e == 0 && t < 0 || e == n && t >= 0 ? q.chrome || q.gecko || (e ? (s--, o = 1) : r < n && (r++, o = -1)) : t < 0 ? s-- : r < n && r++;
  let l = Xi(i, s, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return q.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), o ? vs(a, o < 0) : a || null;
}
class li extends ce {
  static create(e, t, n) {
    return new li(e, t, n);
  }
  constructor(e, t, n) {
    super(), this.widget = e, this.length = t, this.side = n, this.prevWidget = null;
  }
  split(e) {
    let t = li.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, n, s, r, o) {
    return n && (!(n instanceof li) || !this.widget.compare(n.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (n ? n.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof li && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return ie.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, n = t && t.state.doc, s = this.posAtStart;
    return n ? n.slice(s, s + this.length) : ie.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? Be.before(this.dom) : Be.after(this.dom, e == this.length);
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
    return vs(r, !o);
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
class an extends ce {
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
    return e instanceof an && e.side == this.side;
  }
  split() {
    return new an(this.side);
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
    return this.side > 0 ? Be.before(this.dom) : Be.after(this.dom);
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
    return ie.empty;
  }
  get isHidden() {
    return !0;
  }
}
mt.prototype.children = li.prototype.children = an.prototype.children = Ba;
function Yd(i, e) {
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
  return new Be(t, 0);
}
function Gd(i, e, t) {
  let n, { children: s } = i;
  t > 0 && e instanceof Ft && s.length && (n = s[s.length - 1]) instanceof Ft && n.mark.eq(e.mark) ? Gd(n, e.children[0], t - 1) : (s.push(e), e.setParent(i)), i.length += e.length;
}
function Fd(i, e, t) {
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
  let t = ln(e);
  return t[t.length - 1] || null;
}
function _l(i, e) {
  for (let t in i)
    t == "class" && e.class ? e.class += " " + i.class : t == "style" && e.style ? e.style += ";" + i.style : e[t] = i[t];
  return e;
}
const Qh = /* @__PURE__ */ Object.create(null);
function Pr(i, e, t) {
  if (i == e)
    return !0;
  i || (i = Qh), e || (e = Qh);
  let n = Object.keys(i), s = Object.keys(e);
  if (n.length - (t && n.indexOf(t) > -1 ? 1 : 0) != s.length - (t && s.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let r of n)
    if (r != t && (s.indexOf(r) == -1 || i[r] !== e[r]))
      return !1;
  return !0;
}
function Xl(i, e, t) {
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
var Ne = /* @__PURE__ */ function(i) {
  return i[i.Text = 0] = "Text", i[i.WidgetBefore = 1] = "WidgetBefore", i[i.WidgetAfter = 2] = "WidgetAfter", i[i.WidgetRange = 3] = "WidgetRange", i;
}(Ne || (Ne = {}));
class N extends Ri {
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
    return new Ss(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), n = !!e.block;
    return t += n && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new fi(e, t, t, n, e.widget || null, !1);
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
      let { start: r, end: o } = Hd(e, t);
      n = (r ? t ? -3e8 : -1 : 5e8) - 1, s = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new fi(e, n, s, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new xs(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return ee.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
N.none = ee.empty;
class Ss extends N {
  constructor(e) {
    let { start: t, end: n } = Hd(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, n;
    return this == e || e instanceof Ss && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((n = e.attrs) === null || n === void 0 ? void 0 : n.class)) && Pr(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
Ss.prototype.point = !1;
class xs extends N {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof xs && this.spec.class == e.spec.class && Pr(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
xs.prototype.mapMode = Le.TrackBefore;
xs.prototype.point = !0;
class fi extends N {
  constructor(e, t, n, s, r, o) {
    super(t, n, r, e), this.block = s, this.isReplace = o, this.mapMode = s ? t <= 0 ? Le.TrackBefore : Le.TrackAfter : Le.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? Ne.WidgetRange : this.startSide <= 0 ? Ne.WidgetBefore : Ne.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof fi && ny(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
fi.prototype.point = !0;
function Hd(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = i;
  return t == null && (t = i.inclusive), n == null && (n = i.inclusive), { start: t ?? e, end: n ?? e };
}
function ny(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function ar(i, e, t, n = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + n >= i ? t[s] = Math.max(t[s], e) : t.push(i, e);
}
class Pe extends ce {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, n, s, r, o) {
    if (n) {
      if (!(n instanceof Pe))
        return !1;
      this.dom || n.transferDOM(this);
    }
    return s && this.setDeco(n ? n.attrs : null), zd(this, e, t, n ? n.children.slice() : [], r, o), !0;
  }
  split(e) {
    let t = new Pe();
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
    Pr(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    Gd(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, n = e.spec.class;
    t && (this.attrs = _l(t, this.attrs || {})), n && (this.attrs = _l({ class: n }, this.attrs || {}));
  }
  domAtPos(e) {
    return Yd(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var n;
    this.dom ? this.flags & 4 && (jd(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Xl(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && ce.get(s) instanceof Ft; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((n = ce.get(s)) === null || n === void 0 ? void 0 : n.isEditable) == !1 && (!q.ios || !this.children.some((r) => r instanceof mt))) {
      let r = document.createElement("BR");
      r.cmIgnore = !0, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let n of this.children) {
      if (!(n instanceof mt) || /[^ -~]/.test(n.text))
        return null;
      let s = ln(n.dom);
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
    let n = Fd(this, e, t);
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
    return e instanceof Pe && this.children.length == 0 && e.children.length == 0 && Pr(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let n = 0, s = 0; n < e.children.length; n++) {
      let r = e.children[n], o = s + r.length;
      if (o >= t) {
        if (r instanceof Pe)
          return r;
        if (o > t)
          break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class Yt extends ce {
  constructor(e, t, n) {
    super(), this.widget = e, this.length = t, this.deco = n, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, n, s, r, o) {
    return n && (!(n instanceof Yt) || !this.widget.compare(n.widget) || e > 0 && r <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (n ? n.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? Be.before(this.dom) : Be.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let n = new Yt(this.widget, t, this.deco);
    return n.breakAfter = this.breakAfter, n;
  }
  get children() {
    return Ba;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : ie.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof Yt && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
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
    return n || (this.widget instanceof El ? null : vs(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: n } = this.deco;
    return t == n ? !1 : e < 0 ? t < 0 : n > 0;
  }
}
class El extends Bt {
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
class zn {
  constructor(e, t, n, s) {
    this.doc = e, this.pos = t, this.end = n, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof Yt && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new Pe()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Xs(new an(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof Yt) && this.getLine();
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
      this.flushBuffer(t.slice(t.length - n)), this.getLine().append(Xs(new mt(this.text.slice(this.textOff, this.textOff + s)), t), n), this.atCursorPos = !0, this.textOff += s, e -= s, n = 0;
    }
  }
  span(e, t, n, s) {
    this.buildText(t - e, n, s), this.pos = t, this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, n, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && n instanceof fi) {
      if (n.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (n instanceof fi)
      if (n.block)
        n.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Yt(n.widget || cn.block, l, n));
      else {
        let a = li.create(n.widget || cn.inline, l, l ? 0 : n.startSide), c = this.atCursorPos && !a.isEditable && r <= s.length && (e < t || n.startSide > 0), h = !a.isEditable && (e < t || r > s.length || n.startSide <= 0), u = this.getLine();
        this.pendingBuffer == 2 && !c && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), c && (u.append(Xs(new an(1), s), r), r = s.length + Math.max(0, r - s.length)), u.append(Xs(a, s), r), this.atCursorPos = h, this.pendingBuffer = h ? e < t || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, n, s, r) {
    let o = new zn(e, t, n, r);
    return o.openEnd = ee.spans(s, t, n, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Xs(i, e) {
  for (let t of e)
    i = new Ft(t, [i], i.length);
  return i;
}
class cn extends Bt {
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
cn.inline = /* @__PURE__ */ new cn("span");
cn.block = /* @__PURE__ */ new cn("div");
var ge = /* @__PURE__ */ function(i) {
  return i[i.LTR = 0] = "LTR", i[i.RTL = 1] = "RTL", i;
}(ge || (ge = {}));
const Ei = ge.LTR, Va = ge.RTL;
function Kd(i) {
  let e = [];
  for (let t = 0; t < i.length; t++)
    e.push(1 << +i[t]);
  return e;
}
const sy = /* @__PURE__ */ Kd("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), ry = /* @__PURE__ */ Kd("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Ll = /* @__PURE__ */ Object.create(null), wt = [];
for (let i of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ i.charCodeAt(0), t = /* @__PURE__ */ i.charCodeAt(1);
  Ll[e] = t, Ll[t] = -e;
}
function Jd(i) {
  return i <= 247 ? sy[i] : 1424 <= i && i <= 1524 ? 2 : 1536 <= i && i <= 1785 ? ry[i - 1536] : 1774 <= i && i <= 2220 ? 4 : 8192 <= i && i <= 8204 ? 256 : 64336 <= i && i <= 65023 ? 4 : 1;
}
const oy = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class ai {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Va : Ei;
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
function ep(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++) {
    let n = i[t], s = e[t];
    if (n.from != s.from || n.to != s.to || n.direction != s.direction || !ep(n.inner, s.inner))
      return !1;
  }
  return !0;
}
const le = [];
function ly(i, e, t, n, s) {
  for (let r = 0; r <= n.length; r++) {
    let o = r ? n[r - 1].to : e, l = r < n.length ? n[r].from : t, a = r ? 256 : s;
    for (let c = o, h = a, u = a; c < l; c++) {
      let f = Jd(i.charCodeAt(c));
      f == 512 ? f = h : f == 8 && u == 4 && (f = 16), le[c] = f == 4 ? 2 : f, f & 7 && (u = f), h = f;
    }
    for (let c = o, h = a, u = a; c < l; c++) {
      let f = le[c];
      if (f == 128)
        c < l - 1 && h == le[c + 1] && h & 24 ? f = le[c] = h : le[c] = 256;
      else if (f == 64) {
        let d = c + 1;
        for (; d < l && le[d] == 64; )
          d++;
        let p = c && h == 8 || d < t && le[d] == 8 ? u == 1 ? 1 : 8 : 256;
        for (let g = c; g < d; g++)
          le[g] = p;
        c = d - 1;
      } else f == 8 && u == 1 && (le[c] = 1);
      h = f, f & 7 && (u = f);
    }
  }
}
function ay(i, e, t, n, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
    let c = o ? n[o - 1].to : e, h = o < n.length ? n[o].from : t;
    for (let u = c, f, d, p; u < h; u++)
      if (d = Ll[f = i.charCodeAt(u)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (wt[g + 1] == -d) {
              let m = wt[g + 2], O = m & 2 ? s : m & 4 ? m & 1 ? r : s : 0;
              O && (le[u] = le[wt[g]] = O), l = g;
              break;
            }
        } else {
          if (wt.length == 189)
            break;
          wt[l++] = u, wt[l++] = f, wt[l++] = a;
        }
      else if ((p = le[u]) == 2 || p == 1) {
        let g = p == s;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let O = wt[m + 2];
          if (O & 2)
            break;
          if (g)
            wt[m + 2] |= 2;
          else {
            if (O & 4)
              break;
            wt[m + 2] |= 4;
          }
        }
      }
  }
}
function cy(i, e, t, n) {
  for (let s = 0, r = n; s <= t.length; s++) {
    let o = s ? t[s - 1].to : i, l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let c = le[a];
      if (c == 256) {
        let h = a + 1;
        for (; ; )
          if (h == l) {
            if (s == t.length)
              break;
            h = t[s++].to, l = s < t.length ? t[s].from : e;
          } else if (le[h] == 256)
            h++;
          else
            break;
        let u = r == 1, f = (h < e ? le[h] : n) == 1, d = u == f ? u ? 1 : 2 : n;
        for (let p = h, g = s, m = g ? t[g - 1].to : i; p > a; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : i), le[--p] = d;
        a = h;
      } else
        r = c, a++;
    }
  }
}
function Dl(i, e, t, n, s, r, o) {
  let l = n % 2 ? 2 : 1;
  if (n % 2 == s % 2)
    for (let a = e, c = 0; a < t; ) {
      let h = !0, u = !1;
      if (c == r.length || a < r[c].from) {
        let g = le[a];
        g != l && (h = !1, u = g == 16);
      }
      let f = !h && l == 1 ? [] : null, d = h ? n : n + 1, p = a;
      e: for (; ; )
        if (c < r.length && p == r[c].from) {
          if (u)
            break e;
          let g = r[c];
          if (!h)
            for (let m = g.to, O = c + 1; ; ) {
              if (m == t)
                break e;
              if (O < r.length && r[O].from == m)
                m = r[O++].to;
              else {
                if (le[m] == l)
                  break e;
                break;
              }
            }
          if (c++, f)
            f.push(g);
          else {
            g.from > a && o.push(new ai(a, g.from, d));
            let m = g.direction == Ei != !(d % 2);
            jl(i, m ? n + 1 : n, s, g.inner, g.from, g.to, o), a = g.to;
          }
          p = g.to;
        } else {
          if (p == t || (h ? le[p] != l : le[p] == l))
            break;
          p++;
        }
      f ? Dl(i, a, p, n + 1, s, f, o) : a < p && o.push(new ai(a, p, d)), a = p;
    }
  else
    for (let a = t, c = r.length; a > e; ) {
      let h = !0, u = !1;
      if (!c || a > r[c - 1].to) {
        let g = le[a - 1];
        g != l && (h = !1, u = g == 16);
      }
      let f = !h && l == 1 ? [] : null, d = h ? n : n + 1, p = a;
      e: for (; ; )
        if (c && p == r[c - 1].to) {
          if (u)
            break e;
          let g = r[--c];
          if (!h)
            for (let m = g.from, O = c; ; ) {
              if (m == e)
                break e;
              if (O && r[O - 1].to == m)
                m = r[--O].from;
              else {
                if (le[m - 1] == l)
                  break e;
                break;
              }
            }
          if (f)
            f.push(g);
          else {
            g.to < a && o.push(new ai(g.to, a, d));
            let m = g.direction == Ei != !(d % 2);
            jl(i, m ? n + 1 : n, s, g.inner, g.from, g.to, o), a = g.from;
          }
          p = g.from;
        } else {
          if (p == e || (h ? le[p - 1] != l : le[p - 1] == l))
            break;
          p--;
        }
      f ? Dl(i, p, a, n + 1, s, f, o) : p < a && o.push(new ai(p, a, d)), a = p;
    }
}
function jl(i, e, t, n, s, r, o) {
  let l = e % 2 ? 2 : 1;
  ly(i, s, r, n, l), ay(i, s, r, n, l), cy(s, r, n, l), Dl(i, s, r, e, t, n, o);
}
function hy(i, e, t) {
  if (!i)
    return [new ai(0, 0, e == Va ? 1 : 0)];
  if (e == Ei && !t.length && !oy.test(i))
    return tp(i.length);
  if (t.length)
    for (; i.length > le.length; )
      le[le.length] = 256;
  let n = [], s = e == Ei ? 0 : 1;
  return jl(i, s, s, t, 0, i.length, n), n;
}
function tp(i) {
  return [new ai(0, i, 0)];
}
let ip = "";
function uy(i, e, t, n, s) {
  var r;
  let o = n.head - i.from, l = ai.find(e, o, (r = n.bidiLevel) !== null && r !== void 0 ? r : -1, n.assoc), a = e[l], c = a.side(s, t);
  if (o == c) {
    let f = l += s ? 1 : -1;
    if (f < 0 || f >= e.length)
      return null;
    a = e[l = f], o = a.side(!s, t), c = a.side(s, t);
  }
  let h = De(i.text, o, a.forward(s, t));
  (h < a.from || h > a.to) && (h = c), ip = i.text.slice(Math.min(o, h), Math.max(o, h));
  let u = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return u && h == c && u.level + (s ? 0 : 1) < a.level ? A.cursor(u.side(!s, t) + i.from, u.forward(s, t) ? 1 : -1, u.level) : A.cursor(h + i.from, a.forward(s, t) ? -1 : 1, a.level);
}
function fy(i, e, t) {
  for (let n = e; n < t; n++) {
    let s = Jd(i.charCodeAt(n));
    if (s == 1)
      return Ei;
    if (s == 2 || s == 4)
      return Va;
  }
  return Ei;
}
const np = /* @__PURE__ */ W.define(), sp = /* @__PURE__ */ W.define(), rp = /* @__PURE__ */ W.define(), op = /* @__PURE__ */ W.define(), Bl = /* @__PURE__ */ W.define(), lp = /* @__PURE__ */ W.define(), ap = /* @__PURE__ */ W.define(), qa = /* @__PURE__ */ W.define(), Wa = /* @__PURE__ */ W.define(), cp = /* @__PURE__ */ W.define({
  combine: (i) => i.some((e) => e)
}), hp = /* @__PURE__ */ W.define({
  combine: (i) => i.some((e) => e)
}), up = /* @__PURE__ */ W.define();
class en {
  constructor(e, t = "nearest", n = "nearest", s = 5, r = 5, o = !1) {
    this.range = e, this.y = t, this.x = n, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new en(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new en(A.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Es = /* @__PURE__ */ Y.define({ map: (i, e) => i.map(e) }), fp = /* @__PURE__ */ Y.define();
function ze(i, e, t) {
  let n = i.facet(op);
  n.length ? n[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const Nt = /* @__PURE__ */ W.define({ combine: (i) => i.length ? i[0] : !0 });
let dy = 0;
const Xn = /* @__PURE__ */ W.define();
class Se {
  constructor(e, t, n, s, r) {
    this.id = e, this.create = t, this.domEventHandlers = n, this.domEventObservers = s, this.extension = r(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: n, eventObservers: s, provide: r, decorations: o } = t || {};
    return new Se(dy++, e, n, s, (l) => {
      let a = [Xn.of(l)];
      return o && a.push(is.of((c) => {
        let h = c.plugin(l);
        return h ? o(h) : N.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Se.define((n) => new e(n), t);
  }
}
class Xo {
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
            if (ze(t.state, n, "CodeMirror plugin crashed"), this.value.destroy)
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
        ze(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        ze(e.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const dp = /* @__PURE__ */ W.define(), Ia = /* @__PURE__ */ W.define(), is = /* @__PURE__ */ W.define(), pp = /* @__PURE__ */ W.define(), za = /* @__PURE__ */ W.define(), Op = /* @__PURE__ */ W.define();
function kh(i, e) {
  let t = i.state.facet(Op);
  if (!t.length)
    return t;
  let n = t.map((r) => r instanceof Function ? r(i) : r), s = [];
  return ee.spans(n, e.from, e.to, {
    point() {
    },
    span(r, o, l, a) {
      let c = r - e.from, h = o - e.from, u = s;
      for (let f = l.length - 1; f >= 0; f--, a--) {
        let d = l[f].spec.bidiIsolate, p;
        if (d == null && (d = fy(e.text, c, h)), a > 0 && u.length && (p = u[u.length - 1]).to == c && p.direction == d)
          p.to = h, u = p.inner;
        else {
          let g = { from: c, to: h, direction: d, inner: [] };
          u.push(g), u = g.inner;
        }
      }
    }
  }), s;
}
const gp = /* @__PURE__ */ W.define();
function Na(i) {
  let e = 0, t = 0, n = 0, s = 0;
  for (let r of i.state.facet(gp)) {
    let o = r(i);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (n = Math.max(n, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: n, bottom: s };
}
const En = /* @__PURE__ */ W.define();
class ht {
  constructor(e, t, n, s) {
    this.fromA = e, this.toA = t, this.fromB = n, this.toB = s;
  }
  join(e) {
    return new ht(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
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
        if (d <= p && new ht(d + c, p + c, d, p).addToSet(n), f > h)
          break;
        r += 2;
      }
      if (!a)
        return n;
      new ht(a.fromA, a.toA, a.fromB, a.toB).addToSet(n), o = a.toA, l = a.toB;
    }
  }
}
class $r {
  constructor(e, t, n) {
    this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = Te.empty(this.startState.doc.length);
    for (let r of n)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new ht(r, o, l, a))), this.changedRanges = s;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new $r(e, t, n);
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
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
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
    return this.docChanged || (this.flags & 18) > 0;
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
class Ph extends ce {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = N.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new Pe()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new ht(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: c, toA: h }) => h < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !vy(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let r = s > -1 ? Oy(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: c, to: h } = this.hasComposition;
      n = new ht(c, h, e.changes.mapPos(c, -1), e.changes.mapPos(h, 1)).addToSet(n.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (q.ie || q.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = yy(o, l, e.changes);
    return n = ht.extendWithRanges(n, a), !(this.flags & 7) && n.length == 0 ? !1 : (this.updateInner(n, e.startState.doc.length, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t, n) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, n);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = q.chrome || q.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Yt && o.widget instanceof El && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, t, n) {
    let s = n ? n.range.addToSet(e.slice()) : e, r = this.childCursor(t);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: c, fromB: h, toB: u } = l, f, d, p, g;
      if (n && n.range.fromB < u && n.range.toB > h) {
        let P = zn.build(this.view.state.doc, h, n.range.fromB, this.decorations, this.dynamicDecorationMap), $ = zn.build(this.view.state.doc, n.range.toB, u, this.decorations, this.dynamicDecorationMap);
        d = P.breakAtStart, p = P.openStart, g = $.openEnd;
        let M = this.compositionView(n);
        $.breakAtStart ? M.breakAfter = 1 : $.content.length && M.merge(M.length, M.length, $.content[0], !1, $.openStart, 0) && (M.breakAfter = $.content[0].breakAfter, $.content.shift()), P.content.length && M.merge(0, 0, P.content[P.content.length - 1], !0, 0, P.openEnd) && P.content.pop(), f = P.content.concat(M).concat($.content);
      } else
        ({ content: f, breakAtStart: d, openStart: p, openEnd: g } = zn.build(this.view.state.doc, h, u, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: O } = r.findPos(c, 1), { i: x, off: w } = r.findPos(a, -1);
      Id(this, x, w, m, O, f, d, p, g);
    }
    n && this.fixCompositionDOM(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(fp) && (this.editContextFormatting = n.value);
  }
  compositionView(e) {
    let t = new mt(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks)
      t = new Ft(s, [t], t.length);
    let n = new Pe();
    return n.append(t, 0), n;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = ce.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, n = this.childPos(e.range.fromB, 1), s = this.children[n.i];
    t(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      n = s.childPos(n.off, 1), s = s.children[n.i], t(r >= 0 ? e.marks[r].node : e.text, s);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n = this.view.root.activeElement, s = n == this.dom, r = !s && !(this.view.state.facet(Nt) || this.dom.tabIndex > -1) && lr(this.dom, this.view.observer.selectionRange) && !(n && this.dom.contains(n));
    if (!(s || t || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), c = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (q.gecko && l.empty && !this.hasComposition && py(a)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(u, a.node.childNodes[a.offset] || null)), a = c = new Be(u, 0), o = !0;
    }
    let h = this.view.observer.selectionRange;
    (o || !h.focusNode || (!In(a.node, a.offset, h.anchorNode, h.anchorOffset) || !In(c.node, c.offset, h.focusNode, h.focusOffset)) && !this.suppressWidgetCursorChange(h, l)) && (this.view.observer.ignore(() => {
      q.android && q.chrome && this.dom.contains(h.focusNode) && by(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = ts(this.view.root);
      if (u) if (l.empty) {
        if (q.gecko) {
          let f = gy(a.node, a.offset);
          if (f && f != 3) {
            let d = (f == 1 ? Vd : qd)(a.node, a.offset);
            d && (a = new Be(d.node, d.offset));
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
    }), this.view.observer.setSelectionRange(a, c)), this.impreciseAnchor = a.precise ? null : new Be(h.anchorNode, h.anchorOffset), this.impreciseHead = c.precise ? null : new Be(h.focusNode, h.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && In(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, n = ts(e.root), { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!n || !t.empty || !t.assoc || !n.modify)
      return;
    let o = Pe.find(this, t.head);
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
      let r = ce.get(t.childNodes[s]);
      r instanceof Pe && (n = r.domAtPos(0));
    }
    for (let s = e.offset - 1; !n && s >= 0; s--) {
      let r = ce.get(t.childNodes[s]);
      r instanceof Pe && (n = r.domAtPos(r.length));
    }
    return n ? new Be(n.node, n.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let n = ce.get(t);
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
      if (n < s.length || s instanceof Pe)
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
      if (c <= e && (c < e || l.covers(-1)) && (a > e || l.covers(1)) && (!n || l instanceof Pe && !(n instanceof Pe && t >= 0)))
        n = l, s = c;
      else if (n && c == e && a == e && l instanceof Yt && Math.abs(t) < 2) {
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
    if (!(s instanceof Pe))
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
    if (!(s instanceof mt))
      return null;
    let r = De(s.text, n);
    if (r == n)
      return null;
    let o = Xi(s.dom, n, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: n, to: s } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == ge.LTR;
    for (let c = 0, h = 0; h < this.children.length; h++) {
      let u = this.children[h], f = c + u.length;
      if (f > s)
        break;
      if (c >= n) {
        let d = u.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let p = u.dom.lastChild, g = p ? ln(p) : [];
          if (g.length) {
            let m = g[g.length - 1], O = a ? m.right - d.left : d.right - m.left;
            O > l && (l = O, this.minWidth = r, this.minWidthFrom = c, this.minWidthTo = f);
          }
        }
      }
      c = f + u.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? ge.RTL : ge.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof Pe) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), t, n, s;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let r = ln(e.firstChild)[0];
      t = e.getBoundingClientRect().height, n = r ? r.width / 27 : 7, s = r ? r.height : t, e.remove();
    }), { lineHeight: t, charWidth: n, textHeight: s };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new Wd(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let n = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s], o = r ? r.from - 1 : this.length;
      if (o > n) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
        e.push(N.replace({
          widget: new El(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(n, o));
      }
      if (!r)
        break;
      n = r.to + 1;
    }
    return N.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(is).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), n = !1, s = this.view.state.facet(pp).map((r, o) => {
      let l = typeof r == "function";
      return l && (n = !0), l ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = n, t.push(ee.join(s))), this.decorations = [
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
    for (let c of this.view.state.facet(up))
      try {
        if (c(this.view, e.range, e))
          return !0;
      } catch (h) {
        ze(this.view.state, h, "scroll handler");
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
    let r = Na(this.view), o = {
      left: n.left - r.left,
      top: n.top - r.top,
      right: n.right + r.right,
      bottom: n.bottom + r.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Y1(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == ge.LTR);
  }
}
function py(i) {
  return i.node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false");
}
function mp(i, e) {
  let t = i.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let n = Vd(t.focusNode, t.focusOffset), s = qd(t.focusNode, t.focusOffset), r = n || s;
  if (s && n && s.node != n.node) {
    let l = ce.get(s.node);
    if (!l || l instanceof mt && l.text != s.node.nodeValue)
      r = s;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = ce.get(n.node);
      !a || a instanceof mt && a.text != n.node.nodeValue || (r = s);
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
  let a = e.invertedDesc, c = new ht(a.mapPos(r), a.mapPos(o), r, o), h = [];
  for (let u = s.parentNode; ; u = u.parentNode) {
    let f = ce.get(u);
    if (f instanceof Ft)
      h.push({ node: u, deco: f.mark });
    else {
      if (f instanceof Pe || u.nodeName == "DIV" && u.parentNode == i.contentDOM)
        return { range: c, text: s, marks: h, line: u };
      if (u != i.contentDOM)
        h.push({ node: u, deco: new Ss({
          inclusive: !0,
          attributes: iy(u),
          tagName: u.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function gy(i, e) {
  return i.nodeType != 1 ? 0 : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < i.childNodes.length && i.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let my = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    ar(e, t, this.changes);
  }
  comparePoint(e, t) {
    ar(e, t, this.changes);
  }
  boundChange(e) {
    ar(e, e, this.changes);
  }
};
function yy(i, e, t) {
  let n = new my();
  return ee.compare(i, e, t, n), n.changes;
}
function by(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function vy(i, e) {
  let t = !1;
  return e && i.iterChangedRanges((n, s) => {
    n < e.to && s > e.from && (t = !0);
  }), t;
}
function Sy(i, e, t = 1) {
  let n = i.charCategorizer(e), s = i.doc.lineAt(e), r = e - s.from;
  if (s.length == 0)
    return A.cursor(e);
  r == 0 ? t = 1 : r == s.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = De(s.text, r, !1) : l = De(s.text, r);
  let a = n(s.text.slice(o, l));
  for (; o > 0; ) {
    let c = De(s.text, o, !1);
    if (n(s.text.slice(c, o)) != a)
      break;
    o = c;
  }
  for (; l < s.length; ) {
    let c = De(s.text, l);
    if (n(s.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return A.range(o + s.from, l + s.from);
}
function xy(i, e) {
  return e.left > i ? e.left - i : Math.max(0, i - e.right);
}
function wy(i, e) {
  return e.top > i ? e.top - i : Math.max(0, i - e.bottom);
}
function Eo(i, e) {
  return i.top < e.bottom - 1 && i.bottom > e.top + 1;
}
function $h(i, e) {
  return e < i.top ? { top: e, left: i.left, right: i.right, bottom: i.bottom } : i;
}
function Ch(i, e) {
  return e > i.bottom ? { top: i.top, left: i.left, right: i.right, bottom: e } : i;
}
function Vl(i, e, t) {
  let n, s, r, o, l = !1, a, c, h, u;
  for (let p = i.firstChild; p; p = p.nextSibling) {
    let g = ln(p);
    for (let m = 0; m < g.length; m++) {
      let O = g[m];
      s && Eo(s, O) && (O = $h(Ch(O, s.bottom), s.top));
      let x = xy(e, O), w = wy(t, O);
      if (x == 0 && w == 0)
        return p.nodeType == 3 ? Zh(p, e, t) : Vl(p, e, t);
      if (!n || o > w || o == w && r > x) {
        n = p, s = O, r = x, o = w;
        let P = w ? t < O.top ? -1 : 1 : x ? e < O.left ? -1 : 1 : 0;
        l = !P || (P > 0 ? m < g.length - 1 : m > 0);
      }
      x == 0 ? t > O.bottom && (!h || h.bottom < O.bottom) ? (a = p, h = O) : t < O.top && (!u || u.top > O.top) && (c = p, u = O) : h && Eo(h, O) ? h = Ch(h, O.bottom) : u && Eo(u, O) && (u = $h(u, O.top));
    }
  }
  if (h && h.bottom >= t ? (n = a, s = h) : u && u.top <= t && (n = c, s = u), !n)
    return { node: i, offset: 0 };
  let f = Math.max(s.left, Math.min(s.right, e));
  if (n.nodeType == 3)
    return Zh(n, f, t);
  if (l && n.contentEditable != "false")
    return Vl(n, f, t);
  let d = Array.prototype.indexOf.call(i.childNodes, n) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: i, offset: d };
}
function Zh(i, e, t) {
  let n = i.nodeValue.length, s = -1, r = 1e9, o = 0;
  for (let l = 0; l < n; l++) {
    let a = Xi(i, l, l + 1).getClientRects();
    for (let c = 0; c < a.length; c++) {
      let h = a[c];
      if (h.top == h.bottom)
        continue;
      o || (o = e - h.left);
      let u = (h.top > t ? h.top - t : t - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && u < r) {
        let f = e >= (h.left + h.right) / 2, d = f;
        if ((q.chrome || q.gecko) && Xi(i, l).getBoundingClientRect().left == h.right && (d = !f), u <= 0)
          return { node: i, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), r = u;
      }
    }
  }
  return { node: i, offset: s > -1 ? s : o > 0 ? i.nodeValue.length : 0 };
}
function yp(i, e, t, n = -1) {
  var s, r;
  let o = i.contentDOM.getBoundingClientRect(), l = o.top + i.viewState.paddingTop, a, { docHeight: c } = i.viewState, { x: h, y: u } = e, f = u - l;
  if (f < 0)
    return 0;
  if (f > c)
    return i.state.doc.length;
  for (let P = i.viewState.heightOracle.textHeight / 2, $ = !1; a = i.elementAtHeight(f), a.type != Ne.Text; )
    for (; f = n > 0 ? a.bottom + P : a.top - P, !(f >= 0 && f <= c); ) {
      if ($)
        return t ? null : 0;
      $ = !0, n = -n;
    }
  u = l + f;
  let d = a.from;
  if (d < i.viewport.from)
    return i.viewport.from == 0 ? 0 : t ? null : Th(i, o, a, h, u);
  if (d > i.viewport.to)
    return i.viewport.to == i.state.doc.length ? i.state.doc.length : t ? null : Th(i, o, a, h, u);
  let p = i.dom.ownerDocument, g = i.root.elementFromPoint ? i.root : p, m = g.elementFromPoint(h, u);
  m && !i.contentDOM.contains(m) && (m = null), m || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), m = g.elementFromPoint(h, u), m && !i.contentDOM.contains(m) && (m = null));
  let O, x = -1;
  if (m && ((s = i.docView.nearest(m)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let P = p.caretPositionFromPoint(h, u);
      P && ({ offsetNode: O, offset: x } = P);
    } else if (p.caretRangeFromPoint) {
      let P = p.caretRangeFromPoint(h, u);
      P && ({ startContainer: O, startOffset: x } = P, (!i.contentDOM.contains(O) || q.safari && Qy(O, x, h) || q.chrome && ky(O, x, h)) && (O = void 0));
    }
    O && (x = Math.min(Dt(O), x));
  }
  if (!O || !i.docView.dom.contains(O)) {
    let P = Pe.find(i.docView, d);
    if (!P)
      return f > a.top + a.height / 2 ? a.to : a.from;
    ({ node: O, offset: x } = Vl(P.dom, h, u));
  }
  let w = i.docView.nearest(O);
  if (!w)
    return null;
  if (w.isWidget && ((r = w.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let P = w.dom.getBoundingClientRect();
    return e.y < P.top || e.y <= P.bottom && e.x <= (P.left + P.right) / 2 ? w.posAtStart : w.posAtEnd;
  } else
    return w.localPosFromDOM(O, x) + w.posAtStart;
}
function Th(i, e, t, n, s) {
  let r = Math.round((n - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight, a = Math.floor((s - t.top - (i.defaultLineHeight - l) * 0.5) / l);
    r += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + $l(o, r, i.state.tabSize);
}
function Qy(i, e, t) {
  let n;
  if (i.nodeType != 3 || e != (n = i.nodeValue.length))
    return !1;
  for (let s = i.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return !1;
  return Xi(i, n - 1, n).getBoundingClientRect().left > t;
}
function ky(i, e, t) {
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
  let n = i.nodeType == 1 ? i.getBoundingClientRect() : Xi(i, 0, Math.max(i.nodeValue.length, 1)).getBoundingClientRect();
  return t - n.left > 5;
}
function ql(i, e) {
  let t = i.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let n of t.type)
      if (n.to > e || n.to == e && (n.to == t.to || n.type == Ne.Text))
        return n;
  }
  return t;
}
function Py(i, e, t, n) {
  let s = ql(i, e.head), r = !n || s.type != Ne.Text || !(i.lineWrapping || s.widgetLineBreaks) ? null : i.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = i.dom.getBoundingClientRect(), l = i.textDirectionAt(s.from), a = i.posAtCoords({
      x: t == (l == ge.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return A.cursor(a, t ? -1 : 1);
  }
  return A.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function Ah(i, e, t, n) {
  let s = i.state.doc.lineAt(e.head), r = i.bidiSpans(s), o = i.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let c = uy(s, r, o, l, t), h = ip;
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
    return s == me.Space && (s = o), s == o;
  };
}
function Cy(i, e, t, n) {
  let s = e.head, r = t ? 1 : -1;
  if (s == (t ? i.state.doc.length : 0))
    return A.cursor(s, e.assoc);
  let o = e.goalColumn, l, a = i.contentDOM.getBoundingClientRect(), c = i.coordsAtPos(s, e.assoc || -1), h = i.documentTop;
  if (c)
    o == null && (o = c.left - a.left), l = r < 0 ? c.top : c.bottom;
  else {
    let d = i.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + h;
  }
  let u = a.left + o, f = n ?? i.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (f + d) * r, g = yp(i, { x: u, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? g < s : g > s)) {
      let m = i.docView.coordsForChar(g), O = !m || p < m.top ? -1 : 1;
      return A.cursor(g, O, void 0, o);
    }
  }
}
function cr(i, e, t) {
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
function Lo(i, e, t) {
  let n = cr(i.state.facet(za).map((s) => s(i)), t.from, e.head > t.from ? -1 : 1);
  return n == t.from ? t : A.cursor(n, n < t.from ? 1 : -1);
}
const Ln = "￿";
class Zy {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(H.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Ln;
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
      let l = ce.get(s), a = ce.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : kr(s)) || kr(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
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
    let t = ce.get(e), n = t && t.overrideDOMText;
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
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (Ty(e, n.node, n.offset) ? t : 0));
  }
}
function Ty(i, e, t) {
  for (; ; ) {
    if (!e || t < Dt(e))
      return !1;
    if (e == i)
      return !0;
    t = _i(e) + 1, e = e.parentNode;
  }
}
class Mh {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Ay {
  constructor(e, t, n, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, n, 0))) {
      let l = r || o ? [] : _y(e), a = new Zy(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Xy(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !Tl(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Tl(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), h = e.viewport;
      if ((q.ios || q.chrome) && e.state.selection.main.empty && a != c && (h.from > 0 || h.to < e.state.doc.length)) {
        let u = Math.min(a, c), f = Math.max(a, c), d = h.from - u, p = h.to - f;
        (d == 0 || d == 1 || u == 0) && (p == 0 || p == -1 || f == e.state.doc.length) && (a = 0, c = e.state.doc.length);
      }
      this.newSel = A.single(c, a);
    }
  }
}
function bp(i, e) {
  let t, { newSel: n } = e, s = i.state.selection.main, r = i.inputState.lastKeyTime > Date.now() - 100 ? i.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = s.from, c = null;
    (r === 8 || q.android && e.text.length < l - o) && (a = s.to, c = "end");
    let h = Ry(i.state.doc.sliceString(o, l, Ln), e.text, a - o, c);
    h && (q.chrome && r == 13 && h.toB == h.from + 2 && e.text.slice(h.from, h.toB) == Ln + Ln && h.toB--, t = {
      from: o + h.from,
      to: o + h.toA,
      insert: ie.of(e.text.slice(h.from, h.toB).split(Ln))
    });
  } else n && (!i.hasFocus && i.state.facet(Nt) || n.main.eq(s)) && (n = null);
  if (!t && !n)
    return !1;
  if (!t && e.typeOver && !s.empty && n && n.main.empty ? t = { from: s.from, to: s.to, insert: i.state.doc.slice(s.from, s.to) } : (q.mac || q.android) && t && t.from == t.to && t.from == s.head - 1 && /^\. ?$/.test(t.insert.toString()) && i.contentDOM.getAttribute("autocorrect") == "off" ? (n && t.insert.length == 2 && (n = A.single(n.main.anchor - 1, n.main.head - 1)), t = { from: t.from, to: t.to, insert: ie.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= s.from && t.to <= s.to && (t.from != s.from || t.to != s.to) && s.to - s.from - (t.to - t.from) <= 4 ? t = {
    from: s.from,
    to: s.to,
    insert: i.state.doc.slice(s.from, t.from).append(t.insert).append(i.state.doc.slice(t.to, s.to))
  } : q.chrome && t && t.from == t.to && t.from == s.head && t.insert.toString() == `
 ` && i.lineWrapping && (n && (n = A.single(n.main.anchor - 1, n.main.head - 1)), t = { from: s.from, to: s.to, insert: ie.of([" "]) }), t)
    return Ua(i, t, n, r);
  if (n && !n.main.eq(s)) {
    let o = !1, l = "select";
    return i.inputState.lastSelectionTime > Date.now() - 50 && (i.inputState.lastSelectionOrigin == "select" && (o = !0), l = i.inputState.lastSelectionOrigin), i.dispatch({ selection: n, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Ua(i, e, t, n = -1) {
  if (q.ios && i.inputState.flushIOSKey(e))
    return !0;
  let s = i.state.selection.main;
  if (q.android && (e.to == s.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == s.from || e.from == s.from - 1 && i.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Ji(i.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || n == 8 && e.insert.length < e.to - e.from && e.to > s.head) && Ji(i.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && Ji(i.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o, l = () => o || (o = My(i, e, t));
  return i.state.facet(lp).some((a) => a(i, e.from, e.to, r, l)) || i.dispatch(l()), !0;
}
function My(i, e, t) {
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
        let g = p.to - f, m = g - c.length;
        if (p.to - p.from != d || i.state.sliceDoc(m, g) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p.to >= h.from && p.from <= h.to)
          return { range: p };
        let O = s.changes({ from: m, to: g, insert: e.insert }), x = p.to - r.to;
        return {
          changes: O,
          range: a ? A.range(Math.max(0, a.anchor + x), Math.max(0, a.head + x)) : p.map(O)
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
function Ry(i, e, t, n) {
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
function _y(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: n, focusNode: s, focusOffset: r } = i.observer.selectionRange;
  return t && (e.push(new Mh(t, n)), (s != t || r != n) && e.push(new Mh(s, r))), e;
}
function Xy(i, e) {
  if (i.length == 0)
    return null;
  let t = i[0].pos, n = i.length == 2 ? i[1].pos : t;
  return t > -1 && n > -1 ? A.single(t + e, n + e) : null;
}
class Ey {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, q.safari && e.contentDOM.addEventListener("input", () => null), q.gecko && Ky(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Iy(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || this.runHandlers(e.type, e);
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
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Sp.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), q.android && q.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return q.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = vp.find((n) => n.keyCode == e.keyCode)) && !e.ctrlKey || Dy.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Ji(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : q.safari && !q.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
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
function Rh(i, e) {
  return (t, n) => {
    try {
      return e.call(i, n, t);
    } catch (s) {
      ze(t.state, s);
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
        o && t(r).handlers.push(Rh(n.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && t(r).observers.push(Rh(n.value, o));
      }
  }
  for (let n in yt)
    t(n).handlers.push(yt[n]);
  for (let n in ut)
    t(n).observers.push(ut[n]);
  return e;
}
const vp = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Dy = "dthko", Sp = [16, 17, 18, 20, 91, 92, 224, 225], Ls = 6;
function Ds(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function jy(i, e) {
  return Math.max(Math.abs(i.clientX - e.clientX), Math.abs(i.clientY - e.clientY));
}
class By {
  constructor(e, t, n, s) {
    this.view = e, this.startEvent = t, this.style = n, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = G1(e.contentDOM), this.atoms = e.state.facet(za).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(H.allowMultipleSelections) && Vy(e, t), this.dragging = Wy(e, t) && Qp(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && jy(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, n = 0, s = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Na(this.view);
    e.clientX - a.left <= s + Ls ? t = -Ds(s - e.clientX) : e.clientX + a.right >= o - Ls && (t = Ds(e.clientX - o)), e.clientY - a.top <= r + Ls ? n = -Ds(r - e.clientY) : e.clientY + a.bottom >= l - Ls && (n = Ds(e.clientY - l)), this.setScrollSpeed(t, n);
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
        let o = cr(this.atoms, s.from, 0);
        o != s.from && (r = A.cursor(o, -1));
      } else {
        let o = cr(this.atoms, s.from, -1), l = cr(this.atoms, s.to, 1);
        (o != s.from || l != s.to) && (r = A.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), t[n] = r);
    }
    return t ? A.create(t, e.mainIndex) : e;
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
function Vy(i, e) {
  let t = i.state.facet(np);
  return t.length ? t[0](e) : q.mac ? e.metaKey : e.ctrlKey;
}
function qy(i, e) {
  let t = i.state.facet(sp);
  return t.length ? t[0](e) : q.mac ? !e.altKey : !e.ctrlKey;
}
function Wy(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty)
    return !1;
  let n = ts(i.root);
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
function Iy(i, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, n; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (n = ce.get(t)) && n.ignoreEvent(e))
      return !1;
  return !0;
}
const yt = /* @__PURE__ */ Object.create(null), ut = /* @__PURE__ */ Object.create(null), xp = q.ie && q.ie_version < 15 || q.ios && q.webkit_version < 604;
function zy(i) {
  let e = i.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    i.focus(), t.remove(), wp(i, t.value);
  }, 50);
}
function ro(i, e, t) {
  for (let n of i.facet(e))
    t = n(t, i);
  return t;
}
function wp(i, e) {
  e = ro(i.state, qa, e);
  let { state: t } = i, n, s = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (Wl != null && t.selection.ranges.every((a) => a.empty) && Wl == r.toString()) {
    let a = -1;
    n = t.changeByRange((c) => {
      let h = t.doc.lineAt(c.from);
      if (h.from == a)
        return { range: c };
      a = h.from;
      let u = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: h.from, insert: u },
        range: A.cursor(c.from + u.length)
      };
    });
  } else o ? n = t.changeByRange((a) => {
    let c = r.line(s++);
    return {
      changes: { from: a.from, to: a.to, insert: c.text },
      range: A.cursor(a.from + c.length)
    };
  }) : n = t.replaceSelection(r);
  i.dispatch(n, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
ut.scroll = (i) => {
  i.inputState.lastScrollTop = i.scrollDOM.scrollTop, i.inputState.lastScrollLeft = i.scrollDOM.scrollLeft;
};
yt.keydown = (i, e) => (i.inputState.setSelectionOrigin("select"), e.keyCode == 27 && i.inputState.tabFocusMode != 0 && (i.inputState.tabFocusMode = Date.now() + 2e3), !1);
ut.touchstart = (i, e) => {
  i.inputState.lastTouchTime = Date.now(), i.inputState.setSelectionOrigin("select.pointer");
};
ut.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
yt.mousedown = (i, e) => {
  if (i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let n of i.state.facet(rp))
    if (t = n(i, e), t)
      break;
  if (!t && e.button == 0 && (t = Yy(i, e)), t) {
    let n = !i.hasFocus;
    i.inputState.startMouseSelection(new By(i, e, t, n)), n && i.observer.ignore(() => {
      Dd(i.contentDOM);
      let r = i.root.activeElement;
      r && !r.contains(i.contentDOM) && r.blur();
    });
    let s = i.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === !1;
  }
  return !1;
};
function _h(i, e, t, n) {
  if (n == 1)
    return A.cursor(e, t);
  if (n == 2)
    return Sy(i.state, e, t);
  {
    let s = Pe.find(i.docView, e), r = i.state.doc.lineAt(s ? s.posAtEnd : e), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < i.state.doc.length && l == r.to && l++, A.range(o, l);
  }
}
let Xh = (i, e, t) => e >= t.top && e <= t.bottom && i >= t.left && i <= t.right;
function Ny(i, e, t, n) {
  let s = Pe.find(i.docView, e);
  if (!s)
    return 1;
  let r = e - s.posAtStart;
  if (r == 0)
    return 1;
  if (r == s.length)
    return -1;
  let o = s.coordsAt(r, -1);
  if (o && Xh(t, n, o))
    return -1;
  let l = s.coordsAt(r, 1);
  return l && Xh(t, n, l) ? 1 : o && o.bottom >= n ? -1 : 1;
}
function Eh(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: Ny(i, t, e.clientX, e.clientY) };
}
const Uy = q.ie && q.ie_version <= 11;
let Lh = null, Dh = 0, jh = 0;
function Qp(i) {
  if (!Uy)
    return i.detail;
  let e = Lh, t = jh;
  return Lh = i, jh = Date.now(), Dh = !e || t > Date.now() - 400 && Math.abs(e.clientX - i.clientX) < 2 && Math.abs(e.clientY - i.clientY) < 2 ? (Dh + 1) % 3 : 1;
}
function Yy(i, e) {
  let t = Eh(i, e), n = Qp(e), s = i.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), s = s.map(r.changes));
    },
    get(r, o, l) {
      let a = Eh(i, r), c, h = _h(i, a.pos, a.bias, n);
      if (t.pos != a.pos && !o) {
        let u = _h(i, t.pos, t.bias, n), f = Math.min(u.from, h.from), d = Math.max(u.to, h.to);
        h = f < h.from ? A.range(f, d) : A.range(d, f);
      }
      return o ? s.replaceRange(s.main.extend(h.from, h.to)) : l && n == 1 && s.ranges.length > 1 && (c = Gy(s, a.pos)) ? c : l ? s.addRange(h) : A.create([h]);
    }
  };
}
function Gy(i, e) {
  for (let t = 0; t < i.ranges.length; t++) {
    let { from: n, to: s } = i.ranges[t];
    if (n <= e && s >= e)
      return A.create(i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)), i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0));
  }
  return null;
}
yt.dragstart = (i, e) => {
  let { selection: { main: t } } = i.state;
  if (e.target.draggable) {
    let s = i.docView.nearest(e.target);
    if (s && s.isWidget) {
      let r = s.posAtStart, o = r + s.length;
      (r >= t.to || o <= t.from) && (t = A.range(r, o));
    }
  }
  let { inputState: n } = i;
  return n.mouseSelection && (n.mouseSelection.dragging = !0), n.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", ro(i.state, Wa, i.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
yt.dragend = (i) => (i.inputState.draggedContent = null, !1);
function Bh(i, e, t, n) {
  if (t = ro(i.state, qa, t), !t)
    return;
  let s = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = i.inputState, o = n && r && qy(i, e) ? { from: r.from, to: r.to } : null, l = { from: s, insert: t }, a = i.state.changes(o ? [o, l] : l);
  i.focus(), i.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), i.inputState.draggedContent = null;
}
yt.drop = (i, e) => {
  if (!e.dataTransfer)
    return !1;
  if (i.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let n = Array(t.length), s = 0, r = () => {
      ++s == t.length && Bh(i, e, n.filter((o) => o != null).join(i.state.lineBreak), !1);
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
      return Bh(i, e, n, !0), !0;
  }
  return !1;
};
yt.paste = (i, e) => {
  if (i.state.readOnly)
    return !0;
  i.observer.flush();
  let t = xp ? null : e.clipboardData;
  return t ? (wp(i, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (zy(i), !1);
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
  return { text: ro(i, Wa, e.join(i.lineBreak)), ranges: t, linewise: n };
}
let Wl = null;
yt.copy = yt.cut = (i, e) => {
  let { text: t, ranges: n, linewise: s } = Hy(i.state);
  if (!t && !s)
    return !1;
  Wl = s ? t : null, e.type == "cut" && !i.state.readOnly && i.dispatch({
    changes: n,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = xp ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (Fy(i, t), !1);
};
const kp = /* @__PURE__ */ Kt.define();
function Pp(i, e) {
  let t = [];
  for (let n of i.facet(ap)) {
    let s = n(i, e);
    s && t.push(s);
  }
  return t ? i.update({ effects: t, annotations: kp.of(!0) }) : null;
}
function $p(i) {
  setTimeout(() => {
    let e = i.hasFocus;
    if (e != i.inputState.notifiedFocused) {
      let t = Pp(i.state, e);
      t ? i.dispatch(t) : i.update([]);
    }
  }, 10);
}
ut.focus = (i) => {
  i.inputState.lastFocusTime = Date.now(), !i.scrollDOM.scrollTop && (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) && (i.scrollDOM.scrollTop = i.inputState.lastScrollTop, i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft), $p(i);
};
ut.blur = (i) => {
  i.observer.clearSelectionRange(), $p(i);
};
ut.compositionstart = ut.compositionupdate = (i) => {
  i.observer.editContext || (i.inputState.compositionFirstChange == null && (i.inputState.compositionFirstChange = !0), i.inputState.composing < 0 && (i.inputState.composing = 0));
};
ut.compositionend = (i) => {
  i.observer.editContext || (i.inputState.composing = -1, i.inputState.compositionEndedAt = Date.now(), i.inputState.compositionPendingKey = !0, i.inputState.compositionPendingChange = i.observer.pendingRecords().length > 0, i.inputState.compositionFirstChange = null, q.chrome && q.android ? i.observer.flushSoon() : i.inputState.compositionPendingChange ? Promise.resolve().then(() => i.observer.flush()) : setTimeout(() => {
    i.inputState.composing < 0 && i.docView.hasComposition && i.update([]);
  }, 50));
};
ut.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
yt.beforeinput = (i, e) => {
  var t, n;
  if (e.inputType == "insertReplacementText" && i.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = i.posAtDOM(l.startContainer, l.startOffset), c = i.posAtDOM(l.endContainer, l.endOffset);
      return Ua(i, { from: a, to: c, insert: i.state.toText(r) }, null), !0;
    }
  }
  let s;
  if (q.chrome && q.android && (s = vp.find((r) => r.inputType == e.inputType)) && (i.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && i.hasFocus && (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return q.ios && e.inputType == "deleteContentForward" && i.observer.flushSoon(), q.safari && e.inputType == "insertText" && i.inputState.composing >= 0 && setTimeout(() => ut.compositionend(i, e), 20), !1;
};
const Vh = /* @__PURE__ */ new Set();
function Ky(i) {
  Vh.has(i) || (Vh.add(i), i.addEventListener("copy", () => {
  }), i.addEventListener("cut", () => {
  }));
}
const qh = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let hn = !1;
function Wh() {
  hn = !1;
}
class Jy {
  constructor(e) {
    this.lineWrapping = e, this.doc = ie.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
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
    return qh.indexOf(e) > -1 != this.lineWrapping;
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
    let l = qh.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
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
class eb {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Zt {
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
    return typeof this._content == "number" ? Ne.Text : Array.isArray(this._content) ? this._content : this._content.type;
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
    return this._content instanceof fi ? this._content.widget : null;
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
    return new Zt(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var Oe = /* @__PURE__ */ function(i) {
  return i[i.ByPos = 0] = "ByPos", i[i.ByHeight = 1] = "ByHeight", i[i.ByPosNoHeight = 2] = "ByPosNoHeight", i;
}(Oe || (Oe = {}));
const hr = 1e-3;
class Ue {
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
    this.height != e && (Math.abs(this.height - e) > hr && (hn = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, n) {
    return Ue.of(n);
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
      let { fromA: a, toA: c, fromB: h, toB: u } = s[l], f = r.lineAt(a, Oe.ByPosNoHeight, n.setDoc(t), 0, 0), d = f.to >= c ? f : r.lineAt(c, Oe.ByPosNoHeight, n, 0, 0);
      for (u += d.to - c, c = d.to; l > 0 && f.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, h = s[l - 1].fromB, l--, a < f.from && (f = r.lineAt(a, Oe.ByPosNoHeight, n, 0, 0));
      h += f.from - a, a = f.from;
      let p = Ya.build(n.setDoc(o), e, h, u);
      r = Cr(r, r.replace(a, c, p));
    }
    return r.updateHeight(n, 0);
  }
  static empty() {
    return new ot(0, 0);
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
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, n++), new tb(Ue.of(e.slice(0, t)), o, Ue.of(e.slice(n)));
  }
}
function Cr(i, e) {
  return i == e ? i : (i.constructor != e.constructor && (hn = !0), e);
}
Ue.prototype.size = 1;
class Cp extends Ue {
  constructor(e, t, n) {
    super(e, t), this.deco = n;
  }
  blockAt(e, t, n, s) {
    return new Zt(s, this.length, n, this.height, this.deco || 0);
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
class ot extends Cp {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, n, s) {
    return new Zt(s, this.length, n, this.height, this.breaks);
  }
  replace(e, t, n) {
    let s = n[0];
    return n.length == 1 && (s instanceof ot || s instanceof Xe && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof Xe ? s = new ot(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = !1), s) : Ue.of(n);
  }
  updateHeight(e, t = 0, n = !1, s) {
    return s && s.from <= t && s.more ? this.setHeight(s.heights[s.index++]) : (n || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Xe extends Ue {
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
      return new Zt(h.from, h.length, f, u, 0);
    } else {
      let c = Math.max(0, Math.min(o - r, Math.floor((e - n) / l))), { from: h, length: u } = t.doc.line(r + c);
      return new Zt(h, u, n + l * c, l, 0);
    }
  }
  lineAt(e, t, n, s, r) {
    if (t == Oe.ByHeight)
      return this.blockAt(e, n, s, r);
    if (t == Oe.ByPosNoHeight) {
      let { from: d, to: p } = n.doc.lineAt(e);
      return new Zt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(n, r), c = n.doc.lineAt(e), h = l + c.length * a, u = c.number - o, f = s + l * u + a * (c.from - r - u);
    return new Zt(c.from, c.length, Math.max(s, Math.min(f, s + this.height - h)), h, 0);
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
      o(new Zt(f.from, f.length, u, d, 0)), u += d, h = f.to + 1;
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
    return Ue.of(n);
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
        a == -1 ? a = u : Math.abs(u - a) >= hr && (a = -2);
        let f = new ot(h, u);
        f.outdated = !1, o.push(f), l += h + 1;
      }
      l <= r && o.push(null, new Xe(r - l).updateHeight(e, l));
      let c = Ue.of(o);
      return (a < 0 || Math.abs(c.height - this.height) >= hr || Math.abs(a - this.heightMetrics(e, t).perLine) >= hr) && (hn = !0), Cr(this, c);
    } else (n || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class tb extends Ue {
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
    let o = s + this.left.height, l = r + this.left.length + this.break, a = t == Oe.ByHeight ? e < o : e < l, c = a ? this.left.lineAt(e, t, n, s, r) : this.right.lineAt(e, t, n, o, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let h = t == Oe.ByPosNoHeight ? Oe.ByPosNoHeight : Oe.ByPos;
    return a ? c.join(this.right.lineAt(l, h, n, o, l)) : this.left.lineAt(l, h, n, s, r).join(c);
  }
  forEachLine(e, t, n, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, n, s, r, o), t >= a && this.right.forEachLine(e, t, n, l, a, o);
    else {
      let c = this.lineAt(a, Oe.ByPos, n, s, r);
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
    if (e > 0 && Ih(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), Ih(r, l);
    }
    return Ue.of(r);
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
    return e.size > 2 * t.size || t.size > 2 * e.size ? Ue.of(this.break ? [e, null, t] : [e, t]) : (this.left = Cr(this.left, e), this.right = Cr(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, n = !1, s) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return s && s.from <= t + r.length && s.more ? a = r = r.updateHeight(e, t, n, s) : r.updateHeight(e, t, n), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(e, l, n, s) : o.updateHeight(e, l, n), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Ih(i, e) {
  let t, n;
  i[e] == null && (t = i[e - 1]) instanceof Xe && (n = i[e + 1]) instanceof Xe && i.splice(e - 1, 3, new Xe(t.length + 1 + n.length));
}
const ib = 5;
class Ya {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof ot ? s.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new ot(n - this.pos, -1)), this.writtenTo = n, t > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let s = n.widget ? n.widget.estimatedHeight : 0, r = n.widget ? n.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      n.block ? this.addBlock(new Cp(o, s, n)) : (o || r || s >= ib) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new ot(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let n = new Xe(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof ot)
      return e;
    let t = new ot(0, -1);
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
    this.lineStart > -1 && !(t instanceof ot) && !this.isCovered ? this.nodes.push(new ot(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let s of this.nodes)
      s instanceof ot && s.updateHeight(this.oracle, n), n += s ? s.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, n, s) {
    let r = new Ya(n, e);
    return ee.spans(t, n, s, r, 0), r.finish(n);
  }
}
function nb(i, e, t) {
  let n = new sb();
  return ee.compare(i, e, t, n, 0), n.changes;
}
class sb {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, n, s) {
    (e < t || n && n.heightRelevant || s && s.heightRelevant) && ar(e, t, this.changes, 5);
  }
}
function rb(i, e) {
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
function ob(i) {
  let e = i.getBoundingClientRect(), t = i.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function lb(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Do {
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
    return N.replace({
      widget: new ab(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class ab extends Bt {
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
class zh {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Nh, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ge.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(Ia).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new Jy(t), this.stateDeco = e.facet(is).filter((n) => typeof n != "function"), this.heightMap = Ue.empty().applyChanges(this.stateDeco, ie.empty, this.heightOracle.setDoc(e.doc), [new ht(0, 0, 0, e.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = N.set(this.lineGaps.map((n) => n.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let s = n ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new js(r, o));
      }
    }
    return this.viewports = e.sort((n, s) => n.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Nh : new Ga(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Dn(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(is).filter((h) => typeof h != "function");
    let s = e.changedRanges, r = ht.extendWithRanges(s, nb(n, this.stateDeco, e ? e.changes : Te.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Wh(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || hn) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let c = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(hp) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, n = window.getComputedStyle(t), s = this.heightOracle, r = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? ge.RTL : ge.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let c = 0, h = 0;
    if (l.width && l.height) {
      let { scaleX: P, scaleY: $ } = Ld(t, l);
      (P > 5e-3 && Math.abs(this.scaleX - P) > 5e-3 || $ > 5e-3 && Math.abs(this.scaleY - $) > 5e-3) && (this.scaleX = P, this.scaleY = $, c |= 16, o = a = !0);
    }
    let u = (parseInt(n.paddingTop) || 0) * this.scaleY, f = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != u || this.paddingBottom != f) && (this.paddingTop = u, this.paddingBottom = f, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Bd(e.scrollDOM);
    let p = (this.printing ? lb : rb)(t, this.paddingTop), g = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let O = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (O != this.inView && (this.inView = O, O && (a = !0)), !this.inView && !this.scrollTarget && !ob(e.dom))
      return 0;
    let x = l.width;
    if ((this.contentDOMWidth != x || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), a) {
      let P = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(P) && (o = !0), o || s.lineWrapping && Math.abs(x - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: $, charWidth: M, textHeight: b } = e.docView.measureTextSize();
        o = $ > 0 && s.refresh(r, $, M, b, x / M, P), o && (e.docView.minWidth = 0, c |= 16);
      }
      g > 0 && m > 0 ? h = Math.max(g, m) : g < 0 && m < 0 && (h = Math.min(g, m)), Wh();
      for (let $ of this.viewports) {
        let M = $.from == this.viewport.from ? P : e.docView.measureVisibleLineHeights($);
        this.heightMap = (o ? Ue.empty().applyChanges(this.stateDeco, ie.empty, this.heightOracle, [new ht(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new eb($.from, M));
      }
      hn && (c |= 2);
    }
    let w = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return w && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || w) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new js(s.lineAt(o - n * 1e3, Oe.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - n) * 1e3, Oe.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: c } = t.range;
      if (c < a.from || c > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = s.lineAt(c, Oe.ByPos, r, 0, 0), f;
        t.y == "center" ? f = (u.top + u.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && c < a.from ? f = u.top : f = u.bottom - h, a = new js(s.lineAt(f - 1e3 / 2, Oe.ByHeight, r, 0, 0).from, s.lineAt(f + h + 1e3 / 2, Oe.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new js(this.heightMap.lineAt(n, Oe.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, Oe.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView)
      return !0;
    let { top: s } = this.heightMap.lineAt(e, Oe.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, Oe.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
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
      t.touchesRange(s.from, s.to) || n.push(new Do(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
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
    if (this.defaultTextDirection != ge.LTR && !n)
      return [];
    let l = [], a = (h, u, f, d) => {
      if (u - h < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let O of g)
        if (O > h && O < u) {
          a(h, O - 10, f, d), a(O + 10, u, f, d);
          return;
        }
      let m = hb(e, (O) => O.from >= f.from && O.to <= f.to && Math.abs(O.from - h) < r && Math.abs(O.to - u) < r && !g.some((x) => O.from < x && O.to > x));
      if (!m) {
        if (u < f.to && t && n && t.visibleRanges.some((w) => w.from <= u && w.to >= u)) {
          let w = t.moveToLineBoundary(A.cursor(u), !1, !0).head;
          w > h && (u = w);
        }
        let O = this.gapSize(f, h, u, d), x = n || O < 2e6 ? O : 2e6;
        m = new Do(h, u, O, x);
      }
      l.push(m);
    }, c = (h) => {
      if (h.length < o || h.type != Ne.Text)
        return;
      let u = cb(h.from, h.to, this.stateDeco);
      if (u.total < o)
        return;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (n) {
        let g = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, O;
        if (f != null) {
          let x = Vs(u, f), w = ((this.visibleBottom - this.visibleTop) / 2 + g) / h.height;
          m = x - w, O = x + w;
        } else
          m = (this.visibleTop - h.top - g) / h.height, O = (this.visibleBottom - h.top + g) / h.height;
        d = Bs(u, m), p = Bs(u, O);
      } else {
        let g = u.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, O = 0;
        if (g > 2e6)
          for (let M of e)
            M.from >= h.from && M.from < h.to && M.size != M.displaySize && M.from * this.heightOracle.charWidth + O < this.pixelViewport.left && (O = M.size - M.displaySize);
        let x = this.pixelViewport.left + O, w = this.pixelViewport.right + O, P, $;
        if (f != null) {
          let M = Vs(u, f), b = ((w - x) / 2 + m) / g;
          P = M - b, $ = M + b;
        } else
          P = (x - m) / g, $ = (w + m) / g;
        d = Bs(u, P), p = Bs(u, $);
      }
      d > h.from && a(h.from, d, h, u), p < h.to && a(p, h.to, h, u);
    };
    for (let h of this.viewportLines)
      Array.isArray(h.type) ? h.type.forEach(c) : c(h);
    return l;
  }
  gapSize(e, t, n, s) {
    let r = Vs(s, n) - Vs(s, t);
    return this.heightOracle.lineWrapping ? e.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    Do.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = N.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let n = [];
    ee.spans(t, this.viewport.from, this.viewport.to, {
      span(r, o) {
        n.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let s = 0;
    if (n.length != this.visibleRanges.length)
      s = 12;
    else
      for (let r = 0; r < n.length && !(s & 8); r++) {
        let o = this.visibleRanges[r], l = n[r];
        (o.from != l.from || o.to != l.to) && (s |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (s |= 8));
      }
    return this.visibleRanges = n, s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Dn(this.heightMap.lineAt(e, Oe.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Dn(this.heightMap.lineAt(this.scaler.fromDOM(e), Oe.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Dn(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class js {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function cb(i, e, t) {
  let n = [], s = i, r = 0;
  return ee.spans(t, i, e, {
    span() {
    },
    point(o, l) {
      o > s && (n.push({ from: s, to: o }), r += o - s), s = l;
    }
  }, 20), s < e && (n.push({ from: s, to: e }), r += e - s), { total: r, ranges: n };
}
function Bs({ total: i, ranges: e }, t) {
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
function Vs(i, e) {
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
function hb(i, e) {
  for (let t of i)
    if (e(t))
      return t;
}
const Nh = {
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
class Ga {
  constructor(e, t, n) {
    let s = 0, r = 0, o = 0;
    this.viewports = n.map(({ from: l, to: a }) => {
      let c = t.lineAt(l, Oe.ByPos, e, 0, 0).top, h = t.lineAt(a, Oe.ByPos, e, 0, 0).bottom;
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
    return e instanceof Ga ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, n) => t.from == e.viewports[n].from && t.to == e.viewports[n].to) : !1;
  }
}
function Dn(i, e) {
  if (e.scale == 1)
    return i;
  let t = e.toDOM(i.top), n = e.toDOM(i.bottom);
  return new Zt(i.from, i.length, t, n - t, Array.isArray(i._content) ? i._content.map((s) => Dn(s, e)) : i._content);
}
const qs = /* @__PURE__ */ W.define({ combine: (i) => i.join(" ") }), Il = /* @__PURE__ */ W.define({ combine: (i) => i.indexOf(!0) > -1 }), zl = /* @__PURE__ */ hi.newName(), Zp = /* @__PURE__ */ hi.newName(), Tp = /* @__PURE__ */ hi.newName(), Ap = { "&light": "." + Zp, "&dark": "." + Tp };
function Nl(i, e, t) {
  return new hi(e, {
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
const ub = /* @__PURE__ */ Nl("." + zl, {
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
    borderLeftColor: "#ddd"
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
}, Ap), fb = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, jo = q.ie && q.ie_version <= 11;
class db {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new F1(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let n of t)
        this.queue.push(n);
      (q.ie && q.ie_version <= 11 || q.ios && e.composing) && t.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(q.chrome && q.chrome_version < 126) && (this.editContext = new Ob(e), e.state.facet(Nt) && (e.contentDOM.editContext = this.editContext.editContext)), jo && (this.onCharData = (t) => {
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
    if (n.state.facet(Nt) ? n.root.activeElement != this.dom : !lr(this.dom, s))
      return;
    let r = s.anchorNode && n.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (q.ie && q.ie_version <= 11 || q.android && q.chrome) && !n.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    s.focusNode && In(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ts(e.root);
    if (!t)
      return !1;
    let n = q.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && pb(this.view, t) || t;
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
    this.active || (this.observer.observe(this.dom, fb), jo && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), jo && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Ji(this.dom, r.key, r.keyCode));
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
    let r = new Ay(this.view, e, t, n);
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
    let n = this.view.state, s = bp(this.view, t);
    return this.view.state == n && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let n = Uh(t, e.previousSibling || e.target.previousSibling, -1), s = Uh(t, e.nextSibling || e.target.nextSibling, 1);
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
    this.editContext && (this.editContext.update(e), e.startState.facet(Nt) != e.state.facet(Nt) && (e.view.contentDOM.editContext = e.state.facet(Nt) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, n;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Uh(i, e, t) {
  for (; e; ) {
    let n = ce.get(e);
    if (n && n.parent == i)
      return n;
    let s = e.parentNode;
    e = s != i.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Yh(i, e) {
  let t = e.startContainer, n = e.startOffset, s = e.endContainer, r = e.endOffset, o = i.docView.domAtPos(i.state.selection.main.anchor);
  return In(o.node, o.offset, s, r) && ([t, n, s, r] = [s, r, t, n]), { anchorNode: t, anchorOffset: n, focusNode: s, focusOffset: r };
}
function pb(i, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(i.root)[0];
    if (s)
      return Yh(i, s);
  }
  let t = null;
  function n(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return i.contentDOM.addEventListener("beforeinput", n, !0), i.dom.ownerDocument.execCommand("indent"), i.contentDOM.removeEventListener("beforeinput", n, !0), t ? Yh(i, t) : null;
}
class Ob {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (n) => {
      let s = e.state.selection.main, { anchor: r, head: o } = s, l = this.toEditorPos(n.updateRangeStart), a = this.toEditorPos(n.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: n.updateRangeStart, editorBase: l, drifted: !1 });
      let c = { from: l, to: a, insert: ie.of(n.text.split(`
`)) };
      if (c.from == this.from && r < this.from ? c.from = r : c.to == this.to && r > this.to && (c.to = r), c.from == c.to && !c.insert.length) {
        let h = A.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
        h.main.eq(s) || e.dispatch({ selection: h, userEvent: "select" });
        return;
      }
      if ((q.mac || q.android) && c.from == o - 1 && /^\. ?$/.test(n.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (c = { from: l, to: a, insert: ie.of([n.text.replace(".", " ")]) }), this.pendingContextChange = c, !e.state.readOnly) {
        let h = this.to - this.from + (c.to - c.from + c.insert.length);
        Ua(e, c, A.single(this.toEditorPos(n.selectionStart, h), this.toEditorPos(n.selectionEnd, h)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
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
          let a = this.toEditorPos(r.rangeStart), c = this.toEditorPos(r.rangeEnd);
          if (a < c) {
            let h = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            s.push(N.mark({ attributes: { style: h } }).range(a, c));
          }
        }
      }
      e.dispatch({ effects: fp.of(N.set(s)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: n } = this.composing;
        this.composing = null, n && this.reset(e.state);
      }
    };
    for (let n in this.handlers)
      t.addEventListener(n, this.handlers[n]);
    this.measureReq = { read: (n) => {
      this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());
      let s = ts(n.root);
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
    this.composing && (this.composing.drifted || e.transactions.some((n) => !n.isUserEvent("input.type") && n.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
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
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
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
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let n = this.composing;
    return n && n.drifted ? n.editorBase + (e - n.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class j {
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
    this.dispatchTransactions = e.dispatchTransactions || n && ((s) => s.forEach((r) => n(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || H1(e.parent) || document, this.viewState = new zh(e.state || H.create(e)), e.scrollTo && e.scrollTo.is(Es) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Xn).map((s) => new Xo(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new db(this), this.inputState = new Ey(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Ph(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof $e ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
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
    e.some((f) => f.annotation(kp)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Pp(r, o), a || (l = 1));
    let c = this.observer.delayedAndroidKey, h = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(H.phrases) != this.state.facet(H.phrases))
      return this.setState(r);
    s = $r.create(this, r, e), s.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (u && (u = u.map(f.changes)), f.scrollIntoView) {
          let { main: d } = f.state.selection;
          u = new en(d.empty ? d : A.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects)
          d.is(Es) && (u = d.value.clip(this.state));
      }
      this.viewState.update(s, u), this.bidiCache = Zr.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(En) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(qs) != s.state.facet(qs) && (this.viewState.mustMeasureContent = !0), (t || n || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !s.empty)
      for (let f of this.state.facet(Bl))
        try {
          f(s);
        } catch (d) {
          ze(this.state, d, "update listener");
        }
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !bp(this, h) && c.force && Ji(this.contentDOM, c.key, c.keyCode);
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
      this.viewState = new zh(e), this.plugins = e.facet(Xn).map((n) => new Xo(n)), this.pluginMap.clear();
      for (let n of this.plugins)
        n.update(this);
      this.docView.destroy(), this.docView = new Ph(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Xn), n = e.state.facet(Xn);
    if (t != n) {
      let s = [];
      for (let r of n) {
        let o = t.indexOf(r);
        if (o < 0)
          s.push(new Xo(r));
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
          ze(this.state, n, "doc view update listener");
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
          if (Bd(n))
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
            return ze(this.state, p), Gh;
          }
        }), u = $r.create(this, this.state, []), f = !1;
        u.flags |= a, t ? t.flags |= a : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), f = this.docView.update(u), f && this.docViewUpdate());
        for (let d = 0; d < c.length; d++)
          if (h[d] != Gh)
            try {
              let p = c[d];
              p.write && p.write(h[d], this);
            } catch (p) {
              ze(this.state, p);
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
      for (let l of this.state.facet(Bl))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return zl + " " + (this.state.facet(Il) ? Tp : Zp) + " " + this.state.facet(qs);
  }
  updateAttrs() {
    let e = Fh(this, dp, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(Nt) ? "true" : "false",
      class: "cm-content",
      style: `${q.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), Fh(this, Ia, t);
    let n = this.observer.ignore(() => {
      let s = Xl(this.contentDOM, this.contentAttrs, t), r = Xl(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, n;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let s of n.effects)
        if (s.is(j.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(En);
    let e = this.state.facet(j.cspNonce);
    hi.mount(this.root, this.styleModules.concat(ub).reverse(), e ? { nonce: e } : void 0);
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
    return Lo(this, e, Ah(this, e, t, n));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Lo(this, e, Ah(this, e, t, (n) => $y(this, e.head, n)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let n = this.bidiSpans(e), s = this.textDirectionAt(e.from), r = n[t ? n.length - 1 : 0];
    return A.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
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
    return Lo(this, e, Cy(this, e, t, n));
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
    return this.readMeasured(), yp(this, e, t);
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
    let s = this.state.doc.lineAt(e), r = this.bidiSpans(s), o = r[ai.find(r, e - s.from, -1, t)];
    return vs(n, o.dir == ge.LTR == t > 0);
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
    return !this.state.facet(cp) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > gb)
      return tp(e.length);
    let t = this.textDirectionAt(e.from), n;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || ep(r.isolates, n = kh(this, e))))
        return r.order;
    n || (n = kh(this, e));
    let s = hy(e.text, t, n);
    return this.bidiCache.push(new Zr(e.from, e.to, t, n, !0, s)), s;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || q.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Dd(this.contentDOM), this.docView.updateSelection();
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
    return Es.of(new en(typeof e == "number" ? A.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
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
    return Es.of(new en(A.cursor(n.from), "start", "start", n.top - e, t, !0));
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
    return Se.define(() => ({}), { eventHandlers: e });
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
    return Se.define(() => ({}), { eventObservers: e });
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
    let n = hi.newName(), s = [qs.of(n), En.of(Nl(`.${n}`, e))];
    return t && t.dark && s.push(Il.of(!0)), s;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return mi.lowest(En.of(Nl("." + zl, e, Ap)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let n = e.querySelector(".cm-content"), s = n && ce.get(n) || ce.get(e);
    return ((t = s == null ? void 0 : s.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
j.styleModule = En;
j.inputHandler = lp;
j.clipboardInputFilter = qa;
j.clipboardOutputFilter = Wa;
j.scrollHandler = up;
j.focusChangeEffect = ap;
j.perLineTextDirection = cp;
j.exceptionSink = op;
j.updateListener = Bl;
j.editable = Nt;
j.mouseSelectionStyle = rp;
j.dragMovesSelection = sp;
j.clickAddsSelectionRange = np;
j.decorations = is;
j.outerDecorations = pp;
j.atomicRanges = za;
j.bidiIsolatedRanges = Op;
j.scrollMargins = gp;
j.darkTheme = Il;
j.cspNonce = /* @__PURE__ */ W.define({ combine: (i) => i.length ? i[0] : "" });
j.contentAttributes = Ia;
j.editorAttributes = dp;
j.lineWrapping = /* @__PURE__ */ j.contentAttributes.of({ class: "cm-lineWrapping" });
j.announce = /* @__PURE__ */ Y.define();
const gb = 4096, Gh = {};
class Zr {
  constructor(e, t, n, s, r, o) {
    this.from = e, this.to = t, this.dir = n, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let n = [], s = e.length ? e[e.length - 1].dir : ge.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s && !t.touchesRange(o.from, o.to) && n.push(new Zr(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return n;
  }
}
function Fh(i, e, t) {
  for (let n = i.state.facet(e), s = n.length - 1; s >= 0; s--) {
    let r = n[s], o = typeof r == "function" ? r(i) : r;
    o && _l(o, t);
  }
  return t;
}
const mb = q.mac ? "mac" : q.windows ? "win" : q.linux ? "linux" : "key";
function yb(i, e) {
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
function Ws(i, e, t) {
  return e.altKey && (i = "Alt-" + i), e.ctrlKey && (i = "Ctrl-" + i), e.metaKey && (i = "Meta-" + i), t !== !1 && e.shiftKey && (i = "Shift-" + i), i;
}
const bb = /* @__PURE__ */ mi.default(/* @__PURE__ */ j.domEventHandlers({
  keydown(i, e) {
    return Rp(Mp(e.state), i, e, "editor");
  }
})), di = /* @__PURE__ */ W.define({ enables: bb }), Hh = /* @__PURE__ */ new WeakMap();
function Mp(i) {
  let e = i.facet(di), t = Hh.get(e);
  return t || Hh.set(e, t = xb(e.reduce((n, s) => n.concat(s), []))), t;
}
function vb(i, e, t) {
  return Rp(Mp(i.state), e, i, t);
}
let ri = null;
const Sb = 4e3;
function xb(i, e = mb) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = n[o];
    if (a == null)
      n[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, c, h) => {
    var u, f;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((O) => yb(O, e));
    for (let O = 1; O < p.length; O++) {
      let x = p.slice(0, O).join(" ");
      s(x, !0), d[x] || (d[x] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(w) => {
          let P = ri = { view: w, prefix: x, scope: o };
          return setTimeout(() => {
            ri == P && (ri = null);
          }, Sb), !0;
        }]
      });
    }
    let g = p.join(" ");
    s(g, !1);
    let m = d[g] || (d[g] = {
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
          h[f].run.push((d) => u(d, Ul));
      }
    let a = o[e] || o.key;
    if (a)
      for (let c of l)
        r(c, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(c, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let Ul = null;
function Rp(i, e, t, n) {
  Ul = e;
  let s = N1(e), r = Fe(s, 0), o = Ct(r) == s.length && s != " ", l = "", a = !1, c = !1, h = !1;
  ri && ri.view == t && ri.scope == n && (l = ri.prefix + " ", Sp.indexOf(e.keyCode) < 0 && (c = !0, ri = null));
  let u = /* @__PURE__ */ new Set(), f = (m) => {
    if (m) {
      for (let O of m.run)
        if (!u.has(O) && (u.add(O), O(t)))
          return m.stopPropagation && (h = !0), !0;
      m.preventDefault && (m.stopPropagation && (h = !0), c = !0);
    }
    return !1;
  }, d = i[n], p, g;
  return d && (f(d[l + Ws(s, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(q.windows && e.ctrlKey && e.altKey) && (p = ui[e.keyCode]) && p != s ? (f(d[l + Ws(p, e, !0)]) || e.shiftKey && (g = es[e.keyCode]) != s && g != p && f(d[l + Ws(g, e, !1)])) && (a = !0) : o && e.shiftKey && f(d[l + Ws(s, e, !0)]) && (a = !0), !a && f(d._any) && (a = !0)), c && (a = !0), a && h && e.stopPropagation(), Ul = null, a;
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
      let r = _p(e);
      return [new ws(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return wb(e, t, n);
  }
}
function _p(i) {
  let e = i.scrollDOM.getBoundingClientRect();
  return { left: (i.textDirection == ge.LTR ? e.left : e.right - i.scrollDOM.clientWidth * i.scaleX) - i.scrollDOM.scrollLeft * i.scaleX, top: e.top - i.scrollDOM.scrollTop * i.scaleY };
}
function Kh(i, e, t, n) {
  let s = i.coordsAtPos(e, t * 2);
  if (!s)
    return n;
  let r = i.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, l = i.posAtCoords({ x: r.left + 1, y: o }), a = i.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? n : { from: Math.max(n.from, Math.min(l, a)), to: Math.min(n.to, Math.max(l, a)) };
}
function wb(i, e, t) {
  if (t.to <= i.viewport.from || t.from >= i.viewport.to)
    return [];
  let n = Math.max(t.from, i.viewport.from), s = Math.min(t.to, i.viewport.to), r = i.textDirection == ge.LTR, o = i.contentDOM, l = o.getBoundingClientRect(), a = _p(i), c = o.querySelector(".cm-line"), h = c && window.getComputedStyle(c), u = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), f = l.right - (h ? parseInt(h.paddingRight) : 0), d = ql(i, n), p = ql(i, s), g = d.type == Ne.Text ? d : null, m = p.type == Ne.Text ? p : null;
  if (g && (i.lineWrapping || d.widgetLineBreaks) && (g = Kh(i, n, 1, g)), m && (i.lineWrapping || p.widgetLineBreaks) && (m = Kh(i, s, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return x(w(t.from, t.to, g));
  {
    let $ = g ? w(t.from, null, g) : P(d, !1), M = m ? w(null, t.to, m) : P(p, !0), b = [];
    return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && $.bottom + i.defaultLineHeight / 2 < M.top ? b.push(O(u, $.bottom, f, M.top)) : $.bottom < M.top && i.elementAtHeight(($.bottom + M.top) / 2).type == Ne.Text && ($.bottom = M.top = ($.bottom + M.top) / 2), x($).concat(b).concat(x(M));
  }
  function O($, M, b, Q) {
    return new ws(e, $ - a.left, M - a.top, b - $, Q - M);
  }
  function x({ top: $, bottom: M, horizontal: b }) {
    let Q = [];
    for (let v = 0; v < b.length; v += 2)
      Q.push(O(b[v], $, b[v + 1], M));
    return Q;
  }
  function w($, M, b) {
    let Q = 1e9, v = -1e9, T = [];
    function C(Z, _, B, F, te) {
      let ne = i.coordsAtPos(Z, Z == b.to ? -2 : 2), de = i.coordsAtPos(B, B == b.from ? 2 : -2);
      !ne || !de || (Q = Math.min(ne.top, de.top, Q), v = Math.max(ne.bottom, de.bottom, v), te == ge.LTR ? T.push(r && _ ? u : ne.left, r && F ? f : de.right) : T.push(!r && F ? u : de.left, !r && _ ? f : ne.right));
    }
    let k = $ ?? b.from, S = M ?? b.to;
    for (let Z of i.visibleRanges)
      if (Z.to > k && Z.from < S)
        for (let _ = Math.max(Z.from, k), B = Math.min(Z.to, S); ; ) {
          let F = i.state.doc.lineAt(_);
          for (let te of i.bidiSpans(F)) {
            let ne = te.from + F.from, de = te.to + F.from;
            if (ne >= B)
              break;
            de > _ && C(Math.max(ne, _), $ == null && ne <= k, Math.min(de, B), M == null && de >= S, te.dir);
          }
          if (_ = F.to + 1, _ >= B)
            break;
        }
    return T.length == 0 && C(k, $ == null, S, M == null, i.textDirection), { top: Q, bottom: v, horizontal: T };
  }
  function P($, M) {
    let b = l.top + (M ? $.top : $.bottom);
    return { top: b, bottom: b, horizontal: [] };
  }
}
function Qb(i, e) {
  return i.constructor == e.constructor && i.eq(e);
}
class kb {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(ur) != e.state.facet(ur) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, n = e.facet(ur);
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
    if (e.length != this.drawn.length || e.some((t, n) => !Qb(t, this.drawn[n]))) {
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
const ur = /* @__PURE__ */ W.define();
function Xp(i) {
  return [
    Se.define((e) => new kb(e, i)),
    ur.of(i)
  ];
}
const Ep = !(q.ios && q.webkit && q.webkit_version < 534), ns = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Lp(i = {}) {
  return [
    ns.of(i),
    Pb,
    $b,
    Cb,
    hp.of(!0)
  ];
}
function Dp(i) {
  return i.startState.facet(ns) != i.state.facet(ns);
}
const Pb = /* @__PURE__ */ Xp({
  above: !0,
  markers(i) {
    let { state: e } = i, t = e.facet(ns), n = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty ? !r || Ep : t.drawRangeCursor) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : A.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of ws.forRange(i, o, l))
          n.push(a);
      }
    }
    return n;
  },
  update(i, e) {
    i.transactions.some((n) => n.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Dp(i);
    return t && Jh(i.state, e), i.docChanged || i.selectionSet || t;
  },
  mount(i, e) {
    Jh(e.state, i);
  },
  class: "cm-cursorLayer"
});
function Jh(i, e) {
  e.style.animationDuration = i.facet(ns).cursorBlinkRate + "ms";
}
const $b = /* @__PURE__ */ Xp({
  above: !1,
  markers(i) {
    return i.state.selection.ranges.map((e) => e.empty ? [] : ws.forRange(i, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(i, e) {
    return i.docChanged || i.selectionSet || i.viewportChanged || Dp(i);
  },
  class: "cm-selectionLayer"
}), Yl = {
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
Ep && (Yl[".cm-line"].caretColor = Yl[".cm-content"].caretColor = "transparent !important");
const Cb = /* @__PURE__ */ mi.highest(/* @__PURE__ */ j.theme(Yl)), jp = /* @__PURE__ */ Y.define({
  map(i, e) {
    return i == null ? null : e.mapPos(i);
  }
}), jn = /* @__PURE__ */ Ze.define({
  create() {
    return null;
  },
  update(i, e) {
    return i != null && (i = e.changes.mapPos(i)), e.effects.reduce((t, n) => n.is(jp) ? n.value : t, i);
  }
}), Zb = /* @__PURE__ */ Se.fromClass(class {
  constructor(i) {
    this.view = i, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(i) {
    var e;
    let t = i.state.field(jn);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (i.startState.field(jn) != t || i.docChanged || i.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: i } = this, e = i.state.field(jn), t = e != null && i.coordsAtPos(e);
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
    this.view.state.field(jn) != i && this.view.dispatch({ effects: jp.of(i) });
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
function Tb() {
  return [jn, Zb];
}
function eu(i, e, t, n, s) {
  e.lastIndex = 0;
  for (let r = i.iterRange(t, n), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = e.exec(r.value); )
        s(o + l.index, l);
}
function Ab(i, e) {
  let t = i.visibleRanges;
  if (t.length == 1 && t[0].from == i.viewport.from && t[0].to == i.viewport.to)
    return t;
  let n = [];
  for (let { from: s, to: r } of t)
    s = Math.max(i.state.doc.lineAt(s).from, s - e), r = Math.min(i.state.doc.lineAt(r).to, r + e), n.length && n[n.length - 1].to >= s ? n[n.length - 1].to = r : n.push({ from: s, to: r });
  return n;
}
class Mb {
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
    let t = new Gt(), n = t.add.bind(t);
    for (let { from: s, to: r } of Ab(e, this.maxLength))
      eu(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, n));
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
      a >= e.view.viewport.from && l <= e.view.viewport.to && (n = Math.min(l, n), s = Math.max(a, s));
    }), e.viewportMoved || s - n > 1e3 ? this.createDeco(e.view) : s > -1 ? this.updateRange(e.view, t.map(e.changes), n, s) : t;
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
        let f = [], d, p = (g, m, O) => f.push(O.range(g, m));
        if (a == c)
          for (this.regexp.lastIndex = h - a.from; (d = this.regexp.exec(a.text)) && d.index < u - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          eu(e.state.doc, this.regexp, h, u, (g, m) => this.addMatch(m, e, g, p));
        t = t.update({ filterFrom: h, filterTo: u, filter: (g, m) => g < h || m > u, add: f });
      }
    }
    return t;
  }
}
const Gl = /x/.unicode != null ? "gu" : "g", Rb = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Gl), _b = {
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
let Bo = null;
function Xb() {
  var i;
  if (Bo == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Bo = ((i = e.tabSize) !== null && i !== void 0 ? i : e.MozTabSize) != null;
  }
  return Bo || !1;
}
const fr = /* @__PURE__ */ W.define({
  combine(i) {
    let e = St(i, {
      render: null,
      specialChars: Rb,
      addSpecialChars: null
    });
    return (e.replaceTabs = !Xb()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Gl)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Gl)), e;
  }
});
function Bp(i = {}) {
  return [fr.of(i), Eb()];
}
let tu = null;
function Eb() {
  return tu || (tu = Se.fromClass(class {
    constructor(i) {
      this.view = i, this.decorations = N.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(i.state.facet(fr)), this.decorations = this.decorator.createDeco(i);
    }
    makeDecorator(i) {
      return new Mb({
        regexp: i.specialChars,
        decoration: (e, t, n) => {
          let { doc: s } = t.state, r = Fe(e[0], 0);
          if (r == 9) {
            let o = s.lineAt(n), l = t.state.tabSize, a = yn(o.text, l, n - o.from);
            return N.replace({
              widget: new Bb((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = N.replace({ widget: new jb(i, r) }));
        },
        boundary: i.replaceTabs ? void 0 : /[^]/
      });
    }
    update(i) {
      let e = i.state.facet(fr);
      i.startState.facet(fr) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(i.view)) : this.decorations = this.decorator.updateDeco(i, this.decorations);
    }
  }, {
    decorations: (i) => i.decorations
  }));
}
const Lb = "•";
function Db(i) {
  return i >= 32 ? Lb : i == 10 ? "␤" : String.fromCharCode(9216 + i);
}
class jb extends Bt {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Db(this.code), n = e.state.phrase("Control character") + " " + (_b[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, n, t);
    if (s)
      return s;
    let r = document.createElement("span");
    return r.textContent = t, r.title = n, r.setAttribute("aria-label", n), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class Bb extends Bt {
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
function Vb() {
  return Wb;
}
const qb = /* @__PURE__ */ N.line({ class: "cm-activeLine" }), Wb = /* @__PURE__ */ Se.fromClass(class {
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
      s.from > e && (t.push(qb.range(s.from)), e = s.from);
    }
    return N.set(t);
  }
}, {
  decorations: (i) => i.decorations
});
class Ib extends Bt {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM(e) {
    let t = document.createElement("span");
    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(!0)), typeof this.content == "string" ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t;
  }
  coordsAt(e) {
    let t = e.firstChild ? ln(e.firstChild) : [];
    if (!t.length)
      return null;
    let n = window.getComputedStyle(e.parentNode), s = vs(t[0], n.direction != "rtl"), r = parseInt(n.lineHeight);
    return s.bottom - s.top > r * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + r } : s;
  }
  ignoreEvent() {
    return !1;
  }
}
function zb(i) {
  return Se.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = i ? N.set([N.widget({ widget: new Ib(i), side: 1 }).range(0)]) : N.none;
    }
    get decorations() {
      return this.view.state.doc.length ? N.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
}
const Fl = 2e3;
function Nb(i, e, t) {
  let n = Math.min(e.line, t.line), s = Math.max(e.line, t.line), r = [];
  if (e.off > Fl || t.off > Fl || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = n; a <= s; a++) {
      let c = i.doc.line(a);
      c.length <= l && r.push(A.range(c.from + o, c.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = n; a <= s; a++) {
      let c = i.doc.line(a), h = $l(c.text, o, i.tabSize, !0);
      if (h < 0)
        r.push(A.cursor(c.to));
      else {
        let u = $l(c.text, l, i.tabSize);
        r.push(A.range(c.from + h, c.from + u));
      }
    }
  }
  return r;
}
function Ub(i, e) {
  let t = i.coordsAtPos(i.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / i.defaultCharacterWidth)) : -1;
}
function iu(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), n = i.state.doc.lineAt(t), s = t - n.from, r = s > Fl ? -1 : s == n.length ? Ub(i, e.clientX) : yn(n.text, i.state.tabSize, t - n.from);
  return { line: n.number, col: r, off: s };
}
function Yb(i, e) {
  let t = iu(i, e), n = i.state.selection;
  return t ? {
    update(s) {
      if (s.docChanged) {
        let r = s.changes.mapPos(s.startState.doc.line(t.line).from), o = s.state.doc.lineAt(r);
        t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, n = n.map(s.changes);
      }
    },
    get(s, r, o) {
      let l = iu(i, s);
      if (!l)
        return n;
      let a = Nb(i.state, t, l);
      return a.length ? o ? A.create(a.concat(n.ranges)) : A.create(a) : n;
    }
  } : null;
}
function Gb(i) {
  let e = (t) => t.altKey && t.button == 0;
  return j.mouseSelectionStyle.of((t, n) => e(n) ? Yb(t, n) : null);
}
const Fb = {
  Alt: [18, (i) => !!i.altKey],
  Control: [17, (i) => !!i.ctrlKey],
  Shift: [16, (i) => !!i.shiftKey],
  Meta: [91, (i) => !!i.metaKey]
}, Hb = { style: "cursor: crosshair" };
function Kb(i = {}) {
  let [e, t] = Fb[i.key || "Alt"], n = Se.fromClass(class {
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
    j.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(n)) === null || r === void 0) && r.isDown ? Hb : null;
    })
  ];
}
const Cn = "-10000px";
class Vp {
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
function Jb(i) {
  let { win: e } = i;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const Vo = /* @__PURE__ */ W.define({
  combine: (i) => {
    var e, t, n;
    return {
      position: q.ios ? "absolute" : ((e = i.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = i.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((n = i.find((s) => s.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || Jb
    };
  }
}), nu = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ Se.fromClass(class {
  constructor(i) {
    this.view = i, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = i.state.facet(Vo);
    this.position = e.position, this.parent = e.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Vp(i, oo, (t, n) => this.createTooltip(t, n), (t) => {
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
    let t = e || i.geometryChanged, n = i.state.facet(Vo);
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
    return t.dom.style.position = this.position, t.dom.style.top = Cn, t.dom.style.left = "0px", this.container.insertBefore(t.dom, n), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var i, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let n of this.manager.tooltipViews)
      n.dom.remove(), (i = n.destroy) === null || i === void 0 || i.call(n);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let i = 1, e = 1, t = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (q.gecko)
        t = r.offsetParent != this.container.ownerDocument.body;
      else if (r.style.top == Cn && r.style.left == "0px") {
        let o = r.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      }
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (i = r.width / this.parent.offsetWidth, e = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: i, scaleY: e } = this.view.viewState);
    let n = this.view.scrollDOM.getBoundingClientRect(), s = Na(this.view);
    return {
      visible: {
        left: n.left + s.left,
        top: n.top + s.top,
        right: n.right - s.right,
        bottom: n.bottom - s.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(Vo).tooltipSpace(this.view),
      scaleX: i,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(i) {
    var e;
    if (i.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: t, space: n, scaleX: s, scaleY: r } = i, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], c = this.manager.tooltipViews[l], { dom: h } = c, u = i.pos[l], f = i.size[l];
      if (!u || a.clip !== !1 && (u.bottom <= Math.max(t.top, n.top) || u.top >= Math.min(t.bottom, n.bottom) || u.right < Math.max(t.left, n.left) - 0.1 || u.left > Math.min(t.right, n.right) + 0.1)) {
        h.style.top = Cn;
        continue;
      }
      let d = a.arrow ? c.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, g = f.right - f.left, m = (e = nu.get(c)) !== null && e !== void 0 ? e : f.bottom - f.top, O = c.offset || tv, x = this.view.textDirection == ge.LTR, w = f.width > n.right - n.left ? x ? n.left : n.right - f.width : x ? Math.max(n.left, Math.min(u.left - (d ? 14 : 0) + O.x, n.right - g)) : Math.min(Math.max(n.left, u.left - g + (d ? 14 : 0) - O.x), n.right - g), P = this.above[l];
      !a.strictSide && (P ? u.top - m - p - O.y < n.top : u.bottom + m + p + O.y > n.bottom) && P == n.bottom - u.bottom > u.top - n.top && (P = this.above[l] = !P);
      let $ = (P ? u.top - n.top : n.bottom - u.bottom) - p;
      if ($ < m && c.resize !== !1) {
        if ($ < this.view.defaultLineHeight) {
          h.style.top = Cn;
          continue;
        }
        nu.set(c, m), h.style.height = (m = $) / r + "px";
      } else h.style.height && (h.style.height = "");
      let M = P ? u.top - m - p - O.y : u.bottom + p + O.y, b = w + g;
      if (c.overlap !== !0)
        for (let Q of o)
          Q.left < b && Q.right > w && Q.top < M + m && Q.bottom > M && (M = P ? Q.top - m - 2 - p : Q.bottom + p + 2);
      if (this.position == "absolute" ? (h.style.top = (M - i.parent.top) / r + "px", su(h, (w - i.parent.left) / s)) : (h.style.top = M / r + "px", su(h, w / s)), d) {
        let Q = u.left + (x ? O.x : -O.x) - (w + 14 - 7);
        d.style.left = Q / s + "px";
      }
      c.overlap !== !0 && o.push({ left: w, top: M, right: b, bottom: M + m }), h.classList.toggle("cm-tooltip-above", P), h.classList.toggle("cm-tooltip-below", !P), c.positioned && c.positioned(i.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let i of this.manager.tooltipViews)
        i.dom.style.top = Cn;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function su(i, e) {
  let t = parseInt(i.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (i.style.left = e + "px");
}
const ev = /* @__PURE__ */ j.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
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
}), tv = { x: 0, y: 0 }, oo = /* @__PURE__ */ W.define({
  enables: [Fa, ev]
}), Tr = /* @__PURE__ */ W.define({
  combine: (i) => i.reduce((e, t) => e.concat(t), [])
});
class lo {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new lo(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Vp(e, Tr, (t, n) => this.createHostedView(t, n), (t) => t.dom.remove());
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
const iv = /* @__PURE__ */ oo.compute([Tr], (i) => {
  let e = i.facet(Tr);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.map((t) => {
      var n;
      return (n = t.end) !== null && n !== void 0 ? n : t.pos;
    })),
    create: lo.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class nv {
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
    if (n instanceof li)
      s = n.posAtStart;
    else {
      if (s = e.posAtCoords(t), s == null)
        return;
      let l = e.coordsAtPos(s);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(s)).find((h) => h.from <= s && h.to >= s), c = a && a.dir == ge.RTL ? -1 : 1;
      r = t.x < l.left ? -c : c;
    }
    let o = this.source(e, s, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: s };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => ze(e.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(Fa), t = e ? e.manager.tooltips.findIndex((n) => n.create == lo.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, n;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if (s.length && r && !sv(r.dom, e) || this.pending) {
      let { pos: o } = s[0] || this.pending, l = (n = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null && n !== void 0 ? n : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !rv(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
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
const Is = 4;
function sv(i, e) {
  let { left: t, right: n, top: s, bottom: r } = i.getBoundingClientRect(), o;
  if (o = i.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    s = Math.min(l.top, s), r = Math.max(l.bottom, r);
  }
  return e.clientX >= t - Is && e.clientX <= n + Is && e.clientY >= s - Is && e.clientY <= r + Is;
}
function rv(i, e, t, n, s, r) {
  let o = i.scrollDOM.getBoundingClientRect(), l = i.documentTop + i.documentPadding.top + i.contentHeight;
  if (o.left > n || o.right < n || o.top > s || Math.min(o.bottom, l) < s)
    return !1;
  let a = i.posAtCoords({ x: n, y: s }, !1);
  return a >= e && a <= t;
}
function ov(i, e = {}) {
  let t = Y.define(), n = Ze.define({
    create() {
      return [];
    },
    update(s, r) {
      if (s.length && (e.hideOnChange && (r.docChanged || r.selection) ? s = [] : e.hideOn && (s = s.filter((o) => !e.hideOn(r, o))), r.docChanged)) {
        let o = [];
        for (let l of s) {
          let a = r.changes.mapPos(l.pos, -1, Le.TrackDel);
          if (a != null) {
            let c = Object.assign(/* @__PURE__ */ Object.create(null), l);
            c.pos = a, c.end != null && (c.end = r.changes.mapPos(c.end)), o.push(c);
          }
        }
        s = o;
      }
      for (let o of r.effects)
        o.is(t) && (s = o.value), o.is(lv) && (s = []);
      return s;
    },
    provide: (s) => Tr.from(s)
  });
  return {
    active: n,
    extension: [
      n,
      Se.define((s) => new nv(
        s,
        i,
        n,
        t,
        e.hoverTime || 300
        /* Hover.Time */
      )),
      iv
    ]
  };
}
function qp(i, e) {
  let t = i.plugin(Fa);
  if (!t)
    return null;
  let n = t.manager.tooltips.indexOf(e);
  return n < 0 ? null : t.manager.tooltipViews[n];
}
const lv = /* @__PURE__ */ Y.define(), ru = /* @__PURE__ */ W.define({
  combine(i) {
    let e, t;
    for (let n of i)
      e = e || n.topContainer, t = t || n.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function ss(i, e) {
  let t = i.plugin(Wp), n = t ? t.specs.indexOf(e) : -1;
  return n > -1 ? t.panels[n] : null;
}
const Wp = /* @__PURE__ */ Se.fromClass(class {
  constructor(i) {
    this.input = i.state.facet(rs), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(i));
    let e = i.state.facet(ru);
    this.top = new zs(i, !0, e.topContainer), this.bottom = new zs(i, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(i) {
    let e = i.state.facet(ru);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new zs(i.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new zs(i.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = i.state.facet(rs);
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
  provide: (i) => j.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class zs {
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
          e = ou(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = ou(e);
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
function ou(i) {
  let e = i.nextSibling;
  return i.remove(), e;
}
const rs = /* @__PURE__ */ W.define({
  enables: Wp
});
class jt extends Ri {
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
jt.prototype.elementClass = "";
jt.prototype.toDOM = void 0;
jt.prototype.mapMode = Le.TrackBefore;
jt.prototype.startSide = jt.prototype.endSide = -1;
jt.prototype.point = !0;
const dr = /* @__PURE__ */ W.define(), av = /* @__PURE__ */ W.define(), cv = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => ee.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, Nn = /* @__PURE__ */ W.define();
function Ip(i) {
  return [zp(), Nn.of(Object.assign(Object.assign({}, cv), i))];
}
const lu = /* @__PURE__ */ W.define({
  combine: (i) => i.some((e) => e)
});
function zp(i) {
  return [
    hv
  ];
}
const hv = /* @__PURE__ */ Se.fromClass(class {
  constructor(i) {
    this.view = i, this.prevViewport = i.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = i.state.facet(Nn).map((e) => new cu(i, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !i.state.facet(lu), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), i.scrollDOM.insertBefore(this.dom, i.contentDOM);
  }
  update(i) {
    if (this.updateGutters(i)) {
      let e = this.prevViewport, t = i.view.viewport, n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(n < (t.to - t.from) * 0.8);
    }
    i.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(lu) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = i.view.viewport;
  }
  syncGutters(i) {
    let e = this.dom.nextSibling;
    i && this.dom.remove();
    let t = ee.iter(this.view.state.facet(dr), this.view.viewport.from), n = [], s = this.gutters.map((r) => new uv(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (n.length && (n = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == Ne.Text && o) {
            Hl(t, n, l.from);
            for (let a of s)
              a.line(this.view, l, n);
            o = !1;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == Ne.Text) {
        Hl(t, n, r.from);
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
    let e = i.startState.facet(Nn), t = i.state.facet(Nn), n = i.docChanged || i.heightChanged || i.viewportChanged || !ee.eq(i.startState.facet(dr), i.state.facet(dr), i.view.viewport.from, i.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(i) && (n = !0);
    else {
      n = !0;
      let s = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? s.push(new cu(this.view, r)) : (this.gutters[o].update(i), s.push(this.gutters[o]));
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
  provide: (i) => j.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == ge.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX };
  })
});
function au(i) {
  return Array.isArray(i) ? i : [i];
}
function Hl(i, e, t) {
  for (; i.value && i.from <= t; )
    i.from == t && e.push(i.value), i.next();
}
class uv {
  constructor(e, t, n) {
    this.gutter = e, this.height = n, this.i = 0, this.cursor = ee.iter(e.markers, t.from);
  }
  addElement(e, t, n) {
    let { gutter: s } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new Np(e, o, r, n);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(e, o, r, n);
    this.height = t.bottom, this.i++;
  }
  line(e, t, n) {
    let s = [];
    Hl(this.cursor, s, t.from), n.length && (s = s.concat(n));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let n = this.gutter.config.widgetMarker(e, t.widget, t), s = n ? [n] : null;
    for (let r of e.state.facet(av)) {
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
class cu {
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
    this.markers = au(t.markers(e)), t.initialSpacer && (this.spacer = new Np(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = au(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let n = e.view.viewport;
    return !ee.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class Np {
  constructor(e, t, n, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, n, s);
  }
  update(e, t, n, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), fv(this.markers, s) || this.setMarkers(e, s);
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
function fv(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (!i[t].compare(e[t]))
      return !1;
  return !0;
}
const dv = /* @__PURE__ */ W.define(), pv = /* @__PURE__ */ W.define(), Gi = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, { formatNumber: String, domEventHandlers: {} }, {
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
class qo extends jt {
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
function Wo(i, e) {
  return i.state.facet(Gi).formatNumber(e, i.state);
}
const Ov = /* @__PURE__ */ Nn.compute([Gi], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(dv);
  },
  lineMarker(e, t, n) {
    return n.some((s) => s.toDOM) ? null : new qo(Wo(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, n) => {
    for (let s of e.state.facet(pv)) {
      let r = s(e, t, n);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Gi) != e.state.facet(Gi),
  initialSpacer(e) {
    return new qo(Wo(e, hu(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = Wo(t.view, hu(t.view.state.doc.lines));
    return n == e.number ? e : new qo(n);
  },
  domEventHandlers: i.facet(Gi).domEventHandlers
}));
function gv(i = {}) {
  return [
    Gi.of(i),
    zp(),
    Ov
  ];
}
function hu(i) {
  let e = 9;
  for (; e < i; )
    e = e * 10 + 9;
  return e;
}
const mv = /* @__PURE__ */ new class extends jt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), yv = /* @__PURE__ */ dr.compute(["selection"], (i) => {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let s = i.doc.lineAt(n.head).from;
    s > t && (t = s, e.push(mv.range(s)));
  }
  return ee.of(e);
});
function bv() {
  return yv;
}
const Up = 1024;
let vv = 0;
class Io {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class K {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = vv++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
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
    return typeof e != "function" && (e = nt.match(e)), (t) => {
      let n = e(t);
      return n === void 0 ? null : [this, n];
    };
  }
}
K.closedBy = new K({ deserialize: (i) => i.split(" ") });
K.openedBy = new K({ deserialize: (i) => i.split(" ") });
K.group = new K({ deserialize: (i) => i.split(" ") });
K.isolate = new K({ deserialize: (i) => {
  if (i && i != "rtl" && i != "ltr" && i != "auto")
    throw new RangeError("Invalid value for isolate: " + i);
  return i || "auto";
} });
K.contextHash = new K({ perNode: !0 });
K.lookAhead = new K({ perNode: !0 });
K.mounted = new K({ perNode: !0 });
class Ar {
  constructor(e, t, n) {
    this.tree = e, this.overlay = t, this.parser = n;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[K.mounted.id];
  }
}
const Sv = /* @__PURE__ */ Object.create(null);
class nt {
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
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : Sv, n = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new nt(e.name || "", t, e.id, n);
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
      let t = this.prop(K.group);
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
      for (let s = n.prop(K.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? n.name : s[r]];
        if (o)
          return o;
      }
    };
  }
}
nt.none = new nt(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class Ha {
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
      t.push(s ? new nt(n.name, s, n.id, n.flags) : n);
    }
    return new Ha(t);
  }
}
const Ns = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap();
var Ae;
(function(i) {
  i[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Ae || (Ae = {}));
class Ce {
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
    return new Jl(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, n = 0) {
    let s = Ns.get(this) || this.topNode, r = new Jl(s);
    return r.moveTo(e, t), Ns.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new it(this, 0, 0, null);
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
    let n = os(Ns.get(this) || this.topNode, e, t, !1);
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
    let n = os(uu.get(this) || this.topNode, e, t, !0);
    return uu.set(this, n), n;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return Qv(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: n, from: s = 0, to: r = this.length } = e, o = e.mode || 0, l = (o & Ae.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | Ae.IncludeAnonymous); ; ) {
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
    return this.children.length <= 8 ? this : ec(nt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, n, s) => new Ce(this.type, t, n, s, this.propValues), e.makeTree || ((t, n, s) => new Ce(nt.none, t, n, s)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return kv(e);
  }
}
Ce.empty = new Ce(nt.none, [], [], 0);
class Ka {
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
    return new Ka(this.buffer, this.index);
  }
}
class pi {
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
    return nt.none;
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
    for (let a = e; a != t && !(Yp(r, s, o[a + 1], o[a + 2]) && (l = a, n > 0)); a = o[a + 3])
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
    return new pi(r, o, this.set);
  }
}
function Yp(i, e, t, n) {
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
function os(i, e, t, n) {
  for (var s; i.from == i.to || (t < 1 ? i.from >= e : i.from > e) || (t > -1 ? i.to <= e : i.to < e); ) {
    let o = !n && i instanceof it && i.index < 0 ? null : i.parent;
    if (!o)
      return i;
    i = o;
  }
  let r = n ? 0 : Ae.IgnoreOverlays;
  if (n)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof it && o.index < 0 && ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) != o.from && (i = l);
  for (; ; ) {
    let o = i.enter(e, t, r);
    if (!o)
      return i;
    i = o;
  }
}
class Gp {
  cursor(e = 0) {
    return new Jl(this, e);
  }
  getChild(e, t = null, n = null) {
    let s = fu(this, e, t, n);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return fu(this, e, t, n);
  }
  resolve(e, t = 0) {
    return os(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return os(this, e, t, !0);
  }
  matchContext(e) {
    return Kl(this.parent, e);
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
class it extends Gp {
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
        if (Yp(s, n, u, u + h.length)) {
          if (h instanceof pi) {
            if (r & Ae.ExcludeBuffers)
              continue;
            let f = h.findChild(0, h.buffer.length, t, n - u, s);
            if (f > -1)
              return new At(new xv(o, h, e, u), null, f);
          } else if (r & Ae.IncludeAnonymous || !h.type.isAnonymous || Ja(h)) {
            let f;
            if (!(r & Ae.IgnoreMounts) && (f = Ar.get(h)) && !f.overlay)
              return new it(f.tree, u, e, o);
            let d = new it(h, u, e, o);
            return r & Ae.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? h.children.length - 1 : 0, t, n, s);
          }
        }
      }
      if (r & Ae.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
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
    if (!(n & Ae.IgnoreOverlays) && (s = Ar.get(this._tree)) && s.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of s.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new it(s.tree, s.overlay[0].from + this.from, -1, this);
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
function fu(i, e, t, n) {
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
function Kl(i, e, t = e.length - 1) {
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
class xv {
  constructor(e, t, n, s) {
    this.parent = e, this.buffer = t, this.index = n, this.start = s;
  }
}
class At extends Gp {
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
    return r < 0 ? null : new At(this.context, this, r);
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
    if (n & Ae.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, r = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return r < 0 ? null : new At(this.context, this, r);
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
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new At(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new At(this.context, this._parent, e.findChild(
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
    return new Ce(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Fp(i) {
  if (!i.length)
    return null;
  let e = 0, t = i[0];
  for (let r = 1; r < i.length; r++) {
    let o = i[r];
    (o.from > t.from || o.to < t.to) && (t = o, e = r);
  }
  let n = t instanceof it && t.index < 0 ? null : t.parent, s = i.slice();
  return n ? s[e] = n : s.splice(e, 1), new wv(s, t);
}
class wv {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return Fp(this.heads);
  }
}
function Qv(i, e, t) {
  let n = i.resolveInner(e, t), s = null;
  for (let r = n instanceof it ? n : n.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [n])).push(o.resolve(e, t)), r = o;
    } else {
      let o = Ar.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new it(o.tree, o.overlay[0].from + r.from, -1, r);
        (s || (s = [n])).push(os(l, e, t, !1));
      }
    }
  return s ? Fp(s) : n;
}
class Jl {
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
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof it)
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
    return e ? e instanceof it ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
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
    return this.buffer ? n & Ae.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Ae.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Ae.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
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
          if (this.mode & Ae.IncludeAnonymous || l instanceof pi || !l.type.isAnonymous || Ja(l))
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
      t = new At(this.buffer, t, this.stack[s]);
    return this.bufferNode = new At(this.buffer, t, this.index);
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
      return Kl(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: n } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0)
        return Kl(this._tree, e, s);
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
function Ja(i) {
  return i.children.some((e) => e instanceof pi || !e.type.isAnonymous || Ja(e));
}
function kv(i) {
  var e;
  let { buffer: t, nodeSet: n, maxBufferLength: s = Up, reused: r = [], minRepeatType: o = n.types.length } = i, l = Array.isArray(t) ? new Ka(t, t.length) : t, a = n.types, c = 0, h = 0;
  function u($, M, b, Q, v, T) {
    let { id: C, start: k, end: S, size: Z } = l, _ = h, B = c;
    for (; Z < 0; )
      if (l.next(), Z == -1) {
        let be = r[C];
        b.push(be), Q.push(k - $);
        return;
      } else if (Z == -3) {
        c = C;
        return;
      } else if (Z == -4) {
        h = C;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${Z}`);
    let F = a[C], te, ne, de = k - $;
    if (S - k <= s && (ne = m(l.pos - M, v))) {
      let be = new Uint16Array(ne.size - ne.skip), ye = l.pos - ne.size, ke = be.length;
      for (; l.pos > ye; )
        ke = O(ne.start, be, ke);
      te = new pi(be, S - ne.start, n), de = ne.start - $;
    } else {
      let be = l.pos - Z;
      l.next();
      let ye = [], ke = [], Wt = C >= o ? C : -1, ii = 0, re = S;
      for (; l.pos > be; )
        Wt >= 0 && l.id == Wt && l.size >= 0 ? (l.end <= re - s && (p(ye, ke, k, ii, l.end, re, Wt, _, B), ii = ye.length, re = l.end), l.next()) : T > 2500 ? f(k, be, ye, ke) : u(k, be, ye, ke, Wt, T + 1);
      if (Wt >= 0 && ii > 0 && ii < ye.length && p(ye, ke, k, ii, k, re, Wt, _, B), ye.reverse(), ke.reverse(), Wt > -1 && ii > 0) {
        let Ie = d(F, B);
        te = ec(F, ye, ke, 0, ye.length, 0, S - k, Ie, Ie);
      } else
        te = g(F, ye, ke, S - k, _ - S, B);
    }
    b.push(te), Q.push(de);
  }
  function f($, M, b, Q) {
    let v = [], T = 0, C = -1;
    for (; l.pos > M; ) {
      let { id: k, start: S, end: Z, size: _ } = l;
      if (_ > 4)
        l.next();
      else {
        if (C > -1 && S < C)
          break;
        C < 0 && (C = Z - s), v.push(k, S, Z), T++, l.next();
      }
    }
    if (T) {
      let k = new Uint16Array(T * 4), S = v[v.length - 2];
      for (let Z = v.length - 3, _ = 0; Z >= 0; Z -= 3)
        k[_++] = v[Z], k[_++] = v[Z + 1] - S, k[_++] = v[Z + 2] - S, k[_++] = _;
      b.push(new pi(k, v[2] - S, n)), Q.push(S - $);
    }
  }
  function d($, M) {
    return (b, Q, v) => {
      let T = 0, C = b.length - 1, k, S;
      if (C >= 0 && (k = b[C]) instanceof Ce) {
        if (!C && k.type == $ && k.length == v)
          return k;
        (S = k.prop(K.lookAhead)) && (T = Q[C] + k.length + S);
      }
      return g($, b, Q, v, T, M);
    };
  }
  function p($, M, b, Q, v, T, C, k, S) {
    let Z = [], _ = [];
    for (; $.length > Q; )
      Z.push($.pop()), _.push(M.pop() + b - v);
    $.push(g(n.types[C], Z, _, T - v, k - T, S)), M.push(v - b);
  }
  function g($, M, b, Q, v, T, C) {
    if (T) {
      let k = [K.contextHash, T];
      C = C ? [k].concat(C) : [k];
    }
    if (v > 25) {
      let k = [K.lookAhead, v];
      C = C ? [k].concat(C) : [k];
    }
    return new Ce($, M, b, Q, C);
  }
  function m($, M) {
    let b = l.fork(), Q = 0, v = 0, T = 0, C = b.end - s, k = { size: 0, start: 0, skip: 0 };
    e: for (let S = b.pos - $; b.pos > S; ) {
      let Z = b.size;
      if (b.id == M && Z >= 0) {
        k.size = Q, k.start = v, k.skip = T, T += 4, Q += 4, b.next();
        continue;
      }
      let _ = b.pos - Z;
      if (Z < 0 || _ < S || b.start < C)
        break;
      let B = b.id >= o ? 4 : 0, F = b.start;
      for (b.next(); b.pos > _; ) {
        if (b.size < 0)
          if (b.size == -3)
            B += 4;
          else
            break e;
        else b.id >= o && (B += 4);
        b.next();
      }
      v = F, Q += Z, T += B;
    }
    return (M < 0 || Q == $) && (k.size = Q, k.start = v, k.skip = T), k.size > 4 ? k : void 0;
  }
  function O($, M, b) {
    let { id: Q, start: v, end: T, size: C } = l;
    if (l.next(), C >= 0 && Q < o) {
      let k = b;
      if (C > 4) {
        let S = l.pos - (C - 4);
        for (; l.pos > S; )
          b = O($, M, b);
      }
      M[--b] = k, M[--b] = T - $, M[--b] = v - $, M[--b] = Q;
    } else C == -3 ? c = Q : C == -4 && (h = Q);
    return b;
  }
  let x = [], w = [];
  for (; l.pos > 0; )
    u(i.start || 0, i.bufferStart || 0, x, w, -1, 0);
  let P = (e = i.length) !== null && e !== void 0 ? e : x.length ? w[0] + x[0].length : 0;
  return new Ce(a[i.topID], x.reverse(), w.reverse(), P);
}
const du = /* @__PURE__ */ new WeakMap();
function pr(i, e) {
  if (!i.isAnonymous || e instanceof pi || e.type != i)
    return 1;
  let t = du.get(e);
  if (t == null) {
    t = 1;
    for (let n of e.children) {
      if (n.type != i || !(n instanceof Ce)) {
        t = 1;
        break;
      }
      t += pr(i, n);
    }
    du.set(e, t);
  }
  return t;
}
function ec(i, e, t, n, s, r, o, l, a) {
  let c = 0;
  for (let p = n; p < s; p++)
    c += pr(i, e[p]);
  let h = Math.ceil(
    c * 1.5 / 8
    /* Balance.BranchFactor */
  ), u = [], f = [];
  function d(p, g, m, O, x) {
    for (let w = m; w < O; ) {
      let P = w, $ = g[w], M = pr(i, p[w]);
      for (w++; w < O; w++) {
        let b = pr(i, p[w]);
        if (M + b >= h)
          break;
        M += b;
      }
      if (w == P + 1) {
        if (M > h) {
          let b = p[P];
          d(b.children, b.positions, 0, b.children.length, g[P] + x);
          continue;
        }
        u.push(p[P]);
      } else {
        let b = g[w - 1] + p[w - 1].length - $;
        u.push(ec(i, p, g, P, w, $, b, null, a));
      }
      f.push($ + x - r);
    }
  }
  return d(e, t, n, s, 0), (l || a)(u, f, o);
}
class Pv {
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
    e instanceof At ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof it && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof At ? this.getBuffer(e.context.buffer, e.index) : e instanceof it ? this.map.get(e.tree) : void 0;
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
class Ci {
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
    let s = [new Ci(0, e.length, e, 0, !1, n)];
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
            f = d >= p ? null : new Ci(d, p, f.tree, f.offset + c, l > 0, !!h);
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
class Hp {
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
    return typeof e == "string" && (e = new $v(e)), n = n ? n.length ? n.map((s) => new Io(s.from, s.to)) : [new Io(0, 0)] : [new Io(0, e.length)], this.createParse(e, t || [], n);
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
class $v {
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
new K({ perNode: !0 });
let Cv = 0, It = class ea {
  /**
  @internal
  */
  constructor(e, t, n, s) {
    this.name = e, this.set = t, this.base = n, this.modified = s, this.id = Cv++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let n = typeof e == "string" ? e : "?";
    if (e instanceof ea && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let s = new ea(n, [], null, []);
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
    let t = new Mr(e);
    return (n) => n.modified.indexOf(t) > -1 ? n : Mr.get(n.base || n, n.modified.concat(t).sort((s, r) => s.id - r.id));
  }
}, Zv = 0;
class Mr {
  constructor(e) {
    this.name = e, this.instances = [], this.id = Zv++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let n = t[0].instances.find((l) => l.base == e && Tv(t, l.modified));
    if (n)
      return n;
    let s = [], r = new It(e.name, s, e, t);
    for (let l of t)
      l.instances.push(r);
    let o = Av(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          s.push(Mr.get(l, a));
    return r;
  }
}
function Tv(i, e) {
  return i.length == e.length && i.every((t, n) => t == e[n]);
}
function Av(i) {
  let e = [[]];
  for (let t = 0; t < i.length; t++)
    for (let n = 0, s = e.length; n < s; n++)
      e.push(e[n].concat(i[t]));
  return e.sort((t, n) => n.length - t.length);
}
function tc(i) {
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
        let h = new Rr(n, o, a > 0 ? r.slice(0, a) : null);
        e[c] = h.sort(e[c]);
      }
  }
  return Kp.add(e);
}
const Kp = new K();
class Rr {
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
Rr.empty = new Rr([], 2, null);
function Jp(i, e) {
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
function Mv(i, e) {
  let t = null;
  for (let n of i) {
    let s = n.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function Rv(i, e, t, n = 0, s = i.length) {
  let r = new _v(n, Array.isArray(e) ? e : [e], t);
  r.highlightRange(i.cursor(), n, s, "", r.highlighters), r.flush(s);
}
class _v {
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
    let c = s, h = Xv(e) || Rr.empty, u = Mv(r, h.tags);
    if (u && (c && (c += " "), c += u, h.mode == 1 && (s += (s ? " " : "") + u)), this.startSpan(Math.max(t, l), c), h.opaque)
      return;
    let f = e.tree && e.tree.prop(K.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(f.tree.type)), g = e.firstChild();
      for (let m = 0, O = l; ; m++) {
        let x = m < f.overlay.length ? f.overlay[m] : null, w = x ? x.from + l : a, P = Math.max(t, O), $ = Math.min(n, w);
        if (P < $ && g)
          for (; e.from < $ && (this.highlightRange(e, P, $, s, r), this.startSpan(Math.min($, e.to), c), !(e.to >= w || !e.nextSibling())); )
            ;
        if (!x || w > n)
          break;
        O = x.to + l, O > t && (this.highlightRange(d.cursor(), Math.max(t, x.from + l), Math.min(n, O), "", p), this.startSpan(Math.min(n, O), c));
      }
      g && e.parent();
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
function Xv(i) {
  let e = i.type.prop(Kp);
  for (; e && e.context && !i.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const D = It.define, Us = D(), ni = D(), pu = D(ni), Ou = D(ni), si = D(), Ys = D(si), zo = D(si), Pt = D(), bi = D(Pt), Qt = D(), kt = D(), ta = D(), Zn = D(ta), Gs = D(), y = {
  /**
  A comment.
  */
  comment: Us,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: D(Us),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: D(Us),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: D(Us),
  /**
  Any kind of identifier.
  */
  name: ni,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: D(ni),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: pu,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: D(pu),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Ou,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: D(Ou),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: D(ni),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: D(ni),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: D(ni),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: D(ni),
  /**
  A literal value.
  */
  literal: si,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Ys,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: D(Ys),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: D(Ys),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: D(Ys),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: zo,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: D(zo),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: D(zo),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: D(si),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: D(si),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: D(si),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: D(si),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: D(si),
  /**
  A language keyword.
  */
  keyword: Qt,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: D(Qt),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: D(Qt),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: D(Qt),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: D(Qt),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: D(Qt),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: D(Qt),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: D(Qt),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: D(Qt),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: D(Qt),
  /**
  An operator.
  */
  operator: kt,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: D(kt),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: D(kt),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: D(kt),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: D(kt),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: D(kt),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: D(kt),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: D(kt),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: D(kt),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: D(kt),
  /**
  Program or markup punctuation.
  */
  punctuation: ta,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: D(ta),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: Zn,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: D(Zn),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: D(Zn),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: D(Zn),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: D(Zn),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Pt,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: bi,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: D(bi),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: D(bi),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: D(bi),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: D(bi),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: D(bi),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: D(bi),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: D(Pt),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: D(Pt),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: D(Pt),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: D(Pt),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: D(Pt),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: D(Pt),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: D(Pt),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: D(Pt),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: D(),
  /**
  Deleted text.
  */
  deleted: D(),
  /**
  Changed text.
  */
  changed: D(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: D(),
  /**
  Metadata or meta-instruction.
  */
  meta: Gs,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: D(Gs),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: D(Gs),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: D(Gs),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: It.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: It.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: It.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: It.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: It.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: It.defineModifier("special")
};
for (let i in y) {
  let e = y[i];
  e instanceof It && (e.name = i);
}
Jp([
  { tag: y.link, class: "tok-link" },
  { tag: y.heading, class: "tok-heading" },
  { tag: y.emphasis, class: "tok-emphasis" },
  { tag: y.strong, class: "tok-strong" },
  { tag: y.keyword, class: "tok-keyword" },
  { tag: y.atom, class: "tok-atom" },
  { tag: y.bool, class: "tok-bool" },
  { tag: y.url, class: "tok-url" },
  { tag: y.labelName, class: "tok-labelName" },
  { tag: y.inserted, class: "tok-inserted" },
  { tag: y.deleted, class: "tok-deleted" },
  { tag: y.literal, class: "tok-literal" },
  { tag: y.string, class: "tok-string" },
  { tag: y.number, class: "tok-number" },
  { tag: [y.regexp, y.escape, y.special(y.string)], class: "tok-string2" },
  { tag: y.variableName, class: "tok-variableName" },
  { tag: y.local(y.variableName), class: "tok-variableName tok-local" },
  { tag: y.definition(y.variableName), class: "tok-variableName tok-definition" },
  { tag: y.special(y.variableName), class: "tok-variableName2" },
  { tag: y.definition(y.propertyName), class: "tok-propertyName tok-definition" },
  { tag: y.typeName, class: "tok-typeName" },
  { tag: y.namespace, class: "tok-namespace" },
  { tag: y.className, class: "tok-className" },
  { tag: y.macroName, class: "tok-macroName" },
  { tag: y.propertyName, class: "tok-propertyName" },
  { tag: y.operator, class: "tok-operator" },
  { tag: y.comment, class: "tok-comment" },
  { tag: y.meta, class: "tok-meta" },
  { tag: y.invalid, class: "tok-invalid" },
  { tag: y.punctuation, class: "tok-punctuation" }
]);
var No;
const Fi = /* @__PURE__ */ new K();
function eO(i) {
  return W.define({
    combine: i ? (e) => e.concat(i) : void 0
  });
}
const ic = /* @__PURE__ */ new K();
class gt {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, n = [], s = "") {
    this.data = e, this.name = s, H.prototype.hasOwnProperty("tree") || Object.defineProperty(H.prototype, "tree", { get() {
      return Me(this);
    } }), this.parser = t, this.extension = [
      Oi.of(this),
      H.languageData.of((r, o, l) => {
        let a = gu(r, o, l), c = a.type.prop(Fi);
        if (!c)
          return [];
        let h = r.facet(c), u = a.type.prop(ic);
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
    return gu(e, t, n).type.prop(Fi) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(Oi);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let n = [], s = (r, o) => {
      if (r.prop(Fi) == this.data) {
        n.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(K.mounted);
      if (l) {
        if (l.tree.prop(Fi) == this.data) {
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
        c instanceof Ce && s(c, r.positions[a] + o);
      }
    };
    return s(Me(e), 0), n;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
gt.setState = /* @__PURE__ */ Y.define();
function gu(i, e, t) {
  let n = i.facet(Oi), s = Me(i).topNode;
  if (!n || n.allowsNesting)
    for (let r = s; r; r = r.enter(e, t, Ae.ExcludeBuffers))
      r.type.isTop && (s = r);
  return s;
}
class ls extends gt {
  constructor(e, t, n) {
    super(e, t, [], n), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = eO(e.languageData);
    return new ls(t, e.parser.configure({
      props: [Fi.add((n) => n.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new ls(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function Me(i) {
  let e = i.field(gt.state, !1);
  return e ? e.tree : Ce.empty;
}
class Ev {
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
let Tn = null;
class _r {
  constructor(e, t, n = [], s, r, o, l, a) {
    this.parser = e, this.state = t, this.fragments = n, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new _r(e, t, [], Ce.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new Ev(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != Ce.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var n;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(Ci.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
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
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Ci.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Tn;
    Tn = this;
    try {
      return e();
    } finally {
      Tn = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = mu(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: n, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((c, h, u, f) => a.push({ fromA: c, toA: h, fromB: u, toB: f })), n = Ci.applyChanges(n, a), s = Ce.empty, r = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let c of this.skipped) {
          let h = e.mapPos(c.from, 1), u = e.mapPos(c.to, -1);
          h < u && l.push({ from: h, to: u });
        }
      }
    }
    return new _r(this.parser, t, n, s, r, o, l, this.scheduleOn);
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
      s < e.to && r > e.from && (this.fragments = mu(this.fragments, s, r), this.skipped.splice(n--, 1));
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
    return new class extends Hp {
      createParse(t, n, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = Tn;
            if (a) {
              for (let c of s)
                a.tempSkipped.push(c);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new Ce(nt.none, [], [], o - r);
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
    return Tn;
  }
}
function mu(i, e, t) {
  return Ci.applyChanges(i, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class un {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), n = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, n) || t.takeTree(), new un(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), n = _r.create(e.facet(Oi).parser, e, { from: 0, to: t });
    return n.work(20, t) || n.takeTree(), new un(n);
  }
}
gt.state = /* @__PURE__ */ Ze.define({
  create: un.init,
  update(i, e) {
    for (let t of e.effects)
      if (t.is(gt.setState))
        return t.value;
    return e.startState.facet(Oi) != e.state.facet(Oi) ? un.init(e.state) : i.apply(e);
  }
});
let tO = (i) => {
  let e = setTimeout(
    () => i(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (tO = (i) => {
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
const Uo = typeof navigator < "u" && (!((No = navigator.scheduling) === null || No === void 0) && No.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Lv = /* @__PURE__ */ Se.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(gt.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(gt.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = tO(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: n, viewport: { to: s } } = this.view, r = n.field(gt.state);
    if (r.tree == r.context.tree && r.context.isDone(
      s + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Uo ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && n.doc.length > s + 1e3, a = r.context.work(() => Uo && Uo() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: gt.setState.of(new un(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => ze(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
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
}), Oi = /* @__PURE__ */ W.define({
  combine(i) {
    return i.length ? i[0] : null;
  },
  enables: (i) => [
    gt.state,
    Lv,
    j.contentAttributes.compute([i], (e) => {
      let t = e.facet(i);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class iO {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const Dv = /* @__PURE__ */ W.define(), Qs = /* @__PURE__ */ W.define({
  combine: (i) => {
    if (!i.length)
      return "  ";
    let e = i[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
    return e;
  }
});
function Xr(i) {
  let e = i.facet(Qs);
  return e.charCodeAt(0) == 9 ? i.tabSize * e.length : e.length;
}
function as(i, e) {
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
function nc(i, e) {
  i instanceof H && (i = new ao(i));
  for (let n of i.state.facet(Dv)) {
    let s = n(i, e);
    if (s !== void 0)
      return s;
  }
  let t = Me(i.state);
  return t.length >= e ? jv(i, t, e) : null;
}
class ao {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Xr(e);
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
    return yn(e, this.state.tabSize, t);
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
const sc = /* @__PURE__ */ new K();
function jv(i, e, t) {
  let n = e.resolveStack(t), s = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (s != n.node) {
    let r = [];
    for (let o = s; o && !(o.from == n.node.from && o.type == n.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      n = { node: r[o], next: n };
  }
  return nO(n, i, t);
}
function nO(i, e, t) {
  for (let n = i; n; n = n.next) {
    let s = Vv(n.node);
    if (s)
      return s(rc.create(e, t, n));
  }
  return 0;
}
function Bv(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function Vv(i) {
  let e = i.type.prop(sc);
  if (e)
    return e;
  let t = i.firstChild, n;
  if (t && (n = t.type.prop(K.closedBy))) {
    let s = i.lastChild, r = s && n.indexOf(s.name) > -1;
    return (o) => sO(o, !0, 1, void 0, r && !Bv(o) ? s.from : void 0);
  }
  return i.parent == null ? qv : null;
}
function qv() {
  return 0;
}
class rc extends ao {
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
    return new rc(e, t, n);
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
      if (Wv(n, e))
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
    return nO(this.context.next, this.base, this.pos);
  }
}
function Wv(i, e) {
  for (let t = e; t; t = t.parent)
    if (i == t)
      return !0;
  return !1;
}
function Iv(i) {
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
function ia({ closing: i, align: e = !0, units: t = 1 }) {
  return (n) => sO(n, e, t, i);
}
function sO(i, e, t, n, s) {
  let r = i.textAfter, o = r.match(/^\s*/)[0].length, l = n && r.slice(o, o + n.length) == n || s == i.pos + o, a = e ? Iv(i) : null;
  return a ? l ? i.column(a.from) : i.column(a.to) : i.baseIndent + (l ? 0 : i.unit * t);
}
const zv = (i) => i.baseIndent;
function Yo({ except: i, units: e = 1 } = {}) {
  return (t) => {
    let n = i && i.test(t.textAfter);
    return t.baseIndent + (n ? 0 : e * t.unit);
  };
}
const Nv = 200;
function Uv() {
  return H.transactionFilter.of((i) => {
    if (!i.docChanged || !i.isUserEvent("input.type") && !i.isUserEvent("input.complete"))
      return i;
    let e = i.startState.languageDataAt("indentOnInput", i.startState.selection.main.head);
    if (!e.length)
      return i;
    let t = i.newDoc, { head: n } = i.newSelection.main, s = t.lineAt(n);
    if (n > s.from + Nv)
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
      let u = nc(o, h.from);
      if (u == null)
        continue;
      let f = /^\s*/.exec(h.text)[0], d = as(o, u);
      f != d && a.push({ from: h.from, to: h.from + f.length, insert: d });
    }
    return a.length ? [i, { changes: a, sequential: !0 }] : i;
  });
}
const Yv = /* @__PURE__ */ W.define(), oc = /* @__PURE__ */ new K();
function rO(i) {
  let e = i.firstChild, t = i.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? i.to : t.from } : null;
}
function Gv(i, e, t) {
  let n = Me(i);
  if (n.length < t)
    return null;
  let s = n.resolveStack(t, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t)
      continue;
    if (r && l.from < e)
      break;
    let a = l.type.prop(oc);
    if (a && (l.to < n.length - 50 || n.length == i.doc.length || !Fv(l))) {
      let c = a(l, i);
      c && c.from <= t && c.from >= e && c.to > t && (r = c);
    }
  }
  return r;
}
function Fv(i) {
  let e = i.lastChild;
  return e && e.to == i.to && e.type.isError;
}
function Er(i, e, t) {
  for (let n of i.facet(Yv)) {
    let s = n(i, e, t);
    if (s)
      return s;
  }
  return Gv(i, e, t);
}
function oO(i, e) {
  let t = e.mapPos(i.from, 1), n = e.mapPos(i.to, -1);
  return t >= n ? void 0 : { from: t, to: n };
}
const co = /* @__PURE__ */ Y.define({ map: oO }), ks = /* @__PURE__ */ Y.define({ map: oO });
function lO(i) {
  let e = [];
  for (let { head: t } of i.state.selection.ranges)
    e.some((n) => n.from <= t && n.to >= t) || e.push(i.lineBlockAt(t));
  return e;
}
const Li = /* @__PURE__ */ Ze.define({
  create() {
    return N.none;
  },
  update(i, e) {
    i = i.map(e.changes);
    for (let t of e.effects)
      if (t.is(co) && !Hv(i, t.value.from, t.value.to)) {
        let { preparePlaceholder: n } = e.state.facet(hO), s = n ? N.replace({ widget: new sS(n(e.state, t.value)) }) : yu;
        i = i.update({ add: [s.range(t.value.from, t.value.to)] });
      } else t.is(ks) && (i = i.update({
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
  provide: (i) => j.decorations.from(i),
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
      e.push(yu.range(n, s));
    }
    return N.set(e, !0);
  }
});
function Lr(i, e, t) {
  var n;
  let s = null;
  return (n = i.field(Li, !1)) === null || n === void 0 || n.between(e, t, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function Hv(i, e, t) {
  let n = !1;
  return i.between(e, e, (s, r) => {
    s == e && r == t && (n = !0);
  }), n;
}
function aO(i, e) {
  return i.field(Li, !1) ? e : e.concat(Y.appendConfig.of(uO()));
}
const Kv = (i) => {
  for (let e of lO(i)) {
    let t = Er(i.state, e.from, e.to);
    if (t)
      return i.dispatch({ effects: aO(i.state, [co.of(t), cO(i, t)]) }), !0;
  }
  return !1;
}, Jv = (i) => {
  if (!i.state.field(Li, !1))
    return !1;
  let e = [];
  for (let t of lO(i)) {
    let n = Lr(i.state, t.from, t.to);
    n && e.push(ks.of(n), cO(i, n, !1));
  }
  return e.length && i.dispatch({ effects: e }), e.length > 0;
};
function cO(i, e, t = !0) {
  let n = i.state.doc.lineAt(e.from).number, s = i.state.doc.lineAt(e.to).number;
  return j.announce.of(`${i.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${n} ${i.state.phrase("to")} ${s}.`);
}
const eS = (i) => {
  let { state: e } = i, t = [];
  for (let n = 0; n < e.doc.length; ) {
    let s = i.lineBlockAt(n), r = Er(e, s.from, s.to);
    r && t.push(co.of(r)), n = (r ? i.lineBlockAt(r.to) : s).to + 1;
  }
  return t.length && i.dispatch({ effects: aO(i.state, t) }), !!t.length;
}, tS = (i) => {
  let e = i.state.field(Li, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, i.state.doc.length, (n, s) => {
    t.push(ks.of({ from: n, to: s }));
  }), i.dispatch({ effects: t }), !0;
}, iS = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Kv },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Jv },
  { key: "Ctrl-Alt-[", run: eS },
  { key: "Ctrl-Alt-]", run: tS }
], nS = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, hO = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, nS);
  }
});
function uO(i) {
  return [Li, lS];
}
function fO(i, e) {
  let { state: t } = i, n = t.facet(hO), s = (o) => {
    let l = i.lineBlockAt(i.posAtDOM(o.target)), a = Lr(i.state, l.from, l.to);
    a && i.dispatch({ effects: ks.of(a) }), o.preventDefault();
  };
  if (n.placeholderDOM)
    return n.placeholderDOM(i, s, e);
  let r = document.createElement("span");
  return r.textContent = n.placeholderText, r.setAttribute("aria-label", t.phrase("folded code")), r.title = t.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const yu = /* @__PURE__ */ N.replace({ widget: /* @__PURE__ */ new class extends Bt {
  toDOM(i) {
    return fO(i, null);
  }
}() });
class sS extends Bt {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return fO(e, this.value);
  }
}
const rS = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Go extends jt {
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
function oS(i = {}) {
  let e = Object.assign(Object.assign({}, rS), i), t = new Go(e, !0), n = new Go(e, !1), s = Se.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(Oi) != o.state.facet(Oi) || o.startState.field(Li, !1) != o.state.field(Li, !1) || Me(o.startState) != Me(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new Gt();
      for (let a of o.viewportLineBlocks) {
        let c = Lr(o.state, a.from, a.to) ? n : Er(o.state, a.from, a.to) ? t : null;
        c && l.add(a.from, a.from, c);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = e;
  return [
    s,
    Ip({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || ee.empty;
      },
      initialSpacer() {
        return new Go(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, r), { click: (o, l, a) => {
        if (r.click && r.click(o, l, a))
          return !0;
        let c = Lr(o.state, l.from, l.to);
        if (c)
          return o.dispatch({ effects: ks.of(c) }), !0;
        let h = Er(o.state, l.from, l.to);
        return h ? (o.dispatch({ effects: co.of(h) }), !0) : !1;
      } })
    }),
    uO()
  ];
}
const lS = /* @__PURE__ */ j.baseTheme({
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
class Ps {
  constructor(e, t) {
    this.specs = e;
    let n;
    function s(l) {
      let a = hi.newName();
      return (n || (n = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0, o = t.scope;
    this.scope = o instanceof gt ? (l) => l.prop(Fi) == o.data : o ? (l) => l == o : void 0, this.style = Jp(e.map((l) => ({
      tag: l.tag,
      class: l.class || s(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = n ? new hi(n) : null, this.themeType = t.themeType;
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
    return new Ps(e, t || {});
  }
}
const na = /* @__PURE__ */ W.define(), dO = /* @__PURE__ */ W.define({
  combine(i) {
    return i.length ? [i[0]] : null;
  }
});
function Fo(i) {
  let e = i.facet(na);
  return e.length ? e : i.facet(dO);
}
function lc(i, e) {
  let t = [cS], n;
  return i instanceof Ps && (i.module && t.push(j.styleModule.of(i.module)), n = i.themeType), e != null && e.fallback ? t.push(dO.of(i)) : n ? t.push(na.computeN([j.darkTheme], (s) => s.facet(j.darkTheme) == (n == "dark") ? [i] : [])) : t.push(na.of(i)), t;
}
class aS {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Me(e.state), this.decorations = this.buildDeco(e, Fo(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = Me(e.state), n = Fo(e.state), s = n != Fo(e.startState), { viewport: r } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !s && t.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || s) && (this.tree = t, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = r.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return N.none;
    let n = new Gt();
    for (let { from: s, to: r } of e.visibleRanges)
      Rv(this.tree, t, (o, l, a) => {
        n.add(o, l, this.markCache[a] || (this.markCache[a] = N.mark({ class: a })));
      }, s, r);
    return n.finish();
  }
}
const cS = /* @__PURE__ */ mi.high(/* @__PURE__ */ Se.fromClass(aS, {
  decorations: (i) => i.decorations
})), pO = /* @__PURE__ */ Ps.define([
  {
    tag: y.meta,
    color: "#404740"
  },
  {
    tag: y.link,
    textDecoration: "underline"
  },
  {
    tag: y.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: y.emphasis,
    fontStyle: "italic"
  },
  {
    tag: y.strong,
    fontWeight: "bold"
  },
  {
    tag: y.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: y.keyword,
    color: "#708"
  },
  {
    tag: [y.atom, y.bool, y.url, y.contentSeparator, y.labelName],
    color: "#219"
  },
  {
    tag: [y.literal, y.inserted],
    color: "#164"
  },
  {
    tag: [y.string, y.deleted],
    color: "#a11"
  },
  {
    tag: [y.regexp, y.escape, /* @__PURE__ */ y.special(y.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ y.definition(y.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ y.local(y.variableName),
    color: "#30a"
  },
  {
    tag: [y.typeName, y.namespace],
    color: "#085"
  },
  {
    tag: y.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ y.special(y.variableName), y.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ y.definition(y.propertyName),
    color: "#00c"
  },
  {
    tag: y.comment,
    color: "#940"
  },
  {
    tag: y.invalid,
    color: "#f00"
  }
]), hS = /* @__PURE__ */ j.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), OO = 1e4, gO = "()[]{}", mO = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, {
      afterCursor: !0,
      brackets: gO,
      maxScanDistance: OO,
      renderMatch: dS
    });
  }
}), uS = /* @__PURE__ */ N.mark({ class: "cm-matchingBracket" }), fS = /* @__PURE__ */ N.mark({ class: "cm-nonmatchingBracket" });
function dS(i) {
  let e = [], t = i.matched ? uS : fS;
  return e.push(t.range(i.start.from, i.start.to)), i.end && e.push(t.range(i.end.from, i.end.to)), e;
}
const pS = /* @__PURE__ */ Ze.define({
  create() {
    return N.none;
  },
  update(i, e) {
    if (!e.docChanged && !e.selection)
      return i;
    let t = [], n = e.state.facet(mO);
    for (let s of e.state.selection.ranges) {
      if (!s.empty)
        continue;
      let r = Mt(e.state, s.head, -1, n) || s.head > 0 && Mt(e.state, s.head - 1, 1, n) || n.afterCursor && (Mt(e.state, s.head, 1, n) || s.head < e.state.doc.length && Mt(e.state, s.head + 1, -1, n));
      r && (t = t.concat(n.renderMatch(r, e.state)));
    }
    return N.set(t, !0);
  },
  provide: (i) => j.decorations.from(i)
}), OS = [
  pS,
  hS
];
function gS(i = {}) {
  return [mO.of(i), OS];
}
const mS = /* @__PURE__ */ new K();
function sa(i, e, t) {
  let n = i.prop(e < 0 ? K.openedBy : K.closedBy);
  if (n)
    return n;
  if (i.name.length == 1) {
    let s = t.indexOf(i.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0))
      return [t[s + e]];
  }
  return null;
}
function ra(i) {
  let e = i.type.prop(mS);
  return e ? e(i.node) : i;
}
function Mt(i, e, t, n = {}) {
  let s = n.maxScanDistance || OO, r = n.brackets || gO, o = Me(i), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let c = sa(a.type, t, r);
    if (c && a.from < a.to) {
      let h = ra(a);
      if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to))
        return yS(i, e, t, a, h, c, r);
    }
  }
  return bS(i, e, t, o, l.type, s, r);
}
function yS(i, e, t, n, s, r, o) {
  let l = n.parent, a = { from: s.from, to: s.to }, c = 0, h = l == null ? void 0 : l.cursor();
  if (h && (t < 0 ? h.childBefore(n.from) : h.childAfter(n.to)))
    do
      if (t < 0 ? h.to <= n.from : h.from >= n.to) {
        if (c == 0 && r.indexOf(h.type.name) > -1 && h.from < h.to) {
          let u = ra(h);
          return { start: a, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if (sa(h.type, t, o))
          c++;
        else if (sa(h.type, -t, o)) {
          if (c == 0) {
            let u = ra(h);
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
function bS(i, e, t, n, s, r, o) {
  let l = t < 0 ? i.sliceDoc(e - 1, e) : i.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let c = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, h = i.doc.iterRange(e, t > 0 ? i.doc.length : 0), u = 0;
  for (let f = 0; !h.next().done && f <= r; ) {
    let d = h.value;
    t < 0 && (f += d.length);
    let p = e + f * t;
    for (let g = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1; g != m; g += t) {
      let O = o.indexOf(d[g]);
      if (!(O < 0 || n.resolveInner(p + g, 1).type != s))
        if (O % 2 == 0 == t > 0)
          u++;
        else {
          if (u == 1)
            return { start: c, end: { from: p + g, to: p + g + 1 }, matched: O >> 1 == a >> 1 };
          u--;
        }
    }
    t > 0 && (f += d.length);
  }
  return h.done ? { start: c, matched: !1 } : null;
}
const vS = /* @__PURE__ */ Object.create(null), bu = [nt.none], vu = [], Su = /* @__PURE__ */ Object.create(null), SS = /* @__PURE__ */ Object.create(null);
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
  SS[i] = /* @__PURE__ */ xS(vS, e);
function Ho(i, e) {
  vu.indexOf(i) > -1 || (vu.push(i), console.warn(e));
}
function xS(i, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let c of l.split(".")) {
      let h = i[c] || y[c];
      h ? typeof h == "function" ? a.length ? a = a.map(h) : Ho(c, `Modifier ${c} used at start of tag`) : a.length ? Ho(c, `Tag ${c} used as modifier`) : a = Array.isArray(h) ? h : [h] : Ho(c, `Unknown highlighting tag ${c}`);
    }
    for (let c of a)
      t.push(c);
  }
  if (!t.length)
    return 0;
  let n = e.replace(/ /g, "_"), s = n + " " + t.map((l) => l.id), r = Su[s];
  if (r)
    return r.id;
  let o = Su[s] = nt.define({
    id: bu.length,
    name: n,
    props: [tc({ [n]: t })]
  });
  return bu.push(o), o.id;
}
ge.RTL, ge.LTR;
const wS = (i) => {
  let { state: e } = i, t = e.doc.lineAt(e.selection.main.from), n = cc(i.state, t.from);
  return n.line ? QS(i) : n.block ? PS(i) : !1;
};
function ac(i, e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly)
      return !1;
    let s = i(e, t);
    return s ? (n(t.update(s)), !0) : !1;
  };
}
const QS = /* @__PURE__ */ ac(
  ZS,
  0
  /* CommentOption.Toggle */
), kS = /* @__PURE__ */ ac(
  yO,
  0
  /* CommentOption.Toggle */
), PS = /* @__PURE__ */ ac(
  (i, e) => yO(i, e, CS(e)),
  0
  /* CommentOption.Toggle */
);
function cc(i, e) {
  let t = i.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const An = 50;
function $S(i, { open: e, close: t }, n, s) {
  let r = i.sliceDoc(n - An, n), o = i.sliceDoc(s, s + An), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, c = r.length - l;
  if (r.slice(c - e.length, c) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 }
    };
  let h, u;
  s - n <= 2 * An ? h = u = i.sliceDoc(n, s) : (h = i.sliceDoc(n, n + An), u = i.sliceDoc(s - An, s));
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
function CS(i) {
  let e = [];
  for (let t of i.selection.ranges) {
    let n = i.doc.lineAt(t.from), s = t.to <= n.to ? n : i.doc.lineAt(t.to);
    s.from > n.from && s.from == t.to && (s = t.to == n.to + 1 ? n : i.doc.lineAt(t.to - 1));
    let r = e.length - 1;
    r >= 0 && e[r].to > n.from ? e[r].to = s.to : e.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: s.to });
  }
  return e;
}
function yO(i, e, t = e.selection.ranges) {
  let n = t.map((r) => cc(e, r.from).block);
  if (!n.every((r) => r))
    return null;
  let s = t.map((r, o) => $S(e, n[o], r.from, r.to));
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
function ZS(i, e, t = e.selection.ranges) {
  let n = [], s = -1;
  for (let { from: r, to: o } of t) {
    let l = n.length, a = 1e9, c = cc(e, r).line;
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
const oa = /* @__PURE__ */ Kt.define(), TS = /* @__PURE__ */ Kt.define(), AS = /* @__PURE__ */ W.define(), bO = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (n, s) => e(n, s) || t(n, s)
    });
  }
}), vO = /* @__PURE__ */ Ze.define({
  create() {
    return Rt.empty;
  },
  update(i, e) {
    let t = e.state.facet(bO), n = e.annotation(oa);
    if (n) {
      let a = et.fromTransaction(e, n.selection), c = n.side, h = c == 0 ? i.undone : i.done;
      return a ? h = Dr(h, h.length, t.minDepth, a) : h = QO(h, e.startState.selection), new Rt(c == 0 ? n.rest : h, c == 0 ? h : n.rest);
    }
    let s = e.annotation(TS);
    if ((s == "full" || s == "before") && (i = i.isolate()), e.annotation($e.addToHistory) === !1)
      return e.changes.empty ? i : i.addMapping(e.changes.desc);
    let r = et.fromTransaction(e), o = e.annotation($e.time), l = e.annotation($e.userEvent);
    return r ? i = i.addChanges(r, o, l, t, e) : e.selection && (i = i.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (s == "full" || s == "after") && (i = i.isolate()), i;
  },
  toJSON(i) {
    return { done: i.done.map((e) => e.toJSON()), undone: i.undone.map((e) => e.toJSON()) };
  },
  fromJSON(i) {
    return new Rt(i.done.map(et.fromJSON), i.undone.map(et.fromJSON));
  }
});
function SO(i = {}) {
  return [
    vO,
    bO.of(i),
    j.domEventHandlers({
      beforeinput(e, t) {
        let n = e.inputType == "historyUndo" ? xO : e.inputType == "historyRedo" ? la : null;
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
const xO = /* @__PURE__ */ ho(0, !1), la = /* @__PURE__ */ ho(1, !1), MS = /* @__PURE__ */ ho(0, !0), RS = /* @__PURE__ */ ho(1, !0);
class et {
  constructor(e, t, n, s, r) {
    this.changes = e, this.effects = t, this.mapped = n, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(e) {
    return new et(this.changes, this.effects, this.mapped, this.startSelection, e);
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
    return new et(e.changes && Te.fromJSON(e.changes), [], e.mapped && Xt.fromJSON(e.mapped), e.startSelection && A.fromJSON(e.startSelection), e.selectionsAfter.map(A.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let n = lt;
    for (let s of e.startState.facet(AS)) {
      let r = s(e);
      r.length && (n = n.concat(r));
    }
    return !n.length && e.changes.empty ? null : new et(e.changes.invert(e.startState.doc), n, void 0, t || e.startState.selection, lt);
  }
  static selection(e) {
    return new et(void 0, lt, void 0, void 0, e);
  }
}
function Dr(i, e, t, n) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0, r = i.slice(s, e);
  return r.push(n), r;
}
function _S(i, e) {
  let t = [], n = !1;
  return i.iterChangedRanges((s, r) => t.push(s, r)), e.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < t.length; ) {
      let c = t[a++], h = t[a++];
      l >= c && o <= h && (n = !0);
    }
  }), n;
}
function XS(i, e) {
  return i.ranges.length == e.ranges.length && i.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length === 0;
}
function wO(i, e) {
  return i.length ? e.length ? i.concat(e) : i : e;
}
const lt = [], ES = 200;
function QO(i, e) {
  if (i.length) {
    let t = i[i.length - 1], n = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - ES));
    return n.length && n[n.length - 1].eq(e) ? i : (n.push(e), Dr(i, i.length - 1, 1e9, t.setSelAfter(n)));
  } else
    return [et.selection([e])];
}
function LS(i) {
  let e = i[i.length - 1], t = i.slice();
  return t[i.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Ko(i, e) {
  if (!i.length)
    return i;
  let t = i.length, n = lt;
  for (; t; ) {
    let s = DS(i[t - 1], e, n);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = i.slice(0, t);
      return r[t - 1] = s, r;
    } else
      e = s.mapped, t--, n = s.selectionsAfter;
  }
  return n.length ? [et.selection(n)] : lt;
}
function DS(i, e, t) {
  let n = wO(i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(e)) : lt, t);
  if (!i.changes)
    return et.selection(n);
  let s = i.changes.map(e), r = e.mapDesc(i.changes, !0), o = i.mapped ? i.mapped.composeDesc(r) : r;
  return new et(s, Y.mapEffects(i.effects, e), o, i.startSelection.map(r), n);
}
const jS = /^(input\.type|delete)($|\.)/;
class Rt {
  constructor(e, t, n = 0, s = void 0) {
    this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new Rt(this.done, this.undone) : this;
  }
  addChanges(e, t, n, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!n || jS.test(n)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(r, _S(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    n == "input.type.compose") ? o = Dr(o, o.length - 1, s.minDepth, new et(e.changes.compose(l.changes), wO(Y.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, lt)) : o = Dr(o, o.length, s.minDepth, e), new Rt(o, lt, t, n);
  }
  addSelection(e, t, n, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : lt;
    return r.length > 0 && t - this.prevTime < s && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && XS(r[r.length - 1], e) ? this : new Rt(QO(this.done, e), this.undone, t, n);
  }
  addMapping(e) {
    return new Rt(Ko(this.done, e), Ko(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, n) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let r = s[s.length - 1], o = r.selectionsAfter[0] || t.selection;
    if (n && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: oa.of({ side: e, rest: LS(s), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = s.length == 1 ? lt : s.slice(0, s.length - 1);
      return r.mapped && (l = Ko(l, r.mapped)), t.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: oa.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
Rt.empty = /* @__PURE__ */ new Rt(lt, lt);
const kO = [
  { key: "Mod-z", run: xO, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: la, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: la, preventDefault: !0 },
  { key: "Mod-u", run: MS, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: RS, preventDefault: !0 }
];
function bn(i, e) {
  return A.create(i.ranges.map(e), i.mainIndex);
}
function Vt(i, e) {
  return i.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function xt({ state: i, dispatch: e }, t) {
  let n = bn(i.selection, t);
  return n.eq(i.selection, !0) ? !1 : (e(Vt(i, n)), !0);
}
function uo(i, e) {
  return A.cursor(e ? i.to : i.from);
}
function PO(i, e) {
  return xt(i, (t) => t.empty ? i.moveByChar(t, e) : uo(t, e));
}
function We(i) {
  return i.textDirectionAt(i.state.selection.main.head) == ge.LTR;
}
const $O = (i) => PO(i, !We(i)), CO = (i) => PO(i, We(i));
function ZO(i, e) {
  return xt(i, (t) => t.empty ? i.moveByGroup(t, e) : uo(t, e));
}
const BS = (i) => ZO(i, !We(i)), VS = (i) => ZO(i, We(i));
function qS(i, e, t) {
  if (e.type.prop(t))
    return !0;
  let n = e.to - e.from;
  return n && (n > 2 || /[^\s,.;:]/.test(i.sliceDoc(e.from, e.to))) || e.firstChild;
}
function fo(i, e, t) {
  let n = Me(i).resolveInner(e.head), s = t ? K.closedBy : K.openedBy;
  for (let a = e.head; ; ) {
    let c = t ? n.childAfter(a) : n.childBefore(a);
    if (!c)
      break;
    qS(i, c, s) ? n = c : a = t ? c.to : c.from;
  }
  let r = n.type.prop(s), o, l;
  return r && (o = t ? Mt(i, n.from, 1) : Mt(i, n.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? n.to : n.from, A.cursor(l, t ? -1 : 1);
}
const WS = (i) => xt(i, (e) => fo(i.state, e, !We(i))), IS = (i) => xt(i, (e) => fo(i.state, e, We(i)));
function TO(i, e) {
  return xt(i, (t) => {
    if (!t.empty)
      return uo(t, e);
    let n = i.moveVertically(t, e);
    return n.head != t.head ? n : i.moveToLineBoundary(t, e);
  });
}
const AO = (i) => TO(i, !1), MO = (i) => TO(i, !0);
function RO(i) {
  let e = i.scrollDOM.clientHeight < i.scrollDOM.scrollHeight - 2, t = 0, n = 0, s;
  if (e) {
    for (let r of i.state.facet(j.scrollMargins)) {
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
function _O(i, e) {
  let t = RO(i), { state: n } = i, s = bn(n.selection, (o) => o.empty ? i.moveVertically(o, e, t.height) : uo(o, e));
  if (s.eq(n.selection))
    return !1;
  let r;
  if (t.selfScroll) {
    let o = i.coordsAtPos(n.selection.main.head), l = i.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, c = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < c && (r = j.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return i.dispatch(Vt(n, s), { effects: r }), !0;
}
const xu = (i) => _O(i, !1), aa = (i) => _O(i, !0);
function yi(i, e, t) {
  let n = i.lineBlockAt(e.head), s = i.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? n.to : n.from) && (s = i.moveToLineBoundary(e, t, !1)), !t && s.head == n.from && n.length) {
    let r = /^\s*/.exec(i.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    r && e.head != n.from + r && (s = A.cursor(n.from + r));
  }
  return s;
}
const zS = (i) => xt(i, (e) => yi(i, e, !0)), NS = (i) => xt(i, (e) => yi(i, e, !1)), US = (i) => xt(i, (e) => yi(i, e, !We(i))), YS = (i) => xt(i, (e) => yi(i, e, We(i))), GS = (i) => xt(i, (e) => A.cursor(i.lineBlockAt(e.head).from, 1)), FS = (i) => xt(i, (e) => A.cursor(i.lineBlockAt(e.head).to, -1));
function HS(i, e, t) {
  let n = !1, s = bn(i.selection, (r) => {
    let o = Mt(i, r.head, -1) || Mt(i, r.head, 1) || r.head > 0 && Mt(i, r.head - 1, 1) || r.head < i.doc.length && Mt(i, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    n = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return A.cursor(l);
  });
  return n ? (e(Vt(i, s)), !0) : !1;
}
const KS = ({ state: i, dispatch: e }) => HS(i, e);
function pt(i, e) {
  let t = bn(i.state.selection, (n) => {
    let s = e(n);
    return A.range(n.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(i.state.selection) ? !1 : (i.dispatch(Vt(i.state, t)), !0);
}
function XO(i, e) {
  return pt(i, (t) => i.moveByChar(t, e));
}
const EO = (i) => XO(i, !We(i)), LO = (i) => XO(i, We(i));
function DO(i, e) {
  return pt(i, (t) => i.moveByGroup(t, e));
}
const JS = (i) => DO(i, !We(i)), ex = (i) => DO(i, We(i)), tx = (i) => pt(i, (e) => fo(i.state, e, !We(i))), ix = (i) => pt(i, (e) => fo(i.state, e, We(i)));
function jO(i, e) {
  return pt(i, (t) => i.moveVertically(t, e));
}
const BO = (i) => jO(i, !1), VO = (i) => jO(i, !0);
function qO(i, e) {
  return pt(i, (t) => i.moveVertically(t, e, RO(i).height));
}
const wu = (i) => qO(i, !1), Qu = (i) => qO(i, !0), nx = (i) => pt(i, (e) => yi(i, e, !0)), sx = (i) => pt(i, (e) => yi(i, e, !1)), rx = (i) => pt(i, (e) => yi(i, e, !We(i))), ox = (i) => pt(i, (e) => yi(i, e, We(i))), lx = (i) => pt(i, (e) => A.cursor(i.lineBlockAt(e.head).from)), ax = (i) => pt(i, (e) => A.cursor(i.lineBlockAt(e.head).to)), ku = ({ state: i, dispatch: e }) => (e(Vt(i, { anchor: 0 })), !0), Pu = ({ state: i, dispatch: e }) => (e(Vt(i, { anchor: i.doc.length })), !0), $u = ({ state: i, dispatch: e }) => (e(Vt(i, { anchor: i.selection.main.anchor, head: 0 })), !0), Cu = ({ state: i, dispatch: e }) => (e(Vt(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0), cx = ({ state: i, dispatch: e }) => (e(i.update({ selection: { anchor: 0, head: i.doc.length }, userEvent: "select" })), !0), hx = ({ state: i, dispatch: e }) => {
  let t = po(i).map(({ from: n, to: s }) => A.range(n, Math.min(s + 1, i.doc.length)));
  return e(i.update({ selection: A.create(t), userEvent: "select" })), !0;
}, ux = ({ state: i, dispatch: e }) => {
  let t = bn(i.selection, (n) => {
    let s = Me(i), r = s.resolveStack(n.from, 1);
    if (n.empty) {
      let o = s.resolveStack(n.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < n.from && l.to >= n.to || l.to > n.to && l.from <= n.from) && o.next)
        return A.range(l.to, l.from);
    }
    return n;
  });
  return t.eq(i.selection) ? !1 : (e(Vt(i, t)), !0);
}, fx = ({ state: i, dispatch: e }) => {
  let t = i.selection, n = null;
  return t.ranges.length > 1 ? n = A.create([t.main]) : t.main.empty || (n = A.create([A.cursor(t.main.head)])), n ? (e(Vt(i, n)), !0) : !1;
};
function $s(i, e) {
  if (i.state.readOnly)
    return !1;
  let t = "delete.selection", { state: n } = i, s = n.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = e(r);
      a < o ? (t = "delete.backward", a = Fs(i, a, !1)) : a > o && (t = "delete.forward", a = Fs(i, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Fs(i, o, !1), l = Fs(i, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: A.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? !1 : (i.dispatch(n.update(s, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? j.announce.of(n.phrase("Selection deleted")) : void 0
  })), !0);
}
function Fs(i, e, t) {
  if (i instanceof j)
    for (let n of i.state.facet(j.atomicRanges).map((s) => s(i)))
      n.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s);
      });
  return e;
}
const WO = (i, e, t) => $s(i, (n) => {
  let s = n.from, { state: r } = i, o = r.doc.lineAt(s), l, a;
  if (t && !e && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
    if (l[l.length - 1] == "	")
      return s - 1;
    let c = yn(l, r.tabSize), h = c % Xr(r) || Xr(r);
    for (let u = 0; u < h && l[l.length - 1 - u] == " "; u++)
      s--;
    a = s;
  } else
    a = De(o.text, s - o.from, e, e) + o.from, a == s && o.number != (e ? r.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) && (a = De(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), ca = (i) => WO(i, !1, !0), IO = (i) => WO(i, !0, !1), zO = (i, e) => $s(i, (t) => {
  let n = t.head, { state: s } = i, r = s.doc.lineAt(n), o = s.charCategorizer(n);
  for (let l = null; ; ) {
    if (n == (e ? r.to : r.from)) {
      n == t.head && r.number != (e ? s.doc.lines : 1) && (n += e ? 1 : -1);
      break;
    }
    let a = De(r.text, n - r.from, e) + r.from, c = r.text.slice(Math.min(n, a) - r.from, Math.max(n, a) - r.from), h = o(c);
    if (l != null && h != l)
      break;
    (c != " " || n != t.head) && (l = h), n = a;
  }
  return n;
}), NO = (i) => zO(i, !1), dx = (i) => zO(i, !0), px = (i) => $s(i, (e) => {
  let t = i.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), Ox = (i) => $s(i, (e) => {
  let t = i.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), gx = (i) => $s(i, (e) => {
  let t = i.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), mx = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => ({
    changes: { from: n.from, to: n.to, insert: ie.of(["", ""]) },
    range: A.cursor(n.from)
  }));
  return e(i.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, yx = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == i.doc.length)
      return { range: n };
    let s = n.from, r = i.doc.lineAt(s), o = s == r.from ? s - 1 : De(r.text, s - r.from, !1) + r.from, l = s == r.to ? s + 1 : De(r.text, s - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: i.doc.slice(s, l).append(i.doc.slice(o, s)) },
      range: A.cursor(l)
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
function UO(i, e, t) {
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
        s.push(A.range(Math.min(i.doc.length, a.anchor + l), Math.min(i.doc.length, a.head + l)));
    } else {
      n.push({ from: o.from, to: r.from }, { from: r.to, insert: i.lineBreak + o.text });
      for (let a of r.ranges)
        s.push(A.range(a.anchor - l, a.head - l));
    }
  }
  return n.length ? (e(i.update({
    changes: n,
    scrollIntoView: !0,
    selection: A.create(s, i.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const bx = ({ state: i, dispatch: e }) => UO(i, e, !1), vx = ({ state: i, dispatch: e }) => UO(i, e, !0);
function YO(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [];
  for (let s of po(i))
    t ? n.push({ from: s.from, insert: i.doc.slice(s.from, s.to) + i.lineBreak }) : n.push({ from: s.to, insert: i.lineBreak + i.doc.slice(s.from, s.to) });
  return e(i.update({ changes: n, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const Sx = ({ state: i, dispatch: e }) => YO(i, e, !1), xx = ({ state: i, dispatch: e }) => YO(i, e, !0), wx = (i) => {
  if (i.state.readOnly)
    return !1;
  let { state: e } = i, t = e.changes(po(e).map(({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }))), n = bn(e.selection, (s) => {
    let r;
    if (i.lineWrapping) {
      let o = i.lineBlockAt(s.head), l = i.coordsAtPos(s.head, s.assoc || 1);
      l && (r = o.bottom + i.documentTop - l.bottom + i.defaultLineHeight / 2);
    }
    return i.moveVertically(s, !0, r);
  }).map(t);
  return i.dispatch({ changes: t, selection: n, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function Qx(i, e) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = Me(i).resolveInner(e), n = t.childBefore(e), s = t.childAfter(e), r;
  return n && s && n.to <= e && s.from >= e && (r = n.type.prop(K.closedBy)) && r.indexOf(s.name) > -1 && i.doc.lineAt(n.to).from == i.doc.lineAt(s.from).from && !/\S/.test(i.sliceDoc(n.to, s.from)) ? { from: n.to, to: s.from } : null;
}
const Zu = /* @__PURE__ */ GO(!1), kx = /* @__PURE__ */ GO(!0);
function GO(i) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let n = e.changeByRange((s) => {
      let { from: r, to: o } = s, l = e.doc.lineAt(r), a = !i && r == o && Qx(e, r);
      i && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let c = new ao(e, { simulateBreak: r, simulateDoubleBreak: !!a }), h = nc(c, r);
      for (h == null && (h = yn(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let u = ["", as(e, h)];
      return a && u.push(as(e, c.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: ie.of(u) },
        range: A.cursor(r + 1 + u[1].length)
      };
    });
    return t(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function hc(i, e) {
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
      range: A.range(r.mapPos(n.anchor, 1), r.mapPos(n.head, 1))
    };
  });
}
const Px = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), n = new ao(i, { overrideIndentation: (r) => {
    let o = t[r];
    return o ?? -1;
  } }), s = hc(i, (r, o, l) => {
    let a = nc(n, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let c = /^\s*/.exec(r.text)[0], h = as(i, a);
    (c != h || l.from < r.from + c.length) && (t[r.from] = a, o.push({ from: r.from, to: r.from + c.length, insert: h }));
  });
  return s.changes.empty || e(i.update(s, { userEvent: "indent" })), !0;
}, FO = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(hc(i, (t, n) => {
  n.push({ from: t.from, insert: i.facet(Qs) });
}), { userEvent: "input.indent" })), !0), HO = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(hc(i, (t, n) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s)
    return;
  let r = yn(s, i.tabSize), o = 0, l = as(i, Math.max(0, r - Xr(i)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  n.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), $x = (i) => (i.setTabFocusMode(), !0), Cx = [
  { key: "Ctrl-b", run: $O, shift: EO, preventDefault: !0 },
  { key: "Ctrl-f", run: CO, shift: LO },
  { key: "Ctrl-p", run: AO, shift: BO },
  { key: "Ctrl-n", run: MO, shift: VO },
  { key: "Ctrl-a", run: GS, shift: lx },
  { key: "Ctrl-e", run: FS, shift: ax },
  { key: "Ctrl-d", run: IO },
  { key: "Ctrl-h", run: ca },
  { key: "Ctrl-k", run: px },
  { key: "Ctrl-Alt-h", run: NO },
  { key: "Ctrl-o", run: mx },
  { key: "Ctrl-t", run: yx },
  { key: "Ctrl-v", run: aa }
], Zx = /* @__PURE__ */ [
  { key: "ArrowLeft", run: $O, shift: EO, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: BS, shift: JS, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: US, shift: rx, preventDefault: !0 },
  { key: "ArrowRight", run: CO, shift: LO, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: VS, shift: ex, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: YS, shift: ox, preventDefault: !0 },
  { key: "ArrowUp", run: AO, shift: BO, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: ku, shift: $u },
  { mac: "Ctrl-ArrowUp", run: xu, shift: wu },
  { key: "ArrowDown", run: MO, shift: VO, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Pu, shift: Cu },
  { mac: "Ctrl-ArrowDown", run: aa, shift: Qu },
  { key: "PageUp", run: xu, shift: wu },
  { key: "PageDown", run: aa, shift: Qu },
  { key: "Home", run: NS, shift: sx, preventDefault: !0 },
  { key: "Mod-Home", run: ku, shift: $u },
  { key: "End", run: zS, shift: nx, preventDefault: !0 },
  { key: "Mod-End", run: Pu, shift: Cu },
  { key: "Enter", run: Zu, shift: Zu },
  { key: "Mod-a", run: cx },
  { key: "Backspace", run: ca, shift: ca },
  { key: "Delete", run: IO },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: NO },
  { key: "Mod-Delete", mac: "Alt-Delete", run: dx },
  { mac: "Mod-Backspace", run: Ox },
  { mac: "Mod-Delete", run: gx }
].concat(/* @__PURE__ */ Cx.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))), jr = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: WS, shift: tx },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: IS, shift: ix },
  { key: "Alt-ArrowUp", run: bx },
  { key: "Shift-Alt-ArrowUp", run: Sx },
  { key: "Alt-ArrowDown", run: vx },
  { key: "Shift-Alt-ArrowDown", run: xx },
  { key: "Escape", run: fx },
  { key: "Mod-Enter", run: kx },
  { key: "Alt-l", mac: "Ctrl-l", run: hx },
  { key: "Mod-i", run: ux, preventDefault: !0 },
  { key: "Mod-[", run: HO },
  { key: "Mod-]", run: FO },
  { key: "Mod-Alt-\\", run: Px },
  { key: "Shift-Mod-k", run: wx },
  { key: "Shift-Mod-\\", run: KS },
  { key: "Mod-/", run: wS },
  { key: "Alt-A", run: kS },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: $x }
].concat(Zx), Tx = { key: "Tab", run: FO, shift: HO };
function fe() {
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
  for (; e < arguments.length; e++) KO(i, arguments[e]);
  return i;
}
function KO(i, e) {
  if (typeof e == "string")
    i.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null)
    i.appendChild(e);
  else if (Array.isArray(e))
    for (var t = 0; t < e.length; t++) KO(i, e[t]);
  else
    throw new RangeError("Unsupported child node: " + e);
}
class Tu {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.diagnostic = n;
  }
}
class Si {
  constructor(e, t, n) {
    this.diagnostics = e, this.panel = t, this.selected = n;
  }
  static init(e, t, n) {
    let s = e, r = n.facet(_t).markerFilter;
    r && (s = r(s, n));
    let o = e.slice().sort((u, f) => u.from - f.from || u.to - f.to), l = new Gt(), a = [], c = 0;
    for (let u = 0; ; ) {
      let f = u == o.length ? null : o[u];
      if (!f && !a.length)
        break;
      let d, p;
      for (a.length ? (d = c, p = a.reduce((m, O) => Math.min(m, O.to), f && f.from > d ? f.from : 1e8)) : (d = f.from, p = f.to, a.push(f), u++); u < o.length; ) {
        let m = o[u];
        if (m.from == d && (m.to > m.from || m.to == d))
          a.push(m), u++, p = Math.min(m.to, p);
        else {
          p = Math.min(m.from, p);
          break;
        }
      }
      let g = og(a);
      if (a.some((m) => m.from == m.to || m.from == m.to - 1 && n.doc.lineAt(m.from).to == m.from))
        l.add(d, d, N.widget({
          widget: new Bx(g),
          diagnostics: a.slice()
        }));
      else {
        let m = a.reduce((O, x) => x.markClass ? O + " " + x.markClass : O, "");
        l.add(d, p, N.mark({
          class: "cm-lintRange cm-lintRange-" + g + m,
          diagnostics: a.slice(),
          inclusiveEnd: a.some((O) => O.to > p)
        }));
      }
      c = p;
      for (let m = 0; m < a.length; m++)
        a[m].to <= c && a.splice(m--, 1);
    }
    let h = l.finish();
    return new Si(h, t, fn(h));
  }
}
function fn(i, e = null, t = 0) {
  let n = null;
  return i.between(t, 1e9, (s, r, { spec: o }) => {
    if (!(e && o.diagnostics.indexOf(e) < 0))
      if (!n)
        n = new Tu(s, r, e || o.diagnostics[0]);
      else {
        if (o.diagnostics.indexOf(n.diagnostic) < 0)
          return !1;
        n = new Tu(n.from, r, n.diagnostic);
      }
  }), n;
}
function JO(i, e) {
  let t = e.pos, n = e.end || t, s = i.state.facet(_t).hideOn(i, t, n);
  if (s != null)
    return s;
  let r = i.startState.doc.lineAt(e.pos);
  return !!(i.effects.some((o) => o.is(Oo)) || i.changes.touchesRange(r.from, Math.max(r.to, n)));
}
function eg(i, e) {
  return i.field(tt, !1) ? e : e.concat(Y.appendConfig.of(cg));
}
function Ax(i, e) {
  return {
    effects: eg(i, [Oo.of(e)])
  };
}
const Oo = /* @__PURE__ */ Y.define(), uc = /* @__PURE__ */ Y.define(), tg = /* @__PURE__ */ Y.define(), tt = /* @__PURE__ */ Ze.define({
  create() {
    return new Si(N.none, null, null);
  },
  update(i, e) {
    if (e.docChanged && i.diagnostics.size) {
      let t = i.diagnostics.map(e.changes), n = null, s = i.panel;
      if (i.selected) {
        let r = e.changes.mapPos(i.selected.from, 1);
        n = fn(t, i.selected.diagnostic, r) || fn(t, null, r);
      }
      !t.size && s && e.state.facet(_t).autoPanel && (s = null), i = new Si(t, s, n);
    }
    for (let t of e.effects)
      if (t.is(Oo)) {
        let n = e.state.facet(_t).autoPanel ? t.value.length ? cs.open : null : i.panel;
        i = Si.init(t.value, n, e.state);
      } else t.is(uc) ? i = new Si(i.diagnostics, t.value ? cs.open : null, i.selected) : t.is(tg) && (i = new Si(i.diagnostics, i.panel, t.value));
    return i;
  },
  provide: (i) => [
    rs.from(i, (e) => e.panel),
    j.decorations.from(i, (e) => e.diagnostics)
  ]
});
function Mx(i) {
  let e = i.field(tt, !1);
  return e ? e.diagnostics.size : 0;
}
const Rx = /* @__PURE__ */ N.mark({ class: "cm-lintRange cm-lintRange-active" });
function _x(i, e, t) {
  let { diagnostics: n } = i.state.field(tt), s, r = -1, o = -1;
  n.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, c, { spec: h }) => {
    if (e >= a && e <= c && (a == c || (e > a || t > 0) && (e < c || t < 0)))
      return s = h.diagnostics, r = a, o = c, !1;
  });
  let l = i.state.facet(_t).tooltipFilter;
  return s && l && (s = l(s, i.state)), s ? {
    pos: r,
    end: o,
    above: i.state.doc.lineAt(r).to < o,
    create() {
      return { dom: ig(i, s) };
    }
  } : null;
}
function ig(i, e) {
  return fe("ul", { class: "cm-tooltip-lint" }, e.map((t) => rg(i, t, !1)));
}
const Xx = (i) => {
  let e = i.state.field(tt, !1);
  (!e || !e.panel) && i.dispatch({ effects: eg(i.state, [uc.of(!0)]) });
  let t = ss(i, cs.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, Au = (i) => {
  let e = i.state.field(tt, !1);
  return !e || !e.panel ? !1 : (i.dispatch({ effects: uc.of(!1) }), !0);
}, Ex = (i) => {
  let e = i.state.field(tt, !1);
  if (!e)
    return !1;
  let t = i.state.selection.main, n = e.diagnostics.iter(t.to + 1);
  return !n.value && (n = e.diagnostics.iter(0), !n.value || n.from == t.from && n.to == t.to) ? !1 : (i.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: !0 }), !0);
}, Lx = [
  { key: "Mod-Shift-m", run: Xx, preventDefault: !0 },
  { key: "F8", run: Ex }
], ng = /* @__PURE__ */ Se.fromClass(class {
  constructor(i) {
    this.view = i, this.timeout = -1, this.set = !0;
    let { delay: e } = i.state.facet(_t);
    this.lintTime = Date.now() + e, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e);
  }
  run() {
    clearTimeout(this.timeout);
    let i = Date.now();
    if (i < this.lintTime - 10)
      this.timeout = setTimeout(this.run, this.lintTime - i);
    else {
      this.set = !1;
      let { state: e } = this.view, { sources: t } = e.facet(_t);
      t.length && Dx(t.map((n) => Promise.resolve(n(this.view))), (n) => {
        this.view.state.doc == e.doc && this.view.dispatch(Ax(this.view.state, n.reduce((s, r) => s.concat(r))));
      }, (n) => {
        ze(this.view.state, n);
      });
    }
  }
  update(i) {
    let e = i.state.facet(_t);
    (i.docChanged || e != i.startState.facet(_t) || e.needsRefresh && e.needsRefresh(i)) && (this.lintTime = Date.now() + e.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, e.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
});
function Dx(i, e, t) {
  let n = [], s = -1;
  for (let r of i)
    r.then((o) => {
      n.push(o), clearTimeout(s), n.length == i.length ? e(n) : s = setTimeout(() => e(n), 200);
    }, t);
}
const _t = /* @__PURE__ */ W.define({
  combine(i) {
    return Object.assign({ sources: i.map((e) => e.source).filter((e) => e != null) }, St(i.map((e) => e.config), {
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
function jx(i, e = {}) {
  return [
    _t.of({ source: i, config: e }),
    ng,
    cg
  ];
}
function Mu(i) {
  let e = i.plugin(ng);
  e && e.force();
}
function sg(i) {
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
function rg(i, e, t) {
  var n;
  let s = t ? sg(e.actions) : [];
  return fe("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, fe("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(i) : e.message), (n = e.actions) === null || n === void 0 ? void 0 : n.map((r, o) => {
    let l = !1, a = (f) => {
      if (f.preventDefault(), l)
        return;
      l = !0;
      let d = fn(i.state.field(tt).diagnostics, e);
      d && r.apply(i, d.from, d.to);
    }, { name: c } = r, h = s[o] ? c.indexOf(s[o]) : -1, u = h < 0 ? c : [
      c.slice(0, h),
      fe("u", c.slice(h, h + 1)),
      c.slice(h + 1)
    ];
    return fe("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${c}${h < 0 ? "" : ` (access key "${s[o]})"`}.`
    }, u);
  }), e.source && fe("div", { class: "cm-diagnosticSource" }, e.source));
}
class Bx extends Bt {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return fe("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class Ru {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = rg(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class cs {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (s) => {
      if (s.keyCode == 27)
        Au(this.view), this.view.focus();
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
        let { diagnostic: r } = this.items[this.selectedIndex], o = sg(r.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = fn(this.view.state.field(tt).diagnostics, r);
            a && r.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      s.preventDefault();
    }, n = (s) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = fe("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: n
    }), this.dom = fe("div", { class: "cm-panel-lint" }, this.list, fe("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Au(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(tt).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(tt), n = 0, s = !1, r = null, o = /* @__PURE__ */ new Set();
    for (e.between(0, this.view.state.doc.length, (l, a, { spec: c }) => {
      for (let h of c.diagnostics) {
        if (o.has(h))
          continue;
        o.add(h);
        let u = -1, f;
        for (let d = n; d < this.items.length; d++)
          if (this.items[d].diagnostic == h) {
            u = d;
            break;
          }
        u < 0 ? (f = new Ru(this.view, h), this.items.splice(n, 0, f), s = !0) : (f = this.items[u], u > n && (this.items.splice(n, u - n), s = !0)), t && f.diagnostic == t.diagnostic ? f.dom.hasAttribute("aria-selected") || (f.dom.setAttribute("aria-selected", "true"), r = f) : f.dom.hasAttribute("aria-selected") && f.dom.removeAttribute("aria-selected"), n++;
      }
    }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Ru(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), s = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: l, panel: a }) => {
        let c = a.height / this.list.offsetHeight;
        l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / c : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / c);
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
    let t = this.view.state.field(tt), n = fn(t.diagnostics, this.items[e].diagnostic);
    n && this.view.dispatch({
      selection: { anchor: n.from, head: n.to },
      scrollIntoView: !0,
      effects: tg.of(n)
    });
  }
  static open(e) {
    return new cs(e);
  }
}
function Or(i, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(i)}</svg>')`;
}
function Hs(i) {
  return Or(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${i}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const Vx = /* @__PURE__ */ j.baseTheme({
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
function qx(i) {
  return i == "error" ? 4 : i == "warning" ? 3 : i == "info" ? 2 : 1;
}
function og(i) {
  let e = "hint", t = 1;
  for (let n of i) {
    let s = qx(n.severity);
    s > t && (t = s, e = n.severity);
  }
  return e;
}
class lg extends jt {
  constructor(e) {
    super(), this.diagnostics = e, this.severity = og(e);
  }
  toDOM(e) {
    let t = document.createElement("div");
    t.className = "cm-lint-marker cm-lint-marker-" + this.severity;
    let n = this.diagnostics, s = e.state.facet(go).tooltipFilter;
    return s && (n = s(n, e.state)), n.length && (t.onmouseover = () => Ix(e, t, n)), t;
  }
}
function Wx(i, e) {
  let t = (n) => {
    let s = e.getBoundingClientRect();
    if (!(n.clientX > s.left - 10 && n.clientX < s.right + 10 && n.clientY > s.top - 10 && n.clientY < s.bottom + 10)) {
      for (let r = n.target; r; r = r.parentNode)
        if (r.nodeType == 1 && r.classList.contains("cm-tooltip-lint"))
          return;
      window.removeEventListener("mousemove", t), i.state.field(ag) && i.dispatch({ effects: fc.of(null) });
    }
  };
  window.addEventListener("mousemove", t);
}
function Ix(i, e, t) {
  function n() {
    let o = i.elementAtHeight(e.getBoundingClientRect().top + 5 - i.documentTop);
    i.coordsAtPos(o.from) && i.dispatch({ effects: fc.of({
      pos: o.from,
      above: !1,
      clip: !1,
      create() {
        return {
          dom: ig(i, t),
          getCoords: () => e.getBoundingClientRect()
        };
      }
    }) }), e.onmouseout = e.onmousemove = null, Wx(i, e);
  }
  let { hoverTime: s } = i.state.facet(go), r = setTimeout(n, s);
  e.onmouseout = () => {
    clearTimeout(r), e.onmouseout = e.onmousemove = null;
  }, e.onmousemove = () => {
    clearTimeout(r), r = setTimeout(n, s);
  };
}
function zx(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of e) {
    let r = i.lineAt(s.from);
    (t[r.from] || (t[r.from] = [])).push(s);
  }
  let n = [];
  for (let s in t)
    n.push(new lg(t[s]).range(+s));
  return ee.of(n, !0);
}
const Nx = /* @__PURE__ */ Ip({
  class: "cm-gutter-lint",
  markers: (i) => i.state.field(ha),
  widgetMarker: (i, e, t) => {
    let n = [];
    return i.state.field(ha).between(t.from, t.to, (s, r, o) => {
      s > t.from && s < t.to && n.push(...o.diagnostics);
    }), n.length ? new lg(n) : null;
  }
}), ha = /* @__PURE__ */ Ze.define({
  create() {
    return ee.empty;
  },
  update(i, e) {
    i = i.map(e.changes);
    let t = e.state.facet(go).markerFilter;
    for (let n of e.effects)
      if (n.is(Oo)) {
        let s = n.value;
        t && (s = t(s || [], e.state)), i = zx(e.state.doc, s.slice(0));
      }
    return i;
  }
}), fc = /* @__PURE__ */ Y.define(), ag = /* @__PURE__ */ Ze.define({
  create() {
    return null;
  },
  update(i, e) {
    return i && e.docChanged && (i = JO(e, i) ? null : Object.assign(Object.assign({}, i), { pos: e.changes.mapPos(i.pos) })), e.effects.reduce((t, n) => n.is(fc) ? n.value : t, i);
  },
  provide: (i) => oo.from(i)
}), Ux = /* @__PURE__ */ j.baseTheme({
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
    content: /* @__PURE__ */ Or('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')
  },
  ".cm-lint-marker-warning": {
    content: /* @__PURE__ */ Or('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')
  },
  ".cm-lint-marker-error": {
    content: /* @__PURE__ */ Or('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')
  }
}), cg = [
  tt,
  /* @__PURE__ */ j.decorations.compute([tt], (i) => {
    let { selected: e, panel: t } = i.field(tt);
    return !e || !t || e.from == e.to ? N.none : N.set([
      Rx.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ ov(_x, { hideOn: JO }),
  Vx
], go = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, {
      hoverTime: 300,
      markerFilter: null,
      tooltipFilter: null
    });
  }
});
function Yx(i = {}) {
  return [go.of(i), ha, Nx, Ux, ag];
}
const _u = typeof String.prototype.normalize == "function" ? (i) => i.normalize("NFKD") : (i) => i;
class dn {
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
    return Fe(this.buffer, this.bufferPos);
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
      let t = Ea(e), n = this.bufferStart + this.bufferPos;
      this.bufferPos += Ct(e);
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
typeof Symbol < "u" && (dn.prototype[Symbol.iterator] = function() {
  return this;
});
const hg = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, dc = "gm" + (/x/.unicode == null ? "" : "u");
class ug {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, n, s = 0, r = e.length) {
    if (this.text = e, this.to = r, this.curLine = "", this.done = !1, this.value = hg, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new fg(e, t, n, s, r);
    this.re = new RegExp(t, dc + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = e.iter();
    let o = e.lineAt(s);
    this.curLineStart = o.from, this.matchPos = Br(e, s), this.getLine(this.curLineStart);
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
        if (this.matchPos = Br(this.text, s + (n == s ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < s || n > this.value.to) && (!this.test || this.test(n, s, t)))
          return this.value = { from: n, to: s, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const Jo = /* @__PURE__ */ new WeakMap();
class tn {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, n) {
    let s = Jo.get(e);
    if (!s || s.from >= n || s.to <= t) {
      let l = new tn(t, e.sliceString(t, n));
      return Jo.set(e, l), l;
    }
    if (s.from == t && s.to == n)
      return s;
    let { text: r, from: o } = s;
    return o > t && (r = e.sliceString(t, o) + r, o = t), s.to < n && (r += e.sliceString(s.to, n)), Jo.set(e, new tn(o, r)), new tn(t, r.slice(t - o, n - o));
  }
}
class fg {
  constructor(e, t, n, s, r) {
    this.text = e, this.to = r, this.done = !1, this.value = hg, this.matchPos = Br(e, s), this.re = new RegExp(t, dc + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = tn.get(e, s, this.chunkEnd(
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
          return this.value = { from: n, to: s, match: t }, this.matchPos = Br(this.text, s + (n == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = tn.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (ug.prototype[Symbol.iterator] = fg.prototype[Symbol.iterator] = function() {
  return this;
});
function Gx(i) {
  try {
    return new RegExp(i, dc), !0;
  } catch {
    return !1;
  }
}
function Br(i, e) {
  if (e >= i.length)
    return e;
  let t = i.lineAt(e), n;
  for (; e < t.to && (n = t.text.charCodeAt(e - t.from)) >= 56320 && n < 57344; )
    e++;
  return e;
}
function ua(i) {
  let e = String(i.state.doc.lineAt(i.state.selection.main.head).number), t = fe("input", { class: "cm-textfield", name: "line", value: e }), n = fe("form", {
    class: "cm-gotoLine",
    onkeydown: (r) => {
      r.keyCode == 27 ? (r.preventDefault(), i.dispatch({ effects: Vr.of(!1) }), i.focus()) : r.keyCode == 13 && (r.preventDefault(), s());
    },
    onsubmit: (r) => {
      r.preventDefault(), s();
    }
  }, fe("label", i.state.phrase("Go to line"), ": ", t), " ", fe("button", { class: "cm-button", type: "submit" }, i.state.phrase("go")));
  function s() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!r)
      return;
    let { state: o } = i, l = o.doc.lineAt(o.selection.main.head), [, a, c, h, u] = r, f = h ? +h.slice(1) : 0, d = c ? +c : l.number;
    if (c && u) {
      let m = d / 100;
      a && (m = m * (a == "-" ? -1 : 1) + l.number / o.doc.lines), d = Math.round(o.doc.lines * m);
    } else c && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))), g = A.cursor(p.from + Math.max(0, Math.min(f, p.length)));
    i.dispatch({
      effects: [Vr.of(!1), j.scrollIntoView(g.from, { y: "center" })],
      selection: g
    }), i.focus();
  }
  return { dom: n };
}
const Vr = /* @__PURE__ */ Y.define(), Xu = /* @__PURE__ */ Ze.define({
  create() {
    return !0;
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(Vr) && (i = t.value);
    return i;
  },
  provide: (i) => rs.from(i, (e) => e ? ua : null)
}), Fx = (i) => {
  let e = ss(i, ua);
  if (!e) {
    let t = [Vr.of(!0)];
    i.state.field(Xu, !1) == null && t.push(Y.appendConfig.of([Xu, Hx])), i.dispatch({ effects: t }), e = ss(i, ua);
  }
  return e && e.dom.querySelector("input").select(), !0;
}, Hx = /* @__PURE__ */ j.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), Kx = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Jx = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, Kx, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function ew(i) {
  return [rw, sw];
}
const tw = /* @__PURE__ */ N.mark({ class: "cm-selectionMatch" }), iw = /* @__PURE__ */ N.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Eu(i, e, t, n) {
  return (t == 0 || i(e.sliceDoc(t - 1, t)) != me.Word) && (n == e.doc.length || i(e.sliceDoc(n, n + 1)) != me.Word);
}
function nw(i, e, t, n) {
  return i(e.sliceDoc(t, t + 1)) == me.Word && i(e.sliceDoc(n - 1, n)) == me.Word;
}
const sw = /* @__PURE__ */ Se.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.selectionSet || i.docChanged || i.viewportChanged) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = i.state.facet(Jx), { state: t } = i, n = t.selection;
    if (n.ranges.length > 1)
      return N.none;
    let s = n.main, r, o = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor)
        return N.none;
      let a = t.wordAt(s.head);
      if (!a)
        return N.none;
      o = t.charCategorizer(s.head), r = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200)
        return N.none;
      if (e.wholeWords) {
        if (r = t.sliceDoc(s.from, s.to), o = t.charCategorizer(s.head), !(Eu(o, t, s.from, s.to) && nw(o, t, s.from, s.to)))
          return N.none;
      } else if (r = t.sliceDoc(s.from, s.to), !r)
        return N.none;
    }
    let l = [];
    for (let a of i.visibleRanges) {
      let c = new dn(t.doc, r, a.from, a.to);
      for (; !c.next().done; ) {
        let { from: h, to: u } = c.value;
        if ((!o || Eu(o, t, h, u)) && (s.empty && h <= s.from && u >= s.to ? l.push(iw.range(h, u)) : (h >= s.to || u <= s.from) && l.push(tw.range(h, u)), l.length > e.maxMatches))
          return N.none;
      }
    }
    return N.set(l);
  }
}, {
  decorations: (i) => i.decorations
}), rw = /* @__PURE__ */ j.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), ow = ({ state: i, dispatch: e }) => {
  let { selection: t } = i, n = A.create(t.ranges.map((s) => i.wordAt(s.head) || A.cursor(s.head)), t.mainIndex);
  return n.eq(t) ? !1 : (e(i.update({ selection: n })), !0);
};
function lw(i, e) {
  let { main: t, ranges: n } = i.selection, s = i.wordAt(t.head), r = s && s.from == t.from && s.to == t.to;
  for (let o = !1, l = new dn(i.doc, e, n[n.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new dn(i.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), o = !0;
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
const aw = ({ state: i, dispatch: e }) => {
  let { ranges: t } = i.selection;
  if (t.some((r) => r.from === r.to))
    return ow({ state: i, dispatch: e });
  let n = i.sliceDoc(t[0].from, t[0].to);
  if (i.selection.ranges.some((r) => i.sliceDoc(r.from, r.to) != n))
    return !1;
  let s = lw(i, n);
  return s ? (e(i.update({
    selection: i.selection.addRange(A.range(s.from, s.to), !1),
    effects: j.scrollIntoView(s.to)
  })), !0) : !1;
}, vn = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new vw(e),
      scrollToMatch: (e) => j.scrollIntoView(e)
    });
  }
});
class dg {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Gx(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
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
    return this.regexp ? new fw(this) : new hw(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, n) {
    let s = e.doc ? e : H.create({ doc: e });
    return n == null && (n = s.doc.length), this.regexp ? Ui(this, s, t, n) : Ni(this, s, t, n);
  }
}
class pg {
  constructor(e) {
    this.spec = e;
  }
}
function Ni(i, e, t, n) {
  return new dn(e.doc, i.unquoted, t, n, i.caseSensitive ? void 0 : (s) => s.toLowerCase(), i.wholeWord ? cw(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function cw(i, e) {
  return (t, n, s, r) => ((r > t || r + s.length < n) && (r = Math.max(0, t - 2), s = i.sliceString(r, Math.min(i.length, n + 2))), (e(qr(s, t - r)) != me.Word || e(Wr(s, t - r)) != me.Word) && (e(Wr(s, n - r)) != me.Word || e(qr(s, n - r)) != me.Word));
}
class hw extends pg {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, n) {
    let s = Ni(this.spec, e, n, e.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(e.doc.length, t + this.spec.unquoted.length);
      s = Ni(this.spec, e, 0, r).nextOverlapping();
    }
    return s.done || s.value.from == t && s.value.to == n ? null : s.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, n) {
    for (let s = n; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length), o = Ni(this.spec, e, r, s), l = null;
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
    let n = Ni(this.spec, e, 0, e.doc.length), s = [];
    for (; !n.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(e, t, n, s) {
    let r = Ni(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
function Ui(i, e, t, n) {
  return new ug(e.doc, i.search, {
    ignoreCase: !i.caseSensitive,
    test: i.wholeWord ? uw(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, n);
}
function qr(i, e) {
  return i.slice(De(i, e, !1), e);
}
function Wr(i, e) {
  return i.slice(e, De(i, e));
}
function uw(i) {
  return (e, t, n) => !n[0].length || (i(qr(n.input, n.index)) != me.Word || i(Wr(n.input, n.index)) != me.Word) && (i(Wr(n.input, n.index + n[0].length)) != me.Word || i(qr(n.input, n.index + n[0].length)) != me.Word);
}
class fw extends pg {
  nextMatch(e, t, n) {
    let s = Ui(this.spec, e, n, e.doc.length).next();
    return s.done && (s = Ui(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, n) {
    for (let s = 1; ; s++) {
      let r = Math.max(
        t,
        n - s * 1e4
        /* FindPrev.ChunkSize */
      ), o = Ui(this.spec, e, r, n), l = null;
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
    let n = Ui(this.spec, e, 0, e.doc.length), s = [];
    for (; !n.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(e, t, n, s) {
    let r = Ui(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(n + 250, e.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
const hs = /* @__PURE__ */ Y.define(), pc = /* @__PURE__ */ Y.define(), ci = /* @__PURE__ */ Ze.define({
  create(i) {
    return new el(fa(i).create(), null);
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(hs) ? i = new el(t.value.create(), i.panel) : t.is(pc) && (i = new el(i.query, t.value ? Oc : null));
    return i;
  },
  provide: (i) => rs.from(i, (e) => e.panel)
});
class el {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const dw = /* @__PURE__ */ N.mark({ class: "cm-searchMatch" }), pw = /* @__PURE__ */ N.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), Ow = /* @__PURE__ */ Se.fromClass(class {
  constructor(i) {
    this.view = i, this.decorations = this.highlight(i.state.field(ci));
  }
  update(i) {
    let e = i.state.field(ci);
    (e != i.startState.field(ci) || i.docChanged || i.selectionSet || i.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: i, panel: e }) {
    if (!e || !i.spec.valid)
      return N.none;
    let { view: t } = this, n = new Gt();
    for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
        a = r[++s].to;
      i.highlight(t.state, l, a, (c, h) => {
        let u = t.state.selection.ranges.some((f) => f.from == c && f.to == h);
        n.add(c, h, u ? pw : dw);
      });
    }
    return n.finish();
  }
}, {
  decorations: (i) => i.decorations
});
function Cs(i) {
  return (e) => {
    let t = e.state.field(ci, !1);
    return t && t.query.spec.valid ? i(e, t) : mg(e);
  };
}
const Ir = /* @__PURE__ */ Cs((i, { query: e }) => {
  let { to: t } = i.state.selection.main, n = e.nextMatch(i.state, t, t);
  if (!n)
    return !1;
  let s = A.single(n.from, n.to), r = i.state.facet(vn);
  return i.dispatch({
    selection: s,
    effects: [gc(i, n), r.scrollToMatch(s.main, i)],
    userEvent: "select.search"
  }), gg(i), !0;
}), zr = /* @__PURE__ */ Cs((i, { query: e }) => {
  let { state: t } = i, { from: n } = t.selection.main, s = e.prevMatch(t, n, n);
  if (!s)
    return !1;
  let r = A.single(s.from, s.to), o = i.state.facet(vn);
  return i.dispatch({
    selection: r,
    effects: [gc(i, s), o.scrollToMatch(r.main, i)],
    userEvent: "select.search"
  }), gg(i), !0;
}), gw = /* @__PURE__ */ Cs((i, { query: e }) => {
  let t = e.matchAll(i.state, 1e3);
  return !t || !t.length ? !1 : (i.dispatch({
    selection: A.create(t.map((n) => A.range(n.from, n.to))),
    userEvent: "select.search.matches"
  }), !0);
}), mw = ({ state: i, dispatch: e }) => {
  let t = i.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: n, to: s } = t.main, r = [], o = 0;
  for (let l = new dn(i.doc, i.sliceDoc(n, s)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == n && (o = r.length), r.push(A.range(l.value.from, l.value.to));
  }
  return e(i.update({
    selection: A.create(r, o),
    userEvent: "select.search.matches"
  })), !0;
}, Lu = /* @__PURE__ */ Cs((i, { query: e }) => {
  let { state: t } = i, { from: n, to: s } = t.selection.main;
  if (t.readOnly)
    return !1;
  let r = e.nextMatch(t, n, n);
  if (!r)
    return !1;
  let o = r, l = [], a, c, h = [];
  if (o.from == n && o.to == s && (c = t.toText(e.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: c }), o = e.nextMatch(t, o.from, o.to), h.push(j.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(n).number) + "."))), o) {
    let u = l.length == 0 || l[0].from >= r.to ? 0 : r.to - r.from - c.length;
    a = A.single(o.from - u, o.to - u), h.push(gc(i, o)), h.push(t.facet(vn).scrollToMatch(a.main, i));
  }
  return i.dispatch({
    changes: l,
    selection: a,
    effects: h,
    userEvent: "input.replace"
  }), !0;
}), yw = /* @__PURE__ */ Cs((i, { query: e }) => {
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
    effects: j.announce.of(n),
    userEvent: "input.replace.all"
  }), !0;
});
function Oc(i) {
  return i.state.facet(vn).createPanel(i);
}
function fa(i, e) {
  var t, n, s, r, o;
  let l = i.selection.main, a = l.empty || l.to > l.from + 100 ? "" : i.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let c = i.facet(vn);
  return new dg({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : c.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (n = e == null ? void 0 : e.caseSensitive) !== null && n !== void 0 ? n : c.caseSensitive,
    literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : c.literal,
    regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : c.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : c.wholeWord
  });
}
function Og(i) {
  let e = ss(i, Oc);
  return e && e.dom.querySelector("[main-field]");
}
function gg(i) {
  let e = Og(i);
  e && e == i.root.activeElement && e.select();
}
const mg = (i) => {
  let e = i.state.field(ci, !1);
  if (e && e.panel) {
    let t = Og(i);
    if (t && t != i.root.activeElement) {
      let n = fa(i.state, e.query.spec);
      n.valid && i.dispatch({ effects: hs.of(n) }), t.focus(), t.select();
    }
  } else
    i.dispatch({ effects: [
      pc.of(!0),
      e ? hs.of(fa(i.state, e.query.spec)) : Y.appendConfig.of(xw)
    ] });
  return !0;
}, yg = (i) => {
  let e = i.state.field(ci, !1);
  if (!e || !e.panel)
    return !1;
  let t = ss(i, Oc);
  return t && t.dom.contains(i.root.activeElement) && i.focus(), i.dispatch({ effects: pc.of(!1) }), !0;
}, bw = [
  { key: "Mod-f", run: mg, scope: "editor search-panel" },
  { key: "F3", run: Ir, shift: zr, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Ir, shift: zr, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: yg, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: mw },
  { key: "Mod-Alt-g", run: Fx },
  { key: "Mod-d", run: aw, preventDefault: !0 }
];
class vw {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(ci).query.spec;
    this.commit = this.commit.bind(this), this.searchField = fe("input", {
      value: t.search,
      placeholder: st(e, "Find"),
      "aria-label": st(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = fe("input", {
      value: t.replace,
      placeholder: st(e, "Replace"),
      "aria-label": st(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = fe("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = fe("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = fe("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function n(s, r, o) {
      return fe("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = fe("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [
      this.searchField,
      n("next", () => Ir(e), [st(e, "next")]),
      n("prev", () => zr(e), [st(e, "previous")]),
      n("select", () => gw(e), [st(e, "all")]),
      fe("label", null, [this.caseField, st(e, "match case")]),
      fe("label", null, [this.reField, st(e, "regexp")]),
      fe("label", null, [this.wordField, st(e, "by word")]),
      ...e.state.readOnly ? [] : [
        fe("br"),
        this.replaceField,
        n("replace", () => Lu(e), [st(e, "replace")]),
        n("replaceAll", () => yw(e), [st(e, "replace all")])
      ],
      fe("button", {
        name: "close",
        onclick: () => yg(e),
        "aria-label": st(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new dg({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: hs.of(e) }));
  }
  keydown(e) {
    vb(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? zr : Ir)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Lu(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(hs) && !n.value.eq(this.query) && this.setQuery(n.value);
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
    return this.view.state.facet(vn).top;
  }
}
function st(i, e) {
  return i.state.phrase(e);
}
const Ks = 30, Js = /[\s\.,:;?!]/;
function gc(i, { from: e, to: t }) {
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
  return j.announce.of(`${i.state.phrase("current match")}. ${l} ${i.state.phrase("on line")} ${n.number}.`);
}
const Sw = /* @__PURE__ */ j.baseTheme({
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
}), xw = [
  ci,
  /* @__PURE__ */ mi.low(Ow),
  Sw
];
class bg {
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
    let t = Me(this.state).resolveInner(this.pos, -1);
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
    let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), s = t.text.slice(n - t.from, this.pos - t.from), r = s.search(Sg(e, !1));
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
function Du(i) {
  let e = Object.keys(i).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function ww(i) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of i) {
    e[s[0]] = !0;
    for (let r = 1; r < s.length; r++)
      t[s[r]] = !0;
  }
  let n = Du(e) + Du(t) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function vg(i) {
  let e = i.map((s) => typeof s == "string" ? { label: s } : s), [t, n] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : ww(e);
  return (s) => {
    let r = s.matchBefore(n);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null;
  };
}
function Qw(i, e) {
  return (t) => {
    for (let n = Me(t.state).resolveInner(t.pos, -1); n; n = n.parent) {
      if (i.indexOf(n.name) > -1)
        return null;
      if (n.type.isTop)
        break;
    }
    return e(t);
  };
}
class ju {
  constructor(e, t, n, s) {
    this.completion = e, this.source = t, this.match = n, this.score = s;
  }
}
function Zi(i) {
  return i.selection.main.from;
}
function Sg(i, e) {
  var t;
  let { source: n } = i, s = e && n[0] != "^", r = n[n.length - 1] != "$";
  return !s && !r ? i : new RegExp(`${s ? "^" : ""}(?:${n})${r ? "$" : ""}`, (t = i.flags) !== null && t !== void 0 ? t : i.ignoreCase ? "i" : "");
}
const mc = /* @__PURE__ */ Kt.define();
function kw(i, e, t, n) {
  let { main: s } = i.selection, r = t - s.from, o = n - s.from;
  return Object.assign(Object.assign({}, i.changeByRange((l) => {
    if (l != s && t != n && i.sliceDoc(l.from + r, l.from + o) != i.sliceDoc(t, n))
      return { range: l };
    let a = i.toText(e);
    return {
      changes: { from: l.from + r, to: n == s.from ? l.to : l.from + o, insert: a },
      range: A.cursor(l.from + r + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const Bu = /* @__PURE__ */ new WeakMap();
function Pw(i) {
  if (!Array.isArray(i))
    return i;
  let e = Bu.get(i);
  return e || Bu.set(i, e = vg(i)), e;
}
const Nr = /* @__PURE__ */ Y.define(), us = /* @__PURE__ */ Y.define();
class $w {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let n = Fe(e, t), s = Ct(n);
      this.chars.push(n);
      let r = e.slice(t, t + s), o = r.toUpperCase();
      this.folded.push(Fe(o == r ? r.toLowerCase() : o, 0)), t += s;
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
      let x = Fe(e, 0), w = Ct(x), P = w == e.length ? 0 : -100;
      if (x != t[0]) if (x == n[0])
        P += -200;
      else
        return null;
      return this.ret(P, [0, w]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, c = 0;
    if (l < 0) {
      for (let x = 0, w = Math.min(e.length, 200); x < w && c < a; ) {
        let P = Fe(e, x);
        (P == t[c] || P == n[c]) && (s[c++] = x), x += Ct(P);
      }
      if (c < a)
        return null;
    }
    let h = 0, u = 0, f = !1, d = 0, p = -1, g = -1, m = /[a-z]/.test(e), O = !0;
    for (let x = 0, w = Math.min(e.length, 200), P = 0; x < w && u < a; ) {
      let $ = Fe(e, x);
      l < 0 && (h < a && $ == t[h] && (r[h++] = x), d < a && ($ == t[d] || $ == n[d] ? (d == 0 && (p = x), g = x + 1, d++) : d = 0));
      let M, b = $ < 255 ? $ >= 48 && $ <= 57 || $ >= 97 && $ <= 122 ? 2 : $ >= 65 && $ <= 90 ? 1 : 0 : (M = Ea($)) != M.toLowerCase() ? 1 : M != M.toUpperCase() ? 2 : 0;
      (!x || b == 1 && m || P == 0 && b != 0) && (t[u] == $ || n[u] == $ && (f = !0) ? o[u++] = x : o.length && (O = !1)), P = b, x += Ct($);
    }
    return u == a && o[0] == 0 && O ? this.result(-100 + (f ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (g == e.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [p, g]) : u == a ? this.result(-100 + (f ? -200 : 0) + -700 + (O ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, n) {
    let s = [], r = 0;
    for (let o of t) {
      let l = o + (this.astral ? Ct(Fe(n, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(e - n.length, s);
  }
}
class Cw {
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
const _e = /* @__PURE__ */ W.define({
  combine(i) {
    return St(i, {
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
      positionInfo: Zw,
      filterStrict: !1,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (n) => Vu(e(n), t(n)),
      optionClass: (e, t) => (n) => Vu(e(n), t(n)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function Vu(i, e) {
  return i ? e ? i + " " + e : i : e;
}
function Zw(i, e, t, n, s, r) {
  let o = i.textDirection == ge.RTL, l = o, a = !1, c = "top", h, u, f = e.left - s.left, d = s.right - e.right, p = n.right - n.left, g = n.bottom - n.top;
  if (l && f < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, f) && (l = !0), p <= (l ? f : d))
    h = Math.max(s.top, Math.min(t.top, s.bottom - g)) - e.top, u = Math.min(400, l ? f : d);
  else {
    a = !0, u = Math.min(
      400,
      (o ? e.right : s.right - e.left) - 30
      /* Info.Margin */
    );
    let x = s.bottom - e.bottom;
    x >= g || x > e.top ? h = t.bottom - e.top : (c = "bottom", h = e.bottom - t.top);
  }
  let m = (e.bottom - e.top) / r.offsetHeight, O = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${c}: ${h / m}px; max-width: ${u / O}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function Tw(i) {
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
function tl(i, e, t) {
  if (i <= t)
    return { from: 0, to: i };
  if (e < 0 && (e = 0), e <= i >> 1) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let n = Math.floor((i - e) / t);
  return { from: i - (n + 1) * t, to: i - n * t };
}
class Aw {
  constructor(e, t, n) {
    this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let s = e.state.field(t), { options: r, selected: o } = s.open, l = e.state.facet(_e);
    this.optionContent = Tw(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = tl(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: c } = e.state.field(t).open;
      for (let h = a.target, u; h && h != this.dom; h = h.parentNode)
        if (h.nodeName == "LI" && (u = /-(\d+)$/.exec(h.id)) && +u[1] < c.length) {
          this.applyCompletion(e, c[+u[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let c = e.state.field(this.stateField, !1);
      c && c.tooltip && e.state.facet(_e).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: us.of(null) });
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
      (!s.open || s.open.options != r) && (this.range = tl(r.length, o, e.state.facet(_e).maxRenderedOptions), this.showOptions(r, n.id)), this.updateSel(), l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
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
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = tl(t.options.length, t.selected, this.view.state.facet(_e).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: n } = t.options[t.selected], { info: s } = n;
      if (!s)
        return;
      let r = typeof s == "string" ? document.createTextNode(s) : s(n);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, n);
      }).catch((o) => ze(this.view.state, o, "completion info")) : this.addInfoPane(r, n);
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
    return t && Rw(this.list, t), t;
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
    return s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10 ? null : this.view.state.facet(_e).positionInfo(this.view, t, s, n, r, this.dom);
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
function Mw(i, e) {
  return (t) => new Aw(t, i, e);
}
function Rw(i, e) {
  let t = i.getBoundingClientRect(), n = e.getBoundingClientRect(), s = t.height / i.offsetHeight;
  n.top < t.top ? i.scrollTop -= (t.top - n.top) / s : n.bottom > t.bottom && (i.scrollTop += (n.bottom - t.bottom) / s);
}
function qu(i) {
  return (i.boost || 0) * 100 + (i.apply ? 10 : 0) + (i.info ? 5 : 0) + (i.type ? 1 : 0);
}
function _w(i, e) {
  let t = [], n = null, s = (c) => {
    t.push(c);
    let { section: h } = c.completion;
    if (h) {
      n || (n = []);
      let u = typeof h == "string" ? h : h.name;
      n.some((f) => f.name == u) || n.push(typeof h == "string" ? { name: u } : h);
    }
  }, r = e.facet(_e);
  for (let c of i)
    if (c.hasResult()) {
      let h = c.result.getMatch;
      if (c.result.filter === !1)
        for (let u of c.result.options)
          s(new ju(u, c.source, h ? h(u) : [], 1e9 - t.length));
      else {
        let u = e.sliceDoc(c.from, c.to), f, d = r.filterStrict ? new Cw(u) : new $w(u);
        for (let p of c.result.options)
          if (f = d.match(p.label)) {
            let g = p.displayLabel ? h ? h(p, f.matched) : [] : f.matched;
            s(new ju(p, c.source, g, f.score + (p.boost || 0)));
          }
      }
    }
  if (n) {
    let c = /* @__PURE__ */ Object.create(null), h = 0, u = (f, d) => {
      var p, g;
      return ((p = f.rank) !== null && p !== void 0 ? p : 1e9) - ((g = d.rank) !== null && g !== void 0 ? g : 1e9) || (f.name < d.name ? -1 : 1);
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
class Hi {
  constructor(e, t, n, s, r, o) {
    this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Hi(this.options, Wu(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, n, s, r, o) {
    if (s && !o && e.some((c) => c.isPending))
      return s.setDisabled();
    let l = _w(e, t);
    if (!l.length)
      return s && e.some((c) => c.isPending) ? s.setDisabled() : null;
    let a = t.facet(_e).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let c = s.options[s.selected].completion;
      for (let h = 0; h < l.length; h++)
        if (l[h].completion == c) {
          a = h;
          break;
        }
    }
    return new Hi(l, Wu(n, a), {
      pos: e.reduce((c, h) => h.hasResult() ? Math.min(c, h.from) : c, 1e8),
      create: Bw,
      above: r.aboveCursor
    }, s ? s.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new Hi(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Hi(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Ur {
  constructor(e, t, n) {
    this.active = e, this.id = t, this.open = n;
  }
  static start() {
    return new Ur(Dw, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, n = t.facet(_e), r = (n.override || t.languageDataAt("autocomplete", Zi(t)).map(Pw)).map((a) => (this.active.find((h) => h.source == a) || new at(
      a,
      this.active.some(
        (h) => h.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, n));
    r.length == this.active.length && r.every((a, c) => a == this.active[c]) && (r = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(yc));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || r.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !Xw(r, this.active) || l ? o = Hi.build(r, t, this.id, o, n, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new at(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(wg) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new Ur(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Ew : Lw;
  }
}
function Xw(i, e) {
  if (i == e)
    return !0;
  for (let t = 0, n = 0; ; ) {
    for (; t < i.length && !i[t].hasResult(); )
      t++;
    for (; n < e.length && !e[n].hasResult(); )
      n++;
    let s = t == i.length, r = n == e.length;
    if (s || r)
      return s == r;
    if (i[t++].result != e[n++].result)
      return !1;
  }
}
const Ew = {
  "aria-autocomplete": "list"
}, Lw = {};
function Wu(i, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i
  };
  return e > -1 && (t["aria-activedescendant"] = i + "-" + e), t;
}
const Dw = [];
function xg(i, e) {
  if (i.isUserEvent("input.complete")) {
    let n = i.annotation(mc);
    if (n && e.activateOnCompletion(n))
      return 12;
  }
  let t = i.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : i.isUserEvent("delete.backward") ? 2 : i.selection ? 8 : i.docChanged ? 16 : 0;
}
class at {
  constructor(e, t, n = !1) {
    this.source = e, this.state = t, this.explicit = n;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let n = xg(e, t), s = this;
    (n & 8 || n & 16 && this.touches(e)) && (s = new at(
      s.source,
      0
      /* State.Inactive */
    )), n & 4 && s.state == 0 && (s = new at(
      this.source,
      1
      /* State.Pending */
    )), s = s.updateFor(e, n);
    for (let r of e.effects)
      if (r.is(Nr))
        s = new at(s.source, 1, r.value);
      else if (r.is(us))
        s = new at(
          s.source,
          0
          /* State.Inactive */
        );
      else if (r.is(yc))
        for (let o of r.value)
          o.source == s.source && (s = o);
    return s;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(Zi(e.state));
  }
}
class nn extends at {
  constructor(e, t, n, s, r, o) {
    super(e, 3, t), this.limit = n, this.result = s, this.from = r, this.to = o;
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
    let r = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = Zi(e.state);
    if (l > o || !s || t & 2 && (Zi(e.startState) == this.from || l < this.limit))
      return new at(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = e.changes.mapPos(this.limit);
    return jw(s.validFor, e.state, r, o) ? new nn(this.source, this.explicit, a, s, r, o) : s.update && (s = s.update(s, r, o, new bg(e.state, l, !1))) ? new nn(this.source, this.explicit, a, s, s.from, (n = s.to) !== null && n !== void 0 ? n : Zi(e.state)) : new at(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new nn(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new at(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function jw(i, e, t, n) {
  if (!i)
    return !1;
  let s = e.sliceDoc(t, n);
  return typeof i == "function" ? i(s, t, n, e) : Sg(i, !0).test(s);
}
const yc = /* @__PURE__ */ Y.define({
  map(i, e) {
    return i.map((t) => t.map(e));
  }
}), wg = /* @__PURE__ */ Y.define(), Ke = /* @__PURE__ */ Ze.define({
  create() {
    return Ur.start();
  },
  update(i, e) {
    return i.update(e);
  },
  provide: (i) => [
    oo.from(i, (e) => e.tooltip),
    j.contentAttributes.from(i, (e) => e.attrs)
  ]
});
function bc(i, e) {
  const t = e.completion.apply || e.completion.label;
  let n = i.state.field(Ke).active.find((s) => s.source == e.source);
  return n instanceof nn ? (typeof t == "string" ? i.dispatch(Object.assign(Object.assign({}, kw(i.state, t, n.from, n.to)), { annotations: mc.of(e.completion) })) : t(i, e.completion, n.from, n.to), !0) : !1;
}
const Bw = /* @__PURE__ */ Mw(Ke, bc);
function er(i, e = "option") {
  return (t) => {
    let n = t.state.field(Ke, !1);
    if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < t.state.facet(_e).interactionDelay)
      return !1;
    let s = 1, r;
    e == "page" && (r = qp(t, n.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = n.open.options, l = n.open.selected > -1 ? n.open.selected + s * (i ? 1 : -1) : i ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: wg.of(l) }), !0;
  };
}
const Vw = (i) => {
  let e = i.state.field(Ke, !1);
  return i.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < i.state.facet(_e).interactionDelay ? !1 : bc(i, e.open.options[e.open.selected]);
}, Iu = (i) => i.state.field(Ke, !1) ? (i.dispatch({ effects: Nr.of(!0) }), !0) : !1, qw = (i) => {
  let e = i.state.field(Ke, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (i.dispatch({ effects: us.of(null) }), !0);
};
class Ww {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Iw = 50, zw = 1e3, Nw = /* @__PURE__ */ Se.fromClass(class {
  constructor(i) {
    this.view = i, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of i.state.field(Ke).active)
      e.isPending && this.startQuery(e);
  }
  update(i) {
    let e = i.state.field(Ke), t = i.state.facet(_e);
    if (!i.selectionSet && !i.docChanged && i.startState.field(Ke) == e)
      return;
    let n = i.transactions.some((r) => {
      let o = xg(r, t);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (n || o.context.abortOnDocChange && i.docChanged || o.updates.length + i.transactions.length > Iw && Date.now() - o.time > zw) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            ze(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        o.updates.push(...i.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), i.transactions.some((r) => r.effects.some((o) => o.is(Nr))) && (this.pendingStart = !0);
    let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((r) => r.isPending && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let r of i.transactions)
        r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: i } = this.view, e = i.field(Ke);
    for (let t of e.active)
      t.isPending && !this.running.some((n) => n.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(_e).updateSyncTime));
  }
  startQuery(i) {
    let { state: e } = this.view, t = Zi(e), n = new bg(e, t, i.explicit, this.view), s = new Ww(i, n);
    this.running.push(s), Promise.resolve(i.source(n)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: us.of(null) }), ze(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((i) => i.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(_e).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var i;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(_e), n = this.view.state.field(Ke);
    for (let s = 0; s < this.running.length; s++) {
      let r = this.running[s];
      if (r.done === void 0)
        continue;
      if (this.running.splice(s--, 1), r.done) {
        let l = Zi(r.updates.length ? r.updates[0].startState : this.view.state), a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)), c = new nn(r.active.source, r.active.explicit, a, r.done, r.done.from, (i = r.done.to) !== null && i !== void 0 ? i : l);
        for (let h of r.updates)
          c = c.update(h, t);
        if (c.hasResult()) {
          e.push(c);
          continue;
        }
      }
      let o = n.active.find((l) => l.source == r.active.source);
      if (o && o.isPending)
        if (r.done == null) {
          let l = new at(
            r.active.source,
            0
            /* State.Inactive */
          );
          for (let a of r.updates)
            l = l.update(a, t);
          l.isPending || e.push(l);
        } else
          this.startQuery(o);
    }
    (e.length || n.open && n.open.disabled) && this.view.dispatch({ effects: yc.of(e) });
  }
}, {
  eventHandlers: {
    blur(i) {
      let e = this.view.state.field(Ke, !1);
      if (e && e.tooltip && this.view.state.facet(_e).closeOnBlur) {
        let t = e.open && qp(this.view, e.open.tooltip);
        (!t || !t.dom.contains(i.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: us.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Nr.of(!1) }), 20), this.composing = 0;
    }
  }
}), Uw = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), Yw = /* @__PURE__ */ mi.highest(/* @__PURE__ */ j.domEventHandlers({
  keydown(i, e) {
    let t = e.state.field(Ke, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || i.key.length > 1 || i.ctrlKey && !(Uw && i.altKey) || i.metaKey)
      return !1;
    let n = t.open.options[t.open.selected], s = t.active.find((o) => o.source == n.source), r = n.completion.commitCharacters || s.result.commitCharacters;
    return r && r.indexOf(i.key) > -1 && bc(e, n), !1;
  }
})), Qg = /* @__PURE__ */ j.baseTheme({
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
class Gw {
  constructor(e, t, n, s) {
    this.field = e, this.line = t, this.from = n, this.to = s;
  }
}
class vc {
  constructor(e, t, n) {
    this.field = e, this.from = t, this.to = n;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, Le.TrackDel), n = e.mapPos(this.to, 1, Le.TrackDel);
    return t == null || n == null ? null : new vc(this.field, t, n);
  }
}
class Sc {
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
    let l = this.fieldPositions.map((a) => new vc(a.field, s[a.line] + a.from, s[a.line] + a.to));
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
        s.push(new Gw(c, n.length, r.index, r.index + h.length)), o = o.slice(0, r.index) + a + o.slice(r.index + r[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, c) => {
        for (let h of s)
          h.line == n.length && h.from > c && (h.from--, h.to--);
        return a;
      }), n.push(o);
    }
    return new Sc(n, s);
  }
}
let Fw = /* @__PURE__ */ N.widget({ widget: /* @__PURE__ */ new class extends Bt {
  toDOM() {
    let i = document.createElement("span");
    return i.className = "cm-snippetFieldPosition", i;
  }
  ignoreEvent() {
    return !1;
  }
}() }), Hw = /* @__PURE__ */ N.mark({ class: "cm-snippetField" });
class Sn {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = N.set(e.map((n) => (n.from == n.to ? Fw : Hw).range(n.from, n.to)));
  }
  map(e) {
    let t = [];
    for (let n of this.ranges) {
      let s = n.map(e);
      if (!s)
        return null;
      t.push(s);
    }
    return new Sn(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((n) => n.field == this.active && n.from <= t.from && n.to >= t.to));
  }
}
const Zs = /* @__PURE__ */ Y.define({
  map(i, e) {
    return i && i.map(e);
  }
}), Kw = /* @__PURE__ */ Y.define(), fs = /* @__PURE__ */ Ze.define({
  create() {
    return null;
  },
  update(i, e) {
    for (let t of e.effects) {
      if (t.is(Zs))
        return t.value;
      if (t.is(Kw) && i)
        return new Sn(i.ranges, t.value);
    }
    return i && e.docChanged && (i = i.map(e.changes)), i && e.selection && !i.selectionInsideField(e.selection) && (i = null), i;
  },
  provide: (i) => j.decorations.from(i, (e) => e ? e.deco : N.none)
});
function xc(i, e) {
  return A.create(i.filter((t) => t.field == e).map((t) => A.range(t.from, t.to)));
}
function Jw(i) {
  let e = Sc.parse(i);
  return (t, n, s, r) => {
    let { text: o, ranges: l } = e.instantiate(t.state, s), { main: a } = t.state.selection, c = {
      changes: { from: s, to: r == a.from ? a.to : r, insert: ie.of(o) },
      scrollIntoView: !0,
      annotations: n ? [mc.of(n), $e.userEvent.of("input.complete")] : void 0
    };
    if (l.length && (c.selection = xc(l, 0)), l.some((h) => h.field > 0)) {
      let h = new Sn(l, 0), u = c.effects = [Zs.of(h)];
      t.state.field(fs, !1) === void 0 && u.push(Y.appendConfig.of([fs, sQ, rQ, Qg]));
    }
    t.dispatch(t.state.update(c));
  };
}
function kg(i) {
  return ({ state: e, dispatch: t }) => {
    let n = e.field(fs, !1);
    if (!n || i < 0 && n.active == 0)
      return !1;
    let s = n.active + i, r = i > 0 && !n.ranges.some((o) => o.field == s + i);
    return t(e.update({
      selection: xc(n.ranges, s),
      effects: Zs.of(r ? null : new Sn(n.ranges, s)),
      scrollIntoView: !0
    })), !0;
  };
}
const eQ = ({ state: i, dispatch: e }) => i.field(fs, !1) ? (e(i.update({ effects: Zs.of(null) })), !0) : !1, tQ = /* @__PURE__ */ kg(1), iQ = /* @__PURE__ */ kg(-1), nQ = [
  { key: "Tab", run: tQ, shift: iQ },
  { key: "Escape", run: eQ }
], zu = /* @__PURE__ */ W.define({
  combine(i) {
    return i.length ? i[0] : nQ;
  }
}), sQ = /* @__PURE__ */ mi.highest(/* @__PURE__ */ di.compute([zu], (i) => i.facet(zu)));
function Ge(i, e) {
  return Object.assign(Object.assign({}, e), { apply: Jw(i) });
}
const rQ = /* @__PURE__ */ j.domEventHandlers({
  mousedown(i, e) {
    let t = e.state.field(fs, !1), n;
    if (!t || (n = e.posAtCoords({ x: i.clientX, y: i.clientY })) == null)
      return !1;
    let s = t.ranges.find((r) => r.from <= n && r.to >= n);
    return !s || s.field == t.active ? !1 : (e.dispatch({
      selection: xc(t.ranges, s.field),
      effects: Zs.of(t.ranges.some((r) => r.field > s.field) ? new Sn(t.ranges, s.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), ds = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Qi = /* @__PURE__ */ Y.define({
  map(i, e) {
    let t = e.mapPos(i, -1, Le.TrackAfter);
    return t ?? void 0;
  }
}), wc = /* @__PURE__ */ new class extends Ri {
}();
wc.startSide = 1;
wc.endSide = -1;
const Pg = /* @__PURE__ */ Ze.define({
  create() {
    return ee.empty;
  },
  update(i, e) {
    if (i = i.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      i = i.update({ filter: (n) => n >= t.from && n <= t.to });
    }
    for (let t of e.effects)
      t.is(Qi) && (i = i.update({ add: [wc.range(t.value, t.value + 1)] }));
    return i;
  }
});
function oQ() {
  return [aQ, Pg];
}
const il = "()[]{}<>";
function $g(i) {
  for (let e = 0; e < il.length; e += 2)
    if (il.charCodeAt(e) == i)
      return il.charAt(e + 1);
  return Ea(i < 128 ? i : i + 1);
}
function Cg(i, e) {
  return i.languageDataAt("closeBrackets", e)[0] || ds;
}
const lQ = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), aQ = /* @__PURE__ */ j.inputHandler.of((i, e, t, n) => {
  if ((lQ ? i.composing : i.compositionStarted) || i.state.readOnly)
    return !1;
  let s = i.state.selection.main;
  if (n.length > 2 || n.length == 2 && Ct(Fe(n, 0)) == 1 || e != s.from || t != s.to)
    return !1;
  let r = uQ(i.state, n);
  return r ? (i.dispatch(r), !0) : !1;
}), cQ = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let n = Cg(i, i.selection.main.head).brackets || ds.brackets, s = null, r = i.changeByRange((o) => {
    if (o.empty) {
      let l = fQ(i.doc, o.head);
      for (let a of n)
        if (a == l && mo(i.doc, o.head) == $g(Fe(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: A.cursor(o.head - a.length)
          };
    }
    return { range: s = o };
  });
  return s || e(i.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !s;
}, hQ = [
  { key: "Backspace", run: cQ }
];
function uQ(i, e) {
  let t = Cg(i, i.selection.main.head), n = t.brackets || ds.brackets;
  for (let s of n) {
    let r = $g(Fe(s, 0));
    if (e == s)
      return r == s ? OQ(i, s, n.indexOf(s + s + s) > -1, t) : dQ(i, s, r, t.before || ds.before);
    if (e == r && Zg(i, i.selection.main.from))
      return pQ(i, s, r);
  }
  return null;
}
function Zg(i, e) {
  let t = !1;
  return i.field(Pg).between(0, i.doc.length, (n) => {
    n == e && (t = !0);
  }), t;
}
function mo(i, e) {
  let t = i.sliceString(e, e + 2);
  return t.slice(0, Ct(Fe(t, 0)));
}
function fQ(i, e) {
  let t = i.sliceString(e - 2, e);
  return Ct(Fe(t, 0)) == t.length ? t : t.slice(1);
}
function dQ(i, e, t, n) {
  let s = null, r = i.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: Qi.of(o.to + e.length),
        range: A.range(o.anchor + e.length, o.head + e.length)
      };
    let l = mo(i.doc, o.head);
    return !l || /\s/.test(l) || n.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: Qi.of(o.head + e.length),
      range: A.cursor(o.head + e.length)
    } : { range: s = o };
  });
  return s ? null : i.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function pQ(i, e, t) {
  let n = null, s = i.changeByRange((r) => r.empty && mo(i.doc, r.head) == t ? {
    changes: { from: r.head, to: r.head + t.length, insert: t },
    range: A.cursor(r.head + t.length)
  } : n = { range: r });
  return n ? null : i.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function OQ(i, e, t, n) {
  let s = n.stringPrefixes || ds.stringPrefixes, r = null, o = i.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Qi.of(l.to + e.length),
        range: A.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, c = mo(i.doc, a), h;
    if (c == e) {
      if (Nu(i, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Qi.of(a + e.length),
          range: A.cursor(a + e.length)
        };
      if (Zg(i, a)) {
        let f = t && i.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + f.length, insert: f },
          range: A.cursor(a + f.length)
        };
      }
    } else {
      if (t && i.sliceDoc(a - 2 * e.length, a) == e + e && (h = Uu(i, a - 2 * e.length, s)) > -1 && Nu(i, h))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Qi.of(a + e.length),
          range: A.cursor(a + e.length)
        };
      if (i.charCategorizer(a)(c) != me.Word && Uu(i, a, s) > -1 && !gQ(i, a, e, s))
        return {
          changes: { insert: e + e, from: a },
          effects: Qi.of(a + e.length),
          range: A.cursor(a + e.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : i.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Nu(i, e) {
  let t = Me(i).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function gQ(i, e, t, n) {
  let s = Me(i).resolveInner(e, -1), r = n.reduce((o, l) => Math.max(o, l.length), 0);
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
function Uu(i, e, t) {
  let n = i.charCategorizer(e);
  if (n(i.sliceDoc(e - 1, e)) != me.Word)
    return e;
  for (let s of t) {
    let r = e - s.length;
    if (i.sliceDoc(r, e) == s && n(i.sliceDoc(r - 1, r)) != me.Word)
      return r;
  }
  return -1;
}
function mQ(i = {}) {
  return [
    Yw,
    Ke,
    _e.of(i),
    Nw,
    yQ,
    Qg
  ];
}
const Tg = [
  { key: "Ctrl-Space", run: Iu },
  { mac: "Alt-`", run: Iu },
  { key: "Escape", run: qw },
  { key: "ArrowDown", run: /* @__PURE__ */ er(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ er(!1) },
  { key: "PageDown", run: /* @__PURE__ */ er(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ er(!1, "page") },
  { key: "Enter", run: Vw }
], yQ = /* @__PURE__ */ mi.highest(/* @__PURE__ */ di.computeN([_e], (i) => i.facet(_e).defaultKeymap ? [Tg] : [])), da = [
  gv(),
  bv(),
  Bp(),
  SO(),
  oS(),
  Lp(),
  Tb(),
  H.allowMultipleSelections.of(!0),
  Uv(),
  lc(pO, { fallback: !0 }),
  gS(),
  oQ(),
  mQ(),
  Gb(),
  Kb(),
  Vb(),
  ew(),
  di.of([
    ...hQ,
    ...jr,
    ...bw,
    ...kO,
    ...iS,
    ...Tg,
    ...Lx
  ])
], bQ = [
  Bp(),
  SO(),
  Lp(),
  lc(pO, { fallback: !0 }),
  di.of([
    ...jr,
    ...kO
  ])
];
/**
 * vue-codemirror6
 *
 * @description CodeMirror6 Component for vue2 and vue3.
 * @author Logue <logue@hotmail.co.jp>
 * @copyright 2022-2025 By Masashi Yoshikawa All rights reserved.
 * @license MIT
 * @version 1.3.10
 * @see {@link https://github.com/logue/vue-codemirror6}
 */
const vQ = (i) => i ? Object.entries(i).reduce((e, [t, n]) => (t = t.charAt(0).toUpperCase() + t.slice(1), t = `on${t}`, { ...e, [t]: n }), {}) : {};
function Yu(i, e = {}, t) {
  const { props: n, domProps: s, on: r, ...o } = e, l = r ? vQ(r) : {};
  return Yf(
    i,
    { ...o, ...n, ...s, ...l },
    t
  );
}
const SQ = (i) => typeof i == "function" ? i() : i;
var xQ = If({
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
    const t = G(), n = G(i.modelValue), s = Ut(new j()), r = I({
      get: () => s.value.hasFocus,
      set: (S) => {
        S && s.value.focus();
      }
    }), o = I({
      get: () => s.value.state.selection,
      set: (S) => s.value.dispatch({ selection: S })
    }), l = I({
      get: () => s.value.state.selection.main.head,
      set: (S) => s.value.dispatch({ selection: { anchor: S } })
    }), a = I(
      {
        get: () => s.value.state.toJSON(),
        set: (S) => s.value.setState(H.fromJSON(S))
      }
    ), c = G(0), h = G(0), u = I(() => {
      const S = new on(), Z = new on();
      if (i.basic && i.minimal)
        throw "[Vue CodeMirror] Both basic and minimal cannot be specified.";
      return [
        // Toggle basic setup
        i.basic && !i.minimal ? da : void 0,
        // Toggle minimal setup
        i.minimal && !i.basic ? bQ : void 0,
        // ViewUpdate event listener
        j.updateListener.of((_) => {
          var B;
          e.emit("focus", s.value.hasFocus), c.value = (B = s.value.state.doc) == null ? void 0 : B.length, !(_.changes.empty || !_.docChanged) && (i.linter && (i.forceLinting && Mu(s.value), h.value = i.linter(s.value).length), e.emit("update", _));
        }),
        // Toggle light/dark mode.
        j.theme(i.theme, { dark: i.dark }),
        // Toggle line wrapping
        i.wrap ? j.lineWrapping : void 0,
        // Indent with tab
        i.tab ? di.of([Tx]) : void 0,
        // Tab character
        i.indentUnit ? Qs.of(i.indentUnit) : void 0,
        // Allow Multiple Selections
        H.allowMultipleSelections.of(i.allowMultipleSelections),
        // Indent tab size
        i.tabSize ? Z.of(H.tabSize.of(i.tabSize)) : void 0,
        // locale settings
        i.phrases ? H.phrases.of(i.phrases) : void 0,
        // Readonly option
        H.readOnly.of(i.readonly),
        // Editable option
        j.editable.of(!i.disabled),
        // Set Line break char
        i.lineSeparator ? H.lineSeparator.of(i.lineSeparator) : void 0,
        // Lang
        i.lang ? S.of(i.lang) : void 0,
        // Append Linter settings
        i.linter ? jx(i.linter, i.linterConfig) : void 0,
        // Show 🔴 to error line when linter enabled.
        i.linter && i.gutter ? Yx(i.gutterConfig) : void 0,
        // Placeholder
        i.placeholder ? zb(i.placeholder) : void 0,
        // Append Extensions
        ...i.extensions
      ].filter((_) => !!_);
    });
    ve(
      u,
      (S) => {
        var Z;
        (Z = s.value) == null || Z.dispatch({
          effects: Y.reconfigure.of(S)
        });
      },
      { immediate: !0 }
    ), ve(
      () => i.modelValue,
      async (S) => {
        if (s.value.composing || // IME fix
        s.value.state.doc.toJSON().join(i.lineSeparator ?? `
`) === S)
          return;
        const Z = !s.value.state.selection.ranges.every(
          (_) => _.anchor < S.length && _.head < S.length
        );
        s.value.dispatch({
          changes: { from: 0, to: s.value.state.doc.length, insert: S },
          selection: Z ? { anchor: 0, head: 0 } : s.value.state.selection,
          scrollIntoView: !0
        });
      },
      { immediate: !0 }
    ), mn(async () => {
      let S = n.value;
      t.value && (t.value.childNodes[0] && (n.value !== "" && console.warn(
        "[CodeMirror.vue] The <code-mirror> tag contains child elements that overwrite the `v-model` values."
      ), S = t.value.childNodes[0].innerText.trim()), s.value = new j({
        parent: t.value,
        state: H.create({ doc: S, extensions: u.value }),
        dispatch: (Z) => {
          s.value.update([Z]), !(Z.changes.empty || !Z.docChanged) && (e.emit("update:modelValue", Z.state.doc.toString() ?? ""), e.emit("change", Z.state));
        }
      }), await bs(), e.emit("ready", {
        view: s.value,
        state: s.value.state,
        container: t.value
      }));
    }), Qm(() => {
      s.value.destroy(), e.emit("destroy");
    });
    const f = () => {
      !i.linter || !s.value || (i.forceLinting && Mu(s.value), h.value = Mx(s.value.state));
    }, d = () => {
      var S, Z;
      (S = s.value) == null || S.dispatch({
        effects: Y.reconfigure.of([])
      }), (Z = s.value) == null || Z.dispatch({
        effects: Y.appendConfig.of(u.value)
      });
    }, p = (S, Z) => s.value.state.sliceDoc(S, Z), g = (S) => s.value.state.doc.line(S + 1).text, m = () => s.value.state.doc.lines, O = () => s.value.state.selection.main.head, x = () => {
      let S;
      return (S = s.value.state.selection.ranges) !== null && S !== void 0 ? S : [];
    }, w = () => {
      let S;
      return (S = s.value.state.sliceDoc(
        s.value.state.selection.main.from,
        s.value.state.selection.main.to
      )) !== null && S !== void 0 ? S : "";
    }, P = () => {
      const S = s.value.state;
      return S ? S.selection.ranges.map(
        (Z) => S.sliceDoc(Z.from, Z.to)
      ) : [];
    }, $ = () => s.value.state.selection.ranges.some(
      (S) => !S.empty
    ), M = (S, Z, _) => s.value.dispatch({
      changes: { from: Z, to: _, insert: S }
    }), b = (S) => s.value.dispatch(s.value.state.replaceSelection(S)), Q = (S) => s.value.dispatch({ selection: { anchor: S } }), v = (S, Z) => s.value.dispatch({ selection: { anchor: S, head: Z } }), T = (S, Z) => s.value.dispatch({
      selection: A.create(S, Z)
    }), C = (S) => s.value.dispatch({
      selection: A.create(
        o.value.ranges.map((Z) => Z.extend(S(Z)))
      )
    }), k = {
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
      getLine: g,
      lineCount: m,
      getCursor: O,
      listSelections: x,
      getSelection: w,
      getSelections: P,
      somethingSelected: $,
      replaceRange: M,
      replaceSelection: b,
      setCursor: Q,
      setSelection: v,
      setSelections: T,
      extendSelectionsBy: C
    };
    return e.expose(k), k;
  },
  render() {
    return Yu(
      this.$props.tag,
      {
        ref: "editor",
        class: "vue-codemirror"
      },
      this.$slots.default ? (
        // Hide original content
        Yu(
          "aside",
          { style: "display: none;", "aria-hidden": "true" },
          SQ(this.$slots.default)
        )
      ) : void 0
    );
  }
});
let wQ = class pa {
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
    return new pa(e, [], t, n, n, 0, [], 0, s ? new Gu(s, s.start) : null, 0, null);
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
    return new pa(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, s, this.curContext, this.lookAhead, e);
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
    for (let t = new QQ(this); ; ) {
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
      let t = new Gu(this.curContext.tracker, e);
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
class Gu {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class QQ {
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
class Yr {
  constructor(e, t, n) {
    this.stack = e, this.pos = t, this.index = n, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new Yr(e, t, t - e.bufferBase);
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
    return new Yr(this.stack, this.pos, this.index);
  }
}
function Bn(i, e = Uint16Array) {
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
class gr {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const Fu = new gr();
class kQ {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Fu, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
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
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = Fu, this.pos != e) {
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
class sn {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: n } = t.p;
    Ag(this.data, e, t, this.id, n.data, n.tokenPrecTable);
  }
}
sn.prototype.contextual = sn.prototype.fallback = sn.prototype.extend = !1;
class Oa {
  constructor(e, t, n) {
    this.precTable = t, this.elseToken = n, this.data = typeof e == "string" ? Bn(e) : e;
  }
  token(e, t) {
    let n = e.pos, s = 0;
    for (; ; ) {
      let r = e.next < 0, o = e.resolveOffset(1, 1);
      if (Ag(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
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
Oa.prototype.contextual = sn.prototype.fallback = sn.prototype.extend = !1;
class Jt {
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
function Ag(i, e, t, n, s, r) {
  let o = 0, l = 1 << n, { dialect: a } = t.p.parser;
  e: for (; l & i[o]; ) {
    let c = i[o + 1];
    for (let d = o + 3; d < c; d += 2)
      if ((i[d + 1] & l) > 0) {
        let p = i[d];
        if (a.allows(p) && (e.token.value == -1 || e.token.value == p || PQ(p, e.token.value, s, r))) {
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
      let d = u + f >> 1, p = c + d + (d << 1), g = i[p], m = i[p + 1] || 65536;
      if (h < g)
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
function Hu(i, e, t) {
  for (let n = e, s; (s = i[n]) != 65535; n++)
    if (s == t)
      return n - e;
  return -1;
}
function PQ(i, e, t, n) {
  let s = Hu(t, n, e);
  return s < 0 || Hu(t, n, i) < s;
}
const rt = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let nl = null;
function Ku(i, e, t) {
  let n = i.cursor(Ae.IncludeAnonymous);
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
class $Q {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? Ku(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? Ku(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
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
      if (r instanceof Ce) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(K.lookAhead);
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
class CQ {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((n) => new gr());
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
    return a && e.setLookAhead(a), !n && e.pos == this.stream.end && (n = new gr(), n.value = e.p.parser.eofTerm, n.start = n.end = e.pos, t = this.addActions(e, n.value, n.end, t)), this.mainToken = n, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new gr(), { pos: n, p: s } = e;
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
            c = zt(l, c + 2);
          else {
            s == 0 && l[c + 1] == 2 && (s = this.putAction(zt(l, c + 2), t, n, s));
            break;
          }
        l[c] == t && (s = this.putAction(zt(l, c + 1), t, n, s));
      }
    return s;
  }
}
class ZQ {
  constructor(e, t, n, s) {
    this.parser = e, this.input = t, this.ranges = s, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new kQ(t, s), this.tokens = new CQ(e, this.stream), this.topTerm = e.top[1];
    let { from: r } = s[0];
    this.stacks = [wQ.start(this, e.top[0], r)], this.fragments = n.length && this.stream.end - r > e.bufferLength * 4 ? new $Q(n, e.nodeSet) : null;
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
      let o = s && AQ(s);
      if (o)
        return rt && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw rt && s && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && s) {
      let o = this.stoppedAt != null && s[0].pos > this.stoppedAt ? s[0] : this.runRecovery(s, r, n);
      if (o)
        return rt && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
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
    let s = e.pos, { parser: r } = this, o = rt ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && s > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let c = e.curContext && e.curContext.tracker.strict, h = c ? e.curContext.hash : 0;
      for (let u = this.fragments.nodeAt(s); u; ) {
        let f = this.parser.nodeSet.types[u.type.id] == u.type ? r.getGoto(e.state, u.type.id) : -1;
        if (f > -1 && u.length && (!c || (u.prop(K.contextHash) || 0) == h))
          return e.useNode(u, f), rt && console.log(o + this.stackID(e) + ` (via reuse of ${r.getName(u.type.id)})`), !0;
        if (!(u instanceof Ce) || u.children.length == 0 || u.positions[0] > 0)
          break;
        let d = u.children[0];
        if (d instanceof Ce && u.positions[0] == 0)
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
      return e.reduce(l), rt && console.log(o + this.stackID(e) + ` (via always-reduce ${r.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let c = 0; c < a.length; ) {
      let h = a[c++], u = a[c++], f = a[c++], d = c == a.length || !n, p = d ? e : e.split(), g = this.tokens.mainToken;
      if (p.apply(h, u, g ? g.start : p.pos, f), rt && console.log(o + this.stackID(p) + ` (via ${h & 65536 ? `reduce of ${r.getName(
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
        return Ju(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let s = null, r = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], c = t[(o << 1) + 1], h = rt ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = !0, l.restart(), rt && console.log(h + this.stackID(l) + " (restarted)"), this.advanceFully(l, n))))
        continue;
      let u = l.split(), f = h;
      for (let d = 0; u.forceReduce() && d < 10 && (rt && console.log(f + this.stackID(u) + " (via force-reduce)"), !this.advanceFully(u, n)); d++)
        rt && (f = this.stackID(u) + " -> ");
      for (let d of l.recoverByInsert(a))
        rt && console.log(h + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, n);
      this.stream.end > l.pos ? (c == l.pos && (c++, a = 0), l.recoverByDelete(a, c), rt && console.log(h + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), Ju(l, n)) : (!s || s.score < l.score) && (s = l);
    }
    return s;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), Ce.build({
      buffer: Yr.create(e),
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
    let t = (nl || (nl = /* @__PURE__ */ new WeakMap())).get(e);
    return t || nl.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function Ju(i, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == i.pos && n.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class TQ {
  constructor(e, t, n) {
    this.source = e, this.flags = t, this.disabled = n;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const sl = (i) => i;
class Mg {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || sl, this.reduce = e.reduce || sl, this.reuse = e.reuse || sl, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class ps extends Hp {
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
        typeof a == "string" && (a = K[a]);
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
    this.nodeSet = new Ha(t.map((l, a) => nt.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: s[a],
      top: n.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = Up;
    let o = Bn(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(ef), this.states = Bn(e.states, Uint32Array), this.data = Bn(e.stateData), this.goto = Bn(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new sn(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, n) {
    let s = new ZQ(this, e, t, n);
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
            o = n[r = zt(n, r + 2)];
          else {
            if (n[r + 1] == 2)
              return zt(n, r + 2);
            break;
          }
        if (o == t || o == 0)
          return zt(n, r + 1);
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
          r = zt(this.data, r + 2);
        else
          break;
      s = t(zt(this.data, r + 1));
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
          n = zt(this.data, n + 2);
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
    let t = Object.assign(Object.create(ps.prototype), this);
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
      return t.specializers[s] = ef(o), o;
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
    return new TQ(e, n, s);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new ps(e);
  }
}
function zt(i, e) {
  return i[e] | i[e + 1] << 16;
}
function AQ(i) {
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
function ef(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, n) => i.external(t, n) << 1 | e;
  }
  return i.get;
}
const MQ = 314, RQ = 315, tf = 1, _Q = 2, XQ = 3, EQ = 4, LQ = 316, DQ = 318, jQ = 319, BQ = 5, VQ = 6, qQ = 0, ga = [
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
], Rg = 125, WQ = 59, ma = 47, IQ = 42, zQ = 43, NQ = 45, UQ = 60, YQ = 44, GQ = 63, FQ = 46, HQ = 91, KQ = new Mg({
  start: !1,
  shift(i, e) {
    return e == BQ || e == VQ || e == DQ ? i : e == jQ;
  },
  strict: !1
}), JQ = new Jt((i, e) => {
  let { next: t } = i;
  (t == Rg || t == -1 || e.context) && i.acceptToken(LQ);
}, { contextual: !0, fallback: !0 }), ek = new Jt((i, e) => {
  let { next: t } = i, n;
  ga.indexOf(t) > -1 || t == ma && ((n = i.peek(1)) == ma || n == IQ) || t != Rg && t != WQ && t != -1 && !e.context && i.acceptToken(MQ);
}, { contextual: !0 }), tk = new Jt((i, e) => {
  i.next == HQ && !e.context && i.acceptToken(RQ);
}, { contextual: !0 }), ik = new Jt((i, e) => {
  let { next: t } = i;
  if (t == zQ || t == NQ) {
    if (i.advance(), t == i.next) {
      i.advance();
      let n = !e.context && e.canShift(tf);
      i.acceptToken(n ? tf : _Q);
    }
  } else t == GQ && i.peek(1) == FQ && (i.advance(), i.advance(), (i.next < 48 || i.next > 57) && i.acceptToken(XQ));
}, { contextual: !0 });
function rl(i, e) {
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i == 95 || i >= 192 || !e && i >= 48 && i <= 57;
}
const nk = new Jt((i, e) => {
  if (i.next != UQ || !e.dialectEnabled(qQ) || (i.advance(), i.next == ma)) return;
  let t = 0;
  for (; ga.indexOf(i.next) > -1; )
    i.advance(), t++;
  if (rl(i.next, !0)) {
    for (i.advance(), t++; rl(i.next, !1); )
      i.advance(), t++;
    for (; ga.indexOf(i.next) > -1; )
      i.advance(), t++;
    if (i.next == YQ) return;
    for (let n = 0; ; n++) {
      if (n == 7) {
        if (!rl(i.next, !0)) return;
        break;
      }
      if (i.next != "extends".charCodeAt(n)) break;
      i.advance(), t++;
    }
  }
  i.acceptToken(EQ, -t);
}), sk = tc({
  "get set async static": y.modifier,
  "for while do if else switch try catch finally return throw break continue default case": y.controlKeyword,
  "in of await yield void typeof delete instanceof": y.operatorKeyword,
  "let var const using function class extends": y.definitionKeyword,
  "import export from": y.moduleKeyword,
  "with debugger as new": y.keyword,
  TemplateString: y.special(y.string),
  super: y.atom,
  BooleanLiteral: y.bool,
  this: y.self,
  null: y.null,
  Star: y.modifier,
  VariableName: y.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": y.function(y.variableName),
  VariableDefinition: y.definition(y.variableName),
  Label: y.labelName,
  PropertyName: y.propertyName,
  PrivatePropertyName: y.special(y.propertyName),
  "CallExpression/MemberExpression/PropertyName": y.function(y.propertyName),
  "FunctionDeclaration/VariableDefinition": y.function(y.definition(y.variableName)),
  "ClassDeclaration/VariableDefinition": y.definition(y.className),
  "NewExpression/VariableName": y.className,
  PropertyDefinition: y.definition(y.propertyName),
  PrivatePropertyDefinition: y.definition(y.special(y.propertyName)),
  UpdateOp: y.updateOperator,
  "LineComment Hashbang": y.lineComment,
  BlockComment: y.blockComment,
  Number: y.number,
  String: y.string,
  Escape: y.escape,
  ArithOp: y.arithmeticOperator,
  LogicOp: y.logicOperator,
  BitOp: y.bitwiseOperator,
  CompareOp: y.compareOperator,
  RegExp: y.regexp,
  Equals: y.definitionOperator,
  Arrow: y.function(y.punctuation),
  ": Spread": y.punctuation,
  "( )": y.paren,
  "[ ]": y.squareBracket,
  "{ }": y.brace,
  "InterpolationStart InterpolationEnd": y.special(y.brace),
  ".": y.derefOperator,
  ", ;": y.separator,
  "@": y.meta,
  TypeName: y.typeName,
  TypeDefinition: y.definition(y.typeName),
  "type enum interface implements namespace module declare": y.definitionKeyword,
  "abstract global Privacy readonly override": y.modifier,
  "is keyof unique infer asserts": y.operatorKeyword,
  JSXAttributeValue: y.attributeValue,
  JSXText: y.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": y.angleBracket,
  "JSXIdentifier JSXNameSpacedName": y.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": y.attributeName,
  "JSXBuiltin/JSXIdentifier": y.standard(y.tagName)
}), rk = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, const: 52, extends: 56, this: 60, true: 68, false: 68, null: 80, void: 84, typeof: 88, super: 104, new: 138, delete: 150, yield: 159, await: 163, class: 168, public: 231, private: 231, protected: 231, readonly: 233, instanceof: 252, satisfies: 255, in: 256, import: 290, keyof: 347, unique: 351, infer: 357, asserts: 393, is: 395, abstract: 415, implements: 417, type: 419, let: 422, var: 424, using: 427, interface: 433, enum: 437, namespace: 443, module: 445, declare: 449, global: 453, for: 472, of: 481, while: 484, with: 488, do: 492, if: 496, else: 498, switch: 502, case: 508, try: 514, catch: 518, finally: 522, return: 526, throw: 530, break: 534, continue: 538, debugger: 542 }, ok = { __proto__: null, async: 125, get: 127, set: 129, declare: 191, public: 193, private: 193, protected: 193, static: 195, abstract: 197, override: 199, readonly: 205, accessor: 207, new: 399 }, lk = { __proto__: null, "<": 189 }, ak = ps.deserialize({
  version: 14,
  states: "$EOQ%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#D_O.QQlO'#DeO.bQlO'#DpO%[QlO'#DxO0fQlO'#EQOOQ!0Lf'#EY'#EYO1PQ`O'#EVOOQO'#En'#EnOOQO'#Ij'#IjO1XQ`O'#GrO1dQ`O'#EmO1iQ`O'#EmO3hQ!0MxO'#JpO6[Q!0MxO'#JqO6uQ`O'#F[O6zQ,UO'#FsOOQ!0Lf'#Fe'#FeO7VO7dO'#FeO7eQMhO'#F{O9UQ`O'#FzOOQ!0Lf'#Jq'#JqOOQ!0Lb'#Jp'#JpO9ZQ`O'#GvOOQ['#K]'#K]O9fQ`O'#IWO9kQ!0LrO'#IXOOQ['#J^'#J^OOQ['#I]'#I]Q`QlOOQ`QlOOO9sQ!L^O'#DtO9zQlO'#D|O:RQlO'#EOO9aQ`O'#GrO:YQMhO'#CoO:hQ`O'#ElO:sQ`O'#EwO:xQMhO'#FdO;gQ`O'#GrOOQO'#K^'#K^O;lQ`O'#K^O;zQ`O'#GzO;zQ`O'#G{O;zQ`O'#G}O9aQ`O'#HQO<qQ`O'#HTO>YQ`O'#CeO>jQ`O'#HaO>rQ`O'#HgO>rQ`O'#HiO`QlO'#HkO>rQ`O'#HmO>rQ`O'#HpO>wQ`O'#HvO>|Q!0LsO'#H|O%[QlO'#IOO?XQ!0LsO'#IQO?dQ!0LsO'#ISO9kQ!0LrO'#IUO?oQ!0MxO'#CiO@qQpO'#DjQOQ`OOO%[QlO'#EOOAXQ`O'#ERO:YQMhO'#ElOAdQ`O'#ElOAoQ!bO'#FdOOQ['#Cg'#CgOOQ!0Lb'#Do'#DoOOQ!0Lb'#Jt'#JtO%[QlO'#JtOOQO'#Jw'#JwOOQO'#If'#IfOBoQpO'#EeOOQ!0Lb'#Ed'#EdOOQ!0Lb'#J{'#J{OCkQ!0MSO'#EeOCuQpO'#EUOOQO'#Jv'#JvODZQpO'#JwOEhQpO'#EUOCuQpO'#EePEuO&2DjO'#CbPOOO)CD{)CD{OOOO'#I^'#I^OFQO#tO,59UOOQ!0Lh,59U,59UOOOO'#I_'#I_OF`O&jO,59UOFnQ!L^O'#DaOOOO'#Ia'#IaOFuO#@ItO,59yOOQ!0Lf,59y,59yOGTQlO'#IbOGhQ`O'#JrOIgQ!fO'#JrO+}QlO'#JrOInQ`O,5:POJUQ`O'#EnOJcQ`O'#KROJnQ`O'#KQOJnQ`O'#KQOJvQ`O,5;[OJ{Q`O'#KPOOQ!0Ln,5:[,5:[OKSQlO,5:[OMQQ!0MxO,5:dOMqQ`O,5:lON[Q!0LrO'#KOONcQ`O'#J}O9ZQ`O'#J}ONwQ`O'#J}O! PQ`O,5;ZO! UQ`O'#J}O!#ZQ!fO'#JqOOQ!0Lh'#Ci'#CiO%[QlO'#EQO!#yQ!fO,5:qOOQS'#Jx'#JxOOQO-E<h-E<hO9aQ`O,5=^O!$aQ`O,5=^O!$fQlO,5;XO!&iQMhO'#EiO!(SQ`O,5;XO!(XQlO'#DwO!(cQpO,5;bO!(kQpO,5;bO%[QlO,5;bOOQ['#FS'#FSOOQ['#FU'#FUO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cOOQ['#FY'#FYO!(yQlO,5;sOOQ!0Lf,5;x,5;xOOQ!0Lf,5;y,5;yOOQ!0Lf,5;{,5;{O%[QlO'#InO!*|Q!0LrO,5<hO%[QlO,5;cO!&iQMhO,5;cO!+kQMhO,5;cO!-]QMhO'#E[O%[QlO,5;vOOQ!0Lf,5;z,5;zO!-dQ,UO'#FiO!.aQ,UO'#KVO!-{Q,UO'#KVO!.hQ,UO'#KVOOQO'#KV'#KVO!.|Q,UO,5<ROOOW,5<_,5<_O!/_QlO'#FuOOOW'#Im'#ImO7VO7dO,5<PO!/fQ,UO'#FwOOQ!0Lf,5<P,5<PO!0VQ$IUO'#CwOOQ!0Lh'#C{'#C{O!0jO#@ItO'#DPO!1WQMjO,5<dO!1_Q`O,5<gO!2zQ(CWO'#GWO!3XQ`O'#GXO!3^Q`O'#GXO!4|Q(CWO'#G]O!6RQpO'#GaOOQO'#Gm'#GmO!+rQMhO'#GlOOQO'#Go'#GoO!+rQMhO'#GnO!6tQ$IUO'#JjOOQ!0Lh'#Jj'#JjO!7OQ`O'#JiO!7^Q`O'#JhO!7fQ`O'#CuOOQ!0Lh'#Cy'#CyO!7qQ`O'#C{OOQ!0Lh'#DT'#DTOOQ!0Lh'#DV'#DVO1SQ`O'#DXO!+rQMhO'#GOO!+rQMhO'#GQO!7vQ`O'#GSO!7{Q`O'#GTO!3^Q`O'#GZO!+rQMhO'#G`O;zQ`O'#JiO!8QQ`O'#EoO!8oQ`O,5<fOOQ!0Lb'#Cr'#CrO!8wQ`O'#EpO!9qQpO'#EqOOQ!0Lb'#KP'#KPO!9xQ!0LrO'#K_O9kQ!0LrO,5=bO`QlO,5>rOOQ['#Jf'#JfOOQ[,5>s,5>sOOQ[-E<Z-E<ZO!;wQ!0MxO,5:`O!9lQpO,5:^O!>bQ!0MxO,5:hO%[QlO,5:hO!@xQ!0MxO,5:jOOQO,5@x,5@xO!AiQMhO,5=^O!AwQ!0LrO'#JgO9UQ`O'#JgO!BYQ!0LrO,59ZO!BeQpO,59ZO!BmQMhO,59ZO:YQMhO,59ZO!BxQ`O,5;XO!CQQ`O'#H`O!CfQ`O'#KbO%[QlO,5;|O!9lQpO,5<OO!CnQ`O,5=yO!CsQ`O,5=yO!CxQ`O,5=yO9kQ!0LrO,5=yO;zQ`O,5=iOOQO'#Cw'#CwO!DWQpO,5=fO!D`QMhO,5=gO!DkQ`O,5=iO!DpQ!bO,5=lO!DxQ`O'#K^O>wQ`O'#HVO9aQ`O'#HXO!D}Q`O'#HXO:YQMhO'#HZO!ESQ`O'#HZOOQ[,5=o,5=oO!EXQ`O'#H[O!EjQ`O'#CoO!EoQ`O,59PO!EyQ`O,59PO!HOQlO,59POOQ[,59P,59PO!H`Q!0LrO,59PO%[QlO,59PO!JkQlO'#HcOOQ['#Hd'#HdOOQ['#He'#HeO`QlO,5={O!KRQ`O,5={O`QlO,5>RO`QlO,5>TO!KWQ`O,5>VO`QlO,5>XO!K]Q`O,5>[O!KbQlO,5>bOOQ[,5>h,5>hO%[QlO,5>hO9kQ!0LrO,5>jOOQ[,5>l,5>lO# lQ`O,5>lOOQ[,5>n,5>nO# lQ`O,5>nOOQ[,5>p,5>pO#!YQpO'#D]O%[QlO'#JtO#!{QpO'#JtO##VQpO'#DkO##hQpO'#DkO#%yQlO'#DkO#&QQ`O'#JsO#&YQ`O,5:UO#&_Q`O'#ErO#&mQ`O'#KSO#&uQ`O,5;]O#&zQpO'#DkO#'XQpO'#ETOOQ!0Lf,5:m,5:mO%[QlO,5:mO#'`Q`O,5:mO>wQ`O,5;WO!BeQpO,5;WO!BmQMhO,5;WO:YQMhO,5;WO#'hQ`O,5@`O#'mQ07dO,5:qOOQO-E<d-E<dO#(sQ!0MSO,5;POCuQpO,5:pO#(}QpO,5:pOCuQpO,5;PO!BYQ!0LrO,5:pOOQ!0Lb'#Eh'#EhOOQO,5;P,5;PO%[QlO,5;PO#)[Q!0LrO,5;PO#)gQ!0LrO,5;PO!BeQpO,5:pOOQO,5;V,5;VO#)uQ!0LrO,5;PPOOO'#I['#I[P#*ZO&2DjO,58|POOO,58|,58|OOOO-E<[-E<[OOQ!0Lh1G.p1G.pOOOO-E<]-E<]OOOO,59{,59{O#*fQ!bO,59{OOOO-E<_-E<_OOQ!0Lf1G/e1G/eO#*kQ!fO,5>|O+}QlO,5>|OOQO,5?S,5?SO#*uQlO'#IbOOQO-E<`-E<`O#+SQ`O,5@^O#+[Q!fO,5@^O#+cQ`O,5@lOOQ!0Lf1G/k1G/kO%[QlO,5@mO#+kQ`O'#IhOOQO-E<f-E<fO#+cQ`O,5@lOOQ!0Lb1G0v1G0vOOQ!0Ln1G/v1G/vOOQ!0Ln1G0W1G0WO%[QlO,5@jO#,PQ!0LrO,5@jO#,bQ!0LrO,5@jO#,iQ`O,5@iO9ZQ`O,5@iO#,qQ`O,5@iO#-PQ`O'#IkO#,iQ`O,5@iOOQ!0Lb1G0u1G0uO!(cQpO,5:sO!(nQpO,5:sOOQS,5:u,5:uO#-qQdO,5:uO#-yQMhO1G2xO9aQ`O1G2xOOQ!0Lf1G0s1G0sO#.XQ!0MxO1G0sO#/^Q!0MvO,5;TOOQ!0Lh'#GV'#GVO#/zQ!0MzO'#JjO!$fQlO1G0sO#2VQ!fO'#JuO%[QlO'#JuO#2aQ`O,5:cOOQ!0Lh'#D]'#D]OOQ!0Lf1G0|1G0|O%[QlO1G0|OOQ!0Lf1G1e1G1eO#2fQ`O1G0|O#4zQ!0MxO1G0}O#5RQ!0MxO1G0}O#7iQ!0MxO1G0}O#7pQ!0MxO1G0}O#:WQ!0MxO1G0}O#<nQ!0MxO1G0}O#<uQ!0MxO1G0}O#<|Q!0MxO1G0}O#?dQ!0MxO1G0}O#?kQ!0MxO1G0}O#AxQ?MtO'#CiO#CsQ?MtO1G1_O#CzQ?MtO'#JqO#D_Q!0MxO,5?YOOQ!0Lb-E<l-E<lO#FlQ!0MxO1G0}O#GiQ!0MzO1G0}OOQ!0Lf1G0}1G0}O#HlQMjO'#JzO#HvQ`O,5:vO#H{Q!0MxO1G1bO#IoQ,UO,5<VO#IwQ,UO,5<WO#JPQ,UO'#FnO#JhQ`O'#FmOOQO'#KW'#KWOOQO'#Il'#IlO#JmQ,UO1G1mOOQ!0Lf1G1m1G1mOOOW1G1x1G1xO#KOQ?MtO'#JpO#KYQ`O,5<aO!(yQlO,5<aOOOW-E<k-E<kOOQ!0Lf1G1k1G1kO#K_QpO'#KVOOQ!0Lf,5<c,5<cO#KgQpO,5<cO#KlQMhO'#DROOOO'#I`'#I`O#KsO#@ItO,59kOOQ!0Lh,59k,59kO%[QlO1G2OO!7{Q`O'#IpO#LOQ`O,5<yOOQ!0Lh,5<v,5<vO!+rQMhO'#IsO#LlQMjO,5=WO!+rQMhO'#IuO#M_QMjO,5=YO!&iQMhO,5=[OOQO1G2R1G2RO#MiQ!dO'#CrO#M|Q(CWO'#EpO$ RQpO'#GaO$ iQ!dO,5<rO$ pQ`O'#KYO9ZQ`O'#KYO$!OQ`O,5<tO!+rQMhO,5<sO$!TQ`O'#GYO$!fQ`O,5<sO$!kQ!dO'#GVO$!xQ!dO'#KZO$#SQ`O'#KZO!&iQMhO'#KZO$#XQ`O,5<wO$#^QlO'#JtO$#hQpO'#GbO##hQpO'#GbO$#yQ`O'#GfO!3^Q`O'#GjO$$OQ!0LrO'#IrO$$ZQpO,5<{OOQ!0Lp,5<{,5<{O$$bQpO'#GbO$$oQpO'#GcO$%QQpO'#GcO$%VQMjO,5=WO$%gQMjO,5=YOOQ!0Lh,5=],5=]O!+rQMhO,5@TO!+rQMhO,5@TO$%wQ`O'#IwO$&VQ`O,5@SO$&_Q`O,59aOOQ!0Lh,59g,59gO$'UQ$IYO,59sOOQ!0Lh'#Jn'#JnO$'wQMjO,5<jO$(jQMjO,5<lO@iQ`O,5<nOOQ!0Lh,5<o,5<oO$(tQ`O,5<uO$(yQMjO,5<zO$)ZQ`O,5@TO$)iQ`O'#J}O!$fQlO1G2QO$)nQ`O1G2QO9ZQ`O'#KQO9ZQ`O'#ErO%[QlO'#ErO9ZQ`O'#IyO$)sQ!0LrO,5@yOOQ[1G2|1G2|OOQ[1G4^1G4^OOQ!0Lf1G/z1G/zOOQ!0Lf1G/x1G/xO$+uQ!0MxO1G0SOOQ[1G2x1G2xO!&iQMhO1G2xO%[QlO1G2xO#-|Q`O1G2xO$-yQMhO'#EiOOQ!0Lb,5@R,5@RO$.WQ!0LrO,5@ROOQ[1G.u1G.uO!BYQ!0LrO1G.uO!BeQpO1G.uO!BmQMhO1G.uO$.iQ`O1G0sO$.nQ`O'#CiO$.yQ`O'#KcO$/RQ`O,5=zO$/WQ`O'#KcO$/]Q`O'#KcO$/kQ`O'#JPO$/yQ`O,5@|O$0RQ!fO1G1hOOQ!0Lf1G1j1G1jO9aQ`O1G3eO@iQ`O1G3eO$0YQ`O1G3eO$0_Q`O1G3eOOQ[1G3e1G3eO!DkQ`O1G3TO!&iQMhO1G3QO$0dQ`O1G3QOOQ[1G3R1G3RO!&iQMhO1G3RO$0iQ`O1G3RO$0qQpO'#HPOOQ[1G3T1G3TO!5|QpO'#I{O!DpQ!bO1G3WOOQ[1G3W1G3WOOQ[,5=q,5=qO$0yQMhO,5=sO9aQ`O,5=sO$#yQ`O,5=uO9UQ`O,5=uO!BeQpO,5=uO!BmQMhO,5=uO:YQMhO,5=uO$1XQ`O'#KaO$1dQ`O,5=vOOQ[1G.k1G.kO$1iQ!0LrO1G.kO@iQ`O1G.kO$1tQ`O1G.kO9kQ!0LrO1G.kO$3|Q!fO,5AOO$4ZQ`O,5AOO9ZQ`O,5AOO$4fQlO,5=}O$4mQ`O,5=}OOQ[1G3g1G3gO`QlO1G3gOOQ[1G3m1G3mOOQ[1G3o1G3oO>rQ`O1G3qO$4rQlO1G3sO$8vQlO'#HrOOQ[1G3v1G3vO$9TQ`O'#HxO>wQ`O'#HzOOQ[1G3|1G3|O$9]QlO1G3|O9kQ!0LrO1G4SOOQ[1G4U1G4UOOQ!0Lb'#G^'#G^O9kQ!0LrO1G4WO9kQ!0LrO1G4YO$=dQ`O,5@`O!(yQlO,5;^O9ZQ`O,5;^O>wQ`O,5:VO!(yQlO,5:VO!BeQpO,5:VO$=iQ?MtO,5:VOOQO,5;^,5;^O$=sQpO'#IcO$>ZQ`O,5@_OOQ!0Lf1G/p1G/pO$>cQpO'#IiO$>mQ`O,5@nOOQ!0Lb1G0w1G0wO##hQpO,5:VOOQO'#Ie'#IeO$>uQpO,5:oOOQ!0Ln,5:o,5:oO#'cQ`O1G0XOOQ!0Lf1G0X1G0XO%[QlO1G0XOOQ!0Lf1G0r1G0rO>wQ`O1G0rO!BeQpO1G0rO!BmQMhO1G0rOOQ!0Lb1G5z1G5zO!BYQ!0LrO1G0[OOQO1G0k1G0kO%[QlO1G0kO$>|Q!0LrO1G0kO$?XQ!0LrO1G0kO!BeQpO1G0[OCuQpO1G0[O$?gQ!0LrO1G0kOOQO1G0[1G0[O$?{Q!0MxO1G0kPOOO-E<Y-E<YPOOO1G.h1G.hOOOO1G/g1G/gO$@VQ!bO,5<hO$@_Q!fO1G4hOOQO1G4n1G4nO%[QlO,5>|O$@iQ`O1G5xO$@qQ`O1G6WO$@yQ!fO1G6XO9ZQ`O,5?SO$ATQ!0MxO1G6UO%[QlO1G6UO$AeQ!0LrO1G6UO$AvQ`O1G6TO$AvQ`O1G6TO9ZQ`O1G6TO$BOQ`O,5?VO9ZQ`O,5?VOOQO,5?V,5?VO$BdQ`O,5?VO$)iQ`O,5?VOOQO-E<i-E<iOOQS1G0_1G0_OOQS1G0a1G0aO#-tQ`O1G0aOOQ[7+(d7+(dO!&iQMhO7+(dO%[QlO7+(dO$BrQ`O7+(dO$B}QMhO7+(dO$C]Q!0MzO,5=WO$EhQ!0MzO,5=YO$GsQ!0MzO,5=WO$JUQ!0MzO,5=YO$LgQ!0MzO,59sO$NlQ!0MzO,5<jO%!wQ!0MzO,5<lO%%SQ!0MzO,5<zOOQ!0Lf7+&_7+&_O%'eQ!0MxO7+&_O%(XQlO'#IdO%(fQ`O,5@aO%(nQ!fO,5@aOOQ!0Lf1G/}1G/}O%(xQ`O7+&hOOQ!0Lf7+&h7+&hO%(}Q?MtO,5:dO%[QlO7+&yO%)XQ?MtO,5:`O%)fQ?MtO,5:hO%)pQ?MtO,5:jO%)zQMhO'#IgO%*UQ`O,5@fOOQ!0Lh1G0b1G0bOOQO1G1q1G1qOOQO1G1r1G1rO%*^Q!jO,5<YO!(yQlO,5<XOOQO-E<j-E<jOOQ!0Lf7+'X7+'XOOOW7+'d7+'dOOOW1G1{1G1{O%*iQ`O1G1{OOQ!0Lf1G1}1G1}OOOO,59m,59mO%*nQ!dO,59mOOOO-E<^-E<^OOQ!0Lh1G/V1G/VO%*uQ!0MxO7+'jOOQ!0Lh,5?[,5?[O%+iQMhO1G2eP%+pQ`O'#IpPOQ!0Lh-E<n-E<nO%,^QMjO,5?_OOQ!0Lh-E<q-E<qO%-PQMjO,5?aOOQ!0Lh-E<s-E<sO%-ZQ!dO1G2vO%-bQ!dO'#CrO%-xQMhO'#KQO$#^QlO'#JtOOQ!0Lh1G2^1G2^O%.PQ`O'#IoO%.eQ`O,5@tO%.eQ`O,5@tO%.mQ`O,5@tO%.xQ`O,5@tOOQO1G2`1G2`O%/WQMjO1G2_O!+rQMhO1G2_O%/hQ(CWO'#IqO%/uQ`O,5@uO!&iQMhO,5@uO%/}Q!dO,5@uOOQ!0Lh1G2c1G2cO%2_Q!fO'#CiO%2iQ`O,5=OOOQ!0Lb,5<|,5<|O%2qQpO,5<|OOQ!0Lb,5<},5<}OCfQ`O,5<|O%2|QpO,5<|OOQ!0Lb,5=Q,5=QO$)iQ`O,5=UOOQO,5?^,5?^OOQO-E<p-E<pOOQ!0Lp1G2g1G2gO##hQpO,5<|O$#^QlO,5=OO%3[Q`O,5<}O%3gQpO,5<}O!+rQMhO'#IsO%4aQMjO1G2rO!+rQMhO'#IuO%5SQMjO1G2tO%5^QMjO1G5oO%5hQMjO1G5oOOQO,5?c,5?cOOQO-E<u-E<uOOQO1G.{1G.{O!9lQpO,59uO%[QlO,59uOOQ!0Lh,5<i,5<iO%5uQ`O1G2YO!+rQMhO1G2aO!+rQMhO1G5oO!+rQMhO1G5oO%5zQ!0MxO7+'lOOQ!0Lf7+'l7+'lO!$fQlO7+'lO%6nQ`O,5;^OOQ!0Lb,5?e,5?eOOQ!0Lb-E<w-E<wO%6sQ!dO'#K[O#'cQ`O7+(dO4UQ!fO7+(dO$BuQ`O7+(dO%6}Q!0MvO'#CiO%7nQ!0LrO,5=RO%8PQ!0MvO,5=RO%8dQ`O,5=ROOQ!0Lb1G5m1G5mOOQ[7+$a7+$aO!BYQ!0LrO7+$aO!BeQpO7+$aO!$fQlO7+&_O%8lQ`O'#JOO%9TQ`O,5@}OOQO1G3f1G3fO9aQ`O,5@}O%9TQ`O,5@}O%9]Q`O,5@}OOQO,5?k,5?kOOQO-E<}-E<}OOQ!0Lf7+'S7+'SO%9bQ`O7+)PO9kQ!0LrO7+)PO9aQ`O7+)PO@iQ`O7+)POOQ[7+(o7+(oO%9gQ!0MvO7+(lO!&iQMhO7+(lO!DfQ`O7+(mOOQ[7+(m7+(mO!&iQMhO7+(mO%9qQ`O'#K`O%9|Q`O,5=kOOQO,5?g,5?gOOQO-E<y-E<yOOQ[7+(r7+(rO%;`QpO'#HYOOQ[1G3_1G3_O!&iQMhO1G3_O%[QlO1G3_O%;gQ`O1G3_O%;rQMhO1G3_O9kQ!0LrO1G3aO$#yQ`O1G3aO9UQ`O1G3aO!BeQpO1G3aO!BmQMhO1G3aO%<QQ`O'#I}O%<fQ`O,5@{O%<nQpO,5@{OOQ!0Lb1G3b1G3bOOQ[7+$V7+$VO@iQ`O7+$VO9kQ!0LrO7+$VO%<yQ`O7+$VO%[QlO1G6jO%[QlO1G6kO%=OQ!0LrO1G6jO%=YQlO1G3iO%=aQ`O1G3iO%=fQlO1G3iOOQ[7+)R7+)RO9kQ!0LrO7+)]O`QlO7+)_OOQ['#Kf'#KfOOQ['#JQ'#JQO%=mQlO,5>^OOQ[,5>^,5>^O%[QlO'#HsO%=zQ`O'#HuOOQ[,5>d,5>dO9ZQ`O,5>dOOQ[,5>f,5>fOOQ[7+)h7+)hOOQ[7+)n7+)nOOQ[7+)r7+)rOOQ[7+)t7+)tO%>PQpO1G5zO%>kQ?MtO1G0xO%>uQ`O1G0xOOQO1G/q1G/qO%?QQ?MtO1G/qO>wQ`O1G/qO!(yQlO'#DkOOQO,5>},5>}OOQO-E<a-E<aOOQO,5?T,5?TOOQO-E<g-E<gO!BeQpO1G/qOOQO-E<c-E<cOOQ!0Ln1G0Z1G0ZOOQ!0Lf7+%s7+%sO#'cQ`O7+%sOOQ!0Lf7+&^7+&^O>wQ`O7+&^O!BeQpO7+&^OOQO7+%v7+%vO$?{Q!0MxO7+&VOOQO7+&V7+&VO%[QlO7+&VO%?[Q!0LrO7+&VO!BYQ!0LrO7+%vO!BeQpO7+%vO%?gQ!0LrO7+&VO%?uQ!0MxO7++pO%[QlO7++pO%@VQ`O7++oO%@VQ`O7++oOOQO1G4q1G4qO9ZQ`O1G4qO%@_Q`O1G4qOOQS7+%{7+%{O#'cQ`O<<LOO4UQ!fO<<LOO%@mQ`O<<LOOOQ[<<LO<<LOO!&iQMhO<<LOO%[QlO<<LOO%@uQ`O<<LOO%AQQ!0MzO,5?_O%C]Q!0MzO,5?aO%EhQ!0MzO1G2_O%GyQ!0MzO1G2rO%JUQ!0MzO1G2tO%LaQ!fO,5?OO%[QlO,5?OOOQO-E<b-E<bO%LkQ`O1G5{OOQ!0Lf<<JS<<JSO%LsQ?MtO1G0sO%NzQ?MtO1G0}O& RQ?MtO1G0}O&#SQ?MtO1G0}O&#ZQ?MtO1G0}O&%[Q?MtO1G0}O&']Q?MtO1G0}O&'dQ?MtO1G0}O&'kQ?MtO1G0}O&)lQ?MtO1G0}O&)sQ?MtO1G0}O&)zQ!0MxO<<JeO&+rQ?MtO1G0}O&,oQ?MvO1G0}O&-rQ?MvO'#JjO&/xQ?MtO1G1bO&0VQ?MtO1G0SO&0aQMjO,5?ROOQO-E<e-E<eO!(yQlO'#FpOOQO'#KX'#KXOOQO1G1t1G1tO&0kQ`O1G1sO&0pQ?MtO,5?YOOOW7+'g7+'gOOOO1G/X1G/XO&0zQ!dO1G4vOOQ!0Lh7+(P7+(PP!&iQMhO,5?[O!+rQMhO7+(bO&1RQ`O,5?ZO9ZQ`O,5?ZOOQO-E<m-E<mO&1aQ`O1G6`O&1aQ`O1G6`O&1iQ`O1G6`O&1tQMjO7+'yO&2UQ!dO,5?]O&2`Q`O,5?]O!&iQMhO,5?]OOQO-E<o-E<oO&2eQ!dO1G6aO&2oQ`O1G6aO&2wQ`O1G2jO!&iQMhO1G2jOOQ!0Lb1G2h1G2hOOQ!0Lb1G2i1G2iO%2qQpO1G2hO!BeQpO1G2hOCfQ`O1G2hOOQ!0Lb1G2p1G2pO&2|QpO1G2hO&3[Q`O1G2jO$)iQ`O1G2iOCfQ`O1G2iO$#^QlO1G2jO&3dQ`O1G2iO&4WQMjO,5?_OOQ!0Lh-E<r-E<rO&4yQMjO,5?aOOQ!0Lh-E<t-E<tO!+rQMhO7++ZOOQ!0Lh1G/a1G/aO&5TQ`O1G/aOOQ!0Lh7+'t7+'tO&5YQMjO7+'{O&5jQMjO7++ZO&5tQMjO7++ZO&6RQ!0MxO<<KWOOQ!0Lf<<KW<<KWO&6uQ`O1G0xO!&iQMhO'#IxO&6zQ`O,5@vO&8|Q!fO<<LOO!&iQMhO1G2mO&9TQ!0LrO1G2mOOQ[<<G{<<G{O!BYQ!0LrO<<G{O&9fQ!0MxO<<IyOOQ!0Lf<<Iy<<IyOOQO,5?j,5?jO&:YQ`O,5?jO&:_Q`O,5?jOOQO-E<|-E<|O&:mQ`O1G6iO&:mQ`O1G6iO9aQ`O1G6iO@iQ`O<<LkOOQ[<<Lk<<LkO&:uQ`O<<LkO9kQ!0LrO<<LkOOQ[<<LW<<LWO%9gQ!0MvO<<LWOOQ[<<LX<<LXO!DfQ`O<<LXO&:zQpO'#IzO&;VQ`O,5@zO!(yQlO,5@zOOQ[1G3V1G3VOOQO'#I|'#I|O9kQ!0LrO'#I|O&;_QpO,5=tOOQ[,5=t,5=tO&;fQpO'#EeO&;mQpO'#GdO&;rQ`O7+(yO&;wQ`O7+(yOOQ[7+(y7+(yO!&iQMhO7+(yO%[QlO7+(yO&<PQ`O7+(yOOQ[7+({7+({O9kQ!0LrO7+({O$#yQ`O7+({O9UQ`O7+({O!BeQpO7+({O&<[Q`O,5?iOOQO-E<{-E<{OOQO'#H]'#H]O&<gQ`O1G6gO9kQ!0LrO<<GqOOQ[<<Gq<<GqO@iQ`O<<GqO&<oQ`O7+,UO&<tQ`O7+,VO%[QlO7+,UO%[QlO7+,VOOQ[7+)T7+)TO&<yQ`O7+)TO&=OQlO7+)TO&=VQ`O7+)TOOQ[<<Lw<<LwOOQ[<<Ly<<LyOOQ[-E=O-E=OOOQ[1G3x1G3xO&=[Q`O,5>_OOQ[,5>a,5>aO&=aQ`O1G4OO9ZQ`O7+&dO!(yQlO7+&dOOQO7+%]7+%]O&=fQ?MtO1G6XO>wQ`O7+%]OOQ!0Lf<<I_<<I_OOQ!0Lf<<Ix<<IxO>wQ`O<<IxOOQO<<Iq<<IqO$?{Q!0MxO<<IqO%[QlO<<IqOOQO<<Ib<<IbO!BYQ!0LrO<<IbO&=pQ!0LrO<<IqO&={Q!0MxO<= [O&>]Q`O<= ZOOQO7+*]7+*]O9ZQ`O7+*]OOQ[ANAjANAjO&>eQ!fOANAjO!&iQMhOANAjO#'cQ`OANAjO4UQ!fOANAjO&>lQ`OANAjO%[QlOANAjO&>tQ!0MzO7+'yO&AVQ!0MzO,5?_O&CbQ!0MzO,5?aO&EmQ!0MzO7+'{O&HOQ!fO1G4jO&HYQ?MtO7+&_O&J^Q?MvO,5=WO&LeQ?MvO,5=YO&LuQ?MvO,5=WO&MVQ?MvO,5=YO&MgQ?MvO,59sO' mQ?MvO,5<jO'#pQ?MvO,5<lO'&UQ?MvO,5<zO''zQ?MtO7+'jO'(XQ?MtO7+'lO'(fQ`O,5<[OOQO7+'_7+'_OOQ!0Lh7+*b7+*bO'(kQMjO<<K|OOQO1G4u1G4uO'(rQ`O1G4uO'(}Q`O1G4uO')]Q`O7++zO')]Q`O7++zO!&iQMhO1G4wO')eQ!dO1G4wO')oQ`O7++{O')wQ`O7+(UO'*SQ!dO7+(UOOQ!0Lb7+(S7+(SOOQ!0Lb7+(T7+(TO!BeQpO7+(SOCfQ`O7+(SO'*^Q`O7+(UO!&iQMhO7+(UO$)iQ`O7+(TO'*cQ`O7+(UOCfQ`O7+(TO'*kQMjO<<NuOOQ!0Lh7+${7+${O!+rQMhO<<NuO'*uQ!dO,5?dOOQO-E<v-E<vO'+PQ!0MvO7+(XO!&iQMhO7+(XOOQ[AN=gAN=gO9aQ`O1G5UOOQO1G5U1G5UO'+aQ`O1G5UO'+fQ`O7+,TO'+fQ`O7+,TO9kQ!0LrOANBVO@iQ`OANBVOOQ[ANBVANBVOOQ[ANArANArOOQ[ANAsANAsO'+nQ`O,5?fOOQO-E<x-E<xO'+yQ?MtO1G6fOOQO,5?h,5?hOOQO-E<z-E<zOOQ[1G3`1G3`O',TQ`O,5=OOOQ[<<Le<<LeO!&iQMhO<<LeO&;rQ`O<<LeO',YQ`O<<LeO%[QlO<<LeOOQ[<<Lg<<LgO9kQ!0LrO<<LgO$#yQ`O<<LgO9UQ`O<<LgO',bQpO1G5TO',mQ`O7+,ROOQ[AN=]AN=]O9kQ!0LrOAN=]OOQ[<= p<= pOOQ[<= q<= qO',uQ`O<= pO',zQ`O<= qOOQ[<<Lo<<LoO'-PQ`O<<LoO'-UQlO<<LoOOQ[1G3y1G3yO>wQ`O7+)jO'-]Q`O<<JOO'-hQ?MtO<<JOOOQO<<Hw<<HwOOQ!0LfAN?dAN?dOOQOAN?]AN?]O$?{Q!0MxOAN?]OOQOAN>|AN>|O%[QlOAN?]OOQO<<Mw<<MwOOQ[G27UG27UO!&iQMhOG27UO#'cQ`OG27UO'-rQ!fOG27UO4UQ!fOG27UO'-yQ`OG27UO'.RQ?MtO<<JeO'.`Q?MvO1G2_O'0UQ?MvO,5?_O'2XQ?MvO,5?aO'4[Q?MvO1G2rO'6_Q?MvO1G2tO'8bQ?MtO<<KWO'8oQ?MtO<<IyOOQO1G1v1G1vO!+rQMhOANAhOOQO7+*a7+*aO'8|Q`O7+*aO'9XQ`O<= fO'9aQ!dO7+*cOOQ!0Lb<<Kp<<KpO$)iQ`O<<KpOCfQ`O<<KpO'9kQ`O<<KpO!&iQMhO<<KpOOQ!0Lb<<Kn<<KnO!BeQpO<<KnO'9vQ!dO<<KpOOQ!0Lb<<Ko<<KoO':QQ`O<<KpO!&iQMhO<<KpO$)iQ`O<<KoO':VQMjOANDaO':aQ!0MvO<<KsOOQO7+*p7+*pO9aQ`O7+*pO':qQ`O<= oOOQ[G27qG27qO9kQ!0LrOG27qO!(yQlO1G5QO':yQ`O7+,QO';RQ`O1G2jO&;rQ`OANBPOOQ[ANBPANBPO!&iQMhOANBPO';WQ`OANBPOOQ[ANBRANBRO9kQ!0LrOANBRO$#yQ`OANBROOQO'#H^'#H^OOQO7+*o7+*oOOQ[G22wG22wOOQ[ANE[ANE[OOQ[ANE]ANE]OOQ[ANBZANBZO';`Q`OANBZOOQ[<<MU<<MUO!(yQlOAN?jOOQOG24wG24wO$?{Q!0MxOG24wO#'cQ`OLD,pOOQ[LD,pLD,pO!&iQMhOLD,pO';eQ!fOLD,pO';lQ?MvO7+'yO'=bQ?MvO,5?_O'?eQ?MvO,5?aO'AhQ?MvO7+'{O'C^QMjOG27SOOQO<<M{<<M{OOQ!0LbANA[ANA[O$)iQ`OANA[OCfQ`OANA[O'CnQ!dOANA[OOQ!0LbANAYANAYO'CuQ`OANA[O!&iQMhOANA[O'DQQ!dOANA[OOQ!0LbANAZANAZOOQO<<N[<<N[OOQ[LD-]LD-]O'D[Q?MtO7+*lOOQO'#Ge'#GeOOQ[G27kG27kO&;rQ`OG27kO!&iQMhOG27kOOQ[G27mG27mO9kQ!0LrOG27mOOQ[G27uG27uO'DfQ?MtOG25UOOQOLD*cLD*cOOQ[!$(![!$(![O#'cQ`O!$(![O!&iQMhO!$(![O'DpQ!0MzOG27SOOQ!0LbG26vG26vO$)iQ`OG26vO'GRQ`OG26vOCfQ`OG26vO'G^Q!dOG26vO!&iQMhOG26vOOQ[LD-VLD-VO&;rQ`OLD-VOOQ[LD-XLD-XOOQ[!)9Ev!)9EvO#'cQ`O!)9EvOOQ!0LbLD,bLD,bO$)iQ`OLD,bOCfQ`OLD,bO'GeQ`OLD,bO'GpQ!dOLD,bOOQ[!$(!q!$(!qOOQ[!.K;b!.K;bO'GwQ?MvOG27SOOQ!0Lb!$( |!$( |O$)iQ`O!$( |OCfQ`O!$( |O'ImQ`O!$( |OOQ!0Lb!)9Eh!)9EhO$)iQ`O!)9EhOCfQ`O!)9EhOOQ!0Lb!.K;S!.K;SO$)iQ`O!.K;SOOQ!0Lb!4/0n!4/0nO!(yQlO'#DxO1PQ`O'#EVO'IxQ!fO'#JpO'JPQ!L^O'#DtO'JWQlO'#D|O'J_Q!fO'#CiO'LuQ!fO'#CiO!(yQlO'#EOO'MVQlO,5;XO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO'#InO( YQ`O,5<hO!(yQlO,5;cO( bQMhO,5;cO(!{QMhO,5;cO!(yQlO,5;vO!&iQMhO'#GlO( bQMhO'#GlO!&iQMhO'#GnO( bQMhO'#GnO1SQ`O'#DXO1SQ`O'#DXO!&iQMhO'#GOO( bQMhO'#GOO!&iQMhO'#GQO( bQMhO'#GQO!&iQMhO'#G`O( bQMhO'#G`O!(yQlO,5:hO(#SQpO'#D]O(#^QpO'#JtO!(yQlO,5@mO'MVQlO1G0sO(#hQ?MtO'#CiO!(yQlO1G2OO!&iQMhO'#IsO( bQMhO'#IsO!&iQMhO'#IuO( bQMhO'#IuO(#rQ!dO'#CrO!&iQMhO,5<sO( bQMhO,5<sO'MVQlO1G2QO!(yQlO7+&yO!&iQMhO1G2_O( bQMhO1G2_O!&iQMhO'#IsO( bQMhO'#IsO!&iQMhO'#IuO( bQMhO'#IuO!&iQMhO1G2aO( bQMhO1G2aO'MVQlO7+'lO'MVQlO7+&_O!&iQMhOANAhO( bQMhOANAhO($VQ`O'#EmO($[Q`O'#EmO($dQ`O'#F[O($iQ`O'#EwO($nQ`O'#KRO($yQ`O'#KPO(%UQ`O,5;XO(%ZQMjO,5<dO(%bQ`O'#GXO(%gQ`O'#GXO(%lQ`O,5<fO(%tQ`O,5;XO(%|Q?MtO1G1_O(&TQ`O,5<sO(&YQ`O,5<sO(&_Q`O,5<uO(&dQ`O,5<uO(&iQ`O1G2QO(&nQ`O1G0sO(&sQMjO<<K|O(&zQMjO<<K|O7eQMhO'#F{O9UQ`O'#FzOAdQ`O'#ElO!(yQlO,5;sO!3^Q`O'#GXO!3^Q`O'#GXO!3^Q`O'#GZO!3^Q`O'#GZO!+rQMhO7+(bO!+rQMhO7+(bO%-ZQ!dO1G2vO%-ZQ!dO1G2vO!&iQMhO,5=[O!&iQMhO,5=[",
  stateData: "((P~O'zOS'{OSTOS'|RQ~OPYOQYOSfOY!VOaqOdzOeyOj!POnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]XO!guO!jZO!mYO!nYO!oYO!qvO!swO!vxO!z]O$V|O$miO%g}O%i!QO%k!OO%l!OO%m!OO%p!RO%r!SO%u!TO%v!TO%x!UO&U!WO&[!XO&^!YO&`!ZO&b![O&e!]O&k!^O&q!_O&s!`O&u!aO&w!bO&y!cO(RSO(TTO(WUO(_VO(m[O~OWtO~P`OPYOQYOSfOd!jOe!iOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]!eO!guO!jZO!mYO!nYO!oYO!qvO!s!gO!v!hO$V!kO$miO(R!dO(TTO(WUO(_VO(m[O~Oa!wOq!nO!Q!oO!`!yO!a!vO!b!vO!z;wO#R!pO#S!pO#T!xO#U!pO#V!pO#Y!zO#Z!zO(S!lO(TTO(WUO(c!mO(m!sO~O'|!{O~OP]XR]X[]Xa]Xp]X!O]X!Q]X!Z]X!j]X!n]X#P]X#Q]X#^]X#ifX#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#w]X#y]X#z]X$P]X'x]X(_]X(p]X(w]X(x]X~O!e%QX~P(qO_!}O(T#PO(U!}O(V#PO~O_#QO(V#PO(W#PO(X#QO~Ov#SO!S#TO(`#TO(a#VO~OPYOQYOSfOd!jOe!iOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]!eO!guO!jZO!mYO!nYO!oYO!qvO!s!gO!v!hO$V!kO$miO(R;{O(TTO(WUO(_VO(m[O~O!Y#ZO!Z#WO!W(fP!W(tP~P+}O![#cO~P`OPYOQYOSfOd!jOe!iOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]!eO!guO!jZO!mYO!nYO!oYO!qvO!s!gO!v!hO$V!kO$miO(TTO(WUO(_VO(m[O~On#mO!Y#iO!z]O#g#lO#h#iO(R;|O!i(qP~P.iO!j#oO(R#nO~O!v#sO!z]O%g#tO~O#i#uO~O!e#vO#i#uO~OP$[OR#zO[$cOp$aO!O#yO!Q#{O!Z$_O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO#w$UO#y$WO#z$XO(_VO(p$YO(w#|O(x#}O~Oa(dX'x(dX'u(dX!i(dX!W(dX!](dX%h(dX!e(dX~P1qO#Q$dO#^$eO$P$eOP(eXR(eX[(eXp(eX!O(eX!Q(eX!Z(eX!j(eX!n(eX#P(eX#l(eX#m(eX#n(eX#o(eX#p(eX#q(eX#r(eX#s(eX#t(eX#u(eX#w(eX#y(eX#z(eX(_(eX(p(eX(w(eX(x(eX!](eX%h(eX~Oa(eX'x(eX'u(eX!W(eX!i(eXt(eX!e(eX~P4UO#^$eO~O$[$hO$^$gO$e$mO~OSfO!]$nO$h$oO$j$qO~Oh%VOj%cOn%WOp%XOq$tOr$tOx%YOz%ZO|%[O!Q${O!]$|O!g%aO!j$xO#h%bO$V%_O$s%]O$u%^O$x%`O(R$sO(TTO(WUO(_$uO(w$}O(x%POg([P~O!j%dO~O!Q%gO!]%hO(R%fO~O!e%lO~Oa%mO'x%mO~O!O%qO~P%[O(S!lO~P%[O%m%uO~P%[Oh%VO!j%dO(R%fO(S!lO~Oe%|O!j%dO(R%fO~O#t$RO~O!O&RO!]&OO!j&QO%i&UO(R%fO(S!lO(TTO(WUO`)UP~O!v#sO~O%r&WO!Q)QX!])QX(R)QX~O(R&XO~Oj!PO!s&^O%i!QO%k!OO%l!OO%m!OO%p!RO%r!SO%u!TO%v!TO~Od&cOe&bO!v&`O%g&aO%z&_O~P<POd&fOeyOj!PO!]&eO!s&^O!vxO!z]O%g}O%k!OO%l!OO%m!OO%p!RO%r!SO%u!TO%v!TO%x!UO~Ob&iO#^&lO%i&gO(S!lO~P=UO!j&mO!s&qO~O!j#oO~O!]XO~Oa%mO'v&yO'x%mO~Oa%mO'v&|O'x%mO~Oa%mO'v'OO'x%mO~O'u]X!W]Xt]X!i]X&Y]X!]]X%h]X!e]X~P(qO!`']O!a'UO!b'UO(S!lO(TTO(WUO~Oq'SO!Q'RO!Y'VO(c'QO![(gP![(vP~P@]Ol'`O!]'^O(R%fO~Oe'eO!j%dO(R%fO~O!O&RO!j&QO~Oq!nO!Q!oO!z;wO#R!pO#S!pO#U!pO#V!pO(S!lO(TTO(WUO(c!mO(m!sO~O!`'kO!a'jO!b'jO#T!pO#Y'lO#Z'lO~PAwOa%mOh%VO!e#vO!j%dO'x%mO(p'nO~O!n'rO#^'pO~PCVOq!nO!Q!oO(TTO(WUO(c!mO(m!sO~O!]XOq(kX!Q(kX!`(kX!a(kX!b(kX!z(kX#R(kX#S(kX#T(kX#U(kX#V(kX#Y(kX#Z(kX(S(kX(T(kX(W(kX(c(kX(m(kX~O!a'jO!b'jO(S!lO~PCuO'}'vO(O'vO(P'xO~O_!}O(T'zO(U!}O(V'zO~O_#QO(V'zO(W'zO(X#QO~Ot'|O~P%[Ov#SO!S#TO(`#TO(a(PO~O!Y(RO!W'UX!W'[X!Z'UX!Z'[X~P+}O!Z(TO!W(fX~OP$[OR#zO[$cOp$aO!O#yO!Q#{O!Z(TO!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO#w$UO#y$WO#z$XO(_VO(p$YO(w#|O(x#}O~O!W(fX~PGpO!W(YO~O!W(sX!Z(sX!e(sX!i(sX(p(sX~O#^(sX#i#bX![(sX~PIsO#^(ZO!W(uX!Z(uX~O!Z([O!W(tX~O!W(_O~O#^$eO~PIsO![(`O~P`OR#zO!O#yO!Q#{O!j#xO(_VOP!la[!lap!la!Z!la!n!la#P!la#l!la#m!la#n!la#o!la#p!la#q!la#r!la#s!la#t!la#u!la#w!la#y!la#z!la(p!la(w!la(x!la~Oa!la'x!la'u!la!W!la!i!lat!la!]!la%h!la!e!la~PKZO!i(aO~O!e#vO#^(bO(p'nO!Z(rXa(rX'x(rX~O!i(rX~PMvO!Q%gO!]%hO!z]O#g(gO#h(fO(R%fO~O!Z(hO!i(qX~O!i(jO~O!Q%gO!]%hO#h(fO(R%fO~OP(eXR(eX[(eXp(eX!O(eX!Q(eX!Z(eX!j(eX!n(eX#P(eX#l(eX#m(eX#n(eX#o(eX#p(eX#q(eX#r(eX#s(eX#t(eX#u(eX#w(eX#y(eX#z(eX(_(eX(p(eX(w(eX(x(eX~O!e#vO!i(eX~P! dOR(lO!O(kO!j#xO#Q$dO!z!ya!Q!ya~O!v!ya%g!ya!]!ya#g!ya#h!ya(R!ya~P!#eO!v(pO~OPYOQYOSfOd!jOe!iOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]XO!guO!jZO!mYO!nYO!oYO!qvO!s!gO!v!hO$V!kO$miO(R!dO(TTO(WUO(_VO(m[O~Oh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|<eO!Q${O!]$|O!g=vO!j$xO#h<kO$V%_O$s<gO$u<iO$x%`O(R(tO(TTO(WUO(_$uO(w$}O(x%PO~O#i(vO~O!Y(xO!i(iP~P%[O(c(zO(m[O~O!Q(|O!j#xO(c(zO(m[O~OP;vOQ;vOSfOd=rOe!iOnkOp;vOqkOrkOxkOz;vO|;vO!QWO!UkO!VkO!]!eO!g;yO!jZO!m;vO!n;vO!o;vO!q;zO!s;}O!v!hO$V!kO$m=pO(R)ZO(TTO(WUO(_VO(m[O~O!Z$_Oa$pa'x$pa'u$pa!i$pa!W$pa!]$pa%h$pa!e$pa~Oj)bO~P!&iOh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|%[O!Q${O!]$|O!g%aO!j$xO#h%bO$V%_O$s%]O$u%^O$x%`O(R(tO(TTO(WUO(_$uO(w$}O(x%PO~Og(nP~P!+rO!O)gO!e)fO!]$]X$Y$]X$[$]X$^$]X$e$]X~O!e)fO!](yX$Y(yX$[(yX$^(yX$e(yX~O!O)gO~P!-{O!O)gO!](yX$Y(yX$[(yX$^(yX$e(yX~O!])iO$Y)mO$[)hO$^)hO$e)nO~O!Y)qO~P!(yO$[$hO$^$gO$e)uO~Ol$yX!O$yX#Q$yX'w$yX(w$yX(x$yX~OgkXg$yXlkX!ZkX#^kX~P!/qOv)wO(`)xO(a)zO~Ol*TO!O)|O'w)}O(w$}O(x%PO~Og){O~P!0uOg*UO~Oh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|<eO!Q*WO!]*XO!g=vO!j$xO#h<kO$V%_O$s<gO$u<iO$x%`O(TTO(WUO(_$uO(w$}O(x%PO~O!Y*[O(R*VO!i(|P~P!1dO#i*^O~O!j*_O~Oh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|<eO!Q${O!]$|O!g=vO!j$xO#h<kO$V%_O$s<gO$u<iO$x%`O(R*aO(TTO(WUO(_$uO(w$}O(x%PO~O!Y*dO!W(}P~P!3cOp*pOq!nO!Q*fO!`*nO!a*hO!b*hO!j*_O#Y*oO%_*jO(S!lO(TTO(WUO(c!mO~O![*mO~P!5WO#Q$dOl(^X!O(^X'w(^X(w(^X(x(^X!Z(^X#^(^X~Og(^X#}(^X~P!6YOl*uO#^*tOg(]X!Z(]X~O!Z*vOg([X~Oj%cO(R&XOg([P~Oq*yO~O!j+OO~O(R(tO~On+TO!Q%gO!Y#iO!]%hO!z]O#g#lO#h#iO(R%fO!i(qP~O!e#vO#i+UO~O!Q%gO!Y+WO!Z([O!]%hO(R%fO!W(tP~Oq'YO!Q+YO!Y+XO(TTO(WUO(c(zO~O![(vP~P!9]O!Z+ZOa)RX'x)RX~OP$[OR#zO[$cOp$aO!O#yO!Q#{O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO#w$UO#y$WO#z$XO(_VO(p$YO(w#|O(x#}O~Oa!ha!Z!ha'x!ha'u!ha!W!ha!i!hat!ha!]!ha%h!ha!e!ha~P!:TOR#zO!O#yO!Q#{O!j#xO(_VOP!pa[!pap!pa!Z!pa!n!pa#P!pa#l!pa#m!pa#n!pa#o!pa#p!pa#q!pa#r!pa#s!pa#t!pa#u!pa#w!pa#y!pa#z!pa(p!pa(w!pa(x!pa~Oa!pa'x!pa'u!pa!W!pa!i!pat!pa!]!pa%h!pa!e!pa~P!<kOR#zO!O#yO!Q#{O!j#xO(_VOP!ra[!rap!ra!Z!ra!n!ra#P!ra#l!ra#m!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#w!ra#y!ra#z!ra(p!ra(w!ra(x!ra~Oa!ra'x!ra'u!ra!W!ra!i!rat!ra!]!ra%h!ra!e!ra~P!?ROh%VOl+dO!]'^O%h+cO~O!e+fOa(ZX!](ZX'x(ZX!Z(ZX~Oa%mO!]XO'x%mO~Oh%VO!j%dO~Oh%VO!j%dO(R%fO~O!e#vO#i(vO~Ob+qO%i+rO(R+nO(TTO(WUO![)VP~O!Z+sO`)UX~O[+wO~O`+xO~O!]&OO(R%fO(S!lO`)UP~Oh%VO#^+}O~Oh%VOl,QO!]$|O~O!],SO~O!O,UO!]XO~O%m%uO~O!v,ZO~Oe,`O~Ob,aO(R#nO(TTO(WUO![)TP~Oe%|O~O%i!QO(R&XO~P=UO[,fO`,eO~OPYOQYOSfOdzOeyOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!guO!jZO!mYO!nYO!oYO!qvO!vxO!z]O$miO%g}O(TTO(WUO(_VO(m[O~O!]!eO!s!gO$V!kO(R!dO~P!FRO`,eOa%mO'x%mO~OPYOQYOSfOd!jOe!iOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]!eO!guO!jZO!mYO!nYO!oYO!qvO!v!hO$V!kO$miO(R!dO(TTO(WUO(_VO(m[O~Oa,kOj!OO!swO%k!OO%l!OO%m!OO~P!HkO!j&mO~O&[,qO~O!],sO~O&m,uO&o,vOP&jaQ&jaS&jaY&jaa&jad&jae&jaj&jan&jap&jaq&jar&jax&jaz&ja|&ja!Q&ja!U&ja!V&ja!]&ja!g&ja!j&ja!m&ja!n&ja!o&ja!q&ja!s&ja!v&ja!z&ja$V&ja$m&ja%g&ja%i&ja%k&ja%l&ja%m&ja%p&ja%r&ja%u&ja%v&ja%x&ja&U&ja&[&ja&^&ja&`&ja&b&ja&e&ja&k&ja&q&ja&s&ja&u&ja&w&ja&y&ja'u&ja(R&ja(T&ja(W&ja(_&ja(m&ja![&ja&c&jab&ja&h&ja~O(R,{O~Oh!cX!Z!PX![!PX!e!PX!e!cX!j!cX#^!PX~O!Z!cX![!cX~P# qO!e-QO#^-POh(hX!Z#fX![#fX!e(hX!j(hX~O!Z(hX![(hX~P#!dOh%VO!e-SO!j%dO!Z!_X![!_X~Oq!nO!Q!oO(TTO(WUO(c!mO~OP;vOQ;vOSfOd=rOe!iOnkOp;vOqkOrkOxkOz;vO|;vO!QWO!UkO!VkO!]!eO!g;yO!jZO!m;vO!n;vO!o;vO!q;zO!s;}O!v!hO$V!kO$m=pO(TTO(WUO(_VO(m[O~O(R<rO~P##yO!Z-WO![(gX~O![-YO~O!e-QO#^-PO!Z#fX![#fX~O!Z-ZO![(vX~O![-]O~O!a-^O!b-^O(S!lO~P##hO![-aO~P'_Ol-dO!]'^O~O!W-iO~Oq!ya!`!ya!a!ya!b!ya#R!ya#S!ya#T!ya#U!ya#V!ya#Y!ya#Z!ya(S!ya(T!ya(W!ya(c!ya(m!ya~P!#eO!n-nO#^-lO~PCVO!a-pO!b-pO(S!lO~PCuOa%mO#^-lO'x%mO~Oa%mO!e#vO#^-lO'x%mO~Oa%mO!e#vO!n-nO#^-lO'x%mO(p'nO~O'}'vO(O'vO(P-uO~Ot-vO~O!W'Ua!Z'Ua~P!:TO!Y-zO!W'UX!Z'UX~P%[O!Z(TO!W(fa~O!W(fa~PGpO!Z([O!W(ta~O!Q%gO!Y.OO!]%hO(R%fO!W'[X!Z'[X~O#^.QO!Z(ra!i(raa(ra'x(ra~O!e#vO~P#,PO!Z(hO!i(qa~O!Q%gO!]%hO#h.UO(R%fO~On.ZO!Q%gO!Y.WO!]%hO!z]O#g.YO#h.WO(R%fO!Z'_X!i'_X~OR._O!j#xO~Oh%VOl.bO!]'^O%h.aO~Oa#ai!Z#ai'x#ai'u#ai!W#ai!i#ait#ai!]#ai%h#ai!e#ai~P!:TOl=|O!O)|O'w)}O(w$}O(x%PO~O#i#]aa#]a#^#]a'x#]a!Z#]a!i#]a!]#]a!W#]a~P#.{O#i(^XP(^XR(^X[(^Xa(^Xp(^X!Q(^X!j(^X!n(^X#P(^X#l(^X#m(^X#n(^X#o(^X#p(^X#q(^X#r(^X#s(^X#t(^X#u(^X#w(^X#y(^X#z(^X'x(^X(_(^X(p(^X!i(^X!W(^X'u(^Xt(^X!](^X%h(^X!e(^X~P!6YO!Z.oO!i(iX~P!:TO!i.rO~O!W.tO~OP$[OR#zO!O#yO!Q#{O!j#xO!n$[O(_VO[#kia#kip#ki!Z#ki#P#ki#m#ki#n#ki#o#ki#p#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki'x#ki(p#ki(w#ki(x#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#l#ki~P#2kO#l$OO~P#2kOP$[OR#zOp$aO!O#yO!Q#{O!j#xO!n$[O#l$OO#m$PO#n$PO#o$PO(_VO[#kia#ki!Z#ki#P#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki'x#ki(p#ki(w#ki(x#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#p#ki~P#5YO#p$QO~P#5YOP$[OR#zO[$cOp$aO!O#yO!Q#{O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO(_VOa#ki!Z#ki#w#ki#y#ki#z#ki'x#ki(p#ki(w#ki(x#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#u#ki~P#7wOP$[OR#zO[$cOp$aO!O#yO!Q#{O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO(_VO(x#}Oa#ki!Z#ki#y#ki#z#ki'x#ki(p#ki(w#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#w$UO~P#:_O#w#ki~P#:_O#u$SO~P#7wOP$[OR#zO[$cOp$aO!O#yO!Q#{O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO#w$UO(_VO(w#|O(x#}Oa#ki!Z#ki#z#ki'x#ki(p#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#y#ki~P#=TO#y$WO~P#=TOP]XR]X[]Xp]X!O]X!Q]X!j]X!n]X#P]X#Q]X#^]X#ifX#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#w]X#y]X#z]X$P]X(_]X(p]X(w]X(x]X!Z]X![]X~O#}]X~P#?rOP$[OR#zO[<_Op<]O!O#yO!Q#{O!j#xO!n$[O#P<SO#l<PO#m<QO#n<QO#o<QO#p<RO#q<SO#r<SO#s<^O#t<SO#u<TO#w<VO#y<XO#z<YO(_VO(p$YO(w#|O(x#}O~O#}.vO~P#BPO#Q$dO#^<`O$P<`O#}(eX![(eX~P! dOa'ba!Z'ba'x'ba'u'ba!i'ba!W'bat'ba!]'ba%h'ba!e'ba~P!:TO[#kia#kip#ki!Z#ki#P#ki#p#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki'x#ki(p#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~OP$[OR#zO!O#yO!Q#{O!j#xO!n$[O#l$OO#m$PO#n$PO#o$PO(_VO(w#ki(x#ki~P#EROl=|O!O)|O'w)}O(w$}O(x%POP#kiR#ki!Q#ki!j#ki!n#ki#l#ki#m#ki#n#ki#o#ki(_#ki~P#ERO!Z.zOg(nX~P!0uOg.|O~Oa$Oi!Z$Oi'x$Oi'u$Oi!W$Oi!i$Oit$Oi!]$Oi%h$Oi!e$Oi~P!:TO$[.}O$^.}O~O$[/OO$^/OO~O!e)fO#^/PO!]$bX$Y$bX$[$bX$^$bX$e$bX~O!Y/QO~O!])iO$Y/SO$[)hO$^)hO$e/TO~O!Z<ZO![(dX~P#BPO![/UO~O!e)fO$e(yX~O$e/WO~Ot/XO~P!&iOv)wO(`)xO(a/[O~O!Q/_O~O(w$}Ol%`a!O%`a'w%`a(x%`a!Z%`a#^%`a~Og%`a#}%`a~P#LTO(x%POl%ba!O%ba'w%ba(w%ba!Z%ba#^%ba~Og%ba#}%ba~P#LvO!ZfX!efX!ifX!i$yX(pfX~P!/qO!Y/hO!Z([O(R/gO!W(tP!W(}P~P!1dOp*pO!`*nO!a*hO!b*hO!j*_O#Y*oO%_*jO(S!lO(TTO(WUO~Oq<oO!Q/iO!Y+XO![*mO(c<nO![(vP~P#NaO!i/jO~P#.{O!Z/kO!e#vO(p'nO!i(|X~O!i/pO~O!Q%gO!Y*[O!]%hO(R%fO!i(|P~O#i/rO~O!W$yX!Z$yX!e%QX~P!/qO!Z/sO!W(}X~P#.{O!e/uO~O!W/wO~OnkO(R/xO~P.iOh%VOp/}O!e#vO!j%dO(p'nO~O!e+fO~Oa%mO!Z0RO'x%mO~O![0TO~P!5WO!a0UO!b0UO(S!lO~P##hOq!nO!Q0VO(TTO(WUO(c!mO~O#Y0XO~Og%`a!Z%`a#^%`a#}%`a~P!0uOg%ba!Z%ba#^%ba#}%ba~P!0uOj%cO(R&XOg'kX!Z'kX~O!Z*vOg([a~Og0bO~OR0cO!O0cO!Q0dO#Q$dOl{a'w{a(w{a(x{a!Z{a#^{a~Og{a#}{a~P$&dO!O)|O'w)}Ol$ra(w$ra(x$ra!Z$ra#^$ra~Og$ra#}$ra~P$'`O!O)|O'w)}Ol$ta(w$ta(x$ta!Z$ta#^$ta~Og$ta#}$ta~P$(RO#i0gO~Og%Sa!Z%Sa#^%Sa#}%Sa~P!0uOl0iO#^0hOg(]a!Z(]a~O!e#vO~O#i0lO~O!Z+ZOa)Ra'x)Ra~OR#zO!O#yO!Q#{O!j#xO(_VOP!pi[!pip!pi!Z!pi!n!pi#P!pi#l!pi#m!pi#n!pi#o!pi#p!pi#q!pi#r!pi#s!pi#t!pi#u!pi#w!pi#y!pi#z!pi(p!pi(w!pi(x!pi~Oa!pi'x!pi'u!pi!W!pi!i!pit!pi!]!pi%h!pi!e!pi~P$*OOh%VOp%XOq$tOr$tOx%YOz%ZO|<eO!Q${O!]$|O!g=vO!j$xO#h<kO$V%_O$s<gO$u<iO$x%`O(TTO(WUO(_$uO(w$}O(x%PO~On0vO%[0wO(R0tO~P$,fO!e+fOa(Za!](Za'x(Za!Z(Za~O#i0|O~O[]X!ZfX![fX~O!Z0}O![)VX~O![1PO~O[1QO~Ob1SO(R+nO(TTO(WUO~O!]&OO(R%fO`'sX!Z'sX~O!Z+sO`)Ua~O!i1VO~P!:TO[1YO~O`1ZO~O#^1^O~Ol1aO!]$|O~O(c(zO![)SP~Oh%VOl1jO!]1gO%h1iO~O[1tO!Z1rO![)TX~O![1uO~O`1wOa%mO'x%mO~O(R#nO(TTO(WUO~O#Q$dO#^$eO$P$eOP(eXR(eX[(eXp(eX!O(eX!Q(eX!Z(eX!j(eX!n(eX#P(eX#l(eX#m(eX#n(eX#o(eX#p(eX#q(eX#r(eX#s(eX#u(eX#w(eX#y(eX#z(eX(_(eX(p(eX(w(eX(x(eX~O#t1zO&Y1{Oa(eX~P$2PO#^$eO#t1zO&Y1{O~Oa1}O~P%[Oa2PO~O&c2SOP&aiQ&aiS&aiY&aia&aid&aie&aij&ain&aip&aiq&air&aix&aiz&ai|&ai!Q&ai!U&ai!V&ai!]&ai!g&ai!j&ai!m&ai!n&ai!o&ai!q&ai!s&ai!v&ai!z&ai$V&ai$m&ai%g&ai%i&ai%k&ai%l&ai%m&ai%p&ai%r&ai%u&ai%v&ai%x&ai&U&ai&[&ai&^&ai&`&ai&b&ai&e&ai&k&ai&q&ai&s&ai&u&ai&w&ai&y&ai'u&ai(R&ai(T&ai(W&ai(_&ai(m&ai![&aib&ai&h&ai~Ob2YO![2WO&h2XO~P`O!]XO!j2[O~O&o,vOP&jiQ&jiS&jiY&jia&jid&jie&jij&jin&jip&jiq&jir&jix&jiz&ji|&ji!Q&ji!U&ji!V&ji!]&ji!g&ji!j&ji!m&ji!n&ji!o&ji!q&ji!s&ji!v&ji!z&ji$V&ji$m&ji%g&ji%i&ji%k&ji%l&ji%m&ji%p&ji%r&ji%u&ji%v&ji%x&ji&U&ji&[&ji&^&ji&`&ji&b&ji&e&ji&k&ji&q&ji&s&ji&u&ji&w&ji&y&ji'u&ji(R&ji(T&ji(W&ji(_&ji(m&ji![&ji&c&jib&ji&h&ji~O!W2bO~O!Z!_a![!_a~P#BPOq!nO!Q!oO!Y2hO(c!mO!Z'VX!['VX~P@]O!Z-WO![(ga~O!Z']X![']X~P!9]O!Z-ZO![(va~O![2oO~P'_Oa%mO#^2xO'x%mO~Oa%mO!e#vO#^2xO'x%mO~Oa%mO!e#vO!n2|O#^2xO'x%mO(p'nO~Oa%mO'x%mO~P!:TO!Z$_Ot$pa~O!W'Ui!Z'Ui~P!:TO!Z(TO!W(fi~O!Z([O!W(ti~O!W(ui!Z(ui~P!:TO!Z(ri!i(ria(ri'x(ri~P!:TO#^3OO!Z(ri!i(ria(ri'x(ri~O!Z(hO!i(qi~O!Q%gO!]%hO!z]O#g3TO#h3SO(R%fO~O!Q%gO!]%hO#h3SO(R%fO~Ol3[O!]'^O%h3ZO~Oh%VOl3[O!]'^O%h3ZO~O#i%`aP%`aR%`a[%`aa%`ap%`a!Q%`a!j%`a!n%`a#P%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#t%`a#u%`a#w%`a#y%`a#z%`a'x%`a(_%`a(p%`a!i%`a!W%`a'u%`at%`a!]%`a%h%`a!e%`a~P#LTO#i%baP%baR%ba[%baa%bap%ba!Q%ba!j%ba!n%ba#P%ba#l%ba#m%ba#n%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#w%ba#y%ba#z%ba'x%ba(_%ba(p%ba!i%ba!W%ba'u%bat%ba!]%ba%h%ba!e%ba~P#LvO#i%`aP%`aR%`a[%`aa%`ap%`a!Q%`a!Z%`a!j%`a!n%`a#P%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#t%`a#u%`a#w%`a#y%`a#z%`a'x%`a(_%`a(p%`a!i%`a!W%`a'u%`a#^%`at%`a!]%`a%h%`a!e%`a~P#.{O#i%baP%baR%ba[%baa%bap%ba!Q%ba!Z%ba!j%ba!n%ba#P%ba#l%ba#m%ba#n%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#w%ba#y%ba#z%ba'x%ba(_%ba(p%ba!i%ba!W%ba'u%ba#^%bat%ba!]%ba%h%ba!e%ba~P#.{O#i{aP{a[{aa{ap{a!j{a!n{a#P{a#l{a#m{a#n{a#o{a#p{a#q{a#r{a#s{a#t{a#u{a#w{a#y{a#z{a'x{a(_{a(p{a!i{a!W{a'u{at{a!]{a%h{a!e{a~P$&dO#i$raP$raR$ra[$raa$rap$ra!Q$ra!j$ra!n$ra#P$ra#l$ra#m$ra#n$ra#o$ra#p$ra#q$ra#r$ra#s$ra#t$ra#u$ra#w$ra#y$ra#z$ra'x$ra(_$ra(p$ra!i$ra!W$ra'u$rat$ra!]$ra%h$ra!e$ra~P$'`O#i$taP$taR$ta[$taa$tap$ta!Q$ta!j$ta!n$ta#P$ta#l$ta#m$ta#n$ta#o$ta#p$ta#q$ta#r$ta#s$ta#t$ta#u$ta#w$ta#y$ta#z$ta'x$ta(_$ta(p$ta!i$ta!W$ta'u$tat$ta!]$ta%h$ta!e$ta~P$(RO#i%SaP%SaR%Sa[%Saa%Sap%Sa!Q%Sa!Z%Sa!j%Sa!n%Sa#P%Sa#l%Sa#m%Sa#n%Sa#o%Sa#p%Sa#q%Sa#r%Sa#s%Sa#t%Sa#u%Sa#w%Sa#y%Sa#z%Sa'x%Sa(_%Sa(p%Sa!i%Sa!W%Sa'u%Sa#^%Sat%Sa!]%Sa%h%Sa!e%Sa~P#.{Oa#aq!Z#aq'x#aq'u#aq!W#aq!i#aqt#aq!]#aq%h#aq!e#aq~P!:TO!Y3dO!Z'WX!i'WX~P%[O!Z.oO!i(ia~O!Z.oO!i(ia~P!:TO!W3gO~O#}!la![!la~PKZO#}!ha!Z!ha![!ha~P#BPO#}!pa![!pa~P!<kO#}!ra![!ra~P!?ROg'ZX!Z'ZX~P!+rO!Z.zOg(na~OSfO!]3{O$c3|O~O![4QO~Ot4RO~P#.{Oa$lq!Z$lq'x$lq'u$lq!W$lq!i$lqt$lq!]$lq%h$lq!e$lq~P!:TO!W4TO~P!&iO!Q4UO~O!O)|O'w)}O(x%POl'ga(w'ga!Z'ga#^'ga~Og'ga#}'ga~P%+uO!O)|O'w)}Ol'ia(w'ia(x'ia!Z'ia#^'ia~Og'ia#}'ia~P%,hO(p$YO~P#.{O!WfX!W$yX!ZfX!Z$yX!e%QX#^fX~P!/qO(R<xO~P!1dO!Q%gO!Y4XO!]%hO(R%fO!Z'cX!i'cX~O!Z/kO!i(|a~O!Z/kO!e#vO!i(|a~O!Z/kO!e#vO(p'nO!i(|a~Og${i!Z${i#^${i#}${i~P!0uO!Y4aO!W'eX!Z'eX~P!3cO!Z/sO!W(}a~O!Z/sO!W(}a~P#.{OP]XR]X[]Xp]X!O]X!Q]X!W]X!Z]X!j]X!n]X#P]X#Q]X#^]X#ifX#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#w]X#y]X#z]X$P]X(_]X(p]X(w]X(x]X~O!e%XX#t%XX~P%0XO!e#vO#t4fO~Oh%VO!e#vO!j%dO~Oh%VOp4kO!j%dO(p'nO~Op4pO!e#vO(p'nO~Oq!nO!Q4qO(TTO(WUO(c!mO~O(w$}Ol%`i!O%`i'w%`i(x%`i!Z%`i#^%`i~Og%`i#}%`i~P%3xO(x%POl%bi!O%bi'w%bi(w%bi!Z%bi#^%bi~Og%bi#}%bi~P%4kOg(]i!Z(]i~P!0uO#^4wOg(]i!Z(]i~P!0uO!i4zO~Oa$nq!Z$nq'x$nq'u$nq!W$nq!i$nqt$nq!]$nq%h$nq!e$nq~P!:TO!W5QO~O!Z5RO!])OX~P#.{Oa]Xa$yX!]]X!]$yX%]]X'x]X'x$yX!Z]X!Z$yX~P!/qO%]5UOa%Za!]%Za'x%Za!Z%Za~OlmX!OmX'wmX(wmX(xmX~P%7nOn5VO(R#nO~Ob5]O%i5^O(R+nO(TTO(WUO!Z'rX!['rX~O!Z0}O![)Va~O[5bO~O`5cO~Oa%mO'x%mO~P#.{O!Z5kO#^5mO![)SX~O![5nO~Op5tOq!nO!Q*fO!`!yO!a!vO!b!vO!z;wO#R!pO#S!pO#T!pO#U!pO#V!pO#Y5sO#Z!zO(S!lO(TTO(WUO(c!mO(m!sO~O![5rO~P%:ROl5yO!]1gO%h5xO~Oh%VOl5yO!]1gO%h5xO~Ob6QO(R#nO(TTO(WUO!Z'qX!['qX~O!Z1rO![)Ta~O(TTO(WUO(c6SO~O`6WO~O#t6ZO&Y6[O~PMvO!i6]O~P%[Oa6_O~Oa6_O~P%[Ob2YO![6dO&h2XO~P`O!e6fO~O!e6hOh(hi!Z(hi![(hi!e(hi!j(hip(hi(p(hi~O!Z#fi![#fi~P#BPO#^6iO!Z#fi![#fi~O!Z!_i![!_i~P#BPOa%mO#^6rO'x%mO~Oa%mO!e#vO#^6rO'x%mO~O!Z(rq!i(rqa(rq'x(rq~P!:TO!Z(hO!i(qq~O!Q%gO!]%hO#h6yO(R%fO~O!]'^O%h6|O~Ol7QO!]'^O%h6|O~O#i'gaP'gaR'ga['gaa'gap'ga!Q'ga!j'ga!n'ga#P'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#t'ga#u'ga#w'ga#y'ga#z'ga'x'ga(_'ga(p'ga!i'ga!W'ga'u'gat'ga!]'ga%h'ga!e'ga~P%+uO#i'iaP'iaR'ia['iaa'iap'ia!Q'ia!j'ia!n'ia#P'ia#l'ia#m'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#w'ia#y'ia#z'ia'x'ia(_'ia(p'ia!i'ia!W'ia'u'iat'ia!]'ia%h'ia!e'ia~P%,hO#i${iP${iR${i[${ia${ip${i!Q${i!Z${i!j${i!n${i#P${i#l${i#m${i#n${i#o${i#p${i#q${i#r${i#s${i#t${i#u${i#w${i#y${i#z${i'x${i(_${i(p${i!i${i!W${i'u${i#^${it${i!]${i%h${i!e${i~P#.{O#i%`iP%`iR%`i[%`ia%`ip%`i!Q%`i!j%`i!n%`i#P%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#t%`i#u%`i#w%`i#y%`i#z%`i'x%`i(_%`i(p%`i!i%`i!W%`i'u%`it%`i!]%`i%h%`i!e%`i~P%3xO#i%biP%biR%bi[%bia%bip%bi!Q%bi!j%bi!n%bi#P%bi#l%bi#m%bi#n%bi#o%bi#p%bi#q%bi#r%bi#s%bi#t%bi#u%bi#w%bi#y%bi#z%bi'x%bi(_%bi(p%bi!i%bi!W%bi'u%bit%bi!]%bi%h%bi!e%bi~P%4kO!Z'Wa!i'Wa~P!:TO!Z.oO!i(ii~O#}#ai!Z#ai![#ai~P#BPOP$[OR#zO!O#yO!Q#{O!j#xO!n$[O(_VO[#kip#ki#P#ki#m#ki#n#ki#o#ki#p#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki#}#ki(p#ki(w#ki(x#ki!Z#ki![#ki~O#l#ki~P%MQO#l<PO~P%MQOP$[OR#zOp<]O!O#yO!Q#{O!j#xO!n$[O#l<PO#m<QO#n<QO#o<QO(_VO[#ki#P#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki#}#ki(p#ki(w#ki(x#ki!Z#ki![#ki~O#p#ki~P& YO#p<RO~P& YOP$[OR#zO[<_Op<]O!O#yO!Q#{O!j#xO!n$[O#P<SO#l<PO#m<QO#n<QO#o<QO#p<RO#q<SO#r<SO#s<^O#t<SO(_VO#w#ki#y#ki#z#ki#}#ki(p#ki(w#ki(x#ki!Z#ki![#ki~O#u#ki~P&#bOP$[OR#zO[<_Op<]O!O#yO!Q#{O!j#xO!n$[O#P<SO#l<PO#m<QO#n<QO#o<QO#p<RO#q<SO#r<SO#s<^O#t<SO#u<TO(_VO(x#}O#y#ki#z#ki#}#ki(p#ki(w#ki!Z#ki![#ki~O#w<VO~P&%cO#w#ki~P&%cO#u<TO~P&#bOP$[OR#zO[<_Op<]O!O#yO!Q#{O!j#xO!n$[O#P<SO#l<PO#m<QO#n<QO#o<QO#p<RO#q<SO#r<SO#s<^O#t<SO#u<TO#w<VO(_VO(w#|O(x#}O#z#ki#}#ki(p#ki!Z#ki![#ki~O#y#ki~P&'rO#y<XO~P&'rOa#{y!Z#{y'x#{y'u#{y!W#{y!i#{yt#{y!]#{y%h#{y!e#{y~P!:TO[#kip#ki#P#ki#p#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki#}#ki(p#ki!Z#ki![#ki~OP$[OR#zO!O#yO!Q#{O!j#xO!n$[O#l<PO#m<QO#n<QO#o<QO(_VO(w#ki(x#ki~P&*nOl=}O!O)|O'w)}O(w$}O(x%POP#kiR#ki!Q#ki!j#ki!n#ki#l#ki#m#ki#n#ki#o#ki(_#ki~P&*nO#Q$dOP(^XR(^X[(^Xl(^Xp(^X!O(^X!Q(^X!j(^X!n(^X#P(^X#l(^X#m(^X#n(^X#o(^X#p(^X#q(^X#r(^X#s(^X#t(^X#u(^X#w(^X#y(^X#z(^X#}(^X'w(^X(_(^X(p(^X(w(^X(x(^X!Z(^X![(^X~O#}$Oi!Z$Oi![$Oi~P#BPO#}!pi![!pi~P$*OOg'Za!Z'Za~P!0uO![7dO~O!Z'ba!['ba~P#BPO!W7eO~P#.{O!e#vO(p'nO!Z'ca!i'ca~O!Z/kO!i(|i~O!Z/kO!e#vO!i(|i~Og${q!Z${q#^${q#}${q~P!0uO!W'ea!Z'ea~P#.{O!e7lO~O!Z/sO!W(}i~P#.{O!Z/sO!W(}i~O!W7oO~Oh%VOp7tO!j%dO(p'nO~O!e#vO#t7vO~Op7yO!e#vO(p'nO~O!O)|O'w)}O(x%POl'ha(w'ha!Z'ha#^'ha~Og'ha#}'ha~P&3oO!O)|O'w)}Ol'ja(w'ja(x'ja!Z'ja#^'ja~Og'ja#}'ja~P&4bO!W7{O~Og$}q!Z$}q#^$}q#}$}q~P!0uOg(]q!Z(]q~P!0uO#^7|Og(]q!Z(]q~P!0uOa$ny!Z$ny'x$ny'u$ny!W$ny!i$nyt$ny!]$ny%h$ny!e$ny~P!:TO!e6hO~O!Z5RO!])Oa~O!]'^OP$SaR$Sa[$Sap$Sa!O$Sa!Q$Sa!Z$Sa!j$Sa!n$Sa#P$Sa#l$Sa#m$Sa#n$Sa#o$Sa#p$Sa#q$Sa#r$Sa#s$Sa#t$Sa#u$Sa#w$Sa#y$Sa#z$Sa(_$Sa(p$Sa(w$Sa(x$Sa~O%h6|O~P&7SO%]8QOa%Zi!]%Zi'x%Zi!Z%Zi~Oa#ay!Z#ay'x#ay'u#ay!W#ay!i#ayt#ay!]#ay%h#ay!e#ay~P!:TO[8SO~Ob8UO(R+nO(TTO(WUO~O!Z0}O![)Vi~O`8YO~O(c(zO!Z'nX!['nX~O!Z5kO![)Sa~O![8cO~P%:RO(m!sO~P$$oO#Y8dO~O!]1gO~O!]1gO%h8fO~Ol8iO!]1gO%h8fO~O[8nO!Z'qa!['qa~O!Z1rO![)Ti~O!i8rO~O!i8sO~O!i8vO~O!i8vO~P%[Oa8xO~O!e8yO~O!i8zO~O!Z(ui![(ui~P#BPOa%mO#^9SO'x%mO~O!Z(ry!i(rya(ry'x(ry~P!:TO!Z(hO!i(qy~O%h9VO~P&7SO!]'^O%h9VO~O#i${qP${qR${q[${qa${qp${q!Q${q!Z${q!j${q!n${q#P${q#l${q#m${q#n${q#o${q#p${q#q${q#r${q#s${q#t${q#u${q#w${q#y${q#z${q'x${q(_${q(p${q!i${q!W${q'u${q#^${qt${q!]${q%h${q!e${q~P#.{O#i'haP'haR'ha['haa'hap'ha!Q'ha!j'ha!n'ha#P'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#t'ha#u'ha#w'ha#y'ha#z'ha'x'ha(_'ha(p'ha!i'ha!W'ha'u'hat'ha!]'ha%h'ha!e'ha~P&3oO#i'jaP'jaR'ja['jaa'jap'ja!Q'ja!j'ja!n'ja#P'ja#l'ja#m'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#w'ja#y'ja#z'ja'x'ja(_'ja(p'ja!i'ja!W'ja'u'jat'ja!]'ja%h'ja!e'ja~P&4bO#i$}qP$}qR$}q[$}qa$}qp$}q!Q$}q!Z$}q!j$}q!n$}q#P$}q#l$}q#m$}q#n$}q#o$}q#p$}q#q$}q#r$}q#s$}q#t$}q#u$}q#w$}q#y$}q#z$}q'x$}q(_$}q(p$}q!i$}q!W$}q'u$}q#^$}qt$}q!]$}q%h$}q!e$}q~P#.{O!Z'Wi!i'Wi~P!:TO#}#aq!Z#aq![#aq~P#BPO(w$}OP%`aR%`a[%`ap%`a!Q%`a!j%`a!n%`a#P%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#t%`a#u%`a#w%`a#y%`a#z%`a#}%`a(_%`a(p%`a!Z%`a![%`a~Ol%`a!O%`a'w%`a(x%`a~P&HgO(x%POP%baR%ba[%bap%ba!Q%ba!j%ba!n%ba#P%ba#l%ba#m%ba#n%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#w%ba#y%ba#z%ba#}%ba(_%ba(p%ba!Z%ba![%ba~Ol%ba!O%ba'w%ba(w%ba~P&JnOl=}O!O)|O'w)}O(x%PO~P&HgOl=}O!O)|O'w)}O(w$}O~P&JnOR0cO!O0cO!Q0dO#Q$dOP{a[{al{ap{a!j{a!n{a#P{a#l{a#m{a#n{a#o{a#p{a#q{a#r{a#s{a#t{a#u{a#w{a#y{a#z{a#}{a'w{a(_{a(p{a(w{a(x{a!Z{a![{a~O!O)|O'w)}OP$raR$ra[$ral$rap$ra!Q$ra!j$ra!n$ra#P$ra#l$ra#m$ra#n$ra#o$ra#p$ra#q$ra#r$ra#s$ra#t$ra#u$ra#w$ra#y$ra#z$ra#}$ra(_$ra(p$ra(w$ra(x$ra!Z$ra![$ra~O!O)|O'w)}OP$taR$ta[$tal$tap$ta!Q$ta!j$ta!n$ta#P$ta#l$ta#m$ta#n$ta#o$ta#p$ta#q$ta#r$ta#s$ta#t$ta#u$ta#w$ta#y$ta#z$ta#}$ta(_$ta(p$ta(w$ta(x$ta!Z$ta![$ta~Ol=}O!O)|O'w)}O(w$}O(x%PO~OP%SaR%Sa[%Sap%Sa!Q%Sa!j%Sa!n%Sa#P%Sa#l%Sa#m%Sa#n%Sa#o%Sa#p%Sa#q%Sa#r%Sa#s%Sa#t%Sa#u%Sa#w%Sa#y%Sa#z%Sa#}%Sa(_%Sa(p%Sa!Z%Sa![%Sa~P'%sO#}$lq!Z$lq![$lq~P#BPO#}$nq!Z$nq![$nq~P#BPO![9dO~O#}9eO~P!0uO!e#vO!Z'ci!i'ci~O!e#vO(p'nO!Z'ci!i'ci~O!Z/kO!i(|q~O!W'ei!Z'ei~P#.{O!Z/sO!W(}q~Op9lO!e#vO(p'nO~O[9nO!W9mO~P#.{O!W9mO~O!e#vO#t9tO~Og(]y!Z(]y~P!0uO!Z'la!]'la~P#.{Oa%Zq!]%Zq'x%Zq!Z%Zq~P#.{O[9yO~O!Z0}O![)Vq~O#^9}O!Z'na!['na~O!Z5kO![)Si~P#BPO!Q:PO~O!]1gO%h:SO~O(TTO(WUO(c:XO~O!Z1rO![)Tq~O!i:[O~O!i:]O~O!i:^O~O!i:^O~P%[O#^:aO!Z#fy![#fy~O!Z#fy![#fy~P#BPO%h:fO~P&7SO!]'^O%h:fO~O#}#{y!Z#{y![#{y~P#BPOP${iR${i[${ip${i!Q${i!j${i!n${i#P${i#l${i#m${i#n${i#o${i#p${i#q${i#r${i#s${i#t${i#u${i#w${i#y${i#z${i#}${i(_${i(p${i!Z${i![${i~P'%sO!O)|O'w)}O(x%POP'gaR'ga['gal'gap'ga!Q'ga!j'ga!n'ga#P'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#t'ga#u'ga#w'ga#y'ga#z'ga#}'ga(_'ga(p'ga(w'ga!Z'ga!['ga~O!O)|O'w)}OP'iaR'ia['ial'iap'ia!Q'ia!j'ia!n'ia#P'ia#l'ia#m'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#w'ia#y'ia#z'ia#}'ia(_'ia(p'ia(w'ia(x'ia!Z'ia!['ia~O(w$}OP%`iR%`i[%`il%`ip%`i!O%`i!Q%`i!j%`i!n%`i#P%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#t%`i#u%`i#w%`i#y%`i#z%`i#}%`i'w%`i(_%`i(p%`i(x%`i!Z%`i![%`i~O(x%POP%biR%bi[%bil%bip%bi!O%bi!Q%bi!j%bi!n%bi#P%bi#l%bi#m%bi#n%bi#o%bi#p%bi#q%bi#r%bi#s%bi#t%bi#u%bi#w%bi#y%bi#z%bi#}%bi'w%bi(_%bi(p%bi(w%bi!Z%bi![%bi~O#}$ny!Z$ny![$ny~P#BPO#}#ay!Z#ay![#ay~P#BPO!e#vO!Z'cq!i'cq~O!Z/kO!i(|y~O!W'eq!Z'eq~P#.{Op:pO!e#vO(p'nO~O[:tO!W:sO~P#.{O!W:sO~Og(]!R!Z(]!R~P!0uOa%Zy!]%Zy'x%Zy!Z%Zy~P#.{O!Z0}O![)Vy~O!Z5kO![)Sq~O(R:zO~O!]1gO%h:}O~O!i;QO~O%h;VO~P&7SOP${qR${q[${qp${q!Q${q!j${q!n${q#P${q#l${q#m${q#n${q#o${q#p${q#q${q#r${q#s${q#t${q#u${q#w${q#y${q#z${q#}${q(_${q(p${q!Z${q![${q~P'%sO!O)|O'w)}O(x%POP'haR'ha['hal'hap'ha!Q'ha!j'ha!n'ha#P'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#t'ha#u'ha#w'ha#y'ha#z'ha#}'ha(_'ha(p'ha(w'ha!Z'ha!['ha~O!O)|O'w)}OP'jaR'ja['jal'jap'ja!Q'ja!j'ja!n'ja#P'ja#l'ja#m'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#w'ja#y'ja#z'ja#}'ja(_'ja(p'ja(w'ja(x'ja!Z'ja!['ja~OP$}qR$}q[$}qp$}q!Q$}q!j$}q!n$}q#P$}q#l$}q#m$}q#n$}q#o$}q#p$}q#q$}q#r$}q#s$}q#t$}q#u$}q#w$}q#y$}q#z$}q#}$}q(_$}q(p$}q!Z$}q![$}q~P'%sOg%d!Z!Z%d!Z#^%d!Z#}%d!Z~P!0uO!W;ZO~P#.{Op;[O!e#vO(p'nO~O[;^O!W;ZO~P#.{O!Z'nq!['nq~P#BPO!Z#f!Z![#f!Z~P#BPO#i%d!ZP%d!ZR%d!Z[%d!Za%d!Zp%d!Z!Q%d!Z!Z%d!Z!j%d!Z!n%d!Z#P%d!Z#l%d!Z#m%d!Z#n%d!Z#o%d!Z#p%d!Z#q%d!Z#r%d!Z#s%d!Z#t%d!Z#u%d!Z#w%d!Z#y%d!Z#z%d!Z'x%d!Z(_%d!Z(p%d!Z!i%d!Z!W%d!Z'u%d!Z#^%d!Zt%d!Z!]%d!Z%h%d!Z!e%d!Z~P#.{Op;fO!e#vO(p'nO~O!W;gO~P#.{Op;nO!e#vO(p'nO~O!W;oO~P#.{OP%d!ZR%d!Z[%d!Zp%d!Z!Q%d!Z!j%d!Z!n%d!Z#P%d!Z#l%d!Z#m%d!Z#n%d!Z#o%d!Z#p%d!Z#q%d!Z#r%d!Z#s%d!Z#t%d!Z#u%d!Z#w%d!Z#y%d!Z#z%d!Z#}%d!Z(_%d!Z(p%d!Z!Z%d!Z![%d!Z~P'%sOp;rO!e#vO(p'nO~Ot(dX~P1qO!O%qO~P!(yO(S!lO~P!(yO!WfX!ZfX#^fX~P%0XOP]XR]X[]Xp]X!O]X!Q]X!Z]X!ZfX!j]X!n]X#P]X#Q]X#^]X#^fX#ifX#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#w]X#y]X#z]X$P]X(_]X(p]X(w]X(x]X~O!efX!i]X!ifX(pfX~P'JlOP;vOQ;vOSfOd=rOe!iOnkOp;vOqkOrkOxkOz;vO|;vO!QWO!UkO!VkO!]XO!g;yO!jZO!m;vO!n;vO!o;vO!q;zO!s;}O!v!hO$V!kO$m=pO(R)ZO(TTO(WUO(_VO(m[O~O!Z<ZO![$pa~Oh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|<fO!Q${O!]$|O!g=wO!j$xO#h<lO$V%_O$s<hO$u<jO$x%`O(R(tO(TTO(WUO(_$uO(w$}O(x%PO~Oj)bO~P( bOp!cX(p!cX~P# qOp(hX(p(hX~P#!dO![]X![fX~P'JlO!WfX!W$yX!ZfX!Z$yX#^fX~P!/qO#i<OO~O!e#vO#i<OO~O#^<`O~O#t<SO~O#^<pO!Z(uX![(uX~O#^<`O!Z(sX![(sX~O#i<qO~Og<sO~P!0uO#i<yO~O#i<zO~O!e#vO#i<{O~O!e#vO#i<qO~O#}<|O~P#BPO#i<}O~O#i=OO~O#i=TO~O#i=UO~O#i=VO~O#i=WO~O#}=XO~P!0uO#}=YO~P!0uO#Q#R#S#U#V#Y#g#h#s$m$s$u$x%[%]%g%h%i%p%r%u%v%x%z~'|T#m!V'z(S#nq#l#op!O'{$['{(R$^(c~",
  goto: "$8f)ZPPPPPP)[PP)_P)pP+Q/VPPPP6aPP6wPP<oP@cP@yP@yPPP@yPCRP@yP@yP@yPCVPC[PCyPHsPPPHwPPPPHwKzPPPLQLrPHwPHwPP! QHwPPPHwPHwP!#XHwP!&o!'t!'}P!(q!(u!(q!,SPPPPPPP!,s!'tPP!-T!.uP!2RHwHw!2W!5d!:Q!:Q!>PPPP!>XHwPPPPPPPPPP!AhP!BuPPHw!DWPHwPHwHwHwHwHwPHw!EjP!HtP!KzP!LO!LY!L^!L^P!HqP!Lb!LbP# hP# lHwPHw# r#$wCV@yP@yP@y@yP#&U@y@y#(h@y#+`@y#-l@y@y#.[#0p#0p#0u#1O#0p#1ZPP#0pP@y#1s@y#5r@y@y6aPPP#9wPPP#:b#:bP#:bP#:x#:bPP#;OP#:uP#:u#;c#:u#;}#<T#<W)_#<Z)_P#<b#<b#<bP)_P)_P)_P)_PP)_P#<h#<kP#<k)_P#<oP#<rP)_P)_P)_P)_P)_P)_)_PP#<x#=O#=Z#=a#=g#=m#=s#>R#>X#>c#>i#>s#>y#?Z#?a#@R#@e#@k#@q#AP#Af#CZ#Ci#Cp#E[#Ej#G[#Gj#Gp#Gv#G|#HW#H^#Hd#Hn#IQ#IWPPPPPPPPPPP#I^PPPPPPP#JR#MY#Nr#Ny$ RPPP$&mP$&v$)o$0Y$0]$0`$1_$1b$1i$1qP$1w$1zP$2h$2l$3d$4r$4w$5_PP$5d$5j$5n$5q$5u$5y$6u$7^$7u$7y$7|$8P$8V$8Y$8^$8bR!|RoqOXst!Z#d%l&p&r&s&u,n,s2S2VY!vQ'^-`1g5qQ%svQ%{yQ&S|Q&h!VS'U!e-WQ'd!iS'j!r!yU*h$|*X*lQ+l%|Q+y&UQ,_&bQ-^']Q-h'eQ-p'kQ0U*nQ1q,`R<m;z%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y,k,n,s-d-l-z.Q.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3d4q5y6Z6[6_6r8i8x9SS#q];w!r)]$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sU*{%[<e<fQ+q&OQ,a&eQ,h&mQ0r+dQ0u+fQ1S+rQ1y,fQ3W.bQ5V0wQ5]0}Q6Q1rQ7O3[Q8U5^R9Y7Q'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s!S!nQ!r!v!y!z$|'U']'^'j'k'l*h*l*n*o-W-^-`-p0U0X1g5q5s%[$ti#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}Q&V|Q'S!eS'Y%h-ZQ+q&OQ,a&eQ0f+OQ1S+rQ1X+xQ1x,eQ1y,fQ5]0}Q5f1ZQ6Q1rQ6T1tQ6U1wQ8U5^Q8X5cQ8q6WQ9|8YQ:Y8nR<o*XrnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VR,c&i&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=r=s[#]WZ#W#Z'V(R!b%im#h#i#l$x%d%g([(f(g(h*W*[*_+W+X+Z,j-Q.O.U.V.W.Y/h/k2[3S3T4X6h6yQ%vxQ%zyS&P|&UQ&]!TQ'a!hQ'c!iQ(o#sS+k%{%|Q+o&OQ,Y&`Q,^&bS-g'd'eQ.d(pQ0{+lQ1R+rQ1T+sQ1W+wQ1l,ZS1p,_,`Q2t-hQ5[0}Q5`1QQ5e1YQ6P1qQ8T5^Q8W5bQ9x8SR:w9y!U$zi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y!^%xy!i!u%z%{%|'T'c'd'e'i's*g+k+l-T-g-h-o/{0O0{2m2t2{4i4j4m7s9pQ+e%vQ,O&YQ,R&ZQ,]&bQ.c(oQ1k,YU1o,^,_,`Q3].dQ5z1lS6O1p1qQ8m6P#f=t#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}o=u<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YW%Ti%V*v=pS&Y!Q&gQ&Z!RQ&[!SQ+S%cR+|&W%]%Si#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}T)x$u)yV*{%[<e<fW'Y!e%h*X-ZS({#y#zQ+`%qQ+v&RS.](k(lQ1b,SQ4x0cR8^5k'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s$i$^c#Y#e%p%r%t(Q(W(r(w)P)Q)R)S)T)U)V)W)X)Y)[)^)`)e)o+a+u-U-s-x-}.P.n.q.u.w.x.y/]0j2c2f2v2}3c3h3i3j3k3l3m3n3o3p3q3r3s3t3w3x4P5O5Y6k6q6v7V7W7a7b8`8|9Q9[9b9c:c:y;R;x=gT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ'W!eR2i-W!W!nQ!e!r!v!y!z$|'U']'^'j'k'l*X*h*l*n*o-W-^-`-p0U0X1g5q5sR1d,UnqOXst!Z#d%l&p&r&s&u,n,s2S2VQ&w!^Q't!xS(q#u<OQ+i%yQ,W&]Q,X&_Q-e'bQ-r'mS.m(v<qS0k+U<{Q0y+jQ1f,VQ2Z,uQ2],vQ2e-RQ2r-fQ2u-jS5P0l=VQ5W0zS5Z0|=WQ6j2gQ6n2sQ6s2zQ8R5XQ8}6lQ9O6oQ9R6tR:`8z$d$]c#Y#e%r%t(Q(W(r(w)P)Q)R)S)T)U)V)W)X)Y)[)^)`)e)o+a+u-U-s-x-}.P.n.q.u.x.y/]0j2c2f2v2}3c3h3i3j3k3l3m3n3o3p3q3r3s3t3w3x4P5O5Y6k6q6v7V7W7a7b8`8|9Q9[9b9c:c:y;R;x=gS(m#p'gQ(}#zS+_%p.wS.^(l(nR3U._'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sS#q];wQ&r!XQ&s!YQ&u![Q&v!]R2R,qQ'_!hQ+b%vQ-c'aS.`(o+eQ2p-bW3Y.c.d0q0sQ6m2qW6z3V3X3]5TU9U6{6}7PU:e9W9X9ZS;T:d:gQ;b;UR;j;cU!wQ'^-`T5o1g5q!Q_OXZ`st!V!Z#d#h%d%l&g&i&p&r&s&u(h,n,s.V2S2V]!pQ!r'^-`1g5qT#q];w%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SS({#y#zS.](k(l!s=^$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sU$fd)],hS(n#p'gU*s%R(u3vU0e*z.i7]Q5T0rQ6{3WQ9X7OR:g9Ym!tQ!r!v!y!z'^'j'k'l-`-p1g5q5sQ'r!uS(d#g1|S-n'i'uQ/n*ZQ/{*gQ2|-qQ4]/oQ4i/}Q4j0OQ4o0WQ7h4WS7s4k4mS7w4p4rQ9g7iQ9k7oQ9p7tQ9u7yS:o9l9mS;Y:p:sS;e;Z;[S;m;f;gS;q;n;oR;t;rQ#wbQ'q!uS(c#g1|S(e#m+TQ+V%eQ+g%wQ+m%}U-m'i'r'uQ.R(dQ/m*ZQ/|*gQ0P*iQ0x+hQ1m,[S2y-n-qQ3R.ZS4[/n/oQ4e/yS4h/{0WQ4l0QQ5|1nQ6u2|Q7g4WQ7k4]U7r4i4o4rQ7u4nQ8k5}S9f7h7iQ9j7oQ9r7wQ9s7xQ:V8lQ:m9gS:n9k9mQ:v9uQ;P:WS;X:o:sS;d;Y;ZS;l;e;gS;p;m;oQ;s;qQ;u;tQ=a=[Q=l=eR=m=fV!wQ'^-`%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SS#wz!j!r=Z$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sR=a=r%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SQ%ej!^%wy!i!u%z%{%|'T'c'd'e'i's*g+k+l-T-g-h-o/{0O0{2m2t2{4i4j4m7s9pS%}z!jQ+h%xQ,[&bW1n,],^,_,`U5}1o1p1qS8l6O6PQ:W8m!r=[$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ=e=qR=f=r%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SY#bWZ#W#Z(R!b%im#h#i#l$x%d%g([(f(g(h*W*[*_+W+X+Z,j-Q.O.U.V.W.Y/h/k2[3S3T4X6h6yQ,i&m!p=]$Z$n)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sR=`'VU'Z!e%h*XR2k-Z%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y,k,n,s-d-l-z.Q.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3d4q5y6Z6[6_6r8i8x9S!r)]$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ,h&mQ0r+dQ3W.bQ7O3[R9Y7Q!b$Tc#Y%p(Q(W(r(w)X)Y)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;x!P<U)[)o-U.w2c2f3h3q3r3w4P6k7W7a7b8`8|9[9b9c:y;R=g!f$Vc#Y%p(Q(W(r(w)U)V)X)Y)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;x!T<W)[)o-U.w2c2f3h3n3o3q3r3w4P6k7W7a7b8`8|9[9b9c:y;R=g!^$Zc#Y%p(Q(W(r(w)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;xQ4V/fz=s)[)o-U.w2c2f3h3w4P6k7W7a7b8`8|9[9b9c:y;R=gQ=x=zR=y={'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sS$oh$pR3|/P'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/P/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sT$kf$qQ$ifS)h$l)lR)t$qT$jf$qT)j$l)l'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/P/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sT$oh$pQ$rhR)s$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9S!s=q$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s#glOPXZst!Z!`!o#S#d#o#{$n%l&i&l&m&p&r&s&u&y'R'`(|)q*f+Y+d,k,n,s-d.b/Q/i0V0d1j1z1{1}2P2S2V2X3[3{4q5y6Z6[6_7Q8i8x!U%Ri$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y#f(u#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}Q+P%`Q/^)|o3v<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!U$yi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=yQ*`$zU*i$|*X*lQ+Q%aQ0Q*j#f=c#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n=d<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YQ=h=tQ=i=uQ=j=vR=k=w!U%Ri$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y#f(u#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}o3v<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YnoOXst!Z#d%l&p&r&s&u,n,s2S2VS*c${*WQ,|&|Q,}'OR4`/s%[%Si#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}Q,P&ZQ1`,RQ5i1_R8]5jV*k$|*X*lU*k$|*X*lT5p1g5qS/y*f/iQ4n0VT7x4q:PQ+g%wQ0P*iQ0x+hQ1m,[Q5|1nQ8k5}Q:V8lR;P:W!U%Oi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=yx*P$v)c*Q*r+R/q0^0_3y4^4{4|4}7f7z9v:l=b=n=oS0Y*q0Z#f<a#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n<b<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!d<t(s)a*Y*b.e.h.l/Y/f/v0p1]3`4S4_4c5h7R7U7m7p7}8P9i9q9w:q:u;W;];h=z={`<u3u7X7[7`9]:h:k;kS=P.g3aT=Q7Z9`!U%Qi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y|*R$v)c*S*q+R/b/q0^0_3y4^4s4{4|4}7f7z9v:l=b=n=oS0[*r0]#f<c#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n<d<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!h<v(s)a*Y*b.f.g.l/Y/f/v0p1]3^3`4S4_4c5h7R7S7U7m7p7}8P9i9q9w:q:u;W;];h=z={d<w3u7Y7Z7`9]9^:h:i:k;kS=R.h3bT=S7[9arnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VQ&d!UR,k&mrnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VR&d!UQ,T&[R1[+|snOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VQ1h,YS5w1k1lU8e5u5v5zS:R8g8hS:{:Q:TQ;_:|R;i;`Q&k!VR,d&gR6T1tR:Y8nS&P|&UR1T+sQ&p!WR,n&qR,t&vT2T,s2VR,x&wQ,w&wR2^,xQ'w!{R-t'wSsOtQ#dXT%os#dQ#OTR'y#OQ#RUR'{#RQ)y$uR/Z)yQ#UVR(O#UQ#XWU(U#X(V-{Q(V#YR-{(WQ-X'WR2j-XQ.p(wS3e.p3fR3f.qQ-`'^R2n-`Y!rQ'^-`1g5qR'h!rQ.{)cR3z.{U#_W%g*WU(]#_(^-|Q(^#`R-|(XQ-['ZR2l-[t`OXst!V!Z#d%l&g&i&p&r&s&u,n,s2S2VS#hZ%dU#r`#h.VR.V(hQ(i#jQ.S(eW.[(i.S3P6wQ3P.TR6w3QQ)l$lR/R)lQ$phR)r$pQ$`cU)_$`-w<[Q-w;xR<[)oQ/l*ZW4Y/l4Z7j9hU4Z/m/n/oS7j4[4]R9h7k$e*O$v(s)a)c*Y*b*q*r*|*}+R.g.h.j.k.l/Y/b/d/f/q/v0^0_0p1]3^3_3`3u3y4S4^4_4c4s4u4{4|4}5h7R7S7T7U7Z7[7^7_7`7f7m7p7z7}8P9]9^9_9i9q9v9w:h:i:j:k:l:q:u;W;];h;k=b=n=o=z={Q/t*bU4b/t4d7nQ4d/vR7n4cS*l$|*XR0S*lx*Q$v)c*q*r+R/q0^0_3y4^4{4|4}7f7z9v:l=b=n=o!d.e(s)a*Y*b.g.h.l/Y/f/v0p1]3`4S4_4c5h7R7U7m7p7}8P9i9q9w:q:u;W;];h=z={U/c*Q.e7Xa7X3u7Z7[7`9]:h:k;kQ0Z*qQ3a.gU4t0Z3a9`R9`7Z|*S$v)c*q*r+R/b/q0^0_3y4^4s4{4|4}7f7z9v:l=b=n=o!h.f(s)a*Y*b.g.h.l/Y/f/v0p1]3^3`4S4_4c5h7R7S7U7m7p7}8P9i9q9w:q:u;W;];h=z={U/e*S.f7Ye7Y3u7Z7[7`9]9^:h:i:k;kQ0]*rQ3b.hU4v0]3b9aR9a7[Q*w%UR0a*wQ5S0pR8O5SQ+[%jR0o+[Q5l1bS8_5l:OR:O8`Q,V&]R1e,VQ5q1gR8b5qQ1s,aS6R1s8oR8o6TQ1O+oW5_1O5a8V9zQ5a1RQ8V5`R9z8WQ+t&PR1U+tQ2V,sR6c2VYrOXst#dQ&t!ZQ+^%lQ,m&pQ,o&rQ,p&sQ,r&uQ2Q,nS2T,s2VR6b2SQ%npQ&x!_Q&{!aQ&}!bQ'P!cQ'o!uQ+]%kQ+i%yQ+{&VQ,c&kQ,z&zW-k'i'q'r'uQ-r'mQ0R*kQ0y+jS1v,d,gQ2_,yQ2`,|Q2a,}Q2u-jW2w-m-n-q-sQ5W0zQ5d1XQ5g1]Q5{1mQ6V1xQ6a2RU6p2v2y2|Q6s2zQ8R5XQ8Z5fQ8[5hQ8a5pQ8j5|Q8p6US9P6q6uQ9R6tQ9{8XQ:U8kQ:Z8qQ:b9QQ:x9|Q;O:VQ;S:cR;a;PQ%yyQ'b!iQ'm!uU+j%z%{%|Q-R'TU-f'c'd'eS-j'i'sQ/z*gS0z+k+lQ2g-TS2s-g-hQ2z-oS4g/{0OQ5X0{Q6l2mQ6o2tQ6t2{U7q4i4j4mQ9o7sR:r9pS$wi=pR*x%VU%Ui%V=pR0`*vQ$viS(s#v+fS)a$b$cQ)c$dQ*Y$xS*b${*WQ*q%OQ*r%QQ*|%]Q*}%^Q+R%bQ.g<aQ.h<cQ.j<gQ.k<iQ.l<kQ/Y)wQ/b*PQ/d*RQ/f*TQ/q*^S/v*d/hQ0^*tQ0_*ul0p+c,Q.a1a1i3Z5x6|8f9V:S:f:};VQ1]+}Q3^<tQ3_<vQ3`<yS3u<^<_Q3y.zS4S/_4UQ4^/rQ4_/sQ4c/uQ4s0YQ4u0[Q4{0gQ4|0hQ4}0iQ5h1^Q7R<}Q7S=PQ7T=RQ7U=TQ7Z<bQ7[<dQ7^<hQ7_<jQ7`<lQ7f4VQ7m4aQ7p4fQ7z4wQ7}5RQ8P5UQ9]<zQ9^<uQ9_<wQ9i7lQ9q7vQ9v7|Q9w8QQ:h=OQ:i=QQ:j=SQ:k=UQ:l9eQ:q9nQ:u9tQ;W=XQ;]:tQ;h;^Q;k=YQ=b=pQ=n=xQ=o=yQ=z=|R={=}Q*z%[Q.i<eR7]<fnpOXst!Z#d%l&p&r&s&u,n,s2S2VQ!fPS#fZ#oQ&z!`W'f!o*f0V4qQ'}#SQ)O#{Q)p$nS,g&i&lQ,l&mQ,y&yS-O'R/iQ-b'`Q.s(|Q/V)qQ0m+YQ0s+dQ2O,kQ2q-dQ3X.bQ4O/QQ4y0dQ5v1jQ6X1zQ6Y1{Q6^1}Q6`2PQ6e2XQ7P3[Q7c3{Q8h5yQ8t6ZQ8u6[Q8w6_Q9Z7QQ:T8iR:_8x#[cOPXZst!Z!`!o#d#o#{%l&i&l&m&p&r&s&u&y'R'`(|*f+Y+d,k,n,s-d.b/i0V0d1j1z1{1}2P2S2V2X3[4q5y6Z6[6_7Q8i8xQ#YWQ#eYQ%puQ%rvS%tw!gS(Q#W(TQ(W#ZQ(r#uQ(w#xQ)P$OQ)Q$PQ)R$QQ)S$RQ)T$SQ)U$TQ)V$UQ)W$VQ)X$WQ)Y$XQ)[$ZQ)^$_Q)`$aQ)e$eW)o$n)q/Q3{Q+a%sQ+u&QS-U'V2hQ-s'pS-x(R-zQ-}(ZQ.P(bQ.n(vQ.q(xQ.u;vQ.w;yQ.x;zQ.y;}Q/]){Q0j+UQ2c-PQ2f-SQ2v-lQ2}.QQ3c.oQ3h<OQ3i<PQ3j<QQ3k<RQ3l<SQ3m<TQ3n<UQ3o<VQ3p<WQ3q<XQ3r<YQ3s.vQ3t<]Q3w<`Q3x<mQ4P<ZQ5O0lQ5Y0|Q6k<pQ6q2xQ6v3OQ7V3dQ7W<qQ7a<sQ7b<{Q8`5mQ8|6iQ9Q6rQ9[<|Q9b=VQ9c=WQ:c9SQ:y9}Q;R:aQ;x#SR=g=sR#[WR'X!el!tQ!r!v!y!z'^'j'k'l-`-p1g5q5sS'T!e-WU*g$|*X*lS-T'U']S0O*h*nQ0W*oQ2m-^Q4m0UR4r0XR(y#xQ!fQT-_'^-`]!qQ!r'^-`1g5qQ#p]R'g;wR)d$dY!uQ'^-`1g5qQ'i!rS's!v!yS'u!z5sS-o'j'kQ-q'lR2{-pT#kZ%dS#jZ%dS%jm,jU(e#h#i#lS.T(f(gQ.X(hQ0n+ZQ3Q.UU3R.V.W.YS6x3S3TR9T6yd#^W#W#Z%g(R([*W+W.O/hr#gZm#h#i#l%d(f(g(h+Z.U.V.W.Y3S3T6yS*Z$x*_Q/o*[Q1|,jQ2d-QQ4W/kQ6g2[Q7i4XQ8{6hT=_'V+XV#aW%g*WU#`W%g*WS(S#W([U(X#Z+W/hS-V'V+XT-y(R.OV'[!e%h*XQ$lfR)v$qT)k$l)lR3}/PT*]$x*_T*e${*WQ0q+cQ1_,QQ3V.aQ5j1aQ5u1iQ6}3ZQ8g5xQ9W6|Q:Q8fQ:d9VQ:|:SQ;U:fQ;`:}R;c;VnqOXst!Z#d%l&p&r&s&u,n,s2S2VQ&j!VR,c&gtmOXst!U!V!Z#d%l&g&p&r&s&u,n,s2S2VR,j&mT%km,jR1c,SR,b&eQ&T|R+z&UR+p&OT&n!W&qT&o!W&qT2U,s2V",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 378,
  context: KQ,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 35, 37, 49, 51, 53, ""],
    ["group", -26, 9, 17, 19, 66, 206, 210, 214, 215, 217, 220, 223, 233, 235, 241, 243, 245, 247, 250, 256, 262, 264, 266, 268, 270, 272, 273, "Statement", -34, 13, 14, 30, 33, 34, 40, 49, 52, 53, 55, 60, 68, 70, 74, 78, 80, 82, 83, 108, 109, 118, 119, 135, 138, 140, 141, 142, 143, 144, 146, 147, 166, 168, 170, "Expression", -23, 29, 31, 35, 39, 41, 43, 172, 174, 176, 177, 179, 180, 181, 183, 184, 185, 187, 188, 189, 200, 202, 204, 205, "Type", -3, 86, 101, 107, "ClassItem"],
    ["openedBy", 23, "<", 36, "InterpolationStart", 54, "[", 58, "{", 71, "(", 159, "JSXStartCloseTag"],
    ["closedBy", -2, 24, 167, ">", 38, "InterpolationEnd", 48, "]", 59, "}", 72, ")", 164, "JSXEndTag"]
  ],
  propSources: [sk],
  skippedNodes: [0, 5, 6, 276],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$h&j(X!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(X!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$h&j(UpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(UpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$h&j(Up(X!b'z0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(V#S$h&j'{0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$h&j(Up(X!b'{0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$h&j!n),Q(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#u(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#u(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(T':f$h&j(X!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$h&j(X!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$h&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$c`$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$c``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$c`$h&j(X!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(X!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$c`(X!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$h&j(Up(X!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$h&j(Up(X!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$h&j(X!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$h&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(X!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$h&j(UpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(UpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Up(X!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$h&j(m%1l(Up(X!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$h&j(Up(X!b$[#t(R,2j(c$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$h&j(Up(X!b$[#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$h&j(Up(X!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$h&j$P(Ch(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(x+JY$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$h&j#y(Ch(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(W';W$h&j(UpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$h&j(UpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$h&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$c`$h&j(UpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(UpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$c`(UpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!j/.^$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!i!Lf$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$h&j(Up(X!b(S%&f#o(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$h&j(Up(X!b#l(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$h&j(Up(X!bp+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!Z+Jf$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$h&j(Up(X!b!O.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_!Y!L^$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$h&j(Up(X!b#m(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$h&j(Up(X!b!V7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$h&j(X!b!V7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$h&j!V7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$h&j!V7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!V7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!V7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$h&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$h&j(X!b!V7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(X!b!V7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(X!b!V7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(X!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$h&j(X!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$h&j(Up!V7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$h&j(Up!V7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Up!V7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Up!V7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(UpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$h&j(UpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$h&j(Up(X!b!V7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Up(X!b!V7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Up(X!b!V7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Up(X!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$h&j(Up(X!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$h&j(Up(X!b'|0/l!V7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$h&j(Up(X!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$h&j(X!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$h&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(X!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$h&j(UpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(UpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Up(X!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$h&j$P(Ch(Up(X!b!V7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Y#t$h&j(Up(X!b!V7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!e$b$h&j#})Lv(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#P-<U(Up(X!b$m7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$j&j(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#p(Ch(Up(X!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$P(Ch(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#q(Ch(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#^*!Y$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#i(Cl$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#q(Ch$e#|$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#q(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#p(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#p(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(p(Ct$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$h&j#z(Ch(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!z$Ip$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!Q0,v$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$h&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$h&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$h&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$h&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$h&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!W#)l$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#w(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$h&j(Up(X!b(_+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$h&j(Up(X!b(R,2j$^#t(c$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$h&j(Up(X!b$^#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!]#Hb(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(w+JY$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_![(CdtBr$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!o7`$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$h&j(Up(X!b'z0/l$[#t(R,2j(c$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$h&j(Up(X!b'{0/l$[#t(R,2j(c$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [ek, tk, ik, nk, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, JQ, new Oa("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOv~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!S~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(a~~", 141, 338), new Oa("j~RQYZXz{^~^O(O~~aP!P!Qd~iO(P~~", 25, 321)],
  topRules: { Script: [0, 7], SingleExpression: [1, 274], SingleClassItem: [2, 275] },
  dialects: { jsx: 0, ts: 15091 },
  dynamicPrecedences: { 78: 1, 80: 1, 92: 1, 168: 1, 198: 1 },
  specialized: [{ term: 325, get: (i) => rk[i] || -1 }, { term: 341, get: (i) => ok[i] || -1 }, { term: 93, get: (i) => lk[i] || -1 }],
  tokenPrec: 15116
}), _g = [
  /* @__PURE__ */ Ge("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], ck = /* @__PURE__ */ _g.concat([
  /* @__PURE__ */ Ge("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ Ge("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), nf = /* @__PURE__ */ new Pv(), Xg = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function Mn(i) {
  return (e, t) => {
    let n = e.node.getChild("VariableDefinition");
    return n && t(n, i), !0;
  };
}
const hk = ["FunctionDeclaration"], uk = {
  FunctionDeclaration: /* @__PURE__ */ Mn("function"),
  ClassDeclaration: /* @__PURE__ */ Mn("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ Mn("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ Mn("type"),
  NamespaceDeclaration: /* @__PURE__ */ Mn("namespace"),
  VariableDefinition(i, e) {
    i.matchContext(hk) || e(i, "variable");
  },
  TypeDefinition(i, e) {
    e(i, "type");
  },
  __proto__: null
};
function Eg(i, e) {
  let t = nf.get(e);
  if (t)
    return t;
  let n = [], s = !0;
  function r(o, l) {
    let a = i.sliceString(o.from, o.to);
    n.push({ label: a, type: l });
  }
  return e.cursor(Ae.IncludeAnonymous).iterate((o) => {
    if (s)
      s = !1;
    else if (o.name) {
      let l = uk[o.name];
      if (l && l(o, r) || Xg.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of Eg(i, o.node))
        n.push(l);
      return !1;
    }
  }), nf.set(e, n), n;
}
const sf = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, Lg = [
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
function fk(i) {
  let e = Me(i.state).resolveInner(i.pos, -1);
  if (Lg.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && sf.test(i.state.sliceDoc(e.from, e.to));
  if (!t && !i.explicit)
    return null;
  let n = [];
  for (let s = e; s; s = s.parent)
    Xg.has(s.name) && (n = n.concat(Eg(i.state.doc, s)));
  return {
    options: n,
    from: t ? e.from : i.pos,
    validFor: sf
  };
}
const Ti = /* @__PURE__ */ ls.define({
  name: "javascript",
  parser: /* @__PURE__ */ ak.configure({
    props: [
      /* @__PURE__ */ sc.add({
        IfStatement: /* @__PURE__ */ Yo({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ Yo({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: zv,
        SwitchBody: (i) => {
          let e = i.textAfter, t = /^\s*\}/.test(e), n = /^\s*(case|default)\b/.test(e);
          return i.baseIndent + (t ? 0 : n ? 1 : 2) * i.unit;
        },
        Block: /* @__PURE__ */ ia({ closing: "}" }),
        ArrowFunction: (i) => i.baseIndent + i.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ Yo({ except: /^{/ }),
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
      /* @__PURE__ */ oc.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": rO,
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
}), Dg = {
  test: (i) => /^JSX/.test(i.name),
  facet: /* @__PURE__ */ eO({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, dk = /* @__PURE__ */ Ti.configure({ dialect: "ts" }, "typescript"), pk = /* @__PURE__ */ Ti.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ ic.add((i) => i.isTop ? [Dg] : void 0)]
}), Ok = /* @__PURE__ */ Ti.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ ic.add((i) => i.isTop ? [Dg] : void 0)]
}, "typescript");
let jg = (i) => ({ label: i, type: "keyword" });
const Bg = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(jg), gk = /* @__PURE__ */ Bg.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(jg));
function rf(i = {}) {
  let e = i.jsx ? i.typescript ? Ok : pk : i.typescript ? dk : Ti, t = i.typescript ? ck.concat(gk) : _g.concat(Bg);
  return new iO(e, [
    Ti.data.of({
      autocomplete: Qw(Lg, vg(t))
    }),
    Ti.data.of({
      autocomplete: fk
    }),
    i.jsx ? bk : []
  ]);
}
function mk(i) {
  for (; ; ) {
    if (i.name == "JSXOpenTag" || i.name == "JSXSelfClosingTag" || i.name == "JSXFragmentTag")
      return i;
    if (i.name == "JSXEscape" || !i.parent)
      return null;
    i = i.parent;
  }
}
function of(i, e, t = i.length) {
  for (let n = e == null ? void 0 : e.firstChild; n; n = n.nextSibling)
    if (n.name == "JSXIdentifier" || n.name == "JSXBuiltin" || n.name == "JSXNamespacedName" || n.name == "JSXMemberExpression")
      return i.sliceString(n.from, Math.min(n.to, t));
  return "";
}
const yk = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), bk = /* @__PURE__ */ j.inputHandler.of((i, e, t, n, s) => {
  if ((yk ? i.composing : i.compositionStarted) || i.state.readOnly || e != t || n != ">" && n != "/" || !Ti.isActiveAt(i.state, e, -1))
    return !1;
  let r = s(), { state: o } = r, l = o.changeByRange((a) => {
    var c;
    let { head: h } = a, u = Me(o).resolveInner(h - 1, -1), f;
    if (u.name == "JSXStartTag" && (u = u.parent), !(o.doc.sliceString(h - 1, h) != n || u.name == "JSXAttributeValue" && u.to > h)) {
      if (n == ">" && u.name == "JSXFragmentTag")
        return { range: a, changes: { from: h, insert: "</>" } };
      if (n == "/" && u.name == "JSXStartCloseTag") {
        let d = u.parent, p = d.parent;
        if (p && d.from == h - 2 && ((f = of(o.doc, p.firstChild, h)) || ((c = p.firstChild) === null || c === void 0 ? void 0 : c.name) == "JSXFragmentTag")) {
          let g = `${f}>`;
          return { range: A.cursor(h + g.length, -1), changes: { from: h, insert: g } };
        }
      } else if (n == ">") {
        let d = mk(u);
        if (d && d.name == "JSXOpenTag" && !/^\/?>|^<\//.test(o.doc.sliceString(h, h + 2)) && (f = of(o.doc, d, h)))
          return { range: a, changes: { from: h, insert: `</${f}>` } };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (i.dispatch([
    r,
    o.update(l, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
}), vk = "#e5c07b", lf = "#e06c75", Sk = "#56b6c2", xk = "#ffffff", mr = "#abb2bf", ya = "#7d8799", wk = "#61afef", Qk = "#98c379", af = "#d19a66", kk = "#c678dd", Pk = "#21252b", cf = "#2c313a", hf = "#282c34", ol = "#353a42", $k = "#3E4451", uf = "#528bff", Ck = /* @__PURE__ */ j.theme({
  "&": {
    color: mr,
    backgroundColor: hf
  },
  ".cm-content": {
    caretColor: uf
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: uf },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: $k },
  ".cm-panels": { backgroundColor: Pk, color: mr },
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
    backgroundColor: hf,
    color: ya,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: cf
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: ol
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: ol,
    borderBottomColor: ol
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: cf,
      color: mr
    }
  }
}, { dark: !0 }), Zk = /* @__PURE__ */ Ps.define([
  {
    tag: y.keyword,
    color: kk
  },
  {
    tag: [y.name, y.deleted, y.character, y.propertyName, y.macroName],
    color: lf
  },
  {
    tag: [/* @__PURE__ */ y.function(y.variableName), y.labelName],
    color: wk
  },
  {
    tag: [y.color, /* @__PURE__ */ y.constant(y.name), /* @__PURE__ */ y.standard(y.name)],
    color: af
  },
  {
    tag: [/* @__PURE__ */ y.definition(y.name), y.separator],
    color: mr
  },
  {
    tag: [y.typeName, y.className, y.number, y.changed, y.annotation, y.modifier, y.self, y.namespace],
    color: vk
  },
  {
    tag: [y.operator, y.operatorKeyword, y.url, y.escape, y.regexp, y.link, /* @__PURE__ */ y.special(y.string)],
    color: Sk
  },
  {
    tag: [y.meta, y.comment],
    color: ya
  },
  {
    tag: y.strong,
    fontWeight: "bold"
  },
  {
    tag: y.emphasis,
    fontStyle: "italic"
  },
  {
    tag: y.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: y.link,
    color: ya,
    textDecoration: "underline"
  },
  {
    tag: y.heading,
    fontWeight: "bold",
    color: lf
  },
  {
    tag: [y.atom, y.bool, /* @__PURE__ */ y.special(y.variableName)],
    color: af
  },
  {
    tag: [y.processingInstruction, y.string, y.inserted],
    color: Qk
  },
  {
    tag: y.invalid,
    color: xk
  }
]), Tk = [Ck, /* @__PURE__ */ lc(Zk)], Yi = 63, ff = 64, Ak = 1, Mk = 2, Vg = 3, Rk = 4, qg = 5, _k = 6, Xk = 7, Wg = 65, Ek = 66, Lk = 8, Dk = 9, jk = 10, Bk = 11, Vk = 12, Ig = 13, qk = 19, Wk = 20, Ik = 29, zk = 33, Nk = 34, Uk = 47, Yk = 0, Qc = 1, ba = 2, Os = 3, va = 4;
class xi {
  constructor(e, t, n) {
    this.parent = e, this.depth = t, this.type = n, this.hash = (e ? e.hash + e.hash << 8 : 0) + t + (t << 4) + n;
  }
}
xi.top = new xi(null, -1, Yk);
function Un(i, e) {
  for (let t = 0, n = e - i.pos - 1; ; n--, t++) {
    let s = i.peek(n);
    if (Ht(s) || s == -1) return t;
  }
}
function Sa(i) {
  return i == 32 || i == 9;
}
function Ht(i) {
  return i == 10 || i == 13;
}
function zg(i) {
  return Sa(i) || Ht(i);
}
function ki(i) {
  return i < 0 || zg(i);
}
const Gk = new Mg({
  start: xi.top,
  reduce(i, e) {
    return i.type == Os && (e == Wk || e == Nk) ? i.parent : i;
  },
  shift(i, e, t, n) {
    if (e == Vg)
      return new xi(i, Un(n, n.pos), Qc);
    if (e == Wg || e == qg)
      return new xi(i, Un(n, n.pos), ba);
    if (e == Yi)
      return i.parent;
    if (e == qk || e == zk)
      return new xi(i, 0, Os);
    if (e == Ig && i.type == va)
      return i.parent;
    if (e == Uk) {
      let s = /[1-9]/.exec(n.read(n.pos, t.pos));
      if (s) return new xi(i, i.depth + +s[0], va);
    }
    return i;
  },
  hash(i) {
    return i.hash;
  }
});
function pn(i, e, t = 0) {
  return i.peek(t) == e && i.peek(t + 1) == e && i.peek(t + 2) == e && ki(i.peek(t + 3));
}
const Fk = new Jt((i, e) => {
  if (i.next == -1 && e.canShift(ff))
    return i.acceptToken(ff);
  let t = i.peek(-1);
  if ((Ht(t) || t < 0) && e.context.type != Os) {
    if (pn(
      i,
      45
      /* '-' */
    ))
      if (e.canShift(Yi)) i.acceptToken(Yi);
      else return i.acceptToken(Ak, 3);
    if (pn(
      i,
      46
      /* '.' */
    ))
      if (e.canShift(Yi)) i.acceptToken(Yi);
      else return i.acceptToken(Mk, 3);
    let n = 0;
    for (; i.next == 32; )
      n++, i.advance();
    (n < e.context.depth || n == e.context.depth && e.context.type == Qc && (i.next != 45 || !ki(i.peek(1)))) && // Not blank
    i.next != -1 && !Ht(i.next) && i.next != 35 && i.acceptToken(Yi, -n);
  }
}, { contextual: !0 }), Hk = new Jt((i, e) => {
  if (e.context.type == Os) {
    i.next == 63 && (i.advance(), ki(i.next) && i.acceptToken(Xk));
    return;
  }
  if (i.next == 45)
    i.advance(), ki(i.next) && i.acceptToken(e.context.type == Qc && e.context.depth == Un(i, i.pos - 1) ? Rk : Vg);
  else if (i.next == 63)
    i.advance(), ki(i.next) && i.acceptToken(e.context.type == ba && e.context.depth == Un(i, i.pos - 1) ? _k : qg);
  else {
    let t = i.pos;
    for (; ; )
      if (Sa(i.next)) {
        if (i.pos == t) return;
        i.advance();
      } else if (i.next == 33)
        Ng(i);
      else if (i.next == 38)
        xa(i);
      else if (i.next == 42) {
        xa(i);
        break;
      } else if (i.next == 39 || i.next == 34) {
        if (kc(i, !0)) break;
        return;
      } else if (i.next == 91 || i.next == 123) {
        if (!Jk(i)) return;
        break;
      } else {
        Ug(i, !0, !1, 0);
        break;
      }
    for (; Sa(i.next); ) i.advance();
    if (i.next == 58) {
      if (i.pos == t && e.canShift(Ik)) return;
      let n = i.peek(1);
      ki(n) && i.acceptTokenTo(e.context.type == ba && e.context.depth == Un(i, t) ? Ek : Wg, t);
    }
  }
}, { contextual: !0 });
function Kk(i) {
  return i > 32 && i < 127 && i != 34 && i != 37 && i != 44 && i != 60 && i != 62 && i != 92 && i != 94 && i != 96 && i != 123 && i != 124 && i != 125;
}
function df(i) {
  return i >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70;
}
function pf(i, e) {
  return i.next == 37 ? (i.advance(), df(i.next) && i.advance(), df(i.next) && i.advance(), !0) : Kk(i.next) || e && i.next == 44 ? (i.advance(), !0) : !1;
}
function Ng(i) {
  if (i.advance(), i.next == 60) {
    for (i.advance(); ; )
      if (!pf(i, !0)) {
        i.next == 62 && i.advance();
        break;
      }
  } else
    for (; pf(i, !1); )
      ;
}
function xa(i) {
  for (i.advance(); !ki(i.next) && Gr(i.tag) != "f"; ) i.advance();
}
function kc(i, e) {
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
    else if (Ht(r)) {
      if (e) return !1;
      n = !0;
    } else if (e && i.pos >= s + 1024)
      return !1;
  }
  return !n;
}
function Jk(i) {
  for (let e = [], t = i.pos + 1024; ; )
    if (i.next == 91 || i.next == 123)
      e.push(i.next), i.advance();
    else if (i.next == 39 || i.next == 34) {
      if (!kc(i, !0)) return !1;
    } else if (i.next == 93 || i.next == 125) {
      if (e[e.length - 1] != i.next - 2) return !1;
      if (e.pop(), i.advance(), !e.length) return !0;
    } else {
      if (i.next < 0 || i.pos > t || Ht(i.next))
        return !1;
      i.advance();
    }
}
const e2 = "iiisiiissisfissssssssssssisssiiissssssssssssssssssssssssssfsfssissssssssssssssssssssssssssfif";
function Gr(i) {
  return i < 33 ? "u" : i > 125 ? "s" : e2[i - 33];
}
function ll(i, e) {
  let t = Gr(i);
  return t != "u" && !(e && t == "f");
}
function Ug(i, e, t, n) {
  if (Gr(i.next) == "s" || (i.next == 63 || i.next == 58 || i.next == 45) && ll(i.peek(1), t))
    i.advance();
  else
    return !1;
  let s = i.pos;
  for (; ; ) {
    let r = i.next, o = 0, l = n + 1;
    for (; zg(r); ) {
      if (Ht(r)) {
        if (e) return !1;
        l = 0;
      } else
        l++;
      r = i.peek(++o);
    }
    if (!(r >= 0 && (r == 58 ? ll(i.peek(o + 1), t) : r == 35 ? i.peek(o - 1) != 32 : ll(r, t))) || !t && l <= n || l == 0 && !t && (pn(i, 45, o) || pn(i, 46, o)))
      break;
    if (e && Gr(r) == "f") return !1;
    for (let c = o; c >= 0; c--) i.advance();
    if (e && i.pos > s + 1024) return !1;
  }
  return !0;
}
const t2 = new Jt((i, e) => {
  if (i.next == 33)
    Ng(i), i.acceptToken(Vk);
  else if (i.next == 38 || i.next == 42) {
    let t = i.next == 38 ? jk : Bk;
    xa(i), i.acceptToken(t);
  } else i.next == 39 || i.next == 34 ? (kc(i, !1), i.acceptToken(Dk)) : Ug(i, !1, e.context.type == Os, e.context.depth) && i.acceptToken(Lk);
}), i2 = new Jt((i, e) => {
  let t = e.context.type == va ? e.context.depth : -1, n = i.pos;
  e: for (; ; ) {
    let s = 0, r = i.next;
    for (; r == 32; ) r = i.peek(++s);
    if (!s && (pn(i, 45, s) || pn(i, 46, s)) || !Ht(r) && (t < 0 && (t = Math.max(e.context.depth + 1, s)), s < t))
      break;
    for (; ; ) {
      if (i.next < 0) break e;
      let o = Ht(i.next);
      if (i.advance(), o) continue e;
      n = i.pos;
    }
  }
  i.acceptTokenTo(Ig, n);
}), n2 = tc({
  DirectiveName: y.keyword,
  DirectiveContent: y.attributeValue,
  "DirectiveEnd DocEnd": y.meta,
  QuotedLiteral: y.string,
  BlockLiteralHeader: y.special(y.string),
  BlockLiteralContent: y.content,
  Literal: y.content,
  "Key/Literal Key/QuotedLiteral": y.definition(y.propertyName),
  "Anchor Alias": y.labelName,
  Tag: y.typeName,
  Comment: y.lineComment,
  ": , -": y.separator,
  "?": y.punctuation,
  "[ ]": y.squareBracket,
  "{ }": y.brace
}), s2 = ps.deserialize({
  version: 14,
  states: "5lQ!ZQgOOO#PQfO'#CpO#uQfO'#DOOOQR'#Dv'#DvO$qQgO'#DRO%gQdO'#DUO%nQgO'#DUO&ROaO'#D[OOQR'#Du'#DuO&{QgO'#D^O'rQgO'#D`OOQR'#Dt'#DtO(iOqO'#DbOOQP'#Dj'#DjO(zQaO'#CmO)YQgO'#CmOOQP'#Cm'#CmQ)jQaOOQ)uQgOOQ]QgOOO*PQdO'#CrO*nQdO'#CtOOQO'#Dw'#DwO+]Q`O'#CxO+hQdO'#CwO+rQ`O'#CwOOQO'#Cv'#CvO+wQdO'#CvOOQO'#Cq'#CqO,UQ`O,59[O,^QfO,59[OOQR,59[,59[OOQO'#Cx'#CxO,eQ`O'#DPO,pQdO'#DPOOQO'#Dx'#DxO,zQdO'#DxO-XQ`O,59jO-aQfO,59jOOQR,59j,59jOOQR'#DS'#DSO-hQcO,59mO-sQgO'#DVO.TQ`O'#DVO.YQcO,59pOOQR'#DX'#DXO#|QfO'#DWO.hQcO'#DWOOQR,59v,59vO.yOWO,59vO/OOaO,59vO/WOaO,59vO/cQgO'#D_OOQR,59x,59xO0VQgO'#DaOOQR,59z,59zOOQP,59|,59|O0yOaO,59|O1ROaO,59|O1aOqO,59|OOQP-E7h-E7hO1oQgO,59XOOQP,59X,59XO2PQaO'#DeO2_QgO'#DeO2oQgO'#DkOOQP'#Dk'#DkQ)jQaOOO3PQdO'#CsOOQO,59^,59^O3kQdO'#CuOOQO,59`,59`OOQO,59c,59cO4VQdO,59cO4aQdO'#CzO4kQ`O'#CzOOQO,59b,59bOOQU,5:Q,5:QOOQR1G.v1G.vO4pQ`O1G.vOOQU-E7d-E7dO4xQdO,59kOOQO,59k,59kO5SQdO'#DQO5^Q`O'#DQOOQO,5:d,5:dOOQU,5:R,5:ROOQR1G/U1G/UO5cQ`O1G/UOOQU-E7e-E7eO5kQgO'#DhO5xQcO1G/XOOQR1G/X1G/XOOQR,59q,59qO6TQgO,59qO6eQdO'#DiO6lQgO'#DiO7PQcO1G/[OOQR1G/[1G/[OOQR,59r,59rO#|QfO,59rOOQR1G/b1G/bO7_OWO1G/bO7dOaO1G/bOOQR,59y,59yOOQR,59{,59{OOQP1G/h1G/hO7lOaO1G/hO7tOaO1G/hO8POaO1G/hOOQP1G.s1G.sO8_QgO,5:POOQP,5:P,5:POOQP,5:V,5:VOOQP-E7i-E7iOOQO,59_,59_OOQO,59a,59aOOQO1G.}1G.}OOQO,59f,59fO8oQdO,59fOOQR7+$b7+$bP,XQ`O'#DfOOQO1G/V1G/VOOQO,59l,59lO8yQdO,59lOOQR7+$p7+$pP9TQ`O'#DgOOQR'#DT'#DTOOQR,5:S,5:SOOQR-E7f-E7fOOQR7+$s7+$sOOQR1G/]1G/]O9YQgO'#DYO9jQ`O'#DYOOQR,5:T,5:TO#|QfO'#DZO9oQcO'#DZOOQR-E7g-E7gOOQR7+$v7+$vOOQR1G/^1G/^OOQR7+$|7+$|O:QOWO7+$|OOQP7+%S7+%SO:VOaO7+%SO:_OaO7+%SOOQP1G/k1G/kOOQO1G/Q1G/QOOQO1G/W1G/WOOQR,59t,59tO:jQgO,59tOOQR,59u,59uO#|QfO,59uOOQR<<Hh<<HhOOQP<<Hn<<HnO:zOaO<<HnOOQR1G/`1G/`OOQR1G/a1G/aOOQPAN>YAN>Y",
  stateData: ";S~O!fOS!gOS^OS~OP_OQbORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!V[O!cTO~O`cO~P]OVkOWROXROYeOZfO[dOcPOmhOqQO~OboO~P!bOVtOWROXROYeOZfO[dOcPOmrOqQO~OpwO~P#WORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!cTO~OSvP!avP!bvP~P#|OWROXROYeOZfO[dOcPOqQO~OmzO~P%OOm!OOUzP!azP!bzP!dzP~P#|O^!SO!b!QO!f!TO!g!RO~ORSOTUOWROXROcPOqQO!PVO!cTO~OY!UOP!QXQ!QX!V!QX!`!QXS!QX!a!QX!b!QXU!QXm!QX!d!QX~P&aO[!WOP!SXQ!SX!V!SX!`!SXS!SX!a!SX!b!SXU!SXm!SX!d!SX~P&aO^!ZO!W![O!b!YO!f!]O!g!YO~OP!_O!V[OQaX!`aX~OPaXQaX!VaX!`aX~P#|OP!bOQ!cO!V[O~OP_O!V[O~P#|OWROXROY!fOcPOqQObfXmfXofXpfX~OWROXRO[!hOcPOqQObhXmhXohXphX~ObeXmlXoeX~ObkXokX~P%OOm!kO~Om!lObnPonP~P%OOb!pOo!oO~Ob!pO~P!bOm!sOosXpsX~OosXpsX~P%OOm!uOotPptP~P%OOo!xOp!yO~Op!yO~P#WOS!|O!a#OO!b#OO~OUyX!ayX!byX!dyX~P#|Om#QO~OU#SO!a#UO!b#UO!d#RO~Om#WOUzX!azX!bzX!dzX~O]#XO~O!b#XO!g#YO~O^#ZO!b#XO!g#YO~OP!RXQ!RX!V!RX!`!RXS!RX!a!RX!b!RXU!RXm!RX!d!RX~P&aOP!TXQ!TX!V!TX!`!TXS!TX!a!TX!b!TXU!TXm!TX!d!TX~P&aO!b#^O!g#^O~O^#_O!b#^O!f#`O!g#^O~O^#_O!W#aO!b#^O!g#^O~OPaaQaa!Vaa!`aa~P#|OP#cO!V[OQ!XX!`!XX~OP!XXQ!XX!V!XX!`!XX~P#|OP_O!V[OQ!_X!`!_X~P#|OWROXROcPOqQObgXmgXogXpgX~OWROXROcPOqQObiXmiXoiXpiX~Obkaoka~P%OObnXonX~P%OOm#kO~Ob#lOo!oO~Oosapsa~P%OOotXptX~P%OOm#pO~Oo!xOp#qO~OSwP!awP!bwP~P#|OS!|O!a#vO!b#vO~OUya!aya!bya!dya~P#|Om#xO~P%OOm#{OU}P!a}P!b}P!d}P~P#|OU#SO!a$OO!b$OO!d#RO~O]$QO~O!b$QO!g$RO~O!b$SO!g$SO~O^$TO!b$SO!g$SO~O^$TO!b$SO!f$UO!g$SO~OP!XaQ!Xa!V!Xa!`!Xa~P#|Obnaona~P%OOotapta~P%OOo!xO~OU|X!a|X!b|X!d|X~P#|Om$ZO~Om$]OU}X!a}X!b}X!d}X~O]$^O~O!b$_O!g$_O~O^$`O!b$_O!g$_O~OU|a!a|a!b|a!d|a~P#|O!b$cO!g$cO~O",
  goto: ",]!mPPPPPPPPPPPPPPPPP!nPP!v#v#|$`#|$c$f$j$nP%VPPP!v%Y%^%a%{&O%a&R&U&X&_&b%aP&e&{&e'O'RPP']'a'g'm's'y(XPPPPPPPP(_)e*X+c,VUaObcR#e!c!{ROPQSTUXY_bcdehknrtvz!O!U!W!_!b!c!f!h!k!l!s!u!|#Q#R#S#W#c#k#p#x#{$Z$]QmPR!qnqfPQThknrtv!k!l!s!u#R#k#pR!gdR!ieTlPnTjPnSiPnSqQvQ{TQ!mkQ!trQ!vtR#y#RR!nkTsQvR!wt!RWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]RySR#t!|R|TR|UQ!PUR#|#SR#z#RR#z#SyZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]R!VXR!XYa]O^abc!a!c!eT!da!eQnPR!rnQvQR!{vQ!}yR#u!}Q#T|R#}#TW^Obc!cS!^^!aT!aa!eQ!eaR#f!eW`Obc!cQxSS}U#SQ!`_Q#PzQ#V!OQ#b!_Q#d!bQ#s!|Q#w#QQ$P#WQ$V#cQ$Y#xQ$[#{Q$a$ZR$b$]xZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]Q!VXQ!XYQ#[!UR#]!W!QWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]pfPQThknrtv!k!l!s!u#R#k#pQ!gdQ!ieQ#g!fR#h!hSgPn^pQTkrtv#RQ!jhQ#i!kQ#j!lQ#n!sQ#o!uQ$W#kR$X#pQuQR!zv",
  nodeNames: "⚠ DirectiveEnd DocEnd - - ? ? ? Literal QuotedLiteral Anchor Alias Tag BlockLiteralContent Comment Stream BOM Document ] [ FlowSequence Item Tagged Anchored Anchored Tagged FlowMapping Pair Key : Pair , } { FlowMapping Pair Pair BlockSequence Item Item BlockMapping Pair Pair Key Pair Pair BlockLiteral BlockLiteralHeader Tagged Anchored Anchored Tagged Directive DirectiveName DirectiveContent Document",
  maxTerm: 74,
  context: Gk,
  nodeProps: [
    ["isolate", -3, 8, 9, 14, ""],
    ["openedBy", 18, "[", 32, "{"],
    ["closedBy", 19, "]", 33, "}"]
  ],
  propSources: [n2],
  skippedNodes: [0],
  repeatNodeCount: 6,
  tokenData: "-Y~RnOX#PXY$QYZ$]Z]#P]^$]^p#Ppq$Qqs#Pst$btu#Puv$yv|#P|}&e}![#P![!]'O!]!`#P!`!a'i!a!}#P!}#O*g#O#P#P#P#Q+Q#Q#o#P#o#p+k#p#q'i#q#r,U#r;'S#P;'S;=`#z<%l?HT#P?HT?HU,o?HUO#PQ#UU!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PQ#kTOY#PZs#Pt;'S#P;'S;=`#z<%lO#PQ#}P;=`<%l#P~$VQ!f~XY$Qpq$Q~$bO!g~~$gS^~OY$bZ;'S$b;'S;=`$s<%lO$b~$vP;=`<%l$bR%OX!WQOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR%rX!WQ!VPOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR&bP;=`<%l%kR&lUoP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'VUmP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'p[!PP!WQOY#PZp#Ppq#hq{#P{|(f|}#P}!O(f!O!R#P!R![)p![;'S#P;'S;=`#z<%lO#PR(mW!PP!WQOY#PZp#Ppq#hq!R#P!R![)V![;'S#P;'S;=`#z<%lO#PR)^U!PP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR)wY!PP!WQOY#PZp#Ppq#hq{#P{|)V|}#P}!O)V!O;'S#P;'S;=`#z<%lO#PR*nUcP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+XUbP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+rUqP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,]UpP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,vU`P!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#P",
  tokenizers: [Fk, Hk, t2, i2, 0, 1],
  topRules: { Stream: [0, 15] },
  tokenPrec: 0
}), r2 = /* @__PURE__ */ ls.define({
  name: "yaml",
  parser: /* @__PURE__ */ s2.configure({
    props: [
      /* @__PURE__ */ sc.add({
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
        FlowMapping: /* @__PURE__ */ ia({ closing: "}" }),
        FlowSequence: /* @__PURE__ */ ia({ closing: "]" })
      }),
      /* @__PURE__ */ oc.add({
        "FlowMapping FlowSequence": rO,
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
  return new iO(r2);
}
const l2 = { class: "editor-wrapper" }, JT = {
  __name: "SScriptEditor",
  props: /* @__PURE__ */ Ff({
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
    const e = Hf(i, "modelValue"), t = i, n = I(() => {
      const o = t.readonly ? [da, rf(), di.of(jr)] : [da, rf(), Tk, di.of(jr)];
      return t.lang === "yaml" && o.push(o2()), o;
    }), s = G(null), r = I(() => {
      const o = t.height ? { height: `${t.height}px` } : {}, l = t.readonly ? { backgroundColor: "transparent" } : { backgroundColor: "#282c34" };
      return { ...o, ...l };
    });
    return (o, l) => (R(), L("div", l2, [
      V(Ve(xQ), {
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
        style: ct(r.value)
      }, null, 8, ["modelValue", "extensions", "readonly", "style"])
    ]));
  }
}, a2 = {}, c2 = { class: "s-table__form" };
function h2(i, e) {
  return R(), L("div", c2, [
    J(i.$slots, "default")
  ]);
}
const e3 = /* @__PURE__ */ Re(a2, [["render", h2]]), u2 = {
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
    return (e, t) => (R(), L("div", {
      class: Qe(["s-form__item", i.className])
    }, [
      i.showLabel ? (R(), L("div", u2, [
        X("span", null, U(i.label), 1),
        i.required ? (R(), L("span", f2, "*")) : ae("", !0)
      ])) : ae("", !0),
      X("div", {
        class: Qe(["s-form__item-content", [i.contentClass]])
      }, [
        X("div", d2, [
          J(e.$slots, "default", {}, void 0, !0)
        ]),
        e.$slots["outer-append"] ? (R(), L("div", p2, [
          J(e.$slots, "outer-append", {}, void 0, !0)
        ])) : ae("", !0)
      ], 2)
    ], 2));
  }
}, t3 = /* @__PURE__ */ Re(O2, [["__scopeId", "data-v-608bf814"]]), g2 = { class: "s-avatar" }, m2 = {
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
    const e = i, t = I(() => {
      var n;
      return (n = e.className) == null ? void 0 : n.fontWhite;
    });
    return (n, s) => {
      const r = z("v-list-item-title"), o = z("v-list-item"), l = z("v-list"), a = z("v-menu");
      return R(), L("div", g2, [
        V(a, { offset: [5, 0] }, {
          activator: E(({ props: c }) => [
            X("div", Je({ class: "s-user-name" }, c), [
              X("div", {
                class: Qe(["s-user-name__text", { fontWhite: t.value }])
              }, U(i.user.name), 3)
            ], 16)
          ]),
          default: E(() => [
            V(l, { class: "s-avatar-menu__list" }, {
              default: E(() => [
                (R(!0), L(he, null, qe(i.menuItems, (c, h) => (R(), L(he, { key: h }, [
                  c.visable ? ae("", !0) : (R(), se(o, {
                    key: 0,
                    value: c.value,
                    onClick: (u) => n.$emit("click:menu-item", c.value)
                  }, {
                    default: E(() => [
                      V(r, null, {
                        default: E(() => [
                          oe(U(c.title), 1)
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
        J(n.$slots, "badge", {}, void 0, !0)
      ]);
    };
  }
}, y2 = /* @__PURE__ */ Re(m2, [["__scopeId", "data-v-28ffadb1"]]), b2 = "[Image]", Of = {
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
      console.log(b2, "onError"), t("error", o);
    }, s = () => {
    }, r = () => {
    };
    return (o, l) => {
      const a = z("v-img");
      return R(), se(a, Je({
        class: ["s-img", { ...i.className }],
        alt: i.alt,
        "aspect-ratio": i.aspectRatio,
        cover: i.cover,
        eager: i.eager,
        gradient: i.gradient,
        "lazy-src": i.lazySrc && `${i.publicPath}/assets/images/` + i.lazySrc || i.lazySrcUrl,
        options: i.options,
        sizes: i.sizes,
        src: i.src && `${i.publicPath}/assets/images/` + i.src || i.srcUrl,
        srcset: i.srcset,
        transition: i.transition,
        width: i.width
      }, i.bind, {
        onError: n,
        onLoad: s,
        onLoadstart: r
      }), {
        default: E(() => [
          J(o.$slots, "default")
        ]),
        placeholder: E(() => [
          J(o.$slots, "placeholder")
        ]),
        _: 3
      }, 16, ["class", "alt", "aspect-ratio", "cover", "eager", "gradient", "lazy-src", "options", "sizes", "src", "srcset", "transition", "width"]);
    };
  }
}, v2 = {
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
      const a = z("v-card-text"), c = z("v-card-actions"), h = z("v-card"), u = z("v-dialog");
      return R(), se(eo, {
        to: `#${i.teleportId}`
      }, [
        V(u, {
          class: "s-confirm-modal",
          width: "446",
          persistent: "",
          "model-value": i.modelValue,
          "onUpdate:modelValue": n
        }, {
          default: E(() => [
            V(h, { "modal-height": "210" }, {
              default: E(() => [
                V(a, { class: "s-confirm-modal__text" }, {
                  default: E(() => [
                    oe(U(i.contents), 1)
                  ]),
                  _: 1
                }),
                V(c, { class: "button-wrapper" }, {
                  default: E(() => [
                    V(Ve(Hn), {
                      variant: "elevated",
                      color: "blue",
                      onClick: Tt(s, ["stop"]),
                      title: i.confirmButtonText
                    }, null, 8, ["title"]),
                    i.noCancel ? ae("", !0) : (R(), se(Ve(Hn), {
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
}, i3 = /* @__PURE__ */ Re(v2, [["__scopeId", "data-v-e11a4dc9"]]), S2 = { class: "button-wrapper" }, x2 = { class: "s-modal__content" }, w2 = { class: "s-modal__footer" }, Q2 = {
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
    const t = i, n = e, s = () => {
      o.value = !1, n("update:model-value", !1);
    }, r = (l) => {
      o.value = l, n("update:model-value", l);
    }, o = G(t.modelValue);
    return ve(() => t.modelValue, (l) => {
      o.value = l;
    }), (l, a) => {
      const c = z("v-icon"), h = z("v-card"), u = z("v-dialog");
      return R(), se(eo, {
        to: `#${i.teleportId}`
      }, [
        V(u, {
          "model-value": o.value,
          width: i.modalWidth,
          "scroll-strategy": "none",
          class: Qe(["s-modal", i.className]),
          size: i.size,
          persistent: "",
          "onUpdate:modelValue": r
        }, {
          activator: E(({ props: f }) => [
            J(l.$slots, "buttons", km(f, !0), void 0, !0)
          ]),
          default: E(() => [
            V(h, {
              class: Qe(["card-box", i.popupCardClass]),
              height: i.modalHeight,
              "min-height": i.modalHeight,
              "no-line": ""
            }, Mi({
              append: E(() => [
                X("div", w2, [
                  J(l.$slots, "footer", {}, void 0, !0)
                ])
              ]),
              _: 2
            }, [
              i.hideHeader ? void 0 : {
                name: "prepend",
                fn: E(() => [
                  X("div", {
                    class: Qe(["s-modal__title", { "s-modal__title--light": i.isWhite, "s-modal__title--dark": !i.isWhite }])
                  }, [
                    X("span", null, U(i.title), 1),
                    X("div", S2, [
                      J(l.$slots, "header-btn-append", {}, void 0, !0),
                      V(Ve(Hn), {
                        class: "modal--cancel",
                        elevation: "0",
                        dense: "",
                        variant: "text",
                        "max-width": "24px",
                        height: "24px",
                        onClick: s
                      }, {
                        default: E(() => [
                          V(c, {
                            color: i.isWhite ? "#1A3350" : "#fff",
                            size: "x-large"
                          }, {
                            default: E(() => a[0] || (a[0] = [
                              oe("mdi-close")
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
                fn: E(() => [
                  X("div", x2, [
                    J(l.$slots, "default", {}, void 0, !0)
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
}, n3 = /* @__PURE__ */ Re(Q2, [["__scopeId", "data-v-25cb6139"]]), k2 = {
  style: { width: "0", height: "0", position: "absolute" },
  "aria-hidden": "true",
  focusable: "false"
}, P2 = ["viewBox"], tr = 20, $2 = {
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
    const e = i, t = I(() => Math.max(0, Math.min(100, parseFloat(0)))), n = 2 * Math.PI * tr, s = (a, c = "px") => {
      if (!(a === null || a === ""))
        return isNaN(a) ? String(a) : isFinite(a) ? `${Number(a)}${c}` : void 0;
    }, r = I(() => tr / (1 - e.width / e.size) * 2), o = I(() => e.width / e.size * r.value), l = I(() => s((100 - t.value) / 100 * n));
    return mn(() => {
    }), (a, c) => (R(), L("div", {
      class: "s-progress-circular",
      style: ct({ height: i.size + "px", width: i.size + "px", "--stroke-width": i.width + "px" })
    }, [
      (R(), L("svg", k2, c[0] || (c[0] = [
        X("linearGradient", { id: "gradientColor" }, [
          X("stop", {
            offset: "0%",
            "stop-color": "#1B75BB"
          }),
          X("stop", {
            offset: "100%",
            "stop-color": "#7C0F80"
          })
        ], -1)
      ]))),
      (R(), L("svg", {
        class: "s-progress-circular__wrapper",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${r.value} ${r.value}`
      }, [
        X("circle", {
          class: "s-progress-circular__underlay",
          cx: "50%",
          cy: "50%",
          fill: "transparent",
          r: tr,
          style: ct({
            strokeWidth: o.value,
            strokeDasharray: n,
            strokeDashoffset: 0
          })
        }, null, 4),
        X("circle", {
          class: "s-progress-circular__overlay",
          fill: "transparent",
          cx: "50%",
          cy: "50%",
          r: tr,
          style: ct({
            strokeWidth: o.value,
            strokeDasharray: n,
            strokeDashoffset: l.value
          })
        }, null, 4)
      ], 8, P2))
    ], 4));
  }
}, C2 = { class: "s-loading" }, Z2 = { class: "s-loading__message" }, T2 = { class: "s-loading__spinner" }, s3 = {
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
    return (e, t) => (R(), se(eo, {
      to: `#${i.teleportId}`
    }, [
      V(Ve(r1), {
        "model-value": i.modelValue,
        class: "custom-overlay",
        contained: "",
        persistent: "",
        "no-click-animation": "",
        scrim: "transparent",
        "z-index": "9999",
        offset: [0, 50]
      }, {
        default: E(() => [
          X("div", C2, [
            X("div", Z2, U(i.loadingMessage), 1),
            X("div", T2, [
              V($2)
            ]),
            t[0] || (t[0] = X("div", { class: "s-loading__text" }, "Please wait...", -1))
          ])
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 8, ["to"]));
  }
}, A2 = /^[a-zA-Z]+$/, M2 = /^[a-zA-Z0-9-]+$/, R2 = /[^a-zA-Z0-9!@#$%^&*(),.?":;{}|<>~`'[\]\\/\-_+=]/g, _2 = /[\u3131-\u318E\uAC00-\uD7A3]/g, X2 = /(?:www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(?:\.[a-zA-Z]{2,})?$/, E2 = { REG_ALLOW_ENG: A2, REG_ALLOW_ENG_NUM_HYPHEN: M2, REG_ALLOW_ENG_NUM_AND_SPECIAL_CHARS: R2, REG_ALLOW_KOR: _2, REG_DOMAIN: X2 }, L2 = [void 0, null, "", "undefined"], D2 = (i) => {
  if (typeof i != "string")
    return !1;
  const e = i.trim();
  return !!L2.includes(e);
}, j2 = (i) => {
  if (typeof i != "string")
    throw Error("Invalid stringData type");
  return i.replace(E2.REG_ALLOW_KOR, "");
}, B2 = (i, e) => i.replace(/{([a-zA-Z]+)}/g, (t, n) => e[n]), Yg = {
  isEmpty: D2,
  removeKoreanCharacters: j2,
  resolvePathVariable: B2
}, V2 = { class: "s-card-table__wrapper" }, q2 = {
  key: 0,
  class: "s-card-table__header"
}, W2 = { class: "s-card-table__header-item" }, I2 = {
  key: 0,
  class: "s-card-table__header-item-title",
  style: { width: "50px" }
}, z2 = { class: "s-card-table__body-row" }, N2 = {
  key: 0,
  class: "s-card__body-icon--expand"
}, U2 = {
  key: 1,
  style: { width: "50px" }
}, Y2 = {
  key: 0,
  class: "s-card-table__body-row-expand"
}, r3 = {
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
    const { isEmpty: t } = Yg, n = i, s = e, r = G(1), o = I({
      get: () => n.page,
      set: (O) => s("update:page", O)
    }), l = I(() => n.headers.filter((O) => O.key !== n.itemTitle)), a = I(() => {
      var O;
      if (!((O = n.options) != null && O.pageCnt)) {
        const x = (n.page - 1) * n.itemsPerPage, w = x + n.itemsPerPage;
        return c.value.slice(x, w);
      }
      return c.value;
    }), c = I(() => {
      if (n.search) {
        const O = n.headers.map((w) => w.key);
        return n.datas.filter(
          (w) => O.some((P) => w[P] ? typeof w[P] == typeof {} || typeof w[P] == typeof [] ? JSON.stringify(w[P]).indexOf(n.search) > -1 : w[P].toString().indexOf(n.search) > -1 : !1)
        );
      }
      if (n.smartSearch.length)
        return n.datas.filter((x) => {
          const w = n.smartSearch.reduce((P, $) => (P[$.key] || (P[$.key] = []), P[$.key].push($), P), {});
          return Object.entries(w).every(([P, $]) => {
            var M;
            return P === "undefinedTag" ? !((M = x.tagList) != null && M.length) : $.some((b) => {
              var Q;
              return b.value ? b.type === "tag" && ((Q = x.tagList) != null && Q.length) ? x.tagList.some(
                (v) => v.tagKey.toLowerCase() === b.key.toLowerCase() && v.tagValue.toLowerCase() === b.value.toLowerCase()
              ) : b.type !== "tag" ? typeof x[b.key] == "object" ? JSON.stringify(x[b.key]).toLowerCase().indexOf(b.value.toLowerCase()) > -1 : typeof x[b.key] == "number" ? x[b.key].toString().indexOf(b.value) > -1 : x[b.key].toLowerCase().indexOf(b.value.toLowerCase()) > -1 : !1 : !0;
            });
          });
        });
      if (n.search) {
        const O = n.headers.map((w) => w.key);
        return n.datas.filter(
          (w) => O.some((P) => w[P] ? typeof w[P] == typeof {} || typeof w[P] == typeof [] ? JSON.stringify(w[P]).indexOf(n.search) > -1 : w[P].toString().indexOf(n.search) > -1 : !1)
        );
      }
      return n.datas || [];
    }), h = G([]), u = (O) => {
      n.selectStrategy === "single" ? h.value.includes(O[n.itemValue]) ? h.value = [] : h.value = [O[n.itemValue]] : h.value.includes(O[n.itemValue]) ? h.value = h.value.filter((x) => x !== O[n.itemValue]) : h.value.push(O[n.itemValue]), s("update:selected", h.value);
    }, f = (O) => {
      o.value = O, r.value = O;
    }, d = (O) => {
      f(O);
    }, p = I(() => {
      var O;
      return ((O = n.options) == null ? void 0 : O.pageCnt) || Math.ceil(c.value.length / n.itemsPerPage);
    }), g = I(() => (O) => typeof O == "number" ? `${O}%` : O || "100px"), m = (O) => {
      console.log("onClickExpand"), O.showExpandRow = !O.showExpandRow;
    };
    return ve(
      () => [n.search, n.smartSearch],
      () => {
        f(1);
      },
      { deep: !0 }
    ), ve(
      () => c.value,
      (O) => {
        n.setTotal(O.length);
      }
    ), mn(() => {
      r.value = n.page;
    }), (O, x) => {
      var M;
      const w = z("v-btn"), P = z("v-checkbox-btn"), $ = z("v-pagination");
      return R(), L("div", {
        class: Qe(`s-card-table ${n.class}`)
      }, [
        X("div", V2, [
          i.hiddenHeader ? ae("", !0) : (R(), L("div", q2, [
            X("ul", W2, [
              i.showSelect ? (R(), L("li", I2)) : ae("", !0),
              (R(!0), L(he, null, qe(l.value, (b, Q) => (R(), L("li", {
                key: "header-key--" + Q,
                class: "s-card-table__header-item-title",
                style: ct({
                  width: g.value(b.width),
                  justifyContent: b.align
                })
              }, U(b.title), 5))), 128))
            ])
          ])),
          a.value.length ? (R(!0), L(he, { key: 1 }, qe(a.value, (b, Q) => (R(), L("ul", {
            key: "content-row--" + Q,
            class: "s-card-table__body"
          }, [
            X("li", z2, [
              X("div", {
                class: Qe(`s-card-table__body-item ${i.showExpand ? "table-expand_header" : "table-expand_body"}`)
              }, [
                i.showExpand ? (R(), L("div", N2, [
                  J(O.$slots, "table-expand", {
                    item: b,
                    expanded: b.showExpandRow,
                    onClickExpand: m
                  }, () => [
                    V(w, {
                      density: "comfortable",
                      variant: "text",
                      icon: b.showExpandRow ? "mdi-chevron-up" : "mdi-chevron-down",
                      onClick: Tt((v) => m(b), ["stop", "prevent"])
                    }, null, 8, ["icon", "onClick"])
                  ])
                ])) : ae("", !0),
                i.showSelect ? (R(), L("div", U2, [
                  J(O.$slots, "table-select", { item: b }, () => [
                    V(P, {
                      "model-value": h.value.includes(b[i.itemValue]),
                      "onUpdate:modelValue": (v) => u(b)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ])
                ])) : ae("", !0),
                (R(!0), L(he, null, qe(l.value, (v, T) => {
                  var C, k;
                  return R(), L("div", {
                    key: "content-row--" + Q + "__col--" + T,
                    class: Qe(["s-card-table__body-wrapper", { "strong-text": (k = (C = i.options) == null ? void 0 : C.strongs) == null ? void 0 : k.includes(v.key) }]),
                    style: ct({
                      width: g.value(v.width),
                      justifyContent: v.align === "d-none" ? "center" : v.align || "center"
                    })
                  }, [
                    J(O.$slots, `${v.key}`, { item: b }, () => [
                      oe(U(Ve(t)(b[v.key]) ? "-" : b[v.key]), 1)
                    ])
                  ], 6);
                }), 128))
              ], 2),
              b.showExpandRow ? (R(), L("div", Y2, [
                J(O.$slots, "expanded-row", {
                  item: b,
                  columns: l.value
                })
              ])) : ae("", !0)
            ])
          ]))), 128)) : (R(), se(w1, {
            key: 2,
            description: i.noDataText,
            class: "s-card-table__empty"
          }, {
            default: E(() => [
              J(O.$slots, "empty-content")
            ]),
            _: 3
          }, 8, ["description"]))
        ]),
        i.scrolled ? ae("", !0) : (R(), se($, {
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
}, G2 = { class: "text-center no-data" }, F2 = { class: "v-data-table__tr" }, H2 = ["width"], K2 = {
  key: 0,
  class: "text-center s-data-table-pagination"
}, J2 = {
  __name: "SDataTable",
  props: {
    clickRow: {
      type: Function,
      default: null
    },
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
    // sortBy: {
    //   type: Array,
    //   default: () => [],
    //   description:
    //     '정렬 순서에 사용해야 하는 항목 속성을 변경합니다. .sync수정자 와 함께 사용할 수 있습니다.',
    // },
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
    "get-checkedbox-item"
  ],
  setup(i, { emit: e }) {
    const { isEmpty: t } = Yg, n = e, s = i, r = G([]), o = G(1);
    G(1);
    const l = G([]), a = G([]), c = (O) => {
      n("get-checkedbox-item", O), r.value = O, n("update:model-value", r.value);
    }, h = I(() => {
      if (s.search) {
        const O = s.headers.map((w) => w.key);
        return s.items.filter(
          (w) => O.some((P) => w[P] ? typeof w[P] == typeof {} || typeof w[P] == typeof [] ? JSON.stringify(w[P]).toLowerCase().indexOf(s.search.toLowerCase()) > -1 : w[P].toString().toLowerCase().indexOf(s.search.toLowerCase()) > -1 : !1)
        );
      }
      return s.smartSearch.length ? s.items.filter((x) => {
        const w = s.smartSearch.reduce((P, $) => (P[$.key] || (P[$.key] = []), P[$.key].push($), P), {});
        return Object.entries(w).every(([P, $]) => {
          var M;
          return P === "undefinedTag" ? !((M = x.tagList) != null && M.length) : $.some((b) => {
            var Q;
            return b.value ? b.type === "tag" && ((Q = x.tagList) != null && Q.length) ? x.tagList.some(
              (v) => v.tagKey.toLowerCase() === b.key.toLowerCase() && v.tagValue.toLowerCase() === b.value.toLowerCase()
            ) : b.type !== "tag" ? typeof x[b.key] == "object" ? JSON.stringify(x[b.key]).toLowerCase().indexOf(b.value.toLowerCase()) > -1 : typeof x[b.key] == "number" ? x[b.key].toString().indexOf(b.value) > -1 : x[b.key].toLowerCase().indexOf(b.value.toLowerCase()) > -1 : !1 : !0;
          });
        });
      }) : s.items || [];
    }), u = I(() => {
      var O;
      return ((O = s.options) == null ? void 0 : O.pageCnt) || Math.ceil(h.value.length / s.itemsPerPage);
    }), f = I(() => {
      var O;
      if (!((O = s.options) != null && O.pageCnt)) {
        const x = (s.page - 1) * s.itemsPerPage, w = x + s.itemsPerPage;
        return h.value.slice(x, w);
      }
      return h.value;
    }), d = G(), p = (O) => {
      n("update:page", O);
    }, g = I({
      get: () => s.page,
      set: (O) => n("update:page", O)
    });
    ve(
      () => s.headers,
      (O) => {
        a.value = O;
      }
    ), mn(() => {
      r.value = s.modelValue, o.value = s.page, a.value = [...s.headers];
    });
    const m = (O) => O.highlight || "";
    return (O, x) => {
      const w = z("v-tooltip"), P = z("v-checkbox-btn"), $ = z("v-pagination"), M = z("v-data-table");
      return R(), se(M, Je({
        ref_key: "sDataTableRef",
        ref: d,
        class: "s-data-table"
      }, O.$attrs, {
        headers: a.value,
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
        expanded: i.expanded,
        "expand-on-click": i.expandOnClick,
        "item-class": m,
        "onUpdate:modelValue": c,
        "onUpdate:options": x[0] || (x[0] = (b) => O.$emit("update:options", b)),
        "onUpdate:expanded": x[1] || (x[1] = (b) => O.$emit("update:expanded", b))
      }), Mi({
        "header.data-table-select": E(({ allSelected: b, selectAll: Q, someSelected: v }) => [
          J(O.$slots, "header.data-table-select", { selectAll: Q }, () => [
            V(P, {
              indeterminate: v && !b,
              "model-value": b,
              "onUpdate:modelValue": (T) => Q(!b)
            }, null, 8, ["indeterminate", "model-value", "onUpdate:modelValue"])
          ], !0)
        ]),
        "item.data-table-select": E(({ internalItem: b, isSelected: Q, toggleSelect: v }) => [
          J(O.$slots, "item.data-table-select", {
            internalItem: b,
            isSelected: Q,
            toggleSelect: v
          }, () => [
            b.selectable ? (R(), se(P, {
              key: 0,
              "model-value": Q(b),
              "onUpdate:modelValue": (T) => v(b)
            }, null, 8, ["model-value", "onUpdate:modelValue"])) : (R(), L(he, { key: 1 }, [], 64))
          ], !0)
        ]),
        "no-data": E(() => [
          X("div", G2, U(i.noDataText), 1)
        ]),
        bottom: E(() => {
          var b;
          return [
            J(O.$slots, "append-content", {}, void 0, !0),
            i.hideFooter ? ae("", !0) : (R(), L("div", K2, [
              V($, {
                "model-value": g.value,
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
        O.$slots.headers ? {
          name: "headers",
          fn: E((b) => [
            J(O.$slots, "headers", qi(Wi(b)), void 0, !0)
          ]),
          key: "0"
        } : void 0,
        qe(i.headers, (b, Q) => ({
          name: `item.${b.key}`,
          fn: E(({ item: v }) => [
            i.tooltip ? (R(), se(w, {
              key: 0,
              location: "bottom"
            }, {
              activator: E(({ props: T }) => [
                X("span", Je(T, {
                  class: ["d-inline-block text-truncate sp-table-column__text", [
                    v.highlight
                  ]]
                }), U(Ve(t)(v[b.key]) ? "-" : v[b.key]), 17)
              ]),
              default: E(() => [
                X("span", null, U(Ve(t)(v[b.key]) ? "-" : v[b.key]), 1)
              ]),
              _: 2
            }, 1024)) : (R(), L("div", {
              key: 1,
              class: Qe([
                v.highlight
              ])
            }, [
              J(O.$slots, `item.${b.key}`, { item: v }, () => [
                oe(U(Ve(t)(v[b.key]) ? "-" : v[b.key]), 1)
              ], !0)
            ], 2))
          ])
        })),
        i.footers && Object.keys(i.footers).length ? {
          name: "tfoot",
          fn: E(() => [
            X("tfoot", null, [
              X("tr", F2, [
                (R(!0), L(he, null, qe(i.headers, (b, Q) => (R(), L("td", {
                  class: "v-data-table__td",
                  key: "foot__" + Q,
                  width: b.width,
                  style: ct({ textAlign: b.align || "start" })
                }, [
                  O.$slots[`footer.${b.key}`] ? (R(), L("span", {
                    key: 0,
                    class: Qe([i.footers.highlight])
                  }, [
                    J(O.$slots, `footer.${b.key}`, { props: i.footers }, void 0, !0)
                  ], 2)) : (R(), L("span", {
                    key: 1,
                    class: Qe([i.footers.highlight])
                  }, U(i.footers[b.key]), 3))
                ], 12, H2))), 128))
              ])
            ])
          ]),
          key: "1"
        } : void 0,
        O.$slots.item ? {
          name: "item",
          fn: E((b) => [
            J(O.$slots, "item", qi(Wi(b)), void 0, !0)
          ]),
          key: "2"
        } : void 0,
        O.$slots.body ? {
          name: "body",
          fn: E((b) => [
            J(O.$slots, "body", qi(Wi(b)), void 0, !0)
          ]),
          key: "3"
        } : void 0,
        O.$slots["body.append"] ? {
          name: "body.append",
          fn: E((b) => [
            J(O.$slots, "body.append", qi(Wi(b)), void 0, !0)
          ]),
          key: "4"
        } : void 0,
        O.$slots.tbody ? {
          name: "tbody",
          fn: E((b) => [
            J(O.$slots, "tbody", qi(Wi(b)), void 0, !0)
          ]),
          key: "5"
        } : void 0,
        O.$slots["expanded-row"] ? {
          name: "expanded-row",
          fn: E((b) => [
            J(O.$slots, "expanded-row", qi(Wi(b)), void 0, !0)
          ]),
          key: "6"
        } : void 0
      ]), 1040, ["headers", "items", "page", "items-per-page", "search", "sort-by", "item-value", "show-select", "return-object", "model-value", "select-strategy", "loading", "hover", "show-expand", "expanded", "expand-on-click"]);
    };
  }
}, o3 = /* @__PURE__ */ Re(J2, [["__scopeId", "data-v-ecbb0776"]]), eP = {}, tP = {
  width: "190",
  height: "33",
  viewBox: "0 0 190 33",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function iP(i, e) {
  return R(), L("svg", tP, e[0] || (e[0] = [
    Pm('<g clip-path="url(#clip0_1478_17785)"><path d="M49.0053 0H33.0018C28.5846 0 25 3.58456 25 8.00176V24.0053C25 28.4225 28.5846 32.0071 33.0018 32.0071H49.0053C53.4225 32.0071 57.0071 28.4225 57.0071 24.0053V8.00176C57 3.58456 53.4225 0 49.0053 0ZM31.1389 20.2867C28.7751 20.2867 26.8558 18.3674 26.8558 16.0035C26.8558 13.6397 28.7751 11.7204 31.1389 11.7204C33.5028 11.7204 35.4221 13.6397 35.4221 16.0035C35.4221 18.3674 33.5028 20.2867 31.1389 20.2867ZM49.6827 20.2867C48.2573 20.2867 46.9943 19.5881 46.2181 18.5155C45.4701 17.7394 44.7292 18.1204 44.3694 18.4238C43.6002 19.5528 42.3019 20.2937 40.8342 20.2937C38.4703 20.2937 36.551 18.3744 36.551 16.0106C36.551 13.6467 38.4703 11.7275 40.8342 11.7275C42.2948 11.7275 43.5861 12.4613 44.3623 13.5832C44.7222 13.8867 45.4701 14.2889 46.2322 13.4845C47.0084 12.419 48.2644 11.7275 49.6827 11.7275C52.0465 11.7275 53.9658 13.6467 53.9658 16.0106C53.9658 18.3744 52.0465 20.2937 49.6827 20.2937V20.2867ZM54.3045 20.1032C53.8318 20.1032 53.4507 19.7222 53.4507 19.2494C53.4507 18.7766 53.8318 18.3956 54.3045 18.3956C54.7773 18.3956 55.1583 18.7766 55.1583 19.2494C55.1583 19.7222 54.7773 20.1032 54.3045 20.1032Z" fill="white"></path><path d="M106.935 3.85976C106.865 1.71466 105.101 0 102.941 0H99.6884C99.2721 0 98.9404 0.338699 98.9404 0.74796V7.24675C98.9404 7.66307 99.2791 7.99471 99.6884 7.99471H102.941C105.15 7.99471 106.942 6.20243 106.942 3.99383C106.942 3.97971 106.942 3.9656 106.942 3.95149C106.942 3.91621 106.942 3.88798 106.942 3.8527L106.935 3.85976ZM102.941 6.49879H100.443V1.50298H102.941C104.324 1.50298 105.439 2.62492 105.439 4.00088C105.439 5.37685 104.317 6.49879 102.941 6.49879Z" fill="white"></path><path d="M71.8443 6.83043C72.1548 6.51996 72.1548 6.01191 71.8443 5.70143C71.5339 5.39096 71.0399 5.39096 70.7224 5.69438C70.7224 5.69438 70.7224 5.69438 70.7153 5.70143C70.7153 5.70143 70.7153 5.70849 70.7083 5.71555C70.2778 6.14598 69.6781 6.40706 69.0218 6.40706C68.3656 6.40706 67.7588 6.13892 67.3213 5.70143C66.8908 5.26395 66.6157 4.67122 66.6157 4.00088C66.6157 3.33054 66.8767 2.74487 67.3072 2.31444C67.3072 2.31444 67.3072 2.31444 67.3213 2.30739L67.3283 2.29327C67.7588 1.86284 68.3585 1.60176 69.0148 1.60176C69.671 1.60176 70.2567 1.86284 70.6871 2.28622C70.6942 2.28622 70.7012 2.30033 70.7083 2.30739C70.7153 2.31444 70.7224 2.3215 70.7294 2.32856C71.0399 2.61786 71.5338 2.61081 71.8373 2.30739C72.1407 2.00397 72.1477 1.51709 71.8584 1.19956C71.8584 1.1925 71.8443 1.18545 71.8373 1.17839C71.8302 1.17133 71.8232 1.16428 71.809 1.15017C71.0893 0.437486 70.1014 0 69.0077 0C67.914 0 66.9261 0.437486 66.2064 1.15017C66.1993 1.15722 66.1923 1.16428 66.1782 1.17839C66.1782 1.17839 66.1641 1.1925 66.157 1.19956C65.4443 1.91929 65.0068 2.90717 65.0068 4.00088C65.0068 5.0946 65.4514 6.10364 66.1782 6.83043C66.905 7.55722 67.8999 8.00176 69.0077 8.00176C70.1155 8.00176 71.1105 7.55722 71.8373 6.83043H71.8443Z" fill="white"></path><path d="M85.9779 0C83.7693 0 81.9771 1.79228 81.9771 4.00088C81.9771 6.20948 83.7693 8.00176 85.9779 8.00176C88.1865 8.00176 89.9788 6.20948 89.9788 4.00088C89.9788 1.79228 88.1865 0 85.9779 0ZM85.9779 6.4C84.6514 6.4 83.5788 5.32745 83.5788 4.00088C83.5788 2.67431 84.6514 1.60176 85.9779 1.60176C87.3045 1.60176 88.3771 2.67431 88.3771 4.00088C88.3771 5.32745 87.3045 6.4 85.9779 6.4Z" fill="white"></path><path d="M80.7 6.4H77.4965C76.8332 6.4 76.2334 6.13186 75.7959 5.69438C75.3655 5.25689 75.0903 4.66417 75.0903 3.99383V0.797354C75.0903 0.352811 74.7304 0 74.293 0C74.0742 0 73.8696 0.091731 73.7285 0.232856C73.5803 0.37398 73.4956 0.578611 73.4956 0.797354V4.00088C73.4956 5.10871 73.9402 6.10364 74.6669 6.83043C75.3937 7.55722 76.3887 8.00176 77.4965 8.00176H80.7C80.9188 8.00176 81.1234 7.91003 81.2645 7.76891C81.4127 7.62778 81.4974 7.42315 81.4974 7.20441C81.4974 6.75987 81.1375 6.40706 80.7 6.40706V6.4Z" fill="white"></path><path d="M98.2206 0.232856C98.0794 0.0846748 97.8748 0 97.6561 0C97.2115 0 96.8587 0.359868 96.8587 0.797354V4.00088C96.8587 4.66417 96.5906 5.26395 96.1531 5.70143C95.7156 6.13186 95.1158 6.40706 94.4525 6.40706C93.7893 6.40706 93.1895 6.13892 92.752 5.70143C92.3216 5.26395 92.0464 4.67122 92.0464 4.00088V1.60176V0.80441C92.0464 0.359868 91.6865 0.00705623 91.249 0.00705623C91.0303 0.00705623 90.8256 0.0987872 90.6845 0.239912C90.5363 0.381036 90.4517 0.585667 90.4517 0.80441V4.00794C90.4517 5.11577 90.8962 6.11069 91.623 6.83749C92.3498 7.56428 93.3447 8.00882 94.4525 8.00882C95.5604 8.00882 96.5553 7.56428 97.2821 6.83749C98.0089 6.11069 98.4534 5.11577 98.4534 4.00794V0.797354C98.4534 0.578611 98.3617 0.37398 98.2206 0.232856Z" fill="white"></path><path d="M114.471 16.4689C114.182 16.1796 113.779 15.9961 113.342 15.9961H106.942C104.733 15.9961 102.736 16.8922 101.29 18.3388C99.8434 19.7853 98.9473 21.7822 98.9473 23.9908V30.3908C98.9473 30.8353 99.1237 31.2305 99.42 31.5198C99.7093 31.8091 100.112 31.9926 100.549 31.9926C101.431 31.9926 102.151 31.2728 102.151 30.3908V23.9908C102.151 22.6642 102.687 21.4647 103.555 20.5968C104.423 19.7288 105.622 19.1926 106.949 19.1926H113.349C114.231 19.1926 114.951 18.4728 114.951 17.5908C114.951 17.1463 114.774 16.7511 114.478 16.4618L114.471 16.4689Z" fill="white"></path><path d="M129.557 18.3458C129.557 18.3458 129.522 18.3106 129.501 18.2964C128.061 16.8781 126.086 16.0032 123.898 16.0032C121.711 16.0032 119.735 16.8781 118.296 18.2964C118.274 18.3106 118.26 18.3317 118.239 18.3458C118.218 18.36 118.204 18.3811 118.197 18.3952C116.779 19.8347 115.896 21.8175 115.896 24.0049C115.896 26.1924 116.793 28.2105 118.239 29.664C119.686 31.1106 121.683 32.0067 123.898 32.0067C125.698 32.0067 127.363 31.414 128.696 30.4049V30.1086C128.696 30.1086 128.718 30.1086 128.725 30.1086C128.704 30.2074 128.696 30.3062 128.696 30.412C128.696 31.3011 129.416 32.0138 130.298 32.0138C131.18 32.0138 131.9 31.294 131.9 30.412V24.012C131.9 21.8246 131.025 19.8418 129.6 18.4023C129.586 18.3882 129.571 18.367 129.557 18.3529V18.3458ZM127.321 27.3778C127.321 27.3778 127.292 27.406 127.278 27.4202C126.41 28.274 125.218 28.8032 123.905 28.8032C122.593 28.8032 121.379 28.2669 120.511 27.399C119.643 26.5311 119.107 25.3315 119.107 24.0049C119.107 22.6925 119.636 21.5 120.49 20.6321C120.504 20.6179 120.518 20.6038 120.532 20.5897C121.4 19.7359 122.593 19.2067 123.905 19.2067C125.218 19.2067 126.389 19.7218 127.257 20.5686C127.285 20.5968 127.313 20.625 127.342 20.6532C128.188 21.5211 128.704 22.6995 128.704 24.0049C128.704 25.3103 128.174 26.517 127.321 27.3778Z" fill="white"></path><path d="M157.825 16.0032C153.407 16.0032 149.823 19.5877 149.823 24.0049C149.823 28.4221 153.407 32.0067 157.825 32.0067C162.242 32.0067 165.826 28.4221 165.826 24.0049C165.826 19.5877 162.242 16.0032 157.825 16.0032ZM157.825 28.8032C155.171 28.8032 153.026 26.6581 153.026 24.0049C153.026 21.3518 155.171 19.2067 157.825 19.2067C160.478 19.2067 162.623 21.3589 162.623 24.0049C162.623 26.651 160.471 28.8032 157.825 28.8032Z" fill="white"></path><path d="M96.3788 16.0032H83.5788C82.6968 16.0032 81.9771 16.7229 81.9771 17.6049C81.9771 18.487 82.6968 19.2067 83.5788 19.2067H88.3771V30.4049C88.3771 31.287 89.0968 32.0067 89.9788 32.0067C90.8608 32.0067 91.5806 31.287 91.5806 30.4049V19.2067H96.3788C97.2608 19.2067 97.9806 18.487 97.9806 17.6049C97.9806 16.7229 97.2608 16.0032 96.3788 16.0032Z" fill="white"></path><path d="M147.261 16.0032H134.461C133.579 16.0032 132.859 16.7229 132.859 17.6049C132.859 18.487 133.579 19.2067 134.461 19.2067H139.259V30.4049C139.259 31.287 139.979 32.0067 140.861 32.0067C141.743 32.0067 142.463 31.287 142.463 30.4049V19.2067H147.261C148.143 19.2067 148.863 18.487 148.863 17.6049C148.863 16.7229 148.143 16.0032 147.261 16.0032Z" fill="white"></path><path d="M77.8139 20.8226C77.0024 20.3992 76.0781 20.1593 75.0902 20.1593H68.6902C68.4221 20.1593 68.2104 19.9476 68.2104 19.6794C68.2104 19.4113 68.4221 19.1996 68.6902 19.1996H76.2121C77.0942 19.1996 77.8139 18.4799 77.8139 17.5979C77.8139 16.7158 77.0942 15.9961 76.2121 15.9961H68.6902C66.8203 15.9961 65.275 17.3932 65.0421 19.1996C65.028 19.3125 65.0139 19.4325 65.0139 19.5524C65.0139 19.5948 65.0139 19.6371 65.0139 19.6794C65.0139 19.7218 65.0139 19.7641 65.0139 19.8065C65.0139 19.9264 65.028 20.0464 65.0421 20.1593C65.275 21.9657 66.8203 23.3628 68.6902 23.3628H75.0902C76.572 23.3628 77.7786 24.5553 77.8139 26.0301V26.1359C77.7857 27.6177 76.572 28.8032 75.0902 28.8032H66.6086C65.7266 28.8032 65.0068 29.5229 65.0068 30.4049C65.0068 31.2869 65.7266 32.0067 66.6086 32.0067H75.0902C76.071 32.0067 76.9954 31.7668 77.8139 31.3434C78.9006 30.7859 79.7896 29.8969 80.3541 28.8032C80.7775 27.9917 81.0174 27.0673 81.0174 26.0794C81.0174 25.0916 80.7775 24.1743 80.3541 23.3557C79.7896 22.2691 78.9006 21.38 77.8139 20.8155V20.8226Z" fill="white"></path></g><defs><clipPath id="clip0_1478_17785"><rect width="165.826" height="32.0137" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const nP = /* @__PURE__ */ Re(eP, [["render", iP]]), sP = { class: "s-logo" }, rP = ["src"], oP = {
  key: 0,
  class: "s-item-group"
}, lP = {
  key: 1,
  class: "s-item-group"
}, aP = { class: "s-avater__border" }, cP = { id: "side_menu_background" }, hP = { class: "text-right" }, uP = { id: "side_menu_wrapper" }, fP = {
  key: 0,
  class: "side-menu-footer"
}, dP = {
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
    }, l = (c) => {
      n("click:menu-item", c);
    }, a = (c) => {
      n("click:service-item", c);
    };
    return ve(
      () => t.showMenu,
      (c, h) => {
        c !== h && (s.value = c);
      }
    ), (c, h) => {
      const u = z("v-icon"), f = z("v-btn"), d = z("v-app-bar-title"), p = z("v-avatar"), g = z("v-app-bar"), m = z("v-list-item");
      return R(), L(he, null, [
        V(g, {
          class: "s-header",
          color: "#1C2536",
          height: 68
        }, {
          prepend: E(() => [
            X("div", sP, [
              X("a", {
                "href.prevent.stop": "#",
                onClick: h[0] || (h[0] = (O) => c.$emit("click:logo"))
              }, [
                h[5] || (h[5] = X("span", { class: "d-none" }, "main-logo", -1)),
                i.logoSrc ? (R(), L("img", {
                  key: 0,
                  class: "s-logo__img",
                  src: i.logoSrc,
                  alt: "logo"
                }, null, 8, rP)) : (R(), se(nP, {
                  key: 1,
                  class: "s-logo__img"
                }))
              ])
            ]),
            V(d, {
              density: "compact",
              variant: "flat",
              size: "small",
              "background-color": "white"
            }, {
              default: E(() => [
                i.showMenuBtn ? (R(), se(f, {
                  key: 0,
                  class: "s-btn__menu",
                  text: "서비스",
                  onClick: r
                }, {
                  prepend: E(() => [
                    V(u, {
                      class: "s-btn__menu__icon",
                      variant: "text",
                      density: "compact",
                      icon: "mdi-menu"
                    })
                  ]),
                  _: 1
                })) : ae("", !0)
              ]),
              _: 1
            })
          ]),
          append: E(() => [
            i.isLoggedIn ? (R(), L("div", lP, [
              J(c.$slots, "inner-append", {}, void 0, !0),
              V(Ve(y2), {
                user: i.userInfo,
                "menu-items": i.userMenus,
                "class-name": { fontWhite: !0 },
                "onClick:menuItem": l
              }, {
                badge: E(() => [
                  V(p, null, {
                    default: E(() => [
                      X("div", aP, [
                        i.userInfo.picture ? (R(), se(Ve(Of), {
                          key: 0,
                          "lazy-src": "profile.svg",
                          "src-url": `data:image/${i.userInfo.picture.format};base64,${i.userInfo.picture.data}`
                        }, null, 8, ["src-url"])) : (R(), se(Ve(Of), {
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
            ])) : (R(), L("div", oP, [
              X("a", {
                class: "s-sign__btn",
                onKeypress: h[1] || (h[1] = Gn(Tt((O) => c.$emit("click:log-in"), ["ctrl"]), ["i"])),
                onClick: h[2] || (h[2] = Tt((O) => c.$emit("click:log-in"), ["stop"]))
              }, U(i.loginText), 33),
              X("a", {
                class: "s-sign__btn",
                onKeypress: h[3] || (h[3] = Gn(Tt((O) => c.$emit("click:sign-up"), ["ctrl"]), ["i"])),
                onClick: h[4] || (h[4] = Tt((O) => c.$emit("click:sign-up"), ["stop"]))
              }, U(i.joinText), 33)
            ]))
          ]),
          _: 3
        }),
        X("div", {
          class: Qe(["menu-back-ground", { show: s.value, hide: !s.value }])
        }, [
          X("div", cP, [
            X("div", hP, [
              V(u, {
                icon: "mdi-close",
                onClick: o
              })
            ]),
            X("div", uP, [
              (R(!0), L(he, null, qe(i.serviceMenus, (O, x) => (R(), L(he, null, [
                O.accessible ? (R(), se(m, {
                  key: x,
                  class: "side-menu",
                  active: O.menuCode === i.activeMenuCode,
                  title: O.menuName,
                  onClick: (w) => a(O)
                }, null, 8, ["active", "title", "onClick"])) : ae("", !0)
              ], 64))), 256))
            ]),
            c.$slots["side-menu-footer"] ? (R(), L("div", fP, [
              J(c.$slots, "side-menu-footer", {}, void 0, !0)
            ])) : ae("", !0)
          ])
        ], 2)
      ], 64);
    };
  }
}, l3 = /* @__PURE__ */ Re(dP, [["__scopeId", "data-v-67c3f0ad"]]), pP = {}, OP = { class: "footer-wrapper" };
function gP(i, e) {
  const t = z("v-footer");
  return R(), L("div", OP, [
    V(t, { class: "footer-contents" }, {
      default: E(() => e[0] || (e[0] = [
        oe("Powered by STRATO Cloud Management Platform")
      ])),
      _: 1
    })
  ]);
}
const a3 = /* @__PURE__ */ Re(pP, [["render", gP]]), mP = { class: "s-title-area__content" }, yP = { class: "s-title-area__title" }, bP = {
  key: 0,
  class: "s-title-area__number"
}, vP = { class: "s-title-area__buttons button-wrapper" }, SP = {
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
    return (e, t) => (R(), L("div", {
      class: Qe(["s-title-area", i.className])
    }, [
      X("div", mP, [
        X("div", yP, [
          oe(U(i.title) + " ", 1),
          J(e.$slots, "title-append", {}, () => [
            i.showCnt ? (R(), L("span", bP, "(" + U(i.listCnt) + ")", 1)) : ae("", !0)
          ], !0)
        ]),
        X("div", vP, [
          J(e.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, c3 = /* @__PURE__ */ Re(SP, [["__scopeId", "data-v-9f760a1f"]]), xP = { class: "s-accordion-wrapper" }, wP = {
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
      const a = z("v-icon");
      return R(), L("div", xP, [
        X("div", {
          class: Qe(["title", { "title-bold": i.titleBold }])
        }, [
          oe(U(i.title) + " ", 1),
          V(a, {
            class: "float-right",
            style: { top: "10px" },
            icon: t.value ? "mdi-chevron-down" : "mdi-chevron-right",
            onClick: s
          }, null, 8, ["icon"])
        ], 2),
        X("div", {
          ref_key: "accordion",
          ref: e,
          class: "s-accordion-contents",
          style: ct({ height: n.value }),
          onTransitionend: r
        }, [
          J(o.$slots, "default", {}, void 0, !0)
        ], 36)
      ]);
    };
  }
}, h3 = /* @__PURE__ */ Re(wP, [["__scopeId", "data-v-691469ff"]]), QP = { id: "s-navi" }, kP = { id: "s-menu-title-wrapper" }, PP = { id: "s-menu-title" }, $P = {
  key: 0,
  id: "project_select_wrapper"
}, CP = { class: "project_select" }, ZP = { id: "s-menu-wrapper" }, TP = {
  key: 1,
  class: "s-navi-inner-menu-title"
}, AP = {
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
      default: "Service"
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
    }
  },
  emits: ["change:project", "click:service-name"],
  setup(i, { emit: e }) {
    const t = { projectName: "전체", projectId: 0 }, n = i, s = e, r = G([]), o = I(() => [{ ...t }, ...n.projectList]), l = (u) => {
      var f;
      return !n.useProject || n.useProject && (((f = n.selectedProject) == null ? void 0 : f.projectId) > 0 || u.dependency !== "PROJECT");
    }, a = (u) => {
      s("change:project", u);
    }, c = () => {
      n.firstMenuPath ? s("click:service-name", { path: n.firstMenuPath }) : s("click:service-name", { path: "/" });
    };
    ve(
      () => n.routerPath,
      () => {
        var d;
        const u = ((d = n.menuPath) == null ? void 0 : d.subMenus) || [], f = n.routerPath;
        for (const p in u)
          if (f.indexOf(u[p].menuUrl) >= 0) {
            r.value = [u[p].idx];
            break;
          }
      },
      { immediate: !0 }
    );
    const h = (u, f) => {
      if (l(f)) {
        const d = u.currentTarget.querySelector(".s-navi-inner-menu-title");
        d && d.click();
      }
    };
    return (u, f) => {
      const d = z("v-select"), p = z("RouterLink"), g = z("v-list-item"), m = z("v-tooltip"), O = z("v-list-group"), x = z("v-list");
      return R(), L("div", QP, [
        X("div", kP, [
          X("a", {
            "href.stop": "#",
            onClick: c
          }, [
            X("div", PP, U(i.serviceName), 1)
          ])
        ]),
        i.projectList && i.projectList.length ? (R(), L("div", $P, [
          X("div", CP, [
            V(d, {
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
        ])) : ae("", !0),
        X("div", ZP, [
          i.menuPath && i.menuPath.subMenus && i.menuPath.subMenus.length ? (R(), se(x, {
            key: 0,
            opened: r.value,
            "onUpdate:opened": f[0] || (f[0] = (w) => r.value = w),
            class: "navi-menu"
          }, {
            default: E(() => [
              (R(!0), L(he, null, qe(i.menuPath.subMenus, (w) => (R(), se(O, {
                key: w.idx,
                value: w.idx
              }, Mi({
                default: E(() => [
                  (R(!0), L(he, null, qe(w.subMenus, (P, $) => {
                    var M;
                    return R(), L(he, { key: $ }, [
                      P.accessible ? (R(), se(g, {
                        key: 0,
                        class: Qe(["s-navi-inner-menu", {
                          disabled: !l(P),
                          active: ((M = i.selectedProject) == null ? void 0 : M.projectId) > 0 || P.dependency !== "PROJECT"
                        }]),
                        value: P.idx,
                        "active-class": "menu-active",
                        "prepend-icon": "mdi-circle-small",
                        onClick: (b) => h(b, P)
                      }, {
                        title: E(() => [
                          l(P) ? (R(), se(p, {
                            key: 0,
                            class: "s-navi-inner-menu-title",
                            to: P.menuUrl,
                            ref_for: !0,
                            ref: "menuLink"
                          }, {
                            default: E(() => [
                              oe(U(P.menuName || P.menuNameKr), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (R(), L("span", TP, [
                            oe(U(P.menuName || P.menuNameKr) + " ", 1),
                            P.dependency === "PROJECT" ? (R(), se(m, {
                              key: 0,
                              activator: "parent",
                              location: "start"
                            }, {
                              default: E(() => [
                                oe(U(i.dependencyTooltipMessage), 1)
                              ]),
                              _: 1
                            })) : ae("", !0)
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["class", "value", "onClick"])) : ae("", !0)
                    ], 64);
                  }), 128))
                ]),
                _: 2
              }, [
                w.accessible ? {
                  name: "activator",
                  fn: E(({ props: P }) => [
                    V(g, Je({ ref_for: !0 }, P, {
                      height: "50px",
                      "active-class": "menu-active",
                      title: w.menuName || w.menuNameKr,
                      "append-icon": !w.subMenus || w.subMenus.length === 0 ? "" : r.value.includes(w.idx) ? "mdi-chevron-up" : "mdi-chevron-down",
                      onClick: ($) => h($, w)
                    }), Mi({ _: 2 }, [
                      !w.subMenus || w.subMenus.length === 0 ? {
                        name: "title",
                        fn: E(() => [
                          V(p, {
                            class: "navi-inner-menu-title",
                            to: w.menuUrl
                          }, {
                            default: E(() => [
                              oe(U(w.menuName || w.menuNameKr), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["title", "append-icon", "onClick"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["opened"])) : ae("", !0)
        ])
      ]);
    };
  }
}, u3 = /* @__PURE__ */ Re(AP, [["__scopeId", "data-v-729ba565"]]);
var Gg = typeof global == "object" && global && global.Object === Object && global, MP = typeof self == "object" && self && self.Object === Object && self, qt = Gg || MP || Function("return this")(), ft = qt.Symbol, Fg = Object.prototype, RP = Fg.hasOwnProperty, _P = Fg.toString, Rn = ft ? ft.toStringTag : void 0;
function XP(i) {
  var e = RP.call(i, Rn), t = i[Rn];
  try {
    i[Rn] = void 0;
    var n = !0;
  } catch {
  }
  var s = _P.call(i);
  return n && (e ? i[Rn] = t : delete i[Rn]), s;
}
var EP = Object.prototype, LP = EP.toString;
function DP(i) {
  return LP.call(i);
}
var jP = "[object Null]", BP = "[object Undefined]", gf = ft ? ft.toStringTag : void 0;
function xn(i) {
  return i == null ? i === void 0 ? BP : jP : gf && gf in Object(i) ? XP(i) : DP(i);
}
function gi(i) {
  return i != null && typeof i == "object";
}
var VP = "[object Symbol]";
function gs(i) {
  return typeof i == "symbol" || gi(i) && xn(i) == VP;
}
function yr(i, e) {
  for (var t = -1, n = i == null ? 0 : i.length, s = Array(n); ++t < n; )
    s[t] = e(i[t], t, i);
  return s;
}
var dt = Array.isArray, mf = ft ? ft.prototype : void 0, yf = mf ? mf.toString : void 0;
function Hg(i) {
  if (typeof i == "string")
    return i;
  if (dt(i))
    return yr(i, Hg) + "";
  if (gs(i))
    return yf ? yf.call(i) : "";
  var e = i + "";
  return e == "0" && 1 / i == -1 / 0 ? "-0" : e;
}
function wn(i) {
  var e = typeof i;
  return i != null && (e == "object" || e == "function");
}
function yo(i) {
  return i;
}
var qP = "[object AsyncFunction]", WP = "[object Function]", IP = "[object GeneratorFunction]", zP = "[object Proxy]";
function Kg(i) {
  if (!wn(i))
    return !1;
  var e = xn(i);
  return e == WP || e == IP || e == qP || e == zP;
}
var al = qt["__core-js_shared__"], bf = function() {
  var i = /[^.]+$/.exec(al && al.keys && al.keys.IE_PROTO || "");
  return i ? "Symbol(src)_1." + i : "";
}();
function NP(i) {
  return !!bf && bf in i;
}
var UP = Function.prototype, YP = UP.toString;
function Bi(i) {
  if (i != null) {
    try {
      return YP.call(i);
    } catch {
    }
    try {
      return i + "";
    } catch {
    }
  }
  return "";
}
var GP = /[\\^$.*+?()[\]{}|]/g, FP = /^\[object .+?Constructor\]$/, HP = Function.prototype, KP = Object.prototype, JP = HP.toString, e$ = KP.hasOwnProperty, t$ = RegExp(
  "^" + JP.call(e$).replace(GP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function i$(i) {
  if (!wn(i) || NP(i))
    return !1;
  var e = Kg(i) ? t$ : FP;
  return e.test(Bi(i));
}
function n$(i, e) {
  return i == null ? void 0 : i[e];
}
function Vi(i, e) {
  var t = n$(i, e);
  return i$(t) ? t : void 0;
}
var wa = Vi(qt, "WeakMap"), vf = Object.create, s$ = /* @__PURE__ */ function() {
  function i() {
  }
  return function(e) {
    if (!wn(e))
      return {};
    if (vf)
      return vf(e);
    i.prototype = e;
    var t = new i();
    return i.prototype = void 0, t;
  };
}();
function r$(i, e, t) {
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
var o$ = 800, l$ = 16, a$ = Date.now;
function c$(i) {
  var e = 0, t = 0;
  return function() {
    var n = a$(), s = l$ - (n - t);
    if (t = n, s > 0) {
      if (++e >= o$)
        return arguments[0];
    } else
      e = 0;
    return i.apply(void 0, arguments);
  };
}
function h$(i) {
  return function() {
    return i;
  };
}
var Fr = function() {
  try {
    var i = Vi(Object, "defineProperty");
    return i({}, "", {}), i;
  } catch {
  }
}(), u$ = Fr ? function(i, e) {
  return Fr(i, "toString", {
    configurable: !0,
    enumerable: !1,
    value: h$(e),
    writable: !0
  });
} : yo, f$ = c$(u$);
function d$(i, e) {
  for (var t = -1, n = i == null ? 0 : i.length; ++t < n && e(i[t], t, i) !== !1; )
    ;
  return i;
}
var p$ = 9007199254740991, O$ = /^(?:0|[1-9]\d*)$/;
function Pc(i, e) {
  var t = typeof i;
  return e = e ?? p$, !!e && (t == "number" || t != "symbol" && O$.test(i)) && i > -1 && i % 1 == 0 && i < e;
}
function g$(i, e, t) {
  e == "__proto__" && Fr ? Fr(i, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : i[e] = t;
}
function bo(i, e) {
  return i === e || i !== i && e !== e;
}
var m$ = Object.prototype, y$ = m$.hasOwnProperty;
function b$(i, e, t) {
  var n = i[e];
  (!(y$.call(i, e) && bo(n, t)) || t === void 0 && !(e in i)) && g$(i, e, t);
}
var Sf = Math.max;
function v$(i, e, t) {
  return e = Sf(e === void 0 ? i.length - 1 : e, 0), function() {
    for (var n = arguments, s = -1, r = Sf(n.length - e, 0), o = Array(r); ++s < r; )
      o[s] = n[e + s];
    s = -1;
    for (var l = Array(e + 1); ++s < e; )
      l[s] = n[s];
    return l[e] = t(o), r$(i, this, l);
  };
}
function S$(i, e) {
  return f$(v$(i, e, yo), i + "");
}
var x$ = 9007199254740991;
function $c(i) {
  return typeof i == "number" && i > -1 && i % 1 == 0 && i <= x$;
}
function vo(i) {
  return i != null && $c(i.length) && !Kg(i);
}
function xf(i, e, t) {
  if (!wn(t))
    return !1;
  var n = typeof e;
  return (n == "number" ? vo(t) && Pc(e, t.length) : n == "string" && e in t) ? bo(t[e], i) : !1;
}
var w$ = Object.prototype;
function Jg(i) {
  var e = i && i.constructor, t = typeof e == "function" && e.prototype || w$;
  return i === t;
}
function Q$(i, e) {
  for (var t = -1, n = Array(i); ++t < i; )
    n[t] = e(t);
  return n;
}
var k$ = "[object Arguments]";
function wf(i) {
  return gi(i) && xn(i) == k$;
}
var em = Object.prototype, P$ = em.hasOwnProperty, $$ = em.propertyIsEnumerable, Cc = wf(/* @__PURE__ */ function() {
  return arguments;
}()) ? wf : function(i) {
  return gi(i) && P$.call(i, "callee") && !$$.call(i, "callee");
};
function C$() {
  return !1;
}
var tm = typeof exports == "object" && exports && !exports.nodeType && exports, Qf = tm && typeof module == "object" && module && !module.nodeType && module, Z$ = Qf && Qf.exports === tm, kf = Z$ ? qt.Buffer : void 0, T$ = kf ? kf.isBuffer : void 0, Hr = T$ || C$, A$ = "[object Arguments]", M$ = "[object Array]", R$ = "[object Boolean]", _$ = "[object Date]", X$ = "[object Error]", E$ = "[object Function]", L$ = "[object Map]", D$ = "[object Number]", j$ = "[object Object]", B$ = "[object RegExp]", V$ = "[object Set]", q$ = "[object String]", W$ = "[object WeakMap]", I$ = "[object ArrayBuffer]", z$ = "[object DataView]", N$ = "[object Float32Array]", U$ = "[object Float64Array]", Y$ = "[object Int8Array]", G$ = "[object Int16Array]", F$ = "[object Int32Array]", H$ = "[object Uint8Array]", K$ = "[object Uint8ClampedArray]", J$ = "[object Uint16Array]", eC = "[object Uint32Array]", pe = {};
pe[N$] = pe[U$] = pe[Y$] = pe[G$] = pe[F$] = pe[H$] = pe[K$] = pe[J$] = pe[eC] = !0;
pe[A$] = pe[M$] = pe[I$] = pe[R$] = pe[z$] = pe[_$] = pe[X$] = pe[E$] = pe[L$] = pe[D$] = pe[j$] = pe[B$] = pe[V$] = pe[q$] = pe[W$] = !1;
function tC(i) {
  return gi(i) && $c(i.length) && !!pe[xn(i)];
}
function So(i) {
  return function(e) {
    return i(e);
  };
}
var im = typeof exports == "object" && exports && !exports.nodeType && exports, Yn = im && typeof module == "object" && module && !module.nodeType && module, iC = Yn && Yn.exports === im, cl = iC && Gg.process, On = function() {
  try {
    var i = Yn && Yn.require && Yn.require("util").types;
    return i || cl && cl.binding && cl.binding("util");
  } catch {
  }
}(), Pf = On && On.isTypedArray, nm = Pf ? So(Pf) : tC, nC = Object.prototype, sC = nC.hasOwnProperty;
function rC(i, e) {
  var t = dt(i), n = !t && Cc(i), s = !t && !n && Hr(i), r = !t && !n && !s && nm(i), o = t || n || s || r, l = o ? Q$(i.length, String) : [], a = l.length;
  for (var c in i)
    sC.call(i, c) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Pc(c, a))) && l.push(c);
  return l;
}
function sm(i, e) {
  return function(t) {
    return i(e(t));
  };
}
var oC = sm(Object.keys, Object), lC = Object.prototype, aC = lC.hasOwnProperty;
function cC(i) {
  if (!Jg(i))
    return oC(i);
  var e = [];
  for (var t in Object(i))
    aC.call(i, t) && t != "constructor" && e.push(t);
  return e;
}
function Zc(i) {
  return vo(i) ? rC(i) : cC(i);
}
var hC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, uC = /^\w*$/;
function Tc(i, e) {
  if (dt(i))
    return !1;
  var t = typeof i;
  return t == "number" || t == "symbol" || t == "boolean" || i == null || gs(i) ? !0 : uC.test(i) || !hC.test(i) || e != null && i in Object(e);
}
var ms = Vi(Object, "create");
function fC() {
  this.__data__ = ms ? ms(null) : {}, this.size = 0;
}
function dC(i) {
  var e = this.has(i) && delete this.__data__[i];
  return this.size -= e ? 1 : 0, e;
}
var pC = "__lodash_hash_undefined__", OC = Object.prototype, gC = OC.hasOwnProperty;
function mC(i) {
  var e = this.__data__;
  if (ms) {
    var t = e[i];
    return t === pC ? void 0 : t;
  }
  return gC.call(e, i) ? e[i] : void 0;
}
var yC = Object.prototype, bC = yC.hasOwnProperty;
function vC(i) {
  var e = this.__data__;
  return ms ? e[i] !== void 0 : bC.call(e, i);
}
var SC = "__lodash_hash_undefined__";
function xC(i, e) {
  var t = this.__data__;
  return this.size += this.has(i) ? 0 : 1, t[i] = ms && e === void 0 ? SC : e, this;
}
function Di(i) {
  var e = -1, t = i == null ? 0 : i.length;
  for (this.clear(); ++e < t; ) {
    var n = i[e];
    this.set(n[0], n[1]);
  }
}
Di.prototype.clear = fC;
Di.prototype.delete = dC;
Di.prototype.get = mC;
Di.prototype.has = vC;
Di.prototype.set = xC;
function wC() {
  this.__data__ = [], this.size = 0;
}
function xo(i, e) {
  for (var t = i.length; t--; )
    if (bo(i[t][0], e))
      return t;
  return -1;
}
var QC = Array.prototype, kC = QC.splice;
function PC(i) {
  var e = this.__data__, t = xo(e, i);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : kC.call(e, t, 1), --this.size, !0;
}
function $C(i) {
  var e = this.__data__, t = xo(e, i);
  return t < 0 ? void 0 : e[t][1];
}
function CC(i) {
  return xo(this.__data__, i) > -1;
}
function ZC(i, e) {
  var t = this.__data__, n = xo(t, i);
  return n < 0 ? (++this.size, t.push([i, e])) : t[n][1] = e, this;
}
function ei(i) {
  var e = -1, t = i == null ? 0 : i.length;
  for (this.clear(); ++e < t; ) {
    var n = i[e];
    this.set(n[0], n[1]);
  }
}
ei.prototype.clear = wC;
ei.prototype.delete = PC;
ei.prototype.get = $C;
ei.prototype.has = CC;
ei.prototype.set = ZC;
var ys = Vi(qt, "Map");
function TC() {
  this.size = 0, this.__data__ = {
    hash: new Di(),
    map: new (ys || ei)(),
    string: new Di()
  };
}
function AC(i) {
  var e = typeof i;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? i !== "__proto__" : i === null;
}
function wo(i, e) {
  var t = i.__data__;
  return AC(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function MC(i) {
  var e = wo(this, i).delete(i);
  return this.size -= e ? 1 : 0, e;
}
function RC(i) {
  return wo(this, i).get(i);
}
function _C(i) {
  return wo(this, i).has(i);
}
function XC(i, e) {
  var t = wo(this, i), n = t.size;
  return t.set(i, e), this.size += t.size == n ? 0 : 1, this;
}
function ti(i) {
  var e = -1, t = i == null ? 0 : i.length;
  for (this.clear(); ++e < t; ) {
    var n = i[e];
    this.set(n[0], n[1]);
  }
}
ti.prototype.clear = TC;
ti.prototype.delete = MC;
ti.prototype.get = RC;
ti.prototype.has = _C;
ti.prototype.set = XC;
var EC = "Expected a function";
function Ac(i, e) {
  if (typeof i != "function" || e != null && typeof e != "function")
    throw new TypeError(EC);
  var t = function() {
    var n = arguments, s = e ? e.apply(this, n) : n[0], r = t.cache;
    if (r.has(s))
      return r.get(s);
    var o = i.apply(this, n);
    return t.cache = r.set(s, o) || r, o;
  };
  return t.cache = new (Ac.Cache || ti)(), t;
}
Ac.Cache = ti;
var LC = 500;
function DC(i) {
  var e = Ac(i, function(n) {
    return t.size === LC && t.clear(), n;
  }), t = e.cache;
  return e;
}
var jC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, BC = /\\(\\)?/g, VC = DC(function(i) {
  var e = [];
  return i.charCodeAt(0) === 46 && e.push(""), i.replace(jC, function(t, n, s, r) {
    e.push(s ? r.replace(BC, "$1") : n || t);
  }), e;
});
function qC(i) {
  return i == null ? "" : Hg(i);
}
function rm(i, e) {
  return dt(i) ? i : Tc(i, e) ? [i] : VC(qC(i));
}
function Qo(i) {
  if (typeof i == "string" || gs(i))
    return i;
  var e = i + "";
  return e == "0" && 1 / i == -1 / 0 ? "-0" : e;
}
function Mc(i, e) {
  e = rm(e, i);
  for (var t = 0, n = e.length; i != null && t < n; )
    i = i[Qo(e[t++])];
  return t && t == n ? i : void 0;
}
function WC(i, e, t) {
  var n = i == null ? void 0 : Mc(i, e);
  return n === void 0 ? t : n;
}
function om(i, e) {
  for (var t = -1, n = e.length, s = i.length; ++t < n; )
    i[s + t] = e[t];
  return i;
}
var $f = ft ? ft.isConcatSpreadable : void 0;
function IC(i) {
  return dt(i) || Cc(i) || !!($f && i && i[$f]);
}
function zC(i, e, t, n, s) {
  var r = -1, o = i.length;
  for (t || (t = IC), s || (s = []); ++r < o; ) {
    var l = i[r];
    t(l) ? om(s, l) : s[s.length] = l;
  }
  return s;
}
var NC = sm(Object.getPrototypeOf, Object);
function UC() {
  this.__data__ = new ei(), this.size = 0;
}
function YC(i) {
  var e = this.__data__, t = e.delete(i);
  return this.size = e.size, t;
}
function GC(i) {
  return this.__data__.get(i);
}
function FC(i) {
  return this.__data__.has(i);
}
var HC = 200;
function KC(i, e) {
  var t = this.__data__;
  if (t instanceof ei) {
    var n = t.__data__;
    if (!ys || n.length < HC - 1)
      return n.push([i, e]), this.size = ++t.size, this;
    t = this.__data__ = new ti(n);
  }
  return t.set(i, e), this.size = t.size, this;
}
function Et(i) {
  var e = this.__data__ = new ei(i);
  this.size = e.size;
}
Et.prototype.clear = UC;
Et.prototype.delete = YC;
Et.prototype.get = GC;
Et.prototype.has = FC;
Et.prototype.set = KC;
var lm = typeof exports == "object" && exports && !exports.nodeType && exports, Cf = lm && typeof module == "object" && module && !module.nodeType && module, JC = Cf && Cf.exports === lm, Zf = JC ? qt.Buffer : void 0;
Zf && Zf.allocUnsafe;
function e5(i, e) {
  return i.slice();
}
function t5(i, e) {
  for (var t = -1, n = i == null ? 0 : i.length, s = 0, r = []; ++t < n; ) {
    var o = i[t];
    e(o, t, i) && (r[s++] = o);
  }
  return r;
}
function i5() {
  return [];
}
var n5 = Object.prototype, s5 = n5.propertyIsEnumerable, Tf = Object.getOwnPropertySymbols, r5 = Tf ? function(i) {
  return i == null ? [] : (i = Object(i), t5(Tf(i), function(e) {
    return s5.call(i, e);
  }));
} : i5;
function o5(i, e, t) {
  var n = e(i);
  return dt(i) ? n : om(n, t(i));
}
function Qa(i) {
  return o5(i, Zc, r5);
}
var ka = Vi(qt, "DataView"), Pa = Vi(qt, "Promise"), $a = Vi(qt, "Set"), Af = "[object Map]", l5 = "[object Object]", Mf = "[object Promise]", Rf = "[object Set]", _f = "[object WeakMap]", Xf = "[object DataView]", a5 = Bi(ka), c5 = Bi(ys), h5 = Bi(Pa), u5 = Bi($a), f5 = Bi(wa), Ot = xn;
(ka && Ot(new ka(new ArrayBuffer(1))) != Xf || ys && Ot(new ys()) != Af || Pa && Ot(Pa.resolve()) != Mf || $a && Ot(new $a()) != Rf || wa && Ot(new wa()) != _f) && (Ot = function(i) {
  var e = xn(i), t = e == l5 ? i.constructor : void 0, n = t ? Bi(t) : "";
  if (n)
    switch (n) {
      case a5:
        return Xf;
      case c5:
        return Af;
      case h5:
        return Mf;
      case u5:
        return Rf;
      case f5:
        return _f;
    }
  return e;
});
var d5 = Object.prototype, p5 = d5.hasOwnProperty;
function O5(i) {
  var e = i.length, t = new i.constructor(e);
  return e && typeof i[0] == "string" && p5.call(i, "index") && (t.index = i.index, t.input = i.input), t;
}
var Kr = qt.Uint8Array;
function Rc(i) {
  var e = new i.constructor(i.byteLength);
  return new Kr(e).set(new Kr(i)), e;
}
function g5(i, e) {
  var t = Rc(i.buffer);
  return new i.constructor(t, i.byteOffset, i.byteLength);
}
var m5 = /\w*$/;
function y5(i) {
  var e = new i.constructor(i.source, m5.exec(i));
  return e.lastIndex = i.lastIndex, e;
}
var Ef = ft ? ft.prototype : void 0, Lf = Ef ? Ef.valueOf : void 0;
function b5(i) {
  return Lf ? Object(Lf.call(i)) : {};
}
function v5(i, e) {
  var t = Rc(i.buffer);
  return new i.constructor(t, i.byteOffset, i.length);
}
var S5 = "[object Boolean]", x5 = "[object Date]", w5 = "[object Map]", Q5 = "[object Number]", k5 = "[object RegExp]", P5 = "[object Set]", $5 = "[object String]", C5 = "[object Symbol]", Z5 = "[object ArrayBuffer]", T5 = "[object DataView]", A5 = "[object Float32Array]", M5 = "[object Float64Array]", R5 = "[object Int8Array]", _5 = "[object Int16Array]", X5 = "[object Int32Array]", E5 = "[object Uint8Array]", L5 = "[object Uint8ClampedArray]", D5 = "[object Uint16Array]", j5 = "[object Uint32Array]";
function B5(i, e, t) {
  var n = i.constructor;
  switch (e) {
    case Z5:
      return Rc(i);
    case S5:
    case x5:
      return new n(+i);
    case T5:
      return g5(i);
    case A5:
    case M5:
    case R5:
    case _5:
    case X5:
    case E5:
    case L5:
    case D5:
    case j5:
      return v5(i);
    case w5:
      return new n();
    case Q5:
    case $5:
      return new n(i);
    case k5:
      return y5(i);
    case P5:
      return new n();
    case C5:
      return b5(i);
  }
}
function V5(i) {
  return typeof i.constructor == "function" && !Jg(i) ? s$(NC(i)) : {};
}
var q5 = "[object Map]";
function W5(i) {
  return gi(i) && Ot(i) == q5;
}
var Df = On && On.isMap, I5 = Df ? So(Df) : W5, z5 = "[object Set]";
function N5(i) {
  return gi(i) && Ot(i) == z5;
}
var jf = On && On.isSet, U5 = jf ? So(jf) : N5, am = "[object Arguments]", Y5 = "[object Array]", G5 = "[object Boolean]", F5 = "[object Date]", H5 = "[object Error]", cm = "[object Function]", K5 = "[object GeneratorFunction]", J5 = "[object Map]", eZ = "[object Number]", hm = "[object Object]", tZ = "[object RegExp]", iZ = "[object Set]", nZ = "[object String]", sZ = "[object Symbol]", rZ = "[object WeakMap]", oZ = "[object ArrayBuffer]", lZ = "[object DataView]", aZ = "[object Float32Array]", cZ = "[object Float64Array]", hZ = "[object Int8Array]", uZ = "[object Int16Array]", fZ = "[object Int32Array]", dZ = "[object Uint8Array]", pZ = "[object Uint8ClampedArray]", OZ = "[object Uint16Array]", gZ = "[object Uint32Array]", ue = {};
ue[am] = ue[Y5] = ue[oZ] = ue[lZ] = ue[G5] = ue[F5] = ue[aZ] = ue[cZ] = ue[hZ] = ue[uZ] = ue[fZ] = ue[J5] = ue[eZ] = ue[hm] = ue[tZ] = ue[iZ] = ue[nZ] = ue[sZ] = ue[dZ] = ue[pZ] = ue[OZ] = ue[gZ] = !0;
ue[H5] = ue[cm] = ue[rZ] = !1;
function br(i, e, t, n, s, r) {
  var o;
  if (o !== void 0)
    return o;
  if (!wn(i))
    return i;
  var l = dt(i);
  if (l)
    o = O5(i);
  else {
    var a = Ot(i), c = a == cm || a == K5;
    if (Hr(i))
      return e5(i);
    if (a == hm || a == am || c && !s)
      o = c ? {} : V5(i);
    else {
      if (!ue[a])
        return s ? i : {};
      o = B5(i, a);
    }
  }
  r || (r = new Et());
  var h = r.get(i);
  if (h)
    return h;
  r.set(i, o), U5(i) ? i.forEach(function(d) {
    o.add(br(d, e, t, d, i, r));
  }) : I5(i) && i.forEach(function(d, p) {
    o.set(p, br(d, e, t, p, i, r));
  });
  var u = Qa, f = l ? void 0 : u(i);
  return d$(f || i, function(d, p) {
    f && (p = d, d = i[p]), b$(o, p, br(d, e, t, p, i, r));
  }), o;
}
var mZ = 1, yZ = 4;
function um(i) {
  return br(i, mZ | yZ);
}
var bZ = "__lodash_hash_undefined__";
function vZ(i) {
  return this.__data__.set(i, bZ), this;
}
function SZ(i) {
  return this.__data__.has(i);
}
function Jr(i) {
  var e = -1, t = i == null ? 0 : i.length;
  for (this.__data__ = new ti(); ++e < t; )
    this.add(i[e]);
}
Jr.prototype.add = Jr.prototype.push = vZ;
Jr.prototype.has = SZ;
function xZ(i, e) {
  for (var t = -1, n = i == null ? 0 : i.length; ++t < n; )
    if (e(i[t], t, i))
      return !0;
  return !1;
}
function wZ(i, e) {
  return i.has(e);
}
var QZ = 1, kZ = 2;
function fm(i, e, t, n, s, r) {
  var o = t & QZ, l = i.length, a = e.length;
  if (l != a && !(o && a > l))
    return !1;
  var c = r.get(i), h = r.get(e);
  if (c && h)
    return c == e && h == i;
  var u = -1, f = !0, d = t & kZ ? new Jr() : void 0;
  for (r.set(i, e), r.set(e, i); ++u < l; ) {
    var p = i[u], g = e[u];
    if (n)
      var m = o ? n(g, p, u, e, i, r) : n(p, g, u, i, e, r);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (d) {
      if (!xZ(e, function(O, x) {
        if (!wZ(d, x) && (p === O || s(p, O, t, n, r)))
          return d.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === g || s(p, g, t, n, r))) {
      f = !1;
      break;
    }
  }
  return r.delete(i), r.delete(e), f;
}
function PZ(i) {
  var e = -1, t = Array(i.size);
  return i.forEach(function(n, s) {
    t[++e] = [s, n];
  }), t;
}
function $Z(i) {
  var e = -1, t = Array(i.size);
  return i.forEach(function(n) {
    t[++e] = n;
  }), t;
}
var CZ = 1, ZZ = 2, TZ = "[object Boolean]", AZ = "[object Date]", MZ = "[object Error]", RZ = "[object Map]", _Z = "[object Number]", XZ = "[object RegExp]", EZ = "[object Set]", LZ = "[object String]", DZ = "[object Symbol]", jZ = "[object ArrayBuffer]", BZ = "[object DataView]", Bf = ft ? ft.prototype : void 0, hl = Bf ? Bf.valueOf : void 0;
function VZ(i, e, t, n, s, r, o) {
  switch (t) {
    case BZ:
      if (i.byteLength != e.byteLength || i.byteOffset != e.byteOffset)
        return !1;
      i = i.buffer, e = e.buffer;
    case jZ:
      return !(i.byteLength != e.byteLength || !r(new Kr(i), new Kr(e)));
    case TZ:
    case AZ:
    case _Z:
      return bo(+i, +e);
    case MZ:
      return i.name == e.name && i.message == e.message;
    case XZ:
    case LZ:
      return i == e + "";
    case RZ:
      var l = PZ;
    case EZ:
      var a = n & CZ;
      if (l || (l = $Z), i.size != e.size && !a)
        return !1;
      var c = o.get(i);
      if (c)
        return c == e;
      n |= ZZ, o.set(i, e);
      var h = fm(l(i), l(e), n, s, r, o);
      return o.delete(i), h;
    case DZ:
      if (hl)
        return hl.call(i) == hl.call(e);
  }
  return !1;
}
var qZ = 1, WZ = Object.prototype, IZ = WZ.hasOwnProperty;
function zZ(i, e, t, n, s, r) {
  var o = t & qZ, l = Qa(i), a = l.length, c = Qa(e), h = c.length;
  if (a != h && !o)
    return !1;
  for (var u = a; u--; ) {
    var f = l[u];
    if (!(o ? f in e : IZ.call(e, f)))
      return !1;
  }
  var d = r.get(i), p = r.get(e);
  if (d && p)
    return d == e && p == i;
  var g = !0;
  r.set(i, e), r.set(e, i);
  for (var m = o; ++u < a; ) {
    f = l[u];
    var O = i[f], x = e[f];
    if (n)
      var w = o ? n(x, O, f, e, i, r) : n(O, x, f, i, e, r);
    if (!(w === void 0 ? O === x || s(O, x, t, n, r) : w)) {
      g = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (g && !m) {
    var P = i.constructor, $ = e.constructor;
    P != $ && "constructor" in i && "constructor" in e && !(typeof P == "function" && P instanceof P && typeof $ == "function" && $ instanceof $) && (g = !1);
  }
  return r.delete(i), r.delete(e), g;
}
var NZ = 1, Vf = "[object Arguments]", qf = "[object Array]", ir = "[object Object]", UZ = Object.prototype, Wf = UZ.hasOwnProperty;
function YZ(i, e, t, n, s, r) {
  var o = dt(i), l = dt(e), a = o ? qf : Ot(i), c = l ? qf : Ot(e);
  a = a == Vf ? ir : a, c = c == Vf ? ir : c;
  var h = a == ir, u = c == ir, f = a == c;
  if (f && Hr(i)) {
    if (!Hr(e))
      return !1;
    o = !0, h = !1;
  }
  if (f && !h)
    return r || (r = new Et()), o || nm(i) ? fm(i, e, t, n, s, r) : VZ(i, e, a, t, n, s, r);
  if (!(t & NZ)) {
    var d = h && Wf.call(i, "__wrapped__"), p = u && Wf.call(e, "__wrapped__");
    if (d || p) {
      var g = d ? i.value() : i, m = p ? e.value() : e;
      return r || (r = new Et()), s(g, m, t, n, r);
    }
  }
  return f ? (r || (r = new Et()), zZ(i, e, t, n, s, r)) : !1;
}
function _c(i, e, t, n, s) {
  return i === e ? !0 : i == null || e == null || !gi(i) && !gi(e) ? i !== i && e !== e : YZ(i, e, t, n, _c, s);
}
var GZ = 1, FZ = 2;
function HZ(i, e, t, n) {
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
      var h = new Et(), u;
      if (!(u === void 0 ? _c(c, a, GZ | FZ, n, h) : u))
        return !1;
    }
  }
  return !0;
}
function dm(i) {
  return i === i && !wn(i);
}
function KZ(i) {
  for (var e = Zc(i), t = e.length; t--; ) {
    var n = e[t], s = i[n];
    e[t] = [n, s, dm(s)];
  }
  return e;
}
function pm(i, e) {
  return function(t) {
    return t == null ? !1 : t[i] === e && (e !== void 0 || i in Object(t));
  };
}
function JZ(i) {
  var e = KZ(i);
  return e.length == 1 && e[0][2] ? pm(e[0][0], e[0][1]) : function(t) {
    return t === i || HZ(t, i, e);
  };
}
function eT(i, e) {
  return i != null && e in Object(i);
}
function tT(i, e, t) {
  e = rm(e, i);
  for (var n = -1, s = e.length, r = !1; ++n < s; ) {
    var o = Qo(e[n]);
    if (!(r = i != null && t(i, o)))
      break;
    i = i[o];
  }
  return r || ++n != s ? r : (s = i == null ? 0 : i.length, !!s && $c(s) && Pc(o, s) && (dt(i) || Cc(i)));
}
function iT(i, e) {
  return i != null && tT(i, e, eT);
}
var nT = 1, sT = 2;
function rT(i, e) {
  return Tc(i) && dm(e) ? pm(Qo(i), e) : function(t) {
    var n = WC(t, i);
    return n === void 0 && n === e ? iT(t, i) : _c(e, n, nT | sT);
  };
}
function oT(i) {
  return function(e) {
    return e == null ? void 0 : e[i];
  };
}
function lT(i) {
  return function(e) {
    return Mc(e, i);
  };
}
function aT(i) {
  return Tc(i) ? oT(Qo(i)) : lT(i);
}
function cT(i) {
  return typeof i == "function" ? i : i == null ? yo : typeof i == "object" ? dt(i) ? rT(i[0], i[1]) : JZ(i) : aT(i);
}
function hT(i) {
  return function(e, t, n) {
    for (var s = -1, r = Object(e), o = n(e), l = o.length; l--; ) {
      var a = o[++s];
      if (t(r[a], a, r) === !1)
        break;
    }
    return e;
  };
}
var uT = hT();
function fT(i, e) {
  return i && uT(i, e, Zc);
}
function dT(i, e) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!vo(t))
      return i(t, n);
    for (var s = t.length, r = -1, o = Object(t); ++r < s && n(o[r], r, o) !== !1; )
      ;
    return t;
  };
}
var pT = dT(fT);
function OT(i, e) {
  var t = -1, n = vo(i) ? Array(i.length) : [];
  return pT(i, function(s, r, o) {
    n[++t] = e(s, r, o);
  }), n;
}
function gT(i, e) {
  var t = i.length;
  for (i.sort(e); t--; )
    i[t] = i[t].value;
  return i;
}
function mT(i, e) {
  if (i !== e) {
    var t = i !== void 0, n = i === null, s = i === i, r = gs(i), o = e !== void 0, l = e === null, a = e === e, c = gs(e);
    if (!l && !c && !r && i > e || r && o && a && !l && !c || n && o && a || !t && a || !s)
      return 1;
    if (!n && !r && !c && i < e || c && t && s && !n && !r || l && t && s || !o && s || !a)
      return -1;
  }
  return 0;
}
function yT(i, e, t) {
  for (var n = -1, s = i.criteria, r = e.criteria, o = s.length, l = t.length; ++n < o; ) {
    var a = mT(s[n], r[n]);
    if (a) {
      if (n >= l)
        return a;
      var c = t[n];
      return a * (c == "desc" ? -1 : 1);
    }
  }
  return i.index - e.index;
}
function bT(i, e, t) {
  e.length ? e = yr(e, function(r) {
    return dt(r) ? function(o) {
      return Mc(o, r.length === 1 ? r[0] : r);
    } : r;
  }) : e = [yo];
  var n = -1;
  e = yr(e, So(cT));
  var s = OT(i, function(r, o, l) {
    var a = yr(e, function(c) {
      return c(r);
    });
    return { criteria: a, index: ++n, value: r };
  });
  return gT(s, function(r, o) {
    return yT(r, o, t);
  });
}
var Om = S$(function(i, e) {
  if (i == null)
    return [];
  var t = e.length;
  return t > 1 && xf(i, e[0], e[1]) ? e = [] : t > 2 && xf(e[0], e[1], e[2]) && (e = [e[0]]), bT(i, zC(e), []);
});
const vT = { class: "s-smart-search" }, ST = {
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
  emits: ["update:model-value"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G(null), r = G(!1), o = G(!1), l = G(null), a = Ai(t.modelValue), c = G(null), h = Ai({
      closeOnClick: !1,
      closeOnContentClick: !1
    }), u = () => {
      s.value = null, r.value = !1, o.value = !1;
    }, f = (Q) => {
      Q || u(), s.value = Q;
    }, d = (Q) => {
      var T;
      const v = /* @__PURE__ */ new Set();
      return (T = t.items) != null && T.length && t.items.forEach((C) => {
        var k;
        (k = C.tagList) != null && k.length && C.tagList.forEach((S) => {
          S[Q] !== null && v.add(S[Q]);
        });
      }), Array.from(v);
    }, p = (Q, v) => {
      var C;
      const T = /* @__PURE__ */ new Map();
      return (C = t.items) != null && C.length && t.items.forEach((k) => {
        var S;
        (S = k.tagList) != null && S.length && k.tagList.forEach((Z) => {
          const _ = T.get(Z[Q]) || [];
          Z[v] !== null && _.push(Z[v]), T.set(Z[Q], _);
        });
      }), Object.fromEntries(T);
    }, g = (Q, v) => {
      const T = [];
      return Q.forEach((C) => {
        let k = C;
        (typeof C == "object" || Array.isArray(C)) && (k = JSON.stringify(C)), T.push({
          title: String(k),
          value: String(k),
          type: v
        });
      }), T;
    }, m = I(() => {
      var v, T;
      let Q = [];
      if (o.value) {
        const C = (v = s.value) == null ? void 0 : v.split(":")[0];
        C && Q.push({
          subheader: C,
          title: ""
        });
        const k = p("tagKey", "tagValue");
        return Q = Q.concat(
          g(k[C], "tag")
        ), Q;
      }
      if (r.value) {
        if (!t.items.length)
          return [];
        const C = /* @__PURE__ */ new Set();
        t.items.forEach((Z) => {
          Z[l.value] !== void 0 && Z[l.value] !== null && C.add(Z[l.value]);
        }), console.log("setFilterDatas", C);
        const k = um(C), S = (T = s.value) == null ? void 0 : T.split(":")[0];
        return S && Q.push({
          subheader: S,
          title: ""
        }), Q = Q.concat(g(k)), Q;
      }
      return Q.push({ subheader: "속성", title: "" }), t.headers.forEach((C) => {
        C.align !== "d-none" && C.title && !t.excludeSearchHeaders.includes(C.key) && Q.push(C);
      }), t.searchTag && (Q.push({ subheader: "태그", title: "" }), Q = Q.concat(
        g(d("tagKey"), "tag")
      )), Q;
    }), O = (Q, v, T) => {
      var Z, _, B;
      const C = v.toLowerCase(), k = (C == null ? void 0 : C.split(":")) || [];
      let S = "";
      return T.raw.subheader ? !0 : ((k == null ? void 0 : k.length) > 1 ? S = k[1].trim().toLowerCase() : S = C.trim().toLowerCase(), typeof (T == null ? void 0 : T.value) == "string" ? ((Z = T == null ? void 0 : T.value) == null ? void 0 : Z.toLowerCase().indexOf(S.toLowerCase())) > -1 : ((B = (_ = T == null ? void 0 : T.value) == null ? void 0 : _.value) == null ? void 0 : B.toLowerCase().indexOf(S.toLowerCase())) > -1);
    }, x = (Q) => {
      var S;
      if (!Q)
        return { result: !1, findTitle: "", findKey: "" };
      let v = "", T = "";
      Q = (S = Q.toString()) == null ? void 0 : S.split(":")[0].trim().toLowerCase();
      const C = t.headers;
      Om(C, "title");
      const k = C.some((Z) => {
        const _ = typeof Z.title == typeof {} ? Z.title.value : Z.title, B = typeof Z.key == typeof {} ? Z.key.value : Z.key;
        return _.toLowerCase() === Q || _.toLowerCase().indexOf(Q) > -1 ? (v = _, T = B, Z) : !1;
      });
      return k || (v = Q, T = Q, o.value = !0), { result: k, findTitle: v, findKey: T };
    }, w = (Q) => {
      Q || u();
    }, P = (Q) => {
      const { findKey: v, findTitle: T } = x(Q);
      l.value = v, n("update:key", v), s.value = `${T}:`, r.value = !0;
    }, $ = (Q, v, T) => {
      var F, te, ne, de, be;
      console.log(Q.key, v, T);
      let C = "";
      if (!v)
        return;
      const k = ((F = s.value) == null ? void 0 : F.split(":")) || [], S = (k == null ? void 0 : k.length) > 1 && ((te = k[1]) != null && te.trim()) ? s.value.replace(`${(ne = s.value) == null ? void 0 : ne.split(":")[0]}:`, "") : v == null ? void 0 : v.toString().trim();
      r.value ? C = k.length ? `${k[0]}: ${S}` : "" : C = k.length && k[0].trim() ? k[0] : v == null ? void 0 : v.toString().trim();
      const Z = ((de = s.value) == null ? void 0 : de.split(":")) || [], { findTitle: _, findKey: B } = x(Z[0]);
      if (r.value && S) {
        if (S) {
          n("update:model-value", a);
          const ye = {
            title: _,
            value: S.trim(),
            key: B,
            type: o.value ? "tag" : null
          };
          a.push(ye), n("update:model-value", a), n("update:target-item", ye), setTimeout(() => {
            h.closeOnClick = !1, h.closeOnContentClick = !1;
          }, 500), u();
          return;
        }
      } else {
        if (h.closeOnClick = !0, h.closeOnContentClick = !0, l.value = (be = t.headers.find((ye) => ye.title === v)) == null ? void 0 : be.key, r.value = !0, T === "tag" && (o.value = !0), C) {
          P(C);
          return;
        }
        setTimeout(() => {
          h.closeOnClick = !1, h.closeOnContentClick = !1;
        }, 500);
      }
      c.value && (c.value.search = "");
    }, M = () => {
      a.push({ title: "미지정 태그", value: "-", key: "undefinedTag", type: "tag" }), n("update:model-value", a), c.value && (c.value.search = "");
    }, b = (Q) => {
      a.splice(Q, 1), n("update:model-value", a);
    };
    return (Q, v) => {
      const T = z("v-list-subheader"), C = z("v-list-item"), k = z("v-autocomplete"), S = z("v-chip"), Z = z("v-chip-group");
      return R(), L("div", vT, [
        V(k, {
          ref_key: "autoComp",
          ref: c,
          class: "s-autocomplete",
          style: ct({ width: i.width + "px" }),
          "closable-chips": "",
          multiple: i.multiple,
          density: i.density,
          variant: i.variant,
          items: m.value,
          search: s.value,
          "custom-filter": O,
          placeholder: i.placeholder,
          "menu-props": h,
          "hide-details": "",
          "prepend-inner-icon": i.prependInnerIcon,
          onInput: w,
          "onUpdate:search": f,
          onKeyup: Gn(Tt($, ["stop"]), ["enter"])
        }, Mi({
          item: E(({ item: _ }) => {
            var B;
            return [
              _.raw.subheader ? (R(), L(he, { key: 0 }, [
                V(T, { class: "s-list-subheader" }, {
                  default: E(() => [
                    oe(U(_.raw.subheader), 1)
                  ]),
                  _: 2
                }, 1024),
                v[0] || (v[0] = X("hr", null, null, -1))
              ], 64)) : (R(), se(C, {
                key: 1,
                title: (B = _ == null ? void 0 : _.props) == null ? void 0 : B.title,
                onClick: (F) => $(F, _ == null ? void 0 : _.raw.title, _ == null ? void 0 : _.raw.type)
              }, null, 8, ["title", "onClick"]))
            ];
          }),
          _: 2
        }, [
          i.searchTag ? {
            name: "append-item",
            fn: E(() => [
              J(Q.$slots, "null-tag", {}, () => [
                V(T, null, {
                  default: E(() => v[1] || (v[1] = [
                    oe("미지정 태그 검색")
                  ])),
                  _: 1
                }),
                v[3] || (v[3] = X("hr", null, null, -1)),
                V(C, { onClick: M }, {
                  default: E(() => v[2] || (v[2] = [
                    oe("미지정 태그")
                  ])),
                  _: 1
                })
              ], !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["style", "multiple", "density", "variant", "items", "search", "placeholder", "menu-props", "prepend-inner-icon", "onKeyup"]),
        Aa(V(Z, null, {
          default: E(() => [
            (R(!0), L(he, null, qe(a, (_, B) => (R(), se(S, {
              key: "smart-search__value--" + _.title + "__" + _.value,
              closable: "",
              "onClick:close": (F) => b(B)
            }, {
              default: E(() => [
                X("strong", null, U(_.title), 1),
                oe(" : " + U(_.value), 1)
              ]),
              _: 2
            }, 1032, ["onClick:close"]))), 128))
          ]),
          _: 1
        }, 512), [
          [Ma, a.length]
        ])
      ]);
    };
  }
}, f3 = /* @__PURE__ */ Re(ST, [["__scopeId", "data-v-76262674"]]), xT = { class: "s-smart-search" }, wT = {
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
  emits: ["update:model-value"],
  setup(i, { emit: e }) {
    const t = i, n = e, s = G(null), r = G(!1), o = G(!1), l = G(null), a = Ai(t.modelValue), c = G(null), h = Ai({
      closeOnClick: !1,
      closeOnContentClick: !1
    }), u = () => {
      s.value = null, r.value = !1, o.value = !1;
    }, f = (v) => {
      v || u(), s.value = v;
    }, d = (v) => {
      var C;
      const T = /* @__PURE__ */ new Set();
      return (C = t.tagItems) != null && C.length && t.tagItems.forEach((k) => {
        var S;
        (S = k.tagList) != null && S.length && k.tagList.forEach((Z) => {
          Z[v] !== null && T.add(Z[v]);
        });
      }), Array.from(T);
    }, p = (v, T) => {
      var k;
      const C = /* @__PURE__ */ new Map();
      return (k = t.tagItems) != null && k.length && t.tagItems.forEach((S) => {
        var Z;
        (Z = S.tagList) != null && Z.length && S.tagList.forEach((_) => {
          const B = C.get(_[v]) || [];
          _[T] !== null && B.push(_[T]), C.set(_[v], B);
        });
      }), Object.fromEntries(C);
    }, g = (v, T) => {
      const C = [];
      return v.forEach((k) => {
        let S = k;
        (typeof k == "object" || Array.isArray(k)) && (S = JSON.stringify(k)), console.log("formattedValue", S), C.push({
          title: String(S),
          value: String(S),
          type: T
        });
      }), C;
    }, m = (v) => {
      if (v.length === 2 && (v[0].title === "Y" || v[0].title === "N"))
        return items.sort((k, S) => S.title.localeCompare(k.title));
      const T = v.filter((k) => typeof k.title == "string"), C = v.filter((k) => typeof k.title == "number");
      return T.sort(
        (k, S) => k.title.localeCompare(S.title, void 0, { sensitivity: "base" })
      ), C.sort((k, S) => S.title - k.title), [...T, ...C];
    }, O = I(() => {
      var T, C;
      let v = [];
      if (o.value) {
        const k = (T = s.value) == null ? void 0 : T.split(":")[0];
        k && v.push({
          subheader: k,
          title: ""
        });
        const S = p("tagKey", "tagValue");
        return v = v.concat(
          g(S[k], "tag")
        ), v;
      }
      if (r.value) {
        if (!t.valueItems.length)
          return [];
        const k = /* @__PURE__ */ new Set();
        t.valueItems.forEach((B) => {
          k.add(B.value);
        });
        const S = (C = s.value) == null ? void 0 : C.split(":")[0];
        S && v.push({
          subheader: S,
          title: ""
        }), console.log("setFilterDatas", k);
        const Z = um(k), _ = m(g(Z));
        return v = v.concat(_), v;
      }
      return v.push({ subheader: "속성", title: "" }), t.headers.forEach((k) => {
        k.align !== "d-none" && k.title && !t.excludeSearchHeaders.includes(k.key) && v.push(k);
      }), t.searchTag && (v.push({ subheader: "태그", title: "" }), v = v.concat(
        g(d("tagKey"), "tag")
      )), console.log(v), v;
    }), x = (v, T, C) => {
      var _, B, F;
      const k = T.toLowerCase(), S = (k == null ? void 0 : k.split(":")) || [];
      let Z = "";
      return C.raw.subheader ? !0 : ((S == null ? void 0 : S.length) > 1 ? Z = S[1].trim().toLowerCase() : Z = k.trim().toLowerCase(), typeof (C == null ? void 0 : C.value) == "string" ? ((_ = C == null ? void 0 : C.value) == null ? void 0 : _.toLowerCase().indexOf(Z.toLowerCase())) > -1 : ((F = (B = C == null ? void 0 : C.value) == null ? void 0 : B.value) == null ? void 0 : F.toLowerCase().indexOf(Z.toLowerCase())) > -1);
    }, w = (v) => {
      var Z;
      if (!v)
        return { result: !1, findTitle: "", findKey: "" };
      let T = "", C = "";
      v = (Z = v.toString()) == null ? void 0 : Z.split(":")[0].trim().toLowerCase();
      const k = t.headers;
      Om(k, "title");
      const S = k.some((_) => {
        const B = typeof _.title == typeof {} ? _.title.value : _.title, F = typeof _.key == typeof {} ? _.key.value : _.key;
        return B.toLowerCase() === v || B.toLowerCase().indexOf(v) > -1 ? (T = B, C = F, _) : !1;
      });
      return S || (T = v, C = v, o.value = !0), { result: S, findTitle: T, findKey: C };
    }, P = (v) => {
      v || u();
    }, $ = (v) => {
      const { findKey: T, findTitle: C } = w(v);
      l.value = T, n("update:key", T), s.value = `${C}:`, r.value = !0;
    }, M = (v, T, C) => {
      var te, ne, de, be, ye;
      console.log(v.key, T, C);
      let k = "";
      if (!T)
        return;
      const S = ((te = s.value) == null ? void 0 : te.split(":")) || [], Z = (S == null ? void 0 : S.length) > 1 && ((ne = S[1]) != null && ne.trim()) ? s.value.replace(`${(de = s.value) == null ? void 0 : de.split(":")[0]}:`, "") : T == null ? void 0 : T.toString().trim();
      r.value ? k = S.length ? `${S[0]}: ${Z}` : "" : k = S.length && S[0].trim() ? S[0] : T == null ? void 0 : T.toString().trim();
      const _ = ((be = s.value) == null ? void 0 : be.split(":")) || [], { findTitle: B, findKey: F } = w(_[0]);
      if (r.value && Z) {
        if (Z) {
          n("update:model-value", a);
          const ke = {
            title: B,
            value: Z.trim(),
            key: F,
            type: o.value ? "tag" : null
          };
          a.push(ke), n("update:model-value", a), n("update:target-item", ke), setTimeout(() => {
            h.closeOnClick = !1, h.closeOnContentClick = !1;
          }, 500), u();
          return;
        }
      } else {
        if (h.closeOnClick = !0, h.closeOnContentClick = !0, l.value = (ye = t.headers.find((ke) => ke.title === T)) == null ? void 0 : ye.key, r.value = !0, C === "tag" && (o.value = !0), k) {
          $(k);
          return;
        }
        setTimeout(() => {
          h.closeOnClick = !1, h.closeOnContentClick = !1;
        }, 500);
      }
      c.value && (c.value.search = "");
    }, b = () => {
      a.push({ title: "미지정 태그", value: "-", key: "undefinedTag", type: "tag" }), n("update:model-value", a), c.value && (c.value.search = "");
    }, Q = (v) => {
      a.splice(v, 1), n("update:model-value", a);
    };
    return (v, T) => {
      const C = z("v-list-subheader"), k = z("v-list-item"), S = z("v-autocomplete"), Z = z("v-chip"), _ = z("v-chip-group");
      return R(), L("div", xT, [
        V(S, {
          ref_key: "autoComp",
          ref: c,
          class: "s-autocomplete",
          style: ct({ width: i.width + "px" }),
          "closable-chips": "",
          multiple: i.multiple,
          density: i.density,
          variant: i.variant,
          items: O.value,
          search: s.value,
          "custom-filter": x,
          placeholder: i.placeholder,
          "menu-props": h,
          "hide-details": "",
          "prepend-inner-icon": i.prependInnerIcon,
          onInput: P,
          "onUpdate:search": f,
          onKeyup: Gn(Tt(M, ["stop"]), ["enter"])
        }, Mi({
          item: E(({ item: B }) => {
            var F;
            return [
              B.raw.subheader ? (R(), L(he, { key: 0 }, [
                V(C, { class: "s-list-subheader" }, {
                  default: E(() => [
                    oe(U(B.raw.subheader), 1)
                  ]),
                  _: 2
                }, 1024),
                T[0] || (T[0] = X("hr", null, null, -1))
              ], 64)) : (R(), se(k, {
                key: 1,
                title: (F = B == null ? void 0 : B.props) == null ? void 0 : F.title,
                onClick: (te) => M(te, B == null ? void 0 : B.raw.title, B == null ? void 0 : B.raw.type)
              }, null, 8, ["title", "onClick"]))
            ];
          }),
          _: 2
        }, [
          i.searchTag ? {
            name: "append-item",
            fn: E(() => [
              J(v.$slots, "null-tag", {}, () => [
                V(C, null, {
                  default: E(() => T[1] || (T[1] = [
                    oe("미지정 태그 검색")
                  ])),
                  _: 1
                }),
                T[3] || (T[3] = X("hr", null, null, -1)),
                V(k, { onClick: b }, {
                  default: E(() => T[2] || (T[2] = [
                    oe("미지정 태그")
                  ])),
                  _: 1
                })
              ], !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["style", "multiple", "density", "variant", "items", "search", "placeholder", "menu-props", "prepend-inner-icon", "onKeyup"]),
        Aa(V(_, null, {
          default: E(() => [
            (R(!0), L(he, null, qe(a, (B, F) => (R(), se(Z, {
              key: "smart-search__value--" + B.title + "__" + B.value,
              closable: "",
              "onClick:close": (te) => Q(F)
            }, {
              default: E(() => [
                X("strong", null, U(B.title), 1),
                oe(" : " + U(B.value), 1)
              ]),
              _: 2
            }, 1032, ["onClick:close"]))), 128))
          ]),
          _: 1
        }, 512), [
          [Ma, a.length]
        ])
      ]);
    };
  }
}, d3 = /* @__PURE__ */ Re(wT, [["__scopeId", "data-v-05993178"]]), QT = { class: "progress-stages" }, kT = { class: "d-flex align-center" }, PT = { class: "stage-title" }, $T = { class: "sub-stages" }, CT = { class: "d-flex align-center justify-space-between" }, ZT = {
  key: 0,
  class: "sub-stage-children"
}, TT = {
  __name: "SProgressStages",
  props: {
    stages: {
      type: Array,
      required: !0
    }
  },
  setup(i) {
    const e = G([]), t = (a) => {
      const c = e.value.indexOf(a.id);
      c === -1 ? e.value.push(a.id) : e.value.splice(c, 1);
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
      const h = z("v-icon"), u = z("v-expand-transition");
      return R(), L("div", QT, [
        (R(!0), L(he, null, qe(i.stages, (f) => (R(), L("div", {
          key: f.id,
          class: "stage-item"
        }, [
          X("div", {
            class: Qe(["stage-header", n(f)])
          }, [
            X("div", kT, [
              V(h, {
                icon: r(f.status),
                color: o(f.status),
                size: "small",
                class: "mr-2"
              }, null, 8, ["icon", "color"]),
              X("span", PT, U(f.title), 1)
            ])
          ], 2),
          X("div", $T, [
            (R(!0), L(he, null, qe(f.subStages, (d, p) => {
              var g;
              return R(), L("div", {
                key: d.id,
                class: Qe(["sub-stage-item", s(d)])
              }, [
                X("div", CT, [
                  X("span", {
                    style: ct({ color: l(d.status) })
                  }, U(`${f.id}-${p + 1}. ${d.title}`), 5),
                  (g = d.children) != null && g.length ? (R(), se(h, {
                    key: 0,
                    icon: e.value.includes(d.id) ? "mdi-chevron-up" : "mdi-chevron-down",
                    size: "small",
                    onClick: Tt((m) => t(d), ["stop"])
                  }, null, 8, ["icon", "onClick"])) : ae("", !0)
                ]),
                V(u, null, {
                  default: E(() => {
                    var m;
                    return [
                      e.value.includes(d.id) && ((m = d.children) != null && m.length) ? (R(), L("div", ZT, [
                        (R(!0), L(he, null, qe(d.children, (O) => (R(), L("div", {
                          key: O.id,
                          class: Qe(["sub-stage-child", s(O)])
                        }, U(O.title), 3))), 128))
                      ])) : ae("", !0)
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
}, p3 = /* @__PURE__ */ Re(TT, [["__scopeId", "data-v-ba401acd"]]), AT = { class: "notification__header-box" }, MT = ["onMouseenter", "onClick", "onKeyup"], RT = { class: "notification__prefix" }, _T = { class: "notification__title-wrapper" }, XT = { class: "title--left" }, ET = { class: "notification__title" }, LT = { class: "created" }, DT = { class: "notification__message-box" }, jT = { class: "notification__message" }, BT = { class: "notification__delete-box" }, VT = ["onClick"], qT = { class: "notification__additional-box" }, WT = {
  key: 1,
  class: "notification-no-item"
}, O3 = {
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
    const t = e, n = i, s = G(!1), r = G(""), o = I(() => (d) => d), l = (d) => {
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
        const g = `${p}En`;
        return d[g] || d[p];
      }
      return d[p];
    };
    return (d, p) => {
      const g = z("v-icon");
      return R(), L("div", {
        class: Qe(["s-notification", s.value ? "more" : ""])
      }, [
        X("div", AT, U(i.notificationName), 1),
        i.items.length ? (R(), L(he, { key: 0 }, [
          X("div", {
            class: Qe(["notification__contents-box", s.value ? "more" : ""])
          }, [
            (R(!0), L(he, null, qe(i.items, (m) => (R(), L("div", {
              class: "notification__content",
              key: m.idx,
              onMouseenter: (O) => c(m.notificationIdx),
              onMouseleave: p[0] || (p[0] = (O) => r.value = ""),
              onClick: (O) => h(m),
              onKeyup: Gn((O) => h(m), ["enter"])
            }, [
              X("div", RT, [
                V(g, null, {
                  default: E(() => [
                    oe(U(l(m)), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              X("div", _T, [
                X("div", XT, [
                  X("div", ET, [
                    X("span", null, U(f(m, "msgTitle")), 1),
                    X("span", LT, U(o.value(m.createdAt) || "-"), 1)
                  ]),
                  X("div", DT, [
                    X("div", jT, [
                      X("div", null, [
                        X("span", null, U(f(m, "msgContent")), 1)
                      ])
                    ]),
                    X("div", BT, [
                      r.value === m.notificationIdx ? (R(), L("div", {
                        key: 0,
                        class: "notification__delete-wrapper",
                        onClick: Tt((O) => u(m), ["stop"])
                      }, [
                        V(g, {
                          class: "notification__delete-icon",
                          contain: ""
                        }, {
                          default: E(() => p[1] || (p[1] = [
                            oe("mdi-close")
                          ])),
                          _: 1
                        })
                      ], 8, VT)) : ae("", !0)
                    ])
                  ]),
                  X("div", qT, [
                    X("p", null, U(f(m, "msgAdditional")), 1)
                  ])
                ])
              ])
            ], 40, MT))), 128))
          ], 2),
          s.value ? ae("", !0) : (R(), L("div", {
            key: 0,
            class: "notification__footer-box",
            onClick: a,
            onKeypress: a
          }, " ... ", 32))
        ], 64)) : (R(), L("div", WT, U(i.noItemText), 1))
      ], 2);
    };
  }
};
export {
  h3 as SAccordionMenu,
  FT as SAlert,
  y2 as SAvatar,
  Hn as SBtn,
  r3 as SCardTable,
  i3 as SConfirm,
  o3 as SDataTable,
  w1 as SEmpty,
  GT as SFileInputBtn,
  a3 as SFooter,
  t3 as SFormItem,
  e3 as SFormTable,
  s3 as SGlobalProgress,
  l3 as SHeader,
  Of as SImg,
  n3 as SModal,
  u3 as SNavi,
  O3 as SNotification,
  $2 as SProgressCircular,
  p3 as SProgressStages,
  NT as SRefreshBtn,
  JT as SScriptEditor,
  YT as SShellScriptInput,
  f3 as SSmartSearch,
  d3 as SSmartSearchServer,
  c3 as SSubHeader,
  UT as STextCheckBoxInput,
  zT as customTheme,
  E2 as regexUtil,
  Yg as stringUtil
};
