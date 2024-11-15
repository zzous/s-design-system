import { Fragment as Xe, reactive as so, computed as I, watchEffect as kn, toRefs as m0, shallowRef as Kt, warn as Ta, getCurrentInstance as Vi, inject as Si, provide as oo, defineComponent as Ra, watch as ae, onScopeDispose as At, effectScope as Ma, ref as ie, toRaw as $d, isRef as lo, h as Za, mergeProps as mt, TransitionGroup as g0, Transition as _d, createVNode as N, unref as re, toRef as Qi, Text as y0, nextTick as Pn, onMounted as Ni, readonly as v0, onBeforeUnmount as Ad, Teleport as ao, withDirectives as b0, vShow as S0, resolveDirective as x0, useSlots as w0, resolveComponent as K, openBlock as Z, createBlock as ke, createSlots as Da, withCtx as X, createTextVNode as De, toDisplayString as le, renderSlot as ge, mergeModels as Ed, useModel as Td, createElementBlock as F, createCommentVNode as Be, createElementVNode as Y, renderList as Qt, normalizeStyle as Jt, onUnmounted as Rd, resolveDynamicComponent as k0, toValue as _e, normalizeClass as Fe, withModifiers as Hi, toHandlers as P0, normalizeProps as Q0, guardReactiveProps as C0, createStaticVNode as $0, withKeys as Lu } from "vue";
const _0 = {
  dark: !1,
  colors: {},
  variables: { "font-family": "Paperlogy, Noto Sans KR, sans-serif" }
}, K_ = {
  defaultTheme: "defaultTheme",
  themes: { defaultTheme: _0 }
};
function Je(i, e) {
  return (t) => Object.keys(i).reduce((n, r) => {
    const o = typeof i[r] == "object" && i[r] != null && !Array.isArray(i[r]) ? i[r] : {
      type: i[r]
    };
    return t && r in t ? n[r] = {
      ...o,
      default: t[r]
    } : n[r] = o, e && !n[r].source && (n[r].source = e), n;
  }, {});
}
const Md = Je({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Yt = typeof window < "u";
function Ce(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(i == null || i === ""))
    return isNaN(+i) ? String(i) : isFinite(+i) ? `${Number(i)}${e}` : void 0;
}
function Bu(i) {
  let e;
  return i !== null && typeof i == "object" && ((e = Object.getPrototypeOf(i)) === Object.prototype || e === null);
}
function A0(i) {
  if (i && "$el" in i) {
    const e = i.$el;
    return (e == null ? void 0 : e.nodeType) === Node.TEXT_NODE ? e.nextElementSibling : e;
  }
  return i;
}
function Ao(i, e) {
  return e.every((t) => i.hasOwnProperty(t));
}
function E0(i, e) {
  const t = {}, n = new Set(Object.keys(i));
  for (const r of e)
    n.has(r) && (t[r] = i[r]);
  return t;
}
const T0 = /^on[^a-z]/, Zd = (i) => T0.test(i);
function Iu(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(e, Math.min(t, i));
}
function ju(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return i + t.repeat(Math.max(0, e - i.length));
}
function R0(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let n = 0;
  for (; n < i.length; )
    t.push(i.substr(n, e)), n += e;
  return t;
}
function Dd() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const r in i)
    n[r] = i[r];
  for (const r in e) {
    const s = i[r], o = e[r];
    if (Bu(s) && Bu(o)) {
      n[r] = Dd(s, o, t);
      continue;
    }
    if (t && Array.isArray(s) && Array.isArray(o)) {
      n[r] = t(s, o);
      continue;
    }
    n[r] = o;
  }
  return n;
}
function Vd(i) {
  return i.map((e) => e.type === Xe ? Vd(e.children) : e).flat();
}
function Ri() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Ri.cache.has(i)) return Ri.cache.get(i);
  const e = i.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Ri.cache.set(i, e), e;
}
Ri.cache = /* @__PURE__ */ new Map();
function Va(i) {
  const e = so({}), t = I(i);
  return kn(() => {
    for (const n in t.value)
      e[n] = t.value[n];
  }, {
    flush: "sync"
  }), m0(e);
}
function Qs(i, e) {
  return i.includes(e);
}
function Ld(i) {
  return i[2].toLowerCase() + i.slice(3);
}
function M0(i, e) {
  if (!(Yt && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${e})`))) return null;
  try {
    return !!i && i.matches(e);
  } catch {
    return null;
  }
}
function Z0(i, e) {
  if (!Yt || i === 0)
    return e(), () => {
    };
  const t = window.setTimeout(e, i);
  return () => window.clearTimeout(t);
}
function zu() {
  const i = Kt(), e = (t) => {
    i.value = t;
  };
  return Object.defineProperty(e, "value", {
    enumerable: !0,
    get: () => i.value,
    set: (t) => i.value = t
  }), Object.defineProperty(e, "el", {
    enumerable: !0,
    get: () => A0(i.value)
  }), e;
}
const Bd = ["top", "bottom"], D0 = ["start", "end", "left", "right"];
function qu(i, e) {
  let [t, n] = i.split(" ");
  return n || (n = Qs(Bd, t) ? "start" : Qs(D0, t) ? "top" : "center"), {
    side: Nu(t, e),
    align: Nu(n, e)
  };
}
function Nu(i, e) {
  return i === "start" ? e ? "right" : "left" : i === "end" ? e ? "left" : "right" : i;
}
function Eo(i) {
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
function To(i) {
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
function Xu(i) {
  return {
    side: i.align,
    align: i.side
  };
}
function Yu(i) {
  return Qs(Bd, i.side) ? "y" : "x";
}
class Mi {
  constructor(e) {
    let {
      x: t,
      y: n,
      width: r,
      height: s
    } = e;
    this.x = t, this.y = n, this.width = r, this.height = s;
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
function Uu(i, e) {
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
function V0(i) {
  return Array.isArray(i) ? new Mi({
    x: i[0],
    y: i[1],
    width: 0,
    height: 0
  }) : i.getBoundingClientRect();
}
function L0(i) {
  const e = i.getBoundingClientRect(), t = getComputedStyle(i), n = t.transform;
  if (n) {
    let r, s, o, l, a;
    if (n.startsWith("matrix3d("))
      r = n.slice(9, -1).split(/, /), s = +r[0], o = +r[5], l = +r[12], a = +r[13];
    else if (n.startsWith("matrix("))
      r = n.slice(7, -1).split(/, /), s = +r[0], o = +r[3], l = +r[4], a = +r[5];
    else
      return new Mi(e);
    const u = t.transformOrigin, c = e.x - l - (1 - s) * parseFloat(u), h = e.y - a - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = s ? e.width / s : i.offsetWidth + 1, d = o ? e.height / o : i.offsetHeight + 1;
    return new Mi({
      x: c,
      y: h,
      width: f,
      height: d
    });
  } else
    return new Mi(e);
}
function B0(i, e, t) {
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
  return typeof n.finished > "u" && (n.finished = new Promise((r) => {
    n.onfinish = () => {
      r(n);
    };
  })), n;
}
const cs = /* @__PURE__ */ new WeakMap();
function I0(i, e) {
  Object.keys(e).forEach((t) => {
    if (Zd(t)) {
      const n = Ld(t), r = cs.get(i);
      if (e[t] == null)
        r == null || r.forEach((s) => {
          const [o, l] = s;
          o === n && (i.removeEventListener(n, l), r.delete(s));
        });
      else if (!r || ![...r].some((s) => s[0] === n && s[1] === e[t])) {
        i.addEventListener(n, e[t]);
        const s = r || /* @__PURE__ */ new Set();
        s.add([n, e[t]]), cs.has(i) || cs.set(i, s);
      }
    } else
      e[t] == null ? i.removeAttribute(t) : i.setAttribute(t, e[t]);
  });
}
function j0(i, e) {
  Object.keys(e).forEach((t) => {
    if (Zd(t)) {
      const n = Ld(t), r = cs.get(i);
      r == null || r.forEach((s) => {
        const [o, l] = s;
        o === n && (i.removeEventListener(n, l), r.delete(s));
      });
    } else
      i.removeAttribute(t);
  });
}
const Ui = 2.4, Fu = 0.2126729, Wu = 0.7151522, Gu = 0.072175, z0 = 0.55, q0 = 0.58, N0 = 0.57, X0 = 0.62, Lr = 0.03, Hu = 1.45, Y0 = 5e-4, U0 = 1.25, F0 = 1.25, Ku = 0.078, Ju = 12.82051282051282, Br = 0.06, ec = 1e-3;
function tc(i, e) {
  const t = (i.r / 255) ** Ui, n = (i.g / 255) ** Ui, r = (i.b / 255) ** Ui, s = (e.r / 255) ** Ui, o = (e.g / 255) ** Ui, l = (e.b / 255) ** Ui;
  let a = t * Fu + n * Wu + r * Gu, u = s * Fu + o * Wu + l * Gu;
  if (a <= Lr && (a += (Lr - a) ** Hu), u <= Lr && (u += (Lr - u) ** Hu), Math.abs(u - a) < Y0) return 0;
  let c;
  if (u > a) {
    const h = (u ** z0 - a ** q0) * U0;
    c = h < ec ? 0 : h < Ku ? h - h * Ju * Br : h - Br;
  } else {
    const h = (u ** X0 - a ** N0) * F0;
    c = h > -ec ? 0 : h > -Ku ? h - h * Ju * Br : h + Br;
  }
  return c * 100;
}
function Fn(i) {
  Ta(`Vuetify: ${i}`);
}
function W0(i) {
  Ta(`Vuetify error: ${i}`);
}
function Ol(i) {
  return !!i && /^(#|var\(--|(rgb|hsl)a?\()/.test(i);
}
function G0(i) {
  return Ol(i) && !/^((rgb|hsl)a?\()?var\(--/.test(i);
}
const ic = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, H0 = {
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
  hsl: (i, e, t, n) => nc({
    h: i,
    s: e,
    l: t,
    a: n
  }),
  hsla: (i, e, t, n) => nc({
    h: i,
    s: e,
    l: t,
    a: n
  }),
  hsv: (i, e, t, n) => rr({
    h: i,
    s: e,
    v: t,
    a: n
  }),
  hsva: (i, e, t, n) => rr({
    h: i,
    s: e,
    v: t,
    a: n
  })
};
function In(i) {
  if (typeof i == "number")
    return (isNaN(i) || i < 0 || i > 16777215) && Fn(`'${i}' is not a valid hex color`), {
      r: (i & 16711680) >> 16,
      g: (i & 65280) >> 8,
      b: i & 255
    };
  if (typeof i == "string" && ic.test(i)) {
    const {
      groups: e
    } = i.match(ic), {
      fn: t,
      values: n
    } = e, r = n.split(/,\s*/).map((s) => s.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(s) / 100 : parseFloat(s));
    return H0[t](...r);
  } else if (typeof i == "string") {
    let e = i.startsWith("#") ? i.slice(1) : i;
    [3, 4].includes(e.length) ? e = e.split("").map((n) => n + n).join("") : [6, 8].includes(e.length) || Fn(`'${i}' is not a valid hex(a) color`);
    const t = parseInt(e, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Fn(`'${i}' is not a valid hex(a) color`), K0(e);
  } else if (typeof i == "object") {
    if (Ao(i, ["r", "g", "b"]))
      return i;
    if (Ao(i, ["h", "s", "l"]))
      return rr(Id(i));
    if (Ao(i, ["h", "s", "v"]))
      return rr(i);
  }
  throw new TypeError(`Invalid color: ${i == null ? i : String(i) || i.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function rr(i) {
  const {
    h: e,
    s: t,
    v: n,
    a: r
  } = i, s = (l) => {
    const a = (l + e / 60) % 6;
    return n - n * t * Math.max(Math.min(a, 4 - a, 1), 0);
  }, o = [s(5), s(3), s(1)].map((l) => Math.round(l * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: r
  };
}
function nc(i) {
  return rr(Id(i));
}
function Id(i) {
  const {
    h: e,
    s: t,
    l: n,
    a: r
  } = i, s = n + t * Math.min(n, 1 - n), o = s === 0 ? 0 : 2 - 2 * n / s;
  return {
    h: e,
    s: o,
    v: s,
    a: r
  };
}
function K0(i) {
  i = J0(i);
  let [e, t, n, r] = R0(i, 2).map((s) => parseInt(s, 16));
  return r = r === void 0 ? r : r / 255, {
    r: e,
    g: t,
    b: n,
    a: r
  };
}
function J0(i) {
  return i.startsWith("#") && (i = i.slice(1)), i = i.replace(/([^0-9a-f])/gi, "F"), (i.length === 3 || i.length === 4) && (i = i.split("").map((e) => e + e).join("")), i.length !== 6 && (i = ju(ju(i, 6), 8, "F")), i;
}
function e1(i) {
  const e = Math.abs(tc(In(0), In(i)));
  return Math.abs(tc(In(16777215), In(i))) > Math.min(e, 50) ? "#fff" : "#000";
}
function Et(i, e) {
  const t = Vi();
  if (!t)
    throw new Error(`[Vuetify] ${i} must be called from inside a setup function`);
  return t;
}
function jd() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const e = Et(i).type;
  return Ri((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
function t1(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Et("injectSelf");
  const {
    provides: t
  } = e;
  if (t && i in t)
    return t[i];
}
const ml = Symbol.for("vuetify:defaults");
function zd() {
  const i = Si(ml);
  if (!i) throw new Error("[Vuetify] Could not find defaults instance");
  return i;
}
function i1(i, e) {
  var t, n;
  return typeof ((t = i.props) == null ? void 0 : t[e]) < "u" || typeof ((n = i.props) == null ? void 0 : n[Ri(e)]) < "u";
}
function n1() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zd();
  const n = Et("useDefaults");
  if (e = e ?? n.type.name ?? n.type.__name, !e)
    throw new Error("[Vuetify] Could not determine component name");
  const r = I(() => {
    var a;
    return (a = t.value) == null ? void 0 : a[i._as ?? e];
  }), s = new Proxy(i, {
    get(a, u) {
      var h, f, d, p, O, m, g;
      const c = Reflect.get(a, u);
      return u === "class" || u === "style" ? [(h = r.value) == null ? void 0 : h[u], c].filter((y) => y != null) : typeof u == "string" && !i1(n.vnode, u) ? ((f = r.value) == null ? void 0 : f[u]) !== void 0 ? (d = r.value) == null ? void 0 : d[u] : ((O = (p = t.value) == null ? void 0 : p.global) == null ? void 0 : O[u]) !== void 0 ? (g = (m = t.value) == null ? void 0 : m.global) == null ? void 0 : g[u] : c : c;
    }
  }), o = Kt();
  kn(() => {
    if (r.value) {
      const a = Object.entries(r.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = a.length ? Object.fromEntries(a) : void 0;
    } else
      o.value = void 0;
  });
  function l() {
    const a = t1(ml, n);
    oo(ml, I(() => o.value ? Dd((a == null ? void 0 : a.value) ?? {}, o.value) : a == null ? void 0 : a.value));
  }
  return {
    props: s,
    provideSubDefaults: l
  };
}
function uo(i) {
  if (i._setup = i._setup ?? i.setup, !i.name)
    return Fn("The component is missing an explicit name, unable to generate default prop value"), i;
  if (i._setup) {
    i.props = Je(i.props ?? {}, i.name)();
    const e = Object.keys(i.props).filter((t) => t !== "class" && t !== "style");
    i.filterProps = function(n) {
      return E0(n, e);
    }, i.props._as = String, i.setup = function(n, r) {
      const s = zd();
      if (!s.value) return i._setup(n, r);
      const {
        props: o,
        provideSubDefaults: l
      } = n1(n, n._as ?? i.name, s), a = i._setup(o, r);
      return l(), a;
    };
  }
  return i;
}
function La() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (e) => (i ? uo : Ra)(e);
}
function qd(i) {
  if (typeof i.getRootNode != "function") {
    for (; i.parentNode; ) i = i.parentNode;
    return i !== document ? null : document;
  }
  const e = i.getRootNode();
  return e !== document && e.getRootNode({
    composed: !0
  }) !== document ? null : e;
}
const r1 = "cubic-bezier(0.4, 0, 0.2, 1)";
function s1(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; i; ) {
    if (e ? o1(i) : Ba(i)) return i;
    i = i.parentElement;
  }
  return document.scrollingElement;
}
function Cs(i, e) {
  const t = [];
  if (e && i && !e.contains(i)) return t;
  for (; i && (Ba(i) && t.push(i), i !== e); )
    i = i.parentElement;
  return t;
}
function Ba(i) {
  if (!i || i.nodeType !== Node.ELEMENT_NODE) return !1;
  const e = window.getComputedStyle(i);
  return e.overflowY === "scroll" || e.overflowY === "auto" && i.scrollHeight > i.clientHeight;
}
function o1(i) {
  if (!i || i.nodeType !== Node.ELEMENT_NODE) return !1;
  const e = window.getComputedStyle(i);
  return ["scroll", "auto"].includes(e.overflowY);
}
function l1(i) {
  for (; i; ) {
    if (window.getComputedStyle(i).position === "fixed")
      return !0;
    i = i.offsetParent;
  }
  return !1;
}
function Nd(i) {
  const e = Et("useRender");
  e.render = i;
}
function co(i, e) {
  let t;
  function n() {
    t = Ma(), t.run(() => e.length ? e(() => {
      t == null || t.stop(), n();
    }) : e());
  }
  ae(i, (r) => {
    r && !t ? n() : r || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), At(() => {
    t == null || t.stop();
  });
}
function a1(i, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (h) => h, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (h) => h;
  const s = Et("useProxiedModel"), o = ie(i[e] !== void 0 ? i[e] : t), l = Ri(e), u = l !== e ? I(() => {
    var h, f, d, p;
    return i[e], !!(((h = s.vnode.props) != null && h.hasOwnProperty(e) || (f = s.vnode.props) != null && f.hasOwnProperty(l)) && ((d = s.vnode.props) != null && d.hasOwnProperty(`onUpdate:${e}`) || (p = s.vnode.props) != null && p.hasOwnProperty(`onUpdate:${l}`)));
  }) : I(() => {
    var h, f;
    return i[e], !!((h = s.vnode.props) != null && h.hasOwnProperty(e) && ((f = s.vnode.props) != null && f.hasOwnProperty(`onUpdate:${e}`)));
  });
  co(() => !u.value, () => {
    ae(() => i[e], (h) => {
      o.value = h;
    });
  });
  const c = I({
    get() {
      const h = i[e];
      return n(u.value ? h : o.value);
    },
    set(h) {
      const f = r(h), d = $d(u.value ? i[e] : o.value);
      d === f || n(d) === h || (o.value = f, s == null || s.emit(`update:${e}`, f));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => u.value ? i[e] : o.value
  }), c;
}
const u1 = Symbol.for("vuetify:locale");
function c1() {
  const i = Si(u1);
  if (!i) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: i.isRtl,
    rtlClasses: i.rtlClasses
  };
}
const rc = Symbol.for("vuetify:theme"), Xd = Je({
  theme: String
}, "theme");
function Yd(i) {
  Et("provideTheme");
  const e = Si(rc, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  const t = I(() => i.theme ?? e.name.value), n = I(() => e.themes.value[t.value]), r = I(() => e.isDisabled ? void 0 : `v-theme--${t.value}`), s = {
    ...e,
    name: t,
    current: n,
    themeClasses: r
  };
  return oo(rc, s), s;
}
const h1 = Je({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), f1 = Je({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function d1(i) {
  return {
    dimensionStyles: I(() => {
      const t = {}, n = Ce(i.height), r = Ce(i.maxHeight), s = Ce(i.maxWidth), o = Ce(i.minHeight), l = Ce(i.minWidth), a = Ce(i.width);
      return n != null && (t.height = n), r != null && (t.maxHeight = r), s != null && (t.maxWidth = s), o != null && (t.minHeight = o), l != null && (t.minWidth = l), a != null && (t.width = a), t;
    })
  };
}
function Ud(i) {
  return Va(() => {
    const e = [], t = {};
    if (i.value.background)
      if (Ol(i.value.background)) {
        if (t.backgroundColor = i.value.background, !i.value.text && G0(i.value.background)) {
          const n = In(i.value.background);
          if (n.a == null || n.a === 1) {
            const r = e1(n);
            t.color = r, t.caretColor = r;
          }
        }
      } else
        e.push(`bg-${i.value.background}`);
    return i.value.text && (Ol(i.value.text) ? (t.color = i.value.text, t.caretColor = i.value.text) : e.push(`text-${i.value.text}`)), {
      colorClasses: e,
      colorStyles: t
    };
  });
}
function p1(i, e) {
  const t = I(() => ({
    text: lo(i) ? i.value : null
  })), {
    colorClasses: n,
    colorStyles: r
  } = Ud(t);
  return {
    textColorClasses: n,
    textColorStyles: r
  };
}
function O1(i, e) {
  const t = I(() => ({
    background: lo(i) ? i.value : null
  })), {
    colorClasses: n,
    colorStyles: r
  } = Ud(t);
  return {
    backgroundColorClasses: n,
    backgroundColorStyles: r
  };
}
const m1 = Je({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (i) => i !== !0
  }
}, "transition"), g1 = (i, e) => {
  let {
    slots: t
  } = e;
  const {
    transition: n,
    disabled: r,
    group: s,
    ...o
  } = i, {
    component: l = s ? g0 : _d,
    ...a
  } = typeof n == "object" ? n : {};
  return Za(l, mt(typeof n == "string" ? {
    name: r ? "" : n
  } : a, typeof n == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: r,
    group: s
  }).filter((u) => {
    let [c, h] = u;
    return h !== void 0;
  })), o), t);
}, Fd = [String, Function, Object, Array], y1 = Symbol.for("vuetify:icons"), ho = Je({
  icon: {
    type: Fd
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), sc = La()({
  name: "VComponentIcon",
  props: ho(),
  setup(i, e) {
    let {
      slots: t
    } = e;
    return () => {
      const n = i.icon;
      return N(i.tag, null, {
        default: () => {
          var r;
          return [i.icon ? N(n, null, null) : (r = t.default) == null ? void 0 : r.call(t)];
        }
      });
    };
  }
}), v1 = uo({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: ho(),
  setup(i, e) {
    let {
      attrs: t
    } = e;
    return () => N(i.tag, mt(t, {
      style: null
    }), {
      default: () => [N("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(i.icon) ? i.icon.map((n) => Array.isArray(n) ? N("path", {
        d: n[0],
        "fill-opacity": n[1]
      }, null) : N("path", {
        d: n
      }, null)) : N("path", {
        d: i.icon
      }, null)])]
    });
  }
});
uo({
  name: "VLigatureIcon",
  props: ho(),
  setup(i) {
    return () => N(i.tag, null, {
      default: () => [i.icon]
    });
  }
});
uo({
  name: "VClassIcon",
  props: ho(),
  setup(i) {
    return () => N(i.tag, {
      class: i.icon
    }, null);
  }
});
const b1 = (i) => {
  const e = Si(y1);
  if (!e) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: I(() => {
      var a;
      const n = re(i);
      if (!n) return {
        component: sc
      };
      let r = n;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = (a = e.aliases) == null ? void 0 : a[r.slice(1)])), r || Fn(`Could not find aliased icon "${n}"`), Array.isArray(r))
        return {
          component: v1,
          icon: r
        };
      if (typeof r != "string")
        return {
          component: sc,
          icon: r
        };
      const s = Object.keys(e.sets).find((u) => typeof r == "string" && r.startsWith(`${u}:`)), o = s ? r.slice(s.length + 1) : r;
      return {
        component: e.sets[s ?? e.defaultSet].component,
        icon: o
      };
    })
  };
}, S1 = ["x-small", "small", "default", "large", "x-large"], x1 = Je({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function w1(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jd();
  return Va(() => {
    let t, n;
    return Qs(S1, i.size) ? t = `${e}--size-${i.size}` : i.size && (n = {
      width: Ce(i.size),
      height: Ce(i.size)
    }), {
      sizeClasses: t,
      sizeStyles: n
    };
  });
}
const k1 = Je({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Fd,
  ...Md(),
  ...x1(),
  ...h1({
    tag: "i"
  }),
  ...Xd()
}, "VIcon"), P1 = La()({
  name: "VIcon",
  props: k1(),
  setup(i, e) {
    let {
      attrs: t,
      slots: n
    } = e;
    const r = ie(), {
      themeClasses: s
    } = Yd(i), {
      iconData: o
    } = b1(I(() => r.value || i.icon)), {
      sizeClasses: l
    } = w1(i), {
      textColorClasses: a,
      textColorStyles: u
    } = p1(Qi(i, "color"));
    return Nd(() => {
      var f, d;
      const c = (f = n.default) == null ? void 0 : f.call(n);
      c && (r.value = (d = Vd(c).filter((p) => p.type === y0 && p.children && typeof p.children == "string")[0]) == null ? void 0 : d.children);
      const h = !!(t.onClick || t.onClickOnce);
      return N(o.value.component, {
        tag: i.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", s.value, l.value, a.value, {
          "v-icon--clickable": h,
          "v-icon--disabled": i.disabled,
          "v-icon--start": i.start,
          "v-icon--end": i.end
        }, i.class],
        style: [l.value ? void 0 : {
          fontSize: Ce(i.size),
          height: Ce(i.size),
          width: Ce(i.size)
        }, u.value, i.style],
        role: h ? "button" : void 0,
        "aria-hidden": !h,
        tabindex: h ? i.disabled ? -1 : 0 : void 0
      }, {
        default: () => [c]
      });
    }), {};
  }
});
function Q1() {
  var i, e;
  return (e = (i = Et("useRouter")) == null ? void 0 : i.proxy) == null ? void 0 : e.$router;
}
let Ro = !1;
function C1(i, e) {
  let t = !1, n, r;
  Yt && (Pn(() => {
    window.addEventListener("popstate", s), n = i == null ? void 0 : i.beforeEach((o, l, a) => {
      Ro ? t ? e(a) : a() : setTimeout(() => t ? e(a) : a()), Ro = !0;
    }), r = i == null ? void 0 : i.afterEach(() => {
      Ro = !1;
    });
  }), At(() => {
    window.removeEventListener("popstate", s), n == null || n(), r == null || r();
  }));
  function s(o) {
    var l;
    (l = o.state) != null && l.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
const $1 = Symbol.for("vuetify:display");
function _1() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jd();
  const t = Si($1);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const n = I(() => {
    if (i.mobile != null) return i.mobile;
    if (!i.mobileBreakpoint) return t.mobile.value;
    const s = typeof i.mobileBreakpoint == "number" ? i.mobileBreakpoint : t.thresholds.value[i.mobileBreakpoint];
    return t.width.value < s;
  }), r = I(() => e ? {
    [`${e}--mobile`]: n.value
  } : {});
  return {
    ...t,
    displayClasses: r,
    mobile: n
  };
}
function Mo(i, e) {
  return {
    x: i.x + e.x,
    y: i.y + e.y
  };
}
function A1(i, e) {
  return {
    x: i.x - e.x,
    y: i.y - e.y
  };
}
function oc(i, e) {
  if (i.side === "top" || i.side === "bottom") {
    const {
      side: t,
      align: n
    } = i, r = n === "left" ? 0 : n === "center" ? e.width / 2 : n === "right" ? e.width : n, s = t === "top" ? 0 : t === "bottom" ? e.height : t;
    return Mo({
      x: r,
      y: s
    }, e);
  } else if (i.side === "left" || i.side === "right") {
    const {
      side: t,
      align: n
    } = i, r = t === "left" ? 0 : t === "right" ? e.width : t, s = n === "top" ? 0 : n === "center" ? e.height / 2 : n === "bottom" ? e.height : n;
    return Mo({
      x: r,
      y: s
    }, e);
  }
  return Mo({
    x: e.width / 2,
    y: e.height / 2
  }, e);
}
const Wd = {
  static: R1,
  // specific viewport position, usually centered
  connected: Z1
  // connected to a certain element
}, E1 = Je({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (i) => typeof i == "function" || i in Wd
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
function T1(i, e) {
  const t = ie({}), n = ie();
  Yt && co(() => !!(e.isActive.value && i.locationStrategy), (s) => {
    var o, l;
    ae(() => i.locationStrategy, s), At(() => {
      window.removeEventListener("resize", r), n.value = void 0;
    }), window.addEventListener("resize", r, {
      passive: !0
    }), typeof i.locationStrategy == "function" ? n.value = (o = i.locationStrategy(e, i, t)) == null ? void 0 : o.updateLocation : n.value = (l = Wd[i.locationStrategy](e, i, t)) == null ? void 0 : l.updateLocation;
  });
  function r(s) {
    var o;
    (o = n.value) == null || o.call(n, s);
  }
  return {
    contentStyles: t,
    updateLocation: n
  };
}
function R1() {
}
function M1(i, e) {
  const t = L0(i);
  return e ? t.x += parseFloat(i.style.right || 0) : t.x -= parseFloat(i.style.left || 0), t.y -= parseFloat(i.style.top || 0), t;
}
function Z1(i, e, t) {
  (Array.isArray(i.target.value) || l1(i.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [i.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: r,
    preferredOrigin: s
  } = Va(() => {
    const p = qu(e.location, i.isRtl.value), O = e.origin === "overlap" ? p : e.origin === "auto" ? Eo(p) : qu(e.origin, i.isRtl.value);
    return p.side === O.side && p.align === To(O).align ? {
      preferredAnchor: Xu(p),
      preferredOrigin: Xu(O)
    } : {
      preferredAnchor: p,
      preferredOrigin: O
    };
  }), [o, l, a, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => I(() => {
    const O = parseFloat(e[p]);
    return isNaN(O) ? 1 / 0 : O;
  })), c = I(() => {
    if (Array.isArray(e.offset))
      return e.offset;
    if (typeof e.offset == "string") {
      const p = e.offset.split(" ").map(parseFloat);
      return p.length < 2 && p.push(0), p;
    }
    return typeof e.offset == "number" ? [e.offset, 0] : [0, 0];
  });
  let h = !1;
  const f = new ResizeObserver(() => {
    h && d();
  });
  ae([i.target, i.contentEl], (p, O) => {
    let [m, g] = p, [y, b] = O;
    y && !Array.isArray(y) && f.unobserve(y), m && !Array.isArray(m) && f.observe(m), b && f.unobserve(b), g && f.observe(g);
  }, {
    immediate: !0
  }), At(() => {
    f.disconnect();
  });
  function d() {
    if (h = !1, requestAnimationFrame(() => h = !0), !i.target.value || !i.contentEl.value) return;
    const p = V0(i.target.value), O = M1(i.contentEl.value, i.isRtl.value), m = Cs(i.contentEl.value), g = 12;
    m.length || (m.push(document.documentElement), i.contentEl.value.style.top && i.contentEl.value.style.left || (O.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), O.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const y = m.reduce((L, T) => {
      const Q = T.getBoundingClientRect(), $ = new Mi({
        x: T === document.documentElement ? 0 : Q.x,
        y: T === document.documentElement ? 0 : Q.y,
        width: T.clientWidth,
        height: T.clientHeight
      });
      return L ? new Mi({
        x: Math.max(L.left, $.left),
        y: Math.max(L.top, $.top),
        width: Math.min(L.right, $.right) - Math.max(L.left, $.left),
        height: Math.min(L.bottom, $.bottom) - Math.max(L.top, $.top)
      }) : $;
    }, void 0);
    y.x += g, y.y += g, y.width -= g * 2, y.height -= g * 2;
    let b = {
      anchor: r.value,
      origin: s.value
    };
    function x(L) {
      const T = new Mi(O), Q = oc(L.anchor, p), $ = oc(L.origin, T);
      let {
        x: z,
        y: G
      } = A1(Q, $);
      switch (L.anchor.side) {
        case "top":
          G -= c.value[0];
          break;
        case "bottom":
          G += c.value[0];
          break;
        case "left":
          z -= c.value[0];
          break;
        case "right":
          z += c.value[0];
          break;
      }
      switch (L.anchor.align) {
        case "top":
          G -= c.value[1];
          break;
        case "bottom":
          G += c.value[1];
          break;
        case "left":
          z -= c.value[1];
          break;
        case "right":
          z += c.value[1];
          break;
      }
      return T.x += z, T.y += G, T.width = Math.min(T.width, a.value), T.height = Math.min(T.height, u.value), {
        overflows: Uu(T, y),
        x: z,
        y: G
      };
    }
    let S = 0, k = 0;
    const w = {
      x: 0,
      y: 0
    }, P = {
      x: !1,
      y: !1
    };
    let A = -1;
    for (; ; ) {
      if (A++ > 10) {
        W0("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: L,
        y: T,
        overflows: Q
      } = x(b);
      S += L, k += T, O.x += L, O.y += T;
      {
        const $ = Yu(b.anchor), z = Q.x.before || Q.x.after, G = Q.y.before || Q.y.after;
        let V = !1;
        if (["x", "y"].forEach((oe) => {
          if (oe === "x" && z && !P.x || oe === "y" && G && !P.y) {
            const J = {
              anchor: {
                ...b.anchor
              },
              origin: {
                ...b.origin
              }
            }, ue = oe === "x" ? $ === "y" ? To : Eo : $ === "y" ? Eo : To;
            J.anchor = ue(J.anchor), J.origin = ue(J.origin);
            const {
              overflows: ce
            } = x(J);
            (ce[oe].before <= Q[oe].before && ce[oe].after <= Q[oe].after || ce[oe].before + ce[oe].after < (Q[oe].before + Q[oe].after) / 2) && (b = J, V = P[oe] = !0);
          }
        }), V) continue;
      }
      Q.x.before && (S += Q.x.before, O.x += Q.x.before), Q.x.after && (S -= Q.x.after, O.x -= Q.x.after), Q.y.before && (k += Q.y.before, O.y += Q.y.before), Q.y.after && (k -= Q.y.after, O.y -= Q.y.after);
      {
        const $ = Uu(O, y);
        w.x = y.width - $.x.before - $.x.after, w.y = y.height - $.y.before - $.y.after, S += $.x.before, O.x += $.x.before, k += $.y.before, O.y += $.y.before;
      }
      break;
    }
    const U = Yu(b.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${b.anchor.side} ${b.anchor.align}`,
      transformOrigin: `${b.origin.side} ${b.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: Ce(Zo(k)),
      left: i.isRtl.value ? void 0 : Ce(Zo(S)),
      right: i.isRtl.value ? Ce(Zo(-S)) : void 0,
      minWidth: Ce(U === "y" ? Math.min(o.value, p.width) : o.value),
      maxWidth: Ce(lc(Iu(w.x, o.value === 1 / 0 ? 0 : o.value, a.value))),
      maxHeight: Ce(lc(Iu(w.y, l.value === 1 / 0 ? 0 : l.value, u.value)))
    }), {
      available: w,
      contentBox: O
    };
  }
  return ae(() => [r.value, s.value, e.offset, e.minWidth, e.minHeight, e.maxWidth, e.maxHeight], () => d()), Pn(() => {
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
function Zo(i) {
  return Math.round(i * devicePixelRatio) / devicePixelRatio;
}
function lc(i) {
  return Math.ceil(i * devicePixelRatio) / devicePixelRatio;
}
let gl = !0;
const $s = [];
function D1(i) {
  !gl || $s.length ? ($s.push(i), yl()) : (gl = !1, i(), yl());
}
let ac = -1;
function yl() {
  cancelAnimationFrame(ac), ac = requestAnimationFrame(() => {
    const i = $s.shift();
    i && i(), $s.length ? yl() : gl = !0;
  });
}
const hs = {
  none: null,
  close: B1,
  block: I1,
  reposition: j1
}, V1 = Je({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (i) => typeof i == "function" || i in hs
  }
}, "VOverlay-scroll-strategies");
function L1(i, e) {
  if (!Yt) return;
  let t;
  kn(async () => {
    t == null || t.stop(), e.isActive.value && i.scrollStrategy && (t = Ma(), await new Promise((n) => setTimeout(n)), t.active && t.run(() => {
      var n;
      typeof i.scrollStrategy == "function" ? i.scrollStrategy(e, i, t) : (n = hs[i.scrollStrategy]) == null || n.call(hs, e, i, t);
    }));
  }), At(() => {
    t == null || t.stop();
  });
}
function B1(i) {
  function e(t) {
    i.isActive.value = !1;
  }
  Gd(i.targetEl.value ?? i.contentEl.value, e);
}
function I1(i, e) {
  var o;
  const t = (o = i.root.value) == null ? void 0 : o.offsetParent, n = [.../* @__PURE__ */ new Set([...Cs(i.targetEl.value, e.contained ? t : void 0), ...Cs(i.contentEl.value, e.contained ? t : void 0)])].filter((l) => !l.classList.contains("v-overlay-scroll-blocked")), r = window.innerWidth - document.documentElement.offsetWidth, s = ((l) => Ba(l) && l)(t || document.documentElement);
  s && i.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((l, a) => {
    l.style.setProperty("--v-body-scroll-x", Ce(-l.scrollLeft)), l.style.setProperty("--v-body-scroll-y", Ce(-l.scrollTop)), l !== document.documentElement && l.style.setProperty("--v-scrollbar-offset", Ce(r)), l.classList.add("v-overlay-scroll-blocked");
  }), At(() => {
    n.forEach((l, a) => {
      const u = parseFloat(l.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(l.style.getPropertyValue("--v-body-scroll-y")), h = l.style.scrollBehavior;
      l.style.scrollBehavior = "auto", l.style.removeProperty("--v-body-scroll-x"), l.style.removeProperty("--v-body-scroll-y"), l.style.removeProperty("--v-scrollbar-offset"), l.classList.remove("v-overlay-scroll-blocked"), l.scrollLeft = -u, l.scrollTop = -c, l.style.scrollBehavior = h;
    }), s && i.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function j1(i, e, t) {
  let n = !1, r = -1, s = -1;
  function o(l) {
    D1(() => {
      var c, h;
      const a = performance.now();
      (h = (c = i.updateLocation).value) == null || h.call(c, l), n = (performance.now() - a) / (1e3 / 60) > 2;
    });
  }
  s = (typeof requestIdleCallback > "u" ? (l) => l() : requestIdleCallback)(() => {
    t.run(() => {
      Gd(i.targetEl.value ?? i.contentEl.value, (l) => {
        n ? (cancelAnimationFrame(r), r = requestAnimationFrame(() => {
          r = requestAnimationFrame(() => {
            o(l);
          });
        })) : o(l);
      });
    });
  }), At(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(s), cancelAnimationFrame(r);
  });
}
function Gd(i, e) {
  const t = [document, ...Cs(i)];
  t.forEach((n) => {
    n.addEventListener("scroll", e, {
      passive: !0
    });
  }), At(() => {
    t.forEach((n) => {
      n.removeEventListener("scroll", e);
    });
  });
}
const z1 = Symbol.for("vuetify:v-menu"), q1 = Je({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function N1(i, e) {
  let t = () => {
  };
  function n(o) {
    t == null || t();
    const l = Number(o ? i.openDelay : i.closeDelay);
    return new Promise((a) => {
      t = Z0(l, () => {
        e == null || e(o), a(o);
      });
    });
  }
  function r() {
    return n(!0);
  }
  function s() {
    return n(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: r,
    runCloseDelay: s
  };
}
const X1 = Je({
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
  ...q1()
}, "VOverlay-activator");
function Y1(i, e) {
  let {
    isActive: t,
    isTop: n,
    contentEl: r
  } = e;
  const s = Et("useActivator"), o = ie();
  let l = !1, a = !1, u = !0;
  const c = I(() => i.openOnFocus || i.openOnFocus == null && i.openOnHover), h = I(() => i.openOnClick || i.openOnClick == null && !i.openOnHover && !c.value), {
    runOpenDelay: f,
    runCloseDelay: d
  } = N1(i, (P) => {
    P === (i.openOnHover && l || c.value && a) && !(i.openOnHover && t.value && !n.value) && (t.value !== P && (u = !0), t.value = P);
  }), p = ie(), O = {
    onClick: (P) => {
      P.stopPropagation(), o.value = P.currentTarget || P.target, t.value || (p.value = [P.clientX, P.clientY]), t.value = !t.value;
    },
    onMouseenter: (P) => {
      var A;
      (A = P.sourceCapabilities) != null && A.firesTouchEvents || (l = !0, o.value = P.currentTarget || P.target, f());
    },
    onMouseleave: (P) => {
      l = !1, d();
    },
    onFocus: (P) => {
      M0(P.target, ":focus-visible") !== !1 && (a = !0, P.stopPropagation(), o.value = P.currentTarget || P.target, f());
    },
    onBlur: (P) => {
      a = !1, P.stopPropagation(), d();
    }
  }, m = I(() => {
    const P = {};
    return h.value && (P.onClick = O.onClick), i.openOnHover && (P.onMouseenter = O.onMouseenter, P.onMouseleave = O.onMouseleave), c.value && (P.onFocus = O.onFocus, P.onBlur = O.onBlur), P;
  }), g = I(() => {
    const P = {};
    if (i.openOnHover && (P.onMouseenter = () => {
      l = !0, f();
    }, P.onMouseleave = () => {
      l = !1, d();
    }), c.value && (P.onFocusin = () => {
      a = !0, f();
    }, P.onFocusout = () => {
      a = !1, d();
    }), i.closeOnContentClick) {
      const A = Si(z1, null);
      P.onClick = () => {
        t.value = !1, A == null || A.closeParents();
      };
    }
    return P;
  }), y = I(() => {
    const P = {};
    return i.openOnHover && (P.onMouseenter = () => {
      u && (l = !0, u = !1, f());
    }, P.onMouseleave = () => {
      l = !1, d();
    }), P;
  });
  ae(n, (P) => {
    var A;
    P && (i.openOnHover && !l && (!c.value || !a) || c.value && !a && (!i.openOnHover || !l)) && !((A = r.value) != null && A.contains(document.activeElement)) && (t.value = !1);
  }), ae(t, (P) => {
    P || setTimeout(() => {
      p.value = void 0;
    });
  }, {
    flush: "post"
  });
  const b = zu();
  kn(() => {
    b.value && Pn(() => {
      o.value = b.el;
    });
  });
  const x = zu(), S = I(() => i.target === "cursor" && p.value ? p.value : x.value ? x.el : Hd(i.target, s) || o.value), k = I(() => Array.isArray(S.value) ? void 0 : S.value);
  let w;
  return ae(() => !!i.activator, (P) => {
    P && Yt ? (w = Ma(), w.run(() => {
      U1(i, s, {
        activatorEl: o,
        activatorEvents: m
      });
    })) : w && w.stop();
  }, {
    flush: "post",
    immediate: !0
  }), At(() => {
    w == null || w.stop();
  }), {
    activatorEl: o,
    activatorRef: b,
    target: S,
    targetEl: k,
    targetRef: x,
    activatorEvents: m,
    contentEvents: g,
    scrimEvents: y
  };
}
function U1(i, e, t) {
  let {
    activatorEl: n,
    activatorEvents: r
  } = t;
  ae(() => i.activator, (a, u) => {
    if (u && a !== u) {
      const c = l(u);
      c && o(c);
    }
    a && Pn(() => s());
  }, {
    immediate: !0
  }), ae(() => i.activatorProps, () => {
    s();
  }), At(() => {
    o();
  });
  function s() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i.activatorProps;
    a && I0(a, mt(r.value, u));
  }
  function o() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i.activatorProps;
    a && j0(a, mt(r.value, u));
  }
  function l() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i.activator;
    const u = Hd(a, e);
    return n.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, n.value;
  }
}
function Hd(i, e) {
  var n, r;
  if (!i) return;
  let t;
  if (i === "parent") {
    let s = (r = (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$el) == null ? void 0 : r.parentNode;
    for (; s != null && s.hasAttribute("data-no-activator"); )
      s = s.parentNode;
    t = s;
  } else typeof i == "string" ? t = document.querySelector(i) : "$el" in i ? t = i.$el : t = i;
  return t;
}
function F1() {
  if (!Yt) return Kt(!1);
  const {
    ssr: i
  } = _1();
  if (i) {
    const e = Kt(!1);
    return Ni(() => {
      e.value = !0;
    }), e;
  } else
    return Kt(!0);
}
const W1 = Je({
  eager: Boolean
}, "lazy");
function G1(i, e) {
  const t = Kt(!1), n = I(() => t.value || i.eager || e.value);
  ae(e, () => t.value = !0);
  function r() {
    i.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: n,
    onAfterLeave: r
  };
}
function H1() {
  const e = Et("useScopeId").vnode.scopeId;
  return {
    scopeId: e ? {
      [e]: ""
    } : void 0
  };
}
const uc = Symbol.for("vuetify:stack"), Tn = so([]);
function K1(i, e, t) {
  const n = Et("useStack"), r = !t, s = Si(uc, void 0), o = so({
    activeChildren: /* @__PURE__ */ new Set()
  });
  oo(uc, o);
  const l = Kt(+e.value);
  co(i, () => {
    var h;
    const c = (h = Tn.at(-1)) == null ? void 0 : h[1];
    l.value = c ? c + 10 : +e.value, r && Tn.push([n.uid, l.value]), s == null || s.activeChildren.add(n.uid), At(() => {
      if (r) {
        const f = $d(Tn).findIndex((d) => d[0] === n.uid);
        Tn.splice(f, 1);
      }
      s == null || s.activeChildren.delete(n.uid);
    });
  });
  const a = Kt(!0);
  r && kn(() => {
    var h;
    const c = ((h = Tn.at(-1)) == null ? void 0 : h[0]) === n.uid;
    setTimeout(() => a.value = c);
  });
  const u = I(() => !o.activeChildren.size);
  return {
    globalTop: v0(a),
    localTop: u,
    stackStyles: I(() => ({
      zIndex: l.value
    }))
  };
}
function J1(i) {
  return {
    teleportTarget: I(() => {
      const t = i();
      if (t === !0 || !Yt) return;
      const n = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (n == null) {
        Ta(`Unable to locate target ${t}`);
        return;
      }
      let r = [...n.children].find((s) => s.matches(".v-overlay-container"));
      return r || (r = document.createElement("div"), r.className = "v-overlay-container", n.appendChild(r)), r;
    })
  };
}
function ey() {
  return !0;
}
function Kd(i, e, t) {
  if (!i || Jd(i, t) === !1) return !1;
  const n = qd(e);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === i.target) return !1;
  const r = (typeof t.value == "object" && t.value.include || (() => []))();
  return r.push(e), !r.some((s) => s == null ? void 0 : s.contains(i.target));
}
function Jd(i, e) {
  return (typeof e.value == "object" && e.value.closeConditional || ey)(i);
}
function ty(i, e, t) {
  const n = typeof t.value == "function" ? t.value : t.value.handler;
  i.shadowTarget = i.target, e._clickOutside.lastMousedownWasOutside && Kd(i, e, t) && setTimeout(() => {
    Jd(i, t) && n && n(i);
  }, 0);
}
function cc(i, e) {
  const t = qd(i);
  e(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && e(t);
}
const iy = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(i, e) {
    const t = (r) => ty(r, i, e), n = (r) => {
      i._clickOutside.lastMousedownWasOutside = Kd(r, i, e);
    };
    cc(i, (r) => {
      r.addEventListener("click", t, !0), r.addEventListener("mousedown", n, !0);
    }), i._clickOutside || (i._clickOutside = {
      lastMousedownWasOutside: !1
    }), i._clickOutside[e.instance.$.uid] = {
      onClick: t,
      onMousedown: n
    };
  },
  beforeUnmount(i, e) {
    i._clickOutside && (cc(i, (t) => {
      var s;
      if (!t || !((s = i._clickOutside) != null && s[e.instance.$.uid])) return;
      const {
        onClick: n,
        onMousedown: r
      } = i._clickOutside[e.instance.$.uid];
      t.removeEventListener("click", n, !0), t.removeEventListener("mousedown", r, !0);
    }), delete i._clickOutside[e.instance.$.uid]);
  }
};
function ny(i) {
  const {
    modelValue: e,
    color: t,
    ...n
  } = i;
  return N(_d, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [i.modelValue && N("div", mt({
      class: ["v-overlay__scrim", i.color.backgroundColorClasses.value],
      style: i.color.backgroundColorStyles.value
    }, n), null)]
  });
}
const ry = Je({
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
  ...X1(),
  ...Md(),
  ...f1(),
  ...W1(),
  ...E1(),
  ...V1(),
  ...Xd(),
  ...m1()
}, "VOverlay"), sy = La()({
  name: "VOverlay",
  directives: {
    ClickOutside: iy
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...ry()
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
      emit: r
    } = e;
    const s = Et("VOverlay"), o = ie(), l = ie(), a = ie(), u = a1(i, "modelValue"), c = I({
      get: () => u.value,
      set: (E) => {
        E && i.disabled || (u.value = E);
      }
    }), {
      themeClasses: h
    } = Yd(i), {
      rtlClasses: f,
      isRtl: d
    } = c1(), {
      hasContent: p,
      onAfterLeave: O
    } = G1(i, c), m = O1(I(() => typeof i.scrim == "string" ? i.scrim : null)), {
      globalTop: g,
      localTop: y,
      stackStyles: b
    } = K1(c, Qi(i, "zIndex"), i._disableGlobalStack), {
      activatorEl: x,
      activatorRef: S,
      target: k,
      targetEl: w,
      targetRef: P,
      activatorEvents: A,
      contentEvents: U,
      scrimEvents: L
    } = Y1(i, {
      isActive: c,
      isTop: y,
      contentEl: a
    }), {
      teleportTarget: T
    } = J1(() => {
      var we, fe, ni;
      const E = i.attach || i.contained;
      if (E) return E;
      const H = ((we = x == null ? void 0 : x.value) == null ? void 0 : we.getRootNode()) || ((ni = (fe = s.proxy) == null ? void 0 : fe.$el) == null ? void 0 : ni.getRootNode());
      return H instanceof ShadowRoot ? H : !1;
    }), {
      dimensionStyles: Q
    } = d1(i), $ = F1(), {
      scopeId: z
    } = H1();
    ae(() => i.disabled, (E) => {
      E && (c.value = !1);
    });
    const {
      contentStyles: G,
      updateLocation: V
    } = T1(i, {
      isRtl: d,
      contentEl: a,
      target: k,
      isActive: c
    });
    L1(i, {
      root: o,
      contentEl: a,
      targetEl: w,
      isActive: c,
      updateLocation: V
    });
    function oe(E) {
      r("click:outside", E), i.persistent ? xe() : c.value = !1;
    }
    function J(E) {
      return c.value && g.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!i.scrim || E.target === l.value || E instanceof MouseEvent && E.shadowTarget === l.value);
    }
    Yt && ae(c, (E) => {
      E ? window.addEventListener("keydown", ue) : window.removeEventListener("keydown", ue);
    }, {
      immediate: !0
    }), Ad(() => {
      Yt && window.removeEventListener("keydown", ue);
    });
    function ue(E) {
      var H, we;
      E.key === "Escape" && g.value && (i.persistent ? xe() : (c.value = !1, (H = a.value) != null && H.contains(document.activeElement) && ((we = x.value) == null || we.focus())));
    }
    const ce = Q1();
    co(() => i.closeOnBack, () => {
      C1(ce, (E) => {
        g.value && c.value ? (E(!1), i.persistent ? xe() : c.value = !1) : E();
      });
    });
    const he = ie();
    ae(() => c.value && (i.absolute || i.contained) && T.value == null, (E) => {
      if (E) {
        const H = s1(o.value);
        H && H !== document.scrollingElement && (he.value = H.scrollTop);
      }
    });
    function xe() {
      i.noClickAnimation || a.value && B0(a.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: r1
      });
    }
    function Oe() {
      r("afterEnter");
    }
    function tt() {
      O(), r("afterLeave");
    }
    return Nd(() => {
      var E;
      return N(Xe, null, [(E = t.activator) == null ? void 0 : E.call(t, {
        isActive: c.value,
        targetRef: P,
        props: mt({
          ref: S
        }, A.value, i.activatorProps)
      }), $.value && p.value && N(ao, {
        disabled: !T.value,
        to: T.value
      }, {
        default: () => [N("div", mt({
          class: ["v-overlay", {
            "v-overlay--absolute": i.absolute || i.contained,
            "v-overlay--active": c.value,
            "v-overlay--contained": i.contained
          }, h.value, f.value, i.class],
          style: [b.value, {
            "--v-overlay-opacity": i.opacity,
            top: Ce(he.value)
          }, i.style],
          ref: o
        }, z, n), [N(ny, mt({
          color: m,
          modelValue: c.value && !!i.scrim,
          ref: l
        }, L.value), null), N(g1, {
          appear: !0,
          persisted: !0,
          transition: i.transition,
          target: k.value,
          onAfterEnter: Oe,
          onAfterLeave: tt
        }, {
          default: () => {
            var H;
            return [b0(N("div", mt({
              ref: a,
              class: ["v-overlay__content", i.contentClass],
              style: [Q.value, G.value]
            }, U.value, i.contentProps), [(H = t.default) == null ? void 0 : H.call(t, {
              isActive: c
            })]), [[S0, c.value], [x0("click-outside"), {
              handler: oe,
              closeConditional: J,
              include: () => [x.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: x,
      scrimEl: l,
      target: k,
      animateClick: xe,
      contentEl: a,
      globalTop: g,
      localTop: y,
      updateLocation: V
    };
  }
}), et = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, r] of e)
    t[n] = r;
  return t;
}, oy = {
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
    const e = i, t = w0(), n = I(() => !!(t.icon || e.icon));
    return (r, s) => {
      const o = K("v-btn");
      return Z(), ke(o, {
        class: "s-btn",
        elevation: "0",
        "s-color": i.color,
        size: i.size,
        to: i.to,
        height: i.height,
        icon: i.icon
      }, Da({ _: 2 }, [
        n.value && !r.$slots.default ? {
          name: "icon",
          fn: X(() => [
            N(re(P1), null, {
              default: X(() => [
                De(le(i.icon), 1)
              ]),
              _: 1
            })
          ]),
          key: "0"
        } : {
          name: "default",
          fn: X(() => [
            De(le(i.title) + " ", 1),
            ge(r.$slots, "default", {}, void 0, !0)
          ]),
          key: "1"
        }
      ]), 1032, ["s-color", "size", "to", "height", "icon"]);
    };
  }
}, sr = /* @__PURE__ */ et(oy, [["__scopeId", "data-v-5e15c61d"]]), ly = {};
function ay(i, e) {
  const t = K("v-text-field"), n = K("v-col"), r = K("v-checkbox"), s = K("v-row");
  return Z(), ke(s, null, {
    default: X(() => [
      N(n, null, {
        default: X(() => [
          N(t, {
            density: "compact",
            variant: "outlined"
          })
        ]),
        _: 1
      }),
      N(n, null, {
        default: X(() => [
          N(r, {
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
const J_ = /* @__PURE__ */ et(ly, [["render", ay]]), uy = { class: "shell-script-wrapper" }, cy = { class: "line-numbers" }, eA = {
  __name: "SShellScriptInput",
  props: /* @__PURE__ */ Ed({
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
    const e = Td(i, "modelValue"), t = ie(1), n = () => {
      t.value = e.value.split(`
`).length;
    };
    return n(), (r, s) => {
      const o = K("v-label"), l = K("v-textarea");
      return Z(), F(Xe, null, [
        i.labelTitle ? (Z(), ke(o, { key: 0 }, {
          default: X(() => [
            De(le(i.labelTitle), 1)
          ]),
          _: 1
        })) : Be("", !0),
        Y("div", uy, [
          Y("div", cy, [
            (Z(!0), F(Xe, null, Qt(t.value, (a) => (Z(), F("span", { key: a }, le(a), 1))), 128))
          ]),
          N(l, {
            modelValue: e.value,
            "onUpdate:modelValue": s[0] || (s[0] = (a) => e.value = a),
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
}, hy = { class: "s-file-input" }, tA = {
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
    }
  },
  emits: ["update:model-value"],
  setup(i, { emit: e }) {
    const t = i, n = e, r = ie(null), s = ie(null), o = (l) => {
      r.value = l, s.value = l == null ? void 0 : l.name, n("update:model-value", l);
    };
    return Ni(() => {
      r.value = t.modelValue;
    }), (l, a) => {
      const u = K("v-file-input"), c = K("v-text-field");
      return Z(), F("div", hy, [
        N(u, {
          ref: "importFile",
          "model-value": r.value,
          class: "d-none",
          "onUpdate:modelValue": o
        }, null, 8, ["model-value"]),
        N(c, {
          "model-value": s.value,
          variant: "outlined",
          density: "compact",
          "hide-details": i.hideDetails,
          readonly: "",
          "error-messages": i.errorMessages,
          placeholder: i.placeholder
        }, null, 8, ["model-value", "hide-details", "error-messages", "placeholder"]),
        N(re(sr), {
          height: "30",
          variant: "outlined",
          disabled: i.btnDisabled,
          onClick: a[0] || (a[0] = (h) => l.$refs.importFile.click())
        }, {
          default: X(() => [
            De(le(i.buttonText), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]);
    };
  }
}, fy = { class: "s-alert" }, iA = {
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
    const t = e, n = i, r = ie(n.modelValue), s = (l) => {
      r.value = l, t("update:model-value", l);
    }, o = () => {
      r.value = !1, t("update:model-value", !1);
    };
    return kn(() => {
      r.value = n.modelValue;
    }), (l, a) => {
      const u = K("v-snackbar");
      return Z(), F("div", fy, [
        N(u, {
          style: Jt(i.alertStyle),
          "model-value": r.value,
          "multi-line": i.multiLine,
          timeout: i.timeout,
          color: i.color,
          height: i.height,
          elevation: "0",
          "min-width": "600",
          location: "top",
          "onUpdate:modelValue": s
        }, {
          actions: X(() => [
            i.isClose ? (Z(), ke(sr, {
              key: 0,
              color: "#fff",
              variant: "text",
              onClick: o
            }, {
              default: X(() => a[0] || (a[0] = [
                De("Close")
              ])),
              _: 1
            })) : Be("", !0)
          ]),
          default: X(() => [
            ge(l.$slots, "alert-icon"),
            Y("pre", null, le(i.titleName), 1)
          ]),
          _: 3
        }, 8, ["style", "model-value", "multi-line", "timeout", "color", "height"])
      ]);
    };
  }
}, dy = { class: "s-empty" }, py = {
  key: 0,
  class: "s-empty__card-title"
}, Oy = { class: "s-empty__card-content" }, my = {
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
    }
  },
  setup(i) {
    return (e, t) => {
      const n = K("v-sheet");
      return Z(), F("div", dy, [
        N(n, {
          class: "s-empty__card",
          elevation: i.elevation,
          border: "",
          rounded: "",
          shadowed: i.shadowed
        }, {
          default: X(() => [
            i.title ? (Z(), F("div", py, le(i.title), 1)) : Be("", !0),
            Y("div", Oy, le(i.description), 1),
            ge(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["elevation", "shadowed"])
      ]);
    };
  }
}, nA = /* @__PURE__ */ et(my, [["__scopeId", "data-v-d4e294d2"]]);
class se {
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
    [e, t] = cn(this, e, t);
    let r = [];
    return this.decompose(
      0,
      e,
      r,
      2
      /* Open.To */
    ), n.length && n.decompose(
      0,
      n.length,
      r,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      r,
      1
      /* Open.From */
    ), Bt.from(r, this.length - (t - e) + n.length);
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
    [e, t] = cn(this, e, t);
    let n = [];
    return this.decompose(e, t, n, 0), Bt.from(n, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), r = new Wn(this), s = new Wn(e);
    for (let o = t, l = t; ; ) {
      if (r.next(o), s.next(o), o = 0, r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value)
        return !1;
      if (l += r.value.length, r.done || l >= n)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new Wn(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new ep(this, e, t);
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
      let r = this.line(e).from;
      n = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new tp(n);
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
    return e.length == 1 && !e[0] ? se.empty : e.length <= 32 ? new Qe(e) : Bt.from(Qe.split(e, []));
  }
}
class Qe extends se {
  constructor(e, t = gy(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, r) {
    for (let s = 0; ; s++) {
      let o = this.text[s], l = r + o.length;
      if ((t ? n : l) >= e)
        return new yy(r, l, n, o);
      r = l + 1, n++;
    }
  }
  decompose(e, t, n, r) {
    let s = e <= 0 && t >= this.length ? this : new Qe(hc(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let o = n.pop(), l = fs(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32)
        n.push(new Qe(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        n.push(new Qe(l.slice(0, a)), new Qe(l.slice(a)));
      }
    } else
      n.push(s);
  }
  replace(e, t, n) {
    if (!(n instanceof Qe))
      return super.replace(e, t, n);
    [e, t] = cn(this, e, t);
    let r = fs(this.text, fs(n.text, hc(this.text, 0, e)), t), s = this.length + n.length - (t - e);
    return r.length <= 32 ? new Qe(r, s) : Bt.from(Qe.split(r, []), s);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = cn(this, e, t);
    let r = "";
    for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
      let l = this.text[o], a = s + l.length;
      s > e && o && (r += n), e < a && t > s && (r += l.slice(Math.max(0, e - s), t - s)), s = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [], r = -1;
    for (let s of e)
      n.push(s), r += s.length + 1, n.length == 32 && (t.push(new Qe(n, r)), n = [], r = -1);
    return r > -1 && t.push(new Qe(n, r)), t;
  }
}
class Bt extends se {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let n of e)
      this.lines += n.lines;
  }
  lineInner(e, t, n, r) {
    for (let s = 0; ; s++) {
      let o = this.children[s], l = r + o.length, a = n + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, n, r);
      r = l + 1, n = a + 1;
    }
  }
  decompose(e, t, n, r) {
    for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
      let l = this.children[s], a = o + l.length;
      if (e <= a && t >= o) {
        let u = r & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !u ? n.push(l) : l.decompose(e - o, t - o, n, u);
      }
      o = a + 1;
    }
  }
  replace(e, t, n) {
    if ([e, t] = cn(this, e, t), n.lines < this.lines)
      for (let r = 0, s = 0; r < this.children.length; r++) {
        let o = this.children[r], l = s + o.length;
        if (e >= s && t <= l) {
          let a = o.replace(e - s, t - s, n), u = this.lines - o.lines + a.lines;
          if (a.lines < u >> 4 && a.lines > u >> 6) {
            let c = this.children.slice();
            return c[r] = a, new Bt(c, this.length - (t - e) + n.length);
          }
          return super.replace(s, l, a);
        }
        s = l + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = `
`) {
    [e, t] = cn(this, e, t);
    let r = "";
    for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
      let l = this.children[s], a = o + l.length;
      o > e && s && (r += n), e < a && t > o && (r += l.sliceString(e - o, t - o, n)), o = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Bt))
      return 0;
    let n = 0, [r, s, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += t, s += t) {
      if (r == o || s == l)
        return n;
      let a = this.children[r], u = e.children[s];
      if (a != u)
        return n + a.scanIdentical(u, t);
      n += a.length + 1;
    }
  }
  static from(e, t = e.reduce((n, r) => n + r.length + 1, -1)) {
    let n = 0;
    for (let d of e)
      n += d.lines;
    if (n < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new Qe(d, t);
    }
    let r = Math.max(
      32,
      n >> 5
      /* Tree.BranchShift */
    ), s = r << 1, o = r >> 1, l = [], a = 0, u = -1, c = [];
    function h(d) {
      let p;
      if (d.lines > s && d instanceof Bt)
        for (let O of d.children)
          h(O);
      else d.lines > o && (a > o || !a) ? (f(), l.push(d)) : d instanceof Qe && a && (p = c[c.length - 1]) instanceof Qe && d.lines + p.lines <= 32 ? (a += d.lines, u += d.length + 1, c[c.length - 1] = new Qe(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > r && f(), a += d.lines, u += d.length + 1, c.push(d));
    }
    function f() {
      a != 0 && (l.push(c.length == 1 ? c[0] : Bt.from(c, u)), u = -1, a = c.length = 0);
    }
    for (let d of e)
      h(d);
    return f(), l.length == 1 ? l[0] : new Bt(l, t);
  }
}
se.empty = /* @__PURE__ */ new Qe([""], 0);
function gy(i) {
  let e = -1;
  for (let t of i)
    e += t.length + 1;
  return e;
}
function fs(i, e, t = 0, n = 1e9) {
  for (let r = 0, s = 0, o = !0; s < i.length && r <= n; s++) {
    let l = i[s], a = r + l.length;
    a >= t && (a > n && (l = l.slice(0, n - r)), r < t && (l = l.slice(t - r)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), r = a + 1;
  }
  return e;
}
function hc(i, e, t) {
  return fs(i, [""], e, t);
}
class Wn {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Qe ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1, r = this.nodes[n], s = this.offsets[n], o = s >> 1, l = r instanceof Qe ? r.text.length : r.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (n == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[n] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (r instanceof Qe) {
        let a = r.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[n] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = r.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Qe ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class ep {
  constructor(e, t, n) {
    this.value = "", this.done = !1, this.cursor = new Wn(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), n -= e;
    let { value: r } = this.cursor.next(e);
    return this.pos += (r.length + e) * t, this.value = r.length <= n ? r : t < 0 ? r.slice(r.length - n) : r.slice(0, n), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class tp {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: r } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (se.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Wn.prototype[Symbol.iterator] = ep.prototype[Symbol.iterator] = tp.prototype[Symbol.iterator] = function() {
  return this;
});
class yy {
  /**
  @internal
  */
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.number = n, this.text = r;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function cn(i, e, t) {
  return e = Math.max(0, Math.min(i.length, e)), [e, Math.max(e, Math.min(i.length, t))];
}
let nn = /* @__PURE__ */ "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((i) => i ? parseInt(i, 36) : 1);
for (let i = 1; i < nn.length; i++)
  nn[i] += nn[i - 1];
function vy(i) {
  for (let e = 1; e < nn.length; e += 2)
    if (nn[e] > i)
      return nn[e - 1] <= i;
  return !1;
}
function fc(i) {
  return i >= 127462 && i <= 127487;
}
const dc = 8205;
function Ne(i, e, t = !0, n = !0) {
  return (t ? ip : by)(i, e, n);
}
function ip(i, e, t) {
  if (e == i.length)
    return e;
  e && np(i.charCodeAt(e)) && rp(i.charCodeAt(e - 1)) && e--;
  let n = je(i, e);
  for (e += bt(n); e < i.length; ) {
    let r = je(i, e);
    if (n == dc || r == dc || t && vy(r))
      e += bt(r), n = r;
    else if (fc(r)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && fc(je(i, o)); )
        s++, o -= 2;
      if (s % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function by(i, e, t) {
  for (; e > 0; ) {
    let n = ip(i, e - 2, t);
    if (n < e)
      return n;
    e--;
  }
  return 0;
}
function np(i) {
  return i >= 56320 && i < 57344;
}
function rp(i) {
  return i >= 55296 && i < 56320;
}
function je(i, e) {
  let t = i.charCodeAt(e);
  if (!rp(t) || e + 1 == i.length)
    return t;
  let n = i.charCodeAt(e + 1);
  return np(n) ? (t - 55296 << 10) + (n - 56320) + 65536 : t;
}
function Ia(i) {
  return i <= 65535 ? String.fromCharCode(i) : (i -= 65536, String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function bt(i) {
  return i < 65536 ? 1 : 2;
}
const vl = /\r\n?|\n/;
var qe = /* @__PURE__ */ function(i) {
  return i[i.Simple = 0] = "Simple", i[i.TrackDel = 1] = "TrackDel", i[i.TrackBefore = 2] = "TrackBefore", i[i.TrackAfter = 3] = "TrackAfter", i;
}(qe || (qe = {}));
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
    for (let t = 0, n = 0, r = 0; t < this.sections.length; ) {
      let s = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(n, r, s), r += s) : r += o, n += s;
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
    bl(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], r = this.sections[t++];
      r < 0 ? e.push(n, r) : e.push(r, n);
    }
    return new Xt(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : sp(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `other` happened before the ones in `this`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : Sl(this, e, t);
  }
  mapPos(e, t = -1, n = qe.Simple) {
    let r = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], u = r + l;
      if (a < 0) {
        if (u > e)
          return s + (e - r);
        s += l;
      } else {
        if (n != qe.Simple && u >= e && (n == qe.TrackDel && r < e && u > e || n == qe.TrackBefore && r < e || n == qe.TrackAfter && u > e))
          return null;
        if (u > e || u == e && t < 0 && !l)
          return e == r || t < 0 ? s : s + a;
        s += a;
      }
      r = u;
    }
    if (e > r)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return s;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let n = 0, r = 0; n < this.sections.length && r <= t; ) {
      let s = this.sections[n++], o = this.sections[n++], l = r + s;
      if (o >= 0 && r <= t && l >= e)
        return r < e && l > t ? "cover" : !0;
      r = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++], r = this.sections[t++];
      e += (e ? " " : "") + n + (r >= 0 ? ":" + r : "");
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
    return bl(this, (t, n, r, s, o) => e = e.replace(r, r + (n - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return Sl(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), n = [];
    for (let r = 0, s = 0; r < t.length; r += 2) {
      let o = t[r], l = t[r + 1];
      if (l >= 0) {
        t[r] = l, t[r + 1] = o;
        let a = r >> 1;
        for (; n.length < a; )
          n.push(se.empty);
        n.push(o ? e.slice(s, s + o) : se.empty);
      }
      s += o;
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
    return this.empty ? e : e.empty ? this : sp(this, e, !0);
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
    return e.empty ? this : Sl(this, e, t, !0);
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
    bl(this, e, t);
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
    let t = [], n = [], r = [], s = new or(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && s.len == 0; ) {
        if (s.done)
          break e;
        let c = Math.min(s.len, a - l);
        Ye(r, c, -1);
        let h = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        Ye(t, c, h), h > 0 && ui(n, t, s.text), s.forward(c), l += c;
      }
      let u = e[o++];
      for (; l < u; ) {
        if (s.done)
          break e;
        let c = Math.min(s.len, u - l);
        Ye(t, c, -1), Ye(r, c, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(c), l += c;
      }
    }
    return {
      changes: new Me(t, n),
      filtered: Xt.create(r)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t], r = this.sections[t + 1];
      r < 0 ? e.push(n) : r == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, n) {
    let r = [], s = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !r.length)
        return;
      o < t && Ye(r, t - o, -1);
      let h = new Me(r, s);
      l = l ? l.compose(h.map(l)) : h, r = [], s = [], o = 0;
    }
    function u(c) {
      if (Array.isArray(c))
        for (let h of c)
          u(h);
      else if (c instanceof Me) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: h, to: f = h, insert: d } = c;
        if (h > f || h < 0 || f > t)
          throw new RangeError(`Invalid change range ${h} to ${f} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? se.of(d.split(n || vl)) : d : se.empty, O = p.length;
        if (h == f && O == 0)
          return;
        h < o && a(), h > o && Ye(r, h - o, -1), Ye(r, f - h, O), ui(s, r, p), o = f;
      }
    }
    return u(e), a(!l), l;
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
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (typeof s == "number")
        t.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          t.push(s[0], 0);
        else {
          for (; n.length < r; )
            n.push(se.empty);
          n[r] = se.of(s.slice(1)), t.push(s[0], n[r].length);
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
function Ye(i, e, t, n = !1) {
  if (e == 0 && t <= 0)
    return;
  let r = i.length - 2;
  r >= 0 && t <= 0 && t == i[r + 1] ? i[r] += e : e == 0 && i[r] == 0 ? i[r + 1] += t : n ? (i[r] += e, i[r + 1] += t) : i.push(e, t);
}
function ui(i, e, t) {
  if (t.length == 0)
    return;
  let n = e.length - 2 >> 1;
  if (n < i.length)
    i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < n; )
      i.push(se.empty);
    i.push(t);
  }
}
function bl(i, e, t) {
  let n = i.inserted;
  for (let r = 0, s = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++], a = i.sections[o++];
    if (a < 0)
      r += l, s += l;
    else {
      let u = r, c = s, h = se.empty;
      for (; u += l, c += a, a && n && (h = h.append(n[o - 2 >> 1])), !(t || o == i.sections.length || i.sections[o + 1] < 0); )
        l = i.sections[o++], a = i.sections[o++];
      e(r, u, s, c, h), r = u, s = c;
    }
  }
}
function Sl(i, e, t, n = !1) {
  let r = [], s = n ? [] : null, o = new or(i), l = new or(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let u = Math.min(o.len, l.len);
      Ye(r, u, -1), o.forward(u), l.forward(u);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let u = l.len;
      for (Ye(r, l.ins, -1); u; ) {
        let c = Math.min(o.len, u);
        o.ins >= 0 && a < o.i && o.len <= c && (Ye(r, 0, o.ins), s && ui(s, r, o.text), a = o.i), o.forward(c), u -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let u = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let h = Math.min(c, l.len);
          u += h, c -= h, l.forward(h);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      Ye(r, u, a < o.i ? o.ins : 0), s && a < o.i && ui(s, r, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return s ? Me.createSet(r, s) : Xt.create(r);
      throw new Error("Mismatched change set lengths");
    }
}
function sp(i, e, t = !1) {
  let n = [], r = t ? [] : null, s = new or(i), o = new or(e);
  for (let l = !1; ; ) {
    if (s.done && o.done)
      return r ? Me.createSet(n, r) : Xt.create(n);
    if (s.ins == 0)
      Ye(n, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done)
      Ye(n, 0, o.ins, l), r && ui(r, n, o.text), o.next();
    else {
      if (s.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len), u = n.length;
        if (s.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Ye(n, a, c, l), r && c && ui(r, n, o.text);
        } else o.ins == -1 ? (Ye(n, s.off ? 0 : s.len, a, l), r && ui(r, n, s.textBit(a))) : (Ye(n, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), r && !o.off && ui(r, n, o.text));
        l = (s.ins > a || o.ins >= 0 && o.len > a) && (l || n.length > u), s.forward2(a), o.forward(a);
      }
    }
  }
}
class or {
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
    return t >= e.length ? se.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, n = this.i - 2 >> 1;
    return n >= t.length && !e ? se.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class _i {
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
    let n, r;
    return this.empty ? n = r = e.mapPos(this.from, t) : (n = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), n == this.from && r == this.to ? this : new _i(n, r, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return C.range(e, t);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return C.range(this.anchor, n);
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
    return C.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new _i(e, t, n);
  }
}
class C {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : C.create(this.ranges.map((n) => n.map(e, t)), this.mainIndex);
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
    return this.ranges.length == 1 ? this : new C([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return C.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return n[t] = e, C.create(n, this.mainIndex);
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
    return new C(e.ranges.map((t) => _i.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new C([C.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, r = 0; r < e.length; r++) {
      let s = e[r];
      if (s.empty ? s.from <= n : s.from < n)
        return C.normalized(e.slice(), t);
      n = s.to;
    }
    return new C(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, n, r) {
    return _i.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)) | (r ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, n, r) {
    let s = (n ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
    return t < e ? _i.create(t, e, 48 | s) : _i.create(e, t, (t > e ? 8 : 0) | s);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let n = e[t];
    e.sort((r, s) => r.from - s.from), t = e.indexOf(n);
    for (let r = 1; r < e.length; r++) {
      let s = e[r], o = e[r - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, a = Math.max(s.to, o.to);
        r <= t && t--, e.splice(--r, 2, s.anchor > s.head ? C.range(a, l) : C.range(l, a));
      }
    }
    return new C(e, t);
  }
}
function op(i, e) {
  for (let t of i.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let ja = 0;
class D {
  constructor(e, t, n, r, s) {
    this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = r, this.id = ja++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
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
    return new D(e.combine || ((t) => t), e.compareInput || ((t, n) => t === n), e.compare || (e.combine ? (t, n) => t === n : za), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new ds([], this, 0, e);
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
    return new ds(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new ds(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function za(i, e) {
  return i == e || i.length == e.length && i.every((t, n) => t === e[n]);
}
class ds {
  constructor(e, t, n, r) {
    this.dependencies = e, this.facet = t, this.type = n, this.value = r, this.id = ja++;
  }
  dynamicSlot(e) {
    var t;
    let n = this.value, r = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, a = !1, u = !1, c = [];
    for (let h of this.dependencies)
      h == "doc" ? a = !0 : h == "selection" ? u = !0 : ((t = e[h.id]) !== null && t !== void 0 ? t : 1) & 1 || c.push(e[h.id]);
    return {
      create(h) {
        return h.values[o] = n(h), 1;
      },
      update(h, f) {
        if (a && f.docChanged || u && (f.docChanged || f.selection) || xl(h, c)) {
          let d = n(h);
          if (l ? !pc(d, h.values[o], r) : !r(d, h.values[o]))
            return h.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (h, f) => {
        let d, p = f.config.address[s];
        if (p != null) {
          let O = As(f, p);
          if (this.dependencies.every((m) => m instanceof D ? f.facet(m) === h.facet(m) : m instanceof Re ? f.field(m, !1) == h.field(m, !1) : !0) || (l ? pc(d = n(h), O, r) : r(d = n(h), O)))
            return h.values[o] = O, 0;
        } else
          d = n(h);
        return h.values[o] = d, 1;
      }
    };
  }
}
function pc(i, e, t) {
  if (i.length != e.length)
    return !1;
  for (let n = 0; n < i.length; n++)
    if (!t(i[n], e[n]))
      return !1;
  return !0;
}
function xl(i, e) {
  let t = !1;
  for (let n of e)
    Gn(i, n) & 1 && (t = !0);
  return t;
}
function Sy(i, e, t) {
  let n = t.map((a) => i[a.id]), r = t.map((a) => a.type), s = n.filter((a) => !(a & 1)), o = i[e.id] >> 1;
  function l(a) {
    let u = [];
    for (let c = 0; c < n.length; c++) {
      let h = As(a, n[c]);
      if (r[c] == 2)
        for (let f of h)
          u.push(f);
      else
        u.push(h);
    }
    return e.combine(u);
  }
  return {
    create(a) {
      for (let u of n)
        Gn(a, u);
      return a.values[o] = l(a), 1;
    },
    update(a, u) {
      if (!xl(a, s))
        return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, u) {
      let c = xl(a, n), h = u.config.facets[e.id], f = u.facet(e);
      if (h && !c && za(t, h))
        return a.values[o] = f, 0;
      let d = l(a);
      return e.compare(d, f) ? (a.values[o] = f, 0) : (a.values[o] = d, 1);
    }
  };
}
const Oc = /* @__PURE__ */ D.define({ static: !0 });
class Re {
  constructor(e, t, n, r, s) {
    this.id = e, this.createF = t, this.updateF = n, this.compareF = r, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new Re(ja++, e.create, e.update, e.compare || ((n, r) => n === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Oc).find((n) => n.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => (n.values[t] = this.create(n), 1),
      update: (n, r) => {
        let s = n.values[t], o = this.updateF(s, r);
        return this.compareF(s, o) ? 0 : (n.values[t] = o, 1);
      },
      reconfigure: (n, r) => r.config.address[this.id] != null ? (n.values[t] = r.field(this), 0) : (n.values[t] = this.create(n), 1)
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, Oc.of({ field: this, create: e })];
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
const Ci = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Rn(i) {
  return (e) => new lp(e, i);
}
const xi = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Rn(Ci.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Rn(Ci.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Rn(Ci.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Rn(Ci.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Rn(Ci.lowest)
};
class lp {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class hn {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new wl(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return hn.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class wl {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class _s {
  constructor(e, t, n, r, s, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = r, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < n.length; )
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
    let r = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let f of xy(e, t, o))
      f instanceof Re ? r.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f);
    let l = /* @__PURE__ */ Object.create(null), a = [], u = [];
    for (let f of r)
      l[f.id] = u.length << 1, u.push((d) => f.slot(d));
    let c = n == null ? void 0 : n.config.facets;
    for (let f in s) {
      let d = s[f], p = d[0].facet, O = c && c[f] || [];
      if (d.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, za(O, d))
          a.push(n.facet(p));
        else {
          let m = p.combine(d.map((g) => g.value));
          a.push(n && p.compare(m, n.facet(p)) ? n.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = u.length << 1, u.push((g) => m.dynamicSlot(g)));
        l[p.id] = u.length << 1, u.push((m) => Sy(m, p, d));
      }
    }
    let h = u.map((f) => f(l));
    return new _s(e, o, h, l, a, s);
  }
}
function xy(i, e, t) {
  let n = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = r.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let u = n[a].indexOf(o);
      u > -1 && n[a].splice(u, 1), o instanceof wl && t.delete(o.compartment);
    }
    if (r.set(o, l), Array.isArray(o))
      for (let u of o)
        s(u, l);
    else if (o instanceof wl) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let u = e.get(o.compartment) || o.inner;
      t.set(o.compartment, u), s(u, l);
    } else if (o instanceof lp)
      s(o.inner, o.prec);
    else if (o instanceof Re)
      n[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof ds)
      n[l].push(o), o.facet.extensions && s(o.facet.extensions, Ci.default);
    else {
      let u = o.extension;
      if (!u)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(u, l);
    }
  }
  return s(i, Ci.default), n.reduce((o, l) => o.concat(l));
}
function Gn(i, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, n = i.status[t];
  if (n == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2)
    return n;
  i.status[t] = 4;
  let r = i.computeSlot(i, i.config.dynamicSlots[t]);
  return i.status[t] = 2 | r;
}
function As(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const ap = /* @__PURE__ */ D.define(), kl = /* @__PURE__ */ D.define({
  combine: (i) => i.some((e) => e),
  static: !0
}), up = /* @__PURE__ */ D.define({
  combine: (i) => i.length ? i[0] : void 0,
  static: !0
}), cp = /* @__PURE__ */ D.define(), hp = /* @__PURE__ */ D.define(), fp = /* @__PURE__ */ D.define(), dp = /* @__PURE__ */ D.define({
  combine: (i) => i.length ? i[0] : !1
});
class ii {
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
    return new wy();
  }
}
class wy {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new ii(this, e);
  }
}
class ky {
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
    return new W(this, e);
  }
}
class W {
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
    return t === void 0 ? void 0 : t == this.value ? this : new W(this.type, t);
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
    return new ky(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let n = [];
    for (let r of e) {
      let s = r.map(t);
      s && n.push(s);
    }
    return n;
  }
}
W.reconfigure = /* @__PURE__ */ W.define();
W.appendConfig = /* @__PURE__ */ W.define();
class Ee {
  constructor(e, t, n, r, s, o) {
    this.startState = e, this.changes = t, this.selection = n, this.effects = r, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, n && op(n, t.newLength), s.some((l) => l.type == Ee.time) || (this.annotations = s.concat(Ee.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, n, r, s, o) {
    return new Ee(e, t, n, r, s, o);
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
    let t = this.annotation(Ee.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
Ee.time = /* @__PURE__ */ ii.define();
Ee.userEvent = /* @__PURE__ */ ii.define();
Ee.addToHistory = /* @__PURE__ */ ii.define();
Ee.remote = /* @__PURE__ */ ii.define();
function Py(i, e) {
  let t = [];
  for (let n = 0, r = 0; ; ) {
    let s, o;
    if (n < i.length && (r == e.length || e[r] >= i[n]))
      s = i[n++], o = i[n++];
    else if (r < e.length)
      s = e[r++], o = e[r++];
    else
      return t;
    !t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function pp(i, e, t) {
  var n;
  let r, s, o;
  return t ? (r = e.changes, s = Me.empty(e.changes.length), o = i.changes.compose(e.changes)) : (r = e.changes.map(i.changes), s = i.changes.mapDesc(e.changes, !0), o = i.changes.compose(r)), {
    changes: o,
    selection: e.selection ? e.selection.map(s) : (n = i.selection) === null || n === void 0 ? void 0 : n.map(r),
    effects: W.mapEffects(i.effects, r).concat(W.mapEffects(e.effects, s)),
    annotations: i.annotations.length ? i.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: i.scrollIntoView || e.scrollIntoView
  };
}
function Pl(i, e, t) {
  let n = e.selection, r = rn(e.annotations);
  return e.userEvent && (r = r.concat(Ee.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Me ? e.changes : Me.of(e.changes || [], t, i.facet(up)),
    selection: n && (n instanceof C ? n : C.single(n.anchor, n.head)),
    effects: rn(e.effects),
    annotations: r,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Op(i, e, t) {
  let n = Pl(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let o = !!e[s].sequential;
    n = pp(n, Pl(i, e[s], o ? n.changes.newLength : i.doc.length), o);
  }
  let r = Ee.create(i, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
  return Cy(t ? Qy(r) : r);
}
function Qy(i) {
  let e = i.startState, t = !0;
  for (let r of e.facet(cp)) {
    let s = r(i);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : Py(t, s));
  }
  if (t !== !0) {
    let r, s;
    if (t === !1)
      s = i.changes.invertedDesc, r = Me.empty(e.doc.length);
    else {
      let o = i.changes.filter(t);
      r = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    i = Ee.create(e, r, i.selection && i.selection.map(s), W.mapEffects(i.effects, s), i.annotations, i.scrollIntoView);
  }
  let n = e.facet(hp);
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r](i);
    s instanceof Ee ? i = s : Array.isArray(s) && s.length == 1 && s[0] instanceof Ee ? i = s[0] : i = Op(e, rn(s), !1);
  }
  return i;
}
function Cy(i) {
  let e = i.startState, t = e.facet(fp), n = i;
  for (let r = t.length - 1; r >= 0; r--) {
    let s = t[r](i);
    s && Object.keys(s).length && (n = pp(n, Pl(e, s, i.changes.newLength), !0));
  }
  return n == i ? i : Ee.create(e, i.changes, i.selection, n.effects, n.annotations, n.scrollIntoView);
}
const $y = [];
function rn(i) {
  return i == null ? $y : Array.isArray(i) ? i : [i];
}
var Se = /* @__PURE__ */ function(i) {
  return i[i.Word = 0] = "Word", i[i.Space = 1] = "Space", i[i.Other = 2] = "Other", i;
}(Se || (Se = {}));
const _y = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Ql;
try {
  Ql = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Ay(i) {
  if (Ql)
    return Ql.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || _y.test(t)))
      return !0;
  }
  return !1;
}
function Ey(i) {
  return (e) => {
    if (!/\S/.test(e))
      return Se.Space;
    if (Ay(e))
      return Se.Word;
    for (let t = 0; t < i.length; t++)
      if (e.indexOf(i[t]) > -1)
        return Se.Word;
    return Se.Other;
  };
}
class ee {
  constructor(e, t, n, r, s, o) {
    this.config = e, this.doc = t, this.selection = n, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Gn(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Gn(this, n), As(this, n);
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
    return Op(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: n, compartments: r } = t;
    for (let l of e.effects)
      l.is(hn.reconfigure) ? (t && (r = /* @__PURE__ */ new Map(), t.compartments.forEach((a, u) => r.set(u, a)), t = null), r.set(l.value.compartment, l.value.extension)) : l.is(W.reconfigure) ? (t = null, n = l.value) : l.is(W.appendConfig) && (t = null, n = rn(n).concat(l.value));
    let s;
    t ? s = e.startState.values.slice() : (t = _s.resolve(n, r, this), s = new ee(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, u) => u.reconfigure(a, this), null).values);
    let o = e.startState.facet(kl) ? e.newSelection : e.newSelection.asSingle();
    new ee(t, e.newDoc, o, s, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: C.cursor(t.from + e.length)
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
    let t = this.selection, n = e(t.ranges[0]), r = this.changes(n.changes), s = [n.range], o = rn(n.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), u = this.changes(a.changes), c = u.map(r);
      for (let f = 0; f < l; f++)
        s[f] = s[f].map(c);
      let h = r.mapDesc(u, !0);
      s.push(a.range.map(h)), r = r.compose(c), o = W.mapEffects(o, c).concat(W.mapEffects(rn(a.effects), h));
    }
    return {
      changes: r,
      selection: C.create(s, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof Me ? e : Me.of(e, this.doc.length, this.facet(ee.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return se.of(e.split(this.facet(ee.lineSeparator) || vl));
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
    return t == null ? e.default : (Gn(this, t), As(this, t));
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
        let r = e[n];
        r instanceof Re && this.config.address[r.id] != null && (t[n] = r.spec.toJSON(this.field(e[n]), this));
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
    let r = [];
    if (n) {
      for (let s in n)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let o = n[s], l = e[s];
          r.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return ee.create({
      doc: e.doc,
      selection: C.fromJSON(e.selection),
      extensions: t.extensions ? r.concat([t.extensions]) : r
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = _s.resolve(e.extensions || [], /* @__PURE__ */ new Map()), n = e.doc instanceof se ? e.doc : se.of((e.doc || "").split(t.staticFacet(ee.lineSeparator) || vl)), r = e.selection ? e.selection instanceof C ? e.selection : C.single(e.selection.anchor, e.selection.head) : C.single(0);
    return op(r, n.length), t.staticFacet(kl) || (r = r.asSingle()), new ee(t, n, r, t.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(ee.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(ee.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(dp);
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
    for (let n of this.facet(ee.phrases))
      if (Object.prototype.hasOwnProperty.call(n, e)) {
        e = n[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (n, r) => {
      if (r == "$")
        return "$";
      let s = +(r || 1);
      return !s || s > t.length ? n : t[s - 1];
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
    let r = [];
    for (let s of this.facet(ap))
      for (let o of s(this, t, n))
        Object.prototype.hasOwnProperty.call(o, e) && r.push(o[e]);
    return r;
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
    return Ey(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: n, length: r } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - n, l = e - n;
    for (; o > 0; ) {
      let a = Ne(t, o, !1);
      if (s(t.slice(a, o)) != Se.Word)
        break;
      o = a;
    }
    for (; l < r; ) {
      let a = Ne(t, l);
      if (s(t.slice(l, a)) != Se.Word)
        break;
      l = a;
    }
    return o == l ? null : C.range(o + n, l + n);
  }
}
ee.allowMultipleSelections = kl;
ee.tabSize = /* @__PURE__ */ D.define({
  combine: (i) => i.length ? i[0] : 4
});
ee.lineSeparator = up;
ee.readOnly = dp;
ee.phrases = /* @__PURE__ */ D.define({
  compare(i, e) {
    let t = Object.keys(i), n = Object.keys(e);
    return t.length == n.length && t.every((r) => i[r] == e[r]);
  }
});
ee.languageData = ap;
ee.changeFilter = cp;
ee.transactionFilter = hp;
ee.transactionExtender = fp;
hn.reconfigure = /* @__PURE__ */ W.define();
function Tt(i, e, t = {}) {
  let n = {};
  for (let r of i)
    for (let s of Object.keys(r)) {
      let o = r[s], l = n[s];
      if (l === void 0)
        n[s] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, s))
        n[s] = t[s](l, o);
      else
        throw new Error("Config merge conflict for field " + s);
    }
  for (let r in e)
    n[r] === void 0 && (n[r] = e[r]);
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
    return Cl.create(e, t, this);
  }
}
Li.prototype.startSide = Li.prototype.endSide = 0;
Li.prototype.point = !1;
Li.prototype.mapMode = qe.TrackDel;
let Cl = class mp {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.value = n;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new mp(e, t, n);
  }
};
function $l(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class qa {
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.value = n, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, n, r = 0) {
    let s = n ? this.to : this.from;
    for (let o = r, l = s.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, u = s[a] - e || (n ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return u >= 0 ? o : l;
      u >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, n, r) {
    for (let s = this.findIndex(t, -1e9, !0), o = this.findIndex(n, 1e9, !1, s); s < o; s++)
      if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, t) {
    let n = [], r = [], s = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let u = this.value[a], c = this.from[a] + e, h = this.to[a] + e, f, d;
      if (c == h) {
        let p = t.mapPos(c, u.startSide, u.mapMode);
        if (p == null || (f = d = p, u.startSide != u.endSide && (d = t.mapPos(c, u.endSide), d < f)))
          continue;
      } else if (f = t.mapPos(c, u.startSide), d = t.mapPos(h, u.endSide), f > d || f == d && u.startSide > 0 && u.endSide <= 0)
        continue;
      (d - f || u.endSide - u.startSide) < 0 || (o < 0 && (o = f), u.point && (l = Math.max(l, d - f)), n.push(u), r.push(f - o), s.push(d - o));
    }
    return { mapped: n.length ? new qa(r, s, n, l) : null, pos: o };
  }
}
class ne {
  constructor(e, t, n, r) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = r;
  }
  /**
  @internal
  */
  static create(e, t, n, r) {
    return new ne(e, t, n, r);
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
    let { add: t = [], sort: n = !1, filterFrom: r = 0, filterTo: s = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (n && (t = t.slice().sort($l)), this.isEmpty)
      return t.length ? ne.of(t) : this;
    let l = new gp(this, null, -1).goto(0), a = 0, u = [], c = new pi();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let h = t[a++];
        c.addInner(h.from, h.to, h.value) || u.push(h);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || r > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || r > l.to || s < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || u.push(Cl.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !u.length ? ne.empty : this.nextLayer.update({ add: u, filter: o, filterFrom: r, filterTo: s }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], n = [], r = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], u = e.touchesRange(l, l + a.length);
      if (u === !1)
        r = Math.max(r, a.maxPoint), t.push(a), n.push(e.mapPos(l));
      else if (u === !0) {
        let { mapped: c, pos: h } = a.map(l, e);
        c && (r = Math.max(r, c.maxPoint), t.push(c), n.push(h));
      }
    }
    let s = this.nextLayer.map(e);
    return t.length == 0 ? s : new ne(n, t, s || ne.empty, r);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let s = this.chunkPos[r], o = this.chunk[r];
        if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, n) === !1)
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
    return lr.from([this]).goto(e);
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
    return lr.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, n, r, s = -1) {
    let o = e.filter((h) => h.maxPoint > 0 || !h.isEmpty && h.maxPoint >= s), l = t.filter((h) => h.maxPoint > 0 || !h.isEmpty && h.maxPoint >= s), a = mc(o, l, n), u = new Mn(o, a, s), c = new Mn(l, a, s);
    n.iterGaps((h, f, d) => gc(u, h, c, f, d, r)), n.empty && n.length == 0 && gc(u, 0, c, 0, 0, r);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, n = 0, r) {
    r == null && (r = 999999999);
    let s = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (s.length != o.length)
      return !1;
    if (!s.length)
      return !0;
    let l = mc(s, o), a = new Mn(s, l, 0).goto(n), u = new Mn(o, l, 0).goto(n);
    for (; ; ) {
      if (a.to != u.to || !_l(a.active, u.active) || a.point && (!u.point || !a.point.eq(u.point)))
        return !1;
      if (a.to > r)
        return !0;
      a.next(), u.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, n, r, s = -1) {
    let o = new Mn(e, null, s).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let u = Math.min(o.to, n);
      if (o.point) {
        let c = o.activeForPoint(o.to), h = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        r.point(l, u, o.point, c, h, o.pointRank), a = Math.min(o.openEnd(u), c.length);
      } else u > l && (r.span(l, u, o.active, a), a = o.openEnd(u));
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
    let n = new pi();
    for (let r of e instanceof Cl ? [e] : t ? Ty(e) : e)
      n.add(r.from, r.to, r.value);
    return n.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return ne.empty;
    let t = e[e.length - 1];
    for (let n = e.length - 2; n >= 0; n--)
      for (let r = e[n]; r != ne.empty; r = r.nextLayer)
        t = new ne(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint));
    return t;
  }
}
ne.empty = /* @__PURE__ */ new ne([], [], null, -1);
function Ty(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let n = i[t];
      if ($l(e, n) > 0)
        return i.slice().sort($l);
      e = n;
    }
  return i;
}
ne.empty.nextLayer = ne.empty;
class pi {
  finishChunk(e) {
    this.chunks.push(new qa(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(e, t, n) || (this.nextLayer || (this.nextLayer = new pi())).add(e, t, n);
  }
  /**
  @internal
  */
  addInner(e, t, n) {
    let r = e - this.lastTo || n.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
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
    return this.finishInner(ne.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = ne.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function mc(i, e, t) {
  let n = /* @__PURE__ */ new Map();
  for (let s of i)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && n.set(s.chunk[o], s.chunkPos[o]);
  let r = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = n.get(s.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == s.chunkPos[o] && !(t != null && t.touchesRange(l, l + s.chunk[o].length)) && r.add(s.chunk[o]);
    }
  return r;
}
class gp {
  constructor(e, t, n, r = 0) {
    this.layer = e, this.skip = t, this.minPoint = n, this.rank = r;
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
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, n = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!n || this.rangeIndex < r) && this.setRangeIndex(r);
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
class lr {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let r = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && r.push(new gp(o, t, n, s));
    return r.length == 1 ? r[0] : new lr(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap)
      n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Do(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap)
      n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--)
      Do(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Do(this.heap, 0);
    }
  }
}
function Do(i, e) {
  for (let t = i[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= i.length)
      break;
    let r = i[n];
    if (n + 1 < i.length && r.compare(i[n + 1]) >= 0 && (r = i[n + 1], n++), t.compare(r) < 0)
      break;
    i[n] = t, i[e] = r, e = n;
  }
}
class Mn {
  constructor(e, t, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = lr.from(e, t, n);
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
    Ir(this.active, e), Ir(this.activeTo, e), Ir(this.activeRank, e), this.minActive = yc(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: n, to: r, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || r - this.activeTo[t]) > 0; )
      t++;
    jr(this.active, t, n), jr(this.activeTo, t, r), jr(this.activeRank, t, s), e && jr(e, t, this.cursor.from), this.minActive = yc(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), n && Ir(n, r);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(n), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
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
      for (let r = n.length - 1; r >= 0 && n[r] < e; r--)
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
function gc(i, e, t, n, r, s) {
  i.goto(e), t.goto(n);
  let o = n + r, l = n, a = n - e;
  for (; ; ) {
    let u = i.to + a - t.to || i.endSide - t.endSide, c = u < 0 ? i.to + a : t.to, h = Math.min(c, o);
    if (i.point || t.point ? i.point && t.point && (i.point == t.point || i.point.eq(t.point)) && _l(i.activeForPoint(i.to), t.activeForPoint(t.to)) || s.comparePoint(l, h, i.point, t.point) : h > l && !_l(i.active, t.active) && s.compareRange(l, h, i.active, t.active), c > o)
      break;
    l = c, u <= 0 && i.next(), u >= 0 && t.next();
  }
}
function _l(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] != e[t] && !i[t].eq(e[t]))
      return !1;
  return !0;
}
function Ir(i, e) {
  for (let t = e, n = i.length - 1; t < n; t++)
    i[t] = i[t + 1];
  i.pop();
}
function jr(i, e, t) {
  for (let n = i.length - 1; n >= e; n--)
    i[n + 1] = i[n];
  i[e] = t;
}
function yc(i, e) {
  let t = -1, n = 1e9;
  for (let r = 0; r < e.length; r++)
    (e[r] - n || i[r].endSide - i[t].endSide) < 0 && (t = r, n = e[r]);
  return t;
}
function Qn(i, e, t = i.length) {
  let n = 0;
  for (let r = 0; r < t; )
    i.charCodeAt(r) == 9 ? (n += e - n % e, r++) : (n++, r = Ne(i, r));
  return n;
}
function Al(i, e, t, n) {
  for (let r = 0, s = 0; ; ) {
    if (s >= e)
      return r;
    if (r == i.length)
      break;
    s += i.charCodeAt(r) == 9 ? t - s % t : 1, r = Ne(i, r);
  }
  return n === !0 ? -1 : i.length;
}
const El = "ͼ", vc = typeof Symbol > "u" ? "__" + El : Symbol.for(El), Tl = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), bc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Oi {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: n } = t || {};
    function r(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function s(o, l, a, u) {
      let c = [], h = /^@(\w+)\b/.exec(o[0]), f = h && h[1] == "keyframes";
      if (h && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          s(
            d.split(/,\s*/).map((O) => o.map((m) => O.replace(/&/, m))).reduce((O, m) => O.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!h) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          s(r(d), p, c, f);
        } else p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (O) => "-" + O.toLowerCase()) + ": " + p + ";");
      }
      (c.length || f) && a.push((n && !h && !u ? o.map(n) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e) s(r(o), e[o], this.rules);
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
    let e = bc[vc] || 1;
    return bc[vc] = e + 1, El + e.toString(36);
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
    let r = e[Tl], s = n && n.nonce;
    r ? s && r.setNonce(s) : r = new Ry(e, s), r.mount(Array.isArray(t) ? t : [t], e);
  }
}
let Sc = /* @__PURE__ */ new Map();
class Ry {
  constructor(e, t) {
    let n = e.ownerDocument || e, r = n.defaultView;
    if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
      let s = Sc.get(n);
      if (s) return e[Tl] = s;
      this.sheet = new r.CSSStyleSheet(), Sc.set(n, this);
    } else
      this.styleTag = n.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[Tl] = this;
  }
  mount(e, t) {
    let n = this.sheet, r = 0, s = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < s && a > -1 && (this.modules.splice(a, 1), s--, a = -1), a == -1) {
        if (this.modules.splice(s++, 0, l), n) for (let u = 0; u < l.rules.length; u++)
          n.insertRule(l.rules[u], r++);
      } else {
        for (; s < a; ) r += this.modules[s++].rules.length;
        r += l.rules.length, s++;
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
var mi = {
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
}, ar = {
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
}, My = typeof navigator < "u" && /Mac/.test(navigator.platform), Zy = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ze = 0; ze < 10; ze++) mi[48 + ze] = mi[96 + ze] = String(ze);
for (var ze = 1; ze <= 24; ze++) mi[ze + 111] = "F" + ze;
for (var ze = 65; ze <= 90; ze++)
  mi[ze] = String.fromCharCode(ze + 32), ar[ze] = String.fromCharCode(ze);
for (var Vo in mi) ar.hasOwnProperty(Vo) || (ar[Vo] = mi[Vo]);
function Dy(i) {
  var e = My && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey || Zy && i.shiftKey && i.key && i.key.length == 1 || i.key == "Unidentified", t = !e && i.key || (i.shiftKey ? ar : mi)[i.keyCode] || i.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function ur(i) {
  let e;
  return i.nodeType == 11 ? e = i.getSelection ? i : i.ownerDocument : e = i, e.getSelection();
}
function Rl(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function ps(i, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Rl(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function fn(i) {
  return i.nodeType == 3 ? Ii(i, 0, i.nodeValue.length).getClientRects() : i.nodeType == 1 ? i.getClientRects() : [];
}
function Hn(i, e, t, n) {
  return t ? xc(i, e, t, n, -1) || xc(i, e, t, n, 1) : !1;
}
function Bi(i) {
  for (var e = 0; ; e++)
    if (i = i.previousSibling, !i)
      return e;
}
function Es(i) {
  return i.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName);
}
function xc(i, e, t, n, r) {
  for (; ; ) {
    if (i == t && e == n)
      return !0;
    if (e == (r < 0 ? 0 : Ut(i))) {
      if (i.nodeName == "DIV")
        return !1;
      let s = i.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = Bi(i) + (r < 0 ? 0 : 1), i = s;
    } else if (i.nodeType == 1) {
      if (i = i.childNodes[e + (r < 0 ? -1 : 0)], i.nodeType == 1 && i.contentEditable == "false")
        return !1;
      e = r < 0 ? Ut(i) : 0;
    } else
      return !1;
  }
}
function Ut(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function Pr(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function Vy(i) {
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
function yp(i, e) {
  let t = e.width / i.offsetWidth, n = e.height / i.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - i.offsetWidth) < 1) && (t = 1), (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(e.height - i.offsetHeight) < 1) && (n = 1), { scaleX: t, scaleY: n };
}
function Ly(i, e, t, n, r, s, o, l) {
  let a = i.ownerDocument, u = a.defaultView || window;
  for (let c = i, h = !1; c && !h; )
    if (c.nodeType == 1) {
      let f, d = c == a.body, p = 1, O = 1;
      if (d)
        f = Vy(u);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (h = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let y = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: O } = yp(c, y)), f = {
          left: y.left,
          right: y.left + c.clientWidth * p,
          top: y.top,
          bottom: y.top + c.clientHeight * O
        };
      }
      let m = 0, g = 0;
      if (r == "nearest")
        e.top < f.top ? (g = -(f.top - e.top + o), t > 0 && e.bottom > f.bottom + g && (g = e.bottom - f.bottom + g + o)) : e.bottom > f.bottom && (g = e.bottom - f.bottom + o, t < 0 && e.top - g < f.top && (g = -(f.top + g - e.top + o)));
      else {
        let y = e.bottom - e.top, b = f.bottom - f.top;
        g = (r == "center" && y <= b ? e.top + y / 2 - b / 2 : r == "start" || r == "center" && t < 0 ? e.top - o : e.bottom - b + o) - f.top;
      }
      if (n == "nearest" ? e.left < f.left ? (m = -(f.left - e.left + s), t > 0 && e.right > f.right + m && (m = e.right - f.right + m + s)) : e.right > f.right && (m = e.right - f.right + s, t < 0 && e.left < f.left + m && (m = -(f.left + m - e.left + s))) : m = (n == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : n == "start" == l ? e.left - s : e.right - (f.right - f.left) + s) - f.left, m || g)
        if (d)
          u.scrollBy(m, g);
        else {
          let y = 0, b = 0;
          if (g) {
            let x = c.scrollTop;
            c.scrollTop += g / O, b = (c.scrollTop - x) * O;
          }
          if (m) {
            let x = c.scrollLeft;
            c.scrollLeft += m / p, y = (c.scrollLeft - x) * p;
          }
          e = {
            left: e.left - y,
            top: e.top - b,
            right: e.right - y,
            bottom: e.bottom - b
          }, y && Math.abs(y - m) < 1 && (n = "nearest"), b && Math.abs(b - g) < 1 && (r = "nearest");
        }
      if (d)
        break;
      c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function By(i) {
  let e = i.ownerDocument, t, n;
  for (let r = i.parentNode; r && !(r == e.body || t && n); )
    if (r.nodeType == 1)
      !n && r.scrollHeight > r.clientHeight && (n = r), !t && r.scrollWidth > r.clientWidth && (t = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: t, y: n };
}
class Iy {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: n } = e;
    this.set(t, Math.min(e.anchorOffset, t ? Ut(t) : 0), n, Math.min(e.focusOffset, n ? Ut(n) : 0));
  }
  set(e, t, n, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = r;
  }
}
let Fi = null;
function vp(i) {
  if (i.setActive)
    return i.setActive();
  if (Fi)
    return i.focus(Fi);
  let e = [];
  for (let t = i; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (i.focus(Fi == null ? {
    get preventScroll() {
      return Fi = { preventScroll: !0 }, !0;
    }
  } : void 0), !Fi) {
    Fi = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++], r = e[t++], s = e[t++];
      n.scrollTop != r && (n.scrollTop = r), n.scrollLeft != s && (n.scrollLeft = s);
    }
  }
}
let wc;
function Ii(i, e, t = e) {
  let n = wc || (wc = document.createRange());
  return n.setEnd(i, t), n.setStart(i, e), n;
}
function sn(i, e, t, n) {
  let r = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  n && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = n);
  let s = new KeyboardEvent("keydown", r);
  s.synthetic = !0, i.dispatchEvent(s);
  let o = new KeyboardEvent("keyup", r);
  return o.synthetic = !0, i.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
function jy(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || i.nodeType == 11 && i.host))
      return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function bp(i) {
  for (; i.attributes.length; )
    i.removeAttributeNode(i.attributes[0]);
}
function zy(i, e) {
  let t = e.focusNode, n = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != n)
    return !1;
  for (n = Math.min(n, Ut(t)); ; )
    if (n) {
      if (t.nodeType != 1)
        return !1;
      let r = t.childNodes[n - 1];
      r.contentEditable == "false" ? n-- : (t = r, n = Ut(t));
    } else {
      if (t == i)
        return !0;
      n = Bi(t), t = t.parentNode;
    }
}
function Sp(i) {
  return i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function xp(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n > 0)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n - 1], n = Ut(t);
    } else if (t.parentNode && !Es(t))
      n = Bi(t), t = t.parentNode;
    else
      return null;
  }
}
function wp(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n < t.nodeValue.length)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[n], n = 0;
    } else if (t.parentNode && !Es(t))
      n = Bi(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class Ue {
  constructor(e, t, n = !0) {
    this.node = e, this.offset = t, this.precise = n;
  }
  static before(e, t) {
    return new Ue(e.parentNode, Bi(e), t);
  }
  static after(e, t) {
    return new Ue(e.parentNode, Bi(e) + 1, t);
  }
}
const Na = [];
class pe {
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
      let n = this.dom, r = null, s;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (s = r ? r.nextSibling : n.firstChild)) {
            let l = pe.get(s);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(s);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (s = r ? r.nextSibling : n.firstChild, t && !t.written && t.node == n && s != o.dom && (t.written = !0), o.dom.parentNode == n)
          for (; s && s != o.dom; )
            s = kc(s);
        else
          n.insertBefore(o.dom, s);
        r = o.dom;
      }
      for (s = r ? r.nextSibling : n.firstChild, s && t && t.node == n && (t.written = !0); s; )
        s = kc(s);
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
      let r = Ut(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let s = e.parentNode;
        if (s == this.dom)
          break;
        r == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? r = -1 : r = 1), e = s;
      }
      r < 0 ? n = e : n = e.nextSibling;
    }
    if (n == this.dom.firstChild)
      return 0;
    for (; n && !pe.get(n); )
      n = n.nextSibling;
    if (!n)
      return this.length;
    for (let r = 0, s = 0; ; r++) {
      let o = this.children[r];
      if (o.dom == n)
        return s;
      s += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, n = 0) {
    let r = -1, s = -1, o = -1, l = -1;
    for (let a = 0, u = n, c = n; a < this.children.length; a++) {
      let h = this.children[a], f = u + h.length;
      if (u < e && f > t)
        return h.domBoundsAround(e, t, u);
      if (f >= e && r == -1 && (r = a, s = u), u > t && h.dom.parentNode == this.dom) {
        o = a, l = c;
        break;
      }
      c = f, u = f + h.breakAfter;
    }
    return {
      from: s,
      to: l < 0 ? n + this.length : l,
      startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
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
  replaceChildren(e, t, n = Na) {
    this.markDirty();
    for (let r = e; r < t; r++) {
      let s = this.children[r];
      s.parent == this && n.indexOf(s) < 0 && s.destroy();
    }
    n.length < 250 ? this.children.splice(e, t - e, ...n) : this.children = [].concat(this.children.slice(0, e), n, this.children.slice(t));
    for (let r = 0; r < n.length; r++)
      n[r].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new kp(this.children, e, this.children.length);
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
  merge(e, t, n, r, s, o) {
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
pe.prototype.breakAfter = 0;
function kc(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class kp {
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
function Pp(i, e, t, n, r, s, o, l, a) {
  let { children: u } = i, c = u.length ? u[e] : null, h = s.length ? s[s.length - 1] : null, f = h ? h.breakAfter : o;
  if (!(e == n && c && !o && !f && s.length < 2 && c.merge(t, r, s.length ? h : null, t == 0, l, a))) {
    if (n < u.length) {
      let d = u[n];
      d && (r < d.length || d.breakAfter && (h != null && h.breakAfter)) ? (e == n && (d = d.split(r), r = 0), !f && h && d.merge(0, r, h, !0, 0, a) ? s[s.length - 1] = d : ((r || d.children.length && !d.children[0].length) && d.merge(0, r, null, !1, 0, a), s.push(d))) : d != null && d.breakAfter && (h ? h.breakAfter = 1 : o = 1), n++;
    }
    for (c && (c.breakAfter = o, t > 0 && (!o && s.length && c.merge(t, c.length, s[0], !1, l, 0) ? c.breakAfter = s.shift().breakAfter : (t < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(t, c.length, null, !1, l, 0), e++)); e < n && s.length; )
      if (u[n - 1].become(s[s.length - 1]))
        n--, s.pop(), a = s.length ? 0 : l;
      else if (u[e].become(s[0]))
        e++, s.shift(), l = s.length ? 0 : a;
      else
        break;
    !s.length && e && n < u.length && !u[e - 1].breakAfter && u[n].merge(0, 0, u[e - 1], !1, l, a) && e--, (e < n || s.length) && i.replaceChildren(e, n, s);
  }
}
function Qp(i, e, t, n, r, s) {
  let o = i.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: u, off: c } = o.findPos(e, -1), h = e - t;
  for (let f of n)
    h += f.length;
  i.length += h, Pp(i, u, c, l, a, n, 0, r, s);
}
let rt = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Ml = typeof document < "u" ? document : { documentElement: { style: {} } };
const Zl = /* @__PURE__ */ /Edge\/(\d+)/.exec(rt.userAgent), Cp = /* @__PURE__ */ /MSIE \d/.test(rt.userAgent), Dl = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(rt.userAgent), fo = !!(Cp || Dl || Zl), Pc = !fo && /* @__PURE__ */ /gecko\/(\d+)/i.test(rt.userAgent), Lo = !fo && /* @__PURE__ */ /Chrome\/(\d+)/.exec(rt.userAgent), Qc = "webkitFontSmoothing" in Ml.documentElement.style, $p = !fo && /* @__PURE__ */ /Apple Computer/.test(rt.vendor), Cc = $p && (/* @__PURE__ */ /Mobile\/\w+/.test(rt.userAgent) || rt.maxTouchPoints > 2);
var B = {
  mac: Cc || /* @__PURE__ */ /Mac/.test(rt.platform),
  windows: /* @__PURE__ */ /Win/.test(rt.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(rt.platform),
  ie: fo,
  ie_version: Cp ? Ml.documentMode || 6 : Dl ? +Dl[1] : Zl ? +Zl[1] : 0,
  gecko: Pc,
  gecko_version: Pc ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(rt.userAgent) || [0, 0])[1] : 0,
  chrome: !!Lo,
  chrome_version: Lo ? +Lo[1] : 0,
  ios: Cc,
  android: /* @__PURE__ */ /Android\b/.test(rt.userAgent),
  webkit: Qc,
  safari: $p,
  webkit_version: Qc ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(rt.userAgent) || [0, 0])[1] : 0,
  tabSize: Ml.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const qy = 256;
class $t extends pe {
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
    return this.flags & 8 || n && (!(n instanceof $t) || this.length - (t - e) + n.length > qy || n.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (n ? n.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new $t(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new Ue(this.dom, e);
  }
  domBoundsAround(e, t, n) {
    return { from: n, to: n + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return Ny(this.dom, e, t);
  }
}
class ti extends pe {
  constructor(e, t = [], n = 0) {
    super(), this.mark = e, this.children = t, this.length = n;
    for (let r of t)
      r.setParent(this);
  }
  setAttrs(e) {
    if (bp(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
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
  merge(e, t, n, r, s, o) {
    return n && (!(n instanceof ti && n.mark.eq(this.mark)) || e && s <= 0 || t < this.length && o <= 0) ? !1 : (Qp(this, e, t, n ? n.children.slice() : [], s - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], n = 0, r = -1, s = 0;
    for (let l of this.children) {
      let a = n + l.length;
      a > e && t.push(n < e ? l.split(e - n) : l), r < 0 && n >= e && (r = s), n = a, s++;
    }
    let o = this.length - e;
    return this.length = e, r > -1 && (this.children.length = r, this.markDirty()), new ti(this.mark, t, o);
  }
  domAtPos(e) {
    return _p(this, e);
  }
  coordsAt(e, t) {
    return Ep(this, e, t);
  }
}
function Ny(i, e, t) {
  let n = i.nodeValue.length;
  e > n && (e = n);
  let r = e, s = e, o = 0;
  e == 0 && t < 0 || e == n && t >= 0 ? B.chrome || B.gecko || (e ? (r--, o = 1) : s < n && (s++, o = -1)) : t < 0 ? r-- : s < n && s++;
  let l = Ii(i, r, s).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return B.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (u) => u.width) || a), o ? Pr(a, o < 0) : a || null;
}
class ci extends pe {
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
  merge(e, t, n, r, s, o) {
    return n && (!(n instanceof ci) || !this.widget.compare(n.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (n ? n.length : 0) + (this.length - t), !0);
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
      return se.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, n = t && t.state.doc, r = this.posAtStart;
    return n ? n.slice(r, r + this.length) : se.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? Ue.before(this.dom) : Ue.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let n = this.widget.coordsAt(this.dom, e, t);
    if (n)
      return n;
    let r = this.dom.getClientRects(), s = null;
    if (!r.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? r.length - 1 : 0; s = r[l], !(e > 0 ? l == 0 : l == r.length - 1 || s.top < s.bottom); l += o ? -1 : 1)
      ;
    return Pr(s, !o);
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
class dn extends pe {
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
    return e instanceof dn && e.side == this.side;
  }
  split() {
    return new dn(this.side);
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
    return this.side > 0 ? Ue.before(this.dom) : Ue.after(this.dom);
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
    return se.empty;
  }
  get isHidden() {
    return !0;
  }
}
$t.prototype.children = ci.prototype.children = dn.prototype.children = Na;
function _p(i, e) {
  let t = i.dom, { children: n } = i, r = 0;
  for (let s = 0; r < n.length; r++) {
    let o = n[r], l = s + o.length;
    if (!(l == s && o.getSide() <= 0)) {
      if (e > s && e < l && o.dom.parentNode == t)
        return o.domAtPos(e - s);
      if (e <= s)
        break;
      s = l;
    }
  }
  for (let s = r; s > 0; s--) {
    let o = n[s - 1];
    if (o.dom.parentNode == t)
      return o.domAtPos(o.length);
  }
  for (let s = r; s < n.length; s++) {
    let o = n[s];
    if (o.dom.parentNode == t)
      return o.domAtPos(0);
  }
  return new Ue(t, 0);
}
function Ap(i, e, t) {
  let n, { children: r } = i;
  t > 0 && e instanceof ti && r.length && (n = r[r.length - 1]) instanceof ti && n.mark.eq(e.mark) ? Ap(n, e.children[0], t - 1) : (r.push(e), e.setParent(i)), i.length += e.length;
}
function Ep(i, e, t) {
  let n = null, r = -1, s = null, o = -1;
  function l(u, c) {
    for (let h = 0, f = 0; h < u.children.length && f <= c; h++) {
      let d = u.children[h], p = f + d.length;
      p >= c && (d.children.length ? l(d, c - f) : (!s || s.isHidden && t > 0) && (p > c || f == p && d.getSide() > 0) ? (s = d, o = c - f) : (f < c || f == p && d.getSide() < 0 && !d.isHidden) && (n = d, r = c - f)), f = p;
    }
  }
  l(i, e);
  let a = (t < 0 ? n : s) || n || s;
  return a ? a.coordsAt(Math.max(0, a == n ? r : o), t) : Xy(i);
}
function Xy(i) {
  let e = i.dom.lastChild;
  if (!e)
    return i.dom.getBoundingClientRect();
  let t = fn(e);
  return t[t.length - 1] || null;
}
function Vl(i, e) {
  for (let t in i)
    t == "class" && e.class ? e.class += " " + i.class : t == "style" && e.style ? e.style += ";" + i.style : e[t] = i[t];
  return e;
}
const $c = /* @__PURE__ */ Object.create(null);
function Ts(i, e, t) {
  if (i == e)
    return !0;
  i || (i = $c), e || (e = $c);
  let n = Object.keys(i), r = Object.keys(e);
  if (n.length - (t && n.indexOf(t) > -1 ? 1 : 0) != r.length - (t && r.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let s of n)
    if (s != t && (r.indexOf(s) == -1 || i[s] !== e[s]))
      return !1;
  return !0;
}
function Ll(i, e, t) {
  let n = !1;
  if (e)
    for (let r in e)
      t && r in t || (n = !0, r == "style" ? i.style.cssText = "" : i.removeAttribute(r));
  if (t)
    for (let r in t)
      e && e[r] == t[r] || (n = !0, r == "style" ? i.style.cssText = t[r] : i.setAttribute(r, t[r]));
  return n;
}
function Yy(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < i.attributes.length; t++) {
    let n = i.attributes[t];
    e[n.name] = n.value;
  }
  return e;
}
class Wt {
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
var He = /* @__PURE__ */ function(i) {
  return i[i.Text = 0] = "Text", i[i.WidgetBefore = 1] = "WidgetBefore", i[i.WidgetAfter = 2] = "WidgetAfter", i[i.WidgetRange = 3] = "WidgetRange", i;
}(He || (He = {}));
class q extends Li {
  constructor(e, t, n, r) {
    super(), this.startSide = e, this.endSide = t, this.widget = n, this.spec = r;
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
    return new Qr(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), n = !!e.block;
    return t += n && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new gi(e, t, t, n, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, n, r;
    if (e.isBlockGap)
      n = -5e8, r = 4e8;
    else {
      let { start: s, end: o } = Tp(e, t);
      n = (s ? t ? -3e8 : -1 : 5e8) - 1, r = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new gi(e, n, r, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new Cr(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return ne.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
q.none = ne.empty;
class Qr extends q {
  constructor(e) {
    let { start: t, end: n } = Tp(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, n;
    return this == e || e instanceof Qr && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((n = e.attrs) === null || n === void 0 ? void 0 : n.class)) && Ts(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
Qr.prototype.point = !1;
class Cr extends q {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Cr && this.spec.class == e.spec.class && Ts(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Cr.prototype.mapMode = qe.TrackBefore;
Cr.prototype.point = !0;
class gi extends q {
  constructor(e, t, n, r, s, o) {
    super(t, n, s, e), this.block = r, this.isReplace = o, this.mapMode = r ? t <= 0 ? qe.TrackBefore : qe.TrackAfter : qe.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? He.WidgetRange : this.startSide <= 0 ? He.WidgetBefore : He.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof gi && Uy(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
gi.prototype.point = !0;
function Tp(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = i;
  return t == null && (t = i.inclusive), n == null && (n = i.inclusive), { start: t ?? e, end: n ?? e };
}
function Uy(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function Bl(i, e, t, n = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + n >= i ? t[r] = Math.max(t[r], e) : t.push(i, e);
}
class Ae extends pe {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, n, r, s, o) {
    if (n) {
      if (!(n instanceof Ae))
        return !1;
      this.dom || n.transferDOM(this);
    }
    return r && this.setDeco(n ? n.attrs : null), Qp(this, e, t, n ? n.children.slice() : [], s, o), !0;
  }
  split(e) {
    let t = new Ae();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i: n, off: r } = this.childPos(e);
    r && (t.append(this.children[n].split(r), 0), this.children[n].merge(r, this.children[n].length, null, !1, 0, 0), n++);
    for (let s = n; s < this.children.length; s++)
      t.append(this.children[s], 0);
    for (; n > 0 && this.children[n - 1].length == 0; )
      this.children[--n].destroy();
    return this.children.length = n, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    Ts(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    Ap(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, n = e.spec.class;
    t && (this.attrs = Vl(t, this.attrs || {})), n && (this.attrs = Vl({ class: n }, this.attrs || {}));
  }
  domAtPos(e) {
    return _p(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var n;
    this.dom ? this.flags & 4 && (bp(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Ll(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let r = this.dom.lastChild;
    for (; r && pe.get(r) instanceof ti; )
      r = r.lastChild;
    if (!r || !this.length || r.nodeName != "BR" && ((n = pe.get(r)) === null || n === void 0 ? void 0 : n.isEditable) == !1 && (!B.ios || !this.children.some((s) => s instanceof $t))) {
      let s = document.createElement("BR");
      s.cmIgnore = !0, this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let n of this.children) {
      if (!(n instanceof $t) || /[^ -~]/.test(n.text))
        return null;
      let r = fn(n.dom);
      if (r.length != 1)
        return null;
      e += r[0].width, t = r[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: t
    } : null;
  }
  coordsAt(e, t) {
    let n = Ep(this, e, t);
    if (!this.children.length && n && this.parent) {
      let { heightOracle: r } = this.parent.view.viewState, s = n.bottom - n.top;
      if (Math.abs(s - r.lineHeight) < 2 && r.textHeight < s) {
        let o = (s - r.textHeight) / 2;
        return { top: n.top + o, bottom: n.bottom - o, left: n.left, right: n.left };
      }
    }
    return n;
  }
  become(e) {
    return e instanceof Ae && this.children.length == 0 && e.children.length == 0 && Ts(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let n = 0, r = 0; n < e.children.length; n++) {
      let s = e.children[n], o = r + s.length;
      if (o >= t) {
        if (s instanceof Ae)
          return s;
        if (o > t)
          break;
      }
      r = o + s.breakAfter;
    }
    return null;
  }
}
class ei extends pe {
  constructor(e, t, n) {
    super(), this.widget = e, this.length = t, this.deco = n, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, n, r, s, o) {
    return n && (!(n instanceof ei) || !this.widget.compare(n.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (n ? n.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? Ue.before(this.dom) : Ue.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let n = new ei(this.widget, t, this.deco);
    return n.breakAfter = this.breakAfter, n;
  }
  get children() {
    return Na;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : se.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof ei && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
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
    return n || (this.widget instanceof Il ? null : Pr(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: n } = this.deco;
    return t == n ? !1 : e < 0 ? t < 0 : n > 0;
  }
}
class Il extends Wt {
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
class Kn {
  constructor(e, t, n, r) {
    this.doc = e, this.pos = t, this.end = n, this.disallowBlockEffectsFor = r, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof ei && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new Ae()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(zr(new dn(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof ei) && this.getLine();
  }
  buildText(e, t, n) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: s, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = s, this.textOff = 0;
      }
      let r = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(t.slice(t.length - n)), this.getLine().append(zr(new $t(this.text.slice(this.textOff, this.textOff + r)), t), n), this.atCursorPos = !0, this.textOff += r, e -= r, n = 0;
    }
  }
  span(e, t, n, r) {
    this.buildText(t - e, n, r), this.pos = t, this.openStart < 0 && (this.openStart = r);
  }
  point(e, t, n, r, s, o) {
    if (this.disallowBlockEffectsFor[o] && n instanceof gi) {
      if (n.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (n instanceof gi)
      if (n.block)
        n.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new ei(n.widget || pn.block, l, n));
      else {
        let a = ci.create(n.widget || pn.inline, l, l ? 0 : n.startSide), u = this.atCursorPos && !a.isEditable && s <= r.length && (e < t || n.startSide > 0), c = !a.isEditable && (e < t || s > r.length || n.startSide <= 0), h = this.getLine();
        this.pendingBuffer == 2 && !u && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(r), u && (h.append(zr(new dn(1), r), s), s = r.length + Math.max(0, s - r.length)), h.append(zr(a, r), s), this.atCursorPos = c, this.pendingBuffer = c ? e < t || s > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(n);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, t, n, r, s) {
    let o = new Kn(e, t, n, s);
    return o.openEnd = ne.spans(r, t, n, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function zr(i, e) {
  for (let t of e)
    i = new ti(t, [i], i.length);
  return i;
}
class pn extends Wt {
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
pn.inline = /* @__PURE__ */ new pn("span");
pn.block = /* @__PURE__ */ new pn("div");
var be = /* @__PURE__ */ function(i) {
  return i[i.LTR = 0] = "LTR", i[i.RTL = 1] = "RTL", i;
}(be || (be = {}));
const ji = be.LTR, Xa = be.RTL;
function Rp(i) {
  let e = [];
  for (let t = 0; t < i.length; t++)
    e.push(1 << +i[t]);
  return e;
}
const Fy = /* @__PURE__ */ Rp("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Wy = /* @__PURE__ */ Rp("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), jl = /* @__PURE__ */ Object.create(null), Mt = [];
for (let i of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ i.charCodeAt(0), t = /* @__PURE__ */ i.charCodeAt(1);
  jl[e] = t, jl[t] = -e;
}
function Mp(i) {
  return i <= 247 ? Fy[i] : 1424 <= i && i <= 1524 ? 2 : 1536 <= i && i <= 1785 ? Wy[i - 1536] : 1774 <= i && i <= 2220 ? 4 : 8192 <= i && i <= 8204 ? 256 : 64336 <= i && i <= 65023 ? 4 : 1;
}
const Gy = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class hi {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Xa : ji;
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
  static find(e, t, n, r) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == n)
          return o;
        (s < 0 || (r != 0 ? r < 0 ? l.from < t : l.to > t : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0)
      throw new RangeError("Index out of range");
    return s;
  }
}
function Zp(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++) {
    let n = i[t], r = e[t];
    if (n.from != r.from || n.to != r.to || n.direction != r.direction || !Zp(n.inner, r.inner))
      return !1;
  }
  return !0;
}
const de = [];
function Hy(i, e, t, n, r) {
  for (let s = 0; s <= n.length; s++) {
    let o = s ? n[s - 1].to : e, l = s < n.length ? n[s].from : t, a = s ? 256 : r;
    for (let u = o, c = a, h = a; u < l; u++) {
      let f = Mp(i.charCodeAt(u));
      f == 512 ? f = c : f == 8 && h == 4 && (f = 16), de[u] = f == 4 ? 2 : f, f & 7 && (h = f), c = f;
    }
    for (let u = o, c = a, h = a; u < l; u++) {
      let f = de[u];
      if (f == 128)
        u < l - 1 && c == de[u + 1] && c & 24 ? f = de[u] = c : de[u] = 256;
      else if (f == 64) {
        let d = u + 1;
        for (; d < l && de[d] == 64; )
          d++;
        let p = u && c == 8 || d < t && de[d] == 8 ? h == 1 ? 1 : 8 : 256;
        for (let O = u; O < d; O++)
          de[O] = p;
        u = d - 1;
      } else f == 8 && h == 1 && (de[u] = 1);
      c = f, f & 7 && (h = f);
    }
  }
}
function Ky(i, e, t, n, r) {
  let s = r == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
    let u = o ? n[o - 1].to : e, c = o < n.length ? n[o].from : t;
    for (let h = u, f, d, p; h < c; h++)
      if (d = jl[f = i.charCodeAt(h)])
        if (d < 0) {
          for (let O = l - 3; O >= 0; O -= 3)
            if (Mt[O + 1] == -d) {
              let m = Mt[O + 2], g = m & 2 ? r : m & 4 ? m & 1 ? s : r : 0;
              g && (de[h] = de[Mt[O]] = g), l = O;
              break;
            }
        } else {
          if (Mt.length == 189)
            break;
          Mt[l++] = h, Mt[l++] = f, Mt[l++] = a;
        }
      else if ((p = de[h]) == 2 || p == 1) {
        let O = p == r;
        a = O ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let g = Mt[m + 2];
          if (g & 2)
            break;
          if (O)
            Mt[m + 2] |= 2;
          else {
            if (g & 4)
              break;
            Mt[m + 2] |= 4;
          }
        }
      }
  }
}
function Jy(i, e, t, n) {
  for (let r = 0, s = n; r <= t.length; r++) {
    let o = r ? t[r - 1].to : i, l = r < t.length ? t[r].from : e;
    for (let a = o; a < l; ) {
      let u = de[a];
      if (u == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (r == t.length)
              break;
            c = t[r++].to, l = r < t.length ? t[r].from : e;
          } else if (de[c] == 256)
            c++;
          else
            break;
        let h = s == 1, f = (c < e ? de[c] : n) == 1, d = h == f ? h ? 1 : 2 : n;
        for (let p = c, O = r, m = O ? t[O - 1].to : i; p > a; )
          p == m && (p = t[--O].from, m = O ? t[O - 1].to : i), de[--p] = d;
        a = c;
      } else
        s = u, a++;
    }
  }
}
function zl(i, e, t, n, r, s, o) {
  let l = n % 2 ? 2 : 1;
  if (n % 2 == r % 2)
    for (let a = e, u = 0; a < t; ) {
      let c = !0, h = !1;
      if (u == s.length || a < s[u].from) {
        let O = de[a];
        O != l && (c = !1, h = O == 16);
      }
      let f = !c && l == 1 ? [] : null, d = c ? n : n + 1, p = a;
      e: for (; ; )
        if (u < s.length && p == s[u].from) {
          if (h)
            break e;
          let O = s[u];
          if (!c)
            for (let m = O.to, g = u + 1; ; ) {
              if (m == t)
                break e;
              if (g < s.length && s[g].from == m)
                m = s[g++].to;
              else {
                if (de[m] == l)
                  break e;
                break;
              }
            }
          if (u++, f)
            f.push(O);
          else {
            O.from > a && o.push(new hi(a, O.from, d));
            let m = O.direction == ji != !(d % 2);
            ql(i, m ? n + 1 : n, r, O.inner, O.from, O.to, o), a = O.to;
          }
          p = O.to;
        } else {
          if (p == t || (c ? de[p] != l : de[p] == l))
            break;
          p++;
        }
      f ? zl(i, a, p, n + 1, r, f, o) : a < p && o.push(new hi(a, p, d)), a = p;
    }
  else
    for (let a = t, u = s.length; a > e; ) {
      let c = !0, h = !1;
      if (!u || a > s[u - 1].to) {
        let O = de[a - 1];
        O != l && (c = !1, h = O == 16);
      }
      let f = !c && l == 1 ? [] : null, d = c ? n : n + 1, p = a;
      e: for (; ; )
        if (u && p == s[u - 1].to) {
          if (h)
            break e;
          let O = s[--u];
          if (!c)
            for (let m = O.from, g = u; ; ) {
              if (m == e)
                break e;
              if (g && s[g - 1].to == m)
                m = s[--g].from;
              else {
                if (de[m - 1] == l)
                  break e;
                break;
              }
            }
          if (f)
            f.push(O);
          else {
            O.to < a && o.push(new hi(O.to, a, d));
            let m = O.direction == ji != !(d % 2);
            ql(i, m ? n + 1 : n, r, O.inner, O.from, O.to, o), a = O.from;
          }
          p = O.from;
        } else {
          if (p == e || (c ? de[p - 1] != l : de[p - 1] == l))
            break;
          p--;
        }
      f ? zl(i, p, a, n + 1, r, f, o) : p < a && o.push(new hi(p, a, d)), a = p;
    }
}
function ql(i, e, t, n, r, s, o) {
  let l = e % 2 ? 2 : 1;
  Hy(i, r, s, n, l), Ky(i, r, s, n, l), Jy(r, s, n, l), zl(i, r, s, e, t, n, o);
}
function ev(i, e, t) {
  if (!i)
    return [new hi(0, 0, e == Xa ? 1 : 0)];
  if (e == ji && !t.length && !Gy.test(i))
    return Dp(i.length);
  if (t.length)
    for (; i.length > de.length; )
      de[de.length] = 256;
  let n = [], r = e == ji ? 0 : 1;
  return ql(i, r, r, t, 0, i.length, n), n;
}
function Dp(i) {
  return [new hi(0, i, 0)];
}
let Vp = "";
function tv(i, e, t, n, r) {
  var s;
  let o = n.head - i.from, l = hi.find(e, o, (s = n.bidiLevel) !== null && s !== void 0 ? s : -1, n.assoc), a = e[l], u = a.side(r, t);
  if (o == u) {
    let f = l += r ? 1 : -1;
    if (f < 0 || f >= e.length)
      return null;
    a = e[l = f], o = a.side(!r, t), u = a.side(r, t);
  }
  let c = Ne(i.text, o, a.forward(r, t));
  (c < a.from || c > a.to) && (c = u), Vp = i.text.slice(Math.min(o, c), Math.max(o, c));
  let h = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
  return h && c == u && h.level + (r ? 0 : 1) < a.level ? C.cursor(h.side(!r, t) + i.from, h.forward(r, t) ? 1 : -1, h.level) : C.cursor(c + i.from, a.forward(r, t) ? -1 : 1, a.level);
}
function iv(i, e, t) {
  for (let n = e; n < t; n++) {
    let r = Mp(i.charCodeAt(n));
    if (r == 1)
      return ji;
    if (r == 2 || r == 4)
      return Xa;
  }
  return ji;
}
const Lp = /* @__PURE__ */ D.define(), Bp = /* @__PURE__ */ D.define(), Ip = /* @__PURE__ */ D.define(), jp = /* @__PURE__ */ D.define(), Nl = /* @__PURE__ */ D.define(), zp = /* @__PURE__ */ D.define(), qp = /* @__PURE__ */ D.define(), Ya = /* @__PURE__ */ D.define(), Ua = /* @__PURE__ */ D.define(), Np = /* @__PURE__ */ D.define({
  combine: (i) => i.some((e) => e)
}), Xp = /* @__PURE__ */ D.define({
  combine: (i) => i.some((e) => e)
}), Yp = /* @__PURE__ */ D.define();
class on {
  constructor(e, t = "nearest", n = "nearest", r = 5, s = 5, o = !1) {
    this.range = e, this.y = t, this.x = n, this.yMargin = r, this.xMargin = s, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new on(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new on(C.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const qr = /* @__PURE__ */ W.define({ map: (i, e) => i.map(e) }), Up = /* @__PURE__ */ W.define();
function Ge(i, e, t) {
  let n = i.facet(jp);
  n.length ? n[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const li = /* @__PURE__ */ D.define({ combine: (i) => i.length ? i[0] : !0 });
let nv = 0;
const jn = /* @__PURE__ */ D.define();
class Pe {
  constructor(e, t, n, r, s) {
    this.id = e, this.create = t, this.domEventHandlers = n, this.domEventObservers = r, this.extension = s(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: n, eventObservers: r, provide: s, decorations: o } = t || {};
    return new Pe(nv++, e, n, r, (l) => {
      let a = [jn.of(l)];
      return o && a.push(cr.of((u) => {
        let c = u.plugin(l);
        return c ? o(c) : q.none;
      })), s && a.push(s(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Pe.define((n) => new e(n), t);
  }
}
class Bo {
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
            if (Ge(t.state, n, "CodeMirror plugin crashed"), this.value.destroy)
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
        Ge(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        Ge(e.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Fp = /* @__PURE__ */ D.define(), Fa = /* @__PURE__ */ D.define(), cr = /* @__PURE__ */ D.define(), Wp = /* @__PURE__ */ D.define(), Wa = /* @__PURE__ */ D.define(), Gp = /* @__PURE__ */ D.define();
function _c(i, e) {
  let t = i.state.facet(Gp);
  if (!t.length)
    return t;
  let n = t.map((s) => s instanceof Function ? s(i) : s), r = [];
  return ne.spans(n, e.from, e.to, {
    point() {
    },
    span(s, o, l, a) {
      let u = s - e.from, c = o - e.from, h = r;
      for (let f = l.length - 1; f >= 0; f--, a--) {
        let d = l[f].spec.bidiIsolate, p;
        if (d == null && (d = iv(e.text, u, c)), a > 0 && h.length && (p = h[h.length - 1]).to == u && p.direction == d)
          p.to = c, h = p.inner;
        else {
          let O = { from: u, to: c, direction: d, inner: [] };
          h.push(O), h = O.inner;
        }
      }
    }
  }), r;
}
const Hp = /* @__PURE__ */ D.define();
function Kp(i) {
  let e = 0, t = 0, n = 0, r = 0;
  for (let s of i.state.facet(Hp)) {
    let o = s(i);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (n = Math.max(n, o.top)), o.bottom != null && (r = Math.max(r, o.bottom)));
  }
  return { left: e, right: t, top: n, bottom: r };
}
const zn = /* @__PURE__ */ D.define();
class xt {
  constructor(e, t, n, r) {
    this.fromA = e, this.toA = t, this.fromB = n, this.toB = r;
  }
  join(e) {
    return new xt(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, n = this;
    for (; t > 0; t--) {
      let r = e[t - 1];
      if (!(r.fromA > n.toA)) {
        if (r.toA < n.fromA)
          break;
        n = n.join(r), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, n), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let n = [];
    for (let r = 0, s = 0, o = 0, l = 0; ; r++) {
      let a = r == e.length ? null : e[r], u = o - l, c = a ? a.fromB : 1e9;
      for (; s < t.length && t[s] < c; ) {
        let h = t[s], f = t[s + 1], d = Math.max(l, h), p = Math.min(c, f);
        if (d <= p && new xt(d + u, p + u, d, p).addToSet(n), f > c)
          break;
        s += 2;
      }
      if (!a)
        return n;
      new xt(a.fromA, a.toA, a.fromB, a.toB).addToSet(n), o = a.toA, l = a.toB;
    }
  }
}
class Rs {
  constructor(e, t, n) {
    this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = Me.empty(this.startState.doc.length);
    for (let s of n)
      this.changes = this.changes.compose(s.changes);
    let r = [];
    this.changes.iterChangedRanges((s, o, l, a) => r.push(new xt(s, o, l, a))), this.changedRanges = r;
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new Rs(e, t, n);
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
class Ac extends pe {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = q.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new Ae()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new xt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let n = e.changedRanges;
    this.minWidth > 0 && n.length && (n.every(({ fromA: u, toA: c }) => c < this.minWidthFrom || u > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let r = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? r = this.domChanged.newSel.head : !cv(e.changes, this.hasComposition) && !e.selectionSet && (r = e.state.selection.main.head));
    let s = r > -1 ? sv(this.view, e.changes, r) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: u, to: c } = this.hasComposition;
      n = new xt(u, c, e.changes.mapPos(u, -1), e.changes.mapPos(c, 1)).addToSet(n.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, (B.ie || B.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = av(o, l, e.changes);
    return n = xt.extendWithRanges(n, a), !(this.flags & 7) && n.length == 0 ? !1 : (this.updateInner(n, e.startState.doc.length, s), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t, n) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, n);
    let { observer: r } = this.view;
    r.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = B.chrome || B.ios ? { node: r.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || r.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof ei && o.widget instanceof Il && s.push(o.dom);
    r.updateGaps(s);
  }
  updateChildren(e, t, n) {
    let r = n ? n.range.addToSet(e.slice()) : e, s = this.childCursor(t);
    for (let o = r.length - 1; ; o--) {
      let l = o >= 0 ? r[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: u, fromB: c, toB: h } = l, f, d, p, O;
      if (n && n.range.fromB < h && n.range.toB > c) {
        let x = Kn.build(this.view.state.doc, c, n.range.fromB, this.decorations, this.dynamicDecorationMap), S = Kn.build(this.view.state.doc, n.range.toB, h, this.decorations, this.dynamicDecorationMap);
        d = x.breakAtStart, p = x.openStart, O = S.openEnd;
        let k = this.compositionView(n);
        S.breakAtStart ? k.breakAfter = 1 : S.content.length && k.merge(k.length, k.length, S.content[0], !1, S.openStart, 0) && (k.breakAfter = S.content[0].breakAfter, S.content.shift()), x.content.length && k.merge(0, 0, x.content[x.content.length - 1], !0, 0, x.openEnd) && x.content.pop(), f = x.content.concat(k).concat(S.content);
      } else
        ({ content: f, breakAtStart: d, openStart: p, openEnd: O } = Kn.build(this.view.state.doc, c, h, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: g } = s.findPos(u, 1), { i: y, off: b } = s.findPos(a, -1);
      Pp(this, y, b, m, g, f, d, p, O);
    }
    n && this.fixCompositionDOM(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(Up) && (this.editContextFormatting = n.value);
  }
  compositionView(e) {
    let t = new $t(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: r } of e.marks)
      t = new ti(r, [t], t.length);
    let n = new Ae();
    return n.append(t, 0), n;
  }
  fixCompositionDOM(e) {
    let t = (s, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = pe.get(s);
      l && l != o && (l.dom = null), o.setDOM(s);
    }, n = this.childPos(e.range.fromB, 1), r = this.children[n.i];
    t(e.line, r);
    for (let s = e.marks.length - 1; s >= -1; s--)
      n = r.childPos(n.off, 1), r = r.children[n.i], t(s >= 0 ? e.marks[s].node : e.text, r);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let n = this.view.root.activeElement, r = n == this.dom, s = !r && ps(this.dom, this.view.observer.selectionRange) && !(n && this.dom.contains(n));
    if (!(r || t || s))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), u = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (B.gecko && l.empty && !this.hasComposition && rv(a)) {
      let h = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(h, a.node.childNodes[a.offset] || null)), a = u = new Ue(h, 0), o = !0;
    }
    let c = this.view.observer.selectionRange;
    (o || !c.focusNode || (!Hn(a.node, a.offset, c.anchorNode, c.anchorOffset) || !Hn(u.node, u.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, l)) && (this.view.observer.ignore(() => {
      B.android && B.chrome && this.dom.contains(c.focusNode) && uv(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let h = ur(this.view.root);
      if (h) if (l.empty) {
        if (B.gecko) {
          let f = ov(a.node, a.offset);
          if (f && f != 3) {
            let d = (f == 1 ? xp : wp)(a.node, a.offset);
            d && (a = new Ue(d.node, d.offset));
          }
        }
        h.collapse(a.node, a.offset), l.bidiLevel != null && h.caretBidiLevel !== void 0 && (h.caretBidiLevel = l.bidiLevel);
      } else if (h.extend) {
        h.collapse(a.node, a.offset);
        try {
          h.extend(u.node, u.offset);
        } catch {
        }
      } else {
        let f = document.createRange();
        l.anchor > l.head && ([a, u] = [u, a]), f.setEnd(u.node, u.offset), f.setStart(a.node, a.offset), h.removeAllRanges(), h.addRange(f);
      }
      s && this.view.root.activeElement == this.dom && (this.dom.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(a, u)), this.impreciseAnchor = a.precise ? null : new Ue(c.anchorNode, c.anchorOffset), this.impreciseHead = u.precise ? null : new Ue(c.focusNode, c.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Hn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, n = ur(e.root), { anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
    if (!n || !t.empty || !t.assoc || !n.modify)
      return;
    let o = Ae.find(this, t.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), u = this.coordsAt(t.head, 1);
    if (!a || !u || a.bottom > u.top)
      return;
    let c = this.domAtPos(t.head + t.assoc);
    n.collapse(c.node, c.offset), n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let h = e.observer.selectionRange;
    e.docView.posFromDOM(h.anchorNode, h.anchorOffset) != t.from && n.collapse(r, s);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(e) {
    let t = this.dom, n;
    if (e.node != t)
      return e;
    for (let r = e.offset; !n && r < t.childNodes.length; r++) {
      let s = pe.get(t.childNodes[r]);
      s instanceof Ae && (n = s.domAtPos(0));
    }
    for (let r = e.offset - 1; !n && r >= 0; r--) {
      let s = pe.get(t.childNodes[r]);
      s instanceof Ae && (n = s.domAtPos(s.length));
    }
    return n ? new Ue(n.node, n.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let n = pe.get(t);
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
      let r = this.children[t];
      if (n < r.length || r instanceof Ae)
        break;
      t++, n = 0;
    }
    return this.children[t].domAtPos(n);
  }
  coordsAt(e, t) {
    let n = null, r = 0;
    for (let s = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = s - l.breakAfter, u = a - l.length;
      if (a < e)
        break;
      if (u <= e && (u < e || l.covers(-1)) && (a > e || l.covers(1)) && (!n || l instanceof Ae && !(n instanceof Ae && t >= 0)))
        n = l, r = u;
      else if (n && u == e && a == e && l instanceof ei && Math.abs(t) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (n = null);
      }
      s = u;
    }
    return n ? n.coordsAt(e - r, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: n } = this.childPos(e, 1), r = this.children[t];
    if (!(r instanceof Ae))
      return null;
    for (; r.children.length; ) {
      let { i: l, off: a } = r.childPos(n, 1);
      for (; ; l++) {
        if (l == r.children.length)
          return null;
        if ((r = r.children[l]).length)
          break;
      }
      n = a;
    }
    if (!(r instanceof $t))
      return null;
    let s = Ne(r.text, n);
    if (s == n)
      return null;
    let o = Ii(r.dom, n, s).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: n, to: r } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == be.LTR;
    for (let u = 0, c = 0; c < this.children.length; c++) {
      let h = this.children[c], f = u + h.length;
      if (f > r)
        break;
      if (u >= n) {
        let d = h.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let p = h.dom.lastChild, O = p ? fn(p) : [];
          if (O.length) {
            let m = O[O.length - 1], g = a ? m.right - d.left : d.right - m.left;
            g > l && (l = g, this.minWidth = s, this.minWidthFrom = u, this.minWidthTo = f);
          }
        }
      }
      u = f + h.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? be.RTL : be.LTR;
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof Ae) {
        let o = s.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), t, n, r;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let s = fn(e.firstChild)[0];
      t = e.getBoundingClientRect().height, n = s ? s.width / 27 : 7, r = s ? s.height : t, e.remove();
    }), { lineHeight: t, charWidth: n, textHeight: r };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new kp(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let n = 0, r = 0; ; r++) {
      let s = r == t.viewports.length ? null : t.viewports[r], o = s ? s.from - 1 : this.length;
      if (o > n) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
        e.push(q.replace({
          widget: new Il(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(n, o));
      }
      if (!s)
        break;
      n = s.to + 1;
    }
    return q.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(cr).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), n = !1, r = this.view.state.facet(Wp).map((s, o) => {
      let l = typeof s == "function";
      return l && (n = !0), l ? s(this.view) : s;
    });
    for (r.length && (this.dynamicDecorationMap[e++] = n, t.push(ne.join(r))), this.decorations = [
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
      let u = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = u.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let u of this.view.state.facet(Yp))
      try {
        if (u(this.view, e.range, e))
          return !0;
      } catch (c) {
        Ge(this.view.state, c, "scroll handler");
      }
    let { range: t } = e, n = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), r;
    if (!n)
      return;
    !t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, r.left),
      top: Math.min(n.top, r.top),
      right: Math.max(n.right, r.right),
      bottom: Math.max(n.bottom, r.bottom)
    });
    let s = Kp(this.view), o = {
      left: n.left - s.left,
      top: n.top - s.top,
      right: n.right + s.right,
      bottom: n.bottom + s.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Ly(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == be.LTR);
  }
}
function rv(i) {
  return i.node.nodeType == 1 && i.node.firstChild && (i.offset == 0 || i.node.childNodes[i.offset - 1].contentEditable == "false") && (i.offset == i.node.childNodes.length || i.node.childNodes[i.offset].contentEditable == "false");
}
function Jp(i, e) {
  let t = i.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let n = xp(t.focusNode, t.focusOffset), r = wp(t.focusNode, t.focusOffset), s = n || r;
  if (r && n && r.node != n.node) {
    let l = pe.get(r.node);
    if (!l || l instanceof $t && l.text != r.node.nodeValue)
      s = r;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = pe.get(n.node);
      !a || a instanceof $t && a.text != n.node.nodeValue || (s = r);
    }
  }
  if (i.docView.lastCompositionAfterCursor = s != n, !s)
    return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
function sv(i, e, t) {
  let n = Jp(i, t);
  if (!n)
    return null;
  let { node: r, from: s, to: o } = n, l = r.nodeValue;
  if (/[\n\r]/.test(l) || i.state.doc.sliceString(n.from, n.to) != l)
    return null;
  let a = e.invertedDesc, u = new xt(a.mapPos(s), a.mapPos(o), s, o), c = [];
  for (let h = r.parentNode; ; h = h.parentNode) {
    let f = pe.get(h);
    if (f instanceof ti)
      c.push({ node: h, deco: f.mark });
    else {
      if (f instanceof Ae || h.nodeName == "DIV" && h.parentNode == i.contentDOM)
        return { range: u, text: r, marks: c, line: h };
      if (h != i.contentDOM)
        c.push({ node: h, deco: new Qr({
          inclusive: !0,
          attributes: Yy(h),
          tagName: h.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function ov(i, e) {
  return i.nodeType != 1 ? 0 : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < i.childNodes.length && i.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let lv = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Bl(e, t, this.changes);
  }
  comparePoint(e, t) {
    Bl(e, t, this.changes);
  }
};
function av(i, e, t) {
  let n = new lv();
  return ne.compare(i, e, t, n), n.changes;
}
function uv(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function cv(i, e) {
  let t = !1;
  return e && i.iterChangedRanges((n, r) => {
    n < e.to && r > e.from && (t = !0);
  }), t;
}
function hv(i, e, t = 1) {
  let n = i.charCategorizer(e), r = i.doc.lineAt(e), s = e - r.from;
  if (r.length == 0)
    return C.cursor(e);
  s == 0 ? t = 1 : s == r.length && (t = -1);
  let o = s, l = s;
  t < 0 ? o = Ne(r.text, s, !1) : l = Ne(r.text, s);
  let a = n(r.text.slice(o, l));
  for (; o > 0; ) {
    let u = Ne(r.text, o, !1);
    if (n(r.text.slice(u, o)) != a)
      break;
    o = u;
  }
  for (; l < r.length; ) {
    let u = Ne(r.text, l);
    if (n(r.text.slice(l, u)) != a)
      break;
    l = u;
  }
  return C.range(o + r.from, l + r.from);
}
function fv(i, e) {
  return e.left > i ? e.left - i : Math.max(0, i - e.right);
}
function dv(i, e) {
  return e.top > i ? e.top - i : Math.max(0, i - e.bottom);
}
function Io(i, e) {
  return i.top < e.bottom - 1 && i.bottom > e.top + 1;
}
function Ec(i, e) {
  return e < i.top ? { top: e, left: i.left, right: i.right, bottom: i.bottom } : i;
}
function Tc(i, e) {
  return e > i.bottom ? { top: i.top, left: i.left, right: i.right, bottom: e } : i;
}
function Xl(i, e, t) {
  let n, r, s, o, l = !1, a, u, c, h;
  for (let p = i.firstChild; p; p = p.nextSibling) {
    let O = fn(p);
    for (let m = 0; m < O.length; m++) {
      let g = O[m];
      r && Io(r, g) && (g = Ec(Tc(g, r.bottom), r.top));
      let y = fv(e, g), b = dv(t, g);
      if (y == 0 && b == 0)
        return p.nodeType == 3 ? Rc(p, e, t) : Xl(p, e, t);
      if (!n || o > b || o == b && s > y) {
        n = p, r = g, s = y, o = b;
        let x = b ? t < g.top ? -1 : 1 : y ? e < g.left ? -1 : 1 : 0;
        l = !x || (x > 0 ? m < O.length - 1 : m > 0);
      }
      y == 0 ? t > g.bottom && (!c || c.bottom < g.bottom) ? (a = p, c = g) : t < g.top && (!h || h.top > g.top) && (u = p, h = g) : c && Io(c, g) ? c = Tc(c, g.bottom) : h && Io(h, g) && (h = Ec(h, g.top));
    }
  }
  if (c && c.bottom >= t ? (n = a, r = c) : h && h.top <= t && (n = u, r = h), !n)
    return { node: i, offset: 0 };
  let f = Math.max(r.left, Math.min(r.right, e));
  if (n.nodeType == 3)
    return Rc(n, f, t);
  if (l && n.contentEditable != "false")
    return Xl(n, f, t);
  let d = Array.prototype.indexOf.call(i.childNodes, n) + (e >= (r.left + r.right) / 2 ? 1 : 0);
  return { node: i, offset: d };
}
function Rc(i, e, t) {
  let n = i.nodeValue.length, r = -1, s = 1e9, o = 0;
  for (let l = 0; l < n; l++) {
    let a = Ii(i, l, l + 1).getClientRects();
    for (let u = 0; u < a.length; u++) {
      let c = a[u];
      if (c.top == c.bottom)
        continue;
      o || (o = e - c.left);
      let h = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && h < s) {
        let f = e >= (c.left + c.right) / 2, d = f;
        if ((B.chrome || B.gecko) && Ii(i, l).getBoundingClientRect().left == c.right && (d = !f), h <= 0)
          return { node: i, offset: l + (d ? 1 : 0) };
        r = l + (d ? 1 : 0), s = h;
      }
    }
  }
  return { node: i, offset: r > -1 ? r : o > 0 ? i.nodeValue.length : 0 };
}
function eO(i, e, t, n = -1) {
  var r, s;
  let o = i.contentDOM.getBoundingClientRect(), l = o.top + i.viewState.paddingTop, a, { docHeight: u } = i.viewState, { x: c, y: h } = e, f = h - l;
  if (f < 0)
    return 0;
  if (f > u)
    return i.state.doc.length;
  for (let x = i.viewState.heightOracle.textHeight / 2, S = !1; a = i.elementAtHeight(f), a.type != He.Text; )
    for (; f = n > 0 ? a.bottom + x : a.top - x, !(f >= 0 && f <= u); ) {
      if (S)
        return t ? null : 0;
      S = !0, n = -n;
    }
  h = l + f;
  let d = a.from;
  if (d < i.viewport.from)
    return i.viewport.from == 0 ? 0 : t ? null : Mc(i, o, a, c, h);
  if (d > i.viewport.to)
    return i.viewport.to == i.state.doc.length ? i.state.doc.length : t ? null : Mc(i, o, a, c, h);
  let p = i.dom.ownerDocument, O = i.root.elementFromPoint ? i.root : p, m = O.elementFromPoint(c, h);
  m && !i.contentDOM.contains(m) && (m = null), m || (c = Math.max(o.left + 1, Math.min(o.right - 1, c)), m = O.elementFromPoint(c, h), m && !i.contentDOM.contains(m) && (m = null));
  let g, y = -1;
  if (m && ((r = i.docView.nearest(m)) === null || r === void 0 ? void 0 : r.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let x = p.caretPositionFromPoint(c, h);
      x && ({ offsetNode: g, offset: y } = x);
    } else if (p.caretRangeFromPoint) {
      let x = p.caretRangeFromPoint(c, h);
      x && ({ startContainer: g, startOffset: y } = x, (!i.contentDOM.contains(g) || B.safari && pv(g, y, c) || B.chrome && Ov(g, y, c)) && (g = void 0));
    }
    g && (y = Math.min(Ut(g), y));
  }
  if (!g || !i.docView.dom.contains(g)) {
    let x = Ae.find(i.docView, d);
    if (!x)
      return f > a.top + a.height / 2 ? a.to : a.from;
    ({ node: g, offset: y } = Xl(x.dom, c, h));
  }
  let b = i.docView.nearest(g);
  if (!b)
    return null;
  if (b.isWidget && ((s = b.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let x = b.dom.getBoundingClientRect();
    return e.y < x.top || e.y <= x.bottom && e.x <= (x.left + x.right) / 2 ? b.posAtStart : b.posAtEnd;
  } else
    return b.localPosFromDOM(g, y) + b.posAtStart;
}
function Mc(i, e, t, n, r) {
  let s = Math.round((n - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight, a = Math.floor((r - t.top - (i.defaultLineHeight - l) * 0.5) / l);
    s += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + Al(o, s, i.state.tabSize);
}
function pv(i, e, t) {
  let n;
  if (i.nodeType != 3 || e != (n = i.nodeValue.length))
    return !1;
  for (let r = i.nextSibling; r; r = r.nextSibling)
    if (r.nodeType != 1 || r.nodeName != "BR")
      return !1;
  return Ii(i, n - 1, n).getBoundingClientRect().left > t;
}
function Ov(i, e, t) {
  if (e != 0)
    return !1;
  for (let r = i; ; ) {
    let s = r.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != r)
      return !1;
    if (s.classList.contains("cm-line"))
      break;
    r = s;
  }
  let n = i.nodeType == 1 ? i.getBoundingClientRect() : Ii(i, 0, Math.max(i.nodeValue.length, 1)).getBoundingClientRect();
  return t - n.left > 5;
}
function Yl(i, e) {
  let t = i.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let n of t.type)
      if (n.to > e || n.to == e && (n.to == t.to || n.type == He.Text))
        return n;
  }
  return t;
}
function mv(i, e, t, n) {
  let r = Yl(i, e.head), s = !n || r.type != He.Text || !(i.lineWrapping || r.widgetLineBreaks) ? null : i.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (s) {
    let o = i.dom.getBoundingClientRect(), l = i.textDirectionAt(r.from), a = i.posAtCoords({
      x: t == (l == be.LTR) ? o.right - 1 : o.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (a != null)
      return C.cursor(a, t ? -1 : 1);
  }
  return C.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function Zc(i, e, t, n) {
  let r = i.state.doc.lineAt(e.head), s = i.bidiSpans(r), o = i.textDirectionAt(r.from);
  for (let l = e, a = null; ; ) {
    let u = tv(r, s, o, l, t), c = Vp;
    if (!u) {
      if (r.number == (t ? i.state.doc.lines : 1))
        return l;
      c = `
`, r = i.state.doc.line(r.number + (t ? 1 : -1)), s = i.bidiSpans(r), u = i.visualLineSide(r, !t);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!n)
        return u;
      a = n(c);
    }
    l = u;
  }
}
function gv(i, e, t) {
  let n = i.state.charCategorizer(e), r = n(t);
  return (s) => {
    let o = n(s);
    return r == Se.Space && (r = o), r == o;
  };
}
function yv(i, e, t, n) {
  let r = e.head, s = t ? 1 : -1;
  if (r == (t ? i.state.doc.length : 0))
    return C.cursor(r, e.assoc);
  let o = e.goalColumn, l, a = i.contentDOM.getBoundingClientRect(), u = i.coordsAtPos(r, e.assoc || -1), c = i.documentTop;
  if (u)
    o == null && (o = u.left - a.left), l = s < 0 ? u.top : u.bottom;
  else {
    let d = i.viewState.lineBlockAt(r);
    o == null && (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (r - d.from))), l = (s < 0 ? d.top : d.bottom) + c;
  }
  let h = a.left + o, f = n ?? i.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (f + d) * s, O = eO(i, { x: h, y: p }, !1, s);
    if (p < a.top || p > a.bottom || (s < 0 ? O < r : O > r)) {
      let m = i.docView.coordsForChar(O), g = !m || p < m.top ? -1 : 1;
      return C.cursor(O, g, void 0, o);
    }
  }
}
function Os(i, e, t) {
  for (; ; ) {
    let n = 0;
    for (let r of i)
      r.between(e - 1, e + 1, (s, o, l) => {
        if (e > s && e < o) {
          let a = n || t || (e - s < o - e ? -1 : 1);
          e = a < 0 ? s : o, n = a;
        }
      });
    if (!n)
      return e;
  }
}
function jo(i, e, t) {
  let n = Os(i.state.facet(Wa).map((r) => r(i)), t.from, e.head > t.from ? -1 : 1);
  return n == t.from ? t : C.cursor(n, n < t.from ? 1 : -1);
}
const qn = "￿";
class vv {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(ee.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += qn;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let n = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(n, r);
      let s = this.text.length;
      this.readNode(r);
      let o = r.nextSibling;
      if (o == t)
        break;
      let l = pe.get(r), a = pe.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : Es(r)) || Es(o) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > s) && this.lineBreak(), r = o;
    }
    return this.findPointBefore(n, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let n of this.points)
      n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
    for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, o = 1, l;
      if (this.lineSeparator ? (s = t.indexOf(this.lineSeparator, n), o = this.lineSeparator.length) : (l = r.exec(t)) && (s = l.index, o = l[0].length), this.append(t.slice(n, s < 0 ? t.length : s)), s < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      n = s + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = pe.get(e), n = t && t.overrideDOMText;
    if (n != null) {
      this.findPointInside(e, n.length);
      for (let r = n.iter(); !r.next().done; )
        r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let n of this.points)
      n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let n of this.points)
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (bv(e, n.node, n.offset) ? t : 0));
  }
}
function bv(i, e, t) {
  for (; ; ) {
    if (!e || t < Ut(e))
      return !1;
    if (e == i)
      return !0;
    t = Bi(e) + 1, e = e.parentNode;
  }
}
class Dc {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Sv {
  constructor(e, t, n, r) {
    this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, n, 0))) {
      let l = s || o ? [] : kv(e), a = new vv(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Pv(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = s && s.node == l.focusNode && s.offset == l.focusOffset || !Rl(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), u = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Rl(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = e.viewport;
      if ((B.ios || B.chrome) && e.state.selection.main.empty && a != u && (c.from > 0 || c.to < e.state.doc.length)) {
        let h = Math.min(a, u), f = Math.max(a, u), d = c.from - h, p = c.to - f;
        (d == 0 || d == 1 || h == 0) && (p == 0 || p == -1 || f == e.state.doc.length) && (a = 0, u = e.state.doc.length);
      }
      this.newSel = C.single(u, a);
    }
  }
}
function tO(i, e) {
  let t, { newSel: n } = e, r = i.state.selection.main, s = i.inputState.lastKeyTime > Date.now() - 100 ? i.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = r.from, u = null;
    (s === 8 || B.android && e.text.length < l - o) && (a = r.to, u = "end");
    let c = wv(i.state.doc.sliceString(o, l, qn), e.text, a - o, u);
    c && (B.chrome && s == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == qn + qn && c.toB--, t = {
      from: o + c.from,
      to: o + c.toA,
      insert: se.of(e.text.slice(c.from, c.toB).split(qn))
    });
  } else n && (!i.hasFocus && i.state.facet(li) || n.main.eq(r)) && (n = null);
  if (!t && !n)
    return !1;
  if (!t && e.typeOver && !r.empty && n && n.main.empty ? t = { from: r.from, to: r.to, insert: i.state.doc.slice(r.from, r.to) } : t && t.from >= r.from && t.to <= r.to && (t.from != r.from || t.to != r.to) && r.to - r.from - (t.to - t.from) <= 4 ? t = {
    from: r.from,
    to: r.to,
    insert: i.state.doc.slice(r.from, t.from).append(t.insert).append(i.state.doc.slice(t.to, r.to))
  } : (B.mac || B.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && i.contentDOM.getAttribute("autocorrect") == "off" ? (n && t.insert.length == 2 && (n = C.single(n.main.anchor - 1, n.main.head - 1)), t = { from: r.from, to: r.to, insert: se.of([" "]) }) : B.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && i.lineWrapping && (n && (n = C.single(n.main.anchor - 1, n.main.head - 1)), t = { from: r.from, to: r.to, insert: se.of([" "]) }), t)
    return Ga(i, t, n, s);
  if (n && !n.main.eq(r)) {
    let o = !1, l = "select";
    return i.inputState.lastSelectionTime > Date.now() - 50 && (i.inputState.lastSelectionOrigin == "select" && (o = !0), l = i.inputState.lastSelectionOrigin), i.dispatch({ selection: n, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Ga(i, e, t, n = -1) {
  if (B.ios && i.inputState.flushIOSKey(e))
    return !0;
  let r = i.state.selection.main;
  if (B.android && (e.to == r.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == r.from || e.from == r.from - 1 && i.state.sliceDoc(e.from, r.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && sn(i.contentDOM, "Enter", 13) || (e.from == r.from - 1 && e.to == r.to && e.insert.length == 0 || n == 8 && e.insert.length < e.to - e.from && e.to > r.head) && sn(i.contentDOM, "Backspace", 8) || e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && sn(i.contentDOM, "Delete", 46)))
    return !0;
  let s = e.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o, l = () => o || (o = xv(i, e, t));
  return i.state.facet(zp).some((a) => a(i, e.from, e.to, s, l)) || i.dispatch(l()), !0;
}
function xv(i, e, t) {
  let n, r = i.state, s = r.selection.main;
  if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && i.inputState.composing < 0) {
    let l = s.from < e.from ? r.sliceDoc(s.from, e.from) : "", a = s.to > e.to ? r.sliceDoc(e.to, s.to) : "";
    n = r.replaceSelection(i.state.toText(l + e.insert.sliceString(0, void 0, i.state.lineBreak) + a));
  } else {
    let l = r.changes(e), a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (r.selection.ranges.length > 1 && i.inputState.composing >= 0 && e.to <= s.to && e.to >= s.to - 10) {
      let u = i.state.sliceDoc(e.from, e.to), c, h = t && Jp(i, t.main.head);
      if (h) {
        let p = e.insert.length - (e.to - e.from);
        c = { from: h.from, to: h.to - p };
      } else
        c = i.state.doc.lineAt(s.head);
      let f = s.to - e.to, d = s.to - s.from;
      n = r.changeByRange((p) => {
        if (p.from == s.from && p.to == s.to)
          return { changes: l, range: a || p.map(l) };
        let O = p.to - f, m = O - u.length;
        if (p.to - p.from != d || i.state.sliceDoc(m, O) != u || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p.to >= c.from && p.from <= c.to)
          return { range: p };
        let g = r.changes({ from: m, to: O, insert: e.insert }), y = p.to - s.to;
        return {
          changes: g,
          range: a ? C.range(Math.max(0, a.anchor + y), Math.max(0, a.head + y)) : p.map(g)
        };
      });
    } else
      n = {
        changes: l,
        selection: a && r.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (i.composing || i.inputState.compositionPendingChange && i.inputState.compositionEndedAt > Date.now() - 50) && (i.inputState.compositionPendingChange = !1, o += ".compose", i.inputState.compositionFirstChange && (o += ".start", i.inputState.compositionFirstChange = !1)), r.update(n, { userEvent: o, scrollIntoView: !0 });
}
function wv(i, e, t, n) {
  let r = Math.min(i.length, e.length), s = 0;
  for (; s < r && i.charCodeAt(s) == e.charCodeAt(s); )
    s++;
  if (s == r && i.length == e.length)
    return null;
  let o = i.length, l = e.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (n == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    t -= o + a - s;
  }
  if (o < s && i.length < e.length) {
    let a = t <= s && t >= o ? s - t : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = t <= s && t >= l ? s - t : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { from: s, toA: o, toB: l };
}
function kv(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: n, focusNode: r, focusOffset: s } = i.observer.selectionRange;
  return t && (e.push(new Dc(t, n)), (r != t || s != n) && e.push(new Dc(r, s))), e;
}
function Pv(i, e) {
  if (i.length == 0)
    return null;
  let t = i[0].pos, n = i.length == 2 ? i[1].pos : t;
  return t > -1 && n > -1 ? C.single(t + e, n + e) : null;
}
class Qv {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, B.safari && e.contentDOM.addEventListener("input", () => null), B.gecko && zv(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Mv(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || this.runHandlers(e.type, e);
  }
  runHandlers(e, t) {
    let n = this.handlers[e];
    if (n) {
      for (let r of n.observers)
        r(this.view, t);
      for (let r of n.handlers) {
        if (t.defaultPrevented)
          break;
        if (r(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Cv(e), n = this.handlers, r = this.view.contentDOM;
    for (let s in t)
      if (s != "scroll") {
        let o = !t[s].handlers.length, l = n[s];
        l && o != !l.handlers.length && (r.removeEventListener(s, this.handleEvent), l = null), l || r.addEventListener(s, this.handleEvent, { passive: o });
      }
    for (let s in n)
      s != "scroll" && !t[s] && r.removeEventListener(s, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && nO.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), B.android && B.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return B.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = iO.find((n) => n.keyCode == e.keyCode)) && !e.ctrlKey || $v.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, sn(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : B.safari && !B.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
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
function Vc(i, e) {
  return (t, n) => {
    try {
      return e.call(i, n, t);
    } catch (r) {
      Ge(t.state, r);
    }
  };
}
function Cv(i) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(n) {
    return e[n] || (e[n] = { observers: [], handlers: [] });
  }
  for (let n of i) {
    let r = n.spec;
    if (r && r.domEventHandlers)
      for (let s in r.domEventHandlers) {
        let o = r.domEventHandlers[s];
        o && t(s).handlers.push(Vc(n.value, o));
      }
    if (r && r.domEventObservers)
      for (let s in r.domEventObservers) {
        let o = r.domEventObservers[s];
        o && t(s).observers.push(Vc(n.value, o));
      }
  }
  for (let n in _t)
    t(n).handlers.push(_t[n]);
  for (let n in wt)
    t(n).observers.push(wt[n]);
  return e;
}
const iO = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], $v = "dthko", nO = [16, 17, 18, 20, 91, 92, 224, 225], Nr = 6;
function Xr(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function _v(i, e) {
  return Math.max(Math.abs(i.clientX - e.clientX), Math.abs(i.clientY - e.clientY));
}
class Av {
  constructor(e, t, n, r) {
    this.view = e, this.startEvent = t, this.style = n, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = By(e.contentDOM), this.atoms = e.state.facet(Wa).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(ee.allowMultipleSelections) && Ev(e, t), this.dragging = Rv(e, t) && oO(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && _v(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, n = 0, r = 0, s = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Kp(this.view);
    e.clientX - a.left <= r + Nr ? t = -Xr(r - e.clientX) : e.clientX + a.right >= o - Nr && (t = Xr(e.clientX - o)), e.clientY - a.top <= s + Nr ? n = -Xr(s - e.clientY) : e.clientY + a.bottom >= l - Nr && (n = Xr(e.clientY - l)), this.setScrollSpeed(t, n);
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
      let r = e.ranges[n], s = null;
      if (r.empty) {
        let o = Os(this.atoms, r.from, 0);
        o != r.from && (s = C.cursor(o, -1));
      } else {
        let o = Os(this.atoms, r.from, -1), l = Os(this.atoms, r.to, 1);
        (o != r.from || l != r.to) && (s = C.range(r.from == r.anchor ? o : l, r.from == r.head ? o : l));
      }
      s && (t || (t = e.ranges.slice()), t[n] = s);
    }
    return t ? C.create(t, e.mainIndex) : e;
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
function Ev(i, e) {
  let t = i.state.facet(Lp);
  return t.length ? t[0](e) : B.mac ? e.metaKey : e.ctrlKey;
}
function Tv(i, e) {
  let t = i.state.facet(Bp);
  return t.length ? t[0](e) : B.mac ? !e.altKey : !e.ctrlKey;
}
function Rv(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty)
    return !1;
  let n = ur(i.root);
  if (!n || n.rangeCount == 0)
    return !0;
  let r = n.getRangeAt(0).getClientRects();
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Mv(i, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, n; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (n = pe.get(t)) && n.ignoreEvent(e))
      return !1;
  return !0;
}
const _t = /* @__PURE__ */ Object.create(null), wt = /* @__PURE__ */ Object.create(null), rO = B.ie && B.ie_version < 15 || B.ios && B.webkit_version < 604;
function Zv(i) {
  let e = i.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    i.focus(), t.remove(), sO(i, t.value);
  }, 50);
}
function po(i, e, t) {
  for (let n of i.facet(e))
    t = n(t, i);
  return t;
}
function sO(i, e) {
  e = po(i.state, Ya, e);
  let { state: t } = i, n, r = 1, s = t.toText(e), o = s.lines == t.selection.ranges.length;
  if (Ul != null && t.selection.ranges.every((a) => a.empty) && Ul == s.toString()) {
    let a = -1;
    n = t.changeByRange((u) => {
      let c = t.doc.lineAt(u.from);
      if (c.from == a)
        return { range: u };
      a = c.from;
      let h = t.toText((o ? s.line(r++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: h },
        range: C.cursor(u.from + h.length)
      };
    });
  } else o ? n = t.changeByRange((a) => {
    let u = s.line(r++);
    return {
      changes: { from: a.from, to: a.to, insert: u.text },
      range: C.cursor(a.from + u.length)
    };
  }) : n = t.replaceSelection(s);
  i.dispatch(n, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
wt.scroll = (i) => {
  i.inputState.lastScrollTop = i.scrollDOM.scrollTop, i.inputState.lastScrollLeft = i.scrollDOM.scrollLeft;
};
_t.keydown = (i, e) => (i.inputState.setSelectionOrigin("select"), e.keyCode == 27 && i.inputState.tabFocusMode != 0 && (i.inputState.tabFocusMode = Date.now() + 2e3), !1);
wt.touchstart = (i, e) => {
  i.inputState.lastTouchTime = Date.now(), i.inputState.setSelectionOrigin("select.pointer");
};
wt.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
_t.mousedown = (i, e) => {
  if (i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let n of i.state.facet(Ip))
    if (t = n(i, e), t)
      break;
  if (!t && e.button == 0 && (t = Lv(i, e)), t) {
    let n = !i.hasFocus;
    i.inputState.startMouseSelection(new Av(i, e, t, n)), n && i.observer.ignore(() => {
      vp(i.contentDOM);
      let s = i.root.activeElement;
      s && !s.contains(i.contentDOM) && s.blur();
    });
    let r = i.inputState.mouseSelection;
    if (r)
      return r.start(e), r.dragging === !1;
  }
  return !1;
};
function Lc(i, e, t, n) {
  if (n == 1)
    return C.cursor(e, t);
  if (n == 2)
    return hv(i.state, e, t);
  {
    let r = Ae.find(i.docView, e), s = i.state.doc.lineAt(r ? r.posAtEnd : e), o = r ? r.posAtStart : s.from, l = r ? r.posAtEnd : s.to;
    return l < i.state.doc.length && l == s.to && l++, C.range(o, l);
  }
}
let Bc = (i, e, t) => e >= t.top && e <= t.bottom && i >= t.left && i <= t.right;
function Dv(i, e, t, n) {
  let r = Ae.find(i.docView, e);
  if (!r)
    return 1;
  let s = e - r.posAtStart;
  if (s == 0)
    return 1;
  if (s == r.length)
    return -1;
  let o = r.coordsAt(s, -1);
  if (o && Bc(t, n, o))
    return -1;
  let l = r.coordsAt(s, 1);
  return l && Bc(t, n, l) ? 1 : o && o.bottom >= n ? -1 : 1;
}
function Ic(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: Dv(i, t, e.clientX, e.clientY) };
}
const Vv = B.ie && B.ie_version <= 11;
let jc = null, zc = 0, qc = 0;
function oO(i) {
  if (!Vv)
    return i.detail;
  let e = jc, t = qc;
  return jc = i, qc = Date.now(), zc = !e || t > Date.now() - 400 && Math.abs(e.clientX - i.clientX) < 2 && Math.abs(e.clientY - i.clientY) < 2 ? (zc + 1) % 3 : 1;
}
function Lv(i, e) {
  let t = Ic(i, e), n = oO(e), r = i.state.selection;
  return {
    update(s) {
      s.docChanged && (t.pos = s.changes.mapPos(t.pos), r = r.map(s.changes));
    },
    get(s, o, l) {
      let a = Ic(i, s), u, c = Lc(i, a.pos, a.bias, n);
      if (t.pos != a.pos && !o) {
        let h = Lc(i, t.pos, t.bias, n), f = Math.min(h.from, c.from), d = Math.max(h.to, c.to);
        c = f < c.from ? C.range(f, d) : C.range(d, f);
      }
      return o ? r.replaceRange(r.main.extend(c.from, c.to)) : l && n == 1 && r.ranges.length > 1 && (u = Bv(r, a.pos)) ? u : l ? r.addRange(c) : C.create([c]);
    }
  };
}
function Bv(i, e) {
  for (let t = 0; t < i.ranges.length; t++) {
    let { from: n, to: r } = i.ranges[t];
    if (n <= e && r >= e)
      return C.create(i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)), i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0));
  }
  return null;
}
_t.dragstart = (i, e) => {
  let { selection: { main: t } } = i.state;
  if (e.target.draggable) {
    let r = i.docView.nearest(e.target);
    if (r && r.isWidget) {
      let s = r.posAtStart, o = s + r.length;
      (s >= t.to || o <= t.from) && (t = C.range(s, o));
    }
  }
  let { inputState: n } = i;
  return n.mouseSelection && (n.mouseSelection.dragging = !0), n.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", po(i.state, Ua, i.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
_t.dragend = (i) => (i.inputState.draggedContent = null, !1);
function Nc(i, e, t, n) {
  if (t = po(i.state, Ya, t), !t)
    return;
  let r = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: s } = i.inputState, o = n && s && Tv(i, e) ? { from: s.from, to: s.to } : null, l = { from: r, insert: t }, a = i.state.changes(o ? [o, l] : l);
  i.focus(), i.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), i.inputState.draggedContent = null;
}
_t.drop = (i, e) => {
  if (!e.dataTransfer)
    return !1;
  if (i.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let n = Array(t.length), r = 0, s = () => {
      ++r == t.length && Nc(i, e, n.filter((o) => o != null).join(i.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (n[o] = l.result), s();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let n = e.dataTransfer.getData("Text");
    if (n)
      return Nc(i, e, n, !0), !0;
  }
  return !1;
};
_t.paste = (i, e) => {
  if (i.state.readOnly)
    return !0;
  i.observer.flush();
  let t = rO ? null : e.clipboardData;
  return t ? (sO(i, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (Zv(i), !1);
};
function Iv(i, e) {
  let t = i.dom.parentNode;
  if (!t)
    return;
  let n = t.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = e, n.focus(), n.selectionEnd = e.length, n.selectionStart = 0, setTimeout(() => {
    n.remove(), i.focus();
  }, 50);
}
function jv(i) {
  let e = [], t = [], n = !1;
  for (let r of i.selection.ranges)
    r.empty || (e.push(i.sliceDoc(r.from, r.to)), t.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: s } of i.selection.ranges) {
      let o = i.doc.lineAt(s);
      o.number > r && (e.push(o.text), t.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })), r = o.number;
    }
    n = !0;
  }
  return { text: po(i, Ua, e.join(i.lineBreak)), ranges: t, linewise: n };
}
let Ul = null;
_t.copy = _t.cut = (i, e) => {
  let { text: t, ranges: n, linewise: r } = jv(i.state);
  if (!t && !r)
    return !1;
  Ul = r ? t : null, e.type == "cut" && !i.state.readOnly && i.dispatch({
    changes: n,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let s = rO ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), !0) : (Iv(i, t), !1);
};
const lO = /* @__PURE__ */ ii.define();
function aO(i, e) {
  let t = [];
  for (let n of i.facet(qp)) {
    let r = n(i, e);
    r && t.push(r);
  }
  return t ? i.update({ effects: t, annotations: lO.of(!0) }) : null;
}
function uO(i) {
  setTimeout(() => {
    let e = i.hasFocus;
    if (e != i.inputState.notifiedFocused) {
      let t = aO(i.state, e);
      t ? i.dispatch(t) : i.update([]);
    }
  }, 10);
}
wt.focus = (i) => {
  i.inputState.lastFocusTime = Date.now(), !i.scrollDOM.scrollTop && (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) && (i.scrollDOM.scrollTop = i.inputState.lastScrollTop, i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft), uO(i);
};
wt.blur = (i) => {
  i.observer.clearSelectionRange(), uO(i);
};
wt.compositionstart = wt.compositionupdate = (i) => {
  i.observer.editContext || (i.inputState.compositionFirstChange == null && (i.inputState.compositionFirstChange = !0), i.inputState.composing < 0 && (i.inputState.composing = 0));
};
wt.compositionend = (i) => {
  i.observer.editContext || (i.inputState.composing = -1, i.inputState.compositionEndedAt = Date.now(), i.inputState.compositionPendingKey = !0, i.inputState.compositionPendingChange = i.observer.pendingRecords().length > 0, i.inputState.compositionFirstChange = null, B.chrome && B.android ? i.observer.flushSoon() : i.inputState.compositionPendingChange ? Promise.resolve().then(() => i.observer.flush()) : setTimeout(() => {
    i.inputState.composing < 0 && i.docView.hasComposition && i.update([]);
  }, 50));
};
wt.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
_t.beforeinput = (i, e) => {
  var t, n;
  if (e.inputType == "insertReplacementText" && i.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0], a = i.posAtDOM(l.startContainer, l.startOffset), u = i.posAtDOM(l.endContainer, l.endOffset);
      return Ga(i, { from: a, to: u, insert: i.state.toText(s) }, null), !0;
    }
  }
  let r;
  if (B.chrome && B.android && (r = iO.find((s) => s.inputType == e.inputType)) && (i.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let s = ((n = window.visualViewport) === null || n === void 0 ? void 0 : n.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 && i.hasFocus && (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return B.ios && e.inputType == "deleteContentForward" && i.observer.flushSoon(), B.safari && e.inputType == "insertText" && i.inputState.composing >= 0 && setTimeout(() => wt.compositionend(i, e), 20), !1;
};
const Xc = /* @__PURE__ */ new Set();
function zv(i) {
  Xc.has(i) || (Xc.add(i), i.addEventListener("copy", () => {
  }), i.addEventListener("cut", () => {
  }));
}
const Yc = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let On = !1;
function Uc() {
  On = !1;
}
class qv {
  constructor(e) {
    this.lineWrapping = e, this.doc = se.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
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
    return Yc.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, n, r, s, o) {
    let l = Yc.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = n, this.textHeight = r, this.lineLength = s, a) {
      this.heightSamples = {};
      for (let u = 0; u < o.length; u++) {
        let c = o[u];
        c < 0 ? u++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class Nv {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class It {
  /**
  @internal
  */
  constructor(e, t, n, r, s) {
    this.from = e, this.length = t, this.top = n, this.height = r, this._content = s;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? He.Text : Array.isArray(this._content) ? this._content : this._content.type;
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
    return this._content instanceof gi ? this._content.widget : null;
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
    return new It(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var ve = /* @__PURE__ */ function(i) {
  return i[i.ByPos = 0] = "ByPos", i[i.ByHeight = 1] = "ByHeight", i[i.ByPosNoHeight = 2] = "ByPosNoHeight", i;
}(ve || (ve = {}));
const ms = 1e-3;
class Ke {
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
    this.height != e && (Math.abs(this.height - e) > ms && (On = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, n) {
    return Ke.of(n);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, n, r) {
    let s = this, o = n.doc;
    for (let l = r.length - 1; l >= 0; l--) {
      let { fromA: a, toA: u, fromB: c, toB: h } = r[l], f = s.lineAt(a, ve.ByPosNoHeight, n.setDoc(t), 0, 0), d = f.to >= u ? f : s.lineAt(u, ve.ByPosNoHeight, n, 0, 0);
      for (h += d.to - u, u = d.to; l > 0 && f.from <= r[l - 1].toA; )
        a = r[l - 1].fromA, c = r[l - 1].fromB, l--, a < f.from && (f = s.lineAt(a, ve.ByPosNoHeight, n, 0, 0));
      c += f.from - a, a = f.from;
      let p = Ha.build(n.setDoc(o), e, c, h);
      s = Ms(s, s.replace(a, u, p));
    }
    return s.updateHeight(n, 0);
  }
  static empty() {
    return new pt(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, n = e.length, r = 0, s = 0;
    for (; ; )
      if (t == n)
        if (r > s * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), n += 1 + l.break, r -= l.size;
        } else if (s > r * 2) {
          let l = e[n];
          l.break ? e.splice(n, 1, l.left, null, l.right) : e.splice(n, 1, l.left, l.right), n += 2 + l.break, s -= l.size;
        } else
          break;
      else if (r < s) {
        let l = e[t++];
        l && (r += l.size);
      } else {
        let l = e[--n];
        l && (s += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, n++), new Xv(Ke.of(e.slice(0, t)), o, Ke.of(e.slice(n)));
  }
}
function Ms(i, e) {
  return i == e ? i : (i.constructor != e.constructor && (On = !0), e);
}
Ke.prototype.size = 1;
class cO extends Ke {
  constructor(e, t, n) {
    super(e, t), this.deco = n;
  }
  blockAt(e, t, n, r) {
    return new It(r, this.length, n, this.height, this.deco || 0);
  }
  lineAt(e, t, n, r, s) {
    return this.blockAt(0, n, r, s);
  }
  forEachLine(e, t, n, r, s, o) {
    e <= s + this.length && t >= s && o(this.blockAt(0, n, r, s));
  }
  updateHeight(e, t = 0, n = !1, r) {
    return r && r.from <= t && r.more && this.setHeight(r.heights[r.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class pt extends cO {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, n, r) {
    return new It(r, this.length, n, this.height, this.breaks);
  }
  replace(e, t, n) {
    let r = n[0];
    return n.length == 1 && (r instanceof pt || r instanceof Ie && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof Ie ? r = new pt(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = !1), r) : Ke.of(n);
  }
  updateHeight(e, t = 0, n = !1, r) {
    return r && r.from <= t && r.more ? this.setHeight(r.heights[r.index++]) : (n || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Ie extends Ke {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let n = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, s = r - n + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * s);
      o = a / s, this.length > s + 1 && (l = (this.height - a) / (this.length - s - 1));
    } else
      o = this.height / s;
    return { firstLine: n, lastLine: r, perLine: o, perChar: l };
  }
  blockAt(e, t, n, r) {
    let { firstLine: s, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, r);
    if (t.lineWrapping) {
      let u = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - n) / this.height)) * this.length)), c = t.doc.lineAt(u), h = l + c.length * a, f = Math.max(n, e - h / 2);
      return new It(c.from, c.length, f, h, 0);
    } else {
      let u = Math.max(0, Math.min(o - s, Math.floor((e - n) / l))), { from: c, length: h } = t.doc.line(s + u);
      return new It(c, h, n + l * u, l, 0);
    }
  }
  lineAt(e, t, n, r, s) {
    if (t == ve.ByHeight)
      return this.blockAt(e, n, r, s);
    if (t == ve.ByPosNoHeight) {
      let { from: d, to: p } = n.doc.lineAt(e);
      return new It(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(n, s), u = n.doc.lineAt(e), c = l + u.length * a, h = u.number - o, f = r + l * h + a * (u.from - s - h);
    return new It(u.from, u.length, Math.max(r, Math.min(f, r + this.height - c)), c, 0);
  }
  forEachLine(e, t, n, r, s, o) {
    e = Math.max(e, s), t = Math.min(t, s + this.length);
    let { firstLine: l, perLine: a, perChar: u } = this.heightMetrics(n, s);
    for (let c = e, h = r; c <= t; ) {
      let f = n.doc.lineAt(c);
      if (c == e) {
        let p = f.number - l;
        h += a * p + u * (e - s - p);
      }
      let d = a + u * f.length;
      o(new It(f.from, f.length, h, d, 0)), h += d, c = f.to + 1;
    }
  }
  replace(e, t, n) {
    let r = this.length - t;
    if (r > 0) {
      let s = n[n.length - 1];
      s instanceof Ie ? n[n.length - 1] = new Ie(s.length + r) : n.push(null, new Ie(r - 1));
    }
    if (e > 0) {
      let s = n[0];
      s instanceof Ie ? n[0] = new Ie(e + s.length) : n.unshift(new Ie(e - 1), null);
    }
    return Ke.of(n);
  }
  decomposeLeft(e, t) {
    t.push(new Ie(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Ie(this.length - e - 1));
  }
  updateHeight(e, t = 0, n = !1, r) {
    let s = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let o = [], l = Math.max(t, r.from), a = -1;
      for (r.from > t && o.push(new Ie(r.from - t - 1).updateHeight(e, t)); l <= s && r.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let h = r.heights[r.index++];
        a == -1 ? a = h : Math.abs(h - a) >= ms && (a = -2);
        let f = new pt(c, h);
        f.outdated = !1, o.push(f), l += c + 1;
      }
      l <= s && o.push(null, new Ie(s - l).updateHeight(e, l));
      let u = Ke.of(o);
      return (a < 0 || Math.abs(u.height - this.height) >= ms || Math.abs(a - this.heightMetrics(e, t).perLine) >= ms) && (On = !0), Ms(this, u);
    } else (n || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Xv extends Ke {
  constructor(e, t, n) {
    super(e.length + t + n.length, e.height + n.height, t | (e.outdated || n.outdated ? 2 : 0)), this.left = e, this.right = n, this.size = e.size + n.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, n, r) {
    let s = n + this.left.height;
    return e < s ? this.left.blockAt(e, t, n, r) : this.right.blockAt(e, t, s, r + this.left.length + this.break);
  }
  lineAt(e, t, n, r, s) {
    let o = r + this.left.height, l = s + this.left.length + this.break, a = t == ve.ByHeight ? e < o : e < l, u = a ? this.left.lineAt(e, t, n, r, s) : this.right.lineAt(e, t, n, o, l);
    if (this.break || (a ? u.to < l : u.from > l))
      return u;
    let c = t == ve.ByPosNoHeight ? ve.ByPosNoHeight : ve.ByPos;
    return a ? u.join(this.right.lineAt(l, c, n, o, l)) : this.left.lineAt(l, c, n, r, s).join(u);
  }
  forEachLine(e, t, n, r, s, o) {
    let l = r + this.left.height, a = s + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, n, r, s, o), t >= a && this.right.forEachLine(e, t, n, l, a, o);
    else {
      let u = this.lineAt(a, ve.ByPos, n, r, s);
      e < u.from && this.left.forEachLine(e, u.from - 1, n, r, s, o), u.to >= e && u.from <= t && o(u), t > u.to && this.right.forEachLine(u.to + 1, t, n, l, a, o);
    }
  }
  replace(e, t, n) {
    let r = this.left.length + this.break;
    if (t < r)
      return this.balanced(this.left.replace(e, t, n), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - r, t - r, n));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of n)
      s.push(l);
    if (e > 0 && Fc(s, o - 1), t < this.length) {
      let l = s.length;
      this.decomposeRight(t, s), Fc(s, l);
    }
    return Ke.of(s);
  }
  decomposeLeft(e, t) {
    let n = this.left.length;
    if (e <= n)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (n++, e >= n && t.push(null)), e > n && this.right.decomposeLeft(e - n, t);
  }
  decomposeRight(e, t) {
    let n = this.left.length, r = n + this.break;
    if (e >= r)
      return this.right.decomposeRight(e - r, t);
    e < n && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? Ke.of(this.break ? [e, null, t] : [e, t]) : (this.left = Ms(this.left, e), this.right = Ms(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, n = !1, r) {
    let { left: s, right: o } = this, l = t + s.length + this.break, a = null;
    return r && r.from <= t + s.length && r.more ? a = s = s.updateHeight(e, t, n, r) : s.updateHeight(e, t, n), r && r.from <= l + o.length && r.more ? a = o = o.updateHeight(e, l, n, r) : o.updateHeight(e, l, n), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Fc(i, e) {
  let t, n;
  i[e] == null && (t = i[e - 1]) instanceof Ie && (n = i[e + 1]) instanceof Ie && i.splice(e - 1, 3, new Ie(t.length + 1 + n.length));
}
const Yv = 5;
class Ha {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof pt ? r.length += n - this.pos : (n > this.pos || !this.isCovered) && this.nodes.push(new pt(n - this.pos, -1)), this.writtenTo = n, t > n && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let r = n.widget ? n.widget.estimatedHeight : 0, s = n.widget ? n.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let o = t - e;
      n.block ? this.addBlock(new cO(o, r, n)) : (o || s || r >= Yv) && this.addLineDeco(r, s, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new pt(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let n = new Ie(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof pt)
      return e;
    let t = new pt(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, n) {
    let r = this.ensureLine();
    r.length += n, r.collapsed += n, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos = this.pos + n;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof pt) && !this.isCovered ? this.nodes.push(new pt(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let r of this.nodes)
      r instanceof pt && r.updateHeight(this.oracle, n), n += r ? r.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, n, r) {
    let s = new Ha(n, e);
    return ne.spans(t, n, r, s, 0), s.finish(n);
  }
}
function Uv(i, e, t) {
  let n = new Fv();
  return ne.compare(i, e, t, n, 0), n.changes;
}
class Fv {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, n, r) {
    (e < t || n && n.heightRelevant || r && r.heightRelevant) && Bl(e, t, this.changes, 5);
  }
}
function Wv(i, e) {
  let t = i.getBoundingClientRect(), n = i.ownerDocument, r = n.defaultView || window, s = Math.max(0, t.left), o = Math.min(r.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(r.innerHeight, t.bottom);
  for (let u = i.parentNode; u && u != n.body; )
    if (u.nodeType == 1) {
      let c = u, h = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && h.overflow != "visible") {
        let f = c.getBoundingClientRect();
        s = Math.max(s, f.left), o = Math.min(o, f.right), l = Math.max(l, f.top), a = Math.min(u == i.parentNode ? r.innerHeight : a, f.bottom);
      }
      u = h.position == "absolute" || h.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (u.nodeType == 11)
      u = u.host;
    else
      break;
  return {
    left: s - t.left,
    right: Math.max(s, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function Gv(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class zo {
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.size = n, this.displaySize = r;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++) {
      let r = e[n], s = t[n];
      if (r.from != s.from || r.to != s.to || r.size != s.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return q.replace({
      widget: new Hv(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Hv extends Wt {
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
class Wc {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Gc, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = be.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(Fa).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new qv(t), this.stateDeco = e.facet(cr).filter((n) => typeof n != "function"), this.heightMap = Ke.empty().applyChanges(this.stateDeco, se.empty, this.heightOracle.setDoc(e.doc), [new xt(0, 0, 0, e.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = q.set(this.lineGaps.map((n) => n.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let r = n ? t.head : t.anchor;
      if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
        let { from: s, to: o } = this.lineBlockAt(r);
        e.push(new Yr(s, o));
      }
    }
    return this.viewports = e.sort((n, r) => n.from - r.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Gc : new Ka(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Nn(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(cr).filter((c) => typeof c != "function");
    let r = e.changedRanges, s = xt.extendWithRanges(r, Uv(n, this.stateDeco, e ? e.changes : Me.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Uc(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != o || On) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let u = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (u || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Xp) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, n = window.getComputedStyle(t), r = this.heightOracle, s = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? be.RTL : be.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let u = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: x, scaleY: S } = yp(t, l);
      (x > 5e-3 && Math.abs(this.scaleX - x) > 5e-3 || S > 5e-3 && Math.abs(this.scaleY - S) > 5e-3) && (this.scaleX = x, this.scaleY = S, u |= 8, o = a = !0);
    }
    let h = (parseInt(n.paddingTop) || 0) * this.scaleY, f = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != h || this.paddingBottom != f) && (this.paddingTop = h, this.paddingBottom = f, u |= 10), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, u |= 8);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Sp(e.scrollDOM);
    let p = (this.printing ? Gv : Wv)(t, this.paddingTop), O = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let g = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (g != this.inView && (this.inView = g, g && (a = !0)), !this.inView && !this.scrollTarget)
      return 0;
    let y = l.width;
    if ((this.contentDOMWidth != y || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, u |= 8), a) {
      let x = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(x) && (o = !0), o || r.lineWrapping && Math.abs(y - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: S, charWidth: k, textHeight: w } = e.docView.measureTextSize();
        o = S > 0 && r.refresh(s, S, k, w, y / k, x), o && (e.docView.minWidth = 0, u |= 8);
      }
      O > 0 && m > 0 ? c = Math.max(O, m) : O < 0 && m < 0 && (c = Math.min(O, m)), Uc();
      for (let S of this.viewports) {
        let k = S.from == this.viewport.from ? x : e.docView.measureVisibleLineHeights(S);
        this.heightMap = (o ? Ke.empty().applyChanges(this.stateDeco, se.empty, this.heightOracle, [new xt(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, o, new Nv(S.from, k));
      }
      On && (u |= 2);
    }
    let b = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return b && (u & 2 && (u |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), u |= this.updateForViewport()), (u & 2 || b) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), u |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), u;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Yr(r.lineAt(o - n * 1e3, ve.ByHeight, s, 0, 0).from, r.lineAt(l + (1 - n) * 1e3, ve.ByHeight, s, 0, 0).to);
    if (t) {
      let { head: u } = t.range;
      if (u < a.from || u > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), h = r.lineAt(u, ve.ByPos, s, 0, 0), f;
        t.y == "center" ? f = (h.top + h.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && u < a.from ? f = h.top : f = h.bottom - c, a = new Yr(r.lineAt(f - 1e3 / 2, ve.ByHeight, s, 0, 0).from, r.lineAt(f + c + 1e3 / 2, ve.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
    return new Yr(this.heightMap.lineAt(n, ve.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, ve.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView)
      return !0;
    let { top: r } = this.heightMap.lineAt(e, ve.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(t, ve.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || r <= o - Math.max(10, Math.min(
      -n,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || s >= l + Math.max(10, Math.min(
      n,
      250
      /* VP.MaxCoverMargin */
    ))) && r > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let n = [];
    for (let r of e)
      t.touchesRange(r.from, r.to) || n.push(new zo(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
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
    let n = this.heightOracle.lineWrapping, r = n ? 1e4 : 2e3, s = r >> 1, o = r << 1;
    if (this.defaultTextDirection != be.LTR && !n)
      return [];
    let l = [], a = (c, h, f, d) => {
      if (h - c < s)
        return;
      let p = this.state.selection.main, O = [p.from];
      p.empty || O.push(p.to);
      for (let g of O)
        if (g > c && g < h) {
          a(c, g - 10, f, d), a(g + 10, h, f, d);
          return;
        }
      let m = Jv(e, (g) => g.from >= f.from && g.to <= f.to && Math.abs(g.from - c) < s && Math.abs(g.to - h) < s && !O.some((y) => g.from < y && g.to > y));
      if (!m) {
        if (h < f.to && t && n && t.visibleRanges.some((b) => b.from <= h && b.to >= h)) {
          let b = t.moveToLineBoundary(C.cursor(h), !1, !0).head;
          b > c && (h = b);
        }
        let g = this.gapSize(f, c, h, d), y = n || g < 2e6 ? g : 2e6;
        m = new zo(c, h, g, y);
      }
      l.push(m);
    }, u = (c) => {
      if (c.length < o || c.type != He.Text)
        return;
      let h = Kv(c.from, c.to, this.stateDeco);
      if (h.total < o)
        return;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (n) {
        let O = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, g;
        if (f != null) {
          let y = Fr(h, f), b = ((this.visibleBottom - this.visibleTop) / 2 + O) / c.height;
          m = y - b, g = y + b;
        } else
          m = (this.visibleTop - c.top - O) / c.height, g = (this.visibleBottom - c.top + O) / c.height;
        d = Ur(h, m), p = Ur(h, g);
      } else {
        let O = h.total * this.heightOracle.charWidth, m = r * this.heightOracle.charWidth, g = 0;
        if (O > 2e6)
          for (let k of e)
            k.from >= c.from && k.from < c.to && k.size != k.displaySize && k.from * this.heightOracle.charWidth + g < this.pixelViewport.left && (g = k.size - k.displaySize);
        let y = this.pixelViewport.left + g, b = this.pixelViewport.right + g, x, S;
        if (f != null) {
          let k = Fr(h, f), w = ((b - y) / 2 + m) / O;
          x = k - w, S = k + w;
        } else
          x = (y - m) / O, S = (b + m) / O;
        d = Ur(h, x), p = Ur(h, S);
      }
      d > c.from && a(c.from, d, c, h), p < c.to && a(p, c.to, c, h);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(u) : u(c);
    return l;
  }
  gapSize(e, t, n, r) {
    let s = Fr(r, n) - Fr(r, t);
    return this.heightOracle.lineWrapping ? e.height * s : r.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    zo.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = q.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    ne.spans(e, this.viewport.from, this.viewport.to, {
      span(r, s) {
        t.push({ from: r, to: s });
      },
      point() {
      }
    }, 20);
    let n = t.length != this.visibleRanges.length || this.visibleRanges.some((r, s) => r.from != t[s].from || r.to != t[s].to);
    return this.visibleRanges = t, n ? 4 : 0;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Nn(this.heightMap.lineAt(e, ve.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Nn(this.heightMap.lineAt(this.scaler.fromDOM(e), ve.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Nn(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Yr {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Kv(i, e, t) {
  let n = [], r = i, s = 0;
  return ne.spans(t, i, e, {
    span() {
    },
    point(o, l) {
      o > r && (n.push({ from: r, to: o }), s += o - r), r = l;
    }
  }, 20), r < e && (n.push({ from: r, to: e }), s += e - r), { total: s, ranges: n };
}
function Ur({ total: i, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let n = Math.floor(i * t);
  for (let r = 0; ; r++) {
    let { from: s, to: o } = e[r], l = o - s;
    if (n <= l)
      return s + n;
    n -= l;
  }
}
function Fr(i, e) {
  let t = 0;
  for (let { from: n, to: r } of i.ranges) {
    if (e <= r) {
      t += e - n;
      break;
    }
    t += r - n;
  }
  return t / i.total;
}
function Jv(i, e) {
  for (let t of i)
    if (e(t))
      return t;
}
const Gc = {
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
class Ka {
  constructor(e, t, n) {
    let r = 0, s = 0, o = 0;
    this.viewports = n.map(({ from: l, to: a }) => {
      let u = t.lineAt(l, ve.ByPos, e, 0, 0).top, c = t.lineAt(a, ve.ByPos, e, 0, 0).bottom;
      return r += c - u, { from: l, to: a, top: u, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (t.height - r);
    for (let l of this.viewports)
      l.domTop = o + (l.top - s) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), s = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, n = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.top)
        return r + (e - n) * this.scale;
      if (e <= s.bottom)
        return s.domTop + (e - s.top);
      n = s.bottom, r = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.domTop)
        return n + (e - r) / this.scale;
      if (e <= s.domBottom)
        return s.top + (e - s.domTop);
      n = s.bottom, r = s.domBottom;
    }
  }
  eq(e) {
    return e instanceof Ka ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, n) => t.from == e.viewports[n].from && t.to == e.viewports[n].to) : !1;
  }
}
function Nn(i, e) {
  if (e.scale == 1)
    return i;
  let t = e.toDOM(i.top), n = e.toDOM(i.bottom);
  return new It(i.from, i.length, t, n - t, Array.isArray(i._content) ? i._content.map((r) => Nn(r, e)) : i._content);
}
const Wr = /* @__PURE__ */ D.define({ combine: (i) => i.join(" ") }), Fl = /* @__PURE__ */ D.define({ combine: (i) => i.indexOf(!0) > -1 }), Wl = /* @__PURE__ */ Oi.newName(), hO = /* @__PURE__ */ Oi.newName(), fO = /* @__PURE__ */ Oi.newName(), dO = { "&light": "." + hO, "&dark": "." + fO };
function Gl(i, e, t) {
  return new Oi(e, {
    finish(n) {
      return /&/.test(n) ? n.replace(/&\w*/, (r) => {
        if (r == "&")
          return i;
        if (!t || !t[r])
          throw new RangeError(`Unsupported selector: ${r}`);
        return t[r];
      }) : i + " " + n;
    }
  });
}
const eb = /* @__PURE__ */ Gl("." + Wl, {
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
}, dO), tb = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, qo = B.ie && B.ie_version <= 11;
class ib {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new Iy(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let n of t)
        this.queue.push(n);
      (B.ie && B.ie_version <= 11 || B.ios && e.composing) && t.some((n) => n.type == "childList" && n.removedNodes.length || n.type == "characterData" && n.oldValue.length > n.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(B.chrome && B.chrome_version < 126) && (this.editContext = new rb(e), e.state.facet(li) && (e.contentDOM.editContext = this.editContext.editContext)), qo && (this.onCharData = (t) => {
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
    let { view: n } = this, r = this.selectionRange;
    if (n.state.facet(li) ? n.root.activeElement != this.dom : !ps(this.dom, r))
      return;
    let s = r.anchorNode && n.docView.nearest(r.anchorNode);
    if (s && s.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (B.ie && B.ie_version <= 11 || B.android && B.chrome) && !n.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    r.focusNode && Hn(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ur(e.root);
    if (!t)
      return !1;
    let n = B.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && nb(this.view, t) || t;
    if (!n || this.selectionRange.eq(n))
      return !1;
    let r = ps(this.dom, n);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && zy(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), r && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, tb), qo && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), qo && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
      let r = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && sn(this.dom, s.key, s.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
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
    let t = -1, n = -1, r = !1;
    for (let s of e) {
      let o = this.readMutation(s);
      o && (o.typeOver && (r = !0), t == -1 ? { from: t, to: n } = o : (t = Math.min(o.from, t), n = Math.max(o.to, n)));
    }
    return { from: t, to: n, typeOver: r };
  }
  readChange() {
    let { from: e, to: t, typeOver: n } = this.processRecords(), r = this.selectionChanged && ps(this.dom, this.selectionRange);
    if (e < 0 && !r)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let s = new Sv(this.view, e, t, n);
    return this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }, s;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let n = this.view.state, r = tO(this.view, t);
    return this.view.state == n && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let n = Hc(t, e.previousSibling || e.target.previousSibling, -1), r = Hc(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? t.posAfter(n) : t.posAtStart,
        to: r ? t.posBefore(r) : t.posAtEnd,
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
    this.editContext && (this.editContext.update(e), e.startState.facet(li) != e.state.facet(li) && (e.view.contentDOM.editContext = e.state.facet(li) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, n;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let r of this.scrollTargets)
      r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Hc(i, e, t) {
  for (; e; ) {
    let n = pe.get(e);
    if (n && n.parent == i)
      return n;
    let r = e.parentNode;
    e = r != i.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Kc(i, e) {
  let t = e.startContainer, n = e.startOffset, r = e.endContainer, s = e.endOffset, o = i.docView.domAtPos(i.state.selection.main.anchor);
  return Hn(o.node, o.offset, r, s) && ([t, n, r, s] = [r, s, t, n]), { anchorNode: t, anchorOffset: n, focusNode: r, focusOffset: s };
}
function nb(i, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(i.root)[0];
    if (r)
      return Kc(i, r);
  }
  let t = null;
  function n(r) {
    r.preventDefault(), r.stopImmediatePropagation(), t = r.getTargetRanges()[0];
  }
  return i.contentDOM.addEventListener("beforeinput", n, !0), i.dom.ownerDocument.execCommand("indent"), i.contentDOM.removeEventListener("beforeinput", n, !0), t ? Kc(i, t) : null;
}
class rb {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (n) => {
      let { anchor: r } = e.state.selection.main, s = {
        from: this.toEditorPos(n.updateRangeStart),
        to: this.toEditorPos(n.updateRangeEnd),
        insert: se.of(n.text.split(`
`))
      };
      s.from == this.from && r < this.from ? s.from = r : s.to == this.to && r > this.to && (s.to = r), !(s.from == s.to && !s.insert.length) && (this.pendingContextChange = s, e.state.readOnly || Ga(e, s, C.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd))), this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)));
    }, this.handlers.characterboundsupdate = (n) => {
      let r = [], s = null;
      for (let o = this.toEditorPos(n.rangeStart), l = this.toEditorPos(n.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        s = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || s || new DOMRect(), r.push(s);
      }
      t.updateCharacterBounds(n.rangeStart, r);
    }, this.handlers.textformatupdate = (n) => {
      let r = [];
      for (let s of n.getTextFormats()) {
        let o = s.underlineStyle, l = s.underlineThickness;
        if (o != "None" && l != "None") {
          let a = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
          r.push(q.mark({ attributes: { style: a } }).range(this.toEditorPos(s.rangeStart), this.toEditorPos(s.rangeEnd)));
        }
      }
      e.dispatch({ effects: Up.of(q.set(r)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      e.inputState.composing = -1, e.inputState.compositionFirstChange = null;
    };
    for (let n in this.handlers)
      t.addEventListener(n, this.handlers[n]);
    this.measureReq = { read: (n) => {
      this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());
      let r = ur(n.root);
      r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, n = !1, r = this.pendingContextChange;
    return e.changes.iterChanges((s, o, l, a, u) => {
      if (n)
        return;
      let c = u.length - (o - s);
      if (r && o >= r.to)
        if (r.from == s && r.to == o && r.insert.eq(u)) {
          r = this.pendingContextChange = null, t += c, this.to += c;
          return;
        } else
          r = null, this.revertPending(e.state);
      if (s += t, o += t, o <= this.from)
        this.from += c, this.to += c;
      else if (s < this.to) {
        if (s < this.from || o > this.to || this.to - this.from + u.length > 3e4) {
          n = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), u.toString()), this.to += c;
      }
      t += c;
    }), r && !n && this.revertPending(e.state), !n;
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
    let { main: t } = e.selection, n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), r = this.toContextPos(t.head);
    (this.editContext.selectionStart != n || this.editContext.selectionEnd != r) && this.editContext.updateSelection(n, r);
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
class M {
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
    this.dispatchTransactions = e.dispatchTransactions || n && ((r) => r.forEach((s) => n(s, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || jy(e.parent) || document, this.viewState = new Wc(e.state || ee.create(e)), e.scrollTo && e.scrollTo.is(qr) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(jn).map((r) => new Bo(r));
    for (let r of this.plugins)
      r.update(this);
    this.observer = new ib(this), this.inputState = new Qv(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Ac(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof Ee ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
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
    let t = !1, n = !1, r, s = this.state;
    for (let f of e) {
      if (f.startState != s)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = f.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((f) => f.annotation(lO)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = aO(s, o), a || (l = 1));
    let u = this.observer.delayedAndroidKey, c = null;
    if (u ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (c = null)) : this.observer.clear(), s.facet(ee.phrases) != this.state.facet(ee.phrases))
      return this.setState(s);
    r = Rs.create(this, s, e), r.flags |= l;
    let h = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (h && (h = h.map(f.changes)), f.scrollIntoView) {
          let { main: d } = f.state.selection;
          h = new on(d.empty ? d : C.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects)
          d.is(qr) && (h = d.value.clip(this.state));
      }
      this.viewState.update(r, h), this.bidiCache = Zs.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), t = this.docView.update(r), this.state.facet(zn) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(Wr) != r.state.facet(Wr) && (this.viewState.mustMeasureContent = !0), (t || n || h || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !r.empty)
      for (let f of this.state.facet(Nl))
        try {
          f(r);
        } catch (d) {
          Ge(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !tO(this, c) && u.force && sn(this.contentDOM, u.key, u.keyCode);
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
      this.viewState = new Wc(e), this.plugins = e.facet(jn).map((n) => new Bo(n)), this.pluginMap.clear();
      for (let n of this.plugins)
        n.update(this);
      this.docView.destroy(), this.docView = new Ac(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(jn), n = e.state.facet(jn);
    if (t != n) {
      let r = [];
      for (let s of n) {
        let o = t.indexOf(s);
        if (o < 0)
          r.push(new Bo(s));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, r.push(l);
        }
      }
      for (let s of this.plugins)
        s.mustUpdate != e && s.destroy(this);
      this.plugins = r, this.pluginMap.clear();
    } else
      for (let r of this.plugins)
        r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++)
      this.plugins[r].update(this);
    t != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (n) {
          Ge(this.state, n, "doc view update listener");
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
    let t = null, n = this.scrollDOM, r = n.scrollTop * this.scaleY, { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    Math.abs(r - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Sp(n))
            s = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(r);
            s = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let u = [];
        a & 4 || ([this.measureRequests, u] = [u, this.measureRequests]);
        let c = u.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Ge(this.state, p), Jc;
          }
        }), h = Rs.create(this, this.state, []), f = !1;
        h.flags |= a, t ? t.flags |= a : t = h, this.updateState = 2, h.empty || (this.updatePlugins(h), this.inputState.update(h), this.updateAttrs(), f = this.docView.update(h), f && this.docViewUpdate());
        for (let d = 0; d < u.length; d++)
          if (c[d] != Jc)
            try {
              let p = u[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              Ge(this.state, p);
            }
        if (f && this.docView.updateSelection(!0), !h.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o;
              if (p > 1 || p < -1) {
                r = r + p, n.scrollTop = r / this.scaleY, o = -1;
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
      for (let l of this.state.facet(Nl))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Wl + " " + (this.state.facet(Fl) ? fO : hO) + " " + this.state.facet(Wr);
  }
  updateAttrs() {
    let e = eh(this, Fp, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      translate: "no",
      contenteditable: this.state.facet(li) ? "true" : "false",
      class: "cm-content",
      style: `${B.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), eh(this, Fa, t);
    let n = this.observer.ignore(() => {
      let r = Ll(this.contentDOM, this.contentAttrs, t), s = Ll(this.dom, this.editorAttrs, e);
      return r || s;
    });
    return this.editorAttrs = e, this.contentAttrs = t, n;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let r of n.effects)
        if (r.is(M.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = r.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(zn);
    let e = this.state.facet(M.cspNonce);
    Oi.mount(this.root, this.styleModules.concat(eb).reverse(), e ? { nonce: e } : void 0);
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
    return jo(this, e, Zc(this, e, t, n));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return jo(this, e, Zc(this, e, t, (n) => gv(this, e.head, n)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let n = this.bidiSpans(e), r = this.textDirectionAt(e.from), s = n[t ? n.length - 1 : 0];
    return C.cursor(s.side(t, r) + e.from, s.forward(!t, r) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, n = !0) {
    return mv(this, e, t, n);
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
    return jo(this, e, yv(this, e, t, n));
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
    return this.readMeasured(), eO(this, e, t);
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
    let r = this.state.doc.lineAt(e), s = this.bidiSpans(r), o = s[hi.find(s, e - r.from, -1, t)];
    return Pr(n, o.dir == be.LTR == t > 0);
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
    return !this.state.facet(Np) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > sb)
      return Dp(e.length);
    let t = this.textDirectionAt(e.from), n;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == t && (s.fresh || Zp(s.isolates, n = _c(this, e))))
        return s.order;
    n || (n = _c(this, e));
    let r = ev(e.text, t, n);
    return this.bidiCache.push(new Zs(e.from, e.to, t, n, !0, r)), r;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || B.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      vp(this.contentDOM), this.docView.updateSelection();
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
    return qr.of(new on(typeof e == "number" ? C.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
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
    return qr.of(new on(C.cursor(n.from), "start", "start", n.top - e, t, !0));
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
    return Pe.define(() => ({}), { eventHandlers: e });
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
    return Pe.define(() => ({}), { eventObservers: e });
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
    let n = Oi.newName(), r = [Wr.of(n), zn.of(Gl(`.${n}`, e))];
    return t && t.dark && r.push(Fl.of(!0)), r;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return xi.lowest(zn.of(Gl("." + Wl, e, dO)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let n = e.querySelector(".cm-content"), r = n && pe.get(n) || pe.get(e);
    return ((t = r == null ? void 0 : r.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
M.styleModule = zn;
M.inputHandler = zp;
M.clipboardInputFilter = Ya;
M.clipboardOutputFilter = Ua;
M.scrollHandler = Yp;
M.focusChangeEffect = qp;
M.perLineTextDirection = Np;
M.exceptionSink = jp;
M.updateListener = Nl;
M.editable = li;
M.mouseSelectionStyle = Ip;
M.dragMovesSelection = Bp;
M.clickAddsSelectionRange = Lp;
M.decorations = cr;
M.outerDecorations = Wp;
M.atomicRanges = Wa;
M.bidiIsolatedRanges = Gp;
M.scrollMargins = Hp;
M.darkTheme = Fl;
M.cspNonce = /* @__PURE__ */ D.define({ combine: (i) => i.length ? i[0] : "" });
M.contentAttributes = Fa;
M.editorAttributes = Fp;
M.lineWrapping = /* @__PURE__ */ M.contentAttributes.of({ class: "cm-lineWrapping" });
M.announce = /* @__PURE__ */ W.define();
const sb = 4096, Jc = {};
class Zs {
  constructor(e, t, n, r, s, o) {
    this.from = e, this.to = t, this.dir = n, this.isolates = r, this.fresh = s, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh))
      return e;
    let n = [], r = e.length ? e[e.length - 1].dir : be.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == r && !t.touchesRange(o.from, o.to) && n.push(new Zs(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return n;
  }
}
function eh(i, e, t) {
  for (let n = i.state.facet(e), r = n.length - 1; r >= 0; r--) {
    let s = n[r], o = typeof s == "function" ? s(i) : s;
    o && Vl(o, t);
  }
  return t;
}
const ob = B.mac ? "mac" : B.windows ? "win" : B.linux ? "linux" : "key";
function lb(i, e) {
  const t = i.split(/-(?!$)/);
  let n = t[t.length - 1];
  n == "Space" && (n = " ");
  let r, s, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const u = t[a];
    if (/^(cmd|meta|m)$/i.test(u))
      l = !0;
    else if (/^a(lt)?$/i.test(u))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(u))
      s = !0;
    else if (/^s(hift)?$/i.test(u))
      o = !0;
    else if (/^mod$/i.test(u))
      e == "mac" ? l = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + u);
  }
  return r && (n = "Alt-" + n), s && (n = "Ctrl-" + n), l && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Gr(i, e, t) {
  return e.altKey && (i = "Alt-" + i), e.ctrlKey && (i = "Ctrl-" + i), e.metaKey && (i = "Meta-" + i), t !== !1 && e.shiftKey && (i = "Shift-" + i), i;
}
const ab = /* @__PURE__ */ xi.default(/* @__PURE__ */ M.domEventHandlers({
  keydown(i, e) {
    return OO(pO(e.state), i, e, "editor");
  }
})), Xi = /* @__PURE__ */ D.define({ enables: ab }), th = /* @__PURE__ */ new WeakMap();
function pO(i) {
  let e = i.facet(Xi), t = th.get(e);
  return t || th.set(e, t = hb(e.reduce((n, r) => n.concat(r), []))), t;
}
function ub(i, e, t) {
  return OO(pO(i.state), e, i, t);
}
let ai = null;
const cb = 4e3;
function hb(i, e = ob) {
  let t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = (o, l) => {
    let a = n[o];
    if (a == null)
      n[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, a, u, c) => {
    var h, f;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((g) => lb(g, e));
    for (let g = 1; g < p.length; g++) {
      let y = p.slice(0, g).join(" ");
      r(y, !0), d[y] || (d[y] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(b) => {
          let x = ai = { view: b, prefix: y, scope: o };
          return setTimeout(() => {
            ai == x && (ai = null);
          }, cb), !0;
        }]
      });
    }
    let O = p.join(" ");
    r(O, !1);
    let m = d[O] || (d[O] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((f = (h = d._any) === null || h === void 0 ? void 0 : h.run) === null || f === void 0 ? void 0 : f.slice()) || []
    });
    a && m.run.push(a), u && (m.preventDefault = !0), c && (m.stopPropagation = !0);
  };
  for (let o of i) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let u of l) {
        let c = t[u] || (t[u] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: h } = o;
        for (let f in c)
          c[f].run.push((d) => h(d, Hl));
      }
    let a = o[e] || o.key;
    if (a)
      for (let u of l)
        s(u, a, o.run, o.preventDefault, o.stopPropagation), o.shift && s(u, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let Hl = null;
function OO(i, e, t, n) {
  Hl = e;
  let r = Dy(e), s = je(r, 0), o = bt(s) == r.length && r != " ", l = "", a = !1, u = !1, c = !1;
  ai && ai.view == t && ai.scope == n && (l = ai.prefix + " ", nO.indexOf(e.keyCode) < 0 && (u = !0, ai = null));
  let h = /* @__PURE__ */ new Set(), f = (m) => {
    if (m) {
      for (let g of m.run)
        if (!h.has(g) && (h.add(g), g(t)))
          return m.stopPropagation && (c = !0), !0;
      m.preventDefault && (m.stopPropagation && (c = !0), u = !0);
    }
    return !1;
  }, d = i[n], p, O;
  return d && (f(d[l + Gr(r, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(B.windows && e.ctrlKey && e.altKey) && (p = mi[e.keyCode]) && p != r ? (f(d[l + Gr(p, e, !0)]) || e.shiftKey && (O = ar[e.keyCode]) != r && O != p && f(d[l + Gr(O, e, !1)])) && (a = !0) : o && e.shiftKey && f(d[l + Gr(r, e, !0)]) && (a = !0), !a && f(d._any) && (a = !0)), u && (a = !0), a && c && e.stopPropagation(), Hl = null, a;
}
class $r {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, n, r, s) {
    this.className = e, this.left = t, this.top = n, this.width = r, this.height = s;
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
      let r = e.coordsAtPos(n.head, n.assoc || 1);
      if (!r)
        return [];
      let s = mO(e);
      return [new $r(t, r.left - s.left, r.top - s.top, null, r.bottom - r.top)];
    } else
      return fb(e, t, n);
  }
}
function mO(i) {
  let e = i.scrollDOM.getBoundingClientRect();
  return { left: (i.textDirection == be.LTR ? e.left : e.right - i.scrollDOM.clientWidth * i.scaleX) - i.scrollDOM.scrollLeft * i.scaleX, top: e.top - i.scrollDOM.scrollTop * i.scaleY };
}
function ih(i, e, t, n) {
  let r = i.coordsAtPos(e, t * 2);
  if (!r)
    return n;
  let s = i.dom.getBoundingClientRect(), o = (r.top + r.bottom) / 2, l = i.posAtCoords({ x: s.left + 1, y: o }), a = i.posAtCoords({ x: s.right - 1, y: o });
  return l == null || a == null ? n : { from: Math.max(n.from, Math.min(l, a)), to: Math.min(n.to, Math.max(l, a)) };
}
function fb(i, e, t) {
  if (t.to <= i.viewport.from || t.from >= i.viewport.to)
    return [];
  let n = Math.max(t.from, i.viewport.from), r = Math.min(t.to, i.viewport.to), s = i.textDirection == be.LTR, o = i.contentDOM, l = o.getBoundingClientRect(), a = mO(i), u = o.querySelector(".cm-line"), c = u && window.getComputedStyle(u), h = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), f = l.right - (c ? parseInt(c.paddingRight) : 0), d = Yl(i, n), p = Yl(i, r), O = d.type == He.Text ? d : null, m = p.type == He.Text ? p : null;
  if (O && (i.lineWrapping || d.widgetLineBreaks) && (O = ih(i, n, 1, O)), m && (i.lineWrapping || p.widgetLineBreaks) && (m = ih(i, r, -1, m)), O && m && O.from == m.from && O.to == m.to)
    return y(b(t.from, t.to, O));
  {
    let S = O ? b(t.from, null, O) : x(d, !1), k = m ? b(null, t.to, m) : x(p, !0), w = [];
    return (O || d).to < (m || p).from - (O && m ? 1 : 0) || d.widgetLineBreaks > 1 && S.bottom + i.defaultLineHeight / 2 < k.top ? w.push(g(h, S.bottom, f, k.top)) : S.bottom < k.top && i.elementAtHeight((S.bottom + k.top) / 2).type == He.Text && (S.bottom = k.top = (S.bottom + k.top) / 2), y(S).concat(w).concat(y(k));
  }
  function g(S, k, w, P) {
    return new $r(
      e,
      S - a.left,
      k - a.top - 0.01,
      w - S,
      P - k + 0.01
      /* C.Epsilon */
    );
  }
  function y({ top: S, bottom: k, horizontal: w }) {
    let P = [];
    for (let A = 0; A < w.length; A += 2)
      P.push(g(w[A], S, w[A + 1], k));
    return P;
  }
  function b(S, k, w) {
    let P = 1e9, A = -1e9, U = [];
    function L($, z, G, V, oe) {
      let J = i.coordsAtPos($, $ == w.to ? -2 : 2), ue = i.coordsAtPos(G, G == w.from ? 2 : -2);
      !J || !ue || (P = Math.min(J.top, ue.top, P), A = Math.max(J.bottom, ue.bottom, A), oe == be.LTR ? U.push(s && z ? h : J.left, s && V ? f : ue.right) : U.push(!s && V ? h : ue.left, !s && z ? f : J.right));
    }
    let T = S ?? w.from, Q = k ?? w.to;
    for (let $ of i.visibleRanges)
      if ($.to > T && $.from < Q)
        for (let z = Math.max($.from, T), G = Math.min($.to, Q); ; ) {
          let V = i.state.doc.lineAt(z);
          for (let oe of i.bidiSpans(V)) {
            let J = oe.from + V.from, ue = oe.to + V.from;
            if (J >= G)
              break;
            ue > z && L(Math.max(J, z), S == null && J <= T, Math.min(ue, G), k == null && ue >= Q, oe.dir);
          }
          if (z = V.to + 1, z >= G)
            break;
        }
    return U.length == 0 && L(T, S == null, Q, k == null, i.textDirection), { top: P, bottom: A, horizontal: U };
  }
  function x(S, k) {
    let w = l.top + (k ? S.top : S.bottom);
    return { top: w, bottom: w, horizontal: [] };
  }
}
function db(i, e) {
  return i.constructor == e.constructor && i.eq(e);
}
class pb {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(gs) != e.state.facet(gs) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, n = e.facet(gs);
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
    if (e.length != this.drawn.length || e.some((t, n) => !db(t, this.drawn[n]))) {
      let t = this.dom.firstChild, n = 0;
      for (let r of e)
        r.update && t && r.constructor && this.drawn[n].constructor && r.update(t, this.drawn[n]) ? (t = t.nextSibling, n++) : this.dom.insertBefore(r.draw(), t);
      for (; t; ) {
        let r = t.nextSibling;
        t.remove(), t = r;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const gs = /* @__PURE__ */ D.define();
function gO(i) {
  return [
    Pe.define((e) => new pb(e, i)),
    gs.of(i)
  ];
}
const yO = !B.ios, hr = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function vO(i = {}) {
  return [
    hr.of(i),
    Ob,
    mb,
    gb,
    Xp.of(!0)
  ];
}
function bO(i) {
  return i.startState.facet(hr) != i.state.facet(hr);
}
const Ob = /* @__PURE__ */ gO({
  above: !0,
  markers(i) {
    let { state: e } = i, t = e.facet(hr), n = [];
    for (let r of e.selection.ranges) {
      let s = r == e.selection.main;
      if (r.empty ? !s || yO : t.drawRangeCursor) {
        let o = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = r.empty ? r : C.cursor(r.head, r.head > r.anchor ? -1 : 1);
        for (let a of $r.forRange(i, o, l))
          n.push(a);
      }
    }
    return n;
  },
  update(i, e) {
    i.transactions.some((n) => n.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = bO(i);
    return t && nh(i.state, e), i.docChanged || i.selectionSet || t;
  },
  mount(i, e) {
    nh(e.state, i);
  },
  class: "cm-cursorLayer"
});
function nh(i, e) {
  e.style.animationDuration = i.facet(hr).cursorBlinkRate + "ms";
}
const mb = /* @__PURE__ */ gO({
  above: !1,
  markers(i) {
    return i.state.selection.ranges.map((e) => e.empty ? [] : $r.forRange(i, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
  },
  update(i, e) {
    return i.docChanged || i.selectionSet || i.viewportChanged || bO(i);
  },
  class: "cm-selectionLayer"
}), Kl = {
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
yO && (Kl[".cm-line"].caretColor = Kl[".cm-content"].caretColor = "transparent !important");
const gb = /* @__PURE__ */ xi.highest(/* @__PURE__ */ M.theme(Kl)), SO = /* @__PURE__ */ W.define({
  map(i, e) {
    return i == null ? null : e.mapPos(i);
  }
}), Xn = /* @__PURE__ */ Re.define({
  create() {
    return null;
  },
  update(i, e) {
    return i != null && (i = e.changes.mapPos(i)), e.effects.reduce((t, n) => n.is(SO) ? n.value : t, i);
  }
}), yb = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.view = i, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(i) {
    var e;
    let t = i.state.field(Xn);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (i.startState.field(Xn) != t || i.docChanged || i.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: i } = this, e = i.state.field(Xn), t = e != null && i.coordsAtPos(e);
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
    this.view.state.field(Xn) != i && this.view.dispatch({ effects: SO.of(i) });
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
function vb() {
  return [Xn, yb];
}
function rh(i, e, t, n, r) {
  e.lastIndex = 0;
  for (let s = i.iterRange(t, n), o = t, l; !s.next().done; o += s.value.length)
    if (!s.lineBreak)
      for (; l = e.exec(s.value); )
        r(o + l.index, l);
}
function bb(i, e) {
  let t = i.visibleRanges;
  if (t.length == 1 && t[0].from == i.viewport.from && t[0].to == i.viewport.to)
    return t;
  let n = [];
  for (let { from: r, to: s } of t)
    r = Math.max(i.state.doc.lineAt(r).from, r - e), s = Math.min(i.state.doc.lineAt(s).to, s + e), n.length && n[n.length - 1].to >= r ? n[n.length - 1].to = s : n.push({ from: r, to: s });
  return n;
}
class Sb {
  /**
  Create a decorator.
  */
  constructor(e) {
    const { regexp: t, decoration: n, decorate: r, boundary: s, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, r)
      this.addMatch = (l, a, u, c) => r(c, u, u + l[0].length, l, a);
    else if (typeof n == "function")
      this.addMatch = (l, a, u, c) => {
        let h = n(l, a, u);
        h && c(u, u + l[0].length, h);
      };
    else if (n)
      this.addMatch = (l, a, u, c) => c(u, u + l[0].length, n);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = s, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(e) {
    let t = new pi(), n = t.add.bind(t);
    for (let { from: r, to: s } of bb(e, this.maxLength))
      rh(e.state.doc, this.regexp, r, s, (o, l) => this.addMatch(l, e, o, n));
    return t.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(e, t) {
    let n = 1e9, r = -1;
    return e.docChanged && e.changes.iterChanges((s, o, l, a) => {
      a > e.view.viewport.from && l < e.view.viewport.to && (n = Math.min(l, n), r = Math.max(a, r));
    }), e.viewportChanged || r - n > 1e3 ? this.createDeco(e.view) : r > -1 ? this.updateRange(e.view, t.map(e.changes), n, r) : t;
  }
  updateRange(e, t, n, r) {
    for (let s of e.visibleRanges) {
      let o = Math.max(s.from, n), l = Math.min(s.to, r);
      if (l > o) {
        let a = e.state.doc.lineAt(o), u = a.to < l ? e.state.doc.lineAt(l) : a, c = Math.max(s.from, a.from), h = Math.min(s.to, u.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < u.to; l++)
            if (this.boundary.test(u.text[l - u.from])) {
              h = l;
              break;
            }
        }
        let f = [], d, p = (O, m, g) => f.push(g.range(O, m));
        if (a == u)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < h - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          rh(e.state.doc, this.regexp, c, h, (O, m) => this.addMatch(m, e, O, p));
        t = t.update({ filterFrom: c, filterTo: h, filter: (O, m) => O < c || m > h, add: f });
      }
    }
    return t;
  }
}
const Jl = /x/.unicode != null ? "gu" : "g", xb = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, Jl), wb = {
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
let No = null;
function kb() {
  var i;
  if (No == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    No = ((i = e.tabSize) !== null && i !== void 0 ? i : e.MozTabSize) != null;
  }
  return No || !1;
}
const ys = /* @__PURE__ */ D.define({
  combine(i) {
    let e = Tt(i, {
      render: null,
      specialChars: xb,
      addSpecialChars: null
    });
    return (e.replaceTabs = !kb()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Jl)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Jl)), e;
  }
});
function xO(i = {}) {
  return [ys.of(i), Pb()];
}
let sh = null;
function Pb() {
  return sh || (sh = Pe.fromClass(class {
    constructor(i) {
      this.view = i, this.decorations = q.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(i.state.facet(ys)), this.decorations = this.decorator.createDeco(i);
    }
    makeDecorator(i) {
      return new Sb({
        regexp: i.specialChars,
        decoration: (e, t, n) => {
          let { doc: r } = t.state, s = je(e[0], 0);
          if (s == 9) {
            let o = r.lineAt(n), l = t.state.tabSize, a = Qn(o.text, l, n - o.from);
            return q.replace({
              widget: new _b((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[s] || (this.decorationCache[s] = q.replace({ widget: new $b(i, s) }));
        },
        boundary: i.replaceTabs ? void 0 : /[^]/
      });
    }
    update(i) {
      let e = i.state.facet(ys);
      i.startState.facet(ys) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(i.view)) : this.decorations = this.decorator.updateDeco(i, this.decorations);
    }
  }, {
    decorations: (i) => i.decorations
  }));
}
const Qb = "•";
function Cb(i) {
  return i >= 32 ? Qb : i == 10 ? "␤" : String.fromCharCode(9216 + i);
}
class $b extends Wt {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Cb(this.code), n = e.state.phrase("Control character") + " " + (wb[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, n, t);
    if (r)
      return r;
    let s = document.createElement("span");
    return s.textContent = t, s.title = n, s.setAttribute("aria-label", n), s.className = "cm-specialChar", s;
  }
  ignoreEvent() {
    return !1;
  }
}
class _b extends Wt {
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
function Ab() {
  return Tb;
}
const Eb = /* @__PURE__ */ q.line({ class: "cm-activeLine" }), Tb = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.docChanged || i.selectionSet) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = -1, t = [];
    for (let n of i.state.selection.ranges) {
      let r = i.lineBlockAt(n.head);
      r.from > e && (t.push(Eb.range(r.from)), e = r.from);
    }
    return q.set(t);
  }
}, {
  decorations: (i) => i.decorations
});
class Rb extends Wt {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM(e) {
    let t = document.createElement("span");
    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(!0)), typeof this.content == "string" ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t;
  }
  coordsAt(e) {
    let t = e.firstChild ? fn(e.firstChild) : [];
    if (!t.length)
      return null;
    let n = window.getComputedStyle(e.parentNode), r = Pr(t[0], n.direction != "rtl"), s = parseInt(n.lineHeight);
    return r.bottom - r.top > s * 1.5 ? { left: r.left, right: r.right, top: r.top, bottom: r.top + s } : r;
  }
  ignoreEvent() {
    return !1;
  }
}
function Mb(i) {
  return Pe.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = i ? q.set([q.widget({ widget: new Rb(i), side: 1 }).range(0)]) : q.none;
    }
    get decorations() {
      return this.view.state.doc.length ? q.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
}
const ea = 2e3;
function Zb(i, e, t) {
  let n = Math.min(e.line, t.line), r = Math.max(e.line, t.line), s = [];
  if (e.off > ea || t.off > ea || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = n; a <= r; a++) {
      let u = i.doc.line(a);
      u.length <= l && s.push(C.range(u.from + o, u.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = n; a <= r; a++) {
      let u = i.doc.line(a), c = Al(u.text, o, i.tabSize, !0);
      if (c < 0)
        s.push(C.cursor(u.to));
      else {
        let h = Al(u.text, l, i.tabSize);
        s.push(C.range(u.from + c, u.from + h));
      }
    }
  }
  return s;
}
function Db(i, e) {
  let t = i.coordsAtPos(i.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / i.defaultCharacterWidth)) : -1;
}
function oh(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1), n = i.state.doc.lineAt(t), r = t - n.from, s = r > ea ? -1 : r == n.length ? Db(i, e.clientX) : Qn(n.text, i.state.tabSize, t - n.from);
  return { line: n.number, col: s, off: r };
}
function Vb(i, e) {
  let t = oh(i, e), n = i.state.selection;
  return t ? {
    update(r) {
      if (r.docChanged) {
        let s = r.changes.mapPos(r.startState.doc.line(t.line).from), o = r.state.doc.lineAt(s);
        t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, n = n.map(r.changes);
      }
    },
    get(r, s, o) {
      let l = oh(i, r);
      if (!l)
        return n;
      let a = Zb(i.state, t, l);
      return a.length ? o ? C.create(a.concat(n.ranges)) : C.create(a) : n;
    }
  } : null;
}
function Lb(i) {
  let e = (t) => t.altKey && t.button == 0;
  return M.mouseSelectionStyle.of((t, n) => e(n) ? Vb(t, n) : null);
}
const Bb = {
  Alt: [18, (i) => !!i.altKey],
  Control: [17, (i) => !!i.ctrlKey],
  Shift: [16, (i) => !!i.shiftKey],
  Meta: [91, (i) => !!i.metaKey]
}, Ib = { style: "cursor: crosshair" };
function jb(i = {}) {
  let [e, t] = Bb[i.key || "Alt"], n = Pe.fromClass(class {
    constructor(r) {
      this.view = r, this.isDown = !1;
    }
    set(r) {
      this.isDown != r && (this.isDown = r, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(r) {
        this.set(r.keyCode == e || t(r));
      },
      keyup(r) {
        (r.keyCode == e || !t(r)) && this.set(!1);
      },
      mousemove(r) {
        this.set(t(r));
      }
    }
  });
  return [
    n,
    M.contentAttributes.of((r) => {
      var s;
      return !((s = r.plugin(n)) === null || s === void 0) && s.isDown ? Ib : null;
    })
  ];
}
const Zn = "-10000px";
class wO {
  constructor(e, t, n, r) {
    this.facet = t, this.createTooltipView = n, this.removeTooltipView = r, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let s = null;
    this.tooltipViews = this.tooltips.map((o) => s = n(o, s));
  }
  update(e, t) {
    var n;
    let r = e.state.facet(this.facet), s = r.filter((a) => a);
    if (r === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < s.length; a++) {
      let u = s[a], c = -1;
      if (u) {
        for (let h = 0; h < this.tooltips.length; h++) {
          let f = this.tooltips[h];
          f && f.create == u.create && (c = h);
        }
        if (c < 0)
          o[a] = this.createTooltipView(u, a ? o[a - 1] : null), l && (l[a] = !!u.above);
        else {
          let h = o[a] = this.tooltipViews[c];
          l && (l[a] = t[c]), h.update && h.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (n = a.destroy) === null || n === void 0 || n.call(a));
    return t && (l.forEach((a, u) => t[u] = a), t.length = l.length), this.input = r, this.tooltips = s, this.tooltipViews = o, !0;
  }
}
function zb(i) {
  let { win: e } = i;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const Xo = /* @__PURE__ */ D.define({
  combine: (i) => {
    var e, t, n;
    return {
      position: B.ios ? "absolute" : ((e = i.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = i.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((n = i.find((r) => r.tooltipSpace)) === null || n === void 0 ? void 0 : n.tooltipSpace) || zb
    };
  }
}), lh = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.view = i, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = i.state.facet(Xo);
    this.position = e.position, this.parent = e.parent, this.classes = i.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new wO(i, Oo, (t, n) => this.createTooltip(t, n), (t) => {
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
    let t = e || i.geometryChanged, n = i.state.facet(Xo);
    if (n.position != this.position && !this.madeAbsolute) {
      this.position = n.position;
      for (let r of this.manager.tooltipViews)
        r.dom.style.position = this.position;
      t = !0;
    }
    if (n.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = n.parent, this.createContainer();
      for (let r of this.manager.tooltipViews)
        this.container.appendChild(r.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(i, e) {
    let t = i.create(this.view), n = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), i.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let r = document.createElement("div");
      r.className = "cm-tooltip-arrow", t.dom.appendChild(r);
    }
    return t.dom.style.position = this.position, t.dom.style.top = Zn, t.dom.style.left = "0px", this.container.insertBefore(t.dom, n), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
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
      let { dom: r } = this.manager.tooltipViews[0];
      if (B.gecko)
        n = r.offsetParent != this.container.ownerDocument.body;
      else if (r.style.top == Zn && r.style.left == "0px") {
        let s = r.getBoundingClientRect();
        n = Math.abs(s.top + 1e4) > 1 || Math.abs(s.left) > 1;
      }
    }
    if (n || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (e = r.width / this.parent.offsetWidth, t = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: e, scaleY: t } = this.view.viewState);
    return {
      editor: i,
      parent: this.parent ? this.container.getBoundingClientRect() : i,
      pos: this.manager.tooltips.map((r, s) => {
        let o = this.manager.tooltipViews[s];
        return o.getCoords ? o.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(Xo).tooltipSpace(this.view),
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
    let { editor: t, space: n, scaleX: r, scaleY: s } = i, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], u = this.manager.tooltipViews[l], { dom: c } = u, h = i.pos[l], f = i.size[l];
      if (!h || h.bottom <= Math.max(t.top, n.top) || h.top >= Math.min(t.bottom, n.bottom) || h.right < Math.max(t.left, n.left) - 0.1 || h.left > Math.min(t.right, n.right) + 0.1) {
        c.style.top = Zn;
        continue;
      }
      let d = a.arrow ? u.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, O = f.right - f.left, m = (e = lh.get(u)) !== null && e !== void 0 ? e : f.bottom - f.top, g = u.offset || Nb, y = this.view.textDirection == be.LTR, b = f.width > n.right - n.left ? y ? n.left : n.right - f.width : y ? Math.max(n.left, Math.min(h.left - (d ? 14 : 0) + g.x, n.right - O)) : Math.min(Math.max(n.left, h.left - O + (d ? 14 : 0) - g.x), n.right - O), x = this.above[l];
      !a.strictSide && (x ? h.top - (f.bottom - f.top) - g.y < n.top : h.bottom + (f.bottom - f.top) + g.y > n.bottom) && x == n.bottom - h.bottom > h.top - n.top && (x = this.above[l] = !x);
      let S = (x ? h.top - n.top : n.bottom - h.bottom) - p;
      if (S < m && u.resize !== !1) {
        if (S < this.view.defaultLineHeight) {
          c.style.top = Zn;
          continue;
        }
        lh.set(u, m), c.style.height = (m = S) / s + "px";
      } else c.style.height && (c.style.height = "");
      let k = x ? h.top - m - p - g.y : h.bottom + p + g.y, w = b + O;
      if (u.overlap !== !0)
        for (let P of o)
          P.left < w && P.right > b && P.top < k + m && P.bottom > k && (k = x ? P.top - m - 2 - p : P.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (k - i.parent.top) / s + "px", c.style.left = (b - i.parent.left) / r + "px") : (c.style.top = k / s + "px", c.style.left = b / r + "px"), d) {
        let P = h.left + (y ? g.x : -g.x) - (b + 14 - 7);
        d.style.left = P / r + "px";
      }
      u.overlap !== !0 && o.push({ left: b, top: k, right: w, bottom: k + m }), c.classList.toggle("cm-tooltip-above", x), c.classList.toggle("cm-tooltip-below", !x), u.positioned && u.positioned(i.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let i of this.manager.tooltipViews)
        i.dom.style.top = Zn;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
}), qb = /* @__PURE__ */ M.baseTheme({
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
}), Nb = { x: 0, y: 0 }, Oo = /* @__PURE__ */ D.define({
  enables: [Ja, qb]
}), Ds = /* @__PURE__ */ D.define({
  combine: (i) => i.reduce((e, t) => e.concat(t), [])
});
class mo {
  // Needs to be static so that host tooltip instances always match
  static create(e) {
    return new mo(e);
  }
  constructor(e) {
    this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new wO(e, Ds, (t, n) => this.createHostedView(t, n), (t) => t.dom.remove());
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
      let r = n[e];
      if (r !== void 0) {
        if (t === void 0)
          t = r;
        else if (t !== r)
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
const Xb = /* @__PURE__ */ Oo.compute([Ds], (i) => {
  let e = i.facet(Ds);
  return e.length === 0 ? null : {
    pos: Math.min(...e.map((t) => t.pos)),
    end: Math.max(...e.map((t) => {
      var n;
      return (n = t.end) !== null && n !== void 0 ? n : t.pos;
    })),
    create: mo.create,
    above: e[0].above,
    arrow: e.some((t) => t.arrow)
  };
});
class Yb {
  constructor(e, t, n, r, s) {
    this.view = e, this.source = t, this.field = n, this.setHover = r, this.hoverTime = s, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
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
    let r, s = 1;
    if (n instanceof ci)
      r = n.posAtStart;
    else {
      if (r = e.posAtCoords(t), r == null)
        return;
      let l = e.coordsAtPos(r);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(r)).find((c) => c.from <= r && c.to >= r), u = a && a.dir == be.RTL ? -1 : 1;
      s = t.x < l.left ? -u : u;
    }
    let o = this.source(e, r, s);
    if (o != null && o.then) {
      let l = this.pending = { pos: r };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Ge(e.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(Ja), t = e ? e.manager.tooltips.findIndex((n) => n.create == mo.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, n;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: r, tooltip: s } = this;
    if (r.length && s && !Ub(s.dom, e) || this.pending) {
      let { pos: o } = r[0] || this.pending, l = (n = (t = r[0]) === null || t === void 0 ? void 0 : t.end) !== null && n !== void 0 ? n : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !Fb(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
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
const Hr = 4;
function Ub(i, e) {
  let { left: t, right: n, top: r, bottom: s } = i.getBoundingClientRect(), o;
  if (o = i.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    r = Math.min(l.top, r), s = Math.max(l.bottom, s);
  }
  return e.clientX >= t - Hr && e.clientX <= n + Hr && e.clientY >= r - Hr && e.clientY <= s + Hr;
}
function Fb(i, e, t, n, r, s) {
  let o = i.scrollDOM.getBoundingClientRect(), l = i.documentTop + i.documentPadding.top + i.contentHeight;
  if (o.left > n || o.right < n || o.top > r || Math.min(o.bottom, l) < r)
    return !1;
  let a = i.posAtCoords({ x: n, y: r }, !1);
  return a >= e && a <= t;
}
function Wb(i, e = {}) {
  let t = W.define(), n = Re.define({
    create() {
      return [];
    },
    update(r, s) {
      if (r.length && (e.hideOnChange && (s.docChanged || s.selection) ? r = [] : e.hideOn && (r = r.filter((o) => !e.hideOn(s, o))), s.docChanged)) {
        let o = [];
        for (let l of r) {
          let a = s.changes.mapPos(l.pos, -1, qe.TrackDel);
          if (a != null) {
            let u = Object.assign(/* @__PURE__ */ Object.create(null), l);
            u.pos = a, u.end != null && (u.end = s.changes.mapPos(u.end)), o.push(u);
          }
        }
        r = o;
      }
      for (let o of s.effects)
        o.is(t) && (r = o.value), o.is(Gb) && (r = []);
      return r;
    },
    provide: (r) => Ds.from(r)
  });
  return {
    active: n,
    extension: [
      n,
      Pe.define((r) => new Yb(
        r,
        i,
        n,
        t,
        e.hoverTime || 300
        /* Hover.Time */
      )),
      Xb
    ]
  };
}
function kO(i, e) {
  let t = i.plugin(Ja);
  if (!t)
    return null;
  let n = t.manager.tooltips.indexOf(e);
  return n < 0 ? null : t.manager.tooltipViews[n];
}
const Gb = /* @__PURE__ */ W.define(), ah = /* @__PURE__ */ D.define({
  combine(i) {
    let e, t;
    for (let n of i)
      e = e || n.topContainer, t = t || n.bottomContainer;
    return { topContainer: e, bottomContainer: t };
  }
});
function fr(i, e) {
  let t = i.plugin(PO), n = t ? t.specs.indexOf(e) : -1;
  return n > -1 ? t.panels[n] : null;
}
const PO = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.input = i.state.facet(dr), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(i));
    let e = i.state.facet(ah);
    this.top = new Kr(i, !0, e.topContainer), this.bottom = new Kr(i, !1, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(i) {
    let e = i.state.facet(ah);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Kr(i.view, !0, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Kr(i.view, !1, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = i.state.facet(dr);
    if (t != this.input) {
      let n = t.filter((a) => a), r = [], s = [], o = [], l = [];
      for (let a of n) {
        let u = this.specs.indexOf(a), c;
        u < 0 ? (c = a(i.view), l.push(c)) : (c = this.panels[u], c.update && c.update(i)), r.push(c), (c.top ? s : o).push(c);
      }
      this.specs = n, this.panels = r, this.top.sync(s), this.bottom.sync(o);
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
  provide: (i) => M.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
  })
});
class Kr {
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
          e = uh(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = uh(e);
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
function uh(i) {
  let e = i.nextSibling;
  return i.remove(), e;
}
const dr = /* @__PURE__ */ D.define({
  enables: PO
});
class Ft extends Li {
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
Ft.prototype.elementClass = "";
Ft.prototype.toDOM = void 0;
Ft.prototype.mapMode = qe.TrackBefore;
Ft.prototype.startSide = Ft.prototype.endSide = -1;
Ft.prototype.point = !0;
const vs = /* @__PURE__ */ D.define(), Hb = /* @__PURE__ */ D.define(), Kb = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => ne.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {}
}, Jn = /* @__PURE__ */ D.define();
function QO(i) {
  return [CO(), Jn.of(Object.assign(Object.assign({}, Kb), i))];
}
const ch = /* @__PURE__ */ D.define({
  combine: (i) => i.some((e) => e)
});
function CO(i) {
  return [
    Jb
  ];
}
const Jb = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.view = i, this.prevViewport = i.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = i.state.facet(Jn).map((e) => new fh(i, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !i.state.facet(ch), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), i.scrollDOM.insertBefore(this.dom, i.contentDOM);
  }
  update(i) {
    if (this.updateGutters(i)) {
      let e = this.prevViewport, t = i.view.viewport, n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(n < (t.to - t.from) * 0.8);
    }
    i.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(ch) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = i.view.viewport;
  }
  syncGutters(i) {
    let e = this.dom.nextSibling;
    i && this.dom.remove();
    let t = ne.iter(this.view.state.facet(vs), this.view.viewport.from), n = [], r = this.gutters.map((s) => new eS(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks)
      if (n.length && (n = []), Array.isArray(s.type)) {
        let o = !0;
        for (let l of s.type)
          if (l.type == He.Text && o) {
            ta(t, n, l.from);
            for (let a of r)
              a.line(this.view, l, n);
            o = !1;
          } else if (l.widget)
            for (let a of r)
              a.widget(this.view, l);
      } else if (s.type == He.Text) {
        ta(t, n, s.from);
        for (let o of r)
          o.line(this.view, s, n);
      } else if (s.widget)
        for (let o of r)
          o.widget(this.view, s);
    for (let s of r)
      s.finish();
    i && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(i) {
    let e = i.startState.facet(Jn), t = i.state.facet(Jn), n = i.docChanged || i.heightChanged || i.viewportChanged || !ne.eq(i.startState.facet(vs), i.state.facet(vs), i.view.viewport.from, i.view.viewport.to);
    if (e == t)
      for (let r of this.gutters)
        r.update(i) && (n = !0);
    else {
      n = !0;
      let r = [];
      for (let s of t) {
        let o = e.indexOf(s);
        o < 0 ? r.push(new fh(this.view, s)) : (this.gutters[o].update(i), r.push(this.gutters[o]));
      }
      for (let s of this.gutters)
        s.dom.remove(), r.indexOf(s) < 0 && s.destroy();
      for (let s of r)
        this.dom.appendChild(s.dom);
      this.gutters = r;
    }
    return n;
  }
  destroy() {
    for (let i of this.gutters)
      i.destroy();
    this.dom.remove();
  }
}, {
  provide: (i) => M.scrollMargins.of((e) => {
    let t = e.plugin(i);
    return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == be.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX };
  })
});
function hh(i) {
  return Array.isArray(i) ? i : [i];
}
function ta(i, e, t) {
  for (; i.value && i.from <= t; )
    i.from == t && e.push(i.value), i.next();
}
class eS {
  constructor(e, t, n) {
    this.gutter = e, this.height = n, this.i = 0, this.cursor = ne.iter(e.markers, t.from);
  }
  addElement(e, t, n) {
    let { gutter: r } = this, s = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == r.elements.length) {
      let l = new $O(e, o, s, n);
      r.elements.push(l), r.dom.appendChild(l.dom);
    } else
      r.elements[this.i].update(e, o, s, n);
    this.height = t.bottom, this.i++;
  }
  line(e, t, n) {
    let r = [];
    ta(this.cursor, r, t.from), n.length && (r = r.concat(n));
    let s = this.gutter.config.lineMarker(e, t, r);
    s && r.unshift(s);
    let o = this.gutter;
    r.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, r);
  }
  widget(e, t) {
    let n = this.gutter.config.widgetMarker(e, t.widget, t), r = n ? [n] : null;
    for (let s of e.state.facet(Hb)) {
      let o = s(e, t.widget, t);
      o && (r || (r = [])).push(o);
    }
    r && this.addElement(e, t, r);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class fh {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let n in t.domEventHandlers)
      this.dom.addEventListener(n, (r) => {
        let s = r.target, o;
        if (s != this.dom && this.dom.contains(s)) {
          for (; s.parentNode != this.dom; )
            s = s.parentNode;
          let a = s.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = r.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[n](e, l, r) && r.preventDefault();
      });
    this.markers = hh(t.markers(e)), t.initialSpacer && (this.spacer = new $O(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = hh(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let n = e.view.viewport;
    return !ne.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class $O {
  constructor(e, t, n, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, n, r);
  }
  update(e, t, n, r) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), tS(this.markers, r) || this.setMarkers(e, r);
  }
  setMarkers(e, t) {
    let n = "cm-gutterElement", r = this.dom.firstChild;
    for (let s = 0, o = 0; ; ) {
      let l = o, a = s < t.length ? t[s++] : null, u = !1;
      if (a) {
        let c = a.elementClass;
        c && (n += " " + c);
        for (let h = o; h < this.markers.length; h++)
          if (this.markers[h].compare(a)) {
            l = h, u = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(r);
          let h = r.nextSibling;
          r.remove(), r = h;
        }
      }
      if (!a)
        break;
      a.toDOM && (u ? r = r.nextSibling : this.dom.insertBefore(a.toDOM(e), r)), u && o++;
    }
    this.dom.className = n, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function tS(i, e) {
  if (i.length != e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (!i[t].compare(e[t]))
      return !1;
  return !0;
}
const iS = /* @__PURE__ */ D.define(), nS = /* @__PURE__ */ D.define(), Ki = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let n = Object.assign({}, e);
        for (let r in t) {
          let s = n[r], o = t[r];
          n[r] = s ? (l, a, u) => s(l, a, u) || o(l, a, u) : o;
        }
        return n;
      }
    });
  }
});
class Yo extends Ft {
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
function Uo(i, e) {
  return i.state.facet(Ki).formatNumber(e, i.state);
}
const rS = /* @__PURE__ */ Jn.compute([Ki], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(iS);
  },
  lineMarker(e, t, n) {
    return n.some((r) => r.toDOM) ? null : new Yo(Uo(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, n) => {
    for (let r of e.state.facet(nS)) {
      let s = r(e, t, n);
      if (s)
        return s;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Ki) != e.state.facet(Ki),
  initialSpacer(e) {
    return new Yo(Uo(e, dh(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = Uo(t.view, dh(t.view.state.doc.lines));
    return n == e.number ? e : new Yo(n);
  },
  domEventHandlers: i.facet(Ki).domEventHandlers
}));
function sS(i = {}) {
  return [
    Ki.of(i),
    CO(),
    rS
  ];
}
function dh(i) {
  let e = 9;
  for (; e < i; )
    e = e * 10 + 9;
  return e;
}
const oS = /* @__PURE__ */ new class extends Ft {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), lS = /* @__PURE__ */ vs.compute(["selection"], (i) => {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let r = i.doc.lineAt(n.head).from;
    r > t && (t = r, e.push(oS.range(r)));
  }
  return ne.of(e);
});
function aS() {
  return lS;
}
const _O = 1024;
let uS = 0;
class Fo {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class te {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = uS++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
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
    return typeof e != "function" && (e = ct.match(e)), (t) => {
      let n = e(t);
      return n === void 0 ? null : [this, n];
    };
  }
}
te.closedBy = new te({ deserialize: (i) => i.split(" ") });
te.openedBy = new te({ deserialize: (i) => i.split(" ") });
te.group = new te({ deserialize: (i) => i.split(" ") });
te.isolate = new te({ deserialize: (i) => {
  if (i && i != "rtl" && i != "ltr" && i != "auto")
    throw new RangeError("Invalid value for isolate: " + i);
  return i || "auto";
} });
te.contextHash = new te({ perNode: !0 });
te.lookAhead = new te({ perNode: !0 });
te.mounted = new te({ perNode: !0 });
class Vs {
  constructor(e, t, n) {
    this.tree = e, this.overlay = t, this.parser = n;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[te.mounted.id];
  }
}
const cS = /* @__PURE__ */ Object.create(null);
class ct {
  /**
  @internal
  */
  constructor(e, t, n, r = 0) {
    this.name = e, this.props = t, this.id = n, this.flags = r;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : cS, n = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new ct(e.name || "", t, e.id, n);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(r)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[s[0].id] = s[1];
        }
    }
    return r;
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
      let t = this.prop(te.group);
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
      for (let r of n.split(" "))
        t[r] = e[n];
    return (n) => {
      for (let r = n.prop(te.group), s = -1; s < (r ? r.length : 0); s++) {
        let o = t[s < 0 ? n.name : r[s]];
        if (o)
          return o;
      }
    };
  }
}
ct.none = new ct(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class eu {
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
      let r = null;
      for (let s of e) {
        let o = s(n);
        o && (r || (r = Object.assign({}, n.props)), r[o[0].id] = o[1]);
      }
      t.push(r ? new ct(n.name, r, n.id, n.flags) : n);
    }
    return new eu(t);
  }
}
const Jr = /* @__PURE__ */ new WeakMap(), ph = /* @__PURE__ */ new WeakMap();
var Ze;
(function(i) {
  i[i.ExcludeBuffers = 1] = "ExcludeBuffers", i[i.IncludeAnonymous = 2] = "IncludeAnonymous", i[i.IgnoreMounts = 4] = "IgnoreMounts", i[i.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Ze || (Ze = {}));
class Te {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, n, r, s) {
    if (this.type = e, this.children = t, this.positions = n, this.length = r, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = Vs.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let n of this.children) {
      let r = n.toString();
      r && (t && (t += ","), t += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new na(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, n = 0) {
    let r = Jr.get(this) || this.topNode, s = new na(r);
    return s.moveTo(e, t), Jr.set(this, s._tree), s;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new ut(this, 0, 0, null);
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
    let n = pr(Jr.get(this) || this.topNode, e, t, !1);
    return Jr.set(this, n), n;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let n = pr(ph.get(this) || this.topNode, e, t, !0);
    return ph.set(this, n), n;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return dS(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: n, from: r = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & Ze.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | Ze.IncludeAnonymous); ; ) {
      let u = !1;
      if (a.from <= s && a.to >= r && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        u = !0;
      }
      for (; u && n && (l || !a.type.isAnonymous) && n(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        u = !0;
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
    return this.children.length <= 8 ? this : nu(ct.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, n, r) => new Te(this.type, t, n, r, this.propValues), e.makeTree || ((t, n, r) => new Te(ct.none, t, n, r)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return pS(e);
  }
}
Te.empty = new Te(ct.none, [], [], 0);
class tu {
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
    return new tu(this.buffer, this.index);
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
    return ct.none;
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
    let t = this.buffer[e], n = this.buffer[e + 3], r = this.set.types[t], s = r.name;
    if (/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), e += 4, n == e)
      return s;
    let o = [];
    for (; e < n; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, n, r, s) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(AO(s, r, o[a + 1], o[a + 2]) && (l = a, n > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, n) {
    let r = this.buffer, s = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      s[a++] = r[l++], s[a++] = r[l++] - n;
      let u = s[a++] = r[l++] - n;
      s[a++] = r[l++] - e, o = Math.max(o, u);
    }
    return new yi(s, o, this.set);
  }
}
function AO(i, e, t, n) {
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
function pr(i, e, t, n) {
  for (var r; i.from == i.to || (t < 1 ? i.from >= e : i.from > e) || (t > -1 ? i.to <= e : i.to < e); ) {
    let o = !n && i instanceof ut && i.index < 0 ? null : i.parent;
    if (!o)
      return i;
    i = o;
  }
  let s = n ? 0 : Ze.IgnoreOverlays;
  if (n)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof ut && o.index < 0 && ((r = l.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != o.from && (i = l);
  for (; ; ) {
    let o = i.enter(e, t, s);
    if (!o)
      return i;
    i = o;
  }
}
class EO {
  cursor(e = 0) {
    return new na(this, e);
  }
  getChild(e, t = null, n = null) {
    let r = Oh(this, e, t, n);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return Oh(this, e, t, n);
  }
  resolve(e, t = 0) {
    return pr(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return pr(this, e, t, !0);
  }
  matchContext(e) {
    return ia(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), n = this;
    for (; t; ) {
      let r = t.lastChild;
      if (!r || r.to != t.to)
        break;
      r.type.isError && r.from == r.to ? (n = t, t = r.prevSibling) : t = r;
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
class ut extends EO {
  constructor(e, t, n, r) {
    super(), this._tree = e, this.from = t, this.index = n, this._parent = r;
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
  nextChild(e, t, n, r, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, u = t > 0 ? l.length : -1; e != u; e += t) {
        let c = l[e], h = a[e] + o.from;
        if (AO(r, n, h, h + c.length)) {
          if (c instanceof yi) {
            if (s & Ze.ExcludeBuffers)
              continue;
            let f = c.findChild(0, c.buffer.length, t, n - h, r);
            if (f > -1)
              return new jt(new hS(o, c, e, h), null, f);
          } else if (s & Ze.IncludeAnonymous || !c.type.isAnonymous || iu(c)) {
            let f;
            if (!(s & Ze.IgnoreMounts) && (f = Vs.get(c)) && !f.overlay)
              return new ut(f.tree, h, e, o);
            let d = new ut(c, h, e, o);
            return s & Ze.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, n, r);
          }
        }
      }
      if (s & Ze.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
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
    let r;
    if (!(n & Ze.IgnoreOverlays) && (r = Vs.get(this._tree)) && r.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of r.overlay)
        if ((t > 0 ? o <= s : o < s) && (t < 0 ? l >= s : l > s))
          return new ut(r.tree, r.overlay[0].from + this.from, -1, this);
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
function Oh(i, e, t, n) {
  let r = i.cursor(), s = [];
  if (!r.firstChild())
    return s;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = r.type.is(t), !r.nextSibling())
        return s;
  }
  for (; ; ) {
    if (n != null && r.type.is(n))
      return s;
    if (r.type.is(e) && s.push(r.node), !r.nextSibling())
      return n == null ? s : [];
  }
}
function ia(i, e, t = e.length - 1) {
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
class hS {
  constructor(e, t, n, r) {
    this.parent = e, this.buffer = t, this.index = n, this.start = r;
  }
}
class jt extends EO {
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
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, n);
    return s < 0 ? null : new jt(this.context, this, s);
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
    if (n & Ze.ExcludeBuffers)
      return null;
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return s < 0 ? null : new jt(this.context, this, s);
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
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new jt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new jt(this.context, this._parent, e.findChild(
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
    let e = [], t = [], { buffer: n } = this.context, r = this.index + 4, s = n.buffer[this.index + 3];
    if (s > r) {
      let o = n.buffer[this.index + 1];
      e.push(n.slice(r, s, o)), t.push(0);
    }
    return new Te(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function TO(i) {
  if (!i.length)
    return null;
  let e = 0, t = i[0];
  for (let s = 1; s < i.length; s++) {
    let o = i[s];
    (o.from > t.from || o.to < t.to) && (t = o, e = s);
  }
  let n = t instanceof ut && t.index < 0 ? null : t.parent, r = i.slice();
  return n ? r[e] = n : r.splice(e, 1), new fS(r, t);
}
class fS {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return TO(this.heads);
  }
}
function dS(i, e, t) {
  let n = i.resolveInner(e, t), r = null;
  for (let s = n instanceof ut ? n : n.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let o = s.parent;
      (r || (r = [n])).push(o.resolve(e, t)), s = o;
    } else {
      let o = Vs.get(s.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new ut(o.tree, o.overlay[0].from + s.from, -1, s);
        (r || (r = [n])).push(pr(l, e, t, !1));
      }
    }
  return r ? TO(r) : n;
}
class na {
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
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof ut)
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
    let { start: n, buffer: r } = this.buffer;
    return this.type = t || r.set.types[r.buffer[e]], this.from = n + r.buffer[e + 1], this.to = n + r.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof ut ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
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
    let { buffer: r } = this.buffer, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, n);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
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
    return this.buffer ? n & Ze.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Ze.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Ze.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
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
      let r = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != r)
        return this.yieldBuf(t.findChild(
          r,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let r = t.buffer[this.index + 3];
      if (r < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
        return this.yieldBuf(r);
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
    let t, n, { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (r.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: t, parent: n } = r);
    } else
      ({ index: t, _parent: n } = this._tree);
    for (; n; { index: t, _parent: n } = n)
      if (t > -1)
        for (let s = t + e, o = e < 0 ? -1 : n._tree.children.length; s != o; s += e) {
          let l = n._tree.children[s];
          if (this.mode & Ze.IncludeAnonymous || l instanceof yi || !l.type.isAnonymous || iu(l))
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
      e: for (let r = this.index, s = this.stack.length; s >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == r) {
            if (r == this.index)
              return o;
            t = o, n = s + 1;
            break e;
          }
        r = this.stack[--s];
      }
    for (let r = n; r < this.stack.length; r++)
      t = new jt(this.buffer, t, this.stack[r]);
    return this.bufferNode = new jt(this.buffer, t, this.index);
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
      let r = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (r = !0);
      }
      for (; ; ) {
        if (r && t && t(this), r = this.type.isAnonymous, !n)
          return;
        if (this.nextSibling())
          break;
        this.parent(), n--, r = !0;
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
      return ia(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: n } = t.set;
    for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
      if (s < 0)
        return ia(this._tree, e, r);
      let o = n[t.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[r] && e[r] != o.name)
          return !1;
        r--;
      }
    }
    return !0;
  }
}
function iu(i) {
  return i.children.some((e) => e instanceof yi || !e.type.isAnonymous || iu(e));
}
function pS(i) {
  var e;
  let { buffer: t, nodeSet: n, maxBufferLength: r = _O, reused: s = [], minRepeatType: o = n.types.length } = i, l = Array.isArray(t) ? new tu(t, t.length) : t, a = n.types, u = 0, c = 0;
  function h(S, k, w, P, A, U) {
    let { id: L, start: T, end: Q, size: $ } = l, z = c, G = u;
    for (; $ < 0; )
      if (l.next(), $ == -1) {
        let ce = s[L];
        w.push(ce), P.push(T - S);
        return;
      } else if ($ == -3) {
        u = L;
        return;
      } else if ($ == -4) {
        c = L;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${$}`);
    let V = a[L], oe, J, ue = T - S;
    if (Q - T <= r && (J = m(l.pos - k, A))) {
      let ce = new Uint16Array(J.size - J.skip), he = l.pos - J.size, xe = ce.length;
      for (; l.pos > he; )
        xe = g(J.start, ce, xe);
      oe = new yi(ce, Q - J.start, n), ue = J.start - S;
    } else {
      let ce = l.pos - $;
      l.next();
      let he = [], xe = [], Oe = L >= o ? L : -1, tt = 0, E = Q;
      for (; l.pos > ce; )
        Oe >= 0 && l.id == Oe && l.size >= 0 ? (l.end <= E - r && (p(he, xe, T, tt, l.end, E, Oe, z, G), tt = he.length, E = l.end), l.next()) : U > 2500 ? f(T, ce, he, xe) : h(T, ce, he, xe, Oe, U + 1);
      if (Oe >= 0 && tt > 0 && tt < he.length && p(he, xe, T, tt, T, E, Oe, z, G), he.reverse(), xe.reverse(), Oe > -1 && tt > 0) {
        let H = d(V, G);
        oe = nu(V, he, xe, 0, he.length, 0, Q - T, H, H);
      } else
        oe = O(V, he, xe, Q - T, z - Q, G);
    }
    w.push(oe), P.push(ue);
  }
  function f(S, k, w, P) {
    let A = [], U = 0, L = -1;
    for (; l.pos > k; ) {
      let { id: T, start: Q, end: $, size: z } = l;
      if (z > 4)
        l.next();
      else {
        if (L > -1 && Q < L)
          break;
        L < 0 && (L = $ - r), A.push(T, Q, $), U++, l.next();
      }
    }
    if (U) {
      let T = new Uint16Array(U * 4), Q = A[A.length - 2];
      for (let $ = A.length - 3, z = 0; $ >= 0; $ -= 3)
        T[z++] = A[$], T[z++] = A[$ + 1] - Q, T[z++] = A[$ + 2] - Q, T[z++] = z;
      w.push(new yi(T, A[2] - Q, n)), P.push(Q - S);
    }
  }
  function d(S, k) {
    return (w, P, A) => {
      let U = 0, L = w.length - 1, T, Q;
      if (L >= 0 && (T = w[L]) instanceof Te) {
        if (!L && T.type == S && T.length == A)
          return T;
        (Q = T.prop(te.lookAhead)) && (U = P[L] + T.length + Q);
      }
      return O(S, w, P, A, U, k);
    };
  }
  function p(S, k, w, P, A, U, L, T, Q) {
    let $ = [], z = [];
    for (; S.length > P; )
      $.push(S.pop()), z.push(k.pop() + w - A);
    S.push(O(n.types[L], $, z, U - A, T - U, Q)), k.push(A - w);
  }
  function O(S, k, w, P, A, U, L) {
    if (U) {
      let T = [te.contextHash, U];
      L = L ? [T].concat(L) : [T];
    }
    if (A > 25) {
      let T = [te.lookAhead, A];
      L = L ? [T].concat(L) : [T];
    }
    return new Te(S, k, w, P, L);
  }
  function m(S, k) {
    let w = l.fork(), P = 0, A = 0, U = 0, L = w.end - r, T = { size: 0, start: 0, skip: 0 };
    e: for (let Q = w.pos - S; w.pos > Q; ) {
      let $ = w.size;
      if (w.id == k && $ >= 0) {
        T.size = P, T.start = A, T.skip = U, U += 4, P += 4, w.next();
        continue;
      }
      let z = w.pos - $;
      if ($ < 0 || z < Q || w.start < L)
        break;
      let G = w.id >= o ? 4 : 0, V = w.start;
      for (w.next(); w.pos > z; ) {
        if (w.size < 0)
          if (w.size == -3)
            G += 4;
          else
            break e;
        else w.id >= o && (G += 4);
        w.next();
      }
      A = V, P += $, U += G;
    }
    return (k < 0 || P == S) && (T.size = P, T.start = A, T.skip = U), T.size > 4 ? T : void 0;
  }
  function g(S, k, w) {
    let { id: P, start: A, end: U, size: L } = l;
    if (l.next(), L >= 0 && P < o) {
      let T = w;
      if (L > 4) {
        let Q = l.pos - (L - 4);
        for (; l.pos > Q; )
          w = g(S, k, w);
      }
      k[--w] = T, k[--w] = U - S, k[--w] = A - S, k[--w] = P;
    } else L == -3 ? u = P : L == -4 && (c = P);
    return w;
  }
  let y = [], b = [];
  for (; l.pos > 0; )
    h(i.start || 0, i.bufferStart || 0, y, b, -1, 0);
  let x = (e = i.length) !== null && e !== void 0 ? e : y.length ? b[0] + y[0].length : 0;
  return new Te(a[i.topID], y.reverse(), b.reverse(), x);
}
const mh = /* @__PURE__ */ new WeakMap();
function bs(i, e) {
  if (!i.isAnonymous || e instanceof yi || e.type != i)
    return 1;
  let t = mh.get(e);
  if (t == null) {
    t = 1;
    for (let n of e.children) {
      if (n.type != i || !(n instanceof Te)) {
        t = 1;
        break;
      }
      t += bs(i, n);
    }
    mh.set(e, t);
  }
  return t;
}
function nu(i, e, t, n, r, s, o, l, a) {
  let u = 0;
  for (let p = n; p < r; p++)
    u += bs(i, e[p]);
  let c = Math.ceil(
    u * 1.5 / 8
    /* Balance.BranchFactor */
  ), h = [], f = [];
  function d(p, O, m, g, y) {
    for (let b = m; b < g; ) {
      let x = b, S = O[b], k = bs(i, p[b]);
      for (b++; b < g; b++) {
        let w = bs(i, p[b]);
        if (k + w >= c)
          break;
        k += w;
      }
      if (b == x + 1) {
        if (k > c) {
          let w = p[x];
          d(w.children, w.positions, 0, w.children.length, O[x] + y);
          continue;
        }
        h.push(p[x]);
      } else {
        let w = O[b - 1] + p[b - 1].length - S;
        h.push(nu(i, p, O, x, b, S, w, null, a));
      }
      f.push(S + y - s);
    }
  }
  return d(e, t, n, r, 0), (l || a)(h, f, o);
}
class OS {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, n) {
    let r = this.map.get(e);
    r || this.map.set(e, r = /* @__PURE__ */ new Map()), r.set(t, n);
  }
  getBuffer(e, t) {
    let n = this.map.get(e);
    return n && n.get(t);
  }
  /**
  Set the value for this syntax node.
  */
  set(e, t) {
    e instanceof jt ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof ut && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof jt ? this.getBuffer(e.context.buffer, e.index) : e instanceof ut ? this.map.get(e.tree) : void 0;
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
class Zi {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, n, r, s = !1, o = !1) {
    this.from = e, this.to = t, this.tree = n, this.offset = r, this.open = (s ? 1 : 0) | (o ? 2 : 0);
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
    let r = [new Zi(0, e.length, e, 0, !1, n)];
    for (let s of t)
      s.to > e.length && r.push(s);
    return r;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, n = 128) {
    if (!t.length)
      return e;
    let r = [], s = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, u = 0; ; l++) {
      let c = l < t.length ? t[l] : null, h = c ? c.fromA : 1e9;
      if (h - a >= n)
        for (; o && o.from < h; ) {
          let f = o;
          if (a >= f.from || h <= f.to || u) {
            let d = Math.max(f.from, a) - u, p = Math.min(f.to, h) - u;
            f = d >= p ? null : new Zi(d, p, f.tree, f.offset + u, l > 0, !!c);
          }
          if (f && r.push(f), o.to > h)
            break;
          o = s < e.length ? e[s++] : null;
        }
      if (!c)
        break;
      a = c.toA, u = c.toA - c.toB;
    }
    return r;
  }
}
class RO {
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
    return typeof e == "string" && (e = new mS(e)), n = n ? n.length ? n.map((r) => new Fo(r.from, r.to)) : [new Fo(0, 0)] : [new Fo(0, e.length)], this.createParse(e, t || [], n);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, n) {
    let r = this.startParse(e, t, n);
    for (; ; ) {
      let s = r.advance();
      if (s)
        return s;
    }
  }
}
class mS {
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
new te({ perNode: !0 });
let gS = 0;
class vt {
  /**
  @internal
  */
  constructor(e, t, n, r) {
    this.name = e, this.set = t, this.base = n, this.modified = r, this.id = gS++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let n = typeof e == "string" ? e : "?";
    if (e instanceof vt && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let r = new vt(n, [], null, []);
    if (r.set.push(r), t)
      for (let s of t.set)
        r.set.push(s);
    return r;
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
    let t = new Ls(e);
    return (n) => n.modified.indexOf(t) > -1 ? n : Ls.get(n.base || n, n.modified.concat(t).sort((r, s) => r.id - s.id));
  }
}
let yS = 0;
class Ls {
  constructor(e) {
    this.name = e, this.instances = [], this.id = yS++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let n = t[0].instances.find((l) => l.base == e && vS(t, l.modified));
    if (n)
      return n;
    let r = [], s = new vt(e.name, r, e, t);
    for (let l of t)
      l.instances.push(s);
    let o = bS(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          r.push(Ls.get(l, a));
    return s;
  }
}
function vS(i, e) {
  return i.length == e.length && i.every((t, n) => t == e[n]);
}
function bS(i) {
  let e = [[]];
  for (let t = 0; t < i.length; t++)
    for (let n = 0, r = e.length; n < r; n++)
      e.push(e[n].concat(i[t]));
  return e.sort((t, n) => n.length - t.length);
}
function MO(i) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in i) {
    let n = i[t];
    Array.isArray(n) || (n = [n]);
    for (let r of t.split(" "))
      if (r) {
        let s = [], o = 2, l = r;
        for (let h = 0; ; ) {
          if (l == "..." && h > 0 && h + 3 == r.length) {
            o = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!f)
            throw new RangeError("Invalid path: " + r);
          if (s.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), h += f[0].length, h == r.length)
            break;
          let d = r[h++];
          if (h == r.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + r);
          l = r.slice(h);
        }
        let a = s.length - 1, u = s[a];
        if (!u)
          throw new RangeError("Invalid path: " + r);
        let c = new Bs(n, o, a > 0 ? s.slice(0, a) : null);
        e[u] = c.sort(e[u]);
      }
  }
  return ZO.add(e);
}
const ZO = new te();
class Bs {
  constructor(e, t, n, r) {
    this.tags = e, this.mode = t, this.context = n, this.next = r;
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
Bs.empty = new Bs([], 2, null);
function DO(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of i)
    if (!Array.isArray(s.tag))
      t[s.tag.id] = s.class;
    else
      for (let o of s.tag)
        t[o.id] = s.class;
  let { scope: n, all: r = null } = e || {};
  return {
    style: (s) => {
      let o = r;
      for (let l of s)
        for (let a of l.set) {
          let u = t[a.id];
          if (u) {
            o = o ? o + " " + u : u;
            break;
          }
        }
      return o;
    },
    scope: n
  };
}
function SS(i, e) {
  let t = null;
  for (let n of i) {
    let r = n.style(e);
    r && (t = t ? t + " " + r : r);
  }
  return t;
}
function xS(i, e, t, n = 0, r = i.length) {
  let s = new wS(n, Array.isArray(e) ? e : [e], t);
  s.highlightRange(i.cursor(), n, r, "", s.highlighters), s.flush(r);
}
class wS {
  constructor(e, t, n) {
    this.at = e, this.highlighters = t, this.span = n, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, n, r, s) {
    let { type: o, from: l, to: a } = e;
    if (l >= n || a <= t)
      return;
    o.isTop && (s = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let u = r, c = kS(e) || Bs.empty, h = SS(s, c.tags);
    if (h && (u && (u += " "), u += h, c.mode == 1 && (r += (r ? " " : "") + h)), this.startSpan(Math.max(t, l), u), c.opaque)
      return;
    let f = e.tree && e.tree.prop(te.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(f.tree.type)), O = e.firstChild();
      for (let m = 0, g = l; ; m++) {
        let y = m < f.overlay.length ? f.overlay[m] : null, b = y ? y.from + l : a, x = Math.max(t, g), S = Math.min(n, b);
        if (x < S && O)
          for (; e.from < S && (this.highlightRange(e, x, S, r, s), this.startSpan(Math.min(S, e.to), u), !(e.to >= b || !e.nextSibling())); )
            ;
        if (!y || b > n)
          break;
        g = y.to + l, g > t && (this.highlightRange(d.cursor(), Math.max(t, y.from + l), Math.min(n, g), "", p), this.startSpan(Math.min(n, g), u));
      }
      O && e.parent();
    } else if (e.firstChild()) {
      f && (r = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= n)
            break;
          this.highlightRange(e, t, n, r, s), this.startSpan(Math.min(n, e.to), u);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function kS(i) {
  let e = i.type.prop(ZO);
  for (; e && e.context && !i.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const R = vt.define, es = R(), ri = R(), gh = R(ri), yh = R(ri), si = R(), ts = R(si), Wo = R(si), Lt = R(), Pi = R(Lt), Zt = R(), Dt = R(), ra = R(), Dn = R(ra), is = R(), v = {
  /**
  A comment.
  */
  comment: es,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: R(es),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: R(es),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: R(es),
  /**
  Any kind of identifier.
  */
  name: ri,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: R(ri),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: gh,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: R(gh),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: yh,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: R(yh),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: R(ri),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: R(ri),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: R(ri),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: R(ri),
  /**
  A literal value.
  */
  literal: si,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: ts,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: R(ts),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: R(ts),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: R(ts),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Wo,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: R(Wo),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: R(Wo),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: R(si),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: R(si),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: R(si),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: R(si),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: R(si),
  /**
  A language keyword.
  */
  keyword: Zt,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: R(Zt),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: R(Zt),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: R(Zt),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: R(Zt),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: R(Zt),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: R(Zt),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: R(Zt),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: R(Zt),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: R(Zt),
  /**
  An operator.
  */
  operator: Dt,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: R(Dt),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: R(Dt),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: R(Dt),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: R(Dt),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: R(Dt),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: R(Dt),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: R(Dt),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: R(Dt),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: R(Dt),
  /**
  Program or markup punctuation.
  */
  punctuation: ra,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: R(ra),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: Dn,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: R(Dn),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: R(Dn),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: R(Dn),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: R(Dn),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Lt,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: Pi,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: R(Pi),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: R(Pi),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: R(Pi),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: R(Pi),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: R(Pi),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: R(Pi),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: R(Lt),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: R(Lt),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: R(Lt),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: R(Lt),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: R(Lt),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: R(Lt),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: R(Lt),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: R(Lt),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: R(),
  /**
  Deleted text.
  */
  deleted: R(),
  /**
  Changed text.
  */
  changed: R(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: R(),
  /**
  Metadata or meta-instruction.
  */
  meta: is,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: R(is),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: R(is),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: R(is),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: vt.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: vt.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: vt.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: vt.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: vt.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: vt.defineModifier("special")
};
for (let i in v) {
  let e = v[i];
  e instanceof vt && (e.name = i);
}
DO([
  { tag: v.link, class: "tok-link" },
  { tag: v.heading, class: "tok-heading" },
  { tag: v.emphasis, class: "tok-emphasis" },
  { tag: v.strong, class: "tok-strong" },
  { tag: v.keyword, class: "tok-keyword" },
  { tag: v.atom, class: "tok-atom" },
  { tag: v.bool, class: "tok-bool" },
  { tag: v.url, class: "tok-url" },
  { tag: v.labelName, class: "tok-labelName" },
  { tag: v.inserted, class: "tok-inserted" },
  { tag: v.deleted, class: "tok-deleted" },
  { tag: v.literal, class: "tok-literal" },
  { tag: v.string, class: "tok-string" },
  { tag: v.number, class: "tok-number" },
  { tag: [v.regexp, v.escape, v.special(v.string)], class: "tok-string2" },
  { tag: v.variableName, class: "tok-variableName" },
  { tag: v.local(v.variableName), class: "tok-variableName tok-local" },
  { tag: v.definition(v.variableName), class: "tok-variableName tok-definition" },
  { tag: v.special(v.variableName), class: "tok-variableName2" },
  { tag: v.definition(v.propertyName), class: "tok-propertyName tok-definition" },
  { tag: v.typeName, class: "tok-typeName" },
  { tag: v.namespace, class: "tok-namespace" },
  { tag: v.className, class: "tok-className" },
  { tag: v.macroName, class: "tok-macroName" },
  { tag: v.propertyName, class: "tok-propertyName" },
  { tag: v.operator, class: "tok-operator" },
  { tag: v.comment, class: "tok-comment" },
  { tag: v.meta, class: "tok-meta" },
  { tag: v.invalid, class: "tok-invalid" },
  { tag: v.punctuation, class: "tok-punctuation" }
]);
var Go;
const Ji = /* @__PURE__ */ new te();
function VO(i) {
  return D.define({
    combine: i ? (e) => e.concat(i) : void 0
  });
}
const ru = /* @__PURE__ */ new te();
class Pt {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, n = [], r = "") {
    this.data = e, this.name = r, ee.prototype.hasOwnProperty("tree") || Object.defineProperty(ee.prototype, "tree", { get() {
      return Ve(this);
    } }), this.parser = t, this.extension = [
      vi.of(this),
      ee.languageData.of((s, o, l) => {
        let a = vh(s, o, l), u = a.type.prop(Ji);
        if (!u)
          return [];
        let c = s.facet(u), h = a.type.prop(ru);
        if (h) {
          let f = a.resolve(o - a.from, l);
          for (let d of h)
            if (d.test(f, s)) {
              let p = s.facet(d.facet);
              return d.type == "replace" ? p : p.concat(c);
            }
        }
        return c;
      })
    ].concat(n);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, n = -1) {
    return vh(e, t, n).type.prop(Ji) == this.data;
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
    let n = [], r = (s, o) => {
      if (s.prop(Ji) == this.data) {
        n.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(te.mounted);
      if (l) {
        if (l.tree.prop(Ji) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              n.push({ from: a.from + o, to: a.to + o });
          else
            n.push({ from: o, to: o + s.length });
          return;
        } else if (l.overlay) {
          let a = n.length;
          if (r(l.tree, l.overlay[0].from + o), n.length > a)
            return;
        }
      }
      for (let a = 0; a < s.children.length; a++) {
        let u = s.children[a];
        u instanceof Te && r(u, s.positions[a] + o);
      }
    };
    return r(Ve(e), 0), n;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Pt.setState = /* @__PURE__ */ W.define();
function vh(i, e, t) {
  let n = i.facet(vi), r = Ve(i).topNode;
  if (!n || n.allowsNesting)
    for (let s = r; s; s = s.enter(e, t, Ze.ExcludeBuffers))
      s.type.isTop && (r = s);
  return r;
}
class Is extends Pt {
  constructor(e, t, n) {
    super(e, t, [], n), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = VO(e.languageData);
    return new Is(t, e.parser.configure({
      props: [Ji.add((n) => n.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new Is(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function Ve(i) {
  let e = i.field(Pt.state, !1);
  return e ? e.tree : Te.empty;
}
class PS {
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
let Vn = null;
class js {
  constructor(e, t, n = [], r, s, o, l, a) {
    this.parser = e, this.state = t, this.fragments = n, this.tree = r, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, n) {
    return new js(e, t, [], Te.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new PS(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != Te.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var n;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let r = this.parse.advance();
        if (r)
          if (this.fragments = this.withoutTempSkipped(Zi.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (n = this.parse.stoppedAt) !== null && n !== void 0 ? n : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
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
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Zi.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Vn;
    Vn = this;
    try {
      return e();
    } finally {
      Vn = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = bh(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: n, tree: r, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((u, c, h, f) => a.push({ fromA: u, toA: c, fromB: h, toB: f })), n = Zi.applyChanges(n, a), r = Te.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let u of this.skipped) {
          let c = e.mapPos(u.from, 1), h = e.mapPos(u.to, -1);
          c < h && l.push({ from: c, to: h });
        }
      }
    }
    return new js(this.parser, t, n, r, s, o, l, this.scheduleOn);
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
      let { from: r, to: s } = this.skipped[n];
      r < e.to && s > e.from && (this.fragments = bh(this.fragments, r, s), this.skipped.splice(n--, 1));
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
    return new class extends RO {
      createParse(t, n, r) {
        let s = r[0].from, o = r[r.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = Vn;
            if (a) {
              for (let u of r)
                a.tempSkipped.push(u);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new Te(ct.none, [], [], o - s);
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
    return Vn;
  }
}
function bh(i, e, t) {
  return Zi.applyChanges(i, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class mn {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), n = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, n) || t.takeTree(), new mn(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), n = js.create(e.facet(vi).parser, e, { from: 0, to: t });
    return n.work(20, t) || n.takeTree(), new mn(n);
  }
}
Pt.state = /* @__PURE__ */ Re.define({
  create: mn.init,
  update(i, e) {
    for (let t of e.effects)
      if (t.is(Pt.setState))
        return t.value;
    return e.startState.facet(vi) != e.state.facet(vi) ? mn.init(e.state) : i.apply(e);
  }
});
let LO = (i) => {
  let e = setTimeout(
    () => i(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (LO = (i) => {
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
const Ho = typeof navigator < "u" && (!((Go = navigator.scheduling) === null || Go === void 0) && Go.isInputPending) ? () => navigator.scheduling.isInputPending() : null, QS = /* @__PURE__ */ Pe.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Pt.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Pt.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = LO(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: n, viewport: { to: r } } = this.view, s = n.field(Pt.state);
    if (s.tree == s.context.tree && s.context.isDone(
      r + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Ho ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < r && n.doc.length > r + 1e3, a = s.context.work(() => Ho && Ho() || Date.now() > o, r + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: Pt.setState.of(new mn(s.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Ge(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
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
}), vi = /* @__PURE__ */ D.define({
  combine(i) {
    return i.length ? i[0] : null;
  },
  enables: (i) => [
    Pt.state,
    QS,
    M.contentAttributes.compute([i], (e) => {
      let t = e.facet(i);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class CS {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
const $S = /* @__PURE__ */ D.define(), _r = /* @__PURE__ */ D.define({
  combine: (i) => {
    if (!i.length)
      return "  ";
    let e = i[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
    return e;
  }
});
function zs(i) {
  let e = i.facet(_r);
  return e.charCodeAt(0) == 9 ? i.tabSize * e.length : e.length;
}
function Or(i, e) {
  let t = "", n = i.tabSize, r = i.facet(_r)[0];
  if (r == "	") {
    for (; e >= n; )
      t += "	", e -= n;
    r = " ";
  }
  for (let s = 0; s < e; s++)
    t += r;
  return t;
}
function su(i, e) {
  i instanceof ee && (i = new go(i));
  for (let n of i.state.facet($S)) {
    let r = n(i, e);
    if (r !== void 0)
      return r;
  }
  let t = Ve(i.state);
  return t.length >= e ? _S(i, t, e) : null;
}
class go {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = zs(e);
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
    let n = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: s } = this.options;
    return r != null && r >= n.from && r <= n.to ? s && r == e ? { text: "", from: e } : (t < 0 ? r < e : r <= e) ? { text: n.text.slice(r - n.from), from: r } : { text: n.text.slice(0, r - n.from), from: n.from } : n;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: n, from: r } = this.lineAt(e, t);
    return n.slice(e - r, Math.min(n.length, e + 100 - r));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: n, from: r } = this.lineAt(e, t), s = this.countColumn(n, e - r), o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return o > -1 && (s += o - this.countColumn(n, n.search(/\S|$/))), s;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return Qn(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: n, from: r } = this.lineAt(e, t), s = this.options.overrideIndentation;
    if (s) {
      let o = s(r);
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
const BO = /* @__PURE__ */ new te();
function _S(i, e, t) {
  let n = e.resolveStack(t), r = n.node.enterUnfinishedNodesBefore(t);
  if (r != n.node) {
    let s = [];
    for (let o = r; o != n.node; o = o.parent)
      s.push(o);
    for (let o = s.length - 1; o >= 0; o--)
      n = { node: s[o], next: n };
  }
  return IO(n, i, t);
}
function IO(i, e, t) {
  for (let n = i; n; n = n.next) {
    let r = ES(n.node);
    if (r)
      return r(ou.create(e, t, n));
  }
  return 0;
}
function AS(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function ES(i) {
  let e = i.type.prop(BO);
  if (e)
    return e;
  let t = i.firstChild, n;
  if (t && (n = t.type.prop(te.closedBy))) {
    let r = i.lastChild, s = r && n.indexOf(r.name) > -1;
    return (o) => jO(o, !0, 1, void 0, s && !AS(o) ? r.from : void 0);
  }
  return i.parent == null ? TS : null;
}
function TS() {
  return 0;
}
class ou extends go {
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
    return new ou(e, t, n);
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
      if (RS(n, e))
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
    return IO(this.context.next, this.base, this.pos);
  }
}
function RS(i, e) {
  for (let t = e; t; t = t.parent)
    if (i == t)
      return !0;
  return !1;
}
function MS(i) {
  let e = i.node, t = e.childAfter(e.from), n = e.lastChild;
  if (!t)
    return null;
  let r = i.options.simulateBreak, s = i.state.doc.lineAt(t.from), o = r == null || r <= s.from ? s.to : Math.min(s.to, r);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == n)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let u = /^ */.exec(s.text.slice(t.to - s.from))[0].length;
      return { from: t.from, to: t.to + u };
    }
    l = a.to;
  }
}
function ZS({ closing: i, align: e = !0, units: t = 1 }) {
  return (n) => jO(n, e, t, i);
}
function jO(i, e, t, n, r) {
  let s = i.textAfter, o = s.match(/^\s*/)[0].length, l = n && s.slice(o, o + n.length) == n || r == i.pos + o, a = e ? MS(i) : null;
  return a ? l ? i.column(a.from) : i.column(a.to) : i.baseIndent + (l ? 0 : i.unit * t);
}
const DS = (i) => i.baseIndent;
function Ko({ except: i, units: e = 1 } = {}) {
  return (t) => {
    let n = i && i.test(t.textAfter);
    return t.baseIndent + (n ? 0 : e * t.unit);
  };
}
const VS = 200;
function LS() {
  return ee.transactionFilter.of((i) => {
    if (!i.docChanged || !i.isUserEvent("input.type") && !i.isUserEvent("input.complete"))
      return i;
    let e = i.startState.languageDataAt("indentOnInput", i.startState.selection.main.head);
    if (!e.length)
      return i;
    let t = i.newDoc, { head: n } = i.newSelection.main, r = t.lineAt(n);
    if (n > r.from + VS)
      return i;
    let s = t.sliceString(r.from, n);
    if (!e.some((u) => u.test(s)))
      return i;
    let { state: o } = i, l = -1, a = [];
    for (let { head: u } of o.selection.ranges) {
      let c = o.doc.lineAt(u);
      if (c.from == l)
        continue;
      l = c.from;
      let h = su(o, c.from);
      if (h == null)
        continue;
      let f = /^\s*/.exec(c.text)[0], d = Or(o, h);
      f != d && a.push({ from: c.from, to: c.from + f.length, insert: d });
    }
    return a.length ? [i, { changes: a, sequential: !0 }] : i;
  });
}
const BS = /* @__PURE__ */ D.define(), zO = /* @__PURE__ */ new te();
function IS(i) {
  let e = i.firstChild, t = i.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? i.to : t.from } : null;
}
function jS(i, e, t) {
  let n = Ve(i);
  if (n.length < t)
    return null;
  let r = n.resolveStack(t, 1), s = null;
  for (let o = r; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t)
      continue;
    if (s && l.from < e)
      break;
    let a = l.type.prop(zO);
    if (a && (l.to < n.length - 50 || n.length == i.doc.length || !zS(l))) {
      let u = a(l, i);
      u && u.from <= t && u.from >= e && u.to > t && (s = u);
    }
  }
  return s;
}
function zS(i) {
  let e = i.lastChild;
  return e && e.to == i.to && e.type.isError;
}
function qs(i, e, t) {
  for (let n of i.facet(BS)) {
    let r = n(i, e, t);
    if (r)
      return r;
  }
  return jS(i, e, t);
}
function qO(i, e) {
  let t = e.mapPos(i.from, 1), n = e.mapPos(i.to, -1);
  return t >= n ? void 0 : { from: t, to: n };
}
const yo = /* @__PURE__ */ W.define({ map: qO }), Ar = /* @__PURE__ */ W.define({ map: qO });
function NO(i) {
  let e = [];
  for (let { head: t } of i.state.selection.ranges)
    e.some((n) => n.from <= t && n.to >= t) || e.push(i.lineBlockAt(t));
  return e;
}
const zi = /* @__PURE__ */ Re.define({
  create() {
    return q.none;
  },
  update(i, e) {
    i = i.map(e.changes);
    for (let t of e.effects)
      if (t.is(yo) && !qS(i, t.value.from, t.value.to)) {
        let { preparePlaceholder: n } = e.state.facet(UO), r = n ? q.replace({ widget: new GS(n(e.state, t.value)) }) : Sh;
        i = i.update({ add: [r.range(t.value.from, t.value.to)] });
      } else t.is(Ar) && (i = i.update({
        filter: (n, r) => t.value.from != n || t.value.to != r,
        filterFrom: t.value.from,
        filterTo: t.value.to
      }));
    if (e.selection) {
      let t = !1, { head: n } = e.selection.main;
      i.between(n, n, (r, s) => {
        r < n && s > n && (t = !0);
      }), t && (i = i.update({
        filterFrom: n,
        filterTo: n,
        filter: (r, s) => s <= n || r >= n
      }));
    }
    return i;
  },
  provide: (i) => M.decorations.from(i),
  toJSON(i, e) {
    let t = [];
    return i.between(0, e.doc.length, (n, r) => {
      t.push(n, r);
    }), t;
  },
  fromJSON(i) {
    if (!Array.isArray(i) || i.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < i.length; ) {
      let n = i[t++], r = i[t++];
      if (typeof n != "number" || typeof r != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(Sh.range(n, r));
    }
    return q.set(e, !0);
  }
});
function Ns(i, e, t) {
  var n;
  let r = null;
  return (n = i.field(zi, !1)) === null || n === void 0 || n.between(e, t, (s, o) => {
    (!r || r.from > s) && (r = { from: s, to: o });
  }), r;
}
function qS(i, e, t) {
  let n = !1;
  return i.between(e, e, (r, s) => {
    r == e && s == t && (n = !0);
  }), n;
}
function XO(i, e) {
  return i.field(zi, !1) ? e : e.concat(W.appendConfig.of(FO()));
}
const NS = (i) => {
  for (let e of NO(i)) {
    let t = qs(i.state, e.from, e.to);
    if (t)
      return i.dispatch({ effects: XO(i.state, [yo.of(t), YO(i, t)]) }), !0;
  }
  return !1;
}, XS = (i) => {
  if (!i.state.field(zi, !1))
    return !1;
  let e = [];
  for (let t of NO(i)) {
    let n = Ns(i.state, t.from, t.to);
    n && e.push(Ar.of(n), YO(i, n, !1));
  }
  return e.length && i.dispatch({ effects: e }), e.length > 0;
};
function YO(i, e, t = !0) {
  let n = i.state.doc.lineAt(e.from).number, r = i.state.doc.lineAt(e.to).number;
  return M.announce.of(`${i.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${n} ${i.state.phrase("to")} ${r}.`);
}
const YS = (i) => {
  let { state: e } = i, t = [];
  for (let n = 0; n < e.doc.length; ) {
    let r = i.lineBlockAt(n), s = qs(e, r.from, r.to);
    s && t.push(yo.of(s)), n = (s ? i.lineBlockAt(s.to) : r).to + 1;
  }
  return t.length && i.dispatch({ effects: XO(i.state, t) }), !!t.length;
}, US = (i) => {
  let e = i.state.field(zi, !1);
  if (!e || !e.size)
    return !1;
  let t = [];
  return e.between(0, i.state.doc.length, (n, r) => {
    t.push(Ar.of({ from: n, to: r }));
  }), i.dispatch({ effects: t }), !0;
}, FS = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: NS },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: XS },
  { key: "Ctrl-Alt-[", run: YS },
  { key: "Ctrl-Alt-]", run: US }
], WS = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, UO = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, WS);
  }
});
function FO(i) {
  return [zi, JS];
}
function WO(i, e) {
  let { state: t } = i, n = t.facet(UO), r = (o) => {
    let l = i.lineBlockAt(i.posAtDOM(o.target)), a = Ns(i.state, l.from, l.to);
    a && i.dispatch({ effects: Ar.of(a) }), o.preventDefault();
  };
  if (n.placeholderDOM)
    return n.placeholderDOM(i, r, e);
  let s = document.createElement("span");
  return s.textContent = n.placeholderText, s.setAttribute("aria-label", t.phrase("folded code")), s.title = t.phrase("unfold"), s.className = "cm-foldPlaceholder", s.onclick = r, s;
}
const Sh = /* @__PURE__ */ q.replace({ widget: /* @__PURE__ */ new class extends Wt {
  toDOM(i) {
    return WO(i, null);
  }
}() });
class GS extends Wt {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return WO(e, this.value);
  }
}
const HS = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Jo extends Ft {
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
function KS(i = {}) {
  let e = Object.assign(Object.assign({}, HS), i), t = new Jo(e, !0), n = new Jo(e, !1), r = Pe.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(vi) != o.state.facet(vi) || o.startState.field(zi, !1) != o.state.field(zi, !1) || Ve(o.startState) != Ve(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new pi();
      for (let a of o.viewportLineBlocks) {
        let u = Ns(o.state, a.from, a.to) ? n : qs(o.state, a.from, a.to) ? t : null;
        u && l.add(a.from, a.from, u);
      }
      return l.finish();
    }
  }), { domEventHandlers: s } = e;
  return [
    r,
    QO({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(r)) === null || l === void 0 ? void 0 : l.markers) || ne.empty;
      },
      initialSpacer() {
        return new Jo(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, s), { click: (o, l, a) => {
        if (s.click && s.click(o, l, a))
          return !0;
        let u = Ns(o.state, l.from, l.to);
        if (u)
          return o.dispatch({ effects: Ar.of(u) }), !0;
        let c = qs(o.state, l.from, l.to);
        return c ? (o.dispatch({ effects: yo.of(c) }), !0) : !1;
      } })
    }),
    FO()
  ];
}
const JS = /* @__PURE__ */ M.baseTheme({
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
class Er {
  constructor(e, t) {
    this.specs = e;
    let n;
    function r(l) {
      let a = Oi.newName();
      return (n || (n = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const s = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Pt ? (l) => l.prop(Ji) == o.data : o ? (l) => l == o : void 0, this.style = DO(e.map((l) => ({
      tag: l.tag,
      class: l.class || r(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = n ? new Oi(n) : null, this.themeType = t.themeType;
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
    return new Er(e, t || {});
  }
}
const sa = /* @__PURE__ */ D.define(), GO = /* @__PURE__ */ D.define({
  combine(i) {
    return i.length ? [i[0]] : null;
  }
});
function el(i) {
  let e = i.facet(sa);
  return e.length ? e : i.facet(GO);
}
function lu(i, e) {
  let t = [tx], n;
  return i instanceof Er && (i.module && t.push(M.styleModule.of(i.module)), n = i.themeType), e != null && e.fallback ? t.push(GO.of(i)) : n ? t.push(sa.computeN([M.darkTheme], (r) => r.facet(M.darkTheme) == (n == "dark") ? [i] : [])) : t.push(sa.of(i)), t;
}
class ex {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Ve(e.state), this.decorations = this.buildDeco(e, el(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = Ve(e.state), n = el(e.state), r = n != el(e.startState), { viewport: s } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !r && t.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = s.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return q.none;
    let n = new pi();
    for (let { from: r, to: s } of e.visibleRanges)
      xS(this.tree, t, (o, l, a) => {
        n.add(o, l, this.markCache[a] || (this.markCache[a] = q.mark({ class: a })));
      }, r, s);
    return n.finish();
  }
}
const tx = /* @__PURE__ */ xi.high(/* @__PURE__ */ Pe.fromClass(ex, {
  decorations: (i) => i.decorations
})), HO = /* @__PURE__ */ Er.define([
  {
    tag: v.meta,
    color: "#404740"
  },
  {
    tag: v.link,
    textDecoration: "underline"
  },
  {
    tag: v.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: v.emphasis,
    fontStyle: "italic"
  },
  {
    tag: v.strong,
    fontWeight: "bold"
  },
  {
    tag: v.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: v.keyword,
    color: "#708"
  },
  {
    tag: [v.atom, v.bool, v.url, v.contentSeparator, v.labelName],
    color: "#219"
  },
  {
    tag: [v.literal, v.inserted],
    color: "#164"
  },
  {
    tag: [v.string, v.deleted],
    color: "#a11"
  },
  {
    tag: [v.regexp, v.escape, /* @__PURE__ */ v.special(v.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ v.definition(v.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ v.local(v.variableName),
    color: "#30a"
  },
  {
    tag: [v.typeName, v.namespace],
    color: "#085"
  },
  {
    tag: v.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ v.special(v.variableName), v.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ v.definition(v.propertyName),
    color: "#00c"
  },
  {
    tag: v.comment,
    color: "#940"
  },
  {
    tag: v.invalid,
    color: "#f00"
  }
]), ix = /* @__PURE__ */ M.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), KO = 1e4, JO = "()[]{}", em = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, {
      afterCursor: !0,
      brackets: JO,
      maxScanDistance: KO,
      renderMatch: sx
    });
  }
}), nx = /* @__PURE__ */ q.mark({ class: "cm-matchingBracket" }), rx = /* @__PURE__ */ q.mark({ class: "cm-nonmatchingBracket" });
function sx(i) {
  let e = [], t = i.matched ? nx : rx;
  return e.push(t.range(i.start.from, i.start.to)), i.end && e.push(t.range(i.end.from, i.end.to)), e;
}
const ox = /* @__PURE__ */ Re.define({
  create() {
    return q.none;
  },
  update(i, e) {
    if (!e.docChanged && !e.selection)
      return i;
    let t = [], n = e.state.facet(em);
    for (let r of e.state.selection.ranges) {
      if (!r.empty)
        continue;
      let s = zt(e.state, r.head, -1, n) || r.head > 0 && zt(e.state, r.head - 1, 1, n) || n.afterCursor && (zt(e.state, r.head, 1, n) || r.head < e.state.doc.length && zt(e.state, r.head + 1, -1, n));
      s && (t = t.concat(n.renderMatch(s, e.state)));
    }
    return q.set(t, !0);
  },
  provide: (i) => M.decorations.from(i)
}), lx = [
  ox,
  ix
];
function ax(i = {}) {
  return [em.of(i), lx];
}
const ux = /* @__PURE__ */ new te();
function oa(i, e, t) {
  let n = i.prop(e < 0 ? te.openedBy : te.closedBy);
  if (n)
    return n;
  if (i.name.length == 1) {
    let r = t.indexOf(i.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0))
      return [t[r + e]];
  }
  return null;
}
function la(i) {
  let e = i.type.prop(ux);
  return e ? e(i.node) : i;
}
function zt(i, e, t, n = {}) {
  let r = n.maxScanDistance || KO, s = n.brackets || JO, o = Ve(i), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let u = oa(a.type, t, s);
    if (u && a.from < a.to) {
      let c = la(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return cx(i, e, t, a, c, u, s);
    }
  }
  return hx(i, e, t, o, l.type, r, s);
}
function cx(i, e, t, n, r, s, o) {
  let l = n.parent, a = { from: r.from, to: r.to }, u = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(n.from) : c.childAfter(n.to)))
    do
      if (t < 0 ? c.to <= n.from : c.from >= n.to) {
        if (u == 0 && s.indexOf(c.type.name) > -1 && c.from < c.to) {
          let h = la(c);
          return { start: a, end: h ? { from: h.from, to: h.to } : void 0, matched: !0 };
        } else if (oa(c.type, t, o))
          u++;
        else if (oa(c.type, -t, o)) {
          if (u == 0) {
            let h = la(c);
            return {
              start: a,
              end: h && h.from < h.to ? { from: h.from, to: h.to } : void 0,
              matched: !1
            };
          }
          u--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function hx(i, e, t, n, r, s, o) {
  let l = t < 0 ? i.sliceDoc(e - 1, e) : i.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let u = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = i.doc.iterRange(e, t > 0 ? i.doc.length : 0), h = 0;
  for (let f = 0; !c.next().done && f <= s; ) {
    let d = c.value;
    t < 0 && (f += d.length);
    let p = e + f * t;
    for (let O = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1; O != m; O += t) {
      let g = o.indexOf(d[O]);
      if (!(g < 0 || n.resolveInner(p + O, 1).type != r))
        if (g % 2 == 0 == t > 0)
          h++;
        else {
          if (h == 1)
            return { start: u, end: { from: p + O, to: p + O + 1 }, matched: g >> 1 == a >> 1 };
          h--;
        }
    }
    t > 0 && (f += d.length);
  }
  return c.done ? { start: u, matched: !1 } : null;
}
const fx = /* @__PURE__ */ Object.create(null), xh = [ct.none], wh = [], kh = /* @__PURE__ */ Object.create(null), dx = /* @__PURE__ */ Object.create(null);
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
  dx[i] = /* @__PURE__ */ px(fx, e);
function tl(i, e) {
  wh.indexOf(i) > -1 || (wh.push(i), console.warn(e));
}
function px(i, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let u of l.split(".")) {
      let c = i[u] || v[u];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : tl(u, `Modifier ${u} used at start of tag`) : a.length ? tl(u, `Tag ${u} used as modifier`) : a = Array.isArray(c) ? c : [c] : tl(u, `Unknown highlighting tag ${u}`);
    }
    for (let u of a)
      t.push(u);
  }
  if (!t.length)
    return 0;
  let n = e.replace(/ /g, "_"), r = n + " " + t.map((l) => l.id), s = kh[r];
  if (s)
    return s.id;
  let o = kh[r] = ct.define({
    id: xh.length,
    name: n,
    props: [MO({ [n]: t })]
  });
  return xh.push(o), o.id;
}
be.RTL, be.LTR;
const Ox = (i) => {
  let { state: e } = i, t = e.doc.lineAt(e.selection.main.from), n = uu(i.state, t.from);
  return n.line ? mx(i) : n.block ? yx(i) : !1;
};
function au(i, e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly)
      return !1;
    let r = i(e, t);
    return r ? (n(t.update(r)), !0) : !1;
  };
}
const mx = /* @__PURE__ */ au(
  Sx,
  0
  /* CommentOption.Toggle */
), gx = /* @__PURE__ */ au(
  tm,
  0
  /* CommentOption.Toggle */
), yx = /* @__PURE__ */ au(
  (i, e) => tm(i, e, bx(e)),
  0
  /* CommentOption.Toggle */
);
function uu(i, e) {
  let t = i.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const Ln = 50;
function vx(i, { open: e, close: t }, n, r) {
  let s = i.sliceDoc(n - Ln, n), o = i.sliceDoc(r, r + Ln), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, u = s.length - l;
  if (s.slice(u - e.length, u) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: r + a, margin: a && 1 }
    };
  let c, h;
  r - n <= 2 * Ln ? c = h = i.sliceDoc(n, r) : (c = i.sliceDoc(n, n + Ln), h = i.sliceDoc(r - Ln, r));
  let f = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(h)[0].length, p = h.length - d - t.length;
  return c.slice(f, f + e.length) == e && h.slice(p, p + t.length) == t ? {
    open: {
      pos: n + f + e.length,
      margin: /\s/.test(c.charAt(f + e.length)) ? 1 : 0
    },
    close: {
      pos: r - d - t.length,
      margin: /\s/.test(h.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function bx(i) {
  let e = [];
  for (let t of i.selection.ranges) {
    let n = i.doc.lineAt(t.from), r = t.to <= n.to ? n : i.doc.lineAt(t.to);
    r.from > n.from && r.from == t.to && (r = t.to == n.to + 1 ? n : i.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > n.from ? e[s].to = r.to : e.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: r.to });
  }
  return e;
}
function tm(i, e, t = e.selection.ranges) {
  let n = t.map((s) => uu(e, s.from).block);
  if (!n.every((s) => s))
    return null;
  let r = t.map((s, o) => vx(e, n[o], s.from, s.to));
  if (i != 2 && !r.every((s) => s))
    return { changes: e.changes(t.map((s, o) => r[o] ? [] : [{ from: s.from, insert: n[o].open + " " }, { from: s.to, insert: " " + n[o].close }])) };
  if (i != 1 && r.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < r.length; o++)
      if (l = r[o]) {
        let a = n[o], { open: u, close: c } = l;
        s.push({ from: u.pos - a.open.length, to: u.pos + u.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: s };
  }
  return null;
}
function Sx(i, e, t = e.selection.ranges) {
  let n = [], r = -1;
  for (let { from: s, to: o } of t) {
    let l = n.length, a = 1e9, u = uu(e, s).line;
    if (u) {
      for (let c = s; c <= o; ) {
        let h = e.doc.lineAt(c);
        if (h.from > r && (s == o || o > h.from)) {
          r = h.from;
          let f = /^\s*/.exec(h.text)[0].length, d = f == h.length, p = h.text.slice(f, f + u.length) == u ? f : -1;
          f < h.text.length && f < a && (a = f), n.push({ line: h, comment: p, token: u, indent: f, empty: d, single: !1 });
        }
        c = h.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < n.length; c++)
          n[c].indent < n[c].line.text.length && (n[c].indent = a);
      n.length == l + 1 && (n[l].single = !0);
    }
  }
  if (i != 2 && n.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: a, indent: u, empty: c, single: h } of n)
      (h || !c) && s.push({ from: l.from + u, insert: a + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (i != 1 && n.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: a } of n)
      if (l >= 0) {
        let u = o.from + l, c = u + a.length;
        o.text[c - o.from] == " " && c++, s.push({ from: u, to: c });
      }
    return { changes: s };
  }
  return null;
}
const aa = /* @__PURE__ */ ii.define(), xx = /* @__PURE__ */ ii.define(), wx = /* @__PURE__ */ D.define(), im = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, t) => t
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r)
    });
  }
}), nm = /* @__PURE__ */ Re.define({
  create() {
    return qt.empty;
  },
  update(i, e) {
    let t = e.state.facet(im), n = e.annotation(aa);
    if (n) {
      let a = lt.fromTransaction(e, n.selection), u = n.side, c = u == 0 ? i.undone : i.done;
      return a ? c = Xs(c, c.length, t.minDepth, a) : c = lm(c, e.startState.selection), new qt(u == 0 ? n.rest : c, u == 0 ? c : n.rest);
    }
    let r = e.annotation(xx);
    if ((r == "full" || r == "before") && (i = i.isolate()), e.annotation(Ee.addToHistory) === !1)
      return e.changes.empty ? i : i.addMapping(e.changes.desc);
    let s = lt.fromTransaction(e), o = e.annotation(Ee.time), l = e.annotation(Ee.userEvent);
    return s ? i = i.addChanges(s, o, l, t, e) : e.selection && (i = i.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (r == "full" || r == "after") && (i = i.isolate()), i;
  },
  toJSON(i) {
    return { done: i.done.map((e) => e.toJSON()), undone: i.undone.map((e) => e.toJSON()) };
  },
  fromJSON(i) {
    return new qt(i.done.map(lt.fromJSON), i.undone.map(lt.fromJSON));
  }
});
function rm(i = {}) {
  return [
    nm,
    im.of(i),
    M.domEventHandlers({
      beforeinput(e, t) {
        let n = e.inputType == "historyUndo" ? sm : e.inputType == "historyRedo" ? ua : null;
        return n ? (e.preventDefault(), n(t)) : !1;
      }
    })
  ];
}
function vo(i, e) {
  return function({ state: t, dispatch: n }) {
    if (!e && t.readOnly)
      return !1;
    let r = t.field(nm, !1);
    if (!r)
      return !1;
    let s = r.pop(i, t, e);
    return s ? (n(s), !0) : !1;
  };
}
const sm = /* @__PURE__ */ vo(0, !1), ua = /* @__PURE__ */ vo(1, !1), kx = /* @__PURE__ */ vo(0, !0), Px = /* @__PURE__ */ vo(1, !0);
class lt {
  constructor(e, t, n, r, s) {
    this.changes = e, this.effects = t, this.mapped = n, this.startSelection = r, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new lt(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, n;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (n = this.startSelection) === null || n === void 0 ? void 0 : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((r) => r.toJSON())
    };
  }
  static fromJSON(e) {
    return new lt(e.changes && Me.fromJSON(e.changes), [], e.mapped && Xt.fromJSON(e.mapped), e.startSelection && C.fromJSON(e.startSelection), e.selectionsAfter.map(C.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let n = St;
    for (let r of e.startState.facet(wx)) {
      let s = r(e);
      s.length && (n = n.concat(s));
    }
    return !n.length && e.changes.empty ? null : new lt(e.changes.invert(e.startState.doc), n, void 0, t || e.startState.selection, St);
  }
  static selection(e) {
    return new lt(void 0, St, void 0, void 0, e);
  }
}
function Xs(i, e, t, n) {
  let r = e + 1 > t + 20 ? e - t - 1 : 0, s = i.slice(r, e);
  return s.push(n), s;
}
function Qx(i, e) {
  let t = [], n = !1;
  return i.iterChangedRanges((r, s) => t.push(r, s)), e.iterChangedRanges((r, s, o, l) => {
    for (let a = 0; a < t.length; ) {
      let u = t[a++], c = t[a++];
      l >= u && o <= c && (n = !0);
    }
  }), n;
}
function Cx(i, e) {
  return i.ranges.length == e.ranges.length && i.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length === 0;
}
function om(i, e) {
  return i.length ? e.length ? i.concat(e) : i : e;
}
const St = [], $x = 200;
function lm(i, e) {
  if (i.length) {
    let t = i[i.length - 1], n = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - $x));
    return n.length && n[n.length - 1].eq(e) ? i : (n.push(e), Xs(i, i.length - 1, 1e9, t.setSelAfter(n)));
  } else
    return [lt.selection([e])];
}
function _x(i) {
  let e = i[i.length - 1], t = i.slice();
  return t[i.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function il(i, e) {
  if (!i.length)
    return i;
  let t = i.length, n = St;
  for (; t; ) {
    let r = Ax(i[t - 1], e, n);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let s = i.slice(0, t);
      return s[t - 1] = r, s;
    } else
      e = r.mapped, t--, n = r.selectionsAfter;
  }
  return n.length ? [lt.selection(n)] : St;
}
function Ax(i, e, t) {
  let n = om(i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(e)) : St, t);
  if (!i.changes)
    return lt.selection(n);
  let r = i.changes.map(e), s = e.mapDesc(i.changes, !0), o = i.mapped ? i.mapped.composeDesc(s) : s;
  return new lt(r, W.mapEffects(i.effects, e), o, i.startSelection.map(s), n);
}
const Ex = /^(input\.type|delete)($|\.)/;
class qt {
  constructor(e, t, n = 0, r = void 0) {
    this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new qt(this.done, this.undone) : this;
  }
  addChanges(e, t, n, r, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!n || Ex.test(n)) && (!l.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(s, Qx(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    n == "input.type.compose") ? o = Xs(o, o.length - 1, r.minDepth, new lt(e.changes.compose(l.changes), om(W.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, St)) : o = Xs(o, o.length, r.minDepth, e), new qt(o, St, t, n);
  }
  addSelection(e, t, n, r) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : St;
    return s.length > 0 && t - this.prevTime < r && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && Cx(s[s.length - 1], e) ? this : new qt(lm(this.done, e), this.undone, t, n);
  }
  addMapping(e) {
    return new qt(il(this.done, e), il(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, n) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0)
      return null;
    let s = r[r.length - 1], o = s.selectionsAfter[0] || t.selection;
    if (n && s.selectionsAfter.length)
      return t.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: aa.of({ side: e, rest: _x(r), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let l = r.length == 1 ? St : r.slice(0, r.length - 1);
      return s.mapped && (l = il(l, s.mapped)), t.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: aa.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
qt.empty = /* @__PURE__ */ new qt(St, St);
const am = [
  { key: "Mod-z", run: sm, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: ua, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: ua, preventDefault: !0 },
  { key: "Mod-u", run: kx, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Px, preventDefault: !0 }
];
function Cn(i, e) {
  return C.create(i.ranges.map(e), i.mainIndex);
}
function Gt(i, e) {
  return i.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Rt({ state: i, dispatch: e }, t) {
  let n = Cn(i.selection, t);
  return n.eq(i.selection, !0) ? !1 : (e(Gt(i, n)), !0);
}
function bo(i, e) {
  return C.cursor(e ? i.to : i.from);
}
function um(i, e) {
  return Rt(i, (t) => t.empty ? i.moveByChar(t, e) : bo(t, e));
}
function We(i) {
  return i.textDirectionAt(i.state.selection.main.head) == be.LTR;
}
const cm = (i) => um(i, !We(i)), hm = (i) => um(i, We(i));
function fm(i, e) {
  return Rt(i, (t) => t.empty ? i.moveByGroup(t, e) : bo(t, e));
}
const Tx = (i) => fm(i, !We(i)), Rx = (i) => fm(i, We(i));
function Mx(i, e, t) {
  if (e.type.prop(t))
    return !0;
  let n = e.to - e.from;
  return n && (n > 2 || /[^\s,.;:]/.test(i.sliceDoc(e.from, e.to))) || e.firstChild;
}
function So(i, e, t) {
  let n = Ve(i).resolveInner(e.head), r = t ? te.closedBy : te.openedBy;
  for (let a = e.head; ; ) {
    let u = t ? n.childAfter(a) : n.childBefore(a);
    if (!u)
      break;
    Mx(i, u, r) ? n = u : a = t ? u.to : u.from;
  }
  let s = n.type.prop(r), o, l;
  return s && (o = t ? zt(i, n.from, 1) : zt(i, n.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? n.to : n.from, C.cursor(l, t ? -1 : 1);
}
const Zx = (i) => Rt(i, (e) => So(i.state, e, !We(i))), Dx = (i) => Rt(i, (e) => So(i.state, e, We(i)));
function dm(i, e) {
  return Rt(i, (t) => {
    if (!t.empty)
      return bo(t, e);
    let n = i.moveVertically(t, e);
    return n.head != t.head ? n : i.moveToLineBoundary(t, e);
  });
}
const pm = (i) => dm(i, !1), Om = (i) => dm(i, !0);
function mm(i) {
  let e = i.scrollDOM.clientHeight < i.scrollDOM.scrollHeight - 2, t = 0, n = 0, r;
  if (e) {
    for (let s of i.state.facet(M.scrollMargins)) {
      let o = s(i);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (n = Math.max(o == null ? void 0 : o.bottom, n));
    }
    r = i.scrollDOM.clientHeight - t - n;
  } else
    r = (i.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: n,
    selfScroll: e,
    height: Math.max(i.defaultLineHeight, r - 5)
  };
}
function gm(i, e) {
  let t = mm(i), { state: n } = i, r = Cn(n.selection, (o) => o.empty ? i.moveVertically(o, e, t.height) : bo(o, e));
  if (r.eq(n.selection))
    return !1;
  let s;
  if (t.selfScroll) {
    let o = i.coordsAtPos(n.selection.main.head), l = i.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, u = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < u && (s = M.scrollIntoView(r.main.head, { y: "start", yMargin: o.top - a }));
  }
  return i.dispatch(Gt(n, r), { effects: s }), !0;
}
const Ph = (i) => gm(i, !1), ca = (i) => gm(i, !0);
function wi(i, e, t) {
  let n = i.lineBlockAt(e.head), r = i.moveToLineBoundary(e, t);
  if (r.head == e.head && r.head != (t ? n.to : n.from) && (r = i.moveToLineBoundary(e, t, !1)), !t && r.head == n.from && n.length) {
    let s = /^\s*/.exec(i.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
    s && e.head != n.from + s && (r = C.cursor(n.from + s));
  }
  return r;
}
const Vx = (i) => Rt(i, (e) => wi(i, e, !0)), Lx = (i) => Rt(i, (e) => wi(i, e, !1)), Bx = (i) => Rt(i, (e) => wi(i, e, !We(i))), Ix = (i) => Rt(i, (e) => wi(i, e, We(i))), jx = (i) => Rt(i, (e) => C.cursor(i.lineBlockAt(e.head).from, 1)), zx = (i) => Rt(i, (e) => C.cursor(i.lineBlockAt(e.head).to, -1));
function qx(i, e, t) {
  let n = !1, r = Cn(i.selection, (s) => {
    let o = zt(i, s.head, -1) || zt(i, s.head, 1) || s.head > 0 && zt(i, s.head - 1, 1) || s.head < i.doc.length && zt(i, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    n = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return C.cursor(l);
  });
  return n ? (e(Gt(i, r)), !0) : !1;
}
const Nx = ({ state: i, dispatch: e }) => qx(i, e);
function kt(i, e) {
  let t = Cn(i.state.selection, (n) => {
    let r = e(n);
    return C.range(n.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return t.eq(i.state.selection) ? !1 : (i.dispatch(Gt(i.state, t)), !0);
}
function ym(i, e) {
  return kt(i, (t) => i.moveByChar(t, e));
}
const vm = (i) => ym(i, !We(i)), bm = (i) => ym(i, We(i));
function Sm(i, e) {
  return kt(i, (t) => i.moveByGroup(t, e));
}
const Xx = (i) => Sm(i, !We(i)), Yx = (i) => Sm(i, We(i)), Ux = (i) => kt(i, (e) => So(i.state, e, !We(i))), Fx = (i) => kt(i, (e) => So(i.state, e, We(i)));
function xm(i, e) {
  return kt(i, (t) => i.moveVertically(t, e));
}
const wm = (i) => xm(i, !1), km = (i) => xm(i, !0);
function Pm(i, e) {
  return kt(i, (t) => i.moveVertically(t, e, mm(i).height));
}
const Qh = (i) => Pm(i, !1), Ch = (i) => Pm(i, !0), Wx = (i) => kt(i, (e) => wi(i, e, !0)), Gx = (i) => kt(i, (e) => wi(i, e, !1)), Hx = (i) => kt(i, (e) => wi(i, e, !We(i))), Kx = (i) => kt(i, (e) => wi(i, e, We(i))), Jx = (i) => kt(i, (e) => C.cursor(i.lineBlockAt(e.head).from)), ew = (i) => kt(i, (e) => C.cursor(i.lineBlockAt(e.head).to)), $h = ({ state: i, dispatch: e }) => (e(Gt(i, { anchor: 0 })), !0), _h = ({ state: i, dispatch: e }) => (e(Gt(i, { anchor: i.doc.length })), !0), Ah = ({ state: i, dispatch: e }) => (e(Gt(i, { anchor: i.selection.main.anchor, head: 0 })), !0), Eh = ({ state: i, dispatch: e }) => (e(Gt(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0), tw = ({ state: i, dispatch: e }) => (e(i.update({ selection: { anchor: 0, head: i.doc.length }, userEvent: "select" })), !0), iw = ({ state: i, dispatch: e }) => {
  let t = xo(i).map(({ from: n, to: r }) => C.range(n, Math.min(r + 1, i.doc.length)));
  return e(i.update({ selection: C.create(t), userEvent: "select" })), !0;
}, nw = ({ state: i, dispatch: e }) => {
  let t = Cn(i.selection, (n) => {
    let r = Ve(i), s = r.resolveStack(n.from, 1);
    if (n.empty) {
      let o = r.resolveStack(n.from, -1);
      o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
    }
    for (let o = s; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < n.from && l.to >= n.to || l.to > n.to && l.from <= n.from) && o.next)
        return C.range(l.to, l.from);
    }
    return n;
  });
  return t.eq(i.selection) ? !1 : (e(Gt(i, t)), !0);
}, rw = ({ state: i, dispatch: e }) => {
  let t = i.selection, n = null;
  return t.ranges.length > 1 ? n = C.create([t.main]) : t.main.empty || (n = C.create([C.cursor(t.main.head)])), n ? (e(Gt(i, n)), !0) : !1;
};
function Tr(i, e) {
  if (i.state.readOnly)
    return !1;
  let t = "delete.selection", { state: n } = i, r = n.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(s);
      a < o ? (t = "delete.backward", a = ns(i, a, !1)) : a > o && (t = "delete.forward", a = ns(i, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = ns(i, o, !1), l = ns(i, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: C.cursor(o, o < s.head ? -1 : 1) };
  });
  return r.changes.empty ? !1 : (i.dispatch(n.update(r, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? M.announce.of(n.phrase("Selection deleted")) : void 0
  })), !0);
}
function ns(i, e, t) {
  if (i instanceof M)
    for (let n of i.state.facet(M.atomicRanges).map((r) => r(i)))
      n.between(e, e, (r, s) => {
        r < e && s > e && (e = t ? s : r);
      });
  return e;
}
const Qm = (i, e, t) => Tr(i, (n) => {
  let r = n.from, { state: s } = i, o = s.doc.lineAt(r), l, a;
  if (t && !e && r > o.from && r < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, r - o.from))) {
    if (l[l.length - 1] == "	")
      return r - 1;
    let u = Qn(l, s.tabSize), c = u % zs(s) || zs(s);
    for (let h = 0; h < c && l[l.length - 1 - h] == " "; h++)
      r--;
    a = r;
  } else
    a = Ne(o.text, r - o.from, e, e) + o.from, a == r && o.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, r - o.from)) && (a = Ne(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), ha = (i) => Qm(i, !1, !0), Cm = (i) => Qm(i, !0, !1), $m = (i, e) => Tr(i, (t) => {
  let n = t.head, { state: r } = i, s = r.doc.lineAt(n), o = r.charCategorizer(n);
  for (let l = null; ; ) {
    if (n == (e ? s.to : s.from)) {
      n == t.head && s.number != (e ? r.doc.lines : 1) && (n += e ? 1 : -1);
      break;
    }
    let a = Ne(s.text, n - s.from, e) + s.from, u = s.text.slice(Math.min(n, a) - s.from, Math.max(n, a) - s.from), c = o(u);
    if (l != null && c != l)
      break;
    (u != " " || n != t.head) && (l = c), n = a;
  }
  return n;
}), _m = (i) => $m(i, !1), sw = (i) => $m(i, !0), ow = (i) => Tr(i, (e) => {
  let t = i.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), lw = (i) => Tr(i, (e) => {
  let t = i.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), aw = (i) => Tr(i, (e) => {
  let t = i.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
}), uw = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => ({
    changes: { from: n.from, to: n.to, insert: se.of(["", ""]) },
    range: C.cursor(n.from)
  }));
  return e(i.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, cw = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = i.changeByRange((n) => {
    if (!n.empty || n.from == 0 || n.from == i.doc.length)
      return { range: n };
    let r = n.from, s = i.doc.lineAt(r), o = r == s.from ? r - 1 : Ne(s.text, r - s.from, !1) + s.from, l = r == s.to ? r + 1 : Ne(s.text, r - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: i.doc.slice(r, l).append(i.doc.slice(o, r)) },
      range: C.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(i.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function xo(i) {
  let e = [], t = -1;
  for (let n of i.selection.ranges) {
    let r = i.doc.lineAt(n.from), s = i.doc.lineAt(n.to);
    if (!n.empty && n.to == s.from && (s = i.doc.lineAt(n.to - 1)), t >= r.number) {
      let o = e[e.length - 1];
      o.to = s.to, o.ranges.push(n);
    } else
      e.push({ from: r.from, to: s.to, ranges: [n] });
    t = s.number + 1;
  }
  return e;
}
function Am(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [], r = [];
  for (let s of xo(i)) {
    if (t ? s.to == i.doc.length : s.from == 0)
      continue;
    let o = i.doc.lineAt(t ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (t) {
      n.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + i.lineBreak });
      for (let a of s.ranges)
        r.push(C.range(Math.min(i.doc.length, a.anchor + l), Math.min(i.doc.length, a.head + l)));
    } else {
      n.push({ from: o.from, to: s.from }, { from: s.to, insert: i.lineBreak + o.text });
      for (let a of s.ranges)
        r.push(C.range(a.anchor - l, a.head - l));
    }
  }
  return n.length ? (e(i.update({
    changes: n,
    scrollIntoView: !0,
    selection: C.create(r, i.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const hw = ({ state: i, dispatch: e }) => Am(i, e, !1), fw = ({ state: i, dispatch: e }) => Am(i, e, !0);
function Em(i, e, t) {
  if (i.readOnly)
    return !1;
  let n = [];
  for (let r of xo(i))
    t ? n.push({ from: r.from, insert: i.doc.slice(r.from, r.to) + i.lineBreak }) : n.push({ from: r.to, insert: i.lineBreak + i.doc.slice(r.from, r.to) });
  return e(i.update({ changes: n, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const dw = ({ state: i, dispatch: e }) => Em(i, e, !1), pw = ({ state: i, dispatch: e }) => Em(i, e, !0), Ow = (i) => {
  if (i.state.readOnly)
    return !1;
  let { state: e } = i, t = e.changes(xo(e).map(({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s }))), n = Cn(e.selection, (r) => {
    let s;
    if (i.lineWrapping) {
      let o = i.lineBlockAt(r.head), l = i.coordsAtPos(r.head, r.assoc || 1);
      l && (s = o.bottom + i.documentTop - l.bottom + i.defaultLineHeight / 2);
    }
    return i.moveVertically(r, !0, s);
  }).map(t);
  return i.dispatch({ changes: t, selection: n, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function mw(i, e) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = Ve(i).resolveInner(e), n = t.childBefore(e), r = t.childAfter(e), s;
  return n && r && n.to <= e && r.from >= e && (s = n.type.prop(te.closedBy)) && s.indexOf(r.name) > -1 && i.doc.lineAt(n.to).from == i.doc.lineAt(r.from).from && !/\S/.test(i.sliceDoc(n.to, r.from)) ? { from: n.to, to: r.from } : null;
}
const Th = /* @__PURE__ */ Tm(!1), gw = /* @__PURE__ */ Tm(!0);
function Tm(i) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let n = e.changeByRange((r) => {
      let { from: s, to: o } = r, l = e.doc.lineAt(s), a = !i && s == o && mw(e, s);
      i && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let u = new go(e, { simulateBreak: s, simulateDoubleBreak: !!a }), c = su(u, s);
      for (c == null && (c = Qn(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let h = ["", Or(e, c)];
      return a && h.push(Or(e, u.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: se.of(h) },
        range: C.cursor(s + 1 + h[1].length)
      };
    });
    return t(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function cu(i, e) {
  let t = -1;
  return i.changeByRange((n) => {
    let r = [];
    for (let o = n.from; o <= n.to; ) {
      let l = i.doc.lineAt(o);
      l.number > t && (n.empty || n.to > l.from) && (e(l, r, n), t = l.number), o = l.to + 1;
    }
    let s = i.changes(r);
    return {
      changes: r,
      range: C.range(s.mapPos(n.anchor, 1), s.mapPos(n.head, 1))
    };
  });
}
const yw = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), n = new go(i, { overrideIndentation: (s) => {
    let o = t[s];
    return o ?? -1;
  } }), r = cu(i, (s, o, l) => {
    let a = su(n, s.from);
    if (a == null)
      return;
    /\S/.test(s.text) || (a = 0);
    let u = /^\s*/.exec(s.text)[0], c = Or(i, a);
    (u != c || l.from < s.from + u.length) && (t[s.from] = a, o.push({ from: s.from, to: s.from + u.length, insert: c }));
  });
  return r.changes.empty || e(i.update(r, { userEvent: "indent" })), !0;
}, Rm = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(cu(i, (t, n) => {
  n.push({ from: t.from, insert: i.facet(_r) });
}), { userEvent: "input.indent" })), !0), Mm = ({ state: i, dispatch: e }) => i.readOnly ? !1 : (e(i.update(cu(i, (t, n) => {
  let r = /^\s*/.exec(t.text)[0];
  if (!r)
    return;
  let s = Qn(r, i.tabSize), o = 0, l = Or(i, Math.max(0, s - zs(i)));
  for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  n.push({ from: t.from + o, to: t.from + r.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), vw = (i) => (i.setTabFocusMode(), !0), bw = [
  { key: "Ctrl-b", run: cm, shift: vm, preventDefault: !0 },
  { key: "Ctrl-f", run: hm, shift: bm },
  { key: "Ctrl-p", run: pm, shift: wm },
  { key: "Ctrl-n", run: Om, shift: km },
  { key: "Ctrl-a", run: jx, shift: Jx },
  { key: "Ctrl-e", run: zx, shift: ew },
  { key: "Ctrl-d", run: Cm },
  { key: "Ctrl-h", run: ha },
  { key: "Ctrl-k", run: ow },
  { key: "Ctrl-Alt-h", run: _m },
  { key: "Ctrl-o", run: uw },
  { key: "Ctrl-t", run: cw },
  { key: "Ctrl-v", run: ca }
], Sw = /* @__PURE__ */ [
  { key: "ArrowLeft", run: cm, shift: vm, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: Tx, shift: Xx, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: Bx, shift: Hx, preventDefault: !0 },
  { key: "ArrowRight", run: hm, shift: bm, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Rx, shift: Yx, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Ix, shift: Kx, preventDefault: !0 },
  { key: "ArrowUp", run: pm, shift: wm, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: $h, shift: Ah },
  { mac: "Ctrl-ArrowUp", run: Ph, shift: Qh },
  { key: "ArrowDown", run: Om, shift: km, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: _h, shift: Eh },
  { mac: "Ctrl-ArrowDown", run: ca, shift: Ch },
  { key: "PageUp", run: Ph, shift: Qh },
  { key: "PageDown", run: ca, shift: Ch },
  { key: "Home", run: Lx, shift: Gx, preventDefault: !0 },
  { key: "Mod-Home", run: $h, shift: Ah },
  { key: "End", run: Vx, shift: Wx, preventDefault: !0 },
  { key: "Mod-End", run: _h, shift: Eh },
  { key: "Enter", run: Th, shift: Th },
  { key: "Mod-a", run: tw },
  { key: "Backspace", run: ha, shift: ha },
  { key: "Delete", run: Cm },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: _m },
  { key: "Mod-Delete", mac: "Alt-Delete", run: sw },
  { mac: "Mod-Backspace", run: lw },
  { mac: "Mod-Delete", run: aw }
].concat(/* @__PURE__ */ bw.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))), hu = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Zx, shift: Ux },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Dx, shift: Fx },
  { key: "Alt-ArrowUp", run: hw },
  { key: "Shift-Alt-ArrowUp", run: dw },
  { key: "Alt-ArrowDown", run: fw },
  { key: "Shift-Alt-ArrowDown", run: pw },
  { key: "Escape", run: rw },
  { key: "Mod-Enter", run: gw },
  { key: "Alt-l", mac: "Ctrl-l", run: iw },
  { key: "Mod-i", run: nw, preventDefault: !0 },
  { key: "Mod-[", run: Mm },
  { key: "Mod-]", run: Rm },
  { key: "Mod-Alt-\\", run: yw },
  { key: "Shift-Mod-k", run: Ow },
  { key: "Shift-Mod-\\", run: Nx },
  { key: "Mod-/", run: Ox },
  { key: "Alt-A", run: gx },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: vw }
].concat(Sw), xw = { key: "Tab", run: Rm, shift: Mm };
function me() {
  var i = arguments[0];
  typeof i == "string" && (i = document.createElement(i));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      var r = t[n];
      typeof r == "string" ? i.setAttribute(n, r) : r != null && (i[n] = r);
    }
    e++;
  }
  for (; e < arguments.length; e++) Zm(i, arguments[e]);
  return i;
}
function Zm(i, e) {
  if (typeof e == "string")
    i.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null)
    i.appendChild(e);
  else if (Array.isArray(e))
    for (var t = 0; t < e.length; t++) Zm(i, e[t]);
  else
    throw new RangeError("Unsupported child node: " + e);
}
class ww {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.diagnostic = n;
  }
}
class $i {
  constructor(e, t, n) {
    this.diagnostics = e, this.panel = t, this.selected = n;
  }
  static init(e, t, n) {
    let r = e, s = n.facet(Nt).markerFilter;
    s && (r = s(r, n));
    let o = q.set(r.map((l) => l.from == l.to || l.from == l.to - 1 && n.doc.lineAt(l.from).to == l.from ? q.widget({
      widget: new Rw(l),
      diagnostic: l
    }).range(l.from) : q.mark({
      attributes: { class: "cm-lintRange cm-lintRange-" + l.severity + (l.markClass ? " " + l.markClass : "") },
      diagnostic: l
    }).range(l.from, l.to)), !0);
    return new $i(o, t, gn(o));
  }
}
function gn(i, e = null, t = 0) {
  let n = null;
  return i.between(t, 1e9, (r, s, { spec: o }) => {
    if (!(e && o.diagnostic != e))
      return n = new ww(r, s, o.diagnostic), !1;
  }), n;
}
function Dm(i, e) {
  let t = e.pos, n = e.end || t, r = i.state.facet(Nt).hideOn(i, t, n);
  if (r != null)
    return r;
  let s = i.startState.doc.lineAt(e.pos);
  return !!(i.effects.some((o) => o.is(wo)) || i.changes.touchesRange(s.from, Math.max(s.to, n)));
}
function Vm(i, e) {
  return i.field(at, !1) ? e : e.concat(W.appendConfig.of(Xm));
}
function kw(i, e) {
  return {
    effects: Vm(i, [wo.of(e)])
  };
}
const wo = /* @__PURE__ */ W.define(), fu = /* @__PURE__ */ W.define(), Lm = /* @__PURE__ */ W.define(), at = /* @__PURE__ */ Re.define({
  create() {
    return new $i(q.none, null, null);
  },
  update(i, e) {
    if (e.docChanged && i.diagnostics.size) {
      let t = i.diagnostics.map(e.changes), n = null, r = i.panel;
      if (i.selected) {
        let s = e.changes.mapPos(i.selected.from, 1);
        n = gn(t, i.selected.diagnostic, s) || gn(t, null, s);
      }
      !t.size && r && e.state.facet(Nt).autoPanel && (r = null), i = new $i(t, r, n);
    }
    for (let t of e.effects)
      if (t.is(wo)) {
        let n = e.state.facet(Nt).autoPanel ? t.value.length ? mr.open : null : i.panel;
        i = $i.init(t.value, n, e.state);
      } else t.is(fu) ? i = new $i(i.diagnostics, t.value ? mr.open : null, i.selected) : t.is(Lm) && (i = new $i(i.diagnostics, i.panel, t.value));
    return i;
  },
  provide: (i) => [
    dr.from(i, (e) => e.panel),
    M.decorations.from(i, (e) => e.diagnostics)
  ]
});
function Pw(i) {
  let e = i.field(at, !1);
  return e ? e.diagnostics.size : 0;
}
const Qw = /* @__PURE__ */ q.mark({ class: "cm-lintRange cm-lintRange-active" });
function Cw(i, e, t) {
  let { diagnostics: n } = i.state.field(at), r = [], s = 2e8, o = 0;
  n.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, u, { spec: c }) => {
    e >= a && e <= u && (a == u || (e > a || t > 0) && (e < u || t < 0)) && (r.push(c.diagnostic), s = Math.min(a, s), o = Math.max(u, o));
  });
  let l = i.state.facet(Nt).tooltipFilter;
  return l && (r = l(r, i.state)), r.length ? {
    pos: s,
    end: o,
    above: i.state.doc.lineAt(s).to < o,
    create() {
      return { dom: Bm(i, r) };
    }
  } : null;
}
function Bm(i, e) {
  return me("ul", { class: "cm-tooltip-lint" }, e.map((t) => zm(i, t, !1)));
}
const $w = (i) => {
  let e = i.state.field(at, !1);
  (!e || !e.panel) && i.dispatch({ effects: Vm(i.state, [fu.of(!0)]) });
  let t = fr(i, mr.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, Rh = (i) => {
  let e = i.state.field(at, !1);
  return !e || !e.panel ? !1 : (i.dispatch({ effects: fu.of(!1) }), !0);
}, _w = (i) => {
  let e = i.state.field(at, !1);
  if (!e)
    return !1;
  let t = i.state.selection.main, n = e.diagnostics.iter(t.to + 1);
  return !n.value && (n = e.diagnostics.iter(0), !n.value || n.from == t.from && n.to == t.to) ? !1 : (i.dispatch({ selection: { anchor: n.from, head: n.to }, scrollIntoView: !0 }), !0);
}, Aw = [
  { key: "Mod-Shift-m", run: $w, preventDefault: !0 },
  { key: "F8", run: _w }
], Im = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.view = i, this.timeout = -1, this.set = !0;
    let { delay: e } = i.state.facet(Nt);
    this.lintTime = Date.now() + e, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e);
  }
  run() {
    clearTimeout(this.timeout);
    let i = Date.now();
    if (i < this.lintTime - 10)
      this.timeout = setTimeout(this.run, this.lintTime - i);
    else {
      this.set = !1;
      let { state: e } = this.view, { sources: t } = e.facet(Nt);
      t.length && Ew(t.map((n) => Promise.resolve(n(this.view))), (n) => {
        this.view.state.doc == e.doc && this.view.dispatch(kw(this.view.state, n.reduce((r, s) => r.concat(s))));
      }, (n) => {
        Ge(this.view.state, n);
      });
    }
  }
  update(i) {
    let e = i.state.facet(Nt);
    (i.docChanged || e != i.startState.facet(Nt) || e.needsRefresh && e.needsRefresh(i)) && (this.lintTime = Date.now() + e.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, e.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
});
function Ew(i, e, t) {
  let n = [], r = -1;
  for (let s of i)
    s.then((o) => {
      n.push(o), clearTimeout(r), n.length == i.length ? e(n) : setTimeout(() => e(n), 200);
    }, t);
}
const Nt = /* @__PURE__ */ D.define({
  combine(i) {
    return Object.assign({ sources: i.map((e) => e.source).filter((e) => e != null) }, Tt(i.map((e) => e.config), {
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
function Tw(i, e = {}) {
  return [
    Nt.of({ source: i, config: e }),
    Im,
    Xm
  ];
}
function Mh(i) {
  let e = i.plugin(Im);
  e && e.force();
}
function jm(i) {
  let e = [];
  if (i)
    e: for (let { name: t } of i) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        if (/[a-zA-Z]/.test(r) && !e.some((s) => s.toLowerCase() == r.toLowerCase())) {
          e.push(r);
          continue e;
        }
      }
      e.push("");
    }
  return e;
}
function zm(i, e, t) {
  var n;
  let r = t ? jm(e.actions) : [];
  return me("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, me("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(i) : e.message), (n = e.actions) === null || n === void 0 ? void 0 : n.map((s, o) => {
    let l = !1, a = (f) => {
      if (f.preventDefault(), l)
        return;
      l = !0;
      let d = gn(i.state.field(at).diagnostics, e);
      d && s.apply(i, d.from, d.to);
    }, { name: u } = s, c = r[o] ? u.indexOf(r[o]) : -1, h = c < 0 ? u : [
      u.slice(0, c),
      me("u", u.slice(c, c + 1)),
      u.slice(c + 1)
    ];
    return me("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${u}${c < 0 ? "" : ` (access key "${r[o]})"`}.`
    }, h);
  }), e.source && me("div", { class: "cm-diagnosticSource" }, e.source));
}
class Rw extends Wt {
  constructor(e) {
    super(), this.diagnostic = e;
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return me("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class Zh {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = zm(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class mr {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (r) => {
      if (r.keyCode == 27)
        Rh(this.view), this.view.focus();
      else if (r.keyCode == 38 || r.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (r.keyCode == 40 || r.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (r.keyCode == 36)
        this.moveSelection(0);
      else if (r.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (r.keyCode == 13)
        this.view.focus();
      else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: s } = this.items[this.selectedIndex], o = jm(s.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == r.keyCode) {
            let a = gn(this.view.state.field(at).diagnostics, s);
            a && s.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      r.preventDefault();
    }, n = (r) => {
      for (let s = 0; s < this.items.length; s++)
        this.items[s].dom.contains(r.target) && this.moveSelection(s);
    };
    this.list = me("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: n
    }), this.dom = me("div", { class: "cm-panel-lint" }, this.list, me("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => Rh(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(at).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(at), n = 0, r = !1, s = null;
    for (e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
      let u = -1, c;
      for (let h = n; h < this.items.length; h++)
        if (this.items[h].diagnostic == a.diagnostic) {
          u = h;
          break;
        }
      u < 0 ? (c = new Zh(this.view, a.diagnostic), this.items.splice(n, 0, c), r = !0) : (c = this.items[u], u > n && (this.items.splice(n, u - n), r = !0)), t && c.diagnostic == t.diagnostic ? c.dom.hasAttribute("aria-selected") || (c.dom.setAttribute("aria-selected", "true"), s = c) : c.dom.hasAttribute("aria-selected") && c.dom.removeAttribute("aria-selected"), n++;
    }); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      r = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Zh(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), r = !0), s ? (this.list.setAttribute("aria-activedescendant", s.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: s.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: o, panel: l }) => {
        let a = l.height / this.list.offsetHeight;
        o.top < l.top ? this.list.scrollTop -= (l.top - o.top) / a : o.bottom > l.bottom && (this.list.scrollTop += (o.bottom - l.bottom) / a);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
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
    let t = this.view.state.field(at), n = gn(t.diagnostics, this.items[e].diagnostic);
    n && this.view.dispatch({
      selection: { anchor: n.from, head: n.to },
      scrollIntoView: !0,
      effects: Lm.of(n)
    });
  }
  static open(e) {
    return new mr(e);
  }
}
function Ss(i, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(i)}</svg>')`;
}
function rs(i) {
  return Ss(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${i}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const Mw = /* @__PURE__ */ M.baseTheme({
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
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ rs("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ rs("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ rs("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ rs("#66d") },
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
function Dh(i) {
  return i == "error" ? 4 : i == "warning" ? 3 : i == "info" ? 2 : 1;
}
class qm extends Ft {
  constructor(e) {
    super(), this.diagnostics = e, this.severity = e.reduce((t, n) => Dh(t) < Dh(n.severity) ? n.severity : t, "hint");
  }
  toDOM(e) {
    let t = document.createElement("div");
    t.className = "cm-lint-marker cm-lint-marker-" + this.severity;
    let n = this.diagnostics, r = e.state.facet(ko).tooltipFilter;
    return r && (n = r(n, e.state)), n.length && (t.onmouseover = () => Dw(e, t, n)), t;
  }
}
function Zw(i, e) {
  let t = (n) => {
    let r = e.getBoundingClientRect();
    if (!(n.clientX > r.left - 10 && n.clientX < r.right + 10 && n.clientY > r.top - 10 && n.clientY < r.bottom + 10)) {
      for (let s = n.target; s; s = s.parentNode)
        if (s.nodeType == 1 && s.classList.contains("cm-tooltip-lint"))
          return;
      window.removeEventListener("mousemove", t), i.state.field(Nm) && i.dispatch({ effects: du.of(null) });
    }
  };
  window.addEventListener("mousemove", t);
}
function Dw(i, e, t) {
  function n() {
    let o = i.elementAtHeight(e.getBoundingClientRect().top + 5 - i.documentTop);
    i.coordsAtPos(o.from) && i.dispatch({ effects: du.of({
      pos: o.from,
      above: !1,
      create() {
        return {
          dom: Bm(i, t),
          getCoords: () => e.getBoundingClientRect()
        };
      }
    }) }), e.onmouseout = e.onmousemove = null, Zw(i, e);
  }
  let { hoverTime: r } = i.state.facet(ko), s = setTimeout(n, r);
  e.onmouseout = () => {
    clearTimeout(s), e.onmouseout = e.onmousemove = null;
  }, e.onmousemove = () => {
    clearTimeout(s), s = setTimeout(n, r);
  };
}
function Vw(i, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r of e) {
    let s = i.lineAt(r.from);
    (t[s.from] || (t[s.from] = [])).push(r);
  }
  let n = [];
  for (let r in t)
    n.push(new qm(t[r]).range(+r));
  return ne.of(n, !0);
}
const Lw = /* @__PURE__ */ QO({
  class: "cm-gutter-lint",
  markers: (i) => i.state.field(fa),
  widgetMarker: (i, e, t) => {
    let n = [];
    return i.state.field(fa).between(t.from, t.to, (r, s, o) => {
      n.push(...o.diagnostics);
    }), n.length ? new qm(n) : null;
  }
}), fa = /* @__PURE__ */ Re.define({
  create() {
    return ne.empty;
  },
  update(i, e) {
    i = i.map(e.changes);
    let t = e.state.facet(ko).markerFilter;
    for (let n of e.effects)
      if (n.is(wo)) {
        let r = n.value;
        t && (r = t(r || [], e.state)), i = Vw(e.state.doc, r.slice(0));
      }
    return i;
  }
}), du = /* @__PURE__ */ W.define(), Nm = /* @__PURE__ */ Re.define({
  create() {
    return null;
  },
  update(i, e) {
    return i && e.docChanged && (i = Dm(e, i) ? null : Object.assign(Object.assign({}, i), { pos: e.changes.mapPos(i.pos) })), e.effects.reduce((t, n) => n.is(du) ? n.value : t, i);
  },
  provide: (i) => Oo.from(i)
}), Bw = /* @__PURE__ */ M.baseTheme({
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
    content: /* @__PURE__ */ Ss('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')
  },
  ".cm-lint-marker-warning": {
    content: /* @__PURE__ */ Ss('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')
  },
  ".cm-lint-marker-error": {
    content: /* @__PURE__ */ Ss('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')
  }
}), Xm = [
  at,
  /* @__PURE__ */ M.decorations.compute([at], (i) => {
    let { selected: e, panel: t } = i.field(at);
    return !e || !t || e.from == e.to ? q.none : q.set([
      Qw.range(e.from, e.to)
    ]);
  }),
  /* @__PURE__ */ Wb(Cw, { hideOn: Dm }),
  Mw
], ko = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, {
      hoverTime: 300,
      markerFilter: null,
      tooltipFilter: null
    });
  }
});
function Iw(i = {}) {
  return [ko.of(i), fa, Lw, Bw, Nm];
}
const Vh = typeof String.prototype.normalize == "function" ? (i) => i.normalize("NFKD") : (i) => i;
class yn {
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
  constructor(e, t, n = 0, r = e.length, s, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, r), this.bufferStart = n, this.normalize = s ? (l) => s(Vh(l)) : Vh, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return je(this.buffer, this.bufferPos);
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
      let t = Ia(e), n = this.bufferStart + this.bufferPos;
      this.bufferPos += bt(e);
      let r = this.normalize(t);
      if (r.length)
        for (let s = 0, o = n; ; s++) {
          let l = r.charCodeAt(s), a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (s == r.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          o == n && s < t.length && t.charCodeAt(s) == l && o++;
        }
    }
  }
  match(e, t, n) {
    let r = null;
    for (let s = 0; s < this.matches.length; s += 2) {
      let o = this.matches[s], l = !1;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? r = { from: this.matches[s + 1], to: n } : (this.matches[s]++, l = !0)), l || (this.matches.splice(s, 2), s -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? r = { from: t, to: n } : this.matches.push(1, t)), r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferStart) && (r = null), r;
  }
}
typeof Symbol < "u" && (yn.prototype[Symbol.iterator] = function() {
  return this;
});
const Ym = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, pu = "gm" + (/x/.unicode == null ? "" : "u");
class Um {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(e, t, n, r = 0, s = e.length) {
    if (this.text = e, this.to = s, this.curLine = "", this.done = !1, this.value = Ym, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new Fm(e, t, n, r, s);
    this.re = new RegExp(t, pu + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.iter = e.iter();
    let o = e.lineAt(r);
    this.curLineStart = o.from, this.matchPos = Ys(e, r), this.getLine(this.curLineStart);
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
        let n = this.curLineStart + t.index, r = n + t[0].length;
        if (this.matchPos = Ys(this.text, r + (n == r ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, t)))
          return this.value = { from: n, to: r, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = !0, this;
    }
  }
}
const nl = /* @__PURE__ */ new WeakMap();
class ln {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, n) {
    let r = nl.get(e);
    if (!r || r.from >= n || r.to <= t) {
      let l = new ln(t, e.sliceString(t, n));
      return nl.set(e, l), l;
    }
    if (r.from == t && r.to == n)
      return r;
    let { text: s, from: o } = r;
    return o > t && (s = e.sliceString(t, o) + s, o = t), r.to < n && (s += e.sliceString(r.to, n)), nl.set(e, new ln(o, s)), new ln(t, s.slice(t - o, n - o));
  }
}
class Fm {
  constructor(e, t, n, r, s) {
    this.text = e, this.to = s, this.done = !1, this.value = Ym, this.matchPos = Ys(e, r), this.re = new RegExp(t, pu + (n != null && n.ignoreCase ? "i" : "")), this.test = n == null ? void 0 : n.test, this.flat = ln.get(e, r, this.chunkEnd(
      r + 5e3
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
        let n = this.flat.from + t.index, r = n + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(n, r, t)))
          return this.value = { from: n, to: r, match: t }, this.matchPos = Ys(this.text, r + (n == r ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = ln.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Um.prototype[Symbol.iterator] = Fm.prototype[Symbol.iterator] = function() {
  return this;
});
function jw(i) {
  try {
    return new RegExp(i, pu), !0;
  } catch {
    return !1;
  }
}
function Ys(i, e) {
  if (e >= i.length)
    return e;
  let t = i.lineAt(e), n;
  for (; e < t.to && (n = t.text.charCodeAt(e - t.from)) >= 56320 && n < 57344; )
    e++;
  return e;
}
function da(i) {
  let e = String(i.state.doc.lineAt(i.state.selection.main.head).number), t = me("input", { class: "cm-textfield", name: "line", value: e }), n = me("form", {
    class: "cm-gotoLine",
    onkeydown: (s) => {
      s.keyCode == 27 ? (s.preventDefault(), i.dispatch({ effects: Us.of(!1) }), i.focus()) : s.keyCode == 13 && (s.preventDefault(), r());
    },
    onsubmit: (s) => {
      s.preventDefault(), r();
    }
  }, me("label", i.state.phrase("Go to line"), ": ", t), " ", me("button", { class: "cm-button", type: "submit" }, i.state.phrase("go")));
  function r() {
    let s = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!s)
      return;
    let { state: o } = i, l = o.doc.lineAt(o.selection.main.head), [, a, u, c, h] = s, f = c ? +c.slice(1) : 0, d = u ? +u : l.number;
    if (u && h) {
      let m = d / 100;
      a && (m = m * (a == "-" ? -1 : 1) + l.number / o.doc.lines), d = Math.round(o.doc.lines * m);
    } else u && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))), O = C.cursor(p.from + Math.max(0, Math.min(f, p.length)));
    i.dispatch({
      effects: [Us.of(!1), M.scrollIntoView(O.from, { y: "center" })],
      selection: O
    }), i.focus();
  }
  return { dom: n };
}
const Us = /* @__PURE__ */ W.define(), Lh = /* @__PURE__ */ Re.define({
  create() {
    return !0;
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(Us) && (i = t.value);
    return i;
  },
  provide: (i) => dr.from(i, (e) => e ? da : null)
}), zw = (i) => {
  let e = fr(i, da);
  if (!e) {
    let t = [Us.of(!0)];
    i.state.field(Lh, !1) == null && t.push(W.appendConfig.of([Lh, qw])), i.dispatch({ effects: t }), e = fr(i, da);
  }
  return e && e.dom.querySelector("input").select(), !0;
}, qw = /* @__PURE__ */ M.baseTheme({
  ".cm-panel.cm-gotoLine": {
    padding: "2px 6px 4px",
    "& label": { fontSize: "80%" }
  }
}), Nw = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Xw = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, Nw, {
      highlightWordAroundCursor: (e, t) => e || t,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function Yw(i) {
  return [Hw, Gw];
}
const Uw = /* @__PURE__ */ q.mark({ class: "cm-selectionMatch" }), Fw = /* @__PURE__ */ q.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Bh(i, e, t, n) {
  return (t == 0 || i(e.sliceDoc(t - 1, t)) != Se.Word) && (n == e.doc.length || i(e.sliceDoc(n, n + 1)) != Se.Word);
}
function Ww(i, e, t, n) {
  return i(e.sliceDoc(t, t + 1)) == Se.Word && i(e.sliceDoc(n - 1, n)) == Se.Word;
}
const Gw = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.decorations = this.getDeco(i);
  }
  update(i) {
    (i.selectionSet || i.docChanged || i.viewportChanged) && (this.decorations = this.getDeco(i.view));
  }
  getDeco(i) {
    let e = i.state.facet(Xw), { state: t } = i, n = t.selection;
    if (n.ranges.length > 1)
      return q.none;
    let r = n.main, s, o = null;
    if (r.empty) {
      if (!e.highlightWordAroundCursor)
        return q.none;
      let a = t.wordAt(r.head);
      if (!a)
        return q.none;
      o = t.charCategorizer(r.head), s = t.sliceDoc(a.from, a.to);
    } else {
      let a = r.to - r.from;
      if (a < e.minSelectionLength || a > 200)
        return q.none;
      if (e.wholeWords) {
        if (s = t.sliceDoc(r.from, r.to), o = t.charCategorizer(r.head), !(Bh(o, t, r.from, r.to) && Ww(o, t, r.from, r.to)))
          return q.none;
      } else if (s = t.sliceDoc(r.from, r.to), !s)
        return q.none;
    }
    let l = [];
    for (let a of i.visibleRanges) {
      let u = new yn(t.doc, s, a.from, a.to);
      for (; !u.next().done; ) {
        let { from: c, to: h } = u.value;
        if ((!o || Bh(o, t, c, h)) && (r.empty && c <= r.from && h >= r.to ? l.push(Fw.range(c, h)) : (c >= r.to || h <= r.from) && l.push(Uw.range(c, h)), l.length > e.maxMatches))
          return q.none;
      }
    }
    return q.set(l);
  }
}, {
  decorations: (i) => i.decorations
}), Hw = /* @__PURE__ */ M.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), Kw = ({ state: i, dispatch: e }) => {
  let { selection: t } = i, n = C.create(t.ranges.map((r) => i.wordAt(r.head) || C.cursor(r.head)), t.mainIndex);
  return n.eq(t) ? !1 : (e(i.update({ selection: n })), !0);
};
function Jw(i, e) {
  let { main: t, ranges: n } = i.selection, r = i.wordAt(t.head), s = r && r.from == t.from && r.to == t.to;
  for (let o = !1, l = new yn(i.doc, e, n[n.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new yn(i.doc, e, 0, Math.max(0, n[n.length - 1].from - 1)), o = !0;
    } else {
      if (o && n.some((a) => a.from == l.value.from))
        continue;
      if (s) {
        let a = i.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const ek = ({ state: i, dispatch: e }) => {
  let { ranges: t } = i.selection;
  if (t.some((s) => s.from === s.to))
    return Kw({ state: i, dispatch: e });
  let n = i.sliceDoc(t[0].from, t[0].to);
  if (i.selection.ranges.some((s) => i.sliceDoc(s.from, s.to) != n))
    return !1;
  let r = Jw(i, n);
  return r ? (e(i.update({
    selection: i.selection.addRange(C.range(r.from, r.to), !1),
    effects: M.scrollIntoView(r.to)
  })), !0) : !1;
}, $n = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (e) => new fk(e),
      scrollToMatch: (e) => M.scrollIntoView(e)
    });
  }
});
class Wm {
  /**
  Create a query object.
  */
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || jw(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
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
    return this.regexp ? new rk(this) : new ik(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(e, t = 0, n) {
    let r = e.doc ? e : ee.create({ doc: e });
    return n == null && (n = r.doc.length), this.regexp ? Gi(this, r, t, n) : Wi(this, r, t, n);
  }
}
class Gm {
  constructor(e) {
    this.spec = e;
  }
}
function Wi(i, e, t, n) {
  return new yn(e.doc, i.unquoted, t, n, i.caseSensitive ? void 0 : (r) => r.toLowerCase(), i.wholeWord ? tk(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function tk(i, e) {
  return (t, n, r, s) => ((s > t || s + r.length < n) && (s = Math.max(0, t - 2), r = i.sliceString(s, Math.min(i.length, n + 2))), (e(Fs(r, t - s)) != Se.Word || e(Ws(r, t - s)) != Se.Word) && (e(Ws(r, n - s)) != Se.Word || e(Fs(r, n - s)) != Se.Word));
}
class ik extends Gm {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, n) {
    let r = Wi(this.spec, e, n, e.doc.length).nextOverlapping();
    if (r.done) {
      let s = Math.min(e.doc.length, t + this.spec.unquoted.length);
      r = Wi(this.spec, e, 0, s).nextOverlapping();
    }
    return r.done || r.value.from == t && r.value.to == n ? null : r.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(e, t, n) {
    for (let r = n; ; ) {
      let s = Math.max(t, r - 1e4 - this.spec.unquoted.length), o = Wi(this.spec, e, s, r), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (s == t)
        return null;
      r -= 1e4;
    }
  }
  prevMatch(e, t, n) {
    let r = this.prevMatchInRange(e, 0, t);
    return r || (r = this.prevMatchInRange(e, Math.max(0, n - this.spec.unquoted.length), e.doc.length)), r && (r.from != t || r.to != n) ? r : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let n = Wi(this.spec, e, 0, e.doc.length), r = [];
    for (; !n.next().done; ) {
      if (r.length >= t)
        return null;
      r.push(n.value);
    }
    return r;
  }
  highlight(e, t, n, r) {
    let s = Wi(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done; )
      r(s.value.from, s.value.to);
  }
}
function Gi(i, e, t, n) {
  return new Um(e.doc, i.search, {
    ignoreCase: !i.caseSensitive,
    test: i.wholeWord ? nk(e.charCategorizer(e.selection.main.head)) : void 0
  }, t, n);
}
function Fs(i, e) {
  return i.slice(Ne(i, e, !1), e);
}
function Ws(i, e) {
  return i.slice(e, Ne(i, e));
}
function nk(i) {
  return (e, t, n) => !n[0].length || (i(Fs(n.input, n.index)) != Se.Word || i(Ws(n.input, n.index)) != Se.Word) && (i(Ws(n.input, n.index + n[0].length)) != Se.Word || i(Fs(n.input, n.index + n[0].length)) != Se.Word);
}
class rk extends Gm {
  nextMatch(e, t, n) {
    let r = Gi(this.spec, e, n, e.doc.length).next();
    return r.done && (r = Gi(this.spec, e, 0, t).next()), r.done ? null : r.value;
  }
  prevMatchInRange(e, t, n) {
    for (let r = 1; ; r++) {
      let s = Math.max(
        t,
        n - r * 1e4
        /* FindPrev.ChunkSize */
      ), o = Gi(this.spec, e, s, n), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (s == t || l.from > s + 10))
        return l;
      if (s == t)
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
    let n = Gi(this.spec, e, 0, e.doc.length), r = [];
    for (; !n.next().done; ) {
      if (r.length >= t)
        return null;
      r.push(n.value);
    }
    return r;
  }
  highlight(e, t, n, r) {
    let s = Gi(this.spec, e, Math.max(
      0,
      t - 250
      /* RegExp.HighlightMargin */
    ), Math.min(n + 250, e.doc.length));
    for (; !s.next().done; )
      r(s.value.from, s.value.to);
  }
}
const gr = /* @__PURE__ */ W.define(), Ou = /* @__PURE__ */ W.define(), fi = /* @__PURE__ */ Re.define({
  create(i) {
    return new rl(pa(i).create(), null);
  },
  update(i, e) {
    for (let t of e.effects)
      t.is(gr) ? i = new rl(t.value.create(), i.panel) : t.is(Ou) && (i = new rl(i.query, t.value ? mu : null));
    return i;
  },
  provide: (i) => dr.from(i, (e) => e.panel)
});
class rl {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const sk = /* @__PURE__ */ q.mark({ class: "cm-searchMatch" }), ok = /* @__PURE__ */ q.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), lk = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.view = i, this.decorations = this.highlight(i.state.field(fi));
  }
  update(i) {
    let e = i.state.field(fi);
    (e != i.startState.field(fi) || i.docChanged || i.selectionSet || i.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: i, panel: e }) {
    if (!e || !i.spec.valid)
      return q.none;
    let { view: t } = this, n = new pi();
    for (let r = 0, s = t.visibleRanges, o = s.length; r < o; r++) {
      let { from: l, to: a } = s[r];
      for (; r < o - 1 && a > s[r + 1].from - 2 * 250; )
        a = s[++r].to;
      i.highlight(t.state, l, a, (u, c) => {
        let h = t.state.selection.ranges.some((f) => f.from == u && f.to == c);
        n.add(u, c, h ? ok : sk);
      });
    }
    return n.finish();
  }
}, {
  decorations: (i) => i.decorations
});
function Rr(i) {
  return (e) => {
    let t = e.state.field(fi, !1);
    return t && t.query.spec.valid ? i(e, t) : Jm(e);
  };
}
const Gs = /* @__PURE__ */ Rr((i, { query: e }) => {
  let { to: t } = i.state.selection.main, n = e.nextMatch(i.state, t, t);
  if (!n)
    return !1;
  let r = C.single(n.from, n.to), s = i.state.facet($n);
  return i.dispatch({
    selection: r,
    effects: [gu(i, n), s.scrollToMatch(r.main, i)],
    userEvent: "select.search"
  }), Km(i), !0;
}), Hs = /* @__PURE__ */ Rr((i, { query: e }) => {
  let { state: t } = i, { from: n } = t.selection.main, r = e.prevMatch(t, n, n);
  if (!r)
    return !1;
  let s = C.single(r.from, r.to), o = i.state.facet($n);
  return i.dispatch({
    selection: s,
    effects: [gu(i, r), o.scrollToMatch(s.main, i)],
    userEvent: "select.search"
  }), Km(i), !0;
}), ak = /* @__PURE__ */ Rr((i, { query: e }) => {
  let t = e.matchAll(i.state, 1e3);
  return !t || !t.length ? !1 : (i.dispatch({
    selection: C.create(t.map((n) => C.range(n.from, n.to))),
    userEvent: "select.search.matches"
  }), !0);
}), uk = ({ state: i, dispatch: e }) => {
  let t = i.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return !1;
  let { from: n, to: r } = t.main, s = [], o = 0;
  for (let l = new yn(i.doc, i.sliceDoc(n, r)); !l.next().done; ) {
    if (s.length > 1e3)
      return !1;
    l.value.from == n && (o = s.length), s.push(C.range(l.value.from, l.value.to));
  }
  return e(i.update({
    selection: C.create(s, o),
    userEvent: "select.search.matches"
  })), !0;
}, Ih = /* @__PURE__ */ Rr((i, { query: e }) => {
  let { state: t } = i, { from: n, to: r } = t.selection.main;
  if (t.readOnly)
    return !1;
  let s = e.nextMatch(t, n, n);
  if (!s)
    return !1;
  let o = [], l, a, u = [];
  if (s.from == n && s.to == r && (a = t.toText(e.getReplacement(s)), o.push({ from: s.from, to: s.to, insert: a }), s = e.nextMatch(t, s.from, s.to), u.push(M.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(n).number) + "."))), s) {
    let c = o.length == 0 || o[0].from >= s.to ? 0 : s.to - s.from - a.length;
    l = C.single(s.from - c, s.to - c), u.push(gu(i, s)), u.push(t.facet($n).scrollToMatch(l.main, i));
  }
  return i.dispatch({
    changes: o,
    selection: l,
    effects: u,
    userEvent: "input.replace"
  }), !0;
}), ck = /* @__PURE__ */ Rr((i, { query: e }) => {
  if (i.state.readOnly)
    return !1;
  let t = e.matchAll(i.state, 1e9).map((r) => {
    let { from: s, to: o } = r;
    return { from: s, to: o, insert: e.getReplacement(r) };
  });
  if (!t.length)
    return !1;
  let n = i.state.phrase("replaced $ matches", t.length) + ".";
  return i.dispatch({
    changes: t,
    effects: M.announce.of(n),
    userEvent: "input.replace.all"
  }), !0;
});
function mu(i) {
  return i.state.facet($n).createPanel(i);
}
function pa(i, e) {
  var t, n, r, s, o;
  let l = i.selection.main, a = l.empty || l.to > l.from + 100 ? "" : i.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let u = i.facet($n);
  return new Wm({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : u.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (n = e == null ? void 0 : e.caseSensitive) !== null && n !== void 0 ? n : u.caseSensitive,
    literal: (r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : u.literal,
    regexp: (s = e == null ? void 0 : e.regexp) !== null && s !== void 0 ? s : u.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : u.wholeWord
  });
}
function Hm(i) {
  let e = fr(i, mu);
  return e && e.dom.querySelector("[main-field]");
}
function Km(i) {
  let e = Hm(i);
  e && e == i.root.activeElement && e.select();
}
const Jm = (i) => {
  let e = i.state.field(fi, !1);
  if (e && e.panel) {
    let t = Hm(i);
    if (t && t != i.root.activeElement) {
      let n = pa(i.state, e.query.spec);
      n.valid && i.dispatch({ effects: gr.of(n) }), t.focus(), t.select();
    }
  } else
    i.dispatch({ effects: [
      Ou.of(!0),
      e ? gr.of(pa(i.state, e.query.spec)) : W.appendConfig.of(pk)
    ] });
  return !0;
}, eg = (i) => {
  let e = i.state.field(fi, !1);
  if (!e || !e.panel)
    return !1;
  let t = fr(i, mu);
  return t && t.dom.contains(i.root.activeElement) && i.focus(), i.dispatch({ effects: Ou.of(!1) }), !0;
}, hk = [
  { key: "Mod-f", run: Jm, scope: "editor search-panel" },
  { key: "F3", run: Gs, shift: Hs, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: Gs, shift: Hs, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: eg, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: uk },
  { key: "Mod-Alt-g", run: zw },
  { key: "Mod-d", run: ek, preventDefault: !0 }
];
class fk {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(fi).query.spec;
    this.commit = this.commit.bind(this), this.searchField = me("input", {
      value: t.search,
      placeholder: ht(e, "Find"),
      "aria-label": ht(e, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = me("input", {
      value: t.replace,
      placeholder: ht(e, "Replace"),
      "aria-label": ht(e, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = me("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: t.caseSensitive,
      onchange: this.commit
    }), this.reField = me("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: t.regexp,
      onchange: this.commit
    }), this.wordField = me("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: t.wholeWord,
      onchange: this.commit
    });
    function n(r, s, o) {
      return me("button", { class: "cm-button", name: r, onclick: s, type: "button" }, o);
    }
    this.dom = me("div", { onkeydown: (r) => this.keydown(r), class: "cm-search" }, [
      this.searchField,
      n("next", () => Gs(e), [ht(e, "next")]),
      n("prev", () => Hs(e), [ht(e, "previous")]),
      n("select", () => ak(e), [ht(e, "all")]),
      me("label", null, [this.caseField, ht(e, "match case")]),
      me("label", null, [this.reField, ht(e, "regexp")]),
      me("label", null, [this.wordField, ht(e, "by word")]),
      ...e.state.readOnly ? [] : [
        me("br"),
        this.replaceField,
        n("replace", () => Ih(e), [ht(e, "replace")]),
        n("replaceAll", () => ck(e), [ht(e, "replace all")])
      ],
      me("button", {
        name: "close",
        onclick: () => eg(e),
        "aria-label": ht(e, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let e = new Wm({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: gr.of(e) }));
  }
  keydown(e) {
    ub(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Hs : Gs)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Ih(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(gr) && !n.value.eq(this.query) && this.setQuery(n.value);
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
    return this.view.state.facet($n).top;
  }
}
function ht(i, e) {
  return i.state.phrase(e);
}
const ss = 30, os = /[\s\.,:;?!]/;
function gu(i, { from: e, to: t }) {
  let n = i.state.doc.lineAt(e), r = i.state.doc.lineAt(t).to, s = Math.max(n.from, e - ss), o = Math.min(r, t + ss), l = i.state.sliceDoc(s, o);
  if (s != n.from) {
    for (let a = 0; a < ss; a++)
      if (!os.test(l[a + 1]) && os.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != r) {
    for (let a = l.length - 1; a > l.length - ss; a--)
      if (!os.test(l[a - 1]) && os.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return M.announce.of(`${i.state.phrase("current match")}. ${l} ${i.state.phrase("on line")} ${n.number}.`);
}
const dk = /* @__PURE__ */ M.baseTheme({
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
}), pk = [
  fi,
  /* @__PURE__ */ xi.low(lk),
  dk
];
class tg {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, n, r) {
    this.state = e, this.pos = t, this.explicit = n, this.view = r, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = Ve(this.state).resolveInner(this.pos, -1);
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
    let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), r = t.text.slice(n - t.from, this.pos - t.from), s = r.search(ng(e, !1));
    return s < 0 ? null : { from: n + s, to: this.pos, text: r.slice(s) };
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
function jh(i) {
  let e = Object.keys(i).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Ok(i) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of i) {
    e[r[0]] = !0;
    for (let s = 1; s < r.length; s++)
      t[r[s]] = !0;
  }
  let n = jh(e) + jh(t) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function ig(i) {
  let e = i.map((r) => typeof r == "string" ? { label: r } : r), [t, n] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : Ok(e);
  return (r) => {
    let s = r.matchBefore(n);
    return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null;
  };
}
function mk(i, e) {
  return (t) => {
    for (let n = Ve(t.state).resolveInner(t.pos, -1); n; n = n.parent) {
      if (i.indexOf(n.name) > -1)
        return null;
      if (n.type.isTop)
        break;
    }
    return e(t);
  };
}
class zh {
  constructor(e, t, n, r) {
    this.completion = e, this.source = t, this.match = n, this.score = r;
  }
}
function di(i) {
  return i.selection.main.from;
}
function ng(i, e) {
  var t;
  let { source: n } = i, r = e && n[0] != "^", s = n[n.length - 1] != "$";
  return !r && !s ? i : new RegExp(`${r ? "^" : ""}(?:${n})${s ? "$" : ""}`, (t = i.flags) !== null && t !== void 0 ? t : i.ignoreCase ? "i" : "");
}
const yu = /* @__PURE__ */ ii.define();
function gk(i, e, t, n) {
  let { main: r } = i.selection, s = t - r.from, o = n - r.from;
  return Object.assign(Object.assign({}, i.changeByRange((l) => {
    if (l != r && t != n && i.sliceDoc(l.from + s, l.from + o) != i.sliceDoc(t, n))
      return { range: l };
    let a = i.toText(e);
    return {
      changes: { from: l.from + s, to: n == r.from ? l.to : l.from + o, insert: a },
      range: C.cursor(l.from + s + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
const qh = /* @__PURE__ */ new WeakMap();
function yk(i) {
  if (!Array.isArray(i))
    return i;
  let e = qh.get(i);
  return e || qh.set(i, e = ig(i)), e;
}
const Ks = /* @__PURE__ */ W.define(), yr = /* @__PURE__ */ W.define();
class vk {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let n = je(e, t), r = bt(n);
      this.chars.push(n);
      let s = e.slice(t, t + r), o = s.toUpperCase();
      this.folded.push(je(o == s ? s.toLowerCase() : o, 0)), t += r;
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
    let { chars: t, folded: n, any: r, precise: s, byWord: o } = this;
    if (t.length == 1) {
      let y = je(e, 0), b = bt(y), x = b == e.length ? 0 : -100;
      if (y != t[0]) if (y == n[0])
        x += -200;
      else
        return null;
      return this.ret(x, [0, b]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, u = 0;
    if (l < 0) {
      for (let y = 0, b = Math.min(e.length, 200); y < b && u < a; ) {
        let x = je(e, y);
        (x == t[u] || x == n[u]) && (r[u++] = y), y += bt(x);
      }
      if (u < a)
        return null;
    }
    let c = 0, h = 0, f = !1, d = 0, p = -1, O = -1, m = /[a-z]/.test(e), g = !0;
    for (let y = 0, b = Math.min(e.length, 200), x = 0; y < b && h < a; ) {
      let S = je(e, y);
      l < 0 && (c < a && S == t[c] && (s[c++] = y), d < a && (S == t[d] || S == n[d] ? (d == 0 && (p = y), O = y + 1, d++) : d = 0));
      let k, w = S < 255 ? S >= 48 && S <= 57 || S >= 97 && S <= 122 ? 2 : S >= 65 && S <= 90 ? 1 : 0 : (k = Ia(S)) != k.toLowerCase() ? 1 : k != k.toUpperCase() ? 2 : 0;
      (!y || w == 1 && m || x == 0 && w != 0) && (t[h] == S || n[h] == S && (f = !0) ? o[h++] = y : o.length && (g = !1)), x = w, y += bt(S);
    }
    return h == a && o[0] == 0 && g ? this.result(-100 + (f ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (O == e.length ? 0 : -100), [0, O]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [p, O]) : h == a ? this.result(-100 + (f ? -200 : 0) + -700 + (g ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
  }
  result(e, t, n) {
    let r = [], s = 0;
    for (let o of t) {
      let l = o + (this.astral ? bt(je(n, o)) : 1);
      s && r[s - 1] == o ? r[s - 1] = l : (r[s++] = o, r[s++] = l);
    }
    return this.ret(e - n.length, r);
  }
}
class bk {
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
const Le = /* @__PURE__ */ D.define({
  combine(i) {
    return Tt(i, {
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
      positionInfo: Sk,
      filterStrict: !1,
      compareCompletions: (e, t) => e.label.localeCompare(t.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (e, t) => e && t,
      closeOnBlur: (e, t) => e && t,
      icons: (e, t) => e && t,
      tooltipClass: (e, t) => (n) => Nh(e(n), t(n)),
      optionClass: (e, t) => (n) => Nh(e(n), t(n)),
      addToOptions: (e, t) => e.concat(t),
      filterStrict: (e, t) => e || t
    });
  }
});
function Nh(i, e) {
  return i ? e ? i + " " + e : i : e;
}
function Sk(i, e, t, n, r, s) {
  let o = i.textDirection == be.RTL, l = o, a = !1, u = "top", c, h, f = e.left - r.left, d = r.right - e.right, p = n.right - n.left, O = n.bottom - n.top;
  if (l && f < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, f) && (l = !0), p <= (l ? f : d))
    c = Math.max(r.top, Math.min(t.top, r.bottom - O)) - e.top, h = Math.min(400, l ? f : d);
  else {
    a = !0, h = Math.min(
      400,
      (o ? e.right : r.right - e.left) - 30
      /* Info.Margin */
    );
    let y = r.bottom - e.bottom;
    y >= O || y > e.top ? c = t.bottom - e.top : (u = "bottom", c = e.bottom - t.top);
  }
  let m = (e.bottom - e.top) / s.offsetHeight, g = (e.right - e.left) / s.offsetWidth;
  return {
    style: `${u}: ${c / m}px; max-width: ${h / g}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
function xk(i) {
  let e = i.addToOptions.slice();
  return i.icons && e.push({
    render(t) {
      let n = document.createElement("div");
      return n.classList.add("cm-completionIcon"), t.type && n.classList.add(...t.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), n.setAttribute("aria-hidden", "true"), n;
    },
    position: 20
  }), e.push({
    render(t, n, r, s) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = t.displayLabel || t.label, a = 0;
      for (let u = 0; u < s.length; ) {
        let c = s[u++], h = s[u++];
        c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
        let f = o.appendChild(document.createElement("span"));
        f.appendChild(document.createTextNode(l.slice(c, h))), f.className = "cm-completionMatchedText", a = h;
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
function sl(i, e, t) {
  if (i <= t)
    return { from: 0, to: i };
  if (e < 0 && (e = 0), e <= i >> 1) {
    let r = Math.floor(e / t);
    return { from: r * t, to: (r + 1) * t };
  }
  let n = Math.floor((i - e) / t);
  return { from: i - (n + 1) * t, to: i - n * t };
}
class wk {
  constructor(e, t, n) {
    this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let r = e.state.field(t), { options: s, selected: o } = r.open, l = e.state.facet(Le);
    this.optionContent = xk(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = sl(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: u } = e.state.field(t).open;
      for (let c = a.target, h; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (h = /-(\d+)$/.exec(c.id)) && +h[1] < u.length) {
          this.applyCompletion(e, u[+h[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let u = e.state.field(this.stateField, !1);
      u && u.tooltip && e.state.facet(Le).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: yr.of(null) });
    }), this.showOptions(s, r.id);
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
    let n = e.state.field(this.stateField), r = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), n != r) {
      let { options: s, selected: o, disabled: l } = n.open;
      (!r.open || r.open.options != s) && (this.range = sl(s.length, o, e.state.facet(Le).maxRenderedOptions), this.showOptions(s, n.id)), this.updateSel(), l != ((t = r.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
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
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = sl(t.options.length, t.selected, this.view.state.facet(Le).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: n } = t.options[t.selected], { info: r } = n;
      if (!r)
        return;
      let s = typeof r == "string" ? document.createTextNode(r) : r(n);
      if (!s)
        return;
      "then" in s ? s.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, n);
      }).catch((o) => Ge(this.view.state, o, "completion info")) : this.addInfoPane(s, n);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let n = this.info = document.createElement("div");
    if (n.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      n.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: r, destroy: s } = e;
      n.appendChild(r), this.infoDestroy = s || null;
    }
    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++)
      n.nodeName != "LI" || !n.id ? r-- : r == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && n.removeAttribute("aria-selected");
    return t && Pk(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let o = this.dom.ownerDocument.defaultView || window;
      s = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return r.top > Math.min(s.bottom, t.bottom) - 10 || r.bottom < Math.max(s.top, t.top) + 10 ? null : this.view.state.facet(Le).positionInfo(this.view, t, r, n, s, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, n) {
    const r = document.createElement("ul");
    r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let s = null;
    for (let o = n.from; o < n.to; o++) {
      let { completion: l, match: a } = e[o], { section: u } = l;
      if (u) {
        let f = typeof u == "string" ? u : u.name;
        if (f != s && (o > n.from || n.from == 0))
          if (s = f, typeof u != "string" && u.header)
            r.appendChild(u.header(u));
          else {
            let d = r.appendChild(document.createElement("completion-section"));
            d.textContent = f;
          }
      }
      const c = r.appendChild(document.createElement("li"));
      c.id = t + "-" + o, c.setAttribute("role", "option");
      let h = this.optionClass(l);
      h && (c.className = h);
      for (let f of this.optionContent) {
        let d = f(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return n.from && r.classList.add("cm-completionListIncompleteTop"), n.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function kk(i, e) {
  return (t) => new wk(t, i, e);
}
function Pk(i, e) {
  let t = i.getBoundingClientRect(), n = e.getBoundingClientRect(), r = t.height / i.offsetHeight;
  n.top < t.top ? i.scrollTop -= (t.top - n.top) / r : n.bottom > t.bottom && (i.scrollTop += (n.bottom - t.bottom) / r);
}
function Xh(i) {
  return (i.boost || 0) * 100 + (i.apply ? 10 : 0) + (i.info ? 5 : 0) + (i.type ? 1 : 0);
}
function Qk(i, e) {
  let t = [], n = null, r = (u) => {
    t.push(u);
    let { section: c } = u.completion;
    if (c) {
      n || (n = []);
      let h = typeof c == "string" ? c : c.name;
      n.some((f) => f.name == h) || n.push(typeof c == "string" ? { name: h } : c);
    }
  }, s = e.facet(Le);
  for (let u of i)
    if (u.hasResult()) {
      let c = u.result.getMatch;
      if (u.result.filter === !1)
        for (let h of u.result.options)
          r(new zh(h, u.source, c ? c(h) : [], 1e9 - t.length));
      else {
        let h = e.sliceDoc(u.from, u.to), f, d = s.filterStrict ? new bk(h) : new vk(h);
        for (let p of u.result.options)
          if (f = d.match(p.label)) {
            let O = p.displayLabel ? c ? c(p, f.matched) : [] : f.matched;
            r(new zh(p, u.source, O, f.score + (p.boost || 0)));
          }
      }
    }
  if (n) {
    let u = /* @__PURE__ */ Object.create(null), c = 0, h = (f, d) => {
      var p, O;
      return ((p = f.rank) !== null && p !== void 0 ? p : 1e9) - ((O = d.rank) !== null && O !== void 0 ? O : 1e9) || (f.name < d.name ? -1 : 1);
    };
    for (let f of n.sort(h))
      c -= 1e5, u[f.name] = c;
    for (let f of t) {
      let { section: d } = f.completion;
      d && (f.score += u[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [], l = null, a = s.compareCompletions;
  for (let u of t.sort((c, h) => h.score - c.score || a(c.completion, h.completion))) {
    let c = u.completion;
    !l || l.label != c.label || l.detail != c.detail || l.type != null && c.type != null && l.type != c.type || l.apply != c.apply || l.boost != c.boost ? o.push(u) : Xh(u.completion) > Xh(l) && (o[o.length - 1] = u), l = u.completion;
  }
  return o;
}
class en {
  constructor(e, t, n, r, s, o) {
    this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = r, this.selected = s, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new en(this.options, Yh(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, n, r, s, o) {
    if (r && !o && e.some(
      (u) => u.state == 1
      /* State.Pending */
    ))
      return r.setDisabled();
    let l = Qk(e, t);
    if (!l.length)
      return r && e.some(
        (u) => u.state == 1
        /* State.Pending */
      ) ? r.setDisabled() : null;
    let a = t.facet(Le).selectOnOpen ? 0 : -1;
    if (r && r.selected != a && r.selected != -1) {
      let u = r.options[r.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == u) {
          a = c;
          break;
        }
    }
    return new en(l, Yh(n, a), {
      pos: e.reduce((u, c) => c.hasResult() ? Math.min(u, c.from) : u, 1e8),
      create: Tk,
      above: s.aboveCursor
    }, r ? r.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new en(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new en(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Js {
  constructor(e, t, n) {
    this.active = e, this.id = t, this.open = n;
  }
  static start() {
    return new Js(Ak, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, n = t.facet(Le), s = (n.override || t.languageDataAt("autocomplete", di(t)).map(yk)).map((a) => (this.active.find((c) => c.source == a) || new Ot(
      a,
      this.active.some(
        (c) => c.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, n));
    s.length == this.active.length && s.every((a, u) => a == this.active[u]) && (s = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(vu));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !Ck(s, this.active) || l ? o = en.build(s, t, this.id, o, n, l) : o && o.disabled && !s.some(
      (a) => a.state == 1
      /* State.Pending */
    ) && (o = null), !o && s.every(
      (a) => a.state != 1
      /* State.Pending */
    ) && s.some((a) => a.hasResult()) && (s = s.map((a) => a.hasResult() ? new Ot(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(sg) && (o = o && o.setSelected(a.value, this.id));
    return s == this.active && o == this.open ? this : new Js(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? $k : _k;
  }
}
function Ck(i, e) {
  if (i == e)
    return !0;
  for (let t = 0, n = 0; ; ) {
    for (; t < i.length && !i[t].hasResult; )
      t++;
    for (; n < e.length && !e[n].hasResult; )
      n++;
    let r = t == i.length, s = n == e.length;
    if (r || s)
      return r == s;
    if (i[t++].result != e[n++].result)
      return !1;
  }
}
const $k = {
  "aria-autocomplete": "list"
}, _k = {};
function Yh(i, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i
  };
  return e > -1 && (t["aria-activedescendant"] = i + "-" + e), t;
}
const Ak = [];
function rg(i, e) {
  if (i.isUserEvent("input.complete")) {
    let n = i.annotation(yu);
    if (n && e.activateOnCompletion(n))
      return 12;
  }
  let t = i.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : i.isUserEvent("delete.backward") ? 2 : i.selection ? 8 : i.docChanged ? 16 : 0;
}
class Ot {
  constructor(e, t, n = -1) {
    this.source = e, this.state = t, this.explicitPos = n;
  }
  hasResult() {
    return !1;
  }
  update(e, t) {
    let n = rg(e, t), r = this;
    (n & 8 || n & 16 && this.touches(e)) && (r = new Ot(
      r.source,
      0
      /* State.Inactive */
    )), n & 4 && r.state == 0 && (r = new Ot(
      this.source,
      1
      /* State.Pending */
    )), r = r.updateFor(e, n);
    for (let s of e.effects)
      if (s.is(Ks))
        r = new Ot(r.source, 1, s.value ? di(e.state) : -1);
      else if (s.is(yr))
        r = new Ot(
          r.source,
          0
          /* State.Inactive */
        );
      else if (s.is(vu))
        for (let o of s.value)
          o.source == r.source && (r = o);
    return r;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0 ? this : new Ot(this.source, this.state, e.mapPos(this.explicitPos));
  }
  touches(e) {
    return e.changes.touchesRange(di(e.state));
  }
}
class an extends Ot {
  constructor(e, t, n, r, s) {
    super(e, 2, t), this.result = n, this.from = r, this.to = s;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var n;
    if (!(t & 3))
      return this.map(e.changes);
    let r = this.result;
    r.map && !e.changes.empty && (r = r.map(r, e.changes));
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = di(e.state);
    if ((this.explicitPos < 0 ? l <= s : l < this.from) || l > o || !r || t & 2 && di(e.startState) == this.from)
      return new Ot(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos);
    return Ek(r.validFor, e.state, s, o) ? new an(this.source, a, r, s, o) : r.update && (r = r.update(r, s, o, new tg(e.state, l, a >= 0))) ? new an(this.source, a, r, r.from, (n = r.to) !== null && n !== void 0 ? n : di(e.state)) : new Ot(this.source, 1, a);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new an(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new Ot(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function Ek(i, e, t, n) {
  if (!i)
    return !1;
  let r = e.sliceDoc(t, n);
  return typeof i == "function" ? i(r, t, n, e) : ng(i, !0).test(r);
}
const vu = /* @__PURE__ */ W.define({
  map(i, e) {
    return i.map((t) => t.map(e));
  }
}), sg = /* @__PURE__ */ W.define(), st = /* @__PURE__ */ Re.define({
  create() {
    return Js.start();
  },
  update(i, e) {
    return i.update(e);
  },
  provide: (i) => [
    Oo.from(i, (e) => e.tooltip),
    M.contentAttributes.from(i, (e) => e.attrs)
  ]
});
function bu(i, e) {
  const t = e.completion.apply || e.completion.label;
  let n = i.state.field(st).active.find((r) => r.source == e.source);
  return n instanceof an ? (typeof t == "string" ? i.dispatch(Object.assign(Object.assign({}, gk(i.state, t, n.from, n.to)), { annotations: yu.of(e.completion) })) : t(i, e.completion, n.from, n.to), !0) : !1;
}
const Tk = /* @__PURE__ */ kk(st, bu);
function ls(i, e = "option") {
  return (t) => {
    let n = t.state.field(st, !1);
    if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < t.state.facet(Le).interactionDelay)
      return !1;
    let r = 1, s;
    e == "page" && (s = kO(t, n.open.tooltip)) && (r = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = n.open.options, l = n.open.selected > -1 ? n.open.selected + r * (i ? 1 : -1) : i ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: sg.of(l) }), !0;
  };
}
const Rk = (i) => {
  let e = i.state.field(st, !1);
  return i.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < i.state.facet(Le).interactionDelay ? !1 : bu(i, e.open.options[e.open.selected]);
}, Uh = (i) => i.state.field(st, !1) ? (i.dispatch({ effects: Ks.of(!0) }), !0) : !1, Mk = (i) => {
  let e = i.state.field(st, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (i.dispatch({ effects: yr.of(null) }), !0);
};
class Zk {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Dk = 50, Vk = 1e3, Lk = /* @__PURE__ */ Pe.fromClass(class {
  constructor(i) {
    this.view = i, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of i.state.field(st).active)
      e.state == 1 && this.startQuery(e);
  }
  update(i) {
    let e = i.state.field(st), t = i.state.facet(Le);
    if (!i.selectionSet && !i.docChanged && i.startState.field(st) == e)
      return;
    let n = i.transactions.some((s) => {
      let o = rg(s, t);
      return o & 8 || (s.selection || s.docChanged) && !(o & 3);
    });
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (n || o.context.abortOnDocChange && i.docChanged || o.updates.length + i.transactions.length > Dk && Date.now() - o.time > Vk) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            Ge(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(s--, 1);
      } else
        o.updates.push(...i.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), i.transactions.some((s) => s.effects.some((o) => o.is(Ks))) && (this.pendingStart = !0);
    let r = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((s) => s.state == 1 && !this.running.some((o) => o.active.source == s.source)) ? setTimeout(() => this.startUpdate(), r) : -1, this.composing != 0)
      for (let s of i.transactions)
        s.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && s.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: i } = this.view, e = i.field(st);
    for (let t of e.active)
      t.state == 1 && !this.running.some((n) => n.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Le).updateSyncTime));
  }
  startQuery(i) {
    let { state: e } = this.view, t = di(e), n = new tg(e, t, i.explicitPos == t, this.view), r = new Zk(i, n);
    this.running.push(r), Promise.resolve(i.source(n)).then((s) => {
      r.context.aborted || (r.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: yr.of(null) }), Ge(this.view.state, s);
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
    let e = [], t = this.view.state.facet(Le), n = this.view.state.field(st);
    for (let r = 0; r < this.running.length; r++) {
      let s = this.running[r];
      if (s.done === void 0)
        continue;
      if (this.running.splice(r--, 1), s.done) {
        let l = new an(s.active.source, s.active.explicitPos, s.done, s.done.from, (i = s.done.to) !== null && i !== void 0 ? i : di(s.updates.length ? s.updates[0].startState : this.view.state));
        for (let a of s.updates)
          l = l.update(a, t);
        if (l.hasResult()) {
          e.push(l);
          continue;
        }
      }
      let o = n.active.find((l) => l.source == s.active.source);
      if (o && o.state == 1)
        if (s.done == null) {
          let l = new Ot(
            s.active.source,
            0
            /* State.Inactive */
          );
          for (let a of s.updates)
            l = l.update(a, t);
          l.state != 1 && e.push(l);
        } else
          this.startQuery(o);
    }
    (e.length || n.open && n.open.disabled) && this.view.dispatch({ effects: vu.of(e) });
  }
}, {
  eventHandlers: {
    blur(i) {
      let e = this.view.state.field(st, !1);
      if (e && e.tooltip && this.view.state.facet(Le).closeOnBlur) {
        let t = e.open && kO(this.view, e.open.tooltip);
        (!t || !t.dom.contains(i.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: yr.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Ks.of(!1) }), 20), this.composing = 0;
    }
  }
}), Bk = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), Ik = /* @__PURE__ */ xi.highest(/* @__PURE__ */ M.domEventHandlers({
  keydown(i, e) {
    let t = e.state.field(st, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || i.key.length > 1 || i.ctrlKey && !(Bk && i.altKey) || i.metaKey)
      return !1;
    let n = t.open.options[t.open.selected], r = t.active.find((o) => o.source == n.source), s = n.completion.commitCharacters || r.result.commitCharacters;
    return s && s.indexOf(i.key) > -1 && bu(e, n), !1;
  }
})), og = /* @__PURE__ */ M.baseTheme({
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
class jk {
  constructor(e, t, n, r) {
    this.field = e, this.line = t, this.from = n, this.to = r;
  }
}
class Su {
  constructor(e, t, n) {
    this.field = e, this.from = t, this.to = n;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, qe.TrackDel), n = e.mapPos(this.to, 1, qe.TrackDel);
    return t == null || n == null ? null : new Su(this.field, t, n);
  }
}
class xu {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let n = [], r = [t], s = e.doc.lineAt(t), o = /^\s*/.exec(s.text)[0];
    for (let a of this.lines) {
      if (n.length) {
        let u = o, c = /^\t*/.exec(a)[0].length;
        for (let h = 0; h < c; h++)
          u += e.facet(_r);
        r.push(t + u.length - c), a = u + a.slice(c);
      }
      n.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new Su(a.field, r[a.line] + a.from, r[a.line] + a.to));
    return { text: n, ranges: l };
  }
  static parse(e) {
    let t = [], n = [], r = [], s;
    for (let o of e.split(/\r\n?|\n/)) {
      for (; s = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(o); ) {
        let l = s[1] ? +s[1] : null, a = s[2] || s[3] || "", u = -1, c = a.replace(/\\[{}]/g, (h) => h[1]);
        for (let h = 0; h < t.length; h++)
          (l != null ? t[h].seq == l : c && t[h].name == c) && (u = h);
        if (u < 0) {
          let h = 0;
          for (; h < t.length && (l == null || t[h].seq != null && t[h].seq < l); )
            h++;
          t.splice(h, 0, { seq: l, name: c }), u = h;
          for (let f of r)
            f.field >= u && f.field++;
        }
        r.push(new jk(u, n.length, s.index, s.index + c.length)), o = o.slice(0, s.index) + a + o.slice(s.index + s[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, u) => {
        for (let c of r)
          c.line == n.length && c.from > u && (c.from--, c.to--);
        return a;
      }), n.push(o);
    }
    return new xu(n, r);
  }
}
let zk = /* @__PURE__ */ q.widget({ widget: /* @__PURE__ */ new class extends Wt {
  toDOM() {
    let i = document.createElement("span");
    return i.className = "cm-snippetFieldPosition", i;
  }
  ignoreEvent() {
    return !1;
  }
}() }), qk = /* @__PURE__ */ q.mark({ class: "cm-snippetField" });
class _n {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = q.set(e.map((n) => (n.from == n.to ? zk : qk).range(n.from, n.to)));
  }
  map(e) {
    let t = [];
    for (let n of this.ranges) {
      let r = n.map(e);
      if (!r)
        return null;
      t.push(r);
    }
    return new _n(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((n) => n.field == this.active && n.from <= t.from && n.to >= t.to));
  }
}
const Mr = /* @__PURE__ */ W.define({
  map(i, e) {
    return i && i.map(e);
  }
}), Nk = /* @__PURE__ */ W.define(), vr = /* @__PURE__ */ Re.define({
  create() {
    return null;
  },
  update(i, e) {
    for (let t of e.effects) {
      if (t.is(Mr))
        return t.value;
      if (t.is(Nk) && i)
        return new _n(i.ranges, t.value);
    }
    return i && e.docChanged && (i = i.map(e.changes)), i && e.selection && !i.selectionInsideField(e.selection) && (i = null), i;
  },
  provide: (i) => M.decorations.from(i, (e) => e ? e.deco : q.none)
});
function wu(i, e) {
  return C.create(i.filter((t) => t.field == e).map((t) => C.range(t.from, t.to)));
}
function Xk(i) {
  let e = xu.parse(i);
  return (t, n, r, s) => {
    let { text: o, ranges: l } = e.instantiate(t.state, r), a = {
      changes: { from: r, to: s, insert: se.of(o) },
      scrollIntoView: !0,
      annotations: n ? [yu.of(n), Ee.userEvent.of("input.complete")] : void 0
    };
    if (l.length && (a.selection = wu(l, 0)), l.some((u) => u.field > 0)) {
      let u = new _n(l, 0), c = a.effects = [Mr.of(u)];
      t.state.field(vr, !1) === void 0 && c.push(W.appendConfig.of([vr, Gk, Hk, og]));
    }
    t.dispatch(t.state.update(a));
  };
}
function lg(i) {
  return ({ state: e, dispatch: t }) => {
    let n = e.field(vr, !1);
    if (!n || i < 0 && n.active == 0)
      return !1;
    let r = n.active + i, s = i > 0 && !n.ranges.some((o) => o.field == r + i);
    return t(e.update({
      selection: wu(n.ranges, r),
      effects: Mr.of(s ? null : new _n(n.ranges, r)),
      scrollIntoView: !0
    })), !0;
  };
}
const Yk = ({ state: i, dispatch: e }) => i.field(vr, !1) ? (e(i.update({ effects: Mr.of(null) })), !0) : !1, Uk = /* @__PURE__ */ lg(1), Fk = /* @__PURE__ */ lg(-1), Wk = [
  { key: "Tab", run: Uk, shift: Fk },
  { key: "Escape", run: Yk }
], Fh = /* @__PURE__ */ D.define({
  combine(i) {
    return i.length ? i[0] : Wk;
  }
}), Gk = /* @__PURE__ */ xi.highest(/* @__PURE__ */ Xi.compute([Fh], (i) => i.facet(Fh)));
function it(i, e) {
  return Object.assign(Object.assign({}, e), { apply: Xk(i) });
}
const Hk = /* @__PURE__ */ M.domEventHandlers({
  mousedown(i, e) {
    let t = e.state.field(vr, !1), n;
    if (!t || (n = e.posAtCoords({ x: i.clientX, y: i.clientY })) == null)
      return !1;
    let r = t.ranges.find((s) => s.from <= n && s.to >= n);
    return !r || r.field == t.active ? !1 : (e.dispatch({
      selection: wu(t.ranges, r.field),
      effects: Mr.of(t.ranges.some((s) => s.field > r.field) ? new _n(t.ranges, r.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), br = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, Ai = /* @__PURE__ */ W.define({
  map(i, e) {
    let t = e.mapPos(i, -1, qe.TrackAfter);
    return t ?? void 0;
  }
}), ku = /* @__PURE__ */ new class extends Li {
}();
ku.startSide = 1;
ku.endSide = -1;
const ag = /* @__PURE__ */ Re.define({
  create() {
    return ne.empty;
  },
  update(i, e) {
    if (i = i.map(e.changes), e.selection) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      i = i.update({ filter: (n) => n >= t.from && n <= t.to });
    }
    for (let t of e.effects)
      t.is(Ai) && (i = i.update({ add: [ku.range(t.value, t.value + 1)] }));
    return i;
  }
});
function Kk() {
  return [e2, ag];
}
const ol = "()[]{}<>";
function ug(i) {
  for (let e = 0; e < ol.length; e += 2)
    if (ol.charCodeAt(e) == i)
      return ol.charAt(e + 1);
  return Ia(i < 128 ? i : i + 1);
}
function cg(i, e) {
  return i.languageDataAt("closeBrackets", e)[0] || br;
}
const Jk = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), e2 = /* @__PURE__ */ M.inputHandler.of((i, e, t, n) => {
  if ((Jk ? i.composing : i.compositionStarted) || i.state.readOnly)
    return !1;
  let r = i.state.selection.main;
  if (n.length > 2 || n.length == 2 && bt(je(n, 0)) == 1 || e != r.from || t != r.to)
    return !1;
  let s = n2(i.state, n);
  return s ? (i.dispatch(s), !0) : !1;
}), t2 = ({ state: i, dispatch: e }) => {
  if (i.readOnly)
    return !1;
  let n = cg(i, i.selection.main.head).brackets || br.brackets, r = null, s = i.changeByRange((o) => {
    if (o.empty) {
      let l = r2(i.doc, o.head);
      for (let a of n)
        if (a == l && Po(i.doc, o.head) == ug(je(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: C.cursor(o.head - a.length)
          };
    }
    return { range: r = o };
  });
  return r || e(i.update(s, { scrollIntoView: !0, userEvent: "delete.backward" })), !r;
}, i2 = [
  { key: "Backspace", run: t2 }
];
function n2(i, e) {
  let t = cg(i, i.selection.main.head), n = t.brackets || br.brackets;
  for (let r of n) {
    let s = ug(je(r, 0));
    if (e == r)
      return s == r ? l2(i, r, n.indexOf(r + r + r) > -1, t) : s2(i, r, s, t.before || br.before);
    if (e == s && hg(i, i.selection.main.from))
      return o2(i, r, s);
  }
  return null;
}
function hg(i, e) {
  let t = !1;
  return i.field(ag).between(0, i.doc.length, (n) => {
    n == e && (t = !0);
  }), t;
}
function Po(i, e) {
  let t = i.sliceString(e, e + 2);
  return t.slice(0, bt(je(t, 0)));
}
function r2(i, e) {
  let t = i.sliceString(e - 2, e);
  return bt(je(t, 0)) == t.length ? t : t.slice(1);
}
function s2(i, e, t, n) {
  let r = null, s = i.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }],
        effects: Ai.of(o.to + e.length),
        range: C.range(o.anchor + e.length, o.head + e.length)
      };
    let l = Po(i.doc, o.head);
    return !l || /\s/.test(l) || n.indexOf(l) > -1 ? {
      changes: { insert: e + t, from: o.head },
      effects: Ai.of(o.head + e.length),
      range: C.cursor(o.head + e.length)
    } : { range: r = o };
  });
  return r ? null : i.update(s, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function o2(i, e, t) {
  let n = null, r = i.changeByRange((s) => s.empty && Po(i.doc, s.head) == t ? {
    changes: { from: s.head, to: s.head + t.length, insert: t },
    range: C.cursor(s.head + t.length)
  } : n = { range: s });
  return n ? null : i.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function l2(i, e, t, n) {
  let r = n.stringPrefixes || br.stringPrefixes, s = null, o = i.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }],
        effects: Ai.of(l.to + e.length),
        range: C.range(l.anchor + e.length, l.head + e.length)
      };
    let a = l.head, u = Po(i.doc, a), c;
    if (u == e) {
      if (Wh(i, a))
        return {
          changes: { insert: e + e, from: a },
          effects: Ai.of(a + e.length),
          range: C.cursor(a + e.length)
        };
      if (hg(i, a)) {
        let f = t && i.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return {
          changes: { from: a, to: a + f.length, insert: f },
          range: C.cursor(a + f.length)
        };
      }
    } else {
      if (t && i.sliceDoc(a - 2 * e.length, a) == e + e && (c = Gh(i, a - 2 * e.length, r)) > -1 && Wh(i, c))
        return {
          changes: { insert: e + e + e + e, from: a },
          effects: Ai.of(a + e.length),
          range: C.cursor(a + e.length)
        };
      if (i.charCategorizer(a)(u) != Se.Word && Gh(i, a, r) > -1 && !a2(i, a, e, r))
        return {
          changes: { insert: e + e, from: a },
          effects: Ai.of(a + e.length),
          range: C.cursor(a + e.length)
        };
    }
    return { range: s = l };
  });
  return s ? null : i.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Wh(i, e) {
  let t = Ve(i).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function a2(i, e, t, n) {
  let r = Ve(i).resolveInner(e, -1), s = n.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = i.sliceDoc(r.from, Math.min(r.to, r.from + t.length + s)), a = l.indexOf(t);
    if (!a || a > -1 && n.indexOf(l.slice(0, a)) > -1) {
      let c = r.firstChild;
      for (; c && c.from == r.from && c.to - c.from > t.length + a; ) {
        if (i.sliceDoc(c.to - t.length, c.to) == t)
          return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let u = r.to == e && r.parent;
    if (!u)
      break;
    r = u;
  }
  return !1;
}
function Gh(i, e, t) {
  let n = i.charCategorizer(e);
  if (n(i.sliceDoc(e - 1, e)) != Se.Word)
    return e;
  for (let r of t) {
    let s = e - r.length;
    if (i.sliceDoc(s, e) == r && n(i.sliceDoc(s - 1, s)) != Se.Word)
      return s;
  }
  return -1;
}
function u2(i = {}) {
  return [
    Ik,
    st,
    Le.of(i),
    Lk,
    c2,
    og
  ];
}
const fg = [
  { key: "Ctrl-Space", run: Uh },
  { mac: "Alt-`", run: Uh },
  { key: "Escape", run: Mk },
  { key: "ArrowDown", run: /* @__PURE__ */ ls(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ ls(!1) },
  { key: "PageDown", run: /* @__PURE__ */ ls(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ ls(!1, "page") },
  { key: "Enter", run: Rk }
], c2 = /* @__PURE__ */ xi.highest(/* @__PURE__ */ Xi.computeN([Le], (i) => i.facet(Le).defaultKeymap ? [fg] : [])), dg = [
  sS(),
  aS(),
  xO(),
  rm(),
  KS(),
  vO(),
  vb(),
  ee.allowMultipleSelections.of(!0),
  LS(),
  lu(HO, { fallback: !0 }),
  ax(),
  Kk(),
  u2(),
  Lb(),
  jb(),
  Ab(),
  Yw(),
  Xi.of([
    ...i2,
    ...hu,
    ...hk,
    ...am,
    ...FS,
    ...fg,
    ...Aw
  ])
], h2 = [
  xO(),
  rm(),
  vO(),
  lu(HO, { fallback: !0 }),
  Xi.of([
    ...hu,
    ...am
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
const f2 = (i) => i ? Object.entries(i).reduce((e, [t, n]) => (t = t.charAt(0).toUpperCase() + t.slice(1), t = `on${t}`, { ...e, [t]: n }), {}) : {};
function Hh(i, e = {}, t) {
  const { props: n, domProps: r, on: s, ...o } = e, l = s ? f2(s) : {};
  return Za(
    i,
    { ...o, ...n, ...r, ...l },
    t
  );
}
const d2 = (i) => typeof i == "function" ? i() : i;
var p2 = Ra({
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
    const t = ie(), n = ie(i.modelValue), r = Kt(new M()), s = I({
      get: () => r.value.hasFocus,
      set: (Q) => {
        Q && r.value.focus();
      }
    }), o = I({
      get: () => r.value.state.selection,
      set: (Q) => r.value.dispatch({ selection: Q })
    }), l = I({
      get: () => r.value.state.selection.main.head,
      set: (Q) => r.value.dispatch({ selection: { anchor: Q } })
    }), a = I(
      {
        get: () => r.value.state.toJSON(),
        set: (Q) => r.value.setState(ee.fromJSON(Q))
      }
    ), u = ie(0), c = ie(0), h = I(() => {
      const Q = new hn(), $ = new hn();
      if (i.basic && i.minimal)
        throw "[Vue CodeMirror] Both basic and minimal cannot be specified.";
      return [
        // Toggle basic setup
        i.basic && !i.minimal ? dg : void 0,
        // Toggle minimal setup
        i.minimal && !i.basic ? h2 : void 0,
        // ViewUpdate event listener
        M.updateListener.of((z) => {
          var G;
          e.emit("focus", r.value.hasFocus), u.value = (G = r.value.state.doc) == null ? void 0 : G.length, !(z.changes.empty || !z.docChanged) && (i.linter && (i.forceLinting && Mh(r.value), c.value = i.linter(r.value).length), e.emit("update", z));
        }),
        // Toggle light/dark mode.
        M.theme(i.theme, { dark: i.dark }),
        // Toggle line wrapping
        i.wrap ? M.lineWrapping : void 0,
        // Indent with tab
        i.tab ? Xi.of([xw]) : void 0,
        // Tab character
        i.indentUnit ? _r.of(i.indentUnit) : void 0,
        // Allow Multiple Selections
        ee.allowMultipleSelections.of(i.allowMultipleSelections),
        // Indent tab size
        i.tabSize ? $.of(ee.tabSize.of(i.tabSize)) : void 0,
        // locale settings
        i.phrases ? ee.phrases.of(i.phrases) : void 0,
        // Readonly option
        ee.readOnly.of(i.readonly),
        // Editable option
        M.editable.of(!i.disabled),
        // Set Line break char
        i.lineSeparator ? ee.lineSeparator.of(i.lineSeparator) : void 0,
        // Lang
        i.lang ? Q.of(i.lang) : void 0,
        // Append Linter settings
        i.linter ? Tw(i.linter, i.linterConfig) : void 0,
        // Show 🔴 to error line when linter enabled.
        i.linter && i.gutter ? Iw(i.gutterConfig) : void 0,
        // Placeholder
        i.placeholder ? Mb(i.placeholder) : void 0,
        // Append Extensions
        ...i.extensions
      ].filter((z) => !!z);
    });
    ae(
      h,
      (Q) => {
        var $;
        ($ = r.value) == null || $.dispatch({
          effects: W.reconfigure.of(Q)
        });
      },
      { immediate: !0 }
    ), ae(
      () => i.modelValue,
      async (Q) => {
        if (r.value.composing || // IME fix
        r.value.state.doc.toJSON().join(i.lineSeparator ?? `
`) === Q)
          return;
        const $ = !r.value.state.selection.ranges.every(
          (z) => z.anchor < Q.length && z.head < Q.length
        );
        r.value.dispatch({
          changes: { from: 0, to: r.value.state.doc.length, insert: Q },
          selection: $ ? { anchor: 0, head: 0 } : r.value.state.selection,
          scrollIntoView: !0
        });
      },
      { immediate: !0 }
    ), Ni(async () => {
      let Q = n.value;
      t.value && (t.value.childNodes[0] && (n.value !== "" && console.warn(
        "[CodeMirror.vue] The <code-mirror> tag contains child elements that overwrite the `v-model` values."
      ), Q = t.value.childNodes[0].innerText.trim()), r.value = new M({
        parent: t.value,
        state: ee.create({ doc: Q, extensions: h.value }),
        dispatch: ($) => {
          r.value.update([$]), !($.changes.empty || !$.docChanged) && (e.emit("update:modelValue", $.state.doc.toString() ?? ""), e.emit("change", $.state));
        }
      }), await Pn(), e.emit("ready", {
        view: r.value,
        state: r.value.state,
        container: t.value
      }));
    }), Rd(() => {
      r.value.destroy(), e.emit("destroy");
    });
    const f = () => {
      !i.linter || !r.value || (i.forceLinting && Mh(r.value), c.value = Pw(r.value.state));
    }, d = () => {
      var Q, $;
      (Q = r.value) == null || Q.dispatch({
        effects: W.reconfigure.of([])
      }), ($ = r.value) == null || $.dispatch({
        effects: W.appendConfig.of(h.value)
      });
    }, p = (Q, $) => r.value.state.sliceDoc(Q, $), O = (Q) => r.value.state.doc.line(Q + 1).text, m = () => r.value.state.doc.lines, g = () => r.value.state.selection.main.head, y = () => {
      let Q;
      return (Q = r.value.state.selection.ranges) !== null && Q !== void 0 ? Q : [];
    }, b = () => {
      let Q;
      return (Q = r.value.state.sliceDoc(
        r.value.state.selection.main.from,
        r.value.state.selection.main.to
      )) !== null && Q !== void 0 ? Q : "";
    }, x = () => {
      const Q = r.value.state;
      return Q ? Q.selection.ranges.map(
        ($) => Q.sliceDoc($.from, $.to)
      ) : [];
    }, S = () => r.value.state.selection.ranges.some(
      (Q) => !Q.empty
    ), k = (Q, $, z) => r.value.dispatch({
      changes: { from: $, to: z, insert: Q }
    }), w = (Q) => r.value.dispatch(r.value.state.replaceSelection(Q)), P = (Q) => r.value.dispatch({ selection: { anchor: Q } }), A = (Q, $) => r.value.dispatch({ selection: { anchor: Q, head: $ } }), U = (Q, $) => r.value.dispatch({
      selection: C.create(Q, $)
    }), L = (Q) => r.value.dispatch({
      selection: C.create(
        o.value.ranges.map(($) => $.extend(Q($)))
      )
    }), T = {
      editor: t,
      view: r,
      cursor: l,
      selection: o,
      focus: s,
      length: u,
      json: a,
      diagnosticCount: c,
      dom: r.value.contentDOM,
      lint: f,
      forceReconfigure: d,
      // Bellow is CodeMirror5's function
      getRange: p,
      getLine: O,
      lineCount: m,
      getCursor: g,
      listSelections: y,
      getSelection: b,
      getSelections: x,
      somethingSelected: S,
      replaceRange: k,
      replaceSelection: w,
      setCursor: P,
      setSelection: A,
      setSelections: U,
      extendSelectionsBy: L
    };
    return e.expose(T), T;
  },
  render() {
    return Hh(
      this.$props.tag,
      {
        ref: "editor",
        class: "vue-codemirror"
      },
      this.$slots.default ? (
        // Hide original content
        Hh(
          "aside",
          { style: "display: none;", "aria-hidden": "true" },
          d2(this.$slots.default)
        )
      ) : void 0
    );
  }
});
class eo {
  /**
  @internal
  */
  constructor(e, t, n, r, s, o, l, a, u, c = 0, h) {
    this.p = e, this.stack = t, this.state = n, this.reducePos = r, this.pos = s, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = u, this.lookAhead = c, this.parent = h;
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
    let r = e.parser.context;
    return new eo(e, [], t, n, n, 0, [], 0, r ? new Kh(r, r.start) : null, 0, null);
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
    let n = e >> 19, r = e & 65535, { parser: s } = this.p, o = this.reducePos < this.pos - 25;
    o && this.setLookAhead(this.pos);
    let l = s.dynamicPrecedence(r);
    if (l && (this.score += l), n == 0) {
      this.pushState(s.getGoto(this.state, r, !0), this.reducePos), r < s.minRepeatTerm && this.storeNode(r, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(r, this.reducePos);
      return;
    }
    let a = this.stack.length - (n - 1) * 3 - (e & 262144 ? 6 : 0), u = a ? this.stack[a - 2] : this.p.ranges[0].from, c = this.reducePos - u;
    c >= 2e3 && !(!((t = this.p.parser.nodeSet.types[r]) === null || t === void 0) && t.isAnonymous) && (u == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = c) : this.p.lastBigReductionSize < c && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = u, this.p.lastBigReductionSize = c));
    let h = a ? this.stack[a - 1] : 0, f = this.bufferBase + this.buffer.length - h;
    if (r < s.minRepeatTerm || e & 131072) {
      let d = s.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(r, u, d, f + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = s.getGoto(d, r, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(r, u);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, n, r = 4, s = !1) {
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
    if (!s || this.pos == n)
      this.buffer.push(e, t, n, r);
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
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, r > 4 && (r -= 4);
      }
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = n, this.buffer[o + 3] = r;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, n, r) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      this.pos = r, this.shiftContext(t, n), t <= this.p.parser.maxNode && this.buffer.push(t, n, r, 4);
    else {
      let s = e, { parser: o } = this.p;
      (r > this.pos || t <= o.maxNode) && (this.pos = r, o.stateFlag(
        s,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = r)), this.pushState(s, n), this.shiftContext(t, n), t <= o.maxNode && this.buffer.push(t, n, r, 4);
    }
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, n, r) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, n, r);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let r = this.pos;
    this.reducePos = this.pos = r + e.length, this.pushState(t, r), this.buffer.push(
      n,
      r,
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
    let n = e.buffer.slice(t), r = e.bufferBase + t;
    for (; e && r == e.bufferBase; )
      e = e.parent;
    return new eo(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, r, this.curContext, this.lookAhead, e);
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
    for (let t = new O2(this); ; ) {
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
      let r = [];
      for (let s = 0, o; s < t.length; s += 2)
        (o = t[s + 1]) != this.state && this.p.parser.hasAction(o, e) && r.push(t[s], o);
      if (this.stack.length < 120)
        for (let s = 0; r.length < 8 && s < t.length; s += 2) {
          let o = t[s + 1];
          r.some((l, a) => a & 1 && l == o) || r.push(t[s], o);
        }
      t = r;
    }
    let n = [];
    for (let r = 0; r < t.length && n.length < 4; r += 2) {
      let s = t[r + 1];
      if (s == this.state)
        continue;
      let o = this.split();
      o.pushState(s, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[r], this.pos), o.reducePos = this.pos, o.score -= 200, n.push(o);
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
      let n = t >> 19, r = t & 65535, s = this.stack.length - n * 3;
      if (s < 0 || e.getGoto(this.stack[s], r, !1) < 0) {
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
    let { parser: e } = this.p, t = [], n = (r, s) => {
      if (!t.includes(r))
        return t.push(r), e.allActions(r, (o) => {
          if (!(o & 393216)) if (o & 65536) {
            let l = (o >> 19) - s;
            if (l > 1) {
              let a = o & 65535, u = this.stack.length - l * 3;
              if (u >= 0 && e.getGoto(this.stack[u], a, !1) >= 0)
                return l << 19 | 65536 | a;
            }
          } else {
            let l = n(o, s + 1);
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
      let t = new Kh(this.curContext.tracker, e);
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
}
class Kh {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class O2 {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, n = e >> 19;
    n == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (n - 1) * 3;
    let r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = r;
  }
}
class to {
  constructor(e, t, n) {
    this.stack = e, this.pos = t, this.index = n, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new to(e, t, t - e.bufferBase);
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
    return new to(this.stack, this.pos, this.index);
  }
}
function Yn(i, e = Uint16Array) {
  if (typeof i != "string")
    return i;
  let t = null;
  for (let n = 0, r = 0; n < i.length; ) {
    let s = 0;
    for (; ; ) {
      let o = i.charCodeAt(n++), l = !1;
      if (o == 126) {
        s = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), s += a, l)
        break;
      s *= 46;
    }
    t ? t[r++] = s : t = new e(s);
  }
  return t;
}
class xs {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const Jh = new xs();
class m2 {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Jh, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let n = this.range, r = this.rangeIndex, s = this.pos + e;
    for (; s < n.from; ) {
      if (!r)
        return null;
      let o = this.ranges[--r];
      s -= n.from - o.to, n = o;
    }
    for (; t < 0 ? s > n.to : s >= n.to; ) {
      if (r == this.ranges.length - 1)
        return null;
      let o = this.ranges[++r];
      s += o.from - n.to, n = o;
    }
    return s;
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
    let t = this.chunkOff + e, n, r;
    if (t >= 0 && t < this.chunk.length)
      n = this.pos + e, r = this.chunk.charCodeAt(t);
    else {
      let s = this.resolveOffset(e, 1);
      if (s == null)
        return -1;
      if (n = s, n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
        r = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= n; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = n), n + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - n)), r = this.chunk2.charCodeAt(0);
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), r;
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
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = Jh, this.pos != e) {
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
    for (let r of this.ranges) {
      if (r.from >= t)
        break;
      r.to > e && (n += this.input.read(Math.max(r.from, e), Math.min(r.to, t)));
    }
    return n;
  }
}
class un {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: n } = t.p;
    pg(this.data, e, t, this.id, n.data, n.tokenPrecTable);
  }
}
un.prototype.contextual = un.prototype.fallback = un.prototype.extend = !1;
class Oa {
  constructor(e, t, n) {
    this.precTable = t, this.elseToken = n, this.data = typeof e == "string" ? Yn(e) : e;
  }
  token(e, t) {
    let n = e.pos, r = 0;
    for (; ; ) {
      let s = e.next < 0, o = e.resolveOffset(1, 1);
      if (pg(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
        break;
      if (this.elseToken == null)
        return;
      if (s || r++, o == null)
        break;
      e.reset(o, e.token);
    }
    r && (e.reset(n, e.token), e.acceptToken(this.elseToken, r));
  }
}
Oa.prototype.contextual = un.prototype.fallback = un.prototype.extend = !1;
class Zr {
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
function pg(i, e, t, n, r, s) {
  let o = 0, l = 1 << n, { dialect: a } = t.p.parser;
  e: for (; l & i[o]; ) {
    let u = i[o + 1];
    for (let d = o + 3; d < u; d += 2)
      if ((i[d + 1] & l) > 0) {
        let p = i[d];
        if (a.allows(p) && (e.token.value == -1 || e.token.value == p || g2(p, e.token.value, r, s))) {
          e.acceptToken(p);
          break;
        }
      }
    let c = e.next, h = 0, f = i[o + 2];
    if (e.next < 0 && f > h && i[u + f * 3 - 3] == 65535) {
      o = i[u + f * 3 - 1];
      continue e;
    }
    for (; h < f; ) {
      let d = h + f >> 1, p = u + d + (d << 1), O = i[p], m = i[p + 1] || 65536;
      if (c < O)
        f = d;
      else if (c >= m)
        h = d + 1;
      else {
        o = i[p + 2], e.advance();
        continue e;
      }
    }
    break;
  }
}
function ef(i, e, t) {
  for (let n = e, r; (r = i[n]) != 65535; n++)
    if (r == t)
      return n - e;
  return -1;
}
function g2(i, e, t, n) {
  let r = ef(t, n, e);
  return r < 0 || ef(t, n, i) < r;
}
const ft = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let ll = null;
function tf(i, e, t) {
  let n = i.cursor(Ze.IncludeAnonymous);
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
class y2 {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? tf(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? tf(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
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
      let n = this.trees[t], r = this.index[t];
      if (r == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let s = n.children[r], o = this.start[t] + n.positions[r];
      if (o > e)
        return this.nextStart = o, null;
      if (s instanceof Te) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + s.length;
          if (l <= this.safeTo) {
            let a = s.prop(te.lookAhead);
            if (!a || l + a < this.fragment.to)
              return s;
          }
        }
        this.index[t]++, o + s.length >= Math.max(this.safeFrom, e) && (this.trees.push(s), this.start.push(o), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = o + s.length;
    }
  }
}
class v2 {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((n) => new xs());
  }
  getActions(e) {
    let t = 0, n = null, { parser: r } = e.p, { tokenizers: s } = r, o = r.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let u = 0; u < s.length; u++) {
      if (!(1 << u & o))
        continue;
      let c = s[u], h = this.tokens[u];
      if (!(n && !c.fallback) && ((c.contextual || h.start != e.pos || h.mask != o || h.context != l) && (this.updateCachedToken(h, c, e), h.mask = o, h.context = l), h.lookAhead > h.end + 25 && (a = Math.max(h.lookAhead, a)), h.value != 0)) {
        let f = t;
        if (h.extended > -1 && (t = this.addActions(e, h.extended, h.end, t)), t = this.addActions(e, h.value, h.end, t), !c.extend && (n = h, t > f))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !n && e.pos == this.stream.end && (n = new xs(), n.value = e.p.parser.eofTerm, n.start = n.end = e.pos, t = this.addActions(e, n.value, n.end, t)), this.mainToken = n, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new xs(), { pos: n, p: r } = e;
    return t.start = n, t.end = Math.min(n + 1, r.stream.end), t.value = n == r.stream.end ? r.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, n) {
    let r = this.stream.clipPos(n.pos);
    if (t.token(this.stream.reset(r, e), n), e.value > -1) {
      let { parser: s } = n.p;
      for (let o = 0; o < s.specialized.length; o++)
        if (s.specialized[o] == e.value) {
          let l = s.specializers[o](this.stream.read(e.start, e.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? e.extended = l >> 1 : e.value = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(r + 1);
  }
  putAction(e, t, n, r) {
    for (let s = 0; s < r; s += 3)
      if (this.actions[s] == e)
        return r;
    return this.actions[r++] = e, this.actions[r++] = t, this.actions[r++] = n, r;
  }
  addActions(e, t, n, r) {
    let { state: s } = e, { parser: o } = e.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let u = o.stateSlot(
        s,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; u += 3) {
        if (l[u] == 65535)
          if (l[u + 1] == 1)
            u = Ht(l, u + 2);
          else {
            r == 0 && l[u + 1] == 2 && (r = this.putAction(Ht(l, u + 2), t, n, r));
            break;
          }
        l[u] == t && (r = this.putAction(Ht(l, u + 1), t, n, r));
      }
    return r;
  }
}
class b2 {
  constructor(e, t, n, r) {
    this.parser = e, this.input = t, this.ranges = r, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new m2(t, r), this.tokens = new v2(e, this.stream), this.topTerm = e.top[1];
    let { from: s } = r[0];
    this.stacks = [eo.start(this, e.top[0], s)], this.fragments = n.length && this.stream.end - s > e.bufferLength * 4 ? new y2(n, e.nodeSet) : null;
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
    let e = this.stacks, t = this.minStackPos, n = this.stacks = [], r, s;
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
            r || (r = [], s = []), r.push(l);
            let a = this.tokens.getMainToken(l);
            s.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let o = r && w2(r);
      if (o)
        return ft && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw ft && r && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && r) {
      let o = this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, s, n);
      if (o)
        return ft && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
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
          let u = n[a];
          if (l.sameState(u) || l.buffer.length > 500 && u.buffer.length > 500)
            if ((l.score - u.score || l.buffer.length - u.buffer.length) > 0)
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
    let r = e.pos, { parser: s } = this, o = ft ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && r > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let u = e.curContext && e.curContext.tracker.strict, c = u ? e.curContext.hash : 0;
      for (let h = this.fragments.nodeAt(r); h; ) {
        let f = this.parser.nodeSet.types[h.type.id] == h.type ? s.getGoto(e.state, h.type.id) : -1;
        if (f > -1 && h.length && (!u || (h.prop(te.contextHash) || 0) == c))
          return e.useNode(h, f), ft && console.log(o + this.stackID(e) + ` (via reuse of ${s.getName(h.type.id)})`), !0;
        if (!(h instanceof Te) || h.children.length == 0 || h.positions[0] > 0)
          break;
        let d = h.children[0];
        if (d instanceof Te && h.positions[0] == 0)
          h = d;
        else
          break;
      }
    }
    let l = s.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return e.reduce(l), ft && console.log(o + this.stackID(e) + ` (via always-reduce ${s.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let u = 0; u < a.length; ) {
      let c = a[u++], h = a[u++], f = a[u++], d = u == a.length || !n, p = d ? e : e.split(), O = this.tokens.mainToken;
      if (p.apply(c, h, O ? O.start : p.pos, f), ft && console.log(o + this.stackID(p) + ` (via ${c & 65536 ? `reduce of ${s.getName(
        c & 65535
        /* Action.ValueMask */
      )}` : "shift"} for ${s.getName(h)} @ ${r}${p == e ? "" : ", split"})`), d)
        return !0;
      p.pos > r ? t.push(p) : n.push(p);
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
        return nf(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let r = null, s = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], u = t[(o << 1) + 1], c = ft ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (s || (s = !0, l.restart(), ft && console.log(c + this.stackID(l) + " (restarted)"), this.advanceFully(l, n))))
        continue;
      let h = l.split(), f = c;
      for (let d = 0; h.forceReduce() && d < 10 && (ft && console.log(f + this.stackID(h) + " (via force-reduce)"), !this.advanceFully(h, n)); d++)
        ft && (f = this.stackID(h) + " -> ");
      for (let d of l.recoverByInsert(a))
        ft && console.log(c + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, n);
      this.stream.end > l.pos ? (u == l.pos && (u++, a = 0), l.recoverByDelete(a, u), ft && console.log(c + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), nf(l, n)) : (!r || r.score < l.score) && (r = l);
    }
    return r;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), Te.build({
      buffer: to.create(e),
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
    let t = (ll || (ll = /* @__PURE__ */ new WeakMap())).get(e);
    return t || ll.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function nf(i, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == i.pos && n.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class S2 {
  constructor(e, t, n) {
    this.source = e, this.flags = t, this.disabled = n;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const al = (i) => i;
class x2 {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || al, this.reduce = e.reduce || al, this.reuse = e.reuse || al, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class io extends RO {
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
    let n = Object.keys(e.topRules).map((l) => e.topRules[l][1]), r = [];
    for (let l = 0; l < t.length; l++)
      r.push([]);
    function s(l, a, u) {
      r[l].push([a, a.deserialize(String(u))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = te[a]);
        for (let u = 1; u < l.length; ) {
          let c = l[u++];
          if (c >= 0)
            s(c, a, l[u++]);
          else {
            let h = l[u + -c];
            for (let f = -c; f > 0; f--)
              s(l[u++], a, h);
            u++;
          }
        }
      }
    this.nodeSet = new eu(t.map((l, a) => ct.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: r[a],
      top: n.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = _O;
    let o = Yn(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(rf), this.states = Yn(e.states, Uint32Array), this.data = Yn(e.stateData), this.goto = Yn(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new un(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, n) {
    let r = new b2(this, e, t, n);
    for (let s of this.wrappers)
      r = s(r, e, t, n);
    return r;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, n = !1) {
    let r = this.goto;
    if (t >= r[0])
      return -1;
    for (let s = r[t + 1]; ; ) {
      let o = r[s++], l = o & 1, a = r[s++];
      if (l && n)
        return a;
      for (let u = s + (o >> 1); s < u; s++)
        if (r[s] == e)
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
    for (let r = 0; r < 2; r++)
      for (let s = this.stateSlot(
        e,
        r ? 2 : 1
        /* ParseState.Actions */
      ), o; ; s += 3) {
        if ((o = n[s]) == 65535)
          if (n[s + 1] == 1)
            o = n[s = Ht(n, s + 2)];
          else {
            if (n[s + 1] == 2)
              return Ht(n, s + 2);
            break;
          }
        if (o == t || o == 0)
          return Ht(n, s + 1);
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
    ), r = n ? t(n) : void 0;
    for (let s = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); r == null; s += 3) {
      if (this.data[s] == 65535)
        if (this.data[s + 1] == 1)
          s = Ht(this.data, s + 2);
        else
          break;
      r = t(Ht(this.data, s + 1));
    }
    return r;
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
          n = Ht(this.data, n + 2);
        else
          break;
      if (!(this.data[n + 2] & 1)) {
        let r = this.data[n + 1];
        t.some((s, o) => o & 1 && s == r) || t.push(this.data[n], r);
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
    let t = Object.assign(Object.create(io.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let n = this.topRules[e.top];
      if (!n)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = n;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((n) => {
      let r = e.tokenizers.find((s) => s.from == n);
      return r ? r.to : n;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((n, r) => {
      let s = e.specializers.find((l) => l.from == n.external);
      if (!s)
        return n;
      let o = Object.assign(Object.assign({}, n), { external: s.to });
      return t.specializers[r] = rf(o), o;
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
      for (let s of e.split(" ")) {
        let o = t.indexOf(s);
        o >= 0 && (n[o] = !0);
      }
    let r = null;
    for (let s = 0; s < t.length; s++)
      if (!n[s])
        for (let o = this.dialects[t[s]], l; (l = this.data[o++]) != 65535; )
          (r || (r = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new S2(e, n, r);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new io(e);
  }
}
function Ht(i, e) {
  return i[e] | i[e + 1] << 16;
}
function w2(i) {
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
function rf(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, n) => i.external(t, n) << 1 | e;
  }
  return i.get;
}
const k2 = 312, P2 = 313, sf = 1, Q2 = 2, C2 = 3, $2 = 4, _2 = 314, A2 = 316, E2 = 317, T2 = 5, R2 = 6, M2 = 0, ma = [
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
], Og = 125, Z2 = 59, ga = 47, D2 = 42, V2 = 43, L2 = 45, B2 = 60, I2 = 44, j2 = 63, z2 = 46, q2 = 91, N2 = new x2({
  start: !1,
  shift(i, e) {
    return e == T2 || e == R2 || e == A2 ? i : e == E2;
  },
  strict: !1
}), X2 = new Zr((i, e) => {
  let { next: t } = i;
  (t == Og || t == -1 || e.context) && i.acceptToken(_2);
}, { contextual: !0, fallback: !0 }), Y2 = new Zr((i, e) => {
  let { next: t } = i, n;
  ma.indexOf(t) > -1 || t == ga && ((n = i.peek(1)) == ga || n == D2) || t != Og && t != Z2 && t != -1 && !e.context && i.acceptToken(k2);
}, { contextual: !0 }), U2 = new Zr((i, e) => {
  i.next == q2 && !e.context && i.acceptToken(P2);
}, { contextual: !0 }), F2 = new Zr((i, e) => {
  let { next: t } = i;
  if (t == V2 || t == L2) {
    if (i.advance(), t == i.next) {
      i.advance();
      let n = !e.context && e.canShift(sf);
      i.acceptToken(n ? sf : Q2);
    }
  } else t == j2 && i.peek(1) == z2 && (i.advance(), i.advance(), (i.next < 48 || i.next > 57) && i.acceptToken(C2));
}, { contextual: !0 });
function ul(i, e) {
  return i >= 65 && i <= 90 || i >= 97 && i <= 122 || i == 95 || i >= 192 || !e && i >= 48 && i <= 57;
}
const W2 = new Zr((i, e) => {
  if (i.next != B2 || !e.dialectEnabled(M2) || (i.advance(), i.next == ga)) return;
  let t = 0;
  for (; ma.indexOf(i.next) > -1; )
    i.advance(), t++;
  if (ul(i.next, !0)) {
    for (i.advance(), t++; ul(i.next, !1); )
      i.advance(), t++;
    for (; ma.indexOf(i.next) > -1; )
      i.advance(), t++;
    if (i.next == I2) return;
    for (let n = 0; ; n++) {
      if (n == 7) {
        if (!ul(i.next, !0)) return;
        break;
      }
      if (i.next != "extends".charCodeAt(n)) break;
      i.advance(), t++;
    }
  }
  i.acceptToken($2, -t);
}), G2 = MO({
  "get set async static": v.modifier,
  "for while do if else switch try catch finally return throw break continue default case": v.controlKeyword,
  "in of await yield void typeof delete instanceof": v.operatorKeyword,
  "let var const using function class extends": v.definitionKeyword,
  "import export from": v.moduleKeyword,
  "with debugger as new": v.keyword,
  TemplateString: v.special(v.string),
  super: v.atom,
  BooleanLiteral: v.bool,
  this: v.self,
  null: v.null,
  Star: v.modifier,
  VariableName: v.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": v.function(v.variableName),
  VariableDefinition: v.definition(v.variableName),
  Label: v.labelName,
  PropertyName: v.propertyName,
  PrivatePropertyName: v.special(v.propertyName),
  "CallExpression/MemberExpression/PropertyName": v.function(v.propertyName),
  "FunctionDeclaration/VariableDefinition": v.function(v.definition(v.variableName)),
  "ClassDeclaration/VariableDefinition": v.definition(v.className),
  PropertyDefinition: v.definition(v.propertyName),
  PrivatePropertyDefinition: v.definition(v.special(v.propertyName)),
  UpdateOp: v.updateOperator,
  "LineComment Hashbang": v.lineComment,
  BlockComment: v.blockComment,
  Number: v.number,
  String: v.string,
  Escape: v.escape,
  ArithOp: v.arithmeticOperator,
  LogicOp: v.logicOperator,
  BitOp: v.bitwiseOperator,
  CompareOp: v.compareOperator,
  RegExp: v.regexp,
  Equals: v.definitionOperator,
  Arrow: v.function(v.punctuation),
  ": Spread": v.punctuation,
  "( )": v.paren,
  "[ ]": v.squareBracket,
  "{ }": v.brace,
  "InterpolationStart InterpolationEnd": v.special(v.brace),
  ".": v.derefOperator,
  ", ;": v.separator,
  "@": v.meta,
  TypeName: v.typeName,
  TypeDefinition: v.definition(v.typeName),
  "type enum interface implements namespace module declare": v.definitionKeyword,
  "abstract global Privacy readonly override": v.modifier,
  "is keyof unique infer": v.operatorKeyword,
  JSXAttributeValue: v.attributeValue,
  JSXText: v.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": v.angleBracket,
  "JSXIdentifier JSXNameSpacedName": v.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": v.attributeName,
  "JSXBuiltin/JSXIdentifier": v.standard(v.tagName)
}), H2 = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, extends: 54, this: 58, true: 66, false: 66, null: 78, void: 82, typeof: 86, super: 102, new: 136, delete: 148, yield: 157, await: 161, class: 166, public: 229, private: 229, protected: 229, readonly: 231, instanceof: 250, satisfies: 253, in: 254, const: 256, import: 290, keyof: 345, unique: 349, infer: 355, is: 391, abstract: 411, implements: 413, type: 415, let: 418, var: 420, using: 423, interface: 429, enum: 433, namespace: 439, module: 441, declare: 445, global: 449, for: 468, of: 477, while: 480, with: 484, do: 488, if: 492, else: 494, switch: 498, case: 504, try: 510, catch: 514, finally: 518, return: 522, throw: 526, break: 530, continue: 534, debugger: 538 }, K2 = { __proto__: null, async: 123, get: 125, set: 127, declare: 189, public: 191, private: 191, protected: 191, static: 193, abstract: 195, override: 197, readonly: 203, accessor: 205, new: 395 }, J2 = { __proto__: null, "<": 187 }, eP = io.deserialize({
  version: 14,
  states: "$CdQ%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#D^O.QQlO'#DdO.bQlO'#DoO%[QlO'#DwO0fQlO'#EPOOQ!0Lf'#EX'#EXO1PQ`O'#EUOOQO'#Em'#EmOOQO'#Ih'#IhO1XQ`O'#GpO1dQ`O'#ElO1iQ`O'#ElO3hQ!0MxO'#JnO6[Q!0MxO'#JoO6uQ`O'#F[O6zQ,UO'#FsOOQ!0Lf'#Fe'#FeO7VO7dO'#FeO7eQMhO'#FzO9RQ`O'#FyOOQ!0Lf'#Jo'#JoOOQ!0Lb'#Jn'#JnO9WQ`O'#GtOOQ['#K['#K[O9cQ`O'#IUO9hQ!0LrO'#IVOOQ['#J['#J[OOQ['#IZ'#IZQ`QlOOQ`QlOOO9pQ!L^O'#DsO9wQlO'#D{O:OQlO'#D}O9^Q`O'#GpO:VQMhO'#CoO:eQ`O'#EkO:pQ`O'#EvO:uQMhO'#FdO;dQ`O'#GpOOQO'#K]'#K]O;iQ`O'#K]O;wQ`O'#GxO;wQ`O'#GyO;wQ`O'#G{O9^Q`O'#HOO<nQ`O'#HRO>VQ`O'#CeO>gQ`O'#H_O>oQ`O'#HeO>oQ`O'#HgO`QlO'#HiO>oQ`O'#HkO>oQ`O'#HnO>tQ`O'#HtO>yQ!0LsO'#HzO%[QlO'#H|O?UQ!0LsO'#IOO?aQ!0LsO'#IQO9hQ!0LrO'#ISO?lQ!0MxO'#CiO@nQpO'#DiQOQ`OOO%[QlO'#D}OAUQ`O'#EQO:VQMhO'#EkOAaQ`O'#EkOAlQ!bO'#FdOOQ['#Cg'#CgOOQ!0Lb'#Dn'#DnOOQ!0Lb'#Jr'#JrO%[QlO'#JrOOQO'#Ju'#JuOOQO'#Id'#IdOBlQpO'#EdOOQ!0Lb'#Ec'#EcOOQ!0Lb'#Jy'#JyOChQ!0MSO'#EdOCrQpO'#ETOOQO'#Jt'#JtODWQpO'#JuOEeQpO'#ETOCrQpO'#EdPErO&2DjO'#CbPOOO)CDy)CDyOOOO'#I['#I[OE}O#tO,59UOOQ!0Lh,59U,59UOOOO'#I]'#I]OF]O&jO,59UOFkQ!L^O'#D`OOOO'#I_'#I_OFrO#@ItO,59xOOQ!0Lf,59x,59xOGQQlO'#I`OGeQ`O'#JpOIdQ!fO'#JpO+}QlO'#JpOIkQ`O,5:OOJRQ`O'#EmOJ`Q`O'#KPOJkQ`O'#KOOJkQ`O'#KOOJsQ`O,5;ZOJxQ`O'#J}OOQ!0Ln,5:Z,5:ZOKPQlO,5:ZOL}Q!0MxO,5:cOMnQ`O,5:kONXQ!0LrO'#J|ON`Q`O'#J{O9WQ`O'#J{ONtQ`O'#J{ON|Q`O,5;YO! RQ`O'#J{O!#WQ!fO'#JoOOQ!0Lh'#Ci'#CiO%[QlO'#EPO!#vQ!fO,5:pOOQS'#Jv'#JvOOQO-E<f-E<fO9^Q`O,5=[O!$^Q`O,5=[O!$cQlO,5;WO!&fQMhO'#EhO!(PQ`O,5;WO!(UQlO'#DvO!(`QpO,5;aO!(hQpO,5;aO%[QlO,5;aOOQ['#FS'#FSOOQ['#FU'#FUO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bOOQ['#FY'#FYO!(vQlO,5;sOOQ!0Lf,5;x,5;xOOQ!0Lf,5;y,5;yOOQ!0Lf,5;{,5;{O%[QlO'#IlO!*yQ!0LrO,5<gO%[QlO,5;bO!&fQMhO,5;bO!+hQMhO,5;bO!-YQMhO'#EZO%[QlO,5;vOOQ!0Lf,5;z,5;zO!-aQ,UO'#FiO!.^Q,UO'#KTO!-xQ,UO'#KTO!.eQ,UO'#KTOOQO'#KT'#KTO!.yQ,UO,5<ROOOW,5<_,5<_O!/[QlO'#FuOOOW'#Ik'#IkO7VO7dO,5<PO!/cQ,UO'#FwOOQ!0Lf,5<P,5<PO!0SQ$IUO'#CvOOQ!0Lh'#Cz'#CzO!0gO#@ItO'#DOO!1TQMjO,5<dO!1[Q`O,5<fO!2wQ(CWO'#GVO!3UQ`O'#GWO!3ZQ`O'#GWO!4yQ(CWO'#G[O!6OQpO'#G`OOQO'#Gk'#GkO!+oQMhO'#GjOOQO'#Gm'#GmO!+oQMhO'#GlO!6qQ$IUO'#JhOOQ!0Lh'#Jh'#JhO!6{Q`O'#JgO!7ZQ`O'#JfO!7cQ`O'#CuOOQ!0Lh'#Cx'#CxO!7kQ`O'#CzOOQ!0Lh'#DS'#DSOOQ!0Lh'#DU'#DUO1SQ`O'#DWO!+oQMhO'#F}O!+oQMhO'#GPO!7pQ`O'#GRO!7uQ`O'#GSO!3ZQ`O'#GYO!+oQMhO'#G_O!7zQ`O'#EnO!8iQ`O,5<eOOQ!0Lb'#Cr'#CrO!8qQ`O'#EoO!9kQpO'#EpOOQ!0Lb'#J}'#J}O!9rQ!0LrO'#K^O9hQ!0LrO,5=`O`QlO,5>pOOQ['#Jd'#JdOOQ[,5>q,5>qOOQ[-E<X-E<XO!;qQ!0MxO,5:_O!9fQpO,5:]O!>[Q!0MxO,5:gO%[QlO,5:gO!@rQ!0MxO,5:iOOQO,5@w,5@wO!AcQMhO,5=[O!AqQ!0LrO'#JeO9RQ`O'#JeO!BSQ!0LrO,59ZO!B_QpO,59ZO!BgQMhO,59ZO:VQMhO,59ZO!BrQ`O,5;WO!BzQ`O'#H^O!C`Q`O'#KaO%[QlO,5;|O!9fQpO,5<OO!ChQ`O,5=wO!CmQ`O,5=wO!CrQ`O,5=wO9hQ!0LrO,5=wO;wQ`O,5=gOOQO'#Cv'#CvO!DQQpO,5=dO!DYQMhO,5=eO!DeQ`O,5=gO!DjQ!bO,5=jO!DrQ`O'#K]O>tQ`O'#HTO9^Q`O'#HVO!DwQ`O'#HVO:VQMhO'#HXO!D|Q`O'#HXOOQ[,5=m,5=mO!ERQ`O'#HYO!EdQ`O'#CoO!EiQ`O,59PO!EsQ`O,59PO!GxQlO,59POOQ[,59P,59PO!HYQ!0LrO,59PO%[QlO,59PO!JeQlO'#HaOOQ['#Hb'#HbOOQ['#Hc'#HcO`QlO,5=yO!J{Q`O,5=yO`QlO,5>PO`QlO,5>RO!KQQ`O,5>TO`QlO,5>VO!KVQ`O,5>YO!K[QlO,5>`OOQ[,5>f,5>fO%[QlO,5>fO9hQ!0LrO,5>hOOQ[,5>j,5>jO# fQ`O,5>jOOQ[,5>l,5>lO# fQ`O,5>lOOQ[,5>n,5>nO#!SQpO'#D[O%[QlO'#JrO#!uQpO'#JrO##PQpO'#DjO##bQpO'#DjO#%sQlO'#DjO#%zQ`O'#JqO#&SQ`O,5:TO#&XQ`O'#EqO#&gQ`O'#KQO#&oQ`O,5;[O#&tQpO'#DjO#'RQpO'#ESOOQ!0Lf,5:l,5:lO%[QlO,5:lO#'YQ`O,5:lO>tQ`O,5;VO!B_QpO,5;VO!BgQMhO,5;VO:VQMhO,5;VO#'bQ`O,5@^O#'gQ07dO,5:pOOQO-E<b-E<bO#(mQ!0MSO,5;OOCrQpO,5:oO#(wQpO,5:oOCrQpO,5;OO!BSQ!0LrO,5:oOOQ!0Lb'#Eg'#EgOOQO,5;O,5;OO%[QlO,5;OO#)UQ!0LrO,5;OO#)aQ!0LrO,5;OO!B_QpO,5:oOOQO,5;U,5;UO#)oQ!0LrO,5;OPOOO'#IY'#IYP#*TO&2DjO,58|POOO,58|,58|OOOO-E<Y-E<YOOQ!0Lh1G.p1G.pOOOO-E<Z-E<ZOOOO,59z,59zO#*`Q!bO,59zOOOO-E<]-E<]OOQ!0Lf1G/d1G/dO#*eQ!fO,5>zO+}QlO,5>zOOQO,5?Q,5?QO#*oQlO'#I`OOQO-E<^-E<^O#*|Q`O,5@[O#+UQ!fO,5@[O#+]Q`O,5@jOOQ!0Lf1G/j1G/jO%[QlO,5@kO#+eQ`O'#IfOOQO-E<d-E<dO#+]Q`O,5@jOOQ!0Lb1G0u1G0uOOQ!0Ln1G/u1G/uOOQ!0Ln1G0V1G0VO%[QlO,5@hO#+yQ!0LrO,5@hO#,[Q!0LrO,5@hO#,cQ`O,5@gO9WQ`O,5@gO#,kQ`O,5@gO#,yQ`O'#IiO#,cQ`O,5@gOOQ!0Lb1G0t1G0tO!(`QpO,5:rO!(kQpO,5:rOOQS,5:t,5:tO#-kQdO,5:tO#-sQMhO1G2vO9^Q`O1G2vOOQ!0Lf1G0r1G0rO#.RQ!0MxO1G0rO#/WQ!0MvO,5;SOOQ!0Lh'#GU'#GUO#/tQ!0MzO'#JhO!$cQlO1G0rO#2PQ!fO'#JsO%[QlO'#JsO#2ZQ`O,5:bOOQ!0Lh'#D['#D[OOQ!0Lf1G0{1G0{O%[QlO1G0{OOQ!0Lf1G1e1G1eO#2`Q`O1G0{O#4tQ!0MxO1G0|O#4{Q!0MxO1G0|O#7cQ!0MxO1G0|O#7jQ!0MxO1G0|O#:QQ!0MxO1G0|O#<hQ!0MxO1G0|O#<oQ!0MxO1G0|O#<vQ!0MxO1G0|O#?^Q!0MxO1G0|O#?eQ!0MxO1G0|O#ArQ?MtO'#CiO#CmQ?MtO1G1_O#CtQ?MtO'#JoO#DXQ!0MxO,5?WOOQ!0Lb-E<j-E<jO#FfQ!0MxO1G0|O#GcQ!0MzO1G0|OOQ!0Lf1G0|1G0|O#HfQMjO'#JxO#HpQ`O,5:uO#HuQ!0MxO1G1bO#IiQ,UO,5<VO#IqQ,UO,5<WO#IyQ,UO'#FnO#JbQ`O'#FmOOQO'#KU'#KUOOQO'#Ij'#IjO#JgQ,UO1G1mOOQ!0Lf1G1m1G1mOOOW1G1x1G1xO#JxQ?MtO'#JnO#KSQ`O,5<aO!(vQlO,5<aOOOW-E<i-E<iOOQ!0Lf1G1k1G1kO#KXQpO'#KTOOQ!0Lf,5<c,5<cO#KaQpO,5<cO#KfQMhO'#DQOOOO'#I^'#I^O#KmO#@ItO,59jOOQ!0Lh,59j,59jO%[QlO1G2OO!7uQ`O'#InO#KxQ`O,5<xOOQ!0Lh,5<u,5<uO!+oQMhO'#IqO#LfQMjO,5=UO!+oQMhO'#IsO#MXQMjO,5=WO!&fQMhO,5=YOOQO1G2Q1G2QO#McQ!dO'#CrO#MvQ(CWO'#EoO#N{QpO'#G`O$ cQ!dO,5<qO$ jQ`O'#KXO9WQ`O'#KXO$ xQ`O,5<sO!+oQMhO,5<rO$ }Q`O'#GXO$!`Q`O,5<rO$!eQ!dO'#GUO$!rQ!dO'#KYO$!|Q`O'#KYO!&fQMhO'#KYO$#RQ`O,5<vO$#WQlO'#JrO$#bQpO'#GaO##bQpO'#GaO$#sQ`O'#GeO!3ZQ`O'#GhO$#xQ!0LrO'#IpO$$TQpO,5<zOOQ!0Lp,5<z,5<zO$$[QpO'#GaO$$iQpO'#GbO$$zQpO'#GbO$%PQMjO,5=UO$%aQMjO,5=WOOQ!0Lh,5=Z,5=ZO!+oQMhO,5@RO!+oQMhO,5@RO$%qQ`O'#IuO$%|Q`O,5@QO$&UQ`O,59aOOQ!0Lh,59f,59fO$&{Q$IYO,59rOOQ!0Lh'#Jl'#JlO$'nQMjO,5<iO$(aQMjO,5<kO@fQ`O,5<mOOQ!0Lh,5<n,5<nO$(kQ`O,5<tO$(pQMjO,5<yO$)QQ`O'#J{O!$cQlO1G2PO$)VQ`O1G2PO9WQ`O'#KOO9WQ`O'#EqO%[QlO'#EqO9WQ`O'#IwO$)[Q!0LrO,5@xOOQ[1G2z1G2zOOQ[1G4[1G4[OOQ!0Lf1G/y1G/yOOQ!0Lf1G/w1G/wO$+^Q!0MxO1G0ROOQ[1G2v1G2vO!&fQMhO1G2vO%[QlO1G2vO#-vQ`O1G2vO$-bQMhO'#EhOOQ!0Lb,5@P,5@PO$-lQ!0LrO,5@POOQ[1G.u1G.uO!BSQ!0LrO1G.uO!B_QpO1G.uO!BgQMhO1G.uO$-}Q`O1G0rO$.SQ`O'#CiO$._Q`O'#KbO$.gQ`O,5=xO$.lQ`O'#KbO$.qQ`O'#KbO$/PQ`O'#I}O$/_Q`O,5@{O$/gQ!fO1G1hOOQ!0Lf1G1j1G1jO9^Q`O1G3cO@fQ`O1G3cO$/nQ`O1G3cO$/sQ`O1G3cOOQ[1G3c1G3cO!DeQ`O1G3RO!&fQMhO1G3OO$/xQ`O1G3OOOQ[1G3P1G3PO!&fQMhO1G3PO$/}Q`O1G3PO$0VQpO'#G}OOQ[1G3R1G3RO!5yQpO'#IyO!DjQ!bO1G3UOOQ[1G3U1G3UOOQ[,5=o,5=oO$0_QMhO,5=qO9^Q`O,5=qO$#sQ`O,5=sO9RQ`O,5=sO!B_QpO,5=sO!BgQMhO,5=sO:VQMhO,5=sO$0mQ`O'#K`O$0xQ`O,5=tOOQ[1G.k1G.kO$0}Q!0LrO1G.kO@fQ`O1G.kO$1YQ`O1G.kO9hQ!0LrO1G.kO$3bQ!fO,5@}O$3oQ`O,5@}O9WQ`O,5@}O$3zQlO,5={O$4RQ`O,5={OOQ[1G3e1G3eO`QlO1G3eOOQ[1G3k1G3kOOQ[1G3m1G3mO>oQ`O1G3oO$4WQlO1G3qO$8[QlO'#HpOOQ[1G3t1G3tO$8iQ`O'#HvO>tQ`O'#HxOOQ[1G3z1G3zO$8qQlO1G3zO9hQ!0LrO1G4QOOQ[1G4S1G4SOOQ!0Lb'#G]'#G]O9hQ!0LrO1G4UO9hQ!0LrO1G4WO$<xQ`O,5@^O!(vQlO,5;]O9WQ`O,5;]O>tQ`O,5:UO!(vQlO,5:UO!B_QpO,5:UO$<}Q?MtO,5:UOOQO,5;],5;]O$=XQpO'#IaO$=oQ`O,5@]OOQ!0Lf1G/o1G/oO$=wQpO'#IgO$>RQ`O,5@lOOQ!0Lb1G0v1G0vO##bQpO,5:UOOQO'#Ic'#IcO$>ZQpO,5:nOOQ!0Ln,5:n,5:nO#']Q`O1G0WOOQ!0Lf1G0W1G0WO%[QlO1G0WOOQ!0Lf1G0q1G0qO>tQ`O1G0qO!B_QpO1G0qO!BgQMhO1G0qOOQ!0Lb1G5x1G5xO!BSQ!0LrO1G0ZOOQO1G0j1G0jO%[QlO1G0jO$>bQ!0LrO1G0jO$>mQ!0LrO1G0jO!B_QpO1G0ZOCrQpO1G0ZO$>{Q!0LrO1G0jOOQO1G0Z1G0ZO$?aQ!0MxO1G0jPOOO-E<W-E<WPOOO1G.h1G.hOOOO1G/f1G/fO$?kQ!bO,5<gO$?sQ!fO1G4fOOQO1G4l1G4lO%[QlO,5>zO$?}Q`O1G5vO$@VQ`O1G6UO$@_Q!fO1G6VO9WQ`O,5?QO$@iQ!0MxO1G6SO%[QlO1G6SO$@yQ!0LrO1G6SO$A[Q`O1G6RO$A[Q`O1G6RO9WQ`O1G6RO$AdQ`O,5?TO9WQ`O,5?TOOQO,5?T,5?TO$AxQ`O,5?TO$)QQ`O,5?TOOQO-E<g-E<gOOQS1G0^1G0^OOQS1G0`1G0`O#-nQ`O1G0`OOQ[7+(b7+(bO!&fQMhO7+(bO%[QlO7+(bO$BWQ`O7+(bO$BcQMhO7+(bO$BqQ!0MzO,5=UO$D|Q!0MzO,5=WO$GXQ!0MzO,5=UO$IjQ!0MzO,5=WO$K{Q!0MzO,59rO$NQQ!0MzO,5<iO%!]Q!0MzO,5<kO%$hQ!0MzO,5<yOOQ!0Lf7+&^7+&^O%&yQ!0MxO7+&^O%'mQlO'#IbO%'zQ`O,5@_O%(SQ!fO,5@_OOQ!0Lf1G/|1G/|O%(^Q`O7+&gOOQ!0Lf7+&g7+&gO%(cQ?MtO,5:cO%[QlO7+&yO%(mQ?MtO,5:_O%(zQ?MtO,5:gO%)UQ?MtO,5:iO%)`QMhO'#IeO%)jQ`O,5@dOOQ!0Lh1G0a1G0aOOQO1G1q1G1qOOQO1G1r1G1rO%)rQ!jO,5<YO!(vQlO,5<XOOQO-E<h-E<hOOQ!0Lf7+'X7+'XOOOW7+'d7+'dOOOW1G1{1G1{O%)}Q`O1G1{OOQ!0Lf1G1}1G1}OOOO,59l,59lO%*SQ!dO,59lOOOO-E<[-E<[OOQ!0Lh1G/U1G/UO%*ZQ!0MxO7+'jOOQ!0Lh,5?Y,5?YO%*}QMhO1G2dP%+UQ`O'#InPOQ!0Lh-E<l-E<lO%+rQMjO,5?]OOQ!0Lh-E<o-E<oO%,eQMjO,5?_OOQ!0Lh-E<q-E<qO%,oQ!dO1G2tO%,vQ!dO'#CrO%-^QMhO'#KOO$#WQlO'#JrOOQ!0Lh1G2]1G2]O%-eQ`O'#ImO%-yQ`O,5@sO%-yQ`O,5@sO%.RQ`O,5@sO%.^Q`O,5@sOOQO1G2_1G2_O%.lQMjO1G2^O!+oQMhO1G2^O%.|Q(CWO'#IoO%/ZQ`O,5@tO!&fQMhO,5@tO%/cQ!dO,5@tOOQ!0Lh1G2b1G2bO%1sQ!fO'#CiO%1}Q`O,5<}OOQ!0Lb,5<{,5<{O%2VQpO,5<{OOQ!0Lb,5<|,5<|OCcQ`O,5<{O%2bQpO,5<{OOQ!0Lb,5=P,5=PO$)QQ`O,5=SOOQO,5?[,5?[OOQO-E<n-E<nOOQ!0Lp1G2f1G2fO##bQpO,5<{O$#WQlO,5<}O%2pQ`O,5<|O%2{QpO,5<|O!+oQMhO'#IqO%3uQMjO1G2pO!+oQMhO'#IsO%4hQMjO1G2rO%4rQMjO1G5mO%4|QMjO1G5mOOQO,5?a,5?aOOQO-E<s-E<sOOQO1G.{1G.{O!9fQpO,59tO%[QlO,59tOOQ!0Lh,5<h,5<hO%5ZQ`O1G2XO!+oQMhO1G2`O%5`Q!0MxO7+'kOOQ!0Lf7+'k7+'kO!$cQlO7+'kO%6SQ`O,5;]OOQ!0Lb,5?c,5?cOOQ!0Lb-E<u-E<uO%6XQ!dO'#KZO#']Q`O7+(bO4UQ!fO7+(bO$BZQ`O7+(bO%6cQ!0MvO'#CiO%6vQ!0MvO,5=QO%7hQ`O,5=QOOQ!0Lb1G5k1G5kOOQ[7+$a7+$aO!BSQ!0LrO7+$aO!B_QpO7+$aO!$cQlO7+&^O%7mQ`O'#I|O%8UQ`O,5@|OOQO1G3d1G3dO9^Q`O,5@|O%8UQ`O,5@|O%8^Q`O,5@|OOQO,5?i,5?iOOQO-E<{-E<{OOQ!0Lf7+'S7+'SO%8cQ`O7+(}O9hQ!0LrO7+(}O9^Q`O7+(}O@fQ`O7+(}OOQ[7+(m7+(mO%8hQ!0MvO7+(jO!&fQMhO7+(jO!D`Q`O7+(kOOQ[7+(k7+(kO!&fQMhO7+(kO%8rQ`O'#K_O%8}Q`O,5=iOOQO,5?e,5?eOOQO-E<w-E<wOOQ[7+(p7+(pO%:aQpO'#HWOOQ[1G3]1G3]O!&fQMhO1G3]O%[QlO1G3]O%:hQ`O1G3]O%:sQMhO1G3]O9hQ!0LrO1G3_O$#sQ`O1G3_O9RQ`O1G3_O!B_QpO1G3_O!BgQMhO1G3_O%;RQ`O'#I{O%;gQ`O,5@zO%;oQpO,5@zOOQ!0Lb1G3`1G3`OOQ[7+$V7+$VO@fQ`O7+$VO9hQ!0LrO7+$VO%;zQ`O7+$VO%[QlO1G6iO%[QlO1G6jO%<PQ!0LrO1G6iO%<ZQlO1G3gO%<bQ`O1G3gO%<gQlO1G3gOOQ[7+)P7+)PO9hQ!0LrO7+)ZO`QlO7+)]OOQ['#Ke'#KeOOQ['#JO'#JOO%<nQlO,5>[OOQ[,5>[,5>[O%[QlO'#HqO%<{Q`O'#HsOOQ[,5>b,5>bO9WQ`O,5>bOOQ[,5>d,5>dOOQ[7+)f7+)fOOQ[7+)l7+)lOOQ[7+)p7+)pOOQ[7+)r7+)rO%=QQpO1G5xO%=lQ?MtO1G0wO%=vQ`O1G0wOOQO1G/p1G/pO%>RQ?MtO1G/pO>tQ`O1G/pO!(vQlO'#DjOOQO,5>{,5>{OOQO-E<_-E<_OOQO,5?R,5?ROOQO-E<e-E<eO!B_QpO1G/pOOQO-E<a-E<aOOQ!0Ln1G0Y1G0YOOQ!0Lf7+%r7+%rO#']Q`O7+%rOOQ!0Lf7+&]7+&]O>tQ`O7+&]O!B_QpO7+&]OOQO7+%u7+%uO$?aQ!0MxO7+&UOOQO7+&U7+&UO%[QlO7+&UO%>]Q!0LrO7+&UO!BSQ!0LrO7+%uO!B_QpO7+%uO%>hQ!0LrO7+&UO%>vQ!0MxO7++nO%[QlO7++nO%?WQ`O7++mO%?WQ`O7++mOOQO1G4o1G4oO9WQ`O1G4oO%?`Q`O1G4oOOQS7+%z7+%zO#']Q`O<<K|O4UQ!fO<<K|O%?nQ`O<<K|OOQ[<<K|<<K|O!&fQMhO<<K|O%[QlO<<K|O%?vQ`O<<K|O%@RQ!0MzO,5?]O%B^Q!0MzO,5?_O%DiQ!0MzO1G2^O%FzQ!0MzO1G2pO%IVQ!0MzO1G2rO%KbQ!fO,5>|O%[QlO,5>|OOQO-E<`-E<`O%KlQ`O1G5yOOQ!0Lf<<JR<<JRO%KtQ?MtO1G0rO%M{Q?MtO1G0|O%NSQ?MtO1G0|O&!TQ?MtO1G0|O&![Q?MtO1G0|O&$]Q?MtO1G0|O&&^Q?MtO1G0|O&&eQ?MtO1G0|O&&lQ?MtO1G0|O&(mQ?MtO1G0|O&(tQ?MtO1G0|O&({Q!0MxO<<JeO&*sQ?MtO1G0|O&+pQ?MvO1G0|O&,sQ?MvO'#JhO&.yQ?MtO1G1bO&/WQ?MtO1G0RO&/bQMjO,5?POOQO-E<c-E<cO!(vQlO'#FpOOQO'#KV'#KVOOQO1G1t1G1tO&/lQ`O1G1sO&/qQ?MtO,5?WOOOW7+'g7+'gOOOO1G/W1G/WO&/{Q!dO1G4tOOQ!0Lh7+(O7+(OP!&fQMhO,5?YO!+oQMhO7+(`O&0SQ`O,5?XO9WQ`O,5?XOOQO-E<k-E<kO&0bQ`O1G6_O&0bQ`O1G6_O&0jQ`O1G6_O&0uQMjO7+'xO&1VQ!dO,5?ZO&1aQ`O,5?ZO!&fQMhO,5?ZOOQO-E<m-E<mO&1fQ!dO1G6`O&1pQ`O1G6`O&1xQ`O1G2iO!&fQMhO1G2iOOQ!0Lb1G2g1G2gOOQ!0Lb1G2h1G2hO%2VQpO1G2gO!B_QpO1G2gOCcQ`O1G2gOOQ!0Lb1G2n1G2nO&1}QpO1G2gO&2]Q`O1G2iO$)QQ`O1G2hOCcQ`O1G2hO$#WQlO1G2iO&2eQ`O1G2hO&3XQMjO,5?]OOQ!0Lh-E<p-E<pO&3zQMjO,5?_OOQ!0Lh-E<r-E<rO!+oQMhO7++XOOQ!0Lh1G/`1G/`O&4UQ`O1G/`OOQ!0Lh7+'s7+'sO&4ZQMjO7+'zO&4kQ!0MxO<<KVOOQ!0Lf<<KV<<KVO&5_Q`O1G0wO!&fQMhO'#IvO&5dQ`O,5@uO&7fQ!fO<<K|O!&fQMhO1G2lOOQ[<<G{<<G{O!BSQ!0LrO<<G{O&7mQ!0MxO<<IxOOQ!0Lf<<Ix<<IxOOQO,5?h,5?hO&8aQ`O,5?hO&8fQ`O,5?hOOQO-E<z-E<zO&8tQ`O1G6hO&8tQ`O1G6hO9^Q`O1G6hO@fQ`O<<LiOOQ[<<Li<<LiO&8|Q`O<<LiO9hQ!0LrO<<LiOOQ[<<LU<<LUO%8hQ!0MvO<<LUOOQ[<<LV<<LVO!D`Q`O<<LVO&9RQpO'#IxO&9^Q`O,5@yO!(vQlO,5@yOOQ[1G3T1G3TOOQO'#Iz'#IzO9hQ!0LrO'#IzO&9fQpO,5=rOOQ[,5=r,5=rO&9mQpO'#EdO&9tQpO'#GcO&9yQ`O7+(wO&:OQ`O7+(wOOQ[7+(w7+(wO!&fQMhO7+(wO%[QlO7+(wO&:WQ`O7+(wOOQ[7+(y7+(yO9hQ!0LrO7+(yO$#sQ`O7+(yO9RQ`O7+(yO!B_QpO7+(yO&:cQ`O,5?gOOQO-E<y-E<yOOQO'#HZ'#HZO&:nQ`O1G6fO9hQ!0LrO<<GqOOQ[<<Gq<<GqO@fQ`O<<GqO&:vQ`O7+,TO&:{Q`O7+,UO%[QlO7+,TO%[QlO7+,UOOQ[7+)R7+)RO&;QQ`O7+)RO&;VQlO7+)RO&;^Q`O7+)ROOQ[<<Lu<<LuOOQ[<<Lw<<LwOOQ[-E<|-E<|OOQ[1G3v1G3vO&;cQ`O,5>]OOQ[,5>_,5>_O&;hQ`O1G3|O9WQ`O7+&cO!(vQlO7+&cOOQO7+%[7+%[O&;mQ?MtO1G6VO>tQ`O7+%[OOQ!0Lf<<I^<<I^OOQ!0Lf<<Iw<<IwO>tQ`O<<IwOOQO<<Ip<<IpO$?aQ!0MxO<<IpO%[QlO<<IpOOQO<<Ia<<IaO!BSQ!0LrO<<IaO&;wQ!0LrO<<IpO&<SQ!0MxO<= YO&<dQ`O<= XOOQO7+*Z7+*ZO9WQ`O7+*ZOOQ[ANAhANAhO&<lQ!fOANAhO!&fQMhOANAhO#']Q`OANAhO4UQ!fOANAhO&<sQ`OANAhO%[QlOANAhO&<{Q!0MzO7+'xO&?^Q!0MzO,5?]O&AiQ!0MzO,5?_O&CtQ!0MzO7+'zO&FVQ!fO1G4hO&FaQ?MtO7+&^O&HeQ?MvO,5=UO&JlQ?MvO,5=WO&J|Q?MvO,5=UO&K^Q?MvO,5=WO&KnQ?MvO,59rO&MtQ?MvO,5<iO' wQ?MvO,5<kO'$]Q?MvO,5<yO'&RQ?MtO7+'jO'&`Q?MtO7+'kO'&mQ`O,5<[OOQO7+'_7+'_OOQ!0Lh7+*`7+*`O'&rQMjO<<KzOOQO1G4s1G4sO'&yQ`O1G4sO''UQ`O1G4sO''dQ`O7++yO''dQ`O7++yO!&fQMhO1G4uO''lQ!dO1G4uO''vQ`O7++zO'(OQ`O7+(TO'(ZQ!dO7+(TOOQ!0Lb7+(R7+(ROOQ!0Lb7+(S7+(SO!B_QpO7+(ROCcQ`O7+(RO'(eQ`O7+(TO!&fQMhO7+(TO$)QQ`O7+(SO'(jQ`O7+(TOCcQ`O7+(SO'(rQMjO<<NsOOQ!0Lh7+$z7+$zO'(|Q!dO,5?bOOQO-E<t-E<tO')WQ!0MvO7+(WOOQ[AN=gAN=gO9^Q`O1G5SOOQO1G5S1G5SO')hQ`O1G5SO')mQ`O7+,SO')mQ`O7+,SO9hQ!0LrOANBTO@fQ`OANBTOOQ[ANBTANBTOOQ[ANApANApOOQ[ANAqANAqO')uQ`O,5?dOOQO-E<v-E<vO'*QQ?MtO1G6eOOQO,5?f,5?fOOQO-E<x-E<xOOQ[1G3^1G3^O'*[Q`O,5<}OOQ[<<Lc<<LcO!&fQMhO<<LcO&9yQ`O<<LcO'*aQ`O<<LcO%[QlO<<LcOOQ[<<Le<<LeO9hQ!0LrO<<LeO$#sQ`O<<LeO9RQ`O<<LeO'*iQpO1G5RO'*tQ`O7+,QOOQ[AN=]AN=]O9hQ!0LrOAN=]OOQ[<= o<= oOOQ[<= p<= pO'*|Q`O<= oO'+RQ`O<= pOOQ[<<Lm<<LmO'+WQ`O<<LmO'+]QlO<<LmOOQ[1G3w1G3wO>tQ`O7+)hO'+dQ`O<<I}O'+oQ?MtO<<I}OOQO<<Hv<<HvOOQ!0LfAN?cAN?cOOQOAN?[AN?[O$?aQ!0MxOAN?[OOQOAN>{AN>{O%[QlOAN?[OOQO<<Mu<<MuOOQ[G27SG27SO!&fQMhOG27SO#']Q`OG27SO'+yQ!fOG27SO4UQ!fOG27SO',QQ`OG27SO',YQ?MtO<<JeO',gQ?MvO1G2^O'.]Q?MvO,5?]O'0`Q?MvO,5?_O'2cQ?MvO1G2pO'4fQ?MvO1G2rO'6iQ?MtO<<KVO'6vQ?MtO<<IxOOQO1G1v1G1vO!+oQMhOANAfOOQO7+*_7+*_O'7TQ`O7+*_O'7`Q`O<= eO'7hQ!dO7+*aOOQ!0Lb<<Ko<<KoO$)QQ`O<<KoOCcQ`O<<KoO'7rQ`O<<KoO!&fQMhO<<KoOOQ!0Lb<<Km<<KmO!B_QpO<<KmO'7}Q!dO<<KoOOQ!0Lb<<Kn<<KnO'8XQ`O<<KoO!&fQMhO<<KoO$)QQ`O<<KnOOQO7+*n7+*nO9^Q`O7+*nO'8^Q`O<= nOOQ[G27oG27oO9hQ!0LrOG27oO!(vQlO1G5OO'8fQ`O7+,PO'8nQ`O1G2iO&9yQ`OANA}OOQ[ANA}ANA}O!&fQMhOANA}O'8sQ`OANA}OOQ[ANBPANBPO9hQ!0LrOANBPO$#sQ`OANBPOOQO'#H['#H[OOQO7+*m7+*mOOQ[G22wG22wOOQ[ANEZANEZOOQ[ANE[ANE[OOQ[ANBXANBXO'8{Q`OANBXOOQ[<<MS<<MSO!(vQlOAN?iOOQOG24vG24vO$?aQ!0MxOG24vO#']Q`OLD,nOOQ[LD,nLD,nO!&fQMhOLD,nO'9QQ!fOLD,nO'9XQ?MvO7+'xO':}Q?MvO,5?]O'=QQ?MvO,5?_O'?TQ?MvO7+'zO'@yQMjOG27QOOQO<<My<<MyOOQ!0LbANAZANAZO$)QQ`OANAZOCcQ`OANAZO'AZQ!dOANAZOOQ!0LbANAXANAXO'AbQ`OANAZO!&fQMhOANAZO'AmQ!dOANAZOOQ!0LbANAYANAYOOQO<<NY<<NYOOQ[LD-ZLD-ZO'AwQ?MtO7+*jOOQO'#Gd'#GdOOQ[G27iG27iO&9yQ`OG27iO!&fQMhOG27iOOQ[G27kG27kO9hQ!0LrOG27kOOQ[G27sG27sO'BRQ?MtOG25TOOQOLD*bLD*bOOQ[!$(!Y!$(!YO#']Q`O!$(!YO!&fQMhO!$(!YO'B]Q!0MzOG27QOOQ!0LbG26uG26uO$)QQ`OG26uO'DnQ`OG26uOCcQ`OG26uO'DyQ!dOG26uO!&fQMhOG26uOOQ[LD-TLD-TO&9yQ`OLD-TOOQ[LD-VLD-VOOQ[!)9Et!)9EtO#']Q`O!)9EtOOQ!0LbLD,aLD,aO$)QQ`OLD,aOCcQ`OLD,aO'EQQ`OLD,aO'E]Q!dOLD,aOOQ[!$(!o!$(!oOOQ[!.K;`!.K;`O'EdQ?MvOG27QOOQ!0Lb!$( {!$( {O$)QQ`O!$( {OCcQ`O!$( {O'GYQ`O!$( {OOQ!0Lb!)9Eg!)9EgO$)QQ`O!)9EgOCcQ`O!)9EgOOQ!0Lb!.K;R!.K;RO$)QQ`O!.K;ROOQ!0Lb!4/0m!4/0mO!(vQlO'#DwO1PQ`O'#EUO'GeQ!fO'#JnO'GlQ!L^O'#DsO'GsQlO'#D{O'GzQ!fO'#CiO'JbQ!fO'#CiO!(vQlO'#D}O'JrQlO,5;WO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO'#IlO'LuQ`O,5<gO!(vQlO,5;bO'L}QMhO,5;bO'NhQMhO,5;bO!(vQlO,5;vO!&fQMhO'#GjO'L}QMhO'#GjO!&fQMhO'#GlO'L}QMhO'#GlO1SQ`O'#DWO1SQ`O'#DWO!&fQMhO'#F}O'L}QMhO'#F}O!&fQMhO'#GPO'L}QMhO'#GPO!&fQMhO'#G_O'L}QMhO'#G_O!(vQlO,5:gO'NoQpO'#D[O'NyQpO'#JrO!(vQlO,5@kO'JrQlO1G0rO( TQ?MtO'#CiO!(vQlO1G2OO!&fQMhO'#IqO'L}QMhO'#IqO!&fQMhO'#IsO'L}QMhO'#IsO( _Q!dO'#CrO!&fQMhO,5<rO'L}QMhO,5<rO'JrQlO1G2PO!(vQlO7+&yO!&fQMhO1G2^O'L}QMhO1G2^O!&fQMhO'#IqO'L}QMhO'#IqO!&fQMhO'#IsO'L}QMhO'#IsO!&fQMhO1G2`O'L}QMhO1G2`O'JrQlO7+'kO'JrQlO7+&^O!&fQMhOANAfO'L}QMhOANAfO( rQ`O'#ElO( wQ`O'#ElO(!PQ`O'#F[O(!UQ`O'#EvO(!ZQ`O'#KPO(!fQ`O'#J}O(!qQ`O,5;WO(!vQMjO,5<dO(!}Q`O'#GWO(#SQ`O'#GWO(#XQ`O,5<eO(#aQ`O,5;WO(#iQ?MtO1G1_O(#pQ`O,5<rO(#uQ`O,5<rO(#zQ`O,5<tO($PQ`O,5<tO($UQ`O1G2PO($ZQ`O1G0rO($`QMjO<<KzO($gQMjO<<KzO7eQMhO'#FzO9RQ`O'#FyOAaQ`O'#EkO!(vQlO,5;sO!3ZQ`O'#GWO!3ZQ`O'#GWO!3ZQ`O'#GYO!3ZQ`O'#GYO!+oQMhO7+(`O!+oQMhO7+(`O%,oQ!dO1G2tO%,oQ!dO1G2tO!&fQMhO,5=YO!&fQMhO,5=Y",
  stateData: "(%k~O'xOS'yOSTOS'zRQ~OPYOQYOSfOY!VOaqOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!rwO!uxO!y]O#t!PO$V|O%e}O%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO&S!WO&Y!XO&[!YO&^!ZO&`![O&c!]O&i!^O&o!_O&q!`O&s!aO&u!bO&w!cO(PSO(RTO(UUO(]VO(k[O(ziO~OWtO~P`OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oa!wOp!nO!P!oO!_!yO!`!vO!a!vO!y;kO#Q!pO#R!pO#S!xO#T!pO#U!pO#X!zO#Y!zO(Q!lO(RTO(UUO(a!mO(k!sO~O'z!{O~OP]XR]X[]Xa]Xo]X}]X!P]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X'v]X(]]X(n]X(u]X(v]X~O!d%PX~P(qO_!}O(R#PO(S!}O(T#PO~O_#QO(T#PO(U#PO(V#QO~Ou#SO!R#TO(^#TO(_#VO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P;oO(RTO(UUO(]VO(k[O(ziO~O!X#ZO!Y#WO!V(dP!V(rP~P+}O!Z#cO~P`OPYOQYOSfOd!jOe!iOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(RTO(UUO(]VO(k[O(ziO~Om#mO!X#iO!y]O#f#lO#g#iO(P;pO!h(oP~P.iO!i#oO(P#nO~O!u#sO!y]O%e#tO~O#h#uO~O!d#vO#h#uO~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y$_O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~Oa(bX'v(bX's(bX!h(bX!V(bX![(bX%f(bX!d(bX~P1qO#P$dO#]$eO$P$eOP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#s(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX![(cX%f(cX~Oa(cX'v(cX's(cX!V(cX!h(cXs(cX!d(cX~P4UO#]$eO~O$[$hO$^$gO$e$mO~OSfO![$nO$h$oO$j$qO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(P$sO(RTO(UUO(]$uO(u$}O(v%POg(YP~O!i%cO~O!P%fO![%gO(P%eO~O!d%kO~Oa%lO'v%lO~O}%pO~P%[O(Q!lO~P%[O%k%tO~P%[Oh%VO!i%cO(P%eO(Q!lO~Oe%{O!i%cO(P%eO~O#s$RO~O}&QO![%}O!i&PO%g&TO(P%eO(Q!lO(RTO(UUO`)TP~O!u#sO~O%p&VO!P)PX![)PX(P)PX~O(P&WO~O!r&]O#t!PO%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO~Od&bOe&aO!u&_O%e&`O%x&^O~P;|Od&eOeyO![&dO!r&]O!uxO!y]O#t!PO%e}O%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO~Ob&hO#]&kO%g&fO(Q!lO~P=RO!i&lO!r&pO~O!i#oO~O![XO~Oa%lO't&xO'v%lO~Oa%lO't&{O'v%lO~Oa%lO't&}O'v%lO~O's]X!V]Xs]X!h]X&W]X![]X%f]X!d]X~P(qO!_'[O!`'TO!a'TO(Q!lO(RTO(UUO~Op'RO!P'QO!X'UO(a'PO!Z(eP!Z(tP~P@YOk'_O![']O(P%eO~Oe'dO!i%cO(P%eO~O}&QO!i&PO~Op!nO!P!oO!y;kO#Q!pO#R!pO#T!pO#U!pO(Q!lO(RTO(UUO(a!mO(k!sO~O!_'jO!`'iO!a'iO#S!pO#X'kO#Y'kO~PAtOa%lOh%VO!d#vO!i%cO'v%lO(n'mO~O!m'qO#]'oO~PCSOp!nO!P!oO(RTO(UUO(a!mO(k!sO~O![XOp(iX!P(iX!_(iX!`(iX!a(iX!y(iX#Q(iX#R(iX#S(iX#T(iX#U(iX#X(iX#Y(iX(Q(iX(R(iX(U(iX(a(iX(k(iX~O!`'iO!a'iO(Q!lO~PCrO'{'uO'|'uO'}'wO~O_!}O(R'yO(S!}O(T'yO~O_#QO(T'yO(U'yO(V#QO~Os'{O~P%[Ou#SO!R#TO(^#TO(_(OO~O!X(QO!V'SX!V'YX!Y'SX!Y'YX~P+}O!Y(SO!V(dX~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y(SO!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~O!V(dX~PGmO!V(XO~O!V(qX!Y(qX!d(qX!h(qX(n(qX~O#](qX#h#aX!Z(qX~PIpO#](YO!V(sX!Y(sX~O!Y(ZO!V(rX~O!V(^O~O#]$eO~PIpO!Z(_O~P`OR#zO}#yO!P#{O!i#xO(]VOP!ka[!kao!ka!Y!ka!m!ka#O!ka#k!ka#l!ka#m!ka#n!ka#o!ka#p!ka#q!ka#r!ka#s!ka#u!ka#w!ka#y!ka#z!ka(n!ka(u!ka(v!ka~Oa!ka'v!ka's!ka!V!ka!h!kas!ka![!ka%f!ka!d!ka~PKWO!h(`O~O!d#vO#](aO(n'mO!Y(pXa(pX'v(pX~O!h(pX~PMsO!P%fO![%gO!y]O#f(fO#g(eO(P%eO~O!Y(gO!h(oX~O!h(iO~O!P%fO![%gO#g(eO(P%eO~OP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#s(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX~O!d#vO!h(cX~P! aOR(kO}(jO!i#xO#P$dO!y!xa!P!xa~O!u!xa%e!xa![!xa#f!xa#g!xa(P!xa~P!#bO!u(oO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~O#h(uO~O!X(wO!h(gP~P%[O(a(yO(k[O~O!P({O!i#xO(a(yO(k[O~OP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![!eO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(P)YO(RTO(UUO(]VO(k[O(z=dO~O!Y$_Oa$oa'v$oa's$oa!h$oa!V$oa![$oa%f$oa!d$oa~O#t)aO~P!&fOh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~Og(lP~P!+oO})fO!d)eO![$]X$Y$]X$[$]X$^$]X$e$]X~O!d)eO![(wX$Y(wX$[(wX$^(wX$e(wX~O})fO~P!-xO})fO![(wX$Y(wX$[(wX$^(wX$e(wX~O![)hO$Y)lO$[)gO$^)gO$e)mO~O!X)pO~P!(vO$[$hO$^$gO$e)tO~Ok$xX}$xX#P$xX'u$xX(u$xX(v$xX~OgjXg$xXkjX!YjX#]jX~P!/nOu)vO(^)wO(_)yO~Ok*SO}){O'u)|O(u$}O(v%PO~Og)zO~P!0rOg*TO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P*VO![*WO!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(RTO(UUO(]$uO(u$}O(v%PO~O!X*ZO(P*UO!h({P~P!1aO#h*]O~O!i*^O~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(P*`O(RTO(UUO(]$uO(u$}O(v%PO~O!X*cO!V(|P~P!3`Oo*oOp!nO!P*eO!_*mO!`*gO!a*gO!i*^O#X*nO%]*iO(Q!lO(RTO(UUO(a!mO~O!Z*lO~P!5TO#P$dOk([X}([X'u([X(u([X(v([X!Y([X#]([X~Og([X#}([X~P!6VOk*tO#]*sOg(ZX!Y(ZX~O!Y*uOg(YX~O(P&WOg(YP~Op*xO~O!i*}O~O(P(sO~Om+RO!P%fO!X#iO![%gO!y]O#f#lO#g#iO(P%eO!h(oP~O!d#vO#h+SO~O!P%fO!X+UO!Y(ZO![%gO(P%eO!V(rP~Op'XO!P+WO!X+VO(RTO(UUO(a(yO~O!Z(tP~P!9VO!Y+XOa)QX'v)QX~OP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~Oa!ga!Y!ga'v!ga's!ga!V!ga!h!gas!ga![!ga%f!ga!d!ga~P!9}OR#zO}#yO!P#{O!i#xO(]VOP!oa[!oao!oa!Y!oa!m!oa#O!oa#k!oa#l!oa#m!oa#n!oa#o!oa#p!oa#q!oa#r!oa#s!oa#u!oa#w!oa#y!oa#z!oa(n!oa(u!oa(v!oa~Oa!oa'v!oa's!oa!V!oa!h!oas!oa![!oa%f!oa!d!oa~P!<eOR#zO}#yO!P#{O!i#xO(]VOP!qa[!qao!qa!Y!qa!m!qa#O!qa#k!qa#l!qa#m!qa#n!qa#o!qa#p!qa#q!qa#r!qa#s!qa#u!qa#w!qa#y!qa#z!qa(n!qa(u!qa(v!qa~Oa!qa'v!qa's!qa!V!qa!h!qas!qa![!qa%f!qa!d!qa~P!>{Oh%VOk+bO![']O%f+aO~O!d+dOa(XX![(XX'v(XX!Y(XX~Oa%lO![XO'v%lO~Oh%VO!i%cO~Oh%VO!i%cO(P%eO~O!d#vO#h(uO~Ob+oO%g+pO(P+lO(RTO(UUO!Z)UP~O!Y+qO`)TX~O[+uO~O`+vO~O![%}O(P%eO(Q!lO`)TP~Oh%VO#]+{O~Oh%VOk,OO![$|O~O![,QO~O},SO![XO~O%k%tO~O!u,XO~Oe,^O~Ob,_O(P#nO(RTO(UUO!Z)SP~Oe%{O~O%g!QO(P&WO~P=RO[,dO`,cO~OPYOQYOSfOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO!fuO!iZO!lYO!mYO!nYO!pvO!uxO!y]O%e}O(RTO(UUO(]VO(k[O(ziO~O![!eO!r!gO$V!kO(P!dO~P!E{O`,cOa%lO'v%lO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oa,iO!rwO#t!OO%i!OO%j!OO%k!OO~P!HeO!i&lO~O&Y,oO~O![,qO~O&k,sO&m,tOP&haQ&haS&haY&haa&had&hae&ham&hao&hap&haq&haw&hay&ha{&ha!P&ha!T&ha!U&ha![&ha!f&ha!i&ha!l&ha!m&ha!n&ha!p&ha!r&ha!u&ha!y&ha#t&ha$V&ha%e&ha%g&ha%i&ha%j&ha%k&ha%n&ha%p&ha%s&ha%t&ha%v&ha&S&ha&Y&ha&[&ha&^&ha&`&ha&c&ha&i&ha&o&ha&q&ha&s&ha&u&ha&w&ha's&ha(P&ha(R&ha(U&ha(]&ha(k&ha(z&ha!Z&ha&a&hab&ha&f&ha~O(P,yO~Oh!bX!Y!OX!Z!OX!d!OX!d!bX!i!bX#]!OX~O!Y!bX!Z!bX~P# kO!d-OO#],}Oh(fX!Y#eX!Z#eX!d(fX!i(fX~O!Y(fX!Z(fX~P#!^Oh%VO!d-QO!i%cO!Y!^X!Z!^X~Op!nO!P!oO(RTO(UUO(a!mO~OP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![!eO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(RTO(UUO(]VO(k[O(z=dO~O(P<fO~P##sO!Y-UO!Z(eX~O!Z-WO~O!d-OO#],}O!Y#eX!Z#eX~O!Y-XO!Z(tX~O!Z-ZO~O!`-[O!a-[O(Q!lO~P##bO!Z-_O~P'_Ok-bO![']O~O!V-gO~Op!xa!_!xa!`!xa!a!xa#Q!xa#R!xa#S!xa#T!xa#U!xa#X!xa#Y!xa(Q!xa(R!xa(U!xa(a!xa(k!xa~P!#bO!m-lO#]-jO~PCSO!`-nO!a-nO(Q!lO~PCrOa%lO#]-jO'v%lO~Oa%lO!d#vO#]-jO'v%lO~Oa%lO!d#vO!m-lO#]-jO'v%lO(n'mO~O'{'uO'|'uO'}-sO~Os-tO~O!V'Sa!Y'Sa~P!9}O!X-xO!V'SX!Y'SX~P%[O!Y(SO!V(da~O!V(da~PGmO!Y(ZO!V(ra~O!P%fO!X-|O![%gO(P%eO!V'YX!Y'YX~O#].OO!Y(pa!h(paa(pa'v(pa~O!d#vO~P#+yO!Y(gO!h(oa~O!P%fO![%gO#g.SO(P%eO~Om.XO!P%fO!X.UO![%gO!y]O#f.WO#g.UO(P%eO!Y']X!h']X~OR.]O!i#xO~Oh%VOk.`O![']O%f._O~Oa#`i!Y#`i'v#`i's#`i!V#`i!h#`is#`i![#`i%f#`i!d#`i~P!9}Ok=pO}){O'u)|O(u$}O(v%PO~O#h#[aa#[a#]#[a'v#[a!Y#[a!h#[a![#[a!V#[a~P#.uO#h([XP([XR([X[([Xa([Xo([X!P([X!i([X!m([X#O([X#k([X#l([X#m([X#n([X#o([X#p([X#q([X#r([X#s([X#u([X#w([X#y([X#z([X'v([X(]([X(n([X!h([X!V([X's([Xs([X![([X%f([X!d([X~P!6VO!Y.mO!h(gX~P!9}O!h.pO~O!V.rO~OP$[OR#zO}#yO!P#{O!i#xO!m$[O(]VO[#jia#jio#ji!Y#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#k#ji~P#2eO#k$OO~P#2eOP$[OR#zOo$aO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO(]VO[#jia#ji!Y#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#o#ji~P#5SO#o$QO~P#5SOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO(]VOa#ji!Y#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#u#ji~P#7qOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO(]VO(v#}Oa#ji!Y#ji#y#ji#z#ji'v#ji(n#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#w$UO~P#:XO#w#ji~P#:XO#u$SO~P#7qOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO(]VO(u#|O(v#}Oa#ji!Y#ji#z#ji'v#ji(n#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#y#ji~P#<}O#y$WO~P#<}OP]XR]X[]Xo]X}]X!P]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X!Y]X!Z]X~O#}]X~P#?lOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO#w;yO#y;{O#z;|O(]VO(n$YO(u#|O(v#}O~O#}.tO~P#AyO#P$dO#]<SO$P<SO#}(cX!Z(cX~P! aOa'`a!Y'`a'v'`a's'`a!h'`a!V'`as'`a!['`a%f'`a!d'`a~P!9}O[#jia#jio#ji!Y#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO(]VO(u#ji(v#ji~P#D{Ok=pO}){O'u)|O(u$}O(v%POP#jiR#ji!P#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji(]#ji~P#D{O!Y.xOg(lX~P!0rOg.zO~Oa$Oi!Y$Oi'v$Oi's$Oi!V$Oi!h$Ois$Oi![$Oi%f$Oi!d$Oi~P!9}O$[.{O$^.{O~O$[.|O$^.|O~O!d)eO#].}O![$bX$Y$bX$[$bX$^$bX$e$bX~O!X/OO~O![)hO$Y/QO$[)gO$^)gO$e/RO~O!Y;}O!Z(bX~P#AyO!Z/SO~O!d)eO$e(wX~O$e/UO~Os/VO~P!&fOu)vO(^)wO(_/YO~O!P/]O~O(u$}Ok%^a}%^a'u%^a(v%^a!Y%^a#]%^a~Og%^a#}%^a~P#K}O(v%POk%`a}%`a'u%`a(u%`a!Y%`a#]%`a~Og%`a#}%`a~P#LpO!YfX!dfX!hfX!h$xX(nfX~P!/nO!X/fO!Y(ZO(P/eO!V(rP!V(|P~P!1aOo*oO!_*mO!`*gO!a*gO!i*^O#X*nO%]*iO(Q!lO(RTO(UUO~Op<cO!P/gO!X+VO!Z*lO(a<bO!Z(tP~P#NZO!h/hO~P#.uO!Y/iO!d#vO(n'mO!h({X~O!h/nO~O!P%fO!X*ZO![%gO(P%eO!h({P~O#h/pO~O!V$xX!Y$xX!d%PX~P!/nO!Y/qO!V(|X~P#.uO!d/sO~O!V/uO~OmkO(P/vO~P.iOh%VOo/{O!d#vO!i%cO(n'mO~O!d+dO~Oa%lO!Y0PO'v%lO~O!Z0RO~P!5TO!`0SO!a0SO(Q!lO~P##bOp!nO!P0TO(RTO(UUO(a!mO~O#X0VO~Og%^a!Y%^a#]%^a#}%^a~P!0rOg%`a!Y%`a#]%`a#}%`a~P!0rO(P&WOg'iX!Y'iX~O!Y*uOg(Ya~Og0`O~OR0aO}0aO!P0bO#P$dOkza'uza(uza(vza!Yza#]za~Ogza#}za~P$&ZO}){O'u)|Ok$qa(u$qa(v$qa!Y$qa#]$qa~Og$qa#}$qa~P$'VO}){O'u)|Ok$sa(u$sa(v$sa!Y$sa#]$sa~Og$sa#}$sa~P$'xO#h0eO~Og%Ra!Y%Ra#]%Ra#}%Ra~P!0rO!d#vO~O#h0hO~O!Y+XOa)Qa'v)Qa~OR#zO}#yO!P#{O!i#xO(]VOP!oi[!oio!oi!Y!oi!m!oi#O!oi#k!oi#l!oi#m!oi#n!oi#o!oi#p!oi#q!oi#r!oi#s!oi#u!oi#w!oi#y!oi#z!oi(n!oi(u!oi(v!oi~Oa!oi'v!oi's!oi!V!oi!h!ois!oi![!oi%f!oi!d!oi~P$)gOh%VOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(RTO(UUO(]$uO(u$}O(v%PO~Om0qO(P0pO~P$+}O!d+dOa(Xa![(Xa'v(Xa!Y(Xa~O#h0wO~O[]X!YfX!ZfX~O!Y0xO!Z)UX~O!Z0zO~O[0{O~Ob0}O(P+lO(RTO(UUO~O![%}O(P%eO`'qX!Y'qX~O!Y+qO`)Ta~O!h1QO~P!9}O[1TO~O`1UO~O#]1XO~Ok1[O![$|O~O(a(yO!Z)RP~Oh%VOk1eO![1bO%f1dO~O[1oO!Y1mO!Z)SX~O!Z1pO~O`1rOa%lO'v%lO~O(P#nO(RTO(UUO~O#P$dO#]$eO$P$eOP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX~O#s1uO&W1vOa(cX~P$1eO#]$eO#s1uO&W1vO~Oa1xO~P%[Oa1zO~O&a1}OP&_iQ&_iS&_iY&_ia&_id&_ie&_im&_io&_ip&_iq&_iw&_iy&_i{&_i!P&_i!T&_i!U&_i![&_i!f&_i!i&_i!l&_i!m&_i!n&_i!p&_i!r&_i!u&_i!y&_i#t&_i$V&_i%e&_i%g&_i%i&_i%j&_i%k&_i%n&_i%p&_i%s&_i%t&_i%v&_i&S&_i&Y&_i&[&_i&^&_i&`&_i&c&_i&i&_i&o&_i&q&_i&s&_i&u&_i&w&_i's&_i(P&_i(R&_i(U&_i(]&_i(k&_i(z&_i!Z&_ib&_i&f&_i~Ob2TO!Z2RO&f2SO~P`O![XO!i2VO~O&m,tOP&hiQ&hiS&hiY&hia&hid&hie&him&hio&hip&hiq&hiw&hiy&hi{&hi!P&hi!T&hi!U&hi![&hi!f&hi!i&hi!l&hi!m&hi!n&hi!p&hi!r&hi!u&hi!y&hi#t&hi$V&hi%e&hi%g&hi%i&hi%j&hi%k&hi%n&hi%p&hi%s&hi%t&hi%v&hi&S&hi&Y&hi&[&hi&^&hi&`&hi&c&hi&i&hi&o&hi&q&hi&s&hi&u&hi&w&hi's&hi(P&hi(R&hi(U&hi(]&hi(k&hi(z&hi!Z&hi&a&hib&hi&f&hi~O!V2]O~O!Y!^a!Z!^a~P#AyOp!nO!P!oO!X2cO(a!mO!Y'TX!Z'TX~P@YO!Y-UO!Z(ea~O!Y'ZX!Z'ZX~P!9VO!Y-XO!Z(ta~O!Z2jO~P'_Oa%lO#]2sO'v%lO~Oa%lO!d#vO#]2sO'v%lO~Oa%lO!d#vO!m2wO#]2sO'v%lO(n'mO~Oa%lO'v%lO~P!9}O!Y$_Os$oa~O!V'Si!Y'Si~P!9}O!Y(SO!V(di~O!Y(ZO!V(ri~O!V(si!Y(si~P!9}O!Y(pi!h(pia(pi'v(pi~P!9}O#]2yO!Y(pi!h(pia(pi'v(pi~O!Y(gO!h(oi~O!P%fO![%gO!y]O#f3OO#g2}O(P%eO~O!P%fO![%gO#g2}O(P%eO~Ok3VO![']O%f3UO~Oh%VOk3VO![']O%f3UO~O#h%^aP%^aR%^a[%^aa%^ao%^a!P%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'v%^a(]%^a(n%^a!h%^a!V%^a's%^as%^a![%^a%f%^a!d%^a~P#K}O#h%`aP%`aR%`a[%`aa%`ao%`a!P%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'v%`a(]%`a(n%`a!h%`a!V%`a's%`as%`a![%`a%f%`a!d%`a~P#LpO#h%^aP%^aR%^a[%^aa%^ao%^a!P%^a!Y%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'v%^a(]%^a(n%^a!h%^a!V%^a's%^a#]%^as%^a![%^a%f%^a!d%^a~P#.uO#h%`aP%`aR%`a[%`aa%`ao%`a!P%`a!Y%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'v%`a(]%`a(n%`a!h%`a!V%`a's%`a#]%`as%`a![%`a%f%`a!d%`a~P#.uO#hzaPza[zaazaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza'vza(]za(nza!hza!Vza'szasza![za%fza!dza~P$&ZO#h$qaP$qaR$qa[$qaa$qao$qa!P$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa'v$qa(]$qa(n$qa!h$qa!V$qa's$qas$qa![$qa%f$qa!d$qa~P$'VO#h$saP$saR$sa[$saa$sao$sa!P$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa'v$sa(]$sa(n$sa!h$sa!V$sa's$sas$sa![$sa%f$sa!d$sa~P$'xO#h%RaP%RaR%Ra[%Raa%Rao%Ra!P%Ra!Y%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra'v%Ra(]%Ra(n%Ra!h%Ra!V%Ra's%Ra#]%Ras%Ra![%Ra%f%Ra!d%Ra~P#.uOa#`q!Y#`q'v#`q's#`q!V#`q!h#`qs#`q![#`q%f#`q!d#`q~P!9}O!X3_O!Y'UX!h'UX~P%[O!Y.mO!h(ga~O!Y.mO!h(ga~P!9}O!V3bO~O#}!ka!Z!ka~PKWO#}!ga!Y!ga!Z!ga~P#AyO#}!oa!Z!oa~P!<eO#}!qa!Z!qa~P!>{Og'XX!Y'XX~P!+oO!Y.xOg(la~OSfO![3vO$c3wO~O!Z3{O~Os3|O~P#.uOa$lq!Y$lq'v$lq's$lq!V$lq!h$lqs$lq![$lq%f$lq!d$lq~P!9}O!V4OO~P!&fO!P4PO~O}){O'u)|O(v%POk'ea(u'ea!Y'ea#]'ea~Og'ea#}'ea~P%+ZO}){O'u)|Ok'ga(u'ga(v'ga!Y'ga#]'ga~Og'ga#}'ga~P%+|O(n$YO~P#.uO!VfX!V$xX!YfX!Y$xX!d%PX#]fX~P!/nO(P<lO~P!1aO!P%fO!X4SO![%gO(P%eO!Y'aX!h'aX~O!Y/iO!h({a~O!Y/iO!d#vO!h({a~O!Y/iO!d#vO(n'mO!h({a~Og$zi!Y$zi#]$zi#}$zi~P!0rO!X4[O!V'cX!Y'cX~P!3`O!Y/qO!V(|a~O!Y/qO!V(|a~P#.uOP]XR]X[]Xo]X}]X!P]X!V]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X~O!d%WX#s%WX~P%/mO!d#vO#s4aO~Oh%VO!d#vO!i%cO~Oh%VOo4fO!i%cO(n'mO~Oo4kO!d#vO(n'mO~Op!nO!P4lO(RTO(UUO(a!mO~O(u$}Ok%^i}%^i'u%^i(v%^i!Y%^i#]%^i~Og%^i#}%^i~P%3^O(v%POk%`i}%`i'u%`i(u%`i!Y%`i#]%`i~Og%`i#}%`i~P%4POg(Zi!Y(Zi~P!0rO#]4rOg(Zi!Y(Zi~P!0rO!h4uO~Oa$mq!Y$mq'v$mq's$mq!V$mq!h$mqs$mq![$mq%f$mq!d$mq~P!9}O!V4yO~O!Y4zO![(}X~P#.uOa$xX![$xX%Z]X'v$xX!Y$xX~P!/nO%Z4}OalXklX}lX![lX'ulX'vlX(ulX(vlX!YlX~O%Z4}O~Ob5TO%g5UO(P+lO(RTO(UUO!Y'pX!Z'pX~O!Y0xO!Z)Ua~O[5YO~O`5ZO~Oa%lO'v%lO~P#.uO!Y5cO#]5eO!Z)RX~O!Z5fO~Oo5lOp!nO!P*eO!_!yO!`!vO!a!vO!y;kO#Q!pO#R!pO#S!pO#T!pO#U!pO#X5kO#Y!zO(Q!lO(RTO(UUO(a!mO(k!sO~O!Z5jO~P%9SOk5qO![1bO%f5pO~Oh%VOk5qO![1bO%f5pO~Ob5xO(P#nO(RTO(UUO!Y'oX!Z'oX~O!Y1mO!Z)Sa~O(RTO(UUO(a5zO~O`6OO~O#s6RO&W6SO~PMsO!h6TO~P%[Oa6VO~Oa6VO~P%[Ob2TO!Z6[O&f2SO~P`O!d6^O~O!d6`Oh(fi!Y(fi!Z(fi!d(fi!i(fio(fi(n(fi~O!Y#ei!Z#ei~P#AyO#]6aO!Y#ei!Z#ei~O!Y!^i!Z!^i~P#AyOa%lO#]6jO'v%lO~Oa%lO!d#vO#]6jO'v%lO~O!Y(pq!h(pqa(pq'v(pq~P!9}O!Y(gO!h(oq~O!P%fO![%gO#g6qO(P%eO~O![']O%f6tO~Ok6xO![']O%f6tO~O#h'eaP'eaR'ea['eaa'eao'ea!P'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea'v'ea(]'ea(n'ea!h'ea!V'ea's'eas'ea!['ea%f'ea!d'ea~P%+ZO#h'gaP'gaR'ga['gaa'gao'ga!P'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga'v'ga(]'ga(n'ga!h'ga!V'ga's'gas'ga!['ga%f'ga!d'ga~P%+|O#h$ziP$ziR$zi[$zia$zio$zi!P$zi!Y$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi'v$zi(]$zi(n$zi!h$zi!V$zi's$zi#]$zis$zi![$zi%f$zi!d$zi~P#.uO#h%^iP%^iR%^i[%^ia%^io%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i'v%^i(]%^i(n%^i!h%^i!V%^i's%^is%^i![%^i%f%^i!d%^i~P%3^O#h%`iP%`iR%`i[%`ia%`io%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i'v%`i(]%`i(n%`i!h%`i!V%`i's%`is%`i![%`i%f%`i!d%`i~P%4PO!Y'Ua!h'Ua~P!9}O!Y.mO!h(gi~O#}#`i!Y#`i!Z#`i~P#AyOP$[OR#zO}#yO!P#{O!i#xO!m$[O(]VO[#jio#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#k#ji~P%LRO#k;sO~P%LROP$[OR#zOo<PO}#yO!P#{O!i#xO!m$[O#k;sO#l;tO#m;tO#n;tO(]VO[#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#o#ji~P%NZO#o;uO~P%NZOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO(]VO#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#u#ji~P&!cOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO(]VO(v#}O#y#ji#z#ji#}#ji(n#ji(u#ji!Y#ji!Z#ji~O#w;yO~P&$dO#w#ji~P&$dO#u;wO~P&!cOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO#w;yO(]VO(u#|O(v#}O#z#ji#}#ji(n#ji!Y#ji!Z#ji~O#y#ji~P&&sO#y;{O~P&&sOa#{y!Y#{y'v#{y's#{y!V#{y!h#{ys#{y![#{y%f#{y!d#{y~P!9}O[#jio#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji!Y#ji!Z#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k;sO#l;tO#m;tO#n;tO(]VO(u#ji(v#ji~P&)oOk=qO}){O'u)|O(u$}O(v%POP#jiR#ji!P#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji(]#ji~P&)oO#P$dOP([XR([X[([Xk([Xo([X}([X!P([X!i([X!m([X#O([X#k([X#l([X#m([X#n([X#o([X#p([X#q([X#r([X#s([X#u([X#w([X#y([X#z([X#}([X'u([X(]([X(n([X(u([X(v([X!Y([X!Z([X~O#}$Oi!Y$Oi!Z$Oi~P#AyO#}!oi!Z!oi~P$)gOg'Xa!Y'Xa~P!0rO!Z7[O~O!Y'`a!Z'`a~P#AyO!V7]O~P#.uO!d#vO(n'mO!Y'aa!h'aa~O!Y/iO!h({i~O!Y/iO!d#vO!h({i~Og$zq!Y$zq#]$zq#}$zq~P!0rO!V'ca!Y'ca~P#.uO!d7dO~O!Y/qO!V(|i~P#.uO!Y/qO!V(|i~O!V7gO~Oh%VOo7lO!i%cO(n'mO~O!d#vO#s7nO~Oo7qO!d#vO(n'mO~O}){O'u)|O(v%POk'fa(u'fa!Y'fa#]'fa~Og'fa#}'fa~P&2pO}){O'u)|Ok'ha(u'ha(v'ha!Y'ha#]'ha~Og'ha#}'ha~P&3cO!V7sO~Og$|q!Y$|q#]$|q#}$|q~P!0rOa$my!Y$my'v$my's$my!V$my!h$mys$my![$my%f$my!d$my~P!9}O!d6`O~O!Y4zO![(}a~O![']OP$SaR$Sa[$Sao$Sa}$Sa!P$Sa!Y$Sa!i$Sa!m$Sa#O$Sa#k$Sa#l$Sa#m$Sa#n$Sa#o$Sa#p$Sa#q$Sa#r$Sa#s$Sa#u$Sa#w$Sa#y$Sa#z$Sa(]$Sa(n$Sa(u$Sa(v$Sa~O%f6tO~P&5lOa#`y!Y#`y'v#`y's#`y!V#`y!h#`ys#`y![#`y%f#`y!d#`y~P!9}O[7xO~Ob7zO(P+lO(RTO(UUO~O!Y0xO!Z)Ui~O`8OO~O(a(yO!Y'lX!Z'lX~O!Y5cO!Z)Ra~O!Z8XO~P%9SO(k!sO~P$$iO#X8YO~O![1bO~O![1bO%f8[O~Ok8_O![1bO%f8[O~O[8dO!Y'oa!Z'oa~O!Y1mO!Z)Si~O!h8hO~O!h8iO~O!h8lO~O!h8lO~P%[Oa8nO~O!d8oO~O!h8pO~O!Y(si!Z(si~P#AyOa%lO#]8xO'v%lO~O!Y(py!h(pya(py'v(py~P!9}O!Y(gO!h(oy~O%f8{O~P&5lO![']O%f8{O~O#h$zqP$zqR$zq[$zqa$zqo$zq!P$zq!Y$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq'v$zq(]$zq(n$zq!h$zq!V$zq's$zq#]$zqs$zq![$zq%f$zq!d$zq~P#.uO#h'faP'faR'fa['faa'fao'fa!P'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa'v'fa(]'fa(n'fa!h'fa!V'fa's'fas'fa!['fa%f'fa!d'fa~P&2pO#h'haP'haR'ha['haa'hao'ha!P'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha'v'ha(]'ha(n'ha!h'ha!V'ha's'has'ha!['ha%f'ha!d'ha~P&3cO#h$|qP$|qR$|q[$|qa$|qo$|q!P$|q!Y$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q'v$|q(]$|q(n$|q!h$|q!V$|q's$|q#]$|qs$|q![$|q%f$|q!d$|q~P#.uO!Y'Ui!h'Ui~P!9}O#}#`q!Y#`q!Z#`q~P#AyO(u$}OP%^aR%^a[%^ao%^a!P%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a#}%^a(]%^a(n%^a!Y%^a!Z%^a~Ok%^a}%^a'u%^a(v%^a~P&FnO(v%POP%`aR%`a[%`ao%`a!P%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a#}%`a(]%`a(n%`a!Y%`a!Z%`a~Ok%`a}%`a'u%`a(u%`a~P&HuOk=qO}){O'u)|O(v%PO~P&FnOk=qO}){O'u)|O(u$}O~P&HuOR0aO}0aO!P0bO#P$dOPza[zakzaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza#}za'uza(]za(nza(uza(vza!Yza!Zza~O}){O'u)|OP$qaR$qa[$qak$qao$qa!P$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa#}$qa(]$qa(n$qa(u$qa(v$qa!Y$qa!Z$qa~O}){O'u)|OP$saR$sa[$sak$sao$sa!P$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa#}$sa(]$sa(n$sa(u$sa(v$sa!Y$sa!Z$sa~Ok=qO}){O'u)|O(u$}O(v%PO~OP%RaR%Ra[%Rao%Ra!P%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra#}%Ra(]%Ra(n%Ra!Y%Ra!Z%Ra~P'#zO#}$lq!Y$lq!Z$lq~P#AyO#}$mq!Y$mq!Z$mq~P#AyO!Z9YO~O#}9ZO~P!0rO!d#vO!Y'ai!h'ai~O!d#vO(n'mO!Y'ai!h'ai~O!Y/iO!h({q~O!V'ci!Y'ci~P#.uO!Y/qO!V(|q~Oo9bO!d#vO(n'mO~O[9dO!V9cO~P#.uO!V9cO~O!d#vO#s9jO~Og(Zy!Y(Zy~P!0rO!Y'ja!['ja~P#.uOa%Yq![%Yq'v%Yq!Y%Yq~P#.uO[9mO~O!Y0xO!Z)Uq~O#]9qO!Y'la!Z'la~O!Y5cO!Z)Ri~P#AyO!P9sO~O![1bO%f9vO~O(RTO(UUO(a9{O~O!Y1mO!Z)Sq~O!h:OO~O!h:PO~O!h:QO~O!h:QO~P%[O#]:TO!Y#ey!Z#ey~O!Y#ey!Z#ey~P#AyO%f:YO~P&5lO![']O%f:YO~O#}#{y!Y#{y!Z#{y~P#AyOP$ziR$zi[$zio$zi!P$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi#}$zi(]$zi(n$zi!Y$zi!Z$zi~P'#zO}){O'u)|O(v%POP'eaR'ea['eak'eao'ea!P'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea#}'ea(]'ea(n'ea(u'ea!Y'ea!Z'ea~O}){O'u)|OP'gaR'ga['gak'gao'ga!P'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga#}'ga(]'ga(n'ga(u'ga(v'ga!Y'ga!Z'ga~O(u$}OP%^iR%^i[%^ik%^io%^i}%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i#}%^i'u%^i(]%^i(n%^i(v%^i!Y%^i!Z%^i~O(v%POP%`iR%`i[%`ik%`io%`i}%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i#}%`i'u%`i(]%`i(n%`i(u%`i!Y%`i!Z%`i~O#}$my!Y$my!Z$my~P#AyO#}#`y!Y#`y!Z#`y~P#AyO!d#vO!Y'aq!h'aq~O!Y/iO!h({y~O!V'cq!Y'cq~P#.uOo:dO!d#vO(n'mO~O[:hO!V:gO~P#.uO!V:gO~O!Y0xO!Z)Uy~O!Y5cO!Z)Rq~O(P:nO~O![1bO%f:qO~O!h:tO~O%f:yO~P&5lOP$zqR$zq[$zqo$zq!P$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq#}$zq(]$zq(n$zq!Y$zq!Z$zq~P'#zO}){O'u)|O(v%POP'faR'fa['fak'fao'fa!P'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa#}'fa(]'fa(n'fa(u'fa!Y'fa!Z'fa~O}){O'u)|OP'haR'ha['hak'hao'ha!P'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha#}'ha(]'ha(n'ha(u'ha(v'ha!Y'ha!Z'ha~OP$|qR$|q[$|qo$|q!P$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q#}$|q(]$|q(n$|q!Y$|q!Z$|q~P'#zOg%b!Z!Y%b!Z#]%b!Z#}%b!Z~P!0rO!V:}O~P#.uOo;OO!d#vO(n'mO~O[;QO!V:}O~P#.uO!Y'lq!Z'lq~P#AyO!Y#e!Z!Z#e!Z~P#AyO#h%b!ZP%b!ZR%b!Z[%b!Za%b!Zo%b!Z!P%b!Z!Y%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z'v%b!Z(]%b!Z(n%b!Z!h%b!Z!V%b!Z's%b!Z#]%b!Zs%b!Z![%b!Z%f%b!Z!d%b!Z~P#.uOo;YO!d#vO(n'mO~O!V;ZO~P#.uOo;bO!d#vO(n'mO~O!V;cO~P#.uOP%b!ZR%b!Z[%b!Zo%b!Z!P%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z#}%b!Z(]%b!Z(n%b!Z!Y%b!Z!Z%b!Z~P'#zOo;fO!d#vO(n'mO~Os(bX~P1qO}%pO~P!(vO(Q!lO~P!(vO!VfX!YfX#]fX~P%/mOP]XR]X[]Xo]X}]X!P]X!Y]X!YfX!i]X!m]X#O]X#P]X#]]X#]fX#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X~O!dfX!h]X!hfX(nfX~P'HXOP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![XO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(P)YO(RTO(UUO(]VO(k[O(z=dO~O!Y;}O!Z$oa~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<YO!P${O![$|O!f=kO!i$xO#g<`O$V%_O$r<[O$t<^O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~O#t)aO~P'L}Oo!bX(n!bX~P# kOo(fX(n(fX~P#!^O!Z]X!ZfX~P'HXO!VfX!V$xX!YfX!Y$xX#]fX~P!/nO#h;rO~O!d#vO#h;rO~O#]<SO~O#s;vO~O#]<dO!Y(sX!Z(sX~O#]<SO!Y(qX!Z(qX~O#h<eO~Og<gO~P!0rO#h<mO~O#h<nO~O!d#vO#h<oO~O!d#vO#h<eO~O#}<pO~P#AyO#h<qO~O#h<rO~O#h<wO~O#h<xO~O#h<yO~O#h<zO~O#}<{O~P!0rO#}<|O~P!0rO#P#Q#R#T#U#X#f#g#r(z$r$t$w%Z%e%f%g%n%p%s%t%v%x~'zT#l!U'x(Q#mp#k#no}'y$['y(P$^(a~",
  goto: "$6w)YPPPPPP)ZPP)^P)oP+P/RPPPP6XPP6oPP<g@VP@jP@jPPP@jPBnP@jP@jP@jPBrPBwPCfPH`PPPHdPPPPHdKgPPPKmL_PHdPHdPPNmHdPPPHdPHdP!!tHdP!&[!'a!'jP!(^!(b!(^!+oPPPPPPP!,`!'aPP!,p!.bP!1nHdHd!1s!5P!9m!9m!=lPPP!=tHdPPPPPPPPPPP!ATP!BbPPHd!CsPHdPHdHdHdHdHdPHd!EVP!HaP!KgP!Kk!Ku!Ky!KyP!H^P!K}!K}P# TP# XHdHd# _#$dBr@jP@jP@j@jP#%q@j@j#(P@j#*s@j#,{@j@j#-k#/{#/{#0Q#0Z#/{#0fP#/{P@j#1O@j#4u@j@j6XPPP#8rPPP#9]#9]P#9]P#9s#9]PP#9yP#9pP#9p#:^#9p#:x#;O#;R)^#;U)^P#;]#;]#;]P)^P)^P)^P)^PP)^P#;c#;fP#;f)^P#;jP#;mP)^P)^P)^P)^P)^P)^)^PP#;s#;y#<U#<[#<b#<h#<n#<|#=S#=^#=d#=n#=t#>U#>[#>|#?`#?f#?l#?z#@a#BQ#B`#Bg#C}#D]#Ey#FX#F_#Fe#Fk#Fu#F{#GR#G]#Go#GuPPPPPPPPPPP#G{PPPPPPP#Hp#Kw#Ma#Mh#MpPPP$%OP$%X$(Q$.k$.n$.q$/p$/s$/z$0SP$0Y$0]P$0y$0}$1u$3T$3Y$3pPP$3u$3{$4PP$4S$4W$4[$5W$5o$6W$6[$6_$6b$6h$6k$6o$6sR!|RoqOXst!Z#d%k&o&q&r&t,l,q1}2QY!vQ']-^1b5iQ%rvQ%zyQ&R|Q&g!VS'T!e-UQ'c!iS'i!r!yU*g$|*W*kQ+j%{Q+w&TQ,]&aQ-['[Q-f'dQ-n'jQ0S*mQ1l,^R<a;n%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W,i,l,q-b-j-x.O.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3_4l5q6R6S6V6j8_8n8xS#q];k!r)[$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gU*z%[<X<YQ+o%}Q,_&dQ,f&lQ0n+bQ0r+dQ0}+pQ1t,dQ3R.`Q5T0xQ5x1mQ6v3VQ7z5UR9O6x'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g!S!nQ!r!v!y!z$|'T'[']'i'j'k*g*k*m*n-U-[-^-n0S0V1b5i5k%S$ti#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qQ&U|Q'R!eS'X%g-XQ+o%}Q,_&dQ0d*}Q0}+pQ1S+vQ1s,cQ1t,dQ5T0xQ5^1UQ5x1mQ5{1oQ5|1rQ7z5UQ7}5ZQ8g6OQ9p8OQ9|8dR<c*WrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QR,a&h&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=f=g[#]WZ#W#Z'U(Q!b%hm#h#i#l$x%c%f(Z(e(f(g*V*Z*^+U+V+X,h-O-|.S.T.U.W/f/i2V2}3O4S6`6qQ%uxQ%yyS&O|&TQ&[!TQ'`!hQ'b!iQ(n#sS+i%z%{Q+m%}Q,W&_Q,[&aS-e'c'dQ.b(oQ0v+jQ0|+pQ1O+qQ1R+uQ1g,XS1k,],^Q2o-fQ5S0xQ5W0{Q5]1TQ5w1lQ7y5UQ7|5YQ9l7xR:k9m!O$zi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m!^%wy!i!u%y%z%{'S'b'c'd'h'r*f+i+j-R-e-f-m/y/|0v2h2o2v4d4e4h7k9fQ+c%uQ+|&XQ,P&YQ,Z&aQ.a(nQ1f,WU1j,[,],^Q3W.bQ5r1gS5v1k1lQ8c5w#d=h#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qo=i<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|W%Ti%V*u=dS&X!Q&fQ&Y!RQ&Z!SR+z&V%T%Si#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qT)w$u)xV*z%[<X<YW'X!e%g*W-XS(z#y#zQ+^%pQ+t&QS.Z(j(kQ1],QQ4s0aR8S5c'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g$i$^c#Y#e%o%q%s(P(V(q(v)O)P)Q)R)S)T)U)V)W)X)Z)])_)d)n+_+s-S-q-v-{-}.l.o.s.u.v.w/Z0f2^2a2q2x3^3c3d3e3f3g3h3i3j3k3l3m3n3o3r3s3z4w5Q6c6i6n6}7O7X7Y8U8r8v9Q9W9X:V:m:u;l=ZT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ'V!eR2d-U!W!nQ!e!r!v!y!z$|'T'[']'i'j'k*W*g*k*m*n-U-[-^-n0S0V1b5i5kR1_,SnqOXst!Z#d%k&o&q&r&t,l,q1}2QQ&v!^Q's!xS(p#u;rQ+g%xQ,U&[Q,V&^Q-c'aQ-p'lS.k(u<eS0g+S<oQ0t+hQ1a,TQ2U,sQ2W,tQ2`-PQ2m-dQ2p-hS4x0h<yQ5O0uS5R0w<zQ6b2bQ6f2nQ6k2uQ7w5PQ8s6dQ8t6gQ8w6lR:S8p$d$]c#Y#e%q%s(P(V(q(v)O)P)Q)R)S)T)U)V)W)X)Z)])_)d)n+_+s-S-q-v-{-}.l.o.s.v.w/Z0f2^2a2q2x3^3c3d3e3f3g3h3i3j3k3l3m3n3o3r3s3z4w5Q6c6i6n6}7O7X7Y8U8r8v9Q9W9X:V:m:u;l=ZS(l#p'fQ(|#zS+]%o.uS.[(k(mR3P.]'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gS#q];kQ&q!XQ&r!YQ&t![Q&u!]R1|,oQ'^!hQ+`%uQ-a'`S.^(n+cQ2k-`W3T.a.b0m0oQ6e2lW6r3Q3S3W4|U8z6s6u6wU:X8|8}9PS:w:W:ZQ;U:xR;^;VU!wQ']-^T5g1b5i!Q_OXZ`st!V!Z#d#h%c%k&f&h&o&q&r&t(g,l,q.T1}2Q]!pQ!r']-^1b5iT#q];k%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xS(z#y#zS.Z(j(k!s=Q$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gU$fd)[,fS(m#p'fU*r%R(t3qU0c*y.g7TQ4|0nQ6s3RQ8}6vR:Z9Om!tQ!r!v!y!z']'i'j'k-^-n1b5i5kQ'q!uS(c#g1wS-l'h'tQ/l*YQ/y*fQ2w-oQ4W/mQ4d/{Q4e/|Q4j0UQ7`4RS7k4f4hS7o4k4mQ9]7aQ9a7gQ9f7lQ9k7qS:c9b9cS:|:d:gS;X:};OS;a;Y;ZS;e;b;cR;h;fQ#wbQ'p!uS(b#g1wS(d#m+RQ+T%dQ+e%vQ+k%|U-k'h'q'tQ.P(cQ/k*YQ/z*fQ/}*hQ0s+fQ1h,YS2t-l-oQ2|.XS4V/l/mQ4`/wS4c/y0UQ4g0OQ5t1iQ6m2wQ7_4RQ7c4WU7j4d4j4mQ7m4iQ8a5uS9[7`7aQ9`7gQ9h7oQ9i7pQ9y8bQ:a9]S:b9a9cQ:j9kQ:s9zS:{:c:gS;W:|:}S;`;X;ZS;d;a;cQ;g;eQ;i;hQ=T=OQ=`=XR=a=YV!wQ']-^%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xS#wz!j!r<}$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gR=T=f%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xQ%dj!^%vy!i!u%y%z%{'S'b'c'd'h'r*f+i+j-R-e-f-m/y/|0v2h2o2v4d4e4h7k9fS%|z!jQ+f%wQ,Y&aW1i,Z,[,],^U5u1j1k1lS8b5v5wQ9z8c!r=O$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ=X=eR=Y=f%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xY#bWZ#W#Z(Q!b%hm#h#i#l$x%c%f(Z(e(f(g*V*Z*^+U+V+X,h-O-|.S.T.U.W/f/i2V2}3O4S6`6qQ,g&l!p=P$Z$n)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gR=S'UU'Y!e%g*WR2f-X%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W,i,l,q-b-j-x.O.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3_4l5q6R6S6V6j8_8n8x!r)[$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ,f&lQ0n+bQ3R.`Q6v3VR9O6x!b$Tc#Y%o(P(V(q(v)W)X)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;l!P;x)Z)n-S.u2^2a3c3l3m3r3z6c7O7X7Y8U8r9Q9W9X:m:u=Z!f$Vc#Y%o(P(V(q(v)T)U)W)X)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;l!T;z)Z)n-S.u2^2a3c3i3j3l3m3r3z6c7O7X7Y8U8r9Q9W9X:m:u=Z!^$Zc#Y%o(P(V(q(v)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;lQ4Q/dz=g)Z)n-S.u2^2a3c3r3z6c7O7X7Y8U8r9Q9W9X:m:u=ZQ=l=nR=m=o'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gS$oh$pR3w.}'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t.}/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gT$kf$qQ$ifS)g$l)kR)s$qT$jf$qT)i$l)k'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t.}/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gT$oh$pQ$rhR)r$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8x!s=e$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g#glOPXZst!Z!`!o#S#d#o#{$n%k&h&k&l&o&q&r&t&x'Q'_({)p*e+W+b,i,l,q-b.`/O/g0T0b1e1u1v1x1z1}2Q2S3V3v4l5q6R6S6V6x8_8n!O%Ri$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m#d(t#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qQ+O%`Q/[){o3q<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!O$yi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mQ*_$zU*h$|*W*kQ+P%aQ0O*i#d=V#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn=W<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|Q=[=hQ=]=iQ=^=jR=_=k!O%Ri$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m#d(t#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qo3q<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|noOXst!Z#d%k&o&q&r&t,l,q1}2QS*b${*VQ,z&{Q,{&}R4Z/q%S%Si#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qQ+}&YQ1Z,PQ5a1YR8R5bV*j$|*W*kU*j$|*W*kT5h1b5iS/w*e/gQ4i0TT7p4l9sQ+e%vQ/}*hQ0s+fQ1h,YQ5t1iQ8a5uQ9y8bR:s9z!O%Oi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mr*O$v)b*P*q+Q/o0[0]3t4X4v7^7r:`=U=b=cS0W*p0X#d<T#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn<U<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!b<h(r)`*X*a.c.f.j/W/d/t0l1W3Z3}4Y4^5`6y6|7e7h7t7v9_9g:e:i:z;P;[=n=o`<i3p7P7S7W9R:[:_;_S<s.e3[T<t7R9U!O%Qi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mv*Q$v)b*R*p+Q/`/o0[0]3t4X4n4v7^7r:`=U=b=cS0Y*q0Z#d<V#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn<W<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!f<j(r)`*X*a.d.e.j/W/d/t0l1W3X3Z3}4Y4^5`6y6z6|7e7h7t7v9_9g:e:i:z;P;[=n=od<k3p7Q7R7W9R9S:[:]:_;_S<u.f3]T<v7S9VrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QQ&c!UR,i&lrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QR&c!UQ,R&ZR1V+zsnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QQ1c,WS5o1f1gU8Z5m5n5rS9u8]8^S:o9t9wQ;R:pR;];SQ&j!VR,b&fR5{1oR9|8dS&O|&TR1O+qQ&o!WR,l&pR,r&uT2O,q2QR,v&vQ,u&vR2X,vQ'v!{R-r'vSsOtQ#dXT%ns#dQ#OTR'x#OQ#RUR'z#RQ)x$uR/X)xQ#UVR'}#UQ#XWU(T#X(U-yQ(U#YR-y(VQ-V'VR2e-VQ.n(vS3`.n3aR3a.oQ-^']R2i-^Y!rQ']-^1b5iR'g!rQ.y)bR3u.yU#_W%f*VU([#_(]-zQ(]#`R-z(WQ-Y'YR2g-Yt`OXst!V!Z#d%k&f&h&o&q&r&t,l,q1}2QS#hZ%cU#r`#h.TR.T(gQ(h#jQ.Q(dW.Y(h.Q2z6oQ2z.RR6o2{Q)k$lR/P)kQ$phR)q$pQ$`cU)^$`-u<OQ-u;lR<O)nQ/j*YW4T/j4U7b9^U4U/k/l/mS7b4V4WR9^7c$])}$v(r)`)b*X*a*p*q*{*|+Q.e.f.h.i.j/W/`/b/d/o/t0[0]0l1W3X3Y3Z3p3t3}4X4Y4^4n4p4v5`6y6z6{6|7R7S7U7V7W7^7e7h7r7t7v9R9S9T9_9g:[:]:^:_:`:e:i:z;P;[;_=U=b=c=n=oQ/r*aU4]/r4_7fQ4_/tR7f4^S*k$|*WR0Q*kr*P$v)b*p*q+Q/o0[0]3t4X4v7^7r:`=U=b=c!b.c(r)`*X*a.e.f.j/W/d/t0l1W3Z3}4Y4^5`6y6|7e7h7t7v9_9g:e:i:z;P;[=n=oU/a*P.c7Pa7P3p7R7S7W9R:[:_;_Q0X*pQ3[.eU4o0X3[9UR9U7Rv*R$v)b*p*q+Q/`/o0[0]3t4X4n4v7^7r:`=U=b=c!f.d(r)`*X*a.e.f.j/W/d/t0l1W3X3Z3}4Y4^5`6y6z6|7e7h7t7v9_9g:e:i:z;P;[=n=oU/c*R.d7Qe7Q3p7R7S7W9R9S:[:]:_;_Q0Z*qQ3].fU4q0Z3]9VR9V7SQ*v%UR0_*vQ4{0lR7u4{Q+Y%iR0k+YQ5d1]S8T5d9rR9r8UQ,T&[R1`,TQ5i1bR8W5iQ1n,_S5y1n8eR8e5{Q0y+mW5V0y5X7{9nQ5X0|Q7{5WR9n7|Q+r&OR1P+rQ2Q,qR6Z2QYrOXst#dQ&s!ZQ+[%kQ,k&oQ,m&qQ,n&rQ,p&tQ1{,lS2O,q2QR6Y1}Q%mpQ&w!_Q&z!aQ&|!bQ'O!cQ'n!uQ+Z%jQ+g%xQ+y&UQ,a&jQ,x&yW-i'h'p'q'tQ-p'lQ0P*jQ0t+hS1q,b,eQ2Y,wQ2Z,zQ2[,{Q2p-hW2r-k-l-o-qQ5O0uQ5[1SQ5_1WQ5s1hQ5}1sQ6X1|U6h2q2t2wQ6k2uQ7w5PQ8P5^Q8Q5`Q8V5hQ8`5tQ8f5|S8u6i6mQ8w6lQ9o7}Q9x8aQ9}8gQ:U8vQ:l9pQ:r9yQ:v:VR;T:sQ%xyQ'a!iQ'l!uU+h%y%z%{Q-P'SU-d'b'c'dS-h'h'rQ/x*fS0u+i+jQ2b-RS2n-e-fQ2u-mS4b/y/|Q5P0vQ6d2hQ6g2oQ6l2vU7i4d4e4hQ9e7kR:f9fS$wi=dR*w%VU%Ui%V=dR0^*uQ$viS(r#v+dS)`$b$cQ)b$dQ*X$xS*a${*VQ*p%OQ*q%QQ*{%]Q*|%^Q+Q%bQ.e<TQ.f<VQ.h<ZQ.i<]Q.j<_Q/W)vQ/`*OQ/b*QQ/d*SQ/o*]S/t*c/fQ0[*sQ0]*tl0l+a,O._1[1d3U5p6t8[8{9v:Y:q:yQ1W+{Q3X<hQ3Y<jQ3Z<mS3p<Q<RQ3t.xS3}/]4PQ4X/pQ4Y/qQ4^/sQ4n0WQ4p0YQ4v0eQ5`1XQ6y<qQ6z<sQ6{<uQ6|<wQ7R<UQ7S<WQ7U<[Q7V<^Q7W<`Q7^4QQ7e4[Q7h4aQ7r4rQ7t4zQ7v4}Q9R<nQ9S<iQ9T<kQ9_7dQ9g7nQ:[<rQ:]<tQ:^<vQ:_<xQ:`9ZQ:e9dQ:i9jQ:z<{Q;P:hQ;[;QQ;_<|Q=U=dQ=b=lQ=c=mQ=n=pR=o=qQ*y%[Q.g<XR7T<YnpOXst!Z#d%k&o&q&r&t,l,q1}2QQ!fPS#fZ#oQ&y!`W'e!o*e0T4lQ'|#SQ(}#{Q)o$nS,e&h&kQ,j&lQ,w&xS,|'Q/gQ-`'_Q.q({Q/T)pQ0i+WQ0o+bQ1y,iQ2l-bQ3S.`Q3y/OQ4t0bQ5n1eQ6P1uQ6Q1vQ6U1xQ6W1zQ6]2SQ6w3VQ7Z3vQ8^5qQ8j6RQ8k6SQ8m6VQ9P6xQ9w8_R:R8n#[cOPXZst!Z!`!o#d#o#{%k&h&k&l&o&q&r&t&x'Q'_({*e+W+b,i,l,q-b.`/g0T0b1e1u1v1x1z1}2Q2S3V4l5q6R6S6V6x8_8nQ#YWQ#eYQ%ouQ%qvS%sw!gS(P#W(SQ(V#ZQ(q#uQ(v#xQ)O$OQ)P$PQ)Q$QQ)R$RQ)S$SQ)T$TQ)U$UQ)V$VQ)W$WQ)X$XQ)Z$ZQ)]$_Q)_$aQ)d$eW)n$n)p/O3vQ+_%rQ+s&PS-S'U2cQ-q'oS-v(Q-xQ-{(YQ-}(aQ.l(uQ.o(wQ.s;jQ.u;mQ.v;nQ.w;qQ/Z)zQ0f+SQ2^,}Q2a-QQ2q-jQ2x.OQ3^.mQ3c;rQ3d;sQ3e;tQ3f;uQ3g;vQ3h;wQ3i;xQ3j;yQ3k;zQ3l;{Q3m;|Q3n.tQ3o<PQ3r<SQ3s<aQ3z;}Q4w0hQ5Q0wQ6c<dQ6i2sQ6n2yQ6}3_Q7O<eQ7X<gQ7Y<oQ8U5eQ8r6aQ8v6jQ9Q<pQ9W<yQ9X<zQ:V8xQ:m9qQ:u:TQ;l#SR=Z=gR#[WR'W!el!tQ!r!v!y!z']'i'j'k-^-n1b5i5kS'S!e-UU*f$|*W*kS-R'T'[S/|*g*mQ0U*nQ2h-[Q4h0SR4m0VR(x#xQ!fQT-]']-^]!qQ!r']-^1b5iQ#p]R'f;kR)c$dY!uQ']-^1b5iQ'h!rS'r!v!yS't!z5kS-m'i'jQ-o'kR2v-nT#kZ%cS#jZ%cS%im,hU(d#h#i#lS.R(e(fQ.V(gQ0j+XQ2{.SU2|.T.U.WS6p2}3OR8y6qd#^W#W#Z%f(Q(Z*V+U-|/fr#gZm#h#i#l%c(e(f(g+X.S.T.U.W2}3O6qS*Y$x*^Q/m*ZQ1w,hQ2_-OQ4R/iQ6_2VQ7a4SQ8q6`T=R'U+VV#aW%f*VU#`W%f*VS(R#W(ZU(W#Z+U/fS-T'U+VT-w(Q-|V'Z!e%g*WQ$lfR)u$qT)j$l)kR3x.}T*[$x*^T*d${*VQ0m+aQ1Y,OQ3Q._Q5b1[Q5m1dQ6u3UQ8]5pQ8|6tQ9t8[Q:W8{Q:p9vQ:x:YQ;S:qR;V:ynqOXst!Z#d%k&o&q&r&t,l,q1}2QQ&i!VR,a&ftmOXst!U!V!Z#d%k&f&o&q&r&t,l,q1}2QR,h&lT%jm,hR1^,QR,`&dQ&S|R+x&TR+n%}T&m!W&pT&n!W&pT2P,q2Q",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 377,
  context: N2,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 34, 36, 48, 50, 52, ""],
    ["group", -26, 9, 17, 19, 65, 204, 208, 212, 213, 215, 218, 221, 231, 233, 239, 241, 243, 245, 248, 254, 260, 262, 264, 266, 268, 270, 271, "Statement", -34, 13, 14, 29, 32, 33, 39, 48, 51, 52, 54, 59, 67, 69, 73, 77, 79, 81, 82, 107, 108, 117, 118, 135, 138, 140, 141, 142, 143, 144, 146, 147, 166, 167, 169, "Expression", -23, 28, 30, 34, 38, 40, 42, 171, 173, 175, 176, 178, 179, 180, 182, 183, 184, 186, 187, 188, 198, 200, 202, 203, "Type", -3, 85, 100, 106, "ClassItem"],
    ["openedBy", 23, "<", 35, "InterpolationStart", 53, "[", 57, "{", 70, "(", 159, "JSXStartCloseTag"],
    ["closedBy", 24, ">", 37, "InterpolationEnd", 47, "]", 58, "}", 71, ")", 164, "JSXEndTag"]
  ],
  propSources: [G2],
  skippedNodes: [0, 5, 6, 274],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$h&j(V!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(V!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$h&j(SpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(SpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$h&j(Sp(V!b'x0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(T#S$h&j'y0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$h&j(Sp(V!b'y0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$h&j!m),Q(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#u(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#u(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(R':f$h&j(V!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$h&j(V!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$h&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$c`$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$c``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$c`$h&j(V!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(V!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$c`(V!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$h&j(Sp(V!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$h&j(Sp(V!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$h&j(V!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$h&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(V!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$h&j(SpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(SpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Sp(V!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$h&j(k%1l(Sp(V!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$h&j(Sp(V!b$[#t(P,2j(a$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$h&j(Sp(V!b$[#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$h&j(Sp(V!b#m(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$h&j$P(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(v+JY$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$h&j#y(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(U';W$h&j(SpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$h&j(SpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$h&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$c`$h&j(SpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(SpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$c`(SpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!i/.^$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!h!Lf$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$h&j(Sp(V!b(Q%&f#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$h&j(Sp(V!b#k(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$h&j(Sp(V!bo+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!Y+Jf$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$h&j(Sp(V!b}.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_!X!L^$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$h&j(Sp(V!b#l(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$h&j(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$h&j(V!b!U7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$h&j!U7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$h&j!U7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!U7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!U7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$h&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$h&j(V!b!U7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(V!b!U7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(V!b!U7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(V!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$h&j(V!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$h&j(Sp!U7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$h&j(Sp!U7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Sp!U7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Sp!U7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(SpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$h&j(SpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$h&j(Sp(V!b!U7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Sp(V!b!U7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Sp(V!b!U7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Sp(V!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$h&j(Sp(V!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$h&j(Sp(V!b'z0/l!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$h&j(Sp(V!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$h&j(V!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$h&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(V!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$h&j(SpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(SpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Sp(V!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$h&j$P(Ch(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Y#t$h&j(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!d$b$h&j#})Lv(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#O-<U(Sp(V!b(z7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$j&j(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#o(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$P(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#p(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#]*!Y$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#h(Cl$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#p(Ch$e#|$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#p(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#o(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#o(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(n(Ct$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$h&j#z(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!y$Ip$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!P0,v$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$h&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$h&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$h&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$h&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$h&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!V#)l$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#w(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$h&j(Sp(V!b(]+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$h&j(Sp(V!b(P,2j$^#t(a$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$h&j(Sp(V!b$^#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X![#Hb(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(u+JY$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!Z(CdsBr$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!n7`$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$h&j(Sp(V!b'x0/l$[#t(P,2j(a$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$h&j(Sp(V!b'y0/l$[#t(P,2j(a$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [Y2, U2, F2, W2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, X2, new Oa("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOu~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!R~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(_~~", 141, 336), new Oa("j~RQYZXz{^~^O'|~~aP!P!Qd~iO'}~~", 25, 319)],
  topRules: { Script: [0, 7], SingleExpression: [1, 272], SingleClassItem: [2, 273] },
  dialects: { jsx: 0, ts: 14980 },
  dynamicPrecedences: { 77: 1, 79: 1, 91: 1, 167: 1, 196: 1 },
  specialized: [{ term: 323, get: (i) => H2[i] || -1 }, { term: 339, get: (i) => K2[i] || -1 }, { term: 92, get: (i) => J2[i] || -1 }],
  tokenPrec: 15004
}), mg = [
  /* @__PURE__ */ it("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ it("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ it("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ it("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ it("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ it(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ it("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ it(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ it(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ it('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ it('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], tP = /* @__PURE__ */ mg.concat([
  /* @__PURE__ */ it("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ it("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ it("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), of = /* @__PURE__ */ new OS(), gg = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function Bn(i) {
  return (e, t) => {
    let n = e.node.getChild("VariableDefinition");
    return n && t(n, i), !0;
  };
}
const iP = ["FunctionDeclaration"], nP = {
  FunctionDeclaration: /* @__PURE__ */ Bn("function"),
  ClassDeclaration: /* @__PURE__ */ Bn("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ Bn("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ Bn("type"),
  NamespaceDeclaration: /* @__PURE__ */ Bn("namespace"),
  VariableDefinition(i, e) {
    i.matchContext(iP) || e(i, "variable");
  },
  TypeDefinition(i, e) {
    e(i, "type");
  },
  __proto__: null
};
function yg(i, e) {
  let t = of.get(e);
  if (t)
    return t;
  let n = [], r = !0;
  function s(o, l) {
    let a = i.sliceString(o.from, o.to);
    n.push({ label: a, type: l });
  }
  return e.cursor(Ze.IncludeAnonymous).iterate((o) => {
    if (r)
      r = !1;
    else if (o.name) {
      let l = nP[o.name];
      if (l && l(o, s) || gg.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of yg(i, o.node))
        n.push(l);
      return !1;
    }
  }), of.set(e, n), n;
}
const lf = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, vg = [
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
function rP(i) {
  let e = Ve(i.state).resolveInner(i.pos, -1);
  if (vg.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && lf.test(i.state.sliceDoc(e.from, e.to));
  if (!t && !i.explicit)
    return null;
  let n = [];
  for (let r = e; r; r = r.parent)
    gg.has(r.name) && (n = n.concat(yg(i.state.doc, r)));
  return {
    options: n,
    from: t ? e.from : i.pos,
    validFor: lf
  };
}
const Di = /* @__PURE__ */ Is.define({
  name: "javascript",
  parser: /* @__PURE__ */ eP.configure({
    props: [
      /* @__PURE__ */ BO.add({
        IfStatement: /* @__PURE__ */ Ko({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ Ko({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: DS,
        SwitchBody: (i) => {
          let e = i.textAfter, t = /^\s*\}/.test(e), n = /^\s*(case|default)\b/.test(e);
          return i.baseIndent + (t ? 0 : n ? 1 : 2) * i.unit;
        },
        Block: /* @__PURE__ */ ZS({ closing: "}" }),
        ArrowFunction: (i) => i.baseIndent + i.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ Ko({ except: /^{/ }),
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
      /* @__PURE__ */ zO.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": IS,
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
}), bg = {
  test: (i) => /^JSX/.test(i.name),
  facet: /* @__PURE__ */ VO({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, sP = /* @__PURE__ */ Di.configure({ dialect: "ts" }, "typescript"), oP = /* @__PURE__ */ Di.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ ru.add((i) => i.isTop ? [bg] : void 0)]
}), lP = /* @__PURE__ */ Di.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ ru.add((i) => i.isTop ? [bg] : void 0)]
}, "typescript");
let Sg = (i) => ({ label: i, type: "keyword" });
const xg = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Sg), aP = /* @__PURE__ */ xg.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(Sg));
function uP(i = {}) {
  let e = i.jsx ? i.typescript ? lP : oP : i.typescript ? sP : Di, t = i.typescript ? tP.concat(aP) : mg.concat(xg);
  return new CS(e, [
    Di.data.of({
      autocomplete: mk(vg, ig(t))
    }),
    Di.data.of({
      autocomplete: rP
    }),
    i.jsx ? fP : []
  ]);
}
function cP(i) {
  for (; ; ) {
    if (i.name == "JSXOpenTag" || i.name == "JSXSelfClosingTag" || i.name == "JSXFragmentTag")
      return i;
    if (i.name == "JSXEscape" || !i.parent)
      return null;
    i = i.parent;
  }
}
function af(i, e, t = i.length) {
  for (let n = e == null ? void 0 : e.firstChild; n; n = n.nextSibling)
    if (n.name == "JSXIdentifier" || n.name == "JSXBuiltin" || n.name == "JSXNamespacedName" || n.name == "JSXMemberExpression")
      return i.sliceString(n.from, Math.min(n.to, t));
  return "";
}
const hP = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), fP = /* @__PURE__ */ M.inputHandler.of((i, e, t, n, r) => {
  if ((hP ? i.composing : i.compositionStarted) || i.state.readOnly || e != t || n != ">" && n != "/" || !Di.isActiveAt(i.state, e, -1))
    return !1;
  let s = r(), { state: o } = s, l = o.changeByRange((a) => {
    var u;
    let { head: c } = a, h = Ve(o).resolveInner(c - 1, -1), f;
    if (h.name == "JSXStartTag" && (h = h.parent), !(o.doc.sliceString(c - 1, c) != n || h.name == "JSXAttributeValue" && h.to > c)) {
      if (n == ">" && h.name == "JSXFragmentTag")
        return { range: a, changes: { from: c, insert: "</>" } };
      if (n == "/" && h.name == "JSXStartCloseTag") {
        let d = h.parent, p = d.parent;
        if (p && d.from == c - 2 && ((f = af(o.doc, p.firstChild, c)) || ((u = p.firstChild) === null || u === void 0 ? void 0 : u.name) == "JSXFragmentTag")) {
          let O = `${f}>`;
          return { range: C.cursor(c + O.length, -1), changes: { from: c, insert: O } };
        }
      } else if (n == ">") {
        let d = cP(h);
        if (d && d.name == "JSXOpenTag" && !/^\/?>|^<\//.test(o.doc.sliceString(c, c + 2)) && (f = af(o.doc, d, c)))
          return { range: a, changes: { from: c, insert: `</${f}>` } };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (i.dispatch([
    s,
    o.update(l, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
}), dP = "#e5c07b", uf = "#e06c75", pP = "#56b6c2", OP = "#ffffff", ws = "#abb2bf", ya = "#7d8799", mP = "#61afef", gP = "#98c379", cf = "#d19a66", yP = "#c678dd", vP = "#21252b", hf = "#2c313a", ff = "#282c34", cl = "#353a42", bP = "#3E4451", df = "#528bff", SP = /* @__PURE__ */ M.theme({
  "&": {
    color: ws,
    backgroundColor: ff
  },
  ".cm-content": {
    caretColor: df
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: df },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: bP },
  ".cm-panels": { backgroundColor: vP, color: ws },
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
    backgroundColor: ff,
    color: ya,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: hf
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: cl
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: cl,
    borderBottomColor: cl
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: hf,
      color: ws
    }
  }
}, { dark: !0 }), xP = /* @__PURE__ */ Er.define([
  {
    tag: v.keyword,
    color: yP
  },
  {
    tag: [v.name, v.deleted, v.character, v.propertyName, v.macroName],
    color: uf
  },
  {
    tag: [/* @__PURE__ */ v.function(v.variableName), v.labelName],
    color: mP
  },
  {
    tag: [v.color, /* @__PURE__ */ v.constant(v.name), /* @__PURE__ */ v.standard(v.name)],
    color: cf
  },
  {
    tag: [/* @__PURE__ */ v.definition(v.name), v.separator],
    color: ws
  },
  {
    tag: [v.typeName, v.className, v.number, v.changed, v.annotation, v.modifier, v.self, v.namespace],
    color: dP
  },
  {
    tag: [v.operator, v.operatorKeyword, v.url, v.escape, v.regexp, v.link, /* @__PURE__ */ v.special(v.string)],
    color: pP
  },
  {
    tag: [v.meta, v.comment],
    color: ya
  },
  {
    tag: v.strong,
    fontWeight: "bold"
  },
  {
    tag: v.emphasis,
    fontStyle: "italic"
  },
  {
    tag: v.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: v.link,
    color: ya,
    textDecoration: "underline"
  },
  {
    tag: v.heading,
    fontWeight: "bold",
    color: uf
  },
  {
    tag: [v.atom, v.bool, /* @__PURE__ */ v.special(v.variableName)],
    color: cf
  },
  {
    tag: [v.processingInstruction, v.string, v.inserted],
    color: gP
  },
  {
    tag: v.invalid,
    color: OP
  }
]), wP = [SP, /* @__PURE__ */ lu(xP)], kP = { class: "editor-wrapper" }, oA = {
  __name: "SScriptEditor",
  props: /* @__PURE__ */ Ed({
    height: {
      type: Number,
      default: 0
    },
    readonly: {
      type: Boolean,
      default: !1
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
    const e = Td(i, "modelValue"), t = [dg, uP(), wP, Xi.of(hu)], n = ie(null);
    return (r, s) => (Z(), F("div", kP, [
      N(re(p2), {
        ref_key: "editor",
        ref: n,
        modelValue: e.value,
        "onUpdate:modelValue": s[0] || (s[0] = (o) => e.value = o),
        class: "script-editor",
        autofocus: !0,
        "indent-with-tab": !0,
        "tab-size": 2,
        extensions: t,
        readonly: i.readonly,
        style: Jt(i.height ? { height: `${i.height}px` } : {})
      }, null, 8, ["modelValue", "readonly", "style"])
    ]));
  }
}, PP = {}, QP = { class: "s-table__form" };
function CP(i, e) {
  return Z(), F("div", QP, [
    ge(i.$slots, "default")
  ]);
}
const lA = /* @__PURE__ */ et(PP, [["render", CP]]);
var $P = Object.create, wg = Object.defineProperty, _P = Object.getOwnPropertyDescriptor, Pu = Object.getOwnPropertyNames, AP = Object.getPrototypeOf, EP = Object.prototype.hasOwnProperty, TP = (i, e) => function() {
  return i && (e = (0, i[Pu(i)[0]])(i = 0)), e;
}, RP = (i, e) => function() {
  return e || (0, i[Pu(i)[0]])((e = { exports: {} }).exports, e), e.exports;
}, MP = (i, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of Pu(e))
      !EP.call(i, r) && r !== t && wg(i, r, { get: () => e[r], enumerable: !(n = _P(e, r)) || n.enumerable });
  return i;
}, ZP = (i, e, t) => (t = i != null ? $P(AP(i)) : {}, MP(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  wg(t, "default", { value: i, enumerable: !0 }),
  i
)), Dr = TP({
  "../../node_modules/.pnpm/tsup@8.3.0_@microsoft+api-extractor@7.43.0_@types+node@20.16.14__@swc+core@1.5.29_jiti@2.0.0__utvtwgyeu6xd57udthcnogp47u/node_modules/tsup/assets/esm_shims.js"() {
  }
}), DP = RP({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(i, e) {
    Dr(), e.exports = n;
    function t(s) {
      return s instanceof Buffer ? Buffer.from(s) : new s.constructor(s.buffer.slice(), s.byteOffset, s.length);
    }
    function n(s) {
      if (s = s || {}, s.circles) return r(s);
      const o = /* @__PURE__ */ new Map();
      if (o.set(Date, (h) => new Date(h)), o.set(Map, (h, f) => new Map(a(Array.from(h), f))), o.set(Set, (h, f) => new Set(a(Array.from(h), f))), s.constructorHandlers)
        for (const h of s.constructorHandlers)
          o.set(h[0], h[1]);
      let l = null;
      return s.proto ? c : u;
      function a(h, f) {
        const d = Object.keys(h), p = new Array(d.length);
        for (let O = 0; O < d.length; O++) {
          const m = d[O], g = h[m];
          typeof g != "object" || g === null ? p[m] = g : g.constructor !== Object && (l = o.get(g.constructor)) ? p[m] = l(g, f) : ArrayBuffer.isView(g) ? p[m] = t(g) : p[m] = f(g);
        }
        return p;
      }
      function u(h) {
        if (typeof h != "object" || h === null) return h;
        if (Array.isArray(h)) return a(h, u);
        if (h.constructor !== Object && (l = o.get(h.constructor)))
          return l(h, u);
        const f = {};
        for (const d in h) {
          if (Object.hasOwnProperty.call(h, d) === !1) continue;
          const p = h[d];
          typeof p != "object" || p === null ? f[d] = p : p.constructor !== Object && (l = o.get(p.constructor)) ? f[d] = l(p, u) : ArrayBuffer.isView(p) ? f[d] = t(p) : f[d] = u(p);
        }
        return f;
      }
      function c(h) {
        if (typeof h != "object" || h === null) return h;
        if (Array.isArray(h)) return a(h, c);
        if (h.constructor !== Object && (l = o.get(h.constructor)))
          return l(h, c);
        const f = {};
        for (const d in h) {
          const p = h[d];
          typeof p != "object" || p === null ? f[d] = p : p.constructor !== Object && (l = o.get(p.constructor)) ? f[d] = l(p, c) : ArrayBuffer.isView(p) ? f[d] = t(p) : f[d] = c(p);
        }
        return f;
      }
    }
    function r(s) {
      const o = [], l = [], a = /* @__PURE__ */ new Map();
      if (a.set(Date, (d) => new Date(d)), a.set(Map, (d, p) => new Map(c(Array.from(d), p))), a.set(Set, (d, p) => new Set(c(Array.from(d), p))), s.constructorHandlers)
        for (const d of s.constructorHandlers)
          a.set(d[0], d[1]);
      let u = null;
      return s.proto ? f : h;
      function c(d, p) {
        const O = Object.keys(d), m = new Array(O.length);
        for (let g = 0; g < O.length; g++) {
          const y = O[g], b = d[y];
          if (typeof b != "object" || b === null)
            m[y] = b;
          else if (b.constructor !== Object && (u = a.get(b.constructor)))
            m[y] = u(b, p);
          else if (ArrayBuffer.isView(b))
            m[y] = t(b);
          else {
            const x = o.indexOf(b);
            x !== -1 ? m[y] = l[x] : m[y] = p(b);
          }
        }
        return m;
      }
      function h(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, h);
        if (d.constructor !== Object && (u = a.get(d.constructor)))
          return u(d, h);
        const p = {};
        o.push(d), l.push(p);
        for (const O in d) {
          if (Object.hasOwnProperty.call(d, O) === !1) continue;
          const m = d[O];
          if (typeof m != "object" || m === null)
            p[O] = m;
          else if (m.constructor !== Object && (u = a.get(m.constructor)))
            p[O] = u(m, h);
          else if (ArrayBuffer.isView(m))
            p[O] = t(m);
          else {
            const g = o.indexOf(m);
            g !== -1 ? p[O] = l[g] : p[O] = h(m);
          }
        }
        return o.pop(), l.pop(), p;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, f);
        if (d.constructor !== Object && (u = a.get(d.constructor)))
          return u(d, f);
        const p = {};
        o.push(d), l.push(p);
        for (const O in d) {
          const m = d[O];
          if (typeof m != "object" || m === null)
            p[O] = m;
          else if (m.constructor !== Object && (u = a.get(m.constructor)))
            p[O] = u(m, f);
          else if (ArrayBuffer.isView(m))
            p[O] = t(m);
          else {
            const g = o.indexOf(m);
            g !== -1 ? p[O] = l[g] : p[O] = f(m);
          }
        }
        return o.pop(), l.pop(), p;
      }
    }
  }
});
Dr();
Dr();
Dr();
var kg = typeof navigator < "u", j = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof j.chrome < "u" && j.chrome.devtools;
kg && (j.self, j.top);
var pf;
typeof navigator < "u" && ((pf = navigator.userAgent) == null || pf.toLowerCase().includes("electron"));
Dr();
var VP = ZP(DP()), LP = /(?:^|[-_/])(\w)/g;
function BP(i, e) {
  return e ? e.toUpperCase() : "";
}
function IP(i) {
  return i && `${i}`.replace(LP, BP);
}
function jP(i, e) {
  let t = i.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  t.endsWith(`index${e}`) && (t = t.replace(`/index${e}`, e));
  const n = t.lastIndexOf("/"), r = t.substring(n + 1);
  {
    const s = r.lastIndexOf(e);
    return r.substring(0, s);
  }
}
var Of = (0, VP.default)({ circles: !0 });
const zP = {
  trailing: !0
};
function vn(i, e = 25, t = {}) {
  if (t = { ...zP, ...t }, !Number.isFinite(e))
    throw new TypeError("Expected `wait` to be a finite number");
  let n, r, s = [], o, l;
  const a = (u, c) => (o = qP(i, u, c), o.finally(() => {
    if (o = null, t.trailing && l && !r) {
      const h = a(u, l);
      return l = null, h;
    }
  }), o);
  return function(...u) {
    return o ? (t.trailing && (l = u), o) : new Promise((c) => {
      const h = !r && t.leading;
      clearTimeout(r), r = setTimeout(() => {
        r = null;
        const f = t.leading ? n : a(this, u);
        for (const d of s)
          d(f);
        s = [];
      }, e), h ? (n = a(this, u), c(n)) : s.push(c);
    });
  };
}
async function qP(i, e, t) {
  return await i.apply(e, t);
}
function va(i, e = {}, t) {
  for (const n in i) {
    const r = i[n], s = t ? `${t}:${n}` : n;
    typeof r == "object" && r !== null ? va(r, e, s) : typeof r == "function" && (e[s] = r);
  }
  return e;
}
const NP = { run: (i) => i() }, XP = () => NP, Pg = typeof console.createTask < "u" ? console.createTask : XP;
function YP(i, e) {
  const t = e.shift(), n = Pg(t);
  return i.reduce(
    (r, s) => r.then(() => n.run(() => s(...e))),
    Promise.resolve()
  );
}
function UP(i, e) {
  const t = e.shift(), n = Pg(t);
  return Promise.all(i.map((r) => n.run(() => r(...e))));
}
function hl(i, e) {
  for (const t of [...i])
    t(e);
}
class FP {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(e, t, n = {}) {
    if (!e || typeof t != "function")
      return () => {
      };
    const r = e;
    let s;
    for (; this._deprecatedHooks[e]; )
      s = this._deprecatedHooks[e], e = s.to;
    if (s && !n.allowDeprecated) {
      let o = s.message;
      o || (o = `${r} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o));
    }
    if (!t.name)
      try {
        Object.defineProperty(t, "name", {
          get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
      t && (this.removeHook(e, t), t = void 0);
    };
  }
  hookOnce(e, t) {
    let n, r = (...s) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...s));
    return n = this.hook(e, r), n;
  }
  removeHook(e, t) {
    if (this._hooks[e]) {
      const n = this._hooks[e].indexOf(t);
      n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
    }
  }
  deprecateHook(e, t) {
    this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
    const n = this._hooks[e] || [];
    delete this._hooks[e];
    for (const r of n)
      this.hook(e, r);
  }
  deprecateHooks(e) {
    Object.assign(this._deprecatedHooks, e);
    for (const t in e)
      this.deprecateHook(t, e[t]);
  }
  addHooks(e) {
    const t = va(e), n = Object.keys(t).map(
      (r) => this.hook(r, t[r])
    );
    return () => {
      for (const r of n.splice(0, n.length))
        r();
    };
  }
  removeHooks(e) {
    const t = va(e);
    for (const n in t)
      this.removeHook(n, t[n]);
  }
  removeAllHooks() {
    for (const e in this._hooks)
      delete this._hooks[e];
  }
  callHook(e, ...t) {
    return t.unshift(e), this.callHookWith(YP, e, ...t);
  }
  callHookParallel(e, ...t) {
    return t.unshift(e), this.callHookWith(UP, e, ...t);
  }
  callHookWith(e, t, ...n) {
    const r = this._before || this._after ? { name: t, args: n, context: {} } : void 0;
    this._before && hl(this._before, r);
    const s = e(
      t in this._hooks ? [...this._hooks[t]] : [],
      n
    );
    return s instanceof Promise ? s.finally(() => {
      this._after && r && hl(this._after, r);
    }) : (this._after && r && hl(this._after, r), s);
  }
  beforeEach(e) {
    return this._before = this._before || [], this._before.push(e), () => {
      if (this._before !== void 0) {
        const t = this._before.indexOf(e);
        t !== -1 && this._before.splice(t, 1);
      }
    };
  }
  afterEach(e) {
    return this._after = this._after || [], this._after.push(e), () => {
      if (this._after !== void 0) {
        const t = this._after.indexOf(e);
        t !== -1 && this._after.splice(t, 1);
      }
    };
  }
}
function Qg() {
  return new FP();
}
var WP = Object.create, Cg = Object.defineProperty, GP = Object.getOwnPropertyDescriptor, Qu = Object.getOwnPropertyNames, HP = Object.getPrototypeOf, KP = Object.prototype.hasOwnProperty, JP = (i, e) => function() {
  return i && (e = (0, i[Qu(i)[0]])(i = 0)), e;
}, $g = (i, e) => function() {
  return e || (0, i[Qu(i)[0]])((e = { exports: {} }).exports, e), e.exports;
}, eQ = (i, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of Qu(e))
      !KP.call(i, r) && r !== t && Cg(i, r, { get: () => e[r], enumerable: !(n = GP(e, r)) || n.enumerable });
  return i;
}, tQ = (i, e, t) => (t = i != null ? WP(HP(i)) : {}, eQ(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Cg(t, "default", { value: i, enumerable: !0 }),
  i
)), _ = JP({
  "../../node_modules/.pnpm/tsup@8.3.0_@microsoft+api-extractor@7.43.0_@types+node@20.16.14__@swc+core@1.5.29_jiti@2.0.0__utvtwgyeu6xd57udthcnogp47u/node_modules/tsup/assets/esm_shims.js"() {
  }
}), iQ = $g({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(i, e) {
    _(), function(t) {
      var n = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, r = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], s = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, o = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, l = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, a = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), u = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), c = [".", "!", "~", "*", "'", "(", ")"].join(""), h = function(m, g) {
        var y = "-", b = "", x = "", S = !0, k = {}, w, P, A, U, L, T, Q, $, z, G, V, oe, J, ue, ce = "";
        if (typeof m != "string")
          return "";
        if (typeof g == "string" && (y = g), Q = l.en, $ = o.en, typeof g == "object") {
          w = g.maintainCase || !1, k = g.custom && typeof g.custom == "object" ? g.custom : k, A = +g.truncate > 1 && g.truncate || !1, U = g.uric || !1, L = g.uricNoSlash || !1, T = g.mark || !1, S = !(g.symbols === !1 || g.lang === !1), y = g.separator || y, U && (ce += a), L && (ce += u), T && (ce += c), Q = g.lang && l[g.lang] && S ? l[g.lang] : S ? l.en : {}, $ = g.lang && o[g.lang] ? o[g.lang] : g.lang === !1 || g.lang === !0 ? {} : o.en, g.titleCase && typeof g.titleCase.length == "number" && Array.prototype.toString.call(g.titleCase) ? (g.titleCase.forEach(function(he) {
            k[he + ""] = he + "";
          }), P = !0) : P = !!g.titleCase, g.custom && typeof g.custom.length == "number" && Array.prototype.toString.call(g.custom) && g.custom.forEach(function(he) {
            k[he + ""] = he + "";
          }), Object.keys(k).forEach(function(he) {
            var xe;
            he.length > 1 ? xe = new RegExp("\\b" + d(he) + "\\b", "gi") : xe = new RegExp(d(he), "gi"), m = m.replace(xe, k[he]);
          });
          for (V in k)
            ce += V;
        }
        for (ce += y, ce = d(ce), m = m.replace(/(^\s+|\s+$)/g, ""), J = !1, ue = !1, G = 0, oe = m.length; G < oe; G++)
          V = m[G], p(V, k) ? J = !1 : $[V] ? (V = J && $[V].match(/[A-Za-z0-9]/) ? " " + $[V] : $[V], J = !1) : V in n ? (G + 1 < oe && r.indexOf(m[G + 1]) >= 0 ? (x += V, V = "") : ue === !0 ? (V = s[x] + n[V], x = "") : V = J && n[V].match(/[A-Za-z0-9]/) ? " " + n[V] : n[V], J = !1, ue = !1) : V in s ? (x += V, V = "", G === oe - 1 && (V = s[x]), ue = !0) : /* process symbol chars */ Q[V] && !(U && a.indexOf(V) !== -1) && !(L && u.indexOf(V) !== -1) ? (V = J || b.substr(-1).match(/[A-Za-z0-9]/) ? y + Q[V] : Q[V], V += m[G + 1] !== void 0 && m[G + 1].match(/[A-Za-z0-9]/) ? y : "", J = !0) : (ue === !0 ? (V = s[x] + V, x = "", ue = !1) : J && (/[A-Za-z0-9]/.test(V) || b.substr(-1).match(/A-Za-z0-9]/)) && (V = " " + V), J = !1), b += V.replace(new RegExp("[^\\w\\s" + ce + "_-]", "g"), y);
        return P && (b = b.replace(/(\w)(\S*)/g, function(he, xe, Oe) {
          var tt = xe.toUpperCase() + (Oe !== null ? Oe : "");
          return Object.keys(k).indexOf(tt.toLowerCase()) < 0 ? tt : tt.toLowerCase();
        })), b = b.replace(/\s+/g, y).replace(new RegExp("\\" + y + "+", "g"), y).replace(new RegExp("(^\\" + y + "+|\\" + y + "+$)", "g"), ""), A && b.length > A && (z = b.charAt(A) === y, b = b.slice(0, A), z || (b = b.slice(0, b.lastIndexOf(y)))), !w && !P && (b = b.toLowerCase()), b;
      }, f = function(m) {
        return function(y) {
          return h(y, m);
        };
      }, d = function(m) {
        return m.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, p = function(O, m) {
        for (var g in m)
          if (m[g] === O)
            return !0;
      };
      if (typeof e < "u" && e.exports)
        e.exports = h, e.exports.createSlug = f;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return h;
        });
      else
        try {
          if (t.getSlug || t.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          t.getSlug = h, t.createSlug = f;
        } catch {
        }
    }(i);
  }
}), nQ = $g({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(i, e) {
    _(), e.exports = iQ();
  }
});
_();
_();
_();
_();
_();
_();
_();
function rQ(i) {
  return !!(i && i.__v_isReadonly);
}
function _g(i) {
  return rQ(i) ? _g(i.__v_raw) : !!(i && i.__v_isReactive);
}
function fl(i) {
  return !!(i && i.__v_isRef === !0);
}
function Un(i) {
  const e = i && i.__v_raw;
  return e ? Un(e) : i;
}
_();
function sQ(i) {
  var e;
  const t = i.name || i._componentTag || i.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || i.__name;
  return t === "index" && ((e = i.__file) != null && e.endsWith("index.vue")) ? "" : t;
}
function oQ(i) {
  const e = i.__file;
  if (e)
    return IP(jP(e, ".vue"));
}
function mf(i, e) {
  return i.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = e, e;
}
function Qo(i) {
  if (i.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return i.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (i.root)
    return i.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
async function lQ(i) {
  const { app: e, uid: t, instance: n } = i;
  try {
    if (n.__VUE_DEVTOOLS_NEXT_UID__)
      return n.__VUE_DEVTOOLS_NEXT_UID__;
    const r = await Qo(e);
    if (!r)
      return null;
    const s = r.rootInstance === n;
    return `${r.id}:${s ? "root" : t}`;
  } catch {
  }
}
function Ag(i) {
  var e, t;
  const n = (e = i.subTree) == null ? void 0 : e.type, r = Qo(i);
  return r ? ((t = r == null ? void 0 : r.types) == null ? void 0 : t.Fragment) === n : !1;
}
function Co(i) {
  var e, t, n;
  const r = sQ((i == null ? void 0 : i.type) || {});
  if (r)
    return r;
  if ((i == null ? void 0 : i.root) === i)
    return "Root";
  for (const o in (t = (e = i.parent) == null ? void 0 : e.type) == null ? void 0 : t.components)
    if (i.parent.type.components[o] === (i == null ? void 0 : i.type))
      return mf(i, o);
  for (const o in (n = i.appContext) == null ? void 0 : n.components)
    if (i.appContext.components[o] === (i == null ? void 0 : i.type))
      return mf(i, o);
  const s = oQ((i == null ? void 0 : i.type) || {});
  return s || "Anonymous Component";
}
function ba(i, e) {
  return e = e || `${i.id}:root`, i.instanceMap.get(e) || i.instanceMap.get(":root");
}
var aQ = class {
  constructor() {
    this.refEditor = new uQ();
  }
  set(i, e, t, n) {
    const r = Array.isArray(e) ? e : e.split(".");
    for (; r.length > 1; ) {
      const l = r.shift();
      i instanceof Map && (i = i.get(l)), i instanceof Set ? i = Array.from(i.values())[l] : i = i[l], this.refEditor.isRef(i) && (i = this.refEditor.get(i));
    }
    const s = r[0], o = this.refEditor.get(i)[s];
    n ? n(i, s, t) : this.refEditor.isRef(o) ? this.refEditor.set(o, t) : i[s] = t;
  }
  get(i, e) {
    const t = Array.isArray(e) ? e : e.split(".");
    for (let n = 0; n < t.length; n++)
      if (i instanceof Map ? i = i.get(t[n]) : i = i[t[n]], this.refEditor.isRef(i) && (i = this.refEditor.get(i)), !i)
        return;
    return i;
  }
  has(i, e, t = !1) {
    if (typeof i > "u")
      return !1;
    const n = Array.isArray(e) ? e.slice() : e.split("."), r = t ? 2 : 1;
    for (; i && n.length > r; ) {
      const s = n.shift();
      i = i[s], this.refEditor.isRef(i) && (i = this.refEditor.get(i));
    }
    return i != null && Object.prototype.hasOwnProperty.call(i, n[0]);
  }
  createDefaultSetCallback(i) {
    return (e, t, n) => {
      if ((i.remove || i.newKey) && (Array.isArray(e) ? e.splice(t, 1) : Un(e) instanceof Map ? e.delete(t) : Un(e) instanceof Set ? e.delete(Array.from(e.values())[t]) : Reflect.deleteProperty(e, t)), !i.remove) {
        const r = e[i.newKey || t];
        this.refEditor.isRef(r) ? this.refEditor.set(r, n) : Un(e) instanceof Map ? e.set(i.newKey || t, n) : Un(e) instanceof Set ? e.add(n) : e[i.newKey || t] = n;
      }
    };
  }
}, uQ = class {
  set(i, e) {
    if (fl(i))
      i.value = e;
    else {
      if (i instanceof Set && Array.isArray(e)) {
        i.clear(), e.forEach((r) => i.add(r));
        return;
      }
      const t = Object.keys(e);
      if (i instanceof Map) {
        const r = new Set(i.keys());
        t.forEach((s) => {
          i.set(s, Reflect.get(e, s)), r.delete(s);
        }), r.forEach((s) => i.delete(s));
        return;
      }
      const n = new Set(Object.keys(i));
      t.forEach((r) => {
        Reflect.set(i, r, Reflect.get(e, r)), n.delete(r);
      }), n.forEach((r) => Reflect.deleteProperty(i, r));
    }
  }
  get(i) {
    return fl(i) ? i.value : i;
  }
  isRef(i) {
    return fl(i) || _g(i);
  }
};
_();
function Cu(i) {
  return Ag(i) ? cQ(i.subTree) : i.subTree ? [i.subTree.el] : [];
}
function cQ(i) {
  if (!i.children)
    return [];
  const e = [];
  return i.children.forEach((t) => {
    t.component ? e.push(...Cu(t.component)) : t != null && t.el && e.push(t.el);
  }), e;
}
_();
_();
function hQ() {
  const i = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return i.right - i.left;
    },
    get height() {
      return i.bottom - i.top;
    }
  };
  return i;
}
var as;
function fQ(i) {
  return as || (as = document.createRange()), as.selectNode(i), as.getBoundingClientRect();
}
function dQ(i) {
  const e = hQ();
  if (!i.children)
    return e;
  for (let t = 0, n = i.children.length; t < n; t++) {
    const r = i.children[t];
    let s;
    if (r.component)
      s = qi(r.component);
    else if (r.el) {
      const o = r.el;
      o.nodeType === 1 || o.getBoundingClientRect ? s = o.getBoundingClientRect() : o.nodeType === 3 && o.data.trim() && (s = fQ(o));
    }
    s && pQ(e, s);
  }
  return e;
}
function pQ(i, e) {
  return (!i.top || e.top < i.top) && (i.top = e.top), (!i.bottom || e.bottom > i.bottom) && (i.bottom = e.bottom), (!i.left || e.left < i.left) && (i.left = e.left), (!i.right || e.right > i.right) && (i.right = e.right), i;
}
var gf = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function qi(i) {
  const e = i.subTree.el;
  return typeof window > "u" ? gf : Ag(i) ? dQ(i.subTree) : (e == null ? void 0 : e.nodeType) === 1 ? e == null ? void 0 : e.getBoundingClientRect() : i.subTree.component ? qi(i.subTree.component) : gf;
}
var Eg = "__vue-devtools-component-inspector__", Tg = "__vue-devtools-component-inspector__card__", Rg = "__vue-devtools-component-inspector__name__", Mg = "__vue-devtools-component-inspector__indicator__", Zg = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, OQ = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, mQ = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function An() {
  return document.getElementById(Eg);
}
function gQ() {
  return document.getElementById(Tg);
}
function yQ() {
  return document.getElementById(Mg);
}
function vQ() {
  return document.getElementById(Rg);
}
function $u(i) {
  return {
    left: `${Math.round(i.left * 100) / 100}px`,
    top: `${Math.round(i.top * 100) / 100}px`,
    width: `${Math.round(i.width * 100) / 100}px`,
    height: `${Math.round(i.height * 100) / 100}px`
  };
}
function _u(i) {
  var e;
  const t = document.createElement("div");
  t.id = (e = i.elementId) != null ? e : Eg, Object.assign(t.style, {
    ...Zg,
    ...$u(i.bounds),
    ...i.style
  });
  const n = document.createElement("span");
  n.id = Tg, Object.assign(n.style, {
    ...OQ,
    top: i.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = Rg, r.innerHTML = `&lt;${i.name}&gt;&nbsp;&nbsp;`;
  const s = document.createElement("i");
  return s.id = Mg, s.innerHTML = `${Math.round(i.bounds.width * 100) / 100} x ${Math.round(i.bounds.height * 100) / 100}`, Object.assign(s.style, mQ), n.appendChild(r), n.appendChild(s), t.appendChild(n), document.body.appendChild(t), t;
}
function Au(i) {
  const e = An(), t = gQ(), n = vQ(), r = yQ();
  e && (Object.assign(e.style, {
    ...Zg,
    ...$u(i.bounds)
  }), Object.assign(t.style, {
    top: i.bounds.top < 35 ? 0 : "-35px"
  }), n.innerHTML = `&lt;${i.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(i.bounds.width * 100) / 100} x ${Math.round(i.bounds.height * 100) / 100}`);
}
function bQ(i) {
  const e = qi(i), t = Co(i);
  An() ? Au({ bounds: e, name: t }) : _u({ bounds: e, name: t });
}
function Dg() {
  const i = An();
  i && (i.style.display = "none");
}
var Sa = null;
function xa(i) {
  const e = i.target;
  if (e) {
    const t = e.__vueParentComponent;
    if (t && (Sa = t, t.vnode.el)) {
      const r = qi(t), s = Co(t);
      An() ? Au({ bounds: r, name: s }) : _u({ bounds: r, name: s });
    }
  }
}
function SQ(i, e) {
  var t;
  if (i.preventDefault(), i.stopPropagation(), Sa) {
    const n = (t = ot.value) == null ? void 0 : t.app;
    lQ({
      app: n,
      uid: n.uid,
      instance: Sa
    }).then((r) => {
      e(r);
    });
  }
}
var no = null;
function xQ() {
  Dg(), window.removeEventListener("mouseover", xa), window.removeEventListener("click", no, !0), no = null;
}
function wQ() {
  return window.addEventListener("mouseover", xa), new Promise((i) => {
    function e(t) {
      t.preventDefault(), t.stopPropagation(), SQ(t, (n) => {
        window.removeEventListener("click", e, !0), no = null, window.removeEventListener("mouseover", xa);
        const r = An();
        r && (r.style.display = "none"), i(JSON.stringify({ id: n }));
      });
    }
    no = e, window.addEventListener("click", e, !0);
  });
}
function kQ(i) {
  const e = ba(ot.value, i.id);
  if (e) {
    const [t] = Cu(e);
    if (typeof t.scrollIntoView == "function")
      t.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const n = qi(e), r = document.createElement("div"), s = {
        ...$u(n),
        position: "absolute"
      };
      Object.assign(r.style, s), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const n = qi(e);
      if (n.width || n.height) {
        const r = Co(e), s = An();
        s ? Au({ ...i, name: r, bounds: n }) : _u({ ...i, name: r, bounds: n }), setTimeout(() => {
          s && (s.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
_();
var yf, vf;
(vf = (yf = j).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (yf.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function PQ(i) {
  let e = 0;
  const t = setInterval(() => {
    j.__VUE_INSPECTOR__ && (clearInterval(t), e += 30, i()), e >= /* 5s */
    5e3 && clearInterval(t);
  }, 30);
}
function QQ() {
  const i = j.__VUE_INSPECTOR__, e = i.openInEditor;
  i.openInEditor = async (...t) => {
    i.disable(), e(...t);
  };
}
function CQ() {
  return new Promise((i) => {
    function e() {
      QQ(), i(j.__VUE_INSPECTOR__);
    }
    j.__VUE_INSPECTOR__ ? e() : PQ(() => {
      e();
    });
  });
}
_();
_();
_();
var $Q = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function _Q() {
  if (!kg || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const i = localStorage.getItem($Q);
  return i ? JSON.parse(i) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
_();
_();
_();
var bf, Sf;
(Sf = (bf = j).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (bf.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var AQ = new Proxy(j.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(i, e, t) {
    return Reflect.get(i, e, t);
  }
});
function EQ(i, e) {
  gt.timelineLayersState[e.id] = !1, AQ.push({
    ...i,
    descriptorId: e.id,
    appRecord: Qo(e.app)
  });
}
var xf, wf;
(wf = (xf = j).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (xf.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Eu = new Proxy(j.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(i, e, t) {
    return Reflect.get(i, e, t);
  }
}), Vg = vn(() => {
  En.hooks.callHook("sendInspectorToClient", Lg());
});
function TQ(i, e) {
  var t, n;
  Eu.push({
    options: i,
    descriptor: e,
    treeFilterPlaceholder: (t = i.treeFilterPlaceholder) != null ? t : "Search tree...",
    stateFilterPlaceholder: (n = i.stateFilterPlaceholder) != null ? n : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Qo(e.app)
  }), Vg();
}
function Lg() {
  return Eu.filter((i) => i.descriptor.app === ot.value.app).filter((i) => i.descriptor.id !== "components").map((i) => {
    var e;
    const t = i.descriptor, n = i.options;
    return {
      id: n.id,
      label: n.label,
      logo: t.logo,
      icon: `custom-ic-baseline-${(e = n == null ? void 0 : n.icon) == null ? void 0 : e.replace(/_/g, "-")}`,
      packageName: t.packageName,
      homepage: t.homepage,
      pluginId: t.id
    };
  });
}
function ks(i, e) {
  return Eu.find((t) => t.options.id === i && (e ? t.descriptor.app === e : !0));
}
function RQ() {
  const i = Qg();
  i.hook("addInspector", ({ inspector: n, plugin: r }) => {
    TQ(n, r.descriptor);
  });
  const e = vn(async ({ inspectorId: n, plugin: r }) => {
    var s;
    if (!n || !((s = r == null ? void 0 : r.descriptor) != null && s.app) || gt.highPerfModeEnabled)
      return;
    const o = ks(n, r.descriptor.app), l = {
      app: r.descriptor.app,
      inspectorId: n,
      filter: (o == null ? void 0 : o.treeFilter) || "",
      rootNodes: []
    };
    await new Promise((a) => {
      i.callHookWith(
        async (u) => {
          await Promise.all(u.map((c) => c(l))), a();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), i.callHookWith(
      async (a) => {
        await Promise.all(a.map((u) => u({
          inspectorId: n,
          rootNodes: l.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  i.hook("sendInspectorTree", e);
  const t = vn(async ({ inspectorId: n, plugin: r }) => {
    var s;
    if (!n || !((s = r == null ? void 0 : r.descriptor) != null && s.app) || gt.highPerfModeEnabled)
      return;
    const o = ks(n, r.descriptor.app), l = {
      app: r.descriptor.app,
      inspectorId: n,
      nodeId: (o == null ? void 0 : o.selectedNodeId) || "",
      state: null
    }, a = {
      currentTab: `custom-inspector:${n}`
    };
    l.nodeId && await new Promise((u) => {
      i.callHookWith(
        async (c) => {
          await Promise.all(c.map((h) => h(l, a))), u();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), i.callHookWith(
      async (u) => {
        await Promise.all(u.map((c) => c({
          inspectorId: n,
          nodeId: l.nodeId,
          state: l.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return i.hook("sendInspectorState", t), i.hook("customInspectorSelectNode", ({ inspectorId: n, nodeId: r, plugin: s }) => {
    const o = ks(n, s.descriptor.app);
    o && (o.selectedNodeId = r);
  }), i.hook("timelineLayerAdded", ({ options: n, plugin: r }) => {
    EQ(n, r.descriptor);
  }), i.hook("timelineEventAdded", ({ options: n, plugin: r }) => {
    var s;
    const o = ["performance", "component-event", "keyboard", "mouse"];
    gt.highPerfModeEnabled || !((s = gt.timelineLayersState) != null && s[r.descriptor.id]) && !o.includes(n.layerId) || i.callHookWith(
      async (l) => {
        await Promise.all(l.map((a) => a(n)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), i.hook("getComponentInstances", async ({ app: n }) => {
    const r = n.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!r)
      return null;
    const s = r.id.toString();
    return [...r.instanceMap].filter(([l]) => l.split(":")[0] === s).map(([, l]) => l);
  }), i.hook("getComponentBounds", async ({ instance: n }) => qi(n)), i.hook("getComponentName", ({ instance: n }) => Co(n)), i.hook("componentHighlight", ({ uid: n }) => {
    const r = ot.value.instanceMap.get(n);
    r && bQ(r);
  }), i.hook("componentUnhighlight", () => {
    Dg();
  }), i;
}
var kf, Pf;
(Pf = (kf = j).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (kf.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Qf, Cf;
(Cf = (Qf = j).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Qf.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var $f, _f;
(_f = ($f = j).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || ($f.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Af, Ef;
(Ef = (Af = j).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Af.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Tf, Rf;
(Rf = (Tf = j).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Tf.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Ei = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function MQ() {
  return {
    connected: !1,
    clientConnected: !1,
    vitePluginDetected: !0,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: !0,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: _Q()
  };
}
var Mf, Zf;
(Zf = (Mf = j)[Ei]) != null || (Mf[Ei] = MQ());
var ZQ = vn((i) => {
  En.hooks.callHook("devtoolsStateUpdated", { state: i });
});
vn((i, e) => {
  En.hooks.callHook("devtoolsConnectedUpdated", { state: i, oldState: e });
});
var $o = new Proxy(j.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(i, e, t) {
    return e === "value" ? j.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : j.__VUE_DEVTOOLS_KIT_APP_RECORDS__[e];
  }
}), ot = new Proxy(j.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(i, e, t) {
    return e === "value" ? j.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : e === "id" ? j.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : j.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[e];
  }
});
function Bg() {
  ZQ({
    ...j[Ei],
    appRecords: $o.value,
    activeAppRecordId: ot.id,
    tabs: j.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: j.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function DQ(i) {
  j.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = i, Bg();
}
function VQ(i) {
  j.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = i, Bg();
}
var gt = new Proxy(j[Ei], {
  get(i, e) {
    return e === "appRecords" ? $o : e === "activeAppRecordId" ? ot.id : e === "tabs" ? j.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : e === "commands" ? j.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : j[Ei][e];
  },
  deleteProperty(i, e) {
    return delete i[e], !0;
  },
  set(i, e, t) {
    return { ...j[Ei] }, i[e] = t, j[Ei][e] = t, !0;
  }
});
function LQ(i = {}) {
  var e, t, n;
  const { file: r, host: s, baseUrl: o = window.location.origin, line: l = 0, column: a = 0 } = i;
  if (r) {
    if (s === "chrome-extension") {
      const u = r.replace(/\\/g, "\\\\"), c = (t = (e = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : e.openInEditorHost) != null ? t : "/";
      fetch(`${c}__open-in-editor?file=${encodeURI(r)}`).then((h) => {
        if (!h.ok) {
          const f = `Opening component ${u} failed`;
          console.log(`%c${f}`, "color:red");
        }
      });
    } else if (gt.vitePluginDetected) {
      const u = (n = j.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? n : o;
      j.__VUE_INSPECTOR__.openInEditor(u, r, l, a);
    }
  }
}
_();
_();
_();
_();
_();
var Df, Vf;
(Vf = (Df = j).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Df.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Tu = new Proxy(j.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(i, e, t) {
    return Reflect.get(i, e, t);
  }
});
function wa(i) {
  const e = {};
  return Object.keys(i).forEach((t) => {
    e[t] = i[t].defaultValue;
  }), e;
}
function Ru(i) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${i}__`;
}
function BQ(i) {
  var e, t, n;
  const r = (t = (e = Tu.find((s) => {
    var o;
    return s[0].id === i && !!((o = s[0]) != null && o.settings);
  })) == null ? void 0 : e[0]) != null ? t : null;
  return (n = r == null ? void 0 : r.settings) != null ? n : null;
}
function Ig(i, e) {
  var t, n, r;
  const s = Ru(i);
  if (s) {
    const o = localStorage.getItem(s);
    if (o)
      return JSON.parse(o);
  }
  if (i) {
    const o = (n = (t = Tu.find((l) => l[0].id === i)) == null ? void 0 : t[0]) != null ? n : null;
    return wa((r = o == null ? void 0 : o.settings) != null ? r : {});
  }
  return wa(e);
}
function IQ(i, e) {
  const t = Ru(i);
  localStorage.getItem(t) || localStorage.setItem(t, JSON.stringify(wa(e)));
}
function jQ(i, e, t) {
  const n = Ru(i), r = localStorage.getItem(n), s = JSON.parse(r || "{}"), o = {
    ...s,
    [e]: t
  };
  localStorage.setItem(n, JSON.stringify(o)), En.hooks.callHookWith(
    (l) => {
      l.forEach((a) => a({
        pluginId: i,
        key: e,
        oldValue: s[e],
        newValue: t,
        settings: o
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
var Lf, Bf, dt = (Bf = (Lf = j).__VUE_DEVTOOLS_HOOK) != null ? Bf : Lf.__VUE_DEVTOOLS_HOOK = Qg(), zQ = {
  vueAppInit(i) {
    dt.hook("app:init", i);
  },
  vueAppUnmount(i) {
    dt.hook("app:unmount", i);
  },
  vueAppConnected(i) {
    dt.hook("app:connected", i);
  },
  componentAdded(i) {
    return dt.hook("component:added", i);
  },
  componentEmit(i) {
    return dt.hook("component:emit", i);
  },
  componentUpdated(i) {
    return dt.hook("component:updated", i);
  },
  componentRemoved(i) {
    return dt.hook("component:removed", i);
  },
  setupDevtoolsPlugin(i) {
    dt.hook("devtools-plugin:setup", i);
  },
  perfStart(i) {
    return dt.hook("perf:start", i);
  },
  perfEnd(i) {
    return dt.hook("perf:end", i);
  }
}, jg = {
  on: zQ,
  setupDevToolsPlugin(i, e) {
    return dt.callHook("devtools-plugin:setup", i, e);
  }
}, qQ = class {
  constructor({ plugin: i, ctx: e }) {
    this.hooks = e.hooks, this.plugin = i;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (i) => {
        this.hooks.hook("visitComponentTree", i);
      },
      inspectComponent: (i) => {
        this.hooks.hook("inspectComponent", i);
      },
      editComponentState: (i) => {
        this.hooks.hook("editComponentState", i);
      },
      // custom inspector
      getInspectorTree: (i) => {
        this.hooks.hook("getInspectorTree", i);
      },
      getInspectorState: (i) => {
        this.hooks.hook("getInspectorState", i);
      },
      editInspectorState: (i) => {
        this.hooks.hook("editInspectorState", i);
      },
      // timeline
      inspectTimelineEvent: (i) => {
        this.hooks.hook("inspectTimelineEvent", i);
      },
      timelineCleared: (i) => {
        this.hooks.hook("timelineCleared", i);
      },
      // settings
      setPluginSettings: (i) => {
        this.hooks.hook("setPluginSettings", i);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(i) {
    var e;
    const t = Lg().find((n) => n.packageName === this.plugin.descriptor.packageName);
    if (t != null && t.id) {
      if (i) {
        const n = [
          i.appContext.app,
          i.uid,
          (e = i.parent) == null ? void 0 : e.uid,
          i
        ];
        dt.callHook("component:updated", ...n);
      } else
        dt.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: t.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(i) {
    this.hooks.callHook("addInspector", { inspector: i, plugin: this.plugin }), this.plugin.descriptor.settings && IQ(i.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(i) {
    this.hooks.callHook("sendInspectorTree", { inspectorId: i, plugin: this.plugin });
  }
  sendInspectorState(i) {
    this.hooks.callHook("sendInspectorState", { inspectorId: i, plugin: this.plugin });
  }
  selectInspectorNode(i, e) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: i, nodeId: e, plugin: this.plugin });
  }
  visitComponentTree(i) {
    return this.hooks.callHook("visitComponentTree", i);
  }
  // timeline
  now() {
    return Date.now();
  }
  addTimelineLayer(i) {
    this.hooks.callHook("timelineLayerAdded", { options: i, plugin: this.plugin });
  }
  addTimelineEvent(i) {
    this.hooks.callHook("timelineEventAdded", { options: i, plugin: this.plugin });
  }
  // settings
  getSettings(i) {
    return Ig(i ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(i) {
    return this.hooks.callHook("getComponentInstances", { app: i });
  }
  getComponentBounds(i) {
    return this.hooks.callHook("getComponentBounds", { instance: i });
  }
  getComponentName(i) {
    return this.hooks.callHook("getComponentName", { instance: i });
  }
  highlightElement(i) {
    const e = i.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: e });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
}, NQ = qQ;
_();
_();
_();
_();
var XQ = "__vue_devtool_undefined__", YQ = "__vue_devtool_infinity__", UQ = "__vue_devtool_negative_infinity__", FQ = "__vue_devtool_nan__";
_();
_();
var WQ = {
  [XQ]: "undefined",
  [FQ]: "NaN",
  [YQ]: "Infinity",
  [UQ]: "-Infinity"
};
Object.entries(WQ).reduce((i, [e, t]) => (i[t] = e, i), {});
_();
_();
_();
_();
_();
var If, jf;
(jf = (If = j).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (If.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function GQ(i, e) {
  return jg.setupDevToolsPlugin(i, e);
}
function HQ(i, e) {
  const [t, n] = i;
  if (t.app !== e)
    return;
  const r = new NQ({
    plugin: {
      setupFn: n,
      descriptor: t
    },
    ctx: En
  });
  t.packageName === "vuex" && r.on.editInspectorState((s) => {
    r.sendInspectorState(s.inspectorId);
  }), n(r);
}
function KQ(i) {
  j.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(i) || (j.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(i), Tu.forEach((e) => {
    HQ(e, i);
  }));
}
_();
_();
var Sr = "__VUE_DEVTOOLS_ROUTER__", bn = "__VUE_DEVTOOLS_ROUTER_INFO__", zf, qf;
(qf = (zf = j)[bn]) != null || (zf[bn] = {
  currentRoute: null,
  routes: []
});
var Nf, Xf;
(Xf = (Nf = j)[Sr]) != null || (Nf[Sr] = {});
new Proxy(j[bn], {
  get(i, e) {
    return j[bn][e];
  }
});
new Proxy(j[Sr], {
  get(i, e) {
    if (e === "value")
      return j[Sr];
  }
});
function JQ(i) {
  const e = /* @__PURE__ */ new Map();
  return ((i == null ? void 0 : i.getRoutes()) || []).filter((t) => !e.has(t.path) && e.set(t.path, 1));
}
function Mu(i) {
  return i.map((e) => {
    let { path: t, name: n, children: r, meta: s } = e;
    return r != null && r.length && (r = Mu(r)), {
      path: t,
      name: n,
      children: r,
      meta: s
    };
  });
}
function eC(i) {
  if (i) {
    const { fullPath: e, hash: t, href: n, path: r, name: s, matched: o, params: l, query: a } = i;
    return {
      fullPath: e,
      hash: t,
      href: n,
      path: r,
      name: s,
      params: l,
      query: a,
      matched: Mu(o)
    };
  }
  return i;
}
function tC(i, e) {
  function t() {
    var n;
    const r = (n = i.app) == null ? void 0 : n.config.globalProperties.$router, s = eC(r == null ? void 0 : r.currentRoute.value), o = Mu(JQ(r)), l = console.warn;
    console.warn = () => {
    }, j[bn] = {
      currentRoute: s ? Of(s) : {},
      routes: Of(o)
    }, j[Sr] = r, console.warn = l;
  }
  t(), jg.on.componentUpdated(vn(() => {
    var n;
    ((n = e.value) == null ? void 0 : n.app) === i.app && (t(), !gt.highPerfModeEnabled && En.hooks.callHook("routerInfoUpdated", { state: j[bn] }));
  }, 200));
}
function iC(i) {
  return {
    // get inspector tree
    async getInspectorTree(e) {
      const t = {
        ...e,
        app: ot.value.app,
        rootNodes: []
      };
      return await new Promise((n) => {
        i.callHookWith(
          async (r) => {
            await Promise.all(r.map((s) => s(t))), n();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), t.rootNodes;
    },
    // get inspector state
    async getInspectorState(e) {
      const t = {
        ...e,
        app: ot.value.app,
        state: null
      }, n = {
        currentTab: `custom-inspector:${e.inspectorId}`
      };
      return await new Promise((r) => {
        i.callHookWith(
          async (s) => {
            await Promise.all(s.map((o) => o(t, n))), r();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), t.state;
    },
    // edit inspector state
    editInspectorState(e) {
      const t = new aQ(), n = {
        ...e,
        app: ot.value.app,
        set: (r, s = e.path, o = e.state.value, l) => {
          t.set(r, s, o, l || t.createDefaultSetCallback(e.state));
        }
      };
      i.callHookWith(
        (r) => {
          r.forEach((s) => s(n));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(e) {
      const t = ks(e);
      i.callHook("sendInspectorState", { inspectorId: e, plugin: {
        descriptor: t.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return wQ();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return xQ();
    },
    // get component render code
    getComponentRenderCode(e) {
      const t = ba(ot.value, e);
      if (t)
        return (t == null ? void 0 : t.type) instanceof Function ? t.type.toString() : t.render.toString();
    },
    // scroll to component
    scrollToComponent(e) {
      return kQ({ id: e });
    },
    // open in editor
    openInEditor: LQ,
    // get vue inspector
    getVueInspector: CQ,
    // toggle app
    toggleApp(e) {
      const t = $o.value.find((n) => n.id === e);
      t && (VQ(e), DQ(t), tC(t, ot), Vg(), KQ(t.app));
    },
    // inspect dom
    inspectDOM(e) {
      const t = ba(ot.value, e);
      if (t) {
        const [n] = Cu(t);
        n && (j.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = n);
      }
    },
    updatePluginSettings(e, t, n) {
      jQ(e, t, n);
    },
    getPluginSettings(e) {
      return {
        options: BQ(e),
        values: Ig(e)
      };
    }
  };
}
_();
var Yf, Uf;
(Uf = (Yf = j).__VUE_DEVTOOLS_ENV__) != null || (Yf.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Ff = RQ(), Wf, Gf;
(Gf = (Wf = j).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (Wf.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Ff,
  get state() {
    return {
      ...gt,
      activeAppRecordId: ot.id,
      activeAppRecord: ot.value,
      appRecords: $o.value
    };
  },
  api: iC(Ff)
});
var En = j.__VUE_DEVTOOLS_KIT_CONTEXT__;
_();
tQ(nQ());
var Hf, Kf;
(Kf = (Hf = j).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (Hf.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
_();
function nC(i) {
  gt.highPerfModeEnabled = i ?? !gt.highPerfModeEnabled;
}
_();
_();
_();
function rC(i) {
  gt.devtoolsClientDetected = {
    ...gt.devtoolsClientDetected,
    ...i
  };
  const e = Object.values(gt.devtoolsClientDetected).some(Boolean);
  nC(!e);
}
var Jf, ed;
(ed = (Jf = j).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (Jf.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = rC);
_();
_();
_();
_();
_();
_();
_();
var sC = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(i, e) {
    this.keyToValue.set(i, e), this.valueToKey.set(e, i);
  }
  getByKey(i) {
    return this.keyToValue.get(i);
  }
  getByValue(i) {
    return this.valueToKey.get(i);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, zg = class {
  constructor(i) {
    this.generateIdentifier = i, this.kv = new sC();
  }
  register(i, e) {
    this.kv.getByValue(i) || (e || (e = this.generateIdentifier(i)), this.kv.set(e, i));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(i) {
    return this.kv.getByValue(i);
  }
  getValue(i) {
    return this.kv.getByKey(i);
  }
}, oC = class extends zg {
  constructor() {
    super((i) => i.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(i, e) {
    typeof e == "object" ? (e.allowProps && this.classToAllowedProps.set(i, e.allowProps), super.register(i, e.identifier)) : super.register(i, e);
  }
  getAllowedProps(i) {
    return this.classToAllowedProps.get(i);
  }
};
_();
_();
function lC(i) {
  if ("values" in Object)
    return Object.values(i);
  const e = [];
  for (const t in i)
    i.hasOwnProperty(t) && e.push(i[t]);
  return e;
}
function aC(i, e) {
  const t = lC(i);
  if ("find" in t)
    return t.find(e);
  const n = t;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (e(s))
      return s;
  }
}
function Sn(i, e) {
  Object.entries(i).forEach(([t, n]) => e(n, t));
}
function Ps(i, e) {
  return i.indexOf(e) !== -1;
}
function td(i, e) {
  for (let t = 0; t < i.length; t++) {
    const n = i[t];
    if (e(n))
      return n;
  }
}
var uC = class {
  constructor() {
    this.transfomers = {};
  }
  register(i) {
    this.transfomers[i.name] = i;
  }
  findApplicable(i) {
    return aC(this.transfomers, (e) => e.isApplicable(i));
  }
  findByName(i) {
    return this.transfomers[i];
  }
};
_();
_();
var cC = (i) => Object.prototype.toString.call(i).slice(8, -1), qg = (i) => typeof i > "u", hC = (i) => i === null, xr = (i) => typeof i != "object" || i === null || i === Object.prototype ? !1 : Object.getPrototypeOf(i) === null ? !0 : Object.getPrototypeOf(i) === Object.prototype, ka = (i) => xr(i) && Object.keys(i).length === 0, bi = (i) => Array.isArray(i), fC = (i) => typeof i == "string", dC = (i) => typeof i == "number" && !isNaN(i), pC = (i) => typeof i == "boolean", OC = (i) => i instanceof RegExp, wr = (i) => i instanceof Map, kr = (i) => i instanceof Set, Ng = (i) => cC(i) === "Symbol", mC = (i) => i instanceof Date && !isNaN(i.valueOf()), gC = (i) => i instanceof Error, id = (i) => typeof i == "number" && isNaN(i), yC = (i) => pC(i) || hC(i) || qg(i) || dC(i) || fC(i) || Ng(i), vC = (i) => typeof i == "bigint", bC = (i) => i === 1 / 0 || i === -1 / 0, SC = (i) => ArrayBuffer.isView(i) && !(i instanceof DataView), xC = (i) => i instanceof URL;
_();
var Xg = (i) => i.replace(/\./g, "\\."), dl = (i) => i.map(String).map(Xg).join("."), er = (i) => {
  const e = [];
  let t = "";
  for (let r = 0; r < i.length; r++) {
    let s = i.charAt(r);
    if (s === "\\" && i.charAt(r + 1) === ".") {
      t += ".", r++;
      continue;
    }
    if (s === ".") {
      e.push(t), t = "";
      continue;
    }
    t += s;
  }
  const n = t;
  return e.push(n), e;
};
_();
function Vt(i, e, t, n) {
  return {
    isApplicable: i,
    annotation: e,
    transform: t,
    untransform: n
  };
}
var Yg = [
  Vt(qg, "undefined", () => null, () => {
  }),
  Vt(vC, "bigint", (i) => i.toString(), (i) => typeof BigInt < "u" ? BigInt(i) : (console.error("Please add a BigInt polyfill."), i)),
  Vt(mC, "Date", (i) => i.toISOString(), (i) => new Date(i)),
  Vt(gC, "Error", (i, e) => {
    const t = {
      name: i.name,
      message: i.message
    };
    return e.allowedErrorProps.forEach((n) => {
      t[n] = i[n];
    }), t;
  }, (i, e) => {
    const t = new Error(i.message);
    return t.name = i.name, t.stack = i.stack, e.allowedErrorProps.forEach((n) => {
      t[n] = i[n];
    }), t;
  }),
  Vt(OC, "regexp", (i) => "" + i, (i) => {
    const e = i.slice(1, i.lastIndexOf("/")), t = i.slice(i.lastIndexOf("/") + 1);
    return new RegExp(e, t);
  }),
  Vt(
    kr,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (i) => [...i.values()],
    (i) => new Set(i)
  ),
  Vt(wr, "map", (i) => [...i.entries()], (i) => new Map(i)),
  Vt((i) => id(i) || bC(i), "number", (i) => id(i) ? "NaN" : i > 0 ? "Infinity" : "-Infinity", Number),
  Vt((i) => i === 0 && 1 / i === -1 / 0, "number", () => "-0", Number),
  Vt(xC, "URL", (i) => i.toString(), (i) => new URL(i))
];
function _o(i, e, t, n) {
  return {
    isApplicable: i,
    annotation: e,
    transform: t,
    untransform: n
  };
}
var Ug = _o((i, e) => Ng(i) ? !!e.symbolRegistry.getIdentifier(i) : !1, (i, e) => ["symbol", e.symbolRegistry.getIdentifier(i)], (i) => i.description, (i, e, t) => {
  const n = t.symbolRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown symbol");
  return n;
}), wC = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((i, e) => (i[e.name] = e, i), {}), Fg = _o(SC, (i) => ["typed-array", i.constructor.name], (i) => [...i], (i, e) => {
  const t = wC[e[1]];
  if (!t)
    throw new Error("Trying to deserialize unknown typed array");
  return new t(i);
});
function Wg(i, e) {
  return i != null && i.constructor ? !!e.classRegistry.getIdentifier(i.constructor) : !1;
}
var Gg = _o(Wg, (i, e) => ["class", e.classRegistry.getIdentifier(i.constructor)], (i, e) => {
  const t = e.classRegistry.getAllowedProps(i.constructor);
  if (!t)
    return { ...i };
  const n = {};
  return t.forEach((r) => {
    n[r] = i[r];
  }), n;
}, (i, e, t) => {
  const n = t.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), i);
}), Hg = _o((i, e) => !!e.customTransformerRegistry.findApplicable(i), (i, e) => ["custom", e.customTransformerRegistry.findApplicable(i).name], (i, e) => e.customTransformerRegistry.findApplicable(i).serialize(i), (i, e, t) => {
  const n = t.customTransformerRegistry.findByName(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown custom value");
  return n.deserialize(i);
}), kC = [Gg, Ug, Hg, Fg], nd = (i, e) => {
  const t = td(kC, (r) => r.isApplicable(i, e));
  if (t)
    return {
      value: t.transform(i, e),
      type: t.annotation(i, e)
    };
  const n = td(Yg, (r) => r.isApplicable(i, e));
  if (n)
    return {
      value: n.transform(i, e),
      type: n.annotation
    };
}, Kg = {};
Yg.forEach((i) => {
  Kg[i.annotation] = i;
});
var PC = (i, e, t) => {
  if (bi(e))
    switch (e[0]) {
      case "symbol":
        return Ug.untransform(i, e, t);
      case "class":
        return Gg.untransform(i, e, t);
      case "custom":
        return Hg.untransform(i, e, t);
      case "typed-array":
        return Fg.untransform(i, e, t);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    const n = Kg[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(i, t);
  }
};
_();
var tn = (i, e) => {
  const t = i.keys();
  for (; e > 0; )
    t.next(), e--;
  return t.next().value;
};
function Jg(i) {
  if (Ps(i, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Ps(i, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Ps(i, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var QC = (i, e) => {
  Jg(e);
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (kr(i))
      i = tn(i, +n);
    else if (wr(i)) {
      const r = +n, s = +e[++t] == 0 ? "key" : "value", o = tn(i, r);
      switch (s) {
        case "key":
          i = o;
          break;
        case "value":
          i = i.get(o);
          break;
      }
    } else
      i = i[n];
  }
  return i;
}, Pa = (i, e, t) => {
  if (Jg(e), e.length === 0)
    return t(i);
  let n = i;
  for (let s = 0; s < e.length - 1; s++) {
    const o = e[s];
    if (bi(n)) {
      const l = +o;
      n = n[l];
    } else if (xr(n))
      n = n[o];
    else if (kr(n)) {
      const l = +o;
      n = tn(n, l);
    } else if (wr(n)) {
      if (s === e.length - 2)
        break;
      const a = +o, u = +e[++s] == 0 ? "key" : "value", c = tn(n, a);
      switch (u) {
        case "key":
          n = c;
          break;
        case "value":
          n = n.get(c);
          break;
      }
    }
  }
  const r = e[e.length - 1];
  if (bi(n) ? n[+r] = t(n[+r]) : xr(n) && (n[r] = t(n[r])), kr(n)) {
    const s = tn(n, +r), o = t(s);
    s !== o && (n.delete(s), n.add(o));
  }
  if (wr(n)) {
    const s = +e[e.length - 2], o = tn(n, s);
    switch (+r == 0 ? "key" : "value") {
      case "key": {
        const a = t(o);
        n.set(a, n.get(o)), a !== o && n.delete(o);
        break;
      }
      case "value": {
        n.set(o, t(n.get(o)));
        break;
      }
    }
  }
  return i;
};
function Qa(i, e, t = []) {
  if (!i)
    return;
  if (!bi(i)) {
    Sn(i, (s, o) => Qa(s, e, [...t, ...er(o)]));
    return;
  }
  const [n, r] = i;
  r && Sn(r, (s, o) => {
    Qa(s, e, [...t, ...er(o)]);
  }), e(n, t);
}
function CC(i, e, t) {
  return Qa(e, (n, r) => {
    i = Pa(i, r, (s) => PC(s, n, t));
  }), i;
}
function $C(i, e) {
  function t(n, r) {
    const s = QC(i, er(r));
    n.map(er).forEach((o) => {
      i = Pa(i, o, () => s);
    });
  }
  if (bi(e)) {
    const [n, r] = e;
    n.forEach((s) => {
      i = Pa(i, er(s), () => i);
    }), r && Sn(r, t);
  } else
    Sn(e, t);
  return i;
}
var _C = (i, e) => xr(i) || bi(i) || wr(i) || kr(i) || Wg(i, e);
function AC(i, e, t) {
  const n = t.get(i);
  n ? n.push(e) : t.set(i, [e]);
}
function EC(i, e) {
  const t = {};
  let n;
  return i.forEach((r) => {
    if (r.length <= 1)
      return;
    e || (r = r.map((l) => l.map(String)).sort((l, a) => l.length - a.length));
    const [s, ...o] = r;
    s.length === 0 ? n = o.map(dl) : t[dl(s)] = o.map(dl);
  }), n ? ka(t) ? [n] : [n, t] : ka(t) ? void 0 : t;
}
var e0 = (i, e, t, n, r = [], s = [], o = /* @__PURE__ */ new Map()) => {
  var l;
  const a = yC(i);
  if (!a) {
    AC(i, r, e);
    const p = o.get(i);
    if (p)
      return n ? {
        transformedValue: null
      } : p;
  }
  if (!_C(i, t)) {
    const p = nd(i, t), O = p ? {
      transformedValue: p.value,
      annotations: [p.type]
    } : {
      transformedValue: i
    };
    return a || o.set(i, O), O;
  }
  if (Ps(s, i))
    return {
      transformedValue: null
    };
  const u = nd(i, t), c = (l = u == null ? void 0 : u.value) != null ? l : i, h = bi(c) ? [] : {}, f = {};
  Sn(c, (p, O) => {
    if (O === "__proto__" || O === "constructor" || O === "prototype")
      throw new Error(`Detected property ${O}. This is a prototype pollution risk, please remove it from your object.`);
    const m = e0(p, e, t, n, [...r, O], [...s, i], o);
    h[O] = m.transformedValue, bi(m.annotations) ? f[O] = m.annotations : xr(m.annotations) && Sn(m.annotations, (g, y) => {
      f[Xg(O) + "." + y] = g;
    });
  });
  const d = ka(f) ? {
    transformedValue: h,
    annotations: u ? [u.type] : void 0
  } : {
    transformedValue: h,
    annotations: u ? [u.type, f] : f
  };
  return a || o.set(i, d), d;
};
_();
_();
function t0(i) {
  return Object.prototype.toString.call(i).slice(8, -1);
}
function rd(i) {
  return t0(i) === "Array";
}
function TC(i) {
  if (t0(i) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(i);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function RC(i, e, t, n, r) {
  const s = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  s === "enumerable" && (i[e] = t), r && s === "nonenumerable" && Object.defineProperty(i, e, {
    value: t,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Ca(i, e = {}) {
  if (rd(i))
    return i.map((r) => Ca(r, e));
  if (!TC(i))
    return i;
  const t = Object.getOwnPropertyNames(i), n = Object.getOwnPropertySymbols(i);
  return [...t, ...n].reduce((r, s) => {
    if (rd(e.props) && !e.props.includes(s))
      return r;
    const o = i[s], l = Ca(o, e);
    return RC(r, s, l, i, e.nonenumerable), r;
  }, {});
}
var ye = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: i = !1 } = {}) {
    this.classRegistry = new oC(), this.symbolRegistry = new zg((e) => {
      var t;
      return (t = e.description) != null ? t : "";
    }), this.customTransformerRegistry = new uC(), this.allowedErrorProps = [], this.dedupe = i;
  }
  serialize(i) {
    const e = /* @__PURE__ */ new Map(), t = e0(i, e, this, this.dedupe), n = {
      json: t.transformedValue
    };
    t.annotations && (n.meta = {
      ...n.meta,
      values: t.annotations
    });
    const r = EC(e, this.dedupe);
    return r && (n.meta = {
      ...n.meta,
      referentialEqualities: r
    }), n;
  }
  deserialize(i) {
    const { json: e, meta: t } = i;
    let n = Ca(e);
    return t != null && t.values && (n = CC(n, t.values, this)), t != null && t.referentialEqualities && (n = $C(n, t.referentialEqualities)), n;
  }
  stringify(i) {
    return JSON.stringify(this.serialize(i));
  }
  parse(i) {
    return this.deserialize(JSON.parse(i));
  }
  registerClass(i, e) {
    this.classRegistry.register(i, e);
  }
  registerSymbol(i, e) {
    this.symbolRegistry.register(i, e);
  }
  registerCustom(i, e) {
    this.customTransformerRegistry.register({
      name: e,
      ...i
    });
  }
  allowErrorProps(...i) {
    this.allowedErrorProps.push(...i);
  }
};
ye.defaultInstance = new ye();
ye.serialize = ye.defaultInstance.serialize.bind(ye.defaultInstance);
ye.deserialize = ye.defaultInstance.deserialize.bind(ye.defaultInstance);
ye.stringify = ye.defaultInstance.stringify.bind(ye.defaultInstance);
ye.parse = ye.defaultInstance.parse.bind(ye.defaultInstance);
ye.registerClass = ye.defaultInstance.registerClass.bind(ye.defaultInstance);
ye.registerSymbol = ye.defaultInstance.registerSymbol.bind(ye.defaultInstance);
ye.registerCustom = ye.defaultInstance.registerCustom.bind(ye.defaultInstance);
ye.allowErrorProps = ye.defaultInstance.allowErrorProps.bind(ye.defaultInstance);
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
_();
var sd, od;
(od = (sd = j).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (sd.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var ld, ad;
(ad = (ld = j).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (ld.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var ud, cd;
(cd = (ud = j).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (ud.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var hd, fd;
(fd = (hd = j).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (hd.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var dd, pd;
(pd = (dd = j).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (dd.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var Od, md;
(md = (Od = j).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (Od.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
_();
_();
_();
_();
_();
_();
_();
/**
  * vee-validate v4.14.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function Ct(i) {
  return typeof i == "function";
}
function MC(i) {
  return i == null;
}
const xn = (i) => i !== null && !!i && typeof i == "object" && !Array.isArray(i);
function i0(i) {
  return Number(i) >= 0;
}
function ZC(i) {
  const e = parseFloat(i);
  return isNaN(e) ? i : e;
}
function DC(i) {
  const e = i.split(".");
  if (!e.length)
    return "";
  let t = String(e[0]);
  for (let n = 1; n < e.length; n++) {
    if (i0(e[n])) {
      t += `[${e[n]}]`;
      continue;
    }
    t += `.${e[n]}`;
  }
  return t;
}
const VC = {};
function LC(i) {
  return VC[i];
}
function gd(i, e, t) {
  typeof t.value == "object" && (t.value = Ti(t.value)), !t.enumerable || t.get || t.set || !t.configurable || !t.writable || e === "__proto__" ? Object.defineProperty(i, e, t) : i[e] = t.value;
}
function Ti(i) {
  if (typeof i != "object") return i;
  var e = 0, t, n, r, s = Object.prototype.toString.call(i);
  if (s === "[object Object]" ? r = Object.create(i.__proto__ || null) : s === "[object Array]" ? r = Array(i.length) : s === "[object Set]" ? (r = /* @__PURE__ */ new Set(), i.forEach(function(o) {
    r.add(Ti(o));
  })) : s === "[object Map]" ? (r = /* @__PURE__ */ new Map(), i.forEach(function(o, l) {
    r.set(Ti(l), Ti(o));
  })) : s === "[object Date]" ? r = /* @__PURE__ */ new Date(+i) : s === "[object RegExp]" ? r = new RegExp(i.source, i.flags) : s === "[object DataView]" ? r = new i.constructor(Ti(i.buffer)) : s === "[object ArrayBuffer]" ? r = i.slice(0) : s.slice(-6) === "Array]" && (r = new i.constructor(i)), r) {
    for (n = Object.getOwnPropertySymbols(i); e < n.length; e++)
      gd(r, n[e], Object.getOwnPropertyDescriptor(i, n[e]));
    for (e = 0, n = Object.getOwnPropertyNames(i); e < n.length; e++)
      Object.hasOwnProperty.call(r, t = n[e]) && r[t] === i[t] || gd(r, t, Object.getOwnPropertyDescriptor(i, t));
  }
  return r || i;
}
const n0 = Symbol("vee-validate-form"), BC = Symbol("vee-validate-field-instance"), ro = Symbol("Default empty value"), IC = typeof window < "u";
function $a(i) {
  return Ct(i) && !!i.__locatorRef;
}
function tr(i) {
  return !!i && Ct(i.parse) && i.__type === "VVTypedSchema";
}
function _a(i) {
  return !!i && Ct(i.validate);
}
function Vr(i) {
  return i === "checkbox" || i === "radio";
}
function jC(i) {
  return xn(i) || Array.isArray(i);
}
function Zu(i) {
  return /^\[.+\]$/i.test(i);
}
function zC(i) {
  return r0(i) && i.multiple;
}
function r0(i) {
  return i.tagName === "SELECT";
}
function qC(i, e) {
  const t = ![!1, null, void 0, 0].includes(e.multiple) && !Number.isNaN(e.multiple);
  return i === "select" && "multiple" in e && t;
}
function NC(i, e) {
  return !qC(i, e) && e.type !== "file" && !Vr(e.type);
}
function XC(i) {
  return i ? !!(typeof Event < "u" && Ct(Event) && i instanceof Event || i && i.srcElement) : !1;
}
function yd(i, e) {
  return e in i && i[e] !== ro;
}
function yt(i, e) {
  if (i === e)
    return !0;
  if (i && e && typeof i == "object" && typeof e == "object") {
    if (i.constructor !== e.constructor)
      return !1;
    var t, n, r;
    if (Array.isArray(i)) {
      if (t = i.length, t != e.length)
        return !1;
      for (n = t; n-- !== 0; )
        if (!yt(i[n], e[n]))
          return !1;
      return !0;
    }
    if (i instanceof Map && e instanceof Map) {
      if (i.size !== e.size)
        return !1;
      for (n of i.entries())
        if (!e.has(n[0]))
          return !1;
      for (n of i.entries())
        if (!yt(n[1], e.get(n[0])))
          return !1;
      return !0;
    }
    if (bd(i) && bd(e))
      return !(i.size !== e.size || i.name !== e.name || i.lastModified !== e.lastModified || i.type !== e.type);
    if (i instanceof Set && e instanceof Set) {
      if (i.size !== e.size)
        return !1;
      for (n of i.entries())
        if (!e.has(n[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(i) && ArrayBuffer.isView(e)) {
      if (t = i.length, t != e.length)
        return !1;
      for (n = t; n-- !== 0; )
        if (i[n] !== e[n])
          return !1;
      return !0;
    }
    if (i.constructor === RegExp)
      return i.source === e.source && i.flags === e.flags;
    if (i.valueOf !== Object.prototype.valueOf)
      return i.valueOf() === e.valueOf();
    if (i.toString !== Object.prototype.toString)
      return i.toString() === e.toString();
    if (r = Object.keys(i), t = r.length - vd(i, r), t !== Object.keys(e).length - vd(e, Object.keys(e)))
      return !1;
    for (n = t; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, r[n]))
        return !1;
    for (n = t; n-- !== 0; ) {
      var s = r[n];
      if (!yt(i[s], e[s]))
        return !1;
    }
    return !0;
  }
  return i !== i && e !== e;
}
function vd(i, e) {
  let t = 0;
  for (let r = e.length; r-- !== 0; ) {
    var n = e[r];
    i[n] === void 0 && t++;
  }
  return t;
}
function bd(i) {
  return IC ? i instanceof File : !1;
}
function s0(i) {
  return Zu(i) ? i.replace(/\[|\]/gi, "") : i;
}
function wn(i, e, t) {
  return i ? Zu(e) ? i[s0(e)] : (e || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r, s) => jC(r) && s in r ? r[s] : t, i) : t;
}
function YC(i, e, t) {
  if (Zu(e)) {
    i[s0(e)] = t;
    return;
  }
  const n = e.split(/\.|\[(\d+)\]/).filter(Boolean);
  let r = i;
  for (let s = 0; s < n.length; s++) {
    if (s === n.length - 1) {
      r[n[s]] = t;
      return;
    }
    (!(n[s] in r) || MC(r[n[s]])) && (r[n[s]] = i0(n[s + 1]) ? [] : {}), r = r[n[s]];
  }
}
function o0(i) {
  return Object.keys(i);
}
function l0(i, e = void 0) {
  const t = Vi();
  return (t == null ? void 0 : t.provides[i]) || Si(i, e);
}
function Sd(i, e, t) {
  if (Array.isArray(i)) {
    const n = [...i], r = n.findIndex((s) => yt(s, e));
    return r >= 0 ? n.splice(r, 1) : n.push(e), n;
  }
  return yt(i, e) ? t : e;
}
function UC(i, e) {
  let t, n;
  return function(...r) {
    const s = this;
    return t || (t = !0, setTimeout(() => t = !1, e), n = i.apply(s, r)), n;
  };
}
function FC(i, e) {
  return xn(e) && e.number ? ZC(i) : i;
}
function xd(i, e) {
  let t;
  return async function(...r) {
    const s = i(...r);
    t = s;
    const o = await s;
    return s !== t ? o : (t = void 0, e(o, r));
  };
}
function WC(i) {
  return Array.isArray(i) ? i : i ? [i] : [];
}
function GC(i, e, t) {
  return e.slots.default ? typeof i == "string" || !i ? e.slots.default(t()) : {
    default: () => {
      var n, r;
      return (r = (n = e.slots).default) === null || r === void 0 ? void 0 : r.call(n, t());
    }
  } : e.slots.default;
}
function pl(i) {
  if (a0(i))
    return i._value;
}
function a0(i) {
  return "_value" in i;
}
function HC(i) {
  return i.type === "number" || i.type === "range" ? Number.isNaN(i.valueAsNumber) ? i.value : i.valueAsNumber : i.value;
}
function u0(i) {
  if (!XC(i))
    return i;
  const e = i.target;
  if (Vr(e.type) && a0(e))
    return pl(e);
  if (e.type === "file" && e.files) {
    const t = Array.from(e.files);
    return e.multiple ? t : t[0];
  }
  if (zC(e))
    return Array.from(e.options).filter((t) => t.selected && !t.disabled).map(pl);
  if (r0(e)) {
    const t = Array.from(e.options).find((n) => n.selected);
    return t ? pl(t) : e.value;
  }
  return HC(e);
}
function c0(i) {
  const e = {};
  return Object.defineProperty(e, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), i ? xn(i) && i._$$isNormalized ? i : xn(i) ? Object.keys(i).reduce((t, n) => {
    const r = KC(i[n]);
    return i[n] !== !1 && (t[n] = wd(r)), t;
  }, e) : typeof i != "string" ? e : i.split("|").reduce((t, n) => {
    const r = JC(n);
    return r.name && (t[r.name] = wd(r.params)), t;
  }, e) : e;
}
function KC(i) {
  return i === !0 ? [] : Array.isArray(i) || xn(i) ? i : [i];
}
function wd(i) {
  const e = (t) => typeof t == "string" && t[0] === "@" ? e$(t.slice(1)) : t;
  return Array.isArray(i) ? i.map(e) : i instanceof RegExp ? [i] : Object.keys(i).reduce((t, n) => (t[n] = e(i[n]), t), {});
}
const JC = (i) => {
  let e = [];
  const t = i.split(":")[0];
  return i.includes(":") && (e = i.split(":").slice(1).join(":").split(",")), { name: t, params: e };
};
function e$(i) {
  const e = (t) => {
    var n;
    return (n = wn(t, i)) !== null && n !== void 0 ? n : t[i];
  };
  return e.__locatorRef = i, e;
}
function t$(i) {
  return Array.isArray(i) ? i.filter($a) : o0(i).filter((e) => $a(i[e])).map((e) => i[e]);
}
const i$ = {
  generateMessage: ({ field: i }) => `${i} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let n$ = Object.assign({}, i$);
const Du = () => n$;
async function r$(i, e, t = {}) {
  const n = t == null ? void 0 : t.bails, r = {
    name: (t == null ? void 0 : t.name) || "{field}",
    rules: e,
    label: t == null ? void 0 : t.label,
    bails: n ?? !0,
    formData: (t == null ? void 0 : t.values) || {}
  }, s = await s$(r, i);
  return Object.assign(Object.assign({}, s), { valid: !s.errors.length });
}
async function s$(i, e) {
  const t = i.rules;
  if (tr(t) || _a(t))
    return a$(e, Object.assign(Object.assign({}, i), { rules: t }));
  if (Ct(t) || Array.isArray(t)) {
    const l = {
      field: i.label || i.name,
      name: i.name,
      label: i.label,
      form: i.formData,
      value: e
    }, a = Array.isArray(t) ? t : [t], u = a.length, c = [];
    for (let h = 0; h < u; h++) {
      const f = a[h], d = await f(e, l);
      if (!(typeof d != "string" && !Array.isArray(d) && d)) {
        if (Array.isArray(d))
          c.push(...d);
        else {
          const O = typeof d == "string" ? d : h0(l);
          c.push(O);
        }
        if (i.bails)
          return {
            errors: c
          };
      }
    }
    return {
      errors: c
    };
  }
  const n = Object.assign(Object.assign({}, i), { rules: c0(t) }), r = [], s = Object.keys(n.rules), o = s.length;
  for (let l = 0; l < o; l++) {
    const a = s[l], u = await u$(n, e, {
      name: a,
      params: n.rules[a]
    });
    if (u.error && (r.push(u.error), i.bails))
      return {
        errors: r
      };
  }
  return {
    errors: r
  };
}
function o$(i) {
  return !!i && i.name === "ValidationError";
}
function l$(i) {
  return {
    __type: "VVTypedSchema",
    async parse(t, n) {
      var r;
      try {
        return {
          output: await i.validate(t, { abortEarly: !1, context: (n == null ? void 0 : n.formData) || {} }),
          errors: []
        };
      } catch (s) {
        if (!o$(s))
          throw s;
        if (!(!((r = s.inner) === null || r === void 0) && r.length) && s.errors.length)
          return { errors: [{ path: s.path, errors: s.errors }] };
        const o = s.inner.reduce((l, a) => {
          const u = a.path || "";
          return l[u] || (l[u] = { errors: [], path: u }), l[u].errors.push(...a.errors), l;
        }, {});
        return { errors: Object.values(o) };
      }
    }
  };
}
async function a$(i, e) {
  const n = await (tr(e.rules) ? e.rules : l$(e.rules)).parse(i, { formData: e.formData }), r = [];
  for (const s of n.errors)
    s.errors.length && r.push(...s.errors);
  return {
    value: n.value,
    errors: r
  };
}
async function u$(i, e, t) {
  const n = LC(t.name);
  if (!n)
    throw new Error(`No such validator '${t.name}' exists.`);
  const r = c$(t.params, i.formData), s = {
    field: i.label || i.name,
    name: i.name,
    label: i.label,
    value: e,
    form: i.formData,
    rule: Object.assign(Object.assign({}, t), { params: r })
  }, o = await n(e, r, s);
  return typeof o == "string" ? {
    error: o
  } : {
    error: o ? void 0 : h0(s)
  };
}
function h0(i) {
  const e = Du().generateMessage;
  return e ? e(i) : "Field is invalid";
}
function c$(i, e) {
  const t = (n) => $a(n) ? n(e) : n;
  return Array.isArray(i) ? i.map(t) : Object.keys(i).reduce((n, r) => (n[r] = t(i[r]), n), {});
}
let kd = 0;
function h$(i, e) {
  const { value: t, initialValue: n, setInitialValue: r } = f$(i, e.modelValue, e.form);
  if (!e.form) {
    let f = function(d) {
      var p;
      "value" in d && (t.value = d.value), "errors" in d && u(d.errors), "touched" in d && (h.touched = (p = d.touched) !== null && p !== void 0 ? p : h.touched), "initialValue" in d && r(d.initialValue);
    };
    const { errors: a, setErrors: u } = O$(), c = kd >= Number.MAX_SAFE_INTEGER ? 0 : ++kd, h = p$(t, n, a, e.schema);
    return {
      id: c,
      path: i,
      value: t,
      initialValue: n,
      meta: h,
      flags: { pendingUnmount: { [c]: !1 }, pendingReset: !1 },
      errors: a,
      setState: f
    };
  }
  const s = e.form.createPathState(i, {
    bails: e.bails,
    label: e.label,
    type: e.type,
    validate: e.validate,
    schema: e.schema
  }), o = I(() => s.errors);
  function l(a) {
    var u, c, h;
    "value" in a && (t.value = a.value), "errors" in a && ((u = e.form) === null || u === void 0 || u.setFieldError(re(i), a.errors)), "touched" in a && ((c = e.form) === null || c === void 0 || c.setFieldTouched(re(i), (h = a.touched) !== null && h !== void 0 ? h : !1)), "initialValue" in a && r(a.initialValue);
  }
  return {
    id: Array.isArray(s.id) ? s.id[s.id.length - 1] : s.id,
    path: i,
    value: t,
    errors: o,
    meta: s,
    initialValue: n,
    flags: s.__flags,
    setState: l
  };
}
function f$(i, e, t) {
  const n = ie(re(e));
  function r() {
    return t ? wn(t.initialValues.value, re(i), re(n)) : re(n);
  }
  function s(u) {
    if (!t) {
      n.value = u;
      return;
    }
    t.setFieldInitialValue(re(i), u, !0);
  }
  const o = I(r);
  if (!t)
    return {
      value: ie(r()),
      initialValue: o,
      setInitialValue: s
    };
  const l = d$(e, t, o, i);
  return t.stageInitialValue(re(i), l, !0), {
    value: I({
      get() {
        return wn(t.values, re(i));
      },
      set(u) {
        t.setFieldValue(re(i), u, !1);
      }
    }),
    initialValue: o,
    setInitialValue: s
  };
}
function d$(i, e, t, n) {
  return lo(i) ? re(i) : i !== void 0 ? i : wn(e.values, re(n), re(t));
}
function p$(i, e, t, n) {
  const r = I(() => {
    var o, l, a;
    return (a = (l = (o = _e(n)) === null || o === void 0 ? void 0 : o.describe) === null || l === void 0 ? void 0 : l.call(o).required) !== null && a !== void 0 ? a : !1;
  }), s = so({
    touched: !1,
    pending: !1,
    valid: !0,
    required: r,
    validated: !!re(t).length,
    initialValue: I(() => re(e)),
    dirty: I(() => !yt(re(i), re(e)))
  });
  return ae(t, (o) => {
    s.valid = !o.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), s;
}
function O$() {
  const i = ie([]);
  return {
    errors: i,
    setErrors: (e) => {
      i.value = WC(e);
    }
  };
}
const f0 = {}, ir = {}, nr = "vee-validate-inspector", nt = {
  error: 12405579,
  success: 448379,
  unknown: 5522283,
  white: 16777215,
  black: 0,
  blue: 218007,
  purple: 12157168,
  orange: 16099682,
  gray: 12304330
};
let $e = null, oi;
function m$(i) {
  process.env.NODE_ENV !== "production" && GQ({
    id: "vee-validate-devtools-plugin",
    label: "VeeValidate Plugin",
    packageName: "vee-validate",
    homepage: "https://vee-validate.logaretm.com/v4",
    app: i,
    logo: "https://vee-validate.logaretm.com/v4/logo.png"
  }, (e) => {
    oi = e, e.addInspector({
      id: nr,
      icon: "rule",
      label: "vee-validate",
      noSelectionText: "Select a vee-validate node to inspect",
      actions: [
        {
          icon: "done_outline",
          tooltip: "Validate selected item",
          action: async () => {
            if (!$e) {
              console.error("There is not a valid selected vee-validate node or component");
              return;
            }
            if ($e.type === "field") {
              await $e.field.validate();
              return;
            }
            if ($e.type === "form") {
              await $e.form.validate();
              return;
            }
            $e.type === "pathState" && await $e.form.validateField($e.state.path);
          }
        },
        {
          icon: "delete_sweep",
          tooltip: "Clear validation state of the selected item",
          action: () => {
            if (!$e) {
              console.error("There is not a valid selected vee-validate node or component");
              return;
            }
            if ($e.type === "field") {
              $e.field.resetField();
              return;
            }
            $e.type === "form" && $e.form.resetForm(), $e.type === "pathState" && $e.form.resetField($e.state.path);
          }
        }
      ]
    }), e.on.getInspectorTree((t) => {
      if (t.inspectorId !== nr)
        return;
      const n = Object.values(f0), r = Object.values(ir);
      t.rootNodes = [
        ...n.map(y$),
        ...r.map((s) => b$(s))
      ];
    }), e.on.getInspectorState((t) => {
      if (t.inspectorId !== nr)
        return;
      const { form: n, field: r, state: s, type: o } = S$(t.nodeId);
      if (e.unhighlightElement(), n && o === "form") {
        t.state = x$(n), $e = { type: "form", form: n }, e.highlightElement(n._vm);
        return;
      }
      if (s && o === "pathState" && n) {
        t.state = Pd(s), $e = { type: "pathState", state: s, form: n };
        return;
      }
      if (r && o === "field") {
        t.state = Pd({
          errors: r.errors.value,
          dirty: r.meta.dirty,
          valid: r.meta.valid,
          touched: r.meta.touched,
          value: r.value.value,
          initialValue: r.meta.initialValue
        }), $e = { field: r, type: "field" }, e.highlightElement(r._vm);
        return;
      }
      $e = null, e.unhighlightElement();
    });
  });
}
const Aa = UC(() => {
  setTimeout(async () => {
    await Pn(), oi == null || oi.sendInspectorState(nr), oi == null || oi.sendInspectorTree(nr);
  }, 100);
}, 100);
function g$(i) {
  const e = Vi();
  if (!oi) {
    const t = e == null ? void 0 : e.appContext.app;
    if (!t)
      return;
    m$(t);
  }
  ir[i.id] = Object.assign({}, i), ir[i.id]._vm = e, Rd(() => {
    delete ir[i.id], Aa();
  }), Aa();
}
function y$(i) {
  const { textColor: e, bgColor: t } = p0(i.meta.value.valid), n = {};
  Object.values(i.getAllPathStates()).forEach((o) => {
    YC(n, _e(o.path), v$(o, i));
  });
  function r(o, l = []) {
    const a = [...l].pop();
    return "id" in o ? Object.assign(Object.assign({}, o), { label: a || o.label }) : xn(o) ? {
      id: `${l.join(".")}`,
      label: a || "",
      children: Object.keys(o).map((u) => r(o[u], [...l, u]))
    } : Array.isArray(o) ? {
      id: `${l.join(".")}`,
      label: `${a}[]`,
      children: o.map((u, c) => r(u, [...l, String(c)]))
    } : { id: "", label: "", children: [] };
  }
  const { children: s } = r(n);
  return {
    id: Vu(i),
    label: "Form",
    children: s,
    tags: [
      {
        label: "Form",
        textColor: e,
        backgroundColor: t
      },
      {
        label: `${i.getAllPathStates().length} fields`,
        textColor: nt.white,
        backgroundColor: nt.unknown
      }
    ]
  };
}
function v$(i, e) {
  return {
    id: Vu(e, i),
    label: _e(i.path),
    tags: d0(i.multiple, i.fieldsCount, i.type, i.valid, e)
  };
}
function b$(i, e) {
  return {
    id: Vu(e, i),
    label: re(i.name),
    tags: d0(!1, 1, i.type, i.meta.valid, e)
  };
}
function d0(i, e, t, n, r) {
  const { textColor: s, bgColor: o } = p0(n);
  return [
    i ? void 0 : {
      label: "Field",
      textColor: s,
      backgroundColor: o
    },
    r ? void 0 : {
      label: "Standalone",
      textColor: nt.black,
      backgroundColor: nt.gray
    },
    t === "checkbox" ? {
      label: "Checkbox",
      textColor: nt.white,
      backgroundColor: nt.blue
    } : void 0,
    t === "radio" ? {
      label: "Radio",
      textColor: nt.white,
      backgroundColor: nt.purple
    } : void 0,
    i ? {
      label: "Multiple",
      textColor: nt.black,
      backgroundColor: nt.orange
    } : void 0
  ].filter(Boolean);
}
function Vu(i, e) {
  const t = e ? "path" in e ? "pathState" : "field" : "form", n = e ? "path" in e ? e == null ? void 0 : e.path : re(e == null ? void 0 : e.name) : "", r = { f: i == null ? void 0 : i.formId, ff: n, type: t };
  return btoa(encodeURIComponent(JSON.stringify(r)));
}
function S$(i) {
  try {
    const e = JSON.parse(decodeURIComponent(atob(i))), t = f0[e.f];
    if (!t && e.ff) {
      const r = ir[e.ff];
      return r ? {
        type: e.type,
        field: r
      } : {};
    }
    if (!t)
      return {};
    const n = t.getPathState(e.ff);
    return {
      type: e.type,
      form: t,
      state: n
    };
  } catch {
  }
  return {};
}
function Pd(i) {
  return {
    "Field state": [
      { key: "errors", value: i.errors },
      {
        key: "initialValue",
        value: i.initialValue
      },
      {
        key: "currentValue",
        value: i.value
      },
      {
        key: "touched",
        value: i.touched
      },
      {
        key: "dirty",
        value: i.dirty
      },
      {
        key: "valid",
        value: i.valid
      }
    ]
  };
}
function x$(i) {
  const { errorBag: e, meta: t, values: n, isSubmitting: r, isValidating: s, submitCount: o } = i;
  return {
    "Form state": [
      {
        key: "submitCount",
        value: o.value
      },
      {
        key: "isSubmitting",
        value: r.value
      },
      {
        key: "isValidating",
        value: s.value
      },
      {
        key: "touched",
        value: t.value.touched
      },
      {
        key: "dirty",
        value: t.value.dirty
      },
      {
        key: "valid",
        value: t.value.valid
      },
      {
        key: "initialValues",
        value: t.value.initialValues
      },
      {
        key: "currentValues",
        value: n
      },
      {
        key: "errors",
        value: o0(e.value).reduce((l, a) => {
          var u;
          const c = (u = e.value[a]) === null || u === void 0 ? void 0 : u[0];
          return c && (l[a] = c), l;
        }, {})
      }
    ]
  };
}
function p0(i) {
  return {
    bgColor: i ? nt.success : nt.error,
    textColor: i ? nt.black : nt.white
  };
}
function w$(i, e, t) {
  return Vr(t == null ? void 0 : t.type) ? P$(i, e, t) : O0(i, e, t);
}
function O0(i, e, t) {
  const { initialValue: n, validateOnMount: r, bails: s, type: o, checkedValue: l, label: a, validateOnValueUpdate: u, uncheckedValue: c, controlled: h, keepValueOnUnmount: f, syncVModel: d, form: p } = k$(t), O = h ? l0(n0) : void 0, m = p || O, g = I(() => DC(_e(i))), y = I(() => {
    if (_e(m == null ? void 0 : m.schema))
      return;
    const H = re(e);
    return _a(H) || tr(H) || Ct(H) || Array.isArray(H) ? H : c0(H);
  }), b = !Ct(y.value) && tr(_e(e)), { id: x, value: S, initialValue: k, meta: w, setState: P, errors: A, flags: U } = h$(g, {
    modelValue: n,
    form: m,
    bails: s,
    label: a,
    type: o,
    validate: y.value ? G : void 0,
    schema: b ? e : void 0
  }), L = I(() => A.value[0]);
  d && Q$({
    value: S,
    prop: d,
    handleChange: V,
    shouldValidate: () => u && !U.pendingReset
  });
  const T = (E, H = !1) => {
    w.touched = !0, H && $();
  };
  async function Q(E) {
    var H, we;
    if (m != null && m.validateSchema) {
      const { results: fe } = await m.validateSchema(E);
      return (H = fe[_e(g)]) !== null && H !== void 0 ? H : { valid: !0, errors: [] };
    }
    return y.value ? r$(S.value, y.value, {
      name: _e(g),
      label: _e(a),
      values: (we = m == null ? void 0 : m.values) !== null && we !== void 0 ? we : {},
      bails: s
    }) : { valid: !0, errors: [] };
  }
  const $ = xd(async () => (w.pending = !0, w.validated = !0, Q("validated-only")), (E) => (U.pendingUnmount[Oe.id] || (P({ errors: E.errors }), w.pending = !1, w.valid = E.valid), E)), z = xd(async () => Q("silent"), (E) => (w.valid = E.valid, E));
  function G(E) {
    return (E == null ? void 0 : E.mode) === "silent" ? z() : $();
  }
  function V(E, H = !0) {
    const we = u0(E);
    ce(we, H);
  }
  Ni(() => {
    if (r)
      return $();
    (!m || !m.validateSchema) && z();
  });
  function oe(E) {
    w.touched = E;
  }
  function J(E) {
    var H;
    const we = E && "value" in E ? E.value : k.value;
    P({
      value: Ti(we),
      initialValue: Ti(we),
      touched: (H = E == null ? void 0 : E.touched) !== null && H !== void 0 ? H : !1,
      errors: (E == null ? void 0 : E.errors) || []
    }), w.pending = !1, w.validated = !1, z();
  }
  const ue = Vi();
  function ce(E, H = !0) {
    S.value = ue && d ? FC(E, ue.props.modelModifiers) : E, (H ? $ : z)();
  }
  function he(E) {
    P({ errors: Array.isArray(E) ? E : [E] });
  }
  const xe = I({
    get() {
      return S.value;
    },
    set(E) {
      ce(E, u);
    }
  }), Oe = {
    id: x,
    name: g,
    label: a,
    value: xe,
    meta: w,
    errors: A,
    errorMessage: L,
    type: o,
    checkedValue: l,
    uncheckedValue: c,
    bails: s,
    keepValueOnUnmount: f,
    resetField: J,
    handleReset: () => J(),
    validate: G,
    handleChange: V,
    handleBlur: T,
    setState: P,
    setTouched: oe,
    setErrors: he,
    setValue: ce
  };
  if (oo(BC, Oe), lo(e) && typeof re(e) != "function" && ae(e, (E, H) => {
    yt(E, H) || (w.validated ? $() : z());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (Oe._vm = Vi(), ae(() => Object.assign(Object.assign({ errors: A.value }, w), { value: S.value }), Aa, {
    deep: !0
  }), m || g$(Oe)), !m)
    return Oe;
  const tt = I(() => {
    const E = y.value;
    return !E || Ct(E) || _a(E) || tr(E) || Array.isArray(E) ? {} : Object.keys(E).reduce((H, we) => {
      const fe = t$(E[we]).map((ni) => ni.__locatorRef).reduce((ni, Yi) => {
        const ki = wn(m.values, Yi) || m.values[Yi];
        return ki !== void 0 && (ni[Yi] = ki), ni;
      }, {});
      return Object.assign(H, fe), H;
    }, {});
  });
  return ae(tt, (E, H) => {
    if (!Object.keys(E).length)
      return;
    !yt(E, H) && (w.validated ? $() : z());
  }), Ad(() => {
    var E;
    const H = (E = _e(Oe.keepValueOnUnmount)) !== null && E !== void 0 ? E : _e(m.keepValuesOnUnmount), we = _e(g);
    if (H || !m || U.pendingUnmount[Oe.id]) {
      m == null || m.removePathState(we, x);
      return;
    }
    U.pendingUnmount[Oe.id] = !0;
    const fe = m.getPathState(we);
    if (Array.isArray(fe == null ? void 0 : fe.id) && (fe != null && fe.multiple) ? fe != null && fe.id.includes(Oe.id) : (fe == null ? void 0 : fe.id) === Oe.id) {
      if (fe != null && fe.multiple && Array.isArray(fe.value)) {
        const Yi = fe.value.findIndex((ki) => yt(ki, _e(Oe.checkedValue)));
        if (Yi > -1) {
          const ki = [...fe.value];
          ki.splice(Yi, 1), m.setFieldValue(we, ki);
        }
        Array.isArray(fe.id) && fe.id.splice(fe.id.indexOf(Oe.id), 1);
      } else
        m.unsetPathValue(_e(g));
      m.removePathState(we, x);
    }
  }), Oe;
}
function k$(i) {
  const e = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), t = !!(i != null && i.syncVModel), n = typeof (i == null ? void 0 : i.syncVModel) == "string" ? i.syncVModel : (i == null ? void 0 : i.modelPropName) || "modelValue", r = t && !("initialValue" in (i || {})) ? Ea(Vi(), n) : i == null ? void 0 : i.initialValue;
  if (!i)
    return Object.assign(Object.assign({}, e()), { initialValue: r });
  const s = "valueProp" in i ? i.valueProp : i.checkedValue, o = "standalone" in i ? !i.standalone : i.controlled, l = (i == null ? void 0 : i.modelPropName) || (i == null ? void 0 : i.syncVModel) || !1;
  return Object.assign(Object.assign(Object.assign({}, e()), i || {}), {
    initialValue: r,
    controlled: o ?? !0,
    checkedValue: s,
    syncVModel: l
  });
}
function P$(i, e, t) {
  const n = t != null && t.standalone ? void 0 : l0(n0), r = t == null ? void 0 : t.checkedValue, s = t == null ? void 0 : t.uncheckedValue;
  function o(l) {
    const a = l.handleChange, u = I(() => {
      const h = _e(l.value), f = _e(r);
      return Array.isArray(h) ? h.findIndex((d) => yt(d, f)) >= 0 : yt(f, h);
    });
    function c(h, f = !0) {
      var d, p;
      if (u.value === ((d = h == null ? void 0 : h.target) === null || d === void 0 ? void 0 : d.checked)) {
        f && l.validate();
        return;
      }
      const O = _e(i), m = n == null ? void 0 : n.getPathState(O), g = u0(h);
      let y = (p = _e(r)) !== null && p !== void 0 ? p : g;
      n && (m != null && m.multiple) && m.type === "checkbox" ? y = Sd(wn(n.values, O) || [], y, void 0) : (t == null ? void 0 : t.type) === "checkbox" && (y = Sd(_e(l.value), y, _e(s))), a(y, f);
    }
    return Object.assign(Object.assign({}, l), {
      checked: u,
      checkedValue: r,
      uncheckedValue: s,
      handleChange: c
    });
  }
  return o(O0(i, e, t));
}
function Q$({ prop: i, value: e, handleChange: t, shouldValidate: n }) {
  const r = Vi();
  if (!r || !i) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const s = typeof i == "string" ? i : "modelValue", o = `update:${s}`;
  s in r.props && (ae(e, (l) => {
    yt(l, Ea(r, s)) || r.emit(o, l);
  }), ae(() => Ea(r, s), (l) => {
    if (l === ro && e.value === void 0)
      return;
    const a = l === ro ? void 0 : l;
    yt(a, e.value) || t(a, n());
  }));
}
function Ea(i, e) {
  if (i)
    return i.props[e];
}
const C$ = /* @__PURE__ */ Ra({
  name: "Field",
  inheritAttrs: !1,
  props: {
    as: {
      type: [String, Object],
      default: void 0
    },
    name: {
      type: String,
      required: !0
    },
    rules: {
      type: [Object, String, Function],
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: !1
    },
    validateOnBlur: {
      type: Boolean,
      default: void 0
    },
    validateOnChange: {
      type: Boolean,
      default: void 0
    },
    validateOnInput: {
      type: Boolean,
      default: void 0
    },
    validateOnModelUpdate: {
      type: Boolean,
      default: void 0
    },
    bails: {
      type: Boolean,
      default: () => Du().bails
    },
    label: {
      type: String,
      default: void 0
    },
    uncheckedValue: {
      type: null,
      default: void 0
    },
    modelValue: {
      type: null,
      default: ro
    },
    modelModifiers: {
      type: null,
      default: () => ({})
    },
    "onUpdate:modelValue": {
      type: null,
      default: void 0
    },
    standalone: {
      type: Boolean,
      default: !1
    },
    keepValue: {
      type: Boolean,
      default: void 0
    }
  },
  setup(i, e) {
    const t = Qi(i, "rules"), n = Qi(i, "name"), r = Qi(i, "label"), s = Qi(i, "uncheckedValue"), o = Qi(i, "keepValue"), { errors: l, value: a, errorMessage: u, validate: c, handleChange: h, handleBlur: f, setTouched: d, resetField: p, handleReset: O, meta: m, checked: g, setErrors: y, setValue: b } = w$(n, t, {
      validateOnMount: i.validateOnMount,
      bails: i.bails,
      standalone: i.standalone,
      type: e.attrs.type,
      initialValue: _$(i, e),
      // Only for checkboxes and radio buttons
      checkedValue: e.attrs.value,
      uncheckedValue: s,
      label: r,
      validateOnValueUpdate: i.validateOnModelUpdate,
      keepValueOnUnmount: o,
      syncVModel: !0
    }), x = function(U, L = !0) {
      h(U, L);
    }, S = I(() => {
      const { validateOnInput: A, validateOnChange: U, validateOnBlur: L, validateOnModelUpdate: T } = $$(i);
      function Q(V) {
        f(V, L), Ct(e.attrs.onBlur) && e.attrs.onBlur(V);
      }
      function $(V) {
        x(V, A), Ct(e.attrs.onInput) && e.attrs.onInput(V);
      }
      function z(V) {
        x(V, U), Ct(e.attrs.onChange) && e.attrs.onChange(V);
      }
      const G = {
        name: i.name,
        onBlur: Q,
        onInput: $,
        onChange: z
      };
      return G["onUpdate:modelValue"] = (V) => x(V, T), G;
    }), k = I(() => {
      const A = Object.assign({}, S.value);
      Vr(e.attrs.type) && g && (A.checked = g.value);
      const U = Qd(i, e);
      return NC(U, e.attrs) && (A.value = a.value), A;
    }), w = I(() => Object.assign(Object.assign({}, S.value), { modelValue: a.value }));
    function P() {
      return {
        field: k.value,
        componentField: w.value,
        value: a.value,
        meta: m,
        errors: l.value,
        errorMessage: u.value,
        validate: c,
        resetField: p,
        handleChange: x,
        handleInput: (A) => x(A, !1),
        handleReset: O,
        handleBlur: S.value.onBlur,
        setTouched: d,
        setErrors: y,
        setValue: b
      };
    }
    return e.expose({
      value: a,
      meta: m,
      errors: l,
      errorMessage: u,
      setErrors: y,
      setTouched: d,
      setValue: b,
      reset: p,
      validate: c,
      handleChange: h
    }), () => {
      const A = k0(Qd(i, e)), U = GC(A, e, P);
      return A ? Za(A, Object.assign(Object.assign({}, e.attrs), k.value), U) : U;
    };
  }
});
function Qd(i, e) {
  let t = i.as || "";
  return !i.as && !e.slots.default && (t = "input"), t;
}
function $$(i) {
  var e, t, n, r;
  const { validateOnInput: s, validateOnChange: o, validateOnBlur: l, validateOnModelUpdate: a } = Du();
  return {
    validateOnInput: (e = i.validateOnInput) !== null && e !== void 0 ? e : s,
    validateOnChange: (t = i.validateOnChange) !== null && t !== void 0 ? t : o,
    validateOnBlur: (n = i.validateOnBlur) !== null && n !== void 0 ? n : l,
    validateOnModelUpdate: (r = i.validateOnModelUpdate) !== null && r !== void 0 ? r : a
  };
}
function _$(i, e) {
  return Vr(e.attrs.type) ? yd(i, "modelValue") ? i.modelValue : void 0 : yd(i, "modelValue") ? i.modelValue : e.attrs.value;
}
const A$ = C$, E$ = {
  key: 0,
  class: "s-form__item-label"
}, T$ = {
  key: 0,
  class: "required"
}, R$ = { class: "s-form__item-content-item" }, M$ = {
  key: 0,
  class: "s-form__item-append"
}, Z$ = {
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
    const e = i;
    return (t, n) => (Z(), F("div", {
      class: Fe(["s-form__item", i.className])
    }, [
      N(re(A$), {
        name: e.name
      }, {
        default: X(({ handleChange: r, errors: s }) => [
          i.showLabel ? (Z(), F("div", E$, [
            Y("span", null, le(i.label), 1),
            i.required ? (Z(), F("span", T$, "*")) : Be("", !0)
          ])) : Be("", !0),
          Y("div", {
            class: Fe(["s-form__item-content", [i.contentClass]])
          }, [
            Y("div", R$, [
              ge(t.$slots, "default", {
                handleChange: r,
                errors: s
              }, void 0, !0)
            ]),
            t.$slots["outer-append"] ? (Z(), F("div", M$, [
              ge(t.$slots, "outer-append", { errors: s }, void 0, !0)
            ])) : Be("", !0)
          ], 2)
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
}, aA = /* @__PURE__ */ et(Z$, [["__scopeId", "data-v-3a4d859e"]]), D$ = { class: "s-avatar" }, V$ = {
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
    return (n, r) => {
      const s = K("v-list-item-title"), o = K("v-list-item"), l = K("v-list"), a = K("v-menu");
      return Z(), F("div", D$, [
        N(a, { offset: [5, 0] }, {
          activator: X(({ props: u }) => [
            Y("div", mt({ class: "s-user-name" }, u), [
              Y("div", {
                class: Fe(["s-user-name__text", { fontWhite: t.value }])
              }, le(i.user.name), 3)
            ], 16)
          ]),
          default: X(() => [
            N(l, { class: "s-avatar-menu__list" }, {
              default: X(() => [
                (Z(!0), F(Xe, null, Qt(i.menuItems, (u, c) => (Z(), F(Xe, { key: c }, [
                  u.visable ? Be("", !0) : (Z(), ke(o, {
                    key: 0,
                    value: u.value,
                    onClick: (h) => n.$emit("click:menu-item", u.value)
                  }, {
                    default: X(() => [
                      N(s, null, {
                        default: X(() => [
                          De(le(u.title), 1)
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
        ge(n.$slots, "badge", {}, void 0, !0)
      ]);
    };
  }
}, L$ = /* @__PURE__ */ et(V$, [["__scopeId", "data-v-28ffadb1"]]), B$ = "[Image]", Cd = {
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
      console.log(B$, "onError"), t("error", o);
    }, r = () => {
    }, s = () => {
    };
    return (o, l) => {
      const a = K("v-img");
      return Z(), ke(a, mt({
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
        onLoad: r,
        onLoadstart: s
      }), {
        default: X(() => [
          ge(o.$slots, "default")
        ]),
        placeholder: X(() => [
          ge(o.$slots, "placeholder")
        ]),
        _: 3
      }, 16, ["class", "alt", "aspect-ratio", "cover", "eager", "gradient", "lazy-src", "options", "sizes", "src", "srcset", "transition", "width"]);
    };
  }
}, I$ = {
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
    }
  },
  emits: ["update:model-value", "click:confirm", "click:cancel"],
  setup(i, { emit: e }) {
    const t = e, n = (o) => {
      t("update:model-value", o);
    }, r = () => t("click:confirm"), s = () => t("update:cancel", !1);
    return (o, l) => {
      const a = K("v-card-text"), u = K("v-card-actions"), c = K("v-card"), h = K("v-dialog");
      return Z(), ke(ao, {
        to: `#${i.teleportId}`
      }, [
        N(h, {
          class: "s-confirm-modal",
          width: "446",
          persistent: "",
          "model-value": i.modelValue,
          "onUpdate:modelValue": n
        }, {
          default: X(() => [
            N(c, { "modal-height": "210" }, {
              default: X(() => [
                N(a, { class: "s-confirm-modal__text" }, {
                  default: X(() => [
                    De(le(i.contents), 1)
                  ]),
                  _: 1
                }),
                N(u, { class: "button-wrapper" }, {
                  default: X(() => [
                    N(re(sr), {
                      variant: "elevated",
                      color: "blue",
                      onClick: Hi(r, ["stop"]),
                      title: i.confirmButtonText
                    }, null, 8, ["title"]),
                    N(re(sr), {
                      variant: "outlined",
                      color: "blue",
                      onClick: s,
                      title: i.cancelButtonText
                    }, null, 8, ["title"])
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
}, uA = /* @__PURE__ */ et(I$, [["__scopeId", "data-v-ab3296e2"]]), j$ = { class: "button-wrapper" }, z$ = { class: "s-modal__content" }, q$ = { class: "s-modal__footer" }, N$ = {
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
    const t = i, n = e, r = () => {
      o.value = !1, n("update:model-value", !1);
    }, s = (l) => {
      o.value = l, n("update:model-value", l);
    }, o = ie(t.modelValue);
    return ae(() => t.modelValue, (l) => {
      o.value = l;
    }), (l, a) => {
      const u = K("v-icon"), c = K("v-card"), h = K("v-dialog");
      return Z(), ke(ao, {
        to: `#${i.teleportId}`
      }, [
        N(h, {
          "model-value": o.value,
          width: i.modalWidth,
          "scroll-strategy": "none",
          class: Fe(["s-modal", i.className]),
          size: i.size,
          persistent: "",
          "onUpdate:modelValue": s
        }, {
          activator: X(({ props: f }) => [
            ge(l.$slots, "buttons", P0(f, !0), void 0, !0)
          ]),
          default: X(() => [
            N(c, {
              class: Fe(["card-box", i.popupCardClass]),
              height: i.modalHeight,
              "min-height": i.modalHeight,
              "no-line": ""
            }, Da({
              append: X(() => [
                Y("div", q$, [
                  ge(l.$slots, "footer", {}, void 0, !0)
                ])
              ]),
              _: 2
            }, [
              i.hideHeader ? void 0 : {
                name: "prepend",
                fn: X(() => [
                  Y("div", {
                    class: Fe(["s-modal__title", { "s-modal__title--light": i.isWhite, "s-modal__title--dark": !i.isWhite }])
                  }, [
                    Y("span", null, le(i.title), 1),
                    Y("div", j$, [
                      ge(l.$slots, "header-btn-append", {}, void 0, !0),
                      N(re(sr), {
                        class: "modal--cancel",
                        elevation: "0",
                        dense: "",
                        variant: "text",
                        "max-width": "24px",
                        height: "24px",
                        onClick: r
                      }, {
                        default: X(() => [
                          N(u, {
                            color: i.isWhite ? "#1A3350" : "#fff",
                            size: "x-large"
                          }, {
                            default: X(() => a[0] || (a[0] = [
                              De("mdi-close")
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
                fn: X(() => [
                  Y("div", z$, [
                    ge(l.$slots, "default", {}, void 0, !0)
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
}, cA = /* @__PURE__ */ et(N$, [["__scopeId", "data-v-25cb6139"]]), X$ = {
  style: { width: "0", height: "0", position: "absolute" },
  "aria-hidden": "true",
  focusable: "false"
}, Y$ = ["viewBox"], us = 20, U$ = {
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
    const e = i, t = I(() => Math.max(0, Math.min(100, parseFloat(0)))), n = 2 * Math.PI * us, r = (a, u = "px") => {
      if (!(a === null || a === ""))
        return isNaN(a) ? String(a) : isFinite(a) ? `${Number(a)}${u}` : void 0;
    }, s = I(() => us / (1 - e.width / e.size) * 2), o = I(() => e.width / e.size * s.value), l = I(() => r((100 - t.value) / 100 * n));
    return Ni(() => {
    }), (a, u) => (Z(), F("div", {
      class: "s-progress-circular",
      style: Jt({ height: i.size + "px", width: i.size + "px", "--stroke-width": i.width + "px" })
    }, [
      (Z(), F("svg", X$, u[0] || (u[0] = [
        Y("linearGradient", { id: "gradientColor" }, [
          Y("stop", {
            offset: "0%",
            "stop-color": "#1B75BB"
          }),
          Y("stop", {
            offset: "100%",
            "stop-color": "#7C0F80"
          })
        ], -1)
      ]))),
      (Z(), F("svg", {
        class: "s-progress-circular__wrapper",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${s.value} ${s.value}`
      }, [
        Y("circle", {
          class: "s-progress-circular__underlay",
          cx: "50%",
          cy: "50%",
          fill: "transparent",
          r: us,
          style: Jt({
            strokeWidth: o.value,
            strokeDasharray: n,
            strokeDashoffset: 0
          })
        }, null, 4),
        Y("circle", {
          class: "s-progress-circular__overlay",
          fill: "transparent",
          cx: "50%",
          cy: "50%",
          r: us,
          style: Jt({
            strokeWidth: o.value,
            strokeDasharray: n,
            strokeDashoffset: l.value
          })
        }, null, 4)
      ], 8, Y$))
    ], 4));
  }
}, F$ = { class: "s-loading" }, W$ = { class: "s-loading__message" }, G$ = { class: "s-loading__spinner" }, hA = {
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
    return (e, t) => (Z(), ke(ao, {
      to: `#${i.teleportId}`
    }, [
      N(re(sy), {
        "model-value": i.modelValue,
        class: "custom-overlay",
        contained: "",
        persistent: "",
        "no-click-animation": "",
        scrim: "transparent",
        "z-index": "9999",
        offset: [0, 50]
      }, {
        default: X(() => [
          Y("div", F$, [
            Y("div", W$, le(i.loadingMessage), 1),
            Y("div", G$, [
              N(U$)
            ]),
            t[0] || (t[0] = Y("div", { class: "s-loading__text" }, "Please wait...", -1))
          ])
        ]),
        _: 1
      }, 8, ["model-value"])
    ], 8, ["to"]));
  }
}, H$ = /^[a-zA-Z]+$/, K$ = /^[a-zA-Z0-9-]+$/, J$ = /[^a-zA-Z0-9!@#$%^&*(),.?":;{}|<>~`'[\]\\/\-_+=]/g, e_ = /[\u3131-\u318E\uAC00-\uD7A3]/g, t_ = /(?:www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(?:\.[a-zA-Z]{2,})?$/, i_ = { REG_ALLOW_ENG: H$, REG_ALLOW_ENG_NUM_HYPHEN: K$, REG_ALLOW_ENG_NUM_AND_SPECIAL_CHARS: J$, REG_ALLOW_KOR: e_, REG_DOMAIN: t_ }, n_ = [void 0, null, "", "undefined"], r_ = (i) => {
  if (typeof i != "string")
    return !1;
  const e = i.trim();
  return !!n_.includes(e);
}, s_ = (i) => {
  if (typeof i != "string")
    throw Error("Invalid stringData type");
  return i.replace(i_.REG_ALLOW_KOR, "");
}, o_ = (i, e) => i.replace(/{([a-zA-Z]+)}/g, (t, n) => e[n]), l_ = {
  isEmpty: r_,
  removeKoreanCharacters: s_,
  resolvePathVariable: o_
}, a_ = { class: "s-card-table__wrapper" }, u_ = {
  key: 0,
  class: "s-card-table__header"
}, c_ = { class: "s-card-table__header-item" }, h_ = {
  key: 0,
  class: "s-card__body-icon--expand"
}, f_ = { key: 1 }, fA = {
  __name: "SCardTable",
  props: {
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
    itemPerPage: {
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
      type: Boolean,
      default: !1
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
    }
  },
  emits: ["update:page"],
  setup(i, { emit: e }) {
    const { isEmpty: t } = l_, n = i, r = e, s = ie(1), o = I(() => n.headers.filter((O) => O.key !== n.itemTitle)), l = ie([]), a = I(() => {
      if (typeof n.search == typeof [])
        return n.search.length === 0 ? n.datas : n.datas.filter((m) => n.search.some((y) => {
          var b, x;
          return y.key === "undefinedTag" ? !((b = m.tagList) != null && b.length) : `${y.value}` ? y.type === "tag" && ((x = m.tagList) != null && x.length) ? m.tagList.some((k) => `${k.tagKey}`.toLowerCase() === `${y.key}`.toLowerCase() && `${k.tagValue}`.toLowerCase() === `${y.value}`.toLowerCase()) : y.type !== "tag" ? typeof m[y.key] == typeof {} || typeof m[y.key] == typeof [] ? `${JSON.stringify(m[y.key])}`.toLowerCase().indexOf(`${y.value}`.toLowerCase()) > -1 : `${m[y.key]}`.toLowerCase().indexOf(`${y.value}`.toLowerCase()) > -1 : !1 : !0;
        }));
      if (n.search) {
        const O = n.headers.map((g) => g.key);
        return n.datas.filter(
          (g) => O.some((y) => g[y] ? typeof g[y] == typeof {} || typeof g[y] == typeof [] ? JSON.stringify(g[y]).indexOf(n.search) > -1 : g[y].toString().indexOf(n.search) > -1 : !1)
        );
      }
      return n.datas;
    }), u = () => {
      if (n.isPageRender)
        l.value = a.value;
      else {
        const O = (s.value - 1) * n.itemPerPage, m = s.value * n.itemPerPage;
        l.value = a.value.slice(O, m);
      }
    }, c = (O) => {
      s.value = O, r("update:page", O), u();
    }, h = (O) => {
      c(O);
    }, f = I(() => n.isPageRender ? n.options.pageCnt : Math.ceil(a.value.length / n.itemPerPage)), d = I(() => (O) => typeof O == "number" ? `${O}%` : O || "100px"), p = (O) => {
      console.log("onClickExpand"), O.showExpandRow = !O.showExpandRow;
    };
    return ae(
      () => n.search,
      () => {
        u();
      },
      { deep: !0 }
    ), ae(
      () => n.datas,
      () => {
        u();
      }
    ), ae(
      () => a.value,
      (O) => {
        n.setTotal(O.length);
      }
    ), Ni(() => {
      u();
    }), (O, m) => {
      const g = K("v-btn"), y = K("empty"), b = K("v-pagination");
      return Z(), F("div", {
        class: Fe(`s-card-table ${n.class}`)
      }, [
        Y("div", a_, [
          i.hiddenHeader ? Be("", !0) : (Z(), F("div", u_, [
            Y("ul", c_, [
              (Z(!0), F(Xe, null, Qt(o.value, (x, S) => (Z(), F("li", {
                key: "header-key--" + S,
                class: "s-card-table__header-item-title",
                style: Jt({
                  width: d.value(x.width),
                  justifyContent: x.align
                })
              }, le(x.title), 5))), 128))
            ])
          ])),
          l.value.length ? (Z(!0), F(Xe, { key: 1 }, Qt(l.value, (x, S) => (Z(), F("ul", {
            key: "content-row--" + S,
            class: "s-card-table__body"
          }, [
            Y("li", {
              class: Fe(`s-card-table__body-item ${i.showExpand ? "table-expand_header" : "table-expand_body"}`)
            }, [
              i.showExpand ? (Z(), F("div", h_, [
                ge(O.$slots, "table-expand", {
                  item: x,
                  expanded: x.showExpandRow,
                  onClickExpand: p
                }, () => [
                  N(g, {
                    density: "comfortable",
                    variant: "text",
                    icon: x.showExpandRow ? "mdi-chevron-up" : "mdi-chevron-down",
                    onClick: Hi((k) => p(x), ["stop", "prevent"])
                  }, null, 8, ["icon", "onClick"])
                ])
              ])) : Be("", !0),
              (Z(!0), F(Xe, null, Qt(o.value, (k, w) => {
                var P, A;
                return Z(), F("div", {
                  key: "content-row--" + S + "__col--" + w,
                  class: Fe(["s-card-table__body-wrapper", { "strong-text": (A = (P = i.options) == null ? void 0 : P.strongs) == null ? void 0 : A.includes(k.key) }]),
                  style: Jt({
                    width: d.value(k.width),
                    justifyContent: k.align === "d-none" ? "center" : k.align || "center"
                  })
                }, [
                  ge(O.$slots, `${k.key}`, { item: x }, () => [
                    De(le(re(t)(x[k.key]) ? "-" : x[k.key]), 1)
                  ])
                ], 6);
              }), 128)),
              x.showExpandRow ? (Z(), F("div", f_, [
                ge(O.$slots, "expanded-row", {
                  item: x,
                  columns: o.value
                })
              ])) : Be("", !0)
            ], 2)
          ]))), 128)) : (Z(), ke(y, {
            key: 2,
            description: i.noDataText
          }, {
            default: X(() => [
              ge(O.$slots, "empty-content")
            ]),
            _: 3
          }, 8, ["description"]))
        ]),
        i.scrolled ? Be("", !0) : (Z(), ke(b, {
          key: 0,
          modelValue: s.value,
          "onUpdate:modelValue": [
            m[0] || (m[0] = (x) => s.value = x),
            h
          ],
          class: "s-card-table__pagination",
          size: "small",
          "total-visible": 10,
          length: f.value,
          rounded: "circle"
        }, null, 8, ["modelValue", "length"]))
      ], 2);
    };
  }
}, d_ = ["onClick"], p_ = { class: "v-data-table-header__content" }, O_ = {
  key: 1,
  class: "d-flex justify-center align-center"
}, m_ = { class: "text-center no-data" }, g_ = ["width"], y_ = {
  key: 0,
  class: "text-center s-data-table-pagination"
}, v_ = {
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
    customSlotInfo: {
      type: Array,
      default: () => []
    },
    // customSlotInfo: Array,
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
    "update:model-value",
    "get-checkedbox-item"
  ],
  setup(i, { emit: e }) {
    const t = e, n = i, r = ie([]), s = ie(1), o = ie(1), l = ie([]), a = ie([]), u = (y) => {
      t("get-checkedbox-item", y), r.value = y, t("update:model-value", r.value);
    }, c = I(() => {
      var y, b;
      return h.value.length > 0 ? ((y = n.options) != null && y.pageCnt || (s.value = o.value), Math.ceil(h.value.length / n.itemsPerPage)) : ((b = n.options) != null && b.pageCnt || (o.value = n.lazyPage, s.value = 1), 1);
    }), h = I(() => {
      if (n.search) {
        const y = n.headers.map((x) => x.key);
        return n.items.filter(
          (x) => y.some((S) => x[S] ? typeof x[S] == typeof {} || typeof x[S] == typeof [] ? JSON.stringify(x[S]).indexOf(n.search) > -1 : x[S].toString().indexOf(n.search) > -1 : !1)
        );
      }
      return n.smartSearch.length ? n.items.filter((b) => n.smartSearch.some((S) => {
        var k, w;
        return S.key === "undefinedTag" ? !((k = b.tagList) != null && k.length) : S.value ? S.type === "tag" && ((w = b.tagList) != null && w.length) ? b.tagList.some((A) => A.tagKey.toLowerCase() === S.key.toLowerCase() && A.tagValue.toLowerCase() === S.value.toLowerCase()) : S.type !== "tag" ? typeof b[S.key] == "object" ? JSON.stringify(b[S.key]).toLowerCase().indexOf(S.value.toLowerCase()) > -1 : typeof b[S.key] == "number" ? b[S.key].toString().indexOf(S.value) > -1 : b[S.key].toLowerCase().indexOf(S.value.toLowerCase()) > -1 : !1 : !0;
      })) : n.items;
    }), f = ie(), d = I(() => {
      var y, b;
      return !!((b = (y = f.value) == null ? void 0 : y.$slots) != null && b["column.data-table-select"]);
    }), p = I(() => {
      var y, b;
      return !!((b = (y = f.value) == null ? void 0 : y.$slots) != null && b["item.data-table-select"]);
    }), O = (y) => {
      t("update:page", y);
    }, m = (y) => {
      l.value = y, s.value = 1, t("update:page", 1);
    }, g = (y) => {
      y.order && y.order === "asc" ? (y.order = "desc", l.value = [{ key: y.key, order: "desc" }]) : y.order && y.order === "desc" ? (y.order = "", l.value = []) : (y.order = "asc", l.value = [{ key: y.key, order: "asc" }]), n.lazyHeaders.map((b) => (b.key !== y.key && (b.order = null), b));
    };
    return ae(
      () => n.page,
      (y) => {
        s.value = y;
      }
    ), ae(
      () => s,
      (y) => {
        O(y);
      }
    ), ae(
      () => n.headers,
      (y) => {
        a.value = y;
      }
    ), Ni(() => {
      r.value = n.modelValue, s.value = n.page, a.value = [...n.headers];
    }), (y, b) => {
      const x = K("v-tooltip"), S = K("v-pagination"), k = K("v-data-table");
      return Z(), ke(k, {
        ref_key: "sDataTableRef",
        ref: f,
        class: Fe(["s-data-table", {
          "hide-footer": i.hideFooter,
          "fixed-table": i.fixedTable
        }]),
        "custom-filter": i.customFilter,
        "custom-key-filter": i.customKeyFilter,
        expanded: i.expanded,
        "expand-on-click": i.expandOnClick,
        "filter-keys": i.filterKeys,
        "filter-mode": i.filterMode,
        "fixed-footer": i.fixedFooter,
        "fixed-header": i.fixedHeader,
        "group-by": i.groupBy,
        headers: i.headers,
        height: i.height,
        "hide-no-data": i.hideNoData,
        "item-props": i.itemProps,
        items: h.value,
        "item-value": i.itemValue,
        "items-per-page": i.itemsPerPage,
        "item-selectable": i.itemSelectable,
        "model-value": r.value,
        "multi-sort": i.multiSort,
        "must-sort": i.mustSort,
        "no-data-text": i.noDataText,
        "no-filter": i.noFilter,
        page: s.value,
        "return-object": i.returnObject,
        search: i.search,
        "show-expand": i.showExpand,
        "show-select": i.showSelect,
        "select-strategy": i.selectStrategy,
        "sort-by": l.value,
        width: i.width,
        "hide-default-footer": "",
        density: i.density,
        "onUpdate:sortBy": m,
        "onUpdate:modelValue": u,
        "onClick:row": i.clickRow
      }, Da({
        "no-data": X(() => [
          Y("div", m_, le(i.noDataText), 1)
        ]),
        bottom: X(() => {
          var w;
          return [
            ge(y.$slots, "append-content", {}, void 0, !0),
            i.hideFooter ? Be("", !0) : (Z(), F("div", y_, [
              N(S, {
                ref: "paginateRef",
                modelValue: s.value,
                "onUpdate:modelValue": b[0] || (b[0] = (P) => s.value = P),
                size: "small",
                rounded: "",
                "active-color": "#1297F2",
                variant: "flat",
                "total-visible": 10,
                length: ((w = i.options) == null ? void 0 : w.pageCnt) || c.value
              }, null, 8, ["modelValue", "length"])
            ]))
          ];
        }),
        "expanded-row": X((w) => [
          ge(y.$slots, "expanded-row", Q0(C0(w)), void 0, !0)
        ]),
        _: 2
      }, [
        i.single ? {
          name: "headers",
          fn: X(() => [
            Y("tr", null, [
              b[1] || (b[1] = Y("th", { class: "v-data-table__td v-data-table__th v-data-table-column--align-center" }, [
                Y("div", { class: "v-data-table-header__content" }, "-")
              ], -1)),
              (Z(!0), F(Xe, null, Qt(a.value, (w, P) => (Z(), F("th", {
                key: P,
                class: Fe(["v-data-table__td v-data-table__th v-data-table__th--sortable v-data-table__th v-data-table__th--sortable", [`v-data-table-column--align-${w.align || "center"}`, `${!w.order || "v-data-table__th--sorted"}`]]),
                onClick: (A) => g(w)
              }, [
                Y("div", p_, [
                  De(le(w.title) + " ", 1),
                  Y("i", {
                    class: Fe(["mdi v-icon notranslate v-theme--light v-icon--size-default v-data-table-header__sort-icon", {
                      "mdi-arrow-up": w.order === "asc" || !w.order,
                      "mdi-arrow-down": w.order === "desc"
                    }]),
                    "aria-hidden": "true"
                  }, null, 2)
                ])
              ], 10, d_))), 128))
            ])
          ]),
          key: "0"
        } : void 0,
        Qt(i.headers, (w, P) => ({
          name: `item.${w.key}`,
          fn: X(({ item: A }) => [
            i.tooltip ? (Z(), ke(x, {
              key: 0,
              location: "bottom"
            }, {
              activator: X(({ props: U }) => [
                Y("span", mt(U, { class: "d-inline-block text-truncate sp-table-column__text" }), le(A[w.key] || "-"), 17)
              ]),
              default: X(() => [
                Y("span", null, le(A[w.key] || "-"), 1)
              ]),
              _: 2
            }, 1024)) : (Z(), F("div", O_, [
              ge(y.$slots, `item.${w.key}`, { item: A }, () => [
                De(le(A[w.key] || "-"), 1)
              ], !0)
            ]))
          ])
        })),
        d.value ? {
          name: "column.data-table-select",
          fn: X(({ column: w, selectAll: P }) => [
            ge(y.$slots, "column.data-table-select", {
              column: w,
              selectAll: P
            }, void 0, !0)
          ]),
          key: "1"
        } : void 0,
        p.value ? {
          name: "item.data-table-select",
          fn: X(({ item: w, isSelected: P, toggleSelect: A }) => [
            ge(y.$slots, "item.data-table-select", {
              item: w,
              isSelected: P,
              toggleSelect: A
            }, void 0, !0)
          ]),
          key: "2"
        } : void 0,
        i.footers && Object.keys(i.footers).length ? {
          name: "tfoot",
          fn: X(() => [
            Y("tr", null, [
              (Z(!0), F(Xe, null, Qt(i.headers, (w, P) => (Z(), F("th", {
                key: "foot__" + P,
                width: w.width,
                style: Jt({ textAlign: w.align || "start" })
              }, [
                i.customSlotFooter[w.key] ? ge(y.$slots, `${w.key}_footer`, {
                  key: 0,
                  props: i.footers
                }, void 0, !0) : (Z(), F(Xe, { key: 1 }, [
                  De(le(i.footers[w.key]), 1)
                ], 64))
              ], 12, g_))), 128))
            ])
          ]),
          key: "3"
        } : void 0
      ]), 1032, ["custom-filter", "custom-key-filter", "expanded", "expand-on-click", "filter-keys", "filter-mode", "fixed-footer", "fixed-header", "group-by", "headers", "height", "hide-no-data", "item-props", "items", "item-value", "items-per-page", "item-selectable", "model-value", "multi-sort", "must-sort", "no-data-text", "no-filter", "page", "return-object", "search", "show-expand", "show-select", "select-strategy", "sort-by", "width", "class", "density", "onClick:row"]);
    };
  }
}, dA = /* @__PURE__ */ et(v_, [["__scopeId", "data-v-7a247a97"]]), b_ = {}, S_ = {
  width: "190",
  height: "33",
  viewBox: "0 0 190 33",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function x_(i, e) {
  return Z(), F("svg", S_, e[0] || (e[0] = [
    $0('<g clip-path="url(#clip0_1478_17785)"><path d="M49.0053 0H33.0018C28.5846 0 25 3.58456 25 8.00176V24.0053C25 28.4225 28.5846 32.0071 33.0018 32.0071H49.0053C53.4225 32.0071 57.0071 28.4225 57.0071 24.0053V8.00176C57 3.58456 53.4225 0 49.0053 0ZM31.1389 20.2867C28.7751 20.2867 26.8558 18.3674 26.8558 16.0035C26.8558 13.6397 28.7751 11.7204 31.1389 11.7204C33.5028 11.7204 35.4221 13.6397 35.4221 16.0035C35.4221 18.3674 33.5028 20.2867 31.1389 20.2867ZM49.6827 20.2867C48.2573 20.2867 46.9943 19.5881 46.2181 18.5155C45.4701 17.7394 44.7292 18.1204 44.3694 18.4238C43.6002 19.5528 42.3019 20.2937 40.8342 20.2937C38.4703 20.2937 36.551 18.3744 36.551 16.0106C36.551 13.6467 38.4703 11.7275 40.8342 11.7275C42.2948 11.7275 43.5861 12.4613 44.3623 13.5832C44.7222 13.8867 45.4701 14.2889 46.2322 13.4845C47.0084 12.419 48.2644 11.7275 49.6827 11.7275C52.0465 11.7275 53.9658 13.6467 53.9658 16.0106C53.9658 18.3744 52.0465 20.2937 49.6827 20.2937V20.2867ZM54.3045 20.1032C53.8318 20.1032 53.4507 19.7222 53.4507 19.2494C53.4507 18.7766 53.8318 18.3956 54.3045 18.3956C54.7773 18.3956 55.1583 18.7766 55.1583 19.2494C55.1583 19.7222 54.7773 20.1032 54.3045 20.1032Z" fill="white"></path><path d="M106.935 3.85976C106.865 1.71466 105.101 0 102.941 0H99.6884C99.2721 0 98.9404 0.338699 98.9404 0.74796V7.24675C98.9404 7.66307 99.2791 7.99471 99.6884 7.99471H102.941C105.15 7.99471 106.942 6.20243 106.942 3.99383C106.942 3.97971 106.942 3.9656 106.942 3.95149C106.942 3.91621 106.942 3.88798 106.942 3.8527L106.935 3.85976ZM102.941 6.49879H100.443V1.50298H102.941C104.324 1.50298 105.439 2.62492 105.439 4.00088C105.439 5.37685 104.317 6.49879 102.941 6.49879Z" fill="white"></path><path d="M71.8443 6.83043C72.1548 6.51996 72.1548 6.01191 71.8443 5.70143C71.5339 5.39096 71.0399 5.39096 70.7224 5.69438C70.7224 5.69438 70.7224 5.69438 70.7153 5.70143C70.7153 5.70143 70.7153 5.70849 70.7083 5.71555C70.2778 6.14598 69.6781 6.40706 69.0218 6.40706C68.3656 6.40706 67.7588 6.13892 67.3213 5.70143C66.8908 5.26395 66.6157 4.67122 66.6157 4.00088C66.6157 3.33054 66.8767 2.74487 67.3072 2.31444C67.3072 2.31444 67.3072 2.31444 67.3213 2.30739L67.3283 2.29327C67.7588 1.86284 68.3585 1.60176 69.0148 1.60176C69.671 1.60176 70.2567 1.86284 70.6871 2.28622C70.6942 2.28622 70.7012 2.30033 70.7083 2.30739C70.7153 2.31444 70.7224 2.3215 70.7294 2.32856C71.0399 2.61786 71.5338 2.61081 71.8373 2.30739C72.1407 2.00397 72.1477 1.51709 71.8584 1.19956C71.8584 1.1925 71.8443 1.18545 71.8373 1.17839C71.8302 1.17133 71.8232 1.16428 71.809 1.15017C71.0893 0.437486 70.1014 0 69.0077 0C67.914 0 66.9261 0.437486 66.2064 1.15017C66.1993 1.15722 66.1923 1.16428 66.1782 1.17839C66.1782 1.17839 66.1641 1.1925 66.157 1.19956C65.4443 1.91929 65.0068 2.90717 65.0068 4.00088C65.0068 5.0946 65.4514 6.10364 66.1782 6.83043C66.905 7.55722 67.8999 8.00176 69.0077 8.00176C70.1155 8.00176 71.1105 7.55722 71.8373 6.83043H71.8443Z" fill="white"></path><path d="M85.9779 0C83.7693 0 81.9771 1.79228 81.9771 4.00088C81.9771 6.20948 83.7693 8.00176 85.9779 8.00176C88.1865 8.00176 89.9788 6.20948 89.9788 4.00088C89.9788 1.79228 88.1865 0 85.9779 0ZM85.9779 6.4C84.6514 6.4 83.5788 5.32745 83.5788 4.00088C83.5788 2.67431 84.6514 1.60176 85.9779 1.60176C87.3045 1.60176 88.3771 2.67431 88.3771 4.00088C88.3771 5.32745 87.3045 6.4 85.9779 6.4Z" fill="white"></path><path d="M80.7 6.4H77.4965C76.8332 6.4 76.2334 6.13186 75.7959 5.69438C75.3655 5.25689 75.0903 4.66417 75.0903 3.99383V0.797354C75.0903 0.352811 74.7304 0 74.293 0C74.0742 0 73.8696 0.091731 73.7285 0.232856C73.5803 0.37398 73.4956 0.578611 73.4956 0.797354V4.00088C73.4956 5.10871 73.9402 6.10364 74.6669 6.83043C75.3937 7.55722 76.3887 8.00176 77.4965 8.00176H80.7C80.9188 8.00176 81.1234 7.91003 81.2645 7.76891C81.4127 7.62778 81.4974 7.42315 81.4974 7.20441C81.4974 6.75987 81.1375 6.40706 80.7 6.40706V6.4Z" fill="white"></path><path d="M98.2206 0.232856C98.0794 0.0846748 97.8748 0 97.6561 0C97.2115 0 96.8587 0.359868 96.8587 0.797354V4.00088C96.8587 4.66417 96.5906 5.26395 96.1531 5.70143C95.7156 6.13186 95.1158 6.40706 94.4525 6.40706C93.7893 6.40706 93.1895 6.13892 92.752 5.70143C92.3216 5.26395 92.0464 4.67122 92.0464 4.00088V1.60176V0.80441C92.0464 0.359868 91.6865 0.00705623 91.249 0.00705623C91.0303 0.00705623 90.8256 0.0987872 90.6845 0.239912C90.5363 0.381036 90.4517 0.585667 90.4517 0.80441V4.00794C90.4517 5.11577 90.8962 6.11069 91.623 6.83749C92.3498 7.56428 93.3447 8.00882 94.4525 8.00882C95.5604 8.00882 96.5553 7.56428 97.2821 6.83749C98.0089 6.11069 98.4534 5.11577 98.4534 4.00794V0.797354C98.4534 0.578611 98.3617 0.37398 98.2206 0.232856Z" fill="white"></path><path d="M114.471 16.4689C114.182 16.1796 113.779 15.9961 113.342 15.9961H106.942C104.733 15.9961 102.736 16.8922 101.29 18.3388C99.8434 19.7853 98.9473 21.7822 98.9473 23.9908V30.3908C98.9473 30.8353 99.1237 31.2305 99.42 31.5198C99.7093 31.8091 100.112 31.9926 100.549 31.9926C101.431 31.9926 102.151 31.2728 102.151 30.3908V23.9908C102.151 22.6642 102.687 21.4647 103.555 20.5968C104.423 19.7288 105.622 19.1926 106.949 19.1926H113.349C114.231 19.1926 114.951 18.4728 114.951 17.5908C114.951 17.1463 114.774 16.7511 114.478 16.4618L114.471 16.4689Z" fill="white"></path><path d="M129.557 18.3458C129.557 18.3458 129.522 18.3106 129.501 18.2964C128.061 16.8781 126.086 16.0032 123.898 16.0032C121.711 16.0032 119.735 16.8781 118.296 18.2964C118.274 18.3106 118.26 18.3317 118.239 18.3458C118.218 18.36 118.204 18.3811 118.197 18.3952C116.779 19.8347 115.896 21.8175 115.896 24.0049C115.896 26.1924 116.793 28.2105 118.239 29.664C119.686 31.1106 121.683 32.0067 123.898 32.0067C125.698 32.0067 127.363 31.414 128.696 30.4049V30.1086C128.696 30.1086 128.718 30.1086 128.725 30.1086C128.704 30.2074 128.696 30.3062 128.696 30.412C128.696 31.3011 129.416 32.0138 130.298 32.0138C131.18 32.0138 131.9 31.294 131.9 30.412V24.012C131.9 21.8246 131.025 19.8418 129.6 18.4023C129.586 18.3882 129.571 18.367 129.557 18.3529V18.3458ZM127.321 27.3778C127.321 27.3778 127.292 27.406 127.278 27.4202C126.41 28.274 125.218 28.8032 123.905 28.8032C122.593 28.8032 121.379 28.2669 120.511 27.399C119.643 26.5311 119.107 25.3315 119.107 24.0049C119.107 22.6925 119.636 21.5 120.49 20.6321C120.504 20.6179 120.518 20.6038 120.532 20.5897C121.4 19.7359 122.593 19.2067 123.905 19.2067C125.218 19.2067 126.389 19.7218 127.257 20.5686C127.285 20.5968 127.313 20.625 127.342 20.6532C128.188 21.5211 128.704 22.6995 128.704 24.0049C128.704 25.3103 128.174 26.517 127.321 27.3778Z" fill="white"></path><path d="M157.825 16.0032C153.407 16.0032 149.823 19.5877 149.823 24.0049C149.823 28.4221 153.407 32.0067 157.825 32.0067C162.242 32.0067 165.826 28.4221 165.826 24.0049C165.826 19.5877 162.242 16.0032 157.825 16.0032ZM157.825 28.8032C155.171 28.8032 153.026 26.6581 153.026 24.0049C153.026 21.3518 155.171 19.2067 157.825 19.2067C160.478 19.2067 162.623 21.3589 162.623 24.0049C162.623 26.651 160.471 28.8032 157.825 28.8032Z" fill="white"></path><path d="M96.3788 16.0032H83.5788C82.6968 16.0032 81.9771 16.7229 81.9771 17.6049C81.9771 18.487 82.6968 19.2067 83.5788 19.2067H88.3771V30.4049C88.3771 31.287 89.0968 32.0067 89.9788 32.0067C90.8608 32.0067 91.5806 31.287 91.5806 30.4049V19.2067H96.3788C97.2608 19.2067 97.9806 18.487 97.9806 17.6049C97.9806 16.7229 97.2608 16.0032 96.3788 16.0032Z" fill="white"></path><path d="M147.261 16.0032H134.461C133.579 16.0032 132.859 16.7229 132.859 17.6049C132.859 18.487 133.579 19.2067 134.461 19.2067H139.259V30.4049C139.259 31.287 139.979 32.0067 140.861 32.0067C141.743 32.0067 142.463 31.287 142.463 30.4049V19.2067H147.261C148.143 19.2067 148.863 18.487 148.863 17.6049C148.863 16.7229 148.143 16.0032 147.261 16.0032Z" fill="white"></path><path d="M77.8139 20.8226C77.0024 20.3992 76.0781 20.1593 75.0902 20.1593H68.6902C68.4221 20.1593 68.2104 19.9476 68.2104 19.6794C68.2104 19.4113 68.4221 19.1996 68.6902 19.1996H76.2121C77.0942 19.1996 77.8139 18.4799 77.8139 17.5979C77.8139 16.7158 77.0942 15.9961 76.2121 15.9961H68.6902C66.8203 15.9961 65.275 17.3932 65.0421 19.1996C65.028 19.3125 65.0139 19.4325 65.0139 19.5524C65.0139 19.5948 65.0139 19.6371 65.0139 19.6794C65.0139 19.7218 65.0139 19.7641 65.0139 19.8065C65.0139 19.9264 65.028 20.0464 65.0421 20.1593C65.275 21.9657 66.8203 23.3628 68.6902 23.3628H75.0902C76.572 23.3628 77.7786 24.5553 77.8139 26.0301V26.1359C77.7857 27.6177 76.572 28.8032 75.0902 28.8032H66.6086C65.7266 28.8032 65.0068 29.5229 65.0068 30.4049C65.0068 31.2869 65.7266 32.0067 66.6086 32.0067H75.0902C76.071 32.0067 76.9954 31.7668 77.8139 31.3434C78.9006 30.7859 79.7896 29.8969 80.3541 28.8032C80.7775 27.9917 81.0174 27.0673 81.0174 26.0794C81.0174 25.0916 80.7775 24.1743 80.3541 23.3557C79.7896 22.2691 78.9006 21.38 77.8139 20.8155V20.8226Z" fill="white"></path></g><defs><clipPath id="clip0_1478_17785"><rect width="165.826" height="32.0137" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const w_ = /* @__PURE__ */ et(b_, [["render", x_]]), k_ = { class: "s-logo" }, P_ = ["src"], Q_ = {
  key: 0,
  class: "s-item-group"
}, C_ = {
  key: 1,
  class: "s-item-group"
}, $_ = { class: "s-avater__border" }, __ = { id: "side_menu_background" }, A_ = { class: "text-right" }, E_ = { id: "side_menu_wrapper" }, T_ = {
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
    const t = i, n = e, r = ie(t.showMenu), s = () => {
      r.value = !r.value, n("click:menu", r.value);
    }, o = () => {
      r.value = !1, n("click:menu", !1);
    }, l = (u) => {
      n("click:menu-item", u);
    }, a = (u) => {
      n("click:service-item", u);
    };
    return ae(
      () => t.showMenu,
      (u, c) => {
        u !== c && (r.value = u);
      }
    ), (u, c) => {
      const h = K("v-icon"), f = K("v-btn"), d = K("v-app-bar-title"), p = K("v-avatar"), O = K("v-app-bar"), m = K("v-list-item");
      return Z(), F(Xe, null, [
        N(O, {
          class: "s-header",
          color: "#1C2536",
          height: 68
        }, {
          prepend: X(() => [
            Y("div", k_, [
              Y("a", {
                "href.prevent.stop": "#",
                onClick: c[0] || (c[0] = (g) => u.$emit("click:logo"))
              }, [
                c[5] || (c[5] = Y("span", { class: "d-none" }, "main-logo", -1)),
                i.logoSrc ? (Z(), F("img", {
                  key: 0,
                  class: "s-logo__img",
                  src: i.logoSrc,
                  alt: "logo"
                }, null, 8, P_)) : (Z(), ke(w_, {
                  key: 1,
                  class: "s-logo__img"
                }))
              ])
            ]),
            N(d, {
              density: "compact",
              variant: "flat",
              size: "small",
              "background-color": "white"
            }, {
              default: X(() => [
                i.showMenuBtn ? (Z(), ke(f, {
                  key: 0,
                  class: "s-btn__menu",
                  text: "서비스",
                  onClick: s
                }, {
                  prepend: X(() => [
                    N(h, {
                      class: "s-btn__menu__icon",
                      variant: "text",
                      density: "compact",
                      icon: "mdi-menu"
                    })
                  ]),
                  _: 1
                })) : Be("", !0)
              ]),
              _: 1
            })
          ]),
          append: X(() => [
            i.isLoggedIn ? (Z(), F("div", C_, [
              ge(u.$slots, "inner-append", {}, void 0, !0),
              N(re(L$), {
                user: i.userInfo,
                "menu-items": i.userMenus,
                "class-name": { fontWhite: !0 },
                "onClick:menuItem": l
              }, {
                badge: X(() => [
                  N(p, null, {
                    default: X(() => [
                      Y("div", $_, [
                        i.userInfo.picture ? (Z(), ke(re(Cd), {
                          key: 0,
                          "lazy-src": "profile.svg",
                          "src-url": `data:image/${i.userInfo.picture.format};base64,${i.userInfo.picture.data}`
                        }, null, 8, ["src-url"])) : (Z(), ke(re(Cd), {
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
            ])) : (Z(), F("div", Q_, [
              Y("a", {
                class: "s-sign__btn",
                onKeypress: c[1] || (c[1] = Lu(Hi((g) => u.$emit("click:log-in"), ["ctrl"]), ["i"])),
                onClick: c[2] || (c[2] = Hi((g) => u.$emit("click:log-in"), ["stop"]))
              }, le(i.loginText), 33),
              Y("a", {
                class: "s-sign__btn",
                onKeypress: c[3] || (c[3] = Lu(Hi((g) => u.$emit("click:sign-up"), ["ctrl"]), ["i"])),
                onClick: c[4] || (c[4] = Hi((g) => u.$emit("click:sign-up"), ["stop"]))
              }, le(i.joinText), 33)
            ]))
          ]),
          _: 3
        }),
        Y("div", {
          class: Fe(["menu-back-ground", { show: r.value, hide: !r.value }])
        }, [
          Y("div", __, [
            Y("div", A_, [
              N(h, {
                icon: "mdi-close",
                onClick: o
              })
            ]),
            Y("div", E_, [
              De(le(i.serviceMenus) + " ", 1),
              (Z(!0), F(Xe, null, Qt(i.serviceMenus, (g, y) => (Z(), F(Xe, null, [
                g.accessible ? (Z(), ke(m, {
                  key: y,
                  class: "side-menu",
                  active: g.menuCode === i.activeMenuCode,
                  title: g.menuName,
                  onClick: (b) => a(g)
                }, null, 8, ["active", "title", "onClick"])) : Be("", !0)
              ], 64))), 256))
            ])
          ])
        ], 2)
      ], 64);
    };
  }
}, pA = /* @__PURE__ */ et(T_, [["__scopeId", "data-v-0c1602e3"]]), R_ = {}, M_ = { class: "footer-wrapper" };
function Z_(i, e) {
  const t = K("v-footer");
  return Z(), F("div", M_, [
    N(t, { class: "footer-contents" }, {
      default: X(() => e[0] || (e[0] = [
        De("Powered by STRATO Cloud Management Platform")
      ])),
      _: 1
    })
  ]);
}
const OA = /* @__PURE__ */ et(R_, [["render", Z_]]), D_ = { class: "s-title-area__content" }, V_ = { class: "s-title-area__title" }, L_ = {
  key: 0,
  class: "s-title-area__number"
}, B_ = { class: "s-title-area__buttons button-wrapper" }, I_ = {
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
    return (e, t) => (Z(), F("div", {
      class: Fe(["s-title-area", i.className])
    }, [
      Y("div", D_, [
        Y("div", V_, [
          De(le(i.title) + " ", 1),
          i.showCnt ? (Z(), F("span", L_, "(" + le(i.listCnt) + ")", 1)) : Be("", !0)
        ]),
        Y("div", B_, [
          ge(e.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}, mA = /* @__PURE__ */ et(I_, [["__scopeId", "data-v-b3956cdf"]]), j_ = { class: "s-accordion-wrapper" }, z_ = {
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
    const e = ie(null), t = ie(!1), n = ie("0px"), r = () => {
      t.value ? (n.value = `${e.value.scrollHeight}px`, requestAnimationFrame(() => {
        n.value = "0px", t.value = !1;
      })) : (n.value = `${e.value.scrollHeight}px`, t.value = !0);
    }, s = () => {
      t.value && (n.value = "auto");
    };
    return (o, l) => {
      const a = K("v-icon");
      return Z(), F("div", j_, [
        Y("div", {
          class: Fe(["title", { "title-bold": i.titleBold }])
        }, [
          De(le(i.title) + " ", 1),
          N(a, {
            class: "float-right",
            style: { top: "10px" },
            icon: "mdi-chevron-down",
            onClick: r
          })
        ], 2),
        Y("div", {
          ref_key: "accordion",
          ref: e,
          class: "s-accordion-contents",
          style: Jt({ height: n.value }),
          onTransitionend: s
        }, [
          ge(o.$slots, "default", {}, void 0, !0)
        ], 36)
      ]);
    };
  }
}, gA = /* @__PURE__ */ et(z_, [["__scopeId", "data-v-b11ead8c"]]), q_ = { id: "s-navi" }, N_ = { id: "s-menu-title-wrapper" }, X_ = { id: "s-menu-title" }, Y_ = {
  key: 0,
  id: "project_select_wrapper"
}, U_ = { class: "project_select" }, F_ = { id: "s-menu-wrapper" }, W_ = {
  key: 1,
  class: "s-navi-inner-menu-title"
}, G_ = {
  __name: "SNavi",
  props: {
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
    const t = { projectName: "전체", projectId: 0 }, n = () => {
      o.value = o.value.length ? o.value.splice(o.value.length - 1, 1) : o.value;
    }, r = i, s = e, o = ie([]), l = I(() => [{ ...t }, ...r.projectList]), a = (c) => {
      s("change:project", c);
    }, u = () => {
      r.firstMenuPath ? s("click:service-name", { path: r.firstMenuPath }) : r.menuPath ? s("click:service-name", { path: r.menuPath.menuUrl || "/" }) : s("click:service-name", { path: "/" });
    };
    return ae(
      () => r.routerPath,
      () => {
        var f;
        const c = ((f = r.menuPath) == null ? void 0 : f.subMenus) || [], h = r.routerPath;
        for (const d in c)
          if (h.indexOf(c[d].menuUrl) >= 0) {
            o.value = [c[d].idx];
            break;
          }
      },
      { immediate: !0 }
    ), (c, h) => {
      const f = K("v-select"), d = K("v-list-item"), p = K("RouterLink"), O = K("v-tooltip"), m = K("v-list-group"), g = K("v-list");
      return Z(), F("div", q_, [
        Y("div", N_, [
          Y("a", {
            "href.stop": "#",
            onClick: u
          }, [
            Y("div", X_, le(i.serviceName), 1)
          ])
        ]),
        i.projectList && i.projectList.length ? (Z(), F("div", Y_, [
          Y("div", U_, [
            N(f, {
              width: "238px",
              "model-value": i.selectedProject,
              variant: "outlined",
              density: "comfortable",
              items: l.value,
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
        ])) : Be("", !0),
        Y("div", F_, [
          i.menuPath && i.menuPath.subMenus && i.menuPath.subMenus.length ? (Z(), ke(g, {
            key: 0,
            opened: o.value,
            "onUpdate:opened": h[0] || (h[0] = (y) => o.value = y),
            class: "navi-menu"
          }, {
            default: X(() => [
              (Z(!0), F(Xe, null, Qt(i.menuPath.subMenus, (y) => (Z(), ke(m, {
                key: y.idx,
                value: y.idx
              }, {
                activator: X(({ props: b }) => [
                  N(d, mt({ ref_for: !0 }, b, {
                    height: "50px",
                    "active-class": "menu-active",
                    title: y.menuName || y.menuNameKr,
                    "append-icon": !y.subMenus || y.subMenus.length === 0 ? "" : o.value.includes(y.idx) ? "mdi-chevron-down" : "mdi-chevron-right",
                    onClick: n
                  }), null, 16, ["title", "append-icon"])
                ]),
                default: X(() => [
                  (Z(!0), F(Xe, null, Qt(y.subMenus, (b, x) => (Z(), ke(d, {
                    key: x,
                    class: Fe(["s-navi-inner-menu", {
                      disabled: i.selectedProject.projectId <= 0 && b.dependency === "PROJECT",
                      active: i.selectedProject.projectId > 0 || b.dependency !== "PROJECT"
                    }]),
                    value: b.idx,
                    "active-class": "menu-active",
                    "prepend-icon": "mdi-circle-small"
                  }, {
                    title: X(() => [
                      i.selectedProject.projectId > 0 ? (Z(), ke(p, {
                        key: 0,
                        class: "s-navi-inner-menu-title",
                        to: b.menuUrl
                      }, {
                        default: X(() => [
                          De(le(b.menuName || b.menuNameKr), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])) : (Z(), F("span", W_, [
                        De(le(b.menuName || b.menuNameKr) + " ", 1),
                        b.dependency === "PROJECT" ? (Z(), ke(O, {
                          key: 0,
                          activator: "parent",
                          location: "start"
                        }, {
                          default: X(() => [
                            De(le(i.dependencyTooltipMessage), 1)
                          ]),
                          _: 1
                        })) : Be("", !0)
                      ]))
                    ]),
                    _: 2
                  }, 1032, ["class", "value"]))), 128))
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["opened"])) : Be("", !0)
        ])
      ]);
    };
  }
}, yA = /* @__PURE__ */ et(G_, [["__scopeId", "data-v-d02be01e"]]);
export {
  gA as SAccordionMenu,
  iA as SAlert,
  L$ as SAvatar,
  sr as SBtn,
  fA as SCardTable,
  uA as SConfirm,
  dA as SDataTable,
  nA as SEmpty,
  tA as SFileInputBtn,
  OA as SFooter,
  aA as SFormItem,
  lA as SFormTable,
  hA as SGlobalProgress,
  pA as SHeader,
  Cd as SImg,
  cA as SModal,
  yA as SNavi,
  U$ as SProgressCircular,
  oA as SScriptEditor,
  eA as SShellScriptInput,
  mA as SSubHeader,
  J_ as STextCheckBoxInput,
  K_ as customTheme,
  i_ as regexUtil,
  l_ as stringUtil
};
